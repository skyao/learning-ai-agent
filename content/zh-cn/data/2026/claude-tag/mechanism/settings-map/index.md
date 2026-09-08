---
title: "Claude Tag settings map"
linkTitle: "设置地图"
weight: 70
date: 2026-06-23
description: >
  官方文档 Claude Tag settings map 的中英对照
---

来源： [Claude Tag settings map](https://claude.com/docs/claude-tag/concepts/settings-map)

# Claude Tag settings map / Claude Tag 设置地图

Claude Tag settings map: the admin page for access and behavior, the usage page for spend limits, the in-Slack Configure link for channel instructions, and personal connectors for DMs. Claude Managed Agents is configured separately on the Claude Platform.

Claude Tag 设置地图：管访问与行为的管理页、管 spend limits 的用量页、Slack 里 Configure 链接对应的频道指令，以及私信用的个人 connectors。Claude Managed Agents 在 Claude Platform 上单独配置。

Claude Tag's settings live on claude.ai, split across a few pages that each own a different kind of setting. Which page you need depends on what you're changing. The table maps each surface to what it controls.

Claude Tag 的设置在 claude.ai 上，拆到几页，每页管一类设置。你需要哪一页取决于你在改什么。下表把每个面映射到它控制的内容。

| Surface | Who changes it | What it controls |
| --- | --- | --- |
| Claude Tag admin page | An Owner in your Claude organization | Access, behavior, and restrictions for channels, per scope |
| Usage page | An admin | Spend limits and each channel's spend against them |
| Analytics page | Anyone who can view the Analytics dashboard | Spend trends, projections, and per-channel reports; read-only |
| The Configure link in the footer of any Claude reply in a channel | Channel members (unless an admin restricts editing) and channel managers for their assigned channels | One channel's instructions and whether Claude replies there without an @-mention. Channel managers also set the channel's default model, repositories, and connections |
| Customize > Connectors on your own claude.ai account | You | Which of your personal tools apply in DMs |

| 界面 | 谁改 | 控制什么 |
| --- | --- | --- |
| Claude Tag 管理页 | Claude 组织中的 Owner | 按 scope 的频道访问、行为与限制 |
| 用量页 | 管理员 | Spend limits，以及各频道相对限额的花费 |
| Analytics 页 | 能看 Analytics 仪表盘的任何人 | 花费趋势、预测、按频道报告；只读 |
| 频道里任意 Claude 回复页脚的 Configure 链接 | 频道成员（除非管理员限制编辑）以及被指派频道的 channel managers | 一个频道的指令，以及 Claude 是否在没有 @提及时回复。Channel managers 还设定该频道的默认模型、仓库和 connections |
| 你自己 claude.ai 账户上的 Customize > Connectors | 你 | 哪些个人工具在私信里生效 |

Channel memory and routines aren't in the table because you change them by talking to Claude in the channel; see what anyone can change from the channel. Owners can review both, as each scope's memory files and scheduled work, from the Audit page, labeled Activity in the console.

频道记忆和 routines 不在表里，因为你通过在频道里跟 Claude 说话来改它们；见频道里任何人能改什么。Owner 可以从 Audit 页（控制台里标为 Activity）审阅二者，即每个 scope 的 memory files 和 scheduled work。

## The Claude Tag admin page / Claude Tag 管理页

Everything an Owner configures for channels lives at `claude.ai/admin-settings/claude-tag`. Settings there apply per scope (a channel, a workspace, or the whole organization). A scope without its own setting inherits from its parent, and a channel's setting overrides its workspace's, so two channels can run with different connections, models, and instructions. Most controls are Owner-only; the permissions table lists each action and who can take it.

Owner 为频道配置的一切都在 `claude.ai/admin-settings/claude-tag`。那里的设置按 scope 生效（一个频道、一个工作区或整个组织）。没有自己设置的 scope 从父级继承，频道的设置覆盖其工作区的，因此两个频道可以跑不同的 connections、模型和指令。多数控件仅 Owner 可用；权限表列出每项动作以及谁能做。

- **Access bundles:** the connections, domain entries, repository grants, and plugins Claude uses in the channels a bundle covers. See [Give Claude access](https://claude.com/docs/claude-tag/admins/add-connections).
- **Custom instructions:** standing guidance Claude reads in every session on a scope. See [Add custom instructions](https://claude.com/docs/claude-tag/admins/customize).
- **Default model:** the model new sessions in a scope start on. The picker shows the models your organization allows for Claude Code, leaving out any that Claude Tag doesn't support, so it can be missing models you see in Claude Code itself. See [Choose the model for a scope](https://claude.com/docs/claude-tag/users/models).
- **Auto mode allow rules:** plain sentences that pre-approve actions Claude's permission checker would otherwise flag or stop in a scope's sessions. See Auto mode allow rules.
- **Workspace pairing and restrictions:** which Slack workspaces are paired, whether DMs are allowed, guest-channel behavior, who can invoke Claude, and which generation of the app answers in each scope (on the Team plan, a single Enable Claude Tag switch replaces the per-scope setting). See [Restrict where Claude Tag operates](https://claude.com/docs/claude-tag/admins/restrict-access).
- **Channel name rules:** channel-name patterns that keep Claude out of matching channels or join it automatically to new public ones. See Block or auto-join channels by name.

- **Access bundles：** Claude 在 bundle 覆盖的频道里使用的 connections、域名条目、仓库授权和 plugins。见 [Give Claude access](https://claude.com/docs/claude-tag/admins/add-connections)。
- **Custom instructions：** Claude 在某个 scope 的每个 session 里读的常驻指引。见 [Add custom instructions](https://claude.com/docs/claude-tag/admins/customize)。
- **Default model：** 某个 scope 里新 session 启动时用的模型。选择器显示组织允许给 Claude Code 用的模型，并去掉 Claude Tag 不支持的，因此可能缺少你在 Claude Code 本身看到的模型。见 [Choose the model for a scope](https://claude.com/docs/claude-tag/users/models)。
- **Auto mode allow rules：** 用普通句子预先批准 Claude 的权限检查器否则会标记或拦住的动作，作用于某个 scope 的 session。见 Auto mode allow rules。
- **工作区配对与限制：** 哪些 Slack 工作区已配对、是否允许私信、访客频道行为、谁能调用 Claude，以及每个 scope 由哪一代应用应答（Team 计划上，单个 Enable Claude Tag 开关代替按 scope 的设置）。见 [Restrict where Claude Tag operates](https://claude.com/docs/claude-tag/admins/restrict-access)。
- **频道名规则：** 频道名模式，用来让 Claude 远离匹配的频道，或自动加入新的公开频道。见 Block or auto-join channels by name。

## Spend limits and usage / Spend limits 与用量

Spend limits live at `claude.ai/admin-settings/usage/claude-tag`, a different page than the Claude Tag admin page. It holds the organization-wide spend limit, the default spend limit for channels, per-channel limits, and each channel's spend against its limit. If your organization bills through a reseller, this page is not available. See [Set a spend limit](https://claude.com/docs/claude-tag/admins/set-spend-limit) for funding the usage balance and what users see when a limit is reached.

Spend limits 在 `claude.ai/admin-settings/usage/claude-tag`，与 Claude Tag 管理页不同。它容纳全组织 spend limit、频道默认限额、按频道限额，以及各频道相对其限额的花费。若组织通过经销商计费，此页不可用。如何注入用量余额、限额触达时用户看到什么，见 [Set a spend limit](https://claude.com/docs/claude-tag/admins/set-spend-limit)。

Spend trends live at `claude.ai/analytics/claude-tag`, the Claude Tag section of the Analytics dashboard. It shows total and projected spend, spend by channel, and spend by kind of work for the period you pick, and anyone with permission to view the Analytics dashboard can open it. It has no controls; see Usage analytics.

花费趋势在 `claude.ai/analytics/claude-tag`，即 Analytics 仪表盘的 Claude Tag 区。它显示你所选时段的总花费与预测花费、按频道花费、按工作种类花费；有权查看 Analytics 仪表盘的人都能打开。它没有控件；见 Usage analytics。

## The Configure page / Configure 页

Every Claude reply in a channel ends with a footer, and its Configure link opens a claude.ai page for that channel; replies in DMs have no Configure link. You can also send `@Claude !configure` in the channel, and Claude replies with a link to the same page.

频道里每条 Claude 回复都以页脚结束，其中的 Configure 链接打开该频道的 claude.ai 页；私信里的回复没有 Configure 链接。你也可以在频道里发 `@Claude !configure`，Claude 会回复同一页的链接。

Anyone in the channel who is also a member of your Claude organization can edit the Channel instructions field on that page, unless an admin has restricted editing to admins. The page's Respond automatically toggle controls whether Claude replies in the channel without an @-mention; see [Turn automatic replies on or off](https://claude.com/docs/claude-tag/users/when-claude-responds).

频道里同时也是 Claude 组织成员的人，都可以编辑该页的 Channel instructions 字段，除非管理员已把编辑限制为仅管理员。该页的 Respond automatically 开关控制 Claude 是否在没有 @提及时回复频道；见 [Turn automatic replies on or off](https://claude.com/docs/claude-tag/users/when-claude-responds)。

The page's Tools and access tab shows the channel's resolved connections and any allowed domains. Members can see those lists but not change them there. The same tab's Plugins card lists the channel's plugins, and members can add plugins there unless an admin has restricted editing to admins. A Routines tab lists the channel's routines with each one's schedule, status, and last run.

该页的 Tools and access 页显示频道解析后的 connections 以及任何允许的域名。成员能看见这些列表，但不能在那里改。同一页的 Plugins 卡片列出频道的 plugins，成员可以在那里添加 plugins，除非管理员已把编辑限制为仅管理员。Routines 页列出频道的 routines，含各自的日程、状态和上次运行。

The Configure page and the Custom instructions field on the scope's panel in admin settings write the same instructions, so a change from either place is visible in the other. See [Configure Claude for a channel](https://claude.com/docs/claude-tag/admins/customize).

Configure 页与管理设置里该 scope 面板上的 Custom instructions 字段写的是同一套指令，因此任一处的变更在另一处可见。见 [Configure Claude for a channel](https://claude.com/docs/claude-tag/admins/customize)。

On the Enterprise plan, an Owner can name channel managers for a channel. For them, the same page adds editable cards: the channel's default model on the General tab, and its repositories and access bundles on the Tools and access tab.

Enterprise 计划上，Owner 可以为一个频道指定 channel managers。对他们，同一页会多出可编辑卡片：General 页上的频道默认模型，以及 Tools and access 页上的仓库和 access bundles。

## Personal connectors on claude.ai / claude.ai 上的个人 connectors

Connectors you add to your own claude.ai account, under Customize > Connectors, apply only in DMs with Claude, because a DM runs on your own account. A channel uses only the connections an admin attached to it, and personal connectors never apply there. Slack has no connector settings of its own.

你在自己 claude.ai 账户的 Customize > Connectors 下添加的 connectors，只在与 Claude 的私信里生效，因为私信跑在你自己的账户上。频道只用管理员绑给它的 connections，个人 connectors 从不在那里生效。Slack 没有自己的 connector 设置。

See connectors on claude.ai for setting one up, and the troubleshooting entry if a connector you use on claude.ai is missing in Slack.

如何设置见 claude.ai 上的 connectors；若你在 claude.ai 上用的 connector 在 Slack 里缺失，见故障排除条目。

## Claude Tag versus Claude Managed Agents / Claude Tag vs. Claude Managed Agents

Claude Managed Agents is a separate product for developers, a pre-built agent harness that runs in managed infrastructure. You configure it on the Claude Platform through the Managed Agents API, and access requires a Claude API key. An agent there is defined by its model, system prompt, tools, MCP servers, and skills. Environments choose where its sessions run (a cloud sandbox, or a self-hosted sandbox on your own infrastructure), and scheduled deployments run it on a cron schedule.

Claude Managed Agents 是面向开发者的另一款产品：跑在托管基础设施上的预构建 agent harness。你在 Claude Platform 上通过 Managed Agents API 配置它，访问需要 Claude API 密钥。那里的 agent 由其模型、系统提示、工具、MCP 服务器和 skills 定义。Environments 选择其 session 跑在哪里（云沙箱，或你们自己基础设施上的自托管沙箱），计划部署按 cron 跑它。

The two products don't share settings. Nothing on the Claude Tag admin page configures a Managed Agent, and an agent defined on the Claude Platform doesn't change how Claude behaves in Slack.

两款产品不共享设置。Claude Tag 管理页上没有任何东西配置 Managed Agent；在 Claude Platform 上定义的 agent 也不会改变 Claude 在 Slack 里的行为。

## Related resources / 相关资源

- [Customize Claude Tag](https://claude.com/docs/claude-tag/admins/customize): the layers that shape Claude's behavior in a channel and who sets each one
- [How agent identity works](https://claude.com/docs/claude-tag/concepts/agent-identity): why channels and DMs use different access
- [Set up Claude Tag](https://claude.com/docs/claude-tag/admins/setup-overview): where each setting is first created during setup

- [Customize Claude Tag](https://claude.com/docs/claude-tag/admins/customize)：塑造 Claude 在频道里行为的各层，以及谁设置每一层
- [How agent identity works](https://claude.com/docs/claude-tag/concepts/agent-identity)：为何频道和私信用不同访问
- [Set up Claude Tag](https://claude.com/docs/claude-tag/admins/setup-overview)：设置过程中每项设置最初在哪里创建
