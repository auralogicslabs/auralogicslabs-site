"use client";

import { motion, AnimatePresence } from "motion/react";
import { useState, useEffect } from "react";
import { Layout, ShieldCheck, Database, Zap, Monitor, ArrowRight, Server, Plus } from "lucide-react";

type NodeId = 'wordpress' | 'capture' | 'storage' | 'delivery' | 'browser';

export function ArchitectureFlow() {
  const [activeNode, setActiveNode] = useState<NodeId | null>(null);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const nodes = [
    { 
      id: 'wordpress' as NodeId, 
      label: 'WP Backend', 
      icon: Layout,
      sub: 'CMS CORE', 
      desc: 'Editors continue working in their native WordPress environment. Elementor, Gutenberg, and all plugins remain fully functional without modification.',
      detail: 'PROTOCOL: PHP 8.3'
    },
    { 
      id: 'capture' as NodeId, 
      label: 'Capture Layer', 
      icon: ShieldCheck,
      sub: 'SECURITY FILTER', 
      desc: 'The capture engine intercepts updates via the save_post hook. It renders the page internally and strips all identifying WordPress fingerprints.',
      detail: 'VERIFICATION: HMAC SIGNED'
    },
    { 
      id: 'storage' as NodeId, 
      label: 'Snapshot Disk', 
      icon: Database,
      sub: 'ATOMIC STORAGE', 
      desc: 'Validated assets and sanitized HTML are written to an atomic static file. References are verified against the local manifest for integrity.',
      detail: 'FORMAT: STATIC HTML/JSON'
    },
    { 
      id: 'delivery' as NodeId, 
      label: 'Delivery Engine', 
      icon: Zap,
      sub: 'PHP DROP-IN', 
      desc: 'A 200-line drop-in script intercepts incoming traffic. It bypasses the entire WP boot process and serves the snapshot directly from disk.',
      detail: 'LATENCY: < 22MS'
    },
  ];

  // Auto-play cycle
  useEffect(() => {
    if (!isAutoPlaying) return;
    const allIds: NodeId[] = ['wordpress', 'capture', 'storage', 'delivery', 'browser'];
    let i = 0;
    const interval = setInterval(() => {
      setActiveNode(allIds[i]);
      i = (i + 1) % allIds.length;
    }, 4000);
    return () => clearInterval(interval);
  }, [isAutoPlaying]);

  return (
    <section id="architecture" className="bg-surface-soft py-32 px-8 lg:px-24 border-y border-border overflow-hidden">
      <div className="w-full max-w-[1700px] mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="text-center mb-24"
        >
          <span className="inline-block px-3 py-1 bg-brand/10 text-brand text-[12px] font-bold uppercase tracking-wider rounded-full mb-6">
            Structural Integrity
          </span>
          <h2 className="text-[40px] md:text-[56px] font-bold text-obsidian tracking-[-0.04em] mb-6">
            Headless architecture without complexity.
          </h2>
          <p className="mx-auto max-w-[720px] text-[18px] text-text-secondary leading-[1.6]">
            Interact with the layers to see how Nexora Engine transforms your WordPress delivery pipeline.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-12 gap-16 items-start">
          {/* Left: The Flow Visualization */}
          <div className="lg:col-span-8 relative bg-white border border-border rounded-[32px] p-10 md:p-20 shadow-2xl min-h-[500px] flex flex-col justify-between overflow-hidden">
            {/* Background Grid */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,var(--color-border)_1px,transparent_0)] bg-[size:32px_32px] opacity-40 rounded-[32px] pointer-events-none" />

            {/* SVG Connecting Paths */}
            <svg className="absolute inset-0 w-full h-full pointer-events-none z-0">
              {/* Static Base Path */}
              <path d="M 120 180 L 700 180 L 700 380 L 400 380" fill="none" stroke="var(--color-border)" strokeWidth="2" strokeDasharray="4 4" className="hidden md:block" />
              
              {/* Active Animated Flow Path */}
              <AnimatePresence>
                {activeNode && (
                  <motion.path
                    initial={{ pathLength: 0, opacity: 0 }}
                    animate={{ pathLength: 1, opacity: 1 }}
                    exit={{ opacity: 0 }}
                    d="M 120 180 L 700 180 L 700 380 L 400 380"
                    fill="none"
                    stroke="var(--color-brand)"
                    strokeWidth="3"
                    transition={{ duration: 1, ease: "easeInOut" }}
                    className="hidden md:block"
                  />
                )}
              </AnimatePresence>

              {/* Data Packets (Animated Dots) */}
              {activeNode && (
                <motion.circle r="4" fill="var(--color-brand)">
                  <animateMotion
                    dur="3s"
                    repeatCount="indefinite"
                    path="M 120 180 L 700 180 L 700 380 L 400 380"
                  />
                </motion.circle>
              )}
            </svg>

            {/* Top Row: The Infrastructure */}
            <div className="relative z-10 flex flex-wrap md:flex-nowrap justify-between gap-6 mb-12">
              {nodes.map((node, idx) => (
                <motion.div
                  key={node.id}
                  onMouseEnter={() => { setActiveNode(node.id); setIsAutoPlaying(false); }}
                  onMouseLeave={() => setIsAutoPlaying(true)}
                  className={`flex-1 min-w-[140px] bg-white border rounded-[20px] p-6 cursor-pointer transition-all duration-500 relative group ${
                    activeNode === node.id 
                      ? 'border-brand shadow-xl scale-105' 
                      : 'border-border hover:border-brand/40 shadow-sm'
                  }`}
                >
                  <Plus className="absolute top-3 right-3 h-3 w-3 text-border-strong opacity-40" />
                  <div className={`h-10 w-10 rounded-xl flex items-center justify-center mb-5 transition-all duration-500 ${activeNode === node.id ? 'bg-brand text-white shadow-lg shadow-brand/20' : 'bg-surface-soft text-text-muted group-hover:bg-brand-tint group-hover:text-brand'}`}>
                    <node.icon size={20} />
                  </div>
                  <div className={`text-[14px] font-bold mb-1 transition-colors ${activeNode === node.id ? 'text-brand' : 'text-obsidian'}`}>{node.label}</div>
                  <div className="text-[10px] text-text-muted font-bold tracking-widest">{node.sub}</div>
                  
                  {idx < nodes.length - 1 && (
                    <ArrowRight className="absolute -right-4 top-1/2 -translate-y-1/2 text-border-strong hidden md:block" size={16} />
                  )}
                </motion.div>
              ))}
            </div>

            {/* Bottom Row: The Visitor */}
            <div className="relative z-10 flex justify-center mt-auto pt-12">
              <motion.div
                onMouseEnter={() => { setActiveNode('browser'); setIsAutoPlaying(false); }}
                onMouseLeave={() => setIsAutoPlaying(true)}
                className={`w-[320px] bg-obsidian border rounded-[24px] p-8 cursor-pointer transition-all duration-700 shadow-[0_32px_64px_rgba(2,6,23,0.4)] relative group ${
                  activeNode === 'browser' ? 'ring-2 ring-brand ring-offset-8 ring-offset-white' : 'border-white/10'
                }`}
              >
                <div className="flex items-center gap-5">
                  <div className="h-14 w-14 rounded-2xl bg-brand/20 flex items-center justify-center text-brand">
                    <Monitor size={28} />
                  </div>
                  <div>
                    <div className="text-white font-bold text-[18px] mb-1">Visitor Browser</div>
                    <div className="text-white/40 text-[11px] font-mono font-bold uppercase tracking-widest">200 OK • 22ms</div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>

          {/* Right: Detailed Insight Card */}
          <div className="lg:col-span-4 sticky top-32">
            <AnimatePresence mode="wait">
              {activeNode ? (
                <motion.div
                  key={activeNode}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  className="bg-white border border-border rounded-[32px] p-10 shadow-2xl relative overflow-hidden"
                >
                  <Plus className="absolute bottom-6 right-6 h-5 w-5 text-border-strong opacity-40" />
                  <div className="flex items-center gap-5 mb-8">
                    <div className="h-14 w-14 rounded-2xl bg-brand/10 text-brand flex items-center justify-center shadow-inner">
                      {activeNode === 'browser' ? <Monitor size={28} /> : nodes.find(n => n.id === activeNode)?.icon && <div className="h-7 w-7"><Server /></div>}
                    </div>
                    <div>
                      <h4 className="font-bold text-obsidian text-[22px] leading-none mb-2">
                        {activeNode === 'browser' ? 'Universal Delivery' : nodes.find(n => n.id === activeNode)?.label}
                      </h4>
                      <div className="text-brand font-mono text-[11px] font-bold uppercase tracking-[0.2em]">
                        {activeNode === 'browser' ? 'EDGE NAVIGATION' : nodes.find(n => n.id === activeNode)?.detail}
                      </div>
                    </div>
                  </div>
                  
                  <p className="text-text-secondary text-[16px] leading-[1.8] mb-10">
                    {activeNode === 'browser' 
                      ? 'Subsequent clicks fetch raw JSON payloads from the delivery engine and rehydrate instantly, providing a true Single Page Application (SPA) experience without full page reloads.' 
                      : nodes.find(n => n.id === activeNode)?.desc}
                  </p>

                  <div className="space-y-4">
                    <div className="flex items-center justify-between p-4 rounded-2xl bg-surface-soft border border-border text-[14px]">
                      <span className="text-text-muted font-bold uppercase tracking-wider text-[10px]">Processing</span>
                      <span className="font-mono font-bold text-obsidian">INTELLIGENT</span>
                    </div>
                    <div className="flex items-center justify-between p-4 rounded-2xl bg-surface-soft border border-border text-[14px]">
                      <span className="text-text-muted font-bold uppercase tracking-wider text-[10px]">Integrity</span>
                      <span className="font-mono font-bold text-success">VERIFIED</span>
                    </div>
                  </div>
                </motion.div>
              ) : (
                <motion.div
                  key="empty"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="bg-surface-soft border-2 border-dashed border-border rounded-[32px] p-10 flex flex-col items-center justify-center text-center min-h-[400px]"
                >
                  <div className="h-20 w-20 rounded-full bg-white border border-border flex items-center justify-center mb-8 shadow-xl animate-bounce">
                    <ArrowRight className="text-brand" size={32} />
                  </div>
                  <h4 className="font-bold text-obsidian text-[20px] mb-3">Explore the Flow</h4>
                  <p className="text-text-muted text-[15px] max-w-[240px]">Hover over any infrastructure component to view the technical breakdown.</p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}
