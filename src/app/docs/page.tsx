import type { Metadata } from 'next';
import Link from 'next/link';
import { BookOpen, History, ArrowRight } from 'lucide-react';
import { MarketingLayout } from '@/components/layout/MarketingLayout';
import { PageHero } from '@/components/marketing/PageHero';
import { siteContainerClass } from '@/lib/site-layout';
import { getAllProductDocs } from '@/data/docs';
import { getProduct } from '@/data/products';

export const metadata: Metadata = {
  title: 'Documentation | Auralogics Labs Nexora Suite',
  description:
    'Product documentation for the Nexora suite, Nexora Engine, Pulse, and Media. Guides, configuration references, and changelogs.',
  alternates: { canonical: '/docs' },
};

export default function DocsHubPage() {
  const docSets = getAllProductDocs();

  return (
    <MarketingLayout className="bg-[#F8FAFF]">
      <PageHero
        eyebrow="Documentation"
        icon={BookOpen}
        title="Nexora product docs"
        description="Each product has its own guide, installation, features, and operations, plus a dedicated changelog. Pick your product to get started."
      />

      <section className="py-14 md:py-16">
        <div className={siteContainerClass}>
          <div className="grid gap-5 md:grid-cols-2">
            {docSets.map((docs) => {
              const product = getProduct(docs.productSlug)!;
              const Icon = product.icon;
              const articleCount = docs.articles.length;
              return (
                <Link
                  key={docs.productSlug}
                  href={`/docs/${docs.productSlug}/${docs.defaultArticleSlug}`}
                  className="group flex flex-col rounded-[24px] border border-border bg-white p-7 shadow-sm transition-all hover:-translate-y-0.5 hover:shadow-md"
                >
                  <div className="flex items-start justify-between gap-4">
                    <div
                      className="flex h-12 w-12 items-center justify-center rounded-xl"
                      style={{ background: `${product.accent}12`, border: `1.5px solid ${product.accent}26` }}
                    >
                      <Icon className="h-6 w-6" style={{ color: product.accent }} />
                    </div>
                    {product.status === 'coming-soon' && (
                      <span className="rounded-full bg-amber-500/10 px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider text-amber-700">
                        Coming soon
                      </span>
                    )}
                  </div>
                  <h2 className="mt-5 text-[22px] font-extrabold text-obsidian tracking-tight">{product.name}</h2>
                  <p className="mt-2 flex-1 text-[15px] text-text-secondary font-medium leading-relaxed">{docs.tagline}</p>
                  <div className="mt-6 flex flex-wrap items-center gap-4 text-[13px] font-bold">
                    <span className="text-text-muted">{articleCount} articles</span>
                    <span className="inline-flex items-center gap-1 text-brand group-hover:gap-2 transition-all">
                      Open docs <ArrowRight className="h-4 w-4" />
                    </span>
                  </div>
                </Link>
              );
            })}
          </div>

          <div className="mt-12 rounded-2xl border border-border bg-white p-6 md:flex md:items-center md:justify-between md:p-8">
            <div className="flex items-start gap-4">
              <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-brand/10">
                <History className="h-5 w-5 text-brand" />
              </div>
              <div>
                <h3 className="text-[18px] font-extrabold text-obsidian">Release changelogs</h3>
                <p className="mt-1 text-[14px] text-text-secondary font-medium">
                  Version history for every product in one place.
                </p>
              </div>
            </div>
            <Link
              href="/changelog"
              className="mt-4 inline-flex items-center gap-2 rounded-full bg-brand px-5 py-2.5 text-[14px] font-bold text-white md:mt-0"
            >
              Browse changelogs <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>
    </MarketingLayout>
  );
}
