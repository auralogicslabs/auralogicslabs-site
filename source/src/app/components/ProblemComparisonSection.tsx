import { X, Check, AlertTriangle } from 'lucide-react';
import { motion } from 'motion/react';

export function ProblemComparisonSection() {
  const comparisonData = [
    {
      feature: 'Performance',
      traditional: 'Slow PHP rendering',
      headless: 'Fast but complex',
      nexora: 'Static-speed, simple',
    },
    {
      feature: 'Complexity',
      traditional: 'Simple setup',
      headless: 'High DevOps overhead',
      nexora: 'One-click toggle',
    },
    {
      feature: 'Security',
      traditional: 'Exposed fingerprint',
      headless: 'Decoupled but costly',
      nexora: 'Ghost Protocol built-in',
    },
    {
      feature: 'Rebuild Required',
      traditional: 'None',
      headless: 'Complete frontend',
      nexora: 'None',
    },
    {
      feature: 'Editor Experience',
      traditional: 'Familiar',
      headless: 'API-only, complex',
      nexora: 'Unchanged',
    },
  ];

  return (
    <section className="bg-white px-6 py-24 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <h2 className="text-4xl font-semibold tracking-tight text-[#0F172A] lg:text-5xl">
            WordPress Was Never Built
            <br />
            For Modern Delivery
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-[#475569]">
            Compare the complexity vs. intelligent simplicity
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="mt-16 overflow-hidden rounded-2xl border border-[#E2E8F0] bg-white shadow-lg"
        >
          <div className="grid grid-cols-4 gap-px bg-[#E2E8F0]">
            <div className="bg-[#F8FAFC] p-6">
              <p className="font-semibold text-[#64748B]">Feature</p>
            </div>
            <div className="bg-[#F8FAFC] p-6">
              <p className="font-semibold text-[#64748B]">Traditional WP</p>
            </div>
            <div className="bg-[#F8FAFC] p-6">
              <p className="font-semibold text-[#64748B]">Full Headless</p>
            </div>
            <div className="bg-gradient-to-br from-[#1A3FD8]/5 to-[#60A5FA]/5 p-6">
              <p className="font-semibold text-[#1A3FD8]">Nexora Engine</p>
            </div>
          </div>

          {comparisonData.map((row, index) => (
            <div
              key={row.feature}
              className="grid grid-cols-4 gap-px bg-[#E2E8F0]"
            >
              <div className="bg-white p-6">
                <p className="font-medium text-[#0F172A]">{row.feature}</p>
              </div>
              <div className="bg-white p-6">
                <p className="text-sm text-[#64748B]">{row.traditional}</p>
              </div>
              <div className="bg-white p-6">
                <p className="text-sm text-[#64748B]">{row.headless}</p>
              </div>
              <div className="bg-gradient-to-br from-[#1A3FD8]/5 to-[#60A5FA]/5 p-6">
                <p className="text-sm font-medium text-[#1A3FD8]">{row.nexora}</p>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
