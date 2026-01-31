"use client"

import React from "react"

import { useEffect, useState } from "react"

export function StatusBar() {
  const [time, setTime] = useState<string>("")

  useEffect(() => {
    const updateTime = () => {
      const now = new Date()
      setTime(
        now.toLocaleTimeString("en-US", {
          hour: "numeric",
          minute: "2-digit",
          hour12: true,
        })
      )
    }
    updateTime()
    const interval = setInterval(updateTime, 1000)
    return () => clearInterval(interval)
  }, [])

  return (
    <footer className="fixed bottom-0 left-0 right-0 z-50">
      <div className="bg-gradient-to-b from-[#3168d5] via-[#4a8ae2] to-[#2352b2] border-t-2 border-[#6699ff] h-8">
        <div className="max-w-6xl mx-auto h-full flex items-center justify-between px-2">
          {/* Start button */}
          <button
            type="button"
            className="flex items-center gap-1.5 bg-gradient-to-b from-[#3c9a3c] to-[#2d7e2d] hover:from-[#4cb04c] hover:to-[#3d8e3d] px-3 py-0.5 rounded-sm border border-[#2d7e2d] shadow-sm"
          >
            <WindowsIcon className="w-4 h-4" />
            <span className="text-white text-xs font-bold italic">start</span>
          </button>

          {/* Quick launch */}
          <div className="flex-1 flex items-center gap-1 ml-2">
            <div className="h-5 w-px bg-[#1e4faa] mx-1" aria-hidden="true" />
            <TaskbarButton icon={<FolderIcon />} label="My Projects" />
            <TaskbarButton icon={<MailIcon />} label="Contact" />
            <TaskbarButton icon={<CodeIcon />} label="Skills" />
          </div>

          {/* System tray */}
          <div className="flex items-center gap-2 bg-gradient-to-b from-[#0f8ced] to-[#0b71c0] px-2 py-0.5 rounded-sm border-l border-[#1e4faa]">
            <TrayIcon icon={<VolumeIcon />} />
            <TrayIcon icon={<WifiIcon />} />
            <div className="h-4 w-px bg-[#1e4faa]" aria-hidden="true" />
            <span className="text-white text-xs font-medium min-w-[60px]">{time}</span>
          </div>
        </div>
      </div>
    </footer>
  )
}

function TaskbarButton({ icon, label }: { icon: React.ReactNode; label: string }) {
  return (
    <button
      type="button"
      className="flex items-center gap-1 px-2 py-0.5 hover:bg-[#4a8ae2]/50 rounded-sm transition-colors"
      title={label}
    >
      {icon}
      <span className="text-white text-xs hidden sm:inline">{label}</span>
    </button>
  )
}

function TrayIcon({ icon }: { icon: React.ReactNode }) {
  return (
    <div className="text-white opacity-90 hover:opacity-100 cursor-pointer">
      {icon}
    </div>
  )
}

function WindowsIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M3 5.5L10 4.5V11.5H3V5.5Z" fill="#F25022" />
      <path d="M11 4.3L21 3V11.5H11V4.3Z" fill="#7FBA00" />
      <path d="M3 12.5H10V19.5L3 18.5V12.5Z" fill="#00A4EF" />
      <path d="M11 12.5H21V21L11 19.7V12.5Z" fill="#FFB900" />
    </svg>
  )
}

function FolderIcon() {
  return (
    <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M3 7C3 5.89543 3.89543 5 5 5H9L11 7H19C20.1046 7 21 7.89543 21 9V17C21 18.1046 20.1046 19 19 19H5C3.89543 19 3 18.1046 3 17V7Z" fill="#FFC107" stroke="#E6A000" strokeWidth="1" />
    </svg>
  )
}

function MailIcon() {
  return (
    <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <rect x="3" y="5" width="18" height="14" rx="2" fill="#4FC3F7" stroke="#0288D1" strokeWidth="1" />
      <path d="M3 7L12 13L21 7" stroke="#0288D1" strokeWidth="1.5" />
    </svg>
  )
}

function CodeIcon() {
  return (
    <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" aria-hidden="true">
      <path d="M16 18L22 12L16 6" />
      <path d="M8 6L2 12L8 18" />
    </svg>
  )
}

function VolumeIcon() {
  return (
    <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-1.02-3.29-2.5-4.03v8.05c1.48-.73 2.5-2.25 2.5-4.02zM14 3.23v2.06c2.89.86 5 3.54 5 6.71s-2.11 5.85-5 6.71v2.06c4.01-.91 7-4.49 7-8.77s-2.99-7.86-7-8.77z" />
    </svg>
  )
}

function WifiIcon() {
  return (
    <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M1 9l2 2c4.97-4.97 13.03-4.97 18 0l2-2C16.93 2.93 7.08 2.93 1 9zm8 8l3 3 3-3c-1.65-1.66-4.34-1.66-6 0zm-4-4l2 2c2.76-2.76 7.24-2.76 10 0l2-2C15.14 9.14 8.87 9.14 5 13z" />
    </svg>
  )
}
