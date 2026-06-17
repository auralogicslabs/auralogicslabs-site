"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { X } from "lucide-react";

const STORAGE_KEY = "al_cookie_consent";
const GTM_ID = process.env.NEXT_PUBLIC_GTM_ID;

type ConsentValue = "all" | "necessary";

function injectGtm(id: string) {
  if (document.getElementById("gtm-script")) return;
  // GTM noscript iframe
  const ns = document.createElement("noscript");
  const iframe = document.createElement("iframe");
  iframe.src = `https://www.googletagmanager.com/ns.html?id=${id}`;
  iframe.height = "0";
  iframe.width = "0";
  iframe.style.display = "none";
  iframe.style.visibility = "hidden";
  ns.appendChild(iframe);
  document.body.prepend(ns);
  // GTM inline script
  const script = document.createElement("script");
  script.id = "gtm-script";
  script.innerHTML = `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','${id}');`;
  document.head.appendChild(script);
}

export function CookieBanner() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const stored = localStorage.getItem(STORAGE_KEY) as ConsentValue | null;
    if (!stored) {
      setVisible(true);
    } else if (stored === "all" && GTM_ID) {
      injectGtm(GTM_ID);
    }
  }, []);

  function accept() {
    localStorage.setItem(STORAGE_KEY, "all");
    setVisible(false);
    if (GTM_ID) injectGtm(GTM_ID);
  }

  function decline() {
    localStorage.setItem(STORAGE_KEY, "necessary");
    setVisible(false);
  }

  if (!visible) return null;

  return (
    <div
      role="dialog"
      aria-label="Cookie consent"
      aria-modal="false"
      className="fixed bottom-0 inset-x-0 z-[9999] px-4 pb-4 sm:px-6 pointer-events-none"
    >
      <div className="pointer-events-auto w-full max-w-[760px] mx-auto bg-obsidian border border-white/10 rounded-2xl shadow-[0_24px_60px_rgba(0,0,0,0.5)] overflow-hidden">
        {/* Top accent line */}
        <div className="h-[3px] w-full" style={{ background: "linear-gradient(90deg, #1A3FD8, #7C3AED, #13716A)" }} />

        <div className="px-6 py-5 sm:flex sm:items-center sm:gap-8">
          {/* Text */}
          <div className="flex-1 min-w-0 mb-5 sm:mb-0">
            <p className="text-[14px] font-semibold text-white leading-relaxed">
              We use cookies to measure site performance and improve your experience.
              Analytics cookies are optional — necessary cookies keep the site working.{" "}
              <Link
                href="/cookies"
                className="text-brand-soft underline underline-offset-2 hover:text-white transition-colors"
              >
                Cookie Policy
              </Link>
            </p>
          </div>

          {/* Actions */}
          <div className="flex items-center gap-3 flex-shrink-0">
            <button
              onClick={decline}
              className="text-[13px] font-bold text-white/50 hover:text-white transition-colors px-4 py-2.5 rounded-xl hover:bg-white/5"
            >
              Necessary only
            </button>
            <button
              onClick={accept}
              className="text-[13px] font-black text-obsidian bg-[#F39A09] hover:bg-[#ffb347] transition-colors px-5 py-2.5 rounded-xl"
            >
              Accept all
            </button>
          </div>

          {/* Close (same as necessary only) */}
          <button
            onClick={decline}
            aria-label="Close cookie banner"
            className="absolute top-4 right-4 sm:static sm:ml-2 h-8 w-8 flex items-center justify-center rounded-lg text-white/30 hover:text-white hover:bg-white/8 transition-colors flex-shrink-0"
          >
            <X className="h-4 w-4" />
          </button>
        </div>
      </div>
    </div>
  );
}
