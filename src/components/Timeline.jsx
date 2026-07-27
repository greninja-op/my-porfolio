import React from 'react';
import { IconSparkles } from './Icons';
import { timelineEvents } from '../data/portfolioData';

export default function Timeline() {
  return (
    <section id="timeline" className="section">
      <div className="container">
        {/* Header */}
        <div className="section-header">
          <div className="section-tag">
            <IconSparkles size={16} /> Milestones & Achievements
          </div>
          <h2 className="section-title">
            Engineering <span className="gradient-text">Journey & Track Record</span>
          </h2>
          <p className="section-subtitle">
            Key milestones, hackathons, and major system implementations.
          </p>
        </div>

        {/* Timeline List */}
        <div
          style={{
            maxWidth: '800px',
            margin: '0 auto',
            position: 'relative',
            paddingLeft: '2rem'
          }}
        >
          {/* Vertical Line */}
          <div
            style={{
              position: 'absolute',
              top: '0',
              bottom: '0',
              left: '7px',
              width: '2px',
              background: 'linear-gradient(180deg, var(--accent-violet) 0%, var(--accent-cyan) 50%, transparent 100%)'
            }}
          />

          {timelineEvents.map((item, idx) => (
            <div
              key={idx}
              style={{
                position: 'relative',
                marginBottom: '2.5rem'
              }}
            >
              {/* Dot */}
              <div
                style={{
                  position: 'absolute',
                  left: '-2.35rem',
                  top: '0.25rem',
                  width: '16px',
                  height: '16px',
                  borderRadius: '50%',
                  background: idx === 0 ? 'var(--accent-violet)' : 'var(--accent-cyan)',
                  border: '3px solid var(--bg-dark)',
                  boxShadow: '0 0 12px rgba(139, 92, 246, 0.6)'
                }}
              />

              <div className="glass-card" style={{ padding: '1.5rem' }}>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '0.5rem', flexWrap: 'wrap', gap: '0.5rem' }}>
                  <span
                    style={{
                      fontFamily: 'var(--font-mono)',
                      fontSize: '0.85rem',
                      fontWeight: 600,
                      color: 'var(--accent-cyan)',
                      background: 'rgba(6, 182, 212, 0.1)',
                      padding: '0.2rem 0.6rem',
                      borderRadius: '4px'
                    }}
                  >
                    {item.year}
                  </span>
                  <span style={{ fontSize: '0.85rem', color: 'var(--text-muted)', fontWeight: 500 }}>
                    {item.role}
                  </span>
                </div>

                <h3
                  style={{
                    fontFamily: 'var(--font-heading)',
                    fontSize: '1.25rem',
                    fontWeight: 700,
                    color: 'var(--text-primary)',
                    marginBottom: '0.5rem'
                  }}
                >
                  {item.title}
                </h3>

                <p style={{ color: 'var(--text-secondary)', fontSize: '0.94rem', lineHeight: 1.6 }}>
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
