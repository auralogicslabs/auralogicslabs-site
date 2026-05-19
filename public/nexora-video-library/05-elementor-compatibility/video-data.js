window.NEXORA_VIDEO = {
  label: "Video 05 · Elementor reassurance",
  duration: 60,
  scenes: [
    {
      start: 0,
      end: 12,
      eyebrow: "Concern 1",
      title: "Will my sliders break?",
      body: "No. Nexora captures the fully-rendered DOM, including all Elementor CSS, JavaScript, animations, and layout output.",
      kind: "checklist",
      visual: [
        { label: "Rendered DOM captured",   sub: "Full page HTML snapshot"         },
        { label: "CSS + JS preserved",      sub: "Elementor assets included"       },
        { label: "Sliders & animations",    sub: "Run as normal in static HTML"    }
      ]
    },
    {
      start: 12,
      end: 25,
      eyebrow: "Concern 2",
      title: "Will my forms stop working?",
      body: "Forms and dynamic actions fall back to live PHP automatically, so submissions still reach WordPress safely.",
      kind: "checklist",
      visual: [
        { label: "Forms",        sub: "Live PHP fallback, not static" },
        { label: "Sessions",     sub: "Protected — bypass static"    },
        { label: "Submissions",  sub: "WordPress receives them"      }
      ]
    },
    {
      start: 25,
      end: 38,
      eyebrow: "Concern 3",
      title: "Can I still edit in Elementor?",
      body: "Yes. Logged-in users always see the live WordPress environment. Static delivery only applies to public visitors.",
      kind: "comparison",
      visual: [
        {
          head:  "Logged-in Editor",
          type:  "",
          items: [ "Live PHP active", "Elementor editing normal", "All admin access intact", "Full WP environment" ]
        },
        {
          head:  "Public Visitor",
          type:  "is-after",
          items: [ "Static HTML served", "22ms TTFB", "Zero PHP execution", "Editor bypassed" ]
        }
      ]
    },
    {
      start: 38,
      end: 51,
      eyebrow: "Concern 4",
      title: "What if I need to revert?",
      body: "One toggle disables static delivery instantly. No content changes, no data loss, no Elementor data touched.",
      kind: "toggle",
      visual: [
        { label: "Static Delivery",     on: false, value: "Disabled"    },
        { label: "Elementor Data",      on: true,  value: "Unchanged"   },
        { label: "Revert time",         on: true,  value: "Instant"     }
      ]
    },
    {
      start: 51,
      end: 60,
      final: true,
      title: "Elementor stays Elementor.",
      body: "Nexora adds a delivery layer. It doesn't replace your builder, your theme, or your editing workflow."
    }
  ]
};
