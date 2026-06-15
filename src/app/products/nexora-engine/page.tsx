import type { Metadata } from 'next';
import { Header } from '@/components/layout/Header';
import { EngineHero } from '@/components/sections/EngineHero';
import { TrustMetrics } from '@/components/sections/TrustMetrics';
import { WhyNexora } from '@/components/sections/WhyNexora';
import { PlatformOverview } from '@/components/sections/PlatformOverview';
import { MethodologyDetail } from '@/components/sections/MethodologyDetail';
import { PerformanceAudit } from '@/components/sections/PerformanceAudit';
import { ProblemComparison } from '@/components/sections/ProblemComparison';
import { ArchitectureFlow } from '@/components/sections/ArchitectureFlow';
import { SecurityGhost } from '@/components/sections/SecurityGhost';
import { Pricing } from '@/components/sections/Pricing';
import { FeaturesGrid } from '@/components/sections/FeaturesGrid';
import { PerformanceVisualization } from '@/components/sections/PerformanceVisualization';
import { HowItWorks } from '@/components/sections/HowItWorks';
import { Compatibility } from '@/components/sections/Compatibility';
import { PersonaFocus } from '@/components/sections/PersonaFocus';
import { FAQ } from '@/components/sections/FAQ';
import { FinalCTA } from '@/components/sections/FinalCTA';
import { Footer } from '@/components/layout/Footer';
import { faqData } from '@/data/faq';

export const metadata: Metadata = {
  title: 'Nexora Engine | WordPress Static Cache Plugin | 22ms TTFB',
  description:
    'Pre-render every WordPress page into flat HTML delivered before PHP boots. 22ms TTFB, 100% static cache hits, drop-in installation. Works with Elementor, WooCommerce, and every WordPress host.',
  alternates: { canonical: '/products/nexora-engine' },
  keywords: ['WordPress static cache plugin', 'WordPress TTFB optimization', 'WordPress speed plugin', 'WordPress Core Web Vitals', 'static HTML WordPress cache', 'WordPress performance plugin', 'WooCommerce speed'],
  openGraph: {
    title: 'Nexora Engine | WordPress Static Cache Plugin | 22ms TTFB',
    description: 'Pre-render WordPress pages into flat HTML. 22ms TTFB, zero PHP execution on cache hit, drop-in installation. No headless migration required.',
    url: 'https://auralogicslabs.com/products/nexora-engine',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Nexora Engine | WordPress Static Cache Plugin',
    description: 'Pre-render WordPress pages into flat HTML. 22ms TTFB, drop-in installation, zero plugin conflict.',
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
        description: 'Static cache plugin for WordPress. Pre-renders every page into flat HTML delivered before PHP boots, achieving 22ms TTFB with zero plugin conflict.',
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
    <div className="min-h-screen bg-bg">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <Header />
      <main>
        <EngineHero />
        <TrustMetrics />
        <WhyNexora />
        <PlatformOverview />
        <MethodologyDetail />
        <PerformanceAudit />
        <ProblemComparison />
        <ArchitectureFlow />
        <SecurityGhost />
        <Pricing />
        <FeaturesGrid />
        <PerformanceVisualization />
        <HowItWorks />
        <Compatibility />
        <PersonaFocus />
        <FAQ />
        <FinalCTA />
      </main>
      <Footer />
    </div>
  );
}
