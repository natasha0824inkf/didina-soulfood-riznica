const recipes = [
  {
    number: "1",
    title: { sr: 'Nedeljni „wrap"', de: "Der Sonntags-Wrap", en: "Sunday Wrap" },
    subtitle: {
      sr: "Topao, proteinski i pun života — savršen za lagani doručak ili brzi obrok nakon treniga.",
      de: "Warm, proteinreich und voller Leben — perfekt für ein leichtes Frühstück oder einen schnellen Snack nach dem Training.",
      en: "Warm, protein-packed and full of life — perfect for a light breakfast or a quick bite after your workout."
    },
    author_comment: {
      sr: "Brzo, ukusno i jaaako zadovoljavajuće",
      de: "Schnell, lecker und so unglaublich sättigend",
      en: "Quick, tasty and sooo satisfying"
    },
    prep_time: { sr: "10 min", de: "10 Min.", en: "10 min" },
    ingredients: {
      sr: [
        "1 integralna ili proteinska tortilja (grejati kratko u suvom tiganju)",
        "malo parče feta sira (oko 50g)",
        "Komadić ljutog sira za pikantnan ukus (može i bez)",
        "kašika grčkog jogurta, za laganiju varijantu",
        "Pečene semenke (suncokret, susam, lan)",
        "Svež krastavac (na kolutiće)",
        "Crvena i zelena paprika (na trakice)"
      ],
      de: [
        "1 Vollkorn- oder Protein-Tortilla (kurz in einer trockenen Pfanne erwärmen)",
        "ein kleines Stück Feta (ca. 50 g)",
        "Ein Stück pikanter Käse für Schärfe (optional)",
        "Ein Löffel griechischer Joghurt für eine leichtere Variante",
        "Geröstete Samen (Sonnenblumen, Sesam, Leinsamen)",
        "Frische Gurke (in Scheiben)",
        "Rote und grüne Paprika (in Streifen)"
      ],
      en: [
        "1 wholegrain or protein wrap (warm briefly in a dry pan)",
        "a small piece of feta (around 50g)",
        "A bit of sharp cheese for a kick (optional)",
        "A spoonful of Greek yogurt for a lighter version",
        "Toasted seeds (sunflower, sesame, flax)",
        "Fresh cucumber (sliced)",
        "Red and green pepper (sliced into strips)"
      ]
    },
    instructions: {
      sr: [
        "Tortilju zagrej u suvom tiganju dok ne omekša i postane elastična.",
        "Izgnj ečiti sireve viljuškom i dodati jogurt.",
        "Ispeći semenke na suvom tiganju dok ne zamirišu.",
        "Pomešaj sireve i semenke i namuži na tortilju.",
        "Dodaj povrće i urolaj.",
        "Tostiraj kratko na tiganju i posluži uz sveži krastavac."
      ],
      de: [
        "Die Tortilla in einer trockenen Pfanne erwärmen, bis sie weich und elastisch wird.",
        "Die Käsesorten mit einer Gabel zerdrücken und den Joghurt einrühren.",
        "Die Samen in einer trockenen Pfanne rösten, bis sie duften.",
        "Käse und Samen vermischen und auf der Tortilla verteilen.",
        "Gemüse hinzufügen und einrollen.",
        "Kurz in der Pfanne antoasten und mit frischer Gurke servieren."
      ],
      en: [
        "Warm the wrap in a dry pan until it softens and becomes pliable.",
        "Mash the cheeses with a fork and mix in the yogurt.",
        "Toast the seeds in a dry pan until fragrant.",
        "Combine cheeses and seeds, then spread over the wrap.",
        "Add the vegetables and roll up.",
        "Toast briefly in the pan and serve with fresh cucumber."
      ]
    },
    note: "",
    image: "assets/images/image1.png",
    category: "Jutarnji recepti"
  },
  {
    number: "4",
    title: { sr: "Jaka voćna salata", de: "Kraftvoller Obstsalat", en: "Power Fruit Bowl" },
    subtitle: {
      sr: "Lagano, voćno i baš taman — kad ne želiš da opterećiš stomak pre spavanja, ali hoćeš da nahraniš dušu.",
      de: "Leicht, fruchtig und genau richtig — wenn du deinen Magen vor dem Schlafen nicht belasten, aber deine Seele nähren willst.",
      en: "Light, fruity and just right — for when you don't want to weigh down your stomach before bed but still want to feed your soul."
    },
    author_comment: {
      sr: "Nisam bila mnogo gladna, ali sam znala da ću uskoro biti. I nisam htela da se zavaravam — telo zna. Zato sam mu dala ovo malo voćno DA.",
      de: "Ich war nicht besonders hungrig, aber ich wusste, dass das nicht lange so bleiben würde. Ich wollte mich nicht belügen — der Körper weiß es. Also habe ich ihm dieses kleine fruchtige Ja gegeben.",
      en: "I wasn't very hungry, but I knew I would be soon. I didn't want to fool myself — the body knows. So I gave it this little fruity yes."
    },
    prep_time: { sr: "10 minuta", de: "10 Min.", en: "10 minutes" },
    ingredients: {
      sr: [
        "1 banana", "1 kivi", "pola jabuke", "2 urme",
        "Prstohvat cimeta", "Šaka oraha ili badema",
        "Malo svežeg limunovog soka", "1 kašičica tahinija ili meda"
      ],
      de: [
        "1 Banane", "1 Kiwi", "ein halber Apfel", "2 Datteln",
        "Eine Prise Zimt", "Eine Handvoll Walnüsse oder Mandeln",
        "Etwas frischer Zitronensaft", "1 Teelöffel Tahini oder Honig"
      ],
      en: [
        "1 banana", "1 kiwi", "half an apple", "2 dates",
        "A pinch of cinnamon", "A handful of walnuts or almonds",
        "A little fresh lemon juice", "1 tsp tahini or honey"
      ]
    },
    instructions: {
      sr: [
        "Voće oljašti i naseckaj na komade veličine zalogaja.",
        "Poprskaj limunovim sokom da sve ostane sveže i mirišno.",
        "Pospi cimetom i lagano promešaj kašikom.",
        "Na kraju dodaj orahe ili bademe (šta imaš pri ruci).",
        "Preko svega dodaj tahini, med ili bez slađivača."
      ],
      de: [
        "Früchte schälen und in mundgerechte Stücke schneiden.",
        "Mit Zitronensaft beträufeln, damit alles frisch und aromatisch bleibt.",
        "Mit Zimt bestreuen und vorsichtig umrühren.",
        "Walnüsse oder Mandeln dazugeben (was gerade da ist).",
        "Mit Tahini, Honig oder gar nichts abschließen."
      ],
      en: [
        "Peel and chop the fruit into bite-sized pieces.",
        "Drizzle with lemon juice to keep everything fresh and fragrant.",
        "Sprinkle with cinnamon and gently stir.",
        "Add walnuts or almonds — whatever you have on hand.",
        "Finish with tahini, honey, or nothing at all."
      ]
    },
    note: "",
    image: "assets/images/image24.png",
    category: "Osvežavajući recepti"
  },
  {
    number: "5",
    title: {
      sr: "Mali čoko zalogaji posle joge",
      de: "Kleine Schoko-Häppchen nach dem Yoga",
      en: "Little Choco Bites After Yoga"
    },
    subtitle: {
      sr: "Malo jednostavno zadovoljstvo zamišljeno kao omaž Dubai čokoladi.",
      de: "Ein kleines, einfaches Vergnügen — eine Hommage an die Dubai-Schokolade.",
      en: "A small, simple treat — a little nod to Dubai chocolate."
    },
    author_comment: {
      sr: "Zalogaj inspirisan jednim blagim osmehom i lakoćom kretanja.",
      de: "Ein Häppchen, inspiriert von einem sanften Lächeln und der Leichtigkeit der Bewegung.",
      en: "A bite inspired by a gentle smile and the ease of movement."
    },
    prep_time: { sr: "10 minuta + hlađenje 2–3 sata", de: "10 Min. + 2–3 Std. kühlen", en: "10 minutes + 2–3 hours chilling" },
    ingredients: {
      sr: [
        "2–3 kašike krema od pistaća (ili puter od kikirikija, mus od indijskih oraha, tahini…)",
        "1 kašika tahinija",
        "oko dve šake seckanog kadaifa",
        "crna čokolada (70–80% kakaoa), otopljena"
      ],
      de: [
        "2–3 EL Pistaziencreme (oder Erdnussbutter, Cashewbutter, Tahini…)",
        "1 EL Tahini",
        "etwa zwei Handvoll zerkleinerter Kadaif-Teig",
        "Zartbitterschokolade (70–80 % Kakao), geschmolzen"
      ],
      en: [
        "2–3 tbsp pistachio cream (or peanut butter, cashew butter, tahini…)",
        "1 tbsp tahini",
        "about two handfuls of shredded kadaif pastry",
        "dark chocolate (70–80% cocoa), melted"
      ]
    },
    instructions: {
      sr: [
        "Umešaj krem i tahini dok ne dobiješ glatku smesu.",
        "Dodaj kadaif i pažljivo promešaj da ostane hrskavo ali da kadaif bude zasićen kremom.",
        "Kašikom vadi male zalogaje i oblikuj ih rukama.",
        "Stavi u frižider da se stegnu oko sat vremena.",
        "Otopi čokoladu i filuj čokoladice pomoću dve viljuške.",
        "Uživaj u malim trenucima slatke lakoće i zahvalnosti."
      ],
      de: [
        "Creme und Tahini verrühren, bis eine glatte Masse entsteht.",
        "Kadaif hinzufügen und vorsichtig unterheben, damit er knusprig bleibt, aber von der Creme durchzogen wird.",
        "Mit einem Löffel kleine Portionen abstechen und mit den Händen formen.",
        "Im Kühlschrank etwa eine Stunde fest werden lassen.",
        "Schokolade schmelzen und die Häppchen mit zwei Gabeln eintauchen.",
        "Genieße die kleinen Momente süßer Leichtigkeit und Dankbarkeit."
      ],
      en: [
        "Mix the cream and tahini until smooth.",
        "Add the kadaif and gently fold so it stays crunchy but soaked in cream.",
        "Scoop out small portions with a spoon and shape with your hands.",
        "Refrigerate to firm up for about an hour.",
        "Melt the chocolate and dip each bite using two forks.",
        "Enjoy the small moments of sweet lightness and gratitude."
      ]
    },
    note: "",
    image: "assets/images/image32.png",
    category: "Recepti uz kafu"
  },
  {
    number: "6",
    title: {
      sr: "Tople leblebije s jogurtom i tahinijem",
      de: "Warme Kichererbsen mit Joghurt & Tahini",
      en: "Warm Chickpeas with Yogurt & Tahini"
    },
    subtitle: {
      sr: "Topao, kremast, začinski — za lenja vikend jutra kada dan počinje bez žurbe.",
      de: "Warm, cremig, würzig — für faule Wochenendmorgen, wenn der Tag ohne Eile beginnt.",
      en: "Warm, creamy, spiced — for lazy weekend mornings when the day starts without rushing."
    },
    author_comment: {
      sr: "Ovo je tradicionalni arapski doručak, samo laganiji — bez prženja i bez težine. Zadržala sam dušu, ali pustila telo da se odmori i da lakše vari.",
      de: "Das ist ein traditionelles arabisches Frühstück, nur leichter — ohne Braten, ohne Schwere. Ich habe die Seele behalten, aber dem Körper Ruhe gegönnt.",
      en: "This is a traditional Arabic breakfast, just lighter — no frying, no heaviness. I kept the soul but let the body rest and digest more easily."
    },
    prep_time: { sr: "15–20 minuta", de: "15–20 Min.", en: "15–20 minutes" },
    ingredients: {
      sr: [
        "1 konzerva kuvanih leblebija (oko 200 g)",
        "1 čaša grčkog jogurta",
        "1 kašika tahinija",
        "Sok od pola limuna",
        "So, biber, beli luk u prahu (po ukusu)",
        "Malo maslinovog ulja (opciono)",
        "2 kašike koštunjavog voća (pinjoli, bademi, indijski orah…)"
      ],
      de: [
        "1 Dose gekochte Kichererbsen (ca. 200 g)",
        "1 Tasse griechischer Joghurt",
        "1 EL Tahini",
        "Saft einer halben Zitrone",
        "Salz, Pfeffer, Knoblauchpulver (nach Geschmack)",
        "Etwas Olivenöl (optional)",
        "2 EL Nüsse (Pinienkerne, Mandeln, Cashews…)"
      ],
      en: [
        "1 can of cooked chickpeas (around 200g)",
        "1 cup Greek yogurt",
        "1 tbsp tahini",
        "Juice of half a lemon",
        "Salt, pepper, garlic powder (to taste)",
        "A little olive oil (optional)",
        "2 tbsp nuts (pine nuts, almonds, cashews…)"
      ]
    },
    instructions: {
      sr: [
        "Leblebije dobro isperi i kratko prokuvaj — da se probude i omekšaju.",
        "Umak napravi od jogurta, tahinija, limuna i začina – ovaj umak je srce tvog tanjira.",
        "Na suvom tiganju ispeci koštunjavo voće dok blago ne zamiriše.",
        "Pomešaj leblebije i umak, pospi pečenim semenkama.",
        "Po želji, dodaj kap maslinovog ulja.",
        "Uživaj uz prepečen tost, pita hleb ili čak bez ičega — kao low carb početak dana."
      ],
      de: [
        "Kichererbsen abspülen und kurz aufkochen — nur um sie aufzuwärmen.",
        "Die Sauce aus Joghurt, Tahini, Zitronensaft und Gewürzen zubereiten — diese Sauce ist das Herzstück des Gerichts.",
        "Nüsse in einer trockenen Pfanne rösten, bis sie leicht duften.",
        "Kichererbsen und Sauce vermischen, mit gerösteten Nüssen bestreuen.",
        "Nach Belieben einen Schuss Olivenöl hinzufügen.",
        "Mit Toast, Pita oder als Low-Carb-Start in den Tag genießen."
      ],
      en: [
        "Rinse the chickpeas well and heat briefly — just to wake them up.",
        "Make the sauce from yogurt, tahini, lemon and spices — this sauce is the heart of the dish.",
        "Toast the nuts in a dry pan until lightly fragrant.",
        "Mix chickpeas and sauce, top with toasted nuts.",
        "Add a drizzle of olive oil if you like.",
        "Enjoy with toasted bread, pita, or on its own as a low-carb start to the day."
      ]
    },
    note: "",
    image: "assets/images/image2.png",
    category: "Jutarnji recepti"
  },
  {
    number: "7",
    title: {
      sr: "Mini pice od plavog patližāna",
      de: "Mini-Pizzen auf Auberginen-Basis",
      en: "Mini Aubergine Pizzas"
    },
    subtitle: {
      sr: "Lagani zalogaji sa dodirom mediteranskog leta — savršeni kad želiš nešto toplo i puno ukusa.",
      de: "Leichte Häppchen mit mediterranem Sommertouch — perfekt für einen warmen, aromatischen Snack.",
      en: "Light bites with a touch of Mediterranean summer — perfect when you want something warm and full of flavour."
    },
    author_comment: {
      sr: "Patližjan kao baza umesto testa, paradajz i origano da zamiriše ceo tvoj dom, a masline i sir daju onaj domaći šmek kao staro bakino jelo.",
      de: "Aubergine als Boden statt Teig, Tomate und Oregano damit dein ganzes Zuhause duftet, Oliven und Käse für dieses heimelige Gefühl wie bei Oma.",
      en: "Aubergine as the base instead of dough, tomato and oregano to fill the house with fragrance, olives and cheese for that homemade feel — like something from grandma's old kitchen."
    },
    prep_time: { sr: "45 minuta (uključujući pečenje)", de: "45 Min. (mit Backzeit)", en: "45 minutes (including baking)" },
    ingredients: {
      sr: [
        "1 plavi patližjan, isečen na kolutiće (oko 1 cm), odgorčen",
        "Paradajz, isečen na kolutiće",
        "Crne ili zelene masline",
        "Rendani sir po izboru",
        "Maslinovo ulje (oko 1 kašika)",
        "Origano, po ukusu"
      ],
      de: [
        "1 Aubergine, in Scheiben (ca. 1 cm) geschnitten und entbittert",
        "Tomaten, in Scheiben geschnitten",
        "Schwarze oder grüne Oliven",
        "Geriebener Käse nach Wahl",
        "Olivenöl (ca. 1 EL)",
        "Oregano nach Geschmack"
      ],
      en: [
        "1 aubergine, sliced into rounds (about 1 cm thick), salted to remove bitterness",
        "Tomato, sliced into rounds",
        "Black or green olives",
        "Grated cheese of your choice",
        "Olive oil (about 1 tbsp)",
        "Oregano, to taste"
      ]
    },
    instructions: {
      sr: [
        "U pleh za pečenje poređaj kolutiće patližjana.",
        "Prelij ih sa malo maslinovog ulja.",
        "Pospi rendanim sirom.",
        "Preko složi kolutiće paradajza, masline i, ako voliš, šampinjone.",
        "Pospi sve origanom.",
        "Stavi u zagrejanoj rernu i peci oko 30 minuta, dok se kuća ne ispuni mirisom Mediterana.",
        "Posluži toplo, uz prepečen hleb ili kuvani krompir."
      ],
      de: [
        "Auberginenscheiben in ein Backblech legen.",
        "Mit etwas Olivenöl beträufeln.",
        "Mit geriebenem Käse bestreuen.",
        "Tomatenscheiben, Oliven und nach Belieben Champignons darauflegen.",
        "Alles mit Oregano bestreuen.",
        "Im vorgeheizten Ofen ca. 30 Min. backen, bis das Haus nach Mittelmeer riecht.",
        "Warm mit geröstetem Brot oder Pellkartoffeln servieren."
      ],
      en: [
        "Arrange the aubergine slices in a baking tray.",
        "Drizzle with a little olive oil.",
        "Sprinkle with grated cheese.",
        "Top with tomato slices, olives and mushrooms if you like.",
        "Sprinkle everything with oregano.",
        "Bake in a preheated oven for about 30 minutes, until the house smells of the Mediterranean.",
        "Serve warm with toasted bread or boiled potatoes."
      ]
    },
    note: "",
    image: "assets/images/image13.png",
    category: "Recepti kada ne znam šta da kuvam"
  },
  {
    number: "8",
    title: {
      sr: "Spori medenjaci iz ugašene rerne",
      de: "Langsame Lebkuchen aus dem ausgeschalteten Ofen",
      en: "Slow Gingerbreads from a Switched-Off Oven"
    },
    subtitle: {
      sr: "Jer i kolači vole da odmore, a ne da izgore.",
      de: "Denn auch Plätzchen wollen sich ausruhen, nicht verbrennen.",
      en: "Because cookies love to rest too, not to burn."
    },
    author_comment: {
      sr: "Ovi medenjaci se ne prave po pravilima, već po osećaju. Ne brojiš minute, ne proveriš rernu, ne juriš savršenstvo. Samo zamesiš rukama, zamirišeš kuhinju i veruješ.",
      de: "Diese Lebkuchen folgen keinen Regeln, sondern dem Gefühl. Du zählst keine Minuten, schaust nicht in den Ofen, jagst keine Perfektion. Du knetest einfach mit den Händen, riechst wie die Küche sich erwärmt, und vertraust.",
      en: "These gingerbreads don't follow rules — they follow feeling. You don't count minutes, you don't check the oven, you don't chase perfection. You just knead with your hands, smell the kitchen fill with warmth, and trust."
    },
    prep_time: { sr: "15 minuta + sušenje u ugašenoj rerni", de: "15 Min. + Trocknen im ausgeschalteten Ofen", en: "15 minutes + drying in a switched-off oven" },
    ingredients: {
      sr: [
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
      de: [
        "200–300 g Vollkornmehl",
        "1 TL Zimt",
        "Eine Prise Kardamom",
        "Eine Handvoll Rosinen",
        "Eine Handvoll getrocknete Cranberries",
        "Eine Handvoll gehackte Walnüsse",
        "1 gehäufter EL Honig (mehr für eine größere Menge)",
        "Ca. 50 ml Öl (nach Gefühl)",
        "Etwas Pflanzenmilch (nur wenn der Teig zu trocken ist)"
      ],
      en: [
        "200–300 g wholegrain flour",
        "1 tsp cinnamon",
        "A pinch of cardamom",
        "A handful of raisins",
        "A handful of dried cranberries",
        "A handful of chopped walnuts",
        "1 heaped tbsp honey (more for a larger batch)",
        "Around 50 ml oil (by feel)",
        "A little plant milk (only if the mixture is too dry)"
      ]
    },
    instructions: {
      sr: [
        "Pomešaj suve sastojke.",
        "U posebnoj činiji sjedini med i ulje, pa dodaj u suve sastojke.",
        "Umesi testo rukama — mekano ali kompaktno.",
        "Oblikuj medenjake i poređaj ih na papir za pečenje.",
        "Zagrej rernu na 220°C. Ubaci pleh sa medenjacima i odmah isključi rernu!",
        "Ne otvaraj rernu dok se potpuno ne ohladi — veruj procesu.",
        "Izvadi, pusti da se ohlade, pa prebaci u činiju ili teglu sa poklopcem."
      ],
      de: [
        "Die trockenen Zutaten vermischen.",
        "In einer anderen Schüssel Honig und Öl vermengen, dann zu den trockenen Zutaten geben.",
        "Den Teig mit den Händen kneten — weich, aber kompakt.",
        "Lebkuchen formen und auf Backpapier legen.",
        "Ofen auf 220°C vorheizen. Blech hineinschieben und Ofen sofort ausschalten!",
        "Den Ofen nicht öffnen, bis er vollständig abgekühlt ist — vertrau dem Prozess.",
        "Herausnehmen, abkühlen lassen und in eine Schüssel oder ein Glas umfüllen."
      ],
      en: [
        "Mix the dry ingredients.",
        "In a separate bowl, combine honey and oil, then add to the dry ingredients.",
        "Knead the dough with your hands — soft but compact.",
        "Shape the gingerbreads and place on baking paper.",
        "Heat the oven to 220°C. Put the tray in and immediately switch the oven off!",
        "Do not open the oven until it has fully cooled — trust the process.",
        "Remove, let cool, then transfer to a bowl or jar with a lid."
      ]
    },
    note: "",
    image: "assets/images/image28.png",
    category: "Recepti uz kafu"
  },
  {
    number: "9",
    title: {
      sr: '„Lažne" čoko rolnice',
      de: "Falsche Schoko-Röllchen",
      en: "\"Fake\" Choco Rolls"
    },
    subtitle: {
      sr: "Izgledaju kao čokolada, mirišu kao čokolada, tope se kao čokolada — ali bez trunke prave čokolade!",
      de: "Sie sehen aus wie Schokolade, duften wie Schokolade, schmelzen wie Schokolade — aber ganz ohne echte Schokolade!",
      en: "They look like chocolate, smell like chocolate, melt like chocolate — but with not a trace of actual chocolate!"
    },
    author_comment: {
      sr: "Ovaj namaz je nastao kao moja domaća alternativa Nutelli — za trenutke kad mi se jede nešto slatko, ali ne industrijsko. Prvo je bio za palačinke, a onda su se same rodile i ove male, nežne rolnice.",
      de: "Dieser Aufstrich entstand als meine hausgemachte Nutella-Alternative — für die Momente, wenn ich etwas Süßes wollte, aber nichts Industrielles. Zuerst war er für Pfannkuchen, dann haben sich diese kleinen Röllchen wie von selbst ergeben.",
      en: "This spread started as my homemade Nutella alternative — for those moments when I wanted something sweet but not industrial. First it was for pancakes, then these little, delicate rolls were born all by themselves."
    },
    prep_time: { sr: "10 minuta + hlađenje", de: "10 Min. + Kühlen", en: "10 minutes + chilling" },
    ingredients: {
      sr: [
        "1 tanak list lavaša, tortilje ili domaće neutralne palačinke",
        "1 kašika kikiriki putera",
        "1 kašika meda",
        "1 kašičica kakaa (nezaslađenog)",
        "Po želji: prstohvat cimeta ili vanile"
      ],
      de: [
        "1 dünnes Lavash, eine Tortilla oder selbstgemachter neutraler Crêpe",
        "1 EL Erdnussbutter",
        "1 EL Honig",
        "1 TL ungesüßtes Kakaopulver",
        "Optional: eine Prise Zimt oder Vanille"
      ],
      en: [
        "1 thin lavash, tortilla, or homemade neutral crêpe",
        "1 tbsp peanut butter",
        "1 tbsp honey",
        "1 tsp unsweetened cocoa powder",
        "Optional: a pinch of cinnamon or vanilla"
      ]
    },
    instructions: {
      sr: [
        "U maloj činiici sjedini kikiriki puter, med i kakao dok ne dobiješ gust, maziv krem.",
        "Po želji dodaj cimet ili vanilu.",
        "Rasporedi krem po čitavoj površini lavaša ili palačinke.",
        "Pažljivo urolaj i stavi u frižider na 10–15 minuta da se stegne.",
        "Iseci na male rolnice i posluži kao zalogaj uz čaj, kafu ili čašu biljnog mleka."
      ],
      de: [
        "In einer kleinen Schüssel Erdnussbutter, Honig und Kakao verrühren, bis eine dicke Creme entsteht.",
        "Nach Belieben Zimt oder Vanille hinzufügen.",
        "Die Creme auf der gesamten Fläche des Lavash oder Crêpes verteilen.",
        "Vorsichtig aufrollen und 10–15 Minuten im Kühlschrank fest werden lassen.",
        "In kleine Röllchen schneiden und als Snack mit Tee, Kaffee oder Pflanzenmilch servieren."
      ],
      en: [
        "In a small bowl, combine peanut butter, honey and cocoa until you have a thick, spreadable cream.",
        "Add cinnamon or vanilla if you like.",
        "Spread the cream over the entire surface of the lavash or crêpe.",
        "Roll up carefully and refrigerate for 10–15 minutes to firm up.",
        "Slice into small rolls and serve as a snack with tea, coffee or plant milk."
      ]
    },
    note: "",
    image: "assets/images/image39.png",
    category: "Recepti uz kafu"
  },
  {
    number: "10",
    title: {
      sr: "Tunin bowl za pun stomak i bistru glavu",
      de: "Thunfisch-Bowl für vollen Bauch und klaren Kopf",
      en: "Tuna Bowl for a Full Stomach & a Clear Head"
    },
    subtitle: {
      sr: "Bowl koji ti pokaže da balans može biti i jednostavan.",
      de: "Eine Bowl, die zeigt: Balance kann einfach sein.",
      en: "A bowl that shows you balance can be simple."
    },
    author_comment: {
      sr: "Ovaj bowl je nastao u jednoj od onih večeri kad nisam imala snage da kuvam, ali sam znala da moje telo ipak zaslužuje pažnju posle dugog radnog dana. Sve je bilo tu — u frižideru, a onda u činiji.",
      de: "Diese Bowl entstand an einem jener Abende, an denen ich keine Kraft zum Kochen hatte, aber wusste, dass mein Körper nach einem langen Arbeitstag trotzdem Aufmerksamkeit verdient. Alles war da — im Kühlschrank, dann in der Schüssel.",
      en: "This bowl was born on one of those evenings when I had no energy to cook, but I knew my body still deserved some care after a long day. Everything was there — in the fridge, then in a bowl."
    },
    prep_time: { sr: "10 minuta", de: "10 Min.", en: "10 minutes" },
    ingredients: {
      sr: [
        "½ šolje kuvanog pirinča (ili kinoe)",
        "½ konzerve tunjevine (u vodi ili maslinovom ulju)",
        "2 kašike meksičke mešavine (crveni pasulj i kukuruz)",
        "½ svežeg krastavca, naseckanog",
        "6–8 zelenih maslina",
        "Sok od ¼ limuna",
        "So i biber po ukusu"
      ],
      de: [
        "½ Tasse gekochter Reis (oder Quinoa)",
        "½ Dose Thunfisch (in Wasser oder Olivenöl)",
        "2 EL mexikanische Mischung (rote Bohnen und Mais)",
        "½ frische Gurke, gewürfelt",
        "6–8 grüne Oliven",
        "Saft von ¼ Zitrone",
        "Salz und Pfeffer nach Geschmack"
      ],
      en: [
        "½ cup cooked rice (or quinoa)",
        "½ can of tuna (in water or olive oil)",
        "2 tbsp Mexican mix (red beans and corn)",
        "½ fresh cucumber, diced",
        "6–8 green olives",
        "Juice of ¼ lemon",
        "Salt and pepper to taste"
      ]
    },
    instructions: {
      sr: [
        "Na dno činije stavi bazu — kuvani pirinač ili kinou.",
        "Preko poređaj tunjevinu, kukuruz i pasulj.",
        "Dodaj krastavac i masline.",
        "Sve poprskaj limunovim sokom i po želji začini.",
        "Lagano promešaj ili jedi slojevito — tvoj dan, tvoja pravila."
      ],
      de: [
        "Die Basis in den Boden der Schüssel geben — gekochter Reis oder Quinoa.",
        "Thunfisch, Mais und Bohnen darauflegen.",
        "Gurke und Oliven hinzufügen.",
        "Alles mit Zitronensaft beträufeln und nach Geschmack würzen.",
        "Leicht verrühren oder schichtweise essen — dein Tag, deine Regeln."
      ],
      en: [
        "Place your base at the bottom of the bowl — rice or quinoa.",
        "Layer the tuna, corn and beans on top.",
        "Add cucumber and olives.",
        "Drizzle with lemon juice and season to taste.",
        "Stir gently or eat in layers — your day, your rules."
      ]
    },
    note: "",
    image: "assets/images/image21.png",
    category: "Osvežavajući recepti"
  },
  {
    number: "11",
    title: {
      sr: "Kremasti čokoladni sutlijaš",
      de: "Cremiger Schokoladen-Milchreis",
      en: "Creamy Chocolate Rice Pudding"
    },
    subtitle: {
      sr: "Zalogaj koji kaže: ne moraš biti superžena, samo gladna i iskrena.",
      de: "Ein Bissen, der sagt: Du musst keine Superfrau sein, nur hungrig und ehrlich.",
      en: "A bite that says: you don't have to be superwoman, just hungry and honest."
    },
    author_comment: {
      sr: "Nastao je jedne večeri kad sam poželela miris detinjstva, ali sada u mojoj verziji. Topao, slatkast, a bez mleka i šećera.",
      de: "Er entstand an einem Abend, an dem ich nach dem Geruch meiner Kindheit verlangte, aber jetzt in meiner Version. Warm, süßlich, aber ohne Milch und Zucker.",
      en: "Born on an evening when I was craving the smell of childhood, but now in my version. Warm, sweet — without milk and sugar."
    },
    prep_time: { sr: "20–25 minuta", de: "20–25 Min.", en: "20–25 minutes" },
    ingredients: {
      sr: [
        "½ šolje pirinča (okruglog ili za sutljaš)",
        "1 šolja biljnog mleka (ili običnog, po želji)",
        "Prstohvat soli",
        "Prava vanila ili vanilin šećer (po ukusu)",
        "2 urme, naseckane",
        "2 kockice tamne čokolade, sitno iseckane",
        "½ kašičice cimeta"
      ],
      de: [
        "½ Tasse Rundkornreis (oder Milchreis)",
        "1 Tasse Pflanzenmilch (oder normale Milch nach Wunsch)",
        "Eine Prise Salz",
        "Echte Vanille oder Vanillezucker (nach Geschmack)",
        "2 Datteln, gehackt",
        "2 Stücke Zartbitterschokolade, fein gehackt",
        "½ TL Zimt"
      ],
      en: [
        "½ cup round-grain or pudding rice",
        "1 cup plant milk (or regular milk if preferred)",
        "A pinch of salt",
        "Real vanilla or vanilla sugar (to taste)",
        "2 dates, chopped",
        "2 squares of dark chocolate, finely chopped",
        "½ tsp cinnamon"
      ]
    },
    instructions: {
      sr: [
        "Pirinač isperi i stavi da se kuva u biljnom mleku sa malo soli.",
        "Pusti da vri na tihoj vatri dok pirinač ne omekša i upije većinu tečnosti.",
        "Dodaj vanilu i promešaj.",
        "Skloni s vatre i prebaci u činiju.",
        "Po vrhu pospi naseckane urme, čokoladu i malo cimeta.",
        "Dodaj štapić cimeta ako želiš romantičan efekat."
      ],
      de: [
        "Reis abspülen und in Pflanzenmilch mit einer Prise Salz kochen.",
        "Bei niedriger Hitze köcheln lassen, bis der Reis weich ist und die meiste Flüssigkeit aufgesogen hat.",
        "Vanille hinzufügen und umrühren.",
        "Vom Herd nehmen und in eine Schüssel umfüllen.",
        "Mit gehackten Datteln, Schokolade und etwas Zimt bestreuen.",
        "Für einen romantischen Effekt eine Zimtstange hinzufügen."
      ],
      en: [
        "Rinse the rice and cook in plant milk with a pinch of salt.",
        "Simmer on low heat until the rice is soft and has absorbed most of the liquid.",
        "Add vanilla and stir.",
        "Remove from heat and transfer to a bowl.",
        "Top with chopped dates, chocolate and a little cinnamon.",
        "Add a cinnamon stick if you want a romantic touch."
      ]
    },
    note: "",
    image: "assets/images/image33.png",
    category: "Recepti uz kafu"
  },
  {
    number: "12",
    title: {
      sr: "Banana hleb sa suvim grožđem",
      de: "Bananenbrot mit Rosinen",
      en: "Banana Bread with Raisins"
    },
    subtitle: {
      sr: "Kad ti zatreba nešto što će da miriše na dom, i hleb i kolač u isto vreme.",
      de: "Für wenn du etwas brauchst, das nach Zuhause riecht — halb Brot, halb Kuchen, ganz Geborgenheit.",
      en: "For when you need something that smells like home — half bread, half cake, all comfort."
    },
    author_comment: {
      sr: "Ovaj hleb je moj izbor za doručak ili večeru u hladnim jesenjim danima. Belanca posebno mutim dok ne postanu penasta, da sve ostane lagano i mekano.",
      de: "Dieses Brot ist meine Wahl für Frühstück oder Abendessen an kalten Herbsttagen. Das Eiweiß schlage ich extra auf, damit alles leicht und weich bleibt.",
      en: "This bread is my go-to for breakfast or dinner on cold autumn days. I beat the egg whites separately until fluffy, to keep everything light and soft."
    },
    prep_time: { sr: "15 minuta + 45 minuta pečenja", de: "15 Min. + 45 Min. Backzeit", en: "15 minutes + 45 minutes baking" },
    ingredients: {
      sr: [
        "2 zrele banane", "2 jaja (belanca i žumanca odvojeno)",
        "2 kašike meda ili šećera", "1 kesica vanile", "1 kesica praška za pecivo",
        "Prstohvat soli", "200 g integralnog ili ovsenog brašna",
        "šaka seckanih oraha", "šaka suvog grožđa", "kašičica cimeta"
      ],
      de: [
        "2 reife Bananen", "2 Eier (Eiweiß und Eigelb getrennt)",
        "2 EL Honig oder Zucker", "1 Päckchen Vanille", "1 Päckchen Backpulver",
        "Eine Prise Salz", "200 g Vollkorn- oder Haferflockenmehl",
        "Eine Handvoll gehackte Walnüsse", "Eine Handvoll Rosinen", "1 TL Zimt"
      ],
      en: [
        "2 ripe bananas", "2 eggs (whites and yolks separated)",
        "2 tbsp honey or sugar", "1 sachet vanilla", "1 sachet baking powder",
        "A pinch of salt", "200 g wholegrain or oat flour",
        "A handful of chopped walnuts", "A handful of raisins", "1 tsp cinnamon"
      ]
    },
    instructions: {
      sr: [
        "Banane izgnj eči viljuškom i pomešaj ih sa žumancima, medom i vanilom.",
        "Dodaj brašno, prašak za pecivo, prstohvat soli i po želji cimet.",
        "Umešaj orahe i suvo grožđe.",
        "Belanca posebno umuti dok ne postanu penasta, pa ih lagano dodaj u smesu.",
        "Sipaj smesu u kalup obložen papirom za pečenje.",
        "Peci u prethodno zagrejanoj rerni na 180°C oko 30–35 minuta.",
        "Ohladi, naseci, uživaj."
      ],
      de: [
        "Bananen mit einer Gabel zerdrücken und mit Eigelb, Honig und Vanille vermischen.",
        "Mehl, Backpulver, eine Prise Salz und nach Belieben Zimt hinzufügen.",
        "Walnüsse und Rosinen unterheben.",
        "Eiweiß steif schlagen und vorsichtig unter den Teig heben.",
        "In eine mit Backpapier ausgelegte Form füllen.",
        "Im vorgeheizten Ofen bei 180°C ca. 30–35 Minuten backen.",
        "Abkühlen lassen, aufschneiden, genießen."
      ],
      en: [
        "Mash the bananas with a fork and mix with the egg yolks, honey and vanilla.",
        "Add flour, baking powder, a pinch of salt and cinnamon if you like.",
        "Fold in the walnuts and raisins.",
        "Beat the egg whites separately until fluffy, then gently fold into the batter.",
        "Pour into a lined baking tin.",
        "Bake in a preheated oven at 180°C for 30–35 minutes.",
        "Cool, slice, enjoy."
      ]
    },
    note: "",
    image: "assets/images/image25.png",
    category: "Recepti uz kafu"
  },
  {
    number: "14",
    title: {
      sr: "Sunčani kajsija bowl",
      de: "Sonnige Aprikosen-Bowl",
      en: "Sunny Apricot Bowl"
    },
    subtitle: {
      sr: "Idealni lagani doručak koji se pravi za 5 minuta, drži sitom i ne opterećuje stomak.",
      de: "Das ideale leichte Frühstück — in 5 Minuten fertig, sättigend und nicht schwer.",
      en: "The ideal light breakfast, ready in 5 minutes — keeps you full without weighing you down."
    },
    author_comment: {
      sr: "Samo pomešaj, prelij i ukrasi svežim kajsijama — i savršeni bowl ti se već smeška.",
      de: "Einfach vermischen, begießen und mit frischen Aprikosen dekorieren — und die perfekte Bowl lächelt dich schon an.",
      en: "Just mix, pour and top with fresh apricots — and the perfect bowl is already smiling at you."
    },
    prep_time: { sr: "3–5 minuta", de: "3–5 Min.", en: "3–5 minutes" },
    ingredients: {
      sr: [
        "1 kašika mlevenog lana", "1 kašika semenki suncokreta",
        "1 čaša grčkog jogurta", "1 kašičica maca praha (opciono)",
        "nekoliko svežih kajsija, očišćenih i presečenih",
        "1 kašičica domaćeg meda (za prelivanje)"
      ],
      de: [
        "1 EL gemahlener Leinsamen", "1 EL Sonnenblumenkerne",
        "1 Tasse griechischer Joghurt", "1 TL Macapulver (optional)",
        "Ein paar frische Aprikosen, entkernt und halbiert",
        "1 TL hausgemachter Honig (zum Beträufeln)"
      ],
      en: [
        "1 tbsp ground flaxseed", "1 tbsp sunflower seeds",
        "1 cup Greek yogurt", "1 tsp maca powder (optional)",
        "A few fresh apricots, pitted and halved",
        "1 tsp honey (for drizzling)"
      ]
    },
    instructions: {
      sr: [
        "U činiji pomešaj lan, suncokret, maca prah i jogurt.",
        "Sve lagano izmešaj dok se ne sjedini.",
        "Prelij medom i ukrasi polutkama kajsije.",
        "Uživaj odmah, po mogućnosti na suncu ili uz omiljenu muziku!"
      ],
      de: [
        "Leinsamen, Sonnenblumenkerne, Macapulver und Joghurt in einer Schüssel vermischen.",
        "Vorsichtig rühren, bis alles verbunden ist.",
        "Mit Honig beträufeln und mit Aprikosenhälften dekorieren.",
        "Sofort genießen — am besten in der Sonne oder bei deiner Lieblingsmusik!"
      ],
      en: [
        "In a bowl, mix flaxseed, sunflower seeds, maca powder and yogurt.",
        "Stir gently until combined.",
        "Drizzle with honey and top with apricot halves.",
        "Enjoy straight away — ideally in the sun or with your favourite music!"
      ]
    },
    note: "",
    image: "assets/images/image9.png",
    category: "Jutarnji recepti"
  },
  {
    number: "15",
    title: {
      sr: "Ćureći stejk sa karamelizovanim povrćem i limunom",
      de: "Putensteak mit karamellisiertem Gemüse und Zitrone",
      en: "Turkey Steak with Caramelised Vegetables & Lemon"
    },
    subtitle: {
      sr: "Brzi proteinski obrok posle dugog dana — uz malo vina i puno ukusa.",
      de: "Ein schnelles Protein-Gericht nach einem langen Tag — mit etwas Wein und viel Geschmack.",
      en: "A quick protein meal after a long day — with a little wine and lots of flavour."
    },
    author_comment: {
      sr: "Bila sam umorna, ali nisam htela da pojedem bilo šta. Nalila sam čašu vina, upalila muziku i napravila sebi večeru, a onda uživala u jelu kao da sam u nekoj maloj taverni pored mora.",
      de: "Ich war müde, aber wollte nicht irgendetwas essen. Also schenkte ich mir ein Glas Wein ein, machte Musik an und kochte mir ein richtiges Abendessen — das ich dann genoss, als wäre ich in einer kleinen Taverne am Meer.",
      en: "I was tired but didn't want to eat just anything. So I poured myself a glass of wine, put on some music and made myself a proper dinner — then enjoyed it as if I were sitting in a little taverna by the sea."
    },
    prep_time: { sr: "25 minuta", de: "25 Min.", en: "25 minutes" },
    ingredients: {
      sr: [
        "1 ćureći file (šnicla)", "½ žute paprike", "3 cherry paradajza",
        "1 kašika maslinovog ulja",
        "So, biber, začinsko bilje po ukusu (timijan ili origano)",
        "Sok od ½ limuna", "Sveža zelena salata za dekoraciju"
      ],
      de: [
        "1 Putenschnitzel", "½ gelbe Paprika", "3 Kirschtomaten",
        "1 EL Olivenöl",
        "Salz, Pfeffer, Kräuter nach Geschmack (Thymian oder Oregano)",
        "Saft einer ½ Zitrone", "Frischer grüner Salat zum Servieren"
      ],
      en: [
        "1 turkey breast fillet", "½ yellow pepper", "3 cherry tomatoes",
        "1 tbsp olive oil",
        "Salt, pepper, fresh or dried herbs (thyme or oregano)",
        "Juice of ½ lemon", "Fresh green salad for serving"
      ]
    },
    instructions: {
      sr: [
        "Papriku naseckaj na trake, paradajz na polovine.",
        "Na tiganju zagrej malo maslinovog ulja i proprži ćureći stejk sa svih strana dok ne dobije zlatnu boju.",
        "U istom tiganju pored mesa dodaj povrće i kratko propriži dok ne omekša i blago karamelizuje.",
        "Dodaj limunov sok, začini sve zajedno i pusti da se ukusi sjedine još minut-dva.",
        "Serviraj uz svežu salatu i čašu dobrog vina."
      ],
      de: [
        "Paprika in Streifen schneiden, Tomaten halbieren.",
        "In einer Pfanne etwas Olivenöl erhitzen und das Putensteak von allen Seiten goldbraun anbraten.",
        "Gemüse neben dem Fleisch in die Pfanne geben und kurz mitbraten, bis es weich und leicht karamellisiert ist.",
        "Zitronensaft hinzufügen, alles zusammen würzen und noch ein bis zwei Minuten ziehen lassen.",
        "Mit frischem Salat und einem Glas gutem Wein servieren."
      ],
      en: [
        "Slice the pepper into strips and halve the tomatoes.",
        "Heat a little olive oil in a pan and fry the turkey on all sides until golden.",
        "Add the vegetables alongside the meat and fry briefly until softened and lightly caramelised.",
        "Add lemon juice, season everything and let the flavours come together for a minute or two.",
        "Serve with fresh salad and a glass of good wine."
      ]
    },
    note: "",
    image: "assets/images/image6.png",
    category: "Recepti kada ne znam šta da kuvam"
  },
  {
    number: "16",
    title: {
      sr: "Kokos curry sa crvenim sočivom",
      de: "Kokos-Curry mit roten Linsen",
      en: "Coconut Curry with Red Lentils"
    },
    subtitle: {
      sr: "Jer kokos nisu samo kolači. Ovo je jelo koje greje stomak i smiruje misli — bilo gde da si.",
      de: "Denn Kokos ist nicht nur für Desserts. Dieses Gericht wärmt den Bauch und beruhigt die Gedanken — wo auch immer du bist.",
      en: "Because coconut isn't just for desserts. This is a dish that warms the stomach and calms the mind — wherever you are."
    },
    author_comment: {
      sr: "Ovo jelo stvara priliku — da zastaneš, udahneš, i nahraniš sebe iznutra. Crveno sočivo mi je oduvek bilo omiljeno vegetarijansko proteinsko jelo, a kokos mu daje slatki miris leta.",
      de: "Dieses Gericht schafft Gelegenheit — zum Innehalten, Durchatmen, zum Nähren von innen. Rote Linsen sind seit je mein liebstes vegetarisches Eiweiß, und Kokos gibt ihnen einen süßen Sommerduft.",
      en: "This dish creates an opportunity — to pause, breathe, and nourish yourself from within. Red lentils have always been my favourite vegetarian protein, and coconut gives them a sweet summer fragrance."
    },
    prep_time: { sr: "30 minuta", de: "30 Min.", en: "30 minutes" },
    ingredients: {
      sr: [
        "1 šolja crvenog sočiva", "1 manji crni luk", "1 čen belog luka",
        "parčence svežeg đumbira (ili ½ kašičice sušenog)",
        "1 kašičica curry začina", "½ kašičice kurkume",
        "1 kašika maslinovog ulja", "1 šolja kokosovog mleka",
        "2 šolje vode", "So, biber po ukusu",
        "Svež peršun ili korijander za posipanje (opciono)",
        "Sok od limuna pri serviranju"
      ],
      de: [
        "1 Tasse rote Linsen", "1 kleine Zwiebel", "1 Knoblauchzehe",
        "Ein Stück frischer Ingwer (oder ½ TL getrocknet)",
        "1 TL Currypulver", "½ TL Kurkuma",
        "1 EL Olivenöl", "1 Tasse Kokosmilch",
        "2 Tassen Wasser", "Salz, Pfeffer nach Geschmack",
        "Frische Petersilie oder Koriander (optional)",
        "Etwas Zitronensaft beim Servieren"
      ],
      en: [
        "1 cup red lentils", "1 small onion", "1 clove of garlic",
        "A piece of fresh ginger (or ½ tsp dried)",
        "1 tsp curry powder", "½ tsp turmeric",
        "1 tbsp olive oil", "1 cup coconut milk",
        "2 cups water", "Salt and pepper to taste",
        "Fresh parsley or coriander for sprinkling (optional)",
        "A squeeze of lemon juice when serving"
      ]
    },
    instructions: {
      sr: [
        "Na laganoj vatri propriži sitno seckan luk, beli luk i đumbir dok ne zamirišu.",
        "Dodaj curry i kurkumu, pa promešaj kratko da puste aromu.",
        "Dodaj crveno sočivo, promešaj i dodaj kokosovo mleko.",
        "Kuvaj 10–15 minuta dok sočivo ne omekša.",
        "Dodaj čašu vode ako je previše gusto.",
        "Začini po ukusu i pusti da krčka još nekoliko minuta.",
        "Serviraj toplo, uz malo limunovog soka i svežeg bilja.",
        "Kao prilog možeš skuvati basmati pirinač ili istostirati jednu kukuruznu tortilju."
      ],
      de: [
        "Bei niedriger Hitze fein gehackte Zwiebel, Knoblauch und Ingwer andünsten, bis sie duften.",
        "Curry und Kurkuma hinzufügen, kurz umrühren damit sie ihr Aroma entfalten.",
        "Rote Linsen hinzufügen, umrühren und Kokosmilch angießen.",
        "10–15 Minuten kochen, bis die Linsen weich sind.",
        "Eine Tasse Wasser hinzufügen, wenn es zu dick wird.",
        "Nach Geschmack würzen und noch einige Minuten köcheln lassen.",
        "Warm mit Zitronensaft und frischen Kräutern servieren.",
        "Als Beilage Basmatireis kochen oder eine Maistortilla erwärmen."
      ],
      en: [
        "Over low heat, fry the finely chopped onion, garlic and ginger until fragrant.",
        "Add curry and turmeric, stir briefly to release the aroma.",
        "Add the red lentils, stir, then pour in the coconut milk.",
        "Cook for 10–15 minutes until the lentils are soft.",
        "Add a cup of water if it gets too thick.",
        "Season to taste and let simmer for a few more minutes.",
        "Serve warm with a squeeze of lemon juice and fresh herbs.",
        "As a side, cook some basmati rice or warm a corn tortilla."
      ]
    },
    note: "",
    image: "assets/images/image7.png",
    category: "Recepti kada ne znam šta da kuvam"
  },
  {
    number: "17",
    title: {
      sr: '„Žive" lazanje',
      de: "\"Lebendige\" Lasagne",
      en: "\"Live\" Lasagne"
    },
    subtitle: {
      sr: "Brže od klasike, lakše od originala – a jednako tople i ukusne.",
      de: "Schneller als die Klassik, leichter als das Original — und genauso warm und lecker.",
      en: "Faster than classic, lighter than the original — and just as warm and delicious."
    },
    author_comment: {
      sr: "Ko kaže da moraš praviti domaće kore i kuvati makarone da bi napravila dobre lazanje? Ovaj recept nastao je iz trenutka kad sam želela nešto konkretno – bez mnogo prljavih šerpi. Sve sirovo, sve slojevito, sve ide pravo u rernu.",
      de: "Wer sagt, man muss Nudelplatten machen und Pasta kochen, um gute Lasagne zu machen? Dieses Rezept entstand aus dem Wunsch nach etwas Konkretem — ohne viele schmutzige Töpfe. Alles roh, alles schichtweise, alles direkt in den Ofen.",
      en: "Who says you have to make homemade pasta sheets to make good lasagne? This recipe was born from a moment when I wanted something substantial — without many dirty pots. Everything raw, everything layered, everything straight into the oven."
    },
    prep_time: { sr: "15 minuta + pečenje oko 30–40 minuta", de: "15 Min. + ca. 30–40 Min. backen", en: "15 minutes + 30–40 minutes baking" },
    ingredients: {
      sr: [
        "250 g nekuvanih makarona",
        "1 flaša (oko 700 ml) soka od paradajza",
        "1 glavica crnog luka", "1 šargarepa",
        "350 g mlevenog mesa (junećeg ili svinjskog, po izboru)",
        "So, biber, origano, aleva paprika i prstohvat ljute mlevene paprike",
        "3 lista lovora", "Rendani sir"
      ],
      de: [
        "250 g rohe Pasta",
        "1 Flasche (ca. 700 ml) Tomatenpassata",
        "1 Zwiebel", "1 Karotte",
        "350 g Hackfleisch (Rind oder Schwein, nach Wahl)",
        "Salz, Pfeffer, Oregano, Paprika und eine Prise Chiliflocken",
        "3 Lorbeerblätter", "Geriebener Käse"
      ],
      en: [
        "250 g uncooked pasta",
        "1 bottle (about 700 ml) tomato passata",
        "1 onion", "1 carrot",
        "350 g minced meat (beef or pork, as you like)",
        "Salt, pepper, oregano, paprika and a pinch of chilli flakes",
        "3 bay leaves", "Grated cheese"
      ]
    },
    instructions: {
      sr: [
        "Luk sitno iseckaj i propriži sa malo maslinovog ulja. Dodaj mleveno meso i šargarepu i propriži dok meso ne dobije boju. Dodaj sve začine i lovorov list.",
        "Dodaj sok od paradajza i po potrebi malo vode. Sos treba da bude dovoljno redak da se makarone mogu kuvati u njemu.",
        "Prokuvaj sos i meso još nekoliko minuta da se ukusi sjedine.",
        "U vatrostalnu posudu slaži slojeve: sirove makarone pa sos — i tako dok ne potrošiš sastojke. Poređaj najmanje dva sloja.",
        "Važno: proveri da su sve makarone potpuno pokrivene tečnošću.",
        "Po vrhu pospi rendanim sirom.",
        "Uključi rernu i peci na 180°C oko 30 minuta."
      ],
      de: [
        "Zwiebel fein hacken und in etwas Olivenöl anbraten. Hackfleisch und Karotte hinzufügen und braten, bis das Fleisch Farbe bekommt. Alle Gewürze und Lorbeerblätter hinzufügen.",
        "Tomatenpassata und nach Bedarf etwas Wasser angießen. Die Sauce sollte dünn genug sein, damit die Pasta darin garen kann.",
        "Sauce und Fleisch noch einige Minuten köcheln lassen, damit sich die Aromen verbinden.",
        "In einer feuerfesten Form schichten: rohe Pasta, dann Sauce — so lange, bis die Zutaten aufgebraucht sind. Mindestens zwei Schichten.",
        "Wichtig: alle Pasta muss vollständig von Flüssigkeit bedeckt sein.",
        "Mit geriebenem Käse bestreuen.",
        "Im Ofen bei 180°C ca. 30 Minuten backen."
      ],
      en: [
        "Finely chop the onion and fry with a little olive oil. Add the mince and carrot, cook until browned. Add all the spices and bay leaves.",
        "Add the passata and a little water if needed. The sauce needs to be thin enough for the pasta to cook in it.",
        "Simmer the sauce and meat for a few minutes to let the flavours blend.",
        "In an ovenproof dish, layer: raw pasta then sauce — repeat until you've used everything. At least two layers.",
        "Important: make sure all the pasta is completely covered in liquid.",
        "Sprinkle grated cheese on top.",
        "Bake in the oven at 180°C for about 30 minutes."
      ]
    },
    note: "",
    image: "assets/images/image8.png",
    category: "Recepti kada ne znam šta da kuvam"
  },
  {
    number: "25",
    title: {
      sr: "Integralni hleb sa semenkama",
      de: "Vollkornbrot mit Samen",
      en: "Wholegrain Seeded Bread"
    },
    subtitle: {
      sr: "Tradicionalni recept kao malo umetničko delo.",
      de: "Ein traditionelles Rezept als kleines Kunstwerk.",
      en: "A traditional recipe as a small work of art."
    },
    author_comment: {
      sr: "Nema boljeg načina da započnete jutro nego svežim mirišnim hlebom iz svoje rerne. Potrebno je samo par sastojaka: dve vredne ruke, sunčano nedeljno jutro i malo ljubavi prema pecivima.",
      de: "Es gibt keinen besseren Weg, den Morgen zu beginnen als mit frischem, duftendem Brot aus dem eigenen Ofen. Dafür braucht man nur wenige Zutaten: zwei eifrige Hände, einen sonnigen Sonntagmorgen und ein bisschen Liebe zum Backen.",
      en: "There is no better way to start the morning than with fresh, fragrant bread from your own oven. All you need is a few ingredients: two willing hands, a sunny Sunday morning and a little love for baking."
    },
    prep_time: { sr: "oko 2 h (sa narastanjem testa)", de: "ca. 2 Std. (mit Gehzeit)", en: "about 2 hours (including proving time)" },
    ingredients: {
      sr: [
        "400–500 g integralnog brašna", "1 kašičica soli",
        "2 kašike maslinovog ulja",
        "1 kockica svežeg kvasca (40 g) ili 1 kesica suvog kvasca",
        "200 ml mlake vode", "2 kašike semenki suncokreta",
        "2 kašike semenki golice", "Semenke kumina (ili susama) za posip"
      ],
      de: [
        "400–500 g Vollkornmehl", "1 TL Salz",
        "2 EL Olivenöl",
        "1 Würfel frische Hefe (40 g) oder 1 Päckchen Trockenhefe",
        "200 ml lauwarmes Wasser", "2 EL Sonnenblumenkerne",
        "2 EL Kürbiskerne", "Kümmel- oder Sesamsamen zum Bestreuen"
      ],
      en: [
        "400–500 g wholegrain flour", "1 tsp salt",
        "2 tbsp olive oil",
        "1 cube fresh yeast (40 g) or 1 sachet dried yeast",
        "200 ml lukewarm water", "2 tbsp sunflower seeds",
        "2 tbsp pumpkin seeds", "Cumin or sesame seeds for sprinkling"
      ]
    },
    instructions: {
      sr: [
        "U malo mlake vode rastopi kvasac sa prstohvatom brašna i šećera, pa ostavi da zapeni.",
        "U većoj činiji pomešaj brašno, so, semenke i ulje. Dodaj nadešli kvasac i ostatak vode. Umesti glatko i mekano testo.",
        "Pokrij krpom i ostavi da naraste oko 45–60 minuta.",
        "Kada testo naraste, premesi ga i oblikuj u okrugli hleb. Na vrhu oštrim nožem možeš urezati oblik lista, krsta ili spirale.",
        "Premazati hleb umućenim jajetom i pospi semenkama kumina ili susama.",
        "Peci u prethodno zagrejanoj rerni na 220°C oko 30–35 minuta bez ventilatora, dok ne zamiriše i ne dobije zlatnu koricu."
      ],
      de: [
        "Hefe in etwas lauwarmen Wasser mit einer Prise Mehl und Zucker auflösen und schäumen lassen.",
        "In einer größeren Schüssel Mehl, Salz, Samen und Öl vermischen. Aufgegangene Hefe und restliches Wasser hinzufügen. Zu einem glatten, weichen Teig kneten.",
        "Mit einem Tuch abdecken und ca. 45–60 Minuten gehen lassen.",
        "Wenn der Teig aufgegangen ist, nochmals durchkneten und zu einem runden Laib formen. Mit einem scharfen Messer oben einritzen — ein Blatt, ein Kreuz oder eine Spirale.",
        "Brot mit verquirltem Ei bestreichen und mit Kümmel- oder Sesamsamen bestreuen.",
        "Im vorgeheizten Ofen bei 220°C ca. 30–35 Minuten ohne Ventilator backen, bis es duftet und eine goldene Kruste bekommt."
      ],
      en: [
        "Dissolve the yeast in a little lukewarm water with a pinch of flour and sugar, and leave to foam.",
        "In a larger bowl, mix flour, salt, seeds and oil. Add the activated yeast and the rest of the water. Knead into a smooth, soft dough.",
        "Cover with a cloth and leave to rise for 45–60 minutes.",
        "Once risen, knock back and shape into a round loaf. Score the top with a sharp knife — a leaf, cross or spiral.",
        "Brush with beaten egg and sprinkle with cumin or sesame seeds.",
        "Bake in a preheated oven at 220°C for 30–35 minutes without a fan, until fragrant and golden."
      ]
    },
    note: "",
    image: "assets/images/image26.png",
    category: "Recepti koji mirišu iz rerne"
  },
  {
    number: "26",
    title: { sr: "Kremasta ovsena kaša sa bananom", de: "Cremiger Haferbrei mit Banane", en: "Creamy Banana Oat Porridge" },
    subtitle: {
      sr: "Topao, sitan i pun energije — savršen start koji se pravi za 5 minuta.",
      de: "Warm, sättigend und voller Energie — ein perfekter Start in 5 Minuten.",
      en: "Warm, filling and full of energy — the perfect start, ready in 5 minutes."
    },
    author_comment: {
      sr: "Moj svakodnevni doručak. Menjam što mi padne na pamet — ponekad dodajem orehe, ponekad malo kakaa, a ponekad samo jedem ovako i budem zahvalna.",
      de: "Mein tägliches Frühstück. Ich ändere es nach Lust und Laune — manchmal Nüsse, manchmal Kakao, manchmal esse ich es einfach so und bin dankbar.",
      en: "My everyday breakfast. I change it up on a whim — sometimes nuts, sometimes cocoa, sometimes I just eat it as is and feel grateful."
    },
    prep_time: { sr: "5–7 minuta", de: "5–7 Min.", en: "5–7 minutes" },
    ingredients: {
      sr: ["½ šolje zobenih pahuljica", "1 šolja biljnog mleka (ili vode)", "1 zrela banana", "1 kašičica meda ili datuljinog sirupa", "Prstohvat cimeta", "Šaka oraha, badema ili semenki", "Po želji: kašika kikiriki putera ili tahinija"],
      de: ["½ Tasse Haferflocken", "1 Tasse Pflanzenmilch (oder Wasser)", "1 reife Banane", "1 TL Honig oder Dattelsüße", "Eine Prise Zimt", "Eine Handvoll Nüsse, Mandeln oder Samen", "Optional: 1 EL Erdnussbutter oder Tahini"],
      en: ["½ cup oat flakes", "1 cup plant milk (or water)", "1 ripe banana", "1 tsp honey or date syrup", "A pinch of cinnamon", "A handful of nuts, almonds or seeds", "Optional: 1 tbsp peanut butter or tahini"]
    },
    instructions: {
      sr: ["Zobene pahuljice stavi u šerpicu sa mlekom i uključi srednju vatru.", "Meša dok se kaš ne zgusne — oko 3–4 minuta.", "Skloni s vatre i izgnječi bananu viljuškom direktno u kaš.", "Dodaj med, cimet i promiješaj.", "Pospi orašastim plodovima ili semenkama i posluži toplo."],
      de: ["Haferflocken mit Milch in einen kleinen Topf geben und bei mittlerer Hitze erwärmen.", "Rühren, bis der Brei cremig wird — etwa 3–4 Minuten.", "Vom Herd nehmen und die Banane direkt in den Brei zerdrücken.", "Honig und Zimt hinzufügen und umrühren.", "Mit Nüssen oder Samen bestreuen und warm servieren."],
      en: ["Put the oats and milk in a small pot over medium heat.", "Stir until the porridge thickens — about 3–4 minutes.", "Remove from heat and mash the banana directly into the porridge.", "Add honey and cinnamon and stir.", "Top with nuts or seeds and serve warm."]
    },
    note: "",
    image: "assets/images/image4.png",
    category: "Jutarnji recepti"
  },
  {
    number: "27",
    title: { sr: "Meko jaje sa avokadom i tostom", de: "Weiches Ei mit Avocado und Toast", en: "Soft Egg with Avocado & Toast" },
    subtitle: {
      sr: "Dva minuta pažnje za sebe ujutru — i dan počinje kako treba.",
      de: "Zwei Minuten Fürsorge für dich am Morgen — und der Tag beginnt richtig.",
      en: "Two minutes of care for yourself in the morning — and the day starts right."
    },
    author_comment: {
      sr: "Nije tu ništa komplikovano. Jaje, avokado, hleb. Ali nekad je baš to ono što je potrebno.",
      de: "Nichts Kompliziertes hier. Ei, Avocado, Brot. Aber manchmal ist genau das das Richtige.",
      en: "Nothing complicated here. Egg, avocado, toast. But sometimes that's exactly what you need."
    },
    prep_time: { sr: "8 minuta", de: "8 Min.", en: "8 minutes" },
    ingredients: {
      sr: ["2 jaja", "½ zrelog avokada", "2 kriške integralnog hleba", "So, biber, chili pahuljice", "Malo maslinovog ulja ili limunovog soka", "Nekoliko listova rukole ili salate (opciono)"],
      de: ["2 Eier", "½ reife Avocado", "2 Scheiben Vollkornbrot", "Salz, Pfeffer, Chiliflocken", "Etwas Olivenöl oder Zitronensaft", "Einige Blätter Rucola oder Salat (optional)"],
      en: ["2 eggs", "½ ripe avocado", "2 slices wholegrain toast", "Salt, pepper, chilli flakes", "A little olive oil or lemon juice", "A few leaves of rocket or salad (optional)"]
    },
    instructions: {
      sr: ["Jaja stavi u ključalu vodu i kuvaj tačno 6–7 minuta za meko kuvana.", "U međuvremenu prepeci hleb.", "Avokado izgnječi viljuškom sa malo soli, bibera i limunovog soka.", "Namazi avokado na tost.", "Jaja ohladi u hladnoj vodi, oljušti i iseci na polovine.", "Posloži na tost, pospi chilijem i posluži odmah."],
      de: ["Eier in kochendes Wasser geben und genau 6–7 Minuten kochen für weiches Eigelb.", "In der Zwischenzeit das Brot toasten.", "Avocado mit einer Gabel mit etwas Salz, Pfeffer und Zitronensaft zerdrücken.", "Avocado auf den Toast streichen.", "Eier in kaltem Wasser abschrecken, schälen und halbieren.", "Auf dem Toast anrichten, mit Chili bestreuen und sofort servieren."],
      en: ["Put the eggs in boiling water and cook for exactly 6–7 minutes for a soft yolk.", "Meanwhile, toast the bread.", "Mash the avocado with a fork with a little salt, pepper and lemon juice.", "Spread the avocado on the toast.", "Cool the eggs in cold water, peel and halve.", "Arrange on toast, sprinkle with chilli and serve immediately."]
    },
    note: "",
    image: "assets/images/image43.png",
    category: "Jutarnji recepti"
  },
  {
    number: "28",
    title: { sr: "Zeleni smoothie koji zapravo volim", de: "Der grüne Smoothie, den ich wirklich mag", en: "The Green Smoothie I Actually Love" },
    subtitle: {
      sr: "Nije gorko, nije teško — samo sveže, zeleno i baš taman slatko.",
      de: "Nicht bitter, nicht schwer — einfach frisch, grün und genau süß genug.",
      en: "Not bitter, not heavy — just fresh, green and exactly sweet enough."
    },
    author_comment: {
      sr: "Godinama nisam volela zelene smoothije. Onda sam pronašla pravu kombinaciju — i sad ga pravim skoro svaki dan.",
      de: "Jahrelang mochte ich keine grünen Smoothies. Dann fand ich die richtige Kombination — und jetzt mache ich ihn fast jeden Tag.",
      en: "For years I didn't like green smoothies. Then I found the right combination — and now I make it almost every day."
    },
    prep_time: { sr: "5 minuta", de: "5 Min.", en: "5 minutes" },
    ingredients: {
      sr: ["1 šaka svežeg spanaća ili blitve", "1 zamrznuta banana", "½ mango (svež ili zamrznut)", "1 šolja kokosovog mleka ili biljnog mleka", "Parčence svežeg đumbira", "Sok od ½ limete ili limuna", "Kocke leda (opciono)"],
      de: ["1 Handvoll frischer Spinat oder Mangold", "1 gefrorene Banane", "½ Mango (frisch oder gefroren)", "1 Tasse Kokosmilch oder Pflanzenmilch", "Ein Stück frischer Ingwer", "Saft einer ½ Limette oder Zitrone", "Eiswürfel (optional)"],
      en: ["1 handful fresh spinach or chard", "1 frozen banana", "½ mango (fresh or frozen)", "1 cup coconut milk or plant milk", "A piece of fresh ginger", "Juice of ½ lime or lemon", "Ice cubes (optional)"]
    },
    instructions: {
      sr: ["Sve sastojke stavi u blender.", "Mešaj na maksimalnoj brzini oko 60 sekundi dok ne bude glatko.", "Probaj i po potrebi dodaj malo meda ili više limuna.", "Seri odmah — dok je svež i hladan."],
      de: ["Alle Zutaten in den Mixer geben.", "Auf maximaler Stufe etwa 60 Sekunden mixen, bis alles glatt ist.", "Probieren und nach Belieben etwas Honig oder mehr Zitrone hinzufügen.", "Sofort servieren — frisch und kalt."],
      en: ["Put all ingredients in a blender.", "Blend on maximum speed for about 60 seconds until smooth.", "Taste and add a little honey or more lemon if needed.", "Serve immediately — fresh and cold."]
    },
    note: "",
    image: "assets/images/image15.png",
    category: "Osvežavajući recepti"
  },
  {
    number: "29",
    title: { sr: "Lubenica salata sa fetom i nanom", de: "Wassermelonensalat mit Feta und Minze", en: "Watermelon Salad with Feta & Mint" },
    subtitle: {
      sr: "Letnja kombinacija koja zvuči čudno a deluje kao da je uvek ovako trebalo biti.",
      de: "Eine Sommerkombination, die seltsam klingt, aber sich anfühlt, als wäre sie schon immer so gewesen.",
      en: "A summer combination that sounds strange but feels like it was always meant to be."
    },
    author_comment: {
      sr: "Ovo je jelo za vrući julski dan, uz muziku i čašu hladne vode. Ne treba ti ništa više.",
      de: "Das ist ein Gericht für einen heißen Julitag, mit Musik und einem Glas kaltem Wasser. Mehr brauchst du nicht.",
      en: "This is a dish for a hot July day, with music and a glass of cold water. You don't need anything more."
    },
    prep_time: { sr: "10 minuta", de: "10 Min.", en: "10 minutes" },
    ingredients: {
      sr: ["¼ lubenice, isečene na kocke", "100 g feta sira, izmrvljenog", "Šaka svežih listova nane", "Malo maslinovog ulja", "Crni biber po ukusu", "Opciono: kap balzamičnog sirćeta ili soka od limete"],
      de: ["¼ Wassermelone, in Würfel geschnitten", "100 g Feta, zerbröckelt", "Eine Handvoll frische Minzblätter", "Etwas Olivenöl", "Schwarzer Pfeffer nach Geschmack", "Optional: ein Tropfen Balsamico oder Limettensaft"],
      en: ["¼ watermelon, cut into cubes", "100 g feta, crumbled", "A handful of fresh mint leaves", "A little olive oil", "Black pepper to taste", "Optional: a drop of balsamic vinegar or lime juice"]
    },
    instructions: {
      sr: ["Lubenicu iseci na krupne kocke i rasporedi po tanjiru.", "Izmrvi feta sir odozgo.", "Dodaj listove nane — cele ili grubo natrgane.", "Prelij sa malo maslinovog ulja.", "Pospi crnim biberom i po želji balzamičnim sirćetom.", "Serviraj odmah, dok je sve hladno i svežo."],
      de: ["Wassermelone in grobe Würfel schneiden und auf einem Teller anrichten.", "Feta darüber zerbröckeln.", "Minzblätter hinzufügen — ganz oder grob zerrissen.", "Mit etwas Olivenöl beträufeln.", "Mit schwarzem Pfeffer und nach Belieben Balsamico bestreuen.", "Sofort servieren, solange alles kalt und frisch ist."],
      en: ["Cut the watermelon into large cubes and arrange on a plate.", "Crumble the feta on top.", "Add the mint leaves — whole or roughly torn.", "Drizzle with a little olive oil.", "Sprinkle with black pepper and balsamic if you like.", "Serve immediately, while everything is cold and fresh."]
    },
    note: "",
    image: "assets/images/image22.png",
    category: "Osvežavajući recepti"
  },
  {
    number: "30",
    title: { sr: "Tzatziki sos za sve prilike", de: "Tzatziki für alle Gelegenheiten", en: "Tzatziki for Every Occasion" },
    subtitle: {
      sr: "Napraviti ga je 10 minuta, a može uz sve — hleb, povrće, meso, riba.",
      de: "10 Minuten zum Machen, und passt zu allem — Brot, Gemüse, Fleisch, Fisch.",
      en: "10 minutes to make, and goes with everything — bread, vegetables, meat, fish."
    },
    author_comment: {
      sr: "Ovo je sos koji koristim za sve. Kad ne znam šta da jedem, pokrenem krastavac i jogurt i odjednom imam jelo.",
      de: "Das ist die Sauce, die ich für alles verwende. Wenn ich nicht weiß, was ich essen will, greife ich zu Gurke und Joghurt — und schon habe ich ein Gericht.",
      en: "This is the sauce I use for everything. When I don't know what to eat, I reach for cucumber and yogurt — and suddenly I have a meal."
    },
    prep_time: { sr: "10 minuta + hlađenje", de: "10 Min. + Kühlen", en: "10 minutes + chilling" },
    ingredients: {
      sr: ["1 čaša grčkog jogurta", "½ krastavca, rendanog i iscedenog", "1–2 čena belog luka, sitno seckanog", "1 kašika maslinovog ulja", "Malo svežeg kopra ili nane", "So i beli biber po ukusu", "Kap limunovog soka"],
      de: ["1 Tasse griechischer Joghurt", "½ Gurke, gerieben und ausgedrückt", "1–2 Knoblauchzehen, fein gehackt", "1 EL Olivenöl", "Etwas frischer Dill oder Minze", "Salz und weißer Pfeffer nach Geschmack", "Ein Spritzer Zitronensaft"],
      en: ["1 cup Greek yogurt", "½ cucumber, grated and squeezed", "1–2 garlic cloves, finely chopped", "1 tbsp olive oil", "A little fresh dill or mint", "Salt and white pepper to taste", "A squeeze of lemon juice"]
    },
    instructions: {
      sr: ["Krastavac narendaj na sitno rende, posoli i ostavi 5 minuta, pa dobro iscedi rukama.", "U činiji pomešaj jogurt, iscedeni krastavac, beli luk i maslinovo ulje.", "Dodaj bilje, so, biber i limunov sok.", "Promešaj i stavi u frižider na bar 20 minuta pre serviranja.", "Posluži uz hleb, povrće ili kao prilog uz meso."],
      de: ["Gurke fein reiben, salzen und 5 Minuten stehen lassen, dann gut ausdrücken.", "In einer Schüssel Joghurt, ausgedrückte Gurke, Knoblauch und Olivenöl vermischen.", "Kräuter, Salz, Pfeffer und Zitronensaft hinzufügen.", "Umrühren und mindestens 20 Minuten vor dem Servieren kühlen.", "Mit Brot, Gemüse oder als Beilage zu Fleisch servieren."],
      en: ["Finely grate the cucumber, salt it and leave for 5 minutes, then squeeze out well.", "In a bowl, mix yogurt, squeezed cucumber, garlic and olive oil.", "Add herbs, salt, pepper and lemon juice.", "Stir and refrigerate for at least 20 minutes before serving.", "Serve with bread, vegetables or as a side with meat."]
    },
    note: "",
    category: "Osvežavajući recepti"
  },
  {
    number: "31",
    title: { sr: "Overnight oats sa jabukama i cimetom", de: "Overnight Oats mit Apfel und Zimt", en: "Overnight Oats with Apple & Cinnamon" },
    subtitle: {
      sr: "Pripremi uveče, a jutro ćeš imati doručak koji te čeka u frižideru.",
      de: "Abends vorbereiten, und morgen wartet dein Frühstück im Kühlschrank.",
      en: "Prepare the evening before, and in the morning your breakfast is waiting in the fridge."
    },
    author_comment: {
      sr: "Za ljude koji ujutru nemaju vremena. Ili volju. Otvoriš frižider i već si sita pre nego što si i stigla da pomisliš da si gladna.",
      de: "Für Menschen, die morgens keine Zeit haben. Oder keine Lust. Kühlschrank öffnen — und schon bist du satt, bevor du überhaupt daran gedacht hast, hungrig zu sein.",
      en: "For people who have no time in the morning. Or no will. Open the fridge and you're fed before you've even thought about being hungry."
    },
    prep_time: { sr: "5 minuta + noć u frižideru", de: "5 Min. + über Nacht im Kühlschrank", en: "5 minutes + overnight in the fridge" },
    ingredients: {
      sr: ["½ šolje zobenih pahuljica", "½ šolje biljnog mleka", "½ šolje grčkog jogurta", "1 kašika čia semenki", "1 kašičica meda", "½ jabuke, narendane ili naseckane", "Prstohvat cimeta", "Šaka oraha ili badema"],
      de: ["½ Tasse Haferflocken", "½ Tasse Pflanzenmilch", "½ Tasse griechischer Joghurt", "1 EL Chiasamen", "1 TL Honig", "½ Apfel, gerieben oder gewürfelt", "Eine Prise Zimt", "Eine Handvoll Walnüsse oder Mandeln"],
      en: ["½ cup oat flakes", "½ cup plant milk", "½ cup Greek yogurt", "1 tbsp chia seeds", "1 tsp honey", "½ apple, grated or diced", "A pinch of cinnamon", "A handful of walnuts or almonds"]
    },
    instructions: {
      sr: ["U teglici ili posudici sa poklopcem pomešaj zobene pahuljice, mleko, jogurt, čia semenke i med.", "Dobro promešaj, pokrij i ostavi u frižideru do jutra.", "Ujutru dodaj narendanu ili naseckanu jabuku i cimet.", "Pospi orašastim plodovima i uživaj hladno — direktno iz tegle."],
      de: ["In einem Glas oder einer Dose mit Deckel Haferflocken, Milch, Joghurt, Chiasamen und Honig vermischen.", "Gut umrühren, abdecken und über Nacht im Kühlschrank lassen.", "Morgens geriebenen oder gewürfelten Apfel und Zimt hinzufügen.", "Mit Nüssen bestreuen und kalt genießen — direkt aus dem Glas."],
      en: ["In a jar or container with a lid, mix oats, milk, yogurt, chia seeds and honey.", "Stir well, cover and leave in the fridge overnight.", "In the morning, add the grated or diced apple and cinnamon.", "Top with nuts and enjoy cold — straight from the jar."]
    },
    note: "",
    image: "assets/images/image31.png",
    category: "Recepti uz kafu"
  },
  {
    number: "32",
    title: { sr: "Losos u foliji sa limunom i začinskim biljem", de: "Lachs in Folie mit Zitrone und Kräutern", en: "Foil-Baked Salmon with Lemon & Herbs" },
    subtitle: {
      sr: "Pet minuta pripreme, dvadeset minuta čekanja — i večera koja izgleda kao da si se jako potrudila.",
      de: "Fünf Minuten Vorbereitung, zwanzig Minuten warten — und ein Abendessen, das aussieht, als hättest du dich sehr angestrengt.",
      en: "Five minutes of prep, twenty minutes of waiting — and a dinner that looks like you tried very hard."
    },
    author_comment: {
      sr: "Rerna radi za tebe. Zatvoriš foliju, odeš da se tuširuješ, i kad se vratiš — večera je gotova.",
      de: "Der Ofen arbeitet für dich. Folie zufalten, duschen gehen, und wenn du zurückkommst — das Abendessen ist fertig.",
      en: "The oven does the work for you. Fold the foil, go take a shower, and when you come back — dinner is done."
    },
    prep_time: { sr: "5 minuta + 20 minuta pečenja", de: "5 Min. + 20 Min. im Ofen", en: "5 minutes + 20 minutes baking" },
    ingredients: {
      sr: ["1–2 fileta lososa", "½ limuna, isečenog na kolutiće", "Grančica svežeg timijana ili kopra", "1 kašika maslinovog ulja", "So, beli biber, beli luk u prahu", "Opciono: kašika kapara ili par maslina"],
      de: ["1–2 Lachsfilets", "½ Zitrone, in Scheiben", "Ein Zweig frischer Thymian oder Dill", "1 EL Olivenöl", "Salz, weißer Pfeffer, Knoblauchpulver", "Optional: 1 EL Kapern oder einige Oliven"],
      en: ["1–2 salmon fillets", "½ lemon, sliced", "A sprig of fresh thyme or dill", "1 tbsp olive oil", "Salt, white pepper, garlic powder", "Optional: 1 tbsp capers or a few olives"]
    },
    instructions: {
      sr: ["Zagrej rernu na 200°C.", "Na komad aluminijumske folije stavi file lososa.", "Prelij maslinovim uljem, začini i posloži kolutiće limuna i bilje odozgo.", "Zatvori foliju čvrsto — kao mali paket.", "Peci 18–20 minuta.", "Otvori foliju pažljivo — para je vruća.", "Serviraj uz kuvani pirinač, kuvani krompir ili zelenu salatu."],
      de: ["Ofen auf 200°C vorheizen.", "Das Lachsfilet auf ein Stück Alufolie legen.", "Mit Olivenöl beträufeln, würzen und Zitronenscheiben und Kräuter darauflegen.", "Die Folie fest verschließen — wie ein kleines Päckchen.", "18–20 Minuten backen.", "Folie vorsichtig öffnen — der Dampf ist heiß.", "Mit gekochtem Reis, Kartoffeln oder grünem Salat servieren."],
      en: ["Preheat the oven to 200°C.", "Place the salmon fillet on a piece of foil.", "Drizzle with olive oil, season and layer lemon slices and herbs on top.", "Seal the foil tightly — like a little parcel.", "Bake for 18–20 minutes.", "Open the foil carefully — the steam is hot.", "Serve with cooked rice, potatoes or a green salad."]
    },
    note: "",
    category: "Recepti kada ne znam šta da kuvam"
  },
  {
    number: "33",
    title: { sr: "Muffini sa jabukom i cimetom", de: "Apfel-Zimt-Muffins", en: "Apple & Cinnamon Muffins" },
    subtitle: {
      sr: "Kad ti cela kuća zamirise na jesen — za 30 minuta.",
      de: "Wenn dein ganzes Zuhause nach Herbst duftet — in 30 Minuten.",
      en: "When your whole home smells of autumn — in 30 minutes."
    },
    author_comment: {
      sr: "Integralni, bez puno šećera i puni jabuke. Jedem ih za doručak, uz kafu, ili kao večernji zalogaj kad mi treba nešto toplo i domaće.",
      de: "Vollkorn, wenig Zucker, voller Apfel. Ich esse sie zum Frühstück, zum Kaffee oder als Abendsnack, wenn ich etwas Warmes und Heimeliges brauche.",
      en: "Wholegrain, low sugar and full of apple. I eat them for breakfast, with coffee or as an evening snack when I need something warm and homemade."
    },
    prep_time: { sr: "10 minuta + 25 minuta pečenja", de: "10 Min. + 25 Min. backen", en: "10 minutes + 25 minutes baking" },
    ingredients: {
      sr: ["200 g integralnog brašna", "1 kašičica praška za pecivo", "½ kašičice sode bikarbone", "1 kašičica cimeta", "Prstohvat soli", "2 jaja", "3 kašike meda ili šećera od trske", "50 ml ulja", "½ šolje biljnog mleka", "2 jabuke, oljuštene i narendane", "Šaka suvih grožđica (opciono)"],
      de: ["200 g Vollkornmehl", "1 TL Backpulver", "½ TL Natron", "1 TL Zimt", "Eine Prise Salz", "2 Eier", "3 EL Honig oder Rohrzucker", "50 ml Öl", "½ Tasse Pflanzenmilch", "2 Äpfel, geschält und gerieben", "Eine Handvoll Rosinen (optional)"],
      en: ["200 g wholegrain flour", "1 tsp baking powder", "½ tsp bicarbonate of soda", "1 tsp cinnamon", "A pinch of salt", "2 eggs", "3 tbsp honey or cane sugar", "50 ml oil", "½ cup plant milk", "2 apples, peeled and grated", "A handful of raisins (optional)"]
    },
    instructions: {
      sr: ["Zagrej rernu na 180°C i pripremi kalup za muffine.", "U jednoj činiji pomešaj suve sastojke: brašno, prašak, sodu, cimet, so.", "U drugoj činiji umuti jaja sa medom i uljem, pa dodaj mleko.", "Pomešaj mokre i suve sastojke — ne preterano, u redu je ako je malo grudvasto.", "Dodaj narendanu jabuku i grožđice i lagano umešaj.", "Sipaj smesu u kalup za muffine (napuni 2/3 svake šupljine).", "Peci 22–25 minuta. Proveri čačkalicom."],
      de: ["Ofen auf 180°C vorheizen und Muffinform vorbereiten.", "In einer Schüssel die trockenen Zutaten mischen: Mehl, Backpulver, Natron, Zimt, Salz.", "In einer anderen Schüssel Eier mit Honig und Öl verquirlen, dann Milch hinzufügen.", "Feuchte und trockene Zutaten vermischen — nicht zu stark, es darf etwas klumpig sein.", "Geriebenen Apfel und Rosinen vorsichtig unterheben.", "Teig in die Muffinformen füllen (je 2/3 voll).", "22–25 Minuten backen. Mit einem Zahnstocher prüfen."],
      en: ["Preheat the oven to 180°C and prepare a muffin tin.", "In one bowl, mix the dry ingredients: flour, baking powder, bicarb, cinnamon, salt.", "In another bowl, beat the eggs with honey and oil, then add the milk.", "Combine wet and dry ingredients — don't overmix, lumpy is fine.", "Gently fold in the grated apple and raisins.", "Fill the muffin tin (2/3 full per hole).", "Bake for 22–25 minutes. Check with a toothpick."]
    },
    note: "",
    category: "Recepti koji mirišu iz rerne"
  },
  {
    number: "34",
    title: { sr: "Pečeno povrće iz rerne", de: "Ofengemüse", en: "Roasted Oven Vegetables" },
    subtitle: {
      sr: "Sve u pleh, ulje, začini, rerna — i jedna od najlepših večera koje postoje.",
      de: "Alles auf das Blech, Öl, Gewürze, Ofen — und eines der schönsten Abendessen überhaupt.",
      en: "Everything on the tray, oil, spices, oven — and one of the most satisfying dinners there is."
    },
    author_comment: {
      sr: "Ovo je moja najmirnija kuhinja. Isečeš povrće, pospeš uljem i začinima i ostaviš rernu da radi. Za to vreme čitaš, šetaš ili se samo odmoriš.",
      de: "Das ist meine ruhigste Küche. Gemüse schneiden, mit Öl und Gewürzen bestreuen und den Ofen arbeiten lassen. In der Zeit liest du, gehst spazieren oder ruhst dich einfach aus.",
      en: "This is my most peaceful cooking. Chop the vegetables, drizzle with oil and spices and let the oven do the work. In the meantime you read, take a walk or just rest."
    },
    prep_time: { sr: "10 minuta + 35–40 minuta pečenja", de: "10 Min. + 35–40 Min. backen", en: "10 minutes + 35–40 minutes roasting" },
    ingredients: {
      sr: ["1 tikvica", "1 crvena paprika", "1 žuta paprika", "1 šargarepa", "½ crnog luka", "Cherry paradajz (šaka)", "2–3 kašike maslinovog ulja", "So, biber, origano, kurkuma", "Po želji: čen belog luka, list lovora"],
      de: ["1 Zucchini", "1 rote Paprika", "1 gelbe Paprika", "1 Karotte", "½ Zwiebel", "Kirschtomaten (eine Handvoll)", "2–3 EL Olivenöl", "Salz, Pfeffer, Oregano, Kurkuma", "Optional: Knoblauchzehe, Lorbeerblatt"],
      en: ["1 courgette", "1 red pepper", "1 yellow pepper", "1 carrot", "½ onion", "Cherry tomatoes (a handful)", "2–3 tbsp olive oil", "Salt, pepper, oregano, turmeric", "Optional: garlic clove, bay leaf"]
    },
    instructions: {
      sr: ["Zagrej rernu na 210°C.", "Sve povrće iseci na krupnije komade sličnih dimenzija — da se ravnomerno peče.", "Poređaj u pleh, prelij maslinovim uljem i dobro začini.", "Promešaj da sve bude ravnomerno obloženo začinima.", "Peci 35–40 minuta, promešaj jednom na pola pečenja.", "Serviraj uz pirinač, kvinoju, hleb ili jednostavno ovako."],
      de: ["Ofen auf 210°C vorheizen.", "Alles Gemüse in größere, ähnlich große Stücke schneiden — damit es gleichmäßig gart.", "Auf dem Blech verteilen, mit Olivenöl beträufeln und gut würzen.", "Umrühren, damit alles gleichmäßig beschichtet ist.", "35–40 Minuten rösten, einmal in der Mitte wenden.", "Mit Reis, Quinoa, Brot oder einfach so servieren."],
      en: ["Preheat the oven to 210°C.", "Cut all vegetables into similar-sized larger pieces — so they roast evenly.", "Arrange on a tray, drizzle with olive oil and season well.", "Toss so everything is evenly coated.", "Roast for 35–40 minutes, tossing once halfway through.", "Serve with rice, quinoa, bread or just as it is."]
    },
    note: "",
    image: "assets/images/image44.png",
    category: "Recepti koji mirišu iz rerne"
  }
];
