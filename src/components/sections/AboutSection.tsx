import React from "react"
import { Window } from '../Window'
import { User, Calendar, MapPin, GraduationCap, Briefcase } from 'lucide-react'

const experiences = [
  {
    title: 'Senior Software Engineer',
    company: 'TechCorp Inc.',
    period: '2022 - Present',
    description: 'Leading frontend development team, architecting scalable React applications.',
  },
  {
    title: 'Software Developer',
    company: 'StartupXYZ',
    period: '2020 - 2022',
    description: 'Built full-stack features using React, Node.js, and PostgreSQL.',
  },
  {
    title: 'Junior Developer',
    company: 'WebAgency',
    period: '2019 - 2020',
    description: 'Developed responsive websites and maintained client projects.',
  },
]

export function AboutSection() {
  return (
    <section id="about" className="py-12 px-4">
      <div className="max-w-4xl mx-auto">
        <Window
          title="About Me - Personal Information"
          icon={<User className="w-4 h-4 text-white" />}
        >
          <div className="grid md:grid-cols-2 gap-6">
            {/* Personal Info Panel */}
            <div>
              <h2 className="text-sm font-bold text-[#0a246a] mb-3 flex items-center gap-2">
                <User className="w-4 h-4" />
                Personal Details
              </h2>
              <div className="inset-panel p-3 space-y-3">
                <InfoRow icon={<User className="w-3 h-3" />} label="Name" value="Edwin Cajayon JR." />
                <InfoRow icon={<Briefcase className="w-3 h-3" />} label="Role" value="Web Developer" />
                <InfoRow icon={<MapPin className="w-3 h-3" />} label="Location" value="Auckland, New Zealand" />
                <InfoRow icon={<GraduationCap className="w-3 h-3" />} label="Education" value="Dev Academy Aotearoa" />
              </div>

              <h3 className="text-xs font-bold text-[#0a246a] mt-4 mb-2">About:</h3>
              <div className="inset-panel p-3">
                <p className="text-[11px] text-[#404040] leading-relaxed">
                  I'm a Software developer building real-world projects, from iOS apps to interactive web experiences. I'm currently exploring local LLM agentic coding and generative AI/ML.
                </p>
              </div>
            </div>
          </div>
        </Window>
      </div>
    </section>
  )
}

function InfoRow({ icon, label, value }: { icon: React.ReactNode; label: string; value: string }) {
  return (
    <div className="flex items-center gap-2">
      <span className="text-[#316ac5]">{icon}</span>
      <span className="text-[11px] text-[#808080] w-20">{label}:</span>
      <span className="text-[11px] text-[#000000] font-medium">{value}</span>
    </div>
  )
}
