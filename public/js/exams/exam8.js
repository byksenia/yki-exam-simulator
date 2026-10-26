// Harjoituskoe 8
export default {
  id: "koe8",
  title: "Harjoituskoe 8",
  description: "Study group, school and daycare messages, adult education courses, exam timetable, children's hobbies.",
  sections: [
    // ------------------------------------------------------------------ READING
    {
      id: "reading",
      minutes: 50,
      cutoffs: { level1: 0.4, level2: 0.7 },
      tasks: [
        {
          id: "k8r1",
          title: "Tehtävä 1: Sähköposti kurssikaverilta",
          instructions: {
            fi: "Lue sähköposti ja vastaa kysymyksiin. Valitse oikea vaihtoehto.",
            en: "Read the email and answer the questions. Choose the correct option.",
          },
          text: {
            title: "Aihe: Opintoryhmä torstaina",
            body:
              "Hei Jamal!\n\n" +
              "Kiitos, että lainasit minulle muistiinpanosi. En päässyt viime viikolla tunnille, koska tyttäreni oli kuumeessa, " +
              "enkä halunnut jäädä jälkeen muista.\n\n" +
              "Kurssin loppukoe on kahden viikon päästä, ja olen vähän huolissani. Kuullun ymmärtäminen menee minulta hyvin, " +
              "mutta kirjoittaminen on tosi vaikeaa. Siksi ajattelin, että voisimme perustaa pienen opintoryhmän. Myös Li ja Ahmed haluavat tulla mukaan.\n\n" +
              "Ensin ajattelin, että tapaisimme kirjastossa, mutta siellä kaikki ryhmätilat on varattu koko viikoksi. Voimme siis olla meillä. " +
              "Asun aivan koulun lähellä, Rantakatu 5:ssä. Sopiiko sinulle torstai kello 17? Mieheni vie lapset silloin uimahalliin, joten meillä on hiljaista.\n\n" +
              "Voisitko ottaa mukaan ne vanhat koetehtävät, jotka opettaja antoi meille syyskuussa? Minä keitän kahvia ja leivon pullaa.\n\n" +
              "Kerro pian, pääsetkö!\n\n" +
              "Terveisin\nElena",
          },
          questions: [
            {
              id: "k8r1q1",
              type: "mc",
              q: "Miksi Elena oli poissa kurssilta viime viikolla?",
              options: ["Hän oli itse sairaana.", "Hänen lapsensa oli sairas.", "Hän vei lapset uimahalliin."],
              answer: 1,
              explain: "“tyttäreni oli kuumeessa” — her daughter had a fever, not Elena herself. The swimming hall trip is the husband's, on Thursday.",
            },
            {
              id: "k8r1q2",
              type: "mc",
              q: "Miksi Elena haluaa perustaa opintoryhmän?",
              options: [
                "Hän pelkää, että kirjoittaminen menee kokeessa huonosti.",
                "Hän ei ymmärrä hyvin, mitä opettaja puhuu.",
                "Opettaja käski opiskelijoita tekemään ryhmätöitä.",
              ],
              answer: 0,
              explain: "“olen vähän huolissani … kirjoittaminen on tosi vaikeaa. Siksi ajattelin…” Listening comprehension goes well for her, so option B is the opposite.",
            },
            {
              id: "k8r1q3",
              type: "mc",
              q: "Missä opintoryhmä tapaa?",
              options: ["Kirjastossa", "Koulussa", "Elenan kotona"],
              answer: 2,
              explain: "The library was the first plan, but the rooms are booked (“Voimme siis olla meillä”). The school is only mentioned as being near her home.",
            },
            {
              id: "k8r1q4",
              type: "mc",
              q: "Miksi torstai-ilta sopii Elenalle hyvin?",
              options: [
                "Silloin hänellä ei ole kurssia.",
                "Hänen kotonaan on silloin rauhallista.",
                "Silloin kirjastossa on vapaa ryhmätila.",
              ],
              answer: 1,
              explain: "“Mieheni vie lapset silloin uimahalliin, joten meillä on hiljaista.” The library rooms are booked all week.",
            },
            {
              id: "k8r1q5",
              type: "mc",
              q: "Mitä Elena pyytää Jamalia tuomaan?",
              options: ["Muistiinpanot", "Harjoitustehtäviä", "Jotain syötävää"],
              answer: 1,
              explain: "“ottaa mukaan ne vanhat koetehtävät” = practice exercises. Jamal already lent the notes, and Elena bakes the pulla herself.",
            },
          ],
        },
        {
          id: "k8r2",
          title: "Tehtävä 2: Wilma-tiedote koulusta",
          instructions: {
            fi: "Lue tiedote. Ovatko väitteet oikein vai väärin?",
            en: "Read the notice. Are the statements true (oikein) or false (väärin)?",
          },
          text: {
            title: "Wilma: Syysloma ja vanhempainilta",
            body:
              "Lähettäjä: rehtori Päivi Laine, Kuusikon koulu\n\n" +
              "Hyvät huoltajat!\n\n" +
              "Koulun syysloma on 13.–17. lokakuuta. Koulu alkaa taas maanantaina 20.10. tavallisen lukujärjestyksen mukaan. " +
              "Syysloman aikana koulun iltapäiväkerho on kiinni. Jos tarvitsette lapsellenne hoitoa loman aikana, " +
              "ottakaa yhteyttä kaupungin lomahoitoon 30.9. mennessä.\n\n" +
              "Kolmansien luokkien vanhempainilta on keskiviikkona 22.10. kello 18 koulun ruokalassa. Illan aiheena on lasten nukkuminen ja ruutuaika. " +
              "Opettajat kertovat myös kevään leirikoulusta. Lapset voivat tulla mukaan, sillä heille on omaa ohjelmaa liikuntasalissa. " +
              "Tarjolla on kahvia ja teetä.\n\n" +
              "Muistakaa, että lapsen poissaolosta pitää aina ilmoittaa Wilmassa saman päivän aamuna ennen kello kahdeksaa.\n\n" +
              "Hyvää syyslomaa!",
          },
          questions: [
            {
              id: "k8r2q1",
              type: "tf",
              q: "Lapset voivat olla loman aikana koulun iltapäiväkerhossa.",
              answer: false,
              explain: "“Syysloman aikana koulun iltapäiväkerho on kiinni.” Care is available only through the city's holiday care.",
            },
            {
              id: "k8r2q2",
              type: "tf",
              q: "Lomahoitoa pitää pyytää ennen loman alkua.",
              answer: true,
              explain: "Contact holiday care “30.9. mennessä” — before the holiday starts on 13.10.",
            },
            {
              id: "k8r2q3",
              type: "tf",
              q: "Vanhempainillassa puhutaan muun muassa siitä, kuinka paljon lapset nukkuvat.",
              answer: true,
              explain: "“Illan aiheena on lasten nukkuminen ja ruutuaika.”",
            },
            {
              id: "k8r2q4",
              type: "tf",
              q: "Vanhempainiltaan ei voi tuoda lapsia.",
              answer: false,
              explain: "“Lapset voivat tulla mukaan” — there is a programme for them in the gym.",
            },
            {
              id: "k8r2q5",
              type: "tf",
              q: "Jos lapsi sairastuu, siitä pitää ilmoittaa koululle edellisenä iltana.",
              answer: false,
              explain: "The absence is reported in Wilma “saman päivän aamuna ennen kello kahdeksaa” — the same morning, not the evening before.",
            },
          ],
        },
        {
          id: "k8r3",
          title: "Tehtävä 3: Kansalaisopiston kursseja",
          instructions: {
            fi: "Lue ilmoitukset ja vastaa kysymyksiin suomeksi. Vastaa lyhyesti.",
            en: "Read the adverts and answer the questions in Finnish. Answer briefly.",
          },
          text: {
            title: "Kuusikon kansalaisopisto – kevään kursseja",
            body:
              "SUOMEA ARKEEN (A2)\n" +
              "Kurssi sopii sinulle, joka osaat jo perusasiat ja haluat puhua rohkeammin. Harjoittelemme esimerkiksi asiointia lääkärissä ja kaupassa. " +
              "Ti ja to klo 17.30–19.00, 12.1.–14.4. Hinta 85 €. Työttömille kurssi on maksuton, kun näytät TE-palvelujen todistuksen.\n\n" +
              "YKI-VALMENNUS, PERUSTASO\n" +
              "Tutustumme testin tehtäviin ja teemme kaksi harjoituskoetta. Kurssi on verkossa, joten voit osallistua kotoa. " +
              "Tarvitset tietokoneen, jossa on kamera ja mikrofoni. La klo 10–13, 7.2.–28.3. Hinta 60 €.\n\n" +
              "PERHEKUVIS\n" +
              "Aikuinen ja 4–6-vuotias lapsi maalaavat ja muovailevat yhdessä. Materiaalit kuuluvat hintaan. " +
              "Pukekaa päälle vanhat vaatteet, jotka saavat likaantua. Su klo 11–12.30, 10 kertaa. Hinta 70 € / pari.\n\n" +
              "ILMOITTAUTUMINEN\n" +
              "Ilmoittautuminen alkaa 2.12. kello 9 netissä tai puhelimitse. Jos kurssille ilmoittautuu alle kahdeksan opiskelijaa, " +
              "kurssi perutaan ja maksu palautetaan.",
          },
          questions: [
            {
              id: "k8r3q1",
              type: "open",
              q: "Paljonko Suomea arkeen -kurssi maksaa ihmiselle, jolla ei ole työtä?",
              hint: "(1 asia)",
              accept: ["ei mitään", "se on ilmainen", "ilmainen", "maksuton", "0 euroa", "nolla euroa"],
              keyNote: "Nothing / free (with the employment office certificate). 85 € is wrong — that is the normal price.",
              explain: "“Työttömille kurssi on maksuton, kun näytät TE-palvelujen todistuksen.”",
            },
            {
              id: "k8r3q2",
              type: "open",
              q: "Mitä YKI-valmennukseen osallistuja tarvitsee kotona?",
              hint: "(1 asia)",
              accept: ["tietokoneen, jossa on kamera ja mikrofoni", "tietokone, kamera ja mikrofoni", "tietokoneen"],
              keyNote: "A computer (ideally with camera and microphone). 'Computer' alone is enough for the point.",
              explain: "“Kurssi on verkossa … Tarvitset tietokoneen, jossa on kamera ja mikrofoni.”",
            },
            {
              id: "k8r3q3",
              type: "open",
              q: "Millaiset vaatteet Perhekuvikseen kannattaa pukea?",
              hint: "(1 asia)",
              accept: ["vanhat vaatteet", "vanhoja vaatteita", "vaatteet, jotka saavat likaantua"],
              keyNote: "Old clothes that may get dirty.",
              explain: "“Pukekaa päälle vanhat vaatteet, jotka saavat likaantua.”",
            },
            {
              id: "k8r3q4",
              type: "open",
              q: "Mitä tapahtuu, jos kurssille ilmoittautuu vain kuusi ihmistä?",
              hint: "(2 asiaa)",
              accept: ["kurssi perutaan ja maksu palautetaan", "kurssia ei ole ja rahat saa takaisin", "kurssi peruutetaan, raha palautetaan"],
              keyNote: "Both: the course is cancelled AND the fee is refunded. Six is fewer than the minimum of eight.",
              explain: "“Jos kurssille ilmoittautuu alle kahdeksan opiskelijaa, kurssi perutaan ja maksu palautetaan.”",
            },
          ],
        },
        {
          id: "k8r4",
          title: "Tehtävä 4: Lehtiuutinen",
          instructions: {
            fi: "Lue uutinen ja vastaa kysymyksiin. Valitse oikea vaihtoehto.",
            en: "Read the news item and answer the questions. Choose the correct option.",
          },
          text: {
            title: "Koululaisille ilmaisia harrastuksia iltapäivisin",
            body:
              "Kaupunki aloitti syksyllä uuden kokeilun: kaikissa alakouluissa on nyt ilmaisia harrastuskerhoja heti koulupäivän jälkeen. " +
              "Kerhoja on esimerkiksi sählyä, tanssia, kokkausta ja robotiikkaa. Ne kestävät tunnin, ja ne pidetään koulun omissa tiloissa.\n\n" +
              "Kokeilun tavoite on, että jokaisella lapsella olisi ainakin yksi mieluisa harrastus. " +
              "”Monessa perheessä harrastukset ovat liian kalliita, tai vanhemmilla ei ole aikaa viedä lapsia illalla toiselle puolelle kaupunkia”, " +
              "kertoo kokeilun johtaja Jari Mäkelä.\n\n" +
              "Kerhot ovat olleet suosittuja. Syyskuussa niihin ilmoittautui yli 2 000 lasta, vaikka kaupunki odotti noin 1 500 osallistujaa. " +
              "Suosituin kerho on sähly. Kokkauskerhoon ei kuitenkaan löytynyt tarpeeksi ohjaajia, joten se alkaa vasta tammikuussa.\n\n" +
              "Kerhoon voi ilmoittautua Wilmassa. Jos kerho on täynnä, lapsi pääsee jonoon.",
          },
          questions: [
            {
              id: "k8r4q1",
              type: "mc",
              q: "Mikä on kokeilun tärkein tarkoitus?",
              options: [
                "Että lapset olisivat vähemmän yksin kotona.",
                "Että kaikki lapset voisivat harrastaa jotain.",
                "Että vanhemmat voisivat tehdä pidempää työpäivää.",
              ],
              answer: 1,
              explain: "“Kokeilun tavoite on, että jokaisella lapsella olisi ainakin yksi mieluisa harrastus.”",
            },
            {
              id: "k8r4q2",
              type: "mc",
              q: "Miten kerhot helpottavat perheiden arkea?",
              options: [
                "Lapsia ei tarvitse viedä harrastukseen illalla.",
                "Vanhemmat voivat osallistua kerhoihin lasten kanssa.",
                "Kerhot ovat auki myös viikonloppuisin.",
              ],
              answer: 0,
              explain: "Combine two facts: the clubs are right after school in the school's own rooms, and parents often have no time to drive children across town in the evening.",
            },
            {
              id: "k8r4q3",
              type: "mc",
              q: "Mitä ilmoittautumisista kerrotaan?",
              options: [
                "Kerhoihin tuli enemmän lapsia kuin kaupunki odotti.",
                "Kerhoihin ilmoittautui noin 1 500 lasta.",
                "Sählyyn ilmoittautui vähiten lapsia.",
              ],
              answer: 0,
              explain: "Over 2,000 children signed up although about 1,500 were expected. 1,500 is the expected number; floorball is the most popular club.",
            },
            {
              id: "k8r4q4",
              type: "mc",
              q: "Mitä kokkauskerhosta kerrotaan?",
              options: ["Se on kaikkein suosituin.", "Se on jo täynnä.", "Se alkaa myöhemmin kuin muut kerhot."],
              answer: 2,
              explain: "“Kokkauskerhoon ei kuitenkaan löytynyt tarpeeksi ohjaajia, joten se alkaa vasta tammikuussa.”",
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
          id: "k8w1",
          title: "Tehtävä 1: Wilma-viesti opettajalle",
          instructions: { fi: "Kirjoita viesti. Kirjoita noin 30–60 sanaa.", en: "Write a message of about 30–60 words." },
          prompt:
            "Lapsesi oli sairaana koko viime viikon. Ensi tiistaina hänen luokallaan on matematiikan koe. Kirjoita Wilma-viesti lapsen opettajalle Sari Niemiselle.",
          bullets: [
            "Kerro, miksi lapsi oli poissa ja miten hän voi nyt.",
            "Kysy, mitä kotitehtäviä lapsen pitää tehdä.",
            "Kysy, voiko lapsi tehdä kokeen myöhemmin, ja kerro miksi.",
            "Muista aloittaa ja lopettaa viesti sopivalla tavalla.",
          ],
          promptEn:
            "Your child was ill the whole of last week. Next Tuesday the class has a maths test. Write a Wilma message to the teacher, Sari Nieminen: say why the child was absent and how they are now, ask what homework they should do, and ask whether the child can take the test later, and why.",
          register: "semi-formal message to a teacher: Hei / Hyvä Sari Nieminen … Ystävällisin terveisin + name (parent of X)",
          minWords: 30,
          maxWords: 60,
        },
        {
          id: "k8w2",
          title: "Tehtävä 2: Viesti opintoryhmän ystävälle",
          instructions: { fi: "Kirjoita viesti. Kirjoita noin 30–60 sanaa.", en: "Write a message of about 30–60 words." },
          prompt:
            "Teidän suomen kurssin opintoryhmänne tapaa huomenna sinun kotonasi. Nyt se ei onnistu. Kirjoita viesti ystävällesi Lindalle, joka on myös ryhmässä.",
          bullets: [
            "Kerro, mitä eilen tapahtui ja miksi tapaaminen ei onnistu sinun kotonasi.",
            "Ehdota toista paikkaa tai aikaa.",
            "Pyydä Lindaa kertomaan asiasta muille.",
            "Muista aloittaa ja lopettaa viesti sopivalla tavalla.",
          ],
          promptEn:
            "Your Finnish course study group is meeting at your home tomorrow, but now that is not possible. Write to your friend Linda, who is also in the group: say what happened yesterday and why the meeting can't be at your place, suggest another place or time, and ask Linda to tell the others.",
          register: "informal message to a friend: Hei Linda! / Moi Linda! … Terveisin / Moikka + name",
          minWords: 30,
          maxWords: 60,
        },
        {
          id: "k8w3",
          title: "Tehtävä 3: Mielipide",
          instructions: { fi: "Kirjoita mielipiteesi. Kirjoita noin 30–60 sanaa.", en: "Write your opinion in about 30–60 words." },
          prompt:
            "Mitä mieltä olet: onko parempi opiskella kieltä kurssilla vai itsenäisesti kotona? Perustele.",
          bullets: [
            "Miten sinä olet opiskellut suomea?",
            "Mitä hyvää ja mitä huonoa kurssissa on? Miksi?",
            "Mitä neuvoisit ihmiselle, joka aloittaa suomen opiskelun?",
          ],
          promptEn:
            "What do you think: is it better to study a language on a course or independently at home? Give reasons: how you have studied Finnish, the good and bad sides of a course and why, and what you would advise someone who is starting to study Finnish.",
          register: "short opinion text: no greeting needed; clear opinion (Minun mielestäni…), reasons (koska…), and a piece of advice",
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
          id: "k8l1",
          title: "Tehtävä 1: Viesti päiväkodista",
          instructions: {
            fi: "Kuulet puhelinviestin kaksi kertaa. Lue ensin kysymykset. Vastaa lyhyesti suomeksi.",
            en: "You will hear a phone message twice. Read the questions first. Answer briefly in Finnish.",
          },
          situation: "Kuulet viestin puhelinvastaajasta. Lapsesi Emma on päiväkodissa.",
          plays: 2,
          rate: 0.9,
          lines: [
            {
              speaker: "A",
              text:
                "Hei, täällä Sanna päiväkoti Satakielestä, Kirahvien ryhmästä. Soitan ensi viikon metsäretkestä. " +
                "Retki on keskiviikkona, ei kun anteeksi, torstaina, koska keskiviikoksi on luvattu kovaa sadetta. " +
                "Lähdemme päiväkodilta jo kello kahdeksan, joten tuokaa Emma hoitoon viimeistään varttia vaille kahdeksan. " +
                "Syömme lounaan metsässä. Keittiö tekee eväät, mutta lapsella pitää olla oma juomapullo ja pieni reppu. " +
                "Pukekaa lapselle kumisaappaat ja sadevaatteet, vaikka sää olisi hyvä, koska metsässä on märkää. " +
                "Palaamme päiväkotiin noin kello kaksi. Jos Emma ei voi tulla retkelle, hän voi olla sinä päivänä naapuriryhmässä. " +
                "Kertokaa siitä minulle Wilmassa perjantaihin mennessä. Kiitos, hei hei!",
            },
          ],
          questions: [
            {
              id: "k8l1q1",
              type: "open",
              q: "Minä päivänä retki on?",
              hint: "(1 asia)",
              accept: ["torstaina", "torstai", "ensi torstaina"],
              keyNote: "Thursday. Wednesday is wrong (the speaker corrects herself).",
              explain: "“keskiviikkona, ei kun anteeksi, torstaina”.",
            },
            {
              id: "k8l1q2",
              type: "open",
              q: "Mihin aikaan Emman pitää viimeistään olla päiväkodissa?",
              hint: "(kellonaika)",
              accept: ["varttia vaille kahdeksan", "7.45", "kello 7.45", "klo 7.45", "vartti vaille kahdeksan"],
              keyNote: "7.45 (quarter to eight). 8.00 is wrong — that is when the group leaves.",
              explain: "“Lähdemme … kello kahdeksan, joten tuokaa Emma hoitoon viimeistään varttia vaille kahdeksan.”",
            },
            {
              id: "k8l1q3",
              type: "open",
              q: "Mitä perheen pitää antaa lapselle mukaan retkelle?",
              hint: "(2 asiaa)",
              accept: ["juomapullo ja reppu", "oma juomapullo ja pieni reppu", "juomapullo, reppu"],
              keyNote: "Two of: drink bottle, small backpack (rubber boots / rain clothes also accepted as one item). Food is wrong — the kitchen makes the packed lunch.",
              explain: "“Keittiö tekee eväät, mutta lapsella pitää olla oma juomapullo ja pieni reppu.”",
            },
            {
              id: "k8l1q4",
              type: "open",
              q: "Mitä huoltajan pitää tehdä, jos Emma ei osallistu retkelle?",
              hint: "(1 asia)",
              accept: ["ilmoittaa Wilmassa perjantaihin mennessä", "kertoa Wilmassa", "laittaa viesti Wilmaan perjantaihin mennessä"],
              keyNote: "Tell Sanna via Wilma (by Friday). Mentioning Wilma or informing the teacher earns the point.",
              explain: "“Kertokaa siitä minulle Wilmassa perjantaihin mennessä.”",
            },
          ],
        },
        {
          id: "k8l2",
          title: "Tehtävä 2: Opettaja kertoo kokeesta",
          instructions: {
            fi: "Kuulet tiedotteen kaksi kertaa. Ovatko väitteet oikein vai väärin?",
            en: "You will hear an announcement twice. Are the statements true or false?",
          },
          situation: "Suomen kurssin opettaja puhuu opiskelijoille tunnin lopussa.",
          plays: 2,
          rate: 0.9,
          lines: [
            {
              speaker: "Opettaja",
              text:
                "Hyvät opiskelijat, vielä muutama asia, ennen kuin lähdette. Kurssin loppukoe on ensi viikolla kahtena päivänä. " +
                "Maanantaina on lukeminen ja kirjoittaminen, ja keskiviikkona on kuunteleminen ja puhuminen. " +
                "Huomatkaa, että maanantaina aloitamme jo kello yhdeksän, eli tuntia aikaisemmin kuin tavallisesti. " +
                "Koe on luokassa kaksisataakaksitoista, ei tässä meidän omassa luokassa, koska täällä korjataan ilmastointia. " +
                "Ottakaa mukaan henkilöllisyystodistus ja lyijykynä. Sanakirjaa ei saa käyttää. " +
                "Puhumisen koe tehdään pareittain, ja jokaisella parilla on oma aika. Ajat ovat ilmoitustaululla perjantaista alkaen. " +
                "Jos olette sairaana koepäivänä, soittakaa minulle heti aamulla. Uusintakoe on kahden viikon päästä.",
            },
          ],
          questions: [
            {
              id: "k8l2q1",
              type: "tf",
              q: "Kokeen kirjallinen osa on maanantaina.",
              answer: true,
              explain: "“Maanantaina on lukeminen ja kirjoittaminen” — the written part.",
            },
            {
              id: "k8l2q2",
              type: "tf",
              q: "Maanantaina koe alkaa samaan aikaan kuin tunnit yleensä.",
              answer: false,
              explain: "“kello yhdeksän, eli tuntia aikaisemmin kuin tavallisesti” — one hour earlier.",
            },
            {
              id: "k8l2q3",
              type: "tf",
              q: "Koe pidetään opiskelijoiden tavallisessa luokassa.",
              answer: false,
              explain: "Room 212, “ei tässä meidän omassa luokassa”, because the ventilation is being repaired.",
            },
            {
              id: "k8l2q4",
              type: "tf",
              q: "Puhumisen kokeessa opiskelijat puhuvat kaksi kerrallaan.",
              answer: true,
              explain: "“Puhumisen koe tehdään pareittain” — in pairs.",
            },
            {
              id: "k8l2q5",
              type: "tf",
              q: "Jos opiskelija on sairas, hän voi tehdä kokeen myöhemmin.",
              answer: true,
              explain: "Call the teacher in the morning; “Uusintakoe on kahden viikon päästä” — there is a retake later.",
            },
          ],
        },
        {
          id: "k8l3",
          title: "Tehtävä 3: Kaksi vanhempaa keskustelee",
          instructions: {
            fi: "Kuulet keskustelun kaksi kertaa. Lue ensin kysymykset. Valitse oikea vaihtoehto.",
            en: "You will hear a conversation twice. Read the questions first. Choose the correct option.",
          },
          situation: "Mari ja Omar tapaavat koulun pihalla. Heidän lapsensa ovat samalla luokalla.",
          plays: 2,
          rate: 0.92,
          lines: [
            { speaker: "Mari", text: "Hei Omar! Olitko sinäkin eilen vanhempainillassa?" },
            { speaker: "Omar", text: "Olin, mutta tulin vähän myöhässä, koska bussi ei tullut ollenkaan. Mitä opettaja sanoi alussa?" },
            {
              speaker: "Mari",
              text: "Hän kertoi kevään leirikoulusta. Se on toukokuussa, ja se maksaa noin sata euroa. Luokka kerää rahaa niin, että lapset myyvät leivonnaisia koulun joulujuhlassa.",
            },
            { speaker: "Omar", text: "Ai, hyvä. Kuule, Adam aloitti sählyn tiistaisin. Eikö teidän Leo käy myös siellä?" },
            {
              speaker: "Mari",
              text: "Käy, mutta torstaisin. Ei kun, nyt treenit ovat sekä tiistaina että torstaina, koska ryhmä on kasvanut. Leo menee molempina päivinä.",
            },
            { speaker: "Omar", text: "Hienoa. Minulla on vain yksi ongelma: teen tiistaisin iltavuoroa, enkä pääse viemään Adamia halliin." },
            { speaker: "Mari", text: "Minä voin viedä pojat tiistaisin. Halli on aika kaukana, joten menemme autolla." },
            { speaker: "Omar", text: "Kiitos tosi paljon! Minä voin sitten hakea heidät torstaisin, jos se sopii sinulle." },
            { speaker: "Mari", text: "Sopii hyvin. Treenit loppuvat kello seitsemän." },
          ],
          questions: [
            {
              id: "k8l3q1",
              type: "mc",
              q: "Miksi Omar myöhästyi vanhempainillasta?",
              options: ["Hän oli töissä.", "Hänellä oli ongelma bussin kanssa.", "Hän vei lasta harrastukseen."],
              answer: 1,
              explain: "“koska bussi ei tullut ollenkaan”. His evening shift is on Tuesdays and is a different topic.",
            },
            {
              id: "k8l3q2",
              type: "mc",
              q: "Miten luokka hankkii rahaa leirikouluun?",
              options: [
                "Jokainen perhe maksaa sata euroa.",
                "Lapset myyvät leivonnaisia vanhempainillassa.",
                "Lapset myyvät leivonnaisia joulujuhlassa.",
              ],
              answer: 2,
              explain: "“lapset myyvät leivonnaisia koulun joulujuhlassa”. 100 € is the cost of the camp, not a fee per family.",
            },
            {
              id: "k8l3q3",
              type: "mc",
              q: "Milloin Leo käy nyt sählyssä?",
              options: ["Vain tiistaisin", "Vain torstaisin", "Tiistaisin ja torstaisin"],
              answer: 2,
              explain: "Mari corrects herself: “nyt treenit ovat sekä tiistaina että torstaina … Leo menee molempina päivinä.”",
            },
            {
              id: "k8l3q4",
              type: "mc",
              q: "Mitä Mari ja Omar sopivat?",
              options: [
                "Mari vie pojat treeneihin tiistaisin, ja Omar hakee heidät torstaisin.",
                "Omar vie pojat tiistaisin, ja Mari hakee heidät torstaisin.",
                "Mari vie ja hakee pojat molempina päivinä.",
              ],
              answer: 0,
              explain: "“Minä voin viedä pojat tiistaisin.” — “Minä voin sitten hakea heidät torstaisin.” — “Sopii hyvin.”",
            },
          ],
        },
        {
          id: "k8l4",
          title: "Tehtävä 4: Haastattelu",
          instructions: {
            fi: "Kuulet haastattelun kaksi kertaa. Lue ensin kysymykset. Valitse oikea vaihtoehto.",
            en: "You will hear an interview twice. Read the questions first. Choose the correct option.",
          },
          situation: "Radiossa haastatellaan Nadiaa, joka opiskelee lastenhoitajaksi.",
          plays: 2,
          rate: 0.9,
          lines: [
            { speaker: "Toimittaja", text: "Nadia, sinä opiskelet nyt lastenhoitajaksi. Miten aloitit suomen opiskelun?" },
            {
              speaker: "Nadia",
              text: "Kun muutin Suomeen neljä vuotta sitten, en osannut suomea yhtään. Ensin opiskelin kotona puhelimen sovelluksella, mutta se ei riittänyt. Sitten menin kansalaisopiston iltakurssille. Siellä opin paljon, koska sain puhua muiden kanssa.",
            },
            { speaker: "Toimittaja", text: "Mikä suomen kielessä oli vaikeinta?" },
            {
              speaker: "Nadia",
              text: "Alussa ajattelin, että sanat ovat vaikeita. Mutta oikeastaan kuunteleminen oli vaikeinta. Ihmiset puhuvat nopeasti ja eri tavalla kuin kirjassa.",
            },
            { speaker: "Toimittaja", text: "Miksi halusit lastenhoitajaksi?" },
            {
              speaker: "Nadia",
              text: "Kotimaassa olin opettaja. Täällä olin ensin harjoittelussa päiväkodissa, ja se oli tosi kiva kokemus. Lapset auttoivat minua paljon, he korjasivat aina, jos sanoin jotain väärin! Siksi päätin opiskella tätä alaa.",
            },
            { speaker: "Toimittaja", text: "Miten jaksat opiskella, kun sinulla on oma perhe?" },
            {
              speaker: "Nadia",
              text: "Joskus se on raskasta. Minulla on kaksi lasta. Mieheni tekee töitä viikonloppuisin, joten minä opiskelen yleensä illalla, kun lapset nukkuvat.",
            },
            { speaker: "Toimittaja", text: "Mitä neuvoisit muille, jotka opiskelevat suomea?" },
            { speaker: "Nadia", text: "Älkää pelätkö virheitä. Puhukaa suomea aina, kun voitte, vaikka kaupassa." },
          ],
          questions: [
            {
              id: "k8l4q1",
              type: "mc",
              q: "Miten Nadia opiskeli suomea ihan ensimmäiseksi?",
              options: ["Kansalaisopiston kurssilla", "Puhelimen avulla kotona", "Harjoittelussa päiväkodissa"],
              answer: 1,
              explain: "“Ensin opiskelin kotona puhelimen sovelluksella” — the evening course came after that.",
            },
            {
              id: "k8l4q2",
              type: "mc",
              q: "Mikä oli Nadialle vaikeinta?",
              options: ["Uusien sanojen oppiminen", "Puheen ymmärtäminen", "Kirjojen lukeminen"],
              answer: 1,
              explain: "She first thought words were hard, “mutta oikeastaan kuunteleminen oli vaikeinta”.",
            },
            {
              id: "k8l4q3",
              type: "mc",
              q: "Miksi Nadia päätti opiskella lastenhoitajaksi?",
              options: [
                "Hän oli tehnyt samaa työtä kotimaassaan.",
                "Hänellä oli hyvä kokemus päiväkodista.",
                "Hänen omat lapsensa käyvät päiväkotia.",
              ],
              answer: 1,
              explain: "The practical training in a daycare was a great experience — “Siksi päätin…”. In her home country she was a teacher, not a childcare worker.",
            },
            {
              id: "k8l4q4",
              type: "mc",
              q: "Milloin Nadia yleensä opiskelee?",
              options: ["Viikonloppuisin", "Iltaisin", "Aamuisin ennen kuin lapset heräävät"],
              answer: 1,
              explain: "“opiskelen yleensä illalla, kun lapset nukkuvat”. The weekends are when her husband works.",
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
          id: "k8s0",
          kind: "warm-up",
          title: "Alkukeskustelu",
          instructions: {
            fi: "Haastattelija kysyy sinulta muutaman kysymyksen. Vastaa muutamalla lauseella.",
            en: "The interviewer asks you a few questions. Answer in a few sentences.",
          },
          prepSec: 0,
          card: null,
          items: [
            { id: "a", spoken: "Hei ja tervetuloa! Kerro, miksi opiskelet suomea ja missä tarvitset sitä.", speakSec: 40 },
            { id: "b", spoken: "Millainen on sinun tavallinen arkipäiväsi? Mitä teet aamulla ja illalla?", speakSec: 40 },
            { id: "c", spoken: "Kerro, mitä teit viime viikonloppuna.", speakSec: 35 },
          ],
        },
        {
          id: "k8s1",
          kind: "topic",
          title: "Aihe 1: Koulu ennen ja nyt",
          instructions: {
            fi: "Sinulla on kaksi minuuttia aikaa valmistautua. Voit kirjoittaa muistiin avainsanoja. Pyri puhumaan aktiivisesti!",
            en: "You have two minutes to prepare. You may jot down key words. Try to speak actively!",
          },
          prepSec: 120,
          card: {
            title: "Kerro kouluajastasi",
            questions: [
              "Missä kävit koulua lapsena?",
              "Millainen tavallinen koulupäiväsi oli?",
              "Mikä oli lempiaineesi? Miksi?",
              "Millainen oli sinun paras opettajasi?",
              "Miten koulu kotimaassasi on erilainen kuin koulu Suomessa?",
              "Mitä olet opiskellut aikuisena?",
            ],
          },
          items: [
            { id: "a", spoken: "Puhutaan nyt koulusta. Missä sinä kävit koulua lapsena?", speakSec: 45 },
            { id: "b", spoken: "Millainen tavallinen koulupäiväsi oli? Kerro vähän.", speakSec: 60 },
            { id: "c", spoken: "Mikä oli sinun lempiaineesi? Miksi pidit siitä?", speakSec: 45 },
            { id: "d", spoken: "Muistatko jonkun hyvän opettajan? Millainen hän oli?", speakSec: 50 },
            { id: "e", spoken: "Miten koulu sinun kotimaassasi on erilainen kuin koulu Suomessa?", speakSec: 70 },
            { id: "f", spoken: "Entä aikuisena? Mitä olet opiskellut, ja mitä haluaisit vielä opiskella?", speakSec: 55 },
          ],
        },
        {
          id: "k8s2",
          kind: "opinion",
          title: "Aihe 2: Lasten harrastukset",
          instructions: {
            fi: "Sinulla on kaksi minuuttia aikaa valmistautua. Voit kirjoittaa muistiin avainsanoja. Pyri puhumaan aktiivisesti!",
            en: "You have two minutes to prepare. You may jot down key words. Try to speak actively!",
          },
          prepSec: 120,
          card: {
            title: "Lapset ja harrastukset",
            questions: [
              "Mitä harrastuksia lapsilla on sinun kotimaassasi?",
              "Harrastitko itse jotain lapsena?",
              "Onko harrastus lapselle tärkeä? Miksi?",
              "Mitä hyvää ja mitä huonoa siinä on, että lapsella on monta harrastusta?",
              "Pitäisikö lasten harrastusten olla ilmaisia? Perustele.",
              "Mitä harrastusta suosittelisit lapselle? Miksi?",
            ],
          },
          items: [
            { id: "a", spoken: "Seuraavaksi puhutaan lasten harrastuksista. Mitä lapset harrastavat sinun kotimaassasi?", speakSec: 50 },
            { id: "b", spoken: "Harrastitko sinä itse jotain, kun olit lapsi?", speakSec: 45 },
            { id: "c", spoken: "Onko sinun mielestäsi tärkeää, että lapsella on harrastus? Miksi?", speakSec: 55 },
            { id: "d", spoken: "Jotkut lapset harrastavat neljää tai viittä asiaa viikossa. Mitä hyvää ja mitä huonoa siinä on?", speakSec: 65 },
            { id: "e", spoken: "Pitäisikö lasten harrastusten olla ilmaisia? Miksi?", speakSec: 55 },
            { id: "f", spoken: "Mitä harrastusta suosittelisit lapselle? Miksi juuri sitä?", speakSec: 45 },
          ],
        },
        {
          id: "k8s3",
          kind: "roleplay",
          title: "Aihe 3: Puhelu kansalaisopistoon",
          instructions: {
            fi: "Sinulla on kaksi minuuttia aikaa valmistautua. Haastattelija on kansalaisopiston työntekijä ja sinä olet opiskelija. Pyri puhumaan aktiivisesti!",
            en: "You have two minutes to prepare. The interviewer is an adult education centre employee and you are a student. Try to speak actively!",
          },
          prepSec: 120,
          card: {
            title:
              "Olet ilmoittautunut kansalaisopiston suomen kurssille. Olet työtön, joten kurssin pitäisi olla sinulle ilmainen. Sait kuitenkin 85 euron laskun. Soitat kansalaisopiston toimistoon. Haastattelija on toimiston työntekijä.",
            questions: [
              "Tervehdi ja kerro, miksi soitat.",
              "Kerro, millä kurssilla olet ja mikä laskussa on väärin.",
              "Kerro, miten voit toimittaa todistuksen.",
              "Valitse uusi kurssiryhmä ja perustele valintasi.",
              "Kerro, miten haluat saada tiedot.",
              "Kiitä ja lopeta puhelu.",
            ],
          },
          items: [
            { id: "a", spoken: "Kuusikon kansalaisopisto, Leena Koskinen. Miten voin auttaa?", speakSec: 40 },
            { id: "b", spoken: "Ahaa, ymmärrän. Millä kurssilla te olette, ja mikä laskussa on väärin?", speakSec: 50 },
            {
              id: "c",
              spoken: "Työttömille kurssi on ilmainen, mutta meillä ei ole teidän todistustanne. Miten voisitte toimittaa sen meille?",
              speakSec: 45,
            },
            {
              id: "d",
              spoken: "Hyvä. Sitten toinen asia: tiistain ja torstain ryhmä on valitettavasti liian iso. Voitte siirtyä maanantain iltaryhmään tai lauantain aamuryhmään. Kumpi sopii teille paremmin? Miksi?",
              speakSec: 60,
            },
            { id: "e", spoken: "Selvä, siirrän teidät sinne. Haluatteko, että lähetän tiedot sähköpostilla vai tekstiviestillä?", speakSec: 30 },
            { id: "f", spoken: "Hyvä on. Onko vielä jotain muuta, mitä haluatte kysyä?", speakSec: 35 },
          ],
        },
      ],
    },
  ],
};
