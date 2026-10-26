import { EXAMS, SECTION_INFO } from "./exam-data.js";
import {
  speakLines,
  speak,
  stopSpeaking,
  ttsAvailable,
  hasFinnishVoice,
  sttAvailable,
  startAnswerRecording,
  unlockAudio,
  speakDynamic,
} from "./speech.js";
import { nextFollowUp, FOLLOW_UP_LIMITS } from "./interviewer.js";
import { backendStatus } from "./claude.js";
import { rateSection, buildStudyPlan, scoreObjective } from "./rating.js";
import { renderResults } from "./results.js";

const app = document.getElementById("app");
const timerEl = document.getElementById("timer");
const sectionLabel = document.getElementById("section-label");
document.getElementById("brand").onclick = async () => (await confirmLeave()) && goHome();

// Running inside a claude.ai artifact: rating goes through the viewer's Claude account,
// and the frame has no microphone, so spoken answers are typed.
const IN_ARTIFACT = Boolean(window.claude?.use);

const STORE_KEY = "yki-perustaso-v1";
const HISTORY_KEY = "yki-perustaso-history-v1";

// ---------- tiny DOM helper ----------
function h(tag, attrs = {}, ...children) {
  const el = document.createElement(tag);
  for (const [k, v] of Object.entries(attrs || {})) {
    if (v == null || v === false) continue;
    if (k === "class") el.className = v;
    else if (k.startsWith("on")) el.addEventListener(k.slice(2), v);
    else if (k === "html") el.innerHTML = v;
    else el.setAttribute(k, v === true ? "" : v);
  }
  for (const c of children.flat(Infinity)) {
    if (c == null || c === false) continue;
    el.append(c instanceof Node ? c : document.createTextNode(String(c)));
  }
  return el;
}
export { h };

// Replace the page content; accepts nested arrays and skips null/false.
function render(...nodes) {
  app.replaceChildren(...nodes.flat(Infinity).filter((n) => n != null && n !== false));
}

function instructions(ins) {
  if (!ins) return null;
  return h("div", { class: "instructions" }, ins.fi);
}

// ---------- state ----------
let state = null;
let timerHandle = null;
let speakingCtl = null; // active speaking item controller (for cleanup)

function save() {
  if (!state) return;
  try {
    // audio blob URLs do not survive reloads; keep only text
    const copy = JSON.parse(JSON.stringify(state, (k, v) => (k === "audioUrl" ? undefined : v)));
    localStorage.setItem(STORE_KEY, JSON.stringify(copy));
  } catch {}
}
function loadSaved() {
  try {
    return JSON.parse(localStorage.getItem(STORE_KEY));
  } catch {
    return null;
  }
}
function clearSaved() {
  try {
    localStorage.removeItem(STORE_KEY);
  } catch {}
}
function loadHistory() {
  try {
    return JSON.parse(localStorage.getItem(HISTORY_KEY)) || [];
  } catch {
    return [];
  }
}
function replaceHistory(entry) {
  try {
    const all = loadHistory().map((r) => (r.date === entry.date ? entry : r));
    localStorage.setItem(HISTORY_KEY, JSON.stringify(all));
  } catch {}
}
function saveHistory(entry) {
  try {
    const all = loadHistory();
    all.unshift(entry);
    localStorage.setItem(HISTORY_KEY, JSON.stringify(all.slice(0, 20)));
  } catch {}
}

function exam() {
  return EXAMS.find((e) => e.id === state.examId);
}
function currentSection() {
  return exam().sections.find((s) => s.id === state.order[state.sectionIdx]);
}

// In-page confirmation dialog (browser confirm() is blocked inside claude.ai artifacts).
function askConfirm(text, okLabel = "Kyllä", cancelLabel = "Peruuta") {
  return new Promise((resolve) => {
    const close = (v) => {
      overlay.remove();
      document.removeEventListener("keydown", onKey);
      resolve(v);
    };
    const onKey = (e) => e.key === "Escape" && close(false);
    const ok = h("button", { class: "btn primary", onclick: () => close(true) }, okLabel);
    const overlay = h(
      "div",
      { class: "modal-backdrop", onclick: (e) => e.target === overlay && close(false) },
      h(
        "div",
        { class: "modal", role: "dialog", "aria-modal": "true" },
        h("p", {}, text),
        h("div", { class: "row end" }, h("button", { class: "btn", onclick: () => close(false) }, cancelLabel), ok),
      ),
    );
    document.addEventListener("keydown", onKey);
    document.body.append(overlay);
    ok.focus();
  });
}

async function confirmLeave() {
  if (state && !state.finished) {
    return askConfirm("Keskeytetäänkö koe? Vastauksesi säilyvät, ja voit jatkaa myöhemmin etusivulta.", "Keskeytä");
  }
  return true;
}

// ---------- timer ----------
function startSectionTimer() {
  stopTimer();
  const sec = currentSection();
  if (!sec.minutes) {
    timerEl.hidden = true;
    return;
  }
  if (!state.deadline) {
    state.deadline = Date.now() + sec.minutes * 60_000;
    save();
  }
  timerEl.hidden = false;
  const tick = () => {
    const left = Math.max(0, state.deadline - Date.now());
    const m = Math.floor(left / 60000);
    const s = Math.floor((left % 60000) / 1000);
    timerEl.textContent = `${m}:${String(s).padStart(2, "0")}`;
    timerEl.classList.toggle("low", left < 5 * 60_000);
    if (left <= 0) {
      stopTimer();
      finishSection({ timeUp: true });
    }
  };
  tick();
  timerHandle = setInterval(tick, 1000);
}
function stopTimer() {
  clearInterval(timerHandle);
  timerHandle = null;
}

