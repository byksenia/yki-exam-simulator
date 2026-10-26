// Keskitaso 10
export default {
  id: "koe20",
  title: "Keskitaso 10",
  level: "keskitaso",
  description: "AI services, privacy and personal data, strong identification and digital public services, smart homes, social media and young people, repairing vs replacing devices.",
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
          id: "k20r1",
          title: "Tehtävä 1: Uutinen",
          instructions: {
            fi: "Lue uutinen ja vastaa kysymyksiin. Valitse oikea vaihtoehto.",
            en: "Read the news item and answer the questions. Choose the correct option.",
          },
          text: {
            title: "Kaupungin neuvonnassa vastaa nyt tekoäly – ihmisen tavoittaa edelleen",
            body:
              "Koivulan kaupunki on ottanut käyttöön tekoälyyn perustuvan chatbotin, joka vastaa asukkaiden kysymyksiin kaupungin verkkosivuilla ympäri vuorokauden. " +
              "Chatbot osaa neuvoa esimerkiksi jätehuoltoon, päiväkotihakuun ja liikuntapaikkojen varaamiseen liittyvissä asioissa. Se vastaa suomeksi, ruotsiksi ja " +
              "englanniksi sekä yksinkertaisiin kysymyksiin myös ukrainaksi ja somaliksi.\n\n" +
              "Kaupungin digipalvelupäällikkö Henrik Aalto kertoo, että puhelinneuvontaan tuli viime vuonna yli 60 000 puhelua, joista suurin osa koski samoja asioita. " +
              "”Kun chatbot hoitaa rutiinikysymykset, neuvojille jää enemmän aikaa niille asukkaille, jotka tarvitsevat apua monimutkaisemmissa asioissa”, Aalto sanoo. " +
              "Henkilöstöä ei hänen mukaansa vähennetä, vaan neuvojien työ painottuu jatkossa vaativampiin tehtäviin.\n\n" +
              "Chatbotille ei pidä kertoa henkilötietoja, kuten henkilötunnusta tai terveyteen liittyviä asioita. Kaupungin mukaan keskusteluja säilytetään kolme kuukautta " +
              "palvelun kehittämistä varten, mutta niistä poistetaan tunnistettavat tiedot.\n\n" +
              "Vanhusneuvoston puheenjohtaja Eila Rantanen suhtautuu uudistukseen varauksella. ”Moni iäkäs ei käytä tietokonetta lainkaan. Pelkään, että puhelinneuvonnan " +
              "jonot pitenevät, jos siihen ei enää panosteta”, hän sanoo. Rantasta huolestuttaa myös se, osaako tekoäly kertoa, milloin se ei tiedä vastausta.\n\n" +
              "Aallon mukaan chatbot on ohjelmoitu ohjaamaan asiakas ihmisneuvojalle aina, kun se ei ole varma vastauksestaan. Puhelinneuvonta palvelee entiseen tapaan " +
              "arkisin kello 8–16.",
          },
          questions: [
            {
              id: "k20r1q1",
              type: "mc",
              q: "Miksi kaupunki otti chatbotin käyttöön?",
              options: [
                "Kaupunki halusi vähentää neuvonnan henkilöstöä.",
                "Neuvojille haluttiin lisää aikaa vaativampiin asiakastilanteisiin.",
                "Puhelinneuvonnan aukioloaikoja haluttiin lyhentää.",
              ],
              answer: 1,
              explain:
                "“neuvojille jää enemmän aikaa niille asukkaille, jotka tarvitsevat apua monimutkaisemmissa asioissa.” Staff will not be cut, and phone hours stay the same.",
            },
            {
              id: "k20r1q2",
              type: "mc",
              q: "Mitä chatbot-keskusteluille tapahtuu?",
              options: [
                "Ne poistetaan heti keskustelun päätyttyä.",
                "Ne tallennetaan asukkaan omiin tietoihin kaupungin järjestelmään.",
                "Niitä säilytetään jonkin aikaa ilman tunnistettavia tietoja.",
              ],
              answer: 2,
              explain: "“keskusteluja säilytetään kolme kuukautta … mutta niistä poistetaan tunnistettavat tiedot.”",
            },
            {
              id: "k20r1q3",
              type: "mc",
              q: "Mistä Eila Rantanen on huolissaan?",
              options: [
                "Iäkkäiden voi olla aiempaa vaikeampaa saada apua puhelimitse.",
                "Chatbot kerää asukkaista liikaa henkilötietoja.",
                "Chatbot ei palvele kaikilla kaupungin kielillä.",
              ],
              answer: 0,
              explain:
                "Many elderly people don't use computers: “Pelkään, että puhelinneuvonnan jonot pitenevät.” She also wonders whether the AI knows when it does not know — not about data collection.",
            },
            {
              id: "k20r1q4",
              type: "mc",
              q: "Mitä chatbot tekee, jos se ei ole varma vastauksestaan?",
              options: [
                "Se pyytää asukasta soittamaan neuvontaan arkisin.",
                "Se ohjaa asukkaan ihmisneuvojalle.",
                "Se ilmoittaa, ettei asiaa voi hoitaa verkossa.",
              ],
              answer: 1,
              explain: "“chatbot on ohjelmoitu ohjaamaan asiakas ihmisneuvojalle aina, kun se ei ole varma vastauksestaan.”",
            },
          ],
        },
        {
          id: "k20r2",
          title: "Tehtävä 2: Kuluttaja-artikkeli",
          instructions: {
            fi: "Lue artikkeli. Ovatko väitteet oikein vai väärin?",
            en: "Read the article. Are the statements true (oikein) or false (väärin)?",
          },
          text: {
            title: "Älykoti helpottaa arkea – mutta kuka muu kuuntelee?",
            body:
              "Älykaiuttimet, robotti-imurit, älylukot ja verkkoon kytketyt valvontakamerat ovat yleistyneet suomalaisissa kodeissa nopeasti. Kyselyjen mukaan jo noin joka kolmannessa kotitaloudessa on ainakin yksi älykodin laite. Niiden avulla voi esimerkiksi " +
              "säätää lämmitystä etänä, nähdä puhelimesta, kuka soittaa ovikelloa, tai sammuttaa valot nousematta sängystä. Laitteiden helppous on kuitenkin vain " +
              "asian toinen puoli. Jokainen verkkoon yhdistetty laite kerää tietoa, ja osa tiedoista päätyy valmistajan palvelimille, usein ulkomaille.\n\n" +
              "Tietoturva-asiantuntija Jari Koskinen muistuttaa, ettei moni ostaja tiedä, mitä tietoja laite kerää. ”Robotti-imuri voi piirtää tarkan kartan kodin " +
              "pohjapiirroksesta, ja älykaiutin tallentaa puhekomennot. Tiedot eivät sinänsä ole vaarallisia, mutta niitä voidaan käyttää esimerkiksi mainonnan " +
              "kohdentamiseen”, Koskinen sanoo. Hänen mukaansa laitteen tietosuojaselosteeseen kannattaa tutustua ennen ostopäätöstä eikä vasta sen jälkeen, kun " +
              "laite on jo kytketty verkkoon.\n\n" +
              "Tärkein yksittäinen asia on salasana. Monet laitteet toimitetaan oletussalasanalla, joka voi olla kaikissa saman mallin laitteissa sama. Jos salasanaa " +
              "ei vaihda, ulkopuolinen voi päästä laitteeseen käsiksi verkon kautta. Erityisen tärkeää tämä on valvontakameroissa, joiden kuvaa kukaan tuskin haluaa " +
              "vieraiden katsottavaksi. Myös kodin langattoman verkon salasana kannattaa vaihtaa vahvaksi. Koskinen suosittelee lisäksi " +
              "kytkemään älylaitteet reitittimen vierasverkkoon, jos se on mahdollista. Silloin murto yhteen laitteeseen ei avaa tietä esimerkiksi tietokoneelle, " +
              "jolla hoidetaan pankkiasioita.\n\n" +
              "Toinen asia on päivitykset. Valmistajat korjaavat ohjelmistojen tietoturva-aukkoja päivityksillä, mutta vain niin kauan kuin ne tukevat laitetta. " +
              "Halvimpien laitteiden tuki voi loppua jo parin vuoden kuluttua, vaikka laite itse toimisi vielä pitkään. Päivittämätön laite on kuin talo, jonka ovi on jätetty raolleen. Koskinen neuvoo valitsemaan tunnetun valmistajan, " +
              "joka kertoo selvästi, kuinka kauan laitetta päivitetään. Automaattiset päivitykset kannattaa pitää päällä.\n\n" +
              "Huolellisuutta vaatii myös käytetyn laitteen ostaminen tai myyminen. Ennen myyntiä laite on palautettava tehdasasetuksiin ja poistettava omalta " +
              "käyttäjätililtä. Muuten edellinen omistaja voi nähdä esimerkiksi älylukon käyttötiedot vielä myynnin jälkeenkin – ja uusi omistaja taas ei välttämättä " +
              "saa laitetta lainkaan käyttöönsä. Käytettyä laitetta ostaessa kannattaa siksi varmistaa, että myyjä on tehnyt nämä toimet.\n\n" +
              "Koskinen ei kuitenkaan kehota luopumaan älylaitteista. ”Niistä on monelle aitoa hyötyä, esimerkiksi yksin asuville ikääntyneille, joiden omaiset voivat " +
              "seurata, että kaikki on hyvin. Kyse on siitä, että käyttäjä päättää itse, mitä tietoja hän jakaa”, hän sanoo. Useimmista laitteista voi esimerkiksi " +
              "kytkeä mikrofonin tai kameran pois päältä silloin, kun niitä ei tarvita.",
          },
          questions: [
            {
              id: "k20r2q1",
              type: "tf",
              q: "Älylaitteiden keräämät tiedot jäävät aina käyttäjän omaan kotiverkkoon.",
              answer: false,
              explain: "“osa tiedoista päätyy valmistajan palvelimille, usein ulkomaille.”",
            },
            {
              id: "k20r2q2",
              type: "tf",
              q: "Koskisen mukaan laitteiden keräämiä tietoja voidaan käyttää mainontaan.",
              answer: true,
              explain: "“niitä voidaan käyttää esimerkiksi mainonnan kohdentamiseen.”",
            },
            {
              id: "k20r2q3",
              type: "tf",
              q: "Tietosuojaselosteeseen ehtii hyvin tutustua sen jälkeen, kun laite on otettu käyttöön.",
              answer: false,
              explain: "Read it “ennen ostopäätöstä eikä vasta sen jälkeen, kun laite on jo kytketty verkkoon”.",
            },
            {
              id: "k20r2q4",
              type: "tf",
              q: "Saman mallin laitteissa voi olla valmiina sama salasana.",
              answer: true,
              explain: "“oletussalasanalla, joka voi olla kaikissa saman mallin laitteissa sama.”",
            },
            {
              id: "k20r2q5",
              type: "tf",
              q: "Valmistajat päivittävät laitteitaan niin kauan kuin laitteet ovat käytössä.",
              answer: false,
              explain: "Only as long as they support the device; cheap devices may lose support after a couple of years “vaikka laite itse toimisi vielä pitkään”.",
            },
            {
              id: "k20r2q6",
              type: "tf",
              q: "Jos älylukon myy poistamatta sitä omalta käyttäjätililtään, voi nähdä sen käyttötietoja vielä myynnin jälkeen.",
              answer: true,
              explain: "“Muuten edellinen omistaja voi nähdä esimerkiksi älylukon käyttötiedot vielä myynnin jälkeenkin.”",
            },
            {
              id: "k20r2q7",
              type: "tf",
              q: "Koskisen mielestä älylaitteiden riskit ovat niin suuret, ettei niitä kannata hankkia.",
              answer: false,
              explain: "“Koskinen ei kuitenkaan kehota luopumaan älylaitteista. Niistä on monelle aitoa hyötyä.”",
            },
          ],
        },
        {
          id: "k20r3",
          title: "Tehtävä 3: Tiedote",
          instructions: {
            fi: "Lue tiedote ja vastaa kysymyksiin suomeksi. Vastaa lyhyesti.",
            en: "Read the notice and answer the questions in Finnish. Answer briefly.",
          },
          text: {
            title: "Pankin tiedote: paperinen tunnuslukulista poistuu käytöstä 1.6.",
            body:
              "Paperinen tunnuslukulista poistuu käytöstä kesäkuun alussa. Sen jälkeen verkkopankkiin ja muihin sähköisiin palveluihin, kuten Kelan ja Verohallinnon " +
              "asiointipalveluihin, tunnistaudutaan pankin mobiilisovelluksella. Sovelluksen voi ottaa käyttöön tunnistautumalla kerran nykyisillä tunnuksilla tai " +
              "käymällä konttorissa henkilöllisyystodistuksen kanssa.\n\n" +
              "Jos sinulla ei ole älypuhelinta tai et halua käyttää sovellusta, voit tilata tunnuslukulaitteen. Se on pieni paristokäyttöinen laite, joka näyttää " +
              "kertakäyttöisen tunnusluvun. Laite maksaa 15 euroa, mutta yli 75-vuotiaille ja asioinnissa tukea tarvitseville se on maksuton. Laitteen voi tilata verkkopankista, puhelimitse tai konttorista, ja se toimitetaan " +
              "postitse noin viikossa. Tilaa laite viimeistään 15.5., jotta ehdit saada sen ennen muutosta. Jos et ehdi tilata sitä ajoissa, voit asioida konttorissa.\n\n" +
              "Muista: pankki ei koskaan pyydä tunnuksiasi tekstiviestillä, sähköpostilla eikä puhelimitse. Älä anna tunnuksiasi kenellekään, et edes läheisellesi. " +
              "Jos tarvitset apua asioiden hoitamisessa, voit antaa toiselle henkilölle Suomi.fi-valtuuden, jolla hän voi asioida puolestasi omilla tunnuksillaan.\n\n" +
              "Jos epäilet, että tunnuksesi ovat joutuneet vääriin käsiin, soita heti pankin sulkupalveluun, joka palvelee ympäri vuorokauden. Sulkeminen on maksutonta.",
          },
          questions: [
            {
              id: "k20r3q1",
              type: "open",
              q: "Miten mobiilisovelluksen voi ottaa käyttöön?",
              hint: "(2 tapaa)",
              accept: [
                "tunnistautumalla kerran nykyisillä tunnuksilla tai käymällä konttorissa",
                "vanhoilla tunnuksilla tai pankin konttorissa henkilökortin kanssa",
                "nykyisillä tunnuksilla, konttorissa",
              ],
              keyNote: "Both: by identifying once with the current codes AND by visiting a branch (with ID).",
              explain: "“tunnistautumalla kerran nykyisillä tunnuksilla tai käymällä konttorissa henkilöllisyystodistuksen kanssa.”",
            },
            {
              id: "k20r3q2",
              type: "open",
              q: "Ketkä saavat tunnuslukulaitteen ilmaiseksi?",
              hint: "(2 ryhmää)",
              accept: [
                "yli 75-vuotiaat ja asioinnissa tukea tarvitsevat",
                "yli 75-vuotiaat ja ne, jotka tarvitsevat apua asioinnissa",
                "vanhukset yli 75 ja tukea tarvitsevat",
              ],
              keyNote: "Both: people over 75 AND those who need support with (digital) transactions.",
              explain: "“yli 75-vuotiaille ja asioinnissa tukea tarvitseville se on maksuton.”",
            },
            {
              id: "k20r3q3",
              type: "open",
              q: "Miten voit järjestää asian, jos haluat, että aikuinen lapsesi hoitaa pankki- ja Kela-asioitasi?",
              accept: [
                "antamalla hänelle Suomi.fi-valtuuden",
                "Suomi.fi-valtuudella, jolloin hän käyttää omia tunnuksiaan",
                "valtuuttamalla hänet, ei antamalla omia tunnuksia",
              ],
              keyNote: "Give him/her a Suomi.fi authorisation so he/she can act with his/her own codes. Giving your own codes is explicitly wrong.",
              explain: "“voit antaa toiselle henkilölle Suomi.fi-valtuuden, jolla hän voi asioida puolestasi omilla tunnuksillaan.”",
            },
            {
              id: "k20r3q4",
              type: "open",
              q: "Mitä pitää tehdä, jos epäilee, että joku muu on saanut tunnukset?",
              accept: [
                "soittaa heti pankin sulkupalveluun",
                "soittaa sulkupalveluun ja sulkea tunnukset",
                "ilmoittaa pankin sulkupalveluun",
              ],
              keyNote: "Call the bank's blocking service (sulkupalvelu) immediately — it is open 24/7.",
              explain: "“soita heti pankin sulkupalveluun, joka palvelee ympäri vuorokauden.”",
            },
          ],
        },
        {
          id: "k20r4",
          title: "Tehtävä 4: Kolumni",
          instructions: {
            fi: "Lue kolumni ja vastaa kysymyksiin. Valitse oikea vaihtoehto.",
            en: "Read the column and answer the questions. Choose the correct option.",
          },
          text: {
            title: "Ruutuaika ei ratkea kiellolla – Hanna Virtanen",
            body:
              "Viime keväänä tein jotain, mitä olin luvannut itselleni, etten koskaan tekisi: otin 13-vuotiaan tyttäreni puhelimen pois. Taustalla oli kuukausien kierre. " +
              "Olimme puhuneet asiasta monta kertaa, mutta mikään ei muuttunut. Hän valvoi öisin, väsyi koulussa ja muuttui yhä hiljaisemmaksi. Kun eräänä iltana näin hänen itkevän sängyssä puhelin kädessä, päätin, että nyt riittää.\n\n" +
              "Ensimmäinen viikko oli kamala. Tyttäreni ei puhunut minulle, ja minusta tuntui, että rankaisin häntä jostain, mikä ei ollut hänen syytään. Kaikki hänen " +
              "ystävänsä olivat sosiaalisessa mediassa, ja ilman puhelinta hän jäi ulkopuolelle niin yhteisistä suunnitelmista kuin kavereiden vitseistäkin. " +
              "Toisella viikolla hän kuitenkin alkoi nukkua paremmin. Kolmannella hän kaivoi esiin vanhat piirustusvälineensä.\n\n" +
              "Moni ystäväni on kysynyt, pitäisikö kaikkien vanhempien toimia samoin. Vastaukseni on: ei. Puhelimen poistaminen oli hätäjarru, ei ratkaisu. Kielto vain siirtää ongelmaa, sillä jossain vaiheessa nuoren on opittava käyttämään puhelinta itse. " +
              "Sosiaalisessa mediassa ei ole pelkkää kiusaamista ja ulkonäköpaineita. Nuori voi löytää sieltä ihmisiä, joilla on samat kiinnostuksen kohteet, ja tukea, " +
              "jota omalta paikkakunnalta ei löydy. Tutkimusten mukaan haitat kasautuvat erityisesti niille nuorille, joilla on jo muutenkin vaikeaa.\n\n" +
              "Ongelma ei mielestäni ole puhelin vaan se, että lapsi jätetään sen kanssa yksin. Sovellukset on suunniteltu niin, että niistä on vaikea irrottautua, sillä niiden ansaintalogiikka perustuu siihen, että käyttäjä viettää ruudun ääressä mahdollisimman paljon aikaa. " +
              "Se on vaikeaa aikuisellekin – myönnän, että itse selaan uutisia iltaisin aivan liian pitkään. On kohtuutonta odottaa, että 13-vuotias osaisi säädellä " +
              "käyttöään paremmin kuin me.\n\n" +
              "Kuukauden kuluttua annoimme puhelimen takaisin, mutta sovimme yhdessä säännöt. Puhelimet ovat yöt keittiössä, myös minun puhelimeni. Ruokapöydässä " +
              "puhelimia ei käytetä. Lisäksi tyttäreni näyttää minulle silloin tällöin, mitä hän seuraa, ja minä yritän kuunnella arvostelematta. Kaikki ei suju " +
              "täydellisesti, mutta riitoja on vähemmän, ja tyttäreni piirtää yhä. Hän on jopa liittynyt verkossa piirtäjien " +
              "yhteisöön, jossa hän saa töistään palautetta – siis juuri sitä, mitä sosiaalinen media parhaimmillaan voi olla.\n\n" +
              "Moni vanhempi toivoo, että joku muu ratkaisisi ongelman: koulu, valtio tai sovellusyhtiöt. Kouluissa puhelinten käyttöä on nyt rajoitettu lailla, ja se on mielestäni oikea suunta. Koulu ei kuitenkaan voi hoitaa sitä, mitä kotona tapahtuu " +
              "kello kymmenen jälkeen illalla. Siihen tarvitaan vanhempia, jotka ovat läsnä – ja jotka ovat valmiita muuttamaan myös omia tapojaan.",
          },
          questions: [
            {
              id: "k20r4q1",
              type: "mc",
              q: "Miksi kirjoittaja otti tyttärensä puhelimen pois?",
              options: [
                "Tytär oli rikkonut perheen yhteisiä sääntöjä.",
                "Hän oli huolissaan tyttärensä unesta ja mielialasta.",
                "Koulu oli kieltänyt oppilaita käyttämästä puhelimia.",
              ],
              answer: 1,
              explain: "The daughter stayed up at night, was tired and quiet, and cried in bed with the phone. The family rules were agreed only afterwards.",
            },
            {
              id: "k20r4q2",
              type: "mc",
              q: "Miltä kirjoittajasta tuntui ensimmäisellä viikolla?",
              options: [
                "Hän oli varma, että ratkaisu oli oikea.",
                "Hän oli helpottunut, koska tytär alkoi nukkua paremmin.",
                "Hänestä tuntui, että hän rankaisi tytärtään epäreilusti.",
              ],
              answer: 2,
              explain: "“minusta tuntui, että rankaisin häntä jostain, mikä ei ollut hänen syytään.” Better sleep came only in the second week.",
            },
            {
              id: "k20r4q3",
              type: "mc",
              q: "Mitä kirjoittaja ajattelee sosiaalisesta mediasta?",
              options: [
                "Siinä on sekä vaaroja että nuorille tärkeitä mahdollisuuksia.",
                "Siitä on nuorille enemmän haittaa kuin hyötyä.",
                "Se on vaarallinen vain niille nuorille, joilla on muutenkin vaikeaa.",
              ],
              answer: 0,
              explain:
                "“Sosiaalisessa mediassa ei ole pelkkää kiusaamista” — young people can find like-minded people and support. Research says harms accumulate “erityisesti”, not only, for those who already struggle.",
            },
            {
              id: "k20r4q4",
              type: "mc",
              q: "Miksi kirjoittaja kertoo omasta uutisten selaamisestaan?",
              options: [
                "kertoakseen, että on itse lopettanut iltaisin selaamisen",
                "perustellakseen, ettei nuoren voi odottaa hallitsevan käyttöään yksin",
                "osoittaakseen, että uutissovellukset koukuttavat enemmän kuin some",
              ],
              answer: 1,
              explain: "If even adults find it hard, “On kohtuutonta odottaa, että 13-vuotias osaisi säädellä käyttöään paremmin kuin me.”",
            },
            {
              id: "k20r4q5",
              type: "mc",
              q: "Mikä seuraavista kuuluu perheen uusiin sääntöihin?",
              options: [
                "Tyttären puhelin on yöt keittiössä, mutta äidin puhelin ei.",
                "Äiti tarkistaa tyttären puhelimen säännöllisesti.",
                "Kaikkien perheenjäsenten puhelimet ovat yöllä keittiössä.",
              ],
              answer: 2,
              explain: "“Puhelimet ovat yöt keittiössä, myös minun puhelimeni.” The daughter shows her mother things only “silloin tällöin” — it is not a check.",
            },
            {
              id: "k20r4q6",
              type: "mc",
              q: "Mikä on kolumnin pääajatus?",
              options: [
                "Nuoria pitää tukea puhelimen käytössä yhteisillä säännöillä ja aikuisten esimerkillä.",
                "Nuorten puhelimen käyttöä pitäisi rajoittaa lailla myös vapaa-ajalla.",
                "Puhelimen poistaminen on paras keino auttaa väsynyttä nuorta.",
              ],
              answer: 0,
              explain:
                "The problem is leaving the child alone with the phone; the solution is rules agreed together and parents “jotka ovat valmiita muuttamaan myös omia tapojaan”. Taking the phone away was “hätäjarru, ei ratkaisu”.",
            },
          ],
        },
        {
          id: "k20r5",
          title: "Tehtävä 5: Mielipidekirjoitus",
          instructions: {
            fi: "Lue mielipidekirjoitus. Ovatko väitteet oikein vai väärin?",
            en: "Read the letter to the editor. Are the statements true (oikein) or false (väärin)?",
          },
          text: {
            title: "Miksi korjaaminen on tehty näin vaikeaksi?",
            body:
              "Kahdeksan vuotta vanha astianpesukoneemme lakkasi viime kuussa pumppaamasta vettä. Kone oli muuten hyvässä kunnossa, joten soitin huoltoliikkeeseen. " +
              "Asentaja kävi, totesi vian ja kertoi, että uusi pumppu maksaa osineen ja töineen noin 280 euroa. Uusi vastaava kone olisi maksanut asennettuna vähän " +
              "yli 500 euroa.\n\n" +
              "Päätin korjauttaa koneen, vaikka moni tuttavani piti sitä hölmönä. Halusin toimia ympäristön kannalta järkevästi, eikä toimivaa konetta mielestäni " +
              "kuulu viedä kaatopaikalle yhden osan takia. Osaa jouduttiin kuitenkin odottamaan viisi viikkoa, koska sitä ei ollut Suomessa varastossa. Koko sen " +
              "ajan tiskasimme käsin.\n\n" +
              "Kokemus sai minut miettimään, miksi korjaaminen on tehty niin hankalaksi. Valmistajat suunnittelevat laitteita, joiden kuori on liimattu kiinni ja joiden " +
              "osia saa vain valtuutetuilta huoltoliikkeiltä. Osien hinnat ovat usein niin korkeat, että kuluttaja päätyy ostamaan uuden, vaikka ei haluaisi.\n\n" +
              "EU:ssa on hyväksytty niin sanottu korjausoikeus, jonka tarkoituksena on velvoittaa valmistajat tarjoamaan varaosia kohtuulliseen hintaan useiden vuosien " +
              "ajan. Se on hyvä alku, mutta ei mielestäni riitä. Ehdotan, että kodinkoneiden korjauksista voisi saada verovähennystä samaan tapaan kuin muista " +
              "kotiin ostetuista palveluista. Silloin korjaaminen kannattaisi useammin myös taloudellisesti.\n\n" +
              "Pumppu toimii nyt hyvin, ja kone pesee taas astiat. Ensi kerralla toivon, ettei korjaaminen vaadi yhtä paljon sitkeyttä.\n\n" +
              "Pekka Nyström, Tampere",
          },
          questions: [
            {
              id: "k20r5q1",
              type: "tf",
              q: "Uuden koneen ostaminen olisi tullut halvemmaksi kuin korjaus.",
              answer: false,
              explain: "Repair about 280 €, a new machine “vähän yli 500 euroa”.",
            },
            {
              id: "k20r5q2",
              type: "tf",
              q: "Kirjoittajan tuttavien mielestä korjauttaminen ei ollut järkevää.",
              answer: true,
              explain: "“moni tuttavani piti sitä hölmönä.”",
            },
            {
              id: "k20r5q3",
              type: "tf",
              q: "Korjaus viivästyi, koska asentajalla ei ollut aikaa.",
              answer: false,
              explain: "The part had to be waited for five weeks “koska sitä ei ollut Suomessa varastossa”.",
            },
            {
              id: "k20r5q4",
              type: "tf",
              q: "Kirjoittajan mukaan valmistajat vaikeuttavat korjaamista sekä laitteiden rakenteella että varaosien saatavuudella.",
              answer: true,
              explain: "Casings are glued shut and parts are available only from authorised service shops, at high prices.",
            },
            {
              id: "k20r5q5",
              type: "tf",
              q: "Kirjoittajan mielestä EU:n korjausoikeus ratkaisee ongelman riittävästi.",
              answer: false,
              explain: "“Se on hyvä alku, mutta ei mielestäni riitä.”",
            },
            {
              id: "k20r5q6",
              type: "tf",
              q: "Kirjoittaja ehdottaa, että kodinkoneiden korjauksista voisi saada verovähennystä.",
              answer: true,
              explain: "“Ehdotan, että kodinkoneiden korjauksista voisi saada verovähennystä.”",
            },
          ],
        },
        {
          id: "k20r6",
          title: "Tehtävä 6: Ohje",
          instructions: {
            fi: "Lue ohje ja vastaa kysymyksiin suomeksi. Vastaa lyhyesti.",
            en: "Read the instructions and answer the questions in Finnish. Answer briefly.",
          },
          text: {
            title: "Ennen kuin myyt tai kierrätät vanhan puhelimesi",
            body:
              "Puhelimessa on paljon henkilökohtaista tietoa: kuvia, viestejä, salasanoja ja pankkisovelluksia. Siksi tiedot on poistettava huolellisesti ennen kuin " +
              "puhelin vaihtaa omistajaa.\n\n" +
              "1. Varmuuskopioi tärkeät tiedot, kuten kuvat ja yhteystiedot, pilvipalveluun tai tietokoneelle. Tarkista, että varmuuskopiointi on onnistunut, ennen kuin jatkat.\n" +
              "2. Jos käytät kaksivaiheista tunnistautumista, siirrä se ensin uuteen puhelimeen. Muuten et ehkä pääse enää kirjautumaan omille tileillesi.\n" +
              "3. Kirjaudu ulos kaikista sovelluksista ja poista puhelin pankki- ja tunnistussovelluksen asetuksista.\n" +
              "4. Poista puhelin valmistajan käyttäjätililtä. Muuten uusi omistaja ei voi ottaa puhelinta käyttöön, koska laite on lukittu edelliselle omistajalle.\n" +
              "5. Palauta puhelin tehdasasetuksiin. Pelkkä kuvien ja viestien poistaminen ei riitä.\n" +
              "6. Poista SIM-kortti ja mahdollinen muistikortti.\n\n" +
              "Jos puhelin on niin rikki, ettei se enää käynnisty, et voi tyhjentää sitä itse. Vie se silloin elektroniikkaliikkeeseen, jossa tiedot tuhotaan turvallisesti. " +
              "Älä heitä vanhaa puhelinta sekajätteeseen, sillä siinä on arvokkaita metalleja, jotka voidaan käyttää uudelleen. Monet kaupat myös ostavat " +
              "toimivia käytettyjä puhelimia ja hyvittävät niiden arvon uuden laitteen hinnasta.",
          },
          questions: [
            {
              id: "k20r6q1",
              type: "open",
              q: "Miksi kaksivaiheinen tunnistautuminen pitää siirtää uuteen puhelimeen ennen vanhan tyhjentämistä?",
              accept: [
                "koska muuten ei ehkä pääse enää kirjautumaan omille tileilleen",
                "jotta pääsee edelleen omille tileilleen",
                "muuten ei pääse kirjautumaan palveluihin",
              ],
              keyNote: "Otherwise you may no longer be able to log in to your own accounts.",
              explain: "“Muuten et ehkä pääse enää kirjautumaan omille tileillesi.”",
            },
            {
              id: "k20r6q2",
              type: "open",
              q: "Mitä seuraa, jos puhelinta ei poisteta valmistajan käyttäjätililtä?",
              accept: [
                "uusi omistaja ei voi ottaa puhelinta käyttöön, koska se on lukittu edelliselle omistajalle",
                "puhelin on lukittu, eikä ostaja pysty käyttämään sitä",
                "uusi omistaja ei saa puhelinta käyttöön",
              ],
              keyNote: "The new owner cannot start using the phone because it remains locked to the previous owner.",
              explain: "“Muuten uusi omistaja ei voi ottaa puhelinta käyttöön, koska laite on lukittu edelliselle omistajalle.”",
            },
            {
              id: "k20r6q3",
              type: "open",
              q: "Mitä pitää tehdä puhelimelle, joka ei enää käynnisty?",
              accept: [
                "viedä se elektroniikkaliikkeeseen, jossa tiedot tuhotaan turvallisesti",
                "viedä elektroniikkaliikkeeseen eikä sekajätteeseen",
                "viedä kauppaan tietojen tuhoamista varten",
              ],
              keyNote: "Take it to an electronics shop where the data is destroyed safely (not into mixed waste).",
              explain: "“Vie se silloin elektroniikkaliikkeeseen, jossa tiedot tuhotaan turvallisesti.”",
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
          id: "k20w1",
          title: "Tehtävä 1: Viesti huoltopalveluun",
          instructions: { fi: "Kirjoita viesti. Kirjoita noin 80–150 sanaa.", en: "Write a message of about 80–150 words." },
          prompt:
            "Ostit kaksi ja puoli vuotta sitten kannettavan tietokoneen. Nyt sen näyttö välkkyy ja akku tyhjenee tunnissa. Takuu on päättynyt, mutta haluaisit " +
            "mieluummin korjauttaa koneen kuin ostaa uuden. Kirjoita sähköposti valmistajan huoltopalveluun Datakone Oy:hyn.",
          bullets: [
            "Kerro, mikä laite sinulla on ja milloin ostit sen.",
            "Kuvaile vikoja ja kerro, milloin ne alkoivat.",
            "Kerro, miksi haluat korjauttaa laitteen etkä ostaa uutta.",
            "Kysy korjauksen hinnasta ja kestosta.",
            "Kysy, miten tietojesi turvallisuudesta huolehditaan korjauksen aikana.",
            "Kerro lisäksi ainakin kaksi muuta asiaa.",
            "Muista aloitus ja lopetus.",
          ],
          promptEn:
            "Two and a half years ago you bought a laptop. Now the screen flickers and the battery dies in an hour. The warranty has ended, but you would rather have it repaired than buy a new one. Email the manufacturer's service (Datakone Oy): say which device you have and when you bought it, describe the faults and when they started, explain why you want a repair rather than a new device, ask about the price and duration, ask how your data is kept safe during the repair, and add at least two more points of your own.",
          register: "formal email to a company: Hyvä vastaanottaja / Hei … Ystävällisin terveisin + full name and contact details; polite conditional (haluaisin tietää, olisiko mahdollista), past tense for the faults",
          minWords: 80,
          maxWords: 150,
        },
        {
          id: "k20w2",
          title: "Tehtävä 2: Viesti ystävälle",
          instructions: { fi: "Kirjoita viesti. Kirjoita noin 60–120 sanaa.", en: "Write a message of about 60–120 words." },
          prompt:
            "Ystäväsi Katja kertoi, että hänen 70-vuotias isänsä haluaisi oppia käyttämään verkkopankkia ja Kelan verkkopalveluja. Sinä autoit viime kuussa " +
            "naapuriasi samanlaisessa asiassa. Kirjoita Katjalle viesti.",
          bullets: [
            "Kerro, miten autoit naapuriasi ja miten se sujui.",
            "Kerro, mikä oli vaikeinta.",
            "Anna Katjalle ainakin yksi neuvo.",
            "Ehdota, miten voisit itse auttaa.",
            "Muista aloitus ja lopetus.",
          ],
          promptEn:
            "Your friend Katja said her 70-year-old father wants to learn to use online banking and Kela's online services. Last month you helped your neighbour with a similar thing. Write to Katja: tell how you helped your neighbour and how it went, what was hardest, give at least one piece of advice, and suggest how you could help.",
          register: "informal message to a friend: Moi Katja! / Hei! … Terkkuja / Halauksin + first name; past tense narration, imperative or conditional for advice, colloquial tone allowed",
          minWords: 60,
          maxWords: 120,
        },
        {
          id: "k20w3",
          title: "Tehtävä 3: Mielipideteksti",
          instructions: { fi: "Kirjoita mielipideteksti. Kirjoita noin 100–180 sanaa.", en: "Write an opinion text of about 100–180 words." },
          prompt:
            "Valtakunnallisen sanomalehden verkkosivuilla keskustellaan teknologiasta ja arjesta. Valitse aihe A tai B ja kirjoita mielipidekirjoitus.",
          bullets: [
            "A. On ehdotettu, että alle 15-vuotiaiden pääsy sosiaalisen median palveluihin kiellettäisiin lailla.",
            "B. Tekoälyä käytetään yhä enemmän tekstien ja tehtävien tekemiseen. Pitäisikö tekoälyn käyttö sallia koulussa?",
            "Kerro, mistä on kyse ja mitä mieltä olet asiasta. Perustele mielipiteesi ainakin kolmella tavalla.",
          ],
          promptEn:
            "A national newspaper's website is discussing technology and everyday life. Choose A (a legal ban on social media for under-15s) or B (should the use of AI be allowed at school?). Say what the issue is and what you think, and justify your opinion in at least three ways.",
          register: "opinion text for a newspaper website: neutral written style, a clear opening statement, linked arguments (ensinnäkin, lisäksi, toisaalta, siksi), a conclusion; no greeting needed, may end with name/signature",
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
        "Tässä osakokeessa kuuntelet erilaisia puhuttuja tekstejä: haastattelun, keskustelun liikkeessä, puhelun, radiouutisen sekä lyhyitä mainoksia ja tiedotteita. Osakokeessa on viisi tehtävää. Ennen jokaista tekstiä sinulla on aikaa lukea kysymykset. Kuulet jokaisen tekstin kaksi kertaa. Pitkät tekstit kuulet toisella kerralla osissa, ja osien välissä on aikaa vastata. Äänite etenee automaattisesti, etkä voi pysäyttää sitä. Vastaa avoimiin kysymyksiin suomeksi ja lyhyesti.",
      aika: "Osakoe kestää noin 40 minuuttia.",
      tasks: [
        {
          id: "k20l1",
          title: "Tehtävä 1: Haastattelu",
          instructions: {
            fi: "Kuulet haastattelun kaksi kertaa. Lue ensin kysymykset. Valitse oikea vaihtoehto.",
            en: "You will hear an interview twice. Read the questions first. Choose the correct option.",
          },
          situation: "Paikallisradiossa haastatellaan Tapio Leinosta, joka on vapaaehtoisena mukana kirjaston korjauskahvilassa.",
          plays: 2,
          rate: 1.0,
          lines: [
            { speaker: "Toimittaja", text: "Tapio, te järjestätte kirjastossa kerran kuussa korjauskahvilaa. Mistä siinä on kyse?" },
            {
              speaker: "Tapio",
              text:
                "No, ihmiset tuo meille rikkinäisiä tavaroita, ja me vapaaehtoiset yritetään korjata ne yhdessä omistajan kanssa. Tärkeää on just se, että omistaja " +
                "on itse mukana. Me ei olla korjaamo, vaan me opetetaan korjaamaan.",
            },
            { speaker: "Toimittaja", text: "Mitä teille yleensä tuodaan?" },
            {
              speaker: "Tapio",
              text:
                "Eniten tulee pieniä kodinkoneita, kuten kahvinkeittimiä, leivänpaahtimia ja hiustenkuivaajia. Sitten vaatteita, joista on vetoketju rikki, ja yllättävän " +
                "paljon lasten leluja. Puhelimia tuodaan jonkin verran, mutta niiden kanssa me ollaan aika voimattomia, koska niitä ei ole tehty avattaviksi.",
            },
            { speaker: "Toimittaja", text: "Kuinka usein korjaus onnistuu?" },
            {
              speaker: "Tapio",
              text:
                "Meidän omien tilastojen mukaan noin kuusi kertaa kymmenestä. Ja vaikka laite ei lähtisikään toimimaan, omistaja yleensä ainakin tietää, mikä siinä on " +
                "vikana, ja voi päättää, kannattaako sitä viedä ammattilaiselle.",
            },
            { speaker: "Toimittaja", text: "Maksaako palvelu jotain?" },
            {
              speaker: "Tapio",
              text: "Ei mitään. Jos tarvitaan varaosa, omistaja maksaa sen itse, mutta meidän työ on ilmaista. Ja kahvia saa myös, siitä se nimikin tulee.",
            },
            { speaker: "Toimittaja", text: "Onko jotain, mitä te ette korjaa?" },
            {
              speaker: "Tapio",
              text:
                "On. Me ei korjata kaasulaitteita eikä mikroaaltouuneja, koska ne on liian vaarallisia. Ja jos laite on vielä takuussa, me neuvotaan viemään se kauppaan, " +
                "koska muuten takuu voi raueta.",
            },
            { speaker: "Toimittaja", text: "Miksi sä itse olet mukana?" },
            {
              speaker: "Tapio",
              text:
                "Mä olin sähköasentajana neljäkymmentä vuotta, ja eläkkeellä mä kaipasin tekemistä. Mutta kyllä mua myös harmittaa, kuinka paljon toimivia tavaroita " +
                "heitetään pois. Usein vika on tosi pieni, vaikka katkennut johto.",
            },
            { speaker: "Toimittaja", text: "Mistä ihmiset tietää, milloin te olette paikalla?" },
            {
              speaker: "Tapio",
              text: "Kirjaston sivuilla on päivämäärät. Ja ennen kuin tulee, kannattaa ilmoittaa, mitä on tuomassa, niin me osataan ottaa mukaan oikeat työkalut.",
            },
          ],
          questions: [
            {
              id: "k20l1q1",
              type: "mc",
              q: "Mikä on korjauskahvilan periaate?",
              options: [
                "Vapaaehtoiset korjaavat tavarat sillä aikaa, kun omistaja juo kahvia.",
                "Ammattilaiset korjaavat tavaroita tavallista edullisemmin.",
                "Omistaja korjaa tavaransa yhdessä vapaaehtoisen kanssa ja oppii samalla.",
              ],
              answer: 2,
              explain: "“Tärkeää on just se, että omistaja on itse mukana. Me ei olla korjaamo, vaan me opetetaan korjaamaan.”",
            },
            {
              id: "k20l1q2",
              type: "mc",
              q: "Miksi puhelimia on vaikea korjata korjauskahvilassa?",
              options: [
                "Niiden varaosat ovat kalliita.",
                "Niitä ei ole suunniteltu avattaviksi.",
                "Vapaaehtoisilla ei ole niihin sopivia työkaluja.",
              ],
              answer: 1,
              explain: "“niitä ei ole tehty avattaviksi.”",
            },
            {
              id: "k20l1q3",
              type: "mc",
              q: "Mitä Tapio sanoo tapauksista, joissa korjaus ei onnistu?",
              options: [
                "Omistaja saa ainakin tietää, mikä laitteessa on vikana.",
                "Vapaaehtoiset vievät laitteen ammattilaiselle.",
                "Omistajalle korvataan varaosien hinta.",
              ],
              answer: 0,
              explain: "“omistaja yleensä ainakin tietää, mikä siinä on vikana, ja voi päättää, kannattaako sitä viedä ammattilaiselle.” The owner decides — volunteers don't take it.",
            },
            {
              id: "k20l1q4",
              type: "mc",
              q: "Mistä korjauskahvilan asiakas joutuu maksamaan?",
              options: [
                "ei mistään, sillä myös varaosat ovat ilmaisia",
                "vain mahdollisista varaosista",
                "pienen maksun kahvista ja työstä",
              ],
              answer: 1,
              explain: "“Jos tarvitaan varaosa, omistaja maksaa sen itse, mutta meidän työ on ilmaista.” Coffee is free too.",
            },
            {
              id: "k20l1q5",
              type: "mc",
              q: "Miksi takuussa olevia laitteita ei korjata korjauskahvilassa?",
              options: [
                "Takuulaitteet ovat liian vaarallisia korjattaviksi.",
                "Kauppa korjaa ne nopeammin.",
                "Takuu voi raueta, jos laitetta korjataan muualla.",
              ],
              answer: 2,
              explain: "“koska muuten takuu voi raueta.” Danger was the reason for gas appliances and microwaves.",
            },
            {
              id: "k20l1q6",
              type: "mc",
              q: "Mitä Tapio neuvoo tekemään ennen tuloa?",
              options: [
                "varaamaan ajan kirjaston asiakaspalvelusta",
                "kertomaan etukäteen, mitä on tuomassa korjattavaksi",
                "hankkimaan tarvittavat varaosat valmiiksi",
              ],
              answer: 1,
              explain: "“kannattaa ilmoittaa, mitä on tuomassa, niin me osataan ottaa mukaan oikeat työkalut.”",
            },
          ],
        },
        {
          id: "k20l2",
          title: "Tehtävä 2: Keskustelu puhelinliikkeessä",
          instructions: {
            fi: "Kuulet keskustelun kaksi kertaa. Ovatko väitteet oikein vai väärin?",
            en: "You will hear a conversation twice. Are the statements true or false?",
          },
          situation: "Asiakas tulee puhelinliikkeeseen, koska hänen puhelimensa näyttö on rikki.",
          plays: 2,
          rate: 1.0,
          lines: [
            { speaker: "Myyjä", text: "Päivää! Miten voin auttaa?" },
            {
              speaker: "Asiakas",
              text: "Hei. Mun puhelin putosi eilen, ja näyttö meni säpäleiksi. Mä mietin, kannattaako se korjata vai ostaa suoraan uusi.",
            },
            { speaker: "Myyjä", text: "Katsotaanpa. Puhelin on noin kolme vuotta vanha, eikö niin?" },
            { speaker: "Asiakas", text: "Joo, tai siis ei, neljä. Mä ostin sen ennen kuin aloitin opiskelut, eli neljä vuotta sitten." },
            {
              speaker: "Myyjä",
              text:
                "Okei. Näytön vaihto tähän malliin maksaa sataseitsemänkymmentä euroa. Uusi vastaava puhelin maksaisi noin viisisataa. Jos puhelin muuten toimii hyvin, " +
                "korjaus kannattaa yleensä.",
            },
            { speaker: "Asiakas", text: "Akku kyllä tyhjenee aika nopeasti." },
            {
              speaker: "Myyjä",
              text: "Sen voi vaihtaa samalla. Akun vaihto maksaa yleensä kuusikymmentä euroa, mutta jos se tehdään näytön vaihdon yhteydessä, se maksaa vain neljäkymmentä.",
            },
            { speaker: "Asiakas", text: "Okei. Kauanko korjaus kestää?" },
            {
              speaker: "Myyjä",
              text:
                "Jos osat on varastossa, puhelin on valmis samana päivänä. Tämän mallin näyttö pitää kuitenkin tilata, joten menee pari päivää. Me voidaan lainata " +
                "teille korjauksen ajaksi varapuhelin.",
            },
            { speaker: "Asiakas", text: "Hyvä. Pitääkö mun tehdä jotain ennen kuin jätän sen tänne?" },
            {
              speaker: "Myyjä",
              text:
                "Varmuuskopioikaa tiedot, jos mahdollista. Me ei yleensä kosketa tietoihin, mutta korjauksessa ne voi joskus kadota. Ja me tarvitaan näytön " +
                "lukituskoodi, jotta voidaan testata, että kaikki toimii.",
            },
            { speaker: "Asiakas", text: "Hmm, en mä oikein haluaisi antaa mun koodia." },
            {
              speaker: "Myyjä",
              text:
                "Ymmärrän. Voitte myös vaihtaa koodin väliaikaisesti johonkin yksinkertaiseen ja vaihtaa sen takaisin, kun saatte puhelimen. Korjauksella on muuten " +
                "kuuden kuukauden takuu.",
            },
          ],
          questions: [
            {
              id: "k20l2q1",
              type: "tf",
              q: "Asiakkaan puhelin on kolme vuotta vanha.",
              answer: false,
              explain: "The customer corrects the seller: “tai siis ei, neljä.”",
            },
            {
              id: "k20l2q2",
              type: "tf",
              q: "Myyjän mukaan korjaus kannattaa yleensä, jos puhelin toimii muuten hyvin.",
              answer: true,
              explain: "“Jos puhelin muuten toimii hyvin, korjaus kannattaa yleensä.”",
            },
            {
              id: "k20l2q3",
              type: "tf",
              q: "Akun vaihto on halvempi, jos se tehdään samalla kertaa kuin näytön vaihto.",
              answer: true,
              explain: "Normally sixty euros, “mutta jos se tehdään näytön vaihdon yhteydessä, se maksaa vain neljäkymmentä”.",
            },
            {
              id: "k20l2q4",
              type: "tf",
              q: "Asiakkaan puhelin korjataan samana päivänä.",
              answer: false,
              explain: "Same day only if parts are in stock; this screen must be ordered, “joten menee pari päivää”.",
            },
            {
              id: "k20l2q5",
              type: "tf",
              q: "Asiakas saa korjauksen ajaksi toisen puhelimen.",
              answer: true,
              explain: "“Me voidaan lainata teille korjauksen ajaksi varapuhelin.”",
            },
            {
              id: "k20l2q6",
              type: "tf",
              q: "Asiakkaan on pakko kertoa myyjälle oma lukituskoodinsa.",
              answer: false,
              explain: "He can temporarily change the code to a simple one and change it back afterwards.",
            },
          ],
        },
        {
          id: "k20l3",
          title: "Tehtävä 3: Puhelu pankkiin",
          instructions: {
            fi: "Kuulet puhelun kaksi kertaa. Lue ensin kysymykset. Vastaa lyhyesti suomeksi.",
            en: "You will hear a phone call twice. Read the questions first. Answer briefly in Finnish.",
          },
          situation: "Mikko soittaa pankin sulkupalveluun, koska hänen puhelimensa on kadonnut.",
          plays: 2,
          rate: 1.0,
          lines: [
            { speaker: "Pankki", text: "Pankin sulkupalvelu, Riikka puhelimessa, hei." },
            {
              speaker: "Mikko",
              text:
                "Hei, täällä Mikko Laaksonen. Mä soitan kaverin puhelimesta, koska mun oma puhelin on kadonnut. Mä huomasin sen vasta tänä aamuna. Se jäi luultavasti " +
                "eilen illalla bussiin.",
            },
            { speaker: "Pankki", text: "Ikävä kuulla. Onko puhelimessa pankin sovellus?" },
            {
              speaker: "Mikko",
              text: "On, ja se on myös mun ainoa tunnistautumisväline. Mä käytän sitä kaikkeen, myös Kelan ja verottajan palveluihin.",
            },
            {
              speaker: "Pankki",
              text:
                "Selvä. Kun olen tarkistanut henkilöllisyytenne, suljen sovelluksen. Sen jälkeen kukaan ei pääse sovelluksella teidän tileille eikä voi tunnistautua " +
                "teidän nimissänne.",
            },
            { speaker: "Mikko", text: "Entä mun pankkikortti? Se ei ollut puhelimen kuoressa, se on lompakossa." },
            {
              speaker: "Pankki",
              text:
                "Siinä tapauksessa korttia ei tarvitse sulkea. Puhelimen mobiilimaksu kuitenkin suljetaan samalla, mutta kortilla voitte maksaa kaupassa ihan normaalisti.",
            },
            { speaker: "Mikko", text: "Okei, hyvä. Miten mä saan sovelluksen sitten takaisin käyttöön?" },
            {
              speaker: "Pankki",
              text:
                "Kun teillä on uusi puhelin tai löydätte vanhan, sovellus pitää aktivoida uudelleen konttorissa. Ottakaa mukaan henkilökortti tai passi. " +
                "Koska tunnistautumisvälineenne on suljettu, ette voi tehdä sitä itse verkossa.",
            },
            { speaker: "Mikko", text: "Mutta mun pitää maksaa vuokra perjantaina." },
            {
              speaker: "Pankki",
              text: "Sen voi maksaa konttorissa samalla käynnillä, eikä siitä peritä tässä tilanteessa palvelumaksua.",
            },
            { speaker: "Mikko", text: "Selvä. Pitääkö mun tehdä rikosilmoitus?" },
            {
              speaker: "Pankki",
              text:
                "Jos puhelin on varastettu, kyllä. Jos se on vain kadonnut, voitte tehdä katoamisilmoituksen poliisille verkossa. Ja kannattaa kysyä myös " +
                "liikennelaitoksen löytötavaratoimistosta, sinne toimitetaan bussiin unohtuneet tavarat.",
            },
          ],
          questions: [
            {
              id: "k20l3q1",
              type: "open",
              q: "Miksi puhelimen katoaminen on Mikolle erityisen hankalaa?",
              accept: [
                "koska pankin sovellus on hänen ainoa tunnistautumisvälineensä",
                "hän käyttää sovellusta tunnistautumiseen kaikissa palveluissa, myös Kelassa ja verottajalla",
                "sovelluksella hän tunnistautuu kaikkialle",
              ],
              keyNote: "The bank app on the phone is his only means of strong identification, used for everything (also Kela and tax services).",
              explain: "“se on myös mun ainoa tunnistautumisväline. Mä käytän sitä kaikkeen, myös Kelan ja verottajan palveluihin.”",
            },
            {
              id: "k20l3q2",
              type: "open",
              q: "Mitä Mikon pankkikortille tapahtuu?",
              accept: [
                "ei mitään, korttia ei suljeta",
                "korttia ei tarvitse sulkea, sillä voi maksaa normaalisti",
                "kortti toimii, vain mobiilimaksu suljetaan",
              ],
              keyNote: "Nothing — the card is not blocked and works normally in shops; only mobile payment on the phone is closed.",
              explain: "“korttia ei tarvitse sulkea … kortilla voitte maksaa kaupassa ihan normaalisti.”",
            },
            {
              id: "k20l3q3",
              type: "open",
              q: "Miten Mikko saa sovelluksen taas käyttöön?",
              accept: [
                "aktivoimalla sen uudelleen konttorissa henkilökortin tai passin kanssa",
                "käymällä konttorissa henkilöllisyystodistuksen kanssa",
                "konttorissa, ei verkossa",
              ],
              keyNote: "By reactivating it at a bank branch with an ID card or passport (not online).",
              explain: "“sovellus pitää aktivoida uudelleen konttorissa. Ottakaa mukaan henkilökortti tai passi.”",
            },
            {
              id: "k20l3q4",
              type: "open",
              q: "Mistä Mikon kannattaa kysyä puhelintaan?",
              accept: [
                "liikennelaitoksen löytötavaratoimistosta",
                "löytötavaratoimistosta",
                "bussiyhtiön löytötavaroista",
              ],
              keyNote: "The public transport authority's lost-property office (where items left on buses are taken).",
              explain: "“kannattaa kysyä myös liikennelaitoksen löytötavaratoimistosta, sinne toimitetaan bussiin unohtuneet tavarat.”",
            },
          ],
        },
        {
          id: "k20l4",
          title: "Tehtävä 4: Radiouutinen",
          instructions: {
            fi: "Kuulet uutisen kaksi kertaa. Lue ensin kysymykset. Valitse oikea vaihtoehto.",
            en: "You will hear a news report twice. Read the questions first. Choose the correct option.",
          },
          situation: "Kuulet radiosta uutisen suomalaisten tekoälyn käytöstä.",
          plays: 2,
          rate: 1.0,
          lines: [
            {
              speaker: "Uutistenlukija",
              text:
                "Yli puolet suomalaisista on käyttänyt tekoälypalveluja viimeisen vuoden aikana, kertoo tuore kyselytutkimus, johon vastasi noin kaksituhatta täysi-ikäistä. Vuotta aiemmin osuus oli noin kolmannes. " +
                "Yleisimmin tekoälyä käytetään tiedon etsimiseen, tekstien kirjoittamiseen ja kääntämiseen. Alle kolmekymmentävuotiaista tekoälyä on käyttänyt neljä viidestä.",
            },
            {
              speaker: "Uutistenlukija",
              text:
                "Työpaikoilla tekoälyn käyttö on kuitenkin jäänyt jälkeen. Vain noin neljännes työssäkäyvistä kertoo käyttävänsä tekoälyä työssään säännöllisesti, ja pienissä yrityksissä osuus on vielä pienempi. " +
                "Tutkimuksen tehneen yhtiön mukaan syynä ovat epäselvät pelisäännöt: moni ei tiedä, saako työhön liittyviä tietoja syöttää tekoälypalveluihin.",
            },
            {
              speaker: "Uutistenlukija",
              text:
                "Kyselyyn vastanneista kaksi kolmasosaa oli huolissaan tietosuojasta. Lähes puolet pelkäsi tekoälyn vievän tulevaisuudessa työpaikkoja, ja moni kertoi myös epäilevänsä tekoälyn antamien vastausten paikkansapitävyyttä. " +
                "Huoli on aiheellinen, sanoo tutkija Sanna Mattila, sillä tekoäly voi esittää virheellistä tietoa hyvin vakuuttavasti.",
            },
            {
              speaker: "Uutistenlukija",
              text:
                "Mattila neuvoo käyttämään tekoälyä apuvälineenä mutta tarkistamaan tärkeät tiedot aina luotettavasta lähteestä. Työnantajilta hän toivoo selkeitä " +
                "ohjeita siitä, mihin tekoälyä saa käyttää ja mihin ei. Hänen mukaansa kieltäminen ei ole ratkaisu, koska silloin työntekijät käyttävät palveluja omin päin.",
            },
          ],
          questions: [
            {
              id: "k20l4q1",
              type: "mc",
              q: "Miten tekoälyn käyttö on muuttunut vuodessa?",
              options: [
                "Käyttäjien osuus on noussut noin kolmanneksesta yli puoleen.",
                "Käyttäjiä on nyt kolmanneksen enemmän kuin vuosi sitten.",
                "Neljä viidestä suomalaisesta käyttää nyt tekoälyä.",
              ],
              answer: 0,
              explain: "Over half now, “Vuotta aiemmin osuus oli noin kolmannes.” Four out of five applies only to under-30s.",
            },
            {
              id: "k20l4q2",
              type: "mc",
              q: "Miksi tekoälyä käytetään työpaikoilla vähemmän?",
              options: [
                "Työnantajat ovat kieltäneet sen.",
                "Tekoälypalvelut ovat työpaikoille liian kalliita.",
                "Työntekijät eivät tiedä, mitä tietoja palveluihin saa syöttää.",
              ],
              answer: 2,
              explain: "“moni ei tiedä, saako työhön liittyviä tietoja syöttää tekoälypalveluihin.”",
            },
            {
              id: "k20l4q3",
              type: "mc",
              q: "Mikä huolestutti suurinta osaa vastaajista?",
              options: ["tietosuoja", "työpaikkojen katoaminen", "palvelujen hinta"],
              answer: 0,
              explain: "“kaksi kolmasosaa oli huolissaan tietosuojasta.”",
            },
            {
              id: "k20l4q4",
              type: "mc",
              q: "Miksi Sanna Mattilan mukaan epäily vastausten luotettavuudesta on aiheellinen?",
              options: [
                "Tekoäly ei osaa suomea kunnolla.",
                "Tekoäly voi esittää väärää tietoa vakuuttavasti.",
                "Tekoälyn tiedot ovat usein vanhentuneita.",
              ],
              answer: 1,
              explain: "“tekoäly voi esittää virheellistä tietoa hyvin vakuuttavasti.”",
            },
            {
              id: "k20l4q5",
              type: "mc",
              q: "Mitä Mattila toivoo työnantajilta?",
              options: [
                "että ne kieltäisivät tekoälyn käytön, kunnes asia on selvitetty",
                "että ne laatisivat selkeät ohjeet tekoälyn käytöstä",
                "että ne antaisivat työntekijöiden käyttää tekoälyä vapaasti",
              ],
              answer: 1,
              explain: "Clear instructions on what AI may and may not be used for; “kieltäminen ei ole ratkaisu”.",
            },
          ],
        },
        {
          id: "k20l5",
          title: "Tehtävä 5: Mainoksia ja tiedotteita",
          instructions: {
            fi: "Kuulet viisi lyhyttä mainosta tai tiedotetta kaksi kertaa. Jokaisesta on yksi väite. Onko väite oikein vai väärin?",
            en: "You will hear five short adverts or announcements twice. There is one statement about each. Is it true or false?",
          },
          situation: "Kuulet radiosta ja eri tiedotuskanavilta lyhyitä mainoksia ja tiedotteita.",
          plays: 2,
          rate: 1.0,
          lines: [
            {
              speaker: "Mainos 1",
              text:
                "Uusi älytermostaatti säästää lämmityskuluissa jopa viidenneksen! Termostaatti oppii perheesi rytmin ja laskee lämpötilaa, kun kukaan ei ole kotona. " +
                "Asennukseen tarvitaan sähköasentaja, ja se maksetaan erikseen. Tilaa kuun loppuun mennessä, niin saat termostaatin kahden viikon kotikokeiluun.",
            },
            {
              speaker: "Tiedote 2",
              text:
                "Kirjaston digituki auttaa! Opastamme älypuhelimen, tabletin ja tietokoneen käytössä sekä sähköisessä asioinnissa. Digitukeen varataan aika etukäteen, " +
                "ja tapaaminen kestää puoli tuntia. Digituki on maksutonta. Huomaa, että emme voi kirjautua palveluihin puolestasi.",
            },
            {
              speaker: "Tiedote 3",
              text:
                "Kelan verkkoasiointi on poissa käytöstä huoltotöiden vuoksi lauantaina kello kahdeksasta kahteentoista. Huoltokatko ei vaikuta etuuksien maksupäiviin. " +
                "Kiireellisissä asioissa voit soittaa Kelan palvelunumeroon.",
            },
            {
              speaker: "Mainos 4",
              text:
                "Kierrätyskeskuksen elektroniikkaosasto myy tarkastettuja käytettyjä tietokoneita ja puhelimia. Kaikki laitteet on tyhjennetty ja asennettu uudelleen, " +
                "ja niille annetaan kolmen kuukauden takuu. Voit myös tuoda meille vanhan laitteesi, ja tyhjennämme sen maksutta.",
            },
            {
              speaker: "Tiedote 5",
              text:
                "Asunto-osakeyhtiö Kotirinne tiedottaa: porraskäytävien ovet varustetaan kesäkuussa sähkölukoilla. Jokainen asunto saa kaksi avaintunnistetta, ja " +
                "lisätunnisteita voi tilata isännöitsijältä kymmenen euron hintaan. Tunnisteet jaetaan asukkaille toukokuun lopussa. Vanhat avaimet toimivat edelleen asuntojen ovissa.",
            },
          ],
          questions: [
            {
              id: "k20l5q1",
              type: "tf",
              q: "Mainos 1: Termostaatin hintaan sisältyy asennus.",
              answer: false,
              explain: "“Asennukseen tarvitaan sähköasentaja, ja se maksetaan erikseen.”",
            },
            {
              id: "k20l5q2",
              type: "tf",
              q: "Tiedote 2: Digitukeen on varattava aika etukäteen.",
              answer: true,
              explain: "“Digitukeen varataan aika etukäteen.”",
            },
            {
              id: "k20l5q3",
              type: "tf",
              q: "Tiedote 3: Huoltokatko voi viivästyttää etuuksien maksamista.",
              answer: false,
              explain: "“Huoltokatko ei vaikuta etuuksien maksupäiviin.”",
            },
            {
              id: "k20l5q4",
              type: "tf",
              q: "Mainos 4: Kierrätyskeskuksesta ostetuilla laitteilla on takuu.",
              answer: true,
              explain: "“niille annetaan kolmen kuukauden takuu.”",
            },
            {
              id: "k20l5q5",
              type: "tf",
              q: "Tiedote 5: Asukkaat voivat käyttää vanhoja avaimiaan oman asuntonsa ovessa.",
              answer: true,
              explain: "“Vanhat avaimet toimivat edelleen asuntojen ovissa.” Only the stairwell doors get electronic locks.",
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
          id: "k20s1",
          kind: "kertominen",
          title: "Tehtävä 1: Kertominen",
          instructions: {
            fi: "Sinulla on minuutti aikaa valmistautua. Voit tehdä muistiinpanoja. Puhu noin puolitoista minuuttia. Aloita puhuminen vasta, kun kuulet äänimerkin.",
            en: "You have one minute to prepare and may take notes. Speak for about a minute and a half. Start only after the beep.",
          },
          prepSec: 60,
          card: {
            title: "Kerro, miten käytät teknologiaa arjessasi.",
            questions: [
              "Mitä laitteita ja sovelluksia käytät päivittäin?",
              "Mitä asioita hoidat verkossa ja mitä mieluummin kasvokkain?",
              "Miten teknologian käyttösi on muuttunut viime vuosina?",
              "Mikä teknologiassa huolestuttaa tai ärsyttää sinua?",
            ],
          },
          items: [{ id: "a", spoken: "Kerro, miten käytät teknologiaa arjessasi. Aloita puhuminen nyt.", speakSec: 90 }],
        },
        {
          id: "k20s2",
          kind: "keskustelu",
          title: "Tehtävä 2: Keskustelu A",
          instructions: {
            fi: "Kuulet keskustelun, jossa puhut vuorotellen toisen henkilön kanssa. Lue tilanne ja ohjeet. Puhu, kun kuulet äänimerkin.",
            en: "You will take turns with another speaker. Read the situation and the cues. Speak after the beep.",
          },
          prepSec: 30,
          card: {
            title:
              "Kotisi internetyhteys ei ole toiminut kolmeen päivään, vaikka olet käynnistänyt modeemin uudelleen. Teet etätöitä kotona. Soitat operaattorin asiakaspalveluun.",
            questions: [],
          },
          items: [
            {
              id: "a",
              spoken: "Verkkoyhtiö Kuitu, asiakaspalvelu, Sami puhelimessa. Miten voin auttaa?",
              cue: "[Esittele itsesi ja kerro, miksi soitat.]",
              speakSec: 20,
            },
            {
              id: "b",
              spoken: "Ikävä kuulla. Oletteko jo yrittäneet korjata tilannetta jotenkin itse?",
              cue: "[Kerro, mitä olet jo tehnyt.]",
              speakSec: 20,
            },
            {
              id: "c",
              spoken: "Selvä. Näen täältä, että alueellanne on kaapelivika. Asentaja pääsee paikalle aikaisintaan ensi viikon keskiviikkona.",
              cue: "[Kerro, miksi tarvitset yhteyden nopeammin, ja kysy vaihtoehdoista.]",
              speakSec: 25,
            },
            {
              id: "d",
              spoken: "Voimme lähettää teille mobiilimodeemin, jolla pääsette verkkoon väliaikaisesti. Se tulee postiin huomenna. Sopiiko se?",
              cue: "[Vastaa ja kysy, maksaako modeemi jotain.]",
              speakSec: 15,
            },
            {
              id: "e",
              spoken: "Modeemi on maksuton, mutta se pitää palauttaa kahden viikon kuluessa. Lisäksi voitte hakea hyvitystä katkosta. Haluatteko, että teen hyvityshakemuksen?",
              cue: "[Vastaa ja perustele, millaista hyvitystä toivot.]",
              speakSec: 20,
            },
            {
              id: "f",
              spoken: "Kirjasin hakemuksen. Saatte vahvistuksen tekstiviestillä. Voinko auttaa vielä jossain muussa?",
              cue: "[Kysy, miten saat tiedon asentajan tulosta, ja kiitä.]",
              speakSec: 15,
            },
          ],
        },
        {
          id: "k20s3",
          kind: "keskustelu",
          title: "Tehtävä 2: Keskustelu B",
          instructions: {
            fi: "Kuulet keskustelun, jossa puhut vuorotellen toisen henkilön kanssa. Lue tilanne ja ohjeet. Puhu, kun kuulet äänimerkin.",
            en: "You will take turns with another speaker. Read the situation and the cues. Speak after the beep.",
          },
          prepSec: 30,
          card: {
            title:
              "Naapurisi Aino on 80-vuotias. Hän sai lapsiltaan tabletin ja pyysi sinua auttamaan sen käytössä. Menet Ainon luo. Sinä aloitat.",
            questions: [],
          },
          items: [
            { id: "a", spoken: "", cue: "[Tervehdi Ainoa ja kysy, missä asiassa hän tarvitsee apua.]", speakSec: 15 },
            {
              id: "b",
              spoken: "Voi kun kiva, että tulit. Minun pitäisi hakea Kelasta asumistukea, mutta siihen tarvitaan niitä pankkitunnuksia. En uskalla kirjoittaa niitä tähän laitteeseen.",
              cue: "[Rauhoittele Ainoa ja kerro, miten tunnistautuminen toimii.]",
              speakSec: 25,
            },
            {
              id: "c",
              spoken: "No mutta tyttärentyttäreni sanoi, että voisin antaa tunnukset hänelle, niin hän hoitaa asiat. Eikö se olisi helpompaa?",
              cue: "[Kerro, miksi tunnuksia ei kannata antaa toiselle, ja ehdota toista ratkaisua.]",
              speakSec: 25,
            },
            {
              id: "d",
              spoken: "Ahaa, valtuutus. En ole kuullutkaan. Mutta osaanko minä tehdä sen itse?",
              cue: "[Kerro, miten voisit auttaa, ja ehdota aikaa.]",
              speakSec: 20,
            },
            {
              id: "e",
              spoken: "Sopii. Sain muuten eilen tekstiviestin, jossa sanottiin, että pakettini on jumissa ja että minun pitää maksaa kaksi euroa linkin kautta. Pitäisikö minun maksaa?",
              cue: "[Neuvo Ainoa ja perustele neuvosi.]",
              speakSec: 20,
            },
            {
              id: "f",
              spoken: "Onneksi kysyin sinulta. Kiitos kovasti avusta! Mitä olen sinulle velkaa?",
              cue: "[Vastaa ystävällisesti ja lopeta keskustelu.]",
              speakSec: 15,
            },
          ],
        },
        {
          id: "k20s4",
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
              situation: "Ystäväsi kysyy, voisitko auttaa häntä valitsemaan uuden puhelimen. Mitä sanot?",
              spoken: "Tilanne 1. Ystäväsi kysyy, voisitko auttaa häntä valitsemaan uuden puhelimen. Mitä sanot?",
              prepSec: 20,
              speakSec: 20,
            },
            {
              id: "b",
              situation: "Tilasit verkosta robotti-imurin, mutta se ei yhdisty kotisi langattomaan verkkoon. Soitat verkkokaupan asiakaspalveluun. Mitä sanot?",
              spoken: "Tilanne 2. Tilasit verkosta robotti-imurin, mutta se ei yhdisty kotisi langattomaan verkkoon. Soitat verkkokaupan asiakaspalveluun. Mitä sanot?",
              prepSec: 20,
              speakSec: 30,
            },
            {
              id: "c",
              situation: "Julkaisit sosiaalisessa mediassa kuvan, jossa ystäväsi näkyy, etkä kysynyt häneltä lupaa. Ystäväsi on pahoittanut mielensä. Mitä sanot?",
              spoken: "Tilanne 3. Julkaisit sosiaalisessa mediassa kuvan, jossa ystäväsi näkyy, etkä kysynyt häneltä lupaa. Ystäväsi on pahoittanut mielensä. Mitä sanot?",
              prepSec: 20,
              speakSec: 30,
            },
            {
              id: "d",
              situation: "Haet tietokoneesi huollosta ja huomaat, että kaikki tiedostosi on poistettu, vaikka siitä ei sovittu. Mitä sanot huollon työntekijälle?",
              spoken: "Tilanne 4. Haet tietokoneesi huollosta ja huomaat, että kaikki tiedostosi on poistettu, vaikka siitä ei sovittu. Mitä sanot huollon työntekijälle?",
              prepSec: 20,
              speakSec: 30,
            },
            {
              id: "e",
              situation: "Et pääse kirjautumaan uuden työpaikkasi järjestelmään, ja tärkeä etäkokous alkaa kymmenen minuutin päästä. Pyydät apua työkaveriltasi. Mitä sanot?",
              spoken: "Tilanne 5. Et pääse kirjautumaan uuden työpaikkasi järjestelmään, ja tärkeä etäkokous alkaa kymmenen minuutin päästä. Pyydät apua työkaveriltasi. Mitä sanot?",
              prepSec: 20,
              speakSec: 30,
            },
          ],
        },
        {
          id: "k20s5",
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
              "A. Lapset ja älypuhelimet: Minkä ikäisenä lapsi voi saada oman älypuhelimen? Pitäisikö vanhempien valvoa lasten puhelimen käyttöä? Mitä hyötyä ja haittaa puhelimista on lapsille?",
              "B. Korjata vai ostaa uusi: Kannattaako rikkinäiset laitteet korjata? Miksi niin moni ostaa mieluummin uuden? Mitä valmistajien ja kuluttajien pitäisi tehdä toisin?",
            ],
          },
          items: [{ id: "a", spoken: "Kerro mielipiteesi valitsemastasi aiheesta. Aloita puhuminen nyt.", speakSec: 120 }],
        },
      ],
    },
  ],
};
