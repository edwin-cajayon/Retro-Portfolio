"use client";

/**
 * Retro OS Window Component
 * 
 * A reusable Windows XP/2000-style window component with authentic styling:
 * - Gradient title bar with icon and window controls
 * - Inset border styling (3D raised effect)
 * - Fake minimize/maximize/close buttons
 * - Soft drop shadow
 * - Inner padding for content
 * 
 * Features:
 * - Active/inactive state support
 * - Window controls (fake buttons for visual authenticity)
 * - Icon support in title bar
 * - Customizable through className prop
 * - Full TypeScript support
 * 
 * @example
 * <Window
 *   title="My Documents"
 *   icon={<Folder className="w-4 h-4 text-white" />}
 *   className="max-w-2xl"
 * >
 *   <p>Your content here</p>
 * </Window>
 */

import { cn } from "@/lib/utils";
import { Minus, Square, X } from "lucide-react";

export interface WindowProps {
  /**
   * Window title displayed in the title bar
   */
  title: string;
  
  /**
   * Content to render inside the window
   */
  children: React.ReactNode;
  
  /**
   * Optional icon to display in title bar (left of title)
   */
  icon?: React.ReactNode;
  
  /**
   * Additional CSS classes for the window container
   */
  className?: string;
  
  /**
   * HTML id attribute
   */
  id?: string;
  
  /**
   * Whether the window is active (focused) or inactive
   * Inactive windows have gray title bar instead of blue
   */
  isActive?: boolean;
  
  /**
   * Whether to show window control buttons (minimize, maximize, close)
   * Default: true
   */
  showControls?: boolean;
  
  /**
   * Callback when close button is clicked
   */
  onClose?: () => void;
  
  /**
   * Callback when minimize button is clicked
   */
  onMinimize?: () => void;
  
  /**
   * Callback when maximize/restore button is clicked
   */
  onMaximize?: () => void;
}

export function Window({
  title,
  children,
  icon,
  className,
  id,
  isActive = true,
  showControls = true,
  onClose,
  onMinimize,
  onMaximize,
}: WindowProps) {
  return (
    <div
      id={id}
      className={cn(
        // Base window styling - raised 3D border effect
        "bg-[#ece9d8]",
        "border-2 border-t-white border-l-white border-r-[#808080] border-b-[#808080]",
        "shadow-[4px_4px_8px_rgba(0,0,0,0.2)]",
        className
      )}
    >
      {/* Title bar */}
      <div
        className={cn(
          "px-2 py-1.5 flex items-center justify-between select-none",
          isActive
            ? // Active window: XP blue gradient
              "bg-gradient-to-b from-[#0a246a] via-[#0f3c8a] via-[#2b71c6] via-[#4a9be8] to-[#a6caf0]"
            : // Inactive window: Gray gradient
              "bg-gradient-to-b from-[#808080] via-[#a0a0a0] to-[#c0c0c0]"
        )}
      >
        {/* Title section with icon */}
        <div className="flex items-center gap-2 min-w-0 flex-1">
          {icon && (
            <span className="w-4 h-4 flex items-center justify-center shrink-0">
              {icon}
            </span>
          )}
          <span className="text-white font-bold text-sm drop-shadow-[0_1px_1px_rgba(0,0,0,0.5)] truncate">
            {title}
          </span>
        </div>

        {/* Window control buttons */}
        {showControls && (
          <div className="flex items-center gap-0.5 shrink-0 ml-2">
            <WindowControlButton
              type="minimize"
              onClick={onMinimize}
              isActive={isActive}
            />
            <WindowControlButton
              type="maximize"
              onClick={onMaximize}
              isActive={isActive}
            />
            <WindowControlButton
              type="close"
              onClick={onClose}
              isActive={isActive}
            />
          </div>
        )}
      </div>

      {/* Content area */}
      <div className="p-4">{children}</div>
    </div>
  );
}

/**
 * Window control button (minimize, maximize, close)
 * Styled to match Windows XP Luna theme
 */
interface WindowControlButtonProps {
  type: "minimize" | "maximize" | "close";
  onClick?: () => void;
  isActive?: boolean;
}

function WindowControlButton({
  type,
  onClick,
  isActive = true,
}: WindowControlButtonProps) {
  // Icon rendering
  const Icon = () => {
    switch (type) {
      case "minimize":
        return <Minus className="w-3 h-3" strokeWidth={2.5} />;
      case "maximize":
        return <Square className="w-2.5 h-2.5" strokeWidth={2.5} />;
      case "close":
        return <X className="w-3 h-3" strokeWidth={2.5} />;
    }
  };

  // Gradient colors based on button type
  const gradientClass =
    type === "close"
      ? // Close button: red gradient (always red even when inactive)
        "bg-gradient-to-b from-[#e08e79] via-[#d97373] to-[#c75050] hover:from-[#ff8a8a] hover:via-[#ee5a5a] hover:to-[#cc4444]"
      : isActive
        ? // Active window buttons: blue gradient
          "bg-gradient-to-b from-[#3a86c5] via-[#2a76b5] to-[#1c5a8a] hover:from-[#4a96d5] hover:via-[#3a86c5] hover:to-[#2c6a9a]"
        : // Inactive window buttons: gray gradient
          "bg-gradient-to-b from-[#b0b0b0] via-[#a0a0a0] to-[#909090] hover:from-[#c0c0c0] hover:via-[#b0b0b0] hover:to-[#a0a0a0]";

  return (
    <button
      type="button"
      onClick={onClick}
      className={cn(
        "w-[21px] h-[21px] flex items-center justify-center rounded-sm",
        "text-white drop-shadow-sm",
        "border border-white/40",
        "transition-all duration-100 ease-out",
        "active:translate-y-[1px] active:scale-95",
        gradientClass
      )}
      aria-label={type}
    >
      <Icon />
    </button>
  );
}

