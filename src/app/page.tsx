import { Header } from '@/components/layout/Header';
import { Hero } from '@/components/sections/Hero';
import { PerformanceAudit } from '@/components/sections/PerformanceAudit';
import { WhyNexora } from '@/components/sections/WhyNexora';
import { TrustMetrics } from '@/components/sections/TrustMetrics';
import { ProblemComparison } from '@/components/sections/ProblemComparison';
import { PlatformOverview } from '@/components/sections/PlatformOverview';
import { ArchitectureFlow } from '@/components/sections/ArchitectureFlow';
import { MethodologyDetail } from '@/components/sections/MethodologyDetail';
import { SecurityGhost } from '@/components/sections/SecurityGhost';
import { Pricing } from '@/components/sections/Pricing';
import { FeaturesGrid } from '@/components/sections/FeaturesGrid';
import { PerformanceVisualization } from '@/components/sections/PerformanceVisualization';
import { HowItWorks } from '@/components/sections/HowItWorks';
import { Compatibility } from '@/components/sections/Compatibility';
import { PersonaFocus } from '@/components/sections/PersonaFocus';
import { PlatformVision } from '@/components/sections/PlatformVision';
import { FAQ } from '@/components/sections/FAQ';
import { FinalCTA } from '@/components/sections/FinalCTA';
import { Footer } from '@/components/layout/Footer';

export default function Home() {
  return (
    <div className="min-h-screen bg-bg">
      <Header />
      <main>
        <Hero />
        <WhyNexora />
        <TrustMetrics />
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
        <PlatformVision />
        <FAQ />
        <FinalCTA />
      </main>
      <Footer />
    </div>
  );
}
