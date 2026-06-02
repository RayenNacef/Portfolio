# Rayen Nacef — Portfolio

A dynamic, interactive personal portfolio built with **React + Vite**, generated
from my résumé. Dark/light themes, scroll animations, an animated hero, a
filterable project gallery, and a contact form that opens your mail client.

## Prerequisites

This project needs **Node.js** (which includes `npm`). It is **not currently
installed** on this machine. Install the LTS version once:

- Download: https://nodejs.org/en (choose the **LTS** installer for Windows), **or**
- Via winget in PowerShell: `winget install OpenJS.NodeJS.LTS`

Close and reopen your terminal after installing so `node` is on the PATH
(check with `node --version`).

## Run it

```powershell
npm install      # first time only — downloads dependencies
npm run dev      # start the dev server, then open the printed http://localhost:5173
```

## Build for production / deploy

```powershell
npm run build    # outputs a static site into  dist/
npm run preview  # preview the production build locally
```

The `dist/` folder is plain static files — host it on **GitHub Pages**,
**Netlify**, **Vercel**, or any static host.

## How to customize

Everything is data-driven. Edit **`src/data.js`** to change text, jobs,
projects, skills, and links. Key things to update:

| What | Where |
|------|-------|
| **LinkedIn / GitHub URLs** (currently placeholders) | `contacts` in `src/data.js` |
| Email & phone | `contacts` in `src/data.js` |
| Your profile photo | drop a file at `public/avatar.jpg` |
| Project thumbnails | drop files in `public/projects/` (see that folder's README) |
| Résumé download | replace `public/RESUME_RayenNACEF_updated.pdf` |
| Colors / theme | CSS variables at the top of `src/index.css` |

> ⚠️ **Replace the placeholder social links** in `src/data.js` — they currently
> point to `linkedin.com/in/rayen-nacef` and `github.com/rayennacef`.

## Photos

- **Profile picture:** save as `public/avatar.jpg`. Until you do, the hero shows
  your initials in a gradient circle.
- **Project images:** see `public/projects/README.txt` for the exact filenames.
  Missing images fall back to generated placeholders automatically.
