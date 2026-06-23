#!/usr/bin/env python3
"""Syncs Published posts from Notion database to blog HTML files.

Two authoring modes:
  Legacy (3-row):  Row has Language select set to SR/DE/EN → grouped by slug (old behaviour)
  New (1-row):     Row has no Language select → single page per post, language content
                   lives inside toggle blocks labelled 🇷🇸 / 🇩🇪 / 🇬🇧 (or SR/DE/EN)
"""

import os
import re
import sys
import html
import json
import hashlib
import unicodedata
import requests
from datetime import datetime
from pathlib import Path

NOTION_TOKEN = re.sub(r'\s', '', os.environ["NOTION_TOKEN"])
NOTION_DB_ID = re.sub(r'\s', '', os.environ["NOTION_DB_ID"])
REPO_ROOT = Path(__file__).parent.parent
TRANSLATION_CACHE = REPO_ROOT / "scripts" / "translation_cache.json"

HEADERS = {
    "Authorization": f"Bearer {NOTION_TOKEN}",
    "Notion-Version": "2022-06-28",
    "Content-Type": "application/json",
}

SR_MONTHS = ["jan","feb","mar","apr","maj","jun","jul","avg","sep","okt","nov","dec"]
DE_MONTHS = ["Januar","Februar","März","April","Mai","Juni","Juli","August","September","Oktober","November","Dezember"]
EN_MONTHS = ["January","February","March","April","May","June","July","August","September","October","November","December"]

_SR_TRANSLIT = str.maketrans("šŠčČćĆđĐžŽ", "sScCcCdDzZ")

def slugify(text):
    """Turn any title into a URL-safe slug (Serbian-aware)."""
    text = text.translate(_SR_TRANSLIT)
    text = unicodedata.normalize("NFKD", text).encode("ascii", "ignore").decode()
    text = text.lower()
    text = re.sub(r"[^\w\s-]", "", text)
    text = re.sub(r"[\s_]+", "-", text).strip("-")
    return re.sub(r"-+", "-", text)[:60]


# Patterns to detect language toggle headings like "🇷🇸 Srpski", "DE", "[EN]", etc.
LANG_TOGGLE_RE = {
    "SR": re.compile(r"🇷🇸|[Ss]rpsk|[Ss]erbian|\bSR\b|\[SR\]", re.IGNORECASE),
    "DE": re.compile(r"🇩🇪|[Dd]eutsch|[Gg]erman|\bDE\b|\[DE\]",  re.IGNORECASE),
    "EN": re.compile(r"🇬🇧|[Ee]nglish|\bEN\b|\[EN\]",              re.IGNORECASE),
}


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


def download_image(url, slug, idx):
    """Download a Notion image to assets/images/blog/ and return the relative src path."""
    img_dir = REPO_ROOT / "assets" / "images" / "blog"
    img_dir.mkdir(parents=True, exist_ok=True)
    ext = ".jpg"
    for candidate in (".png", ".gif", ".webp", ".jpeg"):
        if candidate in url.lower().split("?")[0]:
            ext = candidate
            break
    filename = f"{slug}-{idx}{ext}"
    dest = img_dir / filename
    if not dest.exists():
        try:
            res = requests.get(url, timeout=20)
            res.raise_for_status()
            dest.write_bytes(res.content)
            print(f"  Downloaded image → assets/images/blog/{filename}")
        except Exception as e:
            print(f"  Warning: could not download image: {e}", file=sys.stderr)
            return None
    return f"../../assets/images/blog/{filename}"


