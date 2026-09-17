---
title: "GPT-5.6 家族（材料）"
linkTitle: "材料"
weight: 10
date: 2026-09-17
description: >
  按 GitHub Changelog 与平台模型文档转述：三档定位、共同能力、105 万上下文、发布节奏。
---

主要出处：GitHub Changelog，2026-07-09，[OpenAI's GPT-5.6 Sol, Terra and Luna are now available in GitHub Copilot](https://github.blog/changelog/2026-07-09-openais-gpt-5-6-sol-terra-and-luna-are-now-available-in-github-copilot/)；平台模型文档（Azure AI Foundry）标注 `gpt-5.6-sol / terra / luna (2026-07-09)`。OpenAI 官网对本机不可访问，本页按上述两处一手替代来源转述。

---

## 三档怎么分

- **Sol** —— 家族最高推理上限。GitHub 的表述是「best for complex reasoning over large codebases and **demanding, long-running agentic work**」。
- **Terra** —— 均衡默认档。
- **Luna** —— 最低成本的轻量档。另有 -pro 变体。

## 全家族共同具备的能力

平台模型文档的能力表显示，**三个档位全部支持**：推理、Responses API、**多 Agent 编排（预览）**、函数与并行工具调用、**computer use**，以及推理强度与详细度控制。**上下文窗口 1,050,000**（输入 922,000 / 输出 128,000）。

需要更正一条二手流传：多个来源称上下文约 150 万 token，平台文档与第三方模型索引均为 1,050,000。

## 发布节奏

公开可用日是 **2026-07-09**。另有二手报道称该模型在 **2026-06-26** 先做了受政府限制的限量预览，但这一条**没有一手来源**，写时间线时须标注为「据媒体报道」。二手还提到 Sol 有协调内部子 Agent 的模式，同样未能核实。

## 当时不是什么

不是单一模型发布，而是一次**档位划分**：把「多 Agent 编排 + computer use + 百万级上下文」从旗舰专属变成家族标配。这是能力下放，不是能力上限的推进——上限由两周后的 [GPT-6 Astra](../../gpt-6-astra/) 接续。
