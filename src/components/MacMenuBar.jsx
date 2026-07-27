import React, { useState, useEffect } from 'react';
import { personalInfo } from '../data/portfolioData';

export default function MacMenuBar({ onOpenApp, soundMuted, toggleSound }) {
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
        { label: 'About Arjun Sabu', action: () => onOpenApp('hero') },
        { label: 'System Properties', action: () => onOpenApp('skills') },
        { label: 'Open Terminal.cli', action: () => onOpenApp('terminal') }
      ]
    },
    {
      name: 'File',
      items: [
        { label: 'New Project Window', action: () => onOpenApp('projects') },
        { label: 'Open ChronoLens Lab', action: () => onOpenApp('sandbox') },
        { label: 'Close All Windows', action: () => onOpenApp('closeAll') }
      ]
    },
    {
      name: 'Projects',
      items: [
        { label: '1. ChronoLens (SigNoz Hackathon)', action: () => onOpenApp('chronolens') },
        { label: '2. Memoire (AI Memory Graph)', action: () => onOpenApp('memoire') },
        { label: '3. Nuvault (Cloud Vault)', action: () => onOpenApp('nuvault') },
        { label: '4. CFLS (File Lock Sync)', action: () => onOpenApp('cfls') }
      ]
    },
    {
      name: 'Lab',
      items: [
        { label: 'Inject LLM Cost Spiral', action: () => onOpenApp('chaos_spiral') },
        { label: 'Inject SLO Latency Spike', action: () => onOpenApp('chaos_slo') }
      ]
    },
    {
      name: 'Special',
      items: [
        { label: 'Restart Macintosh', action: () => window.location.reload() },
        { label: 'Empty Trash', action: () => alert('Trash emptied!') }
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
        padding: '0 1rem',
        fontFamily: 'var(--font-mac-title)',
        fontSize: '1.25rem',
        fontWeight: 'bold',
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 1000,
        boxShadow: '0 2px 0px #000000'
      }}
      onClick={() => setActiveMenu(null)}
    >
      {/* Left Menu Items */}
      <div style={{ display: 'flex', alignItems: 'center', gap: '0.2rem' }}>
        {menus.map((menu) => (
          <div key={menu.name} style={{ position: 'relative' }} onClick={(e) => e.stopPropagation()}>
            <button
              onClick={() => setActiveMenu(activeMenu === menu.name ? null : menu.name)}
              style={{
                background: activeMenu === menu.name ? '#000000' : 'transparent',
                color: activeMenu === menu.name ? '#ffffff' : '#000000',
                border: 'none',
                padding: '0.1rem 0.7rem',
                cursor: 'pointer',
                fontFamily: 'var(--font-mac-title)',
                fontSize: '1.25rem',
                fontWeight: 'bold',
                borderRadius: '3px'
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
                  minWidth: '210px',
                  display: 'flex',
                  flexDirection: 'column',
                  zIndex: 1001,
                  padding: '4px 0'
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
                      padding: '0.4rem 1rem',
                      textAlign: 'left',
                      fontFamily: 'var(--font-mac-title)',
                      fontSize: '1.15rem',
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

      {/* Right Apple OS Status Bar */}
      <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', color: '#000000' }}>
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
            background: '#ffdb38',
            fontSize: '1rem'
          }}
        >
          {timeStr}
        </span>
        <span style={{ fontSize: '1.2rem' }}>[?]</span>
      </div>
    </div>
  );
}
