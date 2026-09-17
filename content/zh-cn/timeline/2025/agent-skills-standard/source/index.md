---
title: "Agent Skills 标准（材料）"
linkTitle: "材料"
weight: 10
date: 2026-09-17
description: >
  按开放标准规范与 Anthropic 公告转述：SKILL.md 格式约束、发现/激活/执行三阶段、客户端登记表。
---

主要出处：Anthropic 工程博客，[Equipping agents for the real world with Agent Skills](https://www.anthropic.com/engineering/equipping-agents-for-the-real-world-with-agent-skills)（2025-10-16 原文，页内更新注明 **2025-12-18 发布为开放标准**）；规范与客户端登记表：[agentskills.io/specification](https://agentskills.io/specification)、[agentskills.io/clients.md](https://agentskills.io/clients.md)；仓库 [agentskills/agentskills](https://github.com/agentskills/agentskills)（Apache-2.0，仓库建立于 2025-12-16）。本页不复制规范全文。

---

## 格式规定了什么

- 一个 skill 就是**一个目录**，至少含 `SKILL.md`。
- `SKILL.md` 必须有 YAML front matter：`name`（必填，≤64 字符，小写字母、数字、连字符）、`description`（必填，≤1024 字符）。可选 `license`、`compatibility`、`metadata`、`allowed-tools`（标注为实验性）。
- **加载分三阶段**：发现（启动时只加载名称与描述）→ 激活（任务匹配描述时才把完整指令读进上下文）→ 执行（按指令操作，可执行随包脚本或加载引用文件）。

这套结构与 2025-10 发布时一致，**格式本体未变**，变的是归属与可移植性。

## 采纳情况

规范附的客户端登记表列出数十家已支持或声明支持的产品，包括 OpenCode、Cursor、Amp、Letta、Goose、GitHub Copilot、VS Code、Gemini CLI、Kiro、Roo Code、OpenHands、JetBrains Junie、Tabnine、Qodo、Spring AI、Snowflake Cortex Code、Databricks Genie Code、Mistral Vibe、Factory、Pulumi Neo、OpenClaw、Nous Research Hermes、ChatGPT 与 Codex、Claude 与 Claude Code 等。

## 当时的模糊处

**谁在维护标准，官方表述并不明确**：公告只说「最初由 Anthropic 开发、作为开放标准发布、对更广泛生态开放贡献」，没有点名治理主体；仓库挂在 `agentskills` 组织下。规范页也没有标版本号或发布日期。写治理时要留这个空白，别替它补。
