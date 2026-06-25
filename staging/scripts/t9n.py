#!/usr/bin/env python3
"""
t9n.py — translation shorthand for Didina SoulFood Riznica

Translates English → Serbian + German via MyMemory (free, no key, no model).

MODES
-----
  python scripts/t9n.py key <key_name> "English text"
      Translate one UI string and print the 3 lines to add to translations.js

  python scripts/t9n.py html "English text"
      Print a ready-to-paste data-lang-content block (span or div)

  python scripts/t9n.py blog
      Interactive blog card builder:
      type title / excerpt / tags / slug / date in English
      → get the full <article class="blog-card"> block to paste into blog.html

  python scripts/t9n.py post
      Interactive full post builder:
      type title + body paragraphs in English
      → writes blog/<slug>/index.html with all 3 language sections
"""

import sys
import time
import os
import re
import urllib.request
import urllib.parse

EMAIL = "nevenaneks@gmail.com"  # MyMemory free quota: 10k chars/day with email

MONTHS_SR_DE = {
    "jan": "Januar",  "feb": "Februar", "mar": "März",   "apr": "April",
    "maj": "Mai",     "jun": "Juni",    "jul": "Juli",   "avg": "August",
    "sep": "September","okt": "Oktober","nov": "November","dec": "Dezember",
}
MONTHS_SR_EN = {
    "jan": "January", "feb": "February","mar": "March",  "apr": "April",
    "maj": "May",     "jun": "June",    "jul": "July",   "avg": "August",
    "sep": "September","okt": "October","nov": "November","dec": "December",
}


# ── Translation API ────────────────────────────────────────────────────────────

def translate(text: str, target: str) -> str:
    """Translate English text to `target` (sr | de) via MyMemory."""
    if not text.strip():
        return text
    try:
        params = urllib.parse.urlencode({"q": text, "langpair": f"en|{target}", "de": EMAIL})
        url = f"https://api.mymemory.translated.net/get?{params}"
        with urllib.request.urlopen(url, timeout=10) as resp:
            import json
            data = json.loads(resp.read().decode())
        result = data["responseData"]["translatedText"]
        if result.startswith("PLEASE SELECT"):
            return text
        return result
    except Exception as e:
        print(f"  [warning] translation failed ({e}), using original text", file=sys.stderr)
        return text


def tr_pair(text: str) -> tuple[str, str]:
    """Return (sr, de) for an English string, with a short pause between calls."""
    sr = translate(text, "sr")
    time.sleep(0.5)
    de = translate(text, "de")
    time.sleep(0.3)
    return sr, de


def localise_date(date_sr: str) -> tuple[str, str]:
    """Convert a Serbian date like '24. jun 2026' to DE and EN equivalents."""
    date_de = date_sr
    date_en = date_sr
    lower = date_sr.lower()
    for abbr, de_month in MONTHS_SR_DE.items():
        if abbr in lower:
            date_de = re.sub(abbr, de_month, lower, flags=re.IGNORECASE)
            date_en = re.sub(abbr, MONTHS_SR_EN[abbr], lower, flags=re.IGNORECASE)
            # Capitalise first letter
            date_de = date_de.strip().capitalize()
            date_en = date_en.strip().capitalize()
            break
    return date_de, date_en


# ── Output helpers ─────────────────────────────────────────────────────────────

def divider():
    print("\n" + "─" * 60)


def prompt(label: str, hint: str = "") -> str:
    hint_str = f"  ({hint})" if hint else ""
    return input(f"\n{label}{hint_str}\n> ").strip()


# ── Commands ───────────────────────────────────────────────────────────────────

def cmd_key(key_name: str, en_text: str):
    """Translate one string and print the 3 translations.js lines."""
    print(f'\nTranslating "{en_text}"…')
    sr, de = tr_pair(en_text)

    divider()
    print(f"Add to translations.js (3 places):\n")
    print(f"  // sr block")
    print(f"    {key_name}: '{sr}',\n")
    print(f"  // de block")
    print(f"    {key_name}: '{de}',\n")
    print(f"  // en block")
    print(f"    {key_name}: '{en_text}',")
    divider()


