import React from 'react';
import { projects } from '../data/portfolioData';
import { IconGithub, IconExternalLink, IconSparkles, IconShield, IconCpu, IconActivity } from './Icons';

export default function ProjectsRecruiter() {
  // Enhanced recruiter project details with explicit "Why It's Different" & Metrics
  const recruiterProjects = [
    {
      id: "chronolens",
      title: "ChronoLens",
      subtitle: "Closed-Loop Predictive SRE Control Plane on SigNoz",
      whyDifferent: "⚡ SigNoz Hackathon Winner — Intercepts AI agent loops before outage impact",
      metrics: [
        "Predicts SLO breaches & LLM cost spirals from live SigNoz OpenTelemetry trace feeds",
        "Executes reversible automated circuit-breaking & instant rollback mitigation",
        "Generates verifiable digital audit receipts logging 'outages that never happened'"
      ],
      techStack: ["Python", "OpenTelemetry", "SigNoz API", "FastAPI", "React", "Docker"],
      github: "https://github.com/greninja-op/ChronoLens.git",
      demo: "https://github.com/greninja-op/ChronoLens"
    },
    {
      id: "memoire",
      title: "Memoire",
      subtitle: "AI Memory Graph & Long-Term Context Retention Engine",
      whyDifferent: "🧠 Zero-Decay Vector Semantic Context Graph for LLM Agents",
      metrics: [
        "Indexes multi-step conversation trajectories into a vector similarity memory graph",
        "Solves LLM context window overflow with dynamic relevance decay algorithms",
        "Delivers sub-millisecond memory retrieval latency for live agent prompt execution"
      ],
      techStack: ["Python", "Vector DB", "FastAPI", "LLM Embeddings", "TypeScript"],
      github: "https://github.com/greninja-op/Memoire.git",
      demo: "https://github.com/greninja-op/Memoire"
    },
    {
      id: "nuvault",
      title: "Nuvault",
      subtitle: "Zero-Trust Cloud Vault & Encrypted Asset Platform",
      whyDifferent: "🔐 Client-side WebCrypto AES-GCM 256 Zero-Knowledge Architecture",
      metrics: [
        "Client-side encryption ensures server holds zero unencrypted bytes or keys",
        "High-throughput chunked file uploads and instant stream decryption",
        "Granular cryptographic audit trail & isolated tenant key derivation"
      ],
      techStack: ["TypeScript", "Node.js", "React", "WebCrypto API", "PostgreSQL", "Docker"],
      github: "https://github.com/greninja-op/Nuvault.git",
      demo: "https://github.com/greninja-op/Nuvault"
    },
    {
      id: "cfls",
      title: "CFLS",
      subtitle: "Real-Time Distributed File Locking & Sync Protocol",
      whyDifferent: "🔒 Atomic Lease Heartbeats & Sub-millisecond Delta Lock Synchronization",
      metrics: [
        "Solves file collision in real-time collaborative developer environments",
        "Atomic distributed lock leases with sub-millisecond WebSocket / gRPC sync",
        "Automatic lock TTL lease expiration preventing stale deadlocks across worktrees"
      ],
      techStack: ["Go", "gRPC", "WebSockets", "Distributed Consensus", "Linux Systems"],
      github: "https://github.com/greninja-op/CFLS-Collaborative-File-Lock-Sync.git",
      demo: "https://github.com/greninja-op/CFLS-Collaborative-File-Lock-Sync"
    }
  ];

  return (
    <section
      id="projects"
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
          Section 2 • Core Highlights
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
          Featured Non-Generic Engineering Projects
        </h2>

        <p style={{ color: 'var(--text-secondary, #94a3b8)', fontSize: '1.05rem', marginTop: '0.5rem', maxWidth: '650px' }}>
          Deep-dive into production-ready architectures built for observability, AI agent memory, zero-trust cloud security, and distributed synchronization.
        </p>
      </div>

      {/* Structured Impact Cards Stack */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
        {recruiterProjects.map((p, idx) => (
          <div
            key={p.id}
            style={{
              background: 'var(--card-bg, rgba(255, 255, 255, 0.03))',
              border: '1px solid var(--border-subtle, rgba(255, 255, 255, 0.1))',
              borderRadius: 'var(--ui-radius, 18px)',
              padding: '2rem',
              transition: 'border-color 0.2s ease, transform 0.2s ease, box-shadow 0.2s ease',
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
              gap: '2rem',
              alignItems: 'start'
            }}
            className="recruiter-project-card"
          >
            {/* Left Content */}
            <div>
              {/* "Why It's Different" Callout Badge */}
              <div
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.5rem',
                  padding: '0.35rem 0.85rem',
                  borderRadius: '8px',
                  background: 'var(--badge-bg, rgba(6, 182, 212, 0.12))',
                  border: '1px solid var(--badge-border, rgba(6, 182, 212, 0.3))',
                  color: 'var(--accent-primary, #38bdf8)',
                  fontSize: '0.82rem',
                  fontWeight: 700,
                  marginBottom: '1rem'
                }}
              >
                {p.whyDifferent}
              </div>

              {/* Title & Subtitle */}
              <h3
                style={{
                  fontSize: '1.6rem',
                  fontWeight: 800,
                  color: 'var(--text-primary, #ffffff)',
                  marginBottom: '0.3rem',
                  lineHeight: 1.2
                }}
              >
                {p.title}
              </h3>
              <div
                style={{
                  fontSize: '1rem',
                  color: 'var(--accent-primary, #06b6d4)',
                  fontWeight: 600,
                  marginBottom: '1.25rem'
                }}
              >
                {p.subtitle}
              </div>

              {/* Technical Accomplishments / Metrics Bullets */}
              <div style={{ marginBottom: '1.5rem' }}>
                <div
                  style={{
                    fontSize: '0.8rem',
                    textTransform: 'uppercase',
                    letterSpacing: '0.05em',
                    fontWeight: 700,
                    color: 'var(--text-secondary, #94a3b8)',
                    marginBottom: '0.6rem'
                  }}
                >
                  Key Technical Highlights & Metrics:
                </div>
                <ul
                  style={{
                    paddingLeft: '1.25rem',
                    margin: 0,
                    color: 'var(--text-secondary, #cbd5e1)',
                    fontSize: '0.95rem',
                    lineHeight: 1.6,
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '0.4rem'
                  }}
                >
                  {p.metrics.map((m, mIdx) => (
                    <li key={mIdx}>{m}</li>
                  ))}
                </ul>
              </div>

              {/* Tech Stack Pills */}
              <div
                style={{
                  display: 'flex',
                  flexWrap: 'wrap',
                  gap: '0.5rem',
                  marginBottom: '1.75rem'
                }}
              >
                {p.techStack.map((tech, tIdx) => (
                  <span
                    key={tIdx}
                    style={{
                      fontSize: '0.78rem',
                      fontFamily: 'var(--font-mono, monospace)',
                      padding: '0.25rem 0.65rem',
                      borderRadius: '6px',
                      background: 'var(--pill-bg, rgba(255, 255, 255, 0.06))',
                      color: 'var(--text-primary, #e2e8f0)',
                      border: '1px solid var(--border-subtle, rgba(255, 255, 255, 0.12))',
                      fontWeight: 500
                    }}
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {/* Direct Buttons */}
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.75rem' }}>
                <a
                  href={p.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    padding: '0.6rem 1.15rem',
                    borderRadius: '8px',
                    background: 'var(--btn-bg-primary, #06b6d4)',
                    color: '#ffffff',
                    fontWeight: 700,
                    fontSize: '0.88rem',
                    textDecoration: 'none',
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '0.4rem',
                    boxShadow: '0 4px 12px rgba(6, 182, 212, 0.2)'
                  }}
                >
                  <IconGithub size={16} /> GitHub Repository
                </a>

                <a
                  href={p.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    padding: '0.6rem 1.15rem',
                    borderRadius: '8px',
                    background: 'var(--btn-bg-secondary, rgba(255, 255, 255, 0.08))',
                    border: '1px solid var(--border-subtle, rgba(255, 255, 255, 0.15))',
                    color: 'var(--text-primary, #ffffff)',
                    fontWeight: 600,
                    fontSize: '0.88rem',
                    textDecoration: 'none',
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '0.4rem'
                  }}
                >
                  <IconExternalLink size={16} /> Technical Readme & Architecture
                </a>
              </div>
            </div>

            {/* Right: Interactive Architectural Snapshot Container */}
            <div
              style={{
                background: 'var(--code-bg, rgba(15, 23, 42, 0.8))',
                border: '1px solid var(--border-subtle, rgba(255, 255, 255, 0.1))',
                borderRadius: '12px',
                padding: '1.25rem',
                fontFamily: 'var(--font-mono, monospace)',
                fontSize: '0.82rem',
                color: 'var(--text-secondary, #94a3b8)',
                display: 'flex',
                flexDirection: 'column',
                gap: '0.75rem',
                height: '100%',
                minHeight: '220px',
                justifyContent: 'center'
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', borderBottom: '1px solid rgba(255,255,255,0.08)', paddingBottom: '0.5rem' }}>
                <span style={{ color: 'var(--accent-primary, #38bdf8)', fontWeight: 700 }}>architecture_spec.json</span>
                <span style={{ fontSize: '0.75rem', color: '#10b981' }}>● Live Verified</span>
              </div>
              <pre style={{ margin: 0, color: 'var(--text-primary, #e2e8f0)', whiteSpace: 'pre-wrap', wordBreak: 'break-word', lineHeight: 1.5 }}>
{idx === 0 ? `{
  "system": "ChronoLens",
  "ingestion": "OpenTelemetry Trace Feed",
  "engine": "SigNoz Query Interceptor",
  "mitigation": "Automated Reversible Circuit Breaker",
  "audit": "Digital Receipt Verified"
}` : idx === 1 ? `{
  "system": "Memoire",
  "indexing": "Semantic Vector Embedding Graph",
  "retrieval": "Sub-millisecond Trajectory Search",
  "optimization": "Dynamic Context Decay Pruning"
}` : idx === 2 ? `{
  "system": "Nuvault",
  "crypto": "WebCrypto AES-GCM 256-bit",
  "zero_knowledge": true,
  "key_isolation": "Client-Side Derivation"
}` : `{
  "system": "CFLS Protocol",
  "transport": "gRPC / WebSockets Streaming",
  "consensus": "Atomic Lease Heartbeats",
  "deadlock_prevention": "Lock TTL Expiration"
}`}
              </pre>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
