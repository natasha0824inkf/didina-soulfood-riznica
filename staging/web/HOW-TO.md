# web/ — EPUB Recipe Pages

This folder holds one HTML file per recipe, used to generate the EPUB book with Pandoc.
The old placeholder files (`recept_05.html` … `recept_24.html`) have been removed.
**Do not add manually written HTML here** — use the process below.

---

## Naming convention

Every file and its image must share the same slug derived from the Serbian recipe title:

| Recipe title | HTML file | Image file |
|---|---|---|
| Nedeljna tortilja | `web/nedeljna-tortilja.html` | `assets/images/nedeljna-tortilja.jpeg` |
| Tople leblebije sa jogurtom | `web/tople-leblebije.html` | `assets/images/tople-leblebije.jpeg` |
| … | … | … |

Slug rules: lowercase, Serbian letters transliterated (`č→c`, `š→s`, `ž→z`, `ć→c`, `đ→dj`), spaces replaced with `-`, no punctuation.

---

## How to add / update recipes from the Google Doc

1. **Export the Google Doc** as `.docx` (File → Download → Microsoft Word).

2. **Run the extraction script** (to be built — `scripts/docx_to_epub_html.py`):
   ```
   python scripts/docx_to_epub_html.py Didina_SoulFood_riznica.docx
   ```
   This will:
   - Create one `web/<slug>.html` per recipe
   - Copy and rename each embedded image to `assets/images/<slug>.jpeg`
   - Place the image **immediately after the recipe title** (before ingredients)

3. **Commit both the HTML files and any new images**, then push.

4. **Generate the EPUB** with Pandoc:
   ```
   pandoc web/*.html \
     -o Didina_SoulFood_Riznica.epub \
     --epub-cover-image=assets/images/cover-idea-1.svg \
     --metadata title="Didina SoulFood Riznica" \
     --metadata author="Dragana Stamenković – Didi" \
     --metadata lang="sr"
   ```

---

## Required HTML structure per recipe

See `web/template.html` for the full template. The critical rule:

```html
<article class="recipe">
  <h1>Naziv recepta</h1>           <!-- ← Pandoc uses h1 for EPUB chapters -->
  <figure>
    <img src="../assets/images/naziv-recepta.jpeg" alt="Naziv recepta">
  </figure>                         <!-- ← image MUST come before ingredients -->
  <p class="subtitle">…</p>
  <blockquote class="author-comment">…</blockquote>
  <p class="prep-time">…</p>
  <h2>Sastojci</h2>
  <ul>…</ul>
  <h2>Priprema</h2>
  <ol>…</ol>
  <p class="note">…</p>
  <p class="energy">…</p>
</article>
```

**Why image before ingredients?** Pandoc renders the EPUB in document order. An image at the end of a recipe appears on the wrong page. Placing it right after `<h1>` guarantees it appears at the top of each chapter.

---

## Image requirements

- Format: JPEG (from Google Doc export) — keep as `.jpeg`, do not convert
- Resolution: whatever comes out of Google Docs is fine
- Name: must match the HTML filename slug exactly
- Location: `assets/images/<slug>.jpeg`

---

## Current status

| Step | Status |
|---|---|
| Placeholder HTML files removed | ✅ done |
| Image rename (PNG → slug names) | ✅ done (`imageN.png` → recipe slugs) |
| `scripts/docx_to_epub_html.py` script | ⏳ to be built |
| Real recipe HTML files from docx | ⏳ waiting for script |
| EPUB generation tested end-to-end | ⏳ waiting for above |
