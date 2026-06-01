"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { SITE, NAV_ITEMS, CTA } from "@/data/site";

export function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border bg-surface/80 backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8">
        {/* Logo */}
        <Link href="#" className="flex items-center gap-2.5 text-xl font-bold tracking-tight">
          <Image
            src="/images/logo.jpg"
            alt={SITE.name}
            width={32}
            height={32}
            className="rounded-lg object-contain"
          />
          <span className="hidden sm:inline">{SITE.name}</span>
          <span className="sm:hidden">Clawee</span>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden items-center gap-8 md:flex">
          {NAV_ITEMS.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm font-medium text-text-muted transition-colors hover:text-primary"
            >
              {item.label}
            </Link>
          ))}
          <a
            href={SITE.lineUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-lg bg-primary px-4 py-2 text-sm font-semibold text-surface shadow-sm transition-colors hover:bg-primary-dark"
          >
            {CTA.sectionLine}
          </a>
        </nav>

        {/* Mobile hamburger */}
        <button
          className="flex flex-col gap-1.5 md:hidden"
          onClick={() => setOpen(!open)}
          aria-label="選單"
        >
          <span
            className={`block h-0.5 w-6 bg-text transition-all ${open ? "translate-y-2 rotate-45" : ""}`}
          />
          <span
            className={`block h-0.5 w-6 bg-text transition-all ${open ? "opacity-0" : ""}`}
          />
          <span
            className={`block h-0.5 w-6 bg-text transition-all ${open ? "-translate-y-2 -rotate-45" : ""}`}
          />
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="border-t border-border bg-surface-card px-4 pb-4 pt-2 md:hidden">
          <nav className="flex flex-col gap-3">
            {NAV_ITEMS.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-sm font-medium text-text-muted transition-colors hover:text-primary"
                onClick={() => setOpen(false)}
              >
                {item.label}
              </Link>
            ))}
            <a
              href={SITE.lineUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-2 inline-block rounded-lg bg-primary px-4 py-2.5 text-center text-sm font-semibold text-surface transition-colors hover:bg-primary-dark"
              onClick={() => setOpen(false)}
            >
              {CTA.sectionLine}
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
