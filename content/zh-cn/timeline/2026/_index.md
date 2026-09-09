---
title: "2026年"
linkTitle: "2026年"
weight: 70
date: 2026-09-09
description: >
  2026：团队与基础设施。瓶颈从模型外移到身份、沙箱和调度。
---

**一句话主线：** 2026 年，个体编码 Agent 已经是开发者日常；新问题是 **团队里那一个 Agent 用谁的权限、在谁的频道里干活、沙箱如何跟得上异步委派**。Claude Tag 把同一套云端沙箱引擎放进 Slack，用组织级 Agent Identity 而不是借用某个员工的账号；Aries / SpecBox 则从云基础设施侧证明：执行路径和沙盒调度，已经和模型智力同样限制能做什么。

上一页：[2025](../2025/)。深挖：[Claude Tag](/data/2026/claude-tag/)、[Aries](/data/2026/rethinking-ai-cloud-infrastructure/)、[SpecBox](/data/2026/specbox-speculative-sandbox-scheduling/)。今天是 2026-09，这一页写的是上半年到初秋已经发生的事，不是全年盖棺。

## 和 LLM 的关系

模型仍在涨（Tag 默认 Opus 4.8 一类前沿核），但 **Agent 史的主矛盾外移了**。

- **决策核够用到可以暴露系统问题。** 当循环能跑数小时、能开 PR、能查数仓，瓶颈变成：凭证能不能进沙箱、出站要不要白名单、空闲后工作区是否还在、频道里谁有权转向。这些不是更多 CoT 能解决的。
- **同一引擎，多个表面。** Claude Tag 文档写明：频道里的工作跑在与 Claude Code on the web 相同的短暂沙箱上。模型层没有换一种 Agent 物理，产品层换了「谁在委派、谁看得见」。
- **推理/编码模型继续分化，但不再单独定义品类。** 2025 是运行时之年；2026 是运行时被嵌进组织工作流之年。LLM 提供决策，组织提供 scope、bundle、审计。

## 里程碑

| 时间 | 事件 | 类型 | 为什么记 |
| --- | --- | --- | --- |
| 2026-06-23 | [Introducing Claude Tag](/data/2026/claude-tag/introduction/introducing-claude-tag/) | 工程化 / 范式更替 | Slack 里的共享 AI 队友：`@Claude` 委派，线程即 session，记忆跟频道走。内部产品团队约 65% 代码来自内部版 Tag（厂商自报，记作影响力信号而非独立审计） |
| 2026-06-24 | [Agent identity 博文](/data/2026/claude-tag/mechanism/agent-identity-access-model/)（Noah Zweben） | 范式更替 | 写清为什么「act as the user」在异步、多驾驶员场景会崩；公开频道共享工作区身份，私有频道隔离；提到未来 JIT 凭证 |
| 2026 同期 | Tag 机制文档：How it works / Agent Proxy / 数据生命周期 | 工程化 | 沙箱不持凭证、边界注入、出站白名单、session 空闲释放。学习入口：[机制栏](/data/2026/claude-tag/mechanism/) |
| 2026-07-31 | [Aries](/data/2026/rethinking-ai-cloud-infrastructure/)（*Rethinking AI Cloud Infrastructure*） | 首证 / 警示 | 测量向：Agent 云负载不是传统微服务。问题重构先于新调度器——执行路径、存储、隔离被重新定义 |
| 2026-08-03 | Slack 侧旧 Claude in Slack 切到 Claude Tag | 工程化 | 身份从「每人自己的账号」变成「组织一个身份」。迁移本身是产品事件，也是治理事件 |
| 2026-08 | [SpecBox](/data/2026/specbox-speculative-sandbox-scheduling/) | 工程化 | 推测式沙盒调度：意图预热、马尔可夫预取、语义缓存。针对的是串行关键路径，而不只是冷启动口号 |

刻意不升格的：所有「我们也有 Slack 机器人」的跟风稿；把 Tag 的 Beta 限制（Team/Enterprise、需 Owner、与 ZDR 不兼容）写成已经普及；以及任何尚未被第三方复现的 2026 下半年路线图。

## 能力栈切片

### 模型层

前沿模型继续当决策核，编码与长程工具使用足够支撑团队场景。新故事不在又一个基准涨 5 分，而在**同一模型被套进不同身份和沙箱策略**。频道 session 与私信 session 用不同身份，是产品规则，不是权重文件里的分层。

### 框架 / 协议层

MCP / Skills 被 Tag 当组织级 connections 和 skills repo 来用：管理员按 scope 配 bundle，而不是每个成员在 claude.ai 上接自己的 connector。A2A 仍偏企业平台叙事，Tag 的「多人转向同一个 session」是产品层的多驾驶员，还不是 A2A 互操作。

身份模型本身接近一层新协议：**Agent Identity + Agent Proxy + Access bundle + scope**。词见 [术语表](/data/2026/claude-tag/mechanism/glossary/)。

### 应用层

编码 Agent 从「我的终端」扩展到「我们的频道」。客诉汇总、法务审材料、数仓问答、缺陷复现开 PR——Anthropic 内部案例写在 Tag 资料列表第五阶段。Cowork / Claude Code 仍管个人文件与本地仓库；Tag 管共享、异步、可旁观。

### 基础设施层

这一年第一次把执行基础设施写成主线：

- **短暂沙箱生命周期**（建、干、闲、释放、回复再重建）——见 [How Claude Tag works](/data/2026/claude-tag/mechanism/how-it-works/)
- **凭证不进沙箱**——见 [Security and data handling](/data/2026/claude-tag/mechanism/security-and-data/)
- **云上 Agent 负载的测量**——Aries
- **沙盒预热与调度**——SpecBox

评测仍在（SWE-bench 家族），但组织场景缺少等价于 SWE-bench 的「频道任务基准」。审计日志、花费上限、RBAC 成为产品功能，而不只是安全附录。

## 还做不到什么

截至 2026 年 9 月：

- **Slack 之外的默认团队表面。** Tag 从 Slack 起步，扩展是目标不是现状。
- **JIT 凭证与身份叠加。** 博文里的未来项：单次敏感动作当场批，以及「频道 profile ∩ 用户权限」。尚未当成年内已交付的事实。
- **自托管环境里用满 Access bundle。** 文档写明自托管 runner 上还不能用 bundle。
- **ZDR 组织。** 频道记忆和 transcript 需要保留，Zero Data Retention 与 Tag 互斥。
- **把沙箱调度问题做完。** SpecBox / Aries 是问题定义和一条系统路线，不是业界已经换完的新底盘。
- **个人计划与第三方部署。** Tag 只在 Anthropic 第一方的 Team/Enterprise。

## 怎么学 / 往哪跳

1. 先读 [概述 · Claude Tag](/data/2026/claude-tag/overview/) 的精读路径，再读 [机制](/data/2026/claude-tag/mechanism/)：How it works → Glossary → Agent identity → 身份博文 → Security。
2. 用 2025 的「我的 Claude Code」对照 Tag 的 [for Claude Code users](/data/2026/claude-tag/mechanism/for-claude-code-users/)：哪些配置能迁，哪些必须改由管理员配。
3. 读 Aries / SpecBox 的介绍与分析时，问的是：模型更聪明之后，**哪一段墙钟时间不在推理上**。
4. 回到 [调研方法](../overview/research/) 的自主度 / 经济性 / 扩展性：Tag 提高的是共享与异步，不是把 Computer Use 的成功率涨到编码线。

读完应能回答：2026 为什么说瓶颈在系统而不在 prompt；以及 2027 值得盯的，为什么是身份、表面扩展和执行基础设施，而不是又一个编排框架。
