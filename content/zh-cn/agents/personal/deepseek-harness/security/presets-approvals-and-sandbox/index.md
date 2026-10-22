---
title: "权限预设、审批与沙箱的三层关系"
weight: 10
date: "2026-10-22T00:00:00+08:00"
description: "权限预设、审批与沙箱的三层关系"
materialType: "资料阅读与个人分析"
---

## 一个选择框背后的不同执行点

权限预设组合了文件系统沙箱模式与审批策略；选择器本身不执行隔离。中英文参考对这个分层一致，适合与 WorkBuddy 的客户端权限模式做结构对照。

审批文档把单次允许、拒绝、取消和无人可审批区分开，只有单次允许授予对应动作。尤其 `never` 的含义是从不发起人工询问、审批请求直接拒绝，不能仅凭名字解释成自动同意所有动作；最终是否触发审批还由调用方和当前沙箱决定。

沙箱参考的 `SandboxMode` 主要描述文件系统写入范围，网络和进程可见性不在这套词汇中。不同操作系统使用不同后端，Windows 还明确保留部分执行限制。

我据此把待验证项拆成：工具是否请求审批、审批结果怎样执行、进程最终能访问什么。对平台而言，这三项各自都有证据，比一个“安全模式已开启”的状态更可检查。

原始资料：[Permission Presets](https://deepseek-harness.github.io/deepseek-harness/en/reference/subsystems/permission-presets)；[权限预设](https://deepseek-harness.github.io/deepseek-harness/reference/subsystems/permission-presets)；[User Approval](https://deepseek-harness.github.io/deepseek-harness/en/reference/subsystems/approval)；[Sandboxing](https://deepseek-harness.github.io/deepseek-harness/en/reference/subsystems/sandbox)。资料日期与性质见 [资料索引](../../references/)，动态页面按本轮读取内容记录。
