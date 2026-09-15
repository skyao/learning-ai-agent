---
title: "OpenAI Codex 2025 讲解"
linkTitle: "讲解"
weight: 20
date: 2026-09-15
description: >
  每任务一个云沙箱的编码 Agent。和 Claude Code 对台；名字容易和 2021 年搞混。
---

## 当时解决了什么问题

Claude Code 把循环放在你的终端。Codex 把循环放在云端隔离环境：可并行、不占用本机、PR 从沙箱里开出来。Devin 2024 年的「AI 软件工程师」叙事，这里变成 ChatGPT 套餐里的一个预览入口。专用核 codex-1 说明应用层开始反向点菜：不要通用聊天模型，要会在沙箱里收工的模型。

按 AI Agent 定义，这 **是** Agent。人下任务、审 PR，循环在云端转。

## 对后续 LLM 与 Agent 的影响

编码运行时形成双寡头叙事：终端/本机（Claude Code、CLI）对云端并行（Codex）。名字复用 2021 Codex，时间线阅读必须分开：[前传 Codex](../../../before2022/codex/) 是模型；2025 是运行时。SWE-bench 分数继续被刷，同时「分数 ≠ 能接手真实迭代」的质疑没有消失。
