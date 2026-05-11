"use client";

import { motion, AnimatePresence } from "motion/react";
import { useState } from "react";

type NodeId = 'wordpress' | 'capture' | 'storage' | 'delivery' | 'browser';

export function ArchitectureFlow() {
  const [activeNode, setActiveNode] = useState<NodeId | null>(null);

  const nodes = [
    { id: 'wordpress', label: 'WordPress Backend', sub: '(Editor + Builder)', desc: 'Editors work in native WordPress using Elementor or Gutenberg. No workflow changes.' },
    { id: 'capture', label: 'Capture Layer', sub: '(HMAC-signed)', desc: 'Listens for save_post. Requests the page internally, stripping fingerprints and stripping nonces.' },
    { id: 'storage', label: 'Snapshot Storage', sub: '(Static HTML/CSS)', desc: 'Validates assets against disk. Writes an atomic static file to the uploads directory.' },
    { id: 'delivery', label: 'Delivery Engine', sub: '(Drop-in or Proxy)', desc: 'PHP drop-in intercepts standard traffic and serves the static snapshot with 304 negotiation.' },
  ];

  return (
    <section id="architecture" className="bg-surface-soft py-24 px-6 lg:px-12 border-y border-border overflow-hidden">
      <div className="mx-auto max-w-[1280px]">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="text-center mb-16"
        >
          <h2 className="text-[40px] md:text-[56px] font-semibold text-text-primary tracking-[-0.03em] mb-6">
            Headless architecture without infrastructure complexity.
          </h2>
          <p className="mx-auto max-w-[720px] text-[18px] text-text-secondary leading-[1.6]">
            Hover over any layer to inspect the pipeline. Five layers between your editor and your visitor.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="w-full flex justify-center py-8"
        >
          <div className="min-w-[800px] w-full max-w-[1024px] relative bg-white border border-border rounded-[12px] p-12 shadow-elevated transition-all duration-300">
            {/* Base grid background */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,var(--color-border)_1px,transparent_0)] bg-[size:24px_24px] opacity-30 rounded-[12px] pointer-events-none" />

            {/* Connecting lines */}
            <svg className="absolute inset-0 w-full h-full pointer-events-none" style={{ zIndex: 0 }}>
              <line x1="150" y1="120" x2="850" y2="120" stroke="var(--color-border-strong)" strokeWidth="2" strokeDasharray="4 4" />
              <line x1="500" y1="120" x2="500" y2="240" stroke="var(--color-border-strong)" strokeWidth="2" strokeDasharray="4 4" />
              
              {/* Animated active path */}
              <motion.path
                d="M 150 120 L 850 120"
                fill="none"
                stroke="var(--color-brand)"
                strokeWidth="3"
                initial={{ pathLength: 0, opacity: 0 }}
                animate={{ 
                  pathLength: activeNode ? 1 : 0, 
                  opacity: activeNode ? 1 : 0 
                }}
                transition={{ duration: 0.6, ease: "easeOut" }}
              />
            </svg>

            <div className="relative z-10 flex justify-between items-start mb-24">
              {nodes.map((node) => {
                const isActive = activeNode === node.id;
                const isDimmed = activeNode !== null && !isActive;
                return (
                  <div
                    key={node.id}
                    onMouseEnter={() => setActiveNode(node.id as NodeId)}
                    onMouseLeave={() => setActiveNode(null)}
                    className={`w-[180px] bg-white border rounded-md p-4 text-center cursor-crosshair transition-all duration-300 ${
                      isActive ? 'border-brand shadow-[0_0_0_1px_var(--color-brand),0_4px_12px_rgba(26,63,216,0.12)] scale-105' : 
                      isDimmed ? 'border-border opacity-50 scale-95' : 'border-border shadow-sm hover:border-brand-soft'
                    }`}
                  >
                    <div className={`font-semibold text-[14px] transition-colors ${isActive ? 'text-brand' : 'text-text-primary'}`}>{node.label}</div>
                    <div className="text-text-muted text-[12px] mt-1">{node.sub}</div>
                  </div>
                );
              })}
            </div>

            <div className="relative z-10 flex justify-center mb-8">
              <div 
                onMouseEnter={() => setActiveNode('browser')}
                onMouseLeave={() => setActiveNode(null)}
                className={`w-[240px] bg-white border-2 rounded-md p-4 text-center cursor-crosshair transition-all duration-300 ${
                  activeNode === 'browser' ? 'border-brand shadow-[0_0_0_1px_var(--color-brand),0_4px_12px_rgba(26,63,216,0.12)] scale-105' : 
                  (activeNode !== null ? 'border-border opacity-50 scale-95' : 'border-brand shadow-elevated')
                }`}
              >
                <div className={`font-semibold text-[16px] ${activeNode === 'browser' ? 'text-brand' : 'text-text-primary'}`}>Visitor Browser</div>
                <div className="text-text-muted text-[12px] mt-1">(SPA navigation)</div>
              </div>
            </div>

            {/* Info panel */}
            <div className="relative h-[60px] flex items-center justify-center border-t border-border mt-8 pt-8">
              <AnimatePresence mode="wait">
                {activeNode ? (
                  <motion.div
                    key={activeNode}
                    initial={{ opacity: 0, y: 5 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -5 }}
                    className="text-[15px] text-text-secondary text-center max-w-[600px]"
                  >
                    {activeNode === 'browser' 
                      ? 'Once the first page loads, subsequent clicks fetch raw JSON payloads from the delivery engine and rehydrate instantly without full page reloads.'
                      : nodes.find(n => n.id === activeNode)?.desc}
                  </motion.div>
                ) : (
                  <motion.div
                    key="default"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="text-[15px] text-text-muted text-center italic"
                  >
                    Hover over a component to view details.
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