// ---------- home ----------
async function goHome() {
  stopTimer();
  stopSpeaking();
  speakingCtl?.abort();
  timerEl.hidden = true;
  sectionLabel.textContent = "";
  state = null;
  const saved = loadSaved();
  const history = loadHistory();
  const status = await backendStatus();

  render(
    h("h1", {}, "YKI-testi – harjoituskokeet"),
    h(
      "p",
      { class: "muted" },
      "Practice exams for the Finnish National Certificate of Language Proficiency: basic level (A1–A2) and intermediate level (B1–B2). " +
        "Same four subtests, task types, timing and rating scale as the real exam. Your writing and speaking are rated by an AI examiner (Claude by default) " +
        "against the official YKI criteria, and at the end you get your mistakes with corrections and a study plan.",
    ),
    envNotices(status),
    saved && !saved.finished
      ? h(
          "div",
          { class: "card" },
          h("h3", {}, "Keskeneräinen koe"),
          h("p", { class: "small muted" }, `${EXAMS.find((e) => e.id === saved.examId)?.title || ""} — jatka siitä, mihin jäit.`),
          h(
            "div",
            { class: "row" },
            h("button", { class: "btn primary", onclick: () => resume(saved) }, "Jatka koetta"),
            h(
              "button",
              {
                class: "btn",
                onclick: () => {
                  clearSaved();
                  goHome();
                },
              },
              "Hylkää",
            ),
          ),
        )
      : null,
    levelSwitch(LEVELS_SHOWN.map(([level, heading, scale]) => {
      const list = EXAMS.filter((e) => (e.level || "perustaso") === level);
      if (!list.length) return null;
      return h(
        "div",
        { class: "level-panel", "data-level": level },
        h("h2", {}, `${heading} · ${list.length} ${list.length === 1 ? "koe" : "koetta"}`, h("span", { class: "badge", style: "margin-left:8px;vertical-align:middle" }, scale)),
        h(
          "div",
          { class: "exam-grid" },
      list.map((ex) => {
            const last = history.find((r) => r.examId === ex.id);
            return h(
              "div",
              { class: "card exam-card" },
              h(
                "div",
                { class: "row between" },
                h("h3", { style: "margin:0" }, ex.title),
                last
                  ? h(
                      "span",
                      { class: "row", style: "gap:4px" },
                      Object.entries(last.levels || {}).map(([k, v]) => h("span", { class: "badge", title: SECTION_INFO[k]?.fi }, `${SECTION_INFO[k]?.short || k} ${v}`)),
                    )
                  : null,
              ),
              h("p", { class: "small muted" }, ex.description),
              h("button", { class: "btn primary", onclick: () => start(ex.id, ex.sections.map((s) => s.id)) }, "Koko koe (all 4 subtests)"),
              h(
                "div",
                { class: "sec-buttons" },
                ex.sections.map((s) =>
                  h(
                    "button",
                    { class: "tile sec", onclick: () => start(ex.id, [s.id]) },
                    h("span", { class: "t" }, SECTION_INFO[s.id].fi),
                    h("span", { class: "d" }, s.minutes ? `${s.minutes} min` : `≈${s.approxMinutes} min`),
                  ),
                ),
              ),
            );
          }),
        ),
      );
    })),
    history.length
      ? h(
          "div",
          { class: "card soft" },
          h("h3", { style: "margin-top:0" }, "Aiemmat tulokset"),
          h(
            "ul",
            { class: "clean small" },
            history.map((r, i) =>
              h(
                "li",
                {},
                h("a", { href: "#", onclick: (e) => (e.preventDefault(), showStoredResult(i)) }, `${new Date(r.date).toLocaleString("fi-FI")} — ${r.examTitle}`),
                " ",
                Object.entries(r.levels || {}).map(([k, v]) => h("span", { class: "badge", style: "margin-left:4px" }, `${SECTION_INFO[k]?.short || k}: ${v}`)),
              ),
            ),
          ),
        )
      : null,
    examInfoCard(),
  );
}

const LEVELS_SHOWN = [
  ["perustaso", "Perustaso (A1–A2)", "Taso 1–2"],
  ["keskitaso", "Keskitaso (B1–B2)", "Taso 3–4"],
];
const LEVEL_KEY = "yki-level-shown";

// Segmented switch above the exam grids; only the chosen level's exams are shown.
// The choice is remembered in this browser.
function levelSwitch(panels) {
  panels = panels.filter(Boolean);
  let current = "perustaso";
  try {
    current = localStorage.getItem(LEVEL_KEY) || current;
  } catch {}
  if (!panels.some((p) => p.dataset.level === current)) current = panels[0]?.dataset.level;
  const buttons = LEVELS_SHOWN.filter(([level]) => panels.some((p) => p.dataset.level === level)).map(([level, heading]) =>
    h("button", { type: "button", role: "tab", "data-level": level, onclick: () => show(level) }, heading),
  );
  function show(level) {
    current = level;
    try {
      localStorage.setItem(LEVEL_KEY, level);
    } catch {}
    panels.forEach((p) => (p.hidden = p.dataset.level !== level));
    buttons.forEach((b) => {
      b.classList.toggle("on", b.dataset.level === level);
      b.setAttribute("aria-selected", String(b.dataset.level === level));
    });
  }
  show(current);
  return [buttons.length > 1 ? h("div", { class: "level-switch", role: "tablist", "aria-label": "Taso" }, buttons) : null, panels];
}

function envNotices(status) {
  const out = [];
  if (IN_ARTIFACT) {
    out.push(
      h(
        "details",
        { class: "notice" },
        h("summary", {}, "Speaking on this page: answer with your keyboard's dictation (set up Finnish first)"),
        h(
          "ul",
          { class: "clean small" },
          h("li", {}, "This page can't use the microphone directly. When it's your turn to speak, tap the microphone on your phone's keyboard and speak Finnish — your speech is typed into the answer box, and the time limit is enforced."),
          h("li", {}, "iPhone: Settings → General → Keyboard → Keyboards → Add New Keyboard → Suomi. Make sure “Enable Dictation” is on. In the answer box switch to the Finnish keyboard (🌐) before tapping 🎤."),
          h("li", {}, "Android (Gboard): Gboard settings → Languages → add Suomi; then tap 🎤 on the keyboard."),
          h("li", {}, "For full recording with playback and timing, use the laptop version (npm start)."),
        ),
      ),
    );
  }
  if (!status.ready) {
    out.push(
      h(
        "div",
        { class: "notice err" },
        status.kind === "none"
          ? "Rating server not reachable. Start the app with “npm start” and open http://localhost:5173."
          : "Rating isn't set up — you can take the exam, but writing/speaking can't be rated. Add ANTHROPIC_API_KEY or OPENAI_API_KEY to .env (see the README), or install Claude Code and run “claude auth login”, then restart “npm start”.",
      ),
    );
  }
  if (!sttAvailable() && !IN_ARTIFACT) {
    out.push(
      h(
        "div",
        { class: "notice" },
        "This browser has no speech recognition. For spoken answers use Chrome, Edge or Safari; otherwise you can type your spoken answers.",
      ),
    );
  }
  if (ttsAvailable() && !hasFinnishVoice()) {
    out.push(
      h(
        "div",
        { class: "notice" },
        "No Finnish voice found for the listening recordings. On macOS: System Settings → Accessibility → Spoken Content → System voice → Manage voices → Finnish (e.g. “Satu”). In Chrome, Google's online voices are used automatically if available.",
      ),
    );
  }
  return out;
}

