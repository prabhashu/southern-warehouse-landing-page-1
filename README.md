# Southern Design Warehouse — Landing Page

> **Premium Flooring, Tile & Remodeling Materials in Tampa, Florida**
> A modern, SEO-optimized, high-performance landing page built with Next.js 15.

---

## 🏠 About the Project

This is the official landing page for **Southern Design Warehouse**, a Tampa, Florida-based showroom offering premium flooring, tile, cabinetry, and remodeling materials at warehouse prices. The site is designed to convert homeowners, contractors, and builders into customers through a clean, fast, and visually compelling experience.

**Live at:** [southerndesignwarehouse.com](https://southerndesignwarehouse.com) *(update once deployed)*

---

## ✨ Features

- ⚡ **Next.js 15** with App Router & Turbopack for blazing-fast performance
- 🎨 **Custom CSS Design System** — no Tailwind, full control over every style
- 📱 **Fully Responsive** — mobile-first layout with hamburger navigation
- 🎬 **Scroll Animations** — Intersection Observer–powered fade/slide effects
- 🔗 **Smooth Scrolling** — single-page navigation between all sections
- 🖼️ **Optimized Images** — Next.js `<Image>` component with lazy loading
- 🔍 **SEO Optimized** — full meta tags, Open Graph, Twitter cards, semantic HTML
- ♿ **Accessible** — ARIA labels, roles, keyboard navigation support
- 🏎️ **Performance First** — minimal dependencies, no heavy UI frameworks

---

## 📄 Page Sections

| # | Section | Description |
|---|---------|-------------|
| 1 | **Hero** | Full-screen headline, CTA buttons, floating stat cards, trust bar |
| 2 | **Stats Bar** | 500+ Products · 15+ Years · 2,000+ Projects · 100% Quality |
| 3 | **Why Choose Us** | 4 animated feature cards with icons |
| 4 | **Product Benefits** | Split layout — benefit list + product image with floating badges |
| 5 | **Who We Serve** | Homeowners & Contractors photo cards with overlay content |
| 6 | **Gallery** | Masonry-style grid with hover overlays — real project photos |
| 7 | **Strong CTA** | Green gradient section with urgency pulse indicator |
| 8 | **FAQ** | Interactive accordion (5 Q&As) with smooth open/close |
| 9 | **Contact & Quote Form** | Two-column layout — business info + contact form with success state |
| 10 | **Final CTA** | Dark close section with three action buttons |
| 11 | **Footer** | Logo, 4-column links, contact info, social links, copyright |

---

## 🎨 Brand & Design System

### Color Palette

| Name | Hex | Usage |
|------|-----|-------|
| Forest Green | `#2D5233` | Logo, headers, borders, secondary buttons |
| Vibrant Red-Orange | `#E84C3D` | Primary CTA buttons, "WAREHOUSE" text |
| Deep Charcoal | `#1F2937` | Main headings, footer background |
| Slate Gray | `#4B5563` | Body text, secondary descriptions |
| Light Smoke Gray | `#F3F4F6` | Section backgrounds for visual separation |
| Pure White | `#FFFFFF` | Primary page background |

### Typography
- **Headings:** [Outfit](https://fonts.google.com/specimen/Outfit) — weights 700, 800, 900
- **Body:** [Inter](https://fonts.google.com/specimen/Inter) — weights 300–700

---

## 🛠️ Tech Stack

| Technology | Version | Purpose |
|-----------|---------|---------|
| [Next.js](https://nextjs.org/) | 15.x | React framework with App Router |
| [React](https://reactjs.org/) | 19.x | UI library |
| [TypeScript](https://www.typescriptlang.org/) | 5.x | Type safety |
| [Lucide React](https://lucide.dev/) | 0.487+ | Icon library |
| [Framer Motion](https://www.framer.com/motion/) | 11.x | Installed / available for animations |
| Vanilla CSS | — | Custom design system (no Tailwind) |

---

## 📁 Project Structure

```
southern-warehouse-landing-page/
├── public/
│   └── Logo.png                    # Brand logo image
├── src/
│   ├── app/
│   │   ├── globals.css             # Full design system & CSS variables
│   │   ├── layout.tsx              # Root layout with SEO metadata
│   │   └── page.tsx                # Main page — assembles all sections
│   ├── components/
│   │   ├── Navbar.tsx              # Fixed nav with scroll detection + mobile menu
│   │   ├── Hero.tsx                # Full-screen hero with CTAs
│   │   ├── StatsBar.tsx            # Green stats bar
│   │   ├── WhyChooseUs.tsx         # 4-card feature section
│   │   ├── ProductBenefits.tsx     # Split layout benefits + image
│   │   ├── WhoWeServe.tsx          # Homeowners & contractors cards
│   │   ├── Gallery.tsx             # Masonry-style photo gallery
│   │   ├── CTASection.tsx          # Mid-page green CTA section
│   │   ├── FAQ.tsx                 # Interactive FAQ accordion
│   │   ├── ContactSection.tsx      # Contact form + business info
│   │   ├── FinalCTA.tsx            # Closing dark CTA
│   │   └── Footer.tsx              # Full footer
│   └── hooks/
│       └── useScrollAnimations.ts  # Intersection Observer scroll hook
├── .gitignore
├── LICENSE
├── README.md
├── next.config.ts
├── tsconfig.json
└── package.json
```

---

## 🚀 Getting Started

### Prerequisites

- **Node.js** v18 or later
- **npm** v9 or later

### Installation

```bash
# 1. Clone the repository
git clone https://github.com/prabhashu/southern-warehouse-landing-page-1.git

# 2. Navigate into the project directory
cd southern-warehouse-landing-page-1

# 3. Install dependencies
npm install

# 4. Start the development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

---

## 📦 Available Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server with Turbopack |
| `npm run build` | Build the production bundle |
| `npm run start` | Start the production server |
| `npm run lint` | Run ESLint checks |

---

## 🌐 Deployment

This project can be deployed to any platform that supports Next.js:

### Vercel (Recommended)
```bash
npm install -g vercel
vercel
```

### Netlify
```bash
npm run build
# Upload the /out folder or connect your GitHub repo
```

### Self-Hosted / Coolify
```dockerfile
# Build
npm run build

# Start
npm run start
```

---

## 🔧 Customization Guide

Before going live, update the following placeholder values:

| File | Item to Update |
|------|---------------|
| `src/components/Navbar.tsx` | Phone number `813-845-1111` |
| `src/components/Hero.tsx` | Phone number, CTA text |
| `src/components/ContactSection.tsx` | Phone, email, address, hours |
| `src/components/Footer.tsx` | Phone, email, social links, address |
| `src/components/FinalCTA.tsx` | Phone number |
| `src/app/layout.tsx` | `canonical` URL, `siteName`, descriptions |
| `public/` | Add `favicon.ico` and any additional brand assets |

---

## 📞 Business Contact

**Southern Design Warehouse**
- 📍 Tampa, Florida (Carrollwood Area)
- 📞 (813) 845-1111
- 📧 info@southerndesignwarehouse.com
- 🏠 Walk-ins Welcome — No Appointment Needed

**Hours:**
- Monday – Friday: 8:00 AM – 6:00 PM
- Saturday: 9:00 AM – 5:00 PM
- Sunday: Closed

---

## 📜 License

This project is **proprietary software**.

© 2026 **MIV Software Solutions**. All Rights Reserved.

Unauthorized copying, distribution, modification, or use of this software,
via any medium, is strictly prohibited without prior written permission from
MIV Software Solutions. See the [LICENSE](./LICENSE) file for full terms.

---

## 🙏 Credits

- **Design & Development:** Prabhashu Samarakkodi
- **Photography:** [Unsplash](https://unsplash.com)
- **Icons:** [Lucide React](https://lucide.dev/)
- **Fonts:** [Google Fonts](https://fonts.google.com/) — Outfit & Inter

---

*© 2026 Southern Design Warehouse. All Rights Reserved.*
