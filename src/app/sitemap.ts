import { MetadataRoute } from 'next';

import { getAllPosts } from '@/data/blog';

import { getAllDocStaticParams } from '@/data/docs';

import { getAllProducts } from '@/data/products';



export default function sitemap(): MetadataRoute.Sitemap {

  const base = 'https://auralogicslabs.com';

  const now = new Date();

  const posts = getAllPosts();



  const blogRoutes: MetadataRoute.Sitemap = posts.map((post) => ({

    url: `${base}/insights/${post.slug}`,

    lastModified: new Date(post.updatedAt),

    changeFrequency: 'monthly' as const,

    priority: 0.75,

  }));



  const docRoutes: MetadataRoute.Sitemap = getAllDocStaticParams().map(({ product, slug }) => ({

    url: `${base}/docs/${product}/${slug}`,

    lastModified: now,

    changeFrequency: 'weekly' as const,

    priority: 0.7,

  }));



  const changelogRoutes: MetadataRoute.Sitemap = getAllProducts().map((p) => ({

    url: `${base}/changelog/${p.slug}`,

    lastModified: now,

    changeFrequency: 'weekly' as const,

    priority: 0.55,

  }));

  // Registry-driven demo pages (skip Engine's, listed explicitly below).
  const demoRoutes: MetadataRoute.Sitemap = getAllProducts()
    .filter((p) => p.links?.demo && p.links.demo.startsWith('/products/'))
    .map((p) => ({
      url: `${base}${p.links!.demo}`,
      lastModified: now,
      changeFrequency: 'monthly' as const,
      priority: 0.6,
    }));

  return [

    // Core marketing pages

    { url: base, lastModified: now, changeFrequency: 'weekly', priority: 1.0 },

    { url: `${base}/about`, lastModified: now, changeFrequency: 'monthly', priority: 0.7 },

    { url: `${base}/careers`, lastModified: now, changeFrequency: 'monthly', priority: 0.6 },

    { url: `${base}/contact`, lastModified: now, changeFrequency: 'monthly', priority: 0.6 },

    { url: `${base}/support`, lastModified: now, changeFrequency: 'monthly', priority: 0.6 },

    { url: `${base}/downloads`, lastModified: now, changeFrequency: 'weekly', priority: 0.75 },



    // Product pages

    { url: `${base}/products`, lastModified: now, changeFrequency: 'weekly', priority: 0.9 },

    { url: `${base}/products/nexora-engine`, lastModified: now, changeFrequency: 'weekly', priority: 0.95 },

    { url: `${base}/products/nexora-pulse`, lastModified: now, changeFrequency: 'weekly', priority: 0.9 },

    { url: `${base}/products/nexora-media`, lastModified: now, changeFrequency: 'weekly', priority: 0.85 },



    // Documentation & changelog

    { url: `${base}/docs`, lastModified: now, changeFrequency: 'weekly', priority: 0.8 },

    ...docRoutes,

    { url: `${base}/changelog`, lastModified: now, changeFrequency: 'weekly', priority: 0.65 },

    ...changelogRoutes,



    // Nexora Engine – resources (legacy paths redirect to /docs)

    { url: `${base}/nexora-engine/tutorials`, lastModified: now, changeFrequency: 'weekly', priority: 0.65 },

    { url: `${base}/nexora-engine/demo`, lastModified: now, changeFrequency: 'monthly', priority: 0.6 },

    { url: `${base}/nexora-engine/support`, lastModified: now, changeFrequency: 'monthly', priority: 0.55 },

    { url: `${base}/nexora-engine/feature-request`, lastModified: now, changeFrequency: 'monthly', priority: 0.5 },



    { url: `${base}/demo`, lastModified: now, changeFrequency: 'monthly', priority: 0.6 },

    ...demoRoutes,



    // Portal – public-facing entry points only (dashboard routes are auth-gated)

    { url: `${base}/portal`, lastModified: now, changeFrequency: 'monthly', priority: 0.6 },

    { url: `${base}/portal/signup`, lastModified: now, changeFrequency: 'monthly', priority: 0.55 },



    // Blog

    { url: `${base}/insights`, lastModified: now, changeFrequency: 'weekly', priority: 0.85 },

    ...blogRoutes,



    // Legal

    { url: `${base}/privacy`, lastModified: now, changeFrequency: 'yearly', priority: 0.3 },

    { url: `${base}/terms`, lastModified: now, changeFrequency: 'yearly', priority: 0.3 },

    { url: `${base}/cookies`, lastModified: now, changeFrequency: 'yearly', priority: 0.3 },

  ];

}

