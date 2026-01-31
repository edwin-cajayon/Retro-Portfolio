import React from "react"
import { cn } from '@/lib/utils'
import { Code, Home, User, Briefcase, Mail } from 'lucide-react'

const navItems = [
  { label: 'Home', href: '#home', icon: Home },
  { label: 'About', href: '#about', icon: User },
  { label: 'Projects', href: '#projects', icon: Briefcase },
  { label: 'Contact', href: '#contact', icon: Mail },
]

export function Header() {
  return (
    <header className="sticky top-0 z-50 bg-gradient-to-b from-[#0a246a] via-[#2b71c6] to-[#4a9be8] border-b-2 border-[#0a246a] shadow-lg">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex items-center justify-between h-12">
          {/* Logo */}
          <a href="#home" className="flex items-center gap-2 text-white hover:opacity-90 transition-opacity">
            <div className="w-8 h-8 bg-gradient-to-br from-white to-[#c0c0c0] rounded flex items-center justify-center border border-[#808080]">
              <Code className="w-5 h-5 text-[#0a246a]" />
            </div>
            <span className="font-bold text-sm drop-shadow-sm">Edwin Cajayon</span>
          </a>

          {/* Navigation tabs */}
          <nav className="flex items-center">
            {navItems.map((item, index) => (
              <NavTab key={item.label} {...item} isFirst={index === 0} />
            ))}
          </nav>
        </div>
      </div>
    </header>
  )
}

interface NavTabProps {
  label: string
  href: string
  icon: React.ComponentType<{ className?: string }>
  isFirst?: boolean
}

function NavTab({ label, href, icon: Icon, isFirst }: NavTabProps) {
  return (
    <a
      href={href}
      className={cn(
        'relative px-3 py-1.5 text-xs font-medium transition-all duration-150',
        'bg-gradient-to-b from-[#d4d0c8] via-[#ece9d8] to-[#d4d0c8]',
        'border-t-2 border-l border-r border-t-white border-l-white border-r-[#808080]',
        'text-[#0a246a] hover:from-white hover:via-[#f5f5f5] hover:to-[#e8e8e8]',
        'flex items-center gap-1.5',
        'rounded-t-sm -mb-px',
        !isFirst && '-ml-px'
      )}
    >
      <Icon className="w-3 h-3" />
      {label}
    </a>
  )
}
