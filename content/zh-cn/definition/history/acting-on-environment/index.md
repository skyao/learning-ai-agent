---
title: "对环境行动：副作用的接口与执行边界"
linkTitle: "对环境行动"
weight: 30
date: 2026-09-15
description: >
  工具、文件、进程、GUI、网络请求。协议描述如何调用；沙箱描述在哪执行；身份描述以谁的名义执行。三者都不是循环本身。
---

对话只写 token。本条要求决策结果变成环境状态变化：调 API、改树、跑测试、点像素、发 HTTP。没有副作用，观察无从产生，第四条也没有输入。

有副作用仍可能不是 Agent。Copilot 改缓冲区，没有目标循环。[单次 Function Call](/timeline/2023/function-calling/) 有一次 I/O，没有「根据返回值再选」。Function Calling、MCP、Skills 是接线与装载，运行时才跑循环。分类上它们进协议，判定上它们不是 Agent。

工程上要盯三条边界：**解析**（模型输出如何变成合法调用）、**执行**（代码跑在谁的地址空间）、**主体**（凭证是用户的、服务账号的，还是 Agent 自己的）。

## 2020–2022：检索、解释器、提示词演戏

[RAG](/timeline/before2022/rag/) 把文档读进上下文，流水线单次，无二次决策。[WebGPT](/timeline/before2022/webgpt/) 在受控文本浏览器里 search / click / quote，有动作也有页面观察，终止于答题。[MRKL](/timeline/2022/mrkl/) 给出模块图：语言模型必须外挂知识与离散计算；实现私有。[PAL](/timeline/2022/pal/) 把推理编译成程序，副作用关在解释器里，任务是解题不是改仓库。[Sparrow](/timeline/2022/sparrow/) 带规则的网页问答。[Copilot GA](/timeline/2022/copilot-ga/) 让补全成为付费路径。

工具调用的主流实现是 prompt 约束：模型在自然语言里嵌 JSON 或伪 DSL，宿主 `eval` 或正则抽取。失败模式是幻觉字段、截断、注入。ReAct 同期仍走文本 Action。可解析的函数选择要到下一阶段。

## 2023：schema 化调用，以及「代码必须进沙箱」

[Function Calling](/timeline/2023/function-calling/)（2023-06-13）把 name + arguments 收进 Chat Completions。宿主校验类型、执行、把结果当 role=tool 写回。循环仍由调用方写。这是模型↔工具的第一种稳定方言；各家随后的 tool use 沿这条形状走。公告已写明：工具输出不可信，存在注入。接口不等于安全。

[ChatGPT plugins](/timeline/2023/chatgpt-plugins/) 把同一模式做到终端用户，清单与鉴权私有。[Code Interpreter](/timeline/2023/code-interpreter/) 把 Python 放到云端隔离 VM：文件系统、包、图像是真环境。只要允许模型写代码，沙箱就从可选项变成执行边界——主机进程不能再直接 `exec`。

## 2024–2025：为循环设计的动作集，工具总线，专长装载

人用的 IDE 对 Agent 过宽（任意快捷键）又过窄（没有「运行测试并返回失败切片」这种原语）。[SWE-agent](/timeline/2024/swe-agent/) 的 Agent-Computer Interface 按循环裁剪编辑 / 导航 / 测试。动作空间是设计物。

[Computer Use](/timeline/2024/computer-use/)（2024-10）把观察换成截屏，动作换成鼠标键盘。副作用在 GUI 进程，错误不可逆、难回滚。[OSWorld](/timeline/2024/osworld/) 量的就是这类。[Operator](/timeline/2025/operator/) 给 Agent 独立浏览器，把预览收成产品；可靠度仍是预览级。视觉核（GPT-4o）是输入前提，点击策略是另一层。

[MCP](/timeline/2024/mcp/)（2024-11）把「每个模型厂商一份 JSON tool 表」换成模型↔资源的开放协议。它不管循环、不管停机。2024 年 server 少、热度低；[2025 年多家接入](/timeline/2025/mcp-adoption/) 后才成为默认插槽。对照前传 [FIPA ACL](/timeline/before2022/early-concepts/fipa-acl/)：先写标准再等生态可以空转；MCP 是产品已存在、再收成事实协议。

[Agent Skills](/timeline/2025/agent-skills/) 用目录装脚本、约定和领域步骤，运行时按需加载。通用核不变，动作清单晚绑定。它不是 RPC，是可版本化的专长包。

云端 [Codex](/timeline/2025/openai-codex/)：一任务一沙箱，可并行、可开 PR。[Claude Code](/timeline/2025/claude-code/)：本机仓库 + shell。副作用的默认对象变成「一份可测的工作副本」，而不是聊天附件。

## 2026：主体与供给

动作接口够用之后，问题是名义和就绪。[Cowork](/timeline/2026/cowork/) 把循环接到文件夹，主体仍是用户。[OpenClaw](/timeline/2026/openclaw/) 经自托管网关操作本机，权限面等于机器本身，暴露面进入主线。

[Claude Tag](/timeline/2026/claude-tag/) 在频道里跑与 Claude Code on the web 同类的短寿沙箱。[Agent identity](/timeline/2026/agent-identity/) 的命题是：异步多驾驶员下 `act as the user` 在授权、审计、回放上都不闭合，需要 Agent 主体、proxy 与 bundle。[SpecBox](/timeline/2026/specbox/) 把沙箱冷启动放进循环的关键路径：意图预热、预取、缓存。环境未就绪，Action 只能阻塞——这是执行层，不是模型层。

## 本条的边界

本条区分 Agent 与聊天。schema、沙箱、GUI、MCP、Skills、身份，都在扩大合法副作用集合或收紧执行边界。任一接口单独存在，只是 I/O。动作由核选择，嵌入循环，回执成为下一步条件。2023 解决可解析调用与代码隔离；2024–2025 解决开放工具总线和屏幕；2026 解决「以谁的名义、在是否已就绪的沙箱里」。Agent 在这些接口被同一运行时驱动之后成立，不在协议发布日成立。

[反馈后再决策](../feedback-then-decide/) 写回执如何成为下一条件，以及完成如何被独立测量。
