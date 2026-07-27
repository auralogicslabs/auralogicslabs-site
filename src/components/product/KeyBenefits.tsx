import type { KeyBenefit } from '@/types/product';

/** Three-up key-benefit cards, tinted with the product accent. Server component. */
export function KeyBenefits({ benefits, accent }: { benefits: KeyBenefit[]; accent: string }) {
  return (
    <div className="grid grid-cols-1 gap-5 sm:grid-cols-3">
      {benefits.map((b) => {
        const Icon = b.icon;
        return (
          <div key={b.title} className="rounded-card border border-border bg-bg p-6 shadow-card">
            {Icon && (
              <div
                className="flex h-10 w-10 items-center justify-center rounded-lg"
                style={{ background: `${accent}12` }}
              >
                <Icon className="h-5 w-5" style={{ color: accent }} />
              </div>
            )}
            {b.metric && (
              <div className="mt-4 text-3xl font-black tracking-tight text-obsidian">{b.metric}</div>
            )}
            <h3 className="mt-3 text-[16px] font-bold text-obsidian">{b.title}</h3>
            <p className="mt-1.5 text-[14px] leading-relaxed text-text-secondary">{b.description}</p>
          </div>
        );
      })}
    </div>
  );
}
