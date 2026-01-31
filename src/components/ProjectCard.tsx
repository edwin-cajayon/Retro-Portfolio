import { cn } from '@/lib/utils'
import { RetroButton } from './RetroButton'
import { ExternalLink, Github } from 'lucide-react'

interface ProjectCardProps {
  title: string
  description: string
  image: string
  tags: string[]
  liveUrl?: string
  githubUrl?: string
  className?: string
}

export function ProjectCard({
  title,
  description,
  image,
  tags,
  liveUrl,
  githubUrl,
  className,
}: ProjectCardProps) {
  return (
    <div
      className={cn(
        'bg-[#ece9d8] border-2 border-t-white border-l-white border-r-[#808080] border-b-[#808080]',
        'p-1',
        className
      )}
    >
      {/* Image frame */}
      <div className="inset-panel p-1 mb-3">
        <img
          src={image || "/placeholder.svg"}
          alt={title}
          className="w-full h-40 object-cover"
        />
      </div>

      {/* Content */}
      <div className="px-2 pb-2">
        <h3 className="font-bold text-sm text-[#0a246a] mb-1">{title}</h3>
        <p className="text-xs text-[#404040] mb-3 leading-relaxed">{description}</p>

        {/* Tags */}
        <div className="flex flex-wrap gap-1 mb-3">
          {tags.map((tag) => (
            <span
              key={tag}
              className="text-[10px] px-2 py-0.5 bg-[#c0c0c0] border border-t-white border-l-white border-r-[#808080] border-b-[#808080] text-[#000080]"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Buttons */}
        <div className="flex gap-2">
          {liveUrl && (
            <RetroButton variant="classic" className="flex items-center gap-1 text-[10px]">
              <ExternalLink className="w-3 h-3" />
              View Demo
            </RetroButton>
          )}
          {githubUrl && (
            <RetroButton variant="classic" className="flex items-center gap-1 text-[10px]">
              <Github className="w-3 h-3" />
              Source
            </RetroButton>
          )}
        </div>
      </div>
    </div>
  )
}
