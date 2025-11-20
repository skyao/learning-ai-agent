---
title: "启动速度"
linkTitle: "启动速度"
weight: 100
date: 2025-11-13
description: >
  LangChain Agent 的启动速度
---

### 开发agent

参考: 

https://docs.langchain.com/oss/python/langchain/quickstart

安装依赖:

```bash
pip install fastapi uvicorn langchain langchain-openai langchain-anthropic psutil
```

开发一个简单的 agent

```bash
mkdir -p work/code/agents/langchain/basic-agent
cd work/code/agents/langchain/basic-agent
```

```bash
vi main.py
```

参考官方 example, 加入 psutil 获取内存信息.

内容为:

```python
import os
import time
import psutil
from langchain.agents import create_agent
from langchain_openai import ChatOpenAI

# 记录启动时间
start_time = time.perf_counter()

def get_weather(city: str) -> str:
    """Get weather for a given city."""
    return f"It's always sunny in {city}!"

# 从通用环境变量读取配置
llm = ChatOpenAI(
    model="openai/gpt-5-mini",
    api_key=os.getenv("OPENAI_API_KEY"),
    base_url="https://openrouter.ai/api/v1",
)

# 创建 Agent —— 注意这里传的是 llm 对象
agent = create_agent(
    model=llm,
    tools=[get_weather],
    system_prompt="You are a helpful assistant",
)

# 计算启动耗时和内存占用
elapsed = (time.perf_counter() - start_time) * 1000  # 毫秒
process = psutil.Process()
mem = process.memory_info().rss / (1024 * 1024)  # MB

print(f"Agent 启动完成: {elapsed:.0f} ms, 内存占用 {mem:.2f} MB")

# 运行 Agent
result = agent.invoke(
    {"messages": [{"role": "user", "content": "what is the weather in sf"}]}
)
print(result)
```

设置 API key:

```bash
export OPENAI_API_KEY="sk-or-v1-8b367db75f582bxxxxx"
```

### 启动速度

测试方式:

```bash
cd ~/work/code/agents/langchain/basic-agent

python main.py

Agent 启动完成: 133 ms, 内存占用 82.59 MB

{'messages': [HumanMessage(content='what is the weather in sf', additional_kwargs={}, response_metadata={}, id='8104aa20-7052-48a2-bfdc-8ca56fe8ab0e'), AIMessage(content='', additional_kwargs={'refusal': None}, response_metadata={'token_usage': {'completion_tokens': 85, 'prompt_tokens': 61, 'total_tokens': 146, 'completion_tokens_details': {'accepted_prediction_tokens': None, 'audio_tokens': None, 'reasoning_tokens': 64, 'rejected_prediction_tokens': None}, 'prompt_tokens_details': None}, 'model_provider': 'openai', 'model_name': 'openai/gpt-5-mini', 'system_fingerprint': None, 'id': 'gen-1763626368-7nC7HDrc2SUlvwBTJ1qL', 'finish_reason': 'tool_calls', 'logprobs': None}, id='lc_run--7c2d184f-8b13-410d-9270-c145cf361d9f-0', tool_calls=[{'name': 'get_weather', 'args': {'city': 'San Francisco'}, 'id': 'call_gXwuk067eb5j2JUuC20HKcf3', 'type': 'tool_call'}], usage_metadata={'input_tokens': 61, 'output_tokens': 85, 'total_tokens': 146, 'input_token_details': {}, 'output_token_details': {'reasoning': 64}}), ToolMessage(content="It's always sunny in San Francisco!", name='get_weather', id='9e490eb6-2be0-442b-8d9e-5220894b83c9', tool_call_id='call_gXwuk067eb5j2JUuC20HKcf3'), AIMessage(content='According to the weather service: "It\'s always sunny in San Francisco!" \n\nWould you like current temperature, an hourly forecast, or a 7-day outlook?', additional_kwargs={'refusal': None}, response_metadata={'token_usage': {'completion_tokens': 166, 'prompt_tokens': 96, 'total_tokens': 262, 'completion_tokens_details': {'accepted_prediction_tokens': None, 'audio_tokens': None, 'reasoning_tokens': 128, 'rejected_prediction_tokens': None}, 'prompt_tokens_details': None}, 'model_provider': 'openai', 'model_name': 'openai/gpt-5-mini', 'system_fingerprint': None, 'id': 'gen-1763626375-XJVfCoGQ0ddWXdiAhwjm', 'finish_reason': 'stop', 'logprobs': None}, id='lc_run--f2e476bd-e193-4df8-b066-fd6f345a6bb1-0', usage_metadata={'input_tokens': 96, 'output_tokens': 166, 'total_tokens': 262, 'input_token_details': {}, 'output_token_details': {'reasoning': 128}})]}

```

测试 5 次:

133 ms, 内存占用 82.59 MB
133 ms, 内存占用 82.25 MB
133 ms, 内存占用 82.07 MB
134 ms, 内存占用 82.36 MB
133 ms, 内存占用 82.41 MB

平均值为 133 ms, 内存占用 82.5 MB

