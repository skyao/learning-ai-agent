---
title: "Glossary"
linkTitle: "术语表"
weight: 15
date: 2026-06-23
description: >
  官方文档 Glossary 的中英对照：Access bundle、Agent Proxy、scope、routine、channel memory
---

来源： [Glossary](https://claude.com/docs/claude-tag/concepts/glossary)

# Glossary / 术语表

Claude Tag terms defined in one place. See agent identity, Access bundle, channel manager, connection, scope, Agent Proxy, routine, channel memory, environment, and session.

Claude Tag 术语集中定义。见 agent identity、Access bundle、channel manager、connection、scope、Agent Proxy、routine、channel memory、environment 和 session。

## Access bundle

A named set of connections, domain entries, repository access, and rules that an Owner creates for Claude to use. Bundles attach to scopes, and one bundle can serve many scopes. See [Give Claude access](https://claude.com/docs/claude-tag/admins/add-connections).

Owner 为 Claude 创建的一套具名组合：connections、域名条目、仓库访问和规则。Bundle 绑到 scope 上，一个 bundle 可以服务许多 scope。见 [Give Claude access](https://claude.com/docs/claude-tag/admins/add-connections)。

## Agent identity

The service accounts Claude acts with: the Claude app in Slack, the Claude GitHub App on code, and the credentials an admin provisions for every other tool. See [How agent identity works](https://claude.com/docs/claude-tag/concepts/agent-identity).

Claude 据以行事的服务账号：Slack 里的 Claude 应用、代码侧的 Claude GitHub App，以及管理员为其他每个工具配好的凭证。见 [How agent identity works](https://claude.com/docs/claude-tag/concepts/agent-identity)。

## Agent Proxy

The network layer that injects credentials into Claude's outbound requests. The model and the sandbox are not given the key; Agent Proxy adds the credential at the network boundary when a request matches the rules an admin set. See [How agent identity works](https://claude.com/docs/claude-tag/concepts/agent-identity).

把凭证注入 Claude 出站请求的网络层。模型和沙箱拿不到密钥；当请求匹配管理员设定的规则时，Agent Proxy 在网络边界加上凭证。见 [How agent identity works](https://claude.com/docs/claude-tag/concepts/agent-identity)。

## Channel manager

A member of your Claude organization whom an Owner has named to set up specific channels. For each channel assigned to them, a channel manager sets the default model, adds repositories their own GitHub account can write to, and manages credentials in the channel's own bundle, without holding the Owner role. See [Delegate channel setup to channel managers](https://claude.com/docs/claude-tag/admins/customize).

Claude 组织中的一名成员，由 Owner 指定来配置特定频道。对分配给他们的每个频道，channel manager 设定默认模型、添加其本人 GitHub 账号可写入的仓库，并管理该频道自己的 bundle 里的凭证，而不需要持有 Owner 角色。见 [Delegate channel setup to channel managers](https://claude.com/docs/claude-tag/admins/customize)。

## Channel memory

Facts Claude retains while working in a channel, including facts you told it to remember and notes it writes itself. Entries from public channels are shared across the workspace; entries from private channels are saved to that channel's own store. See [What Claude Tag remembers](https://claude.com/docs/claude-tag/users/memory).

Claude 在频道里工作时保留的事实，包括你让它记住的，以及它自己写下的笔记。公开频道的条目在工作区共享；私有频道的条目存到该频道自己的存储。见 [What Claude Tag remembers](https://claude.com/docs/claude-tag/users/memory)。

## The earlier Claude in Slack / 早期的 Slack 中的 Claude

Claude Tag is the second generation of the Claude app in Slack:

Claude Tag 是 Slack 中 Claude 应用的第二代：

| | Legacy (the earlier Claude in Slack) | New (Claude Tag) |
| --- | --- | --- |
| Identity | Each user links their own claude.ai account | One agent identity with org-level service credentials |
| Sessions | Spawned per request | One persistent session per thread, shared |
| Memory | None | Shared workspace memory plus private-channel memory |
| Proactive work | None | Routines and channel watching |

| | Legacy（早期 Slack 中的 Claude） | New（Claude Tag） |
| --- | --- | --- |
| 身份 | 每个用户链接自己的 claude.ai 账户 | 一个 agent identity，配组织级服务凭证 |
| Session | 按请求生成 | 每个线程一个持久 session，共享 |
| 记忆 | 无 | 共享工作区记忆 + 私有频道记忆 |
| 主动工作 | 无 | Routines 与盯频道 |

Your admin chooses which generation answers `@Claude` in a given channel, so two channels in the same workspace can work differently. See [Migrate from the earlier Claude in Slack](https://claude.com/docs/claude-tag/admins/migrate-from-earlier).

管理员选择给定频道里由哪一代应答 `@Claude`，因此同一工作区里两个频道可以工作方式不同。见 [Migrate from the earlier Claude in Slack](https://claude.com/docs/claude-tag/admins/migrate-from-earlier)。

## Connection

A credential for one external service that Claude uses on the channel's behalf, like a Datadog API key or a GitHub App installation. Connections belong to the agent identity, not to any user, and are grouped into Access bundles by an admin.

Claude 代表频道使用的、针对某一个外部服务的凭证，例如 Datadog API key 或 GitHub App 安装。Connections 属于 agent identity，不属于任何用户，由管理员归入 Access bundles。

A connection is not a connector. A connector belongs to your personal claude.ai account. Claude cannot use your connectors in channels; it uses the channel's connections. The one exception is a DM, where it uses your own account instead; see [how DMs work in this model](https://claude.com/docs/claude-tag/concepts/agent-identity#direct-message-channels).

connection 不是 connector。connector 属于你个人的 claude.ai 账户。Claude 不能在频道里用你的 connectors；它用的是频道的 connections。唯一例外是私信，那里它改用你自己的账户；见 [how DMs work in this model](https://claude.com/docs/claude-tag/concepts/agent-identity#direct-message-channels)。

## Connector

A tool you add to your own claude.ai account, like Gmail, Google Drive, or a custom MCP server, listed under Customize > Connectors. Connectors are personal; in Slack they apply only in DMs. For the agent-side equivalent that works in channels, see [Connection](#connection).

你加到自己 claude.ai 账户上的工具，例如 Gmail、Google Drive 或自定义 MCP 服务器，列在 Customize > Connectors。Connectors 是个人的；在 Slack 里只在私信生效。频道里对应的 agent 侧概念见 [Connection](#connection)。

## Environment

The sandboxed compute configuration a session runs in, including its network access setting. Environments used here must be scoped to the organization, not to an individual account, because channel sessions run with no user account attached.

session 运行所在的沙箱计算配置，包括其网络访问设置。这里用的 environments 必须划到组织，而不是个人账户，因为频道 session 运行时不附着任何用户账户。

## Plugin

A bundle of skills an Owner attaches to an Access bundle or scope, teaching Claude how to use a specific tool or follow a specific process. Anthropic provides plugins for common tools; you can add your own. See [Attach plugins](https://claude.com/docs/claude-tag/admins/customize).

Owner 绑到 Access bundle 或 scope 上的一组 skills，教 Claude 如何使用特定工具或遵循特定流程。Anthropic 为常见工具提供 plugins；你也可以加自己的。见 [Attach plugins](https://claude.com/docs/claude-tag/admins/customize)。

## Routine

A scheduled or run-once task Claude runs on its own, such as a daily digest or a channel watch. Anyone in a channel can ask Claude to set one up, list what's scheduled, or disable one. Routines run with the channel's connections, not the creator's.

Claude 自行运行的计划任务或一次性任务，例如每日摘要或盯频道。频道里任何人都可以请 Claude 设一条、列出已计划的，或禁用一条。Routines 用的是频道的 connections，不是创建者的。

Claude Code also has a feature named routines. Those run under an individual user's account; Claude Tag routines run under the agent identity.

Claude Code 也有名为 routines 的功能。那些跑在个人用户账户下；Claude Tag 的 routines 跑在 agent identity 下。

## Rule

The match conditions Agent Proxy checks against each outbound request. A connection pairs one credential with the rule that decides when to inject it, and a request that matches the rule gets the credential attached at the boundary. A request that nothing allows (no rule, no domain entry, no environment network access setting) is blocked. See [Agent Proxy](#agent-proxy).

Agent Proxy 对每条出站请求检查的匹配条件。一条 connection 把一份凭证与决定何时注入的 rule 配对；匹配该 rule 的请求在边界被附上凭证。没有任何一层允许的请求（没有 rule、没有域名条目、没有 environment 网络访问设置）会被拦截。见 [Agent Proxy](#agent-proxy)。

## Scope

One of three levels Claude's settings can target: Default Slack access (the organization-wide root), one Slack workspace, or one channel (public or private). Scopes inherit downward, so a channel gets its workspace's settings plus any of its own. An Owner attaches Access bundles and instructions at a scope. See [Attach the bundle to a scope](https://claude.com/docs/claude-tag/admins/attach-to-scope).

Claude 设置可以瞄准的三个层级之一：Default Slack access（全组织根）、一个 Slack 工作区，或一个频道（公开或私有）。Scope 向下继承，因此一个频道拿到其工作区的设置，再加上它自己的。Owner 在某个 scope 上绑定 Access bundles 和指令。见 [Attach the bundle to a scope](https://claude.com/docs/claude-tag/admins/attach-to-scope)。

## Session

The unit of work behind one conversation. Each Slack thread binds to one persistent session, and anyone in the channel can continue it by replying in the thread. A channel where Claude works at the top level, outside threads, also carries one session for the channel itself, separate from every thread's. See [How Claude Tag works](https://claude.com/docs/claude-tag/concepts/how-it-works) and [Restart a stuck or wrong-context session](https://claude.com/docs/claude-tag/users/commands).

一次对话背后的工作单元。每个 Slack 线程绑定一个持久 session，频道里任何人都可以在线程里回复来继续它。Claude 在频道顶层（线程之外）工作时，频道本身也带着一个 session，与每个线程的分开。见 [How Claude Tag works](https://claude.com/docs/claude-tag/concepts/how-it-works) 和 [Restart a stuck or wrong-context session](https://claude.com/docs/claude-tag/users/commands)。

## Related resources / 相关资源

- [How Claude Tag works](https://claude.com/docs/claude-tag/concepts/how-it-works): the scope, channel, and thread model in action
- [How agent identity works](https://claude.com/docs/claude-tag/concepts/agent-identity): how connection, scope, and Agent Proxy fit together when Claude runs a task
- [Set up Claude Tag](https://claude.com/docs/claude-tag/admins/setup-overview): where bundles, scopes, and connections get created in the console

- [How Claude Tag works](https://claude.com/docs/claude-tag/concepts/how-it-works)：scope、频道、线程模型如何落地
- [How agent identity works](https://claude.com/docs/claude-tag/concepts/agent-identity)：Claude 跑任务时 connection、scope 和 Agent Proxy 如何拼在一起
- [Set up Claude Tag](https://claude.com/docs/claude-tag/admins/setup-overview)：bundle、scope 和 connections 在控制台的哪里创建