def blocks_to_html(blocks, slug="post"):
    out = ""
    img_counter = [0]
    i = 0
    while i < len(blocks):
        block = blocks[i]
        btype = block["type"]
        content = block.get(btype, {})

        if btype == "paragraph":
            text = rich_text_to_html(content.get("rich_text", []))
            if text.strip():
                out += f"        <p>{text}</p>\n"

        elif btype in ("heading_1", "heading_2", "heading_3"):
            level = btype[-1]
            text = rich_text_to_html(content.get("rich_text", []))
            out += f"        <h{level}>{text}</h{level}>\n"

        elif btype == "bulleted_list_item":
            items = []
            while i < len(blocks) and blocks[i]["type"] == "bulleted_list_item":
                items.append(rich_text_to_html(blocks[i]["bulleted_list_item"].get("rich_text", [])))
                i += 1
            out += "        <ul>\n"
            for item in items:
                out += f"          <li>{item}</li>\n"
            out += "        </ul>\n"
            continue

        elif btype == "numbered_list_item":
            items = []
            while i < len(blocks) and blocks[i]["type"] == "numbered_list_item":
                items.append(rich_text_to_html(blocks[i]["numbered_list_item"].get("rich_text", [])))
                i += 1
            out += "        <ol>\n"
            for item in items:
                out += f"          <li>{item}</li>\n"
            out += "        </ol>\n"
            continue

        elif btype == "quote":
            text = rich_text_to_html(content.get("rich_text", []))
            out += f"        <blockquote>{text}</blockquote>\n"

        elif btype == "divider":
            out += "        <hr>\n"

        elif btype == "callout":
            text = rich_text_to_html(content.get("rich_text", []))
            out += f"        <p><em>{text}</em></p>\n"

        elif btype == "image":
            src = (content.get("file", {}).get("url")
                   or content.get("external", {}).get("url", ""))
            caption_parts = content.get("caption", [])
            caption = rich_text_to_html(caption_parts) if caption_parts else ""
            if src:
                local = download_image(src, slug, img_counter[0])
                img_counter[0] += 1
                display_src = local if local else html.escape(src)
                alt = html.escape(re.sub(r"<[^>]+>", "", caption))
                out += f'        <figure class="blog-figure">\n'
                out += f'          <img src="{display_src}" alt="{alt}" class="blog-img" loading="lazy">\n'
                if caption:
                    out += f'          <figcaption>{caption}</figcaption>\n'
                out += f'        </figure>\n'

        elif btype in ("embed", "video", "bookmark"):
            url = (content.get("url", "")
                   or content.get("external", {}).get("url", "")
                   or content.get("file", {}).get("url", ""))
            if url:
                yt = re.search(r"(?:youtube\.com/watch\?v=|youtu\.be/)([\w-]+)", url)
                spotify = re.search(r"open\.spotify\.com/(track|album|playlist|episode)/([\w]+)", url)
                if yt:
                    vid = yt.group(1)
                    out += (f'        <div class="blog-embed">\n'
                            f'          <iframe src="https://www.youtube.com/embed/{vid}" '
                            f'frameborder="0" allowfullscreen loading="lazy" '
                            f'title="YouTube video"></iframe>\n'
                            f'        </div>\n')
                elif spotify:
                    kind, sid = spotify.group(1), spotify.group(2)
                    out += (f'        <div class="blog-embed blog-embed--spotify">\n'
                            f'          <iframe src="https://open.spotify.com/embed/{kind}/{sid}" '
                            f'frameborder="0" allowtransparency="true" allow="encrypted-media" '
                            f'loading="lazy" title="Spotify"></iframe>\n'
                            f'        </div>\n')
                else:
                    out += f'        <p><a href="{html.escape(url)}">{html.escape(url)}</a></p>\n'

        i += 1
    return out


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


def find_language_sections(all_blocks, slug):
    """
    Scan top-level blocks for toggle blocks whose label matches a language pattern.
    Fetches toggle children and converts to HTML per language.

    If no language toggles are found, all content is treated as SR.
    Non-toggle blocks that sit outside any language toggle are prepended to SR.

    Returns: {'SR': html_str, 'DE': html_str, 'EN': html_str}
    """
    lang_blocks = {"SR": [], "DE": [], "EN": []}
    extra_sr_blocks = []
    found_any_toggle = False

    for block in all_blocks:
        if block["type"] == "toggle":
            toggle_text = "".join(
                rt["plain_text"]
                for rt in block.get("toggle", {}).get("rich_text", [])
            )
            matched = None
            for lang, pattern in LANG_TOGGLE_RE.items():
                if pattern.search(toggle_text):
                    matched = lang
                    break
            if matched:
                found_any_toggle = True
                children = get_page_blocks(block["id"])
                lang_blocks[matched].extend(children)
                continue
        extra_sr_blocks.append(block)

    if not found_any_toggle:
        return {
            "SR": blocks_to_html(all_blocks, slug),
            "DE": "",
            "EN": "",
        }

    sr_blocks = extra_sr_blocks + lang_blocks["SR"]
    return {
        "SR": blocks_to_html(sr_blocks, slug)                 if sr_blocks              else "",
        "DE": blocks_to_html(lang_blocks["DE"], slug + "-de") if lang_blocks["DE"]      else "",
        "EN": blocks_to_html(lang_blocks["EN"], slug + "-en") if lang_blocks["EN"]      else "",
    }


