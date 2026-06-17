import { MetadataRoute } from 'next';
import { getAllPosts } from '@/data/blog';

export default function sitemap(): MetadataRoute.Sitemap {
  const base = 'https://auralogicslabs.com';
  const now = new Date();
  const posts = getAllPosts();

  const blogRoutes: MetadataRoute.Sitemap = posts.map((post) => ({
    url: `${base}/blog/${post.slug}`,
    lastModified: new Date(post.updatedAt),
    changeFrequency: 'monthly' as const,
    priority: 0.75,
  }));

  return [
    // Core marketing pages
    { url: base, lastModified: now, changeFrequency: 'weekly', priority: 1.0 },
    { url: `${base}/about`, lastModified: now, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${base}/careers`, lastModified: now, changeFrequency: 'monthly', priority: 0.6 },
    { url: `${base}/contact`, lastModified: now, changeFrequency: 'monthly', priority: 0.6 },

    // Product pages
    { url: `${base}/products`, lastModified: now, changeFrequency: 'weekly', priority: 0.9 },
    { url: `${base}/products/nexora-engine`, lastModified: now, changeFrequency: 'weekly', priority: 0.95 },
    { url: `${base}/products/nexora-pulse`, lastModified: now, changeFrequency: 'weekly', priority: 0.9 },
    { url: `${base}/products/nexora-media`, lastModified: now, changeFrequency: 'weekly', priority: 0.85 },

    // Nexora Engine – documentation & support
    { url: `${base}/nexora-engine/docs`, lastModified: now, changeFrequency: 'weekly', priority: 0.7 },
    { url: `${base}/nexora-engine/docs/getting-started`, lastModified: now, changeFrequency: 'weekly', priority: 0.7 },
    { url: `${base}/nexora-engine/tutorials`, lastModified: now, changeFrequency: 'weekly', priority: 0.65 },
    { url: `${base}/nexora-engine/demo`, lastModified: now, changeFrequency: 'monthly', priority: 0.6 },
    { url: `${base}/nexora-engine/support`, lastModified: now, changeFrequency: 'monthly', priority: 0.55 },
    { url: `${base}/nexora-engine/feature-request`, lastModified: now, changeFrequency: 'monthly', priority: 0.5 },

    // General docs & demo
    { url: `${base}/docs`, lastModified: now, changeFrequency: 'weekly', priority: 0.65 },
    { url: `${base}/demo`, lastModified: now, changeFrequency: 'monthly', priority: 0.6 },

    // Portal – public-facing entry points only (dashboard routes are auth-gated)
    { url: `${base}/portal`, lastModified: now, changeFrequency: 'monthly', priority: 0.6 },
    { url: `${base}/portal/signup`, lastModified: now, changeFrequency: 'monthly', priority: 0.55 },

    // Blog
    { url: `${base}/blog`, lastModified: now, changeFrequency: 'weekly', priority: 0.85 },
    ...blogRoutes,

    // Legal
    { url: `${base}/privacy`, lastModified: now, changeFrequency: 'yearly', priority: 0.3 },
    { url: `${base}/terms`, lastModified: now, changeFrequency: 'yearly', priority: 0.3 },
    { url: `${base}/cookies`, lastModified: now, changeFrequency: 'yearly', priority: 0.3 },
  ];
}
