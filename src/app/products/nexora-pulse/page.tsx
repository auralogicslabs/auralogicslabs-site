import type { Metadata } from 'next';
import { Header } from '@/components/layout/Header';
import { PulseHero } from '@/components/sections/pulse/PulseHero';
import { PulseIndexDoctor } from '@/components/sections/pulse/PulseIndexDoctor';
import { PulseFeatures } from '@/components/sections/pulse/PulseFeatures';
import { PulseIntegrations } from '@/components/sections/pulse/PulseIntegrations';
import { PulseComparison } from '@/components/sections/pulse/PulseComparison';
import { PulseFAQ } from '@/components/sections/pulse/PulseFAQ';
import { PulseFinalCTA } from '@/components/sections/pulse/PulseFinalCTA';
import { Footer } from '@/components/layout/Footer';

export const metadata: Metadata = {
  title: 'Nexora Pulse. The SEO Operations Console for WordPress',
  description:
    'Diagnose why Google won\'t index your pages, fix on-page issues, map internal links, and track Core Web Vitals. all in one free WordPress plugin. Powered by your own Search Console and PageSpeed data.',
  alternates: { canonical: '/products/nexora-pulse' },
  openGraph: {
    title: 'Nexora Pulse. The SEO Operations Console for WordPress',
    description:
      'One dashboard to diagnose indexing problems, fix on-page SEO, map internal links, and track Core Web Vitals. Free, powered by your own Google data.',
    type: 'website',
  },
};

export default function NexoraPulsePage() {
  return (
    <div className="min-h-screen bg-bg">
      <Header />
      <main>
        <PulseHero />
        <PulseIndexDoctor />
        <PulseFeatures />
        <PulseIntegrations />
        <PulseComparison />
        <PulseFAQ />
        <PulseFinalCTA />
      </main>
      <Footer />
    </div>
  );
}
