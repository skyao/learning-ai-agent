---
title: "Work with Claude Tag"
linkTitle: "文档总览"
weight: 40
date: 2026-06-23
description: >
  官方文档 Work with Claude Tag 的中英对照
---

来源： [Work with Claude Tag](https://claude.com/docs/claude-tag/overview)  
状态： Public Beta

# Work with Claude Tag / 使用 Claude Tag

Claude Tag puts Claude in your Slack channels with admin-governed access. See what to hand it, how setup works, and where to start as an admin or end user.

Claude Tag 把 Claude 放进 Slack 频道，访问由管理员治理。本文说明可以交给它什么、如何配置，以及管理员和终端用户该从哪里开始。

Tag @Claude in. Get results back in the thread.

把 @Claude Tag 进来。在线程里拿回结果。

Anyone in a channel can tag Claude into a problem and hand it work: reproduce a bug and open a pull request, turn a decision thread into a doc, assemble the state of a project. It posts a checklist in the thread as it goes, and the whole exchange stays visible to the channel.

频道里的任何人都可以把 Claude Tag 进一个问题并交给它工作：复现缺陷并开出拉取请求、把决策线程写成文档、汇总项目现状。它会边做边在线程里发 checklist，整段交互对频道可见。

示例线程 / Example thread（`#platform-eng`）：

Dana: checkout has felt slow all morning — anyone else seeing it?  
Leo: same. @Claude can you investigate? Compare latency against this morning's deploy and find what's causing it.  
ClaudeAPP: On it. I'll compare latency before and after the deploy, track down the cause, and report back here.  
Done: Pulled p99 latency from Datadog / Diffed deploy 4f2c1 against main / Reproduced the slow query locally / In progress: Opening a pull request with the fix…

Dana：整个上午 checkout 都感觉很慢——还有人遇到吗？  
Leo：一样。@Claude 你能查一下吗？对比今天早上那次部署的延迟，找出原因。  
ClaudeAPP：收到。我会对比部署前后的延迟，定位原因，然后在这里回报。  
完成：从 Datadog 拉取 p99 延迟 / 对比部署 4f2c1 与 main / 在本地复现慢查询 / 进行中：正在打开带修复的拉取请求…

## Plans that include Claude Tag / 包含 Claude Tag 的计划

Claude Tag is available on Team and Enterprise plans, on Anthropic's first-party service. It isn't available on individual plans (Free, Pro, or Max), or for third-party deployments. To use it, your organization pairs its Slack workspace with its Claude organization; see the [setup overview](https://claude.com/docs/claude-tag/admins/setup-overview) for the full prerequisites.

Claude Tag 在 Anthropic 第一方服务的 Team 和 Enterprise 计划中可用。个人计划（Free、Pro 或 Max）以及第三方部署不可用。要使用它，组织需要将 Slack 工作区与 Claude 组织配对；完整前置条件见 [setup overview](https://claude.com/docs/claude-tag/admins/setup-overview)。

If you're choosing between Claude products for Slack-shaped work, [how Claude Tag differs from Cowork and Claude Code](https://claude.com/docs/claude-tag/concepts/how-it-works) compares them directly: team work in shared channels is Claude Tag; personal work on your own files is Cowork or Claude Code.

如果要在面向 Slack 形态的工作里选择 Claude 产品，[how Claude Tag differs from Cowork and Claude Code](https://claude.com/docs/claude-tag/concepts/how-it-works) 有直接对比：共享频道里的团队工作用 Claude Tag；个人文件上的工作用 Cowork 或 Claude Code。

## Where Claude Tag runs / Claude Tag 运行在哪里

Claude Tag works in Slack. You interact with it by writing in a Slack channel, thread, or direct message, and it replies there. Mention `@Claude` in a channel to guarantee it picks the message up.

Claude Tag 在 Slack 中工作。你在频道、线程或私信里写，它就在那里回复。在频道中提及 `@Claude`，可以确保它收到这条消息。

When Claude works on a task, it runs in an ephemeral sandbox, not on your computer. The sandbox is created when a conversation starts, holds any code or files Claude is working with, and is discarded when the conversation goes idle. See [how Claude Tag works](https://claude.com/docs/claude-tag/concepts/how-it-works) for the full lifecycle.

Claude 处理任务时，运行在短暂沙箱里，而不是你的电脑上。对话开始时创建沙箱，容纳 Claude 正在处理的代码或文件，对话空闲后丢弃。完整生命周期见 [how Claude Tag works](https://claude.com/docs/claude-tag/concepts/how-it-works)。

You extend what Claude can reach, like your repositories, ticketing systems, data warehouses, and custom tools, through connections, plugins, and skills. An Owner configures these per scope (a channel, a workspace, or the whole organization), separately from any connectors an individual user has set up in their own claude.ai account.

通过 connections、plugins 和 skills，扩展 Claude 能触及的范围，例如仓库、工单系统、数据仓库和自定义工具。由 Owner 按 scope（一个频道、一个工作区或整个组织）配置，与个人用户在自己的 claude.ai 账户里设置的连接器相互独立。

### For administrators / 给管理员

- [Set up Claude Tag](https://claude.com/docs/claude-tag/admins/setup-overview) — Pair your Slack workspace, connect the services Claude will work in, launch, and test that it works.
- [What can Claude Tag access?](https://claude.com/docs/claude-tag/concepts/agent-identity) — How admins set access per channel, and where credentials are stored.
- [How do I connect each service?](https://claude.com/docs/claude-tag/admins/add-connections) — Credential types, allowed hosts, and what each connection lets Claude reach.

- [设置 Claude Tag](https://claude.com/docs/claude-tag/admins/setup-overview) — 配对 Slack 工作区，连接 Claude 将使用的服务，上线并测试。
- [Claude Tag 能访问什么？](https://claude.com/docs/claude-tag/concepts/agent-identity) — 管理员如何按频道设置访问，以及凭证存放在哪里。
- [如何连接各个服务？](https://claude.com/docs/claude-tag/admins/add-connections) — 凭证类型、允许的主机，以及每个连接让 Claude 能触及什么。

### For end users / 给终端用户

- [How do I hand Claude Tag a task?](https://claude.com/docs/claude-tag/users/getting-started) — Mention Claude in any channel it's in, with nothing to install.
- [What is Claude Tag good at?](https://claude.com/docs/claude-tag/users/use-cases) — Use cases for coding, data, incidents, and go-to-market.
- [How do I get good results?](https://claude.com/docs/claude-tag/users/good-habits) — Good habits for scoping and reviewing work.
- [What does Claude Tag remember?](https://claude.com/docs/claude-tag/users/memory) — Channel memory, what's shared across the workspace, and who can see what.
- [Can Claude Tag run tasks on a schedule?](https://claude.com/docs/claude-tag/users/proactivity) — Scheduled jobs, channel watching, and triggers.

- [如何交给 Claude Tag 一项任务？](https://claude.com/docs/claude-tag/users/getting-started) — 在它已在的任意频道里提及 Claude，无需再安装任何东西。
- [Claude Tag 擅长什么？](https://claude.com/docs/claude-tag/users/use-cases) — 编码、数据、事故与市场落地用例。
- [如何拿到好结果？](https://claude.com/docs/claude-tag/users/good-habits) — 界定范围与审阅工作的好习惯。
- [Claude Tag 记住什么？](https://claude.com/docs/claude-tag/users/memory) — 频道记忆、跨工作区共享什么、谁能看见。
- [Claude Tag 能按日程跑任务吗？](https://claude.com/docs/claude-tag/users/proactivity) — 计划任务、盯频道与触发器。

## Billing and spend limits / 计费与支出限额

Adding Claude to Slack doesn't add a per-seat charge. Channel and thread work is billed by usage instead: it draws from a usage balance, an amount in your organization's billing currency that an Owner funds. A spend limit caps how much of that balance Claude Tag can use each billing period.

把 Claude 加进 Slack 不会额外按席位收费。频道和线程工作按用量计费：从 Owner 注入的用量余额中扣减（以组织账单货币计）。spend limit 限制每个账期内 Claude Tag 最多能用掉多少余额。

Direct messages don't draw from this balance. A DM runs on the sender's own claude.ai account and follows that seat's usual usage limits, so the organization spend limit doesn't apply to it.

私信不从这笔余额扣。DM 跑在发送者自己的 claude.ai 账户上，遵循该席位通常的用量限制，因此组织 spend limit 对它不适用。

To learn what your team's usage costs, run a pilot with a spend limit set and watch the per-channel breakdown on the usage page in your admin settings. Your organization may already have a launch usage credit to run that pilot against before it funds the balance itself.

要了解团队用量成本，先设好 spend limit 做试点，并在管理设置的用量页观察按频道明细。组织可能已有上线试用额度，可在自行注入余额之前先拿它跑试点。

[Set a spend limit](https://claude.com/docs/claude-tag/admins/set-spend-limit) covers how to fund the balance on each plan, set the limit, and what happens when usage reaches it.

[Set a spend limit](https://claude.com/docs/claude-tag/admins/set-spend-limit) 说明各计划如何注入余额、如何设限，以及用量触达限额时会发生什么。

## Put Claude Tag to work / 让 Claude Tag 开始干活

If Claude Tag is in your channel, you can use it now. (If it isn't there yet, an Owner in your Claude organization runs setup: see [Set up Claude Tag](https://claude.com/docs/claude-tag/admins/setup-overview).) Anyone in the channel can hand it work, and channel work bills to the organization, not to you.

如果 Claude Tag 已在你的频道里，现在就可以用。（若还没有，由 Claude 组织中的 Owner 完成设置：见 [Set up Claude Tag](https://claude.com/docs/claude-tag/admins/setup-overview)。）频道里的任何人都可以交给它工作，频道工作记在组织账上，而不是你个人。

What it can reach depends on the channel you're in, not on who you are. The fastest way to find out is to ask it: `@Claude what can you access from this channel?` Or, if you're signed in to your Claude organization, click Configure in the footer of a Claude reply in the channel to see its connections, the external services an admin has connected for that channel. Replies in org-shared channels have no Configure link.

它能触及什么，取决于你所在的频道，而不是你是谁。最快的办法是问它：`@Claude what can you access from this channel?` 或者，若已登录 Claude 组织，点击频道里 Claude 回复页脚的 Configure，查看管理员为该频道连接的外部服务。组织共享频道里的回复没有 Configure 链接。

The one exception is a DM, where it runs on your own claude.ai account instead of the channel's setup. Owners can disable DMs organization-wide; see Allow or disable direct messages.

唯一例外是私信：它跑在你自己的 claude.ai 账户上，而不是频道配置。Owner 可以在全组织禁用私信；见 Allow or disable direct messages。

### Common uses / 常见用途

The list below covers common ways teams use Claude Tag. Each link opens a guide with the prompts to paste and the connections the task needs.

下面列出团队使用 Claude Tag 的常见方式。每个链接打开一篇指南，含可粘贴的提示词以及该任务所需的连接。

- [Watch monitors and alerts](https://claude.com/docs/claude-tag/users/use-cases/watch-monitors): scheduled dashboard checks, and alerts investigated as they arrive. Needs a monitoring connection like Datadog, Sentry, or PagerDuty.
- [Triage requests](https://claude.com/docs/claude-tag/users/use-cases/triage-requests): an intake channel where Claude answers what it can, flags duplicates, and routes the rest. Works on Slack content alone.
- [Find answers in your docs](https://claude.com/docs/claude-tag/users/use-cases/find-answers): policy and runbook questions answered with the source. Needs a docs connection like Google Drive, Notion, or Confluence.
- [Answer data questions](https://claude.com/docs/claude-tag/users/use-cases/answer-data-questions): a plain-language question becomes a warehouse query and a chart. Needs a data warehouse connection.
- [Track projects and chase approvals](https://claude.com/docs/claude-tag/users/use-cases/track-projects): standing status digests and follow-ups that run until an approval lands.
- [Turn threads into docs and tickets](https://claude.com/docs/claude-tag/users/use-cases/create-artifacts): a settled discussion becomes the decision doc, the customer reply, or the filed tickets.
- [Fix bugs](https://claude.com/docs/claude-tag/users/use-cases/fix-bugs): a bug reported in the channel comes back as a draft pull request. Needs GitHub.
- [Work from your own channel](https://claude.com/docs/claude-tag/users/use-cases/your-own-channel): scratch questions, digests of channels you don't follow, and follow-ups on what you said you'd do.

- [盯监控与告警](https://claude.com/docs/claude-tag/users/use-cases/watch-monitors)：定时检查仪表盘，告警一到就调查。需要 Datadog、Sentry 或 PagerDuty 一类监控连接。
- [分诊请求](https://claude.com/docs/claude-tag/users/use-cases/triage-requests)：接入频道里 Claude 能答的先答、标重复、其余再路由。仅凭 Slack 内容即可工作。
- [在文档里找答案](https://claude.com/docs/claude-tag/users/use-cases/find-answers)：政策与 runbook 问题带来源作答。需要 Google Drive、Notion 或 Confluence 一类文档连接。
- [回答数据问题](https://claude.com/docs/claude-tag/users/use-cases/answer-data-questions)：自然语言问题变成数仓查询和图表。需要数据仓库连接。
- [跟踪项目并催办审批](https://claude.com/docs/claude-tag/users/use-cases/track-projects)：常驻状态摘要，以及一直跟到审批落地的催办。
- [把线程变成文档和工单](https://claude.com/docs/claude-tag/users/use-cases/create-artifacts)：已经谈定的讨论变成决策文档、客户回复或已提交工单。
- [修缺陷](https://claude.com/docs/claude-tag/users/use-cases/fix-bugs)：频道里报的缺陷，回来时是草稿拉取请求。需要 GitHub。
- [在自己的频道里工作](https://claude.com/docs/claude-tag/users/use-cases/your-own-channel)：随手问题、你没在跟的频道摘要，以及对你说过要做之事的跟进。

[Get started](https://claude.com/docs/claude-tag/users/getting-started) covers your first message, what you see while Claude works, and how to shape Claude's behavior in your channel.

[Get started](https://claude.com/docs/claude-tag/users/getting-started) 覆盖第一条消息、Claude 工作时你看到什么，以及如何塑造它在频道里的行为。

## Set Claude Tag up once for everyone / 为所有人设置一次 Claude Tag

You set up Claude Tag once, at `claude.ai/admin-settings/claude-tag`, and you must be an Owner in your Claude organization to do it. The setup page at that URL walks you through it:

Claude Tag 只需设置一次，入口是 `claude.ai/admin-settings/claude-tag`，且必须是 Claude 组织中的 Owner。该页会带你走完：

- Pair your Slack workspace: send `@Claude connect` in Slack to get a pairing code, then enter it on the setup page.
- Connect the services Claude will work in: for each one, such as your issue tracker or data warehouse, create an account for Claude and enter its credential.
- Grant repositories: choose which repositories the Claude GitHub App can reach.
- Set a monthly spend limit and launch.

- 配对 Slack 工作区：在 Slack 发送 `@Claude connect` 拿到配对码，再填到设置页。
- 连接 Claude 将使用的服务：对工单系统或数据仓库等每一个服务，为 Claude 创建账号并填入凭证。
- 授予仓库：选择 Claude GitHub App 能触及哪些仓库。
- 设定每月花费上限并上线。

Claude Tag starts with no access to your external systems. The services you connect during setup form an Access bundle, the set of tools Claude can reach, attached to the workspace or channels you paired. Once you launch, everyone in a channel Claude is in can use Claude Tag immediately, with no per-user setup.

Claude Tag 一开始不能访问任何外部系统。设置时连接的服务构成 Access bundle——Claude 能触及的工具集合——并绑到你配对的工作区或频道。上线后，Claude 所在频道里的所有人都能立刻使用，无需按人再配。

[Set up Claude Tag](https://claude.com/docs/claude-tag/admins/setup-overview) walks through those steps with what to have ready, what each choice means, and how to verify Claude Tag works once you launch.

[Set up Claude Tag](https://claude.com/docs/claude-tag/admins/setup-overview) 逐步说明要准备什么、每个选择意味着什么，以及上线后如何验证可用。

安全评审见 [Security and data handling](https://claude.com/docs/claude-tag/concepts/security-and-data)：安全模型、管理员能限制和不能限制什么、审计轨迹与网络要求。

## Where to start with Claude Tag / 从哪里开始

- [Set up Claude Tag](https://claude.com/docs/claude-tag/admins/setup-overview) — Admins: pair your Slack workspace, connect the services Claude will work in, and launch.
- [Hand Claude Tag your first task](https://claude.com/docs/claude-tag/users/getting-started) — It's already in your channel: send your first message.
- [How Claude Tag works](https://claude.com/docs/claude-tag/concepts/how-it-works) — The session model, what it can read, and how memory follows places.
- [Use case library](https://claude.com/docs/claude-tag/users/use-cases) — Prompts to paste, by team and connection.

- [设置 Claude Tag](https://claude.com/docs/claude-tag/admins/setup-overview) — 管理员：配对 Slack 工作区，连接服务，然后上线。
- [交给 Claude Tag 第一项任务](https://claude.com/docs/claude-tag/users/getting-started) — 它已在频道里：发出第一条消息。
- [Claude Tag 如何工作](https://claude.com/docs/claude-tag/concepts/how-it-works) — 会话模型、它能读什么、记忆如何跟随场所。
- [用例库](https://claude.com/docs/claude-tag/users/use-cases) — 按团队与连接分类的可粘贴提示词。
