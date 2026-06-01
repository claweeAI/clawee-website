import Link from "next/link";
import { SITE, CTA } from "@/data/site";

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-surface-muted via-white to-blue-50">
      {/* 幾何網格背景 */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(#e2e8f0_1px,transparent_1px)] [background-size:24px_24px] [mask-image:radial-gradient(ellipse_60%_60%_at_50%_40%,black,transparent)]" />
      <div className="absolute -right-32 -top-32 h-96 w-96 rounded-full bg-primary/5 blur-3xl" />
      <div className="absolute -bottom-32 -left-32 h-72 w-72 rounded-full bg-accent/5 blur-3xl" />

      <div className="relative mx-auto flex max-w-6xl flex-col items-center px-4 pb-24 pt-20 text-center sm:px-6 sm:pt-28 lg:px-8">
        {/* 品牌標籤 */}
        <div className="mb-5 inline-block rounded-full bg-primary/10 px-4 py-1.5 text-xs font-semibold text-primary">
          AI 自動化導入專家
        </div>

        {/* 主標語 */}
        <h1 className="max-w-3xl text-4xl font-extrabold leading-tight tracking-tight sm:text-5xl lg:text-6xl">
          <span className="gradient-text">{SITE.tagline}</span>
        </h1>

        {/* 一句話解釋我們幫誰解決什麼問題 */}
        <p className="mt-6 max-w-2xl text-lg leading-relaxed text-text-muted sm:text-xl">
          我們協助中小企業與個人工作者導入 AI Agent、自動化流程與內部系統。
          不用懂程式，也能讓 AI 幫你處理報表、開發客戶、整理文件。
        </p>

        {/* 信任信號 — 解決三項不安 */}
        <div className="mt-8 flex flex-wrap items-center justify-center gap-x-8 gap-y-3 text-sm text-text-muted">
          <span className="flex items-center gap-1.5">
            <svg className="h-4 w-4 shrink-0 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
            </svg>
            從需求分析到上線一條龍
          </span>
          <span className="flex items-center gap-1.5">
            <svg className="h-4 w-4 shrink-0 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
            </svg>
            台灣團隊，全程中文溝通
          </span>
          <span className="flex items-center gap-1.5">
            <svg className="h-4 w-4 shrink-0 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
            </svg>
            不做過度承諾，只做做得到的事
          </span>
        </div>

        {/* CTA 按鈕群 */}
        <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row">
          <a
            href={SITE.lineUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex w-full items-center justify-center gap-2.5 rounded-xl bg-primary px-8 py-3.5 text-base font-semibold text-white shadow-lg shadow-primary/25 transition-all hover:bg-primary-dark hover:shadow-xl hover:shadow-primary/30 sm:w-auto sm:px-10 sm:py-4 sm:text-lg"
          >
            <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M22.14 0H1.86A1.86 1.86 0 000 1.86v14.14a1.86 1.86 0 001.86 1.86h3.72v5.28a.7.7 0 001.12.56l6.46-5.84h8.98A1.86 1.86 0 0024 16V1.86A1.86 1.86 0 0022.14 0z" />
            </svg>
            {CTA.heroLine}
          </a>
          <Link
            href="#services"
            className="flex w-full items-center justify-center gap-2 rounded-xl border border-border bg-white px-8 py-3.5 text-base font-semibold text-text transition-all hover:border-primary hover:text-primary sm:w-auto sm:px-10 sm:py-4"
          >
            {CTA.heroSecondary}
            <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
}
