import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { BlogCoverImage } from "@/components/blog/BlogCoverImage";
import { BlogPostContent } from "@/components/blog/BlogPostContent";
import { BlogJsonLd } from "@/components/blog/BlogJsonLd";
import { getAllPosts, getPostBySlug, getRelatedPosts } from "@/data/blog";

type Props = { params: Promise<{ slug: string }> };

export async function generateStaticParams() {
  return getAllPosts().map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) return { title: "Article Not Found" };

  return {
    title: `${post.title} — Auralogics Labs`,
    description: post.description,
    keywords: post.tags,
    alternates: { canonical: `/blog/${post.slug}` },
    openGraph: {
      title: post.title,
      description: post.description,
      url: `https://auralogicslabs.com/blog/${post.slug}`,
      type: "article",
      publishedTime: post.publishedAt,
      modifiedTime: post.updatedAt,
      tags: post.tags,
      images: [{ url: `https://auralogicslabs.com${post.image.src}`, alt: post.image.alt }],
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.description,
    },
  };
}

function formatDate(iso: string) {
  return new Date(iso).toLocaleDateString("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
  });
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) notFound();

  const related = getRelatedPosts(slug, 3);

  return (
    <div className="min-h-screen bg-white">
      <BlogJsonLd post={post} />
      <Header />

      <main>
        <article>
          <header className="pt-[120px] pb-10 md:pb-14">
            <div className="w-full max-w-[860px] mx-auto px-6 sm:px-10">
              <Link
                href="/blog"
                className="inline-flex items-center gap-2 text-[13px] font-bold text-text-muted hover:text-brand transition-colors mb-8"
              >
                <ArrowLeft className="h-4 w-4" />
                All articles
              </Link>

              <div className="flex flex-wrap items-center gap-3 mb-6">
                <span
                  className="text-[11px] font-black uppercase tracking-[0.22em] px-3 py-1 rounded-full"
                  style={{ color: post.accent, background: `${post.accent}12`, border: `1px solid ${post.accent}25` }}
                >
                  {post.category}
                </span>
                <span className="text-[13px] font-bold text-text-muted">{formatDate(post.publishedAt)}</span>
                <span className="text-text-muted">·</span>
                <span className="text-[13px] font-bold text-text-muted">{post.readTime}</span>
              </div>

              <h1 className="text-[36px] md:text-[48px] lg:text-[52px] font-extrabold text-obsidian leading-[1.06] tracking-[-0.04em] mb-6">
                {post.title}
              </h1>

              <p className="text-[18px] md:text-[20px] text-text-secondary font-medium leading-relaxed mb-8">
                {post.excerpt}
              </p>

              <p className="text-[14px] font-bold text-text-muted">
                By {post.author.name} · {post.author.role}
              </p>
            </div>
          </header>

          <div className="w-full max-w-[1100px] mx-auto px-6 sm:px-10 mb-14 md:mb-20">
            <BlogCoverImage
              src={post.image.src}
              alt={post.image.alt}
              accent={post.accent}
              className="aspect-[16/9] rounded-[24px] md:rounded-[32px]"
              priority
            />
          </div>

          <div className="w-full max-w-[760px] mx-auto px-6 sm:px-10 pb-20 md:pb-28">
            <BlogPostContent blocks={post.content} />

            <div className="mt-12 flex flex-wrap gap-2">
              {post.tags.map((tag) => (
                <span
                  key={tag}
                  className="text-[11px] font-bold uppercase tracking-wider px-3 py-1.5 rounded-full bg-[#F4F7FB] text-text-muted border border-border/60"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </article>

        {related.length > 0 && (
          <section className="bg-[#F4F7FB] border-t border-border/60 py-16 md:py-24">
            <div className="w-full max-w-[1100px] mx-auto px-6 sm:px-10">
              <h2 className="text-[13px] font-black uppercase tracking-[0.28em] text-text-muted mb-10">
                Continue reading
              </h2>
              <div className="grid md:grid-cols-3 gap-6">
                {related.map((item) => (
                  <Link
                    key={item.slug}
                    href={`/blog/${item.slug}`}
                    className="group rounded-[20px] overflow-hidden border border-border/60 bg-white hover:border-brand/25 hover:shadow-lg transition-all duration-300"
                  >
                    <BlogCoverImage
                      src={item.image.src}
                      alt={item.image.alt}
                      accent={item.accent}
                      className="aspect-[16/10]"
                    />
                    <div className="p-5">
                      <p className="text-[10px] font-black uppercase tracking-wider mb-2" style={{ color: item.accent }}>
                        {item.category}
                      </p>
                      <h3 className="text-[16px] font-extrabold text-obsidian leading-snug group-hover:text-brand transition-colors line-clamp-3">
                        {item.title}
                      </h3>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </section>
        )}

        <section className="py-16 md:py-20 border-t border-border/60">
          <div className="w-full max-w-[760px] mx-auto px-6 sm:px-10 text-center">
            <h2 className="text-[28px] md:text-[34px] font-extrabold text-obsidian tracking-tight mb-4">
              Put this into practice on your stack
            </h2>
            <p className="text-[16px] text-text-secondary font-medium mb-8 max-w-[480px] mx-auto">
              Nexora Engine delivers static-speed WordPress in minutes — no headless migration required.
            </p>
            <Link
              href="/products/nexora-engine"
              className="inline-flex items-center gap-2 rounded-full bg-brand text-white px-8 py-4 text-[14px] font-black hover:bg-brand/90 transition-colors group"
            >
              Explore Nexora Engine
              <ArrowRight className="h-4 w-4 group-hover:translate-x-0.5 transition-transform" />
            </Link>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
