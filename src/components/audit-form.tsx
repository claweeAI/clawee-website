"use client";

import { useState, type FormEvent } from "react";
import { SITE } from "@/data/site";
import { FREE_AI_AUDIT } from "@/data/freeAiAudit";

type FormData = Record<string, string | string[]>;

export function AuditForm() {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState<FormData>({});

  const handleChange = (
    id: string,
    value: string,
    type: "radio" | "checkbox" | "text" | "textarea",
  ) => {
    setFormData((prev) => {
      if (type === "checkbox") {
        const current = (prev[id] as string[]) || [];
        const next = current.includes(value)
          ? current.filter((v) => v !== value)
          : [...current, value];
        return { ...prev, [id]: next };
      }
      return { ...prev, [id]: value };
    });
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();

    // 檢查必填
    const missing = FREE_AI_AUDIT.fields
      .filter((f) => f.required)
      .some((f) => {
        const val = formData[f.id];
        if (!val) return true;
        if (Array.isArray(val) && val.length === 0) return true;
        if (typeof val === "string" && val.trim() === "") return true;
        return false;
      });

    if (missing) {
      alert("請填寫所有必填欄位 🙏");
      return;
    }

    // Console 輸出 (未來串接後端用)
    console.log("=== AI 流程健檢表單送出 ===");
    for (const field of FREE_AI_AUDIT.fields) {
      const val = formData[field.id];
      console.log(`${field.label}:`, val);
    }
    console.log("=============================");

    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="text-center py-12">
        <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-green-100 text-3xl">
          ✅
        </div>
        <p className="mt-6 text-lg font-semibold text-text">
          {FREE_AI_AUDIT.successMessage}
        </p>
        <div className="mt-8">
          <a
            href={SITE.lineUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-xl bg-primary px-6 py-3 text-sm font-semibold text-white shadow-sm transition-all hover:bg-primary-dark"
          >
            {FREE_AI_AUDIT.ctaLine}
            <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </div>
        <p className="mt-4 text-sm text-text-muted">
          或直接複製 LINE ID：<span className="font-mono font-semibold text-text">{SITE.lineId}</span>
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6" noValidate>
      {FREE_AI_AUDIT.fields.map((field) => (
        <div key={field.id}>
          {/* Label */}
          <label className="mb-2 block text-sm font-semibold text-text">
            {field.label}
            <span className="ml-1 text-primary">{field.required ? "*" : "（選填）"}</span>
          </label>

          {/* Text / Textarea */}
          {(field.type === "text" || field.type === "textarea") && (
            <>
              {field.type === "text" ? (
                <input
                  type="text"
                  placeholder={field.placeholder}
                  value={(formData[field.id] as string) || ""}
                  onChange={(e) => handleChange(field.id, e.target.value, field.type)}
                  className="w-full rounded-xl border border-border bg-surface-muted px-4 py-3 text-sm outline-none transition-colors focus:border-primary focus:ring-2 focus:ring-primary/20"
                />
              ) : (
                <textarea
                  rows={3}
                  placeholder={field.placeholder}
                  value={(formData[field.id] as string) || ""}
                  onChange={(e) => handleChange(field.id, e.target.value, field.type)}
                  className="w-full rounded-xl border border-border bg-surface-muted px-4 py-3 text-sm outline-none transition-colors focus:border-primary focus:ring-2 focus:ring-primary/20"
                />
              )}
            </>
          )}

          {/* Radio group */}
          {field.type === "radio" && field.options && (
            <div className="space-y-2.5">
              {field.options.map((opt) => (
                <label
                  key={opt}
                  className={`flex cursor-pointer items-center gap-3 rounded-xl border px-4 py-3 text-sm transition-all ${
                    formData[field.id] === opt
                      ? "border-primary bg-primary/5 ring-1 ring-primary/20"
                      : "border-border hover:border-primary/30"
                  }`}
                >
                  <input
                    type="radio"
                    name={field.id}
                    value={opt}
                    checked={formData[field.id] === opt}
                    onChange={(e) => handleChange(field.id, e.target.value, "radio")}
                    className="h-4 w-4 accent-primary"
                  />
                  {opt}
                </label>
              ))}
            </div>
          )}

          {/* Checkbox group */}
          {field.type === "checkbox" && field.options && (
            <div className="space-y-2.5">
              {field.options.map((opt) => {
                const checked = ((formData[field.id] as string[]) || []).includes(opt);
                return (
                  <label
                    key={opt}
                    className={`flex cursor-pointer items-center gap-3 rounded-xl border px-4 py-3 text-sm transition-all ${
                      checked
                        ? "border-primary bg-primary/5 ring-1 ring-primary/20"
                        : "border-border hover:border-primary/30"
                    }`}
                  >
                    <input
                      type="checkbox"
                      value={opt}
                      checked={checked}
                      onChange={(e) => handleChange(field.id, e.target.value, "checkbox")}
                      className="h-4 w-4 accent-primary"
                    />
                    {opt}
                  </label>
                );
              })}
            </div>
          )}
        </div>
      ))}

      {/* Submit */}
      <button
        type="submit"
        className="w-full rounded-xl bg-primary px-6 py-3 text-sm font-semibold text-white shadow-sm transition-all hover:bg-primary-dark"
      >
        送出評估
      </button>

      <p className="text-center text-xs text-text-muted">
        送出後不需登入，約 1～2 個工作天內我們會主動聯繫你
      </p>
    </form>
  );
}
