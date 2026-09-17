---
title: "Set Timeout API"
linkTitle: "Set Timeout"
weight: 10
date: 2025-07-10
description: >
  E2B Sandbox Set Timeout API
---

### 测试代码

```bash
import os
import time
from datetime import datetime, timezone

from e2b import Sandbox

# 实验参数：
#   t0 创建，timeout=60s
#   t0+20s 调用 set_timeout(50)
# 判定：
#   若 end_at ≈ t0 + 70s  → 以当前时刻重算（now + timeout）
#   若 end_at ≈ t0 + 110s → 在原超时上叠加（原 timeout + 新 timeout）
CREATE_TIMEOUT = 60
WAIT_SECONDS = 20
SET_TIMEOUT = 50

API_KEY = "e2b_4a9c76a966fcxxxxxxxxxxxxxxxx"


def utcnow() -> datetime:
    return datetime.now(timezone.utc)


def fmt(dt: datetime | None) -> str:
    if dt is None:
        return "None"
    return dt.astimezone(timezone.utc).isoformat()


def seconds_between(later: datetime, earlier: datetime) -> float:
    return (later - earlier).total_seconds()


def print_info(label: str, info, *, t0: datetime, t_call: datetime | None = None) -> None:
    print(f"\n=== {label} ===")
    print(f"sandbox_id : {info.sandbox_id}")
    print(f"started_at : {fmt(info.started_at)}")
    print(f"end_at     : {fmt(info.end_at)}")
    print(f"end_at - started_at : {seconds_between(info.end_at, info.started_at):.1f}s")
    print(f"end_at - t0         : {seconds_between(info.end_at, t0):.1f}s")
    if t_call is not None:
        print(f"end_at - 调用时刻   : {seconds_between(info.end_at, t_call):.1f}s")


def main() -> None:
    os.environ["E2B_API_KEY"] = API_KEY
    sbx = None
    try:
        t0 = utcnow()
        sbx = Sandbox.create("code-interpreter-v1", timeout=CREATE_TIMEOUT)
        info0 = sbx.get_info()
        print(f"创建完成 t0={fmt(t0)}")
        print_info("创建后", info0, t0=t0)

        print(f"\n等待 {WAIT_SECONDS}s 后再调用 set_timeout ...")
        time.sleep(WAIT_SECONDS)

        t_call = utcnow()
        print(f"调用 set_timeout 时刻 t_call={fmt(t_call)}")
        print(f"距 t0 已过去 {seconds_between(t_call, t0):.1f}s")
        print(f"set_timeout({SET_TIMEOUT})")
        sbx.set_timeout(SET_TIMEOUT)

        info1 = sbx.get_info()
        print_info("set_timeout 后", info1, t0=t0, t_call=t_call)

        from_now = seconds_between(info1.end_at, t_call)
        from_create = seconds_between(info1.end_at, info0.started_at)
        original_ttl = seconds_between(info0.end_at, info0.started_at)

        print("\n=== 结论对照 ===")
        print(f"原 end_at - started_at ≈ {original_ttl:.1f}s（期望 ~{CREATE_TIMEOUT}s）")
        print(f"新 end_at - 调用时刻   ≈ {from_now:.1f}s")
        print(f"新 end_at - started_at ≈ {from_create:.1f}s")
        print(f"若以当前时刻重算，期望 end_at ≈ t_call + {SET_TIMEOUT}s，即 started_at 后约 {WAIT_SECONDS + SET_TIMEOUT}s")
        print(f"若在原超时上叠加，期望 end_at ≈ started_at + {CREATE_TIMEOUT + SET_TIMEOUT}s")
    finally:
        if sbx is not None:
            sbx.kill()
            print("\n沙盒已关闭")


if __name__ == "__main__":
    main()
```

### 测试结果

```bash
python ./settimeout.py     
创建完成 t0=2026-08-17T11:06:27.911494+00:00

=== 创建后 ===
sandbox_id : ic0dtgk5ta2ili3e9t87l
started_at : 2026-08-17T11:06:33.440446+00:00
end_at     : 2026-08-17T11:07:33.440446+00:00
end_at - started_at : 60.0s
end_at - t0         : 65.5s

等待 20s 后再调用 set_timeout ...
调用 set_timeout 时刻 t_call=2026-08-17T11:06:54.002638+00:00
距 t0 已过去 26.1s
set_timeout(50)

=== set_timeout 后 ===
sandbox_id : ic0dtgk5ta2ili3e9t87l
started_at : 2026-08-17T11:06:33.440446+00:00
end_at     : 2026-08-17T11:07:44.259126+00:00
end_at - started_at : 70.8s
end_at - t0         : 76.3s
end_at - 调用时刻   : 50.3s

=== 结论对照 ===
原 end_at - started_at ≈ 60.0s（期望 ~60s）
新 end_at - 调用时刻   ≈ 50.3s
新 end_at - started_at ≈ 70.8s
若以当前时刻重算，期望 end_at ≈ t_call + 50s，即 started_at 后约 70s
若在原超时上叠加，期望 end_at ≈ started_at + 110s

沙盒已关闭
```