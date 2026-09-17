---
title: "Claude Opus 4.6（材料）"
linkTitle: "材料"
weight: 10
date: 2026-09-17
description: >
  按 2026-02-05 官方公告转述：长程 agentic 任务、1M 上下文 beta、agent teams、compaction。
---

主要出处：Anthropic，2026-02-05，[Claude Opus 4.6](https://www.anthropic.com/news/claude-opus-4-6)。本页不复制公告全文。

---

## 公告说了什么

- **规划与长程**：原文写它「plans more carefully」，并且能**维持更长的 agentic 任务**；可在更大的代码库里可靠运行，具备自我纠错的代码审查与调试能力。
- **上下文**：Opus 级**首次提供 1M token 上下文**（beta）。
- **Claude Code 的 agent teams**：多智能体组队成为产品内的一等能力，而不是应用层自己搭的拓扑。
- **API 侧**：新增 **compaction**（自主压缩上下文以跑更长任务）、**adaptive thinking**、以及 effort 档位控制。

## 厂商自报的基准

公告声称在 Terminal-Bench 2.0 上取得最高分，HLE 领先，GDPval-AA 上超出 GPT-5.2 约 144 Elo。这些均为**厂商自报**，评测口径随公告一并给出，时间线按主张记，不作独立结论。

## 当时不是什么

不是新世代模型名称的换代，也不是循环语义的变化。它改的是**核能维持多久、能同时开几条线**——这两件事此前主要靠应用层的上下文管理与多进程编排来解决。
