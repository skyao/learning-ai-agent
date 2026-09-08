---
title: "How Claude Tag works"
linkTitle: "如何工作"
weight: 10
date: 2026-06-23
description: >
  官方文档 How Claude Tag works 的中英对照：会话、沙箱、转向、记忆范围
---

来源： [How Claude Tag works](https://claude.com/docs/claude-tag/concepts/how-it-works)

# How Claude Tag works / Claude Tag 如何工作

Each Claude Tag thread in Slack runs a working session in a sandbox. See how progress shows in the thread, how to steer mid-task, what survives between turns, and how memory is scoped.

每个 Claude Tag 线程都在沙箱里跑一个工作 session。本文说明进度如何出现在线程里、任务中途如何转向、回合之间什么会留下来，以及记忆如何划定范围。

Claude Tag is Claude, working inside your team's Slack channels. An organization Owner gives it its own accounts to the tools your team uses, so it arrives already able to act, and anyone in a channel can tag it into a problem without setting anything up.

Claude Tag 就是在团队 Slack 频道里工作的 Claude。组织 Owner 给它配好团队所用工具的独立账号，所以它一到就能动手；频道里任何人都可以把它 Tag 进一个问题，无需再配置。

When someone tags Claude in at a channel's top level, the channel's own session picks the message up. A task that needs investigation, tools, or a longer exchange gets a working session in a thread under the message, and that thread binds to its own session from then on. Claude works through the task and posts the result back into the conversation. The work runs in an ephemeral cloud sandbox, not on your local machine.

有人在频道顶层 Tag Claude 时，由该频道自己的 session 接住这条消息。需要调查、工具或较长往返的任务，会在该消息下开一个线程工作 session，此后该线程就绑定这个 session。Claude 做完任务，把结果发回对话。工作跑在短暂的云端沙箱里，而不是你的本机。

This page covers:

本文覆盖：

- Walk through a session: an annotated example thread showing one task end to end
- Starting a session, tracking progress, and steering mid-thread: what to type, what to watch, and who can redirect
- Team channels and personal DMs: which surface to use, and how access differs between them
- Key concepts: agent identity, scheduling, and memory defined
- Lifecycle of a request: the five-step loop, the checklist, per-channel access, and scheduled tasks
- Session context and memory: what Claude reads, what survives idle, and what carries across channels

- 走一遍 session：带注释的示例线程，展示一项任务从头到尾
- 开始 session、跟踪进度、线程中途转向：写什么、看什么、谁能改方向
- 团队频道与个人私信：用哪一面，访问如何不同
- 关键概念：agent identity、调度、记忆
- 一次请求的生命周期：五步循环、checklist、按频道访问、计划任务
- Session 上下文与记忆：Claude 读什么、空闲后留下什么、什么跨频道带走

## Walk through a Claude Tag session / 走一遍 Claude Tag session

The thread below is one task end to end in Slack: Jordan tags @Claude into `#launch-week` with a question, a colleague steers mid-thread, and the answer lands in the channel.

下面这段线程是 Slack 里一项任务的全过程：Jordan 在 `#launch-week` 里 @Claude 提问，同事在线程中途转向，答案落回频道。

示例线程 / Example thread（`#launch-week`，19 members）：

Jordan 9:02 AM  
@Claude where are we on launch prep? Pull together what's still open from this channel.

ClaudeAPP 9:02 AM  
On it. I'll go through this channel's open threads and the launch plan.  
Done: Read 14 open threads  
Done: Cross-checked the launch plan in Drive  
Done: Listed who each item is waiting on  
Done: Drafted the status summary

Sam 9:06 AM  
fold in the vendor quotes from last week's thread too

ClaudeAPP 9:08 AM  
Done. Full status below: eight items closed, three open. The venue contract is the oldest, waiting on legal since the 2nd.

Jordan 9:02 AM  
@Claude 发布准备做到哪了？把这个频道里还开着的事项汇总一下。

ClaudeAPP 9:02 AM  
收到。我会过一遍本频道未关闭的线程和发布计划。  
完成：读了 14 个未关闭线程  
完成：对照了 Drive 里的发布计划  
完成：列出每项在等谁  
完成：起草了状态摘要

Sam 9:06 AM  
把上周线程里的供应商报价也折进去

ClaudeAPP 9:08 AM  
好了。完整状态如下：八项已关，三项仍开。场馆合同最老，从 2 号起就在等法务。

Each of the five moments in that thread shows a piece of how Claude Tag works:

这条线程里的五个时刻，各对应 Claude Tag 工作方式的一块：

1. Jordan handed Claude a problem, not a prompt. Typing `@Claude` in a message that asks for something is what starts a working session.
2. Claude acknowledged, then went quiet. The "is thinking…" line and the checklist are the progress surface; the silence between 9:02 and 9:06 was the work happening. [How the checklist updates](#how-the-checklist-updates--checklist-如何更新)
3. Sam steered Claude without `@`-mentioning it again. Once a session is active in a thread, it belongs to everyone there. [Reply in the thread to steer](#reply-in-the-thread-to-steer--在线程里回复以转向)
4. The work ran somewhere real, with the channel's tools. Reading fourteen threads happened in a sandbox built for this thread, and the launch plan came through this channel's Drive connection. What a session can reach is set per channel. [Channel access](#channel-access--频道访问)
5. The result is in the thread. The whole channel can see it, use it, and build on it. [What survives between replies](#what-survives-between-replies--回复之间留下什么)

1. Jordan 交给 Claude 的是一个问题，不是一段提示词。在一条提出需求的消息里写 `@Claude`，就会开始工作 session。
2. Claude 先应答，然后安静。线程底部的 “is thinking…” 和 checklist 才是进度面；9:02 到 9:06 的沉默就是在干活。[How the checklist updates](#how-the-checklist-updates--checklist-如何更新)
3. Sam 没有再次 `@` 就转向了 Claude。session 一旦在线程里激活，就属于线程里所有人。[Reply in the thread to steer](#reply-in-the-thread-to-steer--在线程里回复以转向)
4. 工作发生在真实环境里，用的是频道的工具。读十四个线程是在为本线程建的沙箱里完成的，发布计划来自该频道的 Drive 连接。session 能触及什么按频道设定。[Channel access](#channel-access--频道访问)
5. 结果在线程里。整个频道都能看见、使用、接着往上做。[What survives between replies](#what-survives-between-replies--回复之间留下什么)

The rest of this page takes each piece apart.

后文把每一块拆开讲。

### Start a session / 开始一个 session

To start a session, type `@Claude` in a Slack message and say what you need in that same message (a question to answer, a task to run, a problem to dig into). Jordan's "`@Claude` where are we on launch prep?" is the whole move. Anyone in the channel can do it.

要开始 session，在一条 Slack 消息里写 `@Claude`，并在同一条消息里说出你要什么（要答的问题、要跑的任务、要挖的问题）。Jordan 那句 “`@Claude` where are we on launch prep?” 就是完整动作。频道里任何人都可以做。

### Track Claude's progress / 跟踪 Claude 的进度

Once your message sends, an "is thinking…" line at the bottom of the thread means Claude picked it up. What happens next depends on the size of the ask. Questions and one-off requests get a direct reply. A longer task, like Jordan's, gets a checklist instead. [How the checklist updates](#how-the-checklist-updates--checklist-如何更新) covers how it works and how to read one while it runs.

消息发出后，线程底部出现 “is thinking…” 表示 Claude 已经接住。接下来取决于请求大小。问题和一次性请求会直接回复。更长的任务（如 Jordan 的）会改用 checklist。[How the checklist updates](#how-the-checklist-updates--checklist-如何更新) 说明它如何工作、运行时如何读。

While a session runs, check in by replying in the same thread. Asking "how's it going?" in the thread is enough; it reads new replies as it works.

session 运行期间，在同一线程里回复即可过问。问一句 “how's it going?” 就够；它边干活边读新回复。

### Reply in the thread to steer / 在线程里回复以转向

Anyone in the channel can steer a running session by replying in its thread, not just the person who started it. That is what Sam did in the walkthrough. Without re-mentioning `@Claude` or starting over, he replied in Jordan's thread, and the session folded his instruction into work already in progress. Add context, redirect the approach, or pick up the result later; a colleague's thread is yours to continue.

频道里任何人都可以在线程里回复来转向正在跑的 session，不只是发起人。演示里 Sam 就是这样做的。他没有再 `@Claude`，也没有重开，只是在 Jordan 的线程里回复，session 就把他的指示折进已经在进行的工作。补充上下文、改方向、稍后接结果都可以；同事的线程你也可以继续。

Editing or deleting an earlier message doesn't steer the session the way a reply does:

编辑或删除更早的消息，并不能像回复那样转向 session：

- Editing a message: Claude receives a note each time you edit, showing what the message said before the edit and what it says now. Both versions become part of the session's transcript, so editing a message doesn't remove the earlier text from what Anthropic stores. An edit doesn't start a new task or re-address Claude, even if you add `@Claude` to it.
- Deleting a reply: Claude gets no notification and keeps the version it already read. Deleting the reply in Slack doesn't remove it from the session's transcript.
- Deleting the thread's first message: if the thread already has replies, Claude keeps working and the session stays open. If you delete it before anyone has replied, the session closes. Anything Claude already pushed or posted persists, per [what survives between replies](#what-survives-between-replies--回复之间留下什么), and you start a new thread to pick the task back up. Closing the session archives it rather than deleting it, so its transcript, including the message you deleted, stays with the channel's Claude data until that data is deleted.
- Correcting course: Claude responds to replies; edits reach it only as notes, and a deleted reply not at all. Say the change in a new reply; the reply is also how you walk back a message it already read.

- 编辑消息：每次编辑 Claude 都会收到一条说明，展示编辑前和编辑后的文本。两个版本都会进入 session transcript，所以编辑并不能从 Anthropic 存储里抹掉更早的文字。编辑不会开新任务，也不会重新呼叫 Claude，即使你在编辑里加上 `@Claude`。
- 删除一条回复：Claude 收不到通知，继续保留它已经读过的版本。在 Slack 里删回复，并不会从 session transcript 里删掉它。
- 删除线程的第一条消息：若线程已有回复，Claude 继续干活，session 保持打开。若在任何人回复之前删除，session 关闭。Claude 已经推送或发出的内容会按 [回复之间留下什么](#what-survives-between-replies--回复之间留下什么) 保留，你需要开新线程把任务捡回来。关闭 session 是归档而不是删除，因此 transcript（包括你删掉的那条消息）会跟着该频道的 Claude 数据，直到那些数据被删除。
- 纠正方向：Claude 响应的是回复；编辑只作为说明到达，已删的回复则完全不到。把变更写在一条新回复里；撤回它已经读过的消息，同样靠回复。

## Team channels and personal DMs / 团队频道与个人私信

Where you message Claude determines whose tools and accounts it uses. In a channel, it acts with the connections an organization admin set for that channel, and the work is attributed to its own accounts. In a DM, the same engine runs with your own claude.ai connectors, and the work is attributed to you, except pull requests, which the Claude GitHub App authors from DMs as well.

你在哪里给 Claude 发消息，决定它用谁的工具和账号。在频道里，它使用组织管理员为该频道配置的 connections，工作记在它自己的账号上。在私信里，同一套引擎跑在你自己的 claude.ai connectors 上，工作记在你名下；例外是拉取请求：从私信开出的 PR 同样由 Claude GitHub App 署名。

| Working in… | Access | Attribution | Best for |
| --- | --- | --- | --- |
| A channel | The channel's connections, set by an admin | The agent's own accounts | Shared work the team should see |
| A DM | Your own claude.ai connectors | You | Personal tasks using your own data |

| 工作地点 | 访问 | 归属 | 适合 |
| --- | --- | --- | --- |
| 频道 | 管理员为该频道设置的 connections | agent 自己的账号 | 团队应看见的共享工作 |
| 私信 | 你自己的 claude.ai connectors | 你 | 使用个人数据的私事 |

The Access column is about external systems. A channel session reaches what the channel was granted, and a DM session reaches what your own account is connected to.

Access 列说的是外部系统。频道 session 能触及频道被授予的范围，私信 session 能触及你自己账户已连接的范围。

Everything below describes channel sessions, where most of the model lives. For the DM side, see [direct message channels](https://claude.com/docs/claude-tag/concepts/agent-identity#direct-message-channels); for choosing between the two, see pick the right surface.

以下全部描述频道 session——模型的主体在这里。私信一侧见 [direct message channels](https://claude.com/docs/claude-tag/concepts/agent-identity#direct-message-channels)；两者如何选，见 pick the right surface。

## How Claude Tag differs from Cowork and Claude Code / Claude Tag 与 Cowork、Claude Code 的差别

Anthropic offers several ways to work with Claude on real tasks; they reach the same kinds of systems but through different mechanisms.

Anthropic 提供多种方式让 Claude 做真实任务；它们能触及同类系统，但机制不同。

| | Claude Tag | Cowork | Claude Code |
| --- | --- | --- | --- |
| Where | Slack channels | claude.ai chat | Your terminal or IDE |
| Whose access | The team's: service-account credentials an admin sets per channel | Yours: your personal OAuth connectors | Yours: your local credentials and filesystem |
| Who sees the work | Everyone in the channel | Just you | Just you |
| Best for | Shared work the team should see and steer | Personal research and drafting | Hands-on coding in your own checkout |

| | Claude Tag | Cowork | Claude Code |
| --- | --- | --- | --- |
| 在哪里 | Slack 频道 | claude.ai 聊天 | 你的终端或 IDE |
| 谁的访问 | 团队的：管理员按频道设置的服务账号凭证 | 你的：个人 OAuth connectors | 你的：本机凭证和文件系统 |
| 谁看见工作 | 频道里所有人 | 只有你 | 只有你 |
| 适合 | 团队应看见并转向的共享工作 | 个人研究与起草 | 在自己 checkout 里动手写代码 |

The short version: team work → Claude Tag; personal work → Cowork or Claude Code. Claude Tag's connections authenticate the agent itself with service accounts, not any person. Personal connectors apply in a Claude Tag DM, which runs on your own claude.ai account, the same way Cowork does.

短版：团队工作 → Claude Tag；个人工作 → Cowork 或 Claude Code。Claude Tag 的 connections 用服务账号认证的是 agent 自身，不是某个人。个人 connectors 只在 Claude Tag 私信里生效，私信跑在你自己的 claude.ai 账户上，和 Cowork 一样。

## Key concepts / 关键概念

Three ideas recur across this page and the rest of these docs.

三个概念在本页和其余文档里反复出现。

- **Agent identity:** in channels, Claude acts under its own service accounts that an admin provisions, not as the person who asked. What it can reach is set per channel, so everyone in a channel works with the same access. See [How agent identity works](https://claude.com/docs/claude-tag/concepts/agent-identity).
- **Scheduling and long-running work:** a task can run on a schedule, follow a pull request and act when it changes, or keep going across many turns in one thread. The same channel access applies whether a person or a schedule started it. See [Set up routines](https://claude.com/docs/claude-tag/users/proactivity).
- **Memory:** what Claude learns in public channels is saved as workspace memory that any channel can use; private channels keep their own. See [What Claude remembers](https://claude.com/docs/claude-tag/users/memory).

- **Agent identity：** 在频道里，Claude 以管理员配好的自己的服务账号行事，而不是提问的那个人。能触及什么按频道设定，所以频道里所有人用同一套访问。见 [How agent identity works](https://claude.com/docs/claude-tag/concepts/agent-identity)。
- **调度与长时工作：** 任务可以按日程跑、跟一个拉取请求并在它变化时行动，或在同一线程里跨许多回合继续。无论是人还是日程启动，都用同一套频道访问。见 [Set up routines](https://claude.com/docs/claude-tag/users/proactivity)。
- **记忆：** Claude 在公开频道里学到的内容存为工作区记忆，任意频道都能用；私有频道保留自己的。见 [What Claude remembers](https://claude.com/docs/claude-tag/users/memory)。

## Lifecycle of a request / 一次请求的生命周期

Every session, in any channel, follows the same five-step loop.

任意频道里的每个 session，都走同一套五步循环。

1. The session starts. Someone tags `@Claude` with a task that needs a working session, or a scheduled routine runs. At a channel's top level, the channel's own session picks the message up and starts the thread's session.
2. A sandbox builds. Each thread gets its own isolated working environment.
3. The working loop runs. Claude works through the task with the channel's access, editing its checklist in place.
4. The result lands in the thread. An answer, a doc, a chart, or a pull request.
5. A quiet period follows. The sandbox is released while the thread persists; a new reply rebuilds it and starts the loop again.

1. Session 开始。有人用 `@Claude` Tag 一项需要工作 session 的任务，或一条计划好的 routine 跑起来。在频道顶层，频道自己的 session 接住消息并启动该线程的 session。
2. 沙箱建起。每个线程有自己的隔离工作环境。
3. 工作循环运行。Claude 用频道的访问把任务做完，并就地改 checklist。
4. 结果落在线程里。一个答案、一份文档、一张图，或一个拉取请求。
5. 随后是安静期。线程还在，沙箱被释放；新回复会重建沙箱并再开循环。

Steps 1 and 2 are starting a session: a message tags Claude in, and a sandbox builds for that thread. Step 3, the working loop, is the checklist below. Steps 4 and 5, the result and the quiet period that follows, are covered in [What survives between replies](#what-survives-between-replies--回复之间留下什么).

第 1、2 步就是开始 session：一条消息把 Claude Tag 进来，并为该线程建沙箱。第 3 步工作循环就是下面的 checklist。第 4、5 步——结果和随后的安静期——见 [回复之间留下什么](#what-survives-between-replies--回复之间留下什么)。

Every session runs in an ephemeral sandbox, a real working environment where Claude can read documents, run code, build charts, and open pull requests. Claude clones your GitHub repositories into the sandbox, edits them there, and pushes changes back to GitHub as a branch or pull request. The sandbox runs the same engine that powers [Claude Code on the web](https://claude.com/docs/claude-code), Anthropic's agent for writing and running code, which is why the results are working artifacts rather than chat.

每个 session 都跑在短暂沙箱里——真实的工作环境，Claude 可以读文档、跑代码、做图、开拉取请求。Claude 把 GitHub 仓库克隆进沙箱，在里面改，再作为分支或拉取请求推回 GitHub。沙箱跑的是驱动 [Claude Code on the web](https://claude.com/docs/claude-code) 的同一套引擎（Anthropic 用于写代码、跑代码的 agent），所以结果是可工作的产物，而不只是聊天。

Two threads in the same channel are two separate sessions with separate sandboxes; sessions don't share state directly.

同一频道里的两个线程是两个独立 session、两套沙箱；session 之间不直接共享状态。

A channel where Claude works at the top level, outside threads, also carries one session for the channel itself, separate from every thread's. That session reads the channel's top-level messages and handles top-level @-mentions, so context carries across separate top-level asks in the same channel; [What survives between replies](#what-survives-between-replies--回复之间留下什么) covers how long it lives. For a task that needs investigation, tools, or a longer exchange, it starts a dedicated session in a thread under the message. At the channel's top level, `!restart` replaces the channel's session.

Claude 在频道顶层（线程之外）工作时，频道本身也带着一个 session，与每个线程的 session 分开。那个 session 读频道顶层消息、处理顶层 @提及，因此同一频道里分开的顶层请求可以带着上下文；它活多久见 [回复之间留下什么](#what-survives-between-replies--回复之间留下什么)。需要调查、工具或较长往返的任务，会在该消息下的线程里开专用 session。在频道顶层，`!restart` 会替换频道的 session。

Even with nothing connected, every session starts from the same baseline.

即使什么都没连接，每个 session 也从同一基线开始。

- It reads its own thread and the channel's history, including pinned items
- It searches the workspace's content
- It writes and runs code inside the sandbox, which is how a chart comes out of a posted CSV, or a doc out of a long thread, with nothing wired up

- 读自己的线程和频道历史，包括钉选
- 搜索工作区内容
- 在沙箱里写代码、跑代码——所以贴一份 CSV 能出图，长线程能出文档，不必先接线

### What Claude posts back / Claude 回帖什么

Claude posts each session's result in the thread you asked in, choosing the form that fits the work.

Claude 把每个 session 的结果发在你提问的线程里，并选择适合这项工作的形态。

| Form | What it is | When you see it |
| --- | --- | --- |
| A reply | An answer, list, or summary as a Slack message | Questions and short results |
| A file or chart | Attached to the thread the way anyone shares a file | Data, images, generated documents |
| A page kept current | Any of the above, edited in place over time | Digests, indexes, standing reports |
| A hosted page | A web page published on claude.ai, linked in the thread | Dashboards, prototypes, reports |

| 形态 | 是什么 | 何时见到 |
| --- | --- | --- |
| 回复 | 作为 Slack 消息的答案、列表或摘要 | 问题和短结果 |
| 文件或图表 | 像任何人分享文件一样附在线程上 | 数据、图像、生成的文档 |
| 保持更新的页面 | 以上任意一种，随时间就地编辑 | 摘要、索引、常驻报告 |
| 托管页面 | 发布在 claude.ai 上的网页，链接在线程里 | 仪表盘、原型、报告 |

A hosted page stays available after the session ends, and Claude updates it when you ask in the thread. Anyone with access to the channel can open it; [artifact visibility](https://claude.com/docs/claude-tag/concepts/security-and-data#artifact-visibility) covers the access model. These are the same artifacts Claude Code publishes, with channel-based access in place of owner-controlled sharing.

托管页面在 session 结束后仍然可用，你在线程里要求时 Claude 会更新它。能进该频道的人都能打开；访问模型见 [artifact visibility](https://claude.com/docs/claude-tag/concepts/security-and-data#artifact-visibility)。这些与 Claude Code 发布的 artifacts 相同，只是用基于频道的访问，代替由所有者控制的分享。

For code work, the result is usually a draft pull request opened under the Claude GitHub App, with the link posted in the thread.

代码工作的结果通常是 Claude GitHub App 名下开出的草稿拉取请求，链接发在线程里。

### How the checklist updates / checklist 如何更新

For a longer task, Claude's first reply is a checklist, a live task list that it edits in place as it goes. Slack does not send notifications when a message is edited, so the thread can look frozen while the list is still moving.

更长的任务里，Claude 的第一条回复是 checklist——一份它边做边就地改的实时任务列表。Slack 不会在消息被编辑时发通知，所以列表还在动时，线程看起来可能像冻住了。

A quiet thread usually means Claude is mid-task, not stuck. Open the thread. Checklist items checked off since you last looked mean the work is moving. In the walkthrough, nothing new arrived in anyone's notifications between 9:02 and 9:06, while the checklist ticked through fourteen threads of reading. If the work hits a wall, Claude usually says so in a reply rather than going silent. When a thread stays silent well past what the task should need, treat it as a stuck session; see [Claude reacted or started thinking, then never replied](https://claude.com/docs/claude-tag/users/troubleshooting).

安静的线程通常表示 Claude 正在干活，而不是卡住。打开线程。自你上次看过后又勾掉的 checklist 项，说明工作在推进。演示里，9:02 到 9:06 谁的通知里都没有新消息，同时 checklist 正在勾完十四个线程的阅读。若工作撞墙，Claude 通常会用回复说明，而不是一直沉默。线程安静的时间远超任务该花的时间，就当作卡住的 session；见 [Claude reacted or started thinking, then never replied](https://claude.com/docs/claude-tag/users/troubleshooting)。

### Channel access / 频道访问

Connections extend a session's reach into your own systems. An organization admin attaches access to a scope (the organization, a workspace, or a single channel), so the same request can do more in one channel than in another, and everyone in a given channel works with the same capability.

Connections 把 session 的触及范围扩到你们自己的系统。组织管理员把访问绑到一个 scope（组织、工作区或单个频道），因此同一请求在某个频道能做的比在另一个频道多，而给定频道里所有人能力相同。

A thread locks in its skills, plugins, and custom instructions when it starts, and a running thread keeps that set. Connections and domain rules are enforced on each request, so one an admin adds mid-thread works in a running thread. Claude doesn't announce a new connection in an existing thread; ask it to use the service by name. A new thread picks up every kind of change, so after a configuration change, start a new top-level thread.

线程启动时锁定其 skills、plugins 和自定义指令，正在跑的线程保持这一套。Connections 和域名规则按每次请求强制执行，因此管理员在线程中途加上的连接，对正在跑的线程也生效。Claude 不会在已有线程里宣布新连接；用服务名请它去用。新线程会接上所有种类的变更，所以改完配置后，开一个新的顶层线程。

#### How to identify access / 如何确认访问范围

Because access is set per channel rather than per person, the way to find out what a session can reach is to ask it, not to guess from your own permissions.

因为访问按频道而不是按人设定，要知道 session 能触及什么，去问它，而不是从你自己的权限去猜。

- Ask what Claude can reach. In any channel, `@Claude what can you access from this channel?` lists its current reach.
- If Claude cannot reach something, the channel was not granted access. Another channel may have the access, and an organization Owner can add it. [How agent identity works](https://claude.com/docs/claude-tag/concepts/agent-identity) covers the model.
- Personal connectors apply only in DMs. A connection an admin attaches to a channel is separate from a connector on your personal claude.ai account; anything on your own account works in your DMs, not here.

- 问 Claude 能触及什么。在任意频道发 `@Claude what can you access from this channel?`，会列出当前范围。
- 若 Claude 够不到某样东西，是这个频道没被授予访问。另一个频道可能有，组织 Owner 可以加上。模型见 [How agent identity works](https://claude.com/docs/claude-tag/concepts/agent-identity)。
- 个人 connectors 只在私信里生效。管理员绑到频道的 connection，与你个人 claude.ai 账户上的 connector 分开；你自己账户上的东西在私信里可用，这里不行。

### One-off and scheduled tasks / 一次性任务与计划任务

A session starts the same way whether a person triggers it or a schedule does. A tagged task runs in its thread's session, and the sandbox is released once the work finishes. A routine runs the same loop on a schedule, a channel watch, or a repository event, with the channel's connections, so a recurring digest or watcher gets the same access a typed request would. See [set up routines](https://claude.com/docs/claude-tag/users/proactivity).

无论是人触发还是日程触发，session 的启动方式相同。被 Tag 的任务跑在其线程的 session 里，做完后释放沙箱。routine 按日程、盯频道或仓库事件跑同一套循环，用的是频道的 connections，因此周期性摘要或看守者拿到的访问，与手打请求相同。见 [set up routines](https://claude.com/docs/claude-tag/users/proactivity)。

## Session context and memory / Session 上下文与记忆

Every session runs the same lifecycle; what varies by place and thread is what it can see, what survives idle, and what it remembers.

每个 session 生命周期相同；随场所和线程变化的是它能看见什么、空闲后留下什么、记住什么。

### Conversation context / 对话上下文

A session reads its own thread and its channel. Mentioning `@Claude` partway into an existing thread gives it a window of the thread's messages, not the whole thread, with other bots' replies filtered out. In long threads, restate anything critical.

session 读自己的线程和所在频道。在已有线程中途提及 `@Claude`，它拿到的是该线程消息的一个窗口，不是整条线程，其他机器人的回复会被滤掉。长线程里，关键内容请再陈述一遍。

Claude works in channels it has been added to, but workspace search can still find messages by keyword from public channels it's not a member of (the same search any Slack user has). Workspace search is unavailable in channels that include guests. Finding something is broader than being able to act somewhere; to have it participate in a channel directly, invite it with `/invite @Claude`.

Claude 在已被加入的频道里工作，但工作区搜索仍能按关键词找到它不是成员的公开频道里的消息（与任意 Slack 用户拥有的搜索相同）。包含访客的频道里，工作区搜索不可用。找到某样东西，比能在某处行动更宽；要让它直接参与一个频道，用 `/invite @Claude` 邀请。

### What survives between replies / 回复之间留下什么

A thread is durable, but the sandbox behind it is not. Durable means the thread stays in Slack, and everything Claude read and said in it is kept in the session's transcript on Anthropic's side, so the session can pick up where it left off whenever someone replies. Deleting messages or the thread in Slack doesn't remove them from that transcript. The sandbox is the computer where Claude runs commands and keeps working files for a task. A few minutes after a session finishes its turn, its sandbox is released, and the same session resumes in a fresh one when the next message arrives. A thread's session keeps resuming this way for as long as people use the thread. Claude replaces it with a new session in two cases.

线程是持久的，背后的沙箱不是。持久意味着线程留在 Slack 里，Claude 在其中读过和说过的一切，都保存在 Anthropic 侧的 session transcript 里，因此有人回复时 session 能从停下的地方接上。在 Slack 里删消息或删线程，并不会从那份 transcript 里抹掉。沙箱是 Claude 跑命令、为任务保留工作文件的那台计算机。session 完成本回合几分钟后，沙箱被释放；下一条消息到达时，同一 session 在全新沙箱里恢复。只要人们还在用这条线程，线程的 session 就会这样一直恢复。Claude 在两种情况下会换成新 session。

| When | What Claude does |
| --- | --- |
| Someone sends `@Claude !restart` | Archives the session right away and starts a fresh one that rereads the thread |
| The session gets stuck and fails | Starts the replacement when the next message arrives in the thread |

| 何时 | Claude 做什么 |
| --- | --- |
| 有人发送 `@Claude !restart` | 立刻归档当前 session，开一个重读该线程的新 session |
| session 卡住并失败 | 线程里下一条消息到达时启动替换 |

| | Survives idle periods |
| --- | --- |
| The conversation and its context | Yes |
| Channel memory | Yes |
| Work pushed, posted, or opened as a PR | Yes, in the external system |
| Files that exist only in the sandbox | No. Claude recreates them if asked. |

| | 空闲后是否留下 |
| --- | --- |
| 对话及其上下文 | 是 |
| 频道记忆 | 是 |
| 已推送、已发帖或已开成 PR 的工作 | 是，在外部系统里 |
| 只存在于沙箱里的文件 | 否。若被要求，Claude 会重建它们。 |

For long tasks, ask it to push branches and post drafts as it goes, so deliverables are saved somewhere durable while the work is still running. See [Good habits](https://claude.com/docs/claude-tag/users/good-habits).

长任务请让它边做边推分支、发草稿，这样交付物在工作还在跑时就已经落到持久的地方。见 [Good habits](https://claude.com/docs/claude-tag/users/good-habits)。

A running thread isn't told about configuration changes an admin makes after it started, such as a new connection, plugin, skill, repository grant, or custom instruction. A new thread starts from the scope's current configuration, so after changing a scope, start a fresh thread to see the change.

正在跑的线程不会被告知管理员在它启动之后做的配置变更，例如新的 connection、plugin、skill、仓库授权或自定义指令。新线程从 scope 的当前配置开始，所以改完 scope 后，开一条新线程才能看到变更。

The channel's own session, the one that handles top-level messages outside any thread, lives longer than a thread's. Claude replaces it with a fresh one when a top-level message arrives after about an hour with no top-level activity, when the session is about a day old, or when the channel's configuration has changed since the session started. Channel memory and the channel's history are unaffected, so the only visible effect is that Claude no longer carries what the previous session had been working on.

频道自己的 session（处理线程之外的顶层消息）比线程的活得更久。出现以下情况时 Claude 会换成新的：约一小时没有顶层活动后到达一条顶层消息、session 大约一天了，或自 session 启动以来频道配置已变。频道记忆和频道历史不受影响，所以唯一可见的效果是 Claude 不再带着上一个 session 当时在做的事。

Claude also stops reading a channel's top-level messages once about 100 of them have arrived since it last posted or replied there. An `@Claude` mention in the channel starts it reading again; see [When Claude stops reading a channel](https://claude.com/docs/claude-tag/users/when-claude-responds). These thresholds are defaults and can change, so treat the numbers as approximate.

自从它上次在该频道发帖或回复以来，大约又到了 100 条顶层消息，Claude 也会停止阅读该频道的顶层消息。在频道里 `@Claude` 会让它重新开始读；见 [When Claude stops reading a channel](https://claude.com/docs/claude-tag/users/when-claude-responds)。这些阈值是默认值，可能变化，数字当作近似。

### Channel and workspace memory / 频道记忆与工作区记忆

Memory follows places the same way access does, and it accumulates for the team rather than for any individual.

记忆像访问一样跟随场所，并且为团队累积，而不是为某个人。

Memory from public channels is shared across the workspace, so a decision recorded while working in #launch-week is available when someone asks in #gtm-west. When Claude cites something from a channel you have never used it in, it is reading workspace memory shared from that channel, not a profile of you.

公开频道的记忆在整个工作区共享，所以在 #launch-week 工作时记下的决定，有人在 #gtm-west 提问时也能用。当 Claude 引用一个你从未在其中用过它的频道里的内容时，它读的是从那个频道共享来的工作区记忆，不是你的个人档案。

Private channels read workspace memory while working, and what they save is written to that channel's own store rather than the workspace store.

私有频道工作时会读工作区记忆，但它们保存的内容写到该频道自己的存储，而不是工作区存储。

To see what it holds, ask `@Claude what do you remember about this channel?`. Anyone in the channel can correct or remove entries. [What Claude Tag remembers](https://claude.com/docs/claude-tag/users/memory) covers reading, correcting, and adding to memory.

要看它记了什么，问 `@Claude what do you remember about this channel?`。频道里任何人都可以纠正或删除条目。[What Claude Tag remembers](https://claude.com/docs/claude-tag/users/memory) 覆盖读、纠正和向记忆里添加。

The whole model so far fits in one picture, with access set at the scope, memory shared from public channels, work in progress per thread, and DMs outside all of it.

至此整套模型可以收进一张图：访问设在 scope，记忆从公开频道共享，进行中的工作按线程，私信在这一切之外。

DMs are outside this picture; they run on your own account, as covered in [Team channels and personal DMs](#team-channels-and-personal-dms--团队频道与个人私信) above. Owners can disable DMs organization-wide; see [Allow or disable direct messages](https://claude.com/docs/claude-tag/admins/restrict-access).

私信在这张图之外；它们跑在你自己的账户上，见上文 [团队频道与个人私信](#team-channels-and-personal-dms--团队频道与个人私信)。Owner 可以在全组织禁用私信；见 [Allow or disable direct messages](https://claude.com/docs/claude-tag/admins/restrict-access)。

## Related resources / 相关资源

- [Getting started](https://claude.com/docs/claude-tag/users/getting-started): hand Claude your first task
- [How agent identity works](https://claude.com/docs/claude-tag/concepts/agent-identity): why an admin sets access per channel, and how credentials stay out of the sandbox
- [Good habits](https://claude.com/docs/claude-tag/users/good-habits): write tasks that survive the sandbox lifecycle

- [Getting started](https://claude.com/docs/claude-tag/users/getting-started)：把第一项任务交给 Claude
- [How agent identity works](https://claude.com/docs/claude-tag/concepts/agent-identity)：管理员为何按频道设访问，以及凭证如何留在沙箱之外
- [Good habits](https://claude.com/docs/claude-tag/users/good-habits)：写出能熬过沙箱生命周期的任务
