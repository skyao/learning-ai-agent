---
title: "IDE / CLI Agent（材料）"
linkTitle: "材料"
weight: 10
date: 2026-09-15
description: >
  按 2025 年中产品形态转述：编辑器与终端里的可委派循环。
---

本页转述 **2025 年中前后** Cursor、GitHub Copilot、Google Gemini 等编码表面公开呈现的 Agent 模式，不把 2024 上半年的 Tab 补全写成已经等于这些模式。

没有单一出处。可核的方向：

- **Cursor Agent / Composer 一类：** 在编辑器里对多文件任务委派，模型改仓库、跑命令，人看 diff。相对 2024 上半年的补全与单轮编辑，循环明显加长。
- **GitHub Copilot Agent Mode：** 在 Copilot 产品里从「建议下一行」扩到可在工作区执行多步任务（具体开关名随版本变，主张是 agentic 编码）。
- **Gemini CLI 等终端 Agent：** 把 Google 的编码核接到命令行，与 Claude Code / Codex CLI 同一品类。

共同形态：人在 IDE 或终端里发起，Agent 读项目、改文件、用工具，停下来等人。全自主是选项，不是唯一路径。

## 当时不是什么

不是某一家「发明了 IDE」。不是 A2A 级的多 Agent 企业总线。也不是无人盯着做完跨天跨人的任务。
