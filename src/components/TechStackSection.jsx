import React, { useState } from 'react';

export default function TechStackSection() {
  const [hoveredTool, setHoveredTool] = useState(null);

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

  const toolsRow = ["Docker", "PostgreSQL", "Redis", "Git", "Linux", "SigNoz", "OpenTelemetry", "gRPC", "Vite", "Bash", "Kubernetes"];
  const languagesRow = ["Python", "JavaScript", "TypeScript", "Go", "C++", "React", "FastAPI", "Node.js", "PyTorch"];

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
      <div style={{ maxWidth: '1180px', margin: '0 auto', padding: '0 1rem' }}>
        
        {/* OS PLAYGROUND WINDOW FRAME CONTAINER */}
        <div
          style={{
            background: 'var(--card-bg, #ffffff)',
            border: '2px solid var(--border-subtle, #cbd5e1)',
            borderRadius: '16px',
            overflow: 'hidden',
            boxShadow: '0 12px 35px rgba(0, 0, 0, 0.08)'
          }}
        >
          {/* OS RETRO TITLE BAR HEADER */}
          <div
            style={{
              background: 'var(--code-bg, #f1f5f9)',
              borderBottom: '2px solid var(--border-subtle, #cbd5e1)',
              padding: '0.65rem 1.25rem',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between'
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <span style={{ width: '10px', height: '10px', borderRadius: '50%', background: '#ef4444', display: 'inline-block' }} />
              <span style={{ width: '10px', height: '10px', borderRadius: '50%', background: '#f59e0b', display: 'inline-block' }} />
              <span style={{ width: '10px', height: '10px', borderRadius: '50%', background: '#22c55e', display: 'inline-block' }} />
            </div>

            <div
              style={{
                fontFamily: 'var(--font-mono, monospace)',
                fontSize: '0.82rem',
                fontWeight: 800,
                color: 'var(--text-primary, #0f172a)',
                letterSpacing: '0.05em'
              }}
            >
              TECH_STACK_TRAIN_MARQUEE.SYS — System 7.5
            </div>

            <div style={{ fontSize: '0.75rem', fontFamily: 'var(--font-mono, monospace)', color: 'var(--text-secondary, #64748b)', fontWeight: 700 }}>
              [SPEED: CONSTANT]
            </div>
          </div>

          {/* WINDOW INNER BODY */}
          <div style={{ padding: '2rem 1.75rem' }}>
            
            {/* Section Header */}
            <div style={{ marginBottom: '2rem' }}>
              <div
                style={{
                  fontSize: '0.78rem',
                  textTransform: 'uppercase',
                  letterSpacing: '0.1em',
                  fontWeight: 800,
                  fontFamily: 'var(--font-mono, monospace)',
                  color: 'var(--accent-primary, #06b6d4)',
                  marginBottom: '0.3rem'
                }}
              >
                Section B • Live Infinite Marquee Tickers
              </div>

              <h2
                style={{
                  fontFamily: 'var(--font-heading, system-ui, sans-serif)',
                  fontSize: 'clamp(1.6rem, 3vw, 2.2rem)',
                  fontWeight: 800,
                  color: 'var(--text-primary, #0f172a)',
                  letterSpacing: '-0.025em'
                }}
              >
                Languages Known & Engineering Toolset
              </h2>

              <p style={{ color: 'var(--text-secondary, #64748b)', fontSize: '1rem', marginTop: '0.3rem' }}>
                Hover over any technology icon to pause scrolling and reveal its name tooltip!
              </p>
            </div>

            {/* MARQUEE TRAIN CONTAINER */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.75rem' }}>
              
              {/* TOP ROW: Tools & Infrastructure */}
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
                          background: 'var(--code-bg, #f8fafc)',
                          border: isHovered ? '1.5px solid #38bdf8' : '1.5px solid var(--border-subtle, #e2e8f0)',
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
                              boxShadow: '0 10px 25px rgba(0, 0, 0, 0.5)',
                              pointerEvents: 'none',
                              animation: 'tooltipPop 0.18s cubic-bezier(0.16, 1, 0.3, 1) forwards'
                            }}
                          >
                            {name}
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

              {/* BOTTOM ROW: Languages & Frameworks */}
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
                          background: 'var(--code-bg, #f8fafc)',
                          border: isHovered ? '1.5px solid #38bdf8' : '1.5px solid var(--border-subtle, #e2e8f0)',
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
                              boxShadow: '0 10px 25px rgba(0, 0, 0, 0.5)',
                              pointerEvents: 'none',
                              animation: 'tooltipPop 0.18s cubic-bezier(0.16, 1, 0.3, 1) forwards'
                            }}
                          >
                            {name}
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
