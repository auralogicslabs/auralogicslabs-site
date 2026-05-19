# Video 04: Pro Features Walkthrough - GSC + Redirect Manager

## Target Length

5 minutes.

## Audience

WordPress agency developers managing client sites.

## Recording Flow

1. Open Nexora Pro dashboard.
2. Show Google Search Console Integration:
   - Impressions.
   - Clicks.
   - CTR.
   - Average position.
   - Per-post admin visibility.
3. Explain:
   - This replaces manual GSC exports for many agency workflows.
4. Open Redirect Manager.
5. Create a 301 redirect.
6. Visit the old URL and show it intercepting a 404.
7. Show terminal split-screen:
   - `wp nexora redirect add /old-url /new-url --status=301`
   - `curl -I /old-url`
8. Explain:
   - Redirect fires before WordPress rendering.
   - Zero frontend PHP rendering overhead.

## CTA

Get Pro at $99/year - link in description.

## Website URL

`/wp-content/uploads/nexora-videos/04-pro-features-gsc-redirect-manager/index.html`
