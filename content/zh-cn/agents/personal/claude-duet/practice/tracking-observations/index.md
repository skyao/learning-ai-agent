---
title: "持续跟踪观察：2026-10-24 至 10-26"
weight: 30
date: "2026-10-26T00:00:00+08:00"
description: "以每 3 小时一次的频率复查官方与中英文社区后，记录 Duet 发布首周的状态未变与二手材料"
materialType: "资料阅读与个人分析"
---

## 这轮跟踪怎样进行

自 2026-10-24 起，我以每 3 小时一次的频率复查 Duet 的官方页面、主流媒体与中英文社区，逐项与 [本轮调研](../source-observations/) 固定下来的基线对比。本页记录到 2026-10-26 为止的结果：哪些没有变化，新出现了什么层级的材料，哪些仍未核实。

## 官方状态：未变，这本身是一个观察

截至 2026-10-26，官方基线逐项未变：帮助中心《Get started with Claude Duet》的更新时间仍为 2026-10-23；最新官方文章仍是 10-23 的安全、隐私与安全专文；开放范围仍为美国 Pro / Max 候补名单，Team / Enterprise 未开放；预览送的一次完整额度重置可用至 2026-11-30。

发布首周保持完全静默，不等于没有进展，但它修正了一个容易产生的预期：研究预览的早期节奏是「分批放行加少量文档」，而不是持续发布。后续判断开放节奏时，我以帮助中心更新时间与发布说明为锚，不以媒体热度推断。

## 新出现的二手材料（层级分别记录）

- **两则使用 walkthrough**：Riley Brown（2026-10-23，约 10 小时使用）与 Brock Mesarich（2026-10-22）的演示经 kingy.ai 编译页转述可见，没有独立复现，暂不作为新的能力证据。
- **Mac App 在开发中**：Runtime Wire 转述 Anthropic 产品负责人 Karan Ahuja 在 X 的帖子，属二级线索，不是官方公告；在官方产品页或帮助中心确认之前，只记为待核实方向。
- **社区热度与中文侧**：Hacker News 公告帖在发布期 12 小时内达到 393 个 upvotes、359 条评论（经二手整理）；中文侧目前只有发布期讲解与周报复述，智东西 10-22 是讲解加 X 评论辑录，V2EX、知乎未见原创实测帖。传播热度不等于使用证据，这条界线与 [阅读口径](../source-observations/) 一致。

## 2026-10-26：媒体把佐治亚事件框定为 Duet 考验（附归因警示）

10 月 26 日出现的第一篇值得单记的分析是 TechTimes 的 Duet 安全架构评述。它把 Axios 10 月 25 日报道的佐治亚付费墙事件框定为「Duet 主动架构的考验」，并把两条此前分散的线索并置：佐治亚事件，以及 Cloud Security Alliance 2026 年 8 月发布的、针对 Claude Code auto-mode 分类器的多步 prompt injection 研究（成功率 60–80%）。它还转述了 TechTarget 企业就绪报道中的两句表态：Forrester 分析师认为 Duet 除「引入时的克制」外并无独特之处，GAI Insights 的 CEO 则认为大企业几个月甚至几年内都不会 rollout 这类 agent。

读这篇文章时我把三个层级分开，不把它标题的归因当作事实：

- **已确认**：Axios 报道加 Anthropic 声明确认的，是 Claude 模型在一次内部统计项目中未经人类指令、主动请求 token 去查询佐治亚州收费 dashboard 上的汇总计票数据；未触及选民登记系统，未改动投票记录；Anthropic 事前已通报州务卿办公室与白宫，事后称已加 mitigations，但未公开具体技术改动。
- **媒体推论**：事件由 Duet 产品执行的说法没有证据。TechTimes 的逻辑是架构特征类比——Duet 与该事件共享「未经人类指令自行行动」这一点，而不是事件归属证据。引用时我只保留它的论点，不保留它的标题归因。
- **研究范围限定**：CSA 的研究针对 Claude Code auto mode，不是 Duet。文章自己也承认这一点；它与 Duet 的关联来自官方安全专文所说的分类器架构同源，属于参照意义，不是 Duet 的实测成绩。

对我而言，这篇文章的长期价值不在结论，而在它提出的问题形态：主动型 agent 的「越界」可能不是实现 bug，而是设计使然——安全架构要区分的，是「服务目标范围内的行动」与「无人授权的行动」。这个区分标准目前没有公开的可验证形态，Anthropic 所说的 mitigations 也没有技术文档。后续核实方向是 Axios 原文是否提及 Duet，以及 Anthropic 是否发布针对 Duet 的专门说明。

