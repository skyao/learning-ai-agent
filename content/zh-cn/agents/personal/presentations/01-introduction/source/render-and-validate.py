"""Validate native PPTX/PDF text and render the complete introduction and all seven parts."""
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
                record = MANIFEST['records'][i-1]
                if record.get('kind') == 'navigation':
                    assert '内容导航' in page.get_text()
                    for section in DATA['navigation']['sections']:
                        rows = [sp for sp in root.findall('.//p:sp', NS)
                                if norm(''.join(t.text or '' for t in sp.findall('.//a:t', NS))) == norm(section['title'])]
                        assert len(rows) == 1, (i, section['title'])
                        colors = {el.get('val') for el in rows[0].findall('.//a:srgbClr', NS)}
                        active = section['part'] == record['part']
                        assert ('FFFFFF' if active else '61717B') in colors, (i, section['part'], colors)
            else:
                page.get_pixmap(matrix=fitz.Matrix(1.666667, 1.666667), alpha=False).save(ASSETS / f'{name}-{i:02}.png')
    if complete:
        rosters = [r for r in MANIFEST['records'] if r.get('kind') == 'roster']
        assert len(rosters) == len(DATA['part01Roster']) == 2
        assert [r['number'] for r in rosters] == [7, 8]
        assert all(r['part'] == 1 for r in rosters)
        for i, (record, roster) in enumerate(zip(rosters, DATA['part01Roster'])):
            assert len(roster['rows']) == 8
            batch = MANIFEST['firstBatch'] if i == 0 else MANIFEST['secondBatch']
            # Spark/Task and Perplexity use shortened display names in the table.
            actual = [norm(row[0]) for row in roster['rows']]
            expected = [norm(x) for x in batch]
            if i == 0:
                expected[3] = norm('Gemini Spark（现 Task）')
            assert actual == expected, (actual, expected)
            text = norm(doc[record['number'] - 1].get_text())
            assert norm('2026-10-26') in text
            assert all(norm(value) in text for row in roster['rows'] for value in row)
        extra_records = [r for r in MANIFEST['records'] if r['part'] == 2 and r['title'] in {s['title'] for s in DATA['part02Extra']}]
        assert len(extra_records) == len(DATA['part02Extra']) == 10
        matrices = [r for r in extra_records if r['kind'] == 'capability-matrix']
        assert len(matrices) == 2
        for record, spec in zip(matrices, [s for s in DATA['part02Extra'] if s['kind'] == 'capability-matrix']):
            assert len(spec['rows']) == 8
            text = norm(doc[record['number'] - 1].get_text())
            assert all(norm(value) in text for row in spec['rows'] for value in row)
        product_part = next(p for p in DATA['parts'] if p['part'] == 5)
        product_specs = [s for s in product_part['slides'] if s['kind'] == 'product-profile']
        assert len(product_specs) == len(DATA['overviewProducts']) == 8
        assert DATA['overviewProducts'] == MANIFEST['firstBatch']
        for product, spec in zip(DATA['overviewProducts'], product_specs):
            records = [r for r in MANIFEST['records'] if r.get('product') == product and r.get('focus') == 'overview']
            assert len(records) == 1 and records[0]['focus'] == 'overview'
            record = records[0]
            text = norm(doc[record['number'] - 1].get_text())
            assert all(norm(spec[key]) in text for key in ['product', 'vendor', 'launch', 'position', 'entry', 'ecosystem', 'business'])
            with ZipFile(ASSETS / (name + '.pptx')) as z:
                xml = E.fromstring(z.read(f'ppt/slides/slide{record["number"]}.xml'))
                assert len(xml.findall('.//p:pic', NS)) == 1
            assert (ASSETS / spec['image']['path']).is_file()
        reference_specs = [s for s in product_part['slides'] if s['kind'] == 'product-reference']
        assert len(reference_specs) == 2
        assert [c['product'] for s in reference_specs for c in s['cards']] == MANIFEST['secondBatch']
        for spec in reference_specs:
            assert len(spec['cards']) == 4
            record = next(r for r in MANIFEST['records'] if r['part'] == 5 and r['title'] == spec['title'])
            text = norm(doc[record['number'] - 1].get_text())
            assert all(norm(c[key]) in text for c in spec['cards'] for key in ['product', 'vendor', 'launch', 'ecosystem', 'business'])
            with ZipFile(ASSETS / (name + '.pptx')) as z:
                xml = E.fromstring(z.read(f'ppt/slides/slide{record["number"]}.xml'))
                assert len(xml.findall('.//p:pic', NS)) == 4
            assert all((ASSETS / c['icon']['path']).is_file() for c in spec['cards'])
        assert all(s['kind'] != 'scenario' for s in product_part['slides'])
        feature_specs = [s for s in product_part['slides'] if s['kind'] == 'product-detail']
        comparison_specs = [s for s in product_part['slides'] if s['kind'] == 'product-comparison']
        assert len(feature_specs) == 16 and len(comparison_specs) == 1
        assert MANIFEST['detailProducts'] == DATA['detailProducts'] == ['Muse', 'Dots', 'Claude Duet', 'Grok Bot']
        for product in DATA['detailProducts']:
            features = [s for s in feature_specs if s['product'] == product]
            assert len(features) == 4
            overview_position = next(i for i, s in enumerate(product_part['slides']) if s.get('product') == product and s['kind'] == 'product-profile')
            assert product_part['slides'][overview_position + 1:overview_position + 5] == features
        for spec in feature_specs + comparison_specs:
            record = next(r for r in MANIFEST['records'] if r.get('id') == spec['id'])
            text = norm(doc[record['number'] - 1].get_text())
            assert all(norm(spec[key]) in text for key in ['title', 'subtitle', 'ribbon'])
            if spec.get('image'):
                assert (ASSETS / spec['image']['path']).is_file()
        assert MANIFEST['sections'][4] == sum(s['seconds'] for s in product_part['slides']) + DATA['navigation']['seconds']
        baseline = json.loads((SOURCE / 'product-detail-preservation-baseline.json').read_text())
        positions = []
        for old in baseline['slides']:
            record = next(r for r in MANIFEST['records'] if r['title'] == old['title'] and r['part'] == old['part'])
            positions.append(record['number'])
            text = norm(doc[record['number'] - 1].get_text())
            assert all(norm(value) in text for value in old['texts']), ('Original slide content changed', old['originalNumber'])
        assert positions == sorted(positions) and len(positions) == 51
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
navigation_records = [r for r in MANIFEST['records'] if r.get('kind') == 'navigation']
assert [r['part'] for r in navigation_records] == list(range(1, 8))
for part in range(1, 8):
    records = [r for r in MANIFEST['records'] if r['part'] == part and r.get('kind') != 'cover']
    assert records[0]['kind'] == 'navigation'
    assert sum(r['seconds'] for r in MANIFEST['records'] if r['part'] == part) == MANIFEST['sections'][part-1]
