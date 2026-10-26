# How to write a YKI perustaso practice exam

Each practice exam is one ES module in `public/js/exams/examN.js`. Use `public/js/exams/exam1.js` and `exam2.js` as the exact format reference: same object shape, field names and id scheme (`kN` prefix, e.g. `k5r2q3`). The app and the rater depend on that shape.

## Language rules

- Everything the candidate sees during the exam is in Finnish: titles, `instructions.fi`, texts, questions, options, writing prompts, bullets, speaking cards and interviewer lines. No English hints.
- English belongs only in fields the candidate sees after the exam or never: `explain`, `keyNote`, `register`, `promptEn`, `description`. You may leave out `instructions.en`.
- Finnish must be correct and natural standard Finnish (yleiskieli). Dialogues may use light spoken forms, but keep them easy for text-to-speech.
- Write times as words in listening lines ("kello puoli kuusi").

## Target difficulty: the top of perustaso (A2, level 2)

A candidate who is solidly A2 should get roughly 60–75% in reading and listening; an A1 candidate should struggle. Never go to keskitaso (B1) vocabulary or structures, but don't make anything trivially easy.

### Reading (tekstin ymmärtäminen): 50 min, 4 tasks, 16–18 items

- Text types: personal email or letter, notice from a housing company / school / workplace / service, advert or several short adverts, short news or informational text, reader's letter, web page, schedule or price list with notes.
- Length: 120–200 words per text, or 3–4 short adverts of 40–60 words each.
- Item types: multiple choice with exactly 3 options (A/B/C), oikein/väärin, and short open questions answered in Finnish. Each exam uses all three; at least 4 items are open questions.
- Questions **paraphrase** the text. Don't copy its wording, so the candidate must understand rather than match words.
- Distractors must be plausible and grounded in the text. Use:
  - a detail that belongs to another person, day or place in the text;
  - a plan that was changed ("ei kuitenkaan", "siirtyy");
  - a negation ("ei tarvitse", "ei saa");
  - a condition ("jos…").
- Include items that need:
  - combining two sentences;
  - understanding the writer's purpose or main point;
  - picking the right number, time or price among several in the text.
- Open questions ask for specific information, often "(2 asiaa)". `accept` lists short natural variants; `keyNote` says in English exactly what earns the point.

### Listening (puheen ymmärtäminen): 4 tasks, 15–17 items, each recording played twice

- Recording types: phone or voicemail message from a service, public announcement (station, shop, radio), dialogue between two people, radio interview or someone telling about their life.
- Length: 100–200 words per recording.
- Speech is natural everyday Finnish at a moderate pace. It contains "noise" the candidate must filter:
  - corrections ("ei kun torstaina");
  - changed plans;
  - extra details that are not asked;
  - numbers that sound similar.
- Use the same three item types and the same distractor rules as reading. Questions follow the order of the recording.

### Writing (kirjoittaminen): 50 min, exactly 3 tasks

1. A semi-formal message to a service, company, landlord, school or employer: a complaint, a request, feedback, or a change to a booking.
2. An informal message to a friend, neighbour or colleague: cancel or rearrange, invite, ask a favour, give news.
3. A postcard or short letter (holiday, new home, new job, a past event), or a short opinion text on an everyday matter ("Mitä mieltä olet…? Perustele.").

- Each prompt has a Finnish situation and 3–4 bullet points. At least one point needs past tense, one a reason or justification ("miksi"), and one a request, suggestion or plan.
- End the prompt with "Muista aloittaa ja lopettaa viesti sopivalla tavalla." when it is a message.
- Length: `minWords: 30`, `maxWords: 60`; the instructions say "Kirjoita noin 30–60 sanaa."

### Speaking (puhuminen): an interview of about 15 minutes

- **Warm-up (`kind: "warm-up"`), 3 questions, `prepSec: 0`, `speakSec` 30–40.** No trivial questions: never "Mikä sinun nimesi on?", "Mistä olet kotoisin?" or "Kuinka kauan olet asunut Suomessa?". Use personal questions that need two or three full sentences, e.g. "Kerro, mitä teit eilen illalla." or "Miksi opiskelet suomea, ja missä tarvitset sitä?"
- **Three topics, each `prepSec: 120` with a card of 5–7 guiding questions and 5–6 interviewer items, `speakSec` 45–75.**
  - **Topic 1, kertominen:** narrate and describe, with past tense and comparison (then vs now, here vs home country).
  - **Topic 2, mielipide:** an opinion with reasons, pros and cons, and a short "what would you recommend / what should change".
  - **Topic 3, roleplay (`kind: "roleplay"`):** an everyday transaction with a problem to solve, such as a complaint, a mistake on a bill, a rescheduled appointment, or a lost item. The card states the situation and roles. The interviewer's lines react, add a complication, and ask the candidate to choose, explain or suggest.
- Interviewer lines are natural spoken Finnish, 1–2 sentences, sometimes a follow-up ("Miksi?", "Entä…?").

## Validation

Run this after writing the file. It must print OK.

```bash
node -e "import('./public/js/exams/examN.js').then(m=>{const e=m.default,ids=new Set(),err=[];for(const s of e.sections)for(const t of s.tasks){if(ids.has(t.id))err.push('dup '+t.id);ids.add(t.id);for(const q of t.questions||[]){if(ids.has(q.id))err.push('dup '+q.id);ids.add(q.id);if(q.type==='mc'&&(q.options.length!==3||!(q.answer>=0&&q.answer<3)))err.push('mc '+q.id);if(q.type==='tf'&&typeof q.answer!=='boolean')err.push('tf '+q.id);if(q.type==='open'&&!q.accept?.length)err.push('open '+q.id)}}console.log(err.length?err:'OK',e.sections.map(s=>s.id+':'+s.tasks.length).join(' '))})"
```
