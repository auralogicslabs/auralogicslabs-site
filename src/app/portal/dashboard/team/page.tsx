"use client";
import IntelligenceModule from "@/components/portal/IntelligenceModule";
import { Users } from "lucide-react";

export default function TeamPage() {
  return (
    <IntelligenceModule 
      title="Team & Agency" 
      subtitle="Collaborate across your infrastructure fleet with role-based access."
      icon={Users}
    />
  );
}
