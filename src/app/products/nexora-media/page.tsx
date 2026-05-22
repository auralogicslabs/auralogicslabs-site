import type { Metadata } from 'next';
import { Header } from '@/components/layout/Header';
import { MediaHero } from '@/components/sections/MediaHero';
import { MediaFeatures } from '@/components/sections/MediaFeatures';
import { FinalCTA } from '@/components/sections/FinalCTA';
import { Footer } from '@/components/layout/Footer';

export const metadata: Metadata = {
  title: 'Nexora Media — AVIF/WebP Image Delivery for WordPress',
  description:
    'Background AVIF/WebP conversion, adaptive responsive sizing, and intelligent delivery. Reduces image payload by up to 70%. Works standalone or paired with Nexora Engine.',
};

export default function NexoraMediaPage() {
  return (
    <div className="min-h-screen bg-bg">
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
