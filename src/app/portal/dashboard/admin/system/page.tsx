"use client";

import IntelligenceModule from "@/components/portal/IntelligenceModule";
import { BarChart3 } from "lucide-react";
import { useAuth } from "@/context/AuthContext";
import { redirect } from "next/navigation";
import { useEffect } from "react";

export default function SystemMetricsPage() {
  const { user } = useAuth();

  useEffect(() => {
    if (user?.role !== 'super_admin') {
      redirect('/portal/dashboard');
    }
  }, [user]);

  if (user?.role !== 'super_admin') return null;

  return (
    <IntelligenceModule 
      title="Platform Metrics" 
      subtitle="Aggregate performance telemetry and global infrastructure health statistics."
      icon={BarChart3}
      status="Aggregating Cluster Data..."
    />
  );
}
