import React from 'react';

export default function TechStackSection() {
  // Full-Bleed 2D SVG Icon Map (Zero Inner Padding, Full 56x56 Rounded Square Badge)
  const renderFullBleedIcon = (name) => {
    switch (name) {
      case "Python":
        return (
          <svg width="56" height="56" viewBox="0 0 56 56" fill="none">
            <rect width="56" height="56" rx="14" fill="#1e293b" />
            <path d="M27.8 11c-7.3 0-6.8 3.1-6.8 3.1v3.3h7.1v1H18.2s-3.7-.4-3.7 6.9 3.1 7 3.1 7h1.9v-2.7c0-3 2.7-3 2.7-3h7.1c2.8 0 2.8-2.7 2.8-2.7V17.2s.8-6.2-6.8-6.2zm-3.5 2.3c.7 0 1.2.5 1.2 1.2s-.5 1.2-1.2 1.2-1.2-.5-1.2-1.2.5-1.2 1.2-1.2z" fill="#3572A5" />
            <path d="M28.2 44c7.3 0 6.8-3.1 6.8-3.1v-3.3h-7.1v-1h9.9s3.7.4 3.7-6.9-3.1-7-3.1-7h-1.9v2.7c0 3-2.7 3-2.7 3h-7.1c-2.8 0-2.8 2.7-2.8 2.7V37.8s-1.3 6.2 6.3 6.2zm3.5-2.3c-.7 0-1.2-.5-1.2-1.2s.5-1.2 1.2-1.2 1.2.5 1.2 1.2-.5 1.2-1.2 1.2z" fill="#FFD43B" />
          </svg>
        );
      case "JavaScript":
        return (
          <svg width="56" height="56" viewBox="0 0 56 56" fill="none">
            <rect width="56" height="56" rx="14" fill="#F7DF1E" />
            <path d="M30 42c1.4.8 3.1 1.4 4.8 1.4 2.3 0 3.7-1 3.7-2.7 0-1.8-1.5-2.5-3.8-3.5l-1.3-.6c-3.6-1.5-5.9-3.4-5.9-7.3 0-5.1 4-8.2 10.1-8.2 2.9 0 5.2.6 6.9 1.7l-2.1 4.8c-1.3-.8-3-1.4-4.8-1.4-2.3 0-3.5 1-3.5 2.5 0 1.7 1.3 2.3 3.6 3.4l1.3.6c4 1.7 6.3 3.6 6.3 7.6 0 5.5-4.2 8.4-10.7 8.4-3.4 0-6.3-.8-8.2-2.1L30 42z" fill="#000" />
            <path d="M19 42c1.3.8 2.9 1.4 4.6 1.4 1.9 0 3.1-.8 3.1-3.1V21.7h-6.2v5h3.6v12.8c0 1.7-.8 2.5-2.5 2.5-.8 0-1.7-.2-2.1-.4l-.5-3.8z" fill="#000" />
          </svg>
        );
      case "TypeScript":
        return (
          <svg width="56" height="56" viewBox="0 0 56 56" fill="none">
            <rect width="56" height="56" rx="14" fill="#3178C6" />
            <path d="M27.5 23.8h-6.7v18.4h-6.1V23.8h-6.7V18.8h19.5v5zm16.4 11.8c0 5.1-4 8.2-10.2 8.2-2.9 0-5.8-.7-7.6-1.8l2-4.9c1.6.9 3.6 1.5 5.6 1.5 2.2 0 3.6-.9 3.6-2.4 0-1.5-1.1-2.2-3.6-3.3l-1.3-.6c-3.8-1.5-5.8-3.3-5.8-7.3 0-4.9 4-8.2 9.8-8.2 2.7 0 5.1.7 6.7 1.5l-1.8 4.7c-1.3-.7-3.1-1.3-4.9-1.3-2 0-3.3.9-3.3 2.2 0 1.5 1.1 2.2 3.3 3.1l1.3.7c4.3 1.8 6.4 3.8 6.4 8z" fill="#FFF" />
          </svg>
        );
      case "Go":
        return (
          <svg width="56" height="56" viewBox="0 0 56 56" fill="none">
            <rect width="56" height="56" rx="14" fill="#00ADD8" />
            <circle cx="18" cy="28" r="3.5" fill="#FFF" />
            <circle cx="38" cy="28" r="3.5" fill="#FFF" />
            <path d="M28 16c7.7 0 14 6.3 14 14s-6.3 14-14 14-14-6.3-14-14 6.3-14 14-14zm0 5c-5 0-9 4-9 9s4 9 9 9 9-4 9-9-4-9-9-9z" fill="#FFF" />
          </svg>
        );
      case "C++":
        return (
          <svg width="56" height="56" viewBox="0 0 56 56" fill="none">
            <rect width="56" height="56" rx="14" fill="#00599C" />
            <path d="M28 10l15.2 8.8v17.4L28 45l-15.2-8.8V18.8L28 10zm0 5.3L17.5 21.4v13.2L28 40.6l10.5-6V21.4L28 15.3z" fill="#FFF" />
            <path d="M32.5 25h3.5v-3.5H39V25h3.5v3.5H39V32h-3.5v-3.5H32.5V25z" fill="#FFF" />
          </svg>
        );
      case "React":
        return (
          <svg width="56" height="56" viewBox="0 0 56 56" fill="none">
            <rect width="56" height="56" rx="14" fill="#20232A" />
            <ellipse cx="28" cy="28" rx="18" ry="7" stroke="#61DAFB" strokeWidth="2.5" transform="rotate(30 28 28)" />
            <ellipse cx="28" cy="28" rx="18" ry="7" stroke="#61DAFB" strokeWidth="2.5" transform="rotate(90 28 28)" />
            <ellipse cx="28" cy="28" rx="18" ry="7" stroke="#61DAFB" strokeWidth="2.5" transform="rotate(150 28 28)" />
            <circle cx="28" cy="28" r="3.5" fill="#61DAFB" />
          </svg>
        );
      case "FastAPI":
        return (
          <svg width="56" height="56" viewBox="0 0 56 56" fill="none">
            <rect width="56" height="56" rx="14" fill="#059669" />
            <path d="M30 7L10 32h16l-4 17 20-25H26l4-17z" stroke="#FFF" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round" fill="none" />
          </svg>
        );
      case "Node.js":
        return (
          <svg width="56" height="56" viewBox="0 0 56 56" fill="none">
            <rect width="56" height="56" rx="14" fill="#339933" />
            <path d="M28 8L10 18v20l18 10 18-10V18L28 8zm0 5.5l12.5 7.1v14.8L28 42.5l-12.5-7.1V20.6L28 13.5z" fill="#FFF" />
          </svg>
        );
      case "PyTorch":
        return (
          <svg width="56" height="56" viewBox="0 0 56 56" fill="none">
            <rect width="56" height="56" rx="14" fill="#EE4C2C" />
            <path d="M34 12l-6 10v18l12-12V12h-6z" fill="#FFF" />
            <circle cx="24" cy="20" r="4" fill="#FFF" />
          </svg>
        );
      case "Docker":
        return (
          <svg width="56" height="56" viewBox="0 0 56 56" fill="none">
            <rect width="56" height="56" rx="14" fill="#2496ED" />
            <path d="M14 32h5v-5h-5v5zm7 0h5v-5h-5v5zm7 0h5v-5h-5v5zm-14-7h5v-5h-5v5zm7 0h5v-5h-5v5zm7 0h5v-5h-5v5zm7 7h5v-5h-5v5zm0-7h5v-5h-5v5zM7 37c1 3.5 4.5 7 11.5 7 14 0 21-8 21-15 0-.5 0-1 0-1.4 2.3-1.6 3.5-3.2 3.5-3.2-1.8.2-3.7 0-4.6-.4-.9-.9-1.4-2.3-1.4-2.3-1.8 1.1-5.1.9-7.2 0C26.8 20.3 23.3 23.3 23.3 23.3H7v13.7z" fill="#FFF" />
          </svg>
        );
      case "PostgreSQL":
        return (
          <svg width="56" height="56" viewBox="0 0 56 56" fill="none">
            <rect width="56" height="56" rx="14" fill="#336791" />
            <path d="M28 10c-9.9 0-18 8.1-18 18s8.1 18 18 18 18-8.1 18-18-8.1-18-18-18zm0 5c7.2 0 13 5.8 13 13s-5.8 13-13 13-13-5.8-13-13 5.8-13 13-13z" fill="#FFF" />
            <circle cx="28" cy="28" r="6.5" fill="#FFF" />
          </svg>
        );
      case "Redis":
        return (
          <svg width="56" height="56" viewBox="0 0 56 56" fill="none">
            <rect width="56" height="56" rx="14" fill="#DC382D" />
            <path d="M14 18l14-7 14 7-14 7-14-7zm0 9l14 7 14-7v4.5l-14 7-14-7V27zm0 9l14 7 14-7v4.5l-14 7-14-7V36z" fill="#FFF" />
          </svg>
        );
      case "Git":
        return (
          <svg width="56" height="56" viewBox="0 0 56 56" fill="none">
            <rect width="56" height="56" rx="14" fill="#F05032" />
            <path d="M43.8 25L26.3 7.5c-1-.1-2.3-.1-3.3.9L5.5 25.9c-1 1-1 2.3 0 3.3l17.5 17.5c1 1 2.3 1 3.3 0l17.5-17.5c.9-1 .9-2.4 0-3.4zM28 38.5c-1.9 0-3.5-1.6-3.5-3.5s1.6-3.5 3.5-3.5 3.5 1.6 3.5 3.5-1.6 3.5-3.5 3.5zm-5.8-9.3c-1.9 0-3.5-1.6-3.5-3.5s1.6-3.5 3.5-3.5 3.5 1.6 3.5 3.5-1.6 3.5-3.5 3.5z" fill="#FFF" />
          </svg>
        );
      case "Linux":
        return (
          <svg width="56" height="56" viewBox="0 0 56 56" fill="none">
            <rect width="56" height="56" rx="14" fill="#FCC624" />
            <path d="M28 7c-5.8 0-9.3 4.7-9.3 11.7v11.7c0 4.7 3.5 9.3 9.3 9.3s9.3-4.7 9.3-9.3V18.7C37.3 11.7 33.8 7 28 7z" fill="#000" />
            <circle cx="23.3" cy="16.3" r="2.3" fill="#FFF" />
            <circle cx="32.7" cy="16.3" r="2.3" fill="#FFF" />
            <path d="M21 42l-4.7 7h23.3l-4.7-7H21z" fill="#E95420" />
          </svg>
        );
      case "SigNoz":
        return (
          <svg width="56" height="56" viewBox="0 0 56 56" fill="none">
            <rect width="56" height="56" rx="14" fill="#06B6D4" />
            <path d="M30 7L10 32h16l-4 17 20-25H26l4-17z" fill="#FFF" />
          </svg>
        );
      case "OpenTelemetry":
        return (
          <svg width="56" height="56" viewBox="0 0 56 56" fill="none">
            <rect width="56" height="56" rx="14" fill="#F59E0B" />
            <circle cx="28" cy="28" r="14" stroke="#FFF" strokeWidth="4" />
            <path d="M28 14v14l9.3 9.3" stroke="#FFF" strokeWidth="4" strokeLinecap="round" />
          </svg>
        );
      case "gRPC":
        return (
          <svg width="56" height="56" viewBox="0 0 56 56" fill="none">
            <rect width="56" height="56" rx="14" fill="#244C5A" />
            <path d="M16 28h24M28 16v24" stroke="#4285F4" strokeWidth="5" strokeLinecap="round" />
            <circle cx="28" cy="28" r="7" fill="#34A853" />
          </svg>
        );
      case "Vite":
        return (
          <svg width="56" height="56" viewBox="0 0 56 56" fill="none">
            <rect width="56" height="56" rx="14" fill="#646CFF" />
            <path d="M28 7l18.7 32.7L28 49 9.3 39.7 28 7z" fill="#FFD43B" />
          </svg>
        );
      case "Bash":
        return (
          <svg width="56" height="56" viewBox="0 0 56 56" fill="none">
            <rect width="56" height="56" rx="14" fill="#4E5A65" />
            <path d="M14 18l10 10-10 10M28 38h14" stroke="#FFF" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        );
      case "WebCrypto":
        return (
          <svg width="56" height="56" viewBox="0 0 56 56" fill="none">
            <rect width="56" height="56" rx="14" fill="#8B5CF6" />
            <rect x="16" y="24" width="24" height="20" rx="4" fill="#FFF" />
            <path d="M21 24v-6a7 7 0 0 1 14 0v6" stroke="#FFF" strokeWidth="4" fill="none" strokeLinecap="round" />
          </svg>
        );
      case "Kubernetes":
        return (
          <svg width="56" height="56" viewBox="0 0 56 56" fill="none">
            <rect width="56" height="56" rx="14" fill="#326CE5" />
            <circle cx="28" cy="28" r="14" stroke="#FFF" strokeWidth="3" />
            <circle cx="28" cy="28" r="5" fill="#FFF" />
          </svg>
        );
      default:
        return (
          <svg width="56" height="56" viewBox="0 0 56 56" fill="none">
            <rect width="56" height="56" rx="14" fill="#06B6D4" />
            <path d="M18 28h20M28 18v20" stroke="#FFF" strokeWidth="4" strokeLinecap="round" />
          </svg>
        );
    }
  };

  // Top Row: Tools & Infrastructure (Moving Left to Right)
  const toolsRow = ["Docker", "PostgreSQL", "Redis", "Git", "Linux", "SigNoz", "OpenTelemetry", "gRPC", "Vite", "Bash", "WebCrypto", "Kubernetes"];

  // Bottom Row: Languages & Frameworks (Moving Right to Left)
  const languagesRow = ["Python", "JavaScript", "TypeScript", "Go", "C++", "React", "FastAPI", "Node.js", "PyTorch"];

  // Duplicate arrays for smooth 100% infinite marquee loop
  const topMarqueeItems = [...toolsRow, ...toolsRow, ...toolsRow, ...toolsRow];
  const bottomMarqueeItems = [...languagesRow, ...languagesRow, ...languagesRow, ...languagesRow];

  return (
    <section
      id="tech-stack"
      style={{
        padding: '4rem 0',
        overflow: 'hidden'
      }}
    >
      {/* Section Header */}
      <div style={{ maxWidth: '1180px', margin: '0 auto 2.5rem auto', padding: '0 1.5rem' }}>
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
          Section B • Live Infinite Marquee Tickers
        </div>

        <h2
          style={{
            fontFamily: 'var(--font-heading, system-ui, sans-serif)',
            fontSize: 'clamp(1.8rem, 3.5vw, 2.5rem)',
            fontWeight: 800,
            color: 'var(--text-primary, #ffffff)',
            letterSpacing: '-0.025em'
          }}
        >
          Languages Known & Engineering Toolset
        </h2>

        <p style={{ color: 'var(--text-secondary, #94a3b8)', fontSize: '1.05rem', marginTop: '0.4rem', maxWidth: '650px' }}>
          Bi-directional infinite marquee train with full-bleed 2D vector logos and zero drop shadows.
        </p>
      </div>

      {/* Marquee Train Container */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
        
        {/* TOP ROW: Tools & Infrastructure (Moving Left to Right at steady constant speed) */}
        <div style={{ overflow: 'hidden', width: '100%', position: 'relative' }}>
          <div
            style={{
              display: 'flex',
              gap: '1rem',
              width: 'max-content',
              animation: 'marqueeLeftToRight 28s linear infinite',
              willChange: 'transform'
            }}
          >
            {topMarqueeItems.map((name, idx) => (
              <div
                key={idx}
                title={name}
                style={{
                  width: '56px',
                  height: '56px',
                  borderRadius: '14px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  flexShrink: 0,
                  boxShadow: 'none',
                  border: 'none',
                  transition: 'transform 0.15s ease'
                }}
                className="full-bleed-svg-card"
                onMouseEnter={(e) => (e.currentTarget.style.transform = 'scale(1.12)')}
                onMouseLeave={(e) => (e.currentTarget.style.transform = 'scale(1)')}
              >
                {renderFullBleedIcon(name)}
              </div>
            ))}
          </div>
        </div>

        {/* BOTTOM ROW: Languages & Frameworks (Moving Right to Left at steady constant speed) */}
        <div style={{ overflow: 'hidden', width: '100%', position: 'relative' }}>
          <div
            style={{
              display: 'flex',
              gap: '1rem',
              width: 'max-content',
              animation: 'marqueeRightToLeft 24s linear infinite',
              willChange: 'transform'
            }}
          >
            {bottomMarqueeItems.map((name, idx) => (
              <div
                key={idx}
                title={name}
                style={{
                  width: '56px',
                  height: '56px',
                  borderRadius: '14px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  flexShrink: 0,
                  boxShadow: 'none',
                  border: 'none',
                  transition: 'transform 0.15s ease'
                }}
                className="full-bleed-svg-card"
                onMouseEnter={(e) => (e.currentTarget.style.transform = 'scale(1.12)')}
                onMouseLeave={(e) => (e.currentTarget.style.transform = 'scale(1)')}
              >
                {renderFullBleedIcon(name)}
              </div>
            ))}
          </div>
        </div>

      </div>

      {/* Marquee Keyframe Animations */}
      <style>{`
        @keyframes marqueeRightToLeft {
          0% { transform: translateX(0%); }
          100% { transform: translateX(-50%); }
        }
        @keyframes marqueeLeftToRight {
          0% { transform: translateX(-50%); }
          100% { transform: translateX(0%); }
        }
      `}</style>
    </section>
  );
}
