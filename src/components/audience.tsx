import { TARGET_AUDIENCE, SITE, CTA } from "@/data/site";

export function Audience() {
  return (
    <section id="audience" className="bg-surface-muted py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        {/* 標題 */}
        <div className="text-center">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            這些人都適合找我們聊聊
          </h2>
          <p className="mt-4 text-lg text-text-muted">
            不確定自己是不是目標對象？看看以下描述有沒有你的影子
          </p>
        </div>

        {/* 對象卡片 */}
        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {TARGET_AUDIENCE.map((item) => (
            <div
              key={item.title}
              className="rounded-2xl border border-border bg-surface-card p-6 transition-all hover:border-primary/30 hover:shadow-lg hover:shadow-primary/5"
            >
              <div className="mb-3 text-2xl">{item.icon}</div>
              <h3 className="font-bold">{item.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-text-muted">{item.desc}</p>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-10 text-center">
          <p className="text-sm text-text-muted">
            有被說中嗎？別猶豫，加 LINE 我們先聊聊。
          </p>
          <a
            href={SITE.lineUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-3 inline-flex items-center gap-2 rounded-xl bg-primary px-6 py-3 text-sm font-semibold text-surface shadow-md transition-all hover:bg-primary-dark"
          >
            {CTA.sectionLine}
            <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}
