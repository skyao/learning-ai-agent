---
title: "Muse Wonder：Active Memory 与 Active Focus"
linkTitle: "Muse Wonder 与长期任务"
weight: 100
date: 2026-10-21
description: >
  解读 10 月 12 日模型公告，区分跨会话记忆、持续执行和 Muse 应用开放状态
aliases:
  - /agents/personal/muse/updates/muse-wonder/
materialType: "官方资料笔记"
---

来源：[Muse Wonder: A Frontier Model For Personal & Professional AI Agents](https://research.meta.ai/blog/muse-wonder)  
作者 / 机构：Meta AI Research，页面未单独署名个人作者  
原文日期：2026-10-12  
中文对照：[Meta 发布 Muse Wonder 系列旗舰 AI 模型](https://www.ithome.com/1/012/138.htm)，IT之家，远洋，2026-10-13  
整理日期：2026-10-21  
材料性质：模型公告阅读笔记，能力描述为官方声明

----

## 原文要点

Meta 发布 Muse Wonder 和 Wonder Full。Active Memory 强调跨对话携带重要信息并主动取回相关细节；Active Focus 强调遇阻时尝试其他路径、适应变化并在重要动作前确认。公告当天开放 API 与 Muse Code 等指定入口，对 Muse 应用则称将随后接入、先向订阅用户推出。

## 我的理解：记忆与持续推进分别落在哪里

Active Memory 让我关注从历史到当前上下文的链路：哪些信息被保存，事实更新后如何消除冲突，任务运行时如何选择相关内容。公告描述了能力方向，尚不足以确定存储、检索和遗忘机制。

Active Focus 则让我关注模型与运行时的分工。模型需要理解阻碍和约束变化，运行时还要保留任务状态、返回工具错误并支持恢复。遇阻后反复调用同一个工具，是否真的在推进目标，需要从实际结果判断。

| 能力 | 我想验证的问题 | 需要留下的证据 |
| --- | --- | --- |
| Active Memory | 跨会话使用偏好，随后更新它，能否始终使用适用的新信息？ | 原始输入、召回结果、修正后的任务结果 |
| Active Focus | 工具不可用或约束变化后，能否调整路径或准确交回用户？ | 错误、计划变化、有效进展与停止原因 |

这些是我的后续实验方向，本轮没有新增结果。记忆准确与持续推进需要分别验证，再观察它们如何共同影响一项长期任务。

## 当前保留的问题

我尚未核验当前 Muse 账号使用的模型和路由。公告当天的 API / Code 开放与 Muse 应用后续接入也有时间差，引用能力变化时需要保留入口和版本条件。

进一步阅读：[模型卡中的评估口径](../wonder-model-card/)。
