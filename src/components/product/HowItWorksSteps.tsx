import type { HowItWorksStep } from '@/types/product';

/** Numbered "How it works" steps, tinted with the product accent. */
export function HowItWorksSteps({ steps, accent }: { steps: HowItWorksStep[]; accent: string }) {
  return (
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
      {steps.map((s, i) => (
        <div key={s.title} className="rounded-card border border-border bg-bg p-6 shadow-card">
          <div className="flex items-center justify-between">
            <span
              className="flex h-9 w-9 items-center justify-center rounded-lg text-[14px] font-black"
              style={{ background: `${accent}14`, color: accent }}
            >
              {i + 1}
            </span>
            <span className="font-mono text-[20px] font-black text-border-strong">
              {String(i + 1).padStart(2, '0')}
            </span>
          </div>
          <h3 className="mt-4 text-[15px] font-bold text-obsidian">{s.title}</h3>
          <p className="mt-1.5 text-[14px] leading-relaxed text-text-secondary">{s.body}</p>
        </div>
      ))}
    </div>
  );
}
