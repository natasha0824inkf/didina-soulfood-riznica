#!/usr/bin/env python3
"""Generate Didina SoulFood Riznica PDF — SR / DE / EN editions."""

import json, subprocess, os, io, base64
import weasyprint
from PIL import Image

REPO   = '/home/user/didina-soulfood-riznica'
IMGDIR = os.path.join(REPO, 'assets', 'images')
ACCENT = '#C9773A'

# ---------------------------------------------------------------------------
# 1. Load recipe data (once, shared across all editions)
# ---------------------------------------------------------------------------
raw = subprocess.run(['node', '-e', f"""
const fs = require('fs');
const c = fs.readFileSync('{REPO}/js/recipes-data.js', 'utf8');
eval(c.replace('const recipes', 'globalThis.recipes'));
console.log(JSON.stringify(globalThis.recipes));
"""], capture_output=True, text=True, check=True).stdout
recipe_by_num = {r['number']: r for r in json.loads(raw)}
print(f"Loaded {len(recipe_by_num)} recipes")

# ---------------------------------------------------------------------------
# 1b. Extra recipes (not in website data) — multilingual
# ---------------------------------------------------------------------------
EXTRA_RECIPES = {
    'Hrskava celer salata': {
        'sr': {
            'title': 'Hrskava celer salata',
            'subtitle': 'Osveženje posle posla – između ručka i večere',
            'author_comment': 'Ova salata mi je bila pravo otkriće! Idealna je kao prva pomoć posle posla, kad je napolju vruće, a treba ti nešto lagano, hrskavo i hranljivo.',
            'prep_time': '10 minuta',
            'image': None,
            'ingredients': [
                '2–3 štapića celera (sitno seckana)',
                '1 šargarepa (rendana)',
                '1 jabuka (na kockice)',
                'šaka semenki bundeve (lagano prepečenih na suvom tiganju)',
                '2 kašike grčkog jogurta',
                '1 kašičica maslinovog ulja',
                'malo ceđenog limuna',
                'prstohvat soli',
            ],
            'instructions': [
                'Pomešaj povrće i jabuku.',
                'Dodaj prepečene semenke bundeve.',
                'Umuti kremasti preliv od jogurta, ulja, limuna i soli.',
                'Sjedini sve i uživaj u salati.',
            ],
            'note': 'Za jači obrok dodaj malo humusa pored salate.',
        },
        'de': {
            'title': 'Knuspriger Sellerie-Salat',
            'subtitle': 'Erfrischung nach der Arbeit – zwischen Mittag- und Abendessen',
            'author_comment': 'Dieser Salat war eine echte Entdeckung für mich! Ideal als schnelle Stärkung nach der Arbeit, wenn es draußen heiß ist und man etwas Leichtes, Knuspriges und Nahrhaftes braucht.',
            'prep_time': '10 Minuten',
            'image': None,
            'ingredients': [
                '2–3 Stangen Sellerie (fein gehackt)',
                '1 Karotte (gerieben)',
                '1 Apfel (gewürfelt)',
                'eine Handvoll Kürbiskerne (leicht trocken geröstet)',
                '2 EL griechischer Joghurt',
                '1 TL Olivenöl',
                'etwas Zitronensaft',
                'eine Prise Salz',
            ],
            'instructions': [
                'Gemüse und Apfel mischen.',
                'Geröstete Kürbiskerne hinzufügen.',
                'Cremiges Dressing aus Joghurt, Öl, Zitrone und Salz anrühren.',
                'Alles vermengen und den Salat genießen.',
            ],
            'note': 'Für eine sättigendere Mahlzeit etwas Hummus dazu servieren.',
        },
        'en': {
            'title': 'Crunchy Celery Salad',
            'subtitle': 'Refreshment after work – between lunch and dinner',
            'author_comment': "This salad was a real discovery for me! Perfect as a quick fix after work when it's hot outside and you need something light, crunchy, and nourishing.",
            'prep_time': '10 minutes',
            'image': None,
            'ingredients': [
                '2–3 celery stalks (finely chopped)',
                '1 carrot (grated)',
                '1 apple (diced)',
                'a handful of pumpkin seeds (lightly dry-toasted)',
                '2 tbsp Greek yogurt',
                '1 tsp olive oil',
                'a little lemon juice',
                'a pinch of salt',
            ],
            'instructions': [
                'Mix the vegetables and apple.',
                'Add the toasted pumpkin seeds.',
                'Whisk a creamy dressing from yogurt, oil, lemon, and salt.',
                'Combine everything and enjoy.',
            ],
            'note': 'For a heartier meal, add a little hummus on the side.',
        },
    },
    'Dubai zalogajčići': {
        'sr': {
            'title': 'Dubai zalogajčići',
            'subtitle': 'Malo čokoladno zadovoljstvo zamišljeno kao omaž Dubai čokoladi.',
            'author_comment': 'Domaće čokoladice inspirisane jednim blagim osmehom i lakoćom kretanja.',
            'prep_time': '10 minuta + hlađenje 1–2 sata ili duže po želji',
            'image': 'assets/images/mali-coko-zalogaji.png',
            'ingredients': [
                '2–3 kašike krema od pistaća',
                '1 kašika tahinija',
                'oko dve šake seckanog kadaifa',
                'crna čokolada (70–80% kakaoa), otopljena',
            ],
            'instructions': [
                'Umešaj krem od pistaća i tahini dok ne dobiješ glatku smesu.',
                'Dodaj kadaif i pažljivo promešaj da ostane hrskavo, ali da kadaif bude zasićen kremom.',
                'Kašikom vadi male zalogaje i oblikuj ih rukama.',
                'Stavi u frižider da se stegnu oko sat vremena.',
                'Otopi čokoladu i filuj čokoladice pomoću dve viljuške.',
            ],
            'note': 'Ovi zalogaji su kao mala slatka nagrada posle treninga ili joge. Možeš ih držati u zamrzivaču i vaditi po potrebi.',
        },
        'de': {
            'title': 'Dubai-Häppchen',
            'subtitle': 'Ein kleines Schokoladenvergnügen als Hommage an die Dubai-Schokolade.',
            'author_comment': 'Hausgemachte Pralinen, inspiriert von einem sanften Lächeln und der Leichtigkeit des Augenblicks.',
            'prep_time': '10 Minuten + Kühlen 1–2 Stunden oder länger nach Wunsch',
            'image': 'assets/images/mali-coko-zalogaji.png',
            'ingredients': [
                '2–3 EL Pistaziencreme',
                '1 EL Tahini',
                'ca. zwei Handvoll gehacktes Kadayif',
                'Zartbitterschokolade (70–80% Kakao), geschmolzen',
            ],
            'instructions': [
                'Pistaziencreme und Tahini vermengen, bis eine glatte Masse entsteht.',
                'Kadayif hinzufügen und vorsichtig unterheben, damit es knusprig bleibt.',
                'Mit einem Löffel kleine Häppchen formen.',
                'Ca. eine Stunde in den Kühlschrank stellen.',
                'Schokolade schmelzen und die Happen mit zwei Gabeln überziehen.',
            ],
            'note': 'Diese Häppchen sind wie eine kleine süße Belohnung nach dem Training oder Yoga. Im Gefrierschrank aufbewahren und bei Bedarf herausnehmen.',
        },
        'en': {
            'title': 'Dubai Bites',
            'subtitle': 'A little chocolate indulgence as an ode to Dubai chocolate.',
            'author_comment': 'Homemade chocolates inspired by a gentle smile and the lightness of movement.',
            'prep_time': '10 minutes + chilling 1–2 hours or longer as desired',
            'image': 'assets/images/mali-coko-zalogaji.png',
            'ingredients': [
                '2–3 tbsp pistachio cream',
                '1 tbsp tahini',
                'about two handfuls of shredded kadaif pastry',
                'dark chocolate (70–80% cocoa), melted',
            ],
            'instructions': [
                'Mix the pistachio cream and tahini until smooth.',
                'Add the kadaif and gently fold in, keeping it crunchy.',
                'Scoop out small bites with a spoon and shape with your hands.',
                'Refrigerate for about an hour to set.',
                'Melt the chocolate and coat the bites using two forks.',
            ],
            'note': 'These bites are like a little sweet reward after a workout or yoga. Keep them in the freezer and take out as needed.',
        },
    },
    'Raznobojni namaz od avokada': {
        'sr': {
            'title': 'Raznobojni namaz od avokada',
            'subtitle': 'Kremasta svežina sa slatkastim iznenađenjem.',
            'author_comment': 'Ovaj namaz nastao je iz želje za nečim laganim, a punim života. Avokado daje mekoću i zdrave masti, crveni luk svežinu, a kukuruz tajanstvenu slatku notu.',
            'prep_time': '10 minuta',
            'image': None,
            'ingredients': [
                '1 zreo avokado',
                '2 kašike kuvanog kukuruza',
                '2 kašike sitno seckanog crvenog luka',
                '1 kašičica maslinovog ulja',
                'sok od pola limuna',
                'prstohvat soli',
                'po želji: malo sveže mlevenog bibera ili seckanog peršuna',
            ],
            'instructions': [
                'Avokado prepolovi, ukloni košticu i kašikom izvadi meso u činiju.',
                'Fino izgnječi viljuškom.',
                'Dodaj kukuruz i sitno seckani crveni luk.',
                'Umešaj maslinovo ulje, limunov sok i so.',
                'Sve lagano promešati dok se sastojci ne sjedine.',
            ],
            'note': 'Namaz je najbolji kada se posluži odmah. Može stajati nekoliko sati u frižideru pokriven folijom direktno uz površinu. Odličan uz integralni hleb, tortilje ili kao dodatak salati.',
        },
        'de': {
            'title': 'Bunter Avocado-Aufstrich',
            'subtitle': 'Cremige Frische mit einer süßen Überraschung.',
            'author_comment': 'Dieser Aufstrich entstand aus dem Wunsch nach etwas Leichtem, aber Lebhaftem. Avocado gibt Cremigkeit und gesunde Fette, Zwiebeln Frische und Mais eine geheimnisvolle süße Note.',
            'prep_time': '10 Minuten',
            'image': None,
            'ingredients': [
                '1 reife Avocado',
                '2 EL gekochter Mais',
                '2 EL fein gehackte rote Zwiebel',
                '1 TL Olivenöl',
                'Saft einer halben Zitrone',
                'eine Prise Salz',
                'nach Wunsch: etwas frisch gemahlener Pfeffer oder gehackte Petersilie',
            ],
            'instructions': [
                'Avocado halbieren, Kern entfernen und das Fruchtfleisch in eine Schüssel geben.',
                'Mit einer Gabel fein zerdrücken.',
                'Mais und fein gehackte rote Zwiebel dazugeben.',
                'Olivenöl, Zitronensaft und Salz untermengen.',
                'Alles leicht verrühren, bis die Zutaten sich verbinden.',
            ],
            'note': 'Am besten frisch servieren. Hält sich einige Stunden im Kühlschrank, abgedeckt mit Frischhaltefolie direkt auf der Oberfläche. Ausgezeichnet auf Vollkornbrot, in Tortillas oder als Salatzusatz.',
        },
        'en': {
            'title': 'Colourful Avocado Spread',
            'subtitle': 'Creamy freshness with a sweet surprise.',
            'author_comment': 'This spread was born from a desire for something light yet full of life. Avocado gives creaminess and healthy fats, red onion brings freshness, and corn adds a mysterious sweet note.',
            'prep_time': '10 minutes',
            'image': None,
            'ingredients': [
                '1 ripe avocado',
                '2 tbsp cooked corn',
                '2 tbsp finely chopped red onion',
                '1 tsp olive oil',
                'juice of half a lemon',
                'a pinch of salt',
                'optional: a little freshly ground pepper or chopped parsley',
            ],
            'instructions': [
                'Halve the avocado, remove the stone, and scoop the flesh into a bowl.',
                'Mash finely with a fork.',
                'Add the corn and finely chopped red onion.',
                'Mix in the olive oil, lemon juice, and salt.',
                'Stir gently until everything is combined.',
            ],
            'note': 'Best served immediately. Keeps for a few hours in the fridge covered with cling film pressed onto the surface. Excellent on wholegrain bread, tortillas, or as a salad topping.',
        },
    },
}

