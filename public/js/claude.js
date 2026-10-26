// Sends one rating request to Claude and returns parsed JSON.
// Two backends:
//  - local server (server.js) → Claude API with the key from .env
//  - claude.ai artifact runtime (window.claude "sample" capability) → the viewer's Claude account

let artifactSample;

async function getArtifactSample() {
  if (artifactSample !== undefined) return artifactSample;
  artifactSample = null;
  if (window.claude?.use) {
    try {
      artifactSample = await window.claude.use("sample");
    } catch {
      artifactSample = null;
    }
  }
  return artifactSample;
}

export async function backendStatus() {
  if (window.claude?.use) {
    return { ready: true, kind: "artifact", label: "Claude (claude.ai account)" };
  }
  try {
    const r = await fetch("/api/status");
    const s = await r.json();
    return { ready: s.ready, kind: "server", label: s.model };
  } catch {
    return { ready: false, kind: "none", label: "no server" };
  }
}

export async function askClaudeJson(prompt, schema, { fast = false } = {}) {
  const sample = await getArtifactSample();
  if (sample) {
    const fullPrompt =
      prompt +
      "\n\nReply with ONLY one JSON value that matches this JSON Schema exactly (no prose before or after):\n" +
      JSON.stringify(schema);
    try {
      return await sample.json(fullPrompt, { modelTier: fast ? "quick" : "complex", cache: false });
    } catch (e) {
      throw new Error(e?.message || e?.code || "Claude request failed");
    }
  }
  const res = await fetch("/api/claude", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ prompt, schema, fast }),
  });
  const body = await res.json().catch(() => ({}));
  if (!res.ok) throw new Error(body.error || `HTTP ${res.status}`);
  return body.result;
}

// Plain-text answer (no JSON): used for quick interactive calls such as the interviewer.
export async function askClaudeText(prompt, { fast = true } = {}) {
  const sample = await getArtifactSample();
  if (sample) {
    try {
      // The quick tier makes Finnish mistakes; the default tier at low effort stays responsive.
      const { text } = await sample(prompt, { modelTier: "default", effort: fast ? "low" : "medium", cache: false });
      return text.trim();
    } catch (e) {
      throw new Error(e?.message || e?.code || "Claude request failed");
    }
  }
  const res = await fetch("/api/claude", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ prompt, fast }),
  });
  const body = await res.json().catch(() => ({}));
  if (!res.ok) throw new Error(body.error || `HTTP ${res.status}`);
  return String(body.result ?? "").trim();
}
