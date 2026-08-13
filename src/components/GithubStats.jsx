import React, { useState, useEffect } from 'react'
import ScrollReveal from './ScrollReveal'
import { personalInfo } from '../data/portfolio-data'
import '../styles/components/github-stats.css'

export default function GithubStats() {
  const [stats, setStats] = useState({
    repos: 14,
    followers: 12,
    following: 15,
    gists: 4,
    avatar: 'https://github.com/vedanshg7572.png',
    name: 'Vedansh Gupta',
    bio: 'Aspiring Software Engineer & Cloud Developer'
  })

  useEffect(() => {
    fetch('https://api.github.com/users/vedanshg7572')
      .then(res => res.json())
      .then(data => {
        if (data && data.public_repos !== undefined) {
          setStats({
            repos: data.public_repos || 14,
            followers: data.followers || 12,
            following: data.following || 15,
            gists: data.public_gists || 4,
            avatar: data.avatar_url || 'https://github.com/vedanshg7572.png',
            name: data.name || 'Vedansh Gupta',
            bio: data.bio || 'Aspiring Software Engineer'
          })
        }
      })
      .catch(() => {})
  }, [])

  return (
    <div className="container github-stats-section">
      <ScrollReveal>
        <div className="github-stats-card glass-card">
          <div className="github-stats-header">
            <div className="github-stats-user">
              <img src={stats.avatar} alt="Vedansh GitHub" className="github-stats-avatar" />
              <div>
                <div className="github-stats-username">{stats.name} (@vedanshg7572)</div>
                <div className="github-stats-sub">{stats.bio} • Live Telemetry</div>
              </div>
            </div>
            <a 
              href={personalInfo.social.github} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="btn btn-outline"
              style={{ fontSize: '0.8rem', padding: '6px 14px' }}
            >
              Explore Repositories ➔
            </a>
          </div>

          <div className="github-stats-grid">
            <div className="github-stat-item">
              <span className="github-stat-icon">📦</span>
              <div>
                <div className="github-stat-num">{stats.repos}</div>
                <div className="github-stat-label">Public Repos</div>
              </div>
            </div>

            <div className="github-stat-item">
              <span className="github-stat-icon">🔥</span>
              <div>
                <div className="github-stat-num">200+</div>
                <div className="github-stat-label">LeetCode Solved</div>
              </div>
            </div>

            <div className="github-stat-item">
              <span className="github-stat-icon">⚡</span>
              <div>
                <div className="github-stat-num">100%</div>
                <div className="github-stat-label">AWS Cloud Uptime</div>
              </div>
            </div>

            <div className="github-stat-item">
              <span className="github-stat-icon">👥</span>
              <div>
                <div className="github-stat-num">{stats.followers}</div>
                <div className="github-stat-label">GitHub Followers</div>
              </div>
            </div>
          </div>
        </div>
      </ScrollReveal>
    </div>
  )
}