# ---------------------------------------------------------------------------
# 2. Section structure — multilingual titles
# ---------------------------------------------------------------------------
SECTIONS = [
    {
        'title': {
            'sr': 'Jutarnji recepti',
            'de': 'Morgenrezepte',
            'en': 'Morning Recipes',
        },
        'items': [
            ('1',  'Nedeljna tortilja'),
            ('6',  None),
            ('14', None),
            ('26', None),
            ('40', None),
        ],
    },
    {
        'title': {
            'sr': 'Recepti kada ne znam šta da kuvam',
            'de': 'Wenn ich nicht weiß, was ich kochen soll',
            'en': "When I Don't Know What to Cook",
        },
        'items': [
            ('15', None), ('16', None), ('17', None), ('36', None),
            ('38', None), ('41', None), ('43', None), ('7',  None),
            ('46', None), ('28', None), ('53', None), ('32', None),
        ],
    },
    {
        'title': {
            'sr': 'Osvežavajući recepti',
            'de': 'Erfrischende Rezepte',
            'en': 'Refreshing Recipes',
        },
        'items': [
            (None, 'Hrskava celer salata'),
            ('29', None),
            ('47', None),
            ('52', 'Detoks salata sa narom'),
            ('10', 'Tunin obrok za pun stomak i bistru glavu'),
            ('45', 'Salata sa rukolom, fetom i orasima'),
            ('30', None),
            ('4',  None),
        ],
    },
    {
        'title': {
            'sr': 'Recepti koji mirišu iz rerne',
            'de': 'Aus dem Ofen',
            'en': 'From the Oven',
        },
        'items': [
            ('12', None), ('25', None), ('49', None), ('8',  None),
            ('44', 'Šumska pita'), ('51', None), ('31', None),
        ],
    },
    {
        'title': {
            'sr': 'Recepti uz kafu',
            'de': 'Zum Kaffee',
            'en': 'With Coffee',
        },
        'items': [
            (None, 'Dubai zalogajčići'),
            ('11', 'Kremasti sutlijaš'),
            ('35', None), ('37', None), ('33', None),
            ('48', None), ('50', None), ('9',  None),
        ],
    },
    {
        'title': {
            'sr': 'Recepti koji se mažu',
            'de': 'Aufstriche & Dips',
            'en': 'Spreads & Dips',
        },
        'items': [
            ('39', 'Domaći humus'),
            ('42', 'Proteinski namaz'),
            ('54', None),
            (None, 'Raznobojni namaz od avokada'),
        ],
    },
]

