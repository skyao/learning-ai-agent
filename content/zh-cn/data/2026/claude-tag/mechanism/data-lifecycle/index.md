---
title: "Data lifecycle and deletion"
linkTitle: "数据生命周期"
weight: 60
date: 2026-06-23
description: >
  官方文档 Data lifecycle and deletion 的中英对照
---

来源： [Data lifecycle and deletion](https://claude.com/docs/claude-tag/concepts/data-lifecycle)

# Data lifecycle and deletion / 数据生命周期与删除

What Claude Tag stores on Anthropic's side, how long session transcripts and memory are kept, and what disconnecting a workspace, uninstalling the app, deleting a Slack channel, removing a scope, or leaving the organization does to that data.

Claude Tag 在 Anthropic 侧存什么、session transcripts 和记忆保留多久，以及断开工作区、卸载应用、删除 Slack 频道、移除 scope 或离开组织分别对那些数据做什么。

Claude Tag keeps a record of its work on Anthropic's side, separate from the messages in your Slack workspace. This page is for the Owner or security reviewer who needs to know what that record contains, how long Anthropic keeps it, and which actions in Slack or in your Claude admin settings delete it. For each action, the tables below say what is deleted and whether Claude keeps responding, because the two don't always go together.

Claude Tag 在 Anthropic 侧保留其工作的一份记录，与你 Slack 工作区里的消息分开。本页写给需要知道这份记录含什么、Anthropic 保留多久、以及 Slack 或 Claude 管理设置里哪些动作会删除它的 Owner 或安全评审人。对每个动作，下表说明删了什么、Claude 是否继续应答——这两者并不总是一起发生。

## What Anthropic stores / Anthropic 存什么

There are two copies of the work Claude does in Slack. The messages, canvases, files, bookmarks, and pins in Slack stay in Slack under your workspace's own retention settings. Anthropic doesn't remove them when Claude-side data is deleted, and can't once the app is uninstalled, so delete those in Slack. On Anthropic's side, Claude Tag stores the following for each paired workspace.

Claude 在 Slack 里做的工作有两份拷贝。Slack 里的消息、canvas、文件、书签和钉选留在 Slack，遵循你工作区自己的保留设置。Claude 侧数据被删除时 Anthropic 不会移除它们，应用卸载后也做不到，所以那些要在 Slack 里删。在 Anthropic 侧，Claude Tag 为每个已配对工作区存储以下内容。

| What | What it contains |
| --- | --- |
| Session transcripts | The record of one thread's, channel's, or direct message's work. A transcript holds the messages Claude was shown in the conversation and who sent them, files attached there, earlier versions of messages that were later edited, what Claude retrieved while working (Slack search results, messages it read in channels it's in, and data from connected tools), and everything Claude said and did |
| Memory | The notes Claude saves for each channel, the workspace-shared notes from public channels, and separate notes for each direct-message conversation. See [What Claude Tag remembers](https://claude.com/docs/claude-tag/users/memory) |
| Routines | The scheduled and run-once tasks set up in channels or in direct messages, with their instructions and run history |
| Scopes and their settings | Each workspace and channel scope, with its custom instructions, version setting, and Access bundle bindings |
| Access bundles | The connections and credentials an Owner provisions. Bundles belong to your organization, not to a workspace |
| Account links | The link between each member's Slack account and their Claude account, and the tokens that link uses |
| Published artifacts | Pages a session published to claude.ai. See [Artifact visibility](https://claude.com/docs/claude-tag/concepts/security-and-data#artifact-visibility) |
| The app's installation credential | The token the Claude app uses to read and post in your Slack workspace |

| 什么 | 含什么 |
| --- | --- |
| Session transcripts | 一条线程、一个频道或一则私信的工作记录。Transcript 保存对话里给 Claude 看过的消息及发送者、那里附上的文件、后来被编辑的消息的更早版本、Claude 工作时检索到的内容（Slack 搜索结果、它在所在频道读过的消息、来自已连接工具的数据），以及 Claude 说过和做过的一切 |
| Memory | Claude 为每个频道保存的笔记、来自公开频道的工作区共享笔记，以及每则私信对话各自的笔记。见 [What Claude Tag remembers](https://claude.com/docs/claude-tag/users/memory) |
| Routines | 在频道或私信里设置的计划任务和一次性任务，含指令和运行历史 |
| Scopes 及其设置 | 每个工作区和频道 scope，含自定义指令、版本设置和 Access bundle 绑定 |
| Access bundles | Owner 配好的 connections 和凭证。Bundles 属于组织，不属于某个工作区 |
| Account links | 每个成员的 Slack 账户与 Claude 账户之间的链接，以及该链接使用的 token |
| Published artifacts | session 发布到 claude.ai 的页面。见 [Artifact visibility](https://claude.com/docs/claude-tag/concepts/security-and-data#artifact-visibility) |
| 应用的安装凭证 | Claude 应用用来在你的 Slack 工作区读和发的 token |

Deleting or editing a message or file in Slack doesn't remove it from a transcript that already includes it. Messages from other people in the conversation, including guests, become part of the transcript the same way and are held as your organization's data.

在 Slack 里删除或编辑消息或文件，并不会从已经包含它的 transcript 里抹掉。对话里其他人的消息（包括访客）同样进入 transcript，并作为你组织的数据持有。

## How long data is kept / 数据保留多久

During the beta there is no automatic retention period for Claude Tag data. Session transcripts, memory, routines, scopes, and account links are kept until one of the actions on this page deletes them. Your organization's custom data retention setting doesn't apply to Claude Tag transcripts or memory. It does apply to artifacts a session published, which follow the same retention rules as your organization's other shared artifacts.

Beta 期间 Claude Tag 数据没有自动保留期限。Session transcripts、记忆、routines、scopes 和 account links 一直保留，直到本页某个动作删除它们。组织的自定义数据保留设置不适用于 Claude Tag 的 transcripts 或记忆。它适用于 session 发布的 artifacts，后者遵循组织其他共享 artifacts 的同一套保留规则。

Sessions Claude stops using are archived, not deleted. That includes a thread's session after someone sends `@Claude !restart`, a session that closed because the thread's first message was deleted before anyone replied, and the channel-level sessions Claude replaces after about an hour of quiet or a day of age. An archived session keeps its full transcript until the channel's or workspace's data is deleted.

Claude 停止使用的 session 被归档，而不是删除。这包括有人发送 `@Claude !restart` 之后的线程 session、因线程第一条消息在任何人回复之前被删除而关闭的 session，以及 Claude 在约一小时安静或一天年龄之后替换的频道级 session。已归档 session 保留完整 transcript，直到该频道或工作区的数据被删除。

Letting a plan lapse, turning Claude Tag off, or no longer using it doesn't delete anything on its own. To delete a workspace's data when you stop using Claude Tag, disconnect the workspace or uninstall the app.

让计划过期、关掉 Claude Tag、或不再使用它，本身都不会删除任何东西。停止使用 Claude Tag 时要删除一个工作区的数据，请断开该工作区或卸载应用。

When an action below deletes data, deletion starts right away and completes in the background. Copies can remain in routine backups for a limited period after that before they age out.

下面某个动作删除数据时，删除立刻开始，在后台完成。之后副本可能在常规备份里再留一段有限时间，然后老化退出。

## What each action does to Claude-side data / 每个动作对 Claude 侧数据做什么

The first table covers actions taken in Slack, and the second covers actions taken in Claude. "Claude-side data" means the items listed under [What Anthropic stores](#what-anthropic-stores--anthropic-存什么).

第一张表覆盖在 Slack 里采取的动作，第二张覆盖在 Claude 里采取的动作。「Claude 侧数据」指 [Anthropic 存什么](#what-anthropic-stores--anthropic-存什么) 下列出的项目。

### Actions in Slack / Slack 里的动作

| Action | Claude-side data | Does Claude keep responding? |
| --- | --- | --- |
| A Slack admin uninstalls the Claude app from a workspace | Deleted, the same as disconnecting the workspace, plus the app's installation credential for that workspace. Access bundles, and routines members set up in direct messages, stay | No. The app is removed from the workspace |
| On Enterprise Grid, a Grid admin removes an org-wide installation of the app, from the whole grid or from one of its workspaces | Nothing is deleted. To delete the data, an Owner disconnects the grid, or a workspace that has its own pairing, in your Claude admin settings | No |
| A channel is deleted in Slack | Deleted: that channel's sessions and transcripts, including earlier sessions Claude had archived there, its channel memory, and its scope with the routines and artifacts that belong to it. Notes Claude saved to workspace memory from a public channel aren't tied to the channel and stay until you delete them or disconnect the workspace, as does anything created under the workspace scope rather than the channel's own | Not applicable |
| A channel is archived in Slack | Nothing is deleted. Unarchiving the channel picks its memory, routines, and sessions back up | Not while the channel is archived |
| A public channel is made private | Nothing is deleted. Claude archives the channel's earlier sessions, and new sessions save to the channel's own memory store. Notes Claude saved to workspace memory while the channel was public stay there, readable from the workspace's other channels; see Workspace memory | Yes |
| Someone removes Claude from a channel with `/remove @Claude` | Nothing is deleted. The channel's memory, routines, and past sessions stay on record, and re-adding Claude picks them back up. The channel's routines keep firing while Claude is out of the channel but can't post there | No |
| Someone edits a message Claude read | Claude receives the edit as a note, and the transcript keeps both the earlier and the edited text | Yes |
| Someone deletes a reply, or deletes a thread's first message after others have replied | Nothing is removed from the transcript, and Claude isn't notified | Yes |
| Someone deletes a thread's first message before anyone has replied | The session closes and is archived with its transcript, including the deleted message | No. The thread is gone |
| Someone deletes a file they attached in a thread Claude worked in | The copy Claude took into the session stays with the session and its transcript | Yes |
| A member's Slack account is deactivated | Nothing is deleted. Their account link, direct-message conversations and notes, and their messages in channel transcripts stay. Channel routines they created keep running, and routines they set up in direct messages keep running until they're removed from your Claude organization | Not to that member |

| 动作 | Claude 侧数据 | Claude 是否继续应答？ |
| --- | --- | --- |
| Slack 管理员从工作区卸载 Claude 应用 | 删除，与断开工作区相同，外加该工作区的应用安装凭证。Access bundles，以及成员在私信里设置的 routines，留下 | 否。应用已从工作区移除 |
| Enterprise Grid 上，Grid 管理员移除应用的组织级安装（整个 grid 或其中一个工作区） | 什么都不删。要删数据，由 Owner 在 Claude 管理设置里断开该 grid，或断开有自己配对的工作区 | 否 |
| 在 Slack 里删除一个频道 | 删除：该频道的 session 和 transcripts（含 Claude 在那里归档过的更早 session）、其频道记忆，以及属于它的 scope 连同 routines 和 artifacts。Claude 从公开频道存到工作区记忆的笔记不绑在该频道上，会留下直到你删除它们或断开工作区；在工作区 scope 而不是频道自己的 scope 下创建的东西也一样 | 不适用 |
| 在 Slack 里归档一个频道 | 什么都不删。取消归档会把记忆、routines 和 session 捡回来 | 频道处于归档时否 |
| 公开频道改为私有 | 什么都不删。Claude 归档该频道更早的 session，新 session 存到频道自己的记忆存储。频道公开时 Claude 存到工作区记忆的笔记留在那里，可从工作区其他频道读取；见 Workspace memory | 是 |
| 有人用 `/remove @Claude` 把 Claude 移出频道 | 什么都不删。频道的记忆、routines 和过去的 session 留在记录上，再加回 Claude 会捡回来。Claude 不在频道时，该频道的 routines 仍会触发，但不能在那里发帖 | 否 |
| 有人编辑 Claude 读过的消息 | Claude 把编辑作为一条说明收到，transcript 同时保留更早文本和编辑后文本 | 是 |
| 有人删除一条回复，或在已有他人回复后删除线程第一条消息 | transcript 里什么都不移除，Claude 也收不到通知 | 是 |
| 有人在任何人回复之前删除线程第一条消息 | session 关闭并连同 transcript 归档，包括被删的那条消息 | 否。线程没了 |
| 有人删除自己在 Claude 工作过的线程里附上的文件 | Claude 带进 session 的那份拷贝仍随 session 及其 transcript | 是 |
| 成员的 Slack 账户被停用 | 什么都不删。其 account link、私信对话和笔记、以及频道 transcripts 里他们的消息留下。他们创建的频道 routines 继续跑；他们在私信里设置的 routines 继续跑，直到他们被移出 Claude 组织 | 不对该成员 |

### Actions in Claude / Claude 里的动作

| Action | Claude-side data | Does Claude keep responding? |
| --- | --- | --- |
| An Owner disconnects a workspace | Deleted: the workspace's sessions and transcripts, including members' direct-message conversations there; its channel, workspace, and direct-message memory; the routines set up in its channels and the artifacts published from them; its scopes with their instructions and bundle bindings; and members' account links. The Slack app and its installation credential stay so a workspace admin can pair again, and Access bundles, routines members set up in direct messages, and what Claude posted in Slack stay too. Pairing the same workspace to the same organization again within a few minutes can cancel the deletion | Stops in channels immediately. Direct messages keep working on each member's own Claude account until the deletion removes that member's account link |
| An Owner disconnects an Enterprise Grid | The same as disconnecting a workspace, for every workspace in the grid that doesn't have its own workspace pairing, plus the app's installation credentials for those workspaces. Workspaces you paired individually stay connected and keep their data until you disconnect them | Stops in the affected workspaces |
| An Owner removes a channel's scope with Remove this scope in the Claude Tag's access section | Deleted: the channel's sessions and transcripts recorded up to that moment, including threads still in progress, its memory, its routines, and the artifacts published from it. The Slack channel itself is unchanged | Yes. Claude stays in the channel and, when tagged again, starts fresh under the access it inherits from the workspace. To stop it as well, run `/remove @Claude` or set the scope's version to Off first |
| An Owner sets a scope's version to Off, turns off Claude in Slack for the organization, or turns off direct messages | Nothing is deleted. Turning the setting back on resumes with the existing memory, routines, and sessions | No, in the affected scope |
| An Owner detaches a bundle from a scope, or deletes an Access bundle | Detaching removes the binding, and deleting a bundle removes its credentials everywhere it was attached. Memory, routines, and transcripts are unaffected | Yes, without that access |
| An Owner deletes entries from a scope's memory files, or someone in the channel tells Claude to forget an entry | The entry is removed from what Claude reads and from the memory files view. Earlier versions of the scope's memory remain stored with the scope until the scope's data is deleted | Yes |
| An Owner deletes a routine from the Scheduled work tab, or someone asks Claude to delete it in the channel or direct message where it was set up | The routine and the sessions it ran are deleted. Pausing a routine there, or disabling it from the channel, keeps it on record | Yes |
| A member selects Disconnect in the Claude app's Home tab in Slack | Removes the link between their Slack and Claude accounts and revokes the tokens Claude Tag held for them. Their earlier direct-message conversations and notes, and channel work they started, aren't deleted; those go with the workspace | In channels, yes. Direct messages and personal connectors stop working for that member until they reconnect |
| A member is removed from your Claude organization | Nothing is deleted. They lose access within minutes, and routines they set up in direct messages are turned off. Their account link, direct-message conversations, and notes stay until the workspace is disconnected | Not to that member |
| A member deletes their own Claude account | On Team and Enterprise plans, deleting an individual account doesn't remove the Claude Tag data your organization holds about that member, including their direct-message conversations and notes and their account link. A member who wants the link and its tokens removed can select Disconnect in Slack before deleting their account | Not to that member |
| Your Claude organization is deleted | All Claude Tag data for every paired workspace is deleted as part of the organization deletion. The Slack app isn't uninstalled by this, and its installation credential remains until the app is uninstalled, so uninstall it from each workspace in Slack as well | No |
| Your organization adopts Zero Data Retention or another restricted compliance configuration after pairing | Nothing already stored is deleted. Disconnect each workspace to delete its data | No. Claude stops responding in Slack and new pairings are refused; see Restricted compliance settings block Claude Tag |

| 动作 | Claude 侧数据 | Claude 是否继续应答？ |
| --- | --- | --- |
| Owner 断开一个工作区 | 删除：该工作区的 session 和 transcripts（含成员在那里的私信对话）；其频道、工作区和私信记忆；在其频道里设置的 routines 以及从它们发布的 artifacts；其 scopes 连同指令和 bundle 绑定；以及成员的 account links。Slack 应用及其安装凭证留下，以便工作区管理员可以再配对；Access bundles、成员在私信里设置的 routines，以及 Claude 在 Slack 里发过的内容也留下。几分钟内把同一工作区再配对到同一组织，可以取消这次删除 | 频道里立刻停止。私信继续在每个成员自己的 Claude 账户上工作，直到删除移除该成员的 account link |
| Owner 断开一个 Enterprise Grid | 与断开工作区相同，作用于 grid 里没有自己工作区配对的每一个工作区，外加那些工作区的应用安装凭证。你单独配对过的工作区保持连接并保留数据，直到你断开它们 | 在受影响的工作区停止 |
| Owner 在 Claude Tag 的 access 区用 Remove this scope 移除一个频道的 scope | 删除：截至那一刻记录的该频道 session 和 transcripts（含仍在进行的线程）、其记忆、其 routines，以及从它发布的 artifacts。Slack 频道本身不变 | 是。Claude 留在频道里，再次被 Tag 时在从工作区继承的访问下重新开始。若也要停下它，先跑 `/remove @Claude` 或把该 scope 的版本设为 Off |
| Owner 把某个 scope 的版本设为 Off、为组织关掉 Claude in Slack，或关掉私信 | 什么都不删。把设置再打开会带着已有记忆、routines 和 session 恢复 | 否，在受影响的 scope 里 |
| Owner 从某个 scope 卸下一个 bundle，或删除一个 Access bundle | 卸下移除绑定；删除 bundle 会在它被绑过的所有地方移除其凭证。记忆、routines 和 transcripts 不受影响 | 是，只是没有那份访问 |
| Owner 从某个 scope 的 memory files 删除条目，或频道里有人让 Claude 忘掉一条 | 该条目从 Claude 所读内容和 memory files 视图里移除。该 scope 记忆的更早版本仍随 scope 存储，直到该 scope 的数据被删除 | 是 |
| Owner 从 Scheduled work 页删除一条 routine，或有人在设置它的频道或私信里请 Claude 删除它 | 该 routine 以及它跑过的 session 被删除。在那里暂停，或从频道禁用，会把它留在记录上 | 是 |
| 成员在 Slack 里 Claude 应用的 Home 页选择 Disconnect | 移除其 Slack 与 Claude 账户之间的链接，并撤销 Claude Tag 为他们持有的 token。他们更早的私信对话和笔记、以及他们启动的频道工作不会被删；那些跟着工作区走 | 频道里是。对该成员，私信和个人 connectors 停止工作，直到他们重新连接 |
| 成员被移出你的 Claude 组织 | 什么都不删。他们在几分钟内失去访问，他们在私信里设置的 routines 被关掉。其 account link、私信对话和笔记留下，直到工作区被断开 | 不对该成员 |
| 成员删除自己的 Claude 账户 | 在 Team 和 Enterprise 计划上，删除个人账户并不会移除组织持有的关于该成员的 Claude Tag 数据，包括其私信对话和笔记及其 account link。想移除链接及其 token 的成员，可以在删账户之前在 Slack 里选择 Disconnect | 不对该成员 |
| 你的 Claude 组织被删除 | 每个已配对工作区的全部 Claude Tag 数据作为组织删除的一部分被删除。这不会卸载 Slack 应用，其安装凭证留到应用被卸载，因此也要在 Slack 里从每个工作区卸载它 | 否 |
| 配对之后组织采用 Zero Data Retention 或其他受限合规配置 | 已经存储的什么都不删。断开每个工作区以删除其数据 | 否。Claude 停止在 Slack 应答，新配对被拒绝；见 Restricted compliance settings block Claude Tag |

## Direct messages / 私信

A direct-message conversation with Claude is stored the same way a channel thread is, as a session with a transcript, together with the notes Claude keeps for that conversation. Both are deleted with the workspace the member messaged Claude from, when that workspace is disconnected or the app is uninstalled from it, and when your Claude organization is deleted. They aren't deleted when the member selects Disconnect in Slack, when the member's Claude account is deleted on a Team or Enterprise plan, or when an Owner turns off direct messages.

与 Claude 的私信对话按频道线程同样的方式存储：一个带 transcript 的 session，加上 Claude 为该对话保留的笔记。二者随成员向 Claude 发过消息的那个工作区一起删除——当该工作区被断开、应用从它卸载，或你的 Claude 组织被删除时。成员在 Slack 里选择 Disconnect、Team/Enterprise 计划上删除该成员的 Claude 账户、或 Owner 关掉私信时，它们不会被删。

Routines a member set up in a direct message belong to that member's Claude account. An Owner can delete them from the Scheduled work tab, or the member can ask Claude in the direct message to delete one. They are turned off when the member is removed from your Claude organization, and disconnecting the workspace doesn't delete them.

成员在私信里设置的 routines 属于该成员的 Claude 账户。Owner 可以从 Scheduled work 页删除它们，或该成员在私信里请 Claude 删除一条。成员被移出 Claude 组织时它们被关掉；断开工作区并不会删除它们。

When a member first opens a direct message with Claude, the welcome Claude writes, which suggests channels based on the member's recent public-channel activity, runs as a short session that is stored like any other.

成员第一次打开与 Claude 的私信时，Claude 写的欢迎（根据该成员近期公开频道活动建议频道）跑成一个短 session，像其他任何 session 一样被存储。

## Delete data or request deletion / 删除数据或请求删除

The controls that delete Claude Tag data, from largest to smallest:

删除 Claude Tag 数据的控件，从大到小：

- Disconnect a workspace or an Enterprise Grid at `claude.ai/admin-settings/claude-tag`, or uninstall the app from the workspace in Slack. Deletes all of that workspace's data. See Revoke a pairing
- Remove a channel's scope in the Claude Tag's access section. Deletes that channel's data recorded so far
- Delete a scope's memory files, from the scope's options menu, or tell Claude in the channel to forget an entry. See [Check and correct what Claude Tag remembers](https://claude.com/docs/claude-tag/users/memory)
- Delete a routine from the Scheduled work tab, or ask Claude to delete it in the channel or direct message where it was set up. See [Audit Claude Tag activity](https://claude.com/docs/claude-tag/admins/audit)

- 在 `claude.ai/admin-settings/claude-tag` 断开一个工作区或 Enterprise Grid，或在 Slack 里从工作区卸载应用。删除该工作区的全部数据。见 Revoke a pairing
- 在 Claude Tag 的 access 区移除一个频道的 scope。删除该频道迄今记录的数据
- 从 scope 的选项菜单删除其 memory files，或在频道里让 Claude 忘掉一条。见 [Check and correct what Claude Tag remembers](https://claude.com/docs/claude-tag/users/memory)
- 从 Scheduled work 页删除一条 routine，或在设置它的频道或私信里请 Claude 删除它。见 [Audit Claude Tag activity](https://claude.com/docs/claude-tag/admins/audit)

There is no control in Slack or in your Claude admin settings that deletes a single thread's transcript on its own. During the beta, Claude Tag session transcripts and memory aren't included in your organization's data exports, and the Compliance API doesn't list or delete Claude Tag sessions. For a deletion request these controls don't cover, contact your account team or privacy@anthropic.com.

Slack 或 Claude 管理设置里没有单独删除某一条线程 transcript 的控件。Beta 期间，Claude Tag 的 session transcripts 和记忆不包含在组织的数据导出里，Compliance API 也不列出或删除 Claude Tag session。这些控件覆盖不到的删除请求，联系你的客户团队或 privacy@anthropic.com。

## Audit records for deletions / 删除的审计记录

Disconnecting a workspace or an Enterprise Grid, and removing a channel's scope, are recorded in your organization's audit log, which you read through the Compliance API. Deletions that start in Slack, such as deleting a channel or uninstalling the app, aren't recorded there, and neither is a member's Disconnect in the Home tab.

断开工作区或 Enterprise Grid，以及移除一个频道的 scope，会记入组织的审计日志，通过 Compliance API 阅读。从 Slack 开始的删除（例如删频道或卸载应用）不记在那里，成员在 Home 页的 Disconnect 也不记。

## Related resources / 相关资源

- [Security and data handling](https://claude.com/docs/claude-tag/concepts/security-and-data): sandbox isolation, credential storage, and artifact visibility
- [Manage workspaces and versions](https://claude.com/docs/claude-tag/admins/workspaces): the Disconnect control and what it deletes
- [Restrict where Claude Tag operates](https://claude.com/docs/claude-tag/admins/restrict-access): the ways to quiet or remove Claude, and which keep data
- [What Claude Tag remembers](https://claude.com/docs/claude-tag/users/memory): reading, correcting, and deleting memory
- [Audit Claude Tag activity](https://claude.com/docs/claude-tag/admins/audit): scheduled work, memory files, and network events

- [Security and data handling](https://claude.com/docs/claude-tag/concepts/security-and-data)：沙箱隔离、凭证存储、artifact 可见性
- [Manage workspaces and versions](https://claude.com/docs/claude-tag/admins/workspaces)：Disconnect 控件以及它删什么
- [Restrict where Claude Tag operates](https://claude.com/docs/claude-tag/admins/restrict-access)：让 Claude 安静或移除它的方式，以及哪些会保留数据
- [What Claude Tag remembers](https://claude.com/docs/claude-tag/users/memory)：读、纠正和删除记忆
- [Audit Claude Tag activity](https://claude.com/docs/claude-tag/admins/audit)：计划工作、memory files 与网络事件
