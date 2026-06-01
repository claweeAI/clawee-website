import Link from "next/link";
import { SITE, CTA } from "@/data/site";
import { FREE_AI_AUDIT } from "@/data/freeAiAudit";
import { AuditForm } from "@/components/audit-form";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "免費 AI 流程健檢 — Clawee AI 工作室",
  description:
    "用 30～60 秒簡單描述你的需求，我們會協助你判斷哪些工作適合導入 AI Agent、自動化工具或內部系統。",
};

export default function FreeAiAuditPage() {
  return (
    <main className="min-h-screen bg-surface">
      {/* Header spacers */}
      <div className="h-16" />

      {/* 返回按鈕 */}
      <div className="mx-auto max-w-2xl px-4 sm:px-6 lg:px-8 pt-4">
        <Link
          href="/"
          className="inline-flex items-center gap-1.5 text-sm text-text-muted transition-colors hover:text-primary"
        >
          <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
          </svg>
          回首頁
        </Link>
      </div>

      <section className="py-16 sm:py-24">
        <div className="mx-auto max-w-2xl px-4 sm:px-6 lg:px-8">
          {/* 標題 */}
          <div className="text-center">
            <span className="inline-block rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-primary">
              免費｜約 30～60 秒
            </span>
            <h1 className="mt-4 text-3xl font-bold tracking-tight sm:text-4xl">
              {FREE_AI_AUDIT.title}
            </h1>
            <p className="mx-auto mt-4 max-w-lg text-base leading-relaxed text-text-muted">
              {FREE_AI_AUDIT.description}
            </p>
          </div>

          {/* 表單 */}
          <div className="mt-10 rounded-2xl border border-border bg-surface-card p-6 shadow-sm sm:p-8">
            <AuditForm />
          </div>

          {/* 下方的 LINE 提示 */}
          <div className="mt-8 text-center text-sm text-text-muted">
            也可以直接加 LINE 聊聊 →
            <a
              href={SITE.lineUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="ml-1.5 font-semibold text-primary underline underline-offset-2 hover:text-primary-dark"
            >
              {CTA.contactLine}
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
