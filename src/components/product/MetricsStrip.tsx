import type { ProductMetric } from '@/types/product';
import { siteContainerClass } from '@/lib/site-layout';
import { cn } from '@/lib/utils';

/** Headline proof-metric strip shown directly under the product hero. */
export function MetricsStrip({ metrics }: { metrics: ProductMetric[] }) {
  if (metrics.length === 0) return null;
  return (
    <section className="border-b border-border bg-bg">
      <div className={cn(siteContainerClass, "grid grid-cols-2 gap-y-8 py-12 lg:grid-cols-4 lg:gap-y-0")}>
        {metrics.map((m, i) => (
          <div key={m.label} className={`px-4 text-center ${i > 0 ? 'lg:border-l lg:border-border' : ''}`}>
            <div className="text-3xl sm:text-4xl font-black tracking-tight text-obsidian">{m.value}</div>
            <p className="mx-auto mt-1.5 max-w-[180px] text-[13px] leading-snug text-text-secondary">{m.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
