import React from 'react';

export default function MacControlStrip({ openWindows, onFocusApp, onLaunchApp }) {
  const apps = [
    { id: 'chronolens', name: 'ChronoLens.app', icon: '⚡', color: 'var(--mac-pink)' },
    { id: 'memoire', name: 'Memoire.app', icon: '🧠', color: 'var(--mac-purple)' },
    { id: 'nuvault', name: 'Nuvault.app', icon: '🔐', color: 'var(--mac-cyan)' },
    { id: 'cfls', name: 'CFLS.app', icon: '🔒', color: 'var(--mac-lime)' },
    { id: 'projects', name: 'Projects.finder', icon: '📁', color: 'var(--mac-yellow)' },
    { id: 'terminal', name: 'Terminal.cli', icon: '💻', color: '#000' }
  ];

  return (
    <div
      style={{
        position: 'fixed',
        bottom: '0px',
        left: '50%',
        transform: 'translateX(-50%)',
        height: '34px',
        background: 'linear-gradient(180deg, #ffffff 0%, #cbd5e1 100%)',
        border: '2px solid #000000',
        borderBottom: 'none',
        borderRadius: '8px 8px 0 0',
        display: 'flex',
        alignItems: 'center',
        gap: '0.5rem',
        padding: '0 0.75rem',
        zIndex: 900,
        boxShadow: '0 -2px 0px #000000',
        fontFamily: 'var(--font-mac-title)'
      }}
    >
      <span style={{ fontSize: '1rem', fontWeight: 'bold', color: '#000' }}>Control Strip:</span>

      {apps.map((app) => {
        const isOpen = openWindows[app.id];
        return (
          <button
            key={app.id}
            onClick={() => {
              if (isOpen) {
                onFocusApp(app.id);
              } else {
                onLaunchApp(app.id);
              }
            }}
            style={{
              background: isOpen ? app.color : '#ffffff',
              color: isOpen ? '#ffffff' : '#000000',
              border: '2px solid #000',
              boxShadow: isOpen ? '1px 1px 0px #000' : 'none',
              padding: '0.1rem 0.6rem',
              fontSize: '1rem',
              fontWeight: 'bold',
              fontFamily: 'var(--font-mac-title)',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              gap: '0.3rem',
              borderRadius: '4px'
            }}
          >
            <span>{app.icon}</span>
            <span>{app.name}</span>
            {isOpen && <span style={{ fontSize: '8px', color: '#fff' }}>●</span>}
          </button>
        );
      })}
    </div>
  );
}
