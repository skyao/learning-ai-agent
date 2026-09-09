---
title: "2024年"
linkTitle: "2024年"
weight: 50
date: 2026-09-09
description: >
  2024：评测与协议。编码 Agent 成为可验证主战场；MCP 发布时并不热闹，后来才被追认为拐点。
---

**一句话主线：** 2024 年，Agent 从「能 demo」变成「能打分」。SWE-bench 把编码循环收成考卷，Devin 把「AI 软件工程师」送上舆论；Computer Use 让模型开始看屏幕；MCP 在 11 月以开放协议出现——当时热度远低于 ChatGPT 或 Devin，后来才被追认为工具层的拐点。

上一页：[2023](../2023/)。总弧线见 [概述](../overview/)。协议深挖见 [MCP](/protocal/mcp/)。

## 和 LLM 的关系

2023 给出了循环和 Function Calling。2024 年模型侧改写 Agent 的，是三块新前提：

- **长上下文成为长任务的物理条件。** Gemini 1.5（2024-02）把窗口推到约 100 万 token 量级；Claude 3 系、GPT-4 Turbo 也把「一次能看见整个小仓库 / 长文档」做成可买的能力。Agent 不必每一步都靠检索外挂才能看见代码。
- **多模态让「看屏幕」成立。** GPT-4o（2024-05）把视听做进同一对话模型；Anthropic 在 10 月用升级后的 Claude 3.5 Sonnet 推出 Computer Use：截屏 → 鼠标键盘。没有「能看」，通用电脑操作只是网页 API 调用。
- **推理开始从提示词内化到模型。** o1-preview（2024-09）用强化学习训练隐式长思考。规划、试错、自我检查不再完全依赖 ReAct 把 Thought 写进明文。这对 Agent 是双刃剑：循环可以更短、更稳，但也更贵、更不透明。
- **编码能力被基准逼着涨。** Claude 3（3 月）、3.5 Sonnet（6 月）以及 10 月的 Sonnet 升级，把 SWE-bench Verified 从约三分之一拉到约一半（厂商自报 49%）。分数会刷、会挑子集，但方向清楚：决策核第一次在「修真实 GitHub issue」上拿出可引用的成绩。

工具协议仍是各家 schema。MCP 出现在年底，当年并没有立刻统一生态。

## 里程碑

