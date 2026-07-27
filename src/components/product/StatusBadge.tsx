import { cn } from '@/lib/utils';
import type { ProductStatus } from '@/types/product';

const STATUS: Record<ProductStatus, { label: string; className: string; dot: string }> = {
  live: { label: 'Live', className: 'text-emerald-700 bg-emerald-50 border-emerald-200', dot: 'bg-emerald-500' },
  beta: { label: 'Beta', className: 'text-amber-700 bg-amber-50 border-amber-200', dot: 'bg-amber-500' },
  'coming-soon': { label: 'Coming soon', className: 'text-slate-600 bg-slate-100 border-slate-200', dot: 'bg-slate-400' },
};

export function StatusBadge({ status, className }: { status: ProductStatus; className?: string }) {
  const s = STATUS[status];
  return (
    <span
      className={cn(
        'inline-flex items-center gap-1.5 rounded-full border px-2.5 py-1 text-[11px] font-bold uppercase tracking-wide',
        s.className,
        className
      )}
    >
      <span className={cn('h-1.5 w-1.5 rounded-full', s.dot)} />
      {s.label}
    </span>
  );
}
