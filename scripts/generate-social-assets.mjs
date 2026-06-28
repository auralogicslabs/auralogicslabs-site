import { copyFile, mkdir, readFile } from "node:fs/promises";
import { existsSync, readFileSync } from "node:fs";
import path from "node:path";
import vm from "node:vm";
import sharp from "sharp";
import ts from "typescript";

const root = process.cwd();
const socialDir = path.join(root, "public", "social");
const insightsSocialDir = path.join(socialDir, "insights");
const appDir = path.join(root, "src", "app");
const backgroundPath = path.join(socialDir, "auralogics-social-background.png");
const darkBackgroundPath = path.join(socialDir, "auralogics-social-background-dark.png");
const linkedinOptionBackgrounds = {
  aiWave: path.join(socialDir, "auralogics-linkedin-bg-ai-wave.png"),
  dataGradient: path.join(socialDir, "auralogics-linkedin-bg-data-gradient.png"),
  blueprint: path.join(socialDir, "auralogics-linkedin-bg-blueprint.png"),
  systemsMap: path.join(socialDir, "auralogics-linkedin-bg-systems-map.png"),
};
const logoPath = path.join(root, "public", "logo.png");
const markPath = path.join(root, "public", "favicon.png");
const blogDataPath = path.join(root, "src", "data", "blog.ts");

const brand = {
  dark: "#0F172A",
  obsidian: "#020617",
  ink: "#07111F",
  muted: "#475569",
  soft: "#64748B",
  border: "#D8E1EE",
  brand: "#1A3FD8",
  sky: "#3FA1DA",
  amber: "#F59E0B",
  white: "#FFFFFF",
};

const copy = {
  headline: ["Tools that solve real", "problems for web teams."],
  linkedinHeadline: ["Tools that solve real problems", "for web teams."],
  subline: "Nexora suite | WordPress today, any platform tomorrow.",
  micro: "Static-speed delivery | SEO diagnostics | Media optimisation",
};

const productCtas = {
  "nexora-engine": {
    label: "Explore Nexora Engine",
    line: "Static-speed WordPress without a rebuild",
    accent: "#1A3FD8",
  },
  "nexora-pulse": {
    label: "Install Nexora Pulse Free",
    line: "SEO diagnostics from real site signals",
    accent: "#13716A",
  },
  "nexora-media": {
    label: "Explore Nexora Media",
    line: "AVIF and WebP conversion for WordPress",
    accent: "#7C3AED",
  },
  platform: {
    label: "Explore the Nexora Suite",
    line: "Focused tools for web teams",
    accent: "#1A3FD8",
  },
};

const outputs = [
  {
    file: "auralogics-og.png",
    width: 1200,
    height: 630,
    type: "og",
    logo: { x: 72, y: 54, width: 430 },
    headline: { x: 80, y: 238, size: 64, lineHeight: 74, lines: copy.headline },
    subline: { x: 82, y: 414, size: 27, text: copy.subline },
    meta: { x: 82, y: 526, size: 22 },
  },
  {
    file: "auralogics-twitter.png",
    width: 1200,
    height: 630,
    type: "og",
    logo: { x: 72, y: 54, width: 430 },
    headline: { x: 80, y: 238, size: 64, lineHeight: 74, lines: copy.headline },
    subline: { x: 82, y: 414, size: 27, text: copy.subline },
    meta: { x: 82, y: 526, size: 22 },
  },
  {
    file: "auralogics-linkedin-banner.png",
    width: 1584,
    height: 396,
    type: "linkedin-profile",
    logo: { x: 76, y: 52, width: 420 },
    headline: {
      x: 82,
      y: 184,
      size: 53,
      lineHeight: 60,
      lines: copy.linkedinHeadline,
    },
    subline: { x: 86, y: 326, size: 25, text: copy.subline },
  },
  {
    file: "auralogics-linkedin-company-banner.png",
    width: 1128,
    height: 191,
    type: "linkedin-company",
    logo: { x: 222, y: 34, width: 300 },
    headline: {
      x: 224,
      y: 116,
      size: 28,
      lineHeight: 34,
      lines: ["Tools that solve real problems for web teams."],
    },
    subline: { x: 224, y: 153, size: 16, text: copy.subline },
  },
];

