import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { getAllProducts, getProduct } from '@/data/products';
import { ChangelogContent } from '@/components/docs/ChangelogContent';

export const dynamicParams = false;

export function generateStaticParams() {
  return getAllProducts().map((p) => ({ product: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ product: string }>;
}): Promise<Metadata> {
  const { product } = await params;
  const prod = getProduct(product);
  if (!prod) return {};
  return {
    title: `${prod.name} Changelog | Auralogics Labs`,
    description: `Release notes and version history for ${prod.name}.`,
    alternates: { canonical: `/changelog/${product}` },
  };
}

export default async function ProductChangelogPage({
  params,
}: {
  params: Promise<{ product: string }>;
}) {
  const { product: productSlug } = await params;
  const product = getProduct(productSlug);
  if (!product) notFound();

  return (
    <>
      <header className="mb-10 border-b border-border pb-8">
        <p className="mb-3 text-[12px] font-bold uppercase tracking-widest text-text-muted">Changelog</p>
        <h1 className="text-[32px] md:text-[40px] font-extrabold tracking-[-0.03em] text-obsidian leading-[1.08] mb-3">
          {product.name}
        </h1>
        <p className="max-w-[640px] text-[17px] text-text-secondary font-medium leading-relaxed">
          Everything that shipped in each public release of {product.name}.
        </p>
        <Link
          href={`/docs/${product.slug}`}
          className="mt-5 inline-flex text-[14px] font-bold text-brand hover:underline"
        >
          Read the documentation →
        </Link>
      </header>
      <ChangelogContent entries={product.changelog ?? []} productName={product.name} />
    </>
  );
}
