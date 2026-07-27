import React from 'react';

export default function ControlPanelsApp({
  soundMuted,
  toggleSound,
  colorTheme,
  changeTheme,
  playSystemSound
}) {
  const themes = [
    { id: 'cyberpop', name: 'System 7 Cyber-Pop 🎨', desc: 'Vibrant Purple, Pink, Cyan & Lime' },
    { id: 'monochrome', name: 'System 6 Monochrome ⬛', desc: 'Classic 1-bit Black & White Pixel Theme' },
    { id: 'platinum', name: 'Mac OS 8 Platinum 🔷', desc: 'Sleek 90s Metallic Gray & Blue' }
  ];

  return (
    <div style={{ fontFamily: 'var(--font-mac-title)', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
      <div style={{ borderBottom: '2px solid #000', paddingBottom: '0.5rem' }}>
        <h2 style={{ fontSize: '1.7rem', color: '#000', lineHeight: 1 }}>🎛️ Control Panel — Theme & Monitors</h2>
        <span style={{ fontSize: '1.05rem', color: 'var(--mac-purple-dark)', fontWeight: 'bold' }}>
          Desktop Monitors, Audio Effects & Accessibility Controls
        </span>
      </div>

      {/* Monitors & Theme Selector */}
      <div className="mac-group-box">
        <span className="mac-group-label">Monitors & Color Palettes</span>
        <div style={{ marginTop: '0.6rem', display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
          {themes.map((t) => (
            <button
              key={t.id}
              onClick={() => {
                changeTheme(t.id);
                if (playSystemSound) playSystemSound(900);
              }}
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                padding: '0.5rem 0.75rem',
                border: '2px solid #000',
                background: colorTheme === t.id ? 'var(--mac-purple)' : '#fff',
                color: colorTheme === t.id ? '#fff' : '#000',
                boxShadow: colorTheme === t.id ? '2px 2px 0px #000' : 'none',
                cursor: 'pointer',
                fontFamily: 'var(--font-mac-title)',
                fontSize: '1.15rem',
                fontWeight: 'bold',
                borderRadius: '4px'
              }}
            >
              <div>
                <div>{t.name}</div>
                <div style={{ fontSize: '0.9rem', opacity: 0.85 }}>{t.desc}</div>
              </div>
              {colorTheme === t.id && <span>✓ Active</span>}
            </button>
          ))}
        </div>
      </div>

      {/* Audio Effects Control */}
      <div className="mac-group-box">
        <span className="mac-group-label">System Sound Effects</span>
        <div style={{ marginTop: '0.6rem', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <div>
            <div style={{ fontSize: '1.2rem', fontWeight: 'bold' }}>Alert & Click Sounds</div>
            <div style={{ fontSize: '0.95rem', color: '#666' }}>Synthesized Mac OS System Clicks & Beeps</div>
          </div>
          <button
            onClick={() => {
              toggleSound();
              if (playSystemSound) playSystemSound(1100);
            }}
            className={`mac-btn ${!soundMuted ? 'mac-btn-lime' : 'mac-btn-pink'}`}
          >
            {!soundMuted ? '🔊 Sound Enabled' : '🔇 Muted'}
          </button>
        </div>
      </div>
    </div>
  );
}
