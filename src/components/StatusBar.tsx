'use client';

import { useEffect, useState } from 'react'
import { Monitor, Wifi, Volume2 } from 'lucide-react'

export function StatusBar() {
  const [time, setTime] = useState(new Date())

  useEffect(() => {
    const timer = setInterval(() => setTime(new Date()), 1000)
    return () => clearInterval(timer)
  }, [])

  const formatTime = (date: Date) => {
    return date.toLocaleTimeString('en-US', {
      hour: 'numeric',
      minute: '2-digit',
      hour12: true,
    })
  }

  return (
    <footer className="fixed bottom-0 left-0 right-0 z-50">
      <div className="bg-gradient-to-b from-[#3a6ea5] via-[#2b5c8a] to-[#1a4a70] h-8 flex items-center justify-between px-2 border-t-2 border-[#6cb3f5]">
        {/* Start button area */}
        <div className="flex items-center gap-2">
          <button
            type="button"
            className="flex items-center gap-1.5 px-3 py-1 rounded-sm text-white text-xs font-bold bg-gradient-to-b from-[#3c8a3c] via-[#2d7a2d] to-[#1f5a1f] border border-t-[#6cc66c] border-l-[#6cc66c] border-r-[#1a4a1a] border-b-[#1a4a1a] hover:from-[#4ca04c] hover:via-[#3c8a3c] hover:to-[#2d7a2d] transition-all"
          >
            <div className="w-4 h-4 bg-gradient-to-br from-[#ff6b6b] via-[#4ecdc4] to-[#45b7d1] rounded-sm" />
            Start
          </button>
          <div className="h-5 w-px bg-[#1a4a70]" />
          <span className="text-white/80 text-[10px]">Portfolio.exe</span>
        </div>

        {/* System tray */}
        <div className="flex items-center gap-1 bg-gradient-to-b from-[#1a4a70] to-[#0a3a60] px-2 py-0.5 border-l border-[#6cb3f5]/30">
          <Wifi className="w-3.5 h-3.5 text-white/70" />
          <Volume2 className="w-3.5 h-3.5 text-white/70" />
          <Monitor className="w-3.5 h-3.5 text-white/70" />
          <div className="ml-2 text-white text-[11px] font-medium">{formatTime(time)}</div>
        </div>
      </div>
    </footer>
  )
}
