// Voice helpers: Finnish text-to-speech (listening recordings and spoken prompts),
// speech-to-text (speaking answers) and raw audio recording so the candidate can replay
// what they actually said.

let finnishVoices = [];

// macOS ships robotic "Eloquence" novelty voices (Eddy, Grandma, Rocko…) that sort first;
// prefer natural voices (Satu, Onni, Google, enhanced/premium) and use those only.
const ROBOTIC = /^(eddy|flo|grandma|grandpa|reed|rocko|sandy|shelley)\b/i;
const NATURAL = /satu|onni|google|microsoft|enhanced|premium|siri|natural|neural/i;

// Rank by quality using both the name and the voiceURI (iOS/macOS put "premium",
// "enhanced" or "compact" in the URI, e.g. com.apple.voice.premium.fi-FI.Satu).
function voiceScore(v) {
  const id = `${v.name} ${v.voiceURI || ""}`;
  if (/premium/i.test(id)) return 4;
  if (/enhanced|parannettu|natural|neural|online/i.test(id)) return 3;
  if (/compact/i.test(id)) return 0;
  return NATURAL.test(id) ? 2 : 1;
}

function loadVoices() {
  const all = window.speechSynthesis ? speechSynthesis.getVoices() : [];
  const fi = all.filter((v) => v.lang && v.lang.toLowerCase().replace("_", "-").startsWith("fi"));
  const good = fi.filter((v) => !ROBOTIC.test(v.name));
  finnishVoices = (good.length ? good : fi).sort((a, b) => voiceScore(b) - voiceScore(a));
}
if (window.speechSynthesis) {
  loadVoices();
  speechSynthesis.addEventListener?.("voiceschanged", loadVoices);
}

export function ttsAvailable() {
  return Boolean(window.speechSynthesis);
}

export function hasFinnishVoice() {
  loadVoices();
  return finnishVoices.length > 0;
}

// Pick a voice for a speaker. Speakers alternate between the available Finnish voices so a
// dialogue sounds like two people when the system has more than one voice installed.
function voiceFor(speakerIndex) {
  if (!finnishVoices.length) return null;
  return finnishVoices[speakerIndex % finnishVoices.length];
}

// ---------- pre-rendered audio (scripts/render-audio.mjs) ----------
// When public/audio/manifest.json has a clip for every line (with the same text), the clips
// are played instead of the browser's voice. One shared <audio> element is reused so that
// mobile browsers allow later clips once the first play came from a tap.

const manifestReady = fetch("audio/manifest.json")
  .then((r) => (r.ok ? r.json() : null))
  .catch(() => null);
const player = new Audio();
let stopPlayback = null;

// Phones only let an <audio> element play after it has played inside a tap. unlockAudio()
// must run synchronously in a tap handler: it plays a short silence on the shared player
// (and an empty utterance for the browser voice) so later timed clips are allowed.
const SILENCE = "data:audio/wav;base64,UklGRtQEAABXQVZFZm10IBAAAAABAAEAQB8AAEAfAAABAAgAZGF0YbAEAACAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIA=";
let unlocked = false;
export function unlockAudio() {
  // Never touch the player while a clip is playing (a tap on an answer mid-recording).
  if (unlocked || !player.paused) return;
  try {
    player.src = SILENCE;
    player.play()?.then(() => (unlocked = true)).catch(() => {});
  } catch {}
  try {
    if (!window.speechSynthesis?.speaking) window.speechSynthesis?.speak(new SpeechSynthesisUtterance(" "));
  } catch {}
}
document.addEventListener("pointerdown", unlockAudio, { capture: true });

// If the browser still blocks a clip, ask for one tap instead of silently skipping it.
function askForTap(onTap) {
  const btn = document.createElement("button");
  btn.className = "btn primary tap-to-listen";
  btn.textContent = "🔊 Napauta kuunnellaksesi";
  btn.onclick = () => {
    btn.remove();
    onTap(); // runs inside the tap, so the browser allows playback
  };
  document.body.append(btn);
}