const darkLinkedInOutputs = [
  {
    file: "auralogics-linkedin-banner-dark.png",
    width: 1584,
    height: 396,
    safeWidth: 360,
    headline: {
      x: 420,
      y: 138,
      size: 48,
      lineHeight: 56,
      lines: ["WordPress today.", "Any platform tomorrow."],
    },
    subline: { x: 424, y: 274, size: 23, text: "Static-speed delivery | SEO diagnostics | Media optimisation" },
    label: { x: 424, y: 78, text: "NEXORA SUITE" },
  },
  {
    file: "auralogics-linkedin-company-banner-dark.png",
    width: 1128,
    height: 191,
    safeWidth: 260,
    headline: {
      x: 312,
      y: 82,
      size: 31,
      lineHeight: 36,
      lines: ["WordPress today. Any platform tomorrow."],
    },
    subline: { x: 314, y: 126, size: 16, text: "Performance, SEO, and media tools for web teams." },
    label: { x: 314, y: 45, text: "AURALOGICS LABS" },
  },
];

const linkedInOptionOutputs = [
  {
    file: "auralogics-linkedin-banner-option-01-ai-wave.png",
    background: linkedinOptionBackgrounds.aiWave,
    width: 1584,
    height: 396,
    mode: "dark",
    fitPosition: "center",
    safeWidth: 390,
    label: { x: 1434, y: 86, text: "AURALOGICS LABS", anchor: "end" },
    headline: {
      x: 1434,
      y: 154,
      size: 48,
      lineHeight: 58,
      lines: ["The performance layer", "for modern web teams."],
      anchor: "end",
    },
    subline: {
      x: 1434,
      y: 318,
      size: 18,
      text: "Static delivery | SEO diagnostics | Media optimisation",
      anchor: "end",
    },
    chips: null,
    watermarkOpacity: 0.045,
  },
  {
    file: "auralogics-linkedin-company-banner-option-01-ai-wave.png",
    background: linkedinOptionBackgrounds.aiWave,
    width: 1128,
    height: 191,
    mode: "dark",
    fitPosition: "center",
    safeWidth: 260,
    label: { x: 1024, y: 46, text: "AURALOGICS LABS", anchor: "end" },
    headline: {
      x: 1024,
      y: 86,
      size: 30,
      lineHeight: 35,
      lines: ["The performance layer", "for modern web teams."],
      anchor: "end",
    },
    subline: { x: 1024, y: 154, size: 13, text: "Static delivery | SEO diagnostics | Media optimisation", anchor: "end" },
    chips: null,
    watermarkOpacity: 0.035,
  },
  {
    file: "auralogics-linkedin-banner-option-02-data-gradient.png",
    background: linkedinOptionBackgrounds.dataGradient,
    width: 1584,
    height: 396,
    mode: "dark",
    fitPosition: "center",
    safeWidth: 390,
    label: { x: 466, y: 86, text: "NEXORA SUITE" },
    headline: {
      x: 464,
      y: 156,
      size: 54,
      lineHeight: 62,
      lines: ["Every web signal.", "Actionable in one place."],
      accentLine: 1,
    },
    subline: { x: 468, y: 302, size: 20, text: "Performance, SEO, and media intelligence for WordPress teams." },
    chips: {
      x: 468,
      y: 326,
      items: ["Nexora Engine", "Nexora Pulse", "Nexora Media"],
    },
    watermarkOpacity: 0,
  },
  {
    file: "auralogics-linkedin-company-banner-option-02-data-gradient.png",
    background: linkedinOptionBackgrounds.dataGradient,
    width: 1128,
    height: 191,
    mode: "dark",
    fitPosition: "center",
    safeWidth: 260,
    label: { x: 314, y: 45, text: "NEXORA SUITE" },
    headline: {
      x: 312,
      y: 84,
      size: 31,
      lineHeight: 36,
      lines: ["Every web signal.", "Actionable in one place."],
      accentLine: 1,
    },
    subline: { x: 314, y: 154, size: 13, text: "Performance, SEO, and media intelligence." },
    chips: null,
    watermarkOpacity: 0,
  },
  {
    file: "auralogics-linkedin-banner-option-03-blueprint.png",
    background: linkedinOptionBackgrounds.blueprint,
    width: 1584,
    height: 396,
    mode: "blue",
    fitPosition: "center",
    safeWidth: 390,
    label: { x: 426, y: 84, text: "AURALOGICS LABS" },
    headline: {
      x: 424,
      y: 156,
      size: 56,
      lineHeight: 64,
      lines: ["The performance", "tools company."],
    },
    subline: { x: 428, y: 314, size: 20, text: "Purpose-built products for speed, search, and scale." },
    chips: null,
    watermarkOpacity: 0.055,
  },
  {
    file: "auralogics-linkedin-company-banner-option-03-blueprint.png",
    background: linkedinOptionBackgrounds.blueprint,
    width: 1128,
    height: 191,
    mode: "blue",
    fitPosition: "center",
    safeWidth: 260,
    label: { x: 314, y: 45, text: "AURALOGICS LABS" },
    headline: {
      x: 312,
      y: 90,
      size: 34,
      lineHeight: 38,
      lines: ["The performance tools company."],
    },
    subline: { x: 314, y: 139, size: 15, text: "Products for speed, search, and scale." },
    chips: null,
    watermarkOpacity: 0.045,
  },
  {
    file: "auralogics-linkedin-banner-option-04-systems-map.png",
    background: linkedinOptionBackgrounds.systemsMap,
    width: 1584,
    height: 396,
    mode: "light",
    fitPosition: "center",
    safeWidth: 390,
    label: { x: 426, y: 82, text: "WEB OPERATIONS" },
    headline: {
      x: 424,
      y: 154,
      size: 52,
      lineHeight: 60,
      lines: ["From diagnosis", "to delivery."],
    },
    subline: { x: 428, y: 306, size: 20, text: "Clear systems for performance, SEO, and media workflows." },
    chips: {
      x: 428,
      y: 326,
      items: ["Audit", "Optimize", "Publish"],
    },
    watermarkOpacity: 0.05,
  },
  {
    file: "auralogics-linkedin-company-banner-option-04-systems-map.png",
    background: linkedinOptionBackgrounds.systemsMap,
    width: 1128,
    height: 191,
    mode: "light",
    fitPosition: "center",
    safeWidth: 260,
    label: { x: 314, y: 44, text: "WEB OPERATIONS" },
    headline: {
      x: 312,
      y: 86,
      size: 32,
      lineHeight: 36,
      lines: ["From diagnosis to delivery."],
    },
    subline: { x: 314, y: 135, size: 15, text: "Clear systems for performance, SEO, and media workflows." },
    chips: null,
    watermarkOpacity: 0.04,
  },
];