# ---------------------------------------------------------------------------
# 3. Per-language UI strings
# ---------------------------------------------------------------------------
LANG_STRINGS = {
    'sr': {
        'book_title':        'Didina SoulFood Riznica',
        'book_subtitle':     '44 recepta iz srca kuhinje',
        'cover_quote':       'Ne brojite kalorije, brojite vaše osmehe i korake.',
        'ingredients':       'Sastojci',
        'preparation':       'Priprema',
        'note_label':        'Napomena',
        'recipe_prefix':     'Recept',
        'extra_recipe_label': 'Bonus recept',
        'prep_time_label':   'Vreme pripreme',
        'toc_heading':       'Sadržaj',
        'toc_bonus_section': 'Bonus',
        'bonus_num_label':   'Bonus recept – jelo od samo jednog sastojka',
        'bonus_title':       'Ukusni prokelj iz rerne',
        'bonus_subtitle':    'Dovoljan je samo jedan sastojak i malo kreativnosti pa da i najskromnije povrće postane zvezda stola.',
        'bonus_prep_time':   '30 minuta',
        'bonus_comment':     'Prokelj često ima lošu reputaciju, ali kada se pravilno pripremi u rerni postaje hrskav spolja, a mekan iznutra.',
        'bonus_ingredients': [
            '10-ak glavica proklja',
            'malo maslinovog ulja',
            'so',
            'aleva paprika',
        ],
        'bonus_instructions': [
            'Prokelj operi, ukloni peteljke i prve listiće uz peteljku.',
            'Svaku glavicu prepolovi po dužini.',
            'Polutke kratko prokuvaj u vodi 2–3 minuta, zatim ocedi.',
            'Poređaj prokelj ravnom stranom na pleh obložen papirom za pečenje.',
            'Prelij sa malo maslinovog ulja, posoli i dodaj alevu papriku po ukusu.',
            'Mali trik: blago pritisni svaku polutku da pusti višak vode i dobije hrskaviju koricu.',
            'Peci u rerni zagrejanoj na 180°C oko 20 minuta, dok prokelj ne porumeni.',
        ],
        'bonus_note':     'Odlično ide kao prilog uz meso ili ribu, ali i kao mali topli zalogaj uz čašu vina.',
        'bonus_closing':  'Za kraj ove male riznice – jedno skromno povrće koje nas podseća da se prava čar kuvanja često krije u jednostavnosti.',
    },
    'de': {
        'book_title':        'Didina SoulFood Schatzkiste',
        'book_subtitle':     '44 Rezepte aus dem Herzen der Küche',
        'cover_quote':       'Zählt keine Kalorien — zählt eure Lächeln und Schritte.',
        'ingredients':       'Zutaten',
        'preparation':       'Zubereitung',
        'note_label':        'Hinweis',
        'recipe_prefix':     'Rezept',
        'extra_recipe_label': 'Bonus-Rezept',
        'prep_time_label':   'Zubereitungszeit',
        'toc_heading':       'Inhaltsverzeichnis',
        'toc_bonus_section': 'Bonus',
        'bonus_num_label':   'Bonus-Rezept – ein Gericht aus nur einer Zutat',
        'bonus_title':       'Köstlicher Rosenkohl aus dem Ofen',
        'bonus_subtitle':    'Es braucht nur eine Zutat und ein bisschen Kreativität, damit auch das bescheidenste Gemüse zum Star des Tisches wird.',
        'bonus_prep_time':   '30 Minuten',
        'bonus_comment':     'Rosenkohl hat oft einen schlechten Ruf, aber richtig im Ofen zubereitet wird er außen knusprig und innen zart.',
        'bonus_ingredients': [
            'ca. 10 Rosenkohlköpfchen',
            'etwas Olivenöl',
            'Salz',
            'Paprikapulver',
        ],
        'bonus_instructions': [
            'Rosenkohl waschen, Stiele und die äußeren Blätter entfernen.',
            'Jeden Kopf der Länge nach halbieren.',
            'Die Hälften 2–3 Minuten in Wasser blanchieren, dann abtropfen lassen.',
            'Den Rosenkohl mit der flachen Seite auf ein mit Backpapier ausgelegtes Backblech legen.',
            'Mit etwas Olivenöl beträufeln, salzen und nach Geschmack mit Paprikapulver würzen.',
            'Kleiner Trick: Jede Hälfte leicht andrücken, damit überschüssiges Wasser austritt und die Kruste knuspriger wird.',
            'Im auf 180°C vorgeheizten Ofen ca. 20 Minuten backen, bis der Rosenkohl gebräunt ist.',
        ],
        'bonus_note':     'Hervorragend als Beilage zu Fleisch oder Fisch, aber auch als kleiner warmer Imbiss zu einem Glas Wein.',
        'bonus_closing':  'Zum Abschluss dieser kleinen Schatzkiste – ein bescheidenes Gemüse, das uns daran erinnert, dass der wahre Zauber des Kochens oft in der Einfachheit liegt.',
    },
    'en': {
        'book_title':        "Didi's SoulFood Treasury",
        'book_subtitle':     '44 Recipes from the Heart of the Kitchen',
        'cover_quote':       "Don't count calories — count your smiles and steps.",
        'ingredients':       'Ingredients',
        'preparation':       'Preparation',
        'note_label':        'Note',
        'recipe_prefix':     'Recipe',
        'extra_recipe_label': 'Bonus recipe',
        'prep_time_label':   'Prep time',
        'toc_heading':       'Table of Contents',
        'toc_bonus_section': 'Bonus',
        'bonus_num_label':   'Bonus recipe – a dish from just one ingredient',
        'bonus_title':       'Delicious Oven-Roasted Brussels Sprouts',
        'bonus_subtitle':    'It takes just one ingredient and a little creativity to turn even the humblest vegetable into the star of the table.',
        'bonus_prep_time':   '30 minutes',
        'bonus_comment':     'Brussels sprouts often have a bad reputation, but when properly roasted in the oven they become crispy on the outside and tender inside.',
        'bonus_ingredients': [
            'about 10 Brussels sprout heads',
            'a little olive oil',
            'salt',
            'paprika powder',
        ],
        'bonus_instructions': [
            'Wash the sprouts, remove the stems and the outermost leaves.',
            'Halve each head lengthwise.',
            'Briefly blanch the halves in boiling water for 2–3 minutes, then drain.',
            'Place the sprouts flat-side down on a baking tray lined with parchment paper.',
            'Drizzle with a little olive oil, season with salt and paprika to taste.',
            'Little trick: gently press each half to release excess water and get a crispier crust.',
            'Bake in an oven preheated to 180°C for about 20 minutes, until golden brown.',
        ],
        'bonus_note':     'Excellent as a side dish with meat or fish, or as a small warm snack with a glass of wine.',
        'bonus_closing':  'To close this little treasury – one humble vegetable reminding us that the true magic of cooking often lies in simplicity, and that less is very often – more!',
    },
}

