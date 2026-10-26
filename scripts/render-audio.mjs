// Renders every listening recording and every interviewer question to audio files with
// the best Finnish macOS voices installed (Premium > Enhanced > standard), so the app can
// play natural-sounding audio on any device instead of the browser's built-in voice.
//
//   node scripts/render-audio.mjs
//
// Better voices: System Settings → Accessibility → Spoken Content → System voice →
// Manage Voices… → Finnish → download "Satu (Premium/Enhanced)" and "Onni (Enhanced)".

import { execFileSync } from "node:child_process";
import fs from "node:fs";
import os from "node:os";
import path from "node:path";
import { fileURLToPath } from "node:url";

const ROOT = path.join(path.dirname(fileURLToPath(import.meta.url)), "..");
const OUT = path.join(ROOT, "public", "audio");
const TMP = fs.mkdtempSync(path.join(os.tmpdir(), "yki-audio-"));

// Robotic novelty voices that macOS also lists for Finnish.
const ROBOTIC = /^(eddy|flo|grandma|grandpa|reed|rocko|sandy|shelley)\b/i;

function finnishVoices() {
  const out = execFileSync("say", ["-v", "?"], { encoding: "utf8" });
  return out
    .split("\n")
    .map((line) => line.match(/^(.+?)\s+(fi_FI)\s+#/))
    .filter(Boolean)
    .map((m) => m[1].trim())
    .filter((name) => !ROBOTIC.test(name))
    .map((name) => ({ name, rank: /premium/i.test(name) ? 3 : /enhanced|parannettu/i.test(name) ? 2 : 1 }))
    .sort((a, b) => b.rank - a.rank);
}

// One voice per person, best quality first; a second distinct person (e.g. Onni) if installed.
function pickVoices() {
  const all = finnishVoices();
  if (!all.length) throw new Error("No Finnish voice installed (System Settings → Accessibility → Spoken Content).");
  const person = (v) => v.name.split(" ")[0].toLowerCase();
  const first = all[0];
  const second = all.find((v) => person(v) !== person(first)) || first;
  return [first.name, second.name];
}

const SAMPLE_RATE = 22050;

// Speak one line into raw 16-bit mono PCM.
function pcm(text, voice, rate) {
  const wav = path.join(TMP, "clip.wav");
  execFileSync("say", ["-v", voice, "-r", String(rate), "--file-format=WAVE", `--data-format=LEI16@${SAMPLE_RATE}`, "-o", wav, text]);
  const buf = fs.readFileSync(wav);
  // Walk the RIFF chunks to the "data" chunk (macOS adds an FLLR padding chunk first).
  let off = 12;
  while (off < buf.length) {
    const id = buf.toString("ascii", off, off + 4);
    const size = buf.readUInt32LE(off + 4);
    if (id === "data") return buf.subarray(off + 8, off + 8 + size);
    off += 8 + size + (size % 2);
  }
  throw new Error("No PCM data from say");
}

function writeAac(pcmData, file) {
  const header = Buffer.alloc(44);
  header.write("RIFF", 0);
  header.writeUInt32LE(36 + pcmData.length, 4);
  header.write("WAVEfmt ", 8);
  header.writeUInt32LE(16, 16);
  header.writeUInt16LE(1, 20); // PCM
  header.writeUInt16LE(1, 22); // mono
  header.writeUInt32LE(SAMPLE_RATE, 24);
  header.writeUInt32LE(SAMPLE_RATE * 2, 28);
  header.writeUInt16LE(2, 32);
  header.writeUInt16LE(16, 34);
  header.write("data", 36);
  header.writeUInt32LE(pcmData.length, 40);
  const wav = path.join(TMP, "task.wav");
  fs.writeFileSync(wav, Buffer.concat([header, pcmData]));
  // AAC in an MP4 container (claude.ai serves .mp4, not .m4a)
  execFileSync("afconvert", ["-f", "mp4f", "-d", "aac", "-b", "64000", wav, file]);
}

const voices = pickVoices();
console.log("Voices:", voices.join(" + "));
fs.rmSync(OUT, { recursive: true, force: true });
fs.mkdirSync(OUT, { recursive: true });
// "compact" = only the basic voice was available; the app then prefers a better live voice.
const quality = finnishVoices()[0].rank >= 2 ? "enhanced" : "compact";
const manifest = { voices, quality };

// One audio file per task: the lines one after another with a short silence between them.
// The manifest gives each line's start/end in seconds, so the app can play any range
// (the whole recording, or one part of the second playing).
const GAP_SEC = 0.45;
function addTask(fileKey, clips) {
  const silence = Buffer.alloc(Math.round(GAP_SEC * SAMPLE_RATE) * 2);
  const parts = [];
  let samples = 0;
  for (const c of clips) {
    const data = pcm(c.prefix + c.text, c.voice, c.rate);
    const start = samples / SAMPLE_RATE;
    samples += data.length / 2;
    manifest[c.key] = { file: `${fileKey}.mp4`, text: c.text, start: +start.toFixed(3), end: +(samples / SAMPLE_RATE).toFixed(3) };
    parts.push(data, silence);
    samples += silence.length / 2;
  }
  writeAac(Buffer.concat(parts), path.join(OUT, `${fileKey}.mp4`));
}

addTask("voicetest", [{ key: "voicetest", text: "Hei! Tämä on äänitesti. Kuuletko minut hyvin?", voice: voices[0], rate: 165, prefix: "" }]);

const { EXAMS } = await import(path.join(ROOT, "public", "js", "exam-data.js"));
let files = 1;
for (const exam of EXAMS) {
  for (const section of exam.sections) {
    for (const task of section.tasks) {
      if (section.id === "listening") {
        const speakers = [...new Set(task.lines.map((l) => l.speaker || "A"))];
        addTask(
          task.id,
          task.lines.map((line, i) => {
            const idx = speakers.indexOf(line.speaker || "A");
            // Only one voice installed: lower the pitch for the second speaker so a dialogue
            // still sounds like two people.
            const prefix = voices[0] === voices[1] && idx % 2 ? "[[pbas 30]] " : "";
            return { key: `${task.id}-${i}`, text: line.text, voice: voices[idx % voices.length], rate: 160, prefix };
          }),
        );
        files++;
      }
      if (section.id === "speaking") {
        const items = task.items.filter((it) => it.spoken);
        if (!items.length) continue;
        addTask(task.id, items.map((it) => ({ key: `${task.id}-${it.id}`, text: it.spoken, voice: voices[0], rate: 165, prefix: "" })));
        files++;
      }
    }
    process.stdout.write(".");
  }
}

fs.writeFileSync(path.join(OUT, "manifest.json"), JSON.stringify(manifest, null, 1));
fs.rmSync(TMP, { recursive: true, force: true });
console.log(`\n${Object.keys(manifest).length - 2} clips in ${files} files written to public/audio/`);
