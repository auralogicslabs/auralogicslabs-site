import { notFound, redirect } from 'next/navigation';
import { getAllProductDocs, getProductDocs } from '@/data/docs';

export const dynamicParams = false;

export function generateStaticParams() {
  return getAllProductDocs().map((d) => ({ product: d.productSlug }));
}

export default async function ProductDocsIndexPage({
  params,
}: {
  params: Promise<{ product: string }>;
}) {
  const { product } = await params;
  const docs = getProductDocs(product);
  if (!docs) notFound();
  redirect(`/docs/${product}/${docs.defaultArticleSlug}`);
}
