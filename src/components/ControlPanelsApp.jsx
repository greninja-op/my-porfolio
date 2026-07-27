import React, { useState } from 'react';

export default function ControlPanelsApp({
  volume,
  setVolume,
  soundMuted,
  toggleSound,
  alertSound,
  setAlertSound,
  playAlertSound,
  desktopPattern,
  setDesktopPattern,
  accentColor,
  setAccentColor,
  fontSmoothing,
  setFontSmoothing,
  monochromeMode,
  toggleMonochrome,
  crtShader,
  setCrtShader,
  triggerScreensaver,
  windowAnimations,
  setWindowAnimations,
  desktopItemsVisible,
  setDesktopItemsVisible,
  resetLayout,
  playSystemSound
}) {
  const [activeTab, setActiveTab] = useState('audio');

  const alertSounds = [
    { id: 'sosumi', name: 'Sosumi 🔔', desc: 'Classic double-chime Macintosh alert' },
    { id: 'wild_eep', name: 'Wild Eep 🔊', desc: 'High-pitched retro System 7 eep' },
    { id: 'indigo', name: 'Indigo 🎵', desc: 'Rich resonant Mac OS 8 synth chime' },
    { id: 'quack', name: 'Quack 🦆', desc: 'Vintage 90s low duck quack' }
  ];

  const wallpaperPatterns = [
    { id: 'purple_dots', name: 'System 7 Purple 💜', bg: '#8c71e0' },
    { id: 'teal_grid', name: 'Classic Teal 🌊', bg: '#008080' },
    { id: 'platinum_gray', name: 'Mac OS 8 Platinum 🔷', bg: '#7b8794' },
    { id: 'checkerboard', name: 'System 7 Checker 🏁', bg: '#475569' },
    { id: 'starfield', name: '90s Starfield 🌌', bg: '#090d16' }
  ];

  const accentColors = [
    { id: 'purple', name: 'Pop Purple', color: '#b560e8' },
    { id: 'pink', name: 'Neon Pink', color: '#ff66b2' },
    { id: 'cyan', name: 'Cyber Cyan', color: '#48c6ff' },
    { id: 'lime', name: 'Electric Lime', color: '#9ee635' },
    { id: 'gold', name: 'Amber Gold', color: '#ffdb38' }
  ];

  return (
    <div style={{ fontFamily: 'var(--font-mac-title)', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
      {/* Header Banner */}
      <div style={{ borderBottom: '2px solid #000', paddingBottom: '0.6rem' }}>
        <h2 style={{ fontSize: '1.75rem', color: '#000', lineHeight: 1 }}>⚙️ Settings — System Control Center</h2>
        <span style={{ fontSize: '1.05rem', color: 'var(--mac-purple-dark)', fontWeight: 'bold' }}>
          Hardware Audio, Display Monitors, Desktop Themes & System Settings
        </span>
      </div>

      {/* Control Panel Tab Navigator */}
      <div style={{ display: 'flex', gap: '4px', flexWrap: 'wrap', borderBottom: '2px solid #000', paddingBottom: '4px' }}>
        <button
          onClick={() => { setActiveTab('audio'); if (playSystemSound) playSystemSound(900); }}
          className={`mac-btn ${activeTab === 'audio' ? 'mac-btn-purple' : ''}`}
          style={{ fontSize: '1rem', padding: '0.25rem 0.65rem' }}
        >
          🔊 Sound & Audio
        </button>
        <button
          onClick={() => { setActiveTab('appearance'); if (playSystemSound) playSystemSound(900); }}
          className={`mac-btn ${activeTab === 'appearance' ? 'mac-btn-pink' : ''}`}
          style={{ fontSize: '1rem', padding: '0.25rem 0.65rem' }}
        >
          🎨 Appearance
        </button>
        <button
          onClick={() => { setActiveTab('display'); if (playSystemSound) playSystemSound(900); }}
          className={`mac-btn ${activeTab === 'display' ? 'mac-btn-cyan' : ''}`}
          style={{ fontSize: '1rem', padding: '0.25rem 0.65rem' }}
        >
          📺 Display & Energy
        </button>
        <button
          onClick={() => { setActiveTab('general'); if (playSystemSound) playSystemSound(900); }}
          className={`mac-btn ${activeTab === 'general' ? 'mac-btn-lime' : ''}`}
          style={{ fontSize: '1rem', padding: '0.25rem 0.65rem' }}
        >
          ⚙️ General Controls
        </button>
      </div>

      {/* TAB 1: Sound & Audio Controls (Sound cdev) */}
      {activeTab === 'audio' && (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
          {/* Master Volume Slider */}
          <div className="mac-group-box">
            <span className="mac-group-label">Sound cdev — Volume & Output</span>
            <div style={{ marginTop: '0.6rem', display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                <span style={{ fontSize: '1.2rem', fontWeight: 'bold' }}>Master Output Volume:</span>
                <span style={{ fontSize: '1.2rem', fontWeight: 'bold', color: 'var(--mac-purple-dark)' }}>
                  {Math.round(volume * 100)}%
                </span>
              </div>
              <input
                type="range"
                min="0"
                max="1"
                step="0.05"
                value={volume}
                onChange={(e) => {
                  const val = parseFloat(e.target.value);
                  setVolume(val);
                  if (val > 0 && soundMuted) toggleSound();
                }}
                style={{ width: '100%', height: '12px', accentColor: 'var(--mac-purple)', cursor: 'pointer' }}
              />
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <span style={{ fontSize: '0.95rem', color: '#666' }}>UI Clicks & Synthesized Beeps</span>
                <button
                  onClick={() => { toggleSound(); if (playSystemSound) playSystemSound(1000); }}
                  className={`mac-btn ${!soundMuted ? 'mac-btn-lime' : 'mac-btn-pink'}`}
                >
                  {!soundMuted ? '🔊 Sound Enabled' : '🔇 Muted'}
                </button>
              </div>
            </div>
          </div>

          {/* Alert Sounds Picker */}
          <div className="mac-group-box">
            <span className="mac-group-label">System Alert Sounds</span>
            <div style={{ marginTop: '0.6rem', display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
              {alertSounds.map((snd) => (
                <div
                  key={snd.id}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    padding: '0.45rem 0.75rem',
                    border: '2px solid #000',
                    background: alertSound === snd.id ? 'var(--mac-purple)' : '#ffffff',
                    color: alertSound === snd.id ? '#ffffff' : '#000000',
                    borderRadius: '4px',
                    boxShadow: alertSound === snd.id ? '2px 2px 0px #000' : 'none'
                  }}
                >
                  <div>
                    <div style={{ fontSize: '1.15rem', fontWeight: 'bold' }}>{snd.name}</div>
                    <div style={{ fontSize: '0.9rem', opacity: 0.85 }}>{snd.desc}</div>
                  </div>
                  <div style={{ display: 'flex', gap: '6px' }}>
                    <button
                      onClick={() => {
                        setAlertSound(snd.id);
                        if (playAlertSound) playAlertSound(snd.id);
                      }}
                      className="mac-btn mac-btn-cyan"
                      style={{ fontSize: '0.95rem', padding: '0.2rem 0.5rem' }}
                    >
                      ▶️ Test Sound
                    </button>
                    <button
                      onClick={() => {
                        setAlertSound(snd.id);
                        if (playAlertSound) playAlertSound(snd.id);
                      }}
                      className="mac-btn"
                      style={{ fontSize: '0.95rem', padding: '0.2rem 0.5rem', background: alertSound === snd.id ? '#000' : '#fff', color: alertSound === snd.id ? '#fff' : '#000' }}
                    >
                      {alertSound === snd.id ? '✓ Selected' : 'Select'}
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* TAB 2: Appearance & Desktop Settings */}
      {activeTab === 'appearance' && (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
          {/* Desktop Pattern Selector Grid */}
          <div className="mac-group-box">
            <span className="mac-group-label">Desktop Wallpapers & Patterns</span>
            <div style={{ marginTop: '0.6rem', display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(130px, 1fr))', gap: '0.65rem' }}>
              {wallpaperPatterns.map((pat) => (
                <button
                  key={pat.id}
                  onClick={() => {
                    setDesktopPattern(pat.id);
                    if (playSystemSound) playSystemSound(950);
                  }}
                  style={{
                    border: '2px solid #000',
                    borderRadius: '6px',
                    padding: '0.5rem',
                    background: pat.bg,
                    color: '#ffffff',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    gap: '4px',
                    boxShadow: desktopPattern === pat.id ? '3px 3px 0px #000' : '1px 1px 0px #000',
                    outline: desktopPattern === pat.id ? '3px solid #000' : 'none',
                    cursor: 'pointer'
                  }}
                >
                  <div style={{ width: '100%', height: '36px', border: '1px solid #000', borderRadius: '3px', background: pat.bg, boxShadow: 'inset 1px 1px 0 #000' }} />
                  <span style={{ fontSize: '0.95rem', fontWeight: 'bold', background: '#000', padding: '1px 4px', borderRadius: '3px', textOverflow: 'ellipsis', whiteSpace: 'nowrap', overflow: 'hidden', maxWidth: '100%' }}>
                    {pat.name}
                  </span>
                </button>
              ))}
            </div>
          </div>

          {/* Highlight Color Picker */}
          <div className="mac-group-box">
            <span className="mac-group-label">Highlight Accent Color</span>
            <div style={{ marginTop: '0.6rem', display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
              {accentColors.map((clr) => (
                <button
                  key={clr.id}
                  onClick={() => {
                    setAccentColor(clr.id);
                    if (playSystemSound) playSystemSound(1050);
                  }}
                  style={{
                    background: clr.color,
                    color: clr.id === 'gold' || clr.id === 'lime' || clr.id === 'cyan' ? '#000' : '#fff',
                    border: '2px solid #000',
                    borderRadius: '6px',
                    padding: '0.35rem 0.75rem',
                    fontSize: '1rem',
                    fontWeight: 'bold',
                    boxShadow: accentColor === clr.id ? '3px 3px 0px #000' : '1px 1px 0px #000',
                    cursor: 'pointer'
                  }}
                >
                  {clr.name} {accentColor === clr.id ? '✓' : ''}
                </button>
              ))}
            </div>
          </div>

          {/* Font Smoothing & Typeface Toggle */}
          <div className="mac-group-box">
            <span className="mac-group-label">Font Smoothing & Typography</span>
            <div style={{ marginTop: '0.6rem', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
              <div>
                <div style={{ fontSize: '1.15rem', fontWeight: 'bold' }}>Pixel Font (VT323 / Chicago)</div>
                <div style={{ fontSize: '0.95rem', color: '#666' }}>Toggle between crisp pixel font and modern vector font</div>
              </div>
              <button
                onClick={() => {
                  setFontSmoothing(fontSmoothing === 'pixel' ? 'modern' : 'pixel');
                  if (playSystemSound) playSystemSound(1150);
                }}
                className={`mac-btn ${fontSmoothing === 'pixel' ? 'mac-btn-purple' : 'mac-btn-cyan'}`}
              >
                {fontSmoothing === 'pixel' ? '👾 Pixel VT323' : '✒️ Vector Modern'}
              </button>
            </div>
          </div>
        </div>
      )}

      {/* TAB 3: Display & Performance (Monitors & Energy Saver) */}
      {activeTab === 'display' && (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
          {/* Monochrome Mode (System 6/1-bit) */}
          <div className="mac-group-box">
            <span className="mac-group-label">System 6 Monochrome (1-Bit Mode)</span>
            <div style={{ marginTop: '0.6rem', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
              <div>
                <div style={{ fontSize: '1.15rem', fontWeight: 'bold' }}>1-Bit Black & White CRT Mode</div>
                <div style={{ fontSize: '0.95rem', color: '#666' }}>Converts portfolio to pure 1984 Macintosh B&W pixel art</div>
              </div>
              <button
                onClick={() => {
                  toggleMonochrome();
                  if (playSystemSound) playSystemSound(800);
                }}
                className={`mac-btn ${monochromeMode ? 'mac-btn-pink' : 'mac-btn-lime'}`}
              >
                {monochromeMode ? '⬛ 1-Bit Active' : '🎨 Color Active'}
              </button>
            </div>
          </div>

          {/* CRT Screen Shader Toggle */}
          <div className="mac-group-box">
            <span className="mac-group-label">CRT Scanline & Phosphor Shader</span>
            <div style={{ marginTop: '0.6rem', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
              <div>
                <div style={{ fontSize: '1.15rem', fontWeight: 'bold' }}>CRT Scanlines & Glow Overlay</div>
                <div style={{ fontSize: '0.95rem', color: '#666' }}>Toggles retro CRT glass curvature scanline filter</div>
              </div>
              <button
                onClick={() => {
                  setCrtShader(!crtShader);
                  if (playSystemSound) playSystemSound(900);
                }}
                className={`mac-btn ${crtShader ? 'mac-btn-cyan' : ''}`}
              >
                {crtShader ? '📺 CRT Filter ON' : '📺 Filter OFF'}
              </button>
            </div>
          </div>

          {/* Energy Saver / Flying Toasters Screensaver */}
          <div className="mac-group-box">
            <span className="mac-group-label">Energy Saver & Screensaver</span>
            <div style={{ marginTop: '0.6rem', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
              <div>
                <div style={{ fontSize: '1.15rem', fontWeight: 'bold' }}>After Dark Flying Toasters Screensaver</div>
                <div style={{ fontSize: '0.95rem', color: '#666' }}>Launch 90s flying toasters & starfield screensaver</div>
              </div>
              <button
                onClick={() => {
                  triggerScreensaver();
                  if (playSystemSound) playSystemSound(1200);
                }}
                className="mac-btn mac-btn-purple"
              >
                🌙 Test Sleep Mode
              </button>
            </div>
          </div>
        </div>
      )}

      {/* TAB 4: General Controls */}
      {activeTab === 'general' && (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
          {/* Window Zoom Animation Toggle */}
          <div className="mac-group-box">
            <span className="mac-group-label">Window Zoom Animations</span>
            <div style={{ marginTop: '0.6rem', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
              <div>
                <div style={{ fontSize: '1.15rem', fontWeight: 'bold' }}>Window Open/Close Zoom Effects</div>
                <div style={{ fontSize: '0.95rem', color: '#666' }}>Toggle smooth spring animations when opening windows</div>
              </div>
              <button
                onClick={() => {
                  setWindowAnimations(!windowAnimations);
                  if (playSystemSound) playSystemSound(900);
                }}
                className={`mac-btn ${windowAnimations ? 'mac-btn-lime' : ''}`}
              >
                {windowAnimations ? '⚡ Animations ON' : '⚡ Instant Mode'}
              </button>
            </div>
          </div>

          {/* Desktop Items Visibility */}
          <div className="mac-group-box">
            <span className="mac-group-label">Desktop Icons Visibility</span>
            <div style={{ marginTop: '0.6rem', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
              <div>
                <div style={{ fontSize: '1.15rem', fontWeight: 'bold' }}>Show/Hide Desktop Folder Icons</div>
                <div style={{ fontSize: '0.95rem', color: '#666' }}>Hide desktop icons for a clean workspace view</div>
              </div>
              <button
                onClick={() => {
                  setDesktopItemsVisible(!desktopItemsVisible);
                  if (playSystemSound) playSystemSound(900);
                }}
                className={`mac-btn ${desktopItemsVisible ? 'mac-btn-cyan' : ''}`}
              >
                {desktopItemsVisible ? '📁 Icons Visible' : '📁 Icons Hidden'}
              </button>
            </div>
          </div>

          {/* Reset Layout & Positions Button */}
          <div className="mac-group-box">
            <span className="mac-group-label">Reset Workspace Layout</span>
            <div style={{ marginTop: '0.6rem', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
              <div>
                <div style={{ fontSize: '1.15rem', fontWeight: 'bold' }}>Restore Default Windows & Positions</div>
                <div style={{ fontSize: '0.95rem', color: '#666' }}>Resets all windows, stickies, and widgets to default layout</div>
              </div>
              <button
                onClick={() => {
                  resetLayout();
                  if (playSystemSound) playSystemSound(1300);
                }}
                className="mac-btn mac-btn-pink"
              >
                🔄 Reset Layout
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
