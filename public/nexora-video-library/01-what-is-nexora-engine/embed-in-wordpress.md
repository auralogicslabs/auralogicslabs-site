# Add Video 1 to the Nexora Website

You have two good ways to use this on the website.

## Recommended: Export MP4, Then Upload to WordPress

This is best for the public website because it behaves like a normal video, loads predictably, and works on mobile.

1. Open the local preview:
   `http://127.0.0.1:8791/?record=1`

2. Double-click the animation area to full screen.

3. Start screen recording.

4. Add voiceover in CapCut, Canva, Premiere, or DaVinci Resolve.

5. Export MP4:
   - Resolution: 1920x1080
   - FPS: 30
   - Format: MP4

6. Upload the MP4 in WordPress:
   - WP Admin > Media > Add New
   - Upload the MP4

7. Add it to the Videos page:
   - Edit the Videos page
   - Add a Video block
   - Select the uploaded MP4

## Fast Preview: Embed the Interactive Animation

Use this only for testing or preview. It is not as production-friendly as an MP4.

Copy the `nexora-video-01` folder into the website, for example:

`wp-content/uploads/nexora-videos/video-01`

Then add this in a WordPress Custom HTML block:

```html
<div style="max-width:920px;margin:0 auto;">
  <iframe
    src="/wp-content/uploads/nexora-videos/video-01/index.html?embed=1&autoplay=1"
    title="What is Nexora Engine?"
    style="display:block;width:100%;aspect-ratio:16/10;border:0;border-radius:18px;overflow:hidden;background:#f7f8fa;"
    loading="lazy"
    allowfullscreen>
  </iframe>
</div>
```

## Notes

- The right-side control panel is only for production.
- Use `?record=1` or `?embed=1` to hide the right-side controls.
- Use `?autoplay=1` to start the animation automatically.
- For the real public website, MP4 is strongly preferred.
