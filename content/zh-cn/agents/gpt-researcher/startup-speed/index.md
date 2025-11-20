---
title: "启动速度"
linkTitle: "启动速度"
weight: 100
date: 2025-11-13
description: >
  GPT Researcher的启动速度
---


### 启动速度

测试方式:

```bash
cd ~/work/code/agents/gpt-researcher

TZ=UTC-8 date +"%Y-%m-%d %H:%M:%S,%3N"; python -m uvicorn main:app --reload

2025-11-20 14:58:03,508
INFO:     Will watch for changes in these directories: ['/home/sky/work/code/agents/gpt-researcher']
INFO:     Uvicorn running on http://127.0.0.1:8000 (Press CTRL+C to quit)
INFO:     Started reloader process [45710] using StatReload
INFO:     Started server process [45755]
INFO:     Waiting for application startup.
2025-11-20 14:58:04,232 - backend.server.app - INFO - GPT Researcher API ready - local mode (no database persistence)
INFO:     Application startup complete.
```

2025-11-20 14:58:04,232 对比 2025-11-20 14:58:03,508, 启动速度为 724 ms. 重复测试多次, 成绩依次为: 728 ms, 718ms, 720ms, 714 ms. 5次平均值为 720 ms.

### 内存占用

用 linux 命令:

```bash
ps -ef | grep python | grep -v color=auto
```

找出主进程和子进程:

```bash
sky        47722   15937  3 15:09 pts/3    00:00:22 /home/sky/.pyenv/versions/3.11.13/bin/python -m uvicorn main:app --reload
sky        47766   47722  0 15:09 pts/3    00:00:00 /home/sky/.pyenv/versions/3.11.13/bin/python -c from multiprocessing.resource_tracker import main;main(4)
sky        47767   47722  0 15:09 pts/3    00:00:03 /home/sky/.pyenv/versions/3.11.13/bin/python -c from multiprocessing.spawn import spawn_main; spawn_main(tracker_fd=5, pipe_handle=7) --multiprocessing-fork
```

再执行:

```bash
ps -p 47722,47766,47767 -o pid,ppid,cmd,%mem,rss
```

得到进程的内存占用:

```bash
    PID    PPID CMD                         %MEM   RSS
  47722   15937 /home/sky/.pyenv/versions/3  0.0 26080
  47766   47722 /home/sky/.pyenv/versions/3  0.0 12640
  47767   47722 /home/sky/.pyenv/versions/3  0.3 120092
```

这里的 rss 就是 常驻内存大小（KB，常驻内存 = 实际物理内存使用量）, 加起来 158812 KB 约等于 155 MB.

可以写一个简单的 python 脚本来进行计算:

```bash
vi mem_check.py
```

内容为:

```python
import psutil
import re

def find_main_and_children(pattern="main:app"):
    pids = []
    for proc in psutil.process_iter(['pid', 'cmdline']):
        try:
            cmdline = " ".join(proc.info['cmdline'])
            if pattern in cmdline:
                pids.append(proc.info['pid'])
                # 加上子进程
                children = proc.children(recursive=True)
                pids.extend([child.pid for child in children])
        except (psutil.NoSuchProcess, psutil.AccessDenied):
            continue
    return pids

def calc_total_memory(pids):
    total = 0
    for pid in pids:
        try:
            process = psutil.Process(pid)
            mem = process.memory_info().rss / 1024  # KB
            print(f"PID {pid}: {mem:.0f} KB")
            total += mem
        except psutil.NoSuchProcess:
            print(f"PID {pid} 不存在")
    print(f"总内存占用: {total:.0f} KB ({total/1024:.2f} MB)")

if __name__ == "__main__":
    pids = find_main_and_children("main:app")
    if pids:
        print(f"找到进程: {pids}")
        calc_total_memory(pids)
    else:
        print("没有找到匹配的进程")
```

运行:

```bash
python mem_check.py
```

达到结果:

```bash
python mem_check.py                             

找到进程: [47722, 47766, 47767]
PID 47722: 26080 KB
PID 47766: 12640 KB
PID 47767: 120092 KB
总内存占用: 158812 KB (155.09 MB)
```