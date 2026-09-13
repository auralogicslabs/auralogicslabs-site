'use client';

import { useState } from 'react';
import { ChevronDown, Download, History } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import type { ReleaseAsset } from '@/types/product';
import { formatDate } from '@/lib/format';

/** Collapsible "Previous versions" archive for a product's older releases. */
export function PreviousVersions({
  slug,
  releases,
  wporgHref,
}: {
  slug: string;
  releases: ReleaseAsset[];
  /** wp.org listing, when the directory distributes this product. */
  wporgHref?: string;
}) {
  const [open, setOpen] = useState(false);
  if (releases.length === 0) return null;

  return (
    <div className="mt-4 border-t border-border pt-4">
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        className="flex w-full items-center justify-between text-[13px] font-bold text-text-secondary transition-colors hover:text-obsidian"
        aria-expanded={open}
      >
        <span className="flex items-center gap-2">
          <History className="h-4 w-4" />
          Previous versions ({releases.length})
        </span>
        <motion.span animate={{ rotate: open ? 180 : 0 }} transition={{ duration: 0.2 }}>
          <ChevronDown className="h-4 w-4" />
        </motion.span>
      </button>

      <AnimatePresence initial={false}>
        {open && (
          <motion.ul
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.22, ease: [0.16, 1, 0.3, 1] }}
            className="overflow-hidden"
          >
            {releases.map((r) => (
              <li
                key={r.version}
                className="flex items-center justify-between gap-3 py-2.5 text-[13px]"
              >
                <div className="flex items-center gap-2">
                  <span className="font-mono font-semibold text-obsidian">v{r.version}</span>
                  <span className="text-text-muted">{formatDate(r.date)}</span>
                  {r.prerelease && (
                    <span className="rounded-full bg-amber-50 px-2 py-0.5 text-[10px] font-bold uppercase tracking-wide text-amber-700">
                      Pre-release
                    </span>
                  )}
                </div>
                <a
                  href={
                    wporgHref
                      ? `${wporgHref.replace(/\/+$/, '')}/advanced/`
                      : `/api/download/${slug}?v=${encodeURIComponent(r.version)}`
                  }
                  {...(wporgHref ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
                  className="inline-flex items-center gap-1.5 font-semibold text-brand transition-colors hover:text-obsidian"
                >
                  <Download className="h-3.5 w-3.5" />
                  Download
                </a>
              </li>
            ))}
          </motion.ul>
        )}
      </AnimatePresence>
    </div>
  );
}
