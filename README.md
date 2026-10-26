# YKI-testi exam simulator

A practice website for the Finnish YKI language exam (yleinen kielitutkinto). It has 20 full mock exams:

- **Perustaso (A1–A2):** 10 exams, rated alle 1 / 1 / 2.
- **Keskitaso (B1–B2):** 10 exams, rated alle 3 / 3 / 4.

Each exam has the four subtests of the real test (reading, writing, listening, speaking) with the same task types and timing. Claude acts as the examiner: it rates your writing and speaking against the official YKI criteria, then shows every mistake with a correction, an explanation and a personal study plan.

## Quick start

You need [Node.js](https://nodejs.org/) 20.12 or newer and a way to call Claude (see the next section).

```bash
git clone <this repository>
cd <repository folder>
npm install
cp .env.example .env      # then put your API key in .env (see below)
npm start                 # → http://localhost:5173
```

Open http://localhost:5173 in Chrome, Edge or Safari. Allow microphone access when the speaking test asks for it.

## Add your own Claude API key

The AI examiner needs access to Claude. The easiest way is your own API key.

1. Create an account at [console.anthropic.com](https://console.anthropic.com/) and add credits under **Billing**.
2. Go to **Settings → API keys → Create key** and copy the key (it starts with `sk-ant-`).
3. In the project folder, copy the example config and open it:

   ```bash
   cp .env.example .env
   ```

4. Paste your key after `ANTHROPIC_API_KEY=`:

   ```bash
   ANTHROPIC_API_KEY=sk-ant-...your key...
   ```

5. Restart the server (`Ctrl+C`, then `npm start`). The terminal prints `Rating with the Claude API (claude-opus-5-5)` when the key is picked up.

How the key is kept safe:

- **It stays on your computer.** The key is read only by the local server (`server.js`). The browser never sees it; it sends rating requests to the local server, which calls the Claude API.
- **It never goes into git.** `.env` is listed in `.gitignore`. Never put your key in any other file.
- **If it leaks**, delete it at console.anthropic.com and create a new one.

Costs: you pay Anthropic per use. Rating a full exam makes a few dozen calls, mostly for writing, speaking and the study plan. To spend less, set a cheaper model in `.env`, for example `YKI_MODEL=claude-sonnet-5-5`. See [anthropic.com/pricing](https://www.anthropic.com/pricing) for current prices.

If the key is wrong, the results page says "The API key was rejected. Check ANTHROPIC_API_KEY in .env."

### No API key? Use your Claude subscription

If `.env` has no API key, the server rates through the [Claude Code](https://docs.claude.com/en/docs/claude-code) CLI instead, which uses your Claude Pro or Max subscription:

```bash
npm install -g @anthropic-ai/claude-code
claude auth login         # once
npm start                 # prints "Rating with Claude Code and your Claude subscription"
```

`scripts/check-claude.sh` tests that this works.

### Settings in `.env`

| Variable | Default | What it does |
|---|---|---|
| `ANTHROPIC_API_KEY` | (empty) | Your Claude API key. Empty = use the Claude Code CLI. |
| `YKI_MODEL` | `claude-opus-5-5` | Model that rates the exam. |
| `YKI_FAST_MODEL` | `claude-sonnet-5-5` | Model for the speaking interviewer's quick follow-up questions. |
| `PORT` | `5173` | Port of the local server. |

## Audio (listening and speaking prompts)

The listening recordings and the interviewer's questions are read by a text-to-speech voice.

- **On macOS (best quality):** install a natural Finnish voice, then pre-render all clips once:
  1. System Settings → Accessibility → Spoken Content → System voice → Manage voices → Finnish → download **Satu (Enhanced)** or a Premium voice.
  2. Run `npm run audio` (takes about 15–20 minutes). The clips go to `public/audio/`.
- **On Windows or Linux:** skip this. The app uses the browser's own Finnish voice. Make sure a Finnish voice is installed in your operating system or browser.

## Using it on a phone

```bash
npm run phone
```

- The phone must be on the same Wi-Fi as the computer.
- Open the `https://<computer-ip>:5174` address the terminal prints.
- The browser warns about the certificate because it is self-made. Choose "Advanced → Proceed" (Chrome) or "Show details → visit this website" (Safari). HTTPS is needed because phones only allow the microphone on secure pages.

`public/artifact.html` is a variant of the app for publishing as a claude.ai artifact, where rating goes through the viewer's own Claude account. Pages on claude.ai can't use the microphone, so speaking answers are dictated with the phone keyboard.

## What the exams contain

The format follows Opetushallitus (OPH), *Yleisten kielitutkintojen perusteet*, and the official sample tests from the University of Jyväskylä (Solki).

| Subtest | Perustaso (A1–A2) | Keskitaso (B1–B2) |
|---|---|---|
| Tekstin ymmärtäminen (reading) | 50 min, 4 tasks, about 16 items: multiple choice, oikein/väärin, short open answers in Finnish | 60 min, 6 tasks, 30 items, texts up to 450 words |
| Kirjoittaminen (writing) | 50 min, 3 messages of 30–60 words | 54 min: formal email, informal message, opinion text |
| Puheen ymmärtäminen (listening) | about 30 min, 4 recordings | about 40 min, 5 recordings |
| Puhuminen (speaking) | a ~15 min interview: warm-up and 3 topics, each with 2 min preparation; an AI interviewer asks follow-up questions | a ~25 min studio test: kertominen, two role-plays, 5 situations, an opinion |

Like the real test, each recording plays twice on its own, with no pause or rewind, and there are 10 minutes to transfer answers at the end. Spell-check is off in the writing tasks.

### How rating works

- **Levels:** each subtest gets its own level, as on the real certificate.
- **Reading and listening:** multiple-choice and true/false items are scored automatically. Open answers are rated by Claude for comprehension; spelling doesn't count. Points convert to a level (perustaso: 40% → 1, 70% → 2; keskitaso: 50% → 3, 75% → 4).
- **Writing and speaking:** rated holistically against the official YKI criteria (`public/js/rubric.js`).
- **Feedback:** for every task you get the reasons for the level, your mistakes with corrections, a corrected version of your answer and a model answer. A study plan groups your mistakes into patterns to practise.
- **History:** results are saved in your browser's local storage only.

## Honest limitations

- **Unofficial details:** OPH doesn't publish exact minutes per subtest, word counts or point cutoffs. The values here come from test centres, teachers and the sample tests, and the cutoffs are estimates.
- **Pronunciation:** speaking is judged from the speech-recognition transcript, how long you spoke and how much you said. Pronunciation can only be judged indirectly, and speech recognition can mishear or "fix" words.
- **AI-written content:** the exam texts were written with AI and checked against the format, but not by a native-speaking examiner. Treat the levels as an estimate.
- **The exam is changing:** OPH plans computer-based YKI tests from 2027. Task types should stay similar.

## Project layout

- `server.js`: static server, plus `/api/claude` (rating; holds the API key) and `/api/tts` (macOS voice for follow-up questions).
- `public/js/exams/examN.js`: exam content, one file per exam, registered in `public/js/exam-data.js`.
- `public/js/rubric.js`: the examiner instructions, based on the official criteria.
- `public/js/rating.js`, `results.js`: scoring, rating calls, results page.
- `public/js/interviewer.js`: the adaptive speaking interviewer.
- `public/js/speech.js`: text-to-speech, speech recognition and recording.
- `scripts/render-audio.mjs`: pre-renders the audio with macOS voices.
- `docs/exam-writing-spec*.md`: how to write a new exam. Register the new file in `exam-data.js`, then run `npm run audio`.
