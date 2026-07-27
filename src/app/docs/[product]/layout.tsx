import { notFound } from 'next/navigation';
import { getProduct } from '@/data/products';
import { getProductDocs } from '@/data/docs';
import { DocsShell } from '@/components/docs/DocsShell';

export default async function ProductDocsLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ product: string }>;
}) {
  const { product: productSlug } = await params;
  const product = getProduct(productSlug);
  const docs = getProductDocs(productSlug);
  if (!product || !docs) notFound();

  return (
    <DocsShell productSlug={productSlug} docs={docs}>
      {children}
    </DocsShell>
  );
}
