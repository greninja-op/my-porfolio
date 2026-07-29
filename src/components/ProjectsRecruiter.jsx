import React from 'react';
import { IconGithub, IconExternalLink, IconSparkles, IconShield, IconCpu, IconActivity, IconZap } from './Icons';

export default function ProjectsRecruiter() {
  return (
    <section
      id="projects"
      style={{
        padding: '4rem 1.5rem',
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
          DesignSoul Bento Showcase • Core Engineering Projects
        </div>

        <h2
          style={{
            fontFamily: 'var(--font-heading, system-ui, sans-serif)',
            fontSize: 'clamp(2rem, 4vw, 2.8rem)',
            fontWeight: 800,
            color: 'var(--text-primary, #ffffff)',
            letterSpacing: '-0.025em',
            lineHeight: 1.15
          }}
        >
          Production-Grade Architectures (Non-Generic)
        </h2>

        <p style={{ color: 'var(--text-secondary, #94a3b8)', fontSize: '1.1rem', marginTop: '0.5rem', maxWidth: '680px', lineHeight: 1.6 }}>
          Explore 4 specialized engineering systems built for observability, AI agent memory, zero-trust cloud security, and distributed synchronization.
        </p>
      </div>

      {/* DesignSoul Asymmetric Bento Grid Composition */}
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(12, 1fr)',
          gap: '1.5rem'
        }}
        className="bento-grid-container"
      >
        {/* ============================================================ */}
        {/* BENTO TILE 1: ChronoLens (Large Hero Bento Tile - 8 Columns) */}
        {/* ============================================================ */}
        <div
          style={{
            gridColumn: 'span 8',
            background: 'var(--card-bg, rgba(255, 255, 255, 0.03))',
            border: '1px solid var(--border-subtle, rgba(255, 255, 255, 0.12))',
            borderRadius: 'var(--ui-radius, 20px)',
            padding: '2.25rem',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            position: 'relative',
            overflow: 'hidden',
            boxShadow: '0 20px 40px rgba(0, 0, 0, 0.3)'
          }}
          className="bento-tile bento-tile-hero"
        >
          {/* Subtle Ambient Glow */}
          <div
            style={{
              position: 'absolute',
              top: '-60px',
              right: '-60px',
              width: '240px',
              height: '240px',
              background: 'radial-gradient(circle, rgba(6, 182, 212, 0.25) 0%, transparent 70%)',
              pointerEvents: 'none',
              filter: 'blur(30px)'
            }}
          />

          <div>
            {/* Badge */}
            <div
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.5rem',
                padding: '0.4rem 0.9rem',
                borderRadius: '8px',
                background: 'rgba(6, 182, 212, 0.15)',
                border: '1px solid rgba(6, 182, 212, 0.35)',
                color: '#38bdf8',
                fontSize: '0.82rem',
                fontWeight: 700,
                marginBottom: '1.25rem'
              }}
            >
              ⚡ Agents of SigNoz Winner • Closed-Loop Predictive SRE
            </div>

            <h3
              style={{
                fontSize: 'clamp(1.8rem, 3vw, 2.3rem)',
                fontWeight: 800,
                color: 'var(--text-primary, #ffffff)',
                lineHeight: 1.15,
                marginBottom: '0.4rem'
              }}
            >
              ChronoLens
            </h3>

            <div style={{ fontSize: '1.05rem', color: 'var(--accent-primary, #06b6d4)', fontWeight: 600, marginBottom: '1.25rem' }}>
              Autonomous Reliability Control Plane on SigNoz OpenTelemetry
            </div>

            <p style={{ color: 'var(--text-secondary, #cbd5e1)', fontSize: '1rem', lineHeight: 1.6, marginBottom: '1.5rem' }}>
              Predicts SLO breaches and AI agent cost spirals from live SigNoz OpenTelemetry trace feeds, executes reversible circuit-breaker mitigation, and logs verifiable digital audit receipts of "outages that never happened".
            </p>

            {/* Key Technical Highlights Bullets */}
            <div style={{ marginBottom: '1.75rem' }}>
              <div style={{ fontSize: '0.8rem', textTransform: 'uppercase', letterSpacing: '0.06em', fontWeight: 700, color: 'var(--text-secondary, #94a3b8)', marginBottom: '0.6rem' }}>
                Engineering Highlights & Metrics:
              </div>
              <ul style={{ paddingLeft: '1.2rem', margin: 0, color: 'var(--text-secondary, #94a3b8)', fontSize: '0.95rem', lineHeight: 1.6, display: 'flex', flexDirection: 'column', gap: '0.4rem' }}>
                <li><strong>40% MTTD Reduction</strong> for AI agent loop detection & LLM cost spirals.</li>
                <li><strong>Sub-10ms Span Interception</strong> using native SigNoz OpenTelemetry query feeds.</li>
                <li><strong>Verifiable Digital Receipts</strong> logged for all automated failure prevention routines.</li>
              </ul>
            </div>

            {/* Tech Stack Pills */}
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem', marginBottom: '1.75rem' }}>
              {["Python", "OpenTelemetry", "SigNoz API", "FastAPI", "React", "Docker"].map((tech, idx) => (
                <span
                  key={idx}
                  style={{
                    fontSize: '0.78rem',
                    fontFamily: 'var(--font-mono, monospace)',
                    padding: '0.3rem 0.7rem',
                    borderRadius: '6px',
                    background: 'var(--pill-bg, rgba(255, 255, 255, 0.06))',
                    color: 'var(--text-primary, #e2e8f0)',
                    border: '1px solid var(--border-subtle, rgba(255, 255, 255, 0.12))',
                    fontWeight: 600
                  }}
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Action Buttons */}
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.85rem' }}>
            <a
              href="https://github.com/greninja-op/ChronoLens.git"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                padding: '0.7rem 1.35rem',
                borderRadius: '8px',
                background: 'var(--btn-bg-primary, #06b6d4)',
                color: '#ffffff',
                fontWeight: 700,
                fontSize: '0.9rem',
                textDecoration: 'none',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.5rem',
                boxShadow: '0 4px 15px rgba(6, 182, 212, 0.3)'
              }}
            >
              <IconGithub size={18} /> View GitHub Repo
            </a>

            <a
              href="https://github.com/greninja-op/ChronoLens"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                padding: '0.7rem 1.35rem',
                borderRadius: '8px',
                background: 'var(--btn-bg-secondary, rgba(255, 255, 255, 0.08))',
                border: '1px solid var(--border-subtle, rgba(255, 255, 255, 0.15))',
                color: 'var(--text-primary, #ffffff)',
                fontWeight: 600,
                fontSize: '0.9rem',
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

        {/* ============================================================ */}
        {/* BENTO TILE 2: Memoire (Vector Graph Tile - 4 Columns)        */}
        {/* ============================================================ */}
        <div
          style={{
            gridColumn: 'span 4',
            background: 'var(--card-bg, rgba(255, 255, 255, 0.03))',
            border: '1px solid var(--border-subtle, rgba(255, 255, 255, 0.12))',
            borderRadius: 'var(--ui-radius, 20px)',
            padding: '2rem',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            boxShadow: '0 20px 40px rgba(0, 0, 0, 0.3)'
          }}
          className="bento-tile"
        >
          <div>
            <div
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.4rem',
                padding: '0.35rem 0.75rem',
                borderRadius: '8px',
                background: 'rgba(139, 92, 246, 0.15)',
                border: '1px solid rgba(139, 92, 246, 0.35)',
                color: '#c084fc',
                fontSize: '0.78rem',
                fontWeight: 700,
                marginBottom: '1rem'
              }}
            >
              🧠 Zero-Decay AI Vector Graph
            </div>

            <h3 style={{ fontSize: '1.6rem', fontWeight: 800, color: 'var(--text-primary, #ffffff)', marginBottom: '0.3rem' }}>
              Memoire
            </h3>

            <div style={{ fontSize: '0.95rem', color: '#c084fc', fontWeight: 600, marginBottom: '1rem' }}>
              LLM Agent Context Retention Engine
            </div>

            <p style={{ color: 'var(--text-secondary, #cbd5e1)', fontSize: '0.92rem', lineHeight: 1.5, marginBottom: '1.25rem' }}>
              Indexes multi-step conversation trajectories into a vector similarity memory graph, solving LLM context window overflow and memory decay.
            </p>

            <div style={{ padding: '0.85rem', borderRadius: '10px', background: 'var(--code-bg, rgba(15, 23, 42, 0.8))', border: '1px solid var(--border-subtle, rgba(255, 255, 255, 0.08))', marginBottom: '1.25rem' }}>
              <div style={{ fontSize: '0.78rem', fontWeight: 700, color: '#c084fc' }}>● 65% Token Redundancy Pruned</div>
              <div style={{ fontSize: '0.78rem', color: 'var(--text-secondary, #94a3b8)', marginTop: '0.2rem' }}>Sub-millisecond semantic retrieval</div>
            </div>

            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.4rem', marginBottom: '1.5rem' }}>
              {["Python", "Vector DB", "FastAPI", "Embeddings"].map((tech, idx) => (
                <span key={idx} style={{ fontSize: '0.75rem', fontFamily: 'var(--font-mono, monospace)', padding: '0.25rem 0.55rem', borderRadius: '4px', background: 'var(--pill-bg, rgba(255, 255, 255, 0.06))', color: 'var(--text-primary, #e2e8f0)' }}>
                  {tech}
                </span>
              ))}
            </div>
          </div>

          <a
            href="https://github.com/greninja-op/Memoire.git"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              padding: '0.6rem 1rem',
              borderRadius: '8px',
              background: 'var(--btn-bg-secondary, rgba(255, 255, 255, 0.08))',
              border: '1px solid var(--border-subtle, rgba(255, 255, 255, 0.15))',
              color: 'var(--text-primary, #ffffff)',
              fontWeight: 600,
              fontSize: '0.85rem',
              textDecoration: 'none',
              display: 'inline-flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '0.4rem'
            }}
          >
            <IconGithub size={16} /> GitHub Repository ↗
          </a>
        </div>

        {/* ============================================================ */}
        {/* BENTO TILE 3: Nuvault (Zero-Trust Cloud Vault - 6 Columns)   */}
        {/* ============================================================ */}
        <div
          style={{
            gridColumn: 'span 6',
            background: 'var(--card-bg, rgba(255, 255, 255, 0.03))',
            border: '1px solid var(--border-subtle, rgba(255, 255, 255, 0.12))',
            borderRadius: 'var(--ui-radius, 20px)',
            padding: '2rem',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            boxShadow: '0 20px 40px rgba(0, 0, 0, 0.3)'
          }}
          className="bento-tile"
        >
          <div>
            <div
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.4rem',
                padding: '0.35rem 0.75rem',
                borderRadius: '8px',
                background: 'rgba(16, 185, 129, 0.15)',
                border: '1px solid rgba(16, 185, 129, 0.35)',
                color: '#34d399',
                fontSize: '0.78rem',
                fontWeight: 700,
                marginBottom: '1rem'
              }}
            >
              🔐 Zero-Knowledge Client Encryption
            </div>

            <h3 style={{ fontSize: '1.6rem', fontWeight: 800, color: 'var(--text-primary, #ffffff)', marginBottom: '0.3rem' }}>
              Nuvault
            </h3>

            <div style={{ fontSize: '0.95rem', color: '#34d399', fontWeight: 600, marginBottom: '1rem' }}>
              Enterprise Encrypted Asset Platform
            </div>

            <p style={{ color: 'var(--text-secondary, #cbd5e1)', fontSize: '0.95rem', lineHeight: 1.5, marginBottom: '1.25rem' }}>
              Client-side WebCrypto AES-GCM 256-bit key derivation ensures cloud servers hold zero unencrypted bytes or master keys. High-throughput chunked streaming pipeline.
            </p>

            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.4rem', marginBottom: '1.5rem' }}>
              {["TypeScript", "Node.js", "React", "WebCrypto API", "PostgreSQL", "Docker"].map((tech, idx) => (
                <span key={idx} style={{ fontSize: '0.75rem', fontFamily: 'var(--font-mono, monospace)', padding: '0.25rem 0.6rem', borderRadius: '4px', background: 'var(--pill-bg, rgba(255, 255, 255, 0.06))', color: 'var(--text-primary, #e2e8f0)' }}>
                  {tech}
                </span>
              ))}
            </div>
          </div>

          <a
            href="https://github.com/greninja-op/Nuvault.git"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              padding: '0.65rem 1rem',
              borderRadius: '8px',
              background: 'var(--btn-bg-secondary, rgba(255, 255, 255, 0.08))',
              border: '1px solid var(--border-subtle, rgba(255, 255, 255, 0.15))',
              color: 'var(--text-primary, #ffffff)',
              fontWeight: 600,
              fontSize: '0.85rem',
              textDecoration: 'none',
              display: 'inline-flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '0.4rem'
            }}
          >
            <IconGithub size={16} /> GitHub Repository ↗
          </a>
        </div>

        {/* ============================================================ */}
        {/* BENTO TILE 4: CFLS (Distributed Sync Protocol - 6 Columns)   */}
        {/* ============================================================ */}
        <div
          style={{
            gridColumn: 'span 6',
            background: 'var(--card-bg, rgba(255, 255, 255, 0.03))',
            border: '1px solid var(--border-subtle, rgba(255, 255, 255, 0.12))',
            borderRadius: 'var(--ui-radius, 20px)',
            padding: '2rem',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            boxShadow: '0 20px 40px rgba(0, 0, 0, 0.3)'
          }}
          className="bento-tile"
        >
          <div>
            <div
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.4rem',
                padding: '0.35rem 0.75rem',
                borderRadius: '8px',
                background: 'rgba(244, 63, 94, 0.15)',
                border: '1px solid rgba(244, 63, 94, 0.35)',
                color: '#fb7185',
                fontSize: '0.78rem',
                fontWeight: 700,
                marginBottom: '1rem'
              }}
            >
              🔒 Distributed File Lock & Consensus
            </div>

            <h3 style={{ fontSize: '1.6rem', fontWeight: 800, color: 'var(--text-primary, #ffffff)', marginBottom: '0.3rem' }}>
              CFLS Protocol
            </h3>

            <div style={{ fontSize: '0.95rem', color: '#fb7185', fontWeight: 600, marginBottom: '1rem' }}>
              Real-Time Distributed Synchronization Engine
            </div>

            <p style={{ color: 'var(--text-secondary, #cbd5e1)', fontSize: '0.95rem', lineHeight: 1.5, marginBottom: '1.25rem' }}>
              Conflict-free distributed locking protocol in Go. Utilizes atomic heartbeat leases, lock TTL expiration, and sub-millisecond gRPC / WebSockets delta propagation.
            </p>

            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.4rem', marginBottom: '1.5rem' }}>
              {["Go", "gRPC", "WebSockets", "Distributed Consensus", "Linux"].map((tech, idx) => (
                <span key={idx} style={{ fontSize: '0.75rem', fontFamily: 'var(--font-mono, monospace)', padding: '0.25rem 0.6rem', borderRadius: '4px', background: 'var(--pill-bg, rgba(255, 255, 255, 0.06))', color: 'var(--text-primary, #e2e8f0)' }}>
                  {tech}
                </span>
              ))}
            </div>
          </div>

          <a
            href="https://github.com/greninja-op/CFLS-Collaborative-File-Lock-Sync.git"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              padding: '0.65rem 1rem',
              borderRadius: '8px',
              background: 'var(--btn-bg-secondary, rgba(255, 255, 255, 0.08))',
              border: '1px solid var(--border-subtle, rgba(255, 255, 255, 0.15))',
              color: 'var(--text-primary, #ffffff)',
              fontWeight: 600,
              fontSize: '0.85rem',
              textDecoration: 'none',
              display: 'inline-flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '0.4rem'
            }}
          >
            <IconGithub size={16} /> GitHub Repository ↗
          </a>
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .bento-grid-container {
            grid-template-columns: 1fr !important;
          }
          .bento-tile {
            grid-column: span 1 !important;
          }
        }
      `}</style>
    </section>
  );
}
