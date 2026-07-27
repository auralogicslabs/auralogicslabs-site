import type { Metadata } from 'next';
import { siteContainerClass } from '@/lib/site-layout';
import { cn } from '@/lib/utils';
import { Download } from 'lucide-react';
import { MarketingLayout } from '@/components/layout/MarketingLayout';
import { PageHero } from '@/components/marketing/PageHero';
import { DownloadCard } from '@/components/product/DownloadCard';
import { getAllProducts } from '@/data/products';
import { getStableRelease } from '@/types/product';

export const metadata: Metadata = {
  title: 'Downloads | Auralogics Labs Plugin Suite',
  description:
    'Download the latest stable releases of every Auralogics Labs WordPress plugin, Nexora Engine, Pulse, Media and more. Free downloads with version history, WordPress and PHP compatibility, changelogs and documentation.',
  alternates: { canonical: '/downloads' },
  keywords: [
    'download WordPress plugins',
    'Nexora Engine download',
    'Nexora Pulse download',
    'Auralogics Labs downloads',
  ],
  openGraph: {
    title: 'Downloads | Auralogics Labs Plugin Suite',
    description:
      'Free downloads of every Auralogics Labs WordPress plugin, with version history and compatibility details.',
    url: 'https://auralogicslabs.com/downloads',
    type: 'website',
  },
};

export default function DownloadsPage() {
  const products = getAllProducts();
  // Downloadable products first, then pre-launch ones.
  const ordered = [...products].sort(
    (a, b) => Number(b.releases.length > 0) - Number(a.releases.length > 0)
  );

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    name: 'Auralogics Labs Downloads',
    url: 'https://auralogicslabs.com/downloads',
    itemListElement: products
      .filter((p) => p.releases.length > 0)
      .map((p, i) => {
        const stable = getStableRelease(p);
        return {
          '@type': 'ListItem',
          position: i + 1,
          item: {
            '@type': 'SoftwareApplication',
            name: p.name,
            applicationCategory: 'BusinessApplication',
            operatingSystem: 'WordPress',
            softwareVersion: stable?.version,
            url: `https://auralogicslabs.com/products/${p.slug}`,
            downloadUrl: `https://auralogicslabs.com/api/download/${p.slug}`,
            offers: {
              '@type': 'Offer',
              price: '0',
              priceCurrency: 'USD',
              availability: 'https://schema.org/InStock',
            },
          },
        };
      }),
  };

  return (
    <MarketingLayout>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
        <PageHero
          eyebrow="Download Center"
          icon={Download}
          title="Get the latest Auralogics Labs plugins"
          description="Every plugin is a single package, install the free build, then upgrade to Pro in place. Download the current stable release, browse version history, and check WordPress and PHP compatibility before you install."
        />

        {/* Download grid */}
        <section className="py-16">
          <div className={cn(siteContainerClass, "grid grid-cols-1 gap-6 md:grid-cols-2")}>
            {ordered.map((product) => (
              <DownloadCard key={product.slug} product={product} />
            ))}
          </div>
        </section>
    </MarketingLayout>
  );
}
