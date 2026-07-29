import React, { useState } from 'react';
import { IconMail, IconCheck, IconInstagram, IconGithub, IconLinkedin, IconTwitter, IconDiscord } from './Icons';

export default function ContactFooterSection() {
  const [copied, setCopied] = useState(false);
  const email = "arjun.sabu@example.com";

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({ name: '', email: '', message: '' });
    }, 4000);
  };

  const socials = [
    { name: "Instagram", url: "https://instagram.com", icon: IconInstagram, handle: "@arjun_sabu" },
    { name: "GitHub", url: "https://github.com/greninja-op", icon: IconGithub, handle: "@greninja-op" },
    { name: "LinkedIn", url: "https://linkedin.com", icon: IconLinkedin, handle: "Arjun Sabu" },
    { name: "Twitter / X", url: "https://twitter.com", icon: IconTwitter, handle: "@arjun_sabu_dev" },
    { name: "Discord", url: "https://discord.com", icon: IconDiscord, handle: "greninja_op#0001" }
  ];

  return (
    <footer
      id="contact"
      style={{
        padding: '4rem 0 3rem 0',
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
              OUTREACH_TERMINAL.APP — System 7.5
            </div>

            <div style={{ fontSize: '0.75rem', fontFamily: 'var(--font-mono, monospace)', color: 'var(--text-secondary, #64748b)', fontWeight: 700 }}>
              [PORT 443]
            </div>
          </div>

          {/* WINDOW INNER BODY */}
          <div style={{ padding: '2rem 1.75rem' }}>
            
            {/* Section Header */}
            <div style={{ marginBottom: '2rem' }}>
              <div
                style={{
                  fontSize: '0.78rem',
                  textTransform: 'uppercase',
                  letterSpacing: '0.1em',
                  fontWeight: 800,
                  fontFamily: 'var(--font-mono, monospace)',
                  color: 'var(--accent-primary, #06b6d4)',
                  marginBottom: '0.3rem'
                }}
              >
                Section D • Outreach & Social Presence
              </div>

              <h2
                style={{
                  fontFamily: 'var(--font-heading, system-ui, sans-serif)',
                  fontSize: 'clamp(1.6rem, 3vw, 2.2rem)',
                  fontWeight: 800,
                  color: 'var(--text-primary, #0f172a)',
                  letterSpacing: '-0.025em'
                }}
              >
                Direct Contact & Social Media Profiles
              </h2>

              <p style={{ color: 'var(--text-secondary, #64748b)', fontSize: '1rem', marginTop: '0.3rem' }}>
                Reach out directly via email, drop a note below, or connect across social channels.
              </p>
            </div>

            {/* Quick Email Copy Bar */}
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                flexWrap: 'wrap',
                gap: '1rem',
                padding: '1rem 1.25rem',
                background: 'var(--code-bg, #f8fafc)',
                border: '1.5px solid var(--border-subtle, #e2e8f0)',
                borderRadius: '12px',
                marginBottom: '2rem'
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                <IconMail size={20} color="var(--accent-primary, #06b6d4)" />
                <span style={{ fontFamily: 'var(--font-mono, monospace)', fontSize: '0.95rem', fontWeight: 700, color: 'var(--text-primary, #0f172a)' }}>
                  {email}
                </span>
              </div>

              <button
                onClick={handleCopy}
                style={{
                  padding: '0.5rem 1rem',
                  borderRadius: '8px',
                  background: copied ? '#22c55e' : 'var(--text-primary, #0f172a)',
                  color: '#ffffff',
                  fontWeight: 700,
                  fontSize: '0.82rem',
                  border: 'none',
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.4rem',
                  transition: 'background 0.2s ease'
                }}
              >
                {copied ? (
                  <>
                    <IconCheck size={16} /> Copied!
                  </>
                ) : (
                  'Copy Email'
                )}
              </button>
            </div>

            {/* GRID LAYOUT: CONTACT FORM & SOCIAL PRESENCE */}
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
                gap: '1.75rem'
              }}
            >
              {/* Contact Form Container */}
              <div
                style={{
                  background: 'var(--code-bg, #f8fafc)',
                  border: '1.5px solid var(--border-subtle, #e2e8f0)',
                  borderRadius: '14px',
                  padding: '1.5rem'
                }}
              >
                <h3 style={{ fontSize: '1.1rem', fontWeight: 800, color: 'var(--text-primary, #0f172a)', marginBottom: '1rem' }}>
                  Send a Direct Message
                </h3>

                {submitted ? (
                  <div
                    style={{
                      padding: '1.25rem',
                      borderRadius: '10px',
                      background: 'rgba(34, 197, 94, 0.1)',
                      border: '1px solid rgba(34, 197, 94, 0.3)',
                      color: '#166534',
                      fontWeight: 700,
                      fontSize: '0.9rem',
                      textAlign: 'center'
                    }}
                  >
                    ✓ Message received! I will respond within 24 hours.
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '0.85rem' }}>
                    <div>
                      <label style={{ display: 'block', fontSize: '0.78rem', fontWeight: 700, color: 'var(--text-secondary, #64748b)', marginBottom: '0.25rem' }}>
                        Your Name
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="John Doe"
                        style={{
                          width: '100%',
                          padding: '0.65rem 0.85rem',
                          borderRadius: '8px',
                          border: '1px solid var(--border-subtle, #cbd5e1)',
                          background: 'var(--card-bg, #ffffff)',
                          color: 'var(--text-primary, #0f172a)',
                          fontSize: '0.88rem',
                          outline: 'none'
                        }}
                      />
                    </div>

                    <div>
                      <label style={{ display: 'block', fontSize: '0.78rem', fontWeight: 700, color: 'var(--text-secondary, #64748b)', marginBottom: '0.25rem' }}>
                        Email Address
                      </label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="john@company.com"
                        style={{
                          width: '100%',
                          padding: '0.65rem 0.85rem',
                          borderRadius: '8px',
                          border: '1px solid var(--border-subtle, #cbd5e1)',
                          background: 'var(--card-bg, #ffffff)',
                          color: 'var(--text-primary, #0f172a)',
                          fontSize: '0.88rem',
                          outline: 'none'
                        }}
                      />
                    </div>

                    <div>
                      <label style={{ display: 'block', fontSize: '0.78rem', fontWeight: 700, color: 'var(--text-secondary, #64748b)', marginBottom: '0.25rem' }}>
                        Message
                      </label>
                      <textarea
                        required
                        rows={4}
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        placeholder="Hello Arjun, we are interested in discussing..."
                        style={{
                          width: '100%',
                          padding: '0.65rem 0.85rem',
                          borderRadius: '8px',
                          border: '1px solid var(--border-subtle, #cbd5e1)',
                          background: 'var(--card-bg, #ffffff)',
                          color: 'var(--text-primary, #0f172a)',
                          fontSize: '0.88rem',
                          outline: 'none',
                          resize: 'vertical'
                        }}
                      />
                    </div>

                    <button
                      type="submit"
                      style={{
                        padding: '0.75rem',
                        borderRadius: '8px',
                        background: 'var(--accent-primary, #06b6d4)',
                        color: '#ffffff',
                        fontWeight: 800,
                        fontSize: '0.88rem',
                        border: 'none',
                        cursor: 'pointer',
                        transition: 'transform 0.15s ease'
                      }}
                      onMouseEnter={(e) => (e.currentTarget.style.transform = 'scale(1.02)')}
                      onMouseLeave={(e) => (e.currentTarget.style.transform = 'scale(1)')}
                    >
                      Send Message ↗
                    </button>
                  </form>
                )}
              </div>

              {/* Social Media Links Container */}
              <div
                style={{
                  background: 'var(--code-bg, #f8fafc)',
                  border: '1.5px solid var(--border-subtle, #e2e8f0)',
                  borderRadius: '14px',
                  padding: '1.5rem',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between'
                }}
              >
                <div>
                  <h3 style={{ fontSize: '1.1rem', fontWeight: 800, color: 'var(--text-primary, #0f172a)', marginBottom: '1rem' }}>
                    Connect Across Channels
                  </h3>

                  <div style={{ display: 'flex', flexDirection: 'column', gap: '0.65rem' }}>
                    {socials.map((s, idx) => {
                      const Icon = s.icon;
                      return (
                        <a
                          key={idx}
                          href={s.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          style={{
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'space-between',
                            padding: '0.75rem 1rem',
                            borderRadius: '10px',
                            background: 'var(--card-bg, #ffffff)',
                            border: '1px solid var(--border-subtle, #e2e8f0)',
                            color: 'var(--text-primary, #0f172a)',
                            textDecoration: 'none',
                            transition: 'transform 0.15s ease, border-color 0.15s ease'
                          }}
                          onMouseEnter={(e) => {
                            e.currentTarget.style.transform = 'translateX(4px)';
                            e.currentTarget.style.borderColor = 'var(--accent-primary, #06b6d4)';
                          }}
                          onMouseLeave={(e) => {
                            e.currentTarget.style.transform = 'translateX(0px)';
                            e.currentTarget.style.borderColor = 'var(--border-subtle, #e2e8f0)';
                          }}
                        >
                          <div style={{ display: 'flex', alignItems: 'center', gap: '0.65rem' }}>
                            <Icon size={18} color="var(--accent-primary, #06b6d4)" />
                            <span style={{ fontWeight: 700, fontSize: '0.88rem' }}>{s.name}</span>
                          </div>

                          <span style={{ fontSize: '0.78rem', fontFamily: 'var(--font-mono, monospace)', color: 'var(--text-secondary, #64748b)' }}>
                            {s.handle}
                          </span>
                        </a>
                      );
                    })}
                  </div>
                </div>

                <div
                  style={{
                    marginTop: '1.5rem',
                    paddingTop: '1rem',
                    borderTop: '1px solid var(--border-subtle, #e2e8f0)',
                    fontSize: '0.78rem',
                    color: 'var(--text-secondary, #64748b)',
                    fontFamily: 'var(--font-mono, monospace)',
                    display: 'flex',
                    justifyContent: 'space-between'
                  }}
                >
                  <span>© 2026 Arjun Sabu</span>
                  <span>System 7.5 CyberPop</span>
                </div>
              </div>

            </div>

          </div>
        </div>

      </div>
    </footer>
  );
}
