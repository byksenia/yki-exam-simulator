// Keskitaso 1
export default {
  id: "koe11",
  title: "Keskitaso 1",
  level: "keskitaso",
  description: "Remote work, online shopping, energy prices, health services, volunteering, transport, culture.",
  sections: [
    // ------------------------------------------------------------------ READING
    {
      id: "reading",
      minutes: 60,
      cutoffs: { level1: 0.5, level2: 0.75 },
      ohje:
        "Tässä osakokeessa luet erilaisia tekstejä, esimerkiksi uutisen, kolumnin, mielipidekirjoituksen, kuluttaja-artikkelin, tiedotteen ja käyttöohjeen. Osakokeessa on kuusi tehtävää. Tehtävissä on monivalintakysymyksiä, oikein–väärin-väitteitä ja avoimia kysymyksiä. Vastaa avoimiin kysymyksiin suomeksi ja lyhyesti, omin sanoin. Kaikkia sanoja ei tarvitse ymmärtää, jotta voi vastata oikein. Sanakirjaa ei saa käyttää.",
      tasks: [
        {
          id: "k11r1",
          title: "Tehtävä 1: Uutinen",
          instructions: {
            fi: "Lue uutinen ja vastaa kysymyksiin. Valitse oikea vaihtoehto.",
            en: "Read the news item and answer the questions. Choose the correct option.",
          },
          text: {
            title: "Bussivuorot vähenevät – kutsuliikenne korvaa hiljaiset reitit",
            body:
              "Koskelan kaupunki vähentää ensi vuoden alusta bussivuoroja kolmella reitillä, joilla on kulkenut iltaisin ja viikonloppuisin vain muutama matkustaja. " +
              "Tilalle tulee niin sanottu kutsuliikenne: pikkubussi, jonka matkustaja tilaa sovelluksella tai puhelimella viimeistään puoli tuntia ennen lähtöä. " +
              "Kutsubussi hakee kyytiläiset lähimmältä pysäkiltä ja vie heidät mille tahansa alueen pysäkille.\n\n" +
              "Kaupungin liikennesuunnittelija Anna Rautio perustelee muutosta taloudella ja ympäristöllä. ”Iso bussi, jossa istuu kaksi ihmistä, kuluttaa paljon polttoainetta " +
              "ja maksaa veronmaksajille enemmän kuin tuottaa. Kutsuliikenteellä voimme pitää palvelun samana ja säästää samalla noin 400 000 euroa vuodessa”, Rautio sanoo. " +
              "Arkipäivien aamu- ja iltapäivävuoroihin muutos ei vaikuta, koska silloin busseissa kulkee koululaisia ja työmatkalaisia.\n\n" +
              "Kaikki eivät ole uudistuksesta yhtä innostuneita. Eläkeläisyhdistyksen puheenjohtaja Raimo Lehto muistuttaa, ettei kaikilla ikäihmisillä ole älypuhelinta. " +
              "”Puhelinnumero on hyvä asia, mutta jos linja on ruuhkainen, ihminen jää helposti kotiin”, Lehto sanoo. Hänen mielestään kaupungin olisi pitänyt kysyä asukkaiden " +
              "mielipidettä ennen päätöstä eikä vasta sen jälkeen.\n\n" +
              "Kaupunki aikoo järjestää tammikuussa asukasillan, jossa kutsuliikennettä esitellään ja jossa voi myös antaa palautetta. Kokeilu kestää aluksi vuoden. " +
              "Jos käyttäjiä on vähemmän kuin odotettiin tai palautetta tulee paljon, reittejä voidaan muuttaa jo kesken kokeilun. " +
              "Kutsuliikenteen matka maksaa saman verran kuin tavallinen bussilippu.",
          },
          questions: [
            {
              id: "k11r1q1",
              type: "mc",
              q: "Miksi kaupunki muuttaa bussiliikennettä?",
              options: [
                "Koululaiset tarvitsevat aamuisin lisää vuoroja.",
                "Bussilippujen hinnat nousevat ensi vuonna.",
                "Joillakin reiteillä on hiljaisina aikoina niin vähän matkustajia, ettei iso bussi kannata.",
              ],
              answer: 2,
              explain:
                "Buses with 'vain muutama matkustaja' in evenings and at weekends cost more than they earn. School routes are not affected, and the price stays the same ('maksaa saman verran').",
            },
            {
              id: "k11r1q2",
              type: "mc",
              q: "Mitä uudistus merkitsee niille, jotka matkustavat bussilla töihin arkiaamuisin?",
              options: [
                "Heidän bussinsa kulkevat kuten ennenkin.",
                "Heidän täytyy tilata kyyti puoli tuntia etukäteen.",
                "Heidän matkansa tulee aiempaa halvemmaksi.",
              ],
              answer: 0,
              explain:
                "“Arkipäivien aamu- ja iltapäivävuoroihin muutos ei vaikuta.” Booking in advance applies only to the new on-demand bus; the price does not change.",
            },
            {
              id: "k11r1q3",
              type: "mc",
              q: "Mitä Raimo Lehto arvostelee?",
              options: [
                "Kutsubussin voi tilata ainoastaan sovelluksella.",
                "Asukkailta ei kysytty mielipidettä ennen päätöstä.",
                "Kutsuliikenne tulee kaupungille liian kalliiksi.",
              ],
              answer: 1,
              explain:
                "Lehto says the city should have asked residents 'ennen päätöstä eikä vasta sen jälkeen'. He mentions the phone line exists (so not 'only an app'), but worries it may be busy.",
            },
            {
              id: "k11r1q4",
              type: "mc",
              q: "Mitä tekstin mukaan voi tapahtua kokeilun aikana?",
              options: [
                "Kokeilu voidaan lopettaa jo tammikuun asukasillan jälkeen.",
                "Matkan hinta voi nousta, jos käyttäjiä on vähän.",
                "Reittejä voidaan muuttaa ennen kuin vuosi on kulunut.",
              ],
              answer: 2,
              explain:
                "“reittejä voidaan muuttaa jo kesken kokeilun.” The text says nothing about stopping in January, and the fare equals a normal bus ticket.",
            },
          ],
        },
        {
          id: "k11r2",
          title: "Tehtävä 2: Kuluttaja-artikkeli",
          instructions: {
            fi: "Lue artikkeli. Ovatko väitteet oikein vai väärin?",
            en: "Read the article. Are the statements true (oikein) or false (väärin)?",
          },
          text: {
            title: "Verkkokaupan palautus ei aina ole ilmainen – näin toimit, kun tilaus menee pieleen",
            body:
              "Verkosta ostaminen on helppoa, mutta kun tuote ei sovi, on rikki tai ei tule lainkaan, moni kuluttaja on epävarma oikeuksistaan. " +
              "Kilpailu- ja kuluttajaviraston mukaan yleisimmät kysymykset koskevat palautuksia ja viivästyneitä toimituksia.\n\n" +
              "Kun ostat tuotteen suomalaisesta tai muussa EU-maassa toimivasta verkkokaupasta, sinulla on yleensä 14 päivän peruuttamisoikeus. " +
              "Aika alkaa siitä päivästä, kun saat tuotteen, ei siitä, kun teit tilauksen. Sinun ei tarvitse kertoa, miksi palautat tuotteen. " +
              "Peruuttamisoikeus ei kuitenkaan koske kaikkia tuotteita. Esimerkiksi tilauksesta valmistettuja tuotteita, nopeasti pilaantuvia elintarvikkeita " +
              "tai avattuja hygieniatuotteita ei yleensä voi palauttaa.\n\n" +
              "Moni olettaa, että palautus on aina maksuton. Laki ei kuitenkaan velvoita kauppaa maksamaan palautuksen postikuluja, jos se on kertonut asiasta selvästi ennen ostoa. " +
              "Monet suuret verkkokaupat tarjoavat ilmaisen palautuksen, koska se houkuttelee asiakkaita, mutta yhä useampi on viime aikoina alkanut periä siitä maksun. " +
              "Kauppa voi myös vähentää hinnasta summan, jos tuotetta on käytetty enemmän kuin sen kokeileminen vaatii. Vaatteita saa siis sovittaa, mutta niillä ei pidä käydä juhlissa.\n\n" +
              "Jos tuote on viallinen, kyse ei ole peruuttamisesta vaan virheestä. Silloin kaupan on korjattava tuote, vaihdettava se ehjään tai palautettava rahat, " +
              "eikä sinun tarvitse maksaa postikuluja. Tärkeää on ilmoittaa virheestä kaupalle kohtuullisessa ajassa sen jälkeen, kun olet huomannut sen. " +
              "Kuluttajaneuvonnan mukaan kannattaa ottaa vioista kuvia ja tehdä ilmoitus kirjallisesti, jotta asiasta jää todiste.\n\n" +
              "Myös viivästynyt toimitus on kaupan vastuulla. Jos tilaus ei tule luvatussa ajassa, voit antaa kaupalle kohtuullisen lisäajan. " +
              "Jos tuote ei tule lisäajassakaan, voit perua kaupan ja saada rahasi takaisin. Kauppa vastaa paketista siihen asti, kun se on sinun hallussasi. " +
              "Jos seurannan mukaan paketti on toimitettu, mutta et ole saanut sitä, ota yhteyttä kauppaan – selvittely kuljetusyhtiön kanssa ei kuulu sinulle.\n\n" +
              "Erityisen tarkkana kannattaa olla EU:n ulkopuolisten verkkokauppojen kanssa, jotka mainostavat sosiaalisessa mediassa. Niiden sivut voivat olla suomeksi, " +
              "mutta yritys voi sijaita kaukana, eikä Suomen kuluttajansuoja silloin välttämättä auta. Lisäksi hintaan voi tulla tullimaksuja ja arvonlisäveroa, " +
              "joista asiakas kuulee vasta, kun paketti on jo saapunut Suomeen. Kuluttajaneuvoja Heidi Mäkelä neuvoo tarkistamaan aina yrityksen yhteystiedot " +
              "ja lukemaan muiden asiakkaiden kokemuksia ennen kuin maksaa mitään.\n\n" +
              "Jos kauppa ja asiakas eivät pääse sopuun, apua saa maksuttomasta kuluttajaneuvonnasta. Sieltä ei kuitenkaan saa lakimiestä, joka hoitaisi asian puolestasi, " +
              "vaan neuvoja siihen, miten voit itse edetä.",
          },
          questions: [
            {
              id: "k11r2q1",
              type: "tf",
              q: "Neljäntoista päivän palautusaika lasketaan siitä, kun tuote on asiakkaan käsissä.",
              answer: true,
              explain: "“Aika alkaa siitä päivästä, kun saat tuotteen, ei siitä, kun teit tilauksen.”",
            },
            {
              id: "k11r2q2",
              type: "tf",
              q: "Asiakkaan on perusteltava kaupalle, miksi hän haluaa palauttaa tuotteen.",
              answer: false,
              explain: "“Sinun ei tarvitse kertoa, miksi palautat tuotteen.”",
            },
            {
              id: "k11r2q3",
              type: "tf",
              q: "Verkkokaupan on lain mukaan aina maksettava palautuksen postikulut.",
              answer: false,
              explain: "The law does not oblige the shop to pay return postage if it has said so clearly before the purchase. Free returns are a voluntary marketing choice.",
            },
            {
              id: "k11r2q4",
              type: "tf",
              q: "Jos asiakas on pitänyt palautettavaa vaatetta juhlissa, hän ei välttämättä saa koko hintaa takaisin.",
              answer: true,
              explain: "The shop may deduct an amount if the product was used more than trying it requires: “niillä ei pidä käydä juhlissa”.",
            },
            {
              id: "k11r2q5",
              type: "tf",
              q: "Kun tuote on viallinen, asiakas maksaa itse vain palautuksen postikulut.",
              answer: false,
              explain: "With a defective product “sinun ei tarvitse maksaa postikuluja” — the customer pays nothing.",
            },
            {
              id: "k11r2q6",
              type: "tf",
              q: "Jos paketti on seurannan mukaan toimitettu mutta ei ole perillä, asiakkaan täytyy itse selvittää asia kuljetusyhtiön kanssa.",
              answer: false,
              explain: "The shop is responsible until the parcel is in the customer's possession; contact the shop — “selvittely kuljetusyhtiön kanssa ei kuulu sinulle”.",
            },
            {
              id: "k11r2q7",
              type: "tf",
              q: "Suomenkieliset verkkosivut eivät takaa, että kaupassa noudatetaan Suomen kuluttajansuojaa.",
              answer: true,
              explain: "Non-EU shops may have Finnish pages, but the company can be far away “eikä Suomen kuluttajansuoja silloin välttämättä auta”.",
            },
          ],
        },
        {
          id: "k11r3",
          title: "Tehtävä 3: Tiedote",
          instructions: {
            fi: "Lue tiedote ja vastaa kysymyksiin suomeksi. Vastaa lyhyesti.",
            en: "Read the notice and answer the questions in Finnish. Answer briefly.",
          },
          text: {
            title: "Hyvinvointialueen tiedote: Itäharjun terveysaseman ajanvaraus uudistuu 1.3. alkaen",
            body:
              "Maaliskuun alusta lähtien Itäharjun terveysasemalle ei enää varata aikaa suoraan puhelimella. Ota ensin yhteyttä joko digitaalisen palvelun kautta " +
              "tai jättämällä soittopyyntö takaisinsoittopalveluun. Hoitaja arvioi hoidon tarpeesi ja ohjaa sinut sopivalle ammattilaiselle: lääkärille, sairaanhoitajalle, " +
              "fysioterapeutille tai psykologille. Kaikki eivät siis enää tapaa ensin lääkäriä, vaan monet asiat voidaan hoitaa nopeammin muun ammattilaisen vastaanotolla.\n\n" +
              "Digitaalinen palvelu on auki ympäri vuorokauden. Täytä ensin oirekysely, johon vastataan yleensä saman tai seuraavan arkipäivän aikana. " +
              "Kiireettömissä asioissa, kuten reseptin uusimisessa tai todistusten pyytämisessä, palvelu on nopein tapa asioida. " +
              "Takaisinsoittopalveluun voi jättää soittopyynnön arkisin kello 8–15. Hoitaja soittaa sinulle saman päivän aikana, mutta ei välttämättä heti, joten pidä puhelin lähelläsi.\n\n" +
              "Huomaa: jos varattua aikaa ei peruta viimeistään edellisenä päivänä kello 15, hyvinvointialue perii käyttämättömästä ajasta 51,80 euron maksun. " +
              "Alle 18-vuotiailta maksua ei peritä.\n\n" +
              "Kiireellisissä asioissa, esimerkiksi kun sinulla on kova rintakipu tai hengitysvaikeuksia, älä käytä digitaalista palvelua äläkä jätä soittopyyntöä, " +
              "vaan soita heti hätänumeroon 112. Iltaisin ja viikonloppuisin kiireellistä hoitoa antaa päivystys, johon soitetaan ensin numeroon 116 117.\n\n" +
              "Jos tarvitset tulkin, kerro siitä, kun otat yhteyttä. Tulkkaus on asiakkaalle maksutonta.",
          },
          questions: [
            {
              id: "k11r3q1",
              type: "open",
              q: "Millä tavoilla terveysasemaan otetaan yhteyttä maaliskuusta alkaen?",
              hint: "(2 tapaa)",
              accept: [
                "digitaalisen palvelun kautta ja jättämällä soittopyynnön",
                "netissä ja takaisinsoittopalvelun kautta",
                "digipalvelussa tai soittopyynnöllä",
              ],
              keyNote: "Both: the digital service (online) AND leaving a call-back request. 'Calling directly to book' is wrong.",
              explain: "“Ota ensin yhteyttä joko digitaalisen palvelun kautta tai jättämällä soittopyyntö takaisinsoittopalveluun.”",
            },
            {
              id: "k11r3q2",
              type: "open",
              q: "Mitä hoitaja tekee, kun potilas on ottanut yhteyttä?",
              hint: "(2 asiaa)",
              accept: [
                "arvioi hoidon tarpeen ja ohjaa sopivalle ammattilaiselle",
                "arvioi, mitä hoitoa tarvitaan, ja ohjaa oikealle ammattilaiselle",
                "selvittää hoidon tarpeen ja ohjaa lääkärille tai hoitajalle",
              ],
              keyNote: "Both: assesses the need for care AND directs the patient to a suitable professional.",
              explain: "“Hoitaja arvioi hoidon tarpeesi ja ohjaa sinut sopivalle ammattilaiselle.”",
            },
            {
              id: "k11r3q3",
              type: "open",
              q: "Missä tilanteessa aikuinen potilas joutuu maksamaan 51,80 euroa?",
              accept: [
                "jos hän ei peru aikaa viimeistään edellisenä päivänä kello 15",
                "jos ei peru aikaa ajoissa",
                "jos ei tule vastaanotolle eikä peru aikaa ajoissa",
              ],
              keyNote: "If he/she does not cancel the appointment by 3 p.m. the previous day (i.e. a no-show without timely cancellation).",
              explain: "“jos varattua aikaa ei peruta viimeistään edellisenä päivänä kello 15 … 51,80 euron maksun.” Under-18s are exempt.",
            },
            {
              id: "k11r3q4",
              type: "open",
              q: "Mitä pitää tehdä, jos tarvitsee kiireellistä hoitoa sunnuntai-iltana, mutta tilanne ei ole hengenvaarallinen?",
              accept: ["soittaa numeroon 116 117", "soittaa päivystykseen numeroon 116 117", "soittaa päivystykseen"],
              keyNote: "Call the on-call service (päivystys) at 116 117. 112 is wrong here (only for life-threatening cases); the call-back service is closed at weekends.",
              explain: "“Iltaisin ja viikonloppuisin kiireellistä hoitoa antaa päivystys, johon soitetaan ensin numeroon 116 117.” 112 is for chest pain and breathing difficulties.",
            },
          ],
        },
        {
          id: "k11r4",
          title: "Tehtävä 4: Kolumni",
          instructions: {
            fi: "Lue kolumni ja vastaa kysymyksiin. Valitse oikea vaihtoehto.",
            en: "Read the column and answer the questions. Choose the correct option.",
          },
          text: {
            title: "Kotitoimiston hiljaisuus – Satu Niemi",
            body:
              "Kun työpaikkani ilmoitti kolme vuotta sitten, että saamme tehdä töitä kotoa niin paljon kuin haluamme, olin onnellinen. Ei enää ruuhkabusseja, " +
              "ei avokonttorin melua eikä kiirettä aamuisin. Ensimmäisinä kuukausina sain aikaan enemmän kuin koskaan ennen. Työpäivän jälkeen ehdin lenkille ennen pimeää, " +
              "ja pyykit pesin palaverien välissä.\n\n" +
              "Nyt, kolme vuotta myöhemmin, en ole enää yhtä varma. Etätyö ei ole huonoa, mutta sen hinta on näkynyt vasta vähitellen. Huomasin sen ensimmäisen kerran, " +
              "kun tiimiimme tuli uusi työntekijä. Hän kysyi minulta asioita viesteillä, joihin vastasin, kun ehdin, joskus vasta seuraavana päivänä. " +
              "Toimistolla hän olisi vain kääntynyt tuolillaan ja kysynyt. Puolen vuoden päästä hän vaihtoi työpaikkaa. Lähtöhaastattelussa hän kertoi, " +
              "ettei ollut koskaan tuntenut kuuluvansa joukkoon.\n\n" +
              "Tutkimukset kertovat samaa. Työterveyslaitoksen mukaan etätyö lisää monen työntekijän tyytyväisyyttä, mutta erityisesti nuoret ja uudet työntekijät " +
              "kärsivät yksinäisyydestä. Kokeneille etätyö sopii usein paremmin, koska heillä on jo verkosto, jolta kysyä apua. Uusilta puuttuvat ne pienet keskustelut kahvikupin ääressä, joissa opitaan, miten työpaikalla oikeasti toimitaan. " +
              "Kukaan ei kirjoita ohjeisiin, kenelle kannattaa soittaa, kun järjestelmä ei toimi, tai milloin pomolle ei kannata esittää isoja kysymyksiä.\n\n" +
              "Toinen asia, josta puhutaan liian vähän, on työn ja vapaa-ajan raja. Kun läppäri on keittiön pöydällä, työ ei koskaan oikeastaan lopu. " +
              "Vastaan viesteihin illalla, koska se on niin helppoa. Kukaan ei sitä minulta vaadi, mutta kukaan ei myöskään kiellä. " +
              "Lounastauko taas jää usein pitämättä, kun seuraava palaveri alkaa samalla ruudulla heti edellisen perään. Kotona kukaan ei tule hakemaan syömään.\n\n" +
              "En silti halua palata aikaan, jolloin jokaisen piti istua toimistolla kahdeksasta neljään. Se olisi askel taaksepäin. Ratkaisu ei mielestäni ole pakko " +
              "eikä täydellinen vapaus, vaan yhteiset pelisäännöt. Tiimimme päätti viime keväänä, että tiistaisin kaikki ovat toimistolla. Aluksi osa vastusti ajatusta, " +
              "koska he asuvat kaukana. Esihenkilömme lupasi, ettei tiistaisin pidetä etäpalavereja, joihin jokainen istuu omalta koneeltaan. Nyt tiistai on monelle viikon paras päivä: silloin suunnitellaan, nauretaan ja syödään yhdessä lounasta. " +
              "Muina päivinä jokainen saa työskennellä siellä, missä työ sujuu parhaiten.\n\n" +
              "Etätyö on tullut jäädäkseen, ja hyvä niin. Mutta se ei hoida itseään. Jos esihenkilöt eivät mieti, miten yhteisö pysyy koossa, kun ihmiset eivät näe toisiaan, " +
              "joku jää ulkopuolelle. Ja usein se joku on juuri se, jolla olisi eniten opittavaa – tai eniten annettavaa.",
          },
          questions: [
            {
              id: "k11r4q1",
              type: "mc",
              q: "Miten kirjoittaja suhtautui etätyöhön aluksi?",
              options: [
                "Hän epäili, ettei työ sujuisi kotona yhtä hyvin.",
                "Hän oli tyytyväinen ja sai paljon aikaan.",
                "Hän olisi halunnut tehdä etätöitä vain osan viikosta.",
              ],
              answer: 1,
              explain: "“olin onnellinen … Ensimmäisinä kuukausina sain aikaan enemmän kuin koskaan ennen.”",
            },
            {
              id: "k11r4q2",
              type: "mc",
              q: "Miksi uusi työntekijä lähti tiimistä?",
              options: [
                "Hän ei kokenut olevansa osa työyhteisöä.",
                "Kirjoittaja ei vastannut hänen viesteihinsä lainkaan.",
                "Hän ei halunnut käydä toimistolla.",
              ],
              answer: 0,
              explain: "In the exit interview he said he had never felt “kuuluvansa joukkoon”. The writer did answer, only late — so option B differs in a key point.",
            },
            {
              id: "k11r4q3",
              type: "mc",
              q: "Mitä kirjoittaja haluaa sanoa kahvikupin ääressä käydyistä keskusteluista?",
              options: [
                "Ne vievät liikaa aikaa varsinaiselta työltä.",
                "Niissä sovitaan, kuka hoitaa minkäkin tehtävän.",
                "Niissä opitaan työpaikan kirjoittamattomia sääntöjä.",
              ],
              answer: 2,
              explain: "In these chats people learn “miten työpaikalla oikeasti toimitaan” — things nobody writes in the instructions.",
            },
            {
              id: "k11r4q4",
              type: "mc",
              q: "Mitä kirjoittaja kertoo siitä, että hän vastaa viesteihin illalla?",
              options: [
                "Esihenkilö odottaa sitä häneltä.",
                "Hän tekee sitä omasta halustaan, koska se on vaivatonta.",
                "Hän on päättänyt lopettaa sen kokonaan.",
              ],
              answer: 1,
              explain: "“Vastaan viesteihin illalla, koska se on niin helppoa. Kukaan ei sitä minulta vaadi.”",
            },
            {
              id: "k11r4q5",
              type: "mc",
              q: "Mikä seuraavista on kolumnissa mielipide eikä tosiasia?",
              options: [
                "Tiimi päätti viime keväänä, että tiistaisin ollaan toimistolla.",
                "Osa tiimistä vastusti aluksi tiistaipäätöstä.",
                "Paluu kokopäiväiseen toimistotyöhön olisi askel taaksepäin.",
              ],
              answer: 2,
              explain: "“Se olisi askel taaksepäin” is the writer's judgement. The other two are reported events.",
            },
            {
              id: "k11r4q6",
              type: "mc",
              q: "Mikä on kolumnin pääajatus?",
              options: [
                "Etätyö toimii, kun työyhteisö sopii yhteisistä käytännöistä.",
                "Etätyöstä pitäisi luopua, koska se tekee ihmisistä yksinäisiä.",
                "Nuorten työntekijöiden pitäisi olla toimistolla useammin kuin muiden.",
              ],
              answer: 0,
              explain: "The solution is “yhteiset pelisäännöt”; remote work “on tullut jäädäkseen, ja hyvä niin”, but it needs care from managers.",
            },
          ],
        },
        {
          id: "k11r5",
          title: "Tehtävä 5: Mielipidekirjoitus",
          instructions: {
            fi: "Lue mielipidekirjoitus. Ovatko väitteet oikein vai väärin?",
            en: "Read the letter to the editor. Are the statements true (oikein) or false (väärin)?",
          },
          text: {
            title: "Taloyhtiön pitäisi etsiä säästöjä ennen kuin vastike nousee",
            body:
              "Asun 1970-luvulla rakennetussa kerrostalossa. Taloyhtiön hallitus ilmoitti viime viikolla, että hoitovastike nousee vuoden alusta 18 prosenttia. " +
              "Syyksi kerrottiin kaukolämmön ja sähkön hinnan nousu sekä tulevat korjaukset. Ymmärrän, että energia on kallistunut, enkä odota, että asuminen olisi ilmaista. " +
              "Minua kuitenkin harmittaa se, että asukkaille annettiin vain valmis päätös eikä lainkaan vaihtoehtoja.\n\n" +
              "Monissa taloyhtiöissä energialaskua on saatu pienemmäksi melko pienillä toimilla. Naapuritalon kokemusten mukaan jo lämmityksen säätäminen oikein " +
              "voi säästää jopa kymmenen prosenttia. Meillä porraskäytävien valot palavat edelleen koko yön, vaikka liiketunnistimet olisivat halpa ratkaisu. " +
              "Myös yhteinen sauna lämpiää joka ilta, vaikka varattuja vuoroja on vain muutama.\n\n" +
              "En väitä, että nämä keinot ratkaisisivat kaiken. Putkiremontti on edessä joka tapauksessa, ja se maksaa. Mutta jos asukkailta olisi kysytty, " +
              "moni olisi varmasti ollut valmis luopumaan saunavuorostaan tai tekemään talkootöitä pihalla, jos sillä voisi säästää rahaa.\n\n" +
              "Talossamme asuu paljon eläkeläisiä ja lapsiperheitä, joille sadan euron korotus kuukaudessa on iso asia. Ehdotan, että hallitus järjestää ennen kevään " +
              "yhtiökokousta asukasillan, jossa säästökeinoista keskustellaan avoimesti. Uskon, että yhdessä keksimme parempia ratkaisuja kuin kukaan yksin.\n\n" +
              "Leena Saarinen",
          },
          questions: [
            {
              id: "k11r5q1",
              type: "tf",
              q: "Kirjoittajan mielestä vastikkeen korottamiselle ei ole mitään syytä.",
              answer: false,
              explain: "She understands that energy has become more expensive and that the pipe renovation costs money.",
            },
            {
              id: "k11r5q2",
              type: "tf",
              q: "Kirjoittajaa harmittaa se, etteivät asukkaat saaneet vaikuttaa päätökseen.",
              answer: true,
              explain: "“Minua kuitenkin harmittaa se, että asukkaille annettiin vain valmis päätös eikä lainkaan vaihtoehtoja.”",
            },
            {
              id: "k11r5q3",
              type: "tf",
              q: "Tieto lämmityksen säätämisen hyödyistä perustuu toisen taloyhtiön kokemuksiin.",
              answer: true,
              explain: "“Naapuritalon kokemusten mukaan …”",
            },
            {
              id: "k11r5q4",
              type: "tf",
              q: "Kirjoittajan taloyhtiö on jo asentanut porraskäytäviin liiketunnistimet.",
              answer: false,
              explain: "The lights still burn all night, “vaikka liiketunnistimet olisivat halpa ratkaisu” — they have not been installed.",
            },
            {
              id: "k11r5q5",
              type: "tf",
              q: "Kirjoittaja uskoo, että säästämällä putkiremontti voitaisiin välttää.",
              answer: false,
              explain: "“Putkiremontti on edessä joka tapauksessa.”",
            },
            {
              id: "k11r5q6",
              type: "tf",
              q: "Kirjoittaja toivoo, että asukkaat pääsevät keskustelemaan säästöistä ennen yhtiökokousta.",
              answer: true,
              explain: "She proposes a residents' evening “ennen kevään yhtiökokousta”.",
            },
          ],
        },
        {
          id: "k11r6",
          title: "Tehtävä 6: Ohje",
          instructions: {
            fi: "Lue ohje ja vastaa kysymyksiin suomeksi. Vastaa lyhyesti.",
            en: "Read the instructions and answer the questions in Finnish. Answer briefly.",
          },
          text: {
            title: "Kirjaston e-aineistot – näin pääset alkuun",
            body:
              "Kirjastokortilla voit lainata e-kirjoja ja äänikirjoja sekä lukea lehtiä verkossa maksutta. Tarvitset kirjastokortin ja sen nelinumeroisen tunnusluvun. " +
              "Jos et muista tunnuslukua, voit vaihtaa sen verkkokirjastossa vahvalla tunnistautumisella tai pyytää uuden kirjaston asiakaspalvelusta. " +
              "Tunnuslukua ei turvallisuussyistä lähetetä sähköpostilla eikä tekstiviestillä.\n\n" +
              "1. Lataa puhelimeen tai tablettiin E-kirjasto-sovellus. Tietokoneella voit käyttää palvelua myös selaimessa.\n" +
              "2. Valitse kotikuntasi kirjasto ja kirjaudu sisään kirjastokortin numerolla ja tunnusluvulla.\n" +
              "3. Etsi haluamasi kirja ja paina Lainaa. Laina-aika on kolme viikkoa, ja kirja palautuu automaattisesti, kun laina-aika päättyy. Myöhästymismaksuja ei siis tule.\n\n" +
              "Voit lainata samaan aikaan enintään viisi e-kirjaa ja varata kymmenen. Suosituimpia kirjoja ei aina saa heti, koska kirjasto on hankkinut niihin " +
              "vain rajallisen määrän käyttöoikeuksia. Kun varaamasi kirja vapautuu, saat ilmoituksen sovellukseen, ja sinulla on kaksi vuorokautta aikaa lainata se.\n\n" +
              "E-lehtiä voi lukea vain kirjaston tiloissa kirjaston langattoman verkon kautta, sillä kustantajien kanssa tehty sopimus ei salli lehtien lukemista kotona.\n\n" +
              "Henkilökohtaista neuvontaa saat keskustakirjaston digiopastuksesta tiistaisin kello 14–16. Ota mukaan oma laitteesi.",
          },
          questions: [
            {
              id: "k11r6q1",
              type: "open",
              q: "Mitä voit tehdä, jos olet unohtanut tunnuslukusi?",
              hint: "(2 vaihtoehtoa)",
              accept: [
                "vaihtaa sen verkkokirjastossa vahvalla tunnistautumisella tai pyytää uuden asiakaspalvelusta",
                "vaihtaa netissä pankkitunnuksilla tai kysyä kirjastosta",
              ],
              keyNote: "Both: change it in the online library with strong identification AND ask for a new one at the library's customer service. Receiving it by email/SMS is wrong.",
              explain: "“voit vaihtaa sen verkkokirjastossa vahvalla tunnistautumisella tai pyytää uuden kirjaston asiakaspalvelusta.”",
            },
            {
              id: "k11r6q2",
              type: "open",
              q: "Miksi e-kirjasta ei tule myöhästymismaksua?",
              accept: ["koska se palautuu automaattisesti", "kirja palautuu itsestään, kun laina-aika loppuu"],
              keyNote: "Because the e-book is returned automatically when the loan period ends.",
              explain: "“kirja palautuu automaattisesti, kun laina-aika päättyy. Myöhästymismaksuja ei siis tule.”",
            },
            {
              id: "k11r6q3",
              type: "open",
              q: "Miksi suosittua e-kirjaa ei välttämättä saa heti lainaan?",
              accept: [
                "koska kirjastolla on vain rajallinen määrä käyttöoikeuksia",
                "kirjasto on ostanut siihen vain vähän käyttöoikeuksia",
                "lisenssejä on vain vähän",
              ],
              keyNote: "Because the library has only a limited number of licences (user rights) for it.",
              explain: "“kirjasto on hankkinut niihin vain rajallisen määrän käyttöoikeuksia.”",
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
          id: "k11w1",
          title: "Tehtävä 1: Viesti yhdistykselle",
          instructions: { fi: "Kirjoita viesti. Kirjoita noin 80–150 sanaa.", en: "Write a message of about 80–150 words." },
          prompt:
            "Asuinalueesi asukasyhdistys Kotikulma ry etsii vapaaehtoisia läksykerhoon, jossa autetaan koululaisia kotitehtävissä kahtena iltapäivänä viikossa. " +
            "Haluat mukaan toimintaan. Kirjoita sähköposti yhdistyksen vapaaehtoistoiminnan koordinaattorille Johanna Virtaselle.",
          bullets: [
            "Esittele itsesi lyhyesti.",
            "Kerro, miksi haluat vapaaehtoiseksi juuri läksykerhoon.",
            "Kerro, millaista kokemusta sinulla on lasten tai nuorten kanssa toimimisesta.",
            "Kerro, milloin sinulla on aikaa, ja kysy, voiko toimintaan osallistua myös harvemmin kuin joka viikko.",
            "Kysy, millaista perehdytystä vapaaehtoiset saavat.",
            "Kerro lisäksi ainakin kaksi muuta asiaa.",
            "Muista aloitus ja lopetus.",
          ],
          promptEn:
            "Your local residents' association is looking for volunteers for a homework club (two afternoons a week). Email the volunteer coordinator Johanna Virtanen: introduce yourself, say why you want to volunteer there, describe your experience with children/young people, say when you are available and ask whether you can take part less often than weekly, ask about the induction, and add at least two more points of your own.",
          register: "formal email to an organisation: Hyvä Johanna Virtanen / Hei Johanna Virtanen … Ystävällisin terveisin + full name; polite conditional (haluaisin, voisinko)",
          minWords: 80,
          maxWords: 150,
        },
        {
          id: "k11w2",
          title: "Tehtävä 2: Viesti ystävälle",
          instructions: { fi: "Kirjoita viesti. Kirjoita noin 60–120 sanaa.", en: "Write a message of about 60–120 words." },
          prompt:
            "Kävit viime viikonloppuna kaupungin kulttuurifestivaalilla. Ystäväsi Laura ei päässyt mukaan, koska hän oli sairaana. Kirjoita hänelle viesti.",
          bullets: [
            "Kysy, miten Laura nyt voi.",
            "Kerro, mitä festivaalilla tapahtui ja mikä jäi sinulle parhaiten mieleen.",
            "Kerro, mikä ei mennyt niin kuin odotit.",
            "Ehdota, mitä voisitte tehdä yhdessä lähiaikoina, ja perustele ehdotuksesi.",
            "Muista aloitus ja lopetus.",
          ],
          promptEn:
            "Last weekend you went to the city's culture festival; your friend Laura could not come because she was ill. Write to her: ask how she is, tell what happened and what you remember best, say what did not go as expected, and suggest something to do together soon with a reason.",
          register: "informal message to a friend: Moi Laura! / Hei Laura! … Halauksin / Nähdään! + first name; past tense narration, colloquial tone allowed",
          minWords: 60,
          maxWords: 120,
        },
        {
          id: "k11w3",
          title: "Tehtävä 3: Mielipideteksti",
          instructions: { fi: "Kirjoita mielipideteksti. Kirjoita noin 100–180 sanaa.", en: "Write an opinion text of about 100–180 words." },
          prompt:
            "Paikallislehti kerää verkkosivuilleen lukijoiden mielipiteitä ajankohtaisista aiheista. Valitse aihe A tai B ja kirjoita mielipidekirjoitus.",
          bullets: [
            "A. Kaupunki suunnittelee, että keskustan pääkadusta tehdään kävelykatu ja autoliikenne ohjataan muualle.",
            "B. Yhä useampi julkinen palvelu, esimerkiksi Kela ja verotoimisto, toimii nykyään pääasiassa verkossa. Pitäisikö palvelua saada edelleen myös kasvokkain?",
            "Kerro, mistä on kyse ja mitä mieltä olet asiasta. Perustele mielipiteesi ainakin kolmella tavalla.",
          ],
          promptEn:
            "A local newspaper collects readers' opinions. Choose A (turning the main street into a pedestrian street) or B (public services moving mainly online — should face-to-face service remain?). Say what the issue is and what you think, and justify your opinion in at least three ways.",
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
        "Tässä osakokeessa kuuntelet erilaisia puhuttuja tekstejä: haastattelun, keskustelun kaupassa, puhelun, radiouutisen sekä lyhyitä mainoksia ja tiedotteita. Osakokeessa on viisi tehtävää. Ennen jokaista tekstiä sinulla on aikaa lukea kysymykset. Kuulet jokaisen tekstin kaksi kertaa. Pitkät tekstit kuulet toisella kerralla osissa, ja osien välissä on aikaa vastata. Äänite etenee automaattisesti, etkä voi pysäyttää sitä. Vastaa avoimiin kysymyksiin suomeksi ja lyhyesti.",
      aika: "Osakoe kestää noin 40 minuuttia.",
      tasks: [
        {
          id: "k11l1",
          title: "Tehtävä 1: Haastattelu",
          instructions: {
            fi: "Kuulet haastattelun kaksi kertaa. Lue ensin kysymykset. Valitse oikea vaihtoehto.",
            en: "You will hear an interview twice. Read the questions first. Choose the correct option.",
          },
          situation: "Paikallisradiossa haastatellaan Mirja Koskista, joka koordinoi ruoka-avun vapaaehtoisia.",
          plays: 2,
          rate: 1.0,
          lines: [
            {
              speaker: "Toimittaja",
              text: "Tervetuloa studioon, Mirja. Sä vastaat ruoka-avun vapaaehtoisista täällä Koskelassa. Kuinka monta ihmistä teillä käy viikossa?",
            },
            {
              speaker: "Mirja",
              text:
                "Kiitos kutsusta. No, viime vuonna meillä kävi noin kaksisataa ihmistä viikossa, mutta nyt määrä on melkein tuplaantunut. Sanotaan, että lähes neljäsataa. " +
                "Eikä ne ole enää pelkästään työttömiä tai eläkeläisiä, vaan yhä useammin lapsiperheitä, joissa molemmat vanhemmat käy töissä.",
            },
            { speaker: "Toimittaja", text: "Mistä se johtuu?" },
            {
              speaker: "Mirja",
              text:
                "Kyllä ne syyt on aika selvät. Vuokrat ja sähkö on kallistuneet, ruoka samoin, mutta palkat ei ole nousseet samaa tahtia. " +
                "Moni kertoo, että vuokran ja laskujen jälkeen ruokaan ei vaan jää rahaa.",
            },
            { speaker: "Toimittaja", text: "Millaisia vapaaehtoisia teillä on?" },
            {
              speaker: "Mirja",
              text:
                "Tosi erilaisia. On opiskelijoita, eläkeläisiä ja yllättävän paljon myös työssäkäyviä, jotka tulee lauantaisin. " +
                "Osa on itsekin joskus saanut ruoka-apua ja haluaa nyt auttaa muita. Musta se on hienoa.",
            },
            { speaker: "Toimittaja", text: "Mitä vapaaehtoisen pitää osata?" },
            {
              speaker: "Mirja",
              text:
                "Ei mitään erityistä, oikeastaan. Hygieniapassia me ei vaadita, koska jaamme vain pakattuja tuotteita. Tärkeintä on, että sitoutuu edes pariksi kuukaudeksi " +
                "ja että osaa kohdata ihmisiä kunnioittavasti. Monelle on tosi iso kynnys tulla jonoon, ja yksikin ikävä kommentti voi riittää siihen, ettei ihminen tule enää uudestaan.",
            },
            { speaker: "Toimittaja", text: "Onko teillä nyt tarpeeksi vapaaehtoisia?" },
            {
              speaker: "Mirja",
              text:
                "Arkipäiviin kyllä, ja lauantaisinkin nyt aika hyvin. Mutta erityisesti tarvittaisiin ihmisiä, joilla on ajokortti, koska haemme ruoan kaupoista omalla pakettiautolla. " +
                "Kaupat lahjoittaa meille tuotteita, joiden päiväys on menossa umpeen.",
            },
            { speaker: "Toimittaja", text: "Miten mukaan pääsee?" },
            {
              speaker: "Mirja",
              text:
                "Helpoiten täyttämällä lomakkeen meidän nettisivuilla. Ennen ensimmäistä vuoroa kaikki tulee noin tunnin perehdytykseen. " +
                "Ja kyllä meille saa myös ensin vain tulla katsomaan, millaista toiminta on, ennen kuin päättää mitään.",
            },
          ],
          questions: [
            {
              id: "k11l1q1",
              type: "mc",
              q: "Miten ruoka-avun käyttäjien määrä on muuttunut?",
              options: [
                "Se on kasvanut noin sadalla hengellä.",
                "Se on lähes kaksinkertaistunut vuodessa.",
                "Se on pysynyt samana, mutta asiakkaat ovat erilaisia.",
              ],
              answer: 1,
              explain: "From about 200 a week last year to almost 400: “määrä on melkein tuplaantunut”.",
            },
            {
              id: "k11l1q2",
              type: "mc",
              q: "Mikä ryhmä on Mirjan mukaan yleistynyt ruoka-avun asiakkaissa?",
              options: [
                "perheet, joissa molemmat vanhemmat ovat töissä",
                "työttömät nuoret",
                "yksin asuvat eläkeläiset",
              ],
              answer: 0,
              explain: "“yhä useammin lapsiperheitä, joissa molemmat vanhemmat käy töissä.” The unemployed and pensioners were already there before.",
            },
            {
              id: "k11l1q3",
              type: "mc",
              q: "Mikä on Mirjan mukaan syy tilanteeseen?",
              options: [
                "Työttömyys on lisääntynyt nopeasti.",
                "Elämisen kustannukset ovat nousseet palkkoja nopeammin.",
                "Ruoka-apu on tullut tunnetummaksi.",
              ],
              answer: 1,
              explain: "Rent, electricity and food have become more expensive, “mutta palkat ei ole nousseet samaa tahtia”.",
            },
            {
              id: "k11l1q4",
              type: "mc",
              q: "Mitä vapaaehtoiselta odotetaan?",
              options: [
                "hygieniapassia",
                "aiempaa kokemusta vapaaehtoistyöstä",
                "sitoutumista ja ihmisten kunnioittavaa kohtaamista",
              ],
              answer: 2,
              explain: "“Tärkeintä on, että sitoutuu edes pariksi kuukaudeksi ja että osaa kohdata ihmisiä kunnioittavasti.” A hygiene pass is explicitly not required.",
            },
            {
              id: "k11l1q5",
              type: "mc",
              q: "Millaisia vapaaehtoisia tarvitaan nyt erityisesti?",
              options: [
                "ihmisiä, jotka pääsevät mukaan lauantaisin",
                "ihmisiä, joilla on ajokortti",
                "ihmisiä, jotka voivat lahjoittaa ruokaa",
              ],
              answer: 1,
              explain: "Saturdays are now covered “aika hyvin”; drivers are needed for the van that collects food from shops.",
            },
            {
              id: "k11l1q6",
              type: "mc",
              q: "Mitä uuden vapaaehtoisen täytyy tehdä ennen ensimmäistä vuoroa?",
              options: [
                "osallistua lyhyeen perehdytykseen",
                "käydä ensin seuraamassa toimintaa",
                "suorittaa verkkokurssi",
              ],
              answer: 0,
              explain: "“Ennen ensimmäistä vuoroa kaikki tulee noin tunnin perehdytykseen.” Visiting first is allowed but optional (“saa”).",
            },
          ],
        },
        {
          id: "k11l2",
          title: "Tehtävä 2: Keskustelu kaupassa",
          instructions: {
            fi: "Kuulet keskustelun kaksi kertaa. Ovatko väitteet oikein vai väärin?",
            en: "You will hear a conversation twice. Are the statements true or false?",
          },
          situation: "Asiakas tulee elektroniikkaliikkeeseen rikkinäisten kuulokkeiden kanssa.",
          plays: 2,
          rate: 1.0,
          lines: [
            { speaker: "Myyjä", text: "Päivää, miten voin auttaa?" },
            {
              speaker: "Asiakas",
              text: "Hei. Ostin nää langattomat kuulokkeet teiltä, tai siis ei kun, ne oli lahja. Mun puoliso osti ne täältä viime keväänä. Nyt vasen kuuloke ei lataudu enää ollenkaan.",
            },
            { speaker: "Myyjä", text: "Ahaa. Onko teillä kuitti mukana?" },
            { speaker: "Asiakas", text: "Paperista kuittia ei ole, mutta mulla on puhelimessa kuva siitä. Kelpaako se?" },
            {
              speaker: "Myyjä",
              text: "Kyllä kelpaa, kunhan siitä näkyy päivämäärä ja tuote. Joo, tässä näkyy… maaliskuun kahdestoista. Eli valmistajan takuu on voimassa vielä melkein vuoden.",
            },
            { speaker: "Asiakas", text: "Hyvä. Saanko mä sitten uudet tilalle heti?" },
            {
              speaker: "Myyjä",
              text:
                "Valitettavasti ei ihan heti. Meidän pitää lähettää ne valmistajan huoltoon, ja siellä katsotaan, kuuluuko vika takuuseen. " +
                "Jos kuulokkeet on esimerkiksi pudonneet veteen, takuu ei korvaa. Huolto kestää yleensä kahdesta kolmeen viikkoa.",
            },
            { speaker: "Asiakas", text: "Kolme viikkoa? Mä tarviin niitä joka päivä työmatkoilla. Eikö teillä ole mitään lainakuulokkeita?" },
            {
              speaker: "Myyjä",
              text:
                "Lainalaitteita meillä ei valitettavasti ole. Mutta jos huollossa todetaan, ettei niitä voi korjata, saatte joko uudet samanlaiset tai rahat takaisin. " +
                "Ja jos samaa mallia ei enää ole, voitte valita toisen samanhintaisen.",
            },
            { speaker: "Asiakas", text: "Okei. Entä jos huolto väittää, että ne on pudonneet veteen? Ei ne ole, mutta jos." },
            {
              speaker: "Myyjä",
              text:
                "Silloin huolto tekee kirjallisen arvion ja kertoo korjauksen hinnan, ja te päätätte itse, korjataanko ne vai ei. Mitään ei tehdä ilman teidän lupaa. Arvio on maksuton.",
            },
            { speaker: "Asiakas", text: "Selvä. Laitetaan ne sitten huoltoon." },
          ],
          questions: [
            {
              id: "k11l2q1",
              type: "tf",
              q: "Asiakas osti kuulokkeet itse viime keväänä.",
              answer: false,
              explain: "He corrects himself: they were a gift — his partner bought them.",
            },
            {
              id: "k11l2q2",
              type: "tf",
              q: "Puhelimessa oleva kuva kuitista riittää.",
              answer: true,
              explain: "“Kyllä kelpaa, kunhan siitä näkyy päivämäärä ja tuote.”",
            },
            {
              id: "k11l2q3",
              type: "tf",
              q: "Kuulokkeiden takuu on jo päättynyt.",
              answer: false,
              explain: "“valmistajan takuu on voimassa vielä melkein vuoden.”",
            },
            {
              id: "k11l2q4",
              type: "tf",
              q: "Huollossa selvitetään, korvaako takuu vian.",
              answer: true,
              explain: "“siellä katsotaan, kuuluuko vika takuuseen.”",
            },
            {
              id: "k11l2q5",
              type: "tf",
              q: "Asiakas saa huollon ajaksi lainaksi toiset kuulokkeet.",
              answer: false,
              explain: "“Lainalaitteita meillä ei valitettavasti ole.”",
            },
            {
              id: "k11l2q6",
              type: "tf",
              q: "Jos vika ei kuulu takuuseen, kuulokkeet korjataan automaattisesti asiakkaan laskuun.",
              answer: false,
              explain: "The customer gets a free written estimate and decides: “Mitään ei tehdä ilman teidän lupaa.”",
            },
          ],
        },
        {
          id: "k11l3",
          title: "Tehtävä 3: Puhelu sähköyhtiöön",
          instructions: {
            fi: "Kuulet puhelun kaksi kertaa. Lue ensin kysymykset. Vastaa lyhyesti suomeksi.",
            en: "You will hear a phone call twice. Read the questions first. Answer briefly in Finnish.",
          },
          situation: "Ahmed soittaa sähköyhtiön asiakaspalveluun.",
          plays: 2,
          rate: 1.0,
          lines: [
            { speaker: "Asiakaspalvelija", text: "Lumivoima, asiakaspalvelu, Sanna puhelimessa." },
            {
              speaker: "Ahmed",
              text:
                "Hei, täällä Ahmed Hassan. Mä soitan, koska sain eilen sähkölaskun, ja se oli melkein kolmesataa euroa. Yleensä mä maksan noin kahdeksankymmentä euroa kuussa. Onko tässä joku virhe?",
            },
            { speaker: "Asiakaspalvelija", text: "Katsotaan. Voisitteko kertoa osoitteenne?" },
            { speaker: "Ahmed", text: "Kivikatu neljä B kaksitoista." },
            {
              speaker: "Asiakaspalvelija",
              text:
                "Kiitos. Joo, tässä näkyy, että teillä on pörssisähkösopimus, eli hinta vaihtelee tunneittain. Tammikuussa oli pari viikkoa tosi kovat pakkaset, " +
                "ja silloin sähkö oli välillä todella kallista, varsinkin aamuisin ja iltaisin.",
            },
            { speaker: "Ahmed", text: "Mutta mä luulin, että mulla on kiinteä hinta. Mä tein sopimuksen kaksi vuotta sitten." },
            {
              speaker: "Asiakaspalvelija",
              text:
                "Teillä oli kiinteän hinnan sopimus, mutta se oli määräaikainen ja päättyi viime syksynä. Me lähetimme siitä silloin sähköpostia, " +
                "ja koska uutta sopimusta ei tehty, se muuttui automaattisesti pörssisähköksi.",
            },
            { speaker: "Ahmed", text: "Ai. En mä kyllä muista mitään sähköpostia. Voinko mä vaihtaa takaisin kiinteään?" },
            {
              speaker: "Asiakaspalvelija",
              text: "Voitte. Tällä hetkellä kiinteä hinta on kaksitoista senttiä kilowattitunnilta, ja sopimus tehdään vuodeksi. Jos teette sopimuksen tänään, se alkaa ensi kuun alusta.",
            },
            { speaker: "Ahmed", text: "Entä tää lasku? Mä en pysty maksamaan sitä kerralla." },
            {
              speaker: "Asiakaspalvelija",
              text:
                "Laskun voi jakaa osiin. Voin tehdä teille maksusuunnitelman, jolloin maksatte sen kolmessa erässä ilman lisäkuluja. Ensimmäinen erä erääntyy normaalisti kuun lopussa.",
            },
            { speaker: "Ahmed", text: "Hyvä, tehdään niin. Ja sitten mä haluaisin sen kiinteän sopimuksen." },
            {
              speaker: "Asiakaspalvelija",
              text:
                "Selvä. Lähetän sopimuksen teidän sähköpostiin, ja teidän pitää vielä hyväksyä se tunnistautumalla verkkopankkitunnuksilla. Ja tarkistakaa myös roskapostikansio.",
            },
          ],
          questions: [
            {
              id: "k11l3q1",
              type: "open",
              q: "Miksi Ahmedin sähkölasku oli tavallista suurempi?",
              hint: "(2 asiaa)",
              accept: [
                "hänellä oli pörssisähkö ja sähkö oli tammikuussa kallista pakkasten takia",
                "hinta vaihtelee tunneittain ja tammikuussa oli kovat pakkaset",
                "pörssisähkösopimus, kalliit pakkaspäivät",
              ],
              keyNote: "Both: he had a spot-price (exchange) contract whose price varies hourly AND electricity was very expensive in January because of the hard frosts.",
              explain: "“teillä on pörssisähkösopimus … Tammikuussa oli pari viikkoa tosi kovat pakkaset, ja silloin sähkö oli välillä todella kallista.”",
            },
            {
              id: "k11l3q2",
              type: "open",
              q: "Miksi Ahmedin sopimus oli muuttunut?",
              accept: [
                "määräaikainen kiinteä sopimus päättyi, eikä hän tehnyt uutta",
                "vanha sopimus loppui syksyllä ja muuttui automaattisesti pörssisähköksi",
                "koska hän ei tehnyt uutta sopimusta",
              ],
              keyNote: "His fixed-term fixed-price contract ended (last autumn) and, because no new contract was made, it switched automatically to spot price.",
              explain: "“se oli määräaikainen ja päättyi viime syksynä … koska uutta sopimusta ei tehty, se muuttui automaattisesti pörssisähköksi.”",
            },
            {
              id: "k11l3q3",
              type: "open",
              q: "Miten Ahmed maksaa suuren laskun?",
              accept: ["kolmessa erässä", "maksusuunnitelmalla kolmessa osassa", "kolmessa osassa ilman lisäkuluja"],
              keyNote: "In three instalments (payment plan), without extra costs.",
              explain: "“maksatte sen kolmessa erässä ilman lisäkuluja.”",
            },
            {
              id: "k11l3q4",
              type: "open",
              q: "Mitä Ahmedin pitää vielä tehdä, jotta uusi sopimus tulee voimaan?",
              accept: [
                "hyväksyä sopimus tunnistautumalla verkkopankkitunnuksilla",
                "hyväksyä sopimus pankkitunnuksilla",
                "tunnistautua ja hyväksyä sopimus",
              ],
              keyNote: "Approve the contract (sent by email) by identifying himself with online banking credentials. 'Check the spam folder' alone is not enough.",
              explain: "“teidän pitää vielä hyväksyä se tunnistautumalla verkkopankkitunnuksilla.”",
            },
          ],
        },
        {
          id: "k11l4",
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
                "Poistotekstiilien keräys muuttuu ensi vuoden alusta koko jätehuoltoyhtiön alueella, myös naapurikunnissa. Tähän asti asukkaat ovat voineet viedä rikkinäiset ja kuluneet vaatteet ja muut tekstiilit maksutta " +
                "kahteentoista keräyspisteeseen eri puolilla kaupunkia. Ensi vuodesta lähtien keräyspisteitä on enää viisi, ja ne kaikki sijaitsevat jäteasemilla.",
            },
            {
              speaker: "Uutistenlukija",
              text:
                "Jätehuoltoyhtiön mukaan muutos johtuu siitä, että keräyspisteisiin on tuotu paljon tavaraa, joka ei sinne kuulu. Viime vuonna lähes kolmasosa " +
                "kerätystä materiaalista oli likaista tai märkää, eikä sitä voitu käyttää uudelleen. Sen käsittely maksoi yhtiölle kymmeniä tuhansia euroja. " +
                "Jäteasemilla tekstiilit lajitellaan, ja niistä valmistetaan esimerkiksi eristeitä ja uutta lankaa.",
            },
            {
              speaker: "Uutistenlukija",
              text:
                "Ehjät ja puhtaat vaatteet kannattaa edelleen viedä kirpputorille tai hyväntekeväisyysjärjestöjen keräyksiin. Poistotekstiileihin taas kuuluvat " +
                "esimerkiksi reikäiset lakanat, pyyhkeet ja vaatteet, joita ei enää voi käyttää. Kenkiä, mattoja ja tyynyjä ei kuitenkaan saa laittaa poistotekstiilien keräykseen, " +
                "vaan ne kuuluvat sekajätteeseen.",
            },
            {
              speaker: "Uutistenlukija",
              text:
                "Asukasyhdistykset ovat arvostelleet muutosta. Niiden mukaan jäteasemat ovat kaukana keskustasta, ja ilman autoa niille on hankala päästä. " +
                "Jätehuoltoyhtiö lupaa, että keskustassa järjestetään keväällä ja syksyllä kiertäviä keräyspäiviä, joiden ajat ilmoitetaan yhtiön verkkosivuilla.",
            },
          ],
          questions: [
            {
              id: "k11l4q1",
              type: "mc",
              q: "Mitä keräyspisteille tapahtuu ensi vuonna?",
              options: ["Niiden määrä vähenee.", "Niistä tulee maksullisia.", "Ne siirretään keskustaan."],
              answer: 0,
              explain: "From twelve collection points to five, all at waste stations.",
            },
            {
              id: "k11l4q2",
              type: "mc",
              q: "Miksi muutos tehdään?",
              options: [
                "Keräyspisteitä käytettiin liian vähän.",
                "Suuri osa kerätystä materiaalista oli käyttökelvotonta.",
                "Kaupunki haluaa säästää keräyspisteiden vuokrissa.",
              ],
              answer: 1,
              explain: "Almost a third was dirty or wet “eikä sitä voitu käyttää uudelleen”, and handling it was expensive.",
            },
            {
              id: "k11l4q3",
              type: "mc",
              q: "Mihin ehjät vaatteet kannattaa viedä?",
              options: ["jäteasemalle", "sekajätteeseen", "kirpputorille tai hyväntekeväisyyteen"],
              answer: 2,
              explain: "“Ehjät ja puhtaat vaatteet kannattaa edelleen viedä kirpputorille tai hyväntekeväisyysjärjestöjen keräyksiin.”",
            },
            {
              id: "k11l4q4",
              type: "mc",
              q: "Mitä ei saa laittaa poistotekstiilien keräykseen?",
              options: ["rikkinäisiä pyyhkeitä", "kuluneita kenkiä", "reikäisiä lakanoita"],
              answer: 1,
              explain: "Shoes, rugs and pillows go to mixed waste. Towels and sheets with holes belong to textile collection.",
            },
            {
              id: "k11l4q5",
              type: "mc",
              q: "Miten jätehuoltoyhtiö vastaa asukasyhdistysten arvosteluun?",
              options: [
                "Keskustassa järjestetään ajoittain keräyspäiviä.",
                "Keskustan lähelle avataan uusi jäteasema.",
                "Tekstiilit haetaan kotoa maksua vastaan.",
              ],
              answer: 0,
              explain: "“keskustassa järjestetään keväällä ja syksyllä kiertäviä keräyspäiviä.”",
            },
          ],
        },
        {
          id: "k11l5",
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
                "Kansalaisopiston kevään kurssit alkavat! Ilmoittautuminen avautuu verkossa maanantaina kello yhdeksän. Suosituimmat kurssit, kuten keramiikka ja tanssi, " +
                "täyttyvät yleensä ensimmäisen tunnin aikana. Jos et pysty ilmoittautumaan verkossa, voit soittaa toimistoon, mutta huomaa, että puhelinpalvelu aukeaa vasta kello kymmenen.",
            },
            {
              speaker: "Tiedote 2",
              text:
                "Kaupunginteatterin tiedote. Lauantain näytöksen päänäyttelijä on sairastunut. Esitys pidetään silti, mutta roolin tekee varanäyttelijä. " +
                "Jos haluat vaihtaa lippusi toiseen näytökseen, voit tehdä sen maksutta lipunmyynnissä perjantaihin mennessä. Lippujen hintaa ei palauteta.",
            },
            {
              speaker: "Mainos 3",
              text:
                "Uusi Kuntoplus-sovellus: treenaa kotona omaan tahtiisi! Ensimmäinen kuukausi on ilmainen. Sen jälkeen tilaus jatkuu automaattisesti " +
                "hintaan yhdeksän euroa yhdeksänkymmentä senttiä kuukaudessa, ellet peru sitä viimeistään kolme päivää ennen kokeilujakson loppua.",
            },
            {
              speaker: "Tiedote 4",
              text:
                "Pääkirjaston kolmas kerros on suljettu remontin vuoksi koko maaliskuun. Lasten ja nuorten kirjat on siirretty toiseen kerrokseen, " +
                "mutta musiikkihuoneet eivät ole käytössä remontin aikana. Varaukset voi noutaa normaalisti ensimmäisestä kerroksesta.",
            },
            {
              speaker: "Mainos 5",
              text:
                "Pyöräile töihin -kampanja alkaa toukokuussa! Kirjaa pyöräilemäsi kilometrit sovellukseen, niin voit voittaa uuden sähköpyörän. " +
                "Mukaan pääsee yksin tai joukkueena, mutta arvontaan osallistuvat vain ne, jotka ovat pyöräilleet kuukauden aikana vähintään sata kilometriä.",
            },
          ],
          questions: [
            {
              id: "k11l5q1",
              type: "tf",
              q: "Mainos 1: Puhelimella ilmoittautuva ehtii suosituille kursseille yhtä hyvin kuin verkossa ilmoittautuva.",
              answer: false,
              explain: "Popular courses fill within the first hour (9–10), but the phone line opens only at ten.",
            },
            {
              id: "k11l5q2",
              type: "tf",
              q: "Tiedote 2: Lauantain esityksen lipun voi vaihtaa toiseen näytökseen ilman lisämaksua.",
              answer: true,
              explain: "“voit tehdä sen maksutta lipunmyynnissä perjantaihin mennessä.” Only refunds are not given.",
            },
            {
              id: "k11l5q3",
              type: "tf",
              q: "Mainos 3: Jos käyttäjä ei tee mitään, sovelluksesta alkaa tulla maksu kuukauden kuluttua.",
              answer: true,
              explain: "The subscription continues automatically at 9.90 €/month unless cancelled three days before the trial ends.",
            },
            {
              id: "k11l5q4",
              type: "tf",
              q: "Tiedote 4: Musiikkihuoneet on siirretty remontin ajaksi toiseen kerrokseen.",
              answer: false,
              explain: "The children's and youth books moved to the second floor; the music rooms are not in use at all during the renovation.",
            },
            {
              id: "k11l5q5",
              type: "tf",
              q: "Mainos 5: Kaikki kampanjaan osallistuvat pääsevät mukaan sähköpyörän arvontaan.",
              answer: false,
              explain: "Only those who cycle at least 100 km during the month take part in the draw.",
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
          id: "k11s1",
          kind: "kertominen",
          title: "Tehtävä 1: Kertominen",
          instructions: {
            fi: "Sinulla on minuutti aikaa valmistautua. Voit tehdä muistiinpanoja. Puhu noin puolitoista minuuttia. Aloita puhuminen vasta, kun kuulet äänimerkin.",
            en: "You have one minute to prepare and may take notes. Speak for about a minute and a half. Start only after the beep.",
          },
          prepSec: 60,
          card: {
            title: "Kerro, miten pidät huolta omasta hyvinvoinnistasi arjessa.",
            questions: [
              "Mitä teet, jotta jaksat töissä tai opiskelussa?",
              "Miten liikut, syöt ja lepäät tavallisella viikolla?",
              "Mikä on muuttunut hyvinvoinnissasi viime vuosina?",
              "Mitä haluaisit tehdä toisin tulevaisuudessa?",
            ],
          },
          items: [{ id: "a", spoken: "Kerro, miten pidät huolta omasta hyvinvoinnistasi arjessa. Aloita puhuminen nyt.", speakSec: 90 }],
        },
        {
          id: "k11s2",
          kind: "keskustelu",
          title: "Tehtävä 2: Keskustelu A",
          instructions: {
            fi: "Kuulet keskustelun, jossa puhut vuorotellen toisen henkilön kanssa. Lue tilanne ja ohjeet. Puhu, kun kuulet äänimerkin.",
            en: "You will take turns with another speaker. Read the situation and the cues. Speak after the beep.",
          },
          prepSec: 30,
          card: {
            title:
              "Tilasit verkkokaupasta talvitakin kaksi viikkoa sitten. Paketti ei ole tullut, vaikka seurantatiedon mukaan se on toimitettu. Soitat verkkokaupan asiakaspalveluun.",
            questions: [],
          },
          items: [
            {
              id: "a",
              spoken: "Hyvää päivää, Pohjoismuoti, asiakaspalvelu. Kuinka voin auttaa?",
              cue: "[Esittele itsesi ja kerro, miksi soitat.]",
              speakSec: 20,
            },
            {
              id: "b",
              spoken: "Ikävä kuulla. Milloin teitte tilauksen, ja mitä tilasitte?",
              cue: "[Kerro, milloin tilasit ja mitä tilasit.]",
              speakSec: 15,
            },
            {
              id: "c",
              spoken: "Kiitos, löysin tilauksen. Järjestelmän mukaan paketti on toimitettu teidän postilaatikkoonne viime torstaina. Oletteko varma, ettei se ole siellä?",
              cue: "[Kerro, mitä olet jo tehnyt paketin löytämiseksi.]",
              speakSec: 20,
            },
            {
              id: "d",
              spoken: "Ymmärrän. Valitettavasti voimme lähettää uuden takin vasta, kun kuljetusyhtiö on selvittänyt asian, ja se voi kestää kaksi viikkoa.",
              cue: "[Kerro, miksi tarvitset takin pian, ja ehdota ratkaisua.]",
              speakSec: 25,
            },
            {
              id: "e",
              spoken: "Hmm. Voin palauttaa rahat heti, mutta silloin tilaus perutaan. Tai sitten odotatte selvitystä. Kumman vaihtoehdon valitsette?",
              cue: "[Valitse vaihtoehto ja perustele valintasi.]",
              speakSec: 20,
            },
            {
              id: "f",
              spoken: "Selvä. Lähetän teille vielä vahvistuksen sähköpostiin. Voinko auttaa vielä jossain muussa?",
              cue: "[Kysy, miten voit seurata asian etenemistä, ja kiitä.]",
              speakSec: 15,
            },
          ],
        },
        {
          id: "k11s3",
          kind: "keskustelu",
          title: "Tehtävä 2: Keskustelu B",
          instructions: {
            fi: "Kuulet keskustelun, jossa puhut vuorotellen toisen henkilön kanssa. Lue tilanne ja ohjeet. Puhu, kun kuulet äänimerkin.",
            en: "You will take turns with another speaker. Read the situation and the cues. Speak after the beep.",
          },
          prepSec: 30,
          card: {
            title:
              "Olet ollut puoli vuotta töissä toimistossa. Haluaisit tehdä etätöitä kaksi päivää viikossa. Menet esihenkilösi Marjan luo keskustelemaan asiasta. Sinä aloitat.",
            questions: [],
          },
          items: [
            { id: "a", spoken: "", cue: "[Tervehdi Marjaa ja kerro, mistä haluat puhua.]", speakSec: 15 },
            {
              id: "b",
              spoken: "Ahaa, etätyötä. Kerro vähän tarkemmin, miksi haluaisit tehdä töitä kotona.",
              cue: "[Kerro ainakin kaksi syytä.]",
              speakSec: 25,
            },
            {
              id: "c",
              spoken: "Ymmärrän. Mutta meille on tullut paljon uusia työntekijöitä, ja he tarvitsevat tukea. Miten huolehtisit siitä, että he saavat apua silloinkin, kun olet kotona?",
              cue: "[Vastaa ja ehdota käytännön ratkaisua.]",
              speakSec: 25,
            },
            {
              id: "d",
              spoken: "Hyvä ajatus. Entä asiakastapaamiset? Ne ovat yleensä tiistaisin ja torstaisin.",
              cue: "[Kerro, mitkä päivät sopisivat sinulle etäpäiviksi, ja perustele.]",
              speakSec: 20,
            },
            {
              id: "e",
              spoken: "Okei. Voisimme kokeilla tätä aluksi kolmen kuukauden ajan. Mitä mieltä olet?",
              cue: "[Kerro mielipiteesi ja kysy, miten kokeilun onnistumista arvioidaan.]",
              speakSec: 20,
            },
            {
              id: "f",
              spoken: "Pidetään kokeilun lopuksi lyhyt palaveri ja katsotaan yhdessä, miten se on sujunut. Sopiiko?",
              cue: "[Vahvista sopimus ja kiitä.]",
              speakSec: 10,
            },
          ],
        },
        {
          id: "k11s4",
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
              situation: "Ystäväsi kutsuu sinut lauantaina syntymäpäiväjuhliinsa, mutta olet jo luvannut auttaa toista ystävää muutossa. Mitä sanot?",
              spoken: "Tilanne 1. Ystäväsi kutsuu sinut lauantaina syntymäpäiväjuhliinsa, mutta olet jo luvannut auttaa toista ystävää muutossa. Mitä sanot?",
              prepSec: 20,
              speakSec: 20,
            },
            {
              id: "b",
              situation: "Soitat terveysasemalle, koska et pääse huomiseksi varattuun aikaan. Haluat samalla varata uuden ajan. Mitä sanot?",
              spoken: "Tilanne 2. Soitat terveysasemalle, koska et pääse huomiseksi varattuun aikaan. Haluat samalla varata uuden ajan. Mitä sanot?",
              prepSec: 20,
              speakSec: 30,
            },
            {
              id: "c",
              situation: "Lupasit palauttaa työkaverilta lainaamasi kirjan tänään, mutta unohdit sen kotiin. Työkaveri kysyy kirjasta. Mitä sanot?",
              spoken: "Tilanne 3. Lupasit palauttaa työkaverilta lainaamasi kirjan tänään, mutta unohdit sen kotiin. Työkaveri kysyy kirjasta. Mitä sanot?",
              prepSec: 20,
              speakSec: 30,
            },
            {
              id: "d",
              situation: "Odotit ravintolassa ruokaasi yli puoli tuntia, ja nyt se on kylmää. Tarjoilija tulee kysymään, onko kaikki hyvin. Mitä sanot?",
              spoken: "Tilanne 4. Odotit ravintolassa ruokaasi yli puoli tuntia, ja nyt se on kylmää. Tarjoilija tulee kysymään, onko kaikki hyvin. Mitä sanot?",
              prepSec: 20,
              speakSec: 30,
            },
            {
              id: "e",
              situation: "Olet lähdössä viikoksi matkalle. Pyydät naapuriasi kastelemaan kukkasi ja tyhjentämään postilaatikkosi. Mitä sanot?",
              spoken: "Tilanne 5. Olet lähdössä viikoksi matkalle. Pyydät naapuriasi kastelemaan kukkasi ja tyhjentämään postilaatikkosi. Mitä sanot?",
              prepSec: 20,
              speakSec: 30,
            },
          ],
        },
        {
          id: "k11s5",
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
              "A. Maksuton joukkoliikenne: Pitäisikö bussien ja raitiovaunujen olla kaupungeissa ilmaisia? Mitä hyötyä ja mitä haittaa siitä olisi? Kenen pitäisi maksaa kustannukset?",
              "B. Kuluttaminen: Ostavatko ihmiset nykyään liikaa tavaraa? Miksi netistä ostetaan niin paljon? Mitä jokainen voisi tehdä toisin?",
            ],
          },
          items: [{ id: "a", spoken: "Kerro mielipiteesi valitsemastasi aiheesta. Aloita puhuminen nyt.", speakSec: 120 }],
        },
      ],
    },
  ],
};
