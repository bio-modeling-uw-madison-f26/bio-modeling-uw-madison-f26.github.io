# BME 603/606 course website

Course website for **Computational Methods for Biological Modeling and Simulation**, Fall 2026.

## Updating the schedule

Open `app/course-data.ts` and edit the relevant meeting. For example:

```ts
{
  date: "Wed, Sep 9",
  topic: "Interpolation and curve fitting",
  notes: [
    { label: "Slides", url: "/materials/lecture-02.pdf" },
    { label: "Reading", url: "https://example.com/reading" },
  ],
  activities: [
    { label: "Notebook", url: "https://github.com/..." },
  ],
},
```

Put downloadable files in `public/materials/` and link them as `/materials/filename.pdf`.

## Updating other content

- Course text, grading, and policies: `app/page.tsx`
- Dates, schedule resources, assignments, and grading: `app/course-data.ts`
- Changelog entries: `app/changelog/page.tsx`
- Colors, typography, and layout: `app/globals.css`
- Logo: `public/course-logo.png`
- Game of Life behavior: `app/game-of-life.tsx`

## Local development

```bash
npm install
npm run dev
```

Then open the local address shown in the terminal. Run `npm run build` before publishing.

## GitHub Pages

The included workflow publishes automatically after each push to `main`. In the GitHub repository, open **Settings → Pages** and set the source to **GitHub Actions** once.
