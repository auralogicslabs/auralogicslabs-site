import type { Metadata } from 'next';
import { MarketingLayout } from '@/components/layout/MarketingLayout';
import { ProductsHero } from '@/components/sections/products/ProductsHero';
import { SuitePillars } from '@/components/sections/products/SuitePillars';
import { ProductsIndex } from '@/components/sections/products/ProductsIndex';
import { LeadGenSection } from '@/components/sections/products/LeadGenSection';
import { FinalCTA } from '@/components/sections/FinalCTA';
import { getAllProducts } from '@/data/products';

const SITE = 'https://auralogicslabs.com';

export const metadata: Metadata = {
  title: 'WordPress Plugins | The Nexora Suite by Auralogics Labs',
  description:
    'Five drop-in WordPress plugins built to work together: Nexora Engine (fast, invisible delivery), Pulse (SEO operations), Media (safe WebP optimization), Architect (visual builder) and Shield (security), plus the Auralogics Portal to manage them.',
  alternates: { canonical: '/products' },
  keywords: ['WordPress plugins', 'WordPress performance', 'WordPress SEO tools', 'WordPress plugin suite', 'WordPress security', 'WordPress visual builder'],
  openGraph: {
    title: 'WordPress Plugins | The Nexora Suite by Auralogics Labs',
    description:
      'A suite of drop-in WordPress plugins built to reinforce each other, performance, SEO, media, building and security, managed from one Portal.',
    url: `${SITE}/products`,
    type: 'website',
  },
};

export default function ProductsPage() {
  const products = getAllProducts();

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    name: 'The Nexora Suite, WordPress Plugins',
    description: 'A suite of drop-in WordPress plugins built to work together.',
    url: `${SITE}/products`,
    itemListElement: [
      ...products.map((p, i) => ({
        '@type': 'ListItem',
        position: i + 1,
        name: p.name,
        description: p.tagline,
        url: `${SITE}/products/${p.slug}`,
      })),
      {
        '@type': 'ListItem',
        position: products.length + 1,
        name: 'Auralogics Portal',
        description: 'Fleet management portal, licenses, deployments and runtime config across every site running the Nexora suite.',
        url: `${SITE}/portal`,
      },
    ],
  };

  return (
    <MarketingLayout>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <ProductsHero />
      <SuitePillars />
      <ProductsIndex />
      <LeadGenSection />
      <FinalCTA />
    </MarketingLayout>
  );
}
