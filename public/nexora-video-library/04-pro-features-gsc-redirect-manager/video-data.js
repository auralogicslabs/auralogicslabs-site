window.NEXORA_VIDEO = {
  label: "Video 04 · Pro features",
  duration: 120,
  scenes: [
    {
      start: 0,
      end: 16,
      eyebrow: "Agency workflow",
      title: "Two Pro tools for client-site operations.",
      body: "Search Console insight and the Redirect Manager live inside the Nexora command center — no extra plugins.",
      kind: "checklist",
      visual: [
        { label: "GSC Integration",   sub: "Impressions & CTR per post"         },
        { label: "Redirect Manager",  sub: "301s that fire before PHP renders"  },
        { label: "Less plugin sprawl",sub: "Both in one dashboard"              }
      ]
    },
    {
      start: 16,
      end: 38,
      eyebrow: "Google Search Console",
      title: "See impressions and CTR per post.",
      body: "Nexora brings impressions, clicks, CTR, and average position directly into WordPress admin.",
      kind: "metrics",
      visual: [
        { label: "Impressions", value: "12.4k" },
        { label: "Clicks",      value: "842"   },
        { label: "CTR",         value: "6.8%"  },
        { label: "Position",    value: "8.2"   }
      ]
    },
    {
      start: 38,
      end: 58,
      eyebrow: "Per-post insight",
      title: "SEO data appears where developers already work.",
      body: "Open any post and review performance — no manual GSC exports, no spreadsheet juggling.",
      kind: "checklist",
      visual: [
        { label: "GSC panel in post admin", sub: "Right below the editor"       },
        { label: "Live query data",         sub: "Top search queries visible"   },
        { label: "No manual exports",       sub: "Data refreshes automatically" }
      ]
    },
    {
      start: 58,
      end: 84,
      eyebrow: "Redirect Manager",
      title: "Create a 301 and intercept the 404.",
      body: "Create a 301, test the old URL, and see Nexora intercept the request before WordPress renders.",
      kind: "terminal",
      visual: "$ wp nexora redirect add /old-service /new-service --status=301\nRedirect created.\n\n$ curl -I example.com/old-service\nHTTP/2 301\nlocation: /new-service\nx-nexora-redirect: hit"
    },
    {
      start: 84,
      end: 108,
      eyebrow: "Why it matters",
      title: "Replace extra plugins and manual exports.",
      body: "Redirects fire early with zero PHP rendering overhead. Combined with GSC data, this can replace two separate tools.",
      kind: "comparison",
      visual: [
        {
          head:  "Without Nexora Pro",
          type:  "",
          items: [ "Redirect plugin installed", "Manual GSC CSV exports", "PHP stack on every redirect", "Two separate dashboards" ]
        },
        {
          head:  "With Nexora Pro",
          type:  "is-after",
          items: [ "Redirect Manager built-in", "GSC data in WP admin", "Zero PHP render overhead",   "One command center" ]
        }
      ]
    },
    {
      start: 108,
      end: 120,
      final: true,
      title: "Get Pro at $99/year.",
      body: "Static delivery, search insight, and redirect control — one agency-ready tool."
    }
  ]
};