function examInfoCard() {
  return h(
    "details",
    { class: "card soft" },
    h("summary", {}, "Miten koe toimii? / How the exam works"),
    h(
      "div",
      { class: "small" },
      Object.entries(SECTION_INFO).map(([id, info]) => h("p", {}, h("b", {}, info.fi + " — "), info.about)),
      h(
        "p",
        {},
        h("b", {}, "Arviointi / rating: "),
        "Each subtest gets its own level: alle 1 (below A1), 1 (A1) or 2 (A2). Reading and listening are scored from your points; writing and speaking are rated holistically against the YKI skill-level descriptors. To pass a level in the real exam you need that level in each subtest separately — the certificate lists each subtest on its own.",
      ),
    ),
  );
}

// ---------- flow ----------
function start(examId, order) {
  clearSaved();
  state = {
    examId,
    order,
    sectionIdx: 0,
    taskIdx: 0,
    answers: {},
    spoken: {},
    plays: {},
    deadline: null,
    startedAt: Date.now(),
    finished: false,
    phase: "intro",
  };
  save();
  showSectionIntro();
}

function resume(saved) {
  state = saved;
  if (state.phase === "intro") showSectionIntro();
  else if (state.phase === "sheet") showAnswerSheet();
  else showTask();
}

function showSectionIntro() {
  stopTimer();
  state.phase = "intro";
  state.deadline = null;
  save();
  const sec = currentSection();
  const info = SECTION_INFO[sec.id];
  sectionLabel.textContent = info.fi;
  timerEl.hidden = true;
  render(
    stepsBar(),
    h("h1", {}, info.fi),
    h(
      "div",
      { class: "split intro-split" },
      h(
        "div",
        { class: "pane" },
        h("div", { class: "card" }, h("p", { style: "margin-top:0" }, sec.ohje || info.ohje)),
        h(
          "div",
          { class: "card soft small" },
          h("b", {}, "Tehtävät: "),
          h("ul", { class: "clean" }, sec.tasks.map((t) => h("li", {}, t.title))),
          sec.minutes ? h("p", {}, `Aikaa on ${sec.minutes} minuuttia. Aika alkaa, kun painat ”Aloita”.`) : h("p", {}, sec.aika || info.aika),
        ),
      ),
      h(
        "div",
        { class: "pane" },
        sec.id === "speaking"
          ? IN_ARTIFACT
            ? h("div", { class: "notice" }, "Vastaa puhumalla: kun on sinun vuorosi, paina näppäimistön mikrofonia 🎤 ja puhu suomeksi. Vastausaika on rajattu.")
            : micCheck()
          : null,
        sec.id === "listening" ? voiceCheck() : null,
        startRow(),
      ),
    ),
  );
}

function startRow() {
  return h(
      "div",
      { class: "row end" },
      h(
        "button",
        {
          class: "btn primary",
          onclick: () => {
            // A tap lets mobile browsers play the timed audio that follows.
            unlockAudio();
            state.phase = "task";
            state.taskIdx = 0;
            save();
            showTask();
          },
        },
        "Aloita →",
      ),
    );
}

function stepsBar() {
  return h(
    "div",
    { class: "steps" },
    state.order.map((id, i) =>
      h("span", { class: i === state.sectionIdx ? "on" : i < state.sectionIdx ? "done" : "" }, SECTION_INFO[id].fi),
    ),
  );
}

function voiceCheck() {
  return h(
    "div",
    { class: "card" },
    h("b", {}, "Äänitesti"),
    h("p", { class: "small muted" }, "Tarkista, että kuulet äänen hyvin."),
    h("button", { class: "btn", onclick: () => speak("Hei! Tämä on äänitesti. Kuuletko minut hyvin?", { key: "voicetest" }) }, "▶ Kuuntele testiääni"),
  );
}

function micCheck() {
  const out = h("div", { class: "live-transcript" });
  let ctl = null;
  const btn = h("button", { class: "btn" }, "🎙 Testaa mikrofoni");
  btn.onclick = async () => {
    if (ctl) {
      const r = await ctl.stop();
      ctl = null;
      btn.textContent = "🎙 Testaa mikrofoni";
      btn.classList.remove("rec");
      out.replaceChildren(
        h(
          "div",
          {},
          r.transcript ? `Tunnistettu: “${r.transcript}”` : "Ei tunnistettua puhetta.",
          r.audioUrl ? h("div", {}, h("audio", { controls: true, src: r.audioUrl })) : null,
        ),
      );
      return;
    }
    try {
      ctl = await startAnswerRecording({ onTranscript: (t) => (out.textContent = t) });
      btn.textContent = "■ Lopeta testi";
      btn.classList.add("rec");
      out.textContent = "Sano esimerkiksi: “Minun nimeni on … ja asun …”";
    } catch (e) {
      out.textContent = e.message;
    }
  };
  return h(
    "div",
    { class: "card" },
    h("b", {}, "Mikrofonitesti"),
    h(
      "p",
      { class: "small muted" },
      "Vastauksesi nauhoitetaan. Puhu selvästi ja normaalilla nopeudella.",
    ),
    btn,
    out,
  );
}