def ensure_db_properties():
    """Add Title DE and Title EN text properties to the DB if they don't exist yet."""
    db_url = f"https://api.notion.com/v1/databases/{NOTION_DB_ID}"
    res = requests.get(db_url, headers=HEADERS)
    if not res.ok:
        print(f"  Warning: could not read DB schema: {res.status_code}", file=sys.stderr)
        return
    existing = res.json().get("properties", {})
    to_add = {}
    if "Title DE" not in existing:
        to_add["Title DE"] = {"rich_text": {}}
    if "Title EN" not in existing:
        to_add["Title EN"] = {"rich_text": {}}
    if to_add:
        patch = requests.patch(db_url, headers=HEADERS, json={"properties": to_add})
        if patch.ok:
            print(f"  Added missing DB properties: {', '.join(to_add)}")
        else:
            print(f"  Warning: could not add properties: {patch.status_code} {patch.text}", file=sys.stderr)


def load_cache():
    if TRANSLATION_CACHE.exists():
        return json.loads(TRANSLATION_CACHE.read_text())
    return {}


def save_cache(cache):
    TRANSLATION_CACHE.write_text(json.dumps(cache, ensure_ascii=False, indent=2))


POST_REGISTRY = REPO_ROOT / "scripts" / "post_registry.json"

def load_registry():
    if POST_REGISTRY.exists():
        return json.loads(POST_REGISTRY.read_text())
    return {}

def save_registry(registry):
    POST_REGISTRY.write_text(json.dumps(registry, ensure_ascii=False, indent=2))

def extract_post_metadata(html_content, slug):
    """Parse metadata from an existing blog/slug/index.html for the registry."""
    meta = {"source": "manual", "slug": slug}

    m = re.search(r'article:published_time" content="([^"]+)"', html_content)
    meta["date"] = m.group(1) if m else ""

    # SR section
    sr_match = re.search(r'<!-- SR -->\s*<div data-lang-content="sr">(.*?)<!-- DE -->', html_content, re.DOTALL)
    if sr_match:
        sr_html = sr_match.group(1)
        m = re.search(r'<h1 class="blog-post-title">([^<]+)</h1>', sr_html)
        meta["sr_title"] = m.group(1).strip() if m else slug
        m = re.search(r'<div class="blog-post-tag">([^<]+)</div>', sr_html)
        meta["sr_tags"] = m.group(1).strip() if m else ""
        meta["sr_excerpt"] = first_paragraph(sr_html)
    else:
        meta.update({"sr_title": slug, "sr_tags": "", "sr_excerpt": ""})

    meta["sr_date"] = format_date(meta["date"], "SR") if meta["date"] else ""

    # DE section
    de_match = re.search(r'<!-- DE -->\s*<div data-lang-content="de" hidden>(.*?)<!-- EN -->', html_content, re.DOTALL)
    if de_match:
        de_html = de_match.group(1)
        m = re.search(r'<h1 class="blog-post-title">([^<]+)</h1>', de_html)
        meta["de_title"] = m.group(1).strip() if m else meta["sr_title"]
        meta["de_excerpt"] = first_paragraph(de_html)
    else:
        meta.update({"de_title": meta["sr_title"], "de_excerpt": meta["sr_excerpt"]})

    meta["de_tags"] = meta["sr_tags"]
    meta["de_date"] = format_date(meta["date"], "DE") if meta["date"] else ""

    # EN section
    en_match = re.search(r'<!-- EN -->\s*<div data-lang-content="en" hidden>(.*?)<div class="blog-post-share">', html_content, re.DOTALL)
    if en_match:
        en_html = en_match.group(1)
        m = re.search(r'<h1 class="blog-post-title">([^<]+)</h1>', en_html)
        meta["en_title"] = m.group(1).strip() if m else meta["sr_title"]
        meta["en_excerpt"] = first_paragraph(en_html)
    else:
        meta.update({"en_title": meta["sr_title"], "en_excerpt": meta["sr_excerpt"]})

    meta["en_tags"] = meta["sr_tags"]
    meta["en_date"] = format_date(meta["date"], "EN") if meta["date"] else ""

    return meta


