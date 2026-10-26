/** Regenerate with: NODE_PATH=<pptxgenjs install>/node_modules node generate-part-01.cjs */
const fs = require('node:fs');
const path = require('node:path');
const PptxGenJS = require('pptxgenjs');

const out = path.resolve(__dirname, '../images');
fs.mkdirSync(out, { recursive: true });
function appendPart(pptx, options = {}) {
pptx.layout = 'LAYOUT_WIDE';
pptx.author = 'Sky';
pptx.company = 'AI Agent 学习笔记';
pptx.title = '一、什么是 Personal Agent';
pptx.subject = 'Personal Agent 系列（一）：概念、产品与应用场景 · 第一部分';
pptx.lang = 'zh-CN';
pptx.theme = { headFontFace: 'Microsoft YaHei', bodyFontFace: 'Microsoft YaHei', lang: 'zh-CN' };
const C = { bg: 'F6F5F1', ink: '1E3446', muted: '61717B', teal: '078F84', mint: 'DDEFE9', white: 'FFFFFF', line: 'D8DFE1', pale: 'E8EDF6', blue: '456FC7' };
const metrics = [];
const W = 13.333333, H = 7.5;
const definition = 'AI Agent 是以大语言模型为决策核心，在多步循环里对环境采取行动，\n并根据反馈继续迭代，直到目标完成或失败的软件系统。';
const personalDefinition = 'Personal Agent 是以具体个人为服务对象，利用其个人上下文，\n在授权范围内自主组织并执行任务的 AI 智能体。';
const refs = {
  definition: 'content/zh-cn/definition/what-is-ai-agent/index.md',
  paper: 'https://arxiv.org/html/2401.05459v2#S3',
  community: 'https://www.w3.org/2024/01/webevolve-series-events/annual-2025/slides/ai-agent-protocol-cg.pdf',
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
  txt(s, 'PERSONAL AGENT · 总览篇 / 第一部分', 0.6, 0.28, 10, 0.25, 10, C.teal, true);
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

{
  const s = base('先理解 AI Agent', '沿用已有学习笔记的定义，先统一讨论范围。', 1, '依据：什么是 AI Agent · 项目内工作定义（LLM Agent）');
  box(s, 0.6, 2.18, 12.13, 1.2, C.ink);
  txt(s, definition, 0.86, 2.39, 11.61, 0.78, 23, C.white, true);
  const cards = [
    ['01', 'LLM 决策', '由模型选择下一步'],
    ['02', '多步循环', '围绕目标连续执行'],
    ['03', '对环境行动', '使用工具、读写文件'],
    ['04', '根据反馈再决策', '观察结果，调整后续动作'],
  ];
  cards.forEach(([n, title, body], i) => {
    const x = 0.6 + i * 3.09;
    box(s, x, 3.73, 2.86, 1.68);
    txt(s, n, x + 0.2, 3.91, 2.46, 0.25, 12, C.teal, true);
    txt(s, title, x + 0.2, 4.34, 2.46, 0.38, 20, C.ink, true);
    txt(s, body, x + 0.2, 4.91, 2.46, 0.3, 16, C.muted);
  });
  txt(s, '目标 → 决策 → 行动 → 观察 → 再决策 …', 0.8, 5.59, 11.7, 0.34, 22, C.ink, true, { align: 'center' });
  band(s, '多轮聊天不等于多步执行；人工审批可以是执行过程的一部分。', 6.13, 18);
  s.addNotes(`建议讲述 60 秒。\n${definition.replace(/\n/g, '')}\n这里采用已有学习笔记的 LLM Agent 工作定义，不覆盖传统人工智能中所有 Agent。下一步由模型决定，能够多步行动，并依据工具与环境反馈继续调整。只看对话轮数，或者看到一次工具调用，都不足以确认执行循环。自主程度可以不同，用户审批和人工介入不妨碍 Agent 形态成立。\n本地依据：${refs.definition}`);
}

{
  const s = base('用一次调研看清执行循环', '示例目标：调研一个产品，整理成带来源的学习笔记。', 2, '作者构造的任务示例，用于解释执行循环；不是产品实测。');
  const steps = [
    ['确定检索方向', '模型决定需要查什么', '识别目标、范围与缺口'],
    ['搜索与阅读', '调用工具获取材料', '打开原始文档，读取内容'],
    ['核对与补查', '根据反馈调整动作', '来源过期或冲突，再检索'],
    ['整理并检查', '形成文件，检查引用', '必要时回到资料补查'],
  ];
  steps.forEach(([title, body, detail], i) => {
    const x = 0.6 + i * 3.09;
    box(s, x, 2.64, 2.86, 2.05, i === 2 ? C.mint : C.white);
    txt(s, `0${i + 1}`, x + 0.2, 2.84, 2.46, 0.26, 12, C.teal, true);
    txt(s, title, x + 0.2, 3.28, 2.46, 0.4, 21, C.ink, true);
    txt(s, body, x + 0.2, 3.91, 2.46, 0.32, 16, C.ink);
    txt(s, detail, x + 0.2, 4.34, 2.46, 0.24, 13, C.muted);
    if (i < 3) line(s, x + 2.89, 3.66, x + 3.06, 3.66, true, C.teal);
  });
  line(s, 8.20, 4.9, 8.20, 5.18, false, C.teal);
  line(s, 8.20, 5.18, 4.89, 5.18, true, C.teal);
  line(s, 4.89, 5.18, 4.89, 4.9, false, C.teal);
  txt(s, '工具结果决定下一步是否需要补查、修订或结束。', 0.8, 5.49, 11.7, 0.4, 21, C.ink, true, { align: 'center' });
  band(s, '用户交付目标与约束；Agent 根据实际结果组织后续步骤。');
  s.addNotes('建议讲述 40 秒。\n以调研为例，我给出目标，Agent 决定检索方向，调用搜索与阅读工具，观察实际取得的资料。如果发现来源已过期或不同文档互相矛盾，模型需要决定补查哪些来源，然后整理文件并检查引用。图中是一条便于理解的路径，实际执行中每一步都可能依据反馈调整，不是写死的四步工作流。\n这个例子用于解释判断方法，不表示某款产品已经完成此项实测。');
}

{
  const s = base('Personal Agent 中的“Personal”指什么', '在 Agent 执行循环之上，明确个人服务关系与个人上下文。', 3, '依据：Personal LLM Agents（2024，§3）；W3C 社区组用例材料（2025，p.4）。定义为作者归纳。');
  box(s, 0.6, 2.18, 12.13, 1.2, C.ink);
  txt(s, personalDefinition, 0.86, 2.39, 11.61, 0.78, 23, C.white, true);
  const cards = [
    ['为谁工作', '具体个人的目标', '个人生活与个人工作'],
    ['依据什么判断', '个人资料、偏好与约束', '上下文实际影响选择与行动'],
    ['代表谁行动', '按用户委托推进任务', '在授权范围内执行，必要时交回决定'],
  ];
  cards.forEach(([title, body, detail], i) => {
    const x = 0.6 + i * 4.12;
    box(s, x, 3.72, 3.89, 1.83);
    txt(s, title, x + 0.22, 3.97, 3.45, 0.36, 22, C.teal, true);
    txt(s, body, x + 0.22, 4.53, 3.45, 0.34, 18, C.ink, true);
    txt(s, detail, x + 0.22, 5.03, 3.45, 0.28, 13, C.muted);
  });
  band(s, '同一项调研：结合我的方向、已有笔记与写作习惯，决定补什么、怎样整理。', 6.13, 17);
  s.addNotes(`建议讲述 80 秒。\n${personalDefinition.replace(/\n/g, '')}\n这是结合研究论文与社区资料归纳的工作定义，不是统一行业标准。2024 年综述关注与个人数据、设备和服务结合；W3C 社区组材料关注代表具体用户与用户利益，后者不是正式 W3C 标准。\n我理解的个人，首先是围绕具体个人的目标；其次是资料、偏好、工作背景与约束会真正影响判断；最后是根据委托代表用户推进任务。生活与工作都可以纳入。仍用调研示例，如果系统能结合我的方向、已有笔记和写作习惯补充缺口，个人上下文才实际进入工作。\n资料：${refs.paper}\n社区材料：${refs.community}\n阅读日期：2026-10-24；论文为 2024-05-08 修订的 v2，社区材料来自 2025 年活动。`);
}

{
  const s = base('先判断归类，再比较持续服务能力', '后续介绍产品时，沿用同一套问题，分别记录能力与证据。', 4, '本次调研的判断方法 · 官方说明、个人分析与实际验证分别记录。');
  const panels = [
    { x: 0.6, title: '基础归类', color: C.teal, fill: C.mint, items: [
      ['Agent 执行循环', 'LLM 决策、多步行动、反馈后再决策'],
      ['个人服务关系', '围绕具体个人的需求和目标工作'],
      ['个人上下文参与', '资料、偏好与约束影响实际执行'],
    ] },
    { x: 6.78, title: '本系列重点：持续服务', color: C.blue, fill: C.pale, items: [
      ['跨会话上下文', '沿用并修正偏好、约束与已有结论'],
      ['工作延续', '继续任务，或按时间、事件重复执行'],
      ['持续跟进', '根据变化调整后续动作，交回待决事项'],
    ] },
  ];
  panels.forEach(p => {
    box(s, p.x, 2.24, 5.95, 3.62);
    box(s, p.x, 2.24, 5.95, 0.66, p.fill);
    txt(s, p.title, p.x + 0.24, 2.4, 5.47, 0.34, 22, p.color, true);
    p.items.forEach(([title, body], i) => {
      const y = 3.15 + i * 0.85;
      txt(s, `0${i + 1}`, p.x + 0.25, y, 0.48, 0.29, 12, p.color, true);
      txt(s, title, p.x + 0.85, y - 0.03, 4.85, 0.36, 19, C.ink, true);
      txt(s, body, p.x + 0.85, y + 0.39, 4.85, 0.29, 15, C.muted);
    });
  });
  band(s, '记住偏好、定时执行、持续推进目标，需要分别验证。', 6.13, 20);
  s.addNotes('建议讲述 60 秒。\n我先检查是否有 Agent 执行循环，再看它是否围绕具体个人工作，个人上下文是否实际影响执行。在基础归类之上，本系列更关注长期服务：跨会话使用并修正上下文，延续任务或承担重复工作，以及根据变化持续跟进。\n这三类能力不能相互代替；有定时任务，不等于可以自行持续推进一个长期目标。我也不把所有能力齐备作为统一准入门槛，单次委托可以发生在个人代理中。独立电脑、云端常驻和多代理协作属于具体路线。后续按个人模式、团队模式和运行底座分别判断，官方说明与实测结果分别记录。');
}

for (const m of metrics) {
  if (m.x < 0 || m.y < 0 || m.x + m.w > W + 0.01 || m.y + m.h > H + 0.01) {
    throw new Error(`Out of bounds: ${JSON.stringify(m)}`);
  }
}
return { metrics, timings: [60, 40, 80, 60], totalSeconds: 240 };
}
module.exports = { appendPart };
if (require.main === module) {
  const pptx = new PptxGenJS();
  const { metrics } = appendPart(pptx);
pptx.writeFile({ fileName: path.join(out, '01-what-is-personal-agent.pptx') }).then(() => {
  fs.writeFileSync(path.join(__dirname, 'part-01-layout.json'), JSON.stringify({ slides: 4, totalSeconds: 240, metrics }, null, 2) + '\n');
  console.log('Created 4 editable slides, 240 seconds, with speaker notes.');
});
}
