---
title: "Personal Agent 可以做什么：16 个产品的功能与交易边界回查"
linkTitle: "用途与功能比较"
weight: 45
date: 2026-10-26
lastmod: "2026-11-02T00:00:00+08:00"
description: "在信息、调研与持续工作之外，梳理购物付款、订阅账单、电话预订、个人经营、应用开发与设备操作。"
materialType: "资料阅读与横向比较"
---

## 我为什么重新整理用途

最初我把 Personal Agent 的应用概括为信息与事务、调研与交付、持续跟踪。这三类仍有帮助，但容易让人以为它只是在整理资料、生成文件和定时通知。回查这 16 个对象后，我想补足另一部分：**代理开始代表个人与商家、服务系统、业务账号和设备交互，并尝试完成实际事务。**

这里还混合了两个维度：购物、预订、经营是业务用途，持续跟踪则是工作方式。价格跟踪、账单检查、客户跟进都可以持续发生。因此我保留原有内容，再增加六个观察方向，不把它们划成彼此互斥的产品类别。

本轮资料读取于 **2026-10-26**，覆盖第一批和第二批各八个对象；只整理公开证据，没有新增注册、订阅、付款或功能实测。DeepSeek Harness 等边界对照继续保留，但不因此认定所有对象都是同样成熟的 Personal Agent。

## 六个需要补充展开的方向

| 方向 | 我可以怎样描述委托 | 怎样才算交付 |
| --- | --- | --- |
| 购物与付款 | 按型号、预算和交付日期选购，核对后再批准购买 | 商家接受的订单、金额与回执，而非只有商品链接或购物车 |
| 订阅、账单与预算 | 找到重复服务、试用到期和续费，先列变更清单 | 查清扣费、获准变更，并核对实际生效；开通与周期续费另看 |
| 电话、出行与服务预订 | 联系商家、改约、订餐、安排出行 | 联系结果、预约确认、取消条件及日历记录 |
| 个人经营 | 处理客户、店铺、发票与经营记录 | 可核对的业务记录、待批草稿或获准提交的动作 |
| 应用与流程制作 | 将想法做成报名表、看板、网站或重复工作流程 | 可运行、可修改的成果；是否发布另作决定 |
| 设备与应用操作 | 在指定电脑、手机或已接设备上完成任务 | 目标环境中的实际变化及可检查的结果 |

下列委托与验收方式是我的归纳；不要求每个产品都覆盖全部方向。

### 购物与付款不只是比价

