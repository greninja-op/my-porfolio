import React from 'react';

export default function SystemBombDialog({ isOpen, onRestart }) {
  if (!isOpen) return null;

  return (
    <div
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        background: 'rgba(0,0,0,0.65)',
        zIndex: 9999,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        fontFamily: 'var(--font-mac-title)'
      }}
    >
      <div
        style={{
          background: '#ffffff',
          border: '3px solid #000000',
          boxShadow: '6px 6px 0px #000000',
          maxWidth: '480px',
          width: '90%',
          padding: '1.5rem',
          borderRadius: '6px',
          display: 'flex',
          flexDirection: 'column',
          gap: '1rem',
          animation: 'bombPop 0.15s ease-out'
        }}
      >
        <div style={{ display: 'flex', alignItems: 'flex-start', gap: '1rem' }}>
          <div style={{ fontSize: '3.2rem', lineHeight: 1 }}>💣</div>
          <div>
            <h3 style={{ fontSize: '1.5rem', color: '#000', marginBottom: '0.4rem' }}>
              System Error Type 11
            </h3>
            <p style={{ fontFamily: 'var(--font-mac-body)', fontSize: '0.98rem', lineHeight: 1.5, color: '#111' }}>
              Sorry, a system error of type 11 has occurred.
              <br /><br />
              <strong>Relax! No actual bugs here.</strong> Arjun Sabu enforces 100% clean code standards, comprehensive unit tests, and robust error handling across all builds.
            </p>
          </div>
        </div>

        <div style={{ display: 'flex', justifyContent: 'flex-end', gap: '0.75rem', paddingTop: '0.5rem', borderTop: '2px solid #000' }}>
          <button onClick={onRestart} className="mac-btn mac-btn-purple">
            Restart System (Clean Code)
          </button>
        </div>
      </div>

      <style>{`
        @keyframes bombPop {
          from { transform: scale(0.85); opacity: 0; }
          to { transform: scale(1); opacity: 1; }
        }
      `}</style>
    </div>
  );
}
