---
title: "Function Calling"
linkTitle: "[协议]Function Calling"
分类: "协议"
标签:
  - "工程化"
weight: 90
date: 2026-09-15
description: >
  2023-06-13。工具调用收成 Chat Completions 的可校验 schema。协议不是 Agent；循环在宿主。
---

OpenAI，2023-06-13。`gpt-4-0613` 与 `gpt-3.5-turbo-0613` 微调成：判断要不要调函数，并吐出符合签名的 JSON。同日还有 16k 窗口的 `gpt-3.5-turbo-16k`。

1. [材料](./source/) — 按当时公告转述：`functions` / `function_call`、模型、安全提示。
2. [讲解](./explanation/) — 为何这是后面所有编排的地基，以及为何接口仍不是 Agent。

当时公告：[Function calling and other API updates](https://openai.com/index/function-calling-and-other-api-updates/)。
