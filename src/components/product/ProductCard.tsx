import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';
import type { Product } from '@/types/product';
import { StatusBadge } from './StatusBadge';

/** Compact product tile used in the products index and related-products rows. */
export function ProductCard({ product }: { product: Product }) {
  const Icon = product.icon;
  return (
    <Link
      href={`/products/${product.slug}`}
      className="group flex flex-col rounded-card border border-border bg-bg p-6 shadow-card transition-all hover:-translate-y-0.5 hover:shadow-hover"
    >
      <div className="flex items-start justify-between">
        <div
          className="flex h-11 w-11 items-center justify-center rounded-lg transition-transform group-hover:scale-110"
          style={{ background: `${product.accent}12`, border: `1.5px solid ${product.accent}25` }}
        >
          <Icon className="h-5 w-5" style={{ color: product.accent }} />
        </div>
        <StatusBadge status={product.status} />
      </div>
      <h3 className="mt-4 text-[17px] font-black tracking-tight text-obsidian">{product.name}</h3>
      <p className="mt-1 flex-1 text-[14px] leading-relaxed text-text-secondary">{product.tagline}</p>
      <span className="mt-4 inline-flex items-center gap-1 text-[13px] font-bold text-brand">
        Explore
        <ArrowUpRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
      </span>
    </Link>
  );
}
