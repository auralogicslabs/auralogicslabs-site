import { Header } from '@/components/layout/Header';
import { Hero } from '@/components/sections/Hero';
import { BrandPromise } from '@/components/sections/BrandPromise';
import { ProblemComparison } from '@/components/sections/ProblemComparison';
import { ProductShowcase } from '@/components/sections/ProductShowcase';
import { FeatureTeaser } from '@/components/sections/FeatureTeaser';
import { UseCases } from '@/components/sections/UseCases';
import { SocialProof } from '@/components/sections/SocialProof';
import { FinalCTA } from '@/components/sections/FinalCTA';
import { Footer } from '@/components/layout/Footer';

export default function Home() {
  return (
    <div className="min-h-screen bg-bg">
      <Header />
      <main>
        <Hero />
        <BrandPromise />
        <ProblemComparison />
        <ProductShowcase />
        <FeatureTeaser />
        <UseCases />
        <SocialProof />
        <FinalCTA />
      </main>
      <Footer />
    </div>
  );
}
