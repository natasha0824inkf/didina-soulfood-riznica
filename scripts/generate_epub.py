#!/usr/bin/env python3
"""Generate Didina SoulFood Riznica EPUB — SR / DE / EN editions."""

import json, subprocess, os, io
from ebooklib import epub
from PIL import Image, ImageDraw, ImageFont

FONT_SERIF_BOLD   = '/usr/share/fonts/truetype/freefont/FreeSerifBold.ttf'
FONT_SERIF_REG    = '/usr/share/fonts/truetype/freefont/FreeSerif.ttf'
FONT_SERIF_ITALIC = '/usr/share/fonts/truetype/freefont/FreeSerifItalic.ttf'

def ttf(path, size):
    return ImageFont.truetype(path, size)

REPO   = '/home/user/didina-soulfood-riznica'
IMGDIR = os.path.join(REPO, 'assets', 'images')

# ---------------------------------------------------------------------------
# 1. Load recipe data via Node (once, shared across all editions)
# ---------------------------------------------------------------------------
raw = subprocess.run(['node', '-e', f'''
const fs = require('fs');
const c = fs.readFileSync('{REPO}/js/recipes-data.js', 'utf8');
eval(c.replace('const recipes', 'globalThis.recipes'));
console.log(JSON.stringify(globalThis.recipes));
'''], capture_output=True, text=True, check=True).stdout
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
            'note': 'Ovi zalogaji su kao mala slatka nagrada posle treninga ili joge, bez osećaja prejedanja. Možeš ih držati u zamrzivaču i vaditi po potrebi.',
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
        'file': 'sec1',
        'items': [
            ('1',    'Nedeljna tortilja'),
            ('6',    None),
            ('14',   None),
            ('26',   None),
            ('40',   None),
        ],
    },
    {
        'title': {
            'sr': 'Recepti kada ne znam šta da kuvam',
            'de': 'Wenn ich nicht weiß, was ich kochen soll',
            'en': "When I Don't Know What to Cook",
        },
        'file': 'sec2',
        'items': [
            ('15',   None),
            ('16',   None),
            ('17',   None),
            ('36',   None),
            ('38',   None),
            ('41',   None),
            ('43',   None),
            ('7',    None),
            ('46',   None),
            ('28',   None),
            ('53',   None),
            ('32',   None),
        ],
    },
    {
        'title': {
            'sr': 'Osvežavajući recepti',
            'de': 'Erfrischende Rezepte',
            'en': 'Refreshing Recipes',
        },
        'file': 'sec3',
        'items': [
            (None,   'Hrskava celer salata'),
            ('29',   None),
            ('47',   None),
            ('52',   'Detoks salata sa narom'),
            ('10',   'Tunin obrok za pun stomak i bistru glavu'),
            ('45',   'Salata sa rukolom, fetom i orasima'),
            ('30',   None),
            ('4',    None),
        ],
    },
    {
        'title': {
            'sr': 'Recepti koji mirišu iz rerne',
            'de': 'Aus dem Ofen',
            'en': 'From the Oven',
        },
        'file': 'sec4',
        'items': [
            ('12',   None),
            ('25',   None),
            ('49',   None),
            ('8',    None),
            ('44',   'Šumska pita'),
            ('51',   None),
            ('31',   None),
        ],
    },
    {
        'title': {
            'sr': 'Recepti uz kafu',
            'de': 'Zum Kaffee',
            'en': 'With Coffee',
        },
        'file': 'sec5',
        'items': [
            (None,   'Dubai zalogajčići'),
            ('11',   'Kremasti sutlijaš'),
            ('35',   None),
            ('37',   None),
            ('33',   None),
            ('48',   None),
            ('50',   None),
            ('9',    None),
        ],
    },
    {
        'title': {
            'sr': 'Recepti koji se mažu',
            'de': 'Aufstriche & Dips',
            'en': 'Spreads & Dips',
        },
        'file': 'sec6',
        'items': [
            ('39',   'Domaći humus'),
            ('42',   'Proteinski namaz'),
            ('54',   None),
            (None,   'Raznobojni namaz od avokada'),
        ],
    },
]

