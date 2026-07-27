import React from 'react';

export default function LaunchpadOverlay({ isOpen, onClose, onOpenApp }) {
  if (!isOpen) return null;

  const apps = [
    { id: 'chronolens', name: 'ChronoLens.app', color: '#ff66b2', emoji: '⚡', desc: 'Reliability Loop' },
    { id: 'memoire', name: 'Memoire.app', color: '#b560e8', emoji: '🧠', desc: 'AI Memory Graph' },
    { id: 'nuvault', name: 'Nuvault.app', color: '#48c6ff', emoji: '🔐', desc: 'Zero-Trust Vault' },
    { id: 'cfls', name: 'CFLS.app', color: '#9ee635', emoji: '🔒', desc: 'File Lock Sync' },
    { id: 'projects', name: 'Projects.finder', color: '#ffdb38', emoji: '📁', desc: 'Work Explorer' },
    { id: 'resume', name: 'Resume.pdf', color: '#ffffff', emoji: '📄', desc: 'CV Document' },
    { id: 'chooser', name: 'The Chooser', color: '#48c6ff', emoji: '📡', desc: 'Network Hub' },
    { id: 'control_panels', name: 'Control Panel', color: '#ff66b2', emoji: '🎛️', desc: 'Monitors & Audio' },
    { id: 'extensions', name: 'Extensions.mgr', color: '#9ee635', emoji: '🧩', desc: 'Tech Filters' },
    { id: 'terminal', name: 'Terminal.cli', color: '#000000', emoji: '💻', desc: 'System Console' },
    { id: 'calculator', name: 'Calculator', color: '#ff66b2', emoji: '🧮', desc: 'Desk Accessory' },
    { id: 'puzzle', name: 'Puzzle 15', color: '#48c6ff', emoji: '🧩', desc: '15-Tile Game' }
  ];

  return (
    <div
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        background: 'rgba(26, 15, 43, 0.92)',
        backdropFilter: 'blur(8px)',
        zIndex: 9999,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '2rem',
        fontFamily: 'var(--font-mac-title)',
        animation: 'launchpadFade 0.2s ease-out'
      }}
      onClick={onClose}
    >
      <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
        <h1 style={{ fontSize: '2.5rem', color: '#ffffff', textShadow: '3px 3px 0px #000' }}>
           System 7 Applications Grid
        </h1>
        <span style={{ fontSize: '1.2rem', color: 'var(--mac-cyan)', fontWeight: 'bold' }}>
          Click any application to launch instantly
        </span>
      </div>

      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(130px, 1fr))',
          gap: '1.75rem',
          maxWidth: '850px',
          width: '100%'
        }}
        onClick={(e) => e.stopPropagation()}
      >
        {apps.map((app) => (
          <div
            key={app.id}
            onClick={() => {
              onOpenApp(app.id);
              onClose();
            }}
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              gap: '0.5rem',
              cursor: 'pointer',
              padding: '1rem',
              borderRadius: '8px',
              transition: 'transform 0.15s ease'
            }}
            onMouseEnter={(e) => (e.currentTarget.style.transform = 'scale(1.08)')}
            onMouseLeave={(e) => (e.currentTarget.style.transform = 'scale(1)')}
          >
            <div
              style={{
                width: '64px',
                height: '64px',
                borderRadius: '14px',
                background: app.color,
                border: '3px solid #000',
                boxShadow: '4px 4px 0px #000',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '2rem'
              }}
            >
              {app.emoji}
            </div>
            <div style={{ color: '#ffffff', fontSize: '1.15rem', fontWeight: 'bold', textShadow: '2px 2px 0px #000', textAlign: 'center' }}>
              {app.name}
            </div>
            <div style={{ fontSize: '0.85rem', color: 'var(--mac-yellow)', textAlign: 'center' }}>
              {app.desc}
            </div>
          </div>
        ))}
      </div>

      <button
        onClick={onClose}
        className="mac-btn mac-btn-pink"
        style={{ marginTop: '2rem', fontSize: '1.2rem' }}
      >
        Close Launchpad ✕
      </button>

      <style>{`
        @keyframes launchpadFade {
          from { opacity: 0; transform: scale(0.96); }
          to { opacity: 1; transform: scale(1); }
        }
      `}</style>
    </div>
  );
}
