import React from 'react';
import { IconCpu, IconTerminal, IconLayers, IconCode, IconZap } from './Icons';
import { skillCategories } from '../data/portfolioData';

export default function Skills() {
  const getCategoryIcon = (categoryName) => {
    switch (categoryName) {
      case 'AI & Agent Systems':
        return <IconCpu size={20} color="var(--accent-violet)" />;
      case 'Backend & Systems':
        return <IconTerminal size={20} color="var(--accent-cyan)" />;
      case 'Frontend & UI':
        return <IconCode size={20} color="var(--accent-emerald)" />;
      default:
        return <IconLayers size={20} color="var(--accent-pink)" />;
    }
  };

  return (
    <section id="skills" className="section" style={{ background: 'rgba(255, 255, 255, 0.01)' }}>
      <div className="container">
        {/* Header */}
        <div className="section-header">
          <div className="section-tag">
            <IconZap size={16} /> Engineering Capabilities
          </div>
          <h2 className="section-title">
            Technical <span className="gradient-text">Skills & Stack</span>
          </h2>
          <p className="section-subtitle">
            Core expertise across autonomous AI systems, distributed telemetry, full-stack frameworks, and automated tooling.
          </p>
        </div>

        {/* Categories Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: '1.75rem'
          }}
        >
          {skillCategories.map((cat, idx) => (
            <div key={idx} className="glass-card" style={{ padding: '1.75rem' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1.5rem' }}>
                <div
                  style={{
                    padding: '0.5rem',
                    borderRadius: '8px',
                    background: 'rgba(255, 255, 255, 0.04)',
                    border: '1px solid var(--border-subtle)'
                  }}
                >
                  {getCategoryIcon(cat.name)}
                </div>
                <h3 style={{ fontFamily: 'var(--font-heading)', fontSize: '1.25rem', fontWeight: 700 }}>
                  {cat.name}
                </h3>
              </div>

              {/* Skills List */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1.1rem' }}>
                {cat.skills.map((skill, sIdx) => (
                  <div key={sIdx}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.35rem', fontSize: '0.9rem' }}>
                      <span style={{ color: 'var(--text-primary)', fontWeight: 500 }}>{skill.name}</span>
                      <span style={{ fontFamily: 'var(--font-mono)', color: 'var(--accent-cyan)', fontSize: '0.82rem' }}>
                        {skill.level}%
                      </span>
                    </div>

                    {/* Progress Bar */}
                    <div
                      style={{
                        width: '100%',
                        height: '6px',
                        borderRadius: '3px',
                        background: 'rgba(255, 255, 255, 0.08)',
                        overflow: 'hidden'
                      }}
                    >
                      <div
                        style={{
                          width: `${skill.level}%`,
                          height: '100%',
                          borderRadius: '3px',
                          background:
                            sIdx % 2 === 0
                              ? 'linear-gradient(90deg, var(--accent-violet), var(--accent-cyan))'
                              : 'linear-gradient(90deg, var(--accent-cyan), var(--accent-emerald))',
                          boxShadow: '0 0 10px rgba(139, 92, 246, 0.5)'
                        }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
