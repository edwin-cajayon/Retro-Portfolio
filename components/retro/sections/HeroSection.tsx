import { Window } from "../Window"

export function HeroSection() {
  return (
    <section id="home" className="py-12">
      <div className="max-w-4xl mx-auto px-4">
        <Window title="Welcome - Edwin Cajayon" icon={<UserIcon />}>
          <div className="flex flex-col md:flex-row items-center gap-8">
            {/* Avatar with retro frame */}
            <div className="shrink-0">
              <div className="w-40 h-40 rounded-lg overflow-hidden border-4 border-[#d4d0c8] shadow-lg outset-panel">
                <img
                  src="/313e7d092611f0c58251064957ca6b4c.png"
                  alt="Edwin Cajayon"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            {/* Hero content */}
            <div className="flex-1 text-center md:text-left">
              <h1 className="text-3xl font-bold text-[#0a246a] mb-2">
                Edwin Cajayon
              </h1>
              <h2 className="text-xl text-[#3a6ea5] mb-4">
                Web Developer
              </h2>
              <p className="text-[#1a1a1a] mb-6 leading-relaxed">
                I'm a Software developer building real-world projects, from iOS apps to interactive web experiences. I'm currently exploring local LLM agentic coding and generative AI/ML, picking up new technologies quickly and tackling challenges hands-on.
              </p>

              {/* Action buttons */}
              <div className="flex flex-wrap gap-3 justify-center md:justify-start">
                <a href="#projects" className="aqua-button inline-flex items-center gap-2">
                  <FolderIcon className="w-4 h-4" />
                  View My Work
                </a>
                <a href="#contact" className="xp-button inline-flex items-center gap-2">
                  <MailIcon className="w-4 h-4" />
                  Contact Me
                </a>
              </div>
            </div>
          </div>

          {/* Visitor counter - retro! */}
          <div className="mt-8 pt-4 border-t border-[#aca899] flex items-center justify-center gap-2">
            <span className="text-xs text-[#5a5a5a]">You are visitor #</span>
            <div className="flex">
              {["0", "0", "1", "3", "3", "7"].map((digit, i) => (
                <div
                  key={i}
                  className="w-5 h-6 bg-black text-[#00ff00] font-mono text-sm flex items-center justify-center border border-[#333]"
                >
                  {digit}
                </div>
              ))}
            </div>
            <span className="text-xs text-[#5a5a5a]">since 2003</span>
          </div>
        </Window>
      </div>
    </section>
  )
}

function UserIcon() {
  return (
    <svg className="w-4 h-4 text-white" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
    </svg>
  )
}

function FolderIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M10 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V8c0-1.1-.9-2-2-2h-8l-2-2z" />
    </svg>
  )
}

function MailIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
    </svg>
  )
}
