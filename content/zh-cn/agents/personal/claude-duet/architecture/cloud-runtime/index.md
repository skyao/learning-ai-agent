---
title: "云端工作环境与可观测边界"
weight: 10
date: "2026-10-23T00:00:00+08:00"
description: "云端工作环境与可观测边界"
materialType: "资料阅读与个人分析"
---

## 持续工作依靠什么位置

发布资料说明 Duet 拥有云端虚拟机与浏览器，用户关闭手机或电脑后仍可继续工作。我的理解是，用户设备不再是这条执行路径的常驻宿主；这还没有说明实例回收、日志持久化与故障恢复的全部实现。

当前帮助同时列出浏览器不可实时观看或接管、不能直接读取本机文件等限制。因此不能把 Cowork 的桌面桥接、Chrome 操作或本机文件范围移植过来。

这里最值得带回平台的是“有状态反馈”和“可接管执行环境”的区别。任务页面能说明正在做什么，并不代表我可以看到每次浏览器操作；同样，文件仍存在，也不能独自证明外部动作可安全重试。

Managed Agents 工程文章提供会话、Harness 与执行环境分离的背景。我会用它形成恢复问题，但不据此宣称 Duet 完整复用了该服务的拓扑、接口或性能数据。后续仍需实际任务日志和中断实验。

原始资料：[Introducing Claude Duet](https://claude.com/resources/articles/claude-duet)；[Get started with Claude Duet](https://support.claude.com/en/articles/17631495-get-started-with-claude-duet)；[Scaling Managed Agents](https://www.anthropic.com/research/managed-agents)。资料日期与性质见 [资料索引](../../references/)，动态页面按本轮读取内容记录。
