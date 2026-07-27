/**
 * Storage abstraction for downloadable release artifacts.
 *
 * Release configs reference a storage *key* (e.g. "nexora-engine/nexora-engine-1.0.0.zip"),
 * never a hard URL. The active adapter resolves that key to a publicly fetchable
 * URL. This is the seam that lets us start with ZIPs committed under /public and
 * later migrate to Azure Blob Storage (or any object store) by swapping the
 * adapter via environment variable, without changing the public download URL
 * (`/api/download/<product>`), which stays stable forever.
 */

export interface StorageAdapter {
  /** Resolve a storage key to a publicly fetchable URL (absolute or root-relative). */
  resolveUrl(key: string): string;
}

/** Serves artifacts committed under /public (default for current deployments). */
class LocalPublicStorage implements StorageAdapter {
  constructor(private readonly basePath: string) {}

  resolveUrl(key: string): string {
    const clean = key.replace(/^\/+/, '');
    const base = this.basePath.replace(/\/+$/, '');
    return `${base}/${clean}`;
  }
}

/**
 * Future Azure Blob adapter. Resolves keys against a container base URL so the
 * public /api/download URL is unchanged after migration. Wire up SAS/CDN here.
 *
 * class AzureBlobStorage implements StorageAdapter {
 *   constructor(private readonly containerUrl: string) {}
 *   resolveUrl(key: string): string {
 *     return `${this.containerUrl.replace(/\/+$/, '')}/${key.replace(/^\/+/, '')}`;
 *   }
 * }
 */

let adapter: StorageAdapter | null = null;

/** Returns the configured storage adapter (memoized). */
export function getStorage(): StorageAdapter {
  if (adapter) return adapter;

  const driver = process.env.STORAGE_DRIVER ?? 'local';
  switch (driver) {
    // case 'azure':
    //   adapter = new AzureBlobStorage(process.env.AZURE_BLOB_BASE_URL!);
    //   break;
    case 'local':
    default:
      adapter = new LocalPublicStorage(process.env.DOWNLOAD_BASE_PATH ?? '/downloads');
      break;
  }
  return adapter;
}
