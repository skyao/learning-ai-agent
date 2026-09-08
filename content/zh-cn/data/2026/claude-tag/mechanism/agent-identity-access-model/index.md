---
title: "Agent identity: a new access model"
linkTitle: "身份模型博文"
weight: 30
date: 2026-06-24
description: >
  概念博文 Agent identity: a new access model for autonomous, team-wide AI 的中英对照（Noah Zweben）
---

来源： [Agent identity: a new access model for autonomous, team-wide AI](https://claude.com/blog/agent-identity-access-model)  
日期： 2026 年 6 月 24 日  
作者： Noah Zweben（Claude Code 团队，Member of Technical Staff）  
分类： Product  
阅读时间： 约 5 分钟

# Agent identity in Claude Tag: a new access model for autonomous, team-wide AI / Claude Tag 中的 Agent identity：面向自主、全团队 AI 的新访问模型

How Claude Tag’s agent identity access model works, and best practices for configuring it in your team’s workspace.

Claude Tag 的 agent identity 访问模型如何工作，以及在团队工作区里配置它的实践建议。

For an AI agent to do its best work on a human-agent team, it needs access to the same tools, documents, and context humans have.

要让 AI agent 在人机混编团队里把工作做到最好，它需要能访问人类已有的同一套工具、文档和上下文。

In a “single player” AI experience (where one person chats with one assistant), that’s straightforward: you connect your own accounts and the agent acts on your behalf. But in a “multiplayer” AI experience like Claude Tag, Claude sits in a shared channel alongside many people at once, and it draws on the tools and context that belong to the workspace, rather than any one individual.

在「单人」AI 体验里（一个人与一个助手聊天），这很直接：你连上自己的账号，agent 代表你行事。但在 Claude Tag 这样的「多人」AI 体验里，Claude 同时坐在共享频道里、旁边有许多人，它调用的是属于工作区的工具和上下文，而不是属于某一个人。

To make multiplayer experiences work, Claude needs its own accounts for those tools, set up by an admin and tied to the workspace. We call this access model agent identity.

为了让多人体验成立，Claude 需要这些工具上属于它自己的账号，由管理员配置并绑到工作区。我们把这套访问模型叫作 agent identity。

In this post, we explain how agent identity works, how it moves permissions from per-user to per-channel, and how to scope it well in your own workspace.

本文说明 agent identity 如何工作、它如何把权限从按人改成按频道，以及如何在你自己的工作区里把范围划好。

## Why “act as the user” breaks down / 为什么「以用户身份行事」会垮掉

When you use AI as a personal assistant, you can connect platforms like Google Drive, GitHub, and your calendar, and let the model use your access permissions to read and write in them.

当你把 AI 当个人助手用时，可以连接 Google Drive、GitHub 和日历等平台，让模型用你的访问权限去读写。

This model doesn’t work for Claude Tag for two reasons:

这套模型对 Claude Tag 不适用，原因有二：

- **Increasing agent autonomy.** The length of a task that an AI agent can reliably complete on its own has been doubling roughly every four months. Agents now schedule their own tasks for later and respond to events long after the person who asked has logged off. While users set up routines that trigger them to act given certain situations, the agent works largely autonomously.
- **Multiplayer teams.** Claude Tag places Claude in shared spaces where teams are already working—e.g., a channel where three engineers and a PM are debugging together. But when more than one person is steering, whose permissions apply? There’s no single choice of person that’d be right all of the time. This gives admins the ability to define what an agent can do in Slack independent from the humans involved, and a distinct tracking of what is done in Slack.

- **Agent 自主性在上升。** AI agent 能可靠独立完成的任务长度，大约每四个月翻一倍。Agent 现在会给自己安排稍后的任务，并在提问者早已下线之后仍响应事件。虽然用户会设 routines，在特定情况下触发它们行动，但 agent 大体上是自主工作的。
- **多人团队。** Claude Tag 把 Claude 放进团队已经在工作的共享空间——例如三个工程师和一个 PM 一起排障的频道。但当不止一个人在转向时，用谁的权限？没有哪一个人选会永远正确。这让管理员能独立于牵涉其中的人，定义 agent 在 Slack 里能做什么，并对 Slack 里发生的事有单独的追踪。

### Claude acts as itself / Claude 作为它自己行事

In a channel where Claude Tag is active, Claude isn’t acting on behalf of a single user. It has its own account in each system it touches: it posts in Slack as the Claude app, opens pull requests as the Claude GitHub App, and queries your warehouse under a service account provisioned by an admin.

在启用了 Claude Tag 的频道里，Claude 不是代表某一个用户行事。它在触及的每个系统里都有自己的账号：在 Slack 以 Claude 应用发帖，以 Claude GitHub App 开拉取请求，在管理员配好的服务账号下查询你的数仓。

And because there are no personal user credentials in play, a shared channel can never become a side door into someone’s private documents.

也因为没有个人用户凭证介入，共享频道永远不会变成通往某人私人文档的侧门。

### Inheriting permissions / 权限继承

In the agent identity model, admins define an identity—the baseline set of connections and skills Claude holds everywhere—at the workspace level, and every channel inherits it by default. Then, where it makes sense, they can override it at the channel level, such as by granting the engineering channel access to GitHub and the data warehouse, or confining a CRM connection to a single private channel.

在 agent identity 模型里，管理员在工作区级定义一套身份——Claude 在各处持有的 connections 和 skills 基线——每个频道默认继承。然后在合适的地方，可以在频道级覆盖，例如给工程频道 GitHub 和数仓访问，或把 CRM 连接限制在单个私有频道。

In addition to credentials, admins also define:

除了凭证，管理员还定义：

- **Repository access:** which repos Claude can read and write to.
- **Connectors:** the tools and API keys that Claude uses to do its job. Across an organization, different API keys can connect to the same service at different permission levels (e.g., Claude might be given read-only warehouse access in a general channel, and write access in the data team’s private one).
- **Skills and plugins:** folders of instructions, scripts, and resources Claude loads dynamically to improve performance on specialized tasks.
- **Standing instructions:** custom instructions and context for each channel.

- **仓库访问：** Claude 能读写哪些仓库。
- **Connectors：** Claude 用来干活的工具和 API 密钥。在一个组织里，不同 API 密钥可以以不同权限级别连到同一服务（例如 Claude 在普通频道只有数仓只读，在数据团队私有频道有写权限）。
- **Skills 和 plugins：** Claude 动态加载的指令、脚本和资源文件夹，用来提升专项任务表现。
- **常驻指令：** 每个频道的自定义指令和上下文。

Because this model works around distinct Claude identities, revoking the identity ends Claude’s access everywhere that the identity was used. This takes much less effort to manage than auditing individual agent actions across dozens of user accounts.

因为这套模型围绕彼此分离的 Claude 身份运作，撤销该身份就会结束它被使用过的所有地方的访问。这比在几十个用户账户上审计单次 agent 动作省力得多。

## How the agent identity model works / Agent identity 模型如何工作

Agent identity replaces the question “what can this user do?” with “what can this agent do in this compartment?” That’s a departure from per-user Access Control Lists: it means that a channel member without direct access to the repo can ask Claude to read that repo, if the channel’s profile grants Claude that permission.

Agent identity 把问题从「这个用户能做什么？」换成「这个 agent 在这个隔间里能做什么？」这偏离了按人的访问控制列表：意味着一个对仓库没有直接访问的频道成员，也可以请 Claude 去读那个仓库——如果该频道的 profile 授予了 Claude 这项权限。

This is unusual, but we think it is a necessary step toward an access model that works for autonomous, multiplayer agents. Below, we sketch out how to think about setting those boundaries.

这不寻常，但我们认为这是迈向适合自主、多人 agent 的访问模型的必要一步。下面勾勒如何思考这些边界。

### How identity boundaries work / 身份边界如何工作

Claude Tag creates a distinct identity for each private channel; public channels in a workspace share a workspace-level identity. Claude's identity in a legal channel can't reach code that wasn't granted there, and its identity in an engineering channel can't read legal documents that weren't granted there. Memory and access respect those boundaries: what Claude learns in a private channel never appears in the wider workspace.

Claude Tag 为每个私有频道创建独立身份；工作区里的公开频道共享工作区级身份。法务频道里的 Claude 身份够不到未在那里授予的代码，工程频道里的身份也读不到未在那里授予的法务文档。记忆和访问都尊重这些边界：Claude 在私有频道里学到的，永远不会出现在更宽的工作区里。

The identity belongs to the channel, so anyone in it can tag Claude by default, and admins can scope each channel's profile to the least-privileged member. On Enterprise plans, role-based access control lets admins go further and decide which members can invoke Claude at all, so a channel governs both what the agent can reach and who can ask.

身份属于频道，因此默认频道里任何人都可以 Tag Claude，管理员可以把每个频道的 profile 收到权限最低的成员那一级。Enterprise 计划上，基于角色的访问控制让管理员可以再进一步，决定哪些成员根本能调用 Claude，于是一个频道既治理 agent 能触及什么，也治理谁能提问。

### Broad default access to tools and context / 对工具和上下文的宽默认访问

How teams scope Claude's tool access in Claude Tag: broad, low-risk integrations run in shared channels under an agent identity, while personal or team-specific tools stay in DMs and run as the user.

团队如何在 Claude Tag 里划定 Claude 的工具访问：宽、低风险的集成跑在共享频道里、落在 agent identity 下；个人或团队专用工具留在私信里、以用户身份运行。（原文此处有示意图。）

Running Claude Tag inside Anthropic, we found that its value compounds with tool and context access. Each connected system makes every other one more useful, because Claude can combine context across them—pulling a thread from Slack, a doc from Drive, a ticket from a tracker, and a query from a warehouse into one answer that no single tool could provide.

在 Anthropic 内部跑 Claude Tag 时，我们发现它的价值随工具和上下文访问而叠加。每多连一个系统，其他系统就更有用，因为 Claude 能跨系统组合上下文——从 Slack 抽线程、从 Drive 抽文档、从工单系统抽票、从数仓抽查询，合成任何一个单工具给不出的答案。

The teams that get the most out of Claude are the ones that grant it generous access from the start, and pare access back depending on their organization’s admin preferences. Agent identity gives admins broad enough scope for Claude to do useful cross-system work, with boundaries firm enough that the access never travels somewhere it wasn’t granted. Our advice is to start with a baseline profile in a few channels, read the audit trail, and then extend access where the work justifies it, one deliberate grant at a time.

从 Claude 拿得最多的团队，是一开始就给它宽访问、再按组织管理员偏好往回收的那些。Agent identity 给管理员足够宽的范围，让 Claude 能做有用的跨系统工作，同时边界足够硬，访问不会跑到未被授予的地方。我们的建议是：先在少数频道用基线 profile，读审计轨迹，再在工作能证明其必要的地方扩展访问，一次一次审慎授予。

For organizations that require even more granularity, admins can disable Claude Tag in specific channels. Admins can also apply role-based access controls (RBAC) to limit access to Claude Tag to specific users.

需要更细粒度的组织，管理员可以在特定频道禁用 Claude Tag。管理员也可以用基于角色的访问控制（RBAC）把 Claude Tag 限制给特定用户。

### Direct messages / 私信

With Claude Tag, direct messages work differently than in shared channels. DMs run on users’ individual claude.ai accounts—their connectors, credentials, and name on the result. This makes DMs the right place to work with Claude on tasks and with tools that should never live in a channel, like email drafts or software only you have a license for.

在 Claude Tag 里，私信与共享频道不同。私信跑在用户各自的 claude.ai 账户上——他们的 connectors、凭证，以及结果上的名字。因此，那些绝不该活在频道里的任务和工具（例如邮件草稿，或只有你有许可证的软件），私信才是和 Claude 一起做的地方。

### Security and audit / 安全与审计

When an admin adds a connection to a channel's profile, the credential is stored independently and mapped to that channel's identity, then injected at the network boundary at request time. Outbound traffic to any host an admin hasn't allowed is blocked outright. On the audit side, every routine, memory write, and network call made with agent credentials is recorded, and because Claude acts under its own service accounts, those actions also land in each connected system's own logs.

管理员把一条 connection 加到频道 profile 时，凭证被独立存储并映射到该频道身份，然后在请求时于网络边界注入。到管理员未允许的任何主机的出站流量直接拦截。审计侧，用 agent 凭证做出的每条 routine、每次记忆写入、每次网络调用都被记录；又因为 Claude 以自己的服务账号行事，这些动作也会落到每个已连接系统自己的日志里。

## What’s next / 下一步

Agent identity is the foundation of Claude Tag's access model. In the future, we plan to strengthen our Claude Tag’s security offerings to include just-in-time credential grants—so that a user can approve a single sensitive action in the moment without permanently widening the agent's scope—and an identity-aware overlay for organizations with more complex clearance structures. This will add user-level checks on top of an agent’s scope, so Claude only acts when both the channel's profile and the requesting user's own permissions allow it.

Agent identity 是 Claude Tag 访问模型的地基。未来我们计划加强 Claude Tag 的安全能力，包括即时（just-in-time）凭证授予——让用户能当场批准一次敏感动作，而不永久扩大 agent 的范围——以及面向更复杂密级结构的组织的身份感知叠加层。这将在 agent 的 scope 之上加上用户级检查，只有频道 profile 和请求用户本人的权限都允许时，Claude 才行动。

The shift from single player to multiplayer AI in products like Claude Tag makes long-running, team-based work possible. Agent identity ensures that Claude’s access to tools is broad enough to be useful, but scoped enough to be secure at enterprise scale.

像 Claude Tag 这样的产品从单人到多人 AI 的转变，让长时、基于团队的工作成为可能。Agent identity 确保 Claude 对工具的访问宽到有用，又收得足够紧，能在企业规模上安全。

Learn more about [Claude Tag](https://claude.com/product/tag).

了解更多：[Claude Tag](https://claude.com/product/tag)。
