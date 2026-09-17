---
title: "2024年的概述"
linkTitle: "概述"
weight: 1
date: 2026-09-09
description: >
  2024：仓库级完成谓词与工具总线。编码循环第一次有可引用分数；MCP 当年是规范，不是默认插槽。
---

**一句话主线：** 2024 年，编码循环第一次接到独立于演示的完成谓词。SWE-bench Verified 成为默认基准；Devin 把「AI 软件工程师」做成品类口号；Computer Use 把观察换成像素、动作换成键鼠；MCP 在 11 月给出模型↔工具/数据的开放接线。热度集中在产品与基准；MCP 当年几乎无人采用，2025 年才被追认为工具层拐点。

上一页：[2023](../../2023/overview/)。总弧线见 [概述](../../overview/)。协议深挖见 [MCP](/protocal/mcp/)。

## 和 LLM 的关系

2023 给出控制循环和 Function Calling schema。2024 年模型侧改写 Agent 前提的，是四块：

- **长上下文成为长轨迹的工作集上限。** [Gemini 1.5](../gemini-15/)（2024-02）把窗口推到约 100 万 token；[Claude 3](../claude-3/) 系、GPT-4 Turbo 把「一次会话装下小仓库 / 长文档」做成可买能力。Agent 不必每步靠检索外挂才能看见代码。窗口够，仍不产生副作用。
- **多模态让像素观察成立。** [GPT-4o](../gpt-4o/)（2024-05）把视听做进同一对话模型；Anthropic 在 10 月用升级后的 Claude 3.5 Sonnet 推出 [Computer Use](../computer-use/)：截屏 → 鼠标键盘。能看 ≠ 已点击。没有视觉核，通用电脑操作只能是网页 API 调用。
- **推理从明文 Thought 内化到测试时计算。** [o1-preview](../o1/)（2024-09）用强化学习训练隐式长思考。规划、试错、自检不再完全依赖 ReAct 把 Thought 写进上下文。循环可以更短，代价是延迟、账单和不透明。停机、工具、沙箱仍在宿主。把内部 CoT 当成已经实现 Agent，会漏掉执行层。
- **编码核被仓库级谓词逼着涨。** Claude 3（3 月）、[3.5 Sonnet](../claude-35-sonnet/)（6 月）以及 10 月的 Sonnet 升级，把 [SWE-bench Verified](../swe-bench-verified/) 从约三分之一拉到约一半（厂商自报 49%）。分数会刷、会挑子集。事实是：决策核心第一次在「修真实 GitHub issue」上拿出可引用成绩。模型仍不是 Agent。

工具接线仍是各家私有 schema。MCP 出现在 2024 年底，当年没有统一生态。

## 里程碑

