# TRGVC Website v2

A complete static website for **TRGVC**: music producer, PC gamer, digital creator, and community brand.

This project is ready to upload to GitHub Pages. No build tools, frameworks, database, or server are required.

## Included

- `index.html` homepage
- `music.html` discography and streaming links
- `gaming.html` PC gaming hub
- `videos.html` YouTube and shorts hub
- `gallery.html` wallpapers and digital assets
- `news.html` updates / SEO blog page
- `about.html` biography and brand pillars
- `contact.html` contact form and platform directory
- `lyrics/` starter lyrics pages
- `assets/css/styles.css` complete responsive design system
- `assets/js/main.js` navigation, scroll animations, mouse glow, and back-to-top
- `assets/data/site.json` central place to update links/releases/news later
- `robots.txt`, `sitemap.xml`, `manifest.json`, `CNAME`, `.nojekyll`
- GitHub Actions workflow for Pages deployment

## Recommended upload steps: GitHub Pages

1. Create a new GitHub repository, for example `trgvc-website`.
2. Upload every file and folder from this package into the repository root.
3. Commit to the `main` branch.
4. Go to **Settings → Pages**.
5. Under **Build and deployment**, choose **GitHub Actions**.
6. Push/commit again if the workflow does not start automatically.
7. Wait for the `Deploy static site to GitHub Pages` action to complete.
8. Visit the Pages URL shown by GitHub.

## Custom domain setup for trgvc.club

This package includes a `CNAME` file containing:

```txt
trgvc.club
```

In your domain/DNS provider, point the domain to GitHub Pages. Common setup:

- Apex/root domain: add GitHub Pages A records.
- `www`: add a CNAME pointing to your GitHub Pages hostname.

After DNS updates, go to **GitHub → Settings → Pages → Custom domain**, enter `trgvc.club`, save, then enable **Enforce HTTPS** when available.

## What to edit first

### 1. Social/music links

Open:

```txt
assets/data/site.json
```

Update any platform links if they change.

### 2. YouTube embeds

Open:

```txt
videos.html
gaming.html
index.html
```

Replace placeholder video blocks with YouTube embed iframes.

Example:

```html
<iframe width="100%" height="315" src="https://www.youtube.com/embed/VIDEO_ID" title="TRGVC video" frameborder="0" allowfullscreen></iframe>
```

### 3. Album covers and wallpapers

Replace SVG placeholders inside:

```txt
assets/img/albums/
assets/img/wallpapers/
```

Keep the same file names if you do not want to edit HTML.

### 4. Contact form

`contact.html` uses FormSubmit:

```html
action="https://formsubmit.co/info@trgvc.club"
```

The first submission may require email confirmation. You can replace it with Formspree, Netlify Forms, or a custom backend later.

## Recommended next upgrades

- Add real Spotify embeds for albums and singles.
- Add one news post per song/video release.
- Create full lyrics pages for every song.
- Add final PNG/WebP album artwork and thumbnails.
- Add Google Analytics 4, Google Search Console, Bing Webmaster Tools, and Microsoft Clarity.
- Add a newsletter form.
- Add a downloadable media kit zip.
- Add a merch page later, even if it starts as “Coming Soon”.

## Notes

This version intentionally avoids console-focused branding and positions TRGVC as a **PC gaming + music + community** brand.
