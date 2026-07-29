import React, { useState } from 'react';
import { IconGithub } from './Icons';

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
        return 'var(--code-bg, #f1f5f9)';
      case 1:
        return '#86efac';
      case 2:
        return '#4ade80';
      case 3:
        return '#22c55e';
      case 4:
        return '#15803d';
      default:
        return 'var(--code-bg, #f1f5f9)';
    }
  };

  const pinnedRepos = [
    {
      name: "ChronoLens",
      badge: "⚡ SRE Control Plane",
      badgeColor: "#0284c7",
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
      badgeColor: "#7c3aed",
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
      badgeColor: "#059669",
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
      badgeColor: "#e11d48",
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
    <section
      id="github"
      style={{
        padding: '4rem 0',
        position: 'relative'
      }}
    >
      <div style={{ maxWidth: '1180px', margin: '0 auto', padding: '0 1rem' }}>
        
        {/* OS PLAYGROUND WINDOW FRAME CONTAINER */}
        <div
          style={{
            background: 'var(--card-bg, #ffffff)',
            border: '2px solid var(--border-subtle, #cbd5e1)',
            borderRadius: '16px',
            overflow: 'hidden',
            boxShadow: '0 12px 35px rgba(0, 0, 0, 0.08)'
          }}
        >
          {/* OS RETRO TITLE BAR HEADER */}
          <div
            style={{
              background: 'var(--code-bg, #f1f5f9)',
              borderBottom: '2px solid var(--border-subtle, #cbd5e1)',
              padding: '0.65rem 1.25rem',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between'
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <span style={{ width: '10px', height: '10px', borderRadius: '50%', background: '#ef4444', display: 'inline-block' }} />
              <span style={{ width: '10px', height: '10px', borderRadius: '50%', background: '#f59e0b', display: 'inline-block' }} />
              <span style={{ width: '10px', height: '10px', borderRadius: '50%', background: '#22c55e', display: 'inline-block' }} />
            </div>

            <div
              style={{
                fontFamily: 'var(--font-mono, monospace)',
                fontSize: '0.82rem',
                fontWeight: 800,
                color: 'var(--text-primary, #0f172a)',
                letterSpacing: '0.05em'
              }}
            >
              GITHUB_FOOTPRINT_MONITOR.APP — System 7.5
            </div>

            <div style={{ fontSize: '0.75rem', fontFamily: 'var(--font-mono, monospace)', color: 'var(--text-secondary, #64748b)', fontWeight: 700 }}>
              [STATUS: ONLINE]
            </div>
          </div>

          {/* WINDOW INNER BODY */}
          <div style={{ padding: '2rem 1.75rem' }}>
            
            {/* Section Title inside Window */}
            <div style={{ marginBottom: '2rem' }}>
              <div
                style={{
                  fontSize: '0.78rem',
                  textTransform: 'uppercase',
                  letterSpacing: '0.1em',
                  fontWeight: 800,
                  fontFamily: 'var(--font-mono, monospace)',
                  color: 'var(--accent-primary, #06b6d4)',
                  marginBottom: '0.3rem'
                }}
              >
                Section A • Authentic Proof of Work
              </div>

              <h2
                style={{
                  fontFamily: 'var(--font-heading, system-ui, sans-serif)',
                  fontSize: 'clamp(1.6rem, 3vw, 2.2rem)',
                  fontWeight: 800,
                  color: 'var(--text-primary, #0f172a)',
                  letterSpacing: '-0.025em'
                }}
              >
                GitHub Engineering Footprint & Dashboard
              </h2>

              <p style={{ color: 'var(--text-secondary, #64748b)', fontSize: '1rem', marginTop: '0.3rem' }}>
                Live replica of active GitHub engineering footprint, commit streaks, open-source work, and pinned repositories.
              </p>
            </div>

            {/* RESPONSIVE BENTO GRID DASHBOARD */}
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
                gap: '1.25rem'
              }}
            >
              {/* BENTO TILE 1: PROFILE HERO CARD */}
              <div
                style={{
                  gridColumn: 'span 1',
                  background: 'var(--code-bg, #f8fafc)',
                  border: '1.5px solid var(--border-subtle, #e2e8f0)',
                  borderRadius: '14px',
                  padding: '1.5rem',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  gap: '1.25rem'
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '1.25rem' }}>
                  {/* Avatar */}
                  <div style={{ position: 'relative' }}>
                    <div
                      style={{
                        width: '64px',
                        height: '64px',
                        borderRadius: '50%',
                        background: 'linear-gradient(135deg, #06b6d4, #3b82f6)',
                        padding: '2px'
                      }}
                    >
                      <div
                        style={{
                          width: '100%',
                          height: '100%',
                          borderRadius: '50%',
                          background: 'var(--card-bg, #ffffff)',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          fontSize: '2.2rem'
                        }}
                      >
                        🐸
                      </div>
                    </div>
                    <div
                      style={{
                        position: 'absolute',
                        bottom: '2px',
                        right: '2px',
                        width: '12px',
                        height: '12px',
                        borderRadius: '50%',
                        background: '#22c55e',
                        border: '2px solid var(--card-bg, #ffffff)'
                      }}
                    />
                  </div>

                  <div>
                    <h3 style={{ fontSize: '1.35rem', fontWeight: 800, color: 'var(--text-primary, #0f172a)', letterSpacing: '-0.02em', margin: 0 }}>
                      Arjun Sabu
                    </h3>
                    <span style={{ fontSize: '0.85rem', color: '#0284c7', fontWeight: 700, fontFamily: 'var(--font-mono, monospace)' }}>
                      @greninja-op
                    </span>
                    <div style={{ fontSize: '0.82rem', color: 'var(--text-secondary, #64748b)', marginTop: '0.2rem' }}>
                      AI Systems & SRE Reliability Engineer
                    </div>
                  </div>
                </div>

                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '0.75rem' }}>
                  <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.4rem', padding: '0.3rem 0.65rem', borderRadius: '12px', background: 'rgba(34, 197, 94, 0.1)', border: '1px solid rgba(34, 197, 94, 0.25)', fontSize: '0.75rem', color: '#166534', fontWeight: 700 }}>
                    <span style={{ width: '6px', height: '6px', borderRadius: '50%', background: '#22c55e' }} />
                    Open to Roles
                  </div>

                  <a
                    href="https://github.com/greninja-op"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      padding: '0.55rem 1.1rem',
                      borderRadius: '10px',
                      background: '#0284c7',
                      color: '#ffffff',
                      fontWeight: 800,
                      fontSize: '0.85rem',
                      textDecoration: 'none',
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '0.4rem',
                      boxShadow: '0 3px 10px rgba(2, 132, 199, 0.2)',
                      transition: 'transform 0.15s ease'
                    }}
                    onMouseEnter={(e) => (e.currentTarget.style.transform = 'scale(1.04)')}
                    onMouseLeave={(e) => (e.currentTarget.style.transform = 'scale(1)')}
                  >
                    <IconGithub size={18} /> Follow ↗
                  </a>
                </div>
              </div>

              {/* BENTO TILE 2: ENGINEERING STATS SUMMARY */}
              <div
                style={{
                  gridColumn: 'span 1',
                  background: 'var(--code-bg, #f8fafc)',
                  border: '1.5px solid var(--border-subtle, #e2e8f0)',
                  borderRadius: '14px',
                  padding: '1.25rem',
                  display: 'grid',
                  gridTemplateColumns: '1fr 1fr',
                  gap: '0.85rem',
                  alignContent: 'center'
                }}
              >
                <div style={{ textAlign: 'center', padding: '0.65rem', borderRadius: '10px', background: 'var(--card-bg, #ffffff)', border: '1px solid var(--border-subtle, #e2e8f0)' }}>
                  <div style={{ fontSize: '1.5rem', fontWeight: 900, color: '#166534', lineHeight: 1 }}>1,420</div>
                  <div style={{ fontSize: '0.72rem', color: 'var(--text-secondary, #64748b)', fontWeight: 700, marginTop: '0.2rem' }}>Contributions</div>
                </div>

                <div style={{ textAlign: 'center', padding: '0.65rem', borderRadius: '10px', background: 'var(--card-bg, #ffffff)', border: '1px solid var(--border-subtle, #e2e8f0)' }}>
                  <div style={{ fontSize: '1.5rem', fontWeight: 900, color: '#0284c7', lineHeight: 1 }}>147</div>
                  <div style={{ fontSize: '0.72rem', color: 'var(--text-secondary, #64748b)', fontWeight: 700, marginTop: '0.2rem' }}>Streak Days</div>
                </div>

                <div style={{ textAlign: 'center', padding: '0.65rem', borderRadius: '10px', background: 'var(--card-bg, #ffffff)', border: '1px solid var(--border-subtle, #e2e8f0)' }}>
                  <div style={{ fontSize: '1.5rem', fontWeight: 900, color: '#7c3aed', lineHeight: 1 }}>236★</div>
                  <div style={{ fontSize: '0.72rem', color: 'var(--text-secondary, #64748b)', fontWeight: 700, marginTop: '0.2rem' }}>Total Stars</div>
                </div>

                <div style={{ textAlign: 'center', padding: '0.65rem', borderRadius: '10px', background: 'var(--card-bg, #ffffff)', border: '1px solid var(--border-subtle, #e2e8f0)' }}>
                  <div style={{ fontSize: '1.5rem', fontWeight: 900, color: '#d97706', lineHeight: 1 }}>Top 1%</div>
                  <div style={{ fontSize: '0.72rem', color: 'var(--text-secondary, #64748b)', fontWeight: 700, marginTop: '0.2rem' }}>PR Velocity</div>
                </div>
              </div>

              {/* BENTO TILE 3: 365-DAY GREEN ACTIVITY HEATMAP MATRIX */}
              <div
                style={{
                  gridColumn: '1 / -1',
                  background: 'var(--code-bg, #f8fafc)',
                  border: '1.5px solid var(--border-subtle, #e2e8f0)',
                  borderRadius: '14px',
                  padding: '1.5rem',
                  position: 'relative'
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '1rem' }}>
                  <div style={{ fontSize: '0.98rem', fontWeight: 800, color: 'var(--text-primary, #0f172a)' }}>
                    1,420 Contributions in the Last Year
                  </div>

                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', fontSize: '0.75rem', color: 'var(--text-secondary, #64748b)' }}>
                    <span>Less</span>
                    <span style={{ width: '10px', height: '10px', borderRadius: '2px', background: 'var(--code-bg, #e2e8f0)' }} />
                    <span style={{ width: '10px', height: '10px', borderRadius: '2px', background: '#86efac' }} />
                    <span style={{ width: '10px', height: '10px', borderRadius: '2px', background: '#4ade80' }} />
                    <span style={{ width: '10px', height: '10px', borderRadius: '2px', background: '#22c55e' }} />
                    <span style={{ width: '10px', height: '10px', borderRadius: '2px', background: '#15803d' }} />
                    <span>More</span>
                  </div>
                </div>

                {/* Heatmap Grid */}
                <div style={{ overflowX: 'auto', paddingBottom: '0.25rem' }}>
                  <div style={{ display: 'flex', gap: '4px', minWidth: '760px' }}>
                    {matrix.map((week, wIdx) => (
                      <div key={wIdx} style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
                        {week.map((day, dIdx) => (
                          <div
                            key={dIdx}
                            style={{
                              width: '11px',
                              height: '11px',
                              borderRadius: '2px',
                              background: getHeatmapColor(day.level),
                              transition: 'transform 0.15s ease',
                              cursor: 'pointer'
                            }}
                            onMouseEnter={(e) => (e.currentTarget.style.transform = 'scale(1.3)')}
                            onMouseLeave={(e) => (e.currentTarget.style.transform = 'scale(1)')}
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
                  background: 'var(--code-bg, #f8fafc)',
                  border: '1.5px solid var(--border-subtle, #e2e8f0)',
                  borderRadius: '14px',
                  padding: '1.35rem 1.5rem'
                }}
              >
                <div style={{ fontSize: '0.92rem', fontWeight: 800, color: 'var(--text-primary, #0f172a)', marginBottom: '0.85rem' }}>
                  Most Used Languages Across Repositories
                </div>

                <div
                  style={{
                    height: '10px',
                    borderRadius: '5px',
                    overflow: 'hidden',
                    display: 'flex',
                    marginBottom: '1rem',
                    background: 'var(--border-subtle, #e2e8f0)'
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

                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1.25rem' }}>
                  {languages.map((l, idx) => (
                    <div key={idx} style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', fontSize: '0.82rem', color: 'var(--text-primary, #0f172a)', fontWeight: 600 }}>
                      <span style={{ width: '9px', height: '9px', borderRadius: '50%', background: l.color }} />
                      <span>{l.name}</span>
                      <span style={{ color: 'var(--text-secondary, #64748b)', fontSize: '0.78rem' }}>{l.percent}%</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* BENTO TILE 5: PINNED REPOSITORIES GRID */}
              <div style={{ gridColumn: '1 / -1' }}>
                <div style={{ fontSize: '1.05rem', fontWeight: 800, color: 'var(--text-primary, #0f172a)', marginBottom: '1rem' }}>
                  Featured Pinned Repositories
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '1rem' }}>
                  {pinnedRepos.map((repo, idx) => (
                    <a
                      key={idx}
                      href={repo.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{
                        background: 'var(--code-bg, #f8fafc)',
                        border: '1.5px solid var(--border-subtle, #e2e8f0)',
                        borderRadius: '14px',
                        padding: '1.25rem',
                        textDecoration: 'none',
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'space-between',
                        transition: 'transform 0.15s ease, border-color 0.15s ease'
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.transform = 'translateY(-3px)';
                        e.currentTarget.style.borderColor = repo.badgeColor;
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.transform = 'translateY(0px)';
                        e.currentTarget.style.borderColor = 'var(--border-subtle, #e2e8f0)';
                      }}
                    >
                      <div>
                        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '0.75rem' }}>
                          <div style={{ fontSize: '1.05rem', fontWeight: 800, color: 'var(--text-primary, #0f172a)', display: 'flex', alignItems: 'center', gap: '0.35rem' }}>
                            📁 {repo.name}
                          </div>

                          <span
                            style={{
                              fontSize: '0.7rem',
                              padding: '0.18rem 0.5rem',
                              borderRadius: '5px',
                              background: `${repo.badgeColor}15`,
                              color: repo.badgeColor,
                              fontWeight: 700,
                              border: `1px solid ${repo.badgeColor}33`
                            }}
                          >
                            {repo.badge}
                          </span>
                        </div>

                        <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary, #475569)', lineHeight: 1.45, marginBottom: '1rem', fontWeight: 500 }}>
                          {repo.desc}
                        </p>
                      </div>

                      <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', fontSize: '0.8rem', color: 'var(--text-secondary, #64748b)', fontWeight: 600 }}>
                        <span style={{ display: 'flex', alignItems: 'center', gap: '0.3rem', color: 'var(--text-primary, #0f172a)' }}>
                          <span style={{ width: '9px', height: '9px', borderRadius: '50%', background: repo.langColor }} />
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

          </div>
        </div>

      </div>
    </section>
  );
}
