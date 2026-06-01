import { PAIN_POINTS } from "@/data/site";

export function PainPoints() {
  return (
    <section id="pain-points" className="bg-surface py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        {/* 標題 */}
        <div className="text-center">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            這些情況你遇過嗎？
          </h2>
          <p className="mt-4 text-lg text-text-muted">
            如果你的團隊有這些困擾，AI 自動化可能比你想像中更容易解決
          </p>
        </div>

        {/* 痛點列表 */}
        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {PAIN_POINTS.map((p) => (
            <div
              key={p.title}
              className="group rounded-xl border border-border bg-surface-card p-5 transition-all hover:border-primary/30 hover:bg-surface-elevated hover:shadow-lg hover:shadow-primary/5 sm:p-6"
            >
              <div className="mb-3 text-2xl">{p.icon}</div>
              <h3 className="font-semibold">{p.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-text-muted">{p.desc}</p>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-10 text-center">
          <p className="text-sm text-text-muted">
            有中任何一項？我們可以幫你解決。
          </p>
        </div>
      </div>
    </section>
  );
}
