// Keskitaso 7
export default {
  id: "koe17",
  title: "Keskitaso 7",
  level: "keskitaso",
  description: "Subscriptions and auto-renewals, online scams, banking apps, price comparison, the sharing economy, saving and household budgets.",
  sections: [
    // ------------------------------------------------------------------ READING
    {
      id: "reading",
      minutes: 60,
      cutoffs: { level1: 0.5, level2: 0.75 },
      ohje:
        "Tässä osakokeessa luet erilaisia tekstejä, esimerkiksi uutisen, kolumnin, mielipidekirjoituksen, kuluttaja-artikkelin, tiedotteen ja ohjeen. Osakokeessa on kuusi tehtävää. Tehtävissä on monivalintakysymyksiä, oikein–väärin-väitteitä ja avoimia kysymyksiä. Vastaa avoimiin kysymyksiin suomeksi ja lyhyesti, omin sanoin. Kaikkia sanoja ei tarvitse ymmärtää, jotta voi vastata oikein. Sanakirjaa ei saa käyttää.",
      tasks: [
        {
          id: "k17r1",
          title: "Tehtävä 1: Uutinen",
          instructions: {
            fi: "Lue uutinen ja vastaa kysymyksiin. Valitse oikea vaihtoehto.",
            en: "Read the news item and answer the questions. Choose the correct option.",
          },
          text: {
            title: "Poliisi varoittaa: huijarit soittavat nyt pankin nimissä",
            body:
              "Poliisin tietoon on tullut syksyn aikana satoja tapauksia, joissa huijari on soittanut uhrille ja esittäytynyt pankin turvallisuusosaston työntekijäksi. " +
              "Puhelu näyttää usein tulevan pankin oikeasta numerosta, koska huijarit osaavat väärentää soittajan numeron. Pelkästään lokakuussa uhrit menettivät yhteensä " +
              "yli kaksi miljoonaa euroa.\n\n" +
              "Huijaus etenee yleensä samalla tavalla. Soittaja kertoo, että uhrin tilillä on havaittu epäilyttäviä tapahtumia ja että rahat on siirrettävä heti ”turvatilille”. " +
              "Joskus soittaja pyytää uhria kirjautumaan verkkopankkiin ja vahvistamaan sovelluksessa toimenpiteen, joka todellisuudessa on maksu huijarille. " +
              "Puhelun aikana uhria kiirehditään jatkuvasti, eikä hänen anneta lopettaa puhelua.\n\n" +
              "Rikoskomisario Tuomas Leino muistuttaa, ettei pankki koskaan pyydä asiakasta siirtämään rahojaan toiselle tilille eikä kysy tunnuksia puhelimessa. " +
              "”Jos puhelu tuntuu oudolta, sen voi aina katkaista ja soittaa itse pankkiin numeroon, joka löytyy pankin verkkosivuilta. Kiirettä ei koskaan ole niin paljon, " +
              "etteikö tähän olisi aikaa”, Leino sanoo.\n\n" +
              "Toisin kuin usein luullaan, uhrit eivät ole pelkästään iäkkäitä. Poliisin mukaan huijatuista lähes kolmannes on työikäisiä, jotka käyttävät verkkopankkia sujuvasti. " +
              "”Huijarit ovat taitavia, ja kiireessä kuka tahansa voi erehtyä”, Leino sanoo.\n\n" +
              "Pankki voi korvata vahingon, jos asiakas ei ole toiminut törkeän huolimattomasti, mutta korvauksista kiistellään usein pitkään. Finanssiala selvittää parhaillaan, " +
              "voisiko pankkien välistä tietojenvaihtoa lisätä, jotta epäilyttävät siirrot saataisiin pysäytettyä nopeammin.",
          },
          questions: [
            {
              id: "k17r1q1",
              type: "mc",
              q: "Miksi huijarin puhelu voi vaikuttaa aidolta?",
              options: [
                "Soittaja tietää valmiiksi uhrin tilinumeron.",
                "Puhelimen näytöllä näkyy pankin oikea numero.",
                "Uhri saa ensin viestin pankin sovellukseen.",
              ],
              answer: 1,
              explain: "“Puhelu näyttää usein tulevan pankin oikeasta numerosta, koska huijarit osaavat väärentää soittajan numeron.”",
            },
            {
              id: "k17r1q2",
              type: "mc",
              q: "Mitä huijari yleensä yrittää saada uhrin tekemään?",
              options: [
                "siirtämään rahansa toiselle tilille",
                "käymään pankin konttorissa",
                "lähettämään pankkitunnuksensa sähköpostilla",
              ],
              answer: 0,
              explain: "The caller says the money must be moved immediately to a “turvatilille”, or has the victim confirm what is really a payment.",
            },
            {
              id: "k17r1q3",
              type: "mc",
              q: "Mitä rikoskomisario Leino neuvoo tekemään, jos puhelu tuntuu epäilyttävältä?",
              options: [
                "kysymään soittajalta tämän nimen ja takaisinsoittonumeron",
                "ilmoittamaan asiasta heti poliisille",
                "lopettamaan puhelun ja soittamaan itse pankkiin",
              ],
              answer: 2,
              explain: "“sen voi aina katkaista ja soittaa itse pankkiin numeroon, joka löytyy pankin verkkosivuilta.” A number given by the caller could be fake.",
            },
            {
              id: "k17r1q4",
              type: "mc",
              q: "Mitä uutisessa kerrotaan huijausten uhreista?",
              options: [
                "Lähes kaikki ovat iäkkäitä, jotka eivät käytä verkkopankkia.",
                "Myös verkkopankin sujuvat käyttäjät joutuvat huijatuiksi.",
                "Pankki korvaa kaikkien uhrien menetykset.",
              ],
              answer: 1,
              explain: "“lähes kolmannes on työikäisiä, jotka käyttävät verkkopankkia sujuvasti.” Compensation depends on whether the customer was grossly negligent.",
            },
          ],
        },
        {
          id: "k17r2",
          title: "Tehtävä 2: Kuluttaja-artikkeli",
          instructions: {
            fi: "Lue artikkeli. Ovatko väitteet oikein vai väärin?",
            en: "Read the article. Are the statements true (oikein) or false (väärin)?",
          },
          text: {
            title: "Ilmainen kokeilu muuttui maksulliseksi – näin pidät kestotilaukset hallinnassa",
            body:
              "Suoratoistopalvelut, sovellukset, lehdet, kuntosalit ja jopa partakoneen terät: yhä useampi tuote myydään nykyään kestotilauksena, josta veloitetaan maksu " +
              "kuukausittain, kunnes asiakas itse lopettaa sen. Kuluttajatutkimuksen mukaan tavallisella kotitaloudella on viisi tai kuusi kestotilausta, mutta moni ei muista " +
              "niistä kaikkia. Yksittäinen kymmenen euron veloitus ei tunnu missään, mutta vuodessa summa voi nousta satoihin euroihin.\n\n" +
              "Tavallisin ansa on ilmainen kokeilujakso. Palvelua saa käyttää esimerkiksi kuukauden maksutta, mutta tilausta tehdessä on annettava maksukortin tiedot. " +
              "Jos tilausta ei peruta ennen kokeilun päättymistä, siitä tulee automaattisesti maksullinen. Laki ei kiellä tällaista käytäntöä, mutta yrityksen on kerrottava " +
              "selvästi jo ennen tilausta, milloin maksut alkavat ja paljonko palvelu sen jälkeen maksaa. Jos tiedot on piilotettu pienellä präntillä kirjoitettuihin ehtoihin, " +
              "kuluttajaviranomainen voi puuttua asiaan. Kokeilun päättymisestä kannattaa joka tapauksessa tehdä itselleen muistutus puhelimen kalenteriin heti tilauksen yhteydessä.\n\n" +
              "Kestotilauksen voi yleensä lopettaa milloin tahansa, mutta jo maksettua kautta ei tavallisesti hyvitetä. Lopettamisen pitää olla yhtä helppoa kuin tilaamisen: " +
              "jos palvelun on voinut tilata verkossa muutamalla klikkauksella, yritys ei voi vaatia, että irtisanominen tehdään puhelimitse tai kirjeellä. " +
              "Määräaikainen sopimus on eri asia. Jos olet sitoutunut esimerkiksi 12 kuukaudeksi, sopimuksesta ei pääse eroon ennen kauden loppua ilman erityistä syytä, " +
              "kuten vakavaa sairautta tai työttömyyttä.\n\n" +
              "Kestotilausten hinnat myös nousevat usein huomaamatta. Yritys saa korottaa hintaa, jos sopimusehdoissa on siitä maininta, mutta muutoksesta on ilmoitettava " +
              "asiakkaalle etukäteen, ja asiakkaalla on silloin yleensä oikeus irtisanoa sopimus. Ilmoitus tulee kuitenkin usein sähköpostiin, ja moni ohittaa sen lukematta.\n\n" +
              "Kuluttajaneuvonta suosittelee käymään tiliotteet läpi muutaman kuukauden välein ja etsimään toistuvia veloituksia. Tuntemattomat nimet kannattaa selvittää, " +
              "sillä tiliotteella näkyvä veloittajan nimi voi poiketa palvelun nimestä. Monissa pankkisovelluksissa on nykyään toiminto, joka kokoaa toistuvat maksut yhteen näkymään.\n\n" +
              "Jos sinulta on veloitettu tilauksesta, jota et ole tehnyt, ota ensin yhteyttä yritykseen. Jos asia ei ratkea, kortilla maksetun veloituksen voi riitauttaa pankissa. " +
              "Pankki voi perua veloituksen, mutta selvitys vie usein viikkoja, ja sillä välin rahat ovat poissa tililtä.\n\n" +
              "Lapsiperheissä erityinen riski ovat pelien sisäiset ostot. Jos lapsi pääsee käyttämään vanhemman puhelinta, johon on tallennettu maksukortti, kymmenien eurojen ostokset " +
              "voivat syntyä muutamassa minuutissa. Ostoihin kannattaa siksi asettaa salasana tai kuukausiraja. Pelien sisäisistä ostoista on vaikea saada rahoja takaisin, " +
              "koska yritykset vetoavat siihen, että ostos on tehty oikean käyttäjän tililtä.",
          },
          questions: [
            {
              id: "k17r2q1",
              type: "tf",
              q: "Tutkimuksen mukaan moni ei muista kaikkia kestotilauksiaan.",
              answer: true,
              explain: "“tavallisella kotitaloudella on viisi tai kuusi kestotilausta, mutta moni ei muista niistä kaikkia.”",
            },
            {
              id: "k17r2q2",
              type: "tf",
              q: "Laki kieltää kokeilujaksot, jotka muuttuvat automaattisesti maksullisiksi.",
              answer: false,
              explain: "“Laki ei kiellä tällaista käytäntöä” — the company must only inform clearly in advance.",
            },
            {
              id: "k17r2q3",
              type: "tf",
              q: "Yrityksen on kerrottava ennen tilausta, milloin maksut alkavat ja mikä palvelun hinta on.",
              answer: true,
              explain: "“yrityksen on kerrottava selvästi jo ennen tilausta, milloin maksut alkavat ja paljonko palvelu sen jälkeen maksaa.”",
            },
            {
              id: "k17r2q4",
              type: "tf",
              q: "Kun kestotilauksen lopettaa, rahat jo maksetulta kaudelta palautetaan yleensä asiakkaalle.",
              answer: false,
              explain: "“jo maksettua kautta ei tavallisesti hyvitetä.”",
            },
            {
              id: "k17r2q5",
              type: "tf",
              q: "Jos palvelun on tilannut verkossa, yritys voi vaatia, että tilaus irtisanotaan puhelimitse.",
              answer: false,
              explain: "Cancelling must be as easy as ordering: the company “ei voi vaatia, että irtisanominen tehdään puhelimitse tai kirjeellä”.",
            },
            {
              id: "k17r2q6",
              type: "tf",
              q: "Määräaikaisesta sopimuksesta voi päästä eroon ennen kauden loppua vain poikkeustilanteessa.",
              answer: true,
              explain: "Not before the end of the term “ilman erityistä syytä, kuten vakavaa sairautta tai työttömyyttä”.",
            },
            {
              id: "k17r2q7",
              type: "tf",
              q: "Tiliotteella näkyvä nimi ei välttämättä ole sama kuin palvelun nimi.",
              answer: true,
              explain: "“tiliotteella näkyvä veloittajan nimi voi poiketa palvelun nimestä.”",
            },
          ],
        },
        {
          id: "k17r3",
          title: "Tehtävä 3: Tiedote",
          instructions: {
            fi: "Lue tiedote ja vastaa kysymyksiin suomeksi. Vastaa lyhyesti.",
            en: "Read the notice and answer the questions in Finnish. Answer briefly.",
          },
          text: {
            title: "Kotiseudun Pankki tiedottaa: paperiset tunnuslukulistat poistuvat käytöstä 31.3.",
            body:
              "Hyvä asiakkaamme,\n\n" +
              "paperiset tunnuslukulistat poistuvat käytöstä maaliskuun lopussa. Sen jälkeen verkkopankkiin kirjaudutaan ja maksut vahvistetaan Kotiseudun Pankin sovelluksella. " +
              "Jos käytät jo sovellusta, sinun ei tarvitse tehdä mitään. Yritysasiakkaille lähetetään muutoksesta erillinen tiedote.\n\n" +
              "Sovelluksen voi ottaa käyttöön älypuhelimessa tai tabletissa. Lataa sovellus laitteesi sovelluskaupasta ja tunnistaudu ensimmäisellä kerralla tunnuslukulistallasi. " +
              "Jos listasi on kadonnut tai sen tunnusluvut ovat loppuneet, varaa aika konttoriin, jossa otat sovelluksen käyttöön yhdessä asiantuntijan kanssa. " +
              "Ota mukaan voimassa oleva henkilöllisyystodistus. Sovellus toimii myös ulkomailla, kunhan puhelimessa on internetyhteys.\n\n" +
              "Jos sinulla ei ole älypuhelinta, voit tilata erillisen tunnuslukulaitteen. Laite on 70 vuotta täyttäneille maksuton, muilta siitä peritään 15 euron kertamaksu. Laite toimitetaan postitse noin viikon kuluessa tilauksesta.\n\n" +
              "Muistutamme, ettei pankki koskaan lähetä tekstiviestejä tai sähköposteja, joissa on linkki verkkopankkiin. Älä myöskään anna sovelluksen PIN-koodia kenellekään, " +
              "edes pankin työntekijälle.\n\n" +
              "Asiakaspalvelumme palvelee puhelimitse arkisin klo 8–20. Maaliskuun ajan palvelemme poikkeuksellisesti myös lauantaisin klo 10–16, koska odotamme muutoksen vuoksi " +
              "tavallista enemmän yhteydenottoja. Autamme mielellämme kaikissa muutokseen liittyvissä kysymyksissä.",
          },
          questions: [
            {
              id: "k17r3q1",
              type: "open",
              q: "Kenen ei tarvitse tehdä muutoksen vuoksi mitään?",
              accept: ["niiden, jotka käyttävät jo sovellusta", "sovelluksen käyttäjien", "jos käyttää jo pankin sovellusta"],
              keyNote: "Customers who already use the bank's app.",
              explain: "“Jos käytät jo sovellusta, sinun ei tarvitse tehdä mitään.”",
            },
            {
              id: "k17r3q2",
              type: "open",
              q: "Mitä asiakkaan pitää tehdä, jos hänen tunnuslukulistansa on kadonnut?",
              hint: "(2 asiaa)",
              accept: [
                "varata aika konttoriin ja ottaa mukaan henkilöllisyystodistus",
                "mennä ajanvarauksella konttoriin henkilökortin kanssa",
                "varata aika pankkiin, ottaa passi tai henkilökortti mukaan",
              ],
              keyNote: "Both: book an appointment at a branch (to set up the app with an expert) AND bring a valid ID document.",
              explain: "“varaa aika konttoriin … Ota mukaan voimassa oleva henkilöllisyystodistus.”",
            },
            {
              id: "k17r3q3",
              type: "open",
              q: "Paljonko tunnuslukulaite maksaa?",
              hint: "(2 asiaa)",
              accept: [
                "70 vuotta täyttäneille ilmainen, muille 15 euroa",
                "yli 70-vuotiaille maksuton ja muille viisitoista euroa",
                "ilmainen eläkeikäisille yli 70, muuten 15 €",
              ],
              keyNote: "Both: free for those aged 70 or over; others pay a one-off fee of 15 euros.",
              explain: "“Laite on 70 vuotta täyttäneille maksuton, muilta siitä peritään 15 euron kertamaksu.”",
            },
            {
              id: "k17r3q4",
              type: "open",
              q: "Miksi asiakaspalvelu on maaliskuussa auki myös lauantaisin?",
              accept: [
                "koska yhteydenottoja odotetaan tavallista enemmän",
                "muutoksen takia odotetaan paljon puheluita",
                "koska asiakkaat soittavat muutoksen vuoksi enemmän",
              ],
              keyNote: "Because, owing to the change, more contacts (calls) than usual are expected.",
              explain: "“koska odotamme muutoksen vuoksi tavallista enemmän yhteydenottoja.”",
            },
          ],
        },
        {
          id: "k17r4",
          title: "Tehtävä 4: Kolumni",
          instructions: {
            fi: "Lue kolumni ja vastaa kysymyksiin. Valitse oikea vaihtoehto.",
            en: "Read the column and answer the questions. Choose the correct option.",
          },
          text: {
            title: "Porakone, jota kukaan ei tarvitse – Laura Heikkilä",
            body:
              "Usein toistetun väitteen mukaan tavallista porakonetta käytetään sen elinaikana keskimäärin vain noin kymmenen minuuttia. Luku on tullut tutuksi jakamistalouden " +
              "puolestapuhujien esityksistä, ja minäkin olen toistanut sitä illanistujaisissa monta kertaa. En tiedä, pitääkö se tarkalleen paikkansa, mutta ajatus osuu kohdalleen: " +
              "omistamme valtavasti tavaraa, jota käytämme harvoin. Kaapit ovat täynnä esineitä, joiden olemassaolon olemme ehtineet unohtaa.\n\n" +
              "Viime keväänä päätin kokeilla, pystyisinkö elämään vuoden ostamatta mitään, minkä voi lainata tai vuokrata. Tavoitteena ei ollut niinkään säästää kuin selvittää, kuinka paljon omistamisesta on oikeasti hyötyä. Liityin taloyhtiömme lainausrinkiin, jossa asukkaat jakavat " +
              "työkaluja, retkeilyvarusteita ja juhla-astioita. Kirjaston tavaralainaamosta hain ompelukoneen ja lumikengät. Kesämatkalle vuokrasimme auton sovelluksen kautta " +
              "naapurikorttelin perheeltä.\n\n" +
              "Kokemukset ovat olleet enimmäkseen hyviä. Säästin arvioni mukaan useita satoja euroja, ja eteisen komerossa on ensimmäistä kertaa tilaa. Eniten minut yllätti se, " +
              "kuinka paljon lainaaminen lisäsi juttelua naapureiden kanssa. Kun haet toisen ihmisen ruohonleikkurin, et voi vain ottaa sitä ja lähteä.\n\n" +
              "Täydellistä se ei silti ollut. Jakaminen vaatii suunnittelua, eikä se sovi kaikkeen. Kun lapsi oksensi lauantaiyönä sängylle, ei paljon lohduttanut, että taloyhtiön " +
              "märkäimuri olisi ollut vapaana maanantaina. Kerran lainaamani poran akku oli tyhjä, ja kerran palautin teltan, jonka kiinnityslenkki oli katkennut käytössäni. " +
              "Maksoin korjauksen, mutta minua nolotti koko viikon.\n\n" +
              "Lainaamiseen liittyi myös yllättävän paljon näkymätöntä kirjanpitoa. Kun naapuri oli lainannut minulle peräkärryään kolme kertaa, minusta tuntui, " +
              "että minun piti keksiä jotain vastineeksi. Leivoin pullaa ja tarjouduin kastelemaan hänen kukkansa loman ajaksi. Kukaan ei sitä vaatinut, mutta velka painoi silti.\n\n" +
              "Isompi kysymys koskee kuitenkin sitä, mitä jakamistaloudella oikeastaan tarkoitetaan. Monet niin sanotut jakamispalvelut ovat todellisuudessa kansainvälisiä yrityksiä, " +
              "jotka välittävät asuntoja, autoja tai kyytejä ja ottavat jokaisesta kaupasta oman osuutensa. Kyytipalvelujen kuljettajat eivät useinkaan ole työsuhteessa, joten heillä ei ole esimerkiksi palkallista sairauslomaa. On myös vaikea sanoa, vähentävätkö nämä palvelut kulutusta lainkaan. Lyhytaikainen " +
              "asuntovuokraus on esimerkiksi joissakin kaupungeissa vähentänyt vakituisille asukkaille tarjolla olevia asuntoja ja nostanut vuokria.\n\n" +
              "Minua kiinnostaa enemmän jakaminen, jossa raha ei ole pääasia. Naapureiden kesken, kirjastossa tai taloyhtiössä toimiva lainaaminen perustuu luottamukseen, " +
              "ja juuri siksi uskon sen toimivan parhaiten pienessä mittakaavassa.\n\n" +
              "Kokeiluvuoteni päättyi syyskuussa. Sen jälkeen ostin yhden asian: oman porakoneen. Taulut ja hyllyt tuntuivat nimittäin putoavan seinältä aina sunnuntai-iltana, " +
              "kun lainaamo oli kiinni. Porakonetta on käytetty tähän mennessä noin kymmenen minuuttia. En kadu hetkeäkään.",
          },
          questions: [
            {
              id: "k17r4q1",
              type: "mc",
              q: "Mitä kirjoittaja ajattelee porakoneen käyttöajasta kertovasta luvusta?",
              options: [
                "Hän on tarkistanut luvun ja todennut sen oikeaksi.",
                "Hän ei ole varma sen tarkkuudesta, mutta pitää ajatusta osuvana.",
                "Hän pitää sitä liioitteluna, joka antaa väärän kuvan.",
              ],
              answer: 1,
              explain: "“En tiedä, pitääkö se tarkalleen paikkansa, mutta ajatus osuu kohdalleen.”",
            },
            {
              id: "k17r4q2",
              type: "mc",
              q: "Mikä kokeilussa yllätti kirjoittajaa eniten?",
              options: [
                "Hän säästi rahaa vähemmän kuin oli odottanut.",
                "Kaikkia tavaroita sai lainata ilmaiseksi.",
                "Lainaaminen lisäsi yhteydenpitoa naapureihin.",
              ],
              answer: 2,
              explain: "“Eniten minut yllätti se, kuinka paljon lainaaminen lisäsi juttelua naapureiden kanssa.” She saved several hundred euros; the car was rented, not free.",
            },
            {
              id: "k17r4q3",
              type: "mc",
              q: "Mitä kirjoittaja haluaa havainnollistaa märkäimuriesimerkillä?",
              options: [
                "Lainattavaa tavaraa ei aina saa silloin, kun sitä yllättäen tarvitsee.",
                "Taloyhtiön lainausrinki oli huonosti järjestetty.",
                "Lainatut tavarat ovat usein huonossa kunnossa.",
              ],
              answer: 0,
              explain: "The example follows “Jakaminen vaatii suunnittelua, eikä se sovi kaikkeen” — the vacuum would have been available only on Monday.",
            },
            {
              id: "k17r4q4",
              type: "mc",
              q: "Miten kirjoittaja suhtautuu kansainvälisiin jakamispalveluihin?",
              options: [
                "Hän pitää niitä jakamistalouden toimivimpana muotona.",
                "Hän epäilee, vähentävätkö ne kulutusta ollenkaan.",
                "Hän vaatii, että ne kiellettäisiin kaupungeissa.",
              ],
              answer: 1,
              explain: "“On myös vaikea sanoa, vähentävätkö nämä palvelut kulutusta lainkaan.” She prefers sharing where money is not the main thing, but does not demand a ban.",
            },
            {
              id: "k17r4q5",
              type: "mc",
              q: "Mikä seuraavista on kolumnissa mielipide eikä tosiasia?",
              options: [
                "Kirjoittaja lainasi ompelukoneen kirjaston tavaralainaamosta.",
                "Kokeiluvuosi päättyi syyskuussa.",
                "Lainaaminen toimii parhaiten pienessä mittakaavassa.",
              ],
              answer: 2,
              explain: "“uskon sen toimivan parhaiten pienessä mittakaavassa” is her belief. The other two are reported events.",
            },
            {
              id: "k17r4q6",
              type: "mc",
              q: "Miksi kirjoittaja osti lopulta oman porakoneen?",
              options: [
                "Poraa tarvittiin usein yllättäen silloin, kun lainaamo oli suljettu.",
                "Lainattujen porien akut olivat aina tyhjiä.",
                "Hän halusi lainata omaa poraansa naapureille.",
              ],
              answer: 0,
              explain: "Pictures and shelves fell “aina sunnuntai-iltana, kun lainaamo oli kiinni.” Only once was a borrowed drill's battery empty.",
            },
          ],
        },
        {
          id: "k17r5",
          title: "Tehtävä 5: Mielipidekirjoitus",
          instructions: {
            fi: "Lue mielipidekirjoitus. Ovatko väitteet oikein vai väärin?",
            en: "Read the letter to the editor. Are the statements true (oikein) or false (väärin)?",
          },
          text: {
            title: "Pakkaus pieneni, hinta ei",
            body:
              "Ostan joka viikko samaa kahvia samasta kaupasta. Viime kuussa paketti tuntui kassalla jotenkin kevyemmältä. Kotona tarkistin asian: pakkauksessa oli enää " +
              "450 grammaa kahvia, kun aiemmin siinä oli ollut 500 grammaa. Hinta oli pysynyt täsmälleen samana, ja pakkaus näytti muuten samalta kuin ennenkin.\n\n" +
              "Ilmiöllä on jo nimikin, kutistusinflaatio. Valmistajat perustelevat sitä raaka-aineiden ja kuljetusten kallistumisella. Ymmärrän, että tuotantokustannukset " +
              "ovat nousseet, enkä vaadi, että hinnat pysyisivät ikuisesti ennallaan. Kuluttajana haluan kuitenkin tietää, mistä maksan. Suora hinnankorotus olisi minusta " +
              "rehellisempi kuin se, että tuotetta vähennetään vähin äänin.\n\n" +
              "Laki velvoittaa kaupan ilmoittamaan hyllyssä myös yksikköhinnan eli esimerkiksi kilohinnan. Siitä muutoksen voi periaatteessa huomata. Käytännössä harva vertaa " +
              "kilohintoja viikosta toiseen, ja hintalaput ovat usein niin pieniä, että ilman silmälaseja niitä on vaikea lukea.\n\n" +
              "Ehdotan, että pakkauskoon pienentämisestä kerrottaisiin kaupan hyllyssä selvästi esimerkiksi kolmen kuukauden ajan. Joissakin Euroopan maissa tällainen " +
              "käytäntö on jo otettu käyttöön. Siihen asti neuvon kaikkia: katsokaa kilohintaa, älkää pakkauksen kokoa.\n\n" +
              "Pirjo Lindholm, Kuopio",
          },
          questions: [
            {
              id: "k17r5q1",
              type: "tf",
              q: "Kirjoittaja huomasi muutoksen ensin kaupan hyllyn hintalapusta.",
              answer: false,
              explain: "The packet felt lighter at the checkout, and she checked it at home: “Kotona tarkistin asian.”",
            },
            {
              id: "k17r5q2",
              type: "tf",
              q: "Kahvipaketin hinta nousi samalla, kun sen koko pieneni.",
              answer: false,
              explain: "“Hinta oli pysynyt täsmälleen samana.”",
            },
            {
              id: "k17r5q3",
              type: "tf",
              q: "Kirjoittaja hyväksyy sen, että hinnat voivat nousta.",
              answer: true,
              explain: "“enkä vaadi, että hinnat pysyisivät ikuisesti ennallaan.”",
            },
            {
              id: "k17r5q4",
              type: "tf",
              q: "Kirjoittajan mielestä hinnan nostaminen olisi rehellisempää kuin pakkauksen pienentäminen.",
              answer: true,
              explain: "“Suora hinnankorotus olisi minusta rehellisempi kuin se, että tuotetta vähennetään vähin äänin.”",
            },
            {
              id: "k17r5q5",
              type: "tf",
              q: "Kaupan ei tarvitse ilmoittaa tuotteen kilohintaa.",
              answer: false,
              explain: "“Laki velvoittaa kaupan ilmoittamaan hyllyssä myös yksikköhinnan eli esimerkiksi kilohinnan.”",
            },
            {
              id: "k17r5q6",
              type: "tf",
              q: "Kirjoittajan ehdottamaa käytäntöä noudatetaan jo joissakin maissa.",
              answer: true,
              explain: "“Joissakin Euroopan maissa tällainen käytäntö on jo otettu käyttöön.”",
            },
          ],
        },
        {
          id: "k17r6",
          title: "Tehtävä 6: Ohje",
          instructions: {
            fi: "Lue ohje ja vastaa kysymyksiin suomeksi. Vastaa lyhyesti.",
            en: "Read the guide and answer the questions in Finnish. Answer briefly.",
          },
          text: {
            title: "Näin teet kotitaloudellesi budjetin",
            body:
              "Budjetti auttaa näkemään, mihin rahat kuluvat, ja varautumaan yllättäviin menoihin. Sen tekeminen ei vaadi erityisiä taitoja, vain vähän aikaa ja rehellisyyttä.\n\n" +
              "1. Kirjaa ylös kaikki kuukauden tulot: palkka, etuudet ja muut säännölliset tulot. Käytä nettosummia eli sitä, mitä tilillesi todella tulee verojen jälkeen.\n" +
              "2. Listaa kiinteät menot, kuten vuokra tai vastike, sähkö, vakuutukset, lainanlyhennykset ja puhelinlasku. Muista myös menot, jotka maksetaan harvemmin kuin " +
              "kerran kuussa, esimerkiksi vuosittainen autovakuutus. Jaa ne kuukausille, niin ne eivät tule yllätyksenä.\n" +
              "3. Seuraa muuttuvia menoja, kuten ruokaa, vaatteita ja vapaa-aikaa, vähintään kuukauden ajan. Moni yllättyy siitä, kuinka paljon pienet ostokset maksavat yhteensä.\n" +
              "4. Vähennä menot tuloista. Jos rahaa jää jäljelle, siirrä osa siitä säästöön heti palkkapäivänä eikä vasta kuun lopussa. Asiantuntijat suosittelevat, " +
              "että puskurirahasto kattaisi vähintään kolmen kuukauden välttämättömät menot.\n\n" +
              "Jos menot ovat jatkuvasti tuloja suuremmat, älä ota kulutusluottoa aukon paikkaamiseen, vaan selvitä, mistä voit karsia. Maksutonta apua saat " +
              "talous- ja velkaneuvonnasta. Sinne voi ottaa yhteyttä jo ennen kuin laskuja on jäänyt maksamatta.",
          },
          questions: [
            {
              id: "k17r6q1",
              type: "open",
              q: "Mitkä tulot budjettiin merkitään?",
              accept: [
                "nettotulot eli se, mitä tilille tulee verojen jälkeen",
                "summat verojen jälkeen",
                "nettopalkka ja muut tulot verojen jälkeen",
              ],
              keyNote: "Net amounts: what actually arrives in the account after taxes (salary, benefits, other regular income).",
              explain: "“Käytä nettosummia eli sitä, mitä tilillesi todella tulee verojen jälkeen.”",
            },
            {
              id: "k17r6q2",
              type: "open",
              q: "Miten budjetissa käsitellään menoja, jotka maksetaan esimerkiksi kerran vuodessa?",
              accept: ["ne jaetaan kuukausille", "jaetaan kuukausittaisiin osiin", "summa jaetaan kahdellatoista"],
              keyNote: "They are divided over the months so that they do not come as a surprise.",
              explain: "“Jaa ne kuukausille, niin ne eivät tule yllätyksenä.”",
            },
            {
              id: "k17r6q3",
              type: "open",
              q: "Mitä ohjeessa neuvotaan tekemään, jos menot ovat jatkuvasti tuloja suuremmat?",
              hint: "(2 asiaa)",
              accept: [
                "selvittää, mistä voi karsia, ja ottaa yhteyttä talous- ja velkaneuvontaan",
                "etsiä säästökohteita ja hakea apua velkaneuvonnasta, ei ottaa kulutusluottoa",
                "karsia menoja, kysyä apua talousneuvonnasta",
              ],
              keyNote: "Two of: find out where to cut costs; contact the (free) financial and debt counselling; do NOT take consumer credit to fill the gap.",
              explain: "“älä ota kulutusluottoa aukon paikkaamiseen, vaan selvitä, mistä voit karsia. Maksutonta apua saat talous- ja velkaneuvonnasta.”",
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
          id: "k17w1",
          title: "Tehtävä 1: Reklamaatio",
          instructions: { fi: "Kirjoita viesti. Kirjoita noin 80–150 sanaa.", en: "Write a message of about 80–150 words." },
          prompt:
            "Tilasit Soivo-musiikkipalvelun kuukauden ilmaisen kokeilujakson ja peruit tilauksen ennen jakson päättymistä. Silti pankkikortiltasi on veloitettu kahtena kuukautena " +
            "14,99 euroa. Kirjoita sähköposti palvelun asiakaspalveluun.",
          bullets: [
            "Kerro, kuka olet ja mitä viestisi koskee.",
            "Kerro, milloin ja miten peruit tilauksen.",
            "Kerro, mitä tililläsi on sen jälkeen tapahtunut.",
            "Kerro, mitä haluat yrityksen tekevän.",
            "Kerro, mitä aiot tehdä, jos asia ei ratkea.",
            "Kerro lisäksi ainakin kaksi muuta asiaa.",
            "Muista aloitus ja lopetus.",
          ],
          promptEn:
            "You ordered a one-month free trial of a music service and cancelled before it ended, but your card has been charged 14.99 € in two months. Email customer service: say who you are and what the message is about, when and how you cancelled, what has happened on your account, what you want the company to do, what you will do if the matter is not resolved, and add at least two more points of your own.",
          register: "formal complaint email to a company: Hyvä vastaanottaja / Hei … Ystävällisin terveisin + full name (customer number/email); firm but polite, conditional requests (pyytäisin, toivoisin)",
          minWords: 80,
          maxWords: 150,
        },
        {
          id: "k17w2",
          title: "Tehtävä 2: Viesti ystävälle",
          instructions: { fi: "Kirjoita viesti. Kirjoita noin 60–120 sanaa.", en: "Write a message of about 60–120 words." },
          prompt:
            "Sait viime viikolla tekstiviestin, joka näytti tulevan pankistasi. Olit vähällä avata viestissä olleen linkin. Kirjoita ystävällesi Jarille viesti.",
          bullets: [
            "Kerro, mitä tapahtui ja miten huomasit, että kyse oli huijauksesta.",
            "Kerro, mitä teit sen jälkeen.",
            "Varoita Jaria ja anna hänelle jokin neuvo.",
            "Ehdota, että auttaisitte yhdessä vanhempianne tai isovanhempianne tunnistamaan huijauksia.",
            "Muista aloitus ja lopetus.",
          ],
          promptEn:
            "Last week you got a text message that seemed to come from your bank, and you nearly opened the link. Write to your friend Jari: tell what happened and how you realised it was a scam, what you did afterwards, warn Jari and give him advice, and suggest helping your parents or grandparents together to recognise scams.",
          register: "informal message to a friend: Moi Jari! / Hei Jari! … Terkuin / Nähdään! + first name; past tense narration, colloquial tone allowed",
          minWords: 60,
          maxWords: 120,
        },
        {
          id: "k17w3",
          title: "Tehtävä 3: Mielipideteksti",
          instructions: { fi: "Kirjoita mielipideteksti. Kirjoita noin 100–180 sanaa.", en: "Write an opinion text of about 100–180 words." },
          prompt:
            "Kuluttajalehden verkkosivuilla keskustellaan raha-asioista. Valitse aihe A tai B ja kirjoita mielipidekirjoitus.",
          bullets: [
            "A. Yhä useampi kauppa ja kahvila ei enää hyväksy käteistä. Pitäisikö käteisellä voida maksaa kaikkialla?",
            "B. Pitäisikö koulussa opettaa raha-asioita, esimerkiksi budjetin tekemistä ja lainojen ottamista, omana oppiaineenaan?",
            "Kerro, mistä on kyse ja mitä mieltä olet asiasta. Perustele mielipiteesi ainakin kolmella tavalla.",
          ],
          promptEn:
            "A consumer magazine's website discusses money matters. Choose A (more and more shops and cafés no longer accept cash — should cash be accepted everywhere?) or B (should money matters such as budgeting and taking loans be a separate school subject?). Say what the issue is and what you think, and justify your opinion in at least three ways.",
          register: "opinion text for a magazine website: neutral written style, a clear opening statement, linked arguments (ensinnäkin, lisäksi, toisaalta, siksi), a conclusion; no greeting needed, may end with name/signature",
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
        "Tässä osakokeessa kuuntelet erilaisia puhuttuja tekstejä: haastattelun, keskustelun kaupassa, puhelun, radiouutisen sekä lyhyitä mainoksia ja tiedotteita. Osakokeessa on viisi tehtävää. Ennen jokaista tekstiä sinulla on aikaa lukea kysymykset. Kuulet jokaisen tekstin kaksi kertaa. Pitkät tekstit kuulet toisella kerralla osissa, ja osien välissä on aikaa vastata. Äänite etenee automaattisesti, etkä voi pysäyttää sitä. Vastaa avoimiin kysymyksiin suomeksi ja lyhyesti.",
      aika: "Osakoe kestää noin 40 minuuttia.",
      tasks: [
        {
          id: "k17l1",
          title: "Tehtävä 1: Haastattelu",
          instructions: {
            fi: "Kuulet haastattelun kaksi kertaa. Lue ensin kysymykset. Valitse oikea vaihtoehto.",
            en: "You will hear an interview twice. Read the questions first. Choose the correct option.",
          },
          situation: "Radiossa haastatellaan talous- ja velkaneuvoja Sanna Virtasta nuorten veloista.",
          plays: 2,
          rate: 1.0,
          lines: [
            {
              speaker: "Toimittaja",
              text: "Studiossa on talous- ja velkaneuvoja Sanna Virtanen. Sanna, teidän asiakkaissa on yhä enemmän nuoria. Miksi?",
            },
            {
              speaker: "Sanna",
              text:
                "No, se on valitettavasti totta. Viisi vuotta sitten alle kolmekymppisiä oli meidän asiakkaista ehkä joka kymmenes, nyt jo melkein joka neljäs. " +
                "Ja tyypillisesti heidän veloissa ei oo kyse mistään isosta lainasta, vaan monesta pienestä.",
            },
            { speaker: "Toimittaja", text: "Millaisista pienistä veloista?" },
            {
              speaker: "Sanna",
              text:
                "Esimerkiksi niistä maksa myöhemmin -palveluista verkkokaupan kassalla. Ostat vaikka kengät, ja maksu siirtyy kuukauden päähän. Se tuntuu ilmaiselta, " +
                "mutta kun samaan aikaan on viisi tai kuusi tällaista, kokonaisuus katoaa. Ja jos yksikin erä myöhästyy, tulee heti muistutusmaksuja.",
            },
            { speaker: "Toimittaja", text: "Hoitavatko nuoret sitten raha-asioitaan huonommin kuin vanhemmat ikäpolvet?" },
            {
              speaker: "Sanna",
              text:
                "Ei, ei ne nuoret oo yhtään huolimattomampia kuin muut. Ero on siinä, että ostaminen on niin helppoa. Ennen piti mennä kauppaan ja kaivaa lompakko esiin. " +
                "Nyt ostos syntyy puhelimella kahdella napautuksella, vaikka keskellä yötä.",
            },
            { speaker: "Toimittaja", text: "Mitä tapahtuu, jos laskut jää maksamatta?" },
            {
              speaker: "Sanna",
              text:
                "Lasku menee perintään, ja perintäkulut voi helposti tuplata alkuperäisen summan. Jos velkaa ei vieläkään makseta, siitä voi seurata maksuhäiriömerkintä. " +
                "Se on voimassa vuosia, ja sen kanssa on tosi vaikea saada vuokra-asuntoa tai edes puhelinliittymää.",
            },
            { speaker: "Toimittaja", text: "Mitä nuoren kannattaa tehdä, jos hän huomaa, etteivät rahat riitä?" },
            {
              speaker: "Sanna",
              text:
                "Tärkeintä on toimia ajoissa. Kannattaa ottaa yhteyttä velkojaan jo ennen eräpäivää ja pyytää lisäaikaa tai maksusuunnitelmaa. " +
                "Moni yritys suostuu siihen, kun asiasta kerrotaan etukäteen. Ja meille saa aina soittaa, palvelu on maksuton ja luottamuksellinen.",
            },
            { speaker: "Toimittaja", text: "Pitäisikö maksa myöhemmin -palveluja rajoittaa lailla?" },
            {
              speaker: "Sanna",
              text:
                "Musta ainakin pitäis aina tarkistaa, onko ostajalla oikeasti varaa maksaa. Nyt sitä ei pienissä summissa välttämättä tehdä. " +
                "Mutta pelkkä laki ei riitä. Raha-asioista pitäis puhua kotona ja koulussa paljon enemmän.",
            },
          ],
          questions: [
            {
              id: "k17l1q1",
              type: "mc",
              q: "Miten nuorten osuus velkaneuvonnan asiakkaista on muuttunut viidessä vuodessa?",
              options: [
                "Se on kasvanut noin kymmenesosasta lähes neljäsosaan.",
                "Nuoria on nykyään noin puolet asiakkaista.",
                "Osuus on pysynyt samana, mutta velat ovat kasvaneet.",
              ],
              answer: 0,
              explain: "“ehkä joka kymmenes, nyt jo melkein joka neljäs.”",
            },
            {
              id: "k17l1q2",
              type: "mc",
              q: "Millaisia velkoja nuorilla on Sannan mukaan tyypillisesti?",
              options: ["yksi suuri asuntolaina", "opintolainoja", "monta pientä velkaa"],
              answer: 2,
              explain: "“ei oo kyse mistään isosta lainasta, vaan monesta pienestä.”",
            },
            {
              id: "k17l1q3",
              type: "mc",
              q: "Mikä maksa myöhemmin -palveluissa on Sannan mukaan ongelma?",
              options: [
                "Niiden korot ovat tavallisia lainoja korkeammat.",
                "Kun niitä on monta, kokonaiskuva veloista katoaa.",
                "Niitä voi käyttää vain ulkomaisissa verkkokaupoissa.",
              ],
              answer: 1,
              explain: "“kun samaan aikaan on viisi tai kuusi tällaista, kokonaisuus katoaa.”",
            },
            {
              id: "k17l1q4",
              type: "mc",
              q: "Mikä erottaa nuoret vanhemmista ikäpolvista Sannan mukaan?",
              options: [
                "Ostaminen on heille helpompaa, koska sen voi tehdä puhelimella.",
                "He ovat huolimattomampia raha-asioissaan.",
                "He käyttävät enemmän käteistä.",
              ],
              answer: 0,
              explain: "“ei ne nuoret oo yhtään huolimattomampia … Ero on siinä, että ostaminen on niin helppoa.”",
            },
            {
              id: "k17l1q5",
              type: "mc",
              q: "Mitä Sanna neuvoo tekemään, jos rahat eivät riitä?",
              options: [
                "ottamaan lainaa vanhojen laskujen maksamiseen",
                "odottamaan, että lasku lähetetään perintään",
                "ottamaan yhteyttä velkojaan jo ennen eräpäivää",
              ],
              answer: 2,
              explain: "“Kannattaa ottaa yhteyttä velkojaan jo ennen eräpäivää ja pyytää lisäaikaa tai maksusuunnitelmaa.”",
            },
            {
              id: "k17l1q6",
              type: "mc",
              q: "Mitä mieltä Sanna on maksa myöhemmin -palvelujen rajoittamisesta?",
              options: [
                "Palvelut pitäisi kieltää nuorilta kokonaan.",
                "Lakimuutos voisi auttaa, mutta se ei yksin riitä.",
                "Palveluja ei tarvitse rajoittaa, kunhan nuoret ovat tarkkoja.",
              ],
              answer: 1,
              explain: "Ability to pay should be checked, “Mutta pelkkä laki ei riitä” — money must be discussed at home and school.",
            },
          ],
        },
        {
          id: "k17l2",
          title: "Tehtävä 2: Keskustelu kaupassa",
          instructions: {
            fi: "Kuulet keskustelun kaksi kertaa. Ovatko väitteet oikein vai väärin?",
            en: "You will hear a conversation twice. Are the statements true or false?",
          },
          situation: "Asiakas on ostamassa uutta puhelinta puhelinliikkeestä.",
          plays: 2,
          rate: 1.0,
          lines: [
            { speaker: "Myyjä", text: "Hei, etsitkö jotain tiettyä?" },
            {
              speaker: "Asiakas",
              text: "Joo, mun vanha puhelin hajosi, ja mä tarviin uuden. Mä katoin teidän nettisivuilta tätä mallia. Siinä luki, että se maksaa vain kaksikymmentäyhdeksän euroa kuussa.",
            },
            {
              speaker: "Myyjä",
              text:
                "Ihan oikein. Se hinta edellyttää kuitenkin, että otat samalla meiltä liittymän kahdeksi vuodeksi. Silloin puhelin maksetaan kahdessakymmenessäneljässä erässä, " +
                "ja liittymä maksaa siihen päälle viisitoista euroa kuussa.",
            },
            { speaker: "Asiakas", text: "Ai, eli yhteensä neljäkymmentäneljä euroa kuussa. Paljonko puhelin maksaisi kerralla ostettuna?" },
            {
              speaker: "Myyjä",
              text: "Kuusisataaviisikymmentä euroa. Erissä maksettuna se tulee siis vähän kalliimmaksi, koska siihen sisältyy myös laskutuslisä.",
            },
            {
              speaker: "Asiakas",
              text: "Hmm. Mulla on jo liittymä toisella operaattorilla, ja se maksaa vain kymmenen euroa kuussa. Voinko ostaa pelkän puhelimen osamaksulla?",
            },
            {
              speaker: "Myyjä",
              text:
                "Voit, mutta silloin kuukausierä on vähän isompi, koska liittymäetu jää pois. Toisaalta jos sun nykyinen liittymä on noin halpa, " +
                "kannattaa varmaan pitää se. Se on kokonaisuutena edullisempi.",
            },
            { speaker: "Asiakas", text: "Okei. Entä takuu? Mun edellinen puhelin hajosi heti, kun takuu oli loppunut." },
            {
              speaker: "Myyjä",
              text:
                "Valmistajan takuu on kaksi vuotta. Meiltä voi lisäksi ostaa laiteturvan, joka kattaa myös esimerkiksi pudottamisen tai veden aiheuttamat vahingot. " +
                "Se maksaa kuusi euroa kuussa. Mutta tarkista ensin oma kotivakuutus, koska monessa on jo samanlainen turva.",
            },
            {
              speaker: "Asiakas",
              text: "Hyvä vinkki. Mä taidan maksaa puhelimen kerralla, niin ei tule mitään ylimääräisiä kuluja. Ja mä tarkistan sen vakuutuksen.",
            },
            { speaker: "Myyjä", text: "Selvä. Tällä viikolla saat vielä suojakuoren kaupan päälle." },
          ],
          questions: [
            {
              id: "k17l2q1",
              type: "tf",
              q: "Nettisivuilla mainittu kuukausihinta koskee pelkkää puhelinta ilman liittymää.",
              answer: false,
              explain: "“Se hinta edellyttää kuitenkin, että otat samalla meiltä liittymän kahdeksi vuodeksi.”",
            },
            {
              id: "k17l2q2",
              type: "tf",
              q: "Erissä maksettuna puhelin tulee kalliimmaksi kuin kerralla ostettuna.",
              answer: true,
              explain: "“Erissä maksettuna se tulee siis vähän kalliimmaksi, koska siihen sisältyy myös laskutuslisä.”",
            },
            {
              id: "k17l2q3",
              type: "tf",
              q: "Myyjä suosittelee asiakasta vaihtamaan liittymänsä liikkeen omaan liittymään.",
              answer: false,
              explain: "The seller says the customer's cheap current subscription is “kokonaisuutena edullisempi” — better to keep it.",
            },
            {
              id: "k17l2q4",
              type: "tf",
              q: "Laiteturva korvaa myös vahingot, jotka käyttäjä aiheuttaa itse vahingossa.",
              answer: true,
              explain: "It covers e.g. “pudottamisen tai veden aiheuttamat vahingot”.",
            },
            {
              id: "k17l2q5",
              type: "tf",
              q: "Myyjä kehottaa asiakasta selvittämään, onko hänellä jo vastaava turva.",
              answer: true,
              explain: "“tarkista ensin oma kotivakuutus, koska monessa on jo samanlainen turva.”",
            },
            {
              id: "k17l2q6",
              type: "tf",
              q: "Asiakas päättää maksaa puhelimen osamaksulla.",
              answer: false,
              explain: "“Mä taidan maksaa puhelimen kerralla, niin ei tule mitään ylimääräisiä kuluja.”",
            },
          ],
        },
        {
          id: "k17l3",
          title: "Tehtävä 3: Puhelu pankkiin",
          instructions: {
            fi: "Kuulet puhelun kaksi kertaa. Lue ensin kysymykset. Vastaa lyhyesti suomeksi.",
            en: "You will hear a phone call twice. Read the questions first. Answer briefly in Finnish.",
          },
          situation: "Fatima soittaa pankin korttipalveluun.",
          plays: 2,
          rate: 1.0,
          lines: [
            { speaker: "Pankkivirkailija", text: "Kotiseudun Pankin korttipalvelu, Mikko puhelimessa." },
            {
              speaker: "Fatima",
              text:
                "Hei, täällä Fatima Ali. Mä huomasin just pankkisovelluksesta, että mun kortilla on tehty kolme ostosta jostain ulkomaisesta verkkokaupasta. " +
                "Yhteensä melkein neljäsataa euroa. Mä en oo ostanut mitään sellaista.",
            },
            {
              speaker: "Pankkivirkailija",
              text: "Ikävä kuulla. Suljetaan ensin kortti, ettei sillä voi tehdä enempää ostoksia. Onko kortti nyt teillä tallessa?",
            },
            { speaker: "Fatima", text: "On, se on mun lompakossa. Siksi mä en ymmärrä, miten tää on mahdollista." },
            {
              speaker: "Pankkivirkailija",
              text:
                "Korttitietoja voidaan varastaa niin, ettei itse korttia viedä. Oletteko viime aikoina syöttäneet korttitietoja johonkin uuteen paikkaan " +
                "tai vastanneet viestiin, jossa pyydettiin maksamaan jotain?",
            },
            {
              speaker: "Fatima",
              text:
                "Hmm… itse asiassa joo. Mä sain viime viikolla tekstiviestin, joka näytti tulevan pakettipalvelusta. Siinä pyydettiin maksamaan kahden euron tullimaksu, ja mä maksoin sen kortilla.",
            },
            {
              speaker: "Pankkivirkailija",
              text: "Se selittää varmaan asian. Se oli todennäköisesti huijaus. No niin, nyt kortti on suljettu. Uusi kortti tulee postissa noin viikon päästä.",
            },
            { speaker: "Fatima", text: "Entä ne rahat? Saanko mä ne takaisin?" },
            {
              speaker: "Pankkivirkailija",
              text:
                "Teidän pitää tehdä meille reklamaatio eli kirjallinen ilmoitus jokaisesta ostoksesta, jota ette ole tehneet. Sen voi tehdä sovelluksessa. " +
                "Lisäksi tehkää rikosilmoitus poliisille, sen voi tehdä verkossa. Kun molemmat on tehty, me selvitetään asia. Yleensä rahat palautetaan tilille muutamassa viikossa.",
            },
            { speaker: "Fatima", text: "Okei. Mutta miten mä maksan ostokset sillä aikaa, kun mulla ei oo korttia?" },
            {
              speaker: "Pankkivirkailija",
              text:
                "Puhelimen mobiilimaksukin on nyt pois käytöstä, koska se on sidottu samaan korttiin. Voitte kuitenkin nostaa käteistä konttorista, kunhan otatte henkilöllisyystodistuksen mukaan.",
            },
          ],
          questions: [
            {
              id: "k17l3q1",
              type: "open",
              q: "Miksi Fatima soittaa pankkiin?",
              accept: [
                "hänen kortillaan on tehty ostoksia, joita hän ei ole tehnyt",
                "kortilla on kolme vierasta ostosta ulkomaisesta verkkokaupasta",
                "joku on käyttänyt hänen korttiaan",
              ],
              keyNote: "Her card has been used for purchases she did not make (three purchases from a foreign online shop, almost 400 €).",
              explain: "“mun kortilla on tehty kolme ostosta jostain ulkomaisesta verkkokaupasta … Mä en oo ostanut mitään sellaista.”",
            },
            {
              id: "k17l3q2",
              type: "open",
              q: "Miten Fatiman korttitiedot todennäköisesti päätyivät huijareille?",
              accept: [
                "hän maksoi tekstiviestissä pyydetyn tullimaksun kortilla",
                "hän vastasi huijausviestiin ja maksoi kahden euron maksun",
                "valepakettiviestin kautta",
              ],
              keyNote: "She paid a 2 € 'customs fee' by card after a fake text message that seemed to come from a parcel service.",
              explain: "“Siinä pyydettiin maksamaan kahden euron tullimaksu, ja mä maksoin sen kortilla.” — “Se oli todennäköisesti huijaus.”",
            },
            {
              id: "k17l3q3",
              type: "open",
              q: "Mitä Fatiman pitää tehdä saadakseen rahansa takaisin?",
              hint: "(2 asiaa)",
              accept: [
                "tehdä pankille reklamaatio ja poliisille rikosilmoitus",
                "kirjallinen ilmoitus pankille sovelluksessa ja rikosilmoitus verkossa",
                "reklamaatio, rikosilmoitus",
              ],
              keyNote: "Both: a written complaint (reklamaatio) to the bank about each purchase AND a police report (rikosilmoitus).",
              explain: "“Teidän pitää tehdä meille reklamaatio … Lisäksi tehkää rikosilmoitus poliisille.”",
            },
            {
              id: "k17l3q4",
              type: "open",
              q: "Miten Fatima voi saada rahaa käyttöönsä ennen uuden kortin tuloa?",
              accept: [
                "nostamalla käteistä konttorista henkilöllisyystodistuksella",
                "hän voi nostaa rahaa pankin konttorista",
                "käymällä konttorissa henkilökortin kanssa",
              ],
              keyNote: "By withdrawing cash at a branch, bringing an ID. Mobile payment does not work because it is linked to the same card.",
              explain: "“Voitte kuitenkin nostaa käteistä konttorista, kunhan otatte henkilöllisyystodistuksen mukaan.”",
            },
          ],
        },
        {
          id: "k17l4",
          title: "Tehtävä 4: Radiouutinen",
          instructions: {
            fi: "Kuulet uutisen kaksi kertaa. Lue ensin kysymykset. Valitse oikea vaihtoehto.",
            en: "You will hear a news report twice. Read the questions first. Choose the correct option.",
          },
          situation: "Kuulet paikallisradiosta uutisen.",
          plays: 2,
          rate: 1.0,
          lines: [
            {
              speaker: "Uutistenlukija",
              text:
                "Lahdenrannan uudelle asuinalueelle tulee ensi keväänä kaksikymmentä yhteiskäyttöautoa. Kaupunki ja rakennusyhtiöt ovat sopineet, että alueen kerrostaloihin " +
                "rakennetaan tavallista vähemmän pysäköintipaikkoja. Niiden sijaan asukkaat voivat varata yhteiskäyttöauton sovelluksella ja maksaa käytöstä tunti- ja kilometrihinnan.",
            },
            {
              speaker: "Uutistenlukija",
              text:
                "Kaupungin mukaan yksi yhteiskäyttöauto voi korvata jopa kymmenen yksityisautoa. Yksi pysäköintipaikka voi maksaa uudessa kerrostalossa kymmeniä tuhansia euroja. " +
                "Koska paikkoja rakennetaan vähemmän, asuntojen hinnat jäävät alueella arviolta viisi prosenttia alhaisemmiksi kuin vastaavissa uusissa kohteissa. " +
                "Pysäköintipaikkojen tilalle pihoille rakennetaan leikkipaikkoja ja viljelylaatikoita.",
            },
            {
              speaker: "Uutistenlukija",
              text:
                "Kaikki eivät usko kokeiluun. Asukasyhdistys pelkää, että autot ovat varattuina juuri silloin, kun niitä tarvitaan eniten, esimerkiksi perjantai-iltaisin " +
                "ja juhlapyhinä. Yhdistyksen mukaan alueelle muuttaa paljon lapsiperheitä, joille oma auto on usein välttämätön. Lisäksi pelätään, että autoja aletaan pysäköidä lähikaduille, kun pihoilla ei ole tilaa.",
            },
            {
              speaker: "Uutistenlukija",
              text:
                "Kaupunki lupaa seurata autojen käyttöä ensimmäisen vuoden ajan. Jos autoja ei riitä, niitä lisätään. Lisäksi alueen asukkaat saavat ensimmäisenä vuonna " +
                "joukkoliikenteen kausilipun puoleen hintaan. Kokemuksia aiotaan hyödyntää myös muiden uusien asuinalueiden suunnittelussa.",
            },
          ],
          questions: [
            {
              id: "k17l4q1",
              type: "mc",
              q: "Mitä uudella asuinalueella tehdään toisin kuin tavallisesti?",
              options: [
                "Asukkaille ei rakenneta lainkaan pysäköintipaikkoja.",
                "Pysäköintipaikkoja rakennetaan tavallista vähemmän.",
                "Yksityisautot kielletään alueella kokonaan.",
              ],
              answer: 1,
              explain: "“rakennetaan tavallista vähemmän pysäköintipaikkoja” — fewer, not none.",
            },
            {
              id: "k17l4q2",
              type: "mc",
              q: "Miten yhteiskäyttöauton käytöstä maksetaan?",
              options: [
                "käytetyn ajan ja ajettujen kilometrien mukaan",
                "kiinteällä kuukausimaksulla",
                "osana asumiskuluja",
              ],
              answer: 0,
              explain: "Residents “maksaa käytöstä tunti- ja kilometrihinnan.”",
            },
            {
              id: "k17l4q3",
              type: "mc",
              q: "Miksi asunnot ovat alueella edullisempia kuin muissa uusissa kohteissa?",
              options: [
                "Kaupunki tukee alueen asuntojen hintoja.",
                "Alue sijaitsee kaukana keskustasta.",
                "Kalliita pysäköintipaikkoja rakennetaan vähemmän.",
              ],
              answer: 2,
              explain: "A parking space can cost tens of thousands of euros, “Koska paikkoja rakennetaan vähemmän, asuntojen hinnat jäävät … alhaisemmiksi.”",
            },
            {
              id: "k17l4q4",
              type: "mc",
              q: "Mikä huolestuttaa asukasyhdistystä?",
              options: [
                "Autoja ei ole vapaana silloin, kun niitä tarvitaan eniten.",
                "Autojen käyttö on liian kallista lapsiperheille.",
                "Sovellusta on vaikea käyttää.",
              ],
              answer: 0,
              explain: "“autot ovat varattuina juuri silloin, kun niitä tarvitaan eniten, esimerkiksi perjantai-iltaisin ja juhlapyhinä.”",
            },
            {
              id: "k17l4q5",
              type: "mc",
              q: "Mitä kaupunki lupaa?",
              options: [
                "Asukkaat saavat käyttää autoja ensimmäisen vuoden maksutta.",
                "Autoja lisätään, jos ne eivät riitä.",
                "Asukkaat saavat ilmaisen joukkoliikenteen kausilipun.",
              ],
              answer: 1,
              explain: "“Jos autoja ei riitä, niitä lisätään.” The season ticket is half price, not free.",
            },
          ],
        },
        {
          id: "k17l5",
          title: "Tehtävä 5: Mainoksia ja tiedotteita",
          instructions: {
            fi: "Kuulet viisi lyhyttä mainosta tai tiedotetta kaksi kertaa. Jokaisesta on yksi väite. Onko väite oikein vai väärin?",
            en: "You will hear five short adverts or announcements twice. There is one statement about each. Is it true or false?",
          },
          situation: "Kuulet radiosta lyhyitä mainoksia ja tiedotteita.",
          plays: 2,
          rate: 1.0,
          lines: [
            {
              speaker: "Mainos 1",
              text:
                "Avaa Nordvaran säästötili nyt, niin saat talletuksellesi kolmen prosentin koron! Tarjouskorko on voimassa kuusi kuukautta tilin avaamisesta, " +
                "minkä jälkeen korko muuttuu pankin tavalliseksi säästötilin koroksi. Tilin avaaminen onnistuu sovelluksessa muutamassa minuutissa.",
            },
            {
              speaker: "Tiedote 2",
              text:
                "Kuluttajaviranomainen varoittaa sosiaalisessa mediassa leviävistä sijoitusmainoksista, joissa käytetään luvatta tunnettujen suomalaisten kuvia ja nimiä. " +
                "Mainokset lupaavat suuria tuottoja nopeasti ja ilman riskiä. Tällaisiin mainoksiin ei pidä luottaa, eikä niiden kautta pidä antaa yhteystietojaan.",
            },
            {
              speaker: "Mainos 3",
              text:
                "Kirpputori Kierto: myy tarpeettomat tavarasi meillä! Pöytävuokra on kaksikymmentä euroa viikossa, ja lisäksi perimme myynnistä kymmenen prosentin provision. " +
                "Nyt ensimmäinen viikko puoleen hintaan! Olemme auki joka päivä kymmenestä kuuteen.",
            },
            {
              speaker: "Mainos 4",
              text:
                "Vaihda Valovirran kiinteähintaiseen sähkösopimukseen, niin sähkön hinta pysyy samana kaksi vuotta. Huomaa, että sopimus on määräaikainen, " +
                "eikä sitä voi irtisanoa kesken sopimuskauden. Lue lisää verkkosivuiltamme.",
            },
            {
              speaker: "Tiedote 5",
              text:
                "Verohallinto muistuttaa: esitäytetyt veroilmoitukset ovat nyt nähtävillä verkossa. Tarkista tietosi huolellisesti. Jos kaikki tiedot ovat oikein, " +
                "sinun ei tarvitse tehdä mitään. Jos huomaat virheen, korjaa se viimeistään veroilmoitukseen merkittynä päivänä.",
            },
          ],
          questions: [
            {
              id: "k17l5q1",
              type: "tf",
              q: "Mainos 1: Kolmen prosentin korko on voimassa koko säästämisen ajan.",
              answer: false,
              explain: "The offer rate lasts six months, after which it becomes the bank's ordinary savings rate.",
            },
            {
              id: "k17l5q2",
              type: "tf",
              q: "Tiedote 2: Tunnetun henkilön kuva mainoksessa ei takaa, että mainos on luotettava.",
              answer: true,
              explain: "The ads use well-known Finns' pictures “luvatta”, and one should not trust them.",
            },
            {
              id: "k17l5q3",
              type: "tf",
              q: "Mainos 3: Myyjä maksaa pöytävuokran lisäksi osuuden myynnistään.",
              answer: true,
              explain: "Table rent 20 €/week, “ja lisäksi perimme myynnistä kymmenen prosentin provision.”",
            },
            {
              id: "k17l5q4",
              type: "tf",
              q: "Mainos 4: Sähkösopimuksen voi lopettaa milloin tahansa.",
              answer: false,
              explain: "The contract is fixed-term “eikä sitä voi irtisanoa kesken sopimuskauden.”",
            },
            {
              id: "k17l5q5",
              type: "tf",
              q: "Tiedote 5: Jokaisen on palautettava veroilmoitus, vaikka tiedot olisivat oikein.",
              answer: false,
              explain: "“Jos kaikki tiedot ovat oikein, sinun ei tarvitse tehdä mitään.”",
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
          id: "k17s1",
          kind: "kertominen",
          title: "Tehtävä 1: Kertominen",
          instructions: {
            fi: "Sinulla on minuutti aikaa valmistautua. Voit tehdä muistiinpanoja. Puhu noin puolitoista minuuttia. Aloita puhuminen vasta, kun kuulet äänimerkin.",
            en: "You have one minute to prepare and may take notes. Speak for about a minute and a half. Start only after the beep.",
          },
          prepSec: 60,
          card: {
            title: "Kerro, miten hoidat raha-asioitasi.",
            questions: [
              "Miten seuraat tulojasi ja menojasi?",
              "Mihin käytät eniten rahaa?",
              "Oletko joskus säästänyt johonkin tiettyyn asiaan? Kerro siitä.",
              "Miten raha-asioita hoidetaan Suomessa ja jossakin toisessa maassa, jonka tunnet?",
            ],
          },
          items: [{ id: "a", spoken: "Kerro, miten hoidat raha-asioitasi. Aloita puhuminen nyt.", speakSec: 90 }],
        },
        {
          id: "k17s2",
          kind: "keskustelu",
          title: "Tehtävä 2: Keskustelu A",
          instructions: {
            fi: "Kuulet keskustelun, jossa puhut vuorotellen toisen henkilön kanssa. Lue tilanne ja ohjeet. Puhu, kun kuulet äänimerkin.",
            en: "You will take turns with another speaker. Read the situation and the cues. Speak after the beep.",
          },
          prepSec: 30,
          card: {
            title:
              "Puhelinlaskusi oli tässä kuussa 85 euroa, vaikka liittymäsi maksaa yleensä 20 euroa kuukaudessa. Soitat puhelinoperaattorin asiakaspalveluun.",
            questions: [],
          },
          items: [
            {
              id: "a",
              spoken: "Linkki Mobiili, asiakaspalvelu, Anu puhelimessa. Miten voin auttaa?",
              cue: "[Esittele itsesi ja kerro, miksi soitat.]",
              speakSec: 20,
            },
            {
              id: "b",
              spoken: "Katsotaanpa. Laskulla näkyy datan käyttöä Sveitsissä. Olitteko siellä viime kuussa?",
              cue: "[Vastaa ja kerro, mihin käytit puhelinta matkalla.]",
              speakSec: 20,
            },
            {
              id: "c",
              spoken: "Sveitsi ei kuulu EU:hun, joten liittymänne datapaketti ei ole siellä voimassa. Siitä lähetettiin teille tekstiviesti, kun saavuitte maahan.",
              cue: "[Kerro, muistatko viestin ja mitä ajattelet asiasta.]",
              speakSec: 20,
            },
            {
              id: "d",
              spoken: "Ymmärrän, että tilanne tuntuu ikävältä. Laskun summa on kuitenkin hinnaston mukainen.",
              cue: "[Pyydä hyvitystä ja perustele pyyntösi.]",
              speakSec: 25,
            },
            {
              id: "e",
              spoken: "Voin tehdä teille kertaluonteisen hyvityksen, puolet datamaksusta. Lisäksi voin asettaa liittymään rajoituksen, joka estää datan käytön EU:n ulkopuolella. Sopiiko?",
              cue: "[Vastaa tarjoukseen ja kerro, haluatko rajoituksen.]",
              speakSec: 20,
            },
            {
              id: "f",
              spoken: "Selvä, hoidan asian. Hyvitys näkyy seuraavalla laskulla. Voinko auttaa vielä jossain?",
              cue: "[Kysy vielä jotakin tai kiitä ja lopeta puhelu.]",
              speakSec: 15,
            },
          ],
        },
        {
          id: "k17s3",
          kind: "keskustelu",
          title: "Tehtävä 2: Keskustelu B",
          instructions: {
            fi: "Kuulet keskustelun, jossa puhut vuorotellen toisen henkilön kanssa. Lue tilanne ja ohjeet. Puhu, kun kuulet äänimerkin.",
            en: "You will take turns with another speaker. Read the situation and the cues. Speak after the beep.",
          },
          prepSec: 30,
          card: {
            title:
              "Asut kimppakämpässä ystäväsi Joonaksen kanssa. Yhteiset menot, kuten ruoka ja siivoustarvikkeet, ovat aiheuttaneet epäselvyyksiä. Haluat ehdottaa, että sovitte yhteisistä rahoista uudella tavalla. Sinä aloitat.",
            questions: [],
          },
          items: [
            { id: "a", spoken: "", cue: "[Tervehdi Joonasta ja kerro, mistä haluat puhua.]", speakSec: 15 },
            {
              id: "b",
              spoken: "Ai, onko jotain ongelmaa? Musta kaikki on mennyt ihan hyvin.",
              cue: "[Kerro, mikä nykyisessä tavassa ei toimi, ja anna esimerkki.]",
              speakSec: 25,
            },
            {
              id: "c",
              spoken: "Okei, ymmärrän. Mitä sä sitten ehdottaisit?",
              cue: "[Ehdota uutta tapaa jakaa yhteiset menot.]",
              speakSec: 25,
            },
            {
              id: "d",
              spoken: "Hmm, mutta sä syöt paljon enemmän kuin mä. Ei kai ole reilua, että me maksetaan ruoasta puoliksi?",
              cue: "[Reagoi ja ehdota kompromissia.]",
              speakSec: 20,
            },
            {
              id: "e",
              spoken: "No, se kuulostaa reilulta. Pitäiskö meidän käyttää jotain sovellusta, vai riittääkö, että kirjataan kulut vihkoon?",
              cue: "[Kerro, kumpi tapa sopisi sinulle paremmin, ja perustele.]",
              speakSec: 20,
            },
            {
              id: "f",
              spoken: "Selvä. Kokeillaan sitä ensi kuun alusta.",
              cue: "[Vahvista sopimus ja lopeta keskustelu.]",
              speakSec: 10,
            },
          ],
        },
        {
          id: "k17s4",
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
              situation: "Ystäväsi pyytää sinulta lainaksi kaksisataa euroa. Sinulla ei ole varaa lainata niin paljon. Mitä sanot?",
              spoken: "Tilanne 1. Ystäväsi pyytää sinulta lainaksi kaksisataa euroa. Sinulla ei ole varaa lainata niin paljon. Mitä sanot?",
              prepSec: 20,
              speakSec: 20,
            },
            {
              id: "b",
              situation: "Olet kadottanut pankkikorttisi. Soitat pankkiin ja haluat sulkea kortin. Mitä sanot?",
              spoken: "Tilanne 2. Olet kadottanut pankkikorttisi. Soitat pankkiin ja haluat sulkea kortin. Mitä sanot?",
              prepSec: 20,
              speakSec: 30,
            },
            {
              id: "c",
              situation: "Kassalla tuotteesta veloitetaan enemmän kuin hyllyn hintalapussa luki. Mitä sanot kassamyyjälle?",
              spoken: "Tilanne 3. Kassalla tuotteesta veloitetaan enemmän kuin hyllyn hintalapussa luki. Mitä sanot kassamyyjälle?",
              prepSec: 20,
              speakSec: 30,
            },
            {
              id: "d",
              situation: "Lupasit maksaa työkaverillesi osuutesi yhteisestä lahjasta jo viime viikolla, mutta unohdit sen. Mitä sanot hänelle?",
              spoken: "Tilanne 4. Lupasit maksaa työkaverillesi osuutesi yhteisestä lahjasta jo viime viikolla, mutta unohdit sen. Mitä sanot hänelle?",
              prepSec: 20,
              speakSec: 30,
            },
            {
              id: "e",
              situation: "Puhelinmyyjä yrittää myydä sinulle uutta sähkösopimusta. Et halua sopimusta etkä halua, että sinulle soitetaan uudestaan. Mitä sanot?",
              spoken: "Tilanne 5. Puhelinmyyjä yrittää myydä sinulle uutta sähkösopimusta. Et halua sopimusta etkä halua, että sinulle soitetaan uudestaan. Mitä sanot?",
              prepSec: 20,
              speakSec: 30,
            },
          ],
        },
        {
          id: "k17s5",
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
              "A. Lainaaminen vai omistaminen: Pitäisikö tavaroita lainata ja vuokrata nykyistä enemmän sen sijaan, että jokainen ostaa omansa? Mitä hyötyä ja haittaa siitä on? Mitä sinä voisit lainata tai vuokrata?",
              "B. Lapset ja raha: Pitäisikö lapsille antaa viikkorahaa? Minkä ikäisenä lapsen pitäisi saada päättää itse omista rahoistaan? Miten lapsia voisi opettaa käyttämään rahaa järkevästi?",
            ],
          },
          items: [{ id: "a", spoken: "Kerro mielipiteesi valitsemastasi aiheesta. Aloita puhuminen nyt.", speakSec: 120 }],
        },
      ],
    },
  ],
};
