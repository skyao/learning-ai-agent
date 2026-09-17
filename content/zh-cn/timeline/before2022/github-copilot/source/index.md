---
title: "GitHub Copilot 技术预览（材料）"
linkTitle: "材料"
weight: 10
date: 2026-09-14
description: >
  按 2021 年公开材料转述 Copilot 技术预览：结对程序员、Codex、IDE 补全。
---

GitHub Copilot 没有对应一篇研究论文。这里转述的是 **2021 年技术预览当时的公开表述**，不以 2022 年正式商用、2023 年 Copilot X 与 Chat 回填。模型机制与 HumanEval 数字以 [Codex 论文](../../codex/paper/) 为准；那篇写明：独立的生产版本驱动 Copilot。

主要出处：

- GitHub CEO Nat Friedman，2021-06-29，[Introducing GitHub Copilot: your AI pair programmer](https://github.blog/news-insights/product-news/introducing-github-copilot-ai-pair-programmer/)
- 同期产品页与新闻稿中的功能描述（VS Code 扩展、候选项循环、技术预览名额有限）
- OpenAI，2021-08-10 前后，将 Codex 以 API 私有测试形式提供时的产品说明（明确 Codex 即驱动 Copilot 的模型）

这里不复制公告全文。

---

## 产品主张（2021-06-29）

GitHub 发布 GitHub Copilot 技术预览，自称 **AI pair programmer（AI 结对程序员）**，帮助写出更好的代码。它从你正在写的代码里抽取上下文，建议**整行或整个函数**。公告列出的用处：更快发现另一种解法、写测试、探索新 API，而不必专门去网上改检索词。输入时它适应你的写法，以便更快完成工作。

与 OpenAI 合作，由 **OpenAI Codex** 驱动。公告称 Codex 对人如何使用代码有广泛知识，代码生成上明显强于 GPT-3，部分因为训练数据里公开源代码的浓度高得多。预览对多种框架与语言可用，当时写明**尤其适合** Python、JavaScript、TypeScript、Ruby、Go。技术预览名额有限，需申请。

## 当时的交互形态

同期公开描述与报道一致的部分：

- 住在编辑器里（技术预览阶段以 Visual Studio Code 为主），不是独立聊天窗口。
- 边写边建议；可在多个建议间循环，接受或拒绝。
- 例子包括：根据上下文写出导入推文、画散点图、取评分等函数级片段。GitHub 强调它不只是背诵见过的代码，而是分析已写部分再生成匹配的新代码。
- 人始终在环：建议出现在光标处，由开发者决定是否采纳。没有「给一个仓库级目标、自己改到测试通过」的产品叙事。

## Codex 侧的产品说明（约一个月后）

OpenAI 将 Codex 以 API 私有测试放出时写明：这是把自然语言译成代码的系统，也是与 GitHub 合作、一个月前上线的 Copilot 所用模型。Codex 是 GPT-3 的后代；训练数据含自然语言与公开来源（含公开 GitHub 仓库）中的数十亿行代码。Python 最强，并称精通十余种语言（JavaScript、Go、Perl、PHP、Ruby、Swift、TypeScript、Shell 等）。相对 GPT-3 约 4KB 的上下文，Codex 对 Python 代码给出约 **14KB** 记忆，可纳入三倍以上上下文。API 初期免费；用途举例包括转译、解释代码、重构——并称只触及表面。

GPT-3 的主技能是用自然语言回应自然语言，对世界的影响经过读者的头脑；Codex 在保留大量自然语言理解的同时**产出可运行代码**，因而可以用英语向带 API 的软件下命令。

这些是 2021 年的产品句。评测数字、失败模式、不安全代码比例不在公告里，而在 [Codex 论文](../../codex/paper/)。

## 当时明确不是什么

材料没有声称：自主完成 issue、在终端多步执行、调用任意工具、无人盯着把任务做完。技术预览是编辑器补全。GitHub 计划基于它做商业产品；那是路线图，不是 2021-06 已交付的形态。
