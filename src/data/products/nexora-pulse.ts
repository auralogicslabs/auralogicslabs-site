import {
  Stethoscope,
  Search,
  Activity,
  Network,
  CopyCheck,
  Image as ImageIcon,
  ArrowLeftRight,
  Map as MapIcon,
  FileCode2,
  ShieldCheck,
} from 'lucide-react';
import type { Product } from '@/types/product';

const compatibility = {
  requiresWordPress: '6.0',
  testedUpTo: '7.0',
  requiresPHP: '8.0',
};

export const nexoraPulse: Product = {
  slug: 'nexora-pulse',
  name: 'Nexora Pulse',
  tagline: 'The SEO Operations Platform for WordPress.',
  description:
    'Nexora Pulse is a modern SEO Operations Platform for WordPress, one dashboard to analyze, optimize and monitor your content’s search health, with real Google Search Console insights at its core. Run a full SEO audit of every page, map internal links, output clean schema, catch duplicate content, and diagnose why pages aren’t indexed. Every feature is free.',
  status: 'live',
  icon: Stethoscope,
  accent: '#13716A',
  category: 'SEO',
  keywords: [
    'free WordPress SEO plugin',
    'WordPress SEO operations platform',
    'WordPress Search Console plugin',
    'WordPress index doctor',
    'WordPress internal linking',
    'WordPress Core Web Vitals',
  ],
  pricingModel: 'free',
  playsWellWith: ['Yoast SEO', 'Rank Math', 'All in One SEO', 'SEOPress', 'Elementor', 'Gutenberg'],

  version: '1.0.0',
  releaseDate: '2026-06-26',
  compatibility,
  releases: [
    {
      version: '1.0.0',
      date: '2026-06-26',
      file: 'nexora-pulse/nexora-pulse-1.0.0.zip',
      compatibility,
    },
  ],

  keyBenefits: [
    {
      title: 'Real Google verdicts',
      description:
        'Connect your own Search Console property to see real indexing status, clicks, impressions, CTR and average position, and power the Index Doctor.',
      icon: Search,
    },
    {
      title: 'Operational, not just scores',
      description:
        'Pulse emphasizes visibility, guidance and workflows, analyze, optimize and monitor, instead of toggling settings and chasing a number.',
      icon: Activity,
    },
    {
      title: 'Safe alongside any SEO plugin',
      description:
        'Detects Yoast, Rank Math, AIOSEO and SEOPress and runs in analysis-only mode so you never get duplicate meta tags.',
      icon: ShieldCheck,
    },
  ],

  metrics: [
    { value: '10+', label: 'SEO tools in one console' },
    { value: '100%', label: 'Free & GPL, every feature' },
    { value: '0', label: 'Data routed through our servers' },
    { value: '1', label: 'Dashboard for your whole workflow' },
  ],

  problem: {
    title: 'WordPress SEO is scattered across six tabs.',
    description:
      'Most WordPress SEO setups juggle four or five disconnected tools, a settings plugin, Search Console, PageSpeed, a redirect manager, a linking tool, none of which talk to each other. Nexora Pulse brings the whole technical SEO workflow into one console, powered by your own real Google data.',
    points: [
      'See real Google index verdicts, not guesses',
      'Find orphan pages and weak internal links',
      'Track Core Web Vitals from real Chrome field data',
      'Run safely alongside Yoast, Rank Math or AIOSEO',
    ],
  },

  howItWorks: [
    { title: 'Install', body: 'Activate Pulse, it runs in safe analysis-only mode next to any existing SEO plugin.' },
    { title: 'Connect Google', body: 'Link your own Search Console property and PageSpeed key in a guided setup.' },
    { title: 'Scan', body: 'Pulse audits every page and pulls real indexing and performance data.' },
    { title: 'Fix', body: 'Work the prioritized issue list: indexing, internal links, CWV and duplicates.' },
  ],

  comparison: {
    againstLabel: 'Traditional SEO plugins',
    rows: [
      { capability: 'Real Google index verdicts', us: true, them: false },
      { capability: 'Internal link graph', us: true, them: 'Limited' },
      { capability: 'Core Web Vitals (field data)', us: true, them: false },
      { capability: 'Runs alongside your SEO plugin', us: 'Analysis-only, no duplicate tags', them: 'Conflicts' },
      { capability: 'Data routed through vendor', us: 'Never', them: 'Sometimes' },
      { capability: 'Price', us: 'Free & GPL', them: 'Freemium / paid' },
    ],
  },

  features: [
    { title: 'SEO Analyzer', description: 'Scans every post and page for on-page issues, titles, descriptions, headings, readability, keyword usage, and scores each page.', icon: Search, tier: 'free', group: 'Analysis' },
    { title: 'Index Doctor', description: 'Real Google Search Console indexing verdicts (indexed, crawled-not-indexed, excluded) that diagnose why pages aren’t indexed.', icon: Stethoscope, tier: 'free', group: 'Analysis' },
    { title: 'Neural Links', description: 'Maps your site’s internal link graph to surface orphan pages, weak clusters and missed linking opportunities.', icon: Network, tier: 'free', group: 'Analysis' },
    { title: 'Originality / Duplicate Detection', description: 'Detects duplicate and near-duplicate content across your site before it hurts rankings.', icon: CopyCheck, tier: 'free', group: 'Analysis' },
    { title: 'Image SEO', description: 'Audits image alt text, file sizes and naming so your media works for search instead of against it.', icon: ImageIcon, tier: 'free', group: 'Analysis' },
    { title: 'Core Web Vitals', description: 'Connect a free PageSpeed Insights key to pull real-user LCP, INP, CLS and TTFB from Chrome field data.', icon: Activity, tier: 'free', group: 'Performance' },
    { title: 'Redirect Manager', description: 'Create and manage 301/302 redirects with a clean interface.', icon: ArrowLeftRight, tier: 'free', group: 'Technical' },
    { title: 'XML Sitemap & robots.txt', description: 'Manage your XML sitemap and edit robots.txt directly inside WordPress.', icon: MapIcon, tier: 'free', group: 'Technical' },
    { title: 'Schema & Metadata', description: 'Output clean structured data and metadata from a single, deduplicated source of truth.', icon: FileCode2, tier: 'free', group: 'Technical' },
    { title: 'Migration & Compatibility Center', description: 'Detects other SEO plugins, runs analysis-only to avoid duplicate tags, and shows how much existing SEO data is ready to migrate.', icon: ShieldCheck, tier: 'free', group: 'Technical' },
  ],

  faqs: [
    { id: 'q1', question: 'Is Nexora Pulse free?', answer: 'Yes, every feature in this release is free, including Google Search Console and Core Web Vitals. They use your own Google account / API key, so there is no cost to you and nothing is routed through our servers.' },
    { id: 'q2', question: 'Do I need a Google account for Search Console / PageSpeed?', answer: 'Yes. You connect your own Search Console property and your own free PageSpeed Insights API key. Pulse guides you through the one-time setup in the app, and your credentials stay in your own site, encrypted.' },
    { id: 'q3', question: 'Does it conflict with other SEO plugins?', answer: 'No. When Pulse detects Yoast, Rank Math, All in One SEO, SEOPress or others, it automatically runs in analysis mode and stops outputting its own title, meta description, canonical, Open Graph, Twitter and schema tags, so you never get duplicate meta tags.' },
    { id: 'q4', question: 'I already use Yoast / Rank Math / AIOSEO. Can I still try Pulse?', answer: 'Yes, that’s exactly what the Compatibility Center is for. Install Pulse alongside your current SEO plugin and immediately get its diagnostics (Index Doctor, internal link graph, Core Web Vitals, duplicate detection) without touching your existing setup.' },
    { id: 'q5', question: 'Does it work with Elementor / Gutenberg?', answer: 'Yes. Pulse analyzes the rendered content of any builder or block editor.' },
  ],

  changelog: [
    {
      version: '1.0.0',
      date: '2026-06-26',
      summary: 'First public release of Nexora Pulse.',
      improvements: [
        'SEO Analyzer, Index Doctor, Neural Links (internal link graph), Originality / duplicate detection, Image SEO, Redirect Manager, XML sitemap, robots.txt editor, and schema output.',
        'Google Search Console and Core Web Vitals (PageSpeed) integrations using your own Google account / API key, nothing routed through our servers.',
        'Migration & Compatibility Center: detects Yoast, Rank Math, AIOSEO, SEOPress and runs analysis-only to avoid duplicate meta tags.',
        'Hardened meta output: a single, deduplicated source of truth for all head tags.',
      ],
      fixes: [],
      compatibility: ['Tested up to WordPress 7.0', 'Requires PHP 8.0+'],
    },
  ],

  links: {
    docs: '/docs/nexora-pulse',
    demo: '/products/nexora-pulse/demo',
    support: '/contact',
    changelog: '/changelog/nexora-pulse',
    wporg: 'https://wordpress.org/plugins/nexora-pulse/',
  },
  relatedSlugs: ['nexora-engine', 'nexora-media'],
  hasCustomPage: true,
};
