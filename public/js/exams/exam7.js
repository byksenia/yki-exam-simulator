// Harjoituskoe 7
export default {
  id: "koe7",
  title: "Harjoituskoe 7",
  description: "Warranty return, parcel pickup, sales, bank and bills, phone repair, hairdresser, saving money.",
  sections: [
    // ------------------------------------------------------------------ READING
    {
      id: "reading",
      minutes: 50,
      cutoffs: { level1: 0.4, level2: 0.7 },
      tasks: [
        {
          id: "k7r1",
          title: "Tehtävä 1: Sähköposti ystävältä",
          instructions: {
            fi: "Lue sähköposti ja vastaa kysymyksiin. Valitse oikea vaihtoehto.",
            en: "Read the email and answer the questions. Choose the correct option.",
          },
          text: {
            title: "Aihe: Lauantai ja huonoa onnea",
            body:
              "Hei Sami!\n\n" +
              "Kiitos kutsusta lauantaiksi! Valitettavasti en pääse, koska lupasin olla silloin töissä kaverini puolesta. Ehkä ensi kerralla?\n\n" +
              "Minulla on ollut vähän huonoa onnea ostosten kanssa. Tilasin syyskuussa netistä kahvinkeittimen. Se oli alennuksessa, ja maksoin siitä vain 59 euroa, " +
              "vaikka normaali hinta oli 89 euroa. Kahden viikon päästä keitin lakkasi toimimasta. Onneksi sillä oli takuu. Palautin sen noutopisteen kautta, " +
              "eikä palautus maksanut mitään. Verkkokauppa lupasi ensin lähettää uuden keittimen, mutta niitä ei enää ollut varastossa. Siksi saan rahat takaisin. " +
              "Nyt ostan uuden keittimen tavallisesta kaupasta, vaikka se on vähän kalliimpi. Siellä voin ainakin katsoa tuotetta ennen kuin ostan sen.\n\n" +
              "Olen myös päättänyt alkaa säästää. Haluan matkustaa kesällä Espanjaan siskoni kanssa. Laitan joka kuukausi 80 euroa säästötilille. " +
              "Lounaan teen nyt itse kotona, enkä osta sitä enää työpaikan ravintolasta.\n\n" +
              "Soitellaan pian!\n\n" +
              "Terveisin\nLaura",
          },
          questions: [
            {
              id: "k7r1q1",
              type: "mc",
              q: "Miksi Laura ei tule Samin luo lauantaina?",
              options: [
                "Hän tekee työvuoron toisen ihmisen sijasta.",
                "Hän lähtee matkalle siskonsa kanssa.",
                "Hänen pitää hakea paketti noutopisteestä.",
              ],
              answer: 0,
              explain:
                "“lupasin olla silloin töissä kaverini puolesta” — she is working a shift for a friend. The trip with her sister is in summer; the pickup point was used for the return.",
            },
            {
              id: "k7r1q2",
              type: "mc",
              q: "Paljonko Laura maksoi kahvinkeittimestä?",
              options: ["59 euroa", "80 euroa", "89 euroa"],
              answer: 0,
              explain: "“maksoin siitä vain 59 euroa”. 89 € was the normal price; 80 € is her monthly saving.",
            },
            {
              id: "k7r1q3",
              type: "mc",
              q: "Miksi Laura saa rahat takaisin?",
              options: [
                "Takuu ei ollut enää voimassa.",
                "Verkkokauppa ei voi lähettää hänelle uutta keitintä.",
                "Hän ei halunnut samanlaista keitintä uudelleen.",
              ],
              answer: 1,
              explain:
                "Combine two sentences: the shop promised a new one, “mutta niitä ei enää ollut varastossa. Siksi saan rahat takaisin.” The machine did have a warranty.",
            },
            {
              id: "k7r1q4",
              type: "mc",
              q: "Miksi Laura ostaa uuden keittimen tavallisesta kaupasta?",
              options: [
                "Siellä keittimet ovat halvempia kuin netissä.",
                "Siellä on pidempi takuu.",
                "Siellä hän näkee keittimen ennen ostamista.",
              ],
              answer: 2,
              explain: "“Siellä voin ainakin katsoa tuotetta ennen kuin ostan sen.” The shop is actually a bit more expensive (“vaikka se on vähän kalliimpi”).",
            },
            {
              id: "k7r1q5",
              type: "mc",
              q: "Mitä Laura on muuttanut, jotta hänelle jää enemmän rahaa?",
              options: [
                "Hän säästää 89 euroa kuukaudessa.",
                "Hän vie omat eväät töihin.",
                "Hän syö lounaan työpaikan ravintolassa.",
              ],
              answer: 1,
              explain:
                "“Lounaan teen nyt itse kotona, enkä osta sitä enää työpaikan ravintolasta.” = she brings her own lunch. She saves 80 €, not 89 €.",
            },
          ],
        },
        {
          id: "k7r2",
          title: "Tehtävä 2: Tiedote noutopisteestä",
          instructions: {
            fi: "Lue tiedote. Ovatko väitteet oikein vai väärin?",
            en: "Read the notice. Are the statements true (oikein) or false (väärin)?",
          },
          text: {
            title: "Lähikaupan noutopiste muuttaa väliaikaisesti",
            body:
              "Hyvä asiakas!\n\n" +
              "Lähikauppa Kulman noutopiste on suljettu 1.11. alkaen, koska kaupassa tehdään remontti. Remontti kestää noin kuusi viikkoa. " +
              "Sinä aikana voit noutaa paketit kirjaston aulasta, osoite Torikatu 5. Kirjaston noutopiste on auki arkisin kello 10–19 ja lauantaisin kello 10–15.\n\n" +
              "Kun pakettisi on tullut noutopisteeseen, saat tekstiviestin. Paketti odottaa sinua 14 päivää. Jos et hae sitä tänä aikana, paketti palautetaan lähettäjälle.\n\n" +
              "Tarvitset paketin noutamiseen tekstiviestissä olevan koodin ja henkilökortin. Voit hakea myös toisen ihmisen paketin, " +
              "mutta silloin tarvitset häneltä valtakirjan. Pelkkä koodi ei riitä.\n\n" +
              "Huom! Pakettiautomaatti kaupan pihalla on käytössä normaalisti koko remontin ajan.\n\n" +
              "Pakettipalvelu Nopsa",
          },
          questions: [
            {
              id: "k7r2q1",
              type: "tf",
              q: "Kaupan noutopiste on kiinni noin puolitoista kuukautta.",
              answer: true,
              explain: "“Remontti kestää noin kuusi viikkoa.” Six weeks ≈ one and a half months.",
            },
            {
              id: "k7r2q2",
              type: "tf",
              q: "Jos paketti on noutopisteessä yli kaksi viikkoa, se lähetetään takaisin.",
              answer: true,
              explain: "“Paketti odottaa sinua 14 päivää. Jos et hae sitä tänä aikana, paketti palautetaan lähettäjälle.”",
            },
            {
              id: "k7r2q3",
              type: "tf",
              q: "Voit hakea ystäväsi paketin, jos hän antaa sinulle paketin koodin.",
              answer: false,
              explain: "For someone else's parcel you need their written authorisation (valtakirja): “Pelkkä koodi ei riitä.”",
            },
            {
              id: "k7r2q4",
              type: "tf",
              q: "Remontin aikana kaupan pihalla olevaa automaattia ei voi käyttää.",
              answer: false,
              explain: "“Pakettiautomaatti kaupan pihalla on käytössä normaalisti koko remontin ajan.”",
            },
          ],
        },
        {
          id: "k7r3",
          title: "Tehtävä 3: Tarjouksia ja palveluja",
          instructions: {
            fi: "Lue ilmoitukset ja vastaa kysymyksiin. Valitse oikea vaihtoehto.",
            en: "Read the adverts and answer the questions. Choose the correct option.",
          },
          texts: [
            {
              title: "A. Kampaamo Saksi",
              body:
                "Syksyn tarjous: hiustenleikkaus 35 €, opiskelijoille ja eläkeläisille 29 €. Tarjous on voimassa lokakuun loppuun. " +
                "Varaa aika netistä tai soita meille. Arkisin voit tulla myös ilman ajanvarausta, mutta lauantaisin palvelemme vain asiakkaita, joilla on varattu aika. " +
                "Jos et pääse tulemaan, peru aika viimeistään edellisenä päivänä. Muuten maksat puolet hinnasta.",
            },
            {
              title: "B. Elektroniikkaliike Virta",
              body:
                "Suuret alennusmyynnit torstaista sunnuntaihin! Kaikki kuulokkeet –30 % ja tietokoneet –20 %. Uusiin puhelimiin alennus ei valitettavasti koske. " +
                "Myymme myös käytettyjä puhelimia, jotka olemme tarkistaneet ja korjanneet. Niillä on kuuden kuukauden takuu. " +
                "Kaikilla tuotteilla on 14 päivän palautusoikeus, kun kuitti on mukana.",
            },
            {
              title: "C. Vaatekauppa Moda",
              body:
                "Osta kolme, maksa kaksi! Kun ostat kolme tuotetta, halvin niistä on ilmainen. Tarjous koskee kaikkia neuleita ja talvitakkeja. " +
                "Huomaa, että tarjoustuotteita ei voi palauttaa. Jos koko ei sovi, voit kuitenkin vaihtaa tuotteen toiseen kokoon kahden viikon aikana. " +
                "Tarjous on voimassa niin kauan kuin tuotteita riittää.",
            },
            {
              title: "D. Kaupungin talousneuvonta",
              body:
                "Onko laskujen maksaminen vaikeaa? Tule juttelemaan! Neuvonta on ilmaista, emmekä kerro asioistasi muille. " +
                "Ilman ajanvarausta voit tulla tiistaisin kello 13–16 kirjaston neuvontapisteeseen. Muina päivinä varaa aika puhelimella. " +
                "Ota mukaan laskut ja tiliotteet viimeiseltä kolmelta kuukaudelta.",
            },
          ],
          questions: [
            {
              id: "k7r3q1",
              type: "mc",
              q: "Mikä on totta Kampaamo Saksista?",
              options: [
                "Lauantaina sinne voi mennä ilman ajanvarausta.",
                "Jos asiakas ei tule eikä peru aikaa, hän maksaa osan hinnasta.",
                "Tarjoushinta on voimassa koko syksyn.",
              ],
              answer: 1,
              explain:
                "Advert A: “peru aika viimeistään edellisenä päivänä. Muuten maksat puolet hinnasta.” Walk-ins only on weekdays; the offer ends at the end of October.",
            },
            {
              id: "k7r3q2",
              type: "mc",
              q: "Mikä on totta Virran alennusmyynnistä?",
              options: [
                "Uudet puhelimet ovat 30 % halvempia.",
                "Käytetyillä puhelimilla on takuu.",
                "Alennettuja tuotteita ei voi palauttaa.",
              ],
              answer: 1,
              explain:
                "Advert B: used phones “Niillä on kuuden kuukauden takuu.” New phones are not discounted; the no-return rule belongs to Moda (C).",
            },
            {
              id: "k7r3q3",
              type: "mc",
              q: "Ostit Modasta tarjoustakin, mutta se on liian pieni. Mitä voit tehdä?",
              options: [
                "Palauttaa takin ja saada rahat takaisin.",
                "Vaihtaa takin isompaan kokoon.",
                "Ei mitään, koska tarjoustuotteita ei voi vaihtaa.",
              ],
              answer: 1,
              explain:
                "Advert C: offer items cannot be returned, “voit kuitenkin vaihtaa tuotteen toiseen kokoon kahden viikon aikana.”",
            },
            {
              id: "k7r3q4",
              type: "mc",
              q: "Milloin talousneuvontaan voi mennä varaamatta aikaa?",
              options: ["tiistaina iltapäivällä", "minä arkipäivänä tahansa", "lauantaina"],
              answer: 0,
              explain:
                "Advert D: “Ilman ajanvarausta voit tulla tiistaisin kello 13–16.” Walk-ins on any weekday belong to the hairdresser (A).",
            },
          ],
        },
        {
          id: "k7r4",
          title: "Tehtävä 4: Lukijan mielipide",
          instructions: {
            fi: "Lue teksti ja vastaa kysymyksiin suomeksi. Vastaa lyhyesti.",
            en: "Read the text and answer the questions in Finnish. Answer briefly.",
          },
          text: {
            title: "Lukijalta: Pankkiasiat ovat tulleet liian vaikeiksi",
            body:
              "Olen 72-vuotias, ja olen aina hoitanut pankkiasiani pankin konttorissa. Viime keväänä pankki sulki konttorin, joka oli lähellä kotiani. " +
              "Nyt lähin konttori on keskustassa, ja sinne on bussilla 40 minuutin matka.\n\n" +
              "Pankki sanoo, että kaikki asiat voi hoitaa netissä. Minulla ei kuitenkaan ole tietokonetta, ja puhelimeni on niin vanha, että pankin sovellus ei toimi siinä. " +
              "Viime kuussa korttini lakkasi toimimasta kaupan kassalla. Soitin pankkiin, mutta jonotin puhelimessa puoli tuntia, eikä kukaan vastannut. " +
              "Lopulta tyttäreni tilasi minulle uuden kortin netistä.\n\n" +
              "Lisäksi paperilasku maksaa nyt kolme euroa. Se tuntuu väärältä, koska moni vanha ihminen ei osaa käyttää verkkopankkia.\n\n" +
              "Toivon, että pankki avaisi meidän alueellemme palvelupisteen edes kerran viikossa, esimerkiksi kirjastoon. Silloin meidän ei tarvitsisi matkustaa keskustaan.\n\n" +
              "Raili Heinonen, Lahti",
          },
          questions: [
            {
              id: "k7r4q1",
              type: "open",
              q: "Mikä muuttui Railin kodin lähellä viime keväänä?",
              hint: "(1 asia)",
              accept: ["Pankin konttori suljettiin.", "pankki sulki konttorin", "Lähellä ei ole enää pankkia."],
              keyNote: "The nearby bank branch was closed. 'Pankki on keskustassa' alone is not enough unless it says the local branch closed.",
              explain: "“Viime keväänä pankki sulki konttorin, joka oli lähellä kotiani.”",
            },
            {
              id: "k7r4q2",
              type: "open",
              q: "Miksi Raili ei voi hoitaa pankkiasioita netissä?",
              hint: "(2 asiaa)",
              accept: [
                "Hänellä ei ole tietokonetta, ja hänen puhelimensa on liian vanha.",
                "ei tietokonetta, vanha puhelin",
                "Hänellä ei ole konetta, eikä sovellus toimi puhelimessa.",
              ],
              keyNote: "Both: (1) she has no computer, (2) her phone is too old / the bank app does not work on it.",
              explain: "“Minulla ei kuitenkaan ole tietokonetta, ja puhelimeni on niin vanha, että pankin sovellus ei toimi siinä.”",
            },
            {
              id: "k7r4q3",
              type: "open",
              q: "Mitä tapahtui, kun Raili yritti hoitaa korttiasiaa puhelimella?",
              hint: "(1 asia)",
              accept: ["Kukaan ei vastannut.", "Hän jonotti puoli tuntia, eikä kukaan vastannut.", "Hän ei saanut apua."],
              keyNote: "Nobody answered (she queued for half an hour). Just 'kortti ei toiminut' is wrong — that is the problem, not what happened on the phone.",
              explain: "“Soitin pankkiin, mutta jonotin puhelimessa puoli tuntia, eikä kukaan vastannut.”",
            },
            {
              id: "k7r4q4",
              type: "open",
              q: "Miten Raili lopulta sai uuden kortin?",
              hint: "(1 asia)",
              accept: ["Tytär tilasi sen netistä.", "tyttären avulla", "Hänen tyttärensä tilasi kortin."],
              keyNote: "Her daughter ordered it (online). Must mention the daughter.",
              explain: "“Lopulta tyttäreni tilasi minulle uuden kortin netistä.”",
            },
            {
              id: "k7r4q5",
              type: "open",
              q: "Mitä Raili ehdottaa pankille?",
              hint: "(1 asia)",
              accept: [
                "Palvelupiste alueelle kerran viikossa.",
                "Pankki voisi olla kirjastossa kerran viikossa.",
                "palvelupiste kirjastoon",
              ],
              keyNote: "A bank service point in her area at least once a week (e.g. in the library). 'Avata konttori uudelleen' is acceptable if it refers to her area.",
              explain: "“Toivon, että pankki avaisi meidän alueellemme palvelupisteen edes kerran viikossa, esimerkiksi kirjastoon.”",
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
          id: "k7w1",
          title: "Tehtävä 1: Väärä lasku",
          instructions: { fi: "Kirjoita viesti. Kirjoita noin 30–60 sanaa.", en: "Write a message of about 30–60 words." },
          prompt:
            "Sait puhelinyhtiöltä laskun. Lasku on paljon suurempi kuin yleensä, ja sinun mielestäsi siinä on virhe. Kirjoita viesti puhelinyhtiön asiakaspalveluun. Muista aloittaa ja lopettaa viesti sopivalla tavalla.",
          bullets: [
            "Kerro, paljonko maksoit ennen ja paljonko uusi lasku on.",
            "Kerro, mikä laskussa on väärin.",
            "Kerro, miksi lasku ei voi olla oikein.",
            "Pyydä, mitä yhtiön pitää tehdä.",
          ],
          promptEn:
            "Your phone bill is much bigger than usual and you think it contains a mistake. Write to customer service: what you paid before and what the new bill is, what is wrong, why it cannot be right, and what you want the company to do.",
          register:
            "semi-formal complaint to a company: Hei / Hyvä asiakaspalvelu … Ystävällisin terveisin + name (customer number welcome)",
          minWords: 30,
          maxWords: 60,
        },
        {
          id: "k7w2",
          title: "Tehtävä 2: Viesti ystävälle",
          instructions: { fi: "Kirjoita viesti. Kirjoita noin 30–60 sanaa.", en: "Write a message of about 30–60 words." },
          prompt:
            "Tilasit netistä paketin, ja se on nyt noutopisteessä. Sinun pitää lähteä yllättäen matkalle, etkä ehdi hakea pakettia. Kirjoita ystävällesi Mikalle viesti ja pyydä häntä hakemaan paketti. Muista aloittaa ja lopettaa viesti sopivalla tavalla.",
          bullets: [
            "Kerro, mitä tilasit ja miksi et voi itse hakea pakettia.",
            "Kerro, missä noutopiste on ja mitä Mika tarvitsee mukaan.",
            "Ehdota, miten voit kiittää häntä.",
          ],
          promptEn:
            "You ordered a parcel online; it is at the pickup point, but you have to leave on a sudden trip. Ask your friend Mika to pick it up: what you ordered and why you can't fetch it, where the pickup point is and what he needs to bring, and suggest how you could thank him.",
          register: "informal message to a friend: Hei Mika! / Moi! … Kiitos tosi paljon! / Terkuin + name",
          minWords: 30,
          maxWords: 60,
        },
        {
          id: "k7w3",
          title: "Tehtävä 3: Mielipide",
          instructions: { fi: "Kirjoita mielipiteesi. Kirjoita noin 30–60 sanaa.", en: "Write your opinion in about 30–60 words." },
          prompt:
            "Mitä mieltä olet: onko parempi ostaa vaatteet ja tavarat netistä vai tavallisesta kaupasta? Perustele.",
          bullets: [
            "Kerro, mitä ostit viimeksi ja mistä.",
            "Mitä hyvää ja mitä huonoa on netistä ostamisessa?",
            "Kumpaa suosittelet muille ja miksi?",
          ],
          promptEn:
            "Is it better to buy clothes and things online or in an ordinary shop? Say what you last bought and where, the good and bad sides of online shopping, and which you recommend and why.",
          register: "short opinion text, neutral: no greeting needed; e.g. 'Minun mielestäni…', 'Toisaalta…', 'Siksi suosittelen…'",
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
          id: "k7l1",
          title: "Tehtävä 1: Viesti puhelinkorjaamosta",
          instructions: {
            fi: "Kuulet puhelinviestin kaksi kertaa. Lue ensin kysymykset. Vastaa lyhyesti suomeksi.",
            en: "You will hear a phone message twice. Read the questions first. Answer briefly in Finnish.",
          },
          situation: "Kuulet viestin puhelinvastaajasta. Korjaamo soittaa asiakkaalle.",
          plays: 2,
          rate: 0.9,
          lines: [
            { speaker: "A", text: "Hei, täällä on Jussi Puhelinkorjaamo Fiksusta. Soitan teidän puhelimestanne, jonka toitte meille maanantaina." },
            {
              speaker: "A",
              text:
                "Tutkimme sen tänään. Näyttö on rikki, niin kuin arvelittekin, mutta myös akku on huono, ja siksi puhelin sammuu itsestään. " +
                "Näytön vaihto maksaa sata kaksikymmentä euroa ja akun vaihto neljäkymmentä euroa, eli yhteensä sata kuusikymmentä euroa. " +
                "Takuu ei valitettavasti koske tätä korjausta, koska puhelin on pudonnut.",
            },
            {
              speaker: "A",
              text:
                "Puhelin on valmis torstaina, ei kun anteeksi, perjantaina, koska uusi akku tulee meille vasta torstaina. " +
                "Soittakaa meille takaisin ja kertokaa, haluatteko, että vaihdamme molemmat. Olemme auki arkisin kymmenestä kuuteen.",
            },
            { speaker: "A", text: "Kun tulette hakemaan puhelinta, ottakaa mukaan kuitti, jonka saitte maanantaina. Kiitos, kuulemiin!" },
          ],
          questions: [
            {
              id: "k7l1q1",
              type: "open",
              q: "Mitä vikaa puhelimessa on?",
              hint: "(2 asiaa)",
              accept: ["Näyttö on rikki ja akku on huono.", "näyttö rikki, akku huono", "Näyttö on rikki, ja puhelin sammuu itsestään."],
              keyNote: "Both: (1) the screen is broken, (2) the battery is bad (the phone switches itself off).",
              explain: "“Näyttö on rikki … mutta myös akku on huono, ja siksi puhelin sammuu itsestään.”",
            },
            {
              id: "k7l1q2",
              type: "open",
              q: "Paljonko maksaa, jos korjaamo vaihtaa molemmat osat?",
              hint: "(hinta)",
              accept: ["160 euroa", "160 €", "160", "sata kuusikymmentä euroa"],
              keyNote: "160 euros. 120 € (screen only) and 40 € (battery only) are wrong.",
              explain: "“Näytön vaihto maksaa sata kaksikymmentä euroa ja akun vaihto neljäkymmentä euroa, eli yhteensä sata kuusikymmentä euroa.”",
            },
            {
              id: "k7l1q3",
              type: "open",
              q: "Minä päivänä puhelin on valmis?",
              hint: "(1 asia)",
              accept: ["perjantaina", "perjantai", "pe"],
              keyNote: "Friday. Thursday is wrong — the speaker corrects himself.",
              explain: "“Puhelin on valmis torstaina, ei kun anteeksi, perjantaina.”",
            },
            {
              id: "k7l1q4",
              type: "open",
              q: "Mitä asiakkaan pitää ottaa mukaan, kun hän hakee puhelimen?",
              hint: "(1 asia)",
              accept: ["kuitti", "kuitin", "kuitti maanantailta"],
              keyNote: "The receipt (given on Monday).",
              explain: "“ottakaa mukaan kuitti, jonka saitte maanantaina.”",
            },
          ],
        },
        {
          id: "k7l2",
          title: "Tehtävä 2: Kuulutus kauppakeskuksessa",
          instructions: {
            fi: "Kuulet kuulutuksen kaksi kertaa. Ovatko väitteet oikein vai väärin?",
            en: "You will hear an announcement twice. Are the statements true or false?",
          },
          situation: "Olet kauppakeskuksessa.",
          plays: 2,
          rate: 0.9,
          lines: [
            {
              speaker: "A",
              text:
                "Hyvät asiakkaat, tervetuloa Kauppakeskus Torniin! Tänään alkavat meidän suuret syysalennukset. " +
                "Kolmannen kerroksen urheilukaupassa kaikki juoksukengät ovat nyt neljäkymmentä prosenttia halvempia. " +
                "Tarjous on voimassa sunnuntaihin asti tai niin kauan kuin kenkiä riittää.",
            },
            {
              speaker: "A",
              text:
                "Toisen kerroksen kodinkoneliikkeessä saat kaikista ostoksista kymmenen prosentin alennuksen, jos sinulla on kauppakeskuksen asiakaskortti. " +
                "Kortin saat ilmaiseksi infopisteestä ensimmäisestä kerroksesta.",
            },
            {
              speaker: "A",
              text:
                "Huomatkaa myös, että pakettiautomaatti on siirretty pääoven vierestä parkkihallin sisäänkäynnin viereen. " +
                "Tänään kauppakeskus on auki poikkeuksellisesti kello kahteenkymmeneenyhteen, ei kello kahteenkymmeneen. Hyviä ostoshetkiä!",
            },
          ],
          questions: [
            {
              id: "k7l2q1",
              type: "tf",
              q: "Juoksukenkien tarjous voi loppua jo ennen sunnuntaita.",
              answer: true,
              explain: "“sunnuntaihin asti tai niin kauan kuin kenkiä riittää” — if the shoes sell out, the offer ends earlier.",
            },
            {
              id: "k7l2q2",
              type: "tf",
              q: "Kodinkoneliikkeen alennuksen saa vain asiakaskortilla.",
              answer: true,
              explain: "“saat … kymmenen prosentin alennuksen, jos sinulla on kauppakeskuksen asiakaskortti.”",
            },
            {
              id: "k7l2q3",
              type: "tf",
              q: "Asiakaskortista pitää maksaa infopisteessä.",
              answer: false,
              explain: "“Kortin saat ilmaiseksi infopisteestä” — it is free.",
            },
            {
              id: "k7l2q4",
              type: "tf",
              q: "Pakettiautomaatti on nyt pääoven vieressä.",
              answer: false,
              explain: "It was moved away from the main door to the car park entrance.",
            },
            {
              id: "k7l2q5",
              type: "tf",
              q: "Tänään kauppakeskus menee kiinni tavallista myöhemmin.",
              answer: true,
              explain: "Open until 21 today, “ei kello kahteenkymmeneen” (not 20 as usual).",
            },
          ],
        },
        {
          id: "k7l3",
          title: "Tehtävä 3: Ajanvaraus kampaamoon",
          instructions: {
            fi: "Kuulet keskustelun kaksi kertaa. Lue ensin kysymykset. Valitse oikea vaihtoehto.",
            en: "You will hear a conversation twice. Read the questions first. Choose the correct option.",
          },
          situation: "Olga soittaa kampaamoon ja varaa aikaa.",
          plays: 2,
          rate: 0.92,
          lines: [
            { speaker: "Kampaaja", text: "Kampaamo Hius-Helmi, Minna puhelimessa." },
            { speaker: "Olga", text: "Hei, täällä on Olga Petrova. Haluaisin varata ajan hiustenleikkaukseen. Ja ehkä myös värjäykseen." },
            { speaker: "Kampaaja", text: "Selvä. Leikkaus ja värjäys kestävät yhdessä noin kaksi tuntia. Milloin teille sopisi?" },
            { speaker: "Olga", text: "Olisiko teillä aikaa ensi perjantaina? Minulla on lauantaina ystävän häät." },
            {
              speaker: "Kampaaja",
              text:
                "Perjantaina on vapaana vain kello yksitoista, mutta silloin ehdin tehdä vain leikkauksen, koska seuraava asiakas tulee kahdeltatoista. " +
                "Torstaina olisi aikaa iltapäivällä kello kolmesta eteenpäin.",
            },
            { speaker: "Olga", text: "Torstaina olen töissä viiteen asti. Hmm. No, otan sen perjantain ajan. Värjäys voi odottaa. Paljonko leikkaus maksaa?" },
            { speaker: "Kampaaja", text: "Leikkaus maksaa neljäkymmentäkaksi euroa. Värjäys maksaa sitten myöhemmin viisikymmentä euroa lisää, jos haluatte sen." },
            { speaker: "Olga", text: "Selvä. Voinko maksaa kortilla?" },
            { speaker: "Kampaaja", text: "Valitettavasti meidän korttimaksu ei toimi tällä viikolla, koska laite on rikki. Voitte maksaa käteisellä tai puhelimella." },
            { speaker: "Olga", text: "Okei, sitten maksan puhelimella. Kiitos!" },
            { speaker: "Kampaaja", text: "Kiitos, nähdään perjantaina kello yksitoista." },
          ],
          questions: [
            {
              id: "k7l3q1",
              type: "mc",
              q: "Miksi Olga haluaa ajan ennen lauantaita?",
              options: ["Hänellä on perjantaina vapaapäivä.", "Hän menee lauantaina juhliin.", "Kampaamo on lauantaina kiinni."],
              answer: 1,
              explain: "“Minulla on lauantaina ystävän häät.” — a wedding (a party).",
            },
            {
              id: "k7l3q2",
              type: "mc",
              q: "Miksi Olga ei saa värjäystä perjantaina?",
              options: [
                "Värjäys on hänelle liian kallis.",
                "Kampaajalla ei ole tarpeeksi aikaa.",
                "Kampaaja tekee värjäyksiä vain torstaisin.",
              ],
              answer: 1,
              explain:
                "Cut + colour take two hours, but on Friday “ehdin tehdä vain leikkauksen, koska seuraava asiakas tulee kahdeltatoista.” Thursday was offered, but Olga works until five.",
            },
            {
              id: "k7l3q3",
              type: "mc",
              q: "Paljonko Olga maksaa perjantaina?",
              options: ["42 euroa", "50 euroa", "92 euroa"],
              answer: 0,
              explain: "Only the cut: “neljäkymmentäkaksi euroa”. Colouring (50 €) would come later.",
            },
            {
              id: "k7l3q4",
              type: "mc",
              q: "Miten Olga maksaa?",
              options: ["kortilla", "käteisellä", "puhelimella"],
              answer: 2,
              explain: "The card machine is broken; Olga says “sitten maksan puhelimella”.",
            },
          ],
        },
        {
          id: "k7l4",
          title: "Tehtävä 4: Haastattelu – miten säästää rahaa",
          instructions: {
            fi: "Kuulet haastattelun kaksi kertaa. Ovatko väitteet oikein vai väärin?",
            en: "You will hear an interview twice. Are the statements true or false?",
          },
          situation: "Radiossa puhutaan säästämisestä. Toimittaja haastattelee Dianaa.",
          plays: 2,
          rate: 0.9,
          lines: [
            { speaker: "Toimittaja", text: "Tänään puhumme säästämisestä. Studiossa on Diana, joka säästää rahaa omaan asuntoon. Diana, miten tämä alkoi?" },
            {
              speaker: "Diana",
              text:
                "Muutin Suomeen viisi, ei kun kuusi vuotta sitten. Kaksi vuotta sitten päätin, että haluan oman asunnon. " +
                "Ensin kirjoitin ylös kaikki ostokseni. Huomasin, että ruokaan meni tosi paljon rahaa, koska kävin kaupassa melkein joka päivä.",
            },
            { speaker: "Toimittaja", text: "Mitä sinä muutit?" },
            {
              speaker: "Diana",
              text:
                "Nyt käyn ruokakaupassa vain kerran viikossa, ja teen aina ostoslistan. Ostan tarjouksia, mutta vain sellaisia tuotteita, joita oikeasti tarvitsen. " +
                "Vaatteet ostan kirpputorilta tai netistä käytettyinä.",
            },
            { speaker: "Toimittaja", text: "Oliko se vaikeaa?" },
            {
              speaker: "Diana",
              text:
                "Alussa oli. Ystävät menivät ravintolaan, ja minä jäin kotiin. Sitten keksin, että voimme kokata yhdessä jonkun kotona. " +
                "Se on hauskempaa ja paljon halvempaa.",
            },
            { speaker: "Toimittaja", text: "Ja nyt sinulla on oma asunto?" },
            {
              speaker: "Diana",
              text: "Ei vielä. Olen säästänyt melkein kymmenentuhatta euroa, mutta pankin mukaan tarvitsen vähän enemmän. Toivottavasti muutan ensi keväänä.",
            },
          ],
          questions: [
            {
              id: "k7l4q1",
              type: "tf",
              q: "Ennen Diana käytti paljon rahaa ruokaan, koska hän kävi kaupassa usein.",
              answer: true,
              explain: "“ruokaan meni tosi paljon rahaa, koska kävin kaupassa melkein joka päivä.”",
            },
            {
              id: "k7l4q2",
              type: "tf",
              q: "Diana ostaa aina kaikki hyvät tarjoukset.",
              answer: false,
              explain: "“Ostan tarjouksia, mutta vain sellaisia tuotteita, joita oikeasti tarvitsen.”",
            },
            {
              id: "k7l4q3",
              type: "tf",
              q: "Nyt Diana tapaa ystäviään kotona eikä ravintolassa.",
              answer: true,
              explain: "“voimme kokata yhdessä jonkun kotona. Se on hauskempaa ja paljon halvempaa.”",
            },
            {
              id: "k7l4q4",
              type: "tf",
              q: "Diana muuttaa omaan asuntoon tänä syksynä.",
              answer: false,
              explain: "She doesn't have a flat yet and needs a bit more money: “Toivottavasti muutan ensi keväänä.”",
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
          id: "k7s0",
          kind: "warm-up",
          title: "Alkukeskustelu",
          instructions: {
            fi: "Haastattelija kysyy sinulta muutaman kysymyksen. Vastaa muutamalla lauseella.",
            en: "The interviewer asks you a few questions. Answer in a few sentences.",
          },
          prepSec: 0,
          card: null,
          items: [
            { id: "a", spoken: "Hei ja tervetuloa! Kerro, mitä teit viime viikonloppuna.", speakSec: 35 },
            { id: "b", spoken: "Missä kaupassa käyt useimmin? Miksi juuri siellä?", speakSec: 35 },
            { id: "c", spoken: "Miksi opiskelet suomea, ja missä tilanteissa tarvitset sitä?", speakSec: 40 },
          ],
        },
        {
          id: "k7s1",
          kind: "topic",
          title: "Aihe 1: Ostoksilla",
          instructions: {
            fi: "Sinulla on kaksi minuuttia aikaa valmistautua. Voit kirjoittaa muistiin avainsanoja. Pyri puhumaan aktiivisesti!",
            en: "You have two minutes to prepare. You may jot down key words. Try to speak actively!",
          },
          prepSec: 120,
          card: {
            title: "Kerro, miten käyt ostoksilla",
            questions: [
              "Missä käyt tavallisesti ostoksilla?",
              "Mitä ostit viime viikolla? Mistä ostit sen?",
              "Millaisia kauppoja kotimaassasi on? Miten ne ovat erilaisia kuin Suomessa?",
              "Mikä oli vaikeaa, kun kävit ensimmäisiä kertoja kaupassa Suomessa?",
              "Ostatko nyt enemmän netistä kuin ennen? Miksi?",
              "Mikä on paras ostos, jonka olet tehnyt?",
            ],
          },
          items: [
            { id: "a", spoken: "Puhutaan ostoksista. Missä sinä käyt tavallisesti kaupassa?", speakSec: 45 },
            { id: "b", spoken: "Mitä ostit viime viikolla? Mistä ostit sen?", speakSec: 50 },
            { id: "c", spoken: "Millaisia kauppoja sinun kotimaassasi on? Onko siellä erilaista kuin Suomessa?", speakSec: 60 },
            { id: "d", spoken: "Muistatko, mikä oli vaikeaa, kun kävit ensimmäisiä kertoja kaupassa Suomessa?", speakSec: 50 },
            { id: "e", spoken: "Ostatko nyt enemmän netistä kuin ennen? Miksi?", speakSec: 45 },
            { id: "f", spoken: "Entä mikä on paras ostos, jonka olet koskaan tehnyt?", speakSec: 45 },
          ],
        },
        {
          id: "k7s2",
          kind: "opinion",
          title: "Aihe 2: Raha ja säästäminen",
          instructions: {
            fi: "Sinulla on kaksi minuuttia aikaa valmistautua. Voit kirjoittaa muistiin avainsanoja. Pyri puhumaan aktiivisesti!",
            en: "You have two minutes to prepare. You may jot down key words. Try to speak actively!",
          },
          prepSec: 120,
          card: {
            title: "Raha ja säästäminen",
            questions: [
              "Onko säästäminen sinusta tärkeää? Miksi?",
              "Mihin ihmiset käyttävät sinun mielestäsi liikaa rahaa?",
              "Maksatko mieluummin kortilla vai käteisellä? Miksi?",
              "Mitä hyvää ja mitä huonoa alennusmyynneissä on?",
              "Miten nuori ihminen voi säästää rahaa? Mitä neuvoisit?",
              "Pitäisikö lasten saada viikkorahaa?",
            ],
          },
          items: [
            { id: "a", spoken: "Seuraavaksi puhutaan rahasta. Onko säästäminen sinun mielestäsi tärkeää? Miksi?", speakSec: 55 },
            { id: "b", spoken: "Mihin ihmiset käyttävät sinun mielestäsi liikaa rahaa?", speakSec: 50 },
            { id: "c", spoken: "Maksatko mieluummin kortilla vai käteisellä? Miksi?", speakSec: 45 },
            { id: "d", spoken: "Alennusmyynneissä on paljon ihmisiä. Mitä hyvää ja mitä huonoa niissä on?", speakSec: 60 },
            { id: "e", spoken: "Jos nuori ihminen haluaa säästää rahaa, mitä sinä neuvoisit hänelle?", speakSec: 55 },
            { id: "f", spoken: "Entä lapset? Pitäisikö heidän saada viikkorahaa? Miksi?", speakSec: 45 },
          ],
        },
        {
          id: "k7s3",
          kind: "roleplay",
          title: "Aihe 3: Rikkinäiset kuulokkeet",
          instructions: {
            fi: "Sinulla on kaksi minuuttia aikaa valmistautua. Haastattelija on myyjä ja sinä olet asiakas. Pyri puhumaan aktiivisesti!",
            en: "You have two minutes to prepare. The interviewer is a shop assistant and you are a customer. Try to speak actively!",
          },
          prepSec: 120,
          card: {
            title: "Ostit kuukausi sitten langattomat kuulokkeet. Nyt toinen kuuloke ei toimi. Menet takaisin kauppaan. Haastattelija on myyjä.",
            questions: [
              "Tervehdi ja kerro, miksi tulit.",
              "Kerro, milloin ostit kuulokkeet ja mikä niissä on vikana.",
              "Kerro, miten voit näyttää, että ostit kuulokkeet tästä kaupasta.",
              "Kysy, mitä vaihtoehtoja sinulla on.",
              "Valitse ratkaisu ja perustele.",
              "Sovi, miten saat kuulokkeet takaisin.",
              "Kiitä ja lopeta keskustelu.",
            ],
          },
          items: [
            { id: "a", spoken: "Hei! Miten voin auttaa?", speakSec: 45 },
            { id: "b", spoken: "Voi harmi. Milloin ostitte ne, ja mikä niissä tarkalleen on vikana?", speakSec: 50 },
            { id: "c", spoken: "Tarvitsen kuitin. Onko se teillä mukana? Jos ei ole, miten voitte näyttää, että ostitte ne meiltä?", speakSec: 45 },
            {
              id: "d",
              spoken:
                "Kiitos. Kuulokkeilla on takuu, mutta meillä ei ole juuri nyt samanlaisia kaupassa. Voimme lähettää ne korjattavaksi, se kestää noin kaksi viikkoa. Tai voitte ottaa toisen mallin, joka on kaksikymmentä euroa kalliimpi. Kumman valitsette, ja miksi?",
              speakSec: 60,
            },
            { id: "e", spoken: "Selvä. Haluatteko hakea kuulokkeet itse kaupasta, vai lähetämmekö ne noutopisteeseen? Kumpi sopii teille paremmin?", speakSec: 45 },
            { id: "f", spoken: "Hyvä, kirjoitan sen ylös. Onko vielä jotain muuta?", speakSec: 45 },
          ],
        },
      ],
    },
  ],
};
