import { Window } from '../Window'
import { ProjectCard } from '../ProjectCard'
import { FolderOpen } from 'lucide-react'

const projects = [
  {
    title: 'Retro Portfolio',
    description: 'Personal portfolio built with Next.js and Tailwind, inspired by early-2000s UI design',
    image: '/retro_portfolio.png',
    tags: ['Next.js', 'Tailwind CSS'],
    liveUrl: 'https://example.com',
    githubUrl: 'https://github.com/edwin-cajayon',
  },
  {
    title: 'NBA Props Analytics',
    description: 'NBA prop analytics spreadsheet to help you spot trends, evaluate player performance, and make data-driven decisions',
    image: '/sportsbetting.png',
    tags: ['Node.js', 'TypeScript'],
    liveUrl: 'https://example.com',
    githubUrl: 'https://github.com/edwin-cajayon',
  },
  {
    title: 'Solana volume bot',
    description: 'CLI - based volume and wallet automation tool for solana memecoin trading',
    image: '/volume_bot.png',
    tags: ['Node.js', 'TypeScript'],
    liveUrl: 'https://example.com',
    githubUrl: 'https://github.com/edwin-cajayon',
  },
  {
    title: 'Pomodoro Timer',
    description: 'Productivity timer app with customizable work/break intervals, notifications, and session tracking',
    image: '/pomodoro.png',
    tags: ['React', 'TypeScript', 'Local Storage'],
    liveUrl: 'https://example.com',
    githubUrl: 'https://github.com/edwin-cajayon',
  },
]

export function ProjectsSection() {
  return (
    <section id="projects" className="py-12 px-4 bg-[#c0c0c0]">
      <div className="max-w-5xl mx-auto">
        <Window
          title="My Projects - Portfolio Gallery"
          icon={<FolderOpen className="w-4 h-4 text-white" />}
        >
          {/* Toolbar */}
          <div className="flex items-center gap-1 mb-4 pb-2 border-b border-[#808080]">
            <ToolbarButton label="All" active />
            <ToolbarButton label="Web Apps" />
            <ToolbarButton label="Mobile" />
            <ToolbarButton label="Open Source" />
          </div>

          {/* Projects grid */}
          <div className="grid md:grid-cols-2 gap-4">
            {projects.map((project) => (
              <ProjectCard key={project.title} {...project} />
            ))}
          </div>

          {/* Status bar */}
          <div className="mt-4 pt-2 border-t border-[#808080]">
            <p className="text-[10px] text-[#808080]">
              {projects.length} items • Click on a project to view details
            </p>
          </div>
        </Window>
      </div>
    </section>
  )
}

function ToolbarButton({ label, active }: { label: string; active?: boolean }) {
  return (
    <button
      type="button"
      className={`
        px-3 py-1 text-[10px] font-medium
        border-2 transition-all
        ${
          active
            ? 'bg-[#316ac5] text-white border-t-[#6cb3f5] border-l-[#6cb3f5] border-r-[#0a246a] border-b-[#0a246a]'
            : 'bg-gradient-to-b from-[#f5f5f5] via-[#d4d0c8] to-[#c0c0c0] text-[#000000] border-t-white border-l-white border-r-[#808080] border-b-[#808080] hover:from-white hover:via-[#e8e8e8] hover:to-[#d4d0c8]'
        }
      `}
    >
      {label}
    </button>
  )
}
