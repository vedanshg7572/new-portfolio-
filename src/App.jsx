import React, { useState } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Experience from './components/Experience'
import Education from './components/Education'
import Certificates from './components/Certificates'
import Contact from './components/Contact'
import Footer from './components/Footer'
import VideoModal from './components/VideoModal'
import CustomCursor from './components/CustomCursor'
import { personalInfo } from './data/portfolio-data'

import './styles/components/navbar.css'
import './styles/components/hero.css'
import './styles/components/video-modal.css'
import './styles/components/about.css'
import './styles/components/skills.css'
import './styles/components/projects.css'
import './styles/components/experience.css'
import './styles/components/education.css'
import './styles/components/certificates.css'
import './styles/components/contact.css'
import './styles/components/footer.css'
import './styles/components/custom-cursor.css'

export default function App() {
  const [modalOpen, setModalOpen] = useState(false)

  return (
    <div className="app-root">
      <div className="grain-overlay"></div>
      <CustomCursor />
      
      <Navbar />
      <Hero onPlayReel={() => setModalOpen(true)} />
      <About />
      <Skills />
      <Projects />
      <Experience />
      <Education />
      <Certificates />
      <Contact />
      <Footer />

      <VideoModal 
        isOpen={modalOpen} 
        onClose={() => setModalOpen(false)} 
        videoSrc={personalInfo.heroVideo}
      />
    </div>
  )
}

