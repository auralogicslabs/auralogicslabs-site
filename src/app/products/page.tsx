import type { Metadata } from 'next';
import { Header } from '@/components/layout/Header';
import { ProductsHero } from '@/components/sections/products/ProductsHero';
import { ProductsIndex } from '@/components/sections/products/ProductsIndex';
import { FinalCTA } from '@/components/sections/FinalCTA';
import { Footer } from '@/components/layout/Footer';

export const metadata: Metadata = {
  title: 'WordPress Performance Plugins | Auralogics Labs Suite',
  description:
    'Four drop-in WordPress plugins: Nexora Engine for 22ms static delivery, Nexora Pulse for free SEO diagnostics, Nexora Media for AVIF image optimization, and the Auralogics Portal for fleet management.',
  alternates: { canonical: '/products' },
  keywords: ['WordPress performance plugins', 'WordPress speed tools', 'WordPress SEO tools', 'WordPress plugin suite', 'static WordPress delivery'],
  openGraph: {
    title: 'WordPress Performance Plugins | Auralogics Labs Suite',
    description:
      'Drop-in WordPress plugins that make sites faster, more visible, and easier to operate. Nexora Engine, Nexora Pulse, Nexora Media, and the Auralogics Portal.',
    url: 'https://auralogicslabs.com/products',
    type: 'website',
  },
};

export default function ProductsPage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    name: 'Auralogics Labs WordPress Plugin Suite',
    description: 'Drop-in WordPress plugins for static delivery, SEO intelligence, and media optimization.',
    url: 'https://auralogicslabs.com/products',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: 'Nexora Engine',
        description: 'Static cache plugin for WordPress. 22ms TTFB, zero PHP execution on cache hit.',
        url: 'https://auralogicslabs.com/products/nexora-engine',
      },
      {
        '@type': 'ListItem',
        position: 2,
        name: 'Nexora Pulse',
        description: 'Free WordPress SEO plugin with Index Doctor, Core Web Vitals tracking, and Search Console integration.',
        url: 'https://auralogicslabs.com/products/nexora-pulse',
      },
      {
        '@type': 'ListItem',
        position: 3,
        name: 'Nexora Media',
        description: 'WordPress image optimization plugin. Automatic AVIF and WebP conversion, up to 70% payload reduction.',
        url: 'https://auralogicslabs.com/products/nexora-media',
      },
      {
        '@type': 'ListItem',
        position: 4,
        name: 'Auralogics Portal',
        description: 'Fleet management portal for WordPress sites. Centralized license management, deployments, and runtime configuration.',
        url: 'https://auralogicslabs.com/portal',
      },
    ],
  };

  return (
    <div className="min-h-screen bg-bg">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <Header />
      <main>
        <ProductsHero />
        <ProductsIndex />
        <FinalCTA />
      </main>
      <Footer />
    </div>
  );
}
