"use client";

import { motion, AnimatePresence } from "motion/react";
import { Search, X, Command, Globe, Zap, Shield, Cpu, Terminal, FileText, ArrowRight } from "lucide-react";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";

interface SearchModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function SearchModal({ isOpen, onClose }: SearchModalProps) {
  const [query, setQuery] = useState("");
  const router = useRouter();

  const results = [
    { id: "overview", label: "Dashboard Overview", category: "Control", icon: Command, href: "/portal/dashboard" },
    { id: "sites", label: "Connected Nodes", category: "Control", icon: Globe, href: "/portal/dashboard/sites" },
    { id: "performance", label: "Performance Analytics", category: "Intelligence", icon: Zap, href: "/portal/dashboard/performance" },
    { id: "billing", label: "Plans & Billing", category: "Management", icon: FileText, href: "/portal/dashboard/billing" },
    { id: "downloads", label: "Plugin Downloads", category: "Management", icon: Terminal, href: "/portal/dashboard/downloads" },
    { id: "security", label: "Security Intelligence", category: "Intelligence", icon: Shield, href: "/portal/dashboard/security" },
    { id: "health", label: "Infrastructure Health", category: "Intelligence", icon: Cpu, href: "/portal/dashboard/health" },
  ].filter(r => r.label.toLowerCase().includes(query.toLowerCase()) || r.category.toLowerCase().includes(query.toLowerCase()));

  useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if (e.key === "k" && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        onClose();
      }
    };
    document.addEventListener("keydown", down);
    return () => document.removeEventListener("keydown", down);
  }, [onClose]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[110] flex items-start justify-center p-6 md:p-24">
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
        className="absolute inset-0 bg-obsidian/40 backdrop-blur-md"
      />
      
      <motion.div
        initial={{ opacity: 0, scale: 0.95, y: -20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.95, y: -20 }}
        className="relative w-full max-w-[640px] bg-white rounded-[32px] shadow-2xl overflow-hidden border border-border"
      >
        <div className="p-6 border-b border-border flex items-center gap-4">
           <Search className="text-text-muted" size={20} />
           <input 
             autoFocus
             type="text" 
             placeholder="Search infrastructure, telemetry, documentation..."
             className="w-full bg-transparent border-none text-[18px] font-bold text-obsidian focus:ring-0 placeholder:text-text-muted/30 outline-none"
             value={query}
             onChange={e => setQuery(e.target.value)}
           />
           <div className="flex items-center gap-2 px-2 py-1 bg-surface-soft border border-border rounded-lg text-[10px] font-black text-text-muted">
              <Command size={10} /> K
           </div>
        </div>

        <div className="max-h-[400px] overflow-y-auto p-4 custom-scrollbar">
           {results.length > 0 ? (
             <div className="space-y-2">
                {results.map((result) => (
                  <button
                    key={result.id}
                    onClick={() => {
                      router.push(result.href);
                      onClose();
                    }}
                    className="w-full flex items-center justify-between p-4 rounded-2xl hover:bg-surface-soft transition-all group text-left"
                  >
                     <div className="flex items-center gap-4">
                        <div className="h-10 w-10 bg-brand/5 rounded-xl flex items-center justify-center text-brand group-hover:bg-brand group-hover:text-white transition-all">
                           <result.icon size={18} />
                        </div>
                        <div>
                           <div className="text-[14px] font-bold text-obsidian">{result.label}</div>
                           <div className="text-[10px] font-black text-text-muted uppercase tracking-widest">{result.category}</div>
                        </div>
                     </div>
                     <ArrowRight size={16} className="text-text-muted opacity-0 group-hover:opacity-100 transition-all group-hover:translate-x-1" />
                  </button>
                ))}
             </div>
           ) : (
             <div className="py-12 text-center">
                <div className="h-16 w-16 bg-surface-soft rounded-full flex items-center justify-center mx-auto mb-4 text-text-muted">
                   <Search size={24} />
                </div>
                <p className="text-[14px] text-text-muted font-medium">No results found for "{query}"</p>
             </div>
           )}
        </div>

        <div className="p-4 bg-surface-soft border-t border-border flex items-center justify-between">
           <p className="text-[11px] text-text-muted font-medium">Tip: Use categories like 'Management' to filter results.</p>
           <button onClick={onClose} className="text-[11px] font-black text-brand uppercase tracking-widest hover:underline">Close Search</button>
        </div>
      </motion.div>
    </div>
  );
}
