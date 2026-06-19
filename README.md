# Ombra

[![Ombra preview](./public/og.png)](https://ombra-astro.vercel.app)

![Astro](https://img.shields.io/badge/Astro-5.x-ff5d01?style=for-the-badge&logo=astro&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-ready-3178c6?style=for-the-badge&logo=typescript&logoColor=white)
![License](https://img.shields.io/badge/License-MIT-f0e7d8?style=for-the-badge)

**Preview:** https://ombra-astro.vercel.app

Ombra is a dark, editorial Astro theme for intimate restaurants, tasting counters, chefs, supper clubs, and hospitality concepts that need a fast one-page presence with strong imagery and polished SEO defaults.

## Features

- Static Astro pages with no client framework runtime.
- Typed site configuration in `src/config/site.ts`.
- Reusable base layout, SEO head, navigation, and footer components.
- Canonical, Open Graph, Twitter card, and Restaurant JSON-LD metadata.
- Sitemap integration and production robots file.
- Local generated imagery with dimensions and accessible alt text.
- Semantic sections, skip link, visible focus styles, and labelled reservation form controls.
- Responsive editorial layout with reduced-motion support.
- Minimal dependency surface for theme reuse and easy customization.

## Versions

| Tool | Version |
| --- | --- |
| Astro | `^5.0.0` |
| TypeScript | `^5.8.3` |
| Node | `>=20.11.0` |

## Setup

```bash
npm install
npm run dev
```

The local site runs at the URL shown by Astro, usually `http://localhost:4321`.

## Build

```bash
npm run build
npm run preview
```

## Customize

- Edit global theme values, navigation, address, social links, and reservation action in `src/config/site.ts`.
- Replace section images in `src/assets`.
- Adjust tokens, layout spacing, focus states, and responsive behavior in `src/styles.css`.
- Edit page content in `src/pages/index.astro`.

## Deployment

Set the production URL in `astro.config.mjs` under `site` before deploying. This keeps canonical URLs, sitemap output, and social image URLs correct.

## License

MIT License, copyright Andrei Alba.
