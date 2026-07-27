import { Check, Minus } from 'lucide-react';
import type { ProductFeature } from '@/types/product';

/**
 * Free vs Pro comparison, derived from the product's feature list. A feature is
 * available on Free if its tier is "free"; Pro includes everything.
 */
export function ComparisonTable({ features }: { features: ProductFeature[] }) {
  if (features.length === 0) return null;

  return (
    <div className="overflow-hidden rounded-card border border-border">
      <table className="w-full border-collapse text-left">
        <thead>
          <tr className="bg-surface-soft">
            <th className="px-5 py-4 text-[13px] font-black uppercase tracking-wide text-text-muted">
              Capability
            </th>
            <th className="w-28 px-5 py-4 text-center text-[13px] font-black uppercase tracking-wide text-text-muted">
              Free
            </th>
            <th className="w-28 px-5 py-4 text-center text-[13px] font-black uppercase tracking-wide text-brand">
              Pro
            </th>
          </tr>
        </thead>
        <tbody>
          {features.map((f) => {
            const inFree = f.tier === 'free';
            return (
              <tr key={f.title} className="border-t border-border">
                <td className="px-5 py-3.5">
                  <span className="text-[14px] font-semibold text-obsidian">{f.title}</span>
                  {f.group && (
                    <span className="ml-2 text-[11px] font-bold uppercase tracking-wide text-text-muted">
                      {f.group}
                    </span>
                  )}
                </td>
                <td className="px-5 py-3.5 text-center">
                  {inFree ? (
                    <Check className="mx-auto h-4.5 w-4.5 text-emerald-600" style={{ width: 18, height: 18 }} />
                  ) : (
                    <Minus className="mx-auto h-4 w-4 text-border-strong" />
                  )}
                </td>
                <td className="px-5 py-3.5 text-center">
                  <Check className="mx-auto h-4.5 w-4.5 text-brand" style={{ width: 18, height: 18 }} />
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
