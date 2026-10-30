---
title: "Muse 资料索引与学习路线"
linkTitle: "资料索引"
weight: 70
date: 2026-10-21
description: >
  Muse 六个学习主题的资料索引、阅读路线、更新记录与待实测问题
aliases:
  - /agents/personal/muse/research/
  - /agents/personal/muse/updates/
---

Muse 是我深入调研的第一个 Personal Agent 案例。本页保留阅读线索、来源和未解决的问题，便于后续回看、补充和比较。

**本轮资料检索截至 2026-10-21；持续跟踪补充至 2026-10-29。** 资料按学习主题归类，来源、语言和时间保留在文章信息中；本页集中提供来源索引与按时间阅读的入口。

## 1. 按主题查找资料

| 学习主题 | 主要材料 |
| --- | --- |
| [产品与设计](../product/) | 发布介绍、设计理念、中文产品讨论、Connect 更新、小企业场景 |
| [架构与运行机制](../architecture/) | 智能体循环、专用 VM、记忆、上下文与后台工作的架构分析 |
| [模型与评估](../models/) | Wonder、Spark Open、Wonder 模型卡、Realtime Avatar |
| [工具与生态](../integrations/) | Connector 截图、Windows 接入计划、Gadget SDK |
| [安全与权限](../security/) | 官方安全设计、Sentinel、人工接管、GhostShares、上线前 KVM 逃逸与人物页披露 |
| [实践与评测](../practice/) | 原创个人分析、第三方评测、外部服务访问限制 |

[个人分析](../practice/analysis/)记录了我的实际探索，整篇保存在“实践与评测”。我会区分界面截图、代理自述和观察到的系统行为，引用时保留当时的账号与探索语境。

## 2. 我的阅读脉络

### 从产品目标梳理系统职责

我先从发布介绍和设计理念理解它希望承接的委托，再用架构与官方安全文章梳理入口、模型、执行环境、记忆、调度、连接器和审批的关系。对于资料未说明的部分，我先保留空白，再寻找实践线索。

### 按更新追踪能力变化

Connect、小企业、Windows、Wonder 和 Spark Open 分别涉及不同层面的变化。我会记录改变的是入口、工具、运行环境、模型还是授权，同时区分已提供的能力和仍在计划中的内容。

### 用外部观察补充边界问题

人工接管、GhostShares、服务访问限制和第三方评测，让我进一步关注执行者变化、数据出口和外部依赖。这些观察需要回到具体时间和样本条件中理解，再与设计资料对照。

### 用自己的实践检验理解

已有的环境、文件和定时任务探索，留下了一些可以继续追踪的疑问。下方记录我想补充的实验，尚未完成的部分保持为待验证问题。

### 整理阶段性理解

我在 [Muse 调研总结](../summary/)中把资料与实践线索串起来，回到运行平台和 Agent 开发中的问题。随着后续证据增加，这些判断也会继续更新。

## 3. 按资料时间查找

日期是资料的原始发布或更新日期；本地文章的 `date` 为整理日期，避免用采集日期替代事件日期。

