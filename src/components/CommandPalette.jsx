import React, { useState, useEffect } from 'react'
import { personalInfo, projects } from '../data/portfolio-data'
import '../styles/components/command-palette.css'

export default function CommandPalette({ isOpen, onClose, onOpenAi, onOpenMatrix }) {
  const [query, setQuery] = useState('')
  const [selectedIndex, setSelectedIndex] = useState(0)
  const [activeTheme, setActiveTheme] = useState('obsidian')

  useEffect(() => {
    const handleKeyDown = (e) => {
      if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === 'k') {
        e.preventDefault()
        if (isOpen) onClose()
        else setSelectedIndex(0)
      }
      if (e.key === 'Escape' && isOpen) {
        onClose()
      }
    }
    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [isOpen, onClose])

  const setTheme = (themeName) => {
    setActiveTheme(themeName)
    if (themeName === 'obsidian') {
      document.documentElement.removeAttribute('data-theme')
    } else {
      document.documentElement.setAttribute('data-theme', themeName)
    }
    onClose()
  }

  const commands = [
    {
      group: 'Navigation',
      items: [
        { id: 'nav-home', title: 'Go to Home', icon: '🏠', action: () => { window.location.hash = '#home'; onClose(); } },
        { id: 'nav-about', title: 'Go to About Me', icon: '👤', action: () => { window.location.hash = '#about'; onClose(); } },
        { id: 'nav-skills', title: 'Go to Skills & Tech', icon: '⚡', action: () => { window.location.hash = '#skills'; onClose(); } },
        { id: 'nav-projects', title: 'Go to Flagship Projects', icon: '🚀', action: () => { window.location.hash = '#projects'; onClose(); } },
        { id: 'nav-education', title: 'Go to Education', icon: '🎓', action: () => { window.location.hash = '#education'; onClose(); } },
        { id: 'nav-certificates', title: 'Go to Certifications', icon: '📜', action: () => { window.location.hash = '#certificates'; onClose(); } },
        { id: 'nav-contact', title: 'Go to Contact', icon: '✉️', action: () => { window.location.hash = '#contact'; onClose(); } },
      ]
    },
    {
      group: 'Quick Actions',
      items: [
        { id: 'act-ai', title: 'Ask Vedansh AI Assistant', icon: '🤖', action: () => { onClose(); if (onOpenAi) onOpenAi(); } },
        { id: 'act-matrix', title: 'Launch Hacker Terminal (/matrix)', icon: '💻', action: () => { onClose(); if (onOpenMatrix) onOpenMatrix(); } },
        { id: 'act-resume', title: 'Download Resume PDF', icon: '📄', action: () => { window.open(personalInfo.resumePdf, '_blank'); onClose(); } },
        { id: 'act-whatsapp', title: 'Direct Chat on WhatsApp', icon: '💬', action: () => { window.open(personalInfo.social.whatsapp, '_blank'); onClose(); } },
        { id: 'act-github', title: 'Open GitHub Profile', icon: '💻', action: () => { window.open(personalInfo.social.github, '_blank'); onClose(); } },
        { id: 'act-linkedin', title: 'Open LinkedIn Profile', icon: '💼', action: () => { window.open(personalInfo.social.linkedin, '_blank'); onClose(); } },
      ]
    },
    {
      group: 'Switch Color Themes',
      items: [
        { id: 'theme-obsidian', title: 'Red Obsidian (Default)', icon: '🔴', action: () => setTheme('obsidian') },
        { id: 'theme-matrix', title: 'Matrix Cyber Green', icon: '🟢', action: () => setTheme('matrix') },
        { id: 'theme-aws', title: 'AWS Cloud Gold', icon: '🟧', action: () => setTheme('aws') },
        { id: 'theme-cyberblue', title: 'Deep Cyber Blue', icon: '🔵', action: () => setTheme('cyberblue') },
      ]
    }
  ]

  const flatItems = []
  commands.forEach(group => {
    group.items.forEach(item => {
      if (item.title.toLowerCase().includes(query.toLowerCase())) {
        flatItems.push({ ...item, group: group.group })
      }
    })
  })

  useEffect(() => {
    setSelectedIndex(0)
  }, [query])

  const handleListKeyDown = (e) => {
    if (e.key === 'ArrowDown') {
      e.preventDefault()
      setSelectedIndex(prev => (prev + 1) % (flatItems.length || 1))
    } else if (e.key === 'ArrowUp') {
      e.preventDefault()
      setSelectedIndex(prev => (prev - 1 + flatItems.length) % (flatItems.length || 1))
    } else if (e.key === 'Enter' && flatItems[selectedIndex]) {
      e.preventDefault()
      flatItems[selectedIndex].action()
    }
  }

  if (!isOpen) return null

  return (
    <div className="command-palette-backdrop" onClick={onClose}>
      <div className="command-palette-modal" onClick={e => e.stopPropagation()}>
        <div className="command-palette-search">
          <span className="command-palette-icon">⌨️</span>
          <input
            type="text"
            className="command-palette-input"
            placeholder="Type a command, search projects, or switch theme..."
            value={query}
            onChange={e => setQuery(e.target.value)}
            onKeyDown={handleListKeyDown}
            autoFocus
          />
          <span className="command-palette-badge">ESC to close</span>
        </div>

        <div className="command-palette-list">
          {flatItems.length === 0 ? (
            <div style={{ padding: '20px', textAlign: 'center', color: 'var(--text-muted)' }}>
              No commands found for "{query}"
            </div>
          ) : (
            flatItems.map((item, index) => (
              <div
                key={item.id}
                className={`command-palette-item ${index === selectedIndex ? 'active' : ''}`}
                onClick={item.action}
                onMouseEnter={() => setSelectedIndex(index)}
              >
                <div className="command-palette-item-left">
                  <span className="command-palette-item-icon">{item.icon}</span>
                  <span>{item.title}</span>
                </div>
                <span className="command-palette-item-shortcut">{item.group}</span>
              </div>
            ))
          )}
        </div>

        <div className="command-palette-footer">
          <span>Vedansh Gupta Developer Terminal</span>
          <div className="command-palette-footer-keys">
            <span className="command-palette-footer-key"><kbd>↑↓</kbd> Navigate</span>
            <span className="command-palette-footer-key"><kbd>↵</kbd> Select</span>
          </div>
        </div>
      </div>
    </div>
  )
}
