#!/usr/bin/env python3
"""Generate Didina SoulFood Riznica PDF — same content as EPUB, print-optimised."""

import json, subprocess, os, io, base64
from PIL import Image

REPO   = '/home/user/didina-soulfood-riznica'
OUTPUT = os.path.join(REPO, 'sources', 'Didina_SoulFood_Riznica.pdf')
IMGDIR = os.path.join(REPO, 'assets', 'images')
PURPLE = '#8B1A6B'

# Load recipe data
raw = subprocess.run(['node', '-e', f"""
const fs = require('fs');
const c = fs.readFileSync('{REPO}/js/recipes-data.js', 'utf8');
eval(c.replace('const recipes', 'globalThis.recipes'));
console.log(JSON.stringify(globalThis.recipes));
"""], capture_output=True, text=True, check=True).stdout
recipe_by_num = {r['number']: r for r in json.loads(raw)}
print(f"Loaded {len(recipe_by_num)} recipes")

EXTRA_RECIPES = {
    'Hrskava celer salata': {
        'subtitle':       'Osveženje posle posla – između ručka i večere',
        'author_comment': 'Ova salata mi je bila pravo otkriće! Idealna je kao prva pomoć posle posla, kad je napolju vruće, a treba ti nešto lagano, hrskavo i hranljivo.',
        'prep_time':      '10 minuta',
        'image':          None,
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
        'note': 'Ovi zalogaji su kao mala slatka nagrada posle treninga ili joge. Možeš ih držati u zamrzivaču i vaditi po potrebi.',
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
        'note': 'Namaz je najbolji kada se posluži odmah. Može stajati nekoliko sati u frižideru ako se prekrije folijom direktno uz površinu. Odličan je uz integralni hleb, tortilje ili kao dodatak salati.',
    },
}

SECTIONS = [
    {'title': 'Jutarnji recepti', 'items': [
        ('1', 'Nedeljna tortilja'), ('6', None), ('14', None), ('26', None), ('40', None)]},
    {'title': 'Recepti kada ne znam šta da kuvam', 'items': [
        ('15',None),('16',None),('17',None),('36',None),('38',None),('41',None),
        ('43',None),('7',None),('46',None),('28',None),('53',None),('32',None)]},
    {'title': 'Osvežavajući recepti', 'items': [
        (None,'Hrskava celer salata'),('29',None),('47',None),('52','Detoks salata sa narom'),
        ('10','Tunin obrok za pun stomak i bistru glavu'),('45','Salata sa rukolom, fetom i orasima'),
        ('30',None),('4',None)]},
    {'title': 'Recepti koji mirišu iz rerne', 'items': [
        ('12',None),('25',None),('49',None),('8',None),('44','Šumska pita'),('51',None),('31',None)]},
    {'title': 'Recepti uz kafu', 'items': [
        (None,'Dubai zalogajčići'),('11','Kremasti sutlijaš'),('35',None),('37',None),
        ('33',None),('48',None),('50',None),('9',None)]},
    {'title': 'Recepti koji se mažu', 'items': [
        ('39','Domaći humus'),('42','Proteinski namaz'),('54',None),
        (None,'Raznobojni namaz od avokada')]},
]

def esc(s):
    if not s: return ''
    return (s.replace('&','&amp;').replace('<','&lt;')
             .replace('>','&gt;').replace('"','&quot;'))

def img_b64(path, max_w=480, max_h=300):
    with Image.open(path) as im:
        if im.mode not in ('RGB','L'):
            im = im.convert('RGB')
        im.thumbnail((max_w, max_h), Image.LANCZOS)
        buf = io.BytesIO()
        im.save(buf, format='JPEG', quality=82, optimize=True)
        return base64.b64encode(buf.getvalue()).decode()

