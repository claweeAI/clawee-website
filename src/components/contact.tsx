import { SITE, CTA, CONSULTATION_STEPS } from "@/data/site";

export function Contact() {
  return (
    <section id="contact" className="bg-white py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          {/* 標題 */}
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            準備好了？那就開始吧
          </h2>
          <p className="mt-4 text-lg text-text-muted">
            不確定從哪裡開始也沒關係，加 LINE 說一聲，我們先聊聊你的需求，適合再做。
          </p>

          {/* LINE CTA — 大、綠、明顯 */}
          <div className="mt-10">
            <a
              href={SITE.lineUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex w-full items-center justify-center gap-3 rounded-2xl bg-[#06C755] px-8 py-4 text-lg font-bold text-white shadow-lg shadow-green-500/25 transition-all hover:bg-[#05b34b] hover:shadow-xl hover:shadow-green-500/30 sm:w-auto sm:px-14 sm:py-5 sm:text-xl"
            >
              <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M22.14 0H1.86A1.86 1.86 0 000 1.86v14.14a1.86 1.86 0 001.86 1.86h3.72v5.28a.7.7 0 001.12.56l6.46-5.84h8.98A1.86 1.86 0 0024 16V1.86A1.86 1.86 0 0022.14 0z" />
              </svg>
              {CTA.contactLine}
            </a>
          </div>

          {/* 備用 Email */}
          <div className="mt-8">
            <p className="text-sm text-text-muted">
              或不習慣用 LINE，也可以寫信到{" "}
              <a
                href={`mailto:${SITE.email}`}
                className="font-medium text-primary underline-offset-2 hover:underline"
              >
                {SITE.email}
              </a>
            </p>
          </div>
        </div>

        {/* 諮詢流程 */}
        <div className="mx-auto mt-16 max-w-3xl">
          <h3 className="text-center text-lg font-semibold text-text">
            諮詢流程
          </h3>
          <p className="mt-2 text-center text-sm text-text-muted">
            簡單四步，不用準備任何東西
          </p>

          <div className="mt-8 grid gap-4 sm:grid-cols-4">
            {CONSULTATION_STEPS.map((step) => (
              <div key={step.step} className="relative rounded-xl border border-border bg-surface-muted p-5 text-center">
                {/* 步驟編號 */}
                <div className="mx-auto mb-3 flex h-8 w-8 items-center justify-center rounded-full bg-primary text-sm font-bold text-white">
                  {step.step}
                </div>
                <h4 className="font-semibold">{step.title}</h4>
                <p className="mt-2 text-xs leading-relaxed text-text-muted">{step.desc}</p>

                {/* 箭頭（桌機用） */}
                {step.step < 4 && (
                  <div className="absolute -right-3 top-1/2 hidden -translate-y-1/2 text-border sm:block">
                    <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* 保證 — 降低猶豫 */}
        <div className="mx-auto mt-12 max-w-lg rounded-2xl border border-border bg-surface-muted p-6 text-center">
          <p className="text-sm font-semibold text-text">
            💡 初次諮詢完全免費
          </p>
          <p className="mt-2 text-sm text-text-muted">
            加 LINE 後我們會先了解你的需求，評估可行性後再報價。
            如果不適合，我們也會誠實跟你說，不會為了接案硬做。
          </p>
        </div>
      </div>
    </section>
  );
}
