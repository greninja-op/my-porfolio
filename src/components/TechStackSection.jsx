import React, { useState } from 'react';

export default function TechStackSection() {
  const [hoveredTool, setHoveredTool] = useState(null); // { row: 'top'|'bottom', index: number, name: string }

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
          Hover over any technology icon to pause scrolling and reveal its name tooltip!
        </p>
      </div>

      {/* Marquee Train Container */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
        
        {/* TOP ROW: Tools & Infrastructure (Moving Left to Right) */}
        <div style={{ width: '100%', position: 'relative' }}>
          <div
            style={{
              display: 'flex',
              gap: '1rem',
              width: 'max-content',
              animation: 'marqueeLeftToRight 28s linear infinite',
              animationPlayState: hoveredTool?.row === 'top' ? 'paused' : 'running',
              willChange: 'transform'
            }}
          >
            {topMarqueeItems.map((name, idx) => {
              const isHovered = hoveredTool?.row === 'top' && hoveredTool?.index === idx;
              return (
                <div
                  key={idx}
                  style={{
                    position: 'relative',
                    width: '56px',
                    height: '56px',
                    borderRadius: '14px',
                    background: 'var(--card-bg, #111827)',
                    border: isHovered ? '1px solid #38bdf8' : '1px solid var(--border-subtle, #1f2937)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexShrink: 0,
                    cursor: 'pointer',
                    transform: isHovered ? 'scale(1.18)' : 'scale(1)',
                    transition: 'transform 0.2s cubic-bezier(0.16, 1, 0.3, 1), border-color 0.2s ease',
                    zIndex: isHovered ? 100 : 1
                  }}
                  onMouseEnter={() => setHoveredTool({ row: 'top', index: idx, name })}
                  onMouseLeave={() => setHoveredTool(null)}
                >
                  {/* Popup Tooltip Bubble */}
                  {isHovered && (
                    <div
                      style={{
                        position: 'absolute',
                        top: '-46px',
                        left: '50%',
                        transform: 'translateX(-50%)',
                        background: '#0f172a',
                        border: '1px solid #38bdf8',
                        color: '#ffffff',
                        fontSize: '0.78rem',
                        fontWeight: 800,
                        fontFamily: 'var(--font-mono, monospace)',
                        padding: '0.35rem 0.75rem',
                        borderRadius: '8px',
                        whiteSpace: 'nowrap',
                        boxShadow: '0 10px 25px rgba(0, 0, 0, 0.5), 0 0 15px rgba(56, 189, 248, 0.2)',
                        pointerEvents: 'none',
                        animation: 'tooltipPop 0.18s cubic-bezier(0.16, 1, 0.3, 1) forwards'
                      }}
                    >
                      {name}
                      {/* Arrow Notch */}
                      <div
                        style={{
                          position: 'absolute',
                          bottom: '-5px',
                          left: '50%',
                          transform: 'translateX(-50%) rotate(45deg)',
                          width: '8px',
                          height: '8px',
                          background: '#0f172a',
                          borderRight: '1px solid #38bdf8',
                          borderBottom: '1px solid #38bdf8'
                        }}
                      />
                    </div>
                  )}

                  {renderIcon(name)}
                </div>
              );
            })}
          </div>
        </div>

        {/* BOTTOM ROW: Languages & Frameworks (Moving Right to Left) */}
        <div style={{ width: '100%', position: 'relative' }}>
          <div
            style={{
              display: 'flex',
              gap: '1rem',
              width: 'max-content',
              animation: 'marqueeRightToLeft 24s linear infinite',
              animationPlayState: hoveredTool?.row === 'bottom' ? 'paused' : 'running',
              willChange: 'transform'
            }}
          >
            {bottomMarqueeItems.map((name, idx) => {
              const isHovered = hoveredTool?.row === 'bottom' && hoveredTool?.index === idx;
              return (
                <div
                  key={idx}
                  style={{
                    position: 'relative',
                    width: '56px',
                    height: '56px',
                    borderRadius: '14px',
                    background: 'var(--card-bg, #111827)',
                    border: isHovered ? '1px solid #38bdf8' : '1px solid var(--border-subtle, #1f2937)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexShrink: 0,
                    cursor: 'pointer',
                    transform: isHovered ? 'scale(1.18)' : 'scale(1)',
                    transition: 'transform 0.2s cubic-bezier(0.16, 1, 0.3, 1), border-color 0.2s ease',
                    zIndex: isHovered ? 100 : 1
                  }}
                  onMouseEnter={() => setHoveredTool({ row: 'bottom', index: idx, name })}
                  onMouseLeave={() => setHoveredTool(null)}
                >
                  {/* Popup Tooltip Bubble */}
                  {isHovered && (
                    <div
                      style={{
                        position: 'absolute',
                        top: '-46px',
                        left: '50%',
                        transform: 'translateX(-50%)',
                        background: '#0f172a',
                        border: '1px solid #38bdf8',
                        color: '#ffffff',
                        fontSize: '0.78rem',
                        fontWeight: 800,
                        fontFamily: 'var(--font-mono, monospace)',
                        padding: '0.35rem 0.75rem',
                        borderRadius: '8px',
                        whiteSpace: 'nowrap',
                        boxShadow: '0 10px 25px rgba(0, 0, 0, 0.5), 0 0 15px rgba(56, 189, 248, 0.2)',
                        pointerEvents: 'none',
                        animation: 'tooltipPop 0.18s cubic-bezier(0.16, 1, 0.3, 1) forwards'
                      }}
                    >
                      {name}
                      {/* Arrow Notch */}
                      <div
                        style={{
                          position: 'absolute',
                          bottom: '-5px',
                          left: '50%',
                          transform: 'translateX(-50%) rotate(45deg)',
                          width: '8px',
                          height: '8px',
                          background: '#0f172a',
                          borderRight: '1px solid #38bdf8',
                          borderBottom: '1px solid #38bdf8'
                        }}
                      />
                    </div>
                  )}

                  {renderIcon(name)}
                </div>
              );
            })}
          </div>
        </div>

      </div>

      {/* Animations */}
      <style>{`
        @keyframes marqueeRightToLeft {
          0% { transform: translateX(0%); }
          100% { transform: translateX(-50%); }
        }
        @keyframes marqueeLeftToRight {
          0% { transform: translateX(-50%); }
          100% { transform: translateX(0%); }
        }
        @keyframes tooltipPop {
          0% { opacity: 0; transform: translateX(-50%) translateY(6px) scale(0.92); }
          100% { opacity: 1; transform: translateX(-50%) translateY(0px) scale(1); }
        }
      `}</style>
    </section>
  );
}
