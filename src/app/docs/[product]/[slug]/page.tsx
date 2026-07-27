import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { getDocArticle, getAllDocStaticParams, getProductDocs } from '@/data/docs';
import { getProduct } from '@/data/products';
import { DocsArticleHeader } from '@/components/docs/DocsShell';
import { DocsArticleContent } from '@/components/docs/DocsArticleContent';

export const dynamicParams = false;

export function generateStaticParams() {
  return getAllDocStaticParams();
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ product: string; slug: string }>;
}): Promise<Metadata> {
  const { product, slug } = await params;
  const article = getDocArticle(product, slug);
  const prod = getProduct(product);
  if (!article || !prod) return {};
  return {
    title: `${article.title} | ${prod.name} Docs`,
    description: article.description,
    alternates: { canonical: `/docs/${product}/${slug}` },
  };
}

export default async function DocArticlePage({
  params,
}: {
  params: Promise<{ product: string; slug: string }>;
}) {
  const { product, slug } = await params;
  const docs = getProductDocs(product);
  const article = getDocArticle(product, slug);
  if (!docs || !article) notFound();

  return (
    <>
      <DocsArticleHeader
        category={article.category}
        title={article.title}
        description={article.description}
        productSlug={product}
        productName={getProduct(product)!.name}
      />
      <DocsArticleContent blocks={article.blocks} />
    </>
  );
}
