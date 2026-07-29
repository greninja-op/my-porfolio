import React, { useState } from 'react';
import HeroRecruiter from './HeroRecruiter';
import GithubProfileSection from './GithubProfileSection';
import TechStackSection from './TechStackSection';
import ProjectsShowcaseSection from './ProjectsShowcaseSection';
import ContactFooterSection from './ContactFooterSection';
import ResumeMacWindow from './ResumeMacWindow';

export default function RecruiterView({ onSwitchToOS, onOpenGateway }) {
  const [showResumeModal, setShowResumeModal] = useState(false);

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
            maxWidth: '1180px',
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
            <a href="#github" style={{ color: '#000000', textDecoration: 'none', padding: '0.2rem 0.5rem', borderRadius: '4px', background: '#e2e8f0', border: '1.5px solid #000000' }}>
              GitHub Profile
            </a>
            <a href="#tech-stack" style={{ color: '#000000', textDecoration: 'none', padding: '0.2rem 0.5rem', borderRadius: '4px', background: '#e2e8f0', border: '1.5px solid #000000' }}>
              Languages & Tools
            </a>
            <a href="#projects" style={{ color: '#000000', textDecoration: 'none', padding: '0.2rem 0.5rem', borderRadius: '4px', background: '#e2e8f0', border: '1.5px solid #000000' }}>
              Projects
            </a>
            <a href="#contact" style={{ color: '#000000', textDecoration: 'none', padding: '0.2rem 0.5rem', borderRadius: '4px', background: '#e2e8f0', border: '1.5px solid #000000' }}>
              Contact & Socials
            </a>
          </nav>

          {/* Action CTAs */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.65rem' }}>
            <button
              onClick={() => setShowResumeModal(true)}
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
              onClick={onSwitchToOS}
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

      {/* RECRUITER PORTFOLIO CONTENT SECTIONS */}
      <main>
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
    </div>
  );
}