function showTask() {
  stopSpeaking();
  speakingCtl?.abort();
  speakingCtl = null;
  const sec = currentSection();
  const task = sec.tasks[state.taskIdx];
  sectionLabel.textContent = `${SECTION_INFO[sec.id].fi} · ${state.taskIdx + 1}/${sec.tasks.length}`;
  if (sec.minutes) startSectionTimer();
  else timerEl.hidden = true;

  const body =
    sec.id === "reading"
      ? renderReadingTask(task)
      : sec.id === "listening"
        ? renderListeningTask(task)
        : sec.id === "writing"
          ? renderWritingTask(task)
          : renderSpeakingTask(task);

  const isLast = state.taskIdx === sec.tasks.length - 1;
  const nav =
    sec.id === "speaking" || sec.id === "listening"
      ? null
      : h(
          "div",
          { class: "row between", style: "margin-top:24px" },
          h(
            "button",
            {
              class: "btn",
              disabled: state.taskIdx === 0 || sec.id === "listening",
              onclick: () => {
                state.taskIdx -= 1;
                save();
                showTask();
              },
            },
            "← Edellinen",
          ),
          h(
            "button",
            {
              class: "btn primary",
              onclick: () => {
                if (isLast) {
                  askConfirm("Lopetetaanko tämä osakoe? Et voi palata siihen.", "Lopeta osakoe").then((ok) => ok && finishSection());
                } else {
                  state.taskIdx += 1;
                  save();
                  showTask();
                }
              },
            },
            isLast ? "Lopeta osakoe ✓" : "Seuraava →",
          ),
        );

  render(
    stepsBar(),
    h("div", { class: "progress" }, h("span", { style: `width:${((state.taskIdx + 1) / sec.tasks.length) * 100}%` })),
    h("div", { class: "task-head" }, h("h2", {}, task.title), instructions(task.instructions)),
    body,
    nav,
  );
  window.scrollTo(0, 0);
}

// ---------- question renderers (reading + listening) ----------
function renderQuestion(q, num) {
  const val = state.answers[q.id];
  const set = (v) => {
    state.answers[q.id] = v;
    save();
  };
  let input;
  if (q.type === "mc" || q.type === "tf") {
    const opts = q.type === "tf" ? ["Oikein", "Väärin"] : q.options;
    const wrap = h("div", { class: "options" });
    opts.forEach((o, i) => {
      const id = `${q.id}-${i}`;
      const label = h(
        "label",
        { class: "option" + (val === i ? " selected" : ""), for: id },
        h("input", { type: "radio", name: q.id, id, checked: val === i }),
        h("span", {}, q.type === "mc" ? `${String.fromCharCode(65 + i)}) ${o}` : o),
      );
      label.querySelector("input").onchange = () => {
        set(i);
        wrap.querySelectorAll(".option").forEach((el) => el.classList.remove("selected"));
        label.classList.add("selected");
      };
      wrap.append(label);
    });
    input = wrap;
  } else {
    input = h("input", { type: "text", value: val || "", placeholder: q.placeholder || "Kirjoita vastaus…" });
    input.oninput = () => set(input.value);
  }
  return h(
    "div",
    { class: "question" },
    h("div", { class: "q" }, `${num}. ${q.q}`),
    q.type === "open" && q.hint ? h("div", { class: "tiny" }, q.hint) : null,
    input,
  );
}

function renderQuestions(task) {
  let n = 0;
  return h(
    "div",
    {},
    task.questions.map((q) => {
      n += 1;
      return renderQuestion(q, n);
    }),
  );
}

// Two columns on wide screens: the material stays in view on the left, answers on the right.
function split(left, right) {
  return h("div", { class: "split" }, h("div", { class: "pane pane-sticky" }, left), h("div", { class: "pane" }, right));
}

function renderReadingTask(task) {
  return split(
    (task.texts || [task.text]).map((t) =>
      h("div", { class: "reading-text" }, t.title ? h("span", { class: "title" }, t.title) : null, t.body),
    ),
    renderQuestions(task),
  );
}

// Listening runs like the language studio: reading time for the questions, the recording
// plays by itself, then a second time (long recordings in parts with answering pauses),
// then answering time, and the next task starts automatically. No play, pause or back.
const LISTEN = { gapSec: 8, partPauseSec: 15 };

function listeningTimes(task) {
  const n = task.questions.length;
  const open = task.questions.filter((q) => q.type === "open").length;
  return {
    readSec: Math.min(75, 20 + 10 * n),
    answerSec: Math.min(90, 20 + 8 * n + 10 * open),
  };
}

// Second playing of a long recording (interviews, dialogues) is split into about three parts.
function secondPlayingParts(task) {
  const idx = task.lines.map((_, i) => i);
  if (task.lines.length < 6) return [idx];
  const size = Math.ceil(idx.length / 3);
  return [idx.slice(0, size), idx.slice(size, 2 * size), idx.slice(2 * size)].filter((p) => p.length);
}

