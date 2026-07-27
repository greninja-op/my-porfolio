import React, { useState, useEffect } from 'react';

export default function DesktopWidgets({ playSystemSound }) {
  // Live CPU / Memory Load Simulation
  const [cpuUsage, setCpuUsage] = useState(24);
  const [ramUsage, setRamUsage] = useState(48);
  const [isPlayingCd, setIsPlayingCd] = useState(false);
  const [cdTrack, setCdTrack] = useState(1);
  const [timeStr, setTimeStr] = useState('');

  useEffect(() => {
    const timer = setInterval(() => {
      setCpuUsage(Math.floor(18 + Math.random() * 25));
      setRamUsage(Math.floor(42 + Math.random() * 12));
      setTimeStr(new Date().toLocaleTimeString());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const handleCdNext = () => {
    if (playSystemSound) playSystemSound(900, 0.05);
    setCdTrack((prev) => (prev % 5) + 1);
  };

  const handleCdPlayToggle = () => {
    if (playSystemSound) playSystemSound(700, 0.08);
    setIsPlayingCd(!isPlayingCd);
  };

  return (
    <div
      style={{
        position: 'fixed',
        left: '20px',
        top: '48px',
        bottom: '80px',
        width: '260px',
        display: 'flex',
        flexDirection: 'column',
        gap: '0.8rem',
        zIndex: 4,
        pointerEvents: 'auto',
        maxHeight: 'calc(100vh - 140px)',
        overflowY: 'auto'
      }}
    >
      {/* 1. Retro CPU / Memory Meter Widget */}
      <div className="mac-group-box" style={{ background: '#000000', color: 'var(--mac-lime)', padding: '0.5rem' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', fontSize: '0.95rem', fontWeight: 'bold' }}>
          <span> Activity Monitor</span>
          <span style={{ fontSize: '0.75rem', color: '#888' }}>MacTCP v2.1</span>
        </div>
        <div style={{ marginTop: '0.4rem', display: 'flex', flexDirection: 'column', gap: '0.3rem', fontSize: '0.85rem' }}>
          <div>
            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
              <span>CPU Core:</span>
              <span>{cpuUsage}%</span>
            </div>
            <div style={{ height: '8px', background: '#222', border: '1px solid var(--mac-lime)', borderRadius: '2px', overflow: 'hidden', marginTop: '2px' }}>
              <div style={{ width: `${cpuUsage}%`, height: '100%', background: 'var(--mac-lime)' }} />
            </div>
          </div>
          <div>
            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
              <span>Skills RAM:</span>
              <span>{ramUsage}%</span>
            </div>
            <div style={{ height: '8px', background: '#222', border: '1px solid var(--mac-cyan)', borderRadius: '2px', overflow: 'hidden', marginTop: '2px' }}>
              <div style={{ width: `${ramUsage}%`, height: '100%', background: 'var(--mac-cyan)' }} />
            </div>
          </div>
        </div>
      </div>

      {/* 2. World Clock & Timezone Gauge Widget */}
      <div className="mac-group-box" style={{ background: '#ffffff', padding: '0.5rem' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', fontWeight: 'bold', fontSize: '0.95rem' }}>
          <span>⏰ Time & Location</span>
          <span style={{ fontSize: '0.75rem', background: 'var(--mac-lime)', color: '#000', padding: '1px 5px', borderRadius: '3px', border: '1px solid #000' }}>
            🟢 Online
          </span>
        </div>
        <div style={{ marginTop: '0.3rem', fontSize: '1.2rem', fontFamily: 'var(--font-mono)', fontWeight: 'bold', textAlign: 'center' }}>
          {timeStr || '08:00:00 PM'}
        </div>
        <div style={{ fontSize: '0.85rem', color: '#555', textAlign: 'center' }}>
          Kochi, India (IST GMT+5:30)
        </div>
        <div style={{ marginTop: '0.3rem', fontSize: '0.8rem', textAlign: 'center', background: 'var(--mac-yellow)', border: '1px solid #000', padding: '2px', borderRadius: '3px' }}>
          💼 Open for Remote Contracts & Hiring
        </div>
      </div>

      {/* 3. "Stickies" Post-It Notes */}
      <div
        style={{
          background: '#fef08a',
          border: '2px solid #000',
          boxShadow: '3px 3px 0px #000',
          borderRadius: '4px',
          padding: '0.5rem',
          fontFamily: 'var(--font-mac-title)'
        }}
      >
        <div style={{ display: 'flex', justifyContent: 'space-between', borderBottom: '1px solid #000', paddingBottom: '2px', fontSize: '0.85rem', fontWeight: 'bold' }}>
          <span>📌 Stickies Note</span>
          <span>✕</span>
        </div>
        <p style={{ fontSize: '1rem', marginTop: '0.4rem', lineHeight: 1.4, color: '#000' }}>
          "Double-click any folder or app to launch live interactive demos! Check out <strong>ChronoLens</strong>, <strong>MacGit</strong>, & <strong>Notes.app</strong>!"
        </p>
      </div>

      {/* 4. AppleCD Audio Player Widget */}
      <div className="mac-group-box" style={{ background: 'linear-gradient(180deg, #e2e8f0 0%, #cbd5e1 100%)', padding: '0.5rem' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', fontSize: '0.9rem', fontWeight: 'bold' }}>
          <span>💿 AppleCD Player</span>
          <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.8rem', background: '#000', color: 'var(--mac-lime)', padding: '1px 4px' }}>
            TRK 0{cdTrack}
          </span>
        </div>
        <div style={{ display: 'flex', gap: '0.4rem', marginTop: '0.5rem' }}>
          <button onClick={handleCdPlayToggle} className="mac-btn mac-btn-purple" style={{ flex: 1, padding: '0.2rem', fontSize: '0.85rem' }}>
            {isPlayingCd ? '⏸ Pause' : '▶ Play 8-Bit'}
          </button>
          <button onClick={handleCdNext} className="mac-btn mac-btn-cyan" style={{ padding: '0.2rem 0.5rem', fontSize: '0.85rem' }}>
            ⏭
          </button>
        </div>
      </div>

      {/* 5. Mini Weather Gauge Widget */}
      <div className="mac-group-box" style={{ background: '#e0f2fe', padding: '0.5rem' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', fontSize: '0.9rem', fontWeight: 'bold' }}>
          <span>🌤️ Local Weather</span>
          <span style={{ fontSize: '1.2rem' }}>☀️</span>
        </div>
        <div style={{ marginTop: '0.3rem', fontSize: '1.1rem', fontWeight: 'bold' }}>
          28°C / 82°F • Clear Skies
        </div>
        <div style={{ fontSize: '0.8rem', color: '#444' }}>
          Optimal coding conditions in India
        </div>
      </div>
    </div>
  );
}
