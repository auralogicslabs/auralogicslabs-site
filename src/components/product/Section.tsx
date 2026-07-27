import { cn } from '@/lib/utils';
import { siteContainerClass } from '@/lib/site-layout';

interface SectionProps {
  id?: string;
  eyebrow?: string;
  title?: string;
  description?: string;
  /** Soft surface background for visual rhythm between sections. */
  muted?: boolean;
  center?: boolean;
  className?: string;
  children?: React.ReactNode;
}

/**
 * Standard product-page section shell: consistent vertical rhythm, container
 * width, and an optional eyebrow/title/description header. Server component.
 */
export function Section({
  id,
  eyebrow,
  title,
  description,
  muted = false,
  center = false,
  className,
  children,
}: SectionProps) {
  return (
    <section
      id={id}
      className={cn('py-20 sm:py-24', muted && 'bg-surface-soft/60', className)}
    >
      <div className={siteContainerClass}>
        {(eyebrow || title || description) && (
          <header className={cn('mb-12 max-w-2xl', center && 'mx-auto text-center')}>
            {eyebrow && (
              <span className="text-[11px] font-black uppercase tracking-[0.3em] text-brand">
                {eyebrow}
              </span>
            )}
            {title && (
              <h2 className="mt-3 text-3xl sm:text-4xl font-black tracking-tight text-obsidian">
                {title}
              </h2>
            )}
            {description && (
              <p className="mt-4 text-[17px] leading-relaxed text-text-secondary">
                {description}
              </p>
            )}
          </header>
        )}
        {children}
      </div>
    </section>
  );
}
