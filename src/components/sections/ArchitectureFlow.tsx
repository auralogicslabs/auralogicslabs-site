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
    <section id="architecture" className="bg-surface-soft py-24 px-8 lg:px-24 border-y border-border overflow-hidden">
      <div className="w-full max-w-[1700px] mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="text-center mb-20"
        >
          <span className="inline-block px-3 py-1 bg-brand/10 text-brand text-[10px] font-bold uppercase tracking-wider rounded-full mb-6">
            Structural Integrity
          </span>
          <h2 className="text-[32px] md:text-[50px] lg:text-[62px] font-extrabold text-obsidian tracking-[-0.05em] leading-[1.05] mb-8">
            Headless architecture <br /> without complexity.
          </h2>
          <p className="mx-auto max-w-[650px] text-[17px] text-text-secondary leading-[1.6] font-medium">
            Interact with the layers to see how Nexora Engine transforms your WordPress delivery pipeline.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-12 gap-12 items-start">
          {/* Left: The Flow Visualization */}
          <div className="lg:col-span-8 relative bg-white border border-border rounded-[40px] p-8 md:p-16 shadow-[0_48px_96px_rgba(2,6,23,0.08)] min-h-[550px] flex flex-col justify-between overflow-hidden">
            {/* Background Grid */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at:1px_1px,var(--color-border)_1px,transparent_0)] bg-[size:32px_32px] opacity-40 rounded-[40px] pointer-events-none" />

            {/* SVG Connecting Paths - Responsive Viewbox */}
            <svg viewBox="0 0 800 500" className="absolute inset-0 w-full h-full pointer-events-none z-0">
              {/* Responsive Path: Connects top nodes and loops back to browser */}
              <path 
                d="M 100 150 L 700 150 C 750 150 750 200 750 250 C 750 380 450 380 400 380" 
                fill="none" 
                stroke="var(--color-border)" 
                strokeWidth="1.5" 
                strokeDasharray="6 6" 
                className="hidden md:block" 
              />
              
              {/* Active Animated Flow Path */}
              <AnimatePresence>
                {activeNode && (
                  <motion.path
                    initial={{ pathLength: 0, opacity: 0 }}
                    animate={{ pathLength: 1, opacity: 1 }}
                    exit={{ opacity: 0 }}
                    d="M 100 150 L 700 150 C 750 150 750 200 750 250 C 750 380 450 380 400 380"
                    fill="none"
                    stroke="var(--color-brand)"
                    strokeWidth="2.5"
                    transition={{ duration: 1.5, ease: "easeInOut" }}
                    className="hidden md:block"
                  />
                )}
              </AnimatePresence>

              {/* Data Packets (Animated Dots) */}
              {activeNode && (
                <motion.circle r="3.5" fill="var(--color-brand)" style={{ filter: "drop-shadow(0 0 10px var(--color-brand))" }}>
                  <animateMotion
                    dur="4s"
                    repeatCount="indefinite"
                    path="M 100 150 L 700 150 C 750 150 750 200 750 250 C 750 380 450 380 400 380"
                  />
                </motion.circle>
              )}
            </svg>

            {/* Top Row: The Infrastructure */}
            <div className="relative z-10 flex flex-wrap md:flex-nowrap justify-between gap-4 mb-12">
              {nodes.map((node, idx) => (
                <motion.div
                  key={node.id}
                  onMouseEnter={() => { setActiveNode(node.id); setIsAutoPlaying(false); }}
                  onMouseLeave={() => setIsAutoPlaying(true)}
                  className={`flex-1 min-w-[130px] bg-white border rounded-[24px] p-5 cursor-pointer transition-all duration-500 relative group ${
                    activeNode === node.id 
                      ? 'border-brand shadow-[0_20px_40px_rgba(26,63,216,0.15)] scale-105' 
                      : 'border-border hover:border-brand/40 shadow-sm'
                  }`}
                >
                  <Plus className="absolute top-3 right-3 h-3 w-3 text-border-strong opacity-40" />
                  <div className={`h-10 w-10 rounded-xl flex items-center justify-center mb-4 transition-all duration-500 ${activeNode === node.id ? 'bg-brand text-white shadow-lg' : 'bg-surface-soft text-text-muted group-hover:bg-brand-tint group-hover:text-brand'}`}>
                    <node.icon size={18} />
                  </div>
                  <div className={`text-[13px] font-extrabold mb-1 transition-colors ${activeNode === node.id ? 'text-brand' : 'text-obsidian'}`}>{node.label}</div>
                  <div className="text-[9px] text-text-muted font-bold tracking-widest">{node.sub}</div>
                  
                  {idx < nodes.length - 1 && (
                    <ArrowRight className="absolute -right-3 top-1/2 -translate-y-1/2 text-border-strong hidden md:block opacity-30" size={14} />
                  )}
                </motion.div>
              ))}
            </div>

            {/* Bottom Row: The Visitor Browser */}
            <div className="relative z-10 flex justify-center mt-auto">
              <motion.div
                onMouseEnter={() => { setActiveNode('browser'); setIsAutoPlaying(false); }}
                onMouseLeave={() => setIsAutoPlaying(true)}
                className={`w-[280px] bg-obsidian border rounded-[32px] p-6 cursor-pointer transition-all duration-700 shadow-[0_32px_64px_rgba(2,6,23,0.4)] relative group ${
                  activeNode === 'browser' ? 'ring-2 ring-brand ring-offset-4 ring-offset-white' : 'border-white/10'
                }`}
              >
                <div className="flex items-center gap-4">
                  <div className="h-12 w-12 rounded-xl bg-brand/20 flex items-center justify-center text-brand">
                    <Monitor size={24} />
                  </div>
                  <div>
                    <div className="text-white font-extrabold text-[16px] mb-0.5">Visitor Browser</div>
                    <div className="text-white/40 text-[10px] font-mono font-bold uppercase tracking-widest">200 OK • 22ms</div>
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
                  className="bg-white border border-border rounded-[32px] p-10 shadow-[0_32px_64px_rgba(2,6,23,0.08)] relative overflow-hidden"
                >
                  <Plus className="absolute bottom-6 right-6 h-4 w-4 text-border-strong opacity-40" />
                  <div className="flex items-center gap-5 mb-8">
                    <div className="h-14 w-14 rounded-2xl bg-brand/5 text-brand flex items-center justify-center shadow-inner border border-brand/10">
                      {activeNode === 'browser' ? <Monitor size={28} /> : <div className="h-7 w-7"><Server /></div>}
                    </div>
                    <div>
                      <h4 className="font-extrabold text-obsidian text-[20px] leading-none mb-2 tracking-tight">
                        {activeNode === 'browser' ? 'Universal Delivery' : nodes.find(n => n.id === activeNode)?.label}
                      </h4>
                      <div className="text-brand font-mono text-[10px] font-bold uppercase tracking-[0.2em]">
                        {activeNode === 'browser' ? 'EDGE NAVIGATION' : nodes.find(n => n.id === activeNode)?.detail}
                      </div>
                    </div>
                  </div>
                  
                  <p className="text-text-secondary text-[15px] leading-[1.7] mb-10 font-medium">
                    {activeNode === 'browser' 
                      ? 'Subsequent clicks fetch raw JSON payloads from the delivery engine and rehydrate instantly, providing a true Single Page Application (SPA) experience without full page reloads.' 
                      : nodes.find(n => n.id === activeNode)?.desc}
                  </p>

                  <div className="space-y-3">
                    <div className="flex items-center justify-between p-4 rounded-2xl bg-surface-soft border border-border">
                      <span className="text-text-muted font-bold uppercase tracking-wider text-[9px]">Processing</span>
                      <span className="font-mono font-bold text-obsidian text-[12px]">INTELLIGENT</span>
                    </div>
                    <div className="flex items-center justify-between p-4 rounded-2xl bg-surface-soft border border-border">
                      <span className="text-text-muted font-bold uppercase tracking-wider text-[9px]">Integrity</span>
                      <span className="font-mono font-bold text-emerald-500 text-[12px]">VERIFIED</span>
                    </div>
                  </div>
                </motion.div>
              ) : (
                <motion.div
                  key="empty"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="bg-white border-2 border-dashed border-border rounded-[32px] p-10 flex flex-col items-center justify-center text-center min-h-[400px] shadow-sm"
                >
                  <div className="h-16 w-16 rounded-full bg-surface-soft border border-border flex items-center justify-center mb-8 animate-bounce">
                    <ArrowRight className="text-brand" size={24} />
                  </div>
                  <h4 className="font-bold text-obsidian text-[18px] mb-2">Explore the Flow</h4>
                  <p className="text-text-muted text-[14px] max-w-[240px] font-medium">Hover over any component to view the technical breakdown.</p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}
