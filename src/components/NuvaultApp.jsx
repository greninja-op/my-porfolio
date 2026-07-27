import React, { useState } from 'react';
import { projects } from '../data/portfolioData';

export default function NuvaultApp() {
  const pData = projects.find((p) => p.id === 'nuvault') || projects[2];
  const [secretInput, setSecretInput] = useState('Confidential API Key: sk_live_99812401824');
  const [encryptedData, setEncryptedData] = useState(null);
  const [activeTab, setActiveTab] = useState('overview');

  const handleEncrypt = (e) => {
    e.preventDefault();
    if (!secretInput) return;
    const fakeCipher = Array.from({ length: 32 }, () => Math.floor(Math.random() * 16).toString(16)).join('');
    const fakeKeyHash = '0x' + Array.from({ length: 16 }, () => Math.floor(Math.random() * 16).toString(16)).join('');
    setEncryptedData({
      original: secretInput,
      ciphertext: `AES-256-GCM:${fakeCipher}`,
      keyHash: fakeKeyHash,
      time: new Date().toLocaleTimeString()
    });
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '1.2rem', fontFamily: 'var(--font-mac-title)' }}>
      {/* Top Header with Crisp Official Logo */}
      <div style={{ borderBottom: '2px solid #000', paddingBottom: '0.75rem' }}>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '0.5rem', marginBottom: '0.4rem' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.8rem' }}>
            <img
              src={pData.logoImg}
              alt="Nuvault Crisp Logo"
              style={{
                width: '52px',
                height: '52px',
                objectFit: 'contain',
                borderRadius: '8px',
                border: '2px solid #000',
                boxShadow: '2px 2px 0px #000',
                background: '#000'
              }}
              onError={(e) => {
                e.target.style.display = 'none';
              }}
            />
            <div>
              <h2 style={{ fontSize: '1.8rem', color: '#000', lineHeight: 1 }}>{pData.title}</h2>
              <span style={{ fontSize: '1.1rem', color: 'var(--mac-purple-dark)', fontWeight: 'bold' }}>
                {pData.subtitle}
              </span>
            </div>
          </div>
          <span
            style={{
              background: 'var(--mac-cyan)',
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

        {/* Action Buttons */}
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
            onClick={() => setActiveTab(activeTab === 'overview' ? 'vault' : 'overview')}
            className="mac-btn mac-btn-lime"
          >
            {activeTab === 'overview' ? '🔒 Launch Encryption Tool' : '📖 View App Overview'}
          </button>
        </div>
      </div>

      {activeTab === 'overview' ? (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
          {/* Purpose & Description Box */}
          <div className="mac-group-box">
            <span className="mac-group-label">What Nuvault is Needed For</span>
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
        /* Encryption Sandbox */
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
          <form onSubmit={handleEncrypt} className="mac-group-box">
            <span className="mac-group-label">Client-Side WebCrypto AES-256-GCM Encryption Tool</span>
            <div style={{ marginTop: '0.5rem', display: 'flex', flexDirection: 'column', gap: '0.6rem' }}>
              <input
                type="text"
                value={secretInput}
                onChange={(e) => setSecretInput(e.target.value)}
                style={{ width: '100%', padding: '0.5rem', border: '2px solid #000', borderRadius: '4px', fontFamily: 'var(--font-mono)' }}
              />
              <button type="submit" className="mac-btn mac-btn-purple">
                🔒 Encrypt Payload
              </button>
            </div>
          </form>

          {encryptedData && (
            <div className="mac-group-box" style={{ background: 'var(--mac-yellow)' }}>
              <span className="mac-group-label">Zero-Knowledge Output</span>
              <div style={{ marginTop: '0.5rem', fontFamily: 'var(--font-mono)', fontSize: '0.95rem' }}>
                <div><strong>Ciphertext:</strong> {encryptedData.ciphertext}</div>
                <div><strong>Key Hash:</strong> {encryptedData.keyHash}</div>
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
}
