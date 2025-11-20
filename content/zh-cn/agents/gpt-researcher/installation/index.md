---
title: "安装"
linkTitle: "安装"
weight: 10
date: 2025-11-13
description: >
  GPT Researcher安装
---

## linux mint

### 准备工作

安装 python 3.11, 我用 pyenv 做 python 多版本管理, 这里直接切到 3.11 版本:

```bash
$ pyenv shell 3.11.13 
$ python --version   
Python 3.11.13
```

准备代码仓库:

```bash
mkdir -p ~/work/code/agents/
cd ~/work/code/agents/

git clone https://github.com/assafelovic/gpt-researcher.git
cd gpt-researcher
git checkout v.3.3.7
```

准备 api key:

```bash
export OPENAI_API_KEY="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"
export OPENAI_BASE_URL="https://openrouter.ai/api/v1"
export TAVILY_API_KEY="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"
export OPENAI_MODEL="openai/gpt-5"
export EMBEDDING_MODEL="openai/text-embedding-3-large"
```

Tavily 可以注册之后, 先使用它提供的免费 key 作为试用.

### 安装

安装 python 依赖:

```bash
cd ~/work/code/agents/gpt-researcher
pip install -r requirements.txt
```

### 启动

```bash
python -m uvicorn main:app --reload
```

遇到时先后报错, 缺少依赖

```bash
ModuleNotFoundError: No module named 'colorama'
ModuleNotFoundError: No module named 'markdown'
```

即使重新执行 `pip install -r requirements.txt` 也还是报错, 只好手工安装:

```bash
pip install colorama
pip install markdown
```

再次启动, 现在不再报错:

```bash
INFO:     Will watch for changes in these directories: ['/home/sky/work/code/agents/gpt-researcher']
INFO:     Uvicorn running on http://127.0.0.1:8000 (Press CTRL+C to quit)
INFO:     Started reloader process [23185] using StatReload
INFO:     Started server process [23230]
INFO:     Waiting for application startup.
2025-11-20 10:54:31,129 - backend.server.app - INFO - GPT Researcher API ready - local mode (no database persistence)
INFO:     Application startup complete.
```

使用浏览器打开 http://127.0.0.1:8000 即可开始使用 gpt researcher . 

### 模型选择

随便给了一个主题,试用一下,发现报错:

