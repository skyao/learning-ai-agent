---
title: "Dots 的消息渠道与插件：联系、读取和行动分别授权"
linkTitle: "渠道与插件"
weight: 110
date: 2026-10-21
description: >
  从多入口与插件文档理解代理身份、信息接收者及跨渠道权限边界
materialType: "官方文档笔记"
---

来源：[Message your dot](https://learn.chatgpt.com/docs/dots/channels)  
补充：[Manage dots permissions and capabilities](https://learn.chatgpt.com/docs/enterprise/dots-admin-guide)  
作者 / 机构：OpenAI  
原始日期：动态文档，未见单独发布日期  
阅读与整理：2026-10-21  
材料性质：官方文档笔记；本轮未做账号实测

----

## 资料要点

ChatGPT、Slack 和 Teams 可联系同一个 dot，消息仍留在各自渠道；跨渠道使用上下文不等于可以向新受众披露。添加消息入口也不自动授予插件或电脑访问。语音通话结束后，已委托的工作仍可继续。[渠道文档](https://learn.chatgpt.com/docs/dots/channels)

企业文档进一步区分用户的 Slack 插件连接和 dot 自身的 Slack 身份；移除后者不等于移除前者。Teams 当前标为邀请制 alpha。[企业渠道说明](https://learn.chatgpt.com/docs/enterprise/dots-admin-guide)

## 我关注的三条关系

从平台角度，我会分别看待“谁可以指挥代理”“代理使用哪个账号访问来源”和“结果可以发给谁”。它们在交互上可能都表现为一次连接，授权含义却不同。

例如，我在私人对话中给出的截止日期可以帮助代理理解项目，但其中的私人原因是否能进入团队频道，需要另行判断。群聊中的他人消息也可能是任务材料，不能自动变成能扩大权限的指令。

我因此想追踪输入主体、来源渠道与输出受众，而不只保存文本内容。未来研究多 Agent 协作时，同样需要明确哪个主体可以改变目标、哪个主体只提供证据。这是我的设计框架。

## 插件接入还需要看运行环境

[电脑与应用资料](../computers-and-sessions/)提供另一条线索：服务端插件、本地技能和浏览器各有运行条件。我在比较工具生态时，会记录具体动作、账号、环境和审批，避免用目录中的数量代替任务覆盖范围。

短信资料存在阶段差异，集中记录在 [开放状态与更新](../../product/access-and-updates/)。本轮没有实际连接 Slack、Teams、短信或外部插件。
