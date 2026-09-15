---
title: "PAL 讲解"
linkTitle: "讲解"
weight: 20
date: 2026-09-15
description: >
  拆题留给模型，算术留给解释器。Code Interpreter 一类产品，问题陈述从这里就能读到。
---

## 论文解决了什么问题

[CoT](../../chain-of-thought/) 证明中间步骤有用，但步骤仍由同一个下一词模型执行。语言模型擅长把应用题译成步骤，不擅长当计算器——数字一大就崩。继续放大模型或继续在数学语料上微调，算错仍是主因之一。

PAL 把责任切开：**理解与拆解**留在 LLM，**执行**交给确定性运行时。这和把算术交给计算器专家是同一信念，实现却是 few-shot 程序，不必为路由器单独训抽参模型。

## 对后续 LLM 与 Agent 的影响

2023 的 Code Interpreter / Advanced Data Analysis、各种「生成代码再在沙箱里跑」，问题陈述几乎就是这一页：不要让模型心算。Agent 循环里的 Action 从此可以是 `run_python`，Observation 是 stdout。PAL 自己还不是那种产品：没有持久文件系统、没有用户级权限模型，评测是 GSM8K 不是 SWE-bench。硬的是分工，不是云虚拟机。
