"use client";

import Link from "next/link";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { ScrollReveal } from "@/components/ui/SectionShell";
import { BlogCoverImage } from "@/components/blog/BlogCoverImage";
import type { BlogPost } from "@/data/blog";

function formatDate(iso: string) {
  return new Date(iso).toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
  });
}

function EditorialRow({
  post,
  index,
  featured = false,
}: {
  post: BlogPost;
  index: number;
  featured?: boolean;
}) {
  const num = String(index + 1).padStart(2, "0");

  if (featured) {
    return (
      <ScrollReveal delay={0.1}>
        <Link
          href={`/blog/${post.slug}`}
          className="group relative grid lg:grid-cols-[1.15fr_1fr] gap-0 rounded-[28px] md:rounded-[36px] overflow-hidden border border-border/60 bg-white hover:border-brand/25 transition-all duration-500 hover:shadow-[0_32px_80px_rgba(26,63,216,0.1)]"
        >
          <BlogCoverImage
            src={post.image.src}
            alt={post.image.alt}
            accent={post.accent}
            className="aspect-[16/10] lg:aspect-auto lg:min-h-[420px]"
            priority
          />
          <div className="flex flex-col justify-between p-8 md:p-10 lg:p-12">
            <div>
              <div className="flex items-center gap-3 mb-6">
                <span
                  className="text-[11px] font-black uppercase tracking-[0.22em] px-3 py-1 rounded-full"
                  style={{ color: post.accent, background: `${post.accent}12`, border: `1px solid ${post.accent}25` }}
                >
                  {post.category}
                </span>
                <span className="text-[12px] font-bold text-text-muted">{formatDate(post.publishedAt)}</span>
              </div>
              <h3 className="text-[28px] md:text-[34px] lg:text-[38px] font-extrabold text-obsidian leading-[1.08] tracking-[-0.04em] group-hover:text-brand transition-colors mb-4">
                {post.title}
              </h3>
              <p className="text-[16px] md:text-[17px] text-text-secondary leading-relaxed font-medium line-clamp-4">
                {post.excerpt}
              </p>
            </div>
            <div className="mt-8 flex items-center justify-between">
              <span className="text-[12px] font-bold uppercase tracking-widest text-text-muted">{post.readTime}</span>
              <span className="inline-flex items-center gap-2 text-[14px] font-black text-brand group-hover:gap-3 transition-all">
                Read article
                <ArrowRight className="h-4 w-4" />
              </span>
            </div>
          </div>
        </Link>
      </ScrollReveal>
    );
  }

  return (
    <ScrollReveal delay={0.08 + index * 0.06}>
      <Link
        href={`/blog/${post.slug}`}
        className="group grid grid-cols-[auto_1fr_auto] md:grid-cols-[72px_200px_1fr_auto] lg:grid-cols-[88px_240px_1fr_auto] gap-5 md:gap-8 items-center py-8 border-b border-border/60 last:border-0 hover:bg-[#F8FAFC]/80 -mx-4 px-4 md:-mx-6 md:px-6 rounded-[20px] transition-colors duration-300"
      >
        <span
          className="font-mono text-[32px] md:text-[40px] font-black leading-none tracking-tighter transition-colors duration-300"
          style={{ color: `${post.accent}35` }}
        >
          {num}
        </span>

        <BlogCoverImage
          src={post.image.src}
          alt={post.image.alt}
          accent={post.accent}
          className="aspect-[4/3] rounded-[16px] md:rounded-[18px] hidden md:block"
        />

        <div className="min-w-0 col-span-2 md:col-span-1">
          <div className="flex flex-wrap items-center gap-x-3 gap-y-1 mb-2">
            <span className="text-[10px] font-black uppercase tracking-[0.2em]" style={{ color: post.accent }}>
              {post.category}
            </span>
            <span className="text-text-muted text-[11px]">·</span>
            <span className="text-[11px] font-bold text-text-muted">{formatDate(post.publishedAt)}</span>
          </div>
          <h3 className="text-[18px] md:text-[22px] font-extrabold text-obsidian tracking-[-0.03em] leading-snug group-hover:text-brand transition-colors mb-2">
            {post.title}
          </h3>
          <p className="text-[14px] md:text-[15px] text-text-secondary font-medium leading-relaxed line-clamp-2 hidden sm:block">
            {post.excerpt}
          </p>
        </div>

        <div className="hidden lg:flex h-12 w-12 rounded-full border border-border/70 items-center justify-center text-text-muted group-hover:bg-brand group-hover:border-brand group-hover:text-white transition-all duration-300 flex-shrink-0">
          <ArrowUpRight className="h-5 w-5" />
        </div>
      </Link>
    </ScrollReveal>
  );
}

export function BlogPreview({
  featured,
  posts,
}: {
  featured: BlogPost;
  posts: BlogPost[];
}) {
  const rest = posts.filter((p) => p.slug !== featured.slug);

  return (
    <section id="insights" className="relative bg-[#F4F7FB] overflow-hidden">
      <div className="absolute top-0 right-0 w-[600px] h-[400px] bg-brand/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="w-full max-w-[1600px] mx-auto px-6 sm:px-10 lg:px-16 py-20 md:py-28 lg:py-32 relative z-10">
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-12 md:mb-16">
          <ScrollReveal>
            <span className="inline-block text-[11px] font-black uppercase tracking-[0.32em] text-brand mb-4">
              Engineering Notes
            </span>
            <h2 className="text-[34px] md:text-[48px] lg:text-[52px] font-extrabold text-obsidian leading-[1.06] tracking-[-0.04em] max-w-[640px]">
              Field notes from the{" "}
              <span
                className="bg-clip-text text-transparent"
                style={{ backgroundImage: "linear-gradient(135deg, #1A3FD8 0%, #059669 100%)" }}
              >
                edge of WordPress.
              </span>
            </h2>
            <p className="mt-4 text-[17px] text-text-secondary font-medium leading-relaxed max-w-[520px]">
              Deep dives on static delivery, indexing, Core Web Vitals, and security, written for teams who take WordPress performance and SEO seriously.
            </p>
          </ScrollReveal>

          <ScrollReveal delay={0.1}>
            <Link
              href="/blog"
              className="inline-flex items-center gap-2 rounded-full border-2 border-obsidian/10 bg-white px-6 py-3.5 text-[13px] font-black uppercase tracking-wide text-obsidian hover:border-brand hover:text-brand transition-colors group flex-shrink-0"
            >
              View all articles
              <ArrowRight className="h-4 w-4 group-hover:translate-x-0.5 transition-transform" />
            </Link>
          </ScrollReveal>
        </div>

        <EditorialRow post={featured} index={0} featured />

        <div className="mt-10 md:mt-14">
          {rest.map((post, i) => (
            <EditorialRow key={post.slug} post={post} index={i + 1} />
          ))}
        </div>
      </div>
    </section>
  );
}
