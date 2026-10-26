// Harjoituskoe 3
export default {
  id: "koe3",
  title: "Harjoituskoe 3",
  description: "Job ads, employment office, first day at work, shift swaps, storm and winter weather, seasons.",
  sections: [
    // ------------------------------------------------------------------ READING
    {
      id: "reading",
      minutes: 50,
      cutoffs: { level1: 0.4, level2: 0.7 },
      tasks: [
        {
          id: "k3r1",
          title: "Tehtävä 1: Työpaikkailmoituksia",
          instructions: {
            fi: "Lue ilmoitukset ja vastaa kysymyksiin. Valitse oikea vaihtoehto.",
            en: "Read the adverts and answer the questions. Choose the correct option.",
          },
          texts: [
            {
              title: "A. Siivooja – Puhdas Koti Oy",
              body:
                "Haemme siivoojaa kotien ja toimistojen siivoukseen Espooseen. Työ on osa-aikaista, noin 25 tuntia viikossa, arkisin päivällä. " +
                "Ajokortista on hyötyä, mutta se ei ole pakollinen, koska työpaikoille pääsee myös bussilla. Suomen kielen perustaidot riittävät.\n" +
                "Työ alkaa 1.11. Lähetä lyhyt hakemus sähköpostilla viimeistään 25.10. Emme vastaa puhelimeen.",
            },
            {
              title: "B. Myyjä – Kahvila Aamukaste",
              body:
                "Etsimme iloista myyjää kahvilaan Tampereen keskustaan. Työ on vuorotyötä: aamuvuoro alkaa kello 6 ja iltavuoro loppuu kello 21. " +
                "Töitä on myös viikonloppuisin. Hygieniapassi on pakollinen. Aikaisempaa kokemusta ei tarvita, koska koulutamme sinut itse.\n" +
                "Tule käymään kahvilassa ja jätä hakemus kassalle tai soita esimies Mirjalle, puh. 044 765 2311.",
            },
            {
              title: "C. Varastotyöntekijä – LogiPlus",
              body:
                "Haemme varastotyöntekijöitä Vantaalle joulun kiireisiin ajalle 15.11.–31.12. Työ on fyysistä: nostat ja pakkaat paketteja. " +
                "Työvuorot ovat iltaisin ja öisin, ei viikonloppuisin. Trukkikortti on pakollinen.\n" +
                "Palkka 13,50 € tunnissa, yötyöstä maksetaan lisää. Hae netissä: logiplus.fi. Haastattelut ovat marraskuun alussa.",
            },
          ],
          questions: [
            {
              id: "k3r1q1",
              type: "mc",
              q: "Mikä on totta siivoojan työpaikasta?",
              options: ["Hakijalla täytyy olla ajokortti.", "Hakemus pitää lähettää sähköpostilla.", "Työtä tehdään myös iltaisin."],
              answer: 1,
              explain: "Advert A: 'Lähetä lyhyt hakemus sähköpostilla … Emme vastaa puhelimeen.' A driving licence is useful but 'ei ole pakollinen'; the work is 'arkisin päivällä', not in the evenings.",
            },
            {
              id: "k3r1q2",
              type: "mc",
              q: "Mitä kahvilan työntekijällä täytyy olla?",
              options: ["työkokemusta kahvilasta", "hygieniapassi", "trukkikortti"],
              answer: 1,
              explain: "Advert B: 'Hygieniapassi on pakollinen.' Experience is not needed ('Aikaisempaa kokemusta ei tarvita'); the forklift licence belongs to advert C.",
            },
            {
              id: "k3r1q3",
              type: "mc",
              q: "Mikä on totta varastotyöstä?",
              options: ["Työ kestää noin puolitoista kuukautta.", "Töitä on myös lauantaisin ja sunnuntaisin.", "Työhaastattelut ovat joulukuussa."],
              answer: 0,
              explain: "Advert C: the job is for 15.11.–31.12., i.e. about one and a half months. Shifts are 'ei viikonloppuisin'; interviews are 'marraskuun alussa'.",
            },
            {
              id: "k3r1q4",
              type: "mc",
              q: "Liisa ei halua aloittaa töitä aikaisin aamulla eikä tehdä yötöitä. Hän haluaa työn, joka jatkuu myös vuodenvaihteen jälkeen. Mikä työ sopii hänelle parhaiten?",
              options: ["siivoojan työ", "kahvilan työ", "varaston työ"],
              answer: 0,
              explain: "A is weekday daytime work with no end date. B has a morning shift starting at 6; C has night shifts and ends on 31.12.",
            },
          ],
        },
        {
          id: "k3r2",
          title: "Tehtävä 2: Viesti TE-toimistosta",
          instructions: {
            fi: "Lue viesti. Ovatko väitteet oikein vai väärin?",
            en: "Read the message. Are the statements true (oikein) or false (väärin)?",
          },
          text: {
            title: "Aihe: Kutsu työnhaun keskusteluun",
            body:
              "Hei Olena Kovalenko,\n\n" +
              "Olet ilmoittautunut työnhakijaksi 2.10. Kutsumme sinut keskusteluun, jossa puhumme koulutuksestasi ja työkokemuksestasi. " +
              "Teemme yhdessä myös suunnitelman, miten voit löytää työtä.\n\n" +
              "Aika: tiistai 21.10. kello 13.00\n" +
              "Paikka: TE-toimisto, Hämeenkatu 9, 2. kerros\n\n" +
              "Keskustelu kestää noin tunnin. Ota mukaan henkilötodistus sekä todistukset koulutuksesta ja aikaisemmista töistä. " +
              "Jos todistukset eivät ole suomeksi, ruotsiksi tai englanniksi, ne pitää kääntää. Ansioluetteloa ei tarvitse tuoda, " +
              "koska täytät sen verkossa ennen tapaamista.\n\n" +
              "Jos aika ei sovi, ilmoita siitä viimeistään kaksi päivää ennen tapaamista. Voit vaihtaa ajan Oma asiointi -palvelussa " +
              "tai soittaa numeroon 0295 040 000. Jos et tule etkä ilmoita siitä, voit menettää työttömyysrahan joksikin aikaa.\n\n" +
              "Tarvitsetko tulkin? Kerro siitä meille viimeistään viikkoa ennen tapaamista.\n\n" +
              "Ystävällisin terveisin\nPekka Laine, TE-toimisto",
          },
          questions: [
            {
              id: "k3r2q1",
              type: "tf",
              q: "Tapaamisessa Olena ja virkailija miettivät, miten Olena voisi saada töitä.",
              answer: true,
              explain: "“Teemme yhdessä myös suunnitelman, miten voit löytää työtä.”",
            },
            {
              id: "k3r2q2",
              type: "tf",
              q: "Olenan täytyy tuoda ansioluettelo paperilla tapaamiseen.",
              answer: false,
              explain: "“Ansioluetteloa ei tarvitse tuoda, koska täytät sen verkossa ennen tapaamista.”",
            },
            {
              id: "k3r2q3",
              type: "tf",
              q: "Jos Olenan työtodistus on ukrainankielinen, hänen pitää kääntää se.",
              answer: true,
              explain: "Certificates not in Finnish, Swedish or English must be translated: “ne pitää kääntää”.",
            },
            {
              id: "k3r2q4",
              type: "tf",
              q: "Olena voi siirtää tapaamista vielä samana päivänä, jos hänelle tulee este.",
              answer: false,
              explain: "Changes must be made “viimeistään kaksi päivää ennen tapaamista”.",
            },
            {
              id: "k3r2q5",
              type: "tf",
              q: "Jos Olena tarvitsee tulkin, hänen pitää kertoa siitä viimeistään 19.10.",
              answer: false,
              explain: "An interpreter must be requested a week before (by 14.10.). 19.10. is the two-day deadline for changing the time.",
            },
          ],
        },
        {
          id: "k3r3",
          title: "Tehtävä 3: Tiedote työpaikalla",
          instructions: {
            fi: "Lue tiedote ja vastaa kysymyksiin suomeksi. Vastaa lyhyesti.",
            en: "Read the notice and answer the questions in Finnish. Answer briefly.",
          },
          text: {
            title: "Hoivakoti Kotiranta – tiedote henkilökunnalle",
            body:
              "Talvi tulee! Maanantaista 3.11. alkaen henkilökunnan parkkipaikka on arkiaamuisin kello 5–7 kiinni, koska silloin tehdään lumitöitä. " +
              "Sinä aikana voit pysäköidä lähikaupan pihalle, noin 200 metrin päähän. Asiakkaiden ja vieraiden parkkipaikalle ei saa jättää autoa.\n\n" +
              "Pihalla on lämmitystolppia. Tolpan avaimen saat toimistosta. Avain maksaa 20 euroa, mutta saat rahat takaisin, kun palautat avaimen keväällä.\n\n" +
              "Joulun ja uudenvuoden työvuorolista on taukohuoneen seinällä. Jos haluat vaihtaa vuoroa, sovi asiasta ensin työkaverin kanssa " +
              "ja ilmoita sitten esimiehelle Sarille viimeistään 15.11. Samalla seinällä on lista, johon voit kirjoittaa lomatoiveesi tammikuulle.\n\n" +
              "Kun on liukasta, työmatkalla on helppo kaatua. Toimistosta saat ilmaiset liukuesteet kenkiin. Kannattaa hakea ne heti!\n\n" +
              "Turvallista talvea!\nMarja Heikkinen, johtaja",
          },
          questions: [
            {
              id: "k3r3q1",
              type: "open",
              q: "Mihin työntekijä voi jättää autonsa, jos hän tulee töihin arkiaamuna kello kuusi?",
              accept: ["lähikaupan pihalle", "kaupan pihalle", "kaupan parkkipaikalle", "lähikaupan pihaan"],
              keyNote: "The local shop's yard / car park. The customers' and visitors' car park is wrong.",
              explain: "The staff car park is closed 5–7 on weekday mornings: “Sinä aikana voit pysäköidä lähikaupan pihalle.”",
            },
            {
              id: "k3r3q2",
              type: "open",
              q: "Milloin työntekijä saa avaimen 20 euroa takaisin?",
              accept: ["kun hän palauttaa avaimen keväällä", "keväällä", "kun palauttaa avaimen"],
              keyNote: "When he/she returns the key in spring (either 'in spring' or 'when returning the key' is enough).",
              explain: "“saat rahat takaisin, kun palautat avaimen keväällä.”",
            },
            {
              id: "k3r3q3",
              type: "open",
              q: "Mitä työntekijän pitää tehdä, jos hän haluaa vaihtaa joulun työvuoroa?",
              hint: "(2 asiaa)",
              accept: ["sopia työkaverin kanssa ja ilmoittaa esimiehelle", "puhua työkaverin kanssa, kertoa Sarille"],
              keyNote: "Both: agree with a colleague first AND tell the supervisor Sari (by 15.11.).",
              explain: "“sovi asiasta ensin työkaverin kanssa ja ilmoita sitten esimiehelle Sarille viimeistään 15.11.”",
            },
            {
              id: "k3r3q4",
              type: "open",
              q: "Mitä työntekijä voi hakea toimistosta?",
              hint: "(2 asiaa)",
              accept: ["lämmitystolpan avaimen ja liukuesteet", "avain ja liukuesteet kenkiin"],
              keyNote: "Both: the key for the car-heating post AND the anti-slip shoe grips.",
              explain: "“Tolpan avaimen saat toimistosta.” and “Toimistosta saat ilmaiset liukuesteet kenkiin.”",
            },
          ],
        },
        {
          id: "k3r4",
          title: "Tehtävä 4: Uutinen",
          instructions: {
            fi: "Lue uutinen ja vastaa kysymyksiin. Valitse oikea vaihtoehto.",
            en: "Read the news item and answer the questions. Choose the correct option.",
          },
          text: {
            title: "Syysmyrsky katkaisi sähköt tuhansista kodeista",
            body:
              "Voimakas syysmyrsky kulki Länsi-Suomen yli sunnuntaina. Tuuli kaatoi puita teille ja sähkölinjoille, ja illalla noin 40 000 kotia oli ilman sähköä. " +
              "Maanantaiaamuna sähköttömiä koteja oli vielä noin 8 000, suurin osa maaseudulla.\n\n" +
              "Myrskyn takia moni juna oli myöhässä, ja Turun ja Tampereen välillä junat eivät kulkeneet ollenkaan sunnuntai-iltana. " +
              "Maanantaina junat kulkivat taas normaalisti.\n\n" +
              "Sähköyhtiön mukaan kaikki kodit saavat sähköt takaisin viimeistään keskiviikkona. Yhtiö pyytää, että ihmiset eivät soita asiakaspalveluun, " +
              "koska puhelinlinjat ovat täynnä. Tietoa sähkökatkoista on yhtiön nettisivuilla.\n\n" +
              "Ilmatieteen laitos muistuttaa, että syysmyrskyt ovat Suomessa tavallisia. Kotona kannattaa aina olla taskulamppu, paristoja ja juomavettä. " +
              "Ensi viikolla sää on ennusteen mukaan tyyni mutta kylmä: öisin voi olla jo pakkasta.",
          },
          questions: [
            {
              id: "k3r4q1",
              type: "mc",
              q: "Montako kotia oli ilman sähköä maanantaiaamuna?",
              options: ["noin 40 000", "noin 8 000", "ei yhtään"],
              answer: 1,
              explain: "“Maanantaiaamuna sähköttömiä koteja oli vielä noin 8 000.” 40 000 was on Sunday evening.",
            },
            {
              id: "k3r4q2",
              type: "mc",
              q: "Mitä junaliikenteessä tapahtui?",
              options: [
                "Turun ja Tampereen välillä ei ollut junia maanantaina.",
                "Osa junista ei kulkenut sunnuntaina.",
                "Kaikki junat olivat ajoissa.",
              ],
              answer: 1,
              explain: "On Sunday evening trains between Turku and Tampere did not run at all, and many others were late. On Monday traffic was normal again.",
            },
            {
              id: "k3r4q3",
              type: "mc",
              q: "Miksi sähköyhtiöön ei kannata soittaa?",
              options: ["Asiakaspalvelu on kiinni myrskyn takia.", "Puhelimeen on liian vaikea päästä.", "Sähköt tulevat takaisin jo tänään."],
              answer: 1,
              explain: "“koska puhelinlinjat ovat täynnä” — the lines are full, so it is hard to get through. Electricity returns by Wednesday at the latest.",
            },
            {
              id: "k3r4q4",
              type: "mc",
              q: "Mikä on uutisen viimeisen kappaleen tärkein ajatus?",
              options: ["Myrskyyn kannattaa varautua etukäteen.", "Ensi viikolla tulee uusi myrsky.", "Myrskyt ovat Suomessa harvinaisia."],
              answer: 0,
              explain: "Storms are common, so keep a torch, batteries and water at home. Next week is forecast to be calm (“tyyni”), not stormy.",
            },
          ],
        },
      ],
    },

    // ------------------------------------------------------------------ WRITING
    {
      id: "writing",
      minutes: 50,
      tasks: [
        {
          id: "k3w1",
          title: "Tehtävä 1: Viesti työnantajalle",
          instructions: { fi: "Kirjoita viesti. Kirjoita noin 30–60 sanaa.", en: "Write a message of about 30–60 words." },
          prompt:
            "Haet työtä Hotelli Kaislasta. Sinulla piti olla eilen työhaastattelu, mutta eilen oli kova lumimyrsky, etkä päässyt haastatteluun. Kirjoita sähköposti hotellin esimiehelle Anne Korhoselle.",
          bullets: [
            "Kerro, mitä eilen tapahtui.",
            "Kerro, miksi haluaisit tämän työn.",
            "Pyydä uutta haastatteluaikaa ja kerro, milloin sinulle sopii.",
            "Muista aloittaa ja lopettaa viesti sopivalla tavalla.",
          ],
          promptEn:
            "You are applying for a job at Hotel Kaisla. You had a job interview yesterday, but there was a heavy snowstorm and you could not get there. Email the manager Anne Korhonen: say what happened, why you want the job, and ask for a new interview time.",
          register: "semi-formal email to a potential employer: Hei / Hyvä Anne Korhonen … Ystävällisin terveisin + full name",
          minWords: 30,
          maxWords: 60,
        },
        {
          id: "k3w2",
          title: "Tehtävä 2: Viesti työkaverille",
          instructions: { fi: "Kirjoita viesti. Kirjoita noin 30–60 sanaa.", en: "Write a message of about 30–60 words." },
          prompt:
            "Olet töissä kaupassa. Sinulla on ensi lauantaina iltavuoro, mutta et voi tehdä sitä. Kirjoita viesti työkaverillesi Mikolle.",
          bullets: [
            "Kerro, miksi et voi tehdä lauantain vuoroa.",
            "Pyydä Mikkoa vaihtamaan vuoroa ja ehdota, minkä hänen vuoronsa sinä voisit tehdä.",
            "Muistuta Mikkoa, miten sinä autoit häntä viime kuussa.",
            "Muista aloittaa ja lopettaa viesti sopivalla tavalla.",
          ],
          promptEn:
            "You work in a shop and have an evening shift next Saturday, but you can't do it. Write to your colleague Mikko: say why, ask him to swap and suggest which of his shifts you could do, and remind him how you helped him last month.",
          register: "informal message to a colleague: Hei Mikko! / Moi! … Kiitos! / Terveisin + first name",
          minWords: 30,
          maxWords: 60,
        },
        {
          id: "k3w3",
          title: "Tehtävä 3: Mielipide – paras vuodenaika",
          instructions: { fi: "Kirjoita mielipiteesi. Kirjoita noin 30–60 sanaa.", en: "Write your opinion in about 30–60 words." },
          prompt:
            "Kaupungin nettisivuilla kysytään asukkailta: Mikä vuodenaika on Suomessa paras? Kirjoita oma mielipiteesi ja perustele se.",
          bullets: [
            "Mikä vuodenaika on sinusta paras? Miksi?",
            "Mitä teit viime vuonna tänä vuodenaikana?",
            "Mikä vuodenaika ei ole sinusta hyvä? Miksi?",
            "Mitä aiot tehdä seuraavana talvena?",
          ],
          promptEn:
            "The city website asks residents: which season is the best in Finland? Give your opinion with reasons: your favourite season and why, what you did in that season last year, which season you don't like and why, and your plans for next winter.",
          register: "short opinion text for a public website: neutral style, no greeting needed; may start 'Minun mielestäni…'",
          minWords: 30,
          maxWords: 60,
        },
      ],
    },

    // ------------------------------------------------------------------ LISTENING
    {
      id: "listening",
      minutes: null,
      approxMinutes: 30,
      cutoffs: { level1: 0.4, level2: 0.7 },
      tasks: [
        {
          id: "k3l1",
          title: "Tehtävä 1: Viesti esimieheltä",
          instructions: {
            fi: "Kuulet puhelinviestin kaksi kertaa. Lue ensin kysymykset. Vastaa lyhyesti suomeksi.",
            en: "You will hear a phone message twice. Read the questions first. Answer briefly in Finnish.",
          },
          situation: "Danielin esimies jättää viestin hänen puhelinvastaajaansa.",
          plays: 2,
          rate: 0.9,
          lines: [
            {
              speaker: "A",
              text:
                "Hei Daniel, täällä Riikka ravintolasta. Soitan ensi viikon työvuoroista. Yksi työntekijä on sairaana koko viikon, ja tarvitsen sinua lisää. " +
                "Voisitko tulla keskiviikkona aamuvuoroon? Vuoro alkaa kello kuusi, ei kun anteeksi, kello seitsemän, ja loppuu kello kolme. " +
                "Sinun torstain iltavuorosi voi sitten olla vapaa, jos haluat. Perjantain iltavuoro pysyy ennallaan, se ei muutu. " +
                "Keskiviikkoaamuna tulee iso tavaratoimitus, ja autat purkamaan sitä takapihalla. Ota siis lämpimät vaatteet, koska aamulla on ennusteen mukaan pakkasta. " +
                "Laita minulle tekstiviesti tänään ennen kello kuutta, sopiiko tämä sinulle, niin teen uuden työvuorolistan. Kiitos ja moikka!",
            },
          ],
          questions: [
            {
              id: "k3l1q1",
              type: "open",
              q: "Miksi Riikka tarvitsee Danielia lisää?",
              accept: ["yksi työntekijä on sairaana", "työkaveri on sairas", "joku on sairaana"],
              keyNote: "An employee/colleague is ill (all week).",
              explain: "“Yksi työntekijä on sairaana koko viikon, ja tarvitsen sinua lisää.”",
            },
            {
              id: "k3l1q2",
              type: "open",
              q: "Mihin aikaan keskiviikon vuoro alkaa?",
              hint: "(kellonaika)",
              accept: ["kello seitsemän", "klo 7", "7", "seitsemältä"],
              keyNote: "7 o'clock. 6 is wrong (she corrects herself).",
              explain: "“kello kuusi, ei kun anteeksi, kello seitsemän”.",
            },
            {
              id: "k3l1q3",
              type: "open",
              q: "Minkä vuoron Daniel voi saada vapaaksi?",
              accept: ["torstain iltavuoron", "torstain iltavuoro", "torstaina illalla"],
              keyNote: "Thursday's evening shift. Friday's shift does not change.",
              explain: "“Sinun torstain iltavuorosi voi sitten olla vapaa … Perjantain iltavuoro pysyy ennallaan.”",
            },
            {
              id: "k3l1q4",
              type: "open",
              q: "Mitä Danielin pitää tehdä tänään?",
              accept: ["lähettää Riikalle tekstiviesti ennen kuutta", "laittaa viesti ennen kello kuutta, sopiiko vuoro"],
              keyNote: "Send Riikka a text message before 6 o'clock (saying whether the change is OK). 'Send a message' alone is enough if the deadline or purpose is clear.",
              explain: "“Laita minulle tekstiviesti tänään ennen kello kuutta, sopiiko tämä sinulle.”",
            },
          ],
        },
        {
          id: "k3l2",
          title: "Tehtävä 2: Sääennuste",
          instructions: {
            fi: "Kuulet sääennusteen kaksi kertaa. Ovatko väitteet oikein vai väärin?",
            en: "You will hear a weather forecast twice. Are the statements true or false?",
          },
          situation: "Kuuntelet radiosta sääennustetta maanantaiaamuna.",
          plays: 2,
          rate: 0.9,
          lines: [
            {
              speaker: "A",
              text:
                "Ja sitten sää. Tänään maanantaina Etelä-Suomessa on pilvistä, ja päivällä sataa vettä. Lämpötila on noin neljä astetta. " +
                "Illalla sade muuttuu lumisateeksi, ja yöllä lämpötila laskee pakkasen puolelle. Tiistaiaamuna tiet ovat siis todella liukkaita, " +
                "joten varatkaa aamulla tavallista enemmän aikaa työmatkaan. Pohjois-Suomessa on jo talvi: siellä sataa lunta koko päivän, " +
                "ja pakkasta on kymmenen, ei kun neljätoista astetta. Keskiviikkona sää selkenee koko maassa, ja aurinko paistaa. " +
                "Silloin on kuitenkin kylmää: etelässäkin päivällä noin kolme astetta pakkasta. Viikonloppuna sää lämpenee taas, " +
                "ja lumi voi sulaa etelässä kokonaan. Hiihtäjille se on huono uutinen. Hyvää viikkoa!",
            },
          ],
          questions: [
            {
              id: "k3l2q1",
              type: "tf",
              q: "Etelä-Suomessa sataa tänään päivällä lunta.",
              answer: false,
              explain: "During the day it rains (“päivällä sataa vettä”); the rain turns to snow only in the evening.",
            },
            {
              id: "k3l2q2",
              type: "tf",
              q: "Tiistaiaamuna autolla ajaminen voi olla vaarallista.",
              answer: true,
              explain: "“Tiistaiaamuna tiet ovat siis todella liukkaita.”",
            },
            {
              id: "k3l2q3",
              type: "tf",
              q: "Pohjois-Suomessa on tänään kymmenen astetta pakkasta.",
              answer: false,
              explain: "The speaker corrects herself: “kymmenen, ei kun neljätoista astetta”.",
            },
            {
              id: "k3l2q4",
              type: "tf",
              q: "Keskiviikkona on aurinkoista mutta kylmää.",
              answer: true,
              explain: "“Keskiviikkona … aurinko paistaa. Silloin on kuitenkin kylmää.”",
            },
            {
              id: "k3l2q5",
              type: "tf",
              q: "Viikonloppuna etelässä on hyvä hiihtää.",
              answer: false,
              explain: "The weather gets warmer and the snow may melt: “Hiihtäjille se on huono uutinen.”",
            },
          ],
        },
        {
          id: "k3l3",
          title: "Tehtävä 3: Ensimmäinen työpäivä",
          instructions: {
            fi: "Kuulet keskustelun kaksi kertaa. Lue ensin kysymykset. Valitse oikea vaihtoehto.",
            en: "You will hear a conversation twice. Read the questions first. Choose the correct option.",
          },
          situation: "Amir aloittaa uudessa työpaikassa. Työkaveri Tiina näyttää hänelle paikkoja.",
          plays: 2,
          rate: 0.92,
          lines: [
            { speaker: "Tiina", text: "Hei, sinä olet varmaan Amir? Minä olen Tiina. Tervetuloa töihin!" },
            { speaker: "Amir", text: "Kiitos! Olen vähän jännittynyt. Tämä on minun ensimmäinen työpaikkani Suomessa." },
            { speaker: "Tiina", text: "Ei hätää, kyllä sinä opit. Tässä on pukuhuone. Sinun kaappisi on numero kaksikymmentäneljä, ja työvaatteet ovat siellä valmiina." },
            { speaker: "Amir", text: "Hyvä. Entä missä täällä syödään?" },
            {
              speaker: "Tiina",
              text: "Taukohuone on toisessa kerroksessa. Ruokaa voi lämmittää mikrossa, mutta jääkaappiin ei saa jättää ruokaa yön yli. Se tyhjennetään joka ilta.",
            },
            { speaker: "Amir", text: "Selvä. Kenen kanssa minä teen töitä?" },
            { speaker: "Tiina", text: "Tänään olet minun kanssani koko päivän. Huomenna olet Jussin kanssa, ei kun anteeksi, Jussi on huomenna lomalla. Olet Mervin kanssa." },
            { speaker: "Amir", text: "Okei. Ja mihin aikaan työpäivä loppuu?" },
            {
              speaker: "Tiina",
              text: "Normaalisti kello neljä. Mutta tänään sinä pääset jo kello kolme, koska iltapäivällä on henkilökunnan kokous, eikä sinun tarvitse vielä tulla siihen.",
            },
            { speaker: "Amir", text: "Kiitos, kuulostaa hyvältä." },
          ],
          questions: [
            {
              id: "k3l3q1",
              type: "mc",
              q: "Miltä Amirista tuntuu?",
              options: ["Hän on vähän hermostunut.", "Hän on hyvin väsynyt.", "Hän on rauhallinen, koska on tehnyt samaa työtä ennen."],
              answer: 0,
              explain: "“Olen vähän jännittynyt. Tämä on minun ensimmäinen työpaikkani Suomessa.”",
            },
            {
              id: "k3l3q2",
              type: "mc",
              q: "Mitä taukohuoneesta kerrotaan?",
              options: ["Siellä ei saa lämmittää ruokaa.", "Jääkaappiin ei voi jättää ruokaa yöksi.", "Se on samassa kerroksessa kuin pukuhuone."],
              answer: 1,
              explain: "“jääkaappiin ei saa jättää ruokaa yön yli”. You can heat food in the microwave; the break room is on the second floor.",
            },
            {
              id: "k3l3q3",
              type: "mc",
              q: "Kenen kanssa Amir on töissä huomenna?",
              options: ["Tiinan", "Jussin", "Mervin"],
              answer: 2,
              explain: "Tiina corrects herself: Jussi is on holiday tomorrow, so Amir works with Mervi.",
            },
            {
              id: "k3l3q4",
              type: "mc",
              q: "Miksi Amir pääsee tänään kotiin aikaisemmin?",
              options: [
                "Ensimmäinen työpäivä on aina lyhyempi.",
                "Muilla on kokous, johon hänen ei tarvitse mennä.",
                "Hänellä on itsellään menoa iltapäivällä.",
              ],
              answer: 1,
              explain: "“iltapäivällä on henkilökunnan kokous, eikä sinun tarvitse vielä tulla siihen.”",
            },
          ],
        },
        {
          id: "k3l4",
          title: "Tehtävä 4: Haastattelu – kiinteistönhoitajan työ",
          instructions: {
            fi: "Kuulet haastattelun kaksi kertaa. Ovatko väitteet oikein vai väärin?",
            en: "You will hear an interview twice. Are the statements true or false?",
          },
          situation: "Radiossa haastatellaan Carlosta, joka on kiinteistönhoitaja.",
          plays: 2,
          rate: 0.9,
          lines: [
            { speaker: "Toimittaja", text: "Carlos, sinä olet kiinteistönhoitaja. Miten löysit tämän työn?" },
            {
              speaker: "Carlos",
              text: "Etsin työtä melkein vuoden. Lähetin paljon hakemuksia, mutta en saanut vastauksia. Sitten TE-toimistossa ehdotettiin työkokeilua. Olin kolme kuukautta työkokeilussa tässä yrityksessä, ja sen jälkeen sain vakituisen paikan.",
            },
            { speaker: "Toimittaja", text: "Millaista työ on talvella?" },
            {
              speaker: "Carlos",
              text: "Talvella on paljon töitä. Kun yöllä sataa lunta, aloitan jo kello neljä, koska pihojen pitää olla puhtaita, ennen kuin ihmiset lähtevät töihin. Ajan traktoria ja hiekoitan käytävät. Joskus olen tosi väsynyt.",
            },
            { speaker: "Toimittaja", text: "Entä kesällä?" },
            {
              speaker: "Carlos",
              text: "Kesällä leikkaan nurmikkoa ja korjaan pieniä asioita asunnoissa. Kesä on rauhallisempi. Mutta eniten pidän syksystä, koska silloin ei ole liian kuuma eikä liian kylmä.",
            },
            { speaker: "Toimittaja", text: "Mitä haluaisit sanoa muille työnhakijoille?" },
            {
              speaker: "Carlos",
              text: "Älä luovuta! Ja puhu suomea aina, kun voit. Minun suomeni parani eniten työpaikalla, ei kurssilla.",
            },
          ],
          questions: [
            { id: "k3l4q1", type: "tf", q: "Carlos sai työpaikan nopeasti.", answer: false, explain: "He looked for work for almost a year and got no answers to his applications." },
            { id: "k3l4q2", type: "tf", q: "TE-toimisto auttoi Carlosta pääsemään tähän yritykseen.", answer: true, explain: "“TE-toimistossa ehdotettiin työkokeilua” — the work trial led to a permanent job." },
            { id: "k3l4q3", type: "tf", q: "Carlosin lempivuodenaika on kesä.", answer: false, explain: "Summer is calmer, but “eniten pidän syksystä”." },
            { id: "k3l4q4", type: "tf", q: "Carlos oppi suomea parhaiten kielikurssilla.", answer: false, explain: "“Minun suomeni parani eniten työpaikalla, ei kurssilla.”" },
          ],
        },
      ],
    },

    // ------------------------------------------------------------------ SPEAKING
    {
      id: "speaking",
      minutes: null,
      approxMinutes: 15,
      tasks: [
        {
          id: "k3s0",
          kind: "warm-up",
          title: "Alkukeskustelu",
          instructions: {
            fi: "Haastattelija kysyy sinulta muutaman kysymyksen. Vastaa muutamalla lauseella.",
            en: "The interviewer asks you a few questions. Answer in a few sentences.",
          },
          prepSec: 0,
          card: null,
          items: [
            { id: "a", spoken: "Hei ja tervetuloa! Millainen sää oli tänä aamuna, ja miten tulit tänne?", speakSec: 35 },
            { id: "b", spoken: "Kerro, mitä teit eilen töiden tai koulun jälkeen.", speakSec: 35 },
            { id: "c", spoken: "Miksi opiskelet suomea, ja missä tilanteissa tarvitset sitä?", speakSec: 40 },
          ],
        },
        {
          id: "k3s1",
          kind: "topic",
          title: "Aihe 1: Talvi ja vuodenajat",
          instructions: {
            fi: "Sinulla on kaksi minuuttia aikaa valmistautua. Voit kirjoittaa muistiin avainsanoja. Pyri puhumaan aktiivisesti!",
            en: "You have two minutes to prepare. You may jot down key words. Try to speak actively!",
          },
          prepSec: 120,
          card: {
            title: "Talvi ja vuodenajat",
            questions: [
              "Millainen oli ensimmäinen talvesi Suomessa?",
              "Mitä teit viime talvena?",
              "Millainen sää kotimaassasi on talvella? Entä kesällä?",
              "Mikä on erilaista Suomen ja kotimaasi vuodenajoissa?",
              "Miten pukeudut, kun ulkona on kova pakkanen?",
              "Mitä haluaisit tehdä ensi talvena?",
            ],
          },
          items: [
            { id: "a", spoken: "Puhutaan nyt talvesta. Millainen oli sinun ensimmäinen talvesi Suomessa?", speakSec: 60 },
            { id: "b", spoken: "Mitä sinä teit viime talvena? Kävitkö esimerkiksi ulkona tai harrastitko jotain?", speakSec: 60 },
            { id: "c", spoken: "Millainen sää sinun kotimaassasi on talvella? Entä kesällä?", speakSec: 60 },
            { id: "d", spoken: "Mikä on suurin ero Suomen ja kotimaasi vuodenajoissa?", speakSec: 60 },
            { id: "e", spoken: "Miten sinä pukeudut, kun ulkona on kova pakkanen?", speakSec: 45 },
            { id: "f", spoken: "Mitä haluaisit tehdä ensi talvena? Miksi?", speakSec: 50 },
          ],
        },
        {
          id: "k3s2",
          kind: "opinion",
          title: "Aihe 2: Työn hakeminen",
          instructions: {
            fi: "Sinulla on kaksi minuuttia aikaa valmistautua. Voit kirjoittaa muistiin avainsanoja. Pyri puhumaan aktiivisesti!",
            en: "You have two minutes to prepare. You may jot down key words. Try to speak actively!",
          },
          prepSec: 120,
          card: {
            title: "Työn hakeminen",
            questions: [
              "Miten Suomessa voi löytää työpaikan?",
              "Oletko hakenut töitä Suomessa tai kotimaassasi? Miten se meni?",
              "Onko työn hakeminen sinun mielestäsi helppoa vai vaikeaa? Miksi?",
              "Kuinka tärkeää suomen kieli on työssä?",
              "Mitä hyvää ja mitä huonoa osa-aikatyössä on?",
              "Mitä neuvoisit ystävälle, joka etsii työtä Suomessa?",
            ],
          },
          items: [
            { id: "a", spoken: "Seuraavaksi puhutaan työn hakemisesta. Miten Suomessa voi löytää työpaikan?", speakSec: 55 },
            { id: "b", spoken: "Oletko itse hakenut töitä, täällä tai kotimaassasi? Kerro, miten se meni.", speakSec: 65 },
            { id: "c", spoken: "Onko työn hakeminen sinun mielestäsi helppoa vai vaikeaa? Miksi?", speakSec: 55 },
            { id: "d", spoken: "Kuinka tärkeää suomen kieli on työssä? Riittääkö englanti?", speakSec: 55 },
            { id: "e", spoken: "Monet tekevät osa-aikatyötä. Mitä hyvää ja mitä huonoa siinä on?", speakSec: 60 },
            { id: "f", spoken: "Mitä neuvoisit ystävälle, joka etsii nyt työtä Suomessa?", speakSec: 55 },
          ],
        },
        {
          id: "k3s3",
          kind: "roleplay",
          title: "Aihe 3: Virhe työvuorolistassa",
          instructions: {
            fi: "Sinulla on kaksi minuuttia aikaa valmistautua. Haastattelija on esimiehesi ja sinä olet työntekijä. Pyri puhumaan aktiivisesti!",
            en: "You have two minutes to prepare. The interviewer is your supervisor and you are an employee. Try to speak actively!",
          },
          prepSec: 120,
          card: {
            title: "Olet töissä kaupassa. Uudessa työvuorolistassa sinulla on vuoro ensi lauantaina, vaikka pyysit vapaata jo kuukausi sitten. Haastattelija on esimiehesi.",
            questions: [
              "Tervehdi ja kerro ongelmasta.",
              "Kerro, milloin ja miten pyysit vapaata.",
              "Kerro, miksi tarvitset vapaata lauantaina.",
              "Ehdota ratkaisua.",
              "Sovi, mitä teette, ja kiitä.",
            ],
          },
          items: [
            { id: "a", spoken: "Hei! Mitä asiaa sinulla on?", speakSec: 45 },
            { id: "b", spoken: "Ahaa. Minä en muista sinun pyyntöäsi. Milloin ja miten sinä pyysit vapaata?", speakSec: 50 },
            { id: "c", spoken: "Ymmärrän, mutta lauantaina on paljon asiakkaita, ja kaksi työntekijää on jo lomalla. Miksi lauantai on sinulle niin tärkeä?", speakSec: 55 },
            { id: "d", spoken: "Voisitko tehdä edes aamuvuoron, kello seitsemästä kello yhteen? Vai pitääkö minun kysyä joltain toiselta?", speakSec: 50 },
            { id: "e", spoken: "No, jos joku vaihtaa vuoron kanssasi, sinä teet hänen vuoronsa. Sopiiko sinulle paremmin sunnuntai vai ensi tiistai? Miksi?", speakSec: 50 },
            { id: "f", spoken: "Hyvä, kirjoitan tämän ylös. Muista ensi kerralla kirjoittaa vapaatoiveet myös listaan taukohuoneessa. Onko vielä jotain?", speakSec: 45 },
          ],
        },
      ],
    },
  ],
};
