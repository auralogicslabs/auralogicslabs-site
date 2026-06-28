# Auralogics Labs Social Assets

These files carry the same brand context as the website: Auralogics Labs builds focused Nexora tools for WordPress performance, SEO diagnostics, media optimisation, and future platform coverage.

## Files

| File | Size | Use |
| --- | ---: | --- |
| `auralogics-linkedin-banner.png` | 1584 x 396 | LinkedIn personal/profile background banner |
| `auralogics-linkedin-company-banner.png` | 1128 x 191 | LinkedIn company page cover banner |
| `auralogics-linkedin-banner-dark.png` | 1584 x 396 | Dark LinkedIn profile banner with logo/avatar-safe left area |
| `auralogics-linkedin-company-banner-dark.png` | 1128 x 191 | Dark LinkedIn company banner with logo/avatar-safe left area |
| `auralogics-linkedin-banner-option-01-ai-wave.png` | 1584 x 396 | LinkedIn profile option inspired by luminous AI-infrastructure waves |
| `auralogics-linkedin-company-banner-option-01-ai-wave.png` | 1128 x 191 | Company cover version of option 01 |
| `auralogics-linkedin-banner-option-02-data-gradient.png` | 1584 x 396 | LinkedIn profile option with data-gradient rings |
| `auralogics-linkedin-company-banner-option-02-data-gradient.png` | 1128 x 191 | Company cover version of option 02 |
| `auralogics-linkedin-banner-option-03-blueprint.png` | 1584 x 396 | LinkedIn profile option with bold blue blueprint styling |
| `auralogics-linkedin-company-banner-option-03-blueprint.png` | 1128 x 191 | Company cover version of option 03 |
| `auralogics-linkedin-banner-option-04-systems-map.png` | 1584 x 396 | LinkedIn profile option with light analytics/workflow illustration |
| `auralogics-linkedin-company-banner-option-04-systems-map.png` | 1128 x 191 | Company cover version of option 04 |
| `auralogics-og.png` | 1200 x 630 | Open Graph share image |
| `auralogics-twitter.png` | 1200 x 630 | Twitter/X large summary card image |
| `auralogics-social-background.png` | 1998 x 787 | Generated source background for regeneration |
| `auralogics-social-background-dark.png` | 1998 x 787 | Generated dark source background for LinkedIn and post OG variants |
| `auralogics-linkedin-bg-*.png` | source | Generated source backgrounds for the LinkedIn option set |
| `insights/*.png` | 1200 x 630 | Per-post OG/Twitter images generated from `src/data/blog.ts` |

## Regenerate

Run:

```bash
npm run social:assets
```

The generator also syncs the canonical OG and Twitter images into `src/app/opengraph-image.png` and `src/app/twitter-image.png` for the Next.js file-based metadata convention.
It also creates one image per article in `public/social/insights/` and the article metadata points social crawlers at those PNG files.

## Source Prompt

Premium corporate technology background for Auralogics Labs with no words, no logos, and no watermark. Bright white and light slate surface, abstract modular platform layers, thin technical grid lines, data-flow arcs, and clean interface-like panels in perspective. More visual detail on the right, generous negative space on the left. Palette: white, light slate, deep slate, #1A3FD8, #60A5FA, and restrained #F59E0B. Avoid people, devices, fake UI labels, social icons, dark backgrounds, purple gradients, and clutter.

Dark source: premium dark corporate technology background with no words, no logos, and no watermark. Deep navy/obsidian surface, subtle technical grid, data-flow paths, abstract platform modules, SEO/performance/media signal motifs, restrained amber accent, and a calm left safe area for LinkedIn logo/avatar placement.

LinkedIn option sources were generated as text-free background images based on four directions: dark AI wave, data-gradient rings, blue blueprint, and light analytics/workflow illustration. All final option banners reserve the left logo/avatar area because LinkedIn adds the page/profile logo separately.
