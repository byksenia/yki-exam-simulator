// Each practice exam lives in its own module under ./exams/. A file that fails to load is
// skipped so one broken exam doesn't take the whole app down.
export const EXAM_COUNT = 20;
const loaded = await Promise.allSettled(
  Array.from({ length: EXAM_COUNT }, (_, i) => import(`./exams/exam${i + 1}.js`)),
);
export const EXAMS = loaded.filter((m) => m.status === "fulfilled").map((m) => m.value.default);
loaded.filter((m) => m.status === "rejected").forEach((m) => console.warn("Exam failed to load:", m.reason));

// Order in the real exam: reading + writing (classroom), then listening + speaking.
export const SECTION_INFO = {
  reading: {
    ohje:
      "Tässä osakokeessa luet lyhyitä tekstejä ja vastaat kysymyksiin. Tehtävissä on monivalintakysymyksiä, oikein–väärin-väitteitä ja avoimia kysymyksiä. Vastaa avoimiin kysymyksiin suomeksi. Sanakirjaa ei saa käyttää.",
    fi: "Tekstin ymmärtäminen",
    en: "Reading comprehension",
    short: "Luku",
    about:
      "Short everyday texts (letters, notices, adverts, news). Multiple choice with 3 options, oikein/väärin statements and short open answers in Finnish. No dictionary.",
  },
  writing: {
    ohje:
      "Tässä osakokeessa kirjoitat kolme lyhyttä tekstiä. Tee kaikki tehtävät. Lue tehtävät huolellisesti ja kirjoita kaikista asioista, joita tehtävässä pyydetään. Sanakirjaa ei saa käyttää.",
    fi: "Kirjoittaminen",
    en: "Writing",
    short: "Kirj.",
    about:
      "Three short guided messages: e.g. feedback to a service, an informal message to a friend or neighbour, a postcard. All three must be done. Rated on how understandable and natural your text is.",
  },
  listening: {
    ohje:
      "Tässä osakokeessa kuuntelet lyhyitä tekstejä ja vastaat kysymyksiin. Ennen jokaista tekstiä sinulla on aikaa lukea kysymykset. Kuulet jokaisen tekstin kaksi kertaa. Pitkät tekstit kuulet toisella kerralla osissa, ja osien välissä on aikaa vastata. Äänite etenee automaattisesti, etkä voi pysäyttää sitä. Vastaa avoimiin kysymyksiin suomeksi. Lopuksi sinulla on 10 minuuttia aikaa siirtää vastaukset vastauslomakkeelle.",
    aika: "Osakoe kestää noin 30 minuuttia.",
    fi: "Puheen ymmärtäminen",
    en: "Listening comprehension",
    short: "Kuuntelu",
    about:
      "Phone messages, announcements, conversations and interviews. Each recording is played twice; read the questions before listening. Same three question types as reading.",
  },
  speaking: {
    ohje:
      "Puhumiskoe on haastattelu. Ensin haastattelija kysyy sinulta muutaman kysymyksen. Sitten puhutaan kolmesta aiheesta. Ennen jokaista aihetta sinulla on noin kaksi minuuttia aikaa valmistautua. Pyri puhumaan aktiivisesti!",
    aika: "Puhumiskoe kestää noin 15 minuuttia.",
    fi: "Puhuminen",
    en: "Speaking",
    short: "Puhe",
    about:
      "At perustaso the speaking test is a ~15-minute interview: a short warm-up and three topics. Before each topic you get a card with guiding questions and about two minutes to prepare. Here the interviewer's questions are read aloud and your answers are recorded and transcribed.",
    timing: "About 15 minutes. Each topic: ~2 min preparation, then the interviewer asks questions one by one.",
  },
};