# ---------------------------------------------------------------------------
# 4. Intro and final page HTML bodies per language
# ---------------------------------------------------------------------------
INTRO_BODY = {
    'sr': """
<h2 class="intro-title">Uvod u Didinu SoulFood Riznicu</h2>
<div class="intro-text">
  <p>Dobrodošla u moju kuhinju, gde se kuva srcem i zadovoljnim stomakom!</p>
  <p>Ova riznica nije nastala preko noći &#8212; nego kroz mnoga nedeljna jutra kada sam posebno inspirisana da kuvam, tihe večeri uz šolju čaja, osmehe iz rerne, i poneki eksperiment koji se nikad više nije ponovio (pozdrav slanom kolaču od cvekle!).</p>
  <p>Zovem se Didi. Volim da kuvam, ali još više volim da spremam hranu koja teši, hrani i smeška se iznutra.</p>
  <p>Ovi recepti nisu samo za stomak &#8212; oni su za dan kad ti treba mir, za tihe trenutke uz kafu ili kad ne znaš šta da pojedeš, a ne želiš baš ni da dodaš neko kilce.</p>
  <hr class="div"/>
  <p>Ovde nećeš naći komplikovane korake. Samo stvarne zalogaje &#8212; inspirisane sportom, jogom, letom, morem i onom večitom potrebom da svemu dodam šaku oraha. Svi recepti su sa biljnim mlekom i pogodni za netolerante na laktozu, ali je moguće praviti i sa običnim mlekom ukoliko Vam se više sviđa.</p>
  <p>U ovoj riznici se nalaze recepti koji su deo mog ritma, moje kuhinje iz čiste radosti kuvanja.</p>
  <p>Cela knjiga pisana je u ženskom rodu, kao da se obraćam ženama, ali svi muški čitaoci i entuzijastični kuvari su dobrodošli da nam se pridruže na ovom putovanju.</p>
  <p>Ako ti neka od mojih ideja dotakne srce (ili stomak) &#8212; svrati ponovo. Uvek ima još!</p>
  <p>I da znaš: sve fotografije u ovoj knjizi nastale su bukvalno sekund pre nego što sam ja (ili neko od ukućana) zgrabila kašiku i bacila se na degustaciju!</p>
  <p>Ovo nije kuvar iz studija nego iz života. Sve je poteklo iz moje kuhinje i lične kreativnosti. Uživajte u čitanju i isprobavanju!</p>
</div>
<p class="sign-off">S ljubavlju,<br/>Didi &#127819;&#127807;</p>""",

    'de': """
<h2 class="intro-title">Einleitung</h2>
<div class="intro-text">
  <p>Willkommen in meiner Küche, wo mit Herz und glücklichem Bauch gekocht wird!</p>
  <p>Diese Schatzkiste entstand nicht über Nacht &#8212; sondern durch viele Sonntagmorgen, an denen ich besonders inspiriert war zu kochen, stille Abende mit einer Tasse Tee, Düfte aus dem Ofen und das eine oder andere Experiment, das sich nie wiederholt hat (Grüße an den salzigen Rübenkuchen!).</p>
  <p>Ich heiße Didi. Ich liebe es zu kochen, aber noch mehr liebe ich es, Essen zuzubereiten, das tröstet, nährt und von innen heraus zum Lächeln bringt.</p>
  <p>Diese Rezepte sind nicht nur für den Bauch &#8212; sie sind für den Tag, an dem man Ruhe braucht, für stille Momente beim Kaffee oder wenn man nicht weiß, was man essen soll, aber keine Extrapfunde ansetzen möchte.</p>
  <hr class="div"/>
  <p>Hier gibt es keine komplizierten Schritte. Nur echte Häppchen &#8212; inspiriert von Sport, Yoga, Sommer, Meer und dem ewigen Drang, allem eine Handvoll Nüsse hinzuzufügen. Alle Rezepte sind mit Pflanzenmilch zubereitet und für Laktoseintolerante geeignet, können aber auch mit normaler Milch gemacht werden.</p>
  <p>In dieser Schatzkiste finden sich Rezepte, die Teil meines Alltags sind &#8212; aus reiner Freude am Kochen.</p>
  <p>Das gesamte Buch ist in der weiblichen Form geschrieben, aber alle Leser und begeisterten Köche sind herzlich eingeladen, sich uns auf dieser Reise anzuschließen.</p>
  <p>Wenn eine meiner Ideen das Herz (oder den Bauch) berührt &#8212; komm wieder! Es gibt immer mehr!</p>
  <p>Und weißt du was: Alle Fotos in diesem Buch entstanden buchstäblich eine Sekunde, bevor ich (oder jemand aus dem Haushalt) den Löffel gegriffen und mit der Verkostung begonnen hat!</p>
  <p>Das ist kein Kochbuch aus dem Studio, sondern aus dem Leben. Alles stammt aus meiner Küche und meiner persönlichen Kreativität. Viel Spaß beim Lesen und Ausprobieren!</p>
</div>
<p class="sign-off">Mit Liebe,<br/>Didi &#127819;&#127807;</p>""",

    'en': """
<h2 class="intro-title">Introduction</h2>
<div class="intro-text">
  <p>Welcome to my kitchen, where cooking is done with heart and a happy belly!</p>
  <p>This treasury didn't happen overnight &#8212; it grew through many Sunday mornings when I felt especially inspired to cook, quiet evenings with a cup of tea, the smells drifting from the oven, and the occasional experiment that never happened again (a salute to the salty beet cake!).</p>
  <p>My name is Didi. I love cooking, but even more I love preparing food that comforts, nourishes, and brings a smile from the inside out.</p>
  <p>These recipes aren't just for your stomach &#8212; they're for the day you need some calm, for quiet coffee moments, or for when you don't know what to eat but don't want to put on extra weight either.</p>
  <hr class="div"/>
  <p>No complicated steps here. Just real bites &#8212; inspired by sport, yoga, summer, the sea, and the constant urge to add a handful of nuts to everything. All recipes use plant-based milk and are suitable for the lactose intolerant, but can easily be made with regular milk.</p>
  <p>In this treasury you'll find recipes that are part of my rhythm &#8212; born of pure joy in cooking.</p>
  <p>The whole book is written in the feminine form, as if addressing women, but all readers and enthusiastic cooks are warmly welcome to join us on this journey.</p>
  <p>If any of my ideas touches your heart (or your stomach) &#8212; come back. There's always more!</p>
  <p>And know this: every photo in this book was taken literally one second before I (or someone from the household) grabbed the spoon and dove into tasting!</p>
  <p>This is not a studio cookbook &#8212; it's from life. Everything comes from my kitchen and my personal creativity. Enjoy the reading and the cooking!</p>
</div>
<p class="sign-off">With love,<br/>Didi &#127819;&#127807;</p>""",
}

