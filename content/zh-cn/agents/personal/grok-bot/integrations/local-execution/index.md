---
title: "本地命令与出口路由：两种设备参与方式"
weight: 40
date: "2026-10-21"
description: "本地命令与出口路由：两种设备参与方式"
materialType: "官方资料阅读与个人分析"
---

原始资料：[Approvals, security, and privacy](https://docs.x.ai/grok-bot/approvals-security-and-privacy)、[Settings and notifications](https://docs.x.ai/grok-bot/settings-and-notifications)。阅读：**2026-10-21**。

设置把 Execution on Local Computer 与 Route traffic through this computer 分开。前者允许在当前桌面执行命令，默认逐命令审批；后者让云端电脑经桌面网络出站。配置还可能受团队策略限制。[设置说明](https://docs.x.ai/grok-bot/settings-and-notifications)

## 我先拆清执行位置

| 情形 | 我的理解 |
| --- | --- |
| 云端执行，本地仅查看 | 本地客户端不是业务执行环境 |
| 云端请求经桌面网络 | 改变网络可达性和出口，不代表全部计算迁移到本地 |
| 本地执行命令 | 直接涉及当前机器的文件、进程与权限 |

这三种情况会有不同的在线依赖。测试时我会记录哪个设备执行了哪个动作，不把“云端继续工作”延伸成“本地断开也能继续操作本地文件”。

## 审批要与实际命令对应

对自己的平台，确认卡需要能对应最终执行的命令、目录和目标设备。用户批准在测试目录处理文档，不应被解释成可在另一台机器执行相同文本。

我准备在可丢弃目录里测试读取、写入与长任务，在授权前后断开客户端，观察请求是否真正到达本地，以及重连后是否重复启动。

本轮没有运行 Grok Bot 客户端，也没有改变当前开发机的任何设备或网络授权。
