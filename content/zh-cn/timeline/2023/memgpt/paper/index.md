---
title: "MemGPT（论文）"
linkTitle: "论文"
weight: 10
date: 2026-09-15
description: >
  按原文结构转述 Packer 等 2023：把 LLM 上下文当成要分页的内存。
---

Charles Packer, Sarah Wooders, Kevin Lin, Vivian Fang, Shishir G. Patil, Ion Stoica, Joseph E. Gonzalez. *MemGPT: Towards LLMs as Operating Systems*。UC Berkeley。arXiv 2023-10。[arXiv:2310.08560](https://arxiv.org/abs/2310.08560)。项目后来的产品化名称不回填本页。

中文译本：[宝玉](https://baoyu.io/translations/ai-paper/2310.08560-memgpt-towards-llms-as-operating-systems)、[CSDN](https://nopsled.blog.csdn.net/article/details/134152957)。

---

## 摘要

LLM 受固定上下文窗口限制，长对话和长文档分析都会吃亏。作者提出 **virtual context management**：借鉴传统操作系统用分页在物理内存和磁盘之间制造「更大内存」的假象。**MemGPT** 智能管理多层存储，让有限窗口里出现可扩展的有效上下文。评测两个窗口特别不够用的领域：文档分析（远超窗口的大文档）、多会话聊天（要记住、反思、随长期互动演化）。代码与数据发布在文中给出的研究站点。

## 系统

主上下文（类比 RAM）即提示 token，推理时模型直接可见；外部上下文（类比磁盘）必须经函数调用搬进来才可见。主上下文三段：只读的系统指令、可经函数读写的 working context、FIFO 消息队列（含用户/系统消息与函数输入输出；队首是被驱逐消息的递归摘要）。

队列管理器在窗口到达告警阈值（文中举例约 70%）时插入 memory pressure 警告，让模型把重要信息写入 working context 或 archival 存储；到达冲刷阈值则驱逐部分消息并更新摘要。被驱逐的消息仍在 recall 存储里，可用函数再取回。

模型输出被解析为函数调用。可用 `request_heartbeat=true` 在一次用户回合里链式多步检索。事件触发推理：用户消息、系统警告、定时中断等。记忆编辑与检索是**自导向**的：由模型决定何时换页，而不是宿主固定截断。

## 评测（文中报告）

多会话聊天基于扩展的 Multi-Session Chat。Deep memory retrieval：MemGPT 相对同一底层模型的固定窗口基线明显更高（例如 GPT-4 准确率从约 32.1% 到约 92.5%；GPT-3.5 从约 38.7% 到约 66.9%）。文档 QA：固定窗口受检索条数与截断伤害，MemGPT 可对 archival 多次分页查询。嵌套键值检索：需要多跳查找时，无 MemGPT 的 GPT-3.5/GPT-4 在若干嵌套层后掉到 0%；MemGPT+GPT-4 随嵌套层数保持稳定。实现依赖模型的函数调用能力：GPT-3.5 上明显更弱。