FINAL_BODY = {
    'sr': """
<h2 class="intro-title">Na kraju&#8230;</h2>
<div class="intro-text">
  <p>Ovo nije knjiga o dijetama.</p>
  <p>Nema kalorijsih tablica, brojanja porcija, zabrana i grižje savesti.<br/>
  Ovo je kuvar i poziv da voliš sebe kroz hranu.</p>
  <p>Recepti koje si ovde pronašla nisu niskokalorični, ali su <strong>nežno izbalansirani</strong>, baš kao i život koji želiš da živiš.</p>
  <p>Hrana je tu da nas nahrani, umiri, obraduje i podsteti: kad se krećeš, dišeš, smeješ i voliš &#8212; sve drugo dođe na svoje mesto.</p>
  <p>I zapamti: šta god da se u ovom trenutku dešava, sve na kraju ispadne dobro!</p>
  <hr class="div"/>
  <p><strong>Ne broji kalorije.<br/>Broji osmehe. Korake. Lepe zalogaje.</strong></p>
  <p><strong>Vežbaj i uživaj u trenucima i malim, jednostavnim stvarima. Nasmeši se bez razloga.</strong></p>
  <hr class="div"/>
  <p>Hvala ti što si kuvala sa mnom.<br/>
  Ova knjiga je možda gotova, ali tvoja kuhinjska avantura tek počinje.</p>
</div>
<p class="sign-off">Iz jedne male kuhinje i sa puno ljubavi,<br/><br/>Didi<br/><br/>Bremen, proleće 2026.</p>""",

    'de': """
<h2 class="intro-title">Zum Schluss&#8230;</h2>
<div class="intro-text">
  <p>Das ist kein Buch über Diäten.</p>
  <p>Keine Kalorientabellen, kein Zählen von Portionen, keine Verbote und kein schlechtes Gewissen.<br/>
  Das ist ein Kochbuch und eine Einladung, sich selbst durch Essen zu lieben.</p>
  <p>Die Rezepte, die du hier gefunden hast, sind nicht kalorienarm, aber <strong>sanft ausgewogen</strong> &#8212; genau wie das Leben, das du leben möchtest.</p>
  <p>Essen ist dazu da, uns zu nähren, zu beruhigen, zu erfreuen und zu erinnern: Wenn du dich bewegst, atmest, lachst und liebst &#8212; fällt alles andere an seinen Platz.</p>
  <p>Und denke daran: Was auch immer gerade passiert &#8212; am Ende wird alles gut!</p>
  <hr class="div"/>
  <p><strong>Zähl keine Kalorien.<br/>Zähl Lächeln. Schritte. Schöne Häppchen.</strong></p>
  <p><strong>Beweg dich und genieße die Momente und die kleinen, einfachen Dinge. Lächle einfach so.</strong></p>
  <hr class="div"/>
  <p>Danke, dass du mit mir gekocht hast.<br/>
  Dieses Buch ist vielleicht fertig, aber dein Küchenabenteuer hat gerade erst begonnen.</p>
</div>
<p class="sign-off">Aus einer kleinen Küche und mit viel Liebe,<br/><br/>Didi<br/><br/>Bremen, Frühling 2026.</p>""",

    'en': """
<h2 class="intro-title">In closing&#8230;</h2>
<div class="intro-text">
  <p>This is not a book about diets.</p>
  <p>No calorie tables, no counting portions, no prohibitions, and no guilt.<br/>
  This is a cookbook and an invitation to love yourself through food.</p>
  <p>The recipes you've found here aren't low-calorie, but they are <strong>gently balanced</strong> &#8212; just like the life you want to live.</p>
  <p>Food is here to nourish us, calm us, delight us, and remind us: when you move, breathe, laugh, and love &#8212; everything else falls into place.</p>
  <p>And remember: whatever is happening right now &#8212; it all works out in the end!</p>
  <hr class="div"/>
  <p><strong>Don't count calories.<br/>Count smiles. Steps. Beautiful bites.</strong></p>
  <p><strong>Exercise and enjoy the moments and the small, simple things. Smile for no reason.</strong></p>
  <hr class="div"/>
  <p>Thank you for cooking with me.<br/>
  This book may be finished, but your kitchen adventure is just beginning.</p>
</div>
<p class="sign-off">From a small kitchen, with lots of love,<br/><br/>Didi<br/><br/>Bremen, spring 2026.</p>""",
}

