import React from 'react';

export default function DesktopIcons({ onOpenApp, onEmptyTrash }) {
  const icons = [
    { id: 'chronolens', name: 'ChronoLens.app', color: '#ff66b2', emoji: '⚡' },
    { id: 'memoire', name: 'Memoire.app', color: '#b560e8', emoji: '🧠' },
    { id: 'nuvault', name: 'Nuvault.app', color: '#48c6ff', emoji: '🔐' },
    { id: 'cfls', name: 'CFLS.app', color: '#9ee635', emoji: '🔒' },
    { id: 'projects', name: 'Projects.finder', color: '#ffdb38', emoji: '📁' },
    { id: 'resume', name: 'Resume.pdf', color: '#ffffff', emoji: '📄' },
    { id: 'extensions', name: 'Extensions.mgr', color: '#9ee635', emoji: '🧩' },
    { id: 'chooser', name: 'The Chooser', color: '#48c6ff', emoji: '📡' },
    { id: 'control_panels', name: 'Control Panel', color: '#ff66b2', emoji: '🎛️' },
    { id: 'terminal', name: 'Terminal.cli', color: '#000000', emoji: '💻' },
    { id: 'trash', name: 'Trash.bin', color: '#e2e8f0', emoji: '🗑️' }
  ];

  const handleClick = (id) => {
    if (id === 'trash') {
      onEmptyTrash();
    } else {
      onOpenApp(id);
    }
  };

  return (
    <div
      className="mac-desktop-icons-container"
      style={{
        position: 'fixed',
        top: '42px',
        right: '20px',
        bottom: '85px',
        display: 'flex',
        flexDirection: 'column',
        flexWrap: 'wrap-reverse',
        alignContent: 'flex-start',
        gap: '0.65rem',
        zIndex: 5,
        maxHeight: 'calc(100vh - 130px)',
        overflow: 'visible'
      }}
    >
      {icons.map((icon) => (
        <div
          key={icon.id}
          className="mac-desktop-icon"
          onDoubleClick={() => handleClick(icon.id)}
          onClick={() => handleClick(icon.id)}
        >
          <div className="mac-desktop-icon-img" style={{ background: icon.color }}>
            <span style={{ fontSize: '1.35rem' }}>{icon.emoji}</span>
          </div>
          <div className="mac-desktop-icon-label">{icon.name}</div>
        </div>
      ))}
    </div>
  );
}
