# Didina SoulFood Riznica

A multilingual recipe website by Dragana Stamenković (Didi) — Serbian home cooking, served in Serbian, German, and English.

**Staging:** https://natasha0824inkf.github.io/didina-soulfood-riznica  
**Production:** https://didina-soulfood.github.io/riznica

---

## Features

- **50+ recipes** — searchable, filterable by category (morning, refreshing, oven, coffee, dunno), full-screen modal with ingredients + step-by-step instructions
- **Blog** — long-form posts in SR/DE/EN with per-language content switching
- **Trilingual UI** — SR / DE / EN switchable from the nav, persisted in localStorage
- **Dark mode** — follows system preference, manual toggle, persisted
- **Favorites** — save recipes to a slide-in panel, stored in localStorage, shareable via URL hash
- **Social share** — Facebook, WhatsApp, copy-link panel on recipes and blog posts
- **Newsletter** — Brevo double opt-in, GDPR consent checkbox, AJAX submit (no redirect), trilingual confirmation emails (SR/DE/EN)
- **Contact form** — FormSubmit.co powered, success/error feedback in visitor's language
- **EPUB / PDF** — generated book versions of the recipe collection (see `sources/`)
- **Notion sync** — optional script to sync recipe data from a Notion database

---

## Screenshots

| Staging | Production |
|---|---|
| ![Staging](assets/images/screenshot-staging.png) | ![Production](assets/images/screenshot-prod.png) |

> Take screenshots of both sites and save as `assets/images/screenshot-staging.png` and `assets/images/screenshot-prod.png`

---

## Project Structure

```
didina-soulfood-riznica/
├── assets/
│   └── images/                   # Recipe photos (WebP/JPG/PNG) + logo + SVGs
├── blog/
│   └── kako-naci-vremena.html    # Blog post — SR/DE/EN
├── css/
│   ├── style.css                 # Design system (coral/teal/plum tokens, dark mode)
│   └── responsive.css            # Mobile-first breakpoints
├── js/
│   ├── translations.js           # All UI strings — SR / DE / EN
│   ├── recipes-data.js           # All recipe data (ingredients, instructions, metadata)
│   └── main.js                   # Lang switch, search, modal, favorites, share, newsletter
├── scripts/
│   ├── generate_epub.py          # Generates EPUB from recipes-data.js
│   ├── generate_pdf.py           # Generates PDF from recipes-data.js
│   └── notion_sync.py            # Syncs recipes from Notion database
├── sources/
│   ├── Didina_SoulFood_Riznica.epub     # Generated EPUB (EN)
│   ├── Didina_SoulFood_Riznica.pdf      # Generated PDF
│   └── Didina_kuhinjska_riznica.epub    # Original SR EPUB
├── raw_assets/                   # Original unprocessed images
├── didina-recipes.json           # Recipe data source (JSON)
├── index.html                    # Home — hero, featured recipes, newsletter, book banner
├── recipes.html                  # All recipes — search + category filters
├── blog.html                     # Blog listing
├── about.html                    # About Didi
├── contact.html                  # Contact form
├── privacy.html                  # Privacy policy — SR/DE/EN
├── CLAUDE.md                     # Dev rules — branch strategy, deploy flow
└── SECURITY.md                   # Security policy
```

---

## Dev Setup

No build step. Pure HTML/CSS/JS — open any `.html` directly in a browser, or:

```bash
npx serve .
```

### Adding a new translation string

Every UI string lives in `js/translations.js`. All three languages required:

```js
my_key: { sr: '...', de: '...', en: '...' }
```

Then in HTML: `data-i18n="my_key"`

### Cache busting

Increment `?v=N` on all HTML imports when deploying breaking CSS/JS changes:

```html
<link rel="stylesheet" href="css/style.css?v=2">
<script src="js/main.js?v=2"></script>
```

### Generating the EPUB / PDF

```bash
cd scripts
python3 generate_epub.py   # → sources/Didina_SoulFood_Riznica.epub
python3 generate_pdf.py    # → sources/Didina_SoulFood_Riznica.pdf
```

### Notion sync

Set your Notion API key and database ID, then:

```bash
python3 scripts/notion_sync.py
```

---

## Deploy

Every push to `main` deploys to both staging and production simultaneously via dual-remote git.

```
git push
  └──► natasha0824inkf/didina-soulfood-riznica  → staging Pages
  └──► didina-soulfood/riznica                  → production Pages
```

See `CLAUDE.md` for full branch strategy, push setup, and "new machine" instructions.

---

## Newsletter (Brevo)

- List: `Didina SoulFood Riznica` on Brevo
- Sender: `natashabullitt@gmail.com` (verified)
- Double opt-in enabled with 4 custom trilingual email templates
- Form submits via AJAX to Brevo embed URL — visitor stays on page

## Contact

Dragana Stamenković – Didi  
Instagram: [@didinasoulfoodriznica](https://www.instagram.com/didinasoulfoodriznica)  
Email: didinasoulfoodriznica@gmail.com
