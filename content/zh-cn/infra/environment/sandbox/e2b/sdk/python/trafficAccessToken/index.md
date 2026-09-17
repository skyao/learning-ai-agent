---
title: "traffic access token"
linkTitle: "traffic access token"
weight: 10
date: 2025-07-10
description: >
  E2B Python SDK traffic access token 的强制设置
---

## 背景

### e2b 默认行为

Python SDK 现在不会把 `traffic_access_token` 带到 envd `49983` 的请求上。 这个 token 只存在 sandbox 对象上，给用户访问公开端口时自己带头。

Create sandbox 会返回两个独立 token（OpenAPI 注释也写了）：

| Token                | Header                     | 用途                                                         |
| :------------------- | :------------------------- | :----------------------------------------------------------- |
| `envdAccessToken`    | `X-Access-Token`           | envd 自身鉴权（`secure=True`）                               |
| `trafficAccessToken` | `e2b-traffic-access-token` | 走 proxy 访问 `{port}-{sandbox_id}.{domain}`（`allowPublicTraffic=false`） |

Create / connect / fork 时，SDK 只把下面这些内容塞进 `extra_sandbox_headers`：

```python
    # main.pyLines 1152-1158
    if envd_access_token is not None and not isinstance(
        envd_access_token, Unset
    ):
        extra_sandbox_headers["X-Access-Token"] = envd_access_token

extra_sandbox_headers["E2b-Sandbox-Id"] = sandbox_id
extra_sandbox_headers["E2b-Sandbox-Port"] = str(ConnectionConfig.envd_port)
```

`traffic_access_token` 只赋给 `sandbox.traffic_access_token`，没有写进 headers。JS SDK 同样如此。

### 我们期望的行为

要实现了一个兼容e2b协议的服务器端，希望用户直接使用 e2b api 和 sdk 就可以访问这个e2b兼容服务器端。在这个的方案中，所有访问 sandbox 实例的数据面请求，不管是访问 envd 的 49983 端口，还是访问其他进程的其他端口，都要求这些请求通过一个统一的 gateway 进行转发。而这个 gateway 在转发这些请求时，统一通过 traffic access token 来进行认证。

因此，希望改动客户端的行为，在访问 envd 49983 端口的请求中也携带 traffic access token 。但不能直接修改 e2b 的 sdk。比较理想的是希望在用户的代码中，create sandbox 的代码前后增加某些代码来实现。

## 客户端代码改动

### 使用旧版本SDK

手工修改代码

```python
sandbox = Sandbox.create(...)
sandbox.connection_config._ConnectionConfig__extra_sandbox_headers[
    "e2b-traffic-access-token"
] = sandbox.traffic_access_token
# 这时才建 client，能读到新 header
sandbox.commands.run("echo ok")  
```

### 使用新版本SDK

2026年7月的最新 PR 修改了 sdk 实现

- https://github.com/e2b-dev/E2B/pull/1558： 2026-07-24

- https://github.com/e2b-dev/E2B/pull/1623： 2026-08-11

\#1558 当时 httpx 的 envd HTTP client 仍是懒创建（`files.read` / `write`、`is_running`）。那条路要到 [PR #1623](https://github.com/e2b-dev/E2B/pull/1623)（2026-08-11）才改成 `get_envd_api()` 在构造时建好，同样把 `sandbox_headers` 拷进 `httpx.Client`。

| 请求类型                             | 老写法失效的 PR | PR时间     |
| :----------------------------------- | :-------------- | ---------- |
| `commands` / `pty` / filesystem RPC  | #1558           | 2026-07-24 |
| `files.read` / `write`、`is_running` | #1623           | 2026-08-11 |

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

这和老版本是同一条通道，只是注入点从「create 之后」提前到了「构造 client 之前」。`create` / `connect` / `fork` 都会走这个 `__init__`。

## 相关 sdk 改动的时间线



python sdk：

| 时间       | sdk 版本 | patch  |
| ---------- | -------- | ------ |
| 2026-07-24 |          | \#1558 |
| 2026-08-11 |          | \#1623 |
| 2026-08-13 |          | \#1670 |

