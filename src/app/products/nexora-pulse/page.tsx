import type { Metadata } from 'next';
import { MarketingLayout } from '@/components/layout/MarketingLayout';
import { PulseHero } from '@/components/sections/pulse/PulseHero';
import { PulseIndexDoctor } from '@/components/sections/pulse/PulseIndexDoctor';
import { PulseFeatures } from '@/components/sections/pulse/PulseFeatures';
import { PulseIntegrations } from '@/components/sections/pulse/PulseIntegrations';
import { PulseComparison } from '@/components/sections/pulse/PulseComparison';
import { PulseFAQ } from '@/components/sections/pulse/PulseFAQ';
import { PulseFinalCTA } from '@/components/sections/pulse/PulseFinalCTA';
import { ProductDownloadBand } from '@/components/product/ProductDownloadBand';
import { getProduct } from '@/data/products';

const product = getProduct('nexora-pulse')!;
const SITE = 'https://auralogicslabs.com';

export const metadata: Metadata = {
  title: 'Nexora Pulse | Free WordPress SEO Operations Platform',
  description:
    'Nexora Pulse is a free WordPress SEO Operations Platform, Index Doctor with real Google Search Console verdicts, internal link graph, Core Web Vitals, duplicate detection and schema, all in one console. Runs safely alongside Yoast, Rank Math and AIOSEO.',
  alternates: { canonical: '/products/nexora-pulse' },
  keywords: product.keywords,
  openGraph: {
    title: 'Nexora Pulse | Free WordPress SEO Operations Platform',
    description:
      'One free SEO console with real Google verdicts, Index Doctor, internal links, Core Web Vitals and more. Safe alongside any SEO plugin.',
    url: `${SITE}/products/nexora-pulse`,
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Nexora Pulse | Free WordPress SEO Operations Platform',
    description: 'Real Google index verdicts, internal link graph and Core Web Vitals, free, in one console.',
  },
};

export default function NexoraPulsePage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'SoftwareApplication',
        '@id': `${SITE}/products/nexora-pulse#software`,
        name: 'Nexora Pulse',
        description: product.description,
        applicationCategory: 'BusinessApplication',
        operatingSystem: 'WordPress',
        url: `${SITE}/products/nexora-pulse`,
        softwareVersion: product.version,
        downloadUrl: `${SITE}/api/download/nexora-pulse`,
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
          { '@type': 'ListItem', position: 3, name: 'Nexora Pulse', item: `${SITE}/products/nexora-pulse` },
        ],
      },
    ],
  };

  return (
    <MarketingLayout>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <PulseHero />
      <PulseIndexDoctor />
      <PulseFeatures />
      <PulseIntegrations />
      <PulseComparison />
      <ProductDownloadBand product={product} />
      <PulseFAQ />
      <PulseFinalCTA />
    </MarketingLayout>
  );
}
