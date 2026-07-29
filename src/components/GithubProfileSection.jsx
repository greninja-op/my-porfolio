import React, { useState } from 'react';
import { IconGithub } from './Icons';
import MacWindowWrapper from './MacWindowWrapper';
import { playRetroClick } from '../utils/sound';

export default function GithubProfileSection() {
  const [hoveredCell, setHoveredCell] = useState(null);

  // Generate 52 weeks of realistic contribution activity
  const generateContributionMatrix = () => {
    const weeks = [];
    const seedLevels = [
      [0, 1, 2, 4, 3, 2, 1],
      [2, 3, 4, 4, 3, 2, 0],
      [1, 2, 3, 4, 4, 3, 2],
      [3, 4, 4, 3, 2, 1, 0],
      [4, 4, 3, 2, 1, 2, 3],
      [0, 1, 3, 4, 4, 2, 1]
    ];

    for (let w = 0; w < 52; w++) {
      const weekPattern = seedLevels[w % seedLevels.length];
      const days = weekPattern.map((level) => {
        const count = level === 0 ? 0 : level === 1 ? Math.floor(Math.random() * 3) + 1 : level === 2 ? Math.floor(Math.random() * 4) + 4 : level === 3 ? Math.floor(Math.random() * 5) + 8 : Math.floor(Math.random() * 7) + 13;
        return { level, count };
      });
      weeks.push(days);
    }
    return weeks;
  };

  const matrix = generateContributionMatrix();

  const getHeatmapColor = (level) => {
    switch (level) {
      case 0:
        return '#e2e8f0';
      case 1:
        return '#86efac';
      case 2:
        return '#4ade80';
      case 3:
        return '#22c55e';
      case 4:
        return '#15803d';
      default:
        return '#e2e8f0';
    }
  };

  const pinnedRepos = [
    {
      name: "ChronoLens",
      badge: "⚡ SRE Control Plane",
      badgeBg: "#38bdf8",
      desc: "Closed-loop predictive SRE control plane built on OpenTelemetry feeds with sub-10ms trace interception.",
      lang: "Python",
      langColor: "#3572A5",
      stars: 48,
      forks: 12,
      url: "https://github.com/greninja-op/ChronoLens"
    },
    {
      name: "Memoire",
      badge: "🧠 AI Context Graph",
      badgeBg: "#c084fc",
      desc: "Vector similarity memory graph and long-term context retention engine for autonomous LLM agents.",
      lang: "Python",
      langColor: "#3572A5",
      stars: 34,
      forks: 7,
      url: "https://github.com/greninja-op/Memoire"
    },
    {
      name: "Nuvault",
      badge: "🔐 Zero-Knowledge Vault",
      badgeBg: "#4ade80",
      desc: "Zero-trust cloud vault utilizing client-side WebCrypto AES-GCM 256-bit encryption and tenant key isolation.",
      lang: "TypeScript",
      langColor: "#3178C6",
      stars: 29,
      forks: 5,
      url: "https://github.com/greninja-op/Nuvault"
    },
    {
      name: "CFLS-Lock-Sync",
      badge: "🔒 Distributed Lock",
      badgeBg: "#f472b6",
      desc: "Real-time distributed file locking protocol ensuring atomic multi-user synchronization across remote worktrees.",
      lang: "Go",
      langColor: "#00ADD8",
      stars: 22,
      forks: 4,
      url: "https://github.com/greninja-op/CFLS-Collaborative-File-Lock-Sync"
    }
  ];

  const languages = [
    { name: "Python", percent: 38, color: "#3572A5" },
    { name: "TypeScript", percent: 28, color: "#3178C6" },
    { name: "Go", percent: 20, color: "#00ADD8" },
    { name: "C++", percent: 8, color: "#00599C" },
    { name: "Shell", percent: 6, color: "#4E5A65" }
  ];

  return (
    <section id="github">
      <MacWindowWrapper
        title="GitHub Engineering Footprint & Dashboard"
        subtitle="Live replica of active GitHub engineering footprint, commit streaks, open-source work, and pinned repositories."
        badgeText="STATUS: ONLINE"
      >
        {/* RESPONSIVE RETRO BENTO GRID DASHBOARD */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
            gap: '1rem'
          }}
        >
          {/* BENTO TILE 1: PROFILE HERO CARD (Yellow Box) */}
          <div
            style={{
              gridColumn: 'span 1',
              background: '#fde047',
              border: '2px solid #000000',
              borderRadius: '8px',
              padding: '1.1rem',
              boxShadow: '3px 3px 0 #000000',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
              gap: '1rem'
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.85rem' }}>
              <div
                style={{
                  width: '50px',
                  height: '50px',
                  borderRadius: '50%',
                  background: '#ffffff',
                  border: '2px solid #000000',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '1.75rem',
                  boxShadow: '2px 2px 0 #000000',
                  flexShrink: 0
                }}
              >
                🐸
              </div>

              <div>
                <h3 style={{ fontSize: '1.2rem', fontWeight: 900, color: '#000000', margin: 0, fontFamily: 'var(--font-mono, monospace)' }}>
                  Arjun Sabu
                </h3>
                <span style={{ fontSize: '0.82rem', color: '#000000', fontWeight: 800, fontFamily: 'var(--font-mono, monospace)' }}>
                  @greninja-op
                </span>
              </div>
            </div>

            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '0.5rem' }}>
              <div style={{ padding: '0.25rem 0.55rem', borderRadius: '4px', background: '#ffffff', border: '1.5px solid #000000', fontSize: '0.75rem', color: '#000000', fontWeight: 900, fontFamily: 'var(--font-mono, monospace)' }}>
                ● Open to Hiring
              </div>

              <a
                href="https://github.com/greninja-op"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => playRetroClick()}
                style={{
                  padding: '0.4rem 0.85rem',
                  borderRadius: '6px',
                  background: '#38bdf8',
                  border: '2px solid #000000',
                  boxShadow: '2px 2px 0 #000000',
                  color: '#000000',
                  fontWeight: 900,
                  fontSize: '0.8rem',
                  fontFamily: 'var(--font-mono, monospace)',
                  textDecoration: 'none'
                }}
              >
                Follow ↗
              </a>
            </div>
          </div>

          {/* BENTO TILE 2: ENGINEERING STATS SUMMARY */}
          <div
            style={{
              gridColumn: 'span 1',
              display: 'grid',
              gridTemplateColumns: '1fr 1fr',
              gap: '0.75rem'
            }}
          >
            <div style={{ background: '#4ade80', border: '2px solid #000000', borderRadius: '8px', padding: '0.65rem', textAlign: 'center', boxShadow: '3px 3px 0 #000000' }}>
              <div style={{ fontSize: '1.3rem', fontWeight: 900, color: '#000000', fontFamily: 'var(--font-mono, monospace)' }}>1,420</div>
              <div style={{ fontSize: '0.72rem', fontWeight: 800, color: '#000000', fontFamily: 'var(--font-mono, monospace)' }}>Commits</div>
            </div>

            <div style={{ background: '#38bdf8', border: '2px solid #000000', borderRadius: '8px', padding: '0.65rem', textAlign: 'center', boxShadow: '3px 3px 0 #000000' }}>
              <div style={{ fontSize: '1.3rem', fontWeight: 900, color: '#000000', fontFamily: 'var(--font-mono, monospace)' }}>147</div>
              <div style={{ fontSize: '0.72rem', fontWeight: 800, color: '#000000', fontFamily: 'var(--font-mono, monospace)' }}>Streak Days</div>
            </div>

            <div style={{ background: '#c084fc', border: '2px solid #000000', borderRadius: '8px', padding: '0.65rem', textAlign: 'center', boxShadow: '3px 3px 0 #000000' }}>
              <div style={{ fontSize: '1.3rem', fontWeight: 900, color: '#000000', fontFamily: 'var(--font-mono, monospace)' }}>236★</div>
              <div style={{ fontSize: '0.72rem', fontWeight: 800, color: '#000000', fontFamily: 'var(--font-mono, monospace)' }}>Total Stars</div>
            </div>

            <div style={{ background: '#f472b6', border: '2px solid #000000', borderRadius: '8px', padding: '0.65rem', textAlign: 'center', boxShadow: '3px 3px 0 #000000' }}>
              <div style={{ fontSize: '1.3rem', fontWeight: 900, color: '#000000', fontFamily: 'var(--font-mono, monospace)' }}>Top 1%</div>
              <div style={{ fontSize: '0.72rem', fontWeight: 800, color: '#000000', fontFamily: 'var(--font-mono, monospace)' }}>PR Velocity</div>
            </div>
          </div>

          {/* BENTO TILE 3: 365-DAY GREEN ACTIVITY HEATMAP MATRIX (TOUCH SCROLL) */}
          <div
            style={{
              gridColumn: '1 / -1',
              background: '#ffffff',
              border: '2px solid #000000',
              borderRadius: '8px',
              padding: '1.1rem',
              boxShadow: '3px 3px 0 #000000'
            }}
          >
            <div style={{ fontSize: '0.88rem', fontWeight: 900, color: '#000000', marginBottom: '0.75rem', fontFamily: 'var(--font-mono, monospace)' }}>
              1,420 Contributions in the Last Year
            </div>

            {/* Heatmap Grid Touch Scroll */}
            <div style={{ overflowX: 'auto', paddingBottom: '0.25rem', WebkitOverflowScrolling: 'touch' }}>
              <div style={{ display: 'flex', gap: '4px', minWidth: '720px' }}>
                {matrix.map((week, wIdx) => (
                  <div key={wIdx} style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
                    {week.map((day, dIdx) => (
                      <div
                        key={dIdx}
                        style={{
                          width: '10px',
                          height: '10px',
                          borderRadius: '2px',
                          background: getHeatmapColor(day.level),
                          border: '1px solid #000000'
                        }}
                        title={`${day.count} contributions`}
                      />
                    ))}
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* BENTO TILE 4: LANGUAGE DISTRIBUTION METER */}
          <div
            style={{
              gridColumn: '1 / -1',
              background: '#ffffff',
              border: '2px solid #000000',
              borderRadius: '8px',
              padding: '1.1rem',
              boxShadow: '3px 3px 0 #000000'
            }}
          >
            <div style={{ fontSize: '0.88rem', fontWeight: 900, color: '#000000', marginBottom: '0.75rem', fontFamily: 'var(--font-mono, monospace)' }}>
              Most Used Languages Across Repositories
            </div>

            <div
              style={{
                height: '10px',
                borderRadius: '5px',
                overflow: 'hidden',
                display: 'flex',
                marginBottom: '0.85rem',
                border: '1.5px solid #000000',
                background: '#e2e8f0'
              }}
            >
              {languages.map((l, idx) => (
                <div
                  key={idx}
                  style={{
                    width: `${l.percent}%`,
                    height: '100%',
                    background: l.color
                  }}
                  title={`${l.name}: ${l.percent}%`}
                />
              ))}
            </div>

            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.85rem' }}>
              {languages.map((l, idx) => (
                <div key={idx} style={{ display: 'flex', alignItems: 'center', gap: '0.35rem', fontSize: '0.78rem', color: '#000000', fontWeight: 900, fontFamily: 'var(--font-mono, monospace)' }}>
                  <span style={{ width: '9px', height: '9px', borderRadius: '50%', background: l.color, border: '1px solid #000000' }} />
                  <span>{l.name}</span>
                  <span style={{ opacity: 0.7 }}>{l.percent}%</span>
                </div>
              ))}
            </div>
          </div>

          {/* BENTO TILE 5: PINNED REPOSITORIES GRID */}
          <div style={{ gridColumn: '1 / -1' }}>
            <div style={{ fontSize: '0.95rem', fontWeight: 900, color: '#000000', marginBottom: '0.85rem', fontFamily: 'var(--font-mono, monospace)' }}>
              Featured Pinned Repositories
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '0.85rem' }}>
              {pinnedRepos.map((repo, idx) => (
                <a
                  key={idx}
                  href={repo.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => playRetroClick()}
                  style={{
                    background: repo.badgeBg,
                    border: '2px solid #000000',
                    borderRadius: '8px',
                    padding: '1.1rem',
                    textDecoration: 'none',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-between',
                    boxShadow: '3px 3px 0 #000000'
                  }}
                >
                  <div>
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '0.65rem', flexWrap: 'wrap', gap: '0.35rem' }}>
                      <div style={{ fontSize: '1rem', fontWeight: 900, color: '#000000', fontFamily: 'var(--font-mono, monospace)' }}>
                        📁 {repo.name}
                      </div>

                      <span
                        style={{
                          fontSize: '0.68rem',
                          padding: '0.12rem 0.45rem',
                          borderRadius: '4px',
                          background: '#ffffff',
                          color: '#000000',
                          fontWeight: 900,
                          border: '1.5px solid #000000',
                          fontFamily: 'var(--font-mono, monospace)'
                        }}
                      >
                        {repo.badge}
                      </span>
                    </div>

                    <p style={{ fontSize: '0.82rem', color: '#000000', lineHeight: 1.4, marginBottom: '0.85rem', fontWeight: 700, fontFamily: 'var(--font-mono, monospace)' }}>
                      {repo.desc}
                    </p>
                  </div>

                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.85rem', fontSize: '0.78rem', color: '#000000', fontWeight: 900, fontFamily: 'var(--font-mono, monospace)' }}>
                    <span style={{ display: 'flex', alignItems: 'center', gap: '0.25rem' }}>
                      <span style={{ width: '8px', height: '8px', borderRadius: '50%', background: repo.langColor, border: '1px solid #000000' }} />
                      {repo.lang}
                    </span>

                    <span>★ {repo.stars}</span>
                    <span>⌥ {repo.forks}</span>
                  </div>
                </a>
              ))}
            </div>
          </div>

        </div>
      </MacWindowWrapper>
    </section>
  );
}
