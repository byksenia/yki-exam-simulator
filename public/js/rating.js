// Rating: objective scoring for reading/listening, Claude-as-examiner for open answers,
// writing and speaking, and the final study plan.

import { askClaudeJson } from "./claude.js";
import { rubricFor } from "./rubric.js";

export const LEVELS = {
  perustaso: ["alle 1", "1", "2"],
  keskitaso: ["alle 3", "3", "4"],
};
const levelSchema = (level) => ({ type: "string", enum: LEVELS[level] || LEVELS.perustaso });

const MISTAKE = {
  type: "object",
  properties: {
    original: { type: "string", description: "The exact wrong fragment from the candidate's text/transcript" },
    correction: { type: "string", description: "Corrected Finnish" },
    explanation: { type: "string", description: "Short, simple explanation in English of the rule, with the Finnish grammar term" },
    category: {
      type: "string",
      enum: ["kielioppi", "sanasto", "oikeinkirjoitus", "sanajärjestys", "tehtävän suoritus", "sujuvuus", "rekisteri"],
    },
  },
  required: ["original", "correction", "explanation", "category"],
  additionalProperties: false,
};

const criterionSchema = (level) => ({
  type: "object",
  properties: { name: { type: "string" }, level: levelSchema(level), comment: { type: "string" } },
  required: ["name", "level", "comment"],
  additionalProperties: false,
});

const productiveSchema = (level) => ({
  type: "object",
  properties: {
    tasks: {
      type: "array",
      items: {
        type: "object",
        properties: {
          taskId: { type: "string" },
          level: levelSchema(level),
          criteria: { type: "array", items: criterionSchema(level) },
          examinerComment: { type: "string" },
          strengths: { type: "array", items: { type: "string" } },
          mistakes: { type: "array", items: MISTAKE },
          improvedVersion: { type: "string" },
          modelAnswer: { type: "string" },
        },
        required: ["taskId", "level", "criteria", "examinerComment", "strengths", "mistakes", "improvedVersion", "modelAnswer"],
        additionalProperties: false,
      },
    },
    level: levelSchema(level),
    summary: { type: "string" },
  },
  required: ["tasks", "level", "summary"],
  additionalProperties: false,
});

const OPEN_SCHEMA = {
  type: "object",
  properties: {
    items: {
      type: "array",
      items: {
        type: "object",
        properties: {
          id: { type: "string" },
          isCorrect: { type: "boolean" },
          explanation: { type: "string" },
        },
        required: ["id", "isCorrect", "explanation"],
        additionalProperties: false,
      },
    },
    summary: { type: "string" },
  },
  required: ["items", "summary"],
  additionalProperties: false,
};

const PLAN_SCHEMA = {
  type: "object",
  properties: {
    overall: { type: "string" },
    strengths: { type: "array", items: { type: "string" } },
    priorities: {
      type: "array",
      items: {
        type: "object",
        properties: {
          topic: { type: "string" },
          why: { type: "string" },
          howToStudy: { type: "string" },
          examples: { type: "array", items: { type: "string" } },
        },
        required: ["topic", "why", "howToStudy", "examples"],
        additionalProperties: false,
      },
    },
    vocabulary: { type: "array", items: { type: "string" } },
    examTips: { type: "array", items: { type: "string" } },
  },
  required: ["overall", "strengths", "priorities", "vocabulary", "examTips"],
  additionalProperties: false,
};

// ---------- reading & listening ----------

function answerText(q, given) {
  if (given == null || given === "") return "";
  if (q.type === "tf") return given === 0 ? "Oikein" : "Väärin";
  if (q.type === "mc") return `${String.fromCharCode(65 + given)}) ${q.options[given]}`;
  return String(given);
}
function correctText(q) {
  if (q.type === "tf") return q.answer ? "Oikein" : "Väärin";
  if (q.type === "mc") return `${String.fromCharCode(65 + q.answer)}) ${q.options[q.answer]}`;
  return q.accept.join(" / ");
}

function pointsToLevel(points, max, cut, level = "perustaso") {
  const [below, low, high] = LEVELS[level] || LEVELS.perustaso;
  const pct = points / max;
  if (pct >= cut.level2) return high;
  if (pct >= cut.level1) return low;
  return below;
}

