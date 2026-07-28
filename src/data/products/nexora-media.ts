import {
  ImageIcon,
  ShieldCheck,
  ListChecks,
  Layers,
  Wand2,
  Activity,
  HeartPulse,
  Terminal,
} from 'lucide-react';
import type { Product } from '@/types/product';

const compatibility = {
  requiresWordPress: '6.0',
  testedUpTo: '6.6',
  requiresPHP: '7.4',
};

export const nexoraMedia: Product = {
  slug: 'nexora-media',
  name: 'Nexora Media',
  tagline: 'Safe AVIF and WebP image optimization for WordPress.',
  description:
    'Nexora Media generates AVIF and WebP variants of every image you upload, swaps them in automatically for public visitors, and keeps your editors and page builders untouched. Conservative by default: logged-in editors and every builder preview always see the original, heavy work runs in a safe background queue, and a queue-health system tells you exactly what’s happening. Fully free and GPL, AVIF included.',
  status: 'live',
  icon: ImageIcon,
  accent: '#059669',
  category: 'Media',
  keywords: [
    'WordPress image optimization plugin',
    'WordPress AVIF',
    'WordPress WebP',
    'safe image optimization',
    'WordPress lazy load',
    'WordPress media performance',
  ],
  pricingModel: 'free',
  playsWellWith: [
    'Elementor',
    'Divi',
    'Bricks',
    'Oxygen',
    'WPBakery',
    'Beaver Builder',
    'WooCommerce',
    'WP Rocket',
    'LiteSpeed Cache',
    'Cloudflare',
    'Nexora Engine',
  ],

  version: '2.0.0',
  releaseDate: '2026-06-07',
  compatibility,
  releases: [
    {
      version: '2.0.0',
      date: '2026-06-07',
      file: 'nexora-media/nexora-media-2.0.0.zip',
      compatibility,
    },
  ],

  keyBenefits: [
    {
      title: 'Safe by default',
      description:
        'Detects every major builder and bypasses delivery rewriting during editing. Skips lightboxes, galleries, logos, menus and hero images, and never deletes your originals.',
      icon: ShieldCheck,
    },
    {
      title: 'Background optimization queue',
      description:
        'Heavy variant generation runs in safe batches with worker locking so uploads stay snappy and WordPress stays responsive.',
      icon: Layers,
    },
    {
      title: 'Queue health that talks back',
      description:
        'Stale locks, permission errors and memory issues surface as clear alerts with one-click recovery, no silent failures.',
      icon: HeartPulse,
    },
  ],

  metrics: [
    { value: 'AVIF+WebP', label: 'Auto variants, Imagick or GD' },
    { value: '0', label: 'Originals ever deleted' },
    { value: '100%', label: 'Free & GPL' },
    { value: '0', label: 'External requests, fully self-contained' },
  ],

  problem: {
    title: 'Most image optimizers break something.',
    description:
      'A bad src rewrite turns a working lightbox into a blank popup; an aggressive cache serves stale images; a naive lazy-load tag kills above-the-fold paint. Nexora Media is conservative on purpose, it optimizes images safely without touching your builder, your originals, or your hero images.',
    points: [
      'Never rewrites images while editors are working',
      'Skips lightboxes, galleries, logos and hero images',
      'Only swaps when the modern variant is actually smaller',
      'Never deletes your originals',
    ],
  },

  howItWorks: [
    { title: 'Install', body: 'Activate the plugin; the setup wizard applies safe, recommended defaults.' },
    { title: 'Queue', body: 'New uploads and your existing library queue for background AVIF and WebP generation.' },
    { title: 'Deliver', body: 'Public visitors get the AVIF or WebP variant their browser supports; editors and originals stay untouched.' },
    { title: 'Monitor', body: 'The queue-health dashboard surfaces any issue with one-click recovery.' },
  ],

  comparison: {
    againstLabel: 'Typical image plugins',
    rows: [
      { capability: 'Builder-aware (no edit-time rewrites)', us: true, them: false },
      { capability: 'Keeps your originals', us: true, them: 'Sometimes' },
      { capability: 'Background queue with health checks', us: true, them: 'Limited' },
      { capability: 'Hero-image guard', us: true, them: false },
      { capability: 'Calls home / external requests', us: 'Never', them: 'Sometimes' },
      { capability: 'Price', us: 'Free & GPL', them: 'Freemium' },
    ],
  },

  features: [
    { title: 'AVIF & WebP generation', description: 'Imagick preferred, GD fallback, generates AVIF and WebP sidecars next to each original.', icon: ImageIcon, tier: 'free', group: 'Optimization' },
    { title: 'Background queue', description: 'Safe batching with worker locking, plus a one-click "Recover stuck queue" action.', icon: Layers, tier: 'free', group: 'Optimization' },
    { title: 'Adaptive frontend delivery', description: 'Swaps WordPress image URLs to AVIF or WebP for public visitors, matched to each browser; the original is always the fallback.', icon: Wand2, tier: 'free', group: 'Delivery' },
    { title: 'Responsive variants', description: '320, 640, 960, 1600 by default and fully configurable, with lazy loading and decoding=async.', icon: ListChecks, tier: 'free', group: 'Delivery' },
    { title: 'Hero-image guard', description: 'Images marked fetchpriority=high, data-no-lazy or data-no-webp are skipped automatically.', icon: ShieldCheck, tier: 'free', group: 'Delivery' },
    { title: 'EXIF stripping', description: 'Removes EXIF metadata for privacy and smaller files.', icon: ShieldCheck, tier: 'free', group: 'Optimization' },
    { title: 'Queue health dashboard', description: 'Structured error logs, stale-lock detection and per-image failure cooldown.', icon: Activity, tier: 'free', group: 'Reliability' },
    { title: 'WP-CLI compatible cron', description: 'Automated processing via WP-CLI-friendly cron and a modern REST API.', icon: Terminal, tier: 'free', group: 'Reliability' },
  ],

  faqs: [
    { id: 'q1', question: 'Does Nexora Media process images during upload?', answer: 'By default, no, uploads are queued and processed in small background batches to avoid PHP timeouts and memory pressure. You can enable upload-time processing in Settings if your server has generous resources.' },
    { id: 'q2', question: 'Will it break my Elementor / Divi / page builder site?', answer: 'No. Nexora Media detects every major builder’s preview frame and never rewrites image URLs during editing. Public visitors get the optimized variant; logged-in editors always see the original.' },
    { id: 'q3', question: 'What happens to my existing images?', answer: 'Nothing changes about the original. Nexora Media generates .avif and .webp sidecars next to each original (e.g. photo.jpg stays where it is and photo.avif and photo.webp are added). If you uninstall, your originals remain untouched.' },
    { id: 'q4', question: 'Does it work with CDNs?', answer: 'Yes, Cloudflare, BunnyCDN, KeyCDN and any pull-zone CDN serve the AVIF and WebP variants automatically once your site references them.' },
    { id: 'q5', question: 'How does it work with Nexora Engine?', answer: 'If Engine is installed with SSG enabled, Engine handles inline-CSS image rewriting during static generation. Media generates the variants and emits a clean nxm_variant_resolved signal that Engine consumes, the integration is automatic.' },
    { id: 'q6', question: 'Does it call home or send any data anywhere?', answer: 'No. Nexora Media is fully self-contained and makes no external HTTP requests.' },
  ],

  changelog: [
    {
      version: '2.0.0',
      date: '2026-06-07',
      summary: 'Major release, completely redesigned admin plus a queue health system.',
      improvements: [
        'Complete admin redesign, modern React-based interface replaces the legacy jQuery admin.',
        'Queue health system: persistent error log, stale-lock detection, cron health check, one-click recovery.',
        'Per-image failure cooldown, three consecutive failures trigger a 24-hour cooldown so one bad file can’t block the queue.',
        'Hero-image guard for fetchpriority=high / data-no-lazy / data-no-webp images.',
        'Engine takeover filter: Media stands down on inline-CSS rewriting when Nexora Engine handles it during SSG.',
        'Modernized REST API under /wp-json/nexora-media/v1/* and automatic asset cache busting.',
      ],
      compatibility: ['Tested up to WordPress 6.6', 'Requires PHP 7.4+'],
    },
  ],

  links: {
    docs: '/docs/nexora-media',
    demo: '/products/nexora-media/demo',
    support: '/contact',
    changelog: '/changelog/nexora-media',
  },
  relatedSlugs: ['nexora-engine', 'nexora-pulse'],
  hasCustomPage: true,
};
