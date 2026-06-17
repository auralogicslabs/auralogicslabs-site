import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { BlogCoverImage } from "@/components/blog/BlogCoverImage";
import { BlogListingJsonLd } from "@/components/blog/BlogJsonLd";
import { getAllPosts } from "@/data/blog";

export const metadata: Metadata = {
  title: "WordPress Performance & SEO Blog | Auralogics Labs",
  description:
    "Technical guides on WordPress TTFB, Core Web Vitals, static delivery, SEO indexing fixes, image optimisation, and internal linking — written by the Auralogics Labs team.",
  alternates: { canonical: "/blog" },
  openGraph: {
    title: "WordPress Performance & SEO Blog | Auralogics Labs",
    description:
      "Deep dives on WordPress performance, SEO diagnostics, image optimisation, and static delivery from the team behind the Nexora suite.",
    url: "https://auralogicslabs.com/blog",
    type: "website",
  },
};

function formatDate(iso: string) {
  return new Date(iso).toLocaleDateString("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
  });
}

export default function BlogPage() {
  const posts = getAllPosts();
  const [featured, ...rest] = posts;

  return (
    <div className="min-h-screen bg-white">
      <BlogListingJsonLd posts={posts} />
      <Header />

      <main>
        <section className="relative bg-[#F4F7FB] overflow-hidden pt-[120px] pb-24 md:pb-32">
          <div
            className="absolute top-0 right-0 w-[600px] h-[400px] pointer-events-none"
            style={{ background: "radial-gradient(ellipse at top right, rgba(26,63,216,0.07) 0%, transparent 70%)" }}
          />
          <div className="w-full max-w-[1600px] mx-auto px-6 sm:px-10 lg:px-16 relative z-10">
            <span className="inline-block text-[11px] font-black uppercase tracking-[0.32em] text-brand mb-5">
              Engineering Notes
            </span>
            <h1 className="text-[40px] md:text-[56px] lg:text-[64px] font-extrabold text-obsidian leading-[1.04] tracking-[-0.04em] max-w-[900px] mb-6">
              WordPress infrastructure,{" "}
              <span
                className="bg-clip-text text-transparent"
                style={{ backgroundImage: "linear-gradient(135deg, #1A3FD8 0%, #059669 100%)" }}
              >
                explained for teams who ship.
              </span>
            </h1>
            <p className="text-[17px] md:text-[19px] text-slate-500 font-medium leading-relaxed max-w-[620px]">
              Performance, SEO diagnostics, and image optimisation for WordPress. Practical guides from the team building the Nexora suite.
            </p>
          </div>
        </section>

        {featured && (
          <section className="relative -mt-10 md:-mt-14 z-10 px-6 sm:px-10 lg:px-16">
            <div className="w-full max-w-[1600px] mx-auto">
              <Link
                href={`/blog/${featured.slug}`}
                className="group grid lg:grid-cols-2 gap-0 rounded-[28px] md:rounded-[36px] overflow-hidden border border-border/60 bg-white shadow-[0_32px_80px_rgba(2,6,23,0.12)] hover:shadow-[0_40px_100px_rgba(26,63,216,0.14)] transition-shadow duration-500"
              >
                <BlogCoverImage
                  src={featured.image.src}
                  alt={featured.image.alt}
                  accent={featured.accent}
                  className="aspect-[16/10] lg:aspect-auto lg:min-h-[440px]"
                  priority
                />
                <div className="flex flex-col justify-center p-8 md:p-12 lg:p-14">
                  <span className="text-[11px] font-black uppercase tracking-[0.22em] text-brand mb-4">
                    Featured · {featured.category}
                  </span>
                  <h2 className="text-[28px] md:text-[36px] lg:text-[42px] font-extrabold text-obsidian leading-[1.08] tracking-[-0.04em] group-hover:text-brand transition-colors mb-4">
                    {featured.title}
                  </h2>
                  <p className="text-[16px] md:text-[17px] text-text-secondary leading-relaxed font-medium mb-8">
                    {featured.excerpt}
                  </p>
                  <div className="flex items-center gap-4 text-[13px] font-bold text-text-muted">
                    <span>{formatDate(featured.publishedAt)}</span>
                    <span>·</span>
                    <span>{featured.readTime}</span>
                    <span className="ml-auto inline-flex items-center gap-2 text-brand font-black group-hover:gap-3 transition-all">
                      Read
                      <ArrowRight className="h-4 w-4" />
                    </span>
                  </div>
                </div>
              </Link>
            </div>
          </section>
        )}

        <section className="w-full max-w-[1600px] mx-auto px-6 sm:px-10 lg:px-16 py-16 md:py-24 lg:py-28">
          <div className="flex items-center justify-between mb-10 md:mb-14 border-b border-border/60 pb-6">
            <h2 className="text-[13px] font-black uppercase tracking-[0.28em] text-text-muted">All articles</h2>
            <span className="text-[13px] font-bold text-text-muted">{posts.length} posts</span>
          </div>

          <div className="divide-y divide-border/60">
            {rest.map((post, i) => (
              <Link
                key={post.slug}
                href={`/blog/${post.slug}`}
                className="group grid grid-cols-[56px_1fr_auto] md:grid-cols-[80px_280px_1fr_auto] gap-5 md:gap-10 items-center py-10 first:pt-0 hover:bg-[#F8FAFC] -mx-4 px-4 md:-mx-6 md:px-6 rounded-[24px] transition-colors"
              >
                <span
                  className="font-mono text-[36px] md:text-[48px] font-black leading-none"
                  style={{ color: `${post.accent}30` }}
                >
                  {String(i + 2).padStart(2, "0")}
                </span>

                <BlogCoverImage
                  src={post.image.src}
                  alt={post.image.alt}
                  accent={post.accent}
                  className="aspect-[16/10] rounded-[18px] hidden md:block"
                />

                <div className="col-span-2 md:col-span-1 min-w-0">
                  <div className="flex flex-wrap items-center gap-2 mb-2">
                    <span className="text-[10px] font-black uppercase tracking-[0.2em]" style={{ color: post.accent }}>
                      {post.category}
                    </span>
                    <span className="text-text-muted">·</span>
                    <span className="text-[12px] font-bold text-text-muted">{formatDate(post.publishedAt)}</span>
                  </div>
                  <h3 className="text-[20px] md:text-[26px] font-extrabold text-obsidian tracking-[-0.03em] leading-snug group-hover:text-brand transition-colors mb-2">
                    {post.title}
                  </h3>
                  <p className="text-[15px] text-text-secondary font-medium leading-relaxed line-clamp-2">{post.excerpt}</p>
                  <p className="mt-3 text-[12px] font-bold uppercase tracking-wider text-text-muted">{post.readTime}</p>
                </div>

                <div className="hidden lg:flex h-12 w-12 rounded-full border border-border items-center justify-center text-text-muted group-hover:bg-brand group-hover:border-brand group-hover:text-white transition-all">
                  <ArrowUpRight className="h-5 w-5" />
                </div>
              </Link>
            ))}
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
