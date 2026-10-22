---
title: "浏览器与电脑操作：同一任务的不同动作通道"
weight: 30
date: "2026-10-21"
description: "浏览器与电脑操作：同一任务的不同动作通道"
materialType: "官方资料阅读与个人分析"
---

## 三条路径分别记录

| 路径 | 当前官方说明中值得关注的条件 |
| --- | --- |
| Desktop 内建浏览器 | 独立于个人日常浏览器，可保留自身登录态；云端任务使用时需要 Desktop 在线 |
| Claude in Chrome | 使用已有 Chrome 与扩展路径，涉及个人浏览器状态 |
| Computer use | 对桌面应用进行点击、输入和屏幕导航；当前为 Pro / Max Beta，非 Team / Enterprise 通用能力 |

内建浏览器可按站点导入部分浏览器的 cookies，不能简单理解为“没有任何既有登录信息”。我会同时检查导入范围、会话留存和退出登录是否生效。

## 在线要求存在路径差异

内建浏览器文档特别说明：Web / Mobile 调用内建浏览器需要 Desktop 开启并在线；走 Chrome 扩展则要求电脑连接，但不一定要求 Desktop 应用窗口或进程保持开启。其他多端文档使用了更概括的表述，我以具体路径保留条件，不合并成一个“浏览器都需要 Desktop 开启”的规则。

如果偏好的浏览器不可用，系统可能提示后切换；明确指定浏览器的任务有进一步确认要求。这个细节适合验证，因为切换浏览器也可能切换账号、cookies 和可见数据。

## 屏幕操作不能继承代码沙箱的保证

Computer use 文档明确，屏幕与用户应用之间没有对应的代码沙箱隔离。它需要电脑保持唤醒并运行 Desktop。应用授权、屏幕可见信息和跨应用跳转都需要单独检查。

我的平台设计关注点是：任务执行器应保留通道身份。通过连接器更新记录、通过浏览器点按钮、通过屏幕输入同一条信息，产生的可审计证据、权限粒度和恢复方式可能完全不同。

原始资料：[内建浏览器](https://support.claude.com/en/articles/16607400-use-the-built-in-browser-in-claude-cowork)；[Computer use](https://support.claude.com/en/articles/14128542-let-claude-use-your-computer-in-cowork)。动态帮助按 2026-10-21 读取内容记录，未进行账号实测。
