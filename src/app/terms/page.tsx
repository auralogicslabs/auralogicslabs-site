import type { Metadata } from "next";
import { LegalLayout } from "@/components/layout/LegalLayout";

export const metadata: Metadata = {
  title: "Terms of Service — Auralogics Labs",
  description: "The terms and conditions that govern your use of Auralogics Labs websites, products, and services.",
  alternates: { canonical: "/terms" },
};

export default function TermsPage() {
  return (
    <LegalLayout
      eyebrow="Legal"
      title="Terms of Service"
      updated="June 13, 2026"
      intro="These Terms of Service govern your access to and use of the Auralogics Labs website, products, and services. By using them, you agree to these terms."
      sections={[
        {
          heading: "1. Acceptance of terms",
          body: ["By accessing or using our website, plugins, or the Auralogics Portal, you agree to be bound by these Terms of Service and our Privacy Policy. If you do not agree, please do not use our services."],
        },
        {
          heading: "2. Use of our products",
          body: [
            "We grant you a limited, non-exclusive, non-transferable right to use our products in accordance with these terms and any applicable license. Free products may be used without charge, subject to these terms; paid products and trials are subject to the relevant plan and billing terms.",
          ],
          bullets: [
            "Do not misuse, reverse-engineer, or attempt to disrupt our services",
            "Do not use our products for any unlawful or infringing purpose",
            "You are responsible for your own site, content, and credentials",
          ],
        },
        {
          heading: "3. Free trials",
          body: ["We may offer a free trial of certain products. Trials are provided as-is for the stated period. We may modify or discontinue trials at any time. No payment card is required to start a trial unless explicitly stated."],
        },
        {
          heading: "4. Intellectual property",
          body: ["The Auralogics Labs name, logos, products, and content are owned by us or our licensors and are protected by intellectual property laws. These terms do not grant you any right to use our trademarks without prior written permission."],
        },
        {
          heading: "5. Third-party services",
          body: ["Our products may connect to third-party services using your own credentials (for example, Google Search Console or PageSpeed Insights). Your use of those services is governed by their respective terms, and we are not responsible for them."],
        },
        {
          heading: "6. Disclaimers",
          body: ["Our services are provided “as is” and “as available” without warranties of any kind, whether express or implied. We do not warrant that the services will be uninterrupted, error-free, or that results will meet your expectations."],
        },
        {
          heading: "7. Limitation of liability",
          body: ["To the maximum extent permitted by law, Auralogics Labs will not be liable for any indirect, incidental, special, consequential, or punitive damages, or any loss of profits or data, arising from your use of our services."],
        },
        {
          heading: "8. Changes to these terms",
          body: ["We may update these Terms of Service from time to time. We will revise the date at the top of this page when we do. Your continued use of our services after changes take effect constitutes acceptance of the updated terms."],
        },
        {
          heading: "9. Contact",
          body: ["If you have any questions about these terms, contact us at hello@auralogicslabs.com."],
        },
      ]}
    />
  );
}
