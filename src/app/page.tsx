"use client";

import { Header } from './components/Header';
import { HeroSection } from './components/HeroSection';
import { WhyNexoraSection } from './components/WhyNexoraSection';
import { TrustMetricsSection } from './components/TrustMetricsSection';
import { ProblemComparisonSection } from './components/ProblemComparisonSection';
import { PlatformOverviewSection } from './components/PlatformOverviewSection';
import { FeaturesGridSection } from './components/FeaturesGridSection';
import { PerformanceSection } from './components/PerformanceSection';
import { HowItWorksSection } from './components/HowItWorksSection';
import { CompatibilitySection } from './components/CompatibilitySection';
import { UseCasesSection } from './components/UseCasesSection';
import { DeveloperExperienceSection } from './components/DeveloperExperienceSection';
import { RoadmapSection } from './components/RoadmapSection';
import { FAQSection } from './components/FAQSection';
import { FinalCTASection } from './components/FinalCTASection';
import { Footer } from './components/Footer';

export default function Home() {
  return (
    <div className="min-h-screen bg-[#F8FAFC]">
      <Header />
      <main>
        <HeroSection />
        <WhyNexoraSection />
        <TrustMetricsSection />
        <ProblemComparisonSection />
        <PlatformOverviewSection />
        <FeaturesGridSection />
        <PerformanceSection />
        <HowItWorksSection />
        <CompatibilitySection />
        <UseCasesSection />
        <DeveloperExperienceSection />
        <RoadmapSection />
        <FAQSection />
        <FinalCTASection />
      </main>
      <Footer />
    </div>
  );
}