# ---------------------------------------------------------------------------
# 5. Helpers
# ---------------------------------------------------------------------------
def esc(s):
    if not s: return ''
    return (s.replace('&', '&amp;').replace('<', '&lt;')
             .replace('>', '&gt;').replace('"', '&quot;'))

def img_b64(path, max_w=480, max_h=300):
    with Image.open(path) as im:
        if im.mode not in ('RGB', 'L'):
            im = im.convert('RGB')
        im.thumbnail((max_w, max_h), Image.LANCZOS)
        buf = io.BytesIO()
        im.save(buf, format='JPEG', quality=82, optimize=True)
        return base64.b64encode(buf.getvalue()).decode()

def get_recipe_title(lang, num, display_title_sr, data):
    """Return the recipe title in the given language."""
    extra_key = display_title_sr if num is None else None
    if extra_key:
        extra = EXTRA_RECIPES.get(extra_key, {})
        lang_data = extra.get(lang) or extra.get('sr', {})
        return lang_data.get('title', display_title_sr)
    if data:
        title_field = data.get('title', {})
        if isinstance(title_field, dict):
            return title_field.get(lang) or title_field.get('sr') or display_title_sr or ''
        return str(title_field) or display_title_sr or ''
    return display_title_sr or ''

def recipe_html(lang, ls, num, display_title_sr, data):
    """Build HTML block for one recipe, localised to lang."""
    extra_key  = display_title_sr if num is None else None
    extra_lang = EXTRA_RECIPES.get(extra_key, {}).get(lang) if extra_key else None
    extra_sr   = EXTRA_RECIPES.get(extra_key, {}).get('sr')  if extra_key else None

    note_translated = False

    if extra_lang:
        title    = extra_lang.get('title', display_title_sr)
        subtitle = extra_lang.get('subtitle', '')
        comment  = extra_lang.get('author_comment', '')
        prep     = extra_lang.get('prep_time', '')
        ingrs    = extra_lang.get('ingredients', [])
        steps    = extra_lang.get('instructions', [])
        note     = extra_lang.get('note', '') or ''
        img_path = extra_lang.get('image') or ''
        note_translated = True
    elif extra_sr:
        title    = extra_sr.get('title', display_title_sr)
        subtitle = extra_sr.get('subtitle', '')
        comment  = extra_sr.get('author_comment', '')
        prep     = extra_sr.get('prep_time', '')
        ingrs    = extra_sr.get('ingredients', [])
        steps    = extra_sr.get('instructions', [])
        note     = extra_sr.get('note', '') or ''
        img_path = extra_sr.get('image') or ''
    else:
        def gv(field, default=''):
            v = data.get(field, {})
            if isinstance(v, dict):
                return v.get(lang) or v.get('sr') or default
            return v or default

        if lang == 'sr' and display_title_sr:
            title = display_title_sr
        else:
            title = gv('title') or display_title_sr or ''

        subtitle = gv('subtitle')
        comment  = gv('author_comment')
        prep     = gv('prep_time')
        ingrs    = gv('ingredients', [])
        steps    = gv('instructions', [])
        note     = (data.get('note', '') or '').strip()
        img_path = data.get('image', '') or ''
        note_translated = (lang == 'sr')

    img_tag = ''
    if img_path:
        full = os.path.join(REPO, img_path)
        if os.path.exists(full):
            b64 = img_b64(full)
            img_tag = (f'<img src="data:image/jpeg;base64,{b64}" '
                       f'class="recipe-img" alt="{esc(title)}"/>')

    ingr_li      = ''.join(f'<li>{esc(i)}</li>' for i in ingrs if i)
    step_li      = ''.join(f'<li>{esc(s)}</li>' for s in steps if s)
    note_html    = (f'<div class="note"><strong>{ls["note_label"]}:</strong> {esc(note)}</div>'
                    if note and note_translated else '')
    comment_html = f'<p class="comment">{esc(comment)}</p>' if comment.strip() else ''
    prep_html    = (f'<p class="prep">&#9202; {ls["prep_time_label"]}: {esc(prep)}</p>'
                    if prep else '')
    num_label    = f'{ls["recipe_prefix"]} #{num}' if num else ls['extra_recipe_label']

    parts = [
        '<div class="recipe">',
        f'<h2 class="r-title">{esc(title)}</h2>',
        f'<p class="recipe-num">{num_label}</p>',
    ]
    if subtitle:       parts.append(f'<p class="r-sub">{esc(subtitle)}</p>')
    if comment.strip(): parts.append(comment_html)
    if prep:           parts.append(prep_html)
    if img_tag:        parts.append(img_tag)
    parts += [
        f'<h3 class="sh">{ls["ingredients"]}</h3>',
        f'<ul>{ingr_li}</ul>',
        f'<h3 class="sh">{ls["preparation"]}</h3>',
        f'<ol>{step_li}</ol>',
        note_html,
        '</div>',
    ]
    return '\n'.join(parts)

