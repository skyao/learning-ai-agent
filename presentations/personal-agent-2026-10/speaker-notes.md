# Personal Agent：从个人上下文到长期委托

40 分钟技术交流：讲解约 36 分钟，讨论 4 分钟；附录不计时。

资料快照：2026-10-21 / 2026-10-22。正文是既有学习笔记的整理，不新增账号实测结论。

## 01｜Personal Agent

时间：00:00–00:30；建议 30 秒。

我最近在系统跟踪 Personal Agent。出发点与我的日常工作直接相关：一方面开发 Agent，另一方面建设它的运行平台。我希望借这些产品理解，个人上下文、任务状态和现实动作怎样组织起来，才能让一个人持续委托工作。
今天我不会逐一演示十五款产品，而是先建立路线图，再沿一项熟悉的研究工作，拆解背后的系统问题。分享来自已有学习笔记，资料快照截至十月二十一至二十二日。除 Muse 原有个人探索外，没有新增产品账号实测。最后留四分钟讨论。


## 02｜我想带走三个判断

时间：00:30–01:00；建议 30 秒。

听完后，我希望大家能用同一套语言描述三件事：个人代理的产品形态有哪些代表路线；一个长期委托背后有哪些独立状态和控制点；这些认识怎样转成运行平台的建设优先级。
全程大约四十分钟，先用七分钟建立范围，再用九分钟左右看产品样本，随后把最多时间放到架构问题，最后讨论验证与建设顺序。这里的分钟数是讲述安排，并不是产品能力评分。


## 03｜从一项我熟悉的委托开始

时间：01:00–02:15；建议 75 秒。

假设我把这次调研本身交给个人代理：每天跟踪十五个产品的中英文更新，把相关材料整理到学习笔记，记住我的架构关注点，并在周末交付一份可以检查的比较总结。
这件事会反复出现：来源更新、产品改名、某个版本回滚，我也会临时改变研究范围。它需要的不只是第一次搜索，也不只是准时提醒。每一轮都要知道上次做到了哪里、哪些判断已经过期、哪些改动需要我确认。
后面的所有机制都尽量回到这个场景。它是用于解释系统的合成场景，不能当成任何产品已经完成的演示。


## 04｜我如何界定 Personal Agent

时间：02:15–03:15；建议 60 秒。

我的工作定义是：长期服务于一个人，理解其上下文，并能受托推进任务的智能体。个人生活和个人工作都在范围内。筛选对象时，我关注上下文、实际执行、持续运行、长期委托和用户控制，不要求每个候选已经全部实现。
这个定义有意保留观察空间。一个自建底座也可能提供直接可用的个人工作助手，因此 DeepSeek Harness 可以纳入；但纳入清单不等于已经验证了它的跨周记忆或主动目标跟进。反过来，名称带 personal，也不能替代具体能力证据。
下面的分类是我的学习路线，产品之间有交叉，并非互斥的市场分类。

- 本地材料：[调研清单](../../content/zh-cn/agents/personal/research-list/index.md)

## 05｜15 个样本，沿六条路线阅读

时间：03:15–04:45；建议 90 秒。

这张图覆盖了主清单的十五个对象。我按最有助于学习的切口分组：Muse 和 Dots 看长期委托；Cue、Grok Bot、Poke 看身份与消息；Spark 和 Autopilot 看生态上下文；Cowork、Personal Computer 和 WorkBuddy 看个人工作执行；OpenClaw 与 Hermes 看自建运行；Kimi Claw 和 Harness 看底座如何成为可直接使用的产品。
这些组不是排他分类。例如 WorkBuddy 也有云端任务，Kimi Claw 也有消息入口。为了避免从公开程度推断能力，我不会在这里做功能对勾或排行榜。接下来每组只取最值得带回平台开发的机制。

- 本地材料：[调研清单](../../content/zh-cn/agents/personal/research-list/index.md)

## 06｜比较前，我先标明证据到哪里

时间：04:45–05:30；建议 45 秒。

这轮笔记保留四类证据。官方说明解释产品设计和开放条件；外部观察保留特定测试、版本和样本；我自己的实际探索单独记录；从资料提出的平台模型则标为个人分析。
目前只有 Muse 原有探索可以谈到我实际看过的界面和行为。其他对象主要是公开资料整理，不存在十五款同条件实测数据。动态帮助可能与旧公告或安装包版本不同，我也保留了这些差异。
因此，这次适合分享设计问题和可验证的假设，尚不能回答谁在我们的工作中最好用。后面引用的每项机制，都能回到讲者备注和附录的来源。

