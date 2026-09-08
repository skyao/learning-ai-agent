---
title: "Introducing Claude Tag"
linkTitle: "发布博文"
weight: 10
date: 2026-06-23
description: >
  Anthropic 发布博文 Introducing Claude Tag 的中英对照
---

来源： [Introducing Claude Tag](https://www.anthropic.com/news/introducing-claude-tag)  
日期： 2026 年 6 月 23 日  
分类： Product

# Introducing Claude Tag / 介绍 Claude Tag

Claude Tag is a new way for teams to work with Claude.

Claude Tag 是团队与 Claude 协作的一种新方式。

We’re starting on Slack, which Claude can join as a team member. Grant Claude access to selected channels, and connect it to whichever tools, data—and even codebases—you choose. Then, anyone in the channel can tag @Claude in, and delegate tasks to it while they focus on other work. Claude builds context by remembering relevant information from the channels it’s in, and can plan out tasks to complete in the future.

我们先从 Slack 开始——Claude 可以像一名团队成员一样加入其中。向选定的频道授予 Claude 访问权限，并把它连接到你选择的任意工具、数据，乃至代码库。之后，频道里的任何人都可以 @Claude，把任务委派给它，自己去忙别的事。Claude 会记住它所在频道中的相关信息来建立上下文，并能规划将来要完成的任务。

We see Claude Tag as the beginning of an evolution of Claude Code: it makes the model even more proactive, and it works better with a full team. Tagging @Claude is now one of the main ways we get things done at Anthropic. Today, 65% of our product team’s code is created by our internal version of Claude Tag. The same pattern is now spreading well beyond engineering—we’re tagging Claude to chase down product metrics and data, work through support tickets, or even help find the root cause of tricky bugs.

我们把 Claude Tag 视为 Claude Code 演化的开端：它让模型更加主动，也更适合与整个团队一起工作。在 Anthropic 内部，@Claude 已经成为我们推进工作的主要方式之一。目前，产品团队 65% 的代码由内部版 Claude Tag 产出。同一模式正在超出工程范围扩散——我们会 @Claude 去追查产品指标与数据、处理支持工单，甚至帮忙定位棘手缺陷的根因。

We’re launching Claude Tag on Slack, since it’s a natural home for collaborative work between teams and AI, and where much of Anthropic’s day-to-day work already happens. It’s available today in beta for Claude Enterprise and Team customers. Our goal is to expand where it’s available more widely, so that teams can tag @Claude in the many other places they work.

我们选择在 Slack 上线 Claude Tag，因为它天然适合团队与 AI 的协作，而 Anthropic 日常工作的很大一部分也已经发生在这里。即日起，Claude Enterprise 与 Team 客户可以以 beta 使用。我们的目标是把它扩展到更多地方，让团队能在日常工作的许多其他场景里 @Claude。

## Working with @Claude / 与 @Claude 一起工作

If you’ve worked with Claude Code or Cowork before, Claude Tag will feel familiar. Tag @Claude with a request in simple terms and it’ll break its task down into stages and then work through them in turn, using the tools it has access to. Once it’s done, it’ll respond in a Slack thread with what it’s created.

如果你用过 Claude Code 或 Cowork，Claude Tag 会有熟悉感。用简单的话向 @Claude 提出请求，它会把任务拆成若干阶段，再依次利用它能访问的工具推进。完成后，它会在 Slack 线程里回复它所产出的内容。

But tagging Claude comes with a few new advantages:

不过，@Claude 还带来几项新的优势：

**@Claude is multiplayer.** Within a given Slack channel, there’s one Claude that interacts with everyone. This means that anyone can see what it’s working on, and can pick up the conversation from where the last person left off. This makes tagging Claude very different from working within a single chat or for a single task—it’s much more like interacting collaboratively with a teammate.

**@Claude 是多人的。** 在一个给定的 Slack 频道里，只有一个与所有人互动的 Claude。这意味着任何人都能看到它正在做什么，也可以从上一任停下的地方接续对话。这让 @Claude 与「单独开一个聊天」或「只做一件任务」非常不同——它更像是在和一位队友协作。

**@Claude learns over time.** As Claude follows along with its channel, it builds more context about the work. This means that users don’t need to explain things to it from scratch over and over again. And Claude can even automatically learn from other Slack channels and data sources, if it’s granted permission. (It doesn’t report from private channels.) This gives it the tacit knowledge necessary for it to provide the best possible work.

**@Claude 会随时间学习。** 随着 Claude 跟进它所在的频道，它会积累关于这项工作的更多上下文。因此用户不必一遍又一遍地从零解释。若获得授权，Claude 甚至还能自动从其他 Slack 频道和数据源学习。（它不会从私有频道向外汇报。）这为它提供了把工作做到最好所需的默会知识。

**@Claude takes initiative.** If “ambient” behavior is enabled, Claude will proactively keep you updated about whatever it thinks you might need to know. It’ll flag relevant information from across the channels it’s in and the tools it’s connected to, and follow up on threads or tasks that have gone quiet without being resolved.

**@Claude 会主动作为。** 若启用了 “ambient”（主动在场）行为，Claude 会主动把它认为你可能需要知道的事情更新给你。它会从所在频道和已连接的工具中标出相关信息，并跟进那些陷入安静、却尚未解决的线程或任务。

**@Claude works asynchronously.** Set Claude a task, and you can focus on your other priorities while it works. It can also schedule tasks for itself, pursuing a project autonomously over hours or days. We’ve found this particularly helpful at Anthropic: we now spend much more of our time delegating tasks to many Claudes in parallel.

**@Claude 异步工作。** 给 Claude 一项任务后，你可以在它干活时去忙别的优先级。它也可以给自己安排任务，在数小时乃至数天里自主推进一个项目。我们在 Anthropic 内部发现这一点尤其有用：现在我们把更多时间花在把任务并行委派给许多个 Claude 上。

You can also send Claude direct messages: it’ll respond privately, using the personal tools and connectors you’ve set up.

你也可以给 Claude 发私信：它会私下回复，并使用你个人已配置的工具与连接器。

## Getting started / 开始使用

We’ve designed Claude Tag with teams and organizations in mind: @Claude’s access to sensitive data and task-specific tools can be very tightly controlled.

我们从一开始就按团队与组织来设计 Claude Tag：@Claude 对敏感数据和任务专用工具的访问可以被非常精细地控制。

To get up and running, system administrators specify which tools and information the model should have access to, in which channels. Think of it as creating separate Claude identities for different uses: everything, including its memories, will stay scoped to the channels defined by the administrators. For example, a model set up for sales work won’t pass on memories to one set up for engineering; nor will it give engineers access to any sales data or tools. More information about provisioning access is available [here](https://claude.com/docs/claude-tag/concepts/agent-identity).

要跑起来，系统管理员需要指定模型应能访问哪些工具与信息、以及在哪些频道中访问。可以把它理解成：为不同用途创建相互分离的 Claude 身份。包括记忆在内的一切，都会被限定在管理员划定的频道范围内。例如，为销售工作配置的模型不会把记忆传给为工程配置的那一个，也不会让工程师拿到任何销售数据或工具。关于如何配置访问权限，见 [How agent identity works](https://claude.com/docs/claude-tag/concepts/agent-identity)。

Once permissions are set, everyone can begin tagging right away. Administrators can set limits for token spend (both for the organization and for individual channels), and can view a log of everything that @Claude has done, along with who requested each task.

权限设定完成后，所有人都可以立刻开始 @Claude。管理员可以为 Token 花费设置上限（组织级与单个频道级），并查看 @Claude 做过的全部事项日志，以及每项任务是由谁发起的。

If you’re a Claude Enterprise or Team customer, you have access to Claude Tag in beta starting today. To get started, visit [here](https://claude.ai/admin-settings/claude-tag) and follow these four steps:

如果你是 Claude Enterprise 或 Team 客户，即日起即可使用 Claude Tag 的 beta。请打开 [管理设置](https://claude.ai/admin-settings/claude-tag)，按下面四步操作：

1. Pair Claude Tag with your Slack workspace  
   将 Claude Tag 与你的 Slack 工作区配对

2. Give Claude access to your tools  
   向 Claude 授予你的工具访问权限

3. Set a limit on your organization’s monthly spend  
   为组织设定每月花费上限

4. Test Claude in a private channel to confirm it works.  
   在私有频道中测试 Claude，确认其工作正常。

Claude Tag replaces the existing Claude in Slack app. To migrate, administrators can opt in within 30 days. We’re issuing an introductory launch credit to eligible Enterprise and Team organizations so that the whole company can try it out.

Claude Tag 将取代现有的 Claude in Slack 应用。迁移时，管理员可在 30 天内选择加入。我们会向符合条件的 Enterprise 与 Team 组织发放上线试用额度，方便全公司试用。

Claude Tag works with Opus 4.8. You can read our [docs](https://claude.com/docs/claude-tag/overview) and [product page](https://claude.com/product/tag).

Claude Tag 基于 Opus 4.8。你可以阅读我们的 [文档](https://claude.com/docs/claude-tag/overview) 和 [产品页](https://claude.com/product/tag)。
