"use server";

export type SiteMetrics = {
  success: boolean;
  error?: string;
  score: number;
  ttfb: { current: string; numericMs: number; optimized: string; gain: string };
  fcp:  { current: string; numericMs: number };
  lcp:  { current: string; numericMs: number; optimized: string; gain: string };
  tbt:  { current: string; numericMs: number };
  cls:  { current: string };
  speedIndex: { current: string };
  isWordPress: boolean;
  pageSize?: string;
};

export async function fetchSiteMetrics(url: string): Promise<SiteMetrics> {
  const normalised = url.startsWith("http") ? url : `https://${url}`;

  // ── 1. Google PageSpeed Insights (free, no key required for basic quota) ──
  const psiEndpoint =
    `https://www.googleapis.com/pagespeedonline/v5/runPagespeed` +
    `?url=${encodeURIComponent(normalised)}&strategy=mobile&category=performance`;

  try {
    const psiRes = await fetch(psiEndpoint, { next: { revalidate: 0 } });
    const psi = await psiRes.json();

    if (!psiRes.ok || psi.error) {
      return {
        success: false,
        error: psi.error?.message ?? "PageSpeed API unavailable",
        score: 0, ttfb: { current: "N/A", numericMs: 0, optimized: "22ms", gain: "N/A" },
        fcp: { current: "N/A", numericMs: 0 }, lcp: { current: "N/A", numericMs: 0, optimized: "0.9s", gain: "N/A" },
        tbt: { current: "N/A", numericMs: 0 }, cls: { current: "N/A" },
        speedIndex: { current: "N/A" }, isWordPress: false,
      };
    }

    const audits = psi.lighthouseResult?.audits ?? {};
    const score  = Math.round((psi.lighthouseResult?.categories?.performance?.score ?? 0) * 100);

    // TTFB
    const ttfbMs  = Math.round(audits["server-response-time"]?.numericValue ?? 0);
    const ttfbStr = audits["server-response-time"]?.displayValue ?? `${ttfbMs}ms`;
    const ttfbGain = ttfbMs > 0 ? `${Math.round((1 - 22 / ttfbMs) * 100)}%` : "N/A";

    // LCP
    const lcpMs  = Math.round(audits["largest-contentful-paint"]?.numericValue ?? 0);
    const lcpStr = audits["largest-contentful-paint"]?.displayValue ?? "N/A";
    const lcpOpt = lcpMs > 900 ? `${((lcpMs * 0.28) / 1000).toFixed(1)}s` : "0.9s";
    const lcpGain = lcpMs > 0 ? `${Math.round((1 - parseFloat(lcpOpt) / (lcpMs / 1000)) * 100)}%` : "N/A";

    // FCP
    const fcpMs  = Math.round(audits["first-contentful-paint"]?.numericValue ?? 0);
    const fcpStr = audits["first-contentful-paint"]?.displayValue ?? "N/A";

    // TBT
    const tbtMs  = Math.round(audits["total-blocking-time"]?.numericValue ?? 0);
    const tbtStr = audits["total-blocking-time"]?.displayValue ?? "N/A";

    // CLS
    const clsStr = audits["cumulative-layout-shift"]?.displayValue ?? "N/A";

    // Speed Index
    const siStr = audits["speed-index"]?.displayValue ?? "N/A";

    // WordPress detection via technology hints in PSI response
    const techEntities = psi.lighthouseResult?.entities ?? [];
    const techStr = JSON.stringify(psi.lighthouseResult?.audits?.["uses-text-compression"] ?? {});
    const wpHint = techStr.toLowerCase().includes("wordpress") ||
      JSON.stringify(psi).toLowerCase().includes("wp-content") ||
      JSON.stringify(psi).toLowerCase().includes("wp-json");

    // Page weight
    const totalBytes = audits["total-byte-weight"]?.numericValue ?? 0;
    const pageSize = totalBytes > 0 ? `${(totalBytes / 1024).toFixed(0)} KB` : undefined;

    return {
      success: true,
      score,
      ttfb: { current: ttfbStr, numericMs: ttfbMs, optimized: "22ms", gain: ttfbGain },
      fcp:  { current: fcpStr, numericMs: fcpMs },
      lcp:  { current: lcpStr, numericMs: lcpMs, optimized: lcpOpt, gain: lcpGain },
      tbt:  { current: tbtStr, numericMs: tbtMs },
      cls:  { current: clsStr },
      speedIndex: { current: siStr },
      isWordPress: wpHint,
      pageSize,
    };
  } catch (err: any) {
    return {
      success: false,
      error: err?.message ?? "Network error",
      score: 0, ttfb: { current: "N/A", numericMs: 0, optimized: "22ms", gain: "N/A" },
      fcp: { current: "N/A", numericMs: 0 }, lcp: { current: "N/A", numericMs: 0, optimized: "0.9s", gain: "N/A" },
      tbt: { current: "N/A", numericMs: 0 }, cls: { current: "N/A" },
      speedIndex: { current: "N/A" }, isWordPress: false,
    };
  }
}
