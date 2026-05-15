"use client";

import IntelligenceModule from "@/components/portal/IntelligenceModule";
import { FileText } from "lucide-react";
import { useAuth } from "@/context/AuthContext";
import { redirect } from "next/navigation";
import { useEffect } from "react";

export default function UserDiagnosticsPage() {
  const { user } = useAuth();

  useEffect(() => {
    if (user?.role !== 'super_admin') {
      redirect('/portal/dashboard');
    }
  }, [user]);

  if (user?.role !== 'super_admin') return null;

  return (
    <IntelligenceModule 
      title="User Diagnostics" 
      subtitle="High-level audit logs and identity verification history for platform users."
      icon={FileText}
      status="Parsing Identity Logs..."
    />
  );
}
