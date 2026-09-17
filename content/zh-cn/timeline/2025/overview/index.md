---
title: "2025年的概述"
linkTitle: "概述"
weight: 1
date: 2026-09-09
description: >
  2025：运行时吞掉编排库。MCP 被追认，A2A 与 Skills 给出接线与装载；Verified 与 Pro 不可横比。
---

**一句话主线：** 2025 年，控制循环从开发者自写的编排库，迁进可直接委派的运行时——Claude Code、云端 Codex、ChatGPT 里的 Deep Research / Agent 模式。推理模型（o3、GPT-5）把规划与工具选择训练进核心；模型仍不是 Agent。MCP 被跨厂商追认，A2A 给出 Agent↔Agent 接线，Skills 是运行时装载而不是 RPC。评测从 Verified 加硬到 Terminal-Bench / SWE-bench Pro，两套分数不可横比。年底出现转向：**云厂商开始把 Agent 运行时当作平台品类提供**（AWS AgentCore、阿里云 AgentRun），编码 Agent 的委派面进 Slack。11 月自托管「龙虾」仓库出现，舆论顶点在次年初。

上一页：[2024](../../2024/overview/)。协议深挖：[MCP](/protocal/mcp/)、[A2A](/protocal/a2a/)、[Skills](/protocal/skills/)。

## 和 LLM 的关系

2024 的 o1 是预告。2025 年决策核心的变化是：**思考被训练进模型，运行时把模型和电脑接在一起。** 核心换了，循环仍在运行时一侧。

- **推理模型成为运行时的默认引擎之一。** [o3](../o3/)（1 月 mini、4 月完整版）开始在思维链里选工具；Claude 3.7 / Claude 4（2 月与 5 月）；8 月 [GPT-5](../gpt-5/) 把快答、思考和路由收成默认系统。规划、回退、写测试不再完全靠提示词里的 ReAct 明文。代价是延迟和账单。o3 / GPT-5 是决策核心，不是 Agent。
- **专用 Agent 模型出现。** OpenAI 的 [Codex](../openai-codex/) 云端 Agent 用为软件工程优化的 codex-1（o3 变体）；Anthropic 把最强编码核心和 [Claude Code](../claude-code/) 绑在一起发。应用层开始反过来说：要的不是通用聊天模型，是会在沙箱里收工的决策核心。
- **原生 agentic 能力变强。** 更稳的长链工具调用、更好的代码库定位、Computer Use 从 2024 的笨拙 API 长成 [Operator](../operator/) / [ChatGPT agent](../chatgpt-agent/)。视觉 + 推理终于够用来点网页；可靠度仍远低于编码主线。能点 ≠ 完成谓词已通。
- **上下文与记忆仍是硬顶。** 窗口继续涨，但「跨会话、属于团队而非属于聊天框」的记忆没有被模型层单独解决。那是运行时和产品要管的事，2026 的频道记忆才把它做成组织功能。

## 里程碑

