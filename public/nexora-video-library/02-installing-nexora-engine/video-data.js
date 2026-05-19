window.NEXORA_VIDEO = {
  label: "Video 02 · Installation walkthrough",
  duration: 90,
  scenes: [
    {
      start: 0,
      end: 14,
      eyebrow: "Step 1",
      title: "Upload Nexora Engine like any WordPress plugin.",
      body: "Open Plugins, upload the Nexora zip, and install it through the standard WordPress flow.",
      kind: "steps",
      visual: [
        { label: "Upload ZIP",   sub: "Plugins → Add New" },
        { label: "Install",      sub: "Standard flow"     },
        { label: "Activate",     sub: "One click"         }
      ]
    },
    {
      start: 14,
      end: 30,
      eyebrow: "Step 2",
      title: "Activate the plugin and open the setup wizard.",
      body: "After activation, the setup wizard checks your server and prepares the static delivery layer.",
      kind: "checklist",
      visual: [
        { label: "Server Detected",   sub: "Nginx or Apache identified"  },
        { label: "WP_CACHE Enabled",  sub: "wp-config.php updated"       },
        { label: "Drop-in Ready",     sub: "advanced-cache.php prepared" }
      ]
    },
    {
      start: 30,
      end: 48,
      eyebrow: "Step 3",
      title: "Confirm WP_CACHE and the static delivery drop-in.",
      body: "Nexora confirms WP_CACHE and writes advanced-cache.php automatically — no manual file edits.",
      kind: "checklist",
      visual: [
        { label: "WP_CACHE = true",          sub: "Confirmed in wp-config"       },
        { label: "advanced-cache.php",       sub: "Written automatically"        },
        { label: "No manual server changes", sub: "Works on all shared hosts"    }
      ]
    },
    {
      start: 48,
      end: 64,
      eyebrow: "Step 4",
      title: "Run the first snapshot capture.",
      body: "The first build captures pre-rendered HTML snapshots from your existing pages and posts.",
      kind: "steps",
      visual: [
        { label: "Trigger Build",     sub: "One-click in Nexora" },
        { label: "Snapshots",         sub: "HTML captured"       },
        { label: "Static Layer Live", sub: "Delivery active"     }
      ]
    },
    {
      start: 64,
      end: 80,
      eyebrow: "Step 5",
      title: "Validate the dashboard and public response.",
      body: "Check Cache Hit Ratio, TTFB, then verify the static response header in an incognito tab.",
      kind: "metrics",
      visual: [
        { label: "Cache Hit Ratio", value: "High"        },
        { label: "TTFB",           value: "22ms"         },
        { label: "PHP execution",  value: "Zero"         },
        { label: "Mode",           value: "Static HTML"  }
      ]
    },
    {
      start: 80,
      end: 90,
      final: true,
      title: "Your site is now serving static HTML.",
      body: "That's it. Editors keep using WordPress normally — visitors get the static delivery path."
    }
  ]
};
