import { RetroBackground } from "@/components/retro/RetroBackground"
import { Header } from "@/components/retro/Header"
import { StatusBar } from "@/components/retro/StatusBar"
import { HeroSection } from "@/components/retro/sections/HeroSection"
import { AboutSection } from "@/components/retro/sections/AboutSection"
import { ProjectsSection } from "@/components/retro/sections/ProjectsSection"
import { ContactSection } from "@/components/retro/sections/ContactSection"

export default function HomePage() {
  return (
    <>
      {/* Animated retro background - midnight theme for high contrast */}
      <RetroBackground theme="midnight" pattern="dots" speed={0.8} />

      {/* Header with OS-style tabs */}
      <Header />

      {/* Main content */}
      <main className="relative z-10 min-h-screen pb-12">
        <HeroSection />
        <AboutSection />
        <ProjectsSection />
        <ContactSection />
      </main>

      {/* OS-style taskbar footer */}
      <StatusBar />
    </>
  )
}
