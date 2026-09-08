---
title: "Security and data handling"
linkTitle: "安全与数据"
weight: 50
date: 2026-06-23
description: >
  官方文档 Security and data handling 的中英对照
---

来源： [Security and data handling](https://claude.com/docs/claude-tag/concepts/security-and-data)

# Security and data handling / 安全与数据处理

Claude Tag runs in an isolated sandbox that holds no credentials. Covers sandbox isolation, credential storage, network egress, service accounts, isolating credentials between channels and what one channel can reach, who can open a published artifact, and which members can invoke Claude.

Claude Tag 跑在不持有凭证的隔离沙箱里。本文覆盖沙箱隔离、凭证存储、网络出站、服务账号、频道之间如何隔离凭证以及一个频道能触及什么、谁能打开已发布的 artifact、哪些成员能调用 Claude。

In channels, Claude acts under its own service accounts that an Owner provisions. By default it can read and post in Slack channels it's been added to and search public channels by keyword; it has no access to your external systems until an Owner adds connections. Each connection is scoped to specific channels and workspaces, and the actions Claude takes in connected tools are attributable to its own service accounts.

在频道里，Claude 以 Owner 配好的自己的服务账号行事。默认它能在已被加入的 Slack 频道里读和发，并能按关键词搜索公开频道；在 Owner 加上 connections 之前，它不能访问你们的外部系统。每条 connection 限定到特定频道和工作区，Claude 在已连接工具里采取的动作可追溯到它自己的服务账号。

Every channel request, whether a person typed it or a schedule triggered it, follows the same path: it runs in an isolated sandbox that holds no credentials. In an Anthropic-hosted environment, requests leave that sandbox only through Agent Proxy and reach your systems under the agent's own accounts. Sessions in a self-hosted environment run on runners inside your network, and Claude can't use Access bundles in those sessions yet.

每一条频道请求——无论是人打的还是日程触发的——都走同一条路径：跑在不持有凭证的隔离沙箱里。在 Anthropic 托管的 environment 里，请求只通过 Agent Proxy 离开沙箱，并以 agent 自己的账号到达你们的系统。自托管 environment 里的 session 跑在你们网络内的 runner 上，那些 session 目前还不能使用 Access bundles。

DMs run on the user's own claude.ai account instead and are covered separately on [How agent identity works](https://claude.com/docs/claude-tag/concepts/agent-identity).

私信改跑在用户自己的 claude.ai 账户上，单独见 [How agent identity works](https://claude.com/docs/claude-tag/concepts/agent-identity)。

## How a request travels / 请求如何走

Each Slack thread runs in its own sandbox. In an Anthropic-hosted environment, every outbound call from that sandbox passes through the same checkpoints.

每个 Slack 线程跑在自己的沙箱里。在 Anthropic 托管的 environment 里，该沙箱的每条出站调用都经过同一组检查点。

| Checkpoint | The guarantee |
| --- | --- |
| The sandbox | Holds no credentials |
| Agent Proxy | Injects credentials from the credential store at request time, and blocks traffic to unlisted hosts by default |
| Your systems | See the agent's own accounts, so its actions there are attributable |

| 检查点 | 保证 |
| --- | --- |
| 沙箱 | 不持有凭证 |
| Agent Proxy | 在请求时从凭证库注入凭证，默认拦截未列入的主机流量 |
| 你们的系统 | 看到的是 agent 自己的账号，因此那里的动作可归属 |

### Compute and the sandbox / 计算与沙箱

Sessions run in ephemeral sandboxes, the same infrastructure that runs Claude Code on the web. Each Slack thread gets its own sandbox.

Session 跑在短暂沙箱里，与网页上 Claude Code 用的是同一套基础设施。每个 Slack 线程有自己的沙箱。

When a thread goes quiet, its sandbox is released; replying in the thread builds a fresh one. What persists across that release and rebuild:

线程安静后，沙箱被释放；在线程里回复会建一个新的。释放与重建之间留下什么：

- Persists: The thread, its visible work, and anything pushed to a branch, opened as a pull request, or posted into Slack.
- Does not persist: Files that existed only inside the sandbox. To keep generated files, ask Claude to push them to a branch or post them in the thread.

- 留下：线程、可见的工作，以及推到分支、开成拉取请求或发进 Slack 的任何东西。
- 不留下：只存在于沙箱内部的文件。要保留生成的文件，请 Claude 把它们推到分支或发到线程里。

Claude Tag retains channel memory and session transcripts. Because of that retention, Claude Tag isn't available to organizations with Zero Data Retention (ZDR) enabled.

Claude Tag 保留频道记忆和 session transcripts。因为这项保留，启用了 Zero Data Retention（ZDR）的组织不能使用 Claude Tag。

### Credential storage / 凭证存储

Credentials you provision are kept in a separate credential store, not in the proxy itself. When an outbound request matches a rule, Agent Proxy, the network layer between the sandbox and any external host, retrieves the credential from that store and injects it at the boundary, so the model and the sandbox are not given the key.

你配好的凭证放在单独的凭证库里，不在代理本身。当出站请求匹配一条 rule 时，Agent Proxy（沙箱与任何外部主机之间的网络层）从该库取出凭证并在边界注入，因此模型和沙箱拿不到密钥。

This means:

这意味着：

- A saved credential is not displayed again. The setup screens are write-only.
- The credential travels only to the hosts you named when you added the connection.
- You can narrow the credential further, to one host, one path prefix, or read-only methods, in [Add connections](https://claude.com/docs/claude-tag/admins/add-connections).

- 已保存的凭证不再显示。设置界面是只写的。
- 凭证只到达你添加 connection 时点名的主机。
- 你可以在 [Add connections](https://claude.com/docs/claude-tag/admins/add-connections) 里进一步收窄凭证：一台主机、一个路径前缀，或只读方法。

### Network egress / 网络出站

In an Anthropic-hosted environment, outbound traffic from a channel session's sandbox is default-deny. Requests go only to hosts an allow layer covers, and the layers are a connection's Allowed websites, the bundle's Domains tab, and the network access setting of the environment the scope's sessions run on. A new environment's default level, Trusted access, already covers a documented set of package registries and developer hosts. See [Agent Proxy](https://claude.com/docs/claude-tag/concepts/agent-identity#agent-proxy) for what happens to a request under each layer.

在 Anthropic 托管的 environment 里，频道 session 沙箱的出站流量默认拒绝。请求只到达某一允许层覆盖的主机；这些层是 connection 的 Allowed websites、bundle 的 Domains 页，以及该 scope 的 session 所跑 environment 的网络访问设置。新 environment 的默认级别 Trusted access 已经覆盖一组已文档化的包注册表和开发者主机。每一层下请求会怎样，见 [Agent Proxy](https://claude.com/docs/claude-tag/concepts/agent-identity#agent-proxy)。

Because requests to any other host are blocked, data can only leave the sandbox to hosts an allow layer covers. An admin sets the Allowed websites list on each connection and the Domains tab on each bundle. An admin sets the environment's network access level, which defaults to Trusted access, from the Cloud environments page in admin settings. See Set allowed websites and Allow a host without a credential.

因为到任何其他主机的请求都被拦截，数据只能离开沙箱到达允许层覆盖的主机。管理员在每条 connection 上设 Allowed websites 列表，在每个 bundle 上设 Domains 页。管理员在管理设置的 Cloud environments 页设定 environment 的网络访问级别，默认为 Trusted access。见 Set allowed websites 和 Allow a host without a credential。

Organizations can opt in to allow-all egress, where a `*` entry on a bundle's Domains tab admits requests to any host on the ports that entry lists, still without credentials. Private and internal network addresses and cloud metadata endpoints remain blocked. Allow-all egress is off by default and enabled per organization by Anthropic; see Allow all hosts.

组织可以选用 allow-all egress：bundle 的 Domains 页上一条 `*` 条目，允许到该条目所列端口上任意主机的请求，仍然不带凭证。私有和内部网络地址以及云元数据端点仍然被拦截。Allow-all egress 默认关闭，由 Anthropic 按组织开启；见 Allow all hosts。

### Service accounts / 服务账号

In channels, Claude acts under service credentials of its own, not under the account of the person who tagged it. The Slack surface is the Claude app, code work goes through the Claude GitHub App, and every other connected tool uses a service account an Owner provisions in an Access bundle. See [How agent identity works](https://claude.com/docs/claude-tag/concepts/agent-identity) for the full model.

在频道里，Claude 以自己的服务凭证行事，而不是 Tag 它的那个人的账号。Slack 面上是 Claude 应用，代码工作走 Claude GitHub App，其他每个已连接工具使用 Owner 在 Access bundle 里配好的服务账号。完整模型见 [How agent identity works](https://claude.com/docs/claude-tag/concepts/agent-identity)。

A connection belongs to that agent identity and is shared by everyone the bundle's scope covers. Anyone in a channel under that scope can ask Claude to act with the credential, so whatever the connected account can read or write is available to every member of those channels. Connect a dedicated identity you control for each service, such as a `claude@yourcompany.example.com` seat or a native service account, rather than a personal login. A dedicated account keeps the agent's actions separately auditable in each tool's logs and lets you revoke its access without affecting a person; see Create a dedicated account per service.

一条 connection 属于那套 agent identity，并由该 bundle 的 scope 覆盖的所有人共享。该 scope 下频道里的任何人都可以请 Claude 用这份凭证行动，因此已连接账号能读或写的一切，对这些频道的每个成员都可用。为每个服务连接一个你控制的专用身份，例如 `claude@yourcompany.example.com` 席位或原生服务账号，而不是个人登录。专用账号让 agent 的动作在各工具日志里可单独审计，也让你能撤销其访问而不影响某个人；见 Create a dedicated account per service。

DMs with `@Claude` run on the user's own claude.ai account instead, with that user's personal connectors, and work there is attributed to them, except pull requests, which the Claude GitHub App authors from DMs as well. Personal connectors apply only in DMs, never in channels. Owners can disable DMs organization-wide; see [Allow or disable direct messages](https://claude.com/docs/claude-tag/admins/restrict-access).

与 `@Claude` 的私信改跑在用户自己的 claude.ai 账户上，使用该用户的个人 connectors，那里的工作记在他们名下；拉取请求除外，从私信开出的同样由 Claude GitHub App 署名。个人 connectors 只在私信生效，从不在频道。Owner 可以在全组织禁用私信；见 [Allow or disable direct messages](https://claude.com/docs/claude-tag/admins/restrict-access)。

### Isolate credentials between channels / 在频道之间隔离凭证

A channel session can use only the Access bundles attached in one of three places:

频道 session 只能使用绑在以下三处之一的 Access bundles：

- The channel itself. A bundle you attach here applies in that channel only.
- The channel's workspace. A bundle you attach here applies in every channel of that workspace.
- Default Slack access. The organization-wide root; a bundle you attach here applies in every channel of every paired workspace.

- 频道本身。绑在这里的 bundle 只在该频道生效。
- 该频道的工作区。绑在这里的 bundle 在该工作区的每个频道生效。
- Default Slack access。全组织根；绑在这里的 bundle 在每个已配对工作区的每个频道生效。

A bundle attached anywhere else in your organization is invisible to the session, and no request from the session's sandbox can carry a credential from a bundle outside those three scopes.

绑在组织里其他任何地方的 bundle 对该 session 不可见，session 沙箱发出的请求也不能携带这三层 scope 之外的 bundle 的凭证。

For example, if you attach a bundle holding finance credentials to one private channel, sessions in every other channel run as if that credential doesn't exist. If you attach the same bundle to a workspace or to Default Slack access instead, every channel beneath it gets that access, so isolation comes from where you attach the bundle, not from the bundle itself.

例如，若你把持有财务凭证的 bundle 绑到一个私有频道，其他每个频道的 session 运行起来就像那份凭证不存在。若你把同一 bundle 绑到工作区或 Default Slack access，它下面的每个频道都拿到这份访问，因此隔离来自你把 bundle 绑在哪里，而不是 bundle 本身。

Confine a credential to one channel in three steps:

把一份凭证限制在一个频道，三步：

1. Attach its bundle to that channel and nowhere broader.
2. Keep the channel private. A bundle on a public channel grants its access to anyone who joins.
3. Check the channel's Access summary on the Slack tab in admin settings. It shows the access the channel actually gets, including what it inherits from the workspace and Default Slack access.

1. 把它的 bundle 绑到该频道，不要绑到更宽的地方。
2. 保持频道私有。公开频道上的 bundle 会把访问授予任何加入的人。
3. 在管理设置的 Slack 页查看该频道的 Access summary。它显示频道实际拿到的访问，包括从工作区和 Default Slack access 继承的。

Claude doesn't operate in externally shared channels, so a channel shared with another company never has a session to isolate.

Claude 不在对外共享的频道里运作，因此与另一家公司共享的频道永远不会有需要隔离的 session。

Isolating a credential doesn't isolate what Claude knows. What it learns in a public channel becomes workspace memory that sessions in the workspace's other channels can read, and it can search public channels by keyword without being added to them, the same way any workspace member can.

隔离凭证并不能隔离 Claude 知道的东西。它在公开频道里学到的会成为工作区记忆，工作区其他频道的 session 能读；它也可以按关键词搜索公开频道而不必被加入，和任意工作区成员一样。

## Artifact visibility / Artifact 可见性

A session can publish an artifact, a web page hosted on claude.ai with the link posted in the thread, and the page stays available after the sandbox is released. Anyone with access to the source Slack channel can open it, which in a public channel covers everyone in the workspace. Someone who opens the link without that access sees a request-access prompt rather than the page. There is no share setting for anyone to change. Updates go through Claude: ask in the Slack thread, or send Claude a comment on the page, which anyone who can post in the channel can do.

session 可以发布 artifact——托管在 claude.ai 上的网页，链接发在线程里——沙箱释放后页面仍然可用。能进源 Slack 频道的人都能打开；公开频道里这覆盖工作区所有人。没有该访问的人打开链接会看到请求访问提示，而不是页面。没有任何人可以改的分享设置。更新走 Claude：在 Slack 线程里要求，或在页面上给 Claude 发评论（能在频道里发帖的人都可以）。

Artifacts you publish from your own Claude Code sessions work differently: they belong to you, and you control who can open them, with sharing options that depend on your plan and organization settings. See the Claude Code artifacts documentation.

你从自己的 Claude Code session 发布的 artifacts 不同：它们属于你，由你控制谁能打开，分享选项取决于你的计划和组织设置。见 Claude Code artifacts 文档。

## Member access / 成员访问

By default, anyone in a connected Slack workspace can invoke Claude in channels, with or without a Claude account. An Owner can turn on a restriction toggle to narrow that: on Team plans it limits Claude to people with a Claude account in your organization, and on Enterprise plans it limits Claude to members whose role grants the Claude Tag in Slack capability. See [Restrict who can use Claude](https://claude.com/docs/claude-tag/admins/restrict-access). The toggle governs DMs as well as channels.

默认情况下，已连接 Slack 工作区里的任何人都可以在频道里调用 Claude，有没有 Claude 账户都行。Owner 可以打开限制开关来收窄：Team 计划上把 Claude 限制给组织里有 Claude 账户的人；Enterprise 计划上限制给角色授予了 Claude Tag in Slack 能力的成员。见 [Restrict who can use Claude](https://claude.com/docs/claude-tag/admins/restrict-access)。该开关同时管私信和频道。

## Related resources / 相关资源

- [How agent identity works](https://claude.com/docs/claude-tag/concepts/agent-identity): the identity model in full, including DM attribution
- [Data lifecycle and deletion](https://claude.com/docs/claude-tag/concepts/data-lifecycle): what Anthropic stores, how long it's kept, and what each action deletes
- [Restrict where Claude Tag operates](https://claude.com/docs/claude-tag/admins/restrict-access): the controls that exist and the ones that don't
- [Audit Claude Tag activity](https://claude.com/docs/claude-tag/admins/audit): the trails for tracing what it did

- [How agent identity works](https://claude.com/docs/claude-tag/concepts/agent-identity)：完整身份模型，含私信归属
- [Data lifecycle and deletion](https://claude.com/docs/claude-tag/concepts/data-lifecycle)：Anthropic 存什么、存多久、每个动作删什么
- [Restrict where Claude Tag operates](https://claude.com/docs/claude-tag/admins/restrict-access)：有哪些控制、没有哪些
- [Audit Claude Tag activity](https://claude.com/docs/claude-tag/admins/audit)：追溯它做过什么的轨迹