function renderListeningTask(task) {
  const ac = new AbortController();
  speakingCtl = ac;
  const phaseEl = h("div", { class: "phase" });
  const countEl = h("div", { class: "countdown" });
  const status = h("div", { class: "status" }, phaseEl, countEl);
  const { readSec, answerSec } = listeningTimes(task);
  const sec = currentSection();
  const isLast = state.taskIdx === sec.tasks.length - 1;

  const skipEl = h("div", { class: "row end" });
  // With skipLabel a button ends the countdown early (answering time only).
  const countdown = async (seconds, label, cls = "", skipLabel) => {
    phaseEl.textContent = label;
    phaseEl.className = "phase " + cls;
    let over = false;
    let skip;
    const skipped = new Promise((r) => (skip = r));
    if (skipLabel) skipEl.replaceChildren(h("button", { class: "btn primary", onclick: () => skip() }, skipLabel));
    const run = (async () => {
      for (let t = seconds; t > 0 && !over; t--) {
        countEl.textContent = `${Math.floor(t / 60)}:${String(t % 60).padStart(2, "0")}`;
        countEl.style.setProperty("--p", ((t - 1) / seconds).toFixed(3));
        await wait(1000, ac.signal);
      }
    })();
    run.catch(() => {}); // an abort after skipping is not an error
    await Promise.race([run, skipped]);
    over = true;
    countEl.textContent = "";
    skipEl.replaceChildren();
  };
  const play = async (indices, label) => {
    phaseEl.textContent = label;
    phaseEl.className = "phase speak";
    countEl.textContent = "🔊";
    await speakLines(
      indices.map((i) => task.lines[i]),
      { rate: task.rate || 0.9, keys: indices.map((i) => `${task.id}-${i}`) },
    );
    if (ac.signal.aborted) throw new DOMException("aborted", "AbortError");
  };

  (async () => {
    try {
      await wait(400, ac.signal);
      await countdown(readSec, "Lue kysymykset – äänite alkaa automaattisesti", "prep");
      const all = task.lines.map((_, i) => i);
      await play(all, "Kuuntele (1. kerta)");
      await countdown(LISTEN.gapSec, "Kuulet tekstin uudelleen", "prep");
      const parts = secondPlayingParts(task);
      for (let p = 0; p < parts.length; p++) {
        await play(parts[p], parts.length > 1 ? `Kuuntele (2. kerta, osa ${p + 1}/${parts.length})` : "Kuuntele (2. kerta)");
        if (p < parts.length - 1) await countdown(LISTEN.partPauseSec, "Vastaa", "prep");
      }
      await countdown(answerSec, "Vastausaika", "prep", isLast ? "Valmis, jatka →" : "Valmis, seuraava tehtävä →");
      state.listened = { ...(state.listened || {}), [task.id]: true };
      if (isLast) {
        state.phase = "sheet";
        save();
        showAnswerSheet();
      } else {
        state.taskIdx += 1;
        save();
        showTask();
      }
    } catch (e) {
      if (e.name !== "AbortError") phaseEl.textContent = e.message;
    }
  })();

  return split(
    [
      h("div", { class: "player big" }, status),
      skipEl,
      task.situation ? h("p", { class: "muted" }, task.situation) : null,
      h("p", { class: "tiny" }, `${task.questions.length} kysymystä · kuulet tekstin kaksi kertaa`),
    ],
    renderQuestions(task),
  );
}

// After the last recording: time to check answers, like transferring them to the answer
// sheet in the real exam (about 10 minutes).
function showAnswerSheet() {
  stopSpeaking();
  speakingCtl?.abort();
  const ac = new AbortController();
  speakingCtl = ac;
  const sec = currentSection();
  sectionLabel.textContent = `${SECTION_INFO[sec.id].fi} · vastauslomake`;
  const countEl = h("span", { class: "timer" });
  const done = () => {
    ac.abort();
    finishSection();
  };
  let n = 0;
  render(
    stepsBar(),
    h("h2", {}, "Vastausten siirtäminen"),
    instructions({ fi: "Tarkista vastauksesi ja siirrä ne vastauslomakkeelle. Aikaa on 10 minuuttia." }),
    h("div", { class: "row between" }, countEl, h("button", { class: "btn primary", onclick: done }, "Valmis ✓")),
    h(
      "div",
      { class: "sheet-grid" },
      sec.tasks.map((t) =>
        h(
          "div",
          { class: "card" },
          h("h3", { style: "margin-top:0" }, t.title),
          t.questions.map((q) => renderQuestion(q, ++n)),
        ),
      ),
    ),
  );
  (async () => {
    try {
      for (let t = 600; t > 0; t--) {
        countEl.textContent = `${Math.floor(t / 60)}:${String(t % 60).padStart(2, "0")}`;
        await wait(1000, ac.signal);
      }
      finishSection();
    } catch {}
  })();
}

// ---------- writing ----------
function countWords(s) {
  return (s.trim().match(/\S+/g) || []).length;
}

function renderWritingTask(task) {
  const val = state.answers[task.id] || "";
  const wc = h("div", { class: "wordcount" });
  const update = (v) => {
    const n = countWords(v);
    wc.textContent = `${n} sanaa (tavoite ${task.minWords}–${task.maxWords})`;
    wc.className = "wordcount" + (n >= task.minWords ? " ok" : "");
  };
  const ta = h("textarea", { spellcheck: "false", autocomplete: "off", autocorrect: "off", autocapitalize: "off" });
  ta.value = val;
  ta.oninput = () => {
    state.answers[task.id] = ta.value;
    update(ta.value);
    save();
  };
  update(val);
  return split(
    h(
      "div",
      { class: "card prompt-card" },
      h("p", { style: "margin-top:0" }, task.prompt),
      task.bullets?.length ? h("ul", { class: "clean" }, task.bullets.map((b) => h("li", {}, b))) : null,
    ),
    [h("div", { class: "editor" }, ta), wc],
  );
}

// ---------- speaking ----------
function beep(freq = 880, ms = 220) {
  try {
    const ctx = new (window.AudioContext || window.webkitAudioContext)();
    const o = ctx.createOscillator();
    const g = ctx.createGain();
    o.frequency.value = freq;
    g.gain.value = 0.08;
    o.connect(g).connect(ctx.destination);
    o.start();
    setTimeout(() => {
      o.stop();
      ctx.close();
    }, ms);
  } catch {}
}

function wait(ms, signal) {
  return new Promise((res, rej) => {
    const t = setTimeout(res, ms);
    signal?.addEventListener("abort", () => {
      clearTimeout(t);
      rej(new DOMException("aborted", "AbortError"));
    });
  });
}

