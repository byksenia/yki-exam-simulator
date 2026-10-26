// Harjoituskoe 5
export default {
  id: "koe5",
  title: "Harjoituskoe 5",
  description: "Family trip, lost property, hotel booking problem, delayed train, directions, lost luggage.",
  sections: [
    // ------------------------------------------------------------------ READING
    {
      id: "reading",
      minutes: 50,
      cutoffs: { level1: 0.4, level2: 0.7 },
      tasks: [
        {
          id: "k5r1",
          title: "Tehtävä 1: Sähköposti ystävältä",
          instructions: {
            fi: "Lue sähköposti ja vastaa kysymyksiin. Valitse oikea vaihtoehto.",
            en: "Read the email and answer the questions. Choose the correct option.",
          },
          text: {
            title: "Aihe: Terveisiä matkalta!",
            body:
              "Hei Marja!\n\n" +
              "Olemme taas kotona! Ahvenanmaan matka oli ihana, vaikka kaikki ei mennyt niin kuin suunnittelimme. " +
              "Meidän piti lähteä laivalla Turusta jo perjantaiaamuna, mutta kolmevuotias Eeli sai kuumetta, joten lähdimme vasta sunnuntaina. " +
              "Onneksi saimme vaihtaa liput ilman lisämaksua.\n\n" +
              "Laivamatka kesti noin viisi tuntia. Lapset olivat ensin innoissaan, mutta pian heillä oli tylsää. Onneksi laivassa oli leikkihuone!\n\n" +
              "Ajattelimme ensin nukkua teltassa, mutta sää oli niin sateinen, että vuokrasimme leirintäalueelta pienen mökin. " +
              "Se oli kalliimpi, mutta paljon mukavampi. Pyöräilimme joka päivä. Kuusivuotias Ella ajoi jo yksin omalla pyörällään, " +
              "ja Eeli istui minun pyöräni lastenistuimessa.\n\n" +
              "Viimeisenä päivänä kävimme Maarianhaminassa museolaivassa. Ellan mielestä se oli koko matkan paras paikka.\n\n" +
              "Ensi kesänä haluaisimme mennä Ahvenanmaalle uudestaan, mutta silloin pidemmäksi aikaa. Lähtisittekö te mukaan? " +
              "Meidän lapset olisivat varmasti iloisia, jos teidän Otto tulisi myös!\n\n" +
              "Halauksin\nSanna",
          },
          questions: [
            {
              id: "k5r1q1",
              type: "mc",
              q: "Miksi perhe lähti matkalle myöhemmin kuin oli suunniteltu?",
              options: ["Laiva oli myöhässä.", "Yksi lapsista oli kipeä.", "Liput olivat loppuneet."],
              answer: 1,
              explain:
                "“kolmevuotias Eeli sai kuumetta, joten lähdimme vasta sunnuntaina” — a child had a fever. The tickets are mentioned only because they could be changed for free.",
            },
            {
              id: "k5r1q2",
              type: "mc",
              q: "Mitä Sanna kertoo laivamatkasta?",
              options: [
                "Lapset olivat innoissaan koko matkan ajan.",
                "Lapsilla oli välillä tylsää.",
                "Laivassa ei ollut mitään tekemistä lapsille.",
              ],
              answer: 1,
              explain:
                "“Lapset olivat ensin innoissaan, mutta pian heillä oli tylsää.” Excitement was only at first, and there was a playroom on board.",
            },
            {
              id: "k5r1q3",
              type: "mc",
              q: "Missä perhe nukkui Ahvenanmaalla?",
              options: ["Teltassa leirintäalueella", "Vuokramökissä", "Hotellissa Maarianhaminassa"],
              answer: 1,
              explain:
                "They planned to sleep in a tent, but because of the rain “vuokrasimme leirintäalueelta pienen mökin” — a rented cabin.",
            },
            {
              id: "k5r1q4",
              type: "mc",
              q: "Mikä oli Ellan mielestä matkan paras paikka?",
              options: ["Laivan leikkihuone", "Leirintäalueen mökki", "Vanha laiva, joka on nyt museo"],
              answer: 2,
              explain: "“kävimme Maarianhaminassa museolaivassa. Ellan mielestä se oli koko matkan paras paikka.”",
            },
            {
              id: "k5r1q5",
              type: "mc",
              q: "Mikä on Sannan viestin tärkein asia Marjalle?",
              options: [
                "Hän kutsuu Marjan perheen yhteiselle matkalle.",
                "Hän pyytää Marjalta neuvoja seuraavaa matkaa varten.",
                "Hän kiittää Marjaa avusta loman aikana.",
              ],
              answer: 0,
              explain:
                "The purpose: “Ensi kesänä haluaisimme mennä Ahvenanmaalle uudestaan … Lähtisittekö te mukaan?” — an invitation to travel together.",
            },
          ],
        },
        {
          id: "k5r2",
          title: "Tehtävä 2: Löytötavaratoimiston tiedote",
          instructions: {
            fi: "Lue tiedote. Ovatko väitteet oikein vai väärin?",
            en: "Read the notice. Are the statements true (oikein) or false (väärin)?",
          },
          text: {
            title: "Kaupunkiliikenteen löytötavarat",
            body:
              "Unohditko jotain bussiin, raitiovaunuun tai metroon? Kaikki löytötavarat viedään ensin varikolle, ja sieltä ne tuodaan " +
              "löytötavaratoimistoon rautatieaseman toiseen kerrokseen. Tähän menee yleensä kaksi tai kolme arkipäivää, joten älä tule " +
              "toimistoon heti seuraavana päivänä.\n\n" +
              "Voit etsiä kadonnutta tavaraa myös kaupungin nettisivuilta. Puhelimessa emme valitettavasti voi kertoa, onko tavarasi löytynyt.\n\n" +
              "Toimisto on auki maanantaista perjantaihin kello 9–17, torstaisin kello 19 asti. Viikonloppuisin toimisto on kiinni.\n\n" +
              "Säilytämme tavaroita kolme kuukautta. Lompakot ja puhelimet viemme kuitenkin poliisille jo kahden viikon jälkeen. " +
              "Ruokaa ja avattuja juomia emme säilytä.\n\n" +
              "Kun haet tavaraa, ota mukaan henkilöllisyystodistus. Tavaran hakeminen maksaa 5 euroa. Lapsille ja opiskelijoille palvelu on ilmainen.",
          },
          questions: [
            {
              id: "k5r2q1",
              type: "tf",
              q: "Jos unohdat laukun bussiin, voit hakea sen toimistosta jo seuraavana aamuna.",
              answer: false,
              explain:
                "Items reach the office in “kaksi tai kolme arkipäivää, joten älä tule toimistoon heti seuraavana päivänä”.",
            },
            {
              id: "k5r2q2",
              type: "tf",
              q: "Toimistoon voi soittaa ja kysyä, onko kadonnut tavara löytynyt.",
              answer: false,
              explain: "“Puhelimessa emme valitettavasti voi kertoa, onko tavarasi löytynyt.” You can search online instead.",
            },
            {
              id: "k5r2q3",
              type: "tf",
              q: "Torstaina toimistoon ehtii vielä kello kuuden jälkeen.",
              answer: true,
              explain: "Normally open until 17, but “torstaisin kello 19 asti”.",
            },
            {
              id: "k5r2q4",
              type: "tf",
              q: "Jos olet kadottanut puhelimesi kuukausi sitten, se on luultavasti poliisilla.",
              answer: true,
              explain:
                "Items are kept three months, but “Lompakot ja puhelimet viemme kuitenkin poliisille jo kahden viikon jälkeen.” After a month, a phone is with the police.",
            },
          ],
        },
        {
          id: "k5r3",
          title: "Tehtävä 3: Hotellin nettisivu",
          instructions: {
            fi: "Lue hotellin nettisivu ja vastaa kysymyksiin suomeksi. Vastaa lyhyesti.",
            en: "Read the hotel web page and answer the questions in Finnish. Answer briefly.",
          },
          text: {
            title: "Hotelli Merikallio – hinnat ja tietoa varaajalle",
            body:
              "Huoneet (hinta yöltä):\n" +
              "Yhden hengen huone 89 €\n" +
              "Kahden hengen huone 115 €\n" +
              "Perhehuone (2 aikuista ja 2 lasta) 145 €\n" +
              "Viikonloppuna (pe–su) kaikki huoneet ovat 15 euroa halvempia.\n\n" +
              "Hintaan kuuluvat aamiainen ja hotellin sauna. Alle 4-vuotias lapsi voi nukkua vanhempien sängyssä ilmaiseksi. " +
              "Lisävuode maksaa 20 euroa yöltä.\n\n" +
              "Huoneen saa tulopäivänä kello 15 alkaen. Lähtöpäivänä huone pitää luovuttaa kello 12 mennessä. " +
              "Matkalaukut voi jättää aulaan säilytykseen koko päiväksi.\n\n" +
              "Varauksen voi perua maksutta viimeistään kaksi vuorokautta ennen tuloa. Jos perut myöhemmin, maksat ensimmäisen yön hinnan.\n\n" +
              "Pysäköinti hotellin pihalla maksaa 12 euroa vuorokaudessa. Lemmikkejä emme valitettavasti voi ottaa vastaan.",
          },
          questions: [
            {
              id: "k5r3q1",
              type: "open",
              q: "Paljonko perhehuone maksaa lauantain ja sunnuntain väliseltä yöltä?",
              accept: ["130 euroa", "130 €", "130", "satakolmekymmentä euroa"],
              keyNote: "130 euros (145 − 15 weekend discount). 145 is wrong.",
              explain: "Family room 145 €, and at weekends (pe–su) “kaikki huoneet ovat 15 euroa halvempia” → 130 €.",
            },
            {
              id: "k5r3q2",
              type: "open",
              q: "Mitä huoneen hinta sisältää?",
              hint: "(2 asiaa)",
              accept: ["aamiaisen ja saunan", "aamiainen ja sauna", "aamiainen, sauna"],
              keyNote: "Both: breakfast AND sauna. Parking or an extra bed is wrong (they cost extra).",
              explain: "“Hintaan kuuluvat aamiainen ja hotellin sauna.”",
            },
            {
              id: "k5r3q3",
              type: "open",
              q: "Lähtöpäivänä junasi lähtee vasta illalla. Mihin voit jättää matkalaukut?",
              accept: ["aulaan", "hotellin aulaan", "aulaan säilytykseen", "aulassa"],
              keyNote: "In the lobby (luggage storage). Accept any form of 'aula'.",
              explain: "The room must be left by 12, but “Matkalaukut voi jättää aulaan säilytykseen koko päiväksi.”",
            },
            {
              id: "k5r3q4",
              type: "open",
              q: "Peruutat varauksen päivää ennen tuloa. Mitä sinun pitää maksaa?",
              accept: ["ensimmäisen yön hinta", "ensimmäisen yön hinnan", "yhden yön hinta", "ensimmäinen yö"],
              keyNote: "The price of the first night. 'Nothing' is wrong: free cancellation needs at least two days' notice.",
              explain:
                "Free cancellation only “viimeistään kaksi vuorokautta ennen tuloa”. One day is too late, so “maksat ensimmäisen yön hinnan”.",
            },
          ],
        },
        {
          id: "k5r4",
          title: "Tehtävä 4: Lukijan kirje",
          instructions: {
            fi: "Lue lukijan kirje lehdestä ja vastaa kysymyksiin. Valitse oikea vaihtoehto.",
            en: "Read the reader's letter and answer the questions. Choose the correct option.",
          },
          text: {
            title: "Lautalla saaristoon lasten kanssa",
            body:
              "Teimme viime lauantaina perheen kanssa retken saaristoon. Menimme lautalla Nauvosta Korppooseen. Matka oli lyhyt ja ilmainen, " +
              "ja maisemat olivat todella kauniit. Lapset katselivat lokkeja ja veneitä koko matkan.\n\n" +
              "Paluumatkalla tuli kuitenkin ongelma. Lautta oli täynnä, ja jouduimme odottamaan seuraavaa lauttaa melkein tunnin. " +
              "Satamassa ei ollut kahvilaa eikä vessaa, vain pieni penkki. Kahden pienen lapsen kanssa odottaminen oli vaikeaa, " +
              "varsinkin kun alkoi sataa.\n\n" +
              "On hyvä asia, että kesällä saaristossa käy paljon matkailijoita. Mutta jos lautat ovat aina täynnä, viikonloppuisin pitäisi " +
              "olla enemmän vuoroja. Lisäksi satamaan tarvittaisiin edes katos ja vessa.\n\n" +
              "Kävimme saaristossa jo toisen kerran tänä kesänä, ja menemme varmasti vielä uudestaan. Ensi kerralla lähdemme kuitenkin " +
              "liikkeelle aikaisemmin aamulla ja otamme mukaan enemmän eväitä.\n\n" +
              "Riikka Laine, Turku",
          },
          questions: [
            {
              id: "k5r4q1",
              type: "mc",
              q: "Millainen menomatka oli?",
              options: [
                "Se oli kallis mutta kaunis.",
                "Lapsilla oli paljon katseltavaa.",
                "Lautta oli täynnä matkailijoita.",
              ],
              answer: 1,
              explain:
                "“Lapset katselivat lokkeja ja veneitä koko matkan.” The trip was free, and the full ferry was on the way back.",
            },
            {
              id: "k5r4q2",
              type: "mc",
              q: "Miksi perhe joutui odottamaan satamassa?",
              options: [
                "Lautta oli myöhässä sateen takia.",
                "He eivät mahtuneet ensimmäiseen lauttaan.",
                "Lautta ei kulkenut viikonloppuna.",
              ],
              answer: 1,
              explain: "“Lautta oli täynnä, ja jouduimme odottamaan seuraavaa lauttaa melkein tunnin.” The rain only made waiting harder.",
            },
            {
              id: "k5r4q3",
              type: "mc",
              q: "Mitä Riikka haluaa kirjeellään sanoa?",
              options: [
                "Saaristoon tulee kesällä liikaa matkailijoita.",
                "Lautalla matkustamisen pitäisi maksaa jotain.",
                "Lauttoja pitäisi kulkea useammin, ja satamassa pitäisi olla palveluja.",
              ],
              answer: 2,
              explain:
                "Main point: “viikonloppuisin pitäisi olla enemmän vuoroja … satamaan tarvittaisiin edes katos ja vessa.” She says many tourists is a good thing.",
            },
            {
              id: "k5r4q4",
              type: "mc",
              q: "Mitä perhe aikoo tehdä seuraavalla kerralla toisin?",
              options: [
                "He lähtevät matkaan aiemmin.",
                "He syövät sataman kahvilassa.",
                "He menevät saaristoon vasta ensi kesänä.",
              ],
              answer: 0,
              explain:
                "“Ensi kerralla lähdemme kuitenkin liikkeelle aikaisemmin aamulla”. There is no café at the harbour, and they will go again this summer.",
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
          id: "k5w1",
          title: "Tehtävä 1: Sähköposti hotellille",
          instructions: { fi: "Kirjoita viesti. Kirjoita noin 30–60 sanaa.", en: "Write a message of about 30–60 words." },
          prompt:
            "Olit viime viikonloppuna perheesi kanssa Hotelli Satamassa. Olit varannut perhehuoneen, mutta kun tulitte hotelliin, " +
            "saitte pienen kahden hengen huoneen. Kirjoita sähköposti hotellille.",
          bullets: [
            "Kerro, milloin olit hotellissa ja mitä olit varannut.",
            "Kerro, mikä ongelma oli ja miksi se oli teille hankalaa.",
            "Kerro, mitä toivot hotellin tekevän.",
            "Muista aloittaa ja lopettaa viesti sopivalla tavalla.",
          ],
          promptEn:
            "Last weekend you stayed at Hotel Satama with your family. You had booked a family room, but on arrival you got a small double room. Write to the hotel: when you stayed and what you had booked, what the problem was and why it was difficult, and what you want the hotel to do (e.g. a partial refund).",
          register:
            "semi-formal complaint to a company: Hei / Hyvä vastaanotto … Ystävällisin terveisin / Terveisin + full name; polite requests (Voisitteko…, Toivoisin…)",
          minWords: 30,
          maxWords: 60,
        },
        {
          id: "k5w2",
          title: "Tehtävä 2: Viesti naapurille",
          instructions: { fi: "Kirjoita viesti. Kirjoita noin 30–60 sanaa.", en: "Write a message of about 30–60 words." },
          prompt:
            "Lähdet ensi viikolla kahdeksi viikoksi lomalle. Tarvitset apua kotiasioissa. Kirjoita viesti naapurillesi Pirjolle.",
          bullets: [
            "Kerro, minne lähdet ja milloin tulet takaisin.",
            "Pyydä Pirjoa auttamaan. Kerro, mitä hänen pitäisi tehdä ja miksi.",
            "Kiitä Pirjoa avusta, jota sait häneltä viime kesänä.",
            "Muista aloittaa ja lopettaa viesti sopivalla tavalla.",
          ],
          promptEn:
            "Next week you are going on holiday for two weeks. Write to your neighbour Pirjo: where you are going and when you'll be back, ask her to help (e.g. water plants, empty the mailbox) and say why, and thank her for helping you last summer.",
          register: "informal message to a neighbour you know: Hei Pirjo! … Kiitos jo etukäteen! Terveisin / Moikka + name",
          minWords: 30,
          maxWords: 60,
        },
        {
          id: "k5w3",
          title: "Tehtävä 3: Mielipide",
          instructions: { fi: "Kirjoita mielipiteesi. Kirjoita noin 30–60 sanaa.", en: "Write your opinion in about 30–60 words." },
          prompt:
            "Suomen kurssin blogissa kysytään: Mitä mieltä olet – onko parempi viettää loma kotimaassa vai matkustaa ulkomaille? " +
            "Kirjoita mielipiteesi blogiin. Perustele.",
          bullets: [
            "Kumpi on sinun mielestäsi parempi? Miksi?",
            "Kerro, missä vietit viime lomasi ja millainen se oli.",
            "Mitä suosittelet ihmiselle, jolla ei ole paljon rahaa lomaan?",
          ],
          promptEn:
            "A Finnish course blog asks: is it better to spend your holiday at home (in Finland) or to travel abroad? Give your opinion with reasons, tell where you spent your last holiday and what it was like, and give a recommendation to someone with little money.",
          register: "short opinion text for a course blog: no formal greeting needed; clear opinion (Minun mielestäni…, koska…) and a recommendation (Suosittelen…)",
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
          id: "k5l1",
          title: "Tehtävä 1: Viesti hotellista",
          instructions: {
            fi: "Kuulet puhelinviestin kaksi kertaa. Lue ensin kysymykset. Vastaa lyhyesti suomeksi.",
            en: "You will hear a phone message twice. Read the questions first. Answer briefly in Finnish.",
          },
          situation: "Kuulet viestin puhelinvastaajasta. Hotellista soitetaan asiakkaalle.",
          plays: 2,
          rate: 0.9,
          lines: [
            {
              speaker: "A",
              text:
                "Hyvää päivää, täällä on Kirsi Hotelli Järvihelmestä. Soitan teidän varauksestanne. Olette varanneet meiltä kahden hengen huoneen " +
                "kolmeksi yöksi, perjantaista maanantaihin. Meidän varausjärjestelmässä on valitettavasti ollut vika, ja sama huone on varattu kahdesti. " +
                "Kahden hengen huoneita ei ole sille viikonlopulle enää vapaana. Voimme tarjota teille perhehuoneen samaan hintaan, eli ette maksa mitään lisää. " +
                "Perhehuoneessa on oma sauna, mutta siinä ei ole parveketta. Toinen vaihtoehto on, että siirrätte matkaa viikolla eteenpäin. " +
                "Silloin saatte saman huoneen kuin varasitte. Ilmoittakaa meille, kumpi sopii teille paremmin, keskiviikkoon mennessä, ei kun torstaihin mennessä, " +
                "koska olen itse keskiviikkona vapaalla. Voitte soittaa tähän numeroon tai lähettää sähköpostia. Pahoittelemme kovasti!",
            },
          ],
          questions: [
            {
              id: "k5l1q1",
              type: "open",
              q: "Mikä varauksessa on mennyt pieleen?",
              accept: ["huone on varattu kahdesti", "sama huone on varattu kaksi kertaa", "huone on varattu kahdelle asiakkaalle", "vika varausjärjestelmässä"],
              keyNote: "The same room has been booked twice (double booking / a fault in the booking system).",
              explain: "“varausjärjestelmässä on … ollut vika, ja sama huone on varattu kahdesti.”",
            },
            {
              id: "k5l1q2",
              type: "open",
              q: "Mitä vaihtoehtoja hotelli tarjoaa asiakkaalle?",
              hint: "(2 asiaa)",
              accept: [
                "perhehuone samaan hintaan ja matkan siirtäminen viikolla",
                "perhehuone tai matka viikkoa myöhemmin",
                "perhehuone, matkan siirto viikolla eteenpäin",
              ],
              keyNote: "Both: a family room at the same price AND moving the trip one week later.",
              explain: "“Voimme tarjota teille perhehuoneen samaan hintaan … Toinen vaihtoehto on, että siirrätte matkaa viikolla eteenpäin.”",
            },
            {
              id: "k5l1q3",
              type: "open",
              q: "Mitä perhehuoneessa on, ja mitä siinä ei ole?",
              hint: "(2 asiaa)",
              accept: ["siinä on sauna mutta ei parveketta", "on sauna, ei parveketta", "oma sauna, ei parveketta"],
              keyNote: "Both: it HAS its own sauna, it has NO balcony.",
              explain: "“Perhehuoneessa on oma sauna, mutta siinä ei ole parveketta.”",
            },
            {
              id: "k5l1q4",
              type: "open",
              q: "Mihin mennessä asiakkaan pitää vastata?",
              accept: ["torstaihin mennessä", "torstaihin", "torstaina", "viimeistään torstaina"],
              keyNote: "By Thursday. Wednesday is wrong (she corrects herself).",
              explain: "“keskiviikkoon mennessä, ei kun torstaihin mennessä” — the speaker corrects Wednesday to Thursday.",
            },
          ],
        },
        {
          id: "k5l2",
          title: "Tehtävä 2: Kuulutus rautatieasemalla",
          instructions: {
            fi: "Kuulet kuulutuksen kaksi kertaa. Ovatko väitteet oikein vai väärin?",
            en: "You will hear an announcement twice. Are the statements true or false?",
          },
          situation: "Olet rautatieasemalla. Kuulet kuulutuksen.",
          plays: 2,
          rate: 0.9,
          lines: [
            {
              speaker: "A",
              text:
                "Hyvät matkustajat, tiedotamme muutoksesta. Kello kymmenen viisitoista Tampereelle lähtevä juna on tänään noin kaksikymmentäviisi minuuttia myöhässä. " +
                "Myöhästyminen johtuu junan teknisestä viasta. Juna lähtee tänään raiteelta neljä, ei raiteelta seitsemän. " +
                "Huomatkaa myös, että Hämeenlinnan ja Tampereen välillä tehdään ratatöitä, joten juna kulkee tänään vain Hämeenlinnaan asti. " +
                "Sieltä matka jatkuu korvaavalla bussilla. Bussit odottavat aseman edessä ja lähtevät heti, kun juna on saapunut. " +
                "Bussimatka kestää noin tunnin. Uutta lippua ei tarvitse ostaa, sillä junalippu käy myös bussissa. " +
                "Polkupyöriä bussiin ei valitettavasti voi ottaa. Pahoittelemme häiriötä ja toivotamme hyvää matkaa.",
            },
          ],
          questions: [
            {
              id: "k5l2q1",
              type: "tf",
              q: "Juna on myöhässä, koska radalla tehdään töitä.",
              answer: false,
              explain:
                "The delay is because of “junan teknisestä viasta”. The track works are the reason for the replacement bus, not for the delay.",
            },
            {
              id: "k5l2q2",
              type: "tf",
              q: "Tampereelle ei pääse tänään suoraan junalla.",
              answer: true,
              explain: "“juna kulkee tänään vain Hämeenlinnaan asti. Sieltä matka jatkuu korvaavalla bussilla.”",
            },
            {
              id: "k5l2q3",
              type: "tf",
              q: "Bussia varten pitää ostaa oma lippu.",
              answer: false,
              explain: "“Uutta lippua ei tarvitse ostaa, sillä junalippu käy myös bussissa.”",
            },
            {
              id: "k5l2q4",
              type: "tf",
              q: "Bussi lähtee Hämeenlinnasta vasta, kun junan matkustajat ovat tulleet.",
              answer: true,
              explain: "“Bussit odottavat aseman edessä ja lähtevät heti, kun juna on saapunut.”",
            },
          ],
        },
        {
          id: "k5l3",
          title: "Tehtävä 3: Tien kysyminen",
          instructions: {
            fi: "Kuulet keskustelun kaksi kertaa. Lue ensin kysymykset. Valitse oikea vaihtoehto.",
            en: "You will hear a conversation twice. Read the questions first. Choose the correct option.",
          },
          situation: "Matkailija kysyy kadulla tietä.",
          plays: 2,
          rate: 0.92,
          lines: [
            { speaker: "Matkailija", text: "Anteeksi, voisitteko auttaa? Etsin satamaa. Minun laivani lähtee Tukholmaan kello viisi." },
            { speaker: "Nainen", text: "Satamaan? Se on aika kaukana, noin kolme kilometriä. Kävellen siihen menee ainakin puoli tuntia." },
            { speaker: "Matkailija", text: "Oho. Kulkeeko sinne bussi?" },
            {
              speaker: "Nainen",
              text: "Kulkee, numero kolme… ei kun kolmetoista. Mutta se kulkee vain kerran tunnissa, ja seuraava lähtee vasta vähän ennen neljää.",
            },
            { speaker: "Matkailija", text: "Hmm, se on vähän myöhään. Haluaisin olla satamassa hyvissä ajoin." },
            {
              speaker: "Nainen",
              text: "Sitten kannattaa ottaa kaupunkipyörä. Tuossa kulman takana on pyöräasema. Pyörän saa puhelimen sovelluksella.",
            },
            { speaker: "Matkailija", text: "Paljonko se maksaa?" },
            {
              speaker: "Nainen",
              text: "Päivä maksaa viisi euroa, ja sillä saa ajaa puoli tuntia kerrallaan. Satamaan ajaa noin kymmenessä minuutissa.",
            },
            { speaker: "Matkailija", text: "Hyvä. Mutta miten sinne pääsee?" },
            {
              speaker: "Nainen",
              text:
                "Aja ensin tätä katua suoraan torille asti. Torin jälkeen käänny vasemmalle, ja sitten tulee pitkä rantakatu. " +
                "Sitä pitkin pääset satamaan. Sataman vieressä on myös pyöräasema, sinne voit jättää pyörän.",
            },
            { speaker: "Matkailija", text: "Kiitos paljon, autoitte tosi paljon!" },
          ],
          questions: [
            {
              id: "k5l3q1",
              type: "mc",
              q: "Miksi matkailija on menossa satamaan?",
              options: ["Hän lähtee laivalla ulkomaille.", "Hän tapaa siellä ystävänsä.", "Hän hakee sieltä laukkunsa."],
              answer: 0,
              explain: "“Minun laivani lähtee Tukholmaan kello viisi.” Stockholm = abroad.",
            },
            {
              id: "k5l3q2",
              type: "mc",
              q: "Miksi matkailija ei halua mennä bussilla?",
              options: ["Bussi on liian kallis.", "Bussi ei lähde tarpeeksi pian.", "Bussipysäkki on liian kaukana."],
              answer: 1,
              explain: "The next bus leaves “vasta vähän ennen neljää”, and he wants to be at the harbour “hyvissä ajoin”.",
            },
            {
              id: "k5l3q3",
              type: "mc",
              q: "Mitä nainen kertoo kaupunkipyörästä?",
              options: [
                "Sillä saa ajaa vain puoli tuntia päivässä.",
                "Sen voi palauttaa sataman lähelle.",
                "Sen voi ottaa ilman puhelinta.",
              ],
              answer: 1,
              explain:
                "“Sataman vieressä on myös pyöräasema, sinne voit jättää pyörän.” Half an hour is per ride (“kerrallaan”), not per day, and you need the phone app.",
            },
            {
              id: "k5l3q4",
              type: "mc",
              q: "Missä matkailijan pitää kääntyä?",
              options: ["Torin jälkeen vasemmalle", "Ennen toria oikealle", "Rantakadun päässä vasemmalle"],
              answer: 0,
              explain: "“Torin jälkeen käänny vasemmalle, ja sitten tulee pitkä rantakatu.”",
            },
          ],
        },
        {
          id: "k5l4",
          title: "Tehtävä 4: Haastattelu",
          instructions: {
            fi: "Kuulet haastattelun kaksi kertaa. Ovatko väitteet oikein vai väärin?",
            en: "You will hear an interview twice. Are the statements true or false?",
          },
          situation: "Radiossa haastatellaan Mikaelia, joka matkustaa paljon perheensä kanssa.",
          plays: 2,
          rate: 0.9,
          lines: [
            { speaker: "Toimittaja", text: "Mikael, te matkustatte paljon lasten kanssa. Missä olitte viime kesänä?" },
            {
              speaker: "Mikael",
              text:
                "Olimme kaksi viikkoa Kreikassa. Lapsista lentäminen oli jännittävää. Mutta rehellisesti sanottuna matka oli myös aika raskas, " +
                "koska siellä oli niin kuuma. Nuorin lapsi oli silloin vasta kaksivuotias.",
            },
            { speaker: "Toimittaja", text: "Entä tänä kesänä? Mitä olette suunnitelleet?" },
            {
              speaker: "Mikael",
              text:
                "Ajattelimme ensin lähteä Italiaan, mutta päätimme sitten lomailla Suomessa. Vuokraamme Kainuusta mökin viikoksi. " +
                "Siellä on järvi ja sauna, eikä tarvitse istua lentokoneessa.",
            },
            { speaker: "Toimittaja", text: "Onko sinulla neuvoja muille lapsiperheille?" },
            {
              speaker: "Mikael",
              text:
                "Tärkeintä on, ettei suunnittele liikaa. Yksi retki päivässä riittää. Ja junassa on paljon helpompi matkustaa kuin autossa, " +
                "koska lapset voivat liikkua ja käydä leikkivaunussa.",
            },
            { speaker: "Toimittaja", text: "Mikä on ollut teidän paras matkanne?" },
            {
              speaker: "Mikael",
              text: "Ehkä junamatka Rovaniemelle kolme vuotta sitten. Nukuimme makuuvaunussa, ja lapset puhuvat siitä vieläkin.",
            },
          ],
          questions: [
            {
              id: "k5l4q1",
              type: "tf",
              q: "Mikaelin mielestä matka Kreikkaan oli helppo.",
              answer: false,
              explain: "“matka oli myös aika raskas, koska siellä oli niin kuuma.”",
            },
            {
              id: "k5l4q2",
              type: "tf",
              q: "Perhe lähtee tänä kesänä ulkomaille.",
              answer: false,
              explain: "Changed plan: “Ajattelimme ensin lähteä Italiaan, mutta päätimme sitten lomailla Suomessa.”",
            },
            {
              id: "k5l4q3",
              type: "tf",
              q: "Mikaelin mielestä lomapäiviin ei kannata suunnitella liikaa ohjelmaa.",
              answer: true,
              explain: "“Tärkeintä on, ettei suunnittele liikaa. Yksi retki päivässä riittää.”",
            },
            {
              id: "k5l4q4",
              type: "tf",
              q: "Lasten kanssa on Mikaelin mielestä helpompi matkustaa autolla kuin junalla.",
              answer: false,
              explain: "The opposite: “junassa on paljon helpompi matkustaa kuin autossa”.",
            },
            {
              id: "k5l4q5",
              type: "tf",
              q: "Lapset muistavat yhä matkan pohjoiseen.",
              answer: true,
              explain: "The train trip to Rovaniemi: “lapset puhuvat siitä vieläkin.”",
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
          id: "k5s0",
          kind: "warm-up",
          title: "Alkukeskustelu",
          instructions: {
            fi: "Haastattelija kysyy sinulta muutaman kysymyksen. Vastaa muutamalla lauseella.",
            en: "The interviewer asks you a few questions. Answer in a few sentences.",
          },
          prepSec: 0,
          card: null,
          items: [
            { id: "a", spoken: "Hei ja tervetuloa! Kerro ensin, miten tulit tänään tänne. Kauanko matka kesti?", speakSec: 35 },
            { id: "b", spoken: "Mitä teit viime viikonloppuna? Kerro vähän.", speakSec: 40 },
            { id: "c", spoken: "Mitä sinä teet mieluiten kesällä, ja miksi?", speakSec: 40 },
          ],
        },
        {
          id: "k5s1",
          kind: "topic",
          title: "Aihe 1: Matka, jonka muistan",
          instructions: {
            fi: "Sinulla on kaksi minuuttia aikaa valmistautua. Voit kirjoittaa muistiin avainsanoja. Pyri puhumaan aktiivisesti!",
            en: "You have two minutes to prepare. You may jot down key words. Try to speak actively!",
          },
          prepSec: 120,
          card: {
            title: "Kerro matkasta, jonka muistat hyvin",
            questions: [
              "Minne matkustit ja milloin?",
              "Kenen kanssa olit matkalla?",
              "Miten matkustit sinne?",
              "Mitä teit ja näit siellä?",
              "Mikä oli matkalla parasta? Mikä oli vaikeaa?",
              "Miten matkustaminen Suomessa on erilaista kuin kotimaassasi?",
            ],
          },
          items: [
            { id: "a", spoken: "Puhutaan matkoista. Kerro matkasta, jonka muistat hyvin. Minne matkustit ja milloin?", speakSec: 50 },
            { id: "b", spoken: "Kenen kanssa olit matkalla? Ja miten matkustitte sinne?", speakSec: 45 },
            { id: "c", spoken: "Mitä te teitte siellä? Kerro vähän.", speakSec: 60 },
            { id: "d", spoken: "Mikä matkalla oli parasta? Oliko jokin myös vaikeaa?", speakSec: 50 },
            { id: "e", spoken: "Miten matkustaminen Suomessa on erilaista kuin sinun kotimaassasi?", speakSec: 60 },
            { id: "f", spoken: "Entä minne haluaisit matkustaa seuraavaksi? Miksi?", speakSec: 45 },
          ],
        },
        {
          id: "k5s2",
          kind: "opinion",
          title: "Aihe 2: Julkinen liikenne vai oma auto?",
          instructions: {
            fi: "Sinulla on kaksi minuuttia aikaa valmistautua. Voit kirjoittaa muistiin avainsanoja. Pyri puhumaan aktiivisesti!",
            en: "You have two minutes to prepare. You may jot down key words. Try to speak actively!",
          },
          prepSec: 120,
          card: {
            title: "Julkinen liikenne vai oma auto?",
            questions: [
              "Miten sinä liikut tavallisesti arjessa?",
              "Mitä hyvää julkisessa liikenteessä on?",
              "Mitä huonoa julkisessa liikenteessä on?",
              "Tarvitseeko Suomessa omaa autoa? Miksi tai miksi ei?",
              "Mitä sinun kaupunkisi pitäisi muuttaa liikenteessä?",
              "Miten suosittelet uuden asukkaan liikkuvan kaupungissasi?",
            ],
          },
          items: [
            { id: "a", spoken: "Seuraavaksi puhutaan liikenteestä. Miten sinä yleensä liikut arjessa, esimerkiksi töihin tai kauppaan?", speakSec: 45 },
            { id: "b", spoken: "Mitä hyvää bussissa tai junassa matkustamisessa on?", speakSec: 50 },
            { id: "c", spoken: "Entä mitä huonoa? Onko sinulla ollut ongelmia?", speakSec: 50 },
            { id: "d", spoken: "Tarvitseeko Suomessa sinun mielestäsi omaa autoa? Miksi?", speakSec: 60 },
            { id: "e", spoken: "Mitä sinun kaupungissasi pitäisi muuttaa liikenteessä?", speakSec: 50 },
            { id: "f", spoken: "Jos ystäväsi muuttaa sinun kaupunkiisi, miten suosittelet hänen liikkuvan? Miksi?", speakSec: 45 },
          ],
        },
        {
          id: "k5s3",
          kind: "roleplay",
          title: "Aihe 3: Kadonnut matkalaukku",
          instructions: {
            fi: "Sinulla on kaksi minuuttia aikaa valmistautua. Haastattelija on lentokentän työntekijä ja sinä olet matkustaja. Pyri puhumaan aktiivisesti!",
            en: "You have two minutes to prepare. The interviewer is an airport employee and you are a passenger. Try to speak actively!",
          },
          prepSec: 120,
          card: {
            title:
              "Olet lentokentällä. Lentosi tuli juuri, mutta matkalaukkusi ei tullut. Menet matkatavarapalveluun. Haastattelija on palvelun työntekijä.",
            questions: [
              "Tervehdi ja kerro ongelmasi.",
              "Kerro, mistä tulit ja millä lennolla.",
              "Kuvaile laukkuasi: koko, väri ja mitä siinä on.",
              "Kerro, missä asut matkan aikana ja kuinka kauan.",
              "Kerro, mitä tarvitset heti, ja kysy, mitä voit tehdä.",
              "Kiitä ja hyvästele.",
            ],
          },
          items: [
            { id: "a", spoken: "Hei, matkatavarapalvelu. Miten voin auttaa?", speakSec: 45 },
            { id: "b", spoken: "Ikävä kuulla. Mistä te tulitte, ja millä lennolla?", speakSec: 45 },
            { id: "c", spoken: "Selvä. Millainen teidän laukkunne on? Kertokaa mahdollisimman tarkasti. Mitä siinä on?", speakSec: 60 },
            {
              id: "d",
              spoken:
                "Kiitos. Näyttää siltä, että laukku on jäänyt Frankfurtiin. Se tulee huomenna iltapäivällä. Haluatteko hakea sen täältä, vai tuodaanko se teille? Miksi?",
              speakSec: 50,
            },
            { id: "e", spoken: "Missä te asutte matkan aikana, ja kuinka kauan olette siellä?", speakSec: 45 },
            {
              id: "f",
              spoken:
                "Tarvitsetteko jotain jo tänä iltana? Voitte ostaa tärkeimmät tavarat itse, ja me maksamme ne kuittia vastaan. Mitä aiotte ostaa?",
              speakSec: 50,
            },
          ],
        },
      ],
    },
  ],
};
