// Harjoituskoe 6
export default {
  id: "koe6",
  title: "Harjoituskoe 6",
  description: "Flat viewing, water outage, laundry and sauna rules, rental ads, noisy neighbour, moving house.",
  sections: [
    // ------------------------------------------------------------------ READING
    {
      id: "reading",
      minutes: 50,
      cutoffs: { level1: 0.4, level2: 0.7 },
      tasks: [
        {
          id: "k6r1",
          title: "Tehtävä 1: Sähköposti ystävältä",
          instructions: {
            fi: "Lue sähköposti ja vastaa kysymyksiin. Valitse oikea vaihtoehto.",
            en: "Read the email and answer the questions. Choose the correct option.",
          },
          text: {
            title: "Aihe: Löysin asunnon!",
            body:
              "Hei Sara!\n\n" +
              "Kiitos, että kysyit asunnonhausta. Kävin lauantaina katsomassa kahta asuntoa. Ensimmäinen oli Kalliossa, aivan metroaseman vieressä. " +
              "Se oli valoisa, mutta keittiö oli todella pieni, eikä siinä ollut parveketta. Lisäksi vuokra oli 950 euroa kuussa, ja se on minulle liikaa.\n\n" +
              "Toinen asunto oli Herttoniemessä. Matka keskustaan kestää sieltä vähän kauemmin, mutta asunnossa on parveke ja oma sauna. " +
              "Vuokra on 820 euroa, ja siihen kuuluu myös vesi. Lähellä on uimahalli ja iso ruokakauppa. " +
              "Täytin hakemuksen heti näytössä, ja eilen vuokranantaja soitti minulle: saan asunnon!\n\n" +
              "Ajattelin ensin muuttaa jo kuun alussa, mutta asunto vapautuu vasta 15. päivä, koska vanha asukas muuttaa pois silloin. " +
              "Voisitko lainata minulle autoasi muuttopäivänä? Minulla ei ole paljon tavaraa, mutta sohva ei mahdu bussiin.\n\n" +
              "Kun olen asettunut, tule saunomaan uuteen kotiini!\n\n" +
              "Terveisin\nTiina",
          },
          questions: [
            {
              id: "k6r1q1",
              type: "mc",
              q: "Miksi Tiina ei halunnut ensimmäistä asuntoa?",
              options: ["Se oli liian pimeä.", "Se oli hänelle liian kallis.", "Se oli liian kaukana metrosta."],
              answer: 1,
              explain: "“vuokra oli 950 euroa kuussa, ja se on minulle liikaa”. The flat was bright (“valoisa”) and right next to the metro station.",
            },
            {
              id: "k6r1q2",
              type: "mc",
              q: "Mikä on totta Herttoniemen asunnosta?",
              options: [
                "Sieltä pääsee keskustaan nopeammin kuin Kalliosta.",
                "Asukkaan ei tarvitse maksaa vedestä erikseen.",
                "Siinä ei ole parveketta.",
              ],
              answer: 1,
              explain: "“Vuokra on 820 euroa, ja siihen kuuluu myös vesi.” The trip to the centre takes a bit longer, and the flat has a balcony.",
            },
            {
              id: "k6r1q3",
              type: "mc",
              q: "Mitä tapahtui eilen?",
              options: [
                "Tiina kävi katsomassa asuntoja.",
                "Tiina kuuli, että hän saa asunnon.",
                "Tiina täytti asuntohakemuksen.",
              ],
              answer: 1,
              explain: "“eilen vuokranantaja soitti minulle: saan asunnon!” The viewings and the application were on Saturday.",
            },
            {
              id: "k6r1q4",
              type: "mc",
              q: "Milloin Tiina muuttaa?",
              options: ["kuun alussa", "kuun puolivälissä", "kuun lopussa"],
              answer: 1,
              explain: "The flat becomes free “vasta 15. päivä” — the middle of the month. Moving at the start of the month was the original plan that changed.",
            },
            {
              id: "k6r1q5",
              type: "mc",
              q: "Mitä Tiina toivoo Saralta muuttopäivänä?",
              options: ["Että Sara kantaa sohvan.", "Että Sara antaa hänelle autonsa käyttöön.", "Että Sara tulee saunomaan."],
              answer: 1,
              explain: "“Voisitko lainata minulle autoasi muuttopäivänä?” The sauna invitation is for later, after she has settled in.",
            },
          ],
        },
        {
          id: "k6r2",
          title: "Tehtävä 2: Isännöitsijän tiedote",
          instructions: {
            fi: "Lue tiedote. Ovatko väitteet oikein vai väärin?",
            en: "Read the notice. Are the statements true (oikein) or false (väärin)?",
          },
          text: {
            title: "As Oy Vaahterarinne – Tiedote asukkaille: vesikatko B-rapussa",
            body:
              "B-rapun vesiputkia korjataan tiistaina 14.10. Tämän takia B-rapun asunnoissa ei ole vettä kello 8–15. " +
              "A- ja C-rapussa vesi toimii normaalisti.\n\n" +
              "Ota vettä talteen jo maanantai-iltana, esimerkiksi kattilaan tai pulloihin. " +
              "Kun vesi tulee takaisin, se voi olla hetken ruskeaa. Anna silloin veden valua muutama minuutti ennen kuin käytät sitä. " +
              "Älä käytä pesukonetta tai astianpesukonetta, ennen kuin vesi on taas kirkasta.\n\n" +
              "Taloyhtiön sauna on A-rapun kellarissa, ja siellä vesi toimii koko päivän. B-rapun asukkaat voivat käydä saunan suihkussa " +
              "kello 8–15 ilman varausta.\n\n" +
              "Huom! Tällä viikolla torstain saunavuorot siirtyvät perjantaille, koska saunaa siivotaan torstaina.\n\n" +
              "Jos sinulla on kysyttävää, soita huoltoyhtiöön arkisin kello 9–16, puh. 020 345 678.\n\n" +
              "Isännöitsijä Marja Koskinen",
          },
          questions: [
            {
              id: "k6r2q1",
              type: "tf",
              q: "Vesikatko koskee kaikkia talon asuntoja.",
              answer: false,
              explain: "Only stairwell B: “A- ja C-rapussa vesi toimii normaalisti.”",
            },
            {
              id: "k6r2q2",
              type: "tf",
              q: "Asukkaiden kannattaa varata vettä jo edellisenä päivänä.",
              answer: true,
              explain: "“Ota vettä talteen jo maanantai-iltana” — the outage is on Tuesday.",
            },
            {
              id: "k6r2q3",
              type: "tf",
              q: "Heti korjauksen jälkeen voi pestä pyykkiä normaalisti.",
              answer: false,
              explain: "“Älä käytä pesukonetta … ennen kuin vesi on taas kirkasta.”",
            },
            {
              id: "k6r2q4",
              type: "tf",
              q: "B-rapun asukkaiden pitää varata aika, jos he haluavat käydä suihkussa saunalla.",
              answer: false,
              explain: "They can shower in the sauna 8–15 “ilman varausta” (without booking).",
            },
            {
              id: "k6r2q5",
              type: "tf",
              q: "Tällä viikolla torstaina ei voi saunoa.",
              answer: true,
              explain: "“torstain saunavuorot siirtyvät perjantaille, koska saunaa siivotaan torstaina”.",
            },
          ],
        },
        {
          id: "k6r3",
          title: "Tehtävä 3: Pesutuvan ja saunan säännöt",
          instructions: {
            fi: "Lue ohjeet ja vastaa kysymyksiin suomeksi. Vastaa lyhyesti.",
            en: "Read the rules and answer the questions in Finnish. Answer briefly.",
          },
          text: {
            title: "As Oy Kuusitie 3 – Pesutupa ja sauna",
            body:
              "Pesutupa\n" +
              "Pesutupa on kellarissa. Varaa pesuvuoro kellarin ovessa olevasta varauslistasta. Yksi vuoro kestää kolme tuntia, " +
              "ja samalla asunnolla voi olla enintään kaksi vuoroa viikossa. Pesutupa on käytössä maanantaista lauantaihin kello 7–21. Sunnuntaina se on kiinni.\n" +
              "Pesukone on asukkaille ilmainen, mutta kuivausrummun käyttö maksaa 2 euroa kerralta. Maksu lisätään seuraavan kuukauden vuokraan.\n" +
              "Kun lopetat, puhdista kuivausrummun nukkasihti ja pyyhi lattia. Jos et voi käyttää vuoroasi, poista nimesi listasta, jotta joku toinen voi käyttää ajan.\n\n" +
              "Sauna\n" +
              "Sauna on pesutuvan vieressä. Oman saunavuoron (yksi tunti viikossa) voit varata isännöitsijän toimistosta. Oma vuoro maksaa 15 euroa kuukaudessa.\n" +
              "Talossa on myös yhteiset saunavuorot: naisten vuoro on keskiviikkona ja miesten vuoro torstaina kello 18–20. Yhteisistä vuoroista ei tarvitse maksaa.",
          },
          questions: [
            {
              id: "k6r3q1",
              type: "open",
              q: "Kuinka usein yksi perhe saa pestä pyykkiä pesutuvassa?",
              accept: ["kaksi kertaa viikossa", "enintään kaksi kertaa viikossa", "2 kertaa viikossa", "kaksi vuoroa viikossa"],
              keyNote: "At most twice a week (two slots per week). “3 tuntia” alone is wrong — that is the length of one slot.",
              explain: "“samalla asunnolla voi olla enintään kaksi vuoroa viikossa”.",
            },
            {
              id: "k6r3q2",
              type: "open",
              q: "Mistä pesutuvassa pitää maksaa, ja miten maksu maksetaan?",
              hint: "(2 asiaa)",
              accept: [
                "kuivausrummusta, maksu tulee vuokraan",
                "kuivausrumpu maksaa 2 euroa, se lisätään vuokraan",
                "kuivausrummun käytöstä, vuokran kanssa",
              ],
              keyNote: "Both: the tumble dryer (2 €) AND it is added to the next month's rent. The washing machine is free.",
              explain: "“kuivausrummun käyttö maksaa 2 euroa kerralta. Maksu lisätään seuraavan kuukauden vuokraan.”",
            },
            {
              id: "k6r3q3",
              type: "open",
              q: "Mitä asukkaan pitää tehdä, kun hän on pessyt pyykit?",
              hint: "(2 asiaa)",
              accept: [
                "puhdistaa nukkasihti ja pyyhkiä lattia",
                "puhdistaa kuivausrummun sihti, pyyhkiä lattian",
                "siivota nukkasihti ja lattia",
              ],
              keyNote: "Both: clean the dryer's lint filter AND wipe the floor.",
              explain: "“Kun lopetat, puhdista kuivausrummun nukkasihti ja pyyhi lattia.”",
            },
            {
              id: "k6r3q4",
              type: "open",
              q: "Milloin naiset voivat saunoa maksamatta?",
              accept: ["keskiviikkona kello 18–20", "keskiviikkoisin klo 18–20", "keskiviikkona", "keskiviikkoiltana"],
              keyNote: "Wednesday (the time 18–20 is welcome but not required). Thursday is the men's turn.",
              explain: "“naisten vuoro on keskiviikkona … kello 18–20. Yhteisistä vuoroista ei tarvitse maksaa.” — combine the two sentences.",
            },
          ],
        },
        {
          id: "k6r4",
          title: "Tehtävä 4: Vuokra-asuntoja",
          instructions: {
            fi: "Lue ilmoitukset ja vastaa kysymyksiin. Valitse oikea vaihtoehto.",
            en: "Read the adverts and answer the questions. Choose the correct option.",
          },
          texts: [
            {
              title: "A. Yksiö, Kaleva",
              body:
                "Vuokrataan remontoitu yksiö, 32 m², 4. kerros. Uusi keittiö ja kylpyhuone, lasitettu parveke. Lemmikit eivät ole sallittuja.\n" +
                "Vuokra 690 €/kk + vesi 20 €/kk. Vapaa 1.11. alkaen.\n" +
                "Näyttö sunnuntaina 26.10. klo 14–15. Tule suoraan paikalle, ilmoittautumista ei tarvita.",
            },
            {
              title: "B. Kaksio, Hervanta",
              body:
                "Valoisa kaksio, 48 m², 2. kerros, talossa hissi. Lähellä koulu, päiväkoti ja kauppakeskus.\n" +
                "Kissa tai koira sopii. Vuokra 780 €/kk, vesi sisältyy vuokraan. Takuuvuokra on kahden kuukauden vuokra.\n" +
                "Vapaa heti. Näytöstä voit sopia puhelimella: Kimmo, 040 765 4321.",
            },
            {
              title: "C. Huone soluasunnosta, Keskusta",
              body:
                "Opiskelijalle kalustettu huone kolmen hengen soluasunnosta. Oma huone 14 m², keittiö ja kylpyhuone yhteisiä.\n" +
                "Vuokra 420 €/kk sisältää sähkön, veden ja netin. Vain tupakoimattomille.\n" +
                "Vuokrasopimus on voimassa 31.5. asti. Lähetä hakemus sähköpostilla.",
            },
          ],
          questions: [
            {
              id: "k6r4q1",
              type: "mc",
              q: "Perhe, jolla on koira, etsii asuntoa. Mikä asunto sopii heille?",
              options: ["yksiö Kalevassa", "kaksio Hervannassa", "huone keskustassa"],
              answer: 1,
              explain: "Advert B: “Kissa tai koira sopii.” Advert A says pets are not allowed, and C is for one student.",
            },
            {
              id: "k6r4q2",
              type: "mc",
              q: "Missä asunnossa vuokraan kuuluu myös internet?",
              options: ["yksiössä Kalevassa", "kaksiossa Hervannassa", "huoneessa keskustassa"],
              answer: 2,
              explain: "Advert C: “Vuokra 420 €/kk sisältää sähkön, veden ja netin.” In B only water is included; in A water is extra.",
            },
            {
              id: "k6r4q3",
              type: "mc",
              q: "Mitä pitää tehdä, jos haluaa nähdä Kalevan yksiön?",
              options: ["soittaa ja sopia aika", "mennä paikalle sunnuntai-iltapäivänä", "lähettää sähköpostia"],
              answer: 1,
              explain: "Advert A: viewing on Sunday 14–15, “Tule suoraan paikalle”. Phoning is for B, email for C.",
            },
            {
              id: "k6r4q4",
              type: "mc",
              q: "Mikä on totta keskustan huoneesta?",
              options: [
                "Siinä voi asua niin kauan kuin haluaa.",
                "Huoneessa on jo huonekalut.",
                "Asukas saa oman keittiön.",
              ],
              answer: 1,
              explain: "Advert C: “kalustettu huone” = furnished. The contract ends 31.5., and the kitchen is shared.",
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
          id: "k6w1",
          title: "Tehtävä 1: Viesti isännöitsijälle",
          instructions: { fi: "Kirjoita viesti. Kirjoita noin 30–60 sanaa.", en: "Write a message of about 30–60 words." },
          prompt:
            "Asut kerrostalossa. Talon pesutuvan pesukone on ollut rikki jo kaksi viikkoa, eikä kukaan ole korjannut sitä. Kirjoita viesti isännöitsijälle.",
          bullets: [
            "Kerro, mitä pesukoneelle tapahtui ja milloin.",
            "Kerro, miksi tilanne on sinulle hankala.",
            "Pyydä isännöitsijää korjaamaan asia ja kysy, milloin kone toimii taas.",
            "Muista aloittaa ja lopettaa viesti sopivalla tavalla.",
          ],
          promptEn:
            "You live in a block of flats. The washing machine in the building's laundry room has been broken for two weeks and nobody has fixed it. Write to the property manager: what happened to the machine and when, why the situation is difficult for you, and ask them to fix it and when it will work again.",
          register:
            "semi-formal message to a property manager: Hei / Hyvä isännöitsijä … Ystävällisin terveisin + name and flat number (e.g. B 12)",
          minWords: 30,
          maxWords: 60,
        },
        {
          id: "k6w2",
          title: "Tehtävä 2: Viesti ystävälle",
          instructions: { fi: "Kirjoita viesti. Kirjoita noin 30–60 sanaa.", en: "Write a message of about 30–60 words." },
          prompt:
            "Olet löytänyt uuden asunnon, ja muutat ensi lauantaina. Kirjoita viesti ystävällesi Mikalle ja pyydä häntä auttamaan muutossa.",
          bullets: [
            "Kerro, millaisen asunnon löysit ja missä se on.",
            "Kerro, miksi päätit muuttaa.",
            "Kerro, missä tarvitset apua ja mihin aikaan.",
            "Muista aloittaa ja lopettaa viesti sopivalla tavalla.",
          ],
          promptEn:
            "You have found a new flat and are moving next Saturday. Write to your friend Mika and ask him to help with the move: what kind of flat you found and where, why you decided to move, and what you need help with and at what time.",
          register: "informal message to a friend: Hei Mika! / Moi! … Kiitos jo etukäteen! Terveisin / Moikka + name",
          minWords: 30,
          maxWords: 60,
        },
        {
          id: "k6w3",
          title: "Tehtävä 3: Mielipide",
          instructions: { fi: "Kirjoita mielipiteesi. Kirjoita noin 30–60 sanaa.", en: "Write your opinion in about 30–60 words." },
          prompt: "Mitä mieltä olet: onko parempi asua kerrostalossa vai omakotitalossa? Perustele.",
          bullets: [
            "Kerro, millaisessa talossa olet asunut ennen ja millaista se oli.",
            "Mitä hyvää ja mitä huonoa kerrostalossa on?",
            "Kumpi on sinun mielestäsi parempi? Miksi?",
            "Millaisessa talossa haluaisit asua tulevaisuudessa?",
          ],
          promptEn:
            "What do you think: is it better to live in a block of flats or in a detached house? Give reasons. Say where you have lived before and what it was like, the pros and cons of a block of flats, which is better in your opinion and why, and what kind of house you would like to live in in the future.",
          register: "short opinion text: no greeting needed; clear opinion with reasons (koska, mutta, minun mielestäni)",
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
          id: "k6l1",
          title: "Tehtävä 1: Viesti vuokranantajalta",
          instructions: {
            fi: "Kuulet puhelinviestin kaksi kertaa. Lue ensin kysymykset. Vastaa lyhyesti suomeksi.",
            en: "You will hear a phone message twice. Read the questions first. Answer briefly in Finnish.",
          },
          situation: "Olet etsinyt vuokra-asuntoa. Kuulet viestin puhelinvastaajasta.",
          plays: 2,
          rate: 0.9,
          lines: [
            {
              speaker: "A",
              text:
                "Hei, täällä on Pekka Lahtinen. Lähetitte minulle eilen sähköpostia siitä kaksiosta Rauhankadulla. Asunto on vielä vapaa. " +
                "Näyttö on torstaina, ei kun anteeksi, perjantaina kello viisi. Osoite on Rauhankatu kahdeksantoista B. " +
                "Asunto on kolmannessa kerroksessa, eikä talossa ole hissiä. " +
                "Ilmoituksessa vuokra oli seitsemänsataaviisikymmentä euroa, mutta nyt se on seitsemänsataakolmekymmentä euroa kuukaudessa. Vesi ei kuulu vuokraan. " +
                "Keittiö remontoitiin viime keväänä, ja astianpesukone on ihan uusi. Lemmikit sopivat, mutta asunnossa ei saa tupakoida. " +
                "Jos ette pääse näyttöön, lähettäkää minulle tekstiviesti, niin sovitaan toinen aika. Kiitos ja kuulemiin!",
            },
          ],
          questions: [
            {
              id: "k6l1q1",
              type: "open",
              q: "Milloin asuntoa voi käydä katsomassa?",
              accept: ["perjantaina kello viisi", "perjantaina klo 17", "pe klo 17", "perjantaina kello 5"],
              keyNote: "Friday at five (17:00). Thursday is wrong — the speaker corrects himself.",
              explain: "“Näyttö on torstaina, ei kun anteeksi, perjantaina kello viisi.”",
            },
            {
              id: "k6l1q2",
              type: "open",
              q: "Paljonko vuokra on nyt kuukaudessa?",
              accept: ["730 euroa", "730 €", "730", "seitsemänsataakolmekymmentä euroa"],
              keyNote: "730 euros. 750 is the old price in the advert.",
              explain: "“Ilmoituksessa vuokra oli seitsemänsataaviisikymmentä euroa, mutta nyt se on seitsemänsataakolmekymmentä euroa”.",
            },
            {
              id: "k6l1q3",
              type: "open",
              q: "Mikä asunnossa on uutta?",
              hint: "(2 asiaa)",
              accept: ["keittiö ja astianpesukone", "remontoitu keittiö, uusi astianpesukone", "keittiö on remontoitu ja astianpesukone on uusi"],
              keyNote: "Both: the (renovated) kitchen AND the dishwasher.",
              explain: "“Keittiö remontoitiin viime keväänä, ja astianpesukone on ihan uusi.”",
            },
            {
              id: "k6l1q4",
              type: "open",
              q: "Mitä pitää tehdä, jos ei pääse näyttöön?",
              accept: ["lähettää tekstiviesti", "laittaa tekstiviesti", "tekstiviesti Pekalle", "lähettää viesti ja sopia uusi aika"],
              keyNote: "Send a text message (to agree on another time). Email is wrong.",
              explain: "“Jos ette pääse näyttöön, lähettäkää minulle tekstiviesti, niin sovitaan toinen aika.”",
            },
          ],
        },
        {
          id: "k6l2",
          title: "Tehtävä 2: Tiedote radiossa",
          instructions: {
            fi: "Kuulet tiedotteen kaksi kertaa. Ovatko väitteet oikein vai väärin?",
            en: "You will hear an announcement twice. Are the statements true or false?",
          },
          situation: "Kuuntelet paikallisradiota. Kaupungin jätehuolto tiedottaa.",
          plays: 2,
          rate: 0.9,
          lines: [
            {
              speaker: "A",
              text:
                "Hyvät kuulijat, tässä kaupungin jätehuollon tiedote. Ensi lauantaina kauppakeskus Kolmion parkkipaikalla on kodin vaarallisten jätteiden keräys " +
                "kello kymmenestä kahteen. Sinne voi tuoda esimerkiksi vanhoja maaleja, paristoja ja lääkkeitä. Lääkkeet voi viedä myös apteekkiin. " +
                "Keräys on asukkaille ilmainen. Sähkölaitteita, kuten vanhoja televisioita tai jääkaappeja, keräykseen ei kuitenkaan voi tuoda. " +
                "Ne pitää viedä Mäntylän jäteasemalle, joka on auki arkisin kello seitsemästä kahdeksaantoista. " +
                "Lisäksi muistutamme, että marraskuun alusta alkaen biojäteastiat tyhjennetään kerran viikossa, eikä kaksi kertaa niin kuin ennen. " +
                "Lisätietoa saa jätehuollon nettisivuilta. Kiitos.",
            },
          ],
          questions: [
            {
              id: "k6l2q1",
              type: "tf",
              q: "Lauantain keräykseen voi viedä vanhoja paristoja.",
              answer: true,
              explain: "“Sinne voi tuoda esimerkiksi vanhoja maaleja, paristoja ja lääkkeitä.”",
            },
            {
              id: "k6l2q2",
              type: "tf",
              q: "Asukkaiden pitää maksaa pieni maksu keräyksessä.",
              answer: false,
              explain: "“Keräys on asukkaille ilmainen.”",
            },
            {
              id: "k6l2q3",
              type: "tf",
              q: "Rikkinäisen jääkaapin voi tuoda kauppakeskuksen parkkipaikalle.",
              answer: false,
              explain: "Electrical appliances “keräykseen ei kuitenkaan voi tuoda” — they go to the Mäntylä waste station.",
            },
            {
              id: "k6l2q4",
              type: "tf",
              q: "Marraskuusta lähtien biojäte haetaan harvemmin kuin ennen.",
              answer: true,
              explain: "“kerran viikossa, eikä kaksi kertaa niin kuin ennen” — once instead of twice a week.",
            },
          ],
        },
        {
          id: "k6l3",
          title: "Tehtävä 3: Keskustelu naapurin kanssa",
          instructions: {
            fi: "Kuulet keskustelun kaksi kertaa. Lue ensin kysymykset. Valitse oikea vaihtoehto.",
            en: "You will hear a conversation twice. Read the questions first. Choose the correct option.",
          },
          situation: "Mari soittaa yläkerran naapurin Jonasin ovikelloa.",
          plays: 2,
          rate: 0.92,
          lines: [
            { speaker: "Mari", text: "Hei! Anteeksi, että häiritsen. Minä asun tässä alakerrassa, asunnossa kaksitoista." },
            { speaker: "Jonas", text: "Ai hei! Ei se mitään. Onko jokin ongelma?" },
            {
              speaker: "Mari",
              text: "No, vähän on. Teidän asunnosta kuuluu usein kovaa ääntä myöhään illalla. Eilen se jatkui yli puolenyön, ja minä herään töihin jo viideltä.",
            },
            {
              speaker: "Jonas",
              text: "Voi ei, anteeksi! Meillä oli eilen syntymäpäiväjuhlat. Ei meillä joka ilta ole juhlia… mutta kyllä, poikani soittaa joskus rumpuja illalla.",
            },
            { speaker: "Mari", text: "Ahaa, rummut. Ne kuuluvat tosi hyvin alas. Taloyhtiön säännöissä lukee, että kello kymmenen jälkeen pitää olla hiljaista." },
            {
              speaker: "Jonas",
              text: "Totta. Puhun poikani kanssa. Hän voi soittaa vaikka vain kello neljän ja seitsemän välillä. Sopiiko se?",
            },
            { speaker: "Mari", text: "Joo, se sopii hyvin. Silloin olen yleensä vielä kaupassa tai lenkillä." },
            { speaker: "Jonas", text: "Hyvä. Ja jos ääni häiritsee taas, laita minulle viesti. Annan sinulle puhelinnumeroni." },
            { speaker: "Mari", text: "Kiitos. Tämä on paljon parempi kuin valittaa isännöitsijälle." },
          ],
          questions: [
            {
              id: "k6l3q1",
              type: "mc",
              q: "Miksi Mari tulee Jonasin ovelle?",
              options: [
                "Hän haluaa kutsua Jonasin juhliin.",
                "Jonasin asunnosta kuuluu melua iltaisin.",
                "Hän on jo valittanut isännöitsijälle.",
              ],
              answer: 1,
              explain: "“Teidän asunnosta kuuluu usein kovaa ääntä myöhään illalla.” The party was Jonas's, and Mari says talking is better than complaining to the manager.",
            },
            {
              id: "k6l3q2",
              type: "mc",
              q: "Miksi myöhäinen melu on Marille erityisen hankalaa?",
              options: ["Hän tekee iltatöitä kaupassa.", "Hänen pitää nousta aamulla hyvin aikaisin.", "Hän käy lenkillä myöhään illalla."],
              answer: 1,
              explain: "“minä herään töihin jo viideltä” — she gets up at five. The shop and jogging are what she does in the late afternoon.",
            },
            {
              id: "k6l3q3",
              type: "mc",
              q: "Mitä Jonas kertoo?",
              options: ["Heillä on juhlat joka viikonloppu.", "Hänen poikansa soittaa rumpuja.", "Hän ei ole kuullut melusta ennen."],
              answer: 1,
              explain: "“poikani soittaa joskus rumpuja illalla”. He says they do not have parties every evening.",
            },
            {
              id: "k6l3q4",
              type: "mc",
              q: "Mitä he sopivat?",
              options: [
                "Poika saa soittaa kello kymmeneen asti.",
                "Poika soittaa vain iltapäivällä ja alkuillasta.",
                "Mari ilmoittaa asiasta isännöitsijälle.",
              ],
              answer: 1,
              explain: "“Hän voi soittaa … vain kello neljän ja seitsemän välillä. Sopiiko se?” – “Joo, se sopii hyvin.” Ten o'clock is the quiet-time rule.",
            },
          ],
        },
        {
          id: "k6l4",
          title: "Tehtävä 4: Haastattelu – elämää lähiössä",
          instructions: {
            fi: "Kuulet haastattelun kaksi kertaa. Ovatko väitteet oikein vai väärin?",
            en: "You will hear an interview twice. Are the statements true or false?",
          },
          situation: "Radiossa haastatellaan Elenaa, joka asuu Mäntylän lähiössä.",
          plays: 2,
          rate: 0.9,
          lines: [
            { speaker: "Toimittaja", text: "Tänään olemme Mäntylän lähiössä. Kanssani on Elena. Elena, kuinka kauan olet asunut täällä?" },
            {
              speaker: "Elena",
              text: "Muutimme tänne neljä vuotta sitten. Ennen asuimme keskustassa pienessä kaksiossa, mutta kun toinen lapsemme syntyi, tarvitsimme isomman asunnon.",
            },
            { speaker: "Toimittaja", text: "Millainen Mäntylä on asuinpaikkana?" },
            {
              speaker: "Elena",
              text: "Täällä on rauhallista, ja luonto on lähellä. Metsä alkaa ihan talon takaa. Alussa minusta tuntui, että täällä on liian hiljaista, mutta nyt pidän siitä.",
            },
            { speaker: "Toimittaja", text: "Entä palvelut? Onko kaikki lähellä?" },
            {
              speaker: "Elena",
              text: "Melkein kaikki. Meillä on ruokakauppa, kirjasto ja terveysasema. Pankki kuitenkin suljettiin viime vuonna, joten nyt hoidan pankkiasiat netissä. Uimahalliin pitää mennä bussilla, se kestää noin kaksikymmentä minuuttia.",
            },
            { speaker: "Toimittaja", text: "Tunnetko naapureita?" },
            {
              speaker: "Elena",
              text: "Joitakin. Taloyhtiössä on kaksi kertaa vuodessa pihatalkoot, ja niissä olen tutustunut naapureihin. Keväällä istutimme yhdessä kukkia pihalle.",
            },
            { speaker: "Toimittaja", text: "Haluaisitko muuttaa takaisin keskustaan?" },
            { speaker: "Elena", text: "En nyt. Ehkä sitten, kun lapset ovat isoja. Nyt tämä on meille paras paikka." },
          ],
          questions: [
            { id: "k6l4q1", type: "tf", q: "Elena muutti Mäntylään, koska perhe tarvitsi enemmän tilaa.", answer: true, explain: "“kun toinen lapsemme syntyi, tarvitsimme isomman asunnon.”" },
            { id: "k6l4q2", type: "tf", q: "Elena piti Mäntylän hiljaisuudesta heti alusta asti.", answer: false, explain: "“Alussa minusta tuntui, että täällä on liian hiljaista, mutta nyt pidän siitä.”" },
            { id: "k6l4q3", type: "tf", q: "Elena hoitaa pankkiasiat pankissa lähellä kotiaan.", answer: false, explain: "The bank closed last year: “nyt hoidan pankkiasiat netissä”." },
            { id: "k6l4q4", type: "tf", q: "Elena on tutustunut naapureihin yhteisissä pihatöissä.", answer: true, explain: "“Taloyhtiössä on … pihatalkoot, ja niissä olen tutustunut naapureihin.”" },
            { id: "k6l4q5", type: "tf", q: "Elena aikoo muuttaa pian takaisin keskustaan.", answer: false, explain: "“En nyt. Ehkä sitten, kun lapset ovat isoja.”" },
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
          id: "k6s0",
          kind: "warm-up",
          title: "Alkukeskustelu",
          instructions: {
            fi: "Haastattelija kysyy sinulta muutaman kysymyksen. Vastaa muutamalla lauseella.",
            en: "The interviewer asks you a few questions. Answer with a few sentences.",
          },
          prepSec: 0,
          card: null,
          items: [
            { id: "a", spoken: "Hei ja tervetuloa! Kerro vähän, mitä teit eilen illalla.", speakSec: 35 },
            { id: "b", spoken: "Millainen on sinun tavallinen arkipäiväsi? Mitä teet aamulla ja illalla?", speakSec: 40 },
            { id: "c", spoken: "Mitä aiot tehdä ensi viikonloppuna? Kerro vähän suunnitelmistasi.", speakSec: 35 },
          ],
        },
        {
          id: "k6s1",
          kind: "topic",
          title: "Aihe 1: Muutto uuteen kotiin",
          instructions: {
            fi: "Sinulla on kaksi minuuttia aikaa valmistautua. Voit kirjoittaa muistiin avainsanoja. Pyri puhumaan aktiivisesti!",
            en: "You have two minutes to prepare. You may jot down key words. Try to speak actively!",
          },
          prepSec: 120,
          card: {
            title: "Kerro muutosta ja kodistasi",
            questions: [
              "Milloin muutit viimeksi? Mistä mihin muutit?",
              "Miten muutto meni? Kuka auttoi sinua?",
              "Miten löysit nykyisen asuntosi?",
              "Miten nykyinen kotisi on erilainen kuin edellinen koti?",
              "Miten ihmiset asuvat kotimaassasi? Onko se erilaista kuin Suomessa?",
              "Mitä teit ensimmäisenä päivänä uudessa kodissa?",
            ],
          },
          items: [
            { id: "a", spoken: "No niin, puhutaan muuttamisesta. Milloin sinä muutit viimeksi, ja mistä mihin muutit?", speakSec: 45 },
            { id: "b", spoken: "Miten muutto meni? Oliko sinulla apua?", speakSec: 50 },
            { id: "c", spoken: "Miten löysit nykyisen asuntosi?", speakSec: 45 },
            { id: "d", spoken: "Millainen edellinen kotisi oli? Miten se oli erilainen kuin nykyinen koti?", speakSec: 60 },
            { id: "e", spoken: "Entä kotimaassasi: miten ihmiset siellä asuvat? Onko se erilaista kuin Suomessa?", speakSec: 60 },
            { id: "f", spoken: "Mitä teit ensimmäisenä päivänä uudessa kodissa?", speakSec: 45 },
          ],
        },
        {
          id: "k6s2",
          kind: "opinion",
          title: "Aihe 2: Hyvä asuinalue",
          instructions: {
            fi: "Sinulla on kaksi minuuttia aikaa valmistautua. Voit kirjoittaa muistiin avainsanoja. Pyri puhumaan aktiivisesti!",
            en: "You have two minutes to prepare. You may jot down key words. Try to speak actively!",
          },
          prepSec: 120,
          card: {
            title: "Millainen on hyvä asuinalue?",
            questions: [
              "Mitä palveluja hyvällä asuinalueella pitää olla? Miksi?",
              "Mikä sinun asuinalueellasi on hyvää? Mikä ei ole hyvää?",
              "Onko parempi asua keskustassa vai kauempana? Miksi?",
              "Onko tärkeää tuntea naapurit? Miksi?",
              "Mitä asuinaluetta suosittelisit ystävälle? Miksi?",
              "Mitä sinun asuinalueellasi pitäisi muuttaa?",
            ],
          },
          items: [
            { id: "a", spoken: "Seuraavaksi puhutaan asuinalueista. Mitä palveluja hyvällä asuinalueella pitää olla? Miksi?", speakSec: 55 },
            { id: "b", spoken: "Mikä sinun asuinalueellasi on hyvää? Entä mikä ei ole niin hyvää?", speakSec: 60 },
            { id: "c", spoken: "Onko sinun mielestäsi parempi asua keskustassa vai kauempana keskustasta? Miksi?", speakSec: 60 },
            { id: "d", spoken: "Onko tärkeää tuntea naapurit? Miksi?", speakSec: 50 },
            { id: "e", spoken: "Jos ystäväsi muuttaa sinun kaupunkiisi, mitä asuinaluetta suosittelisit hänelle? Miksi?", speakSec: 55 },
            { id: "f", spoken: "Mitä sinun asuinalueellasi pitäisi muuttaa?", speakSec: 45 },
          ],
        },
        {
          id: "k6s3",
          kind: "roleplay",
          title: "Aihe 3: Soitto huoltoyhtiöön",
          instructions: {
            fi: "Sinulla on kaksi minuuttia aikaa valmistautua. Haastattelija on huoltoyhtiön työntekijä ja sinä olet asukas. Pyri puhumaan aktiivisesti!",
            en: "You have two minutes to prepare. The interviewer works for the maintenance company and you are a resident. Try to speak actively!",
          },
          prepSec: 120,
          card: {
            title: "Asut vuokralla kerrostalossa. Keittiösi hana vuotaa, ja lattialla on vettä. Soitat huoltoyhtiöön. Haastattelija on huoltoyhtiön työntekijä.",
            questions: [
              "Tervehdi ja kerro, kuka olet ja missä asut.",
              "Kerro, mikä on rikki ja milloin ongelma alkoi.",
              "Kerro, milloin olet kotona.",
              "Päätä, miten huoltomies pääsee asuntoon.",
              "Kysy, maksaako korjaus sinulle jotain.",
              "Kiitä ja lopeta puhelu.",
            ],
          },
          items: [
            { id: "a", spoken: "Huoltoyhtiö Kotiapu, hyvää päivää. Kuinka voin auttaa?", speakSec: 35 },
            { id: "b", spoken: "Selvä. Mikä teidän osoitteenne on? Ja mikä asunnossa on vialla?", speakSec: 40 },
            { id: "c", spoken: "Ahaa. Milloin huomasitte, että hana vuotaa? Onko lattialla paljon vettä?", speakSec: 45 },
            { id: "d", spoken: "Huoltomies pääsee tulemaan vasta huomenna kello kymmenen. Oletteko silloin kotona?", speakSec: 45 },
            {
              id: "e",
              spoken: "Hän voi tulla myös yleisavaimella, kun olette töissä. Vai haluatteko mieluummin toisen ajan? Kumpi sopii teille paremmin, ja miksi?",
              speakSec: 50,
            },
            { id: "f", spoken: "Selvä, kirjoitin sen ylös. Onko teillä vielä jotain kysyttävää?", speakSec: 40 },
          ],
        },
      ],
    },
  ],
};
