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
  title: "Auralogics Labs: Static-Speed WordPress Without the Rebuild",
  description:
    "Drop-in WordPress plugins that deliver 22ms page loads, fix SEO indexing gaps, and cut image payload by 70%. No headless migration, no DevOps, no rebuild required.",
  metadataBase: new URL("https://auralogicslabs.com"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Auralogics Labs: Static-Speed WordPress Without the Rebuild",
    description:
      "Drop-in WordPress plugins that deliver 22ms page loads, fix SEO indexing gaps, and cut image payload by 70%. No headless migration, no DevOps, no rebuild required.",
    url: "https://auralogicslabs.com",
    siteName: "Auralogics Labs",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Auralogics Labs: Static-Speed WordPress Without the Rebuild",
    description:
      "Drop-in WordPress plugins that deliver 22ms page loads, fix SEO indexing gaps, and cut image payload by 70%. No headless migration, no DevOps, no rebuild required.",
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
        "logo": "https://auralogicslabs.com/auralogicslabs.svg",
        "description": "Infrastructure intelligence platform for WordPress — runtime delivery, media optimization, and orchestration."
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
        
        <Script
          id="json-ld"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {/* Plausible Analytics setup */}
        <Script defer data-domain="auralogicslabs.com" src="https://plausible.io/js/script.js" />
      </body>
    </html>
  );
}
