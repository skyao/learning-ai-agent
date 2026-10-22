---
title: "Cue 的消息渠道与 Skills：共用底座之外的配置边界"
linkTitle: "渠道与 Skills"
weight: 100
date: 2026-10-21
description: >
  阅读多消息平台与 Skills 帮助页，研究同一代理跨入口运行时的身份和配置
materialType: "官方文档笔记"
---

来源：[Can I connect multiple messaging Agents at once in Cue?](https://help.manus.im/en/articles/14178640-can-i-connect-multiple-messaging-agents-at-once-in-cue)、[How to Share and Use Skills in Manus? — Using Skills in Cue](https://help.manus.im/en/articles/14753565-how-to-share-and-use-skills-in-manus)  
作者 / 机构：Manus Help Center  
原始日期 / 版本：动态帮助页，仅显示相对更新时间  
阅读与整理：2026-10-21  
材料性质：官方文档笔记；本轮未做账号实测

----

## 资料要点

帮助中心列出同一 Cue 代理可连接 iMessage、Telegram、LINE 和 Slack，并可同时启用多个入口。[消息渠道说明](https://help.manus.im/en/articles/14178640-can-i-connect-multiple-messaging-agents-at-once-in-cue)

另一篇文档明确，Cue 与 Manus 的 Skills 配置分开，Manus 中创建或导入的技能不会自动进入 Cue，需要单独配置。[Skills 边界](https://help.manus.im/en/articles/14753565-how-to-share-and-use-skills-in-manus)

## 我的理解：入口共享不等于授权共享

多个消息入口联系同一代理，首先解决的是可达性。哪些发送者可以改变任务，群组中的信息可以进入哪些职责，回复应当发给谁，仍需要明确的语义。

我想用同一代理在私聊和群聊中收到不同要求的情况来研究：优先级怎样判断，私人上下文怎样约束输出范围，重复指令是否被识别为同一件事。当前帮助页没有说明这些边界的完整实现。

## 技能需要与运行条件一起迁移

Skills 不自动互通，是一个具体的产品边界。对自己的开发工作，我还会继续核对技能依赖、运行环境、工具权限和版本。复制了说明文件，不代表所需凭据、命令和产物路径也已准备好。

因此，我希望后续记录某项技能在哪里配置、由哪个代理使用、需要哪些资源，以及执行结果是否可复现。单独配置并不必然代表隔离程度更强或更弱，需要看实际作用范围。

本轮没有连接消息平台或导入技能。电话与邮箱的资源生命周期另见 [通信资源笔记](../phone-and-email/)。
