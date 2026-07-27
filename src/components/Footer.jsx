import React from 'react';
import { IconCode } from './Icons';
import { personalInfo } from '../data/portfolioData';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer
      style={{
        borderTop: '1px solid var(--border-subtle)',
        background: '#04070f',
        padding: '3rem 0 2rem 0'
      }}
    >
      <div className="container">
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '1.5rem',
            alignItems: 'center',
            justifyContent: 'space-between'
          }}
          className="footer-content"
        >
          {/* Top Row */}
          <div
            style={{
              width: '100%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              flexWrap: 'wrap',
              gap: '1rem'
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
              <div
                style={{
                  width: '32px',
                  height: '32px',
                  borderRadius: '8px',
                  background: 'linear-gradient(135deg, var(--accent-violet), var(--accent-cyan))',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center'
                }}
              >
                <IconCode size={18} color="#fff" />
              </div>
              <span style={{ fontFamily: 'var(--font-heading)', fontWeight: 700, fontSize: '1.1rem' }}>
                {personalInfo.name} <span style={{ color: 'var(--accent-cyan)' }}>@{personalInfo.handle}</span>
              </span>
            </div>

            {/* Back to top */}
            <button
              onClick={scrollToTop}
              className="btn btn-secondary btn-sm"
              style={{ padding: '0.4rem 0.8rem' }}
            >
              Back to Top ↑
            </button>
          </div>

          {/* Bottom Copyright & Tech Stack */}
          <div
            style={{
              width: '100%',
              paddingTop: '1.5rem',
              borderTop: '1px solid var(--border-subtle)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              flexWrap: 'wrap',
              gap: '1rem',
              fontSize: '0.85rem',
              color: 'var(--text-muted)'
            }}
          >
            <div>
              © {new Date().getFullYear()} Arjun Sabu (`@greninja-op`). All rights reserved.
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
              <span>Crafted with React, Vite & Modern CSS</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
