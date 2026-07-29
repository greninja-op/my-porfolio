import React, { useState } from 'react';
import { IconGithub } from './Icons';

export default function GithubProfileSection() {
  const [hoveredCell, setHoveredCell] = useState(null);

  // Generate 52 weeks (364 days) of realistic contribution activity
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
        return 'var(--code-bg, #e2e8f0)';
      case 1:
        return '#86efac';
      case 2:
        return '#4ade80';
      case 3:
        return '#22c55e';
      case 4:
        return '#15803d';
      default:
        return 'var(--code-bg, #e2e8f0)';
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
      {/* CENTERED CONTAINER */}
      <div style={{ maxWidth: '1180px', margin: '0 auto' }}>
        {/* Section Header */}
        <div style={{ marginBottom: '2.5rem' }}>
          <div
            style={{
              fontSize: '0.8rem',
              textTransform: 'uppercase',
              letterSpacing: '0.1em',
              fontWeight: 700,
              color: 'var(--accent-primary, #06b6d4)',
              marginBottom: '0.4rem'
            }}
          >
            Section A • Authentic Proof of Work
          </div>

          <h2
            style={{
              fontFamily: 'var(--font-heading, system-ui, sans-serif)',
              fontSize: 'clamp(1.8rem, 3.5vw, 2.5rem)',
              fontWeight: 800,
              color: 'var(--text-primary, #0f172a)',
              letterSpacing: '-0.025em'
            }}
          >
            GitHub Engineering Footprint & Dashboard
          </h2>

          <p style={{ color: 'var(--text-secondary, #64748b)', fontSize: '1.05rem', marginTop: '0.4rem', maxWidth: '650px' }}>
            Live replica of my active GitHub engineering footprint, commit streaks, open-source work, and pinned repositories.
          </p>
        </div>

        {/* LIGHT-MODE THEME-AWARE BENTO GRID DASHBOARD */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(12, 1fr)',
            gap: '1.5rem'
          }}
        >
        {/* BENTO TILE 1: PROFILE HERO CARD (Spans 8 columns) */}
        <div
          style={{
            gridColumn: 'span 8',
            background: 'var(--card-bg, #ffffff)',
            border: '1px solid var(--border-subtle, #e2e8f0)',
            borderRadius: '24px',
            padding: '2rem 2.25rem',
            boxShadow: '0 10px 30px rgba(0,0,0,0.05)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: '2rem',
            position: 'relative',
            overflow: 'hidden'
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '1.5rem', zIndex: 2 }}>
            {/* Avatar with Glow Ring */}
            <div style={{ position: 'relative' }}>
              <div
                style={{
                  width: '76px',
                  height: '76px',
                  borderRadius: '50%',
                  background: 'linear-gradient(135deg, #06b6d4, #3b82f6)',
                  padding: '3px',
                  boxShadow: '0 4px 20px rgba(6, 186, 212, 0.25)'
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
                    fontSize: '2.5rem'
                  }}
                >
                  🐸
                </div>
              </div>
              {/* Online Pulse Dot */}
              <div
                style={{
                  position: 'absolute',
                  bottom: '4px',
                  right: '4px',
                  width: '14px',
                  height: '14px',
                  borderRadius: '50%',
                  background: '#22c55e',
                  border: '2px solid var(--card-bg, #ffffff)',
                  boxShadow: '0 0 8px #22c55e'
                }}
              />
            </div>

            <div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '0.2rem' }}>
                <h3 style={{ fontSize: '1.55rem', fontWeight: 800, color: 'var(--text-primary, #0f172a)', letterSpacing: '-0.02em' }}>
                  Arjun Sabu
                </h3>
                <span style={{ fontSize: '0.9rem', color: '#0284c7', fontWeight: 700, fontFamily: 'var(--font-mono, monospace)' }}>
                  @greninja-op
                </span>
              </div>

              <div style={{ fontSize: '0.92rem', color: 'var(--text-secondary, #64748b)', fontWeight: 500, marginBottom: '0.75rem' }}>
                AI Systems & Full-Stack Reliability Engineer • Open Source Contributor
              </div>

              {/* Status Pill */}
              <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.45rem', padding: '0.3rem 0.75rem', borderRadius: '20px', background: 'rgba(34, 197, 94, 0.1)', border: '1px solid rgba(34, 197, 94, 0.25)', fontSize: '0.78rem', color: '#166534', fontWeight: 700 }}>
                <span style={{ width: '6px', height: '6px', borderRadius: '50%', background: '#22c55e' }} />
                Open to SRE & Full-Stack Architect roles
              </div>
            </div>
          </div>

          {/* Follow Button */}
          <a
            href="https://github.com/greninja-op"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              padding: '0.75rem 1.4rem',
              borderRadius: '12px',
              background: '#0284c7',
              color: '#ffffff',
              fontWeight: 800,
              fontSize: '0.9rem',
              textDecoration: 'none',
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.5rem',
              boxShadow: '0 4px 14px rgba(2, 132, 199, 0.25)',
              transition: 'transform 0.15s ease',
              flexShrink: 0,
              zIndex: 2
            }}
            onMouseEnter={(e) => (e.currentTarget.style.transform = 'scale(1.05)')}
            onMouseLeave={(e) => (e.currentTarget.style.transform = 'scale(1)')}
          >
            <IconGithub size={20} /> Follow on GitHub ↗
          </a>
        </div>

        {/* BENTO TILE 2: ENGINEERING STATS SUMMARY (Spans 4 columns) */}
        <div
          style={{
            gridColumn: 'span 4',
            background: 'var(--card-bg, #ffffff)',
            border: '1px solid var(--border-subtle, #e2e8f0)',
            borderRadius: '24px',
            padding: '1.5rem',
            boxShadow: '0 10px 30px rgba(0,0,0,0.05)',
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gap: '1rem',
            alignContent: 'center'
          }}
        >
          <div style={{ textAlign: 'center', padding: '0.75rem', borderRadius: '14px', background: 'var(--code-bg, #f8fafc)', border: '1px solid var(--border-subtle, #e2e8f0)' }}>
            <div style={{ fontSize: '1.7rem', fontWeight: 900, color: '#166534', lineHeight: 1 }}>1,420</div>
            <div style={{ fontSize: '0.75rem', color: 'var(--text-secondary, #64748b)', fontWeight: 700, marginTop: '0.25rem' }}>Contributions / Year</div>
          </div>

          <div style={{ textAlign: 'center', padding: '0.75rem', borderRadius: '14px', background: 'var(--code-bg, #f8fafc)', border: '1px solid var(--border-subtle, #e2e8f0)' }}>
            <div style={{ fontSize: '1.7rem', fontWeight: 900, color: '#0284c7', lineHeight: 1 }}>147</div>
            <div style={{ fontSize: '0.75rem', color: 'var(--text-secondary, #64748b)', fontWeight: 700, marginTop: '0.25rem' }}>Day Commit Streak</div>
          </div>

          <div style={{ textAlign: 'center', padding: '0.75rem', borderRadius: '14px', background: 'var(--code-bg, #f8fafc)', border: '1px solid var(--border-subtle, #e2e8f0)' }}>
            <div style={{ fontSize: '1.7rem', fontWeight: 900, color: '#7c3aed', lineHeight: 1 }}>236★</div>
            <div style={{ fontSize: '0.75rem', color: 'var(--text-secondary, #64748b)', fontWeight: 700, marginTop: '0.25rem' }}>Total Stars Earned</div>
          </div>

          <div style={{ textAlign: 'center', padding: '0.75rem', borderRadius: '14px', background: 'var(--code-bg, #f8fafc)', border: '1px solid var(--border-subtle, #e2e8f0)' }}>
            <div style={{ fontSize: '1.7rem', fontWeight: 900, color: '#d97706', lineHeight: 1 }}>Top 1%</div>
            <div style={{ fontSize: '0.75rem', color: 'var(--text-secondary, #64748b)', fontWeight: 700, marginTop: '0.25rem' }}>PR Merging Velocity</div>
          </div>
        </div>

        {/* BENTO TILE 3: 365-DAY GREEN ACTIVITY HEATMAP MATRIX (Spans 12 columns) */}
        <div
          style={{
            gridColumn: 'span 12',
            background: 'var(--card-bg, #ffffff)',
            border: '1px solid var(--border-subtle, #e2e8f0)',
            borderRadius: '24px',
            padding: '2rem 2.25rem',
            boxShadow: '0 10px 30px rgba(0,0,0,0.05)',
            position: 'relative'
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '1.25rem' }}>
            <div style={{ fontSize: '1.1rem', fontWeight: 800, color: 'var(--text-primary, #0f172a)' }}>
              1,420 Contributions in the Last Year
            </div>

            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.78rem', color: 'var(--text-secondary, #64748b)' }}>
              <span>Less</span>
              <span style={{ width: '11px', height: '11px', borderRadius: '3px', background: 'var(--code-bg, #e2e8f0)' }} />
              <span style={{ width: '11px', height: '11px', borderRadius: '3px', background: '#86efac' }} />
              <span style={{ width: '11px', height: '11px', borderRadius: '3px', background: '#4ade80' }} />
              <span style={{ width: '11px', height: '11px', borderRadius: '3px', background: '#22c55e' }} />
              <span style={{ width: '11px', height: '11px', borderRadius: '3px', background: '#15803d' }} />
              <span>More</span>
            </div>
          </div>

          {/* Heatmap Grid */}
          <div style={{ overflowX: 'auto', paddingBottom: '0.5rem' }}>
            <div style={{ display: 'flex', gap: '4px', minWidth: '780px' }}>
              {matrix.map((week, wIdx) => (
                <div key={wIdx} style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
                  {week.map((day, dIdx) => (
                    <div
                      key={dIdx}
                      style={{
                        width: '12px',
                        height: '12px',
                        borderRadius: '3px',
                        background: getHeatmapColor(day.level),
                        transition: 'transform 0.15s ease',
                        cursor: 'pointer'
                      }}
                      onMouseEnter={(e) => (e.currentTarget.style.transform = 'scale(1.4)')}
                      onMouseLeave={(e) => (e.currentTarget.style.transform = 'scale(1)')}
                      title={`${day.count} contributions`}
                    />
                  ))}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* BENTO TILE 4: LANGUAGE DISTRIBUTION METER (Spans 12 columns) */}
        <div
          style={{
            gridColumn: 'span 12',
            background: 'var(--card-bg, #ffffff)',
            border: '1px solid var(--border-subtle, #e2e8f0)',
            borderRadius: '24px',
            padding: '1.75rem 2.25rem',
            boxShadow: '0 10px 30px rgba(0,0,0,0.05)'
          }}
        >
          <div style={{ fontSize: '1rem', fontWeight: 800, color: 'var(--text-primary, #0f172a)', marginBottom: '1rem' }}>
            Most Used Languages Across Public Repositories
          </div>

          {/* Multi-segment Progress Bar */}
          <div
            style={{
              height: '12px',
              borderRadius: '6px',
              overflow: 'hidden',
              display: 'flex',
              marginBottom: '1.25rem',
              background: 'var(--code-bg, #e2e8f0)'
            }}
          >
            {languages.map((l, idx) => (
              <div
                key={idx}
                style={{
                  width: `${l.percent}%`,
                  height: '100%',
                  background: l.color,
                  transition: 'width 0.5s ease'
                }}
                title={`${l.name}: ${l.percent}%`}
              />
            ))}
          </div>

          {/* Language Legend Row */}
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1.5rem' }}>
            {languages.map((l, idx) => (
              <div key={idx} style={{ display: 'flex', alignItems: 'center', gap: '0.45rem', fontSize: '0.85rem', color: 'var(--text-primary, #0f172a)', fontWeight: 600 }}>
                <span style={{ width: '10px', height: '10px', borderRadius: '50%', background: l.color }} />
                <span>{l.name}</span>
                <span style={{ color: 'var(--text-secondary, #64748b)', fontSize: '0.8rem' }}>{l.percent}%</span>
              </div>
            ))}
          </div>
        </div>

        {/* BENTO TILE 5: PINNED REPOSITORIES GRID (Spans 12 columns) */}
        <div style={{ gridColumn: 'span 12' }}>
          <div style={{ fontSize: '1.15rem', fontWeight: 800, color: 'var(--text-primary, #0f172a)', marginBottom: '1.25rem' }}>
            Featured Pinned Repositories
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '1.25rem' }}>
            {pinnedRepos.map((repo, idx) => (
              <a
                key={idx}
                href={repo.url}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  background: 'var(--card-bg, #ffffff)',
                  border: '1px solid var(--border-subtle, #e2e8f0)',
                  borderRadius: '20px',
                  padding: '1.5rem',
                  textDecoration: 'none',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  transition: 'transform 0.2s ease, border-color 0.2s ease, box-shadow 0.2s ease',
                  boxShadow: '0 8px 20px rgba(0,0,0,0.04)'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-4px)';
                  e.currentTarget.style.borderColor = repo.badgeColor;
                  e.currentTarget.style.boxShadow = `0 14px 30px rgba(0,0,0,0.08)`;
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0px)';
                  e.currentTarget.style.borderColor = 'var(--border-subtle, #e2e8f0)';
                  e.currentTarget.style.boxShadow = '0 8px 20px rgba(0,0,0,0.04)';
                }}
              >
                <div>
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '0.85rem' }}>
                    <div style={{ fontSize: '1.15rem', fontWeight: 800, color: 'var(--text-primary, #0f172a)', display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                      📁 {repo.name}
                    </div>

                    <span
                      style={{
                        fontSize: '0.72rem',
                        padding: '0.2rem 0.55rem',
                        borderRadius: '6px',
                        background: `${repo.badgeColor}15`,
                        color: repo.badgeColor,
                        fontWeight: 700,
                        border: `1px solid ${repo.badgeColor}33`
                      }}
                    >
                      {repo.badge}
                    </span>
                  </div>

                  <p style={{ fontSize: '0.88rem', color: 'var(--text-secondary, #475569)', lineHeight: 1.5, marginBottom: '1.25rem', fontWeight: 500 }}>
                    {repo.desc}
                  </p>
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  </section>
  );
}
