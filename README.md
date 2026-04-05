# Jonathan Cantora Portfolio

Premium, recruiter-focused portfolio built with Next.js App Router, TypeScript, and Tailwind CSS.

## Stack

- Next.js (App Router)
- TypeScript
- Tailwind CSS

## Getting Started

```bash
npm install
npm run dev
```

Open `http://localhost:3000`.

## Build For Production

```bash
npm run lint
npm run typecheck
npm run build
npm start
```

## Content Editing

All primary content is structured in `/data`:

- `data/profile.ts`
- `data/skills.ts`
- `data/certifications.ts`
- `data/experience.ts`
- `data/projects.ts`
- `data/education.ts`

## Resume Download

The resume button uses:

- `public/resume/Jonathan-Cantora-RESUME.pdf`

Replace this file to update the downloadable resume.

## Netlify Form Submissions

The contact form is configured for Netlify Forms using the Next Runtime v5 migration approach:

- Form name: `portfolio-contact`
- Honeypot field: `bot-field`
- Detection file: `public/__forms.html`
- Runtime submit target: `POST /__forms`
- Success page: `/thank-you`

In Netlify, enable form notifications/spam filtering as needed. Submissions will appear in the Netlify dashboard under **Forms** after deployment.

## Branding Assets

- App icon: `app/icon.svg`
- Avatar placeholder: `public/brand/avatar.svg`
