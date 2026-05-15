"use client";

import { motion, AnimatePresence } from "motion/react";
import {
  Users, Search, MoreVertical, Mail, CheckCircle2, XCircle,
  RefreshCw, Clock, Globe, UserX, Plus, Pencil, Trash2,
  Shield, X, Eye, EyeOff, AlertTriangle
} from "lucide-react";
import { useState, useEffect, useCallback } from "react";
import { useAuth, User } from "@/context/AuthContext";
import { useInfrastructure } from "@/context/InfrastructureStore";
import { useRouter } from "next/navigation";

const ROLE_LABELS: Record<string, string> = {
  admin:  'Account Owner',
  agency: 'Agency',
  user:   'User',
};

type FormMode = 'add' | 'edit' | null;

interface UserForm {
  name: string;
  email: string;
  password: string;
  role: User['role'];
  emailVerified: boolean;
}

const emptyForm: UserForm = { name: '', email: '', password: '', role: 'admin', emailVerified: false };

export default function UserManagementPage() {
  const { user, allUsers, refreshUsers, adminAddUser, updateUser, deleteUser } = useAuth();
  const { sites } = useInfrastructure();
  const router = useRouter();

  const [searchQuery, setSearchQuery]     = useState('');
  const [isRefreshing, setIsRefreshing]   = useState(false);
  const [formMode, setFormMode]           = useState<FormMode>(null);
  const [editingUser, setEditingUser]     = useState<User | null>(null);
  const [form, setForm]                   = useState<UserForm>(emptyForm);
  const [formError, setFormError]         = useState('');
  const [showPw, setShowPw]               = useState(false);
  const [confirmDelete, setConfirmDelete] = useState<string | null>(null);
  const [activeMenu, setActiveMenu]       = useState<string | null>(null);

  useEffect(() => {
    if (user?.role !== 'super_admin') router.push('/portal/dashboard');
  }, [user, router]);

  useEffect(() => { refreshUsers(); }, [refreshUsers]);

  if (user?.role !== 'super_admin') return null;

  const generalUsers = allUsers.filter(u => u.role !== 'super_admin');

  const filtered = generalUsers.filter(u => {
    if (!searchQuery.trim()) return true;
    const q = searchQuery.toLowerCase();
    return u.name.toLowerCase().includes(q) || u.email.toLowerCase().includes(q);
  });

  const verifiedCount = generalUsers.filter(u => u.emailVerified).length;
  const pendingCount  = generalUsers.filter(u => !u.emailVerified).length;
  const totalSites    = sites.length;

  const siteCount = useCallback(
    (userId: string) => sites.filter(s => s.userId === userId).length,
    [sites]
  );

  const handleRefresh = async () => {
    setIsRefreshing(true);
    refreshUsers();
    await new Promise(r => setTimeout(r, 400));
    setIsRefreshing(false);
  };

  const openAdd = () => {
    setFormMode('add');
    setForm(emptyForm);
    setFormError('');
    setEditingUser(null);
  };

  const openEdit = (u: User) => {
    setFormMode('edit');
    setEditingUser(u);
    setForm({ name: u.name, email: u.email, password: '', role: u.role, emailVerified: u.emailVerified });
    setFormError('');
    setActiveMenu(null);
  };

  const closeForm = () => { setFormMode(null); setEditingUser(null); setFormError(''); };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name.trim() || !form.email.trim()) return;

    if (formMode === 'add') {
      if (!form.password) { setFormError('Password is required.'); return; }
      const result = await adminAddUser({
        email: form.email, name: form.name, role: form.role,
        emailVerified: form.emailVerified, password: form.password,
      });
      if (!result.success) { setFormError(result.error || 'Could not create user.'); return; }
    } else if (formMode === 'edit' && editingUser) {
      const updates: Partial<User> = {
        name: form.name, email: form.email, role: form.role, emailVerified: form.emailVerified,
      };
      if (form.password) updates.password = form.password;
      await updateUser(editingUser.id, updates);
    }
    closeForm();
  };

  const handleDelete = async (userId: string) => {
    await deleteUser(userId);
    setConfirmDelete(null);
    setActiveMenu(null);
  };

  const fmt = (iso?: string) => {
    if (!iso) return '—';
    return new Date(iso).toLocaleDateString(undefined, { year: 'numeric', month: 'short', day: 'numeric' });
  };

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-5">
        <div>
          <span className="text-[10px] font-black text-brand uppercase tracking-[0.3em]">Admin Panel</span>
          <h1 className="text-[34px] font-black text-obsidian tracking-tighter leading-tight mt-1">
            User <span className="text-brand">Management.</span>
          </h1>
          <p className="text-text-muted text-[15px] font-medium mt-2 max-w-[480px]">
            Full control over registered accounts — add, edit, and manage users on the platform.
          </p>
        </div>
        <div className="flex items-center gap-3">
          <div className="flex items-center gap-2 px-4 py-2 bg-emerald-500/10 border border-emerald-500/20 rounded-xl">
            <div className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
            <span className="text-[11px] font-black text-emerald-600 uppercase tracking-widest">Cloud Database Active</span>
          </div>
          <div className="relative">
            <Search size={15} className="absolute left-4 top-1/2 -translate-y-1/2 text-text-muted" />
            <input
              type="text"
              placeholder="Search users…"
              value={searchQuery}
              onChange={e => setSearchQuery(e.target.value)}
              className="bg-white border border-border rounded-xl py-3 pl-10 pr-4 text-[13px] font-bold text-obsidian w-[200px] focus:ring-brand focus:border-brand outline-none"
            />
          </div>
          <button
            onClick={handleRefresh}
            className="p-3 bg-white border border-border rounded-xl text-text-muted hover:text-obsidian hover:bg-surface-soft transition-all"
          >
            <RefreshCw size={17} className={isRefreshing ? 'animate-spin' : ''} />
          </button>
          <button
            onClick={openAdd}
            className="flex items-center gap-2 px-5 py-3 bg-brand text-white rounded-xl font-black text-[13px] hover:scale-105 transition-transform shadow-lg shadow-brand/20"
          >
            <Plus size={16} /> Add User
          </button>
        </div>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-5">
        {[
          { label: 'Total Users',     value: generalUsers.length, icon: Users,         color: 'text-brand',        bg: 'bg-brand/5' },
          { label: 'Verified',        value: verifiedCount,       icon: CheckCircle2,  color: 'text-emerald-500',  bg: 'bg-emerald-500/5' },
          { label: 'Pending Email',   value: pendingCount,        icon: Clock,         color: 'text-amber-500',    bg: 'bg-amber-500/5' },
          { label: 'Connected Sites', value: totalSites,          icon: Globe,         color: 'text-obsidian',     bg: 'bg-obsidian/5' },
        ].map((stat, i) => (
          <motion.div
            key={stat.label}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.07 }}
            className="bg-white border border-border rounded-[28px] p-7 shadow-sm"
          >
            <div className={`h-10 w-10 ${stat.bg} rounded-xl flex items-center justify-center ${stat.color} mb-4`}>
              <stat.icon size={19} />
            </div>
            <div className="text-[28px] font-black text-obsidian tracking-tight">{stat.value}</div>
            <div className="text-[11px] font-bold text-text-muted uppercase tracking-widest mt-0.5">{stat.label}</div>
          </motion.div>
        ))}
      </div>

      {/* Users Table */}
      <div className="bg-white border border-border rounded-[40px] overflow-hidden shadow-sm">
        {filtered.length === 0 ? (
          <div className="flex flex-col items-center justify-center py-24 px-8 text-center">
            <UserX size={40} className="text-border mb-4" />
            <h3 className="text-[18px] font-black text-obsidian mb-2">
              {generalUsers.length === 0 ? 'No registered users yet' : 'No results found'}
            </h3>
            <p className="text-text-muted text-[14px] max-w-[340px]">
              {generalUsers.length === 0
                ? 'Users register via the portal signup or you can add them manually above.'
                : `No users match "${searchQuery}".`}
            </p>
            {generalUsers.length === 0 && (
              <button
                onClick={openAdd}
                className="mt-6 inline-flex items-center gap-2 bg-brand text-white px-6 py-3 rounded-xl font-black text-[14px] hover:scale-105 transition-transform shadow-lg shadow-brand/20"
              >
                <Plus size={15} /> Add First User
              </button>
            )}
          </div>
        ) : (
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-surface-soft/50 border-b border-border">
                <th className="px-8 py-5 text-[11px] font-black text-text-muted uppercase tracking-widest">User</th>
                <th className="px-8 py-5 text-[11px] font-black text-text-muted uppercase tracking-widest">Role</th>
                <th className="px-8 py-5 text-[11px] font-black text-text-muted uppercase tracking-widest">Status</th>
                <th className="px-8 py-5 text-[11px] font-black text-text-muted uppercase tracking-widest">Sites</th>
                <th className="px-8 py-5 text-[11px] font-black text-text-muted uppercase tracking-widest">Joined</th>
                <th className="px-8 py-5 text-[11px] font-black text-text-muted uppercase tracking-widest text-right">Actions</th>
              </tr>
            </thead>
            <tbody>
              {filtered.map((u, i) => {
                const sc = siteCount(u.id);
                return (
                  <motion.tr
                    key={u.id}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: i * 0.04 }}
                    className="border-b border-border last:border-0 hover:bg-surface-soft/20 transition-colors"
                  >
                    <td className="px-8 py-5">
                      <div className="flex items-center gap-4">
                        <div className="h-10 w-10 rounded-full bg-brand/5 border border-brand/10 flex items-center justify-center text-brand font-black text-[14px] shrink-0">
                          {u.name.charAt(0).toUpperCase()}
                        </div>
                        <div>
                          <div className="text-[14px] font-black text-obsidian">{u.name}</div>
                          <div className="text-[12px] text-text-muted font-medium">{u.email}</div>
                        </div>
                      </div>
                    </td>
                    <td className="px-8 py-5">
                      <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-obsidian/5 text-obsidian text-[10px] font-black uppercase tracking-widest">
                        <Shield size={10} />
                        {ROLE_LABELS[u.role] ?? u.role}
                      </div>
                    </td>
                    <td className="px-8 py-5">
                      {u.emailVerified ? (
                        <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-emerald-500/10 text-emerald-600 text-[10px] font-black uppercase tracking-widest">
                          <CheckCircle2 size={11} /> Verified
                        </div>
                      ) : (
                        <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-amber-500/10 text-amber-600 text-[10px] font-black uppercase tracking-widest">
                          <Clock size={11} className="animate-pulse" /> Pending
                        </div>
                      )}
                    </td>
                    <td className="px-8 py-5">
                      <div className="flex items-center gap-2">
                        <Globe size={13} className={sc > 0 ? 'text-brand' : 'text-border'} />
                        <span className="text-[14px] font-black text-obsidian">{sc}</span>
                      </div>
                    </td>
                    <td className="px-8 py-5">
                      <span className="text-[13px] font-bold text-obsidian">{fmt(u.createdAt)}</span>
                    </td>
                    <td className="px-8 py-5 text-right">
                      <div className="flex items-center justify-end gap-2">
                        <button
                          onClick={() => openEdit(u)}
                          className="h-9 w-9 bg-white border border-border rounded-lg flex items-center justify-center text-text-muted hover:text-brand hover:border-brand/30 transition-all"
                          title="Edit user"
                        >
                          <Pencil size={14} />
                        </button>
                        <button
                          onClick={() => { setConfirmDelete(u.id); setActiveMenu(null); }}
                          className="h-9 w-9 bg-white border border-border rounded-lg flex items-center justify-center text-text-muted hover:text-red-500 hover:border-red-200 transition-all"
                          title="Delete user"
                        >
                          <Trash2 size={14} />
                        </button>
                      </div>
                    </td>
                  </motion.tr>
                );
              })}
            </tbody>
          </table>
        )}
      </div>

      {generalUsers.length > 0 && (
        <div className="flex items-center justify-between text-[12px] text-text-muted font-medium px-2">
          <span>
            Showing {filtered.length} of {generalUsers.length} {generalUsers.length === 1 ? 'user' : 'users'}
            {searchQuery ? ` matching "${searchQuery}"` : ''}
          </span>
          <span>Data is local to this browser session</span>
        </div>
      )}

      {/* Add / Edit Modal */}
      <AnimatePresence>
        {formMode && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-6">
            <motion.div
              initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
              className="absolute inset-0 bg-obsidian/60 backdrop-blur-md"
              onClick={closeForm}
            />
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="relative w-full max-w-[520px] bg-white rounded-[48px] p-12 shadow-2xl"
            >
              <button onClick={closeForm} className="absolute top-8 right-8 p-2 rounded-xl hover:bg-surface-soft text-text-muted transition-colors">
                <X size={18} />
              </button>
              <h2 className="text-[24px] font-black text-obsidian mb-2 tracking-tight">
                {formMode === 'add' ? 'Add New User' : 'Edit User'}
              </h2>
              <p className="text-text-muted text-[13px] font-medium mb-8">
                {formMode === 'add' ? 'Create a new account. The user can log in immediately.' : 'Update this user\'s details.'}
              </p>

              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <label className="text-[11px] font-black text-obsidian/40 uppercase tracking-widest ml-1 mb-2 block">Full Name</label>
                  <input
                    required type="text" value={form.name}
                    onChange={e => setForm(p => ({ ...p, name: e.target.value }))}
                    placeholder="Jane Smith"
                    className="w-full bg-surface-soft border border-border rounded-2xl p-4 px-5 text-[14px] font-bold text-obsidian focus:ring-brand focus:border-brand outline-none"
                  />
                </div>
                <div>
                  <label className="text-[11px] font-black text-obsidian/40 uppercase tracking-widest ml-1 mb-2 block">Email Address</label>
                  <input
                    required type="email" value={form.email}
                    onChange={e => setForm(p => ({ ...p, email: e.target.value }))}
                    placeholder="jane@example.com"
                    className="w-full bg-surface-soft border border-border rounded-2xl p-4 px-5 text-[14px] font-bold text-obsidian focus:ring-brand focus:border-brand outline-none"
                  />
                </div>
                <div>
                  <label className="text-[11px] font-black text-obsidian/40 uppercase tracking-widest ml-1 mb-2 block">
                    {formMode === 'edit' ? 'New Password (leave blank to keep)' : 'Password'}
                  </label>
                  <div className="relative">
                    <input
                      type={showPw ? 'text' : 'password'}
                      value={form.password}
                      onChange={e => setForm(p => ({ ...p, password: e.target.value }))}
                      placeholder={formMode === 'edit' ? '••••••••' : 'Choose a strong password'}
                      className="w-full bg-surface-soft border border-border rounded-2xl p-4 px-5 pr-12 text-[14px] font-bold text-obsidian focus:ring-brand focus:border-brand outline-none"
                    />
                    <button type="button" onClick={() => setShowPw(p => !p)}
                      className="absolute right-4 top-1/2 -translate-y-1/2 text-text-muted hover:text-obsidian transition-colors"
                    >
                      {showPw ? <EyeOff size={16} /> : <Eye size={16} />}
                    </button>
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="text-[11px] font-black text-obsidian/40 uppercase tracking-widest ml-1 mb-2 block">Role</label>
                    <select
                      value={form.role}
                      onChange={e => setForm(p => ({ ...p, role: e.target.value as User['role'] }))}
                      className="w-full bg-surface-soft border border-border rounded-2xl p-4 px-5 text-[14px] font-bold text-obsidian focus:ring-brand focus:border-brand outline-none"
                    >
                      <option value="admin">Account Owner</option>
                      <option value="agency">Agency</option>
                      <option value="user">User</option>
                    </select>
                  </div>
                  <div>
                    <label className="text-[11px] font-black text-obsidian/40 uppercase tracking-widest ml-1 mb-2 block">Email</label>
                    <button
                      type="button"
                      onClick={() => setForm(p => ({ ...p, emailVerified: !p.emailVerified }))}
                      className={`w-full h-[54px] rounded-2xl text-[13px] font-black flex items-center justify-center gap-2 transition-all border ${
                        form.emailVerified
                          ? 'bg-emerald-500/10 text-emerald-600 border-emerald-500/20'
                          : 'bg-amber-500/10 text-amber-600 border-amber-500/20'
                      }`}
                    >
                      {form.emailVerified ? <><CheckCircle2 size={15} /> Verified</> : <><Clock size={15} /> Pending</>}
                    </button>
                  </div>
                </div>

                {formError && (
                  <div className="flex items-center gap-2 p-4 bg-red-50 border border-red-100 rounded-2xl text-red-600 text-[13px] font-bold">
                    <AlertTriangle size={15} /> {formError}
                  </div>
                )}

                <div className="flex gap-4 pt-3">
                  <button type="button" onClick={closeForm}
                    className="flex-1 py-4 border border-border rounded-2xl font-bold text-[14px] text-text-muted hover:bg-surface-soft transition-colors"
                  >
                    Cancel
                  </button>
                  <button type="submit"
                    className="flex-1 py-4 bg-brand text-white rounded-2xl font-black text-[14px] hover:scale-105 transition-transform shadow-lg shadow-brand/20"
                  >
                    {formMode === 'add' ? 'Create User' : 'Save Changes'}
                  </button>
                </div>
              </form>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* Delete Confirm */}
      <AnimatePresence>
        {confirmDelete && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-6">
            <motion.div
              initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
              className="absolute inset-0 bg-obsidian/60 backdrop-blur-md"
              onClick={() => setConfirmDelete(null)}
            />
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="relative w-full max-w-[400px] bg-white rounded-[40px] p-10 shadow-2xl text-center"
            >
              <div className="h-14 w-14 bg-red-500/10 rounded-[20px] flex items-center justify-center mx-auto mb-5">
                <Trash2 size={24} className="text-red-500" />
              </div>
              <h3 className="text-[20px] font-black text-obsidian mb-2">Delete this user?</h3>
              <p className="text-text-muted text-[13px] font-medium mb-8">
                This will remove their account permanently. Their connected sites will remain in the system.
              </p>
              <div className="flex gap-3">
                <button onClick={() => setConfirmDelete(null)}
                  className="flex-1 py-3.5 border border-border rounded-2xl font-bold text-[14px] text-text-muted hover:bg-surface-soft transition-colors"
                >
                  Cancel
                </button>
                <button onClick={() => handleDelete(confirmDelete)}
                  className="flex-1 py-3.5 bg-red-500 text-white rounded-2xl font-black text-[14px] hover:scale-105 transition-transform"
                >
                  Delete
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {activeMenu && <div className="fixed inset-0 z-40" onClick={() => setActiveMenu(null)} />}
    </div>
  );
}
