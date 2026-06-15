import { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        // Allow all crawlers to access public marketing content
        userAgent: '*',
        allow: '/',
        disallow: [
          '/api/',               // API endpoints — not indexable content
          '/portal/dashboard/',  // Authenticated dashboard routes
        ],
      },
    ],
    sitemap: 'https://auralogicslabs.com/sitemap.xml',
    host: 'https://auralogicslabs.com',
  };
}
