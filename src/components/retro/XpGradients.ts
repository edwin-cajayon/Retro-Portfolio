"use client";

/**
 * Windows XP Gradient System
 * 
 * Authentic color palette and gradient utilities matching the Windows XP 
 * Luna theme (2001-2007) and classic 9x/2000 button styles.
 * 
 * Key characteristics of XP-era gradients:
 * - Vertical linear gradients (top-to-bottom)
 * - Multiple color stops for 3D depth effect
 * - Highlights at the top (simulating light source)
 * - Shadows at the bottom (depth)
 * - Saturated blues for active elements
 * - Gray/beige neutrals for chrome/backgrounds
 */

// =============================================================================
// COLOR PALETTE
// =============================================================================

export const XpColors = {
  // Primary blues (title bars, active elements)
  primary: {
    dark: "#0a246a",     // Deep navy (top of title bar)
    main: "#0a5bc4",     // Royal blue (middle)
    light: "#4a9be8",    // Sky blue (highlight)
    pale: "#a6caf0",     // Pale blue (bottom fade)
  },
  
  // Secondary accent
  secondary: {
    dark: "#316ac5",     // Medium blue
    main: "#3a6ea5",     // Steel blue
    light: "#6cb3f5",    // Light aqua highlight
  },
  
  // Window chrome (backgrounds, panels)
  chrome: {
    background: "#d4d0c8",  // Classic XP beige-gray
    lighter: "#ece9d8",     // Light panel background
    darker: "#c0c0c0",      // Button face gray
  },
  
  // Borders (inset/outset 3D effect)
  border: {
    highlight: "#ffffff",   // Top/left of raised elements
    light: "#d4d0c8",       // Secondary highlight
    dark: "#808080",        // Bottom/right shadow
    darker: "#404040",      // Deep shadow (inset)
  },
  
  // Semantic colors
  semantic: {
    success: "#00c000",     // Classic Windows green
    warning: "#ffcc00",     // Amber
    error: "#c00000",       // Brick red (close button)
    errorLight: "#e08e79",  // Red gradient start
    errorDark: "#c75050",   // Red gradient end
  },
} as const;

// =============================================================================
// GRADIENT DEFINITIONS
// =============================================================================

/**
 * Authentic Windows XP title bar gradient
 * 
 * This is the signature "bliss" blue gradient seen on active windows.
 * It transitions from deep navy at top through royal blue to pale blue.
 * 
 * CSS: linear-gradient(180deg, #0a246a 0%, #0f3c8a 10%, #2b71c6 50%, #4a9be8 90%, #a6caf0 100%)
 */
export const xpTitleBarGradient = {
  direction: "180deg" as const,
  stops: [
    { color: XpColors.primary.dark, position: "0%" },
    { color: "#0f3c8a", position: "10%" },
    { color: "#2b71c6", position: "50%" },
    { color: XpColors.primary.light, position: "90%" },
    { color: XpColors.primary.pale, position: "100%" },
  ],
};

/**
 * Inactive window title bar (gray)
 * 
 * Used when window loses focus. Flat gray with subtle gradient.
 */
export const xpInactiveTitleBarGradient = {
  direction: "180deg" as const,
  stops: [
    { color: "#808080", position: "0%" },
    { color: "#a0a0a0", position: "50%" },
    { color: XpColors.chrome.darker, position: "100%" },
  ],
};

/**
 * Classic raised button gradient
 * 
 * The standard button face with 3D effect.
 * Light at top (highlight), darker at bottom (shadow).
 */
export const xpButtonGradient = {
  direction: "180deg" as const,
  stops: [
    { color: "#f5f5f5", position: "0%" },
    { color: XpColors.chrome.background, position: "50%" },
    { color: XpColors.chrome.darker, position: "100%" },
  ],
};

/**
 * Aqua-style glossy button (Mac OS X inspired, XP-era popular)
 * 
 * Shiny button with strong highlight at top and reflection effect.
 */
export const xpAquaButtonGradient = {
  direction: "180deg" as const,
  stops: [
    { color: "#6cb3f5", position: "0%" },
    { color: "#3a9be8", position: "25%" },
    { color: "#2080d8", position: "50%" },
    { color: "#3a9be8", position: "75%" },
    { color: "#6cb3f5", position: "100%" },
  ],
};

