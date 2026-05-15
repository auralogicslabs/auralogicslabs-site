"use client";
import IntelligenceModule from "@/components/portal/IntelligenceModule";
import { Bell } from "lucide-react";

export default function NotificationsPage() {
  return (
    <IntelligenceModule 
      title="System Notifications" 
      subtitle="Complete history of infrastructure events and system alerts."
      icon={Bell}
    />
  );
}
