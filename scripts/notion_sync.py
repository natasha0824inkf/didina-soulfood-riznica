#!/usr/bin/env python3
"""Syncs Published posts from Notion database to blog HTML files."""

import os
import re
import sys
import json
import requests
from datetime import datetime
from pathlib import Path

NOTION_TOKEN = re.sub(r'\s', '', os.environ["NOTION_TOKEN"])
NOTION_DB_ID = re.sub(r'\s', '', os.environ["NOTION_DB_ID"])
REPO_ROOT = Path(__file__).parent.parent

HEADERS = {
    "Authorization": f"Bearer {NOTION_TOKEN}",
    "Notion-Version": "2022-06-28",
    "Content-Type": "application/json",
}

SR_MONTHS = ["jan","feb","mar","apr","maj","jun","jul","avg","sep","okt","nov","dec"]
DE_MONTHS = ["Januar","Februar","März","April","Mai","Juni","Juli","August","September","Oktober","November","Dezember"]
EN_MONTHS = ["January","February","March","April","May","June","July","August","September","October","November","December"]


def format_date(date_str, lang):
    if not date_str:
        return ""
    try:
        dt = datetime.fromisoformat(date_str)
    except ValueError:
        return date_str
    if lang == "SR":
        return f"{dt.day}. {SR_MONTHS[dt.month-1]} {dt.year}"
    if lang == "DE":
        return f"{dt.day}. {DE_MONTHS[dt.month-1]} {dt.year}"
    return f"{dt.day} {EN_MONTHS[dt.month-1]} {dt.year}"


def get_prop(page, name, kind):
    prop = page["properties"].get(name)
    if not prop:
        return ""
    if kind == "title":
        return "".join(rt["plain_text"] for rt in prop.get("title", []))
    if kind == "text":
        return "".join(rt["plain_text"] for rt in prop.get("rich_text", []))
    if kind == "select":
        s = prop.get("select")
        return s["name"] if s else ""
    if kind == "date":
        d = prop.get("date")
        return d["start"] if d else ""
    if kind == "multi_select":
        return " · ".join(opt["name"] for opt in prop.get("multi_select", []))
    return ""


def rich_text_to_html(rich_texts):
    out = ""
    for rt in rich_texts:
        text = rt["plain_text"].replace("&", "&amp;").replace("<", "&lt;").replace(">", "&gt;")
        ann = rt.get("annotations", {})
        if ann.get("bold"):
            text = f"<strong>{text}</strong>"
        if ann.get("italic"):
            text = f"<em>{text}</em>"
        if ann.get("code"):
            text = f"<code>{text}</code>"
        href = rt.get("href")
        if href:
            text = f'<a href="{href}">{text}</a>'
        out += text
    return out


def blocks_to_html(blocks):
    html = ""
    i = 0
    while i < len(blocks):
        block = blocks[i]
        btype = block["type"]
        content = block.get(btype, {})

        if btype == "paragraph":
            text = rich_text_to_html(content.get("rich_text", []))
            if text.strip():
                html += f"        <p>{text}</p>\n"

        elif btype in ("heading_1", "heading_2", "heading_3"):
            level = btype[-1]
            text = rich_text_to_html(content.get("rich_text", []))
            html += f"        <h{level}>{text}</h{level}>\n"

        elif btype == "bulleted_list_item":
            items = []
            while i < len(blocks) and blocks[i]["type"] == "bulleted_list_item":
                items.append(rich_text_to_html(blocks[i]["bulleted_list_item"].get("rich_text", [])))
                i += 1
            html += "        <ul>\n"
            for item in items:
                html += f"          <li>{item}</li>\n"
            html += "        </ul>\n"
            continue

        elif btype == "numbered_list_item":
            items = []
            while i < len(blocks) and blocks[i]["type"] == "numbered_list_item":
                items.append(rich_text_to_html(blocks[i]["numbered_list_item"].get("rich_text", [])))
                i += 1
            html += "        <ol>\n"
            for item in items:
                html += f"          <li>{item}</li>\n"
            html += "        </ol>\n"
            continue

        elif btype == "quote":
            text = rich_text_to_html(content.get("rich_text", []))
            html += f"        <blockquote>{text}</blockquote>\n"

        elif btype == "divider":
            html += "        <hr>\n"

        elif btype == "callout":
            text = rich_text_to_html(content.get("rich_text", []))
            html += f"        <p><em>{text}</em></p>\n"

        i += 1
    return html


