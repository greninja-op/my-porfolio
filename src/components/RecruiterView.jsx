import React, { useState } from 'react';
import HeroRecruiter from './HeroRecruiter';
import GithubProfileSection from './GithubProfileSection';
import TechStackSection from './TechStackSection';
import ProjectsShowcaseSection from './ProjectsShowcaseSection';
import ContactFooterSection from './ContactFooterSection';
import ResumeMacWindow from './ResumeMacWindow';
import { toggleSound, isSoundEnabled, playRetroClick } from '../utils/sound';

export default function RecruiterView({ onSwitchToOS, onOpenGateway }) {
  const [showResumeModal, setShowResumeModal] = useState(false);
  const [soundOn, setSoundOn] = useState(isSoundEnabled());

  const handleSoundToggle = () => {
    const newState = toggleSound();
    setSoundOn(newState);
    if (newState) playRetroClick();
  };

  return (
    <div
      style={{
        minHeight: '100vh',
        background: '#6366f1',
        backgroundImage: 'radial-gradient(rgba(255, 255, 255, 0.45) 2.5px, transparent 2.5px)',
        backgroundSize: '20px 20px',
        color: '#000000',
        fontFamily: 'system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
        lineHeight: 1.5,
        paddingBottom: '4rem',
        overflowX: 'hidden'
      }}
    >
      {/* MACINTOSH SYSTEM 7 TOP MENU BAR (MOBILE RESPONSIVE) */}
      <header
        style={{
          position: 'sticky',
          top: 0,
          zIndex: 500,
          background: '#ffffff',
          borderBottom: '2px solid #000000',
          padding: '0.4rem 0.85rem',
          boxShadow: '0 4px 0 #000000'
        }}
      >
        <div
          style={{
            maxWidth: '1080px',
            width: '100%',
            margin: '0 auto',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            flexWrap: 'wrap',
            gap: '0.5rem'
          }}
        >
          {/* Brand Logo & Title */}
          <a
            href="#hero"
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '0.5rem',
              textDecoration: 'none',
              color: '#000000'
            }}
          >
            <div
              style={{
                width: '30px',
                height: '30px',
                borderRadius: '6px',
                background: '#fde047',
                border: '2px solid #000000',
                boxShadow: '2px 2px 0 #000000',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: '#000000',
                fontWeight: 900,
                fontSize: '0.9rem'
              }}
            >
              🍎
            </div>

            <div style={{ fontWeight: 900, fontSize: '0.95rem', letterSpacing: '-0.02em', color: '#000000', fontFamily: 'var(--font-mono, monospace)' }}>
              Arjun Sabu
            </div>
          </a>

          {/* Desktop Nav Links (Hidden on small mobile screens via CSS) */}
          <nav
            style={{
              alignItems: 'center',
              gap: '0.85rem',
              fontSize: '0.82rem',
              fontWeight: 800,
              fontFamily: 'var(--font-mono, monospace)'
            }}
            className="desktop-nav-links"
          >
            <a href="#github" onClick={() => playRetroClick()} style={{ color: '#000000', textDecoration: 'none', padding: '0.2rem 0.45rem', borderRadius: '4px', background: '#e2e8f0', border: '1.5px solid #000000' }}>
              GitHub
            </a>
            <a href="#tech-stack" onClick={() => playRetroClick()} style={{ color: '#000000', textDecoration: 'none', padding: '0.2rem 0.45rem', borderRadius: '4px', background: '#e2e8f0', border: '1.5px solid #000000' }}>
              Toolset
            </a>
            <a href="#projects" onClick={() => playRetroClick()} style={{ color: '#000000', textDecoration: 'none', padding: '0.2rem 0.45rem', borderRadius: '4px', background: '#e2e8f0', border: '1.5px solid #000000' }}>
              Projects
            </a>
            <a href="#contact" onClick={() => playRetroClick()} style={{ color: '#000000', textDecoration: 'none', padding: '0.2rem 0.45rem', borderRadius: '4px', background: '#e2e8f0', border: '1.5px solid #000000' }}>
              Contact
            </a>
          </nav>

          {/* Action CTAs & Sound Toggle */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.45rem', flexWrap: 'wrap' }}>
            <button
              onClick={handleSoundToggle}
              title={soundOn ? 'Sound FX On' : 'Sound FX Muted'}
              style={{
                padding: '0.3rem 0.55rem',
                borderRadius: '6px',
                background: soundOn ? '#4ade80' : '#e2e8f0',
                border: '2px solid #000000',
                boxShadow: '2px 2px 0 #000000',
                color: '#000000',
                fontWeight: 900,
                fontSize: '0.78rem',
                fontFamily: 'var(--font-mono, monospace)',
                cursor: 'pointer'
              }}
            >
              {soundOn ? '🔊 Sound' : '🔇 Muted'}
            </button>

            <button
              onClick={() => {
                playRetroClick();
                setShowResumeModal(true);
              }}
              style={{
                padding: '0.3rem 0.75rem',
                borderRadius: '6px',
                background: '#38bdf8',
                border: '2px solid #000000',
                boxShadow: '2px 2px 0 #000000',
                color: '#000000',
                fontWeight: 900,
                fontSize: '0.78rem',
                fontFamily: 'var(--font-mono, monospace)',
                cursor: 'pointer'
              }}
            >
              📄 Resume
            </button>

            <button
              onClick={() => {
                playRetroClick();
                onSwitchToOS();
              }}
              style={{
                padding: '0.3rem 0.85rem',
                borderRadius: '6px',
                background: '#c084fc',
                border: '2px solid #000000',
                boxShadow: '2px 2px 0 #000000',
                color: '#000000',
                fontWeight: 900,
                fontSize: '0.78rem',
                fontFamily: 'var(--font-mono, monospace)',
                cursor: 'pointer',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.3rem'
              }}
            >
              🎛️ OS Mode ↗
            </button>
          </div>
        </div>
      </header>

      {/* RECRUITER PORTFOLIO CONTENT */}
      <main style={{ marginTop: '1.5rem', width: '100%', overflowX: 'hidden' }}>
        <HeroRecruiter
          onSwitchToOS={onSwitchToOS}
          onOpenResume={() => setShowResumeModal(true)}
        />

        <GithubProfileSection />

        <TechStackSection />

        <ProjectsShowcaseSection />

        <ContactFooterSection />
      </main>

      {/* Resume Modal */}
      {showResumeModal && (
        <ResumeMacWindow onClose={() => setShowResumeModal(false)} />
      )}

      {/* Responsive Style Overrides */}
      <style>{`
        .desktop-nav-links {
          display: flex;
        }
        @media (max-width: 768px) {
          .desktop-nav-links {
            display: none !important;
          }
        }
      `}</style>
    </div>
  );
}
