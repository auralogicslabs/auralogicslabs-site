"use client";
import IntelligenceModule from "@/components/portal/IntelligenceModule";
import { RefreshCw } from "lucide-react";

export default function RedirectsPage() {
  return (
    <IntelligenceModule 
      title="Global Redirects" 
      subtitle="Edge-level 301/302 management and legacy URL mapping."
      icon={RefreshCw}
    />
  );
}