def _sr_hash(text):
    return hashlib.md5(text.encode()).hexdigest()[:12]


def _mymemory_call(text, target_lang):
    """Single MyMemory API call. Returns original text on failure."""
    try:
        res = requests.get(
            "https://api.mymemory.translated.net/get",
            params={"q": text, "langpair": f"sr|{target_lang}", "de": "nevenaneks@gmail.com"},
            timeout=20,
        )
        if not res.ok:
            return text
        data = res.json()
        if data.get("responseStatus") == 200:
            return data["responseData"]["translatedText"]
        return text
    except Exception as e:
        print(f"  Warning: MyMemory error: {e}", file=sys.stderr)
        return text


def mymemory_translate(text, target_lang):
    """Translate SR text to target_lang via MyMemory (free, no key needed). Chunks long text."""
    if not text or not text.strip():
        return ""
    MAX = 1500
    if len(text) <= MAX:
        return _mymemory_call(text, target_lang)
    parts = re.split(r'(?<=[.!?])\s+', text)
    chunks, current = [], ""
    for part in parts:
        if len(current) + len(part) + 1 > MAX and current:
            chunks.append(current.strip())
            current = part
        else:
            current = (current + " " + part).strip()
    if current:
        chunks.append(current)
    return " ".join(_mymemory_call(c, target_lang) for c in chunks)


def translate_html_body(html_str, target_lang):
    """Translate visible text inside HTML block elements, preserving structure."""
    if not html_str:
        return ""
    pattern = re.compile(r'([ \t]*)<(p|h[1-3]|li|blockquote)>(.*?)</\2>\n', re.DOTALL)

    def replace(m):
        indent, tag, inner = m.group(1), m.group(2), m.group(3)
        plain = html.unescape(re.sub(r'<[^>]+>', '', inner)).strip()
        if not plain:
            return m.group(0)
        translated = mymemory_translate(plain, target_lang)
        return f'{indent}<{tag}>{html.escape(translated)}</{tag}>\n'

    return pattern.sub(replace, html_str)


