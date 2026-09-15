---
title: "BabyAGI（材料）"
linkTitle: "材料"
weight: 10
date: 2026-09-15
description: >
  按 2023 春公开脚本转述：任务队列与三条 LLM 调用。
---

本页转述 **2023 年 3–4 月那一版短脚本在做什么**，不以 2024 以后作者重写的框架回填。作者写明：这是对 3 月 28 日推上 Task-Driven Autonomous Agent 的精简；仓库名里的 AGI 来自围观反应，**并不声称这是 AGI**。

---

## 机制

核心是一个 `while True`：

1. 从队列取出当前任务。
2. **execution_agent**：用 LLM 按总目标执行该任务，得到一段文本结果。
3. 把结果写入向量库（早期常用 Pinecone + `text-embedding-ada-002`）。
4. **task_creation_agent**：根据结果和现有队列，让 LLM 提出新任务。
5. **prioritization_agent**：让 LLM 按总目标重排队列。

早期实现用 Completions API（如 `text-davinci-003`），不是 Chat Completions，更没有 Function Calling。上下文靠目标字符串、最近结果和检索到的旧结果拼接。公开讨论里也有人指出：检索到的片段有时并没有真正进执行提示——脚本首先是概念演示。

## 当时不是什么

没有沙箱权限模型，没有稳定的工具 schema，没有任务完成的自动判定。长度上比 AutoGPT 短很多，因此更容易被复制和改写。衍生项目在几个月内大量出现，也大量停更。
