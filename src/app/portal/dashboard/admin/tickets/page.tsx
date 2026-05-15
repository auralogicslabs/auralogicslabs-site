"use client";

import { motion, AnimatePresence } from "motion/react";
import { 
  LifeBuoy, Search, Filter, MessageSquare, 
  Clock, CheckCircle2, AlertCircle, Send,
  User, Globe, Paperclip, X, RefreshCw
} from "lucide-react";
import { useState, useEffect } from "react";
import { useAuth } from "@/context/AuthContext";
import { useInfrastructure, SupportTicket } from "@/context/InfrastructureStore";
import { useRouter } from "next/navigation";

export default function SupportManagementPage() {
  const { user } = useAuth();
  const { tickets, replyToTicket, updateTicketStatus } = useInfrastructure();
  const router = useRouter();

  const [searchQuery, setSearchQuery] = useState('');
  const [selectedTicket, setSelectedTicket] = useState<SupportTicket | null>(null);
  const [replyContent, setReplyContent] = useState('');
  const [isSending, setIsSending] = useState(false);

  useEffect(() => {
    if (user?.role !== 'super_admin') router.push('/portal/dashboard');
  }, [user, router]);

  if (user?.role !== 'super_admin') return null;

  const filtered = tickets.filter(t => {
    if (!searchQuery.trim()) return true;
    const q = searchQuery.toLowerCase();
    return t.subject.toLowerCase().includes(q) || t.userName?.toLowerCase().includes(q) || t.userEmail?.toLowerCase().includes(q);
  });

  const handleReply = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!selectedTicket || !replyContent.trim()) return;

    setIsSending(true);
    await replyToTicket(selectedTicket.id, replyContent, true, user?.name || "Support Team");
    setReplyContent('');
    setIsSending(false);
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'Resolved': return <CheckCircle2 size={16} className="text-emerald-500" />;
      case 'In Progress': return <Clock size={16} className="text-amber-500" />;
      default: return <AlertCircle size={16} className="text-brand" />;
    }
  };

  return (
    <div className="flex h-[calc(100vh-140px)] gap-8">
      {/* Ticket List */}
      <div className="w-[400px] flex flex-col gap-6 h-full">
        <div className="flex flex-col gap-1">
          <span className="text-[10px] font-black text-brand uppercase tracking-[0.3em]">Support Desk</span>
          <h1 className="text-[30px] font-black text-obsidian tracking-tighter leading-tight mt-1">
            Support <span className="text-brand">Center.</span>
          </h1>
        </div>

        <div className="relative">
          <Search size={16} className="absolute left-4 top-1/2 -translate-y-1/2 text-text-muted" />
          <input
            type="text"
            placeholder="Search tickets..."
            value={searchQuery}
            onChange={e => setSearchQuery(e.target.value)}
            className="w-full bg-white border border-border rounded-2xl py-3.5 pl-12 pr-4 text-[13px] font-bold text-obsidian focus:ring-brand focus:border-brand outline-none"
          />
        </div>

        <div className="flex-1 overflow-y-auto space-y-3 pr-2 scrollbar-hide">
          {filtered.length === 0 ? (
            <div className="text-center py-12 px-6">
              <div className="h-16 w-16 bg-surface-soft rounded-3xl flex items-center justify-center mx-auto mb-4 text-text-muted">
                <LifeBuoy size={24} />
              </div>
              <h3 className="text-[15px] font-black text-obsidian">No tickets found</h3>
              <p className="text-text-muted text-[13px] mt-1 font-medium">All clear! No issues reported yet.</p>
            </div>
          ) : (
            filtered.map((ticket) => (
              <button
                key={ticket.id}
                onClick={() => setSelectedTicket(ticket)}
                className={`w-full text-left p-5 rounded-[28px] border transition-all ${
                  selectedTicket?.id === ticket.id 
                    ? 'bg-obsidian text-white border-obsidian shadow-xl shadow-obsidian/20' 
                    : 'bg-white border-border hover:border-brand/30 text-obsidian shadow-sm'
                }`}
              >
                <div className="flex justify-between items-start mb-2">
                  <span className={`text-[10px] font-black uppercase tracking-widest ${selectedTicket?.id === ticket.id ? 'text-white/40' : 'text-text-muted'}`}>
                    {ticket.id}
                  </span>
                  {getStatusIcon(ticket.status)}
                </div>
                <div className="text-[14px] font-black truncate mb-1">{ticket.subject}</div>
                <div className={`text-[12px] font-bold truncate ${selectedTicket?.id === ticket.id ? 'text-white/60' : 'text-text-muted'}`}>
                  {ticket.userName} • {ticket.siteName}
                </div>
              </button>
            ))
          )}
        </div>
      </div>

      {/* Ticket Thread */}
      <div className="flex-1 bg-white border border-border rounded-[48px] overflow-hidden flex flex-col shadow-sm">
        {selectedTicket ? (
          <>
            {/* Thread Header */}
            <div className="px-10 py-8 border-b border-border flex justify-between items-center bg-surface-soft/30">
               <div>
                  <h2 className="text-[20px] font-black text-obsidian leading-tight">{selectedTicket.subject}</h2>
                  <div className="flex items-center gap-4 mt-2">
                    <div className="flex items-center gap-1.5 text-[12px] font-bold text-text-muted">
                       <User size={14} className="text-brand" /> {selectedTicket.userName} ({selectedTicket.userEmail})
                    </div>
                    <div className="flex items-center gap-1.5 text-[12px] font-bold text-text-muted">
                       <Globe size={14} className="text-brand" /> {selectedTicket.siteName}
                    </div>
                  </div>
               </div>
               <div className="flex items-center gap-3">
                  <select 
                    value={selectedTicket.status}
                    onChange={(e) => updateTicketStatus(selectedTicket.id, e.target.value as any)}
                    className="bg-white border border-border rounded-xl px-4 py-2 text-[12px] font-black uppercase tracking-widest text-obsidian outline-none focus:ring-brand"
                  >
                    <option value="Open">Open</option>
                    <option value="In Progress">In Progress</option>
                    <option value="Resolved">Resolved</option>
                  </select>
               </div>
            </div>

            {/* Thread Content */}
            <div className="flex-1 overflow-y-auto p-10 space-y-8 scrollbar-hide">
              {/* Initial Message */}
              <div className="flex gap-4">
                <div className="h-10 w-10 rounded-full bg-brand/5 flex items-center justify-center text-brand font-black text-[14px] shrink-0 border border-brand/10">
                  {selectedTicket.userName?.charAt(0).toUpperCase()}
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-2">
                    <span className="text-[14px] font-black text-obsidian">{selectedTicket.userName}</span>
                    <span className="text-[11px] font-bold text-text-muted uppercase tracking-widest">{selectedTicket.date}</span>
                  </div>
                  <div className="bg-surface-soft rounded-3xl rounded-tl-none p-6 text-[14px] text-obsidian leading-relaxed font-medium">
                    {selectedTicket.message}
                  </div>
                  {selectedTicket.attachments && selectedTicket.attachments.length > 0 && (
                    <div className="mt-4 flex flex-wrap gap-3">
                       {selectedTicket.attachments.map((att, idx) => (
                         <div key={idx} className="relative group">
                            <img src={att} className="h-24 w-40 object-cover rounded-xl border border-border" />
                            <a href={att} download={`attachment-${idx}`} className="absolute inset-0 bg-obsidian/40 opacity-0 group-hover:opacity-100 flex items-center justify-center transition-opacity rounded-xl">
                               <Paperclip size={20} className="text-white" />
                            </a>
                         </div>
                       ))}
                    </div>
                  )}
                </div>
              </div>

              {/* Replies */}
              {selectedTicket.replies.map((reply) => (
                <div key={reply.id} className={`flex gap-4 ${reply.isAdmin ? 'flex-row-reverse' : ''}`}>
                  <div className={`h-10 w-10 rounded-full flex items-center justify-center font-black text-[14px] shrink-0 border ${
                    reply.isAdmin ? 'bg-obsidian text-white border-obsidian' : 'bg-brand/5 text-brand border-brand/10'
                  }`}>
                    {reply.authorName.charAt(0).toUpperCase()}
                  </div>
                  <div className={`flex-1 ${reply.isAdmin ? 'text-right' : ''}`}>
                    <div className={`flex items-center gap-3 mb-2 ${reply.isAdmin ? 'flex-row-reverse' : ''}`}>
                      <span className="text-[14px] font-black text-obsidian">
                        {reply.authorName} {reply.isAdmin && <span className="text-[10px] bg-brand text-white px-2 py-0.5 rounded-full ml-2 uppercase">Staff</span>}
                      </span>
                      <span className="text-[11px] font-bold text-text-muted uppercase tracking-widest">{reply.date}</span>
                    </div>
                    <div className={`p-6 text-[14px] leading-relaxed font-medium rounded-3xl ${
                      reply.isAdmin 
                        ? 'bg-brand text-white rounded-tr-none' 
                        : 'bg-surface-soft text-obsidian rounded-tl-none'
                    }`}>
                      {reply.content}
                    </div>
                    {reply.attachment && (
                      <div className={`mt-3 flex ${reply.isAdmin ? 'justify-end' : ''}`}>
                        <img src={reply.attachment} className="h-24 w-40 object-cover rounded-xl border border-border" />
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>

            {/* Reply Input */}
            <div className="p-8 border-t border-border bg-white">
              <form onSubmit={handleReply} className="relative">
                <textarea
                  value={replyContent}
                  onChange={(e) => setReplyContent(e.target.value)}
                  placeholder="Type your reply to the user..."
                  className="w-full bg-surface-soft border border-border rounded-[32px] p-6 pr-24 text-[14px] font-medium text-obsidian outline-none focus:ring-brand focus:border-brand min-h-[120px] resize-none"
                />
                <div className="absolute right-4 bottom-4 flex items-center gap-2">
                   <button
                    disabled={isSending || !replyContent.trim()}
                    type="submit"
                    className="bg-brand text-white h-12 px-6 rounded-2xl flex items-center gap-2 font-black text-[13px] hover:scale-105 transition-transform disabled:opacity-50 disabled:scale-100"
                   >
                    {isSending ? <RefreshCw size={16} className="animate-spin" /> : <Send size={16} />}
                    Send Reply
                   </button>
                </div>
              </form>
            </div>
          </>
        ) : (
          <div className="flex-1 flex flex-col items-center justify-center text-center p-12">
            <div className="h-24 w-24 bg-surface-soft rounded-[40px] flex items-center justify-center text-border mb-6">
               <MessageSquare size={40} />
            </div>
            <h2 className="text-[22px] font-black text-obsidian mb-2">No Ticket Selected</h2>
            <p className="text-text-muted text-[15px] max-w-[320px] font-medium">
              Select a support ticket from the list on the left to view the conversation and reply.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
