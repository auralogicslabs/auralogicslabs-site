import type { Metadata } from "next";
import { LegalLayout } from "@/components/layout/LegalLayout";

export const metadata: Metadata = {
  title: "Privacy Policy — Auralogics Labs",
  description: "How Auralogics Labs collects, uses, and protects your information across our website and products.",
  alternates: { canonical: "/privacy" },
};

export default function PrivacyPage() {
  return (
    <LegalLayout
      eyebrow="Legal"
      title="Privacy Policy"
      updated="June 13, 2026"
      intro="This Privacy Policy explains what information Auralogics Labs collects, how we use it, and the choices you have. We design our products so your data stays under your control."
      sections={[
        {
          heading: "1. Information we collect",
          body: [
            "We collect information you provide directly — such as your email address when you request a free trial, contact us, or create a portal account — and basic technical data your browser sends when you visit our website.",
          ],
          bullets: [
            "Contact details you submit (name, email, message)",
            "Account information for the Auralogics Portal",
            "Standard log data (IP address, browser type, pages viewed)",
            "Cookie and analytics data, as described in our Cookies Policy",
          ],
        },
        {
          heading: "2. How our products handle your data",
          body: [
            "Our plugins are built to keep your data with you. Where a product connects to a third-party service — for example, Nexora Pulse connecting to Google Search Console or PageSpeed Insights — it uses your own API credentials and communicates directly from your WordPress site to that service.",
            "We do not proxy, copy, or store your analytics, indexing, or performance data on our servers. Credentials you enter into our plugins are stored in your own site's database.",
          ],
        },
        {
          heading: "3. How we use information",
          body: ["We use the information we collect to operate, maintain, and improve our website and products, respond to your requests, process trials and licenses, and send you service-related communications."],
        },
        {
          heading: "4. Sharing and disclosure",
          body: [
            "We do not sell your personal information. We share data only with trusted service providers that help us run our business (for example, our email delivery provider), and only to the extent necessary to provide our services. We may disclose information if required by law.",
          ],
        },
        {
          heading: "5. Data retention",
          body: ["We retain personal information only as long as needed to provide our services and fulfil the purposes described in this policy, unless a longer retention period is required by law."],
        },
        {
          heading: "6. Your rights",
          body: ["Depending on your location, you may have the right to access, correct, or delete your personal information, or to object to certain processing. To exercise these rights, contact us at hello@auralogicslabs.com."],
        },
        {
          heading: "7. Security",
          body: ["We use reasonable technical and organizational measures to protect your information. No method of transmission or storage is completely secure, but we work to safeguard your data and limit access to it."],
        },
        {
          heading: "8. Changes to this policy",
          body: ["We may update this Privacy Policy from time to time. When we do, we will revise the date at the top of this page. Continued use of our website and products after changes take effect constitutes acceptance of the updated policy."],
        },
      ]}
    />
  );
}
