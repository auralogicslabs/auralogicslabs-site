# Download store

Plugin release ZIPs are served from here under the **local** storage driver.

## Layout

```
public/downloads/<product-slug>/<product-slug>-<version>.zip
```

These paths must match the `file` keys in each product's config under
`src/data/products/`. For example:

```
public/downloads/nexora-engine/nexora-engine-1.0.0.zip
public/downloads/nexora-pulse/nexora-pulse-1.0.0.zip
public/downloads/nexora-media/nexora-media-2.0.0.zip
```

## How files get here

Build each plugin with its `build-zip.ps1` (outputs to
`C:\project\nexora\release\<product>\<product>-<version>.zip`), then copy the ZIP
into the matching folder above.

## Public URL contract

Never link to these files directly. The stable, permanent download URL is:

```
/api/download/<product>            # latest stable
/api/download/<product>?v=<version> # specific version
```

The route resolves the version → storage key → URL via the storage adapter
(`src/lib/storage.ts`). To migrate to Azure Blob Storage later, implement the
Azure adapter and set `STORAGE_DRIVER=azure` — **the public URLs above do not
change.**
