import React, { useState, useEffect } from 'react';
import { IconGithub, IconExternalLink } from './Icons';
import MacWindowWrapper from './MacWindowWrapper';
import { playRetroClick } from '../utils/sound';

export default function ProjectsShowcaseSection() {
  const [hovered, setHovered] = useState(false);
  const [hoveredCardId, setHoveredCardId] = useState(null);
  const [expandedId, setExpandedId] = useState(null);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 640);
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

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

    // Adaptive Fan-Out Config: Desktop vs Mobile Viewport
    if (isMobile) {
      const mobileConfigs = [
        { x: -12, y: -20, rot: -4 },
        { x: -4, y: 10, rot: -1 },
        { x: 4, y: 40, rot: 1 },
        { x: 12, y: 70, rot: 4 }
      ];
      const mCfg = mobileConfigs[idx] || { x: 0, y: 0, rot: 0 };
      return `translate3d(${mCfg.x}px, ${mCfg.y}px, 0px) rotate(${mCfg.rot}deg) scale(0.98)`;
    }

    // Full horizontal arc fan-out on desktop
    const desktopConfigs = [
      { x: -250, y: -12, rot: -9 },
      { x: -80, y: -4, rot: -3 },
      { x: 80, y: -4, rot: 3 },
      { x: 250, y: -12, rot: 9 }
    ];
    const dCfg = desktopConfigs[idx] || { x: 0, y: 0, rot: 0 };
    return `translate3d(${dCfg.x}px, ${dCfg.y}px, 0px) rotate(${dCfg.rot}deg) scale(1)`;
  };

  const getCardZIndex = (idx, isExpanded, isCardHovered) => {
    if (isExpanded) return 100;
    if (isCardHovered) return 90;
    // Card 0 (ChronoLens, yellow) is ALWAYS ON TOP at front (zIndex 40), then Card 1 (30), Card 2 (20), Card 3 (10)
    return (4 - idx) * 10;
  };

  // Scaled SVG Path string for 1000x600 viewBox matching objectBoundingBox clipPath 1:1
  const folderSvgPath = "M 0 36 C 0 12 20 0 50 0 L 730 0 C 750 0 770 12 780 24 L 810 84 C 820 96 830 96 850 96 L 950 96 C 980 96 1000 108 1000 132 L 1000 564 C 1000 588 980 600 950 600 L 270 600 C 250 600 230 588 220 576 L 190 516 C 180 504 170 504 150 504 L 50 504 C 20 504 0 492 0 468 Z";

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
        subtitle="True SVG geometric folder cards with top-right & bottom-left cutouts. Hover or tap to fan out!"
        badgeText="DECK: 4 APPS"
        allowOverflow={true}
      >
        {/* Metadata Bar */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            marginBottom: '1.25rem',
            color: '#000000',
            fontSize: '0.78rem',
            fontFamily: 'var(--font-mono, monospace)',
            fontWeight: 900,
            flexWrap: 'wrap',
            gap: '0.5rem'
          }}
        >
          <div>DESIGN BY LIANGSHANSHAN & ARJUN SABU</div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.65rem' }}>
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
          onTouchStart={() => setHovered(true)}
          style={{
            position: 'relative',
            minHeight: expandedId ? 'auto' : isMobile ? '380px' : '460px',
            display: 'flex',
            flexDirection: expandedId ? 'column' : 'row',
            gap: expandedId ? '1.5rem' : '0',
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
              /* Hardware-Accelerated Responsive Card Wrapper */
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
                  position: expandedId ? 'relative' : 'absolute'
                }}
              >
                {/* Dedicated SVG Vector Shadow + Razor-Sharp Outline Overlay */}
                <div style={{ position: 'relative', width: '100%', height: '100%' }}>
                  
                  {/* Hard Retro Black Drop Shadow SVG Layer */}
                  <svg
                    viewBox="0 0 1000 600"
                    preserveAspectRatio="none"
                    style={{
                      position: 'absolute',
                      top: '5px',
                      left: '5px',
                      width: '100%',
                      height: '100%',
                      pointerEvents: 'none',
                      zIndex: 1
                    }}
                  >
                    <path
                      d={folderSvgPath}
                      fill="#000000"
                      stroke="none"
                    />
                  </svg>

                  {/* Main Folder Content Body with clipPath */}
                  <div
                    onClick={() => toggleExpand(p.id)}
                    style={{
                      width: '100%',
                      background: p.gradient,
                      clipPath: 'url(#folderCardShape)',
                      WebkitClipPath: 'url(#folderCardShape)',
                      padding: isMobile ? '1.5rem 1.25rem 2.25rem 1.25rem' : '2.25rem 2rem 3rem 2rem',
                      color: '#000000',
                      cursor: 'pointer',
                      position: 'relative',
                      zIndex: 2
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
                        marginBottom: '1rem',
                        paddingRight: isMobile ? '80px' : '160px'
                      }}
                    >
                      <div style={{ fontSize: '0.7rem', fontWeight: 900, letterSpacing: '0.08em', color: '#000000', textTransform: 'uppercase', fontFamily: 'var(--font-mono, monospace)' }}>
                        DESIGN / {p.category}
                      </div>

                      <div style={{ fontSize: '0.78rem', fontFamily: 'var(--font-mono, monospace)', fontWeight: 900, color: '#000000' }}>
                        {p.year}
                      </div>
                    </div>

                    {/* Card Main Body */}
                    <div style={{ position: 'relative', minHeight: '140px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                      <div
                        style={{
                          position: 'absolute',
                          top: '0px',
                          right: '5px',
                          display: 'flex',
                          alignItems: 'center',
                          gap: '0.4rem',
                          userSelect: 'none',
                          zIndex: 3
                        }}
                      >
                        <span style={{ fontSize: isMobile ? '2.5rem' : '3.8rem', transform: 'rotate(-15deg)', display: 'inline-block' }}>
                          {p.icon3d}
                        </span>
                        <span style={{ fontSize: isMobile ? '2.2rem' : '3.2rem', display: 'inline-block' }}>
                          {p.characterArt}
                        </span>
                      </div>

                      <div style={{ maxWidth: isMobile ? '260px' : '450px', zIndex: 4 }}>
                        <div style={{ fontSize: '0.78rem', fontWeight: 900, color: '#000000', marginBottom: '0.2rem', fontFamily: 'var(--font-mono, monospace)' }}>
                          {p.year}
                        </div>

                        <h3 style={{ fontSize: 'clamp(1.7rem, 5vw, 3rem)', fontWeight: 900, color: '#000000', lineHeight: 1.02, marginBottom: '0.3rem', letterSpacing: '-0.03em', fontFamily: 'var(--font-mono, monospace)' }}>
                          {p.title}
                        </h3>

                        <div
                          style={{
                            fontFamily: 'var(--font-heading, system-ui, sans-serif)',
                            fontSize: '0.75rem',
                            fontWeight: 900,
                            letterSpacing: '0.2em',
                            textTransform: 'uppercase',
                            color: '#000000',
                            marginBottom: '0.85rem'
                          }}
                        >
                          PORTFOLIO / SYSTEMS
                        </div>

                        <p style={{ fontSize: '0.88rem', color: '#000000', lineHeight: 1.45, fontWeight: 700, fontFamily: 'var(--font-mono, monospace)' }}>
                          {p.tagline}
                        </p>
                      </div>

                      {/* Card Bottom Trigger Bar */}
                      <div
                        style={{
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'space-between',
                          marginTop: '1.25rem',
                          paddingLeft: isMobile ? '0px' : '160px',
                          zIndex: 4,
                          flexWrap: 'wrap',
                          gap: '0.5rem'
                        }}
                      >
                        <div
                          style={{
                            fontSize: '0.75rem',
                            fontWeight: 900,
                            fontFamily: 'var(--font-mono, monospace)',
                            color: '#000000',
                            display: 'flex',
                            alignItems: 'center',
                            gap: '0.35rem',
                            background: '#ffffff',
                            border: '2px solid #000000',
                            padding: '0.35rem 0.75rem',
                            borderRadius: '6px',
                            boxShadow: '2px 2px 0 #000000'
                          }}
                        >
                          <span>{isExpanded ? 'Collapse ▲' : 'Tap to Expand Inline ▼'}</span>
                        </div>

                        <div style={{ fontSize: '0.72rem', fontFamily: 'var(--font-mono, monospace)', fontWeight: 900, color: '#000000' }}>
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
                        marginTop: isExpanded ? '1.25rem' : '0px',
                        paddingTop: isExpanded ? '1.25rem' : '0px',
                        borderTop: isExpanded ? '2px dashed #000000' : 'none',
                        position: 'relative',
                        zIndex: 10
                      }}
                    >
                      <p style={{ fontSize: '0.9rem', color: '#000000', lineHeight: 1.55, marginBottom: '1rem', fontWeight: 700, fontFamily: 'var(--font-mono, monospace)' }}>
                        {p.description}
                      </p>

                      {/* 3-Column Metrics Counters */}
                      <div
                        style={{
                          display: 'grid',
                          gridTemplateColumns: 'repeat(3, 1fr)',
                          gap: '0.5rem',
                          marginBottom: '1rem',
                          padding: '0.75rem 0.5rem',
                          borderRadius: '8px',
                          background: '#ffffff',
                          border: '2px solid #000000',
                          boxShadow: '3px 3px 0 #000000'
                        }}
                      >
                        {p.metrics.map((m, mIdx) => (
                          <div key={mIdx} style={{ textAlign: 'center' }}>
                            <div style={{ fontSize: '1.2rem', fontWeight: 900, color: '#000000', fontFamily: 'var(--font-mono, monospace)' }}>
                              {m.value}
                            </div>
                            <div style={{ fontSize: '0.68rem', color: '#000000', fontWeight: 800, marginTop: '0.1rem', fontFamily: 'var(--font-mono, monospace)' }}>
                              {m.label}
                            </div>
                          </div>
                        ))}
                      </div>

                      {/* Key Technical Accomplishments */}
                      <div style={{ marginBottom: '1rem' }}>
                        <div style={{ fontSize: '0.72rem', textTransform: 'uppercase', letterSpacing: '0.08em', fontWeight: 900, color: '#000000', marginBottom: '0.4rem', fontFamily: 'var(--font-mono, monospace)' }}>
                          Key Technical Accomplishments:
                        </div>
                        <ul style={{ paddingLeft: '1.1rem', margin: 0, color: '#000000', fontSize: '0.85rem', lineHeight: 1.5, display: 'flex', flexDirection: 'column', gap: '0.3rem', fontWeight: 700, fontFamily: 'var(--font-mono, monospace)' }}>
                          {p.highlights.map((h, hIdx) => (
                            <li key={hIdx}>{h}</li>
                          ))}
                        </ul>
                      </div>

                      {/* Tech Stack Pills */}
                      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.4rem', marginBottom: '1.25rem' }}>
                        {p.techStack.map((tech, tIdx) => (
                          <span
                            key={tIdx}
                            style={{
                              fontSize: '0.72rem',
                              fontFamily: 'var(--font-mono, monospace)',
                              padding: '0.25rem 0.55rem',
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
                      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.65rem' }}>
                        <a
                          href={p.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          onClick={(e) => {
                            e.stopPropagation();
                            playRetroClick();
                          }}
                          style={{
                            padding: '0.65rem 1.1rem',
                            borderRadius: '6px',
                            background: '#ffffff',
                            border: '2px solid #000000',
                            boxShadow: '3px 3px 0 #000000',
                            color: '#000000',
                            fontWeight: 900,
                            fontSize: '0.82rem',
                            fontFamily: 'var(--font-mono, monospace)',
                            textDecoration: 'none',
                            display: 'inline-flex',
                            alignItems: 'center',
                            gap: '0.4rem',
                            flex: '1 1 auto',
                            justifyContent: 'center',
                            minHeight: '40px'
                          }}
                        >
                          <IconGithub size={16} /> GitHub Repo
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
                            padding: '0.65rem 1.1rem',
                            borderRadius: '6px',
                            background: '#ffffff',
                            border: '2px solid #000000',
                            boxShadow: '3px 3px 0 #000000',
                            color: '#000000',
                            fontWeight: 900,
                            fontSize: '0.82rem',
                            fontFamily: 'var(--font-mono, monospace)',
                            textDecoration: 'none',
                            display: 'inline-flex',
                            alignItems: 'center',
                            gap: '0.4rem',
                            flex: '1 1 auto',
                            justifyContent: 'center',
                            minHeight: '40px'
                          }}
                        >
                          <IconExternalLink size={16} /> Architecture Specs
                        </a>
                      </div>
                    </div>
                  </div>

                  {/* 100% Razor-Sharp Solid Black Vector Stroke Outline Overlay */}
                  <svg
                    viewBox="0 0 1000 600"
                    preserveAspectRatio="none"
                    style={{
                      position: 'absolute',
                      top: 0,
                      left: 0,
                      width: '100%',
                      height: '100%',
                      pointerEvents: 'none',
                      zIndex: 3
                    }}
                  >
                    <path
                      d={folderSvgPath}
                      fill="none"
                      stroke="#000000"
                      strokeWidth="5"
                      vectorEffect="non-scaling-stroke"
                    />
                  </svg>

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
            marginTop: '1.5rem',
            color: '#000000',
            fontSize: '0.75rem',
            fontFamily: 'var(--font-mono, monospace)',
            fontWeight: 900,
            flexWrap: 'wrap',
            gap: '0.5rem'
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.65rem' }}>
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
