import { Check } from 'lucide-react';
import type { Product } from '@/types/product';

/** Compatibility section: WP/PHP requirements + a "plays well with" chip cloud. */
export function CompatibilityStrip({ product }: { product: Product }) {
  const c = product.compatibility;
  const items = product.playsWellWith ?? [];

  return (
    <div className="rounded-card border border-border bg-bg p-6 shadow-card sm:p-8">
      <div className="grid grid-cols-3 gap-4 border-b border-border pb-6">
        {[
          { label: 'Requires WordPress', value: c.requiresWordPress },
          { label: 'Tested up to', value: c.testedUpTo },
          { label: 'Requires PHP', value: c.requiresPHP },
        ].map((s) => (
          <div key={s.label} className="text-center">
            <div className="text-[11px] font-bold uppercase tracking-wide text-text-muted">{s.label}</div>
            <div className="mt-1 font-mono text-[18px] font-bold text-obsidian">{s.value}</div>
          </div>
        ))}
      </div>

      {items.length > 0 && (
        <div className="pt-6">
          <div className="text-[11px] font-bold uppercase tracking-wide text-text-muted">Plays well with</div>
          <div className="mt-3 flex flex-wrap gap-2">
            {items.map((t) => (
              <span
                key={t}
                className="inline-flex items-center gap-1 rounded-full border border-border bg-surface-soft px-3 py-1.5 text-[13px] font-semibold text-obsidian"
              >
                <Check className="h-3 w-3" style={{ color: product.accent }} />
                {t}
              </span>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
