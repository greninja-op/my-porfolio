import React, { useState, useEffect } from 'react';
import { projects } from '../data/portfolioData';

export default function ChronoLensApp() {
  const pData = projects.find((p) => p.id === 'chronolens') || projects[0];
  const [systemState, setSystemState] = useState('NOMINAL');
  const [telemetryVal, setTelemetryVal] = useState(140);
  const [costRate, setCostRate] = useState(0.04);
  const [receipts, setReceipts] = useState([]);
  const [activeTab, setActiveTab] = useState('overview');

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
          verifiedBy: 'SigNoz Query Builder API'
        };
        setReceipts((prev) => [newReceipt, ...prev]);
      }, 2500);
    } else {
      setSystemState('BREACH');
      setTelemetryVal(2850);
      setTimeout(() => {
        setSystemState('MITIGATED');
        setTelemetryVal(150);
        setCostRate(0.04);
        const newReceipt = {
          id: `RCPT-SLO-${Math.floor(10000 + Math.random() * 90000)}`,
          time: new Date().toLocaleTimeString(),
          action: 'DYNAMIC_TRAFFIC_SHED',
          target: 'payment_pipeline_v2',
          verifiedBy: 'OTel Telemetry Feed'
        };
        setReceipts((prev) => [newReceipt, ...prev]);
      }, 2500);
    }
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '1.2rem', fontFamily: 'var(--font-mac-title)' }}>
      {/* Top Banner Header with Real Logo Image */}
      <div style={{ borderBottom: '2px solid #000', paddingBottom: '0.75rem' }}>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '0.5rem', marginBottom: '0.4rem' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.8rem' }}>
            <img
              src={pData.logoImg}
              alt="ChronoLens Official Logo"
              style={{
                width: '52px',
                height: '52px',
                objectFit: 'contain',
                borderRadius: '8px',
                border: '2px solid #000',
                boxShadow: '2px 2px 0px #000',
                background: '#000'
              }}
              onError={(e) => {
                e.target.style.display = 'none';
              }}
            />
            <div>
              <h2 style={{ fontSize: '1.8rem', color: '#000', lineHeight: 1 }}>{pData.title}</h2>
              <span style={{ fontSize: '1.1rem', color: 'var(--mac-purple-dark)', fontWeight: 'bold' }}>
                {pData.subtitle}
              </span>
            </div>
          </div>
          <span
            style={{
              background: 'var(--mac-pink)',
              color: '#fff',
              border: '2px solid #000',
              padding: '2px 8px',
              fontSize: '1.05rem',
              fontWeight: 'bold',
              boxShadow: '2px 2px 0px #000'
            }}
          >
            {pData.badge}
          </span>
        </div>

        {/* Action Buttons */}
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.6rem', marginTop: '0.6rem' }}>
          <a
            href={pData.github}
            target="_blank"
            rel="noopener noreferrer"
            className="mac-btn mac-btn-purple"
            style={{ textDecoration: 'none' }}
          >
            📦 GitHub Repository ↗
          </a>
          {pData.website && (
            <a
              href={pData.website}
              target="_blank"
              rel="noopener noreferrer"
              className="mac-btn mac-btn-cyan"
              style={{ textDecoration: 'none' }}
            >
              🌐 Project Link ↗
            </a>
          )}
          <button
            onClick={() => setActiveTab(activeTab === 'overview' ? 'lab' : 'overview')}
            className="mac-btn mac-btn-lime"
          >
            {activeTab === 'overview' ? '🎛️ Launch Live Chaos Lab' : '📖 View App Overview'}
          </button>
        </div>
      </div>

      {activeTab === 'overview' ? (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
          {/* Banner Graphic if Available */}
          {pData.bannerImg && (
            <div style={{ border: '2px solid #000', borderRadius: '6px', overflow: 'hidden', boxShadow: '2px 2px 0px #000' }}>
              <img
                src={pData.bannerImg}
                alt="ChronoLens Architecture Banner"
                style={{ width: '100%', maxHeight: '180px', objectFit: 'cover' }}
              />
            </div>
          )}

          {/* Purpose & Description Box */}
          <div className="mac-group-box">
            <span className="mac-group-label">What ChronoLens is Needed For</span>
            <p style={{ fontFamily: 'var(--font-mac-body)', fontSize: '1.05rem', lineHeight: 1.6, color: '#111', marginTop: '0.5rem' }}>
              {pData.description}
            </p>
          </div>

          {/* Capabilities List */}
          <div className="mac-group-box">
            <span className="mac-group-label">Key Architectural Features</span>
            <div style={{ marginTop: '0.5rem', display: 'flex', flexDirection: 'column', gap: '0.4rem' }}>
              {pData.features.map((feat, i) => (
                <div key={i} style={{ fontSize: '1.1rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                  <span style={{ color: 'var(--mac-purple-dark)', fontWeight: 'bold' }}>✓</span>
                  <span>{feat}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Tech Stack Pills */}
          <div className="mac-group-box">
            <span className="mac-group-label">Tech Stack & Frameworks</span>
            <div style={{ marginTop: '0.5rem', display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
              {pData.techStack.map((tech, i) => (
                <span
                  key={i}
                  style={{
                    background: 'var(--mac-lime)',
                    border: '2px solid #000',
                    padding: '2px 8px',
                    fontSize: '1rem',
                    fontWeight: 'bold',
                    boxShadow: '1px 1px 0px #000'
                  }}
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>
      ) : (
        /* Live Chaos Lab */
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '1rem' }}>
            <div className="mac-group-box">
              <span className="mac-group-label">Telemetry Metrics</span>
              <div style={{ marginTop: '0.6rem', display: 'flex', flexDirection: 'column', gap: '0.4rem', fontSize: '1.15rem' }}>
                <div>p99 Latency: <strong>{telemetryVal} ms</strong></div>
                <div>Cost Rate: <strong>${costRate.toFixed(2)}/min</strong></div>
                <div>Status: <strong style={{ color: systemState === 'NOMINAL' ? 'green' : 'red' }}>{systemState}</strong></div>
              </div>
            </div>

            <div className="mac-group-box">
              <span className="mac-group-label">Inject Failures</span>
              <div style={{ marginTop: '0.6rem', display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                <button onClick={() => triggerChaos('cost')} disabled={systemState !== 'NOMINAL' && systemState !== 'MITIGATED'} className="mac-btn mac-btn-pink">
                  💥 Inject LLM Cost Spiral
                </button>
                <button onClick={() => triggerChaos('slo')} disabled={systemState !== 'NOMINAL' && systemState !== 'MITIGATED'} className="mac-btn mac-btn-purple">
                  ⚡ Inject SLO Breach
                </button>
              </div>
            </div>
          </div>

          <div className="mac-group-box">
            <span className="mac-group-label">Verified Receipts</span>
            <div style={{ marginTop: '0.5rem', display: 'flex', flexDirection: 'column', gap: '0.4rem', maxHeight: '140px', overflowY: 'auto' }}>
              {receipts.length === 0 ? (
                <div style={{ fontStyle: 'italic', color: '#666' }}>Click a button above to test automated receipt generation!</div>
              ) : (
                receipts.map((r) => (
                  <div key={r.id} style={{ background: 'var(--mac-yellow)', border: '2px solid #000', padding: '0.4rem', fontSize: '1rem', fontFamily: 'var(--font-mono)' }}>
                    [{r.time}] <strong>{r.id}</strong> • {r.action} ({r.verifiedBy})
                  </div>
                ))
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
