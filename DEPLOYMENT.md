# 发布配置 / Deployment setup

The live website is the existing Cloudflare Pages **Direct Upload** project `context-time`:

- English: https://context-time.pages.dev/
- 中文：https://context-time.pages.dev/zh

## 一次性设置 / One-time setup

Automatic publishing is prepared in `.github/workflows/deploy.yml`, but needs these repository settings before it can deploy:

| GitHub Actions setting | Value |
| --- | --- |
| Repository secret `CLOUDFLARE_API_TOKEN` | A Cloudflare API token with **Account → Cloudflare Pages → Edit**, limited to the account containing `context-time`. |
| Repository variable **or** secret `CLOUDFLARE_ACCOUNT_ID` | The ID of that Cloudflare account. |

在仓库 **Settings → Secrets and variables → Actions** 添加以上配置，再进入 **Actions → Deploy website → Run workflow**，选择 `main`。请直接在平台输入密钥，不要写入文件或提交到仓库。 / Add these settings under **Settings → Secrets and variables → Actions**, then run **Actions → Deploy website → Run workflow** on `main`. Enter credentials directly in the platform; do not commit them to source files.

Without both settings the workflow reports that setup is needed and skips deployment. The existing live site remains available.

## 更新 / Updates

After setup, commits to `main` changing `dist/`, the translation script, or this workflow trigger deployment. Pull requests and other branches do not deploy. The workflow uploads `dist/` to `context-time` with `--branch=main`; keep `main` as the project's production branch.

The two language pages are committed as standalone files. The workflow uploads those files as edited and does not overwrite Chinese text by running the optional translation generator.

For a manual update, open the existing Pages project, create a production deployment, and upload `dist/` or a ZIP with `index.html`, `zh.html`, and `assets/` at the ZIP root. Upload only the public website directory.

## References

- [Cloudflare: Direct Upload with continuous integration](https://developers.cloudflare.com/pages/how-to/use-direct-upload-with-continuous-integration/)
- [Cloudflare: Direct Upload](https://developers.cloudflare.com/pages/get-started/direct-upload/)
- [Wrangler Action v4.1.3](https://github.com/cloudflare/wrangler-action/releases/tag/v4.1.3)
- [Wrangler 4.161.0](https://github.com/cloudflare/workers-sdk/releases/tag/wrangler%404.161.0)

Actions are pinned to release commit SHAs; Wrangler is pinned to version 4.161.0. Versions were checked on November 13, 2026.
