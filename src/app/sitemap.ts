import { MetadataRoute } from 'next';
import { getAllPosts } from '@/data/blog';

export default function sitemap(): MetadataRoute.Sitemap {
  const base = 'https://auralogicslabs.com';
  const now = new Date();
  const posts = getAllPosts();

  return [
    { url: base, lastModified: now, changeFrequency: 'weekly', priority: 1.0 },
    { url: `${base}/blog`, lastModified: now, changeFrequency: 'weekly', priority: 0.85 },
    ...posts.map((post) => ({
      url: `${base}/blog/${post.slug}`,
      lastModified: new Date(post.updatedAt),
      changeFrequency: 'monthly' as const,
      priority: 0.75,
    })),
    { url: `${base}/products/nexora-engine`, lastModified: now, changeFrequency: 'weekly', priority: 0.9 },
    { url: `${base}/products/nexora-media`, lastModified: now, changeFrequency: 'weekly', priority: 0.8 },
    { url: `${base}/products/nexora-insights`, lastModified: now, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${base}/portal`, lastModified: now, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${base}/nexora-engine/demo`, lastModified: now, changeFrequency: 'monthly', priority: 0.6 },
    { url: `${base}/nexora-engine/docs`, lastModified: now, changeFrequency: 'weekly', priority: 0.6 },
  ];
}
