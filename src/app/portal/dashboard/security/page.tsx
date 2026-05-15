"use client";
import IntelligenceModule from "@/components/portal/IntelligenceModule";
import { ShieldCheck } from "lucide-react";

export default function SecurityPage() {
  return (
    <IntelligenceModule 
      title="Security Intelligence" 
      subtitle="Intrusion detection, handshake verification, and firewall telemetry."
      icon={ShieldCheck}
    />
  );
}
