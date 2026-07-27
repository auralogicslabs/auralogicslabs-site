import { MarketingLayout } from "@/components/layout/MarketingLayout";

export default function NexoraEngineLayout({ children }: { children: React.ReactNode }) {
  return <MarketingLayout className="bg-[#F8FAFF]">{children}</MarketingLayout>;
}
