# 从 LLM Agent 到 Personal Agent：演进资料与阶段判断

整理与阅读日期：2026-10-25。  
材料状态：研究记录；经讨论后用于同日正文与幻灯片修订，下文保留修订前的问题核对。  
证据范围：论文、作者回顾、厂商公告与技术文章、基础设施供应商说明；未进行新增产品实测。

## 我重新检查了哪些问题

修订前的完整 PPT 第 13 页列出 2022 年 ReAct、2023 年 Toolformer、2024 年 Computer use。正文表格包含 2026 年产品，但两处都缺少 2025 年。问题还在于，材料没有说明这些能力怎样组合成可以委托工作的系统，也没有交代持续个人服务所需的状态、环境与交互机制。

我需要补上的联系包括：

- 为什么早期任务循环与工具调用原型，没有直接等同于今天的个人代理。
- 为什么给 Agent 一台电脑、文件系统和可执行代码的环境，会扩大其工作范围。
- 为什么任务变长后，上下文管理、进度保存、验证和交接开始成为关键问题。
- 为什么编码 Agent 的执行系统可以被复用到研究、办公和个人助理。
- 为什么 OpenClaw 要组织常驻网关、消息渠道、会话、个人状态和调度。
- 为什么较强的通用任务执行能力，仍需与面向个人的持续服务分别考察。

这些是我的学习问题，不是某家厂商给出的统一历史分期。

## 我目前采用的两条观察线

第一条是**执行能力**：从生成回答，到调用工具、操作环境，再到承接较长的任务并产出可以检查的结果。

第二条是**个人服务的延续性**：从使用当次输入，到沿用项目与个人背景、连接授权账户，再到按时间或事件继续工作，并通过日常渠道带回结果和待决定事项。

