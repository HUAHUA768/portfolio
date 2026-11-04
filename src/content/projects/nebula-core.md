---
title: Nebula-Core
tagline: 从 socket 开始手写的 Linux 高性能 HTTP 服务器，epoll 主从 Reactor + 线程池 + HTTP 状态机
year: '2026'
stack: ['C++17', 'epoll', 'Reactor', 'CMake']
repo: https://github.com/HUAHUA768/HTTP_Server
status: 进行中
order: 1
---

## 它是什么

不是调用现成网络库拼装，而是从 socket 开始自己搭的一层网络框架加 HTTP 服务器：Epoll、Channel、EventLoop、Buffer、HTTP 解析器全部手写，目标是搞清楚一个能扛并发的服务端到底由哪些零件组成。

## 关键设计

- **ET / LT 双模式**：运行时可切换，ET 下循环读写到 `EAGAIN`，大块数据用 `readv` 分散读
- **主从 Reactor**：主 loop 只做 accept，从 Reactor 组按 round-robin 接管连接 I/O，跨线程任务用 `eventfd` 唤醒投递
- **线程池**：互斥锁 + 条件变量 + `packaged_task/future`，可以把文件读取这类阻塞操作整体卸载出事件循环，keep-alive 流水线仍然保序
- **应用层 Buffer**：读写双游标 + 前端预留 + 空间搬移复用，正确处理粘包与半包
- **HTTP 解析**：增量状态机，可逐字节喂入；GET/POST/HEAD/OPTIONS，`Content-Length` 正文，64KB 头部与 8MB 正文上限，400/413/431/505 精确错误码
- **安全细节**：`realpath` + 前缀校验双重防路径穿越，`SIGPIPE` 免疫，EMFILE 时有 idle fd 兜底

## 状态

按 35 天路线图推进，前 20 天（网络核心 + HTTP 层）已完成，4 套单元测试含端到端集成测试，ASan/UBSan 全绿。后续补异步日志、时间轮心跳、GoogleTest 与 wrk 压测数据。
