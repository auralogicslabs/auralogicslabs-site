import { ArrowRight } from 'lucide-react';
import { motion } from 'motion/react';

export function FinalCTASection() {
  return (
    <section className="bg-gradient-to-br from-[#1A3FD8] to-[#2563EB] px-6 py-24 lg:px-8 lg:py-32">
      <div className="mx-auto max-w-4xl text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl font-semibold tracking-tight text-white lg:text-5xl">
            Build Modern Infrastructure
            <br />
            On WordPress
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-white/90 leading-relaxed">
            Transform any WordPress installation into a high-performance infrastructure delivery platform with Nexora Engine.
          </p>

          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <button className="group inline-flex items-center gap-2 rounded-lg bg-white px-8 py-4 font-semibold text-[#1A3FD8] hover:bg-[#F8FAFC] transition-colors shadow-lg">
              Start Free
              <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
            </button>
            <button className="inline-flex items-center gap-2 rounded-lg border-2 border-white bg-transparent px-8 py-4 font-semibold text-white hover:bg-white/10 transition-colors">
              Request Early Access
            </button>
          </div>

          <div className="mt-12 flex flex-wrap justify-center gap-8 text-white/80">
            <div className="flex items-center gap-2">
              <div className="h-2 w-2 rounded-full bg-[#16A34A]" />
              <span className="text-sm">No credit card required</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="h-2 w-2 rounded-full bg-[#16A34A]" />
              <span className="text-sm">One-click setup</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="h-2 w-2 rounded-full bg-[#16A34A]" />
              <span className="text-sm">Works on any hosting</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
