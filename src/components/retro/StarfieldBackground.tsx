"use client";

/**
 * Retro Starfield Background Component
 * 
 * A lightweight HTML5 Canvas starfield animation inspired by Winamp visualizers
 * and early Flash intro screens from the late 90s/early 2000s era.
 * 
 * Features:
 * - Low-resolution stars (dots only, no gradients)
 * - Slow diagonal drift (classic screensaver feel)
 * - Auto-resizes with viewport
 * - Proper cleanup of animation frame loops
 * - Memory-efficient (reuses star objects)
 * 
 * Technical Details:
 * - Star count scales with screen size (1 star per ~8000 pixels)
 * - Stars move at 0.1-0.4 pixels per frame for slow, dreamy motion
 * - 60fps animation using requestAnimationFrame
 * - Canvas positioned behind content with z-index layering
 * 
 * @example
 * // In your layout or page:
 * <StarfieldBackground starCount={150} speed={0.3} direction="diagonal" />
 * <main className="relative z-10">Your content here</main>
 */

import { useEffect, useRef, useCallback } from "react";
import { cn } from "@/lib/utils";

interface StarfieldBackgroundProps {
  /**
   * Number of stars to render. Default auto-calculates based on screen size.
   * For a fixed count, provide a number (e.g., 150).
   */
  starCount?: number | "auto";
  
  /**
   * Base speed multiplier (0.1-1.0). Default 0.3 for slow, retro feel.
   */
  speed?: number;
  
  /**
   * Direction of star movement. Default "diagonal" for classic effect.
   */
  direction?: "up" | "down" | "left" | "right" | "diagonal";
  
  /**
   * Star color in rgba format. Default "100, 149, 237" (cornflower blue).
   */
  starColor?: string;
  
  /**
   * Background gradient colors [top, middle, bottom].
   * Default: ["#0a246a", "#1e4d8c", "#2b71c6"] (XP blues)
   */
  backgroundGradient?: [string, string, string];
  
  /**
   * Additional CSS classes for the container.
   */
  className?: string;
  
  /**
   * Opacity of the star layer (0-1). Default 0.6.
   */
  opacity?: number;
}

interface Star {
  x: number;
  y: number;
  size: number;
  speedX: number;
  speedY: number;
  opacity: number;
  twinkleSpeed: number;
  twinklePhase: number;
}

