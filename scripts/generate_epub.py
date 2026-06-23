#!/usr/bin/env python3
"""Generate Didina SoulFood Riznica EPUB — structured by sections, matching original book."""

import json, subprocess, os, io
from ebooklib import epub
from PIL import Image, ImageDraw

REPO    = '/home/user/didina-soulfood-riznica'
OUTPUT  = os.path.join(REPO, 'sources', 'Didina_SoulFood_Riznica.epub')
IMGDIR  = os.path.join(REPO, 'assets', 'images')

# ---------------------------------------------------------------------------
# 1. Load recipe data via Node
# ---------------------------------------------------------------------------
raw = subprocess.run(['node', '-e', f'''
const fs = require('fs');
const c = fs.readFileSync('{REPO}/js/recipes-data.js', 'utf8');
eval(c.replace('const recipes', 'globalThis.recipes'));
console.log(JSON.stringify(globalThis.recipes));
'''], capture_output=True, text=True, check=True).stdout
recipe_by_num = {r['number']: r for r in json.loads(raw)}
print(f"Loaded {len(recipe_by_num)} recipes")

# ---------------------------------------------------------------------------
# 1b. Full content for recipes missing from the website data
# ---------------------------------------------------------------------------
EXTRA_RECIPES = {
    'Hrskava celer salata': {
        'subtitle':       'Osveženje posle posla – između ručka i večere',
        'author_comment': 'Ova salata mi je bila pravo otkriće! Idealna je kao prva pomoć posle posla, kad je napolju vruće, a treba ti nešto lagano, hrskavo i hranljivo.',
        'prep_time':      '10 minuta',
        'image':          None,   # no image in original
        'ingredients': [
            '2–3 štapića celera (sitno seckana)',
            '1 šargarepa (rendana)',
            '1 jabuka (na kockice)',
            'šaka semenki bundeve (lagano prepečenih na suvom tiganju)',
            '2 kašike grčkog jogurta',
            '1 kašičica maslinovog ulja',
            'malo ceđenog limuna',
            'prstohvat soli',
        ],
        'instructions': [
            'Pomešaj povrće i jabuku.',
            'Dodaj prepečene semenke bundeve.',
            'Umuti kremasti preliv od jogurta, ulja, limuna i soli.',
            'Sjedini sve i uživaj u salati.',
        ],
        'note': 'Za jači obrok dodaj malo humusa pored salate.',
    },
    'Dubai zalogajčići': {
        'subtitle':       'Malo čokoladno zadovoljstvo zamišljeno kao omaž Dubai čokoladi.',
        'author_comment': 'Domaće čokoladice inspirisane jednim blagim osmehom i lakoćom kretanja.',
        'prep_time':      '10 minuta + hlađenje 1–2 sata ili duže po želji',
        'image':          'assets/images/mali-coko-zalogaji.png',
        'ingredients': [
            '2–3 kašike krema od pistaća',
            '1 kašika tahinija',
            'oko dve šake seckanog kadaifa',
            'crna čokolada (70–80% kakaoa), otopljena',
        ],
        'instructions': [
            'Umešaj krem od pistaća i tahini dok ne dobiješ glatku smesu.',
            'Dodaj kadaif i pažljivo promešaj da ostane hrskavo, ali da kadaif bude zasićen kremom.',
            'Kašikom vadi male zalogaje i oblikuj ih rukama.',
            'Stavi u frižider da se stegnu oko sat vremena.',
            'Otopi čokoladu i filuj čokoladice pomoću dve viljuške.',
        ],
        'note': 'Ovi zalogaji su kao mala slatka nagrada posle treninga ili joge, bez osećaja prejedanja. Možeš ih držati u zamrzivaču i vaditi po potrebi kada god ti je potrebno malo čokoladne podrške.',
    },
    'Raznobojni namaz od avokada': {
        'subtitle':       'Kremasta svežina sa slatkastim iznenađenjem.',
        'author_comment': 'Ovaj namaz nastao je iz želje za nečim laganim, a punim života. Avokado daje mekoću i zdrave masti, crveni luk svežinu, a kukuruz tajanstvenu slatku notu.',
        'prep_time':      '10 minuta',
        'image':          None,
        'ingredients': [
            '1 zreo avokado',
            '2 kašike kuvanog kukuruza',
            '2 kašike sitno seckanog crvenog luka',
            '1 kašičica maslinovog ulja',
            'sok od pola limuna',
            'prstohvat soli',
            'po želji: malo sveže mlevenog bibera ili seckanog peršuna',
        ],
        'instructions': [
            'Avokado prepolovi, ukloni košticu i kašikom izvadi meso u činiju.',
            'Fino izgnječi viljuškom.',
            'Dodaj kukuruz i sitno seckani crveni luk.',
            'Umešaj maslinovo ulje, limunov sok i so.',
            'Sve lagano promešati dok se sastojci ne sjedine.',
        ],
        'note': 'Namaz je najbolji kada se posluži odmah. Može stajati nekoliko sati u frižideru ako se prekrije folijom direktno uz površinu, kako bi se sprečilo tamnjenje. Odličan je uz integralni hleb, tortilje ili kao dodatak salati.',
    },
}

