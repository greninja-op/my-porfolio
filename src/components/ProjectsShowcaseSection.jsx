import React, { useState } from 'react';
import { IconGithub, IconExternalLink, IconSparkles, IconX } from './Icons';

export default function ProjectsShowcaseSection() {
  const [hovered, setHovered] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);

  const projects = [
    {
      id: "chronolens",
      title: "ChronoLens",
      tagline: "Closed-Loop Predictive SRE Control Plane on SigNoz",
      category: "AI & OBSERVABILITY",
      year: "2025–2026",
      badge: "⚡ Agents of SigNoz Winner",
      accent: "#06b6d4",
      gradient: "linear-gradient(135deg, #0f2b46 0%, #1e3c72 100%)",
      border: "rgba(6, 182, 212, 0.4)",
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
      year: "2025–2026",
      badge: "🧠 AI Context Graph",
      accent: "#8b5cf6",
      gradient: "linear-gradient(135deg, #2e0854 0%, #4c1d95 100%)",
      border: "rgba(139, 92, 246, 0.4)",
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
      year: "2025–2026",
      badge: "🔐 Zero-Knowledge Vault",
      accent: "#10b981",
      gradient: "linear-gradient(135deg, #064e3b 0%, #047857 100%)",
      border: "rgba(16, 185, 129, 0.4)",
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
      year: "2025–2026",
      badge: "🔒 Lock Consensus Engine",
      accent: "#f43f5e",
      gradient: "linear-gradient(135deg, #881337 0%, #be123c 100%)",
      border: "rgba(244, 63, 94, 0.4)",
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

  // Calculate transform for each card when stacked vs when hovered (fanned out)
  const getCardTransform = (idx) => {
    if (!hovered) {
      // Stacked resting state: layered on top of each other with slight offset & subtle rotation
      const translateY = idx * 14;
      const rotateDeg = (idx - 1.5) * 2.5;
      const scale = 1 - idx * 0.02;
      return `translateY(${translateY}px) rotate(${rotateDeg}deg) scale(${scale})`;
    } else {
      // Hovered state: Cards fan out staggered side-by-side/cascading
      const offsetX = (idx - 1.5) * 240;
      const offsetY = idx % 2 === 0 ? -15 : 15;
      const rotateDeg = (idx - 1.5) * 4;
      return `translateX(${offsetX}px) translateY(${offsetY}px) rotate(${rotateDeg}deg) scale(1.02)`;
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
          Section C • Interactive Stacked Showcase Deck
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
          Featured Works — Stacked Card Gallery
        </h2>

        <p style={{ color: 'var(--text-secondary, #94a3b8)', fontSize: '1.05rem', marginTop: '0.4rem', maxWidth: '680px' }}>
          Hover over the stack below to fan out the colored project cards. Click any card to expand full info & technical details.
        </p>
      </div>

      {/* Interactive Stacked Deck Container */}
      <div
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        style={{
          position: 'relative',
          minHeight: '440px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          margin: '2rem 0',
          cursor: 'pointer'
        }}
      >
        {/* Stack Cards */}
        {projects.map((p, idx) => (
          <div
            key={p.id}
            onClick={() => setSelectedProject(p)}
            style={{
              position: 'absolute',
              width: '100%',
              maxWidth: '680px',
              height: '360px',
              borderRadius: '24px',
              background: p.gradient,
              border: `1.5px solid ${p.border}`,
              boxShadow: hovered
                ? `0 25px 50px -12px ${p.accent}44, 0 10px 20px rgba(0,0,0,0.6)`
                : `0 15px 35px rgba(0,0,0,0.5)`,
              transform: getCardTransform(idx),
              zIndex: hovered ? 10 + idx : 10 - idx,
              transition: 'all 0.35s cubic-bezier(0.16, 1, 0.3, 1)',
              padding: '2rem',
              color: '#ffffff',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
              overflow: 'hidden'
            }}
            className="stacked-project-card"
          >
            {/* Reference Image Aesthetic Accents: Top Bar */}
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', borderBottom: '1px solid rgba(255,255,255,0.15)', paddingBottom: '0.75rem' }}>
              <div style={{ fontSize: '0.75rem', fontWeight: 700, letterSpacing: '0.12em', color: 'rgba(255,255,255,0.7)', textTransform: 'uppercase' }}>
                DESIGN / {p.category}
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                <span style={{ fontSize: '0.85rem', fontFamily: 'var(--font-mono, monospace)', fontWeight: 600, color: 'rgba(255,255,255,0.8)' }}>
                  {p.year}
                </span>
                <span style={{ fontSize: '0.9rem', fontWeight: 800, letterSpacing: '0.15em', color: p.accent }}>
                  //////
                </span>
              </div>
            </div>

            {/* Card Main Body */}
            <div>
              <div
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.4rem',
                  padding: '0.3rem 0.75rem',
                  borderRadius: '6px',
                  background: 'rgba(0, 0, 0, 0.3)',
                  border: `1px solid ${p.accent}`,
                  color: '#ffffff',
                  fontSize: '0.78rem',
                  fontWeight: 700,
                  marginBottom: '0.75rem'
                }}
              >
                {p.badge}
              </div>

              <h3 style={{ fontSize: '2.2rem', fontWeight: 900, lineHeight: 1.1, marginBottom: '0.4rem', letterSpacing: '-0.02em' }}>
                {p.title}
              </h3>

              <div style={{ fontSize: '1rem', fontWeight: 600, color: 'rgba(255, 255, 255, 0.85)', marginBottom: '1rem' }}>
                {p.tagline}
              </div>

              <p style={{ fontSize: '0.92rem', color: 'rgba(255, 255, 255, 0.75)', lineHeight: 1.5, display: '-webkit-box', WebkitLineClamp: 2, WebkitBoxOrient: 'vertical', overflow: 'hidden' }}>
                {p.description}
              </p>
            </div>

            {/* Reference Image Aesthetic Accents: Bottom Bar */}
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', paddingTop: '0.75rem', borderTop: '1px solid rgba(255,255,255,0.15)' }}>
              <div style={{ display: 'flex', gap: '0.4rem' }}>
                {p.techStack.slice(0, 3).map((t, tIdx) => (
                  <span key={tIdx} style={{ fontSize: '0.72rem', fontFamily: 'var(--font-mono, monospace)', padding: '0.2rem 0.5rem', borderRadius: '4px', background: 'rgba(0,0,0,0.3)', border: '1px solid rgba(255,255,255,0.15)' }}>
                    {t}
                  </span>
                ))}
              </div>

              <div style={{ fontSize: '0.85rem', fontWeight: 800, color: '#ffffff', display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                <span>Click to Expand Info</span> ↗
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Full Info Modal Reveal when a Card is Clicked */}
      {selectedProject && (
        <div
          style={{
            position: 'fixed',
            inset: 0,
            zIndex: 10000,
            background: 'rgba(10, 14, 23, 0.92)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '1.5rem',
            animation: 'fadeIn 0.2s ease'
          }}
        >
          <div
            style={{
              width: '100%',
              maxWidth: '850px',
              maxHeight: '90vh',
              overflowY: 'auto',
              background: '#0f172a',
              border: `1.5px solid ${selectedProject.border}`,
              borderRadius: '24px',
              padding: '2.5rem',
              position: 'relative',
              boxShadow: `0 25px 60px rgba(0,0,0,0.8), 0 0 40px ${selectedProject.accent}33`,
              color: '#ffffff'
            }}
          >
            {/* Close Button */}
            <button
              onClick={() => setSelectedProject(null)}
              style={{
                position: 'sticky',
                top: 0,
                float: 'right',
                background: '#1e293b',
                color: '#ffffff',
                border: '1px solid #334155',
                borderRadius: '50%',
                width: '36px',
                height: '36px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                cursor: 'pointer',
                fontWeight: 'bold',
                zIndex: 20
              }}
            >
              <IconX size={18} />
            </button>

            {/* Reference Header Banner */}
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', borderBottom: '1px solid #1f2937', paddingBottom: '1rem', marginBottom: '1.5rem' }}>
              <div style={{ fontSize: '0.8rem', fontWeight: 700, letterSpacing: '0.12em', color: selectedProject.accent, textTransform: 'uppercase' }}>
                DESIGN / {selectedProject.category}
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                <span style={{ fontSize: '0.9rem', fontFamily: 'var(--font-mono, monospace)', fontWeight: 600, color: '#94a3b8' }}>
                  {selectedProject.year}
                </span>
                <span style={{ fontSize: '1rem', fontWeight: 800, letterSpacing: '0.15em', color: selectedProject.accent }}>
                  //////
                </span>
              </div>
            </div>

            {/* Title & Badge */}
            <div
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.4rem',
                padding: '0.35rem 0.85rem',
                borderRadius: '8px',
                background: `${selectedProject.accent}22`,
                border: `1px solid ${selectedProject.accent}44`,
                color: selectedProject.accent,
                fontSize: '0.82rem',
                fontWeight: 700,
                marginBottom: '1rem'
              }}
            >
              {selectedProject.badge}
            </div>

            <h2 style={{ fontSize: '2.5rem', fontWeight: 900, lineHeight: 1.1, marginBottom: '0.4rem', color: '#ffffff' }}>
              {selectedProject.title}
            </h2>

            <div style={{ fontSize: '1.1rem', fontWeight: 600, color: selectedProject.accent, marginBottom: '1.5rem' }}>
              {selectedProject.tagline}
            </div>

            <p style={{ color: '#cbd5e1', fontSize: '1.05rem', lineHeight: 1.6, marginBottom: '2rem' }}>
              {selectedProject.description}
            </p>

            {/* Key Metrics */}
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(3, 1fr)',
                gap: '1rem',
                marginBottom: '2rem',
                padding: '1.25rem',
                borderRadius: '12px',
                background: '#1e293b',
                border: '1px solid #334155'
              }}
            >
              {selectedProject.metrics.map((m, mIdx) => (
                <div key={mIdx} style={{ textAlign: 'center' }}>
                  <div style={{ fontSize: '1.5rem', fontWeight: 900, color: selectedProject.accent }}>
                    {m.value}
                  </div>
                  <div style={{ fontSize: '0.78rem', color: '#94a3b8', marginTop: '0.2rem' }}>
                    {m.label}
                  </div>
                </div>
              ))}
            </div>

            {/* Accomplishments */}
            <div style={{ marginBottom: '2rem' }}>
              <div style={{ fontSize: '0.82rem', textTransform: 'uppercase', letterSpacing: '0.08em', fontWeight: 700, color: '#94a3b8', marginBottom: '0.75rem' }}>
                Key Technical Accomplishments:
              </div>
              <ul style={{ paddingLeft: '1.25rem', margin: 0, color: '#e2e8f0', fontSize: '1rem', lineHeight: 1.65, display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                {selectedProject.highlights.map((h, hIdx) => (
                  <li key={hIdx}>{h}</li>
                ))}
              </ul>
            </div>

            {/* Tech Stack Pills */}
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.6rem', marginBottom: '2.25rem' }}>
              {selectedProject.techStack.map((tech, tIdx) => (
                <span
                  key={tIdx}
                  style={{
                    fontSize: '0.82rem',
                    fontFamily: 'var(--font-mono, monospace)',
                    padding: '0.35rem 0.8rem',
                    borderRadius: '6px',
                    background: '#1e293b',
                    color: '#f8fafc',
                    border: '1px solid #334155',
                    fontWeight: 600
                  }}
                >
                  {tech}
                </span>
              ))}
            </div>

            {/* Action Buttons */}
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem' }}>
              <a
                href={selectedProject.github}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  padding: '0.85rem 1.5rem',
                  borderRadius: '10px',
                  background: selectedProject.accent,
                  color: '#ffffff',
                  fontWeight: 700,
                  fontSize: '0.95rem',
                  textDecoration: 'none',
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.5rem',
                  boxShadow: `0 4px 15px ${selectedProject.accent}44`
                }}
              >
                <IconGithub size={18} /> View GitHub Repository
              </a>

              <a
                href={selectedProject.demo}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  padding: '0.85rem 1.5rem',
                  borderRadius: '10px',
                  background: '#1e293b',
                  border: '1px solid #334155',
                  color: '#ffffff',
                  fontWeight: 600,
                  fontSize: '0.95rem',
                  textDecoration: 'none',
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.5rem'
                }}
              >
                <IconExternalLink size={18} /> Technical Readme
              </a>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
