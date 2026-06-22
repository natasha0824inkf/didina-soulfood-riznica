# Didina SoulFood Riznica
🎨 Design Language & Visual System Tokens

This project features a custom "Warm Organic Modern" design identity crafted specifically to showcase real-life smartphone food photography without losing its appetizing warmth.

Canvas Base: #FDFBF7 (Soft Almond Cream) — High-readability canvas texture.
Primary Type: #23211F (Dark Chocolate Espresso) — Soft-contrast luxury typography.
Healthy Token: #607A66 (Sage Olive Green) — Reserved for ingredient grids and nutrition labels.
Upbeat Accent: #E5A93C (Mustard Gold) — Applied to layout grid lines, numbers, and meta tags.
Soul Details: #8C7AA6 (Lavender Purple) — Dedicated exclusively to Didi's personal voice, commentary boxes, and intimate quotes.

🏗️ Multi-Channel System Architecture
The codebase enforces a single-source configuration workflow where the master recipe text remains structured as standardized data attributes, feeding cleanly into separate distribution channels:
                       ┌──> [Web Channel] ───> WordPress Studio Local / Independent Cloud
                       │
[Master Data Backup] ──┼──> [E-Book Channel] ──> Universal EPUB3 Layout (Apple Books & Android)
                       │
                       └──> [Asset Processing] ─> Cloud Jupyter Notebook Pipeline Tool (Zero Local Load)
📁 System Directory Tree Structure Matrix
📁 didina-soulfood-riznica/
├── 📁 assets/
│   ├── 📁 css/
│   │   └── 📄 style.css          # Unified brand visual design stylesheet
│   └── 📁 images/             # Target deployment image output container (Optimized WebP/JPG)
├── 📁 raw_assets/
│   └── 📁 raw_images/         # Raw, heavy smartphone photos repository
│       ├── 📄 1.pdf              # Raw Master Manuscript Backup
│       └── 📄 2.zip              # Compressed Raw Assets Archive
├── 📁 web/
│   └── 📄 index.html             # Responsive web portfolio interface base file
├── 📄 .gitignore                 # Safety filtering configurations for binary assets
└── 📄 README.md                  # Core project documentation blueprint

📊 Data Modeling Schema Instance
Recipes are parsed from unformatted text paragraphs into strict relational properties:
Ingredient Attribute    Base Quantity   Unit Measurement    Target Section
Proteinska tortilja 1   komad   Sastojci
Feta sir    50  g   Sastojci
Grčki jogurt   1   kašika Sastojci
🏁 Phase-by-Phase Development Roadmap
 Phase 1: Initialize repository scaffold, connect remote tracking main branches, and deploy secure developer access tokens.
 Phase 2: Cloud-sync master text backups (1.pdf, 2.zip) via remote server virtualization.
 Phase 3: Establish local container framework inside isolated WordPress Studio environments matching the visual style palette.
 Phase 4: Build the clean component templates for semantic recipe data views.
 Phase 5: Ship the universal e-book packages and deploy cloud-hosted preview environments.
About
A headless content pipeline and multi-channel publishing engine converting raw culinary manuscripts into optimized web blogs and universal EPUB architectures using VS Code and Python
Resources
 Readme
 Activity
Stars
 0 stars
Watchers
 0 watching
Forks
 0 forks
Releases
No releases published
Create a new release
Deployments
7
 github-pages 1 hour ago
+ 6 deployments
Packages
No packages published
Publish your first package
Contributors
1
@natasha0824inkf
natasha0824inkf Natasha0824
Languages
HTML
91.7%
 
CSS
8.3%
Footer
Collapse

File	Purpose
index.html	Home page — hero, 6 featured recipes, categories grid
recipes.html	All 16 recipes — live search + 5 category filters
about.html	About Didina — story + values
contact.html	Contact form
css/style.css	Coral/teal design system
css/responsive.css	Mobile-first breakpoints
js/translations.js	SR/DE/EN translations
js/recipes-data.js	16 recipes from didina-recipes.json
js/main.js	Language switch, search, modal, favorites


Image matching

$ pdftotext raw_assets/raw_images/1.pdf - 2>/dev/null | python3 -c "
import sys, re

text = sys.stdin.read()
pages = text.split('\x0c')

recipe_order = []
for i, page in enumerate(pages):
    if 'Podnaslov:' in page or 'Vreme pripreme:' in page:
        lines = [l.strip() for l in page.split('\n') if l.strip()]
        if lines:
            title = lines[0]
            recipe_order.append((i+1, title))

# Print with image number (sequential order = image number)
print('Image# | PDF Page | Recipe Title')
print('-'*60)
for img_num, (page, title) in enumerate(recipe_order, 1):
    print(f'image{img_num:02d} | page {page:3d}  | {title[:45]}')
" 2>/dev/null

Image# | PDF Page | Recipe Title
------------------------------------------------------------
image01 | page   7  | Nedeljna tortilja
image02 | page  10  | Tople leblebije sa jogurtom i
image03 | page  13  | Slani doručak sa lanom,
image04 | page  16  | Kinoina kaša sa borovnicama
image05 | page  18  | Kokos palačinke sa brzim
image06 | page  22  | Ćureći stejk sa
image07 | page  25  | Kokos curry sa crvenim
image08 | page  28  | „Žive“ lazanje
image09 | page  29  | Vreme pripreme: 15 minuta + pečenje oko 30–40
image10 | page  31  | Mediteranski pirinač sa
image11 | page  35  | Krem supa od šargarepe,
image12 | page  37  | Ćuretina sa patlidžanom i
image13 | page  40  | Restovan krompir – omiljeno
image14 | page  43  | Mini pice od plavog patlidžana
image15 | page  46  | Juneći gulaš sa zelenom
image16 | page  49  | Krem supa od tikvica
image17 | page  50  | Komentar autorke:
image18 | page  52  | Prebranac sa slatkim
image19 | page  60  | Hrskava celer salata
image20 | page  62  | Nesvakidašnja salata sa
image21 | page  65  | Brzi Tapas
image22 | page  67  | Detoks salata sa narom
image23 | page  70  | Tunin obrok za pun stomak i
image24 | page  73  | Salata sa rukolom, fetom i
image25 | page  76  | Brokoli sa pinjolima
image26 | page  78  | Jaka voćna salata
image27 | page  82  | Banana hleb sa suvim
image28 | page  85  | Integralni hleb sa semenkama
image29 | page  88  | Rolnice od lisnatog testa sa
image30 | page  89  | Vreme pripreme: 40 minuta
image31 | page  90  | Spori medenjaci iz ugašene
image32 | page  91  | Komentar autorke:
image33 | page  93  | Šumska pita
image34 | page  96  | Zimski kolač sa bundevom i
image35 | page 100  | Podnaslov: Lagani kremasti užitak sa voćnom s
image36 | page 103  | Dubai zalogajčići
image37 | page 105  | Kremasti sutlijaš
image38 | page 107  | Kraljevske bombice
image39 | page 108  | Vreme pripreme: 5-10 minuta
image40 | page 109  | Brzinski banana kolačići
image41 | page 111  | Jafa bez brašna
image42 | page 112  | ⏱ Vreme pripreme: 10 min + 40 min pečenja
image43 | page 114  | Najčokoladniji Brauni
image44 | page 115  | Vreme pripreme: 15 minuta + 25 minuta pečenja
image45 | page 118  | Kroasani sa crnom čokoladom
image46 | page 120  | Lažne čoko rolnice
image47 | page 123  | Domaći humus
image48 | page 126  | Proteinski namaz
image49 | page 128  | Pašteta od tune
image50 | page 131  | Raznobojni namaz od avokada






