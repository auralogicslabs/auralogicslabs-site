import type { Metadata } from 'next';
import Link from 'next/link';
import { BookOpen, Download, Mail, MessageSquarePlus, LifeBuoy, ArrowUpRight } from 'lucide-react';
import { MarketingLayout } from '@/components/layout/MarketingLayout';
import { PageHero } from '@/components/marketing/PageHero';
import { Section } from '@/components/product/Section';
import { getAllProducts } from '@/data/products';

export const metadata: Metadata = {
  title: 'Support | Auralogics Labs',
  description:
    'Get help with the Nexora suite, documentation, downloads, per-product support, bug reports and feature requests. We’re here to help you get the most from your WordPress plugins.',
  alternates: { canonical: '/support' },
  openGraph: {
    title: 'Support | Auralogics Labs',
    description: 'Documentation, downloads, per-product support and feature requests for the Nexora suite.',
    url: 'https://auralogicslabs.com/support',
    type: 'website',
  },
};

const channels = [
  { icon: BookOpen, title: 'Documentation', desc: 'Setup guides, configuration and troubleshooting for every product.', href: '/docs' },
  { icon: Download, title: 'Downloads', desc: 'Latest stable releases, version history and compatibility details.', href: '/downloads' },
  { icon: Mail, title: 'Contact us', desc: 'Reach the team directly for account, billing or technical questions.', href: '/contact' },
  { icon: MessageSquarePlus, title: 'Request a feature', desc: 'Tell us what to build next, we read every request.', href: '/nexora-engine/feature-request' },
];

export default function SupportPage() {
  const products = getAllProducts();

  return (
    <MarketingLayout>
        <PageHero
          eyebrow="Support"
          icon={LifeBuoy}
          title="How can we help?"
          description="Everything you need to install, configure and get the most from the Nexora suite, plus a direct line to the team when you need a hand."
        />

        <Section eyebrow="Get help" title="Support channels">
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            {channels.map((c) => {
              const Icon = c.icon;
              return (
                <Link
                  key={c.title}
                  href={c.href}
                  className="group flex items-start gap-4 rounded-card border border-border bg-bg p-6 shadow-card transition-all hover:-translate-y-0.5 hover:shadow-hover"
                >
                  <div className="flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-lg bg-brand-tint">
                    <Icon className="h-5 w-5 text-brand" />
                  </div>
                  <div className="flex-1">
                    <h3 className="flex items-center gap-1 text-[16px] font-bold text-obsidian">
                      {c.title}
                      <ArrowUpRight className="h-4 w-4 text-text-muted transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                    </h3>
                    <p className="mt-1 text-[14px] leading-relaxed text-text-secondary">{c.desc}</p>
                  </div>
                </Link>
              );
            })}
          </div>
        </Section>

        <Section eyebrow="By product" title="Product support" muted>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {products.map((p) => {
              const Icon = p.icon;
              return (
                <div key={p.slug} className="rounded-card border border-border bg-bg p-6 shadow-card">
                  <div className="flex items-center gap-3">
                    <div
                      className="flex h-10 w-10 items-center justify-center rounded-lg"
                      style={{ background: `${p.accent}12`, border: `1.5px solid ${p.accent}25` }}
                    >
                      <Icon className="h-5 w-5" style={{ color: p.accent }} />
                    </div>
                    <h3 className="text-[15px] font-bold text-obsidian">{p.name}</h3>
                  </div>
                  <div className="mt-4 flex flex-wrap gap-2 text-[13px] font-semibold">
                    <Link href={`/products/${p.slug}`} className="rounded-full border border-border px-3 py-1.5 text-obsidian transition-colors hover:bg-surface-soft">
                      Overview
                    </Link>
                    {p.links?.docs && (
                      <Link href={p.links.docs} className="rounded-full border border-border px-3 py-1.5 text-obsidian transition-colors hover:bg-surface-soft">
                        Docs
                      </Link>
                    )}
                    {p.links?.support && (
                      <Link href={p.links.support} className="rounded-full border border-border px-3 py-1.5 text-obsidian transition-colors hover:bg-surface-soft">
                        Get support
                      </Link>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </Section>
    </MarketingLayout>
  );
}
