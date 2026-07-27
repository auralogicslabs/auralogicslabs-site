import type { ProductFeature } from '@/types/product';
import { FeatureGrid } from './FeatureGrid';

/**
 * Renders a product's features grouped by their `group` label, preserving the
 * order groups first appear in. Falls back to a single flat grid when no groups
 * are set. Reusable across bespoke product pages.
 */
export function GroupedFeatures({ features }: { features: ProductFeature[] }) {
  const groups: string[] = [];
  for (const f of features) {
    const g = f.group ?? 'Features';
    if (!groups.includes(g)) groups.push(g);
  }

  if (groups.length <= 1) {
    return <FeatureGrid features={features} />;
  }

  return (
    <div className="space-y-12">
      {groups.map((group) => (
        <div key={group}>
          <h3 className="mb-5 flex items-center gap-3 text-[13px] font-black uppercase tracking-[0.2em] text-text-muted">
            <span className="h-px w-8 bg-border-strong" />
            {group}
          </h3>
          <FeatureGrid features={features.filter((f) => (f.group ?? 'Features') === group)} />
        </div>
      ))}
    </div>
  );
}
