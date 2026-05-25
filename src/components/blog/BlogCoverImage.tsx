import { cn } from "@/app/components/ui/utils";

export function BlogCoverImage({
  src,
  alt,
  accent,
  className,
  priority = false,
}: {
  src: string;
  alt: string;
  accent?: string;
  className?: string;
  priority?: boolean;
}) {
  return (
    <div
      className={cn("relative overflow-hidden bg-obsidian", className)}
      style={accent ? { boxShadow: `0 24px 60px ${accent}20` } : undefined}
    >
      <div
        className="absolute inset-0 opacity-40 pointer-events-none z-[1]"
        style={{
          background: accent
            ? `radial-gradient(ellipse at 30% 20%, ${accent}55 0%, transparent 55%)`
            : undefined,
        }}
      />
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={src}
        alt={alt}
        loading={priority ? "eager" : "lazy"}
        className="absolute inset-0 w-full h-full object-cover"
      />
    </div>
  );
}
