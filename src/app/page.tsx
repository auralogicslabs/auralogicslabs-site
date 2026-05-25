import { Header } from '@/components/layout/Header';
import { Hero } from '@/components/sections/Hero';
import { ProductShowcase } from '@/components/sections/ProductShowcase';
import { PlatformFeatures } from '@/components/sections/PlatformFeatures';
import { ProblemComparison } from '@/components/sections/ProblemComparison';
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
    <div className="min-h-screen bg-white">
      <Header />
      <main className="overflow-x-hidden">
        <Hero />
        <ProductShowcase />
        <PlatformFeatures />
        <ProblemComparison />
        <FeatureTeaser />
        <TrustSection />
        <BlogPreview featured={featured} posts={posts} />
        <FinalCTA />
      </main>
      <Footer />
    </div>
  );
}
