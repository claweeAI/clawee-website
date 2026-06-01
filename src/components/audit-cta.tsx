import Link from "next/link";

export function AuditCta() {
  return (
    <section className="bg-gradient-to-br from-primary to-primary-dark py-16 sm:py-20">
      <div className="mx-auto max-w-2xl px-4 text-center sm:px-6 lg:px-8">
        <h2 className="text-2xl font-bold tracking-tight text-white sm:text-3xl">
          還不確定從哪裡開始？
        </h2>
        <p className="mt-4 text-base leading-relaxed text-white/80">
          填寫免費 AI 流程健檢表單，30～60 秒讓我們了解你的需求，
          我們會告訴你哪些工作適合交給 AI 來做。
        </p>
        <div className="mt-8">
          <Link
            href="/free-ai-audit"
            className="inline-flex items-center gap-2 rounded-xl bg-white px-6 py-3 text-sm font-semibold text-primary shadow-sm transition-all hover:bg-primary/5 hover:shadow-md"
          >
            🔍 開始免費健檢
            <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
}
