import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Script from "next/script";
import "../styles/index.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
  preload: true,
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
  preload: true,
});

export const viewport: Viewport = {
  themeColor: "#FFFFFF",
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  title: "Auralogics Labs — Tools That Solve Real Problems for Web Teams",
  description:
    "Auralogics Labs makes the Nexora suite — drop-in WordPress tools for static-speed delivery, SEO diagnostics, and image optimisation. No rebuild. No migration. WordPress today, any platform tomorrow.",
  metadataBase: new URL("https://auralogicslabs.com"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Auralogics Labs — Tools That Solve Real Problems for Web Teams",
    description:
      "We build focused, drop-in tools that close the gap between how your platform performs today and how it should. Starting with WordPress. Built to scale to every platform that comes next.",
    url: "https://auralogicslabs.com",
    siteName: "Auralogics Labs",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Auralogics Labs — Tools That Solve Real Problems for Web Teams",
    description:
      "Drop-in WordPress tools for static-speed delivery, SEO diagnostics, and image optimisation. No rebuild. No migration. WordPress today, any platform tomorrow.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
    },
  },
  icons: {
    icon: "/favicon.png",
    shortcut: "/favicon.png",
    apple: "/favicon.png",
  },
};

import { Providers } from "@/components/Providers";
import { CookieBanner } from "@/components/CookieBanner";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": "https://auralogicslabs.com/#organization",
        "name": "Auralogics Labs",
        "url": "https://auralogicslabs.com",
        "logo": {
          "@type": "ImageObject",
          "url": "https://auralogicslabs.com/auralogicslabs.svg",
          "width": 200,
          "height": 200
        },
        "description": "We build focused, drop-in tools that close the gap between how web platforms perform and how they should. The Nexora suite starts with WordPress — performance, SEO, media, and fleet control. WordPress today, any platform tomorrow.",
        "email": "hello@auralogicslabs.com",
        "contactPoint": {
          "@type": "ContactPoint",
          "contactType": "customer support",
          "email": "hello@auralogicslabs.com",
          "url": "https://auralogicslabs.com/contact"
        }
      },
      {
        "@type": "WebSite",
        "@id": "https://auralogicslabs.com/#website",
        "name": "Auralogics Labs",
        "url": "https://auralogicslabs.com",
        "publisher": { "@id": "https://auralogicslabs.com/#organization" }
      }
    ]
  };

  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased scroll-smooth`}
      data-scroll-behavior="smooth"
    >
      <body className="min-h-full flex flex-col font-sans relative">
        <Providers>
          {children}
        </Providers>

        <CookieBanner />

        <Script
          id="json-ld"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {/* Plausible Analytics — cookie-free, no consent required */}
        <Script defer data-domain="auralogicslabs.com" src="https://plausible.io/js/script.js" />
        {/* GTM is loaded conditionally by CookieBanner after user consent */}
      </body>
    </html>
  );
}
