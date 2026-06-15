import type { Metadata } from 'next';
import { Header } from '@/components/layout/Header';
import { MediaHero } from '@/components/sections/MediaHero';
import { MediaFeatures } from '@/components/sections/MediaFeatures';
import { FinalCTA } from '@/components/sections/FinalCTA';
import { Footer } from '@/components/layout/Footer';

export const metadata: Metadata = {
  title: 'Nexora Media | WordPress Image Optimization Plugin | AVIF & WebP',
  description:
    'Automatic AVIF and WebP conversion for WordPress. Cut image payload by up to 70%, boost LCP scores, and serve responsive images without touching your media library or moving to a CDN.',
  alternates: { canonical: '/products/nexora-media' },
  keywords: ['WordPress image optimization plugin', 'AVIF WebP WordPress', 'WordPress image compression', 'WordPress LCP optimization', 'WordPress Core Web Vitals images', 'WordPress responsive images'],
  openGraph: {
    title: 'Nexora Media | WordPress Image Optimization | AVIF & WebP',
    description: 'Automatic AVIF and WebP conversion for WordPress. Cut image payload by 70%, boost LCP, and serve responsive images — no media library changes needed.',
    url: 'https://auralogicslabs.com/products/nexora-media',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Nexora Media | WordPress Image Optimization Plugin',
    description: 'Cut WordPress image payload by up to 70% with automatic AVIF and WebP conversion.',
  },
};

export default function NexoraMediaPage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'SoftwareApplication',
        '@id': 'https://auralogicslabs.com/products/nexora-media#software',
        name: 'Nexora Media',
        description: 'WordPress image optimization plugin. Background AVIF and WebP conversion, adaptive responsive sizing, and intelligent delivery that reduces image payload by up to 70%.',
        applicationCategory: 'BusinessApplication',
        operatingSystem: 'WordPress',
        url: 'https://auralogicslabs.com/products/nexora-media',
        offers: {
          '@type': 'Offer',
          price: '0',
          priceCurrency: 'USD',
          availability: 'https://schema.org/InStock',
          url: 'https://auralogicslabs.com/products/nexora-media',
        },
        publisher: { '@id': 'https://auralogicslabs.com/#organization' },
        featureList: [
          'Automatic AVIF and WebP conversion',
          'Up to 70% image payload reduction',
          'Adaptive responsive image sizing',
          'LCP score improvement',
          'Works standalone or with Nexora Engine',
          'No media library changes required',
          'Background processing — no manual steps',
        ],
      },
      {
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://auralogicslabs.com' },
          { '@type': 'ListItem', position: 2, name: 'Products', item: 'https://auralogicslabs.com/products' },
          { '@type': 'ListItem', position: 3, name: 'Nexora Media', item: 'https://auralogicslabs.com/products/nexora-media' },
        ],
      },
    ],
  };

  return (
    <div className="min-h-screen bg-bg">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <Header />
      <main>
        <MediaHero />
        <MediaFeatures />
        <FinalCTA />
      </main>
      <Footer />
    </div>
  );
}
