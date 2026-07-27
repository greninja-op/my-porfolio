import React, { useState } from 'react';
import { projects } from '../data/portfolioData';

export default function ProjectsMacFinder({ activeExtensions = [] }) {
  const filteredProjects = activeExtensions.length > 0
    ? projects.filter((p) => p.techStack.some((tech) => activeExtensions.includes(tech)))
    : projects;

  const displayList = filteredProjects.length > 0 ? filteredProjects : projects;
  const [selectedId, setSelectedId] = useState(displayList[0].id);

  const selectedProj = displayList.find((p) => p.id === selectedId) || displayList[0];

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', fontFamily: 'var(--font-mac-title)' }}>
      {/* Finder Header Bar */}
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', borderBottom: '2px solid #000', paddingBottom: '0.5rem', flexWrap: 'wrap' }}>
        <div style={{ fontSize: '1.2rem', fontWeight: 'bold' }}>
          {displayList.length} items in "Proud Works" • {activeExtensions.length > 0 ? `Filtered by ${activeExtensions.join(', ')}` : 'System 7 Volume'}
        </div>
        <div style={{ fontSize: '1.1rem', color: 'var(--mac-purple-dark)' }}>
          System 7 Finder
        </div>
      </div>

      {/* Main Finder Split View */}
      <div style={{ display: 'grid', gridTemplateColumns: '210px 1fr', gap: '1rem' }}>
        {/* Left Item List */}
        <div className="mac-group-box" style={{ padding: '0.6rem' }}>
          <span className="mac-group-label">Applications</span>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.4rem', marginTop: '0.5rem' }}>
            {displayList.map((proj) => (
              <button
                key={proj.id}
                onClick={() => setSelectedId(proj.id)}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.5rem',
                  padding: '0.4rem 0.6rem',
                  border: '2px solid #000',
                  background: selectedId === proj.id ? 'var(--mac-purple)' : '#ffffff',
                  color: selectedId === proj.id ? '#ffffff' : '#000000',
                  boxShadow: selectedId === proj.id ? '2px 2px 0px #000' : 'none',
                  cursor: 'pointer',
                  fontFamily: 'var(--font-mac-title)',
                  fontSize: '1.1rem',
                  fontWeight: 'bold',
                  textAlign: 'left',
                  borderRadius: '4px'
                }}
              >
                <span>{proj.icon}</span>
                <span>{proj.title}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Right Detail Inspection Panel */}
        <div className="mac-group-box" style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
          <span className="mac-group-label">File Details: {selectedProj.title}</span>
          <div>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '0.5rem', marginTop: '0.4rem' }}>
              <span
                style={{
                  background: 'var(--mac-pink)',
                  color: '#fff',
                  border: '1px solid #000',
                  padding: '1px 8px',
                  fontSize: '1rem',
                  fontWeight: 'bold'
                }}
              >
                {selectedProj.badge}
              </span>
              <span style={{ fontSize: '1rem', color: '#666' }}>Kind: {selectedProj.category}</span>
            </div>

            <h3 style={{ fontSize: '1.5rem', color: '#000', marginBottom: '0.2rem' }}>
              {selectedProj.title}
            </h3>
            <p style={{ fontSize: '1.1rem', color: 'var(--mac-purple-dark)', fontWeight: 'bold', marginBottom: '0.6rem' }}>
              {selectedProj.subtitle}
            </p>

            <p style={{ fontFamily: 'var(--font-mac-body)', fontSize: '0.95rem', lineHeight: 1.5, color: '#222', marginBottom: '0.8rem' }}>
              {selectedProj.description}
            </p>

            {/* Key Capabilities */}
            <div style={{ marginBottom: '0.8rem' }}>
              <div style={{ fontWeight: 'bold', fontSize: '1.05rem', marginBottom: '0.3rem' }}>Capabilities:</div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.25rem' }}>
                {selectedProj.features.map((f, i) => (
                  <div key={i} style={{ fontSize: '0.95rem', display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                    <span style={{ color: 'var(--mac-lime)', fontWeight: 'bold' }}>•</span>
                    <span>{f}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Tech Stack Pills */}
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.4rem', marginBottom: '0.8rem' }}>
              {selectedProj.techStack.map((tech, i) => (
                <span
                  key={i}
                  style={{
                    background: 'var(--mac-cyan)',
                    border: '1px solid #000',
                    padding: '2px 6px',
                    fontSize: '0.9rem',
                    fontWeight: 'bold',
                    boxShadow: '1px 1px 0px #000'
                  }}
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Action Links */}
          <div style={{ borderTop: '2px solid #000', paddingTop: '0.6rem', display: 'flex', gap: '0.6rem', justifyContent: 'flex-end' }}>
            <a
              href={selectedProj.github}
              target="_blank"
              rel="noopener noreferrer"
              className="mac-btn mac-btn-purple"
              style={{ textDecoration: 'none' }}
            >
              📦 GitHub Repository ↗
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
