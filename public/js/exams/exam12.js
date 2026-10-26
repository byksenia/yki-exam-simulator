// Keskitaso 2
export default {
  id: "koe12",
  title: "Keskitaso 2",
  level: "keskitaso",
  description: "Renting and the housing market, neighbourhood planning, libraries as community spaces, food waste, sleep and wellbeing, job interviews.",
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
          id: "k12r1",
          title: "Tehtävä 1: Uutinen",
          instructions: {
            fi: "Lue uutinen ja vastaa kysymyksiin. Valitse oikea vaihtoehto.",
            en: "Read the news item and answer the questions. Choose the correct option.",
          },
          text: {
            title: "Kalliorinteeseen suunnitellaan satoja uusia asuntoja – asukkaat huolissaan puistosta",
            body:
              "Järvelän kaupunki suunnittelee Kalliorinteen lähiöön noin 600 uutta asuntoa. Kaavaluonnoksen mukaan uudet kerrostalot rakennettaisiin pääosin " +
              "nykyisten pysäköintialueiden ja vanhan ostoskeskuksen paikalle. Lisäksi osa alueen keskellä olevasta puistosta muutettaisiin tonteiksi.\n\n" +
              "Kaupunkisuunnittelupäällikkö Mikko Aaltonen perustelee hanketta sillä, että alueen väestö on ikääntynyt ja koulun oppilasmäärä on laskenut " +
              "jo vuosia. ”Jos alueelle ei saada uusia asukkaita, on vaarana, että koulu ja viimeisetkin kaupat lähtevät. Täydennysrakentaminen on keino pitää " +
              "palvelut lähellä”, Aaltonen sanoo. Hänen mukaansa uusien talojen pohjakerroksiin on tarkoitus tehdä liiketiloja, ja ostoskeskuksen ruokakauppa " +
              "siirtyisi uuteen rakennukseen.\n\n" +
              "Asukasyhdistys ei vastusta rakentamista sinänsä, mutta puiston pienentäminen herättää kritiikkiä. ”Puisto on alueen ainoa paikka, jossa lapset " +
              "voivat pelata palloa ja vanhukset kävellä rauhassa. Pysäköintialueille saa meidän puolestamme rakentaa”, sanoo yhdistyksen puheenjohtaja Tiina Kurki. " +
              "Asukkaita mietityttää myös se, mihin autot jatkossa pysäköidään. Kaupungin mukaan uusiin taloihin tulee pysäköintihalli, mutta sen paikat ovat maksullisia.\n\n" +
              "Kaavaluonnos on nähtävillä kaupungin verkkosivuilla ja pääkirjastossa kuukauden ajan. Sinä aikana kuka tahansa voi jättää siitä mielipiteen. " +
              "Kaupunki järjestää lisäksi kaksi asukastilaisuutta, joista toinen pidetään verkossa. Aaltosen mukaan luonnos ei ole lopullinen: ”Puiston osalta " +
              "suunnitelma voi vielä muuttua, jos palaute antaa siihen aihetta.” Rakentaminen alkaisi aikaisintaan kolmen vuoden kuluttua.",
          },
          questions: [
            {
              id: "k12r1q1",
              type: "mc",
              q: "Miksi kaupunki haluaa lisää asukkaita Kalliorinteeseen?",
              options: [
                "Alueen koulussa on liian vähän tilaa kasvavalle oppilasmäärälle.",
                "Ilman uusia asukkaita alueen palvelut voivat kadota.",
                "Vanha ostoskeskus on niin huonossa kunnossa, että se on purettava.",
              ],
              answer: 1,
              explain:
                "Aaltonen: “Jos alueelle ei saada uusia asukkaita, on vaarana, että koulu ja viimeisetkin kaupat lähtevät.” The number of pupils has fallen, not grown, and the shopping centre's condition is not mentioned.",
            },
            {
              id: "k12r1q2",
              type: "mc",
              q: "Mitä mieltä asukasyhdistys on suunnitelmasta?",
              options: [
                "Se hyväksyy rakentamisen pysäköintialueille mutta ei puistoon.",
                "Se vastustaa kaikkea uutta rakentamista alueelle.",
                "Se haluaa, että pysäköintialueet säilytetään ennallaan.",
              ],
              answer: 0,
              explain:
                "“ei vastusta rakentamista sinänsä” and “Pysäköintialueille saa meidän puolestamme rakentaa” — only reducing the park is criticised.",
            },
            {
              id: "k12r1q3",
              type: "mc",
              q: "Mitä tekstissä kerrotaan pysäköinnistä?",
              options: [
                "Pysäköintipaikkoja on tulevaisuudessa nykyistä enemmän.",
                "Asukkaat voivat jatkossa pysäköidä maksutta uuteen halliin.",
                "Uuden pysäköintihallin paikoista joutuu maksamaan.",
              ],
              answer: 2,
              explain: "“uusiin taloihin tulee pysäköintihalli, mutta sen paikat ovat maksullisia.” Nothing says there will be more spaces than now.",
            },
            {
              id: "k12r1q4",
              type: "mc",
              q: "Mitä Aaltonen sanoo puistoa koskevasta suunnitelmasta?",
              options: [
                "Se voi vielä muuttua asukkaiden palautteen perusteella.",
                "Siitä päätetään vasta kolmen vuoden kuluttua.",
                "Siitä voi antaa palautetta vain asukastilaisuuksissa.",
              ],
              answer: 0,
              explain:
                "“Puiston osalta suunnitelma voi vielä muuttua, jos palaute antaa siihen aihetta.” Three years refers to the start of construction; feedback can be given by anyone for a month, not only at the events.",
            },
          ],
        },
        {
          id: "k12r2",
          title: "Tehtävä 2: Kuluttaja-artikkeli",
          instructions: {
            fi: "Lue artikkeli. Ovatko väitteet oikein vai väärin?",
            en: "Read the article. Are the statements true (oikein) or false (väärin)?",
          },
          text: {
            title: "Vuokralle? Lue sopimus ennen kuin allekirjoitat",
            body:
              "Vuokra-asunnon etsiminen voi olla stressaavaa, varsinkin suurissa kaupungeissa, joissa hyvästä asunnosta kilpailee usein kymmeniä hakijoita. " +
              "Kiireessä moni allekirjoittaa vuokrasopimuksen lukematta sitä kunnolla. Vuokralaisten neuvontapalvelun mukaan juuri sopimuksen ehdot aiheuttavat " +
              "myöhemmin eniten riitoja.\n\n" +
              "Ensimmäiseksi kannattaa selvittää, onko sopimus voimassa toistaiseksi vai määräajan. Toistaiseksi voimassa olevan sopimuksen vuokralainen voi " +
              "irtisanoa milloin tahansa, ja hänen irtisanomisaikansa on yksi kalenterikuukausi. Vuokranantajan irtisanomisaika taas on kolme kuukautta, ja jos " +
              "vuokrasuhde on kestänyt yli vuoden, kuusi kuukautta. Määräaikaista sopimusta ei sen sijaan voi yleensä irtisanoa kesken kauden kumpikaan osapuoli. " +
              "Jos vuokralainen saa esimerkiksi työpaikan toiselta paikkakunnalta, hän voi joutua maksamaan vuokraa sopimuskauden loppuun asti, ellei vuokranantajan " +
              "kanssa sovita toisin tai asuntoon löydy uutta vuokralaista.\n\n" +
              "Vuokranantaja pyytää lähes aina vakuuden eli takuuvuokran. Laki sallii sen olevan enintään kolmen kuukauden vuokran suuruinen, mutta tavallisesti " +
              "se on kahden kuukauden vuokra. Vakuus palautetaan, kun vuokralainen muuttaa pois ja asunto on hyvässä kunnossa. Tavallisesta kulumisesta, kuten " +
              "lattian pienistä naarmuista tai seinien haalistumisesta, vuokralaisen ei tarvitse maksaa. Jos taas seiniin on porattu luvatta reikiä tai asunnossa " +
              "on tupakoitu sopimuksen vastaisesti, vuokranantaja voi pidättää vakuudesta korjauskulut.\n\n" +
              "Riitoja voi ehkäistä muuttotarkastuksella. Kun muutat asuntoon, käy se läpi yhdessä vuokranantajan kanssa ja merkitse kaikki viat ja vauriot " +
              "tarkastuslomakkeeseen, jonka molemmat allekirjoittavat. Ota myös päivämäärällisiä kuvia. Neuvontapalvelun lakimies Paula Heikkinen kertoo, että " +
              "monessa riidassa on sana sanaa vastaan: ”Jos vuokralainen ei pysty osoittamaan, että tahra oli matossa jo hänen muuttaessaan sisään, hänen on vaikea " +
              "kiistää vuokranantajan vaatimusta.”\n\n" +
              "Asumisen aikana vuokralaisella on myös ilmoitusvelvollisuus. Jos asunnossa ilmenee vika, esimerkiksi vesivuoto tai kostea kohta lattiassa, siitä " +
              "on kerrottava vuokranantajalle viipymättä. Moni jättää pienen tippumisen huomiotta, koska ei halua vaivata ketään. Jos vahinko kuitenkin pahenee " +
              "sen vuoksi, ettei siitä ilmoitettu ajoissa, vuokralainen voi joutua korvaamaan osan korjauskuluista.\n\n" +
              "Sopimuksesta kannattaa tarkistaa myös vuokrankorotusta koskeva ehto. Vuokraa ei voi nostaa mielivaltaisesti, vaan korotuksen täytyy yleensä perustua " +
              "sopimukseen kirjattuun ehtoon, esimerkiksi siihen, että vuokra nousee kerran vuodessa tietyn prosentin. Monissa sopimuksissa vaaditaan lisäksi, että " +
              "vuokralaisella on kotivakuutus. Laki ei velvoita ottamaan kotivakuutusta, mutta jos sopimuksessa niin lukee, vakuutus on otettava.\n\n" +
              "Heikkisen mukaan kiire on vuokralaisen pahin vihollinen. ”Ymmärrän hyvin, että jos olet etsinyt asuntoa kuukausia, haluat vain saada avaimet käteen. " +
              "Mutta puoli tuntia sopimuksen lukemiseen voi säästää satoja euroja.”",
          },
          questions: [
            {
              id: "k12r2q1",
              type: "tf",
              q: "Vuokralaisen irtisanomisaika on sama riippumatta siitä, kuinka kauan hän on asunut asunnossa.",
              answer: true,
              explain:
                "The tenant's notice period is always “yksi kalenterikuukausi”. Only the landlord's period depends on the length of the tenancy (three or six months).",
            },
            {
              id: "k12r2q2",
              type: "tf",
              q: "Määräaikaisesta sopimuksesta pääsee yleensä eroon kuukauden irtisanomisajalla, jos vuokralainen muuttaa työn takia.",
              answer: false,
              explain:
                "“Määräaikaista sopimusta ei … voi yleensä irtisanoa kesken kauden” — a tenant who moves for work may have to pay rent until the end of the term.",
            },
            {
              id: "k12r2q3",
              type: "tf",
              q: "Laki sallii korkeintaan kahden kuukauden vuokran suuruisen vakuuden.",
              answer: false,
              explain: "The law allows “enintään kolmen kuukauden vuokran”; two months is only what is usual (“tavallisesti”).",
            },
            {
              id: "k12r2q4",
              type: "tf",
              q: "Vuokranantaja voi pidättää osan vakuudesta, jos lattiassa on tavallisen käytön aiheuttamia pieniä naarmuja.",
              answer: false,
              explain: "“Tavallisesta kulumisesta, kuten lattian pienistä naarmuista …, vuokralaisen ei tarvitse maksaa.”",
            },
            {
              id: "k12r2q5",
              type: "tf",
              q: "Muuttotarkastuksen ansiosta vuokralainen voi tarvittaessa osoittaa, missä kunnossa asunto oli hänen muuttaessaan.",
              answer: true,
              explain:
                "The inspection form and dated photos prevent disputes; Heikkinen says a tenant who cannot show the stain was already there “on vaikea kiistää vuokranantajan vaatimusta”.",
            },
            {
              id: "k12r2q6",
              type: "tf",
              q: "Vuokralainen voi joutua maksamaan osan korjauksesta, jos hän ei kerro huomaamastaan viasta ajoissa.",
              answer: true,
              explain:
                "A defect must be reported “viipymättä”; if the damage gets worse because it was not reported in time, “vuokralainen voi joutua korvaamaan osan korjauskuluista”.",
            },
            {
              id: "k12r2q7",
              type: "tf",
              q: "Vuokranantaja voi korottaa vuokraa kerran vuodessa, vaikka sopimuksessa ei mainittaisi asiasta mitään.",
              answer: false,
              explain: "“korotuksen täytyy yleensä perustua sopimukseen kirjattuun ehtoon.” Once a year is only an example of such a clause.",
            },
          ],
        },
        {
          id: "k12r3",
          title: "Tehtävä 3: Tiedote",
          instructions: {
            fi: "Lue tiedote ja vastaa kysymyksiin suomeksi. Vastaa lyhyesti.",
            en: "Read the notice and answer the questions in Finnish. Answer briefly.",
          },
          text: {
            title: "Pihlajamäen kirjasto: omatoimiaika ja tilavaraukset alkavat syyskuussa",
            body:
              "Pihlajamäen kirjasto on syyskuun alusta avoinna omatoimisesti joka päivä kello 7–22, myös viikonloppuisin. Henkilökunta on paikalla edelleen " +
              "arkisin kello 12–18. Omatoimiaikana voit lainata ja palauttaa aineistoa, noutaa varauksia, lukea lehtiä, käyttää asiakastietokoneita ja opiskella.\n\n" +
              "Kirjaston ovi avautuu kirjastokortilla ja tunnusluvulla. Omatoimikäyttöön tarvitaan kuitenkin erillinen käyttöoikeus, jonka saat allekirjoittamalla " +
              "sopimuksen asiakaspalvelussa henkilökunnan ollessa paikalla. Alle 15-vuotiaat saavat käyttää omatoimikirjastoa vain huoltajan seurassa. " +
              "Jokainen asiakas kirjautuu sisään omalla kortillaan, joten älä päästä ovesta sisään ihmisiä, joita et tunne. Tiloissa on tallentava kameravalvonta.\n\n" +
              "Kirjaston kokoushuoneen ja äänitysstudion voi nyt varata verkossa. Kokoushuone sopii esimerkiksi yhdistysten kokouksiin, opintopiireille ja etätyöhön. " +
              "Varaus on maksuton yksityishenkilöille ja yhdistyksille. Yritysten tilaisuuksista peritään 15 euroa tunnilta. Yhden varauksen enimmäispituus on " +
              "kolme tuntia, ja samalla nimellä voi olla voimassa kerrallaan kaksi varausta. Studiossa voi äänittää musiikkia ja podcasteja. Ennen ensimmäistä " +
              "käyttökertaa on osallistuttava puolen tunnin perehdytykseen.\n\n" +
              "Jos et pääse varaamaasi aikaan, peru varaus verkossa, jotta tila vapautuu muiden käyttöön. Jos kolme varausta jää käyttämättä ilman perumista, " +
              "varausoikeus poistetaan kolmeksi kuukaudeksi.",
          },
          questions: [
            {
              id: "k12r3q1",
              type: "open",
              q: "Miten asiakas saa oikeuden käyttää kirjastoa omatoimiaikana?",
              accept: [
                "allekirjoittamalla sopimuksen asiakaspalvelussa",
                "tekemällä sopimuksen kirjastossa, kun henkilökunta on paikalla",
                "allekirjoittaa sopimuksen arkisin kello 12–18",
              ],
              keyNote:
                "By signing an agreement at the customer service desk while staff are present. Having a library card and PIN alone is not enough.",
              explain:
                "“Omatoimikäyttöön tarvitaan kuitenkin erillinen käyttöoikeus, jonka saat allekirjoittamalla sopimuksen asiakaspalvelussa henkilökunnan ollessa paikalla.”",
            },
            {
              id: "k12r3q2",
              type: "open",
              q: "Millä ehdolla 12-vuotias voi olla kirjastossa lauantaina kello 20?",
              accept: ["vain huoltajan kanssa", "jos huoltaja on mukana", "vanhemman seurassa"],
              keyNote: "Only together with a guardian (parent). Saturday 8 p.m. is self-service time, and under-15s need a guardian then.",
              explain:
                "Staff are present only on weekdays 12–18, so Saturday evening is self-service time: “Alle 15-vuotiaat saavat käyttää omatoimikirjastoa vain huoltajan seurassa.”",
            },
            {
              id: "k12r3q3",
              type: "open",
              q: "Milloin kokoushuoneen varaamisesta joutuu maksamaan?",
              accept: ["kun tilaisuuden järjestää yritys", "jos varaaja on yritys", "yrityksen tilaisuuksista"],
              keyNote: "When the event is a company's event (15 €/hour). Private persons and associations book for free.",
              explain: "“Varaus on maksuton yksityishenkilöille ja yhdistyksille. Yritysten tilaisuuksista peritään 15 euroa tunnilta.”",
            },
            {
              id: "k12r3q4",
              type: "open",
              q: "Mitä seuraa, jos asiakas jättää useita varauksia käyttämättä eikä peru niitä?",
              accept: [
                "hän ei voi varata tiloja kolmeen kuukauteen",
                "varausoikeus poistetaan kolmeksi kuukaudeksi",
                "menettää varausoikeuden kolmeksi kuukaudeksi",
              ],
              keyNote: "After three unused, uncancelled bookings he/she loses the right to book for three months.",
              explain: "“Jos kolme varausta jää käyttämättä ilman perumista, varausoikeus poistetaan kolmeksi kuukaudeksi.”",
            },
          ],
        },
        {
          id: "k12r4",
          title: "Tehtävä 4: Kolumni",
          instructions: {
            fi: "Lue kolumni ja vastaa kysymyksiin. Valitse oikea vaihtoehto.",
            en: "Read the column and answer the questions. Choose the correct option.",
          },
          text: {
            title: "Nukuin huonosti, koska mittasin untani – Jussi Laine",
            body:
              "Sain viime jouluna lahjaksi älysormuksen, joka mittaa unta. Joka aamu puhelin kertoi minulle, kuinka monta tuntia olin nukkunut, kuinka paljon " +
              "syvää unta olin saanut ja mikä oli yön unipisteeni. Aluksi se oli hauskaa. Vertailin lukuja vaimoni kanssa aamiaisella kuin urheilutuloksia.\n\n" +
              "Muutaman viikon kuluttua huomasin, että ajattelin untani koko ajan. Jos pisteet olivat huonot, olin varma, että päivästä tulee raskas, ja usein " +
              "niin myös kävi. Illalla mietin, ehdinkö nukkumaan tarpeeksi ajoissa, jotta tulos paranisi. Mitä enemmän yritin, sitä huonommin nukahdin. " +
              "Lopulta valvoin öitä ja laskin, kuinka paljon unta menetin valvomalla.\n\n" +
              "Kun kerroin asiasta työterveyslääkärille, hän ei yllättynyt lainkaan. Ilmiöllä on jopa nimi: ortosomnia eli liiallinen huoli täydellisestä unesta. " +
              "Lääkärin mukaan laitteet eivät ole hyödyttömiä, mutta niiden antamat luvut ovat vain arvioita. Esimerkiksi syvän unen määrää ei voi luotettavasti " +
              "mitata sormuksella, vaikka sovellus esittää sen minuutin tarkkuudella. Hän neuvoi minua kysymään itseltäni aamulla vain yhden asian: tunnenko itseni " +
              "levänneeksi?\n\n" +
              "Lääkäri antoi myös muutaman vanhanaikaisen neuvon: mene nukkumaan ja herää suunnilleen samaan aikaan joka päivä, myös viikonloppuisin, ja jätä " +
              "puhelin illaksi toiseen huoneeseen. Neuvot kuulostivat niin yksinkertaisilta, että olin melkein pettynyt. Olin odottanut jotain tieteellisempää. " +
              "Vaimoni nauroi, kun kerroin tästä. Hänellä ei ole koskaan ollut unisovellusta, ja hän nukkuu kuin tukki.\n\n" +
              "Riittävä uni on tietysti tärkeää. Tutkimusten mukaan pitkään jatkuva univaje lisää esimerkiksi sydänsairauksien ja masennuksen riskiä. Siksi " +
              "ymmärrän hyvin, miksi unesta on tullut samanlainen hyvinvoinnin mittari kuin askelista tai kaloreista. Silti minusta tuntuu, että olemme tehneet " +
              "levosta jälleen yhden suorituksen. Ennen kehuttiin sitä, kuka juoksi nopeimmin. Nyt kehutaan sitä, kuka nukkui parhaiten.\n\n" +
              "Paradoksi on siinä, että uni ei tottele käskyjä. Sitä ei voi hankkia yrittämällä samalla tavalla kuin lihaksia tai kielitaitoa. Uni tulee, kun " +
              "ihminen rauhoittuu ja lakkaa yrittämästä. Mitä kovemmin unta tavoittelee, sitä kauemmas se karkaa. Sen tietää jokainen, joka on joskus " +
              "yrittänyt nukahtaa ennen tärkeää työhaastattelua tai aikaista lentoa.\n\n" +
              "Jätin sormuksen keväällä laatikkoon. En väitä, että nukun nyt joka yö hyvin, mutta en enää pelkää huonoja öitä. Jos herään kolmelta, en katso " +
              "kelloa enkä laske tunteja. Mielestäni tämä on ollut paras unilääke, jota olen koskaan kokeillut.\n\n" +
              "Sormus ei ole kadonnut mihinkään. Ehkä otan sen joskus taas käyttöön. Silloin päätän kuitenkin itse, mitä lukujen perusteella teen, enkä anna " +
              "niiden päättää, millainen päivästäni tulee.",
          },
          questions: [
            {
              id: "k12r4q1",
              type: "mc",
              q: "Miten kirjoittaja suhtautui unen mittaamiseen aluksi?",
              options: [
                "Hän piti sitä viihdyttävänä.",
                "Hän epäili laitteen tarkkuutta.",
                "Hän käytti laitetta vain vaimonsa toiveesta.",
              ],
              answer: 0,
              explain: "“Aluksi se oli hauskaa. Vertailin lukuja vaimoni kanssa aamiaisella kuin urheilutuloksia.” Doubts about accuracy came later, from the doctor.",
            },
            {
              id: "k12r4q2",
              type: "mc",
              q: "Mitä kirjoittajalle tapahtui muutaman viikon kuluttua?",
              options: [
                "Hänen unensa parani, koska hän alkoi mennä nukkumaan aiemmin.",
                "Huoli unesta alkoi itse vaikeuttaa nukahtamista.",
                "Hän huomasi, että laite näytti vääriä lukuja.",
              ],
              answer: 1,
              explain: "“Mitä enemmän yritin, sitä huonommin nukahdin. Lopulta valvoin öitä …”",
            },
            {
              id: "k12r4q3",
              type: "mc",
              q: "Mitä työterveyslääkäri sanoi unta mittaavista laitteista?",
              options: [
                "Niiden antamat tiedot ovat suuntaa antavia eivätkä tarkkoja.",
                "Niistä ei ole mitään hyötyä.",
                "Niillä voi mitata syvän unen määrän luotettavasti.",
              ],
              answer: 0,
              explain:
                "“laitteet eivät ole hyödyttömiä, mutta niiden antamat luvut ovat vain arvioita” — deep sleep in particular cannot be measured reliably.",
            },
            {
              id: "k12r4q4",
              type: "mc",
              q: "Mitä kirjoittaja tarkoittaa sanoessaan, että levosta on tehty ”jälleen yksi suoritus”?",
              options: [
                "Ihmiset nukkuvat liian vähän, koska he tekevät liikaa töitä.",
                "Urheilijat tarvitsevat enemmän unta kuin muut ihmiset.",
                "Myös nukkumisessa yritetään nykyään onnistua ja pärjätä muita paremmin.",
              ],
              answer: 2,
              explain: "He compares sleep to sport results: “Ennen kehuttiin sitä, kuka juoksi nopeimmin. Nyt kehutaan sitä, kuka nukkui parhaiten.”",
            },
            {
              id: "k12r4q5",
              type: "mc",
              q: "Mikä seuraavista on kolumnissa mielipide eikä tosiasia?",
              options: [
                "Pitkään jatkuva univaje lisää masennuksen riskiä.",
                "Kirjoittaja laittoi sormuksen keväällä laatikkoon.",
                "Lukujen seuraamisen lopettaminen on ollut paras unilääke.",
              ],
              answer: 2,
              explain: "“Mielestäni tämä on ollut paras unilääke” is the writer's own judgement. The first is a research finding, the second a reported event.",
            },
            {
              id: "k12r4q6",
              type: "mc",
              q: "Miten kirjoittaja suhtautuu unen mittaamiseen nyt?",
              options: [
                "Hän ei aio enää koskaan käyttää sormusta.",
                "Hän voisi käyttää sormusta, kunhan luvut eivät ohjaa hänen elämäänsä.",
                "Hän suosittelee mittaamista kaikille, jotka nukkuvat huonosti.",
              ],
              answer: 1,
              explain: "“Ehkä otan sen joskus taas käyttöön. Silloin päätän kuitenkin itse … enkä anna niiden päättää, millainen päivästäni tulee.”",
            },
          ],
        },
        {
          id: "k12r5",
          title: "Tehtävä 5: Mielipidekirjoitus",
          instructions: {
            fi: "Lue mielipidekirjoitus. Ovatko väitteet oikein vai väärin?",
            en: "Read the letter to the editor. Are the statements true (oikein) or false (väärin)?",
          },
          text: {
            title: "Ruoan jakokaappi ansaitsee toisen mahdollisuuden",
            body:
              "Asukastalomme pihalla on vuoden ajan ollut jakokaappi, johon kuka tahansa voi tuoda ylimääräistä ruokaa ja josta kuka tahansa voi sitä ottaa. " +
              "Kaapin perustivat muutamat asukkaat, minä mukaan lukien, koska halusimme vähentää ruokahävikkiä. Kaapin kautta on kiertänyt viikoittain kymmeniä " +
              "kiloja leipää, vihanneksia ja valmisruokia, jotka olisivat muuten päätyneet roskiin.\n\n" +
              "Viime kuussa asukastalon hallitus ilmoitti, että kaappi poistetaan vuodenvaihteessa. Syynä ovat valitukset: kaappiin on jätetty pilaantunutta " +
              "ruokaa, ja sen ympärille on kertynyt roskia. Ymmärrän päätöksen taustan. Olen itsekin joutunut siivoamaan kaapin, kun joku oli jättänyt sinne " +
              "avatun maitopurkin, joka haisi jo ovelle asti.\n\n" +
              "Kaapin poistaminen ei silti ole oikea ratkaisu. Ongelmat johtuvat siitä, että kaapilla ei ole selviä sääntöjä eikä ketään, joka vastaisi siitä. " +
              "Muissa kaupungeissa toimivissa jakokaapeissa on yleensä vastuuhenkilöt, jotka tarkistavat kaapin päivittäin, sekä näkyvät ohjeet: avattuja " +
              "pakkauksia, raakaa lihaa tai kalaa ja alkoholia ei saa tuoda. Kotona valmistettuun ruokaan taas merkitään aina valmistuspäivä.\n\n" +
              "Olen kysynyt asiaa naapureilta, ja kahdeksan heistä on lupautunut vuorottelemaan tarkistusvuoroissa. Ehdotan, että hallitus antaa kaapille " +
              "puolen vuoden koeajan uusin säännöin. Jos ongelmat eivät sinä aikana vähene, en vastusta kaapin poistamista.\n\n" +
              "Marjatta Lindholm",
          },
          questions: [
            {
              id: "k12r5q1",
              type: "tf",
              q: "Kirjoittaja oli itse mukana perustamassa jakokaappia.",
              answer: true,
              explain: "“Kaapin perustivat muutamat asukkaat, minä mukaan lukien.”",
            },
            {
              id: "k12r5q2",
              type: "tf",
              q: "Kirjoittajan mielestä valitukset kaapista ovat perusteettomia.",
              answer: false,
              explain: "“Ymmärrän päätöksen taustan” — she has herself had to clean up a smelly open milk carton.",
            },
            {
              id: "k12r5q3",
              type: "tf",
              q: "Jakokaappi on jo viety pois asukastalon pihalta.",
              answer: false,
              explain: "The board announced that the fridge “poistetaan vuodenvaihteessa” — it has not been removed yet.",
            },
            {
              id: "k12r5q4",
              type: "tf",
              q: "Kirjoittajan mukaan ongelmat johtuvat siitä, ettei kaapin käytöstä ole sovittu kunnolla.",
              answer: true,
              explain: "“Ongelmat johtuvat siitä, että kaapilla ei ole selviä sääntöjä eikä ketään, joka vastaisi siitä.”",
            },
            {
              id: "k12r5q5",
              type: "tf",
              q: "Muualla toimiviin jakokaappeihin saa tuoda kotona tehtyä ruokaa, kun siihen on merkitty valmistuspäivä.",
              answer: true,
              explain:
                "Forbidden are opened packages, raw meat or fish and alcohol; home-made food is allowed with a label: “Kotona valmistettuun ruokaan taas merkitään aina valmistuspäivä.”",
            },
            {
              id: "k12r5q6",
              type: "tf",
              q: "Kirjoittaja vaatii, että kaapin on saatava jatkaa toimintaansa joka tapauksessa.",
              answer: false,
              explain: "She proposes a six-month trial: “Jos ongelmat eivät sinä aikana vähene, en vastusta kaapin poistamista.”",
            },
          ],
        },
        {
          id: "k12r6",
          title: "Tehtävä 6: Ohje",
          instructions: {
            fi: "Lue ohje ja vastaa kysymyksiin suomeksi. Vastaa lyhyesti.",
            en: "Read the instructions and answer the questions in Finnish. Answer briefly.",
          },
          text: {
            title: "Videohaastattelu – ohjeet hakijalle",
            body:
              "Kiitos hakemuksestasi! Olet edennyt rekrytoinnin seuraavaan vaiheeseen, joka on tallennettava videohaastattelu. Saat haastattelulinkin " +
              "sähköpostiisi. Linkki on voimassa viisi vuorokautta, ja voit tehdä haastattelun silloin, kun se sinulle parhaiten sopii.\n\n" +
              "Ennen kuin aloitat:\n" +
              "1. Käytä tietokonetta tai puhelinta, jossa on kamera ja mikrofoni. Tarkista, että nettiyhteys toimii.\n" +
              "2. Valitse rauhallinen ja hyvin valaistu paikka. Taustalla ei saa kuulua musiikkia eikä muiden ihmisten puhetta.\n" +
              "3. Vastaa ensin harjoituskysymykseen. Harjoitusvastausta ei tallenneta, eikä kukaan näe sitä.\n\n" +
              "Haastattelussa on neljä kysymystä. Jokaisen kysymyksen jälkeen sinulla on 30 sekuntia aikaa miettiä ja enintään kaksi minuuttia aikaa vastata. " +
              "Jos et ole tyytyväinen vastaukseesi, voit nauhoittaa sen kerran uudelleen. Huomaa, että silloin voimaan jää vain jälkimmäinen vastaus. " +
              "Kun olet lähettänyt vastauksesi, niitä ei voi enää muuttaa.\n\n" +
              "Videoita katsovat vain rekrytoinnista vastaavat henkilöt, ja ne poistetaan kuuden kuukauden kuluttua haun päättymisestä. Jos sinulla on näkö- tai " +
              "kuulovamma tai muu syy, jonka vuoksi videohaastattelu ei sovi sinulle, ota yhteyttä rekrytointitiimiin, niin sovimme puhelinhaastattelusta.\n\n" +
              "Kerromme kaikille hakijoille rekrytoinnin etenemisestä kahden viikon kuluessa siitä, kun haastattelulinkki on vanhentunut.",
          },
          questions: [
            {
              id: "k12r6q1",
              type: "open",
              q: "Mitä harjoituskysymyksen vastaukselle tapahtuu?",
              accept: ["sitä ei tallenneta", "se ei tallennu eikä kukaan näe sitä", "ei mitään, sitä ei tallenneta"],
              keyNote: "It is not saved (and nobody sees it).",
              explain: "“Harjoitusvastausta ei tallenneta, eikä kukaan näe sitä.”",
            },
            {
              id: "k12r6q2",
              type: "open",
              q: "Mitä hakijan on hyvä tietää, jos hän haluaa nauhoittaa vastauksensa uudelleen?",
              hint: "(2 asiaa)",
              accept: [
                "sen voi tehdä vain kerran ja vain jälkimmäinen vastaus jää voimaan",
                "vain yhden kerran, ja ensimmäinen vastaus ei enää ole voimassa",
                "kerran uudelleen, viimeinen vastaus jää voimaan",
              ],
              keyNote: "Both: a re-recording is allowed only once AND only the later (second) answer remains valid.",
              explain: "“voit nauhoittaa sen kerran uudelleen. Huomaa, että silloin voimaan jää vain jälkimmäinen vastaus.”",
            },
            {
              id: "k12r6q3",
              type: "open",
              q: "Mitä hakija voi tehdä, jos videohaastattelu ei sovi hänelle esimerkiksi kuulovamman vuoksi?",
              accept: [
                "ottaa yhteyttä rekrytointitiimiin ja sopia puhelinhaastattelusta",
                "pyytää puhelinhaastattelua",
                "ottaa yhteyttä rekrytointitiimiin",
              ],
              keyNote: "Contact the recruitment team and arrange a phone interview instead.",
              explain: "“ota yhteyttä rekrytointitiimiin, niin sovimme puhelinhaastattelusta.”",
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
          id: "k12w1",
          title: "Tehtävä 1: Viesti vuokranantajalle",
          instructions: { fi: "Kirjoita viesti. Kirjoita noin 80–150 sanaa.", en: "Write a message of about 80–150 words." },
          prompt:
            "Asut vuokra-asunnossa, jonka omistaa Asuntopalvelu Kotisatama Oy. Olohuoneen ja makuuhuoneen ikkunat vetävät, ja asunnossa on syksyn tultua " +
            "ollut kylmä. Kirjoita sähköposti vuokranantajan asiakaspalveluun.",
          bullets: [
            "Kerro, kuka olet ja missä asut.",
            "Kuvaile ongelma ja kerro, milloin huomasit sen.",
            "Kerro, miten ongelma vaikuttaa arkeesi.",
            "Kerro, mitä olet jo itse yrittänyt tehdä asialle.",
            "Kysy, milloin vika korjataan, ja ehdota sinulle sopivaa aikaa korjaukselle.",
            "Kerro lisäksi ainakin kaksi muuta asiaa.",
            "Muista aloitus ja lopetus.",
          ],
          promptEn:
            "You rent a flat from a housing company. The living-room and bedroom windows are draughty and the flat has been cold since autumn. Email the landlord's customer service: say who you are and where you live, describe the problem and when you noticed it, say how it affects your daily life, say what you have already tried yourself, ask when it will be repaired and suggest a suitable time, and add at least two more points of your own.",
          register:
            "formal email to a company: Hyvä asiakaspalvelu / Hei, … Ystävällisin terveisin + full name and address; polite conditional (voisitteko, toivoisin), past tense for when the problem started",
          minWords: 80,
          maxWords: 150,
        },
        {
          id: "k12w2",
          title: "Tehtävä 2: Viesti ystävälle",
          instructions: { fi: "Kirjoita viesti. Kirjoita noin 60–120 sanaa.", en: "Write a message of about 60–120 words." },
          prompt:
            "Kävit eilen työhaastattelussa työpaikassa, johon olet halunnut pitkään. Ystäväsi Mikko auttoi sinua valmistautumaan haastatteluun. Kirjoita hänelle viesti.",
          bullets: [
            "Kiitä Mikkoa avusta.",
            "Kerro, miten haastattelu meni ja mikä siinä yllätti sinut.",
            "Kerro, mitä tapahtuu seuraavaksi.",
            "Ehdota, miten voisitte viettää aikaa yhdessä, kun saat tietää tuloksen.",
            "Muista aloitus ja lopetus.",
          ],
          promptEn:
            "Yesterday you had a job interview for a job you have wanted for a long time; your friend Mikko helped you prepare. Write to him: thank him, tell how the interview went and what surprised you, say what happens next, and suggest how you could spend time together when you hear the result.",
          register: "informal message to a friend: Moi Mikko! / Hei Mikko! … Terveisin / Nähdään! + first name; past tense narration, colloquial tone allowed",
          minWords: 60,
          maxWords: 120,
        },
        {
          id: "k12w3",
          title: "Tehtävä 3: Mielipideteksti",
          instructions: { fi: "Kirjoita mielipideteksti. Kirjoita noin 100–180 sanaa.", en: "Write an opinion text of about 100–180 words." },
          prompt: "Kaupunkisi asukaslehti kerää lukijoiden mielipiteitä ajankohtaisista aiheista. Valitse aihe A tai B ja kirjoita mielipidekirjoitus.",
          bullets: [
            "A. Kaupunki suunnittelee uuden asuinalueen rakentamista asukkaiden suosiman lähimetsän paikalle, koska kaupunkiin tarvitaan lisää kohtuuhintaisia asuntoja.",
            "B. Kaupoissa ja ravintoloissa heitetään joka päivä pois syömäkelpoista ruokaa. Pitäisikö ne velvoittaa lailla lahjoittamaan ylijäämäruoka?",
            "Kerro, mistä on kyse ja mitä mieltä olet asiasta. Perustele mielipiteesi ainakin kolmella tavalla.",
          ],
          promptEn:
            "A residents' newspaper collects readers' opinions. Choose A (building a new residential area on a popular local forest because affordable housing is needed) or B (should shops and restaurants be required by law to donate edible surplus food?). Say what the issue is and what you think, and justify your opinion in at least three ways.",
          register:
            "opinion text for a local paper: neutral written style, a clear opening statement, linked arguments (ensinnäkin, lisäksi, toisaalta, siksi), a conclusion; no greeting needed, may end with name/signature",
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
          id: "k12l1",
          title: "Tehtävä 1: Haastattelu",
          instructions: {
            fi: "Kuulet haastattelun kaksi kertaa. Lue ensin kysymykset. Valitse oikea vaihtoehto.",
            en: "You will hear an interview twice. Read the questions first. Choose the correct option.",
          },
          situation: "Radion työelämäohjelmassa haastatellaan rekrytointikonsultti Hanna Saloa työhaastatteluista.",
          plays: 2,
          rate: 1.0,
          lines: [
            {
              speaker: "Toimittaja",
              text: "Tervetuloa ohjelmaan, Hanna. Sä oot haastatellut työnhakijoita jo kohta viisitoista vuotta. Mikä on tänä aikana muuttunut eniten?",
            },
            {
              speaker: "Hanna",
              text:
                "Kiitos. No, isoin muutos on se, että ensimmäinen haastattelu tehdään nykyään usein videon välityksellä. Ennen melkein kaikki hakijat tavattiin heti kasvokkain. " +
                "Nyt kasvokkain tavataan yleensä vasta toisella kierroksella, kun jäljellä on enää kaksi tai kolme hakijaa.",
            },
            { speaker: "Toimittaja", text: "Mikä on yleisin virhe, jonka hakijat tekee?" },
            {
              speaker: "Hanna",
              text:
                "Moni valmistautuu kyllä huolellisesti, mutta väärällä tavalla. Ne opettelee ulkoa vastauksia tyypillisiin kysymyksiin, ja sitten vastaukset kuulostaa siltä " +
                "kuin ne luettaisiin paperista. Mä kuuntelen mieluummin vähän kömpelön mutta aidon vastauksen. Sen sijaan kannattaa miettiä etukäteen konkreettisia esimerkkejä omasta työhistoriasta.",
            },
            { speaker: "Toimittaja", text: "Entä se klassinen kysymys heikkouksista? Se jännittää monia." },
            {
              speaker: "Hanna",
              text:
                "Joo, ja siihen kuulee tosi usein vastauksen, että mä oon liian tunnollinen. Se ei kerro mitään. Hyvä vastaus on rehellinen, mutta siinä kerrotaan myös, " +
                "mitä on tehnyt asian eteen. Esimerkiksi: isolle ryhmälle puhuminen on ollut mulle vaikeaa, joten mä menin esiintymiskurssille.",
            },
            { speaker: "Toimittaja", text: "Pitääkö hakijan itse kysyä jotain haastattelun lopussa?" },
            {
              speaker: "Hanna",
              text:
                "Ehdottomasti. Jos hakijalla ei oo yhtään kysymystä, näyttää siltä, ettei työ oikeastaan kiinnosta. Palkasta saa toki kysyä, mutta mä en aloittaisi siitä. " +
                "Parempi kysyä vaikka, millainen on tavallinen työpäivä tai miten uusi työntekijä perehdytetään.",
            },
            { speaker: "Toimittaja", text: "Entä jos paikkaa ei tule? Kannattaako silloin pyytää palautetta?" },
            {
              speaker: "Hanna",
              text:
                "Kannattaa, ja yllättävän harva pyytää. Ihan kaikki rekrytoijat ei ehdi vastata, mutta useimmat vastaa mielellään, varsinkin jos hakija on päässyt toiselle kierrokselle. " +
                "Siitä oppii enemmän kuin mistään oppaasta.",
            },
          ],
          questions: [
            {
              id: "k12l1q1",
              type: "mc",
              q: "Miten työhaastattelut ovat Hannan mukaan muuttuneet?",
              options: [
                "Kaikki haastattelut tehdään nykyään videon välityksellä.",
                "Hakijat tavataan kasvokkain yleensä vasta myöhemmässä vaiheessa.",
                "Toiselle kierrokselle pääsee nykyään enemmän hakijoita kuin ennen.",
              ],
              answer: 1,
              explain:
                "“Nyt kasvokkain tavataan yleensä vasta toisella kierroksella.” Video is used “usein”, not for all interviews; only two or three applicants remain for round two.",
            },
            {
              id: "k12l1q2",
              type: "mc",
              q: "Mikä on Hannan mukaan hakijoiden yleisin virhe?",
              options: [
                "He eivät valmistaudu haastatteluun lainkaan.",
                "He puhuvat haastattelussa liian kömpelösti.",
                "He opettelevat valmiita vastauksia ulkoa.",
              ],
              answer: 2,
              explain:
                "“Ne opettelee ulkoa vastauksia tyypillisiin kysymyksiin.” They do prepare carefully, and Hanna actually prefers a slightly clumsy but genuine answer.",
            },
            {
              id: "k12l1q3",
              type: "mc",
              q: "Mitä Hanna neuvoo tekemään ennen haastattelua?",
              options: [
                "miettimään esimerkkejä omasta työkokemuksesta",
                "kirjoittamaan vastaukset paperille",
                "harjoittelemaan vastauksia tavallisimpiin kysymyksiin",
              ],
              answer: 0,
              explain: "“kannattaa miettiä etukäteen konkreettisia esimerkkejä omasta työhistoriasta.”",
            },
            {
              id: "k12l1q4",
              type: "mc",
              q: "Millainen on Hannan mielestä hyvä vastaus kysymykseen heikkouksista?",
              options: [
                "Hakija kertoo olevansa liian tunnollinen.",
                "Hakija ei kerro heikkouksistaan, vaan vahvuuksistaan.",
                "Hakija kertoo heikkoudestaan ja siitä, miten on yrittänyt kehittyä.",
              ],
              answer: 2,
              explain:
                "“Hyvä vastaus on rehellinen, mutta siinä kerrotaan myös, mitä on tehnyt asian eteen” (e.g. a presentation course). “Liian tunnollinen” is the answer that tells nothing.",
            },
            {
              id: "k12l1q5",
              type: "mc",
              q: "Mitä Hanna sanoo palkasta kysymisestä?",
              options: [
                "Palkasta saa kysyä, mutta sillä ei kannata aloittaa.",
                "Palkasta ei pidä kysyä ensimmäisessä haastattelussa.",
                "Palkasta kannattaa kysyä heti haastattelun alussa.",
              ],
              answer: 0,
              explain: "“Palkasta saa toki kysyä, mutta mä en aloittaisi siitä.”",
            },
            {
              id: "k12l1q6",
              type: "mc",
              q: "Mitä Hanna ajattelee palautteen pyytämisestä?",
              options: [
                "Rekrytoijat eivät yleensä ehdi vastata siihen.",
                "Se on hyödyllistä, mutta harva hakija tekee niin.",
                "Palautetta saa vain, jos on päässyt toiselle kierrokselle.",
              ],
              answer: 1,
              explain:
                "“Kannattaa, ja yllättävän harva pyytää.” Most recruiters answer gladly, especially (not only) after the second round.",
            },
          ],
        },
        {
          id: "k12l2",
          title: "Tehtävä 2: Keskustelu kaupassa",
          instructions: {
            fi: "Kuulet keskustelun kaksi kertaa. Ovatko väitteet oikein vai väärin?",
            en: "You will hear a conversation twice. Are the statements true or false?",
          },
          situation: "Asiakas asioi kauppahallin kalatiskillä.",
          plays: 2,
          rate: 1.0,
          lines: [
            { speaker: "Myyjä", text: "Päivää, mitä saisi olla?" },
            {
              speaker: "Asiakas",
              text:
                "Päivää. Mä tarvitsisin kalaa lauantaiksi, meille tulee kuusi vierasta. Ajattelin ensin lohta, mutta luin jostain, että kasvatettu lohi ei oo kovin ekologinen valinta. Pitääkö se paikkansa?",
            },
            {
              speaker: "Myyjä",
              text:
                "No, siitä on monta mielipidettä. Meidän lohi tulee Norjasta kasvattamosta. Jos haluatte kotimaista ja ympäristön kannalta parempaa, mä suosittelisin kuhaa tai siikaa. " +
                "Tai sitten särkeä tai lahnaa, mutta niitä harva osaa valmistaa.",
            },
            { speaker: "Asiakas", text: "Kuha kuulostaa hyvältä. Paljonko se maksaa?" },
            {
              speaker: "Myyjä",
              text: "Kuhafilee on tänään neljäkymmentäkaksi euroa kilo. Kuudelle hengelle tarvitsette noin kilon, jos on muutakin ruokaa.",
            },
            { speaker: "Asiakas", text: "Aika kallista. Entä siika?" },
            {
              speaker: "Myyjä",
              text: "Siika on vähän halvempaa, kolmekymmentäkuusi euroa kilo. Mutta siinä on enemmän ruotoja, eli jos vieraina on lapsia, kuha on helpompi.",
            },
            {
              speaker: "Asiakas",
              text: "Joo, tulee kaksi lasta. Otetaan sitten kuha. Mutta säilyykö se lauantaihin? Tänään on vasta keskiviikko.",
            },
            {
              speaker: "Myyjä",
              text:
                "Tuore kala kannattaa syödä päivän tai kahden sisällä. Sanoisin, että tulkaa mieluummin perjantaina. Tai jos se ei onnistu, voitte pakastaa kalan heti kotona ja sulattaa sen jääkaapissa yön yli.",
            },
            { speaker: "Asiakas", text: "Perjantaina mä oon töissä myöhään. Te ootte kai auki vaan kuuteen?" },
            {
              speaker: "Myyjä",
              text: "Perjantaisin ollaan auki seitsemään. Ja mä voin varata teille kilon kuhaa, niin se odottaa täällä valmiiksi pakattuna. Maksatte vasta, kun haette.",
            },
            { speaker: "Asiakas", text: "Loistavaa, tehdään niin. Ja vielä yks asia: mitä te teette kaloille, joita ei saada myytyä?" },
            {
              speaker: "Myyjä",
              text:
                "Illalla myydään hyväkuntoiset kalat puoleen hintaan, ja loput menee meidän keittiöön. Me tehdään niistä kalakeittoa ja kalapihvejä, joita myydään lounaalla. Hukkaan menee tosi vähän.",
            },
          ],
          questions: [
            {
              id: "k12l2q1",
              type: "tf",
              q: "Asiakas oli varma, että hän ostaa lohta, jo ennen kuin tuli kauppaan.",
              answer: false,
              explain: "He first thought of salmon, but had doubts because farmed salmon is not very ecological: “Pitääkö se paikkansa?”",
            },
            {
              id: "k12l2q2",
              type: "tf",
              q: "Myyjän mukaan kotimainen kuha on ympäristön kannalta parempi valinta kuin kasvatettu lohi.",
              answer: true,
              explain: "“Jos haluatte kotimaista ja ympäristön kannalta parempaa, mä suosittelisin kuhaa tai siikaa.”",
            },
            {
              id: "k12l2q3",
              type: "tf",
              q: "Asiakas valitsee kuhan, koska se on halvempaa kuin siika.",
              answer: false,
              explain: "Pike-perch is more expensive (42 € vs 36 €); he chooses it because whitefish has more bones and two children are coming.",
            },
            {
              id: "k12l2q4",
              type: "tf",
              q: "Myyjä neuvoo hakemaan kalan lähempänä juhlapäivää.",
              answer: true,
              explain: "“Tuore kala kannattaa syödä päivän tai kahden sisällä. … tulkaa mieluummin perjantaina.”",
            },
            {
              id: "k12l2q5",
              type: "tf",
              q: "Kalatiski on perjantaisin auki kello kuuteen.",
              answer: false,
              explain: "The customer guesses six, but the seller corrects: “Perjantaisin ollaan auki seitsemään.”",
            },
            {
              id: "k12l2q6",
              type: "tf",
              q: "Kalat, joita ei saada myytyä, heitetään illalla pois.",
              answer: false,
              explain: "Good fish are sold at half price in the evening, and the rest go to the kitchen for fish soup and patties sold at lunch: “Hukkaan menee tosi vähän.”",
            },
          ],
        },
        {
          id: "k12l3",
          title: "Tehtävä 3: Puhelu vuokranantajalle",
          instructions: {
            fi: "Kuulet puhelun kaksi kertaa. Lue ensin kysymykset. Vastaa lyhyesti suomeksi.",
            en: "You will hear a phone call twice. Read the questions first. Answer briefly in Finnish.",
          },
          situation: "Elina soittaa vuokra-asuntoja välittävään yritykseen asuntoilmoituksen takia.",
          plays: 2,
          rate: 1.0,
          lines: [
            { speaker: "Petri", text: "Asuntopalvelu Koti-Oiva, Petri puhelimessa." },
            {
              speaker: "Elina",
              text: "Hei, täällä Elina Rantanen. Mä soitan teidän nettisivuilla olevasta kaksiosta, joka on osoitteessa Puistokatu kymmenen. Onko se vielä vapaana?",
            },
            {
              speaker: "Petri",
              text:
                "Hetkinen… Valitettavasti siihen on jo valittu vuokralainen. Hakemuksia tuli yli neljäkymmentä. Mutta samassa talossa vapautuu kuun lopussa toinen kaksio, ylimmässä kerroksessa. Se ei oo vielä netissä.",
            },
            { speaker: "Elina", text: "Ai, kiinnostavaa. Minkä kokoinen se on, ja paljonko vuokra on?" },
            {
              speaker: "Petri",
              text: "Se on vähän pienempi, viisikymmentäkaksi neliötä, ja vuokra on yhdeksänsataaviisikymmentä euroa kuussa. Vesi maksetaan erikseen, kaksikymmentä euroa henkeä kohden.",
            },
            { speaker: "Elina", text: "Okei. Onko siinä parveke? Ja saako siellä pitää kissaa?" },
            {
              speaker: "Petri",
              text: "Parveke on, ja se on vielä lasitettu. Lemmikit on sallittuja, mutta niistä pitää kertoa hakemuksessa. Tupakointi on kielletty sekä asunnossa että parvekkeella.",
            },
            { speaker: "Elina", text: "Selvä. Miten mä voin hakea sitä?" },
            {
              speaker: "Petri",
              text:
                "Täyttäkää hakemus meidän nettisivuilla ja kirjoittakaa lisätietoihin, että haette juuri tätä asuntoa, eli Puistokatu kymmenen, asunto kaksikymmentäkaksi. " +
                "Me tarkistetaan kaikkien hakijoiden luottotiedot. Ja vakuus on kahden kuukauden vuokra, eli tuhat yhdeksänsataa euroa.",
            },
            { speaker: "Elina", text: "Voiko asuntoa käydä katsomassa?" },
            {
              speaker: "Petri",
              text:
                "Nykyinen asukas asuu siellä vielä, mutta näyttö on sovittu ensi tiistaiksi kello viisi. Ei kun anteeksi, kello kuusi. Sinne ei tarvitse ilmoittautua etukäteen, tulkaa vaan paikalle.",
            },
            { speaker: "Elina", text: "Hyvä, mä tuun. Kiitos paljon!" },
          ],
          questions: [
            {
              id: "k12l3q1",
              type: "open",
              q: "Miksi Elina ei voi saada asuntoa, jonka takia hän soittaa?",
              accept: ["siihen on jo valittu vuokralainen", "se on jo vuokrattu toiselle", "joku muu sai sen jo"],
              keyNote: "A tenant has already been chosen for it (there were over forty applications).",
              explain: "“Valitettavasti siihen on jo valittu vuokralainen.”",
            },
            {
              id: "k12l3q2",
              type: "open",
              q: "Mitä Elina maksaisi uudesta asunnosta joka kuukausi?",
              hint: "(2 asiaa)",
              accept: [
                "vuokran 950 euroa ja vesimaksun 20 euroa hengeltä",
                "950 euroa vuokraa ja vedestä 20 euroa",
                "vuokra ja vesi",
              ],
              keyNote: "Both: rent 950 € a month AND water 20 € per person. The 1 900 € deposit is a one-off payment, not monthly.",
              explain: "“vuokra on yhdeksänsataaviisikymmentä euroa kuussa. Vesi maksetaan erikseen, kaksikymmentä euroa henkeä kohden.”",
            },
            {
              id: "k12l3q3",
              type: "open",
              q: "Mitä Elinan pitää mainita hakemuksessaan?",
              hint: "(2 asiaa)",
              accept: [
                "että hän hakee juuri asuntoa 22 ja että hänellä on kissa",
                "asunnon osoite ja numero sekä kissa",
                "Puistokatu 10, asunto 22, ja lemmikki",
              ],
              keyNote: "Both: that she is applying for this specific flat (Puistokatu 10, flat 22) AND that she has a cat (pets must be mentioned).",
              explain:
                "“kirjoittakaa lisätietoihin, että haette juuri tätä asuntoa” and “Lemmikit on sallittuja, mutta niistä pitää kertoa hakemuksessa” — Elina has asked about keeping a cat.",
            },
            {
              id: "k12l3q4",
              type: "open",
              q: "Milloin asuntoa voi käydä katsomassa?",
              accept: ["ensi tiistaina kello kuusi", "tiistaina klo 18", "tiistaina kuudelta"],
              keyNote: "Next Tuesday at six (18.00). Five o'clock is wrong — Petri corrects himself.",
              explain: "“näyttö on sovittu ensi tiistaiksi kello viisi. Ei kun anteeksi, kello kuusi.”",
            },
          ],
        },
        {
          id: "k12l4",
          title: "Tehtävä 4: Radiouutinen",
          instructions: {
            fi: "Kuulet uutisen kaksi kertaa. Lue ensin kysymykset. Valitse oikea vaihtoehto.",
            en: "You will hear a news report twice. Read the questions first. Choose the correct option.",
          },
          situation: "Kuulet radiosta uutisen.",
          plays: 2,
          rate: 1.0,
          lines: [
            {
              speaker: "Uutistenlukija",
              text:
                "Kirjastoissa käydään taas yhtä paljon kuin ennen koronavuosia. Tuoreen tilaston mukaan yleisiin kirjastoihin tehtiin viime vuonna noin viisikymmentä miljoonaa käyntiä. " +
                "Lainojen määrä ei kuitenkaan ole kasvanut samaa tahtia, vaan se on pysynyt lähes ennallaan.",
            },
            {
              speaker: "Uutistenlukija",
              text:
                "Asiantuntijoiden mukaan luvut kertovat siitä, että kirjastoon ei enää tulla vain lainaamaan kirjoja. Yhä useampi käyttää kirjastoa työskentelyyn, opiskeluun ja tapaamisiin. " +
                "Erityisesti nuoret aikuiset viettävät kirjastossa aikaa, koska siellä saa olla ilman, että täytyy ostaa mitään.",
            },
            {
              speaker: "Uutistenlukija",
              text:
                "Suosio tuo myös haasteita. Monissa kirjastoissa työpisteet ja ryhmätilat ovat iltaisin täynnä, ja asiakkaat valittavat melusta. Osa kirjastoista on jakanut tilansa " +
                "hiljaisiin alueisiin ja alueisiin, joissa saa keskustella. Henkilökunnalta pyydetään yhä useammin apua myös asioihin, jotka eivät liity kirjoihin, esimerkiksi viranomaisten lomakkeiden täyttämiseen.",
            },
            {
              speaker: "Uutistenlukija",
              text:
                "Kuntien taloustilanne huolestuttaa alaa. Useat kunnat ovat suunnitelleet säästävänsä vähentämällä henkilökunnan työtunteja ja lisäämällä omatoimiaikaa. " +
                "Kirjastoseura muistuttaa, että omatoimiaika ei voi korvata henkilökuntaa, sillä neuvontaa tarvitsevat usein juuri ne, joilla ei ole muuta paikkaa, josta apua saisi.",
            },
          ],
          questions: [
            {
              id: "k12l4q1",
              type: "mc",
              q: "Mitä tilasto kertoo kirjastojen käytöstä?",
              options: [
                "Sekä käyntejä että lainoja on aiempaa enemmän.",
                "Käyntejä on yhtä paljon kuin ennen, mutta lainojen määrä ei ole kasvanut.",
                "Kirjastoissa käydään nyt vähemmän kuin ennen koronavuosia.",
              ],
              answer: 1,
              explain: "Visits are back at pre-pandemic level, but loans “ei kuitenkaan ole kasvanut samaa tahtia, vaan … pysynyt lähes ennallaan”.",
            },
            {
              id: "k12l4q2",
              type: "mc",
              q: "Miksi nuoret aikuiset viettävät aikaa kirjastossa?",
              options: [
                "Siellä on rauhallisempaa kuin kotona.",
                "Siellä on hyvät tietokoneet opiskeluun.",
                "Siellä voi olla käyttämättä rahaa.",
              ],
              answer: 2,
              explain: "“siellä saa olla ilman, että täytyy ostaa mitään.”",
            },
            {
              id: "k12l4q3",
              type: "mc",
              q: "Mikä ongelma kirjastojen suosiosta on seurannut?",
              options: [
                "Tilat ovat iltaisin täynnä ja meluisia.",
                "Asiakkaat eivät enää halua hiljaisia tiloja.",
                "Kirjoja katoaa aiempaa enemmän.",
              ],
              answer: 0,
              explain: "“työpisteet ja ryhmätilat ovat iltaisin täynnä, ja asiakkaat valittavat melusta.”",
            },
            {
              id: "k12l4q4",
              type: "mc",
              q: "Millaista apua henkilökunnalta pyydetään yhä useammin?",
              options: [
                "apua ryhmätilojen varaamiseen",
                "apua virallisten lomakkeiden täyttämiseen",
                "apua sopivien kirjojen löytämiseen",
              ],
              answer: 1,
              explain: "Help with things not related to books, “esimerkiksi viranomaisten lomakkeiden täyttämiseen”.",
            },
            {
              id: "k12l4q5",
              type: "mc",
              q: "Mitä Kirjastoseura korostaa?",
              options: [
                "Omatoimiaika on hyvä tapa säästää kirjastojen kuluissa.",
                "Kirjastojen pitäisi olla auki myös öisin.",
                "Henkilökuntaa tarvitaan erityisesti niitä varten, joilla ei ole muuta avun lähdettä.",
              ],
              answer: 2,
              explain: "“omatoimiaika ei voi korvata henkilökuntaa, sillä neuvontaa tarvitsevat usein juuri ne, joilla ei ole muuta paikkaa, josta apua saisi.”",
            },
          ],
        },
        {
          id: "k12l5",
          title: "Tehtävä 5: Mainoksia ja tiedotteita",
          instructions: {
            fi: "Kuulet viisi lyhyttä mainosta tai tiedotetta kaksi kertaa. Jokaisesta on yksi väite. Onko väite oikein vai väärin?",
            en: "You will hear five short adverts or announcements twice. There is one statement about each. Is it true or false?",
          },
          situation: "Kuulet radiosta ja kaupungin tiedotuskanavilta lyhyitä mainoksia ja tiedotteita.",
          plays: 2,
          rate: 1.0,
          lines: [
            {
              speaker: "Mainos 1",
              text:
                "Nukutko huonosti? Uniklinikan kuuden viikon verkkokurssilla opit keinoja, joilla nukahdat helpommin ilman lääkkeitä. Kurssi on maksuton, " +
                "jos sinulla on lääkärin lähete. Ilman lähetettä kurssi maksaa sataviisikymmentä euroa.",
            },
            {
              speaker: "Tiedote 2",
              text:
                "Asuntomessujen kävijöille tiedoksi: messualueelle ei pääse omalla autolla. Ilmaiset messubussit lähtevät rautatieasemalta puolen tunnin välein. " +
                "Liput kannattaa ostaa etukäteen verkosta, koska portilta ostettu lippu on viisi euroa kalliimpi.",
            },
            {
              speaker: "Mainos 3",
              text:
                "Lähiapaja muistuttaa: joka ilta kello kuudesta alkaen kaikki tuotteet, joiden päiväys on umpeutumassa, ovat puoleen hintaan. " +
                "Voit myös varata sovelluksesta hävikkikassin, mutta kassi on haettava samana päivänä ennen sulkemisaikaa kello yhdeksää.",
            },
            {
              speaker: "Tiedote 4",
              text:
                "Kaupunginkirjaston tiedote. Torstaiksi suunniteltu kirjailijavierailu siirtyy esiintyjän sairastumisen vuoksi ensi kuun kolmanteen päivään. " +
                "Ilmoittautumiset ovat edelleen voimassa. Jos uusi ajankohta ei sovi sinulle, peru paikkasi, jotta jonossa olevat pääsevät mukaan.",
            },
            {
              speaker: "Mainos 5",
              text:
                "Rekrymessut lauantaina ammattikorkeakoululla! Paikalla on yli kuusikymmentä työnantajaa. Ota mukaan ansioluettelosi. Kello kymmenestä kahteentoista " +
                "voit myös harjoitella työhaastattelua ammattilaisen kanssa. Paikkoja on rajoitetusti, joten varaa aika etukäteen.",
            },
          ],
          questions: [
            {
              id: "k12l5q1",
              type: "tf",
              q: "Mainos 1: Uniklinikan verkkokurssi on kaikille osallistujille maksuton.",
              answer: false,
              explain: "Free only with a doctor's referral; without one it costs 150 €.",
            },
            {
              id: "k12l5q2",
              type: "tf",
              q: "Tiedote 2: Verkosta ostettu lippu on halvempi kuin portilta ostettu.",
              answer: true,
              explain: "“portilta ostettu lippu on viisi euroa kalliimpi.”",
            },
            {
              id: "k12l5q3",
              type: "tf",
              q: "Mainos 3: Varatun hävikkikassin voi hakea myös seuraavana aamuna.",
              answer: false,
              explain: "“kassi on haettava samana päivänä ennen sulkemisaikaa kello yhdeksää.”",
            },
            {
              id: "k12l5q4",
              type: "tf",
              q: "Tiedote 4: Kirjailijavierailuun ilmoittautuneiden on ilmoittauduttava uudelleen.",
              answer: false,
              explain: "“Ilmoittautumiset ovat edelleen voimassa.” Only those who cannot come should cancel.",
            },
            {
              id: "k12l5q5",
              type: "tf",
              q: "Mainos 5: Työhaastattelun harjoitteluun on varattava aika ennakkoon.",
              answer: true,
              explain: "“Paikkoja on rajoitetusti, joten varaa aika etukäteen.”",
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
          id: "k12s1",
          kind: "kertominen",
          title: "Tehtävä 1: Kertominen",
          instructions: {
            fi: "Sinulla on minuutti aikaa valmistautua. Voit tehdä muistiinpanoja. Puhu noin puolitoista minuuttia. Aloita puhuminen vasta, kun kuulet äänimerkin.",
            en: "You have one minute to prepare and may take notes. Speak for about a minute and a half. Start only after the beep.",
          },
          prepSec: 60,
          card: {
            title: "Kerro asuinalueestasi.",
            questions: [
              "Millainen alue on, ja millaisia ihmisiä siellä asuu?",
              "Mitä palveluja alueella on, ja mitä sieltä puuttuu?",
              "Miten alue on muuttunut sinä aikana, kun olet asunut siellä?",
              "Mitä muuttaisit alueella, jos saisit päättää?",
            ],
          },
          items: [{ id: "a", spoken: "Kerro asuinalueestasi. Aloita puhuminen nyt.", speakSec: 90 }],
        },
        {
          id: "k12s2",
          kind: "keskustelu",
          title: "Tehtävä 2: Keskustelu A",
          instructions: {
            fi: "Kuulet keskustelun, jossa puhut vuorotellen toisen henkilön kanssa. Lue tilanne ja ohjeet. Puhu, kun kuulet äänimerkin.",
            en: "You will take turns with another speaker. Read the situation and the cues. Speak after the beep.",
          },
          prepSec: 30,
          card: {
            title:
              "Olet asukasyhdistyksen jäsen. Yhdistys haluaa järjestää kirjastossa avoimen illan, jossa naapurit voivat vaihtaa keskenään huonekasveja ja siemeniä. Soitat kirjaston asiakaspalveluun varataksesi tilan.",
            questions: [],
          },
          items: [
            {
              id: "a",
              spoken: "Kaupunginkirjasto, Sari puhelimessa, hyvää päivää.",
              cue: "[Esittele itsesi ja kerro, miksi soitat.]",
              speakSec: 20,
            },
            {
              id: "b",
              spoken: "Kiva idea! Mille päivälle ja kuinka monelle ihmiselle tarvitsisitte tilaa?",
              cue: "[Kerro toivomasi päivä ja kellonaika sekä arvioitu osallistujamäärä.]",
              speakSec: 20,
            },
            {
              id: "c",
              spoken: "Hmm, kokoushuone on sille illalle jo varattu. Aulassa olisi kyllä tilaa, mutta siellä kulkee koko ajan muitakin asiakkaita. Kävisikö aula teille?",
              cue: "[Kerro, sopiiko aula, ja perustele.]",
              speakSec: 20,
            },
            {
              id: "d",
              spoken: "Hyvä. Minun pitää vielä kysyä, myydäänkö tilaisuudessa jotain. Kirjastossa ei saa myydä tavaroita.",
              cue: "[Kerro, miten vaihtaminen toimii, ja vakuuta, ettei mitään myydä.]",
              speakSec: 20,
            },
            {
              id: "e",
              spoken: "Selvä. Voimme mainostaa tapahtumaa kirjaston nettisivuilla, jos lähetätte meille lyhyen kuvauksen. Tarvitsetteko vielä jotain muuta, esimerkiksi pöytiä?",
              cue: "[Kerro, mitä tarvitsette, ja kysy, mihin mennessä kuvaus pitää lähettää.]",
              speakSec: 20,
            },
            {
              id: "f",
              spoken: "Kuvaus olisi hyvä saada viimeistään viikkoa ennen. Lähetän teille vielä vahvistuksen sähköpostilla. Mihin osoitteeseen sen voi lähettää?",
              cue: "[Kerro sähköpostiosoitteesi ja kiitä.]",
              speakSec: 15,
            },
          ],
        },
        {
          id: "k12s3",
          kind: "keskustelu",
          title: "Tehtävä 2: Keskustelu B",
          instructions: {
            fi: "Kuulet keskustelun, jossa puhut vuorotellen toisen henkilön kanssa. Lue tilanne ja ohjeet. Puhu, kun kuulet äänimerkin.",
            en: "You will take turns with another speaker. Read the situation and the cues. Speak after the beep.",
          },
          prepSec: 30,
          card: {
            title:
              "Olet hakenut myyjän paikkaa urheiluliikkeestä. Olet nyt työhaastattelussa, ja myymäläpäällikkö Antti Korhonen haastattelee sinua.",
            questions: [],
          },
          items: [
            {
              id: "a",
              spoken: "Hei ja tervetuloa! Kiva, että pääsit tulemaan. Kerro aluksi vähän itsestäsi.",
              cue: "[Esittele itsesi ja kerro lyhyesti taustastasi.]",
              speakSec: 20,
            },
            {
              id: "b",
              spoken: "Kiitos. Miksi haet töihin juuri meille?",
              cue: "[Kerro ainakin kaksi syytä.]",
              speakSec: 20,
            },
            {
              id: "c",
              spoken: "Myyjän työssä tulee joskus vastaan hankalia asiakkaita. Kerro jostain tilanteesta, jossa olet joutunut ratkaisemaan ongelman.",
              cue: "[Kerro esimerkki ja kerro, miten toimit.]",
              speakSec: 25,
            },
            {
              id: "d",
              spoken: "Hyvä esimerkki. Työ on vuorotyötä, ja viikonloppuisin on yleensä kiireisintä. Miten se sopisi sinulle?",
              cue: "[Kerro, milloin voit tehdä töitä ja onko sinulla rajoituksia.]",
              speakSec: 20,
            },
            {
              id: "e",
              spoken: "Selvä, kiitos. Onko sinulla jotain kysyttävää meiltä?",
              cue: "[Kysy ainakin yksi asia työstä tai työpaikasta.]",
              speakSec: 15,
            },
            {
              id: "f",
              spoken: "Hyvä kysymys. Perehdytys kestää kaksi viikkoa, ja sen ajan työskentelet kokeneen myyjän kanssa. Ilmoitamme valinnasta ensi viikon perjantaina. Kiitos, että tulit!",
              cue: "[Kiitä ja lopeta keskustelu kohteliaasti.]",
              speakSec: 10,
            },
          ],
        },
        {
          id: "k12s4",
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
              situation: "Ystäväsi kysyy, voisitko lainata hänelle autoasi viikonlopuksi. Tarvitset auton itse lauantaina. Mitä sanot?",
              spoken: "Tilanne 1. Ystäväsi kysyy, voisitko lainata hänelle autoasi viikonlopuksi. Tarvitset auton itse lauantaina. Mitä sanot?",
              prepSec: 20,
              speakSec: 20,
            },
            {
              id: "b",
              situation: "Kylpyhuoneesi lattiakaivo on tukossa, ja vettä nousee lattialle. Soitat huoltoyhtiöön. Mitä sanot?",
              spoken: "Tilanne 2. Kylpyhuoneesi lattiakaivo on tukossa, ja vettä nousee lattialle. Soitat huoltoyhtiöön. Mitä sanot?",
              prepSec: 20,
              speakSec: 30,
            },
            {
              id: "c",
              situation: "Olit sopinut ystäväsi kanssa lounaasta, mutta unohdit sen kokonaan. Ystävä soittaa ja kysyy, missä olet. Mitä sanot?",
              spoken: "Tilanne 3. Olit sopinut ystäväsi kanssa lounaasta, mutta unohdit sen kokonaan. Ystävä soittaa ja kysyy, missä olet. Mitä sanot?",
              prepSec: 20,
              speakSec: 30,
            },
            {
              id: "d",
              situation: "Naapurisi soittaa joka ilta myöhään kovaa musiikkia, etkä saa nukuttua. Tapaat hänet porraskäytävässä. Mitä sanot?",
              spoken: "Tilanne 4. Naapurisi soittaa joka ilta myöhään kovaa musiikkia, etkä saa nukuttua. Tapaat hänet porraskäytävässä. Mitä sanot?",
              prepSec: 20,
              speakSec: 30,
            },
            {
              id: "e",
              situation: "Olet kirjastossa ja haluaisit tulostaa työhakemuksen, mutta et osaa käyttää tulostinta. Pyydät apua kirjaston työntekijältä. Mitä sanot?",
              spoken: "Tilanne 5. Olet kirjastossa ja haluaisit tulostaa työhakemuksen, mutta et osaa käyttää tulostinta. Pyydät apua kirjaston työntekijältä. Mitä sanot?",
              prepSec: 20,
              speakSec: 30,
            },
          ],
        },
        {
          id: "k12s5",
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
              "A. Ruokahävikki: Heitetäänkö Suomessa liikaa ruokaa pois? Kenen vastuulla hävikin vähentäminen on – kauppojen, ravintoloiden vai kuluttajien? Mitä sinä itse teet, jotta ruokaa ei menisi hukkaan?",
              "B. Uni ja hyvinvointi: Pitäisikö koulu- ja työpäivien alkaa myöhemmin, jotta ihmiset nukkuisivat paremmin? Mitä hyötyä ja haittaa siitä olisi? Miten yhteiskunta voisi tukea riittävää unta?",
            ],
          },
          items: [{ id: "a", spoken: "Kerro mielipiteesi valitsemastasi aiheesta. Aloita puhuminen nyt.", speakSec: 120 }],
        },
      ],
    },
  ],
};
