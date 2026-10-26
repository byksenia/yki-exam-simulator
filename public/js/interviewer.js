// The perustaso speaking test is a live interview: the interviewer reacts to what the
// candidate says, asks "Miksi?", asks for details, examples or comparisons, and helps by
// rephrasing when the candidate gets stuck. This module plays that role between the
// planned questions of a topic.

import { askClaudeText } from "./claude.js";

// Limits so the interview keeps roughly the real length (about 15 minutes in total).
export const FOLLOW_UP_LIMITS = { perQuestion: 2, perTopic: 5, warmUpPerQuestion: 1, warmUpTotal: 2 };

/**
 * @param task      the speaking task (topic card, kind, items)
 * @param history   [{ q, a }] the conversation so far in this task, oldest first
 * @param remaining the planned questions still to come in this task (do not ask these)
 * @param followsForThisQuestion how many follow-ups this planned question already had
 * @returns the follow-up line, or null
 */
export async function nextFollowUp({ task, history, remaining, followsForThisQuestion }) {
  const last = history.at(-1);
  const words = (last?.a?.match(/\S+/g) || []).length;
  const role =
    task.kind === "roleplay"
      ? `This topic is a ROLE-PLAY. The card says: "${task.card?.title}". You play the other person in that situation (not an examiner) and stay in role: react realistically to what the candidate said, and you may add a small, everyday complication or ask them to choose or explain.`
      : task.kind === "warm-up"
        ? "This is the short WARM-UP at the start of the interview. Keep it light; at most a quick, friendly follow-up."
        : `Topic card shown to the candidate: "${task.card?.title}". Guiding questions on the card: ${(task.card?.questions || []).join(" | ")}`;

  const prompt = `You are an experienced, friendly YKI interviewer in the Finnish YKI PERUSTASO (A1–A2) speaking test. The test is a face-to-face interview. Your job is to make the candidate speak as much and as well as they can, so the raters can see whether they reach level 2 (A2): longer connected answers, reasons, descriptions, past events, comparisons, plans.

${role}

The conversation so far in this part (the candidate's answers come from speech recognition, so ignore missing punctuation and small recognition errors):
${history.map((h) => `Interviewer: ${h.q}\nCandidate: ${h.a || "(silence / no answer)"}`).join("\n")}

Planned questions that will still come later in this part (do NOT ask these or anything that overlaps with them):
${remaining.length ? remaining.map((q) => "- " + q).join("\n") : "- (none)"}

The candidate's last answer had ${words} words. You have already asked ${followsForThisQuestion} follow-up(s) about the current planned question.

Decide your next line:
- If the answer was empty, unclear or very short (under about 6 words): help like a real interviewer does — repeat the question more simply, or give a choice ("…vai…?"), or ask a simpler concrete question about the same thing.
- If the answer was short or general: ask ONE natural follow-up that builds on what the candidate actually said (use their words): Miksi? Millainen…? Kenen kanssa? Mitä sitten tapahtui? Miten se on erilaista kuin kotimaassasi? Mitä teet ensi kerralla? Kerro esimerkki.
- Ask OPEN questions (Miksi? Miten? Millainen? Mitä? Missä? Milloin?) that need a sentence or more to answer. Do not ask yes/no questions, except as help for a candidate who said nothing.
- If the answer was already long and complete (about 30+ words), return null so the interview moves on to the next planned question. Also return null if you have already asked ${task.kind === "warm-up" ? 1 : 2} follow-ups here.
- Never correct the candidate's Finnish, never praise or evaluate, never explain the task, never switch to another language.
- Write natural, simple spoken standard Finnish (A2 level vocabulary), one short sentence, at most two. You may start with a brief reaction ("Ahaa.", "Ai jaa.", "Selvä.", "Kiva.").

Reply with ONLY your line in Finnish, nothing else — or with the single word NONE to move on.`;

  const raw = await askClaudeText(prompt, { fast: true });
  const line = raw.replace(/^["“”']+|["“”']+$/g, "").split("\n")[0].trim();
  return !line || /^none\b/i.test(line) ? null : line;
}
