"use client";

import { useState } from "react";
import { User, Mail, Shield, CheckCircle2, Clock, Key, Globe, Calendar } from "lucide-react";
import { useAuth } from "@/context/AuthContext";
import { useInfrastructure } from "@/context/InfrastructureStore";

const ROLE_LABELS: Record<string, string> = {
  super_admin: 'Super Admin',
  admin:       'Account Owner',
  agency:      'Agency',
  user:        'User',
};

export default function SettingsPage() {
  const { user } = useAuth();
  const { sites } = useInfrastructure();

  const [displayName, setDisplayName] = useState(user?.name || "");
  const [currentPw, setCurrentPw]     = useState("");
  const [newPw, setNewPw]             = useState("");
  const [saved, setSaved]             = useState<"name" | "password" | null>(null);

  const flash = (type: "name" | "password") => {
    setSaved(type);
    setTimeout(() => setSaved(null), 2000);
  };

  const handleSaveName = (e: React.FormEvent) => {
    e.preventDefault();
    flash("name");
  };

  const handleChangePassword = (e: React.FormEvent) => {
    e.preventDefault();
    setCurrentPw("");
    setNewPw("");
    flash("password");
  };

  const fmt = (iso: string) =>
    new Date(iso).toLocaleDateString(undefined, { year: 'numeric', month: 'long', day: 'numeric' });

  return (
    <div className="max-w-[760px] space-y-8">
      <div>
        <span className="text-[10px] font-black text-brand uppercase tracking-[0.3em]">Account</span>
        <h1 className="text-[34px] font-black text-obsidian tracking-tighter leading-tight mt-1">
          Account <span className="text-brand">Settings.</span>
        </h1>
        <p className="text-text-muted text-[15px] font-medium mt-2">
          Manage your profile and security preferences.
        </p>
      </div>

      {/* Profile */}
      <div className="bg-white border border-border rounded-[40px] p-10 shadow-sm">
        <h2 className="text-[16px] font-black text-obsidian mb-7 flex items-center gap-3">
          <User size={17} className="text-brand" />
          Profile
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-7">
          {[
            { label: "Role",            value: ROLE_LABELS[user?.role ?? 'user'] ?? user?.role, icon: Shield },
            { label: "Member Since",    value: user?.createdAt ? fmt(user.createdAt) : "—",      icon: Calendar },
            { label: "Connected Sites", value: String(sites.length),                              icon: Globe },
          ].map(item => (
            <div key={item.label} className="bg-surface-soft rounded-2xl p-5">
              <div className="flex items-center gap-2 mb-2">
                <item.icon size={13} className="text-text-muted" />
                <span className="text-[10px] font-bold text-text-muted uppercase tracking-widest">{item.label}</span>
              </div>
              <div className="text-[14px] font-black text-obsidian">{item.value}</div>
            </div>
          ))}
        </div>

        <div className="bg-surface-soft rounded-2xl p-5 mb-7 flex items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <Mail size={15} className="text-text-muted shrink-0" />
            <div>
              <div className="text-[10px] font-bold text-text-muted uppercase tracking-widest mb-0.5">Email Address</div>
              <div className="text-[14px] font-black text-obsidian">{user?.email}</div>
            </div>
          </div>
          {user?.emailVerified ? (
            <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-emerald-500/10 text-emerald-600 text-[10px] font-black uppercase tracking-widest shrink-0">
              <CheckCircle2 size={10} /> Verified
            </span>
          ) : (
            <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-amber-500/10 text-amber-600 text-[10px] font-black uppercase tracking-widest shrink-0">
              <Clock size={10} /> Pending
            </span>
          )}
        </div>

        <form onSubmit={handleSaveName} className="space-y-4">
          <div>
            <label className="text-[11px] font-bold text-obsidian/50 uppercase tracking-widest ml-1 mb-2 block">
              Display Name
            </label>
            <input
              type="text"
              value={displayName}
              onChange={e => setDisplayName(e.target.value)}
              required
              className="w-full bg-surface-soft border border-border rounded-2xl p-4 px-5 text-[14px] font-bold text-obsidian focus:ring-brand focus:border-brand outline-none transition-all"
            />
          </div>
          <button
            type="submit"
            className="flex items-center gap-2 px-6 py-3 bg-brand text-white rounded-xl font-black text-[13px] hover:scale-105 transition-transform shadow-lg shadow-brand/20"
          >
            {saved === 'name' ? <><CheckCircle2 size={14} /> Saved!</> : 'Save Changes'}
          </button>
        </form>
      </div>

      {/* Password */}
      <div className="bg-white border border-border rounded-[40px] p-10 shadow-sm">
        <h2 className="text-[16px] font-black text-obsidian mb-7 flex items-center gap-3">
          <Key size={17} className="text-brand" />
          Change Password
        </h2>
        <form onSubmit={handleChangePassword} className="space-y-4">
          <div>
            <label className="text-[11px] font-bold text-obsidian/50 uppercase tracking-widest ml-1 mb-2 block">
              Current Password
            </label>
            <input
              type="password"
              value={currentPw}
              onChange={e => setCurrentPw(e.target.value)}
              required
              placeholder="••••••••"
              className="w-full bg-surface-soft border border-border rounded-2xl p-4 px-5 text-[14px] font-bold text-obsidian focus:ring-brand focus:border-brand outline-none transition-all"
            />
          </div>
          <div>
            <label className="text-[11px] font-bold text-obsidian/50 uppercase tracking-widest ml-1 mb-2 block">
              New Password
            </label>
            <input
              type="password"
              value={newPw}
              onChange={e => setNewPw(e.target.value)}
              required
              placeholder="Choose a strong password"
              className="w-full bg-surface-soft border border-border rounded-2xl p-4 px-5 text-[14px] font-bold text-obsidian focus:ring-brand focus:border-brand outline-none transition-all"
            />
          </div>
          <button
            type="submit"
            className="flex items-center gap-2 px-6 py-3 bg-obsidian text-white rounded-xl font-black text-[13px] hover:scale-105 transition-transform"
          >
            {saved === 'password' ? <><CheckCircle2 size={14} /> Updated!</> : 'Update Password'}
          </button>
        </form>
      </div>
    </div>
  );
}
