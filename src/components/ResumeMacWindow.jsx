import React from 'react';
import { personalInfo, projects, skillCategories } from '../data/portfolioData';

export default function ResumeMacWindow() {
  return (
    <div style={{ fontFamily: 'var(--font-mac-title)', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
      {/* Document Header Banner */}
      <div style={{ borderBottom: '2px solid #000', paddingBottom: '0.6rem', display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
          <span style={{ fontSize: '2rem' }}>📄</span>
          <div>
            <h2 style={{ fontSize: '1.8rem', color: '#000', lineHeight: 1 }}>Resume_ArjunSabu.pdf</h2>
            <span style={{ fontSize: '1.05rem', color: 'var(--mac-purple-dark)', fontWeight: 'bold' }}>
              System 7 Document • 245 KB • Format: PDF / TextEdit
            </span>
          </div>
        </div>

        <button
          onClick={() => alert('Downloading Arjun Sabu Resume PDF...')}
          className="mac-btn mac-btn-purple"
        >
          💾 Download PDF Document ↗
        </button>
      </div>

      {/* Retro Document Sheet */}
      <div
        style={{
          background: '#ffffff',
          border: '2px solid #000',
          boxShadow: 'inset 2px 2px 0px rgba(0,0,0,0.05)',
          padding: '1.25rem',
          fontFamily: 'var(--font-mac-body)',
          lineHeight: 1.6,
          color: '#111'
        }}
      >
        <h1 style={{ fontFamily: 'var(--font-mac-title)', fontSize: '2.2rem', color: '#000', marginBottom: '0.2rem' }}>
          {personalInfo.name}
        </h1>
        <div style={{ fontFamily: 'var(--font-mac-title)', fontSize: '1.2rem', color: 'var(--mac-purple-dark)', fontWeight: 'bold', marginBottom: '1rem' }}>
          {personalInfo.title} • {personalInfo.email} • github.com/{personalInfo.handle}
        </div>

        <h3 style={{ fontFamily: 'var(--font-mac-title)', fontSize: '1.4rem', borderBottom: '2px solid #000', paddingBottom: '0.2rem', marginBottom: '0.5rem' }}>
          EXECUTIVE SUMMARY
        </h3>
        <p style={{ fontSize: '1rem', marginBottom: '1.2rem' }}>
          {personalInfo.bio}
        </p>

        <h3 style={{ fontFamily: 'var(--font-mac-title)', fontSize: '1.4rem', borderBottom: '2px solid #000', paddingBottom: '0.2rem', marginBottom: '0.5rem' }}>
          PROUD FEATURED PROJECTS
        </h3>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.8rem', marginBottom: '1.2rem' }}>
          {projects.map((p) => (
            <div key={p.id} style={{ borderLeft: '3px solid var(--mac-purple)', paddingLeft: '0.6rem' }}>
              <strong style={{ fontSize: '1.05rem', color: '#000' }}>{p.title}</strong> — <em>{p.subtitle}</em>
              <div style={{ fontSize: '0.95rem', color: '#444' }}>{p.shortDescription}</div>
              <div style={{ fontSize: '0.85rem', color: 'var(--mac-purple-dark)', fontWeight: 'bold' }}>
                Tech: {p.techStack.join(', ')} • Repo: {p.github}
              </div>
            </div>
          ))}
        </div>

        <h3 style={{ fontFamily: 'var(--font-mac-title)', fontSize: '1.4rem', borderBottom: '2px solid #000', paddingBottom: '0.2rem', marginBottom: '0.5rem' }}>
          TECHNICAL SKILLS & CAPABILITIES
        </h3>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '0.8rem' }}>
          {skillCategories.map((c, i) => (
            <div key={i} style={{ background: '#f8fafc', border: '1px solid #000', padding: '0.6rem' }}>
              <strong style={{ fontFamily: 'var(--font-mac-title)', fontSize: '1.15rem' }}>{c.name}</strong>
              <ul style={{ paddingLeft: '1rem', fontSize: '0.9rem', marginTop: '0.3rem' }}>
                {c.skills.map((s, sI) => (
                  <li key={sI}>{s.name} ({s.level}%)</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
