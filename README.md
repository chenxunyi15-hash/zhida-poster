# 知答海报 (Zhida Poster)

> 将知乎优质回答转化为精美可分享海报的 AI 应用

## 功能

- **输入回答链接**：粘贴知乎回答 URL，自动抓取内容
- **手动编辑**：自由编辑标题、作者、正文、赞同数
- **多种模板**：经典、墨韵、暗夜、极简 四种风格
- **实时预览**：所见即所得
- **一键导出**：下载高清 PNG 海报，分享到社交平台

## 技术栈

- React 18 + Vite
- html2canvas（海报导出）
- Lucide React（图标）

## 快速开始

```bash
npm install
npm run dev
```

## 构建

```bash
npm run build
```

## 知乎 AI Works 集成

本项目可通过 `使用知乎开放数据` API 获取回答内容。配置 API Key 后可启用自动抓取。

## 许可

MIT