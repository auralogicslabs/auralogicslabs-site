import {
  ShieldHalf,
  Flame,
  Lock,
  KeyRound,
  ScanLine,
  FileCheck2,
  Bug,
  Wrench,
  Network,
  ListChecks,
  FileText,
  Database,
  Gauge,
  Bell,
  ShieldCheck,
} from 'lucide-react';
import type { Product } from '@/types/product';

const compatibility = {
  requiresWordPress: '6.3',
  testedUpTo: '6.7',
  requiresPHP: '8.0',
};

export const nexoraShield: Product = {
  slug: 'nexora-shield',
  name: 'Nexora Shield',
  tagline: 'Security by Design for WordPress.',
  description:
    'Nexora Shield is a complete WordPress security, firewall and compliance platform, built for classic WordPress, headless sites, Nexora Engine and enterprise compliance. A web application firewall, malware and vulnerability scanning, login hardening, two-factor authentication, audit logging and a live security score work together to protect your site and prove it. Launching soon.',
  status: 'coming-soon',
  hidden: true, // In progress, hidden across the site until ready to publish.
  icon: ShieldHalf,
  accent: '#DC2626',
  category: 'Security',
  keywords: [
    'WordPress security plugin',
    'WordPress firewall',
    'WordPress malware scanner',
    'WordPress hardening',
    'WordPress compliance',
  ],
  playsWellWith: ['WordPress', 'Nexora Engine', 'Headless WordPress', 'Multisite'],

  // Pre-launch, no public release/ZIP yet.
  version: '0.6.0',
  releaseDate: '',
  compatibility,
  releases: [],

  keyBenefits: [
    {
      title: 'Firewall at the edge',
      description:
        'A web application firewall (WAF) plus brute-force protection, CAPTCHA and IP management block attacks before they reach WordPress.',
      icon: Flame,
    },
    {
      title: 'Find and fix threats',
      description:
        'Malware scanning, file-integrity monitoring and a vulnerability scanner surface risks, and a live security score tells you exactly what to fix.',
      icon: ScanLine,
    },
    {
      title: 'Hardened and provable',
      description:
        'One-click hardening, 2FA, security headers and a tamper-evident audit log, with compliance reports you can hand to auditors.',
      icon: ShieldCheck,
    },
  ],

  metrics: [
    { value: 'WAF', label: 'Firewall blocking at the edge' },
    { value: '0–100', label: 'Live security score' },
    { value: '2FA', label: 'Plus one-click hardening' },
    { value: 'Pre-launch', label: 'v0.6.0, in active development' },
  ],

  problem: {
    title: 'WordPress is the web’s biggest attack target.',
    description:
      'Most sites bolt on a single security plugin and hope. Nexora Shield is a complete, security-by-design platform, firewall, malware and vulnerability scanning, hardening, 2FA, audit logging and a live security score, built for classic WordPress, headless sites and Nexora Engine alike.',
    points: [
      'Block attacks at the edge with a WAF + brute-force protection',
      'Scan for malware, file changes and vulnerable components',
      'Harden WordPress and add 2FA in a click',
      'Prove your posture with a live score and audit log',
    ],
  },

  howItWorks: [
    { title: 'Install', body: 'Activate Shield and run the initial security scan and baseline.' },
    { title: 'Harden', body: 'Apply one-click hardening, security headers and two-factor auth.' },
    { title: 'Defend', body: 'The WAF and brute-force protection block attacks in real time.' },
    { title: 'Prove', body: 'Track your security score, audit log and compliance reports.' },
  ],

  comparison: {
    againstLabel: 'Single security plugins',
    rows: [
      { capability: 'Web application firewall', us: true, them: 'Sometimes' },
      { capability: 'Malware + vulnerability scan', us: true, them: 'Partial' },
      { capability: 'Headless / Nexora Engine aware', us: true, them: false },
      { capability: 'Live security score + audit log', us: true, them: 'Limited' },
      { capability: 'Compliance reporting', us: true, them: false },
    ],
  },

  features: [
    { title: 'Web Application Firewall', description: 'Rule-based WAF that filters malicious requests before WordPress loads.', icon: Flame, tier: 'free', group: 'Firewall' },
    { title: 'Brute-force protection', description: 'Stops credential-stuffing and login brute-force with rate limiting and lockouts.', icon: Lock, tier: 'free', group: 'Firewall' },
    { title: 'CAPTCHA & login security', description: 'CAPTCHA, login hardening and configurable login policies.', icon: KeyRound, tier: 'free', group: 'Firewall' },
    { title: 'Two-factor authentication', description: 'Add 2FA to WordPress logins for every role.', icon: KeyRound, tier: 'pro', group: 'Access' },
    { title: 'Malware scanner', description: 'Scans your site for malware and known bad signatures.', icon: ScanLine, tier: 'free', group: 'Scanning' },
    { title: 'File integrity monitor', description: 'Detects unexpected changes to core, plugin and theme files.', icon: FileCheck2, tier: 'free', group: 'Scanning' },
    { title: 'Vulnerability scanner', description: 'Flags vulnerable plugins, themes and core versions.', icon: Bug, tier: 'pro', group: 'Scanning' },
    { title: 'One-click hardening', description: 'Apply WordPress hardening best-practices and security headers in a click.', icon: Wrench, tier: 'free', group: 'Hardening' },
    { title: 'Security headers', description: 'Manage CSP, HSTS and other response headers for classic and headless sites.', icon: Network, tier: 'free', group: 'Hardening' },
    { title: 'API & database security', description: 'Locks down REST/API surfaces and adds database-layer protections.', icon: Database, tier: 'pro', group: 'Hardening' },
    { title: 'Audit log', description: 'A tamper-evident record of security-relevant events across your site.', icon: ListChecks, tier: 'free', group: 'Visibility' },
    { title: 'Security score & issue engine', description: 'A live 0–100 score with a prioritized list of issues to fix.', icon: Gauge, tier: 'free', group: 'Visibility' },
    { title: 'Alerts', description: 'Real-time alerts when something needs your attention.', icon: Bell, tier: 'free', group: 'Visibility' },
    { title: 'Compliance & PDF reports', description: 'Compliance tooling and exportable PDF security reports for stakeholders.', icon: FileText, tier: 'pro', group: 'Compliance' },
  ],

  faqs: [
    { id: 'q1', question: 'When does Nexora Shield launch?', answer: 'Shield is in pre-launch development (v0.6.0). The firewall, scanning, hardening, audit log and security score are already built; we’ll publish a downloadable release here when it’s ready.' },
    { id: 'q2', question: 'Does it work with headless WordPress and Nexora Engine?', answer: 'Yes, Shield is designed for classic WordPress, headless sites and Nexora Engine, with a dedicated bridge so security headers and protections apply to statically delivered pages too.' },
    { id: 'q3', question: 'Does it support multisite?', answer: 'Yes. Shield includes a network dashboard and multisite-aware controls.' },
  ],

  links: {
    support: '/contact',
    changelog: '/changelog/nexora-shield',
  },
  relatedSlugs: ['nexora-engine', 'nexora-architect'],
  hasCustomPage: false,
};
