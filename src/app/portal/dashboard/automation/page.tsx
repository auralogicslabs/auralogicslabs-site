"use client";
import IntelligenceModule from "@/components/portal/IntelligenceModule";
import { Terminal } from "lucide-react";

export default function AutomationPage() {
  return (
    <IntelligenceModule 
      title="Command Center" 
      subtitle="Automated infrastructure workflows and remote terminal actions."
      icon={Terminal}
    />
  );
}
