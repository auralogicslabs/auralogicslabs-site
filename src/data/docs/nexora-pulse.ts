import type { ProductDocs } from '@/types/docs';

export const nexoraPulseDocs: ProductDocs = {
  productSlug: 'nexora-pulse',
  tagline: 'Set up Nexora Pulse, the free WordPress SEO operations console.',
  defaultArticleSlug: 'getting-started',
  articles: [
    {
      slug: 'getting-started',
      title: 'Getting Started',
      description: 'Install Nexora Pulse and connect your site without conflicting with Yoast, Rank Math, or AIOSEO.',
      category: 'First steps',
      order: 1,
      blocks: [
        {
          type: 'p',
          text: 'Nexora Pulse is a free SEO operations console for WordPress. It runs alongside your existing SEO plugin in analysis mode so you get Index Doctor, internal link graph, and Core Web Vitals without duplicate meta tags.',
        },
        { type: 'h2', id: 'install', text: 'Installation' },
        {
          type: 'steps',
          items: [
            {
              title: 'Install the plugin',
              body: 'Download from the Auralogics download center or upload the ZIP under Plugins → Add New.',
              code: 'Plugins → Add New → Upload → Activate Nexora Pulse',
            },
            {
              title: 'Run compatibility check',
              body: 'Pulse detects Yoast, Rank Math, AIOSEO, and SEOPress automatically. When another SEO plugin is active, Pulse suppresses its own title/meta output.',
              code: 'Nexora Pulse → Compatibility Center → Review detected plugins',
            },
            {
              title: 'Open the console',
              body: 'The main dashboard surfaces index health, internal links, CWV, and duplicate content from one screen.',
              code: 'Nexora Pulse → Dashboard',
            },
          ],
        },
        {
          type: 'requirements',
          items: [
            { label: 'WordPress', value: '6.0+ (7.0 tested)' },
            { label: 'PHP', value: '8.0+' },
            { label: 'SEO plugin', value: 'Optional, Pulse is safe alongside any major SEO plugin' },
          ],
        },
      ],
    },
    {
      slug: 'index-doctor',
      title: 'Index Doctor',
      description: 'Read real Google Search Console indexing verdicts inside WordPress.',
      category: 'Features',
      order: 2,
      blocks: [
        {
          type: 'p',
          text: 'Index Doctor maps each URL to its live Google Search Console status, indexed, crawled-not-indexed, discovered-not-indexed, and more, so you stop guessing from sitemap pings alone.',
        },
        { type: 'h2', id: 'gsc', text: 'Connecting Search Console' },
        {
          type: 'ol',
          items: [
            'Create a Google Cloud project and enable the Search Console API',
            'Generate a service account or OAuth credentials per the in-app wizard',
            'Select the verified property that matches your WordPress site URL',
            'Run the first sync, large sites may take several minutes',
          ],
        },
        {
          type: 'callout',
          title: 'Your credentials stay on your server',
          text: 'Pulse uses your own Google credentials. Analytics and index data are never proxied through Auralogics servers.',
        },
      ],
    },
    {
      slug: 'compatibility',
      title: 'SEO plugin compatibility',
      description: 'How Pulse coexists with Yoast, Rank Math, AIOSEO, and SEOPress.',
      category: 'Features',
      order: 3,
      blocks: [
        {
          type: 'p',
          text: 'When Pulse detects an active SEO plugin it enters analysis-only mode: diagnostics and graphs stay on, but Pulse does not output duplicate titles, canonicals, Open Graph tags, or schema.',
        },
        { type: 'h2', id: 'analysis-mode', text: 'Analysis mode' },
        {
          type: 'ul',
          items: [
            'Index Doctor and Neural Links remain fully available',
            'Duplicate detection compares rendered output, not plugin settings',
            'You can migrate meta ownership to Pulse later from the Compatibility Center',
          ],
        },
      ],
    },
  ],
};
