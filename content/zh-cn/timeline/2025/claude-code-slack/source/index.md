---
title: "Claude Code in Slack（材料）"
linkTitle: "材料"
weight: 10
date: 2026-09-17
description: >
  按 2025-12-08 公告转述：@Claude 触发、自动选仓、线程回帖、beta 范围与适用条件。
---

主要出处：Anthropic，2025-12-08，[Claude Code and Slack](https://claude.com/blog/claude-code-and-slack)。本页不复制公告全文。

---

## 当时说了什么

- 状态写成 **beta 研究预览**：公告原话是「Now in beta as a research preview」。
- **触发**：在 Slack 里 @Claude，它先判断这条消息是不是编码任务；是则**自动新建一个 Claude Code 会话**。也可以手动要求按编码任务处理。
- **上下文与选仓**：Claude 采集**最近的频道与线程消息**喂给会话，并据此**自动选择在哪个仓库上跑**——范围是你在 Claude Code on the web 上已授权的仓库。
- **回帖与交付**：会话推进过程中把状态**回帖到 Slack 线程**；完成后给出完整会话链接（可审改动）和**开 PR 的直链**。

## 适用条件

需要在 Slack 工作区安装 Claude app（Slack App Marketplace）并用 Claude 账号认证；还需要**有 Claude Code on the web 的访问权**，任务路由到那里执行。这是既有 Claude app for Slack 的扩展，不是新的执行面。

## 当时不是什么

不是无人值守的团队 Agent，也不是新的沙箱或权限模型——公告没有提到执行面、停止语义或权限的任何变化。委派从终端挪进聊天流，执行仍落在 Claude Code on the web 既有的沙箱与权限里。频道可见性、多人转向同一会话，要到 2026 [Claude Tag](../../../2026/claude-tag/) 才成为产品主张。
