---
title: easyCV
tagline: 一个 YAML 文件定义简历，浏览器里实时预览、一键导出 PDF
year: '2026'
stack: ['Python', 'FastAPI', 'Jinja2', 'YAML']
repo: https://github.com/HUAHUA768/easyCV
order: 4
---

## 它是什么

把简历从 Word 的排版苦役里解放出来：所有内容写在一个 `resume.yaml` 里，模板负责排版，改完刷新就能看到成品，满意了直接导出 PDF。

## 功能

- `/editor`：左边改 YAML，右边实时预览，保存即生效——不用记字段名，改错立刻看得见
- `/resume`：打印友好的 A4 预览，一键走浏览器打印导出 PDF，也能导成 PNG
- 内容模块化：基本信息、教育、代码链接、个人文档、团队项目、个人项目分开描述
- 一组 `GET/PUT /api/resume` 接口，可以直接把简历数据当 JSON 读写，方便接入其他工具

## 说明

项目改编自 [@lvy010 的 easyCV](https://github.com/lvy010/X-Plore)，我在原版基础上做了魔改：编辑器交互、导出流程和 YAML 结构都重做过一轮。原始想法与模板结构归原作者。
