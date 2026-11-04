/** Generate all seven section decks and the complete native PowerPoint presentation. */
const fs = require('node:fs');
const path = require('node:path');
const PptxGenJS = require('pptxgenjs');
const { appendPart: append01 } = require('./generate-part-01.cjs');
const { appendPart: append02 } = require('./generate-part-02.cjs');
const { renderProductDetail } = require('./render-product-details.cjs');
const data = JSON.parse(fs.readFileSync(path.join(__dirname, 'introduction-slides.json'), 'utf8'));
const out = path.resolve(__dirname, '../images');
fs.mkdirSync(out, { recursive: true });
const C = { bg: 'F6F5F1', ink: '1E3446', muted: '61717B', teal: '078F84', mint: 'DDEFE9', white: 'FFFFFF', line: 'D8DFE1', pale: 'E8EDF6', blue: '456FC7' };
const firstTitles = ['先理解 AI Agent', '用一次调研看清执行循环', 'Personal Agent 中的“Personal”指什么', '先判断归类，再比较持续服务能力'];
const secondTitles = ['Personal Agent 能做什么', '信息整理与个人事务处理', '调研分析与工作成果交付', '持续跟踪与周期性工作'];
const totalMinutes = data.totalSeconds / 60;
const navigationSeconds = data.navigation.seconds;
const sectionSeconds = [data.part01Seconds, navigationSeconds + data.part02Timings.reduce((a, b) => a + b, 0) + data.part02Extra.reduce((a, s) => a + s.seconds, 0), ...data.parts.map(p => p.seconds)];
const demoMinutes = data.parts.find(p => p.part === 6).seconds / 60;
const discussionMinutes = data.parts.find(p => p.part === 7).slides.at(-1).seconds / 60;
const introductionMinutes = sectionSeconds.slice(0, 4).reduce((a, b) => a + b, 0) / 60;
const productMinutes = data.parts.find(p => p.part === 5).seconds / 60;

