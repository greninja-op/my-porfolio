import React, { useState } from 'react';
import { projects } from '../data/portfolioData';

export default function CFLSApp() {
  const pData = projects.find((p) => p.id === 'cfls') || projects[3];
  const [lockOwner, setLockOwner] = useState(null);
  const [logs, setLogs] = useState([
    { id: 1, text: '[CFLS-gRPC] Multi-node quorum active. 0 active file locks.', time: '18:50:01' }
  ]);
  const [activeTab, setActiveTab] = useState('overview');

  const acquireLock = (node) => {
    if (lockOwner && lockOwner !== node) {
      setLogs((prev) => [
        { id: Date.now(), text: `❌ LOCK REJECTED: Node ${node} denied lock on 'main.py' (Currently held by ${lockOwner})`, time: new Date().toLocaleTimeString(), err: true },
        ...prev
      ]);
      return;
    }

    setLockOwner(node);
    setLogs((prev) => [
      { id: Date.now(), text: `🔒 LOCK ACQUIRED: Node ${node} granted atomic lease (Heartbeat TTL 5000ms)`, time: new Date().toLocaleTimeString(), ok: true },
      ...prev
    ]);
  };

  const releaseLock = () => {
    setLockOwner(null);
    setLogs((prev) => [
      { id: Date.now(), text: `🔓 LOCK RELEASED: 'main.py' unlocked. Delta sync propagated across nodes.`, time: new Date().toLocaleTimeString(), ok: true },
      ...prev
    ]);
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '1.2rem', fontFamily: 'var(--font-mac-title)' }}>
      {/* Top Header */}
      <div style={{ borderBottom: '2px solid #000', paddingBottom: '0.75rem' }}>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '0.5rem', marginBottom: '0.4rem' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
            <span style={{ fontSize: '2rem' }}>{pData.icon}</span>
            <div>
              <h2 style={{ fontSize: '1.8rem', color: '#000', lineHeight: 1 }}>{pData.title}</h2>
              <span style={{ fontSize: '1.1rem', color: 'var(--mac-purple-dark)', fontWeight: 'bold' }}>
                {pData.subtitle}
              </span>
            </div>
          </div>
          <span
            style={{
              background: 'var(--mac-lime)',
              color: '#000',
              border: '2px solid #000',
              padding: '2px 8px',
              fontSize: '1.05rem',
              fontWeight: 'bold',
              boxShadow: '2px 2px 0px #000'
            }}
          >
            {pData.badge}
          </span>
        </div>

        {/* Primary Action Buttons: GitHub Link & Website Link */}
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.6rem', marginTop: '0.6rem' }}>
          <a
            href={pData.github}
            target="_blank"
            rel="noopener noreferrer"
            className="mac-btn mac-btn-purple"
            style={{ textDecoration: 'none' }}
          >
            📦 GitHub Repository ↗
          </a>
          {pData.website && (
            <a
              href={pData.website}
              target="_blank"
              rel="noopener noreferrer"
              className="mac-btn mac-btn-cyan"
              style={{ textDecoration: 'none' }}
            >
              🌐 Project Link ↗
            </a>
          )}
          <button
            onClick={() => setActiveTab(activeTab === 'overview' ? 'sim' : 'overview')}
            className="mac-btn mac-btn-lime"
          >
            {activeTab === 'overview' ? '🕹️ Launch Multi-Node Lock Tool' : '📖 View App Overview'}
          </button>
        </div>
      </div>

      {activeTab === 'overview' ? (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
          {/* Purpose & Description Box */}
          <div className="mac-group-box">
            <span className="mac-group-label">What CFLS is Needed For</span>
            <p style={{ fontFamily: 'var(--font-mac-body)', fontSize: '1.05rem', lineHeight: 1.6, color: '#111', marginTop: '0.5rem' }}>
              {pData.description}
            </p>
          </div>

          {/* Capabilities List */}
          <div className="mac-group-box">
            <span className="mac-group-label">Key Architectural Features</span>
            <div style={{ marginTop: '0.5rem', display: 'flex', flexDirection: 'column', gap: '0.4rem' }}>
              {pData.features.map((feat, i) => (
                <div key={i} style={{ fontSize: '1.1rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                  <span style={{ color: 'var(--mac-purple-dark)', fontWeight: 'bold' }}>✓</span>
                  <span>{feat}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Tech Stack Pills */}
          <div className="mac-group-box">
            <span className="mac-group-label">Tech Stack & Frameworks</span>
            <div style={{ marginTop: '0.5rem', display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
              {pData.techStack.map((tech, i) => (
                <span
                  key={i}
                  style={{
                    background: 'var(--mac-lime)',
                    border: '2px solid #000',
                    padding: '2px 8px',
                    fontSize: '1rem',
                    fontWeight: 'bold',
                    boxShadow: '1px 1px 0px #000'
                  }}
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>
      ) : (
        /* Multi Node Lock Simulator */
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1rem' }}>
            <div className="mac-group-box" style={{ background: lockOwner === 'Node-A' ? 'var(--mac-yellow)' : '#fff' }}>
              <span className="mac-group-label">Developer Node A</span>
              <div style={{ marginTop: '0.5rem', display: 'flex', flexDirection: 'column', gap: '0.4rem' }}>
                <button onClick={() => acquireLock('Node-A')} className="mac-btn mac-btn-purple">Acquire Lock A</button>
              </div>
            </div>
            <div className="mac-group-box" style={{ background: lockOwner === 'Node-B' ? 'var(--mac-yellow)' : '#fff' }}>
              <span className="mac-group-label">Developer Node B</span>
              <div style={{ marginTop: '0.5rem', display: 'flex', flexDirection: 'column', gap: '0.4rem' }}>
                <button onClick={() => acquireLock('Node-B')} className="mac-btn mac-btn-pink">Acquire Lock B</button>
              </div>
            </div>
          </div>

          <button onClick={releaseLock} disabled={!lockOwner} className="mac-btn mac-btn-lime" style={{ alignSelf: 'center' }}>
            🔓 Release Lock Lease
          </button>

          <div className="mac-group-box">
            <span className="mac-group-label">Atomic Lock Logs</span>
            <div style={{ marginTop: '0.5rem', fontFamily: 'var(--font-mono)', fontSize: '0.95rem', maxHeight: '120px', overflowY: 'auto' }}>
              {logs.map((l) => (
                <div key={l.id} style={{ color: l.err ? 'red' : l.ok ? 'green' : '#000' }}>[{l.time}] {l.text}</div>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
