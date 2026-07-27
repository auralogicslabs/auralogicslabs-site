# Auralogics Labs — Website Improvement Brief

**For:** dev team
**Context:** the site (`localhost:3000`, Next.js 16) is in good shape — strong hero, motion, SEO, a central product registry. This brief is about closing **specific gaps** so the site reads as a **branded product hub** where every product feels first-class. It is NOT a rebuild.

**Reviewed:** `src/app/page.tsx`, `src/app/products/*`, `src/data/products/*`, `src/components/sections/*` on 2026-06-28.

---

## Priority 1 — Make every product page structurally consistent (the #1 issue)

**Problem:** the five product pages are wildly uneven:

| Page | Sections | Feel |
|---|---|---|
| Engine | 19 | lavish / bespoke |
| Pulse | 9 | medium |
| Media | 5 | thin |
| Architect | 5 | thin |
| Shield | 4 | skeletal |

A visitor feels Engine is "the real product" and the rest are afterthoughts. For a product **house**, every product must feel equally first-class. This is the single most important fix.

**The fix is already half-built.** `src/app/products/[slug]/page.tsx` is a consistent template driven by `src/data/products/*.ts`, and `getTemplateProducts()` already filters on a `hasCustomPage` flag. The 5 bespoke pages bypass it.

**Do this:**
1. Define ONE canonical product-page section order (the template). Recommended, in order:
   `Hero → TrustMetrics (proof) → WhyItMatters (the problem it solves) → FeaturesGrid → HowItWorks → Screenshots → Comparison (vs the incumbent) → Pricing (Free vs Pro) → Compatibility → FAQ → RelatedProducts → FinalCTA`.
2. Make the `[slug]` template render that full order from each product's data file. Every product's `.ts` must provide the data for every section (fill gaps in `nexora-media.ts`, `nexora-architect.ts`, `nexora-shield.ts` so they're as complete as `nexora-engine.ts`).
3. **Decide per product** whether it keeps a bespoke page:
   - Keep Engine bespoke ONLY if its extra sections (ArchitectureFlow, SecurityGhost, MethodologyDetail) genuinely add value — but it must still hit every section the template has, in the same order, so it reads as "the same kind of page, richer."
   - Move Pulse/Media/Architect/Shield onto the unified `[slug]` template (set `hasCustomPage: false`), then enrich each data file until the page feels full.
4. **Acceptance test:** open all 5 product pages back-to-back. They must feel like five chapters of one book — same rhythm, same section types, same depth. No page should feel like a stub next to Engine.

---

## Priority 2 — Show all FIVE products everywhere (the hub is incomplete)

**Problem:** the registry has 5 products (`src/data/products/index.ts`), but:
- `src/components/sections/products/ProductsIndex.tsx` **hardcodes 4** (Engine, Pulse, Media, Portal) — **Architect and Shield are missing.**
- `src/app/products/page.tsx` metadata says **"Four drop-in plugins"** and the JSON-LD lists only 4 (with Portal, not Architect/Shield).
- The home `PlatformShowcase` should be audited for the same gap.

**Do this:**
1. `ProductsIndex` must **map over `getAllProducts()`** (the registry) instead of a hardcoded array. Adding a product to the registry should make it appear on the hub automatically — that's what the registry is for.
2. Fix `/products` metadata + JSON-LD: "Five drop-in plugins," list all five (Engine, Pulse, Media, Architect, Shield). Decide whether **Portal** belongs in the *plugin* list or is presented separately as the cloud layer (recommended: Portal is the hub/management layer, shown distinctly, not as a 5th plugin).
3. Audit the home `PlatformShowcase` and the nav/footer for the same — every surface that lists products should derive from the registry, never a hardcoded subset.
4. If a product isn't ready to show, use the registry's `hidden` flag — don't omit it by hardcoding. That keeps a single source of truth.

---

## Priority 3 — Fix Engine's positioning (it's selling itself short)

**Problem:** the site frames Engine as a **"static cache plugin · 22ms TTFB"** (see `/products` JSON-LD and Engine metadata). That puts it head-to-head with LiteSpeed Cache (free) and WP Rocket — a fight it loses as the unknown newcomer.

**Engine's real, defensible moat is "static + INVISIBLE WordPress":** Ghost Protocol strips the WordPress fingerprint so vulnerability scanners and tools like Wappalyzer can't identify WordPress — letting corporate sites pass security audits **without** a full headless rebuild. No cache plugin does this. (The plugin now ships a measurable **Stealth Score** that proves it — use it.)

**Do this:**
1. Lead Engine's hero + metadata + hub blurb with the invisibility/security angle, not "cache." Suggested H1 direction: *"Make WordPress fast — and invisible."* Sub: *"Static-speed delivery plus Ghost Protocol: your site stops looking like WordPress to scanners and bots. No headless rebuild."*
2. Keep speed as a supporting proof point (the 22ms TTFB metric), not the headline.
3. Promote the existing `SecurityGhost` section higher on the Engine page, and add a **Stealth Score** visual (the plugin produces a 0–100 score + "Wappalyzer no longer detects WordPress" — this is the demo that closes). Ask the plugin team for a screenshot/asset.
4. Keep all claims honest: Engine **minifies + deduplicates** inline CSS (real) — do NOT claim "removes unused CSS" (not implemented). Match the site copy to what each plugin actually does.

---

## Priority 4 — Reinforce the "house" story (cross-sell is your edge)

Your moat as a house is that the products **reinforce each other** — competitors are single vendors. Make that visible:
- On each product page, the **RelatedProducts** section should surface the natural pairings:
  Engine + Media (lighter mirror), Engine + Shield (invisible + defended), Engine + Architect (clean build → clean static), Pulse + all (SEO ties to outcomes). Use the registry's `relatedSlugs`.
- Add a home-page or products-hub line about **"one vendor, one dashboard (Portal), one bill — built to work together,"** vs juggling Wordfence + WP Rocket + Smush + Yoast + Elementor across 5 vendors. That bundle story is something single-plugin competitors can't tell.

---

## What's already good — keep it
- Home section flow (promise → who → suite → proof → features → works-with → start → social → trust → insights → CTA) is correct; don't reorder.
- Brand identity (`#050B25` dark + blue/purple gradient) is cohesive and matches the plugin admin UIs. Protect this consistency.
- SEO infra (canonical, OG, JSON-LD, keywords) is real and well done.
- The `src/data/products` registry architecture is exactly right — the fixes above are mostly about USING it consistently instead of hardcoding.

---

## Suggested order of work
1. Complete the 3 thin product data files (Media, Architect, Shield) to Engine-level depth.
2. Unify the product-page template; migrate the thin pages onto `[slug]`.
3. Make `ProductsIndex` + hub metadata + nav derive from the registry (all 5).
4. Reposition Engine (copy + Stealth Score asset).
5. Wire RelatedProducts + the house/bundle messaging.

Each is independently shippable; do them in this order so the structural consistency lands before the polish.