def recipe_html(num, display_title, data):
    extra = EXTRA_RECIPES.get(display_title) if data is None else None
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

    img_tag = ''
    if img_path:
        full = os.path.join(REPO, img_path)
        if os.path.exists(full):
            b64 = img_b64(full)
            img_tag = '<img src="data:image/jpeg;base64,' + b64 + '" class="recipe-img" alt="' + esc(title_sr) + '"/>'

    ingr_li = ''.join('<li>' + esc(i) + '</li>' for i in ingrs if i)
    step_li = ''.join('<li>' + esc(s) + '</li>' for s in steps if s)
    note_html    = '<div class="note"><strong>Napomena:</strong> ' + esc(note) + '</div>' if note else ''
    comment_html = '<p class="comment">' + esc(comment) + '</p>' if comment.strip() else ''
    prep_html    = '<p class="prep">&#9202; Vreme pripreme: ' + esc(prep) + '</p>' if prep else ''
    num_label    = 'Recept #' + str(num) if num else 'Bonus recept'

    parts = [
        '<div class="recipe">',
        '<h2 class="r-title">' + esc(title_sr) + '</h2>',
        '<p class="recipe-num">' + num_label + '</p>',
    ]
    if subtitle: parts.append('<p class="r-sub">' + esc(subtitle) + '</p>')
    if comment.strip(): parts.append(comment_html)
    if prep: parts.append(prep_html)
    if img_tag: parts.append(img_tag)
    parts += [
        '<h3 class="sh">Sastojci</h3>',
        '<ul>' + ingr_li + '</ul>',
        '<h3 class="sh">Priprema</h3>',
        '<ol>' + step_li + '</ol>',
        note_html,
        '</div>',
    ]
    return '\n'.join(parts)

# ---------------------------------------------------------------------------
# Build page list
# ---------------------------------------------------------------------------
pages = []

# Cover
pages.append('''
<div class="cover-page">
  <div class="cover-inner">
    <h1 class="cover-title">Didina SoulFood Riznica</h1>
    <p class="cover-sub">44 recepta iz srca kuhinje</p>
    <p class="cover-quote">Ne brojite kalorije,<br/>brojite vaše osmehe i korake.</p>
    <p class="cover-author">Dragana Stamenković</p>
  </div>
</div>''')

# Intro
pages.append('''<div class="text-page">
<h2 class="sec-title" style="font-size:1.3em;">Uvod u Didinu SoulFood Riznicu</h2>
<p>Dobrodošla u moju kuhinju, gde se kuva srcem i zadovoljnim stomakom!</p>
<p>Ova riznica nije nastala preko noći — nego kroz mnoga nedeljna jutra kada sam posebno inspirisana da kuvam, tihe večeri uz šolju čaja, osmehe iz rerne, i poneki eksperiment koji se nikad više nije ponovio (pozdrav slanom kolaču od cvekle!).</p>
<p>Zovem se Didi. Volim da kuvam, ali još više volim da spremam hranu koja teši, hrani i smeška se iznutra.</p>
<p>Ovi recepti nisu samo za stomak — oni su za dan kad ti treba mir, za tihe trenutke uz kafu ili kad ne znaš šta da pojedeš, a ne želiš baš ni da dodaš neko kilce.</p>
<hr/>
<p>Ovde nećeš naći komplikovane korake. Samo stvarne zalogaje — inspirisane sportom, jogom, letom, morem i onom večitom potrebom da svemu dodam šaku oraha. Svi recepti su sa biljnim mlekom i pogodni za netolerante na laktozu, ali je moguće praviti i sa običnim mlekom ukoliko Vam se više sviđa.</p>
<p>U ovoj riznici se nalaze recepti koji su deo mog ritma, moje kuhinje iz čiste radosti kuvanja.</p>
<p>Cela knjiga pisana je u ženskom rodu, kao da se obraćam ženama, ali svi muški čitaoci i entuzijastični kuvari su dobrodošli da nam se pridruže na ovom putovanju.</p>
<p>Ako ti neka od mojih ideja dotakne srce (ili stomak) — svrati ponovo. Uvek ima još!</p>
<p>I da znaš: sve fotografije u ovoj knjizi nastale su bukvalno sekund pre nego što sam ja (ili neko od ukućana) zgrabila kašiku i bacila se na degustaciju!</p>
<p>Ovo nije kuvar iz studija nego iz života. Sve je poteklo iz moje kuhinje i lične kreativnosti. Uživajte u čitanju i isprobavanju!</p>
<p class="sign-off">S ljubavlju,<br/>Didi &#127819;&#127807;</p>
</div>''')

# ToC
toc = ['<div class="text-page"><h2 class="sec-title" style="font-size:1.3em;">Sadržaj</h2>']
for sec in SECTIONS:
    toc.append('<p class="toc-sec">' + esc(sec['title']) + '</p>')
    for num, display_title in sec['items']:
        data = recipe_by_num.get(num) if num else None
        title = display_title or (data.get('title',{}).get('sr','') if data else '')
        num_str = '#' + str(num) if num else '&#9733;'
        toc.append('<p class="toc-item"><span class="toc-num">' + num_str + '</span> ' + esc(title) + '</p>')
toc.append('<p class="toc-sec">Bonus</p>')
toc.append('<p class="toc-item"><span class="toc-num">&#9733;</span> Ukusni prokelj iz rerne</p>')
toc.append('</div>')
pages.append('\n'.join(toc))

