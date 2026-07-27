import React, { useState } from 'react';
import { personalInfo } from '../data/portfolioData';

export default function ContactMacDialog() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.name && formData.email && formData.message) {
      setSubmitted(true);
      setTimeout(() => {
        setFormData({ name: '', email: '', message: '' });
      }, 4000);
    }
  };

  return (
    <div style={{ fontFamily: 'var(--font-mac-title)' }}>
      <div style={{ borderBottom: '2px solid #000', paddingBottom: '0.5rem', marginBottom: '1rem' }}>
        <h2 style={{ fontSize: '1.6rem', color: '#000' }}>✉️ System 7 Dialog — Contact Arjun Sabu</h2>
        <span style={{ fontSize: '1.1rem', color: 'var(--mac-purple-dark)' }}>Send a direct message or collaboration inquiry</span>
      </div>

      {submitted ? (
        <div
          style={{
            background: 'var(--mac-lime)',
            border: '2px solid #000',
            boxShadow: '4px 4px 0px #000',
            padding: '1.5rem',
            textAlign: 'center'
          }}
        >
          <h3 style={{ fontSize: '1.6rem', marginBottom: '0.4rem' }}>Message Transmitted Successfully!</h3>
          <p style={{ fontSize: '1.2rem' }}>Thank you for reaching out. Arjun Sabu will respond shortly.</p>
        </div>
      ) : (
        <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
          <div>
            <label style={{ display: 'block', fontSize: '1.15rem', fontWeight: 'bold', marginBottom: '0.2rem' }}>
              Your Name:
            </label>
            <input
              type="text"
              required
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              placeholder="Jane Doe"
              style={{
                width: '100%',
                padding: '0.5rem',
                border: '2px solid #000',
                borderRadius: '4px',
                fontFamily: 'var(--font-mac-body)',
                fontSize: '1rem',
                outline: 'none',
                boxShadow: 'inset 2px 2px 0px rgba(0,0,0,0.1)'
              }}
            />
          </div>

          <div>
            <label style={{ display: 'block', fontSize: '1.15rem', fontWeight: 'bold', marginBottom: '0.2rem' }}>
              Return Address (Email):
            </label>
            <input
              type="email"
              required
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              placeholder="jane@example.com"
              style={{
                width: '100%',
                padding: '0.5rem',
                border: '2px solid #000',
                borderRadius: '4px',
                fontFamily: 'var(--font-mac-body)',
                fontSize: '1rem',
                outline: 'none',
                boxShadow: 'inset 2px 2px 0px rgba(0,0,0,0.1)'
              }}
            />
          </div>

          <div>
            <label style={{ display: 'block', fontSize: '1.15rem', fontWeight: 'bold', marginBottom: '0.2rem' }}>
              Message Payload:
            </label>
            <textarea
              required
              rows={4}
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              placeholder="Type your message here..."
              style={{
                width: '100%',
                padding: '0.5rem',
                border: '2px solid #000',
                borderRadius: '4px',
                fontFamily: 'var(--font-mac-body)',
                fontSize: '1rem',
                outline: 'none',
                boxShadow: 'inset 2px 2px 0px rgba(0,0,0,0.1)'
              }}
            />
          </div>

          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: '0.5rem' }}>
            <div style={{ fontSize: '1.05rem', color: '#666' }}>
              Direct: {personalInfo.email}
            </div>
            <button type="submit" className="mac-btn mac-btn-purple">
              Transmit Message ✉️
            </button>
          </div>
        </form>
      )}
    </div>
  );
}
