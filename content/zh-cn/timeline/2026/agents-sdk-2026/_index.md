---
title: "OpenAI Agents SDK（2026 更新）"
linkTitle: "[框架]Agents SDK 2026"
分类: "框架"
标签:
  - "工程化"
weight: 50
date: 2026-09-17
description: >
  2026-04-15。把 harness 与 compute 分离：Agent 拿到可定制的工作区，沙箱供应商可插拔，快照让会话在新沙箱里续跑。
---

OpenAI，2026-04-15（v0.14.0）。[2025 年的 Agents SDK](../../2025/agents-sdk/) 是编排库；这一版把 harness（指令、工具、审批、追踪、交接、续跑记账）与 sandbox（文件、命令、包、产物、隔离）显式拆成两层，并让沙箱供应商可插拔。Python 先行。

1. [材料](./source/) — 按 release notes 与官方公告转述：两层怎么分、Manifest、权限、快照续跑、供应商清单。
2. [讲解](./explanation/) — 库开始内置「环境」这个概念；与同期 Anthropic、Google 同向。

Release notes：[v0.14.0](https://github.com/openai/openai-agents-python/releases/tag/v0.14.0)。