# Sections + recipes
for sec in SECTIONS:
    pages.append('<div class="sec-page"><h2 class="sec-title">' + esc(sec['title']) + '</h2></div>')
    for num, display_title in sec['items']:
        data = recipe_by_num.get(num) if num else None
        pages.append(recipe_html(num, display_title, data))
        title = display_title or (data.get('title',{}).get('sr','') if data else '')
        print(f'  #{num or "?"} {title}')

# Bonus recipe
bonus_img = ''
bonus_path = os.path.join(IMGDIR, 'ukusni-prokelj-iz-rerne.png')
if os.path.exists(bonus_path):
    b64 = img_b64(bonus_path)
    bonus_img = '<img src="data:image/jpeg;base64,' + b64 + '" class="recipe-img" alt="Ukusni prokelj iz rerne"/>'

pages.append('''<div class="recipe">
  <h2 class="r-title">Ukusni prokelj iz rerne</h2>
  <p class="recipe-num">Bonus recept – jelo od samo jednog sastojka</p>
  <p class="r-sub">Dovoljan je samo jedan sastojak i malo kreativnosti pa da i najskromnije povrće postane zvezda stola.</p>
  <p class="comment">Prokelj često ima lošu reputaciju, ali kada se pravilno pripremi u rerni postaje hrskav spolja, a mekan iznutra.</p>
  <p class="prep">&#9202; Vreme pripreme: 30 minuta</p>''' + bonus_img + '''
  <h3 class="sh">Sastojci</h3>
  <ul>
    <li>10-ak glavica proklja</li>
    <li>malo maslinovog ulja</li>
    <li>so</li>
    <li>aleva paprika</li>
  </ul>
  <h3 class="sh">Priprema</h3>
  <ol>
    <li>Prokelj operi, ukloni peteljke i prve listiće uz peteljku.</li>
    <li>Svaku glavicu prepolovi po dužini.</li>
    <li>Polutke kratko prokuvaj u vodi 2–3 minuta, zatim ocedi.</li>
    <li>Poredjaj prokelj ravnom stranom na pleh obložen papirom za pečenje.</li>
    <li>Prelij sa malo maslinovog ulja, posoli i dodaj alevu papriku po ukusu.</li>
    <li><strong>Mali trik:</strong> blago pritisni svaku polutku da pusti višak vode i dobije hrskaviju koricu.</li>
    <li>Peci u rerni zagrejanoj na 180°C oko 20 minuta, dok prokelj ne porumeni.</li>
  </ol>
  <div class="note"><strong>Napomena:</strong> Odlično ide kao prilog uz meso ili ribu, ali i kao mali topli zalogaj uz čašu vina.</div>
</div>''')

# Final word
pages.append('''<div class="text-page">
<h2 class="sec-title" style="font-size:1.3em;">Na kraju…</h2>
<p>Ovo nije knjiga o dijetama.</p>
<p>Nema kalorijskih tablica, brojanja porcija, zabrana i grižje savesti.<br/>
Ovo je kuvar i poziv da voliš sebe kroz hranu.</p>
<p>Recepti koje si ovde pronašla nisu niskokalorični, ali su <strong>nežno izbalansirani</strong>, baš kao i život koji želiš da živiš.</p>
<p>Hrana je tu da nas nahrani, umiri, obraduje i podsteti: kad se krećeš, dišeš, smeješ i voliš — sve drugo dođe na svoje mesto.</p>
<p>I zapamti: šta god da se u ovom trenutku dešava, sve na kraju ispadne dobro!</p>
<hr/>
<p><strong>Ne broji kalorije.<br/>Broji osmehe. Korake. Lepe zalogaje.</strong></p>
<p><strong>Vežbaj i uživaj u trenucima i malim, jednostavnim stvarima. Nasmeši se bez razloga.</strong></p>
<hr/>
<p>Hvala ti što si kuvala sa mnom.<br/>
Ova knjiga je možda gotova, ali tvoja kuhinjska avantura tek počinje.</p>
<p class="sign-off">Iz jedne male kuhinje i sa puno ljubavi,<br/><br/>Didi<br/><br/>Bremen, proleće 2026.</p>
</div>''')

