import type { Metadata } from "next";
import { LegalLayout } from "@/components/layout/LegalLayout";

export const metadata: Metadata = {
  title: "Cookies Policy — Auralogics Labs",
  description: "How Auralogics Labs uses cookies and similar technologies on our website, and how you can control them.",
  alternates: { canonical: "/cookies" },
};

export default function CookiesPage() {
  return (
    <LegalLayout
      eyebrow="Legal"
      title="Cookies Policy"
      updated="June 13, 2026"
      intro="This Cookies Policy explains how Auralogics Labs uses cookies and similar technologies on our website, and the choices available to you."
      sections={[
        {
          heading: "1. What are cookies?",
          body: ["Cookies are small text files placed on your device when you visit a website. They help the site function, remember your preferences, and understand how it is used. Similar technologies include local storage and pixels."],
        },
        {
          heading: "2. Types of cookies we use",
          body: ["We use a limited set of cookies, grouped by purpose:"],
          bullets: [
            "Essential — required for the site and portal to function (e.g. session and security).",
            "Preferences — remember choices such as display settings.",
            "Analytics — help us understand aggregate usage so we can improve the site.",
          ],
        },
        {
          heading: "3. Third-party cookies",
          body: ["Some cookies may be set by third-party services we use, such as analytics providers. These providers have their own privacy and cookie policies governing their use of data."],
        },
        {
          heading: "4. Managing cookies",
          body: [
            "Most browsers let you view, manage, and delete cookies through their settings. You can choose to block or remove cookies, but some parts of the site may not function properly as a result.",
            "Where required by law, we will ask for your consent before placing non-essential cookies.",
          ],
        },
        {
          heading: "5. Changes to this policy",
          body: ["We may update this Cookies Policy from time to time. We will revise the date at the top of this page when we do. Please check back periodically for the latest version."],
        },
        {
          heading: "6. Contact",
          body: ["If you have questions about our use of cookies, contact us at hello@auralogicslabs.com."],
        },
      ]}
    />
  );
}
