import React from 'react';
import { personalInfo } from '../data/portfolioData';
import { IconGithub, IconLinkedin, IconMail, IconArrowRight } from './Icons';

export default function HeroRecruiter({ onSwitchToOS, onOpenResume }) {
  return (
    <section
      id="hero"
      style={{
        padding: '3.5rem 0 2rem 0',
        position: 'relative'
      }}
    >
      <div style={{ maxWidth: '1180px', margin: '0 auto', padding: '0 1rem' }}>
        
        {/* OS PLAYGROUND WINDOW FRAME CONTAINER */}
        <div
          style={{
            background: 'var(--card-bg, #ffffff)',
            border: '2px solid var(--border-subtle, #cbd5e1)',
            borderRadius: '16px',
            overflow: 'hidden',
            boxShadow: '0 12px 35px rgba(0, 0, 0, 0.08)'
          }}
        >
          {/* OS RETRO TITLE BAR HEADER */}
          <div
            style={{
              background: 'var(--code-bg, #f1f5f9)',
              borderBottom: '2px solid var(--border-subtle, #cbd5e1)',
              padding: '0.65rem 1.25rem',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between'
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <span style={{ width: '10px', height: '10px', borderRadius: '50%', background: '#ef4444', display: 'inline-block' }} />
              <span style={{ width: '10px', height: '10px', borderRadius: '50%', background: '#f59e0b', display: 'inline-block' }} />
              <span style={{ width: '10px', height: '10px', borderRadius: '50%', background: '#22c55e', display: 'inline-block' }} />
            </div>

            <div
              style={{
                fontFamily: 'var(--font-mono, monospace)',
                fontSize: '0.82rem',
                fontWeight: 800,
                color: 'var(--text-primary, #0f172a)',
                letterSpacing: '0.05em'
              }}
            >
              ARCHITECT_PORTFOLIO.SYS — System 7.5
            </div>

            <div style={{ fontSize: '0.75rem', fontFamily: 'var(--font-mono, monospace)', color: 'var(--text-secondary, #64748b)', fontWeight: 700 }}>
              [RECRUITER_MODE]
            </div>
          </div>

          {/* WINDOW INNER BODY */}
          <div style={{ padding: '2rem 1.75rem' }}>
            
            {/* Status Badge */}
            <div
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.5rem',
                padding: '0.35rem 0.85rem',
                borderRadius: '20px',
                background: 'rgba(34, 197, 94, 0.1)',
                border: '1px solid rgba(34, 197, 94, 0.25)',
                color: '#166534',
                fontSize: '0.82rem',
                fontWeight: 700,
                fontFamily: 'var(--font-mono, monospace)',
                marginBottom: '1.25rem'
              }}
            >
              <span
                style={{
                  width: '7px',
                  height: '7px',
                  borderRadius: '50%',
                  background: '#22c55e',
                  boxShadow: '0 0 6px #22c55e'
                }}
              />
              Agents of SigNoz Winner • Open for High-Impact Engineering Roles
            </div>

            {/* Headline */}
            <h1
              style={{
                fontFamily: 'var(--font-heading, system-ui, sans-serif)',
                fontSize: 'clamp(2.2rem, 4.5vw, 3.4rem)',
                fontWeight: 800,
                color: 'var(--text-primary, #0f172a)',
                lineHeight: 1.15,
                marginBottom: '1rem',
                letterSpacing: '-0.025em'
              }}
            >
              Full-Stack Engineer Specializing in{' '}
              <span style={{ color: '#0284c7' }}>
                AI Systems, Telemetry & Distributed Infrastructure
              </span>
            </h1>

            {/* Elevator Pitch */}
            <p
              style={{
                fontSize: 'clamp(1rem, 2vw, 1.15rem)',
                color: 'var(--text-secondary, #64748b)',
                lineHeight: 1.6,
                maxWidth: '780px',
                marginBottom: '2rem',
                fontWeight: 400
              }}
            >
              I build self-preventing SRE reliability control planes, long-term LLM vector context graphs, and zero-knowledge cloud security vaults. Focused on clean system design, sub-millisecond protocol performance, and engineering software that scales with zero downtime.
            </p>

            {/* CTA Buttons */}
            <div
              style={{
                display: 'flex',
                flexWrap: 'wrap',
                gap: '0.85rem',
                alignItems: 'center',
                marginBottom: '2.25rem'
              }}
            >
              {/* GitHub */}
              <a
                href={personalInfo.github}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  padding: '0.7rem 1.3rem',
                  borderRadius: '10px',
                  background: '#0284c7',
                  color: '#ffffff',
                  fontWeight: 700,
                  fontSize: '0.9rem',
                  textDecoration: 'none',
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.45rem',
                  boxShadow: '0 4px 12px rgba(2, 132, 199, 0.2)',
                  transition: 'transform 0.15s ease'
                }}
                onMouseEnter={(e) => (e.currentTarget.style.transform = 'scale(1.03)')}
                onMouseLeave={(e) => (e.currentTarget.style.transform = 'scale(1)')}
              >
                <IconGithub size={18} /> GitHub Profile
              </a>

              {/* Resume PDF */}
              <button
                onClick={onOpenResume}
                style={{
                  padding: '0.7rem 1.3rem',
                  borderRadius: '10px',
                  background: 'var(--code-bg, #f8fafc)',
                  border: '1px solid var(--border-subtle, #cbd5e1)',
                  color: 'var(--text-primary, #0f172a)',
                  fontWeight: 600,
                  fontSize: '0.9rem',
                  cursor: 'pointer',
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.45rem'
                }}
              >
                📄 View Resume (PDF)
              </button>

              {/* LinkedIn */}
              <a
                href={personalInfo.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  padding: '0.7rem 1.3rem',
                  borderRadius: '10px',
                  background: 'var(--code-bg, #f8fafc)',
                  border: '1px solid var(--border-subtle, #cbd5e1)',
                  color: 'var(--text-primary, #0f172a)',
                  fontWeight: 600,
                  fontSize: '0.9rem',
                  textDecoration: 'none',
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.45rem'
                }}
              >
                <IconLinkedin size={18} /> LinkedIn
              </a>

              {/* Email */}
              <a
                href={`mailto:${personalInfo.email}`}
                style={{
                  padding: '0.7rem 1.3rem',
                  borderRadius: '10px',
                  background: 'var(--code-bg, #f8fafc)',
                  border: '1px solid var(--border-subtle, #cbd5e1)',
                  color: 'var(--text-primary, #0f172a)',
                  fontWeight: 600,
                  fontSize: '0.9rem',
                  textDecoration: 'none',
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.45rem'
                }}
              >
                <IconMail size={18} /> Direct Email
              </a>

              {/* Switch to OS Playground */}
              <button
                onClick={onSwitchToOS}
                style={{
                  padding: '0.7rem 1.3rem',
                  borderRadius: '10px',
                  background: 'linear-gradient(135deg, #7c3aed 0%, #db2777 100%)',
                  border: 'none',
                  color: '#ffffff',
                  fontWeight: 700,
                  fontSize: '0.9rem',
                  cursor: 'pointer',
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.45rem',
                  boxShadow: '0 4px 14px rgba(124, 58, 237, 0.3)',
                  marginLeft: 'auto'
                }}
              >
                🖥️ Launch OS Playground <IconArrowRight size={16} />
              </button>
            </div>

            {/* Verified Metrics Cards */}
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))',
                gap: '1rem',
                padding: '1.25rem',
                borderRadius: '12px',
                background: 'var(--code-bg, #f8fafc)',
                border: '1px solid var(--border-subtle, #e2e8f0)'
              }}
            >
              <div>
                <div style={{ fontSize: '1.6rem', fontWeight: 800, color: '#0284c7' }}>
                  SigNoz Winner
                </div>
                <div style={{ fontSize: '0.8rem', color: 'var(--text-secondary, #64748b)', marginTop: '0.15rem' }}>
                  Agents of SigNoz Hackathon
                </div>
              </div>

              <div>
                <div style={{ fontSize: '1.6rem', fontWeight: 800, color: '#166534' }}>
                  4 Core Apps
                </div>
                <div style={{ fontSize: '0.8rem', color: 'var(--text-secondary, #64748b)', marginTop: '0.15rem' }}>
                  Full-stack non-generic architectures
                </div>
              </div>

              <div>
                <div style={{ fontSize: '1.6rem', fontWeight: 800, color: '#7c3aed' }}>
                  99.9% Uptime
                </div>
                <div style={{ fontSize: '0.8rem', color: 'var(--text-secondary, #64748b)', marginTop: '0.15rem' }}>
                  Predictive closed-loop control
                </div>
              </div>

              <div>
                <div style={{ fontSize: '1.6rem', fontWeight: 800, color: '#e11d48' }}>
                  1,400+ Commits
                </div>
                <div style={{ fontSize: '0.8rem', color: 'var(--text-secondary, #64748b)', marginTop: '0.15rem' }}>
                  Active open-source contributions
                </div>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