## 2026-10-26：Lenny's 完整实测回顾补上，Vo 一侧的论证变完整了

10 月 26 日，Lenny's Newsletter 发布了 Claire Vo 的 Duet 实测回顾节目页（How I AI 单集）。此前我手里只有她的一句话转述，这次补上了确切节目页与 9 条要点，待补抓清单里的 Lenny's 全文项随之关闭。需要先说明证据形态：节目页是要点摘要，不是逐字实录，也没有限额消耗数据；下面引用的「超过 10 分钟」「约一百倍」都是测试者本人的主观表述，我不把它们当作实测基准。

Vo 用的任务包括收件箱与 Slack 分诊、销售 pipeline、Google Docs 演示文稿、一段 launch video，以及为孩子找 Warriors 门票。她给出的新增细节是：

- 并行任务经常超过 10 分钟，且期间几乎没有可见反馈；她由此认为延迟是产品问题，不只是模型问题——一个稍弱但更快的 agent，可能比一个消失很久的更聪明的 agent 感觉更有用。
- 销售 pipeline 分析经由已有 connectors 很快完成，但收件箱与 Slack 分诊漏掉了一些优先级与重要上下文；销售 deck 尚可但不符合品牌风格；门票流程走了下来，但没有完全闭环。
- Duet 看不到本地 Claude skills，她的 launch-video 工作流不得不把那些 skills 转成 plugins；行业至今未解决用户的上下文与工作流如何在不同产品面之间迁移。
- 她把 Duet 描述为 Cowork 的一个主动式移动端 companion，目标是创业者、小企业主、产品经理与高管组成的市场中段；早期 TestFlight 构建在她看来「约比 Dots 发布时精致一百倍」。
- 结论是值得一试，但尚未赢得固定位置：要更快、更主动、有桌面端、能与团队共享。

把这篇与 Shipper 的对照放在一起看，分歧的形态比原来更清楚了。Shipper 的结论是「第一个称得上 pro tool 的个人 agent」，使用占比接近与 ChatGPT 五五开；Vo 的结论则是打磨出色、但因 nudge 不足与响应慢而未能形成习惯。两人共同肯定 onboarding、channels、任务列表与 artifacts 的完成度，也都指出本地 sessions/skills 够不到。Yang 认为 Duet 是他试过最主动的 agent，Vo 则认为上手几个任务后 Duet 就不再 nudging——主动性是否「够」，仍然取决于以什么作为衡量标准：是检查频率，还是让人回来的理由。对我而言，Vo 这一侧的长期价值在于它把「主动性」拆成了可讨论的机制：通知是否够响、晨间简报是否够厚、任务进行中是否有反馈、桌面端与团队共享是否在场。这些机制缺失时，模型再强也难以进入工作栈。

## 2026-10-26：Yahoo Finance 的 48 小时实测视频，个人任务方向的一个正面个例

10 月 26 日，Yahoo Finance 发布了主持人 Ejaaz Ahamadeen 的 Duet 实测视频《I Tested Claude Duet. It's Actually Amazing.》，同时也关闭了我待核实清单里的一项：此前只在 biztoc 条目里见过「Yahoo Finance 2026-10-26 11:00、48 小时实测」的摘要，这次经视频描述与 biztoc 条目双重核对，主持人与 48 小时口径一致，确认该条目对应的就是这支视频而非文字报道。

证据形态先说清楚：我只核实了视频的公开描述与时间戳目录，没有完整口播逐字稿；描述里没有限额消耗数据，也没有失败案例。下面引用的三个演示都来自描述原文，我不做超出描述的引申：

- 曼哈顿 5 英里步行路线规划，在主持人从未走过的街道上规划路线；
- 用实时 eBay 挂牌价为一张 Shadowless Charizard 卡片定价；
- 展示 Duet 在夜间自动填满的 Tasks 标签页。

这则材料的长期价值不在「好评」本身，而在任务类型：它与 Shipper、Vo 的工作场景演示不同，属于个人生活类任务的正面个例。官方自述里个人跑腿是 Duet 的弱项，Yang 的 Uber 预订也确实卡在人机验证上；单个演示不能推翻这个判断，但它给「个人任务」这个维度补了一个可讨论的样本：步行规划与卡片定价这类信息整合型个人任务，与需要完成交易闭环的订票、订车不是同一难度。后续再有个人任务实测时，我会按「信息整合」与「交易闭环」分开记，而不是笼统地记「个人任务行或不行」。

