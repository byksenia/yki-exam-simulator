// Local server for the YKI exam simulator.
// Serves the static site from ./public and proxies rating requests to the Claude API,
// so the API key never reaches the browser.

import http from "node:http";
import https from "node:https";
import os from "node:os";
import net from "node:net";
import { execFileSync, spawn } from "node:child_process";
import fs from "node:fs";
import crypto from "node:crypto";
import path from "node:path";
import { fileURLToPath } from "node:url";
import Anthropic from "@anthropic-ai/sdk";

const ROOT = path.dirname(fileURLToPath(import.meta.url));
const PUBLIC = path.join(ROOT, "public");

if (fs.existsSync(path.join(ROOT, ".env"))) process.loadEnvFile(path.join(ROOT, ".env"));

const PORT = Number(process.env.PORT) || 5173;
// `npm run phone`: also reachable from other devices on the same Wi-Fi, plus an HTTPS port
// (phones only allow the microphone and speech recognition on HTTPS pages).
const PHONE = process.argv.includes("--phone");
const HTTPS_PORT = PORT + 1;
const hasKey = Boolean(process.env.ANTHROPIC_API_KEY || process.env.ANTHROPIC_AUTH_TOKEN);
const client = hasKey ? new Anthropic() : null;

// Without an API key, rating goes through the Claude Code CLI, which uses the Claude
// subscription you are signed in with (`claude auth login`).
function findClaudeCli() {
  try {
    return execFileSync("/bin/sh", ["-lc", "command -v claude"], { encoding: "utf8" }).trim() || null;
  } catch {
    return null;
  }
}
const CLAUDE_CLI = hasKey ? null : findClaudeCli();
const BACKEND = hasKey ? "api" : CLAUDE_CLI ? "claude-code" : "none";
const MODEL = process.env.YKI_MODEL || (BACKEND === "api" ? "claude-opus-5-5" : "opus");
// Model for quick interactive calls (the interviewer's follow-up questions).
const FAST_MODEL = process.env.YKI_FAST_MODEL || "claude-sonnet-5-5";

const MIME = {
  ".html": "text/html; charset=utf-8",
  ".js": "text/javascript; charset=utf-8",
  ".css": "text/css; charset=utf-8",
  ".json": "application/json; charset=utf-8",
  ".svg": "image/svg+xml",
  ".png": "image/png",
  ".ico": "image/x-icon",
  ".mp4": "audio/mp4",
};

function sendJson(res, status, body) {
  res.writeHead(status, { "Content-Type": MIME[".json"] });
  res.end(JSON.stringify(body));
}

async function readBody(req, limit = 2_000_000) {
  let size = 0;
  const chunks = [];
  for await (const chunk of req) {
    size += chunk.length;
    if (size > limit) throw Object.assign(new Error("Request too large"), { status: 413 });
    chunks.push(chunk);
  }
  return JSON.parse(Buffer.concat(chunks).toString("utf8"));
}

// One structured call to Claude: the browser sends the full rating prompt and the JSON
// schema the answer must follow; we return the parsed JSON.
async function askClaude({ prompt, schema, effort = "high", fast = false }) {
  const params = {
    // fast = short interactive calls (the interviewer's follow-up questions)
    model: fast ? "claude-sonnet-5-5" : MODEL,
    max_tokens: fast ? 2000 : 32000,
    thinking: { type: "adaptive" },
    output_config: { effort: fast ? "low" : effort, ...(schema ? { format: { type: "json_schema", schema } } : {}) },
    messages: [{ role: "user", content: prompt }],
  };
  let message;
  try {
    // Server-side fallback: if the model declines, the API re-runs the request on another model.
    message = await client.messages
      .stream({ ...params, fallbacks: "default" }, { headers: { "anthropic-beta": "server-side-fallback-2026-07-01" } })
      .finalMessage();
  } catch (err) {
    // Models or accounts without the fallback beta: retry once without it.
    if (!(err instanceof Anthropic.BadRequestError && /fallback/i.test(err.message))) throw err;
    message = await client.messages.stream(params).finalMessage();
  }
  if (message.stop_reason === "refusal") {
    throw Object.assign(new Error("Claude declined to rate this answer."), { status: 422 });
  }
  if (message.stop_reason === "max_tokens") {
    throw Object.assign(new Error("The rating was cut off (max_tokens)."), { status: 502 });
  }
  const text = message.content
    .filter((b) => b.type === "text")
    .map((b) => b.text)
    .join("");
  return schema ? JSON.parse(text) : text.trim();
}

