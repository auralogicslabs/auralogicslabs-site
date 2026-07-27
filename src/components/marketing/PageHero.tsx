import type { ReactNode } from 'react';
import type { LucideIcon } from 'lucide-react';
import { siteContainerClass } from '@/lib/site-layout';
import { cn } from '@/app/components/ui/utils';

interface PageHeroProps {
  eyebrow: string;
  icon?: LucideIcon;
  title: ReactNode;
  description?: ReactNode;
  /** Optional actions or content rendered under the description. */
  children?: ReactNode;
  className?: string;
}

/**
 * Shared hero band for inner marketing pages (Support, Docs, Downloads,
 * Changelog, Company, etc.). Gives every inner page the same branded,
 * premium header as the home sections: a subtle dot grid, a soft brand
 * glow, and one consistent eyebrow / title / description rhythm.
 */
export function PageHero({ eyebrow, icon: Icon, title, description, children, className }: PageHeroProps) {
  return (
    <section
      className={cn(
        'relative overflow-hidden border-b border-border bg-surface pt-32 pb-16 md:pt-36 md:pb-20',
        className
      )}
    >
      {/* subtle dot grid, faded toward the edges */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.55]"
        style={{
          backgroundImage: 'radial-gradient(circle, #E2E8F0 1px, transparent 1px)',
          backgroundSize: '46px 46px',
          maskImage: 'radial-gradient(120% 80% at 50% 0%, black, transparent 72%)',
          WebkitMaskImage: 'radial-gradient(120% 80% at 50% 0%, black, transparent 72%)',
        }}
      />
      {/* soft brand glow */}
      <div
        className="pointer-events-none absolute -top-24 right-[-80px] h-[380px] w-[380px] rounded-full blur-[150px]"
        style={{ background: 'rgba(26,63,216,0.08)' }}
      />

      <div className={cn(siteContainerClass, 'relative')}>
        <span className="inline-flex items-center gap-2 text-[11px] font-black uppercase tracking-[0.3em] text-brand">
          {Icon && <Icon className="h-4 w-4" />}
          {eyebrow}
        </span>
        <h1 className="mt-4 max-w-3xl text-4xl font-black tracking-tight text-obsidian sm:text-5xl">{title}</h1>
        {description && (
          <p className="mt-4 max-w-2xl text-[18px] font-medium leading-relaxed text-text-secondary">{description}</p>
        )}
        {children && <div className="mt-8">{children}</div>}
      </div>
    </section>
  );
}
