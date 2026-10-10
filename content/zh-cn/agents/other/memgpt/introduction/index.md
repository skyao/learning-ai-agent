---
title: "介绍"
linkTitle: "介绍"
weight: 10
date: 2025-11-13
description: >
  memgpt 介绍
---

memgpt 现在改名 Letta.

----

## memgpt

https://research.memgpt.ai/

项目的愿景: 

Towards LLMs as Operating Systems

> 迈向将 LLMs 作为操作系统

项目目标:

Teach LLMs to manage their own memory for unbounded context!

> 教会 LLMs 管理自己的内存以实现无界上下文！

![](images/memgpt-system-diagram.png)

### 概述

- LLMs 越来越多地被用于永久聊天

- 有限的上下文长度使得永久聊天具有挑战性

- MemGPT 管理一个虚拟上下文（受操作系统虚拟内存启发），以创建无界的 LLM 上下文

- 使用 MemGPT，我们证明了 LLM 可以被教导管理自己的内存！

### 摘要

大型语言模型（LLMs）革新了人工智能，但其受限于有限的上下文窗口，这阻碍了它们在长对话和文档分析等任务中的应用。

为了能够在有限的上下文窗口之外使用上下文，我们提出了虚拟上下文管理技术，该技术借鉴了传统操作系统中的分层内存系统，通过在物理内存和磁盘之间进行分页来提供扩展虚拟内存的错觉。

利用这项技术，我们引入了 MemGPT（MemoryGPT），这是一个智能管理不同存储层级的系统，旨在有效地在 LLM 有限的上下文窗口内提供扩展上下文。

我们在两个领域评估了我们的受操作系统启发的设计，在这些领域现代 LLM 有限的上下文窗口严重影响了它们的性能：

1. 文档分析，MemGPT 能够分析远超底层 LLM 上下文窗口的大型文档，

2. 多会话聊天，MemGPT 能够创建能够通过长期与用户互动而记忆、反思和动态演变的对话代理。我们在 https://memgpt.ai 上发布了我们的实验代码和数据。

## Letta

https://github.com/letta-ai/letta

https://docs.letta.com/

> Letta is the platform for building stateful agents: open AI with advanced memory that can learn and self-improve over time.
> 
> Letta 是构建有状态代理的平台：具有高级记忆的开放 AI，可以随着时间的推移学习和自我改进。

### Letta 中的核心概念

Letta 是由 MemGPT 的创造者开发的，MemGPT 是一篇介绍了"LLM 操作系统"概念以进行内存管理的研究论文。Letta 中设计有状态代理的核心概念遵循 MemGPT LLM OS 原则：

1. 内存层级：代理具有自我编辑的内存，分为上下文内存和上下文外内存

2. 内存块：代理的上下文内存由持久可编辑的内存块组成

3. 代理式上下文工程：代理通过使用工具来编辑、删除或搜索记忆来控制上下文窗口

4. 持续自我改进的代理：每个"代理"都是一个单一实体，具有持续的（无限的）消息历史


## 相关资料

### 论文

MemGPT: Towards LLMs as Operating Systems

https://arxiv.org/pdf/2310.08560