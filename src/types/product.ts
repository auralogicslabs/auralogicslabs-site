import type { LucideIcon } from 'lucide-react';

/**
 * Product platform data model.
 *
 * Everything that drives a product page, the download center, the changelog and
 * the release archive is described here. Onboarding a new product should be a
 * matter of adding one config object that satisfies `Product`, no new page code.
 */

export type ProductStatus = 'live' | 'beta' | 'coming-soon';

export type FeatureTier = 'free' | 'pro' | 'enterprise';

/** WordPress / PHP environment requirements for a release. */
export interface ProductCompatibility {
  /** Minimum WordPress version, e.g. "5.9". */
  requiresWordPress: string;
  /** Highest WordPress version verified, e.g. "7.0". */
  testedUpTo: string;
  /** Minimum PHP version, e.g. "8.0". */
  requiresPHP: string;
}

/** Grouped changelog detail, reused by both release notes and the changelog page. */
export interface ChangelogSection {
  improvements?: string[];
  fixes?: string[];
  compatibility?: string[];
  /** Breaking changes, surfaced prominently. */
  breaking?: string[];
}

export interface ChangelogEntry extends ChangelogSection {
  version: string;
  /** ISO date string, e.g. "2026-06-26". */
  date: string;
  /** Optional one-line summary of the release. */
  summary?: string;
}

/**
 * A downloadable release. `file` is a storage *key*, not a URL, the storage
 * adapter resolves it to a public URL. This lets us migrate from in-repo files
 * to Azure Blob (or any object store) without changing the public download URL.
 */
export interface ReleaseAsset {
  version: string;
  /** ISO date string. */
  date: string;
  /** Storage key resolved by the storage adapter, e.g. "nexora-engine/nexora-engine-1.0.0.zip". */
  file: string;
  /** File size in bytes (optional, for display). */
  size?: number;
  /** Marks a pre-1.0 / preview build so it is excluded from "latest stable". */
  prerelease?: boolean;
  /** Compatibility for this specific release (falls back to product-level if absent). */
  compatibility?: ProductCompatibility;
}

export interface ProductFeature {
  title: string;
  description: string;
  icon?: LucideIcon;
  tier: FeatureTier;
  /** Optional grouping label, e.g. "Delivery", "Security", "Intelligence". */
  group?: string;
}

export interface KeyBenefit {
  title: string;
  description: string;
  icon?: LucideIcon;
  /** Optional headline metric, e.g. "22ms". */
  metric?: string;
}

export interface ProductFaq {
  id: string;
  question: string;
  answer: string;
}

export interface ProductScreenshot {
  src: string;
  alt: string;
  caption?: string;
}

export interface ProductVideo {
  title: string;
  /** Poster/thumbnail image. */
  poster?: string;
  /** Self-hosted source. */
  src?: string;
  /** YouTube id (alternative to `src`). */
  youtubeId?: string;
  duration?: string;
}

export interface PricingPlan {
  name: string;
  /** Display price, e.g. "$0", "$49". */
  price: string;
  /** e.g. "/year". */
  period?: string;
  description?: string;
  tier: FeatureTier;
  highlights: string[];
  cta: { label: string; href: string };
  featured?: boolean;
}

/**
 * Outbound and cross-page links. `checkout` is the Freemius extension point -
 * left as a placeholder until live checkout details are wired in.
 */
export interface ProductLinks {
  docs?: string;
  support?: string;
  demo?: string;
  /** wp.org listing (the secondary distribution source). */
  wporg?: string;
  /** Freemius checkout / upgrade URL, extension point. */
  checkout?: string;
  featureRequest?: string;
  changelog?: string;
}

/** Headline proof metric shown in the product hero strip. */
export interface ProductMetric {
  value: string;
  label: string;
}

/** "The problem it solves" block for the product page. */
export interface ProblemBlock {
  title: string;
  description: string;
  points?: string[];
}

/** A single step in a product's "How it works" sequence. */
export interface HowItWorksStep {
  title: string;
  body: string;
}

/** One row of a vs-the-incumbent comparison. boolean → check/cross; string → text. */
export interface ComparisonRow {
  capability: string;
  us: string | boolean;
  them: string | boolean;
}

/** A product's comparison against the typical incumbent approach. */
export interface ProductComparison {
  /** What we're comparing against, e.g. "Cache plugins" or "Going headless". */
  againstLabel: string;
  rows: ComparisonRow[];
}

export interface Product {
  // ── Identity ──────────────────────────────────────────────────────────
  slug: string;
  name: string;
  tagline: string;
  /** Longer overview paragraph for the product page hero / overview. */
  description: string;
  status: ProductStatus;
  icon: LucideIcon;
  /** Brand accent hex for this product. */
  accent: string;

  /**
   * When true, the product is hidden everywhere on the public site, nav,
   * downloads, products index, related lists, and its page and download
   * endpoint return 404. Use for in-progress products not yet announced.
   * Flip to false (or remove) to publish.
   */
  hidden?: boolean;

  // ── Discovery ─────────────────────────────────────────────────────────
  /** e.g. "Performance", "SEO", "Media", "Security", "Automation". */
  category?: string;
  keywords?: string[];

  /**
   * Commercial model. "free" = fully free/GPL, no paid tier (e.g. Pulse, Media);
   * "freemium" = free with a paid Pro upgrade (e.g. Engine). Drives whether the
   * Free vs Pro comparison and upgrade CTA are shown. Defaults to "free".
   */
  pricingModel?: 'free' | 'freemium';
  /** Tools/builders/hosts this product is verified to work alongside. */
  playsWellWith?: string[];

  // ── Versioning & distribution ─────────────────────────────────────────
  /** Current stable version. */
  version: string;
  /** ISO release date of the current stable version. */
  releaseDate: string;
  compatibility: ProductCompatibility;
  /** All releases, newest first. */
  releases: ReleaseAsset[];

  // ── Content (canonical product-page sections) ─────────────────────────
  /** Headline proof metrics (hero strip). */
  metrics?: ProductMetric[];
  /** The problem this product solves. */
  problem?: ProblemBlock;
  keyBenefits?: KeyBenefit[];
  features?: ProductFeature[];
  /** Ordered "How it works" steps. */
  howItWorks?: HowItWorksStep[];
  screenshots?: ProductScreenshot[];
  videos?: ProductVideo[];
  /** vs-the-incumbent comparison. */
  comparison?: ProductComparison;
  pricing?: PricingPlan[];
  faqs?: ProductFaq[];
  changelog?: ChangelogEntry[];

  // ── Journey / links ───────────────────────────────────────────────────
  links?: ProductLinks;
  /** Slugs of related products shown at the bottom of the product page. */
  relatedSlugs?: string[];

  // ── Template control ──────────────────────────────────────────────────
  /**
   * When true, a bespoke static route under /products/<slug> renders this
   * product, so the universal [slug] template skips generating it. This lets
   * the rich existing pages (e.g. Nexora Engine) coexist with the template
   * while new products are onboarded by config alone.
   */
  hasCustomPage?: boolean;
}

/** The current stable (non-prerelease) release, or the newest release. */
export function getStableRelease(product: Product): ReleaseAsset | undefined {
  return product.releases.find((r) => !r.prerelease) ?? product.releases[0];
}

/** Releases older than the current stable, for the "Previous versions" archive. */
export function getPreviousReleases(product: Product): ReleaseAsset[] {
  const stable = getStableRelease(product);
  return product.releases.filter((r) => r.version !== stable?.version);
}
