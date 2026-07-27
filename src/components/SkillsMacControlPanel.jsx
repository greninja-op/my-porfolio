import React from 'react';
import { skillCategories } from '../data/portfolioData';

export default function SkillsMacControlPanel() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem', fontFamily: 'var(--font-mac-title)' }}>
      <div style={{ borderBottom: '2px solid #000', paddingBottom: '0.5rem' }}>
        <h2 style={{ fontSize: '1.6rem', color: '#000' }}>🎛️ Control Panel — Engineering Capabilities</h2>
        <span style={{ fontSize: '1.1rem', color: 'var(--mac-purple-dark)' }}>System 7 Capability & Tech Stack Settings</span>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '1.25rem' }}>
        {skillCategories.map((cat, idx) => (
          <div key={idx} className="mac-group-box">
            <span className="mac-group-label">{cat.name}</span>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.9rem', marginTop: '0.75rem' }}>
              {cat.skills.map((skill, sIdx) => (
                <div key={sIdx}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '1.1rem', fontWeight: 'bold', marginBottom: '0.2rem' }}>
                    <span>{skill.name}</span>
                    <span style={{ color: 'var(--mac-purple-dark)' }}>{skill.level}%</span>
                  </div>
                  {/* Retro Gauge Bar */}
                  <div
                    style={{
                      height: '10px',
                      background: '#e2e8f0',
                      border: '2px solid #000',
                      borderRadius: '4px',
                      overflow: 'hidden'
                    }}
                  >
                    <div
                      style={{
                        width: `${skill.level}%`,
                        height: '100%',
                        background:
                          sIdx % 3 === 0
                            ? 'var(--mac-purple)'
                            : sIdx % 3 === 1
                            ? 'var(--mac-pink)'
                            : 'var(--mac-cyan)',
                        borderRight: '1px solid #000'
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
  );
}
