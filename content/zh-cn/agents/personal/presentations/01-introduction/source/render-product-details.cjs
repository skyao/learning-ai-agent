/** Product features in editable PowerPoint shapes; diagrams are explicitly illustrative. */
const path = require('node:path');

function renderProductDetail(ctx, s, item, { box, txt, C, out }) {
  const card = (x, y, w, h, title, body, color = C.teal) => {
    box(ctx, s, x, y, w, h);
    txt(ctx, s, title, x + 0.22, y + 0.16, w - 0.44, 0.34, 20, color, true);
    txt(ctx, s, body, x + 0.22, y + 0.54, w - 0.44, h - 0.66, h < 1.4 ? 16 : 17, C.ink);
  };
  const figure = (img, x, y, w, h) => {
    const scale = Math.min(w / img.size[0], h / img.size[1]);
    const iw = img.size[0] * scale, ih = img.size[1] * scale;
    s.addImage({ path: path.join(out, img.path), x: x + (w - iw) / 2, y: y + (h - ih) / 2,
      w: iw, h: ih, altText: img.caption });
  };
  const arrow = (x, y, w, h = 0) => s.addShape(ctx.pptx.ShapeType.line, {
    x, y: h < 0 ? y + h : y, w, h: Math.abs(h), flipV: h < 0,
    line: { color: C.teal, width: 1.5, endArrowType: 'triangle' },
  });
  if (item.kind === 'product-comparison') {
    const widths = [1.55, 2.45, 2.6, 2.6, 2.93];
    box(ctx, s, 0.6, 2.2, 12.13, 0.45, C.ink);
    let x = 0.6;
    item.columns.forEach((v, i) => { txt(ctx, s, v, x + 0.13, 2.3, widths[i] - 0.26, 0.25, 14, C.white, true); x += widths[i]; });
    item.rows.forEach((row, i) => {
      const y = 2.65 + i * 0.8;
      box(ctx, s, 0.6, y, 12.13, 0.8, i % 2 ? 'EAEDEB' : C.white);
      let x = 0.6;
      row.forEach((v, j) => {
        txt(ctx, s, v, x + 0.13, y + 0.08, widths[j] - 0.26, 0.64, j === 0 ? 18 : 15, j === 0 ? C.teal : C.ink, j === 0);
        x += widths[j];
      });
    });
    return;
  }
  if (item.layout === 'showcase') {
    box(ctx, s, 0.6, 2.14, 4.32, 3.91);
    figure(item.image, 0.84, 2.27, 3.84, 3.25);
    txt(ctx, s, item.image.caption, 0.82, 5.65, 3.88, 0.26, 10, C.muted);
    item.cards.forEach((c, i) => card(5.17, 2.15 + i * 1.3, 7.56, 1.12, c.title, c.body));
  } else if (item.layout === 'gallery') {
    box(ctx, s, 0.6, 2.14, 12.13, 2.0);
    figure(item.image, 0.82, 2.24, 11.69, 1.57);
    txt(ctx, s, item.image.caption, 0.82, 3.85, 11.69, 0.22, 10, C.muted);
    item.cards.forEach((c, i) => card(0.6 + i * 6.18, 4.36, 5.95, 1.64, c.title, c.body));
  } else if (item.layout === 'flow') {
    box(ctx, s, 0.6, 2.15, 12.13, 0.79, C.pale);
    txt(ctx, s, item.exampleLabel, 0.82, 2.25, 11.69, 0.19, 10, C.blue, true);
    txt(ctx, s, item.example, 0.82, 2.52, 11.69, 0.28, 18, C.ink, true);
    const n = item.steps.length, gap = 0.26, w = (12.13 - (n - 1) * gap) / n;
    item.steps.forEach((c, i) => {
      const x = 0.6 + i * (w + gap);
      box(ctx, s, x, 3.23, w, 2.66);
      txt(ctx, s, String(i + 1).padStart(2, '0'), x + 0.21, 3.43, w - 0.42, 0.25, 13, C.teal, true);
      txt(ctx, s, c.title, x + 0.21, 3.97, w - 0.42, 0.41, 21, C.ink, true);
      txt(ctx, s, c.body, x + 0.21, 4.68, w - 0.42, 0.92, 17, C.muted);
      if (i < n - 1) arrow(x + w + 0.02, 4.43, gap - 0.04);
    });
  } else if (item.layout === 'contexts') {
    const gap = 0.24, w = (12.13 - 2 * gap) / 3;
    item.cards.forEach((c, i) => {
      const x = 0.6 + i * (w + gap);
      box(ctx, s, x, 2.22, w, 2.83);
      box(ctx, s, x, 2.22, w, 0.72, i === 1 ? C.pale : C.mint);
      txt(ctx, s, c.title, x + 0.22, 2.43, w - 0.44, 0.32, 21, C.teal, true);
      txt(ctx, s, c.body, x + 0.22, 3.29, w - 0.44, 1.35, 19, C.ink);
    });
    box(ctx, s, 0.6, 5.29, 12.13, 0.68, C.ink);
    txt(ctx, s, item.callout, 0.84, 5.48, 11.65, 0.29, 18, C.white, true);
  } else if (item.layout === 'hub') {
    box(ctx, s, 0.6, 3.21, 3.06, 1.67);
    txt(ctx, s, '我的持续职责', 0.83, 3.47, 2.6, 0.34, 22, C.ink, true);
    txt(ctx, s, item.request, 0.83, 4.04, 2.6, 0.58, 17, C.muted);
    arrow(3.72, 4.03, 0.62);
    box(ctx, s, 4.42, 3.21, 3.03, 1.67, C.teal);
    txt(ctx, s, 'Dots', 4.65, 3.44, 2.57, 0.4, 29, C.white, true);
    txt(ctx, s, '跟进目标、检查结果\n继续安排下一步', 4.65, 4.04, 2.57, 0.58, 17, C.white);
    item.cards.forEach((c, i) => {
      const y = 2.17 + i * 1.3;
      arrow(7.53, 4.03, 0.68, y + 0.56 - 4.03);
      card(8.39, y, 4.34, 1.12, c.title, c.body);
    });
  } else if (item.layout === 'environments' || item.layout === 'compare') {
    item.cards.forEach((c, i) => card(0.6 + i * 6.18, 2.22, 5.95, 2.65, c.title, c.body, i ? C.blue : C.teal));
    box(ctx, s, 0.6, 5.13, 12.13, 0.85, C.ink);
    txt(ctx, s, item.callout, 0.85, 5.34, 11.63, 0.41, 18, C.white, true);
  } else if (item.layout === 'brief') {
    box(ctx, s, 0.6, 2.16, 5.18, 3.85, C.ink);
    txt(ctx, s, '晨间简报 · 官方功能归纳', 0.84, 2.37, 4.7, 0.31, 19, C.white, true);
    item.brief.forEach((c, i) => {
      const y = 2.97 + i * 0.91;
      box(ctx, s, 0.84, y, 4.7, 0.74, i === 2 ? C.mint : C.white);
      txt(ctx, s, c.title, 1.02, y + 0.09, 4.34, 0.23, 17, C.ink, true);
      txt(ctx, s, c.body, 1.02, y + 0.41, 4.34, 0.21, 13, C.muted);
    });
    item.cards.forEach((c, i) => card(6.03, 2.16 + i * 1.3, 6.7, 1.12, c.title, c.body));
  } else if (item.layout === 'business') {
    item.cards.forEach((c, i) => {
      const x = 0.6 + i % 2 * 6.18, y = 2.2 + Math.floor(i / 2) * 1.99;
      box(ctx, s, x, y, 5.95, 1.75);
      txt(ctx, s, c.title, x + 0.22, y + 0.16, 5.51, 0.34, 22, C.teal, true);
      txt(ctx, s, c.apps, x + 0.22, y + 0.66, 5.51, 0.22, 12, C.muted);
      txt(ctx, s, c.body, x + 0.22, y + 1.04, 5.51, 0.49, 17, C.ink);
    });
  } else if (item.layout === 'roles') {
    const w = 3.88, gap = 0.245;
    item.cards.forEach((c, i) => {
      const x = 0.6 + i * (w + gap);
      box(ctx, s, x, 2.23, w, 3.69);
      s.addShape(ctx.pptx.ShapeType.ellipse, { x: x + 0.24, y: 2.5, w: 0.64, h: 0.64,
        fill: { color: i === 1 ? C.pale : C.mint }, line: { color: C.line } });
      txt(ctx, s, ['研', '写', '业'][i], x + 0.31, 2.62, 0.5, 0.3, 20, C.teal, true, { align: 'center' });
      txt(ctx, s, c.title, x + 0.24, 3.46, w - 0.48, 0.42, 23, C.ink, true);
      txt(ctx, s, c.body, x + 0.24, 4.18, w - 0.48, 1.2, 19, C.muted);
    });
  } else throw new Error(`Unknown product layout ${item.layout}`);
}

module.exports = { renderProductDetail };
