---
title: "FIPA 与 ACL（1996 起）"
linkTitle: "[协议]FIPA / ACL"
分类: "协议"
标签:
  - "警示"
weight: 70
date: 2026-09-14
description: >
  为异构 Agent 规定平台、通信语言与交互协议。规范制定完成，但未成为业界默认。
---

组织与规范：[FIPA](https://www.fipa.org/)（Foundation for Intelligent Physical Agents）。1996 年 4 月在伦敦 Imperial College 讨论建制，1996 年 9 月在日内瓦登记为瑞士非营利协会，目标是为异构、会交互的 Agent 与 Agent 系统编写软件标准。第一批规范以 FIPA 97 发布。2005 年 6 月 8 日，FIPA 成为 IEEE Computer Society 的标准委员会。现行规范仍集中在 fipa.org 的 Repository。

直接相关的规范包括：FIPA 97 第 1 部分 Agent Management、第 2 部分 Agent Communication Language；其后拆成的 *FIPA ACL Message Structure Specification*（SC00061）、*FIPA Communicative Act Library Specification*（SC00037）、*FIPA Contract Net Interaction Protocol Specification*（SC00029）等。

## 这个概念是什么

FIPA 要规定的不是某一个演示程序，而是**不同厂商实现的 Agent 如何互操作**。互操作被拆成三层，需要同时成立：

1. **Agent 平台**：Agent 如何被命名、创建、注销、定位；如何被目录检索。
2. **通信语言 ACL**：消息不是自由文本，而是带施事语力（performative）的言语行为，并带有发送者、接收者、内容、语言、本体、协议、会话标识等字段。
3. **交互协议**：在 ACL 之上规定一类对话的合法消息顺序，例如请求、查询、合同网招标。

ACL 的语义建立在言语行为理论（Austin、Searle）上，并把前提条件与理性效果写在发送者、接收者的心智状态中——与 [BDI](../bdi/) 使用同一类词汇（信念、意图）。内容本身另用内容语言写出，双方还须共享**本体**，否则谓词没有共同指称。

### 关键术语：言语行为

FIPA ACL 把消息当作**行为**，而不是一段文本。这来自语言学里的言语行为理论（Austin、Searle）：说话本身就是在做事。

同一句话说出来，可以是通知，可以是请求，也可以是承诺。区分它们的不是内容，而是**施事语力**（illocutionary force）。FIPA 把它写成消息的一个字段：`inform` 表示「我通知你某命题，并且我相信它」，`request` 表示「我请求你去执行某个动作」。内容字符串相同，施事语力不同，对话中的义务就不同。

这条设计有两个直接后果。

一是 ACL 的语义写在**参与者的信念与意图**上，用的是与 [BDI](../bdi/) 同一套词汇。`inform` 的规范语义是「发送者相信该命题，且意图使接收者也相信」。代价是心智状态无法从外部观察，这些语义作为合规标准时难以验证。

二是只有消息格式还不够，双方还要**共享本体**。`weather(today, raining)` 这段内容，只有在双方对 `weather`、`today`、`raining` 的指称理解一致时才有意义；字段 `ontology` 就是用来声明这一点的。共享本体的成本高，是 FIPA 生态没有长起来的原因之一。

## 材料的主要内容

### Agent 平台

FIPA 的 Agent 平台（Agent Platform）是 Agent 的运行与管理环境，规范中的核心服务包括：

| 组件 | 职责 |
| --- | --- |
| AMS（Agent Management System） | 白页：Agent 标识、生命周期（创建、挂起、终止）、平台权威 |
| DF（Directory Facilitator） | 黄页：Agent 注册自己能提供的服务，供其他 Agent 按服务描述查找 |
| MTS / ACC（消息传输 / Agent 通信通道） | 在平台之内以及平台之间传递 ACL 消息 |

一个符合规范的 Agent 通过 AMS 获得标识，通过 DF 被发现，通过 MTS 收发 ACL。这与后来 Web 服务的注册—发现—调用在问题上同类，但绑定的是 Agent 标识与言语行为，而不是 HTTP 资源。

### ACL 消息结构

一条 FIPA ACL 消息的主要字段（SC00061）包括：

| 字段 | 作用 |
| --- | --- |
| performative | 施事语力，决定这条消息在做什么（通知、请求、招标等） |
| sender / receiver | 发送者与接收者的 Agent 标识 |
| content | 内容，其含义相对于 language 与 ontology |
| language | 内容语言（例如 SL、Prolog） |
| ontology | 内容中谓词与常量所属的本体 |
| protocol | 所遵循的交互协议名称 |
| conversation-id | 会话标识，把多条消息绑成一次对话 |
| reply-with / in-reply-to | 用于把回复对齐到先前消息 |

示意（字段值仅为说明结构）：

```text
(inform
  :sender   (agent-identifier :name agent-a)
  :receiver (agent-identifier :name agent-b)
  :content  "weather(today, raining)"
  :language Prolog
  :ontology weather-ontology
  :protocol fipa-request
  :conversation-id conv-001)
```

`inform` 表示发送者通知接收者某命题，并且（按规范语义）发送者相信该命题，且意图使接收者也相信。若换成 `request`，内容则是发送者意图使接收者执行的行动。同一段内容字符串，施事语力不同，对话中的义务就不同。

### 交际行为库

SC00037 给出交际行为（communicative act）库。常用的包括：

| 交际行为 | 直观作用 |
| --- | --- |
| inform / confirm / disconfirm | 通知或（不）确认一个命题 |
| request / request-when / request-whenever | 请求对方现在、在条件成立时、或每当条件成立时行动 |
| query-if / query-ref | 询问命题真假，或询问使公式成立的项 |
| cfp | 招标（call for proposals），合同网的起点 |
| propose / accept-proposal / reject-proposal | 提出、接受、拒绝提案 |
| agree / refuse | 同意或拒绝先前的请求 |
| failure / not-understood | 执行失败，或不理解对方消息 |
| subscribe | 订阅此后满足某条件的通知 |
| cancel | 取消先前请求 |

每个行为的规范语义用 SL（Semantic Language）写出可行性前提与理性效果，绑定在参与者的信念与意图上。后续分析文献指出一个困难：心智状态不可从外部观察，因此这些语义作为**规范性**标准时难以验证（见 Pitt & Mamdani 等对 FIPA ACL 语义的讨论）。作为实现者的指引，行为库仍然给出了消息类型的稳定清单。

### 交互协议：以合同网为例

FIPA 把 [Contract Net](../contract-net/) 收成 *FIPA Contract Net Interaction Protocol*（SC00029）。消息顺序被规定为：发起者发出 `cfp` → 参与者回复 `propose` 或 `refuse` → 发起者 `accept-proposal` 或 `reject-proposal` → 被接受的参与者返回 `inform`（结果）或 `failure`。协议图还处理超时、取消、not-understood。相对 1980 年论文，这里把协商从「一种应用层约定」提升为「可被不同实现共同遵守的会话类型」，并且每一步都必须是合法的 ACL 交际行为。

FIPA 另外还规定了 request、query、若干拍卖类协议。设计意图是：只要双方声明同一 protocol 与 ontology，异构实现可以完成同类对话。

### 规范与生态的结果

FIPA 完成了规范文本，并在 Agentcities 等项目中做过互操作试验。它没有成为与 HTTP 同级的互联网默认栈。后来文献中反复出现的原因包括：共享本体成本高；语义绑定在不可观察的心智状态上，符合性测试困难；缺少类似浏览器那样的大规模宿主应用；Web 服务与 REST 从另一侧接手了系统集成。规范仍可查阅；当代软件工程日常栈几乎不经过 AMS/DF/ACL。

2005 年并入 IEEE，说明标准组织身份还在，不等于生态已经长成。

## 关键术语

| 术语 | 在这套规范里的含义 |
| --- | --- |
| Agent 平台 | AMS + DF + 消息传输构成的管理与通信环境 |
| ACL | 带施事语力与会话字段的消息语言 |
| 交际行为 / performative | 消息在对话中所实施的那种行为 |
| 本体 | 内容语言中符号的共享词汇与约束 |
| 交互协议 | 合法消息顺序，例如 FIPA-Contract-Net |
| SL | 用于书写 ACL 语义的逻辑语言 |

## 和 AI Agent 的关系

**FIPA 为异构 Agent 规定平台、通信语言与交互协议，是 Agent 互操作最早的系统尝试。规范完成，但未成为业界默认。**

它的循环由交互协议规定：会话期内有请求、回复、失败、取消，消息是动作，对方的 ACL 是观察。决策核心不在规范里：规范假定参与者已经是 Agent，其内部如何选择下一步（规则、BDI、规划器）由实现自定，不是 LLM。

时间线上这是明确的**标准建立型**节点，结果偏警示：规范可以写完，生态可以不出现。2024 年的 MCP 与 2025 年的 A2A 处理的问题分别是「模型如何接工具」和「Agent 如何接 Agent」。它们出现在 ChatGPT、Claude 等产品已经存在之后，是把已经在用的调用方式收敛为事实标准，与 FIPA「先写全规范再等待实现」的顺序相反。不是同一套协议的版本迭代。
