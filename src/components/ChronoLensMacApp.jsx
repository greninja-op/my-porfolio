import React, { useState, useEffect } from 'react';

export default function ChronoLensMacApp() {
  const [volumeLevel, setVolumeLevel] = useState(7);
  const [systemState, setSystemState] = useState('NOMINAL');
  const [costRate, setCostRate] = useState(0.04);
  const [latencyVal, setLatencyVal] = useState(140);
  const [receipt, setReceipt] = useState(null);

  useEffect(() => {
    const timer = setInterval(() => {
      if (systemState === 'NOMINAL') {
        setLatencyVal(Math.floor(130 + Math.random() * 30));
        setCostRate(+(0.03 + Math.random() * 0.02).toFixed(2));
      } else if (systemState === 'SPIRAL') {
        setLatencyVal((prev) => Math.min(prev + 140, 2400));
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
        setLatencyVal(145);
        setCostRate(0.04);
        setReceipt({
          id: 'RCPT-MAC-88492',
          action: 'AGENT_WATCHDOG_HALT',
          costSaved: '$18.40',
          verifiedBy: 'SigNoz Query Builder'
        });
      }, 2500);
    } else {
      setSystemState('BREACH');
      setLatencyVal(2850);
      setTimeout(() => {
        setSystemState('MITIGATED');
        setLatencyVal(150);
        setCostRate(0.04);
        setReceipt({
          id: 'RCPT-MAC-99120',
          action: 'DYNAMIC_TRAFFIC_SHED',
          latencyRestored: '150ms',
          verifiedBy: 'OTel Live Spans'
        });
      }, 2500);
    }
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem', fontFamily: 'var(--font-mac-title)' }}>
      {/* Macintosh Control Panel Header Banner */}
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', borderBottom: '2px solid #000', paddingBottom: '0.75rem' }}>
        <div>
          <h2 style={{ fontSize: '1.6rem', color: '#000' }}>⚡ ChronoLens System 7 Control Panel</h2>
          <span style={{ fontSize: '1.1rem', color: 'var(--mac-purple-dark)' }}>SigNoz AI Reliability Watchdog & SLO Interceptor</span>
        </div>
        <div
          style={{
            background: systemState === 'NOMINAL' ? 'var(--mac-lime)' : systemState === 'MITIGATED' ? 'var(--mac-cyan)' : 'var(--mac-pink)',
            border: '2px solid #000',
            padding: '2px 8px',
            boxShadow: '2px 2px 0px #000',
            fontSize: '1.1rem',
            fontWeight: 'bold'
          }}
        >
          {systemState}
        </div>
      </div>

      {/* Control Sliders & Radio Buttons (Mac System 7 Sound & Mouse Panel style from Image 2!) */}
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
        {/* Left: Speaker & Telemetry Volume Meter */}
        <div className="mac-group-box">
          <span className="mac-group-label">Telemetry Latency Meter</span>
          <div style={{ display: 'flex', alignItems: 'center', gap: '1.5rem', marginTop: '0.75rem' }}>
            {/* Vertical Slider Stack */}
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '4px' }}>
              <span style={{ fontSize: '1rem' }}>2.5s</span>
              <input
                type="range"
                min="1"
                max="10"
                value={volumeLevel}
                onChange={(e) => setVolumeLevel(e.target.value)}
                className="mac-slider"
                style={{ transform: 'rotate(-90deg)', width: '100px', margin: '35px 0' }}
              />
              <span style={{ fontSize: '1rem' }}>0ms</span>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem', flex: 1 }}>
              <div style={{ fontSize: '1.2rem', fontWeight: 'bold' }}>
                Latency: <span style={{ color: latencyVal > 500 ? 'var(--mac-pink)' : 'var(--mac-purple-dark)' }}>{latencyVal} ms</span>
              </div>
              <div style={{ fontSize: '1.2rem', fontWeight: 'bold' }}>
                Burn Rate: <span style={{ color: costRate > 0.5 ? 'var(--mac-pink)' : 'var(--mac-lime)' }}>${costRate.toFixed(2)} /m</span>
              </div>
              <div style={{ fontSize: '1rem', color: '#666', borderTop: '1px solid #000', paddingTop: '4px' }}>
                OTel Spans: 100k/s
              </div>
            </div>
          </div>
        </div>

        {/* Right: Mouse Tracking / Chaos Injection Panel */}
        <div className="mac-group-box">
          <span className="mac-group-label">Chaos Injection Modes</span>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem', marginTop: '0.75rem' }}>
            <button
              onClick={() => triggerChaos('cost')}
              disabled={systemState !== 'NOMINAL' && systemState !== 'MITIGATED'}
              className="mac-btn mac-btn-pink"
              style={{ width: '100%', justifyContent: 'center' }}
            >
              💥 Inject LLM Cost Spiral
            </button>
            <button
              onClick={() => triggerChaos('slo')}
              disabled={systemState !== 'NOMINAL' && systemState !== 'MITIGATED'}
              className="mac-btn mac-btn-purple"
              style={{ width: '100%', justifyContent: 'center' }}
            >
              ⚡ Inject SLO Breach
            </button>
            <button
              onClick={() => setSystemState('NOMINAL')}
              className="mac-btn mac-btn-lime"
              style={{ width: '100%', justifyContent: 'center' }}
            >
              🛡️ Reset Baseline
            </button>
          </div>
        </div>
      </div>

      {/* Audit Receipt Dialog */}
      {receipt && (
        <div
          style={{
            background: 'var(--mac-yellow)',
            border: '2px solid #000',
            boxShadow: '4px 4px 0px #000',
            padding: '1rem'
          }}
        >
          <div style={{ fontWeight: 'bold', fontSize: '1.2rem', marginBottom: '0.2rem' }}>
            📄 System 7 Verification Receipt — "The Outage That Never Happened"
          </div>
          <div style={{ fontSize: '1.05rem', fontFamily: 'var(--font-mono)' }}>
            ID: {receipt.id} | Action: {receipt.action} | Verified By: {receipt.verifiedBy}
          </div>
        </div>
      )}
    </div>
  );
}
