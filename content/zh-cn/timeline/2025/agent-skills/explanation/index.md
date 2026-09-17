---
title: "Agent Skills 讲解"
linkTitle: "讲解"
weight: 20
date: 2026-09-15
description: >
  晚绑定专长包。通用核靠目录变专用，不靠再训练或再写一个 Agent。不是 RPC。
---

## 当时解决了什么问题

窗口再长，也不该把公司全部流程塞进系统提示。自定义 GPT、长 prompt、私有 fine-tune，都难分享、难版本管理。Skills 把「何时用、怎么做」做成可检入 git 的目录，运行时只在相关时加载。渐进披露是针对上下文税的工程，不是新的推理算法。通用核不变，动作清单与领域步骤晚绑定。

按定义 Skills **不是** Agent。它是给已经在转的循环配备的知识与脚本包。MCP 接工具，Skills 接流程，A2A 接其他 Agent——三层不要混。开放标准是 12 月的加码；10 月已经够改变「怎么给运行时喂领域知识」。

## 对后续 LLM 与 Agent 的影响

2026 年 Tag 把 skills repo 做成组织级 bundle：管理员按频道配专长，而不是每人在 claude.ai 上装自己的。这与 Access bundle 同一方向：装载从个人配置上收到组织 scope。[调研方法](../../../overview/research/) 里的 Protocol 在 2025 年终于能用产品对上号：接线、装载、对端 Agent，都不是环本身。