[Muse 的官方购买说明](https://research.meta.ai/blog/security-and-safety-for-ai-agents-our-approach-with-muse)和 [Duet 的 Link 帮助](https://support.claude.com/en/articles/17666484-how-to-use-link-by-stripe-with-claude-duet)都有逐笔批准的购买流程。[Cue 的开发者应用说明](https://play.google.com/store/apps/details?hl=en&id=ai.manus.agents)则加入支持商家的扫码点单和确认付款。它们让“选什么”延伸到了“帮我买”。

我会明确商品、数量、商家、总价、配送与退货条件，再检查最后是否有订单。不能只凭付款请求获批就说购买成功，商家仍可能拒绝或没有完成交易。

### 订阅管理需要把几种动作分开

我想研究的委托是：整理获准访问的账单与邮件，列出服务、金额、周期、续费日、试用截止和重复项，形成保留、降档或取消清单，确认后再执行。新服务开通、付费续订与取消是不同动作，仍需要相应服务和付款路径的支持。

[Subscription Insider 的 2026-09-29 观察](https://www.subscriptioninsider.com/blog/meta-muse-shows-where-subscription-management-is-headed)介绍了 Muse 查找和批准后取消订阅的场景。这属于第三方报道，本轮未取得同条件实测，不能写成我验证了商家覆盖或成功率。[Perplexity 2026-05-10 更新](https://www.perplexity.ai/changelog/personal-computer-for-all-users-on-mac)提供配套 Personal CFO 的账户和预算分析依据，并注明美加范围；它不是所有 Mac 安装默认启用的功能，也不等于代用户转账。

我特别区分四件事：**退订邮件列表、取消付费会员、周期执行任务、周期扣款。** Gemini 的帮助里“unsubscribe”指邮件退订，Duet 的 Link 则明确不支持周期付款。另一个独立问题是我自己购买 Agent 的会员，不能用产品的充值页证明它有代购物能力。

### 预订与电话要看最终由谁完成

[Lindy 的电话页](https://www.lindy.ai/product/phone)列出代拨、接听、改约与结果汇报；[Gemini Task 的中文帮助](https://support.google.com/gemini/answer/17094507?hl=zh-Hans)写到选购、旅行和餐厅预订。[Poke Human 发布记录](https://poke.com/docs/release-notes)则明确部分电话、下单、叫车与预订由真人加入完成。

我会分别记录自动执行、需要用户接管和人工协助。一个服务最终能订妥，与底层是否全程由 AI 执行，是不同问题。

### 个人经营既包含花钱，也包含收款和业务管理

[Muse Small Business 公告](https://about.fb.com/news/2026/09/introducing-muse-small-business/)将店铺、财务与内容工具接入个人委托。[Duet 发布说明](https://claude.com/resources/articles/claude-duet)也覆盖客户、合同、发薪和店铺，但具体动作仍受连接器与审批条件约束。

[Stripe 的合作公告](https://stripe.com/newsroom/news/anthropic-and-stripe)给出了一个清晰区别：Link 用于用户采购；Stripe MCP 面向商户发票、支付链接、价格、收入和退款。两者都是商业行为，代表的账号与授权对象却不同。我不会由此推为任意个人转账能力。

### 应用与流程制作：做成可以继续使用的工具

[WorkBuddy 网站发布帮助](https://www.workbuddy.cn/docs/workbuddy/From-Beginner-to-Expert-Guide/Function-Description/App-Publishing/Web-App)说明预览、数据保存、发布、更新和下线，能够支持“做一个我以后继续使用的小工具”这类委托。Dots 与 DeepSeek Harness 的代码和插件能力，也让我把成果范围从静态文件扩展到程序与流程。

### 设备与应用操作：动作进入我的环境

[Personal Computer 的设置帮助](https://www.perplexity.ai/personal-computer-setup)覆盖 Mac 文件、应用与手机确认；[Kimi Claw Android](https://www.kimi.com/en/help/kimi-claw/android-user-guide)在手机本机执行；[Hermes 的工具页](https://hermes-agent.nousresearch.com/docs/user-guide/features/tools)明确 Home Assistant 通过插件接入。这里都需要记录实际路径，不能把某一插件可扩展的能力说成所有安装都默认可用。

## 逐个回查 16 个对象

我把每个对象的厂商、推出时间、准入、地域与套餐快照归入它自己的“产品与设计”目录。下表比较用途与证据边界，不做统一条件排名；“未确认”只表示本轮没有取得足够依据。

### 第一批八个对象

| 对象与功能笔记 | 我确认的用途入口 | 购买、付款与证据限制 |
| --- | --- | --- |
| [Muse](../muse/product/capabilities-and-availability-20261026/) | 购物、旅行与个人目标；个人经营；订阅管理有外部观察 | Link 购买逐笔批准；订阅取消案例未经我复现 |
| [Dots](../dots/product/capabilities-and-availability-20261026/) | 持续职责、文档与研究；代码、应用与项目跟进 | 有动作审查与插件权限；专属支付钱包未确认 |
| [Cue](../cue/product/capabilities-and-availability-20261026/) | 身份化助手与团队协作；支持商家扫码、点单与支付 | 开发者说明要求付款确认；商家与地域范围另核 |
| [Gemini Spark （现 Task）](../gemini-spark/product/capabilities-and-availability-20261026/) | 邮件、研究、购物预订；航班酒店比价与持续任务 | 敏感步骤可能需接管；邮件退订非付费退订 |
| [Grok Bot](../grok-bot/product/capabilities-and-availability-20261026/) | 长期 Bot、网页与应用；协作、内容和重复工作 | Stripe 列为 Link 合作对象；Bot 文档支付确认需接管 |
| [OpenClaw](../openclaw/product/capabilities-and-availability-20261026/) | 自建消息、网页与设备；文件工作和重复任务 | 依赖所装插件和部署；未确认统一消费钱包 |
| [WorkBuddy](../workbuddy/product/capabilities-and-availability-20261026/) | 办公文件、分析与应用；可预览、发布和继续修改 | 应用发布须另确认；购买积分非代购物能力 |
| [Claude Duet](../claude-duet/product/capabilities-and-availability-20261026/) | 办公与经营、采购；商户发票、收入与退款 | Link 每笔批准，不支持周期付款；美国预览限制 |

### 第二批八个对象

| 对象与功能笔记 | 我确认的用途入口 | 购买、付款与证据限制 |
| --- | --- | --- |
| [Hermes Agent](../hermes-agent/product/capabilities-and-availability-20261026/) | 自建研究、开发与定时；可加 Home Assistant 插件 | 有卡片填写非统一钱包；社区案例不作产品保证 |
| [Copilot Autopilot](../copilot-autopilot/product/capabilities-and-availability-20261026/) | 组织上下文中的持续工作；邮件、日历和文件沿革 | 受邀预览，旧 Scout 资料不等于现名功能全量 |
| [Poke](../poke/product/capabilities-and-availability-20261026/) | 消息、提醒与 Recipes；电话、预订和现实事务 | Poke Human 有真人参与；不概括为纯 AI 付款 |
| [Lindy](../lindy/product/capabilities-and-availability-20261026/) | 电话、改约、客户支持；会议、CRM 与经营资料 | 预约有依据；未确认统一购买钱包与周期支付 |
| [Kimi Claw](../kimi-claw/product/capabilities-and-availability-20261026/) | 消息与 OpenClaw 任务；手机应用与智能设备路径 | 云端、桌面、Android 分开；不能复制 Kimi 全站功能 |
| [Personal Computer](../personal-computer/product/capabilities-and-availability-20261026/) | Mac 文件、应用与网页；配套 Computer 财务分析 | Personal CFO 属配套服务；美加范围，非自动交易 |
| [DeepSeek Harness](../deepseek-harness/product/capabilities-and-availability-20261026/) | 文件、研究与代码；批处理、插件与流程扩展 | 运行能力非现成商业服务；未确认消费钱包 |
| [Claude Cowork](../claude-cowork/product/capabilities-and-availability-20261026/) | 研究、文档、表格与代码；应用与桌面工作 | Duet 的 Link 不在 Cowork；财务分析不等于付款 |

## 我会按实际完成的步骤比较

| 阶段 | 可以观察什么 | 仍不能据此声称什么 |
| --- | --- | --- |
| 发现与分析 | 检索、比价、找重复项、提供候选方案 | 已向第三方提交动作 |
| 准备动作 | 草稿、购物车、预订或变更申请 | 订单、预约或取消已经生效 |
| 批准与提交 | 适用的用户确认、实际调用或付款授权 | 商家已接受、扣款已最终完成 |
| 结果与后续 | 订单号、预约回执、变更生效与后续处理 | 未来所有变化都能自动处理 |

这是我阅读资料时使用的比较方法，不是行业统一分级。[Muse 连接器规范](https://platform.muse.ai/docs)要求确认订单、查询状态和处理变更，能帮助理解这些边界；规范中的 Cedar Stays 明确是虚构例子，不能当成已接入酒店或我的实验。

Grok Bot 也提醒我保留来源差异：Stripe 公告把它列为 Link 合作对象，Bot 帮助却仍要求支付确认交给用户接管。我据此记录“合作方确认支持”与“当前帮助中的操作要求”，钱包入口、地区和实际账号资格仍待核对。

原有三类常规用途继续作为基础。补充这些方向以后，我更容易看见 Personal Agent 的任务结果正在从答案和文件，延伸到订单、预约、订阅变更、业务记录和可运行工具；具体能推进到哪一步，需要回到每款产品的证据。

## 2026-11-02 补充：灵光与 Today

原有 16 个对象的表格继续保留 2026-10-26 的资料边界。这次我新增两个跟踪对象，分别记录本轮材料，没有把旧表整体重新核验，也没有新增账号实测。

| 对象与功能笔记 | 我关注的用途 | 必须保留的边界 |
| --- | --- | --- |
| [灵光](../lingguang/product/capabilities-and-availability-20261102/) | 从生活事务观察持续委托，重点跟踪消费分析、订后变化与国内服务连接 | 识别续费不等于已经取消订阅；支付宝与 APASS 的接入不等于自动付款，相关流程仍需单独取证 |
| [Today](../today/product/capabilities-and-availability-20261102/) | 从个人状态观察跨日工作，研究记忆纠错、主动建议与云端 / 设备任务继续 | 中国版与国际版分别核验；集成目录的 Soon 不能写成已全面开放，财务工具也不能替代消费钱包证据 |

这两个样本没有让我再增加一个互斥的用途分类，反而让我更重视原有区分：**做什么业务，与以什么方式持续跟进，是两条不同的比较轴。** 后续仍按发现、准备、批准、提交和生效逐步验收。

原始依据与日期分别见[灵光资料索引](../lingguang/references/)和[Today 资料索引](../today/references/)，当前清单见[新增跟踪](../research-list/#新增跟踪灵光与-today)。