def auto_translate(slug, sr_title, sr_body, cache):
    """
    Return (de_title, de_body, en_title, en_body) from cache or via MyMemory.
    Only translates when SR content has changed since last sync.
    """
    h = _sr_hash(sr_title + sr_body)
    entry = cache.get(slug, {})

    if entry.get("hash") == h:
        return entry.get("de_title",""), entry.get("de_body",""), entry.get("en_title",""), entry.get("en_body","")

    print(f"  Translating {slug} via MyMemory...")
    de_title = mymemory_translate(sr_title, "de")
    en_title = mymemory_translate(sr_title, "en")
    de_body  = translate_html_body(sr_body, "de") if sr_body else ""
    en_body  = translate_html_body(sr_body, "en") if sr_body else ""

    cache[slug] = {"hash": h, "de_title": de_title, "de_body": de_body, "en_title": en_title, "en_body": en_body}
    save_cache(cache)
    return de_title, de_body, en_title, en_body


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
    de_body  = v(de, "body", sr_body)
    en_body  = v(en, "body", sr_body)

    meta_desc = first_paragraph(sr_body)

    sr_title_h  = html.escape(sr_title)
    de_title_h  = html.escape(de_title)
    en_title_h  = html.escape(en_title)
    meta_desc_h = html.escape(meta_desc)
    sr_title_j  = json.dumps(sr_title)
    author_j    = json.dumps("Didi – Dragana Stamenković")
    pub_j       = json.dumps(date_raw)
    org_j       = json.dumps("Didina SoulFood Riznica")

    return f'''<!DOCTYPE html>
<html lang="sr">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>{sr_title_h} – Didina SoulFood Riznica</title>
  <meta name="description" content="{meta_desc_h}">
  <meta name="author" content="Didi – Dragana Stamenković">
  <meta property="og:title" content="{sr_title_h} – Didina SoulFood Riznica">
  <meta property="og:description" content="{meta_desc_h}">
  <meta property="og:type" content="article">
  <meta property="article:published_time" content="{date_raw}">
  <meta property="article:author" content="Didi">
  <script type="application/ld+json">
  {{
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "headline": {sr_title_j},
    "author": {{ "@type": "Person", "name": {author_j} }},
    "datePublished": {pub_j},
    "publisher": {{ "@type": "Organization", "name": {org_j} }}
  }}
  </script>
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Dancing+Script:wght@700&display=swap" rel="stylesheet">
  <link rel="stylesheet" href="../../css/style.css">
  <link rel="stylesheet" href="../../css/responsive.css">
  <script>if(localStorage.getItem('didina-theme')==='dark'||(!localStorage.getItem('didina-theme')&&window.matchMedia('(prefers-color-scheme:dark)').matches))document.documentElement.classList.add('dark-mode');</script>
  <style>.site-header{{background:#6B4F3A;border-bottom:2px solid #D8A14A;position:sticky;top:0;z-index:100}}.nav-links a{{color:rgba(247,241,231,.72);border-bottom:2px solid transparent}}.nav-links a.active{{color:#D8A14A;border-bottom-color:#D8A14A;font-weight:600}}html.dark-mode .site-header{{background:#1A1208}}</style>
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
      <button class="favorites-btn">
        🤍 <span class="favorites-btn-label" data-i18n="nav_favorites">Omiljeni</span>
        <span class="fav-count">0</span>
      </button>
    </div>
  </nav>
</header>

<main>
  <article class="blog-post">

    <a href="../../blog.html" class="blog-post-back">← <span data-i18n="blog_back">Nazad na blog</span></a>

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
      <a href="../../index.html"   data-i18n="nav_home">Početna</a>
      <a href="../../recipes.html" data-i18n="nav_recipes">Recepti</a>
      <a href="../../blog.html"    data-i18n="nav_blog">Blog</a>
      <a href="../../about.html"   data-i18n="nav_about">O meni</a>
      <a href="../../contact.html" data-i18n="nav_contact">Kontakt</a>
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

<script src="../../js/translations.js"></script>
<script src="../../js/recipes-data.js"></script>
<script src="../../js/main.js"></script>
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


def render_card(slug, entry):
    sr_title   = entry.get("sr_title", slug)
    de_title   = entry.get("de_title", sr_title)
    en_title   = entry.get("en_title", sr_title)
    sr_tags    = entry.get("sr_tags", "")
    de_tags    = entry.get("de_tags", sr_tags)
    en_tags    = entry.get("en_tags", sr_tags)
    sr_excerpt = entry.get("sr_excerpt", "")
    de_excerpt = entry.get("de_excerpt", sr_excerpt)
    en_excerpt = entry.get("en_excerpt", sr_excerpt)
    sr_date    = entry.get("sr_date", "")
    de_date    = entry.get("de_date", sr_date)
    en_date    = entry.get("en_date", sr_date)

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
            <a href="blog/{slug}/" class="blog-read-more" data-i18n="blog_read_more">Čitaj dalje</a>
          </div>
        </div>
      </article>'''


def update_blog_listing(cards_html):
    blog_path = REPO_ROOT / "blog.html"
    content = blog_path.read_text(encoding="utf-8")

    new_block = (
        '    <!-- BLOG_GRID_START -->\n'
        '    <div class="blog-grid">\n'
        f'{cards_html}\n\n'
        '    </div>\n'
        '    <!-- BLOG_GRID_END -->'
    )
    content = re.sub(
        r'<!-- BLOG_GRID_START -->.*?<!-- BLOG_GRID_END -->',
        new_block,
        content,
        flags=re.DOTALL
    )
    blog_path.write_text(content, encoding="utf-8")


