import React, { useState } from 'react';
import { IconGithub, IconExternalLink } from './Icons';
import MacWindowWrapper from './MacWindowWrapper';
import { playRetroClick } from '../utils/sound';

export default function ProjectsShowcaseSection() {
  const [hovered, setHovered] = useState(false);
  const [hoveredCardId, setHoveredCardId] = useState(null);
  const [expandedId, setExpandedId] = useState(null);

  const projects = [
    {
      id: "chronolens",
      title: "ChronoLens",
      tagline: "Closed-Loop Predictive SRE Control Plane on SigNoz",
      category: "AI & OBSERVABILITY / SRE / TELEMETRY",
      year: "2025-2026",
      badge: "⚡ Agents of SigNoz Winner",
      accentColor: "#000000",
      gradient: "linear-gradient(125deg, #fde047 0%, #facc15 100%)",
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
      accentColor: "#000000",
      gradient: "linear-gradient(125deg, #c084fc 0%, #a855f7 100%)",
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
      accentColor: "#000000",
      gradient: "linear-gradient(125deg, #4ade80 0%, #22c55e 100%)",
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
      accentColor: "#000000",
      gradient: "linear-gradient(125deg, #f472b6 0%, #e11d48 100%)",
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
    playRetroClick();
    setExpandedId((prev) => (prev === id ? null : id));
  };

  const getCardTransform = (idx, isExpanded) => {
    if (expandedId) {
      return isExpanded ? 'translate3d(0px, 0px, 0px) scale(1) rotate(0deg)' : 'translate3d(0px, 0px, 0px) scale(0.96) rotate(0deg)';
    }

    if (!hovered) {
      return `translate3d(0px, ${idx * 14}px, 0px) scale(${1 - idx * 0.025}) rotate(${idx * 1.8 - 2.5}deg)`;
    }

    // Horizontal Arc Fan-Out Deck on Hover (Cards fan out with Card 0 at front)
    const fanConfigs = [
      { x: -250, y: -12, rot: -9 },
      { x: -80, y: -4, rot: -3 },
      { x: 80, y: -4, rot: 3 },
      { x: 250, y: -12, rot: 9 }
    ];

    const cfg = fanConfigs[idx] || { x: 0, y: 0, rot: 0 };
    return `translate3d(${cfg.x}px, ${cfg.y}px, 0px) rotate(${cfg.rot}deg) scale(1)`;
  };

  const getCardZIndex = (idx, isExpanded, isCardHovered) => {
    if (isExpanded) return 100;
    if (isCardHovered) return 90;
    // CARD 0 (ChronoLens, yellow) is ALWAYS ON TOP at front (zIndex 40), then Card 1 (30), Card 2 (20), Card 3 (10)
    return (4 - idx) * 10;
  };

  return (
    <section id="projects" style={{ position: 'relative' }}>
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

      <MacWindowWrapper
        title="Featured Open-Source Works Deck"
        subtitle="True SVG geometric folder cards with top-right & bottom-left cutouts. Hover to fan out horizontally along an arc!"
        badgeText="DECK: 4 APPS"
        allowOverflow={true}
      >
        {/* Metadata Bar */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            marginBottom: '1.5rem',
            color: '#000000',
            fontSize: '0.82rem',
            fontFamily: 'var(--font-mono, monospace)',
            fontWeight: 900
          }}
        >
          <div>DESIGN BY LIANGSHANSHAN & ARJUN SABU</div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
            <div>2025.1 — 2026.12</div>
            <div style={{ fontWeight: 900, fontSize: '0.95rem', letterSpacing: '0.15em', color: '#000000' }}>
              //////
            </div>
          </div>
        </div>

        {/* Interactive Stacked Deck Container */}
        <div
          onMouseEnter={() => setHovered(true)}
          onMouseLeave={() => {
            setHovered(false);
            setHoveredCardId(null);
          }}
          style={{
            position: 'relative',
            minHeight: expandedId ? 'auto' : '460px',
            display: 'flex',
            flexDirection: expandedId ? 'column' : 'row',
            gap: expandedId ? '1.75rem' : '0',
            alignItems: 'center',
            justifyContent: 'center',
            margin: '1rem 0',
            overflow: 'visible'
          }}
        >
          {projects.map((p, idx) => {
            const isExpanded = expandedId === p.id;
            const isCardHovered = hoveredCardId === p.id;

            return (
              /* Hardware-Accelerated 60fps Card Wrapper */
              <div
                key={p.id}
                onMouseEnter={() => setHoveredCardId(p.id)}
                onMouseLeave={() => setHoveredCardId(null)}
                style={{
                  position: expandedId ? 'relative' : 'absolute',
                  width: '100%',
                  maxWidth: '760px',
                  transform: getCardTransform(idx, isExpanded),
                  zIndex: getCardZIndex(idx, isExpanded, isCardHovered),
                  transition: 'transform 0.35s cubic-bezier(0.16, 1, 0.3, 1), z-index 0.2s ease',
                  willChange: 'transform',
                  filter: 'drop-shadow(0 0 1px #000000) drop-shadow(4px 4px 0 #000000)'
                }}
              >
                <div
                  onClick={() => toggleExpand(p.id)}
                  style={{
                    width: '100%',
                    background: p.gradient,
                    clipPath: 'url(#folderCardShape)',
                    WebkitClipPath: 'url(#folderCardShape)',
                    border: '2px solid #000000',
                    padding: '2.25rem 2rem 3rem 2rem',
                    color: '#000000',
                    cursor: 'pointer',
                    position: 'relative'
                  }}
                  className="true-svg-folder-card"
                >
                  {/* High-Gloss Liquid Sheen Overlay */}
                  <div
                    style={{
                      position: 'absolute',
                      top: 0,
                      left: 0,
                      right: 0,
                      bottom: 0,
                      background: 'radial-gradient(circle at 25% 20%, rgba(255, 255, 255, 0.4) 0%, rgba(255, 255, 255, 0) 55%)',
                      pointerEvents: 'none'
                    }}
                  />

                  {/* Card Top Category Tag Header */}
                  <div
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      marginBottom: '1.25rem',
                      paddingRight: '160px'
                    }}
                  >
                    <div style={{ fontSize: '0.75rem', fontWeight: 900, letterSpacing: '0.1em', color: '#000000', textTransform: 'uppercase', fontFamily: 'var(--font-mono, monospace)' }}>
                      DESIGN / {p.category}
                    </div>

                    <div style={{ fontSize: '0.85rem', fontFamily: 'var(--font-mono, monospace)', fontWeight: 900, color: '#000000' }}>
                      {p.year}
                    </div>
                  </div>

                  {/* Card Main Body */}
                  <div style={{ position: 'relative', minHeight: '160px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                    <div
                      style={{
                        position: 'absolute',
                        top: '0px',
                        right: '10px',
                        display: 'flex',
                        alignItems: 'center',
                        gap: '0.65rem',
                        userSelect: 'none',
                        zIndex: 3
                      }}
                    >
                      <span style={{ fontSize: '3.8rem', transform: 'rotate(-15deg)', display: 'inline-block' }}>
                        {p.icon3d}
                      </span>
                      <span style={{ fontSize: '3.2rem', display: 'inline-block' }}>
                        {p.characterArt}
                      </span>
                    </div>

                    <div style={{ maxWidth: '450px', zIndex: 4 }}>
                      <div style={{ fontSize: '0.85rem', fontWeight: 900, color: '#000000', marginBottom: '0.25rem', fontFamily: 'var(--font-mono, monospace)' }}>
                        {p.year}
                      </div>

                      <h3 style={{ fontSize: 'clamp(2.2rem, 4vw, 3rem)', fontWeight: 900, color: '#000000', lineHeight: 1.02, marginBottom: '0.4rem', letterSpacing: '-0.03em', fontFamily: 'var(--font-mono, monospace)' }}>
                        {p.title}
                      </h3>

                      <div
                        style={{
                          fontFamily: 'var(--font-heading, system-ui, sans-serif)',
                          fontSize: '0.85rem',
                          fontWeight: 900,
                          letterSpacing: '0.25em',
                          textTransform: 'uppercase',
                          color: '#000000',
                          marginBottom: '1rem'
                        }}
                      >
                        P O R T F O L I O  /  S Y S T E M S
                      </div>

                      <p style={{ fontSize: '0.96rem', color: '#000000', lineHeight: 1.5, fontWeight: 700, fontFamily: 'var(--font-mono, monospace)' }}>
                        {p.tagline}
                      </p>
                    </div>

                    {/* Card Bottom Trigger Bar */}
                    <div
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                        marginTop: '1.5rem',
                        paddingLeft: '160px',
                        zIndex: 4
                      }}
                    >
                      <div
                        style={{
                          fontSize: '0.8rem',
                          fontWeight: 900,
                          fontFamily: 'var(--font-mono, monospace)',
                          color: '#000000',
                          display: 'flex',
                          alignItems: 'center',
                          gap: '0.35rem',
                          background: '#ffffff',
                          border: '2px solid #000000',
                          padding: '0.4rem 0.85rem',
                          borderRadius: '6px',
                          boxShadow: '2px 2px 0 #000000'
                        }}
                      >
                        <span>{isExpanded ? 'Click to Collapse ▲' : 'Click to Expand Info Inline ▼'}</span>
                      </div>

                      <div style={{ fontSize: '0.78rem', fontFamily: 'var(--font-mono, monospace)', fontWeight: 900, color: '#000000' }}>
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
                      marginTop: isExpanded ? '1.5rem' : '0px',
                      paddingTop: isExpanded ? '1.5rem' : '0px',
                      borderTop: isExpanded ? '2px dashed #000000' : 'none',
                      position: 'relative',
                      zIndex: 10
                    }}
                  >
                    <p style={{ fontSize: '0.98rem', color: '#000000', lineHeight: 1.6, marginBottom: '1.25rem', fontWeight: 700, fontFamily: 'var(--font-mono, monospace)' }}>
                      {p.description}
                    </p>

                    {/* 3-Column Metrics Counters */}
                    <div
                      style={{
                        display: 'grid',
                        gridTemplateColumns: 'repeat(3, 1fr)',
                        gap: '0.75rem',
                        marginBottom: '1.25rem',
                        padding: '1rem',
                        borderRadius: '8px',
                        background: '#ffffff',
                        border: '2px solid #000000',
                        boxShadow: '3px 3px 0 #000000'
                      }}
                    >
                      {p.metrics.map((m, mIdx) => (
                        <div key={mIdx} style={{ textAlign: 'center' }}>
                          <div style={{ fontSize: '1.5rem', fontWeight: 900, color: '#000000', fontFamily: 'var(--font-mono, monospace)' }}>
                            {m.value}
                          </div>
                          <div style={{ fontSize: '0.75rem', color: '#000000', fontWeight: 800, marginTop: '0.1rem', fontFamily: 'var(--font-mono, monospace)' }}>
                            {m.label}
                          </div>
                        </div>
                      ))}
                    </div>

                    {/* Key Technical Accomplishments */}
                    <div style={{ marginBottom: '1.25rem' }}>
                      <div style={{ fontSize: '0.78rem', textTransform: 'uppercase', letterSpacing: '0.08em', fontWeight: 900, color: '#000000', marginBottom: '0.5rem', fontFamily: 'var(--font-mono, monospace)' }}>
                        Key Technical Accomplishments:
                      </div>
                      <ul style={{ paddingLeft: '1.1rem', margin: 0, color: '#000000', fontSize: '0.92rem', lineHeight: 1.6, display: 'flex', flexDirection: 'column', gap: '0.35rem', fontWeight: 700, fontFamily: 'var(--font-mono, monospace)' }}>
                        {p.highlights.map((h, hIdx) => (
                          <li key={hIdx}>{h}</li>
                        ))}
                      </ul>
                    </div>

                    {/* Tech Stack Pills */}
                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.45rem', marginBottom: '1.5rem' }}>
                      {p.techStack.map((tech, tIdx) => (
                        <span
                          key={tIdx}
                          style={{
                            fontSize: '0.78rem',
                            fontFamily: 'var(--font-mono, monospace)',
                            padding: '0.3rem 0.65rem',
                            borderRadius: '5px',
                            background: '#ffffff',
                            border: '1.5px solid #000000',
                            color: '#000000',
                            fontWeight: 900
                          }}
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    {/* Action CTAs */}
                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.75rem' }}>
                      <a
                        href={p.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={(e) => {
                          e.stopPropagation();
                          playRetroClick();
                        }}
                        style={{
                          padding: '0.75rem 1.35rem',
                          borderRadius: '6px',
                          background: '#ffffff',
                          border: '2px solid #000000',
                          boxShadow: '3px 3px 0 #000000',
                          color: '#000000',
                          fontWeight: 900,
                          fontSize: '0.88rem',
                          fontFamily: 'var(--font-mono, monospace)',
                          textDecoration: 'none',
                          display: 'inline-flex',
                          alignItems: 'center',
                          gap: '0.45rem'
                        }}
                      >
                        <IconGithub size={17} /> View GitHub Repo
                      </a>

                      <a
                        href={p.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={(e) => {
                          e.stopPropagation();
                          playRetroClick();
                        }}
                        style={{
                          padding: '0.75rem 1.35rem',
                          borderRadius: '6px',
                          background: '#ffffff',
                          border: '2px solid #000000',
                          boxShadow: '3px 3px 0 #000000',
                          color: '#000000',
                          fontWeight: 900,
                          fontSize: '0.88rem',
                          fontFamily: 'var(--font-mono, monospace)',
                          textDecoration: 'none',
                          display: 'inline-flex',
                          alignItems: 'center',
                          gap: '0.45rem'
                        }}
                      >
                        <IconExternalLink size={17} /> Architecture Specs
                      </a>
                    </div>
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
            marginTop: '1.75rem',
            color: '#000000',
            fontSize: '0.8rem',
            fontFamily: 'var(--font-mono, monospace)',
            fontWeight: 900
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.85rem' }}>
            <div style={{ fontWeight: 900, fontSize: '0.95rem', letterSpacing: '0.15em', color: '#000000' }}>
              //////
            </div>
            <div>DESIGN / SHANSHAN & ARJUN SABU</div>
          </div>
          <div>TRUE SVG GEOMETRIC FOLDER CUTOUT</div>
        </div>
      </MacWindowWrapper>
    </section>
  );
}
