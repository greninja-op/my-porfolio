import React, { useState } from 'react';
import { IconSparkles, IconX } from './Icons';

export default function UIConfigurator({
  theme,
  setTheme,
  accentColor,
  setAccentColor,
  fontStyle,
  setFontStyle,
  borderRadius,
  setBorderRadius
}) {
  const [open, setOpen] = useState(false);

  const accents = [
    { id: 'cyan', name: 'Cyan Tech', color: '#06b6d4' },
    { id: 'violet', name: 'Violet AI', color: '#8b5cf6' },
    { id: 'emerald', name: 'Emerald SRE', color: '#10b981' },
    { id: 'rose', name: 'Rose Cyber', color: '#f43f5e' }
  ];

  const fonts = [
    { id: 'sans', name: 'Modern Sans', family: 'system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif' },
    { id: 'mono', name: 'Tech Mono', family: '"Fira Code", "Courier New", Courier, monospace' },
    { id: 'geometric', name: 'Geometric', family: '"Outfit", "Trebuchet MS", sans-serif' }
  ];

  const radiuses = [
    { id: 'sharp', name: 'Sharp (4px)', value: '4px' },
    { id: 'smooth', name: 'Smooth (14px)', value: '14px' },
    { id: 'pill', name: 'Rounded (24px)', value: '24px' }
  ];

  return (
    <div style={{ position: 'fixed', bottom: '1.5rem', right: '1.5rem', zIndex: 9000 }}>
      {/* Floating Toggle Button */}
      {!open && (
        <button
          onClick={() => setOpen(true)}
          title="Open Live UI Design Token Configurator"
          style={{
            padding: '0.65rem 1.1rem',
            borderRadius: '9999px',
            background: 'var(--accent-primary, #06b6d4)',
            color: '#ffffff',
            border: 'none',
            fontWeight: 700,
            fontSize: '0.85rem',
            cursor: 'pointer',
            boxShadow: '0 8px 25px rgba(6, 182, 212, 0.35)',
            display: 'flex',
            alignItems: 'center',
            gap: '0.5rem',
            transition: 'transform 0.2s ease'
          }}
          onMouseEnter={(e) => (e.currentTarget.style.transform = 'scale(1.05)')}
          onMouseLeave={(e) => (e.currentTarget.style.transform = 'scale(1)')}
        >
          <IconSparkles size={16} /> Live UI Configurator
        </button>
      )}

      {/* Expanded Token Configurator Panel */}
      {open && (
        <div
          style={{
            width: '320px',
            background: 'var(--card-bg, rgba(26, 31, 55, 0.95))',
            backdropFilter: 'blur(16px)',
            WebkitBackdropFilter: 'blur(16px)',
            border: '1px solid var(--border-subtle, rgba(255, 255, 255, 0.2))',
            borderRadius: '16px',
            padding: '1.25rem',
            boxShadow: '0 20px 40px rgba(0,0,0,0.5)',
            color: 'var(--text-primary, #ffffff)',
            display: 'flex',
            flexDirection: 'column',
            gap: '1rem'
          }}
        >
          {/* Header */}
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', borderBottom: '1px solid var(--border-subtle, rgba(255,255,255,0.1))', paddingBottom: '0.6rem' }}>
            <div style={{ fontWeight: 700, fontSize: '0.95rem', display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
              🎨 Interactive UI Tokens
            </div>
            <button
              onClick={() => setOpen(false)}
              style={{
                background: 'transparent',
                border: 'none',
                color: 'var(--text-secondary, #94a3b8)',
                cursor: 'pointer'
              }}
            >
              <IconX size={16} />
            </button>
          </div>

          {/* Theme Mode Switcher */}
          <div>
            <label style={{ display: 'block', fontSize: '0.78rem', textTransform: 'uppercase', fontWeight: 700, color: 'var(--text-secondary, #94a3b8)', marginBottom: '0.4rem' }}>
              Theme Mode
            </label>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.4rem' }}>
              <button
                onClick={() => setTheme('dark')}
                style={{
                  padding: '0.4rem',
                  borderRadius: '6px',
                  border: theme === 'dark' ? '2px solid var(--accent-primary, #06b6d4)' : '1px solid var(--border-subtle, rgba(255,255,255,0.15))',
                  background: theme === 'dark' ? 'rgba(6, 182, 212, 0.2)' : 'transparent',
                  color: '#fff',
                  fontSize: '0.8rem',
                  fontWeight: 600,
                  cursor: 'pointer'
                }}
              >
                🌙 Dark Mode
              </button>
              <button
                onClick={() => setTheme('light')}
                style={{
                  padding: '0.4rem',
                  borderRadius: '6px',
                  border: theme === 'light' ? '2px solid var(--accent-primary, #06b6d4)' : '1px solid var(--border-subtle, rgba(255,255,255,0.15))',
                  background: theme === 'light' ? 'rgba(6, 182, 212, 0.2)' : 'transparent',
                  color: '#fff',
                  fontSize: '0.8rem',
                  fontWeight: 600,
                  cursor: 'pointer'
                }}
              >
                ☀️ Light Mode
              </button>
            </div>
          </div>

          {/* Accent Color Token */}
          <div>
            <label style={{ display: 'block', fontSize: '0.78rem', textTransform: 'uppercase', fontWeight: 700, color: 'var(--text-secondary, #94a3b8)', marginBottom: '0.4rem' }}>
              Primary Accent Color
            </label>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '0.4rem' }}>
              {accents.map((acc) => (
                <button
                  key={acc.id}
                  onClick={() => setAccentColor(acc.id)}
                  title={acc.name}
                  style={{
                    height: '32px',
                    borderRadius: '6px',
                    background: acc.color,
                    border: accentColor === acc.id ? '2px solid #ffffff' : 'none',
                    cursor: 'pointer',
                    boxShadow: accentColor === acc.id ? `0 0 10px ${acc.color}` : 'none'
                  }}
                />
              ))}
            </div>
          </div>

          {/* Font Pair Preset */}
          <div>
            <label style={{ display: 'block', fontSize: '0.78rem', textTransform: 'uppercase', fontWeight: 700, color: 'var(--text-secondary, #94a3b8)', marginBottom: '0.4rem' }}>
              Typography Pair
            </label>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.3rem' }}>
              {fonts.map((f) => (
                <button
                  key={f.id}
                  onClick={() => setFontStyle(f.id)}
                  style={{
                    padding: '0.4rem 0.6rem',
                    borderRadius: '6px',
                    border: fontStyle === f.id ? '1px solid var(--accent-primary, #06b6d4)' : '1px solid transparent',
                    background: fontStyle === f.id ? 'rgba(6, 182, 212, 0.15)' : 'rgba(255,255,255,0.05)',
                    color: '#fff',
                    fontSize: '0.8rem',
                    textAlign: 'left',
                    fontFamily: f.family,
                    cursor: 'pointer'
                  }}
                >
                  {f.name}
                </button>
              ))}
            </div>
          </div>

          {/* UI Border Radius */}
          <div>
            <label style={{ display: 'block', fontSize: '0.78rem', textTransform: 'uppercase', fontWeight: 700, color: 'var(--text-secondary, #94a3b8)', marginBottom: '0.4rem' }}>
              Container Border Radius
            </label>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '0.3rem' }}>
              {radiuses.map((r) => (
                <button
                  key={r.id}
                  onClick={() => setBorderRadius(r.id)}
                  style={{
                    padding: '0.35rem',
                    borderRadius: '6px',
                    border: borderRadius === r.id ? '1px solid var(--accent-primary, #06b6d4)' : '1px solid rgba(255,255,255,0.1)',
                    background: borderRadius === r.id ? 'rgba(6, 182, 212, 0.2)' : 'transparent',
                    color: '#fff',
                    fontSize: '0.75rem',
                    cursor: 'pointer'
                  }}
                >
                  {r.name}
                </button>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
