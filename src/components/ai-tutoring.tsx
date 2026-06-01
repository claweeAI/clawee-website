import { SITE, CTA } from "@/data/site";

const TUTORING_SCENARIOS = [
  {
    title: "AI 工具入門",
    desc: "ChatGPT、Claude 等工具實際操作，教你怎麼用在日常工作",
  },
  {
    title: "OpenClaw 部署與教學",
    desc: "從零開始建立你自己的 AI 助手，學會部署與日常維護",
  },
  {
    title: "自動化流程設計",
    desc: "學會用 AI 串接工具、自動處理報表、整理資料",
  },
  {
    title: "完全客製內容",
    desc: "你想學什麼，我們就教什麼。沒有限制",
  },
];

const PRICING_TIERS = [
  {
    name: "純教學",
    price: "依時數計費",
    badge: null,
    features: [
      "一對一線上教學",
      "內容完全客製",
      "時間彈性預約",
      "課後重點整理",
    ],
  },
  {
    name: "安裝 + 教學",
    price: "方案報價",
    badge: "含部署",
    features: [
      "含 AI 系統安裝部署",
      "一對一操作教學",
      "後續維護諮詢",
      "一次搞定不用再找人",
    ],
  },
];

export function AiTutoring() {
  return (
    <section id="ai-tutoring" className="bg-white py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        {/* 標題 */}
        <div className="text-center">
          <span className="inline-block rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-primary">
            一對一教學
          </span>
          <h2 className="mt-4 text-3xl font-bold tracking-tight sm:text-4xl">
            AI 家教教學
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-text-muted">
            不管你有沒有經驗，我們帶你一步步學會用 AI。內容完全客製，你想學什麼就教什麼。
          </p>
        </div>

        {/* 可教內容 */}
        <div className="mt-16">
          <h3 className="text-center text-lg font-semibold text-text-muted">
            可教學內容範例
          </h3>
          <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {TUTORING_SCENARIOS.map((s) => (
              <div
                key={s.title}
                className="rounded-xl border border-border bg-surface-muted p-5 transition-all hover:border-primary/30 hover:shadow-md"
              >
                <h4 className="font-semibold">{s.title}</h4>
                <p className="mt-2 text-sm leading-relaxed text-text-muted">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* 收費方案 */}
        <div className="mt-16">
          <h3 className="text-center text-lg font-semibold text-text-muted">
            收費方式
          </h3>
          <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:mx-auto lg:max-w-2xl">
            {PRICING_TIERS.map((tier) => (
              <div
                key={tier.name}
                className="relative flex flex-col rounded-2xl border border-border bg-white p-6 shadow-sm transition-all hover:shadow-md sm:p-8"
              >
                {tier.badge && (
                  <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-primary px-4 py-1 text-xs font-semibold text-white">
                    {tier.badge}
                  </span>
                )}
                <h4 className="text-lg font-bold">{tier.name}</h4>
                <p className="mt-1 text-2xl font-bold text-primary">{tier.price}</p>
                <ul className="mt-4 space-y-3">
                  {tier.features.map((f) => (
                    <li key={f} className="flex gap-2.5 text-sm">
                      <svg className="mt-0.5 h-4 w-4 shrink-0 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                      </svg>
                      {f}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="mt-12 text-center">
          <a
            href={SITE.lineUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-xl bg-primary px-6 py-3 text-sm font-semibold text-white shadow-sm transition-all hover:bg-primary-dark"
          >
            {CTA.contactLine}
            <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}
