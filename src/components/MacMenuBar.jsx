import React, { useState, useEffect } from 'react';
import { personalInfo } from '../data/portfolioData';

export default function MacMenuBar({
  onOpenApp,
  soundMuted,
  toggleSound,
  onTriggerBomb,
  onEmptyTrash,
  onOpenSpotlight,
  onOpenLaunchpad
}) {
  const [timeStr, setTimeStr] = useState('');
  const [activeMenu, setActiveMenu] = useState(null);

  useEffect(() => {
    const updateTime = () => {
      const d = new Date();
      setTimeStr(d.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }));
    };
    updateTime();
    const interval = setInterval(updateTime, 10000);
    return () => clearInterval(interval);
  }, []);

  const menus = [
    {
      name: '',
      items: [
        { label: 'About This Computer...', action: () => onOpenApp('about_computer') },
        { label: 'About Arjun Sabu', action: () => onOpenApp('about') },
        { label: 'Launchpad Grid (All Apps)', action: onOpenLaunchpad },
        { label: 'Resume.pdf (CV Document)', action: () => onOpenApp('resume') },
        { label: 'The Chooser (Network Hub)', action: () => onOpenApp('chooser') },
        { label: 'Control Panels (Themes)', action: () => onOpenApp('control_panels') },
        { label: 'Desk Accessory: Calculator', action: () => onOpenApp('calculator') },
        { label: 'Desk Accessory: Puzzle 15', action: () => onOpenApp('puzzle') }
      ]
    },
    {
      name: 'File',
      items: [
        { label: 'Open Projects Finder', action: () => onOpenApp('projects') },
        { label: 'Extensions Manager (Tech Filter)', action: () => onOpenApp('extensions') },
        { label: 'Spotlight Search (⌘ + Space)', action: onOpenSpotlight },
        { label: 'Open Terminal.cli', action: () => onOpenApp('terminal') },
        { label: 'Close All Windows', action: () => onOpenApp('closeAll') }
      ]
    },
    {
      name: 'Edit',
      items: [
        { label: 'Copy Bio to Clipboard', action: () => { navigator.clipboard.writeText(personalInfo.bio); alert('Bio copied to clipboard!'); } },
        { label: 'Open Mail Dialog', action: () => onOpenApp('contact') }
      ]
    },
    {
      name: 'Projects',
      items: [
        { label: '1. ChronoLens.app (SigNoz Winner)', action: () => onOpenApp('chronolens') },
        { label: '2. Memoire.app (AI Memory Graph)', action: () => onOpenApp('memoire') },
        { label: '3. Nuvault.app (Zero-Trust Vault)', action: () => onOpenApp('nuvault') },
        { label: '4. CFLS.app (File Lock Sync)', action: () => onOpenApp('cfls') }
      ]
    },
    {
      name: 'Special',
      items: [
        { label: 'Launchpad Grid 🚀', action: onOpenLaunchpad },
        { label: 'Crash System 💣 (Easter Egg)', action: onTriggerBomb },
        { label: 'Empty Trash 🗑️', action: onEmptyTrash },
        { label: 'Restart Macintosh 🔄', action: () => window.location.reload() }
      ]
    }
  ];

  return (
    <div
      style={{
        height: '30px',
        background: 'linear-gradient(180deg, #ffffff 0%, #e2e8f0 100%)',
        borderBottom: '2px solid #000000',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: '0 0.8rem',
        fontFamily: 'var(--font-mac-title)',
        fontSize: '1.2rem',
        fontWeight: 'bold',
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 1000,
        boxShadow: '0 2px 0px #000000'
      }}
    >
      {/* Left Menu Items with Mouse Enter Hover Dropdowns */}
      <div style={{ display: 'flex', alignItems: 'center', gap: '0.2rem' }}>
        {menus.map((menu) => (
          <div
            key={menu.name}
            style={{ position: 'relative' }}
            onMouseEnter={() => setActiveMenu(menu.name)}
            onMouseLeave={() => setActiveMenu(null)}
          >
            <button
              onClick={() => setActiveMenu(activeMenu === menu.name ? null : menu.name)}
              style={{
                background: activeMenu === menu.name ? '#000000' : 'transparent',
                color: activeMenu === menu.name ? '#ffffff' : '#000000',
                border: 'none',
                padding: '0.1rem 0.6rem',
                cursor: 'pointer',
                fontFamily: 'var(--font-mac-title)',
                fontSize: '1.2rem',
                fontWeight: 'bold',
                borderRadius: '3px',
                transition: 'background 0.1s ease, color 0.1s ease'
              }}
            >
              {menu.name}
            </button>

            {/* Dropdown Menu */}
            {activeMenu === menu.name && (
              <div
                style={{
                  position: 'absolute',
                  top: '26px',
                  left: 0,
                  background: '#ffffff',
                  border: '2px solid #000000',
                  boxShadow: '4px 4px 0px #000000',
                  minWidth: '240px',
                  display: 'flex',
                  flexDirection: 'column',
                  zIndex: 1001,
                  padding: '4px 0',
                  animation: 'menuDrop 0.12s ease-out'
                }}
              >
                {menu.items.map((item, idx) => (
                  <button
                    key={idx}
                    onClick={() => {
                      item.action();
                      setActiveMenu(null);
                    }}
                    style={{
                      background: 'transparent',
                      border: 'none',
                      padding: '0.4rem 0.9rem',
                      textAlign: 'left',
                      fontFamily: 'var(--font-mac-title)',
                      fontSize: '1.1rem',
                      color: '#000000',
                      cursor: 'pointer',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between'
                    }}
                    onMouseEnter={(e) => {
                      e.target.style.background = 'var(--mac-purple)';
                      e.target.style.color = '#ffffff';
                    }}
                    onMouseLeave={(e) => {
                      e.target.style.background = 'transparent';
                      e.target.style.color = '#000000';
                    }}
                  >
                    <span>{item.label}</span>
                  </button>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Right Apple OS Status Bar & Shortcuts */}
      <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', color: '#000000' }}>
        <button
          onClick={onOpenSpotlight}
          title="Spotlight Search (⌘ + Space)"
          style={{
            background: 'var(--mac-yellow)',
            border: '1px solid #000',
            padding: '0 5px',
            fontFamily: 'var(--font-mac-title)',
            fontSize: '1rem',
            fontWeight: 'bold',
            cursor: 'pointer'
          }}
        >
          🔍 Spotlight
        </button>
        <button
          onClick={toggleSound}
          title="Toggle System Sounds"
          style={{
            background: 'none',
            border: 'none',
            fontFamily: 'var(--font-mac-title)',
            fontSize: '1.1rem',
            cursor: 'pointer'
          }}
        >
          {soundMuted ? '🔇' : '🔊'}
        </button>
        <span
          style={{
            border: '1px solid #000',
            padding: '0 5px',
            background: 'var(--mac-lime)',
            fontSize: '1rem'
          }}
        >
          {timeStr}
        </span>
      </div>

      <style>{`
        @keyframes menuDrop {
          from { opacity: 0; transform: translateY(-4px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </div>
  );
}
