import React, { useState, useRef, useEffect } from 'react'
import { personalInfo, projects, education, certificates } from '../data/portfolio-data'
import '../styles/components/ai-bot.css'

export default function AiBot({ isOpen, onToggle }) {
  const [messages, setMessages] = useState([
    {
      sender: 'bot',
      text: "Hi! I'm Vedansh's Portfolio AI Assistant. Ask me anything about his projects, skills, education, or internship!"
    }
  ])
  const [input, setInput] = useState('')
  const chatEndRef = useRef(null)

  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: 'smooth' })
  }, [messages])

  const quickQuestions = [
    "What Cloud projects has Vedansh built?",
    "Where did he do his internship?",
    "What are his core technical skills?",
    "How can I contact Vedansh?"
  ]

  const generateAnswer = (userQuery) => {
    const q = userQuery.toLowerCase()

    if (q.includes('project') || q.includes('build') || q.includes('disaster') || q.includes('cost')) {
      return `Vedansh has built 6 flagship engineering & cloud projects including:\n1. 🌩️ Cloud Disaster Recovery System (AWS Route 53, Warm Standby)\n2. ☁️ Cloud Cost Optimization Dashboard (AWS Cost Explorer, React, SNS Alerts)\n3. ⚙️ The Server Commander (AWS EC2 Linux, Apache2, Bash)\n4. 🤖 AuraCloud AI Chatbot (NLP Intent Engine + Gemini API)\n5. 🚌 Cloud-Based Bus Pass System (MERN Stack, Signed QR, PDFKit)`
    }
    
    if (q.includes('intern') || q.includes('codec') || q.includes('experience') || q.includes('work')) {
      return `Vedansh completed a 1-month AICTE & ICAC approved Cloud Computing Internship at Codec Technologies Pvt. Ltd. (Google for Education Partner) from July 30 to Sept 30, 2026!`
    }

    if (q.includes('skill') || q.includes('tech') || q.includes('language') || q.includes('java')) {
      return `Vedansh's primary tech stack includes:\n• Languages: Java, C++, JavaScript, HTML/CSS\n• Cloud & DevOps: AWS (EC2, S3, Route 53, Cost Explorer), Cloud Computing, Render\n• Frameworks: React.js, Node.js, Express.js, Spring Boot, MERN\n• Databases: MySQL, MongoDB\n• Core CS: DSA, OOPs, DBMS, OS`
    }

    if (q.includes('education') || q.includes('college') || q.includes('gla') || q.includes('degree')) {
      return `Vedansh is currently a 3rd Year B.Tech Computer Science & Engineering student at GLA University, Mathura (2024 — 2028 expected).`
    }

    if (q.includes('certif') || q.includes('aws') || q.includes('n8n')) {
      return `Vedansh holds top cloud credentials:\n1. AWS Cloud Practitioner Essentials (AWS Training & Certification)\n2. AWS Academy Graduate — Cloud Foundations (Credly badge)\n3. n8n Academy Essentials: Your First Workflows`
    }

    if (q.includes('contact') || q.includes('email') || q.includes('whatsapp') || q.includes('hire') || q.includes('reach')) {
      return `You can reach Vedansh directly via:\n• Email: vedanshg7572@gmail.com\n• WhatsApp: +91 7572001500\n• Domain: https://vedansh.tech\n• LinkedIn: linkedin.com/in/vedansh-gupta-94373a32a`
    }

    return `Vedansh is an Aspiring Software Engineer currently in 3rd Year B.Tech CSE at GLA University. He specializes in Cloud Computing, AWS Architecture, MERN Full-Stack, and Java DSA. You can download his resume or message him on WhatsApp at +91 7572001500!`
  }

  const handleSend = (textToSend) => {
    const query = textToSend || input
    if (!query.trim()) return

    const newMsgs = [...messages, { sender: 'user', text: query }]
    setMessages(newMsgs)
    if (!textToSend) setInput('')

    setTimeout(() => {
      const botAns = generateAnswer(query)
      setMessages(prev => [...prev, { sender: 'bot', text: botAns }])
    }, 400)
  }

  return (
    <>
      <button 
        className="ai-bot-toggle-btn" 
        onClick={onToggle}
        aria-label="Toggle AI Bot"
        title="Vedansh AI Assistant"
      >
        🤖
      </button>

      {isOpen && (
        <div className="ai-bot-window">
          <div className="ai-bot-header">
            <div className="ai-bot-header-left">
              <div className="ai-bot-avatar">🤖</div>
              <div>
                <div className="ai-bot-header-title">Vedansh AI</div>
                <div className="ai-bot-header-status">
                  <span style={{ width: '6px', height: '6px', borderRadius: '50%', background: '#00FF66' }}></span>
                  Online
                </div>
              </div>
            </div>
            <button className="ai-bot-close-btn" onClick={onToggle}>✕</button>
          </div>

          <div className="ai-bot-chat-body">
            {messages.map((m, idx) => (
              <div key={idx} className={`ai-msg ${m.sender}`}>
                {m.text.split('\n').map((line, i) => (
                  <React.Fragment key={i}>
                    {line}
                    {i < m.text.split('\n').length - 1 && <br />}
                  </React.Fragment>
                ))}
              </div>
            ))}
            <div ref={chatEndRef} />
          </div>

          <div className="ai-bot-chips">
            {quickQuestions.map((q, idx) => (
              <button key={idx} className="ai-chip" onClick={() => handleSend(q)}>
                {q}
              </button>
            ))}
          </div>

          <div className="ai-bot-input-area">
            <input
              type="text"
              className="ai-bot-input"
              placeholder="Ask AI about Vedansh..."
              value={input}
              onChange={e => setInput(e.target.value)}
              onKeyDown={e => e.key === 'Enter' && handleSend()}
            />
            <button className="ai-bot-send-btn" onClick={() => handleSend()}>
              ➤
            </button>
          </div>
        </div>
      )}
    </>
  )
}