const escapeXml = (value) =>
  String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;");

function logoImage(base64, { x, y, width }) {
  return `<image href="data:image/png;base64,${base64}" x="${x}" y="${y}" width="${width}" height="${Math.round(
    width / 4.735,
  )}" preserveAspectRatio="xMinYMin meet" />`;
}

function markImage(base64, { x, y, width, opacity = 1 }) {
  return `<image href="data:image/png;base64,${base64}" x="${x}" y="${y}" width="${width}" height="${width}" opacity="${opacity}" preserveAspectRatio="xMidYMid meet" />`;
}

function textLines({ x, y, size, lineHeight, lines, fill = brand.dark, weight = 800 }) {
  return `<text x="${x}" y="${y}" font-family="Segoe UI, Arial, sans-serif" font-size="${size}" font-weight="${weight}" fill="${fill}" letter-spacing="0">
    ${lines
      .map((line, index) => `<tspan x="${x}" dy="${index === 0 ? 0 : lineHeight}">${escapeXml(line)}</tspan>`)
      .join("")}
  </text>`;
}

function pill(x, y, text, accent = brand.brand, options = {}) {
  const fontSize = options.fontSize ?? 18;
  const height = options.height ?? 42;
  const width = Math.max(options.minWidth ?? 130, text.length * (fontSize * 0.65) + 34);
  const fill = options.fill ?? "#FFFFFF";
  const stroke = options.stroke ?? brand.border;
  const textFill = options.textFill ?? brand.dark;
  const opacity = options.opacity ?? 1;

  return `
    <g opacity="${opacity}">
      <rect x="${x}" y="${y}" width="${width}" height="${height}" rx="8" fill="${fill}" stroke="${stroke}" stroke-width="1.4" />
      <circle cx="${x + 20}" cy="${y + height / 2}" r="4.5" fill="${accent}" />
      <text x="${x + 34}" y="${y + height / 2 + fontSize * 0.35}" font-family="Segoe UI, Arial, sans-serif" font-size="${fontSize}" font-weight="700" fill="${textFill}">${escapeXml(
        text,
      )}</text>
    </g>`;
}

