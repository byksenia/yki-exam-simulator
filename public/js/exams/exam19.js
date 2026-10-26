// Keskitaso 9
export default {
  id: "koe19",
  title: "Keskitaso 9",
  level: "keskitaso",
  description: "Integration and language courses, municipal services, voting and civic participation, neighbourhood associations, emergency preparedness, news and media literacy.",
  sections: [
    // ------------------------------------------------------------------ READING
    {
      id: "reading",
      minutes: 60,
      cutoffs: { level1: 0.5, level2: 0.75 },
      ohje:
        "Tässä osakokeessa luet erilaisia tekstejä, esimerkiksi uutisen, kolumnin, mielipidekirjoituksen, opastavan artikkelin, tiedotteen ja ohjeen. Osakokeessa on kuusi tehtävää. Tehtävissä on monivalintakysymyksiä, oikein–väärin-väitteitä ja avoimia kysymyksiä. Vastaa avoimiin kysymyksiin suomeksi ja lyhyesti, omin sanoin. Kaikkia sanoja ei tarvitse ymmärtää, jotta voi vastata oikein. Sanakirjaa ei saa käyttää.",
      tasks: [
        {
          id: "k19r1",
          title: "Tehtävä 1: Uutinen",
          instructions: {
            fi: "Lue uutinen ja vastaa kysymyksiin. Valitse oikea vaihtoehto.",
            en: "Read the news item and answer the questions. Choose the correct option.",
          },
          text: {
            title: "Asukkaat saavat päättää puolen miljoonan euron käytöstä",
            body:
              "Lahdenkosken kaupunki ottaa käyttöön osallistuvan budjetoinnin. Ensi vuonna asukkaat saavat itse päättää, mihin käytetään 500 000 euroa kaupungin rahoja. " +
              "Summa jaetaan viidelle alueelle asukasmäärän mukaan.\n\n" +
              "Ehdotuksia voi jättää helmikuun loppuun mennessä verkossa tai kirjastoissa olevilla lomakkeilla. Ehdotuksen voi tehdä kuka tahansa kaupungissa asuva tai " +
              "työskentelevä, mutta äänestää saavat vain kaupungin asukkaat, jotka ovat täyttäneet 12 vuotta. Ennen äänestystä kaupungin asiantuntijat arvioivat, " +
              "voiko ehdotuksen toteuttaa ja paljonko se maksaisi. Äänestys järjestetään toukokuussa.\n\n" +
              "Hankkeen vetäjä Saara Nieminen kertoo, että tavoitteena on saada mukaan myös niitä, jotka eivät yleensä äänestä vaaleissa. ”Kuntavaaleissa äänestysprosentti " +
              "jää joillakin alueilla alle neljänkymmenen. Toivomme, että kun ihminen näkee oman ehdotuksensa toteutuvan, kiinnostus yhteisiin asioihin kasvaa”, Nieminen sanoo. " +
              "Ehdotuksia voi jättää myös englanniksi, venäjäksi ja arabiaksi.\n\n" +
              "Kaikki valtuustoryhmät eivät ole innostuneita. Valtuutettu Kari Heikkilä huomauttaa, että vastaavissa kokeiluissa muissa kaupungeissa on äänestänyt vain " +
              "muutama prosentti asukkaista. ”Silloin päätökset tekevät ne, jotka ovat jo valmiiksi aktiivisia. Se ei ole kovin demokraattista”, hän sanoo. " +
              "Heikkilä ei kuitenkaan vastusta kokeilua, vaan toivoo, että äänestyksestä kerrotaan erityisesti kouluissa ja asukastaloissa.",
          },
          questions: [
            {
              id: "k19r1q1",
              type: "mc",
              q: "Kuka saa äänestää ehdotuksista?",
              options: [
                "kaikki kaupungissa asuvat tai työskentelevät",
                "kaikki vähintään 12-vuotiaat kaupungin asukkaat",
                "kaupungin asukkaat, joilla on äänioikeus kuntavaaleissa",
              ],
              answer: 1,
              explain:
                "“äänestää saavat vain kaupungin asukkaat, jotka ovat täyttäneet 12 vuotta.” People who only work in the city may make proposals but not vote.",
            },
            {
              id: "k19r1q2",
              type: "mc",
              q: "Mitä ehdotuksille tapahtuu ennen äänestystä?",
              options: [
                "Kaupunginvaltuusto valitsee niistä parhaat.",
                "Ne käännetään kaupungin verkkosivuille eri kielille.",
                "Asiantuntijat selvittävät, voiko ne toteuttaa ja mitä ne maksaisivat.",
              ],
              answer: 2,
              explain: "“Ennen äänestystä kaupungin asiantuntijat arvioivat, voiko ehdotuksen toteuttaa ja paljonko se maksaisi.”",
            },
            {
              id: "k19r1q3",
              type: "mc",
              q: "Mitä Saara Nieminen toivoo?",
              options: [
                "että myös vaaleissa yleensä äänestämättä jättävät asukkaat innostuisivat vaikuttamaan",
                "että ehdotuksia tulisi tasaisesti kaikilta viideltä alueelta",
                "että asukkaat tekisivät ehdotuksia myös muilla kielillä kuin suomeksi",
              ],
              answer: 0,
              explain:
                "The aim is to reach those “jotka eivät yleensä äänestä vaaleissa” so that “kiinnostus yhteisiin asioihin kasvaa”. Other languages are allowed, but that is a means, not her hope.",
            },
            {
              id: "k19r1q4",
              type: "mc",
              q: "Mikä on Kari Heikkilän kanta kokeiluun?",
              options: [
                "Hän vastustaa kokeilua, koska se ei ole demokraattinen.",
                "Hän hyväksyy kokeilun, mutta haluaa, että siitä tiedotetaan laajemmin.",
                "Hän pitää kokeilua hyvänä, koska se on onnistunut muissa kaupungeissa.",
              ],
              answer: 1,
              explain:
                "“Heikkilä ei kuitenkaan vastusta kokeilua, vaan toivoo, että äänestyksestä kerrotaan erityisesti kouluissa ja asukastaloissa.” Turnout elsewhere was only a few per cent.",
            },
          ],
        },
        {
          id: "k19r2",
          title: "Tehtävä 2: Opastava artikkeli",
          instructions: {
            fi: "Lue artikkeli. Ovatko väitteet oikein vai väärin?",
            en: "Read the article. Are the statements true (oikein) or false (väärin)?",
          },
          text: {
            title: "Kotivara auttaa selviämään häiriötilanteesta – näin varaudut",
            body:
              "Pitkä sähkökatko, vesijohtoveden saastuminen tai kova myrsky voi pysäyttää arjen yllättäen. Tällaiset tilanteet ovat Suomessa harvinaisia, mutta niitä sattuu joka vuosi jossain päin maata. Viranomaisten mukaan jokaisen kotitalouden pitäisi pystyä " +
              "selviämään omin varoin vähintään 72 tuntia eli kolme vuorokautta. Silloin apu voidaan ohjata ensin niille, jotka eivät pärjää itse, kuten iäkkäille ja sairaille.\n\n" +
              "Kotivaralla tarkoitetaan ruokaa, juomavettä, lääkkeitä ja muita tarvikkeita, joiden avulla pärjää muutaman päivän käymättä kaupassa. Kotivaraa ei tarvitse " +
              "ostaa kerralla, eikä siihen tarvitse hankkia erikoistuotteita. Tavallinen ruokakomero riittää, kunhan siellä on tavallista enemmän säilykkeitä, kuivatuotteita " +
              "ja muita pitkään säilyviä elintarvikkeita. Varautumisen asiantuntija Laura Virta neuvoo käyttämään varastoa normaalisti ja ostamaan aina uuden tilalle. " +
              "”Kun vanhimmat tuotteet syödään ensin, mikään ei ehdi vanhentua”, Virta sanoo.\n\n" +
              "Juomiseen ja ruoanlaittoon tarvitaan vettä noin kuusi litraa henkeä kohden vuorokaudessa. Vettä ei tarvitse säilöä pulloihin valmiiksi, mutta kotona pitäisi " +
              "olla puhtaita kannellisia astioita, joilla vettä voi hakea esimerkiksi vedenjakelupisteestä. Jos vesijohtovesi saastuu, siitä tiedotetaan, ja vesi on " +
              "keitettävä ennen kuin sitä käytetään juomiseen tai ruoanlaittoon.\n\n" +
              "Sähkökatkon aikana moni laite lakkaa toimimasta. Puhelimen akku tyhjenee nopeasti, ja jos katko kestää pitkään, myös matkapuhelinverkko voi lakata toimimasta. " +
              "Tärkein tiedonlähde on silloin paristoilla toimiva radio. Kotona on hyvä olla myös taskulamppu, varaparistoja ja ladattu varavirtalähde. Kynttilöitä " +
              "käyttäessä on muistettava, että ne aiheuttavat joka vuosi tulipaloja.\n\n" +
              "Säännöllisesti käytettäviä lääkkeitä kannattaa pitää kotona aina vähintään viikon tarve, ja reseptit kannattaa uusia hyvissä ajoin eikä vasta viime hetkellä. Lisäksi asiantuntijat suosittelevat pitämään kotona hieman käteistä " +
              "rahaa, koska kortilla ei voi maksaa, jos kauppojen kassajärjestelmät ovat poissa käytöstä. Tärkeät puhelinnumerot ja asiakirjojen kopiot on hyvä säilyttää " +
              "myös paperilla, sillä sähköiset palvelut eivät välttämättä toimi. Viranomaiset tiedottavat häiriöistä radiossa, televisiossa ja verkossa, ja vakavassa " +
              "vaaratilanteessa kuuluu yleinen vaaramerkki.\n\n" +
              "Erityisen tärkeää varautuminen on lapsiperheille ja lemmikkien omistajille. Vauvanruokaa, vaippoja tai lemmikin ruokaa ei välttämättä saa, jos kaupat ovat " +
              "kiinni. Myös kodin ulkopuolelle kannattaa varautua: autossa on hyvä pitää lämpimiä vaatteita ja vettä, koska talvella tie voi olla tukossa tuntikausia.\n\n" +
              "Virran mukaan varautumisessa ei ole kyse pelosta vaan vastuullisuudesta. ”Kun kotitaloudet selviävät itse, apu ehtii nopeammin niille, jotka sitä eniten " +
              "tarvitsevat”, hän sanoo. Hän kehottaa myös tutustumaan naapureihin: häiriötilanteessa lähin apu on usein samassa rapussa.",
          },
          questions: [
            {
              id: "k19r2q1",
              type: "tf",
              q: "Viranomaisten mukaan kotitalouksien pitäisi pärjätä omillaan vähintään kolme vuorokautta.",
              answer: true,
              explain: "“vähintään 72 tuntia eli kolme vuorokautta.”",
            },
            {
              id: "k19r2q2",
              type: "tf",
              q: "Kotivaraa varten kannattaa hankkia erityisiä pitkään säilyviä hätävaratuotteita.",
              answer: false,
              explain: "“eikä siihen tarvitse hankkia erikoistuotteita. Tavallinen ruokakomero riittää.”",
            },
            {
              id: "k19r2q3",
              type: "tf",
              q: "Kotivaran tuotteita voi käyttää tavallisessa arjessa, kunhan tilalle ostetaan uusia.",
              answer: true,
              explain: "Virta advises “käyttämään varastoa normaalisti ja ostamaan aina uuden tilalle”.",
            },
            {
              id: "k19r2q4",
              type: "tf",
              q: "Kotona pitäisi aina olla useita litroja pullotettua vettä jokaista asukasta kohden.",
              answer: false,
              explain: "“Vettä ei tarvitse säilöä pulloihin valmiiksi” — clean containers with lids are enough.",
            },
            {
              id: "k19r2q5",
              type: "tf",
              q: "Pitkän sähkökatkon aikana kännykkään ei välttämättä voi luottaa tiedonlähteenä.",
              answer: true,
              explain: "The battery empties fast and the mobile network may stop working; “Tärkein tiedonlähde on silloin paristoilla toimiva radio.”",
            },
            {
              id: "k19r2q6",
              type: "tf",
              q: "Käteistä suositellaan, koska korttimaksu ei välttämättä onnistu häiriötilanteessa.",
              answer: true,
              explain: "“kortilla ei voi maksaa, jos kauppojen kassajärjestelmät ovat poissa käytöstä.”",
            },
            {
              id: "k19r2q7",
              type: "tf",
              q: "Laura Virran mukaan ihmiset varautuvat, koska he pelkäävät kriisejä aiempaa enemmän.",
              answer: false,
              explain: "“varautumisessa ei ole kyse pelosta vaan vastuullisuudesta.”",
            },
          ],
        },
        {
          id: "k19r3",
          title: "Tehtävä 3: Tiedote",
          instructions: {
            fi: "Lue tiedote ja vastaa kysymyksiin suomeksi. Vastaa lyhyesti.",
            en: "Read the notice and answer the questions in Finnish. Answer briefly.",
          },
          text: {
            title: "Maahanmuuttajapalvelut tiedottaa: suomen kielen kurssit alkavat syyskuussa",
            body:
              "Kaupunki järjestää syksyllä suomen kielen kursseja aikuisille maahanmuuttajille. Kurssit on tarkoitettu kaupungissa asuville, joiden kotikunta on täällä. " +
              "Kursseja on kolmella tasolla: alkeet, perustaso ja jatkotaso. Opetusta on neljänä päivänä viikossa joko aamupäivisin tai iltaisin.\n\n" +
              "Ennen kurssin alkua jokainen hakija osallistuu lähtötasotestiin, jossa selvitetään suomen kielen taito ja opiskeluvalmiudet. Testi kestää noin kaksi tuntia. " +
              "Testiajan voi varata maahanmuuttajapalveluista puhelimitse tai paikan päällä. Ota testiin mukaan henkilöllisyystodistus ja oleskelulupakortti.\n\n" +
              "Jos olet työtön työnhakija, ilmoittaudu ensin työllisyyspalveluihin. Kurssi voidaan silloin merkitä osaksi kotoutumissuunnitelmaasi, jolloin voit saada " +
              "opiskelun ajalta työttömyysetuutta. Työssäkäyville sopivat parhaiten iltaryhmät.\n\n" +
              "Aamupäiväryhmien opiskelijoiden alle kouluikäisille lapsille järjestetään maksuton lastenhoito samassa rakennuksessa. Hoitopaikka on varattava samalla, " +
              "kun varaat testiajan, sillä paikkoja on rajoitetusti. Iltaryhmille lastenhoitoa ei ole.\n\n" +
              "Kurssin alussa jokainen opiskelija laatii opettajan kanssa henkilökohtaisen opiskelusuunnitelman. Poissaoloista on ilmoitettava opettajalle, sillä toistuvat " +
              "selvittämättömät poissaolot voivat johtaa kurssipaikan menettämiseen.\n\n" +
              "Kurssit ovat opiskelijoille maksuttomia. Oppikirjat opiskelija hankkii itse, mutta niitä voi myös lainata kirjastosta.",
          },
          questions: [
            {
              id: "k19r3q1",
              type: "open",
              q: "Mitä hakijan on otettava mukaan lähtötasotestiin?",
              hint: "(2 asiaa)",
              accept: [
                "henkilöllisyystodistus ja oleskelulupakortti",
                "henkilökortti tai passi ja oleskelulupa",
                "henkkarit ja oleskelulupakortti",
              ],
              keyNote: "Both: an identity document AND the residence permit card.",
              explain: "“Ota testiin mukaan henkilöllisyystodistus ja oleskelulupakortti.”",
            },
            {
              id: "k19r3q2",
              type: "open",
              q: "Miksi työttömän työnhakijan kannattaa ilmoittautua ensin työllisyyspalveluihin?",
              accept: [
                "koska kurssi voidaan merkitä kotoutumissuunnitelmaan ja hän voi saada työttömyysetuutta",
                "jotta hän saa opiskelun ajalta työttömyysetuutta",
                "silloin voi saada rahaa opiskelun ajalta",
              ],
              keyNote: "So that the course can be part of the integration plan and he/she can receive unemployment benefit while studying. The benefit is the key point.",
              explain: "“Kurssi voidaan silloin merkitä osaksi kotoutumissuunnitelmaasi, jolloin voit saada opiskelun ajalta työttömyysetuutta.”",
            },
            {
              id: "k19r3q3",
              type: "open",
              q: "Mitä pienen lapsen vanhemman on tehtävä, jos hän tarvitsee lastenhoitoa kurssin ajaksi?",
              accept: [
                "hakeutua aamupäiväryhmään ja varata hoitopaikka samalla kun varaa testiajan",
                "varata lastenhoito samaan aikaan kuin testiaika",
                "valita aamupäiväryhmä ja varata hoito ajoissa",
              ],
              keyNote: "Reserve the childcare place at the same time as booking the placement test (places are limited); childcare exists only for morning groups.",
              explain: "“Hoitopaikka on varattava samalla, kun varaat testiajan … Iltaryhmille lastenhoitoa ei ole.”",
            },
            {
              id: "k19r3q4",
              type: "open",
              q: "Mistä opiskelija joutuu maksamaan itse?",
              accept: ["oppikirjoista", "kirjoista", "oppikirjat, jos ei lainaa niitä kirjastosta"],
              keyNote: "The textbooks (unless borrowed from the library). The course itself is free.",
              explain: "“Kurssit ovat opiskelijoille maksuttomia. Oppikirjat opiskelija hankkii itse.”",
            },
          ],
        },
        {
          id: "k19r4",
          title: "Tehtävä 4: Kolumni",
          instructions: {
            fi: "Lue kolumni ja vastaa kysymyksiin. Valitse oikea vaihtoehto.",
            en: "Read the column and answer the questions. Choose the correct option.",
          },
          text: {
            title: "Uutisten välttelijän tunnustus – Markus Lehtonen",
            body:
              "Kaksi vuotta sitten poistin puhelimestani kaikki uutissovellukset. Syy oli yksinkertainen: aamuni alkoivat sodilla, onnettomuuksilla ja hintojen nousulla, " +
              "ja kun lähdin töihin, olin jo valmiiksi väsynyt. Ajattelin, että jos jotain todella tärkeää tapahtuu, kuulen siitä kyllä muutenkin.\n\n" +
              "Kuulinkin. Työkaverit kertoivat kahvipöydässä, mitä oli tapahtunut, ja sosiaalisen median syötteeseeni tuli otsikoita, vaikka en niitä etsinyt. Vähitellen " +
              "huomasin kuitenkin, että tietoni maailmasta koostui palasista, joita en osannut arvioida. En tiennyt, kuka jutun oli kirjoittanut, mihin se perustui tai oliko " +
              "se edes totta. Kerran jaoin ystävilleni uutisen, joka paljastui vuosia vanhaksi. Nolotti. Kukaan ei siitä suuttunut, mutta minua jäi vaivaamaan, " +
              "kuinka monta kertaa olin uskonut vastaavaan huomaamattani.\n\n" +
              "Tutkijoiden mukaan uutisten välttely on yleistynyt. Moni kokee uutiset ahdistaviksi tai uskoo, ettei niillä ole merkitystä omalle elämälle. Ymmärrän tämän " +
              "hyvin. Ongelma on vain siinä, että kun luotettavat uutiset jäävät pois, tilalle ei tule hiljaisuutta. Tilalle tulee jotain muuta: huhuja, mainoksia ja tekstejä, " +
              "joiden tarkoitus on herättää tunteita eikä kertoa, mitä on tapahtunut. Sosiaalisen median palvelut näyttävät meille sitä, mikä pitää meidät ruudun ääressä, " +
              "eivät sitä, mikä on tärkeää. Algoritmia ei kiinnosta, onko jokin totta, vaan se, klikkaammeko sitä.\n\n" +
              "Viime syksynä päätin kokeilla uutta tapaa. Tilasin yhden sanomalehden digiversion ja luen sitä kerran päivässä, aamukahvin jälkeen, korkeintaan puoli tuntia. Tilaus maksaa kuukaudessa suunnilleen saman verran kuin pari lounasta, ja pidän sitä hyvänä sijoituksena. " +
              "En lue kommenttipalstoja enkä avaa jokaista otsikkoa. Kun näen sosiaalisessa mediassa kohua herättävän väitteen, yritän tarkistaa sen ennen kuin uskon siihen: " +
              "kuka sen esittää, mistä tieto on peräisin ja kertovatko muutkin tiedotusvälineet samaa. Usein jo pelkkä päivämäärän katsominen riittää paljastamaan, " +
              "että kyse on vanhasta asiasta.\n\n" +
              "Tulos on yllättänyt minut. Olen vähemmän ahdistunut kuin silloin, kun selasin uutisia pitkin päivää, mutta en ole enää pihalla siitä, mitä ympärilläni tapahtuu. " +
              "Ehkä vika ei ollutkaan uutisissa, vaan tavassa, jolla niitä kulutin. Huomaan myös, että keskustelen nykyään yhteiskunnallisista asioista mieluummin kuin " +
              "ennen, koska tiedän, mistä puhun.\n\n" +
              "Kouluissa opetetaan nykyään medialukutaitoa, ja hyvä niin. Meidän aikuisten pitäisi kuitenkin muistaa, ettei lähdekritiikki ole taito, joka opitaan kerran " +
              "ja joka sitten pysyy. Se on tapa, jota pitää harjoitella joka päivä – ja josta on helppo luopua huomaamattaan. Lapset oppivat sen meistä enemmän kuin oppitunneilta.",
          },
          questions: [
            {
              id: "k19r4q1",
              type: "mc",
              q: "Miksi kirjoittaja lopetti uutisten seuraamisen?",
              options: [
                "Uutiset tekivät hänen aamuistaan raskaita.",
                "Hän ei luottanut uutisten paikkansapitävyyteen.",
                "Hänellä ei ollut aamuisin aikaa lukea uutisia.",
              ],
              answer: 0,
              explain: "Mornings started with wars and accidents, “ja kun lähdin töihin, olin jo valmiiksi väsynyt”. Doubts about reliability came only later.",
            },
            {
              id: "k19r4q2",
              type: "mc",
              q: "Mitä kirjoittaja huomasi uutisten välttelyn aikana?",
              options: [
                "Hän ei saanut enää lainkaan tietoa tapahtumista.",
                "Hän sai tietoa, mutta ei osannut arvioida, oliko se luotettavaa.",
                "Hän oli paremmin perillä asioista kuin ennen.",
              ],
              answer: 1,
              explain: "He still heard news (“Kuulinkin”), but his knowledge consisted of pieces “joita en osannut arvioida”.",
            },
            {
              id: "k19r4q3",
              type: "mc",
              q: "Miksi kirjoittaja kertoo jakamastaan vanhasta uutisesta?",
              options: [
                "osoittaakseen, että hänen ystävänsä levittävät paljon väärää tietoa",
                "todistaakseen, että sanomalehdet julkaisevat vanhoja juttuja",
                "esimerkkinä siitä, mihin hajanainen ja tarkistamaton tieto voi johtaa",
              ],
              answer: 2,
              explain: "It illustrates the previous point: he could not judge who wrote a story or whether it was true — so he shared an old one himself. It was he, not his friends, who shared it.",
            },
            {
              id: "k19r4q4",
              type: "mc",
              q: "Mitä kirjoittaja tarkoittaa sanoessaan, ettei tilalle tule hiljaisuutta?",
              options: [
                "Ihmiset puhuvat uutisista joka tapauksessa työpaikoilla.",
                "Luotettavien uutisten paikan täyttää muu, usein tunteisiin vetoava sisältö.",
                "Sosiaalinen media kertoo samat asiat kuin uutiset, mutta nopeammin.",
              ],
              answer: 1,
              explain: "“Tilalle tulee jotain muuta: huhuja, mainoksia ja tekstejä, joiden tarkoitus on herättää tunteita.”",
            },
            {
              id: "k19r4q5",
              type: "mc",
              q: "Mikä kuvaa kirjoittajan nykyistä tapaa seurata uutisia?",
              options: [
                "Hän lukee yhtä lehteä rajatun ajan päivässä ja tarkistaa somessa näkemiään väitteitä.",
                "Hän lukee lehteä useita kertoja päivässä mutta ei enää käytä sosiaalista mediaa.",
                "Hän lukee lehdestä vain otsikot ja kommenttipalstan.",
              ],
              answer: 0,
              explain: "Once a day, “korkeintaan puoli tuntia”, and he checks social-media claims before believing them. He does not read the comments.",
            },
            {
              id: "k19r4q6",
              type: "mc",
              q: "Mikä on kolumnin pääajatus?",
              options: [
                "Uutisia ei kannata seurata, koska ne lisäävät ahdistusta.",
                "Medialukutaidon opettaminen kuuluu ennen kaikkea kouluille.",
                "Harkittu ja kriittinen uutisten seuraaminen on parempi kuin niiden välttely.",
              ],
              answer: 2,
              explain:
                "“Ehkä vika ei ollutkaan uutisissa, vaan tavassa, jolla niitä kulutin.” He ends by saying adults too must practise source criticism daily.",
            },
          ],
        },
        {
          id: "k19r5",
          title: "Tehtävä 5: Mielipidekirjoitus",
          instructions: {
            fi: "Lue mielipidekirjoitus. Ovatko väitteet oikein vai väärin?",
            en: "Read the letter to the editor. Are the statements true (oikein) or false (väärin)?",
          },
          text: {
            title: "Kaupunginosayhdistys tarvitsee uusia kasvoja",
            body:
              "Olen ollut Mäntylän kaupunginosayhdistyksen hallituksessa kahdeksan vuotta, joista viisi viimeistä puheenjohtajana. Yhdistys järjestää alueella kirpputoreja, " +
              "siivoustalkoita ja joulumyyjäiset, ja se on saanut kaupungilta rahaa leikkipuiston kunnostamiseen. Viime vuonna alueelle saatiin yhdistyksen aloitteesta " +
              "myös uusi bussipysäkki.\n\n" +
              "Toimintamme on kuitenkin vaarassa. Hallituksen seitsemästä jäsenestä kuusi on yli 65-vuotiaita, ja ensi keväänä heistä kolme jättää tehtävänsä. Uusia " +
              "ehdokkaita ei ole ilmoittautunut yhtäkään. Alueelle on viime vuosina muuttanut paljon lapsiperheitä ja maahanmuuttajia, mutta he eivät ole löytäneet " +
              "tietään yhdistykseen. Se ei ole heidän vikansa. Olemme kertoneet toiminnastamme lähinnä porraskäytävien ilmoitustauluilla ja paikallislehdessä, joita moni nuori " +
              "ei lue.\n\n" +
              "Ymmärrän myös, ettei kaikilla ole aikaa sitoutua hallitustyöhön vuosiksi. Siksi ehdotan, että yhdistys kokeilisi uutta mallia: hallituksen lisäksi " +
              "perustettaisiin pieniä työryhmiä, joihin voi osallistua vaikka vain yhden tapahtuman ajan. Joku voisi järjestää kevään kirpputorin, toinen auttaa " +
              "sosiaalisen median kanavien kanssa.\n\n" +
              "Kutsun kaikki alueen asukkaat yhdistyksen avoimeen iltaan asukastalolle 12. maaliskuuta. Tarjolla on kahvia ja pullaa, eikä tilaisuus sido mihinkään. " +
              "Jos haluat vaikuttaa siihen, millainen Mäntylä on tulevaisuudessa, tule kertomaan ajatuksistasi.\n\n" +
              "Raija Kemppainen, Mäntylän kaupunginosayhdistyksen puheenjohtaja",
          },
          questions: [
            {
              id: "k19r5q1",
              type: "tf",
              q: "Yhdistys on onnistunut parantamaan alueen palveluja.",
              answer: true,
              explain: "It got money to renovate the playground and “alueelle saatiin yhdistyksen aloitteesta myös uusi bussipysäkki”.",
            },
            {
              id: "k19r5q2",
              type: "tf",
              q: "Ensi keväänä hallituksesta jää pois kuusi jäsentä.",
              answer: false,
              explain: "Six members are over 65, but “ensi keväänä heistä kolme jättää tehtävänsä”.",
            },
            {
              id: "k19r5q3",
              type: "tf",
              q: "Kirjoittajan mielestä uudet asukkaat eivät ole kiinnostuneita yhteisistä asioista.",
              answer: false,
              explain: "“Se ei ole heidän vikansa” — the association has advertised in the wrong channels.",
            },
            {
              id: "k19r5q4",
              type: "tf",
              q: "Kirjoittaja arvelee, että yhdistys ei ole tavoittanut nuoria, koska se on tiedottanut kanavissa, joita he eivät seuraa.",
              answer: true,
              explain: "Notice boards and the local paper, “joita moni nuori ei lue”.",
            },
            {
              id: "k19r5q5",
              type: "tf",
              q: "Kirjoittajan ehdotuksen mukaan toimintaan voisi osallistua myös lyhyen aikaa.",
              answer: true,
              explain: "Small working groups “joihin voi osallistua vaikka vain yhden tapahtuman ajan”.",
            },
            {
              id: "k19r5q6",
              type: "tf",
              q: "Avoimeen iltaan tulevien on liityttävä yhdistyksen jäseniksi.",
              answer: false,
              explain: "“eikä tilaisuus sido mihinkään.”",
            },
          ],
        },
        {
          id: "k19r6",
          title: "Tehtävä 6: Ohje",
          instructions: {
            fi: "Lue ohje ja vastaa kysymyksiin suomeksi. Vastaa lyhyesti.",
            en: "Read the instructions and answer the questions in Finnish. Answer briefly.",
          },
          text: {
            title: "Ennakkoäänestys – näin äänestät ennen vaalipäivää",
            body:
              "Jos et pääse äänestämään vaalipäivänä, voit äänestää ennakkoon. Kotimaassa ennakkoäänestys alkaa 11 päivää ennen vaalipäivää ja päättyy viisi päivää ennen sitä. " +
              "Ulkomailla ennakkoäänestys päättyy aiemmin, ja ulkomailla asuvat voivat äänestää myös kirjeitse.\n\n" +
              "Ennakkoon voit äänestää missä tahansa yleisessä ennakkoäänestyspaikassa Suomessa, esimerkiksi kirjastossa tai kauppakeskuksessa. Äänestyspaikkojen aukioloajat löytyvät vaalien verkkosivuilta. Vaalipäivänä taas voit " +
              "äänestää vain siinä äänestyspaikassa, joka on merkitty saamaasi ilmoituskorttiin.\n\n" +
              "Ota mukaan henkilöllisyystodistus, esimerkiksi henkilökortti, passi tai ajokortti. Kela-kortti ei kelpaa henkilöllisyystodistukseksi. Ilmoituskorttia ei " +
              "tarvitse ottaa mukaan, mutta se nopeuttaa asiointia.\n\n" +
              "Äänestyspaikalla saat äänestyslipun, johon kirjoitat ehdokkaan numeron. Taita lippu niin, ettei numero näy, ja anna se vaalivirkailijalle leimattavaksi. Vaalivirkailijat auttavat tarvittaessa, ja mukaan voi ottaa myös oman avustajan. " +
              "Lippuun ei saa kirjoittaa mitään muuta kuin ehdokkaan numeron, sillä muuten ääni hylätään.\n\n" +
              "Jos et sairauden tai vamman vuoksi pääse äänestyspaikalle lainkaan, voit äänestää kotona. Kotiäänestykseen on ilmoittauduttava kunnan keskusvaalilautakunnalle " +
              "viimeistään 13 päivää ennen vaalipäivää. Omaishoitaja voi äänestää samalla kertaa kotona, jos hän asuu samassa taloudessa.",
          },
          questions: [
            {
              id: "k19r6q1",
              type: "open",
              q: "Mikä etu ennakkoäänestyksessä on äänestyspaikan valinnan kannalta?",
              accept: [
                "voi äänestää missä tahansa ennakkoäänestyspaikassa Suomessa",
                "äänestyspaikan saa valita itse, esimerkiksi kirjaston tai kauppakeskuksen",
                "ei tarvitse mennä ilmoituskortissa mainittuun paikkaan",
              ],
              keyNote: "You can vote at any general advance-voting place in Finland, whereas on election day only at the place on your notification card.",
              explain: "“Ennakkoon voit äänestää missä tahansa yleisessä ennakkoäänestyspaikassa Suomessa … Vaalipäivänä taas … vain siinä äänestyspaikassa, joka on merkitty saamaasi ilmoituskorttiin.”",
            },
            {
              id: "k19r6q2",
              type: "open",
              q: "Mitä äänestäjän on otettava mukaan, ja mikä kortti ei käy siihen?",
              hint: "(2 asiaa)",
              accept: [
                "henkilöllisyystodistus, Kela-kortti ei kelpaa",
                "henkilökortti, passi tai ajokortti; ei Kela-korttia",
                "henkkarit, mutta Kela-kortti ei käy",
              ],
              keyNote: "Both: an ID (identity card, passport or driving licence) AND the information that the Kela card is not accepted.",
              explain: "“Ota mukaan henkilöllisyystodistus … Kela-kortti ei kelpaa henkilöllisyystodistukseksi.”",
            },
            {
              id: "k19r6q3",
              type: "open",
              q: "Missä tapauksessa ääni hylätään?",
              accept: [
                "jos lippuun kirjoittaa jotain muuta kuin ehdokkaan numeron",
                "jos äänestyslipussa on muutakin kuin numero",
                "jos lippuun kirjoittaa esimerkiksi nimen tai muuta tekstiä",
              ],
              keyNote: "If the voter writes anything other than the candidate's number on the ballot.",
              explain: "“Lippuun ei saa kirjoittaa mitään muuta kuin ehdokkaan numeron, sillä muuten ääni hylätään.”",
            },
          ],
        },
      ],
    },

    // ------------------------------------------------------------------ WRITING
    {
      id: "writing",
      minutes: 54,
      ohje:
        "Tässä osakokeessa kirjoitat kolme tekstiä: muodollisen viestin, epämuodollisen viestin ja mielipidetekstin. Tee kaikki tehtävät. Lue tehtävät huolellisesti ja kirjoita kaikista asioista, joita tehtävässä pyydetään. Kiinnitä huomiota siihen, kenelle kirjoitat ja millainen tyyli tilanteeseen sopii. Tekstejä arvioidaan sen perusteella, miten selkeästi, sujuvasti ja monipuolisesti viestit asiasi. Sanakirjaa ei saa käyttää.",
      tasks: [
        {
          id: "k19w1",
          title: "Tehtävä 1: Viesti kaupungille",
          instructions: { fi: "Kirjoita viesti. Kirjoita noin 80–150 sanaa.", en: "Write a message of about 80–150 words." },
          prompt:
            "Asuinalueesi koulun lähellä on vilkas suojatie, jolla on viime aikoina sattunut useita vaaratilanteita. Kirjoita sähköposti kaupungin " +
            "liikennesuunnittelijalle Pekka Laineelle.",
          bullets: [
            "Kerro, kuka olet ja miksi kirjoitat.",
            "Kuvaile paikkaa ja kerro, mitä siellä on tapahtunut.",
            "Kerro, keitä asia koskee ja miksi se on sinulle tärkeä.",
            "Ehdota, miten tilannetta voisi parantaa.",
            "Kysy, miten asukkaat voivat vaikuttaa asian käsittelyyn.",
            "Kerro lisäksi ainakin kaksi muuta asiaa.",
            "Muista aloitus ja lopetus.",
          ],
          promptEn:
            "Near the school in your area there is a busy pedestrian crossing where several dangerous situations have happened recently. Email the city's traffic planner Pekka Laine: say who you are and why you are writing, describe the place and what has happened, say whom it affects and why it matters to you, suggest how to improve the situation, ask how residents can influence the handling of the matter, and add at least two more points of your own.",
          register: "formal email to a city official: Hyvä Pekka Laine … Ystävällisin terveisin + full name and address; polite conditional (toivoisin, olisiko mahdollista), passive (on sattunut, pitäisi rakentaa)",
          minWords: 80,
          maxWords: 150,
        },
        {
          id: "k19w2",
          title: "Tehtävä 2: Viesti kurssikaverille",
          instructions: { fi: "Kirjoita viesti. Kirjoita noin 60–120 sanaa.", en: "Write a message of about 60–120 words." },
          prompt:
            "Kurssikaverisi Sami opiskeli kanssasi suomea, mutta hän muutti kuukausi sitten toiseen kaupunkiin. Viime viikolla suomen kielen ryhmänne kävi " +
            "kaupungintalolla seuraamassa kaupunginvaltuuston kokousta. Kirjoita Samille viesti.",
          bullets: [
            "Kerro, mitä kaupungintalolla tapahtui ja miltä käynti tuntui.",
            "Kerro, mitä muuta kurssille kuuluu.",
            "Kysy, miten Sami on kotiutunut uuteen kaupunkiin.",
            "Ehdota, miten voisitte pitää yhteyttä tai milloin voisitte nähdä.",
            "Muista aloitus ja lopetus.",
          ],
          promptEn:
            "Your classmate Sami studied Finnish with you but moved to another town a month ago. Last week your Finnish group visited the city hall to follow a city council meeting. Write to Sami: tell what happened there and how the visit felt, give other news from the course, ask how he has settled in, and suggest how you could keep in touch or when you could meet.",
          register: "informal message to a friend: Moi Sami! / Hei Sami! … Terveisin / Nähdään! + first name; past tense narration, colloquial tone allowed",
          minWords: 60,
          maxWords: 120,
        },
        {
          id: "k19w3",
          title: "Tehtävä 3: Mielipideteksti",
          instructions: { fi: "Kirjoita mielipideteksti. Kirjoita noin 100–180 sanaa.", en: "Write an opinion text of about 100–180 words." },
          prompt:
            "Sanomalehden verkkosivuilla on keskustelupalsta, jolle lukijat kirjoittavat mielipiteitään ajankohtaisista aiheista. Valitse aihe A tai B ja kirjoita mielipidekirjoitus.",
          bullets: [
            "A. Kuntavaalien äänestysikärajaa on ehdotettu laskettavaksi 18 vuodesta 16 vuoteen.",
            "B. Yhä useampi seuraa uutisia vain sosiaalisesta mediasta eikä halua maksaa uutisista. Pitäisikö luotettavien uutisten olla kaikille maksuttomia?",
            "Kerro, mistä on kyse ja mitä mieltä olet asiasta. Perustele mielipiteesi ainakin kolmella tavalla.",
          ],
          promptEn:
            "A newspaper website has a discussion forum for readers' opinions. Choose A (lowering the voting age in municipal elections from 18 to 16) or B (many people follow news only on social media and won't pay for news — should reliable news be free for everyone?). Say what the issue is and what you think, and justify your opinion in at least three ways.",
          register: "opinion text for a newspaper forum: neutral written style, a clear opening statement, linked arguments (ensinnäkin, lisäksi, toisaalta, siksi), a conclusion; no greeting needed, may end with name/signature",
          minWords: 100,
          maxWords: 180,
        },
      ],
    },

    // ------------------------------------------------------------------ LISTENING
    {
      id: "listening",
      minutes: null,
      approxMinutes: 40,
      cutoffs: { level1: 0.5, level2: 0.75 },
      ohje:
        "Tässä osakokeessa kuuntelet erilaisia puhuttuja tekstejä: haastattelun, keskustelun asiakaspalvelussa, puhelun, radiouutisen sekä lyhyitä tiedotteita ja mainoksia. Osakokeessa on viisi tehtävää. Ennen jokaista tekstiä sinulla on aikaa lukea kysymykset. Kuulet jokaisen tekstin kaksi kertaa. Pitkät tekstit kuulet toisella kerralla osissa, ja osien välissä on aikaa vastata. Äänite etenee automaattisesti, etkä voi pysäyttää sitä. Vastaa avoimiin kysymyksiin suomeksi ja lyhyesti.",
      aika: "Osakoe kestää noin 40 minuuttia.",
      tasks: [
        {
          id: "k19l1",
          title: "Tehtävä 1: Haastattelu",
          instructions: {
            fi: "Kuulet haastattelun kaksi kertaa. Lue ensin kysymykset. Valitse oikea vaihtoehto.",
            en: "You will hear an interview twice. Read the questions first. Choose the correct option.",
          },
          situation: "Paikallisradiossa haastatellaan Farida Ahmadia, joka valittiin viime kuntavaaleissa kaupunginvaltuuston varajäseneksi.",
          plays: 2,
          rate: 1.0,
          lines: [
            {
              speaker: "Toimittaja",
              text: "Farida, sä tulit Suomeen kahdeksan vuotta sitten, ja nyt sä olet kaupunginvaltuuston varajäsen. Miten tämä kaikki alkoi?",
            },
            {
              speaker: "Farida",
              text:
                "No, se alkoi oikeastaan lasten koulusta. Mä menin vanhempainiltaan, ja siellä puhuttiin koulumatkojen turvallisuudesta. Mä ymmärsin ehkä puolet, " +
                "mutta huomasin, että muillakin maahanmuuttajavanhemmilla oli samoja huolia. Seuraavana vuonna mä lähdin mukaan vanhempainyhdistykseen.",
            },
            { speaker: "Toimittaja", text: "Ja siitä sitten politiikkaan?" },
            {
              speaker: "Farida",
              text:
                "Ei ihan heti. Ensin mä olin pari vuotta vapaaehtoisena asukastalolla, jossa mä autoin ihmisiä täyttämään lomakkeita. Siellä yhden puolueen edustaja " +
                "kysyi, haluaisinko lähteä ehdolle. Mä nauroin ja sanoin, ettei mun suomi riitä. Mutta hän sanoi, että juuri sellaisia ihmisiä tarvitaan, jotka tuntee arjen.",
            },
            { speaker: "Toimittaja", text: "Oliko kampanja vaikea?" },
            {
              speaker: "Farida",
              text:
                "Kyllä se jännitti. Mulla ei ollut paljon rahaa mainoksiin, joten mä kiersin kauppojen edessä ja juttelin ihmisten kanssa. Moni sanoi, ettei ole koskaan " +
                "äänestänyt, koska ei tiennyt, että ulkomaan kansalaisetkin saa äänestää kuntavaaleissa. Se yllätti mut.",
            },
            { speaker: "Toimittaja", text: "Mitä asioita sä haluat ajaa?" },
            {
              speaker: "Farida",
              text:
                "Kahta asiaa erityisesti. Ensinnäkin sitä, että kotoutumispalveluista saa tietoa selkeällä suomella eikä pelkällä virkakielellä. Ja toiseksi lasten " +
                "harrastuksia. Moni perhe ei tiedä, että harrastuksiin voi saada kaupungilta tukea.",
            },
            { speaker: "Toimittaja", text: "Miltä tuntuu istua valtuuston kokouksissa?" },
            {
              speaker: "Farida",
              text:
                "Varajäsenenä mä pääsen kokouksiin vain silloin, kun joku varsinainen jäsen on estynyt. Viime syksynä mä olin mukana kolme kertaa. Ensimmäisellä kerralla " +
                "mä en uskaltanut sanoa mitään, mutta kolmannella kerralla mä pidin jo ihan oman puheenvuoron.",
            },
            { speaker: "Toimittaja", text: "Mitä sanoisit niille, joiden mielestä äänestäminen ei kannata?" },
            {
              speaker: "Farida",
              text:
                "Että jos sä et äänestä, joku muu päättää sun asioista. Ja kunnassa päätetään tosi läheisistä asioista: kouluista, kirjastoista ja busseista.",
            },
          ],
          questions: [
            {
              id: "k19l1q1",
              type: "mc",
              q: "Mistä Faridan kiinnostus yhteisiin asioihin sai alkunsa?",
              options: [
                "lasten koulun vanhempainillasta",
                "suomen kielen kurssilta",
                "puolueen järjestämästä tilaisuudesta",
              ],
              answer: 0,
              explain: "“se alkoi oikeastaan lasten koulusta. Mä menin vanhempainiltaan …”",
            },
            {
              id: "k19l1q2",
              type: "mc",
              q: "Mitä Farida teki asukastalolla?",
              options: [
                "Hän opetti suomea muille maahanmuuttajille.",
                "Hän auttoi ihmisiä lomakkeiden täyttämisessä.",
                "Hän järjesti tapahtumia lapsiperheille.",
              ],
              answer: 1,
              explain: "“mä autoin ihmisiä täyttämään lomakkeita.”",
            },
            {
              id: "k19l1q3",
              type: "mc",
              q: "Miten Farida suhtautui aluksi ehdotukseen lähteä ehdolle?",
              options: [
                "Hän epäili, ettei hänen kielitaitonsa riittäisi.",
                "Hän suostui heti, koska halusi vaikuttaa.",
                "Hän kieltäytyi, koska hänellä ei ollut rahaa kampanjaan.",
              ],
              answer: 0,
              explain: "“Mä nauroin ja sanoin, ettei mun suomi riitä.” Lack of money came up later, during the campaign.",
            },
            {
              id: "k19l1q4",
              type: "mc",
              q: "Mikä yllätti Faridan kampanjan aikana?",
              options: [
                "Kauppojen edessä ei saanut kampanjoida.",
                "Moni ei tiennyt, että heillä on oikeus äänestää kuntavaaleissa.",
                "Ihmiset tunnistivat hänet asukastalolta.",
              ],
              answer: 1,
              explain: "Many had never voted “koska ei tiennyt, että ulkomaan kansalaisetkin saa äänestää kuntavaaleissa. Se yllätti mut.”",
            },
            {
              id: "k19l1q5",
              type: "mc",
              q: "Mitä Farida haluaa erityisesti edistää?",
              options: [
                "selkeämpää tiedottamista kotoutumispalveluista",
                "maksuttomia harrastuksia kaikille lapsille",
                "parempia bussiyhteyksiä",
              ],
              answer: 0,
              explain:
                "Information about integration services “selkeällä suomella eikä pelkällä virkakielellä”. On hobbies she wants families to know about existing support, not free hobbies for all.",
            },
            {
              id: "k19l1q6",
              type: "mc",
              q: "Mitä Farida kertoo valtuuston kokouksista?",
              options: [
                "Hän osallistuu jokaiseen kokoukseen.",
                "Hän ei ole vielä uskaltanut puhua kokouksissa.",
                "Hän on jo käyttänyt kokouksessa oman puheenvuoron.",
              ],
              answer: 2,
              explain: "“kolmannella kerralla mä pidin jo ihan oman puheenvuoron.” As a deputy she attends only when a member is absent.",
            },
          ],
        },
        {
          id: "k19l2",
          title: "Tehtävä 2: Keskustelu palvelupisteessä",
          instructions: {
            fi: "Kuulet keskustelun kaksi kertaa. Ovatko väitteet oikein vai väärin?",
            en: "You will hear a conversation twice. Are the statements true or false?",
          },
          situation: "Asiakas asioi kaupungin palvelupisteessä, koska hän tarvitsee lapselleen päiväkotipaikan.",
          plays: 2,
          rate: 1.0,
          lines: [
            { speaker: "Virkailija", text: "Hei, seuraava, olkaa hyvä. Miten voin auttaa?" },
            {
              speaker: "Asiakas",
              text: "Hei. Mä tarvitsisin päiväkotipaikan mun pojalle. Hän on kolmevuotias, ja mä aloitan uudessa työssä ensi kuun alussa.",
            },
            {
              speaker: "Virkailija",
              text:
                "Onnea uudesta työstä! Hakemus pitää yleensä tehdä neljä kuukautta ennen kuin hoito alkaa. Mutta jos tarve johtuu yllättäen saadusta työpaikasta, " +
                "kaupungin on järjestettävä paikka kahdessa viikossa.",
            },
            { speaker: "Asiakas", text: "Ai, hyvä. Mä luulin, että siihen menee monta kuukautta. Tarvitsenko mä jonkun todistuksen työpaikasta?" },
            {
              speaker: "Virkailija",
              text: "Kyllä, työsopimus tai työnantajan todistus pitää liittää hakemukseen. Hakemuksen voi tehdä verkossa, mutta voin auttaa teitä täyttämään sen nyt tässä.",
            },
            { speaker: "Asiakas", text: "Se olisi kiva. Me asutaan Koivukylässä. Pääseekö hän siihen päiväkotiin, joka on ihan meidän kodin vieressä?" },
            {
              speaker: "Virkailija",
              text:
                "Hakemukseen voi merkitä kolme toivetta, ja yritämme ottaa ne huomioon. Lähintä päiväkotia en kuitenkaan voi luvata, koska se on usein täynnä. " +
                "Jos paikka järjestyy kauempaa, voitte hakea siirtoa myöhemmin.",
            },
            { speaker: "Asiakas", text: "Okei. Paljonko päivähoito maksaa?" },
            {
              speaker: "Virkailija",
              text:
                "Se riippuu perheen tuloista ja koosta sekä siitä, montako tuntia lapsi on hoidossa. Pienituloisille hoito voi olla maksutonta. " +
                "Maksu määrätään, kun olette toimittaneet tulotiedot.",
            },
            { speaker: "Asiakas", text: "Entä jos mä en toimita tulotietoja?" },
            {
              speaker: "Virkailija",
              text: "Silloin perimme korkeimman maksun. Tulotiedot kannattaa siis toimittaa kuukauden kuluessa siitä, kun hoito alkaa.",
            },
            { speaker: "Asiakas", text: "Selvä. Ja mun poika puhuu kotona arabiaa. Saako hän päiväkodissa apua suomen kieleen?" },
            {
              speaker: "Virkailija",
              text: "Saa. Kaikki lapset, joiden kotikieli on muu kuin suomi, saavat suomen kielen tukea osana tavallista päivää, eikä sitä tarvitse hakea erikseen.",
            },
          ],
          questions: [
            {
              id: "k19l2q1",
              type: "tf",
              q: "Asiakas tarvitsee hoitopaikan, koska hän on aloittamassa uudessa työpaikassa.",
              answer: true,
              explain: "“mä aloitan uudessa työssä ensi kuun alussa.”",
            },
            {
              id: "k19l2q2",
              type: "tf",
              q: "Asiakkaan pojan on odotettava hoitopaikkaa neljä kuukautta.",
              answer: false,
              explain: "Four months is the normal rule, but for a suddenly obtained job “kaupungin on järjestettävä paikka kahdessa viikossa”.",
            },
            {
              id: "k19l2q3",
              type: "tf",
              q: "Hakemuksen liitteeksi tarvitaan selvitys uudesta työpaikasta.",
              answer: true,
              explain: "“työsopimus tai työnantajan todistus pitää liittää hakemukseen.”",
            },
            {
              id: "k19l2q4",
              type: "tf",
              q: "Virkailija lupaa, että poika pääsee kodin vieressä olevaan päiväkotiin.",
              answer: false,
              explain: "“Lähintä päiväkotia en kuitenkaan voi luvata, koska se on usein täynnä.”",
            },
            {
              id: "k19l2q5",
              type: "tf",
              q: "Jos perhe ei toimita tulotietojaan, se joutuu maksamaan korkeimman maksun.",
              answer: true,
              explain: "“Silloin perimme korkeimman maksun.”",
            },
            {
              id: "k19l2q6",
              type: "tf",
              q: "Suomen kielen tukea on haettava päiväkodista erikseen.",
              answer: false,
              explain: "Support is given as part of the normal day, “eikä sitä tarvitse hakea erikseen”.",
            },
          ],
        },
        {
          id: "k19l3",
          title: "Tehtävä 3: Puhelu aikuisopistoon",
          instructions: {
            fi: "Kuulet puhelun kaksi kertaa. Lue ensin kysymykset. Vastaa lyhyesti suomeksi.",
            en: "You will hear a phone call twice. Read the questions first. Answer briefly in Finnish.",
          },
          situation: "Olga soittaa aikuisopistoon, koska hän on ilmoittautunut suomen kielen kurssille.",
          plays: 2,
          rate: 1.0,
          lines: [
            { speaker: "Opisto", text: "Aikuisopisto, Maija Kivelä, hyvää huomenta." },
            {
              speaker: "Olga",
              text:
                "Huomenta. Mun nimi on Olga Petrova. Mä ilmoittauduin teidän iltakurssille Suomi kolme, mutta sain eilen viestin, että kurssi on täynnä ja että mä olen jonossa.",
            },
            {
              speaker: "Opisto",
              text:
                "Hetkinen, katson. Joo, te olette jonossa neljäntenä. Yleensä pari ihmistä peruu paikkansa ensimmäisen viikon aikana, joten ei ole ihan mahdotonta päästä mukaan.",
            },
            {
              speaker: "Olga",
              text: "Mutta mä tarvitsen kurssin nopeasti, koska mä haen sairaanhoitajan töitä ja mun pitää osata suomea paremmin. Onko muita vaihtoehtoja?",
            },
            {
              speaker: "Opisto",
              text:
                "On. Meillä alkaa samantasoinen verkkokurssi kahden viikon päästä. Siinä opiskellaan itsenäisesti, mutta kerran viikossa, tiistai-iltaisin, on yhteinen " +
                "etätunti opettajan kanssa.",
            },
            {
              speaker: "Olga",
              text: "Hmm, mä opin paremmin, kun ympärillä on oikeita ihmisiä. Mutta ehkä se on parempi kuin ei mitään. Paljonko se maksaa?",
            },
            {
              speaker: "Opisto",
              text:
                "Verkkokurssi maksaa kahdeksankymmentä euroa, eli kaksikymmentä euroa vähemmän kuin lähiopetus. Ja jos te pääsette jonosta varsinaiselle kurssille, " +
                "voitte siirtyä sinne, kunhan siirto tehdään ensimmäisen viikon aikana. Silloin maksatte vain erotuksen.",
            },
            { speaker: "Olga", text: "Hyvä. Entä teidän nettisivuilla mainittiin YKI-testi. Valmentaako tämä kurssi siihen?" },
            {
              speaker: "Opisto",
              text:
                "Ei suoraan. Mutta keväällä meillä on erillinen keskitason YKI-valmennuskurssi, ja sinne ilmoittautuminen alkaa tammikuussa. Hoitoalalla vaaditaan " +
                "yleensä keskitason taitoa, joten siitä voisi olla teille hyötyä.",
            },
            { speaker: "Olga", text: "Kiitos, tosi hyvä tietää. Eli mä ilmoittaudun nyt verkkokurssille ja pysyn silti jonossa?" },
            {
              speaker: "Opisto",
              text:
                "Juuri niin. Lähetän ilmoittautumislinkin teidän sähköpostiin. Muistakaa maksaa kurssimaksu viikon sisällä, muuten paikka annetaan seuraavalle.",
            },
          ],
          questions: [
            {
              id: "k19l3q1",
              type: "open",
              q: "Miksi Olga ei halua jäädä vain odottamaan paikkaa jonossa?",
              accept: [
                "koska hän hakee sairaanhoitajan töitä ja tarvitsee parempaa suomen kielen taitoa nopeasti",
                "hän tarvitsee suomea pian työnhakua varten",
                "hän hakee töitä hoitajana",
              ],
              keyNote: "She needs better Finnish quickly because she is applying for nursing jobs.",
              explain: "“mä tarvitsen kurssin nopeasti, koska mä haen sairaanhoitajan töitä ja mun pitää osata suomea paremmin.”",
            },
            {
              id: "k19l3q2",
              type: "open",
              q: "Miten verkkokurssilla opiskellaan?",
              hint: "(2 asiaa)",
              accept: [
                "itsenäisesti ja kerran viikossa etätunnilla opettajan kanssa",
                "omin päin, ja tiistai-iltaisin on yhteinen etätunti",
                "itse opiskellen ja viikoittain opettajan kanssa netissä",
              ],
              keyNote: "Both: independent study AND a shared online lesson with the teacher once a week (Tuesday evenings).",
              explain: "“Siinä opiskellaan itsenäisesti, mutta kerran viikossa, tiistai-iltaisin, on yhteinen etätunti opettajan kanssa.”",
            },
            {
              id: "k19l3q3",
              type: "open",
              q: "Mitä tapahtuu, jos Olga pääsee jonosta varsinaiselle kurssille?",
              accept: [
                "hän voi siirtyä sinne ensimmäisen viikon aikana ja maksaa vain erotuksen",
                "hän voi vaihtaa kurssia ja maksaa kaksikymmentä euroa lisää",
                "siirtyy lähikurssille ja maksaa erotuksen",
              ],
              keyNote: "She may switch to the classroom course (within the first week) and pays only the price difference (20 €).",
              explain: "“voitte siirtyä sinne, kunhan siirto tehdään ensimmäisen viikon aikana. Silloin maksatte vain erotuksen.”",
            },
            {
              id: "k19l3q4",
              type: "open",
              q: "Mitä Olgan on tehtävä, jotta hän ei menetä paikkaansa verkkokurssilla?",
              accept: [
                "maksettava kurssimaksu viikon sisällä",
                "maksaa kurssi viikon kuluessa",
                "maksaa maksu viikon aikana",
              ],
              keyNote: "Pay the course fee within a week; otherwise the place goes to the next person.",
              explain: "“Muistakaa maksaa kurssimaksu viikon sisällä, muuten paikka annetaan seuraavalle.”",
            },
          ],
        },
        {
          id: "k19l4",
          title: "Tehtävä 4: Radiouutinen",
          instructions: {
            fi: "Kuulet uutisen kaksi kertaa. Lue ensin kysymykset. Valitse oikea vaihtoehto.",
            en: "You will hear a news report twice. Read the questions first. Choose the correct option.",
          },
          situation: "Kuulet radiosta uutisen, joka koskee yleistä vaaramerkkiä.",
          plays: 2,
          rate: 1.0,
          lines: [
            {
              speaker: "Uutistenlukija",
              text:
                "Yleisen vaaramerkin koe kuullaan huomenna maanantaina kello kaksitoista eri puolilla maata. Koe järjestetään tavallisesti kuukauden ensimmäisenä maanantaina. " +
                "Kokeessa kuuluu tasainen, seitsemän sekuntia kestävä ääni, joka tarkoittaa vaaran päättymistä. Varsinainen vaaramerkki taas on nouseva ja laskeva ääni, " +
                "joka kestää minuutin.",
            },
            {
              speaker: "Uutistenlukija",
              text:
                "Tänä vuonna kaupunkiin on asennettu kymmenen uutta sireeniä, sillä vanhojen sireenien ääni ei kuulunut kaikille uusille asuinalueille. Pelastuslaitoksen " +
                "mukaan uusia sireenejä testataan samaan aikaan vanhojen kanssa, joten huomenna ääni voi kuulua tavallista voimakkaampana. Uudet sireenit on sijoitettu muun muassa koulujen ja kauppakeskusten katoille.",
            },
            {
              speaker: "Uutistenlukija",
              text:
                "Jos kuulet vaaramerkin muulloin kuin kokeen aikana, mene sisälle ja pysy siellä. Sulje ovet, ikkunat ja ilmanvaihto ja kuuntele radiota. Pelastuslaitos " +
                "muistuttaa, ettei hätänumeroon pidä soittaa kysyäkseen, mitä on tapahtunut, koska turhat puhelut ruuhkauttavat linjat ja hidastavat avun saamista todellisissa hätätilanteissa.",
            },
            {
              speaker: "Uutistenlukija",
              text:
                "Huomenna puhelimiin lähetetään myös kokeeksi vaaratiedote. Pelastuslaitos pyytää ilmoittamaan verkkosivuillaan olevalla lomakkeella, jos viesti ei tule perille. " +
                "Viesti tulee kaikkiin alueella oleviin puhelimiin, eikä sitä tarvitse tilata erikseen. Tiedotteeseen ei tarvitse vastata.",
            },
          ],
          questions: [
            {
              id: "k19l4q1",
              type: "mc",
              q: "Mitä huomenna kuultava tasainen ääni tarkoittaa?",
              options: ["Vaara on ohi.", "Vaara on alkamassa.", "Ihmisten on mentävä sisälle."],
              answer: 0,
              explain: "The steady seven-second tone “tarkoittaa vaaran päättymistä”. The real alarm is a rising and falling tone.",
            },
            {
              id: "k19l4q2",
              type: "mc",
              q: "Miksi kaupunkiin on asennettu uusia sireenejä?",
              options: [
                "Vanhat sireenit olivat rikki.",
                "Vanhojen sireenien ääni ei kuulunut uusille asuinalueille.",
                "Vanhat sireenit olivat liian äänekkäitä.",
              ],
              answer: 1,
              explain: "“vanhojen sireenien ääni ei kuulunut kaikille uusille asuinalueille.” Tomorrow's sound may be louder because old and new are tested together.",
            },
            {
              id: "k19l4q3",
              type: "mc",
              q: "Mitä pitää tehdä, jos kuulee varsinaisen vaaramerkin?",
              options: [
                "Lähteä kotoa mahdollisimman nopeasti.",
                "Soittaa hätänumeroon ja kysyä ohjeita.",
                "Mennä sisälle, sulkea ovet ja ikkunat ja kuunnella radiota.",
              ],
              answer: 2,
              explain: "“mene sisälle ja pysy siellä. Sulje ovet, ikkunat ja ilmanvaihto ja kuuntele radiota.”",
            },
            {
              id: "k19l4q4",
              type: "mc",
              q: "Miksi hätänumeroon ei pidä soittaa kysyäkseen tilanteesta?",
              options: [
                "Hätäkeskus ei anna tietoa puhelimessa.",
                "Turhat puhelut hidastavat avun saamista todellisissa hätätilanteissa.",
                "Puhelinverkko ei toimi vaaratilanteessa.",
              ],
              answer: 1,
              explain: "“turhat puhelut ruuhkauttavat linjat ja hidastavat avun saamista todellisissa hätätilanteissa.”",
            },
            {
              id: "k19l4q5",
              type: "mc",
              q: "Mitä kuulijoita pyydetään tekemään puhelimeen tulevan kokeen yhteydessä?",
              options: [
                "vastaamaan saamaansa viestiin",
                "ilmoittamaan, jos viesti ei tule perille",
                "lataamaan pelastuslaitoksen sovelluksen",
              ],
              answer: 1,
              explain: "Report via the web form “jos viesti ei tule perille”; “Tiedotteeseen ei tarvitse vastata.”",
            },
          ],
        },
        {
          id: "k19l5",
          title: "Tehtävä 5: Tiedotteita ja mainoksia",
          instructions: {
            fi: "Kuulet viisi lyhyttä tiedotetta tai mainosta kaksi kertaa. Jokaisesta on yksi väite. Onko väite oikein vai väärin?",
            en: "You will hear five short announcements or adverts twice. There is one statement about each. Is it true or false?",
          },
          situation: "Kuulet paikallisradiosta ja kaupungin tiedotuskanavilta lyhyitä tiedotteita ja mainoksia.",
          plays: 2,
          rate: 1.0,
          lines: [
            {
              speaker: "Tiedote 1",
              text:
                "Asukasyhdistyksen kevätkirpputori pidetään asukastalolla lauantaina kello kymmenestä kahteen. Myyntipöydät ovat ilmaisia, mutta ne on varattava etukäteen " +
                "yhdistyksen sähköpostiosoitteesta. Pöytiä on vain kaksikymmentä, joten toimi nopeasti.",
            },
            {
              speaker: "Tiedote 2",
              text:
                "Poliisi varoittaa puhelinhuijauksista. Viime viikkoina monelle on soitettu niin, että soittaja on esittäytynyt poliisiksi tai pankin työntekijäksi. " +
                "Muista, ettei poliisi eikä pankki koskaan kysy puhelimessa verkkopankkitunnuksia. Jos saat tällaisen puhelun, lopeta se ja ilmoita asiasta poliisille.",
            },
            {
              speaker: "Tiedote 3",
              text:
                "Vesilaitos tiedottaa. Keskiviikkona Rantakadun alueella on vesikatko kello yhdeksästä noin kello kolmeen. Katkon jälkeen vesi voi olla hetken sameaa. " +
                "Juoksuta silloin vettä, kunnes se on kirkasta. Vesi on juomakelpoista.",
            },
            {
              speaker: "Mainos 4",
              text:
                "Tunnista valeuutinen! Kirjaston työpajassa opit tarkistamaan kuvan alkuperän ja tunnistamaan harhaanjohtavat otsikot. Työpaja on tarkoitettu aikuisille, " +
                "ja se on maksuton. Ota mukaan oma puhelin tai tabletti, jos sinulla on. Kirjastolta voi myös lainata laitteen.",
            },
            {
              speaker: "Tiedote 5",
              text:
                "Kaupungintalolle avataan ensi maanantaina uusi yhteispalvelupiste. Siellä voi hoitaa esimerkiksi Kelan ja Verohallinnon asioita videoyhteydellä. " +
                "Ajanvaraus ei ole pakollinen, mutta ajan varanneet palvellaan ensin. Palvelupiste on avoinna arkisin kello yhdeksästä neljään.",
            },
          ],
          questions: [
            {
              id: "k19l5q1",
              type: "tf",
              q: "Tiedote 1: Kirpputorin myyntipöydästä peritään pieni maksu.",
              answer: false,
              explain: "“Myyntipöydät ovat ilmaisia, mutta ne on varattava etukäteen.”",
            },
            {
              id: "k19l5q2",
              type: "tf",
              q: "Tiedote 2: Poliisi voi joskus pyytää puhelimessa verkkopankkitunnuksia.",
              answer: false,
              explain: "“ettei poliisi eikä pankki koskaan kysy puhelimessa verkkopankkitunnuksia.”",
            },
            {
              id: "k19l5q3",
              type: "tf",
              q: "Tiedote 3: Katkon jälkeen sameaa vettä kannattaa juoksuttaa, kunnes se kirkastuu.",
              answer: true,
              explain: "“Juoksuta silloin vettä, kunnes se on kirkasta.”",
            },
            {
              id: "k19l5q4",
              type: "tf",
              q: "Mainos 4: Työpajaan pääsee vain, jos on oma puhelin tai tabletti.",
              answer: false,
              explain: "Bring your own device “jos sinulla on” — the library can also lend one.",
            },
            {
              id: "k19l5q5",
              type: "tf",
              q: "Tiedote 5: Yhteispalvelupisteessä voi asioida myös ilman ajanvarausta.",
              answer: true,
              explain: "“Ajanvaraus ei ole pakollinen” — those with an appointment are only served first.",
            },
          ],
        },
      ],
    },

    // ------------------------------------------------------------------ SPEAKING
    {
      id: "speaking",
      minutes: null,
      approxMinutes: 25,
      ohje:
        "Puhumisen osakoe tehdään studiossa. Kuulet ohjeet ja kysymykset tallenteelta, eikä paikalla ole haastattelijaa. Osakokeessa on neljä tehtävää: kertominen, kaksi keskustelua, tilanteisiin reagointi ja mielipiteen esittäminen. Ennen tehtäviä sinulla on aikaa lukea ohjeet ja valmistautua. Aloita puhuminen vasta, kun kuulet äänimerkin, ja käytä koko vastausaika. Puheesi tallennetaan, ja sitä arvioidaan sen perusteella, miten sujuvasti, ymmärrettävästi ja tilanteeseen sopivasti puhut.",
      aika: "Osakoe kestää noin 25 minuuttia.",
      tasks: [
        {
          id: "k19s1",
          kind: "kertominen",
          title: "Tehtävä 1: Kertominen",
          instructions: {
            fi: "Sinulla on minuutti aikaa valmistautua. Voit tehdä muistiinpanoja. Puhu noin puolitoista minuuttia. Aloita puhuminen vasta, kun kuulet äänimerkin.",
            en: "You have one minute to prepare and may take notes. Speak for about a minute and a half. Start only after the beep.",
          },
          prepSec: 60,
          card: {
            title: "Kerro asuinalueestasi ja sen palveluista.",
            questions: [
              "Millaisella alueella asut, ja millaisia ihmisiä siellä asuu?",
              "Mitä palveluja alueella on, ja mitä niistä käytät eniten?",
              "Miten alue on muuttunut sinä aikana, kun olet asunut siellä?",
              "Mitä alueelta puuttuu, ja miten sitä voisi kehittää?",
            ],
          },
          items: [{ id: "a", spoken: "Kerro asuinalueestasi ja sen palveluista. Aloita puhuminen nyt.", speakSec: 90 }],
        },
        {
          id: "k19s2",
          kind: "keskustelu",
          title: "Tehtävä 2: Keskustelu A",
          instructions: {
            fi: "Kuulet keskustelun, jossa puhut vuorotellen toisen henkilön kanssa. Lue tilanne ja ohjeet. Puhu, kun kuulet äänimerkin.",
            en: "You will take turns with another speaker. Read the situation and the cues. Speak after the beep.",
          },
          prepSec: 30,
          card: {
            title:
              "Aloitit kaksi viikkoa sitten suomen kielen kurssin, mutta kurssi on sinulle liian helppo. Soitat kurssin järjestäjän toimistoon, koska haluat vaihtaa ryhmää.",
            questions: [],
          },
          items: [
            {
              id: "a",
              spoken: "Opintokeskus Kielitalo, Henna puhelimessa, hei.",
              cue: "[Esittele itsesi ja kerro, miksi soitat.]",
              speakSec: 20,
            },
            {
              id: "b",
              spoken: "Ahaa. Millä kurssilla olette nyt, ja miksi haluaisitte vaihtaa?",
              cue: "[Kerro kurssistasi ja perustele, miksi se ei sovi sinulle.]",
              speakSec: 25,
            },
            {
              id: "c",
              spoken: "Ymmärrän. Seuraavan tason päiväryhmä on kuitenkin täynnä, ja siihen on jonoa.",
              cue: "[Kerro, miksi tarvitset vaativamman kurssin pian, ja kysy muista vaihtoehdoista.]",
              speakSec: 20,
            },
            {
              id: "d",
              spoken: "Jatkotason iltaryhmässä on vielä vapaita paikkoja. Se kokoontuu maanantaisin ja keskiviikkoisin kello kuudesta kahdeksaan. Sopisiko se teille?",
              cue: "[Kerro, sopiiko aika sinulle, ja perustele.]",
              speakSec: 20,
            },
            {
              id: "e",
              spoken: "Hyvä. Siirto vaatii kuitenkin, että teette ensin lyhyen tasotestin. Milloin pääsisitte tulemaan?",
              cue: "[Ehdota aikaa testille ja kysy, mitä testissä tehdään.]",
              speakSec: 20,
            },
            {
              id: "f",
              spoken: "Testissä on lyhyt kirjoitustehtävä ja keskustelu opettajan kanssa. Lähetän teille vielä vahvistuksen sähköpostiin. Oliko muuta?",
              cue: "[Kysy, mitä tapahtuu nykyisen kurssin maksulle, ja kiitä.]",
              speakSec: 15,
            },
          ],
        },
        {
          id: "k19s3",
          kind: "keskustelu",
          title: "Tehtävä 2: Keskustelu B",
          instructions: {
            fi: "Kuulet keskustelun, jossa puhut vuorotellen toisen henkilön kanssa. Lue tilanne ja ohjeet. Puhu, kun kuulet äänimerkin.",
            en: "You will take turns with another speaker. Read the situation and the cues. Speak after the beep.",
          },
          prepSec: 30,
          card: {
            title:
              "Haluaisit järjestää taloyhtiön pihalla yhteiset siivoustalkoot ja niiden jälkeen grillijuhlan. Menet puhumaan asiasta taloyhtiön hallituksen puheenjohtajalle Jukka Salolle. Sinä aloitat.",
            questions: [],
          },
          items: [
            { id: "a", spoken: "", cue: "[Tervehdi Jukkaa, esittele itsesi ja kerro, mistä haluat puhua.]", speakSec: 20 },
            {
              id: "b",
              spoken: "Kuulostaa mukavalta. Mutta viime vuonna talkoisiin tuli vain kolme ihmistä. Miten saisimme asukkaat mukaan?",
              cue: "[Ehdota ainakin kahta keinoa.]",
              speakSec: 25,
            },
            {
              id: "c",
              spoken: "Hyviä ideoita. Mutta kuka hoitaisi ruoat? Taloyhtiöllä ei ole tähän paljon rahaa.",
              cue: "[Ehdota, miten ruoka järjestetään.]",
              speakSec: 20,
            },
            {
              id: "d",
              spoken: "Selvä. Entä milloin talkoot voisi pitää? Toukokuun lopussa moni on jo mökillä.",
              cue: "[Ehdota päivää ja perustele.]",
              speakSec: 15,
            },
            {
              id: "e",
              spoken: "Se voisi sopia. Pihalla grillaaminen on kuitenkin kielletty järjestyssäännöissä, joten tarvitsemme hallituksen luvan. Voisitko kirjoittaa hallitukselle lyhyen ehdotuksen?",
              cue: "[Vastaa ja kysy, mitä ehdotuksessa pitäisi olla.]",
              speakSec: 20,
            },
            {
              id: "f",
              spoken: "Riittää, että kerrot päivän, ohjelman ja sen, kuka vastaa grillistä. Käsittelemme asian seuraavassa kokouksessa.",
              cue: "[Lupaa toimittaa ehdotus, kiitä ja lopeta keskustelu.]",
              speakSec: 15,
            },
          ],
        },
        {
          id: "k19s4",
          kind: "tilanteet",
          title: "Tehtävä 3: Tilanteisiin reagointi",
          instructions: {
            fi: "Kuulet viisi tilannetta. Lue tilanne ja mieti, mitä sanoisit. Kun kuulet äänimerkin, reagoi tilanteeseen sopivalla tavalla.",
            en: "You will hear five situations. Read each one and think what you would say. React appropriately after the beep.",
          },
          prepSec: 0,
          card: null,
          items: [
            {
              id: "a",
              situation: "Kurssikaverisi oli sairaana ja kysyy, voisitko lainata hänelle muistiinpanojasi. Mitä sanot?",
              spoken: "Tilanne 1. Kurssikaverisi oli sairaana ja kysyy, voisitko lainata hänelle muistiinpanojasi. Mitä sanot?",
              prepSec: 20,
              speakSec: 20,
            },
            {
              id: "b",
              situation: "Soitat kaupungin neuvontaan, koska kotikatusi katuvalot eivät ole toimineet viikkoon. Mitä sanot?",
              spoken: "Tilanne 2. Soitat kaupungin neuvontaan, koska kotikatusi katuvalot eivät ole toimineet viikkoon. Mitä sanot?",
              prepSec: 20,
              speakSec: 30,
            },
            {
              id: "c",
              situation: "Unohdit mennä sovittuun tapaamiseen kaupungin asumisneuvojan kanssa. Soitat hänelle. Mitä sanot?",
              spoken: "Tilanne 3. Unohdit mennä sovittuun tapaamiseen kaupungin asumisneuvojan kanssa. Soitat hänelle. Mitä sanot?",
              prepSec: 20,
              speakSec: 30,
            },
            {
              id: "d",
              situation: "Naapurisi on pysäköinyt autonsa jo kolmannen kerran tällä viikolla niin, ettet pääse lähtemään omalla autollasi. Menet puhumaan hänelle. Mitä sanot?",
              spoken: "Tilanne 4. Naapurisi on pysäköinyt autonsa jo kolmannen kerran tällä viikolla niin, ettet pääse lähtemään omalla autollasi. Menet puhumaan hänelle. Mitä sanot?",
              prepSec: 20,
              speakSec: 30,
            },
            {
              id: "e",
              situation: "Olet äänestämässä ensimmäistä kertaa Suomessa etkä tiedä, mitä äänestyslippuun pitää kirjoittaa. Kysyt neuvoa vaalivirkailijalta. Mitä sanot?",
              spoken: "Tilanne 5. Olet äänestämässä ensimmäistä kertaa Suomessa etkä tiedä, mitä äänestyslippuun pitää kirjoittaa. Kysyt neuvoa vaalivirkailijalta. Mitä sanot?",
              prepSec: 20,
              speakSec: 30,
            },
          ],
        },
        {
          id: "k19s5",
          kind: "mielipide",
          title: "Tehtävä 4: Mielipide",
          instructions: {
            fi: "Valitse aihe A tai B. Sinulla on minuutti aikaa valmistautua. Puhu noin kaksi minuuttia ja perustele mielipiteesi.",
            en: "Choose topic A or B. You have one minute to prepare. Speak for about two minutes and justify your opinion.",
          },
          prepSec: 60,
          card: {
            title: "Valitse aihe A tai B.",
            questions: [
              "A. Äänestäminen: Pitäisikö äänestämisen olla pakollista? Miksi moni jättää äänestämättä? Miten nuoret saataisiin kiinnostumaan vaaleista?",
              "B. Uutiset ja sosiaalinen media: Voiko sosiaalisen median uutisiin luottaa? Kenen vastuulla on torjua valeuutisia? Miten itse tarkistat, onko tieto totta?",
            ],
          },
          items: [{ id: "a", spoken: "Kerro mielipiteesi valitsemastasi aiheesta. Aloita puhuminen nyt.", speakSec: 120 }],
        },
      ],
    },
  ],
};
