import React from 'react'
import '../styles/components/architecture-modal.css'

export default function ArchitectureModal({ project, onClose }) {
  if (!project) return null

  const getArchData = (title) => {
    if (title.includes('Disaster')) {
      return {
        type: 'Multi-Region AWS Warm Standby Architecture',
        stats: [
          { lbl: 'RTO (Recovery Time)', val: '< 15 Mins' },
          { lbl: 'RPO (Recovery Point)', val: '< 5 Mins' },
          { lbl: 'Primary Region', val: 'us-east-1' },
          { lbl: 'Failover Region', val: 'us-west-2' },
        ],
        nodes: [
          { icon: '🌐', name: 'AWS Route 53', desc: 'Latency & Health-check DNS routing. Automatically detects us-east-1 outages and switches CNAME to us-west-2.' },
          { icon: '⚖️', name: 'Application Load Balancer', desc: 'SSL Termination and HTTP target group health monitoring across EC2 Auto Scaling Instances.' },
          { icon: '🖥️', name: 'EC2 Auto-Scaling Group', desc: 'Minimal active capacity in secondary region that scales up dynamically upon failover alert.' },
          { icon: '🗄️', name: 'RDS Multi-Region Replica', desc: 'Asynchronous cross-region replication ensuring low-latency data sync across Postgres/MySQL databases.' },
        ],
        pipeline: ['User Browser', 'Route 53 DNS', 'ALB Load Balancer', 'EC2 Compute', 'RDS Database Sync']
      }
    }

    if (title.includes('Cost')) {
      return {
        type: 'AWS Cost Optimization & Telemetry Architecture',
        stats: [
          { lbl: 'Avg Cost Reduction', val: 'Up to 70%' },
          { lbl: 'Budget Alert Thresholds', val: '50%, 75%, 90%' },
          { lbl: 'Telemetry Backend', val: 'Express & AWS SDK' },
          { lbl: 'Report Export Format', val: 'PDF & CSV' },
        ],
        nodes: [
          { icon: '📊', name: 'AWS Cost Explorer API', desc: 'Pulls real-time daily, monthly, and forecasted cloud spend broken down by service and region.' },
          { icon: '🔍', name: 'Resource Waste Scanner', desc: 'Scans for unattached EBS volumes, idle EC2 instances, and unassociated Elastic IPs.' },
          { icon: '🔔', name: 'AWS SNS & Budget Engine', desc: 'Multi-tier email & webhook notifications when budget thresholds are breached.' },
          { icon: '💻', name: 'React + Recharts Dashboard', desc: 'Interactive charts rendering cost breakdown and downloadable accounting reports.' },
        ],
        pipeline: ['AWS SDK Pull', 'Waste Scanner Engine', 'Budget Threshold Evaluator', 'SNS Notification', 'React Analytics Dashboard']
      }
    }

    return {
      type: 'Automated Cloud IaaS Deployment',
      stats: [
        { lbl: 'Cloud Provider', val: 'AWS EC2' },
        { lbl: 'OS Image', val: 'Ubuntu 24.04' },
        { lbl: 'Web Server', val: 'Apache2' },
        { lbl: 'Automation Script', val: 'Bash Shell' },
      ],
      nodes: [
        { icon: '🔒', name: 'Security Group Firewall', desc: 'Strict inbound rule configuration opening ports 22 (SSH), 80 (HTTP), and 443 (HTTPS).' },
        { icon: '🐧', name: 'Ubuntu EC2 Instance', desc: 'IaaS virtual machine provisioned with UFW firewall and automated boot scripts.' },
        { icon: '🌐', name: 'Apache2 Server', desc: 'HTTP web server hosting custom web pages with optimized header caching.' },
        { icon: '📜', name: 'Deployment Automation', desc: 'Bash scripts executing SSH commands for automated deployment and health checks.' },
      ],
      pipeline: ['AWS EC2 Provisioning', 'SSH Key Auth', 'Security Group Config', 'Apache Setup', 'Live Web Host']
    }
  }

  const arch = getArchData(project.title)

  return (
    <div className="arch-modal-backdrop" onClick={onClose}>
      <div className="arch-modal-window" onClick={e => e.stopPropagation()}>
        <div className="arch-modal-header">
          <div className="arch-modal-title-group">
            <span className="arch-modal-icon">{project.icon}</span>
            <div>
              <div className="arch-modal-title">{project.title}</div>
              <div className="arch-modal-subtitle">{arch.type}</div>
            </div>
          </div>
          <button className="arch-modal-close-btn" onClick={onClose}>✕</button>
        </div>

        <div className="arch-modal-body">
          <div className="arch-stats-row">
            {arch.stats.map((s, idx) => (
              <div key={idx} className="arch-stat-badge">
                <div className="arch-stat-val">{s.val}</div>
                <div className="arch-stat-lbl">{s.lbl}</div>
              </div>
            ))}
          </div>

          <div className="arch-diagram-canvas">
            <div style={{ fontFamily: 'var(--font-heading)', fontSize: '0.9rem', color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '1px', marginBottom: '8px' }}>
              // Architecture Topology & Components
            </div>

            <div className="arch-node-grid">
              {arch.nodes.map((node, idx) => (
                <div key={idx} className="arch-node-card">
                  <div className="arch-node-header">
                    <span className="arch-node-icon">{node.icon}</span>
                    <span className="arch-node-name">{node.name}</span>
                  </div>
                  <div className="arch-node-desc">{node.desc}</div>
                </div>
              ))}
            </div>

            <div style={{ fontFamily: 'var(--font-heading)', fontSize: '0.85rem', color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '1px', marginTop: '12px', marginBottom: '4px' }}>
              // Data Pipeline & Traffic Flow
            </div>

            <div className="arch-flow-pipeline">
              {arch.pipeline.map((step, idx) => (
                <React.Fragment key={idx}>
                  <div className="arch-pipeline-step">
                    <span>{step}</span>
                  </div>
                  {idx < arch.pipeline.length - 1 && <span className="arch-pipeline-arrow">➔</span>}
                </React.Fragment>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
