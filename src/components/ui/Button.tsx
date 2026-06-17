import Link from "next/link";
import { cn } from "@/app/components/ui/utils";

type Variant = "primary" | "secondary" | "ghost";
type Size = "sm" | "md" | "lg";

interface BaseProps {
  variant?: Variant;
  size?: Size;
  /** Adjusts secondary/ghost styling for dark backgrounds */
  onDark?: boolean;
  className?: string;
  children: React.ReactNode;
}

const base =
  "group/btn inline-flex items-center justify-center gap-2 font-bold rounded-full whitespace-nowrap " +
  "transition-all duration-200 ease-[cubic-bezier(0.16,1,0.3,1)] " +
  "focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--color-brand)] " +
  "disabled:opacity-50 disabled:pointer-events-none";

const sizes: Record<Size, string> = {
  sm: "h-9 px-4 text-[13px]",
  md: "h-11 px-6 text-[14px]",
  lg: "h-[52px] px-8 text-[15px]",
};

function variantClasses(variant: Variant, onDark: boolean): string {
  switch (variant) {
    case "primary":
      // Amber is the established CTA color; lifts + glows on hover
      return "bg-amber text-obsidian shadow-[0_8px_24px_rgba(245,158,11,0.28)] hover:-translate-y-0.5 hover:shadow-[0_14px_34px_rgba(245,158,11,0.4)]";
    case "secondary":
      return onDark
        ? "border-2 border-white/20 bg-white/5 text-white hover:bg-white/10 hover:border-white/35"
        : "border-2 border-slate-200 bg-white text-obsidian hover:border-brand/40 hover:bg-slate-50";
    case "ghost":
      return onDark
        ? "text-white/80 hover:text-white hover:bg-white/10"
        : "text-text-secondary hover:text-obsidian hover:bg-slate-100";
  }
}

type ButtonAsLink = BaseProps & { href: string } & Omit<React.AnchorHTMLAttributes<HTMLAnchorElement>, keyof BaseProps | "href">;
type ButtonAsButton = BaseProps & { href?: undefined } & Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, keyof BaseProps>;

export function Button(props: ButtonAsLink | ButtonAsButton) {
  const { variant = "primary", size = "md", onDark = false, className, children, ...rest } = props;
  const classes = cn(base, sizes[size], variantClasses(variant, onDark), className);

  if ("href" in props && props.href) {
    const { href, ...anchorRest } = rest as ButtonAsLink;
    return (
      <Link href={href} className={classes} {...anchorRest}>
        {children}
      </Link>
    );
  }

  return (
    <button className={classes} {...(rest as ButtonAsButton)}>
      {children}
    </button>
  );
}