每条一个**分类**，**标签**可多个（[六类历史角色](../../overview/research/#里程碑类型)）。

| 时间 | 事件 | 分类 | 标签 | 为什么记 |
| --- | --- | --- | --- | --- |
| 2024-02 | [Gemini 1.5](../gemini-15/) 长上下文 | 模型 | — | 百万 token 级窗口把「仓库进一次会话」做成产品选项。工作集上限，不是循环 |
| 2024-03 | [Claude 3](../claude-3/) 家族 | 模型 | — | 编码与工具使用明显强于 2023 默认核。后续 Claude 系运行时站在这条线上。核不是 Agent |
| 2024-03-12 | Cognition [Devin](../devin/) | 产品 | 引爆 | 「AI 软件工程师」成为品类口号。SWE-bench 子集成绩带起舆论；当时独立复现和全量基准仍稀缺。热度 ≠ 完成率 |
| 2024-04 | [OSWorld](../osworld/) 等电脑操作基准 | 评测 | 首证 | 给 GUI 副作用出完成谓词。10 月 Computer Use 报的 14.9% 截图分，对着这类基准，与编码线 Verified 不可横比 |
| 2024-05 | [SWE-agent](../swe-agent/)（Princeton） | 产品 | 首证 | 为循环设计 Agent-Computer Interface（编辑、导航、测试），而不是把人用的 IDE 原样交给模型。开源对照 Devin。动作空间是设计物 |
| 2024-05 | [GPT-4o](../gpt-4o/) | 模型 | — | 实时多模态对话。Computer Use / Operator 路线的视觉前提。能看 ≠ 已点击 |
| 2024 上半年 | [Cursor](../cursor/) 等 IDE Agent 走红 | 产品 | 引爆 | 人在环路的编码 Agent 比全自主 Devin 更早进入日常。弱自主仍满足定义；留存往往高于全自主叙事 |
| 2024-06 | [Claude 3.5 Sonnet](../claude-35-sonnet/) | 模型 | — | 编码与 Artifact 工作流。许多团队把默认核切到这里。核换了，循环仍在宿主 |
| 2024-08 | [SWE-bench Verified](../swe-bench-verified/) | 评测 | 标准、警示 | 500 道经工程师确认可解的子集，成为默认谓词。原版含不可解/含混题——2023「几乎做不出」与 2024「刷到 50%」分母不同，不可横比 |
| 2024-09 | OpenAI [o1-preview](../o1/) | 模型 | 范式更替 | 推理模型：测试时计算换正确率。循环的一部分被训练进核，而不只写在提示词里。宿主仍管停机与工具 |
| 2024-10-22 | [Claude Computer Use](../computer-use/) | 产品 | 首证、工程化 | 公有 API 上第一次让前沿模型「看屏幕、点鼠标」。观察是像素，副作用在 GUI。OSWorld 分数仍低；Anthropic 自己写了笨拙和易错 |
| 2024-11 | [Model Context Protocol (MCP)](../mcp/) | 协议 | 标准 | 模型 ↔ 工具/数据的开放接线，不是循环。2024 年是规范 + Claude Desktop 本地 server + 少量合作方。当时热度不高，2025 年才被多家追认 |
| 2024-12 | Anthropic [Building effective agents](../building-effective-agents/) | 文献 | — | 把 workflow（边在代码里）和 agent（边在模型输出里）分开。多 Agent 是拓扑，不是更强的循环原语 |

刻意不升格的：GPT Store 里的 GPTs（自定义助手，无目标循环）；Rabbit R1 等硬件叙事；大多数「多 Agent 框架」发布会——CrewAI / AutoGen / LangGraph 作为工程化存在，但 2024 的主线是编码谓词和协议萌芽，不是又一次 AutoGPT 式框架膨胀。

## 能力栈切片

### 模型层

默认核从 GPT-4 换成更强的 Sonnet / 4o / Gemini。o1 把「想」部分藏进内部计算。长窗口和视觉第一次同时到位。Function Calling 已是各家标配，不再是新闻；它是接线，不是循环。

### 框架 / 协议层

框架继续分叉：LangGraph 强调有状态图；各家 Agent SDK 开始出现。改写后续接线的是 **MCP**：把「接工具」从每家私有 JSON 往开放标准推。2024 年生态很小，11 月发布 ≠ 已经统一。电脑操作仍是厂商私有 API（Computer Use），不是协议。

### 应用层

主线是**编码 Agent**：Devin 代表全自主云端工程师叙事；Cursor / Copilot 代表 IDE 里人在环路；SWE-agent / OpenHands（由 OpenDevin 而来）代表可复现的开源循环。Computer Use 打开第二条应用线——通用电脑操作——但 2024 年仍是研究预览。Deep Research 作为品类要到 2025。

### 基础设施层

评测成为完成谓词：SWE-bench / Verified、OSWorld、TAU-bench。刷基准与真实交付之间的缝，2024 年开始被公开讨论。沙箱成为编码 Agent 标配（云端 VM、隔离执行），但调度、冷启动、身份还不是论文主题——那是 [2026](../../2026/overview/) 的 Aries / SpecBox。

## 还做不到什么

- **全自主软件工程师。** Devin 能演示，SWE-bench Verified 在 2024 年底最好公开分大约一半；跨多文件、含糊需求、长周期项目仍不稳。
- **可靠的通用电脑操作。** Computer Use 公测，OSWorld 仍是低分区间，与编码线 Verified 不在同一数量级。
- **跨厂商的工具插槽。** MCP 有了规范，没有成为默认接线。
- **推理成本可忽略。** o1 让规划更强，也让每一步更贵；经济性第一次成为 Agent 设计约束。
- **组织级身份与治理。** Agent 仍然借用用户 OAuth 或一把 key。主体不是独立 principal。团队共享工作区不是 2024 年的产品主线。

当时的反方意见：Devin 考题子集、Computer Use 被用来乱点网页、MCP「又一个协议」。后两句到 2025–2026 会部分被证伪（MCP 活下来了）；第一句仍然成立——引爆型事件要等第三方谓词。
