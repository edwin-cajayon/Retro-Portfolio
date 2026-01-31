import { cn } from "@/lib/utils"
import type { ReactNode } from "react"

interface WindowProps {
  title: string
  icon?: ReactNode
  children: ReactNode
  className?: string
  variant?: "xp" | "aqua"
}

export function Window({ title, icon, children, className, variant = "xp" }: WindowProps) {
  return (
    <div
      className={cn(
        "rounded-lg overflow-hidden shadow-lg",
        variant === "xp" ? "border border-[#0054e3]" : "border border-[#888888]",
        className
      )}
    >
      {/* Title bar */}
      <div
        className={cn(
          "flex items-center gap-2 px-3 py-1.5 select-none",
          variant === "xp"
            ? "bg-gradient-to-r from-[#0a246a] via-[#0a5bc4] to-[#a6caf0]"
            : "bg-gradient-to-b from-[#d8d8d8] via-[#e8e8e8] to-[#c0c0c0] border-b border-[#888888]"
        )}
      >
        {/* Window icon */}
        {icon && (
          <div className="w-4 h-4 flex items-center justify-center shrink-0">
            {icon}
          </div>
        )}

        {/* Title */}
        <span
          className={cn(
            "text-xs font-bold flex-1 truncate",
            variant === "xp" ? "text-white drop-shadow-sm" : "text-[#222222]"
          )}
        >
          {title}
        </span>

        {/* Window controls */}
        <div className="flex items-center gap-0.5">
          {variant === "xp" ? (
            <>
              <WindowButton variant="xp" type="minimize" />
              <WindowButton variant="xp" type="maximize" />
              <WindowButton variant="xp" type="close" />
            </>
          ) : (
            <>
              <WindowButton variant="aqua" type="close" />
              <WindowButton variant="aqua" type="minimize" />
              <WindowButton variant="aqua" type="maximize" />
            </>
          )}
        </div>
      </div>

      {/* Content area - semi-transparent to show animated background */}
      <div className="bg-[#ece9d8]/95 backdrop-blur-sm p-4">{children}</div>
    </div>
  )
}

interface WindowButtonProps {
  variant: "xp" | "aqua"
  type: "minimize" | "maximize" | "close"
}

function WindowButton({ variant, type }: WindowButtonProps) {
  if (variant === "aqua") {
    const colors = {
      close: "bg-[#ff5f57]",
      minimize: "bg-[#febc2e]",
      maximize: "bg-[#28c840]",
    }
    return (
      <div
        className={cn(
          "w-3 h-3 rounded-full border border-black/20 shadow-inner",
          colors[type]
        )}
        aria-hidden="true"
      />
    )
  }

  // XP style buttons
  const content = {
    minimize: (
      <div className="w-2 h-0.5 bg-white mt-1.5" />
    ),
    maximize: (
      <div className="w-2 h-2 border border-white" />
    ),
    close: (
      <span className="text-white text-[10px] font-bold leading-none">×</span>
    ),
  }

  const bgColors = {
    minimize: "bg-gradient-to-b from-[#3a86c5] to-[#1c5a8a]",
    maximize: "bg-gradient-to-b from-[#3a86c5] to-[#1c5a8a]",
    close: "bg-gradient-to-b from-[#e08e79] to-[#c75050]",
  }

  return (
    <button
      type="button"
      className={cn(
        "w-[21px] h-[21px] rounded-sm flex items-center justify-center",
        "border border-white/40",
        bgColors[type]
      )}
      aria-label={type}
    >
      {content[type]}
    </button>
  )
}
