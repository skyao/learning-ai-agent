---
title: "快速开始"
linkTitle: "快速开始"
weight: 10
date: 2025-05-27
description: >
  E2B 快速开始
---


参考 https://e2b.dev/docs/quickstart

## 准备

用本地 linux 机器测试, 我用的是 linux mint 22,底层是 ubuntu 22.04.

### 帐号和key

用 github 账号登录 https://e2b.dev/

创建新的 key, 保存下来, 设置环境变量:

```bash
export E2B_API_KEY=e2b_d65e814d15c37858xxxxxxxx
```

### 安装 python sdk

参考: https://pypi.org/project/e2b/


```bash
pip install e2b-code-interpreter python-dotenv
```

### 安装 nodejs sdk

参考: https://www.npmjs.com/package/e2b


```bash
npm i @e2b/code-interpreter dotenv
```

## 简单运行

### python 运行

```bash
mkdir -p ~/work/code/e2b/quickstart-python
cd ~/work/code/e2b/quickstart-python
```

新建一个 python 文件:

```python
vi e2b-quickstart.py
```

内容如下:

```python
from dotenv import load_dotenv
load_dotenv()
from e2b_code_interpreter import Sandbox

sbx = Sandbox() # By default the sandbox is alive for 5 minutes
execution = sbx.run_code("print('hello world')") # Execute Python inside the sandbox
print(execution.logs)

files = sbx.files.list("/")
print(files)
```

执行:

```bash
python e2b-quickstart.py
```

输出为:

```bash
Logs(stdout: ['hello world\n'], stderr: [])
[EntryInfo(name='.e2b', type=<FileType.FILE: 'file'>, path='/.e2b'), EntryInfo(name='bin', type=<FileType.FILE: 'file'>, path='/bin'), EntryInfo(name='boot', type=<FileType.DIR: 'dir'>, path='/boot'), EntryInfo(name='code', type=<FileType.DIR: 'dir'>, path='/code'), EntryInfo(name='dev', type=<FileType.DIR: 'dir'>, path='/dev'), EntryInfo(name='etc', type=<FileType.DIR: 'dir'>, path='/etc'), EntryInfo(name='home', type=<FileType.DIR: 'dir'>, path='/home'), EntryInfo(name='ijava-1.3.0.zip', type=<FileType.FILE: 'file'>, path='/ijava-1.3.0.zip'), EntryInfo(name='install.py', type=<FileType.FILE: 'file'>, path='/install.py'), EntryInfo(name='java', type=<FileType.DIR: 'dir'>, path='/java'), EntryInfo(name='lib', type=<FileType.FILE: 'file'>, path='/lib'), EntryInfo(name='lib64', type=<FileType.FILE: 'file'>, path='/lib64'), EntryInfo(name='lost+found', type=<FileType.DIR: 'dir'>, path='/lost+found'), EntryInfo(name='media', type=<FileType.DIR: 'dir'>, path='/media'), EntryInfo(name='mnt', type=<FileType.DIR: 'dir'>, path='/mnt'), EntryInfo(name='opt', type=<FileType.DIR: 'dir'>, path='/opt'), EntryInfo(name='proc', type=<FileType.DIR: 'dir'>, path='/proc'), EntryInfo(name='r-4.4.2_1_amd64.deb', type=<FileType.FILE: 'file'>, path='/r-4.4.2_1_amd64.deb'), EntryInfo(name='requirements.txt', type=<FileType.FILE: 'file'>, path='/requirements.txt'), EntryInfo(name='root', type=<FileType.DIR: 'dir'>, path='/root'), EntryInfo(name='run', type=<FileType.DIR: 'dir'>, path='/run'), EntryInfo(name='sbin', type=<FileType.FILE: 'file'>, path='/sbin'), EntryInfo(name='srv', type=<FileType.DIR: 'dir'>, path='/srv'), EntryInfo(name='swap', type=<FileType.DIR: 'dir'>, path='/swap'), EntryInfo(name='sys', type=<FileType.DIR: 'dir'>, path='/sys'), EntryInfo(name='tmp', type=<FileType.DIR: 'dir'>, path='/tmp'), EntryInfo(name='usr', type=<FileType.DIR: 'dir'>, path='/usr'), EntryInfo(name='var', type=<FileType.DIR: 'dir'>, path='/var')]
```

