import React, { useState } from 'react';
import MacWindowWrapper from './MacWindowWrapper';
import { playRetroClick } from '../utils/sound';

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
    <section id="tech-stack" style={{ overflow: 'hidden' }}>
      <MacWindowWrapper
        title="Languages Known & Engineering Toolset"
        subtitle="Hover over any technology icon to pause scrolling and reveal its name popup!"
        badgeText="SPEED: CONSTANT"
      >
        {/* MARQUEE TRAIN CONTAINER */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
          
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
                      width: '58px',
                      height: '58px',
                      borderRadius: '10px',
                      background: '#fde047',
                      border: '2px solid #000000',
                      boxShadow: '3px 3px 0 #000000',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      flexShrink: 0,
                      cursor: 'pointer',
                      transform: isHovered ? 'scale(1.18)' : 'scale(1)',
                      transition: 'transform 0.2s cubic-bezier(0.16, 1, 0.3, 1)',
                      zIndex: isHovered ? 100 : 1
                    }}
                    onMouseEnter={() => {
                      playRetroClick();
                      setHoveredTool({ row: 'top', index: idx, name });
                    }}
                    onMouseLeave={() => setHoveredTool(null)}
                  >
                    {isHovered && (
                      <div
                        style={{
                          position: 'absolute',
                          top: '-46px',
                          left: '50%',
                          transform: 'translateX(-50%)',
                          background: '#ffffff',
                          border: '2px solid #000000',
                          color: '#000000',
                          fontSize: '0.8rem',
                          fontWeight: 900,
                          fontFamily: 'var(--font-mono, monospace)',
                          padding: '0.35rem 0.75rem',
                          borderRadius: '6px',
                          whiteSpace: 'nowrap',
                          boxShadow: '3px 3px 0 #000000',
                          pointerEvents: 'none',
                          animation: 'tooltipPop 0.18s cubic-bezier(0.16, 1, 0.3, 1) forwards'
                        }}
                      >
                        {name}
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
                      width: '58px',
                      height: '58px',
                      borderRadius: '10px',
                      background: '#38bdf8',
                      border: '2px solid #000000',
                      boxShadow: '3px 3px 0 #000000',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      flexShrink: 0,
                      cursor: 'pointer',
                      transform: isHovered ? 'scale(1.18)' : 'scale(1)',
                      transition: 'transform 0.2s cubic-bezier(0.16, 1, 0.3, 1)',
                      zIndex: isHovered ? 100 : 1
                    }}
                    onMouseEnter={() => {
                      playRetroClick();
                      setHoveredTool({ row: 'bottom', index: idx, name });
                    }}
                    onMouseLeave={() => setHoveredTool(null)}
                  >
                    {isHovered && (
                      <div
                        style={{
                          position: 'absolute',
                          top: '-46px',
                          left: '50%',
                          transform: 'translateX(-50%)',
                          background: '#ffffff',
                          border: '2px solid #000000',
                          color: '#000000',
                          fontSize: '0.8rem',
                          fontWeight: 900,
                          fontFamily: 'var(--font-mono, monospace)',
                          padding: '0.35rem 0.75rem',
                          borderRadius: '6px',
                          whiteSpace: 'nowrap',
                          boxShadow: '3px 3px 0 #000000',
                          pointerEvents: 'none',
                          animation: 'tooltipPop 0.18s cubic-bezier(0.16, 1, 0.3, 1) forwards'
                        }}
                      >
                        {name}
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
      </MacWindowWrapper>
    </section>
  );
}