每条一个**分类**，**标签**可多个（[六类历史角色](../../overview/research/#里程碑类型)）。Claude Code 预览与 GA 收成一行。

| 时间 | 事件 | 分类 | 标签 | 为什么记 |
| --- | --- | --- | --- | --- |
| 2025-01 | [OpenAI Operator](../operator/)（CUA 模型） | 产品 | 工程化 | 2024 Computer Use 的产品化：Agent 拥有自己的浏览器，点击真实 GUI。7 月并入 ChatGPT agent。分数和安全边界仍是研究预览级 |
| 2025-01 / 04 | [o3-mini 与 o3](../o3/) | 模型 | 范式更替 | 推理核心进入产品，并开始在思维链里选工具。本身不是 Agent，但是 2025 年运行时的默认引擎之一 |
| 2025-02 | [Deep Research](../deep-research/) | 产品 | 工程化 | 多步检索→综合→带引用成稿。研究型 Agent 成为可点击的产品，而不只是网页浏览 demo。通道是文档，谓词不是仓库绿 |
| 2025-02 / 05 | [Claude Code](../claude-code/) | 产品 | 工程化、范式更替 | 终端里的代码优先运行时：不是库，是用来委派的 Agent。2-24 研究预览，5-22 随 Claude 4 GA。循环内置，应用方不再自写 AgentExecutor |
| 2025-03 | [Manus](../manus/) 等通用自主 Agent 爆红 | 产品 | 引爆 | 把「云端虚拟机里什么都干」送进大众视野（尤其中文互联网）。热度类似 2023 的 AutoGPT；热度 ≠ 完成率 |
| 2025-03-11 | [OpenAI Agents SDK](../agents-sdk/) 与 Responses API | 框架 | 工程化 | 厂商把单/多 Agent 编排、内置工具、tracing 收成开源积木。改进 2024 年的 Swarm；仍是库，不是托管运行时 |
| 2025-03–04 | [OpenAI / Google 等宣布支持 MCP](../mcp-adoption/) | 协议 | 标准 | MCP 从「Anthropic 的协议」变成跨厂商插槽。这才是 2024-11 那篇规范的后世重要性落地——当时热度 ≠ 这一刻。接线，不是循环 |
| 2025-04-09 | [A2A](../a2a/)（Google） | 协议 | 标准 | Agent ↔ Agent 的开放协议，明确写成 MCP 的互补：MCP 接工具，A2A 接其他 Agent。生态仍早期。站点说明见 [什么是 A2A](/protocal/a2a/introduction/what-is-a2a-agent-to-agent-protocol/) |
| 2025-05 | [OpenAI Codex](../openai-codex/) 云端软件工程 Agent | 产品 | 工程化 | 每任务一个云沙箱、可并行、可开 PR。与 2021 年那个 Codex **模型**同名不同物。CLI 与云端运行时成对出现 |
| 2025-05-19 | [Terminal-Bench](../terminal-bench/) | 评测 | 首证、标准 | 真实 Docker 里的命令行任务，断言最终环境状态。给 Claude Code / Codex CLI 一条与 SWE-bench 不同的尺子 |
| 2025 年中 | [Cursor Agent、Copilot Agent Mode、Gemini CLI](../ide-agents/) 等同场 | 产品 | 引爆 | 「在编辑器/终端里委派」成为默认开发体验。人在环路仍然是主路径，全自主是选项。弱自主仍满足定义 |
| 2025-07 | Operator 并入 [ChatGPT agent](../chatgpt-agent/) | 产品 | — | 浏览执行和研究开始收进同一个产品入口，而不是独立网站 |
| 2025-08-07 | [GPT-5](../gpt-5/) | 模型 | — | 快答 + 思考 + 路由收成默认系统。SWE-bench Verified 厂商自报 74.9%。本身不是 Agent |
| 2025-09-19 | [SWE-bench Pro](../swe-bench-pro/) | 评测 | 标准、警示 | 更长、抗污染的仓库题。GPT-5 在统一脚手架上约 23%——Verified 七成与 Pro 两成不可横比：谓词变硬，完成率塌缩 |
| 2025-10 | [Agent Skills](../agent-skills/) | 协议 | 工程化 | 用文件夹打包流程、脚本、领域知识，运行时动态加载。通用核心靠 Skills 变专用，而不靠再训练。不是 RPC。原文见 [为智能体配备 Agent Skills](/protocal/skills/posts/equipping-agents-for-the-real-world-with-agent-skills/) |
| 2025-11-24 | [OpenClaw / Clawdbot（龙虾）](../openclaw/) | 产品 | 引爆 | 自托管 Gateway：聊天软件指挥你自己的机器。仓库在 2025 年出现；**现象级爆红在 2026-01**，见 [OpenClaw 爆红](../../2026/openclaw/) |
| 2025-12-02 | [AWS AgentCore](../aws-agentcore/)（re:Invent） | 产品 | 工程化 | 推理模型循环之外的一层：策略在工具调用到达系统前拦截并裁决，评估按真实运行行为打分。当时均为 Preview，2026-03 才 GA |
| 2025-12-08 | [Claude Code in Slack](../claude-code-slack/) | 产品 | — | 委派面从终端搬进聊天流：@Claude 建会话、按频道上下文自动选仓、线程回帖给 PR 直链。执行面未变，是 2026 Claude Tag 的前身 |
| 2025-12-10 | [阿里云函数计算 AgentRun](../aliyun-agentrun/) | 产品 | 工程化 | 云厂商把 Agent 运行时做成平台资源：会话亲和突破 Serverless 无状态，运行时与沙箱可休眠、按需唤醒。厂商自报数字按主张记 |
| 2025-12-18 | [Agent Skills 开放标准](../agent-skills-standard/) | 协议 | 标准 | 10 月的文件夹格式去厂商化：规范独立到 agentskills.io，客户端登记表数十家。管打包与可移植性，不管执行语义 |
| 2025-12-18 | [GPT-5.2-Codex](../gpt-5-2-codex/) | 模型 | — | 为 Codex 优化的编码核心：上下文压缩让工作跨多个上下文窗口保持连贯；Windows 有了原生沙箱选项。厂商自报分数未能一手核实 |

刻意不升格的：每一个「我们的多 Agent 平台」发布会；把 A2A 写成已经统一企业通信（协议发布 ≠ 生态长成，对照 [前传里的 FIPA](../../before2022/early-concepts/fipa-acl/)）；任何把 Deep Research 的长报告等同于「已解决研究」的说法；Google Mariner 等与 Computer Use / Operator 同线的跟进预览；以及 2026 年才出现的「龙虾套壳安装会」。

## 能力栈切片

### 模型层

推理模型与编码专用变体成为 Agent 运行时的引擎。通用聊天模型仍在，但默认用来执行的往往是会思考、会用工具的那一档。Computer Use 从实验 API 长进消费级入口。核心不是循环。

### 框架 / 协议层

**运行时压过框架。** 仍可以用 LangGraph 或 [Agents SDK](../agents-sdk/) 自建，但大量开发者直接开 Claude Code / Codex CLI。MCP 成为接工具的默认方言；A2A 提出接 Agent 的方言，落地慢于 MCP。Skills 是给运行时的可移植专长包，不是又一种 RPC。

三者不要混：[调研方法](../../overview/research/) 里的 Framework / Runtime / Protocol 在 2025 年终于能用产品对上号——库、装上即委派的执行环境、接线。

### 应用层

几条产品线同时成立：

1. **编码运行时**（证据最密）：Claude Code、Codex、Cursor Agent、开源 OpenHands 等。
2. **研究型 Agent**：Deep Research 及各家仿制。通道是检索文档，谓词是带引用成稿。
3. **电脑/浏览器操作**：Operator、Computer Use、Mariner 一类。成功率和安全限制明显弱于编码线。
4. **自托管个人 Agent**（年底才出现）：[OpenClaw / Clawdbot](../openclaw/) 把循环放到用户机器和聊天频道上，热度要到 2026 年 1 月才爆。

通用「什么都能干」的云端 Agent（Manus 等）走引爆路线，和 2023 AutoGPT 同类：定义舆论，不定义可靠性上限。

### 基础设施层

每个编码会话一个沙箱，成为运行时标配。MCP server、密钥、允许域名开始出现在开发者设置里。评测上 SWE-bench Verified 分数继续被刷高，[Terminal-Bench](../terminal-bench/) 和 [SWE-bench Pro](../swe-bench-pro/) 把「会写补丁」和「会在终端/长周期仓库收工」拆开。可观测性仍弱：一次委派烧了多少 token、在哪一步漂了，产品刚开始给日志（Agents SDK 的 tracing 是开发者侧的一步）。

12 月这层被云厂商收成产品。[AWS AgentCore](../aws-agentcore/) 把工具调用的裁决与行为评估搬到推理循环之外，[阿里云 AgentRun](../aliyun-agentrun/) 用会话亲和与休眠唤醒承接有状态 Agent——两者回答的是同一类问题：环境怎么活着、谁来决定一次调用能不能发出去。**产品先于论文**：把这些负载当作一类系统问题来测量，要等 2026 年的 [Aries](../../2026/aries/) 与 [SpecBox](../../2026/specbox/)。

## 还做不到什么

- **无人盯着做完跨天、跨人的任务。** 运行时很强，仍是「一个开发者的副驾驶」，不是团队员工。自托管龙虾把循环放到个人机器上，也不等于已经能当组织员工。
- **电脑操作达到编码线的可靠度。** Agent 模式能点网页，复杂后台、登录墙、验证码仍然脆。第一层（屏）已通，第二层分数仍低。
- **A2A 级的多 Agent 分工成为日常。** 协议有了，生产上仍是单运行时 + MCP 工具。
- **身份独立于用户。** 默认仍是「用你的 GitHub / 你的浏览器 / 你的账号」。主体不是独立 principal。共享频道里的服务账号是 2026 的 Claude Tag 才正视的问题。
- **硬考卷上的自主软件工程。** Verified 可以刷到约四分之三（厂商自报）；Pro 把同一代模型打回约四分之一。谓词不同，完成率不可互换。
- **基础设施被当成一等公民，但仍以产品形态先出现。** 沙箱冷启动、调度、长任务存活在 12 月进入云厂商的产品目录，却还没有成为公开的系统论文主题——那要等 2026 年。
