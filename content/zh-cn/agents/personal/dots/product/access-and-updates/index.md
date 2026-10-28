---
title: "Dots 开放状态与更新记录：保留时间、入口和证据差异"
linkTitle: "开放状态与近期更新"
weight: 110
date: 2026-10-21
description: >
  记录截至 2026-10-21 的准入条件、移动端变化和短信资料差异
materialType: "官方文档与更新线索"
---

主要文档：[Meet dots](https://learn.chatgpt.com/docs/dots)、[Get started with your dot](https://learn.chatgpt.com/docs/dots/getting-started)  
帮助中心：[英文入门指南](https://help.openai.com/en/articles/20001530-getting-started-with-your-dot)、[中文入门指南](https://help.openai.com/zh-hans-cn/articles/20001530-getting-started-with-your-dot)  
更新线索：[Dots received another round of updates](https://community.openai.com/t/dots-received-another-round-of-updates/1405896)，VeitB  
作者 / 机构：OpenAI 文档；社区帖单独标记  
原始日期：文档动态更新；社区帖为 2026-10-13；帮助中心仅显示相对更新时间  
阅读与整理：2026-10-21  
材料性质：官方文档与更新线索；本轮未做账号实测

----

## 当前记录

以下是资料状态，尚未通过我的账号核验。产品文档列出的 Pro 档位为 100、200、500，限制为 18 岁以上且不含 EEA、英国与瑞士；Business Premium 和 Enterprise 也在逐步开放，Enterprise 需管理员启用。文档所写的全球开放仍要结合支持地区和工作空间条件理解。[准入说明](https://learn.chatgpt.com/docs/dots)

| 时间或来源 | 本轮读到的变化 | 我保留的条件 |
| --- | --- | --- |
| 09-29 发布页 | 初始设置强调桌面应用和电脑网页 | 这是发布时的设置方式 |
| 10-13 社区更新帖 | 移动端创建、Codex 跟进和定时任务编辑 | 用作更新线索，不仅凭论坛域名认定发布者身份 |
| 10-21 阅读的入门文档 | 支持在移动 App 创建 | 当前文档已能交叉确认该能力；移动网页仍不支持 |

[社区帖](https://community.openai.com/t/dots-received-another-round-of-updates/1405896)还提到加载、通知和审批界面的修复。我只记录其涉及的方向，不据此认定所有客户端故障均已解决。

## 同一功能在文档中存在不同表述

短信是这轮遇到的一个具体差异：[Learn 的渠道页](https://learn.chatgpt.com/docs/dots/channels)仍写“即将推出”，而 [英文帮助中心](https://help.openai.com/en/articles/20001530-getting-started-with-your-dot)已描述美国 Pro 用户的有限测试，并排除 Business 和 Enterprise。中文帮助页也有对应说明，且标注为机器翻译。

我暂时把它记录为“帮助中心描述了有限测试，Learn 页面尚有不同表述”，实际以账号入口为待核验项，不把有限测试扩展为全面开放。Teams 的具体开放条件则对照 [企业治理笔记](../../security/enterprise-governance/)。

2026-10-28 的进展把这一差异推进了一步，我在 2026-10-28 15:33 EDT 的跟踪中读到：官方 @ChatGPT 当日发文“you can now text your dot”（经 Engadget 与 9to5Mac 转引，X 原帖我未直接打开），而帮助中心同一入门页的 Texting 章节我已直接全文读取——短信处于 beta，仅面向有限数量的美国 Pro 用户，Business 与 Enterprise 工作区不支持；需 iMessage 或 RCS，SMS 不支持；开通方式为 dot 个人资料选 Texting 并验证手机号；短信经第三方 Linq 中转，因此即使 iMessage/RCS 也不是端到端加密，Linq 交付后不保留消息内容、但可保留投递元数据，OpenAI 把短信存为 dot 对话的一部分，关闭短信只断开手机号、不删除已有对话与记忆。我把这记为“有限 beta 推出”，不是全量上线：官方 X 文案的“Safe, secure texting”不能单独引用，必须与帮助中心的非端到端加密限定并列；Apple Watch 可用一说只是 9to5Mac 的“理论上”推测，我未把它当作已支持功能。资料库文件见 `~/work/data/agents/openai-dots/raw/2026-10-28_official_feature_dot-texting-imessage-rcs.md`。

## 对后续跟踪的影响

我会按“资料日期、账号、客户端、功能”记录变化。一个账号能创建 dot，不能自动证明语音、短信、本地访问和所有插件都可用。发布文章也不能替代当前额度说明。

计量方面，我需要分别核对主对话、深度工作及委派任务。现有说明没有给出足以计算全部场景成本的统一数值，本轮不填估算额度。客户端回归的最新线索另放在 [外部观察](../../practice/external-observations/)。
