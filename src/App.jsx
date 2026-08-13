import React, { useState } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Projects from './components/Projects'
import GithubStats from './components/GithubStats'
import Experience from './components/Experience'
import Education from './components/Education'
import Certificates from './components/Certificates'
import Contact from './components/Contact'
import Footer from './components/Footer'
import CustomCursor from './components/CustomCursor'
import CommandPalette from './components/CommandPalette'
import AiBot from './components/AiBot'
import ArchitectureModal from './components/ArchitectureModal'
import MatrixTerminal from './components/MatrixTerminal'

import './styles/components/navbar.css'
import './styles/components/hero.css'
import './styles/components/about.css'
import './styles/components/skills.css'
import './styles/components/projects.css'
import './styles/components/github-stats.css'
import './styles/components/experience.css'
import './styles/components/education.css'
import './styles/components/certificates.css'
import './styles/components/contact.css'
import './styles/components/footer.css'
import './styles/components/custom-cursor.css'

export default function App() {
  const [cmdPaletteOpen, setCmdPaletteOpen] = useState(false)
  const [aiBotOpen, setAiBotOpen] = useState(false)
  const [selectedArchProject, setSelectedArchProject] = useState(null)
  const [matrixOpen, setMatrixOpen] = useState(false)

  return (
    <div className="app-root">
      <div className="grain-overlay"></div>
      <CustomCursor />
      
      <Navbar onOpenCommandPalette={() => setCmdPaletteOpen(true)} />
      <Hero />
      <About />
      <Skills />
      <Projects onSelectArch={(proj) => setSelectedArchProject(proj)} />
      <GithubStats />
      <Experience />
      <Education />
      <Certificates />
      <Contact />
      <Footer />

      <CommandPalette 
        isOpen={cmdPaletteOpen} 
        onClose={() => setCmdPaletteOpen(false)} 
        onOpenAi={() => setAiBotOpen(true)}
        onOpenMatrix={() => setMatrixOpen(true)}
      />

      <AiBot 
        isOpen={aiBotOpen} 
        onToggle={() => setAiBotOpen(!aiBotOpen)}
      />

      <ArchitectureModal 
        project={selectedArchProject} 
        onClose={() => setSelectedArchProject(null)} 
      />

      <MatrixTerminal 
        isOpen={matrixOpen} 
        onClose={() => setMatrixOpen(false)} 
      />
    </div>
  )
}