const RATER_SYSTEM =
  "You are an experienced, certified YKI rater and teacher of Finnish as a second language. " +
  "Follow the rating instructions in the user's message exactly and answer only with the requested JSON.";

// `schema` → structured JSON answer; no schema → plain text (one round trip, faster).
// The CLI now and then exits without printing anything; such a run is retried once.
async function askClaudeCode(opts) {
  try {
    return await askClaudeCodeOnce(opts);
  } catch (e) {
    if (!e.noOutput) throw e;
    console.log("  claude exited without output; retrying once");
    return askClaudeCodeOnce(opts);
  }
}

function askClaudeCodeOnce({ prompt, schema, effort = "high", fast = false }) {
  const args = [
    "-p",
    "--output-format", "json",
    ...(schema ? ["--json-schema", JSON.stringify(schema)] : []),
    "--tools", "",
    "--no-session-persistence",
    "--system-prompt", RATER_SYSTEM,
    "--model", fast ? FAST_MODEL : MODEL,
    "--effort", fast ? "low" : effort,
    // Interactive calls: skip loading MCP servers and skills so the CLI starts faster.
    ...(fast ? ["--strict-mcp-config", "--disable-slash-commands"] : []),
  ];
  return new Promise((resolve, reject) => {
    // Interactive calls answer without extended thinking.
    const env = fast ? { ...process.env, MAX_THINKING_TOKENS: "0" } : process.env;
    const child = spawn(CLAUDE_CLI, args, { cwd: os.tmpdir(), stdio: ["pipe", "pipe", "pipe"], env });
    let out = "";
    let err = "";
    const timer = setTimeout(() => child.kill("SIGTERM"), 10 * 60_000);
    child.stdout.on("data", (d) => (out += d));
    child.stderr.on("data", (d) => (err += d));
    child.on("error", (e) => reject(e));
    child.on("close", (code, signal) => {
      clearTimeout(timer);
      let r;
      try {
        r = JSON.parse(out);
      } catch {
        console.log(`  claude exit code ${code}, signal ${signal}, stderr: ${err.trim().slice(0, 300) || "-"}`);
        return reject(Object.assign(new Error("Claude Code failed: " + (err.trim() || out.trim() || "no output")), {
          status: 502,
          noOutput: !out.trim() && !err.trim() && signal !== "SIGTERM",
        }));
      }
      if (r.is_error) {
        const auth = r.api_error_status === 401 || /authenticat|log ?in|token/i.test(r.result || "");
        const msg = auth
          ? "Claude Code is not signed in. Run “claude auth login” in a terminal, then try again."
          : "Claude Code error: " + (r.result || r.terminal_reason || "unknown");
        return reject(Object.assign(new Error(msg), { status: auth ? 401 : 502 }));
      }
      if (fast) console.log(`  claude: total ${r.duration_ms} ms, api ${r.duration_api_ms} ms, turns ${r.num_turns}, model ${Object.keys(r.modelUsage || {}).join(",")}`);
      if (!schema) return resolve(String(r.result ?? "").trim());
      if (r.structured_output) return resolve(r.structured_output);
      try {
        resolve(JSON.parse(r.result));
      } catch {
        reject(Object.assign(new Error("Claude Code returned no JSON."), { status: 502 }));
      }
    });
    child.stdin.end(prompt);
  });
}

