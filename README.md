# Didina SoulFood Riznica

A trilingual recipe website and digital cookbook — Serbian, German, and English editions.

**Staging:** https://natasha0824inkf.github.io/didina-soulfood-riznica/staging/index.html

**Pre-prod:** https://natasha0824inkf.github.io/didina-soulfood-riznica/index.html  

**Production:** https://didina-soulfood.github.io/riznica/index.html

---

## Design Tokens

| Token | Value | Usage |
|---|---|---|
| Coral (accent) | `#C9773A` | Buttons, highlights, links |
| Gold | `#D8A14A` | Secondary accent, tags |
| Plum | `#7A5890` | Commentary boxes, quotes |
| Teal | `#4FA83A` | Success states, nutrition labels |
| Cream canvas | `#FDFAF5` | Page background |
| Dark text | `#2A1A0E` | Body typography |

---

## Repository Structure

```
didina-soulfood-riznica/
├── assets/
│   └── images/
│       └── blog/           # Blog post images
├── blog/
│   ├── kako-naci-vremena/
│   │   └── index.html      # Blog post (directory URL)
│   └── nedeljno-kuvanje-mali-ritual/
│       └── index.html
├── css/
│   ├── style.css           # Full design system + dark mode
│   └── responsive.css      # Mobile-first breakpoints
├── js/
│   ├── recipes-data.js     # 44 recipes — multilingual (sr/de/en)
│   ├── translations.js     # All UI strings in SR / DE / EN
│   └── main.js             # Language switch, search, modal, favorites, newsletter
├── scripts/
│   ├── generate_epub.py    # Produces SR / DE / EN EPUB editions
│   ├── generate_pdf.py     # Produces SR / DE / EN PDF editions
│   ├── notion_sync.py      # Syncs blog posts from Notion (manual trigger only)
│   ├── post_registry.json  # Registry of all blog posts (Notion + manual)
│   └── translation_cache.json
├── staging/                # Staging copies with ../asset paths
├── sources/                # Generated EPUB + PDF files
├── about.html
├── blog.html
├── contact.html
├── index.html
├── privacy.html
├── recipes.html
├── CLAUDE.md               # Dev rules (branch strategy, dual-remote push)
├── DRAGANA.md              # Quick reference for Dragana (non-technical)
└── README.md
```

---

## Pages

| File | Purpose |
|---|---|
| `index.html` | Home — hero, featured recipes, newsletter, blog teaser |
| `recipes.html` | All 44 recipes — live search + 6 category filters |
| `about.html` | About Didi — story and values |
| `contact.html` | Contact form (FormSubmit → email) |
| `blog.html` | Blog listing |
| `blog/slug/index.html` | Individual blog post (directory-style URL) |
| `privacy.html` | Privacy policy (SR / DE / EN) |

---

## Translation Architecture

The site is fully trilingual: **SR (Serbian)** is the default, **DE (German)** and **EN (English)** are optional.

### How it works

`js/translations.js` holds a flat key→string map for each language:

```js
const translations = {
  sr: { nav_home: 'Početna', blog_read_more: 'Čitaj dalje', ... },
  de: { nav_home: 'Startseite', blog_read_more: 'Weiterlesen', ... },
  en: { nav_home: 'Home',      blog_read_more: 'Read more',   ... },
};
```

`js/main.js` exposes two patterns via `setLanguage(lang)`:

| Pattern | HTML attribute | Effect |
|---|---|---|
| `data-i18n="key"` | on any element | `el.textContent = t(key)` |
| `data-lang-content="sr/de/en"` | on sibling elements | sets `hidden` on non-matching ones |

`t(key)` falls back: current lang → SR → key name.

### Shorthand: adding a new UI string

**1. Add the key to all three languages in `translations.js`:**
```js
// sr block (~line 3)
my_new_key: 'Srpski tekst',

// de block (~line 115)
my_new_key: 'Deutscher Text',

// en block (~line 227)
my_new_key: 'English text',
```

**2a. Single-language element (JS replaces text at runtime):**
```html
<span data-i18n="my_new_key">Srpski tekst</span>
```
Put the SR fallback as inner text so it shows even before JS runs.

