import React from 'react';
import { IconArrowRight, IconTerminal, IconShield, IconCpu, IconSparkles, IconActivity } from './Icons';
import { personalInfo } from '../data/portfolioData';

export default function Hero({ onOpenTerminal }) {
  return (
    <section id="hero" className="section" style={{ paddingTop: '8.5rem', paddingBottom: '5rem' }}>
      <div className="container">
        <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '3.5rem', alignItems: 'center' }} className="hero-grid">
          {/* Left Hero Content */}
          <div>
            {/* Status Pill */}
            <div
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.6rem',
                padding: '0.4rem 1rem',
                borderRadius: '9999px',
                background: 'rgba(16, 185, 129, 0.1)',
                border: '1px solid rgba(16, 185, 129, 0.3)',
                color: '#34d399',
                fontSize: '0.85rem',
                fontWeight: 600,
                marginBottom: '1.5rem'
              }}
            >
              <span
                style={{
                  width: '8px',
                  height: '8px',
                  borderRadius: '50%',
                  background: '#10b981',
                  boxShadow: '0 0 10px #10b981'
                }}
              />
              Agents of SigNoz Hackathon Entrant & AI Systems Architect
            </div>

            <h1
              style={{
                fontFamily: 'var(--font-heading)',
                fontSize: 'clamp(2.5rem, 5vw, 4rem)',
                fontWeight: 800,
                lineHeight: 1.1,
                marginBottom: '1.25rem',
                letterSpacing: '-0.02em'
              }}
            >
              Hi, I'm <span className="gradient-text">{personalInfo.name}</span>
              <br />
              <span style={{ fontSize: '0.75em', color: 'var(--text-secondary)', fontWeight: 600 }}>
                @{personalInfo.handle}
              </span>
            </h1>

            <p
              style={{
                fontSize: '1.2rem',
                color: 'var(--text-secondary)',
                lineHeight: 1.6,
                maxWidth: '600px',
                marginBottom: '2rem'
              }}
            >
              {personalInfo.tagline}
            </p>

            {/* CTAs */}
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem', marginBottom: '3rem' }}>
              <a href="#sandbox" className="btn btn-primary">
                Try Chaos Lab <IconArrowRight size={18} />
              </a>
              <button onClick={onOpenTerminal} className="btn btn-secondary" style={{ fontFamily: 'var(--font-mono)' }}>
                <IconTerminal size={18} /> Launch CLI
              </button>
              <a href="#projects" className="btn btn-secondary">
                View Projects
              </a>
            </div>

            {/* Metrics Counter Grid */}
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(120px, 1fr))',
                gap: '1rem',
                paddingTop: '1.5rem',
                borderTop: '1px solid var(--border-subtle)'
              }}
            >
              {personalInfo.stats.map((stat, idx) => (
                <div key={idx}>
                  <div
                    style={{
                      fontFamily: 'var(--font-heading)',
                      fontSize: '1.75rem',
                      fontWeight: 800,
                      color: idx % 2 === 0 ? 'var(--accent-violet)' : 'var(--accent-cyan)'
                    }}
                  >
                    {stat.value}
                  </div>
                  <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)', fontWeight: 500 }}>
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Hero Interactive Card */}
          <div className="glass-card" style={{ padding: '1.75rem', position: 'relative', overflow: 'hidden' }}>
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                marginBottom: '1rem',
                paddingBottom: '0.75rem',
                borderBottom: '1px solid var(--border-subtle)'
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <div style={{ width: '10px', height: '10px', borderRadius: '50%', background: '#ef4444' }} />
                <div style={{ width: '10px', height: '10px', borderRadius: '50%', background: '#f59e0b' }} />
                <div style={{ width: '10px', height: '10px', borderRadius: '50%', background: '#10b981' }} />
                <span
                  style={{
                    fontFamily: 'var(--font-mono)',
                    fontSize: '0.8rem',
                    color: 'var(--text-muted)',
                    marginLeft: '0.5rem'
                  }}
                >
                  chronolens_daemon.py
                </span>
              </div>
              <span className="badge badge-violet">Live Loop Active</span>
            </div>

            <pre
              style={{
                fontFamily: 'var(--font-mono)',
                fontSize: '0.85rem',
                color: '#e2e8f0',
                lineHeight: 1.6,
                overflowX: 'auto',
                padding: '0.5rem 0'
              }}
            >
              <code>{`class SelfPreventingLoop:
    def __init__(self, otel_endpoint: str):
        self.signoz = SigNozClient(otel_endpoint)
        self.watchdog = AgentWatch(cost_threshold=1.50)

    async def predict_and_mitigate(self, span_stream):
        async for span in span_stream:
            if self.watchdog.detect_drift(span):
                receipt = await self.signoz.execute_circuit_breaker(
                    action="pause_agent_loop",
                    verify=True
                )
                print(f"[RELIABILITY] Mitigated outage: {receipt.id}")`}</code>
            </pre>

            {/* Quick feature highlights inside card */}
            <div
              style={{
                marginTop: '1.25rem',
                paddingTop: '1rem',
                borderTop: '1px solid var(--border-subtle)',
                display: 'grid',
                gridTemplateColumns: '1fr 1fr',
                gap: '0.75rem'
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.8rem', color: 'var(--text-secondary)' }}>
                <IconShield size={16} color="var(--accent-emerald)" />
                <span>Reversible Actions</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.8rem', color: 'var(--text-secondary)' }}>
                <IconActivity size={16} color="var(--accent-cyan)" />
                <span>OTel Spans Monitored</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @media (min-width: 992px) {
          .hero-grid {
            grid-template-columns: 1.2fr 1fr !important;
          }
        }
      `}</style>
    </section>
  );
}