// Text-to-speech for things that are not pre-rendered (the interviewer's follow-up
// questions): the best Finnish macOS voice, returned as AAC audio. Cached per text.
const ROBOTIC_VOICES = /^(eddy|flo|grandma|grandpa|reed|rocko|sandy|shelley)\b/i;
let ttsVoice;
function bestFinnishVoice() {
  if (ttsVoice !== undefined) return ttsVoice;
  try {
    const names = execFileSync("say", ["-v", "?"], { encoding: "utf8" })
      .split("\n")
      .map((l) => l.match(/^(.+?)\s+fi_FI\s+#/)?.[1]?.trim())
      .filter((n) => n && !ROBOTIC_VOICES.test(n));
    const rank = (n) => (/premium/i.test(n) ? 3 : /enhanced|parannettu/i.test(n) ? 2 : 1);
    ttsVoice = names.sort((a, b) => rank(b) - rank(a))[0] || null;
  } catch {
    ttsVoice = null;
  }
  return ttsVoice;
}
const ttsDir = fs.mkdtempSync(path.join(os.tmpdir(), "yki-tts-"));
async function handleTts(req, res) {
  const text = new URL(req.url, "http://x").searchParams.get("text")?.slice(0, 400);
  const voice = bestFinnishVoice();
  if (!text || !voice) return sendJson(res, 404, { error: "No text or no Finnish voice" });
  const name = crypto.createHash("sha1").update(voice + "|" + text).digest("hex");
  const out = path.join(ttsDir, name + ".mp4");
  try {
    if (!fs.existsSync(out)) {
      const aiff = path.join(ttsDir, name + ".aiff");
      execFileSync("say", ["-v", voice, "-r", "165", "-o", aiff, text]);
      execFileSync("afconvert", ["-f", "mp4f", "-d", "aac", "-b", "64000", aiff, out]);
      fs.rmSync(aiff, { force: true });
    }
    res.writeHead(200, { "Content-Type": "audio/mp4", "Cache-Control": "max-age=3600" });
    fs.createReadStream(out).pipe(res);
  } catch (e) {
    sendJson(res, 500, { error: "TTS failed: " + e.message });
  }
}

async function handleApi(req, res) {
  if (req.url.startsWith("/api/tts") && req.method === "GET") return handleTts(req, res);
  if (req.url === "/api/status" && req.method === "GET") {
    return sendJson(res, 200, { ready: BACKEND !== "none", backend: BACKEND, model: MODEL });
  }
  if (req.url === "/api/claude" && req.method === "POST") {
    if (BACKEND === "none") {
      return sendJson(res, 503, {
        error: "No way to reach Claude: install Claude Code and run “claude auth login”, or put ANTHROPIC_API_KEY in .env, then restart.",
      });
    }
    try {
      const body = await readBody(req);
      if (typeof body.prompt !== "string" || (body.schema != null && typeof body.schema !== "object")) {
        return sendJson(res, 400, { error: "Expected { prompt, schema }" });
      }
      const t0 = Date.now();
      const result = BACKEND === "api" ? await askClaude(body) : await askClaudeCode(body);
      console.log(`${body.fast ? "interviewer" : "rating"} call: ${((Date.now() - t0) / 1000).toFixed(1)} s`);
      return sendJson(res, 200, { result });
    } catch (err) {
      if (err instanceof Anthropic.RateLimitError) {
        return sendJson(res, 429, { error: "Claude API rate limit — wait a minute and retry." });
      }
      if (err instanceof Anthropic.AuthenticationError) {
        return sendJson(res, 401, { error: "The API key was rejected. Check ANTHROPIC_API_KEY in .env." });
      }
      if (err instanceof Anthropic.APIError) {
        return sendJson(res, err.status || 502, { error: `Claude API error: ${err.message}` });
      }
      console.error(err);
      return sendJson(res, err.status || 500, { error: err.message || "Unknown error" });
    }
  }
  sendJson(res, 404, { error: "Not found" });
}

function serveStatic(req, res) {
  const urlPath = decodeURIComponent(new URL(req.url, "http://x").pathname);
  const filePath = path.normalize(path.join(PUBLIC, urlPath === "/" ? "index.html" : urlPath));
  if (!filePath.startsWith(PUBLIC)) {
    res.writeHead(403).end();
    return;
  }
  fs.stat(filePath, (err, stat) => {
    if (err || !stat.isFile()) {
      res.writeHead(404, { "Content-Type": "text/plain" }).end("Not found");
      return;
    }
    const headers = {
      "Content-Type": MIME[path.extname(filePath)] || "application/octet-stream",
      "Cache-Control": "no-cache",
      "Accept-Ranges": "bytes",
    };
    // Range requests let the audio player jump to a line inside a packed recording.
    const m = /^bytes=(\d*)-(\d*)$/.exec(req.headers.range || "");
    if (m && (m[1] || m[2])) {
      let startByte = m[1] ? Number(m[1]) : stat.size - Number(m[2]);
      let endByte = m[1] && m[2] ? Number(m[2]) : stat.size - 1;
      endByte = Math.min(endByte, stat.size - 1);
      if (startByte > endByte || startByte < 0) {
        res.writeHead(416, { "Content-Range": `bytes */${stat.size}` }).end();
        return;
      }
      res.writeHead(206, { ...headers, "Content-Range": `bytes ${startByte}-${endByte}/${stat.size}`, "Content-Length": endByte - startByte + 1 });
      fs.createReadStream(filePath, { start: startByte, end: endByte }).pipe(res);
      return;
    }
    res.writeHead(200, { ...headers, "Content-Length": stat.size });
    fs.createReadStream(filePath).pipe(res);
  });
}

function handler(req, res) {
  if (req.url.startsWith("/api/")) return handleApi(req, res);
  serveStatic(req, res);
}

function lanAddresses() {
  return Object.values(os.networkInterfaces())
    .flat()
    .filter((a) => a && a.family === "IPv4" && !a.internal)
    .map((a) => a.address);
}

// Self-signed certificate for the laptop's Wi-Fi addresses, created once with openssl.
function ensureCert(ips) {
  const dir = path.join(ROOT, ".cert");
  const key = path.join(dir, "key.pem");
  const cert = path.join(dir, "cert.pem");
  const sanFile = path.join(dir, "san.txt");
  const san = ["DNS:localhost", "IP:127.0.0.1", ...ips.map((ip) => "IP:" + ip)].join(",");
  const fresh = fs.existsSync(cert) && fs.existsSync(sanFile) && fs.readFileSync(sanFile, "utf8") === san;
  if (!fresh) {
    fs.mkdirSync(dir, { recursive: true });
    execFileSync("openssl", [
      "req", "-x509", "-newkey", "rsa:2048", "-nodes", "-sha256", "-days", "825",
      "-keyout", key, "-out", cert, "-subj", "/CN=YKI harjoitus", "-addext", "subjectAltName=" + san,
    ], { stdio: "ignore" });
    fs.writeFileSync(sanFile, san);
  }
  return { key: fs.readFileSync(key), cert: fs.readFileSync(cert) };
}

const banner = () => {
  console.log(`YKI exam simulator: http://localhost:${PORT}`);
  console.log(
    BACKEND === "api"
      ? `Rating with the Claude API (${MODEL})`
      : BACKEND === "claude-code"
        ? `Rating with Claude Code and your Claude subscription (${MODEL})`
        : "Rating disabled: install Claude Code (claude auth login) or set ANTHROPIC_API_KEY in .env",
  );
};

if (!PHONE) {
  http.createServer(handler).listen(PORT, "127.0.0.1", banner);
} else {
  // Phone mode: both ports accept both http:// and https:// (the first byte of a TLS
  // handshake is 0x16), so a phone that upgrades to https or picks the other port still works.
  const ips = lanAddresses();
  const plain = http.createServer(handler);
  const secure = https.createServer(ensureCert(ips), handler);
  secure.on("tlsClientError", (err, socket) => console.log(`  TLS error from ${socket.remoteAddress}: ${err.code || err.message}`));
  const dual = () =>
    net.createServer((socket) => {
      socket.once("data", (buf) => {
        socket.pause();
        socket.unshift(buf);
        const tls = buf[0] === 0x16;
        if (!/^(::ffff:)?127\.0\.0\.1$|^::1$/.test(socket.remoteAddress || "")) {
          console.log(`${new Date().toLocaleTimeString("fi-FI")}  ${socket.remoteAddress} → ${tls ? "https" : "http"} :${socket.localPort}`);
        }
        (tls ? secure : plain).emit("connection", socket);
        process.nextTick(() => socket.resume());
      });
      socket.on("error", () => {});
    });
  dual().listen(PORT, "0.0.0.0", banner);
  dual().listen(HTTPS_PORT, "0.0.0.0", () => {
    console.log("\nOn your phone (same Wi-Fi), open:");
    for (const ip of ips) console.log(`  https://${ip}:${HTTPS_PORT}`);
    console.log("The browser warns about the certificate (it is self-made) — choose “Advanced → Proceed / Visit this website”.");
  });
}
