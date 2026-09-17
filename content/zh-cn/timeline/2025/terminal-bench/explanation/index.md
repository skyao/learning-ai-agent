---
title: "Terminal-Bench 讲解"
linkTitle: "讲解"
weight: 20
date: 2026-09-15
description: >
  完成谓词是最终环境状态。终端运行时不能只靠「补丁过单测」这把尺子。
---

## 当时解决了什么问题

[Claude Code](../../claude-code/) 和 Codex CLI 的工作方式是：在 shell 里跑命令、看输出、再决定。SWE-bench 测的是「对着 GitHub issue 改到测试绿」。真实失败常发生在：依赖没装、路径错、服务没起来、指令含糊。Terminal-Bench 把考场换成有状态的 CLI，判定看最终机器，不看模型有没有写出像样的 bash。

按定义跑在这张考卷上的系统 **可以是** Agent。基准本身不是 Agent。谓词类型不同：仓库绿 vs 环境状态。生成像那么回事的命令 ≠ 环境真的好了。

## 对后续 LLM 与 Agent 的影响

编码线从此至少两把尺子：Verified / Pro 管「修仓库」，Terminal-Bench 管「会不会在壳里把事做完」。9 月 [SWE-bench Pro](../../swe-bench-pro/) 再把仓库题加硬。两套分数不可互换，更不可与 Verified 七成并排吹。没有这张表，终端运行时只能借用 issue→patch 的叙事。
