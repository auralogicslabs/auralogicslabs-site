import type { Metadata } from "next";
import { MarketingLayout } from "@/components/layout/MarketingLayout";
import { DemoHub } from "@/components/sections/demo/DemoHub";

export const metadata: Metadata = {
  title: "Live Demos | See the Nexora Suite in Action",
  description:
    "Click-through demos of the Nexora suite for WordPress, Engine, Media, and Pulse, using the real plugin UI. No signup, no sandbox account. Try each product before you install.",
  alternates: { canonical: "/demo" },
  openGraph: {
    title: "Live Demos | See the Nexora Suite in Action",
    description:
      "Interactive tours of every live Nexora plugin, static delivery, image optimization, and SEO, using the real admin UI.",
    url: "https://auralogicslabs.com/demo",
    type: "website",
  },
};

export default function DemoHubPage() {
  return (
    <MarketingLayout className="bg-bg">
      <DemoHub />
    </MarketingLayout>
  );
}
