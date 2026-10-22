---
title: "从 Spark 到 Task：开放条件与产品入口演进"
linkTitle: "开放与 Task 模式"
weight: 20
date: 2026-10-21
description: >
  按时间记录 Spark 的迭代，并区分个人账号、订阅和具体工具的可用范围
materialType: "官方动态资料阅读笔记"
---

资料范围：Google 发布文章、更新日志和当前帮助文档；检索与阅读日期：**2026-10-21**。帮助页没有可核实的绝对更新时间时，我只记录本轮读取日期。

## 我的时间记录

| 原始日期 | 公开资料中的变化 | 我的归档方式 |
| --- | --- | --- |
| 2026-05-19 | Spark 发布，计划先向美国 Ultra 用户推出 Beta | 作为产品起点，见 [发布笔记](../introducing-spark/) |
| 2026-06-30 | Mac Beta、更多应用、自定义 MCP 和主题监控 | 保留当时推出与计划中的区别，见 [6 月官方更新](https://blog.google/innovation-and-ai/products/gemini-app/gemini-spark-updates-june-2026/) |
| 2026-07-14、07-17 | 日志记录远程 Mac、共享文件操作和初始化引导等更新 | 见 [官方更新日志](https://support.google.com/gemini/answer/17171264?hl=en)；本轮可见最新条目为 7 月 17 日 |
| 2026-07-30 | 本地 Chrome 接入；向另外 160 多个国家和地区的 Pro 用户扩展 | 见 [7 月官方更新](https://blog.google/innovation-and-ai/products/gemini-app/gemini-spark-updates-july-2026/)；Chrome 当时有独立地区条件 |
| 2026-10-12 | 9to5Google 观察到 Android 的 Chat / Task 新入口 | 属第三方界面观察，见 [外部记录](../../practice/external-observations/) |
| 本轮读取的当前帮助 | 官方 FAQ 明确解释 Spark 更名 Task，已有任务和计划保留 | 见 [当前官方帮助](https://support.google.com/gemini/answer/17094507?hl=en)，不能据此反推所有端同时切换的日期 |

这条时间线让我避免两个误读：旧日志的最后一条日期不能证明产品此后没有变化；更名与入口合并也不足以证明后端已经重写或产品终止。

## 当前入口的条件

当前 Task 帮助列出：18 岁以上、个人 Google 账号、AI Pro / Ultra、Keep Activity 开启及选择加入 Personal Intelligence；工作和学校账号暂不支持。地区仍排除 EEA、尼日利亚、瑞士和英国，入口包括移动端、Mac 和网页。[英文帮助](https://support.google.com/gemini/answer/17094507?hl=en) / [中文对照](https://support.google.com/gemini/answer/17094507?hl=zh-Hans)

这是一组同时成立的条件。我不能用“购买了 Pro”解释自己一定能看到所有工具，也不能由文档提到 Workspace 应用，推定企业 Workspace 账号已经能够使用这个个人任务入口。

## 工具开放范围需要继续逐项核对

本地 Chrome 的条件见 [设备接入笔记](../../integrations/browsers-and-mac/)，自定义 MCP 的美国与英语限制见 [MCP 笔记](../../integrations/custom-apps/)。这些工具条件比 Task 本身更窄。

后续实测时，我会记录账号类型、地区、应用版本、系统语言、订阅及工具页面实际状态。只有把这些条件固定下来，才有可能区分入口未开放、授权缺失和真实执行失败。
