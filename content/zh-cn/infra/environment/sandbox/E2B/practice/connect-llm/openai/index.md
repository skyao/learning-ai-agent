---
title: "OpenAI"
linkTitle: "OpenAI"
weight: 10
date: 2025-05-27
description: >
  在 E2B 中连接OpenAI
---

## 准备工作

```bash
pip install openai e2b-code-interpreter
```

准备 openai 的 key, 设置环境变量:

```bash
export OPENAI_API_KEY=sk-proj-1234567890
```

### 简单调用

```bash
mkdir -p ~/work/code/e2b/connect-llm/openai-python
cd ~/work/code/e2b/connect-llm/openai-python
```

新建一个 python 文件:

```python
vi connect-llm-openai.py
```

内容为:

```python
# pip install openai e2b-code-interpreter
from openai import OpenAI
from e2b_code_interpreter import Sandbox

# Create OpenAI client
client = OpenAI()
system = "You are a helpful assistant that can execute python code in a Jupyter notebook. Only respond with the code to be executed and nothing else. Strip backticks in code blocks."
prompt = "Calculate how many r's are in the word 'strawberry'"

# Send messages to OpenAI API
response = client.chat.completions.create(
    model="gpt-4o",
    messages=[
        {"role": "system", "content": system},
        {"role": "user", "content": prompt}
    ]
)

# Extract the code from the response
code = response.choices[0].message.content

# Execute code in E2B Sandbox
if code:
    with Sandbox() as sandbox:
        execution = sandbox.run_code(code)
        result = execution.text

    print(result)
```

运行:

```bash
python connect-llm-openai.py
```

输出为:

```bash
2
```

