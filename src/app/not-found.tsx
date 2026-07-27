import { siteContainerClass } from '@/lib/site-layout';
import { MarketingLayout } from '@/components/layout/MarketingLayout';
import Link from 'next/link';

export default function NotFound() {
  return (
    <MarketingLayout>
      <div className={`${siteContainerClass} flex min-h-[60vh] flex-col items-center justify-center py-24 text-center`}>
        <h1 className="text-[32px] md:text-[40px] font-semibold text-text-primary mb-4">
          404 · Page not found.
        </h1>
        <p className="text-[16px] text-text-secondary mb-8 max-w-md">
          The infrastructure layer you are looking for does not exist.
        </p>
        <Link
          href="/"
          className="inline-flex items-center justify-center rounded-md bg-brand px-6 py-3 text-[16px] font-medium text-white shadow-sm hover:bg-brand-bright transition-colors"
        >
          Back to home
        </Link>
      </div>
    </MarketingLayout>
  );
}
