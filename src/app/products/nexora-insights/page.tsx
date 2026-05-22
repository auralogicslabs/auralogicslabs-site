import type { Metadata } from 'next';
import { Header } from '@/components/layout/Header';
import { InsightsComingSoon } from '@/components/sections/InsightsComingSoon';
import { Footer } from '@/components/layout/Footer';

export const metadata: Metadata = {
  title: 'Nexora Insights — Analytics Intelligence for Static WordPress Sites',
  description:
    'Deep performance analytics built for Nexora Engine. Real cache-hit rates, Core Web Vitals trends, image savings dashboards, and static delivery intelligence. Coming Q3 2026.',
};

export default function NexoraInsightsPage() {
  return (
    <div className="min-h-screen bg-bg">
      <Header />
      <main>
        <InsightsComingSoon />
      </main>
      <Footer />
    </div>
  );
}
