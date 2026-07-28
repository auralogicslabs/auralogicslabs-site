/** Content blocks for product documentation articles. */
export type DocContentBlock =
  | { type: 'p'; text: string }
  | { type: 'h2'; text: string; id?: string }
  | { type: 'h3'; text: string; id?: string }
  | { type: 'ul'; items: string[] }
  | { type: 'ol'; items: string[] }
  | { type: 'code'; code: string; language?: string }
  | { type: 'callout'; title: string; text: string; variant?: 'info' | 'warning' }
  | { type: 'requirements'; items: { label: string; value: string }[] }
  | { type: 'steps'; items: { title: string; body: string; code?: string }[] }
  | { type: 'image'; src: string; alt: string; caption?: string };

export interface DocArticle {
  slug: string;
  title: string;
  description: string;
  /** Sidebar group label, e.g. "First steps", "Architecture". */
  category: string;
  order: number;
  blocks: DocContentBlock[];
}

export interface ProductDocs {
  productSlug: string;
  /** Shown on the product docs landing redirect / meta. */
  tagline: string;
  articles: DocArticle[];
  defaultArticleSlug: string;
}