def cmd_html(en_text: str):
    """Translate one string and print a data-lang-content span block."""
    print(f"\nTranslating…")
    sr, de = tr_pair(en_text)

    divider()
    print("Paste into HTML:\n")
    print(f'<span data-lang-content="sr">{sr}</span>')
    print(f'<span data-lang-content="de" hidden>{de}</span>')
    print(f'<span data-lang-content="en" hidden>{en_text}</span>')
    divider()


def cmd_blog():
    """Interactive blog card HTML builder."""
    print("\n=== Blog Card Builder ===")
    print("Write everything in English. Press Enter after each field.\n")

    en_title  = prompt("Post title")
    en_excerpt= prompt("Excerpt", "1–2 sentences that appear on the listing")
    en_tags   = prompt("Tags", "comma-separated, e.g. Wellness, Sunday cooking")
    slug      = prompt("URL slug", "e.g. sunday-cooking-ritual  →  blog/sunday-cooking-ritual/")
    date_sr   = prompt("Date in Serbian", "e.g. 24. jun 2026")

    print("\nTranslating…")

    sr_title,  de_title  = tr_pair(en_title)
    sr_excerpt,de_excerpt= tr_pair(en_excerpt)

    tag_list = [t.strip() for t in en_tags.split(",")]
    sr_tags = " · ".join(translate(t, "sr") for t in tag_list)
    time.sleep(0.4)
    de_tags = " · ".join(translate(t, "de") for t in tag_list)

    date_de, date_en = localise_date(date_sr)

    card = f"""\
      <!-- Post: {slug} -->
      <article class="blog-card">
        <div class="blog-card-body">
          <div class="blog-card-tag" data-lang-content="sr">{sr_tags}</div>
          <div class="blog-card-tag" data-lang-content="de" hidden>{de_tags}</div>
          <div class="blog-card-tag" data-lang-content="en" hidden>{en_tags}</div>

          <h2 class="blog-card-title">
            <span data-lang-content="sr">{sr_title}</span>
            <span data-lang-content="de" hidden>{de_title}</span>
            <span data-lang-content="en" hidden>{en_title}</span>
          </h2>

          <p class="blog-card-excerpt">
            <span data-lang-content="sr">{sr_excerpt}</span>
            <span data-lang-content="de" hidden>{de_excerpt}</span>
            <span data-lang-content="en" hidden>{en_excerpt}</span>
          </p>

          <div class="blog-card-meta">
            <span class="blog-card-date">
              <span data-lang-content="sr">{date_sr}</span>
              <span data-lang-content="de" hidden>{date_de}</span>
              <span data-lang-content="en" hidden>{date_en}</span>
            </span>
            <a href="blog/{slug}/" class="blog-read-more" data-i18n="blog_read_more">Čitaj dalje</a>
          </div>
        </div>
      </article>"""

    divider()
    print("Paste into blog.html between <!-- BLOG_GRID_START --> and <!-- BLOG_GRID_END -->:\n")
    print(card)
    divider()


