import React, { useState, useEffect } from 'react'
import '../styles/components/custom-cursor.css'

export default function CustomCursor() {
  const [position, setPosition] = useState({ x: 0, y: 0 })
  const [dotPosition, setDotPosition] = useState({ x: 0, y: 0 })
  const [hovered, setHovered] = useState(false)

  useEffect(() => {
    const handleMouseMove = (e) => {
      // Direct update for the dot
      setDotPosition({ x: e.clientX, y: e.clientY })
      
      // Delay update for the outer circle (lag effect)
      setTimeout(() => {
        setPosition({ x: e.clientX, y: e.clientY })
      }, 30)
    }

    const handleMouseOver = (e) => {
      const target = e.target
      const isInteractive = 
        target.tagName === 'A' || 
        target.tagName === 'BUTTON' || 
        target.closest('a') || 
        target.closest('button') || 
        target.classList.contains('btn') ||
        target.closest('.btn') ||
        target.classList.contains('play-reel-btn') ||
        target.closest('.play-reel-btn') ||
        target.classList.contains('skills-filter-btn')

      if (isInteractive) {
        setHovered(true)
      } else {
        setHovered(false)
      }
    }

    window.addEventListener('mousemove', handleMouseMove)
    window.addEventListener('mouseover', handleMouseOver)

    return () => {
      window.removeEventListener('mousemove', handleMouseMove)
      window.removeEventListener('mouseover', handleMouseOver)
    }
  }, [])

  return (
    <>
      <div 
        className={`custom-cursor ${hovered ? 'hovered' : ''}`}
        style={{ left: `${position.x}px`, top: `${position.y}px` }}
      />
      <div 
        className={`custom-cursor-dot ${hovered ? 'hovered' : ''}`}
        style={{ left: `${dotPosition.x}px`, top: `${dotPosition.y}px` }}
      />
    </>
  )
}
