import { Zap } from 'lucide-react';
import {
  CloudLightning,
  Globe2,
  RefreshCw,
  Database,
  ShieldCheck,
  Lock,
  BarChart3,
  AlertTriangle,
  GitBranch,
  Search,
  Sparkles,
  Link as LinkIcon,
  FileSearch,
  Map as MapIcon,
  EyeOff,
  Webhook,
  History,
  Gauge,
} from 'lucide-react';
import type { Product } from '@/types/product';

const compatibility = {
  requiresWordPress: '5.9',
  testedUpTo: '7.0',
  requiresPHP: '8.0',
};

export const nexoraEngine: Product = {
  slug: 'nexora-engine',
  name: 'Nexora Engine',
  tagline: '22ms WordPress. No rebuild, no headless.',
  description:
    'Nexora Engine transforms WordPress into a modern infrastructure platform without a separate Node.js server or CDN configuration. Pre-rendered HTML snapshots are served from a drop-in cache before WordPress boots, achieving 22ms TTFB on any shared host with zero PHP execution on cache hits.',
  status: 'live',
  icon: Zap,
  accent: '#1A3FD8',
  category: 'Performance',
  keywords: [
    'WordPress static cache plugin',
    'WordPress TTFB optimization',
    'WordPress speed plugin',
    'WordPress Core Web Vitals',
    'static HTML WordPress cache',
  ],
  pricingModel: 'freemium',
  playsWellWith: [
    'Elementor',
    'Gutenberg',
    'Divi',
    'WPBakery',
    'WooCommerce',
    'Apache',
    'Nginx',
    'LiteSpeed',
    'IIS',
  ],

  version: '1.0.0',
  releaseDate: '2026-06-26',
  compatibility,
  releases: [
    {
      version: '1.0.0',
      date: '2026-06-26',
      file: 'nexora-engine/nexora-engine-1.0.0.zip',
      compatibility,
    },
  ],

  keyBenefits: [
    {
      title: '22ms TTFB on any host',
      metric: '22ms',
      description:
        'Static HTML is served from advanced-cache.php before WordPress, PHP, or the database load. Verified on production Nginx, Apache, LiteSpeed and IIS.',
      icon: Gauge,
    },
    {
      title: 'Drop-in, not headless',
      description:
        'No migration, no second server, no rebuild pipeline. The live WordPress backend stays exactly as it is, only the delivery layer changes.',
      icon: CloudLightning,
    },
    {
      title: 'Ghost Protocol hardening',
      description:
        'Strips WordPress fingerprints from HTML, headers and JavaScript. Wappalyzer reports Nginx, not WordPress.',
      icon: ShieldCheck,
    },
  ],

  features: [
    { title: 'SSG (Static Site Generator)', description: 'Captures WordPress pages to pre-rendered HTML snapshots with full conditional response handling.', icon: Zap, tier: 'free', group: 'Delivery' },
    { title: 'advanced-cache.php Drop-In', description: 'Serves static files before WordPress, PHP, or DB load. 22ms TTFB verified on production Nginx.', icon: CloudLightning, tier: 'free', group: 'Delivery' },
    { title: 'Universal Server Support', description: 'Apache, Nginx, LiteSpeed, IIS. No .htaccess or server-side configuration required.', icon: Globe2, tier: 'free', group: 'Delivery' },
    { title: 'Smart Regeneration', description: 'save_post triggers 30-second debounced capture. Coalesces bulk edits and theme changes.', icon: RefreshCw, tier: 'free', group: 'Delivery' },
    { title: 'Atomic File Writes', description: 'Snapshots swapped with rollback safety. Checksum verified before publication.', icon: Database, tier: 'free', group: 'Delivery' },
    { title: 'Ghost Protocol (Core)', description: 'Strips WP generator tags, REST discovery, and window.wp namespace fingerprints.', icon: ShieldCheck, tier: 'free', group: 'Security' },
    { title: 'HMAC-Signed Loopback', description: 'Internal capture requests are cryptographically signed. Cannot be spoofed or accessed externally.', icon: Lock, tier: 'free', group: 'Security' },
    { title: 'Basic Scoring Engine', description: 'Per-page health scoring (0-100) across SEO, Performance, Security, and Indexing.', icon: BarChart3, tier: 'free', group: 'Intelligence' },
    { title: 'Issue Detection', description: 'Auto-detects critical, high, and medium severity infrastructure issues per post.', icon: AlertTriangle, tier: 'free', group: 'Intelligence' },
    { title: 'Hybrid Rendering Mode', description: 'Per-page mode detection: headless_ready, hybrid_required, or server_only.', icon: GitBranch, tier: 'pro', group: 'Advanced' },
    { title: 'GSC Integration', description: 'Real-time Search Console data mapping: impressions, clicks, and CTR per post.', icon: Search, tier: 'pro', group: 'Advanced' },
    { title: 'AI Suggestion Engine', description: 'Rule-based fix suggestions for every infrastructure issue. LLM hookable.', icon: Sparkles, tier: 'pro', group: 'Advanced' },
    { title: 'Redirect Manager', description: 'Advanced 301/302 manager with regex pattern support. Intercepts 404s at the edge.', icon: LinkIcon, tier: 'pro', group: 'Advanced' },
    { title: 'Broken Link Checker', description: 'Background cron-based HTTP HEAD scanning for all internal and external links.', icon: FileSearch, tier: 'pro', group: 'Advanced' },
    { title: 'XML Sitemap Generator', description: 'Auto-regenerates sitemap on publish events. Respects SEO plugin noindex settings.', icon: MapIcon, tier: 'pro', group: 'Advanced' },
    { title: 'White Label', description: 'Full agency branding. Custom logos, colors, and plugin list invisibility.', icon: EyeOff, tier: 'pro', group: 'Advanced' },
    { title: 'Webhook Notifications', description: 'POST to any endpoint (Slack, Zapier) when scores drop or issues are detected.', icon: Webhook, tier: 'pro', group: 'Advanced' },
    { title: 'Change Tracker', description: 'Diffs content on every publish. Flags score regressions caused by editorial edits.', icon: History, tier: 'pro', group: 'Advanced' },
  ],

  faqs: [
    { id: 'q1', question: 'Will Elementor still work?', answer: 'Yes. Nexora Engine was built and tested on Elementor and Elementor Pro from the first commit. Sliders, popups, forms, lottie animations, theme builder templates, and Global Kit configurations are preserved exactly. Logged-in editors always see the live PHP-rendered site, so the builder remains fully functional during edits.' },
    { id: 'q2', question: 'Do I need special hosting?', answer: 'No. Nexora Engine works on any host that runs WordPress: Apache, Nginx, LiteSpeed, IIS, shared hosting, VPS, managed WP. The drop-in cache operates at the PHP-FPM layer, so server configuration changes are not required.' },
    { id: 'q3', question: 'Is this a static export plugin?', answer: 'No. Static export plugins generate a one-time snapshot and lose all dynamic features. Nexora Engine maintains the live WordPress backend, regenerates snapshots automatically on edit, and falls back to dynamic rendering for forms, comments, search, and authenticated requests.' },
    { id: 'q4', question: 'What happens to WooCommerce?', answer: 'Static-eligible pages (catalog, single product views, marketing pages) capture normally. Dynamic flows (cart, checkout, account) automatically fall back to live PHP rendering. The drop-in skips requests carrying authenticated session cookies.' },
    { id: 'q5', question: 'Will my SEO be affected?', answer: 'Positively. Faster TTFB improves Core Web Vitals scores, which Google factors into rankings. Nexora also auto-strips false-positive noindex tags that some SEO plugins inject during the capture protocol.' },
    { id: 'q6', question: 'Can I disable it anytime?', answer: 'Yes. Toggle the platform off in the admin and Nexora cleanly removes its drop-in, reverts WP_CACHE, and restores standard WordPress delivery. No content is modified, only the delivery layer changes.' },
    { id: 'q7', question: 'Does it support multisite?', answer: 'Single-site only in the current release. Multisite support is under active development and will ship as part of the platform\'s multi-tenant intelligence layer.' },
    { id: 'q8', question: 'Is it developer-friendly?', answer: 'Built for engineers. Single-URL diagnostic with structured JSON output, filterable WordPress hooks for custom invalidation, WP-CLI commands for programmatic regeneration, and a fully auditable drop-in under 200 lines of PHP.' },
  ],

  changelog: [
    {
      version: '1.0.0',
      date: '2026-06-26',
      summary: 'First stable release of Nexora Engine.',
      improvements: [
        'Static HTML delivery via universal advanced-cache.php drop-in.',
        'SPA client-side navigation between static pages.',
        'Ghost Protocol (core): generator, REST discovery and window.wp fingerprint stripping.',
        'Delivery diagnostics: SSG status and serve-rule checker.',
        'Security hardening: user enumeration block, XML-RPC disable, login rate limiting.',
      ],
      compatibility: ['Tested up to WordPress 7.0', 'Requires PHP 8.0+'],
    },
  ],

  links: {
    docs: '/docs/nexora-engine',
    support: '/nexora-engine/support',
    demo: '/nexora-engine/demo',
    featureRequest: '/nexora-engine/feature-request',
    changelog: '/changelog/nexora-engine',
    wporg: 'https://wordpress.org/plugins/nexora-engine/',
    checkout: 'https://checkout.freemius.com/plugin/29612/plan/48706/',
  },
  relatedSlugs: ['nexora-pulse', 'nexora-media'],

  // A bespoke, hand-crafted page already renders Nexora Engine. The universal
  // template skips it so we don't regress that experience.
  hasCustomPage: true,
};
