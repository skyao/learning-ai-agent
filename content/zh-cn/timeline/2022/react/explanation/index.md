---
title: "ReAct 讲解"
linkTitle: "讲解"
weight: 20
date: 2026-09-15
description: >
  把「想」接到「做」上，循环第一次写成可抄的文本协议。流行发生在 ChatGPT 和 Function Calling 之后。
---

## 论文解决了什么问题

[CoT](../../chain-of-thought/) 让模型在语言里多步想，但想完没有新观察，事实只能靠参数记忆，错了就沿链条传下去。先前让模型在交互环境里行动的工作，却很少用语言维持计划和工作记忆。两边分开，各缺一块。

ReAct 的解法是改**生成格式**：Thought 不碰环境，Action 才碰，Observation 写回上下文。同一只冻结大模型，靠少数轨迹示范，就能在维基问答和家务文字游戏里跑循环。它没有发明新权重算法，发明的是可抄的控制协议。

## 对后续 LLM 的影响

「边想边做」成为默认叙事。后来几乎所有 Agent 提示（LangChain 的 AgentExecutor、各种 ReAct 模板、开源框架里的 scratchpad）都在抄 Thought / Action / Observation。论文自己已经写明：最好成绩往往要和 CoT-SC 切换——纯循环不是万能。微调 3000 条轨迹让小模型追上，也预示「协议可以变成训练目标」，不只是提示。

## 对 AI Agent 的影响

按 AI Agent 定义，这是 2022 年最接近「LLM 决策核心 + 多步循环 + 对环境行动 + 按反馈再决策」的公开配方。HotpotQA 上的 search/lookup 是真环境；ALFWorld / WebShop 更是。限度同样清楚：动作空间靠文本解析，没有 Function Calling schema；上下文装不下复杂示范。

时间要拆开：**论文首证在 2022-10**（ChatGPT 尚未发布）；**被框架和产品当成默认控制协议是 2023**。2022 年引用爬得慢，不等于它晚一年才存在。