# ---------------------------------------------------------------------------
# 2. Section structure — exact order from original book
#    Each entry: num (str | None for missing), display_title (optional override)
# ---------------------------------------------------------------------------
SECTIONS = [
    {
        'title': 'Jutarnji recepti',
        'file':  'sec1',
        'items': [
            ('1',    'Nedeljna tortilja'),
            ('6',    None),
            ('14',   None),
            ('26',   None),
            ('40',   None),
        ],
    },
    {
        'title': 'Recepti kada ne znam šta da kuvam',
        'file':  'sec2',
        'items': [
            ('15',   None),
            ('16',   None),
            ('17',   None),
            ('36',   None),
            ('38',   None),
            ('41',   None),
            ('43',   None),
            ('7',    None),
            ('46',   None),
            ('28',   None),
            ('53',   None),
            ('32',   None),
        ],
    },
    {
        'title': 'Osvežavajući recepti',
        'file':  'sec3',
        'items': [
            (None,   'Hrskava celer salata'),        # missing — placeholder
            ('29',   None),
            ('47',   None),
            ('52',   'Detoks salata sa narom'),
            ('10',   'Tunin obrok za pun stomak i bistru glavu'),
            ('45',   'Salata sa rukolom, fetom i orasima'),
            ('30',   None),
            ('4',    None),
        ],
    },
    {
        'title': 'Recepti koji mirišu iz rerne',
        'file':  'sec4',
        'items': [
            ('12',   None),
            ('25',   None),
            ('49',   None),
            ('8',    None),
            ('44',   'Šumska pita'),
            ('51',   None),
            ('31',   None),
        ],
    },
    {
        'title': 'Recepti uz kafu',
        'file':  'sec5',
        'items': [
            (None,   'Dubai zalogajčići'),            # missing — placeholder
            ('11',   'Kremasti sutlijaš'),
            ('35',   None),
            ('37',   None),
            ('33',   None),
            ('48',   None),
            ('50',   None),
            ('9',    None),
        ],
    },
    {
        'title': 'Recepti koji se mažu',
        'file':  'sec6',
        'items': [
            ('39',   'Domaći humus'),
            ('42',   'Proteinski namaz'),
            ('54',   None),
            (None,   'Raznobojni namaz od avokada'),  # missing — placeholder
        ],
    },
]

# ---------------------------------------------------------------------------
# 3. Helpers
# ---------------------------------------------------------------------------
def esc(s):
    if not s: return ''
    return s.replace('&','&amp;').replace('<','&lt;').replace('>','&gt;').replace('"','&quot;')

def page(title, body_html, extra_ns=''):
    return f"""<?xml version='1.0' encoding='utf-8'?>
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.1//EN"
  "http://www.w3.org/TR/xhtml11/DTD/xhtml11.dtd">
<html xmlns="http://www.w3.org/1999/xhtml" {extra_ns}>
<head>
  <title>{esc(title)}</title>
  <link rel="stylesheet" type="text/css" href="style.css"/>
</head>
<body>
{body_html}
</body>
</html>"""

