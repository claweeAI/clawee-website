# Clawee AI 工作室 — 官方網站

Clawee AI 工作室的形象網站。展示 AI Agent 部署、自動化流程設計、AI 家教教學與企業 AI 導入服務，讓潛在客戶透過 LINE 聯繫我們。

## 技術棧

- **Next.js 16** — React 框架，App Router
- **TypeScript** — 型別安全
- **Tailwind CSS v4** — 原子化樣式

## 快速啟動

```bash
# 安裝相依套件（僅首次）
npm install

# 本地開發
npm run dev
# → 瀏覽器開啟 http://localhost:3000

# 正式建置
npm run build

# 啟動正式版本
npm start
```

---

## 如何修改網站內容

所有可編輯的內容全部集中在一個檔案：

```
src/data/site.ts
```

### 修改 LINE 連結

在 `src/data/site.ts` 找到：

```ts
lineId: "@410wabnt",
lineUrl: "https://line.me/R/ti/p/@410wabnt",
```

改成你的 LINE ID 即可。所有頁面上的 LINE 按鈕會自動更新。

### 修改 Email

```ts
email: "clawee.ai@gmail.com",
```

### 修改服務項目

找到 `SERVICE_PLANS` 陣列，每個方案包含：

| 欄位 | 說明 |
|------|------|
| `title` | 方案名稱 |
| `icon` | Emoji 圖示 |
| `summary` | 一句話摘要 |
| `description` | 詳細說明 |
| `features` | 特色列表 |
| `suitable` | 適合對象標籤 |

### 修改 AI 家教教學區塊

在 `src/components/ai-tutoring.tsx` 中修改教學項目或收費方案。

### 修改應用案例

找到 `USE_CASES` 陣列，每個案例包含：

| 欄位 | 說明 |
|------|------|
| `title` | 案例名稱 |
| `icon` | Emoji 圖示 |
| `problem` | 客戶痛點描述 |
| `solution` | 解決方案說明 |
| `steps` | 運作流程步驟 |

### 新增案例

在 `USE_CASES` 陣列中新增一個物件即可：

```ts
{
  title: "你的案例名稱",
  icon: "🎯",
  problem: "客戶的痛點問題",
  solution: "我們的解決方案",
  steps: ["步驟一", "步驟二", "步驟三", "步驟四"],
},
```

### 修改 CTA 按鈕文案

找到 `CTA` 物件：

```ts
export const CTA = {
  heroLine: "加入 LINE 諮詢",         // Hero 主要按鈕
  heroSecondary: "看看我們做什麼",     // Hero 次要按鈕
  sectionLine: "免費 LINE 諮詢",       // 各區塊中的 LINE 按鈕
  contactLine: "加入 LINE 開始洽談",   // 聯絡區主要按鈕
};
```

### 修改適合對象

找到 `TARGET_AUDIENCE` 陣列，每個物件包含 `icon`、`title`、`desc`。

### 修改諮詢流程

找到 `CONSULTATION_STEPS` 陣列。

---

## 如何新增頁面（例如 SEO 文章頁）

1. 在 `src/app/` 下新增資料夾，例如 `src/app/blog/`
2. 新增 `src/app/blog/page.tsx`
3. 如果要寫 SEO 文章，可使用 Next.js 的 `generateMetadata` 設定 meta 資訊

範例：

```tsx
// src/app/blog/page.tsx
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Clawee AI 部落格 — AI 自動化入門",
  description: "...",
};

export default function BlogPage() {
  return <div>...</div>;
}
```

## 專案結構

```
src/
├── app/
│   ├── globals.css        # 全域樣式 + Tailwind 主題
│   ├── layout.tsx         # 根佈局（Meta、字型）
│   └── page.tsx           # 首頁（組合所有區塊）
├── components/
│   ├── header.tsx         # 導覽列
│   ├── hero.tsx           # Hero 區塊
│   ├── pain-points.tsx    # 痛點區塊
│   ├── services.tsx       # 四大服務方案
│   ├── ai-tutoring.tsx    # AI 家教教學獨立區塊
│   ├── use-cases.tsx      # 應用案例
│   ├── audience.tsx       # 適合對象
│   ├── audit-cta.tsx      # 免費 AI 流程健檢 CTA 區塊
│   ├── audit-form.tsx     # 免費 AI 流程健檢表單元件
│   ├── contact.tsx        # 聯絡我們 + 諮詢流程
│   └── footer.tsx         # 頁尾
└── data/
    ├── freeAiAudit.ts     # 免費 AI 流程健檢表單設定（欄位、選項、文案）
    └── site.ts            # ⭐ 所有可編輯的網站內容（唯一）
```

---

## 部署

已透過 Vercel 自動部署。每次 push 到 `main` 分支就會自動建置上線。

自訂網域：**clawee.co**（DNS 指向 76.76.21.21）
