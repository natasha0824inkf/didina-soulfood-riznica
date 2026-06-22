#!/usr/bin/env python3
"""Generate a clean EPUB for Didina SoulFood Riznica from the website recipe data."""

import json
import subprocess
import os
import sys
import io
from ebooklib import epub
from PIL import Image

REPO = '/home/user/didina-soulfood-riznica'
IMAGES_DIR = os.path.join(REPO, 'assets', 'images')
OUTPUT = os.path.join(REPO, 'sources', 'Didina_SoulFood_Riznica.epub')

# ---------------------------------------------------------------------------
# 1. Extract recipe data via Node.js (avoids having to parse JS by hand)
# ---------------------------------------------------------------------------
result = subprocess.run(
    ['node', '-e', f'''
const fs = require('fs');
const content = fs.readFileSync('{REPO}/js/recipes-data.js', 'utf8');
eval(content.replace('const recipes', 'globalThis.recipes'));
console.log(JSON.stringify(globalThis.recipes));
'''],
    capture_output=True, text=True, check=True
)
recipes = json.loads(result.stdout)
recipes.sort(key=lambda r: int(r.get('number', '0')))
print(f"Loaded {len(recipes)} recipes")

# ---------------------------------------------------------------------------
# 2. CSS
# ---------------------------------------------------------------------------
CSS = """
body {
  font-family: Georgia, 'Times New Roman', serif;
  font-size: 1em;
  line-height: 1.65;
  color: #3a2e1f;
  background-color: #faf8f3;
  margin: 1.2em 1.5em;
}
h1.book-title {
  font-size: 2em;
  text-align: center;
  color: #5c3d2e;
  margin: 2em 0 0.3em;
  letter-spacing: 0.03em;
}
h2.book-subtitle {
  font-size: 1em;
  text-align: center;
  font-style: italic;
  color: #8a6d5c;
  margin: 0 0 2em;
}
.cover-quote {
  font-style: italic;
  font-size: 1.15em;
  text-align: center;
  margin: 3em auto;
  max-width: 80%;
  color: #5c3d2e;
  border-top: 1px solid #d4a76a;
  border-bottom: 1px solid #d4a76a;
  padding: 0.8em 0;
}
.cover-author {
  text-align: center;
  color: #8a6d5c;
  font-size: 0.9em;
  margin-top: 3em;
}
h2.intro-title {
  font-size: 1.5em;
  color: #5c3d2e;
  border-bottom: 2px solid #d4a76a;
  padding-bottom: 0.3em;
  margin-bottom: 1em;
}
.intro-text p {
  margin: 0.7em 0;
  text-align: justify;
}
.sign-off {
  margin-top: 2em;
  font-style: italic;
  color: #5c3d2e;
}
h2.toc-title {
  font-size: 1.4em;
  color: #5c3d2e;
  border-bottom: 2px solid #d4a76a;
  padding-bottom: 0.3em;
  margin-bottom: 1em;
}
.toc-item {
  margin: 0.35em 0;
  font-size: 0.95em;
}
.toc-item a {
  color: #5c3d2e;
  text-decoration: none;
}
.toc-item a:hover {
  text-decoration: underline;
}
.toc-number {
  color: #d4a76a;
  font-weight: bold;
  margin-right: 0.4em;
}
h2.recipe-title {
  font-size: 1.4em;
  color: #5c3d2e;
  margin-bottom: 0.1em;
}
.recipe-number {
  font-size: 0.8em;
  color: #d4a76a;
  font-weight: bold;
  text-transform: uppercase;
  letter-spacing: 0.08em;
  margin-bottom: 0.2em;
}
.recipe-subtitle {
  font-style: italic;
  color: #6b5c4e;
  margin: 0.3em 0 1em;
  font-size: 0.95em;
}
.recipe-image {
  width: auto;
  max-width: 90%;
  max-height: 12em;
  margin: 0.6em auto;
  border-radius: 6px;
  display: block;
}
.prep-time {
  display: inline-block;
  background: #f0e6d3;
  color: #5c3d2e;
  padding: 0.25em 0.75em;
  border-radius: 20px;
  font-size: 0.88em;
  margin: 0.5em 0 0.8em;
}
.author-comment {
  font-style: italic;
  color: #6b5c4e;
  border-left: 3px solid #d4a76a;
  padding: 0.3em 0.8em;
  margin: 0.8em 0 1em;
  font-size: 0.95em;
}
h3.section-heading {
  font-size: 1em;
  font-weight: bold;
  color: #5c3d2e;
  margin: 1.1em 0 0.3em;
  text-transform: uppercase;
  letter-spacing: 0.06em;
  font-size: 0.88em;
}
ul.ingredients {
  padding-left: 1.2em;
  margin: 0.3em 0 0.8em;
}
ul.ingredients li {
  margin: 0.2em 0;
}
ol.instructions {
  padding-left: 1.4em;
  margin: 0.3em 0;
}
ol.instructions li {
  margin: 0.35em 0;
}
.recipe-note {
  background: #f5f0e8;
  border-left: 3px solid #c4976a;
  padding: 0.4em 0.8em;
  font-size: 0.9em;
  margin-top: 1em;
  color: #5c3d2e;
}
.divider {
  border: none;
  border-top: 1px solid #e0d0bc;
  margin: 1.5em 0;
}
"""