| 原始日期 | 资料 | 语言 / 类型 | 本地阅读笔记 |
| --- | --- | --- | --- |
| 09-23 | [Bringing Your Muse to Life](https://research.meta.ai/blog/bringing-your-muse-to-life) | 英文 / 官方技术 | [实时交互](../models/realtime-avatar/) |
| 09-24 | [The Biggest News From Connect 2026](https://about.fb.com/news/2026/09/the-biggest-news-from-connect-2026/) | 英文 / 官方公告 | [Connect 更新](../product/connect-2026/) |
| 09-29；10-08 更新 | [Muse for Small Business](https://about.fb.com/news/2026/09/introducing-muse-small-business/) | 英文 / 官方公告 | [小企业场景](../product/small-business/) |
| 持续更新；10-21 阅读 | [Muse Gadget SDK](https://github.com/facebookincubator/muse-gadget-sdk) | 英文 / 官方公开源码 | [设备扩展](../integrations/muse-gadgets/) |
| 10-05 | [Muse Gadgets 中文报道](https://www.ithome.com/1/009/743.htm) | 中文 / IT之家 | [设备扩展](../integrations/muse-gadgets/) |
| 10-07 | [Building Windows for hybrid intelligence](https://blogs.windows.com/windowsexperience/2026/10/07/building-windows-for-hybrid-intelligence/) | 英文 / 微软公告 | [Windows 计划](../integrations/windows/) |
| 10-08 | [Muse 将登陆 Windows](https://www.ithome.com/1/010/310.htm) | 中文 / IT之家 | [Windows 计划](../integrations/windows/) |
| 10-12 | [Muse Wonder](https://research.meta.ai/blog/muse-wonder) | 英文 / 官方模型公告 | [记忆与长期任务](../models/muse-wonder/) |
| 模型发布 10-12；文档无单独修订日 | [Muse Wonder Model Card](https://research.meta.ai/static/muse-wonder-model-card) | 英文 / 官方 PDF | [评估口径](../models/wonder-model-card/) |
| 10-13 | [Muse Wonder 中文报道](https://www.ithome.com/1/012/138.htm) | 中文 / IT之家 | [记忆与长期任务](../models/muse-wonder/) |
| 10-15 | [Muse Spark Open](https://research.meta.ai/blog/muse-spark-open) | 英文 / 官方模型公告 | [开放范围](../models/muse-spark-open/) |
| 09-22 / 09-23 | [Reuters 电话任务报道](https://www.marketscreener.com/news/meta-testing-a-human-concierge-for-its-new-personal-ai-agent-muse-ce785ad8de8cf025) / [IT之家转述](https://www.ithome.com/1/006/286.htm) | 英文与中文 / 媒体 | [人工接管](../security/human-concierge/) |
| 09-21 / 10-19 | [购物网站限制](https://www.ithome.com/1/005/418.htm) / [金融平台限制](https://m.ithome.com/html/1014856.htm) | 中文 / 媒体 | [外部服务边界](../practice/service-boundaries/) |
| 10-18；10-20 更新 | [GhostShares](https://blog.claroc.io/ghostshares-muse-passive-dns/) | 英文 / 研究团队披露 | [分享边界](../security/ghostshares/) |
| 10-21 | [分享功能暂停中文报道](https://www.digitaltoday.co.kr/cn/view/117284/meta-suspends-muse-chat-sharing-amid-privacy-exposure-concerns) | 中文 / DigitalToday | [分享边界](../security/ghostshares/) |
| 10-20 | [Axios 使用评测](https://www.axios.com/2026/10/20/battle-of-bots-openai-meta-ai-agents-test) | 英文 / 第三方使用 | [评测阅读](../practice/muse-dots-review/) |
| 10-04；10-08 更新 | [53AI 国内注册实测](https://llm.putaojie.top/news/LargeLanguageModel/2026100421084.html) | 中文 / 社区原创实测 | [中文注册实测](../practice/chinese-registration/) |
| 10-12 | WIRED 成人对话实测（Reece Rogers；原文确切链接待补，转述见 aiweekly） | 英文 / 媒体一手实测 | [内容政策冲突](../security/content-policy/) |
| 10-21 | Meta Q3 2026 财报电话会（经 AP / TechCrunch 报道） | 英文 / 官方口径 | [财报与用户数据](../product/earnings-and-scale/) |
| 10-20 | Sensor Tower 估计（经 TechCrunch 报道） | 英文 / 第三方估计 | [财报与用户数据](../product/earnings-and-scale/) |
| 10-22 | Yahoo Finance 理财评测（Kendall Little；经转载阅读） | 英文 / 媒体评测 | [理财功能评测](../practice/money-review/) |
| 约 10-23 | [Fox News 浪漫伴侣报道](https://foxnews.com/tech/why-people-falling-metas-muse-ai)（核心 Reddit 原帖已删，个案、无规模数据） | 英文 / 媒体报道 | [内容政策冲突](../security/content-policy/) |
| 约 10-05/06 | 404 Media 上线前 KVM 逃逸抢修报道（经 Mathrubhumi / aiweekly / Gadget Review 转述交叉，原文未直接读取） | 英文 / 媒体披露转述 | [上线前 KVM 逃逸](../security/kvm-escape-prelaunch/) |
| 10-05 / 10-06 | WIRED 系统提示词提取与 TIME 内部指令分析：每小时人物页、非用户亦被建档、未言明目标推断与提醒效果记录（经 Digital Watch / MediaNama / Malwarebytes / AlphaForge 转述交叉，原文未直接读取） | 英文 / 媒体调查转述 | [人物页](../security/people-dossiers/) |
| 10-26（报道日） | [盖茨 Decoder 访谈评价](https://timesofindia.indiatimes.com/technology/tech-news/bill-gates-is-a-fan-of-metas-ai-agent-muse-says-i-talked-to-alexandr-wang-about-it-congratulated-him-and-even-though-/articleshow/135208987.cms)（经 TOI/NewsBytes 转述，Verge 原文未直接读取） | 英文 / 第三方表态转述 | [盖茨评价](../practice/gates-assessment/) |
| 10-23 | Meta 日本 Newsroom 日本上线公告（经 DigitalToday 等交叉核实） | 日文与英文 / 官方公告 | [日本上线](../product/japan-launch/) |
| 10-27 | WIRED 六 Agent 一日横测（Reece Rogers；原文未直接读取，依据 DNYUZ 全文转载核实） | 英文 / 媒体一手横测 | [WIRED 六 Agent 横测](../practice/wired-six-agent-cross-test/) |
| 10-25 | 纽约时报两周实测：Muse vs Dots 五项生活任务（Brian X. Chen；原文未直接读取，依据 Indian Express 全文转载核实并以 Substack 摘要交叉） | 英文 / 媒体一手实测 | [纽约时报两周实测](../practice/nyt-five-killer-tasks/) |
| 10-11（播客）/ 10-12（整理） | [Wang 讲述 Muse 七个月建造过程](https://www.allthingsmuse.com/articles/alexandr-wang-david-senra-muse-build-story/)（高管口述经整理站转述，多家整理与文字稿摘录交叉；播客原声与完整文字稿未逐字核对） | 英文 / 访谈整理 | [七个月建造过程](../product/build-story/) |
| 10-28 | [Spark Open 许可细读](https://xt.pt/ai/muse-spark-open-is-free-until-the-company-using-it-isn-t-small)（引用许可条文的二手分析；Hugging Face LICENSE.md 原文待逐条直读） | 英文 / 许可分析 | [Spark Open 的开放范围](../models/muse-spark-open/) |

中文报道与其引用的英文原文可能来自同一来源，不视为独立验证。金融平台的具体政策尚待原始声明复核。

## 4. 本轮需要更新的认知

下表仅列本轮资料明确涉及的变化；展开与来源见对应笔记。

| 资料 | 相对早期素材的补充 | 当前保留的状态边界 |
| --- | --- | --- |
| 小企业公告 | 场景和连接器扩大，也更新了地区表述 | 公告列出的地区不等于每项功能均可用 |
| Windows 公告 | 增加个人电脑入口与执行环境的研究方向 | 原文为即将推出，未做安装验证 |
| Wonder 公告 | 强调记忆与持续推进 | 当日 API / Code 开放与 Muse 后续接入分开记 |
| Spark Open 公告 | 增加开放权重模型的学习入口 | 不推定完整 Muse 服务已开源 |
| GhostShares 更新 | 补充分享功能的实际边界与处置 | 区分暂停前行为、研究复查和将来版本 |
| 日本上线（10-23） | 可用地区从美加扩展到日本，本地服务分已接通与推进中两类 | 公告与负责人表态不等于本地功能已全量可用 |
| 财报会数据（10-21） | 首次出现官方设置量（超 1,000 万）与日用比例（约 25%）口径 | 设置量不是日活，长期收入目标是预期而非现状 |
| WIRED 实测（10-12） | 公开用户规则与系统提示在成人内容上直接冲突 | 媒体单一样本实测，未独立复现 |
| WIRED 六 Agent 横测（10-27） | 首次三方赛道同题对照：Muse 日常任务顺手、跨应用核对漏报，免费与易上手为相对优势 | 单作者单日、仅共享 Gmail 与日历，Duet 为发布次日状态；原文未直接读取 |
| 纽约时报两周实测（10-25） | 第二篇 Muse–Dots 直接对照：位置触发与批量求职为 Muse 胜场、餐厅抢订 dots 到确认屏、餐食与议价两方均成；日常任务性价比上 Muse 占优，与 WIRED 打分结论互补 | 单作者单账号两周、五项任务；原文未直接读取，依据转载全文核实；dots 浏览器故障是否为系统性短板待更多证据 |
| Wang 建造访谈（10-11） | 首次系统披露 Muse 建造过程：2025-06 备忘录、2026-02 OpenClaw 定型、100 多项行为评估全绿放行 | 高管口述经多家整理交叉，播客原声与完整文字稿未逐字核对；行为清单未公开 |
| Spark Open 许可细读（10-28） | 补上开放权重的合规边界：署名义务与衍生品定义、集团收入超 2,000 万美元的服务门槛 | 引用条文的二手分析，许可原文待逐条直读，不构成法律意见 |
| 53AI 实测（10-04） | 出现第一篇中文原创注册实测与邀请机制样本 | 绕过地区限制的注册不等于官方开放 |
| Yahoo Finance 评测（10-22） | 补齐理财功能清单与独立机构的谨慎态度 | 经转载阅读，细粒度授权问题待核对 |

## 5. 待实测问题 {#待实测问题}

这是我后续想补充的实验，尚无新增结果。

| 问题 | 拟采用的方法 | 留存材料 |
| --- | --- | --- |
| 记忆准确吗？ | 新会话回忆偏好，再更正事实 | 原始输入、回忆结果、修正结果 |
| 会持续推进吗？ | 小型任务中改变一个约束，观察恢复 | 任务状态、工具调用、人工介入 |
| 关闭客户端后怎样？ | 在有明确完成条件的任务中离开再返回 | 关闭与恢复时间、产物更新时间 |
| 连接器权限怎样生效？ | 对测试账号分别授权读与写 | 授权界面、拒绝记录、外部结果 |
| 审批可以约束什么？ | 准备草稿并停在发送之前 | 请求范围、审批内容、实际动作 |
| 设备权限会扩大吗？ | 在专用测试设备上查询测试目录 | 本机账号、允许目录、动作日志 |
| 撤销能否及时生效？ | 断开连接后尝试下一项允许的测试任务 | 撤销时点、拒绝结果、残留任务 |

后续记录会保留日期、地区、套餐、客户端、可见模型信息和数据来源。我会先用模拟数据和可验收的小任务积累证据，再扩展观察范围。

## 6. 证据与学习笔记的约定

- **官方说明**：厂商描述的设计、能力或开放计划，保留原文时态。
- **外部观察**：研究者、媒体或用户的特定观察，保留版本和样本限制。
- **本人实测**：只有实际运行、保留过程并检查结果后才标注。
- **研究判断**：从资料提出的解释或实验方向，不改写成官方事实。
- **待核验**：缺少当前账号、原始政策、版本或可复核结果。

综合文章保持完整，每篇材料只有一个主要目录归属；跨主题通过链接参照。VM 内部服务、记忆存储结构等实现细节仍须结合原有观察与后续证据判断；不从模型名称或新闻标题推导内部组件。

## 7. 继续关注的入口与缺口

我会继续关注 [Meta Muse 产品入口](https://ai.meta.com/tools/muse/)、[Meta AI Research](https://research.meta.ai/)、[Meta Newsroom AI](https://about.fb.com/news/tag/ai/)和 [Gadget SDK 仓库](https://github.com/facebookincubator/muse-gadget-sdk)。

本轮尚未解决：当前账号的套餐与额度、Confidential VM 的实际开放状态、不同地区的功能差异、记忆遗忘与导出、设备断线恢复，以及数日以上任务的可靠性。帮助中心和动态功能页需要在具体问题出现时逐项核验。本页不据检索未发现新公告，就认定某项功能没有更新。

## 8. 后续学习的线索

后续我想继续围绕“从知道偏好到长期受托办事”学习，结合个人上下文、持续执行、权限与数据出口，以及实际失败和恢复的案例。阶段性判断继续回到这些笔记和实践记录，学习过程中留下的问题也一并保留。
