---
title: "公开预览、预发布与文档演进"
weight: 20
date: "2026-10-22T00:00:00+08:00"
description: "公开预览、预发布与文档演进"
materialType: "资料阅读与个人分析"
---

## 先固定研究对象

本轮看到产品页为全球 Public Preview，桌面下载覆盖 Apple Silicon Mac 与 64 位 Windows，另有源码启动的 Web 入口。公开可用和稳定版本应分别记录。

截至本轮读取，GitHub 顶部发布为 **v0.2.1-rc.2**，标签 `dsh-v0.2.1-rc.2`，2026-10-17，提交 `687f282`，明确标为 Pre-release。该版本加入 DeepSeek-V4.1-Flash-1017 与可配置的 DeepSeek Search / Fetch API。

发布历史还说明：早期排程是可选插件，较新的发布已将 Automation 纳入 Web 的 Host 服务。当前指南也按内置功能介绍。因此不能沿用旧演示里“先启用定时插件”的说法，推断当前默认仍未提供调度。

我把标签、滚动文档和桌面包分开记录：文档所述实现不自动代表任意旧安装包都已升级，后续实验先保存实际版本与 Profile。

原始资料：[v0.2.1-rc.2](https://github.com/deepseek-ai/deepseek-harness/releases/tag/dsh-v0.2.1-rc.2)；[DeepSeek Harness Releases](https://github.com/deepseek-ai/deepseek-harness/releases)；[Scheduled reminders](https://deepseek-harness.github.io/deepseek-harness/en/guide/schedule)。资料日期与性质见 [资料索引](../../references/)，动态页面按本轮读取内容记录。
