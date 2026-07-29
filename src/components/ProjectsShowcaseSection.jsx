import React, { useState } from 'react';
import { IconGithub, IconExternalLink, IconSparkles } from './Icons';

export default function ProjectsShowcaseSection() {
  // Structured Mockup Data Layer (Easy to swap with actual live API data or CMS)
  const mockupProjects = [
    {
      id: "chronolens",
      title: "ChronoLens",
      tagline: "Closed-Loop Predictive SRE Control Plane on SigNoz",
      category: "AI & Observability",
      badge: "⚡ Agents of SigNoz Winner",
      badgeColor: "#06b6d4",
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
      demo: "https://github.com/greninja-op/ChronoLens",
      mockupFrame: {
        type: "terminal",
        title: "chronolens-daemon --mode=closed-loop",
        content: `[00:01:04] INFO  Connected to SigNoz OTel Collector (grpc://127.0.0.1:4317)
[00:01:05] TRACE Span ID 8f9a2b0c: agent_loop_detected count=14 rate=450ms
[00:01:05] WARN  Predicted SLO Breach: LLM Cost Spiral > $45/hr (Confidence 98.4%)
[00:01:05] ACT   Executing Circuit Breaker: Triggering Reversible Fallback Route
[00:01:05] AUDIT Receipt 0x9f83...a2b1 logged to digital ledger. Outage Prevented.`
      }
    },
    {
      id: "memoire",
      title: "Memoire",
      tagline: "AI Memory Graph & Context Retention Engine",
      category: "AI Infrastructure",
      badge: "🧠 AI Context Graph",
      badgeColor: "#8b5cf6",
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
      demo: "https://github.com/greninja-op/Memoire",
      mockupFrame: {
        type: "code",
        title: "memoire/engine.py — Vector Similarity Indexer",
        content: `class MemoireContextGraph:
    async def index_trajectory(self, trajectory: AgentStep) -> str:
        vector = await self.embedder.encode(trajectory.prompt)
        graph_node = self.vector_db.upsert(vector, meta=trajectory.dict())
        await self.prune_redundant_nodes(threshold=0.88)
        return graph_node.id`
      }
    },
    {
      id: "nuvault",
      title: "Nuvault",
      tagline: "Zero-Trust Cloud Vault & Encrypted Asset Platform",
      category: "Security & Cloud",
      badge: "🔐 Zero-Knowledge Vault",
      badgeColor: "#10b981",
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
      demo: "https://github.com/greninja-op/Nuvault",
      mockupFrame: {
        type: "security",
        title: "nuvault-crypto --client-side-vault",
        content: `const key = await window.crypto.subtle.generateKey(
  { name: "AES-GCM", length: 256 },
  true,
  ["encrypt", "decrypt"]
);
const encryptedBlob = await window.crypto.subtle.encrypt(
  { name: "AES-GCM", iv }, key, rawData
);
// Server receives 0 unencrypted bytes.`
      }
    },
    {
      id: "cfls",
      title: "CFLS Protocol",
      tagline: "Real-Time Distributed File Locking Protocol",
      category: "Distributed Systems",
      badge: "🔒 Lock Consensus Engine",
      badgeColor: "#f43f5e",
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
      demo: "https://github.com/greninja-op/CFLS-Collaborative-File-Lock-Sync",
      mockupFrame: {
        type: "network",
        title: "cfls-node-daemon (Go v1.22 gRPC stream)",
        content: `func (s *LockServer) AcquireLock(ctx context.Context, req *LockRequest) (*LockResponse, error) {
    if s.mutex.TryAcquire(req.FileId, req.LeaseDuration) {
        s.broadcastDeltaStream(&pb.SyncDelta{FileId: req.FileId, Status: LOCKED})
        return &LockResponse{Granted: true}, nil
    }
    return &LockResponse{Granted: false}, ErrLockConflict
}`
      }
    }
  ];

  const [activeTab, setActiveTab] = useState('chronolens');
  const activeProject = mockupProjects.find((p) => p.id === activeTab) || mockupProjects[0];

  return (
    <section
      id="projects-showcase"
      style={{
        padding: '3.5rem 1.5rem',
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
          Section C • Beautiful Project Showcase Layer
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
          Featured Non-Generic Open-Source Systems
        </h2>

        <p style={{ color: 'var(--text-secondary, #94a3b8)', fontSize: '1.05rem', marginTop: '0.4rem', maxWidth: '650px' }}>
          Interactive showcase layer configured with structured mockup data (ready to swap with live API feeds). Select a project tab to inspect architecture.
        </p>
      </div>

      {/* Project Selector Tabs */}
      <div
        style={{
          display: 'flex',
          flexWrap: 'wrap',
          gap: '0.75rem',
          marginBottom: '2rem',
          paddingBottom: '1rem',
          borderBottom: '1px solid var(--border-subtle, #1f2937)'
        }}
      >
        {mockupProjects.map((p) => (
          <button
            key={p.id}
            onClick={() => setActiveTab(p.id)}
            style={{
              padding: '0.65rem 1.2rem',
              borderRadius: '10px',
              border: activeTab === p.id ? `2px solid ${p.badgeColor}` : '1px solid var(--border-subtle, #1f2937)',
              background: activeTab === p.id ? `${p.badgeColor}22` : 'var(--card-bg, #111827)',
              color: activeTab === p.id ? p.badgeColor : 'var(--text-secondary, #94a3b8)',
              fontWeight: 700,
              fontSize: '0.9rem',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              gap: '0.5rem',
              transition: 'all 0.15s ease'
            }}
          >
            <span>{p.badge.split(' ')[0]}</span>
            <span>{p.title}</span>
          </button>
        ))}
      </div>

      {/* Selected Project Showcase Display Card */}
      <div
        style={{
          background: 'var(--card-bg, #111827)',
          border: '1px solid var(--border-subtle, #1f2937)',
          borderRadius: 'var(--ui-radius, 20px)',
          padding: '2.25rem',
          boxShadow: '0 20px 40px rgba(0, 0, 0, 0.4)',
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
          gap: '2.25rem',
          alignItems: 'start'
        }}
      >
        {/* Left Column: Details, Metrics & CTAs */}
        <div>
          <div
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.4rem',
              padding: '0.35rem 0.85rem',
              borderRadius: '8px',
              background: `${activeProject.badgeColor}22`,
              border: `1px solid ${activeProject.badgeColor}44`,
              color: activeProject.badgeColor,
              fontSize: '0.82rem',
              fontWeight: 700,
              marginBottom: '1.25rem'
            }}
          >
            {activeProject.badge}
          </div>

          <h3 style={{ fontSize: '2rem', fontWeight: 800, color: 'var(--text-primary, #ffffff)', marginBottom: '0.3rem' }}>
            {activeProject.title}
          </h3>

          <div style={{ fontSize: '1.05rem', color: activeProject.badgeColor, fontWeight: 600, marginBottom: '1.25rem' }}>
            {activeProject.tagline}
          </div>

          <p style={{ color: 'var(--text-secondary, #cbd5e1)', fontSize: '1rem', lineHeight: 1.6, marginBottom: '1.75rem' }}>
            {activeProject.description}
          </p>

          {/* Metrics Grid */}
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(3, 1fr)',
              gap: '0.75rem',
              marginBottom: '1.75rem',
              padding: '1rem',
              borderRadius: '10px',
              background: 'var(--code-bg, #0f172a)',
              border: '1px solid var(--border-subtle, #1f2937)'
            }}
          >
            {activeProject.metrics.map((m, mIdx) => (
              <div key={mIdx} style={{ textAlign: 'center' }}>
                <div style={{ fontSize: '1.3rem', fontWeight: 800, color: activeProject.badgeColor }}>
                  {m.value}
                </div>
                <div style={{ fontSize: '0.75rem', color: 'var(--text-secondary, #94a3b8)', marginTop: '0.1rem' }}>
                  {m.label}
                </div>
              </div>
            ))}
          </div>

          {/* Accomplishments Bullets */}
          <div style={{ marginBottom: '1.75rem' }}>
            <div style={{ fontSize: '0.8rem', textTransform: 'uppercase', letterSpacing: '0.06em', fontWeight: 700, color: 'var(--text-secondary, #94a3b8)', marginBottom: '0.6rem' }}>
              Key Technical Accomplishments:
            </div>
            <ul style={{ paddingLeft: '1.2rem', margin: 0, color: 'var(--text-secondary, #cbd5e1)', fontSize: '0.95rem', lineHeight: 1.6, display: 'flex', flexDirection: 'column', gap: '0.4rem' }}>
              {activeProject.highlights.map((h, hIdx) => (
                <li key={hIdx}>{h}</li>
              ))}
            </ul>
          </div>

          {/* Tech Stack Pills */}
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem', marginBottom: '2rem' }}>
            {activeProject.techStack.map((tech, tIdx) => (
              <span
                key={tIdx}
                style={{
                  fontSize: '0.78rem',
                  fontFamily: 'var(--font-mono, monospace)',
                  padding: '0.3rem 0.7rem',
                  borderRadius: '6px',
                  background: 'var(--pill-bg, #1e293b)',
                  color: 'var(--text-primary, #e2e8f0)',
                  border: '1px solid var(--border-subtle, #1f2937)',
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
              href={activeProject.github}
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
                boxShadow: '0 4px 14px rgba(6, 182, 212, 0.25)'
              }}
            >
              <IconGithub size={18} /> View GitHub Repository
            </a>

            <a
              href={activeProject.demo}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                padding: '0.7rem 1.35rem',
                borderRadius: '8px',
                background: 'var(--btn-bg-secondary, #1e293b)',
                border: '1px solid var(--border-subtle, #1f2937)',
                color: 'var(--text-primary, #ffffff)',
                fontWeight: 600,
                fontSize: '0.9rem',
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

        {/* Right Column: Interactive Mockup Visual Frame */}
        <div
          style={{
            background: 'var(--code-bg, #0f172a)',
            border: '1px solid var(--border-subtle, #1f2937)',
            borderRadius: '14px',
            overflow: 'hidden',
            boxShadow: '0 15px 30px rgba(0, 0, 0, 0.5)'
          }}
        >
          {/* Mock Window Header Bar */}
          <div
            style={{
              padding: '0.75rem 1rem',
              background: '#090d16',
              borderBottom: '1px solid #1f2937',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between'
            }}
          >
            <div style={{ display: 'flex', gap: '0.4rem' }}>
              <span style={{ width: '10px', height: '10px', borderRadius: '50%', background: '#ef4444' }} />
              <span style={{ width: '10px', height: '10px', borderRadius: '50%', background: '#f59e0b' }} />
              <span style={{ width: '10px', height: '10px', borderRadius: '50%', background: '#10b981' }} />
            </div>

            <div style={{ fontFamily: 'var(--font-mono, monospace)', fontSize: '0.78rem', color: '#94a3b8' }}>
              {activeProject.mockupFrame.title}
            </div>

            <div style={{ fontSize: '0.75rem', color: activeProject.badgeColor, fontWeight: 700 }}>
              ● Live Mockup
            </div>
          </div>

          {/* Mock Code / Execution Console Content */}
          <div style={{ padding: '1.25rem', fontFamily: 'var(--font-mono, monospace)', fontSize: '0.85rem', lineHeight: 1.6, color: '#e2e8f0' }}>
            <pre style={{ margin: 0, whiteSpace: 'pre-wrap', wordBreak: 'break-word' }}>
              {activeProject.mockupFrame.content}
            </pre>
          </div>
        </div>
      </div>
    </section>
  );
}
