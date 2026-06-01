import { SERVICE_PLANS, SITE, CTA } from "@/data/site";

export function Services() {
  return (
    <section id="services" className="bg-surface-muted py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        {/* 標題 */}
        <div className="text-center">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">服務方案</h2>
          <p className="mt-4 text-lg text-text-muted">
            AI 導入、自動化流程、系統開發、一對一教學，看你需要什麼
          </p>
        </div>

        {/* 方案卡片 */}
        <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {SERVICE_PLANS.map((plan) => (
            <div
              key={plan.title}
              className="flex flex-col rounded-2xl border border-border bg-surface-card p-6 transition-all hover:border-primary/30 hover:shadow-lg hover:shadow-primary/5 sm:p-8"
            >
              {/* 圖示 + 標題 */}
              <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-primary/10 text-3xl">
                {plan.icon}
              </div>
              <h3 className="text-xl font-bold">{plan.title}</h3>
              <p className="mt-2 text-sm font-medium text-primary">{plan.summary}</p>

              {/* 說明 */}
              <p className="mt-4 leading-relaxed text-text-muted">{plan.description}</p>

              {/* 特色列表 */}
              <ul className="mt-6 space-y-3">
                {plan.features.map((f) => (
                  <li key={f} className="flex gap-2.5 text-sm">
                    <svg className="mt-0.5 h-4 w-4 shrink-0 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                    {f}
                  </li>
                ))}
              </ul>

              {/* 適合對象 */}
              <div className="mt-6 border-t border-border pt-4">
                <p className="text-xs font-semibold uppercase tracking-wider text-text-dim">適合</p>
                <div className="mt-2 flex flex-wrap gap-2">
                  {plan.suitable.map((s) => (
                    <span
                      key={s}
                      className="rounded-full bg-primary/10 px-3 py-1 text-xs text-primary"
                    >
                      {s}
                    </span>
                  ))}
                </div>
              </div>

              {/* CTA */}
              <div className="mt-auto pt-6">
                <a
                  href={SITE.lineUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex w-full items-center justify-center gap-2 rounded-xl border border-primary/50 bg-surface-card px-4 py-3 text-sm font-semibold text-primary transition-all hover:bg-primary hover:text-surface"
                >
                  {CTA.sectionLine}
                  <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
