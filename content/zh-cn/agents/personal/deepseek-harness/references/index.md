---
title: "DeepSeek Harness 资料索引"
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
| 当前 Public Preview；读取 2026-10-22 | [DeepSeek Harness 产品页](https://www.deepseek.com/en/harness/) | 官方产品定位与演示；[本地笔记](../product/positioning/) |
| 2026-10-17；预发布；687f282 | [v0.2.1-rc.2](https://github.com/deepseek-ai/deepseek-harness/releases/tag/dsh-v0.2.1-rc.2) | 固定版本发布记录；[本地笔记](../product/versions-and-access/) |
| 2026-09 至 10 月；读取 2026-10-22 | [DeepSeek Harness Releases](https://github.com/deepseek-ai/deepseek-harness/releases) | 官方发布历史，注意旧版本与滚动文档差异；[本地笔记](../product/versions-and-access/) |
| 动态中文文档；读取 2026-10-22 | [使用 Web UI](https://deepseek-harness.github.io/deepseek-harness/guide/quickstart) | 官方入门，前提是服务器已运行；[本地笔记](../product/positioning/) |
| 动态英文参考；读取 2026-10-22 | [Architecture](https://deepseek-harness.github.io/deepseek-harness/en/reference/) | 官方插件、Profile 与运行时组合说明；[本地笔记](../architecture/composition-and-lifecycle/) |
| 动态参考；读取 2026-10-22 | [Agent lifecycle](https://deepseek-harness.github.io/deepseek-harness/en/reference/agent-lifecycle) | 官方生命周期与事件语义；[本地笔记](../architecture/composition-and-lifecycle/) |
| 动态参考；读取 2026-10-22 | [Sessions](https://deepseek-harness.github.io/deepseek-harness/en/reference/subsystems/session) | 官方持久化会话模型；[本地笔记](../architecture/sessions-and-memory/) |
| 动态指南；默认未启用；读取 2026-10-22 | [Memory MCP](https://deepseek-harness.github.io/deepseek-harness/en/guide/mcp-memory) | 官方第三方记忆接入示例；[本地笔记](../architecture/sessions-and-memory/) |
| 动态参考；读取 2026-10-22 | [Host-wide Schedule](https://deepseek-harness.github.io/deepseek-harness/en/reference/subsystems/schedule) | 官方调度存储、投递与故障语义；[本地笔记](../architecture/schedules-and-goals/) |
| 动态指南；读取 2026-10-22 | [Scheduled reminders](https://deepseek-harness.github.io/deepseek-harness/en/guide/schedule) | 当前 Web Automation 入口；[本地笔记](../product/versions-and-access/) |
| 动态参考；读取 2026-10-22 | [Same-session goals](https://deepseek-harness.github.io/deepseek-harness/en/reference/subsystems/goal) | 官方目标状态与继续执行授权；[本地笔记](../architecture/schedules-and-goals/) |
| 动态指南；读取 2026-10-22 | [Providers](https://deepseek-harness.github.io/deepseek-harness/en/guide/providers) | 官方模型路由与凭证配置；[本地笔记](../models/routing-and-cost/) |
| 动态参考；读取 2026-10-22 | [Skills](https://deepseek-harness.github.io/deepseek-harness/en/reference/subsystems/skills) | 官方技能发现与作用域；[本地笔记](../integrations/skills-and-plugins/) |
| 实验性自定义市场；读取 2026-10-22 | [Plugin market](https://deepseek-harness.github.io/deepseek-harness/en/guide/plugin-market) | 官方扩展发现与安装机制；[本地笔记](../integrations/skills-and-plugins/) |
| 动态英文参考；读取 2026-10-22 | [Permission Presets](https://deepseek-harness.github.io/deepseek-harness/en/reference/subsystems/permission-presets) | 官方权限组合与实际策略的关系；[本地笔记](../security/presets-approvals-and-sandbox/) |
| 动态中文参考；读取 2026-10-22 | [权限预设](https://deepseek-harness.github.io/deepseek-harness/reference/subsystems/permission-presets) | 与英文参考交叉阅读；[本地笔记](../security/presets-approvals-and-sandbox/) |
| 动态参考；读取 2026-10-22 | [User Approval](https://deepseek-harness.github.io/deepseek-harness/en/reference/subsystems/approval) | 官方单次审批与审计语义；[本地笔记](../security/presets-approvals-and-sandbox/) |
| 动态参考；读取 2026-10-22 | [Sandboxing](https://deepseek-harness.github.io/deepseek-harness/en/reference/subsystems/sandbox) | 官方操作系统后端及限制；[本地笔记](../security/presets-approvals-and-sandbox/) |
| 动态指南；读取 2026-10-22 | [Public deployments](https://deepseek-harness.github.io/deepseek-harness/en/guide/public-deployments) | 官方 Web 网络暴露边界；[本地笔记](../security/deployment-and-data/) |
| master 滚动文件；读取 2026-10-22 | [SAFETY.md](https://github.com/deepseek-ai/deepseek-harness/blob/master/SAFETY.md) | 官方实验阶段与未审计说明；[本地笔记](../security/deployment-and-data/) |
| v1 2026-08-17；v2 2026-08-18 | [Security Assessment of DeepSeek Harness with A.I.G](https://arxiv.org/abs/2608.16393) | 外部研究预印本；本轮仅读摘要，未复现实验；[本地笔记](../practice/source-observations/) |

发布标签与滚动文档分别记录；代码仓库可追溯不等于本轮已做源码审计。外部安全论文仅作为摘要阅读，不能把其旧版本实验结果外推到当前预发布。

本轮没有安装产品、连接个人服务或执行安全测试。实际效果仍需 [实践验证](../practice/validation-plan/)，阶段性认识见 [调研总结](../summary/)。
