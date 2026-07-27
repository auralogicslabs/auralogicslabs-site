import type { ProductDocs } from '@/types/docs';

export const nexoraShieldDocs: ProductDocs = {
  productSlug: 'nexora-shield',
  tagline: 'WordPress security hardening from the Nexora suite, documentation in progress.',
  defaultArticleSlug: 'overview',
  articles: [
    {
      slug: 'overview',
      title: 'Overview',
      description: 'Security operations for WordPress fleets, preview of Nexora Shield.',
      category: 'First steps',
      order: 1,
      blocks: [
        {
          type: 'p',
          text: 'Nexora Shield extends the Ghost Protocol hardening in Nexora Engine with fleet-wide security policies, login protection, and vulnerability surfacing across every site in your Portal.',
        },
        {
          type: 'callout',
          title: 'Coming soon',
          text: 'Shield is not yet publicly available. Engine users already receive core Ghost Protocol features today.',
          variant: 'info',
        },
        { type: 'h2', id: 'today', text: 'Available now in Engine' },
        {
          type: 'p',
          text: 'Until Shield launches, Nexora Engine includes generator stripping, login rate limiting, XML-RPC controls, and user enumeration blocks. See the Engine Ghost Protocol docs for details.',
        },
      ],
    },
  ],
};
