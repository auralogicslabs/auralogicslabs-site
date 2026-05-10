import { Zap, Shield, Layers, Eye, Database, Gauge } from 'lucide-react';
import { motion } from 'motion/react';

export function HeroSection() {
  const trustBadges = [
    { icon: Gauge, text: '22ms TTFB' },
    { icon: Layers, text: 'Elementor Compatible' },
    { icon: Database, text: 'Any Hosting' },
    { icon: Eye, text: 'Ghost Protocol' },
    { icon: Zap, text: 'Static Delivery' },
    { icon: Shield, text: 'Zero Rebuilds' },
  ];

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-white to-[#F8FAFC] px-6 py-24 lg:px-8 lg:py-32">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-5xl font-semibold tracking-tight text-[#0F172A] lg:text-6xl">
              WordPress in the back.
              <br />
              <span className="text-[#1A3FD8]">Next.js in the front.</span>
            </h1>

            <p className="mt-6 text-lg text-[#475569] leading-relaxed">
              Nexora Engine transforms traditional WordPress into a modern headless-grade infrastructure platform with static-speed delivery, intelligent security, and enterprise-level performance.
            </p>

            <p className="mt-4 text-sm text-[#64748B]">
              One toggle setup. Static delivery. Hidden WordPress fingerprint. Works on any hosting provider. No rebuild required.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <button className="rounded-lg bg-[#1A3FD8] px-6 py-3 font-medium text-white hover:bg-[#2563EB] transition-colors shadow-sm">
                Start Free
              </button>
              <button className="rounded-lg border border-[#E2E8F0] bg-white px-6 py-3 font-medium text-[#0F172A] hover:bg-[#F8FAFC] transition-colors">
                Live Demo
              </button>
            </div>

            <div className="mt-12 grid grid-cols-2 gap-4 sm:grid-cols-3">
              {trustBadges.map((badge, index) => {
                const Icon = badge.icon;
                return (
                  <motion.div
                    key={badge.text}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: 0.1 * index }}
                    className="flex items-center gap-2 rounded-lg border border-[#E2E8F0] bg-white p-3"
                  >
                    <Icon size={16} className="text-[#1A3FD8]" />
                    <span className="text-xs font-medium text-[#475569]">{badge.text}</span>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="rounded-2xl border border-[#E2E8F0] bg-white p-8 shadow-lg">
              <div className="space-y-4">
                <div className="flex items-center justify-between rounded-lg bg-[#F8FAFC] p-4">
                  <span className="text-sm font-medium text-[#475569]">WordPress Backend</span>
                  <div className="h-2 w-2 rounded-full bg-[#16A34A]" />
                </div>
                <div className="flex justify-center">
                  <div className="h-8 w-px bg-[#E2E8F0]" />
                </div>
                <div className="rounded-lg border-2 border-[#1A3FD8] bg-gradient-to-br from-[#1A3FD8]/5 to-[#60A5FA]/5 p-6">
                  <p className="text-center font-semibold text-[#1A3FD8]">Nexora Engine</p>
                  <p className="mt-1 text-center text-xs text-[#64748B]">Infrastructure Layer</p>
                </div>
                <div className="flex justify-center">
                  <div className="h-8 w-px bg-[#E2E8F0]" />
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div className="rounded-lg bg-[#F8FAFC] p-4 text-center">
                    <p className="text-xs font-medium text-[#475569]">Static Cache</p>
                    <p className="mt-1 text-lg font-semibold text-[#1A3FD8]">22ms</p>
                  </div>
                  <div className="rounded-lg bg-[#F8FAFC] p-4 text-center">
                    <p className="text-xs font-medium text-[#475569]">Edge Delivery</p>
                    <p className="mt-1 text-lg font-semibold text-[#16A34A]">Active</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