function overlaySvg(spec, logoBase64) {
  const { width, height, logo, headline, subline, type } = spec;
  const leftFadeStop = type === "linkedin-company" ? "78%" : "64%";
  const fadeOpacity = type === "linkedin-company" ? 0.92 : 0.96;

  const meta =
    type === "og"
      ? `
        ${pill(spec.meta.x, spec.meta.y - 28, "Nexora Engine", brand.brand)}
        ${pill(spec.meta.x + 192, spec.meta.y - 28, "Nexora Pulse", brand.sky)}
        ${pill(spec.meta.x + 372, spec.meta.y - 28, "Nexora Media", brand.amber)}
        <text x="${spec.meta.x}" y="${spec.meta.y + 58}" font-family="Segoe UI, Arial, sans-serif" font-size="${spec.meta.size}" font-weight="650" fill="${brand.soft}">${escapeXml(
          copy.micro,
        )}</text>
      `
      : "";

  const linkedinCompanyAccent =
    type === "linkedin-company"
      ? `<text x="${width - 285}" y="${height - 38}" font-family="Segoe UI, Arial, sans-serif" font-size="13" font-weight="800" fill="${brand.brand}" letter-spacing="2">NEXORA SUITE</text>`
      : "";

  return Buffer.from(`
    <svg xmlns="http://www.w3.org/2000/svg" width="${width}" height="${height}" viewBox="0 0 ${width} ${height}">
      <defs>
        <linearGradient id="fade" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stop-color="#FFFFFF" stop-opacity="${fadeOpacity}" />
          <stop offset="${leftFadeStop}" stop-color="#FFFFFF" stop-opacity="${fadeOpacity}" />
          <stop offset="100%" stop-color="#FFFFFF" stop-opacity="0.05" />
        </linearGradient>
        <linearGradient id="bottom" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stop-color="${brand.brand}" />
          <stop offset="66%" stop-color="${brand.sky}" />
          <stop offset="100%" stop-color="${brand.amber}" />
        </linearGradient>
      </defs>
      <rect width="100%" height="100%" fill="url(#fade)" />
      <circle cx="${width * 0.9}" cy="${height * 0.18}" r="${height * 0.55}" fill="${brand.brand}" opacity="0.045" />
      ${logoImage(logoBase64, logo)}
      ${textLines(headline)}
      <text x="${subline.x}" y="${subline.y}" font-family="Segoe UI, Arial, sans-serif" font-size="${subline.size}" font-weight="650" fill="${brand.muted}">${escapeXml(
        subline.text,
      )}</text>
      ${meta}
      ${linkedinCompanyAccent}
      <rect x="0" y="${height - 8}" width="${width}" height="8" fill="url(#bottom)" />
    </svg>
  `);
}

function darkLinkedInOverlaySvg(spec, markBase64) {
  const { width, height, safeWidth, headline, subline, label } = spec;
  return Buffer.from(`
    <svg xmlns="http://www.w3.org/2000/svg" width="${width}" height="${height}" viewBox="0 0 ${width} ${height}">
      <defs>
        <linearGradient id="safe" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stop-color="${brand.obsidian}" stop-opacity="0.96" />
          <stop offset="72%" stop-color="${brand.obsidian}" stop-opacity="0.76" />
          <stop offset="100%" stop-color="${brand.obsidian}" stop-opacity="0" />
        </linearGradient>
        <linearGradient id="textFade" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stop-color="${brand.obsidian}" stop-opacity="0.72" />
          <stop offset="58%" stop-color="${brand.obsidian}" stop-opacity="0.48" />
          <stop offset="100%" stop-color="${brand.obsidian}" stop-opacity="0" />
        </linearGradient>
        <linearGradient id="bottomDark" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stop-color="${brand.brand}" />
          <stop offset="70%" stop-color="${brand.sky}" />
          <stop offset="100%" stop-color="${brand.amber}" />
        </linearGradient>
      </defs>
      <rect width="100%" height="100%" fill="rgba(2,6,23,0.34)" />
      <rect x="0" y="0" width="${Math.max(safeWidth, width * 0.32)}" height="${height}" fill="url(#safe)" />
      <rect x="${safeWidth * 0.78}" y="0" width="${width - safeWidth * 0.78}" height="${height}" fill="url(#textFade)" />
      ${markImage(markBase64, { x: width - height * 0.74, y: height * 0.12, width: height * 0.64, opacity: 0.09 })}
      <text x="${label.x}" y="${label.y}" font-family="Segoe UI, Arial, sans-serif" font-size="${height > 250 ? 15 : 11}" font-weight="850" fill="${brand.sky}" letter-spacing="4">${escapeXml(
        label.text,
      )}</text>
      ${textLines({ ...headline, fill: brand.white, weight: 850 })}
      <text x="${subline.x}" y="${subline.y}" font-family="Segoe UI, Arial, sans-serif" font-size="${subline.size}" font-weight="650" fill="#B9C7DB">${escapeXml(
        subline.text,
      )}</text>
      <rect x="0" y="${height - 7}" width="${width}" height="7" fill="url(#bottomDark)" />
    </svg>
  `);
}

