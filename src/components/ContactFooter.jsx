import React, { useState } from 'react';
import { personalInfo } from '../data/portfolioData';
import { IconMail, IconGithub, IconLinkedin, IconTwitter, IconSend, IconSparkles } from './Icons';

export default function ContactFooter() {
  const [copied, setCopied] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(personalInfo.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 4000);
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <footer
      id="contact"
      style={{
        background: 'var(--footer-bg, rgba(15, 23, 42, 0.95))',
        borderTop: '1px solid var(--border-subtle, rgba(255, 255, 255, 0.1))',
        padding: '4rem 1.5rem 2rem 1.5rem',
        marginTop: '4rem'
      }}
    >
      <div style={{ maxWidth: '1150px', margin: '0 auto' }}>
        {/* Section Header */}
        <div style={{ marginBottom: '2.5rem' }}>
          <div
            style={{
              fontSize: '0.8rem',
              textTransform: 'uppercase',
              letterSpacing: '0.1em',
              fontWeight: 700,
              color: 'var(--accent-primary, #06b6d4)',
              marginBottom: '0.4rem'
            }}
          >
            Section 6 • Direct Contact
          </div>

          <h2
            style={{
              fontFamily: 'var(--font-heading, system-ui, sans-serif)',
              fontSize: 'clamp(1.8rem, 3.5vw, 2.5rem)',
              fontWeight: 800,
              color: 'var(--text-primary, #ffffff)',
              letterSpacing: '-0.02em'
            }}
          >
            Friction-Free Contact & Outreach
          </h2>

          <p style={{ color: 'var(--text-secondary, #94a3b8)', fontSize: '1.05rem', marginTop: '0.5rem', maxWidth: '600px' }}>
            Reach out directly via email, connect on technical socials, or drop a brief note below.
          </p>
        </div>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '2.5rem',
            alignItems: 'start',
            marginBottom: '3.5rem'
          }}
        >
          {/* Left: Direct Email Copy Card & Socials */}
          <div
            style={{
              background: 'var(--card-bg, rgba(255, 255, 255, 0.03))',
              border: '1px solid var(--border-subtle, rgba(255, 255, 255, 0.1))',
              borderRadius: 'var(--ui-radius, 16px)',
              padding: '2rem'
            }}
          >
            <h3 style={{ fontSize: '1.3rem', fontWeight: 700, color: 'var(--text-primary, #fff)', marginBottom: '0.5rem' }}>
              Direct Written Email Address
            </h3>
            <p style={{ color: 'var(--text-secondary, #94a3b8)', fontSize: '0.95rem', marginBottom: '1.25rem' }}>
              Written out clearly for easy copy-pasting into your recruitment CRM or mail client:
            </p>

            {/* Email Bar with Copy Button */}
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                gap: '0.5rem',
                background: 'var(--code-bg, rgba(15, 23, 42, 0.8))',
                border: '1px solid var(--border-subtle, rgba(255, 255, 255, 0.12))',
                borderRadius: '10px',
                padding: '0.75rem 1rem',
                marginBottom: '2rem'
              }}
            >
              <span
                style={{
                  fontFamily: 'var(--font-mono, monospace)',
                  fontSize: '1rem',
                  fontWeight: 600,
                  color: 'var(--accent-primary, #38bdf8)',
                  wordBreak: 'break-all'
                }}
              >
                {personalInfo.email}
              </span>
              <button
                onClick={handleCopyEmail}
                style={{
                  padding: '0.4rem 0.85rem',
                  borderRadius: '6px',
                  background: copied ? '#10b981' : 'var(--btn-bg-primary, #06b6d4)',
                  color: '#ffffff',
                  border: 'none',
                  fontWeight: 700,
                  fontSize: '0.82rem',
                  cursor: 'pointer',
                  whiteSpace: 'nowrap',
                  transition: 'all 0.15s ease'
                }}
              >
                {copied ? '✓ Copied!' : 'Copy Email'}
              </button>
            </div>

            <h4 style={{ fontSize: '1rem', fontWeight: 700, color: 'var(--text-primary, #fff)', marginBottom: '0.8rem' }}>
              Engineering & Professional Profiles
            </h4>

            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.75rem' }}>
              <a
                href={personalInfo.github}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  padding: '0.55rem 1rem',
                  borderRadius: '8px',
                  background: 'var(--pill-bg, rgba(255, 255, 255, 0.06))',
                  border: '1px solid var(--border-subtle, rgba(255, 255, 255, 0.12))',
                  color: 'var(--text-primary, #ffffff)',
                  fontWeight: 600,
                  fontSize: '0.88rem',
                  textDecoration: 'none',
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.4rem'
                }}
              >
                <IconGithub size={16} /> GitHub Profile
              </a>

              <a
                href={personalInfo.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  padding: '0.55rem 1rem',
                  borderRadius: '8px',
                  background: 'var(--pill-bg, rgba(255, 255, 255, 0.06))',
                  border: '1px solid var(--border-subtle, rgba(255, 255, 255, 0.12))',
                  color: 'var(--text-primary, #ffffff)',
                  fontWeight: 600,
                  fontSize: '0.88rem',
                  textDecoration: 'none',
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.4rem'
                }}
              >
                <IconLinkedin size={16} /> LinkedIn
              </a>

              <a
                href={personalInfo.twitter}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  padding: '0.55rem 1rem',
                  borderRadius: '8px',
                  background: 'var(--pill-bg, rgba(255, 255, 255, 0.06))',
                  border: '1px solid var(--border-subtle, rgba(255, 255, 255, 0.12))',
                  color: 'var(--text-primary, #ffffff)',
                  fontWeight: 600,
                  fontSize: '0.88rem',
                  textDecoration: 'none',
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.4rem'
                }}
              >
                <IconTwitter size={16} /> Twitter / X
              </a>
            </div>
          </div>

          {/* Right: Minimal 3-Field Contact Form */}
          <form
            onSubmit={handleSubmit}
            style={{
              background: 'var(--card-bg, rgba(255, 255, 255, 0.03))',
              border: '1px solid var(--border-subtle, rgba(255, 255, 255, 0.1))',
              borderRadius: 'var(--ui-radius, 16px)',
              padding: '2rem',
              display: 'flex',
              flexDirection: 'column',
              gap: '1.2rem'
            }}
          >
            <h3 style={{ fontSize: '1.3rem', fontWeight: 700, color: 'var(--text-primary, #fff)', margin: 0 }}>
              Send a Quick Message
            </h3>

            {submitted && (
              <div
                style={{
                  padding: '0.75rem 1rem',
                  borderRadius: '8px',
                  background: 'rgba(16, 185, 129, 0.15)',
                  border: '1px solid rgba(16, 185, 129, 0.3)',
                  color: '#34d399',
                  fontSize: '0.9rem',
                  fontWeight: 600
                }}
              >
                ✓ Message received! I will reply to your email shortly.
              </div>
            )}

            <div>
              <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 600, color: 'var(--text-secondary, #94a3b8)', marginBottom: '0.4rem' }}>
                Your Name
              </label>
              <input
                type="text"
                required
                placeholder="e.g. Sarah Jenkins (Hiring Manager)"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                style={{
                  width: '100%',
                  padding: '0.75rem 1rem',
                  borderRadius: '8px',
                  background: 'var(--code-bg, rgba(15, 23, 42, 0.8))',
                  border: '1px solid var(--border-subtle, rgba(255, 255, 255, 0.15))',
                  color: 'var(--text-primary, #ffffff)',
                  fontSize: '0.95rem',
                  outline: 'none'
                }}
              />
            </div>

            <div>
              <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 600, color: 'var(--text-secondary, #94a3b8)', marginBottom: '0.4rem' }}>
                Your Email
              </label>
              <input
                type="email"
                required
                placeholder="s.jenkins@techcorp.com"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                style={{
                  width: '100%',
                  padding: '0.75rem 1rem',
                  borderRadius: '8px',
                  background: 'var(--code-bg, rgba(15, 23, 42, 0.8))',
                  border: '1px solid var(--border-subtle, rgba(255, 255, 255, 0.15))',
                  color: 'var(--text-primary, #ffffff)',
                  fontSize: '0.95rem',
                  outline: 'none'
                }}
              />
            </div>

            <div>
              <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 600, color: 'var(--text-secondary, #94a3b8)', marginBottom: '0.4rem' }}>
                Message / Opportunity Details
              </label>
              <textarea
                rows={4}
                required
                placeholder="Hi Arjun, we were impressed by your ChronoLens project..."
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                style={{
                  width: '100%',
                  padding: '0.75rem 1rem',
                  borderRadius: '8px',
                  background: 'var(--code-bg, rgba(15, 23, 42, 0.8))',
                  border: '1px solid var(--border-subtle, rgba(255, 255, 255, 0.15))',
                  color: 'var(--text-primary, #ffffff)',
                  fontSize: '0.95rem',
                  outline: 'none',
                  resize: 'vertical'
                }}
              />
            </div>

            <button
              type="submit"
              style={{
                width: '100%',
                padding: '0.85rem 1.25rem',
                borderRadius: '10px',
                background: 'var(--btn-bg-primary, #06b6d4)',
                color: '#ffffff',
                border: 'none',
                fontWeight: 700,
                fontSize: '0.95rem',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '0.5rem',
                boxShadow: '0 4px 14px rgba(6, 182, 212, 0.25)'
              }}
            >
              <IconSend size={18} /> Send Message Directly
            </button>
          </form>
        </div>

        {/* Footer Bottom Bar */}
        <div
          style={{
            borderTop: '1px solid var(--border-subtle, rgba(255, 255, 255, 0.08))',
            paddingTop: '2rem',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            flexWrap: 'wrap',
            gap: '1rem',
            fontSize: '0.85rem',
            color: 'var(--text-secondary, #94a3b8)'
          }}
        >
          <div>
            © {new Date().getFullYear()} {personalInfo.name} (@{personalInfo.handle}). Designed & engineered with zero gimmick lag.
          </div>
          <div style={{ display: 'flex', gap: '1.25rem' }}>
            <a href="#hero" style={{ color: 'var(--text-secondary, #94a3b8)', textDecoration: 'none' }}>Back to Top ↑</a>
            <a href={personalInfo.github} target="_blank" rel="noopener noreferrer" style={{ color: 'var(--text-secondary, #94a3b8)', textDecoration: 'none' }}>GitHub</a>
            <a href={personalInfo.linkedin} target="_blank" rel="noopener noreferrer" style={{ color: 'var(--text-secondary, #94a3b8)', textDecoration: 'none' }}>LinkedIn</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
