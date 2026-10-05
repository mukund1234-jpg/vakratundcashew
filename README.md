# Konkan Cashew Co. — Website

A React + Vite + Tailwind CSS website for a cashew manufacturer / wholesale
supplier based in Kankavli, Sindhudurg, Maharashtra.

## Before you launch — update these

1. **`src/config/business.js`** — the single place to edit:
   - `whatsappNumber` — your real WhatsApp number in international format,
     digits only (e.g. `919876543210`). This currently has a placeholder
     `91XXXXXXXXXX` and every "Order on WhatsApp" button will be broken
     until you set it.
   - `phone`, `email`, `address`, `hours`, `mapsEmbedUrl`,
     `mapsDirectionsUrl`, `stats`, `socials`.
   - `stats` values are left blank on purpose — the stats section only
     renders once you fill in real numbers, so nothing fabricated is shown.

2. **`src/data/products.js`** — edit names, descriptions, weights and
   grades to match what you actually stock.

3. **Photos** — every image on the site is currently a placeholder SVG
   illustration (`CashewIllustration.jsx`), clearly marked in code
   comments. Replace `<CashewIllustration className="..." />` with real
   `<img src="/images/your-photo.jpg" className="..." alt="..." />` tags
   once you have product and facility photography. Add image files to
   `public/images/`.

4. **`index.html`** — replace `konkancashewco.example` in the canonical
   URL and Open Graph tags, and `public/robots.txt` /
   `public/sitemap.xml`, with your real domain once you have one.

5. **Testimonials** (`src/components/TestimonialSection.jsx`) and
   **About page story** — replace placeholder text with real customer
   reviews and your actual business story once available. Don't publish
   invented reviews or statistics.

## Run locally

```bash
npm install
npm run dev
```

## Build for production

```bash
npm run build
npm run preview   # preview the production build locally
```

## Deploy to Vercel

1. Push this project to a GitHub repository.
2. In Vercel, "Add New Project" → import the repository.
3. Framework preset: **Vite**. Build command: `npm run build`. Output
   directory: `dist`. (Vercel usually detects these automatically.)
4. Deploy. No environment variables or backend are required for this
   version of the site.

## Project structure

```
src/
  components/   Reusable UI building blocks
  pages/        One file per route (see src/App.jsx for the route list)
  config/       business.js — all editable business details + WhatsApp helpers
  data/         products.js — product catalogue
public/
  robots.txt, sitemap.xml, favicon.svg
```

## Notes on scope

This is a frontend-only site (no backend/CMS). The wholesale inquiry form
and every "Order on WhatsApp" button open a pre-filled WhatsApp chat
rather than submitting to a server, so there is nothing to host or pay
for beyond static hosting. If you later want form submissions emailed to
you, saved to a spreadsheet, or a real CMS for products/gallery, that
would be a separate addition.
