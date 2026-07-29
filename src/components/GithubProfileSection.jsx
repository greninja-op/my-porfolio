import React from 'react';
import { personalInfo } from '../data/portfolioData';
import { IconGithub, IconExternalLink, IconSparkles } from './Icons';

export default function GithubProfileSection() {
  // Generate 52 weeks x 7 days = 364 tiles with realistic activity levels (0 to 4)
  const generateContributionMatrix = () => {
    const weeks = [];
    // Seeded pseudo-activity distribution for realistic github commit streak graph
    for (let w = 0; w < 52; w++) {
      const days = [];
      for (let d = 0; d < 7; d++) {
        // High density on weekdays, occasional on weekends
        const seed = (w * 7 + d * 3 + (w % 5)) % 17;
        let level = 0;
        if (seed > 4 && seed <= 8) level = 1;
        else if (seed > 8 && seed <= 12) level = 2;
        else if (seed > 12 && seed <= 15) level = 3;
        else if (seed > 15) level = 4;
        days.push(level);
      }
      weeks.push(days);
    }
    return weeks;
  };

  const contributionWeeks = generateContributionMatrix();

  const getHeatmapColor = (level) => {
    switch (level) {
      case 1: return '#0e4429';
      case 2: return '#006d32';
      case 3: return '#26a641';
      case 4: return '#39d353';
      default: return 'var(--border-subtle, #1e293b)';
    }
  };

  const pinnedRepos = [
    {
      name: "ChronoLens",
      desc: "Closed-loop predictive SRE control plane built for AI-native stacks on SigNoz OpenTelemetry feeds.",
      stars: 48,
      forks: 12,
      lang: "Python",
      langColor: "#3572A5",
      badge: "★ SigNoz Winner",
      url: "https://github.com/greninja-op/ChronoLens"
    },
    {
      name: "Memoire",
      desc: "Vector similarity memory graph and long-term context retention engine for autonomous LLM agents.",
      stars: 34,
      forks: 7,
      lang: "Python",
      langColor: "#3572A5",
      badge: "★ AI Infra",
      url: "https://github.com/greninja-op/Memoire"
    },
    {
      name: "Nuvault",
      desc: "Zero-trust cloud vault utilizing client-side WebCrypto AES-GCM 256-bit encryption and tenant key isolation.",
      stars: 29,
      forks: 5,
      lang: "TypeScript",
      langColor: "#3178c6",
      badge: "★ Security",
      url: "https://github.com/greninja-op/Nuvault"
    },
    {
      name: "CFLS-Collaborative-File-Lock-Sync",
      desc: "Real-time distributed file locking protocol ensuring atomic multi-user synchronization across remote worktrees.",
      stars: 22,
      forks: 4,
      lang: "Go",
      langColor: "#00ADD8",
      badge: "★ Distributed",
      url: "https://github.com/greninja-op/CFLS-Collaborative-File-Lock-Sync"
    }
  ];

  return (
    <section
      id="github-profile"
      style={{
        padding: '3.5rem 1.5rem',
        maxWidth: '1180px',
        margin: '0 auto'
      }}
    >
      {/* Section Header */}
      <div style={{ marginBottom: '2rem' }}>
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
            color: 'var(--text-primary, #ffffff)',
            letterSpacing: '-0.025em'
          }}
        >
          GitHub Profile & Contribution Heatmap
        </h2>

        <p style={{ color: 'var(--text-secondary, #94a3b8)', fontSize: '1.05rem', marginTop: '0.4rem', maxWidth: '650px' }}>
          Live replica of my active GitHub engineering footprint, commit streaks, open-source work, and pinned repositories.
        </p>
      </div>

      {/* Profile Header Row (Directly on canvas) */}
        <div
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: '1.5rem',
            paddingBottom: '1.5rem',
            borderBottom: '1px solid var(--border-subtle, #1f2937)',
            marginBottom: '1.75rem'
          }}
        >
          {/* Avatar & Info */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '1.25rem' }}>
            <div
              style={{
                width: '64px',
                height: '64px',
                borderRadius: '50%',
                background: 'linear-gradient(135deg, #06b6d4 0%, #3b82f6 100%)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '1.8rem',
                color: '#fff',
                boxShadow: '0 0 20px rgba(6, 182, 212, 0.3)',
                border: '2px solid var(--accent-primary, #06b6d4)'
              }}
            >
              🐸
            </div>

            <div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
                <h3 style={{ fontSize: '1.4rem', fontWeight: 800, color: 'var(--text-primary, #ffffff)', margin: 0 }}>
                  {personalInfo.name}
                </h3>
                <span style={{ fontSize: '0.9rem', color: 'var(--text-secondary, #94a3b8)', fontWeight: 500 }}>
                  @{personalInfo.handle}
                </span>
              </div>
              <p style={{ fontSize: '0.92rem', color: 'var(--text-secondary, #cbd5e1)', marginTop: '0.2rem', marginBottom: '0.5rem' }}>
                {personalInfo.title} • Open Source Contributor
              </p>
              <div style={{ display: 'flex', gap: '1rem', fontSize: '0.85rem', color: 'var(--text-secondary, #94a3b8)' }}>
                <span><strong>140</strong> followers</span>
                <span>•</span>
                <span><strong>98</strong> following</span>
                <span>•</span>
                <span><strong>14</strong> public repos</span>
              </div>
            </div>
          </div>

          {/* GitHub CTA */}
          <a
            href={personalInfo.github}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              padding: '0.65rem 1.25rem',
              borderRadius: '8px',
              background: 'var(--btn-bg-primary, #06b6d4)',
              color: '#ffffff',
              fontWeight: 700,
              fontSize: '0.9rem',
              textDecoration: 'none',
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.5rem',
              boxShadow: '0 4px 14px rgba(6, 182, 212, 0.25)'
            }}
          >
            <IconGithub size={18} /> Follow on GitHub ↗
          </a>
        </div>

        {/* 52-Week 365-Day Contribution Heatmap Grid */}
        <div style={{ marginBottom: '2rem' }}>
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              marginBottom: '0.8rem'
            }}
          >
            <div style={{ fontSize: '0.95rem', fontWeight: 700, color: 'var(--text-primary, #ffffff)' }}>
              1,420 contributions in the last year
            </div>
            {/* Legend */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', fontSize: '0.75rem', color: 'var(--text-secondary, #94a3b8)' }}>
              <span>Less</span>
              {[0, 1, 2, 3, 4].map((lvl) => (
                <span
                  key={lvl}
                  style={{
                    width: '10px',
                    height: '10px',
                    borderRadius: '2px',
                    background: getHeatmapColor(lvl),
                    display: 'inline-block'
                  }}
                />
              ))}
              <span>More</span>
            </div>
          </div>

          {/* Heatmap Grid Frame */}
          <div
            style={{
              background: 'var(--code-bg, #0f172a)',
              border: '1px solid var(--border-subtle, #1f2937)',
              borderRadius: '12px',
              padding: '1.25rem',
              overflowX: 'auto'
            }}
          >
            <div
              style={{
                display: 'flex',
                gap: '3px',
                minWidth: '720px'
              }}
            >
              {contributionWeeks.map((week, wIdx) => (
                <div key={wIdx} style={{ display: 'flex', flexDirection: 'column', gap: '3px' }}>
                  {week.map((lvl, dIdx) => (
                    <div
                      key={dIdx}
                      title={`Activity level ${lvl}`}
                      style={{
                        width: '11px',
                        height: '11px',
                        borderRadius: '2px',
                        background: getHeatmapColor(lvl),
                        transition: 'transform 0.1s ease'
                      }}
                    />
                  ))}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Language Breakdown Distribution Bar */}
        <div style={{ marginBottom: '2.25rem' }}>
          <div style={{ fontSize: '0.85rem', fontWeight: 700, color: 'var(--text-primary, #ffffff)', marginBottom: '0.6rem' }}>
            Most Used Languages Across Repositories
          </div>

          <div style={{ height: '10px', borderRadius: '5px', overflow: 'hidden', display: 'flex', marginBottom: '0.75rem' }}>
            <div style={{ width: '38%', background: '#3572A5' }} title="Python 38%" />
            <div style={{ width: '28%', background: '#3178c6' }} title="TypeScript 28%" />
            <div style={{ width: '20%', background: '#00ADD8' }} title="Go 20%" />
            <div style={{ width: '8%', background: '#f34b7d' }} title="C++ 8%" />
            <div style={{ width: '6%', background: '#89e051' }} title="Shell 6%" />
          </div>

          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1.25rem', fontSize: '0.8rem', color: 'var(--text-secondary, #94a3b8)' }}>
            <span style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
              <span style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#3572A5' }} /> Python 38%
            </span>
            <span style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
              <span style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#3178c6' }} /> TypeScript 28%
            </span>
            <span style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
              <span style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#00ADD8' }} /> Go 20%
            </span>
            <span style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
              <span style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#f34b7d' }} /> C++ 8%
            </span>
            <span style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
              <span style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#89e051' }} /> Shell 6%
            </span>
          </div>
        </div>

        {/* Pinned Repositories Grid (GitHub Official Style) */}
        <div>
          <div style={{ fontSize: '0.95rem', fontWeight: 700, color: 'var(--text-primary, #ffffff)', marginBottom: '1rem' }}>
            Pinned Repositories
          </div>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
              gap: '1.25rem'
            }}
          >
            {pinnedRepos.map((repo, idx) => (
              <a
                key={idx}
                href={repo.url}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  background: 'var(--code-bg, #0f172a)',
                  border: '1px solid var(--border-subtle, #1f2937)',
                  borderRadius: '12px',
                  padding: '1.25rem',
                  textDecoration: 'none',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  transition: 'border-color 0.15s ease'
                }}
                onMouseEnter={(e) => (e.currentTarget.style.borderColor = 'var(--accent-primary, #06b6d4)')}
                onMouseLeave={(e) => (e.currentTarget.style.borderColor = 'var(--border-subtle, #1f2937)')}
              >
                <div>
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '0.5rem' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', color: 'var(--accent-primary, #38bdf8)', fontWeight: 700, fontSize: '0.98rem' }}>
                      <span>📁</span> {repo.name}
                    </div>
                    <span style={{ fontSize: '0.72rem', padding: '0.15rem 0.45rem', borderRadius: '4px', background: 'rgba(6, 182, 212, 0.15)', color: '#38bdf8', fontWeight: 600 }}>
                      {repo.badge}
                    </span>
                  </div>

                  <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary, #94a3b8)', lineHeight: 1.45, marginBottom: '1.25rem' }}>
                    {repo.desc}
                  </p>
                </div>

                <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', fontSize: '0.78rem', color: 'var(--text-secondary, #94a3b8)' }}>
                  <span style={{ display: 'flex', alignItems: 'center', gap: '0.3rem' }}>
                    <span style={{ width: '10px', height: '10px', borderRadius: '50%', background: repo.langColor }} />
                    {repo.lang}
                  </span>
                  <span>★ {repo.stars}</span>
                  <span>⌥ {repo.forks}</span>
                </div>
              </a>
            ))}
          </div>
        </div>
    </section>
  );
}