// Score multiple-choice / true-false locally; open answers are left pending (isCorrect null).
export function scoreObjective(section, state, level = "perustaso") {
  const items = [];
  for (const task of section.tasks) {
    for (const q of task.questions) {
      const given = state.answers[q.id];
      let isCorrect = null;
      if (q.type === "tf") isCorrect = given === (q.answer ? 0 : 1);
      else if (q.type === "mc") isCorrect = given === q.answer;
      else {
        const norm = (s) => String(s || "").toLowerCase().replace(/[.,!?]/g, "").replace(/\s+/g, " ").trim();
        if (!norm(given)) isCorrect = false;
        else if (q.accept.some((a) => norm(a) === norm(given))) isCorrect = true;
      }
      items.push({
        taskId: task.id,
        id: q.id,
        q: q.q,
        type: q.type,
        given: answerText(q, given),
        correct: correctText(q),
        isCorrect: isCorrect ?? false,
        pending: isCorrect === null,
        explanation: q.explain || "",
        context: q.type === "open" ? q : null,
      });
    }
  }
  const points = items.filter((i) => i.isCorrect).length;
  return { items, points, maxPoints: items.length, level: pointsToLevel(points, items.length, section.cutoffs, level) };
}

async function rateObjective(section, state, level) {
  const R = rubricFor(level);
  const base = scoreObjective(section, state, level);
  const pending = base.items.filter((i) => i.pending);
  let summary = "";
  if (pending.length) {
    const blocks = pending.map((it) => {
      const task = section.tasks.find((t) => t.id === it.taskId);
      const source =
        section.id === "listening"
          ? task.lines.map((l) => `${l.speaker ? l.speaker + ": " : ""}${l.text}`).join("\n")
          : (task.texts || [task.text]).map((t) => (t.title ? t.title + "\n" : "") + t.body).join("\n\n");
      return `### Item ${it.id}\nSOURCE ${section.id === "listening" ? "(transcript of the recording)" : "(text)"}:\n${source}\n\nQUESTION: ${it.q}\nACCEPTED ANSWERS (key): ${it.context.accept.join(" | ")}\nKEY NOTE: ${it.context.keyNote || "-"}\nCANDIDATE'S ANSWER: ${it.given}`;
    });
    const prompt = `${R.openAnswers}\n\nRate these short open answers from the YKI ${level} ${section.id === "listening" ? "listening (puheen ymmärtäminen)" : "reading (tekstin ymmärtäminen)"} subtest.\n\n${blocks.join("\n\n")}\n\nFor each item return isCorrect and a one- or two-sentence explanation in English (why it is right/wrong, quoting the relevant place in the source). In "summary", give 2–3 sentences in English about the candidate's comprehension in this subtest overall, considering ALL their answers, including these multiple-choice results: ${base.items
      .filter((i) => !i.pending)
      .map((i) => `${i.id}:${i.isCorrect ? "right" : "wrong"}`)
      .join(", ")}.`;
    const res = await askClaudeJson(prompt, OPEN_SCHEMA);
    for (const r of res.items) {
      const it = base.items.find((i) => i.id === r.id);
      if (it) {
        it.isCorrect = r.isCorrect;
        it.pending = false;
        it.explanation = r.explanation;
      }
    }
    summary = res.summary;
  }
  const points = base.items.filter((i) => i.isCorrect).length;
  for (const it of base.items) delete it.context;
  return {
    items: base.items,
    points,
    maxPoints: base.maxPoints,
    level: pointsToLevel(points, base.maxPoints, section.cutoffs, level),
    summary,
  };
}

// ---------- writing ----------

async function rateWriting(section, state, level) {
  const R = rubricFor(level);
  const blocks = section.tasks.map((t) => {
    const text = (state.answers[t.id] || "").trim();
    const words = (text.match(/\S+/g) || []).length;
    return `### Task ${t.id}: ${t.title}\nTASK PROMPT SHOWN TO CANDIDATE:\n${t.prompt}\n${(t.bullets || []).map((b) => "- " + b).join("\n")}\nText type / register expected: ${t.register}\nTarget length: ${t.minWords}–${t.maxWords} words\n\nCANDIDATE'S TEXT (${words} words):\n"""\n${text || "(no answer)"}\n"""`;
  });
  const prompt = `${R.writing}\n\nRate the following YKI ${level} writing subtest (kirjoittaminen). Rate every task separately, then give the subtest level.\n\n${blocks.join("\n\n")}\n\n${R.feedbackRules}`;
  return askClaudeJson(prompt, productiveSchema(level));
}

// ---------- speaking ----------

