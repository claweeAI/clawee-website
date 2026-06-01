/* ============================================================
   Clawee AI 工作室 — 網站資料設定檔
   所有品牌資訊、服務內容、文案全部集中在這裡
   修改 LINE 或服務時，只需要改這個檔案
   ============================================================ */

// ========== 品牌基本資料 ==========

export const SITE = {
  name: "Clawee AI 工作室",
  tagline: "讓 AI 不只是聊天，而是開始替你工作",
  metaDescription:
    "Clawee AI 工作室提供 AI Agent 導入、自動化流程設計與內部系統開發等顧問服務，協助台灣中小企業與個人工作者找到 AI 真正能幫上忙的地方。",
  url: "https://clawee.ai",
  email: "clawee.ai@gmail.com",
  lineId: "@410wabnt",
  lineUrl: "https://line.me/R/ti/p/@410wabnt",
  // 注意：修改 lineUrl 時，所有 LINE 按鈕會自動更新
} as const;

// ========== 導航選單 ==========

export const NAV_ITEMS = [
  { label: "免費健檢", href: "/free-ai-audit" },
  { label: "服務方案", href: "#services" },
  { label: "應用案例", href: "#cases" },
  { label: "AI 家教", href: "#ai-tutoring" },
  { label: "適合對象", href: "#audience" },
  { label: "聯絡我們", href: "#contact" },
] as const;

// ========== CTA 文案集中管理 ==========

export const CTA = {
  heroLine: "LINE 免費諮詢",
  heroSecondary: "看看我們做什麼",
  sectionLine: "LINE 免費諮詢",
  contactLine: "免費 LINE 諮詢",
  services: "了解更多",
} as const;

// ========== 潛在客戶常見痛點 ==========

export const PAIN_POINTS = [
  {
    icon: "📋",
    title: "每天花太多時間整理資料",
    desc: "報表、客戶資料、會議記錄，每週好幾小時花在複製貼上，真正該做事的時候反而沒時間。",
  },
  {
    icon: "🤷",
    title: "想導入 AI，但不知從何開始",
    desc: "ChatGPT 聽起來很厲害，打開之後卻不知道怎麼用在實際工作上。試了幾次就放著生灰塵。",
  },
  {
    icon: "🔗",
    title: "公司內部流程太分散",
    desc: "Excel 傳來傳去、LINE 群組資訊散落各地、簽核要人工追。事情一多就容易漏接。",
  },
] as const;

// ========== 四大服務方案 ==========

export const SERVICE_PLANS = [
  {
    title: "AI Agent 部署與客製化",
    icon: "🤖",
    summary: "為你的業務打造專屬 AI 助手",
    description:
      "依照你的業務場景部署可自主運作的 AI Agent，自動處理客戶開發、資料整理等工作，減少團隊重複人力支出。",
    features: [
      "部署可自主運作的 AI Agent",
      "自動處理客戶開發、資料整理等工作",
      "可設定排程定時執行任務",
      "視需求做客製化調整",
    ],
    suitable: ["想節省人力成本的團隊", "有固定重複流程的部門"],
  },
  {
    title: "AI 自動化流程設計",
    icon: "🔁",
    summary: "把重複的事交給 AI 做",
    description:
      "找出團隊每天花最多時間的工作，設計自動化腳本，讓你把時間花在真正需要人判斷的事情上。",
    features: [
      "分析工作流程，找出可自動化的環節",
      "設計自動化腳本，減少手動作業",
      "串接常用工具（Excel、Gmail、LINE、Slack）",
      "提供測試與上線後的調整",
    ],
    suitable: ["行政與營運團隊", "有大量重複作業的個人或小組"],
  },
  {
    title: "企業內部系統 / 小型工具開發",
    icon: "💻",
    summary: "開發簡單好用的內部工具",
    description:
      "當市售軟體不符你的流程時，我們開發剛好夠用的工具 — 簽核、報表、客戶後台，讓資料在對的地方自動流動。",
    features: [
      "開發簽核系統、報表平台、CRM 小工具",
      "串接公司內部既有系統",
      "用 AI 強化搜尋、摘要、分類功能",
      "台灣團隊開發，可長期維護",
    ],
    suitable: ["想導入數位化但預算有限的中小企業", "流程特殊、市售軟體不合用的團隊"],
  },
  {
    title: "AI 家教教學",
    icon: "🎓",
    summary: "一對一 AI 教學，從零開始也可以",
    description:
      "不管你完全沒有程式背景、還是已經用過 ChatGPT，我們一對一教你真正能把 AI 用在工作上的技巧。",
    features: [
      "零基礎可學，不需任何程式經驗",
      "一對一線上教學，時間彈性",
      "內容完全客製，想學什麼教什麼",
      "可選擇純教學或含部署的一條龍方案",
    ],
    suitable: ["對 AI 有興趣的個人或老闆", "想學但不知從何開始的小白"],
  },
] as const;