def get_page_blocks(page_id):
    url = f"https://api.notion.com/v1/blocks/{page_id}/children?page_size=100"
    blocks = []
    while url:
        res = requests.get(url, headers=HEADERS)
        res.raise_for_status()
        data = res.json()
        blocks.extend(data["results"])
        if data.get("has_more") and data.get("next_cursor"):
            url = f"https://api.notion.com/v1/blocks/{page_id}/children?page_size=100&start_cursor={data['next_cursor']}"
        else:
            url = None
    return blocks


def query_database():
    url = f"https://api.notion.com/v1/databases/{NOTION_DB_ID}/query"
    payload = {"filter": {"property": "Status", "status": {"equals": "Published"}}}
    pages = []
    while True:
        res = requests.post(url, headers=HEADERS, json=payload)
        if not res.ok:
            print(f"Notion API error {res.status_code}: {res.text}", file=sys.stderr)
            res.raise_for_status()
        data = res.json()
        pages.extend(data["results"])
        if data.get("has_more") and data.get("next_cursor"):
            payload["start_cursor"] = data["next_cursor"]
        else:
            break
    return pages


def first_paragraph(body_html):
    m = re.search(r"<p>(.*?)</p>", body_html, re.DOTALL)
    if m:
        return re.sub(r"<[^>]+>", "", m.group(1))[:140].strip()
    return ""


