import React, { useState, useEffect } from 'react';
import { personalInfo, projects } from '../data/portfolioData';

export default function MacGitApp() {
  const [connecting, setConnecting] = useState(false);
  const [progress, setProgress] = useState(100);
  const [palette, setPalette] = useState('green'); // 'green', 'amber', 'grayscale'
  const [selectedRepo, setSelectedRepo] = useState(projects[0]);
  const [hoveredCell, setHoveredCell] = useState(null);

  // Generate 52 weeks x 7 days mock contribution data for Arjun Sabu
  const [contributions] = useState(() => {
    const data = [];
    const now = new Date();
    for (let w = 52; w >= 0; w--) {
      const week = [];
      for (let d = 0; d < 7; d++) {
        const count = Math.floor(Math.random() * 8);
        const dayDate = new Date(now.getTime() - (w * 7 + d) * 24 * 60 * 60 * 1000);
        week.push({
          date: dayDate.toLocaleDateString(),
          count: count
        });
      }
      data.push(week);
    }
    return data;
  });

  const handleSync = () => {
    setConnecting(true);
    setProgress(0);
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setConnecting(false);
          return 100;
        }
        return prev + 20;
      });
    }, 180);
  };

  const getCellColor = (count) => {
    if (count === 0) return '#e2e8f0';
    if (palette === 'green') {
      if (count < 3) return '#86efac';
      if (count < 6) return '#22c55e';
      return '#15803d';
    } else if (palette === 'amber') {
      if (count < 3) return '#fde047';
      if (count < 6) return '#eab308';
      return '#a16207';
    } else {
      if (count < 3) return '#cbd5e1';
      if (count < 6) return '#64748b';
      return '#1e293b';
    }
  };

  const activityLogs = [
    { time: '20:15:02', event: 'Pushed 4 commits to main in greninja-op/ChronoLens (SigNoz Winner)' },
    { time: '19:40:12', event: 'Pushed 2 commits to main in greninja-op/Memoire (AI Context Graph)' },
    { time: '18:30:15', event: 'Merged WebCrypto AES-GCM 256 security patch in greninja-op/Nuvault' },
    { time: '17:12:00', event: 'Established gRPC multi-node lock lease in greninja-op/CFLS' }
  ];

  return (
    <div style={{ fontFamily: 'var(--font-mac-title)', display: 'flex', flexDirection: 'column', gap: '0.85rem' }}>
      {/* 1. App Header & Profile Card */}
      <div style={{ borderBottom: '2px solid #000', paddingBottom: '0.75rem', display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '0.6rem' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.8rem' }}>
          {/* Pixelated 90s Badge User Icon */}
          <div
            style={{
              width: '54px',
              height: '54px',
              borderRadius: '8px',
              border: '2px solid #000',
              boxShadow: '3px 3px 0px #000',
              background: 'var(--mac-purple)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: '1.8rem',
              color: '#fff'
            }}
          >
            🐙
          </div>
          <div>
            <h2 style={{ fontSize: '1.8rem', color: '#000', lineHeight: 1 }}>
              MacGit v1.0 — {personalInfo.name} (@{personalInfo.handle})
            </h2>
            <span style={{ fontSize: '1.1rem', color: 'var(--mac-purple-dark)', fontWeight: 'bold' }}>
              TCP/IP GitHub Client • 1,400+ Commits • 4 Proud Core Repos
            </span>
          </div>
        </div>

        {/* Connect / Sync Dial-Up Button */}
        <button
          onClick={handleSync}
          disabled={connecting}
          className="mac-btn mac-btn-purple"
        >
          {connecting ? `⚡ Connecting... (${progress}%)` : '📡 Sync MacTCP Network'}
        </button>
      </div>

      {/* Progress Bar when syncing */}
      {connecting && (
        <div style={{ background: '#e2e8f0', border: '2px solid #000', height: '14px', borderRadius: '4px', overflow: 'hidden' }}>
          <div style={{ width: `${progress}%`, height: '100%', background: 'var(--mac-lime)', transition: 'width 0.15s linear' }} />
        </div>
      )}

      {/* 2. The Contribution Heatmap */}
      <div className="mac-group-box">
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '0.5rem', flexWrap: 'wrap' }}>
          <span className="mac-group-label">GitHub Contribution Grid (52 Weeks)</span>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', marginTop: '0.2rem' }}>
            <span style={{ fontSize: '0.95rem', fontWeight: 'bold' }}>Palette:</span>
            <select
              value={palette}
              onChange={(e) => setPalette(e.target.value)}
              style={{
                padding: '0.15rem 0.4rem',
                border: '1px solid #000',
                fontFamily: 'var(--font-mac-title)',
                fontSize: '0.95rem',
                fontWeight: 'bold'
              }}
            >
              <option value="green">Classic CRT Green 🟩</option>
              <option value="amber">Amber CRT Phosphor 🟧</option>
              <option value="grayscale">Monochrome Grayscale ⬜</option>
            </select>
          </div>
        </div>

        {/* Grid Area */}
        <div style={{ position: 'relative', overflowX: 'auto', padding: '0.4rem 0' }}>
          <div style={{ display: 'flex', gap: '3px' }}>
            {contributions.map((week, wIdx) => (
              <div key={wIdx} style={{ display: 'flex', flexDirection: 'column', gap: '3px' }}>
                {week.map((day, dIdx) => (
                  <div
                    key={dIdx}
                    onMouseEnter={() => setHoveredCell(day)}
                    onMouseLeave={() => setHoveredCell(null)}
                    style={{
                      width: '10px',
                      height: '10px',
                      background: getCellColor(day.count),
                      border: '1px solid #000',
                      borderRadius: '1px',
                      cursor: 'pointer'
                    }}
                  />
                ))}
              </div>
            ))}
          </div>

          {/* System 7 Help Balloon Tooltip */}
          {hoveredCell && (
            <div
              style={{
                position: 'absolute',
                top: '-28px',
                left: '20px',
                background: 'var(--mac-yellow)',
                border: '2px solid #000',
                boxShadow: '2px 2px 0px #000',
                padding: '2px 8px',
                fontSize: '0.95rem',
                fontWeight: 'bold',
                zIndex: 10,
                borderRadius: '4px'
              }}
            >
              💬 {hoveredCell.count} commits on {hoveredCell.date}
            </div>
          )}
        </div>
      </div>

      {/* 3. Repository Browser & Actions */}
      <div className="mac-group-box">
        <span className="mac-group-label">Public Repository Directory</span>
        <div style={{ marginTop: '0.5rem', overflowX: 'auto' }}>
          <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '0.95rem' }}>
            <thead>
              <tr style={{ background: 'var(--mac-purple)', color: '#fff', borderBottom: '2px solid #000', textAlign: 'left' }}>
                <th style={{ padding: '0.4rem' }}>Repository Name</th>
                <th style={{ padding: '0.4rem' }}>Type</th>
                <th style={{ padding: '0.4rem' }}>Badge</th>
                <th style={{ padding: '0.4rem' }}>Commits</th>
              </tr>
            </thead>
            <tbody>
              {projects.map((repo) => (
                <tr
                  key={repo.id}
                  onClick={() => setSelectedRepo(repo)}
                  style={{
                    borderBottom: '1px solid #ddd',
                    background: selectedRepo.id === repo.id ? 'rgba(181, 96, 232, 0.2)' : '#fff',
                    cursor: 'pointer'
                  }}
                >
                  <td style={{ padding: '0.4rem', fontWeight: 'bold', display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                    <span>📁</span>
                    <span>{repo.title}</span>
                  </td>
                  <td style={{ padding: '0.4rem' }}>{repo.techStack[0]}.app</td>
                  <td style={{ padding: '0.4rem' }}>{repo.badge}</td>
                  <td style={{ padding: '0.4rem' }}>350+ commits</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Selected Repo Actions */}
        {selectedRepo && (
          <div style={{ borderTop: '2px solid #000', marginTop: '0.6rem', paddingTop: '0.5rem', display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '0.5rem' }}>
            <div>
              <strong>Selected: {selectedRepo.title}</strong> — <em>{selectedRepo.subtitle}</em>
            </div>
            <div style={{ display: 'flex', gap: '0.5rem' }}>
              <a href={selectedRepo.github} target="_blank" rel="noopener noreferrer" className="mac-btn mac-btn-purple" style={{ textDecoration: 'none' }}>
                📦 View Code ↗
              </a>
              {selectedRepo.website && (
                <a href={selectedRepo.website} target="_blank" rel="noopener noreferrer" className="mac-btn mac-btn-cyan" style={{ textDecoration: 'none' }}>
                  🌐 Open Repo ↗
                </a>
              )}
            </div>
          </div>
        )}
      </div>

      {/* 4. Recent Activity Log ("Console Output") */}
      <div className="mac-group-box" style={{ background: '#000000', color: 'var(--mac-lime)' }}>
        <span className="mac-group-label" style={{ background: '#000', color: '#fff' }}>MacTCP Terminal Logger</span>
        <div style={{ marginTop: '0.4rem', fontFamily: 'var(--font-mono)', fontSize: '0.9rem', display: 'flex', flexDirection: 'column', gap: '0.25rem', maxHeight: '90px', overflowY: 'auto' }}>
          {activityLogs.map((log, idx) => (
            <div key={idx}>
              <span style={{ color: 'var(--mac-cyan)' }}>[{log.time}]</span> {log.event}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
