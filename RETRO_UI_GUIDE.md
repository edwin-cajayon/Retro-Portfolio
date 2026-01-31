# Retro UI System Integration Guide

## Overview

This retro UI system brings authentic late-1990s to early-2000s (1998-2007) desktop aesthetics to your Next.js 14+ portfolio site. It includes CRT monitor effects, a canvas starfield background, Windows XP-style gradients, and reusable window components.

## Components

### 1. CRT Overlay (`CrtOverlay.tsx`)

Creates an authentic CRT monitor effect with scanlines, noise, flicker, and screen curvature.

```tsx
import { CrtOverlay } from "@/components/retro/CrtOverlay";

// Basic usage
<CrtOverlay />

// Customized intensity
<CrtOverlay intensity={0.7} scanlines noise flicker vignette />
```

**CSS Animations Required:**

Add to your `globals.css` or `index.css`:

```css
/* Noise animation - rapid position shifting for grain effect */
@keyframes noise-move {
  0%, 100% { background-position: 0 0; }
  10% { background-position: -10px -10px; }
  20% { background-position: 10px 5px; }
  30% { background-position: -5px 15px; }
  40% { background-position: 15px -5px; }
  50% { background-position: -15px 10px; }
  60% { background-position: 5px -15px; }
  70% { background-position: -10px 10px; }
  80% { background-position: 10px -10px; }
  90% { background-position: -5px 5px; }
}

.crt-noise {
  animation: noise-move 0.15s steps(10) infinite;
}

/* Flicker animation - subtle brightness pulsing */
@keyframes flicker {
  0%, 100% { opacity: 0.02; }
  50% { opacity: 0.04; }
  25%, 75% { opacity: 0.015; }
}

.crt-flicker {
  animation: flicker 0.15s ease-in-out infinite;
}

/* Chromatic aberration subtle shift */
@keyframes chromatic-shift {
  0%, 100% { transform: translateX(0); }
  50% { transform: translateX(1px); }
}

.crt-chromatic {
  animation: chromatic-shift 0.1s steps(2) infinite;
}
```

### 2. Starfield Background (`StarfieldBackground.tsx`)

Canvas-based starfield animation inspired by Winamp visualizers and early Flash screens.

```tsx
import { StarfieldBackground, StarfieldPresets } from "@/components/retro/StarfieldBackground";

// Basic usage with defaults
<StarfieldBackground />

// Using presets
<StarfieldBackground {...StarfieldPresets.xp} />
<StarfieldBackground {...StarfieldPresets.space} />
<StarfieldBackground {...StarfieldPresets.cyber} />

// Custom configuration
<StarfieldBackground
  starCount={200}
  speed={0.4}
  direction="diagonal"
  starColor="255, 255, 255"
  backgroundGradient={["#000000", "#0a0a1a", "#1a1a2e"]}
  opacity={0.7}
/>
```

### 3. Window Component (`Window.tsx`)

Reusable Windows XP-style window with title bar, controls, and content area.

```tsx
import { 
  Window, 
  InsetPanel, 
  OutsetPanel, 
  RetroButton,
  StatusBar 
} from "@/components/retro/Window";
import { Folder, FileText } from "lucide-react";

// Basic window
<Window title="My Documents" icon={<Folder className="w-4 h-4 text-white" />}>
  <p>Window content here</p>
</Window>

// Window with controls and status bar
<Window
  title="Portfolio.exe"
  icon={<FileText className="w-4 h-4 text-white" />}
  isActive={true}
  showControls={true}
  onClose={() => console.log("Close clicked")}
  onMinimize={() => console.log("Minimize clicked")}
  onMaximize={() => console.log("Maximize clicked")}
  className="max-w-3xl mx-auto"
>
  <InsetPanel className="p-4">
    <p className="text-sm">Content in an inset panel</p>
  </InsetPanel>
  
  <div className="flex gap-2 mt-4">
    <RetroButton variant="default">Cancel</RetroButton>
    <RetroButton variant="primary">OK</RetroButton>
    <RetroButton variant="aqua">Submit</RetroButton>
  </div>
  
  <StatusBar className="mt-4">
    3 items selected | 12.4 MB
  </StatusBar>
</Window>

// Inactive window
<Window title="Inactive Window" isActive={false}>
  <p>This window has a gray title bar</p>
</Window>
```

### 4. XP Gradients (`XpGradients.ts`)

Color palette and gradient utilities for authentic Windows XP styling.

