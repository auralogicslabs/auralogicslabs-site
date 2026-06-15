export const trustMetrics = [
  { value: '22 ms', label: 'TTFB on production Nginx' },
  { value: '100%', label: 'Static delivery on cache hit' },
  { value: '0', label: 'PHP execution on cache hit' },
  { value: 'Universal', label: 'Apache · Nginx · LiteSpeed · IIS' },
  { value: 'Auto', label: 'Regeneration on edit' },
  { value: 'Native', label: 'Elementor · Gutenberg · Bricks' }
];

export const platformOverview = [
  {
    id: 'speed-infrastructure',
    title: 'Speed Infrastructure',
    description: 'Pre-rendered HTML snapshots served before WordPress boots. A universal drop-in cache delivers static files on Apache, Nginx, LiteSpeed, and IIS, with ETag and Last-Modified negotiation, 304 handling, and zero PHP execution on hit.',
    stats: '22ms TTFB · 100% cache hit on static · CDN-ready'
  },
  {
    id: 'ghost-protocol',
    title: 'Ghost Protocol',
    description: 'WordPress fingerprints removed at every layer. Generator meta, REST discovery, version strings, body class signatures, and emoji scripts are stripped or renamed. The window.wp namespace is cloaked. Wappalyzer reports Nginx, not WordPress.',
    stats: 'Headers · Body classes · REST · Inline scripts · Asset paths'
  },
  {
    id: 'intelligent-automation',
    title: 'Intelligent Automation',
    description: 'Snapshots regenerate automatically when content changes. Debounced, validated, and conflict-aware. Asset references are verified against disk before publication. Competing caching plugins are detected and surfaced with resolution guidance.',
    stats: '30s debounce · Asset validation · Conflict detection'
  }
];

export const useCases = [
  {
    id: 'agencies',
    title: 'For agencies',
    description: 'Ship modern delivery across every client site without rewriting workflows. Editorial teams keep WordPress. Performance teams ship 22ms TTFB.'
  },
  {
    id: 'enterprises',
    title: 'For enterprises',
    description: 'Modernize legacy WordPress estates without a multi-quarter headless migration. Reduce attack surface through architectural invisibility.'
  },
  {
    id: 'publishers',
    title: 'For publishers',
    description: 'Static-speed delivery at content-heavy scale. Regeneration coalesces editorial bursts; CDN-friendly headers extend reach.'
  },
  {
    id: 'developers',
    title: 'For developers',
    description: 'Headless-grade architecture without DevOps overhead. JSON endpoints, observable diagnostics, and predictable invalidation.'
  }
];

export const platformVision = [
  { title: 'Nexora Cloud', tag: 'Coming next' },
  { title: 'Nexora Shield', tag: 'Coming next' },
  { title: 'Nexora Analytics', tag: 'Coming next' },
  { title: 'Infrastructure Monitoring', tag: 'Coming next' },
  { title: 'AI Intelligence Layer', tag: 'Coming next' },
  { title: 'Multisite Intelligence', tag: 'Coming next' }
];
