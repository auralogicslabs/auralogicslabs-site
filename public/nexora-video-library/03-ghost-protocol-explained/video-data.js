window.NEXORA_VIDEO = {
  label: "Video 03 · Ghost Protocol",
  duration: 60,
  scenes: [
    {
      start: 0,
      end: 13,
      eyebrow: "Before",
      title: "WordPress fingerprints are easy to scan.",
      body: "A basic cURL request exposes PHP version, REST API hints, wp-content paths, and the WordPress generator tag.",
      kind: "terminal",
      visual: "$ curl -I example.com\nx-powered-by: PHP/8.2\nlink: <https://example.com/wp-json/>; rel=\"https://api.w.org/\"\ngenerator: WordPress 6.x\n/wp-content/themes/theme/style.css"
    },
    {
      start: 13,
      end: 26,
      eyebrow: "Enable",
      title: "Turn on Ghost Protocol from Nexora Security.",
      body: "One toggle inside Nexora Security hardening. Public fingerprints are masked; admin editing stays fully intact.",
      kind: "toggle",
      visual: [
        { label: "Ghost Protocol",       on: true,  value: "Enabled"  },
        { label: "WordPress editing",    on: true,  value: "Normal"   },
        { label: "Public fingerprints",  on: false, value: "Hidden"   }
      ]
    },
    {
      start: 26,
      end: 42,
      eyebrow: "After",
      title: "The same scan sees a much cleaner response.",
      body: "Run cURL again. WordPress headers are stripped or replaced, REST hints removed, and wp-content paths masked.",
      kind: "terminal",
      visual: "$ curl -I example.com\nserver: nginx\nx-cache: HIT\nx-nexora-delivery: static\nlink: [removed]\nx-powered-by: [removed]\n/wp-content/: masked"
    },
    {
      start: 42,
      end: 54,
      eyebrow: "What changes",
      title: "A cleaner public surface — WordPress stays useful.",
      body: "The global namespace is renamed, REST hints are reduced, and scanner-friendly metadata disappears from public responses.",
      kind: "comparison",
      visual: [
        {
          head:  "Before Ghost Protocol",
          type:  "",
          items: [ "window.wp global",  "/wp-content/ paths", "WordPress headers", "REST API hints" ]
        },
        {
          head:  "After Ghost Protocol",
          type:  "is-after",
          items: [ "window.ncx (renamed)", "Paths masked", "Headers stripped",  "REST hints removed" ]
        }
      ]
    },
    {
      start: 54,
      end: 60,
      final: true,
      title: "Hide WordPress from scanners in 60 seconds.",
      body: "Ghost Protocol is a practical hardening layer for public WordPress delivery."
    }
  ]
};
