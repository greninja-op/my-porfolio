import React from 'react';
import { IconSparkles, IconTerminal, IconCode, IconShield, IconArrowRight, IconX } from './Icons';

export default function VisitorGatewayModal({ onSelectMode, onCloseGateway, currentMode }) {
  return (
    <div
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: 9999,
        background: 'rgba(9, 11, 20, 0.85)',
        backdropFilter: 'blur(20px)',
        WebkitBackdropFilter: 'blur(20px)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '1.5rem',
        animation: 'fadeIn 0.3s cubic-bezier(0.16, 1, 0.3, 1)'
      }}
    >
      <div
        style={{
          width: '100%',
          maxWidth: '920px',
          background: 'linear-gradient(145deg, rgba(26, 31, 55, 0.95) 0%, rgba(15, 18, 35, 0.98) 100%)',
          borderRadius: '24px',
          border: '1px solid rgba(139, 92, 246, 0.3)',
          boxShadow: '0 25px 60px -15px rgba(0, 0, 0, 0.7), 0 0 40px rgba(139, 92, 246, 0.25)',
          overflow: 'hidden',
          position: 'relative'
        }}
      >
        {/* Decorative Top Ambient Glow */}
        <div
          style={{
            position: 'absolute',
            top: '-100px',
            left: '50%',
            transform: 'translateX(-50%)',
            width: '400px',
            height: '200px',
            background: 'radial-gradient(circle, rgba(139, 92, 246, 0.3) 0%, rgba(6, 182, 212, 0.15) 50%, transparent 80%)',
            pointerEvents: 'none',
            filter: 'blur(40px)'
          }}
        />

        {/* Optional Close button if modal re-opened from existing session */}
        {currentMode && currentMode !== 'gateway' && (
          <button
            onClick={onCloseGateway}
            style={{
              position: 'absolute',
              top: '1.25rem',
              right: '1.25rem',
              background: 'rgba(255, 255, 255, 0.08)',
              border: '1px solid rgba(255, 255, 255, 0.15)',
              borderRadius: '50%',
              width: '36px',
              height: '36px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: '#fff',
              cursor: 'pointer',
              zIndex: 10,
              transition: 'all 0.2s ease'
            }}
          >
            <IconX size={18} />
          </button>
        )}

        {/* Header Section */}
        <div
          style={{
            padding: '2.5rem 2.5rem 1.5rem 2.5rem',
            textAlign: 'center',
            position: 'relative',
            zIndex: 2
          }}
        >
          <div
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.5rem',
              padding: '0.4rem 1.1rem',
              borderRadius: '9999px',
              background: 'rgba(139, 92, 246, 0.15)',
              border: '1px solid rgba(139, 92, 246, 0.4)',
              color: '#a78bfa',
              fontSize: '0.85rem',
              fontWeight: 600,
              marginBottom: '1rem'
            }}
          >
            <IconSparkles size={16} /> Welcome to Arjun's Portfolio & Interactive OS
          </div>

          <h2
            style={{
              fontFamily: 'var(--font-heading, system-ui, sans-serif)',
              fontSize: 'clamp(1.8rem, 3.5vw, 2.6rem)',
              fontWeight: 800,
              color: '#ffffff',
              lineHeight: 1.2,
              marginBottom: '0.75rem',
              letterSpacing: '-0.02em'
            }}
          >
            How would you like to explore today?
          </h2>

          <p
            style={{
              color: '#94a3b8',
              fontSize: '1.05rem',
              maxWidth: '620px',
              margin: '0 auto',
              lineHeight: 1.5
            }}
          >
            Choose your preferred experience below. You can switch between views anytime with one click!
          </p>
        </div>

        {/* Options Cards Grid */}
        <div
          style={{
            padding: '0 2.5rem 2.5rem 2.5rem',
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '1.5rem',
            position: 'relative',
            zIndex: 2
          }}
        >
          {/* Card 1: Recruiter View */}
          <div
            onClick={() => onSelectMode('recruiter')}
            style={{
              background: 'rgba(255, 255, 255, 0.03)',
              border: '1px solid rgba(255, 255, 255, 0.12)',
              borderRadius: '18px',
              padding: '2rem',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
              cursor: 'pointer',
              transition: 'all 0.3s cubic-bezier(0.16, 1, 0.3, 1)',
              position: 'relative',
              overflow: 'hidden'
            }}
            className="gateway-card recruiter-card"
            onMouseEnter={(e) => {
              e.currentTarget.style.borderColor = 'rgba(6, 182, 212, 0.6)';
              e.currentTarget.style.background = 'rgba(6, 182, 212, 0.06)';
              e.currentTarget.style.transform = 'translateY(-4px)';
              e.currentTarget.style.boxShadow = '0 15px 35px rgba(6, 182, 212, 0.15)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.12)';
              e.currentTarget.style.background = 'rgba(255, 255, 255, 0.03)';
              e.currentTarget.style.transform = 'translateY(0)';
              e.currentTarget.style.boxShadow = 'none';
            }}
          >
            <div>
              <div
                style={{
                  width: '52px',
                  height: '52px',
                  borderRadius: '14px',
                  background: 'linear-gradient(135deg, rgba(6, 182, 212, 0.2) 0%, rgba(59, 130, 246, 0.3) 100%)',
                  border: '1px solid rgba(6, 182, 212, 0.4)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '1.6rem',
                  marginBottom: '1.25rem'
                }}
              >
                👔
              </div>

              <div
                style={{
                  fontSize: '0.75rem',
                  textTransform: 'uppercase',
                  letterSpacing: '0.08em',
                  fontWeight: 700,
                  color: '#38bdf8',
                  marginBottom: '0.4rem'
                }}
              >
                Fast & Minimalist
              </div>

              <h3
                style={{
                  fontSize: '1.4rem',
                  fontWeight: 700,
                  color: '#ffffff',
                  marginBottom: '0.6rem'
                }}
              >
                I am a Recruiter
              </h3>

              <p
                style={{
                  color: '#94a3b8',
                  fontSize: '0.95rem',
                  lineHeight: 1.5,
                  marginBottom: '1.5rem'
                }}
              >
                Clean, modern, and creative portfolio view tailored for fast evaluation. Direct access to 1-minute summary, resume, key project metrics & skills.
              </p>

              {/* Feature Pills */}
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem', marginBottom: '1.75rem' }}>
                <span
                  style={{
                    fontSize: '0.78rem',
                    padding: '0.25rem 0.65rem',
                    borderRadius: '6px',
                    background: 'rgba(255, 255, 255, 0.06)',
                    color: '#e2e8f0',
                    border: '1px solid rgba(255, 255, 255, 0.1)'
                  }}
                >
                  ⚡ SigNoz Winner
                </span>
                <span
                  style={{
                    fontSize: '0.78rem',
                    padding: '0.25rem 0.65rem',
                    borderRadius: '6px',
                    background: 'rgba(255, 255, 255, 0.06)',
                    color: '#e2e8f0',
                    border: '1px solid rgba(255, 255, 255, 0.1)'
                  }}
                >
                  📄 1-Click Resume
                </span>
                <span
                  style={{
                    fontSize: '0.78rem',
                    padding: '0.25rem 0.65rem',
                    borderRadius: '6px',
                    background: 'rgba(255, 255, 255, 0.06)',
                    color: '#e2e8f0',
                    border: '1px solid rgba(255, 255, 255, 0.1)'
                  }}
                >
                  🧠 AI & Observability
                </span>
              </div>
            </div>

            <button
              style={{
                width: '100%',
                padding: '0.85rem 1.25rem',
                borderRadius: '12px',
                background: 'linear-gradient(135deg, #06b6d4 0%, #3b82f6 100%)',
                color: '#ffffff',
                border: 'none',
                fontWeight: 700,
                fontSize: '0.95rem',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '0.5rem',
                cursor: 'pointer',
                boxShadow: '0 4px 15px rgba(6, 182, 212, 0.3)'
              }}
            >
              Open Recruiter Portfolio <IconArrowRight size={18} />
            </button>
          </div>

          {/* Card 2: Interactive OS Experience */}
          <div
            onClick={() => onSelectMode('os')}
            style={{
              background: 'rgba(255, 255, 255, 0.03)',
              border: '1px solid rgba(255, 255, 255, 0.12)',
              borderRadius: '18px',
              padding: '2rem',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
              cursor: 'pointer',
              transition: 'all 0.3s cubic-bezier(0.16, 1, 0.3, 1)',
              position: 'relative',
              overflow: 'hidden'
            }}
            className="gateway-card os-card"
            onMouseEnter={(e) => {
              e.currentTarget.style.borderColor = 'rgba(139, 92, 246, 0.6)';
              e.currentTarget.style.background = 'rgba(139, 92, 246, 0.06)';
              e.currentTarget.style.transform = 'translateY(-4px)';
              e.currentTarget.style.boxShadow = '0 15px 35px rgba(139, 92, 246, 0.2)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.12)';
              e.currentTarget.style.background = 'rgba(255, 255, 255, 0.03)';
              e.currentTarget.style.transform = 'translateY(0)';
              e.currentTarget.style.boxShadow = 'none';
            }}
          >
            <div>
              <div
                style={{
                  width: '52px',
                  height: '52px',
                  borderRadius: '14px',
                  background: 'linear-gradient(135deg, rgba(139, 92, 246, 0.25) 0%, rgba(236, 72, 153, 0.25) 100%)',
                  border: '1px solid rgba(139, 92, 246, 0.4)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '1.6rem',
                  marginBottom: '1.25rem'
                }}
              >
                🖥️
              </div>

              <div
                style={{
                  fontSize: '0.75rem',
                  textTransform: 'uppercase',
                  letterSpacing: '0.08em',
                  fontWeight: 700,
                  color: '#c084fc',
                  marginBottom: '0.4rem'
                }}
              >
                Interactive Playground
              </div>

              <h3
                style={{
                  fontSize: '1.4rem',
                  fontWeight: 700,
                  color: '#ffffff',
                  marginBottom: '0.6rem'
                }}
              >
                Just Visiting / Exploring
              </h3>

              <p
                style={{
                  color: '#94a3b8',
                  fontSize: '0.95rem',
                  lineHeight: 1.5,
                  marginBottom: '1.5rem'
                }}
              >
                Step into Arjun's custom System 7 / CyberPop interactive OS environment with multi-window desktop apps, live CLI terminal, retro games & chaos lab.
              </p>

              {/* Feature Pills */}
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem', marginBottom: '1.75rem' }}>
                <span
                  style={{
                    fontSize: '0.78rem',
                    padding: '0.25rem 0.65rem',
                    borderRadius: '6px',
                    background: 'rgba(255, 255, 255, 0.06)',
                    color: '#e2e8f0',
                    border: '1px solid rgba(255, 255, 255, 0.1)'
                  }}
                >
                  🖥️ System 7 Desktop OS
                </span>
                <span
                  style={{
                    fontSize: '0.78rem',
                    padding: '0.25rem 0.65rem',
                    borderRadius: '6px',
                    background: 'rgba(255, 255, 255, 0.06)',
                    color: '#e2e8f0',
                    border: '1px solid rgba(255, 255, 255, 0.1)'
                  }}
                >
                  💻 Live Terminal CLI
                </span>
                <span
                  style={{
                    fontSize: '0.78rem',
                    padding: '0.25rem 0.65rem',
                    borderRadius: '6px',
                    background: 'rgba(255, 255, 255, 0.06)',
                    color: '#e2e8f0',
                    border: '1px solid rgba(255, 255, 255, 0.1)'
                  }}
                >
                  🎮 Retro Mini-Apps
                </span>
              </div>
            </div>

            <button
              style={{
                width: '100%',
                padding: '0.85rem 1.25rem',
                borderRadius: '12px',
                background: 'linear-gradient(135deg, #8b5cf6 0%, #ec4899 100%)',
                color: '#ffffff',
                border: 'none',
                fontWeight: 700,
                fontSize: '0.95rem',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '0.5rem',
                cursor: 'pointer',
                boxShadow: '0 4px 15px rgba(139, 92, 246, 0.3)'
              }}
            >
              Launch Interactive OS Playground <IconArrowRight size={18} />
            </button>
          </div>
        </div>

        {/* Footer info banner inside gateway */}
        <div
          style={{
            padding: '1rem 2.5rem',
            background: 'rgba(0, 0, 0, 0.2)',
            borderTop: '1px solid rgba(255, 255, 255, 0.06)',
            textAlign: 'center',
            fontSize: '0.85rem',
            color: '#64748b',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '0.5rem'
          }}
        >
          <span>Tip: You can switch modes at any time using the mode toggle in the top menu bar!</span>
        </div>
      </div>
    </div>
  );
}
