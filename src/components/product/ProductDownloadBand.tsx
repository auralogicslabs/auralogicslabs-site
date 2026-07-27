import { siteContainerClass } from '@/lib/site-layout';
import Link from 'next/link';
import { Download, BookOpen, ScrollText, Check, ShieldCheck, Sparkles } from 'lucide-react';
import type { Product } from '@/types/product';
import { getStableRelease } from '@/types/product';
import { formatDate } from '@/lib/format';

function Spec({ label, value }: { label: string; value: string }) {
  return (
    <div className="text-center">
      <div className="text-[11px] font-bold uppercase tracking-wide text-text-muted">{label}</div>
      <div className="mt-1 font-mono text-[15px] font-bold text-obsidian">{value}</div>
    </div>
  );
}

/**
 * Standardized "get this product" selling band. Dropped into each product page
 * so every product, bespoke or templated, exposes the same purchase-grade
 * surface: current version, WP/PHP compatibility, a real Download Free CTA wired
 * to the stable /api/download endpoint, docs, changelog and free/Pro clarity.
 */
export function ProductDownloadBand({ product }: { product: Product }) {
  const stable = getStableRelease(product);
  if (!stable) return null;

  const compat = stable.compatibility ?? product.compatibility;
  const isFree = (product.pricingModel ?? 'free') === 'free';
  const docsHref = product.links?.docs;
  const changelogHref = product.links?.changelog ?? `/changelog/${product.slug}`;

  return (
    <section id="download" className="bg-surface-soft/60 py-20">
      <div className={siteContainerClass}>
        <div className="overflow-hidden rounded-panel border border-border bg-bg shadow-elevated">
          <div className="grid grid-cols-1 md:grid-cols-[1.2fr_1fr]">
            {/* Left: pitch + actions */}
            <div className="p-8 sm:p-10">
              <span className="inline-flex items-center gap-1.5 rounded-full bg-brand-tint px-3 py-1 text-[11px] font-black uppercase tracking-wide text-brand">
                {isFree ? <Sparkles className="h-3.5 w-3.5" /> : <Download className="h-3.5 w-3.5" />}
                {isFree ? 'Free & open source' : 'Free to start'}
              </span>
              <h2 className="mt-4 text-3xl font-black tracking-tight text-obsidian">
                Get {product.name}
              </h2>
              <p className="mt-3 text-[16px] leading-relaxed text-text-secondary">
                {isFree
                  ? 'Fully free and GPL. Download the latest stable release and install it on any WordPress site in minutes.'
                  : 'Install the free build, then upgrade to Pro in place, one plugin, no separate package. Download the latest stable release below.'}
              </p>

              <div className="mt-6 flex flex-wrap items-center gap-3">
                <a
                  href={`/api/download/${product.slug}`}
                  className="inline-flex items-center gap-2 rounded-full px-6 py-3 text-[15px] font-bold text-white transition-opacity hover:opacity-90"
                  style={{ background: product.accent }}
                >
                  <Download className="h-4.5 w-4.5" style={{ width: 18, height: 18 }} />
                  Download Free
                </a>
                {docsHref && (
                  <Link
                    href={docsHref}
                    className="inline-flex items-center gap-2 rounded-full border border-border px-5 py-3 text-[14px] font-bold text-obsidian transition-colors hover:bg-surface-soft"
                  >
                    <BookOpen className="h-4 w-4" />
                    Docs
                  </Link>
                )}
                <Link
                  href={changelogHref}
                  className="inline-flex items-center gap-2 rounded-full border border-border px-5 py-3 text-[14px] font-bold text-obsidian transition-colors hover:bg-surface-soft"
                >
                  <ScrollText className="h-4 w-4" />
                  Changelog
                </Link>
              </div>

              {!isFree && product.links?.checkout && (
                <a
                  href={product.links.checkout}
                  className="mt-3 inline-flex items-center gap-1.5 text-[14px] font-bold text-brand hover:text-obsidian"
                >
                  Compare Free vs Pro →
                </a>
              )}

              {product.playsWellWith && product.playsWellWith.length > 0 && (
                <div className="mt-7 border-t border-border pt-5">
                  <div className="flex items-center gap-1.5 text-[11px] font-bold uppercase tracking-wide text-text-muted">
                    <ShieldCheck className="h-3.5 w-3.5" />
                    Plays well with
                  </div>
                  <div className="mt-2.5 flex flex-wrap gap-1.5">
                    {product.playsWellWith.map((t) => (
                      <span
                        key={t}
                        className="inline-flex items-center gap-1 rounded-full bg-surface-soft px-2.5 py-1 text-[12px] font-semibold text-text-secondary"
                      >
                        <Check className="h-3 w-3 text-emerald-600" />
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Right: version + compatibility facts */}
            <div className="border-t border-border bg-surface-soft/50 p-8 sm:p-10 md:border-l md:border-t-0">
              <div className="flex items-baseline gap-2">
                <span className="font-mono text-3xl font-black text-obsidian">v{stable.version}</span>
                {product.pricingModel === 'freemium' && (
                  <span className="rounded-full bg-brand-tint px-2 py-0.5 text-[11px] font-bold text-brand">
                    Free + Pro
                  </span>
                )}
              </div>
              <p className="mt-1 text-[13px] text-text-muted">
                Released {formatDate(stable.date)}
              </p>

              <dl className="mt-6 grid grid-cols-3 gap-4 rounded-card border border-border bg-bg p-4">
                <Spec label="Requires WP" value={compat.requiresWordPress} />
                <Spec label="Tested up to" value={compat.testedUpTo} />
                <Spec label="Requires PHP" value={compat.requiresPHP} />
              </dl>

              <Link
                href="/downloads"
                className="mt-4 inline-flex items-center gap-1.5 text-[13px] font-bold text-brand hover:text-obsidian"
              >
                All downloads & previous versions →
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
