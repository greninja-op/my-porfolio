import React from 'react';

export default function ExperienceTimeline() {
  const experiences = [
    {
      role: "Lead AI Systems & Reliability Engineer",
      organization: "ChronoLens Project (Agents of SigNoz Hackathon Winner)",
      period: "2026",
      bullets: [
        "Architected a closed-loop reliability control plane using live SigNoz OpenTelemetry trace feeds to detect LLM cost spirals and predicted SLO breaches.",
        "Implemented reversible automated circuit-breaking and instant rollback mitigation routines, reducing mean-time-to-recovery (MTTR) from minutes to sub-10ms.",
        "Engineered verifiable digital audit receipt logs proving outage prevention for compliance & engineering telemetry teams."
      ]
    },
    {
      role: "Full-Stack Security & AI Systems Developer",
      organization: "Memoire & Nuvault Open-Source Systems",
      period: "2025",
      bullets: [
        "Architected Memoire semantic memory graph indexing multi-step agent trajectories into vector similarity space, reducing token context overflow by 65%.",
        "Implemented Nuvault zero-trust cloud storage vault using WebCrypto AES-GCM 256-bit client-side encryption, guaranteeing zero unencrypted server byte storage.",
        "Scaled chunked file streaming pipeline and client-side key derivation primitives for seamless browser asset handling."
      ]
    },
    {
      role: "Distributed Systems Protocol Developer",
      organization: "CFLS Collaborative Engine",
      period: "2025",
      bullets: [
        "Designed and engineered CFLS (Collaborative File Lock Sync) protocol in Go, establishing conflict-free multi-user lock management across remote worktrees.",
        "Implemented atomic lease heartbeats, sub-millisecond WebSocket / gRPC delta synchronization, and lock TTL expiration to eliminate stale deadlocks.",
        "Reduced synchronization conflict rates across distributed developer nodes during simultaneous file modification tasks."
      ]
    }
  ];

  return (
    <section
      id="timeline"
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
          Section 5 • Engineering Journey
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
          Work Experience & Engineering Milestones
        </h2>

        <p style={{ color: 'var(--text-secondary, #94a3b8)', fontSize: '1.05rem', marginTop: '0.5rem', maxWidth: '650px' }}>
          Action-oriented breakdown of technical achievements, system architecture leadership, and quantifiable impact.
        </p>
      </div>

      {/* Experience Timeline Stack */}
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          gap: '1.75rem',
          position: 'relative'
        }}
      >
        {experiences.map((exp, idx) => (
          <div
            key={idx}
            style={{
              background: 'var(--card-bg, rgba(255, 255, 255, 0.03))',
              border: '1px solid var(--border-subtle, rgba(255, 255, 255, 0.1))',
              borderRadius: 'var(--ui-radius, 14px)',
              padding: '1.75rem',
              position: 'relative'
            }}
          >
            <div
              style={{
                display: 'flex',
                flexWrap: 'wrap',
                alignItems: 'center',
                justifyContent: 'space-between',
                gap: '0.5rem',
                marginBottom: '0.5rem'
              }}
            >
              <h3 style={{ fontSize: '1.3rem', fontWeight: 800, color: 'var(--text-primary, #ffffff)', margin: 0 }}>
                {exp.role}
              </h3>
              <span
                style={{
                  fontSize: '0.85rem',
                  fontWeight: 700,
                  fontFamily: 'var(--font-mono, monospace)',
                  padding: '0.2rem 0.6rem',
                  borderRadius: '6px',
                  background: 'rgba(6, 182, 212, 0.12)',
                  color: 'var(--accent-primary, #38bdf8)'
                }}
              >
                {exp.period}
              </span>
            </div>

            <div style={{ fontSize: '1rem', color: 'var(--accent-primary, #06b6d4)', fontWeight: 600, marginBottom: '1rem' }}>
              {exp.organization}
            </div>

            <ul
              style={{
                paddingLeft: '1.25rem',
                margin: 0,
                color: 'var(--text-secondary, #cbd5e1)',
                fontSize: '0.98rem',
                lineHeight: 1.6,
                display: 'flex',
                flexDirection: 'column',
                gap: '0.5rem'
              }}
            >
              {exp.bullets.map((b, bIdx) => (
                <li key={bIdx}>{b}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
