import React from 'react';
import { personalInfo } from '../data/portfolioData';
import { IconGithub, IconLinkedin, IconMail } from './Icons';
import MacWindowWrapper from './MacWindowWrapper';
import { playRetroClick } from '../utils/sound';

export default function HeroRecruiter({ onSwitchToOS, onOpenResume }) {
  return (
    <section id="hero">
      <MacWindowWrapper
        title="About Arjun Sabu (greninja-op)"
        badgeText="System 7.5 OS"
      >
        {/* YELLOW HEADER BOX: System Macintosh Info */}
        <div
          style={{
            background: '#fde047',
            border: '2px solid #000000',
            borderRadius: '8px',
            padding: '1.1rem 1.25rem',
            boxShadow: '3px 3px 0 #000000',
            marginBottom: '1.25rem',
            position: 'relative'
          }}
        >
          <div
            style={{
              position: 'absolute',
              top: '-12px',
              left: '16px',
              background: '#ffffff',
              border: '1.5px solid #000000',
              borderRadius: '4px',
              padding: '0.1rem 0.5rem',
              fontSize: '0.72rem',
              fontWeight: 900,
              fontFamily: 'var(--font-mono, monospace)',
              color: '#000000'
            }}
          >
            System Macintosh Info
          </div>

          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '0.85rem', marginTop: '0.25rem' }}>
            <div>
              <h1 style={{ fontSize: 'clamp(1.5rem, 4vw, 2.5rem)', fontWeight: 900, color: '#000000', margin: 0, fontFamily: 'var(--font-mono, monospace)', letterSpacing: '-0.02em' }}>
                Arjun Sabu <span style={{ fontSize: '0.9rem', color: '#000000', opacity: 0.85 }}>@greninja-op</span>
              </h1>
              <div style={{ fontSize: '0.95rem', fontWeight: 800, color: '#000000', marginTop: '0.25rem', fontFamily: 'var(--font-mono, monospace)' }}>
                AI Systems & Full-Stack Reliability Engineer
              </div>
            </div>

            <div
              style={{
                background: '#c084fc',
                border: '2px solid #000000',
                borderRadius: '6px',
                padding: '0.35rem 0.75rem',
                fontWeight: 900,
                fontSize: '0.78rem',
                fontFamily: 'var(--font-mono, monospace)',
                boxShadow: '2px 2px 0 #000000'
              }}
            >
              Built on System 7 OS
            </div>
          </div>
        </div>

        {/* WHITE BIO BOX: Engineering Bio & Principles */}
        <div
          style={{
            background: '#ffffff',
            border: '2px solid #000000',
            borderRadius: '8px',
            padding: '1.1rem 1.25rem',
            boxShadow: '3px 3px 0 #000000',
            marginBottom: '1.25rem',
            position: 'relative'
          }}
        >
          <div
            style={{
              position: 'absolute',
              top: '-12px',
              left: '16px',
              background: '#ffffff',
              border: '1.5px solid #000000',
              borderRadius: '4px',
              padding: '0.1rem 0.5rem',
              fontSize: '0.72rem',
              fontWeight: 900,
              fontFamily: 'var(--font-mono, monospace)',
              color: '#000000'
            }}
          >
            Engineering Bio & Principles
          </div>

          <p style={{ fontSize: '0.95rem', color: '#000000', lineHeight: 1.55, fontWeight: 700, margin: 0, fontFamily: 'var(--font-mono, monospace)' }}>
            Passionate AI systems engineer focused on autonomous agent reliability, telemetry-driven self-healing, high-throughput distributed protocols, and zero-trust cloud vaults. Creator of ChronoLens, Nuvault, Memoire, and CFLS.
          </p>
        </div>

        {/* 4 RETRO COLORED STATS CARDS (2x2 Grid on Mobile) */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(135px, 1fr))',
            gap: '0.85rem',
            marginBottom: '1.25rem'
          }}
        >
          {/* Card 1: Purple */}
          <div
            style={{
              background: '#c084fc',
              border: '2px solid #000000',
              borderRadius: '8px',
              padding: '1rem 0.75rem',
              textAlign: 'center',
              boxShadow: '3px 3px 0 #000000'
            }}
          >
            <div style={{ fontSize: '1.5rem', fontWeight: 900, color: '#000000', fontFamily: 'var(--font-mono, monospace)' }}>
              4 Apps
            </div>
            <div style={{ fontSize: '0.75rem', fontWeight: 800, color: '#000000', marginTop: '0.2rem', fontFamily: 'var(--font-mono, monospace)' }}>
              Proud Core Projects
            </div>
          </div>

          {/* Card 2: Cyan */}
          <div
            style={{
              background: '#38bdf8',
              border: '2px solid #000000',
              borderRadius: '8px',
              padding: '1rem 0.75rem',
              textAlign: 'center',
              boxShadow: '3px 3px 0 #000000'
            }}
          >
            <div style={{ fontSize: '1.2rem', fontWeight: 900, color: '#000000', fontFamily: 'var(--font-mono, monospace)', lineHeight: 1.1 }}>
              Agents of SigNoz Winner
            </div>
            <div style={{ fontSize: '0.75rem', fontWeight: 800, color: '#000000', marginTop: '0.2rem', fontFamily: 'var(--font-mono, monospace)' }}>
              Hackathons
            </div>
          </div>

          {/* Card 3: Light Pink / Purple */}
          <div
            style={{
              background: '#e879f9',
              border: '2px solid #000000',
              borderRadius: '8px',
              padding: '1rem 0.75rem',
              textAlign: 'center',
              boxShadow: '3px 3px 0 #000000'
            }}
          >
            <div style={{ fontSize: '1.5rem', fontWeight: 900, color: '#000000', fontFamily: 'var(--font-mono, monospace)' }}>
              99.9%
            </div>
            <div style={{ fontSize: '0.75rem', fontWeight: 800, color: '#000000', marginTop: '0.2rem', fontFamily: 'var(--font-mono, monospace)' }}>
              Reliability Uptime
            </div>
          </div>

          {/* Card 4: Light Cyan */}
          <div
            style={{
              background: '#7dd3fc',
              border: '2px solid #000000',
              borderRadius: '8px',
              padding: '1rem 0.75rem',
              textAlign: 'center',
              boxShadow: '3px 3px 0 #000000'
            }}
          >
            <div style={{ fontSize: '1.5rem', fontWeight: 900, color: '#000000', fontFamily: 'var(--font-mono, monospace)' }}>
              1,400+
            </div>
            <div style={{ fontSize: '0.75rem', fontWeight: 800, color: '#000000', marginTop: '0.2rem', fontFamily: 'var(--font-mono, monospace)' }}>
              GitHub Commits
            </div>
          </div>
        </div>

        {/* Action Buttons Row (Responsive Flex Wrap) */}
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.65rem', alignItems: 'center' }}>
          <a
            href={personalInfo.github}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => playRetroClick()}
            style={{
              padding: '0.6rem 1rem',
              borderRadius: '6px',
              background: '#38bdf8',
              border: '2px solid #000000',
              boxShadow: '3px 3px 0 #000000',
              color: '#000000',
              fontWeight: 900,
              fontSize: '0.85rem',
              fontFamily: 'var(--font-mono, monospace)',
              textDecoration: 'none',
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.4rem',
              flex: '1 1 auto',
              justifyContent: 'center',
              minHeight: '42px'
            }}
          >
            <IconGithub size={17} /> GitHub
          </a>

          <button
            onClick={() => {
              playRetroClick();
              onOpenResume();
            }}
            style={{
              padding: '0.6rem 1rem',
              borderRadius: '6px',
              background: '#fde047',
              border: '2px solid #000000',
              boxShadow: '3px 3px 0 #000000',
              color: '#000000',
              fontWeight: 900,
              fontSize: '0.85rem',
              fontFamily: 'var(--font-mono, monospace)',
              cursor: 'pointer',
              flex: '1 1 auto',
              justifyContent: 'center',
              minHeight: '42px'
            }}
          >
            📄 Resume (PDF)
          </button>

          <a
            href={personalInfo.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => playRetroClick()}
            style={{
              padding: '0.6rem 1rem',
              borderRadius: '6px',
              background: '#c084fc',
              border: '2px solid #000000',
              boxShadow: '3px 3px 0 #000000',
              color: '#000000',
              fontWeight: 900,
              fontSize: '0.85rem',
              fontFamily: 'var(--font-mono, monospace)',
              textDecoration: 'none',
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.4rem',
              flex: '1 1 auto',
              justifyContent: 'center',
              minHeight: '42px'
            }}
          >
            <IconLinkedin size={17} /> LinkedIn
          </a>

          <a
            href={`mailto:${personalInfo.email}`}
            onClick={() => playRetroClick()}
            style={{
              padding: '0.6rem 1rem',
              borderRadius: '6px',
              background: '#4ade80',
              border: '2px solid #000000',
              boxShadow: '3px 3px 0 #000000',
              color: '#000000',
              fontWeight: 900,
              fontSize: '0.85rem',
              fontFamily: 'var(--font-mono, monospace)',
              textDecoration: 'none',
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.4rem',
              flex: '1 1 auto',
              justifyContent: 'center',
              minHeight: '42px'
            }}
          >
            <IconMail size={17} /> Email
          </a>
        </div>
      </MacWindowWrapper>
    </section>
  );
}