```bash
INFO:     [11:01:11] 🗂️ Draft section titles generated for '启动速度与内存消耗的评估方法'
INFO:     [11:01:11] 🔎 Getting relevant written content based on query: 启动速度与内存消耗的评估方法...
2025-11-20 11:01:11,930 - httpx - INFO - HTTP Request: POST https://openrouter.ai/api/v1/embeddings "HTTP/1.1 200 OK"
2025-11-20 11:01:11,942 - server.server_utils - ERROR - Error running task: No embedding data received
Traceback (most recent call last):
  File "/home/sky/work/code/agents/gpt-researcher/backend/server/server_utils.py", line 254, in safe_run
    await awaitable
  File "/home/sky/work/code/agents/gpt-researcher/backend/server/server_utils.py", line 151, in handle_start_command
    report = await manager.start_streaming(
             ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
  File "/home/sky/work/code/agents/gpt-researcher/backend/server/websocket_manager.py", line 105, in start_streaming
    report = await run_agent(
             ^^^^^^^^^^^^^^^^
  File "/home/sky/work/code/agents/gpt-researcher/backend/server/websocket_manager.py", line 161, in run_agent
    report = await researcher.run()
             ^^^^^^^^^^^^^^^^^^^^^^
  File "/home/sky/work/code/agents/gpt-researcher/backend/report_type/detailed_report/detailed_report.py", line 71, in run
    _, report_body = await self._generate_subtopic_reports(subtopics)
                     ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
  File "/home/sky/work/code/agents/gpt-researcher/backend/report_type/detailed_report/detailed_report.py", line 98, in _generate_subtopic_reports
    result = await self._get_subtopic_report(subtopic)
             ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
  File "/home/sky/work/code/agents/gpt-researcher/backend/report_type/detailed_report/detailed_report.py", line 139, in _get_subtopic_report
    relevant_contents = await subtopic_assistant.get_similar_written_contents_by_draft_section_titles(
                        ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
  File "/home/sky/work/code/agents/gpt-researcher/gpt_researcher/agent.py", line 419, in get_similar_written_contents_by_draft_section_titles
    return await self.context_manager.get_similar_written_contents_by_draft_section_titles(
           ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
  File "/home/sky/work/code/agents/gpt-researcher/gpt_researcher/skills/context_manager.py", line 59, in get_similar_written_contents_by_draft_section_titles
    results = await asyncio.gather(*[process_query(query) for query in all_queries])
              ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
  File "/home/sky/work/code/agents/gpt-researcher/gpt_researcher/skills/context_manager.py", line 57, in process_query
    return set(await self.__get_similar_written_contents_by_query(query, written_contents, **self.researcher.kwargs))
               ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
  File "/home/sky/work/code/agents/gpt-researcher/gpt_researcher/skills/context_manager.py", line 85, in __get_similar_written_contents_by_query
    return await written_content_compressor.async_get_context(
           ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
  File "/home/sky/work/code/agents/gpt-researcher/gpt_researcher/context/compression.py", line 109, in async_get_context
    relevant_docs = await asyncio.to_thread(compressed_docs.invoke, query, **self.kwargs)
                    ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
  File "/home/sky/.pyenv/versions/3.11.13/lib/python3.11/asyncio/threads.py", line 25, in to_thread
    return await loop.run_in_executor(None, func_call)
           ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
  File "/home/sky/.pyenv/versions/3.11.13/lib/python3.11/concurrent/futures/thread.py", line 58, in run
    result = self.fn(*self.args, **self.kwargs)
             ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
  File "/home/sky/.pyenv/versions/3.11.13/lib/python3.11/site-packages/langchain_core/retrievers.py", line 216, in invoke
    result = self._get_relevant_documents(
             ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
  File "/home/sky/.pyenv/versions/3.11.13/lib/python3.11/site-packages/langchain_classic/retrievers/contextual_compression.py", line 40, in _get_relevant_documents
    compressed_docs = self.base_compressor.compress_documents(
                      ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
  File "/home/sky/.pyenv/versions/3.11.13/lib/python3.11/site-packages/langchain_classic/retrievers/document_compressors/base.py", line 39, in compress_documents
    documents = _transformer.compress_documents(
                ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
  File "/home/sky/.pyenv/versions/3.11.13/lib/python3.11/site-packages/langchain_classic/retrievers/document_compressors/embeddings_filter.py", line 81, in compress_documents
    embedded_documents = _get_embeddings_from_stateful_docs(
                         ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
  File "/home/sky/.pyenv/versions/3.11.13/lib/python3.11/site-packages/langchain_community/document_transformers/embeddings_redundant_filter.py", line 71, in _get_embeddings_from_stateful_docs
    embedded_documents = embeddings.embed_documents(
                         ^^^^^^^^^^^^^^^^^^^^^^^^^^^
  File "/home/sky/.pyenv/versions/3.11.13/lib/python3.11/site-packages/langchain_openai/embeddings/base.py", line 702, in embed_documents
    return self._get_len_safe_embeddings(
           ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
  File "/home/sky/.pyenv/versions/3.11.13/lib/python3.11/site-packages/langchain_openai/embeddings/base.py", line 569, in _get_len_safe_embeddings
    response = self.client.create(input=batch_tokens, **client_kwargs)
               ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
  File "/home/sky/.pyenv/versions/3.11.13/lib/python3.11/site-packages/openai/resources/embeddings.py", line 132, in create
    return self._post(
           ^^^^^^^^^^^
  File "/home/sky/.pyenv/versions/3.11.13/lib/python3.11/site-packages/openai/_base_client.py", line 1259, in post
    return cast(ResponseT, self.request(cast_to, opts, stream=stream, stream_cls=stream_cls))
                           ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
  File "/home/sky/.pyenv/versions/3.11.13/lib/python3.11/site-packages/openai/_base_client.py", line 1052, in request
    return self._process_response(
           ^^^^^^^^^^^^^^^^^^^^^^^
  File "/home/sky/.pyenv/versions/3.11.13/lib/python3.11/site-packages/openai/_base_client.py", line 1141, in _process_response
    return api_response.parse()
           ^^^^^^^^^^^^^^^^^^^^
  File "/home/sky/.pyenv/versions/3.11.13/lib/python3.11/site-packages/openai/_response.py", line 325, in parse
    parsed = self._options.post_parser(parsed)
             ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
  File "/home/sky/.pyenv/versions/3.11.13/lib/python3.11/site-packages/openai/resources/embeddings.py", line 116, in parser
    raise ValueError("No embedding data received")
ValueError: No embedding data received
```

`ValueError: No embedding data received` 说明 GPT‑Researcher 在调用 OpenRouter 的 embeddings 接口时，返回了 HTTP 200，但响应体里没有实际的 embedding 数据。

OpenRouter 并非所有模型都支持 embeddings

在 OpenRouter 模型列表 查找支持 embeddings 的模型:

https://openrouter.ai/models

在 output modalities 中 打开 embeddings, 


```bash
export OPENAI_MODEL=text-embedding-3-large
```