```tsx
import { 
  XpColors, 
  xpTitleBarGradient,
  xpButtonGradient,
  generateGradient,
  generateBorderStyle 
} from "@/components/retro/XpGradients";

// Access colors
const titleBarColor = XpColors.primary.dark;
const buttonFace = XpColors.chrome.background;

// Generate gradient CSS
const gradient = generateGradient(xpTitleBarGradient);
// Returns: "linear-gradient(180deg, #0a246a 0%, #0f3c8a 10%, ...)"

// Generate border styles
const raisedBorder = generateBorderStyle("raised");
const sunkenBorder = generateBorderStyle("sunken");
```

## Next.js Layout Integration

### Root Layout Setup

Create or update your `app/layout.tsx`:

```tsx
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

// Retro components
import { StarfieldBackground } from "@/components/retro/StarfieldBackground";
import { CrtOverlay } from "@/components/retro/CrtOverlay";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Retro Portfolio | Windows XP Style",
  description: "A retro-styled portfolio inspired by Windows XP aesthetics",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {/* Background layer - fixed position, z-index 0 */}
        <StarfieldBackground 
          {...StarfieldPresets.xp}
          className="z-0"
        />
        
        {/* Main content - relative position, z-index above background */}
        <main className="relative z-10 min-h-screen">
          {children}
        </main>
        
        {/* CRT overlay on top of everything - highest z-index */}
        <CrtOverlay intensity={0.5} className="z-[9999]" />
      </body>
    </html>
  );
}
```

### Page Example

Create `app/page.tsx`:

```tsx
import { Window, RetroButton, InsetPanel } from "@/components/retro/Window";
import { User, Briefcase, Mail } from "lucide-react";

export default function Home() {
  return (
    <div className="container mx-auto py-8 px-4">
      {/* Hero Window */}
      <Window
        title="Welcome - Portfolio.exe"
        icon={<User className="w-4 h-4 text-white" />}
        className="max-w-2xl mx-auto mb-8"
      >
        <div className="text-center py-8">
          <h1 className="text-2xl font-bold text-[#0a246a] mb-2">
            John Doe
          </h1>
          <p className="text-sm text-[#316ac5]">Full-Stack Developer</p>
          
          <div className="flex gap-2 justify-center mt-4">
            <RetroButton variant="aqua">Contact Me</RetroButton>
            <RetroButton variant="default">View CV</RetroButton>
          </div>
        </div>
      </Window>

      {/* Projects Window */}
      <Window
        title="My Projects"
        icon={<Briefcase className="w-4 h-4 text-white" />}
        className="max-w-3xl mx-auto"
      >
        <InsetPanel className="p-4">
          <div className="grid gap-4">
            <div className="outset-panel p-3">
              <h3 className="font-bold text-[#0a246a]">Project One</h3>
              <p className="text-xs text-[#606060] mt-1">
                A retro-styled web application
              </p>
            </div>
            
            <div className="outset-panel p-3">
              <h3 className="font-bold text-[#0a246a]">Project Two</h3>
              <p className="text-xs text-[#606060] mt-1">
                Another awesome project
              </p>
            </div>
          </div>
        </InsetPanel>
      </Window>
    </div>
  );
}
```

### Global Styles

Add to `app/globals.css`:

