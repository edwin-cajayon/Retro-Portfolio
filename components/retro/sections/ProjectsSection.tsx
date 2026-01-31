import React from "react"
import { Window } from "../Window"

const projects = [
  {
    title: "Retro Portfolio",
    description: "Personal portfolio built with Next.js and Tailwind, inspired by early-2000s UI design",
    tags: ["Next.js", "Tailwind CSS"],
    image: "/retro_portfolio.png",
    liveUrl: "#",
    repoUrl: "#",
  },
  {
    title: "NBA Props Analytics",
    description: "NBA prop analytics spreadsheet to help you spot trends, evaluate player performance, and make data-driven decisions",
    tags: ["Node.js", "TypeScript"],
    image: "/sportsbetting.png",
    liveUrl: "#",
    repoUrl: "#",
  },
  {
    title: "Solana volume bot",
    description: "CLI - based volume and wallet automation tool for solana memecoin trading",
    tags: ["Node.js", "TypeScript"],
    image: "/volume_bot.png",
    liveUrl: "#",
    repoUrl: "#",
  },
  {
    title: "Pomodoro Timer",
    description: "Productivity timer app with customizable work/break intervals, notifications, and session tracking",
    tags: ["React", "TypeScript", "Local Storage"],
    image: "/pomodoro.png",
    liveUrl: "#",
    repoUrl: "#",
  },
]

export function ProjectsSection() {
  return (
    <section id="projects" className="py-8">
      <div className="max-w-5xl mx-auto px-4">
        <Window title="My Projects - Windows Explorer" icon={<FolderIcon />}>
          {/* Toolbar */}
          <div className="flex items-center gap-1 mb-4 pb-2 border-b border-[#aca899]">
            <ToolbarButton icon={<BackIcon />} label="Back" />
            <ToolbarButton icon={<ForwardIcon />} label="Forward" disabled />
            <div className="w-px h-5 bg-[#aca899] mx-1" />
            <ToolbarButton icon={<SearchIcon />} label="Search" />
            <ToolbarButton icon={<FoldersIcon />} label="Folders" />
            <div className="flex-1" />
            <span className="text-xs text-[#5a5a5a]">{projects.length} object(s)</span>
          </div>

          {/* Projects grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {projects.map((project) => (
              <ProjectCard key={project.title} {...project} />
            ))}
          </div>
        </Window>
      </div>
    </section>
  )
}

function ProjectCard({
  title,
  description,
  tags,
  image,
  liveUrl,
  repoUrl,
}: {
  title: string
  description: string
  tags: string[]
  image: string
  liveUrl: string
  repoUrl: string
}) {
  return (
    <div className="outset-panel rounded overflow-hidden">
      {/* Title bar */}
      <div className="bg-gradient-to-r from-[#0a246a] via-[#0a5bc4] to-[#3a6ea5] px-2 py-1 flex items-center gap-2">
        <FileIcon className="w-3 h-3 text-white" />
        <span className="text-xs text-white font-semibold truncate">{title}</span>
      </div>

      {/* Content */}
      <div className="p-3 bg-white">
        {/* Screenshot */}
        <div className="inset-panel mb-3 overflow-hidden">
          <img
            src={image || "/placeholder.svg"}
            alt={`Screenshot of ${title}`}
            className="w-full h-36 object-cover"
          />
        </div>

        {/* Description */}
        <p className="text-xs text-[#1a1a1a] mb-3 line-clamp-2">
          {description}
        </p>

        {/* Tags */}
        <div className="flex flex-wrap gap-1 mb-3">
          {tags.map((tag) => (
            <span
              key={tag}
              className="text-[10px] px-1.5 py-0.5 bg-[#e8e4d9] text-[#5a5a5a] border border-[#aca899] rounded-sm"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Actions */}
        <div className="flex gap-2">
          <a href={liveUrl} className="xp-button text-xs flex-1 text-center">
            Live Demo
          </a>
          <a href={repoUrl} className="xp-button text-xs flex-1 text-center">
            Source Code
          </a>
        </div>
      </div>
    </div>
  )
}

function ToolbarButton({
  icon,
  label,
  disabled = false,
}: {
  icon: React.ReactNode
  label: string
  disabled?: boolean
}) {
  return (
    <button
      type="button"
      disabled={disabled}
      className={`flex flex-col items-center gap-0.5 px-2 py-1 rounded hover:bg-[#d4d0c8] ${disabled ? "opacity-50 cursor-not-allowed" : ""}`}
      title={label}
    >
      {icon}
      <span className="text-[10px] text-[#1a1a1a]">{label}</span>
    </button>
  )
}

function FolderIcon() {
  return (
    <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M3 7C3 5.89543 3.89543 5 5 5H9L11 7H19C20.1046 7 21 7.89543 21 9V17C21 18.1046 20.1046 19 19 19H5C3.89543 19 3 18.1046 3 17V7Z" fill="#FFC107" stroke="#E6A000" strokeWidth="1" />
    </svg>
  )
}

function FileIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M14 2H6c-1.1 0-1.99.9-1.99 2L4 20c0 1.1.89 2 1.99 2H18c1.1 0 2-.9 2-2V8l-6-6zm2 16H8v-2h8v2zm0-4H8v-2h8v2zm-3-5V3.5L18.5 9H13z" />
    </svg>
  )
}

function BackIcon() {
  return (
    <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
      <path d="M19 12H5M12 19l-7-7 7-7" />
    </svg>
  )
}

function ForwardIcon() {
  return (
    <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
      <path d="M5 12h14M12 5l7 7-7 7" />
    </svg>
  )
}

function SearchIcon() {
  return (
    <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
      <circle cx="11" cy="11" r="8" />
      <path d="M21 21l-4.35-4.35" />
    </svg>
  )
}

function FoldersIcon() {
  return (
    <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M20 6h-8l-2-2H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V8c0-1.1-.9-2-2-2zm-6 10H6v-2h8v2zm4-4H6v-2h12v2z" />
    </svg>
  )
}
