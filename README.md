# 🎨 Sketch Portfolio

> **An immersive, hand-drawn 3D interactive portfolio experience built with React 19, Three.js, React Three Fiber, and GSAP.**

🌐 **Live Demo:** https://portfolioo-xi-lime.vercel.app

---

[![React 19](https://img.shields.io/badge/React-19.2.7-61DAFB?style=for-the-badge&logo=react&logoColor=black)](https://react.dev/)
[![Three.js](https://img.shields.io/badge/Three.js-0.185-black?style=for-the-badge&logo=three.js&logoColor=white)](https://threejs.org/)
[![React Three Fiber](https://img.shields.io/badge/R3F-9.6-000000?style=for-the-badge&logo=react&logoColor=61DAFB)](https://docs.pmnd.rs/react-three-fiber)
[![GSAP](https://img.shields.io/badge/GSAP-3.15-88CE02?style=for-the-badge&logo=greensock&logoColor=black)](https://gsap.com/)
[![Vite](https://img.shields.io/badge/Vite-8.1-646CFF?style=for-the-badge&logo=vite&logoColor=white)](https://vitejs.dev/)

---

## ✨ Overview

**Sketch Portfolio** is a unique, sketch-book themed 3D interactive web app. It blends hand-drawn aesthetics with real-time 3D web graphics, spatial ambient audio, interactive room exploration, and smooth paper-style transitions.

---

## 🚀 Key Features

- 🎭 **3D Hand-Drawn Interactive World**: Explore 3D sketch rooms and environments rendered via React Three Fiber and Three.js.
- ⚡ **Adaptive Performance Engine**: Dynamic hardware tiering that auto-scales DPR, shadows, antialiasing, and texture resolution based on the user's GPU & CPU capabilities.
- 📜 **Handwritten & GSAP Animations**: Smooth camera movements, custom paper transitions, and animated stroke-drawing effects via Vara.js and GSAP.
- 🎧 **Spatial Audio System**: Custom audio manager providing room ambience, sound effects, and volume controls.
- 🗺️ **Navigation & Teleportation**: Quick-access map UI and deep-link routing for seamless room switching.
- 📱 **Responsive & Mobile Ready**: Tailored layouts, touch controls, and optimized asset preloading across desktop, tablet, and mobile browsers.

---

## 🛠️ Tech Stack

| Category | Technologies |
| :--- | :--- |
| **Core Framework** | React 19, React Router 7, Vite |
| **3D & Canvas** | Three.js, React Three Fiber (`@react-three/fiber`), Drei (`@react-three/drei`), `@react-three/postprocessing` |
| **Animation & Motion** | GSAP (`@gsap/react`), Vara.js, Custom CSS/SCSS keyframes |
| **Styling** | Sass (SCSS), Modern CSS Custom Properties |
| **State & Context** | React Context API (`AudioManager`, `PerformanceContext`, `SceneContext`, `AchievementsContext`) |
| **Icons & Assets** | Lucide React, Custom Hand-Drawn WebP/SVG Textures |

---


## 📂 Project Structure

```text
sketch-portfolio/
├── dist/                  # Production build output
├── public/                # Static assets, fonts, sounds, textures & models
├── src/
│   ├── assets/            # Project assets & branding
│   ├── components/
│   │   ├── canvas/        # 3D R3F Experience, lighting & 3D room objects
│   │   ├── dom/           # DOM overlays, preloader & paper transitions
│   │   └── ui/            # Navigation controls, achievements & HUD overlays
│   ├── config/            # Texture preload manifests & device rules
│   ├── context/           # Audio, performance, scene & achievements state
│   ├── hooks/             # Custom React hooks (meta tags, resize, interaction)
│   ├── sections/          # 2D/3D Sections (Hero, About, Projects, Skills, Contact)
│   ├── styles/            # SCSS stylesheets & visual tokens
│   ├── utils/             # Sound manager & math helper functions
│   ├── App.jsx            # Main Application entry & Canvas context provider
│   └── index.css          # Global styling tokens & custom utility classes
├── package.json           # Dependencies and build scripts
└── README.md              # Project documentation
```
🧰 Tech Stack
Core Framework
Technology	Role
React 19	UI component system, state management, routing
Vite 8	Build tool & dev server (ultra-fast HMR)
React Router DOM 7	Deep-link URL routing (/about, /gallery, etc.)
3D Engine (The Heart of it All)
Technology	Role
Three.js	Low-level WebGL 3D rendering library
React Three Fiber (r3f)	React bindings for Three.js — write 3D scenes as JSX components
@react-three/drei	Helper components for r3f (textures, preloading, cameras, etc.)
@react-three/postprocessing	Post-processing effects (bloom, vignette, depth of field, etc.)
Animations
Technology	Role
GSAP 3 + @gsap/react	Timeline animations — door open/close, camera fly-throughs, transitions
Shaders (GPU-Level Effects)
Technology	Role
Custom GLSL Shaders	Paint-reveal effect, texture transitions — written directly in WebGL shader language
Styling
Technology	Role
SCSS / Sass	Component-level styles with variables and nesting
Lucide React	Icon library for UI icons
Typography
Technology	Role
Vara.js	Handwriting SVG animation library for the signature/title text
Content / CMS (optional, configured off)
Technology	Role
Sanity CMS	Headless CMS for managing projects, studio content, awards — currently set to static data mode
Performance Tooling
Technology	Role
r3f-perf	FPS / GPU performance monitor overlay
oxlint	Fast JavaScript linter (Rust-based)
🏗️ Architecture Overview

App.jsx
├── PerformanceProvider       → Detects device tier (LOW/MID/HIGH) for adaptive quality
├── AchievementsProvider      → Tracks user interactions as "achievements"
└── AppContent
    ├── AudioProvider         → Manages ambient audio & interaction sounds
    ├── SceneProvider         → Global scene state (which room, teleportation, overlays)
    │
    ├── <Canvas>              → Full-screen Three.js WebGL canvas
    │   └── Experience.jsx
    │       ├── EntranceDoors     → The double doors you click to enter
    │       ├── EmptyCorridor     → The visible corridor during entrance
    │       ├── SignSystem        → Directional signs near entrance
    │       ├── InfiniteCorridorManager → Tiling infinite corridor with doors to rooms
    │       └── TeleportRoom      → Renders room when teleporting via the map
    │
    ├── NavigationUI          → Hamburger menu, mini-map, audio toggle, back button
    ├── GlobalOverlay         → 2D overlay panels (studio monitor, awards, case studies)
    ├── PaperTransition       → Page-turn paper animation between rooms
    ├── ScreenReaderOverlay   → Accessibility layer
    └── Preloader             → Loading screen shown while 3D shaders compile
🎮 How the 3D Experience Works
1. Preloading
On startup, the app preloads all textures (walls, doors, decorations) into GPU memory using Three.js's TextureLoader before anything renders. This prevents stuttering.

2. Entrance Flow
User sees an animated preloader
3D doors appear in front of the camera
Click → GSAP animates doors swinging open + camera flies through them
SceneContext.markEntered() flips the state
3. Infinite Corridor
The corridor isn't one long mesh — it's a tile system (InfiniteCorridorManager). Corridor segments are created/destroyed as the camera moves forward, giving an illusion of infinite length. The camera moves on scroll (parallax also responds to mouse).

4. Rooms
4 interactive rooms in src/components/canvas/rooms/:

About — personal info, timeline
Gallery — project showcases
Studio — content creation (videos, articles)
Contact — contact form
5. Teleportation (Map Navigation)
Clicking the mini-map teleports you between rooms with a paper transition animation (like a book page turning). The teleport state machine in SceneContext:

'closing' → 'teleporting' → 'opening' → null
6. Custom Shaders
The paint-reveal hover effect on project cards uses custom GLSL shaders (RevealMaterial.jsx, PaintRevealMaterial.jsx). When you hover, a second "painted" texture is revealed using a GPU-computed mask.

7. Performance Tiers
At startup, the app detects device capabilities:

Mobile / weak CPU / low RAM → LOW tier (no shadows, simpler lighting, no hover textures)
Mid-range → MID tier
Powerful desktop → HIGH tier (full shadows, postprocessing, all textures)
📁 Project Structure

src/
├── components/
│   ├── canvas/           # All 3D (Three.js / r3f) components
│   │   ├── corridor/     # Infinite corridor system
│   │   ├── entrance/     # Entry doors + signs
│   │   ├── rooms/        # About, Gallery, Studio, Contact rooms
│   │   ├── shaders/      # Custom GLSL shader materials
│   │   └── Experience.jsx
│   ├── dom/              # Preloader, paper transition
│   └── ui/               # Nav UI, overlay, screen reader
├── context/              # React Contexts (Scene, Audio, Performance, Achievements)
├── hooks/                # Custom React hooks (camera, parallax, Sanity data)
├── config/               # Texture preload lists, constants
├── styles/               # Global SCSS styles
├── data/                 # Static data (fallback content)
└── utils/                # Audio manager, helpers

---

## 📄 License

Distributed under the MIT License. See `LICENSE` for more information.

---

<p align="center">
  Crafted with Yash❤️ and ☕ using React 19 & Three.js
</p>
