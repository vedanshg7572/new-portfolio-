import React, { useState, useEffect, useRef } from 'react'
import { personalInfo, projects } from '../data/portfolio-data'
import '../styles/components/matrix-terminal.css'

export default function MatrixTerminal({ isOpen, onClose }) {
  const [logs, setLogs] = useState([
    'VEDANSH GUPTA OS v3.0.0 (x86_64-aws-cloud)',
    'Type "help" to view available hacker commands, or "exit" to close terminal.',
    '--------------------------------------------------------------------------------'
  ])
  const [inputVal, setInputVal] = useState('')
  const canvasRef = useRef(null)
  const bottomRef = useRef(null)

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' })
  }, [logs])

  // Digital Rain Canvas Effect
  useEffect(() => {
    if (!isOpen) return
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    canvas.width = window.innerWidth
    canvas.height = window.innerHeight

    const chars = '01VEDANSHGUPTAAWSJAVA10'
    const fontSize = 14
    const columns = Math.floor(canvas.width / fontSize)
    const drops = Array(columns).fill(1)

    const draw = () => {
      ctx.fillStyle = 'rgba(0, 0, 0, 0.05)'
      ctx.fillRect(0, 0, canvas.width, canvas.height)
      ctx.fillStyle = '#00FF66'
      ctx.font = `${fontSize}px monospace`

      for (let i = 0; i < drops.length; i++) {
        const text = chars[Math.floor(Math.random() * chars.length)]
        ctx.fillText(text, i * fontSize, drops[i] * fontSize)
        if (drops[i] * fontSize > canvas.height && Math.random() > 0.975) {
          drops[i] = 0
        }
        drops[i]++
      }
    }

    const interval = setInterval(draw, 33)
    return () => clearInterval(interval)
  }, [isOpen])

  const handleCommand = (cmd) => {
    const trimmed = cmd.trim().toLowerCase()
    const newLogs = [...logs, `vedansh@cloud:~$ ${cmd}`]

    if (trimmed === 'help') {
      newLogs.push(
        'AVAILABLE COMMANDS:',
        '  whoami       - Display developer summary',
        '  projects     - List all 6 flagship projects',
        '  aws          - Check AWS Cloud infrastructure status',
        '  contact      - Print phone, email & WhatsApp credentials',
        '  clear        - Clear terminal screen',
        '  exit         - Exit terminal matrix mode'
      )
    } else if (trimmed === 'whoami') {
      newLogs.push(
        'NAME: Vedansh Gupta',
        'YEAR: 3rd Year B.Tech CSE (GLA University, Mathura)',
        'ROLE: Aspiring Software Engineer & Cloud Developer',
        'STACK: Java, AWS (EC2/S3/Route53), MERN Stack, React'
      )
    } else if (trimmed === 'projects') {
      projects.forEach((p, idx) => {
        newLogs.push(`[${idx + 1}] ${p.title} (${p.tech.join(', ')})`)
      })
    } else if (trimmed === 'aws') {
      newLogs.push(
        'AWS CLOUD INFRASTRUCTURE TELEMETRY:',
        '  • Route 53 Health Checks: ACTIVE (100% Uptime)',
        '  • Disaster Recovery: Warm Standby (us-east-1 -> us-west-2)',
        '  • Certifications: AWS Cloud Practitioner Essentials'
      )
    } else if (trimmed === 'contact') {
      newLogs.push(
        `Email: ${personalInfo.email}`,
        `WhatsApp: ${personalInfo.phone}`,
        `Domain: ${personalInfo.website}`
      )
    } else if (trimmed === 'clear') {
      setLogs([])
      setInputVal('')
      return
    } else if (trimmed === 'exit') {
      onClose()
      return
    } else {
      newLogs.push(`Command not recognized: "${cmd}". Type "help" for a list of commands.`)
    }

    setLogs(newLogs)
    setInputVal('')
  }

  if (!isOpen) return null

  return (
    <div className="matrix-backdrop">
      <canvas ref={canvasRef} className="matrix-canvas" />
      
      <div className="matrix-content">
        <div className="matrix-header">
          <span className="matrix-title">root@vedansh-cloud:~# (HACKER TERMINAL)</span>
          <button className="matrix-close" onClick={onClose}>[ESC / EXIT]</button>
        </div>

        <div className="matrix-output">
          {logs.map((line, idx) => (
            <div key={idx}>{line}</div>
          ))}
          <div ref={bottomRef} />
        </div>

        <div className="matrix-input-row">
          <span className="matrix-prompt">vedansh@cloud:~$</span>
          <input
            type="text"
            className="matrix-input"
            value={inputVal}
            onChange={e => setInputVal(e.target.value)}
            onKeyDown={e => e.key === 'Enter' && handleCommand(inputVal)}
            autoFocus
          />
        </div>
      </div>
    </div>
  )
}
