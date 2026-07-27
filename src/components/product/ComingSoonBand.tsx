import { siteContainerClass } from '@/lib/site-layout';
import Link from 'next/link';
import { Bell, ShieldCheck, Check } from 'lucide-react';
import type { Product } from '@/types/product';

/**
 * Pre-launch CTA band for products with no downloadable release yet. Mirrors the
 * ProductDownloadBand layout so the page still feels complete, but offers a
 * "notify me" path and shows target compatibility instead of a download.
 */
export function ComingSoonBand({ product }: { product: Product }) {
  const c = product.compatibility;
  const accent = product.accent;
  return (
    <section id="download" className="bg-surface-soft/60 py-20">
      <div className={siteContainerClass}>
        <div className="overflow-hidden rounded-panel border border-border bg-bg shadow-elevated">
          <div className="grid grid-cols-1 md:grid-cols-[1.2fr_1fr]">
            <div className="p-8 sm:p-10">
              <span
                className="inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-[11px] font-black uppercase tracking-wide"
                style={{ color: accent, background: `${accent}14` }}
              >
                <Bell className="h-3.5 w-3.5" />
                Launching soon
              </span>
              <h2 className="mt-4 text-3xl font-black tracking-tight text-obsidian">Be first to get {product.name}</h2>
              <p className="mt-3 text-[16px] leading-relaxed text-text-secondary">
                {product.name} is in active development. Tell us you’re interested and we’ll let you know
                the moment the first downloadable release is ready.
              </p>

              <div className="mt-6 flex flex-wrap items-center gap-3">
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 rounded-full px-6 py-3 text-[15px] font-bold text-white transition-opacity hover:opacity-90"
                  style={{ background: accent }}
                >
                  <Bell className="h-4.5 w-4.5" style={{ width: 18, height: 18 }} />
                  Notify me at launch
                </Link>
                <Link
                  href="/downloads"
                  className="inline-flex items-center gap-2 rounded-full border border-border px-5 py-3 text-[14px] font-bold text-obsidian transition-colors hover:bg-surface-soft"
                >
                  See available products
                </Link>
              </div>

              {product.playsWellWith && product.playsWellWith.length > 0 && (
                <div className="mt-7 border-t border-border pt-5">
                  <div className="flex items-center gap-1.5 text-[11px] font-bold uppercase tracking-wide text-text-muted">
                    <ShieldCheck className="h-3.5 w-3.5" />
                    Built for
                  </div>
                  <div className="mt-2.5 flex flex-wrap gap-1.5">
                    {product.playsWellWith.map((t) => (
                      <span key={t} className="inline-flex items-center gap-1 rounded-full bg-surface-soft px-2.5 py-1 text-[12px] font-semibold text-text-secondary">
                        <Check className="h-3 w-3" style={{ color: accent }} />
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              )}
            </div>

            <div className="border-t border-border bg-surface-soft/50 p-8 sm:p-10 md:border-l md:border-t-0">
              <div className="font-mono text-3xl font-black text-obsidian">v{product.version}</div>
              <p className="mt-1 text-[13px] text-text-muted">In development, not yet released</p>
              <dl className="mt-6 grid grid-cols-3 gap-4 rounded-card border border-border bg-bg p-4 text-center">
                <div>
                  <dt className="text-[11px] font-bold uppercase tracking-wide text-text-muted">Requires WP</dt>
                  <dd className="mt-1 font-mono text-[15px] font-bold text-obsidian">{c.requiresWordPress}</dd>
                </div>
                <div>
                  <dt className="text-[11px] font-bold uppercase tracking-wide text-text-muted">Target WP</dt>
                  <dd className="mt-1 font-mono text-[15px] font-bold text-obsidian">{c.testedUpTo}</dd>
                </div>
                <div>
                  <dt className="text-[11px] font-bold uppercase tracking-wide text-text-muted">Requires PHP</dt>
                  <dd className="mt-1 font-mono text-[15px] font-bold text-obsidian">{c.requiresPHP}</dd>
                </div>
              </dl>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
