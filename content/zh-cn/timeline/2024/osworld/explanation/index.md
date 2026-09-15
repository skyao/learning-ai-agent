---
title: "OSWorld 讲解"
linkTitle: "讲解"
weight: 20
date: 2026-09-15
description: >
  「会用电脑」第一次有可复现的低分。看屏幕的 Agent 成立，可靠度远低于编码线。
---

## 论文解决了什么问题

WebGPT、浏览器插件、DOM 工具只能覆盖「网页里有 API 或 DOM 的那一层」。真实工作大量发生在桌面软件、文件管理器、跨应用复制。OSWorld 把考场从 MiniWoB 一类玩具环境换成真 OS，并且用执行脚本打分，而不是看演示是否好看。

按 AI Agent 定义，跑在 OSWorld 上的系统**可以是** Agent：看屏幕或无障碍树、点鼠标、根据状态再决定。2024 年的分数说明：定义满足，能力不够。

## 对后续 LLM 与 Agent 的影响

10 月 Anthropic Computer Use 报 OSWorld 截图档 **14.9%**（更多步数时 22.0%），就是对着这类基准说话。没有 OSWorld，Computer Use 只剩演示视频。编码线上 SWE-bench 在 2024 年把分数从个位数拉到可引用；电脑操作线直到 2024 年底仍在低分区间。两条线从此不要用同一个「Agent 已经能干活」来概括。
