import { MarketingLayout } from '@/components/layout/MarketingLayout';
import { Hero } from '@/components/sections/Hero';
import { SuiteShowcase } from '@/components/sections/home/SuiteShowcase';
import { HouseAdvantage } from '@/components/sections/home/HouseAdvantage';
import { PlatformStack } from '@/components/sections/home/PlatformStack';
import { WhyItMatters } from '@/components/sections/home/WhyItMatters';
import { WorksWith } from '@/components/sections/home/WorksWith';
import { SuiteComparison } from '@/components/sections/home/SuiteComparison';
import { CorporateShowcase } from '@/components/sections/CorporateShowcase';
import { BlogPreview } from '@/components/sections/BlogPreview';
import { FinalCTA } from '@/components/sections/FinalCTA';
import { getFeaturedPost, getRecentPosts } from '@/data/blog';

export default function Home() {
  const featured = getFeaturedPost();
  const posts = getRecentPosts(4);

  return (
    <MarketingLayout className="bg-white">
      {/* 1. The promise (one dark, dramatic opener) */}
      <Hero />
      {/* 2. The suite, shown with real product screenshots */}
      <SuiteShowcase />
      {/* 3. Why one platform, not a pile of plugins */}
      <HouseAdvantage />
      {/* 4. How it fits together */}
      <PlatformStack />
      {/* 5. Proof metrics */}
      <WhyItMatters />
      {/* 6. Works with your stack */}
      <WorksWith />
      {/* 7. Suite vs separate plugins */}
      <SuiteComparison />
      {/* 8. Built for real teams (corporate, real photos) */}
      <CorporateShowcase />
      {/* 9. Insights */}
      <BlogPreview featured={featured} posts={posts} />
      {/* 10. Final CTA */}
      <FinalCTA />
    </MarketingLayout>
  );
}
