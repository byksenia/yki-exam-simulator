// Harjoituskoe 1
export default {
  id: "koe1",
  title: "Harjoituskoe 1",
  description: "Housing, library and flea market, work and free time, health appointments, travel, shopping.",
  sections: [
    // ------------------------------------------------------------------ READING
    {
      id: "reading",
      minutes: 50,
      cutoffs: { level1: 0.4, level2: 0.7 },
      tasks: [
        {
          id: "k1r1",
          title: "Tehtävä 1: Sähköposti ystävältä",
          instructions: {
            fi: "Lue sähköposti ja vastaa kysymyksiin. Valitse oikea vaihtoehto.",
            en: "Read the email and answer the questions. Choose the correct option.",
          },
          text: {
            title: "Aihe: Uusi koti!",
            body:
              "Hei Anna!\n\n" +
              "Kiitos viestistäsi! Anteeksi, että vastaan vasta nyt. Meillä on ollut kiireinen kuukausi, koska muutimme uuteen asuntoon Tampereelle. " +
              "Mikon uusi työpaikka on täällä, ja minä olen vielä kotona vauvan kanssa.\n\n" +
              "Uusi asunto on kerrostalossa, ja se on paljon isompi kuin vanha. Siinä on kolme huonetta, keittiö ja iso parveke. " +
              "Asunto on vähän kaukana keskustasta, mutta bussipysäkki on aivan talon vieressä. Lähellä on myös kauppa ja iso puisto, " +
              "jossa käymme joka päivä kävelyllä.\n\n" +
              "En tunne täältä vielä ketään. Ensi viikolla menen kirjaston vauvakerhoon. Toivottavasti tapaan siellä muita äitejä.\n\n" +
              "Tuletko meille kylään? Meillä on nyt oma vierashuone! Heinäkuu sopisi meille hyvin.\n\n" +
              "Terveisin\nLiisa",
          },
          questions: [
            {
              id: "k1r1q1",
              type: "mc",
              q: "Miksi Liisa vastaa viestiin myöhään?",
              options: ["Hän on ollut sairaana.", "Perhe on muuttanut.", "Hän on aloittanut uuden työn."],
              answer: 1,
              explain: "“Meillä on ollut kiireinen kuukausi, koska muutimme uuteen asuntoon” — they moved. The new job is Mikko's, not Liisa's.",
            },
            {
              id: "k1r1q2",
              type: "mc",
              q: "Mitä Liisa tekee nyt?",
              options: ["Hän on kotona lapsen kanssa.", "Hän opiskelee Tampereella.", "Hän etsii uutta työtä."],
              answer: 0,
              explain: "“minä olen vielä kotona vauvan kanssa” — she is at home with the baby.",
            },
            {
              id: "k1r1q3",
              type: "mc",
              q: "Millainen uusi asunto on?",
              options: ["Se on lähellä keskustaa.", "Se on pienempi kuin vanha asunto.", "Siinä on iso parveke."],
              answer: 2,
              explain: "“Siinä on kolme huonetta, keittiö ja iso parveke.” It is far from the centre and bigger than the old flat.",
            },
            {
              id: "k1r1q4",
              type: "mc",
              q: "Mitä Liisa aikoo tehdä ensi viikolla?",
              options: ["Tutustua uusiin ihmisiin.", "Lainata kirjoja vauvalle.", "Esitellä uutta kotia Annalle."],
              answer: 0,
              explain: "“Ensi viikolla menen kirjaston vauvakerhoon. Toivottavasti tapaan siellä muita äitejä.” She goes to the library's baby club to meet people, not to borrow books; Anna's visit is only suggested for July.",
            },
            {
              id: "k1r1q5",
              type: "mc",
              q: "Mitä Liisa ehdottaa Annalle?",
              options: ["Että Anna muuttaa Tampereelle.", "Että Anna tulee kylään kesällä.", "Että he soittavat toisilleen heinäkuussa."],
              answer: 1,
              explain: "“Tuletko meille kylään? … Heinäkuu sopisi meille hyvin.” — a visit in July (summer).",
            },
          ],
        },
        {
          id: "k1r2",
          title: "Tehtävä 2: Kirjaston tiedote",
          instructions: {
            fi: "Lue tiedote. Ovatko väitteet oikein vai väärin?",
            en: "Read the notice. Are the statements true (oikein) or false (väärin)?",
          },
          text: {
            title: "Kotikadun kirjasto tiedottaa",
            body:
              "Kirjasto on remontin takia kiinni 3.–16. kesäkuuta. Tänä aikana voit palauttaa kirjat pääovella olevaan palautusluukkuun. " +
              "Varatut kirjat voit hakea Keskustan kirjastosta.\n\n" +
              "Kesällä 17.6.–15.8. kirjasto on auki maanantaista torstaihin kello 10–18. Perjantaisin ja lauantaisin kirjasto on auki kello 10–15. " +
              "Sunnuntaisin kirjasto on kiinni.\n\n" +
              "Uutta! Syksyllä kirjastossa alkaa suomen kielen keskusteluryhmä. Ryhmä on ilmainen, eikä siihen tarvitse ilmoittautua. " +
              "Tervetuloa!",
          },
          questions: [
            {
              id: "k1r2q1",
              type: "tf",
              q: "Kirjasto on kiinni kaksi viikkoa kesäkuussa.",
              answer: true,
              explain: "3.–16. kesäkuuta = two weeks, “kiinni remontin takia”.",
            },
            {
              id: "k1r2q2",
              type: "tf",
              q: "Remontin aikana kirjoja ei voi palauttaa.",
              answer: false,
              explain: "Books can be returned to the return slot at the main door (“voit palauttaa kirjat … palautusluukkuun”).",
            },
            {
              id: "k1r2q3",
              type: "tf",
              q: "Kesällä kirjasto on auki myös lauantaisin.",
              answer: true,
              explain: "“Perjantaisin ja lauantaisin kirjasto on auki kello 10–15.”",
            },
            {
              id: "k1r2q4",
              type: "tf",
              q: "Keskusteluryhmään pitää ilmoittautua etukäteen.",
              answer: false,
              explain: "“eikä siihen tarvitse ilmoittautua” — no registration needed.",
            },
          ],
        },
        {
          id: "k1r3",
          title: "Tehtävä 3: Kirpputori",
          instructions: {
            fi: "Lue ilmoitus ja vastaa kysymyksiin suomeksi. Vastaa lyhyesti.",
            en: "Read the advert and answer the questions in Finnish. Answer briefly.",
          },
          text: {
            title: "Kirppis Kaisla – koko perheen kirpputori",
            body:
              "Myy vanhat vaatteet, lelut ja kirjat helposti! Varaa oma myyntipöytä netistä tai soita meille.\n\n" +
              "Pöytä maksaa 15 euroa viikossa. Eläkeläisille ja opiskelijoille hinta on 12 euroa.\n" +
              "Me hinnoittelemme tavarat ja myymme ne puolestasi. Rahat saat tilillesi joka maanantai.\n\n" +
              "Emme ota myyntiin ruokaa emmekä sähkölaitteita.\n\n" +
              "Avoinna: ma–pe 10–19, la 10–16\n" +
              "Kahvila on auki koko päivän. Lapsille on oma leikkinurkka.\n" +
              "Osoite: Kaislakatu 8",
          },
          questions: [
            {
              id: "k1r3q1",
              type: "open",
              q: "Paljonko pöytä maksaa opiskelijalle viikossa?",
              accept: ["12 euroa", "12 €", "12", "kaksitoista euroa"],
              keyNote: "12 euros. 15 euros is wrong (normal price).",
              explain: "“Eläkeläisille ja opiskelijoille hinta on 12 euroa.”",
            },
            {
              id: "k1r3q2",
              type: "open",
              q: "Mitä kirpputorille ei voi tuoda myyntiin?",
              hint: "(2 asiaa)",
              accept: ["ruokaa ja sähkölaitteita", "ruoka, sähkölaitteet"],
              keyNote: "Both needed: food AND electrical appliances (any recognisable wording, e.g. 'ruoka, elektroniikka').",
              explain: "“Emme ota myyntiin ruokaa emmekä sähkölaitteita.”",
            },
            {
              id: "k1r3q3",
              type: "open",
              q: "Milloin myyjä saa rahat?",
              accept: ["maanantaisin", "joka maanantai", "maanantaina"],
              keyNote: "Every Monday (to the bank account).",
              explain: "“Rahat saat tilillesi joka maanantai.”",
            },
            {
              id: "k1r3q4",
              type: "open",
              q: "Mitä palveluja kirpputorilla on asiakkaille?",
              hint: "(2 asiaa)",
              accept: ["kahvila ja leikkinurkka lapsille", "kahvila, leikkipaikka"],
              keyNote: "Both: café AND children's play corner. Pricing/selling service also acceptable as one of the two.",
              explain: "“Kahvila on auki koko päivän. Lapsille on oma leikkinurkka.”",
            },
          ],
        },
        {
          id: "k1r4",
          title: "Tehtävä 4: Lehtiuutinen",
          instructions: {
            fi: "Lue uutinen ja vastaa kysymyksiin. Valitse oikea vaihtoehto.",
            en: "Read the news item and answer the questions. Choose the correct option.",
          },
          text: {
            title: "Kaupunkipyörät tulevat taas huhtikuussa",
            body:
              "Kaupunkipyörät palaavat kaduille 1. huhtikuuta. Tänä vuonna pyöriä on 500, eli sata enemmän kuin viime vuonna. " +
              "Uusia pyöräasemia tulee erityisesti sairaalan ja yliopiston lähelle.\n\n" +
              "Pyörää voi käyttää puoli tuntia kerrallaan ilman lisämaksua. Koko kauden käyttöoikeus maksaa 35 euroa, ja yksi päivä maksaa 5 euroa. " +
              "Pyörän voi varata puhelimen sovelluksella.\n\n" +
              "Viime vuonna kaupunkipyörillä ajettiin yli miljoona matkaa. Kaupungin mukaan pyörät ovat suosittuja etenkin opiskelijoiden ja " +
              "turistien keskuudessa. Kausi päättyy lokakuun lopussa.",
          },
          questions: [
            {
              id: "k1r4q1",
              type: "mc",
              q: "Mikä on muuttunut viime vuodesta?",
              options: ["Pyöriä on enemmän.", "Kausi alkaa aikaisemmin.", "Pyörät ovat halvempia."],
              answer: 0,
              explain: "“pyöriä on 500, eli sata enemmän kuin viime vuonna”.",
            },
            {
              id: "k1r4q2",
              type: "mc",
              q: "Mitä maksaa yksi päivä?",
              options: ["35 euroa", "5 euroa", "Se on ilmainen."],
              answer: 1,
              explain: "“yksi päivä maksaa 5 euroa”. 35 € is the whole season.",
            },
            {
              id: "k1r4q3",
              type: "mc",
              q: "Ketkä käyttävät pyöriä paljon?",
              options: ["Sairaalan työntekijät", "Lapsiperheet", "Opiskelijat ja turistit"],
              answer: 2,
              explain: "“suosittuja etenkin opiskelijoiden ja turistien keskuudessa”. The hospital is only mentioned as a location for new stations.",
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
          id: "k1w1",
          title: "Tehtävä 1: Palaute kuntosalille",
          instructions: { fi: "Kirjoita viesti. Kirjoita noin 30–60 sanaa.", en: "Write a message of about 30–60 words." },
          prompt:
            "Olet käynyt kuntosalilla Sporttis puoli vuotta. Kuntosali kysyy asiakkailta palautetta. Kirjoita palaute kuntosalille.",
          bullets: [
            "Kerro, mikä kuntosalilla on hyvää ja miksi.",
            "Kerro, mikä ei ole hyvää ja miksi.",
            "Kerro, mitä kuntosali voisi muuttaa.",
            "Muista aloittaa ja lopettaa viesti sopivalla tavalla.",
          ],
          promptEn:
            "You have been going to the Sporttis gym for half a year. The gym asks customers for feedback. Say what is good and why, what is not good and why, and what the gym could change.",
          register: "semi-formal feedback to a service: neutral polite greeting (Hei / Hyvä Sporttis), neutral closing (Terveisin / Ystävällisin terveisin + name)",
          minWords: 30,
          maxWords: 60,
        },
        {
          id: "k1w2",
          title: "Tehtävä 2: Viesti naapurille",
          instructions: { fi: "Kirjoita viesti. Kirjoita noin 30–60 sanaa.", en: "Write a message of about 30–60 words." },
          prompt:
            "Olet sopinut, että menet naapurisi Jarin kanssa elokuviin tänä iltana. Et voi mennä. Kirjoita Jarille viesti.",
          bullets: [
            "Pyydä anteeksi.",
            "Kerro, miksi et voi tulla.",
            "Ehdota uutta aikaa.",
            "Muista aloittaa ja lopettaa viesti sopivalla tavalla.",
          ],
          promptEn:
            "You agreed to go to the cinema with your neighbour Jari tonight, but you can't go. Write to Jari: apologise, say why, suggest a new time.",
          register: "informal message to a neighbour you know: Hei Jari! … Terveisin / Moikka + name",
          minWords: 30,
          maxWords: 60,
        },
        {
          id: "k1w3",
          title: "Tehtävä 3: Postikortti",
          instructions: { fi: "Kirjoita postikortti. Kirjoita noin 30–60 sanaa.", en: "Write a postcard of about 30–60 words." },
          prompt: "Olet lomalla kesämökillä Itä-Suomessa. Kirjoita postikortti suomalaiselle ystävällesi.",
          bullets: [
            "Missä olet ja kenen kanssa?",
            "Millainen sää on ollut?",
            "Mitä olet tehnyt?",
            "Mitä aiot vielä tehdä?",
          ],
          promptEn:
            "You are on holiday at a summer cottage in Eastern Finland. Write a postcard to a Finnish friend: where you are and with whom, the weather, what you have done, what you will still do.",
          register: "informal postcard to a friend: Hei / Moi + name … Terveisin / Halein + name",
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
          id: "k1l1",
          title: "Tehtävä 1: Viesti hammaslääkäriltä",
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
                "Hei, täällä on Hammaslääkäriasema Hymy, Sanna Virtanen. Soitan teidän ajastanne. Teillä on aika hammaslääkärille ensi tiistaina kello yhdeksän. " +
                "Valitettavasti hammaslääkäri on silloin sairaana. Voimme tarjota uuden ajan torstaina kello kaksitoista tai perjantaina kello kahdeksan. " +
                "Soittakaa meille ja kertokaa, kumpi aika sopii. Puhelinnumero on 040 123 4567. Olemme paikalla arkisin kello kahdeksasta neljään. " +
                "Muistakaa myös ottaa mukaan Kela-kortti. Kiitos ja hyvää päivänjatkoa!",
            },
          ],
          questions: [
            {
              id: "k1l1q1",
              type: "open",
              q: "Miksi vanha aika ei sovi?",
              accept: ["hammaslääkäri on sairaana", "lääkäri on sairas"],
              keyNote: "The dentist is ill.",
              explain: "“Valitettavasti hammaslääkäri on silloin sairaana.”",
            },
            {
              id: "k1l1q2",
              type: "open",
              q: "Mitkä uudet ajat hammaslääkäriasema tarjoaa?",
              hint: "(2 asiaa)",
              accept: ["torstaina kello 12 ja perjantaina kello 8", "to klo 12, pe klo 8"],
              keyNote: "Both: Thursday 12 o'clock AND Friday 8 o'clock (day + time for each; minor format variation fine).",
              explain: "“torstaina kello kaksitoista tai perjantaina kello kahdeksan”.",
            },
            {
              id: "k1l1q3",
              type: "open",
              q: "Mitä pitää ottaa mukaan?",
              accept: ["Kela-kortti", "Kela-kortin", "kelakortti"],
              keyNote: "Kela card.",
              explain: "“Muistakaa myös ottaa mukaan Kela-kortti.”",
            },
          ],
        },
        {
          id: "k1l2",
          title: "Tehtävä 2: Kuulutus linja-autoasemalla",
          instructions: {
            fi: "Kuulet kuulutuksen kaksi kertaa. Ovatko väitteet oikein vai väärin?",
            en: "You will hear an announcement twice. Are the statements true or false?",
          },
          situation: "Olet linja-autoasemalla.",
          plays: 2,
          rate: 0.9,
          lines: [
            {
              speaker: "A",
              text:
                "Hyvät matkustajat. Kello kolmetoista lähtevä linja-auto Jyväskylään on myöhässä noin kaksikymmentä minuuttia. " +
                "Myöhästyminen johtuu tietöistä. Linja-auto lähtee tänään poikkeuksellisesti laiturilta viisi, ei laiturilta kaksi. " +
                "Lippuja voi ostaa kuljettajalta vain kortilla. Asemarakennuksen kahvila on auki kello kahdeksaantoista asti. Kiitos!",
            },
          ],
          questions: [
            {
              id: "k1l2q1",
              type: "tf",
              q: "Linja-auto Jyväskylään on myöhässä.",
              answer: true,
              explain: "“on myöhässä noin kaksikymmentä minuuttia”.",
            },
            {
              id: "k1l2q2",
              type: "tf",
              q: "Linja-auto on myöhässä, koska sää on huono.",
              answer: false,
              explain: "The reason is road works: “johtuu tietöistä”.",
            },
            {
              id: "k1l2q3",
              type: "tf",
              q: "Linja-auto lähtee tänään laiturilta kaksi.",
              answer: false,
              explain: "Today it leaves from platform five, “ei laiturilta kaksi”.",
            },
            {
              id: "k1l2q4",
              type: "tf",
              q: "Kuljettajalle ei voi maksaa käteisellä.",
              answer: true,
              explain: "“Lippuja voi ostaa kuljettajalta vain kortilla.” — card only, so no cash.",
            },
          ],
        },
        {
          id: "k1l3",
          title: "Tehtävä 3: Keskustelu kaupassa",
          instructions: {
            fi: "Kuulet keskustelun kaksi kertaa. Lue ensin kysymykset. Valitse oikea vaihtoehto.",
            en: "You will hear a conversation twice. Read the questions first. Choose the correct option.",
          },
          situation: "Asiakas ja myyjä keskustelevat vaatekaupassa.",
          plays: 2,
          rate: 0.92,
          lines: [
            { speaker: "Myyjä", text: "Hei! Voinko auttaa?" },
            { speaker: "Asiakas", text: "Hei. Ostin tämän takin viime viikolla, mutta se on liian pieni. Voinko vaihtaa sen?" },
            { speaker: "Myyjä", text: "Totta kai. Onko teillä kuitti mukana?" },
            { speaker: "Asiakas", text: "On, tässä." },
            { speaker: "Myyjä", text: "Kiitos. Tämä takki on koko M. Haluatteko koon L?" },
            { speaker: "Asiakas", text: "Kyllä, kiitos. Onko sitä sinisenä? Tämä musta on vähän tylsä." },
            { speaker: "Myyjä", text: "Sinistä L-kokoa ei valitettavasti ole nyt. Se tulee kauppaan ensi viikolla. Mutta meillä on vihreä." },
            { speaker: "Asiakas", text: "Hmm. Minä odotan sitä sinistä. Voitteko soittaa minulle, kun se tulee?" },
            { speaker: "Myyjä", text: "Voin. Kirjoitan teidän numeronne tähän ylös." },
          ],
          questions: [
            {
              id: "k1l3q1",
              type: "mc",
              q: "Mikä ongelma takissa on?",
              options: ["Se on rikki.", "Se on liian pieni.", "Se on liian kallis."],
              answer: 1,
              explain: "“se on liian pieni”.",
            },
            {
              id: "k1l3q2",
              type: "mc",
              q: "Minkä värisen takin asiakas haluaa?",
              options: ["Sinisen", "Mustan", "Vihreän"],
              answer: 0,
              explain: "“Onko sitä sinisenä? Tämä musta on vähän tylsä.” He/she decides to wait for the blue one.",
            },
            {
              id: "k1l3q3",
              type: "mc",
              q: "Mitä asiakas päättää tehdä?",
              options: ["Hän ottaa vihreän takin.", "Hän saa rahat takaisin.", "Hän odottaa, että uusi takki tulee kauppaan."],
              answer: 2,
              explain: "“Minä odotan sitä sinistä. Voitteko soittaa minulle, kun se tulee?”",
            },
          ],
        },
        {
          id: "k1l4",
          title: "Tehtävä 4: Haastattelu",
          instructions: {
            fi: "Kuulet haastattelun kaksi kertaa. Ovatko väitteet oikein vai väärin?",
            en: "You will hear an interview twice. Are the statements true or false?",
          },
          situation: "Radiossa haastatellaan Ahmedia, joka asuu Oulussa.",
          plays: 2,
          rate: 0.9,
          lines: [
            { speaker: "Toimittaja", text: "Ahmed, kuinka kauan olet asunut Oulussa?" },
            { speaker: "Ahmed", text: "Olen asunut täällä kolme vuotta. Ensin asuin Helsingissä yhden vuoden." },
            { speaker: "Toimittaja", text: "Mitä teet työksesi?" },
            {
              speaker: "Ahmed",
              text: "Olen bussinkuljettaja. Teen vuorotyötä, eli joskus aloitan aamulla kello viisi ja joskus lopetan vasta yöllä. Se on välillä raskasta, mutta tykkään työstäni.",
            },
            { speaker: "Toimittaja", text: "Mitä teet vapaa-ajalla?" },
            {
              speaker: "Ahmed",
              text: "Pelaan jalkapalloa kaksi kertaa viikossa. Talvella se on vähän vaikeaa, koska täällä on niin kylmä ja pimeää. Silloin pelaamme sisällä hallissa.",
            },
            { speaker: "Toimittaja", text: "Mikä Oulussa on parasta?" },
            {
              speaker: "Ahmed",
              text: "Ihmiset ovat ystävällisiä, ja luonto on lähellä. Kesällä menen usein pyörällä merenrantaan. Ensi vuonna haluan opiskella lisää suomea, koska haluan tehdä myöhemmin toista työtä.",
            },
          ],
          questions: [
            { id: "k1l4q1", type: "tf", q: "Ahmed on asunut Oulussa yhden vuoden.", answer: false, explain: "Three years in Oulu; one year was in Helsinki before." },
            { id: "k1l4q2", type: "tf", q: "Ahmedin työajat vaihtelevat.", answer: true, explain: "“Teen vuorotyötä … joskus aloitan aamulla … joskus lopetan vasta yöllä.”" },
            { id: "k1l4q3", type: "tf", q: "Ahmed ei pidä työstään.", answer: false, explain: "“Se on välillä raskasta, mutta tykkään työstäni.”" },
            { id: "k1l4q4", type: "tf", q: "Talvella Ahmed pelaa jalkapalloa sisällä.", answer: true, explain: "“Silloin pelaamme sisällä hallissa.”" },
            { id: "k1l4q5", type: "tf", q: "Ahmed haluaa opiskella suomea lisää.", answer: true, explain: "“Ensi vuonna haluan opiskella lisää suomea”." },
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
          id: "k1s0",
          kind: "warm-up",
          title: "Alkukeskustelu",
          instructions: {
            fi: "Haastattelija kysyy sinulta muutaman kysymyksen. Vastaa lyhyesti.",
            en: "The interviewer asks you a few questions. Answer briefly.",
          },
          prepSec: 0,
          card: null,
          items: [
            { id: "a", spoken: "Hei ja tervetuloa! Kerro vähän itsestäsi. Millainen on sinun tavallinen arkipäiväsi?", speakSec: 40 },
            { id: "b", spoken: "Miksi opiskelet suomea, ja missä tilanteissa tarvitset sitä?", speakSec: 40 },
            { id: "c", spoken: "Mitä teit viime viikonloppuna?", speakSec: 40 },
          ],
        },
        {
          id: "k1s1",
          kind: "topic",
          title: "Aihe 1: Kerro kodistasi",
          instructions: {
            fi: "Sinulla on kaksi minuuttia aikaa valmistautua. Voit kirjoittaa muistiin avainsanoja. Pyri puhumaan aktiivisesti!",
            en: "You have two minutes to prepare. You may jot down key words. Try to speak actively!",
          },
          prepSec: 120,
          card: {
            title: "Kerro kodistasi",
            questions: [
              "Missä asut?",
              "Millainen kotisi on?",
              "Kenen kanssa asut?",
              "Mikä on kotisi paras paikka? Miksi?",
              "Mitä palveluja kotisi lähellä on?",
              "Millaisessa kodissa haluaisit asua tulevaisuudessa?",
            ],
          },
          items: [
            { id: "a", spoken: "No niin, puhutaan kodista. Missä ja millaisessa asunnossa asut nyt?", speakSec: 50 },
            { id: "b", spoken: "Millainen sinun kotisi on? Kerro vähän.", speakSec: 60 },
            { id: "c", spoken: "Millainen oli sinun edellinen kotisi? Mikä on nyt paremmin ja mikä huonommin?", speakSec: 60 },
            { id: "d", spoken: "Mikä on kotisi paras paikka? Miksi?", speakSec: 45 },
            { id: "e", spoken: "Mitä kotisi lähellä on? Onko siellä esimerkiksi kauppoja tai puisto?", speakSec: 45 },
            { id: "f", spoken: "Millaisessa kodissa haluaisit asua tulevaisuudessa?", speakSec: 50 },
          ],
        },
        {
          id: "k1s2",
          kind: "opinion",
          title: "Aihe 2: Vapaa-aika ja harrastukset",
          instructions: {
            fi: "Sinulla on kaksi minuuttia aikaa valmistautua. Voit kirjoittaa muistiin avainsanoja. Pyri puhumaan aktiivisesti!",
            en: "You have two minutes to prepare. You may jot down key words. Try to speak actively!",
          },
          prepSec: 120,
          card: {
            title: "Kerro vapaa-ajastasi",
            questions: [
              "Mitä teet vapaa-ajalla?",
              "Mitä teit viime viikonloppuna?",
              "Mikä on lempiharrastuksesi? Miksi pidät siitä?",
              "Onko sinun mielestäsi tärkeää harrastaa jotain? Miksi?",
              "Mitä harrastusta haluaisit kokeilla?",
            ],
          },
          items: [
            { id: "a", spoken: "Seuraavaksi puhutaan vapaa-ajasta. Mitä sinä teet vapaa-ajalla?", speakSec: 50 },
            { id: "b", spoken: "Mitä teit viime viikonloppuna?", speakSec: 50 },
            { id: "c", spoken: "Mikä on sinun lempiharrastuksesi? Miksi pidät siitä?", speakSec: 50 },
            { id: "d", spoken: "Onko sinun mielestäsi tärkeää, että ihmisellä on harrastus? Miksi?", speakSec: 50 },
            { id: "e", spoken: "Mitä uutta harrastusta haluaisit kokeilla?", speakSec: 40 },
          ],
        },
        {
          id: "k1s3",
          kind: "roleplay",
          title: "Aihe 3: Kaupassa",
          instructions: {
            fi: "Sinulla on kaksi minuuttia aikaa valmistautua. Haastattelija on myyjä ja sinä olet asiakas. Pyri puhumaan aktiivisesti!",
            en: "You have two minutes to prepare. The interviewer is a shop assistant and you are a customer. Try to speak actively!",
          },
          prepSec: 120,
          card: {
            title: "Olet kenkäkaupassa. Haluat ostaa talvikengät. Haastattelija on myyjä.",
            questions: [
              "Tervehdi ja kerro, mitä haluat.",
              "Kerro, mikä koko ja väri sinulle sopii.",
              "Kysy hintaa.",
              "Kerro, miten maksat.",
              "Kiitä ja hyvästele.",
            ],
          },
          items: [
            { id: "a", spoken: "Päivää! Miten voin auttaa?", speakSec: 30 },
            { id: "b", spoken: "Selvä. Mikä koko teillä on? Ja minkä värisiä kenkiä haluaisitte?", speakSec: 35 },
            { id: "c", spoken: "Meillä on nämä mustat talvikengät. Haluatteko kokeilla?", speakSec: 30 },
            { id: "d", spoken: "Ne ovat hyvät talvikengät, lämpimät ja vedenkestävät. Onko teillä muita kysymyksiä?", speakSec: 35 },
            { id: "e", spoken: "Ne maksavat yhdeksänkymmentäyhdeksän euroa. Miten haluaisitte maksaa?", speakSec: 30 },
            { id: "f", spoken: "Kiitos! Tässä kuitti. Tarvitsetteko muovikassin?", speakSec: 25 },
          ],
        },
      ],
    },
  ],
};
