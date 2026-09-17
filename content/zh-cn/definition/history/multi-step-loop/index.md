---
title: "多步循环：控制流的归属"
linkTitle: "多步循环"
weight: 20
date: 2026-09-15
description: >
  下一步由模型选择且必须迭代至终止条件。区别于单轮补全、单次工具调用，以及路径在部署前写死的 workflow。
---

循环回答三个工程问题：谁决定下一步、状态保存在哪、何时停止。单轮问答、一次 Function Call、行级补全都不迭代，没有终止于目标的语义。多轮聊天也不是：状态是对话缓冲，观察是用户，行动是文本。

定义里的最小环是：选动作 → 执行 → 写回观察 → 再选，直到完成、失败或人工介入。后来称作 ReAct，是因为 2022-10 的论文把这三元组写成可抄的文本协议。需要分开的另一条线是 Anthropic 2024-12 的划分：**workflow** 的边在代码里，**agent** 的边在模型输出里。多步流水线即使每步都调用 LLM，控制流仍不属于本要素。

## 提示词里的串行计算 ≠ 环境环

[Chain-of-Thought](/timeline/2022/chain-of-thought/) 在 token 序列里展开中间计算，没有环境。ReAct 的 Thought 从这里接出，再接 Action / Observation。任务型对话（[前传](/timeline/before2022/early-concepts/task-oriented-dialogue/)）也有多步，图在上线前闭合，槽位与 API 表固定。开放目标、未注册工具、失败后改计划，不在那张图里。

## 2022–2023：文本协议 → 进程内编排 → 无校验的自主环

[ReAct](/timeline/2022/react/)（Yao et al.）在 HotpotQA / ALFWorld / WebShop 上比较「只想 / 只做 / 交错」。交错更好，说明观察必须进入下一步，不能只靠内部 CoT。实现是字符串约定：模型吐 `Action:`，宿主正则或 JSON 解析，失败即掉步。没有 schema、没有事务、没有外部完成判据。ChatGPT 尚未发布；引用爬升发生在 2023，工程化滞后于 arXiv。

[LangChain](/timeline/2022/langchain/)（2022-10 库，2023 成为默认胶水）把提示模板、工具包装、AgentExecutor 收成包。循环可复制，状态在进程内存和提示里。后来的批评针对抽象层过厚，不否定「当时必须有人把环跑起来」。

[AutoGPT](/timeline/2023/autogpt/)、[BabyAGI](/timeline/2023/babyagi/) 把终止条件交给模型自己写的任务队列。四要素在形态上接通。缺的是：可靠解析、工作集管理、对「已完成」的外部检验。空转、重复失败、不可逆副作用，是无界环的预期行为，不是意外。star 数度量传播，不度量完成率。

[AutoGen](/timeline/2023/autogen/) 把多角色做成消息总线。控制流变成「谁对谁说话」。若所有角色只产文本，仍是对话；至少一方执行代码或外部调用，才有环境环。[MemGPT](/timeline/2023/memgpt/) 用操作系统式分页对抗窗口上限，延长的是环能走的步数，不引入新动作。[Assistants API](/timeline/2023/assistants-api/) 把 thread 当作托管状态机，循环上云，锁在一家 API。

[SWE-bench](/timeline/2023/swe-bench/)（2023-10）给出仓库级完成判据，公开分数接近零。环能转，与环能交工，从此必须分开写。

## 2024–2025：人在环路的产品形态，然后是运行时吞掉编排

[Cursor](/timeline/2024/cursor/) 等 IDE 助手把核塞进编辑器。早期以短编辑为主，长环后加。人批准每一步，控制流仍是环，自主度低。定义允许弱自主；这是留存先起来的形态。Devin 路线把环放到云端 VM，叙事是全自主，当时全量考卷与独立复现不足。

[Building effective agents](/timeline/2024/building-effective-agents/) 把「图」和「模型选边」写开，用来抑制「一切上多 Agent」的架构通胀。多 Agent 是一种拓扑，不是更强的循环原语。

2025 年控制流的实现位置换了。[Claude Code](/timeline/2025/claude-code/)、云端 [Codex](/timeline/2025/openai-codex/)、IDE / CLI Agent 模式内置 think–act–observe，应用方不再自写 AgentExecutor。[Agents SDK](/timeline/2025/agents-sdk/) 仍是库：编排、内置工具、tracing，进程仍是调用方的。[A2A](/timeline/2025/a2a/) 把另一 Agent 当作可寻址端点，扩展的是环的边界（MCP 管工具，A2A 管对端 Agent），生产互操作尚未成为默认。

## 2026：环足够长之后，状态机露出基础设施语义

个体编码环成为日常之后，时长进入小时级。[Aries](/timeline/2026/aries/) 把一次委派看成轨迹：多次推理、工具、沙箱、KV 状态，而不是微服务式请求。编排库解决不了存储、隔离和上下文税。[Claude Tag](/timeline/2026/claude-tag/) 用频道线程当 session：同一套沙箱环，换了委派面和可见性。控制协议没有新发明，生命周期和权限模型有。

## 本条的边界

循环是控制平面。只有环，可以得到角色扮演或空转。观察若不是环境回执，环在和用户聊天；若没有测试、屏幕或终端状态，环没有停机条件，只能靠步数上限或账单熔断。协议写于 2022-10，可运行无界环出现于 2023，可日常委派的运行时出现于 2025。Agent 不由本条单独宣布。

[对环境行动](../acting-on-environment/) 写副作用如何从「解析一段文本」变成可执行接口。