| 时间 | 事件 | 类型 | 为什么记 |
| --- | --- | --- | --- |
| 2024-02 | Gemini 1.5 长上下文 | 工程化 | 百万 token 级窗口让「把仓库塞进一次会话」从幻想变成产品选项 |
| 2024-03 | Claude 3 家族 | 工程化 | 编码与工具使用明显强于 2023 的默认核；后续 Claude 系 Agent 站在这条线上 |
| 2024-03-12 | Cognition Devin | 引爆 | 「AI 软件工程师」成为品类口号。SWE-bench 子集成绩带起舆论；当时独立复现和全量考卷仍稀缺，热度要打折看 |
| 2024-04 | [SWE-agent](https://arxiv.org/abs/2405.15793)（Princeton） | 首证 | 为 Agent 设计 Agent-Computer Interface（编辑、导航、测试），而不是把人用的 IDE 原样塞给模型。开源对照 Devin |
| 2024-04 | OSWorld 等电脑操作基准 | 首证 | 给「会用电脑」出考卷。10 月 Computer Use 报的 14.9% 截图分，就是对着这类基准 |
| 2024-05 | GPT-4o | 工程化 | 实时多模态对话。Computer Use / Operator 路线的视觉前提 |
| 2024 上半年 | Cursor 等 IDE Agent 走红 | 引爆 | 人在环的编码 Agent 比全自主 Devin 更早变成日用品。自主度低于「软件工程师」叙事，留存往往更高 |
| 2024-06 | Claude 3.5 Sonnet | 工程化 | 编码与 Artifact 工作流；许多团队把默认 Agent 核切到这里 |
| 2024-08 | [SWE-bench Verified](https://openai.com/index/introducing-swe-bench-verified/) | 标准 / 警示 | 500 道经工程师确认可解的子集，成为默认考卷。原版 SWE-bench 含不可解/含混题——2023 的「几乎做不出」和 2024 的「刷到 50%」不能直接横比 |
| 2024-09 | OpenAI o1-preview | 范式更替 | 推理模型：思考时间换正确率。Agent 循环的一部分被训练进模型，而不只写在提示词里 |
| 2024-10-22 | [Claude Computer Use](https://www.anthropic.com/news/3-5-models-and-computer-use) | 首证 / 工程化 | 公有 API 上第一次让前沿模型「看屏幕、点鼠标」。OSWorld 分数仍低，Anthropic 自己写了笨拙和易错 |
| 2024-11 | [Model Context Protocol (MCP)](https://www.anthropic.com/news/model-context-protocol) | 标准 | 模型 ↔ 工具/数据的开放协议。当年是规范 + Claude Desktop 本地 server + 少量合作方。当时热度不高，2025 年才被多家追认 |
| 2024-12 | Anthropic [Building effective agents](https://www.anthropic.com/engineering/building-effective-agents) | 工程化 | 把工作流（可预期的图）和自主 Agent（模型自己转）分开讲，泼「一切都上多 Agent」的冷水。读这一年的架构争论，这篇比框架营销有用 |

刻意不升格的：GPT Store 里的「GPTs」（仍是自定义助手，不是循环产品）；Rabbit R1 等硬件叙事；大多数「多 Agent 框架」发布会——CrewAI / AutoGen / LangGraph 作为工程化存在，但 2024 的主线是编码评测和协议萌芽，不是又一次 AutoGPT 式框架爆炸。

## 能力栈切片

### 模型层

默认核从 GPT-4 换成更强的 Sonnet / 4o / Gemini。o1 把「想」部分藏进内部计算。长窗口和视觉第一次同时到位。Function Calling 已是各家标配，不再是新闻。

### 框架 / 协议层

框架继续分叉：LangGraph 强调有状态图；各家 Agent SDK 开始出现。真正改写后续的是 **MCP**：把「接工具」从每家私有 JSON 往开放标准推。当年生态很小，不要事后写成「11 月就统一了」。电脑操作仍是厂商私有 API（Computer Use），不是协议。

### 应用层

主战场是**编码 Agent**：Devin 代表全自主云端工程师叙事；Cursor / Copilot 代表 IDE 里的人机共驾；SWE-agent / OpenHands（由 OpenDevin 而来）代表可复现的开源循环。Computer Use 打开第二条应用线——通用电脑操作——但 2024 年仍是研究预览，不是日用品。Deep Research 作为品类要到 2025。

### 基础设施层

评测成为校验器：SWE-bench / Verified、OSWorld、TAU-bench。刷榜和真实交付之间的缝，这一年开始被公开讨论。沙箱成为编码 Agent 标配（云端 VM、隔离执行），但调度、冷启动、身份还不是论文主题——那是 [2026](../2026/) 的 Aries / SpecBox。

## 还做不到什么

- **全自主软件工程师。** Devin 能演示，SWE-bench Verified 年底最好公开分大约一半；跨多文件、含糊需求、长周期项目仍不稳。
- **靠谱的通用电脑操作。** Computer Use 公测，OSWorld 仍是低分区间。
- **跨厂商的工具生态。** MCP 有了规范，没有成为默认插槽。
- **推理成本可忽略。** o1 让规划更强，也让每一步更贵；经济性第一次成为 Agent 设计约束。
- **组织级身份与治理。** Agent 仍然借用用户 OAuth 或一把 key。团队共享工作区不是这一年的产品主线。

当时的反方意见：Devin 考题子集、Computer Use 被用来乱点网页、MCP「又一个协议」。后两句到 2025–2026 会部分被证伪（MCP 活下来了），第一句仍然值得记——引爆型事件要等第三方评测。

## 怎么学 / 往哪跳

1. 先读 2023 页末的「SWE-bench 几乎做不出」，再看 Verified 和 10 月 Sonnet 的 49%。问：考卷改了没有？自主度改了没有？
2. 对照 Devin 发布材料和 SWE-agent 论文：一个是产品叙事，一个是可跑的 ACI。两者都要，不要只用通稿。
3. 打开 [MCP 介绍](/protocal/mcp/introduction/)，只记「模型怎么接工具」。不要和 2025 的 A2A 混在一层。
4. 读 Building effective agents，区分工作流和 Agent。2023 的 AutoGPT 幻想，在这里被厂商自己收窄。
5. Computer Use 的官方说明里把「笨拙」写进去了——带着这句话读 [2025](../2025/) 的 Operator。

读完应能回答：2024 补的是 2023 的哪两块缺口（可验证任务、开始看屏幕），以及为什么 MCP 要到第二年才显得重要。
