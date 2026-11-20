# Carlos Llano | Portfolio

Personal portfolio of Carlos Alberto Llano Flores, full stack software developer.

**Live:** https://carlos-llano.pages.dev (English) and https://carlos-llano.pages.dev/es/ (Spanish)

## Features

- Bilingual (English by default, Spanish at `/es/`) with `hreflang` alternates.
- Light and dark themes that follow the system setting, with a manual toggle.
- Selected work with real screenshots, experience, skills, education and contact.
- Static output, no client framework, reduced-motion aware.

## Editing content

All copy lives in `src/data/perfil.ts`. Every string has an `en` and an `es` value; the page template is `src/components/Page.astro`.

## Development

```bash
npm install
npm run dev      # http://localhost:4321
npm run build    # outputs dist/
```

Deployed to Cloudflare Pages:

```bash
npx wrangler pages deploy dist --project-name carlos-llano
```

Built with [Astro](https://astro.build) and [Phosphor Icons](https://phosphoricons.com).