// Speaking = interview simulation. Each task (warm-up or topic) shows its card of guiding
// questions, gives preparation time, then the "interviewer" asks the questions one by one
// (read aloud) and each answer is recorded + transcribed within a time limit.
function renderSpeakingTask(task) {
  const ac = new AbortController();
  speakingCtl = ac;
  const answered = (it) => state.spoken[`${task.id}:${it.id}`];
  const firstOpen = task.items.findIndex((it) => !answered(it));
  const allDone = firstOpen === -1;
  let typedMode = IN_ARTIFACT || !sttAvailable();

  const phaseEl = h("div", { class: "phase" });
  const countEl = h("div", { class: "countdown" });
  const questionEl = h("div", { class: "small", style: "margin-top:6px" });
  const live = h("div", { class: "live-transcript" });
  const controls = h("div", { class: "row", style: "margin-top:10px" });
  const log = h("div", {});

  const sec = currentSection();
  const isLastTask = state.taskIdx === sec.tasks.length - 1;
  const goNext = () => {
    if (isLastTask) finishSection();
    else {
      state.taskIdx += 1;
      save();
      showTask();
    }
  };

  // Counts down in countEl. Ends when time is up, the skip button is pressed, or `stop`
  // resolves. Once ended it never touches the DOM again.
  async function countdown(seconds, label, cls, { skipLabel, stop } = {}) {
    phaseEl.textContent = label;
    phaseEl.className = "phase " + cls;
    let over = false;
    let skip;
    const skipped = new Promise((r) => (skip = r));
    if (skipLabel) controls.replaceChildren(h("button", { class: "btn", onclick: () => skip() }, skipLabel));
    const run = (async () => {
      for (let s = seconds; s > 0 && !over; s--) {
        countEl.textContent = `${Math.floor(s / 60)}:${String(s % 60).padStart(2, "0")}`;
        countEl.style.setProperty("--p", ((s - 1) / seconds).toFixed(3));
        await wait(1000, ac.signal);
      }
    })();
    await Promise.race([run, skipped, stop].filter(Boolean));
    over = true;
    countEl.textContent = "";
    if (skipLabel) controls.replaceChildren();
  }

  function logAnswer(it) {
    const a = answered(it);
    if (!a) return;
    const prompt = it.situation || it.cue || it.spoken || "";
    const who = it.situation || it.cue ? "Tehtävä" : exam().level === "keskitaso" ? "Äänite" : "Haastattelija";
    const meta = a.mode === "dictated" ? `sanelu · ${a.durationSec ?? "?"} s` : a.typed ? "kirjoitettu" : `${a.durationSec ?? "?"} s / ${a.limitSec} s`;
    log.append(
      h(
        "div",
        { class: "chat-turn" },
        prompt ? h("div", { class: "who" }, who) : null,
        prompt ? h("div", { class: "bubble q" }, prompt) : null,
        h("div", { class: "who right" }, "Sinä"),
        h("div", { class: "bubble a" }, a.transcript || "(ei tunnistettua puhetta)", h("span", { class: "meta" }, meta)),
        a.audioUrl ? h("audio", { controls: true, src: a.audioUrl, style: "width:100%;margin-top:4px" }) : null,
      ),
    );
  }

  async function recordAnswer(it) {
    const key = `${task.id}:${it.id}`;
    if (typedMode) {
      // On claude.ai (no microphone access) the answer is dictated with the phone keyboard's
      // microphone button; the time limit is enforced like in the real test.
      const dictate = IN_ARTIFACT;
      const ta = h("textarea", {
        id: `answer-${task.id}-${it.id}`,
        lang: "fi",
        style: "min-height:110px",
        placeholder: dictate ? "Paina näppäimistön mikrofonia 🎤 ja puhu suomeksi…" : "Kirjoita, mitä sanoisit…",
      });
      let firstInput = null;
      let lastInput = null;
      ta.addEventListener("input", () => {
        lastInput = Date.now();
        firstInput ??= lastInput;
      });
      let done;
      const saved = new Promise((r) => (done = r));
      live.replaceChildren(ta);
      controls.replaceChildren(h("button", { class: "btn primary", onclick: () => done() }, "Valmis →"));
      ta.focus();
      const timer = countdown(it.speakSec, dictate ? "Puhu nyt" : "Vastaa (kirjoittamalla)", "speak", { stop: saved }).catch(() => {});
      if (dictate) timer.then(() => setTimeout(done, 2500)); // let dictation finish its last words
      await saved;
      state.spoken[key] = {
        transcript: ta.value.trim(),
        typed: true,
        mode: dictate ? "dictated" : "typed",
        durationSec: firstInput ? Math.round((lastInput - firstInput) / 1000) : null,
        limitSec: it.speakSec,
        question: it.spoken || it.cue || it.situation || "",
        followUp: Boolean(it.followUp),
      };
      save();
      return;
    }
    beep();
    let rec;
    try {
      rec = await startAnswerRecording({ onTranscript: (t) => (live.textContent = t) });
    } catch (e) {
      live.textContent = e.message + " — kirjoita vastauksesi.";
      typedMode = true;
      return recordAnswer(it);
    }
    live.textContent = "…";
    let stopEarly;
    const early = new Promise((r) => (stopEarly = r));
    const timer = countdown(it.speakSec, "Puhu nyt", "speak", { stop: early }).catch(() => {});
    controls.replaceChildren(h("button", { class: "btn primary", onclick: () => stopEarly() }, "■ Valmis"));
    await Promise.race([timer, early, new Promise((_, rej) => ac.signal.addEventListener("abort", () => rej(new DOMException("aborted", "AbortError"))))]).catch(async (e) => {
      await rec.stop();
      throw e;
    });
    const result = await rec.stop();
    beep(660, 140);
    state.spoken[key] = {
      ...result,
      typed: false,
      limitSec: it.speakSec,
      question: it.spoken || it.cue || it.situation || "",
      followUp: Boolean(it.followUp),
    };
    save();
  }

  // Like a real interviewer: after an answer, maybe ask "Miksi?", for details or an example,
  // or rephrase when the candidate got stuck. Follow-ups are recorded and rated like the rest.
  function conversation() {
    return Object.entries(state.spoken)
      .filter(([k]) => k.startsWith(task.id + ":"))
      .map(([, v]) => ({ q: v.question, a: v.transcript }));
  }
  async function askFollowUps(it, i) {
    const warm = task.kind === "warm-up";
    const perQuestion = warm ? FOLLOW_UP_LIMITS.warmUpPerQuestion : FOLLOW_UP_LIMITS.perQuestion;
    const perTask = warm ? FOLLOW_UP_LIMITS.warmUpTotal : FOLLOW_UP_LIMITS.perTopic;
    const askedInTask = () => Object.keys(state.spoken).filter((k) => k.startsWith(task.id + ":") && k.includes("+")).length;
    for (let n = 1; n <= perQuestion && askedInTask() < perTask; n++) {
      phaseEl.textContent = "Haastattelija miettii…";
      phaseEl.className = "phase";
      live.textContent = "";
      countEl.replaceChildren(h("span", { class: "spinner" }));
      let line = null;
      try {
        line = await Promise.race([
          nextFollowUp({
            task,
            history: conversation(),
            remaining: task.items.slice(i + 1).map((x) => x.spoken),
            followsForThisQuestion: n - 1,
          }),
          wait(15000, ac.signal).then(() => null),
        ]);
      } catch (e) {
        if (e.name === "AbortError") throw e;
        line = null; // no connection to Claude: carry on with the planned questions
      }
      countEl.textContent = "";
      if (!line || ac.signal.aborted) return;
      const fu = { id: `${it.id}+${n}`, spoken: line, speakSec: Math.min(it.speakSec, 45), followUp: true };
      questionEl.replaceChildren(
        h(
          "a",
          { href: "#", class: "tiny", onclick: (e) => (e.preventDefault(), e.target.replaceWith(h("span", { class: "tiny" }, "“" + line + "”"))) },
          "Näytä kysymys tekstinä",
        ),
      );
      phaseEl.textContent = "Haastattelija kysyy 🔊";
      await speakDynamic(line, { rate: 0.92 });
      if (ac.signal.aborted) return;
      await recordAnswer(fu);
      controls.replaceChildren();
      logAnswer(fu);
      questionEl.replaceChildren();
    }
  }

  async function run() {
    try {
      controls.replaceChildren();
      // preparation (only before the first question of a topic)
      if (task.prepSec && firstOpen <= 0) {
        await countdown(task.prepSec, "Valmistautumisaika", "prep", { skipLabel: "Olen valmis →" });
      }
      for (let i = Math.max(0, firstOpen); i < task.items.length; i++) {
        const it = task.items[i];
        if (answered(it)) continue;
        const studio = ["kertominen", "keskustelu", "tilanteet", "mielipide"].includes(task.kind);
        phaseEl.textContent =
          task.kind === "tilanteet" ? `Tilanne ${i + 1}/${task.items.length}`
          : task.kind === "keskustelu" ? `Vuoro ${i + 1}/${task.items.length}`
          : studio ? "Kuuntele"
          : `Kysymys ${i + 1}/${task.items.length}`;
        phaseEl.className = "phase";
        countEl.textContent = "";
        live.textContent = "";
        controls.closest(".speak-box")?.scrollIntoView({ block: "nearest", behavior: "smooth" });
        // Printed situation (tilanteet) is shown; the interviewer's question is hidden like in a real interview.
        questionEl.replaceChildren(
          it.situation
            ? h("div", { class: "reading-text", style: "font-size:16px" }, it.situation)
            : it.spoken && !studio
              ? h(
                  "a",
                  { href: "#", class: "tiny", onclick: (e) => (e.preventDefault(), e.target.replaceWith(h("span", { class: "tiny" }, "“" + it.spoken + "”"))) },
                  "Näytä kysymys tekstinä",
                )
              : "",
        );
        if (it.spoken) await speak(it.spoken, { rate: 0.92, key: `${task.id}-${it.id}` });
        if (ac.signal.aborted) return;
        if (it.prepSec) await countdown(it.prepSec, "Lue tilanne", "prep");
        // Keskustelu: the printed cue says what to do in this turn.
        if (it.cue) questionEl.replaceChildren(h("div", { class: "cue" }, it.cue, h("span", { class: "tiny" }, ` (${it.speakSec} s)`)));
        await recordAnswer(it);
        controls.replaceChildren();
        logAnswer(it);
        questionEl.replaceChildren();
        if (["warm-up", "topic", "opinion", "roleplay"].includes(task.kind)) await askFollowUps(it, i);
        await wait(700, ac.signal);
      }
      phaseEl.textContent = task.kind === "warm-up" ? "Alkukeskustelu valmis" : task.kind === "topic" || task.kind === "opinion" || task.kind === "roleplay" ? "Aihe valmis" : "Tehtävä valmis";
      countEl.textContent = "";
      live.textContent = "";
      controls.replaceChildren(h("button", { class: "btn primary", onclick: goNext }, isLastTask ? "Lopeta puhumiskoe ✓" : exam().level === "keskitaso" ? "Seuraava tehtävä →" : "Seuraava aihe →"));
    } catch (e) {
      if (e.name !== "AbortError") live.textContent = e.message;
    }
  }

  const startBtn = h("button", { class: "btn primary" }, firstOpen > 0 ? "▶ Jatka" : "▶ Aloita");
  startBtn.onclick = () => {
    startBtn.remove();
    toggle?.remove();
    run();
  };
  const toggle = sttAvailable() && !IN_ARTIFACT
    ? h(
        "label",
        { class: "small muted", style: "display:flex;gap:6px;align-items:center" },
        h("input", { type: "checkbox", onchange: (e) => (typedMode = e.target.checked) }),
        "Kirjoita vastaukset puhumisen sijaan",
      )
    : null;

  // earlier answers, each followed by the interviewer's follow-ups (after a reload too)
  task.items.forEach((it) => {
    if (answered(it)) logAnswer(it);
    Object.entries(state.spoken)
      .filter(([k]) => k.startsWith(`${task.id}:${it.id}+`))
      .forEach(([k, v]) => logAnswer({ id: k.slice(task.id.length + 1), spoken: v.question, followUp: true }));
  });
  if (allDone) {
    phaseEl.textContent = "Vastattu";
    controls.append(h("button", { class: "btn primary", onclick: goNext }, isLastTask ? "Lopeta puhumiskoe ✓" : exam().level === "keskitaso" ? "Seuraava tehtävä →" : "Seuraava aihe →"));
  } else controls.append(...[startBtn, toggle].filter(Boolean));

  const card = task.card
    ? h(
        "div",
        { class: "card prompt-card" },
        h("h3", { style: "margin-top:0" }, task.card.title),
        task.card.questions.length ? h("ul", { class: "clean" }, task.card.questions.map((q) => h("li", {}, q))) : null,
        task.prepSec
          ? h("textarea", {
              style: "min-height:150px;margin-top:8px",
              placeholder: "Muistiinpanot (avainsanoja)",
            })
          : null,
      )
    : h("div", { class: "card soft prompt-card" }, h("p", { class: "muted", style: "margin:0" }, "Kuuntele kysymys ja vastaa. Puhu kokonaisilla lauseilla."));
  const box = h(
    "div",
    { class: "speak-box" },
    h("p", { class: "tiny", style: "margin:0 0 6px" }, `${task.items.length} kysymystä · ${task.prepSec ? `valmistautuminen ${task.prepSec >= 60 ? task.prepSec / 60 + " min" : task.prepSec + " s"} · ` : ""}vastausaika ${Math.min(...task.items.map((i) => i.speakSec))}–${Math.max(...task.items.map((i) => i.speakSec))} s / kysymys`),
    phaseEl,
    countEl,
    questionEl,
    live,
    controls,
  );
  // conversation so far first, the live turn last — like a chat
  return split(card, [log, box]);
}

