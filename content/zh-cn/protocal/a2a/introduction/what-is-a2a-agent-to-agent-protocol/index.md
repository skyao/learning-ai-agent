---
title: "什么是 A2A？"
linkTitle: "什么是 A2A？"
weight: 20
date: 2025-06-10
description: >
  什么是 A2A？
---

https://medium.com/@akash22675/what-is-a2a-agent-to-agent-protocol-d2325a41633a

-----


代理到代理协议（Agent to Agent Protocol / A2A） 是一个标准化的通信框架，使 AI agent 代理能够以一致、可预测的方式相互交互。A2A 由 Google 发布，并被包括 Intuitive，LangChain 和 MongoDB 在内的多家公司采用，它为不同的 AI agent 提供了基础设施，以便在复杂的任务上进行有效的协作。

![](https://miro.medium.com/v2/resize:fit:1400/format:webp/1*ZT3FKSRSWQUn7hClQqYS5Q.png)

## A2A 协议的核心概念

### A2A 解决了什么问题?

在现代人工智能应用中，复杂的任务通常需要多个专业代理的专业知识。例如，计划旅行可能涉及专门从事机票预订，酒店推荐和当地活动的代理商。如果没有标准化的协议，这些代理中的每一个都需要自定义集成代码来相互通信，从而导致：

- 不一致的通信模式
- 不兼容的数据格式
- 维护和更新困难
- 有限的互操作性

A2A 通过为代理建立标准方法来解决这些问题：

- 发现彼此的能力
- 交换信息
- 协作处理任务
- 处理错误和异常

### A2A 与 MCP（模型上下文协议）

虽然这些协议看起来相似，但它们用于不同的目的：

![](https://miro.medium.com/v2/resize:fit:1400/1*atVPjDKGy8PMCP-pBH9McQ.png)


- MCP（Model Context Protocol）

  专注于语言模型如何与工具和资源（如 API、数据库和知识源）进行通信。把 MCP 看作是机械师如何与他们的工具进行交互，您可以在这里阅读更多上下文。

- A2A

  A2A（Agent to Agent Protocol）：专注于完整的代理（每个代理包含一个 LLM 加上工具）如何相互通信。A2A 是机械师与客户或零件供应商沟通的方式。

一个有用的类比：如果一个代理就像一个汽车维修人员（LLM）与他们的工具箱（通过 MCP 连接的工具），那么 A2A 定义了这个汽车维修人员如何与客户，零件供应商和其他专家进行沟通。

## A2A 的主要组成部分

### Agent Card

代理卡是代理用来向其他代理通告其能力的标准化描述。将 Agent Card 视为名片或个人资料，其中包括：

![](https://miro.medium.com/v2/resize:fit:1400/1*Djco_u68IbSrgC2YoUhd0Q.png)

代理卡示例（JSON 格式）：

```json
{
  "name": "Google Maps Agent",
  "description": "An agent that helps with map-related tasks",
  "url": "https://maps-agent.example.com",
  "provider": {
    "name": "Google",
    "url": "https://google.com"
  },
  "capabilities": [
    {
      "type": "route_planning",
      "description": "Plan routes between locations"
    },
    {
      "type": "custom_map",
      "description": "Create custom maps with points of interest"
    }
  ]
}
```

### 代理发现

为了让代理进行协作，它们首先需要发现彼此。A2A 支持多种发现方法：

![](https://miro.medium.com/v2/resize:fit:1400/1*P1VGK8ufJFTHsoxRm4vDBQ.jpeg)

- 基于 DNS 的发现 ：客户端可以通过解析域名找到 agent.json 文件来发现代理。
- 基于注册表的发现 ：应用程序维护受信任代理的注册表。
- 私有发现 ：已知代理端点的直接配置。

### 任务处理流程

A2A 协议定义了代理之间的任务处理的标准流程：

![](https://miro.medium.com/v2/resize:fit:1394/1*HcJ9pDnM8tO_iolJt_AY6Q.png)

A2A 中的任务遵循标准格式，通常用 JSON 表示：

```json
{
  "task": {
    "input": "Tell me a joke",
    "instructions": "Generate a short, family-friendly joke"
  }
}
```

## 通信协议

A2A 基于已建立的通信协议：

- HTTP/HTTPS：用于基本的请求/响应通信
- JSON-RPC：用于结构化方法调用
- 服务器发送事件（Server-Sent Events / SSE）：用于流响应
- JSON：作为标准数据交换格式

### 高级功能

A2A 支持多个高级功能，可实现强大的 agent 交互：

- 多模式通信 ：处理文本、图像、音频和其他数据类型
- 流 ：对长时间运行的任务进行实时流响应
- 错误处理 ：标准化的错误格式，以便更好地调试
- 澄清请求 ：agent 提出后续问题的能力

![](https://miro.medium.com/v2/resize:fit:754/1*fPldXUZJNvz4pNmLJ3Lp-g.png)



## 实用 A2A 实现

让我们看看 A2A 在实际实现中的样子：

### 示例：报销代理

```javascript
// Agent Card Definition
const agentCard = {
  name: "Expense Reimbursement Agent",
  description: "An agent that processes expense reimbursement requests",
  url: "https://reimbursement.example.com",
  provider: {
    name: "Financial Services Inc.",
    url: "https://financial-services.example.com"
  },
  capabilities: [
    {
      type: "process_reimbursement",
      description: "Process expense receipts and generate reimbursement forms"
    }
  ]
};

// Agent Implementation
class ReimbursementAgent {
  constructor() {
    this.llm = new GeminiModel("gemini-2.0-flash");
    this.tools = [
      new ReceiptParser(),
      new PolicyValidator(),
      new FormGenerator()
    ];
  }
  
  async processTask(task) {
    // Process the task using LLM and tools
    const parsedReceipt = await this.tools[0].execute(task.input);
    const validationResult = await this.tools[1].execute(parsedReceipt);
    
    if (validationResult.needsClarification) {
      return {
        type: "clarification_request",
        question: validationResult.question
      };
    }
    
    const reimbursementForm = await this.tools[2].execute(validationResult);
    return {
      type: "task_complete",
      result: reimbursementForm
    };
  }
}
```

### 真实世界的 A2A 工作流程示例

为了更好地理解 A2A 的实际应用，让我们来看看一个真实的示例：

![](https://miro.medium.com/v2/resize:fit:1400/1*hftzUO-xEiZMjX9WX_zNug.png)

在本例中：

- HR 经理在 Google Agent Workspace 中与客户端代理交互
- 客户端代理发现并与专门的代理进行通信，以确定候选人来源和安排面试
- 代理商在需要时提出澄清问题
- 每个代理使用自己的工具和资源执行其专门功能
- 客户端代理协调整个工作流并将结果呈现给用户


## A2A 协议的优点

- 标准化通信 ：代理交互的一致方式，无需自定义集成
- 可组合性 ：易于联合专用代理以执行复杂任务
- 发现 ：发现可用代理及其能力的机制
- 互操作性 ：来自不同提供商的代理可以一起工作
- 可扩展性 ：新的代理类型可以加入生态系统

## 现状和未来潜力

Agent to Agent Protocol 仍处于早期阶段，最近由 Google 发布。虽然许多公司已经开始采用该协议，但该协议的全面影响和演变将随着时间的推移而展开。

主要发展领域包括：

- 安全和认证标准
- 更复杂的代理发现机制
- 高级错误处理和恢复
- 跨平台代理兼容性
- 与现有 AI 生态系统的整合

Agent to Agent Protocol（A2A）是创建更具协作性的人工智能生态系统的重要一步。通过标准化代理之间的通信方式，A2A 可以实现更复杂的多代理解决方案，而无需为每个代理配对进行自定义集成。
