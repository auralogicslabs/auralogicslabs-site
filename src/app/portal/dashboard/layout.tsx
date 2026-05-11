"use client";

import { motion } from "motion/react";
import { 
  LayoutDashboard, 
  Globe, 
  ShieldCheck, 
  Zap, 
  Activity, 
  Settings, 
  LogOut, 
  Plus, 
  Search, 
  Bell,
  Cpu,
  Layers,
  Database,
  ArrowUpRight,
  MoreVertical,
  CheckCircle2,
  AlertTriangle,
  Clock
} from "lucide-react";
import Link from "next/link";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";

export default function PortalLayout({ children }: { children: React.ReactNode }) {
  const [activeTab, setActiveTab] = useState("overview");
  const [isAuthorized, setIsAuthorized] = useState(false);
  const router = useRouter();

  useEffect(() => {
    // ROUTE GUARD: Ensure user is authenticated via demo/demo bypass
    const auth = sessionStorage.getItem('ncx_auth');
    if (auth !== 'active') {
      router.push('/portal');
    } else {
      setIsAuthorized(true);
    }
  }, [router]);

  const handleSignOut = () => {
    sessionStorage.removeItem('ncx_auth');
    router.push('/portal');
  };

  const sidebarLinks = [
    { id: "overview", label: "Overview", icon: LayoutDashboard },
    { id: "sites", label: "Connected Sites", icon: Globe },
    { id: "performance", label: "Global Performance", icon: Zap },
    { id: "security", label: "Ghost Protocol", icon: ShieldCheck },
    { id: "infrastructure", label: "Infrastructure", icon: Cpu },
  ];

  if (!isAuthorized) return null; // Prevents UI flicker while checking auth

  return (
    <div className="min-h-screen bg-[#F8FAFF] flex">
      {/* Sidebar */}
      <aside className="w-72 bg-[#050B25] flex flex-col border-r border-white/5 fixed h-full z-20">
        <div className="p-8 mb-4">
          <Link href="/">
             <img 
               src="/auralogicslabs.svg" 
               alt="Auralogics Labs" 
               className="h-8 w-auto brightness-0 invert" 
             />
          </Link>
        </div>

        <nav className="flex-1 px-4 space-y-1">
          {sidebarLinks.map((link) => (
            <button
              key={link.id}
              onClick={() => setActiveTab(link.id)}
              className={`w-full flex items-center gap-4 px-6 py-4 rounded-2xl text-[14px] font-bold transition-all duration-300 ${
                activeTab === link.id 
                  ? "bg-brand text-white shadow-lg" 
                  : "text-white/40 hover:text-white hover:bg-white/5"
              }`}
            >
              <link.icon size={18} />
              {link.label}
            </button>
          ))}
        </nav>

        <div className="p-6 border-t border-white/5 space-y-4">
           <div className="bg-white/5 rounded-2xl p-6 border border-white/10">
              <div className="flex items-center gap-3 mb-3">
                 <div className="h-2 w-2 rounded-full bg-brand animate-pulse" />
                 <span className="text-[10px] font-bold text-white/60 uppercase tracking-widest">Enterprise API</span>
              </div>
              <p className="text-[12px] text-white/40 font-medium leading-relaxed mb-4">You are using the Community Core version.</p>
              <button className="w-full bg-white/10 text-white py-3 rounded-xl text-[12px] font-bold hover:bg-brand transition-colors">
                 Upgrade to Pro
              </button>
           </div>
           
           <button className="w-full flex items-center gap-4 px-6 py-4 text-white/40 hover:text-white text-[14px] font-bold transition-colors">
              <Settings size={18} />
              Settings
           </button>
           <button 
             onClick={handleSignOut}
             className="w-full flex items-center gap-4 px-6 py-4 text-white/40 hover:text-[#FF4D4D] text-[14px] font-bold transition-colors"
           >
              <LogOut size={18} />
              Sign Out
           </button>
        </div>
      </aside>

      {/* Main Content Area */}
      <main className="flex-1 ml-72 min-h-screen">
        {/* Top Header */}
        <header className="h-20 bg-white border-b border-border px-12 flex items-center justify-between sticky top-0 z-10">
           <div className="flex items-center gap-4">
              <h2 className="text-[18px] font-extrabold text-obsidian uppercase tracking-tight">System Overview</h2>
              <div className="h-4 w-px bg-border" />
              <span className="text-[12px] text-text-muted font-medium">Last Global Sync: 2 mins ago</span>
           </div>

           <div className="flex items-center gap-6">
              <div className="relative group hidden md:block">
                 <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-text-muted" size={16} />
                 <input 
                   type="text" 
                   placeholder="Search infrastructure..."
                   className="bg-surface-soft border border-border rounded-xl pl-12 pr-4 py-2.5 text-[13px] font-medium focus:ring-1 focus:ring-brand w-64 transition-all"
                 />
              </div>
              <button className="relative p-2.5 bg-surface-soft rounded-xl hover:bg-white border border-transparent hover:border-border transition-all">
                 <Bell size={18} className="text-obsidian" />
                 <div className="absolute top-2 right-2 h-2 w-2 bg-brand rounded-full border-2 border-white" />
              </button>
              <div className="flex items-center gap-4 ml-4 group cursor-pointer">
                 <div className="h-10 w-10 rounded-xl bg-obsidian text-white flex items-center justify-center font-bold text-[14px]">
                    NC
                 </div>
                 <div className="hidden lg:block text-right">
                    <div className="text-[13px] font-bold text-obsidian">Nexora Core</div>
                    <div className="text-[11px] text-text-muted font-bold uppercase tracking-widest">Alpha Node 01</div>
                 </div>
              </div>
           </div>
        </header>

        {/* Page Body */}
        <div className="p-12">
          {children}
        </div>
      </main>
    </div>
  );
}
