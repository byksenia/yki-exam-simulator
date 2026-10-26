// Keskitaso 4
export default {
  id: "koe14",
  title: "Keskitaso 4",
  level: "keskitaso",
  description: "Education and lifelong learning, children's screen time, school meals, studying as an adult, older people's digital skills, parent–school communication.",
  sections: [
    // ------------------------------------------------------------------ READING
    {
      id: "reading",
      minutes: 60,
      cutoffs: { level1: 0.5, level2: 0.75 },
      ohje:
        "Tässä osakokeessa luet erilaisia tekstejä, esimerkiksi uutisen, kolumnin, mielipidekirjoituksen, aikakauslehden artikkelin, tiedotteen ja ohjeen. Osakokeessa on kuusi tehtävää. Tehtävissä on monivalintakysymyksiä, oikein–väärin-väitteitä ja avoimia kysymyksiä. Vastaa avoimiin kysymyksiin suomeksi ja lyhyesti, omin sanoin. Kaikkia sanoja ei tarvitse ymmärtää, jotta voi vastata oikein. Sanakirjaa ei saa käyttää.",
      tasks: [
        {
          id: "k14r1",
          title: "Tehtävä 1: Uutinen",
          instructions: {
            fi: "Lue uutinen ja vastaa kysymyksiin. Valitse oikea vaihtoehto.",
            en: "Read the news item and answer the questions. Choose the correct option.",
          },
          text: {
            title: "Koululaisten iltapäivävälipala lakkautetaan Mäntylässä – vanhemmat huolissaan",
            body:
              "Mäntylän kunta lopettaa ensi syksystä alkaen koululaisten maksuttoman iltapäivävälipalan. Välipalaa on tarjottu yläkoulussa ja lukiossa niille " +
              "oppilaille, joiden koulupäivä jatkuu kello 14:n jälkeen. Kunta arvioi säästävänsä päätöksellä noin 120 000 euroa vuodessa. Iltapäiväkerhoissa " +
              "käyvät alakoululaiset saavat välipalansa jatkossakin, sillä se sisältyy kerhomaksuun.\n\n" +
              "Sivistysjohtaja Hannele Mattila myöntää, ettei päätös ollut helppo. ”Kunnan talous on niin tiukalla, että jostain on pakko säästää. Mieluummin " +
              "luovumme välipalasta kuin suurennamme opetusryhmiä tai lakkautamme kyläkoulun”, Mattila sanoo. Hänen mukaansa kouluruokaan ei kosketa: lounas " +
              "on jatkossakin maksuton ja täysipainoinen.\n\n" +
              "Vanhempainyhdistysten mielestä kunta säästää väärästä paikasta. ”Moni nuori jättää lounaan väliin tai syö siitä vain vähän. Jos välipalaa ei ole, " +
              "he ostavat koulumatkalla energiajuomia ja karkkia”, sanoo vanhempainyhdistyksen puheenjohtaja Juha Nurmi. Hän huomauttaa, että erityisesti " +
              "vähävaraisten perheiden lapset kärsivät, koska heillä ei ole rahaa ostaa mitään.\n\n" +
              "Kunnanvaltuusto käsittelee asiaa vielä kesäkuussa, kun se päättää ensi vuoden talousarviosta. Vanhempainyhdistykset ovat keränneet adressiin " +
              "yli 1 500 nimeä. Mattilan mukaan yksi mahdollinen kompromissi olisi tarjota välipala edelleen niinä päivinä, kun koulupäivä kestää kello 15:een " +
              "tai pidempään.",
          },
          questions: [
            {
              id: "k14r1q1",
              type: "mc",
              q: "Ketä välipalan lakkauttaminen koskee?",
              options: [
                "kaikkia kunnan koululaisia",
                "yläkoulun ja lukion oppilaita",
                "iltapäiväkerhoissa käyviä alakoululaisia",
              ],
              answer: 1,
              explain:
                "The snack was offered “yläkoulussa ja lukiossa”; children in afternoon clubs keep their snack because it is included in the club fee.",
            },
            {
              id: "k14r1q2",
              type: "mc",
              q: "Miten Mattila perustelee sitä, että säästö kohdistuu juuri välipalaan?",
              options: [
                "Muut säästökohteet olisivat hänen mielestään huonompia.",
                "Välipalaa söi vain pieni osa oppilaista.",
                "Kouluruoan hinta on noussut viime vuosina.",
              ],
              answer: 0,
              explain: "“Mieluummin luovumme välipalasta kuin suurennamme opetusryhmiä tai lakkautamme kyläkoulun.”",
            },
            {
              id: "k14r1q3",
              type: "mc",
              q: "Mitä Juha Nurmi pelkää?",
              options: [
                "Että kouluruoan laatu heikkenee.",
                "Että kerhomaksut nousevat.",
                "Että nuoret alkavat syödä epäterveellisesti.",
              ],
              answer: 2,
              explain: "Without the snack “he ostavat koulumatkalla energiajuomia ja karkkia”. Lunch is not being changed.",
            },
            {
              id: "k14r1q4",
              type: "mc",
              q: "Mitä tekstin mukaan voi vielä tapahtua?",
              options: [
                "Päätös perutaan automaattisesti, jos adressissa on tarpeeksi nimiä.",
                "Välipalaa tarjotaan edelleen pitkinä koulupäivinä.",
                "Koululounaasta tulee osittain maksullinen.",
              ],
              answer: 1,
              explain:
                "A possible compromise: “tarjota välipala edelleen niinä päivinä, kun koulupäivä kestää kello 15:een tai pidempään.” The council decides in June; a petition does not decide anything automatically.",
            },
          ],
        },
        {
          id: "k14r2",
          title: "Tehtävä 2: Aikakauslehden artikkeli",
          instructions: {
            fi: "Lue artikkeli. Ovatko väitteet oikein vai väärin?",
            en: "Read the article. Are the statements true (oikein) or false (väärin)?",
          },
          text: {
            title: "Ruutuaika ei ole pelkkä luku – asiantuntija neuvoo katsomaan, mitä ruudulla tehdään",
            body:
              "Kuinka paljon lapsi saa olla ruudun ääressä? Kysymys aiheuttaa riitoja monessa perheessä, ja vanhemmat saavat neuvoja joka suunnasta: isovanhemmilta, muilta vanhemmilta ja sosiaalisesta mediasta. Moni vanhempi toivoisi selvää rajaa, esimerkiksi " +
              "tuntia päivässä, mutta asiantuntijoiden mukaan pelkkä minuuttimäärä ei kerro kaikkea.\n\n" +
              "”On eri asia, katsooko lapsi tuntikausia lyhyitä videoita yksin vai pelaako hän kaverin kanssa tai tekee videota koulun projektiin”, sanoo " +
              "lastenpsykiatri Riikka Laakso. Hänen mukaansa olennaista on se, mitä ruutuaika vie tilalta. Jos laitteet vähentävät unta, liikuntaa tai yhteistä " +
              "aikaa perheen kanssa, niitä käytetään liikaa, olipa minuuttimäärä mikä tahansa.\n\n" +
              "Tutkimustieto tukee tätä ajatusta. Selvin yhteys on havaittu ruutujen käytön ja unen välillä. Iltaisin käytetyt laitteet viivästyttävät " +
              "nukahtamista, ja moni koululainen nukkuu arkiöinä selvästi vähemmän kuin suositellaan. Siksi Laakso pitää tärkeimpänä yksittäisenä sääntönä sitä, " +
              "että puhelimet ja tabletit jäävät yöksi makuuhuoneen ulkopuolelle. Muiden haittojen osalta tutkimustulokset ovat ristiriitaisempia.\n\n" +
              "Alle kouluikäisten kohdalla suositukset ovat tiukemmat. Pienet lapset oppivat kieltä ja vuorovaikutusta ennen kaikkea ihmisiltä, eivät ruudulta. " +
              "Laakso ei kuitenkaan halua syyllistää vanhempia: ”Jos piirretty antaa väsyneelle vanhemmalle vartin aikaa laittaa ruokaa, se ei pilaa lasta. " +
              "Ongelma syntyy, jos ruutu on päivästä toiseen ainoa keino rauhoittaa lapsi.”\n\n" +
              "Asiantuntijat muistuttavat myös, että lapset oppivat vanhemmiltaan. Jos aikuinen selaa puhelinta ruokapöydässä, on vaikea vaatia, että lapsi " +
              "laskisi omansa pois. Moni perhe onkin sopinut yhteisistä puhelimettomista hetkistä, kuten aterioista ja iltasadusta.\n\n" +
              "Koululaisten perheissä hankaluuksia aiheuttavat myös läksyt. Kun kotitehtävät tehdään tietokoneella, vanhemman on vaikea tietää, opiskeleeko " +
              "lapsi vai katsooko hän samalla videoita. Laakson mukaan tähän ei ole yhtä oikeaa ratkaisua, mutta nuorempien koululaisten kannattaa tehdä läksyt " +
              "yhteisessä tilassa, esimerkiksi keittiön pöydän ääressä, eikä omassa huoneessa suljetun oven takana.\n\n" +
              "Ruudut kokonaan kieltävää linjaa Laakso ei suosittele. Lasten kaverisuhteita hoidetaan nykyään osittain verkossa, ja jos kaikki muut sopivat " +
              "pelin jälkeen tapaamisesta, ulkopuolelle jääminen voi olla lapselle kova paikka. Hänen mielestään on parempi opettaa lasta käyttämään laitteita järkevästi " +
              "kuin yrittää pitää hänet niistä kokonaan erossa. Sääntöjen pitäisi myös muuttua lapsen kasvaessa: kymmenvuotiaan ja viisitoistavuotiaan rajat " +
              "eivät voi olla samat.\n\n" +
              "Jos ruutuajasta tulee perheessä jatkuvaa riitaa, Laakso neuvoo sopimaan säännöt yhdessä lapsen kanssa ja kirjoittamaan ne paperille jääkaapin " +
              "oveen. Silloin lapsi kokee voineensa vaikuttaa niihin, ja niitä on helpompi noudattaa.",
          },
          questions: [
            {
              id: "k14r2q1",
              type: "tf",
              q: "Asiantuntijoiden mukaan ruutuajan pituus ei yksin kerro, onko laitteita käytetty liikaa.",
              answer: true,
              explain: "“pelkkä minuuttimäärä ei kerro kaikkea” — what matters is what screen time replaces.",
            },
            {
              id: "k14r2q2",
              type: "tf",
              q: "Laakson mielestä lyhyiden videoiden katselu yksin on samanarvoista kuin pelaaminen kaverin kanssa.",
              answer: false,
              explain: "“On eri asia, katsooko lapsi tuntikausia lyhyitä videoita yksin vai pelaako hän kaverin kanssa.”",
            },
            {
              id: "k14r2q3",
              type: "tf",
              q: "Tutkimuksissa on löydetty yhtä selvä yhteys ruutujen käytön ja kaikkien terveyshaittojen välillä.",
              answer: false,
              explain: "The clearest link is with sleep; for other harms “tutkimustulokset ovat ristiriitaisempia”.",
            },
            {
              id: "k14r2q4",
              type: "tf",
              q: "Laakson mukaan puhelimet kannattaa pitää yöllä poissa makuuhuoneesta.",
              answer: true,
              explain: "His most important single rule: “puhelimet ja tabletit jäävät yöksi makuuhuoneen ulkopuolelle.”",
            },
            {
              id: "k14r2q5",
              type: "tf",
              q: "Laakson mielestä pienen lapsen ei pitäisi koskaan antaa katsoa piirrettyjä.",
              answer: false,
              explain: "“Jos piirretty antaa väsyneelle vanhemmalle vartin aikaa laittaa ruokaa, se ei pilaa lasta.” The problem is using the screen as the only way, day after day.",
            },
            {
              id: "k14r2q6",
              type: "tf",
              q: "Ruutujen kieltäminen kokonaan voi Laakson mukaan vaikeuttaa lapsen kaverisuhteita.",
              answer: true,
              explain: "Friendships are partly maintained online, and being left out “voi olla kova paikka”.",
            },
            {
              id: "k14r2q7",
              type: "tf",
              q: "Laakso suosittelee, että vanhemmat päättävät perheen ruutusäännöt keskenään ilman lasta.",
              answer: false,
              explain: "He advises “sopimaan säännöt yhdessä lapsen kanssa”, so the child feels he or she could influence them.",
            },
          ],
        },
        {
          id: "k14r3",
          title: "Tehtävä 3: Tiedote",
          instructions: {
            fi: "Lue tiedote ja vastaa kysymyksiin suomeksi. Vastaa lyhyesti.",
            en: "Read the notice and answer the questions in Finnish. Answer briefly.",
          },
          text: {
            title: "Koivuniemen koulu: kodin ja koulun yhteistyö lukuvuonna",
            body:
              "Hyvät huoltajat,\n\n" +
              "tässä tiedotteessa kerromme, miten kodin ja koulun välinen viestintä hoidetaan tänä lukuvuonna.\n\n" +
              "Wilma on koulun pääasiallinen viestintäkanava. Opettajat vastaavat Wilma-viesteihin kahden arkipäivän kuluessa, mutta eivät iltaisin eivätkä " +
              "viikonloppuisin. Kiireelliset asiat, kuten samana päivänä tapahtuvat muutokset koulukuljetuksiin tai lapsen hakemiseen, hoidetaan soittamalla " +
              "koulun kansliaan arkisin kello 8–15. Muistathan päivittää muuttuneet yhteystietosi Wilmaan, jotta tavoitamme sinut tarvittaessa nopeasti.\n\n" +
              "Ilmoita lapsen sairauspoissaolosta Wilmassa viimeistään kello 8.15 sairastumisaamuna. Jos lapsi on poissa muusta syystä enintään kolme päivää, " +
              "esimerkiksi perhematkan vuoksi, pyydä lupa luokanopettajalta. Pidemmistä poissaoloista päättää rehtori, ja lupaa on haettava vähintään kaksi " +
              "viikkoa etukäteen. Huomaa, että poissaolon aikana opetettujen asioiden opiskelu on huoltajan vastuulla.\n\n" +
              "Terveydellisistä syistä tarvittavasta erityisruokavaliosta on toimitettava kouluterveydenhoitajalle lomake joka lukuvuoden alussa. " +
              "Vakaumukseen perustuvasta ruokavaliosta, esimerkiksi kasvisruokavaliosta, riittää huoltajan ilmoitus Wilmassa, eikä lomaketta tarvita.\n\n" +
              "Vanhempainilta pidetään syyskuun toisella viikolla, ja sen tarkempi ohjelma lähetetään Wilmassa viikkoa etukäteen. Lisäksi jokaisen oppilaan kanssa käydään syksyn aikana arviointikeskustelu, johon myös " +
              "huoltaja osallistuu. Keskusteluun voi osallistua myös etäyhteydellä.\n\n" +
              "Rehtori Kaisa Vainio",
          },
          questions: [
            {
              id: "k14r3q1",
              type: "open",
              q: "Miten koululle kerrotaan, jos lapsen hakija vaihtuu samana päivänä?",
              accept: ["soittamalla koulun kansliaan", "soitetaan kansliaan kello 8–15", "puhelimella kansliaan"],
              keyNote: "By phoning the school office (8–15). A Wilma message is wrong — it may be answered only within two working days.",
              explain: "“Kiireelliset asiat, kuten … muutokset … lapsen hakemiseen, hoidetaan soittamalla koulun kansliaan.”",
            },
            {
              id: "k14r3q2",
              type: "open",
              q: "Mitä huoltajan pitää tehdä, jos perhe lähtee kesken lukukauden viikon matkalle?",
              hint: "(2 asiaa)",
              accept: [
                "hakea lupa rehtorilta kaksi viikkoa etukäteen ja huolehtia, että lapsi opiskelee poissaolon aikana opetetut asiat",
                "pyytää rehtorilta lupaa ajoissa ja huolehtia lapsen opiskelusta",
              ],
              keyNote:
                "Both: apply to the principal for permission at least two weeks in advance (a week is more than three days, so the class teacher cannot decide) AND make sure the child studies what is taught during the absence.",
              explain:
                "“Pidemmistä poissaoloista päättää rehtori, ja lupaa on haettava vähintään kaksi viikkoa etukäteen … poissaolon aikana opetettujen asioiden opiskelu on huoltajan vastuulla.”",
            },
            {
              id: "k14r3q3",
              type: "open",
              q: "Mitä huoltajan pitää tehdä, jos lapsi syö vakaumuksen vuoksi kasvisruokaa?",
              accept: ["ilmoittaa siitä Wilmassa", "kertoa asiasta Wilmassa", "Wilma-ilmoitus riittää"],
              keyNote: "Just notify the school in Wilma. No form to the school nurse is needed (that is only for health-related diets).",
              explain: "“Vakaumukseen perustuvasta ruokavaliosta, esimerkiksi kasvisruokavaliosta, riittää huoltajan ilmoitus Wilmassa.”",
            },
            {
              id: "k14r3q4",
              type: "open",
              q: "Miten huoltaja voi osallistua arviointikeskusteluun, jos hän ei pääse kouluun?",
              accept: ["etäyhteydellä", "etänä", "videoyhteydellä"],
              keyNote: "Remotely (via a remote connection).",
              explain: "“Keskusteluun voi osallistua myös etäyhteydellä.”",
            },
          ],
        },
        {
          id: "k14r4",
          title: "Tehtävä 4: Kolumni",
          instructions: {
            fi: "Lue kolumni ja vastaa kysymyksiin. Valitse oikea vaihtoehto.",
            en: "Read the column and answer the questions. Choose the correct option.",
          },
          text: {
            title: "Viisikymppinen fuksi – Leena Harju",
            body:
              "Täytin viime keväänä viisikymmentä ja sain samalla viikolla tiedon, että minut on hyväksytty yliopistoon opiskelemaan sosiaalityötä. Juhlissani " +
              "joku kysyi, miksi ihmeessä aloitan nyt, kun eläkeikäkin alkaa jo häämöttää. Vastasin, että juuri siksi. Jos en aloita nyt, en aloita koskaan.\n\n" +
              "Ensimmäinen syksy oli nöyrä kokemus. En ollut kirjoittanut esseetä kolmeenkymmeneen vuoteen, ja ensimmäisen palautukseni opettaja palautti " +
              "korjattavaksi. Kurssikaverini ovat suurimmaksi osaksi parikymppisiä. He tekevät muistiinpanot läppärillä ja löytävät tiedon sekunneissa, kun minä " +
              "vielä etsin oikeaa kansiota. Ensimmäisellä luennolla minua luultiin opettajaksi, ja eräs opiskelija kysyi minulta, milloin tentti pidetään.\n\n" +
              "Huomasin kuitenkin pian, että iästä on myös hyötyä. Kun puhumme perheiden ongelmista tai työttömyydestä, minulla on niistä kokemusta, jota ei saa " +
              "kirjoista. Olen ollut kahdesti lomautettuna ja kasvattanut kolme lasta, joista yksi sairastui vakavasti teini-iässä. Nuoret kurssikaverini " +
              "kuuntelevat, kun kerron, ja minä opin heiltä uusia tapoja ajatella. Ryhmätöissä minä muistutan aikatauluista, ja he keksivät, miten esitys tehdään.\n\n" +
              "Myös itseluottamukseni on kasvanut. Kun sain ensimmäisestä tentistä parhaan mahdollisen arvosanan, soitin heti äidilleni, kuten olisin tehnyt " +
              "kymmenvuotiaana. Hän nauroi ja sanoi, ettei ollut koskaan epäillyt minua. Minä olin epäillyt, ja paljon. Koulussa minulle sanottiin aikanaan, " +
              "ettei minusta ole lukemaan, ja uskoin sen kolmekymmentä vuotta.\n\n" +
              "Aikuisena opiskelu on silti raskasta. Teen edelleen kolmena päivänä viikossa töitä toimistossa, koska pelkillä opintotuilla en pystyisi maksamaan " +
              "asuntolainaa. Luen tenttikirjoja junassa ja kirjoitan esseitä viikonloppuisin. Joskus luen saman sivun kolmesti, koska ajatukset karkaavat työasioihin. Mieheni on ottanut hoitaakseen kotityöt, mutta silti päivästä " +
              "puuttuu usein pari tuntia. Tiedän, että moni ikäiseni haaveilee opiskelusta mutta ei uskalla aloittaa juuri rahan takia.\n\n" +
              "Jatkuvasta oppimisesta puhutaan paljon, mutta käytännössä yhteiskunta on yhä rakennettu sen varaan, että ensin opiskellaan ja sitten tehdään töitä. " +
              "Luennot ovat usein päiväsaikaan, eikä aikuisen elämää ole otettu huomioon. Minusta yliopistojen pitäisi tarjota enemmän ilta- ja verkko-opintoja, " +
              "jotta opiskelu olisi mahdollista muillekin kuin niille, joilla on siihen varaa.\n\n" +
              "En tiedä, ehdinkö tehdä sosiaalityöntekijänä kovin pitkää uraa. Ehkä kymmenen vuotta, jos terveys pysyy ja kaikki menee hyvin. Mutta en ole yliopistossa vain " +
              "tulevaa työtä varten. Olen täällä, koska haluan ymmärtää maailmaa paremmin. Ja jos joku viisikymppinen lukee tätä ja miettii, onko jo liian " +
              "myöhäistä, vastaukseni on: ei ole, mutta helppoa se ei ole.",
          },
          questions: [
            {
              id: "k14r4q1",
              type: "mc",
              q: "Miksi kirjoittaja päätti aloittaa opinnot juuri nyt?",
              options: [
                "Hän oli jäänyt työttömäksi.",
                "Hän ajatteli, että myöhemmin aloittaminen ei enää onnistuisi.",
                "Hänen lapsensa kannustivat häntä opiskelemaan.",
              ],
              answer: 1,
              explain: "“Jos en aloita nyt, en aloita koskaan.” She still works three days a week, so she is not unemployed.",
            },
            {
              id: "k14r4q2",
              type: "mc",
              q: "Mitä kirjoittaja kertoo ensimmäisestä syksystään?",
              options: [
                "Hän pärjäsi kirjoitustehtävissä nuoria paremmin.",
                "Opettajat kohtelivat häntä eri tavalla kuin muita opiskelijoita.",
                "Hän huomasi, että moni asia oli hänelle vaikeaa tai vierasta.",
              ],
              answer: 2,
              explain:
                "“Ensimmäinen syksy oli nöyrä kokemus”: her first essay was sent back for corrections and she was slower with laptops. Being taken for a teacher was a mistake by others, not different treatment.",
            },
            {
              id: "k14r4q3",
              type: "mc",
              q: "Mitä hyötyä kirjoittajan iästä on ollut opinnoissa?",
              options: [
                "Hän voi tuoda keskusteluihin omaa elämänkokemustaan.",
                "Hän käyttää tietotekniikkaa nuoria sujuvammin.",
                "Hän saa tehdä ryhmätyöt yksin.",
              ],
              answer: 0,
              explain: "“minulla on niistä kokemusta, jota ei saa kirjoista.”",
            },
            {
              id: "k14r4q4",
              type: "mc",
              q: "Miksi kirjoittaja käy edelleen töissä?",
              options: [
                "Hän tarvitsee palkkaa asuntolainan maksamiseen.",
                "Hän ei halua menettää työpaikkaansa.",
                "Työ liittyy läheisesti hänen opintoihinsa.",
              ],
              answer: 0,
              explain: "“pelkillä opintotuilla en pystyisi maksamaan asuntolainaa.”",
            },
            {
              id: "k14r4q5",
              type: "mc",
              q: "Mikä seuraavista on kolumnissa kirjoittajan mielipide eikä tosiasia?",
              options: [
                "Kirjoittaja tekee töitä kolmena päivänä viikossa.",
                "Kirjoittaja on ollut kahdesti lomautettuna.",
                "Yliopistojen pitäisi tarjota enemmän ilta- ja verkko-opintoja.",
              ],
              answer: 2,
              explain: "“Minusta yliopistojen pitäisi tarjota enemmän ilta- ja verkko-opintoja” is her opinion; the others are facts about her life.",
            },
            {
              id: "k14r4q6",
              type: "mc",
              q: "Mikä on kirjoittajan tärkein syy opiskella?",
              options: [
                "Hän haluaa tehdä pitkän uran sosiaalityöntekijänä.",
                "Hän haluaa ymmärtää maailmaa paremmin.",
                "Hän haluaa näyttää esimerkkiä ikätovereilleen.",
              ],
              answer: 1,
              explain: "“en ole yliopistossa vain tulevaa työtä varten. Olen täällä, koska haluan ymmärtää maailmaa paremmin.” She doubts a long career is possible.",
            },
          ],
        },
        {
          id: "k14r5",
          title: "Tehtävä 5: Mielipidekirjoitus",
          instructions: {
            fi: "Lue mielipidekirjoitus. Ovatko väitteet oikein vai väärin?",
            en: "Read the letter to the editor. Are the statements true (oikein) or false (väärin)?",
          },
          text: {
            title: "Äitini ei ole avuton, vaikka sovellus on hänelle vaikea",
            body:
              "Äitini on 84-vuotias. Hän teki pitkän uran kirjanpitäjänä, hoitaa raha-asiansa tarkasti ja lukee joka aamu kaksi sanomalehteä. Silti hän tuntee " +
              "itsensä nykyään avuttomaksi, koska lähes kaikki asiat pitäisi hoitaa älypuhelimella.\n\n" +
              "Viime kuussa hänen pankkikonttorinsa suljettiin. Lähin konttori on nyt 40 kilometrin päässä, ja sinnekin pääsee vain varaamalla ajan etukäteen – " +
              "verkossa tietysti. Terveyskeskuksen ajanvaraus toimii parhaiten sovelluksella, ja junaliput ovat asemalla kalliimpia kuin netissä. Äitini on käynyt " +
              "kirjaston digiopastuksessa, ja moni asia sujuu jo. Mutta kun sovellus päivittyy ja painikkeet vaihtavat paikkaa, hän joutuu aloittamaan alusta.\n\n" +
              "Usein sanotaan, että ikäihmisten pitäisi vain opetella. Olen samaa mieltä siitä, että opettelusta on hyötyä, ja kannustan äitiäni siihen. Kaikki " +
              "eivät kuitenkaan pysty siihen: osalla on muistisairaus, heikko näkö tai vapisevat kädet. Lisäksi palvelut on usein suunniteltu niin, että ne ovat " +
              "vaikeita kenelle tahansa. Minäkin olen joskus joutunut yrittämään kolme kertaa, ennen kuin olen saanut Kelan lomakkeen lähetettyä.\n\n" +
              "En vaadi, että digitaalisista palveluista luovuttaisiin. Ne säästävät aikaa ja rahaa, ja monelle ne ovat helpompia kuin jonottaminen. Vaadin, että " +
              "jokaiseen palveluun on aina myös toinen reitti: puhelin, johon vastaa ihminen, tai paikka, jonne voi mennä. Muuten jätämme ulkopuolelle juuri ne " +
              "ihmiset, jotka ovat rakentaneet tämän maan.\n\n" +
              "Tuomas Kivelä",
          },
          questions: [
            {
              id: "k14r5q1",
              type: "tf",
              q: "Kirjoittajan mukaan äidin vaikeudet eivät johdu siitä, että hän ei ymmärtäisi asioita.",
              answer: true,
              explain:
                "He stresses her long career as a bookkeeper, careful money management and reading two papers a day — she feels helpless only because everything requires a smartphone.",
            },
            {
              id: "k14r5q2",
              type: "tf",
              q: "Äiti on saanut opastusta digitaalisten palvelujen käyttöön.",
              answer: true,
              explain: "“Äitini on käynyt kirjaston digiopastuksessa, ja moni asia sujuu jo.”",
            },
            {
              id: "k14r5q3",
              type: "tf",
              q: "Kun äiti on kerran oppinut käyttämään sovellusta, hän osaa käyttää sitä jatkossa ongelmitta.",
              answer: false,
              explain: "“kun sovellus päivittyy ja painikkeet vaihtavat paikkaa, hän joutuu aloittamaan alusta.”",
            },
            {
              id: "k14r5q4",
              type: "tf",
              q: "Kirjoittajan mielestä ikäihmisten ei kannata opetella digitaalisten palvelujen käyttöä.",
              answer: false,
              explain: "“Olen samaa mieltä siitä, että opettelusta on hyötyä, ja kannustan äitiäni siihen.”",
            },
            {
              id: "k14r5q5",
              type: "tf",
              q: "Kirjoittajan mukaan myös nuoremmilla voi olla vaikeuksia digitaalisten palvelujen kanssa.",
              answer: true,
              explain: "Services are often “vaikeita kenelle tahansa”; he himself has had to try three times to send a Kela form.",
            },
            {
              id: "k14r5q6",
              type: "tf",
              q: "Kirjoittaja vaatii, että palvelut siirretään takaisin konttoreihin.",
              answer: false,
              explain: "“En vaadi, että digitaalisista palveluista luovuttaisiin” — he wants an alternative route (a human on the phone or a place to go) alongside them.",
            },
          ],
        },
        {
          id: "k14r6",
          title: "Tehtävä 6: Ohje",
          instructions: {
            fi: "Lue ohje ja vastaa kysymyksiin suomeksi. Vastaa lyhyesti.",
            en: "Read the instructions and answer the questions in Finnish. Answer briefly.",
          },
          text: {
            title: "Avoimen yliopiston opinnot – näin ilmoittaudut",
            body:
              "Avoimessa yliopistossa voit opiskella yliopistotason kursseja iästä ja pohjakoulutuksesta riippumatta. Pääsykoetta ei ole, vaan opiskelupaikat " +
              "täytetään ilmoittautumisjärjestyksessä.\n\n" +
              "1. Ilmoittaudu kurssille verkossa viimeistään kaksi viikkoa ennen kurssin alkua. Tarvitset verkkopankkitunnukset tai mobiilivarmenteen.\n" +
              "2. Maksa kurssimaksu ilmoittautumisen yhteydessä. Maksu on 15 euroa opintopisteeltä, eli esimerkiksi viiden opintopisteen kurssi maksaa 75 euroa. " +
              "Työttömille työnhakijoille kurssit ovat maksuttomia, mutta oikeus on osoitettava työllisyyspalveluista saadulla todistuksella.\n" +
              "3. Saat sähköpostiisi tunnukset verkko-oppimisympäristöön viikkoa ennen kurssin alkua.\n\n" +
              "Useimmat kurssit voi suorittaa kokonaan verkossa, mutta osaan kuuluu lähiopetusta tai tentti yliopiston tiloissa. Tarkista tämä kurssin " +
              "kuvauksesta ennen ilmoittautumista.\n\n" +
              "Jos peruutat ilmoittautumisesi viimeistään kaksi viikkoa ennen kurssin alkua, saat maksun takaisin kokonaan. Myöhemmin peruttaessa maksusta " +
              "palautetaan puolet. Kurssin alettua maksua ei enää palauteta.\n\n" +
              "Avoimessa yliopistossa suoritetut opinnot voi myöhemmin sisällyttää tutkintoon. Jos suoritat riittävän määrän opintoja hyvin arvosanoin, voit hakea " +
              "tutkinto-opiskelijaksi niin sanotun avoimen väylän kautta ilman pääsykoetta. Väyläkohtaiset vaatimukset löydät kunkin oppiaineen sivulta.\n\n" +
              "Neuvontaa saat sähköpostitse tai puhelimitse arkisin kello 10–14.",
          },
          questions: [
            {
              id: "k14r6q1",
              type: "open",
              q: "Miten opiskelijat valitaan avoimen yliopiston kursseille?",
              accept: ["ilmoittautumisjärjestyksessä", "ne, jotka ilmoittautuvat ensimmäisinä, pääsevät", "nopeimmat ilmoittautujat pääsevät"],
              keyNote: "In order of registration (first come, first served). There is no entrance exam.",
              explain: "“Pääsykoetta ei ole, vaan opiskelupaikat täytetään ilmoittautumisjärjestyksessä.”",
            },
            {
              id: "k14r6q2",
              type: "open",
              q: "Mitä työttömän työnhakijan pitää tehdä, jotta hän saa opiskella maksutta?",
              accept: [
                "toimittaa todistus työllisyyspalveluista",
                "osoittaa työttömyytensä todistuksella",
                "näyttää työllisyyspalvelujen todistus",
              ],
              keyNote: "Prove the right with a certificate from the employment services.",
              explain: "“oikeus on osoitettava työllisyyspalveluista saadulla todistuksella.”",
            },
            {
              id: "k14r6q3",
              type: "open",
              q: "Kuinka suuren osan maksusta saa takaisin, jos peruu ilmoittautumisen viikkoa ennen kurssin alkua?",
              accept: ["puolet", "puolet maksusta", "50 prosenttia"],
              keyNote: "Half. One week before is later than the two-week limit for a full refund, but before the course starts.",
              explain: "Full refund only “viimeistään kaksi viikkoa ennen kurssin alkua”; “Myöhemmin peruttaessa maksusta palautetaan puolet.”",
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
          id: "k14w1",
          title: "Tehtävä 1: Viesti opettajalle",
          instructions: { fi: "Kirjoita viesti. Kirjoita noin 80–150 sanaa.", en: "Write a message of about 80–150 words." },
          prompt:
            "Perheesi on muuttanut uudelle paikkakunnalle, ja yhdeksänvuotias lapsesi aloittaa ensi maanantaina Koivuniemen koulun 3B-luokalla. " +
            "Kirjoita viesti luokanopettaja Anna Mäkiselle.",
          bullets: [
            "Esittele itsesi ja lapsesi.",
            "Kerro lapsesi ruokavaliosta ja siitä, mitä koulun keittiön pitää tietää.",
            "Kerro, mikä lasta jännittää uudessa koulussa, ja ehdota, miten opettaja voisi auttaa.",
            "Kerro, miten ja milloin sinut tavoittaa parhaiten.",
            "Kysy jotain koulun käytännöistä, esimerkiksi läksyistä tai liikuntatunneista.",
            "Kerro lisäksi ainakin kaksi muuta asiaa.",
            "Muista aloitus ja lopetus.",
          ],
          promptEn:
            "Your family has moved to a new town and your nine-year-old starts in class 3B next Monday. Write to the class teacher Anna Mäkinen: introduce yourself and your child, explain your child's diet and what the school kitchen needs to know, say what makes the child nervous and suggest how the teacher could help, say how and when you are best reached, ask about a school practice (e.g. homework or PE lessons), and add at least two more points of your own.",
          register:
            "formal message to a teacher: Hyvä Anna Mäkinen / Hei Anna … Ystävällisin terveisin + full name (… äiti/isä); polite conditional (voisitteko, toivoisin)",
          minWords: 80,
          maxWords: 150,
        },
        {
          id: "k14w2",
          title: "Tehtävä 2: Viesti ystävälle",
          instructions: { fi: "Kirjoita viesti. Kirjoita noin 60–120 sanaa.", en: "Write a message of about 60–120 words." },
          prompt: "Aloitit syksyllä iltakurssin kansalaisopistossa. Kirjoita viesti ystävällesi Annelle.",
          bullets: [
            "Kerro, millainen kurssi on ja miksi valitsit sen.",
            "Kerro, mitä tapahtui ensimmäisellä kurssikerralla.",
            "Kerro, mikä on ollut yllättävää tai vaikeaa.",
            "Ehdota, että Anne tulisi kanssasi kevään kurssille, ja perustele ehdotuksesi.",
            "Muista aloitus ja lopetus.",
          ],
          promptEn:
            "In the autumn you started an evening course at an adult education centre. Write to your friend Anne: describe the course and why you chose it, tell what happened at the first session, say what has been surprising or difficult, and suggest that Anne joins you on the spring course, giving reasons.",
          register: "informal message to a friend: Moi Anne! / Hei Anne! … Halauksin / Moikka! + first name; past tense narration, colloquial tone allowed",
          minWords: 60,
          maxWords: 120,
        },
        {
          id: "k14w3",
          title: "Tehtävä 3: Mielipideteksti",
          instructions: { fi: "Kirjoita mielipideteksti. Kirjoita noin 100–180 sanaa.", en: "Write an opinion text of about 100–180 words." },
          prompt: "Sanomalehden verkkosivuilla keskustellaan koulusta ja kasvatuksesta. Valitse aihe A tai B ja kirjoita mielipidekirjoitus.",
          bullets: [
            "A. Joissakin kouluissa oppilaiden puhelimet kerätään aamulla pois ja palautetaan vasta koulupäivän päätteeksi. Pitäisikö kaikkien koulujen toimia näin?",
            "B. Kouluruokaan on lisätty yhä enemmän kasvisruokaa. Pitäisikö koululounaan olla kokonaan kasvisruokaa?",
            "Kerro, mistä on kyse ja mitä mieltä olet asiasta. Perustele mielipiteesi ainakin kolmella tavalla.",
          ],
          promptEn:
            "A newspaper website hosts a discussion on school and upbringing. Choose A (some schools collect pupils' phones in the morning and return them at the end of the day — should all schools do this?) or B (should school lunch be completely vegetarian?). Say what the issue is and what you think, and justify your opinion in at least three ways.",
          register:
            "opinion text for a newspaper website: neutral written style, a clear opening statement, linked arguments (ensinnäkin, lisäksi, toisaalta, siksi), a conclusion; no greeting needed, may end with name/signature",
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
          id: "k14l1",
          title: "Tehtävä 1: Haastattelu",
          instructions: {
            fi: "Kuulet haastattelun kaksi kertaa. Lue ensin kysymykset. Valitse oikea vaihtoehto.",
            en: "You will hear an interview twice. Read the questions first. Choose the correct option.",
          },
          situation: "Paikallisradiossa haastatellaan Seija Laitista, joka koordinoi kirjaston ja eläkeläisjärjestöjen yhteistä digitukea.",
          plays: 2,
          rate: 1.0,
          lines: [
            {
              speaker: "Toimittaja",
              text: "Seija, teidän digitukeen tulee viikoittain kymmeniä ihmisiä. Millaisten asioiden kanssa he tarvitsee apua?",
            },
            {
              speaker: "Seija",
              text:
                "No, eniten kysytään pankkiasioista ja ajanvarauksista, eli siitä, miten varataan aika terveyskeskukseen tai vaikka kampaajalle. Viime aikoina on tullut paljon kysymyksiä myös huijausviesteistä. " +
                "Moni tulee näyttämään viestiä ja kysyy, onko tää oikeasti pankista.",
            },
            { speaker: "Toimittaja", text: "Ja onko ne?" },
            {
              speaker: "Seija",
              text:
                "Harvoin. Me sanotaan aina, että pankki ei koskaan pyydä tunnuksia viestillä eikä puhelimessa. Jos epäilee jotain, kannattaa soittaa itse pankin numeroon, " +
                "jonka löytää esimerkiksi pankkikortin takaa. Ei siihen numeroon, joka on viestissä.",
            },
            { speaker: "Toimittaja", text: "Millainen on tyypillinen asiakas?" },
            {
              speaker: "Seija",
              text:
                "Ehkä yllättävää on, että moni on vasta vähän yli kuudenkymmenen. He on käyttäneet tietokonetta töissä, mutta siellä joku muu on aina hoitanut päivitykset ja ongelmat. " +
                "Eläkkeellä he huomaa yhtäkkiä olevansa yksin laitteiden kanssa.",
            },
            { speaker: "Toimittaja", text: "Mikä on tärkeintä, kun neuvoo ikäihmistä?" },
            {
              speaker: "Seija",
              text:
                "Kärsivällisyys. Ja se, ettei ota laitetta omiin käsiin. Moni auttaja, ja varsinkin omat lapset, tekee asian nopeasti itse, ja sitten seuraavalla kerralla ollaan taas samassa tilanteessa. " +
                "Me neuvotaan niin, että ihminen painaa itse jokaista nappia. Se on hitaampaa, mutta silloin asia jää mieleen.",
            },
            { speaker: "Toimittaja", text: "Riittääkö teillä auttajia?" },
            {
              speaker: "Seija",
              text:
                "Vapaaehtoisia on onneksi tullut lisää. Paljon on lukiolaisia, jotka saa siitä opintopisteitä, ja sitten eläkeläisiä, jotka on itse oppinut ja haluaa nyt auttaa muita. " +
                "Mutta maanantaisin on aina pitkä jono, joten kannattaa tulla mieluummin loppuviikosta.",
            },
          ],
          questions: [
            {
              id: "k14l1q1",
              type: "mc",
              q: "Mistä digituessa kysytään eniten?",
              options: [
                "huijausviesteistä",
                "pankkiasioista ja ajanvarauksista",
                "uusien laitteiden ostamisesta",
              ],
              answer: 1,
              explain: "“eniten kysytään pankkiasioista ja ajanvarauksista.” Scam messages are a newer, growing topic, not the most common one.",
            },
            {
              id: "k14l1q2",
              type: "mc",
              q: "Mitä Seija neuvoo tekemään, jos epäilee viestin olevan huijaus?",
              options: [
                "vastaamaan viestiin ja pyytämään lisätietoja",
                "soittamaan viestissä olevaan numeroon",
                "soittamaan pankkiin numeroon, jonka on itse etsinyt",
              ],
              answer: 2,
              explain: "“kannattaa soittaa itse pankin numeroon, jonka löytää esimerkiksi pankkikortin takaa. Ei siihen numeroon, joka on viestissä.”",
            },
            {
              id: "k14l1q3",
              type: "mc",
              q: "Mikä Seijan mukaan on yllättävää digituen asiakkaissa?",
              options: [
                "Moni on vasta vähän yli kuusikymmentävuotias.",
                "Useimmat eivät ole koskaan käyttäneet tietokonetta.",
                "Moni tulee paikalle lastensa kanssa.",
              ],
              answer: 0,
              explain: "“Ehkä yllättävää on, että moni on vasta vähän yli kuudenkymmenen.” They have used computers at work.",
            },
            {
              id: "k14l1q4",
              type: "mc",
              q: "Miksi moni eläkkeelle jäänyt tarvitsee apua?",
              options: [
                "Työpaikalla joku muu hoiti laitteiden ongelmat.",
                "Hän on unohtanut, miten tietokonetta käytetään.",
                "Hänellä ei ole varaa uusiin laitteisiin.",
              ],
              answer: 0,
              explain: "“siellä joku muu on aina hoitanut päivitykset ja ongelmat. Eläkkeellä he huomaa yhtäkkiä olevansa yksin laitteiden kanssa.”",
            },
            {
              id: "k14l1q5",
              type: "mc",
              q: "Miten digituessa neuvotaan?",
              options: [
                "Auttaja hoitaa asian nopeasti asiakkaan puolesta.",
                "Asiakas tekee itse jokaisen vaiheen.",
                "Asiakkaalle annetaan kirjalliset ohjeet kotiin.",
              ],
              answer: 1,
              explain: "“Me neuvotaan niin, että ihminen painaa itse jokaista nappia.” Doing it quickly for them is what relatives often do — and that is the mistake.",
            },
            {
              id: "k14l1q6",
              type: "mc",
              q: "Milloin digitukeen kannattaa Seijan mukaan tulla?",
              options: ["maanantaina", "aamupäivällä", "viikon loppupuolella"],
              answer: 2,
              explain: "“maanantaisin on aina pitkä jono, joten kannattaa tulla mieluummin loppuviikosta.”",
            },
          ],
        },
        {
          id: "k14l2",
          title: "Tehtävä 2: Keskustelu kaupassa",
          instructions: {
            fi: "Kuulet keskustelun kaksi kertaa. Ovatko väitteet oikein vai väärin?",
            en: "You will hear a conversation twice. Are the statements true or false?",
          },
          situation: "Isä on elektroniikkaliikkeessä ostamassa tablettia tyttärelleen.",
          plays: 2,
          rate: 1.0,
          lines: [
            { speaker: "Myyjä", text: "Hei, löytyikö jotain?" },
            {
              speaker: "Isä",
              text: "Hei. Mä etsin tablettia mun tyttärelle. Hän täyttää ensi viikolla kahdeksan. Mutta mua vähän epäilyttää, onko hän liian nuori omaan laitteeseen.",
            },
            {
              speaker: "Myyjä",
              text: "Se on tosi yleinen kysymys. Monet vanhemmat ottaa käyttöön lapsilukon. Silloin te voitte itse päättää, mitä sovelluksia lapsi saa ladata ja kuinka kauan laitetta saa käyttää päivässä.",
            },
            { speaker: "Isä", text: "Ai, toimiiko se niin, että laite menee kokonaan kiinni, kun aika loppuu?" },
            {
              speaker: "Myyjä",
              text:
                "Ei ihan. Te asetatte vaikka tunnin päivässä, ja kun aika on käytetty, toimii enää ne sovellukset, jotka te ootte erikseen sallinut, esimerkiksi puhelut teille. Ja asetuksia voi muuttaa omasta puhelimesta.",
            },
            { speaker: "Isä", text: "Hyvä. Mitä tää valkoinen maksaa?" },
            {
              speaker: "Myyjä",
              text:
                "Tää on kolmesataaviisikymmentä euroa. Sitten on tää vähän edullisempi malli, kaksisataakymmenen euroa, mutta siinä on vähemmän tallennustilaa. Jos tyttö haluaa ottaa paljon kuvia tai videoita, tila loppuu aika nopeasti.",
            },
            { speaker: "Isä", text: "Hän lähinnä piirtää, ja sitä varten hän toivoo kynää." },
            {
              speaker: "Myyjä",
              text: "Kynä toimii molempien kanssa, mutta se pitää ostaa erikseen. Se maksaa kuusikymmentä euroa. Ja sitten suosittelen suojakuorta. Lapsilla laitteet tippuu aika usein.",
            },
            { speaker: "Isä", text: "Entä jos se kuitenkin hajoaa?" },
            {
              speaker: "Myyjä",
              text: "Takuu ei korvaa pudottamista. Meiltä voi ostaa laiteturvan, joka korvaa myös vahingot. Mutta tarkistakaa ensin teidän kotivakuutus, koska se voi jo kattaa saman.",
            },
            { speaker: "Isä", text: "Hyvä vinkki. Mä otan sen halvemman ja kynän. Ja suojakuoren tietysti." },
          ],
          questions: [
            {
              id: "k14l2q1",
              type: "tf",
              q: "Isä on varma, että hänen tyttärensä on tarpeeksi vanha omaan tablettiin.",
              answer: false,
              explain: "“mua vähän epäilyttää, onko hän liian nuori omaan laitteeseen.”",
            },
            {
              id: "k14l2q2",
              type: "tf",
              q: "Lapsilukon avulla vanhempi voi rajoittaa laitteen päivittäistä käyttöaikaa.",
              answer: true,
              explain: "Parents can decide “kuinka kauan laitetta saa käyttää päivässä”.",
            },
            {
              id: "k14l2q3",
              type: "tf",
              q: "Kun päivän käyttöaika on loppunut, tablettia ei voi käyttää mihinkään.",
              answer: false,
              explain: "“Ei ihan … toimii enää ne sovellukset, jotka te ootte erikseen sallinut, esimerkiksi puhelut teille.”",
            },
            {
              id: "k14l2q4",
              type: "tf",
              q: "Halvemman mallin heikkous on se, että sen kanssa ei voi käyttää kynää.",
              answer: false,
              explain: "The pen works with both; the cheaper model's weakness is less storage space.",
            },
            {
              id: "k14l2q5",
              type: "tf",
              q: "Myyjän mukaan kotivakuutus voi korvata tabletin rikkoutumisen.",
              answer: true,
              explain: "“tarkistakaa ensin teidän kotivakuutus, koska se voi jo kattaa saman.”",
            },
            {
              id: "k14l2q6",
              type: "tf",
              q: "Isä päättää ostaa kalliimman tabletin.",
              answer: false,
              explain: "“Mä otan sen halvemman ja kynän.”",
            },
          ],
        },
        {
          id: "k14l3",
          title: "Tehtävä 3: Puhelu opettajalta",
          instructions: {
            fi: "Kuulet puhelun kaksi kertaa. Lue ensin kysymykset. Vastaa lyhyesti suomeksi.",
            en: "You will hear a phone call twice. Read the questions first. Answer briefly in Finnish.",
          },
          situation: "Luokanopettaja Johanna Lehto soittaa oppilaansa Amirin äidille Fatima Alille.",
          plays: 2,
          rate: 1.0,
          lines: [
            { speaker: "Opettaja", text: "Hei, täällä Johanna Lehto, Amirin luokanopettaja. Sopiiko puhua hetki?" },
            { speaker: "Fatima", text: "Hei. Joo, sopii. Onko jotain sattunut?" },
            {
              speaker: "Opettaja",
              text:
                "Ei mitään vakavaa. Halusin vaan kertoa, että Amir on ollut viime aikoina aamuisin tosi väsynyt. Pari kertaa hän on melkein nukahtanut tunnilla, ja kotitehtäviä on jäänyt tekemättä. " +
                "Ajattelin, että on parempi soittaa kuin kirjoittaa Wilmaan.",
            },
            {
              speaker: "Fatima",
              text:
                "Voi ei. Mä tiedän, että hän pelaa illalla aika myöhään. Me ollaan yritetty sopia, että peli loppuu yhdeksältä, mutta hän pelaa kavereiden kanssa, ja ne pelaa vielä paljon myöhempään.",
            },
            {
              speaker: "Opettaja",
              text:
                "Se on tosi yleistä tässä iässä. Me puhutaan luokassa ensi viikolla unesta ja ruutuajasta. Ja vanhempainillassa voitaisiin sopia yhdessä muiden vanhempien kanssa, " +
                "että pelit loppuu kaikilla samaan aikaan. Silloin kukaan ei jää ulkopuolelle.",
            },
            { speaker: "Fatima", text: "Se olis hyvä. Milloin vanhempainilta on?" },
            {
              speaker: "Opettaja",
              text: "Torstaina kahdeskymmenes päivä kello kuusi. Ei kun anteeksi, kello puoli seitsemän. Koulun ruokalassa.",
            },
            { speaker: "Fatima", text: "Mä yritän päästä. Mun työvuoro loppuu kuudelta. Entä ne kotitehtävät?" },
            {
              speaker: "Opettaja",
              text:
                "Amir voi tehdä rästissä olevat tehtävät läksykerhossa. Se on koululla tiistaisin ja torstaisin heti koulun jälkeen, ja siellä on aina opettaja auttamassa. Kerhoon ei tarvitse ilmoittautua.",
            },
            { speaker: "Fatima", text: "Hyvä. Mä puhun Amirin kanssa tänään illalla. Kiitos, että soititte." },
          ],
          questions: [
            {
              id: "k14l3q1",
              type: "open",
              q: "Miksi opettaja soittaa Fatimalle?",
              hint: "(2 asiaa)",
              accept: [
                "Amir on ollut väsynyt ja kotitehtäviä on jäänyt tekemättä",
                "Amir melkein nukahtaa tunnilla eikä tee läksyjä",
              ],
              keyNote: "Both: Amir has been very tired in the mornings (almost fallen asleep in class) AND homework has been left undone.",
              explain: "“Amir on ollut viime aikoina aamuisin tosi väsynyt … ja kotitehtäviä on jäänyt tekemättä.”",
            },
            {
              id: "k14l3q2",
              type: "open",
              q: "Miksi kotona sovittu sääntö ei ole toiminut?",
              accept: [
                "koska Amir pelaa kavereiden kanssa, jotka pelaavat myöhempään",
                "kaverit pelaavat pidempään kuin yhdeksään",
                "kaverit pelaavat myöhään",
              ],
              keyNote: "Because Amir plays with friends who keep playing much later than nine.",
              explain: "“hän pelaa kavereiden kanssa, ja ne pelaa vielä paljon myöhempään.”",
            },
            {
              id: "k14l3q3",
              type: "open",
              q: "Mihin aikaan vanhempainilta alkaa?",
              accept: ["kello puoli seitsemän", "klo 18.30", "puoli seitsemältä"],
              keyNote: "At half past six (18.30) on Thursday the 20th. Six o'clock is wrong — the teacher corrects herself.",
              explain: "“kello kuusi. Ei kun anteeksi, kello puoli seitsemän.”",
            },
            {
              id: "k14l3q4",
              type: "open",
              q: "Missä ja milloin Amir voi tehdä rästissä olevat tehtävät?",
              accept: [
                "läksykerhossa tiistaisin ja torstaisin koulun jälkeen",
                "koulun läksykerhossa tiistaina ja torstaina",
                "läksykerhossa koulupäivän jälkeen",
              ],
              keyNote: "In the homework club at school on Tuesdays and Thursdays straight after school. No registration needed.",
              explain: "“läksykerhossa. Se on koululla tiistaisin ja torstaisin heti koulun jälkeen.”",
            },
          ],
        },
        {
          id: "k14l4",
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
                "Aikuisten osallistuminen koulutukseen on kasvanut. Tuoreen selvityksen mukaan yli puolet työikäisistä oli vuoden aikana osallistunut johonkin koulutukseen. " +
                "Kasvua oli kaikissa ikäryhmissä, mutta eniten yli viisikymppisten joukossa. Eniten opiskeltiin työn ohessa työnantajan järjestämillä kursseilla.",
            },
            {
              speaker: "Uutistenlukija",
              text:
                "Osallistuminen jakautuu kuitenkin epätasaisesti. Korkeasti koulutetut opiskelevat aikuisena selvästi useammin kuin ne, joilla on vain peruskoulun tai toisen asteen tutkinto. " +
                "Tutkijoiden mukaan syynä on osittain se, että korkeasti koulutettujen työnantajat tarjoavat koulutusta useammin. Lisäksi moni kertoo, että koulu oli nuorena vaikeaa, eikä hän halua palata luokkahuoneeseen.",
            },
            {
              speaker: "Uutistenlukija",
              text:
                "Suosituimpia aiheita olivat tietotekniikka ja kielet. Verkkokurssien osuus on kasvanut nopeasti, ja yhä useampi opiskelee iltaisin kotona. " +
                "Verkko-opiskelun ongelmana pidetään sitä, että kursseja jää helposti kesken. Selvityksen mukaan vain noin joka toinen verkkokurssin aloittanut sai sen suoritettua.",
            },
            {
              speaker: "Uutistenlukija",
              text:
                "Työelämän muutos vauhdittaa opiskelua. Lähes kolmasosa vastaajista kertoi opiskelevansa, koska pelkää oman osaamisensa vanhenevan esimerkiksi tekoälyn yleistyessä. " +
                "Selvityksen tekijät ehdottavat, että lyhyitä, työn ohessa suoritettavia koulutuksia lisättäisiin erityisesti niille, joilla on vähän koulutusta.",
            },
          ],
          questions: [
            {
              id: "k14l4q1",
              type: "mc",
              q: "Mitä selvityksessä havaittiin?",
              options: [
                "Yli puolet työikäisistä oli osallistunut koulutukseen vuoden aikana.",
                "Aikuiset opiskelevat useimmiten omalla vapaa-ajallaan.",
                "Aikuiskoulutukseen osallistuminen on vähentynyt.",
              ],
              answer: 0,
              explain: "“yli puolet työikäisistä oli vuoden aikana osallistunut johonkin koulutukseen.” Most studied alongside work in employer courses.",
            },
            {
              id: "k14l4q2",
              type: "mc",
              q: "Ketkä opiskelevat aikuisena selvästi muita useammin?",
              options: ["ne, joilla on vain peruskoulututkinto", "korkeasti koulutetut", "nuoret aikuiset"],
              answer: 1,
              explain: "“Korkeasti koulutetut opiskelevat aikuisena selvästi useammin.”",
            },
            {
              id: "k14l4q3",
              type: "mc",
              q: "Mikä on yksi syy siihen, että osa aikuisista ei opiskele?",
              options: [
                "Koulutus on heille liian kallista.",
                "Heillä ei ole kotona tietokonetta.",
                "Heillä on huonoja kokemuksia koulusta nuoruudesta.",
              ],
              answer: 2,
              explain: "“moni kertoo, että koulu oli nuorena vaikeaa, eikä hän halua palata luokkahuoneeseen.”",
            },
            {
              id: "k14l4q4",
              type: "mc",
              q: "Mitä verkkokursseista kerrotaan?",
              options: [
                "Ne ovat menettäneet suosiotaan.",
                "Noin puolet aloittajista jättää ne kesken.",
                "Niitä järjestävät pääasiassa työnantajat.",
              ],
              answer: 1,
              explain: "“vain noin joka toinen verkkokurssin aloittanut sai sen suoritettua.” Their share has grown fast.",
            },
            {
              id: "k14l4q5",
              type: "mc",
              q: "Mitä selvityksen tekijät ehdottavat?",
              options: [
                "lisää lyhyitä koulutuksia niille, joilla on vähän koulutusta",
                "verkkokurssien korvaamista lähiopetuksella",
                "että työnantajat maksaisivat kaikki koulutukset",
              ],
              answer: 0,
              explain: "“lyhyitä, työn ohessa suoritettavia koulutuksia lisättäisiin erityisesti niille, joilla on vähän koulutusta.”",
            },
          ],
        },
        {
          id: "k14l5",
          title: "Tehtävä 5: Mainoksia ja tiedotteita",
          instructions: {
            fi: "Kuulet viisi lyhyttä mainosta tai tiedotetta kaksi kertaa. Jokaisesta on yksi väite. Onko väite oikein vai väärin?",
            en: "You will hear five short adverts or announcements twice. There is one statement about each. Is it true or false?",
          },
          situation: "Kuulet radiosta, koulusta ja kaupungin tiedotuskanavilta lyhyitä mainoksia ja tiedotteita.",
          plays: 2,
          rate: 1.0,
          lines: [
            {
              speaker: "Mainos 1",
              text:
                "Kaupunginkirjasto ja eläkeläisyhdistys järjestävät aloittelijoille älypuhelinkurssin. Kurssi kokoontuu neljä kertaa keskiviikkoisin kello kymmenen. " +
                "Kurssi on maksuton, eikä ennakkotietoja tarvita. Lainapuhelimia on rajoitetusti, joten ota mieluiten oma puhelin mukaan.",
            },
            {
              speaker: "Tiedote 2",
              text:
                "Koivuniemen koulun tiedote. Huomenna perjantaina koulun keittiö on suljettu putkiremontin vuoksi. Oppilaat saavat lounaaksi valmiit eväät, jotka tuodaan kouluun. " +
                "Erityisruokavaliot on otettu huomioon. Koulupäivä päättyy normaalisti, ja iltapäiväkerho toimii tavalliseen tapaan.",
            },
            {
              speaker: "Mainos 3",
              text:
                "Lasten koodikerho kokoontuu lauantaisin pääkirjastossa! Kerho on tarkoitettu yhdeksän–kaksitoistavuotiaille, ja se on maksuton. Omaa tietokonetta ei tarvita. " +
                "Ensimmäisellä kerralla huoltajan on oltava mukana, sen jälkeen lapsi voi tulla yksin.",
            },
            {
              speaker: "Tiedote 4",
              text:
                "Avoimen ammattikorkeakoulun kevään verkkokursseille voi ilmoittautua maanantaista alkaen. Kurssit ovat avoimia kaikille pohjakoulutuksesta riippumatta. " +
                "Ilmoittautuminen päättyy, kun kurssi täyttyy, kuitenkin viimeistään tammikuun lopussa.",
            },
            {
              speaker: "Mainos 5",
              text:
                "Osallistu perheen ruudutonta viikkoa -haasteeseen! Ilmoita perheesi mukaan kaupungin nettisivuilla ja täytä viikon ajan päiväkirjaa siitä, mitä teitte ruutujen sijaan. " +
                "Kaikkien päiväkirjan palauttaneiden kesken arvotaan perhelippu kylpylään.",
            },
          ],
          questions: [
            {
              id: "k14l5q1",
              type: "tf",
              q: "Mainos 1: Kurssille on pakko tuoda oma puhelin.",
              answer: false,
              explain: "There are some loan phones; bringing your own is only recommended (“mieluiten”).",
            },
            {
              id: "k14l5q2",
              type: "tf",
              q: "Tiedote 2: Perjantaina oppilaiden pitää tuoda omat eväät kotoa.",
              answer: false,
              explain: "Ready-made packed lunches “tuodaan kouluun” — pupils do not bring their own.",
            },
            {
              id: "k14l5q3",
              type: "tf",
              q: "Mainos 3: Huoltajan pitää osallistua ensimmäiseen kerhokertaan.",
              answer: true,
              explain: "“Ensimmäisellä kerralla huoltajan on oltava mukana.”",
            },
            {
              id: "k14l5q4",
              type: "tf",
              q: "Tiedote 4: Kurssille voi ilmoittautua tammikuun loppuun asti, vaikka se olisi jo täynnä.",
              answer: false,
              explain: "Registration ends “kun kurssi täyttyy, kuitenkin viimeistään tammikuun lopussa”.",
            },
            {
              id: "k14l5q5",
              type: "tf",
              q: "Mainos 5: Arvontaan pääsee vain, jos palauttaa täytetyn päiväkirjan.",
              answer: true,
              explain: "“Kaikkien päiväkirjan palauttaneiden kesken arvotaan perhelippu.”",
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
          id: "k14s1",
          kind: "kertominen",
          title: "Tehtävä 1: Kertominen",
          instructions: {
            fi: "Sinulla on minuutti aikaa valmistautua. Voit tehdä muistiinpanoja. Puhu noin puolitoista minuuttia. Aloita puhuminen vasta, kun kuulet äänimerkin.",
            en: "You have one minute to prepare and may take notes. Speak for about a minute and a half. Start only after the beep.",
          },
          prepSec: 60,
          card: {
            title: "Kerro, mitä olet oppinut aikuisena.",
            questions: [
              "Mitä olet opiskellut tai opetellut kouluvuosien jälkeen?",
              "Missä ja miten opit uusia asioita parhaiten?",
              "Mikä on ollut vaikeaa, ja mikä on auttanut sinua?",
              "Mitä haluaisit vielä oppia, ja miksi?",
            ],
          },
          items: [{ id: "a", spoken: "Kerro, mitä olet oppinut aikuisena. Aloita puhuminen nyt.", speakSec: 90 }],
        },
        {
          id: "k14s2",
          kind: "keskustelu",
          title: "Tehtävä 2: Keskustelu A",
          instructions: {
            fi: "Kuulet keskustelun, jossa puhut vuorotellen toisen henkilön kanssa. Lue tilanne ja ohjeet. Puhu, kun kuulet äänimerkin.",
            en: "You will take turns with another speaker. Read the situation and the cues. Speak after the beep.",
          },
          prepSec: 30,
          card: {
            title:
              "Haluat ilmoittautua kansalaisopiston iltakurssille, jolla opetellaan tietokoneen perustaitoja. Verkossa kurssi näyttää täydeltä. Soitat kansalaisopiston toimistoon.",
            questions: [],
          },
          items: [
            {
              id: "a",
              spoken: "Kansalaisopisto, Tuula puhelimessa. Miten voin auttaa?",
              cue: "[Esittele itsesi ja kerro, miksi soitat.]",
              speakSec: 20,
            },
            {
              id: "b",
              spoken: "Joo, se kurssi on valitettavasti täynnä. Voin kyllä laittaa teidät varasijalle. Saanko kysyä, miksi haluatte juuri tälle kurssille?",
              cue: "[Kerro, miksi tarvitset kurssia.]",
              speakSec: 20,
            },
            {
              id: "c",
              spoken: "Ymmärrän. Meillä on myös samanlainen kurssi lauantaiaamuisin, ja siellä on vielä tilaa. Sopisiko se teille?",
              cue: "[Kerro, sopiiko lauantai, ja perustele.]",
              speakSec: 20,
            },
            {
              id: "d",
              spoken: "Hyvä. Kurssimaksu on kuusikymmentä euroa. Onko teillä kysyttävää maksusta?",
              cue: "[Kysy, voiko maksun maksaa osissa tai saako siitä alennusta.]",
              speakSec: 15,
            },
            {
              id: "e",
              spoken: "Työttömät ja eläkeläiset saavat puolet alennusta. Tuotteko kurssille oman tietokoneen, vai lainaatteko meiltä?",
              cue: "[Kerro, onko sinulla oma tietokone, ja kysy, mitä muuta pitää ottaa mukaan.]",
              speakSec: 20,
            },
            {
              id: "f",
              spoken: "Muuta ei tarvita. Lähetän teille vielä vahvistuksen. Haluatteko sen sähköpostiin vai tekstiviestinä?",
              cue: "[Valitse ja kiitä.]",
              speakSec: 10,
            },
          ],
        },
        {
          id: "k14s3",
          kind: "keskustelu",
          title: "Tehtävä 2: Keskustelu B",
          instructions: {
            fi: "Kuulet keskustelun, jossa puhut vuorotellen toisen henkilön kanssa. Lue tilanne ja ohjeet. Puhu, kun kuulet äänimerkin.",
            en: "You will take turns with another speaker. Read the situation and the cues. Speak after the beep.",
          },
          prepSec: 30,
          card: {
            title: "Iäkäs naapurisi Aune koputtaa ovellesi. Hän on saanut uuden älypuhelimen ja tarvitsee apua sen käyttämisessä. Aune puhuu ensin.",
            questions: [],
          },
          items: [
            {
              id: "a",
              spoken: "Hei, anteeksi että häiritsen. Sain lapsilta uuden puhelimen, mutta en saa siitä mitään selvää. Olisiko sinulla hetki aikaa?",
              cue: "[Vastaa ja kysy, mitä hän haluaisi tehdä puhelimella.]",
              speakSec: 15,
            },
            {
              id: "b",
              spoken: "Haluaisin ainakin lähettää lapsenlapsille kuvia ja soittaa videopuheluja. Ja sitten ne pankkiasiat. Mutta minua pelottaa, että painan jotain väärää ja kaikki rahat katoavat.",
              cue: "[Rauhoittele naapuria ja kerro, mistä voisitte aloittaa.]",
              speakSec: 20,
            },
            {
              id: "c",
              spoken: "No, se kuulostaa hyvältä. Mutta tänään minulla ei ole kauan aikaa, koska menen kolmelta lääkäriin. Milloin sinulle sopisi paremmin?",
              cue: "[Ehdota sopivaa aikaa ja kerro, mitä hänen pitää ottaa mukaan.]",
              speakSec: 20,
            },
            {
              id: "d",
              spoken: "Hyvä. Vielä yksi asia. Sain eilen viestin, jossa pyydettiin pankkitunnuksia, koska tilini on muka suljettu. Pitäisikö minun vastata siihen?",
              cue: "[Neuvo naapuria ja perustele neuvosi.]",
              speakSec: 20,
            },
            {
              id: "e",
              spoken: "Voi että, hyvä kun kysyin. Tiedätkö, onko täällä lähellä jotain kurssia, jossa voisi oppia lisää?",
              cue: "[Kerro, mistä hän voisi saada apua tai opastusta.]",
              speakSec: 20,
            },
            {
              id: "f",
              spoken: "Kiitos ihan hirveästi. Leivon sinulle pullaa, kun tulet.",
              cue: "[Vastaa kohteliaasti ja vahvista vielä, milloin tapaatte.]",
              speakSec: 10,
            },
          ],
        },
        {
          id: "k14s4",
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
              situation: "Olet ystäväsi luona kylässä. Hänen lapsensa pyytää saada pelata puhelimellasi, mutta ystäväsi on kieltänyt häneltä pelaamisen tänään. Mitä sanot lapselle?",
              spoken: "Tilanne 1. Olet ystäväsi luona kylässä. Hänen lapsensa pyytää saada pelata puhelimellasi, mutta ystäväsi on kieltänyt häneltä pelaamisen tänään. Mitä sanot lapselle?",
              prepSec: 20,
              speakSec: 20,
            },
            {
              id: "b",
              situation: "Lapsesi sairastui yöllä, eikä hän pääse kouluun. Et pääse kirjautumaan Wilmaan, joten soitat koulun kansliaan. Mitä sanot?",
              spoken: "Tilanne 2. Lapsesi sairastui yöllä, eikä hän pääse kouluun. Et pääse kirjautumaan Wilmaan, joten soitat koulun kansliaan. Mitä sanot?",
              prepSec: 20,
              speakSec: 30,
            },
            {
              id: "c",
              situation: "Lapsesi kertoo, että koulun ruoka on ollut koko viikon kylmää. Soitat kunnan ruokapalveluihin. Mitä sanot?",
              spoken: "Tilanne 3. Lapsesi kertoo, että koulun ruoka on ollut koko viikon kylmää. Soitat kunnan ruokapalveluihin. Mitä sanot?",
              prepSec: 20,
              speakSec: 30,
            },
            {
              id: "d",
              situation: "Olet ilmoittautunut iltakurssille, mutta et pääse ensimmäiselle kurssikerralle. Soitat opettajalle ja pyydät häneltä materiaalit. Mitä sanot?",
              spoken: "Tilanne 4. Olet ilmoittautunut iltakurssille, mutta et pääse ensimmäiselle kurssikerralle. Soitat opettajalle ja pyydät häneltä materiaalit. Mitä sanot?",
              prepSec: 20,
              speakSec: 30,
            },
            {
              id: "e",
              situation: "Isoäitisi pyytää sinua auttamaan ajan varaamisessa terveyskeskukseen netissä. Sinulla on juuri nyt kiire töihin. Mitä sanot?",
              spoken: "Tilanne 5. Isoäitisi pyytää sinua auttamaan ajan varaamisessa terveyskeskukseen netissä. Sinulla on juuri nyt kiire töihin. Mitä sanot?",
              prepSec: 20,
              speakSec: 30,
            },
          ],
        },
        {
          id: "k14s5",
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
              "A. Lasten ruutuaika: Pitäisikö vanhempien rajoittaa lasten ruutuaikaa tarkasti? Mitä hyötyä ja mitä haittaa älylaitteista on lapsille? Minkä ikäisenä lapsi voi saada oman puhelimen?",
              "B. Aikuiskoulutus: Pitäisikö aikuisten opiskelun olla maksutonta? Kenen pitäisi maksaa aikuisten koulutus – yhteiskunnan, työnantajan vai opiskelijan itse? Miksi kaikki aikuiset eivät halua opiskella?",
            ],
          },
          items: [{ id: "a", spoken: "Kerro mielipiteesi valitsemastasi aiheesta. Aloita puhuminen nyt.", speakSec: 120 }],
        },
      ],
    },
  ],
};
