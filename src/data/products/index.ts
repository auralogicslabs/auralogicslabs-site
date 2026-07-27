import type { Product } from '@/types/product';
import { nexoraEngine } from './nexora-engine';
import { nexoraPulse } from './nexora-pulse';
import { nexoraMedia } from './nexora-media';
import { nexoraArchitect } from './nexora-architect';
import { nexoraShield } from './nexora-shield';

/**
 * Central product registry. The display order here is the canonical order used
 * across navigation, the products index, and the download center.
 *
 * Onboarding a new product: add its config file and append it here. No page,
 * route, or component changes are required for it to appear everywhere.
 */
export const products: Product[] = [
  nexoraEngine,
  nexoraPulse,
  nexoraMedia,
  nexoraArchitect,
  nexoraShield,
];

const bySlug = new Map(products.map((p) => [p.slug, p]));

/**
 * All publicly visible products (excludes `hidden` ones). This is the default
 * for every public listing, nav, downloads, products index, related.
 */
export function getAllProducts(): Product[] {
  return products.filter((p) => !p.hidden);
}

/** Every product including hidden ones. For internal/admin use only. */
export function getAllProductsIncludingHidden(): Product[] {
  return products;
}

/** Whether a product should be reachable on the public site. */
export function isPublished(product: Product | undefined): boolean {
  return Boolean(product) && !product!.hidden;
}

/** Raw lookup by slug (returns hidden products too, callers must gate access). */
export function getProduct(slug: string): Product | undefined {
  return bySlug.get(slug);
}

/** Visible products with at least one downloadable release (download center). */
export function getDownloadableProducts(): Product[] {
  return products.filter((p) => !p.hidden && p.releases.length > 0);
}

/**
 * Visible products rendered by the universal /products/[slug] template, i.e.
 * those without a bespoke static page. Used by generateStaticParams so the
 * template never collides with a hand-built route.
 */
export function getTemplateProducts(): Product[] {
  return products.filter((p) => !p.hidden && !p.hasCustomPage);
}

/** Resolve visible related products for cross-linking, preserving registry order. */
export function getRelatedProducts(product: Product): Product[] {
  const slugs = product.relatedSlugs ?? [];
  return slugs
    .map((s) => bySlug.get(s))
    .filter((p): p is Product => Boolean(p) && !p!.hidden);
}
