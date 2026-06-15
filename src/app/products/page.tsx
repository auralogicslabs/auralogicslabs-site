import type { Metadata } from 'next';
import { Header } from '@/components/layout/Header';
import { ProductsHero } from '@/components/sections/products/ProductsHero';
import { ProductsIndex } from '@/components/sections/products/ProductsIndex';
import { FinalCTA } from '@/components/sections/FinalCTA';
import { Footer } from '@/components/layout/Footer';

export const metadata: Metadata = {
  title: 'Products. The Auralogics Labs WordPress Suite',
  description:
    'Explore the Auralogics Labs product suite for WordPress: Nexora Engine for static-speed delivery, Nexora Pulse for SEO operations, Nexora Media for image optimization, and the Auralogics Portal for fleet management.',
  alternates: { canonical: '/products' },
  openGraph: {
    title: 'Products. The Auralogics Labs WordPress Suite',
    description:
      'Drop-in tools that make WordPress faster, more visible, and easier to operate. Nexora Engine, Nexora Pulse, Nexora Media, and the Auralogics Portal.',
    type: 'website',
  },
};

export default function ProductsPage() {
  return (
    <div className="min-h-screen bg-bg">
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
