# Shelfina Khayla Anindita — Personal Portfolio (v2)

Personal portfolio website of **Shelfina Khayla Anindita ("Shel")** — Product Manager, Product Analyst, System Analyst, and Business Strategist. Information Technology Education undergraduate at Brawijaya University.

Live Production Site: [https://shelfina-porto.vercel.app/](https://shelfina-porto.vercel.app/)

---

## 🛠️ Tech Stack

- **Framework:** Next.js 16 (App Router with `src/app` architecture)
- **Language:** TypeScript (strict mode)
- **Styling:** Pure CSS Modules + Global CSS with custom properties / design tokens (No Tailwind CSS, no UI kits)
- **Animation & Icons:** Framer Motion, Lucide React
- **Typography:** Google Fonts via `next/font` — *Plus Jakarta Sans* (headings) & *Inter* (body)
- **Theme:** Dark-first glassmorphism with light mode toggle (persisted via `localStorage` with zero flash)

---

## 🚀 Getting Started

### 1. Install Dependencies
```bash
npm install
```

### 2. Start the Development Server
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) in your browser.

### 3. Build & Validate
```bash
npm run build
npm run lint
```

---

## 📸 Swapping Photos

All image references live in typed data files under `src/data/`:

1. **Hero & About Photos:**
   - Open `src/data/profile.ts`.
   - Update `photos.hero.url` and `photos.about.url` with your direct image link (e.g., `https://i.imgur.com/<ID>.jpg`).
   - If you prefer local files, drop your images into `public/images/hero-photo.jpg` and `public/images/about-photo.jpg`. The code automatically falls back to these paths if external URLs fail to load.

2. **Organizational Award Certificates:**
   - Open `src/data/awards.ts`.
   - Under `organizationalAwards`, update `imageUrl` (or drop local files into `public/images/award-180dc.jpg` and `public/images/award-bem.jpg`).

---

## 📝 Editing Portfolio Data

Content is completely separated from components. To modify text, awards, projects, or experiences, edit the typed files in `src/data/`:

- **`src/data/profile.ts`**: Name, tagline, descriptor, bio, highlight chips, GPA, and contact links (WhatsApp, Email, LinkedIn).
- **`src/data/stats.ts`**: Highlight numbers and count-up metrics.
- **`src/data/experience.ts`**: Timeline roles for Organizational & Academic/Volunteer experience.
- **`src/data/committee.ts`**: External/National and University committee engagements.
- **`src/data/projects.ts`**: All 20 project developments across UI/UX, Software, BMC, Business Plan, and Community categories.
- **`src/data/awards.ts`**: Grouped competition podiums with Google Drive certificate links and organizational certificates.
- **`src/data/education.ts`**: Academic degree details and grouped skill chips (Technical & Product/UI/UX).

---

## 🚢 Deployment to Vercel

The project is already linked to Vercel (`shelfina-porto.vercel.app`):
1. Push your changes to the GitHub repository branch.
2. Vercel automatically runs `npm run build` and deploys the new version.
3. Domain settings and environment configurations remain intact.
