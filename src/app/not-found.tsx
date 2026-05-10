import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';

export default function NotFound() {
  return (
    <div className="min-h-screen bg-bg flex flex-col">
      <Header />
      <main className="flex-grow flex items-center justify-center py-24 px-6 text-center">
        <div>
          <h1 className="text-[32px] md:text-[40px] font-semibold text-text-primary mb-4">
            404 · Page not found.
          </h1>
          <p className="text-[16px] text-text-secondary mb-8">
            The infrastructure layer you are looking for does not exist.
          </p>
          <a 
            href="/"
            className="inline-flex items-center justify-center rounded-md bg-brand px-6 py-3 text-[16px] font-medium text-white shadow-sm hover:bg-brand-bright transition-colors"
          >
            Back to home
          </a>
        </div>
      </main>
      <Footer />
    </div>
  );
}
