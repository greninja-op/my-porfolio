import React from 'react';
import { personalInfo } from '../data/portfolioData';
import { IconGithub, IconLinkedin, IconMail, IconArrowRight } from './Icons';

export default function HeroRecruiter({ onSwitchToOS, onOpenResume }) {
  return (
    <section
      id="hero"
      style={{
        padding: '3rem 0 2rem 0',
        position: 'relative'
      }}
    >
      <div style={{ maxWidth: '1080px', margin: '0 auto', padding: '0 1rem' }}>
        
        {/* MACINTOSH SYSTEM 7 WINDOW FRAME CONTAINER */}
        <div
          style={{
            background: '#ffffff',
            border: '2px solid #000000',
            borderRadius: '12px',
            overflow: 'hidden',
            boxShadow: '6px 6px 0px #000000'
          }}
        >
          {/* MAC RETRO PINSTRIPE TITLE BAR HEADER */}
          <div
            style={{
              background: 'linear-gradient(90deg, #d946ef 0%, #c084fc 50%, #e879f9 100%)',
              borderBottom: '2px solid #000000',
              padding: '0.6rem 1.25rem',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              position: 'relative'
            }}
          >
            {/* Control Dots */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.45rem', zIndex: 2 }}>
              <span style={{ width: '11px', height: '11px', borderRadius: '50%', background: '#ef4444', border: '1px solid #000000', display: 'inline-block' }} />
              <span style={{ width: '11px', height: '11px', borderRadius: '50%', background: '#f59e0b', border: '1px solid #000000', display: 'inline-block' }} />
              <span style={{ width: '11px', height: '11px', borderRadius: '50%', background: '#22c55e', border: '1px solid #000000', display: 'inline-block' }} />
            </div>

            {/* Window Title Badge */}
            <div
              style={{
                background: '#ffffff',
                border: '2px solid #000000',
                borderRadius: '4px',
                padding: '0.2rem 1rem',
                fontFamily: 'var(--font-mono, monospace)',
                fontSize: '0.85rem',
                fontWeight: 900,
                color: '#000000',
                boxShadow: '2px 2px 0 #000000',
                zIndex: 2
              }}
            >
              About Arjun Sabu (greninja-op)
            </div>

            <div style={{ fontSize: '0.78rem', fontFamily: 'var(--font-mono, monospace)', fontWeight: 900, color: '#000000', zIndex: 2 }}>
              System 7.5 OS
            </div>
          </div>

          {/* WINDOW INNER CONTENT BODY */}
          <div style={{ padding: '2rem 1.75rem', background: '#fafafa' }}>
            
            {/* YELLOW HEADER BOX: System Macintosh Info */}
            <div
              style={{
                background: '#fde047',
                border: '2px solid #000000',
                borderRadius: '8px',
                padding: '1.25rem 1.5rem',
                boxShadow: '3px 3px 0 #000000',
                marginBottom: '1.5rem',
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

              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '1rem', marginTop: '0.25rem' }}>
                <div>
                  <h1 style={{ fontSize: 'clamp(1.8rem, 3.5vw, 2.5rem)', fontWeight: 900, color: '#000000', margin: 0, fontFamily: 'var(--font-mono, monospace)', letterSpacing: '-0.02em' }}>
                    Arjun Sabu <span style={{ fontSize: '1rem', color: '#000000', opacity: 0.85 }}>@greninja-op</span>
                  </h1>
                  <div style={{ fontSize: '1.02rem', fontWeight: 800, color: '#000000', marginTop: '0.25rem', fontFamily: 'var(--font-mono, monospace)' }}>
                    AI Systems & Full-Stack Reliability Engineer
                  </div>
                </div>

                <div
                  style={{
                    background: '#c084fc',
                    border: '2px solid #000000',
                    borderRadius: '6px',
                    padding: '0.4rem 0.85rem',
                    fontWeight: 900,
                    fontSize: '0.82rem',
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
                padding: '1.25rem 1.5rem',
                boxShadow: '3px 3px 0 #000000',
                marginBottom: '1.5rem',
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

              <p style={{ fontSize: '1.02rem', color: '#000000', lineHeight: 1.6, fontWeight: 700, margin: 0, fontFamily: 'var(--font-mono, monospace)' }}>
                Passionate AI systems engineer focused on autonomous agent reliability, telemetry-driven self-healing, high-throughput distributed protocols, and zero-trust cloud vaults. Creator of ChronoLens, Nuvault, Memoire, and CFLS.
              </p>
            </div>

            {/* 4 RETRO COLORED STATS CARDS */}
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
                gap: '1.25rem',
                marginBottom: '1.5rem'
              }}
            >
              {/* Card 1: Purple */}
              <div
                style={{
                  background: '#c084fc',
                  border: '2px solid #000000',
                  borderRadius: '8px',
                  padding: '1.25rem',
                  textAlign: 'center',
                  boxShadow: '3px 3px 0 #000000'
                }}
              >
                <div style={{ fontSize: '1.8rem', fontWeight: 900, color: '#000000', fontFamily: 'var(--font-mono, monospace)' }}>
                  4 Apps
                </div>
                <div style={{ fontSize: '0.8rem', fontWeight: 800, color: '#000000', marginTop: '0.2rem', fontFamily: 'var(--font-mono, monospace)' }}>
                  Proud Core Projects
                </div>
              </div>

              {/* Card 2: Cyan */}
              <div
                style={{
                  background: '#38bdf8',
                  border: '2px solid #000000',
                  borderRadius: '8px',
                  padding: '1.25rem',
                  textAlign: 'center',
                  boxShadow: '3px 3px 0 #000000'
                }}
              >
                <div style={{ fontSize: '1.4rem', fontWeight: 900, color: '#000000', fontFamily: 'var(--font-mono, monospace)', lineHeight: 1.1 }}>
                  Agents of SigNoz Winner
                </div>
                <div style={{ fontSize: '0.8rem', fontWeight: 800, color: '#000000', marginTop: '0.3rem', fontFamily: 'var(--font-mono, monospace)' }}>
                  Hackathons
                </div>
              </div>

              {/* Card 3: Light Pink / Purple */}
              <div
                style={{
                  background: '#e879f9',
                  border: '2px solid #000000',
                  borderRadius: '8px',
                  padding: '1.25rem',
                  textAlign: 'center',
                  boxShadow: '3px 3px 0 #000000'
                }}
              >
                <div style={{ fontSize: '1.8rem', fontWeight: 900, color: '#000000', fontFamily: 'var(--font-mono, monospace)' }}>
                  99.9%
                </div>
                <div style={{ fontSize: '0.8rem', fontWeight: 800, color: '#000000', marginTop: '0.2rem', fontFamily: 'var(--font-mono, monospace)' }}>
                  Reliability Uptime
                </div>
              </div>

              {/* Card 4: Light Cyan */}
              <div
                style={{
                  background: '#7dd3fc',
                  border: '2px solid #000000',
                  borderRadius: '8px',
                  padding: '1.25rem',
                  textAlign: 'center',
                  boxShadow: '3px 3px 0 #000000'
                }}
              >
                <div style={{ fontSize: '1.8rem', fontWeight: 900, color: '#000000', fontFamily: 'var(--font-mono, monospace)' }}>
                  1,400+
                </div>
                <div style={{ fontSize: '0.8rem', fontWeight: 800, color: '#000000', marginTop: '0.2rem', fontFamily: 'var(--font-mono, monospace)' }}>
                  GitHub Commits
                </div>
              </div>
            </div>

            {/* Action Buttons Row */}
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.85rem', alignItems: 'center' }}>
              <a
                href={personalInfo.github}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  padding: '0.65rem 1.25rem',
                  borderRadius: '6px',
                  background: '#38bdf8',
                  border: '2px solid #000000',
                  boxShadow: '3px 3px 0 #000000',
                  color: '#000000',
                  fontWeight: 900,
                  fontSize: '0.88rem',
                  fontFamily: 'var(--font-mono, monospace)',
                  textDecoration: 'none',
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.45rem'
                }}
              >
                <IconGithub size={18} /> GitHub Profile
              </a>

              <button
                onClick={onOpenResume}
                style={{
                  padding: '0.65rem 1.25rem',
                  borderRadius: '6px',
                  background: '#fde047',
                  border: '2px solid #000000',
                  boxShadow: '3px 3px 0 #000000',
                  color: '#000000',
                  fontWeight: 900,
                  fontSize: '0.88rem',
                  fontFamily: 'var(--font-mono, monospace)',
                  cursor: 'pointer'
                }}
              >
                📄 View Resume (PDF)
              </button>

              <a
                href={personalInfo.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  padding: '0.65rem 1.25rem',
                  borderRadius: '6px',
                  background: '#c084fc',
                  border: '2px solid #000000',
                  boxShadow: '3px 3px 0 #000000',
                  color: '#000000',
                  fontWeight: 900,
                  fontSize: '0.88rem',
                  fontFamily: 'var(--font-mono, monospace)',
                  textDecoration: 'none',
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.45rem'
                }}
              >
                <IconLinkedin size={18} /> LinkedIn
              </a>

              <a
                href={`mailto:${personalInfo.email}`}
                style={{
                  padding: '0.65rem 1.25rem',
                  borderRadius: '6px',
                  background: '#4ade80',
                  border: '2px solid #000000',
                  boxShadow: '3px 3px 0 #000000',
                  color: '#000000',
                  fontWeight: 900,
                  fontSize: '0.88rem',
                  fontFamily: 'var(--font-mono, monospace)',
                  textDecoration: 'none',
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.45rem'
                }}
              >
                <IconMail size={18} /> Direct Email
              </a>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