def cmd_post():
    """Interactive full blog post file builder."""
    print("\n=== Full Blog Post Builder ===")
    print("Write in English. The script generates blog/<slug>/index.html with SR / DE / EN.\n")

    en_title    = prompt("Post title")
    slug        = prompt("URL slug", "e.g. sunday-cooking-ritual")
    en_tags     = prompt("Tags", "comma-separated")
    date_sr     = prompt("Date in Serbian", "e.g. 24. jun 2026")

    print("\nNow type the post body.")
    print("Enter one paragraph per line. Empty line = done.\n")
    paragraphs = []
    while True:
        line = input("> ").strip()
        if not line:
            break
        paragraphs.append(line)

    if not paragraphs:
        print("No paragraphs entered — aborting.")
        return

    print("\nTranslating title and tags…")
    sr_title, de_title = tr_pair(en_title)

    tag_list = [t.strip() for t in en_tags.split(",")]
    sr_tags = " · ".join(translate(t, "sr") for t in tag_list)
    time.sleep(0.4)
    de_tags = " · ".join(translate(t, "de") for t in tag_list)

    date_de, date_en = localise_date(date_sr)

    print(f"Translating {len(paragraphs)} paragraph(s)…")
    sr_paras, de_paras = [], []
    for i, p in enumerate(paragraphs, 1):
        print(f"  paragraph {i}/{len(paragraphs)}")
        sr_p, de_p = tr_pair(p)
        sr_paras.append(sr_p)
        de_paras.append(de_p)

    def para_blocks(paras):
        return "\n".join(f"            <p>{p}</p>" for p in paras)

    html = f"""\
<!DOCTYPE html>
<html lang="sr">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title data-lang-content="sr">{sr_title} – Didina SoulFood Riznica</title>
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Dancing+Script:wght@700&display=swap" rel="stylesheet">
  <link rel="stylesheet" href="../../css/style.css?v=3">
  <link rel="stylesheet" href="../../css/responsive.css">
  <script>if(localStorage.getItem('didina-theme')==='dark'||(!localStorage.getItem('didina-theme')&&window.matchMedia('(prefers-color-scheme:dark)').matches))document.documentElement.classList.add('dark-mode');</script>
  <style>
    .site-header{{background:#6B4F3A;border-bottom:2px solid #D8A14A;position:sticky;top:0;z-index:100}}
    .nav-links a{{color:rgba(247,241,231,.72);border-bottom:2px solid transparent}}
    .nav-links a.active{{color:#D8A14A;border-bottom-color:#D8A14A;font-weight:600}}
    html.dark-mode .site-header{{background:#1A1208}}
  </style>
</head>
<body>

<header class="site-header">
  <nav class="nav-container">
    <a href="../../index.html" class="nav-logo" aria-label="Didina SoulFood Riznica">
      <img src="../../assets/images/logo.svg" alt="" class="nav-logo-img" aria-hidden="true">
      <span class="nav-logo-main">Didina SoulFood Riznica</span>
    </a>
    <button class="hamburger" id="hamburger" aria-label="Meni" aria-expanded="false">
      <span class="hamburger-line"></span>
      <span class="hamburger-line"></span>
      <span class="hamburger-line"></span>
    </button>
    <ul class="nav-links" id="navLinks">
      <li><a href="../../index.html"   data-i18n="nav_home">Početna</a></li>
      <li><a href="../../recipes.html" data-i18n="nav_recipes">Recepti</a></li>
      <li><a href="../../blog.html"    class="active" data-i18n="nav_blog">Blog</a></li>
      <li><a href="../../about.html"   data-i18n="nav_about">O meni</a></li>
      <li><a href="../../contact.html" data-i18n="nav_contact">Kontakt</a></li>
    </ul>
    <div class="nav-right">
      <div class="lang-switcher">
        <button class="lang-btn active" data-lang="sr">SR</button>
        <button class="lang-btn"        data-lang="de">DE</button>
        <button class="lang-btn"        data-lang="en">EN</button>
      </div>
      <button class="theme-toggle" aria-label="Toggle theme">🌙</button>
    </div>
  </nav>
</header>

<article class="blog-post">
  <div class="blog-post-hero">
    <div class="container">
      <div class="blog-post-tag">
        <span data-lang-content="sr">{sr_tags}</span>
        <span data-lang-content="de" hidden>{de_tags}</span>
        <span data-lang-content="en" hidden>{en_tags}</span>
      </div>
      <h1 class="blog-post-title">
        <span data-lang-content="sr">{sr_title}</span>
        <span data-lang-content="de" hidden>{de_title}</span>
        <span data-lang-content="en" hidden>{en_title}</span>
      </h1>
      <div class="blog-post-meta">
        <span class="blog-post-date">
          <span data-lang-content="sr">{date_sr}</span>
          <span data-lang-content="de" hidden>{date_de}</span>
          <span data-lang-content="en" hidden>{date_en}</span>
        </span>
      </div>
    </div>
  </div>

  <div class="container blog-post-body">

    <div data-lang-content="sr">
{para_blocks(sr_paras)}
    </div>

    <div data-lang-content="de" hidden>
{para_blocks(de_paras)}
    </div>

    <div data-lang-content="en" hidden>
{para_blocks(paragraphs)}
    </div>

    <div class="blog-post-footer">
      <a href="../../blog.html" class="blog-back-link" data-i18n="back_to_blog">← Blog</a>
    </div>

  </div>
</article>

<footer class="site-footer">
  <div class="footer-content">
    <div class="footer-logo">Didina SoulFood Riznica</div>
    <p class="footer-tagline" data-i18n="footer_text">Napravljeno s ljubavlju za sve koji veruju da je hrana jezik duše.</p>
    <div class="footer-divider"></div>
    <nav class="footer-nav">
      <a href="../../index.html"   data-i18n="nav_home">Početna</a>
      <a href="../../recipes.html" data-i18n="nav_recipes">Recepti</a>
      <a href="../../blog.html"    data-i18n="nav_blog">Blog</a>
      <a href="../../about.html"   data-i18n="nav_about">O meni</a>
      <a href="../../contact.html" data-i18n="nav_contact">Kontakt</a>
      <a href="../../privacy.html" data-i18n="nav_privacy">Privatnost</a>
    </nav>
    <div class="footer-social">
      <a href="https://www.instagram.com/didinasoulfoodriznica" target="_blank" rel="noopener" class="footer-social-link">
        <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
        @didinasoulfoodriznica
      </a>
      <a href="https://amber-loan-581.notion.site/Didina-SoulFood-Riznica-fd2eeb0080ae82a4bae70139f81310b3?pvs=73" target="_blank" rel="noopener" class="footer-social-link">
        <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M4.459 4.208c.746.606 1.026.56 2.428.466l13.215-.793c.28 0 .047-.28-.046-.326L17.86 1.968c-.42-.326-.981-.7-2.055-.607L3.01 2.295c-.466.046-.56.28-.374.466zm.793 3.08v13.904c0 .747.373 1.027 1.214.98l14.523-.84c.841-.046.935-.56.935-1.167V6.354c0-.606-.233-.933-.748-.887l-15.177.887c-.56.047-.747.327-.747.933zm14.337.745c.093.42 0 .84-.42.888l-.7.14v10.264c-.608.327-1.168.514-1.635.514-.748 0-.935-.234-1.495-.933l-4.577-7.186v6.952L12.21 19s0 .84-1.168.84l-3.222.186c-.093-.186 0-.653.327-.746l.84-.233V9.854L7.822 9.76c-.094-.42.14-1.026.793-1.073l3.456-.233 4.764 7.279v-6.44l-1.215-.14c-.093-.514.28-.887.747-.933zM1.936 1.035l13.31-.98c1.634-.14 2.055-.047 3.082.7l4.249 2.986c.7.513.934.653.934 1.213v16.378c0 1.026-.373 1.634-1.68 1.726l-15.458.934c-.98.047-1.448-.093-1.962-.747l-3.129-4.06c-.56-.747-.793-1.306-.793-1.96V2.667c0-.839.374-1.54 1.447-1.632z"/></svg>
        Blog &amp; Riznica
      </a>
    </div>
    <p class="footer-copy">© 2026 Dragana Stamenković – Didi · Didina SoulFood Riznica. <span data-i18n="footer_rights">Sva prava zadržana.</span></p>
  </div>
</footer>

<script src="../../js/translations.js?v=3"></script>
<script src="../../js/recipes-data.js"></script>
<script src="../../js/main.js?v=3"></script>
</body>
</html>"""

    # Write file
    out_dir = os.path.join(os.path.dirname(__file__), "..", "blog", slug)
    os.makedirs(out_dir, exist_ok=True)
    out_path = os.path.join(out_dir, "index.html")

    with open(out_path, "w", encoding="utf-8") as f:
        f.write(html)

    divider()
    print(f"Written: blog/{slug}/index.html")
    print(f"\nNext steps:")
    print(f"  1. Review the file and tweak the translations if needed")
    print(f"  2. Run:  python scripts/t9n.py blog")
    print(f"     → get the blog card HTML to paste into blog.html")
    print(f"  3. Commit + push")
    divider()


# ── Entry point ────────────────────────────────────────────────────────────────

def main():
    if len(sys.argv) < 2:
        print(__doc__)
        sys.exit(0)

    cmd = sys.argv[1]

    if cmd == "key":
        if len(sys.argv) < 4:
            print("Usage: python scripts/t9n.py key <key_name> \"English text\"")
            sys.exit(1)
        cmd_key(sys.argv[2], sys.argv[3])

    elif cmd == "html":
        if len(sys.argv) < 3:
            print("Usage: python scripts/t9n.py html \"English text\"")
            sys.exit(1)
        cmd_html(sys.argv[2])

    elif cmd == "blog":
        cmd_blog()

    elif cmd == "post":
        cmd_post()

    else:
        print(__doc__)
        sys.exit(1)


if __name__ == "__main__":
    main()
