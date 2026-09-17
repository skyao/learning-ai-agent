---
title: "2026年的概述"
linkTitle: "概述"
weight: 1
date: 2026-09-09
description: >
  2026：身份、沙箱、调度。个体编码循环已是日常；瓶颈从核心之外移到 principal 与执行路径。
---

**一句话主线：** 2026 年，个体编码 Agent 已经是开发者日常；新约束是 **团队里那一个 Agent 用谁的权限、在谁的频道里执行、沙箱如何跟得上异步委派**。1 月 [OpenClaw](../openclaw/) 把自托管个人 Agent 送上舆论顶点；同月 [Cowork](../cowork/) 把 Claude Code 的循环做成非开发者桌面 Agent。**4–5 月，Anthropic、OpenAI、Google 在同一季度把运行时拆成「控制面 + 执行面」**——托管服务、库、自托管三条路同时出现同一个形状。Claude Tag 则把同一套云端沙箱引擎放进 Slack，用组织级 Agent Identity 而不是每人自建 Gateway。Aries / SpecBox 从云基础设施侧证明：执行路径和沙盒调度，已经和模型智力同样限制能做什么。

上一页：[2025](../../2025/overview/)。深挖：[Claude Tag](/data/2026/claude-tag/)、[Aries](/data/2026/rethinking-ai-cloud-infrastructure/)、[SpecBox](/data/2026/specbox-speculative-sandbox-scheduling/)。今天是 2026-09，这一页写的是上半年到初秋已经发生的事，不是全年闭合的编年。

## 和 LLM 的关系

模型仍在涨（Tag 默认 Opus 4.8 一类前沿核心），但 **Agent 史的主矛盾外移了**。决策核心够用之后，稀缺资源换成身份与供给。

- **模型线在 2026 换了问法。** 上半年的关键词是**长程**：compaction 与 agent teams 把「跑得久、开多条线」收进核心；三档划分与中档降价把「能自主跑」下放到更低的价位。年中之后关键词变成**验证**——[Opus 5](../opus-5/)、[GPT-6 Astra](../gpt-6-astra/) 都强调「确认做对了再收工」。核心不再只是选下一步，也开始承担「这一步对不对」。
- **决策核心够用到可以暴露系统问题。** 当循环能跑数小时、能开 PR、能查数仓，瓶颈变成：凭证能不能进沙箱、出站要不要白名单、空闲后工作区是否还在、频道里谁有权转向。这些不是更多 CoT 能解决的。
- **模型访问权第一次可被当场关掉。** 6 月的[出口管制事件](../export-control-2026/)证明前沿模型的可用性不只由厂商决定；同年的[开源权重线](../open-weights-2026/)给出另一面——同档能力开始有可自托管的替代。**可替换性从优化项变成架构前提。**
- **同一引擎，多个表面。** [Claude Tag](../claude-tag/) 文档写明：频道里的工作跑在与 Claude Code on the web 相同的短暂沙箱上。模型层没有换一种 Agent 物理，产品层换了「谁在委派、谁看得见」。控制协议没有新发明，生命周期和权限模型有。
- **推理/编码模型继续分化，但不再单独定义品类。** 2025 是运行时之年；2026 是运行时被嵌进组织工作流之年。LLM 提供决策，组织提供 scope、bundle、审计。

## 里程碑

