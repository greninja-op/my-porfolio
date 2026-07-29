import React from 'react';
import { personalInfo } from '../data/portfolioData';
import { IconGithub, IconExternalLink, IconCode } from './Icons';

export default function GithubHighlights() {
  const pinnedRepos = [
    {
      name: "ChronoLens",
      desc: "Closed-loop reliability control plane intercepting SLO breaches from OpenTelemetry feeds.",
      stars: "★ SigNoz Winner",
      lang: "Python / OTel",
      url: "https://github.com/greninja-op/ChronoLens"
    },
    {
      name: "Memoire",
      desc: "Semantic memory graph & context retention engine for autonomous AI agents.",
      stars: "★ Top Repo",
      lang: "Python / Vector DB",
      url: "https://github.com/greninja-op/Memoire"
    },
    {
      name: "Nuvault",
      desc: "Zero-knowledge cloud vault utilizing WebCrypto client-side 256-bit AES-GCM.",
      stars: "★ Security",
      lang: "TypeScript / React",
      url: "https://github.com/greninja-op/Nuvault"
    },
    {
      name: "CFLS Protocol",
      desc: "Real-time distributed file lock sync protocol with sub-millisecond gRPC streaming.",
      stars: "★ Distributed",
      lang: "Go / gRPC",
      url: "https://github.com/greninja-op/CFLS-Collaborative-File-Lock-Sync"
    }
  ];

  return (
    <section
      id="github"
      style={{
        padding: '3.5rem 1.5rem',
        maxWidth: '1150px',
        margin: '0 auto'
      }}
    >
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
          Section 4 • Proof of Work
        </div>

        <h2
          style={{
            fontFamily: 'var(--font-heading, system-ui, sans-serif)',
            fontSize: 'clamp(1.8rem, 3.5vw, 2.5rem)',
            fontWeight: 800,
            color: 'var(--text-primary, #ffffff)',
            letterSpacing: '-0.02em'
          }}
        >
          GitHub & Open-Source Activity Spotlight
        </h2>

        <p style={{ color: 'var(--text-secondary, #94a3b8)', fontSize: '1.05rem', marginTop: '0.5rem', maxWidth: '650px' }}>
          Tangible proof of consistent engineering, clean documentation, and active repository commits.
        </p>
      </div>

      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
          gap: '1.5rem',
          alignItems: 'stretch'
        }}
      >
        {/* Left: GitHub Activity Card */}
        <div
          style={{
            background: 'var(--card-bg, rgba(255, 255, 255, 0.03))',
            border: '1px solid var(--border-subtle, rgba(255, 255, 255, 0.1))',
            borderRadius: 'var(--ui-radius, 16px)',
            padding: '1.75rem',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between'
          }}
        >
          <div>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '1.25rem' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
                <IconGithub size={24} color="var(--accent-primary, #06b6d4)" />
                <h3 style={{ fontSize: '1.25rem', fontWeight: 700, color: 'var(--text-primary, #fff)', margin: 0 }}>
                  @{personalInfo.handle}
                </h3>
              </div>
              <a
                href={personalInfo.github}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  fontSize: '0.85rem',
                  color: 'var(--accent-primary, #06b6d4)',
                  textDecoration: 'none',
                  fontWeight: 600
                }}
              >
                View Profile ↗
              </a>
            </div>

            <p style={{ color: 'var(--text-secondary, #94a3b8)', fontSize: '0.95rem', lineHeight: 1.5, marginBottom: '1.5rem' }}>
              Consistently pushing production-grade code, detailed architecture READMEs, and zero-dependency utility libraries.
            </p>

            {/* GitHub Stats Counter Grid */}
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: '1fr 1fr',
                gap: '1rem',
                padding: '1rem',
                borderRadius: '10px',
                background: 'var(--code-bg, rgba(15, 23, 42, 0.6))',
                border: '1px solid var(--border-subtle, rgba(255, 255, 255, 0.08))'
              }}
            >
              <div>
                <div style={{ fontSize: '1.5rem', fontWeight: 800, color: 'var(--text-primary, #fff)' }}>1,400+</div>
                <div style={{ fontSize: '0.78rem', color: 'var(--text-secondary, #94a3b8)' }}>Total Commits</div>
              </div>
              <div>
                <div style={{ fontSize: '1.5rem', fontWeight: 800, color: '#10b981' }}>100%</div>
                <div style={{ fontSize: '0.78rem', color: 'var(--text-secondary, #94a3b8)' }}>Open-Source Code</div>
              </div>
            </div>
          </div>

          <div style={{ marginTop: '1.5rem', paddingTop: '1rem', borderTop: '1px solid var(--border-subtle, rgba(255,255,255,0.08))' }}>
            <span style={{ fontSize: '0.8rem', color: 'var(--text-secondary, #94a3b8)', display: 'block' }}>
              ✓ All repos feature clean setup guides, architecture diagrams, & zero-credential secrets hygiene.
            </span>
          </div>
        </div>

        {/* Right: Pinned Repos Grid */}
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
          {pinnedRepos.map((repo, rIdx) => (
            <a
              key={rIdx}
              href={repo.url}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                background: 'var(--card-bg, rgba(255, 255, 255, 0.03))',
                border: '1px solid var(--border-subtle, rgba(255, 255, 255, 0.1))',
                borderRadius: 'var(--ui-radius, 12px)',
                padding: '1.2rem',
                textDecoration: 'none',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                transition: 'all 0.15s ease'
              }}
              onMouseEnter={(e) => (e.currentTarget.style.borderColor = 'var(--accent-primary, #06b6d4)')}
              onMouseLeave={(e) => (e.currentTarget.style.borderColor = 'var(--border-subtle, rgba(255, 255, 255, 0.1))')}
            >
              <div>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '0.5rem' }}>
                  <span style={{ fontWeight: 700, fontSize: '1.05rem', color: 'var(--text-primary, #fff)' }}>{repo.name}</span>
                  <span style={{ fontSize: '0.75rem', padding: '0.15rem 0.45rem', borderRadius: '4px', background: 'rgba(6,182,212,0.15)', color: '#38bdf8' }}>{repo.stars}</span>
                </div>
                <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary, #94a3b8)', lineHeight: 1.4, margin: '0 0 1rem 0' }}>
                  {repo.desc}
                </p>
              </div>

              <div style={{ fontSize: '0.78rem', fontFamily: 'var(--font-mono, monospace)', color: 'var(--accent-primary, #06b6d4)' }}>
                {repo.lang} ↗
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
