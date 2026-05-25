import Link from "next/link";
import type { BlogContentBlock } from "@/data/blog";

export function BlogPostContent({ blocks }: { blocks: BlogContentBlock[] }) {
  return (
    <div className="prose-blog">
      {blocks.map((block, i) => {
        switch (block.type) {
          case "p":
            return (
              <p key={i} className="text-[17px] md:text-[18px] text-text-secondary leading-[1.75] font-medium mb-6">
                {block.text}
              </p>
            );
          case "h2":
            return (
              <h2
                key={i}
                className="text-[26px] md:text-[32px] font-extrabold text-obsidian tracking-[-0.03em] leading-[1.15] mt-12 mb-5 first:mt-0"
              >
                {block.text}
              </h2>
            );
          case "h3":
            return (
              <h3 key={i} className="text-[20px] md:text-[22px] font-bold text-obsidian tracking-tight mt-8 mb-4">
                {block.text}
              </h3>
            );
          case "ul":
            return (
              <ul key={i} className="space-y-3 mb-8 pl-1">
                {block.items.map((item, j) => (
                  <li
                    key={j}
                    className="flex gap-3 text-[16px] md:text-[17px] text-text-secondary leading-relaxed font-medium"
                  >
                    <span className="mt-2.5 h-1.5 w-1.5 rounded-full bg-brand flex-shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            );
          case "callout":
            return (
              <div
                key={i}
                className="my-10 rounded-[20px] border border-brand/20 bg-brand/[0.04] px-6 py-5 md:px-8 md:py-6"
              >
                <p className="text-[11px] font-black uppercase tracking-[0.24em] text-brand mb-2">{block.title}</p>
                <p className="text-[16px] md:text-[17px] text-obsidian/80 leading-relaxed font-medium">{block.text}</p>
              </div>
            );
          default:
            return null;
        }
      })}

      <div className="mt-14 pt-10 border-t border-border/70">
        <p className="text-[16px] text-text-secondary font-medium leading-relaxed">
          Ready to see these concepts on your stack?{" "}
          <Link href="/products/nexora-engine" className="text-brand font-bold hover:underline">
            Explore Nexora Engine
          </Link>{" "}
          or{" "}
          <Link href="/nexora-engine/docs/getting-started" className="text-brand font-bold hover:underline">
            read the getting-started guide
          </Link>
          .
        </p>
      </div>
    </div>
  );
}
