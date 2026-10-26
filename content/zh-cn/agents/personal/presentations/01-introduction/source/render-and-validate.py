"""Validate native PPTX/PDF text and render the complete introduction and parts 3–7."""
from pathlib import Path
from zipfile import ZipFile
from lxml import etree as E
from PIL import Image, ImageDraw
import fitz
import json
import math
import posixpath
import re
import unicodedata

SOURCE = Path(__file__).resolve().parent
ASSETS = SOURCE.parent / 'images'
DATA = json.loads((SOURCE / 'introduction-slides.json').read_text())
MANIFEST = json.loads((SOURCE / 'introduction-manifest.json').read_text())
NS = {'a': 'http://schemas.openxmlformats.org/drawingml/2006/main',
      'p': 'http://schemas.openxmlformats.org/presentationml/2006/main'}


def norm(text):
    return re.sub(r'[^\w\u4e00-\u9fff]', '', unicodedata.normalize('NFKC', text)).lower()


def validate(name, expected_pages, seconds, complete=False):
    doc = fitz.open(ASSETS / (name + '.pdf'))
    missing = []
    with ZipFile(ASSETS / (name + '.pptx')) as z:
        assert z.testzip() is None
        names = set(z.namelist())
        slides = [n for n in names if re.fullmatch(r'ppt/slides/slide\d+\.xml', n)]
        notes = [n for n in names if re.fullmatch(r'ppt/notesSlides/notesSlide\d+\.xml', n)]
        assert len(slides) == len(notes) == len(doc) == expected_pages
        for entry in names:
            if entry.endswith(('.xml', '.rels')):
                E.fromstring(z.read(entry))
            if entry.endswith('.rels'):
                stem = posixpath.dirname(posixpath.dirname(entry)) if entry != '_rels/.rels' else ''
                for rel in E.fromstring(z.read(entry)):
                    if rel.get('TargetMode') == 'External':
                        continue
                    target = rel.get('Target')
                    resolved = target.lstrip('/') if target.startswith('/') else posixpath.normpath(posixpath.join(stem, target))
                    assert resolved in names, (entry, resolved)
        for i, page in enumerate(doc, 1):
            rendered = norm(page.get_text())
            root = E.fromstring(z.read(f'ppt/slides/slide{i}.xml'))
            for shape in root.findall('.//p:sp', NS):
                text = ''.join(el.text or '' for el in shape.findall('.//a:t', NS))
                if len(norm(text)) > 2 and norm(text) not in rendered:
                    missing.append({'slide': i, 'text': text})
            if complete:
                note = norm(''.join(E.fromstring(z.read(f'ppt/notesSlides/notesSlide{i}.xml')).itertext()))
                assert norm(f'建议讲述 {MANIFEST["records"][i-1]["seconds"]} 秒') in note
            else:
                page.get_pixmap(matrix=fitz.Matrix(1.666667, 1.666667), alpha=False).save(ASSETS / f'{name}-{i:02}.png')
    if complete:
        for title, expected, absent in [('第一批八个产品：先看定位', 'WorkBuddy', 'PersonalComputer'),
                                        ('第二批八个对象：各补充一个观察点', 'PersonalComputer', 'WorkBuddy')]:
            record = next(r for r in MANIFEST['records'] if r['title'] == title)
            text = norm(doc[record['number'] - 1].get_text())
            assert norm(expected) in text and norm(absent) not in text
        for product in DATA['featuredProducts']:
            records = [r for r in MANIFEST['records'] if r.get('product') == product]
            assert {r['focus'] for r in records} == {'product', 'scenario'}
            assert len(records) >= 2
            assert all(norm(product) in norm(doc[r['number'] - 1].get_text()) for r in records)
    columns = 3 if expected_pages > 4 else 2
    width = 492 if complete else 800
    height = round(width * 9 / 16)
    margin, label = 12, 20
    cell_w, cell_h = width + margin, height + margin + label
    sheet = Image.new('RGB', (columns * cell_w + margin, math.ceil(expected_pages / columns) * cell_h + margin), '#D8DFE1')
    draw = ImageDraw.Draw(sheet)
    for i, page in enumerate(doc):
        pix = page.get_pixmap(matrix=fitz.Matrix(width / page.rect.width, width / page.rect.width), alpha=False)
        im = Image.frombytes('RGB', (pix.width, pix.height), pix.samples)
        im.thumbnail((width, height), Image.Resampling.LANCZOS)
        x, y = margin + i % columns * cell_w, margin + i // columns * cell_h
        draw.text((x, y), f'{i + 1:02d}', fill='#1E3446')
        sheet.paste(im, (x, y + label))
    sheet.save(ASSETS / (name + '-preview.png'))
    result = {'name': name, 'slides': expected_pages, 'notesPages': len(notes), 'pdfPages': len(doc),
              'totalSeconds': seconds, 'missingRenderedText': missing, 'renderedWith': 'LibreOffice Impress',
              'nativeEditableTextAndShapes': True, 'windowsPowerPointTested': False}
    print(json.dumps(result, ensure_ascii=False))
    assert not missing, missing
    return result


assert len(MANIFEST['firstBatch']) == len(MANIFEST['secondBatch']) == 8
assert MANIFEST['totalSeconds'] == sum(MANIFEST['sections']) == sum(r['seconds'] for r in MANIFEST['records']) == DATA['totalSeconds']
results = [validate('00-personal-agent-introduction', MANIFEST['slides'], DATA['totalSeconds'], complete=True)]
results.append(validate('02-what-personal-agents-can-do', len(DATA['part02Timings']), sum(DATA['part02Timings'])))
for part in DATA['parts']:
    results.append(validate(part['name'], len(part['slides']), part['seconds']))
(SOURCE / 'introduction-validation.json').write_text(json.dumps({'date': DATA['date'], 'presentations': results}, ensure_ascii=False, indent=2) + '\n')
