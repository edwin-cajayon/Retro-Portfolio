import { Window } from '../Window'
import { RetroButton } from '../RetroButton'
import { Code, Download, Mail } from 'lucide-react'

export function HeroSection() {
  return (
    <section id="home" className="min-h-[calc(100vh-48px-32px)] flex items-center justify-center py-12 px-4">
      <div className="max-w-4xl mx-auto">
        <Window
          title="Welcome - Edwin Cajayon's Portfolio"
          icon={<Code className="w-4 h-4 text-white" />}
          className="max-w-3xl mx-auto"
        >
          <div className="flex flex-col md:flex-row gap-6 items-center">
            {/* Avatar frame */}
            <div className="outset-panel p-2 shrink-0">
              <div className="inset-panel p-1">
                <div className="w-32 h-32 overflow-hidden">
                  <img
                    src="/313e7d092611f0c58251064957ca6b4c.png"
                    alt="Edwin Cajayon"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>

            {/* Info */}
            <div className="flex-1 text-center md:text-left">
              <h1 className="text-2xl font-bold text-[#0a246a] mb-1">Edwin Cajayon</h1>
              <p className="text-sm text-[#316ac5] font-medium mb-3">Web Developer</p>
              <div className="inset-panel p-3 mb-4">
                <p className="text-xs text-[#404040] leading-relaxed">
                  I'm a Software developer building real-world projects, from iOS apps to interactive web experiences. I'm currently exploring local LLM agentic coding and generative AI/ML.
                </p>
              </div>

              {/* Action buttons */}
              <div className="flex flex-wrap gap-2 justify-center md:justify-start">
                <a href="#contact">
                  <RetroButton variant="aqua" className="flex items-center gap-1.5">
                    <Mail className="w-3.5 h-3.5" />
                    Contact Me
                  </RetroButton>
                </a>
                <RetroButton variant="classic" className="flex items-center gap-1.5">
                  <Download className="w-3.5 h-3.5" />
                  Download CV
                </RetroButton>
              </div>
            </div>
          </div>

          {/* Status message */}
          <div className="mt-4 pt-3 border-t border-[#808080]">
            <div className="flex items-center gap-2 text-[10px] text-[#808080]">
              <div className="w-2 h-2 rounded-full bg-[#00c000] animate-pulse" />
              Available for new opportunities • Last updated: January 2026
            </div>
          </div>
        </Window>
      </div>
    </section>
  )
}