export function StarfieldBackground({
  starCount = "auto",
  speed = 0.3,
  direction = "diagonal",
  starColor = "100, 149, 237",
  backgroundGradient = ["#0a246a", "#1e4d8c", "#2b71c6"],
  className,
  opacity = 0.6,
}: StarfieldBackgroundProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const starsRef = useRef<Star[]>([]);
  const animationRef = useRef<number>(0);

  // Calculate star count based on screen size if "auto"
  const calculateStarCount = useCallback((width: number, height: number): number => {
    if (typeof starCount === "number") return starCount;
    // One star per ~8000 pixels for balanced density
    return Math.floor((width * height) / 8000);
  }, [starCount]);

  // Initialize or reinitialize stars
  const initStars = useCallback((canvas: HTMLCanvasElement) => {
    const count = calculateStarCount(canvas.width, canvas.height);
    const stars: Star[] = [];

    for (let i = 0; i < count; i++) {
      stars.push(createStar(canvas, direction, speed));
    }

    starsRef.current = stars;
  }, [calculateStarCount, direction, speed]);

  // Create a single star with randomized properties
  const createStar = (
    canvas: HTMLCanvasElement,
    dir: StarfieldBackgroundProps["direction"],
    spd: number
  ): Star => {
    // Base speed varies per star for depth effect
    const baseSpeed = (Math.random() * 0.3 + 0.1) * spd;
    
    let speedX = 0;
    let speedY = 0;

    // Set direction vectors
    switch (dir) {
      case "up":
        speedY = -baseSpeed;
        break;
      case "down":
        speedY = baseSpeed;
        break;
      case "left":
        speedX = -baseSpeed;
        break;
      case "right":
        speedX = baseSpeed;
        break;
      case "diagonal":
      default:
        // Classic diagonal drift (down-right)
        speedX = baseSpeed * 0.7;
        speedY = baseSpeed * 0.7;
        break;
    }

    return {
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      size: Math.random() * 2 + 0.5, // 0.5-2.5px diameter
      speedX,
      speedY,
      opacity: Math.random() * 0.5 + 0.3, // 0.3-0.8 opacity
      twinkleSpeed: Math.random() * 0.02 + 0.01,
      twinklePhase: Math.random() * Math.PI * 2,
    };
  };

  // Animation loop
  const animate = useCallback((canvas: HTMLCanvasElement, ctx: CanvasRenderingContext2D) => {
    const stars = starsRef.current;
    
    // Clear canvas completely
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // Draw each star
    stars.forEach((star) => {
      // Update twinkle phase
      star.twinklePhase += star.twinkleSpeed;
      
      // Calculate twinkling opacity
      const twinkle = Math.sin(star.twinklePhase) * 0.2 + 0.8;
      const finalOpacity = star.opacity * twinkle;

      // Draw the star
      ctx.beginPath();
      ctx.arc(star.x, star.y, star.size / 2, 0, Math.PI * 2);
      ctx.fillStyle = `rgba(${starColor}, ${finalOpacity})`;
      ctx.fill();

      // Move the star
      star.x += star.speedX;
      star.y += star.speedY;

      // Wrap around edges
      if (star.x > canvas.width) star.x = 0;
      if (star.x < 0) star.x = canvas.width;
      if (star.y > canvas.height) star.y = 0;
      if (star.y < 0) star.y = canvas.height;
    });

    // Continue animation
    animationRef.current = requestAnimationFrame(() => animate(canvas, ctx));
  }, [starColor]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    // Set canvas size to match viewport
    const resize = () => {
      const dpr = window.devicePixelRatio || 1;
      canvas.width = window.innerWidth * dpr;
      canvas.height = window.innerHeight * dpr;
      canvas.style.width = `${window.innerWidth}px`;
      canvas.style.height = `${window.innerHeight}px`;
      ctx.scale(dpr, dpr);
      initStars(canvas);
    };

    // Initial setup
    resize();
    window.addEventListener("resize", resize);

    // Start animation
    animationRef.current = requestAnimationFrame(() => animate(canvas, ctx));

    // Cleanup
    return () => {
      window.removeEventListener("resize", resize);
      cancelAnimationFrame(animationRef.current);
    };
  }, [animate, initStars]);

  return (
    <div
      className={cn(
        "fixed inset-0 pointer-events-none z-0",
        className
      )}
      aria-hidden="true"
    >
      {/* Gradient background layer */}
      <div
        className="absolute inset-0"
        style={{
          background: `linear-gradient(
            180deg,
            ${backgroundGradient[0]} 0%,
            ${backgroundGradient[1]} 50%,
            ${backgroundGradient[2]} 100%
          )`,
        }}
      />

      {/* Starfield canvas layer */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0"
        style={{
          opacity,
          imageRendering: "pixelated", // Keep stars crisp/pixelated
        }}
      />

      {/* Optional: subtle glow overlay for atmosphere */}
      <div
        className="absolute inset-0"
        style={{
          background: `radial-gradient(
            ellipse at 50% 100%,
            rgba(100, 149, 237, 0.1) 0%,
            transparent 70%
          )`,
        }}
      />
    </div>
  );
}

/**
 * Preset configurations for common retro aesthetics
 */
export const StarfieldPresets = {
  /** Classic Windows XP blue starfield */
  xp: {
    starColor: "100, 149, 237",
    backgroundGradient: ["#0a246a", "#1e4d8c", "#2b71c6"] as [string, string, string],
    speed: 0.3,
    direction: "diagonal" as const,
    opacity: 0.6,
  },
  
  /** Dark space theme (Winamp/Milkdrop style) */
  space: {
    starColor: "255, 255, 255",
    backgroundGradient: ["#000000", "#0a0a1a", "#1a1a2e"] as [string, string, string],
    speed: 0.2,
    direction: "down" as const,
    opacity: 0.8,
  },
  
  /** Purple cyber theme (early 2000s Flash aesthetic) */
  cyber: {
    starColor: "255, 100, 255",
    backgroundGradient: ["#1a0a2e", "#2d1b4e", "#4a306d"] as [string, string, string],
    speed: 0.4,
    direction: "diagonal" as const,
    opacity: 0.7,
  },
  
  /** Matrix green terminal style */
  matrix: {
    starColor: "0, 255, 65",
    backgroundGradient: ["#000000", "#001100", "#003300"] as [string, string, string],
    speed: 0.5,
    direction: "down" as const,
    opacity: 0.5,
  },
};
