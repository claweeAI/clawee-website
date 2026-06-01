import Image from "next/image";
import { SITE } from "@/data/site";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="mt-auto border-t border-border bg-text text-white">
      <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center justify-between gap-6 sm:flex-row">
          {/* Logo + 描述 */}
          <div className="text-center sm:text-left">
            <div className="flex items-center justify-center gap-2.5 sm:justify-start">
              <Image
                src="/images/logo.jpg"
                alt={SITE.name}
                width={28}
                height={28}
                className="rounded-md object-contain"
              />
              <span className="font-bold">{SITE.name}</span>
            </div>
            <p className="mt-2 max-w-xs text-sm text-white/60">
              讓 AI 不只是聊天，而是開始替你工作。
            </p>
          </div>

          {/* 連結 */}
          <div className="flex flex-col items-center gap-2 text-center sm:items-end sm:text-right">
            <a
              href={SITE.lineUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-white/60 underline-offset-2 hover:text-white hover:underline"
            >
              LINE 諮詢（{SITE.lineId}）
            </a>
            <a
              href={`mailto:${SITE.email}`}
              className="text-sm text-white/60 underline-offset-2 hover:text-white hover:underline"
            >
              {SITE.email}
            </a>
          </div>
        </div>

        <div className="mt-8 border-t border-white/10 pt-6 text-center text-xs text-white/40">
          &copy; {year} {SITE.name}. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
