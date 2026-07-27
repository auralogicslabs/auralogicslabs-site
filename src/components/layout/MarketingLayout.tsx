import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { cn } from "@/app/components/ui/utils";

export function MarketingLayout({
  children,
  className,
  mainClassName,
}: {
  children: React.ReactNode;
  className?: string;
  mainClassName?: string;
}) {
  return (
    <div className={cn("min-h-screen bg-bg", className)}>
      <Header />
      <main className={cn("overflow-x-clip", mainClassName)}>{children}</main>
      <Footer />
    </div>
  );
}
