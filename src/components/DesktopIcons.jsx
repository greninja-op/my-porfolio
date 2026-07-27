import React from 'react';

export default function DesktopIcons({ onOpenApp }) {
  const icons = [
    { id: 'chronolens', name: 'ChronoLens.app', color: '#ff66b2', emoji: '⚡' },
    { id: 'memoire', name: 'Memoire.app', color: '#b560e8', emoji: '🧠' },
    { id: 'nuvault', name: 'Nuvault.app', color: '#48c6ff', emoji: '🔐' },
    { id: 'cfls', name: 'CFLS.app', color: '#9ee635', emoji: '🔒' },
    { id: 'projects', name: 'Projects.finder', color: '#ffdb38', emoji: '📁' },
    { id: 'terminal', name: 'Terminal.cli', color: '#000000', emoji: '💻' },
    { id: 'skills', name: 'Control Panel', color: '#ff66b2', emoji: '🎛️' },
    { id: 'contact', name: 'Mail.dialog', color: '#48c6ff', emoji: '✉️' }
  ];

  return (
    <div
      style={{
        position: 'fixed',
        top: '50px',
        right: '20px',
        display: 'flex',
        flexDirection: 'column',
        gap: '1.25rem',
        zIndex: 5
      }}
    >
      {icons.map((icon) => (
        <div
          key={icon.id}
          className="mac-desktop-icon"
          onDoubleClick={() => onOpenApp(icon.id)}
          onClick={() => onOpenApp(icon.id)}
        >
          <div className="mac-desktop-icon-img" style={{ background: icon.color }}>
            <span style={{ fontSize: '1.5rem' }}>{icon.emoji}</span>
          </div>
          <div className="mac-desktop-icon-label">{icon.name}</div>
        </div>
      ))}
    </div>
  );
}
