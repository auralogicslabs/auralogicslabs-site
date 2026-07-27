import type { ChangelogEntry } from '@/types/product';
import { formatDate } from '@/lib/format';

function Section({
  title,
  items,
  tone,
}: {
  title: string;
  items?: string[];
  tone: 'default' | 'breaking';
}) {
  if (!items?.length) return null;
  return (
    <div className="mt-4">
      <p
        className={`text-[11px] font-black uppercase tracking-[0.2em] mb-2 ${
          tone === 'breaking' ? 'text-red-600' : 'text-text-muted'
        }`}
      >
        {title}
      </p>
      <ul className="space-y-2">
        {items.map((item) => (
          <li key={item} className="flex gap-2.5 text-[15px] text-text-secondary leading-relaxed font-medium">
            <span className="mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-brand" />
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export function ChangelogContent({ entries, productName }: { entries: ChangelogEntry[]; productName: string }) {
  if (!entries.length) {
    return (
      <p className="text-[16px] text-text-secondary font-medium">
        No public releases yet for {productName}. Check back soon.
      </p>
    );
  }

  return (
    <div className="max-w-[760px] space-y-8">
      {entries.map((entry) => (
        <article
          key={entry.version}
          className="rounded-2xl border border-border bg-white p-6 md:p-8"
        >
          <div className="flex flex-wrap items-baseline gap-x-4 gap-y-1 mb-2">
            <h2 className="text-[22px] font-extrabold text-obsidian tracking-tight">v{entry.version}</h2>
            <time className="text-[13px] font-bold text-text-muted">{formatDate(entry.date)}</time>
          </div>
          {entry.summary && (
            <p className="text-[16px] text-text-secondary font-medium leading-relaxed mb-2">{entry.summary}</p>
          )}
          <Section title="Improvements" items={entry.improvements} tone="default" />
          <Section title="Fixes" items={entry.fixes} tone="default" />
          <Section title="Breaking changes" items={entry.breaking} tone="breaking" />
          <Section title="Compatibility" items={entry.compatibility} tone="default" />
        </article>
      ))}
    </div>
  );
}
