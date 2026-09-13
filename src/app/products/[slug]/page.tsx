import { siteContainerClass } from '@/lib/site-layout';
import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { Download, BookOpen, Play } from 'lucide-react';

import { MarketingLayout } from '@/components/layout/MarketingLayout';
import { FinalCTA } from '@/components/sections/FinalCTA';
import { Section } from '@/components/product/Section';
import { StatusBadge } from '@/components/product/StatusBadge';
import { MetricsStrip } from '@/components/product/MetricsStrip';
import { ProblemSection } from '@/components/product/ProblemSection';
import { KeyBenefits } from '@/components/product/KeyBenefits';
import { GroupedFeatures } from '@/components/product/GroupedFeatures';
import { HowItWorksSteps } from '@/components/product/HowItWorksSteps';
import { ComparisonVs } from '@/components/product/ComparisonVs';
import { ComparisonTable } from '@/components/product/ComparisonTable';
import { CompatibilityStrip } from '@/components/product/CompatibilityStrip';
import { ProductDownloadBand } from '@/components/product/ProductDownloadBand';
import { ComingSoonBand } from '@/components/product/ComingSoonBand';
import { FaqAccordion } from '@/components/product/FaqAccordion';
import { RelatedProducts } from '@/components/product/RelatedProducts';

import { getProduct, getTemplateProducts, getRelatedProducts } from '@/data/products';
import { getStableRelease } from '@/types/product';
import { formatDate } from '@/lib/format';

const SITE = 'https://auralogicslabs.com';

export const dynamicParams = false;

export function generateStaticParams() {
  return getTemplateProducts().map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const product = getProduct(slug);
  if (!product) return {};
  const title = `${product.name} | ${product.tagline}`;
  const url = `${SITE}/products/${product.slug}`;
  return {
    title,
    description: product.description,
    alternates: { canonical: `/products/${product.slug}` },
    keywords: product.keywords,
    openGraph: { title, description: product.description, url, type: 'website' },
    twitter: { card: 'summary_large_image', title, description: product.tagline },
  };
}

