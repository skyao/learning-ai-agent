---
title: "OpenAI Codex 2025 讲解"
linkTitle: "讲解"
weight: 20
date: 2026-09-15
description: >
  云端运行时吞掉 AgentExecutor：一任务一沙箱，可并行、可开 PR。名字容易和 2021 年搞混。
---

## 当时解决了什么问题

[Claude Code](../../claude-code/) 把循环放在本机终端。Codex 把循环放进隔离云环境：不占本机、可并行、PR 从沙箱开出。Devin 2024 年的「AI 软件工程师」叙事，这里变成 ChatGPT 套餐里的预览入口。专用核心 codex-1 说明应用层反向点菜：要的是能在沙箱里收工的决策核心，不是通用聊天模型。

按定义这 **是** Agent。人下任务、审 PR，循环在云端转。CLI 与云端运行时成对出现，和本机 Claude Code 对台，同属运行时，不是又一个编排库。[前传 Codex](../../../before2022/codex/) 是 2021 年模型；2025 是运行时。同名必须切开。

## 对后续 LLM 与 Agent 的影响

编码运行时形成双侧：终端/本机 vs 云端并行。SWE-bench Verified 继续被刷；[Pro](../../swe-bench-pro/) 与 [Terminal-Bench](../../terminal-bench/) 随即说明「补丁过单测」和「环境收工」不是同一把尺子。分数 ≠ 能接手真实迭代。2026 年身份问题在厂商工作区浮出；Codex 默认 principal 仍是使用者账号。
