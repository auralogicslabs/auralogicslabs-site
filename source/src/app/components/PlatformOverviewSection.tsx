import { Zap, Shield, Brain } from 'lucide-react';
import { motion } from 'motion/react';

export function PlatformOverviewSection() {
  const platforms = [
    {
      icon: Zap,
      title: 'Speed Infrastructure',
      description: 'Nexora Engine delivers static-speed performance without sacrificing WordPress editing experience.',
      features: [
        'Static delivery',
        'Browser caching',
        'Sub-50ms delivery',
        'Zero PHP rendering',
      ],
    },
    {
      icon: Shield,
      title: 'Ghost Protocol',
      description: 'Enterprise security layer that hides WordPress fingerprints and reduces attack surface.',
      features: [
        'Namespace cloaking',
        'REST masking',
        'Header sanitization',
        'Attack surface reduction',
      ],
    },
    {
      icon: Brain,
      title: 'Intelligent Automation',
      description: 'Smart regeneration engine that knows when to update without manual intervention.',
      features: [
        'Smart regeneration',
        'Conflict detection',
        'Asset validation',
        'Auto invalidation',
      ],
    },
  ];

  return (
    <section id="platform" className="bg-[#F8FAFC] px-6 py-24 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <h2 className="text-4xl font-semibold tracking-tight text-[#0F172A] lg:text-5xl">
            Infrastructure Layer For
            <br />
            Modern WordPress
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-[#475569]">
            Nexora Engine transforms WordPress into a modern infrastructure delivery platform while preserving the editing experience teams already know.
          </p>
        </motion.div>

        <div className="mt-16 grid gap-8 lg:grid-cols-3">
          {platforms.map((platform, index) => {
            const Icon = platform.icon;
            return (
              <motion.div
                key={platform.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                className="rounded-2xl border border-[#E2E8F0] bg-white p-8 shadow-sm hover:shadow-xl transition-shadow"
              >
                <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-gradient-to-br from-[#1A3FD8] to-[#2563EB]">
                  <Icon size={28} className="text-white" />
                </div>
                <h3 className="mt-6 text-xl font-semibold text-[#0F172A]">{platform.title}</h3>
                <p className="mt-3 text-[#475569] leading-relaxed">{platform.description}</p>
                <ul className="mt-6 space-y-3">
                  {platform.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-3">
                      <div className="mt-1 h-1.5 w-1.5 rounded-full bg-[#1A3FD8]" />
                      <span className="text-sm text-[#64748B]">{feature}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
