---
title: 待办表
tagline: 用 Win32 API 手写的 Windows 桌面待办工具，因为系统便笺太难用
year: '2025'
stack: ['C++', 'Win32 API', 'CMake']
repo: https://github.com/HUAHUA768/Todo-List
order: 5
---

## 它是什么

一个不到瘾的小工具：Win11 自带的便笺不能勾选完成、不能设时间，于是用 Win32 API 直接写了个原生窗口程序。

## 功能

- 新增待办，支持日期，可选具体时间（系统原生日期/时间选择控件）
- 勾选后自动移动到「已完成」列表
- CMake 构建，Visual Studio 打开即编译

## 已知问题

当前不做数据持久化，重启后列表清空。这是我刻意留的下一步：加一个本地存储层就够，但先把窗口和交互写顺。