def render_post(slug, versions):
    sr = versions.get("SR", {})
    de = versions.get("DE", {})
    en = versions.get("EN", {})

    def v(d, key, fallback=""):
        return d.get(key) or fallback

    sr_title = v(sr, "title")
    de_title = v(de, "title", sr_title)
    en_title = v(en, "title", sr_title)

    sr_tags  = v(sr, "tags")
    de_tags  = v(de, "tags", sr_tags)
    en_tags  = v(en, "tags", sr_tags)

    date_raw = v(sr, "date") or v(de, "date") or v(en, "date")
    sr_date  = format_date(date_raw, "SR")
    de_date  = format_date(date_raw, "DE")
    en_date  = format_date(date_raw, "EN")

    sr_body  = v(sr, "body")
    de_body  = v(de, "body")
    en_body  = v(en, "body")

    meta_desc = first_paragraph(sr_body)

    return f'''<!DOCTYPE html>
<html lang="sr">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>{sr_title} – Didina SoulFood Riznica</title>
  <meta name="description" content="{meta_desc}">
  <meta name="author" content="Didi – Dragana Stamenković">
  <meta property="og:title" content="{sr_title} – Didina SoulFood Riznica">
  <meta property="og:description" content="{meta_desc}">
  <meta property="og:type" content="article">
  <meta property="article:published_time" content="{date_raw}">
  <meta property="article:author" content="Didi">
  <script type="application/ld+json">
  {{
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "headline": "{sr_title}",
    "author": {{ "@type": "Person", "name": "Didi – Dragana Stamenković" }},
    "datePublished": "{date_raw}",
    "publisher": {{ "@type": "Organization", "name": "Didina SoulFood Riznica" }}
  }}
  </script>
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Dancing+Script:wght@700&display=swap" rel="stylesheet">
  <link rel="stylesheet" href="../css/style.css">
  <link rel="stylesheet" href="../css/responsive.css">
  <script>if(localStorage.getItem(\'didina-theme\')==\'dark\'||(!localStorage.getItem(\'didina-theme\')&&window.matchMedia(\'(prefers-color-scheme:dark)\').matches))document.documentElement.classList.add(\'dark-mode\');</script>
  <style>.site-header{{background:#6B4F3A;border-bottom:2px solid #D8A14A;position:sticky;top:0;z-index:100}}.nav-links a{{color:rgba(247,241,231,.72);border-bottom:2px solid transparent}}.nav-links a.active{{color:#D8A14A;border-bottom-color:#D8A14A;font-weight:600}}html.dark-mode .site-header{{background:#1A1208}}</style>
</head>
<body>

<header class="site-header">
  <nav class="nav-container">
    <a href="../index.html" class="nav-logo" aria-label="Didina SoulFood Riznica">
      <img src="../assets/images/logo.svg" alt="" class="nav-logo-img" aria-hidden="true">
      <span class="nav-logo-main">Didina SoulFood Riznica</span>
    </a>
    <button class="hamburger" id="hamburger" aria-label="Meni" aria-expanded="false">
      <span class="hamburger-line"></span>
      <span class="hamburger-line"></span>
      <span class="hamburger-line"></span>
    </button>
    <ul class="nav-links" id="navLinks">
      <li><a href="../index.html"   data-i18n="nav_home">Početna</a></li>
      <li><a href="../recipes.html" data-i18n="nav_recipes">Recepti</a></li>
      <li><a href="../blog.html"    class="active" data-i18n="nav_blog">Blog</a></li>
      <li><a href="../about.html"   data-i18n="nav_about">O meni</a></li>
      <li><a href="../contact.html" data-i18n="nav_contact">Kontakt</a></li>
    </ul>
    <div class="nav-right">
      <div class="lang-switcher">
        <button class="lang-btn active" data-lang="sr">SR</button>
        <button class="lang-btn"        data-lang="de">DE</button>
        <button class="lang-btn"        data-lang="en">EN</button>
      </div>
      <button class="theme-toggle" aria-label="Toggle theme">🌙</button>
      <button class="favorites-btn">
        🤍 <span class="favorites-btn-label" data-i18n="nav_favorites">Omiljeni</span>
        <span class="fav-count">0</span>
      </button>
    </div>
  </nav>
</header>

<main>
  <article class="blog-post">

    <a href="../blog.html" class="blog-post-back">← <span data-i18n="blog_back">Nazad na blog</span></a>

    <!-- SR -->
    <div data-lang-content="sr">
      <div class="blog-post-tag">{sr_tags}</div>
      <h1 class="blog-post-title">{sr_title}</h1>
      <div class="blog-post-meta">
        <span>Piše: Didi</span>
        <span>{sr_date}</span>
      </div>
      <div class="blog-post-body">
{sr_body}      </div>
    </div>

    <!-- DE -->
    <div data-lang-content="de" hidden>
      <div class="blog-post-tag">{de_tags}</div>
      <h1 class="blog-post-title">{de_title}</h1>
      <div class="blog-post-meta">
        <span>Von Didi</span>
        <span>{de_date}</span>
      </div>
      <div class="blog-post-body">
{de_body}      </div>
    </div>

    <!-- EN -->
    <div data-lang-content="en" hidden>
      <div class="blog-post-tag">{en_tags}</div>
      <h1 class="blog-post-title">{en_title}</h1>
      <div class="blog-post-meta">
        <span>By Didi</span>
        <span>{en_date}</span>
      </div>
      <div class="blog-post-body">
{en_body}      </div>
    </div>

    <div class="blog-post-share">
      <span data-i18n="share_recipe">Podeli</span>
      <button class="modal-share-btn" id="shareBtn" style="margin:0">↗ Share</button>
    </div>

  </article>
</main>

<footer class="site-footer">
  <div class="footer-content">
    <div class="footer-logo">Didina SoulFood Riznica</div>
    <p class="footer-tagline" data-i18n="footer_text">Napravljeno s ljubavlju za sve koji veruju da je hrana jezik duše.</p>
    <div class="footer-divider"></div>
    <nav class="footer-nav">
      <a href="../index.html"   data-i18n="nav_home">Početna</a>
      <a href="../recipes.html" data-i18n="nav_recipes">Recepti</a>
      <a href="../blog.html"    data-i18n="nav_blog">Blog</a>
      <a href="../about.html"   data-i18n="nav_about">O meni</a>
      <a href="../contact.html" data-i18n="nav_contact">Kontakt</a>
    </nav>
    <p class="footer-copy">© 2026 Dragana Stamenković – Didi · Didina SoulFood Riznica. <span data-i18n="footer_rights">Sva prava zadržana.</span></p>
  </div>
</footer>

<aside class="favorites-panel" id="favoritesPanel">
  <div class="favorites-panel-header">
    <span class="favorites-panel-title" data-i18n="favorites_title">Moji omiljeni recepti</span>
    <button class="close-favorites-btn" id="closeFavPanel">×</button>
  </div>
  <div class="favorites-list" id="favoritesList"></div>
</aside>

<div class="modal-overlay" id="modalOverlay" role="dialog" aria-modal="true" aria-labelledby="modalTitle">
  <div class="modal" tabindex="-1">
    <div class="modal-header">
      <button class="modal-close" id="closeModal" aria-label="Zatvori">×</button>
      <div class="modal-category-badge" id="modalCategory"></div>
      <h2 class="modal-title" id="modalTitle"></h2>
      <p class="modal-subtitle" id="modalSubtitle"></p>
      <div class="modal-meta-item" id="modalTime"></div>
    </div>
    <div class="modal-body">
      <blockquote class="modal-comment" id="modalComment" hidden></blockquote>
      <h3 class="modal-section-title" data-i18n="ingredients">Sastojci</h3>
      <ul class="ingredients-list" id="modalIngredients"></ul>
      <h3 class="modal-section-title" data-i18n="instructions">Priprema</h3>
      <ol class="instructions-list" id="modalInstructions"></ol>
      <button class="modal-fav-btn" id="modalFavBtn">🤍 <span data-i18n="add_favorite">Dodaj u omiljene</span></button>
      <button class="modal-share-btn" id="modalShareBtn">↗ <span data-i18n="share_recipe">Podeli recept</span></button>
    </div>
  </div>
</div>

<script src="../js/translations.js"></script>
<script src="../js/recipes-data.js"></script>
<script src="../js/main.js"></script>
<script>
  document.getElementById('shareBtn')?.addEventListener('click', () => {{
    if (navigator.share) {{
      navigator.share({{ title: document.title, url: location.href }});
    }} else {{
      navigator.clipboard.writeText(location.href);
    }}
  }});
</script>
</body>
</html>'''


