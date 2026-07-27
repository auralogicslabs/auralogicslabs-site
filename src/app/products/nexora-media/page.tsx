import type { Metadata } from 'next';
import { MarketingLayout } from '@/components/layout/MarketingLayout';
import { MediaHero } from '@/components/sections/MediaHero';
import { MediaFeatures } from '@/components/sections/MediaFeatures';
import { FinalCTA } from '@/components/sections/FinalCTA';
import { Section } from '@/components/product/Section';
import { MetricsStrip } from '@/components/product/MetricsStrip';
import { ProblemSection } from '@/components/product/ProblemSection';
import { KeyBenefits } from '@/components/product/KeyBenefits';
import { HowItWorksSteps } from '@/components/product/HowItWorksSteps';
import { ComparisonVs } from '@/components/product/ComparisonVs';
import { CompatibilityStrip } from '@/components/product/CompatibilityStrip';
import { FaqAccordion } from '@/components/product/FaqAccordion';
import { ProductDownloadBand } from '@/components/product/ProductDownloadBand';
import { RelatedProducts } from '@/components/product/RelatedProducts';
import { getProduct, getRelatedProducts } from '@/data/products';

const product = getProduct('nexora-media')!;
const SITE = 'https://auralogicslabs.com';

export const metadata: Metadata = {
  title: 'Nexora Media | Safe WordPress AVIF & WebP Image Optimization',
  description:
    'Safe AVIF and WebP image optimization for WordPress. Automatic AVIF and WebP variants, a background optimization queue, adaptive frontend delivery and a queue-health system, without breaking your page builder. Fully free and GPL.',
  alternates: { canonical: '/products/nexora-media' },
  keywords: product.keywords,
  openGraph: {
    title: 'Nexora Media | Safe WordPress AVIF & WebP Image Optimization',
    description:
      'Automatic AVIF and WebP variants, safe background queue, adaptive delivery and queue health, without breaking your page builder. Free and GPL.',
    url: `${SITE}/products/nexora-media`,
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Nexora Media | Safe WordPress AVIF & WebP Image Optimization',
    description: 'Automatic AVIF and WebP variants with a safe background queue and adaptive delivery, without breaking your editor.',
  },
};

export default function NexoraMediaPage() {
  const related = getRelatedProducts(product);

  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'SoftwareApplication',
        '@id': `${SITE}/products/nexora-media#software`,
        name: 'Nexora Media',
        description: product.description,
        applicationCategory: 'BusinessApplication',
        operatingSystem: 'WordPress',
        url: `${SITE}/products/nexora-media`,
        softwareVersion: product.version,
        downloadUrl: `${SITE}/api/download/nexora-media`,
        offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD', availability: 'https://schema.org/InStock' },
        featureList: (product.features ?? []).map((f) => f.title),
      },
      {
        '@type': 'FAQPage',
        mainEntity: (product.faqs ?? []).map((f) => ({
          '@type': 'Question',
          name: f.question,
          acceptedAnswer: { '@type': 'Answer', text: f.answer },
        })),
      },
      {
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Home', item: SITE },
          { '@type': 'ListItem', position: 2, name: 'Products', item: `${SITE}/products` },
          { '@type': 'ListItem', position: 3, name: 'Nexora Media', item: `${SITE}/products/nexora-media` },
        ],
      },
    ],
  };

  return (
    <MarketingLayout>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
        <MediaHero />

        {product.metrics && <MetricsStrip metrics={product.metrics} />}

        {product.problem && <ProblemSection problem={product.problem} accent={product.accent} />}

        {product.keyBenefits && (
          <Section eyebrow="Highlights" title="Why teams choose Nexora Media" muted>
            <KeyBenefits benefits={product.keyBenefits} accent={product.accent} />
          </Section>
        )}

        <MediaFeatures />

        {product.howItWorks && (
          <Section eyebrow="How it works" title="Upload, optimize, serve, safely" muted>
            <HowItWorksSteps steps={product.howItWorks} accent={product.accent} />
          </Section>
        )}

        {product.comparison && (
          <Section eyebrow="Comparison" title={`vs ${product.comparison.againstLabel}`}>
            <ComparisonVs comparison={product.comparison} productName={product.name} accent={product.accent} />
          </Section>
        )}

        <Section eyebrow="Compatibility" title="Works with your stack" muted>
          <CompatibilityStrip product={product} />
        </Section>

        <ProductDownloadBand product={product} />

        {product.faqs && (
          <Section eyebrow="Questions" title="Frequently asked questions">
            <FaqAccordion faqs={product.faqs} />
          </Section>
        )}

        {related.length > 0 && (
          <Section eyebrow="Explore" title="Related products" muted>
            <RelatedProducts products={related} />
          </Section>
        )}

        <FinalCTA />
    </MarketingLayout>
  );
}
