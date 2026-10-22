---
title: "数据与运维：备份的不只是聊天"
weight: 20
date: "2026-10-22T00:00:00+08:00"
description: "数据与运维：备份的不只是聊天"
materialType: "资料阅读与个人分析"
---

## 我希望恢复完整的工作状态

Hermes 的长期状态分布在 Profile、记忆、技能、会话和计划等对象中。备份聊天文本只能保留其中一部分，恢复后还需要检查凭证、工具依赖和投递目标。

安全文档对本地终端、容器、代码执行和 MCP 的环境变量处理有不同规则，显式透传也会改变结果。我会按实际调用路径核对秘密是否进入子进程、日志或第三方记忆，不从默认过滤推定所有自定义配置都同样安全。

我的运维验证会使用测试目录，保留版本和配置清单，恢复到独立位置，再检查记忆、计划和外部对象。程序重新运行只是第一步；如果恢复后重复发送已交付内容，业务状态仍然没有恢复一致。

原始资料：[安全（官方中文）](https://hermes-agent.nousresearch.com/docs/zh-Hans/user-guide/security)；[Profiles（官方中文）](https://hermes-agent.nousresearch.com/docs/zh-Hans/user-guide/profiles)；[v0.22.3](https://github.com/NousResearch/hermes-agent/releases/tag/v0.22.3)。资料日期与性质见 [资料索引](../../references/)，动态页面按本轮读取内容记录。