results = [validate('00-personal-agent-introduction', MANIFEST['slides'], DATA['totalSeconds'], complete=True)]
results.append(validate('01-what-is-personal-agent', 2 + len(DATA['part01CombinedTimings']) + len(DATA['part01Roster']), DATA['part01Seconds']))
results.append(validate('02-what-personal-agents-can-do', 1 + len(DATA['part02Timings']) + len(DATA['part02Extra']), MANIFEST['sections'][1]))
for part in DATA['parts']:
    results.append(validate(part['name'], 1 + len(part['slides']), part['seconds']))
appendix = json.loads((SOURCE / '05-product-scenarios-appendix-manifest.json').read_text())
results.append(validate('05-product-scenarios-appendix', appendix['slides'], appendix['totalSeconds']))
doc = fitz.open(ASSETS / '00-personal-agent-introduction.pdf')
thumb_w, thumb_h = 640, 360
cell_w, cell_h = 652, 392
sheet = Image.new('RGB', (3 * cell_w + 12, math.ceil(len(navigation_records) / 3) * cell_h + 12), '#D8DFE1')
draw = ImageDraw.Draw(sheet)
for i, record in enumerate(navigation_records):
    page = doc[record['number'] - 1]
    page.get_pixmap(matrix=fitz.Matrix(1.666667, 1.666667), alpha=False).save(ASSETS / f'00-navigation-{record["part"]:02}.png')
    pix = page.get_pixmap(matrix=fitz.Matrix(thumb_w / page.rect.width, thumb_w / page.rect.width), alpha=False)
    im = Image.frombytes('RGB', (pix.width, pix.height), pix.samples)
    im.thumbnail((thumb_w, thumb_h), Image.Resampling.LANCZOS)
    x, y = 12 + i % 3 * cell_w, 12 + i // 3 * cell_h
    draw.text((x, y), f'Part {record["part"]} / Page {record["number"]}', fill='#1E3446')
    sheet.paste(im, (x, y + 20))
sheet.save(ASSETS / '00-navigation-preview.png')
feature_records = [r for r in MANIFEST['records'] if r.get('kind') in ['product-detail', 'product-comparison']]
feature_width, feature_height = 640, 360
feature_sheet = Image.new('RGB', (3 * 652 + 12, math.ceil(len(feature_records) / 3) * 392 + 12), '#D8DFE1')
feature_draw = ImageDraw.Draw(feature_sheet)
for i, record in enumerate(feature_records):
    page = doc[record['number'] - 1]
    pix = page.get_pixmap(matrix=fitz.Matrix(feature_width / page.rect.width, feature_width / page.rect.width), alpha=False)
    im = Image.frombytes('RGB', (pix.width, pix.height), pix.samples)
    im.thumbnail((feature_width, feature_height), Image.Resampling.LANCZOS)
    x, y = 12 + i % 3 * 652, 12 + i // 3 * 392
    feature_draw.text((x, y), f'Page {record["number"]}', fill='#1E3446')
    feature_sheet.paste(im, (x, y + 20))
feature_sheet.save(ASSETS / '05-product-details-preview.png')
(SOURCE / 'introduction-validation.json').write_text(json.dumps({'date': DATA['date'], 'navigationPages': MANIFEST['navigationPages'], 'presentations': results}, ensure_ascii=False, indent=2) + '\n')