每条一个**分类**，**标签**可多个（[六类历史角色](../../overview/research/#里程碑类型)）。Tag 机制文档与 Slack 切换并进 [Claude Tag](../claude-tag/)，不另占行。

| 时间 | 事件 | 分类 | 标签 | 为什么记 |
| --- | --- | --- | --- | --- |
| 2026-01-01 | [加州 AB 316](../california-ab-316/) 生效 | **监管** | 首证 | 被告不得以「AI 自主造成损害」抗辩。美国第一条规定自主行为后果归属的法条；不提 agent，也不要求审计 |
| 2026-01 | [OpenClaw 爆红](../openclaw/)（Clawdbot → OpenClaw） | 产品 | 引爆、警示 | 自托管「龙虾」在改名周进入现象级。仓库出生在 [2025-11](../../2025/openclaw/)；热度、养虾与暴露面是 2026 年 1 月的事。热度 ≠ 完成率；权限面等于机器本身 |
| 2026-01-12 | [Claude Cowork](../cowork/) | 产品 | — | 把 Claude Code 的循环做成桌面知识工作 Agent：指定本机文件夹，不进终端。当时研究预览，仅 Max + macOS。主体仍是使用者账号，不是频道共享的 Agent Identity |
| 2026-01-15 | [Open Responses](../open-responses/) | 协议 | — | 模型接口层的开放规范：schema 源自 OpenAI 一方 API，但治理条款禁止任何厂商占多数席位。注意它与 MCP / A2A 不在同一层 |
| 2026-02-05 | [Claude Opus 4.6](../opus-4-6/) | 模型 | — | Opus 级首次给出 1M 上下文；Claude Code 增加 agent teams，API 增加 compaction。长程与并行从「应用自己拼」变成核心侧能力 |
| 2026-04-08 | [Claude Managed Agents](../managed-agents/) | 产品 | 范式更替 | 把 Agent 拆成 session / harness / sandbox 三个可替换接口：容器死亡降级为一次工具调用错误，凭证不进沙箱。**「进程活着」不再是正确性前提**；会话按 session-hour 计费 |
| 2026-04-15 | [OpenAI Agents SDK 更新](../agents-sdk-2026/) | 框架 | — | harness 与 compute 显式分两层，沙箱供应商可插拔，快照让会话在新沙箱里续跑。编排库开始内置「环境」这个概念 |
| 2026-04-29 | [Stripe 面向 Agent 的计量与支付](../stripe-agent-payments/) | 产品 | 工程化 | 按 token 实时结算；给 Agent 发**一次性虚拟卡**，真实支付信息不暴露、每笔由人批准。改的是经济语义，也是凭证设计 |
| 2026-05-20 | [Google Agent Executor (AX)](../google-ax/) | 框架 | 工程化 | 自托管的分布式 harness 运行时：从可挂起/可恢复的镜像动态供给隔离环境。托管与库之外的第三种形态，三家在同一季度收敛到同一架构命题 |
| 2026-06-09 | [Claude Fable 5 / Mythos 5](../fable-5-mythos-5/) | 模型 | 范式更替 | 同一底层模型按**安全护栏**分成两个产品：公开版与受限版。产品分层维度从「能力多强」换成「允许做什么」 |
| 2026-06-12 | [出口管制暂停 Fable 5 / Mythos 5](../export-control-2026/) | **监管** | 警示 | 美方指令要求对外国国民关闭这两个模型，厂商当日对全部客户停用；06-30 解除、07-01 恢复。**已商用模型的访问权第一次被当场关掉** |
| 2026-06-23 | [Introducing Claude Tag](../claude-tag/) | 产品 | 范式更替 | Slack 里的共享 AI 队友：`@Claude` 委派，线程即 session，记忆跟频道走。内部产品团队约 65% 代码来自内部版 Tag（厂商自报，记作影响力信号而非独立审计）。8-03 旧 Slack 应用切到 Tag |
| 2026-06-24 | [Agent identity 博文](../agent-identity/)（Noah Zweben） | 文献 | 范式更替 | 写清为什么「act as the user」在异步、多驾驶员场景会崩：授权、审计、回放都不闭合。公开频道共享工作区身份，私有频道隔离；提到未来 JIT 凭证 |
| 2026-06-30 | [Claude Sonnet 5](../sonnet-5/) | 模型 | — | 「最 agentic 的 Sonnet」：会规划、会用浏览器与终端、能自主跑，且落在中档价位。改的是单位成本，不是上限 |
| 2026-07-09 | [GPT-5.6 家族](../gpt-5-6/) | 模型 | — | Sol / Terra / Luna 三档，多 Agent 编排与 computer use 成为**全家族标配**，上下文约 105 万。能力下放而非上限推进 |
| 2026-07-24 | [Claude Opus 5](../opus-5/) | 模型 | — | 「驱动长时程 Agent 的台阶式改进」，重点写在**自我验证**与 computer use。竞争点转向「做完了怎么知道」 |
| 2026-07-31 | [Aries](../aries/)（*Rethinking AI Cloud Infrastructure*） | 论文 | 首证、警示 | 测量向：Agent 云负载不是传统微服务。一次委派是轨迹（推理、工具、沙箱、KV），不是请求。问题重构先于新调度器——执行路径、存储、隔离被重新定义 |
| 2026-08-02 | [欧盟 AI Act 第 50 条](../eu-ai-act-article-50/) 生效 | **监管** | 首证 | 官方指南明文点名 **AI agent 与多 Agent 架构**：设计上必须披露人工性质与所代表的人。第一个在生效规则里点名 Agent 的法域；同日加州透明度法也生效 |
| 2026-08 | [SpecBox](../specbox/) | 论文 | — | 沙箱就绪时间被量化为 Agent 服务成本：环境未就绪，Action 只能阻塞。供给第一次被当成系统问题来量 |
| 2026-08-07 | [Snowflake Cortex Agents](../snowflake-cortex-agents/) | 产品 | 工程化 | 三次 GA：跨应用 agent→agent 编排、服务端托管 agent loop、断连后继续的异步长任务。**数据平台开始把循环收进服务端**——它们本来就知道谁有权访问什么 |
| 2026-08-31 | [CrowdStrike Agent 身份与管控](../crowdstrike-agent-identity/) | 产品 | 工程化 | 每个 Agent 签发可验证身份、**不给常设凭证**、令牌按最小权限最短时间签发、动作绑定委托人；终端上清点并阻止影子 Agent。目前最完整的 Agent 身份模型 |
| 2026-09-03 | [GPT-6 Astra](../gpt-6-astra/) | 模型 | — | 官方描述点出机制：边规划边验证、**独立确认结果后才宣布完成**。另有推理时安全指令注入，服务端在风险升高时改写输入 |
| 2026 全年 | [开源权重模型达到 Agent 可用](../open-weights-2026/) | 模型 | — | 1M 上下文、原生多模态、computer use、harness 兼容成为开源标配。与 6 月的出口管制是同一件事的两面：**可替换性从优化项变成架构前提** |

刻意不升格的：所有「我们也有 Slack 机器人」的跟风稿；把 Tag 的 Beta 限制（Team/Enterprise、需 Owner、与 ZDR 不兼容）写成已经普及；国内「龙虾套壳 / 安装会」作为热度衍生品；以及任何尚未被第三方复现的 2026 下半年路线图。

## 能力栈切片

### 模型层

前沿模型继续当决策核心，编码与长程工具使用足够支撑团队场景。新故事不在又一个基准涨 5 分，而在**同一模型被套进不同身份和沙箱策略**。频道 session 与私信 session 用不同身份，是产品规则，不是权重文件里的分层。

### 框架 / 协议层

MCP / Skills 被 Tag 当组织级 connections 和 skills repo 来用：管理员按 scope 配 bundle，而不是每个成员在 claude.ai 上接自己的 connector。A2A 仍偏企业平台叙事，Tag 的「多人转向同一个 session」是产品层的多驾驶员，还不是 A2A 互操作。

身份模型本身接近一层新协议：**Agent Identity + Agent Proxy + Access bundle + scope**。词见 [术语表](/data/2026/claude-tag/mechanism/glossary/)。主体（principal）第一次从「借用用户 OAuth」里拆出来。

### 应用层

编码 Agent 从「我的终端」扩展到「我们的频道」。与此同时，三条个人/组织表面并排，不要合成一种产品：

1. [OpenClaw](../openclaw/)：自托管 Gateway，聊天软件指挥本机。
2. [Cowork](../cowork/)：厂商桌面应用，指定文件夹做知识工作。
3. [Claude Tag](../claude-tag/)：组织频道、共享身份、可旁观。

客诉汇总、法务审材料、数仓问答、缺陷复现开 PR——Anthropic 内部案例写在 Tag 资料列表第五阶段。Cowork / Claude Code 仍管个人文件与本地仓库；Tag 管共享、异步、可旁观。最小循环没有换，换的是委派面和可见性。

### 基础设施层

2026 年第一次把执行基础设施写成主线：

- **控制面与执行面分开**——[Managed Agents](../managed-agents/) 写成 session / harness / sandbox 三接口，[Agents SDK](../agents-sdk-2026/) 写成 harness / compute separation，[AX](../google-ax/) 写成从可挂起镜像供给执行环境
- **短暂沙箱生命周期**（建、跑、闲、释放、回复再重建）——见 [How Claude Tag works](/data/2026/claude-tag/mechanism/how-it-works/)
- **凭证不进沙箱**——4 月两家各自写进设计（[Managed Agents](../managed-agents/) 的工程博客、[Agents SDK](../agents-sdk-2026/) 的公告），6 月见 [Security and data handling](/data/2026/claude-tag/mechanism/security-and-data/)
- **云上 Agent 负载的测量**——Aries
- **沙箱就绪与调度**——SpecBox

评测仍在（SWE-bench 家族），但组织场景缺少等价于 SWE-bench 的「频道任务」谓词。审计日志、花费上限、RBAC 成为产品功能，而不只是安全附录。系统闭环了，治理闭环还没有。

## 还做不到什么

截至 2026 年 9 月：

- **Slack 之外的默认团队表面。** Tag 从 Slack 起步，扩展是目标不是现状。
- **JIT 凭证与身份叠加。** 博文里的未来项：单次敏感动作当场批，以及「频道 profile ∩ 用户权限」。尚未当成年内已交付的事实。
- **自托管环境里用满 Access bundle。** 文档写明自托管 runner 上还不能用 bundle。
- **ZDR 组织。** 频道记忆和 transcript 需要保留，Zero Data Retention 与 Tag 互斥。
- **把沙箱调度问题做完。** SpecBox / Aries 是问题定义和一条系统路线，不是业界已经换完的新底盘。
- **个人计划与第三方部署。** Tag 只在 Anthropic 第一方的 Team/Enterprise。
- **知识工作 Agent 变成组织员工。** [Cowork](../cowork/) 把循环接到个人文件夹，身份仍是使用者的账号，不是频道共享的 Agent Identity。
- **模型的可用性掌握在自己手里。** 6 月出口管制后，依赖单一前沿模型的产品必须假设它会突然消失。可替换的核心、沙箱、协议都不是可选项。
