---
title: "Hermes Agent 资料索引"
linkTitle: "资料索引"
weight: 70
date: "2026-10-22T00:00:00+08:00"
description: "保留中英文资料、原始日期、证据范围与待核实问题"
materialType: "资料索引"
---

本轮检索与阅读截至 **2026-10-22**。以下资料区分官方发布、动态帮助、开源仓库和外部观察。没有账号实测；没有绝对更新日期的页面只记录读取日期，不把阅读日当成发布日期。

## 原始资料与本地笔记

| 日期 / 状态 | 原始资料 | 性质与本地笔记 |
| --- | --- | --- |
| 动态 | [官方产品入口](https://hermes-agent.nousresearch.com/) | Nous Research 官方；[本地笔记](../product/positioning/) |
| 动态 | [官方文档](https://hermes-agent.nousresearch.com/docs/) | 官方概览；[本地笔记](../product/positioning/) |
| 2026-10-21 | [v0.22.3](https://github.com/NousResearch/hermes-agent/releases/tag/v0.22.3) | 官方稳定发布；提交 5b147ab036d；[本地笔记](../product/versions/) |
| 2026-10-15 | [v0.22.2](https://github.com/NousResearch/hermes-agent/releases/tag/v0.22.2) | 官方补丁与已知问题；[本地笔记](../product/versions/) |
| 动态 | [Bot 模式（官方中文）](https://hermes-agent.nousresearch.com/docs/zh-Hans/user-guide/bot-mode) | 官方中文文档；[本地笔记](../architecture/profiles-and-bots/) |
| 动态 | [Profiles（官方中文）](https://hermes-agent.nousresearch.com/docs/zh-Hans/user-guide/profiles) | 官方状态边界；[本地笔记](../architecture/profiles-and-bots/) |
| 动态 | [Persistent Memory](https://hermes-agent.nousresearch.com/docs/user-guide/features/memory) | 官方内建记忆；[本地笔记](../architecture/memory/) |
| 动态 | [Memory Providers](https://hermes-agent.nousresearch.com/docs/user-guide/features/memory-providers) | 官方外部存储接入；[本地笔记](../integrations/delegation-and-providers/) |
| 动态 | [Scheduled Tasks](https://hermes-agent.nousresearch.com/docs/user-guide/features/cron) | 官方调度、恢复与投递；[本地笔记](../architecture/goals-and-cron/) |
| 动态 | [Persistent Goals](https://hermes-agent.nousresearch.com/docs/user-guide/features/goals) | 官方持续目标；[本地笔记](../architecture/goals-and-cron/) |
| 动态 | [Subagent Delegation](https://hermes-agent.nousresearch.com/docs/user-guide/features/delegation) | 官方委派与结果投递；[本地笔记](../integrations/delegation-and-providers/) |
| 动态 | [Skills System](https://hermes-agent.nousresearch.com/docs/user-guide/features/skills) | 官方方法复用与安装；[本地笔记](../integrations/skills-and-plugins/) |
| 动态 | [模型配置（官方中文）](https://hermes-agent.nousresearch.com/docs/zh-Hans/user-guide/configuring-models) | 官方主模型与辅助槽位；[本地笔记](../models/providers-and-evaluation/) |
| 动态 | [安全（官方中文）](https://hermes-agent.nousresearch.com/docs/zh-Hans/user-guide/security) | 官方权限与环境变量过滤；[本地笔记](../security/execution-boundary/) |
| 动态 | [中文社区定位说明](https://hermesagent.org.cn/) | 独立中文社区；非 Nous Research 官方；[本地笔记](../practice/source-observations/) |

官方动态文档、稳定发布和不同桌面分发可能不同步；内建记忆与外部 Provider、Profile 与宿主隔离分别理解。中文社区资料仅作来源对照，不作为已验证的上游实现。

本轮没有安装产品、连接个人服务或执行安全测试。实际效果仍需 [实践验证](../practice/validation-plan/)，阶段性认识见 [调研总结](../summary/)。
