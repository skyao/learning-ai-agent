---
title: "What is Claude Tag?"
linkTitle: "帮助中心"
weight: 30
date: 2026-08-03
description: >
  帮助中心 What is Claude Tag? 的中英对照
---

来源（英）： [What is Claude Tag?](https://support.claude.com/en/articles/15594475-what-is-claude-tag)  
来源（中）： [什么是 Claude Tag？](https://support.claude.com/zh-CN/articles/15594475-%E4%BB%80%E4%B9%88%E6%98%AF-claude-tag)

# What is Claude Tag? / 什么是 Claude Tag？

Claude in Slack switched over to the new Claude Tag experience on August 3, 2026. To integrate Claude and Slack, use Claude Tag instead. Learn how to [set up Claude Tag](https://claude.com/docs/claude-tag/admins/setup-overview) or [migrate from the earlier Claude in Slack](https://claude.com/docs/claude-tag/admins/migrate-from-earlier).

Slack 中的 Claude 已于 2026 年 8 月 3 日切换到新的 Claude Tag 体验。要集成 Claude 和 Slack，请使用 Claude Tag。了解如何 [设置 Claude Tag](https://claude.com/docs/claude-tag/admins/setup-overview) 或 [从早期的 Slack 中的 Claude 迁移](https://claude.com/docs/claude-tag/admins/migrate-from-earlier)。

Claude Tag is a new way to work with Claude: tag @Claude into a conversation and it takes on real work, using your organization's tools and the shared context around it. Claude works under its own identity, builds context by remembering relevant information from the channels it’s in, and can follow up on its own.

Claude Tag 是与 Claude 协作的一种新方式：在对话中标记 @Claude，它会承担真实工作，使用你组织的工具以及周围的共享上下文。Claude 以自己的身份工作，通过记住所在频道的相关信息来建立上下文，并可以自行跟进。

Claude Tag is available on Team and Enterprise plans in beta. Claude Tag works in Slack today.

Claude Tag 在 Team 和 Enterprise 计划中以测试版提供。Claude Tag 目前在 Slack 中可用。

It’s how we’ve brought Claude’s capabilities directly to Slack, bringing AI assistance into your team’s workspace. This integration allows you to work with Claude without leaving Slack through three convenient surfaces:

这是我们将 Claude 的能力直接带进 Slack 的方式，把 AI 协助放进团队工作区。通过三个便捷界面，你可以在不离开 Slack 的情况下与 Claude 协作：

- **Channel tagging:** Tag @Claude in any channel to hand it a task, and follow along as it works in the thread.
- **Direct message with Claude:** Start a private conversation with @Claude.
- **AI assistant panel:** Click the Claude icon in Slack's AI assistant header to open a panel on the right side of your Slack window, allowing you to access Claude from anywhere in the Slack app.

- **频道标记：** 在任意频道中标记 @Claude 以交付任务，并在线程中跟进它的工作。
- **与 Claude 的私信：** 与 @Claude 开始私人对话。
- **AI 助手面板：** 点击 Slack AI 助手标题中的 Claude 图标，在窗口右侧打开面板，从 Slack 应用中的任何位置访问 Claude。

When you tag @Claude in a channel, Claude works through the task while the whole exchange stays visible to everyone in the channel. Everyone in a channel works with the same Claude, so anyone can steer it or pick up where it left off. Claude can also check in on its own, like posting when a job finishes or tagging you when a thread stalls. To learn more, see the [Claude Tag overview](https://claude.com/docs/claude-tag/overview).

当你在频道中标记 @Claude 时，Claude 会处理任务，整段交互对频道里所有人都可见。频道中的每个人都与同一个 Claude 协作，因此任何人都可以引导它，或从停下的地方接续。Claude 也可以自行检查，例如在工作完成时发帖，或在线程停滞时标记你。了解更多，见 [Claude Tag 概述](https://claude.com/docs/claude-tag/overview)。

In direct messages and the assistant panel, Claude has the capabilities you've enabled in your own Claude account, like web search and your connected tools. Channel tagging works differently: Claude acts under your organization's identity, using the tools and access an admin set up for that channel, and the work is billed to your organization rather than to you.

在私信和助手面板中，Claude 具有你在自己的 Claude 账户里启用的能力，例如网络搜索和已连接的工具。频道标记则不同：Claude 以组织身份行动，使用管理员为该频道配置的工具和访问权限，费用由组织而非你个人承担。

## Set up Claude Tag / 设置 Claude Tag

After the Claude app is installed, a Primary Owner or Owner sets up Claude Tag: provision Claude's identity, connect your organization's tools and repositories, and choose which channels Claude Tag can work in. People on your team don't need to set up anything individually once a channel is ready. For the full walkthrough, see the [Claude Tag setup guide](https://claude.com/docs/claude-tag/admins/setup-overview).

安装 Claude 应用后，由主所有者或所有者设置 Claude Tag：配置 Claude 的身份、连接组织的工具和代码仓库，并选择 Claude Tag 可以在哪些频道中工作。频道就绪后，团队成员无需各自再做设置。完整演练见 [Claude Tag 设置指南](https://claude.com/docs/claude-tag/admins/setup-overview)。

**Important:** Only a Primary Owner or Owner can set up Claude Tag's access and channels. The Admin role can't.

**重要：** 只有主所有者或所有者可以设置 Claude Tag 的访问权限和频道。Admin 角色无法完成这项设置。

## Control who can use Claude Tag / 控制谁可以使用 Claude Tag

In Organization settings > Claude Tag, Member Access has three modes: open to anyone in the Slack workspace, open to any member of your Claude organization, or only members whose role allows it. The third option is role-based access and is available on the Claude Enterprise plan. To restrict by role, set Member Access to "Only members whose role allows it" and grant the "Claude Tag in Slack" capability to a custom role. This setting applies to both channel mentions and direct messages. To set member access, see [Restrict where Claude Tag operates](https://claude.com/docs/claude-tag/admins/restrict-access).

在组织设置 > Claude Tag 中，成员访问有三种模式：对 Slack 工作区中的任何人开放、对 Claude 组织的任何成员开放，或仅对其角色允许的成员开放。第三种是基于角色的访问，在 Claude Enterprise 计划中可用。要按角色限制，将成员访问设为 “Only members whose role allows it”，并向自定义角色授予 “Claude Tag in Slack” 能力。该设置同时作用于频道提及和私信。设置成员访问见 [Restrict where Claude Tag operates](https://claude.com/docs/claude-tag/admins/restrict-access)。

## Manage spend limits for Claude Tag / 管理 Claude Tag 的支出限额

Claude Tag is consumption-based, so spend is based on usage rather than the number of people. As a Primary Owner or Owner, you control it from the usage settings in your admin console.

Claude Tag 按用量计费，支出取决于使用量而非人数。作为主所有者或所有者，你可从管理控制台的用量设置中控制它。

- **Organization-wide limit:** a hard cap on total Claude Tag spend across every channel. Spend can't exceed it.
- **Per-channel limits:** set a limit on any individual channel, on top of the organization-wide cap. New channels inherit a default limit.
- **Threshold alerts:** admins are notified at 75% and 95% of any limit.
- **Usage analytics:** a per-channel spend breakdown lives on the same page.

- **组织范围限额：** 对所有频道 Claude Tag 总支出的硬性上限，支出不能超过它。
- **按频道限额：** 在组织上限之上，为任意单个频道设置限额。新频道继承默认限额。
- **阈值告警：** 任一限额达到 75% 和 95% 时通知管理员。
- **用量分析：** 按频道的支出明细在同一页面。

**Note:** Work that would go over a limit is declined, never silently cut short. A blocked user can request more from their admin without leaving Slack, and the alert says whether the limit or the available balance caused the block.

**注意：** 会超出限额的工作会被拒绝，绝不会被静默截断。被拦住的用户可以不离开 Slack 向管理员申请更多额度；告警会说明是限额还是可用余额导致了阻止。

Tagging Claude in a channel is billed to your organization. Direct messages are billed to your own Claude account instead.

在频道中标记 Claude 的费用由组织承担。私信则由你自己的 Claude 账户承担。

To set limits, see [Set spend limits for Claude Tag](https://claude.com/docs/claude-tag/admins/set-spend-limit).

设置限额见 [Set spend limits for Claude Tag](https://claude.com/docs/claude-tag/admins/set-spend-limit)。

## Set access and permissions for Claude Tag / 为 Claude Tag 设置访问与权限

You decide what Claude Tag can reach by setting credentials and repository access at three levels. Each level inherits the permissions and memory of the one above it.

你通过在三个层级设置凭证和仓库访问，来决定 Claude Tag 能触及什么。每一级继承上一级的权限和记忆。

- **Organization-wide:** credentials and repositories that apply everywhere Claude Tag is installed.
- **Workspace:** access that applies to every public channel inside a Slack workspace. Inherits organization-wide permissions and memory.
- **Private channel:** extra credentials or repositories on top of what the workspace already grants. Use a private channel to keep sensitive connections to a smaller group. For example, a channel set up for legal work keeps its tools and memory separate from an engineering channel.

- **组织范围：** 适用于安装了 Claude Tag 的所有地方的凭证和仓库。
- **工作区：** 适用于 Slack 工作区内每个公开频道的访问。继承组织范围的权限和记忆。
- **私有频道：** 在工作区已授予内容之上追加的凭证或仓库。用私有频道把敏感连接限制在更小的群体。例如，为法务工作设置的频道，其工具和记忆与工程频道分开。

To configure access, see [Claude Tag identity and access](https://claude.com/docs/claude-tag/concepts/agent-identity).

配置访问见 [Claude Tag identity and access](https://claude.com/docs/claude-tag/concepts/agent-identity)。

### Channels with guests / 包含访客的频道

Channels that include Slack guests have a separate Allow Claude to respond to guests setting that controls whether Claude responds there, and what access Claude has when it does. Choose Restrict (the default, which blocks Claude from those channels entirely), Channel only (Claude replies, but while a guest is present it runs with channel-only access), or Allow (Claude replies with the full access configured for it, as in any other channel). For the full guide, see [Restrict guest channels](https://claude.com/docs/claude-tag/admins/restrict-access).

包含 Slack 访客的频道有单独的 “Allow Claude to respond to guests” 设置，用来控制 Claude 是否在那里回复，以及回复时拥有何种访问。可选 Restrict（默认，完全阻止 Claude 进入这些频道）、Channel only（Claude 会回复，但访客在场时只使用频道级访问），或 Allow（Claude 以为其配置的完整访问回复，与其他频道相同）。完整指南见 [Restrict guest channels](https://claude.com/docs/claude-tag/admins/restrict-access)。

## Review memory and activity for Claude Tag / 查看 Claude Tag 的记忆与活动

Claude Tag keeps context per channel and per workspace. Admins can view, edit, and delete that memory.

Claude Tag 按频道和工作区保留上下文。管理员可以查看、编辑和删除这些记忆。

An Audit view in Organization settings > Claude Tag > Audit lists every scheduled and one-time task across your organization in addition to all network calls made using Agent Identity. Each action is also traceable in the tool where it happened: posts come from the Claude app in Slack, and commits and pull requests show the Claude GitHub App as the author with a link back to the Slack thread that started them. In any channel, you can ask "@Claude what triggers do you have set up here?" to see and turn off standing work.

组织设置 > Claude Tag > Audit 中的审计视图列出组织内每一项计划任务和一次性任务，以及使用 Agent Identity 发出的所有网络调用。每个动作也能在发生它的工具里追溯：帖子来自 Slack 中的 Claude 应用，提交和拉取请求以 Claude GitHub App 为作者，并带有指回发起它们的 Slack 线程的链接。在任意频道中，可以问 “@Claude what triggers do you have set up here?” 来查看并关闭常驻工作。

## Privacy and data / 隐私与数据

### Data storage / 数据存储

Your Slack conversations with Claude remain separate from your Claude history, keeping work organized across platforms.

你与 Claude 的 Slack 对话与 Claude 历史记录保持分离，让工作在各平台之间保持有序。

### Data visibility / 数据可见性

Conversations initiated in Slack are not visible in your Claude chat history.

在 Slack 中发起的对话，不会出现在 Claude 聊天历史中。

Conversations initiated in the Claude web app are not accessible in Slack.

在 Claude 网页应用中发起的对话，无法在 Slack 中访问。

Each platform maintains separate conversation histories.

每个平台维护各自独立的对话历史。

### Data deletion / 数据删除

Conversations are automatically deleted from Claude within 30 days if you disconnect the integration or uninstall the app.

如果断开集成或卸载应用，对话会在 30 天内从 Claude 侧自动删除。

Your conversations in Slack follow your organization's Slack retention policies.

你在 Slack 中的对话遵循组织的 Slack 保留策略。

### Claude Tag memory / Claude Tag 记忆

Claude Tag remembers context to do its work, so channel and workspace memory is retained rather than discarded after each task. Memory and activity respect channel boundaries, and admins can review or delete what Claude remembers. Channel work is attributed to your organization's Claude identity, while work done in a direct message runs on your own account.

Claude Tag 记住上下文以便完成工作，因此频道和工作区记忆会被保留，而不是在每个任务后丢弃。记忆和活动尊重频道边界，管理员可以审查或删除 Claude 记住的内容。频道工作归属于组织的 Claude 身份，私信中完成的工作则跑在你自己的账户上。

## Frequently asked questions / 常见问题

### How is Claude Tag different from the Claude in Slack I already use? / Claude Tag 与我已经在用的 Slack 中的 Claude 有何不同？

Claude Tag is the next generation of that experience, in the same place. The familiar ways of working still apply, and Claude can now do more: it remembers context across days, schedules its own follow-ups, checks in proactively, and acts under its own identity. An organization’s Primary Owner or Owner opts your organization in to move over.

Claude Tag 是同一位置上该体验的下一代。熟悉的工作方式仍然适用，而 Claude 现在能做更多：记住跨越数天的上下文、安排自己的跟进、主动检查，并以自己的身份行动。由组织的主所有者或所有者选择让组织迁过去。

### Who can set up Claude Tag, and who pays for it? / 谁可以设置 Claude Tag，费用由谁承担？

Only an organization's Primary Owner or Owner can set up Claude Tag's access and channels. Tagging Claude in a channel is billed to your organization. Direct messages are billed to the person’s own Claude account instead.

只有组织的主所有者或所有者可以设置 Claude Tag 的访问权限和频道。在频道中标记 Claude 的费用由组织承担。私信则由该人自己的 Claude 账户承担。
