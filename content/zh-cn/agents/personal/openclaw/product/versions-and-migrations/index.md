---
title: "版本与文档快照：稳定发布、预发布和迁移分开记录"
weight: 20
date: "2026-10-21"
description: "版本与文档快照：稳定发布、预发布和迁移分开记录"
materialType: "官方资料阅读与个人分析"
---

资料：[GitHub Releases](https://github.com/openclaw/openclaw/releases)、[Automations 发布说明](https://docs.openclaw.ai/releases/2026.8.1/automations-and-scheduling)、[Heartbeat migration](https://docs.openclaw.ai/gateway/heartbeat)。阅读：**2026-10-21**。

## 本轮版本记录

本轮 Releases 页面将 **2026.10.5** 标为 Latest，显示发布于 **10 月 18 日**；顶部另有 **2026.10.10-beta.3**，显示 **10 月 21 日**发布并标为 Pre-release。版本名中的日期片段不直接等于实际发布日期。[发布记录](https://github.com/openclaw/openclaw/releases)

预发布说明提到升级恢复、Windows 初始化、后台完成事件和工具目录刷新等修复。我用这些条目寻找运行平台问题，不将它们视为当前所有部署都存在同一故障。

## 一项重要演进：Heartbeat 迁移

当前官方迁移页已将监控作为普通自动化作业管理，Doctor 负责转换旧配置、历史和工作状态；失败时保留诊断，不能只删旧文件了事。[当前迁移说明](https://docs.openclaw.ai/gateway/heartbeat)

2026.8.1 的 [版本说明](https://docs.openclaw.ai/releases/2026.8.1/automations-and-scheduling)也记录了 Automations 命名及旧输入迁移。旧教程里的 `HEARTBEAT.md` 用法需要带版本阅读，不能继续当成当前主流程。

## 我怎样约束后续实验

动态文档可能早于或晚于某个安装包。实际实验会固定精确版本、提交、插件版本与配置，并在运行前检查命令存在和有效策略。

中文页面也可能与英文有时间差，具体例子见 [中英文阅读](../../practice/external-research/)。我会保存差异，不把两种语言的所有段落拼成一个当前实现。

对自己的平台，这也是发布管理问题：程序、状态模式、插件和文档共同决定可复现性。升级成功应当由业务回归与状态校验共同确认。
