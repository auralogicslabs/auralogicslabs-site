import { Header } from '@/components/layout/Header';
import { Hero } from '@/components/sections/Hero';
import { ProblemComparison } from '@/components/sections/ProblemComparison';
import { PlatformShowcase } from '@/components/sections/PlatformShowcase';
import { PlatformFeatures } from '@/components/sections/PlatformFeatures';
import { FeatureTeaser } from '@/components/sections/FeatureTeaser';
import { TrustSection } from '@/components/sections/TrustSection';
import { BlogPreview } from '@/components/sections/BlogPreview';
import { FinalCTA } from '@/components/sections/FinalCTA';
import { Footer } from '@/components/layout/Footer';
import { getFeaturedPost, getRecentPosts } from '@/data/blog';

export default function Home() {
  const featured = getFeaturedPost();
  const posts = getRecentPosts(4);

  return (
    <div className="min-h-screen bg-[#050B25]">
      <Header />
      <main className="overflow-x-clip">
        {/* 1. The promise */}
        <Hero />
        {/* 2. The problem we exist to solve */}
        <ProblemComparison />
        {/* 3. The platform. four products, one ecosystem */}
        <PlatformShowcase />
        {/* 4. Under the hood. the capabilities that power it */}
        <PlatformFeatures />
        {/* 5. How it works. install, activate, it runs */}
        <FeatureTeaser />
        {/* 5. Who it's for + compatibility */}
        <TrustSection />
        {/* 6. Proof & perspective */}
        <BlogPreview featured={featured} posts={posts} />
        {/* 7. Act */}
        <FinalCTA />
      </main>
      <Footer />
    </div>
  );
}
