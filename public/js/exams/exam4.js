// Harjoituskoe 4
export default {
  id: "koe4",
  title: "Harjoituskoe 4",
  description: "Sick leave, dental clinic, lunch menu and allergies, pharmacy, health centre, sleep and exercise.",
  sections: [
    // ------------------------------------------------------------------ READING
    {
      id: "reading",
      minutes: 50,
      cutoffs: { level1: 0.4, level2: 0.7 },
      tasks: [
        {
          id: "k4r1",
          title: "Tehtävä 1: Sähköposti ystävältä",
          instructions: {
            fi: "Lue sähköposti ja vastaa kysymyksiin. Valitse oikea vaihtoehto.",
            en: "Read the email and answer the questions. Choose the correct option.",
          },
          text: {
            title: "Aihe: Terveisiä sohvalta",
            body:
              "Hei Sara!\n\n" +
              "Kiitos kortista, se ilahdutti minua kovasti! Olen nyt ollut kotona kymmenen päivää. Kuten tiedät, kaaduin jäisellä pihalla, ja selkä tuli kipeäksi. " +
              "Lääkäri kirjoitti ensin viikon sairauslomaa, mutta selkä ei parantunut tarpeeksi nopeasti. Nyt loma jatkuu vielä ensi perjantaihin asti.\n\n" +
              "Pahinta ei ole kipu vaan se, että nukun huonosti. Makaan päivällä paljon, eikä minua illalla väsytä yhtään. " +
              "Fysioterapeutti sanoi, että minun pitää kävellä joka päivä vähän, vaikka se tuntuu vaikealta. Nyt kävelen joka aamu puoli tuntia, ja uni on jo vähän parempi.\n\n" +
              "Meidän piti mennä yhdessä kokkikurssille tänä lauantaina, mutta en vielä jaksa seistä keittiössä kolmea tuntia. " +
              "Soitin kurssin järjestäjälle, ja saamme paikat samalle kurssille joulukuussa. Sopiiko se sinulle?\n\n" +
              "Voisitko muuten hakea minulle kirjat, jotka varasin kirjastosta? Ne ovat odottaneet siellä jo viikon, enkä pääse itse hakemaan niitä. " +
              "Keitän sinulle sitten kahvit!\n\n" +
              "Halauksin\nElina",
          },
          questions: [
            {
              id: "k4r1q1",
              type: "mc",
              q: "Kuinka kauan Elina on sairauslomalla?",
              options: ["Yhden viikon", "Kymmenen päivää", "Ensi viikon loppuun"],
              answer: 2,
              explain: "The first sick leave was one week, but “loma jatkuu vielä ensi perjantaihin asti” — until the end of next week. Ten days is how long she has been at home so far.",
            },
            {
              id: "k4r1q2",
              type: "mc",
              q: "Mikä on Elinalle nyt suurin ongelma?",
              options: ["Selkä on hyvin kipeä.", "Hän ei saa illalla unta.", "Hän ei pysty kävelemään."],
              answer: 1,
              explain: "“Pahinta ei ole kipu vaan se, että nukun huonosti … eikä minua illalla väsytä.” The pain is explicitly not the worst thing, and she does walk every morning.",
            },
            {
              id: "k4r1q3",
              type: "mc",
              q: "Mitä fysioterapeutti neuvoi Elinaa tekemään?",
              options: ["Liikkumaan vähän joka päivä", "Lepäämään päivällä enemmän", "Menemään aikaisin nukkumaan"],
              answer: 0,
              explain: "“minun pitää kävellä joka päivä vähän”. Lying down a lot during the day is what she does now, not advice.",
            },
            {
              id: "k4r1q4",
              type: "mc",
              q: "Mitä kokkikurssista on päätetty?",
              options: ["Elina ja Sara menevät sinne lauantaina.", "Elina on perunut sen kokonaan.", "He menevät kurssille myöhemmin."],
              answer: 2,
              explain: "“Meidän piti mennä … tänä lauantaina, mutta …” — the plan changed; they got places on the same course in December.",
            },
            {
              id: "k4r1q5",
              type: "mc",
              q: "Mitä Elina pyytää Saraa tekemään?",
              options: ["Soittamaan kurssin järjestäjälle", "Käymään kirjastossa hänen puolestaan", "Tulemaan keittämään kahvia"],
              answer: 1,
              explain: "“Voisitko … hakea minulle kirjat, jotka varasin kirjastosta?” Elina already called the organiser herself, and she will make the coffee.",
            },
          ],
        },
        {
          id: "k4r2",
          title: "Tehtävä 2: Hammashoitolan tiedote",
          instructions: {
            fi: "Lue tiedote. Ovatko väitteet oikein vai väärin?",
            en: "Read the notice. Are the statements true (oikein) or false (väärin)?",
          },
          text: {
            title: "Hammashoitola Kaari muuttaa",
            body:
              "Palvelemme vanhassa paikassa Kauppakatu 4:ssä vielä perjantaihin 14.11. asti. Uusi hoitola avataan maanantaina 24.11. " +
              "terveysaseman toisessa kerroksessa, osoitteessa Puistotie 2. Muuton aikana hoitola on kiinni. Jos hammas on silloin hyvin kipeä, " +
              "soita hammaslääkäripäivystykseen, numero 09 310 51400.\n\n" +
              "Jos sinulla on jo aika hammaslääkärille tai suuhygienistille, sinun ei tarvitse tehdä mitään. Aika pysyy samana, vain paikka vaihtuu. " +
              "Jos aikasi on muuton ajalla, lähetämme sinulle tekstiviestillä uuden ajan.\n\n" +
              "Uusissa tiloissa on hissi, joten hoitolaan pääsee helposti myös pyörätuolilla ja lastenvaunuilla. " +
              "Talon pihalla voi pysäköidä ilmaiseksi kaksi tuntia.\n\n" +
              "Muistathan perua aikasi viimeistään edellisenä päivänä. Jos et tule etkä ole perunut aikaa, joudut maksamaan 50 euroa.\n\n" +
              "Tervetuloa uuteen hoitolaan!",
          },
          questions: [
            {
              id: "k4r2q1",
              type: "tf",
              q: "Muuton takia hoitolaan ei pääse noin viikkoon.",
              answer: true,
              explain: "Last day in the old place is Friday 14.11. and the new clinic opens Monday 24.11. — closed for about a week (one working week).",
            },
            {
              id: "k4r2q2",
              type: "tf",
              q: "Uusi hoitola on samassa rakennuksessa kuin terveysasema.",
              answer: true,
              explain: "“terveysaseman toisessa kerroksessa” — on the second floor of the health centre.",
            },
            {
              id: "k4r2q3",
              type: "tf",
              q: "Asiakkaiden, joilla on jo aika, täytyy varata uusi aika.",
              answer: false,
              explain: "“sinun ei tarvitse tehdä mitään. Aika pysyy samana” — only appointments during the move get a new time, by text message.",
            },
            {
              id: "k4r2q4",
              type: "tf",
              q: "Uuteen hoitolaan on vaikea tulla lastenvaunujen kanssa.",
              answer: false,
              explain: "“Uusissa tiloissa on hissi, joten hoitolaan pääsee helposti … lastenvaunuilla.”",
            },
            {
              id: "k4r2q5",
              type: "tf",
              q: "Ajan voi perua ilmaiseksi vielä samana aamuna.",
              answer: false,
              explain: "Cancel “viimeistään edellisenä päivänä” — at the latest the day before; otherwise the fee is 50 €.",
            },
          ],
        },
        {
          id: "k4r3",
          title: "Tehtävä 3: Lounaslista",
          instructions: {
            fi: "Lue lounaslista ja vastaa kysymyksiin suomeksi. Vastaa lyhyesti.",
            en: "Read the lunch menu and answer the questions in Finnish. Answer briefly.",
          },
          text: {
            title: "Lounasravintola Sitruuna – lounas viikolla 47",
            body:
              "Lounas arkisin klo 10.30–14.00. Lounaan hintaan kuuluu pääruoan lisäksi salaatti, leipä, juoma ja kahvi.\n\n" +
              "Maanantai: Kalakeitto (L, G)\n" +
              "Tiistai: Kana-kasviskastike ja riisi (M, G)\n" +
              "Keskiviikko: Lihapullat ja perunamuusi (L)\n" +
              "Torstai: Hernekeitto ja pannukakku (L)\n" +
              "Perjantai: Uunilohi ja perunat (L, G)\n" +
              "Joka päivä kasvisvaihtoehtona linssikeitto (VE, G).\n\n" +
              "Hinnat: lounas 12,50 €, keitto ja salaatti 9,80 €. Opiskelijat ja eläkeläiset 10,50 € (näytä kortti kassalla).\n" +
              "Lounaan voi ostaa myös mukaan. Kun tuot oman rasian, saat lounaasta euron alennuksen.\n\n" +
              "L = laktoositon, M = maidoton, G = gluteeniton, VE = vegaaninen\n" +
              "Keittiössämme käytetään pähkinöitä. Jos olet allerginen pähkinälle, kysy ruoista aina henkilökunnalta ennen kuin otat.\n\n" +
              "Huom! Perjantaina 21.11. henkilökunnalla on koulutus, ja ravintola sulkeutuu jo kello 13.",
          },
          questions: [
            {
              id: "k4r3q1",
              type: "open",
              q: "Mitä asiakas saa lounaan hinnalla pääruoan lisäksi?",
              hint: "(2 asiaa)",
              accept: ["salaatti ja leipä", "juoma ja kahvi", "salaatti ja kahvi", "leipä ja juoma", "salaatin, leivän, juoman ja kahvin"],
              keyNote: "Any two of: salad, bread, drink, coffee.",
              explain: "“Lounaan hintaan kuuluu pääruoan lisäksi salaatti, leipä, juoma ja kahvi.”",
            },
            {
              id: "k4r3q2",
              type: "open",
              q: "Paljonko eläkeläinen maksaa lounaasta, jos hän ostaa sen mukaan omaan rasiaan?",
              accept: ["9,50 €", "9,50 euroa", "9,50", "9.50", "yhdeksän euroa viisikymmentä senttiä"],
              keyNote: "9.50 € (pensioner price 10.50 € minus 1 € for own container). 10.50 or 12.50 is wrong.",
              explain: "Pensioners pay 10,50 €, and “Kun tuot oman rasian, saat lounaasta euron alennuksen” — 10,50 − 1 = 9,50 €.",
            },
            {
              id: "k4r3q3",
              type: "open",
              q: "Mitä pähkinäallergisen asiakkaan kannattaa tehdä?",
              accept: ["kysyä henkilökunnalta", "kysyä ruoista henkilökunnalta ennen kuin ottaa ruokaa", "kysyä työntekijältä"],
              keyNote: "Ask the staff about the dishes (before taking food).",
              explain: "“Jos olet allerginen pähkinälle, kysy ruoista aina henkilökunnalta ennen kuin otat.”",
            },
            {
              id: "k4r3q4",
              type: "open",
              q: "Miksi viikon viimeisenä päivänä pitää tulla syömään aikaisemmin kuin tavallisesti?",
              accept: ["ravintola sulkeutuu kello 13", "ravintola menee kiinni jo yhdeltä", "henkilökunnalla on koulutus"],
              keyNote: "The restaurant closes already at 13 (because of staff training). Either the early closing or the training earns the point.",
              explain: "“Perjantaina 21.11. henkilökunnalla on koulutus, ja ravintola sulkeutuu jo kello 13.” Normally lunch is until 14.00.",
            },
          ],
        },
        {
          id: "k4r4",
          title: "Tehtävä 4: Kurssi-ilmoitukset",
          instructions: {
            fi: "Lue kolme ilmoitusta ja vastaa kysymyksiin. Valitse oikea vaihtoehto.",
            en: "Read the three adverts and answer the questions. Choose the correct option.",
          },
          text: {
            title: "Kevään kursseja ja tapahtumia",
            body:
              "A) ARJEN KASVISRUOKA – kokkikurssi\n" +
              "Opi tekemään helppoa ja edullista kasvisruokaa koko perheelle. Kurssi on neljänä tiistai-iltana kello 17.30–20.30 työväenopiston opetuskeittiössä. " +
              "Kurssimaksu on 45 euroa, ja lisäksi maksat ruoka-aineista 20 euroa. Ota mukaan esiliina ja rasia, niin voit viedä ruokaa kotiin. " +
              "Ilmoittaudu netissä viimeistään 3.2.\n\n" +
              "B) HYVÄ UNI – luento\n" +
              "Heräätkö yöllä monta kertaa? Unihoitaja Anu Laine kertoo, miten ruoka, liikunta ja puhelin vaikuttavat uneen. " +
              "Luennon jälkeen voit kysyä omista ongelmistasi. Torstaina 5.2. kello 18 pääkirjaston salissa. Vapaa pääsy, ei ilmoittautumista. " +
              "Luento on selkeää suomea, joten se sopii hyvin myös suomen kielen opiskelijoille.\n\n" +
              "C) RAUHALLINEN AAMUJUMPPA\n" +
              "Selkä- tai niskakipuja? Pitkä tauko liikunnasta? Tule pieneen aamuryhmään! Jumppaamme ohjaajan kanssa maanantaisin ja keskiviikkoisin kello 9–10 " +
              "uimahallin pienessä salissa. Kymmenen kerran kortti maksaa 40 euroa, ensimmäinen kerta on ilmainen. Ilmoittaudu ohjaajalle puhelimessa: 044 765 2310.",
          },
          questions: [
            {
              id: "k4r4q1",
              type: "mc",
              q: "Raija ei ole urheillut moneen vuoteen. Lääkäri sanoi, että hänen pitäisi vahvistaa selkäänsä. Mikä sopii Raijalle?",
              options: ["A", "B", "C"],
              answer: 2,
              explain: "C is for people with back or neck pain or a long break from exercise. B only talks about how exercise affects sleep.",
            },
            {
              id: "k4r4q2",
              type: "mc",
              q: "Omarilla ei ole paljon rahaa, ja hän haluaa käydä vain yhden kerran. Hän haluaa myös kuunnella selkeää suomea. Mikä sopii Omarille?",
              options: ["A", "B", "C"],
              answer: 1,
              explain: "B is a single free lecture (“Vapaa pääsy”) in clear Finnish. C's first time is free too, but nothing says it is good for language learners.",
            },
            {
              id: "k4r4q3",
              type: "mc",
              q: "Mikä pitää paikkansa kokkikurssista?",
              options: ["Se maksaa yhteensä 45 euroa.", "Osallistujat voivat viedä ruokaa kotiin.", "Se on neljä kertaa viikossa."],
              answer: 1,
              explain: "“Ota mukaan … rasia, niin voit viedä ruokaa kotiin.” The total is 45 + 20 = 65 €, and it is on four Tuesday evenings, not four times a week.",
            },
            {
              id: "k4r4q4",
              type: "mc",
              q: "Tomas on töissä arkisin kello kahdeksasta neljään. Hän haluaa harrastaa jotain monta kertaa. Mikä sopii Tomasille?",
              options: ["A", "B", "C"],
              answer: 0,
              explain: "A is on four Tuesday evenings from 17.30. B is only one evening, and C is on weekday mornings 9–10 when Tomas works.",
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
          id: "k4w1",
          title: "Tehtävä 1: Palaute ravintolalle",
          instructions: { fi: "Kirjoita viesti. Kirjoita noin 30–60 sanaa.", en: "Write a message of about 30–60 words." },
          prompt:
            "Söit eilen lounasta Lounasravintola Pippurissa. Kerroit työntekijälle, että et voi syödä maitoa. Ruoassa oli kuitenkin kermaa, ja sinulle tuli huono olo. Kirjoita ravintolalle palaute.",
          bullets: [
            "Kerro, mitä söit ja mitä tapahtui.",
            "Kerro, miksi olet pettynyt.",
            "Ehdota, mitä ravintola voisi tehdä toisin.",
            "Muista aloittaa ja lopettaa viesti sopivalla tavalla.",
          ],
          promptEn:
            "Yesterday you had lunch at the Pippuri lunch restaurant. You told the staff you cannot eat dairy, but the food contained cream and you felt ill. Write feedback: what you ate and what happened, why you are disappointed, and what the restaurant could do differently.",
          register: "semi-formal complaint/feedback to a business: Hei / Hyvä Lounasravintola Pippuri … Ystävällisin terveisin / Terveisin + name",
          minWords: 30,
          maxWords: 60,
        },
        {
          id: "k4w2",
          title: "Tehtävä 2: Viesti työkaverille",
          instructions: { fi: "Kirjoita viesti. Kirjoita noin 30–60 sanaa.", en: "Write a message of about 30–60 words." },
          prompt:
            "Olet sopinut, että menet työkaverisi Mikan kanssa uimahalliin keskiviikkona töiden jälkeen. Kävit tänään lääkärissä, ja sait sairauslomaa. Kirjoita Mikalle viesti.",
          bullets: [
            "Kerro, mitä lääkäri sanoi ja kuinka kauan olet poissa töistä.",
            "Pyydä Mikalta apua yhteen työasiaan.",
            "Ehdota uutta aikaa uimahallille.",
            "Muista aloittaa ja lopettaa viesti sopivalla tavalla.",
          ],
          promptEn:
            "You agreed to go swimming with your colleague Mika on Wednesday after work. You saw a doctor today and got sick leave. Write to Mika: what the doctor said and how long you'll be off, ask him for help with one work matter, and suggest a new time for swimming.",
          register: "informal message to a colleague: Hei Mika! / Moi Mika! … Terveisin / Moikka + name",
          minWords: 30,
          maxWords: 60,
        },
        {
          id: "k4w3",
          title: "Tehtävä 3: Mielipide",
          instructions: { fi: "Kirjoita mielipideteksti. Kirjoita noin 30–60 sanaa.", en: "Write an opinion text of about 30–60 words." },
          prompt: "Mitä mieltä olet: Onko terveellinen ruoka Suomessa liian kallista? Kirjoita mielipiteesi ja perustele se.",
          bullets: [
            "Mitä sinä söit eilen? Oliko se terveellistä?",
            "Onko terveellinen ruoka sinusta kallista? Miksi on tai miksi ei?",
            "Mitä neuvoisit ihmiselle, joka haluaa syödä terveellisesti mutta halvalla?",
          ],
          promptEn:
            "What do you think: is healthy food too expensive in Finland? Say what you ate yesterday and whether it was healthy, whether healthy food is expensive and why, and give advice to someone who wants to eat healthily but cheaply.",
          register: "neutral opinion text; no greeting needed. Use opinion phrases (Minun mielestäni…, Mielestäni…, koska…).",
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
          id: "k4l1",
          title: "Tehtävä 1: Viesti apteekista",
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
                "Hei, täällä on Kuusikon apteekki, farmaseutti Mari Lehto. Soitan teille, koska tilasitte meiltä eilen lääkettä, jota meillä ei silloin ollut. " +
                "Lääke tulee meille keskiviikkona, ei kun anteeksi, torstaina iltapäivällä. Voitte hakea sen torstaina kello neljän jälkeen tai perjantaina. " +
                "Olemme auki arkisin kello kahdeksasta kahdeksaan ja lauantaisin kymmenestä neljään. " +
                "Koska lääke on reseptilääke, ottakaa mukaan Kela-kortti tai henkilökortti. " +
                "Lääke maksaa teille noin kaksikymmentäkolme euroa, koska saatte Kela-korvauksen. Ilman korvausta hinta olisi kolmekymmentäkaksi euroa. " +
                "Jos tarvitsette lääkettä kiireesti, sitä on nyt keskustan apteekissa, joka on auki joka päivä kello kymmeneen illalla. " +
                "Kiitos ja hyvää päivänjatkoa!",
            },
          ],
          questions: [
            {
              id: "k4l1q1",
              type: "open",
              q: "Milloin lääkkeen voi aikaisintaan hakea Kuusikon apteekista?",
              accept: ["torstaina kello neljän jälkeen", "torstaina klo 16 jälkeen", "torstai-iltapäivällä", "torstaina neljältä"],
              keyNote: "Thursday after 4 pm. Wednesday is wrong (the speaker corrects herself). 'Thursday' alone is acceptable.",
              explain: "“keskiviikkona, ei kun anteeksi, torstaina iltapäivällä. Voitte hakea sen torstaina kello neljän jälkeen”.",
            },
            {
              id: "k4l1q2",
              type: "open",
              q: "Mitä asiakkaan pitää ottaa mukaan apteekkiin?",
              accept: ["Kela-kortti", "henkilökortti", "Kela-kortti tai henkilökortti", "kelakortti"],
              keyNote: "Kela card or ID card (either one).",
              explain: "“ottakaa mukaan Kela-kortti tai henkilökortti”.",
            },
            {
              id: "k4l1q3",
              type: "open",
              q: "Paljonko asiakas maksaa lääkkeestä?",
              accept: ["noin 23 euroa", "23 euroa", "23 €", "kaksikymmentäkolme euroa"],
              keyNote: "About 23 euros. 32 euros is wrong (price without the Kela reimbursement).",
              explain: "“Lääke maksaa teille noin kaksikymmentäkolme euroa … Ilman korvausta hinta olisi kolmekymmentäkaksi euroa.”",
            },
            {
              id: "k4l1q4",
              type: "open",
              q: "Mitä asiakas voi tehdä, jos hän tarvitsee lääkettä heti?",
              accept: ["hakea sen keskustan apteekista", "mennä keskustan apteekkiin", "keskustan apteekista"],
              keyNote: "Get it from the city-centre pharmacy.",
              explain: "“Jos tarvitsette lääkettä kiireesti, sitä on nyt keskustan apteekissa”.",
            },
          ],
        },
        {
          id: "k4l2",
          title: "Tehtävä 2: Terveysaseman puhelinjono",
          instructions: {
            fi: "Kuulet tiedotteen kaksi kertaa. Ovatko väitteet oikein vai väärin?",
            en: "You will hear a recorded message twice. Are the statements true or false?",
          },
          situation: "Soitat terveysasemalle ja kuulet nauhoitetun viestin.",
          plays: 2,
          rate: 0.9,
          lines: [
            {
              speaker: "A",
              text:
                "Olet soittanut Lehtolan terveysaseman ajanvaraukseen. Kaikki hoitajat palvelevat nyt muita asiakkaita. " +
                "Jonotusaika on tällä hetkellä noin kaksikymmentäviisi minuuttia. Voit myös jättää soittopyynnön painamalla numeroa yksi. " +
                "Hoitaja soittaa sinulle takaisin vielä tänään. Huomaa, että hoitaja soittaa salaisesta numerosta. " +
                "Jos haluat varata ajan laboratorioon, sinun ei tarvitse jonottaa. Voit varata laboratorioajan helposti netissä. " +
                "Influenssarokotukset alkavat tiistaina neljäs marraskuuta. Rokotukseen ei tarvitse varata aikaa. " +
                "Voit tulla terveysasemalle tiistaisin ja torstaisin kello kahdestatoista kolmeen. " +
                "Jos tarvitset kiireellistä apua illalla tai viikonloppuna, kun terveysasema on kiinni, soita päivystysapuun numeroon sata kuusitoista sata seitsemäntoista. " +
                "Hätätilanteessa soita numeroon yksi yksi kaksi.",
            },
          ],
          questions: [
            {
              id: "k4l2q1",
              type: "tf",
              q: "Hoitajilla on juuri nyt kiire.",
              answer: true,
              explain: "“Kaikki hoitajat palvelevat nyt muita asiakkaita” and the queue is about 25 minutes.",
            },
            {
              id: "k4l2q2",
              type: "tf",
              q: "Jos jätät soittopyynnön, hoitaja soittaa sinulle seuraavana päivänä.",
              answer: false,
              explain: "“Hoitaja soittaa sinulle takaisin vielä tänään.” — today, not tomorrow.",
            },
            {
              id: "k4l2q3",
              type: "tf",
              q: "Laboratorioaikaa varten pitää odottaa jonossa hoitajaa.",
              answer: false,
              explain: "“sinun ei tarvitse jonottaa. Voit varata laboratorioajan … netissä.”",
            },
            {
              id: "k4l2q4",
              type: "tf",
              q: "Influenssarokotukseen voi mennä ilman varattua aikaa.",
              answer: true,
              explain: "“Rokotukseen ei tarvitse varata aikaa” — just come on Tuesdays or Thursdays 12–15.",
            },
          ],
        },
        {
          id: "k4l3",
          title: "Tehtävä 3: Illallisen suunnittelu",
          instructions: {
            fi: "Kuulet keskustelun kaksi kertaa. Lue ensin kysymykset. Valitse oikea vaihtoehto.",
            en: "You will hear a conversation twice. Read the questions first. Choose the correct option.",
          },
          situation: "Mira ja Tuomas suunnittelevat illallista Miran syntymäpäivänä.",
          plays: 2,
          rate: 0.92,
          lines: [
            { speaker: "Mira", text: "Hei Tuomas, onko sinulla hetki? Mietin lauantain illallista." },
            { speaker: "Tuomas", text: "Joo, on. Mitä me tehdään? Sinähän puhuit lasagnesta." },
            { speaker: "Mira", text: "Niin puhuin, mutta Sanna kertoi eilen, että hänellä on keliakia. Hän ei voi syödä vehnää, joten tavallinen lasagne ei käy." },
            { speaker: "Tuomas", text: "Ahaa. Entä jos tehdään kanakeittoa?" },
            { speaker: "Mira", text: "Hmm, Pekka on kasvissyöjä. Mitä jos tehdään kasviscurrya ja riisiä? Se sopii kaikille." },
            { speaker: "Tuomas", text: "Hyvä idea. Entä jälkiruoka? Ostetaanko kakku?" },
            { speaker: "Mira", text: "Ajattelin ensin niin, mutta gluteeniton kakku on kaupassa tosi kallis, melkein kolmekymmentä euroa. Tehdään itse marjapiirakka gluteenittomista jauhoista." },
            { speaker: "Tuomas", text: "Okei. Minä voin käydä kaupassa huomenna. Mitä pitää ostaa?" },
            { speaker: "Mira", text: "Kookosmaitoa, paprikaa, sipulia ja kikherneitä. Riisiä on kotona tarpeeksi, ja marjat on pakastimessa." },
            { speaker: "Tuomas", text: "Entä ne jauhot?" },
            { speaker: "Mira", text: "Ai niin, gluteenittomat jauhot tarvitaan myös. Ne on erikoisruokahyllyssä." },
            { speaker: "Tuomas", text: "Selvä. Kuinka monta ihmistä tulee?" },
            { speaker: "Mira", text: "Kahdeksan. Ei kun yhdeksän, Pekan sisko tulee myös." },
          ],
          questions: [
            {
              id: "k4l3q1",
              type: "mc",
              q: "Miksi Mira ei halua tehdä lasagnea?",
              options: ["Se on liian kallis.", "Yksi vieras ei voi syödä sitä.", "Hän ei osaa tehdä sitä."],
              answer: 1,
              explain: "Sanna has coeliac disease and cannot eat wheat: “tavallinen lasagne ei käy”. Price is mentioned only about the cake.",
            },
            {
              id: "k4l3q2",
              type: "mc",
              q: "Mitä illalliselle tulee jälkiruoaksi?",
              options: ["Kaupasta ostettu kakku", "Itse tehty piirakka", "Pakastimen marjoja ja kermaa"],
              answer: 1,
              explain: "The plan changed: “Ajattelin ensin niin, mutta … Tehdään itse marjapiirakka”.",
            },
            {
              id: "k4l3q3",
              type: "mc",
              q: "Mitä Tuomaksen ei tarvitse ostaa?",
              options: ["Riisiä", "Kikherneitä", "Jauhoja"],
              answer: 0,
              explain: "“Riisiä on kotona tarpeeksi”. Chickpeas are on the list, and the flour is added at the end (“tarvitaan myös”).",
            },
            {
              id: "k4l3q4",
              type: "mc",
              q: "Montako ihmistä illalliselle tulee?",
              options: ["Kahdeksan", "Yhdeksän", "Kymmenen"],
              answer: 1,
              explain: "“Kahdeksan. Ei kun yhdeksän, Pekan sisko tulee myös.”",
            },
          ],
        },
        {
          id: "k4l4",
          title: "Tehtävä 4: Haastattelu",
          instructions: {
            fi: "Kuulet haastattelun kaksi kertaa. Lue ensin kysymykset. Vastaa kysymyksiin.",
            en: "You will hear an interview twice. Read the questions first. Answer the questions.",
          },
          situation: "Radiossa haastatellaan Nadiaa, joka tekee vuorotyötä.",
          plays: 2,
          rate: 0.9,
          lines: [
            { speaker: "Toimittaja", text: "Nadia, sinä olet lähihoitaja ja teet vuorotyötä palvelutalossa. Miten jaksat?" },
            {
              speaker: "Nadia",
              text: "No, välillä se on raskasta. Teen aamuvuoroja, iltavuoroja ja joskus yövuoroja. Ennen nukuin todella huonosti, varsinkin yövuoron jälkeen. Joskus nukuin päivällä vain kolme tai neljä tuntia.",
            },
            { speaker: "Toimittaja", text: "Mikä auttoi?" },
            {
              speaker: "Nadia",
              text: "Työterveyshoitaja antoi minulle hyviä neuvoja. Ostin makuuhuoneeseen pimeät verhot, enkä enää katso puhelinta sängyssä. Ja kahvia juon nykyään vain aamupäivällä. Ennen join kahvia koko päivän.",
            },
            { speaker: "Toimittaja", text: "Entä liikunta?" },
            {
              speaker: "Nadia",
              text: "Aloitin viime keväänä juoksemisen yhdessä työkaverin kanssa. Ensin jaksoin juosta vain kymmenen minuuttia, nyt jo puoli tuntia. Käymme lenkillä kaksi kertaa viikossa, yleensä maanantaina ja torstaina, mutta päivät vaihtuvat usein työvuorojen takia.",
            },
            { speaker: "Toimittaja", text: "Onko myös ruoka muuttunut?" },
            {
              speaker: "Nadia",
              text: "On. Ennen söin töissä vain pullaa ja suklaata, koska ei ollut aikaa syödä kunnolla. Nyt teen illalla ruokaa valmiiksi ja otan sen rasiassa mukaan. Se on parempi vatsalle, ja säästän myös rahaa.",
            },
            { speaker: "Toimittaja", text: "Mitä neuvoisit muille, jotka tekevät vuorotyötä?" },
            { speaker: "Nadia", text: "Älkää yrittäkö muuttaa kaikkea kerralla. Aloittakaa yhdestä pienestä asiasta, se riittää alussa." },
          ],
          questions: [
            {
              id: "k4l4q1",
              type: "mc",
              q: "Mitä Nadia tekee nyt toisin kuin ennen?",
              options: ["Hän ei juo kahvia iltapäivällä.", "Hän nukkuu päivällä vain muutaman tunnin.", "Hän lukee puhelinta ennen nukkumista."],
              answer: 0,
              explain: "“kahvia juon nykyään vain aamupäivällä”. Sleeping only 3–4 hours was the old problem, and she no longer looks at her phone in bed.",
            },
            {
              id: "k4l4q2",
              type: "tf",
              q: "Nadia jaksaa nyt juosta pidempään kuin aluksi.",
              answer: true,
              explain: "“Ensin jaksoin juosta vain kymmenen minuuttia, nyt jo puoli tuntia.”",
            },
            {
              id: "k4l4q3",
              type: "tf",
              q: "Nadia käy lenkillä aina samoina päivinä.",
              answer: false,
              explain: "“yleensä maanantaina ja torstaina, mutta päivät vaihtuvat usein työvuorojen takia.”",
            },
            {
              id: "k4l4q4",
              type: "mc",
              q: "Miksi Nadia ottaa ruokaa mukaan töihin?",
              options: ["Työpaikalla ei saa syödä pullaa.", "Se on terveellisempää ja halvempaa.", "Työkaveri pyysi häntä tekemään niin."],
              answer: 1,
              explain: "“Se on parempi vatsalle, ja säästän myös rahaa.” The colleague is mentioned only with running.",
            },
            {
              id: "k4l4q5",
              type: "mc",
              q: "Mikä on Nadian neuvo muille vuorotyöntekijöille?",
              options: ["Kannattaa muuttaa monta tapaa samaan aikaan.", "Kannattaa aloittaa yhdestä pienestä muutoksesta.", "Kannattaa liikkua joka päivä."],
              answer: 1,
              explain: "“Älkää yrittäkö muuttaa kaikkea kerralla. Aloittakaa yhdestä pienestä asiasta”.",
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
          id: "k4s0",
          kind: "warm-up",
          title: "Alkukeskustelu",
          instructions: {
            fi: "Haastattelija kysyy sinulta muutaman kysymyksen. Vastaa parilla lauseella.",
            en: "The interviewer asks you a few questions. Answer in a couple of sentences.",
          },
          prepSec: 0,
          card: null,
          items: [
            { id: "a", spoken: "Hei ja tervetuloa! Kerro ensin vähän, millainen sinun tavallinen arkipäiväsi on.", speakSec: 40 },
            { id: "b", spoken: "Mitä teit viime viikonloppuna? Kerro vähän.", speakSec: 35 },
            { id: "c", spoken: "Miksi opiskelet suomea, ja missä tilanteissa tarvitset sitä?", speakSec: 40 },
          ],
        },
        {
          id: "k4s1",
          kind: "topic",
          title: "Aihe 1: Ruoka ja ruokatavat",
          instructions: {
            fi: "Sinulla on kaksi minuuttia aikaa valmistautua. Voit kirjoittaa muistiin avainsanoja. Pyri puhumaan aktiivisesti!",
            en: "You have two minutes to prepare. You may jot down key words. Try to speak actively!",
          },
          prepSec: 120,
          card: {
            title: "Kerro ruoasta ja syömisestä",
            questions: [
              "Mitä söit eilen? Kuka teki ruoan?",
              "Mikä on lempiruokasi? Miten sitä tehdään?",
              "Millaista ruokaa söit lapsena? Kuka kotona laittoi ruokaa?",
              "Miten suomalainen ruoka on erilaista kuin kotimaasi ruoka?",
              "Missä käyt ruokaostoksilla? Miksi siellä?",
              "Mitä ruokaa haluaisit oppia tekemään?",
            ],
          },
          items: [
            { id: "a", spoken: "No niin, puhutaan ruoasta. Mitä sinä söit eilen? Kuka teki ruoan?", speakSec: 50 },
            { id: "b", spoken: "Mikä on sinun lempiruokasi? Kerro, miten sitä tehdään.", speakSec: 60 },
            { id: "c", spoken: "Millaista ruokaa söit lapsena? Kuka teidän kotona laittoi ruokaa?", speakSec: 60 },
            { id: "d", spoken: "Miten suomalainen ruoka on erilaista kuin sinun kotimaasi ruoka? Mikä on parempaa, mikä huonompaa?", speakSec: 70 },
            { id: "e", spoken: "Missä käyt yleensä ruokaostoksilla? Miksi juuri siellä?", speakSec: 45 },
            { id: "f", spoken: "Mitä ruokaa haluaisit oppia tekemään? Miksi?", speakSec: 45 },
          ],
        },
        {
          id: "k4s2",
          kind: "opinion",
          title: "Aihe 2: Terveys ja hyvinvointi",
          instructions: {
            fi: "Sinulla on kaksi minuuttia aikaa valmistautua. Voit kirjoittaa muistiin avainsanoja. Pyri puhumaan aktiivisesti!",
            en: "You have two minutes to prepare. You may jot down key words. Try to speak actively!",
          },
          prepSec: 120,
          card: {
            title: "Kerro mielipiteesi terveydestä ja hyvinvoinnista",
            questions: [
              "Mitä teet, jotta voisit hyvin?",
              "Nukutko tarpeeksi? Mikä auttaa sinua nukkumaan hyvin?",
              "Millainen liikunta on sinusta hyvää? Miksi?",
              "Onko Suomessa helppo elää terveellisesti? Miksi on tai miksi ei?",
              "Mitä hyvää ja huonoa on siinä, että ihmiset käyttävät puhelinta illalla sängyssä?",
              "Mitä neuvoisit ihmiselle, joka on aina väsynyt?",
            ],
          },
          items: [
            { id: "a", spoken: "Seuraavaksi puhutaan terveydestä. Mitä sinä teet, jotta voisit hyvin?", speakSec: 50 },
            { id: "b", spoken: "Nukutko sinä tarpeeksi? Mikä auttaa sinua nukkumaan hyvin?", speakSec: 50 },
            { id: "c", spoken: "Millainen liikunta on sinun mielestäsi hyvää? Miksi?", speakSec: 50 },
            { id: "d", spoken: "Onko Suomessa helppo elää terveellisesti? Miksi on tai miksi ei?", speakSec: 65 },
            { id: "e", spoken: "Monet katsovat puhelinta illalla sängyssä. Mitä hyvää ja mitä huonoa siinä on?", speakSec: 60 },
            { id: "f", spoken: "Ystäväsi on aina väsynyt. Mitä sinä neuvoisit hänelle?", speakSec: 50 },
          ],
        },
        {
          id: "k4s3",
          kind: "roleplay",
          title: "Aihe 3: Apteekissa",
          instructions: {
            fi: "Sinulla on kaksi minuuttia aikaa valmistautua. Haastattelija on farmaseutti ja sinä olet asiakas. Pyri puhumaan aktiivisesti!",
            en: "You have two minutes to prepare. The interviewer is a pharmacist and you are a customer. Try to speak actively!",
          },
          prepSec: 120,
          card: {
            title: "Olet apteekissa. Lääkäri on kirjoittanut sinulle reseptin, ja tulet hakemaan lääkettä. Lähdet huomenna aamulla matkalle. Haastattelija on farmaseutti.",
            questions: [
              "Tervehdi ja kerro, mitä tarvitset.",
              "Vastaa farmaseutin kysymyksiin.",
              "Kerro, miksi tarvitset lääkkeen nopeasti.",
              "Valitse sinulle sopiva vaihtoehto ja perustele.",
              "Kysy, miten lääkettä otetaan.",
              "Kiitä ja lopeta keskustelu.",
            ],
          },
          items: [
            { id: "a", spoken: "Hei, tervetuloa apteekkiin. Miten voin auttaa?", speakSec: 30 },
            { id: "b", spoken: "Selvä. Onko teillä Kela-kortti tai henkilökortti mukana? Mitä lääkettä lääkäri määräsi?", speakSec: 40 },
            { id: "c", spoken: "Valitettavasti tätä lääkettä ei ole nyt varastossa. Se tulee meille vasta ylihuomenna. Milloin te tarvitsette sitä?", speakSec: 45 },
            {
              id: "d",
              spoken: "Ymmärrän. Voin antaa teille saman lääkkeen toiselta valmistajalta, mutta se on neljä euroa kalliimpi. Tai voitte hakea lääkkeen tänään keskustan apteekista. Kumpi sopii teille paremmin? Miksi?",
              speakSec: 50,
            },
            { id: "e", spoken: "Hyvä, hoidetaan se niin. Onko teillä vielä jotain kysyttävää?", speakSec: 40 },
            { id: "f", spoken: "Ottakaa yksi tabletti aamulla ja yksi illalla ruoan kanssa. Hyvää matkaa!", speakSec: 25 },
          ],
        },
      ],
    },
  ],
};
