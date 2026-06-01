import { USE_CASES } from "@/data/site";

export function UseCases() {
  return (
    <section id="cases" className="bg-surface py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        {/* 標題 */}
        <div className="text-center">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">應用案例</h2>
          <p className="mt-4 text-lg text-text-muted">
            這些都不是想像，是我們真的做得出來的事
          </p>
        </div>

        {/* 案例列表 */}
        <div className="mt-12 grid gap-10 sm:gap-16">
          {USE_CASES.map((uc, i) => (
            <div
              key={uc.title}
              className={`flex flex-col gap-8 ${
                i % 2 === 1 ? "lg:flex-row-reverse" : "lg:flex-row"
              }`}
            >
              {/* 說明區 */}
              <div className="flex-1">
                <div className="lg:sticky lg:top-28">
                  <div className="mb-4 flex items-center gap-3">
                    <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-accent/10 text-xl">
                      {uc.icon}
                    </span>
                    <span className="rounded-full bg-accent/15 px-3 py-1 text-xs font-semibold text-accent">
                      Case {i + 1}
                    </span>
                  </div>
                  <h3 className="text-2xl font-bold sm:text-3xl">{uc.title}</h3>
                  <p className="mt-4 text-text-muted leading-relaxed">{uc.problem}</p>
                  <p className="mt-3 leading-relaxed text-text">{uc.solution}</p>
                </div>
              </div>

              {/* 流程卡 */}
              <div className="flex-1">
                <div className="rounded-2xl border border-border bg-surface-card p-6 sm:p-8">
                  <h4 className="mb-6 text-sm font-semibold uppercase tracking-wider text-text-muted">
                    運作流程
                  </h4>
                  <ol className="space-y-6">
                    {uc.steps.map((step, j) => (
                      <li key={j} className="flex gap-4">
                        <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-primary text-sm font-semibold text-surface">
                          {j + 1}
                        </span>
                        <span className="pt-1 leading-relaxed">{step}</span>
                      </li>
                    ))}
                  </ol>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-12 text-center">
          <p className="text-sm text-text-muted">
            你的業務場景不在這裡？沒關係，我們一起想辦法。
          </p>
        </div>
      </div>
    </section>
  );
}