async function rateSpeaking(section, state, level) {
  const R = rubricFor(level);
  const blocks = section.tasks.map((t) => {
    // Planned questions, each followed by the interviewer's follow-up questions (if any).
    const turns = t.items.flatMap((it) => [
      it,
      ...Object.entries(state.spoken)
        .filter(([k]) => k.startsWith(`${t.id}:${it.id}+`))
        .map(([k, v]) => ({ id: k.slice(t.id.length + 1), spoken: v.question, speakSec: v.limitSec, followUp: true })),
    ]);
    const items = turns.map((it, i) => {
      const a = state.spoken[`${t.id}:${it.id}`];
      const words = a?.transcript ? (a.transcript.match(/\S+/g) || []).length : 0;
      const how = !a
        ? "(no answer)"
        : a.mode === "dictated"
          ? `(SPOKEN, transcribed by the phone keyboard's dictation; about ${a.durationSec ?? "?"} s between first and last recognised words, ${a.limitSec} s allowed; ${words} words. Dictation may add punctuation and auto-correct, so judge fluency from the amount of speech, and pronunciation cannot be assessed)`
          : a.typed
          ? `(TYPED instead of spoken — rate content and language; fluency/pronunciation cannot be assessed)`
          : `(spoken; recording ${a.durationSec ?? "?"} s of the ${a.limitSec} s allowed; ${words} words recognised)`;
      const prompt = [
        it.situation ? `Printed situation: "${it.situation}"` : "",
        it.spoken ? `${level === "keskitaso" ? "Recorded prompt" : it.followUp ? "Interviewer (follow-up)" : "Interviewer"}: "${it.spoken}"` : "(candidate starts the dialogue)",
        it.cue ? `Printed cue for this turn: ${it.cue} (${it.speakSec} s)` : "",
      ].filter(Boolean).join("\n     ");
      return `  ${i + 1}. ${prompt}\n     Candidate ${how}: "${a?.transcript || ""}"`;
    });
    const card = t.card ? `Card shown to candidate: ${t.card.title}\nGuiding questions: ${t.card.questions.join(" | ")}\n` : "";
    return `### Task ${t.id}: ${t.title} (${t.kind}${t.kind === "warm-up" ? " — supporting evidence only" : ""})\n${card}${items.join("\n")}`;
  });
  const prompt = `${R.speaking}\n\nRate the following YKI ${level} speaking subtest (puhuminen). The answers are automatic speech-recognition transcripts (Finnish ASR), so: ignore punctuation and capitalisation; ASR may have "corrected" some pronunciation errors or mis-heard words — if a word looks like a recognition error rather than a language error, say so instead of counting it as the candidate's mistake. Use the answer duration vs. time allowed and the amount of speech as evidence for fluency.${level === "perustaso" ? " The interviewer adapted to the candidate with follow-up questions (marked \"follow-up\"): a follow-up that simplifies or rephrases a question shows the candidate needed help; follow-ups asking for reasons, details or comparisons are chances to show level-2 language — judge how well the candidate used them." : ""} Rate each task, then give the subtest level.\n\n${blocks.join("\n\n")}\n\n${R.feedbackRules}\nFor speaking, "improvedVersion" = a natural ${level === "keskitaso" ? "level-4" : "level-2"} way to answer the same prompts, written as what the candidate could say (one line per item). "modelAnswer" may repeat key phrases useful for these situations.`;
  return askClaudeJson(prompt, productiveSchema(level));
}

export async function rateSection(section, state, level = "perustaso") {
  if (section.id === "reading" || section.id === "listening") return rateObjective(section, state, level);
  if (section.id === "writing") return rateWriting(section, state, level);
  return rateSpeaking(section, state, level);
}

// ---------- study plan ----------

export async function buildStudyPlan(results, sections, level = "perustaso") {
  const parts = sections.map((s) => {
    const r = results[s.id];
    if (!r || r.error) return `## ${s.id}: not rated`;
    if (s.id === "reading" || s.id === "listening") {
      const wrong = r.items.filter((i) => !i.isCorrect).map((i) => `- ${i.q} | answered: ${i.given || "(blank)"} | key: ${i.correct} | ${i.explanation}`);
      return `## ${s.id}: level ${r.level}, ${r.points}/${r.maxPoints}\n${r.summary || ""}\nWrong answers:\n${wrong.join("\n") || "none"}`;
    }
    const ms = r.tasks.flatMap((t) => t.mistakes.map((m) => `- [${m.category}] ${m.original} → ${m.correction} (${m.explanation})`));
    return `## ${s.id}: level ${r.level}\n${r.summary}\n${r.tasks.map((t) => `${t.taskId}: ${t.examinerComment}`).join("\n")}\nMistakes:\n${ms.join("\n") || "none"}`;
  });
  const prompt = `${rubricFor(level).studyPlan}\n\nRESULTS OF THE PRACTICE EXAM:\n\n${parts.join("\n\n")}`;
  return askClaudeJson(prompt, PLAN_SCHEMA);
}
