"use client";

import { SITE } from "@/data/site";

const FORM_URL =
  "https://docs.google.com/forms/d/e/1FAIpQLSdk6XaNcAfcJdRauX9njNEgYjEHDMXu75DmyeLCHTaJe_VQAw/viewform";

export function AuditForm() {
  return (
    <div className="w-full">
      <iframe
        src={FORM_URL + "?embedded=true"}
        className="w-full rounded-xl border border-border"
        style={{ height: 3200 }}
        title="免費 AI 評估表單"
      >
        載入中…
      </iframe>
      <div className="mt-6 text-center">
        <p className="text-sm text-text-muted">
          或直接加入 LINE 快速諮詢：
          <a
            href={SITE.lineUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="ml-2 inline-flex items-center gap-1 font-semibold text-primary hover:underline"
          >
            {SITE.lineId}
            <svg className="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </p>
      </div>
    </div>
  );
}