def resize_img(path, max_w=320, max_h=170):
    with Image.open(path) as im:
        if im.mode not in ('RGB', 'L'):
            im = im.convert('RGB')
        im.thumbnail((max_w, max_h), Image.LANCZOS)
        buf = io.BytesIO()
        im.save(buf, format='JPEG', quality=75, optimize=True)
        return buf.getvalue()

def make_cover_image():
    """Generate cover PNG — dark warm brown, gold, plum — matching website palette."""
    w, h    = 1200, 1800
    dark    = ( 34,  16,   8)   # #221008 — website dark hero
    darker  = ( 24,  12,   4)   # #180C04
    gold    = (216, 161,  74)   # #D8A14A
    rust    = (201, 119,  58)   # #C9773A
    plum    = ( 74,  46, 106)   # #4A2E6A
    cream   = (240, 232, 216)   # #F0E8D8
    midgold = (200, 160, 112)   # #C8A070

    im = Image.new('RGB', (w, h), darker)
    d  = ImageDraw.Draw(im)

    # Warm gradient — slightly lighter centre band
    for y in range(h):
        t = abs(y - h * 0.45) / (h * 0.55)
        r = int(darker[0] + (dark[0] - darker[0]) * (1 - t * 0.6))
        g = int(darker[1] + (dark[1] - darker[1]) * (1 - t * 0.6))
        b = int(darker[2] + (dark[2] - darker[2]) * (1 - t * 0.6))
        d.line([(0, y), (w, y)], fill=(r, g, b))

    # Gold corner brackets
    bw = 5
    for x1, y1, x2, y2 in [
        (55,55,220,55),(55,55,55,220),
        (w-55,55,w-220,55),(w-55,55,w-55,220),
        (55,h-55,220,h-55),(55,h-55,55,h-220),
        (w-55,h-55,w-220,h-55),(w-55,h-55,w-55,h-220),
    ]:
        d.line([(x1,y1),(x2,y2)], fill=gold, width=bw)

    # Gold circle around logo area
    cx, cy, r = 600, 340, 190
    d.ellipse([cx-r, cy-r, cx+r, cy+r], outline=gold, width=2)

    # Fork (3 tines + bridge + handle) — gold
    fw = 14
    for tx in [548, 600, 652]:
        d.line([(tx, 200), (tx, 320)], fill=gold, width=fw)
    d.arc([535, 300, 665, 390], start=0, end=180, fill=gold, width=fw)
    d.line([(600, 345), (600, 480)], fill=gold, width=fw)

    # Heart — plum
    hx, hy, hs = 700, 255, 55
    d.ellipse([hx,      hy-hs, hx+hs*2, hy+hs], fill=(158,120,184))
    d.ellipse([hx+hs,   hy-hs, hx+hs*3, hy+hs], fill=(158,120,184))
    d.polygon([(hx, hy+hs//2), (hx+hs*1.5, hy+hs*2.2), (hx+hs*3, hy+hs//2)], fill=(158,120,184))

    # Gold divider line with plum diamond
    d.line([(140,590),(555,590)], fill=gold, width=2)
    d.polygon([(600,577),(614,590),(600,603),(586,590)], fill=plum)
    d.line([(645,590),(1060,590)], fill=gold, width=2)

    # Text — Didina
    d.text((w//2, 730), 'Didina',              fill=cream,   anchor='mm', font_size=148)
    d.text((w//2, 890), 'SoulFood',            fill=gold,    anchor='mm', font_size=110)

    # Plum band for RIZNICA
    d.rectangle([100, 960, w-100, 1080], fill=plum)
    d.text((w//2, 1025), 'R I Z N I C A',     fill=gold,    anchor='mm', font_size=72)

    # Subtitle
    d.text((w//2, 1185), 'recepti za svaki dan', fill=midgold, anchor='mm', font_size=48)

    # Plum rule + author
    d.line([(200,1560),(1000,1560)], fill=(158,120,184), width=2)
    d.text((w//2, 1640), '♥',                 fill=gold,    anchor='mm', font_size=40)
    d.text((w//2, 1710), 'Dragana Stamenković', fill=midgold, anchor='mm', font_size=48)

    buf = io.BytesIO()
    im.save(buf, format='PNG')
    return buf.getvalue()

# ---------------------------------------------------------------------------
# 4. CSS
# ---------------------------------------------------------------------------
CSS = """
body { font-family: Georgia,'Times New Roman',serif; font-size:1em;
       line-height:1.65; color:#2e2e2e; background:#ffffff; margin:1em 1.2em; }
h1.book-title  { font-size:1.9em; text-align:center; color:#C9773A; margin:1.5em 0 0.2em;
                 font-style:italic; }
h2.book-sub    { font-size:1em; text-align:center; font-style:italic; color:#D8A14A; margin:0 0 1.5em; }
.cover-quote   { font-style:italic; font-size:1.1em; text-align:center; margin:2em auto;
                 max-width:80%; color:#C9773A; border-top:1px solid #C9773A;
                 border-bottom:1px solid #C9773A; padding:.7em 0; }
.cover-author  { text-align:center; color:#C9773A; margin:.4em 0; font-size:1em; font-weight:bold; }
h2.sec-title   { font-size:1.6em; color:#C9773A; text-align:center; margin:2em 0 .5em;
                 font-style:italic; border-bottom:2px solid #C9773A; padding-bottom:.4em; }
.sec-desc      { text-align:center; font-style:italic; color:#D8A14A; margin-bottom:2em; }
h2.intro-title { font-size:1.4em; color:#C9773A; border-bottom:2px solid #C9773A;
                 padding-bottom:.3em; margin-bottom:1em; font-style:italic; }
.intro-text p  { margin:.7em 0; text-align:justify; }
.sign-off      { margin-top:2em; font-style:italic; color:#C9773A; }
h2.toc-title   { font-size:1.4em; color:#C9773A; border-bottom:2px solid #C9773A;
                 padding-bottom:.3em; margin-bottom:1em; font-style:italic; }
.toc-section   { font-weight:bold; color:#C9773A; margin:1em 0 .2em;
                 font-size:.85em; text-transform:uppercase; letter-spacing:.06em; }
.toc-item      { margin:.25em 0 .25em 1em; font-size:.92em; }
.toc-item a    { color:#2e2e2e; text-decoration:none; }
.toc-num       { color:#C9773A; font-weight:bold; margin-right:.3em; }
.recipe-num    { font-size:.78em; font-weight:bold; color:#C9773A;
                 text-transform:uppercase; letter-spacing:.08em; margin-bottom:.1em; }
h2.r-title     { font-size:1.35em; color:#C9773A; margin:.1em 0 .2em; font-style:italic; }
.r-sub         { font-style:italic; color:#5a5a5a; margin:.2em 0 .6em; font-size:.95em; }
.prep          { display:inline-block; background:#f5eaf5; color:#C9773A;
                 padding:.2em .7em; border-radius:20px; font-size:.85em; margin:.4em 0 .5em; }
.recipe-image  { display:block; width:auto; max-width:92%; max-height:11em;
                 margin:.5em auto; border-radius:5px; }
.comment       { font-style:italic; color:#5a5a5a; border-left:3px solid #C9773A;
                 padding:.3em .7em; margin:.6em 0 .8em; font-size:.93em; }
h3.sh          { font-size:.82em; font-weight:bold; color:#C9773A; margin:.9em 0 .2em;
                 text-transform:uppercase; letter-spacing:.06em; }
ul.ingr        { padding-left:1.2em; margin:.2em 0 .6em; }
ul.ingr li     { margin:.15em 0; }
ol.steps       { padding-left:1.3em; margin:.2em 0; }
ol.steps li    { margin:.3em 0; }
.note          { background:#faf0f8; border-left:3px solid #C9773A;
                 padding:.35em .7em; font-size:.88em; margin-top:.8em; color:#2e2e2e; }
.placeholder   { text-align:center; padding:2em 1em; color:#D8A14A;
                 font-style:italic; border:1px dashed #C9773A; margin:1em 0; border-radius:6px; }
hr.div         { border:none; border-top:1px solid #d4a0d4; margin:1.2em 0; }
"""

# ---------------------------------------------------------------------------
# 5. Build EPUB
# ---------------------------------------------------------------------------
book = epub.EpubBook()
book.set_identifier('didina-soulfood-riznica-2026')
book.set_title('Didina SoulFood Riznica')
book.set_language('sr')
book.add_author('Dragana Stamenković')

css_item = epub.EpubItem(uid='style', file_name='style.css',
                         media_type='text/css', content=CSS.encode('utf-8'))
book.add_item(css_item)

# Cover image — mark as cover-image property (no set_cover to avoid duplicates)
cover_png = make_cover_image()
cover_img_item = epub.EpubImage(uid='cover-img', file_name='cover.png',
                                media_type='image/png', content=cover_png)
book.add_item(cover_img_item)
book.add_metadata('OPF', 'meta', '', {'name': 'cover', 'content': 'cover-img'})

spine_items  = []
toc_entries  = []
all_recipe_toc = []   # for epub nav toc

def add_page(uid, filename, title, body, extra_ns=''):
    ch = epub.EpubHtml(title=title, file_name=filename, lang='sr')
    ch.content = page(title, body, extra_ns).encode('utf-8')
    ch.add_item(css_item)
    book.add_item(ch)
    spine_items.append(ch)
    return ch

# --- Cover xhtml ---
cover_body = """
<div style="text-align:center; padding:2em 1em;">
  <h1 class="book-title">Didina SoulFood Riznica</h1>
  <h2 class="book-sub">44 recepta iz srca kuhinje</h2>
  <p class="cover-quote">Ne brojite kalorije, brojite va&#353;e osmehe i korake.</p>
  <p class="cover-author"><strong>Dragana Stamenković</strong></p>
</div>"""
cover_ch = add_page('cover', 'cover.xhtml', 'Naslovnica', cover_body,
                    extra_ns='xmlns:epub="http://www.idpf.org/2007/ops" epub:prefix="z3998: http://www.daisy.org/z3998/2012/vocab/structure/, se: https://standardebooks.org/vocab/1.0"')
toc_entries.append(epub.Link('cover.xhtml', 'Naslovnica', 'cover'))

# --- Intro ---
intro_body = """
<h2 class="intro-title">Uvod u Didinu SoulFood Riznicu</h2>
<div class="intro-text">
  <p>Dobrodo&#353;la u moju kuhinju, gde se kuva srcem i zadovoljnim stomakom!</p>
  <p>Ova riznica nije nastala preko no&#263;i &#8212; nego kroz mnoga nedeljna jutra kada sam posebno inspirisana da kuvam, tihe ve&#269;eri uz &#353;olju &#269;aja, osmehe iz rerne, i poneki eksperiment koji se nikad vi&#353;e nije ponovio (pozdrav slanom kola&#269;u od cvekle!).</p>
  <p>Zovem se Didi. Volim da kuvam, ali jo&#353; vi&#353;e volim da spremam hranu koja te&#353;i, hrani i sme&#353;ka se iznutra.</p>
  <p>Ovi recepti nisu samo za stomak &#8212; oni su za dan kad ti treba mir, za tihe trenutke uz kafu ili kad ne zna&#353; &#353;ta da pojede&#353;, a ne &#382;eli&#353; ba&#353; ni da doda&#353; neko kilce.</p>
  <hr class="div"/>
  <p>Ovde ne&#263;e&#353; na&#263;i komplikovane korake. Samo stvarne zalogaje &#8212; inspirisane sportom, jogom, letom, morem i onom ve&#269;itom potrebom da svemu dodam &#353;aku oraha. Svi recepti su sa biljnim mlekom i pogodni za netolerante na laktozu, ali je mogu&#263;e praviti i sa obi&#269;nim mlekom ukoliko Vam se vi&#353;e svi&#273;a.</p>
  <p>U ovoj riznici se nalaze recepti koji su deo mog ritma, moje kuhinje iz &#269;iste radosti kuvanja.</p>
  <p>Cela knjiga pisana je u &#382;enskom rodu, kao da se obra&#263;am &#382;enama, ali svi mu&#353;ki &#269;itaoci i entuzijasti&#269;ni kuvari su dobrodo&#353;li da nam se pridru&#382;e na ovom putovanju.</p>
  <p>Ako ti neka od mojih ideja dotakne srce (ili stomak) &#8212; svrati ponovo. Uvek ima jo&#353;!</p>
  <p>I da zna&#353;: sve fotografije u ovoj knjizi nastale su bukvalno sekund pre nego &#353;to sam ja (ili neko od uku&#263;ana) zgrabila ka&#353;iku i bacila se na degustaciju!</p>
  <p>Ovo nije kuvar iz studija nego iz &#382;ivota. Sve je poteklo iz moje kuhinje i li&#269;ne kreativnosti. U&#382;ivajte u &#269;itanju i isprobavanju!</p>
</div>
<p class="sign-off">S ljubavlju,<br/>Didi &#127819;&#127807;</p>"""
intro_ch = add_page('intro', 'intro.xhtml', 'Uvod', intro_body)
toc_entries.append(epub.Link('intro.xhtml', 'Uvod', 'intro'))

# --- ToC page (built after sections loop, so we build it last) ---

# ---------------------------------------------------------------------------
# 6. Sections + recipes
# ---------------------------------------------------------------------------
section_toc = []   # for epub nav
toc_page_html = '<h2 class="toc-title">Sadr&#382;aj</h2>\n'

recipe_file_counter = [0]

def recipe_page(num, display_title, data):
    """Build and add one recipe page. Returns (EpubHtml, final_title)."""
    # Use extra recipe data if no website data available
    extra = EXTRA_RECIPES.get(display_title) if data is None else None

    if data is None and extra is None:
        body = f"""
<p class="recipe-num">Recept &#8212; dolazi uskoro</p>
<h2 class="r-title">{esc(display_title)}</h2>
<div class="placeholder">Ovaj recept &#263;e biti dodat uskoro.</div>"""
        fname = f'recipe_miss_{display_title[:12].replace(" ","_")}.xhtml'
        ch = add_page(f'miss_{display_title[:8]}', fname, display_title, body)
        return ch, display_title

    if extra:
        title_sr = display_title
        subtitle  = extra.get('subtitle', '')
        comment   = extra.get('author_comment', '')
        prep      = extra.get('prep_time', '')
        ingrs     = extra.get('ingredients', [])
        steps     = extra.get('instructions', [])
        note      = extra.get('note', '') or ''
        img_path  = extra.get('image') or ''
    else:
        title_sr   = display_title or data.get('title',{}).get('sr','')
        subtitle   = data.get('subtitle',{}).get('sr','')
        comment    = data.get('author_comment',{}).get('sr','')
        prep       = data.get('prep_time',{}).get('sr','')
        ingrs      = data.get('ingredients',{}).get('sr',[])
        steps      = data.get('instructions',{}).get('sr',[])
        note       = (data.get('note','') or '').strip()
        img_path   = data.get('image','')

    # Image
    img_html = ''
    if img_path:
        full = os.path.join(REPO, img_path)
        if os.path.exists(full):
            img_data = resize_img(full)
            fname_img = f'images/r{num}.jpg'
            book.add_item(epub.EpubItem(uid=f'img{num}', file_name=fname_img,
                                        media_type='image/jpeg', content=img_data))
            img_html = f'<img src="{fname_img}" alt="{esc(title_sr)}" class="recipe-image" style="max-height:10em;width:auto;display:block;margin:.4em auto;"/>'

    ingr_li  = ''.join(f'<li>{esc(i)}</li>\n' for i in ingrs if i)
    step_li  = ''.join(f'<li>{esc(s)}</li>\n' for s in steps if s)
    note_html    = f'<div class="note"><strong>Napomena:</strong> {esc(note)}</div>' if note else ''
    comment_html = f'<p class="comment">{esc(comment)}</p>' if comment.strip() else ''
    prep_html    = f'<p><span class="prep">&#9202; Vreme pripreme: {esc(prep)}</span></p>' if prep else ''

    num_label = f'Recept #{num}' if num else 'Bonus recept'
    body = f"""
<h2 class="r-title">{esc(title_sr)}</h2>
<p class="recipe-num">{num_label}</p>
<p class="r-sub">{esc(subtitle)}</p>
{comment_html}
{prep_html}
{img_html}
<h3 class="sh">Sastojci</h3>
<ul class="ingr">
{ingr_li}</ul>
<h3 class="sh">Priprema</h3>
<ol class="steps">
{step_li}</ol>
{note_html}"""

    recipe_file_counter[0] += 1
    slug = num if num else title_sr[:20].replace(' ', '_').replace('č','c').replace('ć','c').replace('š','s').replace('ž','z').replace('đ','d')
    xfname = f'recipe_{slug}.xhtml'
    ch = add_page(f'r{num}', xfname, f'#{num} {title_sr}', body)
    return ch, title_sr


for sec in SECTIONS:
    # Section title page
    sec_body = f"""
<h2 class="sec-title">{esc(sec['title'])}</h2>"""
    sec_ch = add_page(sec['file'], f"{sec['file']}.xhtml", sec['title'], sec_body)

    sec_recipe_links = []
    toc_page_html += f'<p class="toc-section">{esc(sec["title"])}</p>\n'

    for num, display_title in sec['items']:
        data = recipe_by_num.get(num) if num else None
        final_title = display_title or (data.get('title',{}).get('sr','') if data else '')
        rch, rtitle = recipe_page(num, display_title, data)

        label = f'#{num} {rtitle}' if num else f'* {rtitle}'
        sec_recipe_links.append(epub.Link(rch.file_name, label, rch.id))

        num_display = f'#{num}' if num else '&#9733;'
        toc_page_html += (
            f'<p class="toc-item"><span class="toc-num">{num_display}</span>'
            f'<a href="{rch.file_name}">{esc(rtitle)}</a></p>\n'
        )
        print(f'  [{sec["title"][:20]}] #{num or "?"} {rtitle}')

    section_toc.append(epub.Section(sec['title'], sec_recipe_links))

# --- Bonus recipe ---
bonus_img_html = ''
bonus_path = os.path.join(IMGDIR, 'ukusni-prokelj-iz-rerne.png')
if os.path.exists(bonus_path):
    bd = resize_img(bonus_path)
    book.add_item(epub.EpubItem(uid='imgbonus', file_name='images/rbonus.jpg',
                                media_type='image/jpeg', content=bd))
    bonus_img_html = '<img src="images/rbonus.jpg" alt="Ukusni prokelj iz rerne" class="recipe-image" style="max-height:10em;width:auto;display:block;margin:.4em auto;"/>'

bonus_body = f"""
<p class="recipe-num">Bonus recept &#8211; jelo od samo jednog sastojka</p>
<h2 class="r-title">Ukusni prokelj iz rerne</h2>
<p class="r-sub">Dovoljan je samo jedan sastojak i malo kreativnosti pa da i najskromnije povr&#263;e postane zvezda stola.</p>
<p><span class="prep">&#9202; Vreme pripreme: 30 minuta</span></p>
{bonus_img_html}
<p class="comment">Prokelj &#269;esto ima lo&#353;u reputaciju, ali kada se pravilno pripremi u rerni postaje hrskav spolja, a mekan iznutra.</p>
<h3 class="sh">Sastojci</h3>
<ul class="ingr">
<li>10-ak glavica proklja</li>
<li>malo maslinovog ulja</li>
<li>so</li>
<li>aleva paprika</li>
</ul>
<h3 class="sh">Priprema</h3>
<ol class="steps">
<li>Prokelj operi, ukloni peteljke i prve listi&#263;e uz peteljku.</li>
<li>Svaku glavicu prepolovi po du&#382;ini.</li>
<li>Polutke kratko prokuvaj u vodi 2&#8211;3 minuta, zatim ocedi.</li>
<li>Pore&#273;aj prokelj ravnom stranom na pleh oblo&#382;en papirom za pe&#269;enje.</li>
<li>Prelij sa malo maslinovog ulja, posoli i dodaj alevu papriku po ukusu.</li>
<li><strong>Mali trik:</strong> blago pritisni svaku polutku da pusti vi&#353;ak vode i dobije hrskaviju koricu.</li>
<li>Peci u rerni zagrejanoj na 180&#176;C oko 20 minuta, dok prokelj ne porumeni.</li>
</ol>
<div class="note"><strong>Napomena:</strong> Odli&#269;no ide kao prilog uz meso ili ribu, ali i kao mali topli zalogaj uz &#269;a&#353;u vina.</div>
<h3 class="sh" style="margin-top:1.1em;">Energija jela</h3>
<p><em>&#268;ista jednostavnost!</em></p>
<p>Za kraj ove male riznice &#8211; jedno skromno povr&#263;e koje nas podse&#263;a da se prava &#269;ar kuvanja &#269;esto krije u jednostavnosti i da je manje vrlo &#269;esto &#8211; vi&#353;e!</p>"""
bonus_ch = add_page('bonus', 'bonus.xhtml', 'Bonus recept – Ukusni prokelj iz rerne', bonus_body)

toc_page_html += (
    '<p class="toc-section">Bonus</p>\n'
    '<p class="toc-item"><span class="toc-num">&#9733;</span>'
    '<a href="bonus.xhtml">Bonus recept &#8211; Ukusni prokelj iz rerne</a></p>\n'
)

# --- Final word ---
final_body = """
<h2 class="intro-title">Na kraju&#8230;</h2>
<div class="intro-text">
  <p>Ovo nije knjiga o dijetama.</p>
  <p>Nema kalorijskh tablica, brojanja porcija, zabrana i gri&#382;e savesti.<br/>
  Ovo je kuvar i poziv da voli&#353; sebe kroz hranu.</p>
  <p>Recepti koje si ovde prona&#353;la nisu niskokalori&#269;ni, ali su <strong>ne&#382;no izbalansirani</strong>, ba&#353; kao i &#382;ivot koji &#382;eli&#353; da &#382;ivi&#353;.</p>
  <p>Hrana je tu da nas nahrani, umiri, obraduje i podsteti: kad se kre&#263;e&#353;, di&#353;e&#353;, smeje&#353; i voli&#353; &#8212; sve drugo do&#273;e na svoje mesto.</p>
  <p>I zapamti: &#353;ta god da se u ovom trenutku de&#353;ava, sve na kraju ispadne dobro!</p>
  <hr class="div"/>
  <p><strong>Ne broji kalorije.<br/>Broj osmehe. Korake. Lepe zalogaje.</strong></p>
  <p><strong>Ve&#382;baj i u&#382;ivaj u trenucima i malim, jednostavnim stvarima. Nasme&#353;i se bez razloga.</strong></p>
  <hr class="div"/>
  <p>Hvala ti &#353;to si kuvala sa mnom.<br/>
  Ova knjiga je mo&#382;da gotova, ali tvoja kuhinjska avantura tek po&#269;inje.</p>
</div>
<p class="sign-off">Iz jedne male kuhinje i sa puno ljubavi,<br/><br/>Didi<br/><br/>Bremen, prole&#263;e 2026.</p>"""
final_ch = add_page('final', 'final.xhtml', 'Na kraju...', final_body)

# --- ToC page (now complete) ---
toc_page_html += f'<p class="toc-item" style="margin-top:.6em;"><a href="final.xhtml">Na kraju&#8230;</a></p>\n'
toc_ch = epub.EpubHtml(title='Sadržaj', file_name='toc_page.xhtml', lang='sr')
toc_ch.content = page('Sadržaj', toc_page_html).encode('utf-8')
toc_ch.add_item(css_item)
book.add_item(toc_ch)
# Insert ToC page after intro in spine
spine_items.insert(spine_items.index(intro_ch) + 1, toc_ch)
toc_entries.append(epub.Link('toc_page.xhtml', 'Sadržaj', 'toc_page'))

# ---------------------------------------------------------------------------
# 7. Nav / spine / write
# ---------------------------------------------------------------------------
book.toc = [
    epub.Link('cover.xhtml',   'Naslovnica', 'cover'),
    epub.Link('intro.xhtml',   'Uvod',       'intro'),
    epub.Link('toc_page.xhtml','Sadržaj',    'toc_page'),
    *section_toc,
    epub.Link('bonus.xhtml',   'Bonus recept – Ukusni prokelj iz rerne', 'bonus'),
    epub.Link('final.xhtml',   'Na kraju...', 'final'),
]
book.add_item(epub.EpubNcx())
book.add_item(epub.EpubNav())
book.spine = ['nav'] + spine_items

os.makedirs(os.path.dirname(OUTPUT), exist_ok=True)
epub.write_epub(OUTPUT, book)
print(f"\nDone! {OUTPUT}  ({os.path.getsize(OUTPUT)/1024/1024:.1f} MB)")