// Returns the ranges to play: [{ src, start, end }]. Lines that sit next to each other in
// the same packed file are merged into one range so they play without a seam.
async function clipsFor(keys, lines) {
  const manifest = await manifestReady;
  if (!manifest || !keys || keys.length !== lines.length) return null;
  // Clips made with the basic compact voice lose to a better voice the browser already has.
  loadVoices();
  if (manifest.quality !== "enhanced" && finnishVoices.some((v) => voiceScore(v) >= 3)) return null;
  const entries = keys.map((k, i) => manifest[k]?.text === lines[i].text && manifest[k]);
  if (!entries.every(Boolean)) return null;
  const ranges = [];
  for (const e of entries) {
    const src = "audio/" + e.file;
    const last = ranges.at(-1);
    if (last && last.src === src && e.start != null && Math.abs(e.start - last.next) < 0.01) {
      last.end = e.end;
      last.next = e.next;
    } else ranges.push({ src, start: e.start ?? 0, end: e.end ?? null });
    ranges.at(-1).next = e.end != null ? +(e.end + GAP).toFixed(3) : null;
  }
  return ranges;
}
const GAP = 0.45; // silence between lines in a packed file (scripts/render-audio.mjs)

// Packed files are loaded whole into memory (blob URLs) so jumping to a line works even
// where the server does not support HTTP range requests.
const blobUrls = new Map();
function blobUrl(src) {
  if (!blobUrls.has(src)) {
    blobUrls.set(
      src,
      fetch(src)
        .then((r) => (r.ok ? r.blob() : Promise.reject(new Error(r.status))))
        .then((b) => URL.createObjectURL(b))
        .catch(() => src),
    );
  }
  return blobUrls.get(src);
}

function playClips(ranges) {
  return new Promise((resolve) => {
    let i = 0;
    let stopped = false;
    let watch = null;
    let cap = null;
    const clear = () => {
      clearInterval(watch);
      clearTimeout(cap);
      player.onended = player.onerror = player.onloadedmetadata = player.ontimeupdate = null;
    };
    stopPlayback = () => {
      stopped = true;
      clear();
      player.pause();
      resolve();
    };
    const next = () => {
      clear();
      if (stopped) return;
      if (i >= ranges.length) {
        stopPlayback = null;
        return resolve();
      }
      const r = ranges[i++];
      const done = () => {
        clear();
        player.pause();
        setTimeout(next, 450);
      };
      const start = () => {
        try {
          player.currentTime = r.start;
        } catch {}
        player.play().catch((err) => {
          if (err?.name === "NotAllowedError" && !stopped) {
            // Same range is still loaded: play it from the tap; the watcher then continues.
            askForTap(() => player.play().catch(() => setTimeout(next, 0)));
            return;
          }
          setTimeout(next, 0);
        });
        // Stop at the end of the range (packed files hold more lines after it).
        // timeupdate keeps working when timers are throttled (background tab, low power).
        if (r.end != null) {
          const check = () => player.currentTime >= r.end + 0.15 && done();
          watch = setInterval(check, 40);
          player.ontimeupdate = check;
        } else {
          // Whole file: some browsers miss "ended" on blob audio, so never wait past its length.
          const len = Number.isFinite(player.duration) ? player.duration : 20;
          cap = setTimeout(done, (len - (r.start || 0) + 3) * 1000);
        }
      };
      blobUrl(r.src).then((url) => {
        if (stopped) return;
        player.onended = done;
        player.onerror = () => setTimeout(next, 0);
        if (player.src === url && player.readyState >= 1) start();
        else {
          player.onloadedmetadata = start;
          player.src = url;
          player.load();
        }
      });
    };
    next();
  });
}

export function stopSpeaking() {
  stopPlayback?.();
  stopPlayback = null;
  window.speechSynthesis?.cancel();
}

// Speak a list of lines [{ speaker, text }] in order. Resolves when finished or stopped.
// `keys` name the pre-rendered clips for the lines; without clips the browser voice is used,
// with different voices (if available) and a slightly different pitch per speaker.
export async function speakLines(inputLines, { rate = 0.9, onLine, keys } = {}) {
  stopSpeaking();
  const clips = await clipsFor(keys, inputLines);
  if (clips) return playClips(clips);
  const speakers = [...new Set(inputLines.map((l) => l.speaker || "A"))];
  // Speak sentence by sentence: Chrome's online voices stop silently on long utterances.
  const lines = inputLines.flatMap((l) =>
    (l.text.match(/[^.!?]+[.!?]*/g) || [l.text]).map((t, k, all) => ({
      speaker: l.speaker,
      text: t.trim(),
      pause: k < all.length - 1 ? 120 : 450,
    })),
  ).filter((l) => l.text);
  return new Promise((resolve) => {
    if (!window.speechSynthesis || !lines.length) return resolve();
    let i = 0;
    const next = () => {
      if (i >= lines.length) return resolve();
      const line = lines[i];
      const idx = speakers.indexOf(line.speaker || "A");
      const u = new SpeechSynthesisUtterance(line.text);
      u.lang = "fi-FI";
      const v = voiceFor(idx);
      if (v) u.voice = v;
      u.rate = rate;
      u.pitch = finnishVoices.length > 1 ? 1 : idx % 2 ? 0.8 : 1.15;
      // Some browsers never fire onend (no voice/audio device); fall back to an estimate.
      let advanced = false;
      const advance = () => {
        if (advanced) return;
        advanced = true;
        clearTimeout(fallback);
        i += 1;
        setTimeout(next, line.pause);
      };
      const fallback = setTimeout(advance, 4000 + (line.text.length * 110) / rate);
      u.onend = advance;
      u.onerror = (e) => {
        if (e.error === "interrupted" || e.error === "canceled") {
          clearTimeout(fallback);
          resolve();
        } else advance();
      };
      onLine?.(i);
      speechSynthesis.speak(u);
    };
    next();
  });
}

