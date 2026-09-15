---
title: "Claude Cowork（材料）"
linkTitle: "材料"
weight: 10
date: 2026-09-15
description: >
  按 2026-01-12 研究预览当时公开说了什么：文件夹权限、非编码任务、Max + macOS。
---

本页转述 **2026-01-12 研究预览当时公开说了什么**。现网产品页已演进出网页/移动端、定时任务、内置浏览器和更多套餐，那些不写进「当天」。

主要出处：Anthropic / Claude 当日公告（口号 *Introducing Cowork: Claude Code for the rest of your work*）；同期报道 [TechCrunch](https://techcrunch.com/2026/01/12/anthropics-new-cowork-tool-offers-claude-code-without-the-code/)、[The Verge](https://www.theverge.com/ai-artificial-intelligence/860730/anthropic-cowork-feature-ai-agents-claude-code)。中文说明（后出，只作对照）：[开始使用 Claude Cowork](https://support.claude.com/zh-CN/articles/13345190-%E5%BC%80%E5%A7%8B%E4%BD%BF%E7%94%A8-claude-cowork)、[什么是 Claude Cowork](https://academy.claude.com/zh-CN/courses/introduction-to-claude-cowork/what-is-cowork)。

---

## 产品主张（当天）

Claude Code 原为终端里的软件工程循环。内部和外部用户很快拿它做几乎所有事，不只写代码。Cowork 被写成同一条能力的简化入口：**不必开终端，给 Claude 本机上的一个文件夹**，它就可以在该文件夹里读、改、新建文件。任务用日常语言交代；Claude 做计划、逐步执行，重大动作前询问。已有 connectors 可接外部信息；需要浏览时，可与 Claude in Chrome 配对。

公告自己举的例子：整理下载目录、从一堆截图做出费用表、从零散笔记写出初稿。架构上与 Claude Code 共用 agent 循环（报道写 Claude Agent SDK），差别在表面和任务域：知识工作，不是仓库。

## 范围与警告（当天）

研究预览。当时可立刻用的是 **Claude Max + macOS 桌面应用**；侧栏点 Cowork。其他套餐走等待名单。公告写明计划扩到 Windows 与跨设备同步，那是路线，不是 1 月 12 日已交付。

风险写进发布说明本身：指令含糊时可能误删文件；提示注入不是新问题，但「第一次用会动文件的工具」会把风险送到非开发者面前。建议权限收在单个文件夹，并自己留备份。

## 当时不是什么

不是 Slack 里的团队员工（那是半年后的 [Claude Tag](../../claude-tag/)）。不是自托管 Gateway（同月爆红的是 [OpenClaw](../../openclaw/)）。不是网页版 Chat 里新建一个附件按钮——权限模型是**指定本地文件夹**。当天也不是全套餐、全平台可用。
