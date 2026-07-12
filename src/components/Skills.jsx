import React, { useState, useEffect, useRef } from 'react'
import { skills } from '../data/portfolio-data'
import ScrollReveal from './ScrollReveal'
import '../styles/components/skills.css'

export default function Skills() {
  const [activeTab, setActiveTab] = useState('All')
  const [shouldAnimate, setShouldAnimate] = useState(false)
  const skillsRef = useRef(null)

  const categories = ['All', ...new Set(skills.map(s => s.category))]
  const filteredSkills = activeTab === 'All' ? skills : skills.filter(s => s.category === activeTab)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShouldAnimate(true)
          observer.unobserve(entry.target)
        }
      },
      { threshold: 0.1 }
    )

    if (skillsRef.current) {
      observer.observe(skillsRef.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <section id="skills" className="section bg-secondary" ref={skillsRef}>
      <div className="container">
        <ScrollReveal>
          <div className="section-header">
            <span className="accent-dot">// My Toolbox</span>
            <h2 className="section-title">Skills & Technologies</h2>
            <div className="accent-line"></div>
          </div>
        </ScrollReveal>

        <ScrollReveal>
          <div className="skills-filter">
            {categories.map((cat, idx) => (
              <button 
                key={idx} 
                className={`skills-filter-btn ${activeTab === cat ? 'active' : ''}`}
                onClick={() => setActiveTab(cat)}
              >
                {cat}
              </button>
            ))}
          </div>
        </ScrollReveal>

        <div className="skills-grid stagger-children visible">
          {filteredSkills.map((skill, idx) => (
            <div key={idx} className="skill-card glass-card">
              <div className="skill-header">
                <span className="skill-name">{skill.name}</span>
                <span className="skill-pct">{skill.level}%</span>
              </div>
              <div className="skill-progress-bg">
                <div 
                  className="skill-progress-bar" 
                  style={{ width: shouldAnimate ? `${skill.level}%` : '0%' }}
                ></div>
              </div>
              <span className="skill-category">{skill.category}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