export default async function ProductPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const product = getProduct(slug);
  if (!product || product.hidden || product.hasCustomPage) notFound();

  const Icon = product.icon;
  const stable = getStableRelease(product);
  const related = getRelatedProducts(product);
  const hasPro = (product.features ?? []).some((f) => f.tier !== 'free');

  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'SoftwareApplication',
        '@id': `${SITE}/products/${product.slug}#software`,
        name: product.name,
        description: product.description,
        applicationCategory: 'BusinessApplication',
        operatingSystem: 'WordPress',
        url: `${SITE}/products/${product.slug}`,
        ...(stable
          ? {
              softwareVersion: stable.version,
              // Point at the source the CTA actually uses.
              downloadUrl: product.links?.wporg ?? `${SITE}/api/download/${product.slug}`,
            }
          : {}),
        offers: {
          '@type': 'Offer',
          price: '0',
          priceCurrency: 'USD',
          availability: stable ? 'https://schema.org/InStock' : 'https://schema.org/PreOrder',
        },
        ...(product.features ? { featureList: product.features.map((f) => f.title) } : {}),
      },
      ...(product.faqs && product.faqs.length > 0
        ? [{
            '@type': 'FAQPage',
            mainEntity: product.faqs.map((f) => ({
              '@type': 'Question',
              name: f.question,
              acceptedAnswer: { '@type': 'Answer', text: f.answer },
            })),
          }]
        : []),
      {
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Home', item: SITE },
          { '@type': 'ListItem', position: 2, name: 'Products', item: `${SITE}/products` },
          { '@type': 'ListItem', position: 3, name: product.name, item: `${SITE}/products/${product.slug}` },
        ],
      },
    ],
  };

  return (
    <MarketingLayout>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
        {/* ── 1. Hero ── */}
        <section className="border-b border-border bg-surface-soft/40 pt-32 pb-16">
          <div className={siteContainerClass}>
            <div className="flex items-center gap-3">
              <div
                className="flex h-12 w-12 items-center justify-center rounded-lg"
                style={{ background: `${product.accent}12`, border: `1.5px solid ${product.accent}25` }}
              >
                <Icon className="h-6 w-6" style={{ color: product.accent }} />
              </div>
              <StatusBadge status={product.status} />
              {product.category && (
                <span className="text-[12px] font-bold uppercase tracking-wide text-text-muted">{product.category}</span>
              )}
            </div>

            <h1 className="mt-6 max-w-3xl text-4xl sm:text-5xl font-black tracking-tight text-obsidian">{product.name}</h1>
            <p className="mt-3 max-w-2xl text-[20px] font-semibold text-text-secondary">{product.tagline}</p>
            <p className="mt-4 max-w-2xl text-[17px] leading-relaxed text-text-secondary">{product.description}</p>

            <div className="mt-8 flex flex-wrap items-center gap-3">
              {stable ? (
                <a
                  href={product.links?.wporg ?? `/api/download/${product.slug}`}
                  {...(product.links?.wporg
                    ? { target: '_blank', rel: 'noopener noreferrer' }
                    : {})}
                  className="inline-flex items-center gap-2 rounded-full px-6 py-3 text-[15px] font-bold text-white transition-opacity hover:opacity-90"
                  style={{ background: product.accent }}
                >
                  <Download className="h-4 w-4" />
                  {product.links?.wporg ? 'Get it on WordPress.org' : 'Download Free'}
                </a>
              ) : (
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 rounded-full px-6 py-3 text-[15px] font-bold text-white transition-opacity hover:opacity-90"
                  style={{ background: product.accent }}
                >
                  Notify me at launch
                </Link>
              )}
              {product.links?.demo && (
                <Link
                  href={product.links.demo}
                  className="inline-flex items-center gap-2 rounded-full border-2 px-6 py-3 text-[15px] font-bold transition-colors"
                  style={{ borderColor: `${product.accent}40`, color: product.accent }}
                >
                  <Play className="h-4 w-4" />
                  Live Demo
                </Link>
              )}
              {product.links?.docs && (
                <Link
                  href={product.links.docs}
                  className="inline-flex items-center gap-2 rounded-full border border-border px-6 py-3 text-[15px] font-bold text-obsidian transition-colors hover:bg-surface-soft"
                >
                  <BookOpen className="h-4 w-4" />
                  Documentation
                </Link>
              )}
            </div>

            {stable && (
              <p className="mt-4 text-[13px] text-text-muted">
                Latest: <span className="font-mono font-semibold text-obsidian">v{stable.version}</span> ·{' '}
                {formatDate(stable.date)} · Tested up to WordPress {(stable.compatibility ?? product.compatibility).testedUpTo}
              </p>
            )}
          </div>
        </section>

        {/* ── 2. Proof metrics ── */}
        {product.metrics && product.metrics.length > 0 && <MetricsStrip metrics={product.metrics} />}

        {/* ── 3. The problem it solves ── */}
        {product.problem && <ProblemSection problem={product.problem} accent={product.accent} />}

        {/* ── 4. Key benefits ── */}
        {product.keyBenefits && product.keyBenefits.length > 0 && (
          <Section eyebrow="Highlights" title="Key benefits" muted>
            <KeyBenefits benefits={product.keyBenefits} accent={product.accent} />
          </Section>
        )}

        {/* ── 5. Features ── */}
        {product.features && product.features.length > 0 && (
          <Section id="features" eyebrow="Capabilities" title="Features">
            <GroupedFeatures features={product.features} />
          </Section>
        )}

        {/* ── 6. How it works ── */}
        {product.howItWorks && product.howItWorks.length > 0 && (
          <Section eyebrow="How it works" title="Up and running in minutes" muted>
            <HowItWorksSteps steps={product.howItWorks} accent={product.accent} />
          </Section>
        )}

        {/* ── 7. Screenshots ── */}
        {product.screenshots && product.screenshots.length > 0 && (
          <Section eyebrow="Screenshots" title="See it in action">
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
              {product.screenshots.map((s) => (
                <figure key={s.src} className="overflow-hidden rounded-card border border-border">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={s.src} alt={s.alt} className="w-full" loading="lazy" />
                  {s.caption && <figcaption className="px-4 py-3 text-[13px] text-text-muted">{s.caption}</figcaption>}
                </figure>
              ))}
            </div>
          </Section>
        )}

        {/* ── 8. How it compares ── */}
        {product.comparison && (
          <Section eyebrow="Comparison" title={`vs ${product.comparison.againstLabel}`} muted>
            <ComparisonVs comparison={product.comparison} productName={product.name} accent={product.accent} />
          </Section>
        )}

        {/* ── 9. Free vs Pro ── */}
        {hasPro && (
          <Section id="pricing" eyebrow="Plans" title="Free vs Pro">
            <ComparisonTable features={product.features ?? []} />
          </Section>
        )}

        {/* ── 10. Compatibility ── */}
        <Section eyebrow="Compatibility" title="Works with your stack" muted>
          <CompatibilityStrip product={product} />
        </Section>

        {/* ── 11. Download / coming soon ── */}
        {stable ? <ProductDownloadBand product={product} /> : <ComingSoonBand product={product} />}

        {/* ── 12. FAQ ── */}
        {product.faqs && product.faqs.length > 0 && (
          <Section eyebrow="Questions" title="Frequently asked questions">
            <FaqAccordion faqs={product.faqs} />
          </Section>
        )}

        {/* ── 13. Related products ── */}
        {related.length > 0 && (
          <Section eyebrow="Explore" title="Related products" muted>
            <RelatedProducts products={related} />
          </Section>
        )}

        {/* ── 14. Final CTA ── */}
        <FinalCTA />
    </MarketingLayout>
  );
}
