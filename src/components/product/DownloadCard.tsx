import Link from 'next/link';
import { Download, BookOpen, ScrollText, ArrowUpRight } from 'lucide-react';
import type { Product } from '@/types/product';
import { getStableRelease, getPreviousReleases } from '@/types/product';
import { formatDate } from '@/lib/format';
import { StatusBadge } from './StatusBadge';
import { PreviousVersions } from './PreviousVersions';

/** A spec row in the compatibility grid. */
function Spec({ label, value }: { label: string; value: string }) {
  return (
    <div>
      <dt className="text-[11px] font-bold uppercase tracking-wide text-text-muted">{label}</dt>
      <dd className="mt-0.5 font-mono text-[13px] font-semibold text-obsidian">{value}</dd>
    </div>
  );
}

/**
 * Download card for one product, the unit of the download center. Renders the
 * current stable version, release date, WP/PHP compatibility, primary actions,
 * and the collapsible previous-versions archive. Driven entirely by config.
 */
export function DownloadCard({ product }: { product: Product }) {
  const Icon = product.icon;
  const stable = getStableRelease(product);
  const previous = getPreviousReleases(product);
  const compat = stable?.compatibility ?? product.compatibility;
  const changelogHref = product.links?.changelog ?? `/changelog/${product.slug}`;
  const docsHref = product.links?.docs;
  // Published plugins are downloaded from WordPress.org, their canonical home.
  // Anything not on the directory keeps the in-house /api/download endpoint.
  const wporgHref = product.links?.wporg;
  const downloadHref = wporgHref ?? `/api/download/${product.slug}`;
  const proHref = product.pricingModel === 'freemium'
    ? (product.links?.checkout ?? `/products/${product.slug}#pricing`)
    : undefined;

  return (
    <div className="flex flex-col rounded-card border border-border bg-bg p-6 shadow-card transition-shadow hover:shadow-hover">
      {/* Header */}
      <div className="flex items-start justify-between gap-3">
        <div className="flex items-center gap-3">
          <div
            className="flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-lg"
            style={{ background: `${product.accent}12`, border: `1.5px solid ${product.accent}25` }}
          >
            <Icon className="h-5 w-5" style={{ color: product.accent }} />
          </div>
          <div>
            <h3 className="text-[17px] font-black tracking-tight text-obsidian">{product.name}</h3>
            <p className="text-[13px] text-text-muted">{product.tagline}</p>
          </div>
        </div>
        <StatusBadge status={product.status} />
      </div>

      {stable ? (
        <>
          {/* Version + date */}
          <div className="mt-5 flex items-baseline gap-2">
            <span className="font-mono text-2xl font-black text-obsidian">v{stable.version}</span>
            <span className="text-[13px] text-text-muted">· {formatDate(stable.date)}</span>
          </div>

          {/* Compatibility grid */}
          <dl className="mt-4 grid grid-cols-3 gap-3 rounded-lg bg-surface-soft/70 p-3">
            <Spec label="Requires WP" value={compat.requiresWordPress} />
            <Spec label="Tested up to" value={compat.testedUpTo} />
            <Spec label="Requires PHP" value={compat.requiresPHP} />
          </dl>

          {/* Primary actions */}
          <div className="mt-5 flex flex-col gap-2">
            <a
              href={downloadHref}
              {...(wporgHref ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
              className="inline-flex items-center justify-center gap-2 rounded-full px-5 py-2.5 text-[14.5px] font-bold text-white transition-colors"
              style={{ background: product.accent }}
            >
              <Download className="h-4 w-4" />
              {wporgHref ? 'Get it on WordPress.org' : 'Download Free'}
            </a>
            {proHref && (
              <a
                href={proHref}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-1.5 rounded-full border px-5 py-2.5 text-[14px] font-bold transition-colors hover:bg-surface-soft"
                style={{ borderColor: `${product.accent}45`, color: product.accent }}
              >
                Get Pro
                <ArrowUpRight className="h-3.5 w-3.5" />
              </a>
            )}
            <div className="grid grid-cols-2 gap-2">
              <Link
                href={changelogHref}
                className="inline-flex items-center justify-center gap-1.5 rounded-full border border-border px-4 py-2 text-[13px] font-bold text-obsidian transition-colors hover:bg-surface-soft"
              >
                <ScrollText className="h-3.5 w-3.5" />
                Changelog
              </Link>
              {docsHref ? (
                <Link
                  href={docsHref}
                  className="inline-flex items-center justify-center gap-1.5 rounded-full border border-border px-4 py-2 text-[13px] font-bold text-obsidian transition-colors hover:bg-surface-soft"
                >
                  <BookOpen className="h-3.5 w-3.5" />
                  Docs
                </Link>
              ) : (
                <Link
                  href={`/products/${product.slug}`}
                  className="inline-flex items-center justify-center gap-1.5 rounded-full border border-border px-4 py-2 text-[13px] font-bold text-obsidian transition-colors hover:bg-surface-soft"
                >
                  Details
                  <ArrowUpRight className="h-3.5 w-3.5" />
                </Link>
              )}
            </div>
          </div>

          <PreviousVersions slug={product.slug} releases={previous} wporgHref={wporgHref} />
        </>
      ) : (
        /* Pre-launch state, no downloadable release yet */
        <div className="mt-5 flex flex-1 flex-col justify-between">
          <p className="rounded-lg bg-surface-soft/70 p-4 text-[14px] text-text-secondary">
            {product.name} is not yet available for download. {product.description}
          </p>
          <Link
            href={`/products/${product.slug}`}
            className="mt-4 inline-flex items-center justify-center gap-1.5 rounded-full border border-border px-5 py-2.5 text-[14px] font-bold text-obsidian transition-colors hover:bg-surface-soft"
          >
            Learn more
            <ArrowUpRight className="h-4 w-4" />
          </Link>
        </div>
      )}
    </div>
  );
}
