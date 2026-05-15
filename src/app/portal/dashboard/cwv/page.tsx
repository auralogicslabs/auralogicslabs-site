"use client";
import IntelligenceModule from "@/components/portal/IntelligenceModule";
import { Activity } from "lucide-react";

export default function CWVPage() {
  return (
    <IntelligenceModule 
      title="Core Web Vitals" 
      subtitle="Real-user monitoring (RUM) and field data analysis for your WordPress nodes."
      icon={Activity}
    />
  );
}
