---
title: "构建"
linkTitle: "构建"
weight: 10
date: 2025-07-10
description: >
  e2b仓库源码构建
---

## 背景

代码仓库：

https://github.com/e2b-dev/E2B

## 准备工作

### clone仓库

```bash
mkdir -p ~/work/code/e2b
cd ~/work/code/e2b
git clone git@github.com:e2b-dev/E2B.git
cd E2B
```

### 安装 pnpm

```bash
npm install -g pnpm
```

安装后查看版本：

```bash
$ pnpm --version    
9.15.5
```



## 构建

参考代码仓库下的 Makefile 文件：

https://github.com/e2b-dev/E2B/blob/main/Makefile

### codegen

先执行： 

```bash
pnpm install
```

再执行：

```bash
make codegen
```

过程中会比较慢，因为要下载这个 2GB 的镜像文件 codegen-env：

```bash
$ docker images                 
REPOSITORY    TAG       IMAGE ID       CREATED          SIZE
codegen-env   latest    ea38a80a213c   16 minutes ago   2.07GB
```

执行完成之后，`packages/js-sdk/node_modules/.bin/` 下就会存在 npm-run-all 文件：

```bash
$ ls packages/js-sdk/node_modules/.bin/

eslint   knip      ncu                openapi-typescript  run-s     tsup
glob     knip-bun  npm-check-updates  playwright          tsc       tsup-node
json2ts  msw       npm-run-all        run-p               tsserver  vitest
```

### python sdk

Python SDK 的代码生成包含 API 客户端、Protobuf 通信层和数据模型定义：

- **API 客户端代码（OpenAPI Client 生成）：**
   *(注意：日志显示它先生成在 api/api 目录，然后被 mv 移动到了 client 目录)*
   - 主 API 客户端模块：packages/python-sdk/e2b/api/client/ （包含了与 E2B 后端交互的所有 Pydantic 模型和请求客户端）
   - 云盘 (Volume) API 客户端模块：packages/python-sdk/e2b/volume/client/
- **容器内通信协议代码（Buf / Protobuf 生成）：**
   - 由 buf generate 执行生成的 Proto 文件处理模块，通常分布在 packages/python-sdk/e2b/ 下的相关协议文件夹中（如用于处理 filesystem 和 process 的相关 _pb2.py 和通信存根代码）。
- **MCP 数据模型（Datamodel Codegen 生成）：**
   - Pydantic 数据模型：packages/python-sdk/e2b/sandbox/mcp.py


python sdk 的 代码入口在 `packages/python-sdk/e2b/sandbox_sync/main.py`:

```python
    @classmethod
    def create(
        cls,
        template: Optional[str] = None,
        timeout: Optional[int] = None,
        metadata: Optional[Dict[str, str]] = None,
        envs: Optional[Dict[str, str]] = None,
        secure: bool = True,
        allow_internet_access: bool = True,
        mcp: Optional[McpServer] = None,
        network: Optional[SandboxNetworkOpts] = None,
        lifecycle: Optional[SandboxLifecycle] = None,
        volume_mounts: Optional[SandboxVolumeMount] = None,
        **opts: Unpack[ApiParams],
    ) -> Self:
```

对应官方实例代码：

```python
from e2b import Sandbox

with Sandbox.create() as sandbox:
    result = sandbox.commands.run('echo "Hello from E2B!"')
    print(result.stdout)  # Hello from E2B!
```

### js sdk

JS 的代码生成主要基于 OpenAPI 规范、Protocol Buffers 以及 JSON Schema 生成 TypeScript 的类型定义文件和接口调用代码：

- **API 接口协议代码（OpenAPI 生成）：**
   - 主 API 接口定义：packages/js-sdk/src/api/schema.gen.ts
   - 环境 (Envd) API 接口定义：packages/js-sdk/src/envd/schema.gen.ts
   - 云盘 (Volume) API 接口定义：packages/js-sdk/src/volume/schema.gen.ts
- **容器内通信协议代码（Buf / gRPC 生成）：**
   - 文件系统通信：packages/js-sdk/src/envd/filesystem/filesystem_connect.ts 和 filesystem_pb.ts
   - 进程通信：packages/js-sdk/src/envd/process/process_connect.ts 和 process_pb.ts
- **MCP (Model Context Protocol) 规范（JSON Schema 转换）：**
   - 类型声明文件：packages/js-sdk/src/sandbox/mcp.d.ts

js sdk 的 代码入口在 `packages/js-sdk/src/sandbox/index.ts`

```javascript
export class Sandbox extends SandboxApi {

  static async create<S extends typeof Sandbox>(
    this: S,
    opts?: SandboxOpts
  ): Promise<InstanceType<S>>

}
```

对应官方实例代码：

```javascript
import Sandbox from 'e2b'

const sandbox = await Sandbox.create()
const result = await sandbox.commands.run('echo "Hello from E2B!"')
console.log(result.stdout) // Hello from E2B!
```