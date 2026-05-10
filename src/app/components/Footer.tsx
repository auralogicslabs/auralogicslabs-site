import { Github, Twitter, Linkedin } from 'lucide-react';

export function Footer() {
  const footerLinks = {
    Platform: ['Features', 'Architecture', 'Security', 'Performance'],
    Resources: ['Documentation', 'API Reference', 'Guides', 'Changelog'],
    Developers: ['GitHub', 'API Docs', 'CLI Tools', 'Webhooks'],
    Company: ['About', 'Blog', 'Careers', 'Contact'],
  };

  return (
    <footer className="bg-slate-950 px-6 py-16 text-slate-300 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-12 lg:grid-cols-5">
          <div className="lg:col-span-2">
            <div className="flex items-center gap-2">
              <img src="/auralogicslabs.svg" alt="Auralogics Labs" className="h-10 w-auto" />
            </div>
            <p className="mt-4 text-sm leading-relaxed text-slate-400 max-w-sm">
              Modern infrastructure intelligence platform for WordPress. Transform traditional WordPress into a high-performance delivery experience with secure edge delivery.
            </p>
            <div className="mt-6 flex items-center gap-4">
              <a
                href="#"
                className="flex h-10 w-10 items-center justify-center rounded-lg border border-slate-800 text-slate-400 transition hover:border-white hover:text-white"
              >
                <Github size={20} />
              </a>
              <a
                href="#"
                className="flex h-10 w-10 items-center justify-center rounded-lg border border-slate-800 text-slate-400 transition hover:border-white hover:text-white"
              >
                <Twitter size={20} />
              </a>
              <a
                href="#"
                className="flex h-10 w-10 items-center justify-center rounded-lg border border-slate-800 text-slate-400 transition hover:border-white hover:text-white"
              >
                <Linkedin size={20} />
              </a>
            </div>
          </div>

          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h3 className="font-semibold text-white">{category}</h3>
              <ul className="mt-4 space-y-3 text-sm text-slate-400">
                {links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="transition hover:text-white"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 border-t border-slate-800 pt-8">
          <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
            <p className="text-sm text-slate-500">
              © 2026 Auralogics Labs. All rights reserved.
            </p>
            <div className="flex gap-6 text-sm text-slate-500">
              <a href="#" className="transition hover:text-white">
                Privacy Policy
              </a>
              <a href="#" className="transition hover:text-white">
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
