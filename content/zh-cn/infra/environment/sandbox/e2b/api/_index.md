---
title: "API"
linkTitle: "API"
weight: 500
date: 2025-07-10
description: >
  E2B API
---

e2b 官方 API 参考手册

https://e2b.dev/docs/api-reference/sandboxes/list-sandboxes


## 概念

- Sandbox： e2b 称 code interpreter 为 Sandbox，本质上是一个轻量而安全隔离的MicroVM，基于 Firecracker 技术构建的。用于执行不可信的代码。

- Template： 用户创建 code interpreter 的模板，和 sandbox 的关系类似 docker images 和 docker container，或者虚拟机和虚拟机镜像。

- Tags： Tag 是附加在 Template 上的版本标识符，概念等同于 Docker 镜像的 Tag。用于对 Template 的版本管理。

- Team： Team 是 E2B 中的组织架构和资源隔离边界。所有的 API Keys、构建的 Custom Templates（自定义模板）以及正在运行的 Sandboxes，都归属于一个具体的 Team。E2B 的免费额度、并发限制和账单都是以 Team 为维度进行计算的。类似租户的概念。

- Evnd： 运行在 Sandbox 实例中的进程，用于外接和 Sandbox 实例通讯和交互。

- Filesystem： Filesystem 代表沙箱内部隔离的虚拟“硬盘空间”，可以进行各种操作如读写文件，文件夹管理，上传与下载，以及最新提供的文件监听。                          

- Process

## API

### Template API

标准的 CURD 生命周期管理API：

- Create template (v3)： 创建 template，但 e2b 这里不用指定容器镜像，在 start build 时指定。
- Delete template： 删除指定 template-id 的 template
- Update template (v2)： 更新指定 template-id 的 template 信息，仅限 public 参数（是否公用，还是仅仅在 team 内可用）
- Get template： 获取指定 template-id 的 template 信息，包括template的最后使用时间和使用次数，template的所有build
- Get template by alias： 获取指定 alias （name） 的 template 信息
- List templates： 获取指定 team-id 的所有 template 信息， Get template 方法的批量版本。

构建 build 相关的 API：

- Start build (v2)： 开始构建 template，可以 fromImage / fromTemplate / fromImageRegistry。
- Get build status： 获取构建的信息包括日志，以及构建的状态如 building, waiting, ready, error, uploaded
- Get build logs： Get build status 的裁剪版本，只返回日志
- Get build upload link： 获取文件上传的地址，可以用来将构建所需的文件打包为tar之后传上去。开发者一般不需要调用，专门给 E2B 官方 CLI 或者高级自动化系统在底层使用。

### Tags API

E2b 使用 tag 来对 tamplate 进行管理，包括版本。在 create template 方法中可以初始设置 tag，包括使用 tags 参数和在 name 参数中使用"my-template:v1" 这样的格式。

- Assign tags： 分配 tag，不是简单的设置。因为同一个 template （template-id） 下同一个 tag 是唯一的。
- Delete tags： 从 template 上删除 tag
- List template tags： 列出指定 template-id 的 template 的所有tag

### Sandbox API

标准的 CURD 生命周期管理API：

- Create Sandbox： 从指定 template 创建 Sandbox 实例
- Delete Sandbox： 删除指定 sandbox-id 的 Sandbox 实例
- Get Sandbox （v2）： 查询指定 sandbox-id 的 Sandbox 实例信息
- List Sandbox（v2）： 列出所有的运行中的 Sandbox 实例（仅限于当前 Team）

暂停和恢复的 API：

- Pause Sandbox： 暂停指定 sandbox-id 的 Sandbox 实例
- Resume sandbox： 废弃，被 Connect to Sandbox API 取代
- Connect to Sandbox： 等价于 Resume sandbox + Get Sandbox。如果 sandbox 实例被暂停则进行恢复，然后返回 Sandbox 实例的详细信息。

