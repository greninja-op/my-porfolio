import React, { useRef, useEffect } from 'react';

export default function ControlCentrePopover({
  isOpen,
  onClose,
  onOpenSettings,
  volume,
  setVolume,
  soundMuted,
  toggleSound,
  monochromeMode,
  toggleMonochrome,
  crtShader,
  setCrtShader,
  triggerScreensaver,
  desktopPattern,
  setDesktopPattern
}) {
  const popoverRef = useRef(null);

  useEffect(() => {
    if (!isOpen) return;
    const handleClickOutside = (e) => {
      if (popoverRef.current && !popoverRef.current.contains(e.target)) {
        onClose();
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const wallpapers = [
    { id: 'purple_dots', color: '#8c71e0' },
    { id: 'teal_grid', color: '#008080' },
    { id: 'checkerboard', color: '#475569' },
    { id: 'starfield', color: '#090d16' },
    { id: 'platinum_gray', color: '#7b8794' }
  ];

  return (
    <div
      ref={popoverRef}
      style={{
        position: 'fixed',
        top: '34px',
        right: '16px',
        width: '280px',
        background: 'rgba(30, 18, 50, 0.96)',
        backdropFilter: 'blur(14px)',
        WebkitBackdropFilter: 'blur(14px)',
        border: '2px solid #000',
        borderRadius: '12px',
        boxShadow: '6px 8px 0px #000000, 0 0 30px rgba(181, 96, 232, 0.3)',
        zIndex: 9998,
        padding: '14px',
        fontFamily: 'var(--font-mac-title)',
        color: '#ffffff',
        animation: 'ccDrop 0.15s cubic-bezier(0.18, 0.89, 0.32, 1.28)'
      }}
    >
      {/* Header */}
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '12px', borderBottom: '1px solid rgba(255,255,255,0.15)', paddingBottom: '8px' }}>
        <span style={{ fontSize: '1.2rem', fontWeight: 'bold', color: '#fff' }}>🎛️ Control Centre</span>
        <button
          onClick={onClose}
          style={{ background: 'none', border: 'none', color: '#aaa', fontSize: '1.1rem', cursor: 'pointer', lineHeight: 1 }}
        >
          ✕
        </button>
      </div>

      {/* Volume Row */}
      <div style={{ marginBottom: '12px' }}>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '6px' }}>
          <span style={{ fontSize: '1rem', color: '#d0b8ff' }}>🔊 Volume</span>
          <button
            onClick={toggleSound}
            style={{
              background: soundMuted ? 'rgba(255,100,100,0.25)' : 'rgba(158,230,53,0.25)',
              border: `1px solid ${soundMuted ? '#ff6464' : '#9ee635'}`,
              borderRadius: '20px',
              padding: '2px 10px',
              color: soundMuted ? '#ff6464' : '#9ee635',
              fontSize: '0.85rem',
              fontFamily: 'var(--font-mac-title)',
              cursor: 'pointer'
            }}
          >
            {soundMuted ? 'Muted' : 'On'}
          </button>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
          <span style={{ fontSize: '0.85rem', opacity: 0.6 }}>🔈</span>
          <input
            type="range"
            min="0" max="1" step="0.05"
            value={volume}
            onChange={(e) => {
              setVolume(parseFloat(e.target.value));
              if (parseFloat(e.target.value) > 0 && soundMuted) toggleSound();
            }}
            style={{ flex: 1, height: '5px', accentColor: 'var(--mac-purple)', cursor: 'pointer' }}
          />
          <span style={{ fontSize: '0.85rem', opacity: 0.6 }}>🔊</span>
          <span style={{ fontSize: '0.85rem', minWidth: '30px', textAlign: 'right', color: 'var(--mac-cyan)' }}>
            {Math.round(volume * 100)}%
          </span>
        </div>
      </div>

      {/* Quick Toggle Grid */}
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '8px', marginBottom: '12px' }}>

        {/* Monochrome Toggle */}
        <button
          onClick={toggleMonochrome}
          style={{
            background: monochromeMode ? 'rgba(255,255,255,0.2)' : 'rgba(255,255,255,0.06)',
            border: `1px solid ${monochromeMode ? '#ffffff' : 'rgba(255,255,255,0.2)'}`,
            borderRadius: '10px',
            padding: '10px 8px',
            color: '#fff',
            cursor: 'pointer',
            textAlign: 'center',
            transition: 'all 0.15s ease'
          }}
        >
          <div style={{ fontSize: '1.4rem', marginBottom: '3px' }}>⬛</div>
          <div style={{ fontSize: '0.8rem', fontFamily: 'var(--font-mac-title)', color: monochromeMode ? '#fff' : '#aaa' }}>
            {monochromeMode ? 'B&W Active' : '1-Bit Mode'}
          </div>
        </button>

        {/* CRT Shader Toggle */}
        <button
          onClick={() => setCrtShader(!crtShader)}
          style={{
            background: crtShader ? 'rgba(72, 198, 255, 0.2)' : 'rgba(255,255,255,0.06)',
            border: `1px solid ${crtShader ? '#48c6ff' : 'rgba(255,255,255,0.2)'}`,
            borderRadius: '10px',
            padding: '10px 8px',
            color: '#fff',
            cursor: 'pointer',
            textAlign: 'center',
            transition: 'all 0.15s ease'
          }}
        >
          <div style={{ fontSize: '1.4rem', marginBottom: '3px' }}>📺</div>
          <div style={{ fontSize: '0.8rem', fontFamily: 'var(--font-mac-title)', color: crtShader ? '#48c6ff' : '#aaa' }}>
            {crtShader ? 'CRT ON' : 'CRT OFF'}
          </div>
        </button>

        {/* Screensaver */}
        <button
          onClick={() => { triggerScreensaver(); onClose(); }}
          style={{
            background: 'rgba(255,102,178,0.12)',
            border: '1px solid rgba(255,102,178,0.35)',
            borderRadius: '10px',
            padding: '10px 8px',
            color: '#fff',
            cursor: 'pointer',
            textAlign: 'center',
            transition: 'all 0.15s ease'
          }}
        >
          <div style={{ fontSize: '1.4rem', marginBottom: '3px' }}>🌙</div>
          <div style={{ fontSize: '0.8rem', fontFamily: 'var(--font-mac-title)', color: '#ff66b2' }}>
            Screensaver
          </div>
        </button>

        {/* Full Settings Button */}
        <button
          onClick={() => { onOpenSettings(); onClose(); }}
          style={{
            background: 'rgba(181, 96, 232, 0.2)',
            border: '1px solid rgba(181,96,232,0.5)',
            borderRadius: '10px',
            padding: '10px 8px',
            color: '#fff',
            cursor: 'pointer',
            textAlign: 'center',
            transition: 'all 0.15s ease'
          }}
        >
          <div style={{ fontSize: '1.4rem', marginBottom: '3px' }}>⚙️</div>
          <div style={{ fontSize: '0.8rem', fontFamily: 'var(--font-mac-title)', color: '#d0b8ff' }}>
            Settings
          </div>
        </button>
      </div>

      {/* Desktop Wallpaper Quick Picker */}
      <div>
        <div style={{ fontSize: '0.85rem', color: '#d0b8ff', marginBottom: '6px' }}>🖥️ Desktop Pattern</div>
        <div style={{ display: 'flex', gap: '6px' }}>
          {wallpapers.map((w) => (
            <button
              key={w.id}
              onClick={() => setDesktopPattern(w.id)}
              style={{
                flex: 1,
                height: '24px',
                background: w.color,
                border: desktopPattern === w.id ? '2px solid #ffffff' : '2px solid rgba(255,255,255,0.2)',
                borderRadius: '5px',
                cursor: 'pointer',
                boxShadow: desktopPattern === w.id ? '0 0 6px rgba(255,255,255,0.5)' : 'none',
                transition: 'all 0.1s ease'
              }}
              title={w.id}
            />
          ))}
        </div>
      </div>

      <style>{`
        @keyframes ccDrop {
          from { opacity: 0; transform: translateY(-10px) scale(0.95); }
          to { opacity: 1; transform: translateY(0) scale(1); }
        }
      `}</style>
    </div>
  );
}
