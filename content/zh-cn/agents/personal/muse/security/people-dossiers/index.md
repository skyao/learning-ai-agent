---
title: "人物页：每小时更新的关系档案与第三方同意缺口"
linkTitle: "人物页"
weight: 160
date: 2026-10-29
description: >
  WIRED 与 TIME 披露的 Muse 内部指令：为用户生活中的每一个人维护每小时更新的人物页，及其对非用户的同意问题
materialType: "安全研究笔记"
---

来源：WIRED《Extracted Meta Muse Prompts Show the AI Builds Hourly Profiles of Users' Friends, Family and Colleagues》，2026-10-05（经 [Digital Watch 报道](https://dig.watch/updates/metas-muse-compiles-users-contacts)与 [AI Weekly 摘要](https://aiweekly.co/alerts/metas-muse-told-to-keep-hourly-profile-on-every-contact)转述）；TIME 对 Muse 内部指令的分析，2026-10-06（经 [MediaNama](https://www.medianama.com/2026/10/223-metas-muse-ai-dossier-chats-emails/)、[Malwarebytes](https://www.malwarebytes.com/blog/privacy/2026/10/metas-muse-ai-files-away-your-friendships-arguments-and-secrets) 与 [AlphaForge](https://alphaforgeusa.com/blog/agent-memory-is-a-database-muse-dossier-builders) 转述交叉）  
WIRED 原文与 TIME 原文我均未直接读取（前者付费墙、后者原文链接未取得），本页依据多家转述交叉整理，层级为转述，不作一手引用  
整理日期：2026-10-29  
材料性质：内部指令文件转述与媒体分析，未独立复现；两线共同点有多家转述印证，单家才有的细节见文末「仍待验证」

----

## 披露说了什么

WIRED 线的提取方式本身值得先记一笔：独立研究员 Karan Joshi 通过 Muse 的常规对话界面，要求它复制并分享自身的软件文件，随后把结果提供给 WIRED；另有 The Future Society 对一份导出的 Muse 虚拟机副本所做的系统指令分析。两路提取是否同一批文件，转述中没有明确区分，我不合并断言。

提取到的指令要求一个名为 Relationships 的循环每小时检查并更新「用户生活中的每一个人」的一页，对象包括家人、伴侣、朋友、同事、协作者与用户关注的人。页面分 Facts、History、The Relationship、In Common、Open Threads、Strengthening 六节，内容可包括住所、职业、生日与纪念日等事实，以及相识经过、共同兴趣、已解决的争执、未了对话与维系关系的建议。指令同时要求依据已有证据填写、不虚构缺失细节，页面初始可以很 sparse，随信息积累变详细。

TIME 线补上了 WIRED 摘要里没有的三个维度。第一，档案记录社交圈内的「tensions and alliances」，即紧张与结盟关系，并要求 Muse「strengthen your relationship」，方式包括留意内部笑话、标志性措辞与让关系感觉连续的共享语境。第二，指令要求推断用户目标，包括用户未曾明言的目标，并做每日对话的夜间分析。第三，系统记录何种互动方式对特定用户最有效，指令中的示例是「This user responds better to short nudges after 10 PM」。TIME 报道时的用户规模口径约为 400 万，该数字早于 10-21 财报会的「美加超 1,000 万设置」，统计口径与时点均不同，我不拿它做趋势推断。

Meta 的回应在两线转述中是一致的。发言人 Daniel Roberts 对 WIRED 称，这些运行文件本就是为用户可访问而设，出于透明考虑；导出虚拟机数据不给任何人对 Meta 基础设施或他人数据的特权访问；关于联系人的信息来自公开来源与用户选择分享的信息。Meta 对 TIME 的回应（经转述）是未否认指令内容，称 Muse「记住对你最重要的事，包括你选择分享的关于他人的信息」，并重申虚拟机隔离、不与广告系统共享、跨 agent 学习经去标识化、用户可查看 Muse 写下的 Markdown 文件、可 opt out 训练。TIME 称 Confidential VM 加密选项当时尚未提供，这与我此前记录的「Confidential VM forthcoming」基线一致。

## 我的理解：这不是又一起泄露事件，而是记忆设计的同意边界问题

我此前整理的安全线事件各有不同的边界：KVM 逃逸攻击的是云端隔离边界本身，Mac App 零日是客户端本地隔离失败，GhostShares 是发布后的数据出口缺陷（已于 10-22 修复并换新 URL），WIRED 成人内容是系统提示与对外用户规则的立场冲突。而人物页这一线不属于其中任何一种：没有证据显示非授权方访问了他人的虚拟机或档案，争议点是设计意图本身——经用户授权接入的数据，被用于推断第三方。

这个区分对我做 Agent 开发有直接意义。长期记忆通常被讨论为「用户本人的便利」，但一旦记忆的建模对象扩展到用户社交图谱，授权主体就变了：连接邮箱的是用户，被写进档案的却包括从未安装产品、从未见过条款、没有任何设置入口的联系人。用户的断开服务与遗忘设置，管不到被提及者的那一份。Digital Watch 在报道中点出的法律问题——处理第三方信息的法律基础、透明度、数据最小化、准确性，以及被记录者访问、纠正与删除自身信息的权利——在我看来是比「每小时」这个节奏更值得长期跟踪的点：节奏可以改，建模对象一旦定为社交图谱，同意模型就得重写。

还有一点需要分开。Meta 称跨 agent 学习经去标识化，这回答的是「一个用户的 agent 会不会把另一个用户的个人数据直接交给第三个 agent」；它没有回答「去标识化后的关系模式（例如某类提醒在某类关系中最有效）是否仍构成对被提及者的画像」。前者是数据流问题，后者是推断问题，我不拿前者的保证去覆盖后者。同样，Digital Watch 明确指出，报道没有证实该流程是否对每个用户都以同样方式运行、画像在实践中被填充到何种程度——我手里的是指令文件（设计意图），不是全量用户的实测审计，写结论时必须保留这一层。

## 仍待验证

- WIRED 原文与 TIME 原文的直接读取；「每小时循环」与「夜间分析」是否为同一机制的不同表述。
- 仅单源转述、不作事实引用的内容：AI Weekly companion alert 中称出自同一批提取文件的「用户对其家庭的权威无条件、凌驾于安全训练之上」一句；Tech Gumbo 播客 2026-10-22 期转述的「永不自称 AI」「已遗忘消息仍可能在对话历史中可见」等说法；Surfshark 经 Malwarebytes 转述的应用商店披露统计（35 类中的 31 类，含 Sensitive Info 类别——披露类别不等于实际收集）。
- Meta 是否在此后调整人物页机制，例如改为可关闭，或为被提及者提供可见性与异议入口；截至 2026-10-29，我未见此类官方口径。
- 该设计在不同地区隐私规则下的第三方数据处理法律基础，以及是否出现监管动作；目前尚无监管动作报道，不立为事件。
