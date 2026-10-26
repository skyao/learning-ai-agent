/** Regenerate with: NODE_PATH=<pptxgenjs install>/node_modules node generate-part-02.cjs */
const fs = require('node:fs');
const path = require('node:path');
const PptxGenJS = require('pptxgenjs');

const out = path.resolve(__dirname, '../images');
fs.mkdirSync(out, { recursive: true });
function appendPart(pptx, options = {}) {
pptx.layout = 'LAYOUT_WIDE';
pptx.author = 'Sky';
pptx.company = 'AI Agent 学习笔记';
pptx.title = '二、Personal Agent 能做什么';
pptx.subject = 'Personal Agent 系列（一）：概念、产品与应用场景 · 第二部分';
pptx.lang = 'zh-CN';
pptx.theme = { headFontFace: 'Microsoft YaHei', bodyFontFace: 'Microsoft YaHei', lang: 'zh-CN' };
const C = { bg: 'F6F5F1', ink: '1E3446', muted: '61717B', teal: '078F84', mint: 'DDEFE9', white: 'FFFFFF', line: 'D8DFE1', pale: 'E8EDF6', blue: '456FC7' };
const metrics = [];
const timings = options.timings || [30, 70, 70, 70];
const W = 13.333333, H = 7.5;
const refs = {
  duet: 'https://support.claude.com/en/articles/17631495-get-started-with-claude-duet',
  gemini: 'https://support.google.com/gemini/answer/17094507?hl=en',
  workbuddy: 'https://www.workbuddy.cn/docs/workbuddy/Overview',
  schedules: 'https://www.workbuddy.cn/docs/workbuddy/From-Beginner-to-Expert-Guide/Function-Description/Automation-Guide',
};
function box(s, x, y, w, h, fill = C.white, border = fill) {
  s.addShape(pptx.ShapeType.rect, { x, y, w, h, fill: { color: fill }, line: { color: border, width: 0.6 } });
}
function txt(s, value, x, y, w, h, size = 20, color = C.ink, bold = false, extra = {}) {
  metrics.push({ slide: s._slideNum, text: value, x, y, w, h, fontSize: size });
  s.addText(value, { x, y, w, h, fontFace: 'Microsoft YaHei', fontSize: size, color, bold,
    margin: 0, valign: 'mid', breakLine: false, lang: 'zh-CN', paraSpaceAfterPt: 0, ...extra });
}
function line(s, x1, y1, x2, y2, arrow = false, color = C.line) {
  s.addShape(pptx.ShapeType.line, { x: x1, y: y1, w: x2 - x1, h: y2 - y1,
    line: { color, width: 1.4, ...(arrow ? { endArrowType: 'triangle' } : {}) } });
}
function base(title, kicker, page, source) {
  const s = pptx.addSlide();
  s.background = { color: C.bg };
  txt(s, 'PERSONAL AGENT · 总览篇 / 第二部分', 0.6, 0.28, 10, 0.25, 10, C.teal, true);
  txt(s, title, 0.6, 0.88, 12.1, 0.58, 30, C.ink, true);
  txt(s, kicker, 0.6, 1.56, 12.1, 0.38, 17, C.muted);
  line(s, 0.6, 6.96, 12.73, 6.96);
  txt(s, source, 0.6, 7.08, 10.9, 0.2, 9, C.muted);
  txt(s, options.globalPageNumbers ? `${s._slideNum} / ${options.totalSlides}` : `${page} / 4`, 11.8, 7.06, 0.9, 0.24, 10, C.muted, false, { align: 'right' });
  return s;
}
function band(s, value, y = 6.13, size = 18) {
  box(s, 0.6, y, 12.13, 0.62, C.mint);
  txt(s, value, 0.82, y + 0.13, 11.69, 0.36, size, C.teal, true);
}
function task(s, value) {
  box(s, 0.6, 2.18, 12.13, 1.2, C.ink);
  txt(s, value, 0.86, 2.39, 11.61, 0.78, 22, C.white, true);
}
function cards(s, items) {
  items.forEach(([title, body, detail], i) => {
    const x = 0.6 + i * 4.12;
    box(s, x, 3.72, 3.89, 1.83);
    txt(s, title, x + 0.22, 3.97, 3.45, 0.36, 22, C.teal, true);
    txt(s, body, x + 0.22, 4.53, 3.45, 0.34, 17, C.ink, true);
    txt(s, detail, x + 0.22, 5.03, 3.45, 0.28, 14, C.muted);
  });
}
function notes(s, n, body, sources = []) {
  s.addNotes(`建议讲述 ${timings[n - 1]} 秒。\n${body}\n\n证据范围：以下委托是作者归纳的场景示例，没有新增产品实测。公开能力以具体产品、版本、地区、套餐、连接服务和授权为准。引用资料为动态文档，均于 2026-10-24 读取；不将读取日期作为发布日期。\n${sources.map(u => '官方来源：' + u).join('\n')}`);
}

{
  const s = base('Personal Agent 能做什么', '从具体委托出发，看它能承担哪些步骤、交付什么结果。', 1, '根据公开产品资料整理的场景框架 · 产品差异在第五部分展开。');
  const items = [
    ['01', '信息与事务', '邮件、日程、个人安排', '交付待办、资料与操作结果'],
    ['02', '调研与交付', '搜集资料、比较、分析', '交付可编辑文档与表格'],
    ['03', '持续跟踪', '主题更新、周报、待办', '交付变更记录与必要通知'],
  ];
  items.forEach(([n, title, body, detail], i) => {
    const x = 0.6 + i * 4.12;
    box(s, x, 2.58, 3.89, 2.75);
    txt(s, n, x + 0.25, 2.84, 3.39, 0.28, 13, C.teal, true);
    txt(s, title, x + 0.25, 3.44, 3.39, 0.44, 26, C.ink, true);
    txt(s, body, x + 0.25, 4.15, 3.39, 0.34, 18, C.ink);
    txt(s, detail, x + 0.25, 4.81, 3.39, 0.3, 15, C.muted);
  });
  band(s, '讲清一项委托：目标、资料、交付结果、时间，以及需要我决定的动作。', 6.13, 18);
  notes(s, 1, '第一部分给出定义后，我更关心哪些工作可以交出去。我把调研中看到的应用归为三类：信息与事务、调研与交付、持续跟踪。三类是帮助理解场景的归纳，不是官方产品分类，也不要求每个产品都具备全部能力。接下来各用一个具体委托说明输入、处理过程、结果和用户参与。', [refs.duet, refs.gemini, refs.workbuddy]);
}

{
  const s = base('信息整理与个人事务处理', '把邮件、日历与相关材料联系起来，形成可以处理的事项。', 2, '公开能力示例：Claude Duet 入门帮助；委托文字为作者构造。');
  task(s, '整理今天需要处理的邮件和会议，优先列出影响本周交付的事项；\n附上原始材料，回复先写草稿，发送前让我确认。');
  cards(s, [
    ['依据的资料', '邮件、日历与工作重点', '限于获准访问的信息'],
    ['交付的结果', '待办、会议材料、回复草稿', '保留原始邮件与资料入口'],
    ['我的参与', '检查遗漏、确认安排与发送', '决定哪些动作可以对外执行'],
  ]);
  txt(s, '生活场景也适用：汇总行程确认信息，结合已有安排整理出行日程。', 0.82, 5.69, 11.69, 0.28, 16, C.muted);
  band(s, '资料汇总、方案准备和对外提交，是不同的交付程度。', 6.13, 20);
  notes(s, 2, '建议从每天的邮件和会议说起。我需要的往往是知道哪些消息要回复、会议前要读什么，以及后续动作怎么落实。这个示例要求 Agent 读取获准访问的邮件和日历，结合本周交付重点筛选，再形成待办、会议材料和回复草稿。\n晨间邮件与日历简报、回复草稿已有 Claude Duet 的官方功能说明，但这里不是对它的实测。我的参与仍包括检查遗漏、确认安排和决定发送。生活中也可以用相同方式整理行程；能否修改日程或预订，取决于具体接入与授权。资料汇总、准备方案、实际对外提交，要按不同的交付程度理解。', [refs.duet, refs.gemini]);
}

{
  const s = base('调研分析与工作成果交付', '围绕一个明确问题，形成可以检查、修订和继续使用的成果。', 3, '公开能力示例：WorkBuddy 产品介绍、Gemini Task 帮助；委托文字为作者构造。');
  task(s, '依据官方资料和现有笔记，比较三个产品的定位、开放条件与典型场景；\n交付可编辑比较表，附来源和日期，资料不足的地方单独列出。');
  cards(s, [
    ['收集并核对资料', '现有笔记与指定官方来源', '补充缺口，核对日期与冲突'],
    ['组织比较与分析', '使用一致的比较条件', '区分事实、推断和待核实项'],
    ['形成可编辑成果', '笔记、表格、PPT 或小工具', '便于继续修改与复用'],
  ]);
  txt(s, '我的验收：来源可追溯、条件一致、事实与推断分开、文件便于继续修改。', 0.82, 5.69, 11.69, 0.28, 16, C.muted);
  band(s, '生成了文件，不等于完成了可靠的分析；关键事实与判断仍需检查。', 6.13, 18);
  notes(s, 3, '与我的工作更相关的是调研和成果交付。我希望委托的不只是检索，还包括筛选来源、核对差异、组织分析，并按要求更新文档和表格。这里以三个产品比较为例，既要使用已有资料，也要补充缺口、核对来源与日期；缺少依据的部分单列，不补猜。\n输出可以是笔记、分析表、PPT，也可以是展示结果的小工具。WorkBuddy 官方介绍给出了文件处理、自主执行和可验收成果的例子，Gemini Task 文档也说明带引用的调研与文件交付。具体效果还需要实际验收。我会检查来源、条件、事实与推断，以及文件是否可继续修改，不能把生成文件直接当作可靠分析已经完成。', [refs.workbuddy, refs.gemini]);
}

{
  const s = base('持续跟踪与周期性工作', '将一项调研延伸为有时间范围、交付要求和用户参与的持续职责。', 4, '依据：Gemini Task 帮助、WorkBuddy 定时任务；委托文字为作者构造。');
  task(s, '未来四周，每个工作日检查指定产品的官方更新并维护变更表；\n每周五汇总，开放条件变化时单独通知，笔记合入前让我确认。');
  const panels = [
    { x: 0.6, title: '职责怎样安排', fill: C.mint, color: C.teal, items: [
      ['关注范围', '指定产品与来源，持续四周'],
      ['何时执行', '工作日检查，每周五汇总'],
      ['怎样交付', '维护变更表，重要变化单独通知'],
    ] },
    { x: 6.78, title: '运行与验收', fill: C.pale, color: C.blue, items: [
      ['运行条件', '确认本机客户端或云端运行路径'],
      ['检查结果', '是否执行、判断是否正确、是否交付'],
      ['调整与结束', '改变范围、暂停或结束职责'],
    ] },
  ];
  panels.forEach(p => {
    box(s, p.x, 3.65, 5.95, 2.25);
    box(s, p.x, 3.65, 5.95, 0.55, p.fill);
    txt(s, p.title, p.x + 0.22, 3.77, 5.51, 0.3, 20, p.color, true);
    p.items.forEach(([title, body], i) => {
      const y = 4.45 + i * 0.49;
      txt(s, title, p.x + 0.22, y, 1.26, 0.3, 16, C.ink, true);
      txt(s, body, p.x + 1.6, y, 4.1, 0.3, 15, C.muted);
    });
  });
  band(s, '周期执行与持续推进目标，需要分别验证。', 6.13, 20);
  notes(s, 4, '还有些工作需要重复进行，并在变化发生后接着处理。我可以把前面的调研延伸成四周职责：指定对象与来源，工作日检查、周五汇总，开放条件变化时单独通知，准备笔记草稿但合入前交给我确认。相比只说每天发新闻，这明确了范围、交付和通知条件。\nGemini Task 文档列出持续任务、信息跟踪和文件交付，但具体触发与动作仍要按产品确认。运行环境同样重要。WorkBuddy 官方文档区分本地、项目与云端任务：本地由本机客户端执行，云端在沙箱执行，无需电脑在线，不能把一种路径的条件套到另一种。\n我关注每次是否执行、变化是否判断正确、结果是否交付，以及如何调整和结束职责。周期执行不自动等于持续推进目标，后台工作仍受资源、权限和用量限制。表达委托时，我会交代目标、资料、成果、时间和需要我决定的动作，后面也据此比较产品的侧重。', [refs.gemini, refs.schedules]);
}

for (const m of metrics) {
  if (m.x < 0 || m.y < 0 || m.x + m.w > W + 0.01 || m.y + m.h > H + 0.01) {
    throw new Error(`Out of bounds: ${JSON.stringify(m)}`);
  }
}
const totalSeconds = timings.reduce((sum, n) => sum + n, 0);
if (timings.length !== 4 || timings.some(n => !Number.isFinite(n) || n <= 0)) throw new Error('Timing mismatch');
return { metrics, timings, totalSeconds };
}
module.exports = { appendPart };
if (require.main === module) {
  const pptx = new PptxGenJS();
  const { metrics, timings, totalSeconds } = appendPart(pptx);
pptx.writeFile({ fileName: path.join(out, '02-what-personal-agents-can-do.pptx') }).then(() => {
  fs.writeFileSync(path.join(__dirname, 'part-02-layout.json'), JSON.stringify({ slides: 4, totalSeconds, timings, metrics }, null, 2) + '\n');
  console.log(`Created 4 editable slides, ${totalSeconds} seconds, with speaker notes.`);
});
}
