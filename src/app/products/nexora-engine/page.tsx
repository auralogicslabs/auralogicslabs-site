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

export const metadata: Metadata = {
  title: 'Nexora Engine — Static Infrastructure for WordPress',
  description:
    'Pre-renders every WordPress page into flat HTML served before PHP boots. 22ms TTFB, 100% static delivery, zero PHP execution on cache hit. Drop-in installation — no headless migration required.',
};

export default function NexoraEnginePage() {
  return (
    <div className="min-h-screen bg-bg">
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