// ---------- section end / rating ----------
function finishSection({ timeUp = false } = {}) {
  stopTimer();
  stopSpeaking();
  speakingCtl?.abort();
  if (state.sectionIdx < state.order.length - 1) {
    state.sectionIdx += 1;
    state.taskIdx = 0;
    state.deadline = null;
    state.phase = "intro";
    save();
    const prev = SECTION_INFO[state.order[state.sectionIdx - 1]].fi;
    render(
      stepsBar(),
      h("h1", {}, timeUp ? "Aika loppui" : "Osakoe päättyi"),
      h("p", { class: "muted" }, `${prev} on valmis. Seuraavaksi: ${SECTION_INFO[state.order[state.sectionIdx]].fi}.`),
      null,
      h("div", { class: "row end" }, h("button", { class: "btn primary", onclick: showSectionIntro }, "Jatka →")),
    );
    timerEl.hidden = true;
  } else {
    state.finished = true;
    save();
    rateAll();
  }
}

async function rateAll() {
  timerEl.hidden = true;
  sectionLabel.textContent = "Arviointi";
  const ex = exam();
  const sections = state.order.map((id) => ex.sections.find((s) => s.id === id));
  const statusList = h("ul", { class: "clean" });
  const rows = {};
  sections.forEach((s) => {
    rows[s.id] = h("li", {}, h("span", { class: "spinner" }), " ", SECTION_INFO[s.id].fi, " — arvioidaan…");
    statusList.append(rows[s.id]);
  });
  const planRow = h("li", { class: "muted" }, "Opiskelusuunnitelma — odottaa");
  statusList.append(planRow);
  render(
    h("h1", {}, "Arvioidaan vastauksiasi…"),
    h(
      "p",
      { class: "muted" },
      "The AI examiner is rating each subtest like a YKI examiner would. Writing and speaking take the longest (often 1–3 minutes).",
    ),
    h("div", { class: "card" }, statusList),
  );

  const results = {};
  await Promise.all(
    sections.map(async (s) => {
      try {
        results[s.id] = await rateSection(s, state, ex.level || "perustaso");
        rows[s.id].replaceChildren("✓ ", SECTION_INFO[s.id].fi, " — taso ", h("b", {}, results[s.id].level));
      } catch (e) {
        results[s.id] = { error: e.message, ...(s.id === "reading" || s.id === "listening" ? scoreObjective(s, state, ex.level || "perustaso") : {}) };
        rows[s.id].replaceChildren("⚠ ", SECTION_INFO[s.id].fi, " — ", h("span", { class: "small" }, e.message));
      }
    }),
  );

  planRow.replaceChildren(h("span", { class: "spinner" }), " Opiskelusuunnitelma — laaditaan…");
  let plan = null;
  try {
    plan = await buildStudyPlan(results, sections, ex.level || "perustaso");
    planRow.replaceChildren("✓ Opiskelusuunnitelma valmis");
  } catch (e) {
    planRow.replaceChildren("⚠ Opiskelusuunnitelma: ", e.message);
  }

  const record = {
    date: Date.now(),
    examId: ex.id,
    examTitle: ex.title,
    order: state.order,
    levels: Object.fromEntries(Object.entries(results).map(([k, v]) => [k, v.level || "?"])),
    results,
    plan,
    answers: state.answers,
    spoken: JSON.parse(JSON.stringify(state.spoken, (k, v) => (k === "audioUrl" ? undefined : v))),
  };
  saveHistory(record);
  const audio = Object.fromEntries(Object.entries(state.spoken).map(([k, v]) => [k, v.audioUrl]));
  clearSaved();
  showResults(record, audio);
}

