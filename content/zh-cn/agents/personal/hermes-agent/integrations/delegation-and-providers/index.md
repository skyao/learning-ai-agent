---
title: "委派与外部记忆：新上下文背后的共享关系"
weight: 20
date: "2026-10-22T00:00:00+08:00"
description: "委派与外部记忆：新上下文背后的共享关系"
materialType: "资料阅读与个人分析"
---

## 子任务边界怎样理解

委派会建立新对话和终端会话，父任务主要接收结果摘要。官方还区分完成事件被队列接收、后续模型轮次与最终对外回复；后台进程也有所属 Agent，子任务结束不等于进程自动交给父任务。

这给我的启发是，任务交接应包含证据与资源归属。单独返回一个进程号或“完成”文本，不足以确认工作已由另一方可靠接管。

外部 Memory Provider 则给内建记忆增加检索、回写等路径，当前文档限定同时启用一个外部提供方。具体数据可能交给额外服务，我会记录实际发送范围、配置与删除关系。方法、历史和用户画像不应因为都能存储就被视为同一类状态。

原始资料：[Subagent Delegation](https://hermes-agent.nousresearch.com/docs/user-guide/features/delegation)；[Memory Providers](https://hermes-agent.nousresearch.com/docs/user-guide/features/memory-providers)。资料日期与性质见 [资料索引](../../references/)，动态页面按本轮读取内容记录。