# ---------------------------------------------------------------------------
# 3. Helper: build XHTML page
# ---------------------------------------------------------------------------
def page(title, body_html):
    return f"""<?xml version='1.0' encoding='utf-8'?>
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.1//EN"
  "http://www.w3.org/TR/xhtml11/DTD/xhtml11.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
  <title>{title}</title>
  <link rel="stylesheet" type="text/css" href="style.css"/>
</head>
<body>
{body_html}
</body>
</html>"""

def resize_image(path, max_w=400, max_h=220):
    with Image.open(path) as img:
        if img.mode not in ('RGB', 'L'):
            img = img.convert('RGB')
        img.thumbnail((max_w, max_h), Image.LANCZOS)
        buf = io.BytesIO()
        img.save(buf, format='JPEG', quality=78, optimize=True)
        return buf.getvalue(), 'image/jpeg'

def esc(s):
    if not s:
        return ''
    return (s.replace('&', '&amp;')
             .replace('<', '&lt;')
             .replace('>', '&gt;')
             .replace('"', '&quot;'))

# ---------------------------------------------------------------------------
# 4. Build EPUB
# ---------------------------------------------------------------------------
book = epub.EpubBook()
book.set_identifier('didina-soulfood-riznica-2026')
book.set_title('Didina SoulFood Riznica')
book.set_language('sr')
book.add_author('Dragana Stamenković')

# CSS item
css_item = epub.EpubItem(
    uid='style', file_name='style.css',
    media_type='text/css', content=CSS.encode('utf-8')
)
book.add_item(css_item)

spine_items = []
toc_entries = []

# --- Cover page ---
cover_body = """
<div class="cover">
  <h1 class="book-title">Didina SoulFood Riznica</h1>
  <h2 class="book-subtitle">44 recepta iz srca kuhinje</h2>
  <p class="cover-quote">Ne brojite kalorije, brojite va&#353;e osmehe i korake.</p>
  <p class="cover-author">Dragana Stamenković</p>
  <p class="cover-author" style="font-size:0.85em; margin-top:0.3em;">Bremen, prole&#263;e 2026.</p>
</div>
"""
cover_ch = epub.EpubHtml(title='Naslovnica', file_name='cover.xhtml', lang='sr')
cover_ch.content = page('Didina SoulFood Riznica', cover_body).encode('utf-8')
cover_ch.add_item(css_item)
book.add_item(cover_ch)
spine_items.append(cover_ch)

