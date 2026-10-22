---
title: "OpenClaw 资料索引"
linkTitle: "资料索引"
weight: 70
date: "2026-10-21"
description: "保留中英文资料、原始日期、证据范围与待核实问题"
materialType: "资料索引"
---

本轮检索与阅读截至 **2026-10-21**。以下资料区分官方发布、动态帮助、开源仓库和外部观察。没有账号实测；没有绝对更新日期的页面只记录读取日期，不把阅读日当成发布日期。

## 原始资料与本地笔记

| 日期 / 状态 | 原始资料 | 性质与本地笔记 |
| --- | --- | --- |
| 动态 | [仓库](https://github.com/openclaw/openclaw)、[英文文档](https://docs.openclaw.ai/)、[中文文档](https://docs.openclaw.ai/zh-CN) | 官方入口；[定位](../product/positioning/) |
| 读取 2026-10-21；稳定 2026.10.5 / 预发布 2026.10.10-beta.3 | [Releases](https://github.com/openclaw/openclaw/releases) | 发布日与版本名分开；[版本](../product/versions-and-migrations/) |
| 2026.8.1 版本说明 | [Automations and Scheduling](https://docs.openclaw.ai/releases/2026.8.1/automations-and-scheduling) | 官方版本资料；[迁移](../product/versions-and-migrations/) |
| 动态 | [Architecture](https://docs.openclaw.ai/concepts/architecture) | 官方架构；[Gateway 与 Node](../architecture/gateway-and-nodes/) |
| 动态 | [Sessions](https://docs.openclaw.ai/concepts/session)、[Multi-agent](https://docs.openclaw.ai/concepts/multi-agent) | 官方状态与路由；[会话](../architecture/sessions-and-routing/) |
| 动态 | [Memory](https://docs.openclaw.ai/concepts/memory)、[中文对照](https://docs.openclaw.ai/zh-CN/concepts/memory) | 官方机制及语言差异；[记忆](../architecture/memory-and-dreaming/) |
| 动态 | [Dreaming](https://docs.openclaw.ai/concepts/dreaming) | 官方后台整理；[记忆](../architecture/memory-and-dreaming/) |
| 动态 | [Automations](https://docs.openclaw.ai/automation/cron-jobs)、[How it works](https://docs.openclaw.ai/automation/cron-jobs/how-it-works)、[Heartbeat migration](https://docs.openclaw.ai/gateway/heartbeat) | 官方调度与迁移；[自动化](../architecture/automations/) |
| 动态 | [Models](https://docs.openclaw.ai/concepts/models) | 官方配置；[模型](../models/providers-and-evaluation/) |
| 动态 | [Personal agent benchmark pack](https://docs.openclaw.ai/concepts/personal-agent-benchmark-pack) | 官方仓库 QA；[评估](../models/providers-and-evaluation/) |
| 动态 | [Skills](https://docs.openclaw.ai/tools/skills)、[Browser](https://docs.openclaw.ai/tools/browser) | 官方工具；[技能](../integrations/skills-and-plugins/)、[浏览器](../integrations/browser-and-devices/) |
| 动态 | [Security](https://docs.openclaw.ai/gateway/security)、[Trust boundary](https://docs.openclaw.ai/start/why-openclaw/the-trust-boundary) | 官方适用范围；[信任边界](../security/trust-boundary/) |
| 动态 | [Policy as code](https://docs.openclaw.ai/start/why-openclaw/policy-as-code)、[Exec approvals](https://docs.openclaw.ai/tools/exec-approvals) | 官方策略；[执行审批](../security/execution-policy/) |
| 动态 | [Backups](https://docs.openclaw.ai/install/backups)、[Updating](https://docs.openclaw.ai/install/updating) | 官方运维；[运维阅读](../practice/operations/) |
| 2026-02-19 | [Microsoft Defender 研究](https://www.microsoft.com/en-us/security/blog/2026/02/19/running-openclaw-safely-identity-isolation-runtime-risk/) | 英文原始研究，保留时点；[外部阅读](../practice/external-research/) |
| 初版 2026-03-24；v3 04-04 | [Mind Your HEARTBEAT!](https://arxiv.org/abs/2603.23064) | 研究论文，仅核对摘要与版本；[外部阅读](../practice/external-research/) |

## 证据与版本缺口

本轮为文档与发布资料调研，没有固定提交源码审计或部署实验。滚动文档、发布包和中文翻译可能不完全同步，相关差异见 [版本笔记](../product/versions-and-migrations/)与 [中英文阅读](../practice/external-research/)。

后续要固定版本验证会话隔离、执行端策略、后台记忆、自动化恢复与备份可用性，按 [实践计划](../practice/validation-plan/)保留证据。历史安全文章只提供研究问题，不能替代当前版本测试。
