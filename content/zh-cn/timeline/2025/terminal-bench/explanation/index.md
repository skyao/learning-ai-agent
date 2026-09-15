---
title: "Terminal-Bench 讲解"
linkTitle: "讲解"
weight: 20
date: 2026-09-15
description: >
  终端运行时要在真实 shell 里收工，不能只靠「补丁过单测」。
---

## 当时解决了什么问题

[Claude Code](../../claude-code/) 和 [Codex CLI](../../openai-codex/) 的工作方式是：在终端里跑命令、看输出、再决定。SWE-bench 测的是「对着 GitHub issue 改到测试绿」。很多真实失败发生在：环境没装好、路径错了、服务没起来、指令含糊。Terminal-Bench 把考场换成有状态的 CLI，判定看最终机器，不看模型有没有写出像样的 bash。

按 AI Agent 定义，跑在这张考卷上的系统 **可以是** Agent。基准本身不是 Agent。

## 对后续 LLM 与 Agent 的影响

编码线从此至少两把尺子：Verified / Pro 管「修仓库」，Terminal-Bench 管「会不会在壳里把事做完」。9 月 [SWE-bench Pro](../../swe-bench-pro/) 再把仓库题加硬。分数继续被刷，但「生成像那么回事的命令 ≠ 环境真的好了」被写进公开评测，而不是只存在于用户吐槽。
