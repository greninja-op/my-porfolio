import React, { useState } from 'react';

export default function CFLSApp() {
  const [lockOwner, setLockOwner] = useState(null);
  const [logs, setLogs] = useState([
    { id: 1, text: '[CFLS-gRPC] Multi-node quorum active. 0 active file locks.', time: '18:50:01' }
  ]);
  const [activeTab, setActiveTab] = useState('sim');

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
    <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', fontFamily: 'var(--font-mac-title)' }}>
      {/* Header */}
      <div style={{ borderBottom: '2px solid #000', paddingBottom: '0.6rem', display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '0.5rem' }}>
        <div>
          <h2 style={{ fontSize: '1.7rem', color: '#000', lineHeight: 1 }}>🔒 CFLS.app</h2>
          <span style={{ fontSize: '1.05rem', color: 'var(--mac-purple-dark)', fontWeight: 'bold' }}>
            Collaborative File Lock & Real-Time Sync Protocol
          </span>
        </div>

        <div style={{ display: 'flex', gap: '0.4rem' }}>
          <button
            onClick={() => setActiveTab('sim')}
            className={`mac-btn ${activeTab === 'sim' ? 'mac-btn-purple' : ''}`}
            style={{ padding: '0.2rem 0.6rem', fontSize: '1rem' }}
          >
            🕹️ Multi-Node Lock Sandbox
          </button>
          <button
            onClick={() => setActiveTab('about')}
            className={`mac-btn ${activeTab === 'about' ? 'mac-btn-pink' : ''}`}
            style={{ padding: '0.2rem 0.6rem', fontSize: '1rem' }}
          >
            💡 What CFLS is Needed For
          </button>
          <a
            href="https://github.com/greninja-op/CFLS-Collaborative-File-Lock-Sync.git"
            target="_blank"
            rel="noopener noreferrer"
            className="mac-btn mac-btn-lime"
            style={{ textDecoration: 'none', padding: '0.2rem 0.6rem', fontSize: '1rem' }}
          >
            GitHub ↗
          </a>
        </div>
      </div>

      {activeTab === 'sim' && (
        <>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '1rem' }}>
            {/* Node A */}
            <div className="mac-group-box" style={{ background: lockOwner === 'Node-A' ? 'var(--mac-yellow)' : '#fff' }}>
              <span className="mac-group-label">Developer Node A</span>
              <div style={{ marginTop: '0.75rem', display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                <div>State: <strong>{lockOwner === 'Node-A' ? '🔒 Holding File Lock' : 'Idle'}</strong></div>
                <button
                  onClick={() => acquireLock('Node-A')}
                  className="mac-btn mac-btn-purple"
                >
                  Acquire Lock (Node A)
                </button>
              </div>
            </div>

            {/* Node B */}
            <div className="mac-group-box" style={{ background: lockOwner === 'Node-B' ? 'var(--mac-yellow)' : '#fff' }}>
              <span className="mac-group-label">Developer Node B</span>
              <div style={{ marginTop: '0.75rem', display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                <div>State: <strong>{lockOwner === 'Node-B' ? '🔒 Holding File Lock' : 'Idle'}</strong></div>
                <button
                  onClick={() => acquireLock('Node-B')}
                  className="mac-btn mac-btn-pink"
                >
                  Acquire Lock (Node B)
                </button>
              </div>
            </div>
          </div>

          <div style={{ display: 'flex', justifyContent: 'center' }}>
            <button onClick={releaseLock} disabled={!lockOwner} className="mac-btn mac-btn-lime">
              🔓 Release Lock Lease
            </button>
          </div>

          {/* Sync Protocol Log */}
          <div className="mac-group-box">
            <span className="mac-group-label">gRPC & WebSockets Atomic Lock Logs</span>
            <div style={{ marginTop: '0.75rem', fontFamily: 'var(--font-mono)', fontSize: '0.95rem', display: 'flex', flexDirection: 'column', gap: '0.3rem', maxHeight: '150px', overflowY: 'auto' }}>
              {logs.map((l) => (
                <div key={l.id} style={{ color: l.err ? 'red' : l.ok ? 'green' : '#000' }}>
                  [{l.time}] {l.text}
                </div>
              ))}
            </div>
          </div>
        </>
      )}

      {activeTab === 'about' && (
        <div className="mac-group-box">
          <span className="mac-group-label">What CFLS is Needed For</span>
          <div style={{ marginTop: '0.75rem', fontFamily: 'var(--font-mac-body)', fontSize: '1rem', lineHeight: 1.6, color: '#111' }}>
            <h3 style={{ fontFamily: 'var(--font-mac-title)', fontSize: '1.4rem', color: 'var(--mac-purple-dark)', marginBottom: '0.4rem' }}>
              The Problem:
            </h3>
            <p style={{ marginBottom: '0.8rem' }}>
              In real-time multi-developer IDEs and collaborative worktrees, concurrent edits on the same source file cause dirty overwrites, git conflict lockouts, and lost changes.
            </p>
            <h3 style={{ fontFamily: 'var(--font-mac-title)', fontSize: '1.4rem', color: 'var(--mac-purple-dark)', marginBottom: '0.4rem' }}>
              CFLS Solution:
            </h3>
            <p>
              CFLS implements atomic heartbeat lease locking and WebSocket delta propagation. Developers acquire lightweight locks before mutating target files, eliminating state collisions across distributed teams.
            </p>
          </div>
        </div>
      )}
    </div>
  );
}
