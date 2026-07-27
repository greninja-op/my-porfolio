import React from 'react';
import { personalInfo } from '../data/portfolioData';

export default function AboutMacHeroWindow({ onOpenApp }) {
  return (
    <div style={{ fontFamily: 'var(--font-mac-title)' }}>
      {/* Top Banner */}
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', borderBottom: '2px solid #000', paddingBottom: '0.75rem', marginBottom: '1.25rem' }}>
        <div>
          <h1 style={{ fontSize: '2.2rem', color: '#000', lineHeight: 1.1 }}>
            Welcome to <span style={{ color: 'var(--mac-purple-dark)' }}>{personalInfo.name}</span> System 7 OS
          </h1>
          <span style={{ fontSize: '1.2rem', color: 'var(--mac-pink)', fontWeight: 'bold' }}>
            @{personalInfo.handle} • AI Systems & Full-Stack Reliability Engineer
          </span>
        </div>
        <span
          style={{
            background: 'var(--mac-lime)',
            border: '2px solid #000',
            boxShadow: '3px 3px 0px #000',
            padding: '4px 10px',
            fontSize: '1.15rem',
            fontWeight: 'bold'
          }}
        >
          Agents of SigNoz Entrant
        </span>
      </div>

      <p style={{ fontFamily: 'var(--font-mac-body)', fontSize: '1.15rem', lineHeight: 1.6, color: '#111', marginBottom: '1.5rem' }}>
        {personalInfo.tagline}
      </p>

      {/* System Metrics Grid */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(130px, 1fr))', gap: '1rem', marginBottom: '1.75rem' }}>
        {personalInfo.stats.map((stat, idx) => (
          <div
            key={idx}
            style={{
              background: idx % 2 === 0 ? 'var(--mac-purple)' : 'var(--mac-cyan)',
              color: idx % 2 === 0 ? '#fff' : '#000',
              border: '2px solid #000',
              boxShadow: '3px 3px 0px #000',
              padding: '0.75rem',
              textAlign: 'center'
            }}
          >
            <div style={{ fontSize: '1.8rem', fontWeight: 'bold' }}>{stat.value}</div>
            <div style={{ fontSize: '0.95rem', fontWeight: 'bold' }}>{stat.label}</div>
          </div>
        ))}
      </div>

      {/* Action Buttons */}
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.75rem' }}>
        <button onClick={() => onOpenApp('projects')} className="mac-btn mac-btn-purple">
          📁 Open Projects.finder
        </button>
        <button onClick={() => onOpenApp('chronolens')} className="mac-btn mac-btn-pink">
          ⚡ Launch ChronoLens.app
        </button>
        <button onClick={() => onOpenApp('terminal')} className="mac-btn mac-btn-lime">
          💻 Open Terminal.cli
        </button>
        <button onClick={() => onOpenApp('contact')} className="mac-btn">
          ✉️ Send Mail.dialog
        </button>
      </div>
    </div>
  );
}
