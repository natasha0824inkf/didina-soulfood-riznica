# Didina SoulFood Riznica

---

## 🎨 Design Language & Visual System Tokens

This project features a custom "Warm Organic Modern" design identity crafted specifically to showcase real-life smartphone food photography without losing its appetizing warmth.

| Token | Value | Usage |
|---|---|---|
| Canvas Base | `#FDFBF7` Soft Almond Cream | High-readability canvas texture |
| Primary Type | `#23211F` Dark Chocolate Espresso | Soft-contrast luxury typography |
| Healthy Token | `#607A66` Sage Olive Green | Ingredient grids and nutrition labels |
| Upbeat Accent | `#E5A93C` Mustard Gold | Layout grid lines, numbers, meta tags |
| Soul Details | `#8C7AA6` Lavender Purple | Didi's commentary boxes and intimate quotes |

---

## 🏗️ Multi-Channel System Architecture

The codebase enforces a single-source configuration workflow where the master recipe text remains structured as standardized data attributes, feeding cleanly into separate distribution channels:

```
                       ┌──> [Web Channel] ───> WordPress Studio Local / Independent Cloud
                       │
[Master Data Backup] ──┼──> [E-Book Channel] ──> Universal EPUB3 Layout (Apple Books & Android)
                       │
                       └──> [Asset Processing] ─> Cloud Jupyter Notebook Pipeline Tool (Zero Local Load)
```

---

## 📁 Project Structure

```
didina-soulfood-riznica/
├── assets/
│   └── images/             # Optimized WebP/JPG output + logo/brand assets
├── css/
│   ├── style.css           # Unified brand visual design stylesheet
│   └── responsive.css      # Mobile-first breakpoints
├── js/
│   ├── translations.js     # SR/DE/EN translations
│   ├── recipes-data.js     # Recipe data
│   └── main.js             # Language switch, search, modal, favorites
├── index.html              # Home page — hero, featured recipes, categories
├── recipes.html            # All recipes — live search + category filters
├── about.html              # About Didina — story + values
├── contact.html            # Contact form
└── README.md
```

---

## 📋 Page & File Reference

| File | Purpose |
|---|---|
| `index.html` | Home page — hero, 6 featured recipes, categories grid |
| `recipes.html` | All 16 recipes — live search + 5 category filters |
| `about.html` | About Didina — story + values |
| `contact.html` | Contact form |
| `css/style.css` | Coral/teal design system |
| `css/responsive.css` | Mobile-first breakpoints |
| `js/translations.js` | SR/DE/EN translations |
| `js/recipes-data.js` | 16 recipes from didina-recipes.json |
| `js/main.js` | Language switch, search, modal, favorites |

---

## 📊 Recipe Data Schema

Recipes are parsed from unformatted text paragraphs into strict relational properties:

| Ingredient | Quantity | Unit | Section |
|---|---|---|---|
| Proteinska tortilja | 1 | komad | Sastojci |
| Feta sir | 50 | g | Sastojci |
| Grčki jogurt | 1 | kašika | Sastojci |

---

## 🏁 Development Roadmap

- **Phase 1** — Initialize repository scaffold, connect remote tracking main branches, and deploy secure developer access tokens.
- **Phase 2** — Cloud-sync master text backups (1.pdf, 2.zip) via remote server virtualization.
- **Phase 3** — Establish local container framework inside isolated WordPress Studio environments matching the visual style palette.
- **Phase 4** — Build the clean component templates for semantic recipe data views.
- **Phase 5** — Ship the universal e-book packages and deploy cloud-hosted preview environments.

---

## 🖼️ Image-to-Recipe Mapping

```
Image# | PDF Page | Recipe Title
------------------------------------------------------------
image01 | page   7  | Nedeljna tortilja
image02 | page  10  | Tople leblebije sa jogurtom
image03 | page  13  | Slani doručak sa lanom
image04 | page  16  | Kinoina kaša sa borovnicama
image05 | page  18  | Kokos palačinke
image06 | page  22  | Ćureći stejk
image07 | page  25  | Kokos curry sa crvenim
image08 | page  28  | „Žive" lazanje
image10 | page  31  | Mediteranski pirinač
image11 | page  35  | Krem supa od šargarepe
image12 | page  37  | Ćuretina sa patlidžanom
image13 | page  40  | Restovan krompir
image14 | page  43  | Mini pice od plavog patlidžana
image15 | page  46  | Juneći gulaš sa zelenom
image16 | page  49  | Krem supa od tikvica
image18 | page  52  | Prebranac sa slatkim
image19 | page  60  | Hrskava celer salata
image20 | page  62  | Nesvakidašnja salata
image21 | page  65  | Brzi Tapas
image22 | page  67  | Detoks salata sa narom
image23 | page  70  | Tunin obrok
image24 | page  73  | Salata sa rukolom, fetom
image25 | page  76  | Brokoli sa pinjolima
image26 | page  78  | Jaka voćna salata
image27 | page  82  | Banana hleb sa suvim
image28 | page  85  | Integralni hleb sa semenkama
image29 | page  88  | Rolnice od lisnatog testa
image31 | page  90  | Spori medenjaci iz ugašene rerne
image33 | page  93  | Šumska pita
image34 | page  96  | Zimski kolač sa bundevom
image36 | page 103  | Dubai zalogajčići
image37 | page 105  | Kremasti sutlijaš
image38 | page 107  | Kraljevske bombice
image40 | page 109  | Brzinski banana kolačići
image41 | page 111  | Jafa bez brašna
image43 | page 114  | Najčokoladniji Brauni
image45 | page 118  | Kroasani sa crnom čokoladom
image46 | page 120  | Lažne čoko rolnice
image47 | page 123  | Domaći humus
image48 | page 126  | Proteinski namaz
image49 | page 128  | Pašteta od tune
image50 | page 131  | Raznobojni namaz od avokada
```
