---
title: "审批、容器与渠道授权的不同边界"
weight: 10
date: "2026-10-22T00:00:00+08:00"
description: "审批、容器与渠道授权的不同边界"
materialType: "资料阅读与个人分析"
---

## 沿实际动作理解防护

官方将用户允许列表、危险命令审批、执行后端和凭证过滤分层说明。审批存在 smart、manual、off 等配置；容器是否使用以及挂载哪些资源，也取决于实际后端。

我的结论是，能联系 Agent 与能授权它操作宿主不是同一层权限。Profile 的独立状态也不替代宿主隔离。为互不信任用户托管服务时，还要独立设计系统账号、文件和凭证边界，不能直接沿用个人单机假设。

我会先以无副作用命令检查批准对象、超时、取消和重试，再增加测试文件写入。没有执行安全复现前，只记录官方防护范围，不把“纵深防御”写成任何攻击都不会成功。

原始资料：[安全（官方中文）](https://hermes-agent.nousresearch.com/docs/zh-Hans/user-guide/security)；[Profiles（官方中文）](https://hermes-agent.nousresearch.com/docs/zh-Hans/user-guide/profiles)。资料日期与性质见 [资料索引](../../references/)，动态页面按本轮读取内容记录。