# --- Intro page ---
intro_body = """
<h2 class="intro-title">Uvod u Didinu SoulFood Riznicu</h2>
<div class="intro-text">
  <p>Dobrodo&#353;la u moju kuhinju, gde se kuva srcem i zadovoljnim stomakom!</p>
  <p>Ova riznica nije nastala preko no&#263;i &#8212; nego kroz mnoga nedeljna jutra kada sam posebno inspirisana da kuvam, tihe ve&#269;eri uz &#353;olju &#269;aja, osmehe iz rerne, i poneki eksperiment koji se nikad vi&#353;e nije ponovio (pozdrav slanom kola&#269;u od cvekle!).</p>
  <p>Zovem se Didi. Volim da kuvam, ali jo&#353; vi&#353;e volim da spremam hranu koja te&#353;i, hrani i sme&#353;ka se iznutra.</p>
  <p>Ovi recepti nisu samo za stomak &#8212; oni su za dan kad ti treba mir, za tihe trenutke uz kafu ili kad ne zna&#353; &#353;ta da pojede&#353;, a ne &#382;eli&#353; ba&#353; ni da doda&#353; neko kilce.</p>
  <hr class="divider"/>
  <p>Ovde ne&#263;e&#353; na&#263;i komplikovane korake. Samo stvarne zalogaje &#8212; inspirisane sportom, jogom, letom, morem i onom ve&#269;itom potrebom da svemu dodam &#353;aku oraha. Svi recepti su sa biljnim mlekom i pogodni za netolerante na laktozu, ali je mogu&#263;e praviti i sa obi&#269;nim mlekom ukoliko Vam se vi&#353;e svi&#273;a.</p>
  <p>U ovoj riznici se nalaze recepti koji su deo mog ritma, moje kuhinje iz &#269;iste radosti kuvanja.</p>
  <p>Cela knjiga pisana je u &#382;enskom rodu, kao da se obra&#263;am &#382;enama, ali svi mu&#353;ki &#269;itaoci i entuzijasti&#269;ni kuvari su dobrodo&#353;li da nam se pridru&#382;e na ovom putovanju.</p>
  <p>Ako ti neka od mojih ideja dotakne srce (ili stomak) &#8212; svrati ponovo. Uvek ima jo&#353;!</p>
  <p>I da zna&#353;: sve fotografije u ovoj knjizi nastale su bukvalno sekund pre nego &#353;to sam ja (ili neko od uku&#263;ana) zgrabila ka&#353;iku i bacila se na degustaciju!</p>
  <p>Ovo nije kuvar iz studija nego iz &#382;ivota. Sve je poteklo iz moje kuhinje i li&#269;ne kreativnosti. U&#382;ivajte u &#269;itanju i isprobavanju!</p>
</div>
<p class="sign-off">S ljubavlju,<br/>Didi<br/><br/>Bremen, prole&#263;e 2026.</p>
"""
intro_ch = epub.EpubHtml(title='Uvod', file_name='intro.xhtml', lang='sr')
intro_ch.content = page('Uvod', intro_body).encode('utf-8')
intro_ch.add_item(css_item)
book.add_item(intro_ch)
spine_items.append(intro_ch)
toc_entries.append(epub.Link('intro.xhtml', 'Uvod', 'intro'))

# --- Table of Contents page ---
toc_html_items = ''
for r in recipes:
    num = r.get('number', '')
    title_sr = r.get('title', {}).get('sr', '')
    toc_html_items += (
        f'<p class="toc-item">'
        f'<span class="toc-number">#{num}</span>'
        f'<a href="recipe_{num}.xhtml">{esc(title_sr)}</a>'
        f'</p>\n'
    )

toc_html_items += (
    '<p class="toc-item">'
    '<span class="toc-number" style="color:#c4976a;">&#9733;</span>'
    '<a href="bonus.xhtml">Bonus recept &#8211; Ukusni prokelj iz rerne</a>'
    '</p>\n'
)
toc_page_body = f'<h2 class="toc-title">Sadr&#382;aj</h2>\n{toc_html_items}'
toc_ch = epub.EpubHtml(title='Sadržaj', file_name='toc_page.xhtml', lang='sr')
toc_ch.content = page('Sadržaj', toc_page_body).encode('utf-8')
toc_ch.add_item(css_item)
book.add_item(toc_ch)
spine_items.append(toc_ch)
toc_entries.append(epub.Link('toc_page.xhtml', 'Sadržaj', 'toc_page'))