### nodejs 运行

```bash
mkdir -p ~/work/code/e2b/quickstart-nodejs
cd ~/work/code/e2b/quickstart-nodejs
```

新建一个 nodejs 文件:

```python
vi e2b-quickstart.ts
```

内容如下:

```javascript
import 'dotenv/config'
import { Sandbox } from '@e2b/code-interpreter'

const sbx = await Sandbox.create() // By default the sandbox is alive for 5 minutes
const execution = await sbx.runCode('print("hello world")') // Execute Python inside the sandbox
console.log(execution.logs)

const files = await sbx.files.list('/')
console.log(files)
```

执行:

```bash
npx tsx ./e2b-quickstart.ts
```

报错:

```bash
npx tsx ./index.ts           

node:internal/modules/run_main:123
    triggerUncaughtException(
    ^
Error: Transform failed with 3 errors:
/home/sky/work/code/e2b/quickstart-nodejs/index.ts:4:12: ERROR: Top-level await is currently not supported with the "cjs" output format
/home/sky/work/code/e2b/quickstart-nodejs/index.ts:5:18: ERROR: Top-level await is currently not supported with the "cjs" output format
/home/sky/work/code/e2b/quickstart-nodejs/index.ts:8:14: ERROR: Top-level await is currently not supported with the "cjs" output format
    at failureErrorWithLog (/home/sky/.npm/_npx/fd45a72a545557e9/node_modules/esbuild/lib/main.js:1463:15)
    at /home/sky/.npm/_npx/fd45a72a545557e9/node_modules/esbuild/lib/main.js:734:50
```

这个错误是因为在使用 CommonJS (cjs) 格式的模块时，在顶层使用了 await，而 CommonJS 不支持顶层 await。

修改目录下的 package.json, 添加 `"type" : "module"`:

```json
{
  "type" : "module",
  "dependencies": {
  }
}
```

再次执行:

```javascript
npx tsx ./e2b-quickstart.ts
```

输出为:

```bash
{ stdout: [ 'hello world\n' ], stderr: [] }
[
  { name: '.e2b', type: 'file', path: '/.e2b' },
  { name: 'bin', type: 'file', path: '/bin' },
  { name: 'boot', type: 'dir', path: '/boot' },
  { name: 'code', type: 'dir', path: '/code' },
  { name: 'dev', type: 'dir', path: '/dev' },
  { name: 'etc', type: 'dir', path: '/etc' },
  { name: 'home', type: 'dir', path: '/home' },
  { name: 'ijava-1.3.0.zip', type: 'file', path: '/ijava-1.3.0.zip' },
  { name: 'install.py', type: 'file', path: '/install.py' },
  { name: 'java', type: 'dir', path: '/java' },
  { name: 'lib', type: 'file', path: '/lib' },
  { name: 'lib64', type: 'file', path: '/lib64' },
  { name: 'lost+found', type: 'dir', path: '/lost+found' },
  { name: 'media', type: 'dir', path: '/media' },
  { name: 'mnt', type: 'dir', path: '/mnt' },
  { name: 'opt', type: 'dir', path: '/opt' },
  { name: 'proc', type: 'dir', path: '/proc' },
  {
    name: 'r-4.4.2_1_amd64.deb',
    type: 'file',
    path: '/r-4.4.2_1_amd64.deb'
  },
  { name: 'requirements.txt', type: 'file', path: '/requirements.txt' },
  { name: 'root', type: 'dir', path: '/root' },
  { name: 'run', type: 'dir', path: '/run' },
  { name: 'sbin', type: 'file', path: '/sbin' },
  { name: 'srv', type: 'dir', path: '/srv' },
  { name: 'swap', type: 'dir', path: '/swap' },
  { name: 'sys', type: 'dir', path: '/sys' },
  { name: 'tmp', type: 'dir', path: '/tmp' },
  { name: 'usr', type: 'dir', path: '/usr' },
  { name: 'var', type: 'dir', path: '/var' }
]
```