**2b. Multi-language siblings (JS toggles visibility):**
```html
<span data-lang-content="sr">Srpski tekst</span>
<span data-lang-content="de" hidden>Deutscher Text</span>
<span data-lang-content="en" hidden>English text</span>
```
SR element has **no** `hidden` attribute (it's the default).

### Blog post translation pattern

Inside `blog/slug/index.html`, full content blocks use `data-lang-content`:

```html
<div data-lang-content="sr">
  <h1>Srpski naslov</h1>
  <p>Srpski tekst...</p>
</div>
<div data-lang-content="de" hidden>
  <h1>Deutscher Titel</h1>
  <p>Deutscher Text...</p>
</div>
<div data-lang-content="en" hidden>
  <h1>English title</h1>
  <p>English text...</p>
</div>
```

### Cache busting

Assets are versioned with `?v=N`. Increment N in **all** HTML files when making breaking JS/CSS changes:

```html
<link rel="stylesheet" href="css/style.css?v=3">
<script src="js/translations.js?v=3"></script>
<script src="js/main.js?v=3"></script>
```

Current version: **v=3**

---

## Recipe Data

44 recipes in `js/recipes-data.js`. Each recipe is a multilingual object:

```js
{
  number: '1',
  title:         { sr: 'Nedeljni wrap',   de: 'Der Sonntags-Wrap',  en: 'Sunday Wrap' },
  subtitle:      { sr: '...',             de: '...',                en: '...' },
  author_comment:{ sr: '...',             de: '...',                en: '...' },
  prep_time:     { sr: '15 minuta',       de: '15 Minuten',         en: '15 minutes' },
  ingredients:   { sr: [...],             de: [...],                en: [...] },
  instructions:  { sr: [...],             de: [...],                en: [...] },
  note: '...',   // SR only (plain string)
  image: 'assets/images/nedeljni-wrap.png',
  category: 'morning',
  tags: ['vegan', 'quick'],
}
```

---

## Sections (cookbook structure)

| # | SR | DE | EN |
|---|---|---|---|
| 1 | Jutarnji recepti | Morgenrezepte | Morning Recipes |
| 2 | Recepti kada ne znam šta da kuvam | Wenn ich nicht weiß, was ich kochen soll | When I Don't Know What to Cook |
| 3 | Osvežavajući recepti | Erfrischende Rezepte | Refreshing Recipes |
| 4 | Recepti koji mirišu iz rerne | Aus dem Ofen | From the Oven |
| 5 | Recepti uz kafu | Zum Kaffee | With Coffee |
| 6 | Recepti koji se mažu | Aufstriche & Dips | Spreads & Dips |

Plus 3 bonus recipes (not in website data, included in EPUB/PDF only):
- Hrskava celer salata / Knuspriger Sellerie-Salat / Crunchy Celery Salad
- Dubai zalogajčići / Dubai-Häppchen / Dubai Bites
- Raznobojni namaz od avokada / Bunter Avocado-Aufstrich / Colourful Avocado Spread

---

## Digital Editions

Generated by the `scripts/` Python tools using WeasyPrint (PDF) and ebooklib (EPUB).

| Edition | EPUB | PDF |
|---|---|---|
| Serbian | `Didina_SoulFood_Riznica_SR.epub` | `Didina_SoulFood_Riznica_SR.pdf` |
| German | `Didina_SoulFood_Riznica_DE.epub` | `Didina_SoulFood_Riznica_DE.pdf` |
| English | `Didina_SoulFood_Riznica_EN.epub` | `Didina_SoulFood_Riznica_EN.pdf` |

To regenerate all editions:
```bash
python3 scripts/generate_epub.py
python3 scripts/generate_pdf.py
```

---

## Image Naming

All recipe images follow the kebab-case slug pattern matching the recipe title:

```
nedeljni-wrap.png
tople-leblebije.png
slani-dorucak.png
kinoa-kasa-sa-borovnicama.png
kokos-palacinka.png
cureci-stejk.png
kokos-curry.png
zive-lazanje.png
mediteranski-pirinac.png
krem-supa-od-sargarepe.png
curetina-sa-patlidzanom.png
restovani-krompir.png
mini-pice-od-patlidzana.png
juneci-gulas.png
krem-supa-od-tikvica.png
prebranac.png
pasta-sa-zelenim-pestom.png
nesvakidasnja-salata-sa-cveklom.png
brzi-tapas.png
detoks-salata-od-cvekle.png
tunin-bowl.png
salata-sa-cveklom.png
brokoli-sa-pinjolima.png
jaka-vocna-salata.png
banana-hleb.png
integralni-hleb.png
rolnice-od-lisnatog-testa.png
spori-medenjaci.jpeg
vocna-pita-iz-sume.png
zimski-kolac-sa-bundevom.png
puding-od-vanile.png
mali-coko-zalogaji.png
kremasti-sutlijash.png
kraljevske-bombice.png
brzinski-banana-kolacici.png
jafa-bez-brasna.png
najcokoladniji-brauni.png
kroasani-sa-cokoladom.png
lazne-coko-rolnice.png
domaci-humus.png
proteinski-namaz-od-jaja.png
domaca-pasteta-od-tune.png
prokelj-iz-rerne.png
```

---

## Deployment

Three environments across two GitHub repos:

| Environment | URL | Repo |
|---|---|---|
| Staging (test) | `natasha0824inkf.github.io/didina-soulfood-riznica/staging/` | `natasha0824inkf/didina-soulfood-riznica` |
| Pre-prod | `natasha0824inkf.github.io/didina-soulfood-riznica/` | `natasha0824inkf/didina-soulfood-riznica` |
| Production | `didina-soulfood.github.io/riznica/` | `didina-soulfood/riznica` |

Push flow (configured in `.git/config`):
```bash
git push   # goes to both remotes simultaneously
```

See `CLAUDE.md` for full branch strategy and dual-remote setup instructions.
