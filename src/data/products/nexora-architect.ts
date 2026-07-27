import {
  DraftingCompass,
  Code2,
  Gauge,
  Boxes,
  Wand2,
  Stethoscope,
  Palette,
  LayoutTemplate,
  Sparkles,
  SlidersHorizontal,
  FileCode2,
  Accessibility,
} from 'lucide-react';
import type { Product } from '@/types/product';

const compatibility = {
  requiresWordPress: '6.0',
  testedUpTo: '6.7',
  requiresPHP: '8.0',
};

export const nexoraArchitect: Product = {
  slug: 'nexora-architect',
  name: 'Nexora Architect',
  tagline: 'The fastest intelligent visual builder for WordPress.',
  description:
    'Nexora Architect is an intelligent visual website operating system with a compile-on-publish architecture. Design visually in a modern editor, and Architect compiles your pages to production-grade HTML and CSS, zero runtime frontend, no bloat. A schema-driven document model, the Structura Compiler, a fluid design-token system and optional Nexora Engine integration give you builder convenience with hand-coded output quality. Currently in active beta.',
  status: 'beta',
  hidden: true, // In progress, hidden across the site until ready to publish.
  icon: DraftingCompass,
  accent: '#7C3AED',
  category: 'Builder',
  keywords: [
    'WordPress visual builder',
    'WordPress page builder',
    'compile-on-publish WordPress',
    'production-grade WordPress frontend',
    'WordPress design tokens',
  ],
  playsWellWith: ['WordPress', 'Nexora Engine', 'Block themes'],

  version: '0.10.0',
  releaseDate: '2026-06-11',
  compatibility,
  releases: [
    {
      version: '0.10.0',
      date: '2026-06-11',
      file: 'nexora-architect/nexora-architect-0.10.0.zip',
      prerelease: true,
      compatibility,
    },
  ],

  keyBenefits: [
    {
      title: 'Zero-runtime frontend',
      description:
        'Pages compile to clean HTML and CSS only, no builder JavaScript shipped to visitors, no shortcode bloat, no render-blocking framework.',
      icon: Gauge,
    },
    {
      title: 'Schema-driven document model',
      description:
        'A universal, validated schema describes every page. The Structura Compiler turns it into production-grade output you can trust.',
      icon: Code2,
    },
    {
      title: 'Design visually, ship clean',
      description:
        'A modern visual editor with a fluid design-token system, builder convenience with the output quality of hand-written code.',
      icon: Palette,
    },
  ],

  metrics: [
    { value: '0 KB', label: 'Builder JS shipped to visitors' },
    { value: '30+', label: 'Widgets, with sortable layers' },
    { value: '1', label: 'Schema-driven document model' },
    { value: 'Beta', label: 'v0.10.0, shipping fast to 1.0' },
  ],

  problem: {
    title: 'Visual builders ship bloat to your visitors.',
    description:
      'Traditional page builders render your design with a heavy runtime on every page view, shortcodes, framework JavaScript, render-blocking CSS. Nexora Architect compiles your design to clean HTML and CSS at publish time, so visitors get hand-coded-quality output with none of the builder weight.',
    points: [
      'Zero builder JavaScript on the frontend',
      'Schema-driven, validated document model',
      'AI Assist, Layout Doctor and Brand DNA built in',
      'Optional Nexora Engine integration for static delivery',
    ],
  },

  howItWorks: [
    { title: 'Design', body: 'Compose visually with widgets, sortable layers and a fluid design-token system.' },
    { title: 'Assist', body: 'Use AI Assist, Layout Doctor and Brand DNA to move faster and stay on-brand.' },
    { title: 'Compile', body: 'On publish, the Structura Compiler emits production-grade HTML and critical CSS.' },
    { title: 'Serve', body: 'Ship a zero-runtime page, and pair with Nexora Engine for static delivery.' },
  ],

  comparison: {
    againstLabel: 'Page builders',
    rows: [
      { capability: 'Frontend builder JavaScript', us: 'None (compiled)', them: 'Heavy runtime' },
      { capability: 'Output quality', us: 'Production HTML/CSS', them: 'Shortcode / markup bloat' },
      { capability: 'Schema-driven model', us: true, them: false },
      { capability: 'AI assist + layout scoring', us: true, them: 'Add-ons' },
      { capability: 'Static-delivery ready', us: true, them: 'Rarely' },
    ],
  },

  features: [
    { title: 'Structura Compiler', description: 'Compiles your schema to production-grade HTML/CSS at publish time, strips debug attributes and delivers critical CSS.', icon: Code2, tier: 'free', group: 'Engine' },
    { title: 'Compile-on-publish', description: 'Zero runtime frontend: compiled HTML/CSS only, no builder JS shipped to visitors.', icon: Gauge, tier: 'free', group: 'Engine' },
    { title: '30+ widgets', description: 'A complete widget set for building real pages, with sortable layers and a growing template library.', icon: Boxes, tier: 'free', group: 'Editor' },
    { title: 'Theme builder & templates', description: 'Build theme templates and global styles; the “Hey Nexora” starter theme gives you a featherweight blank canvas.', icon: LayoutTemplate, tier: 'free', group: 'Editor' },
    { title: 'AI Assist (Smart Assist)', description: 'One-click hero, CTA, H1, contact form and navigation generation right inside the editor.', icon: Wand2, tier: 'free', group: 'Intelligence' },
    { title: 'Layout Doctor', description: 'Scores your layout and offers a fix-all button, theme template checks and countdown/popup rules.', icon: Stethoscope, tier: 'free', group: 'Intelligence' },
    { title: 'Brand DNA', description: 'Generate palettes and apply heading fonts + base sizing, with server-side SEO analysis.', icon: Sparkles, tier: 'free', group: 'Intelligence' },
    { title: 'Fluid design tokens', description: 'A global design-token system with separate heading font and base text-size tokens.', icon: SlidersHorizontal, tier: 'free', group: 'Design' },
    { title: 'Schema validation & export', description: 'Server-side schema validation on save plus a developer export REST endpoint.', icon: FileCode2, tier: 'free', group: 'Developer' },
    { title: 'Accessible output', description: 'Compiler a11y: focus-visible, reduced-motion, tab roles and icon labels baked in.', icon: Accessibility, tier: 'free', group: 'Developer' },
  ],

  faqs: [
    { id: 'q1', question: 'What does “compile-on-publish” mean?', answer: 'Instead of rendering your design with a heavy builder runtime on every page view, Nexora Architect compiles your page to plain HTML and CSS when you publish. Visitors get a fast, clean document with no builder JavaScript.' },
    { id: 'q2', question: 'Is it production-ready?', answer: 'Nexora Architect is in active beta (v0.10.0). Core editing, the Structura Compiler, 30+ widgets, AI Assist, Layout Doctor and Brand DNA are in place; expect rapid iteration as it approaches 1.0.' },
    { id: 'q3', question: 'Does it work with Nexora Engine?', answer: 'Yes, Architect offers optional Nexora Engine integration. Architect produces clean compiled pages and Engine can serve them as static HTML for maximum speed.' },
    { id: 'q4', question: 'Do I need to build it from source?', answer: 'The development plugin builds its editor with npm. Release ZIPs published here ship pre-built so you can install and activate directly.' },
  ],

  changelog: [
    {
      version: '0.10.0',
      date: '2026-06-11',
      summary: 'Phase 3, AI Assist, Layout Doctor and Brand DNA.',
      improvements: [
        'Phase 3 AI Assist: Smart Assist tab with one-click hero, CTA, H1, contact form and navigation.',
        'Layout Doctor: fix-all button, theme template checks, countdown/popup rules.',
        'Brand DNA: heading font + base size applied with palettes; server-side SEO analysis REST endpoint.',
        '30 widgets complete; theme templates under a dedicated menu.',
      ],
      compatibility: ['Tested up to WordPress 6.7', 'Requires PHP 8.0+'],
    },
    {
      version: '0.9.0',
      date: '2026-05-20',
      summary: 'Setup Wizard and the “Hey Nexora” starter theme.',
      improvements: [
        'First-run Setup Wizard: guided brand design (colors, fonts, base size, layout) with live preview, fully skippable.',
        '“Hey Nexora” starter theme, featherweight full-width blank canvas, one-click install & activate.',
        'Global design system expanded with separate heading-font and base text-size tokens.',
      ],
    },
  ],

  links: {
    docs: '/docs/nexora-architect',
    support: '/contact',
    changelog: '/changelog/nexora-architect',
  },
  relatedSlugs: ['nexora-engine', 'nexora-media'],
  hasCustomPage: false,
};
