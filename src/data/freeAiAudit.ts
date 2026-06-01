/* ============================================================
   Clawee AI 工作室 — 免費 AI 流程健檢表單設定檔
   所有表單欄位、選項、文案全部集中在這裡
   修改欄位或選項時，只需要改這個檔案
   未來串接後端時，也可在此設定 API endpoint
   ============================================================ */

export const FREE_AI_AUDIT = {
  title: "免費 AI 流程健檢",
  description:
    "用 30～60 秒簡單描述你的需求，我們會協助你判斷哪些工作適合導入 AI Agent、自動化工具或內部系統。",
  successMessage:
    "已收到你的初步需求！你可以加入 LINE，讓我們更快協助你判斷適合的導入方式。",
  ctaLine: "加入 LINE 諮詢",
  fields: [
    {
      id: "name",
      label: "稱呼 / 公司名稱",
      type: "text" as const,
      required: true,
      placeholder: "例如：王先生 / 某某工作室",
    },
    {
      id: "contact",
      label: "LINE ID 或 Email",
      type: "text" as const,
      required: true,
      placeholder: "方便我們後續聯繫你",
    },
    {
      id: "workType",
      label: "你想改善哪一類工作？",
      type: "radio" as const,
      required: true,
      options: [
        "客戶開發 / 名單整理",
        "報表整理 / 資料彙整",
        "文件摘要 / 文字整理",
        "客服 / 回覆輔助",
        "內部流程自動化",
        "OpenClaw / AI Agent 部署",
        "還不確定，想先聊聊",
      ],
    },
    {
      id: "currentMethod",
      label: "目前這件事主要怎麼做？",
      type: "radio" as const,
      required: true,
      options: [
        "人工複製貼上",
        "Excel / Google Sheet 整理",
        "從網站或系統查資料",
        "從 PDF / Word / Email 整理",
        "多個工具之間來回搬資料",
        "還沒有固定流程",
      ],
    },
    {
      id: "dataLocation",
      label: "資料通常在哪裡？",
      type: "checkbox" as const,
      required: true,
      options: [
        "Excel / Google Sheet",
        "PDF / Word",
        "Email",
        "網站",
        "LINE / 表單",
        "CRM / ERP / 內部系統",
        "還不確定",
      ],
    },
    {
      id: "desiredOutput",
      label: "你希望最後產出什麼？",
      type: "radio" as const,
      required: true,
      options: [
        "客戶名單",
        "報表 / 表格",
        "摘要 / 文件",
        "通知 / 提醒",
        "自動化流程",
        "內部工具 / 小系統",
        "還不確定",
      ],
    },
    {
      id: "stage",
      label: "你目前的狀態是？",
      type: "radio" as const,
      required: true,
      options: [
        "先了解 AI 可以怎麼用",
        "近期想導入",
        "已經有明確需求",
        "想先估價",
      ],
    },
    {
      id: "notes",
      label: "補充說明",
      type: "textarea" as const,
      required: false,
      placeholder:
        "請用一句話描述你想省下時間的工作。例如：每天要人工整理業務名單，希望 AI 自動抓資料並整理成表格。",
    },
  ],
} as const;
