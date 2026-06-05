const recipes = [
  {
    number: "1",
    title: "Nedeljni „wrap“",
    subtitle: "Topao, proteinski i pun života — savršen za lagani doručak ili brzi obrok nakon treniga.",
    author_comment: "Brzo, ukusno i jaaako zadovoljavajuće",
    prep_time: "10 min",
    ingredients: [
      "1 integralna ili proteinska tortilja (grejati kratko u suvom tiganju)",
      "malo parče feta sira (oko 50g)",
      "Komadić ljutog sira za pikantnan ukus (može i bez)",
      "kašika grčkog jogurta, za laganiju varijantu",
      "Pečene semenke (suncokret, susam, lan)",
      "Svež krastavac (na kolutiće)",
      "Crvena i zelena paprika (na trakice)"
    ],
    instructions: [
      "Tortilju zagrej u suvom tiganju dok ne omekša i postane elastična.",
      "Izgnj ečiti sireve viljuškom i dodati jogurt.",
      "Ispeći semenke na suvom tiganju dok ne zamirišu.",
      "Pomešaj sireve i semenke i namuži na tortilju.",
      "Dodaj povrće i urolaj.",
      "Tostiraj kratko na tiganju i posluži uz sveži krastavac."
    ],
    note: "",
    image: "assets/images/image1.png",
    category: "Jutarnji recepti"
  },
  {
    number: "4",
    title: "Jaka voćna salata",
    subtitle: "Lagano, voćno i baš taman — kad ne želiš da opterećiš stomak pre spavanja, ali hoćeš da nahraniš dušu.",
    author_comment: "Nisam bila mnogo gladna, ali sam znala da ću uskoro biti. I nisam htela da se zavaravam — telo zna. Zato sam mu dala ovo malo voćno DA.",
    prep_time: "10 minuta",
    ingredients: [
      "1 banana",
      "1 kivi",
      "pola jabuke",
      "2 urme",
      "Prstohvat cimeta",
      "Šaka oraha ili badema",
      "Malo svežeg limunovog soka",
      "1 kašičica tahinija ili meda"
    ],
    instructions: [
      "Voće oljašti i naseckaj na komade veličine zalogaja.",
      "Poprskaj limunovim sokom da sve ostane sveže i mirišno.",
      "Pospi cimetom i lagano promešaj kašikom.",
      "Na kraju dodaj orahe ili bademe (šta imaš pri ruci).",
      "Preko svega dodaj tahini, med ili bez slađivača."
    ],
    note: "",
    image: "assets/images/image24.png",
    category: "Osvežavajući recepti"
  },
  {
    number: "5",
    title: "Mali čoko zalogaji posle joge",
    subtitle: "Malo jednostavno zadovoljstvo zamišljeno kao omaž Dubai čokoladi.",
    author_comment: "Zalogaj inspirisan jednim blagim osmehom i lakoćom kretanja.",
    prep_time: "10 minuta + hlađenje 2–3 sata",
    ingredients: [
      "2–3 kašike krema od pistaća (ili puter od kikirikija, mus od indijskih oraha, tahini…)",
      "1 kašika tahinija",
      "oko dve šake seckanog kadaifa",
      "crna čokolada (70–80% kakaoa), otopljena"
    ],
    instructions: [
      "Umešaj krem i tahini dok ne dobiješ glatku smesu.",
      "Dodaj kadaif i pažljivo promešaj da ostane hrskavo ali da kadaif bude zasićen kremom.",
      "Kašikom vadi male zalogaje i oblikuj ih rukama.",
      "Stavi u frižider da se stegnu oko sat vremena.",
      "Otopi čokoladu i filuj čokoladice pomoću dve viljuške.",
      "Uživaj u malim trenucima slatke lakoće i zahvalnosti."
    ],
    note: "",
    image: "assets/images/image32.png",
    category: "Recepti uz kafu"
  },
  {
    number: "6",
    title: "Tople leblebije s jogurtom i tahinijem",
    subtitle: "Topao, kremast, začinski — za lenja vikend jutra kada dan počinje bez žurbe.",
    author_comment: "Ovo je tradicionalni arapski doručak, samo laganiji — bez prženja i bez težine. Zadržala sam dušu, ali pustila telo da se odmori i da lakše vari.",
    prep_time: "15–20 minuta",
    ingredients: [
      "1 konzerva kuvanih leblebija (oko 200 g)",
      "1 čaša grčkog jogurta",
      "1 kašika tahinija",
      "Sok od pola limuna",
      "So, biber, beli luk u prahu (po ukusu)",
      "Malo maslinovog ulja (opciono)",
      "2 kašike koštunjavog voća (pinjoli, bademi, indijski orah…)"
    ],
    instructions: [
      "Leblebije dobro isperi i kratko prokuvaj — da se probude i omekšaju.",
      "Umak napravi od jogurta, tahinija, limuna i začina – ovaj umak je srce tvog tanjira.",
      "Na suvom tiganju ispeci koštunjavo voće dok blago ne zamiriše.",
      "Pomešaj leblebije i umak, pospi pečenim semenkama.",
      "Po želji, dodaj kap maslinovog ulja.",
      "Uživaj uz prepečen tost, pita hleb ili čak bez ičega — kao low carb početak dana."
    ],
    note: "",
    image: "assets/images/image2.png",
    category: "Jutarnji recepti"
  },
  {
    number: "7",
    title: "Mini pice od plavog patližāna",
    subtitle: "Lagani zalogaji sa dodirom mediteranskog leta — savršeni kad želiš nešto toplo i puno ukusa.",
    author_comment: "Patližjan kao baza umesto testa, paradajz i origano da zamiriše ceo tvoj dom, a masline i sir daju onaj domaći šmek kao staro bakino jelo.",
    prep_time: "45 minuta (uključujući pečenje)",
    ingredients: [
      "1 plavi patližjan, isečen na kolutiće (oko 1 cm), odgorčen",
      "Paradajz, isečen na kolutiće",
      "Crne ili zelene masline",
      "Rendani sir po izboru",
      "Maslinovo ulje (oko 1 kašika)",
      "Origano, po ukusu"
    ],
    instructions: [
      "U pleh za pečenje poređaj kolutiće patližjana.",
      "Prelij ih sa malo maslinovog ulja.",
      "Pospi rendanim sirom.",
      "Preko složi kolutiće paradajza, masline i, ako voliš, šampinjone.",
      "Pospi sve origanom.",
      "Stavi u zagrejanoj rernu i peci oko 30 minuta, dok se kuća ne ispuni mirisom Mediterana.",
      "Posluži toplo, uz prepečen hleb ili kuvani krompir."
    ],
    note: "",
    image: "assets/images/image13.png",
    category: "Recepti kada ne znam šta da kuvam"
  },
  {
    number: "8",
    title: "Spori medenjaci iz ugašene rerne",
    subtitle: "Jer i kolači vole da odmore, a ne da izgore.",
    author_comment: "Ovi medenjaci se ne prave po pravilima, već po osećaju. Ne brojiš minute, ne proveriš rernu, ne juriš savršenstvo. Samo zamesiš rukama, zamirišeš kuhinju i veruješ.",
    prep_time: "15 minuta + sušenje u ugašenoj rerni",
    ingredients: [
      "200–300 g integralnog brašna",
      "1 kašičica cimeta",
      "Prstohvat kardamoma",
      "Šaka suvog grožđa",
      "Šaka suvih brusnica",
      "Šaka seckanih oraha",
      "1 puna supena kašika meda (ili više za veću količinu)",
      "Oko 50 ml ulja (po osećaju)",
      "Malo biljnog mleka (samo ako je smesa previše suva)"
    ],
    instructions: [
      "Pomešaj suve sastojke.",
      "U posebnoj činiji sjedini med i ulje, pa dodaj u suve sastojke.",
      "Umesi testo rukama — mekano ali kompaktno.",
      "Oblikuj medenjake i poređaj ih na papir za pečenje.",
      "Zagrej rernu na 220°C. Ubaci pleh sa medenjacima i odmah isključi rernu!",
      "Ne otvaraj rernu dok se potpuno ne ohladi — veruj procesu.",
      "Izvadi, pusti da se ohlade, pa prebaci u činiju ili teglu sa poklopcem."
    ],
    note: "",
    image: "assets/images/image28.png",
    category: "Recepti uz kafu"
  },
  {
    number: "9",
    title: "„Lažne“ čoko rolnice",
    subtitle: "Izgledaju kao čokolada, mirišu kao čokolada, tope se kao čokolada — ali bez trunke prave čokolade!",
    author_comment: "Ovaj namaz je nastao kao moja domaća alternativa Nutelli — za trenutke kad mi se jede nešto slatko, ali ne industrijsko. Prvo je bio za palačinke, a onda su se same rodile i ove male, nežne rolnice.",
    prep_time: "10 minuta + hlađenje",
    ingredients: [
      "1 tanak list lavaša, tortilje ili domaće neutralne palačinke",
      "1 kašika kikiriki putera",
      "1 kašika meda",
      "1 kašičica kakaa (nezaslađenog)",
      "Po želji: prstohvat cimeta ili vanile"
    ],
    instructions: [
      "U maloj činiici sjedini kikiriki puter, med i kakao dok ne dobiješ gust, maziv krem.",
      "Po želji dodaj cimet ili vanilu.",
      "Rasporedi krem po čitavoj površini lavaša ili palačinke.",
      "Pažljivo urolaj i stavi u frižider na 10–15 minuta da se stegne.",
      "Iseci na male rolnice i posluži kao zalogaj uz čaj, kafu ili čašu biljnog mleka."
    ],
    note: "",
    image: "assets/images/image39.png",
    category: "Recepti uz kafu"
  },
  {
    number: "10",
    title: "Tunin bowl za pun stomak i bistru glavu",
    subtitle: "Bowl koji ti pokaže da balans može biti i jednostavan.",
    author_comment: "Ovaj bowl je nastao u jednoj od onih večeri kad nisam imala snage da kuvam, ali sam znala da moje telo ipak zaslužuje pažnju posle dugog radnog dana. Sve je bilo tu — u frižideru, a onda u činiji.",
    prep_time: "10 minuta",
    ingredients: [
      "½ šolje kuvanog pirinča (ili kinoe)",
      "½ konzerve tunjevine (u vodi ili maslinovom ulju)",
      "2 kašike meksičke mešavine (crveni pasulj i kukuruz)",
      "½ svežeg krastavca, naseckanog",
      "6–8 zelenih maslina",
      "Sok od ¼ limuna",
      "So i biber po ukusu"
    ],
    instructions: [
      "Na dno činije stavi bazu — kuvani pirinč ili kinou.",
      "Preko poređaj tunjevinu, kukuruz i pasulj.",
      "Dodaj krastavac i masline.",
      "Sve poprskaj limunovim sokom i po želji začini.",
      "Lagano promešaj ili jedi slojevito — tvoj dan, tvoja pravila."
    ],
    note: "",
    image: "assets/images/image21.png",
    category: "Osvežavajući recepti"
  },
  {
    number: "11",
    title: "Kremasti čokoladni sutlijaš",
    subtitle: "Zalogaj koji kaže: ne moraš biti superžena, samo gladna i iskrena.",
    author_comment: "Nastao je jedne večeri kad sam poželela miris detinjstva, ali sada u mojoj verziji. Topao, slatkast, a bez mleka i šećera.",
    prep_time: "20–25 minuta",
    ingredients: [
      "½ šolje pirinča (okruglog ili za sutljaš)",
      "1 šolja biljnog mleka (ili običnog, po želji)",
      "Prstohvat soli",
      "Prava vanila ili vanilin šećer (po ukusu)",
      "2 urme, naseckane",
      "2 kockice tamne čokolade, sitno iseckane",
      "½ kašičice cimeta"
    ],
    instructions: [
      "Pirinč isperi i stavi da se kuva u biljnom mleku sa malo soli.",
      "Pusti da vri na tihoj vatri dok pirinč ne omekša i upije većinu tečnosti.",
      "Dodaj vanilu i promešaj.",
      "Skloni s vatre i prebaci u činiju.",
      "Po vrhu pospi naseckane urme, čokoladu i malo cimeta.",
      "Dodaj štapić cimeta ako želiš romantičan efekat."
    ],
    note: "",
    image: "assets/images/image33.png",
    category: "Recepti uz kafu"
  },
  {
    number: "12",
    title: "Banana hleb sa suvim grožđem",
    subtitle: "Kad ti zatreba nešto što će da miriše na dom, i hleb i kolač u isto vreme.",
    author_comment: "Ovaj hleb je moj izbor za doručak ili večeru u hladnim jesenjim danima. Belanca posebno mutim dok ne postanu penasta, da sve ostane lagano i mekano.",
    prep_time: "15 minuta + 45 minuta pečenja",
    ingredients: [
      "2 zrele banane",
      "2 jaja (belanca i žumanca odvojeno)",
      "2 kašike meda ili šećera",
      "1 kesica vanile",
      "1 kesica praška za pecivo",
      "Prstohvat soli",
      "200 g integralnog ili ovsenog brašna",
      "šaka seckanih oraha",
      "šaka suvog grožđa",
      "kašičica cimeta"
    ],
    instructions: [
      "Banane izgnj eči viljuškom i pomešaj ih sa žumancima, medom i vanilom.",
      "Dodaj brašno, prašak za pecivo, prstohvat soli i po želji cimet.",
      "Umešaj orahe i suvo grožđe.",
      "Belanca posebno umuti dok ne postanu penasta, pa ih lagano dodaj u smesu.",
      "Sipaj smesu u kalup obložen papirom za pečenje.",
      "Peci u prethodno zagrejanoj rerni na 180°C oko 30–35 minuta.",
      "Ohladi, naseci, uživaj."
    ],
    note: "",
    image: "assets/images/image25.png",
    category: "Recepti uz kafu"
  },
  {
    number: "14",
    title: "Sunčani kajsija bowl",
    subtitle: "Idealni lagani doručak koji se pravi za 5 minuta, drži sitom i ne opterećuje stomak.",
    author_comment: "Samo pomešaj, prelij i ukrasi svežim kajsijama — i savršeni bowl ti se već smeška.",
    prep_time: "3–5 minuta",
    ingredients: [
      "1 kašika mlevenog lana",
      "1 kašika semenki suncokreta",
      "1 čaša grčkog jogurta",
      "1 kašičica maca praha (opciono)",
      "nekoliko svežih kajsija, očišćenih i presečenih",
      "1 kašičica domaćeg meda (za prelivanje)"
    ],
    instructions: [
      "U činiji pomešaj lan, suncokret, maca prah i jogurt.",
      "Sve lagano izmešaj dok se ne sjedini.",
      "Prelij medom i ukrasi polutkama kajsije.",
      "Uživaj odmah, po mogućnosti na suncu ili uz omiljenu muziku!"
    ],
    note: "",
    category: "Jutarnji recepti"
  },
  {
    number: "15",
    title: "Ćureći stejk sa karamelizovanim povrćem i limunom",
    subtitle: "Brzi proteinski obrok posle dugog dana — uz malo vina i puno ukusa.",
    author_comment: "Bila sam umorna, ali nisam htela da pojedem bilo šta. Nalila sam čašu vina, upalila muziku i napravila sebi večeru, a onda uživala u jelu kao da sam u nekoj maloj taverni pored mora.",
    prep_time: "25 minuta",
    ingredients: [
      "1 ćureći file (šnicla)",
      "½ žute paprike",
      "3 cherry paradajza",
      "1 kašika maslinovog ulja",
      "So, biber, začinsko bilje po ukusu (timijan ili origano)",
      "Sok od ½ limuna",
      "Sveža zelena salata za dekoraciju"
    ],
    instructions: [
      "Papriku naseckaj na trake, paradajz na polovine.",
      "Na tiganju zagrej malo maslinovog ulja i proprži ćureći stejk sa svih strana dok ne dobije zlatnu boju.",
      "U istom tiganju pored mesa dodaj povrće i kratko propriži dok ne omekša i blago karamelizuje.",
      "Dodaj limunov sok, začini sve zajedno i pusti da se ukusi sjedine još minut-dva.",
      "Serviraj uz svežu salatu i čašu dobrog vina."
    ],
    note: "",
    image: "assets/images/image6.png",
    category: "Recepti kada ne znam šta da kuvam"
  },
  {
    number: "16",
    title: "Kokos curry sa crvenim sočivom",
    subtitle: "Jer kokos nisu samo kolači. Ovo je jelo koje greje stomak i smiruje misli — bilo gde da si.",
    author_comment: "Ovo jelo stvara priliku — da zastaneš, udahneš, i nahraniš sebe iznutra. Crveno sočivo mi je oduvek bilo omiljeno vegetarijansko proteinsko jelo, a kokos mu daje slatki miris leta.",
    prep_time: "30 minuta",
    ingredients: [
      "1 šolja crvenog sočiva",
      "1 manji crni luk",
      "1 čen belog luka",
      "parčence svežeg đumbira (ili ½ kašičice sušenog)",
      "1 kašičica curry začina",
      "½ kašičice kurkume",
      "1 kašika maslinovog ulja",
      "1 šolja kokosovog mleka",
      "2 šolje vode",
      "So, biber po ukusu",
      "Svež peršun ili korijander za posipanje (opciono)",
      "Sok od limuna pri serviranju"
    ],
    instructions: [
      "Na laganoj vatri propriži sitno seckan luk, beli luk i đumbir dok ne zamirišu.",
      "Dodaj curry i kurkumu, pa promešaj kratko da puste aromu.",
      "Dodaj crveno sočivo, promešaj i dodaj kokosovo mleko.",
      "Kuvaj 10–15 minuta dok sočivo ne omekša.",
      "Dodaj čašu vode ako je previše gusto.",
      "Začini po ukusu i pusti da krčka još nekoliko minuta.",
      "Serviraj toplo, uz malo limunovog soka i svežeg bilja.",
      "Kao prilog možeš skuvati basmati pirinč ili istostirati jednu kukuruznu tortilju."
    ],
    note: "",
    image: "assets/images/image7.png",
    category: "Recepti kada ne znam šta da kuvam"
  },
  {
    number: "17",
    title: "„Žive“ lazanje",
    subtitle: "Brže od klasike, lakše od originala – a jednako tople i ukusne.",
    author_comment: "Ko kaže da moraš praviti domaće kore i kuvati makarone da bi napravila dobre lazanje? Ovaj recept nastao je iz trenutka kad sam želela nešto konkretno – bez mnogo prljavih šerpi. Sve sirovo, sve slojevito, sve ide pravo u rernu.",
    prep_time: "15 minuta + pečenje oko 30–40 minuta",
    ingredients: [
      "250 g nekuvanih makarona",
      "1 flaša (oko 700 ml) soka od paradajza",
      "1 glavica crnog luka",
      "1 šargarepa",
      "350 g mlevenog mesa (junećeg ili svinjskog, po izboru)",
      "So, biber, origano, aleva paprika i prstohvat ljute mlevene paprike",
      "3 lista lovora",
      "Rendani sir"
    ],
    instructions: [
      "Luk sitno iseckaj i propriži sa malo maslinovog ulja. Dodaj mleveno meso i šargarepu i propriži dok meso ne dobije boju. Dodaj sve začine i lovorov list.",
      "Dodaj sok od paradajza i po potrebi malo vode. Sos treba da bude dovoljno redak da se makarone mogu kuvati u njemu.",
      "Prokuvaj sos i meso još nekoliko minuta da se ukusi sjedine.",
      "U vatrostalnu posudu slaži slojeve: sirove makarone pa sos — i tako dok ne potrošiš sastojke. Poređaj najmanje dva sloja.",
      "Važno: proveri da su sve makarone potpuno pokrivene tečnošću.",
      "Po vrhu pospi rendanim sirom.",
      "Uključi rernu i peci na 180°C oko 30 minuta."
    ],
    note: "",
    image: "assets/images/image8.png",
    category: "Recepti kada ne znam šta da kuvam"
  },
  {
    number: "25",
    title: "Integralni hleb sa semenkama",
    subtitle: "Tradicionalni recept kao malo umetničko delo.",
    author_comment: "Nema boljeg načina da započnete jutro nego svežim mirišnim hlebom iz svoje rerne. Potrebno je samo par sastojaka: dve vredne ruke, sunčano nedeljno jutro i malo ljubavi prema pecivima.",
    prep_time: "oko 2 h (sa narastanjem testa)",
    ingredients: [
      "400–500 g integralnog brašna",
      "1 kašičica soli",
      "2 kašike maslinovog ulja",
      "1 kockica svežeg kvasca (40 g) ili 1 kesica suvog kvasca",
      "200 ml mlake vode",
      "2 kašike semenki suncokreta",
      "2 kašike semenki golice",
      "Semenke kumina (ili susama) za posip"
    ],
    instructions: [
      "U malo mlake vode rastopi kvasac sa prstohvatom brašna i šećera, pa ostavi da zapeni.",
      "U većoj činiji pomešaj brašno, so, semenke i ulje. Dodaj nadešli kvasac i ostatak vode. Umesti glatko i mekano testo.",
      "Pokrij krpom i ostavi da naraste oko 45–60 minuta.",
      "Kada testo naraste, premesi ga i oblikuj u okrugli hleb. Na vrhu oštrim nožem možeš urezati oblik lista, krsta ili spirale.",
      "Premazati hleb umućenim jajetom i pospi semenkama kumina ili susama.",
      "Peci u prethodno zagrejanoj rerni na 220°C oko 30–35 minuta bez ventilatora, dok ne zamiriše i ne dobije zlatnu koricu."
    ],
    note: "",
    image: "assets/images/image26.png",
    category: "Recepti koji mirišu iz rerne"
  }
];