# --- Recipe pages ---
recipe_toc = []
for r in recipes:
    num = r.get('number', '')
    title_sr  = r.get('title', {}).get('sr', '')
    subtitle  = r.get('subtitle', {}).get('sr', '')
    comment   = r.get('author_comment', {}).get('sr', '')
    prep      = r.get('prep_time', {}).get('sr', '')
    ingrs     = r.get('ingredients', {}).get('sr', [])
    steps     = r.get('instructions', {}).get('sr', [])
    note      = r.get('note', '') or ''
    img_path  = r.get('image', '')

    # Image — resize physically so it fits on page with text above it
    img_html = ''
    if img_path:
        full_img = os.path.join(REPO, img_path)
        if os.path.exists(full_img):
            img_data, media_type = resize_image(full_img)
            img_filename = f'images/recipe_{num}.jpg'
            epub_img = epub.EpubItem(
                uid=f'img_{num}',
                file_name=img_filename,
                media_type=media_type,
                content=img_data
            )
            book.add_item(epub_img)
            img_html = f'<img src="{img_filename}" alt="{esc(title_sr)}" class="recipe-image"/>'

    # Ingredients list
    ingr_items = ''.join(f'<li>{esc(i)}</li>\n' for i in ingrs if i)
    ingr_html = f'<ul class="ingredients">\n{ingr_items}</ul>' if ingr_items else ''

    # Steps list
    step_items = ''.join(f'<li>{esc(s)}</li>\n' for s in steps if s)
    steps_html = f'<ol class="instructions">\n{step_items}</ol>' if step_items else ''

    # Note
    note_html = f'<div class="recipe-note"><strong>Napomena:</strong> {esc(note)}</div>' if note.strip() else ''

    # Comment
    comment_html = f'<p class="author-comment">{esc(comment)}</p>' if comment.strip() else ''

    # Prep time
    prep_html = f'<p><span class="prep-time">&#9202; Vreme pripreme: {esc(prep)}</span></p>' if prep else ''

    body = f"""
<h2 class="recipe-title">{esc(title_sr)}</h2>
<p class="recipe-number">Recept #{num}</p>
<p class="recipe-subtitle">{esc(subtitle)}</p>
{prep_html}
{img_html}
{comment_html}
<h3 class="section-heading">Sastojci</h3>
{ingr_html}
<h3 class="section-heading">Priprema</h3>
{steps_html}
{note_html}
"""

    ch = epub.EpubHtml(title=f'#{num} {title_sr}', file_name=f'recipe_{num}.xhtml', lang='sr')
    ch.content = page(f'#{num} – {title_sr}', body).encode('utf-8')
    ch.add_item(css_item)
    book.add_item(ch)
    spine_items.append(ch)
    recipe_toc.append(epub.Link(f'recipe_{num}.xhtml', f'#{num} {title_sr}', f'recipe_{num}'))
    print(f"  + Recipe #{num}: {title_sr}")

# --- Nav & spine ---
book.toc = [
    epub.Link('cover.xhtml', 'Naslovnica', 'cover'),
    *toc_entries,
    epub.Section('Recepti', recipe_toc),
    epub.Link('final.xhtml', 'Na kraju...', 'final'),
]
book.add_item(epub.EpubNcx())
book.add_item(epub.EpubNav())
# --- Bonus recipe ---
bonus_img_path = os.path.join(REPO, 'assets/images/ukusni-prokelj-iz-rerne.png')
bonus_img_html = ''
if os.path.exists(bonus_img_path):
    img_data, media_type = resize_image(bonus_img_path)
    epub_img = epub.EpubItem(uid='img_bonus', file_name='images/recipe_bonus.jpg',
                             media_type=media_type, content=img_data)
    book.add_item(epub_img)
    bonus_img_html = '<img src="images/recipe_bonus.jpg" alt="Ukusni prokelj iz rerne" class="recipe-image"/>'

