---
title: Mercury Plan
tagline: 基于 Tauri 2 的个人生活管理应用，一套原生 HTML/CSS/JS 前端同时跑在 Windows 和 Android 上，数据经坚果云 WebDAV 按条目合并同步
year: '2026'
stack: ['Tauri 2', 'Rust', 'JavaScript', '原生 HTML/CSS']
repo: https://github.com/HUAHUA768/Mercury_Plan
order: 5
---

## 它是什么

「水星计划」是一个本地优先的个人管理应用，覆盖日程待办、多层级目标树、习惯打卡、日常记录、兴趣爱好、心愿清单、备忘录（Markdown 实时预览）、成就时间轴等模块，还有回收站、撤销删除、快捷键和 JSON 备份导入导出。

## 双端架构

仓库由两个完全独立的分支构成，共用同一套原生前端（无框架）：

- **main（Windows）**：Tauri 2 + Rust 后端打包为 exe，支持绿色版与 NSIS 安装包
- **android**：Tauri 2 mobile 编译为 APK，前端补充移动端适配，自动化构建脚本带版本号自增与归档

## 核心亮点

- **条目级合并同步**：Windows 与 Android 通过坚果云 WebDAV 共享云端同步库，每条记录带修改时间，两端独有内容互不覆盖，同条冲突以较新为准，删除记录墓碑防止复活，习惯打卡与记录按日期/条目取并集
- **同步策略细化**：改动静止 6 秒自动上传，前台 60s / 后台 3min 差异化拉取，带退避与去重；同步状态（待上传条数、单条笔记的上传图标、失败原因）全部可视化
- **数据安全设计**：墓碑机制、二次确认、演示数据不上传、一键切换数据源方便双端联调
