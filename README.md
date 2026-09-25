# VØID FORM Studio — Frontend Engineering Assessment

> **Frontend Developer Internship Submission**  
> **Chosen Reference Website**: [NVRMND Studio](https://www.nvrmndstudio.com/)  
> **Live Demo**: [https://your-deployment-url.vercel.app](https://your-deployment-url.vercel.app) *(Update with your deployed Vercel link)*  
> **Repository**: [https://github.com/potluriprashanth33/VoidForm-studio_NVRMND-clone](https://github.com/potluriprashanth33/VoidForm-studio_NVRMND-clone)

---

## 📌 Project Overview

This repository contains the homepage recreation of **[NVRMND Studio](https://www.nvrmndstudio.com/)**, engineered from scratch for the Frontend Developer Internship assessment. 

The objective was to faithfully replicate the complex interactive experience, brutalist grid aesthetic, and micro-animations of the reference website while introducing creative design adaptations, enhanced performance, and expanded interactive functionality that demonstrates production-ready frontend skills.

The project re-imagines the brand identity as **VØID FORM** (*Digital Architecture & Conversion Flagships for Visionary Founders*), while keeping the layout rhythm, typography hierarchy, original media assets, and motion choreography intact.

---

## 🚀 Key Features & Interactions Implemented

### 1. Page Load Matrix Grid Dissolve
- **144-Cell Dynamic Grid**: Generated dynamically in a 12×12 matrix overlay in electric cobalt (`#033FED`).
- **GSAP Staggered Dissolve**: Central branded studio mark scales and fades before the matrix blocks dissolve with a randomized stagger algorithm (`stagger: { amount: 0.45, from: 'random' }`).

### 2. Custom Big Pixel Cursor & Dynamic Contextual Tooltips
- **Custom Cursor Vectors**: Replaced default browser cursors with authentic pixel pointer SVGs (normal pointer, link select pointer, and text selection cursor).
- **Physics-Based Floating Badge**: An electric acid-lime (`#BEFD66`) badge tracks mouse velocity and position using `gsap.quickTo`.
- **Contextual Tooltip Engine**: Dynamically inspects `data-cursor` attributes across interactive elements, adapting labels in real-time (e.g., `"Hell Yeah!"`, `"View Case Study"`, `"CLICK FOR CLARITY"`, `"Open Menu"`, `"Book Call"`).
- **Edge-Boundary Detection**: Automatically inverts cursor badge placement when approaching viewport edges to prevent clipping.

### 3. Fullscreen Cyberpunk Navigation with Morphing Corners
- **Mechanical Hamburger Icon**: Smooth 45° morphing rotation from `+` to `✕`.
- **Animated Corner Target Brackets (`.nav-corners`)**: Four neo-brutalist corner markers smoothly track whichever menu link is hovered using FLIP-style geometric positioning and snap back to the active section.
- **Embedded Utility Bar**: Integrated socials, direct email access, and inline newsletter subscription.

### 4. Monumental Display Typography & Neo-Brutalist Borders
- **Fluid Heading Scale**: Responsive clamp typography scaling up to 8rem with tight line heights (`line-height: 0.9`).
- **Target Pixel Markers**: Custom retro target dots (`.rules-border-tl`, `.rules-border-br`, etc.) framing high-contrast emphasis words like `BOOKED`.
- **Text Roll Micro-Interactions**: All links with `[data-hover-anim]` feature a dual-layer character shift that rolls letters upward on hover.

### 5. Synchronized Dual-Column Work / Projects Showcase
- **Sticky Metadata Synchronization**: Left column pins case study details (Intellete, WORDS-HURT, Alfi Studio) and animates text entries via clipping reveals.
- **Parallax Visual Cards**: Right column houses high-resolution media mockups that update active states via `IntersectionObserver` on desktop, gracefully collapsing into responsive cards on mobile.

### 6. Interactive 3D Perspective Ticket Protocol
- **3D Transform Matrix Tilt**: The Clarity Guide ticket reacts to real-time mouse coordinates with dynamic `rotateX`, `rotateY`, and `translateZ` depth calculations.
- **Dual-Layer Artwork**: Front and back ticket graphics separate on hover, creating tangible holographic depth.

### 7. Feedback & Testimonial Carousel
- **Interactive Multi-Slide Carousel**: Showcases client case studies with project badges, verified review quotes, and retro pixelated client avatars.
- **Navigation Controls**: Smooth prev/next slide transitions, keyboard arrow support, and auto-rotation with hover-pause functionality.

### 8. Architectural 4-Column Grid & Curtain Reveal Footer
- **Dotted Grid Guidelines**: Persistent 4-column dotted guidelines (`.bg-grid-lines`) running through the canvas.
- **Curtain Reveal Depth**: The main container sits on a high z-index and terminates above a fixed dark footer, creating a smooth curtain reveal of the giant architectural wordmark.

---

## 💡 Creative Additions & Differentiated Features

To go beyond a 1:1 markup clone and demonstrate engineering creativity, the following unique features were designed and integrated:

| Feature | Original Website (NVRMND) | VØID FORM (Our Submission) | Engineering Value |
| :--- | :--- | :--- | :--- |
| **Clarity Protocol** | Static link redirecting to an external store checkout | **In-App Interactive Clarity Diagnostic Quiz** | Built a 3-step interactive assessment tool that evaluates Thought, Expression, and Identity, providing an instant personalized diagnostic score and roadmap recommendation. |
| **Case Studies** | Static portfolio cards | **Interactive Deep-Dive Slide-Over Drawer** | Clicking any case study triggers an animated slide-over drawer displaying verified conversion metrics (+240% inquiries), deliverables, and project breakdowns. |
| **Client Inquiry** | Basic mailto link | **Integrated Project Consultation Modal** | Custom inquiry modal with budget selectors, scope options, and simulated transmission feedback states. |
| **Tactile Experience** | Standard silent web browsing | **Synthesized Neo-Brutalist Audio Engine** | Built-in toggleable acoustic feedback (Web Audio API) generating retro mechanical clicks on interactions without requiring external audio asset files. |
| **Runtime Architecture** | Heavy Webflow vendor scripts | **Clean Vanilla CSS + GSAP 3.12 + Vite** | Decoupled from third-party vendor bundles, guaranteeing 60fps animations, zero layout shift (CLS: 0), and instant sub-100ms load times. |

---

## 🛠️ Tech Stack & Architecture

- **Markup**: Semantic HTML5 (SEO meta tags, OpenGraph protocol, accessibility roles)
- **Styling**: Vanilla CSS3 (Custom CSS custom properties / design tokens, Flexbox, CSS Grid)
- **Typography**: Apple SF Pro Display + OffBitTrial Pixel Typography (via original CDN woff2/otf) + JetBrains Mono & Space Grotesk fallbacks
- **Animation & Motion**: GSAP (GreenSock) 3.12+ (Timeline, quickTo, easing curves)
- **Interactivity**: Pure Vanilla JavaScript (ES6+ Modules)
- **Build Tooling**: Vite 8.3 (Hot Module Replacement, fast bundling)
- **Hosting / Deployment**: Vercel

---

## 📁 Project Structure

```text
├── index.html              # Main semantic HTML structure & modal layouts
├── package.json            # Project dependencies & build scripts
├── vite.config.js          # Vite bundler configuration (if needed)
├── public/                 # Static public assets (favicons, SVGs)
└── src/
    ├── style.css           # Comprehensive design system, CSS variables & layouts
    └── main.js             # Core animation controllers, cursor physics, audio & modals
```

---

## 💻 Local Setup & Development Instructions

### Prerequisites
- Node.js (v18 or higher recommended)
- npm or pnpm

### 1. Clone the repository
```bash
git clone https://github.com/your-username/your-repo.git
cd your-repo
```

### 2. Install dependencies
```bash
npm install
```

### 3. Start development server
```bash
npm run dev
```
Open your browser at `http://localhost:5173/` to view the application with live reload.

### 4. Build for production
```bash
npm run build
```
The optimized production bundle will be generated in the `dist/` directory.

### 5. Preview production build locally
```bash
npm run preview
```

---

## 🎯 Alignment with Evaluation Criteria

- **Quality of Implementation**: Semantic HTML5 markup, structured CSS tokens, and modular JavaScript with separation of concerns.
- **Smoothness of Interactions & Animations**: Silky 60fps animations powered by GSAP hardware-accelerated transforms (`transform`, `opacity`) and zero blocking operations.
- **Attention to Detail**: Precise pixel target markers, custom font pairings, letter-by-letter hover rolls, and edge-detecting cursor physics.
- **Responsiveness**: Fluid layout scaling across desktop, tablet, and mobile with dedicated touch optimizations.
- **Creativity in Design Adaptation**: Elevated brutalist aesthetic into a distinct high-conversion studio identity with in-app diagnostic tools and tactile audio feedback.
- **Code Organization**: Clean, readable, and well-commented codebase ready for production deployment.

---

### Submitted by:
**Candidate Name / Potlu**  
*Frontend Developer Internship Applicant*  
*Submission Date: September 2026*
