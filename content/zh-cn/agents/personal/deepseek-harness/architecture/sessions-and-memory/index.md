---
title: "会话日志与长期个人记忆分别保存什么"
weight: 20
date: "2026-10-22T00:00:00+08:00"
description: "会话日志与长期个人记忆分别保存什么"
materialType: "资料阅读与个人分析"
---

## 恢复对话还不等于了解一个人

Session 参考将追加式、有类型的事件日志作为会话事实来源，模型看到的历史由这些事件派生；存储后端与这一逻辑模型分离。我理解它首先解决的是恢复与解释一段任务过程。

跨会话个人记忆则有不同边界。官方给出第三方 Memory MCP 接入示例，但这些参考配置**默认未启用**。Harness 负责桥接和工具发现，并不替我下载记忆服务、初始化数据库、选 Embedding 或管理第三方账号。

所以我不会把“会话可恢复”写成“开箱即用的长期个人记忆”。若接入记忆服务，真正需要记录的是：谁提取事实、写到哪个命名空间、如何纠错、撤销和迁移，删除会话后是否仍保留。

后续对照 Hermes 的原生文件记忆与 Lindy 的工作区记忆时，我准备围绕同一条偏好做新增、冲突修正和删除实验，而不是只看模型能否复述聊天内容。

原始资料：[Sessions](https://deepseek-harness.github.io/deepseek-harness/en/reference/subsystems/session)；[Memory MCP](https://deepseek-harness.github.io/deepseek-harness/en/guide/mcp-memory)。资料日期与性质见 [资料索引](../../references/)，动态页面按本轮读取内容记录。
