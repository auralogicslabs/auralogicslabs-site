"use client";
import IntelligenceModule from "@/components/portal/IntelligenceModule";
import { Code2 } from "lucide-react";

export default function APIPage() {
  return (
    <IntelligenceModule 
      title="API Access" 
      subtitle="Manage infrastructure keys and authenticate external delivery protocols."
      icon={Code2}
    />
  );
}
