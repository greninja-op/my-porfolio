import React, { useState } from 'react';
import { IconMail, IconCheck, IconInstagram, IconGithub, IconLinkedin, IconTwitter, IconDiscord } from './Icons';
import MacWindowWrapper from './MacWindowWrapper';
import { playRetroClick } from '../utils/sound';

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
    playRetroClick();
    navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;
    playRetroClick();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({ name: '', email: '', message: '' });
    }, 4000);
  };

  const socials = [
    { name: "Instagram", url: "https://instagram.com", icon: IconInstagram, handle: "@arjun_sabu", bg: "#fde047" },
    { name: "GitHub", url: "https://github.com/greninja-op", icon: IconGithub, handle: "@greninja-op", bg: "#38bdf8" },
    { name: "LinkedIn", url: "https://linkedin.com", icon: IconLinkedin, handle: "Arjun Sabu", bg: "#c084fc" },
    { name: "Twitter / X", url: "https://twitter.com", icon: IconTwitter, handle: "@arjun_sabu_dev", bg: "#f472b6" },
    { name: "Discord", url: "https://discord.com", icon: IconDiscord, handle: "greninja_op#0001", bg: "#7dd3fc" }
  ];

  return (
    <footer id="contact">
      <MacWindowWrapper
        title="Direct Contact & Outreach Terminal"
        subtitle="Reach out directly via email, drop a note below, or connect across social channels."
        badgeText="PORT 443"
      >
        {/* Quick Email Copy Bar */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            flexWrap: 'wrap',
            gap: '1rem',
            padding: '1rem 1.25rem',
            background: '#fde047',
            border: '2px solid #000000',
            borderRadius: '8px',
            boxShadow: '3px 3px 0 #000000',
            marginBottom: '1.75rem'
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
            <IconMail size={20} color="#000000" />
            <span style={{ fontFamily: 'var(--font-mono, monospace)', fontSize: '0.95rem', fontWeight: 900, color: '#000000' }}>
              {email}
            </span>
          </div>

          <button
            onClick={handleCopy}
            style={{
              padding: '0.5rem 1rem',
              borderRadius: '6px',
              background: copied ? '#4ade80' : '#ffffff',
              color: '#000000',
              fontWeight: 900,
              fontSize: '0.82rem',
              border: '2px solid #000000',
              boxShadow: '2px 2px 0 #000000',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              gap: '0.4rem',
              fontFamily: 'var(--font-mono, monospace)'
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
            gap: '1.5rem'
          }}
        >
          {/* Contact Form Container */}
          <div
            style={{
              background: '#ffffff',
              border: '2px solid #000000',
              borderRadius: '8px',
              padding: '1.5rem',
              boxShadow: '3px 3px 0 #000000'
            }}
          >
            <h3 style={{ fontSize: '1.1rem', fontWeight: 900, color: '#000000', marginBottom: '1rem', fontFamily: 'var(--font-mono, monospace)' }}>
              Send a Direct Message
            </h3>

            {submitted ? (
              <div
                style={{
                  padding: '1.25rem',
                  borderRadius: '8px',
                  background: '#4ade80',
                  border: '2px solid #000000',
                  boxShadow: '2px 2px 0 #000000',
                  color: '#000000',
                  fontWeight: 900,
                  fontSize: '0.9rem',
                  textAlign: 'center',
                  fontFamily: 'var(--font-mono, monospace)'
                }}
              >
                ✓ Message received! I will respond within 24 hours.
              </div>
            ) : (
              <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '0.85rem' }}>
                <div>
                  <label style={{ display: 'block', fontSize: '0.78rem', fontWeight: 900, color: '#000000', marginBottom: '0.25rem', fontFamily: 'var(--font-mono, monospace)' }}>
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
                      borderRadius: '6px',
                      border: '2px solid #000000',
                      background: '#fafafa',
                      color: '#000000',
                      fontSize: '0.88rem',
                      outline: 'none',
                      fontWeight: 700,
                      fontFamily: 'var(--font-mono, monospace)'
                    }}
                  />
                </div>

                <div>
                  <label style={{ display: 'block', fontSize: '0.78rem', fontWeight: 900, color: '#000000', marginBottom: '0.25rem', fontFamily: 'var(--font-mono, monospace)' }}>
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
                      borderRadius: '6px',
                      border: '2px solid #000000',
                      background: '#fafafa',
                      color: '#000000',
                      fontSize: '0.88rem',
                      outline: 'none',
                      fontWeight: 700,
                      fontFamily: 'var(--font-mono, monospace)'
                    }}
                  />
                </div>

                <div>
                  <label style={{ display: 'block', fontSize: '0.78rem', fontWeight: 900, color: '#000000', marginBottom: '0.25rem', fontFamily: 'var(--font-mono, monospace)' }}>
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
                      borderRadius: '6px',
                      border: '2px solid #000000',
                      background: '#fafafa',
                      color: '#000000',
                      fontSize: '0.88rem',
                      outline: 'none',
                      resize: 'vertical',
                      fontWeight: 700,
                      fontFamily: 'var(--font-mono, monospace)'
                    }}
                  />
                </div>

                <button
                  type="submit"
                  style={{
                    padding: '0.75rem',
                    borderRadius: '6px',
                    background: '#38bdf8',
                    color: '#000000',
                    fontWeight: 900,
                    fontSize: '0.88rem',
                    border: '2px solid #000000',
                    boxShadow: '2px 2px 0 #000000',
                    cursor: 'pointer',
                    fontFamily: 'var(--font-mono, monospace)'
                  }}
                >
                  Send Message ↗
                </button>
              </form>
            )}
          </div>

          {/* Social Media Links Container */}
          <div
            style={{
              background: '#ffffff',
              border: '2px solid #000000',
              borderRadius: '8px',
              padding: '1.5rem',
              boxShadow: '3px 3px 0 #000000',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between'
            }}
          >
            <div>
              <h3 style={{ fontSize: '1.1rem', fontWeight: 900, color: '#000000', marginBottom: '1rem', fontFamily: 'var(--font-mono, monospace)' }}>
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
                      onClick={() => playRetroClick()}
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                        padding: '0.75rem 1rem',
                        borderRadius: '6px',
                        background: s.bg,
                        border: '2px solid #000000',
                        boxShadow: '2px 2px 0 #000000',
                        color: '#000000',
                        textDecoration: 'none'
                      }}
                    >
                      <div style={{ display: 'flex', alignItems: 'center', gap: '0.65rem' }}>
                        <Icon size={18} color="#000000" />
                        <span style={{ fontWeight: 900, fontSize: '0.88rem', fontFamily: 'var(--font-mono, monospace)' }}>{s.name}</span>
                      </div>

                      <span style={{ fontSize: '0.78rem', fontFamily: 'var(--font-mono, monospace)', fontWeight: 800, color: '#000000' }}>
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
                borderTop: '2px solid #000000',
                fontSize: '0.78rem',
                color: '#000000',
                fontWeight: 900,
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
      </MacWindowWrapper>
    </footer>
  );
}
