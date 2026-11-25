# Grand Theft Auto VI — Roblox Port Concept Promotional Website

A modern, visually stunning, AAA-tier promotional website showcasing an ambitious **fictional GTA VI Roblox Port Concept**.

Built as a **100% Pure Static Frontend SPA** (Zero backend, Zero PHP, Zero SQL/Database). Optimized for **GitHub Pages**, **Vercel**, **Netlify**, and **Cloudflare Pages**.

---

## 🚀 GitHub Pages Deployment (No Server / No PHP)

This project produces purely static assets (`HTML`, `JS`, `CSS`, and images). You do not need PHP, Apache, Nginx, or any backend database.

### Method 1: Automatic Deployment with GitHub Actions (Recommended)

1. Push your repository to GitHub:
   ```bash
   git init
   git add .
   git commit -m "feat: initial commit of GTA VI Roblox concept site"
   git branch -M main
   git remote add origin https://github.com/<YOUR_USERNAME>/<YOUR_REPOSITORY_NAME>.git
   git push -u origin main
   ```
2. On GitHub, navigate to **Settings** → **Pages** in your repository.
3. Under **Build and deployment** > **Source**, choose **GitHub Actions**.
4. The workflow file located at `.github/workflows/deploy.yml` will automatically build and publish your site directly to `https://<YOUR_USERNAME>.github.io/<YOUR_REPOSITORY_NAME>/`.

### Method 2: Manual / CLI Deployment using `gh-pages`

1. Build and push the static build using the included script:
   ```bash
   npm install
   npm run build
   npm run deploy
   ```
2. Under **Settings** → **Pages**, select **Deploy from a branch** and choose the `gh-pages` branch.

---

## 🌴 Key Project Highlights

- **100% Serverless & Static**: Operates entirely in the browser using React, TypeScript, and modern client-side state.
- **Vite Relative Asset Paths (`base: './'`)**: Assets load properly under GitHub Pages subdirectories (e.g. `https://username.github.io/repo/`).
- **Visual Identity**: Vice City aesthetic with deep blacks, neon pink & purple gradients, sunset orange accents, glassmorphic HUD styling, and smooth framer motion transitions.
- **Cinematic Hero**: Full-screen landing with glowing CTA buttons, concept verification badges, and responsive action triggers.
- **Detailed Concept Showcase**: Covers all 9 distinct core conceptual pillars:
  1. Neon-Drenched Vice City
  2. Vast Open-World Exploration
  3. High-Performance Vehicle Physics
  4. Dual Character Protagonist Concept
  5. Iconic Venues & Hidden Hideouts
  6. Dynamic High-Rolling Activities
  7. Cooperative Heist Operations
  8. 64-Player Persistent Server Sandbox
  9. Refined Tactical Gunplay & Ballistics
- **Interactive Screenshot & Media Gallery**: Filterable category grid, full-screen lightbox modal with keyboard and chevron navigation, and responsive gameplay video reel showcase.
- **CPA Grip Gateway Integration**:
  - Centralized in `src/config/siteConfig.ts` (`cpaGripUrl`).
  - Transparent visitor flow explanation.
  - Redirect configured to the official Rockstar Games GTA VI portal (`https://www.rockstargames.com/VI`).
- **Dedicated Roblox Section**: Configurable Roblox experience and fan group links with full community disclosures.
- **Interactive Community & FAQ Accordion**: 10 editable questions addressing concept authenticity, compatibility, and external redirects.
- **Dedicated Legal Pages**: Standalone **Privacy Policy** and **Terms of Use** views accessible via footer navigation.
- **Comprehensive Legal Disclaimer**: Conforms strictly to all legal protection guidelines, explicitly disclaiming affiliation with Rockstar Games or Roblox Corporation.

---

## 🛠️ Project Structure

```text
├── .github/
│   └── workflows/
│       └── deploy.yml           # Automated GitHub Pages build & deploy workflow
├── public/
│   └── 404.html                 # Static fallback for SPA navigation
├── index.html                   # HTML entry point with Google Fonts and SEO tags
├── package.json                 # Dependencies and npm build scripts
├── postcss.config.js            # PostCSS configuration for Tailwind
├── tailwind.config.js           # Custom neon gradients, vice themes, and animations
├── tsconfig.json                # TypeScript compiler options
├── vite.config.ts               # Vite configuration with relative base './'
└── src/
    ├── App.tsx                  # Main application router and view orchestrator
    ├── main.tsx                 # React DOM mount point
    ├── config/
    │   └── siteConfig.ts        # Central configuration file for all URLs and text
    ├── components/
    │   ├── Navbar.tsx           # Sticky navigation with mobile menu
    │   ├── HeroSection.tsx      # Full-screen cinematic landing
    │   ├── GameShowcase.tsx     # 9-pillar interactive concept showcase
    │   ├── FeaturesSection.tsx  # Interactive feature cards with Lucide icons
    │   ├── GallerySection.tsx   # Lightbox gallery and video showcase
    │   ├── CpaLockerSection.tsx # CPA Grip unlock section and redirect flow
    │   ├── RobloxSection.tsx    # Roblox hub with place thumbnail and links
    │   ├── CommunitySection.tsx # Discord and Roblox group announcement hub
    │   ├── FaqSection.tsx       # Interactive FAQ accordion
    │   └── Footer.tsx           # Comprehensive footer and mandatory disclaimer
    ├── pages/
    │   ├── PrivacyPolicyPage.tsx# Standalone Privacy Policy view
    │   └── TermsOfUsePage.tsx   # Standalone Terms of Use view
    ├── animations/
    │   └── variants.ts          # Framer Motion reusable animation variants
    ├── styles/
    │   └── globals.css          # Tailwind CSS base and utility styles
    └── utils/
        └── helpers.ts           # Class merge and CPA Grip locker helpers
```

---

## ⚙️ Configuration & Customization

All website content, external links, social handles, and CPA Grip locker URLs are managed from a single central file:

**`src/config/siteConfig.ts`**

To connect your CPA Grip locker:
```typescript
export const SITE_CONFIG: SiteConfiguration = {
  cpaGripUrl: "https://filemotto.com/1922536",
  rockstarRedirectUrl: "https://www.rockstargames.com/VI",
  robloxExperienceUrl: "https://www.roblox.com/games/your-place-id",
  robloxGroupUrl: "https://www.roblox.com/groups/your-group-id",
  discordInviteUrl: "https://discord.gg/your-invite",
  ...
};
```
