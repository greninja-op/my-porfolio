import React, { useState } from 'react';
import { personalInfo } from '../data/portfolioData';

export default function TheChooserApp() {
  const [selectedNode, setSelectedNode] = useState('email');
  const [copied, setCopied] = useState(false);

  const nodes = [
    { id: 'email', name: 'Email Printer 🖨️', detail: personalInfo.email, link: `mailto:${personalInfo.email}` },
    { id: 'github', name: 'GitHub Server 🌐', detail: personalInfo.github, link: personalInfo.github },
    { id: 'linkedin', name: 'LinkedIn Node 📡', detail: personalInfo.linkedin, link: personalInfo.linkedin },
    { id: 'twitter', name: 'X/Twitter Dial-up 📟', detail: personalInfo.twitter, link: personalInfo.twitter }
  ];

  const active = nodes.find((n) => n.id === selectedNode) || nodes[0];

  const copyEmail = () => {
    navigator.clipboard.writeText(personalInfo.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div style={{ fontFamily: 'var(--font-mac-title)', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
      <div style={{ borderBottom: '2px solid #000', paddingBottom: '0.5rem', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <div>
          <h2 style={{ fontSize: '1.7rem', color: '#000', lineHeight: 1 }}>The Chooser — Network Hub</h2>
          <span style={{ fontSize: '1.05rem', color: 'var(--mac-purple-dark)', fontWeight: 'bold' }}>
            AppleTalk Network Nodes & Direct Connections
          </span>
        </div>
        <span style={{ background: 'var(--mac-lime)', border: '2px solid #000', padding: '2px 6px', fontSize: '1rem', fontWeight: 'bold' }}>
          AppleTalk Active
        </span>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: '200px 1fr', gap: '1rem' }}>
        {/* Left Pane: Network Icon Options */}
        <div className="mac-group-box">
          <span className="mac-group-label">Device Drivers</span>
          <div style={{ marginTop: '0.6rem', display: 'flex', flexDirection: 'column', gap: '0.4rem' }}>
            {nodes.map((n) => (
              <button
                key={n.id}
                onClick={() => setSelectedNode(n.id)}
                style={{
                  padding: '0.4rem 0.6rem',
                  border: '2px solid #000',
                  background: selectedNode === n.id ? 'var(--mac-purple)' : '#fff',
                  color: selectedNode === n.id ? '#fff' : '#000',
                  boxShadow: selectedNode === n.id ? '2px 2px 0px #000' : 'none',
                  fontFamily: 'var(--font-mac-title)',
                  fontSize: '1.1rem',
                  fontWeight: 'bold',
                  textAlign: 'left',
                  cursor: 'pointer',
                  borderRadius: '4px'
                }}
              >
                {n.name}
              </button>
            ))}
          </div>
        </div>

        {/* Right Pane: Connection Details */}
        <div className="mac-group-box" style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
          <span className="mac-group-label">Network Destination: {active.name}</span>
          <div style={{ marginTop: '0.6rem' }}>
            <div style={{ fontSize: '1.2rem', fontWeight: 'bold', marginBottom: '0.4rem' }}>
              Connection Protocol: <span style={{ color: 'var(--mac-purple-dark)' }}>Active Line Established</span>
            </div>
            <div style={{ fontSize: '1.05rem', color: '#333', marginBottom: '1rem', wordBreak: 'break-all', background: 'var(--mac-yellow)', padding: '0.5rem', border: '2px solid #000' }}>
              Target: <strong>{active.detail}</strong>
            </div>

            {selectedNode === 'email' ? (
              <div style={{ display: 'flex', gap: '0.6rem' }}>
                <button onClick={copyEmail} className="mac-btn mac-btn-purple">
                  {copied ? '✓ Copied Address!' : '📋 Copy Email Address'}
                </button>
                <a href={active.link} className="mac-btn mac-btn-lime" style={{ textDecoration: 'none' }}>
                  ✉️ Transmit Mail ↗
                </a>
              </div>
            ) : (
              <a href={active.link} target="_blank" rel="noopener noreferrer" className="mac-btn mac-btn-purple" style={{ textDecoration: 'none' }}>
                🌐 Connect to Server Node ↗
              </a>
            )}
          </div>

          <div style={{ borderTop: '1px solid #000', paddingTop: '0.4rem', fontSize: '0.95rem', color: '#666' }}>
            Zone: Arjun Sabu Core Network • Status: 100% Ready
          </div>
        </div>
      </div>
    </div>
  );
}
