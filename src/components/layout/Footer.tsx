export function Footer() {
  const footerLinks = {
    Platform: ['Nexora Engine', 'Architecture', 'Roadmap'],
    Developers: ['Documentation', 'API Reference', 'GitHub', 'Status'],
    Company: ['About', 'Contact', 'Press'],
    Legal: ['Privacy', 'Terms', 'Security', 'DPA'],
  };

  return (
    <footer className="border-t border-border bg-surface px-6 py-16 lg:px-12">
      <div className="mx-auto max-w-[1280px]">
        <div className="grid gap-12 lg:grid-cols-5">
          <div className="lg:col-span-1 flex flex-col items-start gap-4">
            <img src="/auralogicslabs.svg" alt="Auralogics Labs" className="h-8 w-auto grayscale opacity-80" />
            <p className="text-sm text-text-muted leading-relaxed">
              Infrastructure intelligence for the web you already have.
            </p>
          </div>

          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h3 className="font-semibold text-text-primary mb-4">{category}</h3>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link}>
                    <a href="#" className="text-sm text-text-secondary hover:text-brand transition-colors">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-16 border-t border-border/60 pt-8 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-[14px] text-text-muted">
            © 2026 Auralogics Labs. All rights reserved.
          </p>
          <p className="text-[14px] text-text-muted">
            Built in San Francisco. Powered by Nexora Engine.
          </p>
        </div>
      </div>
    </footer>
  );
}
