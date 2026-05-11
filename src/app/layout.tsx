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
  title: "Nexora Engine — Modern Headless Infrastructure for WordPress",
  description:
    "Transform any WordPress site into a static-speed, fingerprint-free, headless-grade platform. 22ms TTFB. No rebuild required. By Auralogics Labs.",
  metadataBase: new URL("https://auralogicslabs.com"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Nexora Engine — Modern Headless Infrastructure for WordPress",
    description:
      "Transform any WordPress site into a static-speed, fingerprint-free, headless-grade platform. 22ms TTFB. No rebuild required. By Auralogics Labs.",
    url: "https://auralogicslabs.com",
    siteName: "Auralogics Labs",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Nexora Engine — Modern Headless Infrastructure for WordPress",
    description:
      "Transform any WordPress site into a static-speed, fingerprint-free, headless-grade platform. 22ms TTFB. No rebuild required. By Auralogics Labs.",
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
        "description": "Infrastructure intelligence platform modernizing WordPress delivery."
      },
      {
        "@type": "SoftwareApplication",
        "@id": "https://auralogicslabs.com/#software",
        "name": "Nexora Engine",
        "applicationCategory": "WebApplication",
        "operatingSystem": "WordPress 5.8+",
        "offers": { "@type": "Offer", "price": "0", "priceCurrency": "USD" },
        "publisher": { "@id": "https://auralogicslabs.com/#organization" },
        "description": "Headless infrastructure delivery layer for WordPress."
      }
    ]
  };

  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased scroll-smooth`}
    >
      <body className="min-h-full flex flex-col font-sans">
        {children}
        
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
