---
title: "I think “agent” may finally have a widely enough agreed upon definition to be useful jargon now"
linkTitle: "Simon Willison"
weight: 30
date: 2025-09-18
description: >
  Simon Willison 博文中英对照：An LLM agent runs tools in a loop to achieve a goal.
---

来源： [I think “agent” may finally have a widely enough agreed upon definition to be useful jargon now](https://simonwillison.net/2025/Sep/18/agents/)  
日期： 2025 年 9 月 18 日  
作者： Simon Willison

文中配图（IBM 1979 培训幻灯、Josh Bickett 的 meme）见原文。

# I think “agent” may finally have a widely enough agreed upon definition to be useful jargon now / 我觉得 “agent” 终于有了一个足够被公认、能当行话用的定义

I've noticed something interesting over the past few weeks: I've started using the term “agent” in conversations where I don't feel the need to then define it, roll my eyes or wrap it in scare quotes.

这几周我注意到一件有意思的事：我开始在对话里直接用 “agent” 这个词，而不再觉得必须先定义它、翻个白眼、或给它加上表示怀疑的引号。

This is a big piece of personal character development for me!

对我个人来说，这算一次不小的性格成长。

Moving forward, when I talk about agents I'm going to use this:

往后我谈 Agent，都会用这一句：

**An LLM agent runs tools in a loop to achieve a goal.**

**LLM Agent 为了达成目标，在循环里调用工具。**

I've been very hesitant to use the term “agent” for meaningful communication over the last couple of years. It felt to me like the ultimate in buzzword bingo—everyone was talking about agents, but if you quizzed them everyone seemed to hold a different mental model of what they actually were.

过去两年，我很不愿意用 “agent” 来做认真的交流。它在我看来像时髦词宾果的终局——人人都在谈 Agent，但你一追问，每个人脑子里的模型都不一样。

I even started collecting definitions in my [agent-definitions](https://simonwillison.net/tags/agent-definitions/) tag, including crowdsourcing 211 definitions on Twitter and attempting to summarize and group them with Gemini (I got 13 groups, here's the tool-using LLMs one.)

我甚至开始在 [agent-definitions](https://simonwillison.net/tags/agent-definitions/) 这个标签下收集定义，包括在 Twitter 上众包了 211 条，再用 Gemini 尝试汇总分组（得到 13 组；其中有「会用工具的 LLM」那一组）。

Jargon terms are only useful if you can be confident that the people you are talking to share the same definition! If they don't then communication becomes less effective—you can waste time passionately discussing entirely different concepts.

行话只有在你确信对方和你用同一个定义时才有用。否则交流会变差——你们可能热火朝天地讨论着完全不同的东西。

It turns out this is not a new problem. In 1994's *Intelligent Agents: Theory and Practice* Michael Wooldridge wrote:

这其实不是新问题。Michael Wooldridge 在 1994 年的 *Intelligent Agents: Theory and Practice* 里写过：

> Carl Hewitt recently remarked that the question *what is an agent?* is embarrassing for the agent-based computing community in just the same way that the question *what is intelligence?* is embarrassing for the mainstream AI community. The problem is that although the term is widely used, by many people working in closely related areas, it defies attempts to produce a single universally accepted definition.

> Carl Hewitt 最近说过：*什么是 agent？* 这个问题让基于 Agent 的计算社区难堪的程度，就和 *什么是智能？* 让主流 AI 社区难堪的程度一样。问题在于：这个词被广泛使用，使用者又在密切相关的领域里工作，但它就是抗拒被收成一个普遍接受的单一定义。

So long as agents lack a commonly shared definition, using the term reduces rather than increases the clarity of a conversation.

只要 Agent 还没有一个被共同分享的定义，用这个词就会降低而不是提高对话的清晰度。

In the AI engineering space I think we may finally have settled on a widely enough accepted definition that we can now have productive conversations about them.

在 AI 工程这个圈子里，我觉得我们可能终于落到了一个足够被接受的定义，现在可以拿它来做有产出的讨论了。

## Tools in a loop to achieve a goal / 为了达成目标，在循环里调用工具

An LLM agent runs tools in a loop to achieve a goal. Let's break that down.

LLM Agent 为了达成目标，在循环里调用工具。拆开看。

The “tools in a loop” definition has been popular for a while—Anthropic in particular have settled on that one. This is the pattern baked into many LLM APIs as tools or function calls—the LLM is given the ability to request actions to be executed by its harness, and the outcome of those tools is fed back into the model so it can continue to reason through and solve the given problem.

「循环里用工具」这套定义已经流行了一段时间——Anthropic 尤其站在这一边。这就是许多 LLM API 里做成 tools / function calls 的那种模式：LLM 可以请求由它的 harness 去执行的动作，工具的结果再喂回模型，让它继续推理、把给定问题解下去。

“To achieve a goal” reflects that these are not infinite loops—there is a stopping condition.

「为了达成目标」说的是：这不是无限循环——有停止条件。

I debated whether to specify “... a goal set by a user”. I decided that's not a necessary part of this definition: we already have sub-agent patterns where another LLM sets the goal (see Claude Code and Claude Research).

我犹豫过要不要写成「……由用户设定的目标」。后来觉得这不是定义里的必要部分：我们已经有子 Agent 模式，目标是另一个 LLM 定的（见 Claude Code 和 Claude Research）。

There remains an almost unlimited set of alternative definitions: if you talk to people outside of the technical field of building with LLMs you're still likely to encounter travel agent analogies or employee replacements or excitable use of the word “autonomous”. In those contexts it's important to clarify the definition they are using in order to have a productive conversation.

替代定义几乎还是无限多：如果你和「用 LLM 做工程」这个技术圈子以外的人谈，仍可能碰到旅行社式的 agent 类比、员工替代、或对 “autonomous / 自主” 这个词的兴奋用法。那些场合里，要把对方用的定义先说清楚，讨论才有产出。

But from now on, if a technical implementer tells me they are building an “agent” I'm going to assume they mean they are wiring up tools to an LLM in order to achieve goals using those tools in a bounded loop.

但从现在起，如果一个技术实现者告诉我他们在做 “agent”，我会默认他们的意思是：把工具接到 LLM 上，在一个有界循环里用这些工具去达成目标。

Some people might insist that agents have a memory. The “tools in a loop” model has a fundamental form of memory baked in: those tool calls are constructed as part of a conversation with the model, and the previous steps in that conversation provide short-term memory that's essential for achieving the current specified goal.

有人会坚持 Agent 必须有记忆。「循环里用工具」这套模型里已经内建了一种基本形态的记忆：那些工具调用是作为与模型的对话的一部分被构造出来的，对话里前面的步骤就是短期记忆，对达成当前这个给定目标是必要的。

If you want long-term memory the most promising way to implement it is with an extra set of tools!

若你要长期记忆，最有希望的实现方式是：再加一套工具。

## Agents as human replacements is my least favorite definition / 把 Agent 当成人的替代，是我最不喜欢的定义

If you talk to non-technical business folk you may encounter a depressingly common alternative definition: agents as replacements for human staff. This often takes the form of “customer support agents”, but you'll also see cases where people assume that there should be marketing agents, sales agents, accounting agents and more.

如果你和非技术的商务人士谈，可能会碰到一个令人丧气地常见的替代定义：Agent 是人类员工的替代。形式常常是 「customer support agents」，但你也会看到有人假定该有营销 Agent、销售 Agent、会计 Agent 等等。

If someone surveys Fortune 500s about their “agent strategy” there's a good chance that's what is being implied. Good luck getting a clear, distinct answer from them to the question “what is an agent?” though!

如果有人去调查财富 500 强的 「agent strategy」，很大概率暗示的就是这个。不过，想从他们那儿拿到对「什么是 Agent」的清楚、可区分的回答——祝你好运。

This category of agent remains science fiction. If your agent strategy is to replace your human staff with some fuzzily defined AI system (most likely a system prompt and a collection of tools under the hood) you're going to end up sorely disappointed.

这一类 Agent 至今仍是科幻。如果你的 Agent 战略是用某个定义模糊的 AI 系统（罩子下面多半是一条 system prompt 加一组工具）去替换人类员工，你最后会非常失望。

That's because there's one key feature that remains unique to human staff: accountability. A human can take responsibility for their actions and learn from their mistakes. Putting an AI agent on a performance improvement plan makes no sense at all!

因为有一项关键特征至今仍是人类员工独有的：问责。人可以为自己的行为负责，并从错误中学习。把一个 AI Agent 放进绩效改进计划，毫无意义。

Amusingly enough, humans also have agency. They can form their own goals and intentions and act autonomously to achieve them—while taking accountability for those decisions. Despite the name, AI agents can do nothing of the sort.

好玩的是，人类还有 agency（能动性）。他们能形成自己的目标和意图，自主去达成——同时为那些决定承担问责。尽管名叫 Agent，AI Agent 做不到这类事。

This legendary 1979 IBM training slide says everything we need to know:

这张传说中的 1979 年 IBM 培训幻灯，把我们需要知道的都说了：

（原文配图：1979 IBM 培训幻灯，大意是计算机永远无法被问责，因此计算机绝不能做管理决策。）

## OpenAI need to get their story straight / OpenAI 得把说法统一起来

The single biggest source of agent definition confusion I'm aware of is OpenAI themselves.

我所知道的、Agent 定义混乱的最大单一来源，是 OpenAI 自己。

OpenAI CEO Sam Altman is fond of calling agents “AI systems that can do work for you independently”.

OpenAI CEO Sam Altman 喜欢把 Agent 叫做 「能为你独立干活的 AI 系统」。

Back in July OpenAI launched a product feature called “ChatGPT agent” which is actually a browser automation system—toggle that option on in ChatGPT and it can launch a real web browser and use it to interact with web pages directly.

今年 7 月，OpenAI 上线了一个叫 “ChatGPT agent” 的产品功能，实际上是浏览器自动化系统——在 ChatGPT 里打开那个选项，它就能拉起一个真正的网页浏览器，直接和页面交互。

And in March OpenAI launched an Agents SDK with libraries in Python (`openai-agents`) and JavaScript (`@openai/agents`). This one is a much closer fit to the “tools in a loop” idea.

今年 3 月，OpenAI 又发了 Agents SDK，有 Python（`openai-agents`）和 JavaScript（`@openai/agents`）库。这一份和 「循环里用工具」 贴得近得多。

It may be too late for OpenAI to unify their definitions at this point. I'm going to ignore their various other definitions and stick with tools in a loop!

到这个节骨眼，OpenAI 再把定义统一起来可能已经太晚。我会忽略他们其余那些定义，继续盯着「循环里用工具」。

## There's already a meme for this / 这件事已经有一张 meme

Josh Bickett tweeted this in November 2023:

Josh Bickett 在 2023 年 11 月发过这张：

> What is an AI agent?

> 什么是 AI Agent？

（原文配图：钟形曲线 meme。两端都说「AI Agent 不过是 LLM 在循环里调工具」，中间那档则是一长串激动而含糊的定义。）

I guess I've climbed my way from the left side of that curve to the right.

我大概是从那条曲线的左边，爬到了右边。
