import React, { useState } from 'react';

export default function MacControlStrip({ openWindows, onFocusApp, onLaunchApp }) {
  const [hoveredApp, setHoveredApp] = useState(null);

  const apps = [
    { id: 'chronolens', name: 'ChronoLens.app', icon: '⚡', color: 'var(--mac-pink)' },
    { id: 'memoire', name: 'Memoire.app', icon: '🧠', color: 'var(--mac-purple)' },
    { id: 'nuvault', name: 'Nuvault.app', icon: '🔐', color: 'var(--mac-cyan)' },
    { id: 'cfls', name: 'CFLS.app', icon: '🔒', color: 'var(--mac-lime)' },
    { id: 'projects', name: 'Projects.finder', icon: '📁', color: 'var(--mac-yellow)' },
    { id: 'resume', name: 'Resume.pdf', icon: '📄', color: '#ffffff' },
    { id: 'chooser', name: 'The Chooser', icon: '📡', color: 'var(--mac-cyan)' },
    { id: 'control_panels', name: 'Control Panel', icon: '🎛️', color: 'var(--mac-pink)' },
    { id: 'terminal', name: 'Terminal.cli', icon: '💻', color: '#000000' }
  ];

  return (
    <div
      className="mac-control-strip"
      style={{
        position: 'fixed',
        bottom: '12px',
        left: '50%',
        transform: 'translateX(-50%)',
        height: '56px',
        background: 'linear-gradient(180deg, #ffffff 0%, #cbd5e1 100%)',
        border: '2px solid #000000',
        borderRadius: '16px',
        boxShadow: '4px 4px 0px #000000',
        display: 'flex',
        alignItems: 'center',
        gap: '0.6rem',
        padding: '0 0.85rem',
        zIndex: 900,
        fontFamily: 'var(--font-mac-title)',
        maxWidth: '96vw',
        overflow: 'visible'
      }}
    >
      {apps.map((app) => {
        const isOpen = openWindows[app.id];
        const isHovered = hoveredApp === app.id;

        return (
          <div
            key={app.id}
            style={{ position: 'relative' }}
            onMouseEnter={() => setHoveredApp(app.id)}
            onMouseLeave={() => setHoveredApp(null)}
          >
            {/* Hover Tooltip Label */}
            {isHovered && (
              <div
                style={{
                  position: 'absolute',
                  top: '-34px',
                  left: '50%',
                  transform: 'translateX(-50%)',
                  background: '#000000',
                  color: '#ffffff',
                  padding: '2px 8px',
                  border: '1px solid #ffffff',
                  borderRadius: '4px',
                  fontSize: '0.9rem',
                  fontWeight: 'bold',
                  whiteSpace: 'nowrap',
                  boxShadow: '2px 2px 0px #000',
                  zIndex: 901
                }}
              >
                {app.name}
              </div>
            )}

            {/* Retro-Modern Dock Icon Item */}
            <button
              onClick={() => {
                if (isOpen) {
                  onFocusApp(app.id);
                } else {
                  onLaunchApp(app.id);
                }
              }}
              style={{
                width: '42px',
                height: '42px',
                borderRadius: '10px',
                background: app.color,
                border: '2px solid #000000',
                boxShadow: isHovered ? '3px 3px 0px #000' : '1px 1px 0px #000',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '1.4rem',
                cursor: 'pointer',
                transition: 'transform 0.15s cubic-bezier(0.2, 0.9, 0.3, 1), box-shadow 0.15s ease',
                transform: isHovered ? 'translateY(-6px) scale(1.16)' : 'translateY(0) scale(1)',
                outline: 'none'
              }}
            >
              <span>{app.icon}</span>
            </button>

            {/* Glowing Active Dot Indicator */}
            {isOpen && (
              <div
                style={{
                  position: 'absolute',
                  bottom: '-6px',
                  left: '50%',
                  transform: 'translateX(-50%)',
                  width: '5px',
                  height: '5px',
                  borderRadius: '50%',
                  background: '#000000',
                  boxShadow: '0 0 4px var(--mac-pink)'
                }}
              />
            )}
          </div>
        );
      })}
    </div>
  );
}