两条线在产品中逐步汇合。长任务不自动意味着理解某个用户；记住偏好也不自动意味着能够完成工作。记忆研究在 2023 年就已出现，不能把个人上下文的起点写成 2026 年。[Generative Agents](https://arxiv.org/abs/2304.03442)、[MemGPT](https://arxiv.org/abs/2310.08560) 分别提供了早期观察材料。

## 年份、关键变化与产品联系

| 时期 | 我读到的代表性资料 | 解决的问题与产品联系 | 需要保留的限制 |
| --- | --- | --- | --- |
| 2022 | ReAct，2022-10-06 首次提交 | 推理与行动交替，把环境反馈用于后续决策；帮助理解 LLM 如何参与执行循环 | 这是本轮 LLM Agent 的代表节点，不能写成 Agent 或反馈控制在这一年才诞生 |
| 2023 | Toolformer；BabyAGI 作者记录；Generative Agents；MemGPT；工具调用进入商业 API | 工具接入、围绕目标组织任务、记忆检索与跨会话上下文开始并行探索；出现自主任务原型 | 原型展示与受控研究不能证明开放环境下的长期可靠性，也不是所有后续产品的直接祖先 |
| 2024 | Devin，2024-03-12；Claude computer use，2024-10-22；MCP，2024-11-25 | Agent 获得终端、编辑器、浏览器或 GUI 操作路径；连接数据和工具的接口开始标准化 | Devin 当时是产品预览；computer use 是公开测试；MCP 解决连接问题，不提供完整的个人代理运行系统 |
| 2025 上半年 | DeepSeek-R1 论文；Claude 3.7 与 Claude Code 预览；Manus 早期产品及 E2B 说明 | 推理与编码模型、执行工具和云端电脑组合成可委派系统；用户可以围绕一个成果提出任务 | 模型增强是背景条件，不据此断言某个模型直接导致 Manus 出现；也不把厂商示例当成可靠率测量 |
| 2025 下半年 | Manus 上下文工程文章；Responses API 技术回顾；Claude Agent SDK；Agent Skills；长期 Agent harness 文章；Manus Projects 与 Connectors | 工程重心扩展到上下文成本、文件保存、工具组织、验证、跨会话交接和可复用工作方式；编码执行系统开始明确用于非编码任务；项目上下文与个人应用连接进入产品 | 这些是互补的设计方向，不是所有产品统一切换架构的时间点；项目上下文也不等于完整用户记忆 |
| 2025 年底至 2026 | OpenClaw 前身与更名记录；当前 Gateway、运行时和自动化文档；Manus 2.0 与 Cue | 执行系统接入持续在线的消息入口、个人工作区、调度与身份资源；持续服务某个人成为更明确的产品组织方式 | 当前文档只能证明当前设计，不能回填成初版能力；2026 年是本次产品样本的集中观察期，不是 Personal Agent 的诞生年 |

### 2023 年需要同时看工具、任务与记忆

Toolformer 研究模型怎样学习调用外部工具。BabyAGI 作者记录的原型，则把任务执行、根据结果产生后续任务、调整优先级和检索历史结果组合起来。我据此理解早期目标驱动原型的基本想法，不能由此推导出它已能稳定处理任意工作。

Generative Agents 研究模拟环境中的观察、记忆、反思与规划；MemGPT 研究有限上下文下的分层记忆和多会话交互。两者说明“执行过程”和“延续状态”很早就需要一起考虑，但实验对象与今天的个人事务代理不同。

商业 API 的函数调用使工具接入有了更明确的产品接口。OpenAI 官方文档的历史条目可以定位到 2023 年更新；2025 年的 API 技术回顾又说明了从聊天接口向带状态、托管工具的执行接口发展的动机。具体历史日期与当前能力需要分别引用。[OpenAI 历史条目](https://developers.openai.com/api/docs/deprecations#2023-06-13-updated-chat-models)、[API 技术回顾](https://developers.openai.com/blog/responses-api)

### 2024 年需要补上执行环境

Devin 的发布材料说明了一个有代表性的组合：模型之外还有沙箱电脑、终端、编辑器和浏览器。Claude computer use 则把屏幕观察与鼠标、键盘动作作为模型可以使用的操作路径。我把这理解为执行范围从少数定制 API 向更广的软件环境扩展，而不是 GUI 一定替代 API。

MCP 的价值是降低工具和数据连接的定制成本。它与执行环境互补，但不负责一个人的目标、长期记忆或任务何时重新启动。

### 2025 年是当前材料最需要补齐的部分

我将这一年分成三个互相关联的变化：

1. **用户开始委托一个成果。** Manus 在云端组织检索、文件和工具操作，体现了通用任务产品的方向。E2B 在 2025-05-06 的客户文章中披露了其为 Manus 提供云端执行环境的情况。这是供应商对当时合作的说明，不是对所有版本 Manus 架构的独立审计。
2. **执行系统开始复用。** Anthropic 在 2025-09-29 明确把 Claude Code SDK 更名为 Claude Agent SDK，说明同一个执行基础可以用于研究、笔记和个人助理等任务。文件搜索、编辑、终端和验证循环的用途超出了代码生成。
3. **长任务暴露出状态管理问题。** Manus 的 7 月文章讨论上下文与文件系统；Anthropic 的 11 月文章讨论有限上下文之间如何保留进度并交接工作。执行循环需要围绕状态、环境和验证组织，不能仅靠不断追加对话。

这里还有一条产品证据：Manus 在 2025-12-01 推出 Projects，用跨会话的指令和资料减少重复配置；12 月又把 Connectors 纳入项目。这已经涉及可复用背景和个人工作工具，不能等到 2026 年才开始讲这一方向。

## Manus 应放在什么位置

我认为 Manus 应进入这部分研究，作为 2025 年从任务原型走向通用成果交付的重要案例。它是否进入当前两批产品清单，是另一个范围问题；理解历史演进并不要求扩充名单。

从早期材料看，它体现了目标委托、云端电脑与工具操作的组合。它的技术文章还提供了模型以外的工程证据：如何让执行过程在有限上下文和成本约束下继续推进。[Manus 上下文工程原文](https://manus.im/blog/Context-Engineering-for-AI-Agents-Lessons-from-Building-Manus)

同一条产品线后续又出现项目背景、应用连接和事件触发。2026-09-28 的 Manus 2.0 公告同时介绍 Cascade harness、Cloud Computer、Automations 和独立应用 Cue；这为“通用执行基础与个人代理产品可以共享基础设施、采用不同交互和资源组织方式”提供了一个具体观察样本。[Manus 2.0 公告](https://manus.im/blog/introducing-manus-2-0)

不能把 2026 年能力回写给 2025 年初版，也不能由“同一基础设施”推断 Cue 的记忆、Dream 或多代理交互与早期 Manus 使用完全相同的实现。Manus 早期的通用任务定位，也不足以对所有后续版本作出是否属于 Personal Agent 的一刀切结论。

## Harness 为什么会变得重要

我目前把 harness 理解为围绕模型组织执行的软件系统。这个词在不同项目中的范围并不一致；这里关心的是它承担了哪些责任：上下文准备、调用工具、处理结果、保存进度、验证工作，以及在需要时把控制权交还用户。

这里的通用概念也需要与具体产品 DeepSeek Harness 区分。后者是否属于 Personal Agent，仍需按其具体版本、默认配置与实际启用的个人状态能力判断；名称中有 Harness，并不能代替产品边界分析。

任务越长，模型当前能看到的信息与整个任务的历史就越不相同。文件、任务记录和检查结果需要在多次调用甚至多个上下文之间延续。Anthropic 的长期任务文章给出初始化、增量工作、进度记录与验证的实例，但它不是适用于一切任务的标准，也没有证明长期自主执行已经解决。

编码 Agent 是重要的工程来源之一。代码和文件能保存中间状态，运行和测试能提供反馈；同一组基础能力也可处理 CSV、报告和其他数字工作。Claude Agent SDK 的更名公告对这种复用给出了直接说明。[Claude Agent SDK](https://claude.com/resources/articles/building-agents-with-the-claude-agent-sdk)、[长期 Agent harness](https://www.anthropic.com/research/effective-harnesses-for-long-running-agents)

我不会把 MCP、Skills、Harness 排成前后替代的三个阶段。MCP 侧重连接，Skills 侧重可按需使用的工作方法与资源，Harness 侧重执行组织；它们可能出现在同一个系统中。这是按责任划分的理解，不是严格统一的行业分层标准。

## OpenClaw 为什么是另一处关键联系

OpenClaw 的历史记录把前身追溯到 2025 年底的消息网关项目，并记录了 2026 年初的更名。因此我会把“前身出现”“采用 OpenClaw 名称”和“当前能力”分开记录，不把仓库日期直接当作今天所有功能的发布日期。

当前官方架构文档描述了常驻 Gateway 对消息渠道和连接的管理；运行时文档描述每个 Agent 的工作区与会话状态；自动化文档描述持久化任务、按时唤醒和投递结果。组合起来，用户可以在日常消息渠道中继续委托工作，任务也可以因时间或事件重新启动。[Gateway 架构](https://docs.openclaw.ai/concepts/architecture)、[Agent 运行时](https://docs.openclaw.ai/concepts/agent)、[自动化](https://docs.openclaw.ai/automation/cron-jobs)

这是我理解其产品形态背后技术原因的重点：一次任务执行被放进持续可达、有状态、可以再次唤醒的个人工作环境中。常驻的是服务和状态管理，不等于模型始终在思考；定时运行也不自动等于能够正确判断所有待办。

当前实现还在变化。本次读取的官方文档已经将旧 Heartbeat 机制迁移到普通 automation jobs；运行时文档也强调 OpenClaw 自有的循环与工具组织。后续说明历史版本时，需要固定日期或版本，不能直接沿用“只是包了一层 Pi”等笼统说法。[Heartbeat 迁移说明](https://docs.openclaw.ai/gateway/heartbeat)、[运行时架构说明](https://docs.openclaw.ai/pi)

## 我暂时形成的演进判断

可以把重点联系概括为：**反馈与工具让 Agent 可以行动；执行环境让它能够处理实际工作；Harness 把较长的执行过程组织起来；个人状态、授权资源、消息入口与触发机制，使这些能力有条件成为持续个人服务。**

这是一组逐步组合的能力，不是一条产品之间的单向继承链。Manus、编码 Agent 和 OpenClaw 各自提供了不同侧面的证据。模型能力、运行系统和面向个人的产品设计，需要分别说明，再解释它们怎样配合。

我还需要避免三个过度结论：任务运行得久就一定是 Personal Agent；拥有记忆就一定能可靠完成事务；2026 年产品发布就说明持续个人代理已经普遍成熟。当前材料都不足以支持这些说法。

## 原始资料索引

以下均于 2026-10-25 读取。论文以首次提交时间定位历史节点；产品公告保留当时开放条件；无发布日期的在线文档只作为本次读取状态的证据。本文不比较性能分数、价格或完成率。

| 编号 | 日期与资料 | 资料性质、适用范围与限制 |
| --- | --- | --- |
| S01 | 2022-10-06：[ReAct](https://arxiv.org/abs/2210.03629) | 原始论文；推理与行动交替。日期为首次提交日 |
| S02 | 2023-02-09：[Toolformer](https://arxiv.org/abs/2302.04761) | 原始论文；学习使用工具，不是完整个人代理产品 |
| S03 | 2023 年春季项目的作者回顾：[Birth of BabyAGI](https://yoheinakajima.com/birth-of-babyagi/) | 作者对任务循环、优先级与结果检索的说明；回顾文章不冒充首次发布公告 |
| S04 | 2023-04-07：[Generative Agents](https://arxiv.org/abs/2304.03442) | 首次提交；模拟环境中的记忆、反思与规划；不是现实个人助理实测 |
| S05 | 2023-10-12：[MemGPT](https://arxiv.org/abs/2310.08560) | 首次提交；页面当前版本修订于 2024-02-12；有限上下文与多会话记忆研究 |
| S06 | 2023-06-13 历史条目：[OpenAI API deprecations](https://developers.openai.com/api/docs/deprecations#2023-06-13-updated-chat-models) | 官方历史索引；用于定位函数调用相关模型更新，不据此说明当前模型支持情况 |
| S07 | 2024-03-12：[Introducing Devin](https://cognition.com/blog/introducing-devin) | 厂商发布材料；当时为早期访问；沙箱、终端、编辑器与浏览器描述为官方声明 |
| S08 | 2024-10-22：[Claude computer use](https://www.anthropic.com/news/3-5-models-and-computer-use) | 官方公告；当时为 public beta；不表示所有桌面软件都已稳定支持 |
| S09 | 2024-11-25：[Model Context Protocol](https://www.anthropic.com/news/model-context-protocol) | 官方协议发布公告；工具和数据连接，不等于完整 Agent 生命周期管理 |
| S10 | 2025-01-22：[DeepSeek-R1](https://arxiv.org/abs/2501.12948) | 首次提交；讨论 2025 年以 v1 为基准；页面 v2 修订于 2026-01-04 |
| S11 | 2025-02-24：[Claude 3.7 Sonnet and Claude Code](https://www.anthropic.com/news/claude-3-7-sonnet) | 官方公告；Claude Code 当时为 limited research preview；模型与产品分别看待 |
| S12 | 2025-05-06：[How Manus uses E2B](https://e2b.dev/customers/how-manus-uses-e2b-to-provide-agents-with-virtual-computers) | 基础设施供应商的一手说明；仅用于当时合作与执行环境，不外推当前架构 |
| S13 | 2025-06-26：[Manus 三个月回顾](https://manus.im/blog/what-we-saw-in-the-past-three-months-and-what-we-see-in-the-future) | 官方回顾，支持 2025 年 3 月推出这一时间范围；文中未来愿景不能写成已实现功能 |
| S14 | 2025-07-18：[Manus 上下文工程](https://manus.im/blog/Context-Engineering-for-AI-Agents-Lessons-from-Building-Manus) | 团队技术自述；帮助解释运行工程，不证明 Cue 当前实现或跨产品同条件效果 |
| S15 | 2025-09-22：[Why we built the Responses API](https://developers.openai.com/blog/responses-api) | OpenAI 官方技术回顾；状态延续与托管工具；发布日期不是 Responses API 首发日期 |
| S16 | 2025-09-29：[Claude Agent SDK](https://claude.com/resources/articles/building-agents-with-the-claude-agent-sdk) | 官方文章；Claude Code SDK 更名、执行基础向非编码任务复用；应用示例不是本文实测 |
| S17 | 2025-09-29：[Effective context engineering](https://www.anthropic.com/research/effective-context-engineering-for-ai-agents) | 官方技术文章；关注整个执行过程的上下文，而不只是初始提示词 |
| S18 | 2025-10-16：[Agent Skills](https://claude.com/resources/articles/skills) | 官方发布；页面另有 12 月开放标准更新，需要与首次发布区分 |
| S19 | 2025-11-26：[Effective harnesses for long-running agents](https://www.anthropic.com/research/effective-harnesses-for-long-running-agents) | 官方技术文章；多上下文交接的工程实例，不是通用长期可靠性证明 |
| S20 | 2025-12-01：[Manus Projects](https://manus.im/blog/manus-projects) | 官方产品公告；跨会话项目指令与知识资料；开放条件按当时公告理解 |
| S21 | 2025-12-19：[Projects with Connectors](https://manus.im/blog/projects-connectors) | 官方公告；项目连接个人应用，公告称向所有用户开放；不外推每种连接的全部权限 |
| S22 | 历史记录与当前文档：[OpenClaw lore](https://docs.openclaw.ai/start/lore)、[Gateway](https://docs.openclaw.ai/concepts/architecture)、[Agent runtime](https://docs.openclaw.ai/concepts/agent) | 官方项目叙事与在线文档；历史命名和当前能力分开，当前页面没有统一固定版本号 |
| S23 | 当前文档：[Automations](https://docs.openclaw.ai/automation/cron-jobs)、[Heartbeat migration](https://docs.openclaw.ai/gateway/heartbeat)、[Runtime architecture](https://docs.openclaw.ai/pi) | 2026-10-25 读取；说明当前调度与架构状态，不回填初版实现 |
| S24 | 2026-09-28：[Manus 2.0](https://manus.im/blog/introducing-manus-2-0) | 官方公告；Cascade、持续环境、自动化与独立应用 Cue；Cue 当时为需邀请码的 early access；功能与效果仍属官方声明 |

## 本地已有材料

- [2025 年概述](/timeline/2025/overview/)：已有模型、运行时、工具协议和产品节点，可作为后续串联的入口；其中判断仍需回查原始来源。
- [Manus 早期资料](/timeline/2025/manus/source/)：保留初期邀请体验与当时产品条件。
- [Devin 早期资料](/timeline/2024/devin/source/)：对应 2024 年执行环境的例子。
- [OpenClaw 早期资料](/timeline/2025/openclaw/source/)：后续核对时需区分仓库创建、历史命名与产品功能日期。
- [Manus 上下文工程旧文重读](/agents/personal/cue/architecture/context-engineering-background/)：已有可恢复性与 Cue 当前实现之间的证据边界。

## 本轮采用的组织方式

我倾向围绕“遇到了什么限制、增加了什么能力、形成了什么产品体验”组织这段历史；2025 年用 Manus 和编码 Agent 的运行基础说明关键联系，OpenClaw 用于说明持续入口与状态组织。具体年份作为定位依据，避免把材料做成年份与产品名称的堆叠。

正文与配套幻灯片采用两条线：执行能力与持续个人服务，不预设所有产品必须按照同一顺序演进。首次修订曾为发展脉络安排约 10 分钟；同日调整产品章节重点后，仍保留 6 页，现场压缩为约 5 分钟的关键变化串讲。更多来源与版本边界留在这份研究记录中，整体继续采用约 50 分钟安排。