// ========== 應用案例 ==========

export const USE_CASES = [
  {
    title: "客戶開發 Agent",
    icon: "🎯",
    problem: "業務團隊每天花好幾小時手動搜尋潛在客戶",
    solution:
      "設定目標產業與地區後，Agent 會自動搜尋符合條件的公司、分析背景資訊、產出開發信草稿，並整理成每日待辦清單。你的團隊只要專注在打電話和約見面。",
    steps: [
      "設定目標產業與地區",
      "Agent 自動搜尋潛在公司",
      "分析公司背景與痛點",
      "產出開發信與行動清單",
    ],
  },
  {
    title: "文件整理 Agent",
    icon: "📄",
    problem: "會議記錄、合約審閱、報告整理，每月花幾十小時在重複性文書工作",
    solution:
      "把資料丟給 Agent，它會自動讀取內容、摘要重點、比對不同版本的差異，產出你需要的會議記錄或報告格式。不用再自己一行一行看。",
    steps: [
      "上傳文件或貼上連結",
      "Agent 自動讀取與分析",
      "產出摘要、重點與待辦事項",
      "匯出成報告、Excel 或 Notion",
    ],
  },
  {
    title: "報表自動化 Agent",
    icon: "📊",
    problem: "每週花兩三小時手動拉 Excel 報表，只是換數據而已",
    solution:
      "設定好報表模板與資料來源後，Agent 會定時自動從各系統拉資料、填入報表、寄到信箱。從此打開信箱就有最新的報表等著你，不用再手動做。",
    steps: [
      "設定報表模板與資料來源",
      "定時自動從各系統拉取數據",
      "自動填入報表並計算",
      "產出 Excel／PDF 並寄到信箱",
    ],
  },
] as const;

// ========== 適合對象 ==========

export const TARGET_AUDIENCE = [
  {
    icon: "👔",
    title: "中小企業老闆",
    desc: "想用 AI 節省人力成本、提升營運效率，但不確定從什麼地方開始最有效。",
  },
  {
    icon: "📞",
    title: "業務團隊",
    desc: "每天花太多時間找客戶名單跟整理資料，需要自動化工具來釋放業務戰力。",
  },
  {
    icon: "📁",
    title: "行政與營運團隊",
    desc: "重複的報表、簽核、資料輸入佔據大部分工作時間，想要更聰明的工作方式。",
  },
  {
    icon: "🖥️",
    title: "個人工作室",
    desc: "一個人當多人用，需要 AI 輔助處理文書、客服、帳務等瑣碎工作。",
  },
  {
    icon: "🤔",
    title: "想導入 AI 的非技術背景使用者",
    desc: "聽了很多 AI 工具但不知道怎麼用在實際工作中，需要有人帶入門。",
  },
  {
    icon: "👨‍🎓",
    title: "AI 初學者",
    desc: "對 AI 有興趣但完全沒有基礎，想要有人帶你從實戰中學會怎麼用。",
  },
] as const;

// ========== 諮詢流程 ==========

export const CONSULTATION_STEPS = [
  {
    step: 1,
    title: "需求討論",
    desc: "加 LINE 後簡單聊聊你想解決的問題，不用準備任何資料",
  },
  {
    step: 2,
    title: "初步評估",
    desc: "我們判斷可行性，告訴你大概需要多少時間與預算",
  },
  {
    step: 3,
    title: "方案報價",
    desc: "覺得可行就提供具體方案與報價，不強迫推銷",
  },
  {
    step: 4,
    title: "開始執行",
    desc: "確認後開始動工，過程保持溝通，直到你驗收滿意",
  },
] as const;
