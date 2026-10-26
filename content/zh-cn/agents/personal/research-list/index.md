---
title: "Personal Agent 业界调研清单"
linkTitle: "调研清单"
weight: 1
date: "2026-10-23T00:00:00+08:00"
description: >
  Personal Agent 代表性产品、入选理由、开放状态与后续调研计划
---

我按实现路线整理了 **16 个主要对象，分两批完成公开资料调研**，覆盖云端常驻、个人电脑、开源自建、通信入口和办公生态。各产品分别记录资料阅读、架构理解和待验证问题，再通过横向比较沉淀对 Personal Agent 的认识。

**第一批进度：8 / 8 已完成公开资料调研。** WorkBuddy 调入第一批，补充国内个人办公场景；Claude Duet 继续保留在第一批。各产品均已按主题归档，保留资料索引和最后的调研总结；完成范围与下一步问题见 [阶段性比较](../first-batch-summary/)。本轮没有新增账号实测，Muse 原有个人探索记录继续单独保留。

**第二批进度：8 / 8 已完成公开资料调研。** Perplexity Personal Computer 调入第二批作为参考，Claude Cowork 继续保留在第二批。沿用六类主题、资料索引和总结，补充中英文资料、版本差异与实践方案，见 [第二批阶段性比较](../second-batch-summary/)。目前合计 **16 / 16**；公开资料整理与同条件实测分别记录。

**资料核验日期：第一批中 Muse、Dots、Cue、Gemini Spark / Task、Grok Bot、OpenClaw 为 2026-10-21，WorkBuddy 为 2026-10-22，Duet 为 2026-10-23；第二批中 Hermes、Autopilot、Poke、Lindy、Kimi Claw、DeepSeek Harness 为 2026-10-22，Personal Computer 为 2026-10-21，Cowork 保留 2026-10-21 资料及 10-23 关系补记（北京时间）。** 下文能力与开放状态来自官方公开资料，尚未通过本轮账号实测；“代表性”和优先级是本调研的选题判断，不是市场份额或能力排名。不同地区、套餐、客户端和灰度批次的可用功能可能不同。

## 1. 本次研究什么

结合已有的 Muse、Dots、Cue 素材，我暂时将 Personal Agent 的主线定义为：**长期服务于一个人，理解其上下文，并能受托推进任务的智能体。** 个人生活与个人工作都在范围内。

筛选时重点看五个问题，而不要求每个候选已经全部实现：

| 维度 | 要回答的问题 |
| --- | --- |
| 个人上下文 | 能否接入个人文件、邮件、日历等数据，并保留跨会话的偏好与记忆？ |
| 实际执行 | 能否操作应用、浏览器或电脑，交付结果或完成服务？ |
| 持续运行 | 用户离开后能否继续工作？是否支持定时或事件触发？ |
| 长期委托 | 能否持续跟进目标、处理变化，并在需要时主动联系用户？ |
| 用户控制 | 权限、凭证、支付、对外通信与审计如何设计？ |

会聊天、有角色设定或只有提醒功能，并不足以证明具备上述能力。纯编程助手、企业智能体开发平台和纯陪伴产品暂不作为主清单，但可以在后续总结中讨论边界。

对于同时提供开发底座和可直接使用的个人工作助手的产品，按用户实际能使用的能力判断是否纳入。名称中带有 Harness 或 Framework，不直接构成排除理由；纳入候选也不意味着已验证其完整的长期个人助手能力。

## 2. 第一批：优先深入的 8 个

这一批从已有三个对象出发，补足 Google、Grok、开源自建、国内个人办公和主动委托路线。我将 WorkBuddy 调入第一批作为重点样本，Perplexity Personal Computer 调入第二批作为参考；Claude Duet 保留在第一批，Cowork 保留在第二批。批次表示研究重点，不是产品能力排名，也不改变 Personal Agent 的归类判断。

