import React from 'react'
import { education } from '../data/portfolio-data'
import ScrollReveal from './ScrollReveal'
import '../styles/components/education.css'

export default function Education() {
  return (
    <section id="education" className="section">
      <div className="container">
        <ScrollReveal>
          <div className="section-header">
            <span className="accent-dot">// Academic History</span>
            <h2 className="section-title">Education</h2>
            <div className="accent-line"></div>
          </div>
        </ScrollReveal>

        <div className="education-timeline">
          {education.map((edu, idx) => (
            <ScrollReveal key={idx} className="reveal-left">
              <div className="edu-item">
                <div className="edu-dot"></div>
                <div className="edu-card glass-card">
                  <div className="edu-icon">{edu.icon}</div>
                  <div className="edu-info">
                    <div className="edu-duration">{edu.duration}</div>
                    <h3 className="edu-degree">{edu.degree}</h3>
                    <div className="edu-institution">{edu.institution} ({edu.field})</div>
                    <span className="edu-status-badge">{edu.status}</span>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  )
}
