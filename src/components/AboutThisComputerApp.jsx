import React from 'react';
import { personalInfo } from '../data/portfolioData';

export default function AboutThisComputerApp() {
  return (
    <div style={{ fontFamily: 'var(--font-mac-title)', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
      {/* Header Banner */}
      <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', borderBottom: '2px solid #000', paddingBottom: '0.6rem' }}>
        <div style={{ fontSize: '3rem', lineHeight: 1 }}></div>
        <div>
          <h2 style={{ fontSize: '1.8rem', color: '#000', lineHeight: 1 }}>About This Computer</h2>
          <span style={{ fontSize: '1.15rem', color: 'var(--mac-purple-dark)', fontWeight: 'bold' }}>
            System Version: DevOS v2.6 (Arjun Sabu Edition)
          </span>
        </div>
      </div>

      {/* System Specs Box */}
      <div className="mac-group-box">
        <span className="mac-group-label">System Hardware & Core Processor</span>
        <div style={{ marginTop: '0.5rem', display: 'flex', flexDirection: 'column', gap: '0.5rem', fontSize: '1.15rem' }}>
          <div><strong>Built by:</strong> {personalInfo.name} (@{personalInfo.handle})</div>
          <div><strong>Processor:</strong> Full-Stack Core i7 @ AI & Systems Reliability (5+ Yrs Exp)</div>
          <div><strong>Primary Architecture:</strong> Closed-Loop Telemetry & Autonomous Agent Watchdogs</div>
          <div><strong>Largest Unused Block:</strong> Available for High-Impact Systems Engineering</div>
        </div>
      </div>

      {/* Built-In Memory Bar Gauges */}
      <div className="mac-group-box">
        <span className="mac-group-label">Built-in Memory (Tech Stack Allocations)</span>
        <div style={{ marginTop: '0.6rem', display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
          
          <div>
            <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '1.1rem', fontWeight: 'bold' }}>
              <span>Python & OpenTelemetry / SigNoz</span>
              <span>95 MB / 100 MB</span>
            </div>
            <div style={{ height: '12px', background: '#e2e8f0', border: '2px solid #000', borderRadius: '4px', overflow: 'hidden' }}>
              <div style={{ width: '95%', height: '100%', background: 'var(--mac-purple)' }} />
            </div>
          </div>

          <div>
            <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '1.1rem', fontWeight: 'bold' }}>
              <span>React.js / Vite & Modern Pop CSS</span>
              <span>94 MB / 100 MB</span>
            </div>
            <div style={{ height: '12px', background: '#e2e8f0', border: '2px solid #000', borderRadius: '4px', overflow: 'hidden' }}>
              <div style={{ width: '94%', height: '100%', background: 'var(--mac-pink)' }} />
            </div>
          </div>

          <div>
            <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '1.1rem', fontWeight: 'bold' }}>
              <span>Go & Distributed Protocols (CFLS)</span>
              <span>90 MB / 100 MB</span>
            </div>
            <div style={{ height: '12px', background: '#e2e8f0', border: '2px solid #000', borderRadius: '4px', overflow: 'hidden' }}>
              <div style={{ width: '90%', height: '100%', background: 'var(--mac-cyan)' }} />
            </div>
          </div>

          <div>
            <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '1.1rem', fontWeight: 'bold' }}>
              <span>WebCrypto AES-256 Security (Nuvault)</span>
              <span>92 MB / 100 MB</span>
            </div>
            <div style={{ height: '12px', background: '#e2e8f0', border: '2px solid #000', borderRadius: '4px', overflow: 'hidden' }}>
              <div style={{ width: '92%', height: '100%', background: 'var(--mac-lime)' }} />
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
