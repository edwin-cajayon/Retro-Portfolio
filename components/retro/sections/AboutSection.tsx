import { Window } from "../Window"

export function AboutSection() {
  return (
    <section id="about" className="py-8">
      <div className="max-w-4xl mx-auto px-4">
        <Window title="About Me - Edwin Cajayon JR." icon={<NotepadIcon />} variant="xp">
          <div className="bg-white inset-panel p-4">
            {/* Notepad-style content */}
            <div className="font-mono text-sm text-[#1a1a1a] space-y-4">
              <p className="leading-relaxed">
                {`/* ================================================== */`}<br />
                {`/*                    ABOUT ME                        */`}<br />
                {`/* ================================================== */`}
              </p>

              <p className="leading-relaxed">
                I'm a Software developer building real-world projects, from iOS apps to interactive web experiences. I'm currently exploring local LLM agentic coding and generative AI/ML, picking up new technologies quickly and tackling challenges hands-on.
              </p>

              <p className="leading-relaxed">
                Driven, curious, and eager to contribute, I bring fresh perspectives to innovative teams.
              </p>

              <div className="border-t border-[#aca899] my-4" />

              <h3 className="font-bold text-[#0a246a]">{`> Education:`}</h3>

              <div className="pl-4">
                <p>Dev Academy Aotearoa</p>
                <p className="text-[#5a5a5a]">Software Development Bootcamp</p>
              </div>

              <p className="mt-4 text-[#5a5a5a]">
                {`// Last modified: January 2026`}<br />
                {`// Lines: 28 | Words: 156`}
              </p>
            </div>
          </div>
        </Window>
      </div>
    </section>
  )
}

function ExperienceItem({
  title,
  company,
  period,
  description,
}: {
  title: string
  company: string
  period: string
  description: string
}) {
  return (
    <div className="border-l-2 border-[#3a6ea5] pl-3">
      <p className="font-bold">{title}</p>
      <p className="text-[#3a6ea5]">{company} | {period}</p>
      <p className="text-[#5a5a5a]">{description}</p>
    </div>
  )
}

function NotepadIcon() {
  return (
    <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <rect x="4" y="2" width="16" height="20" rx="1" fill="#ffffc8" stroke="#c0c000" strokeWidth="1" />
      <line x1="7" y1="6" x2="17" y2="6" stroke="#c0c0c0" strokeWidth="1" />
      <line x1="7" y1="10" x2="17" y2="10" stroke="#c0c0c0" strokeWidth="1" />
      <line x1="7" y1="14" x2="17" y2="14" stroke="#c0c0c0" strokeWidth="1" />
      <line x1="7" y1="18" x2="13" y2="18" stroke="#c0c0c0" strokeWidth="1" />
    </svg>
  )
}
