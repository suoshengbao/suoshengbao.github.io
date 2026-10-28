# SuoLab website

SuoLab（广州实验室）学术网站。继续使用原有 Jekyll、Liquid、Bootstrap SCSS 与 YAML 数据文件。

## 目录与 GitHub 部署

```text
_config.yml            网站配置、邮箱及地址前缀
_data/                 成员、论文、新闻等数据
_pages/                页面内容
_includes/             可重复使用的页面片段
_layouts/              Jekyll 页面模板
_sass/                 原有 Bootstrap SCSS
css/main.scss          网站样式
images/                网站引用的图片
js/                    菜单与轮播交互
fonts/                 原有字体资源
Gemfile / Gemfile.lock  原有依赖文件
```

源码仍放在仓库根目录，没有改成 React、Node、dist 或其他项目结构，也不需要额外前端打包步骤。Gemfile 和 Gemfile.lock 保留原始版本。

按仓库原有 GitHub Pages 方式部署即可；如果使用分支发布，发布源应选择存放这些文件的分支及根目录 `/ (root)`。不要把 `_site/`、缓存、备份或预览快照当成源码提交。

[GitHub Pages 与 Jekyll 的官方说明](https://docs.github.com/en/pages/setting-up-a-github-pages-site-with-jekyll/about-github-pages-and-jekyll)

## 使用 GitHub Desktop 发布

这个目录是已有 Git 仓库，当前本地分支为 `main`，远程仓库是 `suoshengbao/suoshengbao.github.io`。直接提交并推送本目录的修改即可，保留其中隐藏的 `.git` 目录。

1. 在 GitHub Desktop 选择 **File → Add Local Repository**，添加本目录，确认 **Current Branch** 为 `main`。
2. 在 **Changes** 逐项核对修改、新增和删除。清理无用文件会显示为删除；此前已有的本地修改也可能显示在这里，请仅勾选希望发布的更改。
3. 在 Summary 填写 `Update SuoLab website`，点击 **Commit to main**。
4. 点击 **Fetch origin**。若出现 **Pull origin**，先拉取远程更改并处理可能的冲突，再点击 **Push origin**。不要使用强制推送覆盖他人的提交。
5. 在 GitHub 仓库的 **Settings → Pages** 确认发布源。若采用分支发布，选择 **Deploy from a branch**、`main`、`/(root)` 并保存。若当前使用其他分支或 GitHub Actions，请先确认现有流程再修改设置。
6. 在仓库 **Actions** 查看页面构建和部署状态，完成后访问 https://suoshengbao.github.io 。GitHub 提示发布可能需要最多约 10 分钟。

本地预览和线上网站相互独立；必须推送到 GitHub 且远程部署成功后，线上内容才会更新。本地 Jekyll 构建通过不能代替 GitHub 实际构建结果。

如果将源码包复制到另一个现有仓库，解压后应把 `suoshengbao.github.io/` **内部的内容**放在仓库根目录，保留原有 `.git`；检查并提交需要同步的删除。不要把整个文件夹嵌套到同名仓库内。

官方参考：[添加本地仓库到 GitHub Desktop](https://docs.github.com/en/desktop/adding-and-cloning-repositories/adding-a-repository-from-your-local-computer-to-github-desktop)、[GitHub Pages 发布源](https://docs.github.com/en/pages/getting-started-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site)。

## 更新成员

当前成员（包括 PI）统一编辑 `_data/team_members.yml`；毕业/离组成员编辑 `_data/alumni_members.yml`。列表顺序就是网页展示顺序，不用修改 Team 页 HTML。

照片分别放在 `images/teampic/` 与 `images/alumnipic/`，`photo` 填写对应目录下的准确文件名（注意大小写）。复制相邻记录并修改即可：

```yaml
- name: "Member Name"
  photo: "MemberName.jpg"
  info: "Ph.D. student"
  email:
  number_educ: 2
  education1: "2026-present Ph.D. candidate, University Name"
  education2: "2022-2026 B.S., University Name"
```

`number_educ` 与 `education1`、`education2` 等条数保持一致。没有教育经历时填 `number_educ: 0`。人物条目使用原来的单列“照片 + 简介”排列。Staff and Students 的卡片会按内容最多的一条自动统一高度，避免经历文字被截断。

## 更新论文

在对应年度的 `_data/publist_2026.yml` 等文件中添加记录。标题、作者、链接和期刊信息是必要内容；原有 `image`、`description`、`highlight` 字段仍兼容，但不影响年度列表展示。

```yaml
- title: "Full article title"
  authors: "First Author^; Second Author; **Shengbao Suo**#."
  link:
    url: "https://doi.org/10.xxxx/example"
    display: "Journal Name, 2026, 12(3):123-135"
```

新一年只需新增 `_data/publist_2027.yml`，格式相同。页面自动识别 `publist_年份.yml` 数据文件，生成年份导航并倒序排列，无需再改 `_pages/publications.md`。

Highlights 单独由 `_data/publist_highlight.yml` 决定：复制想精选的论文到这个文件即可；年度文件中的 `highlight` 数字不控制这个区域。移出 Highlights 不会删除年度列表里的论文。目前精选保留四篇，桌面端为两行两列；手机端为单列。

保留 `^` 表示共同第一作者、`#` 表示通讯作者，`**姓名**` 或已有 `<b>姓名</b>` 可用于加粗。正式出版信息与在线首发年份请分清，需要时在 `display` 末尾注明 `(online 2025)`。

## 更新 News

编辑原有 `_data/news.yml`，把最新记录放在最上面。首页自动显示前五条，All news 显示全部。

```yaml
- date: "Oct 2026"
  headline: "Our study on ... has been published in Journal Name."
  url: "https://doi.org/10.xxxx/example"
```

`url` 可省略；省略时不显示论文入口。保持与现有记录相同的缩进，建议对标题、日期和包含冒号的文字使用引号。

## 更新首页 Research snapshots

把图片放入 `images/homepage/`，然后编辑 `_data/research_snapshots.yml`。每条记录填写文件名和简短的英文图片说明，按列表顺序显示；复制下面的格式即可新增，删除或调整记录即可移除或排序，无需修改页面模板：

```yaml
- image: "Fig1.png"
  alt: "Single-cell analysis of immune regulation"
```

文件名区分大小写。建议使用清晰的横向图片；不同尺寸会等比例完整显示，不会被裁剪。默认每 5 秒横向轮播；鼠标悬停或键盘聚焦时暂停，也可通过 Pause / Play 控制。系统开启减少动态效果时默认暂停。只有一张图片时不显示轮播按钮。

## 本地预览与维护

已经使用 Jekyll 3.9.5 的 `--safe` 模式构建验证，页面不依赖自定义插件。

本次聊天附有独立的本地预览启动脚本，源码目录中不放置与本机路径绑定的工具；备份、截图、核查报告与预览快照也均在源码目录以外。

若已有 Jekyll 环境，可在本目录构建或运行预览；本次交付没有改动原始依赖锁文件。修改源码后需重新构建，静态快照本身不会自动更新。

主要维护位置：全站配色和间距在 `css/main.scss`；普通页面正文在 `_pages/`；联系邮箱在 `_config.yml`。
