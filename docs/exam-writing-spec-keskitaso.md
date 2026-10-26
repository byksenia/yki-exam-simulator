# How to write a YKI keskitaso (B1–B2) practice exam

Read `docs/exam-writing-spec.md` first. The file format, the id scheme, the language rules (Finnish only on candidate-facing screens, English in `explain`, `keyNote`, `register`, `promptEn`, `description`) and the validation command all apply. This file lists what is different at keskitaso. It is based on the official Solki keskitaso samples (ykitesti.solki.jyu.fi → testifin → keskitaso).

## The exam object

Add `level: "keskitaso"` at the top level of the exam object, next to `id`, `title` and `description`.

Each section may carry its own Finnish intro text in `ohje` and an optional `aika`. Give every section one; the perustaso defaults are wrong for keskitaso.

Results are levels **alle 3 / 3 (B1) / 4 (B2)**.

## Target difficulty: B1–B2

- An at-B1 candidate (level 3) should score roughly 55–65% in reading and listening.
- A solid B2 candidate (level 4) should score roughly 75–85%.
- Use real-world texts: news, commentary, consumer articles, instructions, opinion pieces, ads.
- Use natural vocabulary, including some abstract words and common idioms. Avoid academic or specialist C1 language.

### Reading (tekstin ymmärtäminen): `minutes: 60`, 6 tasks, 26–30 items, `cutoffs: { level1: 0.5, level2: 0.75 }`

- Text types: news item, commentary or column, magazine article, letter to the editor, instructions or guide (library, tax, safety), notice or announcement, consumer article.
- Length: 150–450 words. Mix lengths: two long texts of 350–450 words, the rest 150–300.
- Item types:
  - multiple choice with 3 options (2–3 tasks, 4–7 items each);
  - oikein/väärin (2 tasks, 5–8 items each);
  - open questions in Finnish (2 tasks, 3–4 items each, often "(2 asiaa)").
- Items test:
  - main ideas;
  - the writer's attitude or purpose;
  - inference;
  - details hidden in longer sentences;
  - distinguishing facts from opinions;
  - reasons, conditions and exceptions.
- Distractors are plausible paraphrases of nearby content that differ in a key point.

### Writing (kirjoittaminen): `minutes: 54`, exactly 3 tasks

1. **Formal email** to an organisation, for example a property manager, employer, city office or company. Use 4–5 required content points plus "at least two other points of your choice" ("Kerro lisäksi ainakin kaksi muuta asiaa."). Set `minWords: 80`, `maxWords: 150`.
2. **Informal message** to a friend, colleague or neighbour, with 3–4 points including narrating a past event and making a suggestion. Set `minWords: 60`, `maxWords: 120`.
3. **Opinion text (mielipidekirjoitus)** for a forum or a newspaper. Offer the choice of two topics A and B in the prompt, and say: "Kerro, mistä on kyse ja mitä mieltä olet asiasta. Perustele mielipiteesi ainakin kolmella tavalla." Set `minWords: 100`, `maxWords: 180`.

- Each task's `instructions.fi` gives the word range, e.g. "Kirjoita noin 80–150 sanaa."
- Messages end with "Muista aloitus ja lopetus."

### Listening (puheen ymmärtäminen): `approxMinutes: 40`, 5 tasks, 24–28 items, `cutoffs: { level1: 0.5, level2: 0.75 }`

- Recording types:
  - an interview of 6–12 turns;
  - a shopkeeper–customer conversation;
  - a phone call;
  - a short radio commentary or news report;
  - an advertisement, or short spoken situations.
- Length: 150–350 words. Speech is natural and moderately fast, with hesitations, corrections and some spoken forms (mä, sä, joo, ihan, niinku), used sparingly so text-to-speech still sounds right.
- Every recording has `plays: 2`. The app replays recordings of 6 or more `lines` in parts automatically, so split long monologues into several `lines` items.
- Item types: same three as reading. Questions follow the recording order.

### Speaking (puhuminen): `approxMinutes: 25`, studio test with recorded prompts — no interviewer

Use exactly these 4 tasks, in this order.

#### 1. Kertominen

```js
{ id: "k11s1", kind: "kertominen", title: "Tehtävä 1: Kertominen",
  instructions: { fi: "Sinulla on minuutti aikaa valmistautua. Voit tehdä muistiinpanoja. Puhu noin puolitoista minuuttia. Aloita puhuminen vasta, kun kuulet äänimerkin." },
  prepSec: 60,
  card: { title: "Kerro, …", questions: ["guiding point", "…"] },   // 3–4 guiding points
  items: [ { id: "a", spoken: "Kerro, … Aloita puhuminen nyt.", speakSec: 90 } ] }
```

#### 2. Keskustelu (two role-plays)

Each role-play is its own task with `kind: "keskustelu"` and 6–7 turns.

```js
{ id: "k11s2", kind: "keskustelu", title: "Tehtävä 2: Keskustelu",
  instructions: { fi: "Kuulet keskustelun, jossa puhut vuorotellen toisen henkilön kanssa. Lue tilanne ja ohjeet. Puhu, kun kuulet äänimerkin." },
  prepSec: 30,
  card: { title: "<situation in 2–3 sentences: who you are, whom you talk to, why>", questions: [] },
  items: [
    { id: "a", spoken: "<the other person's line; '' if you start>", cue: "[Esittele itsesi ja kerro, miksi soitat.]", speakSec: 20 },
    …
  ] }
```

- `cue` is the bracketed instruction printed for the candidate's turn.
- `speakSec` is 10, 15, 20 or 25, matching how much the cue asks for.
- The other person's lines react to a plausible answer and add complications.

#### 3. Tilanteisiin reagointi

One task with `kind: "tilanteet"`, task `prepSec: 0`, and 5 items.

```js
{ id: "a", situation: "<printed situation, 1–2 sentences, ending with what to do: 'Mitä sanot?'>",
  spoken: "Tilanne 1. <same situation read aloud>", prepSec: 20, speakSec: 30 }
```

- Make the first situation 20 s and the others 30 s.
- Mix registers: a friend, a service phone call, an apology, a complaint, asking for help.

#### 4. Mielipide

```js
{ id: "k11s5", kind: "mielipide", title: "Tehtävä 4: Mielipide",
  instructions: { fi: "Valitse aihe A tai B. Sinulla on minuutti aikaa valmistautua. Puhu noin kaksi minuuttia ja perustele mielipiteesi." },
  prepSec: 60,
  card: { title: "Valitse aihe A tai B.", questions: ["A. <topic>: <3 guiding questions>", "B. <topic>: <3 guiding questions>"] },
  items: [ { id: "a", spoken: "Kerro mielipiteesi valitsemastasi aiheesta. Aloita puhuminen nyt.", speakSec: 120 } ] }
```

Topics are debatable everyday-society questions: money, health, technology, work, environment, consumerism.
