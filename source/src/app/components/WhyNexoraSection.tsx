import { AlertCircle, Code, Server, Lock } from 'lucide-react';
import { motion } from 'motion/react';

export function WhyNexoraSection() {
  const problems = [
    {
      icon: Code,
      title: 'Headless Complexity',
      description: 'Full React migrations require complete rebuilds and specialized DevOps teams.',
    },
    {
      icon: Server,
      title: 'PHP Rendering Bottlenecks',
      description: 'Traditional WordPress struggles with performance under real-world traffic.',
    },
    {
      icon: Lock,
      title: 'Exposed Infrastructure',
      description: 'WordPress fingerprints and REST endpoints broadcast vulnerabilities.',
    },
    {
      icon: AlertCircle,
      title: 'Static Export Limitations',
      description: 'Current solutions require constant rebuilds and break dynamic features.',
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
            Modern WordPress Shouldn't Require
            <br />
            Rebuilding Everything
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-[#475569]">
            Nexora Engine bridges traditional WordPress and modern frontend architecture without enterprise complexity.
          </p>
        </motion.div>

        <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {problems.map((problem, index) => {
            const Icon = problem.icon;
            return (
              <motion.div
                key={problem.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="rounded-xl border border-[#E2E8F0] bg-[#F8FAFC] p-6 hover:border-[#1A3FD8] hover:shadow-md transition-all"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-white border border-[#E2E8F0]">
                  <Icon size={24} className="text-[#1A3FD8]" />
                </div>
                <h3 className="mt-4 font-semibold text-[#0F172A]">{problem.title}</h3>
                <p className="mt-2 text-sm text-[#64748B] leading-relaxed">{problem.description}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