function showResults(record, audio = {}) {
  stopTimer();
  timerEl.hidden = true;
  sectionLabel.textContent = "Tulokset";
  const ex = EXAMS.find((e) => e.id === record.examId);
  const onRetry = async (sectionId) => {
    const section = ex.sections.find((s) => s.id === sectionId);
    try {
      record.results[sectionId] = await rateSection(section, { answers: record.answers, spoken: record.spoken }, ex.level || "perustaso");
      record.levels[sectionId] = record.results[sectionId].level;
      if (!record.plan) record.plan = await buildStudyPlan(record.results, record.order.map((id) => ex.sections.find((s) => s.id === id)), ex.level || "perustaso").catch(() => null);
    } catch (e) {
      record.results[sectionId] = { ...record.results[sectionId], error: e.message };
    }
    replaceHistory(record);
    const y = window.scrollY;
    render(renderResults({ record, exam: ex, audio, h, SECTION_INFO, onHome: goHome, onRetry }));
    window.scrollTo(0, y);
  };
  render(renderResults({ record, exam: ex, audio, h, SECTION_INFO, onHome: goHome, onRetry }));
  window.scrollTo(0, 0);
}

function showStoredResult(i) {
  const r = loadHistory()[i];
  if (r) showResults(r);
}

window.addEventListener("beforeunload", () => save());
goHome();
