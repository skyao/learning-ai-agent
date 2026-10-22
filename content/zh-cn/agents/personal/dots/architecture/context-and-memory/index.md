---
title: "Dots 上下文与记忆：共享来源、独立笔记和任务输入"
linkTitle: "上下文与记忆"
weight: 110
date: 2026-10-21
description: >
  理解 ChatGPT Memory、dot 自己的笔记、历史检索与任务上下文的关系
materialType: "官方文档笔记"
---

来源：[Tasks and memory — Context and memory](https://learn.chatgpt.com/docs/dots/tasks-and-memory)  
交叉阅读：[Dots privacy FAQ](https://help.openai.com/en/articles/20001529-dots-privacy-security-and-safety-faqs)  
作者 / 机构：OpenAI  
原始日期：动态文档，未见单独发布日期  
阅读与整理：2026-10-21  
材料性质：官方文档笔记；本轮未做账号实测

----

## 资料中明确区分的内容

Learn 区分当前对话上下文、相关 ChatGPT Memory 和 dot 自己保存的笔记；历史检索结果是任务上下文，不等于完整历史常驻。语音与后台任务使用的上下文选择也可能不同。[上下文说明](https://learn.chatgpt.com/docs/dots/tasks-and-memory)

FAQ 则说明，关闭 ChatGPT Memory 的共享不清除 dot 已收到的信息，目前也不提供对 dot 单条记忆的直接查看、修改或删除。[记忆控制说明](https://help.openai.com/en/articles/20001529-dots-privacy-security-and-safety-faqs)

## 我的理解：至少存在几种不同的连续性

我会分别分析个人信息在来源之间的共享、dot 内部积累的笔记，以及一次委派时的输入选择。它们都帮助代理延续工作，但更新和删除的语义未必相同。

例如，ChatGPT 中的偏好已经改变，dot 之前的笔记和运行中的任务是否会同步更新？主对话里新增一个限制，语音通话和后台任务何时看到？当前文档给出了区分这些层次的理由，还没有提供完整的一致性机制。

对自己的平台设计，我会考虑为记忆保留来源、有效范围和更新时间；为任务保留实际输入版本。这样可以解释“系统已经保存了新事实，任务却仍使用旧事实”的具体位置。这是设计思考，尚未确认 Dots 采用同样的元数据。

## 我还不能据此确认什么

这些产品文档没有给出足以确认存储引擎、向量索引、压缩算法或内部记忆文件布局的证据。我不会把它直接画成与 Muse 相同的实现。

通过对话纠正事实，与能够直接管理一条已存记忆，也需要分别验证。前者即使行为生效，仍不能证明旧副本已从各处清除。相关的数据生命周期放在 [单独笔记](../../security/data-lifecycle/)。

我准备通过“给出事实—开始任务—修改事实—检查主对话与子任务”的过程研究更新传播，方案见 [实践计划](../../practice/validation-plan/)。
