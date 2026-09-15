---
title: "Assistants API（材料）"
linkTitle: "材料"
weight: 10
date: 2026-09-15
description: >
  按 2023-11-06 公告转述：线程、工具、检索收成托管 assistant。
---

本页转述 **Assistants API 当天公开说了什么**。GPT-4 Turbo 见 [材料](../../gpt-4-turbo/source/)。GPTs 用同一套积木做成不用写代码的定制聊天机器人，**不单独升格**为里程碑，只在此对照。

主要出处：OpenAI，2023-11-06，[New models and developer products announced at DevDay](https://openai.com/index/new-models-and-developer-products-announced-at-devday/)；同日 [Introducing GPTs](https://openai.com/index/introducing-gpts/)。

---

## Assistants API

公告写成帮助开发者在自己的应用里构建 **agent-like** 体验的第一步。一个 assistant 有特定指令，可使用额外知识，并可调用模型和工具来执行任务。新能力包括 **Code Interpreter**、**Retrieval** 以及已有的 function calling，用来承接开发者先前要自己写的线程管理、工具循环和检索拼接。API 当天以 beta 对全体开发者开放。用例列举包括自然语言数据分析、编码助手、旅行规划等。

## GPTs（对照，不升格）

面向 ChatGPT 用户的定制版本：给指令、上传知识、打开浏览 / 画图 / Code Interpreter 一类能力，然后分享。构建块与 Assistants 相同：自定义指令 + 上述工具。除内置能力外，可用 **Actions** 接入 API（公告写明类似插件）。计划中的 GPT Store 当天只是方向。按 AI Agent 定义，人仍在对话循环里给目标，自主度有限，故不单独占行。

## 当时不是什么

锁在 OpenAI 的模型与账号体系里。Assistants 把循环和工具接到云端，但停机、权限、跨厂商工具协议都不在当天的交付范围内。不要用后来的 Assistants 弃用或迁移回填这一天。
