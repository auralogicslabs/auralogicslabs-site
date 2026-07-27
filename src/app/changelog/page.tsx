import type { Metadata } from 'next';
import Link from 'next/link';
import { History, ArrowRight } from 'lucide-react';
import { MarketingLayout } from '@/components/layout/MarketingLayout';
import { PageHero } from '@/components/marketing/PageHero';
import { siteContainerClass } from '@/lib/site-layout';
import { getAllProducts } from '@/data/products';
import { formatDate } from '@/lib/format';

export const metadata: Metadata = {
  title: 'Changelog | Auralogics Labs Nexora Suite',
  description: 'Release notes and version history for every Nexora product.',
  alternates: { canonical: '/changelog' },
};

export default function ChangelogHubPage() {
  const products = getAllProducts();

  return (
    <MarketingLayout className="bg-[#F8FAFF]">
      <PageHero
        eyebrow="Changelog"
        icon={History}
        title="Release notes"
        description="Version history for each product in the Nexora suite. Select a product to read what shipped in every release."
      />

      <section className="py-14 md:py-16">
        <div className={siteContainerClass}>
          <div className="grid gap-4 sm:grid-cols-2">
            {products.map((product) => {
              const Icon = product.icon;
              const latest = product.changelog?.[0];
              return (
                <Link
                  key={product.slug}
                  href={`/changelog/${product.slug}`}
                  className="group rounded-2xl border border-border bg-white p-6 transition-all hover:-translate-y-0.5 hover:shadow-md"
                >
                  <div className="flex items-center gap-3">
                    <div
                      className="flex h-10 w-10 items-center justify-center rounded-lg"
                      style={{ background: `${product.accent}12`, border: `1px solid ${product.accent}28` }}
                    >
                      <Icon className="h-5 w-5" style={{ color: product.accent }} />
                    </div>
                    <div>
                      <h2 className="text-[17px] font-extrabold text-obsidian">{product.name}</h2>
                      {latest ? (
                        <p className="text-[13px] font-semibold text-text-muted">
                          Latest v{latest.version} · {formatDate(latest.date)}
                        </p>
                      ) : (
                        <p className="text-[13px] font-semibold text-text-muted">No releases yet</p>
                      )}
                    </div>
                  </div>
                  <span className="mt-4 inline-flex items-center gap-1 text-[13px] font-bold text-brand group-hover:gap-2 transition-all">
                    View changelog <ArrowRight className="h-3.5 w-3.5" />
                  </span>
                </Link>
              );
            })}
          </div>
        </div>
      </section>
    </MarketingLayout>
  );
}
