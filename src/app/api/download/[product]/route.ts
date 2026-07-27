import { NextResponse, type NextRequest } from 'next/server';
import { getProduct } from '@/data/products';
import { getStableRelease } from '@/types/product';
import { getStorage } from '@/lib/storage';

/**
 * Stable public download endpoint.
 *
 *   GET /api/download/<product>          → latest stable release
 *   GET /api/download/<product>?v=1.0.0  → a specific version
 *
 * The URL contract is permanent. Where the bytes actually live (in-repo /public
 * today, Azure Blob later) is decided by the storage adapter, so this URL never
 * has to change. We 302-redirect to the resolved artifact URL.
 */
export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ product: string }> }
) {
  const { product: slug } = await params;
  const product = getProduct(slug);

  if (!product || product.hidden) {
    return NextResponse.json({ error: 'Product not found' }, { status: 404 });
  }

  const requested = request.nextUrl.searchParams.get('v');
  const release = requested
    ? product.releases.find((r) => r.version === requested)
    : getStableRelease(product);

  if (!release) {
    return NextResponse.json(
      { error: requested ? `Version ${requested} not found` : 'No release available' },
      { status: 404 }
    );
  }

  // ── Extension point ───────────────────────────────────────────────────
  // Record the download event here (analytics, Supabase, license issuance,
  // download history for the future customer portal). Intentionally a no-op
  // for now so the public contract is in place without coupling to a backend.

  const url = getStorage().resolveUrl(release.file);
  return NextResponse.redirect(new URL(url, request.url), 302);
}
