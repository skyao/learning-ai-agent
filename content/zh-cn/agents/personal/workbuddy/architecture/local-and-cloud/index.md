---
title: "本地、远程与云端：先问任务在哪里执行"
weight: 10
date: "2026-10-22T00:00:00+08:00"
description: "本地、远程与云端：先问任务在哪里执行"
materialType: "资料阅读与个人分析"
---

## 入口与执行器分别看

助理文档描述通过手机 IM 给电脑发任务，要求电脑开机、客户端运行和网络可用。定时任务文档另外区分本地、项目和云端来源，云端标识任务在服务端沙箱执行，无需电脑在线。

我不会把“手机能用”直接写成“云端常驻”。相同账号下的本机文件、云端工作空间和登录态也不能默认互通。

Managed Agents 提供另一套托管开发与发布对象，仍有开放条件。对我的平台工作，任务需要明确绑定执行环境，设备断线时保留目标与阻塞原因；更换执行器还要检查输入、权限和已完成副作用，不能只是重发提示。

原始资料：[助理：远程任务](https://www.workbuddy.cn/docs/workbuddy/From-Beginner-to-Expert-Guide/Function-Description/Assistant)；[定时任务](https://www.workbuddy.cn/docs/workbuddy/From-Beginner-to-Expert-Guide/Function-Description/Automation-Guide)；[Managed Agents 使用说明](https://cloud.tencent.com/document/product/1831/138968)。资料日期与性质见 [资料索引](../../references/)，动态页面按本轮读取内容记录。
