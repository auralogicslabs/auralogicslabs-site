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
        { type: 'h2', id: 'overview', text: 'The SEO health overview' },
        {
          type: 'p',
          text: 'The dashboard opens on a single health overview: your Oxygen Score, issues grouped by severity, and the Google data sources you have connected, so you always know where your site stands and what to fix first.',
        },
        {
          type: 'image',
          src: '/screenshots/docs/nexora-pulse/screenshot-1.png',
          alt: 'Nexora Pulse dashboard showing the Oxygen Score, issues by severity, and connected Google data sources',
          caption: 'The Website SEO Health Overview: the Oxygen Score, issues by severity, and your connected Google data sources at a glance.',
        },
      ],
    },
    {
      slug: 'seo-analyzer',
      title: 'SEO Analyzer',
      description: 'Score every page and get clear, fixable issues with plain-language explanations.',
      category: 'Features',
      order: 2,
      blocks: [
        {
          type: 'p',
          text: 'The SEO Analyzer scores each page and turns the result into a prioritized, human-readable checklist. Every issue comes with an explanation of why it matters and what to change, no jargon, no guessing.',
        },
        { type: 'h2', id: 'how', text: 'What it checks' },
        {
          type: 'ul',
          items: [
            'On-page fundamentals: titles, meta descriptions, headings, and content depth',
            'Technical signals that affect crawling and indexing',
            'Clear, fixable issues ranked so you work on the highest-impact items first',
          ],
        },
        {
          type: 'image',
          src: '/screenshots/docs/nexora-pulse/screenshot-2.png',
          alt: 'Nexora Pulse SEO Analyzer scoring a page and listing fixable issues',
          caption: 'The SEO Analyzer scores every page and lists clear, fixable issues with explanations.',
        },
      ],
    },
    {
      slug: 'index-doctor',
      title: 'Index Doctor',
      description: 'Read real Google Search Console indexing verdicts inside WordPress.',
      category: 'Features',
      order: 3,
      blocks: [
        {
          type: 'p',
          text: 'Index Doctor maps each URL to its live Google Search Console status, indexed, crawled-not-indexed, discovered-not-indexed, and more, so you stop guessing from sitemap pings alone.',
        },
        {
          type: 'image',
          src: '/screenshots/docs/nexora-pulse/screenshot-3.png',
          alt: 'Nexora Pulse Index Doctor showing Google Search Console indexing verdicts per page',
          caption: 'Index Doctor: real Google Search Console verdicts (indexed, crawled-not-indexed, excluded) with systemic patterns detected across pages.',
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
      slug: 'neural-links',
      title: 'Neural Links',
      description: 'Map your internal link graph and surface orphan pages and broken links.',
      category: 'Features',
      order: 4,
      blocks: [
        {
          type: 'p',
          text: 'Neural Links visualizes how your pages connect. The graph makes internal linking legible: you can see which pages are well-supported, which are orphaned, and where links are broken, all issues that quietly suppress rankings.',
        },
        { type: 'h2', id: 'what', text: 'What the graph surfaces' },
        {
          type: 'ul',
          items: [
            'Orphan pages that no other page links to',
            'Broken internal links that leak crawl budget and hurt UX',
            'Link clusters that show how authority flows through your site',
          ],
        },
        {
          type: 'image',
          src: '/screenshots/docs/nexora-pulse/screenshot-4.png',
          alt: 'Nexora Pulse Neural Link graph mapping internal links, orphan pages, and broken links',
          caption: 'The Neural Link graph maps your internal links and surfaces orphan pages and broken links visually.',
        },
      ],
    },
    {
      slug: 'google-intelligence',
      title: 'Google intelligence & opportunities',
      description: 'Connected Google data alongside prioritized optimization opportunities.',
      category: 'Features',
      order: 5,
      blocks: [
        {
          type: 'p',
          text: 'Pulse pairs your connected Google data with a prioritized list of opportunities, the queries and pages where a small change is most likely to move real traffic, so effort goes where it pays off.',
        },
        {
          type: 'image',
          src: '/screenshots/docs/nexora-pulse/screenshot-5.png',
          alt: 'Nexora Pulse Google intelligence screen with connected data sources and prioritized opportunities',
          caption: 'Google Intelligence & SEO Opportunities: connected Google data sources alongside prioritized, actionable optimization opportunities.',
        },
      ],
    },
    {
      slug: 'compatibility',
      title: 'SEO plugin compatibility',
      description: 'How Pulse coexists with Yoast, Rank Math, AIOSEO, and SEOPress.',
      category: 'Setup',
      order: 6,
      blocks: [
        {
          type: 'p',
          text: 'When Pulse detects an active SEO plugin it enters analysis-only mode: diagnostics and graphs stay on, but Pulse does not output duplicate titles, canonicals, Open Graph tags, or schema.',
        },
        {
          type: 'image',
          src: '/screenshots/docs/nexora-pulse/screenshot-6.png',
          alt: 'Nexora Pulse Migration & Compatibility Center detecting other SEO plugins',
          caption: 'The Migration & Compatibility Center detects other SEO plugins and confirms Pulse runs safely, with no duplicate meta tags.',
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
    {
      slug: 'integrations',
      title: 'Google integrations',
      description: 'Connect Search Console and PageSpeed Insights with your own Google account.',
      category: 'Setup',
      order: 7,
      blocks: [
        {
          type: 'p',
          text: 'Pulse connects to Google Search Console and PageSpeed Insights using your own Google account. No SEO or performance data is ever routed through Auralogics, the connection is between your WordPress site and Google, directly.',
        },
        {
          type: 'image',
          src: '/screenshots/docs/nexora-pulse/screenshot-7.png',
          alt: 'Nexora Pulse Integrations screen for connecting Google Search Console and PageSpeed Insights',
          caption: 'Integrations: connect Google Search Console and PageSpeed Insights with your own Google account, no data routed through us.',
        },
        {
          type: 'callout',
          title: 'Built-in setup guides',
          text: 'Every integration ships with a step-by-step, in-plugin guide, open Help & Documentation inside Pulse if you get stuck connecting Google.',
          variant: 'info',
        },
        {
          type: 'image',
          src: '/screenshots/docs/nexora-pulse/screenshot-9.png',
          alt: 'Nexora Pulse Help & Documentation with step-by-step integration guides',
          caption: 'Help & Documentation: built-in, step-by-step setup guides for every integration.',
        },
      ],
    },
    {
      slug: 'settings',
      title: 'Settings',
      description: 'Global meta templates, robots.txt, and data controls.',
      category: 'Setup',
      order: 8,
      blocks: [
        {
          type: 'p',
          text: 'When you are ready for Pulse to own your meta output, Settings gives you global title and meta-description templates plus general, robots.txt, and data controls, all in one place.',
        },
        { type: 'h2', id: 'what', text: 'What you can configure' },
        {
          type: 'ul',
          items: [
            'Global title and meta description templates with dynamic variables',
            'robots.txt management from inside WordPress',
            'Data controls for what Pulse stores and syncs',
          ],
        },
        {
          type: 'image',
          src: '/screenshots/docs/nexora-pulse/screenshot-8.png',
          alt: 'Nexora Pulse Settings screen with title/meta templates and data controls',
          caption: 'Settings: global title and meta description templates, plus general, robots.txt, and data controls.',
        },
      ],
    },
  ],
};
