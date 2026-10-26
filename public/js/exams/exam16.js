// Keskitaso 6
export default {
  id: "koe16",
  title: "Keskitaso 6",
  level: "keskitaso",
  description: "Recycling rules, second-hand clothing, electric cars, summer cottages, forests and everyman's rights, local food.",
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
          id: "k16r1",
          title: "Tehtävä 1: Uutinen",
          instructions: {
            fi: "Lue uutinen ja vastaa kysymyksiin. Valitse oikea vaihtoehto.",
            en: "Read the news item and answer the questions. Choose the correct option.",
          },
          text: {
            title: "Omakotitaloihin biojäteastia tai kompostori – muutos koskee tuhansia kotitalouksia",
            body:
              "Koivulaakson kunnassa kaikkien taajama-alueella sijaitsevien omakotitalojen on ensi heinäkuusta alkaen lajiteltava biojäte erikseen. Tähän asti velvoite on koskenut " +
              "vain taloyhtiöitä, joissa on vähintään viisi asuntoa. Muutoksen taustalla on jätelaki, jonka tavoitteena on, että yhä suurempi osa kotitalouksien jätteestä kierrätetään.\n\n" +
              "Asukkailla on kaksi vaihtoehtoa. He voivat tilata jäteyhtiöltä erillisen biojäteastian, joka tyhjennetään kesällä kahden ja talvella neljän viikon välein. " +
              "Toinen vaihtoehto on kompostoida biojäte omalla pihalla. Silloin kompostorin on oltava suljettu ja lämpöeristetty, jotta se toimii myös talvella eikä houkuttele rottia. " +
              "Kompostoinnista on tehtävä ilmoitus jäteyhtiölle kesäkuun loppuun mennessä.\n\n" +
              "Jäteyhtiön mukaan sekajätteestä noin kolmasosa on yhä biojätettä. ”Kun ruoantähteet ja kahvinporot päätyvät sekajätteeseen, ne poltetaan. Erikseen kerätystä biojätteestä " +
              "taas valmistetaan biokaasua ja lannoitetta”, kertoo jäteyhtiön neuvontapäällikkö Sari Ojala.\n\n" +
              "Kaikki eivät ole muutoksesta ilahtuneita. Omakotiyhdistyksen mukaan uusi astia nostaa jätemaksuja noin 60 eurolla vuodessa, ja moni yksin asuva ikääntynyt " +
              "tuottaa biojätettä niin vähän, että astia ehtii haista ennen kuin se on edes puolillaan. Jäteyhtiön mukaan naapurit voivat ratkaista ongelman ottamalla yhteisen " +
              "biojäteastian, jolloin kustannukset jaetaan. Yhteisastiaan voi liittyä enintään viisi kiinteistöä, joiden on sijaittava lähellä toisiaan.",
          },
          questions: [
            {
              id: "k16r1q1",
              type: "mc",
              q: "Mitä uudistus muuttaa?",
              options: [
                "Taloyhtiöiden on alettava lajitella biojäte erikseen.",
                "Kaikkien omakotitalojen on hankittava oma biojäteastia.",
                "Biojätteen erillinen lajittelu tulee pakolliseksi myös taajaman omakotitaloissa.",
              ],
              answer: 2,
              explain:
                "Detached houses in built-up areas must sort biowaste from July; housing companies already had to. They can choose a bin OR composting, so a bin is not obligatory.",
            },
            {
              id: "k16r1q2",
              type: "mc",
              q: "Mikä on ehtona sille, että biojätteen saa kompostoida itse?",
              options: [
                "Kompostorin on oltava suljettu ja lämpöeristetty.",
                "Kompostori on tyhjennettävä neljän viikon välein.",
                "Kompostori on ostettava jäteyhtiöltä.",
              ],
              answer: 0,
              explain: "“kompostorin on oltava suljettu ja lämpöeristetty” (and the waste company must be notified). The four-week interval refers to emptying the bin in winter.",
            },
            {
              id: "k16r1q3",
              type: "mc",
              q: "Miksi biojäte kannattaa jäteyhtiön mukaan lajitella erikseen?",
              options: [
                "Sekajätteen polttaminen on pian kiellettyä.",
                "Siitä voidaan valmistaa hyödyllisiä tuotteita.",
                "Se vähentää rottia asuinalueilla.",
              ],
              answer: 1,
              explain: "“Erikseen kerätystä biojätteestä taas valmistetaan biokaasua ja lannoitetta.” Mixed waste is burned, but no ban is mentioned; rats relate to composters.",
            },
            {
              id: "k16r1q4",
              type: "mc",
              q: "Miten jäteyhtiö vastaa omakotiyhdistyksen huoleen?",
              options: [
                "Yksin asuvien iäkkäiden astiat tyhjennetään maksutta.",
                "Astia tyhjennetään harvemmin, jos jätettä on vähän.",
                "Lähekkäin asuvat voivat käyttää samaa astiaa ja jakaa kulut.",
              ],
              answer: 2,
              explain: "“naapurit voivat ratkaista ongelman ottamalla yhteisen biojäteastian, jolloin kustannukset jaetaan.”",
            },
          ],
        },
        {
          id: "k16r2",
          title: "Tehtävä 2: Kuluttaja-artikkeli",
          instructions: {
            fi: "Lue artikkeli. Ovatko väitteet oikein vai väärin?",
            en: "Read the article. Are the statements true (oikein) or false (väärin)?",
          },
          text: {
            title: "Käytetty vaate säästää rahaa ja luontoa – mutta ostajan oikeudet riippuvat myyjästä",
            body:
              "Käytettyjen vaatteiden kauppa kasvaa nopeasti, ja erityisesti nuoret aikuiset ovat innokkaita ostajia. Yhä useampi etsii vaatteensa kirpputorilta, verkon kauppapaikoilta tai second hand -liikkeistä, ja osa suurista " +
              "vaateketjuista on alkanut myydä käytettyjä vaatteita omissa myymälöissään. Syitä on kaksi: hinta ja ympäristö. Yhden puuvillapaidan valmistamiseen kuluu tuhansia litroja vettä, " +
              "joten jokainen käyttöön jäävä vaate vähentää tarvetta tuottaa uutta.\n\n" +
              "Käytettyä ostaessa kannattaa kuitenkin tietää, keneltä ostaa. Jos myyjä on yritys, esimerkiksi second hand -liike tai vaateketju, kuluttajansuojalaki on voimassa " +
              "samalla tavalla kuin uutta ostettaessa. Verkosta ostetulla tuotteella on 14 päivän peruuttamisoikeus, ja jos vaatteessa on virhe, josta ei ole kerrottu, ostaja voi vaatia hyvitystä. " +
              "Käytetyltä tuotteelta ei tosin voi odottaa samaa kuin uudelta: tavallinen kuluminen ei ole virhe. " +
              "Toisaalta myyjän merkintä ”myydään sellaisena kuin se on” ei poista ostajan oikeuksia kokonaan, jos vaate on selvästi huonommassa kunnossa kuin kuvauksen perusteella voi odottaa.\n\n" +
              "Kun ostat toiselta yksityishenkilöltä, kuluttajansuojalaki ei koske kauppaa. Peruuttamisoikeutta ei silloin ole, ellei siitä ole sovittu myyjän kanssa erikseen. " +
              "Jos tuote ei kuitenkaan vastaa myynti-ilmoitusta – esimerkiksi takki on eri kokoa kuin luvattiin tai siinä on reikä, jota kuvissa ei näkynyt – ostajalla on oikeus vaatia " +
              "korjausta, hinnanalennusta tai kaupan purkamista. Yksityishenkilöiden väliset riidat ovat usein hankalia ratkaista, joten kuluttajaneuvonta kehottaa pyytämään lisäkuvia " +
              "ja kysymään tarkat mitat ennen maksamista. Myös viestit kannattaa säilyttää.\n\n" +
              "Huomiota kannattaa kiinnittää myös maksutapaan. Turvallisimpana pidetään kauppapaikan omaa maksupalvelua, jossa raha siirtyy myyjälle vasta sitten, kun ostaja on " +
              "vastaanottanut paketin. Palvelusta peritään yleensä pieni maksu, mutta sitä voi pitää halpana vakuutuksena. Jos myyjä pyytää maksamaan suoraan omalle tililleen ja perustelee pyyntöään kiireellä, kyse voi olla huijauksesta.\n\n" +
              "Kirpputoreilla ja liikkeissä vaatteet kannattaa sovittaa, sillä kokomerkinnät vaihtelevat merkeittäin ja vuosikymmenittäin. Vanha 38-kokoinen mekko voi olla pienempi " +
              "kuin nykyinen 36-kokoinen. Vaatteet on hyvä pestä ennen käyttöä, mutta mitään erityistä terveysriskiä käytetyistä vaatteista ei asiantuntijoiden mukaan ole. " +
              "Kaikki käytetty ei myöskään ole halpaa: suosittujen merkkien vintage-vaatteista maksetaan joskus enemmän kuin uusista.\n\n" +
              "Moni myy myös omia vaatteitaan. Omassa käytössä olleen tavaran satunnainen myyminen on verotonta, mutta jos ostat vaatteita kirpputoreilta " +
              "nimenomaan myydäksesi ne kalliimmalla eteenpäin, voitto on verotettavaa tuloa.\n\n" +
              "Kierrätyksellä on myös kääntöpuolensa. Tutkijoiden mukaan halvat käytetyt vaatteet voivat houkutella ostamaan enemmän kuin tarvitsee, jolloin ympäristöhyöty pienenee " +
              "tai katoaa kokonaan. Ekologisin vaate on edelleen se, joka on jo omassa kaapissa.",
          },
          questions: [
            {
              id: "k16r2q1",
              type: "tf",
              q: "Myös osa suurista vaateketjuista myy nykyään käytettyjä vaatteita.",
              answer: true,
              explain: "“osa suurista vaateketjuista on alkanut myydä käytettyjä vaatteita omissa myymälöissään.”",
            },
            {
              id: "k16r2q2",
              type: "tf",
              q: "Kun käytetyn vaatteen ostaa verkosta yritykseltä, sen voi palauttaa samoin ehdoin kuin uuden.",
              answer: true,
              explain: "With a company seller “kuluttajansuojalaki on voimassa samalla tavalla kuin uutta ostettaessa”, including the 14-day right of withdrawal.",
            },
            {
              id: "k16r2q3",
              type: "tf",
              q: "Jos käytetty vaate on tavallisella tavalla kulunut, ostaja voi vaatia hyvitystä.",
              answer: false,
              explain: "“tavallinen kuluminen ei ole virhe.”",
            },
            {
              id: "k16r2q4",
              type: "tf",
              q: "Yksityishenkilöltä ostetun vaatteen saa aina palauttaa 14 päivän kuluessa.",
              answer: false,
              explain: "Consumer protection law does not apply: “Peruuttamisoikeutta ei silloin ole, ellei siitä ole sovittu myyjän kanssa erikseen.”",
            },
            {
              id: "k16r2q5",
              type: "tf",
              q: "Jos yksityishenkilön myymä takki on eri kokoa kuin ilmoituksessa luvattiin, ostaja voi vaatia hinnanalennusta.",
              answer: true,
              explain: "If the item does not match the ad (“takki on eri kokoa kuin luvattiin”), the buyer may demand repair, a price reduction or cancellation.",
            },
            {
              id: "k16r2q6",
              type: "tf",
              q: "Kauppapaikan maksupalvelussa myyjä saa rahat heti, kun ostaja on maksanut.",
              answer: false,
              explain: "The money moves to the seller “vasta sitten, kun ostaja on vastaanottanut paketin”.",
            },
            {
              id: "k16r2q7",
              type: "tf",
              q: "Artikkelin mukaan käytettyjen vaatteiden ostaminen hyödyttää ympäristöä aina.",
              answer: false,
              explain: "Cheap second-hand clothes can tempt people to buy more, “jolloin ympäristöhyöty pienenee tai katoaa kokonaan”.",
            },
          ],
        },
        {
          id: "k16r3",
          title: "Tehtävä 3: Tiedote",
          instructions: {
            fi: "Lue tiedote ja vastaa kysymyksiin suomeksi. Vastaa lyhyesti.",
            en: "Read the notice and answer the questions in Finnish. Answer briefly.",
          },
          text: {
            title: "Mäntyrannan kunta: Tervetuloa, kesäasukkaat!",
            body:
              "Tähän tiedotteeseen on koottu tärkeimmät asiat tulevaa mökkikesää varten.\n\n" +
              "Jätehuolto: Jokaisella vapaa-ajan asunnolla on oltava oma sekajäteastia tai sopimus yhteisen astian käytöstä. Kunnan kesäjätepisteet ovat auki toukokuun alusta syyskuun loppuun. " +
              "Suurikokoista jätettä, kuten huonekaluja ja patjoja, ei saa jättää jätepisteisiin, vaan ne on vietävä jäteasemalle, joka on auki keskiviikkoisin ja lauantaisin.\n\n" +
              "Jätevedet: Jos mökissä on vesijohto, saunan ja keittiön jätevedet on käsiteltävä erillisessä järjestelmässä. Jos vesi kannetaan sisään ämpärillä, kevyempi käsittely riittää: " +
              "pesuvedet voi imeyttää maahan vähintään 20 metrin päässä rannasta. Pesuaineita ja shampoota ei saa käyttää järvessä peseytyessä.\n\n" +
              "Tulenteko: Metsäpalovaroituksen aikana avotulen, esimerkiksi nuotion, tekeminen on kielletty myös omalla tontilla. Kaasugrillin käyttö on kuitenkin sallittua. " +
              "Varoituksen voimassaolon voit tarkistaa Ilmatieteen laitoksen verkkosivuilta.\n\n" +
              "Juomavesi: Jos mökki ei ole kunnan vesijohtoverkossa, kaivoveden laatu kannattaa tutkituttaa kolmen vuoden välein. Kunnan ympäristötoimisto lainaa näytepulloja maksutta, " +
              "mutta itse analyysi on maksullinen.\n\n" +
              "Voit tilata kunnan tiedotteet sähköpostiisi kunnan verkkosivuilla. Kesäasukkaiden tiedotustilaisuus pidetään kunnantalolla kesäkuun ensimmäisenä lauantaina.",
          },
          questions: [
            {
              id: "k16r3q1",
              type: "open",
              q: "Mihin mökkiläisen pitää viedä vanha sänkypatja?",
              accept: ["jäteasemalle", "jäteasemalle keskiviikkona tai lauantaina", "jäteasemalle, ei jätepisteeseen"],
              keyNote: "To the waste station (open Wednesdays and Saturdays). Leaving it at a summer waste point is wrong.",
              explain: "“Suurikokoista jätettä, kuten huonekaluja ja patjoja, ei saa jättää jätepisteisiin, vaan ne on vietävä jäteasemalle.”",
            },
            {
              id: "k16r3q2",
              type: "open",
              q: "Mitä pesuvesille saa tehdä mökillä, jossa ei ole vesijohtoa?",
              accept: [
                "imeyttää maahan vähintään 20 metrin päässä rannasta",
                "kaataa maahan ainakin kahdenkymmenen metrin päähän rannasta",
                "imeyttää maahan kauas rannasta",
              ],
              keyNote: "Let them soak into the ground at least 20 metres from the shore.",
              explain: "“Jos vesi kannetaan sisään ämpärillä … pesuvedet voi imeyttää maahan vähintään 20 metrin päässä rannasta.”",
            },
            {
              id: "k16r3q3",
              type: "open",
              q: "Mikä on kiellettyä ja mikä sallittua metsäpalovaroituksen aikana?",
              hint: "(2 asiaa)",
              accept: [
                "nuotion tekeminen on kielletty, kaasugrillin käyttö on sallittu",
                "avotulta ei saa tehdä edes omalla tontilla, mutta kaasugrilliä saa käyttää",
                "ei nuotiota, kaasugrilli sallittu",
              ],
              keyNote: "Both: open fire (e.g. a campfire) is forbidden, even on your own plot; using a gas grill is allowed.",
              explain: "“avotulen, esimerkiksi nuotion, tekeminen on kielletty myös omalla tontilla. Kaasugrillin käyttö on kuitenkin sallittua.”",
            },
            {
              id: "k16r3q4",
              type: "open",
              q: "Mikä kaivoveden tutkimisessa on maksutonta ja mikä maksullista?",
              hint: "(2 asiaa)",
              accept: [
                "näytepullon lainaaminen on maksutonta, analyysi on maksullinen",
                "kunta lainaa pullot ilmaiseksi, mutta tutkimus maksaa",
                "pullot ilmaisia, analyysi maksaa",
              ],
              keyNote: "Both: borrowing the sample bottles from the environmental office is free; the analysis itself costs money.",
              explain: "“Kunnan ympäristötoimisto lainaa näytepulloja maksutta, mutta itse analyysi on maksullinen.”",
            },
          ],
        },
        {
          id: "k16r4",
          title: "Tehtävä 4: Kolumni",
          instructions: {
            fi: "Lue kolumni ja vastaa kysymyksiin. Valitse oikea vaihtoehto.",
            en: "Read the column and answer the questions. Choose the correct option.",
          },
          text: {
            title: "Sähköauto opetti minut odottamaan – Mikko Lahtinen",
            body:
              "Kaksi vuotta sitten vaihdoin vanhan dieselautoni sähköautoon. Päätös ei syntynyt ilmastohuolesta, vaikka nykyään mielelläni annan niin ymmärtää. Todellinen syy oli se, " +
              "että työpaikalleni asennettiin latauspisteitä, joissa autoa sai ladata ilmaiseksi. Laskin säästäväni polttoaineessa yli 150 euroa kuukaudessa, ja se ratkaisi asian.\n\n" +
              "Ensimmäinen talvi oli opettavainen. Kun pakkasta oli kaksikymmentä astetta, auton toimintamatka lyheni lähes kolmanneksella. Joulun alla ajoimme perheen kanssa " +
              "Ouluun appivanhempien luo, ja matka, joka dieselillä kesti kuusi tuntia, venyi yhdeksään. Pikalatausasemilla jonotettiin, ja yksi latureista oli rikki. " +
              "Lapset olivat kiukkuisia, ja vaimoni kysyi, oliko tämä se ympäristöteko, josta olin niin paljon puhunut.\n\n" +
              "Silti en vaihtaisi takaisin. Arjessa sähköauto on ylivoimainen. Lataan sen yöllä kotona, aamulla se on lämmin ja täynnä, eikä minun tarvitse koskaan poiketa huoltoasemalle. " +
              "Huoltokulut ovat olleet murto-osa entisistä, koska autossa ei ole vaihdettavaa öljyä eikä kuluvaa kytkintä. Pitkillä matkoilla olen oppinut suunnittelemaan tauot etukäteen. " +
              "Kahvi ja voileipä latausaseman kahvilassa eivät ole menetys vaan lepohetki, jota olisin tarvinnut ennenkin.\n\n" +
              "Naapurit ovat seuranneet kokeiluani kiinnostuneina, ja moni on kysynyt, kannattaisiko heidänkin vaihtaa. Vastaan aina samoin: se riippuu siitä, paljonko ajat. " +
              "Jos ajat vain muutaman tuhannen kilometrin vuodessa, nykyisen auton pitäminen voi olla ympäristön kannalta järkevämpää kuin uuden auton valmistuttaminen.\n\n" +
              "Minua ärsyttää kuitenkin se, miten sähköautoista puhutaan. Toiset esittävät ne ratkaisuna kaikkiin liikenteen ongelmiin, toiset taas väittävät, että ne saastuttavat akkujensa " +
              "takia enemmän kuin bensa-autot. Kumpikaan väite ei pidä paikkaansa. Akun valmistaminen kuluttaa paljon luonnonvaroja, mutta tutkimusten mukaan sähköauto kuittaa tämän " +
              "”velan” muutamassa vuodessa, jos sähkö tuotetaan pääosin vähäpäästöisesti, kuten Suomessa. Ruuhkia, renkaiden melua tai ihmisten liikkumattomuutta sähköauto ei kuitenkaan poista.\n\n" +
              "Suurin ongelma on hinta. Uusi sähköauto maksaa edelleen tuhansia euroja enemmän kuin vastaava polttomoottoriauto, eivätkä käytettyjen sähköautojen markkinat ole vielä " +
              "kunnolla kehittyneet. Moni pienituloinen ajaa vanhalla autolla, koska muuta vaihtoehtoa ei ole. Sähköautojen hankintaa on tuettu verovaroin, mutta tuesta ovat hyötyneet lähinnä ne, joilla olisi ollut varaa uuteen autoon muutenkin. Kerrostalossa asuvalle lataaminen on lisäksi hankalaa, jos taloyhtiö " +
              "ei ole hankkinut latauspisteitä.\n\n" +
              "Jos haluamme, että sähköautoja on liikenteessä enemmän, niiden on oltava tavallisten ihmisten ulottuvilla. Siihen tarvitaan muutakin kuin mainoksia ja hyvää omaatuntoa: tarvitaan " +
              "latauspisteitä taloyhtiöihin ja kohtuuhintaisia käytettyjä autoja. Ja ehkä hieman kärsivällisyyttä – sitä minulta ainakin löytyi enemmän kuin luulin.",
          },
          questions: [
            {
              id: "k16r4q1",
              type: "mc",
              q: "Miksi kirjoittaja hankki sähköauton?",
              options: [
                "Hän halusi vähentää omia päästöjään.",
                "Hän halusi säästää rahaa.",
                "Hänen työnantajansa edellytti sitä.",
              ],
              answer: 1,
              explain: "The real reason was free charging at work: “Laskin säästäväni polttoaineessa yli 150 euroa kuukaudessa, ja se ratkaisi asian.” He admits the climate reason is only what he now claims.",
            },
            {
              id: "k16r4q2",
              type: "mc",
              q: "Mitä tapahtui perheen joulumatkalla?",
              options: [
                "Auto ei käynnistynyt kovalla pakkasella.",
                "Perhe joutui jäämään yöksi matkan varrelle.",
                "Matka kesti kolme tuntia tavallista kauemmin.",
              ],
              answer: 2,
              explain: "The trip that took six hours by diesel “venyi yhdeksään”.",
            },
            {
              id: "k16r4q3",
              type: "mc",
              q: "Miten kirjoittaja suhtautuu nykyään pitkien matkojen latauspysähdyksiin?",
              options: [
                "Hän pitää niitä tarpeellisina taukoina.",
                "Hän pitää niitä yhä ajan haaskauksena.",
                "Hän välttää siksi pitkiä matkoja.",
              ],
              answer: 0,
              explain: "Coffee at the charging station is “ei menetys vaan lepohetki, jota olisin tarvinnut ennenkin.”",
            },
            {
              id: "k16r4q4",
              type: "mc",
              q: "Mitä kirjoittaja ajattelee väitteestä, että sähköautot saastuttavat enemmän kuin bensa-autot?",
              options: [
                "Väite pitää paikkansa akkujen valmistuksen takia.",
                "Väite ei pidä paikkaansa, kun sähkö tuotetaan vähäpäästöisesti.",
                "Väitteestä ei ole vielä tarpeeksi tutkimustietoa.",
              ],
              answer: 1,
              explain: "“Kumpikaan väite ei pidä paikkaansa … sähköauto kuittaa tämän ”velan” muutamassa vuodessa, jos sähkö tuotetaan pääosin vähäpäästöisesti.”",
            },
            {
              id: "k16r4q5",
              type: "mc",
              q: "Kenelle sähköauton hankkiminen on kirjoittajan mukaan erityisen vaikeaa?",
              options: [
                "lapsiperheille, jotka ajavat pitkiä matkoja",
                "niille, joilla on pitkä työmatka",
                "pienituloisille ja kerrostaloissa asuville",
              ],
              answer: 2,
              explain: "“Moni pienituloinen ajaa vanhalla autolla … Kerrostalossa asuvalle lataaminen on lisäksi hankalaa.”",
            },
            {
              id: "k16r4q6",
              type: "mc",
              q: "Mikä on kolumnin pääajatus?",
              options: [
                "Sähköauto toimii arjessa hyvin, mutta sen pitäisi olla useampien ihmisten saatavilla.",
                "Sähköautot ovat liian epäkäytännöllisiä Suomen talveen.",
                "Sähköautot ratkaisevat liikenteen ympäristöongelmat.",
              ],
              answer: 0,
              explain: "He would not switch back, and concludes that electric cars “on oltava tavallisten ihmisten ulottuvilla”. He explicitly rejects the idea that they solve all traffic problems.",
            },
          ],
        },
        {
          id: "k16r5",
          title: "Tehtävä 5: Mielipidekirjoitus",
          instructions: {
            fi: "Lue mielipidekirjoitus. Ovatko väitteet oikein vai väärin?",
            en: "Read the letter to the editor. Are the statements true (oikein) or false (väärin)?",
          },
          text: {
            title: "Lähimetsä on asukkaille enemmän kuin puuta",
            body:
              "Kaupunki aikoo hakata ensi talvena suuren osan Kotiharjun metsästä, joka sijaitsee aivan asuinalueemme vieressä. Kaupungin mukaan kyse on metsänhoidosta: " +
              "puusto on vanhaa, ja osa kuusista on kirjanpainajan vioittamia. Lisäksi puun myynnistä saataisiin tuloja kaupungin kassaan.\n\n" +
              "En ole metsäalan asiantuntija enkä vastusta kaikkea metsänhoitoa. Ymmärrän, että sairaat puut on kaadettava, jotta tuholaiset eivät leviä. " +
              "Suunnitelma on kuitenkin paljon laajempi: kartan mukaan lähes puolet metsästä hakattaisiin aukeaksi.\n\n" +
              "Kotiharjun metsä on alueemme olohuone. Siellä ulkoilutetaan koiria, lapset rakentavat majoja ja päiväkoti käy metsäretkellä joka viikko. Talvella latu kulkee metsän läpi. " +
              "Kaupungin oman kyselyn mukaan alueen asukkaista lähes 80 prosenttia käyttää metsää vähintään kerran viikossa.\n\n" +
              "Tiedän, että puun myynnistä saatavat tulot ovat kaupungille tärkeitä. Mutta mitä maksaa se, että ihmiset liikkuvat vähemmän ja voivat huonommin, kun lähin metsä " +
              "muuttuu hakkuuaukeaksi? Sitä ei lasketa missään budjetissa.\n\n" +
              "Ehdotan, että kaupunki kaataa nyt vain vioittuneet puut ja jättää muun metsän koskematta ainakin siihen asti, kunnes asukkaita on kuultu. " +
              "Kaupunginvaltuusto käsittelee asiaa maaliskuussa. Toivon, että päättäjät käyvät ennen kokousta kävelyllä Kotiharjussa.\n\n" +
              "Jussi Koskinen, Kotiharju",
          },
          questions: [
            {
              id: "k16r5q1",
              type: "tf",
              q: "Kaupunki perustelee hakkuita sekä metsän kunnolla että taloudellisilla syillä.",
              answer: true,
              explain: "The trees are old and damaged by bark beetles, “Lisäksi puun myynnistä saataisiin tuloja kaupungin kassaan.”",
            },
            {
              id: "k16r5q2",
              type: "tf",
              q: "Kirjoittaja vastustaa kaikkien puiden kaatamista Kotiharjussa.",
              answer: false,
              explain: "“Ymmärrän, että sairaat puut on kaadettava.” He accepts felling the damaged trees.",
            },
            {
              id: "k16r5q3",
              type: "tf",
              q: "Suunnitelman mukaan koko metsä hakattaisiin aukeaksi.",
              answer: false,
              explain: "“lähes puolet metsästä hakattaisiin aukeaksi” — almost half, not all.",
            },
            {
              id: "k16r5q4",
              type: "tf",
              q: "Tieto metsän käyttäjien määrästä perustuu kirjoittajan omiin havaintoihin.",
              answer: false,
              explain: "The figure comes from “Kaupungin oman kyselyn mukaan”.",
            },
            {
              id: "k16r5q5",
              type: "tf",
              q: "Kirjoittajan mielestä hakkuiden hintaan pitäisi laskea myös asukkaiden hyvinvointi.",
              answer: true,
              explain: "He asks what it costs when people move less and feel worse: “Sitä ei lasketa missään budjetissa.”",
            },
            {
              id: "k16r5q6",
              type: "tf",
              q: "Kirjoittaja haluaa, että asukkaita kuullaan ennen kuin terveitä puita kaadetaan.",
              answer: true,
              explain: "Only damaged trees should be felled now, the rest left “ainakin siihen asti, kunnes asukkaita on kuultu”.",
            },
          ],
        },
        {
          id: "k16r6",
          title: "Tehtävä 6: Ohje",
          instructions: {
            fi: "Lue ohje ja vastaa kysymyksiin suomeksi. Vastaa lyhyesti.",
            en: "Read the guide and answer the questions in Finnish. Answer briefly.",
          },
          text: {
            title: "Jokaisenoikeudet – mitä luonnossa saa tehdä?",
            body:
              "Suomessa jokainen saa liikkua luonnossa riippumatta siitä, kuka alueen omistaa. Jokaisenoikeudet eivät kuitenkaan anna lupaa aiheuttaa haittaa luonnolle tai maanomistajalle.\n\n" +
              "Metsissä ja niityillä saa kulkea jalan, hiihtäen ja pyöräillen, mutta ei pihoilla eikä sellaisilla viljelyksillä, joille liikkumisesta voi aiheutua vahinkoa. " +
              "Kesällä viljapellon poikki ei siis saa oikaista, mutta lumen peittämän pellon yli voi talvella hiihtää. Telttailla saa tilapäisesti, kun leiripaikka on riittävän kaukana " +
              "asutuksesta. Jos haluat yöpyä samassa paikassa pidempään kuin pari yötä, tarvitset maanomistajan luvan.\n\n" +
              "Koiran saa ottaa mukaan, mutta 1.3.–19.8. koira on pidettävä kytkettynä, jotta luonnonvaraiset eläimet saavat pesiä rauhassa. " +
              "Marjoja, sieniä ja kukkia saa poimia, kunhan kyse ei ole rauhoitetusta lajista. Sen sijaan puiden kaataminen ja vahingoittaminen on kielletty, eikä maasta saa ottaa " +
              "sammalta, jäkälää eikä kiviä.\n\n" +
              "Avotulen tekoon tarvitaan aina maanomistajan lupa. Retkeilyalueiden merkityillä nuotiopaikoilla tulta saa kuitenkin tehdä, paitsi silloin, kun metsäpalovaroitus on voimassa.\n\n" +
              "Maastossa ajamiseen moottoriajoneuvolla tarvitaan aina maanomistajan lupa. Onkiminen ja pilkkiminen ovat sallittuja ilman lupaa, mutta muuhun kalastukseen ja metsästykseen jokaisenoikeudet eivät riitä.",
          },
          questions: [
            {
              id: "k16r6q1",
              type: "open",
              q: "Milloin pellon yli saa kulkea?",
              accept: [
                "talvella, kun pelto on lumen peitossa",
                "kun pellolla on lunta, esimerkiksi hiihtäen",
                "talvella hiihtäen",
              ],
              keyNote: "In winter, when the field is covered with snow (no damage is caused). Crossing a grain field in summer is not allowed.",
              explain: "“Kesällä viljapellon poikki ei siis saa oikaista, mutta lumen peittämän pellon yli voi talvella hiihtää.”",
            },
            {
              id: "k16r6q2",
              type: "open",
              q: "Missä tilanteessa telttailija tarvitsee maanomistajan luvan?",
              accept: [
                "jos hän haluaa yöpyä samassa paikassa pidempään kuin pari yötä",
                "kun telttailee samassa paikassa yli kaksi yötä",
                "jos leiriytyy pitkäksi aikaa samaan paikkaan",
              ],
              keyNote: "If he/she wants to stay in the same place for longer than a couple of nights.",
              explain: "“Jos haluat yöpyä samassa paikassa pidempään kuin pari yötä, tarvitset maanomistajan luvan.”",
            },
            {
              id: "k16r6q3",
              type: "open",
              q: "Millä ehdoilla nuotion saa tehdä ilman maanomistajan lupaa?",
              hint: "(2 asiaa)",
              accept: [
                "retkeilyalueen merkityllä nuotiopaikalla, kun metsäpalovaroitusta ei ole",
                "merkityllä nuotiopaikalla ja jos ei ole metsäpalovaroitusta",
                "nuotiopaikalla, ei metsäpalovaroituksen aikana",
              ],
              keyNote: "Both: at a marked campfire site in a recreation area AND only when no forest fire warning is in force.",
              explain: "“Retkeilyalueiden merkityillä nuotiopaikoilla tulta saa kuitenkin tehdä, paitsi silloin, kun metsäpalovaroitus on voimassa.”",
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
          id: "k16w1",
          title: "Tehtävä 1: Viesti isännöitsijälle",
          instructions: { fi: "Kirjoita viesti. Kirjoita noin 80–150 sanaa.", en: "Write a message of about 80–150 words." },
          prompt:
            "Taloyhtiösi jätekatoksessa on jatkuvasti ongelmia: astiat ovat täynnä, ja asukkaat jättävät sinne tavaroita, jotka eivät kuulu sinne. " +
            "Kirjoita sähköposti isännöitsijä Petri Heinoselle.",
          bullets: [
            "Esittele itsesi lyhyesti.",
            "Kuvaile, mikä jätekatoksessa on ongelmana ja mitä siitä on seurannut.",
            "Kerro, mitä olet jo itse tehnyt asian hyväksi.",
            "Ehdota ainakin yhtä ratkaisua ongelmaan.",
            "Kysy, voidaanko asiaa käsitellä seuraavassa yhtiökokouksessa.",
            "Kerro lisäksi ainakin kaksi muuta asiaa.",
            "Muista aloitus ja lopetus.",
          ],
          promptEn:
            "Your housing company's waste shelter has constant problems: bins are full and residents leave items that do not belong there. Email the property manager Petri Heinonen: introduce yourself, describe the problem and its consequences, say what you have already done, suggest at least one solution, ask whether the matter can be discussed at the next general meeting, and add at least two more points of your own.",
          register: "formal email to a property manager: Hyvä Petri Heinonen / Hei … Ystävällisin terveisin + full name and flat number; polite conditional (voisiko, toivoisin)",
          minWords: 80,
          maxWords: 150,
        },
        {
          id: "k16w2",
          title: "Tehtävä 2: Viesti ystävälle",
          instructions: { fi: "Kirjoita viesti. Kirjoita noin 60–120 sanaa.", en: "Write a message of about 60–120 words." },
          prompt: "Vietit viime viikonlopun ystäväsi Annan kesämökillä. Kirjoita Annalle viesti.",
          bullets: [
            "Kiitä ja kerro, mikä viikonlopussa oli parasta.",
            "Kerro, mitä sinulle tapahtui kotimatkalla.",
            "Kerro, mitä unohdit mökille, ja kysy, miten saisit sen takaisin.",
            "Ehdota, miten voisit vuorostasi ilahduttaa Annaa.",
            "Muista aloitus ja lopetus.",
          ],
          promptEn:
            "Last weekend you stayed at your friend Anna's summer cottage. Write to her: thank her and say what was best, tell what happened on your way home, say what you left at the cottage and ask how to get it back, and suggest how you could do something nice for her in return.",
          register: "informal message to a friend: Moi Anna! / Hei Anna! … Halauksin / Nähdään! + first name; past tense narration, colloquial tone allowed",
          minWords: 60,
          maxWords: 120,
        },
        {
          id: "k16w3",
          title: "Tehtävä 3: Mielipideteksti",
          instructions: { fi: "Kirjoita mielipideteksti. Kirjoita noin 100–180 sanaa.", en: "Write an opinion text of about 100–180 words." },
          prompt:
            "Kaupunkilehti kerää lukijoiden mielipiteitä ympäristöön liittyvistä kysymyksistä. Valitse aihe A tai B ja kirjoita mielipidekirjoitus.",
          bullets: [
            "A. Joissakin kaupungeissa on ehdotettu, että kertakäyttöiset kahvimukit ja noutoruoan muoviastiat kiellettäisiin kokonaan.",
            "B. Pitäisikö lentämisen olla nykyistä kalliimpaa, jotta ihmiset lentäisivät vähemmän?",
            "Kerro, mistä on kyse ja mitä mieltä olet asiasta. Perustele mielipiteesi ainakin kolmella tavalla.",
          ],
          promptEn:
            "A city newspaper collects readers' opinions on environmental questions. Choose A (banning disposable coffee cups and plastic take-away containers) or B (should flying be more expensive so that people fly less?). Say what the issue is and what you think, and justify your opinion in at least three ways.",
          register: "opinion text for a newspaper: neutral written style, a clear opening statement, linked arguments (ensinnäkin, lisäksi, toisaalta, siksi), a conclusion; no greeting needed, may end with name/signature",
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
        "Tässä osakokeessa kuuntelet erilaisia puhuttuja tekstejä: haastattelun, keskustelun kierrätyskeskuksessa, puhelun, radiouutisen sekä lyhyitä mainoksia ja tiedotteita. Osakokeessa on viisi tehtävää. Ennen jokaista tekstiä sinulla on aikaa lukea kysymykset. Kuulet jokaisen tekstin kaksi kertaa. Pitkät tekstit kuulet toisella kerralla osissa, ja osien välissä on aikaa vastata. Äänite etenee automaattisesti, etkä voi pysäyttää sitä. Vastaa avoimiin kysymyksiin suomeksi ja lyhyesti.",
      aika: "Osakoe kestää noin 40 minuuttia.",
      tasks: [
        {
          id: "k16l1",
          title: "Tehtävä 1: Haastattelu",
          instructions: {
            fi: "Kuulet haastattelun kaksi kertaa. Lue ensin kysymykset. Valitse oikea vaihtoehto.",
            en: "You will hear an interview twice. Read the questions first. Choose the correct option.",
          },
          situation: "Radiossa haastatellaan vihannesviljelijä Heikki Mattilaa, joka myy tuotteitaan suoraan kuluttajille.",
          plays: 2,
          rate: 1.0,
          lines: [
            {
              speaker: "Toimittaja",
              text: "Vieraana on Heikki Mattila, joka viljelee vihanneksia ja myy niitä suoraan kuluttajille. Heikki, miksi te aikanaan päätitte myydä itse eikä kauppojen kautta?",
            },
            {
              speaker: "Heikki",
              text:
                "No, se oli oikeastaan pakko. Kymmenen vuotta sitten me myytiin kaikki porkkanat tukkuun, ja hinta oli niin alhainen, ettei siitä jäänyt juuri mitään käteen. " +
                "Kun myydään suoraan, me saadaan hinnasta itse ehkä kolme kertaa enemmän, ja asiakas maksaa silti suunnilleen saman kuin kaupassa.",
            },
            { speaker: "Toimittaja", text: "Missä te myytte?" },
            {
              speaker: "Heikki",
              text:
                "Meillä on tilapuoti, joka on kesällä auki joka päivä ja talvella vain lauantaisin. Sen lisäksi me ollaan mukana REKO-renkaassa. " +
                "Eli asiakkaat tilaa tuotteet etukäteen verkossa, ja sitten me tavataan kerran viikossa sovitulla parkkipaikalla ja jaetaan tilaukset.",
            },
            { speaker: "Toimittaja", text: "Keitä teidän asiakkaat on?" },
            {
              speaker: "Heikki",
              text:
                "Tosi erilaisia ihmisiä. Ennen ajateltiin, että lähiruoka on vain hyvätuloisten juttu, mutta ei se niin mene. Paljon on lapsiperheitä ja eläkeläisiä. " +
                "Ihmiset haluaa tietää, mistä ruoka tulee. Moni käy ihan tilalla katsomassa peltoja ja kyselee, miten me viljellään.",
            },
            { speaker: "Toimittaja", text: "Onko lähiruoka aina ympäristön kannalta paras vaihtoehto?" },
            {
              speaker: "Heikki",
              text:
                "Ei välttämättä, ja mä sanon tän ihan rehellisesti. Kuljetusmatka on lyhyt, mutta jos jokainen asiakas ajaa omalla autollaan kymmeniä kilometrejä hakemaan pussin perunoita, " +
                "niin se hyöty katoaa. Siksi REKO on musta hyvä juttu: kaikki haetaan kerralla samasta paikasta.",
            },
            { speaker: "Toimittaja", text: "Mikä on teidän alalla isoin haaste juuri nyt?" },
            {
              speaker: "Heikki",
              text:
                "Sää. Viime kesänä satoi niin paljon, että kolmasosa sadosta jäi peltoon. Toinen on työvoima. Kausityöntekijöitä on vaikea saada, vaikka palkka on ihan hyvä.",
            },
            { speaker: "Toimittaja", text: "Mitä toivot tulevaisuudelta?" },
            {
              speaker: "Heikki",
              text:
                "Että kunnat ostaisi enemmän lähiruokaa kouluihin ja päiväkoteihin. Nyt kilpailutuksessa ratkaisee usein pelkkä hinta, eikä pienet tilat pysty kilpailemaan isojen kanssa. " +
                "Jos kriteereissä huomioitaisiin vaikka tuoreus ja kuljetusmatkat, meilläkin olisi mahdollisuus.",
            },
          ],
          questions: [
            {
              id: "k16l1q1",
              type: "mc",
              q: "Miksi Heikki alkoi myydä tuotteitaan suoraan kuluttajille?",
              options: [
                "Tukku lopetti hänen porkkanoidensa ostamisen.",
                "Tukkumyynnistä ei jäänyt tarpeeksi rahaa.",
                "Asiakkaat pyysivät häntä avaamaan tilapuodin.",
              ],
              answer: 1,
              explain: "The wholesale price was so low “ettei siitä jäänyt juuri mitään käteen”.",
            },
            {
              id: "k16l1q2",
              type: "mc",
              q: "Mitä Heikki sanoo hinnoista?",
              options: [
                "Asiakas maksaa suunnilleen saman verran kuin kaupassa.",
                "Asiakas maksaa noin kolme kertaa enemmän kuin kaupassa.",
                "Suoraan tilalta ostettu ruoka on kaupan ruokaa halvempaa.",
              ],
              answer: 0,
              explain: "The farmer gets about three times more, “ja asiakas maksaa silti suunnilleen saman kuin kaupassa.”",
            },
            {
              id: "k16l1q3",
              type: "mc",
              q: "Miten REKO-renkaassa ostaminen toimii?",
              options: [
                "Tuotteet tuodaan asiakkaan kotiin kerran viikossa.",
                "Asiakas valitsee tuotteet tilapuodissa ja maksaa verkossa.",
                "Asiakas tilaa etukäteen ja hakee tuotteet sovitusta paikasta.",
              ],
              answer: 2,
              explain: "“asiakkaat tilaa tuotteet etukäteen verkossa, ja sitten me tavataan kerran viikossa sovitulla parkkipaikalla.”",
            },
            {
              id: "k16l1q4",
              type: "mc",
              q: "Mitä Heikki kertoo asiakkaistaan?",
              options: [
                "He ovat pääasiassa hyvätuloisia.",
                "Heitä kiinnostaa, mistä ruoka on peräisin.",
                "Suurin osa heistä on eläkeläisiä.",
              ],
              answer: 1,
              explain: "“Ihmiset haluaa tietää, mistä ruoka tulee.” He says it is NOT only for the well-off, and pensioners are one group among others.",
            },
            {
              id: "k16l1q5",
              type: "mc",
              q: "Milloin lähiruoan ympäristöhyöty katoaa Heikin mukaan?",
              options: [
                "kun tuotteet kuljetetaan ensin tukkuun",
                "kun huonon sään takia satoa jää peltoon",
                "kun jokainen asiakas ajaa omalla autollaan pitkän matkan",
              ],
              answer: 2,
              explain: "“jos jokainen asiakas ajaa omalla autollaan kymmeniä kilometrejä … niin se hyöty katoaa.”",
            },
            {
              id: "k16l1q6",
              type: "mc",
              q: "Mitä Heikki toivoo kunnilta?",
              options: [
                "Että ne tukisivat tiloja huonoina satovuosina.",
                "Että ruokahankinnoissa huomioitaisiin muutakin kuin hinta.",
                "Että ne auttaisivat tiloja löytämään kausityöntekijöitä.",
              ],
              answer: 1,
              explain: "Now “ratkaisee usein pelkkä hinta”; he hopes criteria would include freshness and transport distances.",
            },
          ],
        },
        {
          id: "k16l2",
          title: "Tehtävä 2: Keskustelu kierrätyskeskuksessa",
          instructions: {
            fi: "Kuulet keskustelun kaksi kertaa. Ovatko väitteet oikein vai väärin?",
            en: "You will hear a conversation twice. Are the statements true or false?",
          },
          situation: "Asiakas haluaa lahjoittaa tavaroita kierrätyskeskukseen.",
          plays: 2,
          rate: 1.0,
          lines: [
            { speaker: "Työntekijä", text: "Hei, tervetuloa. Voinko auttaa?" },
            {
              speaker: "Asiakas",
              text:
                "Hei. Mulla on autossa sohva ja pari laatikollista vaatteita ja astioita. Me muutetaan pienempään asuntoon, eikä kaikki mahdu mukaan. Voinko mä tuoda ne tänne?",
            },
            {
              speaker: "Työntekijä",
              text: "Astiat ja vaatteet otetaan mielellään vastaan, kunhan ne on ehjiä ja puhtaita. Sohvasta mä kysyisin vähän tarkemmin. Onko siinä tahroja tai repeämiä?",
            },
            { speaker: "Asiakas", text: "No, siinä on yks pieni tahra, mutta muuten se on tosi hyvässä kunnossa. Se on vasta kolme vuotta vanha." },
            {
              speaker: "Työntekijä",
              text: "Pieni tahra ei haittaa. Mutta valitettavasti meidän varasto on tällä hetkellä ihan täynnä sohvia, joten me ei voida ottaa niitä vastaan ennen kuun loppua.",
            },
            { speaker: "Asiakas", text: "Voi harmi. Mä en millään ehdi odottaa, me muutetaan jo ensi viikolla." },
            {
              speaker: "Työntekijä",
              text:
                "Ymmärrän. Yks vaihtoehto on myydä tai lahjoittaa se netin kautta. Meillä on myös hakupalvelu, mutta se on maksullinen, ja se on nyt varattu kahdeksi viikoksi eteenpäin.",
            },
            { speaker: "Asiakas", text: "Okei, mä laitan sen sitten nettiin. Entä vaatteet? Mä luin jostain, että te myytte vaatteita kilohinnalla." },
            {
              speaker: "Työntekijä",
              text:
                "Joo, osa myydään kilohinnalla ja paremmat yksittäin. Rikkinäisiä vaatteita me ei kuitenkaan voida ottaa, koska meillä ei ole tekstiilien kierrätystä. Ne pitää viedä jäteasemalle.",
            },
            { speaker: "Asiakas", text: "Selvä. Saanko mä jonkun kuitin tai alennuksen, kun mä lahjoitan näitä?" },
            {
              speaker: "Työntekijä",
              text:
                "Kuittia ei anneta, mutta jokaisesta lahjoituksesta saa kahvilipun meidän kahvilaan. Ja koko tuotto menee työllistämiseen, eli meillä on töissä ihmisiä, jotka on ollut pitkään työttöminä.",
            },
          ],
          questions: [
            {
              id: "k16l2q1",
              type: "tf",
              q: "Asiakas on muuttamassa isompaan asuntoon.",
              answer: false,
              explain: "“Me muutetaan pienempään asuntoon.”",
            },
            {
              id: "k16l2q2",
              type: "tf",
              q: "Kierrätyskeskus ei ota sohvaa vastaan, koska siinä on tahra.",
              answer: false,
              explain: "“Pieni tahra ei haittaa.” The reason is that the storage is full of sofas until the end of the month.",
            },
            {
              id: "k16l2q3",
              type: "tf",
              q: "Kierrätyskeskuksen hakupalvelu ei ehdi hakea sohvaa ennen asiakkaan muuttoa.",
              answer: true,
              explain: "Inference: the pick-up service is booked “kahdeksi viikoksi eteenpäin”, but the customer moves “jo ensi viikolla”.",
            },
            {
              id: "k16l2q4",
              type: "tf",
              q: "Kaikki lahjoitetut vaatteet myydään kilohinnalla.",
              answer: false,
              explain: "“osa myydään kilohinnalla ja paremmat yksittäin.”",
            },
            {
              id: "k16l2q5",
              type: "tf",
              q: "Rikkinäiset vaatteet asiakkaan täytyy viedä muualle.",
              answer: true,
              explain: "“Rikkinäisiä vaatteita me ei kuitenkaan voida ottaa … Ne pitää viedä jäteasemalle.”",
            },
            {
              id: "k16l2q6",
              type: "tf",
              q: "Lahjoittaja saa kiitokseksi kahvilipun.",
              answer: true,
              explain: "“Kuittia ei anneta, mutta jokaisesta lahjoituksesta saa kahvilipun meidän kahvilaan.”",
            },
          ],
        },
        {
          id: "k16l3",
          title: "Tehtävä 3: Puhelu isännöitsijälle",
          instructions: {
            fi: "Kuulet puhelun kaksi kertaa. Lue ensin kysymykset. Vastaa lyhyesti suomeksi.",
            en: "You will hear a phone call twice. Read the questions first. Answer briefly in Finnish.",
          },
          situation: "Jenni soittaa taloyhtiönsä isännöitsijälle, koska haluaisi ladata sähköautoa kotipihalla.",
          plays: 2,
          rate: 1.0,
          lines: [
            { speaker: "Isännöitsijä", text: "Isännöintitoimisto Kulmala, Pekka Saari." },
            {
              speaker: "Jenni",
              text:
                "Hei, täällä Jenni Laine, asun Koivupuiston taloyhtiössä. Me ollaan ostamassa sähköautoa, ja mä halusin kysyä, voisiko meidän parkkipaikalle saada latauspisteen.",
            },
            {
              speaker: "Isännöitsijä",
              text:
                "Hyvä että soitit, tätä on kysytty paljon. Teidän parkkipaikalla on tällä hetkellä vain lämmitystolpat, eikä niistä voi ladata sähköautoa turvallisesti. " +
                "Tavallinen lämmityspistorasia voi ylikuumentua, jos sitä käytetään tuntikausia lataamiseen.",
            },
            { speaker: "Jenni", text: "Ahaa. Mitä sitten pitäisi tehdä?" },
            {
              speaker: "Isännöitsijä",
              text:
                "Latauspisteiden rakentamisesta päätetään yhtiökokouksessa. Seuraava varsinainen yhtiökokous on vasta toukokuussa, mutta jos asukkaat haluaa, " +
                "hallitus voi kutsua koolle ylimääräisen kokouksen jo aiemmin.",
            },
            { speaker: "Jenni", text: "Paljonko se maksaisi?" },
            {
              speaker: "Isännöitsijä",
              text:
                "Se riippuu laajuudesta. Jos rakennetaan valmius koko pihalle, eli vedetään kaapelit kaikille paikoille, se maksaa arviolta kolmekymmentä tuhatta euroa. " +
                "Siihen voi kuitenkin hakea valtion avustusta, joka kattaa osan kustannuksista.",
            },
            { speaker: "Jenni", text: "Entä jos muut asukkaat ei halua maksaa siitä? Monella ei ole autoa ollenkaan." },
            {
              speaker: "Isännöitsijä",
              text:
                "Se on yleinen huoli. Yleensä taloyhtiö maksaa perusvalmiuden, ja varsinaiset latauslaitteet maksaa ne, jotka niitä käyttää. " +
                "Ja jokainen maksaa oman sähkönsä, koska kulutus mitataan erikseen.",
            },
            { speaker: "Jenni", text: "Okei. Mitä mun kannattaa nyt tehdä?" },
            {
              speaker: "Isännöitsijä",
              text:
                "Tee hallitukselle kirjallinen ehdotus. Ja kysy naapureilta, kuinka moni muu olisi kiinnostunut. Mitä useampi on mukana, sitä helpommin asia etenee.",
            },
            { speaker: "Jenni", text: "Kiitos, mä teen niin." },
          ],
          questions: [
            {
              id: "k16l3q1",
              type: "open",
              q: "Miksi Jenni ei voi ladata autoa nykyisestä lämmitystolpasta?",
              accept: [
                "koska pistorasia voi ylikuumentua pitkässä latauksessa",
                "se ei ole turvallista, pistorasia kuumenee liikaa",
                "lämmitystolppa ylikuumenee, jos sitä käytetään kauan",
              ],
              keyNote: "Because it is not safe: an ordinary heating socket can overheat when used for hours of charging.",
              explain: "“Tavallinen lämmityspistorasia voi ylikuumentua, jos sitä käytetään tuntikausia lataamiseen.”",
            },
            {
              id: "k16l3q2",
              type: "open",
              q: "Miten latauspisteistä voidaan päättää jo ennen toukokuuta?",
              accept: [
                "hallitus voi kutsua koolle ylimääräisen yhtiökokouksen",
                "pitämällä ylimääräisen yhtiökokouksen",
                "ylimääräisessä kokouksessa",
              ],
              keyNote: "The board can call an extraordinary general meeting earlier (if residents want).",
              explain: "“hallitus voi kutsua koolle ylimääräisen kokouksen jo aiemmin.”",
            },
            {
              id: "k16l3q3",
              type: "open",
              q: "Miten latauspisteiden kustannukset yleensä jaetaan?",
              hint: "(2 asiaa)",
              accept: [
                "taloyhtiö maksaa perusvalmiuden ja käyttäjät maksavat latauslaitteet ja oman sähkönsä",
                "yhtiö maksaa kaapeloinnin, autoilijat laitteet ja sähkön",
                "perusvalmius yhtiölle, latauslaitteet käyttäjille",
              ],
              keyNote: "Both: the housing company pays the basic infrastructure; the users pay for the actual chargers (and their own electricity, measured separately).",
              explain: "“Yleensä taloyhtiö maksaa perusvalmiuden, ja varsinaiset latauslaitteet maksaa ne, jotka niitä käyttää.”",
            },
            {
              id: "k16l3q4",
              type: "open",
              q: "Mitä isännöitsijä neuvoo Jenniä tekemään?",
              hint: "(2 asiaa)",
              accept: [
                "tekemään hallitukselle kirjallisen ehdotuksen ja kysymään naapureiden kiinnostusta",
                "kirjoittamaan ehdotuksen hallitukselle ja selvittämään, ketkä muut ovat kiinnostuneita",
                "kirjallinen ehdotus, kysyä naapureilta",
              ],
              keyNote: "Both: make a written proposal to the board AND ask the neighbours how many others are interested.",
              explain: "“Tee hallitukselle kirjallinen ehdotus. Ja kysy naapureilta, kuinka moni muu olisi kiinnostunut.”",
            },
          ],
        },
        {
          id: "k16l4",
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
                "Suomen kansallispuistoissa tehtiin viime vuonna yli neljä miljoonaa käyntiä, mikä on noin kolmanneksen enemmän kuin kymmenen vuotta sitten. " +
                "Suosio kasvoi nopeasti koronapandemian aikana, eikä se ole sen jälkeen hiipunut. " +
                "Suosituimpien puistojen polut ovat kuluneet niin pahasti, että niitä joudutaan tänä kesänä korjaamaan useissa kohteissa.",
            },
            {
              speaker: "Uutistenlukija",
              text:
                "Myös roskaaminen on lisääntynyt. Retkeilijät jättävät laavuille ja nuotiopaikoille ruoantähteitä ja kertakäyttöastioita, vaikka useimmista kansallispuistoista " +
                "roska-astiat poistettiin jo vuosia sitten. Periaatteena on, että jokainen vie omat roskansa pois. Viime kesänä pelkästään yhden puiston laavuilta kerättiin yli tuhat kiloa roskaa. Ruoantähteet houkuttelevat paikalle lintuja ja pahimmillaan jopa karhuja.",
            },
            {
              speaker: "Uutistenlukija",
              text:
                "Ongelmia aiheuttavat myös maastopyöräilijät, jotka ajavat merkittyjen reittien ulkopuolella. Kansallispuistoissa pyöräily on sallittu vain sitä varten merkityillä reiteillä, " +
                "toisin kuin tavallisissa talousmetsissä, joissa jokaisenoikeudet sallivat pyöräilyn lähes kaikkialla.",
            },
            {
              speaker: "Uutistenlukija",
              text:
                "Puistoja hoitavat luontopalvelut eivät kuitenkaan halua rajoittaa kävijämääriä. Sen sijaan suosituimpiin puistoihin rakennetaan lisää pitkospuita, " +
                "ja kävijöitä ohjataan sovelluksen avulla vähemmän tunnettuihin kohteisiin. Lisäksi puistoissa liikkuu kesällä vapaaehtoisia luontoneuvojia, " +
                "jotka kertovat retkeilijöille, miten luonnossa toimitaan vastuullisesti.",
            },
          ],
          questions: [
            {
              id: "k16l4q1",
              type: "mc",
              q: "Mitä kansallispuistoissa on tapahtunut kymmenen viime vuoden aikana?",
              options: [
                "Käyntien määrä on kasvanut noin kolmanneksella.",
                "Kansallispuistojen määrä on kasvanut kolmanneksella.",
                "Puistojen polkuja on suljettu kävijöiltä.",
              ],
              answer: 0,
              explain: "Over four million visits, “noin kolmanneksen enemmän kuin kymmenen vuotta sitten”. Paths are being repaired, not closed.",
            },
            {
              id: "k16l4q2",
              type: "mc",
              q: "Miksi useimmissa kansallispuistoissa ei ole roska-astioita?",
              options: [
                "Ne houkuttelivat paikalle karhuja.",
                "Niiden tyhjentäminen oli liian kallista.",
                "Retkeilijöiden odotetaan vievän roskansa itse pois.",
              ],
              answer: 2,
              explain: "“Periaatteena on, että jokainen vie omat roskansa pois.” Bears are attracted by food scraps left behind, not by bins.",
            },
            {
              id: "k16l4q3",
              type: "mc",
              q: "Mitä uutisessa kerrotaan maastopyöräilystä?",
              options: [
                "Kansallispuistoissa saa pyöräillä vain merkityillä reiteillä.",
                "Pyöräily on kansallispuistoissa kokonaan kielletty.",
                "Jokaisenoikeudet sallivat pyöräilyn kansallispuistoissa kaikkialla.",
              ],
              answer: 0,
              explain: "“Kansallispuistoissa pyöräily on sallittu vain sitä varten merkityillä reiteillä” — everyman's rights allow it almost everywhere only in ordinary forests.",
            },
            {
              id: "k16l4q4",
              type: "mc",
              q: "Miten kävijämäärien kasvuun aiotaan vastata?",
              options: [
                "Suosituimpiin puistoihin päästetään vain rajattu määrä kävijöitä.",
                "Kävijöitä ohjataan vähemmän tunnettuihin kohteisiin.",
                "Suosituimpiin puistoihin tulee pääsymaksu.",
              ],
              answer: 1,
              explain: "Numbers will not be limited; “kävijöitä ohjataan sovelluksen avulla vähemmän tunnettuihin kohteisiin.”",
            },
            {
              id: "k16l4q5",
              type: "mc",
              q: "Mitä vapaaehtoiset luontoneuvojat tekevät?",
              options: [
                "keräävät roskia laavuilta",
                "rakentavat pitkospuita",
                "neuvovat retkeilijöitä toimimaan vastuullisesti",
              ],
              answer: 2,
              explain: "They “kertovat retkeilijöille, miten luonnossa toimitaan vastuullisesti.”",
            },
          ],
        },
        {
          id: "k16l5",
          title: "Tehtävä 5: Mainoksia ja tiedotteita",
          instructions: {
            fi: "Kuulet viisi lyhyttä mainosta tai tiedotetta kaksi kertaa. Jokaisesta on yksi väite. Onko väite oikein vai väärin?",
            en: "You will hear five short adverts or announcements twice. There is one statement about each. Is it true or false?",
          },
          situation: "Kuulet radiosta ja kunnan tiedotuskanavilta lyhyitä mainoksia ja tiedotteita.",
          plays: 2,
          rate: 1.0,
          lines: [
            {
              speaker: "Tiedote 1",
              text:
                "Vaatteidenvaihtopäivä nuorisotalolla lauantaina kello kahdestatoista kolmeen. Tuo enintään kymmenen puhdasta ja ehjää vaatetta ja vaihda ne uusiin löytöihin. " +
                "Voit tulla myös ilman omia vaatteita, mutta silloin saat ottaa mukaasi korkeintaan kolme vaatetta.",
            },
            {
              speaker: "Tiedote 2",
              text:
                "Jäteasema on suljettu helatorstaina. Seuraavana päivänä, perjantaina, asema avataan poikkeuksellisesti jo kello seitsemän, kaksi tuntia tavallista aiemmin. " +
                "Lauantaina aukioloajat ovat normaalit.",
            },
            {
              speaker: "Mainos 3",
              text:
                "Kaupunkipyöräkausi alkaa huhtikuun alussa! Kausimaksu on kolmekymmentäviisi euroa, ja sillä voit ajaa niin paljon kuin haluat, kunhan yksi matka kestää enintään puoli tuntia. " +
                "Jos matka venyy pidemmäksi, jokaisesta alkavasta lisätunnista peritään euro.",
            },
            {
              speaker: "Mainos 4",
              text:
                "Lataa Hävikkiherkku-sovellus ja osta lähikauppojen ja ravintoloiden ylijäämäruokaa puoleen hintaan. Tuotteet haetaan itse liikkeestä illalla " +
                "kello seitsemän ja yhdeksän välillä. Kotiinkuljetusta ei ole, mutta saat sovellukseen ilmoituksen, kun suosikkikauppasi julkaisee uusia tuotteita.",
            },
            {
              speaker: "Tiedote 5",
              text:
                "Pelastuslaitos varoittaa: järvien jäät ovat lämpimän sään vuoksi heikentyneet nopeasti. Jäällä liikkumista on vältettävä erityisesti salmissa ja jokien suilla, " +
                "joissa virtaava vesi syö jäätä alta. Jäälle lähtevän kannattaa aina ottaa mukaan naskalit ja kertoa jollekulle reittinsä.",
            },
          ],
          questions: [
            {
              id: "k16l5q1",
              type: "tf",
              q: "Tiedote 1: Vaihtopäivästä voi saada vaatteita, vaikka ei toisi omia.",
              answer: true,
              explain: "“Voit tulla myös ilman omia vaatteita, mutta silloin saat ottaa mukaasi korkeintaan kolme vaatetta.”",
            },
            {
              id: "k16l5q2",
              type: "tf",
              q: "Tiedote 2: Helatorstain jälkeisenä päivänä jäteasemalle pääsee tavallista aikaisemmin.",
              answer: true,
              explain: "On Friday the station opens “poikkeuksellisesti jo kello seitsemän, kaksi tuntia tavallista aiemmin.”",
            },
            {
              id: "k16l5q3",
              type: "tf",
              q: "Mainos 3: Kausimaksulla voi ajaa tunnin pituisia matkoja ilman lisämaksua.",
              answer: false,
              explain: "One trip may last at most half an hour; for longer trips a euro is charged for each started extra hour.",
            },
            {
              id: "k16l5q4",
              type: "tf",
              q: "Mainos 4: Sovelluksella ostetun ruoan voi saada kotiin kuljetettuna.",
              answer: false,
              explain: "“Kotiinkuljetusta ei ole” — the food is collected from the shop in the evening.",
            },
            {
              id: "k16l5q5",
              type: "tf",
              q: "Tiedote 5: Jää on heikointa paikoissa, joissa vesi virtaa.",
              answer: true,
              explain: "Avoid “salmissa ja jokien suilla, joissa virtaava vesi syö jäätä alta.”",
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
          id: "k16s1",
          kind: "kertominen",
          title: "Tehtävä 1: Kertominen",
          instructions: {
            fi: "Sinulla on minuutti aikaa valmistautua. Voit tehdä muistiinpanoja. Puhu noin puolitoista minuuttia. Aloita puhuminen vasta, kun kuulet äänimerkin.",
            en: "You have one minute to prepare and may take notes. Speak for about a minute and a half. Start only after the beep.",
          },
          prepSec: 60,
          card: {
            title: "Kerro, miten otat ympäristön huomioon arjessasi.",
            questions: [
              "Miten lajittelet jätteet kotonasi?",
              "Miten kuljet töihin, kouluun tai harrastuksiin?",
              "Mitä olet muuttanut tavoissasi viime vuosina, ja miksi?",
              "Miten ympäristöasioihin suhtaudutaan Suomessa ja jossakin toisessa maassa, jonka tunnet?",
            ],
          },
          items: [{ id: "a", spoken: "Kerro, miten otat ympäristön huomioon arjessasi. Aloita puhuminen nyt.", speakSec: 90 }],
        },
        {
          id: "k16s2",
          kind: "keskustelu",
          title: "Tehtävä 2: Keskustelu A",
          instructions: {
            fi: "Kuulet keskustelun, jossa puhut vuorotellen toisen henkilön kanssa. Lue tilanne ja ohjeet. Puhu, kun kuulet äänimerkin.",
            en: "You will take turns with another speaker. Read the situation and the cues. Speak after the beep.",
          },
          prepSec: 30,
          card: {
            title:
              "Vuokrasit verkosta mökin viikonlopuksi. Kun saavut perille, huomaat, että saunan kiuas ei lämpene eikä mökissä ole juomavettä, vaikka ilmoituksessa luvattiin molemmat. Soitat mökin omistajalle.",
            questions: [],
          },
          items: [
            {
              id: "a",
              spoken: "Haloo, Seppo Kivelä.",
              cue: "[Esittele itsesi ja kerro, miksi soitat.]",
              speakSec: 20,
            },
            {
              id: "b",
              spoken: "Voi ei, sepä ikävää. Mikä siellä tarkalleen ottaen on vialla?",
              cue: "[Kerro tarkemmin, mitä ongelmia mökillä on.]",
              speakSec: 20,
            },
            {
              id: "c",
              spoken: "Kiukaan sähköt voivat olla pois päältä. Sähkökeskus on eteisen kaapissa. Voisitteko katsoa, onko siellä joku vipu alhaalla?",
              cue: "[Kerro, mitä huomaat, kun tarkistat asian.]",
              speakSec: 15,
            },
            {
              id: "d",
              spoken: "Hmm, sitten en osaa sanoa. Sähkömies pääsee paikalle vasta maanantaina. Ja kaivon pumppu on ilmeisesti rikki. Lähin kauppa on viiden kilometrin päässä.",
              cue: "[Kerro, miltä tilanne sinusta tuntuu ja mitä odotat omistajalta.]",
              speakSec: 25,
            },
            {
              id: "e",
              spoken: "Ymmärrän. Voisin palauttaa kolmekymmentä prosenttia vuokrasta. Tai sitten voitte tulla jonakin toisena viikonloppuna uudestaan maksutta.",
              cue: "[Valitse vaihtoehto ja perustele valintasi.]",
              speakSec: 20,
            },
            {
              id: "f",
              spoken: "Selvä, tehdään niin. Lähetän vielä viestin, jossa sovittu asia lukee. Onko vielä jotain muuta?",
              cue: "[Pyydä vielä jotakin tai kiitä ja lopeta puhelu.]",
              speakSec: 15,
            },
          ],
        },
        {
          id: "k16s3",
          kind: "keskustelu",
          title: "Tehtävä 2: Keskustelu B",
          instructions: {
            fi: "Kuulet keskustelun, jossa puhut vuorotellen toisen henkilön kanssa. Lue tilanne ja ohjeet. Puhu, kun kuulet äänimerkin.",
            en: "You will take turns with another speaker. Read the situation and the cues. Speak after the beep.",
          },
          prepSec: 30,
          card: {
            title:
              "Asut kerrostalossa. Haluaisit, että taloyhtiön kerhohuoneeseen tulisi kierrätyshylly, johon asukkaat voivat tuoda tarpeettomia tavaroita muiden otettaviksi. Puhut asiasta taloyhtiön hallituksen puheenjohtajan Raijan kanssa. Sinä aloitat.",
            questions: [],
          },
          items: [
            { id: "a", spoken: "", cue: "[Tervehdi Raijaa ja kerro, mistä haluat puhua.]", speakSec: 15 },
            {
              id: "b",
              spoken: "Kierrätyshylly? Mitä sinne oikein tuotaisiin, ja miksi sellainen olisi tarpeen?",
              cue: "[Kerro esimerkkejä ja perustele ideasi.]",
              speakSec: 25,
            },
            {
              id: "c",
              spoken: "Ajatus on hyvä, mutta pelkään, että hylly täyttyy rikkinäisestä tavarasta ja kerhohuone muuttuu kaatopaikaksi.",
              cue: "[Ehdota sääntöjä, joilla ongelma vältetään.]",
              speakSec: 25,
            },
            {
              id: "d",
              spoken: "Hmm. Kuka sitten valvoisi, että sääntöjä noudatetaan? Hallituksella ei ole siihen aikaa.",
              cue: "[Tarjoudu itse auttamaan tai ehdota muuta ratkaisua.]",
              speakSec: 20,
            },
            {
              id: "e",
              spoken: "Selvä. Kokeillaanko ensin vaikka kolme kuukautta? Ja miten muut asukkaat saisivat tietää asiasta?",
              cue: "[Ota kantaa kokeiluun ja ehdota, miten asukkaille tiedotetaan.]",
              speakSec: 20,
            },
            {
              id: "f",
              spoken: "Hyvä. Otan asian esille hallituksen kokouksessa ensi kuussa.",
              cue: "[Kiitä ja lopeta keskustelu.]",
              speakSec: 10,
            },
          ],
        },
        {
          id: "k16s4",
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
              situation: "Ystäväsi pyytää sinua mukaan sienimetsään sunnuntaina. Sinulla on jo muuta ohjelmaa, mutta haluaisit lähteä toisella kertaa. Mitä sanot?",
              spoken: "Tilanne 1. Ystäväsi pyytää sinua mukaan sienimetsään sunnuntaina. Sinulla on jo muuta ohjelmaa, mutta haluaisit lähteä toisella kertaa. Mitä sanot?",
              prepSec: 20,
              speakSec: 20,
            },
            {
              id: "b",
              situation: "Soitat jäteyhtiön asiakaspalveluun, koska taloyhtiönne biojäteastiaa ei ole tyhjennetty kahteen viikkoon. Mitä sanot?",
              spoken: "Tilanne 2. Soitat jäteyhtiön asiakaspalveluun, koska taloyhtiönne biojäteastiaa ei ole tyhjennetty kahteen viikkoon. Mitä sanot?",
              prepSec: 20,
              speakSec: 30,
            },
            {
              id: "c",
              situation: "Näet, että naapurisi heittää pahvilaatikoita sekajäteastiaan, vaikka pihalla on kartonginkeräysastia. Huomautat asiasta ystävällisesti. Mitä sanot?",
              spoken: "Tilanne 3. Näet, että naapurisi heittää pahvilaatikoita sekajäteastiaan, vaikka pihalla on kartonginkeräysastia. Huomautat asiasta ystävällisesti. Mitä sanot?",
              prepSec: 20,
              speakSec: 30,
            },
            {
              id: "d",
              situation: "Ostit verkosta käytetyn takin yksityiseltä myyjältä. Kotona huomaat, että sen vetoketju on rikki, vaikka ilmoituksessa takkia sanottiin moitteettomaksi. Soitat myyjälle. Mitä sanot?",
              spoken: "Tilanne 4. Ostit verkosta käytetyn takin yksityiseltä myyjältä. Kotona huomaat, että sen vetoketju on rikki, vaikka ilmoituksessa takkia sanottiin moitteettomaksi. Soitat myyjälle. Mitä sanot?",
              prepSec: 20,
              speakSec: 30,
            },
            {
              id: "e",
              situation: "Lainasit ystäväsi sähköpyörää. Akku loppui kesken matkan, koska unohdit ladata sen, ja palautat pyörän myöhässä. Mitä sanot?",
              spoken: "Tilanne 5. Lainasit ystäväsi sähköpyörää. Akku loppui kesken matkan, koska unohdit ladata sen, ja palautat pyörän myöhässä. Mitä sanot?",
              prepSec: 20,
              speakSec: 30,
            },
          ],
        },
        {
          id: "k16s5",
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
              "A. Oma auto: Tarvitseeko kaupungissa asuva omaa autoa? Mitä hyötyä ja haittaa autottomuudesta on? Mitä pitäisi muuttaa, jotta useampi voisi luopua autosta?",
              "B. Ympäristö ja oma vastuu: Voiko yksi ihminen vaikuttaa ilmastonmuutokseen omilla valinnoillaan? Mitkä teot ovat sinusta tärkeimpiä? Pitäisikö vastuun olla enemmän yrityksillä ja valtioilla?",
            ],
          },
          items: [{ id: "a", spoken: "Kerro mielipiteesi valitsemastasi aiheesta. Aloita puhuminen nyt.", speakSec: 120 }],
        },
      ],
    },
  ],
};
