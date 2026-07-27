import type { DocArticle, ProductDocs } from '@/types/docs';
import { getAllProducts, getProduct } from '@/data/products';
import { nexoraEngineDocs } from './nexora-engine';
import { nexoraPulseDocs } from './nexora-pulse';
import { nexoraMediaDocs } from './nexora-media';
import { nexoraArchitectDocs } from './nexora-architect';
import { nexoraShieldDocs } from './nexora-shield';

const registry: ProductDocs[] = [
  nexoraEngineDocs,
  nexoraPulseDocs,
  nexoraMediaDocs,
  nexoraArchitectDocs,
  nexoraShieldDocs,
];

const byProduct = new Map(registry.map((d) => [d.productSlug, d]));

/** All product doc sets for published products only. */
export function getAllProductDocs(): ProductDocs[] {
  const visible = new Set(getAllProducts().map((p) => p.slug));
  return registry.filter((d) => visible.has(d.productSlug));
}

export function getProductDocs(productSlug: string): ProductDocs | undefined {
  const product = getProduct(productSlug);
  if (!product || product.hidden) return undefined;
  return byProduct.get(productSlug);
}

export function getDocArticle(productSlug: string, articleSlug: string): DocArticle | undefined {
  const docs = getProductDocs(productSlug);
  return docs?.articles.find((a) => a.slug === articleSlug);
}

/** Articles grouped by sidebar category, preserving article order within each group. */
export function getDocNavGroups(docs: ProductDocs): { category: string; articles: DocArticle[] }[] {
  const map = new Map<string, DocArticle[]>();
  for (const article of [...docs.articles].sort((a, b) => a.order - b.order)) {
    const list = map.get(article.category) ?? [];
    list.push(article);
    map.set(article.category, list);
  }
  return Array.from(map.entries()).map(([category, articles]) => ({ category, articles }));
}

export function getAllDocStaticParams(): { product: string; slug: string }[] {
  return getAllProductDocs().flatMap((d) =>
    d.articles.map((a) => ({ product: d.productSlug, slug: a.slug }))
  );
}