function linkedInOptionChipsSvg(spec) {
  if (!spec.chips) return "";

  const darkMode = spec.mode !== "light";
  let x = spec.chips.x;
  const y = spec.chips.y;

  return spec.chips.items
    .map((item, index) => {
      const fontSize = spec.height > 250 ? 15 : 12;
      const chipHeight = spec.height > 250 ? 34 : 28;
      const width = Math.max(spec.height > 250 ? 94 : 76, item.length * (fontSize * 0.62) + 34);
      const chip = `
        <g>
          <rect x="${x}" y="${y}" width="${width}" height="${chipHeight}" rx="8" fill="${
            darkMode ? "rgba(255,255,255,0.09)" : "rgba(255,255,255,0.72)"
          }" stroke="${darkMode ? "rgba(255,255,255,0.18)" : "rgba(15,23,42,0.12)"}" stroke-width="1.2" />
          <circle cx="${x + 17}" cy="${y + chipHeight / 2}" r="4" fill="${index === 1 ? brand.sky : index === 2 ? brand.amber : brand.brand}" />
          <text x="${x + 29}" y="${y + chipHeight / 2 + fontSize * 0.35}" font-family="Segoe UI, Arial, sans-serif" font-size="${fontSize}" font-weight="800" fill="${
            darkMode ? "#F8FBFF" : brand.ink
          }">${escapeXml(item)}</text>
        </g>`;
      x += width + 12;
      return chip;
    })
    .join("");
}

function linkedInOptionHeadlineSvg(spec, fill) {
  const { headline } = spec;
  const anchor = headline.anchor ?? "start";

  return headline.lines
    .map((line, index) => {
      const lineFill = headline.accentLine === index ? "url(#headlineGradient)" : fill;
      return `<text x="${headline.x}" y="${headline.y + index * headline.lineHeight}" text-anchor="${anchor}" font-family="Segoe UI, Arial, sans-serif" font-size="${headline.size}" font-weight="850" fill="${lineFill}" letter-spacing="0">${escapeXml(
        line,
      )}</text>`;
    })
    .join("");
}

