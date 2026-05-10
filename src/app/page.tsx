import { Header } from '@/components/layout/Header';
import { Hero } from '@/components/sections/Hero';
import { TrustMetrics } from '@/components/sections/TrustMetrics';
import { WhyNexora } from '@/components/sections/WhyNexora';
import { ProblemComparison } from '@/components/sections/ProblemComparison';
import { PlatformOverview } from '@/components/sections/PlatformOverview';
import { ArchitectureFlow } from '@/components/sections/ArchitectureFlow';
import { SecurityGhost } from '@/components/sections/SecurityGhost';
import { FeaturesGrid } from '@/components/sections/FeaturesGrid';
import { PerformanceVisualization } from '@/components/sections/PerformanceVisualization';
import { HowItWorks } from '@/components/sections/HowItWorks';
import { Compatibility } from '@/components/sections/Compatibility';
import { UseCases } from '@/components/sections/UseCases';
import { DeveloperExperience } from '@/components/sections/DeveloperExperience';
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
        <TrustMetrics />
        <WhyNexora />
        <ProblemComparison />
        <PlatformOverview />
        <ArchitectureFlow />
        <SecurityGhost />
        <FeaturesGrid />
        <PerformanceVisualization />
        <HowItWorks />
        <Compatibility />
        <UseCases />
        <DeveloperExperience />
        <PlatformVision />
        <FAQ />
        <FinalCTA />
      </main>
      <Footer />
    </div>
  );
}
