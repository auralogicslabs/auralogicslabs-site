import type { Metadata } from "next";
import { MarketingLayout } from "@/components/layout/MarketingLayout";
import { ProductDemoTour, type DemoStep } from "@/components/marketing/ProductDemoTour";

const ACCENT = "#059669";
const SHOT = (n: number) => `/screenshots/docs/nexora-media/screenshot-${n}.png`;

export const metadata: Metadata = {
  title: "Nexora Media Demo | Interactive Product Tour",
  description:
    "Walk through the Nexora Media admin: dashboard, per-image library controls, builder-safe delivery, the Nexora Engine bridge, roadmap, and diagnostics, using the real plugin UI.",
  alternates: { canonical: "/products/nexora-media/demo" },
};

const steps: DemoStep[] = [
  {
    label: "Dashboard",
    title: "Everything at a glance",
    description:
      "The dashboard shows your library stats, cumulative space saved, the live optimization pipeline, and whether Nexora Media is connected to Nexora Engine, all on one screen.",
    image: SHOT(1),
    alt: "Nexora Media dashboard with library stats, space saved, and optimization pipeline",
  },
  {
    label: "Media Library",
    title: "Per-image control, right in the library",
    description:
      "Every image gets a status card showing its optimization state and exact savings, plus a one-click “use original” toggle for anything that must never be swapped.",
    image: SHOT(2),
    alt: "Nexora Media library cards showing status, savings, and use-original toggle",
  },
  {
    label: "Safe Delivery",
    title: "Builder-safe by default",
    description:
      "Safe and advanced settings are clearly separated. Out of the box, editors, builder previews, lightboxes, and heroes are left untouched, only smaller variants are served to public visitors.",
    image: SHOT(3),
    alt: "Nexora Media frontend delivery settings separating safe and advanced options",
  },
  {
    label: "Engine Bridge",
    title: "Stays in sync with your static mirror",
    description:
      "When Nexora Engine is installed, the bridge lights up automatically so optimized images are reflected in your pre-rendered static pages, no manual coordination between the two plugins.",
    image: SHOT(4),
    alt: "Nexora Media Engine Bridge screen showing automatic SSG integration",
  },
  {
    label: "Diagnostic",
    title: "Plain answers when something looks off",
    description:
      "The diagnostic screen reports server capabilities, queue health, and a structured error log, so troubleshooting starts with facts instead of guesswork.",
    image: SHOT(6),
    alt: "Nexora Media diagnostic screen with server capabilities, queue health, and error log",
  },
  {
    label: "Roadmap",
    title: "Built in the open",
    description:
      "A public roadmap ships right inside the plugin, so you can always see what we are building next and what we are still researching.",
    image: SHOT(5),
    alt: "Nexora Media roadmap screen showing planned and researched features",
  },
];

export default function NexoraMediaDemoPage() {
  return (
    <MarketingLayout className="bg-bg">
      <ProductDemoTour
        productName="Nexora Media"
        accent={ACCENT}
        headline="See Nexora Media in action"
        subhead="Take a click-through tour of the real plugin: safe AVIF and WebP optimization that shrinks images up to 70% without ever breaking your page builder."
        steps={steps}
        primaryCta={{ label: "Get It Free on WordPress.org", href: "https://wordpress.org/plugins/nexora-media", external: true }}
        secondaryCta={{ label: "Read the docs", href: "/docs/nexora-media/getting-started" }}
      />
    </MarketingLayout>
  );
}
