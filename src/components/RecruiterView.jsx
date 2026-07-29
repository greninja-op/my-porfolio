import React, { useState } from 'react';
import HeroRecruiter from './HeroRecruiter';
import GithubProfileSection from './GithubProfileSection';
import TechStackSection from './TechStackSection';
import ProjectsShowcaseSection from './ProjectsShowcaseSection';
import ContactFooterSection from './ContactFooterSection';
import ResumeMacWindow from './ResumeMacWindow';
import MacDeskAccessories from './MacDeskAccessories';
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
        paddingBottom: '4rem'
      }}
    >
      {/* MACINTOSH SYSTEM 7 TOP MENU BAR */}
      <header
        style={{
          position: 'sticky',
          top: 0,
          zIndex: 500,
          background: '#ffffff',
          borderBottom: '2px solid #000000',
          padding: '0.4rem 1.25rem',
          boxShadow: '0 4px 0 #000000',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between'
        }}
      >
        <div
          style={{
            maxWidth: '1380px',
            width: '100%',
            margin: '0 auto',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: '1rem'
          }}
        >
          {/* Brand Logo & Title */}
          <a
            href="#hero"
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '0.65rem',
              textDecoration: 'none',
              color: '#000000'
            }}
          >
            <div
              style={{
                width: '32px',
                height: '32px',
                borderRadius: '6px',
                background: '#fde047',
                border: '2px solid #000000',
                boxShadow: '2px 2px 0 #000000',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: '#000000',
                fontWeight: 900,
                fontSize: '1rem'
              }}
            >
              🍎
            </div>

            <div>
              <div style={{ fontWeight: 900, fontSize: '1rem', letterSpacing: '-0.02em', color: '#000000', fontFamily: 'var(--font-mono, monospace)' }}>
                Arjun Sabu (greninja-op)
              </div>
            </div>
          </a>

          {/* Desktop Nav Links */}
          <nav
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '1.25rem',
              fontSize: '0.85rem',
              fontWeight: 800,
              fontFamily: 'var(--font-mono, monospace)'
            }}
          >
            <a href="#github" onClick={() => playRetroClick()} style={{ color: '#000000', textDecoration: 'none', padding: '0.2rem 0.5rem', borderRadius: '4px', background: '#e2e8f0', border: '1.5px solid #000000' }}>
              GitHub Profile
            </a>
            <a href="#tech-stack" onClick={() => playRetroClick()} style={{ color: '#000000', textDecoration: 'none', padding: '0.2rem 0.5rem', borderRadius: '4px', background: '#e2e8f0', border: '1.5px solid #000000' }}>
              Languages & Tools
            </a>
            <a href="#projects" onClick={() => playRetroClick()} style={{ color: '#000000', textDecoration: 'none', padding: '0.2rem 0.5rem', borderRadius: '4px', background: '#e2e8f0', border: '1.5px solid #000000' }}>
              Projects
            </a>
            <a href="#contact" onClick={() => playRetroClick()} style={{ color: '#000000', textDecoration: 'none', padding: '0.2rem 0.5rem', borderRadius: '4px', background: '#e2e8f0', border: '1.5px solid #000000' }}>
              Contact & Socials
            </a>
          </nav>

          {/* Action CTAs & Sound Toggle */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.65rem' }}>
            <button
              onClick={handleSoundToggle}
              title={soundOn ? 'Sound FX On' : 'Sound FX Muted'}
              style={{
                padding: '0.35rem 0.65rem',
                borderRadius: '6px',
                background: soundOn ? '#4ade80' : '#e2e8f0',
                border: '2px solid #000000',
                boxShadow: '2px 2px 0 #000000',
                color: '#000000',
                fontWeight: 900,
                fontSize: '0.82rem',
                fontFamily: 'var(--font-mono, monospace)',
                cursor: 'pointer'
              }}
            >
              {soundOn ? '🔊 Sound: ON' : '🔇 Sound: OFF'}
            </button>

            <button
              onClick={() => {
                playRetroClick();
                setShowResumeModal(true);
              }}
              style={{
                padding: '0.35rem 0.85rem',
                borderRadius: '6px',
                background: '#38bdf8',
                border: '2px solid #000000',
                boxShadow: '2px 2px 0 #000000',
                color: '#000000',
                fontWeight: 900,
                fontSize: '0.82rem',
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
                padding: '0.35rem 0.95rem',
                borderRadius: '6px',
                background: '#c084fc',
                border: '2px solid #000000',
                boxShadow: '2px 2px 0 #000000',
                color: '#000000',
                fontWeight: 900,
                fontSize: '0.82rem',
                fontFamily: 'var(--font-mono, monospace)',
                cursor: 'pointer',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.35rem'
              }}
            >
              🎛️ OS Playground ↗
            </button>
          </div>
        </div>
      </header>

      {/* RECRUITER PORTFOLIO CONTENT & SIDEBAR LAYOUT */}
      <div
        style={{
          maxWidth: '1380px',
          margin: '2rem auto 0 auto',
          padding: '0 1rem',
          display: 'flex',
          gap: '1.75rem',
          alignItems: 'flex-start'
        }}
      >
        {/* LEFT SIDEBAR: MACINTOSH DESK ACCESSORIES */}
        <aside style={{ display: 'none', minWidth: '260px' }} className="mac-desk-sidebar">
          <MacDeskAccessories />
        </aside>

        {/* MAIN PORTFOLIO CONTENT */}
        <main style={{ flex: 1, width: '100%', minWidth: 0 }}>
          <HeroRecruiter
            onSwitchToOS={onSwitchToOS}
            onOpenResume={() => setShowResumeModal(true)}
          />

          <GithubProfileSection />

          <TechStackSection />

          <ProjectsShowcaseSection />

          <ContactFooterSection />
        </main>
      </div>

      {/* Resume Modal */}
      {showResumeModal && (
        <ResumeMacWindow onClose={() => setShowResumeModal(false)} />
      )}

      {/* Responsive Media Query for Mac Desk Accessories */}
      <style>{`
        @media (min-width: 1200px) {
          .mac-desk-sidebar {
            display: block !important;
          }
        }
      `}</style>
    </div>
  );
}
