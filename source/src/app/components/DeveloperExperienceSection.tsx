import { Terminal, Code2, Activity } from 'lucide-react';
import { motion } from 'motion/react';

export function DeveloperExperienceSection() {
  return (
    <section id="developers" className="bg-[#F8FAFC] px-6 py-24 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <h2 className="text-4xl font-semibold tracking-tight text-[#0F172A] lg:text-5xl">
            Built For Developers, Agencies,
            <br />
            And Infrastructure Teams
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-[#475569]">
            Comprehensive tooling and diagnostics for modern development workflows
          </p>
        </motion.div>

        <div className="mt-16 grid gap-8 lg:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="rounded-2xl border border-[#E2E8F0] bg-[#0F172A] p-8 shadow-xl"
          >
            <div className="flex items-center gap-3 border-b border-[#475569] pb-4">
              <Terminal size={20} className="text-[#60A5FA]" />
              <span className="font-mono text-sm text-white">nexora-diagnostics.json</span>
            </div>
            <pre className="mt-4 overflow-x-auto text-sm text-[#E2E8F0] font-mono leading-relaxed">
{`{
  "cache_status": "HIT",
  "ttfb": "22ms",
  "snapshot_version": "1.2.3",
  "last_regeneration": "2026-05-10T14:32:00Z",
  "security": {
    "ghost_protocol": "enabled",
    "fingerprint": "hidden",
    "headers_sanitized": true
  },
  "performance": {
    "static_delivery": true,
    "edge_ready": true
  }
}`}
            </pre>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <div className="rounded-xl border border-[#E2E8F0] bg-white p-6">
              <div className="flex items-center gap-3">
                <Code2 size={24} className="text-[#1A3FD8]" />
                <h3 className="font-semibold text-[#0F172A]">Developer-Friendly APIs</h3>
              </div>
              <p className="mt-3 text-sm text-[#64748B] leading-relaxed">
                RESTful APIs and hooks for custom integrations. Full control over delivery, caching, and security layers.
              </p>
            </div>

            <div className="rounded-xl border border-[#E2E8F0] bg-white p-6">
              <div className="flex items-center gap-3">
                <Activity size={24} className="text-[#1A3FD8]" />
                <h3 className="font-semibold text-[#0F172A]">Live Diagnostics Dashboard</h3>
              </div>
              <p className="mt-3 text-sm text-[#64748B] leading-relaxed">
                Real-time monitoring, performance analytics, and comprehensive logging for debugging and optimization.
              </p>
            </div>

            <div className="rounded-xl border border-[#E2E8F0] bg-white p-6">
              <div className="flex items-center gap-3">
                <Terminal size={24} className="text-[#1A3FD8]" />
                <h3 className="font-semibold text-[#0F172A]">CLI Tools & Automation</h3>
              </div>
              <p className="mt-3 text-sm text-[#64748B] leading-relaxed">
                Command-line utilities for automated deployments, snapshot management, and infrastructure control.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
