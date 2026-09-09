---
title: "2025年"
linkTitle: "2025年"
weight: 60
date: 2026-09-09
description: >
  2025：运行时产品。Agent 从框架库变成可直接用的运行时；MCP 被追认，A2A 出现。
---

**一句话主线：** 2025 年，Agent 从「用 LangChain 自己拼循环」变成「装一个运行时就能委派」——Claude Code、云端 Codex、ChatGPT 里的 Deep Research / Agent 模式。推理模型让规划部分内化；MCP 被 OpenAI、Google 等追认成工具层事实标准；A2A 把「Agent 之间怎么说话」重新提出来。框架还在，但主战场换成了可直接用的执行环境。

上一页：[2024](../2024/)。协议深挖：[MCP](/protocal/mcp/)、[A2A](/protocal/a2a/)、[Skills](/protocal/skills/)。

## 和 LLM 的关系

2024 的 o1 是预告。2025 年决策核的变化是：**思考被训练进模型，运行时把模型和电脑接在一起。**

- **推理模型成为 Agent 的默认引擎之一。** o3 系（2025 年初进入产品）、Claude 3.7 / Claude 4（2 月与 5 月）、以及年中以后的 GPT-5 一类「快模型 + 思考模型 + 路由」。规划、回退、写测试不再完全靠提示词里的 ReAct 明文。代价是延迟和账单。
- **专用 Agent 模型出现。** OpenAI 的 Codex 云端 Agent 用为软件工程优化的 codex-1（o3 变体）；Anthropic 把最强编码核和 Claude Code 绑在一起发。应用层开始反过来说：我们要的不是通用聊天模型，是会在沙箱里收工的模型。
- **原生 agentic 能力变强。** 更稳的长链工具调用、更好的代码库定位、Computer Use 从 2024 的笨拙 API 长成 Operator / ChatGPT agent。视觉 + 推理终于够用来点网页，尽管可靠性仍远低于编码主线。
- **上下文与记忆仍是硬顶。** 窗口继续涨，但「跨会话、属于团队而非属于聊天框」的记忆没有被模型层单独解决。那是运行时和产品要管的事，2026 的频道记忆才把它做成组织功能。

## 里程碑