function linkedInOptionOverlaySvg(spec, markBase64) {
  const { width, height, safeWidth, label, subline } = spec;
  const isLight = spec.mode === "light";
  const isBlue = spec.mode === "blue";
  const textFill = isLight ? brand.ink : brand.white;
  const sublineFill = isLight ? "#334155" : "#D7E4F5";
  const labelFill = isLight ? brand.brand : isBlue ? "#D9F0FF" : brand.sky;
  const safeFill = isLight ? "#EAF8FF" : isBlue ? "#0A4EC7" : brand.obsidian;
  const safeOpacity = isLight ? 0.72 : isBlue ? 0.2 : 0.76;
  const textPanelOpacity = isLight ? 0.68 : isBlue ? 0.12 : 0.32;
  const anchor = label.anchor ?? "start";
  const sublineAnchor = subline.anchor ?? "start";
  const watermarkWidth = height * (isBlue ? 1.2 : 0.86);

  return Buffer.from(`
    <svg xmlns="http://www.w3.org/2000/svg" width="${width}" height="${height}" viewBox="0 0 ${width} ${height}">
      <defs>
        <linearGradient id="safePanel" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stop-color="${safeFill}" stop-opacity="${safeOpacity}" />
          <stop offset="78%" stop-color="${safeFill}" stop-opacity="${safeOpacity * 0.7}" />
          <stop offset="100%" stop-color="${safeFill}" stop-opacity="0" />
        </linearGradient>
        <linearGradient id="copyPanel" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stop-color="${isLight ? "#FFFFFF" : brand.obsidian}" stop-opacity="${textPanelOpacity}" />
          <stop offset="68%" stop-color="${isLight ? "#FFFFFF" : brand.obsidian}" stop-opacity="${textPanelOpacity * 0.72}" />
          <stop offset="100%" stop-color="${isLight ? "#FFFFFF" : brand.obsidian}" stop-opacity="0" />
        </linearGradient>
        <linearGradient id="headlineGradient" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stop-color="${brand.sky}" />
          <stop offset="52%" stop-color="#F02D8B" />
          <stop offset="100%" stop-color="${brand.amber}" />
        </linearGradient>
        <linearGradient id="bottomOption" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stop-color="${brand.brand}" />
          <stop offset="68%" stop-color="${brand.sky}" />
          <stop offset="100%" stop-color="${brand.amber}" />
        </linearGradient>
      </defs>
      <rect width="100%" height="100%" fill="${isLight ? "#F4FBFF" : brand.obsidian}" opacity="${isLight ? 0.08 : 0.18}" />
      <rect x="0" y="0" width="${Math.max(safeWidth, width * 0.29)}" height="${height}" fill="url(#safePanel)" />
      <rect x="${safeWidth * 0.72}" y="0" width="${width - safeWidth * 0.72}" height="${height}" fill="url(#copyPanel)" />
      ${
        spec.watermarkOpacity
          ? markImage(markBase64, {
              x: width - watermarkWidth * 0.82,
              y: height * 0.06,
              width: watermarkWidth,
              opacity: spec.watermarkOpacity,
            })
          : ""
      }
      <text x="${label.x}" y="${label.y}" text-anchor="${anchor}" font-family="Segoe UI, Arial, sans-serif" font-size="${
        height > 250 ? 15 : 11
      }" font-weight="900" fill="${labelFill}" letter-spacing="${height > 250 ? 4 : 3}">${escapeXml(label.text)}</text>
      ${linkedInOptionHeadlineSvg(spec, textFill)}
      <text x="${subline.x}" y="${subline.y}" text-anchor="${sublineAnchor}" font-family="Segoe UI, Arial, sans-serif" font-size="${
        subline.size
      }" font-weight="700" fill="${sublineFill}">${escapeXml(subline.text)}</text>
      ${linkedInOptionChipsSvg(spec)}
      <rect x="0" y="${height - 7}" width="${width}" height="7" fill="url(#bottomOption)" />
    </svg>
  `);
}

function loadBlogPosts() {
  const source = readFileSync(blogDataPath, "utf8");
  const js = ts.transpileModule(source, {
    compilerOptions: { module: ts.ModuleKind.CommonJS, target: ts.ScriptTarget.ES2020 },
  }).outputText;
  const sandbox = { exports: {}, module: { exports: {} } };
  sandbox.exports = sandbox.module.exports;
  vm.runInNewContext(js, sandbox, { filename: blogDataPath });
  return sandbox.module.exports.blogPosts;
}

function wrapWords(text, maxChars, maxLines) {
  const words = String(text).split(/\s+/);
  const lines = [];
  let line = "";

  for (const word of words) {
    const next = line ? `${line} ${word}` : word;
    if (next.length <= maxChars) {
      line = next;
      continue;
    }
    if (line) lines.push(line);
    line = word;
  }

  if (line) lines.push(line);
  if (lines.length <= maxLines) return lines;

  const clipped = lines.slice(0, maxLines);
  clipped[maxLines - 1] = `${clipped[maxLines - 1].replace(/[.,:;!?-]+$/, "")}...`;
  return clipped;
}

function postTitleLayout(title) {
  const compact = wrapWords(title, 30, 3);
  if (compact.length <= 3 && compact.every((line) => line.length <= 34)) {
    return { lines: compact, size: 58, lineHeight: 66 };
  }
  return { lines: wrapWords(title, 37, 3), size: 50, lineHeight: 58 };
}

