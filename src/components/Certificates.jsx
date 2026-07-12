import React from 'react'
import { certificates } from '../data/portfolio-data'
import ScrollReveal from './ScrollReveal'
import '../styles/components/certificates.css'

export default function Certificates() {
  return (
    <section id="certificates" className="section bg-secondary">
      <div className="container">
        <ScrollReveal>
          <div className="section-header">
            <span className="accent-dot">// Verification</span>
            <h2 className="section-title">Certifications</h2>
            <div className="accent-line"></div>
          </div>
        </ScrollReveal>

        <div className="certs-grid">
          {certificates.map((cert, idx) => (
            <ScrollReveal key={idx} className="reveal-scale">
              <div className="cert-card glass-card">
                <div className="cert-icon" style={{ 
                  color: cert.color,
                  borderColor: cert.color + '40',
                  background: cert.color + '10'
                }}>
                  {cert.icon}
                </div>
                <h3 className="cert-title">{cert.title}</h3>
                <div className="cert-issuer">{cert.issuer}</div>
                
                <div className="cert-meta">
                  <span className="cert-meta-badge">{cert.date}</span>
                  <span className="cert-meta-badge">{cert.hours}</span>
                </div>

                <div className="cert-actions">
                  <a href={cert.credlyLink} target="_blank" rel="noopener noreferrer" className="btn btn-primary">
                    Verify Credly
                  </a>
                  <a href={cert.pdfPath} download="AWS_Academy_Certificate.pdf" className="btn btn-outline">
                    Download PDF
                  </a>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  )
}
