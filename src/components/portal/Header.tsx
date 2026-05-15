"use client";

import { motion, AnimatePresence } from "motion/react";
import { 
  Search, 
  Bell, 
  Activity, 
  Plus, 
  Settings, 
  HelpCircle,
  ExternalLink,
  ChevronDown,
  Command,
  Clock,
  Zap,
  ShieldCheck,
  CheckCircle2,
  FileText,
  LifeBuoy,
  MessageSquare,
  BookOpen
} from "lucide-react";
import { useAuth } from "@/context/AuthContext";
import { useInfrastructure } from "@/context/InfrastructureStore";
import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import { SearchModal } from "./SearchModal";

export function Header() {
  const { user } = useAuth();
  const { sites } = useInfrastructure();
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<null | 'notifications' | 'help' | 'profile'>(null);
  
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setActiveDropdown(null);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const notifications = [
    { title: "Infrastructure Synchronized", time: "2m ago", type: "success", icon: CheckCircle2 },
    { title: "New Edge Cache Purge", time: "15m ago", type: "info", icon: Zap },
    { title: "Unauthorized Handshake Attempt", time: "1h ago", type: "warning", icon: ShieldCheck },
  ];

  return (
    <>
      <header className="h-20 bg-white border-b border-border px-12 flex items-center justify-between sticky top-0 z-30">
        <div className="flex items-center gap-6">
          <div className="flex items-center gap-4">
             <h2 className="text-[16px] font-black text-obsidian uppercase tracking-tight">Infrastructure Control</h2>
             <div className="h-4 w-px bg-border" />
             <div className="flex items-center gap-2">
                <span className="text-[11px] text-text-muted font-bold uppercase tracking-widest">Active Fleet:</span>
                <span className="text-[12px] text-obsidian font-black">{sites.length} Nodes</span>
             </div>
          </div>
        </div>

        <div className="flex items-center gap-6" ref={dropdownRef}>
          {/* Global Command Search */}
          <button 
            onClick={() => setIsSearchOpen(true)}
            className="flex items-center gap-4 bg-surface-soft border border-border rounded-xl px-5 py-2.5 group hover:border-brand transition-all text-left"
          >
             <Search className="text-text-muted group-hover:text-brand transition-colors" size={16} />
             <span className="text-[13px] font-medium text-text-muted/50 w-48">Search nodes, logs...</span>
             <div className="flex items-center gap-1.5 px-1.5 py-0.5 bg-white border border-border rounded-lg text-[9px] font-black text-text-muted">
                <Command size={10} /> K
             </div>
          </button>

          <div className="flex items-center gap-3 relative">
            {/* Notifications */}
            <div className="relative">
              <button 
                onClick={() => setActiveDropdown(activeDropdown === 'notifications' ? null : 'notifications')}
                className={`relative p-2.5 rounded-xl transition-all border ${
                activeDropdown === 'notifications' ? 'bg-white border-brand text-brand' : 'bg-surface-soft border-transparent text-obsidian hover:bg-white hover:border-border'
              }`}>
                 <Bell size={18} />
                 <div className="absolute top-2 right-2 h-2 w-2 bg-brand rounded-full border-2 border-white" />
              </button>
              
              <AnimatePresence>
                {activeDropdown === 'notifications' && (
                  <motion.div 
                    initial={{ opacity: 0, scale: 0.95, y: 10 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.95, y: 10 }}
                    className="absolute right-0 mt-4 w-80 bg-white border border-border rounded-[32px] shadow-2xl z-50 overflow-hidden"
                  >
                    <div className="p-6 border-b border-border">
                      <div className="flex items-center justify-between">
                        <h3 className="text-[15px] font-black text-obsidian">Fleet Notifications</h3>
                        <span className="text-[10px] font-black text-brand uppercase tracking-widest bg-brand/5 px-2 py-1 rounded-full">3 New</span>
                      </div>
                    </div>
                    <div className="p-3">
                      {notifications.map((n, i) => (
                        <div key={i} className="flex items-start gap-4 p-4 rounded-2xl hover:bg-surface-soft transition-colors cursor-pointer group">
                           <div className="h-10 w-10 rounded-xl bg-obsidian/5 flex items-center justify-center flex-shrink-0 group-hover:bg-brand/10 transition-colors">
                              <n.icon size={18} className="text-obsidian group-hover:text-brand" />
                           </div>
                           <div>
                              <div className="text-[13px] font-bold text-obsidian leading-tight mb-1">{n.title}</div>
                              <div className="flex items-center gap-2 text-[10px] text-text-muted font-bold">
                                 <Clock size={10} /> {n.time}
                              </div>
                           </div>
                        </div>
                      ))}
                    </div>
                    <div className="p-4 bg-surface-soft text-center">
                       <button className="text-[11px] font-black text-brand uppercase tracking-widest hover:underline">View All Intelligence Logs</button>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
            
            {/* Help & Support */}
            <div className="relative">
              <button 
                onClick={() => setActiveDropdown(activeDropdown === 'help' ? null : 'help')}
                className={`p-2.5 rounded-xl transition-all border ${
                activeDropdown === 'help' ? 'bg-white border-brand text-brand' : 'bg-surface-soft border-transparent text-obsidian hover:bg-white hover:border-border'
              }`}>
                 <HelpCircle size={18} />
              </button>

              <AnimatePresence>
                {activeDropdown === 'help' && (
                  <motion.div 
                    initial={{ opacity: 0, scale: 0.95, y: 10 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.95, y: 10 }}
                    className="absolute right-0 mt-4 w-64 bg-white border border-border rounded-[32px] shadow-2xl z-50 overflow-hidden"
                  >
                    <div className="p-6 border-b border-border">
                       <h3 className="text-[15px] font-black text-obsidian">Assistance</h3>
                    </div>
                    <div className="p-2 space-y-1">
                       <a href="#" className="flex items-center gap-3 px-4 py-3 text-[13px] font-bold text-obsidian hover:bg-surface-soft rounded-2xl transition-all">
                          <BookOpen size={16} className="text-brand" /> Documentation
                       </a>
                       <a href="#" className="flex items-center gap-3 px-4 py-3 text-[13px] font-bold text-obsidian hover:bg-surface-soft rounded-2xl transition-all">
                          <MessageSquare size={16} className="text-brand" /> Live Support
                       </a>
                       <a href="#" className="flex items-center gap-3 px-4 py-3 text-[13px] font-bold text-obsidian hover:bg-surface-soft rounded-2xl transition-all">
                          <LifeBuoy size={16} className="text-brand" /> System Status
                       </a>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>

          <div className="h-8 w-px bg-border mx-2" />

          {/* Identity & Account */}
          <div 
            onClick={() => setActiveDropdown(activeDropdown === 'profile' ? null : 'profile')}
            className="flex items-center gap-4 group cursor-pointer relative"
          >
             <div className="text-right hidden sm:block">
                <div className="text-[13px] font-black text-obsidian leading-none mb-1">{user?.name || "Initializing..."}</div>
                <div className="text-[10px] text-brand font-black uppercase tracking-widest">{user?.role || "SYSTEM"}</div>
             </div>
             <div className="h-11 w-11 rounded-2xl bg-[#050B25] text-white flex items-center justify-center font-black text-[15px] border-2 border-transparent group-hover:border-brand transition-all">
                {user?.name?.substring(0, 2).toUpperCase() || "NC"}
             </div>
             <ChevronDown size={14} className="text-text-muted group-hover:text-obsidian transition-colors" />

             <AnimatePresence>
                {activeDropdown === 'profile' && (
                  <motion.div 
                    initial={{ opacity: 0, scale: 0.95, y: 10 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.95, y: 10 }}
                    className="absolute right-0 top-14 w-56 bg-white border border-border rounded-2xl shadow-2xl z-50 overflow-hidden"
                  >
                    <div className="p-2 space-y-1">
                       <Link href="/portal/dashboard/settings" className="flex items-center gap-3 px-4 py-2.5 text-[13px] font-bold text-obsidian hover:bg-surface-soft rounded-xl transition-all">
                          <Settings size={14} /> Account Settings
                       </Link>
                       <Link href="/portal/dashboard/billing" className="flex items-center gap-3 px-4 py-2.5 text-[13px] font-bold text-obsidian hover:bg-surface-soft rounded-xl transition-all">
                          <FileText size={14} /> Billing Identity
                       </Link>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
          </div>
        </div>
      </header>
      
      <SearchModal isOpen={isSearchOpen} onClose={() => setIsSearchOpen(false)} />
    </>
  );
}
