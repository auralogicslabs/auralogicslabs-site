"use client";
import IntelligenceModule from "@/components/portal/IntelligenceModule";
import { Shield } from "lucide-react";

export default function DiagnosticsPage() {
  return (
    <IntelligenceModule 
      title="System Diagnostics" 
      subtitle="Deep-packet inspection and edge-protocol verification logs."
      icon={Shield}
    />
  );
}
