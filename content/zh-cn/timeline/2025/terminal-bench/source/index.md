---
title: "Terminal-Bench（材料）"
linkTitle: "材料"
weight: 10
date: 2026-09-15
description: >
  按 2025-05-19 上线时的公开说明转述：Docker 里的 CLI 任务与状态判定。
---

本页转述 **2025-05-19 基准公开上线时说了什么**。2.0 / 更难后继版本与 2026 年论文，不写成当天已有。

主要出处：Stanford / Laude Institute 的 Terminal-Bench 发布（约 80–100 道 beta 任务）；参考 harness **Terminus**。后继论文：[arXiv:2601.11868](https://arxiv.org/abs/2601.11868)（2026 年才挂，仅作对照，不回填 5 月数字）。本页不复制全文。

---

## 主张

多数编码基准给模型一段上下文、要一段答案。Terminal-Bench 把 agent 放进**一次性 Docker 命令行环境**：自然语言指令、真实 shell、读命令输出、改到时间上限。成功与否由脚本检查**容器最终状态**，不评模型说话漂不漂亮。任务方向包括：编译仓库、训小模型、配服务器、修坏掉的系统。

同时放出 **Terminus**：尽量薄的参考脚手架，用来比较不同底层模型，而不是绑死某一家商业编码 Agent。后来的评测说明里，Claude Code、Codex CLI、Gemini CLI、OpenHands 等都可以接到同一套 Harbor 任务格式上——那是后续生态，不是 5 月 19 日已经刷完的榜。

## 当时不是什么

不是 SWE-bench 的替代（issue + 补丁 + 单测仍是另一张考卷）。也不是宣称「终端 Agent 已经过半」。早期外部评测的方向是：强商业运行时好于裸 Terminus，但即便最强也远未做完。
