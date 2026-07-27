import { Check, X } from 'lucide-react';
import type { ProductComparison } from '@/types/product';

function Cell({ value, accent, positive }: { value: string | boolean; accent?: string; positive?: boolean }) {
  if (typeof value === 'boolean') {
    return value ? (
      <Check className="mx-auto h-4.5 w-4.5" style={{ width: 18, height: 18, color: positive ? accent : '#16A34A' }} />
    ) : (
      <X className="mx-auto h-4 w-4 text-border-strong" />
    );
  }
  return <span className="text-[14px] text-text-secondary">{value}</span>;
}

/** "vs the incumbent" comparison table. */
export function ComparisonVs({
  comparison,
  productName,
  accent,
}: {
  comparison: ProductComparison;
  productName: string;
  accent: string;
}) {
  return (
    <div className="overflow-hidden rounded-card border border-border">
      <table className="w-full border-collapse text-left">
        <thead>
          <tr className="bg-surface-soft">
            <th className="px-5 py-4 text-[13px] font-black uppercase tracking-wide text-text-muted">Capability</th>
            <th className="w-44 px-5 py-4 text-center text-[13px] font-black uppercase tracking-wide" style={{ color: accent }}>
              {productName}
            </th>
            <th className="w-44 px-5 py-4 text-center text-[13px] font-black uppercase tracking-wide text-text-muted">
              {comparison.againstLabel}
            </th>
          </tr>
        </thead>
        <tbody>
          {comparison.rows.map((r) => (
            <tr key={r.capability} className="border-t border-border">
              <td className="px-5 py-3.5 text-[14px] font-semibold text-obsidian">{r.capability}</td>
              <td className="px-5 py-3.5 text-center"><Cell value={r.us} accent={accent} positive /></td>
              <td className="px-5 py-3.5 text-center"><Cell value={r.them} /></td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