# ---------------------------------------------------------------------------
# 6. CSS (accent colour matches website palette)
# ---------------------------------------------------------------------------
CSS = ("""
@page {
  size: A5;
  margin: 2cm 2cm 2.5cm 2cm;
  @bottom-center {
    content: counter(page);
    font-size: 9pt;
    color: """ + ACCENT + """;
  }
}
@page cover { margin: 0; @bottom-center { content: none; } }
body {
  font-family: Georgia, 'Times New Roman', serif;
  font-size: 10.5pt;
  line-height: 1.7;
  color: #1a1a1a;
}
.cover-page {
  page: cover;
  width: 100vw; height: 100vh;
  display: flex; align-items: center; justify-content: center;
  text-align: center;
  page-break-after: always;
}
.cover-inner {
  border: 3px solid """ + ACCENT + """;
  padding: 3em 2.5em;
  max-width: 80%;
}
.cover-title {
  font-size: 22pt;
  color: """ + ACCENT + """;
  font-style: italic;
  margin: 0 0 0.3em;
  line-height: 1.3;
}
.cover-sub   { font-size: 11pt; color: #555; font-style: italic; margin: 0 0 1.5em; }
.cover-quote {
  font-size: 10pt; color: """ + ACCENT + """; font-style: italic;
  border-top: 1px solid """ + ACCENT + """;
  border-bottom: 1px solid """ + ACCENT + """;
  padding: 0.6em 0; margin: 1em 0;
}
.cover-author { font-size: 12pt; font-weight: bold; color: """ + ACCENT + """; margin-top: 1em; }
.text-page, .sec-page { page-break-before: always; }
h2.sec-title {
  font-size: 18pt; color: """ + ACCENT + """; font-style: italic;
  text-align: center;
  border-bottom: 2px solid """ + ACCENT + """;
  padding-bottom: 0.4em; margin: 0.5em 0 1em;
}
h2.intro-title {
  font-size: 15pt; color: """ + ACCENT + """; font-style: italic;
  border-bottom: 2px solid """ + ACCENT + """;
  padding-bottom: 0.3em; margin-bottom: 1em;
}
h2.toc-title {
  font-size: 15pt; color: """ + ACCENT + """; font-style: italic;
  border-bottom: 2px solid """ + ACCENT + """;
  padding-bottom: 0.3em; margin-bottom: 1em;
}
.intro-text p { margin: 0.45em 0; text-align: justify; }
.sign-off     { margin-top: 1.5em; font-style: italic; color: """ + ACCENT + """; }
.toc-sec {
  font-weight: bold; color: """ + ACCENT + """;
  margin: 0.8em 0 0.2em; font-size: 9pt;
  text-transform: uppercase; letter-spacing: 0.06em;
}
.toc-item { margin: 0.15em 0 0.15em 1em; font-size: 9.5pt; }
.toc-num  { color: """ + ACCENT + """; font-weight: bold; }
.recipe   { page-break-before: always; }
h2.r-title {
  font-size: 16pt; color: """ + ACCENT + """; font-style: italic;
  margin: 0 0 0.15em; page-break-after: avoid; line-height: 1.3;
}
.recipe-num {
  font-size: 8pt; font-weight: bold; color: """ + ACCENT + """;
  text-transform: uppercase; letter-spacing: 0.08em; margin: 0 0 0.3em;
}
.r-sub   { font-style: italic; color: #555; font-size: 9.5pt; margin: 0.2em 0 0.5em; }
.comment {
  font-style: italic; color: #444;
  border-left: 3px solid """ + ACCENT + """;
  padding: 0.2em 0.6em; margin: 0.4em 0 0.5em; font-size: 9.5pt;
}
.prep {
  display: inline-block; background: #f5eaf5; color: """ + ACCENT + """;
  padding: 0.15em 0.6em; border-radius: 12px; font-size: 9pt; margin: 0.3em 0 0.4em;
}
.recipe-img {
  display: block; max-width: 80%; max-height: 180px;
  margin: 0.5em auto; border-radius: 4px;
}
h3.sh {
  font-size: 8pt; font-weight: bold; color: """ + ACCENT + """;
  text-transform: uppercase; letter-spacing: 0.07em;
  margin: 0.8em 0 0.2em; page-break-after: avoid;
}
ul, ol { padding-left: 1.3em; margin: 0.1em 0 0.4em; }
li     { margin: 0.15em 0; font-size: 9.5pt; }
.note {
  background: #faf0f8; border-left: 3px solid """ + ACCENT + """;
  padding: 0.3em 0.6em; font-size: 9pt; margin-top: 0.7em;
}
hr, hr.div { border: none; border-top: 1px solid #d4a0d4; margin: 1em 0; }
p { margin: 0.5em 0; }
""")

