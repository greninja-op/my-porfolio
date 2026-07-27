import React from 'react';

export default function ExtensionsManagerApp({ activeExtensions, toggleExtension, resetExtensions }) {
  const extensions = [
    { id: 'Python', name: 'Python.sys', desc: 'Core System Engine (ChronoLens, Memoire)' },
    { id: 'OpenTelemetry', name: 'OpenTelemetry.ext', desc: 'Telemetry & SigNoz Feed Connector (ChronoLens)' },
    { id: 'React', name: 'React.ext', desc: 'Pop Macintosh UI Framework' },
    { id: 'TypeScript', name: 'TypeScript.sys', desc: 'Strict System Type Inspector' },
    { id: 'Go', name: 'Go.sys', desc: 'High-Throughput Stream Protocol (CFLS)' },
    { id: 'WebCrypto', name: 'WebCrypto.ext', desc: 'Zero-Trust Client Security Driver (Nuvault)' },
    { id: 'Docker', name: 'Docker.driver', desc: 'System Container Iso-Manager' }
  ];

  return (
    <div style={{ fontFamily: 'var(--font-mac-title)', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
      <div style={{ borderBottom: '2px solid #000', paddingBottom: '0.5rem', display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap' }}>
        <div>
          <h2 style={{ fontSize: '1.7rem', color: '#000', lineHeight: 1 }}>🧩 Extensions Manager</h2>
          <span style={{ fontSize: '1.05rem', color: 'var(--mac-purple-dark)', fontWeight: 'bold' }}>
            System Driver & Tech Stack Real-Time Project Filter
          </span>
        </div>
        <button onClick={resetExtensions} className="mac-btn mac-btn-lime">
          Enable All Extensions
        </button>
      </div>

      <div className="mac-group-box">
        <span className="mac-group-label">Loaded Extensions Set</span>
        <div style={{ marginTop: '0.6rem', display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
          {extensions.map((ext) => {
            const isEnabled = activeExtensions.includes(ext.id);
            return (
              <div
                key={ext.id}
                onClick={() => toggleExtension(ext.id)}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  padding: '0.5rem 0.75rem',
                  border: '2px solid #000',
                  background: isEnabled ? 'rgba(158, 230, 53, 0.2)' : '#fff',
                  cursor: 'pointer',
                  borderRadius: '4px'
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
                  <div className={`mac-radio ${isEnabled ? 'checked' : ''}`} />
                  <div>
                    <strong style={{ fontSize: '1.15rem' }}>{ext.name}</strong>
                    <div style={{ fontSize: '0.9rem', color: '#555' }}>{ext.desc}</div>
                  </div>
                </div>
                <span
                  style={{
                    background: isEnabled ? 'var(--mac-lime)' : '#eee',
                    border: '1px solid #000',
                    padding: '1px 6px',
                    fontSize: '0.9rem',
                    fontWeight: 'bold'
                  }}
                >
                  {isEnabled ? 'ACTIVE' : 'OFF'}
                </span>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
