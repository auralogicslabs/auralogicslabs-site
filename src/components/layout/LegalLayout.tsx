import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";

export interface LegalSection {
  heading: string;
  body: string[]; // paragraphs
  bullets?: string[];
}

export function LegalLayout({
  eyebrow,
  title,
  intro,
  updated,
  sections,
}: {
  eyebrow: string;
  title: string;
  intro: string;
  updated?: string;
  sections: LegalSection[];
}) {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        {/* Header band — light, matches header on subpages */}
        <section className="relative overflow-hidden bg-[#F4F7FB] border-b border-border pt-36 pb-16 md:pt-44 md:pb-20 px-6 sm:px-10 lg:px-16">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,#CBD5E1_1px,transparent_0)] bg-[size:48px_48px] opacity-30 pointer-events-none" />
          <div className="absolute -top-24 left-1/3 w-[600px] h-[400px] rounded-full blur-[180px] pointer-events-none" style={{ background: "rgba(26,63,216,0.08)" }} />
          <div className="relative z-10 max-w-[860px] mx-auto">
            <span className="inline-block text-[11px] font-black uppercase tracking-[0.3em] text-brand mb-4">
              {eyebrow}
            </span>
            <h1 className="text-[40px] md:text-[56px] font-extrabold text-obsidian leading-[1.02] tracking-[-0.045em] mb-5">
              {title}
            </h1>
            <p className="text-[17px] md:text-[18px] text-text-secondary leading-[1.65] font-medium max-w-[620px]">
              {intro}
            </p>
            {updated && (
              <p className="mt-6 text-[13px] font-semibold text-text-muted uppercase tracking-[0.14em]">
                Last updated · {updated}
              </p>
            )}
          </div>
        </section>

        {/* Body */}
        <section className="px-6 sm:px-10 lg:px-16 py-16 md:py-24">
          <div className="max-w-[760px] mx-auto space-y-12">
            {sections.map((s, i) => (
              <div key={i}>
                <h2 className="text-[22px] md:text-[26px] font-extrabold text-obsidian tracking-[-0.02em] mb-4">
                  {s.heading}
                </h2>
                <div className="space-y-4">
                  {s.body.map((p, j) => (
                    <p key={j} className="text-[16px] md:text-[17px] text-text-secondary leading-[1.75] font-medium">
                      {p}
                    </p>
                  ))}
                </div>
                {s.bullets && (
                  <ul className="mt-4 space-y-2.5">
                    {s.bullets.map((b, k) => (
                      <li key={k} className="flex items-start gap-3 text-[15px] md:text-[16px] text-text-secondary leading-[1.6] font-medium">
                        <span className="mt-2 h-1.5 w-1.5 rounded-full bg-brand flex-shrink-0" />
                        <span>{b}</span>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            ))}

            {/* Contact footer */}
            <div className="border-t border-border pt-10">
              <p className="text-[15px] text-text-secondary font-medium leading-relaxed">
                Questions about this page? Email us at{" "}
                <a href="mailto:hello@auralogicslabs.com" className="text-brand font-bold hover:underline">
                  hello@auralogicslabs.com
                </a>
                .
              </p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
