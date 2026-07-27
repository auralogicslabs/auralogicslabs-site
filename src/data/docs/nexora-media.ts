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
      ],
    },
    {
      slug: 'safe-delivery',
      title: 'Safe delivery rules',
      description: 'How Nexora Media avoids breaking lightboxes, heroes, and builder previews.',
      category: 'Features',
      order: 2,
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
      ],
    },
    {
      slug: 'queue-health',
      title: 'Queue health',
      description: 'Monitor background optimization, recover stale locks, and fix permission errors.',
      category: 'Operations',
      order: 3,
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
      ],
    },
  ],
};