| 产品 / 团队 | 路线与代表性 | 优先调研的问题 | 官方公开状态与资料 |
| --- | --- | --- | --- |
| **Muse / Meta** | 面向个人生活的云端常驻代理，专用 VM、个人记忆和跨应用执行结合；已有素材最多 | 长期目标如何推进？Secure VM、Sentinel 与凭证隔离如何支撑个人委托？ | 官方发布页称已在美国推出；[发布介绍](https://about.fb.com/news/2026/09/introducing-muse-personal-ai-agent/)、[设计说明](https://introducing.muse.ai/)、[安全说明](https://security.muse.ai/)；[本地素材](../muse/) |
| **Dots / OpenAI** | ChatGPT 中的常驻代理，有自己的云端电脑和浏览器，利用历史上下文推进项目 | 如何从聊天记忆转入持续工作？云端电脑与连接个人电脑怎样协作？ | 正向符合条件的账号逐步开放，具体套餐、地区和工作区条件需按账号核验；[官方文档：Meet dots](https://learn.chatgpt.com/docs/dots)；[本地目录](../dots/) |
| **Cue / Manus** | 具有独立邮箱、电话号码、钱包和电脑的个人代理，支持多个代理在群聊中交接工作 | 独立身份如何改变任务执行与授权？个人助手与代理团队如何共存？ | Manus 2.0 发布文称处于需要邀请码的 Early Access；[官方介绍](https://www.manus.im/blog/introducing-manus-2-0)、[产品页](https://www.cue.im/)；[本地目录](../cue/) |
| **Gemini Spark（现 Task 模式）/ Google** | 依托 Google 应用生态的个人代理，结合个人上下文、计划与浏览器操作 | 原生应用接入能减少多少配置？来源更新、云端与本地执行怎样衔接？ | 当前帮助已说明更名；个人 Pro / Ultra 账号等准入条件与 Chrome、自定义 MCP 的地区条件分别核验；[当前官方帮助](https://support.google.com/gemini/answer/17094507?hl=en)；[本地调研](../gemini-spark/) |
| **Grok Bot / Grok 团队** | 具有云端电脑、记忆和持续执行能力的代理团队，覆盖个人委托与工作协作 | 多个 Bot 如何分工、共享环境和保留上下文？个人代理与 AI 同事的边界在哪里？ | 发布时为 Beta；当前计费区分新的 The X Subscription 与旧 Grok / Cursor 路径，按账号核实；[官方概览](https://docs.x.ai/grok-bot/overview)、[当前计费](https://cursor.com/help/grok-bot/plans)；[本地调研](../grok-bot/) |
| **OpenClaw / 开源社区** | 可在自己的设备或服务器运行，通过通信渠道连接的个人助手，适合作为自建方案基准 | Gateway、记忆、Skills、Automations 怎样组成常驻助手？Heartbeat 迁移与部署维护怎样处理？ | 开源，可自行部署；持续运行需要可用的宿主和模型服务；当前文档包含 Heartbeat 向自动化作业迁移，部署时固定版本；[官方文档](https://docs.openclaw.ai/)、[代码仓库](https://github.com/openclaw/openclaw)；[本地调研](../openclaw/) |
| **WorkBuddy / 腾讯** | 连接本地文件、办公应用、个人与团队任务 | 手机远程本机、云端排程与企业托管的运行及权限边界 | 桌面日志最新 5.8.3（10 月 19 日）；企业套件版本另计，托管仍需核验开放范围；[桌面更新](https://www.workbuddy.cn/docs/workbuddy/Changelog)；[本地调研](../workbuddy/) |
| **Claude Duet / Anthropic** | 主动发现待办、持续跟进与用户决策交回，沿用 Claude 账号的部分记忆、方法与应用配置 | 采样检查与注意力判断如何平衡？云端任务怎样验收？与 Cowork 共用上下文时如何限定资源和授权？ | 2026-10-21 发布 Research Preview；美国 Pro / Max、候补邀请，Team / Enterprise 尚未开放；[官方发布](https://claude.com/resources/articles/claude-duet)、[简体中文入门](https://support.claude.com/zh-CN/articles/17631495-开始使用-claude-duet)；[本地调研](../claude-duet/) |

我先从 Muse、Dots、Cue 深入，再通过其余产品比较不同实现路线。每个对象的调研深度取决于资料、实践条件，以及能否带来新的认识。

## 3. 第二批：已完成公开资料调研的 8 个

这些对象补充技能积累、通信入口、组织治理、个人电脑执行和产品化视角。Personal Computer 作为个人环境参与执行的参考样本；部分对象更偏工作助手，需要在调研中明确适用边界。

| 产品 / 团队 | 为什么纳入 | 重点观察 | 官方公开状态与资料 |
| --- | --- | --- | --- |
| **Hermes Agent / Nous Research** | 可自建的开源路线，结合持久记忆与经验技能 | Profile / Bot、记忆快照、目标推进、Cron 投递与宿主维护分别研究 | 10 月 21 日稳定版 v0.22.3；不同桌面和分发入口未必同步；[官方文档](https://hermes-agent.nousresearch.com/)、[代码仓库](https://github.com/NousResearch/hermes-agent)；[本地调研](../hermes-agent/) |
| **Copilot Autopilot / Microsoft** | 依托组织上下文的云托管个人工作代理 | 组织身份、权限与治理；区分当前云端公告与旧 Scout 桌面细节 | 9 月公告仍为 **Private Preview**；不能把旧 Scout 文档直接作为云托管实现说明；[发布介绍](https://blogs.microsoft.com/blog/2026/09/25/introducing-the-new-copilot-with-home-code-and-autopilot/)；[本地调研](../copilot-autopilot/) |
| **Poke / The Interaction Company of California，现加入 Cognition** | 通过 Apple Messages、Telegram、WhatsApp、RCS 接受个人委托 | 账号状态、Recipes 分发、自动化、MCP / API 与人工协助 | 7 月 23 日官方宣布加入 Cognition，不据此推断与 Devin 共用架构；套餐、用量及人工协助分别核验；[官方文档](https://poke.com/docs)、[团队关系公告](https://cognition.com/blog/interaction)；[本地调研](../poke/) |
| **Lindy / Lindy 团队** | 从个人执行助理延伸到共享 AI 员工 | 记忆与技能作用域、Routines、凭证共享和产物访问 | 10 月增加演示学习与电话能力；Skills 有逐步开放条件；Guardrails 的具体入口范围不能按宣传语泛化；[更新记录](https://www.lindy.ai/changelog)；[本地调研](../lindy/) |
| **Kimi Claw / 月之暗面** | 将 OpenClaw 与托管、会员、消息和设备入口结合 | 云端、已有实例、Desktop / Android 分开研究；核查技能、记忆和升级责任 | 云端一键部署要求 Allegretto 或以上会员；其他路径各有设备与版本条件，不能直接套用上游最新行为；[官方概览](https://www.kimi.com/help/kimi-claw/overview)；[本地调研](../kimi-claw/) |
| **Personal Computer / Perplexity** | 从云端 Computer 延伸到个人电脑，将本地文件、原生应用、浏览器和模型编排结合 | 本地与云端怎样配合？手机远程委托和电脑常驻如何工作？多模型编排是否带来可感知收益？ | Mac / Windows 桌面入口各有条件；10 月 20 日新增 Mac 完全本地模式，受芯片、内存与模型条件限制，不能泛化到全部桌面任务；[产品页](https://www.perplexity.ai/personal-computer)；[本地调研与近期资料](../personal-computer/) |
| **DeepSeek Harness / 深度求索** | 开源运行底座与桌面 / Web 个人工作助手并存 | 插件组合、会话事实、记忆接入、Host 调度、Goal 与权限分别核验 | 全球 Public Preview；10 月 17 日 v0.2.1-rc.2 为预发布；当前 Web 已内置调度，长期 Memory MCP 默认未启用；[产品页](https://www.deepseek.com/en/harness/)、[发布记录](https://github.com/deepseek-ai/deepseek-harness/releases/tag/dsh-v0.2.1-rc.2)；[本地调研](../deepseek-harness/) |
| **Claude（Cowork 路线）/ Anthropic** | 从个人知识工作切入，结合文件、连接器、Skills、项目记忆、长任务和定时执行 | 知识工作与 Duet 的主动委托如何分工？云端任务怎样访问本地资源？ | 聊天与 Cowork 逐步统一；10 月 6 日起新 Pro / Max 任务转为云端，旧本地任务保留；组织版、桌面资源和电脑操作分别核验条件；[多端运行说明](https://support.claude.com/en/articles/15520349-use-claude-cowork-on-web-desktop-and-mobile)；[本地调研](../claude-cowork/) |

**DeepSeek Harness 的能力边界。** 官方文档提供第三方记忆 MCP 的接入示例，但明确说明默认组合未启用这些记忆服务，因此不能据此认定已具备开箱即用的长期个人记忆。保存会话、定时触发与持续理解个人并跟进目标分别核验，后者保留为待实测项。来源：[官方记忆集成文档](https://deepseek-harness.github.io/deepseek-harness/en/guide/mcp-memory)。

**产品谱系需要单独处理。** Kimi Claw 是基于 OpenClaw 的产品化方案，不能按完全独立架构重复计数。腾讯的 QClaw 官网目前出现“停服专区”和迁移到 WorkBuddy 的入口，因此本轮将 WorkBuddy 作为当前候选，QClaw 保留为历史演进案例；具体停服时间及不同版本范围尚待核验。来源：[QClaw 官网](https://qclaw.qq.com/)、[官方迁移页面](https://qclaw.qq.com/migration)。

## 4. 相邻路线：作为背景补充的 3 个

主清单偏向能持续接受委托的数字工作代理。为避免将 Personal Agent 完全等同于“云端电脑”，还应保留以下对照样本。

| 产品 | 可补充的视角 | 本轮边界与官方资料 |
| --- | --- | --- |
| **豆包手机助手 / 字节跳动** | 系统级手机入口、识屏、本地个人数据与记忆、跨应用任务执行 | 代表移动端路线，不能据此推定其具有与云端常驻代理相同的离线执行能力；[官网](https://o.doubao.com/) |
| **Alexa+ / Amazon** | 家庭与语音入口、跨设备上下文、购物与生活服务执行 | 代表家庭服务生态，具体动作依赖服务集成；[官方产品介绍](https://www.aboutamazon.com/what-we-do/devices-services/alexa-plus)、[跨语音、移动与 Web 的说明](https://www.aboutamazon.com/news/devices/alexa-plus-web-ai-assistant) |
| **CC / Google Labs** | 以邮件为入口，基于 Gmail、Calendar、Drive 主动生成每日简报并接受回复 | 作为聚焦日程与信息整理的实验样本；发布公告为 Early Access，当前准入仍待核验；[官方介绍](https://blog.google/innovation-and-ai/models-and-research/google-labs/cc-ai-agent/) |

这是一份按路线挑选的代表性清单，不是穷尽目录。后续如发现某个产品能提供新的架构或交互样本，再补入候选池。

## 5. 容易混淆的名称与能力

- **Dots** 指 OpenAI 的常驻代理，不是 New Computer 的 Dot 陪伴应用。
- **Muse** 指 Meta 的个人代理，不是同名视频、创作工具或研究框架。
- **Cue** 指 Manus 的 cue.im，不是其他同名办公助手，也不是早年的 Cue 搜索服务。
- **Gemini Spark** 是 Google 的个人代理产品，当前官方入口称 **Task**；与 Muse Spark 模型、Google Tasks 待办应用及普通聊天中的 Scheduled actions 分开记录，见 [产品演进](../gemini-spark/product/access-and-task-mode/)。
- **Claude Cowork** 与 **Microsoft 的 Cowork** 分属不同产品；微软此处研究的常驻个人代理是 **Autopilot**。
- **Claude Duet** 是独立的主动代理应用，不是 Cowork 更名。两者共享部分账号上下文，能力与开放条件分别核验；两个研究对象不代表两套完全独立的底层架构。
- **独立身份、持续记忆、定时任务和持续自主推进目标** 是不同能力，后续分别核验。“24/7”也需要拆清楚：是云端继续执行、宿主在线时运行，还是只支持定时唤醒。

## 6. 后续逐项调研的统一维度

我用同一套问题记录各产品，便于比较，也便于回到自己的运行平台和开发工作中思考。公开设计、实际观察与个人推断分别保留，架构空白不从产品演示中补写。

| 维度 | 需要收集的内容 |
| --- | --- |
| 定位与用户 | 面向个人生活、个人工作还是团队；典型委托与明确边界 |
| 入口与身份 | 独立 App、IM、邮件、语音或系统入口；代理使用自己的账号还是用户账号 |
| 上下文与记忆 | 数据来源、跨会话记忆、检索、更新、纠错、遗忘与导出 |
| 执行与运行环境 | API / MCP、浏览器、GUI、Shell、文件；本地、云端或混合部署；隔离与状态持久化 |
| 主动性与长期任务 | 时间 / 事件触发、任务恢复、目标跟进、用户离开后的行为 |
| 技能与协作 | 技能的创建、复用和积累；多个代理如何分工与共享状态 |
| 安全与控制 | 凭证保管、权限粒度、敏感动作审批、审计、撤销与停止机制 |
| 成本与准入 | 订阅、用量和宿主成本；地区、设备、套餐与邀请条件，记录核验日期 |
| 实际效果 | 任务是否完成、耗时、人工介入次数、失败原因、最终交付物 |

证据分别标记为 **官方说明、实际观察、研究判断、待核验**。例如官方声称有长期记忆，只能先记录为官方说明；跨周任务测试后，才可评价其实际效果。

后续我想用几组共同场景做对照，记录各产品实际推进到哪一步：

1. **邮件与日程**：读取测试邮件，提出待办，创建日程，后续处理时间变化。
2. **调研与交付**：跨来源研究一个问题，生成文档或演示材料，并按反馈修订。
3. **持续跟踪**：连续数日跟踪一个主题或任务，在发生变化时通知用户。
4. **生活代办**：查找、比较与准备预订，观察提交和支付环节的权限设计。

## 7. 两批完成情况与下一步

### 第一批：8 个产品

第一批包含 Muse、Dots、Cue、Gemini Spark / Task、Grok Bot、OpenClaw、WorkBuddy 和 Claude Duet，共 8 个。前六个对象资料核验于 2026-10-21，WorkBuddy 保留 2026-10-22 资料，Duet 于 2026-10-23 补入。“完成”指资料整理与阶段性总结，不表示已完成同条件实测。

| 产品 | 本轮沉淀 | 当前证据边界 |
| --- | --- | --- |
| [Muse](../muse/) | 分类材料、[总结](../muse/summary/) | 官方资料、外部观察及原有个人探索；代理自述与独立观察分开 |
| [Dots](../dots/) | 分类材料、[总结](../dots/summary/) | 公开资料与待实测方案 |
| [Cue](../cue/) | 分类材料、[总结](../cue/summary/) | 身份、团队、工具与控制资料；尚无本轮账号实测 |
| [Gemini Spark / Task](../gemini-spark/) | 分类材料、[总结](../gemini-spark/summary/) | 公开资料、入口演进与按账号核实的条件 |
| [Grok Bot](../grok-bot/) | 分类材料、[总结](../grok-bot/summary/) | 当前文档、更新日志与外部观察；尚无本轮账号实测 |
| [OpenClaw](../openclaw/) | 分类材料、[总结](../openclaw/summary/) | 开源版本、动态文档与外部研究；未部署验证 |
| [WorkBuddy](../workbuddy/) | 12 篇主题笔记、[总结](../workbuddy/summary/) | 中英文官方资料、桌面与企业文档；未安装客户端 |
| [Claude Duet](../claude-duet/) | 12 篇主题笔记、[总结](../claude-duet/summary/) | 中英文官方帮助、合作方说明与发布报道；未获邀实测 |

第一批横向认识见 [第一批八个产品的阶段性比较](../first-batch-summary/)。

### 第二批：8 个产品

第二批包含 Hermes Agent、Copilot Autopilot、Poke、Lindy、Kimi Claw、Perplexity Personal Computer、DeepSeek Harness 和 Claude Cowork，共 8 个。除 Personal Computer 与 Cowork 外，其余六个对象读取至 2026-10-22；Personal Computer 保留 10 月 21 日资料，Cowork 保留 10 月 21 日资料与 10 月 23 日关系补记。批次调整不改变资料核验日期，主题材料、来源索引、总结和待执行验证方案继续保留。每个产品沿用产品、架构、模型、生态、安全和实践六类目录。

| 产品 | 本轮沉淀 | 当前证据边界 |
| --- | --- | --- |
| [Hermes Agent](../hermes-agent/) | 12 篇主题笔记、[总结](../hermes-agent/summary/) | 中英文官方文档、稳定版发布与社区资料；未部署 |
| [Copilot Autopilot](../copilot-autopilot/) | 12 篇主题笔记、[总结](../copilot-autopilot/summary/) | 中英文公告与 Scout 文档分期保留；未获预览实测 |
| [Poke](../poke/) | 12 篇主题笔记、[总结](../poke/summary/) | 官方帮助、API、套餐与外部观察；未连接个人账号 |
| [Lindy](../lindy/) | 12 篇主题笔记、[总结](../lindy/summary/) | 当前帮助、更新和开放范围；未运行工作流 |
| [Kimi Claw](../kimi-claw/) | 12 篇主题笔记、[总结](../kimi-claw/summary/) | 中英文帮助、设备与会员条件；未做云端或设备实测 |
| [Personal Computer](../personal-computer/) | 分类材料、[总结](../personal-computer/summary/) | 产品、帮助、近期发布与 SPACE 资料；未做设备实测 |
| [DeepSeek Harness](../deepseek-harness/) | 12 篇主题笔记、[总结](../deepseek-harness/summary/) | 中英文参考、预发布与外部论文摘要；未部署或安全审计 |
| [Claude Cowork](../claude-cowork/) | 分类材料、[总结](../claude-cowork/summary/) | 当前中英文帮助、迁移规则与外部观察；尚无本轮账号实测 |

第二批横向认识见 [八个产品的阶段性比较](../second-batch-summary/)。下一步用统一场景验证记忆纠错、断线恢复、计划执行与撤权，把公开机制与实际产物对应起来。跨产品判断继续回到原始资料和实际验证，不急于用公开能力表给产品排名。

贯穿这轮学习的问题是：**Personal Agent 怎样从“知道我的偏好”，走到“可以长期受托办事”？** 我先保留不同路线的样本，具体判断随着逐项阅读和实际验证逐步形成。
