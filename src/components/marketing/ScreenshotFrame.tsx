import type { LucideIcon } from 'lucide-react';

interface Props {
  /** Real screenshot path once available, e.g. "/screenshots/nexora-engine.png". */
  src?: string;
  alt: string;
  /** Product accent for the placeholder tint. */
  accent?: string;
  /** Shown in the placeholder while there is no screenshot yet. */
  label?: string;
  icon?: LucideIcon;
}

/**
 * A clean browser frame that holds a product screenshot. Until a real `src` is
 * provided it renders a tasteful placeholder (no broken image), so the page
 * looks finished before the assets land. Drop screenshots in /public/screenshots
 * and pass `src` to swap them in.
 */
export function ScreenshotFrame({ src, alt, accent = '#1A3FD8', label = 'Product preview', icon: Icon }: Props) {
  return (
    <div className="overflow-hidden rounded-2xl border border-border bg-white shadow-[0_30px_70px_-24px_rgba(15,23,42,0.35)]">
      {/* browser chrome */}
      <div className="flex items-center gap-2 border-b border-border bg-surface px-4 py-3">
        <span className="h-2.5 w-2.5 rounded-full bg-slate-300" />
        <span className="h-2.5 w-2.5 rounded-full bg-slate-300" />
        <span className="h-2.5 w-2.5 rounded-full bg-slate-300" />
        <span className="mx-auto rounded-md bg-white px-3 py-1 text-[11px] font-medium text-text-muted ring-1 ring-border">
          auralogicslabs.com
        </span>
      </div>

      {src ? (
        // eslint-disable-next-line @next/next/no-img-element
        <img src={src} alt={alt} className="block w-full" loading="lazy" />
      ) : (
        <div className="relative aspect-[16/10] w-full" style={{ background: `linear-gradient(180deg, ${accent}08, #FBFCFE)` }}>
          {/* subtle skeleton so it reads as a real UI, not an empty box */}
          <div className="absolute inset-0 grid grid-cols-[56px_1fr]">
            <div className="flex flex-col items-center gap-2.5 border-r border-border/70 py-4">
              <span className="h-6 w-6 rounded-lg" style={{ background: `${accent}22` }} />
              {[0, 1, 2].map((i) => (
                <span key={i} className="h-3.5 w-3.5 rounded bg-slate-200" />
              ))}
            </div>
            <div className="p-4">
              <div className="h-3 w-24 rounded bg-slate-200" />
              <div className="mt-3 grid grid-cols-3 gap-2">
                {[0, 1, 2].map((i) => (
                  <div key={i} className="h-10 rounded-lg border border-border bg-white" />
                ))}
              </div>
              <div className="mt-3 h-16 rounded-lg border border-border bg-white" />
            </div>
          </div>
          {/* centred label */}
          <div className="absolute inset-0 flex flex-col items-center justify-center gap-2 bg-white/45 backdrop-blur-[1px]">
            <span className="flex h-11 w-11 items-center justify-center rounded-xl" style={{ background: `${accent}18`, border: `1.5px solid ${accent}35` }}>
              {Icon ? <Icon className="h-5 w-5" style={{ color: accent }} /> : null}
            </span>
            <span className="text-[12px] font-bold text-obsidian">{label}</span>
            <span className="text-[11px] text-text-muted">Screenshot coming soon</span>
          </div>
        </div>
      )}
    </div>
  );
}
