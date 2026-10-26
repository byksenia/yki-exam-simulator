// Harjoituskoe 10
export default {
  id: "koe10",
  title: "Harjoituskoe 10",
  description: "New baby, city service point, national park, recycling, Migri appointment, wedding, volunteering.",
  sections: [
    // ------------------------------------------------------------------ READING
    {
      id: "reading",
      minutes: 50,
      cutoffs: { level1: 0.4, level2: 0.7 },
      tasks: [
        {
          id: "k10r1",
          title: "Tehtävä 1: Sähköposti ystävältä",
          instructions: {
            fi: "Lue sähköposti ja vastaa kysymyksiin. Valitse oikea vaihtoehto.",
            en: "Read the email and answer the questions. Choose the correct option.",
          },
          text: {
            title: "Aihe: Iso uutinen!",
            body:
              "Hei Sofia!\n\n" +
              "Meillä on iso uutinen: pieni poikamme syntyi viime tiistaina! Hän on pieni mutta terve, vähän alle kolme kiloa. " +
              "Nimeä emme ole vielä päättäneet, joten isoveli Leo kutsuu häntä vain Pikkuveljeksi.\n\n" +
              "Olimme sairaalassa kolme päivää, ja nyt olemme jo kotona. Ensimmäiset yöt ovat olleet raskaita, koska vauva herää monta kertaa. " +
              "Onneksi Jussi on nyt kaksi viikkoa vapaalla töistä. Hän vie Leon aamulla päiväkotiin ja laittaa ruokaa.\n\n" +
              "Jussin vanhemmat tulivat Oulusta auttamaan, mutta he lähtivät jo eilen kotiin. Minun äitini tulee Virosta vasta ensi kuussa, " +
              "koska hän ei saanut lomaa aikaisemmin.\n\n" +
              "Tulisitko katsomaan vauvaa? Viikonloppuisin meillä käy paljon sukulaisia, joten arki-ilta sopisi parhaiten. " +
              "Älä tuo lahjaa, meillä on jo kaikkea! Jos haluat, voit tuoda vaikka pullaa kahvin kanssa.\n\n" +
              "Halauksin\nMaria",
          },
          questions: [
            {
              id: "k10r1q1",
              type: "mc",
              q: "Miksi Maria kirjoittaa Sofialle?",
              options: [
                "Hän kertoo, että perheeseen on tullut uusi lapsi.",
                "Hän kutsuu Sofian vauvan nimijuhlaan.",
                "Hän pyytää Sofiaa hoitamaan Leoa.",
              ],
              answer: 0,
              explain: "The main point is the birth: “pieni poikamme syntyi viime tiistaina”. No name party is mentioned (the name is not even decided), and Leo is taken care of by Jussi.",
            },
            {
              id: "k10r1q2",
              type: "mc",
              q: "Mikä on ollut vaikeaa kotona?",
              options: [
                "Vauva on ollut sairaana.",
                "Perhe on nukkunut huonosti.",
                "Vauva on syönyt liian vähän.",
              ],
              answer: 1,
              explain: "“Ensimmäiset yöt ovat olleet raskaita, koska vauva herää monta kertaa” = poor sleep. The baby is “terve” (healthy).",
            },
            {
              id: "k10r1q3",
              type: "mc",
              q: "Kuka auttaa Mariaa kotona juuri nyt?",
              options: ["Jussin vanhemmat", "Marian äiti", "Jussi"],
              answer: 2,
              explain: "Jussi is off work for two weeks. Jussi's parents already left yesterday, and Maria's mother comes only next month.",
            },
            {
              id: "k10r1q4",
              type: "mc",
              q: "Miksi Marian äiti ei ole vielä tullut?",
              options: [
                "Hän asuu liian kaukana.",
                "Hän ei päässyt töistä aikaisemmin.",
                "Jussin vanhemmat olivat jo apuna.",
              ],
              answer: 1,
              explain: "“hän ei saanut lomaa aikaisemmin” = she could not get time off work earlier.",
            },
            {
              id: "k10r1q5",
              type: "mc",
              q: "Mitä Maria toivoo Sofialta?",
              options: [
                "Että hän tulee käymään viikonloppuna.",
                "Että hän tuo vauvalle lahjan.",
                "Että hän tulee kylään jonakin arkipäivänä.",
              ],
              answer: 2,
              explain: "“arki-ilta sopisi parhaiten” — a weekday evening. Weekends are busy with relatives, and she says “Älä tuo lahjaa”.",
            },
          ],
        },
        {
          id: "k10r2",
          title: "Tehtävä 2: Palvelupisteen tiedote",
          instructions: {
            fi: "Lue tiedote. Ovatko väitteet oikein vai väärin?",
            en: "Read the notice. Are the statements true (oikein) or false (väärin)?",
          },
          text: {
            title: "Kaupungin palvelupiste muuttaa",
            body:
              "Kaupungin palvelupiste muuttaa 1.3. kauppakeskus Kaaren toiseen kerrokseen. Vanha palvelupiste kirjaston alakerrassa " +
              "on viimeisen kerran auki 26.2.\n\n" +
              "Uudessa palvelupisteessä voit edelleen hakea kirjastokortin, ladata matkakorttia ja kysyä neuvoa kaupungin palveluista. " +
              "Kirjastokortin saat ilmaiseksi, kun näytät henkilöllisyystodistuksen. Alle 15-vuotias tarvitsee lisäksi huoltajan allekirjoituksen.\n\n" +
              "Matkakortin voi ladata myös automaatissa, joka on palvelupisteen oven vieressä. Uuden matkakortin saat kuitenkin vain palvelutiskiltä. " +
              "Kortti maksaa 5 euroa.\n\n" +
              "Maahanmuuttoviraston (Migri) asioita palvelupisteessä ei hoideta. Jos tarvitset apua oleskelulupahakemuksen kanssa, " +
              "voit tulla maahanmuuttajien neuvontaan tiistaisin kello 12–16. Neuvontaan ei tarvitse varata aikaa, mutta ota mukaan passi ja kaikki paperit.\n\n" +
              "Aukioloajat: ma–pe 9–17. Heinäkuussa palvelupiste on kiinni.",
          },
          questions: [
            {
              id: "k10r2q1",
              type: "tf",
              q: "Palvelupiste on helmikuun loppuun asti vanhassa paikassa.",
              answer: true,
              explain: "The old point is open for the last time on 26.2. and the new one opens on 1.3. — combine the two dates.",
            },
            {
              id: "k10r2q2",
              type: "tf",
              q: "Kirjastokortista pitää maksaa.",
              answer: false,
              explain: "“Kirjastokortin saat ilmaiseksi” — it is free. Only an ID is needed.",
            },
            {
              id: "k10r2q3",
              type: "tf",
              q: "Uuden matkakortin voi ostaa oven vieressä olevasta automaatista.",
              answer: false,
              explain: "The machine is only for loading. “Uuden matkakortin saat kuitenkin vain palvelutiskiltä.”",
            },
            {
              id: "k10r2q4",
              type: "tf",
              q: "Apua oleskelulupa-asioissa saa vain yhtenä päivänä viikossa.",
              answer: true,
              explain: "The advice service is “tiistaisin kello 12–16” — only on Tuesdays.",
            },
          ],
        },
        {
          id: "k10r3",
          title: "Tehtävä 3: Kansallispuiston verkkosivu",
          instructions: {
            fi: "Lue teksti ja vastaa kysymyksiin suomeksi. Vastaa lyhyesti.",
            en: "Read the text and answer the questions in Finnish. Answer briefly.",
          },
          text: {
            title: "Tervetuloa Koivuharjun kansallispuistoon!",
            body:
              "Kansallispuistoon pääsee kesällä bussilla kaupungin keskustasta. Bussi lähtee rautatieasemalta lauantaisin ja sunnuntaisin " +
              "kello 9.15, ja se palaa puistosta kello 16.30. Arkisin bussia ei ole.\n\n" +
              "Puistossa on kolme merkittyä reittiä: 3, 7 ja 12 kilometriä. Lyhin reitti sopii myös lastenvaunuille. " +
              "Pisimmän reitin varrella on laavu, jossa voi paistaa makkaraa.\n\n" +
              "Jokamiehenoikeudet: Puistossa saa liikkua jalan ja poimia marjoja ja sieniä. Tulta saa tehdä vain merkityillä tulipaikoilla. " +
              "Koiran voi ottaa mukaan, mutta sen pitää aina olla kytkettynä. Telttailla saa vain leirintäalueella, ei muualla puistossa.\n\n" +
              "Puistossa ei ole roska-astioita. Vie siis omat roskasi pois.\n\n" +
              "Luontokeskus on auki toukokuusta syyskuuhun tiistaista sunnuntaihin kello 10–17. Sieltä saat karttoja, ja voit ostaa juotavaa ja pientä syötävää.",
          },
          questions: [
            {
              id: "k10r3q1",
              type: "open",
              q: "Minä päivinä puistoon pääsee bussilla?",
              accept: ["lauantaisin ja sunnuntaisin", "viikonloppuisin", "viikonloppuna", "la ja su", "lauantaina ja sunnuntaina"],
              keyNote: "Saturdays and Sundays (weekends). An answer that includes weekdays is wrong.",
              explain: "“lauantaisin ja sunnuntaisin … Arkisin bussia ei ole.”",
            },
            {
              id: "k10r3q2",
              type: "open",
              q: "Millä reitillä voi grillata makkaraa?",
              accept: ["12 kilometrin reitillä", "pisimmällä reitillä", "12 km", "kahdentoista kilometrin reitillä"],
              keyNote: "The 12 km (longest) route. 3 or 7 km is wrong.",
              explain: "“Pisimmän reitin varrella on laavu, jossa voi paistaa makkaraa.” The longest route is 12 km.",
            },
            {
              id: "k10r3q3",
              type: "open",
              q: "Mitä puistossa ei saa tehdä?",
              hint: "(2 asiaa)",
              accept: [
                "tehdä tulta muualla kuin tulipaikoilla, telttailla muualla kuin leirintäalueella",
                "pitää koiraa vapaana, telttailla missä tahansa",
                "tehdä tulta missä tahansa, päästää koiraa irti",
              ],
              keyNote: "Any two of: make a fire outside the marked fireplaces; camp outside the campsite; let a dog off the leash. Picking berries/mushrooms is allowed, so it does not count.",
              explain: "Fire only at marked places, dog always on a leash, tent only at the campsite.",
            },
            {
              id: "k10r3q4",
              type: "open",
              q: "Miksi kävijän pitää viedä omat roskat pois?",
              accept: ["puistossa ei ole roska-astioita", "siellä ei ole roskiksia", "koska roska-astioita ei ole"],
              keyNote: "Because there are no rubbish bins in the park.",
              explain: "“Puistossa ei ole roska-astioita. Vie siis omat roskasi pois.”",
            },
          ],
        },
        {
          id: "k10r4",
          title: "Tehtävä 4: Lukijan kirje",
          instructions: {
            fi: "Lue lukijan kirje ja vastaa kysymyksiin. Valitse oikea vaihtoehto.",
            en: "Read the reader's letter and answer the questions. Choose the correct option.",
          },
          text: {
            title: "Kierrätys ei toimi meidän talossa",
            body:
              "Asun kerrostalossa, jossa on 40 asuntoa. Viime syksynä taloyhtiö hankki pihalle uudet astiat muoville, lasille ja metallille. " +
              "Ajatus oli hyvä, mutta se ei toiminut. Muoviastia on aina täynnä jo maanantaina, vaikka se tyhjennetään vasta perjantaina. " +
              "Siksi monet laittavat muovin sekajätteeseen.\n\n" +
              "Myös biojätteen kanssa on ongelmia. Kaikki eivät tiedä, mitä astiaan saa laittaa. Viime viikolla löysin sieltä muovipusseja " +
              "ja jopa vanhan kengän!\n\n" +
              "Minusta vika ei ole asukkaissa. Talossa asuu ihmisiä monesta maasta, mutta ohjeet ovat vain suomeksi. Lisäksi ne on kirjoitettu " +
              "niin pienellä, että niitä on vaikea lukea.\n\n" +
              "Ehdotan, että taloyhtiö tekee isot ohjeet, joissa on kuvia, ja tyhjentää muoviastian kaksi kertaa viikossa. " +
              "Silloin kierrättäminen olisi helppoa kaikille.\n\n" +
              "Leena K., Hervanta",
          },
          questions: [
            {
              id: "k10r4q1",
              type: "mc",
              q: "Mikä muovin kierrätyksessä on ongelma?",
              options: [
                "Astia on liian kaukana talosta.",
                "Astia täyttyy nopeammin kuin se tyhjennetään.",
                "Asukkaat eivät halua kierrättää.",
              ],
              answer: 1,
              explain: "“Muoviastia on aina täynnä jo maanantaina, vaikka se tyhjennetään vasta perjantaina.”",
            },
            {
              id: "k10r4q2",
              type: "mc",
              q: "Mitä kirjoittaja kertoo biojäteastiasta?",
              options: [
                "Siellä oli tavaroita, jotka eivät kuulu sinne.",
                "Se oli rikki viime viikolla.",
                "Se tyhjennetään liian harvoin.",
              ],
              answer: 0,
              explain: "She found plastic bags and an old shoe in the bio-waste bin. The emptying problem concerns the plastic bin.",
            },
            {
              id: "k10r4q3",
              type: "mc",
              q: "Kuka on kirjoittajan mielestä syyllinen ongelmiin?",
              options: [
                "Asukkaat, jotka eivät lue ohjeita.",
                "Taloyhtiö, koska ohjeet ovat huonot.",
                "Kaupunki, koska jäteauto käy harvoin.",
              ],
              answer: 1,
              explain: "“Minusta vika ei ole asukkaissa” — the instructions are only in Finnish and in small print, i.e. the housing company's fault.",
            },
            {
              id: "k10r4q4",
              type: "mc",
              q: "Mitä kirjoittaja ehdottaa?",
              options: [
                "Pihalle pitäisi hankkia uusia astioita.",
                "Ohjeiden pitäisi olla selvempiä ja muovia pitäisi viedä useammin.",
                "Kaikille asukkaille pitäisi järjestää kierrätyskurssi.",
              ],
              answer: 1,
              explain: "Big instructions with pictures and emptying the plastic bin twice a week. New bins were already bought last autumn.",
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
          id: "k10w1",
          title: "Tehtävä 1: Viesti joukkoliikenteen asiakaspalveluun",
          instructions: { fi: "Kirjoita viesti. Kirjoita noin 30–60 sanaa.", en: "Write a message of about 30–60 words." },
          prompt:
            "Latasit matkakorttiisi kuukauden lipun viime viikolla ja maksoit siitä 55 euroa. Tänä aamuna kortti ei toiminut bussissa, " +
            "ja kuljettaja sanoi, että kortilla ei ole lippua. Kirjoita viesti joukkoliikenteen asiakaspalveluun.",
          bullets: [
            "Kerro, mitä tapahtui ja milloin.",
            "Kerro, miksi tilanne on sinulle hankala.",
            "Kerro, mitä haluat asiakaspalvelun tekevän.",
            "Muista aloittaa ja lopettaa viesti sopivalla tavalla.",
          ],
          promptEn:
            "Last week you loaded a monthly ticket (55 €) onto your travel card. This morning the card did not work on the bus and the driver said there is no ticket on it. Write to public transport customer service: what happened and when, why this is a problem for you, and what you want them to do.",
          register: "semi-formal complaint to a service: Hei / Hyvä asiakaspalvelu … Ystävällisin terveisin + name",
          minWords: 30,
          maxWords: 60,
        },
        {
          id: "k10w2",
          title: "Tehtävä 2: Viesti ystävälle",
          instructions: { fi: "Kirjoita viesti. Kirjoita noin 30–60 sanaa.", en: "Write a message of about 30–60 words." },
          prompt:
            "Ystäväsi Laura sai vauvan kaksi viikkoa sitten. Et ole vielä käynyt katsomassa vauvaa. Kirjoita Lauralle viesti.",
          bullets: [
            "Onnittele Lauraa.",
            "Kerro, miksi et ole vielä käynyt.",
            "Ehdota, milloin voisit tulla käymään, ja kysy, voitko tuoda jotain.",
            "Muista aloittaa ja lopettaa viesti sopivalla tavalla.",
          ],
          promptEn:
            "Your friend Laura had a baby two weeks ago and you have not visited yet. Write to her: congratulate her, explain why you haven't visited, suggest when you could come, and ask if you can bring something.",
          register: "informal message to a friend: Hei Laura! / Moi! … Halauksin / Terveisin + name",
          minWords: 30,
          maxWords: 60,
        },
        {
          id: "k10w3",
          title: "Tehtävä 3: Mielipide",
          instructions: { fi: "Kirjoita mielipideteksti. Kirjoita noin 30–60 sanaa.", en: "Write an opinion text of about 30–60 words." },
          prompt: "Mitä mieltä olet: pitäisikö kaikkien säästää energiaa kotona? Kirjoita mielipiteesi ja perustele se.",
          bullets: [
            "Miten sinä säästät energiaa kotona?",
            "Kerro, mitä teit viime talvena, kun sähkö oli kallista.",
            "Onko energian säästäminen sinun mielestäsi tärkeää? Miksi?",
            "Mitä muut ihmiset voisivat tehdä?",
          ],
          promptEn:
            "Opinion: should everyone save energy at home? Say how you save energy, what you did last winter when electricity was expensive, whether saving energy is important and why, and what other people could do.",
          register: "neutral opinion text; no greeting needed. Clear opinion + reason (Minun mielestäni … koska …)",
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
          id: "k10l1",
          title: "Tehtävä 1: Viesti Maahanmuuttovirastosta",
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
                "Hei, täällä on Laura Niemi Maahanmuuttoviraston palvelupisteestä. Soitan teidän ajastanne. Teillä on aika meille ensi maanantaina kello kymmenen. " +
                "Teidän pitää käydä antamassa sormenjäljet oleskelulupahakemusta varten. Valitettavasti meidän järjestelmässä oli virhe, " +
                "ja sama aika on varattu kahdelle asiakkaalle. Voisitteko tulla samana päivänä vähän myöhemmin, kello kaksitoista… ei kun anteeksi, kello yksitoista? " +
                "Jos se ei sovi, voitte varata uuden ajan netistä. Ottakaa mukaan passi ja passikuva… ei, passikuvaa ei tarvita, me otamme kuvan täällä. " +
                "Pelkkä passi riittää. Huomatkaa myös, että palvelupiste on muuttanut. Uusi osoite on Hämeenkatu kaksikymmentäkuusi, toinen kerros. Kiitos, kuulemiin.",
            },
          ],
          questions: [
            {
              id: "k10l1q1",
              type: "open",
              q: "Mikä ongelma vanhassa ajassa on?",
              accept: [
                "sama aika on varattu kahdelle asiakkaalle",
                "aika on varattu kaksi kertaa",
                "kahdella asiakkaalla on sama aika",
                "järjestelmässä oli virhe",
              ],
              keyNote: "The same time was booked for two customers (a system error). Answers like 'the office has moved' are wrong.",
              explain: "“meidän järjestelmässä oli virhe, ja sama aika on varattu kahdelle asiakkaalle”.",
            },
            {
              id: "k10l1q2",
              type: "open",
              q: "Mihin aikaan asiakkaan pitäisi nyt tulla?",
              accept: ["kello 11", "klo 11", "kello yksitoista", "maanantaina kello 11", "11"],
              keyNote: "11 o'clock (on Monday). 12 is wrong — the speaker corrects it. 10 is the old time.",
              explain: "“kello kaksitoista… ei kun anteeksi, kello yksitoista”.",
            },
            {
              id: "k10l1q3",
              type: "open",
              q: "Mitä asiakkaan pitää ottaa mukaan?",
              accept: ["passi", "passin", "pelkkä passi", "vain passi"],
              keyNote: "Only the passport. An answer that also includes a passport photo is wrong.",
              explain: "“passikuvaa ei tarvita … Pelkkä passi riittää.”",
            },
          ],
        },
        {
          id: "k10l2",
          title: "Tehtävä 2: Tiedote radiossa",
          instructions: {
            fi: "Kuulet tiedotteen kaksi kertaa. Ovatko väitteet oikein vai väärin?",
            en: "You will hear an announcement twice. Are the statements true or false?",
          },
          situation: "Kuulet paikallisradiosta tiedotteen viikonlopun tapahtumista.",
          plays: 2,
          rate: 0.9,
          lines: [
            {
              speaker: "A",
              text:
                "Ja sitten viikonlopun tapahtumia. Lauantaina kaupunki järjestää sieniretken Lammin metsään. Lähdemme kello kymmenen kirjaston edestä, " +
                "ja metsään mennään yhdessä bussilla. Oppaana on sieniasiantuntija Pirjo Mäkinen. Hän kertoo, mitkä sienet ovat hyviä syötäväksi ja mitkä ovat myrkyllisiä. " +
                "Retki on ilmainen, mutta bussimatka maksaa kolme euroa. Ota mukaan kori tai paperipussi, ei muovipussia, koska sienet menevät siinä huonoiksi. " +
                "Muista myös hyvät kengät. Retkelle mahtuu kolmekymmentä henkeä, joten ilmoittaudu viimeistään torstaina kirjaston infossa tai puhelimella. " +
                "Jos lauantaina sataa kovasti, retki siirtyy sunnuntaille. Sunnuntaina kirjaston pihalla on myös kierrätystori, jossa voi vaihtaa lasten vaatteita ja leluja.",
            },
          ],
          questions: [
            {
              id: "k10l2q1",
              type: "tf",
              q: "Retkelle lähdetään yhdessä kirjaston edestä.",
              answer: true,
              explain: "“Lähdemme kello kymmenen kirjaston edestä, ja metsään mennään yhdessä bussilla.”",
            },
            {
              id: "k10l2q2",
              type: "tf",
              q: "Osallistujan ei tarvitse maksaa mitään.",
              answer: false,
              explain: "The trip is free, but the bus costs three euros.",
            },
            {
              id: "k10l2q3",
              type: "tf",
              q: "Sienet kannattaa kerätä muovipussiin.",
              answer: false,
              explain: "“kori tai paperipussi, ei muovipussia” — mushrooms go bad in plastic.",
            },
            {
              id: "k10l2q4",
              type: "tf",
              q: "Retkelle pitää ilmoittautua etukäteen.",
              answer: true,
              explain: "“ilmoittaudu viimeistään torstaina” — only thirty people fit.",
            },
            {
              id: "k10l2q5",
              type: "tf",
              q: "Jos sää on huono, retkeä ei järjestetä ollenkaan.",
              answer: false,
              explain: "If it rains heavily, the trip moves to Sunday (“siirtyy sunnuntaille”); it is not cancelled.",
            },
          ],
        },
        {
          id: "k10l3",
          title: "Tehtävä 3: Keskustelu häistä",
          instructions: {
            fi: "Kuulet keskustelun kaksi kertaa. Lue ensin kysymykset. Valitse oikea vaihtoehto.",
            en: "You will hear a conversation twice. Read the questions first. Choose the correct option.",
          },
          situation: "Sanna ja Omar puhuvat ystävänsä häistä.",
          plays: 2,
          rate: 0.92,
          lines: [
            { speaker: "Sanna", text: "Moi Omar! Saitko sinäkin kutsun Mikan ja Hannan häihin?" },
            { speaker: "Omar", text: "Sain. Häät ovat elokuun toisena lauantaina, eikö niin?" },
            { speaker: "Sanna", text: "Ei, ne siirtyivät. Hanna kirjoitti eilen, että ne ovat nyt syyskuun ensimmäisenä lauantaina, koska kirkko oli jo varattu." },
            { speaker: "Omar", text: "Ai, hyvä että kerroit. Missä juhla on?" },
            { speaker: "Sanna", text: "Vihkiminen on kirkossa kello kaksi, ja sen jälkeen juhla on Hannan vanhempien mökillä järven rannalla. Sinne on noin puolen tunnin matka." },
            { speaker: "Omar", text: "Minulla ei ole autoa. Miten sinne pääsee?" },
            { speaker: "Sanna", text: "Mennään yhdessä minun autollani. Minä en kuitenkaan voi jäädä mökille yöksi, koska minulla on sunnuntaiaamuna töitä." },
            { speaker: "Omar", text: "Sopii hyvin. Mitä me ostetaan lahjaksi? Voisimme antaa yhteisen lahjan." },
            { speaker: "Sanna", text: "Hyvä idea. Hanna sanoi, että he eivät halua tavaroita, koska heidän asuntonsa on niin pieni. He toivovat rahaa häämatkaa varten." },
            { speaker: "Omar", text: "Okei, laitetaan sitten rahaa korttiin. Entä vaatteet? Pitääkö olla tumma puku?" },
            { speaker: "Sanna", text: "Ei tarvitse. Kutsussa luki, että juhla on rento, koska se on ulkona. Mutta ota lämmin takki, illalla voi olla kylmä." },
          ],
          questions: [
            {
              id: "k10l3q1",
              type: "mc",
              q: "Mitä Sanna kertoo häistä?",
              options: ["Hääpäivä on muuttunut.", "Juhlapaikka on muuttunut.", "Häät on peruttu."],
              answer: 0,
              explain: "The wedding moved from the second Saturday of August to the first Saturday of September. The place is not changed.",
            },
            {
              id: "k10l3q2",
              type: "mc",
              q: "Miten Omar pääsee juhlaan?",
              options: [
                "Hän ajaa sinne omalla autollaan.",
                "Hän menee sinne Sannan kyydillä.",
                "Hän menee mökille jo edellisenä päivänä.",
              ],
              answer: 1,
              explain: "Omar has no car; “Mennään yhdessä minun autollani.”",
            },
            {
              id: "k10l3q3",
              type: "mc",
              q: "Mitä he antavat hääparille?",
              options: ["Jotain uuteen kotiin", "Rahaa matkaa varten", "Kaksi erillistä lahjaa"],
              answer: 1,
              explain: "“He toivovat rahaa häämatkaa varten.” They don't want things because the flat is small; the gift is a shared one.",
            },
            {
              id: "k10l3q4",
              type: "mc",
              q: "Mitä Sanna neuvoo Omaria ottamaan mukaan?",
              options: [
                "Tumman puvun, koska vihkiminen on kirkossa.",
                "Lämpimän takin, koska illalla voi olla kylmä.",
                "Kevyet kesävaatteet, koska juhla on ulkona.",
              ],
              answer: 1,
              explain: "“ota lämmin takki, illalla voi olla kylmä”. A dark suit is not needed.",
            },
          ],
        },
        {
          id: "k10l4",
          title: "Tehtävä 4: Haastattelu",
          instructions: {
            fi: "Kuulet haastattelun kaksi kertaa. Ovatko väitteet oikein vai väärin?",
            en: "You will hear an interview twice. Are the statements true or false?",
          },
          situation: "Radiossa haastatellaan Tatianaa, joka tekee vapaaehtoistyötä Kuopiossa.",
          plays: 2,
          rate: 0.9,
          lines: [
            { speaker: "Toimittaja", text: "Tatiana, kuinka kauan olet tehnyt vapaaehtoistyötä?" },
            {
              speaker: "Tatiana",
              text: "Noin kaksi vuotta. Aloitin heti, kun muutin Kuopioon. Minulla ei ollut vielä työtä, ja halusin tavata ihmisiä ja puhua suomea.",
            },
            { speaker: "Toimittaja", text: "Mitä sinä teet?" },
            {
              speaker: "Tatiana",
              text: "Käyn kerran viikossa vanhan rouvan, Helmin, luona. Hän on yhdeksänkymmentä… ei kun kahdeksankymmentäyhdeksän vuotta vanha. Juomme kahvia, ja joskus menemme yhdessä kävelylle tai kauppaan. Helmi kertoo paljon siitä, millaista Suomessa oli ennen.",
            },
            { speaker: "Toimittaja", text: "Onko se ollut helppoa?" },
            {
              speaker: "Tatiana",
              text: "Alussa se oli vaikeaa, koska Helmi puhuu murretta, enkä ymmärtänyt kaikkea. Nyt ymmärrän paljon paremmin. Helmi on oikeastaan ollut minun paras suomen opettajani!",
            },
            { speaker: "Toimittaja", text: "Saatko työstä palkkaa?" },
            {
              speaker: "Tatiana",
              text: "En saa, se on vapaaehtoista. Mutta sain ilmaisen koulutuksen, ja nyt minulla on paljon uusia ystäviä.",
            },
            { speaker: "Toimittaja", text: "Mitä suunnitelmia sinulla on?" },
            {
              speaker: "Tatiana",
              text: "Syksyllä aloitan lähihoitajan opinnot, koska haluan työskennellä vanhusten kanssa. Minulla on silloin vähemmän aikaa, mutta käyn Helmin luona edelleen.",
            },
          ],
          questions: [
            { id: "k10l4q1", type: "tf", q: "Tatiana aloitti vapaaehtoistyön, koska hän halusi oppia kieltä ja tutustua ihmisiin.", answer: true, explain: "“halusin tavata ihmisiä ja puhua suomea”." },
            { id: "k10l4q2", type: "tf", q: "Helmi on yhdeksänkymmentä vuotta vanha.", answer: false, explain: "She corrects herself: “ei kun kahdeksankymmentäyhdeksän” — 89." },
            { id: "k10l4q3", type: "tf", q: "Tatianan oli alussa vaikea ymmärtää Helmiä.", answer: true, explain: "“Alussa se oli vaikeaa, koska Helmi puhuu murretta”." },
            { id: "k10l4q4", type: "tf", q: "Tatiana saa vapaaehtoistyöstä vähän rahaa.", answer: false, explain: "“En saa, se on vapaaehtoista.” She got free training, not money." },
            { id: "k10l4q5", type: "tf", q: "Tatiana lopettaa Helmin luona käymisen, kun opinnot alkavat.", answer: false, explain: "“Minulla on silloin vähemmän aikaa, mutta käyn Helmin luona edelleen.”" },
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
          id: "k10s0",
          kind: "warm-up",
          title: "Alkukeskustelu",
          instructions: {
            fi: "Haastattelija kysyy sinulta muutaman kysymyksen. Vastaa muutamalla lauseella.",
            en: "The interviewer asks you a few questions. Answer with a few sentences.",
          },
          prepSec: 0,
          card: null,
          items: [
            { id: "a", spoken: "Hei ja tervetuloa! Kerro vähän, mitä teit viime viikonloppuna.", speakSec: 40 },
            { id: "b", spoken: "Missä tilanteissa sinä käytät suomea arjessa? Kerro esimerkki.", speakSec: 35 },
            { id: "c", spoken: "Mitä kaupungin palveluja sinä käytät usein, esimerkiksi kirjastoa tai bussia? Miksi?", speakSec: 40 },
          ],
        },
        {
          id: "k10s1",
          kind: "topic",
          title: "Aihe 1: Perhejuhla",
          instructions: {
            fi: "Sinulla on kaksi minuuttia aikaa valmistautua. Voit kirjoittaa muistiin avainsanoja. Pyri puhumaan aktiivisesti!",
            en: "You have two minutes to prepare. You may jot down key words. Try to speak actively!",
          },
          prepSec: 120,
          card: {
            title: "Kerro perhejuhlasta",
            questions: [
              "Kerro yhdestä perhejuhlasta, jossa olet ollut (esimerkiksi häät, ristiäiset tai syntymäpäivä).",
              "Kenen juhla se oli, ja missä se oli?",
              "Keitä juhlassa oli?",
              "Mitä juhlassa syötiin ja tehtiin?",
              "Millaisia häät ovat sinun kotimaassasi? Entä Suomessa?",
              "Mikä on erilaista, mikä samanlaista?",
              "Millaisen juhlan haluaisit itse järjestää?",
            ],
          },
          items: [
            { id: "a", spoken: "Puhutaan perhejuhlista. Kerro yhdestä juhlasta, jossa olet ollut. Kenen juhla se oli?", speakSec: 60 },
            { id: "b", spoken: "Keitä siellä oli, ja mitä juhlassa tehtiin?", speakSec: 60 },
            { id: "c", spoken: "Mitä siellä syötiin? Oliko ruoka hyvää?", speakSec: 45 },
            { id: "d", spoken: "Millaisia häät ovat sinun kotimaassasi?", speakSec: 60 },
            { id: "e", spoken: "Oletko ollut suomalaisissa juhlissa? Mikä niissä on erilaista kuin sinun kotimaassasi?", speakSec: 60 },
            { id: "f", spoken: "Millaisen juhlan sinä haluaisit itse järjestää? Miksi?", speakSec: 50 },
          ],
        },
        {
          id: "k10s2",
          kind: "opinion",
          title: "Aihe 2: Luonto ja ympäristö",
          instructions: {
            fi: "Sinulla on kaksi minuuttia aikaa valmistautua. Voit kirjoittaa muistiin avainsanoja. Pyri puhumaan aktiivisesti!",
            en: "You have two minutes to prepare. You may jot down key words. Try to speak actively!",
          },
          prepSec: 120,
          card: {
            title: "Luonto ja ympäristö",
            questions: [
              "Kuinka usein liikut luonnossa? Mitä teet siellä?",
              "Oletko kerännyt marjoja tai sieniä? Kerro.",
              "Onko hyvä, että Suomessa kaikki saavat liikkua luonnossa (jokamiehenoikeudet)? Miksi?",
              "Mitä hyvää ja mitä huonoa kierrätyksessä on?",
              "Mitä ihmisten pitäisi tehdä luonnon hyväksi?",
              "Mitä suosittelisit ystävälle, joka tulee Suomeen kesällä?",
            ],
          },
          items: [
            { id: "a", spoken: "Seuraavaksi puhutaan luonnosta. Kuinka usein sinä liikut luonnossa, ja mitä teet siellä?", speakSec: 50 },
            { id: "b", spoken: "Oletko koskaan kerännyt marjoja tai sieniä? Kerro siitä.", speakSec: 50 },
            { id: "c", spoken: "Suomessa kaikki saavat liikkua metsässä ja poimia marjoja. Onko se sinun mielestäsi hyvä asia? Miksi?", speakSec: 60 },
            { id: "d", spoken: "Mitä hyvää ja mitä huonoa kierrätyksessä on? Onko se helppoa?", speakSec: 60 },
            { id: "e", spoken: "Mitä ihmisten pitäisi tehdä, että luonto voisi paremmin?", speakSec: 50 },
            { id: "f", spoken: "Ystäväsi tulee Suomeen ensi kesänä. Mitä suosittelisit hänelle? Miksi?", speakSec: 50 },
          ],
        },
        {
          id: "k10s3",
          kind: "roleplay",
          title: "Aihe 3: Kirjastossa",
          instructions: {
            fi: "Sinulla on kaksi minuuttia aikaa valmistautua. Haastattelija on kirjaston työntekijä ja sinä olet asiakas. Pyri puhumaan aktiivisesti!",
            en: "You have two minutes to prepare. The interviewer is a library worker and you are a customer. Try to speak actively!",
          },
          prepSec: 120,
          card: {
            title:
              "Sait kirjastosta laskun. Siinä lukee, että et ole palauttanut kirjaa ja sinun pitää maksaa 25 euroa. Palautit kirjan kuitenkin kaksi viikkoa sitten palautusautomaattiin. Menet kirjastoon. Haastattelija on kirjaston työntekijä.",
            questions: [
              "Tervehdi ja kerro, miksi tulit.",
              "Selitä, milloin ja miten palautit kirjan.",
              "Vastaa työntekijän kysymyksiin.",
              "Ehdota, miten asia voidaan ratkaista.",
              "Kerro, miten kirjasto voi ottaa sinuun yhteyttä.",
              "Kiitä ja hyvästele.",
            ],
          },
          items: [
            { id: "a", spoken: "Hei! Miten voin auttaa?", speakSec: 45 },
            { id: "b", spoken: "Ahaa. Meidän järjestelmän mukaan kirja on vielä teillä lainassa. Milloin ja missä palautitte sen?", speakSec: 50 },
            { id: "c", spoken: "Saitteko automaatista kuitin, kun palautitte kirjan?", speakSec: 45 },
            { id: "d", spoken: "Katsoin juuri, eikä kirjaa ole hyllyssä. Mitä te ehdotatte? Voisitteko vielä katsoa kotona?", speakSec: 55 },
            { id: "e", spoken: "Selvä. Voin laittaa laskun odottamaan kahdeksi viikoksi, ja me etsimme kirjaa täällä. Sopiiko se teille?", speakSec: 45 },
            { id: "f", spoken: "Hyvä. Miten otamme teihin yhteyttä, kun tiedämme lisää? Puhelimella vai sähköpostilla?", speakSec: 45 },
          ],
        },
      ],
    },
  ],
};