# ---------------------------------------------------------------------------
# 7. Build one PDF edition
# ---------------------------------------------------------------------------
def build_pdf(lang):
    ls = LANG_STRINGS[lang]
    pages = []

    # Cover
    pages.append(f'''
<div class="cover-page">
  <div class="cover-inner">
    <h1 class="cover-title">{esc(ls["book_title"])}</h1>
    <p class="cover-sub">{esc(ls["book_subtitle"])}</p>
    <p class="cover-quote">{esc(ls["cover_quote"])}</p>
    <p class="cover-author">Dragana Stamenković</p>
  </div>
</div>''')

    # Intro
    pages.append(f'<div class="text-page">{INTRO_BODY[lang]}</div>')

    # Table of contents
    toc = [f'<div class="text-page"><h2 class="toc-title">{ls["toc_heading"]}</h2>']
    for sec in SECTIONS:
        sec_title = sec['title'][lang]
        toc.append(f'<p class="toc-sec">{esc(sec_title)}</p>')
        for num, display_title_sr in sec['items']:
            data  = recipe_by_num.get(num) if num else None
            title = get_recipe_title(lang, num, display_title_sr, data)
            num_str = f'#{num}' if num else '&#9733;'
            toc.append(f'<p class="toc-item"><span class="toc-num">{num_str}</span> {esc(title)}</p>')
    toc.append(f'<p class="toc-sec">{ls["toc_bonus_section"]}</p>')
    toc.append(f'<p class="toc-item"><span class="toc-num">&#9733;</span> {esc(ls["bonus_title"])}</p>')
    toc.append('</div>')
    pages.append('\n'.join(toc))

    # Sections + recipes
    for sec in SECTIONS:
        sec_title = sec['title'][lang]
        pages.append(f'<div class="sec-page"><h2 class="sec-title">{esc(sec_title)}</h2></div>')
        for num, display_title_sr in sec['items']:
            data = recipe_by_num.get(num) if num else None
            pages.append(recipe_html(lang, ls, num, display_title_sr, data))
            title = get_recipe_title(lang, num, display_title_sr, data)
            print(f'  #{num or "?"} {title}')

    # Bonus recipe
    bonus_img_tag = ''
    bonus_path = os.path.join(IMGDIR, 'ukusni-prokelj-iz-rerne.png')
    if os.path.exists(bonus_path):
        b64 = img_b64(bonus_path)
        bonus_img_tag = (f'<img src="data:image/jpeg;base64,{b64}" '
                         f'class="recipe-img" alt="{esc(ls["bonus_title"])}"/>')

    bonus_ingr_li  = ''.join(f'<li>{esc(i)}</li>' for i in ls['bonus_ingredients'])
    bonus_steps_li = ''.join(f'<li>{esc(s)}</li>' for s in ls['bonus_instructions'])

    pages.append(f'''<div class="recipe">
  <h2 class="r-title">{esc(ls["bonus_title"])}</h2>
  <p class="recipe-num">{esc(ls["bonus_num_label"])}</p>
  <p class="r-sub">{esc(ls["bonus_subtitle"])}</p>
  <p class="comment">{esc(ls["bonus_comment"])}</p>
  <p class="prep">&#9202; {ls["prep_time_label"]}: {esc(ls["bonus_prep_time"])}</p>
  {bonus_img_tag}
  <h3 class="sh">{ls["ingredients"]}</h3>
  <ul>{bonus_ingr_li}</ul>
  <h3 class="sh">{ls["preparation"]}</h3>
  <ol>{bonus_steps_li}</ol>
  <div class="note"><strong>{ls["note_label"]}:</strong> {esc(ls["bonus_note"])}</div>
  <p><em>{esc(ls["bonus_closing"])}</em></p>
</div>''')

    # Final word
    pages.append(f'<div class="text-page">{FINAL_BODY[lang]}</div>')

    # Render
    full_html = (f'<!DOCTYPE html><html lang="{lang}"><head>'
                 f'<meta charset="utf-8"/>'
                 f'<title>{esc(ls["book_title"])}</title>'
                 f'<style>{CSS}</style></head><body>'
                 + '\n'.join(pages) + '</body></html>')

    output = os.path.join(REPO, 'sources', f'Didina_SoulFood_Riznica_{lang.upper()}.pdf')
    os.makedirs(os.path.dirname(output), exist_ok=True)
    weasyprint.HTML(string=full_html, base_url=REPO).write_pdf(output)
    size_mb = os.path.getsize(output) / 1024 / 1024
    print(f"Done! {output}  ({size_mb:.1f} MB)")

# ---------------------------------------------------------------------------
# 8. Generate all three editions
# ---------------------------------------------------------------------------
for lang in ['sr', 'de', 'en']:
    print(f"\n{'='*52}\nBuilding {lang.upper()} PDF edition\n{'='*52}")
    build_pdf(lang)
