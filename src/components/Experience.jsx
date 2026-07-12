import React from 'react'
import ScrollReveal from './ScrollReveal'
import '../styles/components/experience.css'

export default function Experience() {
  const steps = [
    { 
      year: '2024', 
      title: 'Began B.Tech at GLA University', 
      desc: 'Began Computer Science Engineering journey, building a solid foundation in programming paradigms, structures, and systems.' 
    },
    { 
      year: '2025', 
      title: 'DSA Deep Dive & Projects', 
      desc: 'Mastered core Data Structures & Algorithms, and built web projects like Canvas-based Snake Game and standard S3 host configurations.' 
    },
    { 
      year: '2026', 
      title: 'AWS Cloud Basics & Interactive Apps', 
      desc: 'Earned the AWS Academy Cloud Foundations training badge and built interactive applications like Quantum Hands hand-tracker.' 
    },
    { 
      year: 'Present', 
      title: 'Full-Stack Integration', 
      desc: 'Developing full-stack systems like Library Management System on React/Node, solving algorithms on LeetCode, and cloud engineering.' 
    }
  ]

  return (
    <section id="experience" className="section bg-secondary">
      <div className="container">
        <ScrollReveal>
          <div className="section-header">
            <span className="accent-dot">// Timeline Journey</span>
            <h2 className="section-title">My Journey</h2>
            <div className="accent-line"></div>
          </div>
        </ScrollReveal>

        <div className="experience-timeline">
          {steps.map((step, idx) => (
            <ScrollReveal key={idx} className={idx % 2 === 0 ? 'reveal-left' : 'reveal-right'}>
              <div className="timeline-item">
                <div className="timeline-dot"></div>
                <div className="timeline-content glass-card">
                  <div className="timeline-year">{step.year}</div>
                  <h3 className="timeline-title">{step.title}</h3>
                  <p className="timeline-desc">{step.desc}</p>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  )
}
