---
title: "Claude 3.5 Sonnet（材料）"
linkTitle: "材料"
weight: 10
date: 2026-09-15
description: >
  按 2024-06-21 公告转述：智力、编码评测、Artifacts、200k 窗口。
---

本页转述 **2024-06-21 公告当时公开说了什么**，不把 10 月的 Sonnet 升级、Computer Use 或 SWE-bench Verified 49% 写进当天。

主要出处：Anthropic，2024-06-21，[Introducing Claude 3.5 Sonnet](https://www.anthropic.com/news/claude-3-5-sonnet)。本页不复制公告全文。

---

## 产品主张

3.5 Sonnet 是 Claude 3.5 家族的第一只。公告称在一批评测上超过竞品和 Claude 3 Opus，速度与成本仍是中档（相对 Opus）。**200K** 窗口。价格：**$3 / $15** 每百万输入/输出 token。claude.ai 免费可用（Pro 限额更高）；API、Bedrock、Vertex AI 同步。

编码：内部 **agentic coding** 评测里，3.5 Sonnet 解决 **64%** 的题，Claude 3 Opus **38%**。评测设定是：给自然语言描述，在开源仓库上修 bug 或加功能；配上相关工具时，模型可独立写、改、执行代码。这是厂商内部卷，不是 SWE-bench Verified。

产品侧同期推出 **Artifacts**：在对话旁打开一块画布，看代码、文档、图表的实时预览。面向「做出来看」而不是只出聊天气泡。

路线图：年后再放 3.5 Haiku 与 3.5 Opus；并写到在探索 Memory。

## 当时不是什么

这是更强的中档模型 + 聊天产品里的画布。64% 是内部 agentic 评测，不能直接当成 SWE-bench。看屏幕、点鼠标是 10 月的另一篇公告。
