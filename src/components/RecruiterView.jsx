import React, { useState, useEffect } from 'react';
import HeroRecruiter from './HeroRecruiter';
import GithubProfileSection from './GithubProfileSection';
import TechStackSection from './TechStackSection';
import ProjectsShowcaseSection from './ProjectsShowcaseSection';
import ContactFooterSection from './ContactFooterSection';
import ResumeMacWindow from './ResumeMacWindow';
import { personalInfo } from '../data/portfolioData';
import { IconGithub, IconLinkedin, IconMail, IconArrowRight, IconSparkles } from './Icons';

export default function RecruiterView({ onSwitchToOS, onOpenGateway }) {
  const [showResumeModal, setShowResumeModal] = useState(false);

  // Default to Dark CyberPop OS Canvas
  const [theme, setTheme] = useState('dark');
  const [accentColor, setAccentColor] = useState('cyan');
  const [fontStyle, setFontStyle] = useState('sans');

  const accentHex = '#06b6d4';
  const fontFamilyCss = 'system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif';

  return (
    <div
      style={{
        minHeight: '100vh',
        background: '#0b0f19',
        color: '#f8fafc',
        fontFamily: fontFamilyCss,
        lineHeight: 1.5,
        '--accent-primary': accentHex,
        '--text-primary': '#ffffff',
        '--text-secondary': '#94a3b8',
        '--card-bg': '#0f172a',
        '--code-bg': '#1e293b',
        '--border-subtle': '#334155',
        '--pill-bg': '#1e293b',
        '--badge-bg': 'rgba(6, 182, 212, 0.15)',
        '--badge-border': 'rgba(6, 182, 212, 0.35)',
        '--btn-bg-primary': accentHex,
        '--btn-bg-secondary': '#1e293b',
        '--ui-radius': '14px',
        '--footer-bg': '#0f172a'
      }}
    >
      {/* RETRO CYBERPOP OS TOP NAVIGATION BAR */}
      <header
        style={{
          position: 'sticky',
          top: 0,
          zIndex: 500,
          background: '#0f172a',
          borderBottom: '2px solid #1e293b',
          padding: '0.75rem 1.5rem',
          boxShadow: '0 4px 20px rgba(0, 0, 0, 0.4)'
        }}
      >
        <div
          style={{
            maxWidth: '1180px',
            margin: '0 auto',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: '1rem'
          }}
        >
          {/* Brand Logo & Recruiter Pill */}
          <a
            href="#hero"
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '0.75rem',
              textDecoration: 'none',
              color: '#ffffff'
            }}
          >
            <div
              style={{
                width: '38px',
                height: '38px',
                borderRadius: '10px',
                background: '#06b6d4',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: '#fff',
                fontWeight: 900,
                fontSize: '1.1rem',
                boxShadow: '0 0 12px rgba(6, 186, 212, 0.4)'
              }}
            >
              ⚡
            </div>

            <div>
              <div style={{ fontWeight: 800, fontSize: '1.05rem', letterSpacing: '-0.02em', color: '#ffffff' }}>
                Arjun Sabu
              </div>
              <div style={{ fontSize: '0.72rem', color: '#06b6d4', fontWeight: 700, fontFamily: 'var(--font-mono, monospace)' }}>
                @greninja-op • SRE & AI Systems
              </div>
            </div>
          </a>

          {/* Desktop Nav Links */}
          <nav
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '1.5rem',
              fontSize: '0.88rem',
              fontWeight: 600
            }}
          >
            <a href="#github" style={{ color: '#cbd5e1', textDecoration: 'none', transition: 'color 0.2s' }} onMouseEnter={(e) => (e.currentTarget.style.color = '#38bdf8')} onMouseLeave={(e) => (e.currentTarget.style.color = '#cbd5e1')}>
              GitHub Profile
            </a>
            <a href="#tech-stack" style={{ color: '#cbd5e1', textDecoration: 'none', transition: 'color 0.2s' }} onMouseEnter={(e) => (e.currentTarget.style.color = '#38bdf8')} onMouseLeave={(e) => (e.currentTarget.style.color = '#cbd5e1')}>
              Languages & Tools
            </a>
            <a href="#projects" style={{ color: '#cbd5e1', textDecoration: 'none', transition: 'color 0.2s' }} onMouseEnter={(e) => (e.currentTarget.style.color = '#38bdf8')} onMouseLeave={(e) => (e.currentTarget.style.color = '#cbd5e1')}>
              Projects
            </a>
            <a href="#contact" style={{ color: '#cbd5e1', textDecoration: 'none', transition: 'color 0.2s' }} onMouseEnter={(e) => (e.currentTarget.style.color = '#38bdf8')} onMouseLeave={(e) => (e.currentTarget.style.color = '#cbd5e1')}>
              Contact & Socials
            </a>
          </nav>

          {/* Action CTAs */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
            <button
              onClick={() => setShowResumeModal(true)}
              style={{
                padding: '0.5rem 1rem',
                borderRadius: '8px',
                background: '#1e293b',
                border: '1px solid #334155',
                color: '#ffffff',
                fontWeight: 700,
                fontSize: '0.82rem',
                cursor: 'pointer'
              }}
            >
              📄 Resume
            </button>

            <button
              onClick={onSwitchToOS}
              style={{
                padding: '0.5rem 1.1rem',
                borderRadius: '8px',
                background: 'linear-gradient(135deg, #7c3aed 0%, #db2777 100%)',
                border: 'none',
                color: '#ffffff',
                fontWeight: 800,
                fontSize: '0.82rem',
                cursor: 'pointer',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.4rem',
                boxShadow: '0 4px 12px rgba(124, 58, 237, 0.4)'
              }}
            >
              🖥️ OS Playground ↗
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
