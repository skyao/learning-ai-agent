---
title: "OpenAI Agents SDK 2026（材料）"
linkTitle: "材料"
weight: 10
date: 2026-09-17
description: >
  按 2026-04-15 release notes 与官方公告转述：harness 与 compute 分离、Manifest、权限、快照续跑。
---

主要出处：OpenAI，2026-04-15，[openai-agents-python v0.14.0 release notes](https://github.com/openai/openai-agents-python/releases/tag/v0.14.0)；同日 OpenAI 官方论坛的公告帖（标题即「The next evolution of the Agents SDK」）。官方博客页 `openai.com/index/the-next-evolution-of-the-agents-sdk/` 对本机不可访问，本页按上述两处转述。

---

## 两层怎么分

公告的措辞是：演进后的 SDK 给模型一个**强 harness**——指令、工具、审批、追踪、交接、续跑记账，以及 Codex 式 agent 使用的那种模型行为；**sandbox 提供 compute**——文件、命令、包、产物与隔离。两层可以跑在同一台机器上，也可以分开跑，以获得更好的隔离、持久性与安全性。

公告给出的安全理由值得记：**这种分离让凭证与编排留在模型生成代码运行的环境之外。**

## Manifest：把工作区变成可移植描述

新增 **Manifest** 抽象，用来描述 Agent 的工作区——暂存本地文件、克隆仓库、创建输出目录、挂载对象存储、挂 Git 仓库。官方说它让同一套流程更容易跨供应商与环境迁移。

## 权限

文档写明：可以定义 sandbox 用户、把文件权限附着到 Manifest 条目上、让面向模型的工具以指定用户运行；底层映射到标准 Unix 文件权限。给出的例子是：模型对 `dataroom/` 只读，同时保留对 `output/` 的写权限。

## 续跑

内置快照与再水化（snapshotting and rehydration）：SDK 可以在一个全新的沙箱里恢复会话，从上次保存的状态继续，而不是从头开始。

## 沙箱供应商

release notes 列出：本地与容器的 `UnixLocalSandboxClient`、`DockerSandboxClient`；托管侧为 Blaxel、Cloudflare、Daytona、E2B、Modal、Runloop、Vercel，另有 bring-your-own 选项。

## 时间线要分清

- 2026-04-15 发布的是 **Python 版**（v0.14.0）。TypeScript 侧的 sandbox 相关条目最早出现在 5 月的版本里，所以「当时只有 Python」成立，「TypeScript 计划中」这一说法只有二手来源。
- 这是[2025 年 3 月那版](../../../2025/agents-sdk/)的演进，不是新框架。2025 年的条目写的是编排与 tracing，这一版写的是执行环境。