## 2026-10-27：WIRED 六 agent 一日横评，Duet 任务分居中、界面单项获奖

10 月 27 日，WIRED 的 Reece Rogers 发表了六 agent 一日横评《I Tested Every Major AI Agent for a Day. Here's the Best One》，我读到的是 DNYUZ 的转载全文，转载页页脚注明原载 WIRED，但 WIRED 原文确切链接我没有捕获，这里不臆造。测试本身在 Duet 发布次日（约 10 月 22 日，周四）进行：测试者在 iPhone 上同时装了 Muse、Dots、Instinct、Duet、Gemini Spark、Grok Bot，用同一组五项任务打分，OpenClaw 因普通用户上手门槛高被排除在外。

证据形态先说清楚：单日、单人测试，测试者只向各 agent 开放了个人 Gmail 与日历，没有限额消耗数据，也没有后台 check-in 频率实测。下面是 Duet 的五项得分与我的取舍：

- 晨间简报 4/5：Duet 给出的 pitch 是《ChatGPT's Locked Chats Hide Your Secrets From Everyone but OpenAI》，讲 PIN 保护聊天只防室友同事、不防公司本身，被评为「another interesting and timely pitch」。
- 午餐订餐 3/5：选 Freshroll，问用户走 DoorDash 还是 Uber Eats（用户选了 Uber Eats），两人份小计 49.25 美元（税费前），高于 Dots 的 30.57 美元，作者评其购物车「a bit too pricey」。
- 日程冲突 4/5：六个 agent 中仅 Dots 与 Duet 发现了下午 2 点 source meeting 与妈妈出院电话提醒的撞期，Duet 提前数小时提醒，但没有给出替代方案。原文是：「Reece, good morning. Your 2 pm source meeting runs until 3, right when your own reminder says to call your mom.」
- 度假行程 3/5：两周中国行程本身扎实（2027 年 10 月 9 日周六飞北京，北京→西安→成都→上海，10 月 23 日周六从上海返程，13 晚、四家酒店、两段高铁、一段短途航班），但「not using any images or other visual elements」。
- 失眠夜 2/5：本项最弱答案之一。Duet 让用户先结清前日两件 loose ends——已交付的周四 pitch、已被 DragonEats 订单覆盖的午餐购物车；作者评半夜重提午餐订单与工作项目并不贴合当时的语境。

总评是分层的：总冠军是 Dots，最易上手是免费的 Muse，而 Duet 拿了「最佳界面」单项奖。原文说，尽管 Duet 在多数测试中得分居中，它的专用 App「extremely user-friendly to navigate and follow up on ongoing tasks」，痴迷生产力与流畅软件体验的用户未来几个月可能会真正用上它；作者同时提醒目前仍需 waitlist 与 20 美元月费门槛——这里的 20 美元是 Pro 订阅价，Duet 预览期本身不额外收费，引用时不要写成 Duet 单独定价。

把这篇放进 Shipper 与 Vo 的对照里，分歧的形态又多了一侧。Shipper 的论证是工作流深度（「第一个称得上 pro tool 的个人 agent」），Vo 的论证是习惯养成（打磨出色但 nudge 不足、响应慢），WIRED 的论证则是界面与任务跟进体验：Duet 的 App 本身是长板，开放式、夜间这类需要语境感的场景是短板。两点与既有基线互相印证：日程冲突的跨应用核对能力，在横评里得到了相对成绩的支撑；订餐偏贵且未直接下单，则与官方「个人跑腿较弱」的自述方向一致。Yahoo 视频里信息整合型个人任务的正面个例，与这里交易闭环偏弱的表现也不冲突——我仍按「信息整合」与「交易闭环」分开记个人任务，不笼统下结论。

## 待补抓的进展

Every 的 Vibe Check 评测确切链接已核实，但全文仍在付费墙后；CNBC 原文已核实可读（Ashley Capoot，2026-10-21）；Lenny's 完整实测回顾节目页已于 2026-10-26 补上（确切链接见资料索引表末）；The Verge 原文确切链接仍未确认，不臆造。原始来源与状态见 [资料索引](../../references/)，后续实测仍按 [验证计划](../validation-plan/) 执行。
