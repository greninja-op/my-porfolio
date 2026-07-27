import React, { useState, useEffect } from 'react';
import { IconShield, IconActivity, IconZap, IconPlay, IconRefresh, IconAlertTriangle, IconSparkles } from './Icons';

export default function ChaosSandbox() {
  const [systemState, setSystemState] = useState('NOMINAL'); // NOMINAL, SPIRAL, BREACH, ANOMALY, MITIGATED
  const [telemetryVal, setTelemetryVal] = useState(140); // ms
  const [costRate, setCostRate] = useState(0.04); // $/min
  const [logs, setLogs] = useState([
    { id: 1, time: '18:45:01', text: '[SigNoz-OTel] Live span ingestion normal. 140ms avg latency.', type: 'info' }
  ]);
  const [receipt, setReceipt] = useState(null);

  // Periodic normal fluctuations
  useEffect(() => {
    const timer = setInterval(() => {
      if (systemState === 'NOMINAL') {
        setTelemetryVal(Math.floor(130 + Math.random() * 35));
        setCostRate(+(0.03 + Math.random() * 0.02).toFixed(2));
      } else if (systemState === 'SPIRAL') {
        setTelemetryVal((prev) => Math.min(prev + 120, 2400));
        setCostRate((prev) => +(prev + 0.45).toFixed(2));
      } else if (systemState === 'BREACH') {
        setTelemetryVal(2850);
      }
    }, 900);
    return () => clearInterval(timer);
  }, [systemState]);

  const addLog = (text, type = 'info') => {
    setLogs((prev) => [
      { id: Date.now(), time: new Date().toLocaleTimeString(), text, type },
      ...prev.slice(0, 5)
    ]);
  };

  const triggerCostSpiral = () => {
    setSystemState('SPIRAL');
    addLog('⚠️ CRITICAL: Infinite LLM agent loop detected! Token velocity spiking.', 'warning');
    
    setTimeout(() => {
      setSystemState('MITIGATED');
      setTelemetryVal(145);
      setCostRate(0.04);
      setReceipt({
        id: 'RCPT-SIGNOZ-88492',
        action: 'AGENT_WATCHDOG_HALT',
        target: 'llm_agent_executor_span_04',
        costSaved: '$18.40',
        verifiedBy: 'SigNoz Query Builder API'
      });
      addLog('🛡️ ChronoLens Interception: Circuit breaker triggered! Loop severed. Audit receipt generated.', 'success');
    }, 2800);
  };

  const triggerLatencySpike = () => {
    setSystemState('BREACH');
    addLog('⚡ SLO BREACH IMMINENT: p99 latency crossed 2.5s threshold.', 'error');
    
    setTimeout(() => {
      setSystemState('MITIGATED');
      setTelemetryVal(160);
      setCostRate(0.04);
      setReceipt({
        id: 'RCPT-SLO-99120',
        action: 'DYNAMIC_TRAFFIC_SHED',
        target: 'payment_pipeline_v2',
        latencyRestored: '160ms',
        verifiedBy: 'OTel Telemetry Feed'
      });
      addLog('🛡️ ChronoLens Action: Reversible traffic fallback deployed & verified with 0 downtime.', 'success');
    }, 2800);
  };

  const resetSystem = () => {
    setSystemState('NOMINAL');
    setTelemetryVal(140);
    setCostRate(0.04);
    setReceipt(null);
    addLog('🔄 System restored to nominal operating baseline.', 'info');
  };

  return (
    <section id="sandbox" className="section" style={{ background: 'rgba(11, 17, 32, 0.4)' }}>
      <div className="container">
        {/* Header */}
        <div className="section-header">
          <div className="section-tag">
            <IconSparkles size={16} /> Interactive Systems Lab
          </div>
          <h2 className="section-title">
            ChronoLens <span className="gradient-text">Chaos & Reliability Sandbox</span>
          </h2>
          <p className="section-subtitle">
            Simulate live failure modes (cost spirals, latency breaches) and watch ChronoLens intercept them in real-time with automated verification receipts.
          </p>
        </div>

        {/* Sandbox Panel Container */}
        <div className="glass-card" style={{ padding: '2rem', border: '1px solid var(--border-glow)' }}>
          {/* Controls Bar */}
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              flexWrap: 'wrap',
              gap: '1rem',
              marginBottom: '2rem',
              paddingBottom: '1.25rem',
              borderBottom: '1px solid var(--border-subtle)'
            }}
          >
            <div>
              <div style={{ fontSize: '0.85rem', color: 'var(--text-muted)', fontFamily: 'var(--font-mono)' }}>
                TELEMETRY FEED: SigNoz OTel Collector v0.98.0
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginTop: '0.2rem' }}>
                <span
                  style={{
                    width: '10px',
                    height: '10px',
                    borderRadius: '50%',
                    background:
                      systemState === 'NOMINAL'
                        ? '#10b981'
                        : systemState === 'MITIGATED'
                        ? '#38bdf8'
                        : '#ef4444',
                    boxShadow: '0 0 10px currentColor'
                  }}
                />
                <span style={{ fontWeight: 700, fontSize: '1.1rem', fontFamily: 'var(--font-heading)' }}>
                  SYSTEM STATUS: <span style={{ color: systemState === 'NOMINAL' ? '#34d399' : systemState === 'MITIGATED' ? '#38bdf8' : '#f87171' }}>{systemState}</span>
                </span>
              </div>
            </div>

            {/* Simulation Action Buttons */}
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.75rem' }}>
              <button
                onClick={triggerCostSpiral}
                disabled={systemState === 'SPIRAL' || systemState === 'BREACH'}
                className="btn btn-secondary btn-sm"
                style={{ borderColor: 'rgba(239, 68, 68, 0.4)', color: '#f87171' }}
              >
                <IconAlertTriangle size={15} /> Inject Cost Spiral
              </button>
              <button
                onClick={triggerLatencySpike}
                disabled={systemState === 'SPIRAL' || systemState === 'BREACH'}
                className="btn btn-secondary btn-sm"
                style={{ borderColor: 'rgba(245, 158, 11, 0.4)', color: '#fbbf24' }}
              >
                <IconZap size={15} /> Inject SLO Breach
              </button>
              <button onClick={resetSystem} className="btn btn-secondary btn-sm">
                <IconRefresh size={15} /> Reset
              </button>
            </div>
          </div>

          {/* Metrics Visualization & Realtime Logs */}
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
              gap: '1.5rem',
              marginBottom: '2rem'
            }}
          >
            {/* Latency Gauge Card */}
            <div
              style={{
                padding: '1.25rem',
                borderRadius: 'var(--radius-md)',
                background: 'rgba(15, 23, 42, 0.8)',
                border: '1px solid var(--border-subtle)'
              }}
            >
              <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.5rem', fontSize: '0.85rem' }}>
                <span style={{ color: 'var(--text-secondary)' }}>p99 Span Latency</span>
                <span style={{ fontFamily: 'var(--font-mono)', color: 'var(--accent-cyan)' }}>SLO Target: &lt;500ms</span>
              </div>
              <div style={{ fontFamily: 'var(--font-heading)', fontSize: '2.2rem', fontWeight: 800, color: telemetryVal > 500 ? '#f87171' : '#34d399' }}>
                {telemetryVal} <span style={{ fontSize: '1rem', color: 'var(--text-muted)' }}>ms</span>
              </div>
              {/* Animated Progress Bar */}
              <div style={{ width: '100%', height: '8px', borderRadius: '4px', background: 'rgba(255, 255, 255, 0.08)', overflow: 'hidden', marginTop: '0.75rem' }}>
                <div
                  style={{
                    width: `${Math.min((telemetryVal / 2500) * 100, 100)}%`,
                    height: '100%',
                    background: telemetryVal > 500 ? 'linear-gradient(90deg, #f59e0b, #ef4444)' : 'linear-gradient(90deg, #10b981, #06b6d4)',
                    transition: 'all 0.4s ease'
                  }}
                />
              </div>
            </div>

            {/* LLM Cost Velocity Card */}
            <div
              style={{
                padding: '1.25rem',
                borderRadius: 'var(--radius-md)',
                background: 'rgba(15, 23, 42, 0.8)',
                border: '1px solid var(--border-subtle)'
              }}
            >
              <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.5rem', fontSize: '0.85rem' }}>
                <span style={{ color: 'var(--text-secondary)' }}>Agent Watchdog Token Burn</span>
                <span style={{ fontFamily: 'var(--font-mono)', color: 'var(--accent-violet)' }}>Breaker Threshold: $1.00/m</span>
              </div>
              <div style={{ fontFamily: 'var(--font-heading)', fontSize: '2.2rem', fontWeight: 800, color: costRate > 0.50 ? '#f87171' : '#c4b5fd' }}>
                ${costRate.toFixed(2)} <span style={{ fontSize: '1rem', color: 'var(--text-muted)' }}>/min</span>
              </div>
              <div style={{ width: '100%', height: '8px', borderRadius: '4px', background: 'rgba(255, 255, 255, 0.08)', overflow: 'hidden', marginTop: '0.75rem' }}>
                <div
                  style={{
                    width: `${Math.min((costRate / 2.0) * 100, 100)}%`,
                    height: '100%',
                    background: costRate > 0.50 ? 'linear-gradient(90deg, #f59e0b, #ec4899)' : 'linear-gradient(90deg, #8b5cf6, #38bdf8)',
                    transition: 'all 0.4s ease'
                  }}
                />
              </div>
            </div>
          </div>

          {/* Audit Receipt Section (Appears upon mitigation) */}
          {receipt && (
            <div
              style={{
                padding: '1.25rem',
                borderRadius: 'var(--radius-md)',
                background: 'rgba(16, 185, 129, 0.08)',
                border: '1px solid rgba(16, 185, 129, 0.4)',
                marginBottom: '1.5rem',
                animation: 'fadeIn 0.3s ease-out'
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', marginBottom: '0.75rem' }}>
                <IconShield size={20} color="var(--accent-emerald)" />
                <h4 style={{ fontFamily: 'var(--font-heading)', fontSize: '1.1rem', fontWeight: 700, color: '#34d399' }}>
                  ChronoLens Verified Audit Receipt — "The Outage That Never Happened"
                </h4>
              </div>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))', gap: '1rem', fontSize: '0.88rem', fontFamily: 'var(--font-mono)' }}>
                <div>
                  <span style={{ color: 'var(--text-muted)' }}>Receipt ID:</span>
                  <div style={{ color: '#fff', fontWeight: 600 }}>{receipt.id}</div>
                </div>
                <div>
                  <span style={{ color: 'var(--text-muted)' }}>Reversible Action:</span>
                  <div style={{ color: 'var(--accent-cyan)', fontWeight: 600 }}>{receipt.action}</div>
                </div>
                <div>
                  <span style={{ color: 'var(--text-muted)' }}>Verification Engine:</span>
                  <div style={{ color: '#c4b5fd', fontWeight: 600 }}>{receipt.verifiedBy}</div>
                </div>
              </div>
            </div>
          )}

          {/* Live Telemetry Log Feed */}
          <div style={{ background: '#070a12', borderRadius: 'var(--radius-sm)', padding: '1rem', border: '1px solid var(--border-subtle)' }}>
            <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.78rem', color: 'var(--text-muted)', marginBottom: '0.5rem', textTransform: 'uppercase' }}>
              Live Telemetry Log Stream
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.4rem', fontFamily: 'var(--font-mono)', fontSize: '0.85rem' }}>
              {logs.map((log) => (
                <div
                  key={log.id}
                  style={{
                    color:
                      log.type === 'error'
                        ? '#f87171'
                        : log.type === 'warning'
                        ? '#fbbf24'
                        : log.type === 'success'
                        ? '#34d399'
                        : '#94a3b8'
                  }}
                >
                  <span style={{ color: 'var(--text-muted)', marginRight: '0.5rem' }}>[{log.time}]</span>
                  {log.text}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