/**
 * Window background panel
 * 
 * Subtle off-white to beige gradient for window interiors.
 */
export const xpPanelGradient = {
  direction: "180deg" as const,
  stops: [
    { color: XpColors.chrome.lighter, position: "0%" },
    { color: "#e8e5d4", position: "100%" },
  ],
};

/**
 * Scrollbar/track gradient
 * 
 * Horizontal gradient for scrollbar thumbs.
 */
export const xpScrollbarGradient = {
  direction: "90deg" as const,
  stops: [
    { color: XpColors.chrome.background, position: "0%" },
    { color: "#f5f5f5", position: "50%" },
    { color: XpColors.chrome.background, position: "100%" },
  ],
};

// =============================================================================
// UTILITY FUNCTIONS
// =============================================================================

/**
 * Generate a CSS linear-gradient string from gradient definition
 */
export function generateGradient(
  gradient: { direction: string; stops: { color: string; position: string }[] }
): string {
  const stops = gradient.stops.map(s => `${s.color} ${s.position}`).join(", ");
  return `linear-gradient(${gradient.direction}, ${stops})`;
}

/**
 * Generate border style for inset/outset 3D effect
 * 
 * @param type "raised" for outset (buttons), "sunken" for inset (panels)
 */
export function generateBorderStyle(type: "raised" | "sunken" | "window"): string {
  switch (type) {
    case "raised":
      return `
        border: 2px solid;
        border-color: ${XpColors.border.highlight} ${XpColors.border.dark} ${XpColors.border.dark} ${XpColors.border.highlight};
        box-shadow: inset 1px 1px 0 ${XpColors.border.highlight}, inset -1px -1px 0 ${XpColors.border.darker};
      `;
    case "sunken":
      return `
        border: 2px solid;
        border-color: ${XpColors.border.dark} ${XpColors.border.highlight} ${XpColors.border.highlight} ${XpColors.border.dark};
        box-shadow: inset 1px 1px 0 ${XpColors.border.darker}, inset -1px -1px 0 ${XpColors.border.highlight};
      `;
    case "window":
      return `
        border: 2px solid;
        border-color: ${XpColors.border.highlight} ${XpColors.border.dark} ${XpColors.border.dark} ${XpColors.border.highlight};
        box-shadow: inset 1px 1px 0 ${XpColors.border.highlight}, inset -1px -1px 0 ${XpColors.border.darker}, 4px 4px 8px rgba(0, 0, 0, 0.2);
      `;
  }
}

// =============================================================================
// TAILWIND UTILITY CLASSES (for reference)
// =============================================================================

/**
 * Recommended Tailwind classes for XP-style components:
 * 
 * Title Bar:
 *   bg-gradient-to-b from-[#0a246a] via-[#0f3c8a] via-[#2b71c6] via-[#4a9be8] to-[#a6caf0]
 * 
 * Button:
 *   bg-gradient-to-b from-[#f5f5f5] via-[#d4d0c8] to-[#c0c0c0]
 *   border-2 border-t-white border-l-white border-r-[#808080] border-b-[#808080]
 *   shadow-[inset_1px_1px_0_#ffffff,inset_-1px_-1px_0_#404040]
 * 
 * Aqua Button:
 *   bg-gradient-to-b from-[#6cb3f5] via-[#3a9be8] via-[#2080d8] via-[#3a9be8] to-[#6cb3f5]
 *   border border-[#1a5a9e] rounded-xl
 *   shadow-[0_1px_0_#ffffff_inset,0_-1px_0_#1a5a9e_inset,0_2px_4px_rgba(0,0,0,0.3)]
 * 
 * Window Panel:
 *   bg-[#ece9d8] 
 *   border-2 border-t-white border-l-white border-r-[#808080] border-b-[#808080]
 *   shadow-[inset_-1px_-1px_0_#404040,inset_1px_1px_0_#ffffff]
 * 
 * Inset Panel (forms, text areas):
 *   bg-white
 *   border-2 border-t-[#808080] border-l-[#808080] border-r-white border-b-white
 *   shadow-[inset_1px_1px_0_#404040]
 */
