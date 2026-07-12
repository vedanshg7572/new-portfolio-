import React, { useState, useEffect } from 'react'
import { navLinks, personalInfo } from '../data/portfolio-data'
import '../styles/components/navbar.css'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileActive, setMobileActive] = useState(false)

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

  const handleLinkClick = (e, href) => {
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
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
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
