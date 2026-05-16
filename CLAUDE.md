# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a **React + TypeScript + Vite** personal portfolio website for Sridinesh. It features a dark-themed, Apple-inspired design with smooth animations and a bento grid layout.

## Development Commands

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server with Vite (opens browser automatically) |
| `npm run build` | Type-check with TypeScript and build for production |
| `npm run preview` | Preview the production build locally |
| `npm run lint` | Run type checking and build validation |

## Architecture

### Tech Stack
- **Framework**: React 19 with React Router v7 (BrowserRouter)
- **Build Tool**: Vite 6 with Rollup
- **Styling**: Tailwind CSS 3 + CSS custom properties
- **Animation**: Framer Motion (primary) + GSAP
- **UI Components**: shadcn/ui-inspired structure (components.json configured)
- **Icons**: Lucide React
- **Notifications**: Sonner (toasts)
- **Email**: EmailJS for contact form

### Project Structure

```
src/
├── main.tsx              # Entry point with BrowserRouter setup
├── App.tsx               # Main page with BentoGrid layout
├── index.css             # Global styles, CSS variables, custom scrollbar
├── components/           # React components (flat structure)
│   ├── Header.tsx        # Fixed floating navigation with scroll spy
│   ├── HeroCard.tsx      # About section with profile info
│   ├── Skills.tsx        # Tech skills display
│   ├── ProjectList.tsx   # Projects grid
│   ├── TimelineSection.tsx # Experience & education timeline
│   ├── ContactForm.tsx   # EmailJS contact form
│   ├── SignatureCursor.tsx # Custom cursor component
│   ├── ScrollToTopButton.tsx
│   ├── ResumeButton.tsx
│   ├── ContactLinks.tsx
│   └── BlogCard.tsx
├── data/
│   ├── projects.ts       # Project data with Project[] interface
│   └── timeline.ts       # Timeline data with TimelineItem[] interface
├── lib/
│   └── utils.ts          # `cn()` utility for tailwind-merge + clsx
└── pages/
    └── Blog.tsx          # /blog route page
```

### Routing
- `/` → App component (main portfolio with all sections)
- `/blog` → Blog page

### Key Design Patterns

**Color System (Apple-inspired Industrial Monochrome)**
- `obsidian` (#0d0d0e) - Primary background
- `obsidian-light` (#161618) - Secondary surfaces
- `alabaster` (#f5f5f7) - Primary text
- `pearl` (#a1a1a6) - Secondary text
- `charcoal` (#2c2c2e) - Borders

**Component Patterns**
- Components use Tailwind CSS for styling with the custom color palette
- `cn()` utility merges Tailwind classes (from `src/lib/utils.ts`)
- Framer Motion `layoutId` for shared element transitions (Header navigation pills)
- `glass-panel` utility class for frosted glass effects

**Data Flow**
- Static data lives in `src/data/` with typed interfaces
- Projects and timeline items are arrays exported from data files
- No external state management - uses React hooks only

### Build Configuration

**Vite Config (`vite.config.ts`)**
- Path alias `@` → `./src`
- Gzip and Brotli compression plugins
- Code splitting into vendor chunks (react, framer-motion, gsap, lucide)
- Terser minification with console/debugger removal in production

**TypeScript**
- Project references: `tsconfig.app.json` + `tsconfig.node.json`
- Path mapping: `@/*` → `src/*`

**ESLint**
- Uses `typescript-eslint` with strict type-checked rules
- React Hooks and React Refresh plugins
- Allows explicit `any` and implicit `any` for development flexibility

### Performance Considerations
- GPU-accelerated animations with `will-change` and `transform: translateZ(0)`
- Reduced motion support via `prefers-reduced-motion` media query
- Manual code splitting for vendor libraries
- Image assets in `/public/assets/` (webp format preferred)

### Styling Conventions
- Tailwind classes preferred for component styling
- Global animations and base styles in `index.css`
- Custom scrollbar styling (minimal dark theme)
- `scroll-behavior: smooth` and `scroll-padding-top` for anchor navigation
