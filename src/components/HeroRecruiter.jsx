import React from 'react';
import { personalInfo } from '../data/portfolioData';
import { IconGithub, IconLinkedin, IconMail, IconArrowRight, IconSparkles, IconTerminal } from './Icons';

export default function HeroRecruiter({ onSwitchToOS, onOpenResume }) {
  return (
    <section
      id="hero"
      style={{
        padding: '5rem 1.5rem 3.5rem 1.5rem',
        maxWidth: '1150px',
        margin: '0 auto',
        position: 'relative'
      }}
    >
      {/* Status Badge */}
      <div
        style={{
          display: 'inline-flex',
          alignItems: 'center',
          gap: '0.6rem',
          padding: '0.4rem 1rem',
          borderRadius: '9999px',
          background: 'var(--badge-bg, rgba(16, 185, 129, 0.12))',
          border: '1px solid var(--badge-border, rgba(16, 185, 129, 0.3))',
          color: 'var(--badge-text, #10b981)',
          fontSize: '0.85rem',
          fontWeight: 600,
          marginBottom: '1.5rem'
        }}
      >
        <span
          style={{
            width: '8px',
            height: '8px',
            borderRadius: '50%',
            background: '#10b981',
            boxShadow: '0 0 8px #10b981'
          }}
        />
        Agents of SigNoz Winner • Open for High-Impact Engineering Roles
      </div>

      {/* Headline: Sharp 1-Line Statement */}
      <h1
        style={{
          fontFamily: 'var(--font-heading, system-ui, sans-serif)',
          fontSize: 'clamp(2.4rem, 5vw, 3.8rem)',
          fontWeight: 800,
          color: 'var(--text-primary, #ffffff)',
          lineHeight: 1.15,
          marginBottom: '1.25rem',
          letterSpacing: '-0.025em'
        }}
      >
        Full-Stack Engineer Specializing in{' '}
        <span style={{ color: 'var(--accent-primary, #06b6d4)' }}>
          AI Systems, Telemetry & Distributed Infrastructure
        </span>
      </h1>

      {/* Elevator Pitch: 2-3 sentences */}
      <p
        style={{
          fontSize: 'clamp(1.1rem, 2vw, 1.25rem)',
          color: 'var(--text-secondary, #94a3b8)',
          lineHeight: 1.6,
          maxWidth: '780px',
          marginBottom: '2.25rem',
          fontWeight: 400
        }}
      >
        I build self-preventing SRE reliability control planes, long-term LLM vector context graphs, and zero-knowledge cloud security vaults. Focused on clean system design, sub-millisecond protocol performance, and engineering software that scales with zero downtime.
      </p>

      {/* Immediate Call-to-Action (CTA) Buttons */}
      <div
        style={{
          display: 'flex',
          flexWrap: 'wrap',
          gap: '1rem',
          alignItems: 'center',
          marginBottom: '3rem'
        }}
      >
        {/* GitHub */}
        <a
          href={personalInfo.github}
          target="_blank"
          rel="noopener noreferrer"
          style={{
            padding: '0.75rem 1.4rem',
            borderRadius: 'var(--ui-radius, 10px)',
            background: 'var(--btn-bg-primary, #06b6d4)',
            color: 'var(--btn-text-primary, #ffffff)',
            fontWeight: 700,
            fontSize: '0.95rem',
            textDecoration: 'none',
            display: 'inline-flex',
            alignItems: 'center',
            gap: '0.5rem',
            boxShadow: '0 4px 14px rgba(6, 182, 212, 0.25)',
            transition: 'transform 0.15s ease, background 0.15s ease'
          }}
        >
          <IconGithub size={18} /> GitHub Profile
        </a>

        {/* Resume PDF */}
        <button
          onClick={onOpenResume}
          style={{
            padding: '0.75rem 1.4rem',
            borderRadius: 'var(--ui-radius, 10px)',
            background: 'var(--btn-bg-secondary, rgba(255, 255, 255, 0.08))',
            border: '1px solid var(--border-subtle, rgba(255, 255, 255, 0.15))',
            color: 'var(--text-primary, #ffffff)',
            fontWeight: 600,
            fontSize: '0.95rem',
            cursor: 'pointer',
            display: 'inline-flex',
            alignItems: 'center',
            gap: '0.5rem',
            transition: 'background 0.15s ease'
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
            padding: '0.75rem 1.4rem',
            borderRadius: 'var(--ui-radius, 10px)',
            background: 'var(--btn-bg-secondary, rgba(255, 255, 255, 0.08))',
            border: '1px solid var(--border-subtle, rgba(255, 255, 255, 0.15))',
            color: 'var(--text-primary, #ffffff)',
            fontWeight: 600,
            fontSize: '0.95rem',
            textDecoration: 'none',
            display: 'inline-flex',
            alignItems: 'center',
            gap: '0.5rem'
          }}
        >
          <IconLinkedin size={18} /> LinkedIn
        </a>

        {/* Email */}
        <a
          href={`mailto:${personalInfo.email}`}
          style={{
            padding: '0.75rem 1.4rem',
            borderRadius: 'var(--ui-radius, 10px)',
            background: 'var(--btn-bg-secondary, rgba(255, 255, 255, 0.08))',
            border: '1px solid var(--border-subtle, rgba(255, 255, 255, 0.15))',
            color: 'var(--text-primary, #ffffff)',
            fontWeight: 600,
            fontSize: '0.95rem',
            textDecoration: 'none',
            display: 'inline-flex',
            alignItems: 'center',
            gap: '0.5rem'
          }}
        >
          <IconMail size={18} /> Direct Email
        </a>

        {/* Switch to OS Playground */}
        <button
          onClick={onSwitchToOS}
          style={{
            padding: '0.75rem 1.4rem',
            borderRadius: 'var(--ui-radius, 10px)',
            background: 'linear-gradient(135deg, #8b5cf6 0%, #ec4899 100%)',
            border: 'none',
            color: '#ffffff',
            fontWeight: 700,
            fontSize: '0.95rem',
            cursor: 'pointer',
            display: 'inline-flex',
            alignItems: 'center',
            gap: '0.5rem',
            boxShadow: '0 4px 15px rgba(139, 92, 246, 0.3)',
            marginLeft: 'auto'
          }}
        >
          🖥️ Launch OS Playground <IconArrowRight size={16} />
        </button>
      </div>

      {/* Quick Verified Engineering Metrics */}
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))',
          gap: '1.25rem',
          padding: '1.5rem',
          borderRadius: 'var(--ui-radius, 14px)',
          background: 'var(--card-bg, rgba(255, 255, 255, 0.03))',
          border: '1px solid var(--border-subtle, rgba(255, 255, 255, 0.08))'
        }}
      >
        <div>
          <div style={{ fontSize: '1.8rem', fontWeight: 800, color: 'var(--accent-primary, #06b6d4)' }}>
            SigNoz Winner
          </div>
          <div style={{ fontSize: '0.85rem', color: 'var(--text-secondary, #94a3b8)', marginTop: '0.2rem' }}>
            Agents of SigNoz Hackathon
          </div>
        </div>

        <div>
          <div style={{ fontSize: '1.8rem', fontWeight: 800, color: '#10b981' }}>
            4 Core Apps
          </div>
          <div style={{ fontSize: '0.85rem', color: 'var(--text-secondary, #94a3b8)', marginTop: '0.2rem' }}>
            Full-stack non-generic architectures
          </div>
        </div>

        <div>
          <div style={{ fontSize: '1.8rem', fontWeight: 800, color: '#8b5cf6' }}>
            99.9% Uptime
          </div>
          <div style={{ fontSize: '0.85rem', color: 'var(--text-secondary, #94a3b8)', marginTop: '0.2rem' }}>
            Predictive closed-loop control
          </div>
        </div>

        <div>
          <div style={{ fontSize: '1.8rem', fontWeight: 800, color: '#f43f5e' }}>
            1,400+ Commits
          </div>
          <div style={{ fontSize: '0.85rem', color: 'var(--text-secondary, #94a3b8)', marginTop: '0.2rem' }}>
            Active open-source contributions
          </div>
        </div>
      </div>
    </section>
  );
}
