// Harjoituskoe 9
export default {
  id: "koe9",
  title: "Harjoituskoe 9",
  description: "Birthday party, library events, museum, vappu and juhannus, joulu, theatre tickets, sauna.",
  sections: [
    // ------------------------------------------------------------------ READING
    {
      id: "reading",
      minutes: 50,
      cutoffs: { level1: 0.4, level2: 0.7 },
      tasks: [
        {
          id: "k9r1",
          title: "Tehtävä 1: Kutsu syntymäpäiville",
          instructions: {
            fi: "Lue sähköposti ja vastaa kysymyksiin. Valitse oikea vaihtoehto.",
            en: "Read the email and answer the questions. Choose the correct option.",
          },
          text: {
            title: "Aihe: Kutsu juhliin!",
            body:
              "Hei Maria!\n\n" +
              "Täytän pian neljäkymmentä vuotta, ja haluan juhlia sitä ystävien kanssa. Syntymäpäiväni on vasta keskiviikkona, " +
              "mutta juhlat ovat jo lauantaina 14. syyskuuta kello 18 alkaen. Ensin ajattelin järjestää juhlat ravintolassa, " +
              "mutta se olisi ollut liian kallista. Siksi juhlimme meidän mökillä Nokialla.\n\n" +
              "Mökille pääsee bussilla numero 75. Jos tulet autolla, voisitko ottaa kyytiin myös Pekan ja Leenan? Heillä ei ole autoa.\n\n" +
              "Ruokaa ja juomaa on paljon, joten sinun ei tarvitse tuoda mitään. Lahjoja en halua! Jos kuitenkin haluat antaa jotain, " +
              "voit lahjoittaa rahaa lasten lukuprojektiin, jota kaupungin kirjasto järjestää.\n\n" +
              "Mökillä on tietysti sauna. Ota mukaan uimapuku ja pyyhe, jos haluat uida järvessä. Vesi on vielä aika lämmintä.\n\n" +
              "Voit myös jäädä yöksi, sillä mökissä on tilaa kuudelle vieraalle. Kerro minulle viimeistään sunnuntaina, pääsetkö tulemaan.\n\n" +
              "Terveisin\nSanna",
          },
          questions: [
            {
              id: "k9r1q1",
              type: "mc",
              q: "Milloin Sannan juhlat ovat?",
              options: ["Keskiviikkona", "Lauantai-iltana", "Sunnuntaina"],
              answer: 1,
              explain:
                "“juhlat ovat jo lauantaina 14. syyskuuta kello 18 alkaen”. Wednesday is her actual birthday; Sunday is the deadline for replying.",
            },
            {
              id: "k9r1q2",
              type: "mc",
              q: "Miksi juhlat eivät ole ravintolassa?",
              options: ["Ravintola oli jo varattu.", "Se olisi maksanut liikaa.", "Sanna haluaa saunoa juhlissa."],
              answer: 1,
              explain:
                "“Ensin ajattelin järjestää juhlat ravintolassa, mutta se olisi ollut liian kallista.” The sauna is mentioned, but not as the reason.",
            },
            {
              id: "k9r1q3",
              type: "mc",
              q: "Mitä Sanna pyytää Mariaa tekemään, jos Maria tulee omalla autolla?",
              options: ["Tuomaan ruokaa ja juomaa.", "Ottamaan mukaan kaksi muuta vierasta.", "Ajamaan mökille ennen muita."],
              answer: 1,
              explain:
                "“Jos tulet autolla, voisitko ottaa kyytiin myös Pekan ja Leenan?” Food is explicitly not needed (“sinun ei tarvitse tuoda mitään”).",
            },
            {
              id: "k9r1q4",
              type: "mc",
              q: "Mitä Sanna sanoo lahjoista?",
              options: [
                "Hän toivoo saavansa kirjoja.",
                "Hän ei halua lahjoja itselleen.",
                "Jokaisen vieraan pitää antaa rahaa.",
              ],
              answer: 1,
              explain:
                "“Lahjoja en halua!” Giving money to the reading project is optional (“Jos kuitenkin haluat…”), not required; books are not asked for.",
            },
            {
              id: "k9r1q5",
              type: "mc",
              q: "Mitä Marian pitää tehdä viimeistään sunnuntaina?",
              options: [
                "Ilmoittaa Sannalle, tuleeko hän juhliin.",
                "Lahjoittaa rahaa kirjaston projektiin.",
                "Varata paikka mökistä yöksi.",
              ],
              answer: 0,
              explain: "“Kerro minulle viimeistään sunnuntaina, pääsetkö tulemaan.” — she must tell Sanna whether she can come.",
            },
          ],
        },
        {
          id: "k9r2",
          title: "Tehtävä 2: Kirjaston tapahtumat",
          instructions: {
            fi: "Lue tiedote. Ovatko väitteet oikein vai väärin?",
            en: "Read the notice. Are the statements true (oikein) or false (väärin)?",
          },
          text: {
            title: "Mäntylän kirjasto: syksyn tapahtumat",
            body:
              "Kirjailijavierailu\nKirjailija Anna Mäkelä kertoo uudesta kirjastaan tiistaina 8.10. kello 18. Tilaisuus on ilmainen, " +
              "mutta saliin mahtuu vain 40 ihmistä. Varaa paikka kirjaston infosta tai netistä.\n\n" +
              "Satutunti\nJoka lauantai kello 11 luemme satuja 3–6-vuotiaille lapsille. Lokakuussa satutunti siirtyy kuitenkin sunnuntaille. " +
              "Lapsen kanssa pitää tulla aikuinen.\n\n" +
              "Neulekahvila\nTorstaisin kello 17–19 voit tulla neulomaan ja juttelemaan. Lankaa ja puikkoja voi lainata kirjastosta. " +
              "Kahvi maksaa yhden euron.\n\n" +
              "Pelipäivä\nLauantaina 26.10. kirjastossa pelataan lautapelejä koko päivän. Voit tuoda myös omat pelisi.\n\n" +
              "Huom! Syyslomaviikolla 14.–20.10. kirjasto suljetaan jo kello 16.",
          },
          questions: [
            {
              id: "k9r2q1",
              type: "tf",
              q: "Kirjailijan tilaisuuteen kannattaa ilmoittautua etukäteen.",
              answer: true,
              explain: "Free, but only 40 people fit, so you reserve a place: “Varaa paikka kirjaston infosta tai netistä.”",
            },
            {
              id: "k9r2q2",
              type: "tf",
              q: "Lokakuussa satuja luetaan lauantaiaamuisin.",
              answer: false,
              explain: "“Lokakuussa satutunti siirtyy kuitenkin sunnuntaille.” — in October it moves to Sunday.",
            },
            {
              id: "k9r2q3",
              type: "tf",
              q: "Lapset voivat tulla satutuntiin ilman vanhempia.",
              answer: false,
              explain: "“Lapsen kanssa pitää tulla aikuinen.” — an adult must come too.",
            },
            {
              id: "k9r2q4",
              type: "tf",
              q: "Neulekahvilaan pitää tuoda omat langat.",
              answer: false,
              explain: "“Lankaa ja puikkoja voi lainata kirjastosta.” — you can borrow them.",
            },
            {
              id: "k9r2q5",
              type: "tf",
              q: "Syyslomalla kirjasto on auki tavallista lyhyemmän ajan.",
              answer: true,
              explain: "“Syyslomaviikolla … kirjasto suljetaan jo kello 16.” — it closes earlier than usual.",
            },
          ],
        },
        {
          id: "k9r3",
          title: "Tehtävä 3: Museon tiedote",
          instructions: {
            fi: "Lue tiedote ja vastaa kysymyksiin suomeksi. Vastaa lyhyesti.",
            en: "Read the notice and answer the questions in Finnish. Answer briefly.",
          },
          text: {
            title: "Kaupunginmuseo – liput ja aukioloajat",
            body:
              "Avoinna ti–su 11–18, keskiviikkoisin 11–20. Maanantaisin museo on suljettu.\n\n" +
              "Liput:\nAikuiset 14 €\nOpiskelijat ja eläkeläiset 9 €\nAlle 18-vuotiaat ja Museokortti: ilmainen\n" +
              "Kuukauden ensimmäisenä perjantaina sisäänpääsy on kaikille ilmainen kello 16 jälkeen.\n\n" +
              "Uusi näyttely: Suomalainen joulu ennen ja nyt (15.11.–6.1.)\n" +
              "Näyttelyssä näet, miten joulua vietettiin Suomessa sata vuotta sitten. Opastettu kierros suomeksi on sunnuntaisin " +
              "kello 13 ja englanniksi kello 15. Kierros maksaa 3 € lipun lisäksi.\n\n" +
              "Museokahvilassa on tarjolla joulupuuroa ja glögiä. Lastenhuoneessa lapset voivat tehdä omia joulukoristeita.\n\n" +
              "Huomaa: Näyttelyssä ei saa käyttää salamaa, kun otat kuvia. Isot laukut pitää jättää narikkaan.",
          },
          questions: [
            {
              id: "k9r3q1",
              type: "open",
              q: "Minä päivänä museossa voi käydä myöhään illalla?",
              accept: ["keskiviikkona", "keskiviikkoisin", "ke", "keskiviikko"],
              keyNote: "Wednesday (open until 20). Any other day is wrong.",
              explain: "“keskiviikkoisin 11–20” — the other days close at 18.",
            },
            {
              id: "k9r3q2",
              type: "open",
              q: "Paljonko eläkeläinen maksaa yhteensä, jos hän ottaa myös suomenkielisen opastetun kierroksen?",
              accept: ["12 euroa", "12 €", "12", "kaksitoista euroa"],
              keyNote: "12 euros (ticket 9 € + tour 3 €). 9 € or 17 € is wrong.",
              explain: "Pensioner ticket 9 € + “Kierros maksaa 3 € lipun lisäksi” = 12 €.",
            },
            {
              id: "k9r3q3",
              type: "open",
              q: "Milloin kaikki pääsevät museoon maksamatta?",
              accept: [
                "kuukauden ensimmäisenä perjantaina kello 16 jälkeen",
                "kuun ensimmäisenä perjantaina klo 16 jälkeen",
                "ensimmäisenä perjantaina neljän jälkeen",
              ],
              keyNote: "The first Friday of the month after 16 o'clock. Both the day and the time limit are needed.",
              explain: "“Kuukauden ensimmäisenä perjantaina sisäänpääsy on kaikille ilmainen kello 16 jälkeen.”",
            },
            {
              id: "k9r3q4",
              type: "open",
              q: "Mitä museossa ei saa tehdä?",
              hint: "(2 asiaa)",
              accept: [
                "kuvata salamalla ja ottaa isoa laukkua mukaan näyttelyyn",
                "ei salamaa, ei isoja laukkuja",
                "käyttää salamaa ja pitää isoa laukkua mukana",
              ],
              keyNote:
                "Both: no flash photography AND no big bags in the museum (they must be left in the cloakroom). Any recognisable wording.",
              explain: "“Näyttelyssä ei saa käyttää salamaa … Isot laukut pitää jättää narikkaan.”",
            },
          ],
        },
        {
          id: "k9r4",
          title: "Tehtävä 4: Lukijan mielipide",
          instructions: {
            fi: "Lue mielipidekirjoitus ja vastaa kysymyksiin. Valitse oikea vaihtoehto.",
            en: "Read the reader's letter and answer the questions. Choose the correct option.",
          },
          text: {
            title: "Kaupunki tarvitsee yleisen saunan",
            body:
              "Muutin Suomeen viisi vuotta sitten. Kotimaassani ei ollut saunoja, ja ensimmäisellä kerralla sauna oli minusta aivan liian kuuma. " +
              "Nyt käyn saunassa monta kertaa viikossa, ja se on minulle tärkeä tapa rentoutua.\n\n" +
              "Asun kerrostalossa, jossa on yhteinen sauna. Oma saunavuoro maksaa kuitenkin 25 euroa kuukaudessa, ja vapaita vuoroja on vain " +
              "myöhään illalla. Siksi käyn usein uimahallin saunassa, mutta siellä on aina paljon ihmisiä, eikä siellä voi rauhassa jutella.\n\n" +
              "Monessa kaupungissa on nykyään yleinen sauna meren tai järven rannalla. Siellä tapaa uusia ihmisiä, ja talvella voi käydä avannossa. " +
              "Meidän kaupungissamme sellaista ei ole. Vanha yleinen sauna suljettiin jo kymmenen vuotta sitten.\n\n" +
              "Toivon, että kaupunki rakentaa uuden saunan rantapuistoon. Se olisi hyvä paikka sekä suomalaisille että maahanmuuttajille. " +
              "Saunassa kaikki ovat samanarvoisia, ja siellä on helppo aloittaa keskustelu.\n\n" +
              "Leyla Karimi, Lahti",
          },
          questions: [
            {
              id: "k9r4q1",
              type: "mc",
              q: "Mitä mieltä kirjoittaja oli saunasta, kun hän kokeili sitä ensimmäistä kertaa?",
              options: ["Se oli hänestä liian kuuma.", "Se oli hänelle tuttu kotimaasta.", "Se oli hänestä hyvä tapa rentoutua."],
              answer: 0,
              explain:
                "“ensimmäisellä kerralla sauna oli minusta aivan liian kuuma”. There were no saunas in her home country; relaxing is how she feels now, not then.",
            },
            {
              id: "k9r4q2",
              type: "mc",
              q: "Miksi kirjoittaja ei ole tyytyväinen kotitalonsa saunaan?",
              options: [
                "Siellä on aina liikaa ihmisiä.",
                "Vuoro on kallis, ja vapaita aikoja on vain myöhään.",
                "Sauna suljettiin kymmenen vuotta sitten.",
              ],
              answer: 1,
              explain:
                "“Oma saunavuoro maksaa kuitenkin 25 euroa … vapaita vuoroja on vain myöhään illalla.” Crowds are at the swimming hall; the closed sauna is the old public one.",
            },
            {
              id: "k9r4q3",
              type: "mc",
              q: "Mikä on kirjoittajan tärkein viesti?",
              options: [
                "Kerrostalojen saunavuorojen pitäisi olla halvempia.",
                "Kaupungin pitäisi tehdä uusi yleinen sauna rannalle.",
                "Maahanmuuttajien pitäisi käydä saunassa useammin.",
              ],
              answer: 1,
              explain:
                "The main point: “Toivon, että kaupunki rakentaa uuden saunan rantapuistoon.” The price of her sauna turn is only a background detail.",
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
          id: "k9w1",
          title: "Tehtävä 1: Viesti lippupalveluun",
          instructions: { fi: "Kirjoita viesti. Kirjoita noin 30–60 sanaa.", en: "Write a message of about 30–60 words." },
          prompt:
            "Ostit Lippukulma-lippupalvelusta kaksi lippua konserttiin, joka oli lauantaina 23.11. Nyt sait sähköpostin: konsertti siirtyy perjantaille 22.11. Et pääse konserttiin perjantaina. Kirjoita viesti lippupalveluun.",
          bullets: [
            "Kerro, milloin ostit liput ja mihin konserttiin.",
            "Kerro, miksi et pääse konserttiin uutena päivänä.",
            "Kerro, mitä haluat lippupalvelun tekevän.",
            "Muista aloittaa ja lopettaa viesti sopivalla tavalla.",
          ],
          promptEn:
            "You bought two concert tickets from the Lippukulma ticket service for Saturday 23 Nov. The concert has been moved to Friday 22 Nov and you can't go then. Write to the ticket service: when you bought the tickets and for which concert, why you can't come on the new date, and what you want them to do (refund, other tickets…).",
          register:
            "semi-formal message to a company: Hei / Hyvä asiakaspalvelu … Ystävällisin terveisin + full name (an order number is a plus)",
          minWords: 30,
          maxWords: 60,
        },
        {
          id: "k9w2",
          title: "Tehtävä 2: Kiitos naapurille",
          instructions: { fi: "Kirjoita viesti. Kirjoita noin 30–60 sanaa.", en: "Write a message of about 30–60 words." },
          prompt:
            "Naapurisi Eila kutsui sinut viime lauantaina saunomaan ja syömään iltapalaa. Se oli ensimmäinen kertasi suomalaisessa puusaunassa. Kirjoita Eilalle viesti.",
          bullets: [
            "Kiitä ja kerro, mikä illassa oli parasta.",
            "Kerro, mikä oli sinusta yllättävää tai vaikeaa ja miksi.",
            "Kutsu Eila teille ja ehdota aikaa.",
            "Muista aloittaa ja lopettaa viesti sopivalla tavalla.",
          ],
          promptEn:
            "Your neighbour Eila invited you for a sauna and an evening snack last Saturday; it was your first time in a Finnish wood-heated sauna. Write to Eila: thank her and say what was best, say what surprised you or was difficult and why, and invite her to your home with a suggested time.",
          register: "informal message to a neighbour you know: Hei Eila! … Terveisin / Kiitos vielä! + first name",
          minWords: 30,
          maxWords: 60,
        },
        {
          id: "k9w3",
          title: "Tehtävä 3: Mielipide juhlista",
          instructions: {
            fi: "Kirjoita mielipideteksti. Kirjoita noin 30–60 sanaa.",
            en: "Write a short opinion text of about 30–60 words.",
          },
          prompt:
            "Paikallislehti kysyy lukijoilta: Ovatko juhlat ja perinteet sinusta tärkeitä? Kirjoita lehteen lyhyt mielipideteksti.",
          bullets: [
            "Mikä juhla on sinulle tärkeä? Miksi?",
            "Kerro, miten vietit sitä viime kerralla.",
            "Mitä suomalaista juhlaa suosittelisit ulkomaalaiselle ystävälle? Miksi?",
          ],
          promptEn:
            "A local newspaper asks readers: Are celebrations and traditions important to you? Say which celebration is important to you and why, how you celebrated it last time, and which Finnish celebration you would recommend to a foreign friend and why.",
          register: "neutral opinion text for a newspaper: no greeting needed; clear opinion with reasons (minusta, koska, siksi)",
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
          id: "k9l1",
          title: "Tehtävä 1: Viesti urheiluseurasta",
          instructions: {
            fi: "Kuulet puhelinviestin kaksi kertaa. Lue ensin kysymykset. Vastaa lyhyesti suomeksi.",
            en: "You will hear a phone message twice. Read the questions first. Answer briefly in Finnish.",
          },
          situation: "Kuulet viestin puhelinvastaajasta.",
          plays: 2,
          rate: 0.9,
          lines: [
            {
              speaker: "A",
              text:
                "Hei, täällä on Mikko Laine urheiluseura Kisa-Pojista. Soitan, koska ilmoittauduit meidän aikuisten salibandyryhmään. Kiitos siitä! " +
                "Ryhmä alkaa ensi maanantaina… ei kun anteeksi, tiistaina, eli kahdeksas päivä lokakuuta. " +
                "Harjoitukset ovat Kuusikon koulun liikuntasalissa kello seitsemästä puoli yhdeksään. " +
                "Ota mukaan sisäkengät ja vesipullo. Pukuhuoneessa on suihkut, mutta pyyhettä ei saa sieltä. " +
                "Mailoja voi lainata seuralta, joten omaa mailaa ei tarvitse ostaa heti. " +
                "Kausimaksu on seitsemänkymmentä euroa, ja sen voi maksaa kahdessa osassa. Kaksi ensimmäistä kertaa voit kuitenkin kokeilla ilmaiseksi. " +
                "Seuran pikkujoulut ovat joulukuun alussa, ja sinne ovat tervetulleita myös perheenjäsenet. " +
                "Jos sinulla on kysyttävää, soita minulle tai lähetä tekstiviesti numeroon 044 765 2190. Nähdään treeneissä!",
            },
          ],
          questions: [
            {
              id: "k9l1q1",
              type: "open",
              q: "Minä päivänä ryhmä alkaa?",
              accept: ["tiistaina", "tiistaina 8.10.", "tiistai", "8. lokakuuta", "kahdeksas lokakuuta"],
              keyNote: "Tuesday (8 October). Monday is wrong — the speaker corrects himself.",
              explain: "“ensi maanantaina… ei kun anteeksi, tiistaina, eli kahdeksas päivä lokakuuta”.",
            },
            {
              id: "k9l1q2",
              type: "open",
              q: "Mitä pitää ottaa mukaan harjoituksiin?",
              hint: "(2 asiaa)",
              accept: ["sisäkengät ja vesipullo", "sisäkengät, vesipullo"],
              keyNote:
                "Both: indoor shoes AND a water bottle. Mentioning a towel as well is fine (showers have none), but both named items are needed.",
              explain: "“Ota mukaan sisäkengät ja vesipullo.”",
            },
            {
              id: "k9l1q3",
              type: "open",
              q: "Miksi uuden pelaajan ei tarvitse heti ostaa mailaa?",
              accept: ["mailan voi lainata seuralta", "seura lainaa mailoja", "voi lainata mailan"],
              keyNote: "Because you can borrow a stick from the club.",
              explain: "“Mailoja voi lainata seuralta, joten omaa mailaa ei tarvitse ostaa heti.”",
            },
            {
              id: "k9l1q4",
              type: "open",
              q: "Paljonko koko kausi maksaa?",
              accept: ["70 euroa", "70 €", "70", "seitsemänkymmentä euroa"],
              keyNote: "70 euros. (It can be paid in two parts; the first two times are free.)",
              explain: "“Kausimaksu on seitsemänkymmentä euroa, ja sen voi maksaa kahdessa osassa.”",
            },
          ],
        },
        {
          id: "k9l2",
          title: "Tehtävä 2: Vappu radiossa",
          instructions: {
            fi: "Kuulet radiotiedotteen kaksi kertaa. Ovatko väitteet oikein vai väärin?",
            en: "You will hear a radio announcement twice. Are the statements true or false?",
          },
          situation: "Kuuntelet paikallisradiota vapun alla.",
          plays: 2,
          rate: 0.9,
          lines: [
            {
              speaker: "A",
              text:
                "Ja sitten kaupungin vapputapahtumista. Vappuaattona, eli huomenna kolmaskymmenes huhtikuuta, patsaan lakitus on kauppatorilla kello kuusi illalla. " +
                "Torille tulee joka vuosi tuhansia ihmisiä, joten kannattaa tulla ajoissa. Torille ei pääse autolla, koska keskustan kadut suljetaan jo kello neljä. " +
                "Bussit kulkevat kuitenkin normaalisti. " +
                "Vappupäivänä perinteinen piknik on Kaupunginpuistossa kello yhdestätoista alkaen. Vapunpäivän aamu on sateinen, mutta iltapäivällä aurinko paistaa, " +
                "ja lämpöä on noin kaksitoista astetta. Puistossa myydään munkkeja ja simaa, mutta omat eväät voi tietysti ottaa mukaan. " +
                "Muistakaa, että puistossa ei saa olla lasipulloja. Hauskaa vappua kaikille!",
            },
          ],
          questions: [
            {
              id: "k9l2q1",
              type: "tf",
              q: "Lakitus on vapunpäivän aamuna.",
              answer: false,
              explain: "The capping is on vappu eve (vappuaatto, 30 April) at six in the evening.",
            },
            {
              id: "k9l2q2",
              type: "tf",
              q: "Vappuaattona keskustaan ei pääse bussilla.",
              answer: false,
              explain: "Cars can't get to the square, but “Bussit kulkevat kuitenkin normaalisti.”",
            },
            {
              id: "k9l2q3",
              type: "tf",
              q: "Vapunpäivän iltapäiväksi luvataan aurinkoista säätä.",
              answer: true,
              explain: "“iltapäivällä aurinko paistaa” — the rain is only in the morning.",
            },
            {
              id: "k9l2q4",
              type: "tf",
              q: "Piknikille ei saa tuoda omaa ruokaa.",
              answer: false,
              explain: "“omat eväät voi tietysti ottaa mukaan”. Only glass bottles are forbidden.",
            },
          ],
        },
        {
          id: "k9l3",
          title: "Tehtävä 3: Juhannussuunnitelmat",
          instructions: {
            fi: "Kuulet keskustelun kaksi kertaa. Lue ensin kysymykset. Valitse oikea vaihtoehto.",
            en: "You will hear a conversation twice. Read the questions first. Choose the correct option.",
          },
          situation: "Mira ja Jussi puhuvat juhannuksesta.",
          plays: 2,
          rate: 0.92,
          lines: [
            { speaker: "Mira", text: "Hei Jussi! Mitä sä teet juhannuksena?" },
            {
              speaker: "Jussi",
              text: "En vielä tiedä. Ajattelin mennä Helsinkiin festivaalille, mutta kaikki liput oli jo myyty. Harmittaa vähän.",
            },
            {
              speaker: "Mira",
              text: "Tule meidän kanssa mökille! Me lähdetään perjantaiaamuna ja tullaan takaisin sunnuntaina.",
            },
            { speaker: "Jussi", text: "Kiva idea! Mutta mulla on perjantaina töitä kolmeen asti." },
            {
              speaker: "Mira",
              text: "Ei se haittaa. Voit tulla junalla perjantai-iltana. Asema on vähän kaukana mökistä, mutta Pekka voi hakea sut sieltä autolla.",
            },
            { speaker: "Jussi", text: "Selvä. Mitä mun pitää tuoda? Ruokaa?" },
            {
              speaker: "Mira",
              text: "Ei tarvitse, ruokaa on tarpeeksi. Ota mukaan lämpimiä vaatteita, koska järvellä on illalla usein kylmä. Ja hyttysmyrkkyä! Hyttysiä on tosi paljon.",
            },
            { speaker: "Jussi", text: "Onko siellä kokko?" },
            {
              speaker: "Mira",
              text: "On. Yleensä kokko poltetaan aattona, mutta tänä vuonna se on lauantai-iltana, koska perjantaiksi on luvattu sadetta. Ja tietysti saunotaan joka ilta.",
            },
            { speaker: "Jussi", text: "Hienoa. Mä ostan junaliput heti tänään." },
          ],
          questions: [
            {
              id: "k9l3q1",
              type: "mc",
              q: "Miksi Jussi ei mene festivaalille?",
              options: ["Hänellä on töitä.", "Liput on myyty loppuun.", "Festivaali on peruttu."],
              answer: 1,
              explain: "“kaikki liput oli jo myyty”. His work on Friday only affects when he can travel to the cottage.",
            },
            {
              id: "k9l3q2",
              type: "mc",
              q: "Miten Jussi pääsee mökille?",
              options: [
                "Hän lähtee Miran kanssa perjantaiaamuna.",
                "Hän ajaa omalla autolla.",
                "Hän matkustaa junalla, ja joku hakee hänet asemalta.",
              ],
              answer: 2,
              explain: "“Voit tulla junalla perjantai-iltana … Pekka voi hakea sut sieltä autolla.” Mira leaves in the morning, but Jussi works until three.",
            },
            {
              id: "k9l3q3",
              type: "mc",
              q: "Mitä Jussin pitää ottaa mukaan?",
              options: ["Ruokaa viikonlopuksi", "Lämpimiä vaatteita ja hyttysmyrkkyä", "Junaliput Pekalle"],
              answer: 1,
              explain: "“Ota mukaan lämpimiä vaatteita … Ja hyttysmyrkkyä!” Food is not needed (“Ei tarvitse”).",
            },
            {
              id: "k9l3q4",
              type: "mc",
              q: "Milloin kokko poltetaan tänä vuonna?",
              options: ["Perjantai-iltana", "Lauantai-iltana", "Sunnuntaina"],
              answer: 1,
              explain: "Normally on the eve (Friday), but “tänä vuonna se on lauantai-iltana, koska perjantaiksi on luvattu sadetta”.",
            },
          ],
        },
        {
          id: "k9l4",
          title: "Tehtävä 4: Haastattelu",
          instructions: {
            fi: "Kuulet haastattelun kaksi kertaa. Ovatko väitteet oikein vai väärin?",
            en: "You will hear an interview twice. Are the statements true or false?",
          },
          situation: "Radiossa haastatellaan Annaa, joka muutti Suomeen Italiasta.",
          plays: 2,
          rate: 0.9,
          lines: [
            {
              speaker: "Toimittaja",
              text: "Anna, sinä muutit Suomeen Italiasta neljä vuotta sitten. Millainen oli sinun ensimmäinen suomalainen joulu?",
            },
            {
              speaker: "Anna",
              text:
                "Se oli aika erilainen. Italiassa joulu on iso ja äänekäs juhla, ja koko suku syö yhdessä monta tuntia. Täällä joulu oli paljon hiljaisempi. " +
                "Mieheni perhe kävi aattona saunassa ja hautausmaalla, ja sitten söimme kinkkua ja laatikoita.",
            },
            { speaker: "Toimittaja", text: "Pidätkö suomalaisesta jouluruoasta?" },
            {
              speaker: "Anna",
              text: "Rosollista pidän, mutta lanttulaatikko ei ole minun juttuni. Joulutorttuja leivon nykyään itse joka vuosi.",
            },
            { speaker: "Toimittaja", text: "Entä itsenäisyyspäivä?" },
            {
              speaker: "Anna",
              text:
                "Se oli minulle uusi juhla. Kuudes joulukuuta katsoimme televisiosta Linnan juhlia, ja ikkunalla paloi kaksi kynttilää. " +
                "Ensin en ymmärtänyt, miksi kaikki katsovat, kun ihmiset vain kättelevät presidenttiä! Nyt se on minusta hauska perinne.",
            },
            { speaker: "Toimittaja", text: "Onko Suomessa jotain, mitä sinun perheessäsi ei ollut?" },
            {
              speaker: "Anna",
              text:
                "Nimipäivät! Meidän perheessä niitä ei vietetty. Täällä työkaverit muistavat aina minun nimipäiväni joulukuussa ja tuovat kahvia ja pullaa. " +
                "Ensi jouluna haluan järjestää juhlan meillä Suomessa ja kutsua sekä italialaisen että suomalaisen perheen.",
            },
          ],
          questions: [
            {
              id: "k9l4q1",
              type: "tf",
              q: "Annan mielestä joulu on Italiassa rauhallisempi kuin Suomessa.",
              answer: false,
              explain: "Italian Christmas is “iso ja äänekäs”; the Finnish one was “paljon hiljaisempi”.",
            },
            {
              id: "k9l4q2",
              type: "tf",
              q: "Anna ei pidä mistään suomalaisesta jouluruoasta.",
              answer: false,
              explain: "“Rosollista pidän” — she likes rosolli; only swede casserole is not her thing.",
            },
            {
              id: "k9l4q3",
              type: "tf",
              q: "Aluksi Annasta oli outoa, että Linnan juhlia katsotaan televisiosta.",
              answer: true,
              explain: "“Ensin en ymmärtänyt, miksi kaikki katsovat, kun ihmiset vain kättelevät presidenttiä!”",
            },
            {
              id: "k9l4q4",
              type: "tf",
              q: "Annan työpaikalla hänen nimipäivänsä unohdetaan usein.",
              answer: false,
              explain: "“työkaverit muistavat aina minun nimipäiväni” — they always remember it.",
            },
            {
              id: "k9l4q5",
              type: "tf",
              q: "Anna aikoo viettää ensi joulun Italiassa.",
              answer: false,
              explain: "“Ensi jouluna haluan järjestää juhlan meillä Suomessa” and invite both families there.",
            },
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
          id: "k9s0",
          kind: "warm-up",
          title: "Alkukeskustelu",
          instructions: {
            fi: "Haastattelija kysyy sinulta muutaman kysymyksen. Vastaa muutamalla lauseella.",
            en: "The interviewer asks you a few questions. Answer in a few sentences.",
          },
          prepSec: 0,
          card: null,
          items: [
            { id: "a", spoken: "Hei ja tervetuloa! Kerro vähän, mitä teit viime viikonloppuna.", speakSec: 35 },
            { id: "b", spoken: "Mitä teet mielelläsi vapaa-ajalla, ja kenen kanssa?", speakSec: 35 },
            { id: "c", spoken: "Missä tilanteissa käytät suomea arjessa? Mikä on vielä vaikeaa?", speakSec: 40 },
          ],
        },
        {
          id: "k9s1",
          kind: "topic",
          title: "Aihe 1: Juhlat ja perinteet",
          instructions: {
            fi: "Sinulla on kaksi minuuttia aikaa valmistautua. Voit kirjoittaa muistiin avainsanoja. Pyri puhumaan aktiivisesti!",
            en: "You have two minutes to prepare. You may jot down key words. Try to speak actively!",
          },
          prepSec: 120,
          card: {
            title: "Kerro juhlista ja perinteistä",
            questions: [
              "Mikä juhla on kotimaassasi tärkein?",
              "Miten vietit sitä viime kerralla? Keiden kanssa?",
              "Mitä juhlassa syödään ja tehdään?",
              "Mitä suomalaisia juhlia olet viettänyt?",
              "Miten suomalainen juhla oli erilainen kuin juhlat kotimaassasi?",
              "Mikä juhla oli lapsena sinulle paras? Miksi?",
            ],
          },
          items: [
            { id: "a", spoken: "Puhutaan nyt juhlista. Mikä juhla on sinun kotimaassasi kaikkein tärkein?", speakSec: 50 },
            { id: "b", spoken: "Kerro, miten vietit sitä viime kerralla. Keiden kanssa olit?", speakSec: 60 },
            { id: "c", spoken: "Mitä siinä juhlassa yleensä syödään? Onko jotain erityisiä tapoja?", speakSec: 50 },
            {
              id: "d",
              spoken: "Oletko viettänyt jotain suomalaista juhlaa, esimerkiksi joulua, vappua tai juhannusta? Kerro siitä.",
              speakSec: 60,
            },
            { id: "e", spoken: "Miten se oli erilainen kuin juhlat sinun kotimaassasi?", speakSec: 60 },
            { id: "f", spoken: "Entä lapsena? Mikä juhla oli silloin sinulle paras? Miksi?", speakSec: 50 },
          ],
        },
        {
          id: "k9s2",
          kind: "opinion",
          title: "Aihe 2: Kulttuuri ja vapaa-aika",
          instructions: {
            fi: "Sinulla on kaksi minuuttia aikaa valmistautua. Voit kirjoittaa muistiin avainsanoja. Pyri puhumaan aktiivisesti!",
            en: "You have two minutes to prepare. You may jot down key words. Try to speak actively!",
          },
          prepSec: 120,
          card: {
            title: "Kulttuuri ja vapaa-aika",
            questions: [
              "Käytkö konserteissa, teatterissa, museoissa tai urheilutapahtumissa? Miksi / miksi et?",
              "Missä tapahtumassa kävit viimeksi? Millainen se oli?",
              "Onko kulttuuri Suomessa kallista? Pitäisikö museoiden olla ilmaisia?",
              "Onko parempi harrastaa yksin vai ryhmässä? Mitä hyvää ja huonoa kummassakin on?",
              "Mitä kotikaupunkisi pitäisi tarjota enemmän?",
              "Mitä suosittelisit ihmiselle, joka etsii uutta harrastusta?",
            ],
          },
          items: [
            {
              id: "a",
              spoken: "Seuraavaksi puhutaan kulttuurista. Käytkö sinä esimerkiksi konserteissa, museoissa tai teatterissa? Miksi tai miksi et?",
              speakSec: 50,
            },
            { id: "b", spoken: "Missä tapahtumassa kävit viimeksi? Millainen se oli?", speakSec: 50 },
            { id: "c", spoken: "Onko kulttuuri Suomessa sinun mielestäsi kallista? Pitäisikö museoiden olla ilmaisia? Miksi?", speakSec: 60 },
            {
              id: "d",
              spoken: "Onko parempi harrastaa yksin vai ryhmässä, esimerkiksi urheiluseurassa? Mitä hyvää ja huonoa kummassakin on?",
              speakSec: 70,
            },
            { id: "e", spoken: "Mitä sinun kotikaupunkisi voisi tehdä paremmin? Mitä tapahtumia siellä pitäisi olla enemmän?", speakSec: 60 },
            { id: "f", spoken: "Mitä suosittelisit ihmiselle, joka on juuri muuttanut Suomeen ja etsii harrastusta?", speakSec: 50 },
          ],
        },
        {
          id: "k9s3",
          kind: "roleplay",
          title: "Aihe 3: Teatterin lipunmyynnissä",
          instructions: {
            fi: "Sinulla on kaksi minuuttia aikaa valmistautua. Haastattelija on lipunmyyjä ja sinä olet asiakas. Pyri puhumaan aktiivisesti!",
            en: "You have two minutes to prepare. The interviewer is a ticket seller and you are a customer. Try to speak actively!",
          },
          prepSec: 120,
          card: {
            title:
              "Olet teatterin lipunmyynnissä. Ostit netistä kaksi lippua lauantain näytökseen, mutta sähköpostissa lukee sunnuntai. Haastattelija on lipunmyyjä.",
            questions: [
              "Tervehdi ja kerro, mikä ongelma sinulla on.",
              "Kerro, mitä teit, kun ostit liput.",
              "Kerro, miksi sunnuntai ei sovi sinulle.",
              "Valitse yksi myyjän vaihtoehdoista ja perustele.",
              "Kerro, miten haluat saada rahat takaisin.",
              "Kiitä ja lopeta keskustelu.",
            ],
          },
          items: [
            { id: "a", spoken: "Hei, tervetuloa Kaupunginteatteriin! Miten voin auttaa?", speakSec: 45 },
            { id: "b", spoken: "Ahaa. Voitteko kertoa, miten ostitte liput? Milloin ostitte ne?", speakSec: 50 },
            { id: "c", spoken: "Niin, tässä lukee kyllä sunnuntai. Ettekö voisi tulla sunnuntaina?", speakSec: 45 },
            {
              id: "d",
              spoken:
                "Ymmärrän. Lauantain näytös on melkein loppuunmyyty. Minulla on kaksi paikkaa eri riveillä, tai kaksi paikkaa vierekkäin ihan takana. Kumman otatte? Miksi?",
              speakSec: 50,
            },
            {
              id: "e",
              spoken: "Hyvä. Koska virhe oli meidän, palautamme teille kymmenen euroa. Haluatteko rahat kortille vai lahjakortin teatterin kahvilaan?",
              speakSec: 45,
            },
            { id: "f", spoken: "Selvä, nyt kaikki on kunnossa. Onko teillä vielä jotain kysyttävää?", speakSec: 45 },
          ],
        },
      ],
    },
  ],
};