function create(title, specs) {
  const pptx = new PptxGenJS();
  pptx.layout = 'LAYOUT_WIDE';
  pptx.lang = 'zh-CN';
  pptx.author = 'Sky';
  pptx.company = 'AI Agent 学习笔记';
  pptx.title = title;
  pptx.subject = data.title;
  pptx.theme = { headFontFace: 'Microsoft YaHei', bodyFontFace: 'Microsoft YaHei', lang: 'zh-CN' };
  const records = [], metrics = [];
  const add = pptx.addSlide.bind(pptx);
  pptx.addSlide = (...args) => {
    const s = add(...args);
    const spec = specs[records.length];
    if (!spec) throw new Error('Missing slide specification');
    const record = { number: records.length + 1, title: spec.title, part: spec.part, kind: spec.kind || 'content', seconds: spec.seconds,
      ...(spec.id ? { id: spec.id } : {}),
      ...(spec.product ? { product: spec.product, focus: spec.focus } : {}), notes: '' };
    records.push(record);
    const addNotes = s.addNotes.bind(s);
    s.addNotes = value => {
      const body = String(value).replace(/^建议讲述 \d+ 秒。\n?/, '');
      record.notes = `建议讲述 ${spec.seconds} 秒。\n${body}`;
      return addNotes(record.notes);
    };
    return s;
  };
  return { pptx, records, metrics, specs };
}
function box(ctx, s, x, y, w, h, fill = C.white) {
  s.addShape(ctx.pptx.ShapeType.rect, { x, y, w, h, fill: { color: fill }, line: { color: fill, width: 0.6 } });
}
function txt(ctx, s, value, x, y, w, h, size = 20, color = C.ink, bold = false, extra = {}) {
  ctx.metrics.push({ slide: s._slideNum, text: String(value), x, y, w, h, fontSize: size });
  s.addText(value, { x, y, w, h, fontFace: 'Microsoft YaHei', fontSize: size, color, bold, margin: 0,
    valign: 'mid', paraSpaceAfterPt: 0, lang: 'zh-CN', ...extra });
}
function band(ctx, s, value) {
  box(ctx, s, 0.6, 6.23, 12.13, 0.58, C.mint);
  txt(ctx, s, value, 0.81, 6.36, 11.71, 0.3, 17, C.teal, true);
}
function base(ctx, item, part, total) {
  const s = ctx.pptx.addSlide();
  s.background = { color: C.bg };
  txt(ctx, s, `PERSONAL AGENT · 总览篇 / 第${part}部分`, 0.6, 0.28, 10.8, 0.25, 10, C.teal, true);
  txt(ctx, s, item.title, 0.6, 0.88, 12.13, 0.6, 29, C.ink, true);
  txt(ctx, s, item.subtitle, 0.6, 1.56, 12.13, 0.43, 17, C.muted);
  s.addShape(ctx.pptx.ShapeType.line, { x: 0.6, y: 6.99, w: 12.13, h: 0, line: { color: C.line, width: 1 } });
  const names = item.refs.slice(0, 2).map(k => data.references[k].name).join(' · ')
    + (item.refs.length > 2 ? ` 等 ${item.refs.length} 项；完整来源见讲者备注` : '');
  txt(ctx, s, item.footer || names || '作者学习归纳 / 模拟演示脚本 · 不是产品实测结论', 0.6, 7.09, 10.9, 0.2, 9, C.muted);
  txt(ctx, s, `${s._slideNum} / ${total}`, 11.9, 7.07, 0.8, 0.24, 10, C.muted, false, { align: 'right' });
  return s;
}
function navigationSpec(part) {
  const section = data.navigation.sections.find(s => s.part === part);
  if (!section) throw new Error(`Missing navigation section ${part}`);
  return { title: `内容导航｜${section.title}`, part, kind: 'navigation', seconds: navigationSeconds };
}
function navigation(ctx, part, total) {
  const current = data.navigation.sections.find(s => s.part === part);
  const s = base(ctx, { title: '内容导航', subtitle: `共 ${data.navigation.sections.length} 个部分 · 当前进入第 ${part} 部分`, refs: [], footer: '总览篇 · 七个部分的内容导航' }, part, total);
  data.navigation.sections.forEach((section, i) => {
    const active = section.part === part;
    const y = 2.2 + i * 0.56;
    box(ctx, s, 0.6, y, 7.93, 0.48, active ? C.teal : C.white);
    txt(ctx, s, String(section.part).padStart(2, '0'), 0.83, y + 0.09, 0.52, 0.27, 14, active ? C.white : C.muted, active);
    txt(ctx, s, section.title, 1.57, y + 0.07, 6.67, 0.31, 19, active ? C.white : C.muted, active);
  });
  box(ctx, s, 8.89, 2.2, 3.84, 3.84, C.ink);
  txt(ctx, s, String(part).padStart(2, '0'), 9.19, 2.47, 3.24, 0.82, 52, '9ADBD0', true);
  txt(ctx, s, `第 ${part} 部分 / 共 ${data.navigation.sections.length} 部分`, 9.2, 3.46, 3.22, 0.28, 13, 'C4D5DA');
  txt(ctx, s, current.shortTitle, 9.2, 4.06, 3.22, 0.92, 25, C.white, true);
  txt(ctx, s, current.purpose, 9.2, 5.15, 3.22, 0.62, 15, 'C4D5DA');
  band(ctx, s, '七个部分围绕一条主线：从对话问答到持续委托。');
  s.addNotes(`现在进入第 ${part} 部分：${current.title}。${current.purpose}\n本页列出全部七个部分，深青色高亮当前部分。用一句话衔接即可，导航时间已包含在本节原有时间内。`);
}
function render(ctx, item, part, total) {
  const s = base(ctx, item, part, total);
  if (item.kind === 'product-detail' || item.kind === 'product-comparison') {
    renderProductDetail(ctx, s, item, { box, txt, C, out });
  } else if (item.kind === 'roster' || item.kind === 'capability-matrix') {
    const cols = item.columnWidths || [2.05, 1.55, 1.85, 3.22, 3.46];
    box(ctx, s, 0.6, 2.16, 12.13, 0.43, C.ink);
    let x = 0.6;
    item.columns.forEach((name, i) => {
      txt(ctx, s, name, x + 0.12, 2.25, cols[i] - 0.24, 0.25, 14, C.white, true);
      x += cols[i];
    });
    item.rows.forEach((row, r) => {
      const y = 2.59 + r * 0.49;
      box(ctx, s, 0.6, y, 12.13, 0.49, r % 2 === 0 ? C.white : 'EAEDEB');
      let x = 0.6;
      row.forEach((value, c) => {
        txt(ctx, s, value, x + 0.12, y + 0.035, cols[c] - 0.24, 0.42,
          13.5, c === 0 ? C.ink : C.muted, c === 0);
        x += cols[c];
      });
    });
    txt(ctx, s, item.ribbon, 0.6, 6.65, 12.13, 0.23, 11, C.teal);
  } else if (item.kind === 'product-profile') {
    box(ctx, s, 0.6, 2.13, 12.13, 0.43, C.mint);
    txt(ctx, s, `厂商：${item.vendor}　｜　推出：${item.launch}`, 0.8, 2.23, 11.73, 0.24, 14, C.teal, true);
    box(ctx, s, 0.6, 2.79, 5.14, 3.21);
    const img = item.image;
    const ratio = Math.min(4.74 / img.size[0], 2.55 / img.size[1]);
    const w = img.size[0] * ratio, h = img.size[1] * ratio;
    s.addImage({ path: path.join(out, img.path), x: 0.8 + (4.74 - w) / 2, y: 2.94 + (2.55 - h) / 2, w, h,
      altText: img.caption });
    txt(ctx, s, img.caption, 0.8, 5.62, 4.74, 0.29, 10, C.muted);
    [
      ['使用入口', item.entry, 2.79],
      ['生态连接', item.ecosystem, 3.81],
      ['业务侧重', item.business, 4.83],
    ].forEach(([label, value, y]) => {
      txt(ctx, s, label, 6.12, y, 6.39, 0.22, 12, C.teal, true);
      txt(ctx, s, value, 6.12, y + 0.32, 6.39, 0.68, 19, C.ink);
    });
  } else if (item.kind === 'product-reference') {
    item.cards.forEach((card, i) => {
      const x = 0.6 + i % 2 * 6.18;
      const y = 2.19 + Math.floor(i / 2) * 2.0;
      box(ctx, s, x, y, 5.95, 1.77);
      const icon = card.icon;
      s.addShape(ctx.pptx.ShapeType.roundRect, { x: x + 0.2, y: y + 0.08, w: 0.5, h: 0.5,
        radius: 0.08, rectRadius: 0.08, fill: { color: C.bg }, line: { color: C.bg } });
      if (icon.crop) {
        // Keep the complete official image and crop its logo region natively in PowerPoint.
        const scale = 0.44 / icon.crop.w;
        s.addImage({ path: path.join(out, icon.path), x: x + 0.23, y: y + 0.11,
          w: icon.size[0] * scale, h: icon.size[1] * scale, altText: icon.caption,
          sizing: { type: 'crop', x: icon.crop.x * scale, y: icon.crop.y * scale,
            w: icon.crop.w * scale, h: icon.crop.h * scale } });
      } else {
        const scale = Math.min(0.44 / icon.size[0], 0.44 / icon.size[1]);
        const w = icon.size[0] * scale, h = icon.size[1] * scale;
        s.addImage({ path: path.join(out, icon.path), x: x + 0.23 + (0.44 - w) / 2,
          y: y + 0.11 + (0.44 - h) / 2, w, h, altText: icon.caption });
      }
      txt(ctx, s, card.product, x + 0.92, y + 0.16, 4.83, 0.33, 21, C.teal, true);
      txt(ctx, s, `${card.vendor} · ${card.launch}`, x + 0.2, y + 0.64, 5.55, 0.25, 12, C.muted);
      txt(ctx, s, card.ecosystem, x + 0.2, y + 1.01, 5.55, 0.25, 15, C.ink);
      txt(ctx, s, card.business, x + 0.2, y + 1.36, 5.55, 0.25, 14, C.muted);
    });
  } else if (item.kind === 'table') {
    const n = item.rows.length;
    const dense = n >= 7;
    const cols = [2.5, 4.0, 5.63];
    const rowH = dense ? 0.43 : Math.min(0.93, 3.38 / n);
    box(ctx, s, 0.6, 2.22, 12.13, 0.43, C.ink);
    let x = 0.6;
    item.columns.forEach((name, i) => { txt(ctx, s, name, x + 0.13, 2.31, cols[i] - 0.26, 0.24, 14, C.white, true); x += cols[i]; });
    item.rows.forEach((row, r) => {
      const y = 2.65 + r * rowH;
      box(ctx, s, 0.6, y, 12.13, rowH, r % 2 === 0 ? C.white : 'EAEDEB');
      let x = 0.6;
      row.forEach((value, c) => {
        txt(ctx, s, value, x + 0.13, y + 0.04, cols[c] - 0.26, rowH - 0.08,
          dense ? (c === 0 ? 15 : 14) : 17, c === 0 ? C.ink : C.muted, c === 0);
        x += cols[c];
      });
    });
  } else if (item.kind === 'panels') {
    const n = item.panels.length;
    const gap = 0.23;
    const w = (12.13 - gap * (n - 1)) / n;
    item.panels.forEach((p, i) => {
      const x = 0.6 + i * (w + gap);
      box(ctx, s, x, 2.37, w, 3.51);
      box(ctx, s, x, 2.37, w, 0.67, i % 2 ? C.pale : C.mint);
      txt(ctx, s, p.title, x + 0.23, 2.53, w - 0.46, 0.35, n === 3 ? 21 : 23, i % 2 ? C.blue : C.teal, true);
      p.lines.forEach((value, j) => {
        txt(ctx, s, `0${j + 1}`, x + 0.23, 3.36 + j * 0.78, 0.42, 0.28, 12, C.teal, true);
        txt(ctx, s, value, x + 0.8, 3.28 + j * 0.78, w - 1.04, 0.67, n === 3 ? 18 : 20, C.ink);
      });
    });
  } else if (item.kind === 'scenario') {
    box(ctx, s, 0.6, 2.14, 12.13, 1.08, C.pale);
    txt(ctx, s, '场景委托 · 作者构造，未实测', 0.82, 2.25, 11.69, 0.2, 10, C.blue, true);
    txt(ctx, s, item.request, 0.82, 2.52, 11.69, 0.57, 17, C.ink, true);
    const gap = 0.24;
    const w = (12.13 - gap * (item.stages.length - 1)) / item.stages.length;
    item.stages.forEach((stage, i) => {
      const x = 0.6 + i * (w + gap);
      box(ctx, s, x, 3.5, w, 2.4);
      txt(ctx, s, `0${i + 1} · ${stage.title}`, x + 0.18, 3.72, w - 0.36, 0.38, 20, C.teal, true);
      stage.lines.forEach((value, j) => txt(ctx, s, value, x + 0.18, 4.27 + j * 0.76, w - 0.36, 0.61, 17, C.ink));
      if (i < item.stages.length - 1) s.addShape(ctx.pptx.ShapeType.line, { x: x + w + 0.02, y: 4.69, w: gap - 0.04, h: 0,
        line: { color: C.teal, width: 1.4, endArrowType: 'triangle' } });
    });
  } else if (item.kind === 'timeline') {
    const n = item.nodes.length, gap = 0.24;
    const w = (12.13 - gap * (n - 1)) / n;
    item.nodes.forEach((p, i) => {
      const x = 0.6 + i * (w + gap);
      box(ctx, s, x, 2.35, w, 3.55);
      txt(ctx, s, p.year, x + 0.18, 2.57, w - 0.36, 0.48, 29, C.teal, true);
      txt(ctx, s, p.title, x + 0.18, 3.25, w - 0.36, 0.66, 18, C.ink, true);
      p.lines.forEach((value, j) => txt(ctx, s, value, x + 0.18, 4.12 + j * 0.78, w - 0.36, 0.65, 16, C.muted));
    });
  } else if (item.kind === 'flow') {
    const n = item.nodes.length, gap = 0.24;
    const w = (12.13 - gap * (n - 1)) / n;
    item.nodes.forEach((p, i) => {
      const x = 0.6 + i * (w + gap);
      box(ctx, s, x, 2.72, w, 2.6);
      txt(ctx, s, `0${i + 1}`, x + 0.22, 2.95, w - 0.44, 0.25, 12, C.teal, true);
      txt(ctx, s, p.title, x + 0.22, 3.5, w - 0.44, 0.65, n === 4 ? 21 : 19, C.ink, true);
      p.lines.forEach((value, j) => txt(ctx, s, value, x + 0.22, 4.39 + j * 0.47, w - 0.44, 0.3, n === 4 ? 16 : 18, C.muted));
      if (i < n - 1) s.addShape(ctx.pptx.ShapeType.line, { x: x + w + 0.02, y: 3.85, w: gap - 0.04, h: 0, line: { color: C.teal, width: 1.4, endArrowType: 'triangle' } });
    });
  } else throw new Error(`Unknown kind: ${item.kind}`);
  if (!['roster', 'capability-matrix'].includes(item.kind)) band(ctx, s, item.ribbon);
  const sources = item.refs.map(k => {
    const ref = data.references[k];
    return `${ref.name}：${ref.url}${ref.originalDate ? `\n原始日期／版本条件：${ref.originalDate}；阅读：${ref.readDate}。` : ''}`;
  }).join('\n');
  s.addNotes(`${item.notes}\n\n资料：\n${sources || '作者归纳或已准备的模拟演示材料。'}\n整理／读取日期：${item.readDate || data.defaultReadDate}。原始日期按来源标注；动态帮助页不以读取日期代替发布日期。公开能力与实际验证分开，预览、套餐、地区、设备及授权条件分别保留。`);
}
function cover(ctx) {
  const s = ctx.pptx.addSlide();
  s.background = { color: C.ink };
  txt(ctx, s, 'AI AGENT 学习笔记', 0.75, 0.55, 11.7, 0.3, 14, '9ADBD0', true);
  txt(ctx, s, '深入 Personal Agent 系列之总览篇', 0.75, 1.58, 11.7, 0.95, 36, C.white, true);
  txt(ctx, s, '从对话问答到持续委托', 0.75, 2.76, 11.7, 0.65, 32, C.white, true);
  txt(ctx, s, '什么是个人代理，能委托什么工作，主流产品各自侧重什么。', 0.77, 3.8, 11.7, 0.55, 21, 'C4D5DA');
  ['认识概念', '观察产品', '体验委托'].forEach((t, i) => {
    box(ctx, s, 0.77 + i * 4.1, 5.14, 3.77, 0.74, '254454');
    txt(ctx, s, t, 0.99 + i * 4.1, 5.35, 3.33, 0.32, 21, 'BFEAE0', true);
  });
  txt(ctx, s, `约 ${totalMinutes} 分钟 · 产品概览 ${productMinutes} 分钟 · 演示 ${demoMinutes} 分钟 · 排版更新：${data.date}`, 0.77, 6.63, 11.7, 0.3, 13, 'B9CBD0');
  s.addNotes(`我最近围绕 Personal Agent 做了一轮产品调研。这次先建立共同认识：它是什么、可以承担哪些工作，与 OpenClaw 和 Harness 的关系是什么，再看发展脉络。第五部分保留第一批八款各一页的厂商、推出时间、生态和业务侧重，再为 Muse、Dots、Duet 和 Grok Bot 各增加四页功能介绍及一页比较。第二批八款继续分两页简要介绍。原来的产品场景材料另作附录保留。这里区分公开资料、我的理解与实测证据，不展开技术实现。完整版本约 ${totalMinutes} 分钟：前四部分 ${introductionMinutes} 分钟，产品概览与重点产品 ${productMinutes} 分钟，演示 ${demoMinutes} 分钟，总结 2 分钟、交流 ${discussionMinutes} 分钟。时间仅供后续选页，不据此删除内容。原有资料阅读于 2026-10-24，演进及四款资料于 ${data.researchDate} 补充；名单和用途条件于 2026-10-26 回查；概览图片获取于 2026-10-27；本轮 ${data.date} 增补产品功能、官方展示图与功能示意，没有新增账号实测。`);
}
function validate(ctx) {
  if (ctx.records.length !== ctx.specs.length) throw new Error('Slide count mismatch');
  for (const m of ctx.metrics) {
    if (m.x < 0 || m.y < 0 || m.x + m.w > 13.35 || m.y + m.h > 7.51) throw new Error(`Out of bounds: ${JSON.stringify(m)}`);
  }
}
async function write(ctx, name) {
  validate(ctx);
  await ctx.pptx.writeFile({ fileName: path.join(out, name + '.pptx') });
  const totalSeconds = ctx.records.reduce((sum, x) => sum + x.seconds, 0);
  const layout = JSON.stringify({ slides: ctx.records.length, totalSeconds, timings: ctx.records.map(r => r.seconds), metrics: ctx.metrics }, null, 2) + '\n';
  fs.writeFileSync(path.join(__dirname, name + '-layout.json'), layout);
  if (name === '01-what-is-personal-agent') fs.writeFileSync(path.join(__dirname, 'part-01-layout.json'), layout);
  if (name === '02-what-personal-agents-can-do') fs.writeFileSync(path.join(__dirname, 'part-02-layout.json'), layout);
  console.log(`${name}: ${ctx.records.length} slides, ${totalSeconds} seconds`);
}
async function main() {
  if (data.coverSeconds + navigationSeconds + data.part01CombinedTimings.reduce((a, b) => a + b, 0) + data.part01Roster.reduce((a, s) => a + s.seconds, 0) !== data.part01Seconds) throw new Error('Part 1 timing mismatch');
  if (sectionSeconds.reduce((a, b) => a + b, 0) !== data.totalSeconds) throw new Error('Section timing mismatch');
  fs.copyFileSync(path.join(__dirname, 'evolution-research-2026-10-25.md'), path.join(out, '04-evolution-research.txt'));
  fs.copyFileSync(path.join(__dirname, 'product-scenarios-references-2026-10-25.md'), path.join(out, '05-product-scenarios-references.txt'));
  fs.copyFileSync(path.join(__dirname, 'agent-roster-2026-10-26.md'), path.join(out, '01-agent-roster-references.txt'));
  fs.copyFileSync(path.join(__dirname, 'capabilities-research-2026-10-26.md'), path.join(out, '02-capabilities-research.txt'));
  fs.copyFileSync(path.join(__dirname, 'product-overview-references-2026-10-27.md'), path.join(out, '05-product-overview-references.txt'));
  fs.copyFileSync(path.join(__dirname, 'product-features-references-2026-11-02.md'), path.join(out, '05-product-feature-references.txt'));
  const firstSpecs = [
    { title: data.title, part: 1, kind: 'cover', seconds: data.coverSeconds }, navigationSpec(1),
    ...firstTitles.map((title, i) => ({ title, part: 1, seconds: data.part01CombinedTimings[i] })),
    ...data.part01Roster.map(s => ({ ...s, part: 1 })),
  ];
  const secondSpecs = [navigationSpec(2), ...secondTitles.map((title, i) => ({ title, part: 2, seconds: data.part02Timings[i] })), ...data.part02Extra.map(s => ({ ...s, part: 2 }))];
  const first = create(data.navigation.sections[0].title, firstSpecs);
  cover(first);
  navigation(first, 1, firstSpecs.length);
  first.metrics.push(...append01(first.pptx, { globalPageNumbers: true, totalSlides: firstSpecs.length }).metrics);
  for (const item of data.part01Roster) render(first, item, 1, firstSpecs.length);
  await write(first, '01-what-is-personal-agent');
  const second = create(data.navigation.sections[1].title, secondSpecs);
  navigation(second, 2, secondSpecs.length);
  second.metrics.push(...append02(second.pptx, { globalPageNumbers: true, totalSlides: secondSpecs.length, timings: data.part02Timings }).metrics);
  for (const item of data.part02Extra) render(second, item, 2, secondSpecs.length);
  await write(second, '02-what-personal-agents-can-do');
  for (const part of data.parts) {
    if (navigationSeconds + part.slides.reduce((sum, s) => sum + s.seconds, 0) !== part.seconds) throw new Error(`Part ${part.part} timing mismatch`);
    const ctx = create(part.title, [navigationSpec(part.part), ...part.slides.map(s => ({ ...s, part: part.part }))]);
    navigation(ctx, part.part, ctx.specs.length);
    for (const item of part.slides) render(ctx, item, part.part, ctx.specs.length);
    await write(ctx, part.name);
  }
  const specs = [
    ...firstSpecs, ...secondSpecs,
    ...data.parts.flatMap(p => [navigationSpec(p.part), ...p.slides.map(s => ({ ...s, part: p.part }))]),
  ];
  const ctx = create(data.title, specs);
  cover(ctx);
  navigation(ctx, 1, specs.length);
  const m1 = append01(ctx.pptx, { globalPageNumbers: true, totalSlides: specs.length });
  for (const item of data.part01Roster) render(ctx, item, 1, specs.length);
  navigation(ctx, 2, specs.length);
  const m2 = append02(ctx.pptx, { globalPageNumbers: true, totalSlides: specs.length, timings: data.part02Timings });
  for (const item of data.part02Extra) render(ctx, item, 2, specs.length);
  ctx.metrics.push(...m1.metrics, ...m2.metrics);
  for (const part of data.parts) {
    navigation(ctx, part.part, specs.length);
    for (const item of part.slides) render(ctx, item, part.part, specs.length);
  }
  ctx.pptx.title = data.title;
  ctx.pptx.subject = `Personal Agent 系列（一）· 总览篇，${totalMinutes} 分钟完整修订稿`;
  if (specs.reduce((sum, x) => sum + x.seconds, 0) !== data.totalSeconds) throw new Error('Full timing mismatch');
  await write(ctx, '00-personal-agent-introduction');
  const stamp = t => `${String(Math.floor(t / 60)).padStart(2, '0')}:${String(t % 60).padStart(2, '0')}`;
  const lines = [data.title, `完整修订稿 · ${data.date}`, `总时长 ${totalMinutes} 分钟，含演示 ${demoMinutes} 分钟、交流 ${discussionMinutes} 分钟。`, 'Muse 演示为待执行脚本；人工样例不是实际输出。', ''];
  let elapsed = 0;
  for (const r of ctx.records) {
    r.start = elapsed;
    elapsed += r.seconds;
    r.end = elapsed;
    lines.push(`${String(r.number).padStart(2, '0')}｜${r.title}`, `时间 ${stamp(r.start)}–${stamp(r.end)}；${r.seconds} 秒。`, r.notes, '');
  }
  fs.writeFileSync(path.join(out, '00-introduction-speaker-notes.txt'), lines.join('\n'));
  fs.writeFileSync(path.join(__dirname, 'introduction-manifest.json'), JSON.stringify({ date: data.date, slides: specs.length, totalSeconds: elapsed,
    sections: sectionSeconds, navigationPages: ctx.records.filter(r => r.kind === 'navigation').map(r => ({ part: r.part, number: r.number })),
    overviewProducts: data.overviewProducts, detailProducts: data.detailProducts, firstBatch: ['Muse','Dots','Cue','Gemini Spark / Task','Grok Bot','OpenClaw','WorkBuddy','Claude Duet'],
    secondBatch: ['Hermes Agent','Copilot Autopilot','Poke','Lindy','Kimi Claw','Personal Computer','DeepSeek Harness','Claude Cowork'],
    records: ctx.records }, null, 2) + '\n');
}
main().catch(e => { console.error(e); process.exitCode = 1; });
