"use client"

import { useState } from "react"
import { cn } from "@/lib/utils"

const navItems = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
]

export function Header() {
  const [activeTab, setActiveTab] = useState("Home")

  return (
    <header className="sticky top-0 z-50">
      {/* Browser chrome bar */}
      <div className="bg-gradient-to-b from-[#f5f3e8] to-[#d4d0c8] border-b border-[#aca899] px-2 py-1">
        <div className="max-w-6xl mx-auto flex items-center gap-2">
          {/* Address bar */}
          <div className="flex items-center gap-1.5 flex-1">
            <span className="text-xs text-[#1a1a1a] font-semibold">Address:</span>
            <div className="flex-1 flex items-center gap-1 bg-white border border-[#716f64] px-2 py-0.5 rounded-sm">
              <GlobeIcon className="w-3 h-3 text-[#3a6ea5]" />
              <span className="text-xs text-[#1a1a1a]">https://johndeveloper.dev/</span>
            </div>
            <button 
              type="button"
              className="xp-button text-xs px-3"
            >
              Go
            </button>
          </div>
        </div>
      </div>

      {/* Tab navigation */}
      <div className="bg-[#ece9d8] border-b border-[#aca899]">
        <nav className="max-w-6xl mx-auto">
          <ul className="flex items-end pl-2 pt-1" role="tablist">
            {navItems.map((item) => (
              <li key={item.label}>
                <a
                  href={item.href}
                  role="tab"
                  aria-selected={activeTab === item.label}
                  onClick={() => setActiveTab(item.label)}
                  className={cn(
                    "relative block px-4 py-1.5 text-xs font-semibold transition-colors",
                    "border border-b-0 rounded-t-md",
                    activeTab === item.label
                      ? "bg-white border-[#aca899] text-[#1a1a1a] z-10 -mb-px"
                      : "bg-[#d4d0c8] border-[#aca899] text-[#5a5a5a] hover:bg-[#e8e4d9]"
                  )}
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  )
}

function GlobeIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
      aria-hidden="true"
    >
      <circle cx="12" cy="12" r="10" strokeWidth="2" />
      <path d="M2 12h20M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" strokeWidth="2" />
    </svg>
  )
}
