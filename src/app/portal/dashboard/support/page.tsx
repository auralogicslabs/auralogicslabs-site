"use client";

import { motion, AnimatePresence } from "motion/react";
import {
  MessageSquare, Plus, Clock, CheckCircle2, AlertCircle,
  ArrowRight, LifeBuoy, Globe, Loader2, Search, X,
  Send, Image as ImageIcon, ChevronRight, User
} from "lucide-react";
import { useState, useRef, useEffect } from "react";
import { useAuth } from "@/context/AuthContext";
import { useInfrastructure, SupportTicket } from "@/context/InfrastructureStore";

const STATUS_CFG = {
  'Open':        { badge: 'bg-amber-500/10 text-amber-600 border-amber-500/20',   icon: AlertCircle },
  'In Progress': { badge: 'bg-brand/10 text-brand border-brand/20',               icon: Clock },
  'Resolved':    { badge: 'bg-emerald-500/10 text-emerald-600 border-emerald-500/20', icon: CheckCircle2 },
} as const;

export default function SupportPage() {
  const { user } = useAuth();
  const { sites, tickets, raiseTicket, replyToTicket } = useInfrastructure();

  // New ticket form
  const [isModalOpen, setIsModalOpen]   = useState(false);
  const [selectedSite, setSelectedSite] = useState('');
  const [subject, setSubject]           = useState('');
  const [message, setMessage]           = useState('');
  const [newAttachments, setNewAttachments] = useState<string[]>([]);
  const [newAttachNames, setNewAttachNames] = useState<string[]>([]);
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Ticket detail
  const [selectedTicket, setSelectedTicket] = useState<SupportTicket | null>(null);
  const [replyText, setReplyText]       = useState('');
  const [replyAttachment, setReplyAttachment] = useState<string | undefined>();
  const [replyAttachName, setReplyAttachName] = useState('');
  const [isSendingReply, setIsSendingReply] = useState(false);

  const [searchQuery, setSearchQuery]   = useState('');
  const newFileRef   = useRef<HTMLInputElement>(null);
  const replyFileRef = useRef<HTMLInputElement>(null);
  const threadRef    = useRef<HTMLDivElement>(null);

  // Sync selected ticket when replies arrive
  useEffect(() => {
    if (selectedTicket) {
      const fresh = tickets.find(t => t.id === selectedTicket.id);
      if (fresh) setSelectedTicket(fresh);
    }
  }, [tickets, selectedTicket?.id]);

  useEffect(() => {
    if (threadRef.current) threadRef.current.scrollTop = threadRef.current.scrollHeight;
  }, [selectedTicket?.replies?.length]);

  const myTickets = tickets.filter(t =>
    !user || t.userId === user.id || t.userEmail === user.email || !t.userId
  );

  const filtered = myTickets.filter(t =>
    !searchQuery.trim() ||
    t.subject.toLowerCase().includes(searchQuery.toLowerCase()) ||
    t.siteName.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const openCount     = myTickets.filter(t => t.status === 'Open').length;
  const resolvedCount = myTickets.filter(t => t.status === 'Resolved').length;

  const handleNewFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = ev => {
      setNewAttachments(p => [...p, ev.target?.result as string]);
      setNewAttachNames(p => [...p, file.name]);
    };
    reader.readAsDataURL(file);
  };

  const handleReplyFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = ev => {
      setReplyAttachment(ev.target?.result as string);
      setReplyAttachName(file.name);
    };
    reader.readAsDataURL(file);
  };

  const handleRaiseTicket = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!selectedSite || !subject || !message) return;
    setIsSubmitting(true);
    await raiseTicket(selectedSite, subject, message, user?.id, user?.name, user?.email, newAttachments);
    setIsSubmitting(false);
    setIsModalOpen(false);
    setSelectedSite(''); setSubject(''); setMessage('');
    setNewAttachments([]); setNewAttachNames([]);
  };

  const handleReply = async () => {
    if (!selectedTicket || !replyText.trim()) return;
    setIsSendingReply(true);
    await replyToTicket(selectedTicket.id, replyText.trim(), false, user?.name || 'User', replyAttachment);
    setReplyText('');
    setReplyAttachment(undefined);
    setReplyAttachName('');
    setIsSendingReply(false);
  };

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-5">
        <div>
          <span className="text-[10px] font-black text-brand uppercase tracking-[0.3em]">Help & Support</span>
          <h1 className="text-[34px] font-black text-obsidian tracking-tighter leading-tight mt-1">
            Support <span className="text-brand">Center.</span>
          </h1>
          <p className="text-text-muted text-[15px] font-medium mt-2 max-w-[480px]">
            Raise a ticket for any issue with your sites. Our team will review and reply promptly.
          </p>
        </div>
        <button
          onClick={() => setIsModalOpen(true)}
          className="flex items-center gap-2 px-6 py-3.5 bg-brand text-white rounded-2xl font-bold text-[14px] hover:scale-105 transition-transform shadow-xl shadow-brand/20"
        >
          <Plus size={17} /> New Ticket
        </button>
      </div>

      {/* Stats */}
      {myTickets.length > 0 && (
        <div className="grid grid-cols-3 gap-5">
          {[
            { label: 'Total',    value: myTickets.length, icon: MessageSquare, color: 'text-brand',       bg: 'bg-brand/5' },
            { label: 'Open',     value: openCount,        icon: AlertCircle,  color: 'text-amber-500',   bg: 'bg-amber-500/5' },
            { label: 'Resolved', value: resolvedCount,    icon: CheckCircle2, color: 'text-emerald-500', bg: 'bg-emerald-500/5' },
          ].map((s, i) => (
            <motion.div key={s.label} initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.07 }}
              className="bg-white border border-border rounded-[28px] p-7 shadow-sm"
            >
              <div className={`h-10 w-10 ${s.bg} rounded-xl flex items-center justify-center ${s.color} mb-4`}>
                <s.icon size={19} />
              </div>
              <div className="text-[26px] font-black text-obsidian">{s.value}</div>
              <div className="text-[11px] font-bold text-text-muted uppercase tracking-widest mt-0.5">{s.label}</div>
            </motion.div>
          ))}
        </div>
      )}

      {/* Ticket list */}
      <div className="bg-white border border-border rounded-[40px] overflow-hidden shadow-sm">
        {myTickets.length > 0 && (
          <div className="px-10 py-5 border-b border-border flex items-center justify-between gap-4">
            <h2 className="text-[16px] font-black text-obsidian">Your Tickets</h2>
            <div className="relative">
              <Search size={13} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-text-muted" />
              <input
                type="text" placeholder="Search…" value={searchQuery}
                onChange={e => setSearchQuery(e.target.value)}
                className="bg-surface-soft border border-border rounded-xl py-2 pl-9 pr-4 text-[13px] font-medium focus:ring-1 focus:ring-brand outline-none w-[200px]"
              />
            </div>
          </div>
        )}

        {myTickets.length === 0 ? (
          <div className="flex flex-col items-center justify-center py-24 text-center">
            <div className="h-16 w-16 bg-surface-soft rounded-[24px] flex items-center justify-center mx-auto mb-6">
              <LifeBuoy size={28} className="text-text-muted" />
            </div>
            <h2 className="text-[20px] font-black text-obsidian mb-2">No tickets yet</h2>
            <p className="text-text-muted text-[14px] font-medium max-w-[320px] mb-8">
              Open a ticket any time you need help. We typically respond within 24 hours.
            </p>
            <button
              onClick={() => setIsModalOpen(true)}
              className="inline-flex items-center gap-2 bg-brand text-white px-6 py-3 rounded-xl font-black text-[14px] hover:scale-105 transition-transform shadow-lg shadow-brand/20"
            >
              <Plus size={15} /> Open a Ticket
            </button>
          </div>
        ) : filtered.length === 0 ? (
          <div className="py-14 text-center">
            <p className="text-[14px] font-bold text-obsidian">No tickets match "{searchQuery}"</p>
          </div>
        ) : (
          <div className="divide-y divide-border">
            {filtered.map((ticket, i) => {
              const cfg = STATUS_CFG[ticket.status];
              const StatusIcon = cfg.icon;
              const replyCount = (ticket.replies ?? []).length;
              return (
                <motion.button
                  key={ticket.id}
                  initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: i * 0.05 }}
                  onClick={() => setSelectedTicket(ticket)}
                  className="w-full px-10 py-6 flex items-center justify-between gap-5 hover:bg-surface-soft/20 transition-colors text-left"
                >
                  <div className="flex items-start gap-4 min-w-0">
                    <div className={`h-10 w-10 rounded-xl flex items-center justify-center shrink-0 mt-0.5 ${
                      ticket.status === 'Open' ? 'bg-amber-500/10' :
                      ticket.status === 'In Progress' ? 'bg-brand/10' : 'bg-emerald-500/10'
                    }`}>
                      <StatusIcon size={18} className={
                        ticket.status === 'Open' ? 'text-amber-500' :
                        ticket.status === 'In Progress' ? 'text-brand' : 'text-emerald-500'
                      } />
                    </div>
                    <div className="min-w-0">
                      <div className="flex items-center gap-2 mb-0.5">
                        <span className="text-[10px] font-black text-brand uppercase tracking-widest">{ticket.id}</span>
                        <span className="text-[11px] text-text-muted">· {ticket.date}</span>
                      </div>
                      <div className="text-[15px] font-black text-obsidian truncate">{ticket.subject}</div>
                      <div className="flex items-center gap-3 mt-0.5 text-[12px] text-text-muted font-medium">
                        <span className="flex items-center gap-1"><Globe size={11} /> {ticket.siteName}</span>
                        {replyCount > 0 && (
                          <span className="flex items-center gap-1 text-brand font-bold">
                            <MessageSquare size={11} /> {replyCount} {replyCount === 1 ? 'reply' : 'replies'}
                          </span>
                        )}
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center gap-3 shrink-0">
                    <span className={`px-3 py-1.5 rounded-full text-[10px] font-black uppercase tracking-widest border ${cfg.badge}`}>
                      {ticket.status}
                    </span>
                    <ChevronRight size={16} className="text-text-muted" />
                  </div>
                </motion.button>
              );
            })}
          </div>
        )}
      </div>

      {/* ── New Ticket Modal ── */}
      <AnimatePresence>
        {isModalOpen && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-6">
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
              className="absolute inset-0 bg-obsidian/60 backdrop-blur-md"
              onClick={() => setIsModalOpen(false)}
            />
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="relative w-full max-w-[540px] bg-white rounded-[48px] p-12 shadow-2xl"
            >
              <button onClick={() => setIsModalOpen(false)} className="absolute top-8 right-8 p-2 rounded-xl hover:bg-surface-soft text-text-muted">
                <X size={18} />
              </button>
              <h2 className="text-[24px] font-black text-obsidian mb-2 tracking-tight">Open a Support Ticket</h2>
              <p className="text-text-muted text-[13px] font-medium mb-8">
                Describe your issue. Attach a screenshot if it helps. We'll follow up by email.
              </p>

              <form onSubmit={handleRaiseTicket} className="space-y-5">
                <div>
                  <label className="text-[11px] font-black text-obsidian/40 uppercase tracking-widest ml-1 mb-2 block">Affected Site</label>
                  <select required value={selectedSite} onChange={e => setSelectedSite(e.target.value)}
                    className="w-full bg-surface-soft border border-border rounded-2xl p-4 px-5 text-[14px] font-bold text-obsidian focus:ring-brand outline-none"
                  >
                    <option value="">Choose a site…</option>
                    {sites.map(s => <option key={s.id} value={s.id}>{s.name} ({s.url})</option>)}
                  </select>
                  {sites.length === 0 && (
                    <p className="text-[12px] text-amber-600 font-medium mt-1.5 ml-1">
                      No sites connected yet — connect a site first.
                    </p>
                  )}
                </div>
                <div>
                  <label className="text-[11px] font-black text-obsidian/40 uppercase tracking-widest ml-1 mb-2 block">Subject</label>
                  <input required type="text" value={subject} onChange={e => setSubject(e.target.value)}
                    placeholder="e.g. Cache not clearing after publish"
                    className="w-full bg-surface-soft border border-border rounded-2xl p-4 px-5 text-[14px] font-bold text-obsidian focus:ring-brand outline-none"
                  />
                </div>
                <div>
                  <label className="text-[11px] font-black text-obsidian/40 uppercase tracking-widest ml-1 mb-2 block">Details</label>
                  <textarea required value={message} onChange={e => setMessage(e.target.value)} rows={4}
                    placeholder="Describe what's happening, when it started, and what you've already tried…"
                    className="w-full bg-surface-soft border border-border rounded-2xl p-4 px-5 text-[14px] font-bold text-obsidian focus:ring-brand outline-none resize-none"
                  />
                </div>

                {/* Attachments */}
                <div>
                  <button type="button" onClick={() => newFileRef.current?.click()}
                    className="flex items-center gap-2 text-[13px] font-bold text-brand hover:underline"
                  >
                    <ImageIcon size={15} /> Attach Screenshot
                  </button>
                  <input ref={newFileRef} type="file" accept="image/*" className="hidden" onChange={handleNewFileChange} />
                  {newAttachNames.length > 0 && (
                    <div className="flex flex-wrap gap-2 mt-3">
                      {newAttachNames.map((name, i) => (
                        <div key={i} className="flex items-center gap-2 px-3 py-1.5 bg-brand/5 border border-brand/10 rounded-xl">
                          <ImageIcon size={12} className="text-brand" />
                          <span className="text-[12px] font-bold text-brand max-w-[140px] truncate">{name}</span>
                          <button type="button" onClick={() => {
                            setNewAttachments(p => p.filter((_, j) => j !== i));
                            setNewAttachNames(p => p.filter((_, j) => j !== i));
                          }} className="text-text-muted hover:text-red-500 transition-colors">
                            <X size={12} />
                          </button>
                        </div>
                      ))}
                    </div>
                  )}
                </div>

                <div className="flex gap-4 pt-3">
                  <button type="button" onClick={() => setIsModalOpen(false)}
                    className="flex-1 py-4 border border-border rounded-2xl font-bold text-[14px] text-text-muted hover:bg-surface-soft transition-colors"
                  >
                    Cancel
                  </button>
                  <button type="submit" disabled={isSubmitting || sites.length === 0}
                    className="flex-1 py-4 bg-brand text-white rounded-2xl font-bold text-[14px] hover:scale-105 transition-transform flex items-center justify-center gap-2 disabled:opacity-50"
                  >
                    {isSubmitting ? <Loader2 size={17} className="animate-spin" /> : 'Submit Ticket'}
                  </button>
                </div>
              </form>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* ── Ticket Detail Drawer ── */}
      <AnimatePresence>
        {selectedTicket && (
          <div className="fixed inset-0 z-[100] flex justify-end">
            <motion.div
              initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
              className="absolute inset-0 bg-obsidian/50 backdrop-blur-sm"
              onClick={() => setSelectedTicket(null)}
            />
            <motion.div
              initial={{ x: '100%' }} animate={{ x: 0 }} exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 28, stiffness: 300 }}
              className="relative w-full max-w-[520px] bg-white h-full flex flex-col shadow-2xl"
            >
              {/* Drawer header */}
              <div className="px-8 py-6 border-b border-border flex items-start justify-between gap-4 shrink-0">
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <span className="text-[10px] font-black text-brand uppercase tracking-widest">{selectedTicket.id}</span>
                    <span className="text-[11px] text-text-muted">· {selectedTicket.date}</span>
                  </div>
                  <h2 className="text-[17px] font-black text-obsidian leading-snug">{selectedTicket.subject}</h2>
                  <div className="flex items-center gap-3 mt-2">
                    <span className="flex items-center gap-1.5 text-[12px] text-text-muted font-medium">
                      <Globe size={12} /> {selectedTicket.siteName}
                    </span>
                    <span className={`px-2.5 py-1 rounded-full text-[10px] font-black uppercase tracking-widest border ${STATUS_CFG[selectedTicket.status].badge}`}>
                      {selectedTicket.status}
                    </span>
                  </div>
                </div>
                <button onClick={() => setSelectedTicket(null)} className="p-2 rounded-xl hover:bg-surface-soft text-text-muted transition-colors shrink-0 mt-0.5">
                  <X size={18} />
                </button>
              </div>

              {/* Thread */}
              <div ref={threadRef} className="flex-1 overflow-y-auto px-8 py-6 space-y-5">
                {/* Original message */}
                <div className="bg-surface-soft rounded-2xl p-5">
                  <div className="flex items-center gap-2 mb-3">
                    <div className="h-7 w-7 rounded-full bg-brand/10 flex items-center justify-center text-brand font-black text-[12px]">
                      {(user?.name || 'U').charAt(0).toUpperCase()}
                    </div>
                    <span className="text-[13px] font-black text-obsidian">{user?.name || 'You'}</span>
                    <span className="text-[11px] text-text-muted ml-auto">{selectedTicket.date}</span>
                  </div>
                  <p className="text-[14px] text-obsidian font-medium leading-relaxed">{selectedTicket.message}</p>
                  {selectedTicket.attachments?.length > 0 && (
                    <div className="flex flex-wrap gap-3 mt-4">
                      {selectedTicket.attachments.map((src, i) => (
                        <a key={i} href={src} target="_blank" rel="noopener noreferrer">
                          <img src={src} alt="attachment" className="h-20 w-20 object-cover rounded-xl border border-border hover:opacity-80 transition-opacity" />
                        </a>
                      ))}
                    </div>
                  )}
                </div>

                {/* Replies */}
                {(selectedTicket.replies ?? []).map(reply => (
                  <div key={reply.id} className={`rounded-2xl p-5 ${reply.isAdmin ? 'bg-brand/5 border border-brand/10' : 'bg-surface-soft'}`}>
                    <div className="flex items-center gap-2 mb-3">
                      <div className={`h-7 w-7 rounded-full flex items-center justify-center font-black text-[11px] ${
                        reply.isAdmin ? 'bg-brand text-white' : 'bg-obsidian/10 text-obsidian'
                      }`}>
                        {reply.authorName.charAt(0).toUpperCase()}
                      </div>
                      <span className="text-[13px] font-black text-obsidian">{reply.authorName}</span>
                      {reply.isAdmin && (
                        <span className="px-2 py-0.5 bg-brand text-white text-[9px] font-black uppercase tracking-widest rounded-full">Support</span>
                      )}
                      <span className="text-[11px] text-text-muted ml-auto">{reply.date}</span>
                    </div>
                    <p className="text-[14px] text-obsidian font-medium leading-relaxed">{reply.content}</p>
                    {reply.attachment && (
                      <a href={reply.attachment} target="_blank" rel="noopener noreferrer" className="mt-3 block">
                        <img src={reply.attachment} alt="attachment" className="h-20 w-20 object-cover rounded-xl border border-border hover:opacity-80 transition-opacity" />
                      </a>
                    )}
                  </div>
                ))}

                {(selectedTicket.replies ?? []).length === 0 && (
                  <div className="text-center py-6">
                    <Clock size={20} className="text-text-muted mx-auto mb-2" />
                    <p className="text-[13px] text-text-muted font-medium">Waiting for a response from our team.</p>
                    <p className="text-[12px] text-text-muted/70 mt-1">We typically reply within 24 hours.</p>
                  </div>
                )}
              </div>

              {/* Reply box */}
              {selectedTicket.status !== 'Resolved' && (
                <div className="px-8 py-5 border-t border-border shrink-0 bg-white">
                  {replyAttachName && (
                    <div className="flex items-center gap-2 mb-3 px-3 py-2 bg-brand/5 border border-brand/10 rounded-xl">
                      <ImageIcon size={13} className="text-brand" />
                      <span className="text-[12px] font-bold text-brand truncate flex-1">{replyAttachName}</span>
                      <button onClick={() => { setReplyAttachment(undefined); setReplyAttachName(''); }} className="text-text-muted hover:text-red-500 transition-colors">
                        <X size={13} />
                      </button>
                    </div>
                  )}
                  <div className="flex gap-3">
                    <textarea
                      value={replyText}
                      onChange={e => setReplyText(e.target.value)}
                      onKeyDown={e => { if (e.key === 'Enter' && (e.metaKey || e.ctrlKey)) handleReply(); }}
                      placeholder="Add a reply or more info… (Ctrl+Enter to send)"
                      rows={3}
                      className="flex-1 bg-surface-soft border border-border rounded-2xl p-4 text-[13px] font-medium text-obsidian focus:ring-brand focus:border-brand outline-none resize-none"
                    />
                    <div className="flex flex-col gap-2">
                      <button onClick={() => replyFileRef.current?.click()}
                        className="p-3 bg-surface-soft border border-border rounded-xl text-text-muted hover:text-brand hover:border-brand/30 transition-all"
                        title="Attach image"
                      >
                        <ImageIcon size={17} />
                      </button>
                      <button
                        onClick={handleReply}
                        disabled={!replyText.trim() || isSendingReply}
                        className="p-3 bg-brand text-white rounded-xl hover:scale-105 transition-transform disabled:opacity-40 shadow-lg shadow-brand/20"
                      >
                        {isSendingReply ? <Loader2 size={17} className="animate-spin" /> : <Send size={17} />}
                      </button>
                    </div>
                  </div>
                  <input ref={replyFileRef} type="file" accept="image/*" className="hidden" onChange={handleReplyFileChange} />
                </div>
              )}

              {selectedTicket.status === 'Resolved' && (
                <div className="px-8 py-5 border-t border-border bg-emerald-500/5">
                  <div className="flex items-center gap-3 text-emerald-600">
                    <CheckCircle2 size={17} />
                    <span className="text-[13px] font-bold">This ticket has been resolved.</span>
                  </div>
                </div>
              )}
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}
