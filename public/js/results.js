// Results page: levels per subtest, per-task examiner feedback, mistakes with fixes,
// and the study plan.

function levelClass(level) {
  if (level === "2" || level === "4") return "ok";
  if (level === "1" || level === "3") return "warn";
  return "bad";
}

export function renderResults({ record, exam, audio, h, SECTION_INFO, onHome, onRetry }) {
  const { results, plan } = record;
  const sections = record.order.map((id) => exam.sections.find((s) => s.id === id));

  const tiles = h(
    "div",
    { class: "level-tiles" },
    sections.map((s) => {
      const r = results[s.id] || {};
      return h(
        "div",
        { class: "level-tile" },
        h("div", { class: "name" }, SECTION_INFO[s.id].fi),
        h("div", { class: "level-big" }, r.level || "–"),
        h(
          "div",
          { class: "small muted" },
          r.points != null ? `${r.points}/${r.maxPoints} p. · ` : "",
          r.level ? levelName(r.level) : r.error ? "ei arvioitu" : "",
        ),
      );
    }),
  );

  return h(
    "div",
    {},
    h("h1", {}, "Tulokset"),
    h("p", { class: "muted small" }, `${exam.title} · ${new Date(record.date).toLocaleString("fi-FI")}`),
    tiles,
    h(
      "p",
      { class: "tiny" },
      (exam.level === "keskitaso" ? "Scale: alle 3 = below B1 · 3 = B1 · 4 = B2. " : "Scale: alle 1 = below A1 · 1 = A1 · 2 = A2. ") +
        "Writing and speaking are rated by AI using the YKI criteria; " +
        "speech is judged from the transcript, answer length and timing — pronunciation can only be judged indirectly. Treat the levels as an estimate.",
    ),
    h(
      "div",
      { class: "split results-split" },
      h("div", { class: "pane" }, sections.map((s) => renderSection(s, results[s.id] || {}, record, audio, h, SECTION_INFO, onRetry))),
      h("div", { class: "pane pane-sticky" }, plan ? renderPlan(plan, h) : h("div", { class: "card soft small" }, "Opiskelusuunnitelma puuttuu.")),
    ),
    h(
      "div",
      { class: "row", style: "margin-top:24px" },
      h("button", { class: "btn primary", onclick: onHome }, "Etusivulle"),
      window.claude?.use ? null : h("button", { class: "btn", onclick: () => window.print() }, "Tulosta / Save as PDF"),
    ),
  );
}

const LEVEL_NAMES = {
  "2": "A2 — perustaso 2",
  "1": "A1 — perustaso 1",
  "alle 1": "alle A1",
  "4": "B2 — keskitaso 4",
  "3": "B1 — keskitaso 3",
  "alle 3": "alle B1",
};
function levelName(l) {
  return LEVEL_NAMES[l] || l;
}

function renderPlan(plan, h) {
  return h(
    "div",
    { class: "card" },
    h("h2", { style: "margin-top:0" }, "Mitä opiskella seuraavaksi / Study plan"),
    plan.overall ? h("p", {}, plan.overall) : null,
    plan.priorities?.length
      ? [
          h("h3", {}, "Tärkeimmät kehityskohteet"),
          plan.priorities.map((p, i) =>
            h(
              "div",
              { class: "mistake" },
              h("b", {}, `${i + 1}. ${p.topic}`),
              p.why ? h("div", { class: "why" }, p.why) : null,
              p.howToStudy ? h("div", { class: "small", style: "margin-top:6px" }, "➜ ", p.howToStudy) : null,
              p.examples?.length ? h("ul", { class: "clean small" }, p.examples.map((e) => h("li", {}, e))) : null,
            ),
          ),
        ]
      : null,
    plan.vocabulary?.length
      ? [h("h3", {}, "Sanastoa harjoiteltavaksi"), h("p", { class: "small" }, plan.vocabulary.join(" · "))]
      : null,
    plan.examTips?.length ? [h("h3", {}, "Koevinkit"), h("ul", { class: "clean small" }, plan.examTips.map((t) => h("li", {}, t)))] : null,
    plan.strengths?.length ? [h("h3", {}, "Vahvuudet"), h("ul", { class: "clean small" }, plan.strengths.map((t) => h("li", {}, t)))] : null,
  );
}

function mistakeList(mistakes, h) {
  if (!mistakes?.length) return h("p", { class: "small muted" }, "Ei merkittäviä virheitä.");
  return mistakes.map((m) =>
    h(
      "div",
      { class: "mistake" },
      h(
        "div",
        {},
        m.category ? h("span", { class: "badge", style: "margin-right:8px" }, m.category) : null,
        m.original ? h("span", { class: "orig" }, m.original) : null,
        m.original ? " → " : null,
        h("span", { class: "fix" }, m.correction),
      ),
      m.explanation ? h("div", { class: "why" }, m.explanation) : null,
    ),
  );
}

