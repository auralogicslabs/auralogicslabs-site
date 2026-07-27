import type { Metadata } from 'next';
import { MarketingLayout } from '@/components/layout/MarketingLayout';
import { EngineHero } from '@/components/sections/EngineHero';
import { TrustMetrics } from '@/components/sections/TrustMetrics';
import { PlatformOverview } from '@/components/sections/PlatformOverview';
import { ProblemComparison } from '@/components/sections/ProblemComparison';
import { SecurityGhost } from '@/components/sections/SecurityGhost';
import { HowItWorks } from '@/components/sections/HowItWorks';
import { PerformanceAudit } from '@/components/sections/PerformanceAudit';
import { Compatibility } from '@/components/sections/Compatibility';
import { PersonaFocus } from '@/components/sections/PersonaFocus';
import { EnginePricing } from '@/components/sections/EnginePricing';
import { FAQ } from '@/components/sections/FAQ';
import { FinalCTA } from '@/components/sections/FinalCTA';
import { ProductDownloadBand } from '@/components/product/ProductDownloadBand';
import { getProduct } from '@/data/products';
import { faqData } from '@/data/faq';

export const metadata: Metadata = {
  title: 'Nexora Engine | Make WordPress Fast & Invisible | Ghost Protocol',
  description:
    'Static-speed delivery plus Ghost Protocol: pre-render WordPress to flat HTML for 22ms TTFB, and strip the WordPress fingerprint so scanners like Wappalyzer can’t detect it. Drop-in install, no headless rebuild.',
  alternates: { canonical: '/products/nexora-engine' },
  keywords: ['hide WordPress from scanners', 'WordPress fingerprint hiding', 'Ghost Protocol WordPress', 'make WordPress invisible', 'WordPress static cache plugin', 'WordPress TTFB optimization', 'WordPress security hardening', 'Wappalyzer WordPress'],
  openGraph: {
    title: 'Nexora Engine | Make WordPress Fast & Invisible',
    description: 'Static-speed delivery plus Ghost Protocol: your site stops looking like WordPress to scanners and bots. 22ms TTFB, drop-in install, no headless rebuild.',
    url: 'https://auralogicslabs.com/products/nexora-engine',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Nexora Engine | Make WordPress Fast & Invisible',
    description: 'Static-speed delivery plus Ghost Protocol fingerprint hiding. Scanners can’t tell it’s WordPress. 22ms TTFB, drop-in install.',
  },
};

export default function NexoraEnginePage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'SoftwareApplication',
        '@id': 'https://auralogicslabs.com/products/nexora-engine#software',
        name: 'Nexora Engine',
        description: 'WordPress static delivery and fingerprint-hiding plugin. Pre-renders every page into flat HTML for 22ms TTFB, and strips the WordPress fingerprint (Ghost Protocol) so vulnerability scanners and tools like Wappalyzer can’t identify the site as WordPress, without a headless rebuild.',
        applicationCategory: 'BusinessApplication',
        operatingSystem: 'WordPress',
        url: 'https://auralogicslabs.com/products/nexora-engine',
        offers: {
          '@type': 'Offer',
          price: '0',
          priceCurrency: 'USD',
          availability: 'https://schema.org/InStock',
          url: 'https://auralogicslabs.com/products/nexora-engine',
        },
        publisher: { '@id': 'https://auralogicslabs.com/#organization' },
        featureList: [
          '22ms TTFB static delivery',
          'Zero PHP execution on cache hit',
          'WooCommerce compatible',
          'Elementor compatible',
          'Ghost Protocol security hardening',
          'Automatic cache invalidation on publish',
          'Works on any WordPress host',
          'WP-CLI support',
        ],
      },
      {
        '@type': 'FAQPage',
        mainEntity: faqData.map((faq) => ({
          '@type': 'Question',
          name: faq.question,
          acceptedAnswer: {
            '@type': 'Answer',
            text: faq.answer,
          },
        })),
      },
      {
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://auralogicslabs.com' },
          { '@type': 'ListItem', position: 2, name: 'Products', item: 'https://auralogicslabs.com/products' },
          { '@type': 'ListItem', position: 3, name: 'Nexora Engine', item: 'https://auralogicslabs.com/products/nexora-engine' },
        ],
      },
    ],
  };

  return (
    <MarketingLayout>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <EngineHero />
      <TrustMetrics />
      <ProblemComparison />
      <SecurityGhost />
      <PlatformOverview />
      <HowItWorks />
      <PerformanceAudit />
      <Compatibility />
      <PersonaFocus />
      <EnginePricing />
      <FAQ />
      <ProductDownloadBand product={getProduct('nexora-engine')!} />
      <FinalCTA />
    </MarketingLayout>
  );
}
