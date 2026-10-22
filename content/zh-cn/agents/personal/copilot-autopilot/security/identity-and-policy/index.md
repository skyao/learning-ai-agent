---
title: "身份、租户与设备策略的不同控制范围"
weight: 10
date: "2026-10-22T00:00:00+08:00"
description: "身份、租户与设备策略的不同控制范围"
materialType: "资料阅读与个人分析"
---

## 不把租户当成完整权限说明

当前公告强调独立身份、权限和审计，我会继续问：任务实际使用代理自身身份、用户委派还是共享凭证？哪些动作可以自行执行，哪些需要用户确认？公开公告没有回答全部细节。

旧 Scout 的 Windows 管理文档提供具体设备策略，例如强制非只读动作审批、关闭工具或后台模式。它们与云端租户策略不是同一层，不应直接外推为新版云服务控制。

对自己的平台，身份应与请求者、批准者和工具凭证一起记录。策略也要在实际动作时有效；撤销权限以后，仅从界面隐藏功能并不足以证明排队中的工作已经停止。

原始资料：[Home、Code 与 Autopilot 英文公告](https://blogs.microsoft.com/blog/2026/09/25/introducing-the-new-copilot-with-home-code-and-autopilot/)；[Scout 管理策略](https://learn.microsoft.com/en-us/microsoft-scout/manage-group-policy)；[Scout 入门](https://learn.microsoft.com/en-us/microsoft-scout/get-started)。资料日期与性质见 [资料索引](../../references/)，动态页面按本轮读取内容记录。
