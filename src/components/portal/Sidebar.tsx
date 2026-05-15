"use client";

import {
  LayoutDashboard, Globe, Zap, Cpu, Settings, LogOut,
  Box, Layers, LifeBuoy, Users, Ticket
} from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useAuth } from "@/context/AuthContext";
import { useInfrastructure } from "@/context/InfrastructureStore";

export function Sidebar() {
  const pathname = usePathname();
  const { logout, user } = useAuth();
  const { sites } = useInfrastructure();

  const isSuperAdmin = user?.role === 'super_admin';
  const hasSites     = sites.length > 0;

  const navigation = [
    ...(isSuperAdmin ? [{
      group: 'Admin Control',
      items: [
        { label: 'User Registry', icon: Users,  href: '/portal/dashboard/admin/users' },
        { label: 'Global Fleet',  icon: Globe,  href: '/portal/dashboard/admin/fleet' },
        { label: 'Support Desk',  icon: Ticket, href: '/portal/dashboard/admin/tickets' },
      ],
    }] : []),
    {
      group: 'Workspace',
      items: [
        { label: 'Dashboard',                              icon: LayoutDashboard, href: '/portal/dashboard' },
        { label: isSuperAdmin ? 'Fleet View' : 'My Sites', icon: Globe,           href: '/portal/dashboard/sites' },
      ],
    },
    ...(hasSites && !isSuperAdmin ? [{
      group: 'Analytics',
      items: [
        { label: 'Performance', icon: Zap, href: '/portal/dashboard/performance' },
        { label: 'Site Health', icon: Cpu, href: '/portal/dashboard/health' },
      ],
    }] : []),
    {
      group: 'Plugin Hub',
      items: [
        { label: 'Downloads', icon: Box, href: '/portal/dashboard/downloads' },
        ...(!isSuperAdmin ? [{ label: 'Subscription Center', icon: Layers, href: '/portal/dashboard/subscription' }] : []),
      ],
    },
    {
      group: 'Account',
      items: [
        { label: 'Support',  icon: LifeBuoy, href: '/portal/dashboard/support' },
        { label: 'Settings', icon: Settings, href: '/portal/dashboard/settings' },
      ],
    },
  ];

  return (
    <aside className="w-72 bg-[#050B25] flex flex-col border-r border-white/5 fixed h-full z-20">
      <div className="p-8 mb-4">
        <Link href="/">
          <img src="/auralogicslabs.svg" alt="Auralogics Labs" className="h-8 w-auto brightness-0 invert" />
        </Link>
      </div>

      <nav className="flex-1 px-4 overflow-y-auto pb-8">
        {navigation.map(group => (
          <div key={group.group} className="mb-6">
            <h3 className={`px-6 mb-2 text-[10px] font-black uppercase tracking-[0.2em] ${
              group.group === 'Admin' ? 'text-brand/70' : 'text-white/20'
            }`}>
              {group.group}
            </h3>
            <div className="space-y-0.5">
              {group.items.map(item => {
                const isActive = pathname === item.href;
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={`flex items-center gap-3.5 px-6 py-3 rounded-xl text-[13px] font-bold transition-all ${
                      isActive
                        ? 'bg-brand text-white shadow-[0_6px_18px_rgba(26,63,216,0.25)]'
                        : 'text-white/40 hover:text-white hover:bg-white/5'
                    }`}
                  >
                    <item.icon size={16} className="shrink-0" />
                    {item.label}
                  </Link>
                );
              })}
            </div>
          </div>
        ))}
      </nav>

      <div className="p-5 border-t border-white/5 space-y-3">
        <div className="bg-white/5 rounded-2xl p-4 border border-white/10">
          <div className="flex items-center gap-2 mb-1.5">
            <div className={`h-1.5 w-1.5 rounded-full animate-pulse ${isSuperAdmin ? 'bg-amber-400' : 'bg-emerald-400'}`} />
            <span className="text-[9px] font-black text-white/30 uppercase tracking-widest">
              {isSuperAdmin ? 'Super Admin' : 'Signed In'}
            </span>
          </div>
          <p className="text-[12px] font-bold text-white/70 truncate">{user?.name}</p>
          <p className="text-[11px] text-white/30 truncate">{user?.email}</p>
        </div>
        <button
          onClick={logout}
          className="w-full flex items-center gap-3 px-4 py-2.5 text-white/30 hover:text-red-400 text-[13px] font-bold transition-colors rounded-xl hover:bg-white/5"
        >
          <LogOut size={15} />
          Sign Out
        </button>
      </div>
    </aside>
  );
}
