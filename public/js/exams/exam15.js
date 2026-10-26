// Keskitaso 5
export default {
  id: "koe15",
  title: "Keskitaso 5",
  level: "keskitaso",
  description: "Online doctor appointments, pharmacies and medicines, exercise recommendations, an ageing population, mental health services, occupational health.",
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
          id: "k15r1",
          title: "Tehtävä 1: Uutinen",
          instructions: {
            fi: "Lue uutinen ja vastaa kysymyksiin. Valitse oikea vaihtoehto.",
            en: "Read the news item and answer the questions. Choose the correct option.",
          },
          text: {
            title: "Lääkäriin videon välityksellä – kaikki potilaat eivät pysy mukana",
            body:
              "Länsirannikon hyvinvointialueella yhä useampi lääkärikäynti hoidetaan nykyään videoyhteydellä. Viime vuonna lähes joka kolmas vastaanottoaika oli etävastaanotto, " +
              "kun vielä kaksi vuotta aiemmin osuus oli alle kymmenen prosenttia. Etäyhteydellä hoidetaan esimerkiksi reseptien uusimista, laboratoriotulosten läpikäyntiä " +
              "ja lieviä tulehduksia, joiden hoitaminen ei edellytä potilaan tutkimista paikan päällä.\n\n" +
              "Hyvinvointialueen ylilääkäri Johanna Salo pitää kehitystä myönteisenä. ”Potilaan ei tarvitse ottaa vapaata töistä eikä istua odotushuoneessa muiden flunssaisten kanssa. " +
              "Lääkäriltä taas säästyy aikaa, kun hän ei joudu odottamaan myöhässä olevia potilaita”, Salo sanoo. Hänen mukaansa etävastaanottojen ansiosta jonot kiireettömään hoitoon " +
              "ovat lyhentyneet keskimäärin viikolla.\n\n" +
              "Kaikki eivät kuitenkaan hyödy muutoksesta. Vanhusneuvoston jäsen Pirkko Aaltonen kertoo, että moni iäkäs on jättänyt ajan varaamatta, koska ei osaa käyttää videoyhteyttä " +
              "tai pelkää, ettei kuule lääkäriä kunnolla. ”Ongelma ei ole tekniikka sinänsä. Ongelma on se, ettei vaihtoehtoa aina tarjota, vaan ihmiselle vain ilmoitetaan, " +
              "että aika on etänä”, Aaltonen sanoo.\n\n" +
              "Ylilääkäri Salon mukaan kenenkään ei pitäisi joutua etävastaanotolle vastoin tahtoaan. Jos potilas haluaa tulla paikan päälle, hänelle varataan aika terveysasemalle, " +
              "vaikka sinne voi joutua odottamaan pidempään. Hyvinvointialue aikoo myös kouluttaa kirjastojen henkilökuntaa, jotta he voivat neuvoa asiakkaita videoyhteyden käytössä. " +
              "Lisäksi kolmelle terveysasemalle avataan keväällä etävastaanottohuoneet, joissa potilas voi tavata erikoislääkärin näytön välityksellä hoitajan avustamana. " +
              "Näin pienten paikkakuntien asukkaiden ei tarvitse matkustaa erikoislääkärille keskussairaalaan asti.",
          },
          questions: [
            {
              id: "k15r1q1",
              type: "mc",
              q: "Mitä etävastaanotoille on tapahtunut kahden viime vuoden aikana?",
              options: [
                "Niiden osuus kaikista vastaanottoajoista on yli kolminkertaistunut.",
                "Joka kolmas potilas toivoo nykyään pääsevänsä etävastaanotolle.",
                "Niillä hoidetaan nykyään myös vaivoja, joiden takia potilas pitää tutkia.",
              ],
              answer: 0,
              explain:
                "From under 10 % two years ago to “lähes joka kolmas vastaanottoaika” — more than three times as many. It is a share of appointments, not patients' wishes, and remote care is used for problems that do NOT need an examination.",
            },
            {
              id: "k15r1q2",
              type: "mc",
              q: "Mitä hyötyä etävastaanotoista on ollut ylilääkäri Salon mukaan?",
              options: [
                "Lääkärit voivat ottaa vastaan potilaita myös iltaisin.",
                "Kiireettömään hoitoon pääsee nopeammin kuin ennen.",
                "Potilaiden ei tarvitse enää käydä laboratoriokokeissa.",
              ],
              answer: 1,
              explain:
                "“jonot kiireettömään hoitoon ovat lyhentyneet keskimäärin viikolla.” Lab results are discussed remotely, but the tests themselves are not dropped; evenings are not mentioned.",
            },
            {
              id: "k15r1q3",
              type: "mc",
              q: "Mikä on Pirkko Aaltosen mukaan varsinainen ongelma?",
              options: [
                "Videoyhteyden ääni on liian heikko iäkkäille.",
                "Iäkkäät eivät halua käyttää tietokonetta lainkaan.",
                "Potilaalle ei aina kerrota, että hän voisi valita käynnin paikan päällä.",
              ],
              answer: 2,
              explain:
                "“Ongelma ei ole tekniikka sinänsä. Ongelma on se, ettei vaihtoehtoa aina tarjota.” Poor hearing is one reason people stay away, but she says the real issue is the lack of choice.",
            },
            {
              id: "k15r1q4",
              type: "mc",
              q: "Mitä hyvinvointialue aikoo tehdä?",
              options: [
                "Kirjastoista voi jatkossa saada apua videoyhteyden käyttämiseen.",
                "Iäkkäät potilaat pääsevät terveysasemalle ilman odotusta.",
                "Erikoislääkärit alkavat käydä pienten paikkakuntien terveysasemilla.",
              ],
              answer: 0,
              explain:
                "Library staff will be trained “jotta he voivat neuvoa asiakkaita videoyhteyden käytössä”. Face-to-face visits may mean a longer wait, and specialists are met via a screen, not in person.",
            },
          ],
        },
        {
          id: "k15r2",
          title: "Tehtävä 2: Kuluttaja-artikkeli",
          instructions: {
            fi: "Lue artikkeli. Ovatko väitteet oikein vai väärin?",
            en: "Read the article. Are the statements true (oikein) or false (väärin)?",
          },
          text: {
            title: "Lääkkeet apteekista – näin säästät rahaa ja vältät virheet",
            body:
              "Suomalaiset käyttävät lääkkeisiin vuosittain miljardeja euroja, ja moni maksaa lääkkeistään enemmän kuin olisi tarpeen. Apteekissa kannattaa siksi kysyä ja kuunnella, " +
              "sillä farmaseutin neuvoista voi olla hyötyä sekä terveydelle että lompakolle.\n\n" +
              "Kun lääkäri on kirjoittanut sinulle reseptin, apteekin on tarjottava halvempaa rinnakkaisvalmistetta, jos sellainen on saatavilla. Rinnakkaisvalmisteessa on sama määrä samaa vaikuttavaa ainetta " +
              "kuin alkuperäisessä lääkkeessä, mutta pakkaus, tabletin väri ja hinta voivat olla erilaisia. Vaihdosta saa kieltäytyä, mutta silloin maksat itse hintojen erotuksen, " +
              "koska Kela korvaa vain edullisemman lääkkeen hinnan. Lääkettä ei vaihdeta, jos lääkäri on kieltänyt vaihdon lääketieteellisestä syystä.\n\n" +
              "Toisin kuin moni luulee, saman valmisteen hinta on Suomessa kaikissa apteekeissa sama, koska lääkkeiden hinnat määräytyvät valtakunnallisen lääketaksan mukaan. " +
              "Apteekista toiseen ei siis kannata kiertää halvempaa hintaa etsimässä, mutta saman vaikuttavan aineen eri valmisteiden välillä hintaero voi olla suuri.\n\n" +
              "Kelan korvaus vähennetään hinnasta suoraan apteekin kassalla. Kela-korttia ei tarvitse enää näyttää, sillä oikeus korvaukseen tarkistetaan henkilötunnuksen avulla. " +
              "Jos lääkekulusi ylittävät vuoden aikana niin sanotun vuosiomavastuun, maksat loppuvuoden ajan korvattavista lääkkeistä enää pienen omavastuun jokaisesta ostosta. " +
              "Raja on noin 600 euroa, ja monella pitkäaikaissairaalla se täyttyy jo kevään aikana.\n\n" +
              "Sähköinen resepti on yleensä voimassa kaksi vuotta. Uusimista ei kannata jättää viime tippaan, sillä terveysasemalla pyyntöön vastataan tavallisesti muutaman arkipäivän kuluessa. " +
              "Reseptin voi uusia verkossa Omakanta-palvelussa tai pyytää apteekkia lähettämään uusimispyynnön puolestasi. Jälkimmäinen on monelle helpompaa, mutta joissakin apteekeissa " +
              "siitä peritään pieni maksu.\n\n" +
              "Itsehoitolääkkeitä, kuten särkylääkkeitä, voi ostaa ilman reseptiä myös verkkoapteekeista. Lääkkeitä ei kuitenkaan pidä tilata mistä tahansa. Laillisesti toimivan " +
              "verkkoapteekin tunnistaa EU:n yhteisestä logosta, jota klikkaamalla pääsee viranomaisen ylläpitämään luetteloon. Ulkomaisista nettikaupoista tilatut lääkkeet voivat olla väärennöksiä, " +
              "ja tulli voi takavarikoida ne ennen kuin ne ehtivät tilaajalle.\n\n" +
              "Vanhentuneita tai tarpeettomiksi jääneitä lääkkeitä ei saa heittää sekajätteeseen eikä viemäriin, koska lääkeaineet päätyvät sitä kautta vesistöihin. Apteekit ottavat ne vastaan maksutta. " +
              "Tabletit ja kapselit voi tyhjentää läpinäkyvään muovipussiin, mutta nestemäiset lääkkeet palautetaan alkuperäisessä pakkauksessaan. Tyhjät pahvipakkaukset ja käyttöohjeet " +
              "eivät kuulu apteekkiin, vaan ne voi laittaa kartonki- ja paperinkeräykseen.\n\n" +
              "Lääkkeet kannattaa säilyttää kuivassa ja viileässä paikassa, joten kylpyhuoneen kaappi on niille huono paikka. " +
              "Ennen kaikkea farmaseutille kannattaa kertoa kaikista käyttämistäsi valmisteista, myös vitamiineista ja luontaistuotteista. Moni pitää niitä harmittomina, " +
              "mutta esimerkiksi tietyt rohdosvalmisteet voivat heikentää ehkäisypillereiden tai verenohennuslääkkeiden tehoa.",
          },
          questions: [
            {
              id: "k15r2q1",
              type: "tf",
              q: "Asiakas voi kieltäytyä halvemmasta rinnakkaisvalmisteesta, mutta silloin lääke tulee hänelle kalliimmaksi.",
              answer: true,
              explain: "“Vaihdosta saa kieltäytyä, mutta silloin maksat itse hintojen erotuksen.”",
            },
            {
              id: "k15r2q2",
              type: "tf",
              q: "Rinnakkaisvalmisteessa on eri vaikuttava aine kuin alkuperäisessä lääkkeessä.",
              answer: false,
              explain: "“Rinnakkaisvalmisteessa on sama määrä samaa vaikuttavaa ainetta” — only the package, colour and price may differ.",
            },
            {
              id: "k15r2q3",
              type: "tf",
              q: "Kelan korvauksen saa apteekissa vain näyttämällä Kela-kortin.",
              answer: false,
              explain: "“Kela-korttia ei tarvitse enää näyttää, sillä oikeus korvaukseen tarkistetaan henkilötunnuksen avulla.”",
            },
            {
              id: "k15r2q4",
              type: "tf",
              q: "Kun vuosiomavastuu on ylittynyt, korvattavat lääkkeet ovat loppuvuoden täysin maksuttomia.",
              answer: false,
              explain: "After the annual limit you still pay “pienen omavastuun jokaisesta ostosta” — cheaper, but not free.",
            },
            {
              id: "k15r2q5",
              type: "tf",
              q: "Apteekki voi lähettää reseptin uusimispyynnön asiakkaan puolesta, mutta palvelu ei aina ole ilmainen.",
              answer: true,
              explain: "You can ask the pharmacy to send the request, “mutta joissakin apteekeissa siitä peritään pieni maksu”.",
            },
            {
              id: "k15r2q6",
              type: "tf",
              q: "Ulkomaisesta nettikaupasta tilattu lääke ei välttämättä tule koskaan perille.",
              answer: true,
              explain: "Inference: “tulli voi takavarikoida ne ennen kuin ne ehtivät tilaajalle.”",
            },
            {
              id: "k15r2q7",
              type: "tf",
              q: "Vanhat tabletit on palautettava apteekkiin alkuperäisessä pakkauksessaan.",
              answer: false,
              explain: "Tablets and capsules can be emptied into a clear plastic bag; only liquid medicines are returned in their original package.",
            },
          ],
        },
        {
          id: "k15r3",
          title: "Tehtävä 3: Tiedote",
          instructions: {
            fi: "Lue tiedote ja vastaa kysymyksiin suomeksi. Vastaa lyhyesti.",
            en: "Read the notice and answer the questions in Finnish. Answer briefly.",
          },
          text: {
            title: "Henkilöstötiedote: Työterveyshuolto vaihtuu 1.1. alkaen",
            body:
              "Hyvä henkilöstö,\n\n" +
              "yrityksemme työterveyshuolto siirtyy vuoden alusta Työterveys Vireälle. Sopimus kattaa entiseen tapaan lakisääteiset palvelut, kuten työpaikkaselvitykset ja terveystarkastukset, " +
              "sekä sairaanhoidon yleislääkäritasolla. Erikoislääkärikäynnit korvataan jatkossa vain, jos työterveyslääkäri on kirjoittanut sinulle lähetteen. " +
              "Ilman lähetettä tehdyt käynnit jäävät omalle kustannuksellesi.\n\n" +
              "Ajan voi varata Vireän sovelluksella tai puhelimitse arkisin klo 7–18. Ensimmäinen kontakti on aina työterveyshoitaja, joka arvioi, tarvitsetko lääkärin, " +
              "fysioterapeutin vai työpsykologin palveluja.\n\n" +
              "Lyhyitä sairauspoissaoloja koskeva käytäntö muuttuu. Jatkossa voit olla flunssan tai muun lievän sairauden vuoksi poissa enintään kolme päivää omalla ilmoituksella. " +
              "Ilmoita poissaolosta esihenkilöllesi ennen työpäivän alkua. Jos poissaolo pitkittyy tai toistuu usein, tarvitset todistuksen työterveyshuollosta.\n\n" +
              "Uutena palveluna Vireä tarjoaa etätyöpisteen ergonomia-arvion. Lähetä fysioterapeutille sovelluksen kautta kuva kotona olevasta työpisteestäsi, niin saat korjausehdotukset " +
              "kahden viikon kuluessa. Arvio on maksuton, mutta siihen tarvitaan esihenkilön hyväksyntä.\n\n" +
              "Huomaa, että potilastietosi eivät siirry entiseltä palveluntarjoajalta automaattisesti. Jos haluat, että Vireän ammattilaiset näkevät aiemmat tietosi, " +
              "anna siihen suostumuksesi Vireän sovelluksessa joulukuun loppuun mennessä.\n\n" +
              "Lisätietoja antaa henkilöstöasiantuntija Minna Laakso.",
          },
          questions: [
            {
              id: "k15r3q1",
              type: "open",
              q: "Missä tapauksessa työntekijä maksaa erikoislääkärikäynnin itse?",
              accept: [
                "jos hän menee erikoislääkärille ilman lähetettä",
                "jos työterveyslääkäri ei ole kirjoittanut lähetettä",
                "kun käynnille ei ole lähetettä",
              ],
              keyNote: "If the visit is made without a referral from the occupational health doctor.",
              explain: "“Erikoislääkärikäynnit korvataan jatkossa vain, jos työterveyslääkäri on kirjoittanut sinulle lähetteen. Ilman lähetettä tehdyt käynnit jäävät omalle kustannuksellesi.”",
            },
            {
              id: "k15r3q2",
              type: "open",
              q: "Työntekijä sairastuu flunssaan ja on poissa kaksi päivää. Mitä hänen pitää tehdä?",
              accept: [
                "ilmoittaa esihenkilölle ennen työpäivän alkua",
                "kertoa esihenkilölle poissaolosta aamulla ennen töiden alkua",
                "ilmoittaa itse esihenkilölleen, todistusta ei tarvita",
              ],
              keyNote: "Inform his/her supervisor before the working day starts (self-declaration; no certificate needed for up to three days).",
              explain: "Up to three days “omalla ilmoituksella”: “Ilmoita poissaolosta esihenkilöllesi ennen työpäivän alkua.” A certificate is only needed for longer or frequent absences.",
            },
            {
              id: "k15r3q3",
              type: "open",
              q: "Mitä ergonomia-arvion saaminen edellyttää?",
              hint: "(2 asiaa)",
              accept: [
                "kuvan työpisteestä sovelluksen kautta ja esihenkilön hyväksynnän",
                "pitää lähettää kuva kotityöpisteestä fysioterapeutille ja saada esihenkilön lupa",
                "valokuva työpisteestä, esihenkilön hyväksyntä",
              ],
              keyNote: "Both: sending a photo of the home workstation to the physiotherapist via the app AND the supervisor's approval.",
              explain: "“Lähetä fysioterapeutille sovelluksen kautta kuva … Arvio on maksuton, mutta siihen tarvitaan esihenkilön hyväksyntä.”",
            },
            {
              id: "k15r3q4",
              type: "open",
              q: "Mitä työntekijän pitää tehdä, jotta uuden työterveyshuollon ammattilaiset näkevät hänen aiemmat potilastietonsa?",
              accept: [
                "antaa suostumus Vireän sovelluksessa joulukuun loppuun mennessä",
                "antaa luvan tietojen siirtoon sovelluksessa ennen vuoden loppua",
                "antaa suostumus sovelluksessa",
              ],
              keyNote: "Give his/her consent in the Vireä app by the end of December. The data does not move automatically.",
              explain: "“anna siihen suostumuksesi Vireän sovelluksessa joulukuun loppuun mennessä.”",
            },
          ],
        },
        {
          id: "k15r4",
          title: "Tehtävä 4: Kolumni",
          instructions: {
            fi: "Lue kolumni ja vastaa kysymyksiin. Valitse oikea vaihtoehto.",
            en: "Read the column and answer the questions. Choose the correct option.",
          },
          text: {
            title: "Äiti ei halua palvelutaloon – Kaisa Rinne",
            body:
              "Äitini täytti viime kuussa 88 vuotta. Hän asuu yksin samassa rivitalokolmiossa, jossa minä kasvoin, ja kotihoitaja käy hänen luonaan kahdesti päivässä. " +
              "Joka kerta, kun ehdotan muuttoa palvelutaloon, hän vaihtaa puheenaihetta. ”Täältä minut kannetaan pois”, hän sanoo, enkä minä jaksa enää väitellä.\n\n" +
              "Ymmärrän häntä. Koti on muutakin kuin seinät. Siellä ovat hänen kirjansa, hänen kukkansa ja naapuri, joka tuo hänelle aamulla lehden. Silti valvon öisin ja mietin, " +
              "mitä tapahtuu, jos hän kaatuu kylpyhuoneessa juuri sen jälkeen, kun hoitaja on lähtenyt. Turvaranneke hänellä on, mutta tiedän, että hän ottaa sen pois, " +
              "koska se on hänen mielestään ”vanhan ihmisen koru”.\n\n" +
              "Virallinen linja on, että ikäihmisten pitää voida asua kotona mahdollisimman pitkään. Periaate kuulostaa hyvältä, ja useimmat vanhukset toivovat juuri sitä. " +
              "Käytännössä linja on kuitenkin myös keino säästää. Ympärivuorokautinen hoito on kallista, ja hoitopaikkoja on vähennetty samaan aikaan, kun yli 80-vuotiaiden " +
              "määrä kasvaa nopeammin kuin koskaan. Kotihoidon hoitajilla on kiire: äidin luona he ehtivät jakaa lääkkeet ja lämmittää ruoan, mutta harvoin istua alas juttelemaan. " +
              "Kotihoidossa on kokeiltu myös etäkäyntejä tabletin välityksellä. Äitini mielestä ruudulla näkyvä hoitaja on ”kuin televisiosta”, eikä hän yleensä vastaa, kun laite soi.\n\n" +
              "Aukon täyttävät omaiset. Minä käyn äidin luona kolmesti viikossa töiden jälkeen, hoidan hänen laskunsa ja kuljetan hänet lääkäriin. En valita, sillä teen sen mielelläni. " +
              "Virallisesti en kuitenkaan ole omaishoitaja: hoitopalkkiota ja vapaapäiviä saa vain, jos hyvinvointialue tekee omaisen kanssa sopimuksen, " +
              "eikä äitini ole arvioinnin mukaan ”tarpeeksi huonossa kunnossa”. " +
              "Tunnen myös monta ikäistäni, jotka huolehtivat samaan aikaan sekä teini-ikäisistä lapsistaan että vanhemmistaan ja ovat itse aivan lopussa. " +
              "Heistä puhutaan vähän, koska heidän työnsä ei näy missään tilastossa.\n\n" +
              "En usko, että ratkaisu on rakentaa lisää laitoksia. Uskon kuitenkin, että kodin ja laitoksen väliin tarvitaan enemmän vaihtoehtoja. Kotikaupunkiini avattiin viime vuonna " +
              "yhteisöllinen senioritalo, jossa jokaisella asukkaalla on oma asunto mutta ruokailu on yhteinen ja henkilökunta on paikalla päivisin. Hakijoita on kolme kertaa enemmän kuin asuntoja. " +
              "Kysyntää siis on, mutta tarjonta ei ole pysynyt perässä.\n\n" +
              "Äitini ei ehkä koskaan muuta minnekään. Sen päätöksen saa tehdä hän eikä minä, ja minun tehtäväni on tukea häntä niin kauan kuin jaksan. Toivon vain, että kun minä olen hänen ikäisensä, valinta ei ole enää joko oma koti yksin " +
              "tai sänky laitoksessa.",
          },
          questions: [
            {
              id: "k15r4q1",
              type: "mc",
              q: "Miten kirjoittajan äiti suhtautuu muuttoon palvelutaloon?",
              options: [
                "Hän harkitsee sitä, jos hänen kuntonsa heikkenee.",
                "Hän ei halua edes keskustella siitä.",
                "Hän muuttaisi mielellään, mutta paikkoja ei ole.",
              ],
              answer: 1,
              explain: "Every time it is suggested “hän vaihtaa puheenaihetta” and says “Täältä minut kannetaan pois” — she will leave only when carried out.",
            },
            {
              id: "k15r4q2",
              type: "mc",
              q: "Mikä huolestuttaa kirjoittajaa erityisesti?",
              options: [
                "Äiti ei pidä turvaranneketta, vaikka hänellä on sellainen.",
                "Kotihoitaja ei käy äidin luona joka päivä.",
                "Naapuri ei enää ehdi auttaa äitiä.",
              ],
              answer: 0,
              explain: "She worries about a fall, and “Turvaranneke hänellä on, mutta … hän ottaa sen pois”. The carer comes twice a day; the neighbour still brings the paper.",
            },
            {
              id: "k15r4q3",
              type: "mc",
              q: "Mitä kirjoittaja ajattelee periaatteesta, että ikäihmiset asuvat kotona mahdollisimman pitkään?",
              options: [
                "Se on pelkkä säästökeino, josta pitäisi luopua.",
                "Sitä ei voi arvostella, koska vanhukset itse toivovat sitä.",
                "Se on hyvä periaate, mutta sen taustalla on myös rahan säästäminen.",
              ],
              answer: 2,
              explain: "“Periaate kuulostaa hyvältä … Käytännössä linja on kuitenkin myös keino säästää.” The word “myös” rules out “pelkkä säästökeino”.",
            },
            {
              id: "k15r4q4",
              type: "mc",
              q: "Mitä kirjoittaja sanoo omaisista, jotka hoitavat vanhempiaan?",
              options: [
                "Heidän pitäisi saada palkkaa työstään.",
                "He valittavat liikaa kotihoidosta.",
                "Heidän tekemänsä työ jää usein huomaamatta.",
              ],
              answer: 2,
              explain: "“Heistä puhutaan vähän, koska heidän työnsä ei näy missään tilastossa.” Pay is not mentioned, and she herself says “En valita”.",
            },
            {
              id: "k15r4q5",
              type: "mc",
              q: "Mikä seuraavista esitetään kolumnissa tosiasiana eikä mielipiteenä?",
              options: [
                "Senioritaloon on enemmän hakijoita kuin asuntoja.",
                "Laitoksia ei kannata rakentaa lisää.",
                "Kodin ja laitoksen väliin tarvitaan uusia vaihtoehtoja.",
              ],
              answer: 0,
              explain: "“Hakijoita on kolme kertaa enemmän kuin asuntoja” is a reported fact. The other two are introduced by “En usko” / “Uskon”.",
            },
            {
              id: "k15r4q6",
              type: "mc",
              q: "Mikä on kolumnin pääajatus?",
              options: [
                "Ikäihmisten pitäisi muuttaa palvelutaloon ajoissa ennen kuin kunto heikkenee.",
                "Ikääntyneiden asumiseen tarvitaan muitakin vaihtoehtoja kuin oma koti tai laitos.",
                "Omaisten pitäisi vastata vanhempiensa hoidosta nykyistä enemmän.",
              ],
              answer: 1,
              explain: "The conclusion: she hopes the choice will no longer be “joko oma koti yksin tai sänky laitoksessa”; more options are needed between home and institution.",
            },
          ],
        },
        {
          id: "k15r5",
          title: "Tehtävä 5: Mielipidekirjoitus",
          instructions: {
            fi: "Lue mielipidekirjoitus. Ovatko väitteet oikein vai väärin?",
            en: "Read the letter to the editor. Are the statements true (oikein) or false (väärin)?",
          },
          text: {
            title: "Nuoren ei pitäisi joutua odottamaan apua kuukausia",
            body:
              "Viisitoistavuotias tyttäreni alkoi viime syksynä nukkua huonosti ja jäädä pois koulusta. Hän oli aina ollut iloinen ja sosiaalinen, joten huomasimme muutoksen nopeasti. " +
              "Kouluterveydenhoitaja otti huolemme vakavasti ja ohjasi meidät nuorisopsykiatrian poliklinikalle. Sitten alkoi odotus.\n\n" +
              "Ensimmäinen aika järjestyi vasta kolmen ja puolen kuukauden päähän. Sinä aikana tyttäreni ehti jäädä jälkeen lähes kaikissa aineissa, ja hänen mielialansa huononi. " +
              "Ymmärrän, ettei hoitoon voi aina päästä heti ja että kiireelliset tapaukset on hoidettava ensin. Nuoren elämässä kolme kuukautta on kuitenkin pitkä aika.\n\n" +
              "Haluan kiittää koulukuraattoria, joka tapasi tytärtäni joka viikko odotuksen aikana, vaikka se ei hänen omien sanojensa mukaan varsinaisesti kuulunut hänen tehtäviinsä. " +
              "Ilman häntä tilanne olisi voinut olla paljon pahempi. Kuraattoreita on kuitenkin liian vähän: tyttäreni koulussa yksi kuraattori vastaa lähes seitsemästäsadasta oppilaasta.\n\n" +
              "Nuorten mielenterveysongelmien sanotaan lisääntyneen. Minusta kyse on myös siitä, että avun hakeminen on onneksi muuttunut hyväksytymmäksi. " +
              "Sitä suuremmalla syyllä apua pitäisi olla tarjolla silloin, kun nuori uskaltaa sitä pyytää.\n\n" +
              "Ehdotan, että jokaisessa yläkoulussa ja lukiossa olisi oma psykiatrinen sairaanhoitaja, jonka vastaanotolle pääsisi ilman lähetettä. Se maksaisi, " +
              "mutta pitkiksi venyneet hoidot ja keskeytyneet opinnot tulevat yhteiskunnalle vielä kalliimmiksi.\n\n" +
              "Huolestunut äiti, Järvenpää",
          },
          questions: [
            {
              id: "k15r5q1",
              type: "tf",
              q: "Kouluterveydenhoitaja ei aluksi uskonut, että tyttärellä oli ongelmia.",
              answer: false,
              explain: "“Kouluterveydenhoitaja otti huolemme vakavasti ja ohjasi meidät nuorisopsykiatrian poliklinikalle.”",
            },
            {
              id: "k15r5q2",
              type: "tf",
              q: "Tytär joutui odottamaan ensimmäistä aikaa poliklinikalle yli kolme kuukautta.",
              answer: true,
              explain: "“Ensimmäinen aika järjestyi vasta kolmen ja puolen kuukauden päähän.”",
            },
            {
              id: "k15r5q3",
              type: "tf",
              q: "Kirjoittajan mielestä kaikki nuoret pitäisi hoitaa heti tilanteen kiireellisyydestä riippumatta.",
              answer: false,
              explain: "She accepts “että kiireelliset tapaukset on hoidettava ensin” — she only says three months is too long.",
            },
            {
              id: "k15r5q4",
              type: "tf",
              q: "Kuraattorin viikoittaiset tapaamiset kuuluivat hänen tavallisiin työtehtäviinsä.",
              answer: false,
              explain: "The meetings did not really belong to the counsellor's duties: “se ei hänen omien sanojensa mukaan varsinaisesti kuulunut hänen tehtäviinsä”.",
            },
            {
              id: "k15r5q5",
              type: "tf",
              q: "Kirjoittajan mielestä mielenterveysongelmien lisääntyminen selittyy osittain sillä, että apua haetaan nykyään helpommin.",
              answer: true,
              explain: "“Minusta kyse on myös siitä, että avun hakeminen on onneksi muuttunut hyväksytymmäksi.”",
            },
            {
              id: "k15r5q6",
              type: "tf",
              q: "Kirjoittaja myöntää, että hänen ehdotuksensa toteuttaminen aiheuttaisi kustannuksia.",
              answer: true,
              explain: "“Se maksaisi, mutta … tulevat yhteiskunnalle vielä kalliimmiksi.”",
            },
          ],
        },
        {
          id: "k15r6",
          title: "Tehtävä 6: Ohje",
          instructions: {
            fi: "Lue ohje ja vastaa kysymyksiin suomeksi. Vastaa lyhyesti.",
            en: "Read the guide and answer the questions in Finnish. Answer briefly.",
          },
          text: {
            title: "Liikkumisen suositus aikuisille – näin pääset alkuun",
            body:
              "Terveyden kannalta tärkeintä on liikkua edes jonkin verran, sillä pienikin määrä on parempi kuin ei mitään. Aikuisen kannattaa kuitenkin pyrkiä siihen, " +
              "että hän liikkuu reippaasti yhteensä vähintään kaksi ja puoli tuntia viikossa tai rasittavasti tunnin ja vartin viikossa. Reipasta liikkumista on esimerkiksi " +
              "ripeä kävely tai pyöräily, jonka aikana pystyy vielä puhumaan mutta ei enää laulamaan. Rasittavassa liikunnassa, kuten juoksussa tai hiihdossa, puhuminenkin on jo vaikeaa.\n\n" +
              "Kestävyysliikunnan lisäksi lihaksia ja tasapainoa pitäisi vahvistaa ainakin kahdesti viikossa. Tähän ei tarvita kuntosalia: kotona tehtävät kyykyt, punnerrukset " +
              "ja portaiden nousu riittävät hyvin. Ikääntyneille tasapainon harjoittaminen on erityisen tärkeää, koska se ehkäisee kaatumisia.\n\n" +
              "Yhtä tärkeää kuin liikkua on vähentää pitkää yhtäjaksoista istumista. Jos teet istumatyötä, nouse ylös ja liiku hetki vähintään puolen tunnin välein. " +
              "Asiantuntijoiden mukaan säännöllinen liikunta vapaa-ajalla ei yksin poista runsaan istumisen haittoja.\n\n" +
              "Jos et ole liikkunut pitkään aikaan, aloita kevyesti ja lisää määrää vähitellen. Jos sinulla on jokin pitkäaikaissairaus, kuten sydänsairaus tai diabetes, " +
              "keskustele ensin lääkärin tai hoitajan kanssa siitä, millainen liikunta sopii sinulle. Liikunta ei yleensä ole kiellettyä, mutta sen määrää ja rasittavuutta " +
              "voi olla tarpeen sovittaa sairauden mukaan.",
          },
          questions: [
            {
              id: "k15r6q1",
              type: "open",
              q: "Mistä huomaa, että liikkuu reippaasti mutta ei vielä rasittavasti?",
              accept: [
                "pystyy puhumaan mutta ei laulamaan",
                "voi vielä puhua, mutta laulaminen ei onnistu",
                "puhuminen onnistuu, laulaminen ei",
              ],
              keyNote: "You can still talk but can no longer sing. (In strenuous exercise even talking is difficult.)",
              explain: "“jonka aikana pystyy vielä puhumaan mutta ei enää laulamaan.”",
            },
            {
              id: "k15r6q2",
              type: "open",
              q: "Mitä istumatyötä tekevän kannattaa ohjeen mukaan tehdä, ja miksi?",
              hint: "(2 asiaa)",
              accept: [
                "nousta ylös ja liikkua puolen tunnin välein, koska vapaa-ajan liikunta ei yksin poista istumisen haittoja",
                "pitää taukoja ja liikkua vähintään puolen tunnin välein, koska liikunta ei korjaa istumisen haittoja",
                "nousta seisomaan puolen tunnin välein, koska pelkkä liikunta vapaa-ajalla ei riitä",
              ],
              keyNote: "Both: get up and move at least every half hour AND the reason — regular leisure-time exercise alone does not remove the harm of sitting a lot.",
              explain: "“nouse ylös ja liiku hetki vähintään puolen tunnin välein … säännöllinen liikunta vapaa-ajalla ei yksin poista runsaan istumisen haittoja.”",
            },
            {
              id: "k15r6q3",
              type: "open",
              q: "Mitä diabetesta sairastavan kannattaa tehdä ennen kuin hän aloittaa liikunnan?",
              accept: [
                "keskustella lääkärin tai hoitajan kanssa, millainen liikunta sopii hänelle",
                "kysyä lääkäriltä tai hoitajalta sopivasta liikunnasta",
                "puhua ensin lääkärin kanssa",
              ],
              keyNote: "Talk to a doctor or nurse first about what kind of exercise suits him/her. 'Exercise is forbidden' is wrong.",
              explain: "“keskustele ensin lääkärin tai hoitajan kanssa siitä, millainen liikunta sopii sinulle. Liikunta ei yleensä ole kiellettyä.”",
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
          id: "k15w1",
          title: "Tehtävä 1: Viesti liikuntaneuvojalle",
          instructions: { fi: "Kirjoita viesti. Kirjoita noin 80–150 sanaa.", en: "Write a message of about 80–150 words." },
          prompt:
            "Kaupungin liikuntapalvelut tarjoaa maksutonta liikuntaneuvontaa aikuisille, jotka haluavat aloittaa säännöllisen liikunnan. Haluat osallistua neuvontaan. " +
            "Kirjoita sähköposti liikuntaneuvoja Timo Kallioniemelle.",
          bullets: [
            "Esittele itsesi lyhyesti.",
            "Kerro, miksi haluat aloittaa säännöllisen liikunnan juuri nyt.",
            "Kerro, millaista liikuntaa olet harrastanut aiemmin.",
            "Kerro, mitkä asiat rajoittavat liikkumistasi (esimerkiksi aika, terveys tai raha).",
            "Kysy, miten neuvonta käytännössä toimii.",
            "Kerro lisäksi ainakin kaksi muuta asiaa.",
            "Muista aloitus ja lopetus.",
          ],
          promptEn:
            "The city's sports services offer free exercise counselling for adults who want to start exercising regularly. Email the counsellor Timo Kallioniemi: introduce yourself, say why you want to start now, describe the exercise you have done before, say what limits your exercising (time, health, money…), ask how the counselling works in practice, and add at least two more points of your own.",
          register: "formal email to a public service: Hyvä Timo Kallioniemi / Hei … Ystävällisin terveisin + full name; polite conditional (haluaisin, voisitteko)",
          minWords: 80,
          maxWords: 150,
        },
        {
          id: "k15w2",
          title: "Tehtävä 2: Viesti ystävälle",
          instructions: { fi: "Kirjoita viesti. Kirjoita noin 60–120 sanaa.", en: "Write a message of about 60–120 words." },
          prompt:
            "Kaaduit viime viikolla liukkaalla jalkakäytävällä, ja jalkasi on nyt kipsissä. Ystäväsi Sami on lähettänyt sinulle viestin ja kysynyt, miksi et ole vastannut puhelimeen. " +
            "Kirjoita hänelle vastaus.",
          bullets: [
            "Kerro, mitä tapahtui ja miten sinua hoidettiin.",
            "Kerro, miten pärjäät nyt kotona.",
            "Pyydä Samilta apua johonkin asiaan.",
            "Ehdota, miten voisitte viettää aikaa yhdessä, vaikka et pääse liikkumaan.",
            "Muista aloitus ja lopetus.",
          ],
          promptEn:
            "Last week you slipped on an icy pavement and your leg is now in a cast. Your friend Sami has asked why you have not answered the phone. Reply: tell what happened and how you were treated, how you manage at home, ask Sami for help with something, and suggest how you could spend time together although you cannot move around.",
          register: "informal message to a friend: Moi Sami! / Hei Sami! … Terkkuja / Nähdään! + first name; past tense narration, colloquial tone allowed",
          minWords: 60,
          maxWords: 120,
        },
        {
          id: "k15w3",
          title: "Tehtävä 3: Mielipideteksti",
          instructions: { fi: "Kirjoita mielipideteksti. Kirjoita noin 100–180 sanaa.", en: "Write an opinion text of about 100–180 words." },
          prompt:
            "Sanomalehden verkkosivuilla on keskustelupalsta, jolla lukijat kertovat mielipiteitään terveyteen liittyvistä asioista. Valitse aihe A tai B ja kirjoita mielipidekirjoitus.",
          bullets: [
            "A. Joissakin kunnissa terveyskeskuskäynnit ovat maksuttomia, toisissa niistä peritään maksu. Pitäisikö terveyskeskuksessa käymisen olla kaikille ilmaista?",
            "B. Monet työnantajat tarjoavat työntekijöille liikuntaetuja. Pitäisikö työntekijöiden saada liikkua työajalla, esimerkiksi tunnin viikossa?",
            "Kerro, mistä on kyse ja mitä mieltä olet asiasta. Perustele mielipiteesi ainakin kolmella tavalla.",
          ],
          promptEn:
            "A newspaper's website has a forum where readers give opinions on health issues. Choose A (should health-centre visits be free for everyone?) or B (should employees be allowed to exercise during working hours, e.g. one hour a week?). Say what the issue is and what you think, and justify your opinion in at least three ways.",
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
        "Tässä osakokeessa kuuntelet erilaisia puhuttuja tekstejä: haastattelun, keskustelun apteekissa, puhelun, radiouutisen sekä lyhyitä mainoksia ja tiedotteita. Osakokeessa on viisi tehtävää. Ennen jokaista tekstiä sinulla on aikaa lukea kysymykset. Kuulet jokaisen tekstin kaksi kertaa. Pitkät tekstit kuulet toisella kerralla osissa, ja osien välissä on aikaa vastata. Äänite etenee automaattisesti, etkä voi pysäyttää sitä. Vastaa avoimiin kysymyksiin suomeksi ja lyhyesti.",
      aika: "Osakoe kestää noin 40 minuuttia.",
      tasks: [
        {
          id: "k15l1",
          title: "Tehtävä 1: Haastattelu",
          instructions: {
            fi: "Kuulet haastattelun kaksi kertaa. Lue ensin kysymykset. Valitse oikea vaihtoehto.",
            en: "You will hear an interview twice. Read the questions first. Choose the correct option.",
          },
          situation: "Paikallisradiossa haastatellaan fysioterapeutti Leena Hirvosta, joka ohjaa ikäihmisten kuntosaliryhmiä.",
          plays: 2,
          rate: 1.0,
          lines: [
            {
              speaker: "Toimittaja",
              text: "Studiossa on tänään fysioterapeutti Leena Hirvonen, joka vetää ikäihmisten kuntosaliryhmiä. Leena, kuinka kauan nää ryhmät on toiminut?",
            },
            {
              speaker: "Leena",
              text:
                "No, ensimmäinen ryhmä alkoi kolme vuotta sitten, ja siinä oli kymmenen osallistujaa. Nyt ryhmiä on kuusi, ja mukana on noin seitsemänkymmentä ihmistä. " +
                "Nuorin on seitsemänkymmentä ja vanhin, uskokaa tai älkää, yhdeksänkymmentäneljä.",
            },
            { speaker: "Toimittaja", text: "Millaisia tuloksia te ootte nähneet?" },
            {
              speaker: "Leena",
              text:
                "No tietysti lihasvoima kasvaa, sen me mitataan alussa ja puolen vuoden päästä. Mutta musta kaikkein tärkeintä on tasapaino. " +
                "Moni sanoo, että uskaltaa taas lähteä talvella ulos, kun ei enää pelkää kaatumista. Ja onhan siinä se sosiaalinen puoli: monelle tää on viikon ainoa paikka, jossa tapaa muita.",
            },
            { speaker: "Toimittaja", text: "Onko mukana sekä naisia että miehiä?" },
            {
              speaker: "Leena",
              text:
                "Miehiä on valitettavasti vähän, ehkä joka viides. Miehet tuntuu ajattelevan, että jumppa on naisten juttu. Siksi me aloitettiin syksyllä ihan oma ryhmä miehille, " +
                "ja se täyttyi viikossa. Eli kyllä ne miehet tulee, kun ryhmä tuntuu omalta.",
            },
            { speaker: "Toimittaja", text: "Entä jos ei pääse kotoa kuntosalille asti?" },
            {
              speaker: "Leena",
              text:
                "Se on iso ongelma etenkin niille, jotka asuu kaukana keskustasta. Osa tulee kaupungin palvelulinjan bussilla, joka pysähtyy ihan kuntosalin ovella. " +
                "Ja nyt keväällä me kokeillaan myös sitä, että fysioterapeutti käy ohjaamassa harjoituksia palvelutalojen yhteisissä tiloissa.",
            },
            { speaker: "Toimittaja", text: "Paljonko ryhmään osallistuminen maksaa?" },
            {
              speaker: "Leena",
              text:
                "Kausimaksu on kaksikymmentä euroa, ja siihen sisältyy kaksi kertaa viikossa. Jos se on jollekin liikaa, maksusta voi hakea vapautusta. " +
                "Rahan takia kenenkään ei tarvitse jäädä pois.",
            },
            { speaker: "Toimittaja", text: "Mitä sä neuvoisit omaisille, jotka haluaisi saada vanhempansa liikkeelle?" },
            {
              speaker: "Leena",
              text:
                "Älkää painostako. Parempi on tulla ensimmäisellä kerralla itse mukaan ja istua vaikka sivussa katsomassa. Moni pelkää, että kaikki muut on paljon paremmassa kunnossa. " +
                "Kun he näkee, että täällä jokainen tekee omalla tasollaan, kynnys madaltuu.",
            },
          ],
          questions: [
            {
              id: "k15l1q1",
              type: "mc",
              q: "Miten ryhmätoiminta on muuttunut kolmessa vuodessa?",
              options: [
                "Ryhmissä on nyt noin seitsemän kertaa enemmän osallistujia.",
                "Ryhmiin pääsee nykyään myös alle 70-vuotiaita.",
                "Ryhmiä on nykyään kymmenen.",
              ],
              answer: 0,
              explain: "From one group of ten (“kymmenen osallistujaa”) to six groups with “noin seitsemänkymmentä ihmistä”. The youngest participant is seventy.",
            },
            {
              id: "k15l1q2",
              type: "mc",
              q: "Mikä on Leenan mielestä toiminnan tärkein tulos?",
              options: ["lihasvoiman kasvu", "parempi tasapaino", "uudet ystävyyssuhteet"],
              answer: 1,
              explain: "“Mutta musta kaikkein tärkeintä on tasapaino.” Muscle strength and the social side are mentioned, but not as the most important.",
            },
            {
              id: "k15l1q3",
              type: "mc",
              q: "Mitä Leena kertoo miehistä?",
              options: [
                "He eivät halua osallistua kuntosaliryhmiin ollenkaan.",
                "He tulevat mukaan, kun ryhmä on tarkoitettu heille.",
                "He käyvät mieluummin palvelutalojen ryhmissä.",
              ],
              answer: 1,
              explain: "The men's group “täyttyi viikossa … kyllä ne miehet tulee, kun ryhmä tuntuu omalta.”",
            },
            {
              id: "k15l1q4",
              type: "mc",
              q: "Mitä keväällä kokeillaan?",
              options: [
                "Palvelulinjan bussi alkaa pysähtyä kuntosalin luona.",
                "Osallistujat haetaan kotoa taksilla.",
                "Harjoituksia ohjataan palvelutaloissa.",
              ],
              answer: 2,
              explain: "“nyt keväällä me kokeillaan myös sitä, että fysioterapeutti käy ohjaamassa harjoituksia palvelutalojen yhteisissä tiloissa.” The bus stop already exists.",
            },
            {
              id: "k15l1q5",
              type: "mc",
              q: "Mitä Leena sanoo ryhmän hinnasta?",
              options: [
                "Kausimaksusta voi saada vapautuksen.",
                "Kausimaksuun sisältyy yksi kerta viikossa.",
                "Kausimaksu on noussut kahteenkymmeneen euroon.",
              ],
              answer: 0,
              explain: "“maksusta voi hakea vapautusta. Rahan takia kenenkään ei tarvitse jäädä pois.” The fee covers two sessions a week; no price rise is mentioned.",
            },
            {
              id: "k15l1q6",
              type: "mc",
              q: "Mitä Leena neuvoo omaisia tekemään?",
              options: [
                "kannustamaan vanhempaa voimakkaasti",
                "tulemaan itse mukaan ensimmäiselle kerralle",
                "kertomaan, että kaikki osallistujat ovat samassa kunnossa",
              ],
              answer: 1,
              explain: "“Älkää painostako. Parempi on tulla ensimmäisellä kerralla itse mukaan.”",
            },
          ],
        },
        {
          id: "k15l2",
          title: "Tehtävä 2: Keskustelu apteekissa",
          instructions: {
            fi: "Kuulet keskustelun kaksi kertaa. Ovatko väitteet oikein vai väärin?",
            en: "You will hear a conversation twice. Are the statements true or false?",
          },
          situation: "Asiakas tulee apteekkiin hakemaan verenpainelääkettään.",
          plays: 2,
          rate: 1.0,
          lines: [
            { speaker: "Farmaseutti", text: "Seuraava, olkaa hyvä. Miten voin auttaa?" },
            { speaker: "Asiakas", text: "Hei. Mä tulin hakemaan mun verenpainelääkkeet. Tässä on mun henkilökortti." },
            {
              speaker: "Farmaseutti",
              text: "Kiitos. Katsotaanpa… Hmm. Tässä näkyy, että teidän resepti on vanhentunut. Se oli voimassa viime kuun loppuun asti.",
            },
            { speaker: "Asiakas", text: "Voi ei. Mulla on tabletteja enää pariksi päiväksi. Mä olin ihan varma, että se on voimassa vielä vuoden." },
            {
              speaker: "Farmaseutti",
              text:
                "Ei hätää. Koska kyse on pitkäaikaisesta lääkityksestä, voin antaa teille pienimmän pakkauksen ilman reseptiä, ettei lääkitys katkea. " +
                "Siinä on kolmekymmentä tablettia. Kelan korvausta siitä ei kuitenkaan saa, eli maksatte koko hinnan itse.",
            },
            { speaker: "Asiakas", text: "Okei, se käy. Paljonko se maksaa?" },
            {
              speaker: "Farmaseutti",
              text: "Tää alkuperäinen valmiste maksaa kaksitoista euroa, mutta meillä on myös rinnakkaisvalmiste, jossa on sama vaikuttava aine. Se maksaa vähän yli viisi euroa.",
            },
            {
              speaker: "Asiakas",
              text: "Otetaan se halvempi. Mutta näyttääkö se erilaiselta? Mun äiti otti kerran vahingossa tuplamäärän, kun pakkaus oli eri värinen.",
            },
            {
              speaker: "Farmaseutti",
              text:
                "Joo, tabletti on valkoinen eikä vaaleanpunainen, ja pakkaus on sininen. Mä kirjoitan pakkaukseen tarran, jossa lukee lääkkeen nimi ja annostus. " +
                "Ottakaa edelleen yksi tabletti aamulla.",
            },
            { speaker: "Asiakas", text: "Kiitos. Entä se resepti? Pitääkö mun nyt soittaa terveysasemalle?" },
            {
              speaker: "Farmaseutti",
              text:
                "Voitte uusia sen itse Omakannassa, tai mä voin lähettää uusimispyynnön teidän puolesta täältä. Meillä se on maksutonta. " +
                "Uusiminen kestää yleensä kolmesta viiteen arkipäivää, eli tällä pakkauksella pärjäätte hyvin.",
            },
            {
              speaker: "Asiakas",
              text: "Laittakaa te se, kiitos. Ja sit vielä yks juttu: voinko mä ottaa näiden kanssa särkylääkettä? Mun selkä on vähän kipeä.",
            },
            {
              speaker: "Farmaseutti",
              text: "Parasetamoli sopii, mutta ibuprofeenia en suosittele, koska se voi nostaa verenpainetta ja heikentää teidän lääkkeen tehoa.",
            },
          ],
          questions: [
            {
              id: "k15l2q1",
              type: "tf",
              q: "Asiakkaan resepti on voimassa vielä vuoden.",
              answer: false,
              explain: "The customer thought so, but the prescription expired: “Se oli voimassa viime kuun loppuun asti.”",
            },
            {
              id: "k15l2q2",
              type: "tf",
              q: "Asiakas saa lääkettä ilman voimassa olevaa reseptiä, mutta hän maksaa sen kokonaan itse.",
              answer: true,
              explain: "The smallest package is given without a prescription, but “Kelan korvausta siitä ei kuitenkaan saa, eli maksatte koko hinnan itse.”",
            },
            {
              id: "k15l2q3",
              type: "tf",
              q: "Asiakas valitsee alkuperäisen valmisteen, koska pelkää sekoittavansa lääkkeet.",
              answer: false,
              explain: "He says “Otetaan se halvempi” — the generic. He only asks how it looks because of his mother's mistake.",
            },
            {
              id: "k15l2q4",
              type: "tf",
              q: "Uusi tabletti on eri värinen kuin asiakkaan aiempi tabletti.",
              answer: true,
              explain: "“tabletti on valkoinen eikä vaaleanpunainen, ja pakkaus on sininen.”",
            },
            {
              id: "k15l2q5",
              type: "tf",
              q: "Apteekki perii maksun reseptin uusimispyynnön lähettämisestä.",
              answer: false,
              explain: "“Meillä se on maksutonta.”",
            },
            {
              id: "k15l2q6",
              type: "tf",
              q: "Farmaseutin mukaan kaikki särkylääkkeet eivät sovi asiakkaan verenpainelääkkeen kanssa.",
              answer: true,
              explain: "Paracetamol is fine, but “ibuprofeenia en suosittele, koska se voi nostaa verenpainetta ja heikentää teidän lääkkeen tehoa.”",
            },
          ],
        },
        {
          id: "k15l3",
          title: "Tehtävä 3: Puhelu työterveyshuoltoon",
          instructions: {
            fi: "Kuulet puhelun kaksi kertaa. Lue ensin kysymykset. Vastaa lyhyesti suomeksi.",
            en: "You will hear a phone call twice. Read the questions first. Answer briefly in Finnish.",
          },
          situation: "Olga soittaa työterveyshuoltoon, koska hänen niskansa on kipeä.",
          plays: 2,
          rate: 1.0,
          lines: [
            { speaker: "Hoitaja", text: "Työterveys Vireä, hoitaja Riikka Lehtonen, hei." },
            {
              speaker: "Olga",
              text:
                "Hei, täällä Olga Petrova Pohjolan Logistiikasta. Mulla on ollut nyt pari viikkoa niska ja hartiat tosi kipeät, ja välillä päätäkin särkee. Haluaisin varata lääkäriajan.",
            },
            { speaker: "Hoitaja", text: "Selvä. Kerro vähän lisää. Alkoiko kipu jonkun tapaturman jälkeen, vai onko se tullut vähitellen?" },
            {
              speaker: "Olga",
              text:
                "Vähitellen, luulen. Me muutettiin kuukausi sitten uusiin toimitiloihin, ja nyt mä teen töitä läppärillä ilman erillistä näyttöä. " +
                "Ja kaksi päivää viikossa mä oon etänä ja istun keittiön pöydän ääressä.",
            },
            {
              speaker: "Hoitaja",
              text:
                "Kuulostaa siltä, että syy voi olla työasennossa. Tällaisissa tapauksissa mä ohjaan ensin fysioterapeutille enkä lääkärille. " +
                "Fysioterapeutti tutkii niskan ja antaa sulle sopivia harjoituksia. Lääkärille pääsee myöhemmin, jos se on tarpeen.",
            },
            { speaker: "Olga", text: "Okei. Kauanko sinne pitää odottaa? Mä toivoin, että pääsisin vielä tällä viikolla." },
            { speaker: "Hoitaja", text: "Fysioterapeutilla on vapaana torstaina kello kahdeksan. Tai sitten ensi maanantaina kello yksi." },
            { speaker: "Olga", text: "Torstaiaamuna mulla on palaveri… no, mä voin siirtää sen. Otetaan torstai." },
            {
              speaker: "Hoitaja",
              text:
                "Hyvä. Ja koska ongelma liittyy työpisteeseen, ota kuva sun kotona olevasta työpisteestä ja tuo se mukaan, niin fysioterapeutti voi arvioida senkin. " +
                "Toimiston työpisteen hän voi käydä katsomassa paikan päällä, mutta siihen tarvitaan esihenkilön lupa.",
            },
            { speaker: "Olga", text: "Selvä. Entä jos päänsärky pahenee ennen torstaita?" },
            {
              speaker: "Hoitaja",
              text:
                "Voit ottaa tavallista särkylääkettä pakkauksen ohjeen mukaan. Mutta jos päänsärkyyn liittyy näköhäiriöitä, puutumista tai pahoinvointia, " +
                "älä odota torstaihin, vaan lähde heti päivystykseen.",
            },
            { speaker: "Olga", text: "Selvä. Kiitos paljon." },
          ],
          questions: [
            {
              id: "k15l3q1",
              type: "open",
              q: "Mistä Olgan kivut todennäköisesti johtuvat?",
              hint: "(2 asiaa)",
              accept: [
                "hän tekee töitä läppärillä ilman erillistä näyttöä ja istuu kotona keittiön pöydän ääressä",
                "huono työasento: läppäri ilman näyttöä ja etätyö keittiön pöydällä",
                "läppäri ilman näyttöä, keittiön pöytä",
              ],
              keyNote: "Both: working on a laptop without a separate screen (at the office) AND sitting at the kitchen table when working from home — i.e. poor working posture.",
              explain: "“nyt mä teen töitä läppärillä ilman erillistä näyttöä … istun keittiön pöydän ääressä” — the nurse: “syy voi olla työasennossa.”",
            },
            {
              id: "k15l3q2",
              type: "open",
              q: "Miksi hoitaja ei varaa Olgalle lääkäriaikaa?",
              accept: [
                "koska kipu johtuu todennäköisesti työasennosta, ja silloin ohjataan ensin fysioterapeutille",
                "koska tällaisissa tapauksissa mennään ensin fysioterapeutille",
                "ensin fysioterapeutille, lääkärille vasta tarvittaessa",
              ],
              keyNote: "Because the cause seems to be working posture, and in such cases the patient is first referred to a physiotherapist; a doctor only later if needed.",
              explain: "“Tällaisissa tapauksissa mä ohjaan ensin fysioterapeutille enkä lääkärille.”",
            },
            {
              id: "k15l3q3",
              type: "open",
              q: "Mitä Olgan pitää tuoda vastaanotolle?",
              accept: ["kuva kotona olevasta työpisteestä", "valokuva etätyöpisteestä", "kuva kotityöpisteestä"],
              keyNote: "A photo of her home workstation. (The office workstation can be visited, but that needs the supervisor's permission.)",
              explain: "“ota kuva sun kotona olevasta työpisteestä ja tuo se mukaan.”",
            },
            {
              id: "k15l3q4",
              type: "open",
              q: "Missä tilanteessa Olgan pitää lähteä heti päivystykseen?",
              accept: [
                "jos päänsärkyyn liittyy näköhäiriöitä, puutumista tai pahoinvointia",
                "jos hänellä on päänsäryn lisäksi näköhäiriöitä tai puutumista tai pahoinvointia",
                "jos tulee näköhäiriöitä, puutumista tai pahoinvointia",
              ],
              keyNote: "If the headache comes with visual disturbances, numbness or nausea (at least one of these named). A worse headache alone → ordinary painkillers.",
              explain: "“jos päänsärkyyn liittyy näköhäiriöitä, puutumista tai pahoinvointia, älä odota torstaihin, vaan lähde heti päivystykseen.”",
            },
          ],
        },
        {
          id: "k15l4",
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
                "Järvimaan hyvinvointialue avaa ensi kuussa nuorille aikuisille tarkoitetun mielenterveyden chat-palvelun. Palvelu on tarkoitettu alle kolmekymmentävuotiaille, " +
                "ja siellä voi keskustella nimettömänä koulutetun ammattilaisen kanssa arkisin kello kahdestatoista kello kahdeksaan illalla. " +
                "Palveluun pääsee hyvinvointialueen verkkosivujen kautta, eikä siihen tarvitse kirjautua pankkitunnuksilla.",
            },
            {
              speaker: "Uutistenlukija",
              text:
                "Hyvinvointialueen mukaan nuorten aikuisten yhteydenotot mielenterveyspalveluihin ovat lisääntyneet viidessä vuodessa noin puolella. Samaan aikaan moni jättää avun hakematta, " +
                "koska soittaminen tuntuu vaikealta. Muualla Suomessa tehdyissä kokeiluissa chat on tavoittanut erityisesti nuoria miehiä, jotka eivät yleensä hakeudu vastaanotolle.",
            },
            {
              speaker: "Uutistenlukija",
              text:
                "Chatissa ei tehdä diagnooseja eikä kirjoiteta reseptejä. Jos ammattilainen arvioi, että nuori tarvitsee hoitoa, hän voi ohjata tämän suoraan terapeutin vastaanotolle " +
                "ilman erillistä lähetettä. Kiireellisissä kriisitilanteissa nuori ohjataan päivystykseen.",
            },
            {
              speaker: "Uutistenlukija",
              text:
                "Mielenterveysjärjestöt pitävät palvelua tervetulleena, mutta muistuttavat, ettei chat korvaa pitkäaikaista hoitoa. Niiden mukaan terapiaan pääsee alueella edelleen " +
                "vasta kuukausien jonotuksen jälkeen, eikä chat lyhennä jonoja, jos uusia terapeutteja ei palkata. Hyvinvointialue kertoo palkkaavansa vuoden aikana neljä uutta psykoterapeuttia, " +
                "mutta myöntää, että osaavia työntekijöitä on vaikea löytää.",
            },
          ],
          questions: [
            {
              id: "k15l4q1",
              type: "mc",
              q: "Kenelle uusi palvelu on tarkoitettu?",
              options: ["alle 30-vuotiaille", "kaikenikäisille", "yläkoululaisille"],
              answer: 0,
              explain: "“Palvelu on tarkoitettu alle kolmekymmentävuotiaille” — young adults.",
            },
            {
              id: "k15l4q2",
              type: "mc",
              q: "Miksi palvelu avataan?",
              options: [
                "Mielenterveyspalvelujen puhelinlinja suljetaan.",
                "Moni nuori jättää avun hakematta, koska soittaminen tuntuu vaikealta.",
                "Nuorten yhteydenotot mielenterveyspalveluihin ovat vähentyneet.",
              ],
              answer: 1,
              explain: "“moni jättää avun hakematta, koska soittaminen tuntuu vaikealta.” Contacts have increased by about half, not decreased.",
            },
            {
              id: "k15l4q3",
              type: "mc",
              q: "Mitä muualla tehdyissä kokeiluissa on havaittu?",
              options: [
                "Chat on tavoittanut erityisesti nuoria miehiä.",
                "Chat on lyhentänyt terapiajonoja.",
                "Chatia käyttävät enimmäkseen nuoret naiset.",
              ],
              answer: 0,
              explain: "“chat on tavoittanut erityisesti nuoria miehiä, jotka eivät yleensä hakeudu vastaanotolle.”",
            },
            {
              id: "k15l4q4",
              type: "mc",
              q: "Mitä chatin ammattilainen voi tehdä?",
              options: [
                "kirjoittaa nuorelle reseptin",
                "tehdä nuorelle diagnoosin",
                "ohjata nuoren terapeutille ilman lähetettä",
              ],
              answer: 2,
              explain: "“hän voi ohjata tämän suoraan terapeutin vastaanotolle ilman erillistä lähetettä.” Diagnoses and prescriptions are explicitly not given.",
            },
            {
              id: "k15l4q5",
              type: "mc",
              q: "Mistä mielenterveysjärjestöt muistuttavat?",
              options: [
                "Chat ei yksin ratkaise pitkien jonojen ongelmaa.",
                "Chat ei ole todellisuudessa nimetön.",
                "Chat on auki liian lyhyen ajan päivässä.",
              ],
              answer: 0,
              explain: "“chat ei lyhennä jonoja, jos uusia terapeutteja ei palkata” and it does not replace long-term care.",
            },
          ],
        },
        {
          id: "k15l5",
          title: "Tehtävä 5: Mainoksia ja tiedotteita",
          instructions: {
            fi: "Kuulet viisi lyhyttä mainosta tai tiedotetta kaksi kertaa. Jokaisesta on yksi väite. Onko väite oikein vai väärin?",
            en: "You will hear five short adverts or announcements twice. There is one statement about each. Is it true or false?",
          },
          situation: "Kuulet radiosta ja hyvinvointialueen tiedotuskanavilta lyhyitä mainoksia ja tiedotteita.",
          plays: 2,
          rate: 1.0,
          lines: [
            {
              speaker: "Mainos 1",
              text:
                "Kevään vitamiiniviikot Kauppakadun apteekissa! Kaikki D-vitamiinivalmisteet nyt kaksikymmentä prosenttia edullisemmin. " +
                "Tarjous koskee kanta-asiakkaita, ja kanta-asiakkaaksi voit liittyä maksutta kassalla. Tarjous on voimassa sunnuntaihin asti. Kysy myös farmaseutilta, mikä annos sopii juuri sinulle.",
            },
            {
              speaker: "Tiedote 2",
              text:
                "Kausi-influenssarokotukset alkavat. Rokotus on maksuton kuusikymmentäviisi vuotta täyttäneille ja riskiryhmiin kuuluville. " +
                "Rokotuksia annetaan terveysasemilla ilman ajanvarausta tiistaisin ja torstaisin kello kahdeksasta neljään. Muut voivat ottaa rokotuksen työterveyshuollossa tai yksityisellä lääkäriasemalla.",
            },
            {
              speaker: "Mainos 3",
              text:
                "Kuntokeskus Sisu: liity marraskuun aikana, niin et maksa lainkaan liittymismaksua! Jäsenyys maksaa kolmekymmentäyhdeksän euroa kuukaudessa, " +
                "ja sopimus on voimassa vähintään vuoden. Opiskelijoille kuukausihinta on kymmenen euroa edullisempi.",
            },
            {
              speaker: "Tiedote 4",
              text:
                "Kivikon terveysaseman laboratorio on suljettu koko kesäkuun ajan. Näytteenotto siirtyy Keskustan terveysasemalle, jossa näytteitä otetaan kesäkuussa vain ajanvarauksella. " +
                "Kiireelliset näytteet otetaan päivystyksessä. Laboratorio palvelee taas normaalisti heinäkuun alusta.",
            },
            {
              speaker: "Tiedote 5",
              text:
                "Mielenterveysviikon yleisöluento pääkirjastossa torstaina kello kuusi. Psykologi Anni Kauppinen kertoo, miten stressiä voi hallita arjessa. " +
                "Luento on maksuton, ja sitä voi seurata myös suorana verkossa. Ilmoittautumista tarvitaan vain, jos haluat osallistua luentoa edeltävään työpajaan.",
            },
          ],
          questions: [
            {
              id: "k15l5q1",
              type: "tf",
              q: "Mainos 1: Kaikki apteekin asiakkaat saavat alennuksen, vaikka he eivät olisi kanta-asiakkaita.",
              answer: false,
              explain: "“Tarjous koskee kanta-asiakkaita” — you must join (free of charge) to get the discount.",
            },
            {
              id: "k15l5q2",
              type: "tf",
              q: "Tiedote 2: Maksuttomaan influenssarokotukseen täytyy varata aika etukäteen.",
              answer: false,
              explain: "Vaccinations are given “ilman ajanvarausta tiistaisin ja torstaisin”.",
            },
            {
              id: "k15l5q3",
              type: "tf",
              q: "Mainos 3: Marraskuussa liittyvä säästää liittymismaksun.",
              answer: true,
              explain: "“liity marraskuun aikana, niin et maksa lainkaan liittymismaksua!”",
            },
            {
              id: "k15l5q4",
              type: "tf",
              q: "Tiedote 4: Kesäkuussa laboratorionäytteen voi antaa Keskustan terveysasemalla ilman ajanvarausta.",
              answer: false,
              explain: "At Keskusta health station samples are taken in June “vain ajanvarauksella”.",
            },
            {
              id: "k15l5q5",
              type: "tf",
              q: "Tiedote 5: Luentoa voi kuunnella myös kotoa käsin.",
              answer: true,
              explain: "“sitä voi seurata myös suorana verkossa.”",
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
          id: "k15s1",
          kind: "kertominen",
          title: "Tehtävä 1: Kertominen",
          instructions: {
            fi: "Sinulla on minuutti aikaa valmistautua. Voit tehdä muistiinpanoja. Puhu noin puolitoista minuuttia. Aloita puhuminen vasta, kun kuulet äänimerkin.",
            en: "You have one minute to prepare and may take notes. Speak for about a minute and a half. Start only after the beep.",
          },
          prepSec: 60,
          card: {
            title: "Kerro kokemuksistasi terveyspalveluista.",
            questions: [
              "Milloin ja miksi olet viimeksi käyttänyt terveyspalveluja?",
              "Miten ajanvaraus ja hoito sujuivat?",
              "Miten terveyspalvelut eroavat Suomessa ja jossakin toisessa maassa, jonka tunnet?",
              "Mitä parantaisit terveyspalveluissa?",
            ],
          },
          items: [{ id: "a", spoken: "Kerro kokemuksistasi terveyspalveluista. Aloita puhuminen nyt.", speakSec: 90 }],
        },
        {
          id: "k15s2",
          kind: "keskustelu",
          title: "Tehtävä 2: Keskustelu A",
          instructions: {
            fi: "Kuulet keskustelun, jossa puhut vuorotellen toisen henkilön kanssa. Lue tilanne ja ohjeet. Puhu, kun kuulet äänimerkin.",
            en: "You will take turns with another speaker. Read the situation and the cues. Speak after the beep.",
          },
          prepSec: 30,
          card: {
            title:
              "Olet kuntosalin jäsen. Loukkasit polvesi, eikä lääkäri suosittele liikuntaa kahteen kuukauteen. Soitat kuntosalin asiakaspalveluun, koska haluat keskeyttää jäsenyytesi.",
            questions: [],
          },
          items: [
            {
              id: "a",
              spoken: "Kuntokeskus Sisu, asiakaspalvelu, Mari puhelimessa. Miten voin auttaa?",
              cue: "[Esittele itsesi ja kerro, miksi soitat.]",
              speakSec: 20,
            },
            {
              id: "b",
              spoken: "Voi harmi, toivottavasti paranette pian. Kertoisitteko vielä, mitä polvellenne tapahtui?",
              cue: "[Kerro lyhyesti, mitä tapahtui.]",
              speakSec: 20,
            },
            {
              id: "c",
              spoken: "Selvä. Jäsenyyden voi keskeyttää, mutta siihen tarvitaan lääkärintodistus. Onko teillä sellainen?",
              cue: "[Vastaa ja kerro, milloin voit toimittaa todistuksen.]",
              speakSec: 15,
            },
            {
              id: "d",
              spoken: "Hyvä. Keskeytyksestä peritään kuitenkin kymmenen euron käsittelymaksu, ja sopimuksenne jatkuu kahdella kuukaudella.",
              cue: "[Kerro, mitä mieltä olet maksusta ja sopimuksen jatkumisesta, ja perustele.]",
              speakSec: 25,
            },
            {
              id: "e",
              spoken: "Ymmärrän. Vaihtoehtoisesti voisitte käydä meillä fysioterapeutin ohjaamassa kuntoutusryhmässä, joka sisältyy jäsenyyteen. Kiinnostaisiko se?",
              cue: "[Kysy ryhmästä tarkemmin ja kerro, kiinnostaako se sinua.]",
              speakSec: 20,
            },
            {
              id: "f",
              spoken: "Selvä, kirjaan tämän nyt järjestelmään. Haluatteko vahvistuksen sähköpostiin vai tekstiviestinä?",
              cue: "[Vastaa, kiitä ja lopeta puhelu.]",
              speakSec: 15,
            },
          ],
        },
        {
          id: "k15s3",
          kind: "keskustelu",
          title: "Tehtävä 2: Keskustelu B",
          instructions: {
            fi: "Kuulet keskustelun, jossa puhut vuorotellen toisen henkilön kanssa. Lue tilanne ja ohjeet. Puhu, kun kuulet äänimerkin.",
            en: "You will take turns with another speaker. Read the situation and the cues. Speak after the beep.",
          },
          prepSec: 30,
          card: {
            title:
              "Naapurisi Aino on 86-vuotias ja asuu yksin. Viime aikoina häntä ei ole näkynyt pihalla, ja olet ollut hänestä huolissasi. Tapaat hänet rappukäytävässä. Sinä aloitat.",
            questions: [],
          },
          items: [
            { id: "a", spoken: "", cue: "[Tervehdi Ainoa ja kysy, mitä hänelle kuuluu.]", speakSec: 15 },
            {
              id: "b",
              spoken: "Voi, kiitos kun kysyt. No, ei tässä ihan hyvin mene. Kaaduin pari viikkoa sitten kotona, ja nyt pelottaa lähteä kauppaan, kun on niin liukasta.",
              cue: "[Reagoi Ainon kertomaan ja tarjoudu auttamaan.]",
              speakSec: 20,
            },
            {
              id: "c",
              spoken: "Olet ystävällinen, mutta en minä halua olla kenellekään vaivaksi. Kyllä minä jotenkin pärjään.",
              cue: "[Vakuuta Ainolle, että autat mielelläsi, ja perustele.]",
              speakSec: 20,
            },
            {
              id: "d",
              spoken: "No, jos sinä niin sanot. Mutta et sinä voi joka päivä käydä kaupassa minun puolestani.",
              cue: "[Ehdota jotakin muuta ratkaisua, esimerkiksi ruoan tilaamista kotiin.]",
              speakSec: 25,
            },
            {
              id: "e",
              spoken: "Ruokaa netistä? En minä osaa tilata mitään netistä. Lapsenlapseni yritti kerran opettaa, mutta ei siitä tullut mitään.",
              cue: "[Tarjoudu auttamaan ja kerro, miten voisitte tehdä sen yhdessä.]",
              speakSec: 20,
            },
            {
              id: "f",
              spoken: "Kiitos, sinä olet kultainen. Tule vaikka huomenna kahville, niin katsotaan sitä yhdessä.",
              cue: "[Sovi ajasta ja lopeta keskustelu.]",
              speakSec: 15,
            },
          ],
        },
        {
          id: "k15s4",
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
              situation: "Ystäväsi pyytää sinua lenkille huomisaamuna, mutta sinulla on flunssa. Mitä sanot?",
              spoken: "Tilanne 1. Ystäväsi pyytää sinua lenkille huomisaamuna, mutta sinulla on flunssa. Mitä sanot?",
              prepSec: 20,
              speakSec: 20,
            },
            {
              id: "b",
              situation: "Soitat apteekkiin, koska haluat tietää, onko sinulle määrättyä lääkettä varastossa, ennen kuin lähdet hakemaan sitä. Mitä sanot?",
              spoken: "Tilanne 2. Soitat apteekkiin, koska haluat tietää, onko sinulle määrättyä lääkettä varastossa, ennen kuin lähdet hakemaan sitä. Mitä sanot?",
              prepSec: 20,
              speakSec: 30,
            },
            {
              id: "c",
              situation: "Et päässyt eilen tärkeään työpalaveriin, koska olit lääkärissä, etkä ehtinyt ilmoittaa siitä etukäteen. Mitä sanot esihenkilöllesi?",
              spoken: "Tilanne 3. Et päässyt eilen tärkeään työpalaveriin, koska olit lääkärissä, etkä ehtinyt ilmoittaa siitä etukäteen. Mitä sanot esihenkilöllesi?",
              prepSec: 20,
              speakSec: 30,
            },
            {
              id: "d",
              situation: "Olet odottanut terveysasemalla jo kolme varttia varatun aikasi jälkeen, eikä kukaan ole kertonut syytä. Menet ilmoittautumistiskille. Mitä sanot?",
              spoken: "Tilanne 4. Olet odottanut terveysasemalla jo kolme varttia varatun aikasi jälkeen, eikä kukaan ole kertonut syytä. Menet ilmoittautumistiskille. Mitä sanot?",
              prepSec: 20,
              speakSec: 30,
            },
            {
              id: "e",
              situation: "Olet ensimmäistä kertaa uudella kuntosalilla etkä tiedä, miten yksi laite toimii. Vieressäsi treenaa joku, joka näyttää kokeneelta. Mitä sanot?",
              spoken: "Tilanne 5. Olet ensimmäistä kertaa uudella kuntosalilla etkä tiedä, miten yksi laite toimii. Vieressäsi treenaa joku, joka näyttää kokeneelta. Mitä sanot?",
              prepSec: 20,
              speakSec: 30,
            },
          ],
        },
        {
          id: "k15s5",
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
              "A. Etävastaanotto: Pitäisikö lääkärissä käydä yhä useammin videoyhteydellä? Mitä hyviä ja huonoja puolia siinä on? Kenelle se sopii ja kenelle ei?",
              "B. Terveelliset elintavat: Onko terveys ennen kaikkea ihmisen omalla vastuulla vai yhteiskunnan? Pitäisikö epäterveellisiä tuotteita verottaa enemmän? Miten ihmisiä voisi kannustaa liikkumaan?",
            ],
          },
          items: [{ id: "a", spoken: "Kerro mielipiteesi valitsemastasi aiheesta. Aloita puhuminen nyt.", speakSec: 120 }],
        },
      ],
    },
  ],
};
