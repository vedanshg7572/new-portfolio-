import React, { useState, useRef } from 'react'
import { personalInfo } from '../data/portfolio-data'
import '../styles/components/hero.css'

export default function Hero({ onPlayReel }) {
  const [tiltStyle, setTiltStyle] = useState({})
  const visualRef = useRef(null)

  const handleMouseMove = (e) => {
    const card = visualRef.current
    if (!card) return

    const rect = card.getBoundingClientRect()
    const x = e.clientX - rect.left - rect.width / 2
    const y = e.clientY - rect.top - rect.height / 2
    
    // Calculate rotation angles (max 15 degrees)
    const rotateX = -(y / (rect.height / 2)) * 15
    const rotateY = (x / (rect.width / 2)) * 15

    setTiltStyle({
      transform: `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`,
      transition: 'transform 0.1s ease-out'
    })
  }

  const handleMouseLeave = () => {
    setTiltStyle({
      transform: 'perspective(1000px) rotateX(0deg) rotateY(0deg)',
      transition: 'transform 0.5s ease-out'
    })
  }

  const handleScrollToContact = (e) => {
    e.preventDefault()
    const target = document.querySelector('#contact')
    if (target) {
      const navbarHeight = document.querySelector('.navbar').offsetHeight
      window.scrollTo({
        top: target.offsetTop - navbarHeight,
        behavior: 'smooth'
      })
    }
  }

  return (
    <section id="home" className="hero">
      {/* Dynamic Background Grid Pattern */}
      <div className="hero-grid-bg"></div>

      <div className="container">
        <div className="hero-content">
          <span className="hero-subtitle">Welcome to my universe</span>
          <h1 className="hero-title">{personalInfo.name}</h1>
          <h2 className="hero-tagline">{personalInfo.tagline}</h2>
          <p className="hero-bio">{personalInfo.bio}</p>
          
          <div className="hero-ctas">
            <a href="#contact" onClick={handleScrollToContact} className="btn btn-primary">
              Get in Touch
            </a>
            <a 
              href={personalInfo.resumePdf} 
              download="Vedansh_Gupta_Resume.pdf" 
              className="btn btn-outline"
            >
              Download CV
            </a>
          </div>

          <div className="hero-socials">
            <span className="hero-socials-label">Connect</span>
            <div style={{ width: '20px', height: '1px', background: 'var(--border-light)' }}></div>
            
            <a href={personalInfo.social.github} target="_blank" rel="noopener noreferrer" className="hero-social-link" aria-label="GitHub">
              <svg viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
            </a>
            
            <a href={personalInfo.social.linkedin} target="_blank" rel="noopener noreferrer" className="hero-social-link" aria-label="LinkedIn">
              <svg viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.779-1.75-1.75s.784-1.75 1.75-1.75 1.75.779 1.75 1.75-.784 1.75-1.75 1.75zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
            </a>

            <a href={personalInfo.social.leetcode} target="_blank" rel="noopener noreferrer" className="hero-social-link" aria-label="LeetCode">
              <svg viewBox="0 0 24 24"><path d="M13.483 0a1.374 1.374 0 0 0-.961.414l-9.777 9.778a1.374 1.374 0 0 0 0 1.942l1.942 1.942a1.374 1.374 0 0 0 1.942 0l9.777-9.777a1.374 1.374 0 0 0 0-1.942L14.444.414A1.374 1.374 0 0 0 13.483 0zm4.243 4.243a1.374 1.374 0 0 0-.961.414l-9.777 9.777a1.374 1.374 0 0 0 0 1.942l1.942 1.942a1.374 1.374 0 0 0 1.942 0l9.777-9.777a1.374 1.374 0 0 0 0-1.942L18.687 4.657a1.374 1.374 0 0 0-.961-.414zm4.243 4.243a1.374 1.374 0 0 0-.961.414l-9.777 9.777a1.374 1.374 0 0 0 0 1.942l1.942 1.942a1.374 1.374 0 0 0 1.942 0l9.777-9.777a1.374 1.374 0 0 0 0-1.942L22.93 8.899a1.374 1.374 0 0 0-.961-.414z" fillRule="evenodd" clipRule="evenodd"/><path d="M16.102 17.93l-2.69-2.69a1.35 1.35 0 0 0-1.91 0l-.63.63a1.35 1.35 0 0 0 0 1.91l2.69 2.69c2.39 2.39 6.27 2.39 8.66 0l1.24-1.24a6.12 6.12 0 0 0 0-8.66l-2.69-2.69a1.35 1.35 0 0 0-1.91 0l-.63.63a1.35 1.35 0 0 0 0 1.91l2.69 2.69a3.42 3.42 0 0 1 0 4.84l-1.24 1.24c-1.34 1.33-3.5 1.33-4.84 0z"/></svg>
            </a>
          </div>
        </div>

        <div 
          className="hero-visual" 
          ref={visualRef}
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
          style={tiltStyle}
        >
          <div className="glow-ring glow-ring-1"></div>
          <div className="glow-ring glow-ring-2"></div>
          
          <div className="hero-image-wrapper">
            <img src={personalInfo.heroImage} alt={personalInfo.name} className="hero-img" />
          </div>

          <button className="play-reel-btn" onClick={onPlayReel} aria-label="Play Reel">
            <svg viewBox="0 0 24 24"><path d="M8 5v14l11-7z"/></svg>
            <span className="play-reel-label">Play Reel</span>
          </button>
        </div>
      </div>

      <a href="#about" className="scroll-indicator">
        <span>Scroll</span>
        <svg viewBox="0 0 24 24"><path d="M7.41 8.59L12 13.17l4.59-4.58L18 10l-6 6-6-6 1.41-1.41z"/></svg>
      </a>
    </section>
  )
}
