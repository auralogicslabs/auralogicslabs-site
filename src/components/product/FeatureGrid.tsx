import { cn } from '@/lib/utils';
import type { ProductFeature } from '@/types/product';

const TIER_BADGE: Record<ProductFeature['tier'], string> = {
  free: 'text-emerald-700 bg-emerald-50',
  pro: 'text-brand bg-brand-tint',
  enterprise: 'text-violet-700 bg-violet-50',
};

export function FeatureGrid({ features }: { features: ProductFeature[] }) {
  return (
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
      {features.map((f) => {
        const Icon = f.icon;
        return (
          <div
            key={f.title}
            className="rounded-card border border-border bg-bg p-5 shadow-card transition-shadow hover:shadow-hover"
          >
            <div className="flex items-center justify-between">
              {Icon && (
                <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-surface-soft">
                  <Icon className="h-4.5 w-4.5 text-obsidian" style={{ width: 18, height: 18 }} />
                </div>
              )}
              <span
                className={cn(
                  'rounded-full px-2 py-0.5 text-[10px] font-bold uppercase tracking-wide',
                  TIER_BADGE[f.tier]
                )}
              >
                {f.tier}
              </span>
            </div>
            <h3 className="mt-4 text-[15px] font-bold text-obsidian">{f.title}</h3>
            <p className="mt-1.5 text-[14px] leading-relaxed text-text-secondary">{f.description}</p>
          </div>
        );
      })}
    </div>
  );
}
