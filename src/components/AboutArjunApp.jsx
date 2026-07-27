import React from 'react';
import { personalInfo } from '../data/portfolioData';

export default function AboutArjunApp({ onOpenApp }) {
  return (
    <div style={{ fontFamily: 'var(--font-mac-title)' }}>
      {/* Macintosh System Info Box */}
      <div className="mac-group-box" style={{ background: 'var(--mac-yellow)', marginBottom: '1.25rem' }}>
        <span className="mac-group-label">System Macintosh Info</span>
        <div style={{ marginTop: '0.5rem', display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap' }}>
          <div>
            <h1 style={{ fontSize: '2rem', color: '#000', lineHeight: 1.1 }}>
              {personalInfo.name} <span style={{ fontSize: '1.2rem', color: 'var(--mac-purple-dark)' }}>@{personalInfo.handle}</span>
            </h1>
            <div style={{ fontSize: '1.15rem', fontWeight: 'bold' }}>{personalInfo.title}</div>
          </div>
          <div style={{ background: 'var(--mac-purple)', color: '#fff', border: '2px solid #000', padding: '4px 10px', fontSize: '1.1rem', fontWeight: 'bold', boxShadow: '2px 2px 0px #000' }}>
            Built on System 7 OS
          </div>
        </div>
      </div>

      <div className="mac-group-box" style={{ marginBottom: '1.25rem' }}>
        <span className="mac-group-label">Engineering Bio & Principles</span>
        <p style={{ fontFamily: 'var(--font-mac-body)', fontSize: '1.05rem', lineHeight: 1.6, color: '#111', marginTop: '0.5rem' }}>
          {personalInfo.bio}
        </p>
      </div>

      {/* Metrics Row */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(130px, 1fr))', gap: '0.75rem', marginBottom: '1.25rem' }}>
        {personalInfo.stats.map((s, i) => (
          <div key={i} style={{ background: i % 2 === 0 ? 'var(--mac-purple)' : 'var(--mac-cyan)', color: i % 2 === 0 ? '#fff' : '#000', border: '2px solid #000', padding: '0.6rem', textAlign: 'center', boxShadow: '2px 2px 0px #000' }}>
            <div style={{ fontSize: '1.6rem', fontWeight: 'bold' }}>{s.value}</div>
            <div style={{ fontSize: '0.9rem', fontWeight: 'bold' }}>{s.label}</div>
          </div>
        ))}
      </div>

      {/* Quick Launch Shortcuts */}
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.6rem' }}>
        <button onClick={() => onOpenApp('chronolens')} className="mac-btn mac-btn-pink">⚡ ChronoLens.app</button>
        <button onClick={() => onOpenApp('memoire')} className="mac-btn mac-btn-purple">🧠 Memoire.app</button>
        <button onClick={() => onOpenApp('nuvault')} className="mac-btn mac-btn-cyan">🔐 Nuvault.app</button>
        <button onClick={() => onOpenApp('cfls')} className="mac-btn mac-btn-lime">🔒 CFLS.app</button>
      </div>
    </div>
  );
}
