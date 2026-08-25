---
title: "traffic access token"
linkTitle: "traffic access token"
weight: 10
date: 2025-07-10
description: >
  E2B Python SDK traffic access token 的强制设置
---

### 旧版本

```python
sandbox = Sandbox.create(...)
sandbox.connection_config._ConnectionConfig__extra_sandbox_headers[
    "e2b-traffic-access-token"
] = sandbox.traffic_access_token
# 这时才建 client，能读到新 header
sandbox.commands.run("echo ok")  
```

### 新版本

https://github.com/e2b-dev/E2B/pull/1558

客户端改成了 create 时立刻建好，headers 当场拍成快照：

- HTTP：httpx.Client(headers=config.sandbox_headers)（is_running、文件读写）
- RPC：DefaultHeadersInterceptor(config.sandbox_headers)（commands / files 的 RPC / pty）
Sandbox.create() 返回时，这些 client 已经带着旧 headers 了。再改 __extra_sandbox_headers 只改了 config 里那份 dict，已经建好的 client / interceptor 看不到。

还是改那份 dict，但必须赶在 super().__init__() 建 client 之前：

```python
class GatewaySandbox(Sandbox):
    def __init__(self, **opts):
        token = opts.get("traffic_access_token")
        config = opts.get("connection_config")
        if token and config is not None:
            config._ConnectionConfig__extra_sandbox_headers[
                "e2b-traffic-access-token"
            ] = token
        super().__init__(**opts)

sandbox = GatewaySandbox.create(...)

```