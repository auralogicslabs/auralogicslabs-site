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
  Search,
  CheckCircle2,
  Terminal,
  Database,
  ShieldAlert,
  Cpu,
  Sparkles,
  Link,
  Map,
  Bell,
  Mail,
  Webhook,
  History,
  FileText,
  UserCheck,
  EyeOff,
  CloudLightning,
  Boxes,
  LucideIcon
} from 'lucide-react';

export interface Feature {
  id: number;
  title: string;
  description: string;
  icon: LucideIcon;
  tier: 'Free' | 'Pro' | 'Enterprise';
}

export const coreFeatures: Feature[] = [
  // FREE - DELIVERY
  {
    id: 1,
    title: 'SSG (Static Site Generator)',
    description: 'Captures WordPress pages to pre-rendered HTML snapshots. Full conditional response handling built in.',
    icon: Zap,
    tier: 'Free'
  },
  {
    id: 2,
    title: 'advanced-cache.php Drop-In',
    description: 'Serves static files before WordPress, PHP, or DB load. 22ms TTFB verified on production Nginx.',
    icon: CloudLightning,
    tier: 'Free'
  },
  {
    id: 3,
    tier: 'Free',
    title: 'Universal Server Support',
    description: 'Apache, Nginx, LiteSpeed, IIS. No .htaccess or server-side configuration required.',
    icon: Globe2,
  },
  {
    id: 4,
    tier: 'Free',
    title: 'Smart Regeneration',
    description: 'save_post triggers 30-second debounced capture. Coalesces bulk edits and theme changes.',
    icon: RefreshCw,
  },
  {
    id: 5,
    tier: 'Free',
    title: 'Atomic File Writes',
    description: 'Snapshots swapped with rollback safety. Checksum verified before publication.',
    icon: Database,
  },
  // FREE - SECURITY
  {
    id: 6,
    tier: 'Free',
    title: 'Ghost Protocol (Core)',
    description: 'Strips WP generator tags, REST discovery, and window.wp namespace fingerprints.',
    icon: ShieldCheck,
  },
  {
    id: 7,
    tier: 'Free',
    title: 'HMAC-Signed Loopback',
    description: 'Internal capture requests are cryptographically signed. Cannot be spoofed or accessed externally.',
    icon: Lock,
  },
  // FREE - INTELLIGENCE
  {
    id: 8,
    tier: 'Free',
    title: 'Basic Scoring Engine',
    description: 'Per-page health scoring (0-100) across SEO, Performance, Security, and Indexing.',
    icon: BarChart3,
  },
  {
    id: 9,
    tier: 'Free',
    title: 'Issue Detection',
    description: 'Auto-detects critical, high, and medium severity infrastructure issues per post.',
    icon: AlertTriangle,
  },
  // PRO - ADVANCED
  {
    id: 10,
    tier: 'Pro',
    title: 'Hybrid Rendering Mode',
    description: 'Per-page mode detection: headless_ready, hybrid_required, or server_only.',
    icon: GitBranch,
  },
  {
    id: 11,
    tier: 'Pro',
    title: 'GSC Integration',
    description: 'Real-time Search Console data mapping: impressions, clicks, and CTR per post.',
    icon: Search,
  },
  {
    id: 12,
    tier: 'Pro',
    title: 'AI Suggestion Engine',
    description: 'Rule-based fix suggestions for every infrastructure issue. LLM hookable.',
    icon: Sparkles,
  },
  {
    id: 13,
    tier: 'Pro',
    title: 'Redirect Manager',
    description: 'Advanced 301/302 manager with regex pattern support. Intercepts 404s at edge.',
    icon: Link,
  },
  {
    id: 14,
    tier: 'Pro',
    title: 'Broken Link Checker',
    description: 'Background cron-based HTTP HEAD scanning for all internal and external links.',
    icon: FileSearch,
  },
  {
    id: 15,
    tier: 'Pro',
    title: 'XML Sitemap Generator',
    description: 'Auto-regenerates sitemap on publish events. Respects SEO plugin noindex settings.',
    icon: Map,
  },
  {
    id: 16,
    tier: 'Pro',
    title: 'White Label',
    description: 'Full agency branding. Custom logos, colors, and plugin list invisibility.',
    icon: EyeOff,
  },
  {
    id: 17,
    tier: 'Pro',
    title: 'Webhook Notifications',
    description: 'POST to any endpoint (Slack, Zapier) when scores drop or issues are detected.',
    icon: Webhook,
  },
  {
    id: 18,
    tier: 'Pro',
    title: 'Change Tracker',
    description: 'Diffs content on every publish. Flags score regressions caused by editorial edits.',
    icon: History,
  }
];
