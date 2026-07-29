import React, { useState } from 'react';
import { personalInfo } from '../data/portfolioData';
import { IconMail, IconGithub, IconLinkedin, IconTwitter, IconInstagram, IconDiscord, IconSend } from './Icons';

export default function ContactFooterSection() {
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

  const socialLinks = [
    { name: "Instagram", url: "https://instagram.com/arjun.sabu", icon: <IconInstagram size={18} />, color: "#e1306c" },
    { name: "GitHub", url: personalInfo.github, icon: <IconGithub size={18} />, color: "#06b6d4" },
    { name: "LinkedIn", url: personalInfo.linkedin, icon: <IconLinkedin size={18} />, color: "#0a66c2" },
    { name: "Twitter / X", url: personalInfo.twitter, icon: <IconTwitter size={18} />, color: "#1da1f2" },
    { name: "Discord", url: "https://discord.gg/greninja-op", icon: <IconDiscord size={18} />, color: "#5865f2" }
  ];

  return (
    <footer
      id="contact"
      style={{
        background: 'var(--footer-bg, #0f172a)',
        borderTop: '1px solid var(--border-subtle, #1f2937)',
        padding: '4rem 1.5rem 2.5rem 1.5rem',
        marginTop: '4rem'
      }}
    >
      <div style={{ maxWidth: '1180px', margin: '0 auto' }}>
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
            Section D • Outreach & Social Presence
          </div>

          <h2
            style={{
              fontFamily: 'var(--font-heading, system-ui, sans-serif)',
              fontSize: 'clamp(1.8rem, 3.5vw, 2.5rem)',
              fontWeight: 800,
              color: 'var(--text-primary, #ffffff)',
              letterSpacing: '-0.025em'
            }}
          >
            Direct Contact & Social Media Profiles
          </h2>

          <p style={{ color: 'var(--text-secondary, #94a3b8)', fontSize: '1.05rem', marginTop: '0.4rem', maxWidth: '600px' }}>
            Reach out directly via email, drop a note below, or connect across social channels.
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
          {/* Left: Written-Out Email Copy */}
          <div>
            <h3 style={{ fontSize: '1.3rem', fontWeight: 800, color: 'var(--text-primary, #fff)', marginBottom: '0.4rem' }}>
              Direct Written Email Address
            </h3>
            <p style={{ color: 'var(--text-secondary, #94a3b8)', fontSize: '0.92rem', marginBottom: '1.25rem' }}>
              Written out clearly for easy copy-pasting into your recruitment CRM or mail client:
            </p>

            {/* Email Bar with Copy Button */}
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                gap: '0.5rem',
                background: 'var(--code-bg, #0f172a)',
                border: '1px solid var(--border-subtle, #1f2937)',
                borderRadius: '10px',
                padding: '0.85rem 1.1rem',
                marginBottom: '2rem'
              }}
            >
              <span
                style={{
                  fontFamily: 'var(--font-mono, monospace)',
                  fontSize: '1rem',
                  fontWeight: 700,
                  color: 'var(--accent-primary, #38bdf8)',
                  wordBreak: 'break-all'
                }}
              >
                {personalInfo.email}
              </span>
              <button
                onClick={handleCopyEmail}
                style={{
                  padding: '0.45rem 0.9rem',
                  borderRadius: '6px',
                  background: copied ? '#10b981' : 'var(--btn-bg-primary, #06b6d4)',
                  color: '#ffffff',
                  border: 'none',
                  fontWeight: 700,
                  fontSize: '0.85rem',
                  cursor: 'pointer',
                  whiteSpace: 'nowrap',
                  transition: 'all 0.15s ease'
                }}
              >
                {copied ? '✓ Copied!' : 'Copy Email'}
              </button>
            </div>

            <h4 style={{ fontSize: '1rem', fontWeight: 700, color: 'var(--text-primary, #fff)', marginBottom: '0.85rem' }}>
              All Social Media & Profiles
            </h4>

            {/* All Social Links Grid */}
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.75rem' }}>
              {socialLinks.map((s, idx) => (
                <a
                  key={idx}
                  href={s.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    padding: '0.6rem 1rem',
                    borderRadius: '8px',
                    background: 'var(--code-bg, #0f172a)',
                    border: '1px solid var(--border-subtle, #1f2937)',
                    color: 'var(--text-primary, #ffffff)',
                    fontWeight: 600,
                    fontSize: '0.88rem',
                    textDecoration: 'none',
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '0.5rem',
                    transition: 'border-color 0.15s ease'
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.borderColor = s.color)}
                  onMouseLeave={(e) => (e.currentTarget.style.borderColor = 'var(--border-subtle, #1f2937)')}
                >
                  <span style={{ color: s.color }}>{s.icon}</span>
                  <span>{s.name}</span>
                </a>
              ))}
            </div>
          </div>

          {/* Right: Minimal 3-Field Contact Form */}
          <form
            onSubmit={handleSubmit}
            style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '1.25rem'
            }}
          >
            <h3 style={{ fontSize: '1.3rem', fontWeight: 800, color: 'var(--text-primary, #fff)', margin: 0 }}>
              Send a Message
            </h3>

            {submitted && (
              <div
                style={{
                  padding: '0.75rem 1rem',
                  borderRadius: '8px',
                  background: 'rgba(16, 185, 129, 0.15)',
                  border: '1px solid rgba(16, 185, 129, 0.35)',
                  color: '#34d399',
                  fontSize: '0.9rem',
                  fontWeight: 600
                }}
              >
                ✓ Message sent successfully! I will reply to your email shortly.
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
                  background: 'var(--code-bg, #0f172a)',
                  border: '1px solid var(--border-subtle, #1f2937)',
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
                  background: 'var(--code-bg, #0f172a)',
                  border: '1px solid var(--border-subtle, #1f2937)',
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
                placeholder="Hi Arjun, we reviewed your GitHub profile and projects..."
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                style={{
                  width: '100%',
                  padding: '0.75rem 1rem',
                  borderRadius: '8px',
                  background: 'var(--code-bg, #0f172a)',
                  border: '1px solid var(--border-subtle, #1f2937)',
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
            borderTop: '1px solid var(--border-subtle, #1f2937)',
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
            © {new Date().getFullYear()} {personalInfo.name} (@{personalInfo.handle}). Engineered for recruiter clarity & zero gimmick lag.
          </div>
          <div style={{ display: 'flex', gap: '1.25rem' }}>
            <a href="#hero" style={{ color: 'var(--text-secondary, #94a3b8)', textDecoration: 'none' }}>Back to Top ↑</a>
            <a href="https://instagram.com/arjun.sabu" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--text-secondary, #94a3b8)', textDecoration: 'none' }}>Instagram</a>
            <a href={personalInfo.github} target="_blank" rel="noopener noreferrer" style={{ color: 'var(--text-secondary, #94a3b8)', textDecoration: 'none' }}>GitHub</a>
            <a href={personalInfo.linkedin} target="_blank" rel="noopener noreferrer" style={{ color: 'var(--text-secondary, #94a3b8)', textDecoration: 'none' }}>LinkedIn</a>
            <a href={personalInfo.twitter} target="_blank" rel="noopener noreferrer" style={{ color: 'var(--text-secondary, #94a3b8)', textDecoration: 'none' }}>Twitter / X</a>
            <a href="https://discord.gg/greninja-op" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--text-secondary, #94a3b8)', textDecoration: 'none' }}>Discord</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
