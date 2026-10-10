---
title: "启动速度"
linkTitle: "启动速度"
weight: 100
date: 2025-11-13
description: >
  crewAI 的启动速度
---

## 部署

参考: 

https://github.com/letta-ai/letta?tab=readme-ov-file#simple-hello-world-example

### 准备工作

以 python 为例: 

```bash
pip install letta-client
```

登录 letta, 获取 api key.

```bash
export LETTA_API_KEY="sk-let-NTExNDRjZjxxxxxxx2OA=="
```

为了访问 letta 的服务器, 需要科学上网. 如果用的是 socks 代码, 则需要安装 pip 包: 

```bash
pip install "httpx[socks]"
```

### 编写 agent

```bash
mkdir -p ~/work/code/agents/letta/hellowworld
cd ~/work/code/agents/letta/hellowworld

vi main.py
```

输入内容:

```python
import os
import time
import psutil
from letta_client import Letta

# 记录程序开始时间
start_time = time.perf_counter()

# Connect to Letta Cloud (get your API key at https://app.letta.com/api-keys)
client = Letta(api_key=os.getenv("LETTA_API_KEY"))
# 如果是自托管，可以改成：
# client = Letta(base_url="http://localhost:8283", embedding="openai/text-embedding-3-small")

agent_state = client.agents.create(
    model="openai/gpt-4.1",
    memory_blocks=[
        {
          "label": "human",
          "value": "The human's name is Chad. They like vibe coding."
        },
        {
          "label": "persona",
          "value": "My name is Sam, a helpful assistant."
        }
    ],
    tools=["web_search", "run_code"]
)

# 在创建 agent 完成后，记录时间
elapsed = (time.perf_counter() - start_time) * 1000  # 毫秒

# 获取当前进程内存占用
process = psutil.Process()
mem = process.memory_info().rss / (1024 * 1024)  # MB

# 打印启动时间和内存占用
print(f"程序启动时间: {elapsed:.0f} ms, 内存占用: {mem:.2f} MB")

# 打印 agent id
print(agent_state.id)

response = client.agents.messages.create(
    agent_id=agent_state.id,
    messages=[
        {
            "role": "user",
            "content": "Hey, nice to meet you, my name is Brad."
        }
    ]
)

# 打印响应消息
for message in response.messages:
    print(message)
```

代码在官方 example 基础上增加了启动时间打印和内存使用打印.

运行:

```bash
# 开启 http 代理
# proxyon

python main.py
```

输出为:

```bash
程序启动时间: 1058 ms, 内存占用: 52.19 MB
agent-9d98c82e-4d4c-4d9e-a97d-187a30b52756
AssistantMessage(id='message-d567f53e-a4cc-42c2-9a24-4051c58fe305', content='Hey Brad, nice to meet you too! If there’s anything you want to work on or chat about, just let me know.', date=datetime.datetime(2025, 11, 21, 10, 35, 24, tzinfo=TzInfo(UTC)), is_err=None, message_type='assistant_message', name=None, otid='d567f53e-a4cc-42c2-9a24-4051c58fe300', run_id='run-3ae41158-73f2-45e7-be1b-3558254d9163', sender_id=None, seq_id=None, step_id='step-2535b417-86d8-4279-a56f-7e481f96ad72')
```

多测试几次, 数据为:

- 程序启动时间: 1052 ms, 内存占用: 52.30 MB
- 程序启动时间: 1173 ms, 内存占用: 52.66 MB
- 程序启动时间: 992 ms, 内存占用: 52.03 MB

所以启动时间大概是 1000 ms, 内存占用 52 MB.

注意: 这里启动不够快的主要原因可能是创建 client 时需要和服务器端建立连接, 而服务器端在国外访问速度慢, 如果服务器端在本地部署, 应该可以快很多.

注意2: 这里用快照启动没有意义, 因此 client 建立的连接在快照恢复时会无效, 只能冷启动.


