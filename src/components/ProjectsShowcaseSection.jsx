import React, { useState } from 'react';
import { IconGithub, IconExternalLink } from './Icons';

export default function ProjectsShowcaseSection() {
  const [hovered, setHovered] = useState(false);
  const [expandedId, setExpandedId] = useState(null);

  const projects = [
    {
      id: "cfls",
      title: "CFLS-Collaborative-File-Lock-Sync",
      bannerCategory: "■ COLLABORATIVE CODE COORDINATION",
      headlinePrefix: "Two developers.",
      headlineHighlight: "One shared codebase.",
      headlineSuffix: "No surprise collisions.",
      bannerDesc: "CFLS gives every teammate a live signal before they touch the same work. Local Agents coordinate through one Host while your source code stays in your normal Git workflow.",
      bannerImage: "/assets/cfls-logo.png",
      accentStripe: "#ef4444",
      year: "2025-2026",
      category: "DISTRIBUTED SYSTEMS / GIT LOCK PROTOCOL",
      gradient: "linear-gradient(125deg, #111827 0%, #1f2937 100%)",
      accentColor: "#a3e635",
      fullDescription: "Real-time coordination for developers and AI coding agents in the same Git repo — see who's editing what and prevent collisions before code is written. Host + agent + VS Code/Kiro extension + MCP server + live dashboard + CLI. Metadata-only.",
      primaryLang: "TypeScript",
      stars: 1,
      techStack: ["TypeScript", "Node.js", "VS Code Extension", "MCP Server", "WebSockets"],
      github: "https://github.com/greninja-op/CFLS-Collaborative-File-Lock-Sync",
      demo: "https://github.com/greninja-op/CFLS-Collaborative-File-Lock-Sync"
    },
    {
      id: "chronolens",
      title: "ChronoLens-AI",
      bannerCategory: "■ PREDICTIVE SRE & TELEMETRY OBSERVABILITY",
      headlinePrefix: "Predict SLO breaches.",
      headlineHighlight: "Before outages strike.",
      headlineSuffix: "Instant AI mitigation.",
      bannerDesc: "ChronoLens monitors live SigNoz OpenTelemetry trace feeds, predicts SLO breaches and cost spirals, and executes instant reversible circuit-breaker mitigations.",
      bannerImage: "/assets/chronolens-banner.png",
      accentStripe: "#0284c7",
      year: "2025-2026",
      category: "AI & OBSERVABILITY / SRE",
      gradient: "linear-gradient(125deg, #0f172a 0%, #1e293b 100%)",
      accentColor: "#38bdf8",
      fullDescription: "Closed-loop predictive SRE control plane built on OpenTelemetry and SigNoz API. Intercepts traces in sub-10ms, halts LLM cost spirals, and issues verified digital audit receipts.",
      primaryLang: "Python",
      stars: 124,
      techStack: ["Python", "OpenTelemetry", "SigNoz API", "FastAPI", "React", "Docker"],
      github: "https://github.com/greninja-op/ChronoLens",
      demo: "https://github.com/greninja-op/ChronoLens"
    },
    {
      id: "memoire",
      title: "Memoire-Engine",
      bannerCategory: "■ DYNAMIC VECTOR GRAPH & LLM MEMORY",
      headlinePrefix: "Infinite context window.",
      headlineHighlight: "Zero memory decay.",
      headlineSuffix: "For agentic tasks.",
      bannerDesc: "Memoire indexes multi-step conversation trajectories into a vector similarity memory graph, solving LLM context window overflow and memory loss.",
      bannerImage: "/assets/memoire-logo.png",
      accentStripe: "#a855f7",
      year: "2025-2026",
      category: "AI INFRASTRUCTURE / VECTOR GRAPH",
      gradient: "linear-gradient(125deg, #18181b 0%, #27272a 100%)",
      accentColor: "#c084fc",
      fullDescription: "Semantic graph memory engine providing sub-millisecond context retrieval for autonomous LLM agents with 65% token cost reduction.",
      primaryLang: "Python",
      stars: 89,
      techStack: ["Python", "Vector DB", "FastAPI", "Embeddings", "TypeScript"],
      github: "https://github.com/greninja-op/Memoire",
      demo: "https://github.com/greninja-op/Memoire"
    },
    {
      id: "nuvault",
      title: "NuVault-Security",
      bannerCategory: "■ ZERO-TRUST CRYPTOGRAPHIC VAULT",
      headlinePrefix: "Client-side AES-GCM.",
      headlineHighlight: "Zero unencrypted bytes.",
      headlineSuffix: "On cloud servers.",
      bannerDesc: "Enterprise cloud storage vault engineered for zero-trust asset protection. Assets are encrypted client-side using WebCrypto 256-bit keys.",
      bannerImage: "/assets/nuvault-logo.png",
      accentStripe: "#10b981",
      year: "2025-2026",
      category: "SECURITY & CLOUD / WEBCRYPTO",
      gradient: "linear-gradient(125deg, #064e3b 0%, #022c22 100%)",
      accentColor: "#34d399",
      fullDescription: "Zero-knowledge architecture ensuring servers hold zero key knowledge while streaming encrypted files at 1.2 GB/s.",
      primaryLang: "TypeScript",
      stars: 45,
      techStack: ["TypeScript", "Node.js", "React", "WebCrypto API", "PostgreSQL"],
      github: "https://github.com/greninja-op/Nuvault",
      demo: "https://github.com/greninja-op/Nuvault"
    }
  ];

  const toggleExpand = (id) => {
    setExpandedId((prev) => (prev === id ? null : id));
  };

  const getCardTransform = (idx, isExpanded) => {
    if (expandedId) {
      return isExpanded ? 'translateY(0px) scale(1)' : 'translateY(0px) scale(0.98)';
    }

    if (!hovered) {
      return `translateY(${idx * 16}px) scale(${1 - idx * 0.03})`;
    }

    const offsets = [0, 115, 230, 345];
    return `translateY(${offsets[idx]}px) scale(1)`;
  };

  return (
    <section
      id="projects"
      style={{
        padding: '5rem 0',
        position: 'relative'
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
          Section C • Interactive Showcase Deck
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
          Featured Engineering Projects
        </h2>

        <p style={{ color: 'var(--text-secondary, #94a3b8)', fontSize: '1.05rem', marginTop: '0.4rem', maxWidth: '680px' }}>
          Stacked project showcase deck. Hover to fan out stack, click to reveal complete project architecture and specs!
        </p>
      </div>

      {/* Metadata Bar */}
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          marginBottom: '1.5rem',
          color: 'var(--text-secondary, #94a3b8)',
          fontSize: '0.85rem',
          fontFamily: 'var(--font-mono, monospace)',
          fontWeight: 600,
          padding: '0 0.5rem'
        }}
      >
        <div>PROJECT ARCHITECTURE SHOWCASE</div>
        <div style={{ display: 'flex', alignItems: 'center', gap: '1.25rem' }}>
          <div>2025.1 — 2026.12</div>
          <div style={{ fontWeight: 900, fontSize: '1rem', letterSpacing: '0.15em', color: 'var(--text-primary, #ffffff)' }}>
            //////
          </div>
        </div>
      </div>

      {/* Interactive Stacked Deck Container */}
      <div
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        style={{
          position: 'relative',
          minHeight: expandedId ? 'auto' : '480px',
          display: 'flex',
          flexDirection: 'column',
          gap: expandedId ? '2.5rem' : '0',
          alignItems: 'center',
          justifyContent: 'center',
          margin: '1rem 0'
        }}
      >
        {projects.map((p, idx) => {
          const isExpanded = expandedId === p.id;
          return (
            <div
              key={p.id}
              onClick={() => toggleExpand(p.id)}
              style={{
                position: expandedId ? 'relative' : 'absolute',
                width: '100%',
                maxWidth: '860px',
                borderRadius: '24px',
                boxShadow: isExpanded
                  ? `0 25px 50px -10px rgba(0,0,0,0.5)`
                  : hovered
                  ? `0 20px 40px rgba(0, 0, 0, 0.35)`
                  : `0 12px 28px rgba(0, 0, 0, 0.25)`,
                transform: getCardTransform(idx, isExpanded),
                zIndex: isExpanded ? 50 : hovered ? 10 + idx : 10 - idx,
                transition: 'all 0.45s cubic-bezier(0.16, 1, 0.3, 1)',
                cursor: 'pointer',
                overflow: 'hidden',
                background: 'var(--card-bg, #090d16)',
                border: '1px solid var(--border-subtle, #1e293b)'
              }}
            >
              {/* TOP HERO MEDIA BANNER (1:1 Reference Match) */}
              <div
                style={{
                  background: '#070a12',
                  padding: '2.5rem 2.25rem',
                  display: 'grid',
                  gridTemplateColumns: '1.2fr 1fr',
                  gap: '2rem',
                  alignItems: 'center',
                  borderBottom: `4px solid ${p.accentStripe}`,
                  position: 'relative'
                }}
              >
                {/* Left Column: Text & Headline */}
                <div>
                  <div
                    style={{
                      fontSize: '0.75rem',
                      fontFamily: 'var(--font-mono, monospace)',
                      fontWeight: 800,
                      color: '#a3e635',
                      letterSpacing: '0.08em',
                      marginBottom: '1rem',
                      textTransform: 'uppercase'
                    }}
                  >
                    {p.bannerCategory}
                  </div>

                  <h3
                    style={{
                      fontFamily: 'var(--font-heading, system-ui, sans-serif)',
                      fontSize: 'clamp(1.8rem, 3.2vw, 2.5rem)',
                      fontWeight: 900,
                      color: '#ffffff',
                      lineHeight: 1.1,
                      letterSpacing: '-0.03em',
                      marginBottom: '1.25rem'
                    }}
                  >
                    {p.headlinePrefix}{' '}
                    <span style={{ color: '#a3e635' }}>{p.headlineHighlight}</span>{' '}
                    {p.headlineSuffix}
                  </h3>

                  <p
                    style={{
                      fontSize: '0.92rem',
                      color: '#94a3b8',
                      lineHeight: 1.55,
                      fontWeight: 500,
                      maxWidth: '460px'
                    }}
                  >
                    {p.bannerDesc}
                  </p>
                </div>

                {/* Right Column: Visual Architecture Image Banner */}
                <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                  <img
                    src={p.bannerImage}
                    alt={p.title}
                    style={{
                      maxWidth: '100%',
                      maxHeight: '220px',
                      borderRadius: '12px',
                      objectFit: 'contain',
                      boxShadow: '0 12px 30px rgba(0,0,0,0.5)',
                      border: '1px solid rgba(255, 255, 255, 0.1)'
                    }}
                  />
                </div>
              </div>

              {/* BOTTOM PROJECT INFO CARD SURFACE (1:1 Reference Match) */}
              <div
                style={{
                  background: 'var(--card-bg, #ffffff)',
                  color: 'var(--text-primary, #0f172a)',
                  padding: '2rem 2.25rem'
                }}
              >
                {/* Bold Project Title */}
                <h4
                  style={{
                    fontSize: '1.55rem',
                    fontWeight: 800,
                    color: 'var(--text-primary, #0f172a)',
                    marginBottom: '0.85rem',
                    letterSpacing: '-0.02em'
                  }}
                >
                  {p.title}
                </h4>

                {/* Full Detailed Description */}
                <p
                  style={{
                    fontSize: '1rem',
                    color: 'var(--text-secondary, #475569)',
                    lineHeight: 1.6,
                    marginBottom: '1.75rem',
                    fontWeight: 500
                  }}
                >
                  {p.fullDescription}
                </p>

                {/* Footer Metadata Row */}
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    flexWrap: 'wrap',
                    gap: '1rem'
                  }}
                >
                  {/* Left: Language Badge & Star Count */}
                  <div style={{ display: 'flex', alignItems: 'center', gap: '1.25rem' }}>
                    <span
                      style={{
                        padding: '0.4rem 0.85rem',
                        borderRadius: '8px',
                        background: 'var(--code-bg, #f1f5f9)',
                        color: 'var(--text-primary, #0f172a)',
                        fontSize: '0.85rem',
                        fontWeight: 700,
                        fontFamily: 'var(--font-mono, monospace)'
                      }}
                    >
                      {p.primaryLang}
                    </span>

                    <span
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '0.35rem',
                        fontSize: '0.9rem',
                        fontWeight: 700,
                        color: 'var(--text-secondary, #64748b)'
                      }}
                    >
                      ★ {p.stars}
                    </span>
                  </div>

                  {/* Right: Lime Green GitHub Button & External Link */}
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                    <a
                      href={p.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={(e) => e.stopPropagation()}
                      style={{
                        width: '42px',
                        height: '42px',
                        borderRadius: '12px',
                        background: '#a3e635',
                        color: '#000000',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        textDecoration: 'none',
                        boxShadow: '0 4px 12px rgba(163, 230, 53, 0.3)',
                        transition: 'transform 0.15s ease'
                      }}
                      title="View GitHub Repository"
                      onMouseEnter={(e) => (e.currentTarget.style.transform = 'scale(1.08)')}
                      onMouseLeave={(e) => (e.currentTarget.style.transform = 'scale(1)')}
                    >
                      <IconGithub size={22} />
                    </a>

                    <a
                      href={p.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={(e) => e.stopPropagation()}
                      style={{
                        width: '42px',
                        height: '42px',
                        borderRadius: '12px',
                        background: 'transparent',
                        border: '1px solid var(--border-subtle, #cbd5e1)',
                        color: 'var(--text-primary, #0f172a)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        textDecoration: 'none',
                        transition: 'transform 0.15s ease'
                      }}
                      title="Architecture Specs"
                      onMouseEnter={(e) => (e.currentTarget.style.transform = 'scale(1.08)')}
                      onMouseLeave={(e) => (e.currentTarget.style.transform = 'scale(1)')}
                    >
                      <IconExternalLink size={20} />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