// Speak text that has no pre-rendered clip (the interviewer's follow-up questions).
// On the laptop the local server renders it with the best macOS Finnish voice, so it sounds
// like the rest of the interview; elsewhere the browser's own Finnish voice is used.
export async function speakDynamic(text, opts = {}) {
  stopSpeaking();
  if (!window.claude?.use) {
    try {
      const r = await fetch("/api/tts?text=" + encodeURIComponent(text), { signal: AbortSignal.timeout?.(10000) });
      if (r.ok) {
        const url = URL.createObjectURL(await r.blob());
        blobUrls.set(url, Promise.resolve(url));
        return playClips([{ src: url, start: 0, end: null }]);
      }
    } catch {}
  }
  return speakLines([{ speaker: "A", text }], opts);
}

export function speak(text, { key, ...opts } = {}) {
  return speakLines([{ speaker: "A", text }], { ...opts, keys: key ? [key] : undefined });
}

// ---------- Speech recognition ----------

const Recognition = window.SpeechRecognition || window.webkitSpeechRecognition;

export function sttAvailable() {
  return Boolean(Recognition);
}

// Records the microphone and transcribes Finnish speech at the same time.
// Returns a controller: stop() resolves with { transcript, audioUrl, durationSec }.
export async function startAnswerRecording({ onTranscript } = {}) {
  let stream = null;
  let recorder = null;
  const chunks = [];
  const startedAt = performance.now();

  try {
    stream = await navigator.mediaDevices.getUserMedia({ audio: true });
    recorder = new MediaRecorder(stream);
    recorder.ondataavailable = (e) => e.data.size && chunks.push(e.data);
    recorder.start();
  } catch (err) {
    // Without microphone access speech recognition cannot work either.
    throw new Error("Mikrofoni ei ole käytettävissä");
  }

  let finalText = "";
  let interim = "";
  let rec = null;
  let stopped = false;

  if (Recognition) {
    rec = new Recognition();
    rec.lang = "fi-FI";
    rec.continuous = true;
    rec.interimResults = true;
    rec.maxAlternatives = 1;
    rec.onresult = (ev) => {
      interim = "";
      for (let i = ev.resultIndex; i < ev.results.length; i++) {
        const r = ev.results[i];
        if (r.isFinal) finalText += (finalText ? " " : "") + r[0].transcript.trim();
        else interim += r[0].transcript;
      }
      onTranscript?.((finalText + " " + interim).trim());
    };
    // Chrome ends recognition after silences; keep it running until we stop.
    rec.onend = () => {
      if (!stopped) {
        try {
          rec.start();
        } catch {}
      }
    };
    rec.onerror = (e) => {
      if (e.error === "not-allowed" || e.error === "service-not-allowed") stopped = true;
    };
    try {
      rec.start();
    } catch {}
  }

  return {
    stop() {
      stopped = true;
      return new Promise((resolve) => {
        let finished = false;
        const finish = (audioUrl) => {
          if (finished) return;
          finished = true;
          stream?.getTracks().forEach((t) => t.stop());
          const transcript = (finalText + " " + interim).trim();
          resolve({
            transcript,
            audioUrl,
            durationSec: Math.round((performance.now() - startedAt) / 1000),
          });
        };
        try {
          rec?.stop();
        } catch {}
        if (recorder && recorder.state !== "inactive") {
          recorder.onstop = () => {
            const blob = new Blob(chunks, { type: recorder.mimeType || "audio/webm" });
            // Give recognition a moment to deliver its last final result.
            setTimeout(() => finish(URL.createObjectURL(blob)), 600);
          };
          recorder.stop();
          // If the recorder never reports that it stopped, keep the transcript and go on.
          setTimeout(() => finish(null), 3000);
        } else {
          setTimeout(() => finish(null), 600);
        }
      });
    },
  };
}