def main():
    ensure_db_properties()
    print("Querying Notion database...")
    pages = query_database()
    print(f"Found {len(pages)} published entries")

    posts = {}
    legacy = {}
    trans_cache = load_cache()

    for page in pages:
        sr_title_raw = get_prop(page, "Title", "title")
        slug = get_prop(page, "Slug", "text") or slugify(sr_title_raw)
        if not slug:
            print(f"  Skipping page {page['id']}: no title or slug")
            continue

        lang = get_prop(page, "Language", "select").upper()

        if lang in ("SR", "DE", "EN"):
            if slug not in legacy:
                legacy[slug] = {"versions": {}, "date": get_prop(page, "Date", "date")}
            blocks = get_page_blocks(page["id"])
            legacy[slug]["versions"][lang] = {
                "title": sr_title_raw,
                "tags":  get_prop(page, "Tags", "multi_select"),
                "date":  get_prop(page, "Date", "date"),
                "body":  blocks_to_html(blocks, slug),
            }
            print(f"  [legacy] {slug} / {lang}")
        else:
            sr_title = sr_title_raw
            de_title = get_prop(page, "Title DE", "text") or sr_title
            en_title = get_prop(page, "Title EN", "text") or sr_title
            tags     = get_prop(page, "Tags", "multi_select")
            date_raw = get_prop(page, "Date", "date") or page.get("created_time", "")[:10]

            all_blocks = get_page_blocks(page["id"])
            bodies = find_language_sections(all_blocks, slug)

            at_de_title, at_de_body, at_en_title, at_en_body = auto_translate(
                slug, sr_title, bodies["SR"], trans_cache
            )
            de_title = get_prop(page, "Title DE", "text") or at_de_title or sr_title
            en_title = get_prop(page, "Title EN", "text") or at_en_title or sr_title

            posts[slug] = {
                "versions": {
                    "SR": {"title": sr_title, "tags": tags, "date": date_raw, "body": bodies["SR"]},
                    "DE": {"title": de_title, "tags": tags, "date": date_raw, "body": bodies["DE"] or at_de_body},
                    "EN": {"title": en_title, "tags": tags, "date": date_raw, "body": bodies["EN"] or at_en_body},
                },
                "date": date_raw,
            }
            print(f"  [new]    {slug}")

    for slug, data in legacy.items():
        posts[slug] = data

    sorted_posts = sorted(posts.items(), key=lambda x: x[1]["date"] or "", reverse=True)

    blog_dir = REPO_ROOT / "blog"
    blog_dir.mkdir(exist_ok=True)

    registry = load_registry()

    # Write / update Notion posts
    for slug, data in sorted_posts:
        versions = data["versions"]
        date_raw = data["date"]
        sr = versions.get("SR", {})
        de = versions.get("DE", {})
        en = versions.get("EN", {})

        post_html = render_post(slug, versions)
        slug_dir = blog_dir / slug
        slug_dir.mkdir(exist_ok=True)
        out_path = slug_dir / "index.html"
        out_path.write_text(post_html, encoding="utf-8")
        print(f"  Written: blog/{slug}/index.html")

        sr_body = sr.get("body", "")
        de_body = de.get("body", "") or sr_body
        en_body = en.get("body", "") or sr_body

        registry[slug] = {
            "source": "notion",
            "date": date_raw,
            "sr_title": sr.get("title", ""), "de_title": de.get("title", ""), "en_title": en.get("title", ""),
            "sr_tags": sr.get("tags", ""), "de_tags": de.get("tags", ""), "en_tags": en.get("tags", ""),
            "sr_date": format_date(date_raw, "SR"), "de_date": format_date(date_raw, "DE"), "en_date": format_date(date_raw, "EN"),
            "sr_excerpt": first_paragraph(sr_body), "de_excerpt": first_paragraph(de_body), "en_excerpt": first_paragraph(en_body),
        }

    # Pick up manually-written posts not in Notion
    for subdir in sorted(blog_dir.iterdir()):
        if not subdir.is_dir():
            continue
        index_file = subdir / "index.html"
        if not index_file.exists():
            continue
        slug = subdir.name
        if slug in registry:
            continue
        content = index_file.read_text(encoding="utf-8")
        meta = extract_post_metadata(content, slug)
        registry[slug] = meta
        print(f"  [manual] {slug}")

    save_registry(registry)

    if not registry:
        print("No posts to list.")
        return

    sorted_registry = sorted(registry.items(), key=lambda x: x[1].get("date", ""), reverse=True)
    cards = [render_card(slug, entry) for slug, entry in sorted_registry]
    cards_html = "\n".join(cards)
    update_blog_listing(cards_html)
    print("  Updated: blog.html")
    print("Sync complete.")


if __name__ == "__main__":
    main()