function shortenTag(tag) {
  if (tag.length <= 24) return tag;
  return `${tag.slice(0, 21).trim()}...`;
}

function tagChipsSvg(tags, accent) {
  let x = 78;
  let y = 515;

  return tags
    .slice(0, 4)
    .map((rawTag) => {
      const tag = shortenTag(rawTag);
      const width = Math.min(250, Math.max(142, tag.length * 9.2 + 50));
      if (x + width > 1048) {
        x = 78;
        y += 46;
      }
      const chip = `
        <g>
          <rect x="${x}" y="${y}" width="${width}" height="36" rx="8" fill="rgba(255,255,255,0.065)" stroke="rgba(255,255,255,0.16)" stroke-width="1.4" />
          <circle cx="${x + 20}" cy="${y + 18}" r="4.5" fill="${accent}" />
          <text x="${x + 36}" y="${y + 24}" font-family="Segoe UI, Arial, sans-serif" font-size="16" font-weight="700" fill="#E6EEF8">${escapeXml(
            tag,
          )}</text>
        </g>`;
      x += width + 18;
      return chip;
    })
    .join("");
}

function postOgOverlaySvg(post, markBase64) {
  const width = 1200;
  const height = 630;
  const cta = productCtas[post.product] ?? productCtas.platform;
  const accent = post.accent || cta.accent;
  const title = postTitleLayout(post.title);
  const tags = post.tags.slice(0, 4);
  const tagChips = tagChipsSvg(tags, accent);

  return Buffer.from(`
    <svg xmlns="http://www.w3.org/2000/svg" width="${width}" height="${height}" viewBox="0 0 ${width} ${height}">
      <defs>
        <linearGradient id="left" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stop-color="${brand.obsidian}" stop-opacity="0.98" />
          <stop offset="62%" stop-color="${brand.obsidian}" stop-opacity="0.88" />
          <stop offset="100%" stop-color="${brand.obsidian}" stop-opacity="0.2" />
        </linearGradient>
        <linearGradient id="floor" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stop-color="${accent}" />
          <stop offset="64%" stop-color="${brand.sky}" />
          <stop offset="100%" stop-color="${brand.amber}" />
        </linearGradient>
        <radialGradient id="glow" cx="75%" cy="38%" r="70%">
          <stop offset="0%" stop-color="${accent}" stop-opacity="0.28" />
          <stop offset="100%" stop-color="${accent}" stop-opacity="0" />
        </radialGradient>
      </defs>
      <rect width="100%" height="100%" fill="rgba(2,6,23,0.42)" />
      <rect width="100%" height="100%" fill="url(#left)" />
      <circle cx="930" cy="210" r="390" fill="url(#glow)" />
      ${markImage(markBase64, { x: 76, y: 54, width: 54 })}
      <text x="144" y="88" font-family="Segoe UI, Arial, sans-serif" font-size="30" font-weight="850" fill="#F8FBFF" letter-spacing="-1">auralogics</text>
      <text x="304" y="88" font-family="Segoe UI, Arial, sans-serif" font-size="16" font-weight="900" fill="${brand.sky}" letter-spacing="5">LABS</text>
      <text x="78" y="154" font-family="Segoe UI, Arial, sans-serif" font-size="14" font-weight="900" fill="${accent}" letter-spacing="3">${escapeXml(
        post.category.toUpperCase(),
      )}</text>
      ${textLines({ x: 76, y: 230, size: title.size, lineHeight: title.lineHeight, lines: title.lines, fill: brand.white, weight: 880 })}
      <g>
        <rect x="76" y="424" width="430" height="54" rx="10" fill="${accent}" opacity="0.98" />
        <text x="102" y="459" font-family="Segoe UI, Arial, sans-serif" font-size="22" font-weight="850" fill="#FFFFFF">${escapeXml(
          cta.label,
        )}</text>
      </g>
      <text x="532" y="459" font-family="Segoe UI, Arial, sans-serif" font-size="19" font-weight="650" fill="#B9C7DB">${escapeXml(
        cta.line,
      )}</text>
      <text x="80" y="499" font-family="Segoe UI, Arial, sans-serif" font-size="12" font-weight="900" fill="#7F93AF" letter-spacing="2.7">KEY TAGS</text>
      ${tagChips}
      <rect x="0" y="${height - 9}" width="${width}" height="9" fill="url(#floor)" />
    </svg>
  `);
}

