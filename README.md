# Context-Time · ICDM 2026 Tutorial

Context-Aware Time Series Forecasting with LLMs: From Pattern Recognition to Cognitive Reasoning.

**在线 / Live:** [English](https://context-time.pages.dev/) · [中文](https://context-time.pages.dev/zh)

## 编辑 / Edit

1. 管理员在仓库 **Settings → Collaborators** 邀请协作者。 / The owner invites editors under **Settings → Collaborators**.
2. 打开下方文件，点击铅笔编辑并提交修改。 / Open a file below, click the pencil, and commit the change.
3. 自动发布配置完成后，`main` 分支的网站修改会更新现有域名。当前需要先完成 [发布配置](DEPLOYMENT.md)。 / After the one-time [deployment setup](DEPLOYMENT.md), website changes on `main` update the existing domain.

| 文件 / File | 内容 / Content |
| --- | --- |
| `dist/index.html` | 英文介绍 / English text |
| `dist/zh.html` | 中文介绍 / Chinese text |
| `dist/content.js` | 讲者与日程 / Speakers and schedule |
| `dist/research-data.js` | 论文、链接与中英文简介 / Research entries, links, and bilingual summaries |
| `dist/assets/` | 讲者照片与研究配图 / Portraits and research figures |
| `dist/style.css` | 页面样式 / Page styling |

英文、中文页面可以分别修改。若使用 `python3 scripts/build-translations.py` 生成中文页，请同时更新脚本中的翻译；该命令会覆盖 `dist/zh.html`。 / The two pages can be edited separately. The optional translation script overwrites `dist/zh.html`; update its translation map when using it.

## 本地预览 / Local preview

```sh
python3 -m http.server 8765 --directory dist
```

Open [localhost:8765](http://localhost:8765). No installation or build is required.

手动发布时，将 `dist/` 文件夹或其内容打成的 ZIP 上传至现有 Cloudflare Pages 项目 `context-time`。 / For manual updates, upload `dist/` or a ZIP of its contents to the existing Cloudflare Pages project `context-time`.

Images and professional profile sources are recorded in [ASSET-SOURCES.md](ASSET-SOURCES.md).