```css
/* Windows XP Color Variables */
:root {
  /* Primary blues */
  --xp-primary-dark: #0a246a;
  --xp-primary-main: #0a5bc4;
  --xp-primary-light: #4a9be8;
  --xp-primary-pale: #a6caf0;
  
  /* Chrome/backgrounds */
  --xp-chrome-bg: #d4d0c8;
  --xp-chrome-light: #ece9d8;
  --xp-chrome-dark: #c0c0c0;
  
  /* Borders */
  --xp-border-light: #ffffff;
  --xp-border-dark: #808080;
  --xp-border-darker: #404040;
}

/* Base styles for retro feel */
body {
  font-family: 'Tahoma', 'Verdana', 'Arial', sans-serif;
  font-size: 13px;
  line-height: 1.4;
}

/* Selection styling */
::selection {
  background: #316ac5;
  color: white;
}

/* Scrollbar styling */
::-webkit-scrollbar {
  width: 16px;
  height: 16px;
}

::-webkit-scrollbar-track {
  background: #d4d0c8;
  border: 1px solid #808080;
}

::-webkit-scrollbar-thumb {
  background: linear-gradient(90deg, #d4d0c8 0%, #f5f5f5 50%, #d4d0c8 100%);
  border: 2px solid;
  border-color: #ffffff #808080 #808080 #ffffff;
}

::-webkit-scrollbar-thumb:hover {
  background: linear-gradient(90deg, #e0e0e0 0%, #ffffff 50%, #e0e0e0 100%);
}

::-webkit-scrollbar-button {
  background: #d4d0c8;
  border: 2px solid;
  border-color: #ffffff #808080 #808080 #ffffff;
}

/* Utility classes */
.outset-panel {
  border: 2px solid;
  border-color: #ffffff #808080 #808080 #ffffff;
  box-shadow: inset -1px -1px 0 #404040, inset 1px 1px 0 #ffffff;
  background: #d4d0c8;
}

.inset-panel {
  border: 2px solid;
  border-color: #808080 #ffffff #ffffff #808080;
  box-shadow: inset 1px 1px 0 #404040;
  background: #ffffff;
}

.window-titlebar {
  background: linear-gradient(180deg, #0a246a 0%, #0f3c8a 10%, #2b71c6 50%, #4a9be8 90%, #a6caf0 100%);
}

/* CRT Animation keyframes (if not using Tailwind config) */
@keyframes noise-move {
  0%, 100% { background-position: 0 0; }
  10% { background-position: -10px -10px; }
  20% { background-position: 10px 5px; }
  30% { background-position: -5px 15px; }
  40% { background-position: 15px -5px; }
  50% { background-position: -15px 10px; }
  60% { background-position: 5px -15px; }
  70% { background-position: -10px 10px; }
  80% { background-position: 10px -10px; }
  90% { background-position: -5px 5px; }
}

@keyframes flicker {
  0%, 100% { opacity: 0.02; }
  50% { opacity: 0.04; }
  25%, 75% { opacity: 0.015; }
}

.crt-noise {
  animation: noise-move 0.15s steps(10) infinite;
}

.crt-flicker {
  animation: flicker 0.15s ease-in-out infinite;
}
```

## Performance Considerations

1. **CRT Overlay**: Uses `pointer-events: none` and low-opacity layers. Animations are GPU-accelerated with CSS transforms.

2. **Starfield**: Uses `requestAnimationFrame` with proper cleanup. Stars are simple circles (no gradients). Canvas is set to `image-rendering: pixelated` for authentic retro look.

3. **Window Components**: Pure CSS/Tailwind - no JavaScript overhead. Static gradient backgrounds are performant.

4. **Z-Index Layering**:
   - Background: `z-0`
   - Content: `z-10`
   - CRT Overlay: `z-[9999]`

## Browser Compatibility

- Chrome 90+
- Firefox 88+
- Safari 14+
- Edge 90+

All features use standard CSS and widely-supported Canvas API features.

## Customization

### Adjusting CRT Intensity

Lower intensity = more subtle effect, better readability
Higher intensity = more pronounced retro feel

```tsx
<CrtOverlay intensity={0.3} /> // Subtle
<CrtOverlay intensity={0.7} /> // Strong
```

### Custom Starfield Colors

```tsx
<StarfieldBackground
  starColor="255, 215, 0" // Gold stars
  backgroundGradient={["#1a0a2e", "#2d1b4e", "#000000"]}
/>
```

### Custom Window Styling

```tsx
<Window 
  title="Custom Window"
  className="border-4 border-purple-500 shadow-2xl"
>
  {/* Custom styled content */}
</Window>
```

## File Structure

```
app/
├── layout.tsx           # Root layout with background + overlay
├── page.tsx             # Your portfolio page
├── globals.css          # Global styles + animations
components/
└── retro/
    ├── CrtOverlay.tsx           # CRT effect component
    ├── StarfieldBackground.tsx  # Canvas starfield
    ├── Window.tsx               # Window + panel + button components
    └── XpGradients.ts           # Color palette utilities
```

## Dependencies

Required:
- Next.js 14+
- React 18+
- Tailwind CSS 3.4+
- lucide-react (for window icons)

Optional:
- tailwindcss-animate (for accordion/keyframe animations)

## Summary

This retro UI system provides:

✅ Authentic Windows XP aesthetics (gradients, borders, colors)
✅ CRT monitor effects (scanlines, noise, flicker)
✅ Canvas starfield background (Winamp/Flash style)
✅ Reusable window components with controls
✅ Production-ready, performant code
✅ Full TypeScript support
✅ Next.js 14+ App Router compatible

All components are self-contained, well-documented, and ready for immediate use in your portfolio site.
