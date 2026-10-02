# nadee2k.github.io

Personal portfolio for **Dhananjana Nadee Kumari** — Data & AI Engineer.

Built with [Astro](https://astro.build). Static output, no client framework, dark theme only.

## Commands

| Command | Action |
| --- | --- |
| `npm install` | Install dependencies |
| `npm run dev` | Dev server at `localhost:4321` |
| `npm run build` | Type-check, build to `dist/`, then verify links |
| `npm run preview` | Preview the production build |
| `npm run check:links` | Re-run the integrity check against `dist/` |

`npm run build` fails if any internal link, asset, or résumé reference does not
resolve, so a broken image or a 404 CTA cannot reach production.

## Structure

```
src/
  assets/            Imported images (profile photo, optional project covers)
  components/        Astro components
  content/projects/  One markdown file per project
  data/
    site.ts          Name, contact details, skills, education, certifications
    tracks.ts        Track metadata (ml / data / product)
  layouts/           BaseLayout (head, SEO, JSON-LD) and page shells
  pages/             Routes
  styles/global.css  Design tokens and shared primitives
public/              Copied verbatim: résumé, architecture diagrams, favicon
scripts/check-links.mjs  Build integrity check
```

## Adding or editing a project

Add a markdown file to `src/content/projects/`. The schema lives in
`src/content.config.ts`.

```yaml
---
title: Project Name
summary: One line, used on cards and as the meta description.
track: ml            # ml | data | product
period: "2026"
stack: [Python, SQL]
metrics:
  - value: "75%+"
    label: Precision
problem: >
  What made this necessary.
solution: >
  How you approached it.
highlights:
  - Something concrete you built.
repoUrl: https://github.com/nadee2k/your-repo
demoUrl: https://...        # only if a live deployment exists
featured: true
order: 50
---
```

Content below the frontmatter renders as the case study body on
`/projects/<slug>/`.

### Rules that keep the portfolio credible

- **Only set `repoUrl` to a repository that contains real code.** Every featured
  repo was checked. `scripts/check-links.mjs` fails the build if a project page
  has no source link unless the slug is explicitly listed in
  `REPOSITORIES_WITHOUT_CODE` with a reason.
- **Only set `demoUrl` when a live deployment actually exists.** There are
  currently none, so no dead "Live demo" buttons render.
- **Only claim metrics you can substantiate.** Every figure in `site.ts` and in
  project frontmatter traces to a case study or the résumé.
- **A project with no cover image simply has none.** Screenshots live in
  `src/assets/projects/`; add `cover:` to frontmatter once you have confirmed
  which screenshot belongs to which project.

## Known TODOs

- **`src/data/site.ts` → `experience`** — placeholder entry for the AI/ML
  Engineer internship. Replace the employer, dates and bullets; remove the
  `todo` flag so the warning banner disappears.
- **`src/content/projects/speech-emotion-recognition.md`** — no `repoUrl` yet.
  Add the public repository URL and remove the slug from
  `REPOSITORIES_WITHOUT_CODE` in `scripts/check-links.mjs`.
- **Not linked from this site** (intentionally, pending content): House Price
  Prediction, J26-DS-307 research project, and the `precision_agriculture_analytics`
  repository, whose source files are all zero bytes.

## Deployment

`.github/workflows/deploy.yml` builds and publishes to GitHub Pages on every push
to `main`. In repository settings, set **Pages → Source** to **GitHub Actions**.

Deployment will not run until this workflow has been merged to `main` and Actions
is enabled for the repository.

## Contact

- Email: dhananjananadeekumari@gmail.com
- LinkedIn: linkedin.com/in/dhananjana-mallawaarachchi
- GitHub: github.com/nadee2k