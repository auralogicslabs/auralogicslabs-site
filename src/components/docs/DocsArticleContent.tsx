import type { DocContentBlock } from '@/types/docs';

function slugify(text: string) {
  return text
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/(^-|-$)/g, '');
}

export function DocsArticleContent({ blocks }: { blocks: DocContentBlock[] }) {
  return (
    <div className="docs-prose max-w-[760px]">
      {blocks.map((block, i) => {
        switch (block.type) {
          case 'p':
            return (
              <p key={i} className="text-[16px] md:text-[17px] text-text-secondary leading-[1.75] font-medium mb-6">
                {block.text}
              </p>
            );
          case 'h2': {
            const id = block.id ?? slugify(block.text);
            return (
              <h2
                key={i}
                id={id}
                className="scroll-mt-28 text-[26px] md:text-[30px] font-extrabold text-obsidian tracking-[-0.03em] leading-[1.15] mt-12 mb-5 first:mt-0"
              >
                {block.text}
              </h2>
            );
          }
          case 'h3': {
            const id = block.id ?? slugify(block.text);
            return (
              <h3
                key={i}
                id={id}
                className="scroll-mt-28 text-[20px] md:text-[22px] font-bold text-obsidian tracking-tight mt-8 mb-4"
              >
                {block.text}
              </h3>
            );
          }
          case 'ul':
            return (
              <ul key={i} className="space-y-3 mb-8 pl-1">
                {block.items.map((item, j) => (
                  <li key={j} className="flex gap-3 text-[15px] md:text-[16px] text-text-secondary leading-relaxed font-medium">
                    <span className="mt-2.5 h-1.5 w-1.5 rounded-full bg-brand flex-shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            );
          case 'ol':
            return (
              <ol key={i} className="space-y-3 mb-8 list-decimal pl-6">
                {block.items.map((item, j) => (
                  <li key={j} className="text-[15px] md:text-[16px] text-text-secondary leading-relaxed font-medium pl-1">
                    {item}
                  </li>
                ))}
              </ol>
            );
          case 'code':
            return (
              <pre
                key={i}
                className="mb-8 overflow-x-auto rounded-xl border border-border bg-obsidian px-5 py-4 font-mono text-[13px] leading-relaxed text-emerald-400"
              >
                <code>{block.code}</code>
              </pre>
            );
          case 'callout':
            return (
              <div
                key={i}
                className={`my-8 rounded-xl border px-5 py-4 md:px-6 md:py-5 ${
                  block.variant === 'warning'
                    ? 'border-amber-200 bg-amber-50'
                    : 'border-brand/20 bg-brand/[0.04]'
                }`}
              >
                <p
                  className={`text-[11px] font-black uppercase tracking-[0.22em] mb-2 ${
                    block.variant === 'warning' ? 'text-amber-700' : 'text-brand'
                  }`}
                >
                  {block.title}
                </p>
                <p className="text-[15px] text-obsidian/80 leading-relaxed font-medium">{block.text}</p>
              </div>
            );
          case 'requirements':
            return (
              <div
                key={i}
                className="mb-8 grid grid-cols-2 gap-4 rounded-xl border border-border bg-white p-5 md:grid-cols-3 md:p-6"
              >
                {block.items.map((item) => (
                  <div key={item.label}>
                    <p className="text-[10px] font-bold uppercase tracking-widest text-text-muted mb-1">{item.label}</p>
                    <p className="text-[14px] font-bold text-obsidian">{item.value}</p>
                  </div>
                ))}
              </div>
            );
          case 'steps':
            return (
              <div key={i} className="mb-10 space-y-5">
                {block.items.map((step, j) => (
                  <div
                    key={j}
                    className="rounded-2xl border border-border bg-white p-6 md:grid md:grid-cols-12 md:gap-6 md:p-7"
                  >
                    <div className="md:col-span-8">
                      <p className="text-[11px] font-mono font-bold uppercase tracking-[0.2em] text-text-muted mb-2">
                        Step {String(j + 1).padStart(2, '0')}
                      </p>
                      <h4 className="text-[18px] font-extrabold text-obsidian mb-2">{step.title}</h4>
                      <p className="text-[15px] text-text-secondary leading-relaxed font-medium">{step.body}</p>
                    </div>
                    {step.code && (
                      <div className="mt-4 md:col-span-4 md:mt-0">
                        <pre className="h-full rounded-xl bg-obsidian px-4 py-3 font-mono text-[12px] leading-relaxed text-emerald-400">
                          {step.code}
                        </pre>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            );
          default:
            return null;
        }
      })}
    </div>
  );
}
