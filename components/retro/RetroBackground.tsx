"use client";

/**
 * Retro Background Component (1998-2006 Era)
 * 
 * An authentic late-90s to early-2000s background system combining:
 * - Animated gradient field (XP/Aqua wallpaper style)
 * - Subtle pattern overlay (dot grid/diagonal lines)
 * - CRT scanline and noise texture
 * 
 * Motion Characteristics:
 * - Long animation loops (30-60s)
 * - Steps-based timing (not smooth easing)
 * - Slight jitter for analog feel
 * - Low color depth simulation
 * 
 * Technical:
 * - Pure CSS, no heavy libraries
 * - GPU-accelerated transforms
 * - pointer-events: none for all overlays
 * - Fixed positioning, z-index layering
 */

import { cn } from "@/lib/utils";

interface RetroBackgroundProps {
  /**
   * Color theme preset
   */
  theme?: "xp" | "aqua" | "midnight" | "lavender";
  /**
   * Enable pattern overlay
   */
  pattern?: "dots" | "grid" | "diagonal" | "none";
  /**
   * Enable CRT effects
   */
  crt?: boolean;
  /**
   * Animation speed multiplier (0.5 = half speed, 2 = double)
   */
  speed?: number;
  /**
   * Additional CSS classes
   */
  className?: string;
}

