import React, { useState, useRef, useEffect } from 'react'
import { personalInfo } from '../data/portfolio-data'
import '../styles/components/hero.css'

export default function Hero() {
  const [isPlaying, setIsPlaying] = useState(false)
  const videoRef = useRef(null)

  const handlePlayToggle = () => {
    const video = videoRef.current
    if (!video) return

    if (isPlaying) {
      video.pause()
      setIsPlaying(false)
    } else {
      video.play().catch(err => console.error("Video play failed:", err))
      setIsPlaying(true)
    }
  }

  // Handle video ending state
  useEffect(() => {
    const video = videoRef.current
    if (!video) return

    const handleEnded = () => {
      setIsPlaying(false)
    }

    video.addEventListener('ended', handleEnded)
    return () => {
      if (video) video.removeEventListener('ended', handleEnded)
    }
  }, [])

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
      {/* Background Media Container */}
      <div className="hero-media-container">
        {/* Render both image and video, toggle visibility based on play state */}
        <img 
          src={personalInfo.heroImage} 
          alt={personalInfo.name} 
          className="hero-bg-media"
          style={{ display: isPlaying ? 'none' : 'block' }}
        />
        
        <video 
          ref={videoRef}
          src={personalInfo.heroVideo} 
          className="hero-bg-media"
          loop
          playsInline
          muted={false} // Allow audio if talking video has it
          style={{ display: isPlaying ? 'block' : 'none' }}
        />
        
        {/* Subtle overlay for text readability */}
        <div className="hero-overlay"></div>
        {/* Floating grid patterns */}
        <div className="hero-grid-bg"></div>
      </div>

      {/* Social Links Left Side Bar */}
      <div className="hero-socials-side">
        <a href={personalInfo.social.whatsapp} target="_blank" rel="noopener noreferrer" className="hero-social-link" aria-label="WhatsApp">
          <svg viewBox="0 0 24 24"><path fill="#25D366" d="M12.012 2c-5.506 0-9.989 4.478-9.99 9.984 0 1.764.459 3.488 1.333 5.006l-1.417 5.176 5.302-1.39c1.463.798 3.111 1.218 4.767 1.218h.004c5.506 0 9.99-4.478 9.99-9.984 0-2.668-1.039-5.176-2.927-7.062a9.923 9.923 0 0 0-7.062-2.952zm5.795 14.168c-.244.686-1.42 1.31-1.956 1.393-.497.078-1.144.11-1.844-.113-1.637-.52-2.884-1.282-4.048-2.449-1.164-1.164-1.926-2.411-2.447-4.048-.223-.7-.19-1.347-.113-1.844.083-.536.707-1.712 1.393-1.956.244-.087.49-.117.707-.117.17 0 .323.008.452.015.27.015.424.032.61.472.244.577.834 2.036.907 2.183.073.147.122.318.024.513-.098.195-.147.318-.293.488-.147.171-.309.383-.44.513-.147.147-.301.309-.129.605.171.296.762 1.258 1.635 2.036 1.125 1.002 2.072 1.312 2.368 1.459.296.147.467.122.639-.073.171-.195.733-.855.928-1.148.195-.293.391-.244.66-.147.269.098 1.711.807 2.004.953.293.147.488.22.562.342.073.122.073.708-.171 1.394z"/></svg>
        </a>
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

      <div className="container">
        <div className="hero-content">
          <span className="hero-subtitle">Hi, I'm {personalInfo.name.split(' ')[0]}<span>,</span></span>
          <h1 className="hero-title">{personalInfo.name}</h1>
          <h2 className="hero-tagline">{personalInfo.tagline}</h2>
          <p className="hero-bio">I build fast, scalable applications using Java, AWS S3 website structures, full-stack systems, and algorithms.</p>
          
          <div className="hero-ctas">
            <a href="#projects" className="btn btn-primary">
              View My Work
            </a>
            <a href="#contact" onClick={handleScrollToContact} className="btn btn-outline">
              Contact Me
            </a>
            <a 
              href={personalInfo.resumePdf} 
              download="Vedansh_Gupta_Resume.pdf" 
              className="btn btn-outline"
            >
              <svg style={{ width: '16px', height: '16px', marginRight: '6px' }} viewBox="0 0 24 24"><path fill="currentColor" d="M5 20h14v-2H5v2zM19 9h-4V3H9v6H5l7 7 7-7z"/></svg>
              Download Resume
            </a>
          </div>
        </div>

        {/* Play/Pause Reel Button aligned over the laptop screen */}
        <div className="play-reel-btn-wrapper">
          <button 
            className={`play-reel-btn ${isPlaying ? 'playing' : ''}`} 
            onClick={handlePlayToggle} 
            aria-label={isPlaying ? "Pause Reel" : "Play Reel"}
          >
            {isPlaying ? (
              // Pause Icon
              <svg viewBox="0 0 24 24"><path d="M6 19h4V5H6v14zm8-14v14h4V5h-4z"/></svg>
            ) : (
              // Play Icon
              <svg viewBox="0 0 24 24"><path d="M8 5v14l11-7z"/></svg>
            )}
          </button>
          <span className="play-reel-label">{isPlaying ? "Pause" : "Play Reel"}</span>
        </div>
      </div>
    </section>
  )
}
