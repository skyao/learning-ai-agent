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

2026-10-30 的媒体分析给短信通道补了一层存续风险，我只记为分析层、不列入官方事实：TechTimes 称 Apple 从未向第三方开放 iMessage API，Linq 自建的基础设施层把消息路由成收件人 iPhone 上的蓝色气泡、未获 Apple 授权，技术路径与 2023 年 12 月被 Apple 封堵的 Beeper Mini 同类，因此该通道的长期可用性取决于 Linq 能否维持 Apple 未授予的接入；Linq 自述自身读不到消息内容、P95 出站延迟低于 120 毫秒、可用性 99.95%、持有 SOC 2 Type II 认证，均未经独立审计核实。RCS 一侧为开放标准、不携带同类未授权风险，但同样流经 Linq、E2EE 主张同样未经审计，不得直接读作端到端加密。本篇价格段整体滞后（仍写 Pro 200 自 10 月 30 日起由 20 倍降至 10 倍），与 10 月 29 日取消公告直接冲突，价格与用量段一律不得引用。资料库文件见 `~/work/data/agents/openai-dots/raw/2026-10-30_media_analysis_techtimes-sms-linq-apple-risk.md`。

2026-10-30 的第二篇媒体分析给短信通道补了一层机制解释，我同样只记为分析层、不列入官方事实：TechTimes 称，标准点对点消息要求真人从已注册设备发起每次对话，而 A2P（Application-to-Person）消息允许应用或企业经聚合商向个人号码发起外发，银行提醒、验证码、物流通知均属此类；OpenAI 委托 Linq 提供 dot 所用的发送号码并代为向运营商路由，dot 能主动推送任务进展正是 A2P 路由的直接后果，而非标准 iMessage 点对点能力。加密待遇上，OpenAI 未公开说明经 Linq 路由的消息是否带 iMessage 端到端加密、抑或实际按标准 SMS 到达，这取决于发送号码是否注册为 iMessage for Business 参与方，该中间环节未证实，我不写成已确认走 SMS 或已确认走加密 iMessage；A2P RCS 用传输层安全而非个人对话的端到端加密，商业消息被有意排除在端到端加密规范之外，RCS 的开放标准属性不得直接读作 dot 短信通道端到端加密。标题与正文必须区分：标题“Linq Sees All Messages”正文实为 Linq 基础设施处理途中的每条消息，未提供读取、存储或使用内容的证据，与前一篇已记的 Linq“读不到内容”自述（未经审计）均未证实对方，我只写“消息经 Linq 中转、内容读取与留存未证实”，不任选一端当作事实；Apple Watch 一节作者自注未获官方确认，不新增事实。本篇价格段一律不得引用（“额外 dot 另行收费”无官方价格佐证，500 美元档用量框架与 10 月 29 日翻倍公告不一致）。资料库文件见 `~/work/data/agents/openai-dots/raw/2026-10-30_media_analysis_techtimes-sms-a2p-mechanism.md`。
