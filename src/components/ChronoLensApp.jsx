import React, { useState, useEffect } from 'react';

export default function ChronoLensApp() {
  const [systemState, setSystemState] = useState('NOMINAL');
  const [telemetryVal, setTelemetryVal] = useState(140);
  const [costRate, setCostRate] = useState(0.04);
  const [receipts, setReceipts] = useState([]);
  const [activeTab, setActiveTab] = useState('lab'); // 'lab', 'about', 'architecture'

  useEffect(() => {
    const timer = setInterval(() => {
      if (systemState === 'NOMINAL') {
        setTelemetryVal(Math.floor(130 + Math.random() * 35));
        setCostRate(+(0.03 + Math.random() * 0.02).toFixed(2));
      } else if (systemState === 'SPIRAL') {
        setTelemetryVal((prev) => Math.min(prev + 130, 2400));
        setCostRate((prev) => +(prev + 0.45).toFixed(2));
      }
    }, 800);
    return () => clearInterval(timer);
  }, [systemState]);

  const triggerChaos = (type) => {
    if (type === 'cost') {
      setSystemState('SPIRAL');
      setTimeout(() => {
        setSystemState('MITIGATED');
        setTelemetryVal(145);
        setCostRate(0.04);
        const newReceipt = {
          id: `RCPT-SIGNOZ-${Math.floor(10000 + Math.random() * 90000)}`,
          time: new Date().toLocaleTimeString(),
          action: 'AGENT_WATCHDOG_HALT',
          target: 'llm_agent_executor_span_04',
          costSaved: '$18.40',
          verifiedBy: 'SigNoz Query Builder API'
        };
        setReceipts((prev) => [newReceipt, ...prev]);
      }, 2500);
    } else {
      setSystemState('BREACH');
      setTelemetryVal(2850);
      setTimeout(() => {
        setSystemState('MITIGATED');
        setLatencyVal(150);
        setCostRate(0.04);
        const newReceipt = {
          id: `RCPT-SLO-${Math.floor(10000 + Math.random() * 90000)}`,
          time: new Date().toLocaleTimeString(),
          action: 'DYNAMIC_TRAFFIC_SHED',
          target: 'payment_pipeline_v2',
          latencyRestored: '150ms',
          verifiedBy: 'OTel Telemetry Feed'
        };
        setReceipts((prev) => [newReceipt, ...prev]);
      }, 2500);
    }
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', fontFamily: 'var(--font-mac-title)' }}>
      {/* App Header & Navigation Tabs */}
      <div style={{ borderBottom: '2px solid #000', paddingBottom: '0.6rem', display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '0.5rem' }}>
        <div>
          <h2 style={{ fontSize: '1.7rem', color: '#000', lineHeight: 1 }}>⚡ ChronoLens.app</h2>
          <span style={{ fontSize: '1.05rem', color: 'var(--mac-purple-dark)', fontWeight: 'bold' }}>
            Self-Preventing Reliability Loop for AI-Native Systems (SigNoz Hackathon)
          </span>
        </div>

        <div style={{ display: 'flex', gap: '0.4rem' }}>
          <button
            onClick={() => setActiveTab('lab')}
            className={`mac-btn ${activeTab === 'lab' ? 'mac-btn-purple' : ''}`}
            style={{ padding: '0.2rem 0.6rem', fontSize: '1rem' }}
          >
            🎛️ Live Chaos Lab
          </button>
          <button
            onClick={() => setActiveTab('about')}
            className={`mac-btn ${activeTab === 'about' ? 'mac-btn-pink' : ''}`}
            style={{ padding: '0.2rem 0.6rem', fontSize: '1rem' }}
          >
            💡 Purpose & Specs
          </button>
          <a
            href="https://github.com/greninja-op/ChronoLens.git"
            target="_blank"
            rel="noopener noreferrer"
            className="mac-btn mac-btn-lime"
            style={{ textDecoration: 'none', padding: '0.2rem 0.6rem', fontSize: '1rem' }}
          >
            GitHub ↗
          </a>
        </div>
      </div>

      {/* Tab 1: Live Interactive Chaos Lab */}
      {activeTab === 'lab' && (
        <>
          {/* Status & Controls Grid */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '1rem' }}>
            {/* Realtime Telemetry Panel */}
            <div className="mac-group-box">
              <span className="mac-group-label">Telemetry Telemetry Metrics</span>
              <div style={{ marginTop: '0.75rem', display: 'flex', flexDirection: 'column', gap: '0.6rem' }}>
                <div style={{ fontSize: '1.2rem', fontWeight: 'bold' }}>
                  p99 Latency: <span style={{ color: telemetryVal > 500 ? 'var(--mac-pink)' : 'var(--mac-purple-dark)' }}>{telemetryVal} ms</span>
                </div>
                <div style={{ fontSize: '1.2rem', fontWeight: 'bold' }}>
                  Agent Cost Burn: <span style={{ color: costRate > 0.5 ? 'var(--mac-pink)' : 'var(--mac-lime)' }}>${costRate.toFixed(2)} /min</span>
                </div>
                <div style={{ fontSize: '1.05rem', color: '#666', borderTop: '1px solid #000', paddingTop: '0.3rem' }}>
                  Status: <span style={{ fontWeight: 'bold', color: systemState === 'NOMINAL' ? 'var(--mac-lime)' : systemState === 'MITIGATED' ? 'var(--mac-cyan)' : 'var(--mac-pink)' }}>{systemState}</span>
                </div>
              </div>
            </div>

            {/* Interactive Chaos Buttons */}
            <div className="mac-group-box">
              <span className="mac-group-label">Inject Live Failures</span>
              <div style={{ marginTop: '0.75rem', display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                <button
                  onClick={() => triggerChaos('cost')}
                  disabled={systemState === 'SPIRAL' || systemState === 'BREACH'}
                  className="mac-btn mac-btn-pink"
                  style={{ justifyContent: 'center' }}
                >
                  💥 Trigger LLM Infinite Loop
                </button>
                <button
                  onClick={() => triggerChaos('slo')}
                  disabled={systemState === 'SPIRAL' || systemState === 'BREACH'}
                  className="mac-btn mac-btn-purple"
                  style={{ justifyContent: 'center' }}
                >
                  ⚡ Trigger SLO 2.5s Latency Breach
                </button>
                <button
                  onClick={() => setSystemState('NOMINAL')}
                  className="mac-btn mac-btn-lime"
                  style={{ justifyContent: 'center' }}
                >
                  🛡️ Reset Baseline
                </button>
              </div>
            </div>
          </div>

          {/* Audit Receipts Feed */}
          <div className="mac-group-box">
            <span className="mac-group-label">Verified Outage Receipts ("Outages That Never Happened")</span>
            <div style={{ marginTop: '0.75rem', display: 'flex', flexDirection: 'column', gap: '0.6rem', maxHeight: '160px', overflowY: 'auto' }}>
              {receipts.length === 0 ? (
                <div style={{ fontSize: '1.05rem', color: '#666', fontStyle: 'italic' }}>
                  No failure incidents triggered yet. Click an injection button above to test ChronoLens interception!
                </div>
              ) : (
                receipts.map((r) => (
                  <div
                    key={r.id}
                    style={{
                      background: 'var(--mac-yellow)',
                      border: '2px solid #000',
                      boxShadow: '2px 2px 0px #000',
                      padding: '0.6rem 0.8rem',
                      fontSize: '1.05rem',
                      fontFamily: 'var(--font-mono)'
                    }}
                  >
                    <span style={{ fontWeight: 'bold' }}>[{r.time}] {r.id}</span> • Action: <span style={{ color: 'var(--mac-purple-dark)', fontWeight: 'bold' }}>{r.action}</span> • Target: {r.target}
                  </div>
                ))
              )}
            </div>
          </div>
        </>
      )}

      {/* Tab 2: Purpose & Specs */}
      {activeTab === 'about' && (
        <div className="mac-group-box">
          <span className="mac-group-label">What ChronoLens is Needed For</span>
          <div style={{ marginTop: '0.75rem', fontFamily: 'var(--font-mac-body)', fontSize: '1rem', lineHeight: 1.6, color: '#111' }}>
            <h3 style={{ fontFamily: 'var(--font-mac-title)', fontSize: '1.4rem', color: 'var(--mac-purple-dark)', marginBottom: '0.4rem' }}>
              The Problem ChronoLens Solves:
            </h3>
            <p style={{ marginBottom: '0.8rem' }}>
              In AI-native architectures, autonomous LLM agents can get stuck in infinite retry loops, causing massive token cost spirals and cascading service latencies before traditional alerts respond.
            </p>

            <h3 style={{ fontFamily: 'var(--font-mac-title)', fontSize: '1.4rem', color: 'var(--mac-purple-dark)', marginBottom: '0.4rem' }}>
              How ChronoLens Works:
            </h3>
            <ul style={{ paddingLeft: '1.2rem', display: 'flex', flexDirection: 'column', gap: '0.4rem' }}>
              <li><strong>Predicts:</strong> Monitors live SigNoz OpenTelemetry spans to forecast SLO breaches before impact.</li>
              <li><strong>Mitigates:</strong> Executes reversible circuit-breaker actions (pausing loop, traffic fallback).</li>
              <li><strong>Verifies:</strong> Queries SigNoz telemetry to verify recovery, or instantly rolls back.</li>
              <li><strong>Files Audit Receipts:</strong> Generates tamper-proof digital receipts for outages that were prevented.</li>
            </ul>
          </div>
        </div>
      )}
    </div>
  );
}
