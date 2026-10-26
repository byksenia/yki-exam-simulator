# YKI-testi exam simulator

A practice website for the Finnish YKI language exam (yleinen kielitutkinto). It has 20 full mock exams:

- **Perustaso (A1–A2):** 10 exams, rated alle 1 / 1 / 2.
- **Keskitaso (B1–B2):** 10 exams, rated alle 3 / 3 / 4.

Each exam has the four subtests of the real test (reading, writing, listening, speaking) with the same task types and timing. An AI examiner (Claude by default, or ChatGPT and other models) rates your writing and speaking against the official YKI criteria, then shows every mistake with a correction, an explanation and a personal study plan.

## Quick start

You need [Node.js](https://nodejs.org/) 20.12 or newer and an API key for the AI examiner: [Claude](#add-your-own-claude-api-key) (recommended) or [ChatGPT and others](#use-chatgpt-or-another-ai-instead-of-claude).

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

## Use ChatGPT or another AI instead of Claude

The server can also use any API that speaks the OpenAI Chat Completions format: OpenAI (ChatGPT's models), Google Gemini, OpenRouter, or a model running on your own computer with Ollama.

### ChatGPT (OpenAI)

1. Create an account at [platform.openai.com](https://platform.openai.com/) and add credits under **Settings → Billing**. A ChatGPT Plus subscription does not include API use; the API is billed separately.
2. Create a key at [platform.openai.com/api-keys](https://platform.openai.com/api-keys) (it starts with `sk-`).
3. Put it in `.env` (copy `.env.example` first if you haven't), and leave `ANTHROPIC_API_KEY` empty:

   ```bash
   OPENAI_API_KEY=sk-...your key...
   OPENAI_MODEL=gpt-6.1-sol
   ```

4. Restart the server. It prints `Rating with an OpenAI-compatible API (gpt-6.1-sol at https://api.openai.com/v1)`.

`OPENAI_MODEL` rates the exam and also asks the speaking interviewer's follow-up questions. To use a cheaper or faster model for the follow-ups, add `OPENAI_FAST_MODEL=<model>`. Any model your account has access to works.

### Other providers

Set the provider's address in `OPENAI_BASE_URL`, its key in `OPENAI_API_KEY` and a model name it offers in `OPENAI_MODEL`:

| Provider | `OPENAI_BASE_URL` | Key from | Example `OPENAI_MODEL` |
|---|---|---|---|
| Google Gemini | `https://generativelanguage.googleapis.com/v1beta/openai` | [aistudio.google.com/apikey](https://aistudio.google.com/apikey) | `gemini-2.5-pro` |
| OpenRouter (many models, one key) | `https://openrouter.ai/api/v1` | [openrouter.ai/keys](https://openrouter.ai/keys) | `openai/gpt-6.1-sol` |
| Ollama (free, on your computer) | `http://localhost:11434/v1` | no key needed | `qwen2.5:14b` |

For a provider without a key (Ollama), or when `.env` also has an `ANTHROPIC_API_KEY`, add `AI_PROVIDER=openai` so the server knows which one to use. Model names change over time; check the provider's model list.

Good to know:

- **Rating quality depends on the model.** The examiner instructions were written and tested with Claude. Large models (GPT-6.1 Sol, Gemini Pro) should rate well; small local models often misjudge Finnish grammar and give unreliable levels.
- **The key stays on your computer**, just like the Claude key: only the local server reads `.env`.
- **A wrong key** shows "The API key was rejected. Check OPENAI_API_KEY in .env." on the results page.

## No API key? Use your Claude subscription

If `.env` has no API key, the server rates through the [Claude Code](https://docs.claude.com/en/docs/claude-code) CLI instead, which uses your Claude Pro or Max subscription:

```bash
npm install -g @anthropic-ai/claude-code
claude auth login         # once
npm start                 # prints "Rating with Claude Code and your Claude subscription"
```

`scripts/check-claude.sh` tests that this works.

## Settings in `.env`

| Variable | Default | What it does |
|---|---|---|
| `ANTHROPIC_API_KEY` | (empty) | Your Claude API key. |
| `YKI_MODEL` | `claude-opus-5-5` | Claude model that rates the exam. |
| `YKI_FAST_MODEL` | `claude-sonnet-5-5` | Claude model for the speaking interviewer's quick follow-up questions. |
| `OPENAI_API_KEY` | (empty) | Key for OpenAI or another OpenAI-compatible provider. |
| `OPENAI_BASE_URL` | `https://api.openai.com/v1` | Address of the OpenAI-compatible API. |
| `OPENAI_MODEL` | `gpt-6.1-sol` | Model that rates the exam. |
| `OPENAI_FAST_MODEL` | same as `OPENAI_MODEL` | Model for the interviewer's follow-up questions. |
| `AI_PROVIDER` | (automatic) | `anthropic` or `openai`. Needed only for keyless providers or when both keys are set. |

With no key at all, the server uses the Claude Code CLI if you're signed in to it.
| `PORT` | `5173` | Port of the local server. |

## Audio (listening and speaking prompts)

The listening recordings and the interviewer's questions are read by a text-to-speech voice.

- **On macOS (best quality):** install a natural Finnish voice, then pre-render all clips once:
  1. System Settings → Accessibility → Spoken Content → System voice → Manage voices → Finnish → download **Satu (Enhanced)** or a Premium voice.
  2. Run `npm run audio` (takes about 15–20 minutes). The clips go to `public/audio/`.
- **On Windows or Linux:** skip this. The app uses the browser's own Finnish voice; see [Windows](#windows) for the best setup.

## Windows

The app runs on Windows. Only a few Mac-specific parts behave differently.

### Setup

1. Install [Node.js](https://nodejs.org/) (the LTS version) and [Git for Windows](https://git-scm.com/download/win).
2. In PowerShell:

   ```powershell
   git clone <this repository>
   cd <repository folder>
   npm install
   cp .env.example .env
   notepad .env              # paste your API key, save, close
   npm start                 # → http://localhost:5173
   ```

3. Open http://localhost:5173 in **Microsoft Edge** (recommended) or Chrome.

### Voice (listening recordings and interview questions)

- `npm run audio` does not work on Windows; it needs the macOS voices. Skip it. The app then reads everything aloud with the browser's own Finnish voice.
- **Edge sounds best.** It includes Microsoft's natural online Finnish voices (Noora and Harri), and the app picks them automatically. Dialogues alternate between the two voices.
- **In Chrome** the app uses the Finnish voice installed in Windows. If there is none, Finnish is read with an English accent. Install one: **Settings → Time & language → Speech → Manage voices → Add voices → Suomi (Finnish)**, then restart the browser.
- To check which voices your browser has, open the browser console (F12) on the app page and run `speechSynthesis.getVoices().filter(v => v.lang.startsWith("fi"))`.

### Speaking test

- Speech recognition works in Edge and Chrome, which both support Finnish. Allow the microphone when asked. The browser sends your speech to Microsoft or Google for transcription.

### Rating

- **With an API key** (Claude or ChatGPT, see above), everything works the same as on a Mac.
- **With a Claude subscription instead of a key**, install the native Windows version of Claude Code in PowerShell, then sign in:

  ```powershell
  irm https://claude.ai/install.ps1 | iex
  claude auth login
  ```

  The server looks for `claude.exe`. A Claude Code installed with `npm install -g` is not picked up on Windows.

### Phone mode

- `npm run phone` creates its certificate with `openssl`. Git for Windows includes it; if the command still isn't found, run `npm run phone` from **Git Bash** instead of PowerShell.
- Windows Firewall will ask whether Node.js may accept connections: allow it on private networks.

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
- **Reading and listening:** multiple-choice and true/false items are scored automatically. Open answers are rated by the AI examiner for comprehension; spelling doesn't count. Points convert to a level (perustaso: 40% → 1, 70% → 2; keskitaso: 50% → 3, 75% → 4).
- **Writing and speaking:** rated holistically against the official YKI criteria (`public/js/rubric.js`).
- **Feedback:** for every task you get the reasons for the level, your mistakes with corrections, a corrected version of your answer and a model answer. A study plan groups your mistakes into patterns to practise.
- **History:** results are saved in your browser's local storage only.

## Honest limitations

- **Unofficial details:** OPH doesn't publish exact minutes per subtest, word counts or point cutoffs. The values here come from test centres, teachers and the sample tests, and the cutoffs are estimates.
- **Pronunciation:** speaking is judged from the speech-recognition transcript, how long you spoke and how much you said. Pronunciation can only be judged indirectly, and speech recognition can mishear or "fix" words.
- **AI-written content:** the exam texts were written with AI and checked against the format, but not by a native-speaking examiner. Treat the levels as an estimate.
- **The exam is changing:** OPH plans computer-based YKI tests from 2027. Task types should stay similar.

## Project layout

- `server.js`: static server, plus `/api/claude` (rating through Claude, an OpenAI-compatible API or the Claude Code CLI; holds the API key) and `/api/tts` (macOS voice for follow-up questions).
- `public/js/exams/examN.js`: exam content, one file per exam, registered in `public/js/exam-data.js`.
- `public/js/rubric.js`: the examiner instructions, based on the official criteria.
- `public/js/rating.js`, `results.js`: scoring, rating calls, results page.
- `public/js/interviewer.js`: the adaptive speaking interviewer.
- `public/js/speech.js`: text-to-speech, speech recognition and recording.
- `scripts/render-audio.mjs`: pre-renders the audio with macOS voices.
- `docs/exam-writing-spec*.md`: how to write a new exam. Register the new file in `exam-data.js`, then run `npm run audio`.