def render_card(slug, versions, date_raw):
    sr = versions.get("SR", {})
    de = versions.get("DE", {})
    en = versions.get("EN", {})

    sr_title   = sr.get("title", "")
    de_title   = de.get("title", sr_title)
    en_title   = en.get("title", sr_title)

    sr_tags    = sr.get("tags", "")
    de_tags    = de.get("tags", sr_tags)
    en_tags    = en.get("tags", sr_tags)

    sr_excerpt = first_paragraph(sr.get("body", ""))
    de_excerpt = first_paragraph(de.get("body", ""))
    en_excerpt = first_paragraph(en.get("body", ""))

    sr_date    = format_date(date_raw, "SR")
    de_date    = format_date(date_raw, "DE")
    en_date    = format_date(date_raw, "EN")

    return f'''
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
              <span data-lang-content="sr">{sr_date}</span>
              <span data-lang-content="de" hidden>{de_date}</span>
              <span data-lang-content="en" hidden>{en_date}</span>
            </span>
            <a href="blog/{slug}.html" class="blog-read-more" data-i18n="blog_read_more">Čitaj dalje</a>
          </div>
        </div>
      </article>'''


def update_blog_listing(cards_html):
    blog_path = REPO_ROOT / "blog.html"
    content = blog_path.read_text(encoding="utf-8")

    # Replace everything between <div class="blog-grid"> and </div> (the grid)
    new_grid = f'    <div class="blog-grid">\n{cards_html}\n\n    </div>'
    content = re.sub(
        r'<div class="blog-grid">.*?</div>',
        new_grid,
        content,
        flags=re.DOTALL
    )
    blog_path.write_text(content, encoding="utf-8")


def main():
    print("Querying Notion database...")
    pages = query_database()
    print(f"Found {len(pages)} published entries")

    # Group by slug
    posts = {}
    for page in pages:
        slug = get_prop(page, "Slug", "text")
        lang = get_prop(page, "Language", "select").upper()
        if not slug or lang not in ("SR", "DE", "EN"):
            print(f"  Skipping page {page['id']}: missing slug or invalid language")
            continue

        if slug not in posts:
            posts[slug] = {"versions": {}, "date": get_prop(page, "Date", "date")}

        blocks = get_page_blocks(page["id"])
        posts[slug]["versions"][lang] = {
            "title": get_prop(page, "Title", "title"),
            "tags":  get_prop(page, "Tags", "multi_select"),
            "date":  get_prop(page, "Date", "date"),
            "body":  blocks_to_html(blocks),
        }

    if not posts:
        print("No valid posts to sync.")
        return

    # Sort by date descending (newest first)
    sorted_posts = sorted(posts.items(), key=lambda x: x[1]["date"] or "", reverse=True)

    # Generate post HTML files
    blog_dir = REPO_ROOT / "blog"
    blog_dir.mkdir(exist_ok=True)
    cards = []

    for slug, data in sorted_posts:
        versions = data["versions"]
        date_raw = data["date"]

        post_html = render_post(slug, versions)
        out_path = blog_dir / f"{slug}.html"
        out_path.write_text(post_html, encoding="utf-8")
        print(f"  Written: blog/{slug}.html")

        cards.append(render_card(slug, versions, date_raw))

    # Update blog.html listing
    cards_html = "\n".join(cards)
    update_blog_listing(cards_html)
    print("  Updated: blog.html")
    print("Sync complete.")


if __name__ == "__main__":
    main()
