import React, { useState, useEffect } from 'react';
import { playRetroClick } from '../utils/sound';

export default function MacDeskAccessories() {
  const [time, setTime] = useState(new Date());
  const [cpuLoad, setCpuLoad] = useState(31);

  useEffect(() => {
    const timer = setInterval(() => setTime(new Date()), 1000);
    const cpuTimer = setInterval(() => {
      setCpuLoad(Math.floor(25 + Math.random() * 15));
    }, 2500);

    return () => {
      clearInterval(timer);
      clearInterval(cpuTimer);
    };
  }, []);

  const timeString = time.toLocaleTimeString('en-US', {
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
    hour12: true
  });

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        gap: '1.25rem',
        width: '260px',
        flexShrink: 0
      }}
    >
      {/* 1. ACTIVITY MONITOR (MacTCP v2.1) */}
      <div
        style={{
          background: '#000000',
          border: '2px solid #000000',
          borderRadius: '8px',
          padding: '0.85rem',
          color: '#4ade80',
          fontFamily: 'var(--font-mono, monospace)',
          boxShadow: '4px 4px 0 #000000'
        }}
      >
        <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.78rem', fontWeight: 900, marginBottom: '0.65rem', borderBottom: '1px solid #166534', paddingBottom: '0.3rem' }}>
          <span>Activity Monitor</span>
          <span style={{ opacity: 0.8 }}>MacTCP v2.1</span>
        </div>

        <div style={{ marginBottom: '0.6rem' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.72rem', fontWeight: 800, marginBottom: '0.2rem' }}>
            <span>CPU Core:</span>
            <span>{cpuLoad}%</span>
          </div>
          <div style={{ height: '8px', background: '#14532d', border: '1px solid #22c55e', borderRadius: '2px', overflow: 'hidden' }}>
            <div style={{ width: `${cpuLoad}%`, height: '100%', background: '#4ade80', transition: 'width 0.4s ease' }} />
          </div>
        </div>

        <div>
          <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.72rem', fontWeight: 800, marginBottom: '0.2rem' }}>
            <span>Skills RAM:</span>
            <span>98%</span>
          </div>
          <div style={{ height: '8px', background: '#1e3a8a', border: '1px solid #38bdf8', borderRadius: '2px', overflow: 'hidden' }}>
            <div style={{ width: '98%', height: '100%', background: '#38bdf8' }} />
          </div>
        </div>
      </div>

      {/* 2. TIME & LOCATION CLOCK */}
      <div
        style={{
          background: '#ffffff',
          border: '2px solid #000000',
          borderRadius: '8px',
          padding: '0.85rem',
          fontFamily: 'var(--font-mono, monospace)',
          boxShadow: '4px 4px 0 #000000'
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', fontSize: '0.78rem', fontWeight: 900, marginBottom: '0.5rem' }}>
          <span>⏰ Time & Location</span>
          <span style={{ background: '#4ade80', border: '1px solid #000000', padding: '0.1rem 0.4rem', borderRadius: '4px', fontSize: '0.68rem' }}>
            Online
          </span>
        </div>

        <div style={{ fontSize: '1.4rem', fontWeight: 900, textAlign: 'center', margin: '0.4rem 0', color: '#000000' }}>
          {timeString}
        </div>

        <div style={{ fontSize: '0.72rem', fontWeight: 800, textAlign: 'center', color: '#000000', opacity: 0.85, marginBottom: '0.6rem' }}>
          Kochi, India (IST GMT+5:30)
        </div>

        <div style={{ background: '#fde047', border: '1.5px solid #000000', padding: '0.35rem 0.5rem', borderRadius: '4px', textAlign: 'center', fontSize: '0.7rem', fontWeight: 900, color: '#000000' }}>
          💼 Open for Remote Contracts & Hiring
        </div>
      </div>

      {/* 3. STICKIES NOTE */}
      <div
        style={{
          background: '#fef08a',
          border: '2px solid #000000',
          borderRadius: '8px',
          padding: '0.85rem',
          fontFamily: 'var(--font-mono, monospace)',
          boxShadow: '4px 4px 0 #000000',
          position: 'relative'
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', fontSize: '0.78rem', fontWeight: 900, marginBottom: '0.5rem', borderBottom: '1px solid #000000', paddingBottom: '0.25rem' }}>
          <span>📌 Stickies Note</span>
          <span>x</span>
        </div>

        <p style={{ fontSize: '0.78rem', fontWeight: 800, color: '#000000', lineHeight: 1.45, margin: 0 }}>
          "Double-click any folder or app to launch live interactive demos! Check out ChronoLens, MacGit, & Notes.app!"
        </p>
      </div>

      {/* 4. LOCAL WEATHER */}
      <div
        style={{
          background: '#ffffff',
          border: '2px solid #000000',
          borderRadius: '8px',
          padding: '0.85rem',
          fontFamily: 'var(--font-mono, monospace)',
          boxShadow: '4px 4px 0 #000000'
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', fontSize: '0.78rem', fontWeight: 900, marginBottom: '0.3rem' }}>
          <span>🌤️ Local Weather</span>
          <span>☀️</span>
        </div>

        <div style={{ fontSize: '0.9rem', fontWeight: 900, color: '#000000' }}>
          28°C / 82°F • Clear Skies
        </div>
        <div style={{ fontSize: '0.7rem', fontWeight: 700, color: '#475569', marginTop: '0.2rem' }}>
          Optimal coding conditions in India
        </div>
      </div>

    </div>
  );
}