| 时间 | 事件 | 类型 | 为什么记 |
| --- | --- | --- | --- |
| 2025-01 | [OpenAI Operator](https://openai.com/index/introducing-operator/)（CUA 模型） | 工程化 | 2024 Computer Use 的产品化：Agent 拥有自己的浏览器，点击真实 GUI。7 月并入 ChatGPT agent。分数和安全边界仍是研究预览级 |
| 2025-02 | [Deep Research](https://openai.com/index/introducing-deep-research/) | 工程化 | 多步检索→综合→带引用成稿。研究型 Agent 成为可点击的产品，而不只是网页浏览 demo |
| 2025-02-24 | [Claude Code](https://www.anthropic.com/news/claude-3-7-sonnet) 研究预览（随 3.7 Sonnet） | 工程化 / 范式更替 | 终端里的代码优先运行时：不是库，是你用来干活的 Agent。循环、沙箱、工具由厂商托管。5-22 随 Claude 4 **正式 GA** |
| 2025-03 | Manus 等通用自主 Agent 爆红 | 引爆 | 把「云端虚拟机里什么都干」送进大众视野（尤其中文互联网）。热度类似 2023 的 AutoGPT，可靠性同样要和宣传分开记 |
| 2025-04-09 | [A2A](https://developers.googleblog.com/en/a2a-a-new-era-of-agent-interoperability/)（Google） | 标准 | Agent ↔ Agent 的开放协议，明确写成 MCP 的互补：MCP 接工具，A2A 接其他 Agent。生态仍早期。站点说明见 [什么是 A2A](/protocal/a2a/introduction/what-is-a2a-agent-to-agent-protocol/) |
| 2025-04 | OpenAI / Google 等宣布支持 MCP | 标准 | MCP 从「Anthropic 的协议」变成跨厂商插槽。这才是 2024-11 那篇规范的后世重要性落地——当时热度 ≠ 这一刻 |
| 2025-05 | [OpenAI Codex](https://openai.com/index/introducing-codex/) 云端软件工程 Agent | 工程化 | 每任务一个云沙箱、可并行、可开 PR。与 2021 年那个 Codex **模型**同名不同物。CLI 与云端运行时成对出现 |
| 2025-05-22 | Claude 4 + Claude Code GA | 工程化 | 运行时从预览变成默认可装的开发者工具。IDE 插件、GitHub Actions 往后加，引擎是同一套 |
| 2025 年中 | Cursor Agent、Copilot Agent Mode、Gemini CLI 等同场 | 引爆 | 「在编辑器/终端里委派」成为默认开发体验。人在环仍然是主路径，全自主是选项 |
| 2025-07 | Operator 并入 ChatGPT agent | 工程化 | 浏览执行和研究开始收进同一个产品入口，而不是独立网站 |
| 2025 | [Agent Skills](/protocal/skills/) | 工程化 | 用文件夹打包流程、脚本、领域知识，运行时动态加载。通用 Agent 靠 Skills 变专用，而不靠再训练。原文见 [为智能体配备 Agent Skills](/protocal/skills/posts/equipping-agents-for-the-real-world-with-agent-skills/) |

刻意不升格的：每一个「我们的多 Agent 平台」发布会；把 A2A 写成已经统一企业通信（协议发布 ≠ 生态长成，对照 [前传里的 FIPA](../before2022/)）；以及任何把 Deep Research 的长报告等同于「已解决研究」的说法。

## 能力栈切片

### 模型层

推理模型与编码专用变体成为 Agent 运行时的引擎。通用聊天模型仍在，但「默认拿来干活」的往往是会思考、会用工具的那一档。Computer Use 从实验 API 长进消费级入口。

### 框架 / 协议层

**运行时压过框架。** 你仍然可以用 LangGraph 自建，但大量开发者直接开 Claude Code / Codex CLI。MCP 成为接工具的默认方言；A2A 提出接 Agent 的方言，落地慢于 MCP。Skills 是给运行时的可移植专长包，不是又一种 RPC。

三者不要混：[调研方法](../overview/research/) 里的 Framework / Runtime / Protocol 在这一年终于能用产品对上号。

### 应用层

三条产品线同时成立：

1. **编码运行时**（最扎实）：Claude Code、Codex、Cursor Agent、开源 OpenHands 等。
2. **研究型 Agent**：Deep Research 及各家仿制。
3. **电脑/浏览器操作**：Operator、Computer Use、Mariner 一类。成功率和安全限制明显弱于编码线。

通用「什么都能干」的云端 Agent（Manus 等）走引爆路线，和 2023 AutoGPT 同类：定义舆论，不定义可靠性上限。

### 基础设施层

每个编码会话一个沙箱，成为运行时标配。MCP server、密钥、允许域名开始出现在开发者设置里。评测上 SWE-bench Verified 分数继续被刷高，同时也被质疑「分数 ≠ 能接手一个真实团队的迭代」。可观测性仍弱：一次委派烧了多少 token、在哪一步漂了，产品刚开始给日志。

## 还做不到什么

- **无人盯着做完跨天、跨人的任务。** 运行时很强，仍是「一个开发者的副驾驶」，不是团队员工。
- **电脑操作达到编码线的可靠度。** Agent 模式能点网页，复杂后台、登录墙、验证码仍然脆。
- **A2A 级的多 Agent 分工成为日常。** 协议有了，生产上仍是单运行时 + MCP 工具。
- **身份独立于用户。** 默认仍是「用你的 GitHub / 你的浏览器 / 你的账号」。共享频道里的服务账号是 [2026](../2026/) 的 Claude Tag 才正视的问题。
- **基础设施被当成一等公民。** 沙箱冷启动、调度、长任务存活，还没有成为公开的系统论文主题。

## 怎么学 / 往哪跳

1. 用一次真实仓库任务走通一个运行时（Claude Code 或 Codex CLI），对照 2023 的「自己用 LangChain 写循环」。问：循环、沙箱、权限分别谁在管。
2. 读 MCP 规范或 [MCP 介绍](/protocal/mcp/introduction/)，再读 [A2A](/protocal/a2a/introduction/what-is-a2a-agent-to-agent-protocol/)。一张图：模型—MCP—工具；Agent—A2A—Agent。
3. 打开 [Skills](/protocal/skills/)，看它和 prompt、和 MCP 差在哪一层（流程知识 vs 工具接口）。
4. 把 Operator / Deep Research 当应用层样品，不要当通用 Agent 已经完成。
5. 读完这一年，带着「个体运行时已经够用，团队工作区还没有」去 [2026](../2026/)。

读完应能回答：为什么 2025 要区分框架和运行时；MCP 的后世重要性为什么出现在这一年而不是发布当年。
