import fs from "fs";
import path from "path";

const CONTAINERS = [
  "mx-auto w-full max-w-site px-6 sm:px-10 lg:px-16",
  "w-full max-w-site mx-auto px-6 sm:px-10 lg:px-16",
  "w-full max-w-[1100px] mx-auto px-8 lg:px-24",
];

const dirs = ["src/components/sections", "src/components/product", "src/app"];
const skip = /[/\\]portal[/\\]/;

function walk(d, out = []) {
  for (const f of fs.readdirSync(d, { withFileTypes: true })) {
    const p = path.join(d, f.name);
    if (f.isDirectory()) {
      if (!skip.test(p)) walk(p, out);
    } else if (/\.tsx$/.test(f.name) && !skip.test(p)) {
      out.push(p);
    }
  }
  return out;
}

function addImports(c) {
  if (!c.includes("siteContainerClass")) return c;
  if (!c.includes("@/lib/site-layout")) {
    const imp = "import { siteContainerClass } from '@/lib/site-layout';\n";
    c = /^((?:"use client"|'use client');?\n)/.test(c)
      ? c.replace(/^((?:"use client"|'use client');?\n)/, `$1${imp}`)
      : imp + c;
  }
  if (
    c.includes("cn(siteContainerClass") &&
    !c.includes("@/app/components/ui/utils") &&
    !c.includes("@/lib/utils")
  ) {
    const imp = "import { cn } from '@/app/components/ui/utils';\n";
    const i = c.indexOf("@/lib/site-layout");
    const le = c.indexOf("\n", i);
    c = c.slice(0, le + 1) + imp + c.slice(le + 1);
  }
  return c;
}

function fix(content) {
  let c = content;
  let changed = false;

  for (const pat of CONTAINERS) {
    if (!c.includes(pat)) continue;
    changed = true;
    const esc = pat.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
    c = c.replace(
      new RegExp(`className="([^"]*)${esc}([^"]*)"`, "g"),
      (_m, a, b) => {
        const extra = `${a}${b}`.trim();
        return extra
          ? `className={cn(siteContainerClass, "${extra}")}`
          : "className={siteContainerClass}";
      }
    );
    c = c.replace(
      new RegExp(`className={\`([^\`]*)${esc}([^\`]*)\`}`, "g"),
      (_m, a, b) => {
        const extra = `${a}${b}`.trim();
        return extra
          ? `className={cn(siteContainerClass, "${extra}")}`
          : "className={siteContainerClass}";
      }
    );
  }

  const beforeInner = c;
  c = c.replace(
    /<(section|main)([^>]*className="[^"]*?)\s*px-6 sm:px-10 lg:px-16/g,
    "<$1$2"
  );
  c = c.replace(
    /<(section|main)([^>]*className="[^"]*?)\s*px-8 lg:px-24/g,
    "<$1$2"
  );
  c = c.replace(
    /className="w-full max-w-site mx-auto relative z-10 text-center"/g,
    'className={cn(siteContainerClass, "relative z-10 text-center")}'
  );
  c = c.replace(
    /className="w-full max-w-site mx-auto relative z-10"/g,
    'className={cn(siteContainerClass, "relative z-10")}'
  );
  c = c.replace(
    /className="w-full max-w-site mx-auto text-center"/g,
    'className={cn(siteContainerClass, "text-center")}'
  );
  c = c.replace(/className="w-full max-w-site mx-auto"/g, "className={siteContainerClass}");
  c = c.replace(/className="max-w-site mx-auto"/g, "className={siteContainerClass}");
  c = c.replace(
    /className="w-full max-w-site mx-auto relative/g,
    'className={cn(siteContainerClass, "relative")'
  );
  if (c !== beforeInner) changed = true;

  if (changed || c.includes("siteContainerClass") || c.includes("cn(siteContainerClass")) {
    c = addImports(c);
  }
  return { c, changed: c !== content };
}

let n = 0;
for (const d of dirs) {
  if (!fs.existsSync(d)) continue;
  for (const p of walk(d)) {
    const orig = fs.readFileSync(p, "utf8");
    const { c, changed } = fix(orig);
    if (changed) {
      fs.writeFileSync(p, c, "utf8");
      n++;
      console.log(p);
    }
  }
}
console.log("updated", n, "files");
