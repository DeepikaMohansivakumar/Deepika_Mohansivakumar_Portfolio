# Deepika Mohansivakumar — Portfolio

A premium, dark-themed (with light mode toggle) recruiter-facing portfolio built with React, TypeScript, Tailwind CSS, Framer Motion, and Lucide icons.

## Run it locally

```bash
npm install
npm run dev
```

Then open the local URL Vite prints (usually `http://localhost:5173`).

To build for production:

```bash
npm run build
npm run preview   # preview the production build locally
```

## Editing content

All the actual text content lives in `src/data/` so you can update it without touching any layout or animation code:

- `src/data/skills.ts` — skill categories and chips
- `src/data/projects.ts` — project descriptions, tech stacks, gallery labels
- `src/data/experience.ts` — work experience timeline
- `src/data/education.ts` — education timeline

The hero's typing-role list lives in `src/components/Hero.tsx` (`ROLES` array) since it's tightly coupled to that component's animation.

## Things to finish before you publish (search the code for `TODO`)

1. **GitHub link** — `src/data/projects.ts`, `src/components/Contact.tsx`, and `src/components/Footer.tsx` all have placeholder `#` links. Replace with your real GitHub profile/repo URLs.
2. **Resume PDF** — the "Download Resume" button in `Hero.tsx` points to `/resume.pdf`. Drop your actual resume PDF into the `public/` folder with that exact filename (or update the path).
3. **Virtual Mandi screenshots** — `src/components/GalleryLightbox.tsx` currently renders a placeholder tile instead of an image. Once you have real screenshots, replace the placeholder `<div>` block with an `<img src={...} />` pointing at images you add to `public/` (e.g. `public/gallery/seller-dashboard.png`), and add an `image` field to each gallery item in `projects.ts`.
4. **Live demo links** — add real URLs to the `liveDemo` field in `projects.ts` once your projects are deployed; until then they'll show a "Demo soon" badge instead of a broken link.
5. **Contact form backend** — the form in `Contact.tsx` posts to a placeholder Formspree endpoint (`FORM_ENDPOINT`). Sign up free at [formspree.io](https://formspree.io), create a form, and paste your real endpoint URL in so submissions actually reach your inbox.

## Deploying

The fastest free options:

- **Vercel** — `npx vercel`, or connect your GitHub repo at vercel.com and it auto-detects Vite.
- **Netlify** — drag the `dist/` folder (after `npm run build`) into Netlify's deploy UI, or connect the repo.

Both give you a free `yourname.vercel.app` / `yourname.netlify.app` URL, and you can attach a custom domain later from their dashboard.

## Notes on accessibility & performance

- Respects `prefers-reduced-motion` (animations are disabled for users who request it).
- Visible focus states on all interactive elements for keyboard navigation.
- Semantic headings and `aria-label`s on icon-only buttons.
- Images are intentionally left as placeholders until real screenshots are added — once you add them, use compressed `.webp` where possible to keep load times fast.
