---
title: "How agent identity works"
linkTitle: "Agent 身份"
weight: 20
date: 2026-06-23
description: >
  官方文档 How agent identity works 的中英对照
---

来源： [How agent identity works](https://claude.com/docs/claude-tag/concepts/agent-identity)

# How agent identity works / Agent identity 如何工作

Claude Tag acts under its own service accounts in Slack channels, not as you. See how channel access is bounded, how credentials reach it, and why DMs differ.

Claude Tag 在 Slack 频道里以自己的服务账号行事，而不是作为你。本文说明频道访问如何划界、凭证如何到达它，以及私信为何不同。

Claude Tag's identity depends on where you message it.

Claude Tag 的身份取决于你在哪里给它发消息。

In Slack channels, Claude acts with its own service accounts, rather than as a specific user. An organization Owner provisions this identity during setup, so it arrives with its own account in each system it works in: the Claude app in Slack, the Claude GitHub App on GitHub, and a service account in every other connected tool. Actions it takes are attributed to those accounts; for example, posts come from the Claude app and pull requests show the Claude GitHub App as the author.

在 Slack 频道里，Claude 用自己的服务账号行事，而不是某个具体用户。组织 Owner 在设置时配好这套身份，因此它在每个工作系统里都有自己的账号：Slack 里的 Claude 应用、GitHub 上的 Claude GitHub App，以及其他每个已连接工具里的服务账号。它采取的动作记在那些账号上；例如帖子来自 Claude 应用，拉取请求显示 Claude GitHub App 为作者。

In direct messages (DMs) between a user and `@Claude`, the provisioned identity does not apply. DMs are one-to-one only; group DMs aren't supported. A DM has no channel to scope it to, so a DM session runs on the individual's own claude.ai account instead, with their personal connectors. GitHub is the exception in attribution: a pull request opened from a DM is authored by the Claude GitHub App, the same as in channels, though the session can only work with repositories connected on that user's own account. Owners can disable DMs organization-wide; see [Allow or disable direct messages](https://claude.com/docs/claude-tag/admins/restrict-access).

用户与 `@Claude` 之间的私信（DM）不适用这套配好的身份。私信仅一对一；不支持群组私信。私信没有可绑定的频道 scope，因此私信 session 改跑在该个人自己的 claude.ai 账户上，使用其个人 connectors。归属上 GitHub 是例外：从私信开出的拉取请求由 Claude GitHub App 署名，与频道相同，但 session 只能使用该用户自己账户上已连接的仓库。Owner 可以在全组织禁用私信；见 [Allow or disable direct messages](https://claude.com/docs/claude-tag/admins/restrict-access)。

How Claude behaves in channels (its standing instructions, plugins, and channel memory) is configured separately from its identity; see [custom instructions](https://claude.com/docs/claude-tag/admins/customize), [plugins](https://claude.com/docs/claude-tag/admins/customize), and [memory](https://claude.com/docs/claude-tag/users/memory) for more information.

Claude 在频道里如何表现（常驻指令、plugins、频道记忆）与其身份分开配置；详见 [custom instructions](https://claude.com/docs/claude-tag/admins/customize)、[plugins](https://claude.com/docs/claude-tag/admins/customize) 和 [memory](https://claude.com/docs/claude-tag/users/memory)。

## Channel sessions / 频道 session

When Claude works on a channel task, the request moves through three places:

Claude 处理频道任务时，请求经过三处：

- The ask happens in your Slack workspace, when a user tags Claude to do something or a scheduled task starts.
- The work Claude does runs in a sandbox, an isolated working environment built for the thread.
- The agent's credentials for any additional connections, such as GitHub or a data warehouse, reach those systems to pull the required information. An organization Owner sets up those credentials as part of provisioning the identity.

- 请求发生在你的 Slack 工作区：用户 Tag Claude 去做某事，或一条计划任务启动。
- Claude 做的工作跑在沙箱里——为该线程建的隔离工作环境。
- agent 为额外 connections（如 GitHub 或数据仓库）准备的凭证到达那些系统，拉取所需信息。组织 Owner 在配身份时设置这些凭证。

The diagram below traces one request through this process.

下图追踪一次请求如何走完这个过程。（原文此处有示意图。）

### Tag Claude in a channel / 在频道里 Tag Claude

A user asks Claude to chart last week's signups or fix a deploy test. The task gets a session in a thread under the message.

用户请 Claude 画出上周注册量，或修一次部署测试。任务在该消息下的线程里获得一个 session。

### The session sandbox starts / session 沙箱启动

Claude does the work in an isolated environment built for this thread, reading files, writing documents, and running code. The credentials you provision are not placed in the sandbox; they stay in the credential store and are injected at the proxy.

Claude 在为本线程建的隔离环境里干活：读文件、写文档、跑代码。你配好的凭证不放进沙箱；它们留在凭证库，在代理处注入。

### The request crosses Agent Proxy / 请求穿过 Agent Proxy

When the work needs something outside the sandbox, like calling the GitHub API or querying a warehouse, the request crosses Agent Proxy, the network boundary between the sandbox and everything else. Agent Proxy checks it against the rules an admin configured, and decides whether it proceeds and what credential, if any, travels with it.

当工作需要沙箱之外的东西（例如调用 GitHub API 或查询仓库）时，请求穿过 Agent Proxy——沙箱与其他一切之间的网络边界。Agent Proxy 对照管理员配置的规则检查它，决定是否放行，以及（若有）带上哪份凭证。

### Agent Proxy attaches a credential / Agent Proxy 附上凭证

A matching credential comes from the credential store, where an admin's connections are kept. Once saved, a credential is never displayed again; Agent Proxy retrieves it only at the moment of injection and attaches it to the request at the boundary, so the model and the sandbox itself are not given the key.

匹配的凭证来自凭证库，管理员的 connections 存放在那里。一旦保存，凭证不再显示；Agent Proxy 只在注入那一刻取出，并在边界把它附到请求上，因此模型和沙箱本身拿不到密钥。

### The result posts back, as Claude / 结果以 Claude 的身份回帖

The credentialed request reaches your system, like GitHub or the warehouse, and the result returns to the thread.

带凭证的请求到达你的系统（如 GitHub 或仓库），结果回到线程。

### Agent Proxy

For each outbound request from the sandbox, Agent Proxy checks the destination against three allow layers. A request goes through if any one of them allows it; a host that none of them allows is blocked.

对沙箱发出的每条出站请求，Agent Proxy 用三层允许规则检查目的地。任一层面允许，请求就通过；三层都不允许的主机被拦截。

| When the destination | Result |
| --- | --- |
| Matches a connection's rule, its allowed websites | The proxy attaches that connection's credential and forwards the request. The credential stays at the proxy; the model and sandbox are not given it. |
| Is on the bundle's Domains list but matches no connection | The proxy forwards the request without a credential. |
| Is allowed by the network access setting of the environment the scope's sessions run on | The proxy forwards the request without a credential. |
| Matches none of these | The proxy blocks the request. |

| 当目的地 | 结果 |
| --- | --- |
| 匹配某条 connection 的 rule（其 allowed websites） | 代理附上该 connection 的凭证并转发。凭证留在代理处；模型和沙箱拿不到。 |
| 在 bundle 的 Domains 列表上，但不匹配任何 connection | 代理不带凭证转发。 |
| 被该 scope 的 session 所跑 environment 的网络访问设置允许 | 代理不带凭证转发。 |
| 以上都不匹配 | 代理拦截该请求。 |

A new environment's network access level defaults to Trusted access, so a fresh setup can reach a documented set of package registries and developer hosts before an admin has configured anything. The cloud environments documentation lists the covered hosts. To narrow that default, pin an environment with a stricter level, such as No access.

新 environment 的网络访问级别默认为 Trusted access，因此在管理员尚未配置任何东西之前，全新设置就能到达一组已文档化的包注册表和开发者主机。cloud environments 文档列出覆盖的主机。要收紧该默认，钉一个更严的级别，例如 No access。

The same rules apply to code Claude runs in the sandbox, like `curl` or a `fetch` call: a request is blocked unless its host is allowed by one of the layers above.

Claude 在沙箱里跑的代码（如 `curl` 或 `fetch`）适用同一套规则：除非其主机被上面某一层允许，否则请求被拦截。

Agent Proxy carries HTTP and HTTPS only. A protocol that isn't HTTP, such as SSH or a database's native wire protocol, can't cross the proxy even to an allowed host.

Agent Proxy 只承载 HTTP 和 HTTPS。非 HTTP 的协议，例如 SSH 或数据库的原生线路协议，即使主机在允许名单上也不能穿过代理。

For the endpoints and addresses your network team may need to allowlist, see [Network requirements](https://claude.com/docs/claude-tag/admins/network-requirements).

网络团队可能需要加入 allowlist 的端点和地址，见 [Network requirements](https://claude.com/docs/claude-tag/admins/network-requirements)。

### How a host gets allowed / 主机如何被允许

A host that none of the three layers above allows is blocked, and Claude names the blocked host in the thread so an admin can add it; see [Give Claude access to your tools](https://claude.com/docs/claude-tag/admins/add-connections).

上面三层都不允许的主机被拦截，Claude 会在线程里点出被拦的主机，方便管理员添加；见 [Give Claude access to your tools](https://claude.com/docs/claude-tag/admins/add-connections)。

### Web search vs. network requests / 网页搜索 vs. 网络请求

Claude can search the web from a channel without any Domains entry. Web search is Anthropic's built-in web search tool, which runs on Anthropic's servers, not code running in the channel's sandbox.

Claude 可以从频道搜索网页，不需要任何 Domains 条目。网页搜索是 Anthropic 内置的搜索工具，跑在 Anthropic 的服务器上，而不是频道沙箱里的代码。

The sandbox sends nothing new for a search. Search requests travel to Anthropic the same way the session's model traffic already does, and the searching happens server-side. The Agent Proxy rules don't apply to web search; fetching a page or calling a service from the sandbox is an outbound network request and follows them.

搜索时沙箱不会新发出任何东西。搜索请求以 session 的模型流量同一路径到达 Anthropic，搜索发生在服务端。Agent Proxy 规则不适用于网页搜索；从沙箱抓取页面或调用服务才是出站网络请求，要走这些规则。

Searching and opening a page are different actions. A search returns content from the pages it matches, which Claude reads and cites, so it can answer from a page that search surfaced. Opening a URL, whether one you pasted or one a search returned, is a fetch from the sandbox, and the host needs an allow layer. That is why Claude can quote a page it found through search and still report that it can't open the same link.

搜索和打开页面是不同动作。搜索返回所匹配页面的内容，Claude 阅读并引用，因此它能根据搜索捞到的页面作答。打开一个 URL——无论是你粘贴的还是搜索返回的——是从沙箱发起的 fetch，主机需要一层允许。这就是为什么 Claude 可以引用它通过搜索找到的页面，却仍报告打不开同一条链接。

The web search capability setting in your organization's claude.ai admin settings governs claude.ai chat; it doesn't govern Claude Tag sessions, in channels or DMs. If Claude reports that it can't reach a host from a channel, the fix is a domain entry or the scope's environment, not that setting.

组织 claude.ai 管理设置里的网页搜索能力开关管的是 claude.ai 聊天；不管 Claude Tag 的 session（频道或私信）。若 Claude 报告从频道够不到某个主机，要修的是域名条目或该 scope 的 environment，不是那个开关。

### Agent access / Agent 访问

What Claude can reach in a channel comes from the Access bundles an admin attached to that channel's scope. Anyone in the channel gets the same capability, and the same request can do more in `#platform-eng` than in a general channel.

Claude 在频道里能触及什么，来自管理员绑到该频道 scope 上的 Access bundles。频道里任何人能力相同；同一请求在 `#platform-eng` 能做的比在普通频道多。

This design has four consequences.

这一设计有四项后果。

- Configure once. Everyone in the scope can use it immediately.
- Predictability. What Claude can do never changes based on who asked.
- Personal connectors apply in DMs. A shared channel uses only the service-account connections an admin attached, not connectors on anyone's claude.ai account.
- Clean audit. Actions in connected tools show up under a service account your security team already knows how to reason about.

- 配置一次。该 scope 里所有人立刻能用。
- 可预期。Claude 能做什么从不因提问者是谁而变。
- 个人 connectors 在私信里生效。共享频道只用管理员绑上的服务账号 connections，不用任何人 claude.ai 账户上的 connectors。
- 干净审计。已连接工具里的动作出现在安全团队已经知道如何推理的服务账号下。

That service-account identity is also how Claude appears wherever it acts. In Slack, it posts as the Claude app. On GitHub, commits and pull requests show the Claude GitHub App, and pull requests link back to the Slack thread they came from. In every other connected service, actions appear under the service account an admin provisioned, in that service's audit log.

这套服务账号身份也是 Claude 在各处行动时的露面方式。在 Slack，它以 Claude 应用发帖。在 GitHub，提交和拉取请求显示 Claude GitHub App，拉取请求链回它们来自的 Slack 线程。在其他每个已连接服务里，动作出现在管理员配好的服务账号下，记在该服务自己的审计日志中。

## Direct message channels / 私信频道

A DM with Claude works differently from a channel. There is no scope to attach an identity to, so a DM session runs with your own claude.ai account instead, the same way a Claude Code session on the web does, using your own connectors and credentials, with results attributed to you (pull requests excepted; the Claude GitHub App authors those from DMs too). The diagram contrasts with the channel path above; the sandbox is the same engine, but everything around it is yours.

与 Claude 的私信和频道不同。没有可绑定身份的 scope，因此私信 session 改跑在你自己的 claude.ai 账户上，和网页上的 Claude Code session 一样，使用你自己的 connectors 和凭证，结果记在你名下（拉取请求除外；从私信开出的同样由 Claude GitHub App 署名）。示意图与上面的频道路径对照：沙箱是同一套引擎，周围的一切是你的。（原文此处有示意图。）

The table lines up the two paths on the four dimensions that differ.

下表按四个不同维度把两条路径对齐。

| | In a channel | In a DM |
| --- | --- | --- |
| Acts as | Its own service accounts | You |
| Access | The channel's Access bundles | Your personal connectors |
| Attribution | The agent's accounts, in each tool's audit log | Your name, except pull requests, which the Claude GitHub App authors |
| Billing | The organization | Your seat |

| | 在频道里 | 在私信里 |
| --- | --- | --- |
| 作为谁行事 | 它自己的服务账号 | 你 |
| 访问 | 频道的 Access bundles | 你的个人 connectors |
| 归属 | agent 的账号，记在各工具的审计日志 | 你的名字；拉取请求除外，由 Claude GitHub App 署名 |
| 计费 | 组织 | 你的席位 |

Three of those differences are worth spelling out.

其中三项值得展开。

- Connectors. The connectors on your account are available, including MCP servers you've added.
- Billing. Usage bills to your seat rather than the organization's service key.
- Channel-side configuration. It doesn't follow you in; the agent's connections and repository grants don't apply in DMs.

- Connectors。你账户上的 connectors 可用，包括你加过的 MCP 服务器。
- 计费。用量记在你的席位上，而不是组织的服务密钥。
- 频道侧配置。不会跟着你进来；agent 的 connections 和仓库授权在私信里不适用。

DM work runs under your credentials, so most of it is attributed to you and can reach only what your own accounts can. Pull requests are the exception: Claude authors them as the Claude GitHub App from DMs too, so a repository's history shows the same author either way, while the repositories it can reach are still only the ones connected on your own account.

私信工作跑在你的凭证下，所以大部分记在你名下，也只能触及你自己账号能触及的。拉取请求是例外：从私信开出的同样由 Claude GitHub App 署名，因此仓库历史里作者两边一样，而它能触及的仓库仍然只是你自己账户上已连接的那些。

Use channels for shared work and DMs for personal tasks, or for data you'd rather access under your own authenticated identity than a shared channel credential.

共享工作用频道；个人任务，或你更希望以自己的已认证身份而不是共享频道凭证去访问的数据，用私信。

### Claude Tag versus Claude Code in Slack / Claude Tag vs. Slack 里的 Claude Code

A DM with Claude Tag runs under your own account, which is also how Claude Code in Slack works, routing a coding @-mention to a Claude Code session on the web under the requester's own account. The two can look identical. The table shows how to tell them apart.

Claude Tag 的私信跑在你自己的账户下，这也是 Slack 里 Claude Code 的工作方式：把编码相关的 @提及路由到请求者自己账户下、网页上的 Claude Code session。两者看起来可以一模一样。下表说明如何区分。

| | Claude Tag in a channel | Claude Code in Slack |
| --- | --- | --- |
| Runs under | The agent identity an admin provisioned | Your own Claude account, linked in the Claude app |
| GitHub | The Claude GitHub App; pull requests belong to the app | Your GitHub connection on claude.ai/code; pull requests open under your account |
| Access | The Access bundles an admin attached to the channel | Your personal connectors |
| Billing | The organization | Your seat |

| | 频道里的 Claude Tag | Slack 里的 Claude Code |
| --- | --- | --- |
| 跑在谁下面 | 管理员配好的 agent identity | 你在 Claude 应用里链接的自己的 Claude 账户 |
| GitHub | Claude GitHub App；拉取请求属于该应用 | claude.ai/code 上你的 GitHub 连接；拉取请求开在你账户下 |
| 访问 | 管理员绑到该频道的 Access bundles | 你的个人 connectors |
| 计费 | 组织 | 你的席位 |

If `@Claude` in your workspace opens pull requests as you, you're seeing Claude Code in Slack, not a Claude Tag session.

如果工作区里 `@Claude` 以你的身份开拉取请求，你看到的是 Slack 里的 Claude Code，而不是 Claude Tag session。

## Related resources / 相关资源

- [Security and data handling](https://claude.com/docs/claude-tag/concepts/security-and-data): where credentials are stored, what leaves your tenant, and what runs unattended
- [Give Claude access](https://claude.com/docs/claude-tag/admins/add-connections): provision the access this page describes
- [Restrict where Claude Tag operates](https://claude.com/docs/claude-tag/admins/restrict-access): narrow where this agent identity is allowed to act

- [Security and data handling](https://claude.com/docs/claude-tag/concepts/security-and-data)：凭证存在哪里、什么离开你的租户、什么在无人值守时运行
- [Give Claude access](https://claude.com/docs/claude-tag/admins/add-connections)：配置本页描述的访问
- [Restrict where Claude Tag operates](https://claude.com/docs/claude-tag/admins/restrict-access)：收窄这套 agent identity 被允许行动的范围
