import React, { useState, useEffect } from 'react';
import HeroRecruiter from './HeroRecruiter';
import ProjectsRecruiter from './ProjectsRecruiter';
import SkillsRecruiter from './SkillsRecruiter';
import GithubHighlights from './GithubHighlights';
import ExperienceTimeline from './ExperienceTimeline';
import ContactFooter from './ContactFooter';
import ResumeMacWindow from './ResumeMacWindow';
import UIConfigurator from './UIConfigurator';
import { personalInfo } from '../data/portfolioData';
import { IconGithub, IconLinkedin, IconMail, IconArrowRight, IconSparkles } from './Icons';

export default function RecruiterView({ onSwitchToOS, onOpenGateway }) {
  const [showResumeModal, setShowResumeModal] = useState(false);

  // Theme & Token State
  const [theme, setTheme] = useState(() => localStorage.getItem('recruiter_theme') || 'dark');
  const [accentColor, setAccentColor] = useState(() => localStorage.getItem('recruiter_accent') || 'cyan');
  const [fontStyle, setFontStyle] = useState(() => localStorage.getItem('recruiter_font') || 'sans');
  const [borderRadius, setBorderRadius] = useState(() => localStorage.getItem('recruiter_radius') || 'smooth');

  useEffect(() => {
    localStorage.setItem('recruiter_theme', theme);
    localStorage.setItem('recruiter_accent', accentColor);
    localStorage.setItem('recruiter_font', fontStyle);
    localStorage.setItem('recruiter_radius', borderRadius);
  }, [theme, accentColor, fontStyle, borderRadius]);

  // Compute CSS Variable Maps
  const accentHex = accentColor === 'violet' ? '#8b5cf6' : accentColor === 'emerald' ? '#10b981' : accentColor === 'rose' ? '#f43f5e' : '#06b6d4';
  const fontFamilyCss = fontStyle === 'mono' ? '"Fira Code", "Courier New", monospace' : fontStyle === 'geometric' ? '"Outfit", "Trebuchet MS", sans-serif' : 'system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif';
  const radiusCss = borderRadius === 'sharp' ? '4px' : borderRadius === 'pill' ? '24px' : '14px';

  const isDark = theme === 'dark';

  return (
    <div
      style={{
        minHeight: '100vh',
        background: isDark ? '#0b0f19' : '#f8fafc',
        color: isDark ? '#f8fafc' : '#0f172a',
        fontFamily: fontFamilyCss,
        lineHeight: 1.5,
        transition: 'background 0.3s ease, color 0.3s ease',
        '--accent-primary': accentHex,
        '--text-primary': isDark ? '#ffffff' : '#0f172a',
        '--text-secondary': isDark ? '#94a3b8' : '#475569',
        '--card-bg': isDark ? '#111827' : '#ffffff',
        '--code-bg': isDark ? '#0f172a' : '#f1f5f9',
        '--border-subtle': isDark ? '#1f2937' : '#e2e8f0',
        '--pill-bg': isDark ? '#1e293b' : '#e2e8f0',
        '--badge-bg': isDark ? 'rgba(6, 182, 212, 0.15)' : 'rgba(6, 182, 212, 0.15)',
        '--badge-border': isDark ? 'rgba(6, 182, 212, 0.35)' : 'rgba(6, 182, 212, 0.4)',
        '--btn-bg-primary': accentHex,
        '--btn-bg-secondary': isDark ? '#1e293b' : '#e2e8f0',
        '--ui-radius': radiusCss,
        '--footer-bg': isDark ? '#0f172a' : '#f1f5f9'
      }}
    >
      {/* Explicit Top Header Bar with Desktop Navigation */}
      <header
        style={{
          position: 'sticky',
          top: 0,
          zIndex: 500,
          background: isDark ? '#0a0e17' : '#ffffff',
          borderBottom: '1px solid var(--border-subtle)',
          padding: '0.85rem 1.5rem',
          transition: 'background 0.3s ease'
        }}
      >
        <div
          style={{
            maxWidth: '1150px',
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
              color: 'var(--text-primary)'
            }}
          >
            <div
              style={{
                width: '38px',
                height: '38px',
                borderRadius: '10px',
                background: accentHex,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: '#fff',
                fontSize: '1.2rem',
                fontWeight: 'bold',
                boxShadow: `0 0 15px ${accentHex}55`
              }}
            >
              👔
            </div>
            <div>
              <div style={{ fontWeight: 800, fontSize: '1.1rem', color: 'var(--text-primary)', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                {personalInfo.name}
                <span
                  style={{
                    fontSize: '0.72rem',
                    padding: '0.15rem 0.5rem',
                    borderRadius: '9999px',
                    background: 'var(--badge-bg)',
                    border: '1px solid var(--badge-border)',
                    color: accentHex,
                    fontWeight: 700
                  }}
                >
                  Recruiter Mode
                </span>
              </div>
            </div>
          </a>

          {/* Explicit Desktop Navigation Links (Visible immediately, NO hamburger on desktop!) */}
          <nav
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '1.5rem'
            }}
            className="recruiter-nav-links"
          >
            <a href="#projects" style={{ color: 'var(--text-secondary)', textDecoration: 'none', fontWeight: 600, fontSize: '0.9rem' }}>
              Projects
            </a>
            <a href="#skills" style={{ color: 'var(--text-secondary)', textDecoration: 'none', fontWeight: 600, fontSize: '0.9rem' }}>
              Skills
            </a>
            <a href="#github" style={{ color: 'var(--text-secondary)', textDecoration: 'none', fontWeight: 600, fontSize: '0.9rem' }}>
              Proof of Work
            </a>
            <a href="#timeline" style={{ color: 'var(--text-secondary)', textDecoration: 'none', fontWeight: 600, fontSize: '0.9rem' }}>
              Experience
            </a>
            <a href="#contact" style={{ color: 'var(--text-secondary)', textDecoration: 'none', fontWeight: 600, fontSize: '0.9rem' }}>
              Contact
            </a>
          </nav>

          {/* Header Action Buttons */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.65rem' }}>
            {/* Theme Toggle Button */}
            <button
              onClick={() => setTheme(isDark ? 'light' : 'dark')}
              title="Toggle Light / Dark Mode"
              style={{
                padding: '0.45rem 0.75rem',
                borderRadius: '8px',
                background: 'var(--btn-bg-secondary)',
                border: '1px solid var(--border-subtle)',
                color: 'var(--text-primary)',
                fontSize: '0.85rem',
                cursor: 'pointer',
                fontWeight: 600
              }}
            >
              {isDark ? '☀️ Light' : '🌙 Dark'}
            </button>

            {/* View Resume CTA */}
            <button
              onClick={() => setShowResumeModal(true)}
              style={{
                padding: '0.45rem 0.85rem',
                borderRadius: '8px',
                background: 'var(--btn-bg-secondary)',
                border: '1px solid var(--border-subtle)',
                color: 'var(--text-primary)',
                fontWeight: 600,
                fontSize: '0.85rem',
                cursor: 'pointer'
              }}
            >
              📄 Resume
            </button>

            {/* Launch OS Button */}
            <button
              onClick={onSwitchToOS}
              style={{
                padding: '0.45rem 0.95rem',
                borderRadius: '8px',
                background: 'linear-gradient(135deg, #8b5cf6 0%, #ec4899 100%)',
                border: 'none',
                color: '#ffffff',
                fontWeight: 700,
                fontSize: '0.85rem',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                gap: '0.4rem',
                boxShadow: '0 4px 12px rgba(139, 92, 246, 0.3)'
              }}
            >
              🖥️ OS Playground <IconArrowRight size={15} />
            </button>

            {/* Change Intent Mode */}
            <button
              onClick={onOpenGateway}
              title="Change Experience Mode"
              style={{
                padding: '0.45rem 0.6rem',
                borderRadius: '8px',
                background: 'transparent',
                border: '1px solid var(--border-subtle)',
                color: 'var(--text-secondary)',
                fontSize: '0.85rem',
                cursor: 'pointer'
              }}
            >
              🔄
            </button>
          </div>
        </div>
      </header>

      {/* Main 6-Section Recruiter Layout */}
      <main>
        {/* Section 1: Above-the-Fold Hero */}
        <HeroRecruiter
          onSwitchToOS={onSwitchToOS}
          onOpenResume={() => setShowResumeModal(true)}
        />

        {/* Section 2: Featured Projects (Center Stage) */}
        <ProjectsRecruiter />

        {/* Section 3: Technical Skills Matrix (Categorized, NO skill bars) */}
        <SkillsRecruiter />

        {/* Section 4: GitHub & Open Source Highlights */}
        <GithubHighlights />

        {/* Section 5: Work Experience / Journey */}
        <ExperienceTimeline />

        {/* Section 6: Friction-Free Contact & Footer */}
        <ContactFooter />
      </main>

      {/* Live UI Configurator Floating Widget */}
      <UIConfigurator
        theme={theme}
        setTheme={setTheme}
        accentColor={accentColor}
        setAccentColor={setAccentColor}
        fontStyle={fontStyle}
        setFontStyle={setFontStyle}
        borderRadius={borderRadius}
        setBorderRadius={setBorderRadius}
      />

      {/* Resume PDF Viewer Modal */}
      {showResumeModal && (
        <div
          style={{
            position: 'fixed',
            inset: 0,
            zIndex: 10000,
            background: 'rgba(0,0,0,0.85)',
            backdropFilter: 'blur(10px)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '1.5rem'
          }}
        >
          <div
            style={{
              width: '100%',
              maxWidth: '850px',
              maxHeight: '90vh',
              overflowY: 'auto',
              background: '#ffffff',
              color: '#111111',
              borderRadius: '16px',
              padding: '2rem',
              position: 'relative',
              boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.5)'
            }}
          >
            <button
              onClick={() => setShowResumeModal(false)}
              style={{
                position: 'sticky',
                top: 0,
                float: 'right',
                background: '#000000',
                color: '#ffffff',
                border: 'none',
                borderRadius: '50%',
                width: '32px',
                height: '32px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                cursor: 'pointer',
                fontWeight: 'bold',
                zIndex: 20
              }}
            >
              ✕
            </button>
            <ResumeMacWindow />
          </div>
        </div>
      )}
    </div>
  );
}
