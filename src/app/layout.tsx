import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { FloatingLineButton } from "@/components/floating-line-button";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Clawee AI 工作室 — AI 自動化導入專家",
  description:
    "Clawee AI 工作室提供 AI Agent 導入、自動化流程設計與內部系統開發等顧問服務，協助台灣中小企業與個人工作者找到 AI 真正能幫上忙的地方。",
  keywords: [
    "AI 導入",
    "AI Agent",
    "自動化流程",
    "AI 工具教學",
    "企業系統開發",
    "Clawee AI",
    "LINE 諮詢",
  ],
  openGraph: {
    title: "Clawee AI 工作室 — AI 自動化導入專家",
    description: "讓 AI 不只是聊天，而是開始替你工作",
    type: "website",
    locale: "zh_TW",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="zh-TW"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        {children}
        <FloatingLineButton />
      </body>
    </html>
  );
}
