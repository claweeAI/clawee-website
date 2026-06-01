"use client";

import { SITE } from "@/data/site";

export function FloatingLineButton() {
  return (
    <a
      href={SITE.lineUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-primary text-surface shadow-lg shadow-primary/30 transition-all hover:bg-primary-dark hover:shadow-xl hover:shadow-primary/40 hover:scale-110 sm:bottom-8 sm:right-8 sm:h-16 sm:w-16"
      aria-label="LINE 諮詢"
    >
      <svg className="h-7 w-7 sm:h-8 sm:w-8" fill="currentColor" viewBox="0 0 24 24">
        <path d="M22.14 0H1.86A1.86 1.86 0 000 1.86v14.14a1.86 1.86 0 001.86 1.86h3.72v5.28a.7.7 0 001.12.56l6.46-5.84h8.98A1.86 1.86 0 0024 16V1.86A1.86 1.86 0 0022.14 0z" />
      </svg>
    </a>
  );
}
