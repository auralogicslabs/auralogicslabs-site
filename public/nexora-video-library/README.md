# Nexora Engine Video Library

This folder contains the source kits for the Nexora website video section.

## Website Folder Order

Use this naming pattern inside WordPress uploads:

1. `01-what-is-nexora-engine`
2. `02-installing-nexora-engine`
3. `03-ghost-protocol-explained`
4. `04-pro-features-gsc-redirect-manager`
5. `05-elementor-compatibility`

Each folder contains:

- `index.html` - embeddable website player
- `thumbnail.svg` - listing/card image
- `production-notes.md` - recording/script guidance
- Video 01 has its own custom animated assets under `assets/`
- Videos 02-05 use `video-data.js` plus shared player assets from `_shared`

## Recommended Embed Size

Use `max-width: 920px` and `aspect-ratio: 16/10` because the controls sit below the animation.

## Website Embed Snippet Pattern

```html
<div style="width:100%;max-width:920px;margin:0 auto;">
  <iframe
    src="/wp-content/uploads/nexora-videos/VIDEO-FOLDER/index.html"
    title="VIDEO TITLE"
    style="display:block;width:100%;aspect-ratio:16/10;border:0;border-radius:18px;overflow:hidden;background:#f7f8fa;"
    loading="lazy"
    allowfullscreen>
  </iframe>
</div>
```

## Listing Thumbnail Pattern

```html
<img
  src="/wp-content/uploads/nexora-videos/VIDEO-FOLDER/thumbnail.svg"
  alt="VIDEO TITLE"
  style="display:block;width:100%;aspect-ratio:16/9;object-fit:cover;border-radius:18px;">
```

## Final Production Recommendation

These HTML videos are excellent for website previews and planning. For the final public launch, also export MP4 versions from screen recordings and host them as normal video files for best browser compatibility.
