# Didina SoulFood Riznica

A multilingual recipe website by Dragana Stamenković (Didi) — Serbian home cooking, served in Serbian, German, and English.

**Staging:** https://natasha0824inkf.github.io/didina-soulfood-riznica  
**Production:** https://didina-soulfood.github.io/riznica

---

## Features

- **Recipes** — searchable, filterable collection with live search, category filters (morning, refreshing, oven, coffee, dunno), and a full-screen modal with ingredients + instructions
- **Blog** — long-form posts in SR/DE/EN with per-language content switching
- **Trilingual UI** — SR / DE / EN, switchable from the nav, persisted across pages
- **Dark mode** — system-preference aware, manual toggle, persisted
- **Favorites** — save recipes to a slide-in panel, stored in localStorage
- **Social share** — Facebook, WhatsApp, copy-link panel on recipes and blog posts
- **Newsletter** — Brevo double opt-in with GDPR consent checkbox, AJAX submit (no page redirect), trilingual confirmation emails
- **Contact form** — FormSubmit.co powered, success message in visitor's language

---

## Screenshots

| Staging | Production |
|---|---|
| ![Staging](https://natasha0824inkf.github.io/didina-soulfood-riznica) | ![Production](https://didina-soulfood.github.io/riznica) |

> Replace table above with actual screenshots — take one per site and add as `assets/images/screenshot-staging.png` / `screenshot-prod.png`

---

## Project Structure

```
didina-soulfood-riznica/
├── assets/images/          # Recipe photos (WebP/JPG) + logo
├── blog/
│   └── kako-naci-vremena.html   # Blog post — SR/DE/EN
├── css/
│   ├── style.css           # Design system (coral/teal/plum tokens, dark mode)
│   └── responsive.css      # Mobile-first breakpoints
├── js/
│   ├── translations.js     # All UI strings — SR / DE / EN
│   ├── recipes-data.js     # Recipe data (ingredients, instructions, metadata)
│   └── main.js             # Lang switch, search, modal, favorites, share panel, newsletter
├── index.html              # Home — hero, featured recipes, newsletter, book banner
├── recipes.html            # All recipes — search + category filters
├── blog.html               # Blog listing
├── about.html              # About Didi
├── contact.html            # Contact form
├── privacy.html            # Privacy policy — SR/DE/EN
└── CLAUDE.md               # Dev rules — branch strategy, deploy flow
```

---

## Dev Setup

No build step. Pure HTML/CSS/JS.

Open any `.html` file directly in a browser, or serve locally:

```bash
npx serve .
```

### Adding a new translation string

All UI strings go in `js/translations.js`. Every key needs SR, DE, and EN:

```js
my_key: { sr: '...', de: '...', en: '...' }
```

Then use `data-i18n="my_key"` in HTML.

### Cache busting

When deploying breaking CSS/JS changes, increment `?v=N` on all HTML imports:

```html
<link rel="stylesheet" href="css/style.css?v=2">
<script src="js/main.js?v=2"></script>
```

---

## Deploy

Every push to `main` deploys to both sites simultaneously via dual-remote git setup.

See `CLAUDE.md` for full branch strategy and push flow.