# ---------------------------------------------------------------------------
# 3. Per-language UI strings
# ---------------------------------------------------------------------------
LANG_STRINGS = {
    'sr': {
        'book_title':          'Didina SoulFood Riznica',
        'book_subtitle':       '44 recepta iz srca kuhinje',
        'tagline':             'recepti za svaki dan',
        'cover_line1':         'Didina',
        'cover_line3':         'R I Z N I C A',
        'identifier':          'didina-soulfood-riznica-2026-sr',
        'cover_page_title':    'Naslovna',
        'cover_quote':         'Ne brojite kalorije, brojite vaše osmehe i korake.',
        'intro_page_title':    'Uvod',
        'toc_page_title':      'Sadržaj',
        'final_page_title':    'Na kraju...',
        'ingredients':         'Sastojci',
        'preparation':         'Priprema',
        'note_label':          'Napomena',
        'recipe_prefix':       'Recept',
        'extra_recipe_label':  'Bonus recept',
        'coming_soon_num':     'Recept — dolazi uskoro',
        'coming_soon_msg':     'Ovaj recept ☾́e biti dodat uskoro.',
        'prep_time_label':     'Vreme pripreme',
        'toc_heading':         'Sadržaj',
        'toc_bonus_section':   'Bonus',
        'toc_final_link':      'Na kraju…',
        'bonus_nav_title':     'Bonus recept – Ukusni prokelj iz rerne',
        'bonus_num_label':     'Bonus recept – jelo od samo jednog sastojka',
        'bonus_title':         'Ukusni prokelj iz rerne',
        'bonus_subtitle':      'Dovoljan je samo jedan sastojak i malo kreativnosti pa da i najskromnije povrće postane zvezda stola.',
        'bonus_prep_time':     '30 minuta',
        'bonus_comment':       'Prokelj često ima lošu reputaciju, ali kada se pravilno pripremi u rerni postaje hrskav spolja, a mekan iznutra.',
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
        'bonus_note':          'Odlično ide kao prilog uz meso ili ribu, ali i kao mali topli zalogaj uz čašu vina.',
        'bonus_energy_head':   'Energija jela',
        'bonus_energy_sub':    'Čista jednostavnost!',
        'bonus_closing':       'Za kraj ove male riznice – jedno skromno povrće koje nas podseća da se prava čar kuvanja često krije u jednostavnosti i da je manje vrlo često – više!',
    },
    'de': {
        'book_title':          'Didina SoulFood Schatzkiste',
        'book_subtitle':       '44 Rezepte aus dem Herzen der Küche',
        'tagline':             'Rezepte für jeden Tag',
        'cover_line1':         'Didina',
        'cover_line3':         'SCHATZKISTE',
        'cover_line3_size':    62,
        'identifier':          'didina-soulfood-riznica-2026-de',
        'cover_page_title':    'Titelseite',
        'cover_quote':         'Zählt keine Kalorien — zählt eure Lächeln und Schritte.',
        'intro_page_title':    'Einleitung',
        'toc_page_title':      'Inhaltsverzeichnis',
        'final_page_title':    'Zum Schluss...',
        'ingredients':         'Zutaten',
        'preparation':         'Zubereitung',
        'note_label':          'Hinweis',
        'recipe_prefix':       'Rezept',
        'extra_recipe_label':  'Bonus-Rezept',
        'coming_soon_num':     'Rezept — kommt bald',
        'coming_soon_msg':     'Dieses Rezept wird bald hinzugefügt.',
        'prep_time_label':     'Zubereitungszeit',
        'toc_heading':         'Inhaltsverzeichnis',
        'toc_bonus_section':   'Bonus',
        'toc_final_link':      'Zum Schluss…',
        'bonus_nav_title':     'Bonus-Rezept – Köstlicher Rosenkohl aus dem Ofen',
        'bonus_num_label':     'Bonus-Rezept – ein Gericht aus nur einer Zutat',
        'bonus_title':         'Köstlicher Rosenkohl aus dem Ofen',
        'bonus_subtitle':      'Es braucht nur eine Zutat und ein bisschen Kreativität, damit auch das bescheidenste Gemüse zum Star des Tisches wird.',
        'bonus_prep_time':     '30 Minuten',
        'bonus_comment':       'Rosenkohl hat oft einen schlechten Ruf, aber richtig im Ofen zubereitet wird er außen knusprig und innen zart.',
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
        'bonus_note':          'Hervorragend als Beilage zu Fleisch oder Fisch, aber auch als kleiner warmer Imbiss zu einem Glas Wein.',
        'bonus_energy_head':   'Energie des Gerichts',
        'bonus_energy_sub':    'Pure Einfachheit!',
        'bonus_closing':       'Zum Abschluss dieser kleinen Schatzkiste – ein bescheidenes Gemüse, das uns daran erinnert, dass der wahre Zauber des Kochens oft in der Einfachheit liegt und dass weniger sehr oft – mehr ist!',
    },
    'en': {
        'book_title':          "Didi's SoulFood Treasury",
        'book_subtitle':       '44 Recipes from the Heart of the Kitchen',
        'tagline':             'Recipes for every day',
        'cover_line1':         "Didi's",
        'cover_line3':         'T R E A S U R Y',
        'identifier':          'didina-soulfood-riznica-2026-en',
        'cover_page_title':    'Cover',
        'cover_quote':         "Don't count calories — count your smiles and steps.",
        'intro_page_title':    'Introduction',
        'toc_page_title':      'Table of Contents',
        'final_page_title':    'In closing...',
        'ingredients':         'Ingredients',
        'preparation':         'Preparation',
        'note_label':          'Note',
        'recipe_prefix':       'Recipe',
        'extra_recipe_label':  'Bonus recipe',
        'coming_soon_num':     'Recipe — coming soon',
        'coming_soon_msg':     'This recipe will be added soon.',
        'prep_time_label':     'Prep time',
        'toc_heading':         'Table of Contents',
        'toc_bonus_section':   'Bonus',
        'toc_final_link':      'In closing…',
        'bonus_nav_title':     'Bonus Recipe – Delicious Oven-Roasted Brussels Sprouts',
        'bonus_num_label':     'Bonus recipe – a dish from just one ingredient',
        'bonus_title':         'Delicious Oven-Roasted Brussels Sprouts',
        'bonus_subtitle':      'It takes just one ingredient and a little creativity to turn even the humblest vegetable into the star of the table.',
        'bonus_prep_time':     '30 minutes',
        'bonus_comment':       'Brussels sprouts often have a bad reputation, but when properly roasted in the oven they become crispy on the outside and tender inside.',
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
        'bonus_note':          'Excellent as a side dish with meat or fish, or as a small warm snack with a glass of wine.',
        'bonus_energy_head':   'The energy of this dish',
        'bonus_energy_sub':    'Pure simplicity!',
        'bonus_closing':       'To close this little treasury – one humble vegetable reminding us that the true magic of cooking often lies in simplicity, and that less is very often – more!',
    },
}