async function renderAsset(spec, logoBase64) {
  const outPath = path.join(socialDir, spec.file);
  const overlay = overlaySvg(spec, logoBase64);

  await sharp(backgroundPath)
    .resize(spec.width, spec.height, { fit: "cover", position: "right" })
    .modulate({ brightness: 1.02, saturation: 0.95 })
    .composite([{ input: overlay, top: 0, left: 0 }])
    .png({ compressionLevel: 9, adaptiveFiltering: true, palette: false })
    .toFile(outPath);

  return outPath;
}

async function renderDarkLinkedInAsset(spec, markBase64) {
  const outPath = path.join(socialDir, spec.file);
  const overlay = darkLinkedInOverlaySvg(spec, markBase64);

  await sharp(darkBackgroundPath)
    .resize(spec.width, spec.height, { fit: "cover", position: "center" })
    .modulate({ brightness: 0.92, saturation: 1.08 })
    .composite([{ input: overlay, top: 0, left: 0 }])
    .png({ compressionLevel: 9, adaptiveFiltering: true, palette: false })
    .toFile(outPath);

  return outPath;
}

async function renderLinkedInOptionAsset(spec, markBase64) {
  const outPath = path.join(socialDir, spec.file);
  const overlay = linkedInOptionOverlaySvg(spec, markBase64);

  await sharp(spec.background)
    .resize(spec.width, spec.height, { fit: "cover", position: spec.fitPosition ?? "center" })
    .modulate({ brightness: spec.mode === "light" ? 1.03 : 0.95, saturation: spec.mode === "light" ? 0.92 : 1.08 })
    .composite([{ input: overlay, top: 0, left: 0 }])
    .png({ compressionLevel: 9, adaptiveFiltering: true, palette: false })
    .toFile(outPath);

  return outPath;
}

async function renderPostOgAsset(post, markBase64) {
  const outPath = path.join(insightsSocialDir, `${post.slug}.png`);
  const overlay = postOgOverlaySvg(post, markBase64);

  await sharp(darkBackgroundPath)
    .resize(1200, 630, { fit: "cover", position: "right" })
    .modulate({ brightness: 0.78, saturation: 1.1 })
    .composite([{ input: overlay, top: 0, left: 0 }])
    .png({ compressionLevel: 9, adaptiveFiltering: true, palette: false })
    .toFile(outPath);

  return outPath;
}

async function main() {
  await mkdir(socialDir, { recursive: true });
  await mkdir(insightsSocialDir, { recursive: true });

  if (!existsSync(darkBackgroundPath)) {
    throw new Error(`Missing dark background source: ${path.relative(root, darkBackgroundPath)}`);
  }

  for (const [name, background] of Object.entries(linkedinOptionBackgrounds)) {
    if (!existsSync(background)) {
      throw new Error(`Missing LinkedIn option background source (${name}): ${path.relative(root, background)}`);
    }
  }

  const logoBase64 = (await readFile(logoPath)).toString("base64");
  const markBase64 = (await readFile(markPath)).toString("base64");

  for (const spec of outputs) {
    const outPath = await renderAsset(spec, logoBase64);
    console.log(path.relative(root, outPath));
  }

  for (const spec of darkLinkedInOutputs) {
    const outPath = await renderDarkLinkedInAsset(spec, markBase64);
    console.log(path.relative(root, outPath));
  }

  for (const spec of linkedInOptionOutputs) {
    const outPath = await renderLinkedInOptionAsset(spec, markBase64);
    console.log(path.relative(root, outPath));
  }

  for (const post of loadBlogPosts()) {
    const outPath = await renderPostOgAsset(post, markBase64);
    console.log(path.relative(root, outPath));
  }

  await copyFile(path.join(socialDir, "auralogics-og.png"), path.join(appDir, "opengraph-image.png"));
  await copyFile(path.join(socialDir, "auralogics-twitter.png"), path.join(appDir, "twitter-image.png"));
  console.log("src/app/opengraph-image.png");
  console.log("src/app/twitter-image.png");
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