export function RetroBackground({
  theme = "xp",
  pattern = "dots",
  crt = true,
  speed = 1,
  className,
}: RetroBackgroundProps) {
  // Theme color configurations
  const themes = {
    xp: {
      // Windows XP Bliss-inspired blues
      gradients: [
        { color: "#0a246a", position: "0%", size: "120%", x: "20%", y: "20%" },
        { color: "#3a6ea5", position: "35%", size: "100%", x: "80%", y: "60%" },
        { color: "#5eb3d4", position: "65%", size: "140%", x: "40%", y: "80%" },
        { color: "#87ceeb", position: "100%", size: "80%", x: "60%", y: "30%" },
      ],
      bg: "#1a3a5c",
      accent: "#a6caf0",
    },
    aqua: {
      // Mac OS X Aqua-inspired teals and blues
      gradients: [
        { color: "#0066cc", position: "0%", size: "100%", x: "30%", y: "30%" },
        { color: "#0099cc", position: "40%", size: "120%", x: "70%", y: "50%" },
        { color: "#66ccff", position: "70%", size: "90%", x: "50%", y: "70%" },
        { color: "#cce5ff", position: "100%", size: "110%", x: "25%", y: "40%" },
      ],
      bg: "#003366",
      accent: "#99ddff",
    },
    midnight: {
      // Dark GeoCities/Winamp visualization style
      gradients: [
        { color: "#0a0a1a", position: "0%", size: "130%", x: "50%", y: "50%" },
        { color: "#1a1a3e", position: "50%", size: "100%", x: "20%", y: "80%" },
        { color: "#2d1b4e", position: "100%", size: "120%", x: "80%", y: "20%" },
      ],
      bg: "#050510",
      accent: "#4a306d",
    },
    lavender: {
      // Soft 2000s pastel aesthetic
      gradients: [
        { color: "#e6e6fa", position: "0%", size: "110%", x: "40%", y: "30%" },
        { color: "#d8bfd8", position: "45%", size: "130%", x: "60%", y: "60%" },
        { color: "#c8a2c8", position: "75%", size: "90%", x: "30%", y: "70%" },
        { color: "#dda0dd", position: "100%", size: "100%", x: "70%", y: "40%" },
      ],
      bg: "#b8a9c9",
      accent: "#f0e6ff",
    },
  };

  const currentTheme = themes[theme];

  // Generate gradient layers
  const generateGradientLayers = () => {
    return currentTheme.gradients.map((grad, index) => ({
      id: index,
      style: {
        background: `radial-gradient(ellipse ${grad.size} ${grad.size} at ${grad.x} ${grad.y}, ${grad.color} 0%, transparent 70%)`,
        animation: `gradient-drift-${index} ${45 / speed}s steps(60) infinite`,
        opacity: 0.7 - index * 0.1,
      },
    }));
  };

  // Pattern styles
  const patternStyles = {
    dots: {
      backgroundImage: `radial-gradient(circle, rgba(255,255,255,0.15) 1px, transparent 1px)`,
      backgroundSize: "24px 24px",
      animation: `pattern-scroll ${20 / speed}s linear infinite`,
    },
    grid: {
      backgroundImage: `
        linear-gradient(rgba(255,255,255,0.08) 1px, transparent 1px),
        linear-gradient(90deg, rgba(255,255,255,0.08) 1px, transparent 1px)
      `,
      backgroundSize: "32px 32px",
      animation: `pattern-scroll ${25 / speed}s linear infinite`,
    },
    diagonal: {
      backgroundImage: `repeating-linear-gradient(
        45deg,
        transparent,
        transparent 8px,
        rgba(255,255,255,0.06) 8px,
        rgba(255,255,255,0.06) 16px
      )`,
      animation: `diagonal-scroll ${30 / speed}s linear infinite`,
    },
  };

  return (
    <div
      className={cn(
        "fixed inset-0 pointer-events-none z-0 overflow-hidden",
        className
      )}
      aria-hidden="true"
    >
      {/* BASE LAYER: Animated Gradient Field */}
      <div
        className="absolute inset-0 retro-gradient-base"
        style={{
          backgroundColor: currentTheme.bg,
        }}
      >
        {/* Multiple overlapping radial gradients for depth */}
        {generateGradientLayers().map((layer) => (
          <div
            key={layer.id}
            className="absolute inset-0"
            style={layer.style}
          />
        ))}

        {/* Gradient banding simulation overlay */}
        <div
          className="absolute inset-0 opacity-[0.03] mix-blend-overlay"
          style={{
            background: `repeating-linear-gradient(
              180deg,
              rgba(0,0,0,0.5),
              rgba(0,0,0,0.5) 2px,
              transparent 2px,
              transparent 4px
            )`,
          }}
        />
      </div>

      {/* MIDDLE LAYER: Pattern Overlay */}
      {pattern !== "none" && (
        <div
          className="absolute inset-0 retro-pattern"
          style={patternStyles[pattern]}
        />
      )}

      {/* Additional subtle vignette for depth */}
      <div
        className="absolute inset-0"
        style={{
          background: `radial-gradient(ellipse at 50% 50%, transparent 30%, rgba(0,0,0,0.15) 100%)`,
        }}
      />

      {/* TOP LAYER: CRT Effects */}
      {crt && (
        <>
          {/* Scanlines */}
          <div
            className="absolute inset-0 retro-scanlines"
            style={{
              background: `repeating-linear-gradient(
                0deg,
                transparent,
                transparent 2px,
                rgba(0,0,0,0.04) 2px,
                rgba(0,0,0,0.04) 4px
              )`,
            }}
          />

          {/* Noise texture */}
          <div
            className="absolute inset-0 retro-noise opacity-[0.02]"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 512 512' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
            }}
          />

          {/* Subtle flicker overlay */}
          <div
            className="absolute inset-0 retro-flicker"
            style={{
              backgroundColor: "rgba(0,0,0,0.02)",
            }}
          />

          {/* Screen edge darkening (vignette) */}
          <div
            className="absolute inset-0"
            style={{
              boxShadow: `inset 0 0 150px rgba(0,0,0,0.2)`,
            }}
          />
        </>
      )}

      {/* Keyframe animations injected via style tag */}
      <style>{`
        /* Gradient drift animations - slow, analog feel with steps() */
        @keyframes gradient-drift-0 {
          0% { transform: translate(0, 0) scale(1); }
          25% { transform: translate(5%, 3%) scale(1.05); }
          50% { transform: translate(-2%, 8%) scale(0.98); }
          75% { transform: translate(8%, -5%) scale(1.02); }
          100% { transform: translate(0, 0) scale(1); }
        }

        @keyframes gradient-drift-1 {
          0% { transform: translate(0, 0) scale(1); }
          33% { transform: translate(-5%, 5%) scale(1.03); }
          66% { transform: translate(4%, -8%) scale(0.97); }
          100% { transform: translate(0, 0) scale(1); }
        }

        @keyframes gradient-drift-2 {
          0% { transform: translate(0, 0) scale(1); }
          50% { transform: translate(6%, -4%) scale(1.04); }
          100% { transform: translate(0, 0) scale(1); }
        }

        @keyframes gradient-drift-3 {
          0% { transform: translate(0, 0) scale(1); }
          40% { transform: translate(-6%, 6%) scale(0.96); }
          80% { transform: translate(3%, -3%) scale(1.02); }
          100% { transform: translate(0, 0) scale(1); }
        }

        /* Pattern scroll - slow linear for grid/dots */
        @keyframes pattern-scroll {
          0% { background-position: 0 0; }
          100% { background-position: 24px 24px; }
        }

        @keyframes diagonal-scroll {
          0% { background-position: 0 0; }
          100% { background-position: 16px 16px; }
        }

        /* Noise animation - rapid jitter for analog static feel */
        @keyframes noise-jitter {
          0%, 100% { background-position: 0 0; }
          10% { background-position: -5px -3px; }
          20% { background-position: 3px 5px; }
          30% { background-position: -4px 2px; }
          40% { background-position: 2px -4px; }
          50% { background-position: -3px 4px; }
          60% { background-position: 4px -2px; }
          70% { background-position: -2px -5px; }
          80% { background-position: 5px 3px; }
          90% { background-position: -5px 1px; }
        }

        .retro-noise {
          animation: noise-jitter 0.15s steps(5) infinite;
        }

        /* Flicker animation - subtle brightness variation */
        @keyframes subtle-flicker {
          0%, 100% { opacity: 0.015; }
          50% { opacity: 0.025; }
          25%, 75% { opacity: 0.02; }
        }

        .retro-flicker {
          animation: subtle-flicker 0.2s steps(3) infinite;
        }

        /* Apply will-change for GPU acceleration */
        .retro-gradient-base > div {
          will-change: transform;
        }
      `}</style>
    </div>
  );
}

/**
 * Static Background Variant
 * For users who prefer no motion or for reduced-motion preferences
 */
export function StaticRetroBackground({
  theme = "xp",
  className,
}: Omit<RetroBackgroundProps, "pattern" | "crt" | "speed">) {
  const themes = {
    xp: "linear-gradient(180deg, #1a3a5c 0%, #2d5a8c 50%, #3a6ea5 100%)",
    aqua: "linear-gradient(180deg, #003366 0%, #0066cc 50%, #0099cc 100%)",
    midnight: "linear-gradient(180deg, #050510 0%, #1a1a3e 50%, #2d1b4e 100%)",
    lavender: "linear-gradient(180deg, #b8a9c9 0%, #d8bfd8 50%, #e6e6fa 100%)",
  };

  return (
    <div
      className={cn(
        "fixed inset-0 pointer-events-none z-0",
        className
      )}
      style={{
        background: themes[theme],
      }}
      aria-hidden="true"
    />
  );
}
