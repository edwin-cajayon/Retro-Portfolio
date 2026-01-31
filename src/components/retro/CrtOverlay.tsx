"use client";

/**
 * CRT Overlay Component
 * 
 * Creates an authentic late-90s/early-2000s CRT monitor effect with:
 * - Horizontal scanlines (CSS repeating gradient)
 * - Animated noise/grain texture
 * - Subtle screen flicker
 * - Screen curvature vignette
 * 
 * The opacity values are tuned to be barely visible (0.02-0.08) so they add
 * atmosphere without reducing text readability. The animations are slow and
 * subtle to avoid distraction while maintaining that retro CRT feel.
 * 
 * Usage: Place this component at the top level of your layout, outside main content.
 */

import { cn } from "@/lib/utils";

interface CrtOverlayProps {
  /**
   * Intensity of the effect (0-1). Default 0.5 for balanced visibility.
   * Higher values increase scanline opacity and noise strength.
   */
  intensity?: number;
  
  /**
   * Whether to show scanlines. Default true.
   */
  scanlines?: boolean;
  
  /**
   * Whether to show noise texture. Default true.
   */
  noise?: boolean;
  
  /**
   * Whether to show flicker effect. Default true.
   */
  flicker?: boolean;
  
  /**
   * Whether to show screen curvature vignette. Default true.
   */
  vignette?: boolean;
  
  /**
   * Additional CSS classes.
   */
  className?: string;
}

export function CrtOverlay({
  intensity = 0.5,
  scanlines = true,
  noise = true,
  flicker = true,
  vignette = true,
  className,
}: CrtOverlayProps) {
  // Calculate opacity based on intensity (tuned for readability)
  const scanlineOpacity = 0.03 * intensity;
  const noiseOpacity = 0.04 * intensity;
  const flickerOpacity = 0.02 * intensity;
  const vignetteOpacity = 0.15 * intensity;

  return (
    <div
      className={cn(
        "fixed inset-0 pointer-events-none z-[9999] overflow-hidden",
        className
      )}
      aria-hidden="true"
    >
      {/* Scanlines - horizontal lines every 2px */}
      {scanlines && (
        <div
          className="absolute inset-0"
          style={{
            background: `repeating-linear-gradient(
              0deg,
              transparent,
              transparent 2px,
              rgba(0, 0, 0, ${scanlineOpacity}) 2px,
              rgba(0, 0, 0, ${scanlineOpacity}) 4px
            )`,
            backgroundSize: "100% 4px",
          }}
        />
      )}

      {/* Noise texture - animated grain effect */}
      {noise && (
        <div
          className="absolute inset-0 crt-noise"
          style={{
            opacity: noiseOpacity,
            // Using multiple background positions for animation
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
            backgroundRepeat: "repeat",
            backgroundSize: "200px 200px",
          }}
        />
      )}

      {/* Flicker overlay - subtle brightness variation */}
      {flicker && (
        <div
          className="absolute inset-0 crt-flicker"
          style={{
            backgroundColor: `rgba(0, 0, 0, ${flickerOpacity})`,
          }}
        />
      )}

      {/* Screen curvature vignette - darkened edges */}
      {vignette && (
        <div
          className="absolute inset-0"
          style={{
            background: `radial-gradient(
              ellipse at center,
              transparent 50%,
              rgba(0, 0, 0, ${vignetteOpacity}) 100%
            )`,
            boxShadow: `inset 0 0 100px rgba(0, 0, 0, ${vignetteOpacity * 0.5})`,
          }}
        />
      )}

      {/* Optional: slight RGB chromatic aberration at edges */}
      <div
        className="absolute inset-0 crt-chromatic"
        style={{
          opacity: 0.02 * intensity,
          background: `
            linear-gradient(90deg, 
              rgba(255, 0, 0, 0.1) 0%, 
              transparent 10%, 
              transparent 90%, 
              rgba(0, 255, 255, 0.1) 100%
            )
          `,
        }}
      />
    </div>
  );
}

/**
 * CSS animations for the CRT overlay effects.
 * Add these to your global CSS file (e.g., globals.css or index.css).
 * 
 * The noise animation shifts the background position rapidly to simulate
 * TV static/grain movement. The 0.1s timing creates subtle, fast movement.
 * 
 * The flicker animation varies opacity to simulate CRT refresh rate flicker.
 * 0.15s timing creates a barely perceptible 6-7Hz flicker typical of old monitors.
 */
export const crtOverlayStyles = `
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
`;