# ---------------------------------------------------------------------------
# 4. Intro and final page HTML bodies per language
# ---------------------------------------------------------------------------
INTRO_BODY = {
    'sr': """
<h2 class="intro-title">Uvod u Didinu SoulFood Riznicu</h2>
<div class="intro-text">
  <p>Dobrodo&#353;la u moju kuhinju, gde se kuva srcem i zadovoljnim stomakom!</p>
  <p>Ova riznica nije nastala preko no&#263;i &#8212; nego kroz mnoga nedeljna jutra kada sam posebno inspirisana da kuvam, tihe ve&#269;eri uz &#353;olju &#269;aja, osmehe iz rerne, i poneki eksperiment koji se nikad vi&#353;e nije ponovio (pozdrav slanom kola&#269;u od cvekle!).</p>
  <p>Zovem se Didi. Volim da kuvam, ali jo&#353; vi&#353;e volim da spremam hranu koja te&#353;i, hrani i sme&#353;ka se iznutra.</p>
  <p>Ovi recepti nisu samo za stomak &#8212; oni su za dan kad ti treba mir, za tihe trenutke uz kafu ili kad ne zna&#353; &#353;ta da pojede&#353;, a ne &#382;eli&#353; ba&#353; ni da doda&#353; neko kilce.</p>
  <hr class="div"/>
  <p>Ovde ne&#263;e&#353; na&#263;i komplikovane korake. Samo stvarne zalogaje &#8212; inspirisane sportom, jogom, letom, morem i onom ve&#269;itom potrebom da svemu dodam &#353;aku oraha. Svi recepti su sa biljnim mlekom i pogodni za netolerante na laktozu, ali je mogu&#263;e praviti i sa obi&#269;nim mlekom ukoliko Vam se vi&#353;e svi&#273;a.</p>
  <p>U ovoj riznici se nalaze recepti koji su deo mog ritma, moje kuhinje iz &#269;iste radosti kuvanja.</p>
  <p>Cela knjiga pisana je u &#382;enskom rodu, kao da se obra&#263;am &#382;enama, ali svi mu&#353;ki &#269;itaoci i entuzijasti&#269;ni kuvari su dobrodo&#353;li da nam se pridru&#382;e na ovom putovanju.</p>
  <p>Ako ti neka od mojih ideja dotakne srce (ili stomak) &#8212; svrati ponovo. Uvek ima jo&#353;!</p>
  <p>I da zna&#353;: sve fotografije u ovoj knjizi nastale su bukvalno sekund pre nego &#353;to sam ja (ili neko od uku&#263;ana) zgrabila ka&#353;iku i bacila se na degustaciju!</p>
  <p>Ovo nije kuvar iz studija nego iz &#382;ivota. Sve je poteklo iz moje kuhinje i li&#269;ne kreativnosti. U&#382;ivajte u &#269;itanju i isprobavanju!</p>
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
  <p>Nema kaloriskih tablica, brojanja porcija, zabrana i gri&#382;e savesti.<br/>
  Ovo je kuvar i poziv da voli&#353; sebe kroz hranu.</p>
  <p>Recepti koje si ovde prona&#353;la nisu niskokalori&#269;ni, ali su <strong>ne&#382;no izbalansirani</strong>, ba&#353; kao i &#382;ivot koji &#382;eli&#353; da &#382;ivi&#353;.</p>
  <p>Hrana je tu da nas nahrani, umiri, obraduje i podsteti: kad se kre&#263;e&#353;, di&#353;e&#353;, smeje&#353; i voli&#353; &#8212; sve drugo do&#273;e na svoje mesto.</p>
  <p>I zapamti: &#353;ta god da se u ovom trenutku de&#353;ava, sve na kraju ispadne dobro!</p>
  <hr class="div"/>
  <p><strong>Ne broji kalorije.<br/>Broj osmehe. Korake. Lepe zalogaje.</strong></p>
  <p><strong>Ve&#382;baj i u&#382;ivaj u trenucima i malim, jednostavnim stvarima. Nasme&#353;i se bez razloga.</strong></p>
  <hr class="div"/>
  <p>Hvala ti &#353;to si kuvala sa mnom.<br/>
  Ova knjiga je mo&#382;da gotova, ali tvoja kuhinjska avantura tek po&#269;inje.</p>
</div>
<p class="sign-off">Iz jedne male kuhinje i sa puno ljubavi,<br/><br/>Didi<br/><br/>Bremen, prole&#263;e 2026.</p>""",

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
    return s.replace('&','&amp;').replace('<','&lt;').replace('>','&gt;').replace('"','&quot;')

def page(title, body_html, extra_ns=''):
    return f"""<?xml version='1.0' encoding='utf-8'?>
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.1//EN"
  "http://www.w3.org/TR/xhtml11/DTD/xhtml11.dtd">
<html xmlns="http://www.w3.org/1999/xhtml" {extra_ns}>
<head>
  <title>{esc(title)}</title>
  <link rel="stylesheet" type="text/css" href="style.css"/>
</head>
<body>
{body_html}
</body>
</html>"""

def resize_img(path, max_w=320, max_h=170):
    with Image.open(path) as im:
        if im.mode not in ('RGB', 'L'):
            im = im.convert('RGB')
        im.thumbnail((max_w, max_h), Image.LANCZOS)
        buf = io.BytesIO()
        im.save(buf, format='JPEG', quality=75, optimize=True)
        return buf.getvalue()

def make_cover_image(ls):
    """Generate cover PNG using language-specific strings from ls dict."""
    w, h    = 1200, 1800
    dark    = ( 34,  16,   8)
    darker  = ( 24,  12,   4)
    gold    = (216, 161,  74)
    plum    = ( 74,  46, 106)
    cream   = (240, 232, 216)
    midgold = (200, 160, 112)

    im = Image.new('RGB', (w, h), darker)
    d  = ImageDraw.Draw(im)

    for y in range(h):
        t = abs(y - h * 0.45) / (h * 0.55)
        r = int(darker[0] + (dark[0] - darker[0]) * (1 - t * 0.6))
        g = int(darker[1] + (dark[1] - darker[1]) * (1 - t * 0.6))
        b = int(darker[2] + (dark[2] - darker[2]) * (1 - t * 0.6))
        d.line([(0, y), (w, y)], fill=(r, g, b))

    bw = 5
    for x1, y1, x2, y2 in [
        (55,55,220,55),(55,55,55,220),
        (w-55,55,w-220,55),(w-55,55,w-55,220),
        (55,h-55,220,h-55),(55,h-55,55,h-220),
        (w-55,h-55,w-220,h-55),(w-55,h-55,w-55,h-220),
    ]:
        d.line([(x1,y1),(x2,y2)], fill=gold, width=bw)

    cx, cy, cr = 600, 340, 190
    d.ellipse([cx-cr, cy-cr, cx+cr, cy+cr], outline=gold, width=2)

    fw = 14
    for tx in [548, 600, 652]:
        d.line([(tx, 200), (tx, 320)], fill=gold, width=fw)
    d.arc([535, 300, 665, 390], start=0, end=180, fill=gold, width=fw)
    d.line([(600, 345), (600, 480)], fill=gold, width=fw)

    hx, hy, hs = 700, 255, 55
    d.ellipse([hx,       hy-hs, hx+hs*2, hy+hs], fill=(158,120,184))
    d.ellipse([hx+hs,    hy-hs, hx+hs*3, hy+hs], fill=(158,120,184))
    d.polygon([(hx, hy+hs//2), (hx+hs*1.5, hy+hs*2.2), (hx+hs*3, hy+hs//2)], fill=(158,120,184))

    d.line([(140,590),(555,590)], fill=gold, width=2)
    d.polygon([(600,577),(614,590),(600,603),(586,590)], fill=plum)
    d.line([(645,590),(1060,590)], fill=gold, width=2)

    line3_size = ls.get('cover_line3_size', 72)
    d.text((w//2, 730),  ls['cover_line1'], fill=cream,   anchor='mm', font=ttf(FONT_SERIF_BOLD, 148))
    d.text((w//2, 890),  'SoulFood',        fill=gold,    anchor='mm', font=ttf(FONT_SERIF_BOLD, 110))
    d.rectangle([100, 960, w-100, 1080], fill=plum)
    d.text((w//2, 1025), ls['cover_line3'], fill=gold,    anchor='mm', font=ttf(FONT_SERIF_BOLD, line3_size))
    d.text((w//2, 1185), ls['tagline'],     fill=midgold, anchor='mm', font=ttf(FONT_SERIF_REG,  44))
    d.line([(200,1560),(1000,1560)], fill=(158,120,184), width=2)
    d.text((w//2, 1640), '♥',          fill=gold,    anchor='mm', font=ttf(FONT_SERIF_REG,  44))
    d.text((w//2, 1710), 'Dragana Stamenković', fill=midgold, anchor='mm', font=ttf(FONT_SERIF_REG, 50))

    buf = io.BytesIO()
    im.save(buf, format='PNG')
    return buf.getvalue()

# ---------------------------------------------------------------------------
# 6. CSS
# ---------------------------------------------------------------------------
CSS = """
body { font-family: Georgia,'Times New Roman',serif; font-size:1em;
       line-height:1.65; color:#2e2e2e; background:#ffffff; margin:1em 1.2em; }
h1.book-title  { font-size:1.9em; text-align:center; color:#C9773A; margin:1.5em 0 0.2em;
                 font-style:italic; }
h2.book-sub    { font-size:1em; text-align:center; font-style:italic; color:#D8A14A; margin:0 0 1.5em; }
.cover-quote   { font-style:italic; font-size:1.1em; text-align:center; margin:2em auto;
                 max-width:80%; color:#C9773A; border-top:1px solid #C9773A;
                 border-bottom:1px solid #C9773A; padding:.7em 0; }
.cover-author  { text-align:center; color:#C9773A; margin:.4em 0; font-size:1em; font-weight:bold; }
h2.sec-title   { font-size:1.6em; color:#C9773A; text-align:center; margin:2em 0 .5em;
                 font-style:italic; border-bottom:2px solid #C9773A; padding-bottom:.4em; }
.sec-desc      { text-align:center; font-style:italic; color:#D8A14A; margin-bottom:2em; }
h2.intro-title { font-size:1.4em; color:#C9773A; border-bottom:2px solid #C9773A;
                 padding-bottom:.3em; margin-bottom:1em; font-style:italic; }
.intro-text p  { margin:.7em 0; text-align:justify; }
.sign-off      { margin-top:2em; font-style:italic; color:#C9773A; }
h2.toc-title   { font-size:1.4em; color:#C9773A; border-bottom:2px solid #C9773A;
                 padding-bottom:.3em; margin-bottom:1em; font-style:italic; }
.toc-section   { font-weight:bold; color:#C9773A; margin:1em 0 .2em;
                 font-size:.85em; text-transform:uppercase; letter-spacing:.06em; }
.toc-item      { margin:.25em 0 .25em 1em; font-size:.92em; }
.toc-item a    { color:#2e2e2e; text-decoration:none; }
.toc-num       { color:#C9773A; font-weight:bold; margin-right:.3em; }
.recipe-num    { font-size:.78em; font-weight:bold; color:#C9773A;
                 text-transform:uppercase; letter-spacing:.08em; margin-bottom:.1em; }
h2.r-title     { font-size:1.35em; color:#C9773A; margin:.1em 0 .2em; font-style:italic; }
.r-sub         { font-style:italic; color:#5a5a5a; margin:.2em 0 .6em; font-size:.95em; }
.prep          { display:inline-block; background:#f5eaf5; color:#C9773A;
                 padding:.2em .7em; border-radius:20px; font-size:.85em; margin:.4em 0 .5em; }
.recipe-image  { display:block; width:auto; max-width:92%; max-height:11em;
                 margin:.5em auto; border-radius:5px; }
.comment       { font-style:italic; color:#5a5a5a; border-left:3px solid #C9773A;
                 padding:.3em .7em; margin:.6em 0 .8em; font-size:.93em; }
h3.sh          { font-size:.82em; font-weight:bold; color:#C9773A; margin:.9em 0 .2em;
                 text-transform:uppercase; letter-spacing:.06em; }
ul.ingr        { padding-left:1.2em; margin:.2em 0 .6em; }
ul.ingr li     { margin:.15em 0; }
ol.steps       { padding-left:1.3em; margin:.2em 0; }
ol.steps li    { margin:.3em 0; }
.note          { background:#faf0f8; border-left:3px solid #C9773A;
                 padding:.35em .7em; font-size:.88em; margin-top:.8em; color:#2e2e2e; }
.placeholder   { text-align:center; padding:2em 1em; color:#D8A14A;
                 font-style:italic; border:1px dashed #C9773A; margin:1em 0; border-radius:6px; }
hr.div         { border:none; border-top:1px solid #d4a0d4; margin:1.2em 0; }
"""

# ---------------------------------------------------------------------------
# 7. Build one EPUB edition
# ---------------------------------------------------------------------------
def build_epub(lang):
    ls = LANG_STRINGS[lang]

    book = epub.EpubBook()
    book.set_identifier(ls['identifier'])
    book.set_title(ls['book_title'])
    book.set_language(lang)
    book.add_author('Dragana Stamenković')

    css_item = epub.EpubItem(uid='style', file_name='style.css',
                             media_type='text/css', content=CSS.encode('utf-8'))
    book.add_item(css_item)

    cover_png = make_cover_image(ls)
    cover_img_item = epub.EpubImage(uid='cover-img', file_name='cover.png',
                                    media_type='image/png', content=cover_png)
    book.add_item(cover_img_item)
    book.add_metadata('OPF', 'meta', '', {'name': 'cover', 'content': 'cover-img'})

    spine_items = []
    section_toc = []

    def add_page(uid, filename, title, body, extra_ns=''):
        ch = epub.EpubHtml(title=title, file_name=filename, lang=lang)
        ch.content = page(title, body, extra_ns).encode('utf-8')
        ch.add_item(css_item)
        book.add_item(ch)
        spine_items.append(ch)
        return ch

    def recipe_page(num, display_title_sr, data):
        """Build one recipe page. Returns (EpubHtml, title_in_lang)."""
        extra_key  = display_title_sr if num is None else None
        extra_lang = EXTRA_RECIPES.get(extra_key, {}).get(lang)   if extra_key else None
        extra_sr   = EXTRA_RECIPES.get(extra_key, {}).get('sr')   if extra_key else None

        if data is None and extra_lang is None and extra_sr is None:
            body = f"""
<p class="recipe-num">{ls['coming_soon_num']}</p>
<h2 class="r-title">{esc(display_title_sr or '')}</h2>
<div class="placeholder">{ls['coming_soon_msg']}</div>"""
            safe = (display_title_sr or 'x')[:12].replace(' ', '_')
            ch = add_page(f'miss_{safe[:8]}', f'recipe_miss_{safe}.xhtml',
                          display_title_sr or '', body)
            return ch, display_title_sr or ''

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

        img_html = ''
        if img_path:
            full = os.path.join(REPO, img_path)
            if os.path.exists(full):
                img_data  = resize_img(full)
                img_slug  = num or (title[:8].replace(' ', '_'))
                img_uid   = f'img{lang}_{img_slug}'
                img_fname = f'images/r{lang}_{img_slug}.jpg'
                book.add_item(epub.EpubItem(uid=img_uid, file_name=img_fname,
                                            media_type='image/jpeg', content=img_data))
                img_html = (f'<img src="{img_fname}" alt="{esc(title)}" '
                            f'class="recipe-image" style="max-height:10em;width:auto;'
                            f'display:block;margin:.4em auto;"/>')

        ingr_li      = ''.join(f'<li>{esc(i)}</li>\n' for i in ingrs if i)
        step_li      = ''.join(f'<li>{esc(s)}</li>\n' for s in steps if s)
        comment_html = f'<p class="comment">{esc(comment)}</p>' if comment.strip() else ''
        prep_html    = (f'<p><span class="prep">&#9202; {ls["prep_time_label"]}: '
                        f'{esc(prep)}</span></p>') if prep else ''
        note_html    = (f'<div class="note"><strong>{ls["note_label"]}:</strong> '
                        f'{esc(note)}</div>') if note and note_translated else ''
        num_label    = (f'{ls["recipe_prefix"]} #{num}' if num
                        else ls['extra_recipe_label'])

        body = f"""
<h2 class="r-title">{esc(title)}</h2>
<p class="recipe-num">{num_label}</p>
<p class="r-sub">{esc(subtitle)}</p>
{comment_html}
{prep_html}
{img_html}
<h3 class="sh">{ls['ingredients']}</h3>
<ul class="ingr">
{ingr_li}</ul>
<h3 class="sh">{ls['preparation']}</h3>
<ol class="steps">
{step_li}</ol>
{note_html}"""

        slug   = num or title[:20].replace(' ','_').replace('č','c').replace('ć','c').replace('š','s').replace('ž','z').replace('đ','d')
        ch     = add_page(f'r{num or slug}', f'recipe_{slug}.xhtml', title, body)
        return ch, title

    # --- Cover page ---
    cover_body = f"""
<div style="text-align:center; padding:2em 1em;">
  <h1 class="book-title">{esc(ls['book_title'])}</h1>
  <h2 class="book-sub">{esc(ls['book_subtitle'])}</h2>
  <p class="cover-quote">{ls['cover_quote']}</p>
  <p class="cover-author"><strong>Dragana Stamenković</strong></p>
</div>"""
    cover_ch = add_page('cover', 'cover.xhtml', ls['cover_page_title'], cover_body,
                        extra_ns='xmlns:epub="http://www.idpf.org/2007/ops"')

    # --- Intro page ---
    intro_ch = add_page('intro', 'intro.xhtml', ls['intro_page_title'], INTRO_BODY[lang])

    # --- Sections + recipes ---
    toc_page_html = f'<h2 class="toc-title">{ls["toc_heading"]}</h2>\n'

    for sec in SECTIONS:
        sec_title = sec['title'][lang]
        sec_body  = f'<h2 class="sec-title">{esc(sec_title)}</h2>'
        sec_ch    = add_page(sec['file'], f"{sec['file']}.xhtml", sec_title, sec_body)

        sec_recipe_links = []
        toc_page_html += f'<p class="toc-section">{esc(sec_title)}</p>\n'

        for num, display_title_sr in sec['items']:
            data        = recipe_by_num.get(num) if num else None
            rch, rtitle = recipe_page(num, display_title_sr, data)

            label = f'#{num} {rtitle}' if num else f'* {rtitle}'
            sec_recipe_links.append(epub.Link(rch.file_name, label, rch.id))

            num_display = f'#{num}' if num else '&#9733;'
            toc_page_html += (
                f'<p class="toc-item"><span class="toc-num">{num_display}</span>'
                f'<a href="{rch.file_name}">{esc(rtitle)}</a></p>\n'
            )
            print(f'  [{sec_title[:22]}] #{num or "?"} {rtitle}')

        section_toc.append(epub.Link(f"{sec['file']}.xhtml", sec_title, sec['file']))

    # --- Bonus recipe ---
    bonus_img_html = ''
    bonus_path = os.path.join(IMGDIR, 'ukusni-prokelj-iz-rerne.png')
    if os.path.exists(bonus_path):
        bd = resize_img(bonus_path)
        book.add_item(epub.EpubItem(uid=f'imgbonus_{lang}', file_name='images/rbonus.jpg',
                                    media_type='image/jpeg', content=bd))
        bonus_img_html = (f'<img src="images/rbonus.jpg" alt="{esc(ls["bonus_title"])}" '
                          f'class="recipe-image" style="max-height:10em;width:auto;'
                          f'display:block;margin:.4em auto;"/>')

    bonus_ingr_li  = ''.join(f'<li>{esc(i)}</li>\n' for i in ls['bonus_ingredients'])
    bonus_steps_li = ''.join(f'<li>{esc(s)}</li>\n' for s in ls['bonus_instructions'])

    bonus_body = f"""
<p class="recipe-num">{ls['bonus_num_label']}</p>
<h2 class="r-title">{esc(ls['bonus_title'])}</h2>
<p class="r-sub">{esc(ls['bonus_subtitle'])}</p>
<p><span class="prep">&#9202; {ls['prep_time_label']}: {esc(ls['bonus_prep_time'])}</span></p>
{bonus_img_html}
<p class="comment">{esc(ls['bonus_comment'])}</p>
<h3 class="sh">{ls['ingredients']}</h3>
<ul class="ingr">
{bonus_ingr_li}</ul>
<h3 class="sh">{ls['preparation']}</h3>
<ol class="steps">
{bonus_steps_li}</ol>
<div class="note"><strong>{ls['note_label']}:</strong> {esc(ls['bonus_note'])}</div>
<h3 class="sh" style="margin-top:1.1em;">{ls['bonus_energy_head']}</h3>
<p><em>{esc(ls['bonus_energy_sub'])}</em></p>
<p>{esc(ls['bonus_closing'])}</p>"""

    bonus_ch = add_page('bonus', 'bonus.xhtml', ls['bonus_nav_title'], bonus_body)

    toc_page_html += (
        f'<p class="toc-section">{ls["toc_bonus_section"]}</p>\n'
        f'<p class="toc-item"><span class="toc-num">&#9733;</span>'
        f'<a href="bonus.xhtml">{esc(ls["bonus_nav_title"])}</a></p>\n'
    )

    # --- Final page ---
    final_ch = add_page('final', 'final.xhtml', ls['final_page_title'], FINAL_BODY[lang])

    toc_page_html += (
        f'<p class="toc-item" style="margin-top:.6em;">'
        f'<a href="final.xhtml">{ls["toc_final_link"]}</a></p>\n'
    )

    # --- TOC page (inserted after intro in spine) ---
    toc_ch = epub.EpubHtml(title=ls['toc_page_title'], file_name='toc_page.xhtml', lang=lang)
    toc_ch.content = page(ls['toc_page_title'], toc_page_html).encode('utf-8')
    toc_ch.add_item(css_item)
    book.add_item(toc_ch)
    spine_items.insert(spine_items.index(intro_ch) + 1, toc_ch)

    # --- Nav / spine / write ---
    book.toc = [
        epub.Link('cover.xhtml',    ls['cover_page_title'],  'cover'),
        epub.Link('intro.xhtml',    ls['intro_page_title'],  'intro'),
        epub.Link('toc_page.xhtml', ls['toc_page_title'],    'toc_page'),
        *section_toc,
        epub.Link('bonus.xhtml',    ls['bonus_nav_title'],   'bonus'),
        epub.Link('final.xhtml',    ls['final_page_title'],  'final'),
    ]
    book.add_item(epub.EpubNcx())
    book.add_item(epub.EpubNav())
    book.spine = ['nav'] + spine_items

    output = os.path.join(REPO, 'sources', f'Didina_SoulFood_Riznica_{lang.upper()}.epub')
    os.makedirs(os.path.dirname(output), exist_ok=True)
    epub.write_epub(output, book)
    print(f"\nDone! {output}  ({os.path.getsize(output)/1024/1024:.1f} MB)")

# ---------------------------------------------------------------------------
# 8. Generate all three editions
# ---------------------------------------------------------------------------
for lang in ['sr', 'de', 'en']:
    print(f"\n{'='*52}\nBuilding {lang.upper()} edition\n{'='*52}")
    build_epub(lang)
