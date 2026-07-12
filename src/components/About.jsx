import React from 'react'
import { personalInfo, strengths } from '../data/portfolio-data'
import ScrollReveal from './ScrollReveal'
import '../styles/components/about.css'

export default function About() {
  return (
    <section id="about" className="section">
      <div className="container">
        <ScrollReveal>
          <div className="section-header">
            <span className="accent-dot">// Who am I</span>
            <h2 className="section-title">About Me</h2>
            <div className="accent-line"></div>
          </div>
        </ScrollReveal>

        <div className="about-grid">
          <ScrollReveal className="reveal-left">
            <div className="about-image-wrapper">
              <img src={personalInfo.heroImage} alt="About Vedansh Gupta" className="about-img" />
            </div>
          </ScrollReveal>

          <ScrollReveal className="reveal-right">
            <div className="about-content">
              <p className="about-text">{personalInfo.bio}</p>
              
              <div className="about-stats">
                <div className="about-stat-card glass-card">
                  <div className="about-stat-num">5+</div>
                  <div className="about-stat-label">Projects Built</div>
                </div>
                <div className="about-stat-card glass-card">
                  <div className="about-stat-num">2nd</div>
                  <div className="about-stat-label">Year CSE Student</div>
                </div>
                <div className="about-stat-card glass-card">
                  <div className="about-stat-num">20+</div>
                  <div className="about-stat-label">AWS Training Hours</div>
                </div>
              </div>

              <div className="about-strengths">
                <h3 className="about-strengths-title">Core Qualities</h3>
                <div className="about-strengths-list">
                  {strengths.map((str, idx) => (
                    <div key={idx} className="about-strength-badge">
                      <span>{str.icon}</span>
                      <span>{str.name}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  )
}
