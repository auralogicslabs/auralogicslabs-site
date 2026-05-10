import {
  Zap,
  ShieldCheck,
  ArrowRightLeft,
  ToggleRight,
  RefreshCw,
  Activity,
  Lock,
  Globe2,
  AlertTriangle,
  LayoutGrid,
  Blocks,
  Code2,
  Cloud,
  FileSearch,
  GitBranch,
  BarChart3,
  LucideIcon
} from 'lucide-react';

export interface Feature {
  id: number;
  title: string;
  description: string;
  icon: LucideIcon;
}

export const coreFeatures: Feature[] = [
  {
    id: 1,
    title: 'Lightning Static Delivery',
    description: 'Pre-rendered HTML served before WordPress boots, with ETag and 304 negotiation built in.',
    icon: Zap,
  },
  {
    id: 2,
    title: 'Ghost Protocol',
    description: 'WordPress fingerprints removed from headers, HTML, and JavaScript namespaces in real time.',
    icon: ShieldCheck,
  },
  {
    id: 3,
    title: 'SPA Navigation',
    description: 'After first paint, internal links fetch JSON and rehydrate — no full reloads, no route flashes.',
    icon: ArrowRightLeft,
  },
  {
    id: 4,
    title: 'One-Click Setup',
    description: 'Toggle headless mode in admin. The drop-in installs itself, WP_CACHE is set, snapshots generate. No server config.',
    icon: ToggleRight,
  },
  {
    id: 5,
    title: 'Smart Regeneration',
    description: 'save_post triggers a 30-second debounced capture. Bulk edits coalesce. Theme or kit changes invalidate site-wide.',
    icon: RefreshCw,
  },
  {
    id: 6,
    title: 'Live Diagnostics',
    description: 'A single admin URL reports drop-in status, cache health, asset integrity, and a live HTTP probe in 30 seconds.',
    icon: Activity,
  },
  {
    id: 7,
    title: 'Stealth Security Layer',
    description: 'HMAC-signed internal protocols, malicious-pattern scanning on captured scripts, path-traversal guards on every read.',
    icon: Lock,
  },
  {
    id: 8,
    title: 'Universal Compatibility',
    description: 'Apache, Nginx, LiteSpeed, IIS — drop-in works at the PHP-FPM layer regardless of web server.',
    icon: Globe2,
  },
  {
    id: 9,
    title: 'Conflict Detection',
    description: 'Identifies WP Rocket, W3TC, LiteSpeed Cache, Hummingbird, and others. Refuses to overwrite. Surfaces a resolution path.',
    icon: AlertTriangle,
  },
  {
    id: 10,
    title: 'Elementor Compatibility',
    description: 'Built and tested on Elementor + Elementor Pro. Sliders, popups, forms, lottie, theme builder — all preserved.',
    icon: LayoutGrid,
  },
  {
    id: 11,
    title: 'Gutenberg Support',
    description: 'Block editor pages capture identically. Reusable blocks, patterns, and full-site editing remain untouched.',
    icon: Blocks,
  },
  {
    id: 12,
    title: 'API-First Architecture',
    description: 'Custom REST endpoints expose page payloads as JSON for external consumers and SPA hydration.',
    icon: Code2,
  },
  {
    id: 13,
    title: 'CDN-Compatible Delivery',
    description: 'Static files served with proper cache headers — works behind Cloudflare, BunnyCDN, or any reverse proxy.',
    icon: Cloud,
  },
  {
    id: 14,
    title: 'Asset Validation',
    description: 'Every captured page is scanned for broken CSS/JS references. Missing files surface in admin diagnostics.',
    icon: FileSearch,
  },
  {
    id: 15,
    title: 'Delivery Modes',
    description: 'Direct mode for raw speed. Proxy mode for full URL cloaking. Toggle anytime, regenerate, ship.',
    icon: GitBranch,
  },
  {
    id: 16,
    title: 'Infrastructure Diagnostics',
    description: 'A single admin URL surfaces every signal: cache hit ratio, static file count, last regeneration, broken references.',
    icon: BarChart3,
  },
];
