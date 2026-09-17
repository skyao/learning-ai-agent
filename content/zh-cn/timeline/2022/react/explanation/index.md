---
title: "ReAct 讲解"
linkTitle: "讲解"
weight: 20
date: 2026-09-15
description: >
  把循环写成可抄的文本协议。解析失败即掉步；四要素在公式里重合，执行靠宿主从文本里解析调用。
---

## 论文解决了什么问题

[CoT](../../chain-of-thought/) 让模型在 token 序列里多步计算，但算完没有新观察：事实靠参数记忆，错了沿链条传下去。先前让模型在交互环境里行动的工作，却很少用语言维持计划和工作记忆。两边分开，各缺一块。

ReAct 的解法是改**生成格式**：Thought 不碰环境，Action 才碰，Observation 写回上下文。动作空间扩成 \(\hat{\mathcal{A}} = \mathcal{A} \cup \mathcal{L}\)：语言里的 thought 没有观察反馈。同一只冻结大模型，靠少数轨迹示范，就能在维基问答和家务文字游戏里跑循环。它没有发明新权重算法，发明的是可抄的控制协议。

实现是字符串约定：模型吐 `Action:`，宿主正则或伪 DSL 解析，失败即掉步。没有 schema，没有事务，没有外部完成判据。Function Calling 还有八个月。

## 对后续 LLM 的影响

「边想边做」成为默认叙事。后来几乎所有 Agent 提示（LangChain 的 AgentExecutor、各种 ReAct 模板、开源框架里的 scratchpad）都在抄 Thought / Action / Observation。论文自己已经写明：最好成绩往往要和 CoT-SC 切换——纯循环不是万能。微调约 3000 条轨迹让小模型追上，也预示协议可以变成训练目标，不只是提示。

## 对 AI Agent 的影响

按 [定义](/definition/what-is-ai-agent/) 的四要素，这是 2022 年在**协议层**的第一次重合：LLM 选下一步、交错多步、Action 改环境、Observation 写回再选。HotpotQA 上的 search/lookup 是真检索；ALFWorld / WebShop 更是交互环境。重合停在公式和基准：执行靠解析，环境是论文集，无产品级沙箱，无仓库谓词。

时间要拆开：**论文首证在 2022-10**（[ChatGPT](../../chatgpt/) 尚未发布）；**被框架和产品当成默认控制协议是 2023**。2022 年引用爬得慢，不等于它晚一年才存在。把 ReAct 写成已经交付的运行时，会把工程化提前一年。
