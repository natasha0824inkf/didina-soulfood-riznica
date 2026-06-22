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
    image: "assets/images/nedeljni-wrap.png",
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
    image: "assets/images/jaka-vocna-salata.png",
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
    image: "assets/images/mali-coko-zalogaji.png",
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
    image: "assets/images/tople-leblebije.png",
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
    image: "assets/images/mini-pice-od-patlidzana.png",
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
        "2 šake suvog grožđa",
        "Šaka seckanih oraha",
        "2 pune supene kašike meda",
        "Oko 50 ml ulja",
        "Malo biljnog mleka (samo ako je smesa previše suva)"
      ],
      de: [
        "200–300 g Vollkornmehl",
        "1 TL Zimt",
        "Eine Prise Kardamom",
        "2 Handvoll Rosinen",
        "Eine Handvoll gehackte Walnüsse",
        "2 gehäufte EL Honig",
        "Ca. 50 ml Öl",
        "Etwas Pflanzenmilch (nur wenn der Teig zu trocken ist)"
      ],
      en: [
        "200–300 g wholegrain flour",
        "1 tsp cinnamon",
        "A pinch of cardamom",
        "2 handfuls of raisins",
        "A handful of chopped walnuts",
        "2 heaped tbsp honey",
        "Around 50 ml oil",
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
    image: "assets/images/spori-medenjaci.jpeg",
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
    image: "assets/images/lazne-coko-rolnice.png",
    category: "Recepti uz kafu"
  },
  {
    number: "10",
    title: {
      sr: "Tuna bowl",
      de: "Tuna-Bowl",
      en: "Tuna Bowl"
    },
    subtitle: {
      sr: "Tuna obrok za pun stomak i bistru glavu",
      de: "Tuna-Mahlzeit für einen vollen Magen und einen klaren Kopf",
      en: "Tuna meal for a full stomach and a clear head"
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
    image: "assets/images/tunin-bowl.png",
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
    image: "assets/images/kremasti-sutlijash.png",
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
    image: "assets/images/banana-hleb.png",
    category: "Recepti uz kafu"
  },
  {
    number: "14",
    title: {
      sr: "Slani doručak sa lanom, jogurtom i povrćem",
      de: "Salziges Frühstück mit Leinsamen, Joghurt und Gemüse",
      en: "Savoury Breakfast with Flaxseed, Yogurt & Vegetables"
    },
    subtitle: {
      sr: "Hrskava i osvežavajuća kombinacija za dobar početak dana.",
      de: "Eine knackige und erfrischende Kombination für einen guten Tagesstart.",
      en: "A crunchy, refreshing combination for a great start to the day."
    },
    author_comment: {
      sr: "Navikli smo na slatke varijante jogurta sa semenkama, ali evo dokaza da slano može biti još bolje!",
      de: "Wir sind süße Joghurt-Varianten mit Samen gewohnt — aber hier ist der Beweis, dass salzig noch besser sein kann!",
      en: "We're used to sweet yogurt-and-seed bowls, but here's proof that savoury can be even better!"
    },
    prep_time: { sr: "5–10 minuta", de: "5–10 Min.", en: "5–10 minutes" },
    ingredients: {
      sr: ["1 kašika sveže samlevenog lana", "200 ml grčkog jogurta", "2 rotkvice", "1 mladi luk", "1 kašika pečenih semenki bundeve", "Prstohvat soli"],
      de: ["1 EL frisch gemahlener Leinsamen", "200 ml griechischer Joghurt", "2 Radieschen", "1 Frühlingszwiebel", "1 EL geröstete Kürbiskerne", "Eine Prise Salz"],
      en: ["1 tbsp freshly ground flaxseed", "200 ml Greek yogurt", "2 radishes", "1 spring onion", "1 tbsp toasted pumpkin seeds", "A pinch of salt"]
    },
    instructions: {
      sr: ["U posudu sipaj jogurt i umešaj samleveni lan.", "Rotkvice naseckaj na tanke kolutove, a mladi luk na sitne kolutiće.", "Dodaj povrće u činiju, pospi pečenim semenkama bundeve i malo posoli.", "Promešaj lagano i posluži odmah, dok je povrće hrskavo."],
      de: ["Joghurt in eine Schüssel geben und den Leinsamen einrühren.", "Radieschen in dünne Scheiben und Frühlingszwiebel in feine Ringe schneiden.", "Gemüse in die Schüssel geben, mit gerösteten Kürbiskernen bestreuen und leicht salzen.", "Sanft umrühren und sofort servieren, solange das Gemüse noch knackig ist."],
      en: ["Pour the yogurt into a bowl and stir in the ground flaxseed.", "Slice the radishes into thin rounds and the spring onion into small rings.", "Add the vegetables to the bowl, sprinkle with toasted pumpkin seeds and a little salt.", "Stir gently and serve immediately while the vegetables are still crunchy."]
    },
    note: "Ako želiš još više ukusa, možeš dodati i par listića peršuna ili sveže nane.",
    image: "assets/images/slani-dorucak.png",
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
    image: "assets/images/cureci-stejk.png",
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
    image: "assets/images/kokos-curry.png",
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
    image: "assets/images/zive-lazanje.png",
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
    image: "assets/images/integralni-hleb.png",
    category: "Recepti koji mirišu iz rerne"
  },
  {
    number: "26",
    title: { sr: "Kinoa kaša sa borovnicama", de: "Quinoa-Porridge mit Blaubeeren", en: "Quinoa Porridge with Blueberries" },
    subtitle: {
      sr: "Zdravlje i vedrina koji mirišu na novi početak.",
      de: "Gesundheit und Heiterkeit, die nach einem neuen Anfang duften.",
      en: "Health and brightness that smell like a new beginning."
    },
    author_comment: {
      sr: "Ovo je doručak uz osećaj zahvalnosti. Pojedi ga u tišini pre nego što dan postane bučan.",
      de: "Das ist ein Frühstück mit einem Gefühl der Dankbarkeit. Iss es in der Stille, bevor der Tag laut wird.",
      en: "This is a breakfast with a feeling of gratitude. Eat it in the quiet before the day gets loud."
    },
    prep_time: { sr: "10 minuta", de: "10 Min.", en: "10 minutes" },
    ingredients: {
      sr: ["4 kašike kinoa pahuljica", "200 ml bademovog mleka", "1 banana (iseckana)", "Šaka smrznutih ili svežih borovnica", "Šaka pečenog neslanog kikirikija", "1 kašičica meda (po želji)", "1 kašičica cimeta"],
      de: ["4 EL Quinoa-Flocken", "200 ml Mandelmilch", "1 Banane (in Scheiben)", "Eine Handvoll gefrorene oder frische Blaubeeren", "Eine Handvoll geröstete, ungesalzene Erdnüsse", "1 TL Honig (nach Belieben)", "1 TL Zimt"],
      en: ["4 tbsp quinoa flakes", "200 ml almond milk", "1 banana (sliced)", "A handful of frozen or fresh blueberries", "A handful of roasted, unsalted peanuts", "1 tsp honey (optional)", "1 tsp cinnamon"]
    },
    instructions: {
      sr: ["U manjoj šerpici zagrej bademovo mleko i dodaj kinoa pahuljice.", "Pusti da lagano krčkaju 5–6 minuta uz povremeno mešanje.", "Dodaj izgnječenu bananu i cimet, pa kuvaj još minut-dva.", "Umešaj borovnice dok je kaša još topla.", "Pospi kikirikijem i po želji zasladi medom."],
      de: ["Mandelmilch in einem kleinen Topf erwärmen und Quinoa-Flocken hinzufügen.", "5–6 Minuten sanft köcheln lassen, gelegentlich umrühren.", "Zerdrückte Banane und Zimt hinzufügen und noch 1–2 Minuten kochen.", "Blaubeeren einrühren, solange der Brei noch warm ist.", "Mit Erdnüssen bestreuen und nach Belieben mit Honig süßen."],
      en: ["Warm the almond milk in a small pot and add the quinoa flakes.", "Let simmer gently for 5–6 minutes, stirring occasionally.", "Add the mashed banana and cinnamon and cook for another minute or two.", "Stir in the blueberries while the porridge is still warm.", "Top with peanuts and sweeten with honey if you like."]
    },
    note: "",
    image: "assets/images/kinoa-kasa-sa-borovnicama.png",
    category: "Jutarnji recepti"
  },
  {
    number: "27",
    title: { sr: "Rovito kuvano jaje sa avokadom i tostom", de: "Wachsweiches Ei mit Avocado und Toast", en: "Soft-Boiled Egg with Avocado & Toast" },
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
    image: "assets/images/rovito-jaje.png",
    category: "Jutarnji recepti"
  },
  {
    number: "28",
    title: { sr: "Krem supa od tikvica", de: "Cremige Zucchinisuppe", en: "Creamy Zucchini Soup" },
    subtitle: {
      sr: "Nežna, mirisna i lako svarljiva.",
      de: "Zart, aromatisch und leicht verdaulich.",
      en: "Delicate, fragrant and easy on the stomach."
    },
    author_comment: {
      sr: "Ovo je supa koja greje stomak i čisti misli — jednostavna, blaga i mekana kao prvi gutljaj topline posle hladnog dana.",
      de: "Das ist eine Suppe, die den Bauch wärmt und den Kopf klarmacht — einfach, mild und weich wie der erste Schluck Wärme nach einem kalten Tag.",
      en: "This is a soup that warms your stomach and clears your head — simple, gentle and soft like the first sip of warmth after a cold day."
    },
    prep_time: { sr: "30 minuta", de: "30 Min.", en: "30 minutes" },
    ingredients: {
      sr: ["2 srednje tikvice", "1 manji krompir", "1 mala glavica crnog luka", "1 čen belog luka", "1 kašika maslinovog ulja", "So i biber", "Malo svežeg peršuna ili mirođije", "Oko 600 ml vode ili povrtnog bujona", "Šaka semenki suncokreta za serviranje"],
      de: ["2 mittelgroße Zucchini", "1 kleine Kartoffel", "1 kleine Zwiebel", "1 Knoblauchzehe", "1 EL Olivenöl", "Salz und Pfeffer", "Etwas frische Petersilie oder Dill", "Ca. 600 ml Wasser oder Gemüsebrühe", "Eine Handvoll Sonnenblumenkerne zum Servieren"],
      en: ["2 medium zucchini", "1 small potato", "1 small onion", "1 garlic clove", "1 tbsp olive oil", "Salt and pepper", "A little fresh parsley or dill", "Around 600 ml water or vegetable stock", "A handful of sunflower seeds for serving"]
    },
    instructions: {
      sr: ["Na maslinovom ulju kratko proprži sitno seckan crni i beli luk.", "Dodaj tikvice isečene na kolutove i krompir isečen na kockice, pa sve lepo promešaj.", "Nalij toliko vode ili bujona da povrće bude pokriveno, posoli i pobiberi.", "Kuvaj oko 15 minuta dok sve ne omekša.", "Štapnim mikserom ili u blenderu izmiksaj sve do glatke kremaste supe.", "Dodaj malo seckanog peršuna po ukusu.", "Pre serviranja pospi semenkim suncokreta za prijatnu hrskavost."],
      de: ["Fein gehackte Zwiebel und Knoblauch in Olivenöl kurz anschwitzen.", "Zucchini in Scheiben und Kartoffel in Würfel schneiden, hinzufügen und gut umrühren.", "Mit Wasser oder Brühe aufgießen bis das Gemüse bedeckt ist, salzen und pfeffern.", "Ca. 15 Minuten kochen bis alles weich ist.", "Mit einem Stabmixer oder im Standmixer zu einer glatten Cremesuppe pürieren.", "Nach Geschmack etwas frische Petersilie einrühren.", "Vor dem Servieren mit Sonnenblumenkernen für angenehme Knusprigkeit bestreuen."],
      en: ["Sauté the finely chopped onion and garlic in olive oil briefly.", "Add the zucchini in slices and potato in cubes, stir everything together.", "Add enough water or stock to cover the vegetables, season with salt and pepper.", "Cook for about 15 minutes until everything is soft.", "Blend with a stick blender or in a blender until smooth and creamy.", "Stir in a little fresh parsley to taste.", "Before serving, sprinkle with sunflower seeds for a pleasant crunch."]
    },
    note: "Ako želiš još kremastiju strukturu, dodaj mali komadić putera ili kašiku biljne pavlake nakon miksanja. Odlično se slaže i sa pečenim bundevinim semenkama.",
    image: "assets/images/krem-supa-od-tikvica.png",
    category: "Recepti kada ne znam šta da kuvam"
  },
  {
    number: "29",
    title: { sr: "Nesvakidašnja salata sa cveklom", de: "Besonderer Rote-Bete-Salat", en: "Unusual Beetroot Salad" },
    subtitle: {
      sr: "Obojena svežina na tanjiru.",
      de: "Bunte Frische auf dem Teller.",
      en: "Colourful freshness on a plate."
    },
    author_comment: {
      sr: "Jelo koje otvara srce i budi osmeh — kao užina, prilog ili lagana večera, iz bilo kog razloga.",
      de: "Ein Gericht, das das Herz öffnet und ein Lächeln weckt — als Snack, Beilage oder leichtes Abendessen.",
      en: "A dish that opens the heart and brings a smile — as a snack, side or light dinner."
    },
    prep_time: { sr: "20 minuta", de: "20 Min.", en: "20 minutes" },
    ingredients: {
      sr: ["3 kuvane cvekle", "2 šargarepe", "1 zelena paprika", "2 mlada luka", "Konzerva meksičke mešavine (kukuruz, crveni pasulj, crvena paprika)", "Maslinovo ulje", "Balzamiko sirće", "So i biber po ukusu"],
      de: ["3 gekochte Rote Beten", "2 Karotten", "1 grüne Paprika", "2 Frühlingszwiebeln", "1 Dose mexikanische Mischung (Mais, rote Bohnen, rote Paprika)", "Olivenöl", "Balsamico-Essig", "Salz und Pfeffer nach Geschmack"],
      en: ["3 cooked beetroots", "2 carrots", "1 green pepper", "2 spring onions", "1 tin Mexican mix (sweetcorn, red kidney beans, red pepper)", "Olive oil", "Balsamic vinegar", "Salt and pepper to taste"]
    },
    instructions: {
      sr: ["Kuvanu cveklu iseci na kockice.", "Dodaj seckanu papriku, šargarepu i mladi luk.", "Umešaj kukuruz i pasulj.", "Začini maslinovim uljem, balzamiko sirćetom, solju i biberom.", "Dobro promešaj i posluži rashlađeno."],
      de: ["Die gekochten Roten Beten in Würfel schneiden.", "Paprika, Karotte und Frühlingszwiebeln gehackt dazugeben.", "Mais und Bohnen unterrühren.", "Mit Olivenöl, Balsamico, Salz und Pfeffer würzen.", "Gut umrühren und gekühlt servieren."],
      en: ["Cut the cooked beetroot into cubes.", "Add the chopped pepper, carrot and spring onion.", "Stir in the corn and beans.", "Season with olive oil, balsamic vinegar, salt and pepper.", "Mix well and serve chilled."]
    },
    note: "Ostavi u frižideru da se dobro prohladi. Još je bolje ako uspeš da sačekaš do sutra.",
    image: "assets/images/nesvakidasnja-salata-sa-cveklom.png",
    category: "Osvežavajući recepti"
  },
  {
    number: "30",
    title: { sr: "Brokoli sa pinjolima", de: "Brokkoli mit Pinienkernen", en: "Broccoli with Pine Nuts" },
    subtitle: {
      sr: "Zeleno jelo koje vraća ravnotežu.",
      de: "Ein grünes Gericht, das das Gleichgewicht wiederherstellt.",
      en: "A green dish that restores balance."
    },
    author_comment: {
      sr: "Idealan recept za dane kada ti je potrebno nešto lagano, ali super hranljivo.",
      de: "Das ideale Rezept für Tage, an denen du etwas Leichtes, aber super Nahrhaftes brauchst.",
      en: "The ideal recipe for days when you need something light but super nourishing."
    },
    prep_time: { sr: "20 minuta", de: "20 Min.", en: "20 minutes" },
    ingredients: {
      sr: ["200 g brokolija", "2 kašike grčkog jogurta", "1 kašika maslinovog ulja", "1 kašika pinjola", "Sok od pola limuna", "Prstohvat soli"],
      de: ["200 g Brokkoli", "2 EL griechischer Joghurt", "1 EL Olivenöl", "1 EL Pinienkerne", "Saft einer halben Zitrone", "Eine Prise Salz"],
      en: ["200 g broccoli", "2 tbsp Greek yogurt", "1 tbsp olive oil", "1 tbsp pine nuts", "Juice of half a lemon", "A pinch of salt"]
    },
    instructions: {
      sr: ["Brokoli podeli na manje cvetiće i kuvaj samo 3–4 minuta u ključaloj vodi dok blago ne omekša.", "Odmah prebaci u hladnu vodu kako bi sačuvao boju i svežinu.", "U manjoj činiji sjedini grčki jogurt, limunov sok, maslinovo ulje i so. Promešaj dok se ne dobije glatka krema.", "Posloži brokoli na tanjir, prelij kremom i pospi pinjolima."],
      de: ["Brokkoli in kleinere Röschen teilen und nur 3–4 Minuten in kochendem Wasser blanchieren.", "Sofort in kaltes Wasser geben, um Farbe und Frische zu erhalten.", "In einer kleinen Schüssel griechischen Joghurt, Zitronensaft, Olivenöl und Salz zu einer glatten Creme verrühren.", "Brokkoli auf einem Teller anrichten, mit der Creme übergießen und mit Pinienkernen bestreuen."],
      en: ["Divide the broccoli into small florets and blanch for just 3–4 minutes in boiling water until slightly tender.", "Immediately transfer to cold water to preserve the colour and freshness.", "In a small bowl, combine Greek yogurt, lemon juice, olive oil and salt into a smooth cream.", "Arrange the broccoli on a plate, drizzle with the cream and scatter pine nuts on top."]
    },
    note: "",
    image: "assets/images/brokoli-sa-pinjolima.png",
    category: "Osvežavajući recepti"
  },
  {
    number: "31",
    title: { sr: "Puding od vanile sa bademom i malinama", de: "Vanillepudding mit Mandeln und Himbeeren", en: "Vanilla Pudding with Almonds & Raspberries" },
    subtitle: {
      sr: "Lagani kremasti užitak sa voćnom svežinom.",
      de: "Leichte cremige Verwöhnung mit fruchtiger Frische.",
      en: "A light, creamy treat with fruity freshness."
    },
    author_comment: {
      sr: "Jednostavan, brz i divno mirisan desert! Ovo je tvoj slatki predah posle dugog dana. 💛",
      de: "Einfach, schnell und herrlich duftend! Das ist deine süße Pause nach einem langen Tag. 💛",
      en: "Simple, quick and wonderfully fragrant! This is your sweet break after a long day. 💛"
    },
    prep_time: { sr: "15 minuta", de: "15 Min.", en: "15 minutes" },
    ingredients: {
      sr: ["1 kesica pudinga od vanile", "500 ml bademovog mleka", "3–4 kašike kokosovih pahuljica", "2 kašike šećera ili zaslađivača po želji", "Šaka svežih malina", "Šaka badema"],
      de: ["1 Päckchen Vanillepuddingpulver", "500 ml Mandelmilch", "3–4 EL Kokosflocken", "2 EL Zucker oder Süßungsmittel nach Wunsch", "Eine Handvoll frische Himbeeren", "Eine Handvoll Mandeln"],
      en: ["1 sachet vanilla pudding powder", "500 ml almond milk", "3–4 tbsp desiccated coconut", "2 tbsp sugar or sweetener to taste", "A handful of fresh raspberries", "A handful of almonds"]
    },
    instructions: {
      sr: ["Sipaj 400 ml bademovog mleka u šerpu i stavi da provri.", "U preostalih 100 ml mleka umuti puding i šećer.", "Kada mleko počne da vri, dodaj razmućeni puding i kuvaj uz stalno mešanje dok se ne zgusne.", "Pred kraj dodaj kokosove pahuljice i dobro sjedini.", "Skloni sa vatre i sipaj puding u činije ili čaše.", "Ohladi ga i pre služenja ukrasi svežim malinama i bademima."],
      de: ["400 ml Mandelmilch in einen Topf geben und aufkochen lassen.", "In den restlichen 100 ml Milch Puddingpulver und Zucker verquirlen.", "Wenn die Milch kocht, die Puddingmischung dazugeben und unter ständigem Rühren köcheln lassen, bis er eindickt.", "Gegen Ende die Kokosflocken einrühren und gut vermengen.", "Vom Herd nehmen und den Pudding in Schüsseln oder Gläser füllen.", "Abkühlen lassen und vor dem Servieren mit frischen Himbeeren und Mandeln garnieren."],
      en: ["Pour 400 ml of the almond milk into a pan and bring to the boil.", "Whisk the pudding powder and sugar into the remaining 100 ml milk.", "When the milk starts to boil, add the pudding mixture and cook, stirring constantly, until thickened.", "Near the end, stir in the coconut and combine well.", "Remove from the heat and pour into bowls or glasses.", "Chill and top with fresh raspberries and almonds before serving."]
    },
    note: "Ako želiš još kremastiju teksturu, dodaj malo kokosovog mleka uz bademovo.",
    image: "assets/images/puding-od-vanile.png",
    category: "Recepti uz kafu"
  },
  {
    number: "32",
    title: { sr: "Pasta sa zelenim pestom i lososom", de: "Pasta mit grünem Pesto und Lachs", en: "Pasta with Green Pesto & Salmon" },
    subtitle: {
      sr: "Zanimljiva pasta koja spaja zeleni pesto i nežni losos u brzom i hranljivom obroku.",
      de: "Eine spannende Pasta, die grünes Pesto und zarten Lachs in einer schnellen, nahrhaften Mahlzeit vereint.",
      en: "An interesting pasta that brings green pesto and delicate salmon together in a quick, nourishing meal."
    },
    author_comment: {
      sr: "Kad pogledam u frižider i vidim lososa i teglu pesta — znam da večera može biti gotova za 20 minuta i da će biti stvarno dobra.",
      de: "Wenn ich in den Kühlschrank schaue und Lachs und ein Glas Pesto sehe, weiß ich: Das Abendessen ist in 20 Minuten fertig — und wird wirklich gut.",
      en: "When I look in the fridge and see salmon and a jar of pesto, I know dinner can be ready in 20 minutes and will be really good."
    },
    prep_time: { sr: "20 minuta", de: "20 Min.", en: "20 minutes" },
    ingredients: {
      sr: ["200 g paste (penne, fusilli ili šta imaš)", "200 g fileta lososa", "2–3 kašike zelenog pesta", "1 kašika maslinovog ulja", "1 mali čen belog luka, sitno naseckan", "Nekoliko kapi limunovog soka", "So i biber po ukusu", "Šaka rukole ili svežeg bosiljka"],
      de: ["200 g Pasta (Penne, Fusilli oder was du hast)", "200 g Lachsfilet", "2–3 EL grünes Pesto", "1 EL Olivenöl", "1 kleine Knoblauchzehe, fein gehackt", "Einige Tropfen Zitronensaft", "Salz und Pfeffer nach Geschmack", "Eine Handvoll Rucola oder frischer Basilikum"],
      en: ["200 g pasta (penne, fusilli or whatever you have)", "200 g salmon fillet", "2–3 tbsp green pesto", "1 tbsp olive oil", "1 small garlic clove, finely chopped", "A few drops of lemon juice", "Salt and pepper to taste", "A handful of rocket or fresh basil"]
    },
    instructions: {
      sr: ["Skuvaj pastu al dente prema uputstvima na pakovanju.", "Na maslinovom ulju proprži sitno naseckan beli luk minut-dva.", "Dodaj filete lososa i peci dok ne postane neproziran, oko 5–7 minuta. Rasparčaj ga viljuškom.", "Dodaj kuvanu pastu i pesto, promešaj sve zajedno.", "Dodaj nekoliko kapi limunovog soka, so i biber po ukusu.", "Serviraj sa šakom rukole ili svežeg bosiljka odozgo."],
      de: ["Pasta al dente nach Packungsanweisung kochen.", "Fein gehackten Knoblauch in Olivenöl ein bis zwei Minuten anschwitzen.", "Lachsfilet hinzufügen und ca. 5–7 Minuten braten, bis er undurchsichtig ist. Mit einer Gabel zerteilen.", "Gekochte Pasta und Pesto hinzufügen, alles gut vermischen.", "Einige Tropfen Zitronensaft, Salz und Pfeffer abschmecken.", "Mit Rucola oder frischem Basilikum garniert servieren."],
      en: ["Cook the pasta al dente according to packet instructions.", "Sauté the finely chopped garlic in olive oil for a minute or two.", "Add the salmon fillet and cook until opaque, about 5–7 minutes. Break it up with a fork.", "Add the cooked pasta and pesto, toss everything together.", "Add a few drops of lemon juice, salt and pepper to taste.", "Serve topped with a handful of rocket or fresh basil."]
    },
    note: "",
    image: "assets/images/pasta-sa-zelenim-pestom.png",
    category: "Recepti kada ne znam šta da kuvam"
  },
  {
    number: "33",
    title: { sr: "Jafa bez brašna", de: "Jaffa-Kuchen ohne Mehl", en: "Flourless Jaffa Cake" },
    subtitle: {
      sr: "Sočan, zdrav i prefinjen — obogaćen crnom čokoladom.",
      de: "Saftig, gesund und raffiniert — bereichert mit dunkler Schokolade.",
      en: "Moist, healthy and refined — enriched with dark chocolate."
    },
    author_comment: {
      sr: "Prava mala riznica ukusa i hranljivih sastojaka u samo jednom parčetu. Bez brašna, ali pun voća i lešnika — deluje lagano, a opet dovoljno bogato, vraća energiju i širi dobro raspoloženje.",
      de: "Eine wahre kleine Schatzkiste an Geschmack und Nährstoffen in nur einem Stück. Ohne Mehl, aber voller Früchte und Haselnüsse — wirkt leicht und ist dennoch reichhaltig genug, um Energie zurückzugeben.",
      en: "A real little treasure trove of flavour and nutrients in just one slice. Flourless, but full of fruit and hazelnuts — feels light yet rich enough to restore your energy and lift your mood."
    },
    prep_time: { sr: "10 minuta + 40 minuta pečenja", de: "10 Min. + 40 Min. backen", en: "10 minutes + 40 minutes baking" },
    ingredients: {
      sr: ["4 šargarepe srednje veličine", "1 kiselkasta jabuka", "50 g otopljenog putera", "200 g mlevenih lešnika", "1 kašika šećera ili meda", "Rendana kora jedne narandže i sok od pola narandže", "1 kašičica cimeta i prstohvat soli", "100 g mlečne ili crne čokolade", "Malo biljnog mleka (za glazuru)"],
      de: ["4 mittelgroße Karotten", "1 säuerlicher Apfel", "50 g geschmolzene Butter", "200 g gemahlene Haselnüsse", "1 EL Zucker oder Honig", "Abrieb einer Orange und Saft einer halben Orange", "1 TL Zimt und eine Prise Salz", "100 g Milch- oder Zartbitterschokolade", "Etwas Pflanzenmilch (für die Glasur)"],
      en: ["4 medium carrots", "1 tart apple", "50 g melted butter", "200 g ground hazelnuts", "1 tbsp sugar or honey", "Zest of one orange and juice of half an orange", "1 tsp cinnamon and a pinch of salt", "100 g milk or dark chocolate", "A little plant milk (for the glaze)"]
    },
    instructions: {
      sr: ["Operi i izrendaj šargarepe i jabuku, lepo promešaj.", "Postepeno dodaj mlevene lešnike, puter i med, lagano mešajući kašikom da se smesa ujednači.", "Dodaj narandžinu koru, sok, cimet i so.", "Sipaj u podmazan kalup i peci na 180°C oko 40 minuta.", "Pri kraju pečenja otopi čokoladu sa malo biljnog mleka i prelij preko toplog kolača."],
      de: ["Karotten und Apfel waschen, reiben und gut vermischen.", "Nach und nach gemahlene Haselnüsse, Butter und Honig hinzufügen, mit einem Löffel sanft rühren bis die Masse gleichmäßig ist.", "Orangenabrieb, Saft, Zimt und Salz hinzufügen.", "In eine gefettete Form füllen und bei 180°C ca. 40 Minuten backen.", "Gegen Ende der Backzeit Schokolade mit etwas Pflanzenmilch schmelzen und über den warmen Kuchen gießen."],
      en: ["Wash and grate the carrots and apple, mix well.", "Gradually add the ground hazelnuts, butter and honey, stirring gently with a spoon until the mixture is even.", "Add the orange zest, juice, cinnamon and salt.", "Pour into a greased tin and bake at 180°C for about 40 minutes.", "Near the end of baking, melt the chocolate with a little plant milk and pour over the warm cake."]
    },
    note: "Kolač se mrvi u toku sečenja baš zato što nema brašna. Ako želiš kompaktniji kolač, dodaj malo mlevenih ovsenih pahuljica da povežu smesu.",
    image: "assets/images/jafa-bez-brasna.png",
    category: "Recepti koji mirišu iz rerne"
  },
  {
    number: "34",
    title: { sr: "Ukusni prokelj iz rerne", de: "Leckerer Rosenkohl aus dem Ofen", en: "Delicious Oven-Roasted Brussels Sprouts" },
    subtitle: {
      sr: "Dovoljan je samo jedan sastojak i malo kreativnosti pa da i najskromnije povrće postane zvezdica.",
      de: "Es braucht nur eine Zutat und ein bisschen Kreativität, damit selbst das bescheidenste Gemüse zum Star wird.",
      en: "All it takes is one ingredient and a little creativity to turn the most humble vegetable into a star."
    },
    author_comment: {
      sr: "Prokelj je povrće koje mnogi zaobilaze, a ja sam ga otkrila kasno — i sad ga pravim svake nedelje. Iz rerne postaje karamelizovan, hrskav i potpuno drugačiji od kuvanog.",
      de: "Rosenkohl ist ein Gemüse, das viele meiden — ich habe ihn spät entdeckt und mache ihn jetzt jede Woche. Aus dem Ofen wird er karamellisiert, knusprig und ganz anders als gekocht.",
      en: "Brussels sprouts are a vegetable many people avoid, but I discovered them late and now make them every week. From the oven they come out caramelised, crispy and completely different from boiled."
    },
    prep_time: { sr: "5 minuta + 25–30 minuta pečenja", de: "5 Min. + 25–30 Min. im Ofen", en: "5 minutes + 25–30 minutes roasting" },
    ingredients: {
      sr: ["10-ak glavica prokelja", "Malo maslinovog ulja", "So po ukusu", "Aleva paprika po ukusu"],
      de: ["Ca. 10 Rosenkohlröschen", "Etwas Olivenöl", "Salz nach Geschmack", "Paprikapulver nach Geschmack"],
      en: ["Around 10 Brussels sprouts", "A little olive oil", "Salt to taste", "Paprika to taste"]
    },
    instructions: {
      sr: ["Zagrej rernu na 200°C.", "Operi proklje, ukloni spoljne listove i preseči ih na pola.", "Posloži ih na pleh presečenom stranom prema dole.", "Prelij maslinovim uljem i dobro začini solju i alevom paprikom.", "Peci 25–30 minuta dok ivice ne porumene i postanu hrskave.", "Serviraj toplo — kao prilog ili samostalan obrok."],
      de: ["Ofen auf 200°C vorheizen.", "Rosenkohl waschen, äußere Blätter entfernen und halbieren.", "Mit der Schnittfläche nach unten auf das Blech legen.", "Mit Olivenöl beträufeln und großzügig mit Salz und Paprika würzen.", "25–30 Minuten backen, bis die Ränder goldbraun und knusprig sind.", "Warm servieren — als Beilage oder eigenständiges Gericht."],
      en: ["Preheat the oven to 200°C.", "Wash the sprouts, remove outer leaves and cut in half.", "Place cut-side down on a baking tray.", "Drizzle with olive oil and season generously with salt and paprika.", "Roast for 25–30 minutes until the edges are golden and crispy.", "Serve warm — as a side dish or a meal on its own."]
    },
    note: "",
    image: "assets/images/prokelj-iz-rerne.png",
    category: "Recepti koji mirišu iz rerne"
  },
  {
    number: "35",
    title: { sr: "Kraljevske bombice", de: "Königliche Dattel-Bällchen", en: "Royal Date Balls" },
    subtitle: {
      sr: "Prirodna slatkoća za svaki časak mira i zadovoljstva.",
      de: "Natürliche Süße für jeden Moment der Ruhe und des Genusses.",
      en: "Natural sweetness for every moment of peace and pleasure."
    },
    author_comment: {
      sr: "Nastale su iz čiste želje za nečim slatkim, a bez griže savesti. Volim ih jer ih mogu napraviti za pet minuta, a svaki zalogaj nosi osećaj raskoši.",
      de: "Entstanden aus dem puren Wunsch nach Süßem ohne schlechtes Gewissen. Ich liebe sie, weil ich sie in fünf Minuten machen kann — jeder Bissen fühlt sich luxuriös an.",
      en: "Born from a pure desire for something sweet without guilt. I love them because I can make them in five minutes, and every bite feels indulgent."
    },
    prep_time: { sr: "5–10 minuta", de: "5–10 Min.", en: "5–10 minutes" },
    ingredients: {
      sr: ["6 Medjool urmi", "2 šake seckanih oraha", "1 kašika tahinija", "Nezaslađeni kakao za posipanje"],
      de: ["6 Medjool-Datteln", "2 Handvoll gehackte Walnüsse", "1 EL Tahini", "Ungesüßtes Kakaopulver zum Wälzen"],
      en: ["6 Medjool dates", "2 handfuls of chopped walnuts", "1 tbsp tahini", "Unsweetened cocoa powder for rolling"]
    },
    instructions: {
      sr: ["Urme oprati i potopiti u toploj vodi da omekšaju.", "Sitno iseckati orahe.", "Iseći urme, izvaditi koštice i zajedno sa orasima staviti u secka.", "Dodati tahini i kratko blendirati — samo koliko da se masa fino sjedini.", "Vaditi smesu kašičicom i rukama oblikovati male bombice.", "Po želji uvaljati u kakao, kokos ili mlevene pistaće."],
      de: ["Datteln waschen und in warmem Wasser einweichen bis sie weich sind.", "Die Walnüsse fein hacken.", "Datteln aufschneiden, Kerne entfernen und mit den Walnüssen in den Zerkleinerer geben.", "Tahini hinzufügen und kurz mixen — nur bis die Masse sich verbindet.", "Mit einem Löffel etwas Masse entnehmen und mit den Händen zu kleinen Kugeln formen.", "Nach Belieben in Kakao, Kokos oder gemahlenen Pistazien wälzen."],
      en: ["Wash the dates and soak in warm water until soft.", "Finely chop the walnuts.", "Cut open the dates, remove the stones and place in a food processor with the walnuts.", "Add tahini and blend briefly — just until the mixture comes together.", "Scoop out with a spoon and roll into small balls with your hands.", "Roll in cocoa powder, coconut or ground pistachios as desired."]
    },
    note: "Nezaslađeni kakao savršeno se slaže uz prirodnu slatkoću urmi. Mogu se jesti bilo kada — savršene su i bez posipanja.",
    image: "assets/images/kraljevske-bombice.png",
    category: "Recepti uz kafu"
  },
  {
    number: "36",
    title: { sr: "Mediteranski pirinač sa sočivom", de: "Mediterraner Reis mit Linsen", en: "Mediterranean Rice with Lentils" },
    subtitle: {
      sr: "Toplo jelo puno ukusa, a jednako ukusno i kada se jede hladno.",
      de: "Warmes Gericht voller Aromen — schmeckt auch kalt hervorragend.",
      en: "A warm dish full of flavour, equally delicious served cold."
    },
    author_comment: {
      sr: "Idealno je kao hranljiva večera, ali i kao lagani ručak koji se može poneti na posao.",
      de: "Ideal als nahrhaftes Abendessen, aber auch als leichtes Mittagessen zum Mitnehmen.",
      en: "Ideal as a nourishing dinner, but also as a light lunch to take to work."
    },
    prep_time: { sr: "30–40 minuta", de: "30–40 Min.", en: "30–40 minutes" },
    ingredients: {
      sr: ["1 šolja pirinča (integralnog ili basmati)", "1 šolja sočiva (zeleno ili crno)", "1 šargarepa", "1 paradajz", "Maslinovo ulje", "Začini: origano, korijander, nana, so"],
      de: ["1 Tasse Reis (Vollkorn oder Basmati)", "1 Tasse Linsen (grün oder schwarz)", "1 Karotte", "1 Tomate", "Olivenöl", "Gewürze: Oregano, Koriander, Minze, Salz"],
      en: ["1 cup rice (wholegrain or basmati)", "1 cup lentils (green or black)", "1 carrot", "1 tomato", "Olive oil", "Spices: oregano, coriander, mint, salt"]
    },
    instructions: {
      sr: ["Dobro isperi pirinač i sočivo pod mlazom hladne vode.", "U šerpi zagrej kašiku maslinovog ulja, pa kratko proprži sitno iseckanu šargarepu.", "Dodaj na kockice iseckan paradajz i sačekaj da pusti sok.", "Ubaci pirinač i sočivo, promešaj i nalij vodom (oko 500 ml).", "Dodaj suve začine, smanji temperaturu i kuvaj poklopljeno 25–30 minuta dok pirinač i sočivo ne omekšaju.", "Po potrebi dodaj još malo vode da jelo ostane sočno."],
      de: ["Reis und Linsen gründlich unter kaltem Wasser abspülen.", "Einen Löffel Olivenöl in einem Topf erhitzen und die gehackte Karotte kurz andünsten.", "Die gewürfelte Tomate hinzufügen und warten bis sie den Saft abgibt.", "Reis und Linsen einrühren und mit ca. 500 ml Wasser aufgießen.", "Getrocknete Gewürze hinzufügen, Hitze reduzieren und 25–30 Minuten zugedeckt köcheln lassen.", "Bei Bedarf etwas mehr Wasser hinzufügen damit das Gericht saftig bleibt."],
      en: ["Rinse the rice and lentils well under cold water.", "Heat a tablespoon of olive oil in a pot and briefly sauté the finely chopped carrot.", "Add the diced tomato and wait for it to release its juices.", "Add the rice and lentils, stir and pour in about 500 ml of water.", "Add the dried spices, reduce the heat and cook covered for 25–30 minutes until tender.", "Add a little more water if needed to keep the dish moist."]
    },
    note: "Ovaj obrok je još lepši sutradan, u hladnoj verziji. Ako dodaš šaku pečenog slanog kikirikija, dobiješ potpuno novo jelo!",
    image: "assets/images/mediteranski-pirinac.png",
    category: "Recepti kada ne znam šta da kuvam"
  },
  {
    number: "37",
    title: { sr: "Brzinski banana kolačići", de: "Blitz-Bananenplätzchen", en: "Quick Banana Cookies" },
    subtitle: {
      sr: "Slatkiš iz trenutka — hrskav spolja, a mekan iznutra.",
      de: "Süßigkeit aus dem Moment — außen knusprig, innen weich.",
      en: "A spur-of-the-moment treat — crispy outside, soft inside."
    },
    author_comment: {
      sr: "Banane na stolu su menjale boju, rerna je već bila upaljena, a vreme je pozvalo na mali eksperiment. Tako su nastali ovi mekani i mirisni keksi — neplanirani, a savršeno jednostavni.",
      de: "Die Bananen auf dem Tisch wurden reifer, der Ofen war schon an — und so entstand dieses kleine Experiment. Weich, duftend und wunderbar unkompliziert.",
      en: "The bananas on the counter were browning, the oven was already on — time for a little experiment. These soft, fragrant cookies were born unplanned and perfectly simple."
    },
    prep_time: { sr: "5 minuta + 25 minuta pečenja", de: "5 Min. + 25 Min. backen", en: "5 minutes + 25 minutes baking" },
    ingredients: {
      sr: ["2 zrele banane", "Šaka ovsenih pahuljica", "2 kašike suvog grožđa", "Kockica otopljenog putera", "1 kašičica cimeta", "Prstohvat kardamoma", "1 kašičica praška za pecivo", "1 kašika integralnog brašna"],
      de: ["2 reife Bananen", "Eine Handvoll Haferflocken", "2 EL Rosinen", "Ein Stückchen geschmolzene Butter", "1 TL Zimt", "Eine Prise Kardamom", "1 TL Backpulver", "1 EL Vollkornmehl"],
      en: ["2 ripe bananas", "A handful of oats", "2 tbsp raisins", "A small knob of melted butter", "1 tsp cinnamon", "A pinch of cardamom", "1 tsp baking powder", "1 tbsp wholemeal flour"]
    },
    instructions: {
      sr: ["Banane izgnječi viljuškom.", "Dodaj ovsene pahuljice, suvo grožđe i otopljen puter.", "Umešaj cimet, kardamom, prašak za pecivo i brašno.", "Kašikom oblikuj male keksiće i poređaj na pleh obložen papirom za pečenje.", "Peci na 180°C oko 25 minuta dok ne porumene i zamirišu."],
      de: ["Bananen mit einer Gabel zerdrücken.", "Haferflocken, Rosinen und geschmolzene Butter hinzufügen.", "Zimt, Kardamom, Backpulver und Mehl unterrühren.", "Mit einem Löffel kleine Kekse formen und auf ein mit Backpapier belegtes Blech legen.", "Bei 180°C ca. 25 Minuten backen bis sie goldbraun sind und duften."],
      en: ["Mash the bananas with a fork.", "Add the oats, raisins and melted butter.", "Mix in the cinnamon, cardamom, baking powder and flour.", "Shape into small cookies with a spoon and place on a baking tray lined with parchment.", "Bake at 180°C for about 25 minutes until golden and fragrant."]
    },
    note: "Umesto suvog grožđa možeš staviti suve brusnice ili dodati kokos za egzotičniju verziju.",
    image: "assets/images/brzinski-banana-kolacici.png",
    category: "Recepti uz kafu"
  },
  {
    number: "38",
    title: { sr: "Krem supa od šargarepe, celera i đumbira", de: "Karotten-Sellerie-Ingwer-Cremesuppe", en: "Creamy Carrot, Celery & Ginger Soup" },
    subtitle: {
      sr: "Topla narandžasta čarolija za telo i dušu.",
      de: "Warme orangefarbene Magie für Körper und Seele.",
      en: "Warm orange magic for body and soul."
    },
    author_comment: {
      sr: "Topla, mirisna i brza — ova supica je pravi zagrljaj u tanjiru! Nastala je bez mnogo planiranja, a ispala toliko dobra da odmah ide u riznicu.",
      de: "Warm, duftend und schnell — diese Suppe ist wie eine Umarmung in einer Schüssel! Ohne großes Planen entstanden, aber so gut, dass sie sofort in die Schatzkammer kam.",
      en: "Warm, fragrant and quick — this soup is a real hug in a bowl! It came together without much planning, yet turned out so good it went straight into the treasury."
    },
    prep_time: { sr: "oko 35 minuta", de: "ca. 35 Min.", en: "about 35 minutes" },
    ingredients: {
      sr: ["4 veće šargarepe (ili 6 manjih)", "2 krompira (srednje veličine)", "2 štapa celera", "1 čen belog luka", "Komadić svežeg đumbira (oko 2–3 cm)", "1 kašika maslinovog ulja", "750 ml povrtnog bujona ili vode", "So i biber po ukusu", "Prstohvat kurkume"],
      de: ["4 große Karotten (oder 6 kleine)", "2 mittelgroße Kartoffeln", "2 Stangen Sellerie", "1 Knoblauchzehe", "Ein Stückchen frischer Ingwer (ca. 2–3 cm)", "1 EL Olivenöl", "750 ml Gemüsebrühe oder Wasser", "Salz und Pfeffer nach Geschmack", "Eine Prise Kurkuma"],
      en: ["4 large carrots (or 6 small)", "2 medium potatoes", "2 celery stalks", "1 garlic clove", "A piece of fresh ginger (about 2–3 cm)", "1 tbsp olive oil", "750 ml vegetable stock or water", "Salt and pepper to taste", "A pinch of turmeric"]
    },
    instructions: {
      sr: ["U šerpi zagrej maslinovo ulje i kratko prodinstaj sitno seckan luk.", "Dodaj iseckane šargarepe, krompir i celer, pa dinstaj par minuta da povrće pusti miris.", "Ubaci narendani đumbir i kurkumu, promešaj.", "Nalij povrtnim bujonom, posoli i pobiberi, pa kuvaj dok povrće ne omekša (20–25 minuta).", "Izblendiraj sve u glatku krem supu.", "Po želji ukrasi kapljicom maslinovog ulja, svežim peršunom ili semenkama bundeve."],
      de: ["Olivenöl in einem Topf erhitzen und den fein gehackten Knoblauch kurz andünsten.", "Karotten, Kartoffeln und Sellerie hinzufügen und einige Minuten dünsten bis das Gemüse duftet.", "Geriebenen Ingwer und Kurkuma einrühren.", "Mit Brühe aufgießen, salzen und pfeffern, dann kochen bis das Gemüse weich ist (20–25 Min.).", "Alles zu einer glatten Cremesuppe pürieren.", "Nach Belieben mit einem Tropfen Olivenöl, frischer Petersilie oder Kürbiskernen garnieren."],
      en: ["Heat the olive oil in a pot and briefly sauté the finely chopped garlic.", "Add the carrots, potatoes and celery and sauté for a few minutes until fragrant.", "Stir in the grated ginger and turmeric.", "Pour in the stock, season with salt and pepper, and cook until the vegetables are soft (20–25 minutes).", "Blend everything into a smooth cream soup.", "Garnish with a drizzle of olive oil, fresh parsley or pumpkin seeds if desired."]
    },
    note: "Ako želiš kremastiju varijantu, dodaj malo kokosovog mleka ili grčkog jogurta pre blendanja. Kokosovo mleko je moj apsolutni favorit!",
    image: "assets/images/krem-supa-od-sargarepe.png",
    category: "Recepti kada ne znam šta da kuvam"
  },
  {
    number: "39",
    title: { sr: "Domaći humus sa peršunom", de: "Hausgemachter Hummus mit Petersilie", en: "Homemade Hummus with Parsley" },
    subtitle: {
      sr: "Mirisni doručak ili užina koja puni energijom i osvežava oči.",
      de: "Duftiges Frühstück oder Snack, der mit Energie füllt und das Auge erfrischt.",
      en: "Fragrant breakfast or snack that fills you with energy and delights the eye."
    },
    author_comment: {
      sr: "Ovo je moj omiljeni humus sa šarenim povrćem — pravi mali ritual uživanja. Boje, mirisi i teksture čine da svaki zalogaj bude čista radost.",
      de: "Das ist mein Lieblingshummus mit buntem Gemüse — ein kleines Ritual des Genießens. Farben, Düfte und Texturen machen jeden Bissen zur reinen Freude.",
      en: "This is my favourite hummus with colourful vegetables — a little ritual of enjoyment. Colours, aromas and textures make every bite pure joy."
    },
    prep_time: { sr: "15–20 minuta", de: "15–20 Min.", en: "15–20 minutes" },
    ingredients: {
      sr: ["200 g kuvanih leblebija (iz tegle ili konzerve)", "2–3 kašike tamnog tahinija", "2 kašike maslinovog ulja + malo za dekoraciju", "Sok od pola limuna", "1 čen belog luka", "So po ukusu", "1–2 kašike hladne vode (po potrebi)", "Svež peršun za dekoraciju"],
      de: ["200 g gekochte Kichererbsen (aus dem Glas oder der Dose)", "2–3 EL dunkles Tahini", "2 EL Olivenöl + etwas zur Dekoration", "Saft einer halben Zitrone", "1 Knoblauchzehe", "Salz nach Geschmack", "1–2 EL kaltes Wasser (nach Bedarf)", "Frische Petersilie zur Dekoration"],
      en: ["200 g cooked chickpeas (from a jar or tin)", "2–3 tbsp dark tahini", "2 tbsp olive oil + a little for decoration", "Juice of half a lemon", "1 garlic clove", "Salt to taste", "1–2 tbsp cold water (as needed)", "Fresh parsley for decoration"]
    },
    instructions: {
      sr: ["Leblebije, tahini, maslinovo ulje, limunov sok i beli luk stavi u blender ili multipraktik.", "Blendaj dok smesa ne postane glatka i kremasta. Po potrebi dodaj hladnu vodu kašiku po kašiku.", "Posoli i pobiberi po ukusu.", "Iseckaj sveži peršun.", "Serviraj u činiji, pospi peršunom i ukrasi kapljicama maslinovog ulja."],
      de: ["Kichererbsen, Tahini, Olivenöl, Zitronensaft und Knoblauch in einen Mixer oder eine Küchenmaschine geben.", "Mixen bis die Masse glatt und cremig ist. Bei Bedarf löffelweise kaltes Wasser hinzufügen.", "Mit Salz und Pfeffer abschmecken.", "Frische Petersilie hacken.", "In einer Schüssel servieren, mit Petersilie bestreuen und mit Olivenöl beträufeln."],
      en: ["Place the chickpeas, tahini, olive oil, lemon juice and garlic in a blender or food processor.", "Blend until smooth and creamy, adding cold water a tablespoon at a time as needed.", "Season with salt and pepper.", "Chop the fresh parsley.", "Serve in a bowl, sprinkle with parsley and drizzle with olive oil."]
    },
    note: "Za ekstra kremast humus koristi deo tečnosti od kuvanih leblebija umesto vode.",
    image: "assets/images/domaci-humus.png",
    category: "Jutarnji recepti"
  },
  {
    number: "40",
    title: { sr: "Kokos palačinke sa brzim breskva-namazom", de: "Kokos-Pfannkuchen mit schnellem Pfirsich-Aufstrich", en: "Coconut Pancakes with Quick Peach Spread" },
    subtitle: {
      sr: "Lagana egzotika uz letnju voćnu svežinu.",
      de: "Leichte Exotik mit sommerlicher Fruchtfrische.",
      en: "Light exoticism with a summer fruit freshness."
    },
    author_comment: {
      sr: "Palačinke su moj mali ritual sreće, a u ovoj kombinaciji kokosa i sočnih breskvi postaju prava letnja čarolija. Mirisne, meke i voćne — zaslade vam ceo dan!",
      de: "Pfannkuchen sind mein kleines Glücksritual, und in dieser Kombination aus Kokos und saftigen Pfirsichen werden sie zur echten Sommermagie. Duftend, weich und fruchtig!",
      en: "Pancakes are my little happiness ritual, and in this combination of coconut and juicy peaches they become pure summer magic. Fragrant, soft and fruity — they will sweeten your whole day!"
    },
    prep_time: { sr: "30 minuta", de: "30 Min.", en: "30 minutes" },
    ingredients: {
      sr: ["2 jaja", "200 ml kokosovog mleka (ili običnog)", "100 ml mineralne vode", "120 g brašna (integralnog ili belog)", "2 kašike kokosovog brašna", "1 kašika kokosovog ili maslinovog ulja", "Za namaz: 2–3 zrele breskve, 1 kašičica meda, malo limunovog soka, prstohvat cimeta"],
      de: ["2 Eier", "200 ml Kokosmilch (oder normale Milch)", "100 ml Mineralwasser", "120 g Mehl (Vollkorn oder weiß)", "2 EL Kokosmehl", "1 EL Kokosnussöl oder Olivenöl", "Für den Aufstrich: 2–3 reife Pfirsiche, 1 TL Honig, etwas Zitronensaft, eine Prise Zimt"],
      en: ["2 eggs", "200 ml coconut milk (or regular)", "100 ml sparkling water", "120 g flour (wholegrain or white)", "2 tbsp coconut flour", "1 tbsp coconut or olive oil", "For the spread: 2–3 ripe peaches, 1 tsp honey, a little lemon juice, a pinch of cinnamon"]
    },
    instructions: {
      sr: ["Umuti jaja, dodaj kokosovo mleko i mineralnu vodu.", "Postepeno umešaj brašno i kokosovo brašno dok ne dobiješ glatko testo.", "Zagrej tiganj i premaži ga tankim slojem kokosovog ulja. Peci palačinke dok ne porumene sa obe strane.", "Za brzi namaz: oljušti breskve, izgnječi ih viljuškom ili izblendaj, dodaj limunov sok i med po ukusu. Po želji začini cimetom.", "Namaži palačinke voćnim namazom i urolaj ili presavij."],
      de: ["Eier verquirlen, Kokosmilch und Mineralwasser hinzufügen.", "Nach und nach Mehl und Kokosmehl einrühren bis ein glatter Teig entsteht.", "Pfanne erhitzen und dünn mit Kokosöl einfetten. Pfannkuchen von beiden Seiten goldbraun backen.", "Für den Aufstrich: Pfirsiche schälen, mit einer Gabel zerdrücken oder pürieren, Zitronensaft und Honig nach Geschmack hinzufügen. Nach Belieben mit Zimt würzen.", "Pfannkuchen mit dem Fruchtaufstrich bestreichen, einrollen oder falten."],
      en: ["Whisk the eggs, add the coconut milk and sparkling water.", "Gradually mix in the flour and coconut flour until you have a smooth batter.", "Heat the pan and brush with a thin layer of coconut oil. Cook the pancakes until golden on both sides.", "For the quick spread: peel the peaches, mash with a fork or blend, add lemon juice and honey to taste. Season with cinnamon if desired.", "Spread the pancakes with the fruit spread and roll or fold."]
    },
    note: "Za dekoraciju pospi kokosovim brašnom, listićima badema ili dodaj sveže voće sa strane.",
    image: "assets/images/kokos-palacinka.png",
    category: "Jutarnji recepti"
  },
  {
    number: "41",
    title: { sr: "Ćuretina sa patlidžanom i testeninom", de: "Putenbrust mit Aubergine und Nudeln", en: "Turkey with Aubergine and Pasta" },
    subtitle: {
      sr: "Klasičan gulaš, ali sa patlidžanom koji ga pretvara u nešto sasvim novo.",
      de: "Klassisches Gulasch, aber mit Aubergine, die es in etwas ganz Neues verwandelt.",
      en: "A classic stew, but with aubergine that transforms it into something entirely new."
    },
    author_comment: {
      sr: "Ovaj gulaš je prava kombinacija sočnosti i zdravlja. Patlidžan se topi u sosu i daje punoću ukusa — ovo je moj trik kako da klasičan gulaš postane poseban.",
      de: "Dieses Gulasch ist eine wahre Kombination aus Saftigkeit und Gesundheit. Die Aubergine schmilzt in der Sauce und verleiht Fülle — mein Trick, um ein klassisches Gulasch besonders zu machen.",
      en: "This stew is a true combination of juiciness and health. The aubergine melts into the sauce and adds richness — my trick for turning a classic stew into something special."
    },
    prep_time: { sr: "30 minuta", de: "30 Min.", en: "30 minutes" },
    ingredients: {
      sr: ["300 g ćurećeg filea", "1 patlidžan (odgorčen)", "1 crvena paprika", "1 šargarepa", "1 crni ili crveni luk", "400 g pelata (ili paradajz sosa)", "2 kašike maslinovog ulja", "So, biber, suvi origano, bosiljak po ukusu", "200 g testenine"],
      de: ["300 g Putenfilet", "1 Aubergine (entbittert)", "1 rote Paprika", "1 Karotte", "1 Zwiebel (weiß oder rot)", "400 g geschälte Tomaten (oder Tomatensauce)", "2 EL Olivenöl", "Salz, Pfeffer, getrockneter Oregano, Basilikum nach Geschmack", "200 g Nudeln"],
      en: ["300 g turkey fillet", "1 aubergine (degorged)", "1 red pepper", "1 carrot", "1 onion (white or red)", "400 g peeled tomatoes (or tomato sauce)", "2 tbsp olive oil", "Salt, pepper, dried oregano, basil to taste", "200 g pasta"]
    },
    instructions: {
      sr: ["Na maslinovom ulju propržiti seckani luk i šargarepu.", "Dodati ćureći file isečen na kockice i dinstati dok ne pobeli.", "Umešati patlidžan i papriku, pa dinstati još par minuta.", "Dodati pelat, začiniti solju, biberom, origanom i bosiljkom. Kuvati 20 minuta dok povrće omekša.", "U međuvremenu skuvati testeninu.", "Servirati gulaš preko testenine i posuti svežim bosiljkom."],
      de: ["In Olivenöl die gehackte Zwiebel und Karotte andünsten.", "Das in Würfel geschnittene Putenfilet hinzufügen und dünsten bis es weiß wird.", "Aubergine und Paprika einrühren und noch einige Minuten dünsten.", "Tomaten hinzufügen, mit Salz, Pfeffer, Oregano und Basilikum würzen. 20 Minuten köcheln lassen bis das Gemüse weich ist.", "In der Zwischenzeit die Nudeln kochen.", "Gulasch über die Nudeln servieren und mit frischem Basilikum bestreuen."],
      en: ["Sauté the chopped onion and carrot in olive oil.", "Add the diced turkey fillet and cook until it turns white.", "Stir in the aubergine and pepper and sauté for a few more minutes.", "Add the tomatoes, season with salt, pepper, oregano and basil. Cook for 20 minutes until the vegetables are soft.", "Meanwhile, cook the pasta.", "Serve the stew over the pasta and sprinkle with fresh basil."]
    },
    note: "Ako voliš gušći sos, na kraju dodaj kašičicu gustina razmućenog u malo vode.",
    image: "assets/images/curetina-sa-patlidzanom.png",
    category: "Recepti kada ne znam šta da kuvam"
  },
  {
    number: "42",
    title: { sr: "Proteinski namaz od kuvanih jaja", de: "Proteinreicher Aufstrich aus gekochten Eiern", en: "Protein Spread from Boiled Eggs" },
    subtitle: {
      sr: "Brz i hranljiv doručak sa osvežavajućim ukusom.",
      de: "Schnelles und nahrhaftes Frühstück mit erfrischendem Geschmack.",
      en: "Quick and nourishing breakfast with a refreshing taste."
    },
    author_comment: {
      sr: "Savršen za doručak ili laganu večeru — kremast, hrskav od rotkvica i osvežavajuć uz povrće. Na integralnom hlebu ili kao punjenje za tortilje — uvek uspeva.",
      de: "Perfekt für das Frühstück oder ein leichtes Abendessen — cremig, knusprig durch die Radieschen und erfrischend mit Gemüse. Auf Vollkornbrot oder als Tortilla-Füllung — immer ein Erfolg.",
      en: "Perfect for breakfast or a light dinner — creamy, crunchy from the radishes and refreshing with vegetables. On wholegrain bread or as a tortilla filling — always a success."
    },
    prep_time: { sr: "10 minuta", de: "10 Min.", en: "10 minutes" },
    ingredients: {
      sr: ["2 kuvana jaja", "3 manje rotkvice", "1 mladi luk", "1–2 kašike senfa", "1 kašika maslinovog ulja", "So i biber po ukusu"],
      de: ["2 hartgekochte Eier", "3 kleine Radieschen", "1 Frühlingszwiebel", "1–2 TL Senf", "1 EL Olivenöl", "Salz und Pfeffer nach Geschmack"],
      en: ["2 hard-boiled eggs", "3 small radishes", "1 spring onion", "1–2 tsp mustard", "1 tbsp olive oil", "Salt and pepper to taste"]
    },
    instructions: {
      sr: ["Jaja sitno iseckaj ili izgnječi viljuškom.", "Dodaj sitno seckane rotkvice i mladi luk.", "Umešaj senf, maslinovo ulje, so i biber.", "Posluži uz svežu salatu, paradajz ili integralni hleb."],
      de: ["Eier fein hacken oder mit einer Gabel zerdrücken.", "Fein gehackte Radieschen und Frühlingszwiebel hinzufügen.", "Senf, Olivenöl, Salz und Pfeffer einrühren.", "Mit frischem Salat, Tomaten oder Vollkornbrot servieren."],
      en: ["Finely chop or mash the eggs with a fork.", "Add the finely chopped radishes and spring onion.", "Mix in the mustard, olive oil, salt and pepper.", "Serve with fresh salad, tomatoes or wholegrain bread."]
    },
    note: "Po želji posuti semenkama (suncokret, lan, bundevu) za dodatnu hrskavost i hranljivost.",
    image: "assets/images/proteinski-namaz-od-jaja.png",
    category: "Jutarnji recepti"
  },
  {
    number: "43",
    title: { sr: "Restovani krompir – omiljeno jelo moje bake", de: "Gebratene Kartoffeln – Omas Lieblingsrezept", en: "Pan-Fried Potatoes – My Grandma's Favourite" },
    subtitle: {
      sr: "Jednostavno, mirisno i zasitno jelo za svaku priliku.",
      de: "Einfaches, duftendes und sättigendes Gericht für jeden Anlass.",
      en: "Simple, fragrant and filling — a dish for every occasion."
    },
    author_comment: {
      sr: "Ovo jelo je dokaz da i od najjednostavnijih sastojaka može da nastane prava gozba. Savršen izbor kada želiš nešto brzo, ukusno i zasitno.",
      de: "Dieses Gericht ist der Beweis, dass selbst aus den einfachsten Zutaten ein echtes Festmahl entstehen kann. Die perfekte Wahl, wenn man etwas Schnelles, Leckeres und Sättigendes möchte.",
      en: "This dish is proof that even the simplest ingredients can make a real feast. The perfect choice when you want something quick, tasty and filling."
    },
    prep_time: { sr: "oko 30 minuta", de: "ca. 30 Min.", en: "about 30 minutes" },
    ingredients: {
      sr: ["3–4 krompira", "1 glavica crnog luka", "Malo ulja za prženje", "So, biber", "1 kašičica aleve paprike"],
      de: ["3–4 Kartoffeln", "1 Zwiebel", "Etwas Öl zum Braten", "Salz, Pfeffer", "1 TL Paprikapulver"],
      en: ["3–4 potatoes", "1 onion", "A little oil for frying", "Salt, pepper", "1 tsp paprika"]
    },
    instructions: {
      sr: ["Krompir oljušti, iseci na kocke i skuvaj u vodi (pazi da ne prekuvaš!).", "Na malo ulja proprži sitno seckan crni luk dok ne postane staklast.", "Dodaj krompir, posoli, pobiberi i začini alevom paprikom.", "Sve dobro izmešaj i kratko proprži da se ukusi sjedine."],
      de: ["Kartoffeln schälen, in Würfel schneiden und in Wasser kochen (nicht zu lange!).", "Die fein gehackte Zwiebel in etwas Öl glasig dünsten.", "Kartoffeln hinzufügen, mit Salz, Pfeffer und Paprika würzen.", "Alles gut vermischen und kurz anbraten damit sich die Aromen verbinden."],
      en: ["Peel the potatoes, cut into cubes and cook in water (don't overcook!).", "Sauté the finely chopped onion in a little oil until translucent.", "Add the potatoes, season with salt, pepper and paprika.", "Mix everything well and fry briefly to let the flavours come together."]
    },
    note: "Može se služiti kao prilog uz meso ili ribu, ili kao samostalno jelo uz parče sira i svež paradajz.",
    image: "assets/images/restovani-krompir.png",
    category: "Recepti kada ne znam šta da kuvam"
  },
  {
    number: "44",
    title: { sr: "Voćna pita iz šume", de: "Waldfrüchtekuchen", en: "Forest Fruit Pie" },
    subtitle: {
      sr: "Hrskava, sočna i osvežavajuća — desert koji spaja kiselkaste note šumskog voća i prijatnu slatkoću.",
      de: "Knusprig, saftig und erfrischend — ein Dessert das die sauren Noten von Waldfrüchten mit angenehmer Süße verbindet.",
      en: "Crispy, juicy and refreshing — a dessert that unites the tart notes of forest fruit with pleasant sweetness."
    },
    author_comment: {
      sr: "Ova pita je moj tajni način da na brzinu napravim nešto što izgleda kao da sam ceo dan provela u kuhinji. U stvari — treba ti samo jedno testo, malo voća i puno ljubavi.",
      de: "Diese Torte ist mein Geheimtrick um schnell etwas zu zaubern, das aussieht als hätte ich den ganzen Tag in der Küche gestanden. In Wirklichkeit braucht man nur einen Teig, etwas Obst und viel Liebe.",
      en: "This pie is my secret way to quickly make something that looks like I spent all day in the kitchen. In reality — you just need pastry sheets, a little fruit and a lot of love."
    },
    prep_time: { sr: "15 minuta + 20 minuta pečenja", de: "15 Min. + 20 Min. backen", en: "15 minutes + 20 minutes baking" },
    ingredients: {
      sr: ["300 g tankih gotovih kora", "500 g mešanog šumskog voća (sveže ili zamrznuto)", "3 kašike šećera ili meda", "2 jaja", "50 g otopljenog putera", "1 kesica vanilin šećera", "100 ml vode"],
      de: ["300 g dünne fertige Teigblätter", "500 g gemischte Waldfrüchte (frisch oder gefroren)", "3 EL Zucker oder Honig", "2 Eier", "50 g geschmolzene Butter", "1 Päckchen Vanillezucker", "100 ml Wasser"],
      en: ["300 g thin pastry sheets (filo)", "500 g mixed forest fruit (fresh or frozen)", "3 tbsp sugar or honey", "2 eggs", "50 g melted butter", "1 sachet vanilla sugar", "100 ml water"]
    },
    instructions: {
      sr: ["U činiji pomešaj jaja, šećer, vanilin šećer, puter i vodu.", "Pleh obloži papirom za pečenje.", "Savijaj po dve kore kao harmoniku i ređaj po dužini tepsije.", "Između slojeva naizmenično sipaj fil od jaja i voće dok ne potrošiš sve.", "Peci na 180°C sa ventilatorom oko 20 minuta, dok pita ne porumeni.", "Ostavi da se malo prohladi pre sečenja, iseci na kocke i uživaj."],
      de: ["Eier, Zucker, Vanillezucker, Butter und Wasser in einer Schüssel mischen.", "Backblech mit Backpapier auslegen.", "Je zwei Teigblätter wie eine Ziehharmonika falten und der Länge nach in die Form legen.", "Abwechselnd Eifüllmasse und Früchte zwischen die Schichten geben bis alles aufgebraucht ist.", "Bei 180°C mit Umluft ca. 20 Minuten backen bis die Torte goldbraun ist.", "Etwas abkühlen lassen bevor man sie in Stücke schneidet, und genießen."],
      en: ["Mix the eggs, sugar, vanilla sugar, butter and water in a bowl.", "Line a baking tray with parchment paper.", "Fold two pastry sheets at a time like an accordion and arrange lengthwise in the tin.", "Alternate between adding the egg mixture and the fruit between the layers until everything is used up.", "Bake at 180°C fan for about 20 minutes until golden.", "Leave to cool slightly before cutting into squares and enjoy."]
    },
    note: "Ako koristiš zamrznuto voće, ostavi ga da se malo razmrzne i ocedi pre nego što ga staviš u fil.",
    image: "assets/images/vocna-pita-iz-sume.png",
    category: "Recepti koji mirišu iz rerne"
  },
  {
    number: "45",
    title: { sr: "Salata sa rukolom, cveklom, fetom i orasima", de: "Rucola-Salat mit Rote Bete, Feta und Walnüssen", en: "Rocket Salad with Beetroot, Feta & Walnuts" },
    subtitle: {
      sr: "Mala bomba osveženja i ukusa.",
      de: "Eine kleine Geschmacksbombe voller Frische.",
      en: "A little bomb of freshness and flavour."
    },
    author_comment: {
      sr: "Ova salata je kao mali vatromet u tanjiru — slatka cvekla, pikantna rukola, kremasta feta i hrskavi orasi stvaraju skladnu igru ukusa.",
      de: "Dieser Salat ist wie kleines Feuerwerk auf dem Teller — süße Rote Bete, pikante Rucola, cremiger Feta und knusprige Walnüsse ergeben ein harmonisches Geschmacksspiel.",
      en: "This salad is like a little firework on the plate — sweet beetroot, peppery rocket, creamy feta and crunchy walnuts create a harmonious play of flavours."
    },
    prep_time: { sr: "15 minuta", de: "15 Min.", en: "15 minutes" },
    ingredients: {
      sr: ["2 šake sveže rukole", "2 kuvane cvekle (isečene na kockice ili kriške)", "100 g feta sira", "1 šaka oraha (lagano prepečenih na suvom tiganju)", "Maslinovo ulje", "Sok od pola limuna", "So i biber po ukusu"],
      de: ["2 Handvoll frische Rucola", "2 gekochte Rote Beten (in Würfel oder Scheiben geschnitten)", "100 g Feta-Käse", "1 Handvoll Walnüsse (leicht in einer Trockenpfanne geröstet)", "Olivenöl", "Saft einer halben Zitrone", "Salz und Pfeffer nach Geschmack"],
      en: ["2 handfuls of fresh rocket", "2 cooked beetroots (cut into cubes or slices)", "100 g feta cheese", "1 handful of walnuts (lightly toasted in a dry pan)", "Olive oil", "Juice of half a lemon", "Salt and pepper to taste"]
    },
    instructions: {
      sr: ["Na tanjir složiti rukolu kao osnovu.", "Dodati kuvanu i isečenu cveklu.", "Preko rasporediti izmrvljenu fetu i posuti orasima.", "Preliti maslinovim uljem i limunovim sokom, začiniti solju i biberom."],
      de: ["Rucola als Grundlage auf dem Teller anrichten.", "Gekochte und geschnittene Rote Bete hinzufügen.", "Zerbröckelten Feta darüber verteilen und mit Walnüssen bestreuen.", "Mit Olivenöl und Zitronensaft beträufeln und mit Salz und Pfeffer würzen."],
      en: ["Arrange the rocket as a base on the plate.", "Add the cooked and sliced beetroot.", "Crumble feta over the top and sprinkle with walnuts.", "Drizzle with olive oil and lemon juice, and season with salt and pepper."]
    },
    note: "Ako voliš blaži ukus, umesto rukole koristi baby spanać. Možeš dodati i malo balzamiko sirćeta za dublji, aromatičniji šmek.",
    image: "assets/images/salata-sa-cveklom.png",
    category: "Osvežavajući recepti"
  },
  {
    number: "46",
    title: { sr: "Juneći gulaš sa zelenom boranijom", de: "Rindergulasch mit grünen Bohnen", en: "Beef Stew with Green Beans" },
    subtitle: {
      sr: "Klasičan domaći gulaš s osvežavajućom zelenom notom.",
      de: "Klassisches Hausgulasch mit erfrischender grüner Note.",
      en: "Classic home-style stew with a refreshing green note."
    },
    author_comment: {
      sr: "Ovo jelo nastalo je iz želje da spojim snagu i lakoću — punoću junećeg mesa i osvežavajući dah zelene boranije. Savršeno jelo za hladne oktobarske dane.",
      de: "Dieses Gericht entstand aus dem Wunsch Stärke und Leichtigkeit zu verbinden — die Fülle des Rindfleisches und den erfrischenden Hauch der grünen Bohnen. Perfekt für kalte Oktobertage.",
      en: "This dish was born from a desire to unite strength and lightness — the richness of beef and the refreshing touch of green beans. Perfect for cold October days."
    },
    prep_time: { sr: "oko 60 minuta", de: "ca. 60 Min.", en: "about 60 minutes" },
    ingredients: {
      sr: ["500 g junećeg mesa (but ili plećka)", "300 g zelene boranije", "2 glavice crnog luka", "2 čena belog luka", "1 šargarepa", "2 zrela paradajza (oljuštena i seckana)", "1 kašika paradajz-koncentrata", "1 kašika brašna", "1 kašičica mlevene slatke paprike", "2 lovorova lista", "So, biber, maslinovo ulje"],
      de: ["500 g Rindfleisch (Keule oder Schulter)", "300 g grüne Bohnen", "2 Zwiebeln", "2 Knoblauchzehen", "1 Karotte", "2 reife Tomaten (geschält und gehackt)", "1 EL Tomatenmark", "1 EL Mehl", "1 TL gemahlener süßer Paprika", "2 Lorbeerblätter", "Salz, Pfeffer, Olivenöl"],
      en: ["500 g beef (leg or shoulder)", "300 g green beans", "2 onions", "2 garlic cloves", "1 carrot", "2 ripe tomatoes (peeled and chopped)", "1 tbsp tomato paste", "1 tbsp flour", "1 tsp sweet ground paprika", "2 bay leaves", "Salt, pepper, olive oil"]
    },
    instructions: {
      sr: ["Na umerenoj vatri proprži seckan crni luk dok ne postane staklast.", "Dodaj meso isečeno na kocke i proprži ga sa svih strana.", "Ubaci brašno i mlevenu papriku, dodaj svež paradajz, koncentrat i šargarepu.", "Nalij toplom vodom da pokrije meso, dodaj lovorov list i kuvaj na tihoj vatri oko 30 minuta.", "Na polovini kuvanja ubaci boraniju i po potrebi još malo vode. Kuvaj još 30 minuta dok se ukusi ne sjedine."],
      de: ["Die gehackte Zwiebel bei mittlerer Hitze glasig dünsten.", "Das in Würfel geschnittene Fleisch von allen Seiten anbraten.", "Mehl und Paprika einrühren, dann frische Tomaten, Tomatenmark und Karotte hinzufügen.", "Mit warmem Wasser aufgießen bis das Fleisch bedeckt ist, Lorbeerblätter hinzufügen und bei niedriger Hitze ca. 30 Minuten köcheln lassen.", "Zur Hälfte der Kochzeit die grünen Bohnen hinzufügen und bei Bedarf etwas mehr Wasser zugeben. Weitere 30 Minuten köcheln lassen bis sich die Aromen verbunden haben."],
      en: ["Sauté the chopped onion over medium heat until translucent.", "Add the beef cut into cubes and brown on all sides.", "Stir in the flour and paprika, then add the fresh tomatoes, tomato paste and carrot.", "Pour in warm water to cover the meat, add the bay leaves and cook over low heat for about 30 minutes.", "Halfway through cooking add the green beans and a little more water if needed. Cook for another 30 minutes until the flavours have melded."]
    },
    note: "Za bogatiji miris dodaj list celera ili kašičicu senfa pred kraj. Gulaš se sutradan uvek slegne i bude još ukusniji.",
    image: "assets/images/juneci-gulas.png",
    category: "Recepti kada ne znam šta da kuvam"
  },
  {
    number: "47",
    title: { sr: "Brzi Tapas", de: "Schnelle Tapas", en: "Quick Tapas" },
    subtitle: {
      sr: "Kada telo zna šta mu prija.",
      de: "Wenn der Körper weiß, was ihm gut tut.",
      en: "When your body knows what it needs."
    },
    author_comment: {
      sr: "Obrok je inspirisan španskim tapasima — malim ukusnim zalogajima koji se služe u više malih posuda i dele sa prijateljima. Ovaj put, jela sam ga sama i uživala u trenutku punom ukusa.",
      de: "Das Gericht ist von spanischen Tapas inspiriert — kleinen leckeren Häppchen die in vielen kleinen Schüsseln serviert und mit Freunden geteilt werden. Diesmal aß ich sie allein und genoss den Augenblick voller Genuss.",
      en: "This meal is inspired by Spanish tapas — small tasty bites served in several small dishes and shared with friends. This time I ate it alone and enjoyed every flavourful moment."
    },
    prep_time: { sr: "5 minuta", de: "5 Min.", en: "5 minutes" },
    ingredients: {
      sr: ["Nekoliko tankih listova pršute (Serrano ili Parma)", "Nekoliko kockica tvrdog sira (cheddar ili po izboru)", "Šaka belog grožđa", "5–6 crnih maslina", "2 kriške integralnog hleba", "Par cherry paradajza i kolutića krastavca"],
      de: ["Einige dünne Scheiben Serrano- oder Parmaschinken", "Einige Würfel Hartkäse (Cheddar oder nach Wahl)", "Eine Handvoll weißer Weintrauben", "5–6 schwarze Oliven", "2 Scheiben Vollkornbrot", "Ein paar Cherrytomaten und Gurkenscheiben"],
      en: ["A few thin slices of Serrano or Parma ham", "A few cubes of hard cheese (cheddar or your choice)", "A handful of white grapes", "5–6 black olives", "2 slices of wholegrain bread", "A few cherry tomatoes and cucumber slices"]
    },
    instructions: {
      sr: ["Ne kuvaš — slažeš.", "Pusti da te vodi osećaj — ne vaga, ne meri.", "Tanjir nek bude mala slika tvog trenutnog raspoloženja."],
      de: ["Du kochst nicht — du arrangierst.", "Lass dich von deinem Gefühl leiten — keine Waage, kein Messen.", "Der Teller soll ein kleines Bild deiner aktuellen Stimmung sein."],
      en: ["You don't cook — you arrange.", "Let your feeling guide you — no scales, no measuring.", "Let the plate be a little picture of your current mood."]
    },
    note: "Najlepši obroci su oni koji nastanu iz čiste potrebe za zadovoljstvom. Kad osetiš da ti prija nešto slano, hrskavo i puno ukusa — poslušaj taj glas bez griže savesti.",
    image: "assets/images/brzi-tapas.png",
    category: "Recepti kada ne znam šta da kuvam"
  },
  {
    number: "48",
    title: { sr: "Najčokoladniji Brauni", de: "Der schokoladigste Brownie", en: "The Most Chocolatey Brownie" },
    subtitle: {
      sr: "Slatki antistres za PMS i ostale krizne dane.",
      de: "Süßer Antistress für PMS und andere Krisentage.",
      en: "Sweet anti-stress for PMS and other crisis days."
    },
    author_comment: {
      sr: "Ne verujem u čudesne pilule, ali verujem u čokoladu. Topao brauni, mek iznutra, hrskav po ivicama i miris koji te podseti da je život zapravo predivan.",
      de: "Ich glaube nicht an Wunderpillen, aber ich glaube an Schokolade. Ein warmer Brownie, innen weich, an den Rändern knusprig — und der Duft erinnert dich daran, dass das Leben eigentlich wunderschön ist.",
      en: "I don't believe in miracle pills, but I believe in chocolate. A warm brownie, soft inside, crispy at the edges — and the aroma to remind you that life is actually wonderful."
    },
    prep_time: { sr: "15 minuta + 25–30 minuta pečenja", de: "15 Min. + 25–30 Min. backen", en: "15 minutes + 25–30 minutes baking" },
    ingredients: {
      sr: ["100 g tamne čokolade (min. 70% kakaa)", "50 g putera", "2 jaja", "50 g kokosovog ili smeđeg šećera", "100 g integralnog brašna", "2 kašike kakao praha", "Prstohvat soli", "1 kašičica vanile", "Šaka seckanih oraha ili lešnika (opciono)", "Jagode za dekoraciju"],
      de: ["100 g dunkle Schokolade (mind. 70% Kakao)", "50 g Butter", "2 Eier", "50 g Kokoszucker oder brauner Zucker", "100 g Vollkornmehl", "2 EL Kakaopulver", "Eine Prise Salz", "1 TL Vanille", "Eine Handvoll gehackte Walnüsse oder Haselnüsse (optional)", "Erdbeeren zur Dekoration"],
      en: ["100 g dark chocolate (min. 70% cocoa)", "50 g butter", "2 eggs", "50 g coconut or brown sugar", "100 g wholemeal flour", "2 tbsp cocoa powder", "A pinch of salt", "1 tsp vanilla", "A handful of chopped walnuts or hazelnuts (optional)", "Strawberries for decoration"]
    },
    instructions: {
      sr: ["Istopi čokoladu i puter na pari.", "Umuti jaja sa šećerom i vanilom, pa dodaj čokoladnu smesu.", "Umešaj brašno, kakao i so — ručno, da masa ostane gusta i lepljiva.", "Po želji dodaj orašaste plodove.", "Peci 25–30 minuta na 180°C u plehu obloženom papirom. Sredina treba da bude mekana, ne prepečena.", "Pusti da se malo ohladi, pa ukrasi jagodama."],
      de: ["Schokolade und Butter im Wasserbad schmelzen.", "Eier mit Zucker und Vanille aufschlagen, dann die Schokoladenmasse hinzufügen.", "Mehl, Kakao und Salz von Hand einrühren damit die Masse dick und klebrig bleibt.", "Nach Wunsch Nüsse hinzufügen.", "25–30 Minuten bei 180°C in einem mit Backpapier ausgelegten Blech backen. Die Mitte soll weich bleiben, nicht durchgebacken.", "Etwas abkühlen lassen, dann mit Erdbeeren dekorieren."],
      en: ["Melt the chocolate and butter in a bain-marie.", "Whisk the eggs with the sugar and vanilla, then add the chocolate mixture.", "Mix in the flour, cocoa and salt by hand so the batter stays thick and sticky.", "Add nuts if desired.", "Bake for 25–30 minutes at 180°C in a parchment-lined tin. The centre should remain soft, not fully set.", "Allow to cool slightly, then decorate with strawberries."]
    },
    note: "Uz ovaj kolač ne važi \"jedno parče je dovoljno\". PMS ne poznaje granice — i to je sasvim u redu.",
    image: "assets/images/najcokoladniji-brauni.png",
    category: "Recepti uz kafu"
  },
  {
    number: "49",
    title: { sr: "Rolnice od lisnatog testa sa mlevenim mesom", de: "Blätterteig-Röllchen mit Hackfleisch", en: "Puff Pastry Rolls with Minced Meat" },
    subtitle: {
      sr: "Mirisni zalogaji koji te pokreću!",
      de: "Duftende Häppchen die dich in Bewegung bringen!",
      en: "Fragrant bites that get you moving!"
    },
    author_comment: {
      sr: "Jednostavno jelo koje ne traži mnogo vremena ni truda, a pruža onaj osećaj zadovoljstva domaće kuhinje. Kad se spoje miris pečenog lisnatog testa i začinjenog mesa — teško je stati na jednoj rolnici!",
      de: "Ein einfaches Gericht das nicht viel Zeit oder Aufwand erfordert, aber das Gefühl der heimischen Küche bietet. Wenn sich der Duft des gebackenen Blätterteigs und des gewürzten Fleisches vereinen — ist es schwer bei einer Rolle zu bleiben!",
      en: "A simple dish that requires little time or effort, yet delivers the satisfaction of home cooking. When the aroma of baked puff pastry and seasoned meat meet — it is hard to stop at just one roll!"
    },
    prep_time: { sr: "40 minuta", de: "40 Min.", en: "40 minutes" },
    ingredients: {
      sr: ["1 pakovanje lisnatog testa (kupovno)", "200 g mlevenog mesa", "1 crvena paprika", "1 glavica crnog luka", "So, biber i kim po ukusu"],
      de: ["1 Packung Blätterteig (fertig gekauft)", "200 g Hackfleisch", "1 rote Paprika", "1 Zwiebel", "Salz, Pfeffer und Kümmel nach Geschmack"],
      en: ["1 pack of puff pastry (ready-made)", "200 g minced meat", "1 red pepper", "1 onion", "Salt, pepper and caraway seeds to taste"]
    },
    instructions: {
      sr: ["Drži lisnato testo u frižideru do samog oblikovanja — lakše se oblikuje i ostaje hrskavo.", "U činiji pomešaj mleveno meso, sitno seckan crni luk i papriku. Nema potrebe za dinstanjem.", "Uključi rernu na 200°C.", "Razvuci lisnato testo i rasporedi nadev ravnomerno do samih ivica.", "Smotaj testo u valjak i iseci oštrim nožem na kolutiće.", "Pospi kimom i poređaj u pleh obložen papirom. Smanji temperaturu na 180°C i peci oko 25 minuta sa ventilatorom."],
      de: ["Blätterteig bis kurz vor der Verarbeitung im Kühlschrank lassen — so lässt er sich besser formen und bleibt schön knusprig.", "Hackfleisch, fein gehackte Zwiebel und Paprika in einer Schüssel mischen. Kein Anbraten notwendig.", "Ofen auf 200°C vorheizen.", "Blätterteig ausrollen und die Füllung gleichmäßig bis an die Ränder verteilen.", "Den Teig zu einer Rolle aufrollen und mit einem scharfen Messer in Scheiben schneiden.", "Mit Kümmel bestreuen und auf ein mit Backpapier belegtes Blech legen. Temperatur auf 180°C reduzieren und ca. 25 Minuten mit Umluft backen."],
      en: ["Keep the puff pastry in the fridge until just before shaping — it is easier to work with and stays crispy.", "Mix the minced meat, finely chopped onion and pepper in a bowl. No pre-cooking needed.", "Preheat the oven to 200°C.", "Roll out the puff pastry and spread the filling evenly right to the edges.", "Roll the pastry into a log and cut into rounds with a sharp knife.", "Sprinkle with caraway seeds and place on a parchment-lined tray. Reduce the temperature to 180°C and bake for about 25 minutes with fan."]
    },
    note: "Rolnice su podjednako ukusne tople i hladne. Idealne uz jogu — ili uz film.",
    image: "assets/images/rolnice-od-lisnatog-testa.png",
    category: "Recepti koji mirišu iz rerne"
  },
  {
    number: "50",
    title: { sr: "Kroasani sa crnom čokoladom", de: "Croissants mit dunkler Schokolade", en: "Croissants with Dark Chocolate" },
    subtitle: {
      sr: "Slatki oblak sreće koji se topi u ustima!",
      de: "Süße Glückswolke die sich im Mund auflöst!",
      en: "A sweet cloud of happiness that melts in your mouth!"
    },
    author_comment: {
      sr: "Miris koji ispuni kuću čim ih ubaciš u rernu — mora se doživeti! Ovo su oni kroasani zbog kojih zaboraviš na vreme i sve obaveze.",
      de: "Der Duft der das Haus erfüllt sobald sie in den Ofen kommen — muss man erleben! Das sind die Croissants wegen denen man Zeit und alle Pflichten vergisst.",
      en: "The aroma that fills the house the moment they go in the oven — has to be experienced! These are the croissants that make you forget time and all your obligations."
    },
    prep_time: { sr: "25 minuta", de: "25 Min.", en: "25 minutes" },
    ingredients: {
      sr: ["1 pakovanje lisnatog testa (pravougaono)", "100 g crne čokolade", "Voda za premazivanje", "2 kašike seckanih badema", "1 kašika šećera u prahu"],
      de: ["1 Packung Blätterteig (rechteckig)", "100 g dunkle Schokolade", "Wasser zum Bestreichen", "2 EL gehackte Mandeln", "1 EL Puderzucker"],
      en: ["1 pack of puff pastry (rectangular)", "100 g dark chocolate", "Water for brushing", "2 tbsp chopped almonds", "1 tbsp icing sugar"]
    },
    instructions: {
      sr: ["Uključi rernu na 200°C da se dobro zagreje.", "Razvuci lisnato testo i iseci ga po dijagonali na trouglove.", "Na svaki trougao stavi po kockicu crne čokolade na širem delu.", "Uvij kroasane ka užem kraju i lagano savij vrhove da zadrže oblik.", "Premaži vodom pomoću četkice i pospi seckanim bademima.", "Peci na papiru za pečenje oko 20 minuta, dok ne porumene i zamirišu.", "Završi posipanjem šećera u prahu kad se malo prohlade."],
      de: ["Ofen auf 200°C gut vorheizen.", "Blätterteig ausrollen und diagonal in Dreiecke schneiden.", "Ein Stückchen dunkle Schokolade auf den breiteren Teil jedes Dreiecks legen.", "Croissants zur schmalen Spitze hin einrollen und die Enden leicht biegen damit sie die Form halten.", "Mit Wasser bestreichen und mit gehackten Mandeln bestreuen.", "Auf Backpapier ca. 20 Minuten backen bis sie golden sind und duften.", "Mit Puderzucker bestäuben wenn sie etwas abgekühlt sind."],
      en: ["Preheat the oven to 200°C.", "Roll out the puff pastry and cut diagonally into triangles.", "Place a piece of dark chocolate at the wider end of each triangle.", "Roll the croissants towards the narrow end and gently curve the tips to hold their shape.", "Brush with water and sprinkle with chopped almonds.", "Bake on parchment paper for about 20 minutes until golden and fragrant.", "Finish with a dusting of icing sugar once they have cooled slightly."]
    },
    note: "Ako želiš jači kontrast ukusa, koristi tamnu čokoladu od 80% kakaa — dobićeš savršenu ravnotežu između gorčine i slatkoće.",
    image: "assets/images/kroasani-sa-cokoladom.png",
    category: "Recepti uz kafu"
  },
  {
    number: "51",
    title: { sr: "Zimski kolač sa bundevom i šargarepom", de: "Winterkuchen mit Kürbis und Karotten", en: "Winter Cake with Pumpkin and Carrots" },
    subtitle: {
      sr: "Kolač bez dodatog šećera — samo prirodna slast voća i povrća.",
      de: "Kuchen ohne zugesetzten Zucker — nur die natürliche Süße von Obst und Gemüse.",
      en: "Cake without added sugar — just the natural sweetness of fruit and vegetables."
    },
    author_comment: {
      sr: "Toplina bundeve i cimeta u svakom zalogaju — savršeno za novembarske večeri uz čaj i zagrljaj.",
      de: "Die Wärme von Kürbis und Zimt in jedem Bissen — perfekt für Novemberabende mit Tee und einer Umarmung.",
      en: "The warmth of pumpkin and cinnamon in every bite — perfect for November evenings with tea and a hug."
    },
    prep_time: { sr: "40 minuta", de: "40 Min.", en: "40 minutes" },
    ingredients: {
      sr: ["3 jaja (odvojeno umućena belanca i žumanca)", "½ muskatne bundeve (izrendane)", "2 šargarepe (izrendane)", "3–4 kašike integralnog brašna", "2 pune kašike suvog grožđa", "oko 50 g otopljenog putera", "1–2 kesice vanilin šećera", "Sok od ½ limuna i rendana korica", "1 kašičica cimeta", "Prstohvat kardamoma i soli", "1 prašak za pecivo", "Seckani orasi za posipanje"],
      de: ["3 Eier (Eiweiß und Eigelb getrennt aufgeschlagen)", "½ Muskatnusskürbis (gerieben)", "2 Karotten (gerieben)", "3–4 EL Vollkornmehl", "2 gehäufte EL Rosinen", "ca. 50 g geschmolzene Butter", "1–2 Päckchen Vanillezucker", "Saft von ½ Zitrone und geriebene Schale", "1 TL Zimt", "Eine Prise Kardamom und Salz", "1 Päckchen Backpulver", "Gehackte Walnüsse zum Bestreuen"],
      en: ["3 eggs (whites and yolks beaten separately)", "½ butternut squash (grated)", "2 carrots (grated)", "3–4 tbsp wholemeal flour", "2 heaped tbsp raisins", "about 50 g melted butter", "1–2 sachets vanilla sugar", "Juice of ½ lemon and zest", "1 tsp cinnamon", "A pinch of cardamom and salt", "1 sachet baking powder", "Chopped walnuts for sprinkling"]
    },
    instructions: {
      sr: ["Umuti belanca sa limunovim sokom i koricom u čvrst sneg.", "Dodaj žumanca sa otopljenim puterom, zatim suvo grožđe, bundevu i šargarepu.", "Umešaj začine, pa postepeno dodaj brašno pomešano s praškom za pecivo.", "Sipaj u kalup obložen papirom za pečenje, pospi seckanim orasima.", "Peci oko 25 minuta na 180°C sa ventilatorom dok ne zamiriše kuća.", "Sačekaj da se ohladi pre sečenja."],
      de: ["Eiweiß mit Zitronensaft und -schale zu steifem Schnee schlagen.", "Eigelb mit geschmolzener Butter hinzufügen, dann Rosinen, Kürbis und Karotten.", "Gewürze unterrühren, dann nach und nach Mehl gemischt mit Backpulver hinzufügen.", "In eine mit Backpapier ausgelegte Form gießen und mit gehackten Walnüssen bestreuen.", "Ca. 25 Minuten bei 180°C mit Umluft backen bis das Haus duftet.", "Abkühlen lassen bevor man ihn anschneidet."],
      en: ["Beat the egg whites with the lemon juice and zest to stiff peaks.", "Add the egg yolks with the melted butter, then the raisins, pumpkin and carrots.", "Mix in the spices, then gradually add the flour mixed with the baking powder.", "Pour into a parchment-lined tin and sprinkle with chopped walnuts.", "Bake for about 25 minutes at 180°C fan until the house is fragrant.", "Allow to cool before cutting."]
    },
    note: "Kolač je još ukusniji dan posle, kada se ukusi sjedine i tekstura postane savršeno sočna.",
    image: "assets/images/zimski-kolac-sa-bundevom.png",
    category: "Recepti koji mirišu iz rerne"
  },
  {
    number: "52",
    title: { sr: "Detoks salata od cvekle i nara", de: "Detox-Salat aus Roter Bete und Granatapfel", en: "Detox Beetroot and Pomegranate Salad" },
    subtitle: {
      sr: "Rubin u tanjiru! Sveža, živopisna i puna vitalnosti.",
      de: "Rubin auf dem Teller! Frisch, lebhaft und voller Vitalität.",
      en: "A ruby on the plate! Fresh, vivid and full of vitality."
    },
    author_comment: {
      sr: "Volim ovu salatu jer je kao mala vitaminska bomba — probudi te, razbistri i stavi osmeh na lice. Jednostavna je, a izgleda kao da si je pravila za posebnu priliku.",
      de: "Ich liebe diesen Salat weil er wie eine kleine Vitaminbombe ist — er weckt dich auf, klärt den Geist und bringt ein Lächeln ins Gesicht. Einfach, aber wie für einen besonderen Anlass gemacht.",
      en: "I love this salad because it is like a little vitamin bomb — it wakes you up, clears the mind and puts a smile on your face. Simple, yet looking like it was made for a special occasion."
    },
    prep_time: { sr: "10 minuta", de: "10 Min.", en: "10 minutes" },
    ingredients: {
      sr: ["500 g kuvane cvekle", "½ nara (samo zrna)", "Šaka svežeg peršuna", "1 kašika maslinovog ulja", "1 kašika limunovog soka", "Prstohvat soli i bibera"],
      de: ["500 g gekochte Rote Bete", "½ Granatapfel (nur die Kerne)", "Eine Handvoll frische Petersilie", "1 EL Olivenöl", "1 EL Zitronensaft", "Eine Prise Salz und Pfeffer"],
      en: ["500 g cooked beetroot", "½ pomegranate (seeds only)", "A handful of fresh parsley", "1 tbsp olive oil", "1 tbsp lemon juice", "A pinch of salt and pepper"]
    },
    instructions: {
      sr: ["Kuvanu cveklu iseckaj na kockice ili tanke listiće.", "Pospi sveže očišćenim zrnima nara i sitno seckanim peršunom.", "Pomešaj maslinovo ulje, limunov sok, so i biber.", "Prelij salatu dresingom, lagano promešaj i ostavi 5 minuta da se ukusi povežu."],
      de: ["Gekochte Rote Bete in Würfel oder dünne Scheiben schneiden.", "Mit frisch herausgelösten Granatapfelkernen und fein gehackter Petersilie bestreuen.", "Olivenöl, Zitronensaft, Salz und Pfeffer mischen.", "Salat mit dem Dressing begießen, leicht vermengen und 5 Minuten ziehen lassen."],
      en: ["Cut the cooked beetroot into cubes or thin slices.", "Sprinkle with fresh pomegranate seeds and finely chopped parsley.", "Mix the olive oil, lemon juice, salt and pepper.", "Pour the dressing over the salad, toss gently and leave for 5 minutes for the flavours to meld."]
    },
    note: "Uz komadić feta sira pretvara se u kompletan lagani obrok. Ako koristiš vakumiranu cveklu, salata je gotova za bukvalno pet minuta.",
    image: "assets/images/detoks-salata-od-cvekle.png",
    category: "Osvežavajući recepti"
  },
  {
    number: "53",
    title: { sr: "Prebranac sa slatkim krompirom", de: "Prebranac mit Süßkartoffeln", en: "Prebranac with Sweet Potato" },
    subtitle: {
      sr: "Tradicija u novom duhu.",
      de: "Tradition im neuen Geist.",
      en: "Tradition in a new spirit."
    },
    author_comment: {
      sr: "Ovo jelo je moj mali most između detinjstva i današnjeg načina ishrane. Klasičan prebranac dobija novu, nežniju verziju zahvaljujući slatkom krompiru, a pečene paprike daju mu topao, domaći miris.",
      de: "Dieses Gericht ist meine kleine Brücke zwischen Kindheit und heutiger Ernährung. Der klassische Prebranac bekommt eine neue, zartere Version dank der Süßkartoffel, und die gerösteten Paprika verleihen ihm einen warmen Hausduft.",
      en: "This dish is my little bridge between childhood and today's way of eating. Classic prebranac gets a new, gentler version thanks to the sweet potato, and the roasted peppers give it a warm homely aroma."
    },
    prep_time: { sr: "60 minuta", de: "60 Min.", en: "60 minutes" },
    ingredients: {
      sr: ["400 g crvenog pasulja iz konzerve", "1 slatki krompir (srednje veličine)", "2 glavice crnog luka", "2–3 crvene slatke paprike", "Ulje po izboru", "So, biber, začinska paprika u prahu", "2–3 lovorova lista"],
      de: ["400 g Kidneybohnen aus der Dose", "1 mittelgroße Süßkartoffel", "2 Zwiebeln", "2–3 rote Paprikaschoten", "Öl nach Wahl", "Salz, Pfeffer, Paprikapulver", "2–3 Lorbeerblätter"],
      en: ["400 g tinned red kidney beans", "1 medium sweet potato", "2 onions", "2–3 red sweet peppers", "Oil of your choice", "Salt, pepper, paprika powder", "2–3 bay leaves"]
    },
    instructions: {
      sr: ["Luk sitno iseckaj i prodinstaj na ulju dok ne omekša.", "Pasulj iz konzerve operi pod mlazom vode i dodaj u luk.", "Slatki krompir oljušti, iseckaj na kockice i dodaj u povrće.", "Začini solju, biberom i začinskom paprikom, pa dinstaj oko 10 minuta na tihoj vatri.", "Pred kraj dinstanja delimično izgnječi pasulj varjačom da dobiješ kremastu smesu.", "Napuni paprike smesom i peci na 180°C dok paprike ne omekšaju."],
      de: ["Zwiebeln fein hacken und in Öl glasig dünsten.", "Bohnen aus der Dose abspülen und zu den Zwiebeln geben.", "Süßkartoffel schälen, würfeln und zum Gemüse geben.", "Mit Salz, Pfeffer und Paprikapulver würzen und bei niedriger Hitze ca. 10 Minuten dünsten.", "Gegen Ende des Dünstens die Bohnen mit einem Kochlöffel teilweise zerdrücken um eine cremige Masse zu erhalten.", "Die Paprikaschoten mit der Mischung füllen und bei 180°C backen bis die Paprika weich ist."],
      en: ["Finely chop the onions and sauté in oil until softened.", "Rinse the tinned beans under cold water and add to the onions.", "Peel the sweet potato, dice and add to the vegetables.", "Season with salt, pepper and paprika, then cook over low heat for about 10 minutes.", "Near the end of cooking, partially mash the beans with a spoon to get a creamy mixture.", "Fill the peppers with the mixture and bake at 180°C until the peppers are soft."]
    },
    note: "Prebranac je još ukusniji sutradan, kada se ukusi u potpunosti sjedine.",
    image: "assets/images/prebranac.png",
    category: "Recepti koji mirišu iz rerne"
  },
  {
    number: "54",
    title: { sr: "Domaća pašteta od tune", de: "Hausgemachte Thunfischpastete", en: "Homemade Tuna Pâté" },
    subtitle: {
      sr: "Jednostavna pašteta — bez suvišnih dodataka, baš kako volim.",
      de: "Einfache Pastete — ohne überflüssige Zusätze, genau wie ich es mag.",
      en: "Simple pâté — no unnecessary additions, just the way I like it."
    },
    author_comment: {
      sr: "Ovo je onaj tip recepta koji spasi doručak, večeru ili \"nemam ništa u frižideru\" momenat. Minimalno sastojaka, maksimalan ukus.",
      de: "Das ist der Typ Rezept der das Frühstück, das Abendessen oder den \"nichts im Kühlschrank\"-Moment rettet. Minimale Zutaten, maximaler Geschmack.",
      en: "This is the type of recipe that saves breakfast, dinner or the \"nothing in the fridge\" moment. Minimal ingredients, maximum flavour."
    },
    prep_time: { sr: "5 minuta", de: "5 Min.", en: "5 minutes" },
    ingredients: {
      sr: ["1 veća konzerva tunjevine u sopstvenom soku", "1 supena kašika maslinovog ulja", "2–3 kašičice senfa", "Sok od limuna i so po ukusu", "Povrće za dekoraciju"],
      de: ["1 große Dose Thunfisch im eigenen Saft", "1 EL Olivenöl", "2–3 TL Senf", "Zitronensaft und Salz nach Geschmack", "Gemüse zur Dekoration"],
      en: ["1 large tin of tuna in its own juice", "1 tbsp olive oil", "2–3 tsp mustard", "Lemon juice and salt to taste", "Vegetables for decoration"]
    },
    instructions: {
      sr: ["Tunjevinu procedi i stavi u secko ili multipraktik.", "Kratko samelji da se usitni.", "Dodaj senf, maslinovo ulje, limunov sok i so.", "Nastavi blendiranje dok ne dobiješ glatku, kremastu smesu.", "Probaj i po potrebi prilagodi kiselost, slanoću ili količinu ulja."],
      de: ["Thunfisch abtropfen lassen und in den Zerkleinerer oder die Küchenmaschine geben.", "Kurz mixen um ihn zu zerkleinern.", "Senf, Olivenöl, Zitronensaft und Salz hinzufügen.", "Weitermixen bis eine glatte cremige Masse entsteht.", "Probieren und bei Bedarf Säure, Salzgehalt oder Ölmenge anpassen."],
      en: ["Drain the tuna and place in a food processor or chopper.", "Blend briefly to break it up.", "Add the mustard, olive oil, lemon juice and salt.", "Continue blending until you have a smooth, creamy mixture.", "Taste and adjust the acidity, saltiness or oil as needed."]
    },
    note: "Ako voliš rustičniju teksturu, blendaj kraće. Odlično ide uz integralni hleb, krekere ili kao namaz za sendviče.",
    image: "assets/images/domaca-pasteta-od-tune.png",
    category: "Jutarnji recepti"
  },
  {
    number: "55",
    title: { sr: "Hrskava celer salata", de: "Knuspriger Selleriesalat", en: "Crunchy Celery Salad" },
    subtitle: {
      sr: "Osveženje posle posla — između ručka i večere.",
      de: "Erfrischung nach der Arbeit — zwischen Mittagessen und Abendessen.",
      en: "A refresher after work — between lunch and dinner."
    },
    author_comment: {
      sr: "Ova salata mi je bila pravo otkrovenje! Telo se obradovalo svakoj kašici, a energija se odmah podigla. Idealna je kao prva pomoć posle posla, kad je vruće, a treba nešto lagano, hrskavo i hranljivo.",
      de: "Dieser Salat war eine echte Offenbarung für mich! Der Körper freute sich über jeden Löffel und die Energie stieg sofort. Ideal als Erste Hilfe nach der Arbeit, wenn es heiß ist und man etwas Leichtes, Knuspriges und Nahrhaftes braucht.",
      en: "This salad was a real revelation for me! My body rejoiced at every spoonful and energy lifted immediately. Ideal as first aid after work, when it is hot and you need something light, crunchy and nourishing."
    },
    prep_time: { sr: "10 minuta", de: "10 Min.", en: "10 minutes" },
    ingredients: {
      sr: ["2–3 štapića celera (sitno seckana)", "1 šargarepa (rendana)", "1 jabuka (na kockice)", "Šaka semenki bundeve (lagano prepečenih na suvom tiganju)", "2 kašike grčkog jogurta ili kisele pavlake", "1 kašičica maslinovog ulja", "Par kapi limunovog soka", "Prstohvat soli"],
      de: ["2–3 Stangen Sellerie (fein gehackt)", "1 Karotte (gerieben)", "1 Apfel (gewürfelt)", "Eine Handvoll Kürbiskerne (leicht in der Trockenpfanne geröstet)", "2 EL griechischer Joghurt oder saure Sahne", "1 TL Olivenöl", "Ein paar Tropfen Zitronensaft", "Eine Prise Salz"],
      en: ["2–3 celery sticks (finely chopped)", "1 carrot (grated)", "1 apple (diced)", "A handful of pumpkin seeds (lightly toasted in a dry pan)", "2 tbsp Greek yogurt or sour cream", "1 tsp olive oil", "A few drops of lemon juice", "A pinch of salt"]
    },
    instructions: {
      sr: ["Pomešaj povrće i jabuku.", "Dodaj hrskave semenke bundeve.", "Umuti kremasti preliv od jogurta, ulja, limuna i soli.", "Sjedini sve i uživaj."],
      de: ["Gemüse und Apfel mischen.", "Die knusprigen Kürbiskerne hinzufügen.", "Den cremigen Dressing aus Joghurt, Öl, Zitrone und Salz anrühren.", "Alles vermengen und genießen."],
      en: ["Mix the vegetables and apple.", "Add the crunchy pumpkin seeds.", "Whisk together the creamy dressing from yogurt, oil, lemon and salt.", "Combine everything and enjoy."]
    },
    note: "Za jači obrok dodaj malo kuvane kinoe ili humusa pored salate.",
    image: "",
    category: "Osvežavajući recepti"
  },
  {
    number: "56",
    title: { sr: "Keksići sa orasima", de: "Walnussplätzchen", en: "Walnut Cookies" },
    subtitle: {
      sr: "Mekani orašasti zalogaj kao mali znak pažnje samoj sebi.",
      de: "Weiche Nuss-Häppchen als kleine Aufmerksamkeit für sich selbst.",
      en: "Soft nutty bites as a small act of kindness to yourself."
    },
    author_comment: {
      sr: "Ovi keksići mogu biti interesantna užina ili doručak koji se sprema uveče, a ujutru samo zgrabi i ponese na posao. Poslastica skoro bez šećera koja ti dozvoljava da nešto na nju namažeš — puter od kikirikija, marmeladu od borovnica ili nešto sasvim drugo!",
      de: "Diese Kekse können eine interessante Mahlzeit oder ein Frühstück sein, das abends zubereitet wird und morgens nur gegriffen und zur Arbeit mitgenommen wird. Ein Fast-Zuckerfreier Leckerbissen der es erlaubt etwas darauf zu streichen — Erdnussbutter, Blaubeerkonfitüre oder etwas ganz anderes!",
      en: "These cookies can be an interesting snack or a breakfast prepared the evening before, then just grabbed and taken to work in the morning. A near-sugar-free treat that lets you spread something on top — peanut butter, blueberry jam or something entirely different!"
    },
    prep_time: { sr: "oko 30 minuta", de: "ca. 30 Min.", en: "about 30 minutes" },
    ingredients: {
      sr: ["2 jaja", "2 kesice vanilin šećera", "100 g mlevenih oraha", "3 kašike ovsenog brašna (ili integralnog)", "½ kašičice praška za pecivo", "2 kašike otopljenog maslaca ili kokosovog ulja", "Opciono: 2 kašike sušenih brusnica ili seckane crne čokolade"],
      de: ["2 Eier", "2 Päckchen Vanillezucker", "100 g gemahlene Walnüsse", "3 EL Hafermehl (oder Vollkornmehl)", "½ TL Backpulver", "2 EL geschmolzene Butter oder Kokosöl", "Optional: 2 EL getrocknete Preiselbeeren oder gehackte dunkle Schokolade"],
      en: ["2 eggs", "2 sachets vanilla sugar", "100 g ground walnuts", "3 tbsp oat flour (or wholemeal)", "½ tsp baking powder", "2 tbsp melted butter or coconut oil", "Optional: 2 tbsp dried cranberries or chopped dark chocolate"]
    },
    instructions: {
      sr: ["Umuti jaja sa šećerom dok ne postanu penasta.", "Dodaj maslac, mlevene orahe i ovseno brašno pomešano sa praškom za pecivo.", "Lagano umešaj brusnice ili crnu čokoladu.", "Kašikom oblikuj kekse i poređaj ih na pleh obložen papirom za pečenje.", "Peci u rerni zagrejanoj na 180°C oko 12–15 minuta, dok blago ne porumene."],
      de: ["Eier mit Zucker aufschlagen bis sie schaumig sind.", "Butter, gemahlene Walnüsse und Hafermehl mit Backpulver hinzufügen.", "Preiselbeeren oder dunkle Schokolade vorsichtig einrühren.", "Mit einem Löffel Kekse formen und auf ein mit Backpapier belegtes Blech legen.", "Im auf 180°C vorgeheizten Ofen ca. 12–15 Minuten backen bis sie leicht goldbraun sind."],
      en: ["Whisk the eggs with the sugar until foamy.", "Add the butter, ground walnuts and oat flour mixed with the baking powder.", "Gently fold in the cranberries or dark chocolate.", "Shape into cookies with a spoon and place on a parchment-lined baking tray.", "Bake in an oven preheated to 180°C for about 12–15 minutes until lightly golden."]
    },
    note: "Ako voliš mekše keksiće, izvadi ih malo ranije iz rerne. Za hrskaviju varijantu produži pečenje za nekoliko minuta.",
    image: "",
    category: "Recepti uz kafu"
  }
];
