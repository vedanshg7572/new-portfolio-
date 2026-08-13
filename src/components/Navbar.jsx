import React, { useState, useEffect } from 'react'
import { navLinks, personalInfo } from '../data/portfolio-data'
import { soundFx } from '../utils/audio'
import '../styles/components/navbar.css'

export default function Navbar({ onOpenCommandPalette }) {
  const [scrolled, setScrolled] = useState(false)
  const [mobileActive, setMobileActive] = useState(false)
  const [soundActive, setSoundActive] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true)
      } else {
        setScrolled(false)
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const toggleSound = () => {
    const active = soundFx.toggle()
    setSoundActive(active)
  }

  const handleLinkClick = (e, href) => {
    soundFx.playClick()
    e.preventDefault()
    setMobileActive(false)
    const target = document.querySelector(href)
    if (target) {
      const navbarHeight = document.querySelector('.navbar').offsetHeight
      const targetPosition = target.getBoundingClientRect().top + window.scrollY - navbarHeight
      window.scrollTo({
        top: targetPosition,
        behavior: 'smooth'
      })
    }
  }

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="container">
        <a href="#home" className="nav-logo" onClick={(e) => handleLinkClick(e, '#home')}>
          {personalInfo.name.split(' ')[0]}<span>.</span>
        </a>

        <button 
          className={`nav-toggle ${mobileActive ? 'active' : ''}`} 
          onClick={() => setMobileActive(!mobileActive)}
          aria-label="Toggle Navigation"
        >
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </button>

        <div className={`nav-links-wrapper ${mobileActive ? 'active' : ''}`}>
          <ul className="nav-links">
            {navLinks.map((link, idx) => (
              <li key={idx}>
                <a 
                  href={link.href} 
                  className="nav-link" 
                  onClick={(e) => handleLinkClick(e, link.href)}
                  onMouseEnter={() => soundFx.playHover()}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>

          <button 
            className="btn btn-outline" 
            onClick={toggleSound}
            style={{ padding: '6px 10px', fontSize: '0.85rem', cursor: 'pointer' }}
            title={soundActive ? 'Mute Sound FX' : 'Enable Cyber Sound FX'}
          >
            {soundActive ? '🔊' : '🔇'}
          </button>

          <button 
            className="btn btn-outline" 
            onClick={() => { setMobileActive(false); if (onOpenCommandPalette) onOpenCommandPalette(); }}
            style={{ padding: '6px 14px', fontSize: '0.8rem', display: 'flex', alignItems: 'center', gap: '6px', cursor: 'pointer' }}
            title="Command Palette (Ctrl + K)"
          >
            <span>⌨️</span> <span style={{ opacity: 0.8 }}>Ctrl+K</span>
          </button>

          <a 
            href={personalInfo.resumePdf} 
            download="Vedansh_Gupta_Resume.pdf" 
            className="btn btn-primary"
            style={{ padding: '8px 20px', fontSize: '0.85rem' }}
          >
            Download CV
          </a>
        </div>
      </div>
    </nav>
  )
}
