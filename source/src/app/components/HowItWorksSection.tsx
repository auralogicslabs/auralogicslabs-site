import { ArrowDown } from 'lucide-react';
import { motion } from 'motion/react';

export function HowItWorksSection() {
  const steps = [
    {
      title: 'Visitor Request',
      description: 'Browser sends request to your WordPress site',
      color: 'from-[#64748B] to-[#475569]',
    },
    {
      title: 'Nexora Capture Engine',
      description: 'Intelligent layer intercepts and processes the request',
      color: 'from-[#1A3FD8] to-[#2563EB]',
    },
    {
      title: 'Static Snapshot Layer',
      description: 'Serves pre-rendered, cached version of the page',
      color: 'from-[#2563EB] to-[#60A5FA]',
    },
    {
      title: 'Delivery Engine',
      description: 'Optimized delivery with security headers and caching',
      color: 'from-[#60A5FA] to-[#1A3FD8]',
    },
    {
      title: '22ms Response',
      description: 'Lightning-fast static delivery to the visitor',
      color: 'from-[#16A34A] to-[#22C55E]',
    },
  ];

  return (
    <section id="architecture" className="bg-white px-6 py-24 lg:px-8">
      <div className="mx-auto max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <h2 className="text-4xl font-semibold tracking-tight text-[#0F172A] lg:text-5xl">
            How It Works
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-[#475569]">
            Modern infrastructure flow from request to delivery
          </p>
        </motion.div>

        <div className="mt-16 space-y-6">
          {steps.map((step, index) => (
            <div key={step.title}>
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`rounded-xl bg-gradient-to-r ${step.color} p-6 text-white shadow-lg`}
              >
                <div className="flex items-center gap-4">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-white/20 font-semibold">
                    {index + 1}
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold">{step.title}</h3>
                    <p className="mt-1 text-sm text-white/90">{step.description}</p>
                  </div>
                </div>
              </motion.div>
              {index < steps.length - 1 && (
                <div className="flex justify-center py-3">
                  <ArrowDown size={20} className="text-[#E2E8F0]" />
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
