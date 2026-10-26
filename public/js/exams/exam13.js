// Keskitaso 3
export default {
  id: "koe13",
  title: "Keskitaso 3",
  level: "keskitaso",
  description: "Working life: flexible working hours, trade unions and employment contracts, language at the workplace, changing careers, burnout and recovery, commuting.",
  sections: [
    // ------------------------------------------------------------------ READING
    {
      id: "reading",
      minutes: 60,
      cutoffs: { level1: 0.5, level2: 0.75 },
      ohje:
        "Tässä osakokeessa luet erilaisia tekstejä, esimerkiksi uutisen, kolumnin, mielipidekirjoituksen, asiantuntija-artikkelin, tiedotteen ja ohjeen. Osakokeessa on kuusi tehtävää. Tehtävissä on monivalintakysymyksiä, oikein–väärin-väitteitä ja avoimia kysymyksiä. Vastaa avoimiin kysymyksiin suomeksi ja lyhyesti, omin sanoin. Kaikkia sanoja ei tarvitse ymmärtää, jotta voi vastata oikein. Sanakirjaa ei saa käyttää.",
      tasks: [
        {
          id: "k13r1",
          title: "Tehtävä 1: Uutinen",
          instructions: {
            fi: "Lue uutinen ja vastaa kysymyksiin. Valitse oikea vaihtoehto.",
            en: "Read the news item and answer the questions. Choose the correct option.",
          },
          text: {
            title: "Radan korjaustyöt pidentävät työmatkoja syksyllä – työnantajia pyydetään joustamaan",
            body:
              "Lähijunaliikenne Koivulan ja Järvelän välillä keskeytyy syyskuun alusta marraskuun loppuun, kun rataa ja kahta siltaa korjataan. Korjaustyöt " +
              "koskevat päivittäin noin 9 000 matkustajaa, joista suurin osa kulkee junalla töihin tai opiskelemaan.\n\n" +
              "Junien tilalla kulkevat korvaavat bussit, jotka pysähtyvät kaikilla väliasemilla. Väyläviraston mukaan matka-aika pitenee ruuhka-aikoina jopa " +
              "40 minuutilla suuntaansa. Kausilipulla saa matkustaa korvaavissa busseissa ilman lisämaksua. Polkupyöriä busseihin ei kuitenkaan oteta, toisin kuin juniin.\n\n" +
              "Virasto ja alueen kauppakamari ovat lähettäneet työnantajille kirjeen, jossa niitä pyydetään harkitsemaan joustavia työaikoja ja etätyötä " +
              "korjausten ajaksi. ”Jos edes osa matkustajista siirtäisi työmatkansa ruuhka-ajan ulkopuolelle, busseihin mahtuisi paremmin ja kaikki pääsisivät " +
              "perille nopeammin”, sanoo projektipäällikkö Jari Leinonen.\n\n" +
              "Kaikilla ei kuitenkaan ole mahdollisuutta joustaa. Järvelän sairaalan henkilöstöjohtaja Anne Salmi kertoo, että hoitajien aamuvuorot alkavat " +
              "seitsemältä riippumatta siitä, kulkevatko junat. ”Neuvottelimme liikennöitsijän kanssa, ja aamun ensimmäinen bussi lähtee nyt puoli tuntia " +
              "aiemmin kuin juna lähti. Se auttaa, mutta tarkoittaa monelle entistä aikaisempaa herätystä.”\n\n" +
              "Korjausten jälkeen junat voivat kulkea rataosuudella nykyistä nopeammin, ja matka-ajan arvioidaan lyhenevän noin kymmenellä minuutilla. " +
              "Virasto muistuttaa, että aikataulut voivat vielä muuttua, ja kehottaa tarkistamaan ajantasaiset tiedot reittioppaasta ennen matkaa.",
          },
          questions: [
            {
              id: "k13r1q1",
              type: "mc",
              q: "Mitä uutisen mukaan tapahtuu syyskuun alussa?",
              options: [
                "Junat alkavat kulkea rataosuudella aiempaa nopeammin.",
                "Junat korvataan busseilla noin kolmen kuukauden ajaksi.",
                "Kausilippujen hinnat nousevat korjausten ajaksi.",
              ],
              answer: 1,
              explain:
                "Train traffic stops “syyskuun alusta marraskuun loppuun” and replacement buses run instead. Faster trains come only after the repairs; season tickets are valid at no extra cost.",
            },
            {
              id: "k13r1q2",
              type: "mc",
              q: "Mitä korvaavista busseista kerrotaan?",
              options: [
                "Niissä ei voi kuljettaa polkupyörää.",
                "Niihin tarvitaan erillinen lippu, vaikka olisi kausilippu.",
                "Ne ajavat suoraan pysähtymättä väliasemilla.",
              ],
              answer: 0,
              explain: "“Polkupyöriä busseihin ei kuitenkaan oteta, toisin kuin juniin.” Season tickets are valid, and the buses stop at all stations.",
            },
            {
              id: "k13r1q3",
              type: "mc",
              q: "Mitä Jari Leinonen toivoo?",
              options: [
                "Että yhä useampi matkustaja ostaisi kausilipun.",
                "Että työnantajat järjestäisivät työntekijöilleen omia kuljetuksia.",
                "Että osa ihmisistä matkustaisi muulloin kuin ruuhka-aikaan.",
              ],
              answer: 2,
              explain: "“Jos edes osa matkustajista siirtäisi työmatkansa ruuhka-ajan ulkopuolelle, busseihin mahtuisi paremmin.”",
            },
            {
              id: "k13r1q4",
              type: "mc",
              q: "Miten sairaalan hoitajien työmatkoja on helpotettu?",
              options: [
                "Aamun ensimmäinen bussi lähtee aikaisemmin kuin juna lähti.",
                "Hoitajien aamuvuorot alkavat korjausten aikana myöhemmin.",
                "Hoitajat saavat tehdä osan töistä etänä.",
              ],
              answer: 0,
              explain:
                "“aamun ensimmäinen bussi lähtee nyt puoli tuntia aiemmin kuin juna lähti.” The shifts still start at seven “riippumatta siitä, kulkevatko junat”.",
            },
          ],
        },
        {
          id: "k13r2",
          title: "Tehtävä 2: Asiantuntija-artikkeli",
          instructions: {
            fi: "Lue artikkeli. Ovatko väitteet oikein vai väärin?",
            en: "Read the article. Are the statements true (oikein) or false (väärin)?",
          },
          text: {
            title: "Työsopimus käteen – mitä allekirjoittajan kannattaa tietää",
            body:
              "Uuden työn alkaessa moni on niin innoissaan, että työsopimus allekirjoitetaan nopeasti. Sopimus kannattaa kuitenkin lukea tarkasti, sillä siinä " +
              "sovitaan asioista, jotka vaikuttavat arkeen pitkään: palkasta, työajasta, lomista ja siitä, miten työsuhde voi päättyä.\n\n" +
              "Työsopimuksen voi tehdä myös suullisesti, mutta kirjallinen sopimus on molemmille osapuolille selvempi, ja riitatilanteessa siihen on helppo vedota. Jos sopimusta ei tehdä kirjallisesti, " +
              "työnantajan on annettava työntekijälle kirjallinen selvitys työn keskeisistä ehdoista. Niihin kuuluvat esimerkiksi työn alkamispäivä, tehtävät, " +
              "palkka ja työaika.\n\n" +
              "Erityistä huomiota kannattaa kiinnittää koeaikaan. Koeajan aikana kumpikin osapuoli voi purkaa työsopimuksen ilman irtisanomisaikaa. Koeaika voi " +
              "olla enintään kuusi kuukautta, ja määräaikaisessa työsuhteessa se saa olla korkeintaan puolet sopimuksen kestosta. Sopimusta ei kuitenkaan saa " +
              "purkaa koeajalla syrjivästä syystä, esimerkiksi raskauden vuoksi.\n\n" +
              "Palkan osalta kannattaa tarkistaa, onko sopimuksessa sovittu kuukausi- vai tuntipalkasta ja miten mahdolliset lisät, kuten ilta- ja " +
              "viikonloppulisät, maksetaan. Erityisen tarkkana kannattaa olla niin sanottujen nollatuntisopimusten kanssa. Niissä työtuntien määrä voi vaihdella " +
              "viikosta toiseen, eikä työntekijä tiedä etukäteen, kuinka paljon hän ansaitsee. Jos työnantaja tarjoaa toistuvasti vähemmän tunteja kuin " +
              "sopimuksessa on arvioitu, asiasta kannattaa kysyä luottamusmieheltä tai omasta liitosta.\n\n" +
              "Määräaikainen sopimus taas edellyttää työnantajalta perusteltua syytä, kuten sijaisuutta tai kausityötä. Jos työnantaja tekee samalle " +
              "työntekijälle peräkkäin useita määräaikaisia sopimuksia, vaikka työtä on tarjolla jatkuvasti, sopimusta voidaan pitää toistaiseksi voimassa olevana.\n\n" +
              "Monella alalla palkan ja muiden työehtojen vähimmäistaso määräytyy työehtosopimuksen eli TES:n mukaan. Moni luulee, että työehtosopimus koskee " +
              "vain ammattiliiton jäseniä. Näin ei ole: yleissitovaa työehtosopimusta on noudatettava alan kaikissa työpaikoissa, kuului työntekijä liittoon tai ei. " +
              "Työsopimuksessa ei myöskään voi sopia työehtosopimusta huonommista ehdoista. Työnantajan on pidettävä työehtosopimus työntekijöiden nähtävillä, " +
              "mutta sen löytää yleensä myös verkosta.\n\n" +
              "Miksi sitten liittyä ammattiliittoon? Liiton jäsen saa neuvontaa ja tarvittaessa oikeudellista apua, jos työpaikalla syntyy riitaa esimerkiksi " +
              "palkasta tai irtisanomisesta. Moni sekoittaa liiton ja työttömyyskassan toisiinsa. Ansiosidonnaista päivärahaa maksaa työttömyyskassa, ja kassaan " +
              "voi liittyä myös ilman liiton jäsenyyttä. Kassan jäsenmaksu on selvästi liiton maksua pienempi, mutta silloin jää ilman liiton palveluja.\n\n" +
              "Ammattiliiton lakimies Eeva Kallio muistuttaa, että sopimuksen ehdoista voi myös neuvotella. ”Moni ajattelee, että tarjottu sopimus on " +
              "hyväksyttävä sellaisenaan. Palkasta ja vaikkapa etätyöpäivistä kannattaa kuitenkin kysyä ennen allekirjoitusta, koska jälkikäteen asioiden " +
              "muuttaminen on paljon vaikeampaa. Hyvä työnantaja ei pahastu siitä, että työntekijä tuntee oikeutensa.”",
          },
          questions: [
            {
              id: "k13r2q1",
              type: "tf",
              q: "Työsopimuksen ei ole pakko olla kirjallinen.",
              answer: true,
              explain:
                "“Työsopimuksen voi tehdä myös suullisesti” — in that case the employer must give a written statement of the main terms.",
            },
            {
              id: "k13r2q2",
              type: "tf",
              q: "Koeajan aikana työnantaja voi purkaa sopimuksen mistä syystä tahansa.",
              answer: false,
              explain: "“Sopimusta ei kuitenkaan saa purkaa koeajalla syrjivästä syystä, esimerkiksi raskauden vuoksi.”",
            },
            {
              id: "k13r2q3",
              type: "tf",
              q: "Puolen vuoden määräaikaisessa työsuhteessa koeaika voi olla enintään kolme kuukautta.",
              answer: true,
              explain: "In a fixed-term contract the trial period may be “korkeintaan puolet sopimuksen kestosta” — half of six months is three.",
            },
            {
              id: "k13r2q4",
              type: "tf",
              q: "Määräaikaisen sopimuksen saa tehdä aina, jos työntekijä suostuu siihen.",
              answer: false,
              explain: "A fixed-term contract “edellyttää työnantajalta perusteltua syytä, kuten sijaisuutta tai kausityötä”.",
            },
            {
              id: "k13r2q5",
              type: "tf",
              q: "Työehtosopimuksen mukainen vähimmäispalkka koskee vain ammattiliittoon kuuluvia.",
              answer: false,
              explain: "“yleissitovaa työehtosopimusta on noudatettava alan kaikissa työpaikoissa, kuului työntekijä liittoon tai ei.”",
            },
            {
              id: "k13r2q6",
              type: "tf",
              q: "Ansiosidonnaista päivärahaa voi saada, vaikka ei kuuluisi ammattiliittoon.",
              answer: true,
              explain: "The earnings-related allowance is paid by the unemployment fund, “ja kassaan voi liittyä myös ilman liiton jäsenyyttä”.",
            },
            {
              id: "k13r2q7",
              type: "tf",
              q: "Kallion mielestä sopimuksen ehtoihin kannattaa yrittää vaikuttaa vasta, kun työ on alkanut.",
              answer: false,
              explain: "Kallio says to ask “ennen allekirjoitusta, koska jälkikäteen asioiden muuttaminen on paljon vaikeampaa”.",
            },
          ],
        },
        {
          id: "k13r3",
          title: "Tehtävä 3: Tiedote",
          instructions: {
            fi: "Lue tiedote ja vastaa kysymyksiin suomeksi. Vastaa lyhyesti.",
            en: "Read the notice and answer the questions in Finnish. Answer briefly.",
          },
          text: {
            title: "Henkilöstötiedote: liukuva työaika käyttöön 1.2. alkaen",
            body:
              "Hyvä henkilöstö,\n\n" +
              "helmikuun alusta toimistossamme otetaan käyttöön liukuva työaika. Säännöllinen työaika on edelleen 7 tuntia 30 minuuttia päivässä, mutta voit itse " +
              "päättää työpäiväsi alkamis- ja päättymisajan tietyissä rajoissa.\n\n" +
              "Kiinteä työaika, jolloin kaikkien on oltava työssä, on kello 9.30–14.00. Liukuma-aika on aamulla kello 7.00–9.30 ja iltapäivällä kello 14.00–18.00. " +
              "Lounastauko on vähintään 30 minuuttia, eikä se kuulu työaikaan.\n\n" +
              "Työtunnit kirjataan päivittäin työaikajärjestelmään. Jos teet jonain päivänä tavallista pidemmän päivän, ylimääräiset tunnit kertyvät saldoon. " +
              "Saldo saa olla enintään 40 tuntia plussalla ja 10 tuntia miinuksella. Plussatunteja voi pitää vapaana, kun siitä on sovittu esihenkilön kanssa, " +
              "kuitenkin enintään kaksi kokonaista vapaapäivää kuukaudessa. Huomaa, että liukuman kautta kertyneet tunnit eivät ole ylitöitä, eikä niistä makseta " +
              "korotettua palkkaa. Ylitöistä on aina sovittava esihenkilön kanssa etukäteen.\n\n" +
              "Asiakaspalvelun työntekijät noudattavat edelleen vuorolistaa, koska palvelun on oltava avoinna kello 8–17. Heillä työajan joustaminen on mahdollista " +
              "vain, jos työvuoro vaihdetaan kollegan kanssa ja vaihdosta ilmoitetaan tiimin vetäjälle.\n\n" +
              "Lisätietoja antaa HR-asiantuntija Laura Nieminen.",
          },
          questions: [
            {
              id: "k13r3q1",
              type: "open",
              q: "Mihin aikaan toimiston kaikkien työntekijöiden on oltava töissä?",
              accept: ["kello 9.30–14.00", "puoli kymmenestä kahteen", "klo 9.30–14"],
              keyNote: "During the fixed working time 9.30–14.00. The flexible periods (7–9.30 and 14–18) are wrong.",
              explain: "“Kiinteä työaika, jolloin kaikkien on oltava työssä, on kello 9.30–14.00.”",
            },
            {
              id: "k13r3q2",
              type: "open",
              q: "Millä ehdoilla plussatunteja voi pitää vapaana?",
              hint: "(2 asiaa)",
              accept: [
                "kun on sopinut esihenkilön kanssa ja enintään kaksi vapaapäivää kuukaudessa",
                "esihenkilön luvalla, korkeintaan kaksi kokonaista päivää kuussa",
              ],
              keyNote: "Both: it must be agreed with the supervisor AND at most two full days off per month.",
              explain: "“Plussatunteja voi pitää vapaana, kun siitä on sovittu esihenkilön kanssa, kuitenkin enintään kaksi kokonaista vapaapäivää kuukaudessa.”",
            },
            {
              id: "k13r3q3",
              type: "open",
              q: "Mitä työntekijän pitää tehdä, jos hän haluaa lisätunneistaan korotettua palkkaa?",
              accept: [
                "sopia ylitöistä etukäteen esihenkilön kanssa",
                "sopia ylityöstä esihenkilön kanssa ennen kuin tekee sitä",
                "sopia ylitöistä etukäteen",
              ],
              keyNote: "Agree on overtime with the supervisor in advance. Extra hours collected through flexitime are not paid as overtime.",
              explain: "“liukuman kautta kertyneet tunnit eivät ole ylitöitä, eikä niistä makseta korotettua palkkaa. Ylitöistä on aina sovittava esihenkilön kanssa etukäteen.”",
            },
            {
              id: "k13r3q4",
              type: "open",
              q: "Miten asiakaspalvelun työntekijä voi joustaa työajassaan?",
              hint: "(2 asiaa)",
              accept: [
                "vaihtamalla vuoroa kollegan kanssa ja ilmoittamalla siitä tiimin vetäjälle",
                "vaihtaa vuoron työkaverin kanssa ja kertoo tiimin vetäjälle",
              ],
              keyNote: "Both: by swapping a shift with a colleague AND informing the team leader.",
              explain: "“vain, jos työvuoro vaihdetaan kollegan kanssa ja vaihdosta ilmoitetaan tiimin vetäjälle.”",
            },
          ],
        },
        {
          id: "k13r4",
          title: "Tehtävä 4: Kolumni",
          instructions: {
            fi: "Lue kolumni ja vastaa kysymyksiin. Valitse oikea vaihtoehto.",
            en: "Read the column and answer the questions. Choose the correct option.",
          },
          text: {
            title: "Neljäkymmentäviisi ja harjoittelija – Petra Kolehmainen",
            body:
              "Kaksi vuotta sitten istuin pankin neuvotteluhuoneessa ja kerroin esihenkilölleni, että lähden. En ollut saanut parempaa tarjousta muualta, eikä " +
              "minua oltu irtisanottu. Olin päättänyt ryhtyä puusepäksi. Esihenkilöni katsoi minua pitkään ja kysyi, olinko varmasti miettinyt asiaa. " +
              "Hänen ilmeestään näki, että hän piti ajatusta hulluna. Olin miettinyt sitä kymmenen vuotta.\n\n" +
              "Pankissa työni oli turvallista ja hyvin palkattua. Ongelma oli siinä, etten illalla osannut kertoa kenellekään, mitä olin päivän aikana tehnyt. " +
              "Olin vastannut sähköposteihin, istunut palavereissa ja täyttänyt taulukoita, mutta mitään ei ollut valmistunut. Viikonloppuisin korjasin vanhoja " +
              "huonekaluja kesämökillä, ja sunnuntai-iltaisin minua ahdisti.\n\n" +
              "Alanvaihto ei ollut romanttinen seikkailu. Opiskelin ammattiin aikuiskoulutuksessa puolitoista vuotta, ja tuloni putosivat alle puoleen. Myimme " +
              "toisen auton, ja lomamatkat jäivät väliin. Iltaisin luin ammattikirjoja keittiön pöydän ääressä, kun lapset tekivät läksyjään vieressä. Työssäoppimisjaksolla olin pajan vanhin, ja ohjaajani oli nuorempi kuin oma esikoiseni. Hän ei " +
              "peitellyt sitä, että pidin vasaraa väärin.\n\n" +
              "Silti en ole katunut päivääkään. Väsyn nykyään eri tavalla kuin ennen: kädet ja selkä ovat illalla kipeät, mutta pää on levännyt. Kun asiakas " +
              "silittää valmista pöytää, tiedän tarkalleen, mitä olen tehnyt.\n\n" +
              "Nykyään työskentelen pienessä verstaassa, joka valmistaa keittiöitä ja kalusteita taloyhtiöille. Palkkani on yhä pienempi kuin pankissa, ja " +
              "todennäköisesti se myös pysyy pienempänä. Sen olen hyväksynyt. Yllättävämpää oli huomata, kuinka paljon pankkivuosista on ollut hyötyä: " +
              "osaan laskea tarjoukset, neuvotella hankalien asiakkaiden kanssa ja pitää paperit järjestyksessä. Verstaan omistaja sanoo usein, että " +
              "palkkasi minut juuri siksi. Mikään aiempi ei siis mennyt hukkaan.\n\n" +
              "En kuitenkaan halua antaa kuvaa, että jokaisen pitäisi heittää hyvä työpaikka menemään ja seurata unelmiaan. Sitä on helppo neuvoa, jos ei " +
              "tarvitse maksaa asuntolainaa yksin tai huolehtia sairaasta vanhemmasta. Minulla oli puoliso, joka uskoi minuun, ja säästöjä, joilla selvisimme " +
              "opiskeluajan yli. Kaikilla ei ole kumpaakaan.\n\n" +
              "Siksi yhteiskunnan pitäisi mielestäni tehdä alanvaihdosta helpompaa myös niille, joilla ei ole taloudellista puskuria. Työurat pitenevät, eikä " +
              "ole järkevää, että ihminen tekee neljäkymmentä vuotta työtä, johon hän on päätynyt parikymppisenä melkein sattumalta. Lyhyet koulutukset, joissa " +
              "aiempi osaaminen otetaan huomioon, ja mahdollisuus opiskella työn ohessa olisivat hyvä alku.\n\n" +
              "Entinen esihenkilöni kävi viime kuussa pajallani. Hän tilasi kirjahyllyn ja kysyi lähtiessään, mistä tietää, onko liian vanha aloittamaan alusta. " +
              "Sanoin, ettei sitä tiedä kukaan etukäteen. Mutta sen ainakin tietää, mitä tapahtuu, jos ei koskaan yritä.",
          },
          questions: [
            {
              id: "k13r4q1",
              type: "mc",
              q: "Miksi kirjoittaja lähti pankista?",
              options: [
                "Hän sai muualta paremman työtarjouksen.",
                "Hän ei kokenut saavansa työssään mitään konkreettista aikaan.",
                "Hänet irtisanottiin säästöjen vuoksi.",
              ],
              answer: 1,
              explain:
                "She could not tell anyone what she had done: “mitään ei ollut valmistunut.” She explicitly says she had no better offer and had not been dismissed.",
            },
            {
              id: "k13r4q2",
              type: "mc",
              q: "Mitä kirjoittaja tarkoittaa sanoessaan, että hän väsyy nykyään eri tavalla?",
              options: [
                "Työ rasittaa kehoa mutta ei mieltä.",
                "Hän tekee nykyään pidempiä päiviä kuin pankissa.",
                "Hän nukkuu nykyään huonommin kuin ennen.",
              ],
              answer: 0,
              explain: "“kädet ja selkä ovat illalla kipeät, mutta pää on levännyt.”",
            },
            {
              id: "k13r4q3",
              type: "mc",
              q: "Mitä kirjoittaja kertoo pankkivuosiensa merkityksestä nykyisessä työssään?",
              options: [
                "Hän katuu, että pysyi pankissa niin pitkään.",
                "Pankkivuosista ei ole ollut hänelle juuri hyötyä käsityöammatissa.",
                "Pankissa opitut taidot ovat osoittautuneet hyödyllisiksi.",
              ],
              answer: 2,
              explain:
                "“Yllättävämpää oli huomata, kuinka paljon pankkivuosista on ollut hyötyä” — quotes, negotiation, paperwork. “Mikään aiempi ei siis mennyt hukkaan.”",
            },
            {
              id: "k13r4q4",
              type: "mc",
              q: "Miksi kirjoittaja ei suosittele kaikille samaa ratkaisua?",
              options: [
                "Kaikilla ei ole samanlaista tukea ja taloudellista turvaa kuin hänellä.",
                "Hänen mielestään unelmien seuraaminen on yleensä virhe.",
                "Puusepille ei ole tarpeeksi töitä.",
              ],
              answer: 0,
              explain: "She had a supportive spouse and savings that carried them through her studies: “Kaikilla ei ole kumpaakaan.”",
            },
            {
              id: "k13r4q5",
              type: "mc",
              q: "Mikä seuraavista on kolumnissa mielipide eikä tosiasia?",
              options: [
                "Kirjoittajan tulot putosivat opiskelun aikana alle puoleen.",
                "Yhteiskunnan pitäisi helpottaa alanvaihtoa.",
                "Kirjoittaja työskentelee nykyään pienessä verstaassa.",
              ],
              answer: 1,
              explain: "“Siksi yhteiskunnan pitäisi mielestäni tehdä alanvaihdosta helpompaa” is the writer's opinion; the others are facts from her life.",
            },
            {
              id: "k13r4q6",
              type: "mc",
              q: "Mitä kirjoittaja vastasi entiselle esihenkilölleen?",
              options: [
                "Kenenkään ei ole koskaan liian myöhäistä aloittaa alusta.",
                "Ennen alanvaihtoa kannattaa ensin kerätä säästöjä.",
                "Etukäteen ei voi tietää, onnistuuko, mutta yrittämättä ei ainakaan muutu mitään.",
              ],
              answer: 2,
              explain:
                "“ettei sitä tiedä kukaan etukäteen. Mutta sen ainakin tietää, mitä tapahtuu, jos ei koskaan yritä.” She does not claim it is never too late.",
            },
          ],
        },
        {
          id: "k13r5",
          title: "Tehtävä 5: Mielipidekirjoitus",
          instructions: {
            fi: "Lue mielipidekirjoitus. Ovatko väitteet oikein vai väärin?",
            en: "Read the letter to the editor. Are the statements true (oikein) or false (väärin)?",
          },
          text: {
            title: "Puhukaa minulle suomea – vaikka se on hidasta",
            body:
              "Muutin Suomeen neljä vuotta sitten ja olen opiskellut suomea siitä asti. Työskentelen logistiikkayrityksessä, jossa suurin osa työkavereistani " +
              "on suomalaisia. Kun aloitin, en osannut suomea juuri lainkaan, ja olin kiitollinen siitä, että kaikki puhuivat minulle englantia.\n\n" +
              "Nyt tilanne on toinen. Ymmärrän lähes kaiken, mitä kahvihuoneessa puhutaan, ja pystyn hoitamaan suurimman osan työasioista suomeksi. Silti " +
              "kollegani vaihtavat englantiin heti, kun tulen paikalle tai kun en löydä sanaa tarpeeksi nopeasti. Tiedän, että he tekevät sen ystävällisyyttään. " +
              "He eivät halua, että minulle tulee paha mieli. Lopputulos on kuitenkin se, että harjoittelen suomea enemmän kaupan kassalla kuin työpaikalla, " +
              "jossa vietän kahdeksan tuntia päivässä.\n\n" +
              "Ymmärrän, että kiireessä englanti on joskus nopeampaa. Turvallisuuteen liittyvät ohjeet on myös tärkeää saada kielellä, jonka ymmärtää varmasti. " +
              "En siis vaadi, että englannin käyttö kielletään. Pyydän vain, että minulle annetaan mahdollisuus.\n\n" +
              "Työpaikallamme kokeiltiin viime keväänä niin sanottuja kielimerkkejä. Rintaan kiinnitetty merkki kertoi, että henkilö haluaa puhua suomea, vaikka " +
              "se olisi hidasta. Kokeilu toimi hyvin, mutta se loppui, kun sitä vetänyt henkilöstöpäällikkö vaihtoi työpaikkaa. Toivon, että johto ottaisi " +
              "käytännön uudelleen käyttöön ja että kaikki muistaisivat yhden asian: kieltä ei opi kuuntelemalla, miten muut sitä puhuvat, vaan puhumalla itse.\n\n" +
              "Ana Ferreira",
          },
          questions: [
            {
              id: "k13r5q1",
              type: "tf",
              q: "Kirjoittaja ei osannut suomea juuri ollenkaan aloittaessaan nykyisessä työpaikassaan.",
              answer: true,
              explain: "“Kun aloitin, en osannut suomea juuri lainkaan.”",
            },
            {
              id: "k13r5q2",
              type: "tf",
              q: "Kirjoittaja ymmärtää nykyään kaiken, mitä työpaikalla puhutaan.",
              answer: false,
              explain: "She understands “lähes kaiken” — almost everything, not everything.",
            },
            {
              id: "k13r5q3",
              type: "tf",
              q: "Kirjoittajan mukaan kollegat vaihtavat englantiin, koska he eivät jaksa odottaa hänen vastauksiaan.",
              answer: false,
              explain: "“Tiedän, että he tekevät sen ystävällisyyttään. He eivät halua, että minulle tulee paha mieli.”",
            },
            {
              id: "k13r5q4",
              type: "tf",
              q: "Kirjoittajan mielestä turvallisuusohjeet on hyvä antaa kielellä, jota työntekijä ymmärtää varmasti.",
              answer: true,
              explain: "“Turvallisuuteen liittyvät ohjeet on myös tärkeää saada kielellä, jonka ymmärtää varmasti.”",
            },
            {
              id: "k13r5q5",
              type: "tf",
              q: "Kielimerkkikokeilu lopetettiin, koska työntekijät eivät pitäneet siitä.",
              answer: false,
              explain: "“Kokeilu toimi hyvin, mutta se loppui, kun sitä vetänyt henkilöstöpäällikkö vaihtoi työpaikkaa.”",
            },
            {
              id: "k13r5q6",
              type: "tf",
              q: "Kirjoittaja ei vastusta englannin käyttämistä työpaikalla.",
              answer: true,
              explain: "“En siis vaadi, että englannin käyttö kielletään. Pyydän vain, että minulle annetaan mahdollisuus.”",
            },
          ],
        },
        {
          id: "k13r6",
          title: "Tehtävä 6: Ohje",
          instructions: {
            fi: "Lue ohje ja vastaa kysymyksiin suomeksi. Vastaa lyhyesti.",
            en: "Read the instructions and answer the questions in Finnish. Answer briefly.",
          },
          text: {
            title: "Kun jaksaminen on koetuksella – näin työterveyshuolto auttaa",
            body:
              "Väsymys, univaikeudet, keskittymisongelmat ja ärtyisyys voivat olla merkkejä siitä, että työn kuormitus on liian suurta. Mitä aikaisemmin asiaan " +
              "tartutaan, sitä nopeammin tilanne yleensä korjaantuu. Ota yhteyttä työterveyshuoltoon jo silloin, kun huomaat ensimmäisiä oireita. Älä odota, " +
              "että et enää jaksa mennä töihin.\n\n" +
              "1. Varaa aika työterveyshoitajalle sähköisessä asiointipalvelussa tai soittamalla ajanvaraukseen. Käynti on työntekijälle maksuton, eikä " +
              "esihenkilösi saa tietää, mistä asiasta olet käynyt.\n" +
              "2. Hoitaja kartoittaa tilanteesi kyselyn ja keskustelun avulla. Tarvittaessa hän ohjaa sinut työterveyslääkärille tai -psykologille. " +
              "Psykologin vastaanotolle voi saada enintään viisi käyntiä.\n" +
              "3. Jos kuormitus johtuu esimerkiksi työmäärästä tai työjärjestelyistä, voidaan järjestää työterveysneuvottelu. Siihen osallistuvat sinä, " +
              "esihenkilösi ja työterveyshuollon edustaja. Neuvottelu järjestetään vain, jos annat siihen luvan.\n\n" +
              "Jos lääkäri kirjoittaa sinulle sairauslomaa, toimita todistus työnantajalle työpaikkasi ohjeen mukaisesti. Sairausloman aikana on tärkeää levätä, " +
              "mutta myös liikkua, ulkoilla ja tavata läheisiä, sillä eristäytyminen voi hidastaa toipumista.\n\n" +
              "Jos tilanne on kiireellinen, esimerkiksi jos sinulla on itsetuhoisia ajatuksia, älä odota työterveyden aikaa, vaan hakeudu heti päivystykseen " +
              "tai soita kriisipuhelimeen.",
          },
          questions: [
            {
              id: "k13r6q1",
              type: "open",
              q: "Missä vaiheessa työterveyshuoltoon kannattaa ohjeen mukaan ottaa yhteyttä?",
              accept: [
                "heti kun huomaa ensimmäisiä oireita",
                "jo silloin, kun oireet alkavat, eikä vasta kun ei jaksa",
                "mahdollisimman aikaisin",
              ],
              keyNote: "As soon as the first symptoms appear — not only when one can no longer manage to go to work.",
              explain: "“Ota yhteyttä työterveyshuoltoon jo silloin, kun huomaat ensimmäisiä oireita. Älä odota, että et enää jaksa mennä töihin.”",
            },
            {
              id: "k13r6q2",
              type: "open",
              q: "Mitä työntekijän on hyvä tietää työterveyshoitajan käynnistä?",
              hint: "(2 asiaa)",
              accept: [
                "se on maksuton eikä esihenkilö saa tietää käynnin syytä",
                "ilmainen ja luottamuksellinen",
                "ei maksa mitään, ja pomo ei saa tietää, miksi kävi",
              ],
              keyNote: "Both: the visit is free for the employee AND the supervisor will not find out what the visit was about.",
              explain: "“Käynti on työntekijälle maksuton, eikä esihenkilösi saa tietää, mistä asiasta olet käynyt.”",
            },
            {
              id: "k13r6q3",
              type: "open",
              q: "Millä ehdolla työterveysneuvottelu järjestetään?",
              accept: ["jos työntekijä antaa luvan", "vain työntekijän luvalla", "jos itse suostuu siihen"],
              keyNote: "Only if the employee gives permission.",
              explain: "“Neuvottelu järjestetään vain, jos annat siihen luvan.”",
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
          id: "k13w1",
          title: "Tehtävä 1: Viesti esihenkilölle",
          instructions: { fi: "Kirjoita viesti. Kirjoita noin 80–150 sanaa.", en: "Write a message of about 80–150 words." },
          prompt:
            "Olet työskennellyt kolme vuotta kaupan varastossa. Olet päättänyt vaihtaa alaa, ja syksyllä aloitat sähköasentajan koulutuksen aikuisopiskelijana. " +
            "Haluaisit jatkaa työtä opiskelun ohessa. Kirjoita sähköposti esihenkilöllesi Markku Lehtiselle.",
          bullets: [
            "Kerro, mitä aiot opiskella ja miksi.",
            "Kerro, milloin opinnot alkavat ja miten ne on järjestetty.",
            "Ehdota, miten työaikasi voisi muuttua opiskelun ajaksi.",
            "Kerro, miten huolehdit siitä, että työt hoituvat myös muutoksen aikana.",
            "Pyydä tapaamista ja ehdota sille aikaa.",
            "Kerro lisäksi ainakin kaksi muuta asiaa.",
            "Muista aloitus ja lopetus.",
          ],
          promptEn:
            "You have worked in a shop's warehouse for three years and are starting an electrician's training as an adult student in the autumn. You would like to keep working alongside your studies. Email your supervisor Markku Lehtinen: say what you will study and why, when the studies start and how they are organised, suggest how your working hours could change, explain how you will make sure the work gets done, ask for a meeting and suggest a time, and add at least two more points of your own.",
          register:
            "formal email to a supervisor: Hei Markku / Hyvä Markku Lehtinen … Ystävällisin terveisin + full name; polite conditional (haluaisin, olisiko mahdollista, voisimmeko)",
          minWords: 80,
          maxWords: 150,
        },
        {
          id: "k13w2",
          title: "Tehtävä 2: Viesti entiselle työkaverille",
          instructions: { fi: "Kirjoita viesti. Kirjoita noin 60–120 sanaa.", en: "Write a message of about 60–120 words." },
          prompt:
            "Vaihdoit kuukausi sitten työpaikkaa. Entinen työkaverisi Sanna lähetti sinulle viestin ja kysyi, miten uudessa työssä menee. Vastaa hänelle.",
          bullets: [
            "Kiitä viestistä ja kerro, millaisia ensimmäiset viikot ovat olleet.",
            "Kerro jostain tapahtumasta, joka yllätti sinut uudessa työpaikassa.",
            "Kerro, mitä kaipaat vanhasta työpaikasta.",
            "Ehdota tapaamista ja kerro, mitä voisitte tehdä.",
            "Muista aloitus ja lopetus.",
          ],
          promptEn:
            "A month ago you changed jobs; your former colleague Sanna asked how the new job is going. Reply: thank her and describe the first weeks, tell about something that surprised you at the new workplace, say what you miss about the old one, and suggest meeting up and what you could do.",
          register: "informal message to a former colleague: Moi Sanna! / Hei Sanna! … Terveisin / Nähdään pian! + first name; past tense narration, colloquial tone allowed",
          minWords: 60,
          maxWords: 120,
        },
        {
          id: "k13w3",
          title: "Tehtävä 3: Mielipideteksti",
          instructions: { fi: "Kirjoita mielipideteksti. Kirjoita noin 100–180 sanaa.", en: "Write an opinion text of about 100–180 words." },
          prompt: "Ammattiliiton jäsenlehti kerää verkkosivuilleen jäsenten mielipiteitä työelämästä. Valitse aihe A tai B ja kirjoita mielipidekirjoitus.",
          bullets: [
            "A. Useat yritykset ovat kokeilleet nelipäiväistä työviikkoa ilman, että palkka pienenee. Pitäisikö siitä tehdä Suomessa yleinen käytäntö?",
            "B. Monilla työpaikoilla käytetään yhä enemmän englantia, myös silloin, kun kaikki osaavat suomea. Onko se hyvä kehitys?",
            "Kerro, mistä on kyse ja mitä mieltä olet asiasta. Perustele mielipiteesi ainakin kolmella tavalla.",
          ],
          promptEn:
            "A trade union's members' magazine collects opinions on working life. Choose A (should a four-day week without a pay cut become the norm in Finland?) or B (more and more English is used at workplaces, even when everyone knows Finnish — is this a good development?). Say what the issue is and what you think, and justify your opinion in at least three ways.",
          register:
            "opinion text for a magazine website: neutral written style, a clear opening statement, linked arguments (ensinnäkin, lisäksi, toisaalta, siksi), a conclusion; no greeting needed, may end with name/signature",
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
          id: "k13l1",
          title: "Tehtävä 1: Haastattelu",
          instructions: {
            fi: "Kuulet haastattelun kaksi kertaa. Lue ensin kysymykset. Valitse oikea vaihtoehto.",
            en: "You will hear an interview twice. Read the questions first. Choose the correct option.",
          },
          situation: "Radion terveysohjelmassa haastatellaan Mikko Virtasta, joka uupui työssään ja palasi töihin puolen vuoden sairausloman jälkeen.",
          plays: 2,
          rate: 1.0,
          lines: [
            {
              speaker: "Toimittaja",
              text: "Mikko, sä olit projektipäällikkönä rakennusalalla, kun sä uuvuit. Miten se alkoi?",
            },
            {
              speaker: "Mikko",
              text:
                "No, ei se tullut yhtäkkiä. Jälkikäteen ajateltuna merkkejä oli ainakin vuoden ajan. Mä nukuin huonosti, unohtelin asioita ja ärsyynnyin ihan pienistä jutuista. " +
                "Mutta mä ajattelin, että se on vaan kiireinen kausi, joka menee ohi, kun projekti valmistuu.",
            },
            { speaker: "Toimittaja", text: "Mikä sai sut lopulta hakemaan apua?" },
            {
              speaker: "Mikko",
              text:
                "Itse asiassa vaimo. Mä olin yhtenä aamuna autossa työpaikan parkkipaikalla enkä pystynyt nousemaan autosta. Istuin siinä varmaan puoli tuntia. " +
                "Kun kerroin siitä illalla kotona, vaimo varasi mulle saman tien ajan työterveyteen. Itse en ois sitä tehnyt.",
            },
            { speaker: "Toimittaja", text: "Millaista sairausloman alku oli?" },
            {
              speaker: "Mikko",
              text:
                "Alussa mä lähinnä nukuin. Ensimmäiset kuukaudet oli tosi raskaita, koska mulla oli huono omatunto. Mä ajattelin koko ajan, että työkaverit joutuu tekemään mun työt. " +
                "Psykologi auttoi mua ymmärtämään, ettei uupuminen ollut mun henkilökohtainen epäonnistuminen, vaan siihen vaikutti myös se, miten työ oli järjestetty.",
            },
            { speaker: "Toimittaja", text: "Miten paluu töihin järjestettiin?" },
            {
              speaker: "Mikko",
              text:
                "Me sovittiin työterveysneuvottelussa, että mä aloitan osa-aikaisesti, eli neljä tuntia päivässä. Lisäksi mulla ei oo enää kolmea projektia yhtä aikaa, vaan yksi kerrallaan. " +
                "Ja mä en lue työsähköposteja iltaisin. Se oli aluksi yllättävän vaikeaa.",
            },
            { speaker: "Toimittaja", text: "Mitä haluaisit sanoa kuulijoille, jotka tunnistaa itsessään samoja merkkejä?" },
            {
              speaker: "Mikko",
              text:
                "Ettei kannata odottaa niin pitkään kuin mä. Ja että kannattaa puhua jollekin, vaikka työkaverille. Kun mä palasin töihin, moni kollega kertoi, " +
                "että ne oli huomannut mun väsymyksen jo kauan sitten, mutta kukaan ei ollut uskaltanut sanoa mitään.",
            },
          ],
          questions: [
            {
              id: "k13l1q1",
              type: "mc",
              q: "Miten Mikon uupuminen alkoi?",
              options: [
                "Se tuli yllättäen yhden kiireisen projektin aikana.",
                "Oireita oli pitkään, mutta hän piti niitä ohimenevinä.",
                "Hän sairastui ensin johonkin fyysiseen sairauteen.",
              ],
              answer: 1,
              explain:
                "“ei se tullut yhtäkkiä … merkkejä oli ainakin vuoden ajan”, but he thought it was “vaan kiireinen kausi, joka menee ohi”.",
            },
            {
              id: "k13l1q2",
              type: "mc",
              q: "Kuka sai Mikon hakemaan apua?",
              options: ["hänen esihenkilönsä", "hänen työkaverinsa", "hänen vaimonsa"],
              answer: 2,
              explain: "“Itse asiassa vaimo … vaimo varasi mulle saman tien ajan työterveyteen.”",
            },
            {
              id: "k13l1q3",
              type: "mc",
              q: "Mikä teki sairausloman alusta raskaan?",
              options: [
                "Hän tunsi syyllisyyttä siitä, että muut tekivät hänen työnsä.",
                "Hän ei saanut nukuttua.",
                "Hän joutui hoitamaan työasioita kotoa käsin.",
              ],
              answer: 0,
              explain: "“mulla oli huono omatunto … työkaverit joutuu tekemään mun työt.” At first he mostly slept, so B is wrong.",
            },
            {
              id: "k13l1q4",
              type: "mc",
              q: "Mitä psykologi auttoi Mikkoa ymmärtämään?",
              options: [
                "Hänen olisi pitänyt hakea apua paljon aiemmin.",
                "Uupumiseen vaikuttivat myös työn järjestelyt.",
                "Hänen kannattaisi vaihtaa kokonaan toiselle alalle.",
              ],
              answer: 1,
              explain: "Burnout was not a personal failure: “siihen vaikutti myös se, miten työ oli järjestetty.”",
            },
            {
              id: "k13l1q5",
              type: "mc",
              q: "Mitä Mikon työssä on muutettu?",
              options: [
                "Hänellä on nyt vain yksi projekti kerrallaan.",
                "Hän tekee nykyään kaikki työt etänä.",
                "Hän on siirtynyt kokonaan toisiin tehtäviin.",
              ],
              answer: 0,
              explain: "“mulla ei oo enää kolmea projektia yhtä aikaa, vaan yksi kerrallaan.” He also started part-time and stopped reading email in the evenings.",
            },
            {
              id: "k13l1q6",
              type: "mc",
              q: "Mitä Mikko kuuli työkavereiltaan palattuaan töihin?",
              options: [
                "He olivat joutuneet tekemään paljon ylitöitä hänen poissaolonsa takia.",
                "He olivat yrittäneet puhua hänelle, mutta hän ei ollut kuunnellut.",
                "He olivat huomanneet hänen väsymyksensä jo kauan aiemmin.",
              ],
              answer: 2,
              explain: "“ne oli huomannut mun väsymyksen jo kauan sitten, mutta kukaan ei ollut uskaltanut sanoa mitään.”",
            },
          ],
        },
        {
          id: "k13l2",
          title: "Tehtävä 2: Keskustelu kaupassa",
          instructions: {
            fi: "Kuulet keskustelun kaksi kertaa. Ovatko väitteet oikein vai väärin?",
            en: "You will hear a conversation twice. Are the statements true or false?",
          },
          situation: "Asiakas tulee pyöräliikkeeseen, koska hän harkitsee sähköpyörän ostamista työmatkoja varten.",
          plays: 2,
          rate: 1.0,
          lines: [
            { speaker: "Myyjä", text: "Moi, voinko auttaa?" },
            {
              speaker: "Asiakas",
              text:
                "Moi. Mä mietin sähköpyörää. Mun työmatka on noin viisitoista kilometriä suuntaansa, ja nyt mä ajan sen autolla. Mutta bensa on niin kallista, että ajattelin kokeilla jotain muuta.",
            },
            {
              speaker: "Myyjä",
              text: "Viisitoista kilometriä on sähköpyörällä ihan sopiva matka. Siihen menee varmaan noin neljäkymmentä minuuttia. Ajatteletko ajaa myös talvella?",
            },
            { speaker: "Asiakas", text: "Joo, jos se vaan onnistuu. Tai no, ehkä ei ihan kovimmilla pakkasilla." },
            {
              speaker: "Myyjä",
              text: "Talveksi kannattaa vaihtaa nastarenkaat, ja akku kannattaa säilyttää sisällä, koska kylmässä se tyhjenee nopeammin. Muuten talviajo onnistuu ihan hyvin.",
            },
            { speaker: "Asiakas", text: "Okei. Mitä tuo ikkunan vieressä oleva maksaa?" },
            {
              speaker: "Myyjä",
              text:
                "Se on nyt tarjouksessa, kaksituhatta neljäsataa euroa. Normaalisti se maksaa kaksituhatta yhdeksänsataa. Mutta kysyisin ensin: tarjoaako sun työnantaja työsuhdepyöräetua?",
            },
            { speaker: "Asiakas", text: "En mä tiedä. Mikä se on?" },
            {
              speaker: "Myyjä",
              text:
                "Silloin työnantaja hankkii pyörän, ja sä maksat sitä pienissä erissä palkastasi. Se tulee yleensä selvästi halvemmaksi kuin itse ostaminen. Me ollaan sopimuskumppani monelle yritykselle täällä.",
            },
            { speaker: "Asiakas", text: "Kuulostaa hyvältä. Mä kysyn huomenna meidän palkanlaskennasta. Mutta voinko mä koeajaa tätä nyt?" },
            {
              speaker: "Myyjä",
              text: "Totta kai. Tarvitsen vaan jonkun henkilöllisyystodistuksen panttina. Ja ajathan vaan tässä korttelin ympäri.",
            },
            { speaker: "Asiakas", text: "Tässä ajokortti. Ai niin, onko pyörällä takuu?" },
            {
              speaker: "Myyjä",
              text: "Pyörällä on kahden vuoden takuu ja akulla vuoden. Ja ensimmäinen huolto kuukauden päästä on ilmainen.",
            },
          ],
          questions: [
            {
              id: "k13l2q1",
              type: "tf",
              q: "Asiakas kulkee nykyään töihin bussilla.",
              answer: false,
              explain: "“nyt mä ajan sen autolla.”",
            },
            {
              id: "k13l2q2",
              type: "tf",
              q: "Asiakas aikoo pyöräillä töihin myös kaikkein kylmimpinä päivinä.",
              answer: false,
              explain: "“ehkä ei ihan kovimmilla pakkasilla.”",
            },
            {
              id: "k13l2q3",
              type: "tf",
              q: "Myyjän mukaan akku kannattaa talvella säilyttää sisätiloissa.",
              answer: true,
              explain: "“akku kannattaa säilyttää sisällä, koska kylmässä se tyhjenee nopeammin.”",
            },
            {
              id: "k13l2q4",
              type: "tf",
              q: "Ikkunan vieressä oleva pyörä maksaa tarjouksessa kaksituhatta yhdeksänsataa euroa.",
              answer: false,
              explain: "The offer price is 2 400 €; 2 900 € is the normal price.",
            },
            {
              id: "k13l2q5",
              type: "tf",
              q: "Asiakas ei vielä tiedä, voiko hän saada pyörän työnantajansa kautta.",
              answer: true,
              explain: "“En mä tiedä. … Mä kysyn huomenna meidän palkanlaskennasta.”",
            },
            {
              id: "k13l2q6",
              type: "tf",
              q: "Pyörän akulla on yhtä pitkä takuu kuin pyörällä.",
              answer: false,
              explain: "“Pyörällä on kahden vuoden takuu ja akulla vuoden.”",
            },
          ],
        },
        {
          id: "k13l3",
          title: "Tehtävä 3: Puhelu ammattiliittoon",
          instructions: {
            fi: "Kuulet puhelun kaksi kertaa. Lue ensin kysymykset. Vastaa lyhyesti suomeksi.",
            en: "You will hear a phone call twice. Read the questions first. Answer briefly in Finnish.",
          },
          situation: "Sami soittaa ammattiliittonsa jäsenneuvontaan.",
          plays: 2,
          rate: 1.0,
          lines: [
            { speaker: "Kirsi", text: "Ammattiliitto Ahjo, jäsenneuvonta, Kirsi puhelimessa." },
            {
              speaker: "Sami",
              text:
                "Hei, Sami Laaksonen täällä. Mä oon töissä ravintolassa kokkina, ja mulla on kysymys ylitöistä. Mä tein viime kuussa monta kertaa pidempiä vuoroja, mutta palkkalaskelmassa ei näy mitään ylityökorvauksia.",
            },
            { speaker: "Kirsi", text: "Selvä. Onko teillä kirjallinen työsopimus?" },
            { speaker: "Sami", text: "On. Siinä lukee, että työaika on kolmekymmentäseitsemän ja puoli tuntia viikossa." },
            { speaker: "Kirsi", text: "Hyvä. Kuinka paljon lisätunteja kertyi?" },
            {
              speaker: "Sami",
              text: "Sanotaan noin kaksikymmentä tuntia. Ei kun oikeastaan enemmän, kaksikymmentäneljä. Mä kirjoitin ne joka päivä kalenteriin.",
            },
            { speaker: "Kirsi", text: "Tosi hyvä, että olette pitänyt kirjaa. Oletteko puhunut asiasta esihenkilön kanssa?" },
            {
              speaker: "Sami",
              text: "Mä kysyin kerran, ja hän sanoi, että ne tunnit pidetään vapaana sitten hiljaisempana aikana. Mutta mä en oo ikinä suostunut siihen.",
            },
            {
              speaker: "Kirsi",
              text:
                "Ylitöiden korvaamisesta vapaana voidaan kyllä sopia, mutta siitä pitää sopia yhdessä. Työnantaja ei voi päättää sitä yksin. Mä ehdottaisin, että lähetätte esihenkilölle sähköpostin, " +
                "jossa luettelette tunnit päivämäärineen ja pyydätte korvausta seuraavassa palkanmaksussa. Sähköposti on parempi kuin suullinen pyyntö, koska siitä jää todiste.",
            },
            { speaker: "Sami", text: "Entä jos se ei auta?" },
            {
              speaker: "Kirsi",
              text:
                "Sitten ottakaa yhteyttä työpaikkanne luottamusmieheen, jos teillä on sellainen. Jos ei ole, liiton lakimies voi selvittää asiaa työnantajan kanssa, ja se on jäsenelle maksutonta. " +
                "Lähettäkää vielä minulle kopio palkkalaskelmasta ja tuntikirjanpidostanne, niin kirjaan asian järjestelmään.",
            },
            { speaker: "Sami", text: "Selvä, kiitos paljon!" },
          ],
          questions: [
            {
              id: "k13l3q1",
              type: "open",
              q: "Miksi Sami soittaa liittoon?",
              accept: [
                "hän ei ole saanut korvausta ylitöistä",
                "ylityökorvaukset puuttuvat palkkalaskelmasta",
                "ylitöitä ei ole maksettu",
              ],
              keyNote: "He worked overtime last month but has not been paid any overtime compensation (it is missing from the payslip).",
              explain: "“palkkalaskelmassa ei näy mitään ylityökorvauksia.”",
            },
            {
              id: "k13l3q2",
              type: "open",
              q: "Kuinka monta lisätuntia Samille kertyi?",
              accept: ["24", "kaksikymmentäneljä", "24 tuntia"],
              keyNote: "24 hours. Twenty is wrong — Sami corrects himself.",
              explain: "“Sanotaan noin kaksikymmentä tuntia. Ei kun oikeastaan enemmän, kaksikymmentäneljä.”",
            },
            {
              id: "k13l3q3",
              type: "open",
              q: "Mitä Samin pitää kirjoittaa esihenkilölle lähetettävään sähköpostiin?",
              hint: "(2 asiaa)",
              accept: [
                "ylityötunnit päivämäärineen ja pyyntö saada korvaus seuraavassa palkanmaksussa",
                "luettelo tunneista ja päivämääristä sekä pyyntö maksaa ne seuraavan palkan mukana",
              ],
              keyNote: "Both: a list of the extra hours with dates AND a request to be paid for them in the next payroll.",
              explain: "“luettelette tunnit päivämäärineen ja pyydätte korvausta seuraavassa palkanmaksussa.”",
            },
            {
              id: "k13l3q4",
              type: "open",
              q: "Mitä Samin pitää lähettää Kirsille?",
              hint: "(2 asiaa)",
              accept: [
                "kopio palkkalaskelmasta ja tuntikirjanpidosta",
                "palkkalaskelma ja kirjanpito tunneista",
              ],
              keyNote: "Both: a copy of the payslip AND his record of working hours.",
              explain: "“Lähettäkää vielä minulle kopio palkkalaskelmasta ja tuntikirjanpidostanne.”",
            },
          ],
        },
        {
          id: "k13l4",
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
                "Yhä useampi työpaikka tarjoaa ulkomaalaistaustaisille työntekijöilleen suomen kielen opetusta työajalla. Tämä selviää työnantajajärjestön tuoreesta kyselystä, " +
                "johon vastasi noin tuhat yritystä. Kielikoulutusta järjesti kyselyn mukaan joka kolmas yritys, kun viisi vuotta sitten osuus oli alle viidennes.",
            },
            {
              speaker: "Uutistenlukija",
              text:
                "Eniten koulutusta tarjotaan hoiva-alalla, jolla kielitaidolle on myös tiukimmat vaatimukset. Rakennus- ja siivousalalla opetusta järjestetään selvästi harvemmin, " +
                "vaikka niillä työskentelee paljon maahanmuuttajia. Kyselyn mukaan syynä on se, että työtä tehdään usein eri työmailla, eikä yhteistä opetusaikaa löydy helposti. " +
                "Myös pienissä, alle kymmenen hengen yrityksissä kielikoulutus on harvinaista. Niille oppilaitokset tarjoavat nykyään yhteisiä kursseja, joille voi osallistua usean yrityksen työntekijöitä.",
            },
            {
              speaker: "Uutistenlukija",
              text:
                "Työnantajat pitivät tärkeimpänä hyötynä sitä, että työturvallisuus paranee, kun ohjeet ymmärretään oikein. Lähes yhtä moni mainitsi, " +
                "että suomea oppineet työntekijät sitoutuvat työpaikkaansa ja vaihtavat harvemmin työnantajaa.",
            },
            {
              speaker: "Uutistenlukija",
              text:
                "Järjestön asiantuntija muistuttaa, että pelkkä kurssi ei riitä. Hänen mukaansa kieli opitaan arjen työtilanteissa, ja siksi suomalaisten työkavereiden " +
                "pitäisi rohkeammin puhua selkeää suomea eikä vaihtaa heti englantiin.",
            },
          ],
          questions: [
            {
              id: "k13l4q1",
              type: "mc",
              q: "Mitä kysely kertoo kielikoulutuksesta?",
              options: [
                "Kielikoulutusta järjestävien yritysten osuus on kasvanut.",
                "Joka viides yritys järjestää nykyään kielikoulutusta.",
                "Kielikoulutusta on viidessä vuodessa vähennetty.",
              ],
              answer: 0,
              explain: "Now “joka kolmas yritys”, five years ago “alle viidennes” — the share has grown.",
            },
            {
              id: "k13l4q2",
              type: "mc",
              q: "Millä alalla kielikoulutusta tarjotaan eniten?",
              options: ["rakennusalalla", "hoiva-alalla", "siivousalalla"],
              answer: 1,
              explain: "“Eniten koulutusta tarjotaan hoiva-alalla.” Construction and cleaning offer it clearly less often.",
            },
            {
              id: "k13l4q3",
              type: "mc",
              q: "Miksi rakennus- ja siivousalalla on vähemmän kielikoulutusta?",
              options: [
                "Niillä työskentelee vain vähän maahanmuuttajia.",
                "Niiden työntekijät eivät ole kiinnostuneita kursseista.",
                "Työntekijöille on vaikea löytää yhteistä aikaa opetukselle.",
              ],
              answer: 2,
              explain: "Work is done at different sites “eikä yhteistä opetusaikaa löydy helposti”. Many immigrants do work in these fields.",
            },
            {
              id: "k13l4q4",
              type: "mc",
              q: "Mitä työnantajat pitivät kielikoulutuksen tärkeimpänä hyötynä?",
              options: [
                "Työntekijät vaihtavat harvemmin työpaikkaa.",
                "Työturvallisuus paranee.",
                "Asiakaspalvelun laatu paranee.",
              ],
              answer: 1,
              explain: "The most important benefit is safety; staying with the employer was mentioned “lähes yhtä” often — the second.",
            },
            {
              id: "k13l4q5",
              type: "mc",
              q: "Mitä asiantuntija ehdottaa?",
              options: [
                "Suomalaisten työkavereiden pitäisi puhua enemmän selkeää suomea.",
                "Työpaikoille pitäisi järjestää enemmän kielikursseja.",
                "Kurssit pitäisi järjestää työajan ulkopuolella.",
              ],
              answer: 0,
              explain: "“pelkkä kurssi ei riitä … suomalaisten työkavereiden pitäisi rohkeammin puhua selkeää suomea.”",
            },
          ],
        },
        {
          id: "k13l5",
          title: "Tehtävä 5: Mainoksia ja tiedotteita",
          instructions: {
            fi: "Kuulet viisi lyhyttä mainosta tai tiedotetta kaksi kertaa. Jokaisesta on yksi väite. Onko väite oikein vai väärin?",
            en: "You will hear five short adverts or announcements twice. There is one statement about each. Is it true or false?",
          },
          situation: "Kuulet radiosta ja työpaikan tiedotuskanavilta lyhyitä mainoksia ja tiedotteita.",
          plays: 2,
          rate: 1.0,
          lines: [
            {
              speaker: "Mainos 1",
              text:
                "Kyytikaveri-sovellus yhdistää samaan suuntaan matkustavat työmatkalaiset. Kuljettaja saa matkustajilta korvauksen polttoainekuluista, mutta voittoa kyydeillä ei saa tehdä. " +
                "Sovelluksen käyttö on maksutonta ensimmäiset kolme kuukautta.",
            },
            {
              speaker: "Tiedote 2",
              text:
                "Ammattiliiton paikallisosasto järjestää torstaina jäsenillan, jossa käydään läpi uuden työehtosopimuksen tärkeimmät muutokset. " +
                "Tilaisuus on avoin myös muille kuin jäsenille. Kahvitarjoilun vuoksi ilmoittauduthan tiistaihin mennessä.",
            },
            {
              speaker: "Mainos 3",
              text:
                "Mietitkö alanvaihtoa? Urapolku-valmennuksessa selvität vahvuutesi ja teet suunnitelman uudelle uralle. Valmennus kestää kolme kuukautta, ja tapaamiset ovat iltaisin. " +
                "Ensimmäinen tapaaminen on maksuton, ja vasta sen jälkeen päätät, jatkatko.",
            },
            {
              speaker: "Tiedote 4",
              text:
                "Kehätien liittymän korjaustyöt alkavat maanantaina ja kestävät kuusi viikkoa. Aamuruuhkassa voi olla jopa puolen tunnin viivytyksiä. " +
                "Autoilijoita suositellaan jättämään auto Koivukeskuksen liityntäpysäköintiin, joka on töiden ajan maksuton, ja jatkamaan matkaa junalla. " +
                "Pyöräilijöille ja jalankulkijoille on merkitty kiertotie.",
            },
            {
              speaker: "Mainos 5",
              text:
                "Uutta Kuntokeskus Vireessä: lounasjooga arkipäivisin kello kahdestatoista puoli yhteen. Puolen tunnin harjoitus sopii hyvin työpäivän keskelle. " +
                "Ensimmäinen kerta on ilmainen. Ilmoittaudu sovelluksessa viimeistään edellisenä iltana.",
            },
          ],
          questions: [
            {
              id: "k13l5q1",
              type: "tf",
              q: "Mainos 1: Kuljettaja voi ansaita kyydeillä rahaa.",
              answer: false,
              explain: "The driver is compensated for fuel costs, “mutta voittoa kyydeillä ei saa tehdä”.",
            },
            {
              id: "k13l5q2",
              type: "tf",
              q: "Tiedote 2: Jäseniltaan voi osallistua, vaikka ei kuuluisi liittoon.",
              answer: true,
              explain: "“Tilaisuus on avoin myös muille kuin jäsenille.”",
            },
            {
              id: "k13l5q3",
              type: "tf",
              q: "Mainos 3: Valmennukseen on sitouduttava heti koko kolmeksi kuukaudeksi.",
              answer: false,
              explain: "The first meeting is free, “ja vasta sen jälkeen päätät, jatkatko”.",
            },
            {
              id: "k13l5q4",
              type: "tf",
              q: "Tiedote 4: Liityntäpysäköinti on korjaustöiden aikana maksutonta.",
              answer: true,
              explain: "“liityntäpysäköintiin, joka on töiden ajan maksuton.”",
            },
            {
              id: "k13l5q5",
              type: "tf",
              q: "Mainos 5: Lounasjoogaan voi ilmoittautua vielä samana aamuna.",
              answer: false,
              explain: "“Ilmoittaudu sovelluksessa viimeistään edellisenä iltana.”",
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
          id: "k13s1",
          kind: "kertominen",
          title: "Tehtävä 1: Kertominen",
          instructions: {
            fi: "Sinulla on minuutti aikaa valmistautua. Voit tehdä muistiinpanoja. Puhu noin puolitoista minuuttia. Aloita puhuminen vasta, kun kuulet äänimerkin.",
            en: "You have one minute to prepare and may take notes. Speak for about a minute and a half. Start only after the beep.",
          },
          prepSec: 60,
          card: {
            title: "Kerro, miten olet päätynyt nykyiseen työhösi tai opiskelualaasi.",
            questions: [
              "Mitä halusit tehdä työksesi, kun olit nuori?",
              "Millaisia töitä tai opintoja sinulla on ollut?",
              "Mikä on ollut tärkein käännekohta työelämässäsi?",
              "Millaista työtä haluaisit tehdä viiden vuoden kuluttua?",
            ],
          },
          items: [
            { id: "a", spoken: "Kerro, miten olet päätynyt nykyiseen työhösi tai opiskelualaasi. Aloita puhuminen nyt.", speakSec: 90 },
          ],
        },
        {
          id: "k13s2",
          kind: "keskustelu",
          title: "Tehtävä 2: Keskustelu A",
          instructions: {
            fi: "Kuulet keskustelun, jossa puhut vuorotellen toisen henkilön kanssa. Lue tilanne ja ohjeet. Puhu, kun kuulet äänimerkin.",
            en: "You will take turns with another speaker. Read the situation and the cues. Speak after the beep.",
          },
          prepSec: 30,
          card: {
            title: "Olet ollut viime viikkoina hyvin väsynyt, etkä ole nukkunut kunnolla. Soitat työterveyshuoltoon varataksesi ajan.",
            questions: [],
          },
          items: [
            {
              id: "a",
              spoken: "Työterveys Aalto, ajanvaraus, Minna puhelimessa.",
              cue: "[Esittele itsesi ja kerro, miksi soitat.]",
              speakSec: 20,
            },
            {
              id: "b",
              spoken: "Ikävä kuulla. Kertoisitteko vähän tarkemmin, millaisia oireita teillä on ollut ja kuinka kauan?",
              cue: "[Kuvaile oireitasi ja kerro, milloin ne alkoivat.]",
              speakSec: 25,
            },
            {
              id: "c",
              spoken: "Kiitos. Onko työssänne tapahtunut viime aikoina joitain muutoksia?",
              cue: "[Kerro, mitä työssäsi on tapahtunut.]",
              speakSec: 20,
            },
            {
              id: "d",
              spoken: "Ymmärrän. Työterveyshoitajalle olisi aika ensi viikon keskiviikkona kello kahdeksan. Lääkärille pääsee vasta kahden viikon päästä.",
              cue: "[Kerro, kumpi vaihtoehto sopii sinulle, ja perustele.]",
              speakSec: 20,
            },
            {
              id: "e",
              spoken: "Selvä. Haluatteko tulla vastaanotolle paikan päälle, vai sopiiko videovastaanotto?",
              cue: "[Valitse ja perustele valintasi.]",
              speakSec: 15,
            },
            {
              id: "f",
              spoken: "Hyvä, varaus on tehty. Täyttäkää ennen käyntiä vielä jaksamiskysely, jonka lähetän teille tekstiviestillä. Onko teillä vielä kysyttävää?",
              cue: "[Kysy jotain kyselystä tai käynnistä ja kiitä.]",
              speakSec: 15,
            },
          ],
        },
        {
          id: "k13s3",
          kind: "keskustelu",
          title: "Tehtävä 2: Keskustelu B",
          instructions: {
            fi: "Kuulet keskustelun, jossa puhut vuorotellen toisen henkilön kanssa. Lue tilanne ja ohjeet. Puhu, kun kuulet äänimerkin.",
            en: "You will take turns with another speaker. Read the situation and the cues. Speak after the beep.",
          },
          prepSec: 30,
          card: {
            title:
              "Työpaikkasi muuttaa ensi kuussa kaupungin laidalle, jonne on huonot bussiyhteydet. Työkaverisi Jani asuu lähelläsi ja ajaa töihin autolla. Haluat ehdottaa hänelle kimppakyytiä. Sinä aloitat.",
            questions: [],
          },
          items: [
            { id: "a", spoken: "", cue: "[Tervehdi Jania ja ehdota kimppakyytiä.]", speakSec: 15 },
            {
              id: "b",
              spoken: "Ai, sehän voisi olla hyvä idea. Mutta mä lähden aamulla jo seitsemältä. Sopisiko se sulle?",
              cue: "[Kerro, sopiiko aika, ja kerro omista työajoistasi.]",
              speakSec: 20,
            },
            {
              id: "c",
              spoken: "Okei. Entä illat? Mulla on tiistaisin ja torstaisin harrastus, ja silloin mä lähden töistä vasta kuuden jälkeen.",
              cue: "[Ehdota ratkaisua niitä päiviä varten.]",
              speakSec: 20,
            },
            {
              id: "d",
              spoken: "Joo, toimii. Pitäisikö meidän sopia jotain kuluista? Bensa on aika kallista.",
              cue: "[Ehdota, miten kulut jaetaan, ja perustele.]",
              speakSec: 20,
            },
            {
              id: "e",
              spoken: "Kuulostaa reilulta. Vielä yksi juttu: mä en tykkää, että autossa syödään. Onko sulla jotain toiveita?",
              cue: "[Kerro omista toiveistasi kimppakyydille.]",
              speakSec: 15,
            },
            {
              id: "f",
              spoken: "Hyvä, sovitaan näin. Kokeillaanko ensin kuukausi ja katsotaan sitten, miten sujuu?",
              cue: "[Vastaa ehdotukseen ja sovi, milloin aloitatte.]",
              speakSec: 15,
            },
          ],
        },
        {
          id: "k13s4",
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
              situation: "Työkaverisi kysyy, voisitko vaihtaa hänen kanssaan työvuoroa ensi lauantaina. Sinulla on silloin jo muuta menoa. Mitä sanot?",
              spoken: "Tilanne 1. Työkaverisi kysyy, voisitko vaihtaa hänen kanssaan työvuoroa ensi lauantaina. Sinulla on silloin jo muuta menoa. Mitä sanot?",
              prepSec: 20,
              speakSec: 20,
            },
            {
              id: "b",
              situation: "Junasi on myöhässä, ja tiedät, ettet ehdi ajoissa aamun palaveriin. Soitat esihenkilöllesi. Mitä sanot?",
              spoken: "Tilanne 2. Junasi on myöhässä, ja tiedät, ettet ehdi ajoissa aamun palaveriin. Soitat esihenkilöllesi. Mitä sanot?",
              prepSec: 20,
              speakSec: 30,
            },
            {
              id: "c",
              situation: "Huomaat, että palkkalaskelmastasi puuttuvat iltalisät. Soitat yrityksen palkanlaskentaan. Mitä sanot?",
              spoken: "Tilanne 3. Huomaat, että palkkalaskelmastasi puuttuvat iltalisät. Soitat yrityksen palkanlaskentaan. Mitä sanot?",
              prepSec: 20,
              speakSec: 30,
            },
            {
              id: "d",
              situation: "Työpaikan palaverissa kollegat puhuvat niin nopeasti, ettet pysy mukana. Haluat pyytää heitä puhumaan hitaammin ja selkeämmin. Mitä sanot?",
              spoken: "Tilanne 4. Työpaikan palaverissa kollegat puhuvat niin nopeasti, ettet pysy mukana. Haluat pyytää heitä puhumaan hitaammin ja selkeämmin. Mitä sanot?",
              prepSec: 20,
              speakSec: 30,
            },
            {
              id: "e",
              situation: "Työkaverisi on viime aikoina vaikuttanut hyvin väsyneeltä ja stressaantuneelta. Olet hänestä huolissasi. Mitä sanot hänelle?",
              spoken: "Tilanne 5. Työkaverisi on viime aikoina vaikuttanut hyvin väsyneeltä ja stressaantuneelta. Olet hänestä huolissasi. Mitä sanot hänelle?",
              prepSec: 20,
              speakSec: 30,
            },
          ],
        },
        {
          id: "k13s5",
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
              "A. Ammattiliitot: Kannattaako ammattiliittoon kuulua nykyään? Mitä hyötyä liitoista on työntekijöille? Miksi yhä harvempi nuori liittyy liittoon?",
              "B. Työ ja vapaa-aika: Pitäisikö työntekijöillä olla oikeus jättää työviestit lukematta työajan ulkopuolella? Miten etätyö ja älypuhelimet ovat muuttaneet työn ja vapaa-ajan rajaa? Kenen vastuulla riittävä palautuminen on?",
            ],
          },
          items: [{ id: "a", spoken: "Kerro mielipiteesi valitsemastasi aiheesta. Aloita puhuminen nyt.", speakSec: 120 }],
        },
      ],
    },
  ],
};