- 本地材料：[前八个阶段性比较](../../content/zh-cn/agents/personal/first-eight-summary/index.md)
- 本地材料：[第二批阶段性比较](../../content/zh-cn/agents/personal/second-seven-summary/index.md)

## 07｜Muse 与 Dots：长期委托怎样延续

时间：05:30–07:15；建议 105 秒。

Muse 让我首先关注持续工作环境与任务连续性。此前探索观察到运行实例变化，以及定时工作的线索，但这些现象不足以还原完整外部调度器或数据库拓扑。一个文件还在，也不代表任务恢复逻辑已经完整。
Dots 则让我把长期职责与派生任务分开：跟踪项目是一项持续职责，搜集资料、改写笔记是具体任务。委派以后，新要求怎样传给子任务，结果又依据哪个版本的事实返回，是很关键的一致性问题。
我把两者放在一起，不是比较谁更可靠，而是引出三个系统对象：职责或目标、任务、运行实例。生命周期不同，停止和恢复时需要保留的状态也不同。

- 本地材料：[Muse](../../content/zh-cn/agents/personal/muse/references/index.md)
- 原始入口：[Muse](https://introducing.muse.ai/)
- 本地材料：[Dots](../../content/zh-cn/agents/personal/dots/references/index.md)
- 原始入口：[Dots](https://learn.chatgpt.com/docs/dots)

## 08｜Cue、Grok Bot、Poke：代理成为联系对象

时间：07:15–09:00；建议 105 秒。

Cue 围绕代理组织邮箱、电话、钱包和电脑，促使我把身份与资源作为长期对象。外部回复可能在任务结束后才到达，它必须找到原委托，也要重新判断原授权是否有效。
Grok Bot 提供长期角色与共享工作环境的样本。多个角色可以减少上下文干扰，但共享文件、登录态和服务凭证时，角色分开并没有自然形成安全隔离。
Poke 把入口放到日常消息中，并包含人工协助的产品形态。交互更自然，不代表任务与授权状态可以省略；当执行者变成人工，数据范围、现实支出和回执也需要解释。
这组共同的学习点是：把收到消息、接受委托、实际执行和完成交付分别记录。

- 本地材料：[Cue](../../content/zh-cn/agents/personal/cue/references/index.md)
- 原始入口：[Cue](https://www.manus.im/blog/introducing-manus-2-0)
- 本地材料：[Grok Bot](../../content/zh-cn/agents/personal/grok-bot/references/index.md)
- 原始入口：[Grok Bot](https://docs.x.ai/grok-bot/overview)
- 本地材料：[Poke](../../content/zh-cn/agents/personal/poke/references/index.md)
- 原始入口：[Poke](https://poke.com/docs)

## 09｜Spark 与 Autopilot：生态上下文进入委托

时间：09:00–10:30；建议 90 秒。

Gemini Spark 的当前官方帮助使用 Task 名称，需要与 Google Tasks 和聊天里的普通定时动作分开。它给我最有价值的切口是个人应用上下文：资料接入方便以后，事实更新、执行位置与确认规则仍要逐项处理。
Autopilot 则把个人代理放在组织环境里。当前公告描述云托管、独立身份和组织上下文，但仍为私人预览。旧 Scout 的桌面文档可以帮助理解产品演进，却不能直接补成新版云端的内部实现。
因此，我会分别核对用户许可、组织策略和实际动作身份。生态整合可以减少配置，但不会自动统一所有控制层。

- 本地材料：[Gemini Spark / Task](../../content/zh-cn/agents/personal/gemini-spark/references/index.md)
- 原始入口：[Gemini Spark / Task](https://support.google.com/gemini/answer/17094507?hl=en)
- 本地材料：[Copilot Autopilot](../../content/zh-cn/agents/personal/copilot-autopilot/references/index.md)
- 原始入口：[Copilot Autopilot](https://blogs.microsoft.com/blog/2026/09/25/introducing-the-new-copilot-with-home-code-and-autopilot/)

## 10｜知识工作代理：把文档交付做成持续工作

时间：10:30–12:15；建议 105 秒。

Cowork 让我关注统一入口以后，云端任务、桌面资源和不同工具路径怎样被解释。调研记录了新旧任务环境的迁移条件，因此不能继续把所有任务都说成本地虚拟机。
Personal Computer 让我分开描述模型、数据和动作的位置。某个 Mac 本地模式的条件，不适合直接外推到全部桌面任务和外部服务。
WorkBuddy 则补充国内办公生态、个人项目与云端任务。手机发消息控制本机，仍依赖本机与客户端在线；云端排程和企业托管又是另外的运行路径。
对这三类产品，我希望最终比较的是：相同材料能否产生可编辑、引用正确的产物，资源不可用时能否说明阻塞位置。

- 本地材料：[Claude Cowork](../../content/zh-cn/agents/personal/claude-cowork/references/index.md)
- 原始入口：[Claude Cowork](https://support.claude.com/en/articles/15520349-use-claude-cowork-on-web-desktop-and-mobile)
- 本地材料：[Personal Computer](../../content/zh-cn/agents/personal/personal-computer/references/index.md)
- 原始入口：[Personal Computer](https://www.perplexity.ai/personal-computer)
- 本地材料：[WorkBuddy](../../content/zh-cn/agents/personal/workbuddy/references/index.md)
- 原始入口：[WorkBuddy](https://www.workbuddy.cn/docs/workbuddy/Changelog)

## 11｜开源与产品化：运行责任怎样分配

时间：12:15–14:00；建议 105 秒。

OpenClaw 让我从 Gateway、设备节点、会话路由和自动化理解个人代理运行。控制面接受请求，不等于设备、模型与业务服务此刻都可用；自己运营也需要承担升级和恢复责任。
Hermes 补充原生文件记忆、Profile、Bot、目标推进与 Cron。它的资料更适合继续拆解经验积累和状态边界，但开源可读不能替代部署验证。
Kimi Claw 把开源底座与会员、托管、通信和设备整合，需要按实际形态核对版本。Harness 则同时提供工作助手与插件组合运行时，是否有长期记忆取决于实际配置。
所以我会同时看部署成本和长期维护成本，不把启动门槛低直接等同于运行责任已经消失。

- 本地材料：[OpenClaw](../../content/zh-cn/agents/personal/openclaw/references/index.md)
- 原始入口：[OpenClaw](https://docs.openclaw.ai/)
- 本地材料：[Hermes Agent](../../content/zh-cn/agents/personal/hermes-agent/references/index.md)
- 原始入口：[Hermes Agent](https://hermes-agent.nousresearch.com/docs/user-guide/features/memory)
- 本地材料：[Kimi Claw](../../content/zh-cn/agents/personal/kimi-claw/references/index.md)
- 原始入口：[Kimi Claw](https://www.kimi.com/help/kimi-claw/overview)
- 本地材料：[DeepSeek Harness](../../content/zh-cn/agents/personal/deepseek-harness/references/index.md)
- 原始入口：[DeepSeek Harness](https://deepseek-harness.github.io/deepseek-harness/en/reference/subsystems/schedule)

## 12｜我用五类对象串起这些产品

时间：14:00–14:45；建议 45 秒。

走完产品样本后，我需要一个稳定的比较框架。这里是我的参考模型，不是某个厂商的内部类图。
第一类是用户与代理身份，说明谁委托、谁执行；第二类是职责与目标，说明持续想达到什么；第三类是计划与触发，说明何时发起工作；第四类是任务与运行，说明某一轮正在做什么；第五类是产物与回执，说明工作给现实留下了什么。
会话贯穿交互，但不适合独自承载这些对象的全部生命周期。下面就沿这些对象拆运行平台。

- 本地材料：[前八个阶段性比较](../../content/zh-cn/agents/personal/first-eight-summary/index.md)
- 本地材料：[第二批阶段性比较](../../content/zh-cn/agents/personal/second-seven-summary/index.md)

## 13｜长期个人代理的一张参考架构

时间：14:45–16:15；建议 90 秒。

我把平台分成四层。最上面是消息、网页和设备入口，负责收集意图并呈现状态。下一层维护身份、上下文、目标、计划与任务，是工作连续性的主要控制面。再下一层组织单次执行：上下文构建、模型决策、工具调用、审批等待、重试与交付检查。最下面才是云端电脑、本机、连接器和外部系统。
两侧贯穿权限与凭证、事件与成本。它们不能只在入口做一次判断，真正动作发生时还要能执行控制，并能把结果关联回来。
这张图是基于调研形成的设计模型。我更看重各层可以独立失败，例如任务已接受但设备离线，而不是假设每次对话都从头到尾顺利运行。

- 本地材料：[前八个阶段性比较](../../content/zh-cn/agents/personal/first-eight-summary/index.md)
- 本地材料：[第二批阶段性比较](../../content/zh-cn/agents/personal/second-seven-summary/index.md)

## 14｜一项委托跨越多个运行实例

时间：16:15–18:00；建议 105 秒。

回到研究场景。用户提出持续目标后，系统产生第一次整理任务，任务运行可能在抓取资料时等待，在写入文件时失败，或在等待我批准时长时间挂起。之后同一目标还可能产生下一次运行。
这里值得保留三条时间线：目标是否仍有效，计划何时触发，以及这一轮已提交了哪些动作。宿主停止只影响某些执行对象，不会自动宣布目标结束；任务回复完成也不保证外部写入已经被核验。
恢复时最危险的一处是，工具已经成功写入外部系统，但本地还没保存结果。简单重跑可能造成第二份记录。后面的幂等和回执检查，就是为这类间隙设计的。
这张时间线是我的故障分析模型，不是从厂商内部日志直接画出的拓扑。

- 本地材料：[Muse](../../content/zh-cn/agents/personal/muse/references/index.md)
- 原始入口：[Muse](https://introducing.muse.ai/)
- 本地材料：[DeepSeek Harness](../../content/zh-cn/agents/personal/deepseek-harness/references/index.md)
- 原始入口：[DeepSeek Harness](https://deepseek-harness.github.io/deepseek-harness/en/reference/subsystems/schedule)
- 本地材料：[WorkBuddy](../../content/zh-cn/agents/personal/workbuddy/references/index.md)
- 原始入口：[WorkBuddy](https://www.workbuddy.cn/docs/workbuddy/Changelog)

## 15｜目标、计划与运行分别停止

时间：18:00–19:30；建议 90 秒。

几个容易被混用的操作，在底层影响不同对象。暂停计划主要阻止未来触发；取消运行主要终止当前工作；完成目标意味着不再继续推进这项长期职责；撤销凭证则让后续动作失去访问能力。
资料里可以看到具体边界：WorkBuddy 的暂停计划不直接等于停止已开始运行；Harness 的调度投递确认不等于模型执行完成，删除作业也不自动清除已入队消息。Hermes 同样把执行、投递交接和真实发送分开。
我从中提炼的要求是，界面要让用户选清楚停止对象，运行时也要有传播和收敛记录。某项动作已经对外生效，还需要核查和补偿，不能由删除聊天自动抹去。

- 本地材料：[Hermes Agent](../../content/zh-cn/agents/personal/hermes-agent/references/index.md)
- 原始入口：[Hermes Agent](https://hermes-agent.nousresearch.com/docs/user-guide/features/memory)
- 本地材料：[WorkBuddy](../../content/zh-cn/agents/personal/workbuddy/references/index.md)
- 原始入口：[WorkBuddy](https://www.workbuddy.cn/docs/workbuddy/Changelog)
- 本地材料：[DeepSeek Harness](../../content/zh-cn/agents/personal/deepseek-harness/references/index.md)
- 原始入口：[DeepSeek Harness](https://deepseek-harness.github.io/deepseek-harness/en/reference/subsystems/schedule)

## 16｜记忆需要沿写入、更新、使用检查

时间：19:30–21:15；建议 105 秒。

为了长期维护笔记，代理需要记住我的写作偏好、项目边界和事实判断，但这些信息并不是同一种东西。我的架构关注点可以长期使用，某个版本号则必须保留来源和日期。
我把链路拆成来源、提取、持久保存、召回和实际使用。每一段都可能出错：保存时丢失限定条件，纠错没覆盖旧副本，召回时取出过期信息，或者模型看到新事实仍然沿用旧判断。
因此评估时不能只问能否复述一句话。我会先给一个偏好，再更正、制造冲突、跨项目询问，最后删除。检查的是存储、召回和产物实际使用是否一致。
这里的来源与作用域也关系到权限：个人事务中的信息，未必应该因为同一个账号就被用于团队项目。

- 本地材料：[前八个阶段性比较](../../content/zh-cn/agents/personal/first-eight-summary/index.md)
- 本地材料：[第二批阶段性比较](../../content/zh-cn/agents/personal/second-seven-summary/index.md)

## 17｜三种记忆样本，三个不同边界

时间：21:15–22:45；建议 90 秒。

Hermes 的原生文件记忆给了很具体的快照机制：会话启动读取固定提示快照，会话内写入落盘，并不直接改写最初那份快照，工具返回则能显示实时状态。超出预算也需要整理，而不是无限积累。
Lindy 的样本让我看到个人、团队、系统等不同作用域，记忆与方法可以编辑，但编辑和共享也应检查真实访问范围。
Harness 的反例很重要：会话持久化有明确机制，第三方长期记忆 MCP 是可选配置，默认未启用。恢复会话不能据此写成已经拥有完整个人长期记忆。
这些差异没有构成优劣排名，却直接改变实验方法。我必须知道正在测的是会话快照、工作区文件，还是第三方服务。

- 本地材料：[Hermes Agent](../../content/zh-cn/agents/personal/hermes-agent/references/index.md)
- 原始入口：[Hermes Agent](https://hermes-agent.nousresearch.com/docs/user-guide/features/memory)
- 本地材料：[Lindy](../../content/zh-cn/agents/personal/lindy/references/index.md)
- 原始入口：[Lindy](https://docs.lindy.ai/integrations/overview)
- 本地材料：[DeepSeek Harness](../../content/zh-cn/agents/personal/deepseek-harness/references/index.md)
- 原始入口：[DeepSeek Harness](https://deepseek-harness.github.io/deepseek-harness/en/reference/subsystems/schedule)

## 18｜把“本地 / 云端”拆成三个坐标

时间：22:45–24:15；建议 90 秒。

本地和云端两个标签太粗。一个任务可以由云端模型规划，读取本机文件，再通过本机浏览器提交结果；另一个任务也可能在云端宿主执行，却访问第三方托管的记忆服务。
我会分别问：模型推理在哪里，数据被保存或传到哪里，实际动作在哪里发生。三个坐标可以独立变化，凭证归属又会增加一层条件。
对应到产品，Personal Computer 的本地模式、Cowork 的云端与桌面桥接、WorkBuddy 的手机遥控和云端任务，都需要按实际路径描述。某个设备下线以后，只有依赖它的步骤不可用，不能把整个产品简单说成能或不能离线。
这也是我希望平台向用户解释的最小信息：当前任务在等哪个资源，继续需要什么条件。

- 本地材料：[Personal Computer](../../content/zh-cn/agents/personal/personal-computer/references/index.md)
- 原始入口：[Personal Computer](https://www.perplexity.ai/personal-computer)
- 本地材料：[Claude Cowork](../../content/zh-cn/agents/personal/claude-cowork/references/index.md)
- 原始入口：[Claude Cowork](https://support.claude.com/en/articles/15520349-use-claude-cowork-on-web-desktop-and-mobile)
- 本地材料：[WorkBuddy](../../content/zh-cn/agents/personal/workbuddy/references/index.md)
- 原始入口：[WorkBuddy](https://www.workbuddy.cn/docs/workbuddy/Changelog)

## 19｜多代理协作需要可验收的交接

时间：24:15–25:30；建议 75 秒。

研究工作很容易拆成搜集、核验、写作和审阅。但拆成四个角色之后，真正重要的是交出去的内容和收回来的证据。
我希望交接包含目标、来源、输入版本、约束、权限、预算和验收标准。上游说暂定，下游不能自动变成已确认。用户修改范围以后，也应该知道哪些子任务还拿着旧版本输入。
Cue 与 Grok Bot 提供身份和共享资源的样本，Kimi Claw 的群聊又增加协调者和 Worker。它们都不能仅凭角色数量判断隔离强度。对我而言，只有最终质量、人工协调和等待成本一起记录，才知道分工是否值得。

- 本地材料：[Cue](../../content/zh-cn/agents/personal/cue/references/index.md)
- 原始入口：[Cue](https://www.manus.im/blog/introducing-manus-2-0)
- 本地材料：[Grok Bot](../../content/zh-cn/agents/personal/grok-bot/references/index.md)
- 原始入口：[Grok Bot](https://docs.x.ai/grok-bot/overview)
- 本地材料：[Kimi Claw](../../content/zh-cn/agents/personal/kimi-claw/references/index.md)
- 原始入口：[Kimi Claw](https://www.kimi.com/help/kimi-claw/overview)

## 20｜Skills、Plugins、MCP 各解决哪一层

时间：25:30–26:30；建议 60 秒。

这一页是我的比较词汇，具体产品命名仍以各自文档为准。Skill 主要描述怎么做，承载可复用方法；Plugin 常把配置、依赖或服务能力组合起来；MCP 等协议负责让工具和资源能被调用。
这三层可以共同降低接入成本，但方法文件存在，不等于工具已安装；工具已经连上，不等于凭证范围允许动作；插件升级也不保证所有任务都自动使用新方法。
对平台开发，我希望把方法版本、依赖清单、连接身份和动作审批关联起来。这样一次执行变化时，才知道是提示、工具、模型还是授权发生了变化。

- 本地材料：[Hermes Agent](../../content/zh-cn/agents/personal/hermes-agent/references/index.md)
- 原始入口：[Hermes Agent](https://hermes-agent.nousresearch.com/docs/user-guide/features/memory)
- 本地材料：[DeepSeek Harness](../../content/zh-cn/agents/personal/deepseek-harness/references/index.md)
- 原始入口：[DeepSeek Harness](https://deepseek-harness.github.io/deepseek-harness/en/reference/subsystems/schedule)
- 本地材料：[Claude Cowork](../../content/zh-cn/agents/personal/claude-cowork/references/index.md)
- 原始入口：[Claude Cowork](https://support.claude.com/en/articles/15520349-use-claude-cowork-on-web-desktop-and-mobile)

## 21｜把批准绑定到真实动作和主体

时间：26:30–28:00；建议 90 秒。

同一句允许整理资料，可能只允许读取，也可能涉及改写学习笔记。如果动作变成向外发送文件，还需要确认接收人、内容和时效。审批要绑定到具体动作条件，而不是只给任务一个笼统标志。
团队代理让关系更复杂：提问者是我，连接属于团队成员，代理用共享凭证写系统，审核者又可能是管理员。Cue、Autopilot 和 Lindy 分别提供了不同样本，但我们仍需要沿实际动作核实主体。
我希望任务审计能串起请求者、代理、批准者、凭证主体和目标对象。批准以后数据被修改、目标对象变化或权限撤回，都需要在真正动作前重新检查。
这是一条平台设计要求，并不意味着调研对象已经完整实现相同审批模型。

- 本地材料：[Cue](../../content/zh-cn/agents/personal/cue/references/index.md)
- 原始入口：[Cue](https://www.manus.im/blog/introducing-manus-2-0)
- 本地材料：[Copilot Autopilot](../../content/zh-cn/agents/personal/copilot-autopilot/references/index.md)
- 原始入口：[Copilot Autopilot](https://blogs.microsoft.com/blog/2026/09/25/introducing-the-new-copilot-with-home-code-and-autopilot/)
- 本地材料：[Lindy](../../content/zh-cn/agents/personal/lindy/references/index.md)
- 原始入口：[Lindy](https://docs.lindy.ai/integrations/overview)

## 22｜审批、隔离与出口分别检查

时间：28:00–29:15；建议 75 秒。

我把控制拆为三类：审批决定某次动作能不能做，隔离限制运行进程能接触什么，出口控制限制数据和请求能去哪里。任何一项存在，都不能自动代表其他两项已经完备。
Lindy 的详细文档限定 Guardrails 适用的入口，不能把共享 Slack 线程规则直接泛化到私聊。Harness 的沙箱词汇主要描述文件系统范围，网络和进程可见性有另外的边界。OpenClaw 又明确区分个人可信运营与互不信任用户托管。
这些阅读让我更愿意从执行路径检查安全机制。用户批准的 API 失败以后，换用浏览器完成同样动作，也需要继续遵守原批准范围。

- 本地材料：[Lindy](../../content/zh-cn/agents/personal/lindy/references/index.md)
- 原始入口：[Lindy](https://docs.lindy.ai/integrations/overview)
- 本地材料：[DeepSeek Harness](../../content/zh-cn/agents/personal/deepseek-harness/references/index.md)
- 原始入口：[DeepSeek Harness](https://deepseek-harness.github.io/deepseek-harness/en/reference/subsystems/schedule)
- 本地材料：[OpenClaw](../../content/zh-cn/agents/personal/openclaw/references/index.md)
- 原始入口：[OpenClaw](https://docs.openclaw.ai/)

## 23｜结束委托，要让派生状态收敛

时间：29:15–30:30；建议 75 秒。

研究目标已经结束时，我希望关闭的不只是一条聊天。应该检查未来触发是否停止、当前运行是否终止、子任务是否还在继续、外部凭证是否撤销，以及既有资料和产物保留在哪里。
已经发送的消息或已经创建的订单，不会因为进程取消就自动回滚。某些动作需要检查回执、通知接收人或者做补偿。
所以用户界面最好明确表达停止范围，后台则保留传播过程和结果。我把这称为收敛，而不是瞬间让所有世界状态消失。调研中的生命周期资料给了很多线索，完整语义仍需用在途任务与撤权实验验证。

- 本地材料：[Gemini Spark / Task](../../content/zh-cn/agents/personal/gemini-spark/references/index.md)
- 原始入口：[Gemini Spark / Task](https://support.google.com/gemini/answer/17094507?hl=en)
- 本地材料：[Dots](../../content/zh-cn/agents/personal/dots/references/index.md)
- 原始入口：[Dots](https://learn.chatgpt.com/docs/dots)
- 本地材料：[WorkBuddy](../../content/zh-cn/agents/personal/workbuddy/references/index.md)
- 原始入口：[WorkBuddy](https://www.workbuddy.cn/docs/workbuddy/Changelog)

## 24｜可观测性要能解释一次真实委托

时间：30:30–31:30；建议 60 秒。

如果只看到最终回答失败，我无法判断是资料过期、模型误判、服务拒绝、设备断线还是用户取消。对一个长期运行平台，这些区别决定下一步应该重试、等待还是交回给用户。
我希望以同一条委托标识关联目标、运行、模型请求、工具动作、批准、回执和产物，再标注输入版本与发生时间。日志采集只是起点，能否据此复盘业务才是验收标准。
调研里的 OTel、Session 事件和运行历史提供了不同层面的参考。我不会把任一产品事件目录直接当成完整业务审计；仍需要通过失败注入验证事件是否足以解释结果。

- 本地材料：[Claude Cowork](../../content/zh-cn/agents/personal/claude-cowork/references/index.md)
- 原始入口：[Claude Cowork](https://support.claude.com/en/articles/15520349-use-claude-cowork-on-web-desktop-and-mobile)
- 本地材料：[DeepSeek Harness](../../content/zh-cn/agents/personal/deepseek-harness/references/index.md)
- 原始入口：[DeepSeek Harness](https://deepseek-harness.github.io/deepseek-harness/en/reference/subsystems/schedule)
- 本地材料：[OpenClaw](../../content/zh-cn/agents/personal/openclaw/references/index.md)
- 原始入口：[OpenClaw](https://docs.openclaw.ai/)

## 25｜先用共同场景验证，再讨论效果

时间：31:30–33:00；建议 90 秒。

下一阶段我准备收敛到共同的合成材料包，避免每个产品各演示一项最擅长的任务。先做研究文档交付，再修改一个关键事实，中断一轮执行，最后在运行期间撤销测试连接。
每项都要先定义完成标准。例如文档能打开、来源可追踪、引用支持对应事实、过期数据被更正。恢复任务则要检查最终产物和重复副作用，不能只用出现一段回复作判定。
记录里还包括账号、地区、版本、模型、工具配置、时间、人工介入和费用。条件不相同的样本先保留范围，不能强行归一成一个成功率。这些仍是待执行实验，不是我已经跑出的横向测试结果。

- 本地材料：[前八个阶段性比较](../../content/zh-cn/agents/personal/first-eight-summary/index.md)
- 本地材料：[第二批阶段性比较](../../content/zh-cn/agents/personal/second-seven-summary/index.md)

## 26｜以完整委托计算成本

时间：33:00–34:00；建议 60 秒。

我现在更愿意计算完成一项工作的成本，而不是比较某个模型的单次调用价格。长期代理会有搜索、子代理、重试、宿主、连接器、审核和人工修订，失败以后还可能出现重新整理和维护成本。
订阅和模型用量可以直接记账，人工等待、接管和运维则要另外记录。这里也要固定交付质量，否则低成本地交出一个不能用的文档，没有比较价值。
因此我会把成本与产物验收、人工介入和恢复能力一起观察。本页是成本框架，没有使用尚未验证的产品价格或虚构的节省比例。

- 本地材料：[前八个阶段性比较](../../content/zh-cn/agents/personal/first-eight-summary/index.md)
- 本地材料：[第二批阶段性比较](../../content/zh-cn/agents/personal/second-seven-summary/index.md)

## 27｜我会按这个顺序建设运行平台

时间：34:00–35:15；建议 75 秒。

把这些学习带回平台开发，我会分三步推进。先打通可检查的单次执行，能够保存输入版本、运行事件和真实产物，动作授权也有明确对象。没有这层基础，长任务只是把不可解释的问题拉长。
第二步是可靠地继续工作：目标、计划和运行分开，支持中断恢复、幂等检查、超时、取消和撤权传播。这个阶段优先证明任务可以正确停止和恢复。
第三步再扩展跨会话记忆、技能积累和多代理分工。每次增加自主性，都配一个可以检验和撤回的范围。
这是我从调研得到的建设顺序，不是对具体产品成熟度的排名，也不是一个未经估算的项目排期。

- 本地材料：[前八个阶段性比较](../../content/zh-cn/agents/personal/first-eight-summary/index.md)
- 本地材料：[第二批阶段性比较](../../content/zh-cn/agents/personal/second-seven-summary/index.md)

## 28｜我目前形成的三个认识

时间：35:15–36:00；建议 45 秒。

第一，Personal Agent 的核心价值在于减少持续委托的用户负担。这要求个人上下文、目标、状态和动作连接起来，不能只评价第一次回答。
第二，长期可靠性需要模型和运行平台共同成立。模型要理解变化并作出决策，平台要保存事实、检查权限、执行工具、恢复状态和验收交付。
第三，更多自主性需要更明确的边界和更好的证据。先证明任务完成了什么、能否正确停止，再扩大职责范围。
这些是当前的学习判断。我会继续通过统一场景积累真实记录，而不是让一份功能清单替代对系统的理解。接下来留四分钟交流。


## 29｜交流：我们最先验证哪一段？

时间：36:00–40:00；建议 240 秒。

可以围绕三个问题交流。第一，在我们熟悉的工作里，哪个持续委托值得先做成可重复实验？例如资料跟踪、项目周报或文档维护。先说清产物与完成标准。
第二，当前 Agent 开发遇到的主要阻力在哪里：信息更新、任务恢复、外部工具还是授权与状态解释？尽量举一个真实失败点，而不是只讨论抽象能力。
第三，哪一段需要由通用运行平台承担，哪一段保留在业务 Agent？这个边界会影响复用、责任与维护成本。
如果需要产品资料，可以直接跳到附录的十五个样本速查和来源页。附录不计入四十分钟主流程。


## 30｜附录 A｜第一批八个样本速查

时间：备查，不计时。

此页用于交流时查找产品阅读线索，按本地笔记快照保留条件，不是同条件能力测试。

- 本地材料：[调研清单](../../content/zh-cn/agents/personal/research-list/index.md)

## 31｜附录 B｜第二批七个样本速查

时间：备查，不计时。

此页用于查找第二批的当前证据条件。版本是资料快照，不保证所有安装入口同步。

- 本地材料：[调研清单](../../content/zh-cn/agents/personal/research-list/index.md)

## 32｜附录 C｜三个值得复核的实现细节

时间：备查，不计时。

这些细节来自公开参考文档，适合作为实验检查点。精确实现随版本变化，本轮没有部署或复现。

- 本地材料：[Hermes Agent](../../content/zh-cn/agents/personal/hermes-agent/references/index.md)
- 原始入口：[Hermes Agent](https://hermes-agent.nousresearch.com/docs/user-guide/features/memory)
- 本地材料：[DeepSeek Harness](../../content/zh-cn/agents/personal/deepseek-harness/references/index.md)
- 原始入口：[DeepSeek Harness](https://deepseek-harness.github.io/deepseek-harness/en/reference/subsystems/schedule)
- 本地材料：[Lindy](../../content/zh-cn/agents/personal/lindy/references/index.md)
- 原始入口：[Lindy](https://docs.lindy.ai/integrations/overview)

## 33｜附录 D｜原始来源：第一批

时间：备查，不计时。

完整的来源日期、资料性质和学习过程保留在仓库各产品 references/index.md。本页每个产品提供一个原始入口，逐页相关来源也放在讲者备注。


## 34｜附录 E｜原始来源：第二批

时间：备查，不计时。

这些原始入口配合本地索引阅读。资料快照截至 2026-10-22，没有把读取日期当成无日期页面的发布日期。


## 35｜附录 F｜后续实验记录模板

时间：备查，不计时。

实验模板用于日后沉淀真实观察，本轮没有填入虚构结果。不同配置先保留条件，结果有对应产物和过程后再讨论比较。

