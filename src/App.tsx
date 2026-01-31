import { Header } from './components/Header'
import { StatusBar } from './components/StatusBar'
import { HeroSection } from './components/sections/HeroSection'
import { AboutSection } from './components/sections/AboutSection'
import { ProjectsSection } from './components/sections/ProjectsSection'
import { ContactSection } from './components/sections/ContactSection'

function App() {
  return (
    <div className="min-h-screen bg-[#3a6ea5]">
      {/* Desktop background pattern */}
      <div
        className="fixed inset-0 pointer-events-none opacity-10"
        style={{
          backgroundImage: `
            radial-gradient(circle at 20% 30%, #6cb3f5 0%, transparent 50%),
            radial-gradient(circle at 80% 70%, #0a246a 0%, transparent 50%)
          `,
        }}
      />

      {/* Main content */}
      <div className="relative z-10">
        <Header />

        <main className="pb-8">
          <HeroSection />
          <AboutSection />
          <ProjectsSection />
          <ContactSection />
        </main>

        <StatusBar />
      </div>
    </div>
  )
}

export default App
