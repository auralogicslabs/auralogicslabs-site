"use client";

import { useEffect, useState } from "react";
import { useRouter, usePathname } from "next/navigation";
import { motion, AnimatePresence } from "motion/react";
import { Loader2, ShieldCheck } from "lucide-react";
import { useAuth } from "@/context/AuthContext";
import { Sidebar } from "@/components/portal/Sidebar";
import { Header } from "@/components/portal/Header";
import Script from "next/script";

/**
 * PORTAL DASHBOARD ARCHITECTURE
 * 
 * Provides the primary SaaS Command Center shell.
 * Includes: Auth Route Guard, Global Layout, Sidebar, and Header.
 */

export default function PortalDashboardLayout({ children }: { children: React.ReactNode }) {
  const { isAuthenticated, isLoading, isDemoMode } = useAuth();
  const [isClient, setIsClient] = useState(false);
  const router   = useRouter();
  const pathname = usePathname();

  useEffect(() => {
    setIsClient(true);
  }, []);

  useEffect(() => {
    if (isClient && !isLoading && !isAuthenticated) {
      router.push('/portal');
    }
  }, [isClient, isLoading, isAuthenticated, router]);

  // Prevent hydration mismatch and flicker
  if (!isClient || isLoading) {
    return (
      <div className="min-h-screen bg-[#020617] flex items-center justify-center">
        <div className="text-center">
          <Loader2 className="h-10 w-10 text-brand animate-spin mx-auto mb-6" />
          <p className="text-white/40 font-mono text-[11px] uppercase tracking-[0.3em]">Establishing Secure Connection</p>
        </div>
      </div>
    );
  }

  // Final Auth Check
  if (!isAuthenticated) return null;

  return (
    <div className="min-h-screen bg-[#F8FAFF] flex">
      {/* SaaS Sidebar */}
      <Sidebar />

      {/* Main Orchestration Area */}
      <div className="flex-1 ml-72 flex flex-col min-h-screen">
        <Header />
        
        {/* Portal Page Body */}
        <main className="flex-1 p-12 relative">
          {/* Demo Mode Persistence Indicator */}
          {isDemoMode && (
            <motion.div 
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="mb-8 bg-brand/5 border border-brand/10 rounded-2xl p-4 px-6 flex items-center justify-between"
            >
              <div className="flex items-center gap-3">
                <ShieldCheck size={16} className="text-brand" />
                <span className="text-[13px] font-bold text-obsidian tracking-tight">
                  Preview Mode Active. <span className="text-text-muted font-medium">Data shown is for demonstration purposes only.</span>
                </span>
              </div>
              <button className="text-[11px] font-black text-brand uppercase tracking-widest hover:underline">
                Create Account
              </button>
            </motion.div>
          )}

          <AnimatePresence mode="wait">
            <motion.div
              key={pathname}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
            >
              {children}
            </motion.div>
          </AnimatePresence>
        </main>

        <footer className="p-8 border-t border-border flex justify-between items-center bg-white/50 backdrop-blur-sm">
           <p className="text-[11px] text-text-muted font-medium">© 2026 Auralogics Labs. Infrastructure Intelligence Platform.</p>
           <div className="flex gap-6">
              <a href="/nexora-engine/docs" className="text-[11px] text-text-muted hover:text-brand font-bold uppercase tracking-widest transition-colors">Documentation</a>
              <a href="/nexora-engine/support" className="text-[11px] text-text-muted hover:text-brand font-bold uppercase tracking-widest transition-colors">Support</a>
           </div>
        </footer>
      </div>
    </div>
  );
}
