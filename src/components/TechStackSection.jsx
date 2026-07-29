import React from 'react';

export default function TechStackSection() {
  // Official devicons/devicon repository SVG path map
  const deviconMap = {
    Python: "python/python-original.svg",
    JavaScript: "javascript/javascript-original.svg",
    TypeScript: "typescript/typescript-original.svg",
    Go: "go/go-original.svg",
    "C++": "cplusplus/cplusplus-original.svg",
    React: "react/react-original.svg",
    FastAPI: "fastapi/fastapi-original.svg",
    "Node.js": "nodejs/nodejs-original.svg",
    PyTorch: "pytorch/pytorch-original.svg",
    Docker: "docker/docker-original.svg",
    PostgreSQL: "postgresql/postgresql-original.svg",
    Redis: "redis/redis-original.svg",
    Git: "git/git-original.svg",
    Linux: "linux/linux-original.svg",
    Kubernetes: "kubernetes/kubernetes-original.svg",
    Vite: "vitejs/vitejs-original.svg",
    Bash: "bash/bash-original.svg",
    OpenTelemetry: "opentelemetry/opentelemetry-original.svg",
    gRPC: "grpc/grpc-original.svg"
  };

  const getDeviconUrl = (name) => {
    const path = deviconMap[name];
    if (path) {
      return `https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/${path}`;
    }
    return null;
  };

  // Render official Devicon SVG or fallback
  const renderIcon = (name) => {
    const url = getDeviconUrl(name);
    if (url) {
      return (
        <img
          src={url}
          alt={name}
          style={{
            width: '38px',
            height: '38px',
            objectFit: 'contain'
          }}
          loading="lazy"
        />
      );
    }

    // Fallback for custom tools like SigNoz
    return (
      <svg width="38" height="38" viewBox="0 0 56 56" fill="none">
        <rect width="56" height="56" rx="14" fill="#06B6D4" />
        <path d="M30 7L10 32h16l-4 17 20-25H26l4-17z" fill="#FFF" />
      </svg>
    );
  };

  // Top Row: Tools & Infrastructure
  const toolsRow = ["Docker", "PostgreSQL", "Redis", "Git", "Linux", "SigNoz", "OpenTelemetry", "gRPC", "Vite", "Bash", "Kubernetes"];

  // Bottom Row: Languages & Frameworks
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
          Bi-directional infinite marquee train powered by official <b>devicons/devicon</b> repository vector SVGs.
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
                  background: 'var(--card-bg, #111827)',
                  border: '1px solid var(--border-subtle, #1f2937)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  flexShrink: 0,
                  boxShadow: 'none',
                  transition: 'transform 0.15s ease'
                }}
                className="devicon-svg-card"
                onMouseEnter={(e) => (e.currentTarget.style.transform = 'scale(1.12)')}
                onMouseLeave={(e) => (e.currentTarget.style.transform = 'scale(1)')}
              >
                {renderIcon(name)}
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
                  background: 'var(--card-bg, #111827)',
                  border: '1px solid var(--border-subtle, #1f2937)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  flexShrink: 0,
                  boxShadow: 'none',
                  transition: 'transform 0.15s ease'
                }}
                className="devicon-svg-card"
                onMouseEnter={(e) => (e.currentTarget.style.transform = 'scale(1.12)')}
                onMouseLeave={(e) => (e.currentTarget.style.transform = 'scale(1)')}
              >
                {renderIcon(name)}
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