function renderSection(section, r, record, audio, h, SECTION_INFO, onRetry) {
  const info = SECTION_INFO[section.id];
  const head = h(
    "div",
    { class: "row between" },
    h("h2", { style: "margin:0" }, info.fi),
    r.level ? h("span", { class: "badge " + levelClass(r.level) }, `Taso ${r.level}`) : null,
  );

  const retry = (label) => {
    const btn = h("button", { class: "btn" }, label);
    btn.onclick = () => {
      btn.disabled = true;
      btn.replaceChildren(h("span", { class: "spinner" }), " Arvioidaan…");
      onRetry?.(section.id);
    };
    return onRetry ? btn : null;
  };

  if (r.error && !r.items) {
    return h(
      "div",
      { class: "card" },
      head,
      h("div", { class: "notice err" }, "Arviointi epäonnistui: " + r.error),
      retry("Arvioi uudelleen"),
    );
  }

  if (section.id === "reading" || section.id === "listening") {
    return h(
      "div",
      { class: "card" },
      head,
      r.error ? h("div", { class: "notice err" }, "Avoimet vastaukset jäivät arvioimatta: " + r.error) : null,
      r.error ? retry("Arvioi avoimet vastaukset uudelleen") : null,
      r.summary ? h("p", {}, r.summary) : null,
      h("p", { class: "small muted" }, `${r.points}/${r.maxPoints} pistettä`),
      section.tasks.map((task) => {
        const items = (r.items || []).filter((it) => it.taskId === task.id);
        return h(
          "details",
          { open: items.some((i) => !i.isCorrect) },
          h("summary", {}, `${task.title} — ${items.filter((i) => i.isCorrect).length}/${items.length}`),
          section.id === "listening" && task.lines
            ? h(
                "details",
                {},
                h("summary", { class: "small" }, "Näytä litterointi (transcript)"),
                h("div", { class: "answer-box small" }, task.lines.map((l) => `${l.speaker ? l.speaker + ": " : ""}${l.text}`).join("\n")),
              )
            : null,
          items.map((it) =>
            h(
              "div",
              { class: "mistake" },
              h("div", {}, h("span", { class: "badge " + (it.isCorrect ? "ok" : "bad") }, it.isCorrect ? "✓" : "✗"), " ", h("b", {}, it.q)),
              h("div", { class: "small" }, "Vastauksesi: ", it.given || h("i", {}, "(tyhjä)")),
              !it.isCorrect ? h("div", { class: "small" }, "Oikea vastaus: ", h("span", { class: "fix" }, it.correct)) : null,
              it.explanation ? h("div", { class: "why" }, it.explanation) : null,
            ),
          ),
        );
      }),
    );
  }

  // writing & speaking
  return h(
    "div",
    { class: "card" },
    head,
    r.summary ? h("p", {}, r.summary) : null,
    (r.tasks || []).map((t) => {
      const task = section.tasks.find((x) => x.id === t.taskId) || {};
      return h(
        "div",
        { style: "margin-top:18px" },
        h(
          "div",
          { class: "row between" },
          h("h3", { style: "margin:0" }, task.title || t.taskId),
          t.level ? h("span", { class: "badge " + levelClass(t.level) }, `Taso ${t.level}`) : null,
        ),
        section.id === "writing"
          ? h(
              "details",
              {},
              h("summary", { class: "small" }, "Tehtävä ja vastauksesi"),
              h("p", { class: "small" }, task.prompt),
              h("div", { class: "answer-box" }, record.answers[task.id] || "(tyhjä)"),
            )
          : renderSpokenAnswers(task, record, audio, h),
        t.examinerComment ? h("p", {}, t.examinerComment) : null,
        t.criteria?.length
          ? h(
              "table",
              { class: "criteria" },
              h("tr", {}, h("th", {}, "Kriteeri"), h("th", {}, "Taso"), h("th", {}, "Kommentti")),
              t.criteria.map((c) => h("tr", {}, h("td", {}, c.name), h("td", {}, c.level), h("td", {}, c.comment))),
            )
          : null,
        t.strengths?.length ? h("p", { class: "small" }, h("b", {}, "Hyvää: "), t.strengths.join(" · ")) : null,
        h("h3", {}, "Virheet ja korjaukset"),
        mistakeList(t.mistakes, h),
        t.improvedVersion
          ? h(
              "details",
              {},
              h("summary", {}, section.id === "writing" ? "Korjattu versio vastauksestasi" : "Parempi vastaus"),
              h("div", { class: "answer-box" }, t.improvedVersion),
            )
          : null,
        t.modelAnswer
          ? h("details", {}, h("summary", {}, "Mallivastaus (taso 2)"), h("div", { class: "answer-box" }, t.modelAnswer))
          : null,
      );
    }),
  );
}

function renderSpokenAnswers(task, record, audio, h) {
  if (!task.items) return null;
  return h(
    "details",
    {},
    h("summary", { class: "small" }, "Vastauksesi"),
    // planned questions with the interviewer's follow-ups after each
    task.items
      .flatMap((it) => [
        { key: `${task.id}:${it.id}`, q: it.situation || it.cue || it.spoken || it.id },
        ...Object.entries(record.spoken)
          .filter(([k]) => k.startsWith(`${task.id}:${it.id}+`))
          .map(([k, v]) => ({ key: k, q: "↳ " + v.question })),
      ])
      .map(({ key, q }) => {
      const a = record.spoken[key];
      return h(
        "div",
        { class: "small", style: "margin:8px 0" },
        h("b", {}, q),
        h(
          "div",
          { class: "answer-box" },
          a?.transcript || "(ei vastausta)",
          a ? h("div", { class: "tiny" }, a.mode === "dictated" ? `sanelu · ${a.durationSec ?? "?"} s / ${a.limitSec} s` : a.typed ? "kirjoitettu" : `puhuttu · ${a.durationSec ?? "?"} s / ${a.limitSec} s`) : null,
        ),
        audio[key] ? h("audio", { controls: true, src: audio[key], style: "width:100%;margin-top:4px" }) : null,
      );
    }),
  );
}
