import type { ProductDocs } from '@/types/docs';

export const nexoraArchitectDocs: ProductDocs = {
  productSlug: 'nexora-architect',
  tagline: 'Visual site architecture for WordPress, documentation coming as we approach launch.',
  defaultArticleSlug: 'overview',
  articles: [
    {
      slug: 'overview',
      title: 'Overview',
      description: 'What Nexora Architect will deliver when it launches.',
      category: 'First steps',
      order: 1,
      blocks: [
        {
          type: 'p',
          text: 'Nexora Architect is the visual planning layer for WordPress sites, mapping templates, components, and content models before you build. It is currently in active development.',
        },
        {
          type: 'callout',
          title: 'Coming soon',
          text: 'Join the waitlist on the product page or contact us to get notified when early access opens.',
          variant: 'info',
        },
        { type: 'h2', id: 'planned', text: 'Planned capabilities' },
        {
          type: 'ul',
          items: [
            'Template and component inventory across your site',
            'Visual sitemap tied to real WordPress URLs',
            'Exportable architecture briefs for agencies and dev teams',
            'Tight integration with Nexora Engine delivery metrics',
          ],
        },
      ],
    },
  ],
};
