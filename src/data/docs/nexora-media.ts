import type { ProductDocs } from '@/types/docs';

export const nexoraMediaDocs: ProductDocs = {
  productSlug: 'nexora-media',
  tagline: 'Safe AVIF and WebP optimization for WordPress, without breaking your page builder.',
  defaultArticleSlug: 'getting-started',
  articles: [
    {
      slug: 'getting-started',
      title: 'Getting Started',
      description: 'Install Nexora Media and start generating AVIF and WebP variants in a safe background queue.',
      category: 'First steps',
      order: 1,
      blocks: [
        {
          type: 'p',
          text: 'Nexora Media generates AVIF and WebP variants for every upload, serves the smaller file each browser supports to public visitors, and never deletes your originals. Editors and page builders always see the source image while working.',
        },
        { type: 'h2', id: 'install', text: 'Installation' },
        {
          type: 'steps',
          items: [
            {
              title: 'Install and activate',
              body: 'Upload the plugin ZIP or install from your download center package.',
              code: 'Plugins → Add New → Upload → Activate Nexora Media',
            },
            {
              title: 'Confirm image libraries',
              body: 'Nexora uses Imagick when available, otherwise GD. The settings screen shows which engine is active.',
              code: 'Nexora Media → Settings → Image engine',
            },
            {
              title: 'Process the queue',
              body: 'New uploads enqueue automatically. Bulk-optimize existing media from the Media Library or Queue screen.',
              code: 'Nexora Media → Queue → Process batch',
            },
          ],
        },
        {
          type: 'requirements',
          items: [
            { label: 'WordPress', value: '6.0+ (6.6 tested)' },
            { label: 'PHP', value: '7.4+ with Imagick or GD' },
            { label: 'Disk space', value: 'AVIF and WebP variants stored alongside originals' },
          ],
        },
        { type: 'h2', id: 'dashboard', text: 'The dashboard' },
        {
          type: 'p',
          text: 'The dashboard is your at-a-glance control center: total library stats, cumulative space saved, the live optimization pipeline, and whether Nexora Media is connected to Nexora Engine for static delivery.',
        },
        {
          type: 'image',
          src: '/screenshots/docs/nexora-media/screenshot-1.png',
          alt: 'Nexora Media dashboard showing library stats, space saved, and the optimization pipeline',
          caption: 'The dashboard: library stats, space saved, the optimization pipeline, and your Nexora Engine connection at a glance.',
        },
      ],
    },
    {
      slug: 'media-library',
      title: 'Working in the Media Library',
      description: 'Per-image status, savings, and the one-click "use original" delivery toggle.',
      category: 'Features',
      order: 2,
      blocks: [
        {
          type: 'p',
          text: 'Nexora Media works right inside the familiar WordPress Media Library. Every image gets a status card showing its optimization state and the bytes saved, so you always know what is optimized and by how much.',
        },
        { type: 'h2', id: 'per-image', text: 'Per-image controls' },
        {
          type: 'ul',
          items: [
            'Optimization status and generated variants (AVIF / WebP) per attachment',
            'Exact savings versus the original, so wins are measurable',
            'A one-click "use original" toggle to force the source file for any image that must not be swapped',
          ],
        },
        {
          type: 'image',
          src: '/screenshots/docs/nexora-media/screenshot-2.png',
          alt: 'Nexora Media library view with per-image cards showing status, savings, and a use-original toggle',
          caption: 'Per-image cards show status, savings, and a one-click "use original" delivery toggle, granular control without leaving the library.',
        },
      ],
    },
    {
      slug: 'safe-delivery',
      title: 'Safe delivery rules',
      description: 'How Nexora Media avoids breaking lightboxes, heroes, and builder previews.',
      category: 'Features',
      order: 3,
      blocks: [
        {
          type: 'p',
          text: 'Most image optimizers rewrite src attributes aggressively. Nexora Media is conservative: it skips editor sessions, builder previews, lightboxes, logos, menus, and hero images unless you opt in.',
        },
        { type: 'h2', id: 'builders', text: 'Page builder safety' },
        {
          type: 'ul',
          items: [
            'Elementor, Divi, Bricks, Oxygen, WPBakery, and Beaver Builder detected automatically',
            'Logged-in users always receive original URLs in the admin and preview',
            'Only swaps to a modern variant when it is actually smaller than the original',
          ],
        },
        {
          type: 'image',
          src: '/screenshots/docs/nexora-media/screenshot-3.png',
          alt: 'Nexora Media frontend delivery settings separating safe and advanced options',
          caption: 'Frontend delivery: safe and advanced settings are clearly separated, with builder-safe defaults so nothing breaks out of the box.',
        },
        {
          type: 'callout',
          title: 'Safe by default',
          text: 'You can leave every advanced setting off and still get modern-format delivery on the images that are safe to swap. Turn on advanced rewriting only when you have confirmed your theme and builder handle it.',
          variant: 'info',
        },
      ],
    },
    {
      slug: 'engine-bridge',
      title: 'Nexora Engine bridge',
      description: 'Keep static mirrors in sync when Nexora Media and Nexora Engine run together.',
      category: 'Integrations',
      order: 4,
      blocks: [
        {
          type: 'p',
          text: 'When Nexora Engine is also installed, Nexora Media connects to it automatically. Optimized images and their modern variants are reflected in the static mirror, so your fast, pre-rendered pages ship the smaller files too, no manual coordination between the two plugins.',
        },
        { type: 'h2', id: 'how', text: 'How the bridge works' },
        {
          type: 'ul',
          items: [
            'Nexora Media detects an active Nexora Engine install and enables the bridge',
            'New or re-optimized images trigger the affected pages to refresh in the static mirror',
            'Recognizes both current and legacy Engine option prefixes, so it keeps working across Engine versions',
          ],
        },
        {
          type: 'image',
          src: '/screenshots/docs/nexora-media/screenshot-4.png',
          alt: 'Nexora Media Engine Bridge screen showing automatic SSG integration status',
          caption: 'The Engine Bridge: automatic Nexora Engine SSG integration so your static mirrors stay in sync with optimized media.',
        },
        {
          type: 'callout',
          title: 'Optional, not required',
          text: 'Nexora Media is fully standalone. The Engine bridge simply light-up extra value when both plugins are present, you never need Engine to use Media.',
          variant: 'info',
        },
      ],
    },
    {
      slug: 'queue-health',
      title: 'Queue health & diagnostics',
      description: 'Monitor background optimization, recover stale locks, and read the structured error log.',
      category: 'Operations',
      order: 5,
      blocks: [
        {
          type: 'p',
          text: 'Heavy optimization runs in batched background workers with locking so uploads stay fast. The Queue Health panel surfaces stale locks, memory limits, and permission failures with one-click recovery actions.',
        },
        { type: 'h2', id: 'recovery', text: 'Recovery actions' },
        {
          type: 'ul',
          items: [
            'Clear stale worker lock from Queue Health',
            'Retry failed items individually or in bulk',
            'Pause queue during large migrations, then resume',
          ],
        },
        { type: 'h2', id: 'diagnostic', text: 'The diagnostic screen' },
        {
          type: 'p',
          text: 'When something looks off, the Diagnostic screen tells you why in plain terms: which image engine is available, whether the queue is healthy, and a structured log of any errors, so support conversations start with facts, not guesswork.',
        },
        {
          type: 'image',
          src: '/screenshots/docs/nexora-media/screenshot-6.png',
          alt: 'Nexora Media diagnostic screen showing server capabilities, queue health, and error log',
          caption: 'The Diagnostic screen: server capabilities, queue health, and the structured error log in one place.',
        },
      ],
    },
    {
      slug: 'roadmap',
      title: 'Roadmap',
      description: 'What we are building next for Nexora Media, in the open.',
      category: 'Operations',
      order: 6,
      blocks: [
        {
          type: 'p',
          text: 'Nexora Media ships with a public roadmap built right into the plugin. You can see what is actively in development and what we are still researching, so you always know where the product is headed.',
        },
        {
          type: 'image',
          src: '/screenshots/docs/nexora-media/screenshot-5.png',
          alt: 'Nexora Media roadmap screen showing planned and researched features',
          caption: 'The in-plugin roadmap: what we are building next and what we are researching, all in the open.',
        },
        {
          type: 'callout',
          title: 'Fully open source',
          text: 'The Nexora Media admin is a React + TypeScript app compiled with Vite. The complete, unminified source is public at github.com/auralogicslabs/nexora-media.',
        },
      ],
    },
  ],
};
