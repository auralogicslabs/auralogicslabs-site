import { Users, Building2, FileText, Code } from 'lucide-react';
import { motion } from 'motion/react';

export function UseCasesSection() {
  const useCases = [
    {
      icon: Users,
      title: 'Agencies',
      description: 'Modern delivery without rebuilding workflows.',
      benefits: [
        'Keep existing WordPress workflows',
        'Deliver enterprise performance to clients',
        'No specialized React developers needed',
        'Scale without infrastructure complexity',
      ],
    },
    {
      icon: Building2,
      title: 'Enterprises',
      description: 'Secure infrastructure modernization.',
      benefits: [
        'Enterprise-grade security and performance',
        'Maintain compliance requirements',
        'Zero downtime migration path',
        'Reduce infrastructure costs',
      ],
    },
    {
      icon: FileText,
      title: 'Publishers',
      description: 'Static-speed publishing at scale.',
      benefits: [
        'Handle traffic spikes effortlessly',
        'Reduce hosting costs dramatically',
        'Improve SEO with faster page loads',
        'Maintain editorial workflows',
      ],
    },
    {
      icon: Code,
      title: 'Developers',
      description: 'Headless-grade architecture without DevOps complexity.',
      benefits: [
        'Modern API-first architecture',
        'No complex build pipelines',
        'Full development flexibility',
        'Comprehensive diagnostics and monitoring',
      ],
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
            Built For Every Team
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-[#475569]">
            From agencies to enterprises, Nexora Engine scales to your needs
          </p>
        </motion.div>

        <div className="mt-16 grid gap-8 lg:grid-cols-2">
          {useCases.map((useCase, index) => {
            const Icon = useCase.icon;
            return (
              <motion.div
                key={useCase.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="rounded-2xl border border-[#E2E8F0] bg-[#F8FAFC] p-8 hover:shadow-lg transition-shadow"
              >
                <div className="flex items-center gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#1A3FD8]">
                    <Icon size={24} className="text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-[#0F172A]">{useCase.title}</h3>
                    <p className="text-sm text-[#64748B]">{useCase.description}</p>
                  </div>
                </div>
                <ul className="mt-6 space-y-3">
                  {useCase.benefits.map((benefit) => (
                    <li key={benefit} className="flex items-start gap-3">
                      <div className="mt-1.5 h-1.5 w-1.5 rounded-full bg-[#1A3FD8] flex-shrink-0" />
                      <span className="text-sm text-[#475569]">{benefit}</span>
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
