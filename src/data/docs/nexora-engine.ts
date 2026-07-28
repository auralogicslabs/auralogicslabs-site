import type { ProductDocs } from '@/types/docs';

export const nexoraEngineDocs: ProductDocs = {
  productSlug: 'nexora-engine',
  tagline: 'Install, configure, and operate Nexora Engine on any WordPress host.',
  defaultArticleSlug: 'getting-started',
  articles: [
    {
      slug: 'getting-started',
      title: 'Getting Started',
      description:
        'Install Nexora Engine, run the setup wizard, and serve static HTML from your WordPress site in under five minutes.',
      category: 'First steps',
      order: 1,
      blocks: [
        {
          type: 'p',
          text: 'Thank you for choosing Nexora Engine. This guide walks you from a fresh WordPress install to your first static cache hit, no headless migration, no second server, and no theme changes required.',
        },
        { type: 'h2', id: 'requirements', text: 'Server requirements' },
        {
          type: 'p',
          text: 'Nexora Engine runs on any host that runs WordPress. Before you install, confirm your environment meets these minimums:',
        },
        {
          type: 'requirements',
          items: [
            { label: 'WordPress', value: '5.9 or higher (7.0 tested)' },
            { label: 'PHP', value: '8.0+ (8.1 recommended)' },
            { label: 'Web server', value: 'Apache, Nginx, LiteSpeed, or IIS' },
            { label: 'Writable uploads', value: 'wp-content/uploads/ must be writable' },
            { label: 'WP_CACHE', value: 'Enabled automatically by the setup wizard' },
            { label: 'Loopback', value: 'Internal HTTP requests must be allowed' },
          ],
        },
        {
          type: 'callout',
          title: 'PHP limits',
          text: 'If demo import, diagnostics, or bulk capture fail, raise max_execution_time (300s), memory_limit (256M), and upload_max_filesize (32M) through your host.',
          variant: 'info',
        },
        { type: 'h2', id: 'install', text: 'Installing the plugin' },
        {
          type: 'image',
          src: '/screenshots/docs/nexora-engine/screenshot-5.png',
          alt: 'Nexora Engine Setup Wizard verifying compatibility and enabling static delivery',
          caption: 'The Setup Wizard verifies compatibility, enables static delivery, builds the first mirror, and confirms serving, all in one guided flow.',
        },
        {
          type: 'steps',
          items: [
            {
              title: 'Download or install from WordPress',
              body: 'Download the latest ZIP from the Auralogics download center, or search “Nexora Engine” under Plugins → Add New if you distribute via WordPress.org.',
              code: 'Plugins → Add New → Upload Plugin → nexora-engine.zip → Activate',
            },
            {
              title: 'Run the setup wizard',
              body: 'On first activation the Setup Wizard launches automatically. It detects your server type, verifies loopback, and installs the advanced-cache.php drop-in.',
              code: 'Nexora Engine → Setup Wizard → Complete all steps',
            },
            {
              title: 'Enable static generation',
              body: 'Toggle SSG in Build Control. Nexora captures authenticated renders via HMAC-signed loopback requests, no headless browser required.',
              code: 'Nexora Engine → Build Control → Enable SSG → Generate All Pages',
            },
            {
              title: 'Verify delivery',
              body: 'Run the built-in diagnostic and confirm anonymous requests hit the fast path. The dashboard shows cache hit ratio and TTFB from real traffic.',
              code: 'Nexora Engine → Tools → Run Diagnostic',
            },
          ],
        },
        { type: 'h2', id: 'post-install', text: 'Post-install checklist' },
        {
          type: 'ul',
          items: [
            'advanced-cache.php exists in wp-content/',
            'WP_CACHE is true in wp-config.php',
            'Diagnostic reports FAST PATH for anonymous probe',
            'At least one page appears in Build Control',
            'X-Nexora-Cache: HIT visible in browser DevTools after first anonymous visit',
          ],
        },
        {
          type: 'image',
          src: '/screenshots/docs/nexora-engine/screenshot-1.png',
          alt: 'Nexora Engine dashboard showing cache hit ratio, TTFB, Core Web Vitals, and Stealth Score',
          caption: 'Once serving is live, the dashboard shows cache hit ratio, real time-to-first-byte, Core Web Vitals, static file count, mirror freshness, and your live Stealth Score at a glance.',
        },
        {
          type: 'callout',
          title: 'Need help?',
          text: 'Open a support ticket or watch the video tutorial library if any step fails. Most issues trace back to PHP limits or blocked loopback requests.',
        },
      ],
    },
    {
      slug: 'static-delivery',
      title: 'Static delivery & SSG',
      description: 'How Nexora captures pages, serves flat HTML before PHP boots, and invalidates on publish.',
      category: 'Architecture',
      order: 2,
      blocks: [
        {
          type: 'p',
          text: 'Nexora Engine is not a one-time static export. It maintains a live WordPress backend while pre-rendering HTML snapshots that the drop-in serves before WordPress, PHP, or the database load.',
        },
        { type: 'h2', id: 'ssg', text: 'Static site generation (SSG)' },
        {
          type: 'p',
          text: 'When you publish or bulk-regenerate, Nexora issues an internal loopback request signed with HMAC-SHA256. The response DOM is written atomically to disk so visitors always receive a complete file or the previous snapshot.',
        },
        {
          type: 'image',
          src: '/screenshots/docs/nexora-engine/screenshot-2.png',
          alt: 'Nexora Engine Static Delivery screen with per-page capture status and Mirror Build Control',
          caption: 'The Static Delivery screen: per-page capture status, delivery mode, and the Mirror Build Control panel with live build progress.',
        },
        {
          type: 'callout',
          title: 'Free vs Pro rebuilds',
          text: 'On the free version, any change to a page, post, or public category/tag is tracked and added to a Pending list, you rebuild the mirror with one click from Static Delivery. Pro adds automatic rebuild on publish and update, so every change mirrors in the background with no manual step.',
          variant: 'info',
        },
        { type: 'h2', id: 'drop-in', text: 'advanced-cache.php drop-in' },
        {
          type: 'p',
          text: 'The drop-in intercepts anonymous GET requests, checks for a valid snapshot, and streams it with ~22ms TTFB. Authenticated editors, cart sessions, and dynamic endpoints bypass the cache automatically.',
        },
        { type: 'h2', id: 'invalidation', text: 'Cache invalidation' },
        {
          type: 'ul',
          items: [
            'save_post triggers debounced regeneration (30s coalescing for bulk edits)',
            'Manual purge available per URL or site-wide from Build Control',
            'WP-CLI commands for scripted invalidation in CI/CD',
          ],
        },
      ],
    },
    {
      slug: 'ghost-protocol',
      title: 'Ghost Protocol',
      description: 'Cloak WordPress fingerprints from HTML, headers, and JavaScript without breaking builders.',
      category: 'Security',
      order: 3,
      blocks: [
        {
          type: 'p',
          text: 'Ghost Protocol reduces automated WordPress fingerprinting by stripping generator tags, masking the window.wp namespace, and normalizing asset paths, while preserving editor and builder functionality for logged-in users.',
        },
        { type: 'h2', id: 'ghost', text: 'What gets cloaked' },
        {
          type: 'ul',
          items: [
            'X-Powered-By and generator meta tags',
            'REST API discovery links in public HTML',
            'window.wp namespace remapped for anonymous visitors',
            'Predictable wp-content path patterns where safe',
          ],
        },
        {
          type: 'image',
          src: '/screenshots/docs/nexora-engine/screenshot-3.png',
          alt: 'Nexora Engine Security screen showing the Stealth Score breakdown and hardening guards',
          caption: 'The Security screen breaks down your Stealth Score, showing exactly which WordPress fingerprints are hidden, alongside the free hardening guards.',
        },
        { type: 'h2', id: 'hardening', text: 'Free hardening guards' },
        {
          type: 'p',
          text: 'Beyond fingerprint stripping, the free tier ships active hardening you can toggle from the Security screen. These reduce the automated-attack surface without touching your theme or content.',
        },
        {
          type: 'ul',
          items: [
            'Login rate limiting to blunt brute-force attempts',
            'XML-RPC controls to close a common abuse vector',
            'User enumeration blocks so author IDs stop leaking usernames',
            'Generator and version stripping across HTML and headers',
          ],
        },
        {
          type: 'callout',
          title: 'Pro feature',
          text: 'Full Stealth Proxy mode is available on Nexora Engine Pro. Free tier includes core fingerprint stripping and the hardening guards above.',
          variant: 'info',
        },
      ],
    },
    {
      slug: 'troubleshooting',
      title: 'Troubleshooting',
      description: 'Common installation issues, diagnostic output, and how to roll back safely.',
      category: 'Support',
      order: 4,
      blocks: [
        { type: 'h2', id: 'diagnostic', text: 'Running diagnostics' },
        {
          type: 'p',
          text: 'Nexora Engine → Tools → Run Diagnostic produces structured JSON describing drop-in status, loopback health, snapshot counts, and server compatibility.',
        },
        {
          type: 'image',
          src: '/screenshots/docs/nexora-engine/screenshot-4.png',
          alt: 'Nexora Engine Tools screen with system status, rewrite flush, export/import, and factory reset',
          caption: 'The Tools screen: system status, rewrite-rule flush, configuration export/import, and a guided factory reset when you need to start clean.',
        },
        { type: 'h2', id: 'conflicts', text: 'Plugin conflicts' },
        {
          type: 'ul',
          items: [
            'Disable overlapping full-page cache plugins (WP Rocket, W3 Total Cache page cache) or configure Nexora as the primary HTML layer',
            'Ensure only one advanced-cache.php drop-in is active',
            'Exclude WooCommerce cart/checkout from SSG, Nexora does this automatically when session cookies are present',
          ],
        },
        { type: 'h2', id: 'rollback', text: 'Rollback safety' },
        {
          type: 'p',
          text: 'Disabling Nexora from the admin removes the drop-in, restores WP_CACHE, and returns delivery to standard WordPress. No posts, themes, or database content are modified.',
        },
      ],
    },
  ],
};
