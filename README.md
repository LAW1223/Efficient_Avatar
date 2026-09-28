# Efficient Half-Body Talking Avatar Generation (showcase site)

A static, single-page site. There is no build step.

## Preview locally

```bash
cd site
python -m http.server 8765
# open http://localhost:8765
```

## Updating content

All text, videos, benchmark numbers and team details are in `data.js`.
`index.html` holds only layout and logic.

- **Videos:** put files at the paths listed in `data.js` (for example `videos/hero/hero-avatar.mp4`).
  Any missing file shows a "Video not added yet" panel, so gaps are easy to spot before deploying.
- **Benchmark:** leave values as `null` until they are verified. The Performance section stays hidden
  until hardware, baseline definition, required settings and the Baseline and headline rows are all filled.
  Speed-up and memory reduction are calculated from the table.
- **Team / contact:** edit `team` and `contact.email`. Empty fields are hidden.
- **DMD diagram:** edit `distillation` for its explanation and labels. The training / inference
  views live in the Technology section; the **How DMD works** button on the first screen jumps to them.
  Step counts and the approximate inference-time
  percentage are calculated from `performance.steps`; the time estimate assumes comparable cost per step.

## Video guidelines
- MP4 (H.264), 720p, `+faststart`; hero under 15 MB, demos under 10 MB each.
- Keep the audio on lip-sync demos so visitors can turn the sound on.

## Before publishing
- Remove `<meta name="robots" content="noindex, nofollow">` in `index.html` once public release is approved.
- Confirm all team affiliations and that ASTRI approves publishing the demos and figures.

## Deploy
Upload the `site/` folder as-is to Netlify Drop, Vercel (`vercel --prod` inside `site/`) or GitHub Pages.
