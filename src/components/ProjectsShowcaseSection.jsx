import React, { useState } from 'react';
import { IconGithub, IconExternalLink } from './Icons';

export default function ProjectsShowcaseSection() {
  const [hovered, setHovered] = useState(false);
  const [expandedId, setExpandedId] = useState(null);

  const projects = [
    {
      id: "chronolens",
      title: "ChronoLens",
      tagline: "Closed-Loop Predictive SRE Control Plane on SigNoz",
      category: "AI & OBSERVABILITY / SRE / TELEMETRY",
      year: "2025-2026",
      badge: "⚡ Agents of SigNoz Winner",
      accentColor: "#0284c7",
      gradient: "linear-gradient(125deg, #f0f7ff 0%, #dbeafe 35%, #93c5fd 60%, #4f46e5 85%, #312e81 100%)",
      icon3d: "🪐",
      characterArt: "👨‍💻",
      description: "ChronoLens monitors live SigNoz OpenTelemetry trace feeds, predicts SLO breaches and AI agent cost spirals before outages happen, executes reversible circuit-breaker mitigations, and logs verifiable digital audit receipts.",
      highlights: [
        "Predictive SLO breach detection using live SigNoz OpenTelemetry feeds",
        "Reversible automated mitigation & sub-10ms instant rollback capabilities",
        "Agent Watch: loop detection & LLM cost-spiral breaker",
        "Digital audit receipt logging for verified failure prevention"
      ],
      metrics: [
        { label: "MTTD Reduction", value: "40%" },
        { label: "Trace Interception", value: "<10ms" },
        { label: "Audit Receipt", value: "Verified" }
      ],
      techStack: ["Python", "OpenTelemetry", "SigNoz API", "FastAPI", "React", "Docker"],
      github: "https://github.com/greninja-op/ChronoLens.git",
      demo: "https://github.com/greninja-op/ChronoLens"
    },
    {
      id: "memoire",
      title: "Memoire",
      tagline: "AI Memory Graph & Long-Term Context Retention Engine",
      category: "AI INFRASTRUCTURE / VECTOR GRAPH / LLM",
      year: "2025-2026",
      badge: "🧠 AI Context Graph",
      accentColor: "#7c3aed",
      gradient: "linear-gradient(125deg, #f5f3ff 0%, #ddd6fe 35%, #a78bfa 60%, #6d28d9 85%, #4c1d95 100%)",
      icon3d: "🔮",
      characterArt: "🤖",
      description: "Memoire indexes multi-step conversation trajectories into a vector similarity memory graph, solving LLM context window overflow and memory decay across extended autonomous agent tasks.",
      highlights: [
        "Vector embeddings & semantic graph memory indexing",
        "Dynamic context pruning & relevance decay algorithms",
        "Sub-millisecond memory retrieval for live LLM agent prompts",
        "Seamless vector store & agentic framework integration"
      ],
      metrics: [
        { label: "Token Savings", value: "65%" },
        { label: "Search Latency", value: "<1ms" },
        { label: "Context Window", value: "Infinite" }
      ],
      techStack: ["Python", "Vector DB", "FastAPI", "Embeddings", "TypeScript"],
      github: "https://github.com/greninja-op/Memoire.git",
      demo: "https://github.com/greninja-op/Memoire"
    },
    {
      id: "nuvault",
      title: "Nuvault",
      tagline: "Zero-Trust Cloud Vault & Encrypted Asset Platform",
      category: "SECURITY & CLOUD / WEBCRYPTO / VAULT",
      year: "2025-2026",
      badge: "🔐 Zero-Knowledge Vault",
      accentColor: "#059669",
      gradient: "linear-gradient(125deg, #ecfdf5 0%, #a7f3d0 35%, #34d399 60%, #059669 85%, #064e3b 100%)",
      icon3d: "💎",
      characterArt: "🛡️",
      description: "Enterprise cloud storage vault engineered for zero-trust asset protection. Assets are encrypted client-side using WebCrypto AES-GCM 256-bit keys before transmission, ensuring servers hold zero unencrypted bytes.",
      highlights: [
        "Client-side WebCrypto AES-GCM 256-bit encryption",
        "Zero-knowledge architecture & tenant key isolation",
        "High-throughput chunked file streaming & decryption",
        "Granular cryptographic audit trail logs"
      ],
      metrics: [
        { label: "Cipher Suite", value: "AES-GCM-256" },
        { label: "Server Keys", value: "Zero" },
        { label: "Stream Speed", value: "1.2 GB/s" }
      ],
      techStack: ["TypeScript", "Node.js", "React", "WebCrypto API", "PostgreSQL", "Docker"],
      github: "https://github.com/greninja-op/Nuvault.git",
      demo: "https://github.com/greninja-op/Nuvault"
    },
    {
      id: "cfls",
      title: "CFLS Protocol",
      tagline: "Real-Time Distributed File Locking Protocol",
      category: "DISTRIBUTED SYSTEMS / gRPC / WEBSOCKETS",
      year: "2025-2026",
      badge: "🔒 Lock Consensus Engine",
      accentColor: "#e11d48",
      gradient: "linear-gradient(125deg, #fff1f2 0%, #fecdd3 35%, #fb7185 60%, #e11d48 85%, #881337 100%)",
      icon3d: "⚡",
      characterArt: "⚡",
      description: "Real-time distributed file locking protocol designed for multi-user developer worktrees and AI agent code coordination. Prevents atomic edit collisions across remote workspaces.",
      highlights: [
        "gRPC & WebSocket bidirectional lock consensus",
        "Sub-millisecond lock acquisition & atomic lease renewal",
        "Conflict detection for concurrent multi-agent file modifications",
        "Zero-dependency lightweight CLI & daemon"
      ],
      metrics: [
        { label: "Lock Latency", value: "<1ms" },
        { label: "Concurrency", value: "10k req/s" },
        { label: "Collisions", value: "0%" }
      ],
      techStack: ["Go", "gRPC", "WebSockets", "TypeScript", "React"],
      github: "https://github.com/greninja-op/CFLS-Collaborative-File-Lock-Sync.git",
      demo: "https://github.com/greninja-op/CFLS-Collaborative-File-Lock-Sync"
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
      return `translateY(${idx * 20}px) scale(${1 - idx * 0.03})`;
    }

    const offsets = [0, 125, 250, 375];
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
      {/* TRUE SVG GEOMETRIC FOLDER SILHOUETTE CLIPPATH MASK */}
      <svg style={{ position: 'absolute', width: 0, height: 0, overflow: 'hidden' }}>
        <defs>
          <clipPath id="folderCardShape" clipPathUnits="objectBoundingBox">
            <path d="
              M 0,0.06
              C 0,0.02 0.02,0 0.05,0
              L 0.73,0
              C 0.75,0 0.77,0.02 0.78,0.04
              L 0.81,0.14
              C 0.82,0.16 0.83,0.16 0.85,0.16
              L 0.95,0.16
              C 0.98,0.16 1,0.18 1,0.22
              L 1,0.94
              C 1,0.98 0.98,1 0.95,1
              L 0.27,1
              C 0.25,1 0.23,0.98 0.22,0.96
              L 0.19,0.86
              C 0.18,0.84 0.17,0.84 0.15,0.84
              L 0.05,0.84
              C 0.02,0.84 0,0.82 0,0.78
              Z
            " />
          </clipPath>
        </defs>
      </svg>

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
          Section C • Interactive Portfolio Album Deck
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
          Featured Open-Source Works
        </h2>

        <p style={{ color: 'var(--text-secondary, #94a3b8)', fontSize: '1.05rem', marginTop: '0.4rem', maxWidth: '680px' }}>
          True geometric SVG folder silhouette with physical top-right & bottom-left cutouts. Hover to fan out stack, click to expand full info in-place!
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
        <div>DESIGN BY LIANGSHANSHAN & ARJUN SABU</div>
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
          minHeight: expandedId ? 'auto' : '460px',
          display: 'flex',
          flexDirection: expandedId ? 'column' : 'row',
          gap: expandedId ? '2rem' : '0',
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
                maxWidth: '820px',
                background: p.gradient,
                clipPath: 'url(#folderCardShape)',
                WebkitClipPath: 'url(#folderCardShape)',
                boxShadow: isExpanded
                  ? `0 25px 50px -10px rgba(0,0,0,0.5), 0 0 35px ${p.accentColor}55`
                  : hovered
                  ? `0 20px 40px rgba(0, 0, 0, 0.35)`
                  : `0 12px 28px rgba(0, 0, 0, 0.3)`,
                transform: getCardTransform(idx, isExpanded),
                zIndex: isExpanded ? 50 : hovered ? 10 + idx : 10 - idx,
                transition: 'all 0.45s cubic-bezier(0.16, 1, 0.3, 1)',
                padding: '2.5rem 2.25rem 3.5rem 2.25rem',
                color: '#0f172a',
                cursor: 'pointer'
              }}
              className="true-svg-folder-card"
            >
              {/* High-Gloss Liquid Sheen Overlay Reflection */}
              <div
                style={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  right: 0,
                  bottom: 0,
                  background: 'radial-gradient(circle at 25% 20%, rgba(255, 255, 255, 0.85) 0%, rgba(255, 255, 255, 0) 55%)',
                  pointerEvents: 'none'
                }}
              />

              {/* Card Top Category Tag Header */}
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  marginBottom: '1.5rem',
                  paddingRight: '180px'
                }}
              >
                <div style={{ fontSize: '0.78rem', fontWeight: 800, letterSpacing: '0.12em', color: '#334155', textTransform: 'uppercase' }}>
                  DESIGN / {p.category}
                </div>

                <div style={{ fontSize: '0.9rem', fontFamily: 'var(--font-mono, monospace)', fontWeight: 700, color: '#334155' }}>
                  {p.year}
                </div>
              </div>

              {/* Card Main Body */}
              <div style={{ position: 'relative', minHeight: '180px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                <div
                  style={{
                    position: 'absolute',
                    top: '0px',
                    right: '10px',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.75rem',
                    filter: 'drop-shadow(0 15px 25px rgba(0,0,0,0.25))',
                    userSelect: 'none',
                    zIndex: 3
                  }}
                >
                  <span style={{ fontSize: '4.2rem', transform: 'rotate(-15deg)', display: 'inline-block' }}>
                    {p.icon3d}
                  </span>
                  <span style={{ fontSize: '3.5rem', display: 'inline-block' }}>
                    {p.characterArt}
                  </span>
                </div>

                <div style={{ maxWidth: '480px', zIndex: 4 }}>
                  <div style={{ fontSize: '0.9rem', fontWeight: 700, color: '#334155', marginBottom: '0.3rem' }}>
                    {p.year}
                  </div>

                  <h3 style={{ fontSize: 'clamp(2.4rem, 4.5vw, 3.4rem)', fontWeight: 900, color: '#0f172a', lineHeight: 1.02, marginBottom: '0.5rem', letterSpacing: '-0.03em' }}>
                    {p.title}
                  </h3>

                  <div
                    style={{
                      fontFamily: 'var(--font-heading, system-ui, sans-serif)',
                      fontSize: '0.92rem',
                      fontWeight: 900,
                      letterSpacing: '0.28em',
                      textTransform: 'uppercase',
                      color: '#1e293b',
                      marginBottom: '1.25rem'
                    }}
                  >
                    P O R T F O L I O  /  S Y S T E M S
                  </div>

                  <p style={{ fontSize: '1.02rem', color: '#1e293b', lineHeight: 1.55, fontWeight: 600 }}>
                    {p.tagline}
                  </p>
                </div>

                {/* Card Bottom Trigger Bar */}
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    marginTop: '1.75rem',
                    paddingLeft: '180px',
                    zIndex: 4
                  }}
                >
                  <div
                    style={{
                      fontSize: '0.85rem',
                      fontWeight: 800,
                      color: p.accentColor,
                      display: 'flex',
                      alignItems: 'center',
                      gap: '0.4rem',
                      background: 'rgba(255, 255, 255, 0.85)',
                      padding: '0.45rem 1rem',
                      borderRadius: '10px',
                      boxShadow: '0 4px 12px rgba(0,0,0,0.08)'
                    }}
                  >
                    <span>{isExpanded ? 'Click to Collapse ▲' : 'Click to Expand Info Inline ▼'}</span>
                  </div>

                  <div style={{ fontSize: '0.82rem', fontFamily: 'var(--font-mono, monospace)', fontWeight: 700, color: '#334155' }}>
                    DESIGN / {p.id}
                  </div>
                </div>
              </div>

              {/* IN-PLACE ANIMATED EXPANSION PANEL */}
              <div
                style={{
                  maxHeight: isExpanded ? '900px' : '0px',
                  opacity: isExpanded ? 1 : 0,
                  overflow: 'hidden',
                  transition: 'all 0.45s cubic-bezier(0.16, 1, 0.3, 1)',
                  marginTop: isExpanded ? '1.75rem' : '0px',
                  paddingTop: isExpanded ? '1.75rem' : '0px',
                  borderTop: isExpanded ? '1px dashed rgba(15, 23, 42, 0.25)' : 'none',
                  position: 'relative',
                  zIndex: 10
                }}
              >
                <p style={{ fontSize: '1.05rem', color: '#0f172a', lineHeight: 1.65, marginBottom: '1.5rem', fontWeight: 600 }}>
                  {p.description}
                </p>

                {/* 3-Column Metrics Counters */}
                <div
                  style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(3, 1fr)',
                    gap: '0.85rem',
                    marginBottom: '1.5rem',
                    padding: '1.1rem',
                    borderRadius: '14px',
                    background: 'rgba(255, 255, 255, 0.9)',
                    border: '1px solid rgba(15, 23, 42, 0.12)',
                    boxShadow: '0 4px 14px rgba(0,0,0,0.05)'
                  }}
                >
                  {p.metrics.map((m, mIdx) => (
                    <div key={mIdx} style={{ textAlign: 'center' }}>
                      <div style={{ fontSize: '1.7rem', fontWeight: 900, color: p.accentColor }}>
                        {m.value}
                      </div>
                      <div style={{ fontSize: '0.78rem', color: '#475569', fontWeight: 700, marginTop: '0.1rem' }}>
                        {m.label}
                      </div>
                    </div>
                  ))}
                </div>

                {/* Key Technical Accomplishments */}
                <div style={{ marginBottom: '1.5rem' }}>
                  <div style={{ fontSize: '0.8rem', textTransform: 'uppercase', letterSpacing: '0.08em', fontWeight: 800, color: '#334155', marginBottom: '0.6rem' }}>
                    Key Technical Accomplishments:
                  </div>
                  <ul style={{ paddingLeft: '1.25rem', margin: 0, color: '#0f172a', fontSize: '0.98rem', lineHeight: 1.65, display: 'flex', flexDirection: 'column', gap: '0.4rem', fontWeight: 600 }}>
                    {p.highlights.map((h, hIdx) => (
                      <li key={hIdx}>{h}</li>
                    ))}
                  </ul>
                </div>

                {/* Tech Stack Pills */}
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem', marginBottom: '1.75rem' }}>
                  {p.techStack.map((tech, tIdx) => (
                    <span
                      key={tIdx}
                      style={{
                        fontSize: '0.8rem',
                        fontFamily: 'var(--font-mono, monospace)',
                        padding: '0.35rem 0.75rem',
                        borderRadius: '6px',
                        background: '#08090d',
                        color: '#ffffff',
                        fontWeight: 700
                      }}
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Action CTAs */}
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.85rem' }}>
                  <a
                    href={p.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={(e) => e.stopPropagation()}
                    style={{
                      padding: '0.8rem 1.5rem',
                      borderRadius: '10px',
                      background: '#08090d',
                      color: '#ffffff',
                      fontWeight: 700,
                      fontSize: '0.92rem',
                      textDecoration: 'none',
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '0.5rem',
                      boxShadow: '0 4px 14px rgba(8, 9, 13, 0.4)'
                    }}
                  >
                    <IconGithub size={18} /> View GitHub Repo
                  </a>

                  <a
                    href={p.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={(e) => e.stopPropagation()}
                    style={{
                      padding: '0.8rem 1.5rem',
                      borderRadius: '10px',
                      background: 'rgba(255, 255, 255, 0.9)',
                      border: '1px solid rgba(15, 23, 42, 0.2)',
                      color: '#0f172a',
                      fontWeight: 700,
                      fontSize: '0.92rem',
                      textDecoration: 'none',
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '0.5rem'
                    }}
                  >
                    <IconExternalLink size={18} /> Architecture Specs
                  </a>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Bottom Footer Metadata */}
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          marginTop: '2rem',
          color: 'var(--text-secondary, #64748b)',
          fontSize: '0.85rem',
          fontFamily: 'var(--font-mono, monospace)',
          padding: '0 0.5rem'
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
          <div style={{ fontWeight: 900, fontSize: '1rem', letterSpacing: '0.15em', color: 'var(--text-primary, #ffffff)' }}>
            //////
          </div>
          <div>DESIGN / SHANSHAN & ARJUN SABU</div>
        </div>
        <div>TRUE SVG GEOMETRIC FOLDER CUTOUT</div>
      </div>
    </section>
  );
}
