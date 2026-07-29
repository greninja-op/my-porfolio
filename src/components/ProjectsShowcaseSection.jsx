import React, { useState } from 'react';
import { IconGithub, IconExternalLink, IconSparkles, IconX } from './Icons';

export default function ProjectsShowcaseSection() {
  const [hovered, setHovered] = useState(false);
  const [expandedId, setExpandedId] = useState(null);

  const projects = [
    {
      id: "chronolens",
      title: "ChronoLens",
      tagline: "Closed-Loop Predictive SRE Control Plane on SigNoz",
      category: "AI & OBSERVABILITY",
      year: "2025-2026",
      badge: "⚡ Agents of SigNoz Winner",
      accentColor: "#0284c7",
      gradient: "linear-gradient(135deg, #f0f7ff 0%, #e0f2fe 35%, #dbeafe 70%, #ede9fe 100%)",
      icon3d: "🪐",
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
      category: "AI INFRASTRUCTURE",
      year: "2025-2026",
      badge: "🧠 AI Context Graph",
      accentColor: "#7c3aed",
      gradient: "linear-gradient(135deg, #f5f3ff 0%, #ede9fe 35%, #ddd6fe 70%, #e0e7ff 100%)",
      icon3d: "🔮",
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
      category: "SECURITY & CLOUD",
      year: "2025-2026",
      badge: "🔐 Zero-Knowledge Vault",
      accentColor: "#059669",
      gradient: "linear-gradient(135deg, #ecfdf5 0%, #d1fae5 35%, #a7f3d0 70%, #e0e7ff 100%)",
      icon3d: "💎",
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
      category: "DISTRIBUTED SYSTEMS",
      year: "2025-2026",
      badge: "🔒 Lock Consensus Engine",
      accentColor: "#e11d48",
      gradient: "linear-gradient(135deg, #fff1f2 0%, #ffe4e6 35%, #fecdd3 70%, #e0e7ff 100%)",
      icon3d: "⚡",
      description: "CFLS solves file collision and state desynchronization in collaborative development environments. Utilizes atomic heartbeat leases, lock TTL expiration, and sub-millisecond gRPC / WebSockets delta propagation.",
      highlights: [
        "Atomic distributed file lock acquisition & heartbeat expiration",
        "Sub-millisecond delta synchronization over WebSockets / gRPC",
        "Conflict resolution & lock escalation primitives",
        "Built for multi-user worktrees & collaborative IDEs"
      ],
      metrics: [
        { label: "Sync Protocol", value: "gRPC/WS" },
        { label: "Lease TTL", value: "500ms" },
        { label: "Conflict Rate", value: "0.00%" }
      ],
      techStack: ["Go", "gRPC", "WebSockets", "Distributed Consensus", "Linux"],
      github: "https://github.com/greninja-op/CFLS-Collaborative-File-Lock-Sync.git",
      demo: "https://github.com/greninja-op/CFLS-Collaborative-File-Lock-Sync"
    }
  ];

  // Calculate transform for resting stacked state vs hovered fanned state
  const getCardTransform = (idx, isExpanded) => {
    if (isExpanded) {
      return `translateY(0px) rotate(0deg) scale(1)`;
    }
    if (!hovered) {
      const translateY = idx * 16;
      const rotateDeg = (idx - 1.5) * 2;
      const scale = 1 - idx * 0.015;
      return `translateY(${translateY}px) rotate(${rotateDeg}deg) scale(${scale})`;
    } else {
      const offsetX = (idx - 1.5) * 230;
      const offsetY = idx % 2 === 0 ? -12 : 12;
      const rotateDeg = (idx - 1.5) * 3;
      return `translateX(${offsetX}px) translateY(${offsetY}px) rotate(${rotateDeg}deg) scale(1.01)`;
    }
  };

  const toggleExpand = (id) => {
    if (expandedId === id) {
      setExpandedId(null);
    } else {
      setExpandedId(id);
    }
  };

  return (
    <section
      id="projects-showcase"
      style={{
        padding: '4rem 1.5rem 6rem 1.5rem',
        maxWidth: '1180px',
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
          Featured Engineering Works
        </h2>

        <p style={{ color: 'var(--text-secondary, #94a3b8)', fontSize: '1.05rem', marginTop: '0.4rem', maxWidth: '680px' }}>
          Hover over the stack to fan out the cards. Click any card to expand full info and technical details in-place!
        </p>
      </div>

      {/* Outer Dark Frame (Matching Reference Image Frame) */}
      <div
        style={{
          background: '#080c15',
          border: '1.5px solid #1e2738',
          borderRadius: '32px',
          padding: '2.5rem 1.75rem',
          position: 'relative',
          boxShadow: '0 30px 60px rgba(0, 0, 0, 0.6)'
        }}
      >
        {/* Top Outer Metadata Bar */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            marginBottom: '2rem',
            color: '#94a3b8',
            fontSize: '0.82rem',
            fontFamily: 'var(--font-mono, monospace)',
            fontWeight: 600,
            padding: '0 0.5rem'
          }}
        >
          <div>DESIGN BY ARJUN SABU</div>
          <div>2025.1 — 2026.12</div>
        </div>

        {/* Interactive Stacked Deck Container */}
        <div
          onMouseEnter={() => setHovered(true)}
          onMouseLeave={() => setHovered(false)}
          style={{
            position: 'relative',
            minHeight: expandedId ? 'auto' : '440px',
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
                  maxWidth: '780px',
                  borderRadius: '28px',
                  background: p.gradient,
                  border: `2px solid ${isExpanded ? p.accentColor : 'rgba(255, 255, 255, 0.6)'}`,
                  boxShadow: isExpanded
                    ? `0 25px 50px -10px rgba(0,0,0,0.4), 0 0 30px ${p.accentColor}44`
                    : hovered
                    ? `0 20px 40px rgba(0, 0, 0, 0.3)`
                    : `0 12px 28px rgba(0, 0, 0, 0.25)`,
                  transform: getCardTransform(idx, isExpanded),
                  zIndex: isExpanded ? 50 : hovered ? 10 + idx : 10 - idx,
                  transition: 'all 0.45s cubic-bezier(0.16, 1, 0.3, 1)',
                  padding: '2.25rem',
                  color: '#0f172a',
                  cursor: 'pointer',
                  overflow: 'hidden'
                }}
                className="reference-project-card"
              >
                {/* Reference Card Header Bar */}
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    borderBottom: '1px solid rgba(15, 23, 42, 0.12)',
                    paddingBottom: '0.85rem',
                    marginBottom: '1.25rem'
                  }}
                >
                  <div style={{ fontSize: '0.75rem', fontWeight: 800, letterSpacing: '0.12em', color: '#475569', textTransform: 'uppercase' }}>
                    DESIGN / {p.category}
                  </div>

                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.85rem' }}>
                    <span style={{ fontSize: '0.85rem', fontFamily: 'var(--font-mono, monospace)', fontWeight: 700, color: '#334155' }}>
                      {p.year}
                    </span>
                    {/* Corner Diagonal Slash Accent */}
                    <span style={{ fontSize: '1rem', fontWeight: 900, letterSpacing: '0.15em', color: '#0f172a' }}>
                      //////
                    </span>
                  </div>
                </div>

                {/* Main Card Body */}
                <div style={{ position: 'relative', minHeight: '160px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                  {/* Floating 3D / Vector Planet Graphic (Matching Reference Image) */}
                  <div
                    style={{
                      position: 'absolute',
                      top: '-10px',
                      right: '0px',
                      fontSize: '3.5rem',
                      filter: 'drop-shadow(0 10px 15px rgba(0,0,0,0.15))',
                      userSelect: 'none',
                      transition: 'transform 0.3s ease'
                    }}
                  >
                    {p.icon3d}
                  </div>

                  <div>
                    <div style={{ fontSize: '0.85rem', fontWeight: 700, color: '#475569', marginBottom: '0.4rem' }}>
                      {p.year}
                    </div>

                    <h3 style={{ fontSize: 'clamp(2.2rem, 4vw, 3rem)', fontWeight: 900, color: '#0f172a', lineHeight: 1.05, marginBottom: '0.5rem', letterSpacing: '-0.025em' }}>
                      {p.title}
                    </h3>

                    <div
                      style={{
                        fontFamily: 'var(--font-heading, system-ui, sans-serif)',
                        fontSize: '0.9rem',
                        fontWeight: 800,
                        letterSpacing: '0.25em',
                        textTransform: 'uppercase',
                        color: '#334155',
                        marginBottom: '1.25rem'
                      }}
                    >
                      P O R T F O L I O  /  S Y S T E M S
                    </div>

                    <p style={{ fontSize: '1rem', color: '#334155', lineHeight: 1.6, maxWidth: '540px', fontWeight: 500 }}>
                      {p.tagline}
                    </p>
                  </div>

                  {/* Reference Image Slits & Expand Trigger Bar */}
                  <div
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      marginTop: '1.5rem',
                      paddingTop: '0.85rem',
                      borderTop: '1px solid rgba(15, 23, 42, 0.12)'
                    }}
                  >
                    <div style={{ fontSize: '1rem', fontWeight: 900, letterSpacing: '0.15em', color: '#0f172a' }}>
                      //////
                    </div>

                    <div
                      style={{
                        fontSize: '0.85rem',
                        fontWeight: 800,
                        color: p.accentColor,
                        display: 'flex',
                        alignItems: 'center',
                        gap: '0.4rem',
                        background: 'rgba(255, 255, 255, 0.7)',
                        padding: '0.4rem 0.9rem',
                        borderRadius: '8px',
                        boxShadow: '0 2px 8px rgba(0,0,0,0.06)'
                      }}
                    >
                      <span>{isExpanded ? 'Click to Collapse ▲' : 'Click to Expand Info Inline ▼'}</span>
                    </div>
                  </div>
                </div>

                {/* IN-PLACE ANIMATED EXPANSION PANEL (NO POPUP MODAL!) */}
                <div
                  style={{
                    maxHeight: isExpanded ? '800px' : '0px',
                    opacity: isExpanded ? 1 : 0,
                    overflow: 'hidden',
                    transition: 'all 0.45s cubic-bezier(0.16, 1, 0.3, 1)',
                    marginTop: isExpanded ? '1.5rem' : '0px',
                    paddingTop: isExpanded ? '1.5rem' : '0px',
                    borderTop: isExpanded ? '1px dashed rgba(15, 23, 42, 0.2)' : 'none'
                  }}
                >
                  {/* Detailed Description */}
                  <p style={{ fontSize: '1.05rem', color: '#1e293b', lineHeight: 1.65, marginBottom: '1.5rem', fontWeight: 500 }}>
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
                      borderRadius: '12px',
                      background: 'rgba(255, 255, 255, 0.8)',
                      border: '1px solid rgba(15, 23, 42, 0.1)',
                      boxShadow: '0 4px 12px rgba(0,0,0,0.04)'
                    }}
                  >
                    {p.metrics.map((m, mIdx) => (
                      <div key={mIdx} style={{ textAlign: 'center' }}>
                        <div style={{ fontSize: '1.6rem', fontWeight: 900, color: p.accentColor }}>
                          {m.value}
                        </div>
                        <div style={{ fontSize: '0.78rem', color: '#64748b', fontWeight: 600, marginTop: '0.1rem' }}>
                          {m.label}
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Accomplishments Bullets */}
                  <div style={{ marginBottom: '1.5rem' }}>
                    <div style={{ fontSize: '0.8rem', textTransform: 'uppercase', letterSpacing: '0.08em', fontWeight: 800, color: '#475569', marginBottom: '0.6rem' }}>
                      Key Technical Accomplishments:
                    </div>
                    <ul style={{ paddingLeft: '1.25rem', margin: 0, color: '#1e293b', fontSize: '0.98rem', lineHeight: 1.65, display: 'flex', flexDirection: 'column', gap: '0.4rem', fontWeight: 500 }}>
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
                          background: '#0f172a',
                          color: '#ffffff',
                          fontWeight: 600
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
                        padding: '0.75rem 1.4rem',
                        borderRadius: '10px',
                        background: '#0f172a',
                        color: '#ffffff',
                        fontWeight: 700,
                        fontSize: '0.92rem',
                        textDecoration: 'none',
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: '0.5rem',
                        boxShadow: '0 4px 12px rgba(15, 23, 42, 0.3)'
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
                        padding: '0.75rem 1.4rem',
                        borderRadius: '10px',
                        background: 'rgba(255, 255, 255, 0.8)',
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

        {/* Bottom Outer Metadata Bar */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            marginTop: '2rem',
            color: '#64748b',
            fontSize: '0.82rem',
            fontFamily: 'var(--font-mono, monospace)',
            padding: '0 0.5rem'
          }}
        >
          <div>DESIGN / SHANSHAN & ARJUN</div>
          <div>IN-PLACE CARD EXPANSION</div>
        </div>
      </div>
    </section>
  );
}
