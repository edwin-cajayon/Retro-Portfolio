import React from "react"
import { cn } from '@/lib/utils'

interface RetroButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'classic' | 'aqua' | 'pill'
  children: React.ReactNode
}

export function RetroButton({ variant = 'classic', children, className, ...props }: RetroButtonProps) {
  const variants = {
    classic: 'retro-button',
    aqua: 'aqua-button',
    pill: cn(
      'px-6 py-2 rounded-full font-bold text-xs',
      'bg-gradient-to-b from-[#e8e8e8] via-[#d4d0c8] to-[#b8b8b8]',
      'border-2 border-t-white border-l-white border-r-[#606060] border-b-[#606060]',
      'shadow-md hover:from-white hover:via-[#f0f0f0] hover:to-[#d4d0c8]',
      'active:border-t-[#606060] active:border-l-[#606060] active:border-r-white active:border-b-white',
      'transition-all duration-100'
    ),
  }

  return (
    <button
      className={cn(
        variant === 'classic' || variant === 'aqua' ? variants[variant] : variants.pill,
        className
      )}
      {...props}
    >
      {children}
    </button>
  )
}