# ---------------------------------------------------------------------------
# CSS
# ---------------------------------------------------------------------------
CSS = """
@page {
  size: A5;
  margin: 2cm 2cm 2.5cm 2cm;
  @bottom-center {
    content: counter(page);
    font-size: 9pt;
    color: """ + PURPLE + """;
  }
}
@page cover { margin: 0; @bottom-center { content: none; } }
body {
  font-family: Georgia, 'Times New Roman', serif;
  font-size: 10.5pt;
  line-height: 1.7;
  color: #1a1a1a;
}
.cover-page {
  page: cover;
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  page-break-after: always;
}
.cover-inner {
  border: 3px solid """ + PURPLE + """;
  padding: 3em 2.5em;
  max-width: 80%;
}
.cover-title {
  font-size: 22pt;
  color: """ + PURPLE + """;
  font-style: italic;
  margin: 0 0 0.3em;
  line-height: 1.3;
}
.cover-sub {
  font-size: 11pt;
  color: #555;
  font-style: italic;
  margin: 0 0 1.5em;
}
.cover-quote {
  font-size: 10pt;
  color: """ + PURPLE + """;
  font-style: italic;
  border-top: 1px solid """ + PURPLE + """;
  border-bottom: 1px solid """ + PURPLE + """;
  padding: 0.6em 0;
  margin: 1em 0;
}
.cover-author {
  font-size: 12pt;
  font-weight: bold;
  color: """ + PURPLE + """;
  margin-top: 1em;
}
.text-page, .sec-page { page-break-before: always; }
.sec-title {
  font-size: 18pt;
  color: """ + PURPLE + """;
  font-style: italic;
  text-align: center;
  border-bottom: 2px solid """ + PURPLE + """;
  padding-bottom: 0.4em;
  margin: 0.5em 0 1em;
}
.toc-sec {
  font-weight: bold;
  color: """ + PURPLE + """;
  margin: 0.8em 0 0.2em;
  font-size: 9pt;
  text-transform: uppercase;
  letter-spacing: 0.06em;
}
.toc-item { margin: 0.15em 0 0.15em 1em; font-size: 9.5pt; }
.toc-num  { color: """ + PURPLE + """; font-weight: bold; }
.recipe   { page-break-before: always; }
h2.r-title {
  font-size: 16pt;
  color: """ + PURPLE + """;
  font-style: italic;
  margin: 0 0 0.15em;
  page-break-after: avoid;
  line-height: 1.3;
}
.recipe-num {
  font-size: 8pt;
  font-weight: bold;
  color: """ + PURPLE + """;
  text-transform: uppercase;
  letter-spacing: 0.08em;
  margin: 0 0 0.3em;
}
.r-sub   { font-style: italic; color: #555; font-size: 9.5pt; margin: 0.2em 0 0.5em; }
.comment {
  font-style: italic; color: #444;
  border-left: 3px solid """ + PURPLE + """;
  padding: 0.2em 0.6em; margin: 0.4em 0 0.5em; font-size: 9.5pt;
}
.prep {
  display: inline-block; background: #f5eaf5; color: """ + PURPLE + """;
  padding: 0.15em 0.6em; border-radius: 12px; font-size: 9pt; margin: 0.3em 0 0.4em;
}
.recipe-img {
  display: block; max-width: 80%; max-height: 180px;
  margin: 0.5em auto; border-radius: 4px;
}
h3.sh {
  font-size: 8pt; font-weight: bold; color: """ + PURPLE + """;
  text-transform: uppercase; letter-spacing: 0.07em;
  margin: 0.8em 0 0.2em; page-break-after: avoid;
}
ul, ol { padding-left: 1.3em; margin: 0.1em 0 0.4em; }
li { margin: 0.15em 0; font-size: 9.5pt; }
.note {
  background: #faf0f8; border-left: 3px solid """ + PURPLE + """;
  padding: 0.3em 0.6em; font-size: 9pt; margin-top: 0.7em;
}
hr { border: none; border-top: 1px solid #d4a0d4; margin: 1em 0; }
.sign-off { margin-top: 1.5em; font-style: italic; color: """ + PURPLE + """; }
p { margin: 0.5em 0; }
"""

# ---------------------------------------------------------------------------
# Render
# ---------------------------------------------------------------------------
full_html = ('<!DOCTYPE html><html lang="sr"><head><meta charset="utf-8"/>'
             '<title>Didina SoulFood Riznica</title>'
             '<style>' + CSS + '</style></head><body>'
             + '\n'.join(pages) + '</body></html>')

print("\nRendering PDF with WeasyPrint...")
import weasyprint
os.makedirs(os.path.dirname(OUTPUT), exist_ok=True)
weasyprint.HTML(string=full_html, base_url=REPO).write_pdf(OUTPUT)
size_mb = os.path.getsize(OUTPUT) / 1024 / 1024
print(f"Done! {OUTPUT}  ({size_mb:.1f} MB)")
