'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState, useEffect } from 'react';
import {
  ArrowLeft,
  ArrowUp,
  BookOpen,
  ChevronDown,
  History,
  Menu,
  X,
} from 'lucide-react';
import type { ProductDocs } from '@/types/docs';
import { getAllProductDocs, getDocNavGroups } from '@/data/docs';
import { getProduct } from '@/data/products';
import { cn } from '@/app/components/ui/utils';

export function DocsShell({
  productSlug,
  docs,
  children,
}: {
  productSlug: string;
  docs: ProductDocs;
  children: React.ReactNode;
}) {
  // Hooks must run unconditionally and before any early return (Rules of Hooks).
  const product = getProduct(productSlug);
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    setMobileOpen(false);
  }, [pathname]);

  useEffect(() => {
    const onScroll = () => setShowScrollTop(window.scrollY > 400);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  if (!product) return null;

  const navGroups = getDocNavGroups(docs);
  const allDocs = getAllProductDocs();
  const Icon = product.icon;
  const isChangelog = pathname.startsWith(`/changelog/${product.slug}`);
  const articleSlug = pathname.replace(`/docs/${product.slug}/`, '').replace(/\/$/, '');

  const sidebar = (
    <nav className="flex flex-col gap-8">
      {navGroups.map((group) => (
        <div key={group.category}>
          <p className="mb-3 text-[10px] font-black uppercase tracking-[0.24em] text-text-muted">{group.category}</p>
          <ul className="space-y-1">
            {group.articles.map((article) => {
              const href = `/docs/${product.slug}/${article.slug}`;
              const active = !isChangelog && articleSlug === article.slug;
              return (
                <li key={article.slug}>
                  <Link
                    href={href}
                    className={cn(
                      'block rounded-lg px-3 py-2 text-[14px] font-semibold transition-colors',
                      active
                        ? 'bg-brand/10 text-brand'
                        : 'text-text-secondary hover:bg-surface-soft hover:text-obsidian'
                    )}
                  >
                    {article.title}
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      ))}

      <div className="border-t border-border pt-6">
        <Link
          href={`/changelog/${product.slug}`}
          className={cn(
            'flex items-center gap-2 rounded-lg px-3 py-2 text-[14px] font-semibold transition-colors',
            isChangelog
              ? 'bg-brand/10 text-brand'
              : 'text-text-secondary hover:bg-surface-soft hover:text-obsidian'
          )}
        >
          <History className="h-4 w-4" />
          Changelog
        </Link>
      </div>
    </nav>
  );

  return (
    <div className="min-h-screen bg-[#F8FAFF]">
      {/* Docs top bar */}
      <header className="sticky top-0 z-40 border-b border-border bg-white/95 backdrop-blur-md">
        <div className="mx-auto flex h-16 max-w-site items-center justify-between gap-4 px-6 sm:px-10 lg:px-16">
          <div className="flex min-w-0 items-center gap-3">
            <Link
              href="/"
              className="hidden items-center gap-2 text-[13px] font-bold text-text-muted hover:text-brand sm:inline-flex"
            >
              <ArrowLeft className="h-4 w-4" />
              Auralogics Labs
            </Link>
            <span className="hidden text-border sm:inline">/</span>
            <Link href="/docs" className="hidden text-[13px] font-bold text-text-muted hover:text-brand sm:inline">
              Docs
            </Link>
            <span className="hidden text-border sm:inline">/</span>

            {/* Product switcher */}
            <div className="relative group min-w-0">
              <button
                type="button"
                className="flex max-w-full items-center gap-2 rounded-lg border border-border bg-white px-3 py-1.5 text-left"
              >
                <span
                  className="flex h-7 w-7 flex-shrink-0 items-center justify-center rounded-md"
                  style={{ background: `${product.accent}14`, border: `1px solid ${product.accent}28` }}
                >
                  <Icon className="h-3.5 w-3.5" style={{ color: product.accent }} />
                </span>
                <span className="truncate text-[14px] font-bold text-obsidian">{product.name}</span>
                <ChevronDown className="h-4 w-4 flex-shrink-0 text-text-muted" />
              </button>
              <div className="invisible absolute left-0 top-full z-50 mt-1 min-w-[240px] rounded-xl border border-border bg-white py-2 opacity-0 shadow-lg transition-all group-hover:visible group-hover:opacity-100 group-focus-within:visible group-focus-within:opacity-100">
                {allDocs.map((d) => {
                  const item = getProduct(d.productSlug);
                  if (!item) return null;
                  const ItemIcon = item.icon;
                  return (
                    <Link
                      key={d.productSlug}
                      href={`/docs/${d.productSlug}/${d.defaultArticleSlug}`}
                      className={cn(
                        'flex items-center gap-2.5 px-4 py-2.5 text-[14px] font-semibold hover:bg-surface-soft',
                        d.productSlug === product.slug ? 'text-brand' : 'text-obsidian'
                      )}
                    >
                      <span
                        className="flex h-7 w-7 items-center justify-center rounded-md"
                        style={{ background: `${item.accent}14`, border: `1px solid ${item.accent}28` }}
                      >
                        <ItemIcon className="h-3.5 w-3.5" style={{ color: item.accent }} />
                      </span>
                      {item.name}
                    </Link>
                  );
                })}
              </div>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <Link
              href={`/changelog/${product.slug}`}
              className="hidden rounded-lg px-3 py-2 text-[13px] font-bold text-text-muted hover:bg-surface-soft hover:text-obsidian md:inline"
            >
              Changelog
            </Link>
            <Link
              href="/support"
              className="hidden rounded-lg px-3 py-2 text-[13px] font-bold text-text-muted hover:bg-surface-soft hover:text-obsidian md:inline"
            >
              Support
            </Link>
            <button
              type="button"
              className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-border lg:hidden"
              onClick={() => setMobileOpen((v) => !v)}
              aria-label="Toggle docs menu"
            >
              {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>
      </header>

      <div className="mx-auto flex max-w-site gap-0 px-6 sm:px-10 lg:gap-12 lg:px-16">
        {/* Sidebar, desktop */}
        <aside className="hidden w-[240px] flex-shrink-0 lg:block">
          <div className="sticky top-24 max-h-[calc(100vh-7rem)] overflow-y-auto py-10 pr-4">{sidebar}</div>
        </aside>

        {/* Sidebar, mobile drawer */}
        {mobileOpen && (
          <div className="fixed inset-0 z-30 lg:hidden">
            <button
              type="button"
              className="absolute inset-0 bg-black/40"
              onClick={() => setMobileOpen(false)}
              aria-label="Close menu"
            />
            <aside className="absolute left-0 top-16 bottom-0 w-[min(100%,280px)] overflow-y-auto border-r border-border bg-white p-6">
              {sidebar}
            </aside>
          </div>
        )}

        {/* Main */}
        <main className="min-w-0 flex-1 py-10 pb-24 lg:py-12">{children}</main>
      </div>

      {showScrollTop && (
        <button
          type="button"
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="fixed bottom-6 right-6 z-40 flex h-11 w-11 items-center justify-center rounded-full border border-border bg-white text-obsidian shadow-lg hover:border-brand hover:text-brand"
          aria-label="Scroll to top"
        >
          <ArrowUp className="h-5 w-5" />
        </button>
      )}
    </div>
  );
}

export function DocsArticleHeader({
  category,
  title,
  description,
  productSlug,
  productName,
}: {
  category: string;
  title: string;
  description: string;
  productSlug: string;
  productName: string;
}) {
  return (
    <header className="mb-10 border-b border-border pb-8">
      <div className="mb-4 flex items-center gap-2 text-[12px] font-bold uppercase tracking-widest text-text-muted">
        <BookOpen className="h-3.5 w-3.5 text-brand" />
        {category}
      </div>
      <h1 className="text-[32px] md:text-[40px] font-extrabold tracking-[-0.03em] text-obsidian leading-[1.08] mb-4">
        {title}
      </h1>
      <p className="max-w-[640px] text-[17px] text-text-secondary font-medium leading-relaxed">{description}</p>
      <Link
        href={`/products/${productSlug}`}
        className="mt-5 inline-flex text-[14px] font-bold text-brand hover:underline"
      >
        View {productName} product page →
      </Link>
    </header>
  );
}
