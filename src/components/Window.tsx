import React from "react"
import { cn } from '@/lib/utils'
import { Minus, Square, X } from 'lucide-react'

interface WindowProps {
  title: string
  children: React.ReactNode
  className?: string
  id?: string
  icon?: React.ReactNode
}

export function Window({ title, children, className, id, icon }: WindowProps) {
  return (
    <div
      id={id}
      className={cn(
        'bg-[#ece9d8] border-2 border-t-white border-l-white border-r-[#808080] border-b-[#808080] shadow-lg',
        className
      )}
    >
      {/* Title bar */}
      <div className="window-titlebar px-2 py-1 flex items-center justify-between select-none">
        <div className="flex items-center gap-2">
          {icon && <span className="w-4 h-4 flex items-center justify-center">{icon}</span>}
          <span className="text-white font-bold text-sm drop-shadow-sm">{title}</span>
        </div>
        <div className="flex items-center gap-0.5">
          <WindowButton icon={<Minus className="w-3 h-3" />} />
          <WindowButton icon={<Square className="w-2.5 h-2.5" />} />
          <WindowButton icon={<X className="w-3 h-3" />} isClose />
        </div>
      </div>
      {/* Content area */}
      <div className="p-4">{children}</div>
    </div>
  )
}

function WindowButton({ icon, isClose }: { icon: React.ReactNode; isClose?: boolean }) {
  return (
    <button
      type="button"
      className={cn(
        'w-[21px] h-[21px] flex items-center justify-center text-black',
        'bg-gradient-to-b from-[#f5f5f5] via-[#d4d0c8] to-[#c0c0c0]',
        'border border-t-white border-l-white border-r-[#404040] border-b-[#404040]',
        'hover:from-white hover:via-[#e8e8e8] hover:to-[#d4d0c8]',
        'active:border-t-[#404040] active:border-l-[#404040] active:border-r-white active:border-b-white',
        isClose && 'hover:bg-gradient-to-b hover:from-[#ff6b6b] hover:via-[#ee5a5a] hover:to-[#cc4444] hover:text-white'
      )}
    >
      {icon}
    </button>
  )
}
