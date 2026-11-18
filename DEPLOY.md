# 部署方案

> 站点：https://huahua768.me ｜ 仓库：github.com/HUAHUA768/portfolio ｜ 托管：GitHub Pages（免费）

## 一、整体流程

```
本地 npm run build → git push main → GitHub Actions 构建 → GitHub Pages 发布 → 自定义域名 + HTTPS
```

- 纯静态站，无服务器、无数据库，GitHub Pages 免费额度足够（站点 1GB / 流量 100GB 每月 / 构建 10 次每小时）
- 仓库公开：public 仓库的 Actions 分钟数免费不限，且源码本身就是作品集的一部分
- 域名：GitHub 学生包送 Namecheap `.me` 一年（含 SSL），第 2 年起按正常价格续费
- 服务器在国内访问偶尔不稳是 GitHub CDN 的问题，换域名解决不了；需要时再套 Cloudflare 免费 CDN

## 二、一次性配置（只做一次）

### 1. 建仓库

GitHub 新建仓库 `portfolio`，**Public**，不要勾选任何初始化文件。

### 2. 推送代码

```bash
cd ~/My_Blog
git add -A
git commit -m "init: portfolio site"
git remote add origin git@github.com:HUAHUA768/portfolio.git
git push -u origin main
```

### 3. 开启 Pages

仓库 **Settings → Pages → Build and deployment → Source** 选 **GitHub Actions**。
（不要选 "Deploy from a branch"，本项目靠 Actions 构建）

### 4. 领域名并解析

1. GitHub Education 页面领取 Namecheap 免费 `.me`，注册 `huahua768.me`
2. Namecheap → Domain List → Manage → **Advanced DNS**，添加：

| Type | Host | Value | TTL |
|---|---|---|---|
| A Record | @ | 185.199.108.153 | Automatic |
| A Record | @ | 185.199.109.153 | Automatic |
| A Record | @ | 185.199.110.153 | Automatic |
| A Record | @ | 185.199.111.153 | Automatic |
| CNAME Record | www | huahua768.me | Automatic |

删掉 Namecheap 默认自带的 URL Redirect / CNAME 记录。

### 5. 绑定域名 + 强制 HTTPS

仓库 **Settings → Pages → Custom domain** 填 `huahua768.me` → Save → 等 DNS 检查通过 → 勾上 **Enforce HTTPS**（证书自动签发，十几分钟生效）。

> 域名已写在 `public/CNAME` 里，构建时会一起发布，不需要每次手动设置。

## 三、日常发布

```bash
cd ~/My_Blog
git add -A
git commit -m "写清楚改了什么"
git push
```

推送后 1 分钟左右自动上线，进度看仓库 **Actions** 页面。

## 四、本地预览

```bash
cd ~/My_Blog
npm install          # 首次

# 场景一：写代码时
npm run dev          # 开发模式 http://localhost:4321，改完自动刷新

# 场景二：验证构建产物（先 build 再 preview，配套使用）
npm run build        # 构建到 dist/
npm run preview      # 预览构建产物
```

## 五、常见问题

**Actions 报错** → 打开 Actions 里失败的那次，看 build 步骤日志；本地先跑 `npm run build` 能复现大部分问题。

**域名打不开 / 显示 404** → 依次检查：DNS 是否生效（`nslookup huahua768.me`）、Pages 的 Custom domain 是否已保存、Actions 是否部署成功。

**HTTPS 勾不上** → DNS 还没生效，等 10–30 分钟再试；确认没有开启 Namecheap 的 URL Redirect。

**改了代码网站没变** → 看 Actions 是否成功；浏览器强刷（Ctrl/Cmd + Shift + R）。

**推送被 SSH 安全警告挡住** → 关闭 wattTookIt 后重试。

## 六、费用与续期

| 项目 | 现在 | 之后 |
|---|---|---|
| GitHub Pages 托管 | 免费 | 免费 |
| GitHub Pro（学生包） | 免费 | 毕业/验证过期后失效（仅影响私有库 Pages，本站用 public 不受影响） |
| huahua768.me 域名 | 免费 1 年 | 约 $15–20/年，到期前 1 个月在 Namecheap 续费 |

## 七、内容维护位置

| 要改什么 | 改哪里 |
|---|---|
| 名字、邮箱、GitHub 链接 | `src/data/site.ts` |
| 项目内容（增删项目） | `src/content/projects/*.md` |
| 首页卡片结构 | `src/pages/index.astro` |
| 配色、圆角、间距 | `src/styles/global.css` 顶部变量 |
| 音乐文件 | `public/audio/` |
| 头像 | `public/avatar.jpg` |
