---
title: "待验证：可恢复的个人研究委托"
weight: 20
date: "2026-10-22T00:00:00+08:00"
description: "待验证：可恢复的个人研究委托"
materialType: "待执行的实践方案"
---

## 先建立一个可观察的小任务

本轮尚未部署。后续准备先固定发布标签、操作系统、Profile、模型端点与插件清单，只使用测试目录和模拟外部服务。

1. 委托整理一组测试资料，要求产出文档和来源清单；检查文件内容，不只看最终回复。
2. 中途停止 Host 后恢复，核查会话日志、模型历史和已有产物是否一致，记录是否重复执行工具。
3. 创建一次性与周期提醒，观察到期、入箱、模型执行、产物写入四个时刻；分别测试删除作业与已入队消息。
4. 创建有明确完成条件的 Goal，比较暂停、进程退出和重新激活，验证轮数限制与目标阶段。
5. 在未配置 Memory MCP 时开新会话，再接入测试记忆服务重复偏好纠错，核查事实由哪一层保留。
6. 对模拟写入触发审批，分别取消、拒绝与允许；撤销连接后检查后续请求和已有数据。

每轮保留版本、时间线、交付物、人工介入和费用。评估目标是理解状态恢复和委托边界，不把资料调研写成产品实测。

原始资料：[Sessions](https://deepseek-harness.github.io/deepseek-harness/en/reference/subsystems/session)；[Host-wide Schedule](https://deepseek-harness.github.io/deepseek-harness/en/reference/subsystems/schedule)；[Same-session goals](https://deepseek-harness.github.io/deepseek-harness/en/reference/subsystems/goal)；[Memory MCP](https://deepseek-harness.github.io/deepseek-harness/en/guide/mcp-memory)；[User Approval](https://deepseek-harness.github.io/deepseek-harness/en/reference/subsystems/approval)。资料日期与性质见 [资料索引](../../references/)，动态页面按本轮读取内容记录。