bonus_body = f"""
<p class="recipe-number" style="font-size:1em; letter-spacing:0;">Bonus recept &#8211; jelo od samo jednog sastojka</p>
<h2 class="recipe-title">Ukusni prokelj iz rerne</h2>
<p class="recipe-subtitle">Dovoljan je samo jedan sastojak i malo kreativnosti pa da i najskromnije povr&#263;e postane zvezda stola.</p>
<p><span class="prep-time">&#9202; Vreme pripreme: 30 minuta</span></p>
{bonus_img_html}
<p class="author-comment">Prokelj &#269;esto ima lo&#353;u reputaciju, ali kada se pravilno pripremi u rerni postaje hrskav spolja, a mekan iznutra.</p>
<h3 class="section-heading">Sastojci</h3>
<ul class="ingredients">
<li>10-ak glavica proklja</li>
<li>malo maslinovog ulja</li>
<li>so</li>
<li>aleva paprika</li>
</ul>
<h3 class="section-heading">Priprema</h3>
<ol class="instructions">
<li>Prokelj operi, ukloni peteljke i prve listi&#263;e uz peteljku.</li>
<li>Svaku glavicu prepolovi po du&#382;ini.</li>
<li>Polutke kratko prokuvaj u vodi 2&#8211;3 minuta, zatim ocedi.</li>
<li>Pore&#273;aj prokelj ravnom stranom na pleh oblo&#382;en papirom za pe&#269;enje.</li>
<li>Prelij sa malo maslinovog ulja, posoli i dodaj alevu papriku po ukusu.</li>
<li><strong>Mali trik:</strong> blago pritisni svaku polutku da pusti vi&#353;ak vode i dobije hrskaviju koricu.</li>
<li>Peci u rerni zagrejanoj na 180&#176;C oko 20 minuta, dok prokelj ne porumeni.</li>
</ol>
<div class="recipe-note"><strong>Napomena:</strong> Odli&#269;no ide kao prilog uz meso ili ribu, ali i kao mali topli zalogaj uz &#269;a&#353;u vina.</div>
<h3 class="section-heading" style="margin-top:1.2em;">Energija jela</h3>
<p><em>&#268;ista jednostavnost!</em></p>
<p>Za kraj ove male riznice &#8211; jedno skromno povr&#263;e koje nas podse&#263;a da se prava &#269;ar kuvanja &#269;esto krije u jednostavnosti i da je manje vrlo &#269;esto &#8211; vi&#353;e!</p>
"""
bonus_ch = epub.EpubHtml(title='Bonus recept – Ukusni prokelj iz rerne', file_name='bonus.xhtml', lang='sr')
bonus_ch.content = page('Bonus recept', bonus_body).encode('utf-8')
bonus_ch.add_item(css_item)
book.add_item(bonus_ch)
spine_items.append(bonus_ch)
recipe_toc.append(epub.Link('bonus.xhtml', 'Bonus recept – Ukusni prokelj iz rerne', 'bonus'))

# --- Final word: Na kraju... ---
final_body = """
<h2 class="intro-title">Na kraju&#8230;</h2>
<div class="intro-text">
  <p>Ovo nije knjiga o dijetama.</p>
  <p>Nema kalorijskh tablica, brojanja porcija, zabrana i gri&#382;e savesti.<br/>
  Ovo je kuvar i poziv da voli&#353; sebe kroz hranu.</p>
  <p>Recepti koje si ovde prona&#353;la nisu niskokalori&#269;ni, ali su <strong>ne&#382;no izbalansirani</strong>, ba&#353; kao i &#382;ivot koji &#382;eli&#353; da &#382;ivi&#353;.</p>
  <p>Hrana je tu da nas nahrani, umiri, obraduje i podsteti: kad se kre&#263;e&#353;, di&#353;e&#353;, smeje&#353; i voli&#353; &#8212; sve drugo do&#273;e na svoje mesto.</p>
  <p>I zapamti: &#353;ta god da se u ovom trenutku de&#353;ava, sve na kraju ispadne dobro!</p>
  <hr class="divider"/>
  <p><strong>Ne broji kalorije.<br/>
  Broj osmehe. Korake. Lepe zalogaje.</strong></p>
  <p><strong>Ve&#382;baj i u&#382;ivaj u trenucima i malim, jednostavnim stvarima. Nasme&#353;i se bez razloga.</strong></p>
  <hr class="divider"/>
  <p>Hvala ti &#353;to si kuvala sa mnom.<br/>
  Ova knjiga je mo&#382;da gotova, ali tvoja kuhinjska avantura tek po&#269;inje.</p>
</div>
<p class="sign-off">Iz jedne male kuhinje i sa puno ljubavi,<br/><br/>Didi<br/><br/>Bremen, prole&#263;e 2026.</p>
"""
final_ch = epub.EpubHtml(title='Na kraju...', file_name='final.xhtml', lang='sr')
final_ch.content = page('Na kraju...', final_body).encode('utf-8')
final_ch.add_item(css_item)
book.add_item(final_ch)
spine_items.append(final_ch)

book.spine = ['nav'] + spine_items

# ---------------------------------------------------------------------------
# 5. Write
# ---------------------------------------------------------------------------
os.makedirs(os.path.dirname(OUTPUT), exist_ok=True)
epub.write_epub(OUTPUT, book)
size_mb = os.path.getsize(OUTPUT) / (1024 * 1024)
print(f"\nDone! {OUTPUT}  ({size_mb:.1f} MB)")
