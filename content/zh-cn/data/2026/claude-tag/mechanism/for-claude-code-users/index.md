---
title: "Claude Tag for Claude Code users"
linkTitle: "给 Code 用户"
weight: 80
date: 2026-06-23
description: >
  官方文档 Claude Tag for Claude Code users 的中英对照
---

来源： [Claude Tag for Claude Code users](https://claude.com/docs/claude-tag/concepts/for-claude-code-users)

# Claude Tag for Claude Code users / 给 Claude Code 用户的 Claude Tag

Which parts of a Claude Code setup carry into Claude Tag, which move to admin settings, and how Slack threads map to sessions.

Claude Code 配置里哪些能带到 Claude Tag，哪些改由管理设置接管，以及 Slack 线程如何映射到 session。

Claude Tag runs the same engine as Claude Code. When you tag `@Claude` in Slack with a task, a session starts in a sandbox that your organization configures, not on your machine. That sandbox is the same infrastructure that runs Claude Code on the web, described in [Compute and the sandbox](https://claude.com/docs/claude-tag/concepts/security-and-data#compute-and-the-sandbox).

Claude Tag 跑的是与 Claude Code 同一套引擎。你在 Slack 里用 `@Claude` Tag 一项任务时，session 在组织配置的沙箱里开始，而不是在你的机器上。那个沙箱就是网页上 Claude Code 用的同一套基础设施，见 [Compute and the sandbox](https://claude.com/docs/claude-tag/concepts/security-and-data#compute-and-the-sandbox)。

If you use Claude Code on the web, a session works the way a web session does, from a fresh clone of your repository rather than from files on your machine. The `CLAUDE.md` files and skills you checked into that repository apply in the session as they do in a web session.

若你用网页上的 Claude Code，session 的工作方式与 web session 相同：从仓库的全新克隆开始，而不是从你机器上的文件。你提交进该仓库的 `CLAUDE.md` 文件和 skills 会像在 web session 里一样应用到这个 session。

If you run Claude Code in your terminal, the settings on your own machine don't reach a session, because the session runs in the sandbox and can't read your machine. For most of those settings, an admin sets a channel-wide counterpart instead, and a few have no counterpart at all. This page shows what happens when a session starts, which admin settings replace your local ones, and how Slack threads map to sessions.

若你在终端里跑 Claude Code，你机器上的设置到不了 session，因为 session 跑在沙箱里，读不到你的机器。对这些设置中的大多数，管理员会设一套频道级对应物；少数完全没有对应物。本页说明 session 启动时发生什么、哪些管理设置替换你的本地设置，以及 Slack 线程如何映射到 session。

## What happens when a session starts / Session 启动时发生什么

A session begins with a fresh sandbox and no repository checked out. Your repository's Claude Code configuration takes effect only after Claude clones the repository, which happens when your message names a repository that an admin has granted to the channel.

session 从全新沙箱开始，没有检出任何仓库。你仓库里的 Claude Code 配置只有在 Claude 克隆该仓库之后才生效；这发生在你的消息点名了一个管理员已授予该频道的仓库时。

| Step | What applies |
| --- | --- |
| You tag `@Claude` with a task | Your message is the task, and Claude starts work in a sandbox with no repository |
| Your message names a granted repository | Claude clones it into the sandbox |
| The clone completes | `CLAUDE.md`, `.claude/CLAUDE.md`, `.claude/rules/*.md`, and the skills in `.claude/skills/` load into the session |

| 步骤 | 什么生效 |
| --- | --- |
| 你用 `@Claude` Tag 一项任务 | 你的消息就是任务，Claude 在没有仓库的沙箱里开始工作 |
| 你的消息点名了一个已授予的仓库 | Claude 把它克隆进沙箱 |
| 克隆完成 | `CLAUDE.md`、`.claude/CLAUDE.md`、`.claude/rules/*.md` 以及 `.claude/skills/` 里的 skills 加载进 session |

Hooks in the repository's `.claude/settings.json` don't run in the session.

仓库 `.claude/settings.json` 里的 hooks 不会在 session 里运行。

## Local settings versus admin settings / 本地设置 vs. 管理设置

A session reads configuration from your repository, not from your machine. The `CLAUDE.md` files and skills you checked into the repository load when Claude clones it, as described in [What happens when a session starts](#what-happens-when-a-session-starts--session-启动时发生什么).

session 从你的仓库读配置，而不是从你的机器。你提交进仓库的 `CLAUDE.md` 文件和 skills 在 Claude 克隆它时加载，见 [Session 启动时发生什么](#what-happens-when-a-session-starts--session-启动时发生什么)。

The settings on your machine never load into a session, because a session runs in the sandbox and can't read your machine. That includes your `~/.claude` directory, your personal `settings.json`, your shell environment, and the MCP servers you configured locally. They still apply when you run Claude Code in your terminal.

你机器上的设置永远不会加载进 session，因为 session 跑在沙箱里，读不到你的机器。这包括你的 `~/.claude` 目录、个人 `settings.json`、shell 环境，以及你在本地配置的 MCP 服务器。你在终端里跑 Claude Code 时它们仍然生效。

### Admin counterparts for local settings / 本地设置的管理侧对应物

The table shows what takes the place of each setting from your machine. Where a counterpart exists, an admin sets it for the whole channel.

下表显示你机器上每项设置由什么替代。有对应物时，由管理员为整个频道设置。

| Claude Code setting on your machine | In Claude Tag |
| --- | --- |
| `/model` | An admin sets the default model per channel, and you can switch models in a thread |
| Effort level | Not configurable. Sessions run at the model's default effort. |
| MCP servers in `.mcp.json` | Not loaded, even when `.mcp.json` is checked into the repository. A session reaches external services only through the connections an admin set for the channel, and each connection holds that service's credentials. |
| Secrets and API keys in your environment | An admin provisions them as channel connections. The raw key never enters the sandbox. It is added to requests at the network layer. |
| Environment variables | An admin sets them on the environment the channel's sessions run on, and every session in the channel reads them. There is no per-person environment to customize. The values are readable in every session on the environment, so ask an admin to add secrets as connections instead. |
| A personal `settings.json` | Not loaded. |
| A setup script for your workspace | An admin sets a setup script on the environment the channel's sessions run on, and what it installs is in place when each session in the channel starts. For setup that belongs to one repository, use `CLAUDE.md` install steps instead. |
| Permission prompts | Sessions run in auto mode, where Claude's permission checker reviews each action and can stop it. An admin pre-approves routine actions with auto mode allow rules instead of you approving in the moment. |

| 你机器上的 Claude Code 设置 | 在 Claude Tag 里 |
| --- | --- |
| `/model` | 管理员按频道设默认模型，你可以在线程里切换模型 |
| Effort level | 不可配置。Session 以模型的默认 effort 运行。 |
| `.mcp.json` 里的 MCP 服务器 | 不加载，即使 `.mcp.json` 已提交进仓库。session 只通过管理员为该频道设置的 connections 到达外部服务，每条 connection 持有该服务的凭证。 |
| 环境里的 secrets 和 API keys | 管理员把它们配成频道 connections。原始密钥从不进入沙箱。它在网络层被加到请求上。 |
| 环境变量 | 管理员设在该频道 session 所跑的 environment 上，频道里每个 session 都读它们。没有按人定制的 environment。这些值在该 environment 的每个 session 里可读，因此请管理员把 secrets 加成 connections。 |
| 个人 `settings.json` | 不加载。 |
| 工作区的 setup script | 管理员把 setup script 设在该频道 session 所跑的 environment 上，频道里每个 session 启动时安装内容已就位。属于某一个仓库的安装步骤，改用 `CLAUDE.md`。 |
| 权限提示 | Session 跑在 auto mode，Claude 的权限检查器审阅每个动作并可以拦住。管理员用 auto mode allow rules 预先批准常规动作，而不是由你当场批准。 |

To change what a session can reach, ask an admin to add a connection. The change applies to every session in the channel.

要改变 session 能触及什么，请管理员加一条 connection。变更对该频道里每个 session 生效。

## How Slack threads map to sessions / Slack 线程如何映射到 session

You start a session by tagging `@Claude` in a thread with a task, and that session gets its own sandbox. Each reply in the same thread continues the session, so there is no `--continue` or `/resume` to run, and a session stays attached to the thread it started in. See the [lifecycle of a request](https://claude.com/docs/claude-tag/concepts/how-it-works#lifecycle-of-a-request) for what happens between replies.

你在线程里用 `@Claude` Tag 一项任务来开始 session，该 session 有自己的沙箱。同一线程里的每条回复都继续这个 session，因此没有 `--continue` 或 `/resume` 可跑，session 一直附着在它开始的那条线程上。回复之间发生什么，见 [lifecycle of a request](https://claude.com/docs/claude-tag/concepts/how-it-works#lifecycle-of-a-request)。

Each thread is its own session with its own sandbox, so run parallel tasks in separate threads the way you would in separate terminal tabs. The sandbox is released after a quiet period, but the conversation stays in the thread, and a later reply continues the session. See [what survives between replies](https://claude.com/docs/claude-tag/concepts/how-it-works#what-survives-between-replies).

每条线程是自己的 session、自己的沙箱，因此并行任务开在分开的线程里，就像开在分开的终端标签页。安静一段时间后沙箱被释放，但对话留在线程里，稍后的回复会继续这个 session。见 [what survives between replies](https://claude.com/docs/claude-tag/concepts/how-it-works#what-survives-between-replies)。

## Whose credentials a session uses / Session 用谁的凭证

Claude Code acts with your credentials. What a session acts with depends on whether you tag Claude in a channel or in a direct message.

Claude Code 用你的凭证行事。session 用什么，取决于你在频道还是在私信里 Tag Claude。

### In a channel / 在频道里

In a channel, Claude acts with credentials of its own, service accounts that an admin provisions. A pull request comes from the Claude GitHub App rather than from you, and a query against a connected service runs with the channel's credentials no matter who asked. Access is set per channel, not per person.

在频道里，Claude 用它自己的凭证行事——管理员配好的服务账号。拉取请求来自 Claude GitHub App 而不是你；对已连接服务的查询无论谁问，都用频道的凭证。访问按频道设定，不按人。

### In a direct message / 在私信里

A direct message runs on your own claude.ai account, with the connectors you added to that account rather than the connections an admin set for the channel, so a DM is the closest match to a Claude Code session on your own credentials.

私信跑在你自己的 claude.ai 账户上，用的是你加到该账户的 connectors，而不是管理员为频道设置的 connections，因此私信是最接近「用你自己凭证的 Claude Code session」的形态。

## Steer a session in the thread / 在线程里转向 session

Where you would interrupt Claude Code and edit a file or reprompt, reply in the thread. Corrections and added constraints land as messages, and Claude folds them into the running task.

你会打断 Claude Code 去改文件或重写提示的地方，改成在线程里回复。纠正和追加约束作为消息落地，Claude 把它们折进正在跑的任务。

### Keep instructions in channel memory / 把指令放进频道记忆

For instructions that should persist beyond one thread, use channel memory, the instructions Claude keeps for one channel and reads in every session there. Keep repository conventions in `CLAUDE.md`. Put channel conventions in memory by telling Claude to remember them:

应跨越一条线程持久存在的指令，用频道记忆——Claude 为某一个频道保留、并在那里每个 session 里阅读的指令。仓库惯例放在 `CLAUDE.md`。频道惯例放进记忆，告诉 Claude 记住它们：

```text
@Claude remember for this channel: reports go out as tables
```

```text
@Claude remember for this channel: reports go out as tables
```

See [What Claude remembers](https://claude.com/docs/claude-tag/users/memory) for how memory is scoped and how to correct it.

记忆如何划定范围、如何纠正，见 [What Claude remembers](https://claude.com/docs/claude-tag/users/memory)。

## Claude Tag versus a bot you build on the API / Claude Tag vs. 你用 API 自建的机器人

A Slack bot you build on the Claude API is software your team writes and hosts. It calls the API with your key, holds its own Slack tokens, and has the tools and memory you code into it.

你基于 Claude API 自建的 Slack 机器人，是团队自己写、自己托管的软件。它用你的密钥调 API，持有自己的 Slack token，工具和记忆是你编进去的。

Claude Tag is Anthropic's hosted Slack app. It takes care of the parts you would otherwise build.

Claude Tag 是 Anthropic 托管的 Slack 应用。它包办了你否则得自己建的那些部分。

- **Hosting.** Each thread gets a Claude Code session in a sandbox Anthropic runs, or in the environment your organization pins, under an agent identity of its own.
- **Credentials.** An admin gives Claude connections to your tools, and Agent Proxy attaches the credentials at the network boundary, outside the sandbox.
- **Customization.** Custom instructions, channel memory, and routines are built in.
- **Governance and billing.** Access controls and spend limits are set in claude.ai admin settings, and usage is billed to the organization's usage balance.

- **托管。** 每条线程在 Anthropic 跑的沙箱里（或组织钉住的 environment 里）获得一个 Claude Code session，落在它自己的 agent identity 下。
- **凭证。** 管理员给 Claude 配到你们工具的 connections，Agent Proxy 在网络边界、沙箱之外附上凭证。
- **定制。** 自定义指令、频道记忆和 routines 是内建的。
- **治理与计费。** 访问控制和 spend limits 在 claude.ai 管理设置里设定，用量记到组织的用量余额。

## Related resources / 相关资源

- [How Claude Tag works](https://claude.com/docs/claude-tag/concepts/how-it-works): the session model this page maps your setup onto
- [How agent identity works](https://claude.com/docs/claude-tag/concepts/agent-identity): why a channel uses the agent's access and a DM uses yours
- [Claude Tag settings map](https://claude.com/docs/claude-tag/concepts/settings-map): where each setting your organization owns is set
- [Configure GitHub access](https://claude.com/docs/claude-tag/admins/configure-github): what loads from a repository and how installs work in the sandbox

- [How Claude Tag works](https://claude.com/docs/claude-tag/concepts/how-it-works)：本页把你的配置映射上去的 session 模型
- [How agent identity works](https://claude.com/docs/claude-tag/concepts/agent-identity)：为何频道用 agent 的访问、私信用你的
- [Claude Tag settings map](https://claude.com/docs/claude-tag/concepts/settings-map)：组织拥有的每项设置在哪里配
- [Configure GitHub access](https://claude.com/docs/claude-tag/admins/configure-github)：从仓库加载什么，以及安装在沙箱里如何工作
