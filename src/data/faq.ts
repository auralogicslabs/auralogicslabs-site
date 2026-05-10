export interface FAQItem {
  id: string;
  question: string;
  answer: string;
}

export const faqData: FAQItem[] = [
  {
    id: 'q1',
    question: 'Will Elementor still work?',
    answer: 'Yes. Nexora Engine was built and tested on Elementor and Elementor Pro from the first commit. Sliders, popups, forms, lottie animations, theme builder templates, and Global Kit configurations are preserved exactly. Logged-in editors always see the live PHP-rendered site, so the builder remains fully functional during edits.',
  },
  {
    id: 'q2',
    question: 'Do I need special hosting?',
    answer: 'No. Nexora Engine works on any host that runs WordPress — Apache, Nginx, LiteSpeed, IIS, shared hosting, VPS, managed WP. The drop-in cache operates at the PHP-FPM layer, so server configuration changes are not required.',
  },
  {
    id: 'q3',
    question: 'Is this a static export plugin?',
    answer: 'No. Static export plugins generate a one-time snapshot and lose all dynamic features. Nexora Engine maintains the live WordPress backend, regenerates snapshots automatically on edit, and falls back to dynamic rendering for forms, comments, search, and authenticated requests.',
  },
  {
    id: 'q4',
    question: 'What happens to WooCommerce?',
    answer: 'Static-eligible pages (catalog, single product views, marketing pages) capture normally. Dynamic flows (cart, checkout, account) automatically fall back to live PHP rendering — the drop-in skips requests carrying authenticated session cookies.',
  },
  {
    id: 'q5',
    question: 'Will my SEO be affected?',
    answer: 'Positively. Faster TTFB improves Core Web Vitals scores, which Google factors into rankings. Nexora also auto-strips false-positive noindex tags that some SEO plugins inject during the capture protocol — a common bug in static rendering pipelines.',
  },
  {
    id: 'q6',
    question: 'Can I disable it anytime?',
    answer: 'Yes. Toggle the platform off in the admin and Nexora cleanly removes its drop-in, reverts WP_CACHE, and restores standard WordPress delivery. No content is modified — only the delivery layer changes.',
  },
  {
    id: 'q7',
    question: 'Does it support multisite?',
    answer: 'Single-site only in the current release. Multisite support is under active development and will ship as part of the platform\'s multi-tenant intelligence layer.',
  },
  {
    id: 'q8',
    question: 'Is it developer-friendly?',
    answer: 'Built for engineers. Single-URL diagnostic with structured JSON output, filterable WordPress hooks for custom invalidation, WP-CLI commands for programmatic regeneration, and a fully auditable drop-in under 200 lines of PHP.',
  },
];
