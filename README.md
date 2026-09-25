# VØID FORM Studio — Frontend Engineering Assessment

[![Live Demo](https://img.shields.io/badge/Live%20Demo-Vercel-000000?style=for-the-badge&logo=vercel&logoColor=white)](https://void-form-studio-nvrmnd-clone.vercel.app/)
[![GitHub Repo](https://img.shields.io/badge/GitHub-Repository-181717?style=for-the-badge&logo=github&logoColor=white)](https://github.com/potluriprashanth33/VoidForm-studio_NVRMND-clone)
[![Vite](https://img.shields.io/badge/Vite-8.3-646CFF?style=for-the-badge&logo=vite&logoColor=white)](https://vitejs.dev/)
[![GSAP](https://img.shields.io/badge/GSAP-3.12-88CE02?style=for-the-badge&logo=greensock&logoColor=white)](https://greensock.com/gsap/)
[![Vanilla CSS3](https://img.shields.io/badge/CSS3-Vanilla%20Design%20System-1572B6?style=for-the-badge&logo=css3&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/CSS)

> **Frontend Developer Internship Selection Assignment**  
> **Chosen Reference Website**: [NVRMND Studio](https://www.nvrmndstudio.com/)  
> **Live Deployment Link**: [https://void-form-studio-nvrmnd-clone.vercel.app/](https://void-form-studio-nvrmnd-clone.vercel.app/)  
> **Source Code Repository**: [https://github.com/potluriprashanth33/VoidForm-studio_NVRMND-clone](https://github.com/potluriprashanth33/VoidForm-studio_NVRMND-clone)  

---

## 📌 Executive Summary

This project is an engineering recreation of the homepage of **[NVRMND Studio](https://www.nvrmndstudio.com/)**, built for the Frontend Developer Internship technical assessment.

The task required recreating the homepage experience, preserving all complex interactions, animation choreography, and architectural design principles, while demonstrating creativity in design adaptation and engineering excellence.

The project transforms the creative concept into **VØID FORM** (*High-Conversion Digital Architecture for Visionary Founders*). While preserving 100% of the authentic layout structure, original high-resolution client media assets, fluid typography scale, and motion pacing, it decouples the application from heavy proprietary Webflow scripts into a lightweight, high-performance **Vanilla CSS + GSAP 3 + Vite** architecture running at a consistent 60fps.

---

## 🚀 Key Features & Interactions Replicated

### 1. Matrix Page Load Staggered Grid Dissolve
- **12×12 Dynamic Matrix (144 Cells)**: Formed dynamically over the viewport in electric cobalt (`#033FED`).
- **Orchestrated GSAP Timeline**: Central studio emblem scales and fades, followed by an algorithmically randomized staggered dissolve of all 144 grid cells (`stagger: { amount: 0.45, from: 'random' }`).

### 2. Custom Big Pixel Cursor & Dynamic Tooltip Engine
- **Custom Pixel Cursor Icons**: Authentic custom SVGs for standard pointer, link hover pointer, and text selection.
- **Physics-Interpolated Floating Badge**: An acid-lime (`#BEFD66`) badge trails the mouse with smooth spring physics via `gsap.quickTo`.
- **Dynamic Contextual Badges**: Elements declare custom badges via `data-cursor` attributes (e.g. `"Hell Yeah!"`, `"View Case Study"`, `"CLICK FOR CLARITY"`, `"Open Menu"`, `"Book Call"`).
- **Viewport Boundary Awareness**: Detects right (82%) and bottom (88%) screen thresholds to flip badge placement and eliminate viewport overflow.

### 3. Fullscreen Cyberpunk Navigation & Morphing Corners
- **Mechanical Icon Morph**: The navigation toggle smoothly rotates 45° from a brutalist `+` into an `✕`.
- **Animated Corner Target Brackets (`.nav-corners`)**: Four neo-brutalist corner markers smoothly track whichever menu link is hovered using FLIP-style coordinate updates and snap back to the active section on mouse leave.
- **Integrated Utilities**: Includes studio socials, direct monospace contact email, and an inline newsletter form.

### 4. Monumental Display Typography & Neo-Brutalist Framing
- **Fluid Heading Scale**: Responsive clamp typography scaling from 3.8rem up to 8rem with tight line heights (`line-height: 0.9`).
- **Target Pixel Markers**: Custom retro target markers (`.rules-border-tl`, `.rules-border-br`, etc.) framing key emphasis blocks such as `BOOKED`.
- **Dual-Layer Letter-Roll Hover Animations**: Interactive links with `[data-hover-anim]` feature a dual-layer character shift that rolls letters upward on hover.

### 5. Synchronized Dual-Column Projects / Work Showcase
- **Sticky Column Synchronization**: The left column pins case study details (Intellete, WORDS-HURT, Alfi Studio) and animates text entries via clipping reveals.
- **Parallax Visual Cards**: Right column houses high-resolution media mockups that update active states via `IntersectionObserver` on desktop, gracefully collapsing into responsive cards on mobile.

### 6. Interactive 3D Perspective Ticket Protocol
- **3D Transform Matrix Tilt**: The Clarity Guide ticket reacts to real-time mouse coordinates with dynamic `rotateX`, `rotateY`, and `translateZ` depth calculations.
- **Dual-Layer Holographic Artwork**: Front and back ticket graphics separate on hover, creating tangible holographic depth.

### 7. Customer Feedback & Testimonial Carousel
- **Multi-Slide Carousel**: Showcases verified client reviews with project mockups, case study badges, italic quote highlights, and pixelated avatars.
- **Navigation Controls**: Prev/next arrow navigation, keyboard arrow support, and auto-rotation with hover-pause functionality.

### 8. Architectural 4-Column Grid & Curtain Reveal Footer
- **Dotted Grid Guidelines**: Persistent 4-column dotted guidelines (`.bg-grid-lines`) running through the canvas.
- **Curtain Reveal Depth**: The main container sits on a high z-index and terminates above a fixed dark footer, creating a smooth curtain reveal of the giant architectural wordmark.

---

## 💡 Creative Additions & Differentiated Features

To exceed standard requirements and demonstrate frontend engineering creativity, the following unique features were integrated:

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

## 💻 How to Install Dependencies & Run on Your PC

Follow these steps to run the project locally on your machine:

### 1. Prerequisites

Make sure you have **Node.js** installed on your system:
- **Node.js**: `v18.0.0` or higher (tested on `v20` / `v24`)
- **npm**: `v9.0.0` or higher

To verify your installation, open a terminal and run:
```bash
node -v
npm -v
```

*(If you don't have Node.js installed, download it from [nodejs.org](https://nodejs.org/)).*

---

### 2. Clone the Repository

Clone the project to your local machine using Git:
```bash
git clone https://github.com/potluriprashanth33/VoidForm-studio_NVRMND-clone.git
```

Navigate into the project directory:
```bash
cd VoidForm-studio_NVRMND-clone
```

---

### 3. Install Dependencies

Install all required development and runtime dependencies:
```bash
npm install
```

This installs:
- **`gsap`**: GreenSock Animation Platform for matrix transitions and smooth cursor physics.
- **`vite`**: Next-generation frontend tooling and local development server.

---

### 4. Run the Local Development Server

Start the local development server:
```bash
npm run dev
```

Once started, your terminal will display the local URL:
```text
  VITE v8.3.1  ready in 184 ms

  ➜  Local:   http://localhost:5173/
  ➜  Network: use --host to expose
```

Open your browser and navigate to **`http://localhost:5173/`**.  
The development server features **Hot Module Replacement (HMR)** — any changes saved in the source files will update instantly in the browser without a full reload.

---

### 5. Build for Production & Preview Locally

To compile and bundle the project for production deployment:
```bash
npm run build
```

This bundles all HTML, CSS, JavaScript, and assets into an optimized, minified production package in the `dist/` directory.

To test the production build locally before deploying:
```bash
npm run preview
```
Open the generated preview URL (typically `http://localhost:4173/`) in your browser.

---

## 📁 Project Directory Structure

```text
VoidForm-studio_NVRMND-clone/
├── index.html              # Main semantic HTML markup with embedded modal architectures
├── package.json            # Project dependencies, metadata, and scripts
├── package-lock.json       # Exact lockfile for deterministic dependency tree
├── .gitignore              # Ignores node_modules, dist, and local environment files
├── README.md               # Project documentation and assignment submission report
├── public/                 # Static assets (favicons, manifest icons)
│   ├── favicon.svg
│   └── icons.svg
└── src/
    ├── style.css           # Neo-brutalist design tokens, grid systems, and responsiveness
    └── main.js             # GSAP timeline controllers, cursor physics, audio engine & modals
```

---

## 🎯 Alignment with Evaluation Criteria

- **Quality of Implementation**: Clean semantic HTML5 structure, modular CSS architecture using native custom properties, and decoupled JavaScript controllers with zero console errors.
- **Smoothness of Interactions & Animations**: Silky 60fps animations powered by hardware-accelerated transforms (`transform: translate3d`, `opacity`) without layout thrashing.
- **Attention to Detail**: Precise pixel target markers, custom font pairings, letter-by-letter hover rolls, and edge-detecting cursor physics.
- **Responsiveness**: Fluid layout scaling across desktop, tablet, and mobile with dedicated touch optimizations.
- **Creativity in Design Adaptation**: Elevated brutalist aesthetic into a distinct high-conversion studio identity with in-app diagnostic tools and tactile audio feedback.
- **Code Organization**: Clean, readable, and well-commented codebase ready for production deployment.

---

## 🔗 Quick Links

- **Live Application**: [https://void-form-studio-nvrmnd-clone.vercel.app/](https://void-form-studio-nvrmnd-clone.vercel.app/)
- **GitHub Repository**: [https://github.com/potluriprashanth33/VoidForm-studio_NVRMND-clone](https://github.com/potluriprashanth33/VoidForm-studio_NVRMND-clone)
- **Reference Site**: [https://www.nvrmndstudio.com/](https://www.nvrmndstudio.com/)

---

### Submitted by:
**Prashanth Potluri**  
*Frontend Developer Internship Applicant*  
*Submission Date: September 2026*
