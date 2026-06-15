import type { Metadata } from 'next';
import { Header } from '@/components/layout/Header';
import { PulseHero } from '@/components/sections/pulse/PulseHero';
import { PulseIndexDoctor } from '@/components/sections/pulse/PulseIndexDoctor';
import { PulseFeatures } from '@/components/sections/pulse/PulseFeatures';
import { PulseIntegrations } from '@/components/sections/pulse/PulseIntegrations';
import { PulseComparison } from '@/components/sections/pulse/PulseComparison';
import { PulseFAQ } from '@/components/sections/pulse/PulseFAQ';
import { PulseFinalCTA } from '@/components/sections/pulse/PulseFinalCTA';
import { Footer } from '@/components/layout/Footer';

export const metadata: Metadata = {
  title: 'Nexora Pulse | Free WordPress SEO Plugin | Index Doctor',
  description:
    "Diagnose why Google won't index your pages, fix on-page SEO issues, map internal links, and track Core Web Vitals — all in one free WordPress plugin. Powered by your own Google Search Console data.",
  alternates: { canonical: '/products/nexora-pulse' },
  keywords: ['free WordPress SEO plugin', 'WordPress indexing fix', 'WordPress SEO console', 'Google Search Console WordPress', 'WordPress Core Web Vitals plugin', 'WordPress index doctor', 'WordPress on-page SEO'],
  openGraph: {
    title: 'Nexora Pulse | Free WordPress SEO Plugin | Index Doctor',
    description:
      "One dashboard to diagnose indexing problems, fix on-page SEO, map internal links, and track Core Web Vitals. Free, powered by your own Google Search Console.",
    url: 'https://auralogicslabs.com/products/nexora-pulse',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Nexora Pulse | Free WordPress SEO Plugin',
    description: "Diagnose why Google won't index your pages. Free WordPress plugin powered by your own Search Console data.",
  },
};

const pulseFaqJsonLd = [
  {
    question: "Is Nexora Pulse really free?",
    answer: "Yes. Every core feature (the SEO Analyzer, Index Doctor, Neural Links, Core Web Vitals, duplicate detection, Image SEO, redirects, and sitemap) is free. Search Console and PageSpeed integrations use your own Google API credentials, so there's no metered usage and nothing to pay us for.",
  },
  {
    question: "Do I need a Google Search Console account?",
    answer: "For the Index Doctor and click/impression data, yes. You connect your own verified Search Console property. The rest of Pulse (on-page analysis, internal links, duplicates, sitemap) works without any Google connection. Pulse guides you through the one-time setup.",
  },
  {
    question: "Will it conflict with Yoast, Rank Math, or AIOSEO?",
    answer: "Pulse is built to complement your existing setup. It focuses on diagnostics and indexing intelligence rather than rewriting the meta-box workflow, so you can run it alongside your current SEO plugin. You control which head tags Pulse outputs to avoid duplication.",
  },
  {
    question: "How does the Index Doctor actually work?",
    answer: "It calls Google's URL Inspection API to get the real indexing verdict for each page, then cross-references that with Pulse's own analysis (thin content, orphan pages, duplicate signals) to explain the likely cause and surface patterns across all your rejected pages.",
  },
  {
    question: "Does Pulse send my data to your servers?",
    answer: "No. Pulse talks directly from your WordPress site to Google's APIs using your credentials. Your Search Console and PageSpeed data is stored in your own database, and credentials are encrypted at rest. We don't proxy or collect your analytics.",
  },
  {
    question: "What's coming next?",
    answer: "An AI assistant for generating and rewriting meta content, plus additional integrations like Google Analytics 4 and Bing Webmaster Tools, are on the roadmap. They're clearly marked as coming soon inside the plugin.",
  },
];

export default function NexoraPulsePage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'SoftwareApplication',
        '@id': 'https://auralogicslabs.com/products/nexora-pulse#software',
        name: 'Nexora Pulse',
        description: 'Free WordPress SEO plugin with Index Doctor, on-page analysis, internal link mapping, Core Web Vitals tracking, and Google Search Console integration.',
        applicationCategory: 'BusinessApplication',
        operatingSystem: 'WordPress',
        url: 'https://auralogicslabs.com/products/nexora-pulse',
        offers: {
          '@type': 'Offer',
          price: '0',
          priceCurrency: 'USD',
          availability: 'https://schema.org/InStock',
          url: 'https://auralogicslabs.com/products/nexora-pulse',
        },
        publisher: { '@id': 'https://auralogicslabs.com/#organization' },
        featureList: [
          'Index Doctor: real Google Search Console verdicts',
          'SEO Analyzer for on-page issues',
          'Internal link mapping (Neural Links)',
          'Core Web Vitals tracking',
          'Duplicate content detection',
          'Image SEO analysis',
          'Redirect manager',
          'XML sitemap generator',
          'Free forever — no metered usage',
        ],
      },
      {
        '@type': 'FAQPage',
        mainEntity: pulseFaqJsonLd.map((faq) => ({
          '@type': 'Question',
          name: faq.question,
          acceptedAnswer: {
            '@type': 'Answer',
            text: faq.answer,
          },
        })),
      },
      {
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://auralogicslabs.com' },
          { '@type': 'ListItem', position: 2, name: 'Products', item: 'https://auralogicslabs.com/products' },
          { '@type': 'ListItem', position: 3, name: 'Nexora Pulse', item: 'https://auralogicslabs.com/products/nexora-pulse' },
        ],
      },
    ],
  };

  return (
    <div className="min-h-screen bg-bg">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <Header />
      <main>
        <PulseHero />
        <PulseIndexDoctor />
        <PulseFeatures />
        <PulseIntegrations />
        <PulseComparison />
        <PulseFAQ />
        <PulseFinalCTA />
      </main>
      <Footer />
    </div>
  );
}
