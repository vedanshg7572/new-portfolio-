import React from 'react'
import { projects } from '../data/portfolio-data'
import ScrollReveal from './ScrollReveal'
import '../styles/components/projects.css'

export default function Projects({ onSelectArch }) {
  return (
    <section id="projects" className="section">
      <div className="container">
        <ScrollReveal>
          <div className="section-header">
            <span className="accent-dot">// Code Showcase</span>
            <h2 className="section-title">Featured Projects</h2>
            <div className="accent-line"></div>
          </div>
        </ScrollReveal>

        <div className="projects-grid stagger-children visible">
          {projects.map((proj, idx) => {
            const isFeatured = idx === 0
            return (
              <div 
                key={idx} 
                className={`project-card glass-card ${isFeatured ? 'featured' : ''}`}
              >
                <div 
                  className="project-card-accent" 
                  style={{ background: proj.color || 'var(--primary)' }}
                ></div>
                
                <div className="project-icon" style={{ borderColor: proj.color + '30', color: proj.color }}>
                  {proj.icon}
                </div>

                <div className="project-info-wrapper">
                  <h3 className="project-title">{proj.title}</h3>
                  <p className="project-desc">{proj.description}</p>
                  
                  <div className="project-tech">
                    {proj.tech.map((t, i) => (
                      <span key={i} className="project-tech-badge">{t}</span>
                    ))}
                  </div>

                  <div className="project-actions">
                    <button 
                      className="project-action-link" 
                      onClick={() => onSelectArch && onSelectArch(proj)}
                      style={{ background: 'transparent', border: '1px solid var(--border-light)', cursor: 'pointer', fontFamily: 'inherit' }}
                    >
                      📐 View Arch
                    </button>

                    <a href={proj.github} target="_blank" rel="noopener noreferrer" className="project-action-link">
                      <svg viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
                      Code
                    </a>
                    {proj.live && (
                      <a href={proj.live} target="_blank" rel="noopener noreferrer" className="project-action-link">
                        <svg viewBox="0 0 24 24"><path d="M14 3h7v7h-2V6.41l-9.29 9.29-1.41-1.41L17.59 5H14V3zM19 19H5V5h7V3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2v-7h-2v7z"/></svg>
                        Live Demo
                      </a>
                    )}
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
