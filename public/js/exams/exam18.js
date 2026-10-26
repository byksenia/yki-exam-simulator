// Keskitaso 8
export default {
  id: "koe18",
  title: "Keskitaso 8",
  level: "keskitaso",
  description: "Summer festivals, domestic tourism and cottage rental, museums, reading habits, sports clubs and coaching, adult hobbies.",
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
          id: "k18r1",
          title: "Tehtävä 1: Uutinen",
          instructions: {
            fi: "Lue uutinen ja vastaa kysymyksiin. Valitse oikea vaihtoehto.",
            en: "Read the news item and answer the questions. Choose the correct option.",
          },
          text: {
            title: "Rantajuhlat muuttavat satamaan – lippuja myydään entistä vähemmän",
            body:
              "Järvenkylän suosittu kesäfestivaali Rantajuhlat järjestetään ensi kesänä uudessa paikassa. Kolmipäiväinen tapahtuma siirtyy keskustan puistosta vanhalle satama-alueelle, " +
              "jossa on tilaa sekä esiintymislavoille että ruokakojuille. Samalla järjestäjät vähentävät myytävien lippujen määrää noin kahdellatuhannella, joten festivaalilla voi olla " +
              "päivittäin enintään kahdeksantuhatta kävijää.\n\n" +
              "Festivaalin toiminnanjohtaja Pia Laaksonen kertoo, että päätökseen vaikuttivat ennen kaikkea viime kesän kokemukset. ”Puisto oli lauantaina niin täynnä, että jonot " +
              "vessoihin ja ruokakojuille venyivät kohtuuttomiksi. Emme halua kasvaa hinnalla millä hyvänsä, vaan haluamme, että kävijöillä on hyvä olla”, Laaksonen sanoo. " +
              "Hänen mukaansa pienempi kävijämäärä ei tarkoita, että lippujen hinnat nousisivat. Päivälippu maksaa edelleen 59 euroa.\n\n" +
              "Muutos ilahduttaa erityisesti puiston lähellä asuvia. Taloyhtiöt ovat valittaneet kaupungille vuosittain melusta ja roskista, jotka ovat jääneet nurmikolle " +
              "viikoiksi. Satama-alueelta lähimpiin asuintaloihin on matkaa puoli kilometriä.\n\n" +
              "Kaikki eivät kuitenkaan ole tyytyväisiä. Keskustassa kahvilaa pitävä Mikko Hirvonen pelkää, että festivaalikävijät viettävät koko viikonlopun satamassa " +
              "eivätkä poikkea enää keskustaan. ”Rantajuhlien viikonloppu on ollut meille vuoden paras. Nyt en tiedä, mitä odottaa”, hän sanoo.\n\n" +
              "Järjestäjät aikovat ratkaista ongelman yhteistyöllä. Keskustan yrittäjät voivat vuokrata satamasta myyntipaikan puoleen hintaan, ja festivaalirannekkeella " +
              "saa alennusta keskustan ravintoloista koko viikonlopun ajan. Lisäksi sataman ja keskustan välillä kulkee maksuton bussi puolen tunnin välein.",
          },
          questions: [
            {
              id: "k18r1q1",
              type: "mc",
              q: "Miksi festivaali siirtyy uuteen paikkaan ja lippuja myydään vähemmän?",
              options: [
                "Kävijät valittivat lippujen liian korkeasta hinnasta.",
                "Edellisenä kesänä alueella oli niin paljon ihmisiä, että jonot olivat liian pitkiä.",
                "Kaupunki kielsi järjestämästä tapahtumaa puistossa asukkaiden valitusten takia.",
              ],
              answer: 1,
              explain:
                "Laaksonen says the park was so full that queues “venyivät kohtuuttomiksi”. Residents did complain to the city, but the text does not say the city banned the event; prices stay the same.",
            },
            {
              id: "k18r1q2",
              type: "mc",
              q: "Mitä tekstissä kerrotaan lippujen hinnasta?",
              options: [
                "Päivälippu kallistuu, koska kävijöitä on aiempaa vähemmän.",
                "Festivaalirannekkeella saa alennusta päivälipusta.",
                "Päivälipun hinta pysyy ennallaan.",
              ],
              answer: 2,
              explain:
                "“pienempi kävijämäärä ei tarkoita, että lippujen hinnat nousisivat. Päivälippu maksaa edelleen 59 euroa.” The wristband gives discounts in restaurants, not on the ticket.",
            },
            {
              id: "k18r1q3",
              type: "mc",
              q: "Miksi Mikko Hirvonen on huolissaan?",
              options: [
                "Hän pelkää, etteivät festivaalikävijät tule enää keskustaan.",
                "Hänen kahvilansa ei saa myyntipaikkaa satamasta.",
                "Festivaalin melu häiritsee hänen kahvilansa asiakkaita.",
              ],
              answer: 0,
              explain:
                "He fears visitors spend the weekend at the harbour “eivätkä poikkea enää keskustaan”. Noise was the residents' complaint, not his.",
            },
            {
              id: "k18r1q4",
              type: "mc",
              q: "Miten järjestäjät aikovat auttaa keskustan yrittäjiä?",
              options: [
                "Yrittäjät saavat myyntipaikan satamasta maksutta.",
                "Festivaalikävijät saavat rannekkeella etuja keskustan ravintoloista.",
                "Osa festivaalin ohjelmasta järjestetään keskustassa.",
              ],
              answer: 1,
              explain:
                "“festivaalirannekkeella saa alennusta keskustan ravintoloista.” The sales spot costs half price (“puoleen hintaan”), not nothing; no programme is moved to the centre.",
            },
          ],
        },
        {
          id: "k18r2",
          title: "Tehtävä 2: Kuluttaja-artikkeli",
          instructions: {
            fi: "Lue artikkeli. Ovatko väitteet oikein vai väärin?",
            en: "Read the article. Are the statements true (oikein) or false (väärin)?",
          },
          text: {
            title: "Mökkiloma kotimaassa – lue vuokraehdot ennen kuin maksat",
            body:
              "Kotimaan matkailu on kasvanut viime vuosina tasaisesti, ja yhä useampi suomalainen viettää lomansa vuokramökillä järven rannalla tai tunturissa. " +
              "Suosituimmat kohteet varataan jo talvella, ja kiire voi houkutella tekemään päätöksiä liian nopeasti. Kuluttajaneuvonnan mukaan mökkien vuokraukseen " +
              "liittyvät valitukset koskevat useimmiten peruutuksia, siivousta ja sitä, ettei mökki vastaa ilmoitusta.\n\n" +
              "Ensimmäiseksi kannattaa tietää, ettei majoituspalveluilla ole samanlaista 14 päivän peruuttamisoikeutta kuin verkosta ostetuilla tavaroilla. " +
              "Peruutusehdot riippuvat siitä, mitä vuokrasopimuksessa on sovittu. Monilla vuokranantajilla peruutus on maksuton, jos se tehdään viimeistään kuukautta ennen lomaa. " +
              "Sen jälkeen osa vuokrasta tai koko summa voi jäädä maksettavaksi. Matkavakuutus saattaa korvata peruutuksen, jos syynä on esimerkiksi äkillinen sairastuminen, " +
              "mutta ei silloin, jos vain muuttaa mieltään.\n\n" +
              "Toinen yleinen riidan aihe on loppusiivous. Joissakin mökeissä siivous kuuluu hintaan, toisissa siitä peritään erillinen maksu, ja joskus vuokralaisen odotetaan " +
              "siivoavan itse. Jos sopimuksessa lukee, että vuokralainen siivoaa, mutta mökki jää likaiseksi, omistaja voi periä siivouksesta kohtuullisen korvauksen. " +
              "Kannattaa siis kysyä etukäteen, mitä siivous tarkoittaa: riittääkö, että astiat on tiskattu ja roskat viety, vai pitääkö myös lattiat pestä. " +
              "Samalla on hyvä tarkistaa, mitä muuta hintaan kuuluu. Monissa mökeissä vuokralaisen on tuotava omat lakanat ja pyyhkeet tai vuokrattava ne erikseen. " +
              "Vaikka ilmoituksessa mainittaisiin puulämmitteinen sauna, ei ole itsestään selvää, että myös polttopuut sisältyvät vuokraan.\n\n" +
              "Jos mökki ei vastaa sitä, mitä ilmoituksessa luvattiin – esimerkiksi sauna ei toimi tai luvattua venettä ei ole – siitä on ilmoitettava omistajalle heti. " +
              "Kuluttajaneuvoja Tiina Salo muistuttaa, ettei virheestä kannata valittaa vasta kotona. ”Omistajalla pitää olla mahdollisuus korjata asia loman aikana. " +
              "Jos hän ei korjaa sitä, vuokralainen voi vaatia hinnanalennusta”, Salo sanoo. Puutteista kannattaa ottaa kuvia ja ilmoittaa niistä mieluiten kirjallisesti, " +
              "esimerkiksi tekstiviestillä.\n\n" +
              "Viime vuosina myös huijaukset ovat yleistyneet. Huijari kopioi oikean mökin kuvat ja tarjoaa mökkiä vuokralle muita halvemmalla. Varoitusmerkkejä ovat " +
              "poikkeuksellisen edullinen hinta, kiirehtiminen ja se, että koko vuokra pyydetään maksamaan etukäteen ulkomaiselle tilille. Turvallisinta on varata mökki " +
              "tunnetun välittäjän kautta tai tarkistaa omistajan yhteystiedot ennen maksamista. Salon mukaan kannattaa myös etsiä mökin osoite karttapalvelusta ja katsoa, " +
              "onko sama mökki ilmoitettu vuokralle toisella nimellä.\n\n" +
              "Lemmikin kanssa matkustavan kannattaa olla tarkkana. Kaikkiin mökkeihin ei saa tuoda eläimiä, ja jos koiran ottaa mukaan luvatta, omistaja voi periä " +
              "lisämaksun tai jopa purkaa sopimuksen.",
          },
          questions: [
            {
              id: "k18r2q1",
              type: "tf",
              q: "Mökin vuokraajalla ei ole samaa 14 päivän peruuttamisoikeutta kuin verkkokaupan asiakkaalla.",
              answer: true,
              explain: "“majoituspalveluilla ole samanlaista 14 päivän peruuttamisoikeutta kuin verkosta ostetuilla tavaroilla.”",
            },
            {
              id: "k18r2q2",
              type: "tf",
              q: "Matkavakuutus korvaa yleensä peruutuksen silloinkin, kun lomalainen vain muuttaa suunnitelmiaan.",
              answer: false,
              explain: "Insurance may cover sudden illness, “mutta ei silloin, jos vain muuttaa mieltään”.",
            },
            {
              id: "k18r2q3",
              type: "tf",
              q: "Loppusiivous sisältyy aina mökin vuokraan.",
              answer: false,
              explain: "“Joissakin mökeissä siivous kuuluu hintaan, toisissa siitä peritään erillinen maksu, ja joskus vuokralaisen odotetaan siivoavan itse.”",
            },
            {
              id: "k18r2q4",
              type: "tf",
              q: "Jos vuokralainen jättää mökin likaiseksi, vaikka siivous oli hänen tehtävänsä, omistaja voi vaatia häneltä maksua.",
              answer: true,
              explain: "“omistaja voi periä siivouksesta kohtuullisen korvauksen.”",
            },
            {
              id: "k18r2q5",
              type: "tf",
              q: "Puutteista kannattaa ilmoittaa omistajalle vasta loman jälkeen, kun kaikki viat ovat selvillä.",
              answer: false,
              explain: "Report at once — “virheestä ei kannata valittaa vasta kotona”; the owner must be able to fix it during the holiday.",
            },
            {
              id: "k18r2q6",
              type: "tf",
              q: "Selvästi muita halvempi vuokrahinta voi olla merkki huijauksesta.",
              answer: true,
              explain: "Warning signs include “poikkeuksellisen edullinen hinta”.",
            },
            {
              id: "k18r2q7",
              type: "tf",
              q: "Lemmikin saa ottaa mukaan mihin tahansa mökkiin, kunhan maksaa siitä lisämaksun.",
              answer: false,
              explain: "“Kaikkiin mökkeihin ei saa tuoda eläimiä.” The extra fee is a sanction for bringing a dog without permission, not a way to buy permission.",
            },
          ],
        },
        {
          id: "k18r3",
          title: "Tehtävä 3: Tiedote",
          instructions: {
            fi: "Lue tiedote ja vastaa kysymyksiin suomeksi. Vastaa lyhyesti.",
            en: "Read the notice and answer the questions in Finnish. Answer briefly.",
          },
          text: {
            title: "Kaupunginmuseo tiedottaa: kesän aukioloajat ja opastukset",
            body:
              "Kesäkuun alusta elokuun loppuun kaupunginmuseo on avoinna joka päivä kello 10–18. Syyskuusta alkaen palataan talven aukioloaikoihin, jolloin museo on " +
              "maanantaisin suljettu. Pääsylippu maksaa aikuisilta 12 euroa sekä opiskelijoilta ja eläkeläisiltä 8 euroa. Alle 18-vuotiaat pääsevät museoon maksutta, " +
              "samoin Museokortin haltijat.\n\n" +
              "Perjantaisin kello 16–18 sisäänpääsy on kaikille ilmainen. Huomaa, että silloin myös opastukset ovat suosittuja, joten tule ajoissa.\n\n" +
              "Suomenkielinen opastettu kierros järjestetään joka päivä kello 13. Kierros kestää noin tunnin, eikä siihen tarvitse ilmoittautua etukäteen. Opastus sisältyy " +
              "pääsylipun hintaan. Ryhmät (yli 10 henkeä) voivat varata oman opastuksen myös muulla kielellä. Ryhmäopastus on varattava vähintään kaksi viikkoa etukäteen, " +
              "ja se maksaa 90 euroa pääsylippujen lisäksi.\n\n" +
              "Kesän erikoisnäyttely ”Kesä ennen vanhaan” kertoo, miten kaupunkilaiset lomailivat 1900-luvun alussa. Museon pihalla voi kokeilla vanhoja pihaleikkejä. " +
              "Pihalla toimii myös kahvila, jonne pääsee ilman pääsylippua.\n\n" +
              "Museon pääsisäänkäynnissä on portaita. Pyörätuolilla tai lastenvaunujen kanssa liikkuvat voivat käyttää sisäpihan puoleista sisäänkäyntiä, josta on hissi " +
              "kaikkiin kerroksiin. Isot laukut ja reput on jätettävä maksuttomiin säilytyslokeroihin.",
          },
          questions: [
            {
              id: "k18r3q1",
              type: "open",
              q: "Ketkä pääsevät museoon ilmaiseksi mihin aikaan tahansa?",
              hint: "(2 ryhmää)",
              accept: [
                "alle 18-vuotiaat ja Museokortin haltijat",
                "lapset ja nuoret sekä ne, joilla on Museokortti",
                "alaikäiset ja museokortilla tulevat",
              ],
              keyNote: "Both: under-18s AND Museokortti (museum card) holders. 'Everyone on Friday 4–6 p.m.' is only at a certain time, so it does not answer 'mihin aikaan tahansa'.",
              explain: "“Alle 18-vuotiaat pääsevät museoon maksutta, samoin Museokortin haltijat.”",
            },
            {
              id: "k18r3q2",
              type: "open",
              q: "Yhdistyksesi (15 henkeä) haluaa oman opastuksen englanniksi. Mitä teidän pitää ottaa huomioon?",
              hint: "(2 asiaa)",
              accept: [
                "opastus pitää varata vähintään kaksi viikkoa etukäteen ja se maksaa 90 euroa lippujen lisäksi",
                "varaus kaksi viikkoa ennen, hinta 90 euroa ja pääsyliput",
                "pitää varata ajoissa ja maksaa 90 euroa lisää",
              ],
              keyNote: "Both: book at least two weeks in advance AND it costs 90 € on top of the entrance tickets.",
              explain: "“Ryhmäopastus on varattava vähintään kaksi viikkoa etukäteen, ja se maksaa 90 euroa pääsylippujen lisäksi.”",
            },
            {
              id: "k18r3q3",
              type: "open",
              q: "Miksi lastenvaunujen kanssa liikkuvan kannattaa käyttää sisäpihan puoleista sisäänkäyntiä?",
              accept: [
                "koska pääsisäänkäynnissä on portaita",
                "sieltä on hissi kaikkiin kerroksiin",
                "pääovella on portaat, sisäpihalla hissi",
              ],
              keyNote: "Because the main entrance has stairs / the courtyard entrance has a lift to all floors. Either reason earns the point.",
              explain: "“Museon pääsisäänkäynnissä on portaita … sisäpihan puoleista sisäänkäyntiä, josta on hissi kaikkiin kerroksiin.”",
            },
            {
              id: "k18r3q4",
              type: "open",
              q: "Miten museon aukiolo muuttuu syyskuussa?",
              accept: [
                "museo on maanantaisin suljettu",
                "maanantaisin museo on kiinni",
                "se ei ole enää auki joka päivä, maanantaina suljettu",
              ],
              keyNote: "From September the museum is closed on Mondays (winter opening hours).",
              explain: "“Syyskuusta alkaen palataan talven aukioloaikoihin, jolloin museo on maanantaisin suljettu.”",
            },
          ],
        },
        {
          id: "k18r4",
          title: "Tehtävä 4: Kolumni",
          instructions: {
            fi: "Lue kolumni ja vastaa kysymyksiin. Valitse oikea vaihtoehto.",
            en: "Read the column and answer the questions. Choose the correct option.",
          },
          text: {
            title: "Kirjat, jotka jäivät kesken – Anu Kallio",
            body:
              "Lapsena luin kaiken, mitä käsiini sain. Kirjastosta kannoin kotiin kassillisen kirjoja kerrallaan, ja lomilla luin aamusta iltaan. Vielä opiskeluaikoinakin " +
              "luin ainakin yhden romaanin viikossa. Jossain vaiheessa, en tarkalleen tiedä milloin, lukeminen loppui. En päättänyt lopettaa. Kirjoja vain alkoi jäädä kesken: luin " +
              "kymmenen sivua, sitten puhelin piippasi, ja kun palasin kirjan pariin, en enää muistanut, mitä olin lukenut.\n\n" +
              "Pitkään syytin tästä kiirettä. Työ, perhe ja kotityöt veivät ajan, ja illalla olin liian väsynyt keskittymään. Totuus oli kuitenkin epämukavampi. " +
              "Kun tarkistin, kuinka paljon aikaa käytin puhelimeen, luku oli yli kolme tuntia päivässä. Aikaa siis oli, mutta se valui uutisten, viestien ja " +
              "lyhyiden videoiden selaamiseen.\n\n" +
              "En ole ainoa. Tutkimusten mukaan suomalaiset lukevat kirjoja vähemmän kuin kymmenen vuotta sitten, vaikka äänikirjojen kuuntelu on lisääntynyt nopeasti. " +
              "Jotkut pitävät äänikirjoja oikotienä, joka ei ole oikeaa lukemista. Minä en ole samaa mieltä: tarina on tarina, luki sen sitten itse tai kuunteli. Äänikirjat eivät " +
              "kuitenkaan ratkaisseet minun ongelmaani, koska kuuntelin niitä vain taustalla, kun tein jotain muuta.\n\n" +
              "Käänne tuli viime syksynä, kun naapurini pyysi minua mukaan kirjaston lukupiiriin. Suostuin lähinnä kohteliaisuudesta. Ensimmäiseen tapaamiseen menin " +
              "lukematta kirjaa loppuun ja häpesin. Kukaan ei kuitenkaan moittinut minua. Keskustelu oli niin kiinnostava, että seuraavan kirjan luin kokonaan, vaikka " +
              "se oli paksu ja alussa tylsä. Ryhmässämme on kahdeksan ihmistä: nuorin on parikymppinen opiskelija ja vanhin yli kahdeksankymppinen eläkeläinen. " +
              "Emme ole aina samaa mieltä, ja juuri se tekee keskusteluista kiinnostavia. Kirja, josta en itse pitänyt lainkaan, voi näyttää toisen silmin aivan erilaiselta. " +
              "Kirjasto varaa meille kirjat ja tilan, joten osallistuminen ei maksa mitään.\n\n" +
              "Lukupiiri toi lukemiseen sen, mikä siitä oli puuttunut: syyn jatkaa silloinkin, kun kirja ei heti vie mukanaan. Kun tiedän, että kuukauden päästä " +
              "puhumme kirjasta yhdessä, en luovuta kahdenkymmenen sivun jälkeen. Lisäksi luen nyt kirjoja, joita en olisi koskaan valinnut itse. Viimeksi luin " +
              "elämäkerran ihmisestä, josta en ollut kuullutkaan, ja se oli vuoden paras lukukokemukseni.\n\n" +
              "En väitä, että lukupiiri sopii kaikille. Moni haluaa lukea yksin ja omaan tahtiinsa, ja hyvä niin. Uskon kuitenkin, että moni, joka sanoo, ettei hänellä " +
              "ole aikaa lukea, kaipaa oikeastaan jotain muuta: seuraa ja sopivasti painetta. Puhelimen jätän nykyään lukiessani toiseen huoneeseen. Se oli aluksi " +
              "vaikeampaa kuin uskoin.",
          },
          questions: [
            {
              id: "k18r4q1",
              type: "mc",
              q: "Miksi kirjoittajan lukeminen loppui?",
              options: [
                "Hän päätti käyttää vapaa-aikansa muihin asioihin.",
                "Hänen keskittymisensä katkesi jatkuvasti, ja kirjat jäivät kesken.",
                "Työ ja perhe veivät häneltä kaiken vapaa-ajan.",
              ],
              answer: 1,
              explain:
                "“En päättänyt lopettaa. Kirjoja vain alkoi jäädä kesken” — the phone kept interrupting. She first blamed lack of time, but that turned out not to be true.",
            },
            {
              id: "k18r4q2",
              type: "mc",
              q: "Mitä kirjoittaja huomasi tarkistaessaan puhelimen käyttöaikansa?",
              options: [
                "Kiire ei ollut todellinen syy siihen, ettei hän lukenut.",
                "Hän luki puhelimella enemmän uutisia kuin ennen kirjoja.",
                "Hän käytti puhelinta vähemmän kuin oli luullut.",
              ],
              answer: 0,
              explain: "Over three hours a day: “Aikaa siis oli” — the time existed but went to scrolling. “Totuus oli kuitenkin epämukavampi.”",
            },
            {
              id: "k18r4q3",
              type: "mc",
              q: "Miten kirjoittaja suhtautuu äänikirjoihin?",
              options: [
                "Hänen mielestään ne eivät ole oikeaa lukemista.",
                "Hän pitää niitä hyvänä tapana nauttia tarinoista, vaikka ne eivät auttaneet häntä itseään.",
                "Hän kuuntelee nykyään äänikirjoja enemmän kuin lukee.",
              ],
              answer: 1,
              explain:
                "“Minä en ole samaa mieltä: tarina on tarina, luki sen sitten itse tai kuunteli.” But they did not solve her problem because she listened only in the background. Option A is the view of “jotkut”.",
            },
            {
              id: "k18r4q4",
              type: "mc",
              q: "Miksi kirjoittaja lähti mukaan lukupiiriin?",
              options: [
                "Hän ei halunnut kieltäytyä naapurinsa kutsusta.",
                "Hän halusi tutustua uusiin ihmisiin.",
                "Hän halusi oppia valitsemaan parempia kirjoja.",
              ],
              answer: 0,
              explain: "“Suostuin lähinnä kohteliaisuudesta” — out of politeness towards the neighbour who invited her.",
            },
            {
              id: "k18r4q5",
              type: "mc",
              q: "Mikä seuraavista on kolumnissa mielipide eikä tosiasia?",
              options: [
                "Suomalaiset lukevat kirjoja vähemmän kuin kymmenen vuotta sitten.",
                "Moni, joka sanoo, ettei ehdi lukea, kaipaa oikeastaan seuraa ja painetta.",
                "Kirjoittaja luki viimeksi elämäkerran.",
              ],
              answer: 1,
              explain: "Introduced with “Uskon kuitenkin, että …” — the writer's belief. A is a research finding, C a reported event.",
            },
            {
              id: "k18r4q6",
              type: "mc",
              q: "Mikä on kolumnin pääajatus?",
              options: [
                "Puhelimet pitäisi kieltää, jotta ihmiset lukisivat enemmän.",
                "Kaikkien, jotka eivät enää lue, pitäisi liittyä lukupiiriin.",
                "Lukupiiri voi auttaa palaamaan kirjojen pariin, koska se antaa syyn jatkaa lukemista.",
              ],
              answer: 2,
              explain:
                "The reading circle gave her “syyn jatkaa silloinkin, kun kirja ei heti vie mukanaan”. She explicitly says it does not suit everyone, so C is too strong.",
            },
          ],
        },
        {
          id: "k18r5",
          title: "Tehtävä 5: Mielipidekirjoitus",
          instructions: {
            fi: "Lue mielipidekirjoitus. Ovatko väitteet oikein vai väärin?",
            en: "Read the letter to the editor. Are the statements true (oikein) or false (väärin)?",
          },
          text: {
            title: "Vapaaehtoiset valmentajat uupuvat – seuran on jaettava vastuuta",
            body:
              "Olen valmentanut poikani jalkapallojoukkuetta vapaaehtoisena nyt neljä vuotta. Pidän tehtävästä, ja lasten innostus palkitsee. Viime aikoina olen " +
              "kuitenkin alkanut miettiä, kuinka kauan jaksan.\n\n" +
              "Kun aloitin, minun tehtäväni oli vetää harjoitukset kahdesti viikossa ja käydä joukkueen kanssa turnauksissa. Nyt seura odottaa valmentajilta myös otteluiden " +
              "kuvaamista, viikoittaisia raportteja ja vanhempien viestiryhmän hoitamista. Lisäksi valmentajan pitää osallistua kahteen koulutukseen vuodessa. Koulutukset " +
              "ovat sinänsä hyödyllisiä, mutta ne järjestetään viikonloppuisin, omalla ajalla.\n\n" +
              "En vaadi palkkaa. Tiedän, että seuran talous on tiukalla ja että kausimaksut ovat jo nyt monelle perheelle liian korkeat. Toivoisin kuitenkin, että " +
              "tehtäviä jaettaisiin useammalle. Jokaisessa joukkueessa on kymmeniä vanhempia. Jos jokainen ottaisi hoitaakseen yhden pienen asian, esimerkiksi " +
              "kuljetukset tai varustevaraston, valmentaja voisi keskittyä siihen, mikä on tärkeintä: lasten kanssa harjoittelemiseen.\n\n" +
              "Naapuriseurassa on jo kokeiltu mallia, jossa jokaisen perheen on tehtävä kauden aikana kaksi talkoovuoroa. Kuulemani mukaan valmentajat ovat siellä " +
              "pysyneet mukana selvästi pidempään kuin meillä.\n\n" +
              "Seuramme vuosikokous pidetään marraskuussa. Toivon, että valmentajien jaksaminen on silloin esityslistalla ja että myös vanhemmat tulevat paikalle. " +
              "Jos me valmentajat lopetamme, joukkueita ei kohta ole lainkaan.\n\n" +
              "Juha Mattila, vapaaehtoinen valmentaja",
          },
          questions: [
            {
              id: "k18r5q1",
              type: "tf",
              q: "Kirjoittaja on päättänyt lopettaa valmentamisen kauden lopussa.",
              answer: false,
              explain: "He only wonders “kuinka kauan jaksan” — no decision to stop has been made.",
            },
            {
              id: "k18r5q2",
              type: "tf",
              q: "Valmentajan tehtävät ovat lisääntyneet sen jälkeen, kun kirjoittaja aloitti.",
              answer: true,
              explain: "At first two practices and tournaments; “Nyt seura odottaa valmentajilta myös …” filming, reports and the parents' chat group.",
            },
            {
              id: "k18r5q3",
              type: "tf",
              q: "Kirjoittajan mielestä valmentajien koulutukset ovat turhia.",
              answer: false,
              explain: "“Koulutukset ovat sinänsä hyödyllisiä” — his problem is that they take weekends.",
            },
            {
              id: "k18r5q4",
              type: "tf",
              q: "Kirjoittaja ehdottaa, että valmentajille aletaan maksaa palkkaa.",
              answer: false,
              explain: "“En vaadi palkkaa.” He proposes sharing tasks among parents.",
            },
            {
              id: "k18r5q5",
              type: "tf",
              q: "Kirjoittaja on kuullut, että naapuriseurassa valmentajat jatkavat tehtävässään pidempään.",
              answer: true,
              explain: "“Kuulemani mukaan valmentajat ovat siellä pysyneet mukana selvästi pidempään kuin meillä.”",
            },
            {
              id: "k18r5q6",
              type: "tf",
              q: "Kirjoittaja toivoo, että vanhemmat osallistuvat seuran vuosikokoukseen.",
              answer: true,
              explain: "“Toivon, että … myös vanhemmat tulevat paikalle.”",
            },
          ],
        },
        {
          id: "k18r6",
          title: "Tehtävä 6: Ohje",
          instructions: {
            fi: "Lue ohje ja vastaa kysymyksiin suomeksi. Vastaa lyhyesti.",
            en: "Read the instructions and answer the questions in Finnish. Answer briefly.",
          },
          text: {
            title: "Kaupungin viljelypalstat – näin haet omaa palstaa",
            body:
              "Kaupunki vuokraa asukkaille viljelypalstoja kolmella palsta-alueella. Palstan koko on noin 50 neliömetriä, ja sen vuokra on 40 euroa kaudelta. " +
              "Vuokraan sisältyvät kasteluvesi ja yhteiset työkalut. Kausi kestää toukokuun alusta lokakuun loppuun.\n\n" +
              "1. Täytä hakulomake kaupungin verkkosivuilla maaliskuun aikana (1.–31.3.). Kukin kotitalous voi hakea vain yhtä palstaa.\n" +
              "2. Jos hakijoita on enemmän kuin palstoja, palstat arvotaan. Tuloksista ilmoitetaan sähköpostilla huhtikuun puoliväliin mennessä.\n" +
              "3. Maksa vuokra laskun eräpäivään mennessä. Jos vuokraa ei ole maksettu, palsta annetaan seuraavalle jonossa olevalle.\n\n" +
              "Palstoilla noudatetaan seuraavia sääntöjä. Lannoitteiksi kelpaavat vain luonnonmukaiset tuotteet, eikä kemiallisia torjunta-aineita saa käyttää lainkaan. " +
              "Palstan on oltava viljelyssä viimeistään 15. kesäkuuta. Jos palsta on silloin vielä hoitamatta, kaupunki voi antaa sen toiselle ilman ennakkoilmoitusta. " +
              "Palstalle ei saa rakentaa pysyviä rakennelmia, kuten varastoja tai kasvihuoneita, ilman kaupungin lupaa. Kasvijätteet viedään alueen yhteisiin kompostoreihin, " +
              "ja kauden päätyttyä palsta on tyhjennettävä lokakuun loppuun mennessä.\n\n" +
              "Jos olet edellisellä kaudella hoitanut palstaasi sääntöjen mukaan, voit jatkaa samalla palstalla ilman arvontaa. Jatkamisesta on ilmoitettava 28.2. mennessä.",
          },
          questions: [
            {
              id: "k18r6q1",
              type: "open",
              q: "Mitä palstan vuokraan kuuluu?",
              hint: "(2 asiaa)",
              accept: [
                "kasteluvesi ja yhteiset työkalut",
                "vesi ja työkalut",
                "kasteluvettä ja työkaluja saa käyttää",
              ],
              keyNote: "Both: irrigation water AND the shared tools.",
              explain: "“Vuokraan sisältyvät kasteluvesi ja yhteiset työkalut.”",
            },
            {
              id: "k18r6q2",
              type: "open",
              q: "Mitä voi tapahtua, jos vuokraaja ei ole aloittanut viljelyä kesäkuun puoliväliin mennessä?",
              accept: [
                "kaupunki voi antaa palstan toiselle ilman ennakkoilmoitusta",
                "hän voi menettää palstansa",
                "palsta annetaan jollekin toiselle varoittamatta",
              ],
              keyNote: "The city may give the plot to someone else without prior notice (he/she loses the plot).",
              explain: "“Jos palsta on silloin vielä hoitamatta, kaupunki voi antaa sen toiselle ilman ennakkoilmoitusta.”",
            },
            {
              id: "k18r6q3",
              type: "open",
              q: "Mitä edellisellä kaudella palstaansa sääntöjen mukaan hoitaneen pitää tehdä, jos hän haluaa saman palstan ilman arvontaa?",
              accept: [
                "ilmoittaa jatkamisesta 28.2. mennessä",
                "ilmoittaa helmikuun loppuun mennessä, että haluaa jatkaa",
                "kertoa kaupungille ennen maaliskuuta, että jatkaa",
              ],
              keyNote: "Notify the city that he/she wants to continue by 28 February. Filling in the March application form is wrong (that is for the lottery).",
              explain: "“Jatkamisesta on ilmoitettava 28.2. mennessä.”",
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
          id: "k18w1",
          title: "Tehtävä 1: Viesti urheiluseuralle",
          instructions: { fi: "Kirjoita viesti. Kirjoita noin 80–150 sanaa.", en: "Write a message of about 80–150 words." },
          prompt:
            "Muutit hiljattain uudelle paikkakunnalle. Yhdeksänvuotias lapsesi haluaisi aloittaa jalkapallon paikallisessa urheiluseurassa, mutta seuran verkkosivujen mukaan " +
            "hänen ikäryhmänsä on täynnä. Kirjoita sähköposti Pallo-Ketut ry:n junioripäällikölle Timo Lindqvistille.",
          bullets: [
            "Esittele itsesi ja lapsesi lyhyesti.",
            "Kerro, miksi lapsesi haluaa pelata juuri tässä seurassa.",
            "Kerro, millaista kokemusta lapsellasi on jalkapallosta.",
            "Kysy, onko ryhmään jonoa ja voiko lapsi sillä välin osallistua johonkin muuhun toimintaan.",
            "Kerro, miten voisit itse auttaa seuran toiminnassa.",
            "Kerro lisäksi ainakin kaksi muuta asiaa.",
            "Muista aloitus ja lopetus.",
          ],
          promptEn:
            "You recently moved to a new town. Your nine-year-old wants to start football in the local club, but the age group is full. Email the club's youth manager Timo Lindqvist: introduce yourself and your child, say why the child wants to play in this club, describe the child's football experience, ask about a waiting list and whether the child could join some other activity meanwhile, say how you could help the club yourself, and add at least two more points of your own.",
          register: "formal email to an organisation: Hyvä Timo Lindqvist / Hei Timo Lindqvist … Ystävällisin terveisin + full name; polite conditional (haluaisin, olisiko mahdollista, voisinko)",
          minWords: 80,
          maxWords: 150,
        },
        {
          id: "k18w2",
          title: "Tehtävä 2: Viesti ystävälle",
          instructions: { fi: "Kirjoita viesti. Kirjoita noin 60–120 sanaa.", en: "Write a message of about 60–120 words." },
          prompt:
            "Teit viime viikolla muutaman päivän lomamatkan Suomessa. Ystäväsi Mikael on miettinyt, minne lähtisi kesälomallaan, ja kysyi sinulta neuvoa. Kirjoita hänelle viesti.",
          bullets: [
            "Kerro, missä kävit ja mitä teit matkalla.",
            "Kerro, mikä matkalla yllätti sinut.",
            "Kerro, mitä tekisit seuraavalla kerralla toisin.",
            "Ehdota Mikaelille sopivaa matkakohdetta ja perustele ehdotuksesi.",
            "Muista aloitus ja lopetus.",
          ],
          promptEn:
            "Last week you took a short holiday trip in Finland. Your friend Mikael is wondering where to go on his summer holiday and asked your advice. Tell where you went and what you did, what surprised you, what you would do differently next time, and suggest a destination for Mikael with a reason.",
          register: "informal message to a friend: Moi Mikael! / Hei! … Terkuin / Nähdään! + first name; past tense narration, conditional for 'what I would do differently', colloquial tone allowed",
          minWords: 60,
          maxWords: 120,
        },
        {
          id: "k18w3",
          title: "Tehtävä 3: Mielipideteksti",
          instructions: { fi: "Kirjoita mielipideteksti. Kirjoita noin 100–180 sanaa.", en: "Write an opinion text of about 100–180 words." },
          prompt:
            "Kaupungin asukaslehti julkaisee lukijoiden mielipidekirjoituksia. Valitse aihe A tai B ja kirjoita mielipidekirjoitus.",
          bullets: [
            "A. Kaupunki harkitsee, että kaupungin museoihin pääsisi jatkossa maksutta. Rahat siihen otettaisiin muista kulttuuripalveluista.",
            "B. Kaupungin keskustassa järjestetään joka kesä useita suuria musiikkifestivaaleja. Osa asukkaista haluaisi siirtää ne kauemmas asuinalueilta.",
            "Kerro, mistä on kyse ja mitä mieltä olet asiasta. Perustele mielipiteesi ainakin kolmella tavalla.",
          ],
          promptEn:
            "A city residents' magazine publishes readers' opinions. Choose A (free entry to the city's museums, paid for by cutting other cultural services) or B (moving the big summer music festivals away from the city centre and residential areas). Say what the issue is and what you think, and justify your opinion in at least three ways.",
          register: "opinion text for a local magazine: neutral written style, a clear opening statement, linked arguments (ensinnäkin, lisäksi, toisaalta, siksi), a conclusion; no greeting needed, may end with name/signature",
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
        "Tässä osakokeessa kuuntelet erilaisia puhuttuja tekstejä: haastattelun, keskustelun asiakaspalvelussa, puhelun, radiouutisen sekä lyhyitä mainoksia ja tiedotteita. Osakokeessa on viisi tehtävää. Ennen jokaista tekstiä sinulla on aikaa lukea kysymykset. Kuulet jokaisen tekstin kaksi kertaa. Pitkät tekstit kuulet toisella kerralla osissa, ja osien välissä on aikaa vastata. Äänite etenee automaattisesti, etkä voi pysäyttää sitä. Vastaa avoimiin kysymyksiin suomeksi ja lyhyesti.",
      aika: "Osakoe kestää noin 40 minuuttia.",
      tasks: [
        {
          id: "k18l1",
          title: "Tehtävä 1: Haastattelu",
          instructions: {
            fi: "Kuulet haastattelun kaksi kertaa. Lue ensin kysymykset. Valitse oikea vaihtoehto.",
            en: "You will hear an interview twice. Read the questions first. Choose the correct option.",
          },
          situation: "Paikallisradiossa haastatellaan Elina Rautiaista, joka valmentaa vapaaehtoisena tyttöjen salibandyjoukkuetta.",
          plays: 2,
          rate: 1.0,
          lines: [
            {
              speaker: "Toimittaja",
              text: "Elina, sä olet valmentanut tyttöjen salibandyjoukkuetta jo monta vuotta. Miten sä alun perin päädyit valmentajaksi?",
            },
            {
              speaker: "Elina",
              text:
                "No, aika sattumalta oikeastaan. Mun tytär aloitti salibandyn kahdeksanvuotiaana, eikä joukkueella ollut valmentajaa. Mä ajattelin, että autan pari kuukautta, " +
                "kunnes löytyy joku oikea valmentaja. Siitä on nyt kuusi vuotta.",
            },
            { speaker: "Toimittaja", text: "Mikä valmentamisessa on parasta?" },
            {
              speaker: "Elina",
              text:
                "Se, kun näkee, miten lapsi, joka ei aluksi uskalla edes ottaa palloa, alkaa vähitellen luottaa itseensä. Tulokset ei ole mulle se tärkein asia. " +
                "Me hävitään aika paljon pelejä, mutta silti tytöt tulee treeneihin hymyillen.",
            },
            { speaker: "Toimittaja", text: "Moni lapsi lopettaa urheiluharrastuksen murrosiässä. Näkyykö se teillä?" },
            {
              speaker: "Elina",
              text:
                "Näkyy. Varsinkin kolmentoista, neljäntoista vuoden iässä moni lopettaa. Syitä on monia, mutta yksi iso syy on se, että harrastus muuttuu liian vakavaksi. " +
                "Treenejä on neljä kertaa viikossa, ja jos ei pääse peliin, tuntuu, ettei kuulu joukkoon. Siksi meillä on nyt myös harrasteryhmä, jossa pelataan kerran viikossa ilman sarjaotteluita.",
            },
            { speaker: "Toimittaja", text: "Entä harrastuksen hinta?" },
            {
              speaker: "Elina",
              text:
                "Se on kyllä ongelma. Kausimaksu on meillä noin neljäsataa euroa, ja sitten tulee vielä varusteet ja turnausmatkat. Seura yrittää pitää maksut kohtuullisina, " +
                "ja jos perheellä on taloudellisesti vaikeaa, kausimaksuun voi hakea alennusta. Kaikki vaan ei kehtaa kysyä.",
            },
            { speaker: "Toimittaja", text: "Millainen ihminen sopii valmentajaksi?" },
            {
              speaker: "Elina",
              text:
                "Ei tarvitse olla entinen huippupelaaja. Mä en ole itse koskaan pelannut salibandya kilpatasolla. Tärkeintä on, että tykkää lapsista ja jaksaa olla paikalla " +
                "säännöllisesti. Lajitaidot oppii kyllä seuran koulutuksissa.",
            },
            { speaker: "Toimittaja", text: "Ja mitä toivoisit vanhemmilta?" },
            {
              speaker: "Elina",
              text:
                "Että ne kannustaisi omien lasten lisäksi myös muita. Ja ettei katsomosta huudettaisi ohjeita, koska se vaan sekoittaa tyttöjä. Ohjeet antaa valmentaja.",
            },
          ],
          questions: [
            {
              id: "k18l1q1",
              type: "mc",
              q: "Miten Elinasta tuli valmentaja?",
              options: [
                "Seura pyysi häntä, koska hän oli itse pelannut salibandya.",
                "Hän lupasi auttaa vähäksi aikaa, koska joukkueelta puuttui valmentaja.",
                "Hän halusi valmentaa tyttärensä joukkueen kilpatasolle.",
              ],
              answer: 1,
              explain: "The team had no coach; she thought she would help “pari kuukautta, kunnes löytyy joku oikea valmentaja”. She never played at competitive level.",
            },
            {
              id: "k18l1q2",
              type: "mc",
              q: "Mikä valmentamisessa on Elinalle tärkeintä?",
              options: [
                "joukkueen menestys otteluissa",
                "uusien pelaajien saaminen joukkueeseen",
                "lasten itseluottamuksen kasvu",
              ],
              answer: 2,
              explain: "A child who did not dare to take the ball “alkaa vähitellen luottaa itseensä”. Results are not the most important thing.",
            },
            {
              id: "k18l1q3",
              type: "mc",
              q: "Mikä on Elinan mukaan yksi tärkeä syy siihen, että nuoret lopettavat harrastuksen?",
              options: [
                "Kausimaksut nousevat nuorten joukkueissa.",
                "Harrastus vaatii paljon ja muuttuu liian vakavaksi.",
                "Nuoret kiinnostuvat muista lajeista.",
              ],
              answer: 1,
              explain: "“harrastus muuttuu liian vakavaksi” — four practices a week and the feeling of not belonging if you don't get to play.",
            },
            {
              id: "k18l1q4",
              type: "mc",
              q: "Mitä seura on tehnyt tämän ongelman takia?",
              options: [
                "Se on perustanut ryhmän, joka pelaa kerran viikossa ilman sarjaotteluita.",
                "Se on vähentänyt kaikkien joukkueiden harjoituksia.",
                "Se on laskenut nuorten kausimaksuja.",
              ],
              answer: 0,
              explain: "“meillä on nyt myös harrasteryhmä, jossa pelataan kerran viikossa ilman sarjaotteluita.”",
            },
            {
              id: "k18l1q5",
              type: "mc",
              q: "Mitä Elina sanoo harrastuksen kustannuksista?",
              options: [
                "Kaikki perheet eivät uskalla pyytää alennusta, vaikka sitä voisi saada.",
                "Seura maksaa vähävaraisten perheiden varusteet.",
                "Turnausmatkat sisältyvät kausimaksuun.",
              ],
              answer: 0,
              explain: "A reduced fee can be applied for, but “Kaikki vaan ei kehtaa kysyä.” Equipment and trips come on top of the fee.",
            },
            {
              id: "k18l1q6",
              type: "mc",
              q: "Mitä Elina toivoo vanhemmilta?",
              options: [
                "että he auttaisivat valmentajaa harjoituksissa",
                "että he osallistuisivat seuran valmentajakoulutuksiin",
                "että he kannustaisivat kaikkia pelaajia eivätkä antaisi ohjeita katsomosta",
              ],
              answer: 2,
              explain: "Parents should cheer “omien lasten lisäksi myös muita” and not shout instructions: “Ohjeet antaa valmentaja.”",
            },
          ],
        },
        {
          id: "k18l2",
          title: "Tehtävä 2: Keskustelu vuokraamossa",
          instructions: {
            fi: "Kuulet keskustelun kaksi kertaa. Ovatko väitteet oikein vai väärin?",
            en: "You will hear a conversation twice. Are the statements true or false?",
          },
          situation: "Asiakas vuokraa kanoottia melontaretkeä varten.",
          plays: 2,
          rate: 1.0,
          lines: [
            { speaker: "Myyjä", text: "Hei, tervetuloa! Miten voin auttaa?" },
            {
              speaker: "Asiakas",
              text: "Hei. Me ollaan lähdössä kaverin kanssa melomaan tänä viikonloppuna, ja haluttaisiin vuokrata kanootti kahdeksi päiväksi. Tai ei kun kolmeksi, me tullaan takaisin vasta maanantaina.",
            },
            {
              speaker: "Myyjä",
              text: "Selvä. Kahden hengen kanootti maksaa kolmekymmentäviisi euroa päivältä, eli kolmelta päivältä sataviisi euroa. Hintaan kuuluu melat, pelastusliivit ja vedenpitävä säkki tavaroille.",
            },
            { speaker: "Asiakas", text: "Okei. Entä teltta? Meillä ei ole omaa." },
            {
              speaker: "Myyjä",
              text: "Telttoja vuokrataan erikseen, kymmenen euroa vuorokausi. Mutta reitin varrella on myös kaksi laavua, joissa saa yöpyä ilmaiseksi. Ne on kyllä viikonloppuisin usein täynnä.",
            },
            { speaker: "Asiakas", text: "Otetaan sitten teltta varmuuden vuoksi. Onko reitti vaikea? Me ei olla kumpikaan meloneet kovin paljon." },
            {
              speaker: "Myyjä",
              text:
                "Reitti on pääosin helppo, mutta toisena päivänä tulee yksi koski. Sitä ei kannata laskea, jos ei ole kokemusta. Ennen koskea on rantautumispaikka, " +
                "ja kanootin voi kantaa polkua pitkin kosken ohi. Matkaa on vain pari sataa metriä.",
            },
            { speaker: "Asiakas", text: "Hyvä tietää. Entä jos sää on huono? Voiko vuokran perua?" },
            {
              speaker: "Myyjä",
              text:
                "Jos Ilmatieteen laitos antaa myrskyvaroituksen, voitte perua maksutta. Muuten peruutus pitää tehdä viimeistään edellisenä päivänä, ja siitä peritään kymmenen euron toimistomaksu.",
            },
            { speaker: "Asiakas", text: "Okei. Pitääkö kanootti tuoda tänne takaisin?" },
            {
              speaker: "Myyjä",
              text:
                "Ei tarvitse, me haetaan se reitin päätepisteestä. Ilmoittakaa vaan tekstiviestillä, kun olette perillä. Ja vielä yksi juttu: tarvitsen teiltä henkilökortin tai ajokortin, ja vuokra maksetaan etukäteen.",
            },
          ],
          questions: [
            {
              id: "k18l2q1",
              type: "tf",
              q: "Asiakas vuokraa kanootin kahdeksi päiväksi.",
              answer: false,
              explain: "He corrects himself: “Tai ei kun kolmeksi” — three days, back on Monday.",
            },
            {
              id: "k18l2q2",
              type: "tf",
              q: "Pelastusliivit sisältyvät kanootin vuokraan.",
              answer: true,
              explain: "“Hintaan kuuluu melat, pelastusliivit ja vedenpitävä säkki.”",
            },
            {
              id: "k18l2q3",
              type: "tf",
              q: "Asiakkaat vuokraavat teltan, koska laavuilla ei saa yöpyä.",
              answer: false,
              explain: "You may stay at the lean-tos for free, but they are often full at weekends — the tent is “varmuuden vuoksi”.",
            },
            {
              id: "k18l2q4",
              type: "tf",
              q: "Myyjä neuvoo kokemattomia melojia kantamaan kanootin kosken ohi.",
              answer: true,
              explain: "“Sitä ei kannata laskea, jos ei ole kokemusta … kanootin voi kantaa polkua pitkin kosken ohi.”",
            },
            {
              id: "k18l2q5",
              type: "tf",
              q: "Vuokran voi aina perua maksutta edellisenä päivänä.",
              answer: false,
              explain: "Free only with a storm warning; otherwise cancellation by the previous day costs a ten-euro office fee.",
            },
            {
              id: "k18l2q6",
              type: "tf",
              q: "Asiakkaiden ei tarvitse palauttaa kanoottia itse vuokraamoon.",
              answer: true,
              explain: "“Ei tarvitse, me haetaan se reitin päätepisteestä.”",
            },
          ],
        },
        {
          id: "k18l3",
          title: "Tehtävä 3: Puhelu museoon",
          instructions: {
            fi: "Kuulet puhelun kaksi kertaa. Lue ensin kysymykset. Vastaa lyhyesti suomeksi.",
            en: "You will hear a phone call twice. Read the questions first. Answer briefly in Finnish.",
          },
          situation: "Leena soittaa taidemuseoon ja varaa opastuksen työpaikkansa virkistyspäivää varten.",
          plays: 2,
          rate: 1.0,
          lines: [
            { speaker: "Museo", text: "Taidemuseo Kehrä, asiakaspalvelu, Jussi puhelimessa." },
            {
              speaker: "Leena",
              text:
                "Hei, täällä Leena Mäkinen. Me ollaan tulossa työporukalla teille virkistyspäivänä, ja haluaisin varata opastetun kierroksen. Meitä on kaksikymmentäkaksi.",
            },
            { speaker: "Museo", text: "Hienoa. Mitä päivää olitte ajatelleet?" },
            { speaker: "Leena", text: "Ajattelin maanantaita, yhdeksättätoista toukokuuta, joskus aamupäivällä." },
            { speaker: "Museo", text: "Valitettavasti museo on maanantaisin suljettu. Kävisikö tiistai tai keskiviikko?" },
            { speaker: "Leena", text: "Hmm. Tiistaina meillä on muuta ohjelmaa, mutta keskiviikko käy. Vaikka kello kymmenen?" },
            { speaker: "Museo", text: "Kymmeneltä tulee jo koululuokka, mutta kello yksitoista on vapaana. Opastus kestää noin tunnin." },
            { speaker: "Leena", text: "Sopii. Paljonko se maksaa?" },
            {
              speaker: "Museo",
              text:
                "Ryhmäopastus maksaa satakaksikymmentä euroa, ja lisäksi jokainen maksaa ryhmälipun, kymmenen euroa hengeltä. Jos ryhmässä on yli kaksikymmentä henkeä, " +
                "opastuksia tarvitaan kuitenkin kaksi, koska näyttelysaleihin ei mahdu isompaa ryhmää kerralla.",
            },
            { speaker: "Leena", text: "Ai. Eli me maksetaan kaksi opastusta?" },
            {
              speaker: "Museo",
              text:
                "Kyllä, mutta toisen saatte puoleen hintaan. Ryhmä jaetaan kahtia, ja toinen puolikas voi sillä aikaa käydä kahvilassa tai katsoa näyttelyä omatoimisesti.",
            },
            { speaker: "Leena", text: "Okei, se on ihan hyvä. Yksi meistä liikkuu pyörätuolilla. Onko museossa hissi?" },
            {
              speaker: "Museo",
              text: "On. Tulkaa kuitenkin pääovesta, ei sivuovesta, koska sivuoven luiska on nyt korjattavana. Hissi on heti aulassa.",
            },
            { speaker: "Leena", text: "Hyvä. Pitääkö jotain maksaa etukäteen?" },
            {
              speaker: "Museo",
              text: "Ei tarvitse. Lähetän vahvistuksen sähköpostiin, ja lasku tulee käynnin jälkeen. Jos ryhmän koko muuttuu, ilmoittakaa siitä viimeistään viikkoa ennen.",
            },
          ],
          questions: [
            {
              id: "k18l3q1",
              type: "open",
              q: "Miksi Leena ei voi varata opastusta päivälle, jota hän ensin ehdottaa?",
              accept: ["koska museo on maanantaisin suljettu", "museo on kiinni maanantaina", "maanantaina museo ei ole auki"],
              keyNote: "The museum is closed on Mondays.",
              explain: "“Valitettavasti museo on maanantaisin suljettu.”",
            },
            {
              id: "k18l3q2",
              type: "open",
              q: "Milloin ryhmän opastus alkaa?",
              accept: ["keskiviikkona kello yksitoista", "keskiviikkona klo 11", "keskiviikkona yhdeltätoista"],
              keyNote: "Wednesday at 11 o'clock. Both day and time are needed; 10 o'clock is taken by a school class.",
              explain: "“keskiviikko käy” and “kello yksitoista on vapaana”.",
            },
            {
              id: "k18l3q3",
              type: "open",
              q: "Miksi ryhmä tarvitsee kaksi opastusta?",
              accept: [
                "koska ryhmässä on yli kaksikymmentä henkeä eikä saleihin mahdu isompaa ryhmää",
                "ryhmä on liian suuri näyttelysaleihin",
                "saleihin mahtuu kerralla vain kaksikymmentä",
              ],
              keyNote: "Because the group has more than twenty people and a bigger group does not fit in the exhibition halls at once.",
              explain: "“Jos ryhmässä on yli kaksikymmentä henkeä, opastuksia tarvitaan kuitenkin kaksi, koska näyttelysaleihin ei mahdu isompaa ryhmää kerralla.”",
            },
            {
              id: "k18l3q4",
              type: "open",
              q: "Mitä ryhmän pitää ottaa huomioon, kun he saapuvat museoon pyörätuolilla liikkuvan työkaverin kanssa?",
              accept: [
                "pitää tulla pääovesta, koska sivuoven luiska on korjattavana",
                "käyttää pääovea, ei sivuovea",
                "tulla pääovesta, hissi on aulassa",
              ],
              keyNote: "Use the main door, not the side door (the side-door ramp is under repair); the lift is in the lobby.",
              explain: "“Tulkaa kuitenkin pääovesta, ei sivuovesta, koska sivuoven luiska on nyt korjattavana.”",
            },
          ],
        },
        {
          id: "k18l4",
          title: "Tehtävä 4: Radiouutinen",
          instructions: {
            fi: "Kuulet uutisen kaksi kertaa. Lue ensin kysymykset. Valitse oikea vaihtoehto.",
            en: "You will hear a news report twice. Read the questions first. Choose the correct option.",
          },
          situation: "Kuulet radiosta uutisen kirjastojen käytöstä.",
          plays: 2,
          rate: 1.0,
          lines: [
            {
              speaker: "Uutistenlukija",
              text:
                "Kirjastojen lainausmäärät kääntyivät viime vuonna nousuun usean hiljaisen vuoden jälkeen. Yleisten kirjastojen tilastojen mukaan lainoja kertyi noin " +
                "kolme prosenttia enemmän kuin edellisenä vuonna. Kasvu johtui lähes kokonaan e-kirjoista ja äänikirjoista, joiden lainaus lisääntyi neljänneksellä. " +
                "Painettujen kirjojen lainaus pysyi suunnilleen ennallaan.",
            },
            {
              speaker: "Uutistenlukija",
              text:
                "Huolestuttavin luku koskee nuoria. Yläkoululaisten ja lukioikäisten nuorten lainat vähenivät jo viidettä vuotta peräkkäin. Kirjastopalvelujen asiantuntija " +
                "Riikka Lahtinen arvioi, ettei syy ole kirjastoissa, vaan siinä, että nuorten vapaa-aika kuluu yhä enemmän älypuhelimen parissa.",
            },
            {
              speaker: "Uutistenlukija",
              text:
                "Kirjastot yrittävät nyt houkutella nuoria uusin keinoin. Syksyllä alkaa valtakunnallinen kampanja, jossa nuoret saavat itse valita kirjoja kirjastojen " +
                "kokoelmiin. Lisäksi kirjastoihin perustetaan lukupiirejä, joita vetävät nuoret itse eivätkä kirjastonhoitajat. Tavoitteena on, että nuoret löytäisivät kirjastosta kirjoja, jotka kiinnostavat juuri heitä.",
            },
            {
              speaker: "Uutistenlukija",
              text:
                "Kirjastoissa myös käytiin aiempaa enemmän. Yhä useampi tulee kirjastoon tekemään etätöitä, opiskelemaan tai lainaamaan muuta kuin kirjoja, esimerkiksi " +
                "työkaluja ja urheiluvälineitä. Lahtisen mukaan kirjasto on monelle tärkeä paikka, jossa voi viettää aikaa maksamatta mitään. Hän toivoo, etteivät kunnat lyhennä kirjastojen aukioloaikoja säästösyistä.",
            },
          ],
          questions: [
            {
              id: "k18l4q1",
              type: "mc",
              q: "Mistä lainausmäärien kasvu johtui?",
              options: [
                "Painettuja kirjoja lainattiin aiempaa enemmän.",
                "Sähköisten kirjojen ja äänikirjojen lainaus lisääntyi selvästi.",
                "Kirjastot hankkivat aiempaa enemmän uusia kirjoja.",
              ],
              answer: 1,
              explain: "Growth came “lähes kokonaan e-kirjoista ja äänikirjoista” (up by a quarter); printed books stayed about the same.",
            },
            {
              id: "k18l4q2",
              type: "mc",
              q: "Mitä uutisessa kerrotaan nuorten lainoista?",
              options: [
                "Ne ovat vähentyneet useana vuonna peräkkäin.",
                "Ne kääntyivät viime vuonna nousuun.",
                "Ne vähenivät ensimmäistä kertaa viiteen vuoteen.",
              ],
              answer: 0,
              explain: "“vähenivät jo viidettä vuotta peräkkäin” — the fifth year in a row, not the first in five years.",
            },
            {
              id: "k18l4q3",
              type: "mc",
              q: "Mikä on Riikka Lahtisen arvion mukaan syy nuorten lainojen vähenemiseen?",
              options: [
                "Kirjastojen kokoelmat eivät kiinnosta nuoria.",
                "Nuoret käyttävät yhä enemmän vapaa-aikaansa puhelimeen.",
                "Kirjastojen aukioloajat eivät sovi nuorille.",
              ],
              answer: 1,
              explain: "“ettei syy ole kirjastoissa, vaan siinä, että nuorten vapaa-aika kuluu yhä enemmän älypuhelimen parissa.”",
            },
            {
              id: "k18l4q4",
              type: "mc",
              q: "Millaisia lukupiirejä kirjastoihin perustetaan?",
              options: [
                "nuorten itsensä vetämiä",
                "kirjastonhoitajien vetämiä",
                "kirjailijoiden vetämiä",
              ],
              answer: 0,
              explain: "“lukupiirejä, joita vetävät nuoret itse eivätkä kirjastonhoitajat.”",
            },
            {
              id: "k18l4q5",
              type: "mc",
              q: "Miksi kirjastoissa käydään aiempaa enemmän?",
              options: [
                "Kirjastot ovat auki pidempään kuin ennen.",
                "Kirjastoissa järjestetään entistä enemmän kursseja.",
                "Kirjastossa voi tehdä töitä ja lainata myös muita tavaroita kuin kirjoja.",
              ],
              answer: 2,
              explain: "People come “tekemään etätöitä, opiskelemaan tai lainaamaan muuta kuin kirjoja, esimerkiksi työkaluja ja urheiluvälineitä”.",
            },
          ],
        },
        {
          id: "k18l5",
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
                "Saaristoristeilyt alkavat taas kesäkuun ensimmäisenä päivänä! Kun varaat liput verkosta toukokuun loppuun mennessä, saat kymmenen prosentin alennuksen. " +
                "Laivalla lippuja myydään vain, jos paikkoja on jäljellä, eikä alennus ole silloin voimassa.",
            },
            {
              speaker: "Tiedote 2",
              text:
                "Uimahallin tiedote. Uimahalli on suljettu huoltotöiden vuoksi kesäkuun alusta heinäkuun puoliväliin. Kuntosali on kuitenkin avoinna normaalisti, " +
                "ja sinne kuljetaan tänä aikana takapihan ovesta. Kausikorttien voimassaoloa jatketaan sulun ajan verran.",
            },
            {
              speaker: "Mainos 3",
              text:
                "Aikuisten alkeiskurssi paritansseissa! Mitään ei tarvitse osata, eikä paria tarvitse ottaa mukaan, koska vaihdamme paria tunnin aikana. " +
                "Kahdeksan kerran kurssi alkaa syyskuussa tiistaisin kello seitsemän. Ilmoittaudu ajoissa, sillä ryhmään otetaan vain kaksikymmentä tanssijaa.",
            },
            {
              speaker: "Tiedote 4",
              text:
                "Museoiden yö on lauantaina. Kaupungin kuusi museota ovat silloin auki puoleenyöhön, ja sisäänpääsy on maksuton. Museoiden välillä kulkee ilmainen bussi. " +
                "Huomaa kuitenkin, että taidemuseon pihalla järjestettävään ulkokonserttiin tarvitaan lippu.",
            },
            {
              speaker: "Mainos 5",
              text:
                "Kirjamessut saapuvat kaupunkiin lokakuussa! Messuilla tapaat kymmeniä kirjailijoita, ja lauantaina vietetään lasten päivää. Opiskelijat ja eläkeläiset " +
                "pääsevät messuille puoleen hintaan, ja alle kouluikäiset ilmaiseksi. Koko ohjelma löytyy messujen verkkosivuilta.",
            },
          ],
          questions: [
            {
              id: "k18l5q1",
              type: "tf",
              q: "Mainos 1: Laivalta ostetusta lipusta saa saman alennuksen kuin verkosta ennakkoon ostetusta.",
              answer: false,
              explain: "Tickets on board are sold only if seats remain, “eikä alennus ole silloin voimassa”.",
            },
            {
              id: "k18l5q2",
              type: "tf",
              q: "Tiedote 2: Kuntosalia voi käyttää uimahallin huoltotöiden aikana.",
              answer: true,
              explain: "“Kuntosali on kuitenkin avoinna normaalisti” — only the entrance changes.",
            },
            {
              id: "k18l5q3",
              type: "tf",
              q: "Mainos 3: Kurssille pitää ilmoittautua yhdessä tanssiparin kanssa.",
              answer: false,
              explain: "“eikä paria tarvitse ottaa mukaan, koska vaihdamme paria tunnin aikana.”",
            },
            {
              id: "k18l5q4",
              type: "tf",
              q: "Tiedote 4: Kaikki museoiden yön ohjelma on maksutonta.",
              answer: false,
              explain: "Entry and the bus are free, but the outdoor concert at the art museum needs a ticket.",
            },
            {
              id: "k18l5q5",
              type: "tf",
              q: "Mainos 5: Eläkeläinen maksaa messulipusta vähemmän kuin työssäkäyvä aikuinen.",
              answer: true,
              explain: "“Opiskelijat ja eläkeläiset pääsevät messuille puoleen hintaan.”",
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
          id: "k18s1",
          kind: "kertominen",
          title: "Tehtävä 1: Kertominen",
          instructions: {
            fi: "Sinulla on minuutti aikaa valmistautua. Voit tehdä muistiinpanoja. Puhu noin puolitoista minuuttia. Aloita puhuminen vasta, kun kuulet äänimerkin.",
            en: "You have one minute to prepare and may take notes. Speak for about a minute and a half. Start only after the beep.",
          },
          prepSec: 60,
          card: {
            title: "Kerro harrastuksesta, joka on sinulle tärkeä tai jonka haluaisit aloittaa.",
            questions: [
              "Mitä harrastat tai mitä haluaisit harrastaa?",
              "Miten ja milloin kiinnostuit siitä?",
              "Mitä hyötyä tai iloa harrastuksesta on sinulle?",
              "Miten harrastaminen Suomessa eroaa siitä, mihin olet tottunut?",
            ],
          },
          items: [
            { id: "a", spoken: "Kerro harrastuksesta, joka on sinulle tärkeä tai jonka haluaisit aloittaa. Aloita puhuminen nyt.", speakSec: 90 },
          ],
        },
        {
          id: "k18s2",
          kind: "keskustelu",
          title: "Tehtävä 2: Keskustelu A",
          instructions: {
            fi: "Kuulet keskustelun, jossa puhut vuorotellen toisen henkilön kanssa. Lue tilanne ja ohjeet. Puhu, kun kuulet äänimerkin.",
            en: "You will take turns with another speaker. Read the situation and the cues. Speak after the beep.",
          },
          prepSec: 30,
          card: {
            title:
              "Vuokrasit perheellesi mökin viikoksi järven rannalta. Saavuit mökille tänään ja huomasit, ettei sauna lämpene eikä ilmoituksessa luvattua venettä ole rannassa. Soitat mökin omistajalle.",
            questions: [],
          },
          items: [
            {
              id: "a",
              spoken: "Pekka Ahonen, hei.",
              cue: "[Esittele itsesi ja kerro, miksi soitat.]",
              speakSec: 20,
            },
            {
              id: "b",
              spoken: "Voi harmi. Kertoisitteko tarkemmin, mikä saunassa on vialla?",
              cue: "[Kerro, mitä saunassa tapahtuu ja mitä olet jo yrittänyt tehdä.]",
              speakSec: 20,
            },
            {
              id: "c",
              spoken: "Kuulostaa siltä, että sulake on palanut. Pääsen kuitenkin tulemaan katsomaan vasta ylihuomenna, koska olen nyt toisella paikkakunnalla. Sopiiko se?",
              cue: "[Kerro, miksi ylihuomenna on liian myöhään, ja ehdota toista ratkaisua.]",
              speakSec: 25,
            },
            {
              id: "d",
              spoken: "Ymmärrän. Voin pyytää naapuriani käymään huomenna aamulla. Mutta veneen pitäisi kyllä olla rannassa, vajan takana.",
              cue: "[Kerro, mistä olet jo etsinyt venettä, ja pyydä tarkempia ohjeita.]",
              speakSec: 20,
            },
            {
              id: "e",
              spoken: "Ahaa, nyt muistan. Edelliset vuokralaiset jättivät sen naapurin rantaan. Haen sen huomenna. Toivoisitteko jotain hyvitystä tästä?",
              cue: "[Kerro, millaista hyvitystä toivoisit, ja perustele.]",
              speakSec: 25,
            },
            {
              id: "f",
              spoken: "Se on ihan reilua. Lähetän teille tekstiviestin, kun naapuri on tulossa. Onko vielä jotain muuta?",
              cue: "[Vastaa, kiitä ja lopeta puhelu.]",
              speakSec: 15,
            },
          ],
        },
        {
          id: "k18s3",
          kind: "keskustelu",
          title: "Tehtävä 2: Keskustelu B",
          instructions: {
            fi: "Kuulet keskustelun, jossa puhut vuorotellen toisen henkilön kanssa. Lue tilanne ja ohjeet. Puhu, kun kuulet äänimerkin.",
            en: "You will take turns with another speaker. Read the situation and the cues. Speak after the beep.",
          },
          prepSec: 30,
          card: {
            title:
              "Suunnittelet ystäväsi Annan kanssa yhteistä viikonloppumatkaa Suomessa. Anna haluaa lähteä suurelle musiikkifestivaalille, mutta sinä lähtisit mieluummin retkelle luontoon. Soitat Annalle. Sinä aloitat.",
            questions: [],
          },
          items: [
            { id: "a", spoken: "", cue: "[Tervehdi Annaa ja kerro, miksi soitat.]", speakSec: 15 },
            {
              id: "b",
              spoken: "Joo, mä katsoin just festivaalin ohjelmaa! Siellä esiintyy mun lempibändi. Mitä mieltä sä olet?",
              cue: "[Kerro, mitä mieltä olet festivaalista, ja ehdota omaa ideaasi.]",
              speakSec: 25,
            },
            {
              id: "c",
              spoken: "Hmm, luontoon... Mutta mä en ole ikinä yöpynyt teltassa. Mitä me siellä tehtäisiin koko viikonloppu?",
              cue: "[Kerro, mitä retkellä voisi tehdä, ja vastaa Annan huoleen.]",
              speakSec: 25,
            },
            {
              id: "d",
              spoken: "No, kuulostaa ihan kivalta. Mutta festivaalilipuista on jo puolet myyty. Pitäisikö meidän päättää heti?",
              cue: "[Ehdota kompromissia.]",
              speakSec: 20,
            },
            {
              id: "e",
              spoken: "Hyvä idea! Entä miten me päästään sinne? Mulla ei ole autoa.",
              cue: "[Kerro, miten voisitte matkustaa, ja perustele.]",
              speakSec: 20,
            },
            {
              id: "f",
              spoken: "Sopii. Mä varaan liput tänä iltana. Hoidatko sä majoituksen?",
              cue: "[Vastaa ja sovi, milloin puhutte seuraavan kerran.]",
              speakSec: 15,
            },
          ],
        },
        {
          id: "k18s4",
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
              situation: "Ystäväsi pyytää sinua mukaan kuntosalille huomenna aamulla. Sinulla ei ole silloin aikaa, mutta haluaisit lähteä toisena päivänä. Mitä sanot?",
              spoken: "Tilanne 1. Ystäväsi pyytää sinua mukaan kuntosalille huomenna aamulla. Sinulla ei ole silloin aikaa, mutta haluaisit lähteä toisena päivänä. Mitä sanot?",
              prepSec: 20,
              speakSec: 20,
            },
            {
              id: "b",
              situation: "Soitat kansalaisopistoon, koska haluaisit siirtyä kitarakurssin alkeisryhmästä jatkoryhmään. Mitä sanot?",
              spoken: "Tilanne 2. Soitat kansalaisopistoon, koska haluaisit siirtyä kitarakurssin alkeisryhmästä jatkoryhmään. Mitä sanot?",
              prepSec: 20,
              speakSec: 30,
            },
            {
              id: "c",
              situation: "Lainasit kirjastosta kirjan, ja sen päälle kaatui kahvia. Palautat kirjan kirjaston virkailijalle. Mitä sanot?",
              spoken: "Tilanne 3. Lainasit kirjastosta kirjan, ja sen päälle kaatui kahvia. Palautat kirjan kirjaston virkailijalle. Mitä sanot?",
              prepSec: 20,
              speakSec: 30,
            },
            {
              id: "d",
              situation: "Konsertti alkoi tunnin myöhässä, eikä siitä ilmoitettu etukäteen. Ehdit kuulla vain puolet, koska viimeinen bussisi lähti. Puhut lipunmyynnin työntekijälle. Mitä sanot?",
              spoken: "Tilanne 4. Konsertti alkoi tunnin myöhässä, eikä siitä ilmoitettu etukäteen. Ehdit kuulla vain puolet, koska viimeinen bussisi lähti. Puhut lipunmyynnin työntekijälle. Mitä sanot?",
              prepSec: 20,
              speakSec: 30,
            },
            {
              id: "e",
              situation: "Olet uusi jäsen kuorossa etkä tiedä, mistä saat harjoituksissa tarvittavat nuotit. Kysyt neuvoa kuoron johtajalta. Mitä sanot?",
              spoken: "Tilanne 5. Olet uusi jäsen kuorossa etkä tiedä, mistä saat harjoituksissa tarvittavat nuotit. Kysyt neuvoa kuoron johtajalta. Mitä sanot?",
              prepSec: 20,
              speakSec: 30,
            },
          ],
        },
        {
          id: "k18s5",
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
              "A. Lasten harrastukset: Pitäisikö jokaisella lapsella olla oikeus yhteen maksuttomaan harrastukseen? Kenen pitäisi maksaa se? Mitä hyötyä harrastuksista on lapsille ja yhteiskunnalle?",
              "B. Lukeminen: Onko kirjojen lukeminen yhä tärkeää, kun tietoa ja viihdettä saa puhelimesta? Ovatko äänikirjat yhtä arvokkaita kuin painetut kirjat? Miten lapsia ja nuoria voisi innostaa lukemaan?",
            ],
          },
          items: [{ id: "a", spoken: "Kerro mielipiteesi valitsemastasi aiheesta. Aloita puhuminen nyt.", speakSec: 120 }],
        },
      ],
    },
  ],
};