/**
 * Inset Panel Component
 * 
 * A panel with sunken/inset styling for containing forms, text, or other content.
 * Common use case: text inputs, file lists, property panels.
 */
export interface InsetPanelProps {
  children: React.ReactNode;
  className?: string;
}

export function InsetPanel({ children, className }: InsetPanelProps) {
  return (
    <div
      className={cn(
        "bg-white",
        "border-2 border-t-[#808080] border-l-[#808080] border-r-white border-b-white",
        "shadow-[inset_1px_1px_0_#404040]",
        className
      )}
    >
      {children}
    </div>
  );
}

/**
 * Outset Panel Component
 * 
 * A panel with raised/outset styling for grouping content or creating cards.
 * Common use case: button groups, status bars, toolbar backgrounds.
 */
export interface OutsetPanelProps {
  children: React.ReactNode;
  className?: string;
}

export function OutsetPanel({ children, className }: OutsetPanelProps) {
  return (
    <div
      className={cn(
        "bg-[#d4d0c8]",
        "border-2 border-t-white border-l-white border-r-[#808080] border-b-[#808080]",
        "shadow-[inset_-1px_-1px_0_#404040,inset_1px_1px_0_#ffffff]",
        className
      )}
    >
      {children}
    </div>
  );
}

/**
 * Retro Button Component
 * 
 * Windows XP-style button with 3D border and gradient background.
 */
export interface RetroButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  className?: string;
  variant?: "default" | "primary" | "aqua";
  disabled?: boolean;
}

export function RetroButton({
  children,
  onClick,
  className,
  variant = "default",
  disabled = false,
}: RetroButtonProps) {
  const variantClasses = {
    default: cn(
      "bg-gradient-to-b from-[#f5f5f5] via-[#d4d0c8] to-[#c0c0c0]",
      "hover:from-white hover:via-[#e8e8e8] hover:to-[#d4d0c8]",
      "active:from-[#c0c0c0] active:via-[#d4d0c8] active:to-[#e8e8e8]",
      "text-black"
    ),
    primary: cn(
      "bg-gradient-to-b from-[#3a86c5] via-[#2a76b5] to-[#1c5a8a]",
      "hover:from-[#4a96d5] hover:via-[#3a86c5] hover:to-[#2c6a9a]",
      "active:from-[#1c5a8a] active:via-[#2a76b5] active:to-[#3a86c5]",
      "text-white"
    ),
    aqua: cn(
      "bg-gradient-to-b from-[#6cb3f5] via-[#3a9be8] via-[#2080d8] via-[#3a9be8] to-[#6cb3f5]",
      "hover:from-[#8cc8ff] hover:via-[#5ab0f5] hover:via-[#3090e8] hover:via-[#5ab0f5] hover:to-[#8cc8ff]",
      "active:from-[#3a9be8] active:via-[#2080d8] active:via-[#1a6ac0] active:via-[#2080d8] active:to-[#3a9be8]",
      "text-white rounded-xl px-5 py-2",
      "border border-[#1a5a9e]",
      "shadow-[0_1px_0_#ffffff_inset,0_-1px_0_#1a5a9e_inset,0_2px_4px_rgba(0,0,0,0.3)]"
    ),
  };

  return (
    <button
      type="button"
      onClick={onClick}
      disabled={disabled}
      className={cn(
        // Base styles
        "px-4 py-1.5 text-xs font-semibold",
        "border-2 border-t-white border-l-white border-r-[#808080] border-b-[#808080]",
        "shadow-[inset_1px_1px_0_#ffffff,inset_-1px_-1px_0_#404040]",
        "transition-all duration-100 ease-out",
        "active:border-t-[#808080] active:border-l-[#808080] active:border-r-white active:border-b-white",
        "active:shadow-[inset_-1px_-1px_0_#ffffff,inset_1px_1px_0_#404040]",
        "active:translate-y-[1px]",
        "disabled:opacity-50 disabled:cursor-not-allowed disabled:active:translate-y-0",
        variantClasses[variant],
        className
      )}
    >
      {children}
    </button>
  );
}

/**
 * Status Bar Component
 * 
 * Windows XP-style status bar at bottom of window.
 */
export interface StatusBarProps {
  children: React.ReactNode;
  className?: string;
}

export function StatusBar({ children, className }: StatusBarProps) {
  return (
    <div
      className={cn(
        "bg-[#d4d0c8]",
        "border-t-2 border-t-[#808080]",
        "shadow-[inset_0_1px_0_#ffffff]",
        "px-2 py-1 text-[11px] text-[#404040]",
        className
      )}
    >
      {children}
    </div>
  );
}