和超时/TTL相关的 API：

- Set sandbox timeout： 设置 sandbox 实例的超时时间，每次调用后，超时的最大期限被设置为当前时间+传入的参数。在 Create Sandbox 时初始设置 timeout ，然后可以通过反复调用这个方法来持续延长 sandbox 的运行期限。比如将 timeout 时间从1分钟改成5分钟。关键词：修改 timeout 并重新计时

- Refresh sandbox: 不改变沙箱原有的超时设定，只是单纯地把倒计时重置回最大值。比如当前 timeout 为1分钟，调用这个方法后将重新开始1分钟倒计时。关键词：重新计时但不修改 timeout。

和网络相关的 API：

- Put sandboxes network： 更新指定 sandbox-id 的 Sandbox 实例的网络配置。用提供的配置取代现有的 egress 规则。allowOut/denyOut 在 create sandbox 时进行初始设置。

和 Sandbox 可观测性相关的 API：

- Get sandbox metrics： 通过 sandbox-id 查询指定 Sandbox 实例的 metrics 信息，如cpu，内存，磁盘

- List sandbox metrics： Get sandbox metrics 的批量版本，支持指定多个 sandbox-id

- Get sandbox logs (v2)： 获取指定 sandbox-id 的 Sandbox 实例的日志内容

和快照相关的 API：

- Post sandboxes snapshots： 从指定 sandbox-id 的 Sandbox 实例的当前状态创建持久化快照，包括文件和内存。快照可以用来创建新的 sandbox 实例。 snapshot-id 可以当特殊的 template-id 使用。

- Get snapshots： 列出当前 Team 的所有 snapshot，可通过 sandbox-id 过滤。

### Evnd API

- Check the health of the service： 对 sandbox 实例进行健康检查（路径为/health）
- Get the stats of the service： 获取 sandbox 实例的状态，实际为 metrics信息（路径为/metrics），包括cpu，内存，磁盘的使用情况
- Get the environment variables： 获取 sandbox 实例的环境变量

### Filesystem API

和目录/文件相关的 API：

- MakeDir
- ListDir
- Remove： 删除目录或者文件
- Move： 移动文件或者目录
- Stat： 查看文件或者目录状态
- Download a file: 下载文件
- Upload a file ： 上传文件，会确保父目录存在。
- Compose multiple files： 将多个文件合并为一个文件，使用 zero copy

和文件夹监控相关的 API：

- WatchDir： 监控文件夹， Server-streaming 流式版本
- CreateWatcher： WatchDir 的非流式版本，只返回 watcherId
- GetWatcherEvents： 通过 watcherId 获取监控事件
- RemoveWatcher： 移除监控

### Process API

- Start Process： 启动一个进程，Server-streaming RPC，流式。（但很奇怪不返回 pid）
- List： 列出所有进程，进程信息包含 pid 可以用于其他基于 pid 的操作
- Connect： 连接指定 pid 的进程，Server-streaming RPC，流式获取 ConnectResponse events
- CloseStdin： 关闭标准输入（stdin），向指定 pid 的进程发送 EOF 信号。此方法仅适用于非 PTY 进程。对于 PTY 进程，请改发 Ctrl+D（0x04）。
- SendInput： 向指定 pid 的进程发送 input 如 pty
- StreamInput： ？？
- SendSignal： 向指定 pid 的进程发送信号如 SIGNAL_UNSPECIFIED, SIGNAL_SIGTERM, SIGNAL_SIGKILL

### Team API

- List teams： 获取所有的 team 信息，包括 name / team-id / apiKey， 以及 isDefualt / 是不是默认 team。
- Get team metrics： 获取  team 的 metrics 信息，如 concurrentSandboxes，sandboxStartRate
- Get team metrics max： 获取指定间隔内的 metrics 的最大值， metrics 可以是 concurrent_sandboxes 或者 sandbox_start_rate 