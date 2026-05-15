"use client";
import IntelligenceModule from "@/components/portal/IntelligenceModule";
import { Search } from "lucide-react";

export default function SEOPage() {
  return (
    <IntelligenceModule 
      title="SEO Intelligence" 
      subtitle="Search visibility, crawl budget optimization, and semantic health."
      icon={Search}
    />
  );
}
