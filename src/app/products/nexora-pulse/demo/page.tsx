import type { Metadata } from "next";
import { MarketingLayout } from "@/components/layout/MarketingLayout";
import { ProductDemoTour, type DemoStep } from "@/components/marketing/ProductDemoTour";

const ACCENT = "#13716A";
const SHOT = (n: number) => `/screenshots/docs/nexora-pulse/screenshot-${n}.png`;

export const metadata: Metadata = {
  title: "Nexora Pulse Demo | Interactive Product Tour",
  description:
    "Walk through the Nexora Pulse SEO console: the health overview, SEO Analyzer, Index Doctor, Neural Links graph, Google intelligence, compatibility, and integrations, using the real plugin UI.",
  alternates: { canonical: "/products/nexora-pulse/demo" },
};

const steps: DemoStep[] = [
  {
    label: "Health Overview",
    title: "Your SEO health, on one screen",
    description:
      "The dashboard opens on the Oxygen Score, issues grouped by severity, and the Google data sources you have connected, so you always know where you stand and what to fix first.",
    image: SHOT(1),
    alt: "Nexora Pulse dashboard with Oxygen Score, issues by severity, and connected Google data",
  },
  {
    label: "SEO Analyzer",
    title: "Every page scored, every issue explained",
    description:
      "The SEO Analyzer scores each page and turns the result into a prioritized checklist, every issue comes with a plain-language explanation of why it matters and what to change.",
    image: SHOT(2),
    alt: "Nexora Pulse SEO Analyzer scoring a page and listing fixable issues",
  },
  {
    label: "Index Doctor",
    title: "Real Google indexing verdicts",
    description:
      "Index Doctor maps each URL to its live Google Search Console status, indexed, crawled-not-indexed, excluded, and detects systemic patterns across pages. No more guessing from sitemap pings.",
    image: SHOT(3),
    alt: "Nexora Pulse Index Doctor showing Google Search Console indexing verdicts",
  },
  {
    label: "Neural Links",
    title: "See your internal link graph",
    description:
      "The Neural Link graph maps how your pages connect and surfaces orphan pages and broken links visually, issues that quietly suppress rankings.",
    image: SHOT(4),
    alt: "Nexora Pulse Neural Link graph mapping internal links, orphans, and broken links",
  },
  {
    label: "Opportunities",
    title: "Where a small change moves traffic",
    description:
      "Pulse pairs your connected Google data with a prioritized list of opportunities, the queries and pages where a small change is most likely to move real traffic.",
    image: SHOT(5),
    alt: "Nexora Pulse Google intelligence screen with prioritized optimization opportunities",
  },
  {
    label: "Compatibility",
    title: "Safe next to Yoast, Rank Math & more",
    description:
      "The Compatibility Center detects other SEO plugins and confirms Pulse runs in analysis-only mode, full diagnostics, with no duplicate meta tags.",
    image: SHOT(6),
    alt: "Nexora Pulse Migration & Compatibility Center detecting other SEO plugins",
  },
  {
    label: "Integrations",
    title: "Your Google account, your data",
    description:
      "Connect Google Search Console and PageSpeed Insights with your own Google account. No SEO or performance data is ever routed through Auralogics.",
    image: SHOT(7),
    alt: "Nexora Pulse Integrations screen for connecting Google Search Console and PageSpeed",
  },
];

export default function NexoraPulseDemoPage() {
  return (
    <MarketingLayout className="bg-bg">
      <ProductDemoTour
        productName="Nexora Pulse"
        accent={ACCENT}
        headline="See Nexora Pulse in action"
        subhead="Take a click-through tour of the free SEO operations console: real Google verdicts, an internal-link graph, and prioritized fixes, all inside WordPress, safe alongside your existing SEO plugin."
        steps={steps}
        primaryCta={{ label: "Get It Free on WordPress.org", href: "https://wordpress.org/plugins/nexora-pulse", external: true }}
        secondaryCta={{ label: "Read the docs", href: "/docs/nexora-pulse/getting-started" }}
      />
    </MarketingLayout>
  );
}
