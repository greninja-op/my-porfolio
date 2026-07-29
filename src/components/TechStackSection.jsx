import React, { useState, useEffect, useRef } from 'react';

export default function TechStackSection() {
  // 2D Vector SVG Icon Map for all Languages & Tools
  const render2DIcon = (name) => {
    switch (name) {
      case "Python":
        return (
          <svg width="34" height="34" viewBox="0 0 24 24" fill="none">
            <path d="M11.9 2c-4.4 0-4.1 1.9-4.1 1.9v2h4.2v.6H6.1S3.9 6.2 3.9 10.6s1.9 4.2 1.9 4.2h1.1v-1.6c0-1.8 1.6-1.8 1.6-1.8h4.2c1.7 0 1.7-1.6 1.7-1.6V5.7S16.5 2 11.9 2zm-2.1 1.4c.4 0 .7.3.7.7s-.3.7-.7.7-.7-.3-.7-.7.3-.7.7-.7z" fill="#3572A5" />
            <path d="M12.1 22c4.4 0 4.1-1.9 4.1-1.9v-2h-4.2v-.6h5.9s2.2.3 2.2-4.1-1.9-4.2-1.9-4.2h-1.1v1.6c0 1.8-1.6 1.8-1.6 1.8h-4.2c-1.7 0-1.7 1.6-1.7 1.6v4.1s-2.1 3.7 2.5 3.7zm2.1-1.4c-.4 0-.7-.3-.7-.7s.3-.7.7-.7.7.3.7.7-.3.7-.7.7z" fill="#FFD43B" />
          </svg>
        );
      case "JavaScript":
        return (
          <svg width="34" height="34" viewBox="0 0 24 24" fill="none">
            <rect width="24" height="24" rx="4" fill="#F7DF1E" />
            <path d="M11.2 18.5c.7.4 1.5.7 2.3.7 1.1 0 1.8-.5 1.8-1.3 0-.9-.7-1.2-1.8-1.7l-.6-.3c-1.7-.7-2.8-1.6-2.8-3.5 0-2.4 1.9-3.9 4.8-3.9 1.4 0 2.5.3 3.3.8l-1 2.3c-.6-.4-1.4-.7-2.3-.7-1.1 0-1.7.5-1.7 1.2 0 .8.6 1.1 1.7 1.6l.6.3c1.9.8 3 1.7 3 3.6 0 2.6-2 4-5.1 4-1.6 0-3-.4-3.9-1l1-2.4z" fill="#000" />
            <path d="M6 18.5c.6.4 1.4.7 2.2.7.9 0 1.5-.4 1.5-1.5V8.8H6.5v2.4h1.7v6.1c0 .8-.4 1.2-1.2 1.2-.4 0-.8-.1-1-.2l0 0z" fill="#000" />
          </svg>
        );
      case "TypeScript":
        return (
          <svg width="34" height="34" viewBox="0 0 24 24" fill="none">
            <rect width="24" height="24" rx="4" fill="#3178C6" />
            <path d="M12.5 10.2h-3v8.3H7.2v-8.3h-3V8H12.5v2.2zm7.4 5.3c0 2.3-1.8 3.7-4.6 3.7-1.3 0-2.6-.3-3.4-.8l.9-2.2c.7.4 1.6.7 2.5.7 1 0 1.6-.4 1.6-1.1 0-.7-.5-1-1.6-1.5l-.6-.3c-1.7-.7-2.6-1.5-2.6-3.3 0-2.2 1.8-3.7 4.4-3.7 1.2 0 2.3.3 3 .7l-.8 2.1c-.6-.3-1.4-.6-2.2-.6-.9 0-1.5.4-1.5 1 0 .7.5 1 1.5 1.4l.6.3c1.9.8 2.9 1.7 2.9 3.6z" fill="#FFF" />
          </svg>
        );
      case "Go":
        return (
          <svg width="34" height="34" viewBox="0 0 24 24" fill="none">
            <rect width="24" height="24" rx="4" fill="#00ADD8" />
            <path d="M7 11.5c.8 0 1.5.6 1.5 1.5s-.7 1.5-1.5 1.5S5.5 13.9 5.5 13s.7-1.5 1.5-1.5zm10 0c.8 0 1.5.6 1.5 1.5s-.7 1.5-1.5 1.5-1.5-.6-1.5-1.5.7-1.5 1.5-1.5z" fill="#FFF" />
            <path d="M12 7c3.3 0 6 2.7 6 6s-2.7 6-6 6-6-2.7-6-6 2.7-6 6-6zm0 2c-2.2 0-4 1.8-4 4s1.8 4 4 4 4-1.8 4-4-1.8-4-4-4z" fill="#FFF" />
          </svg>
        );
      case "C++":
        return (
          <svg width="34" height="34" viewBox="0 0 24 24" fill="none">
            <rect width="24" height="24" rx="4" fill="#00599C" />
            <path d="M12 4.5l6.5 3.8v7.5L12 19.5l-6.5-3.8V8.3L12 4.5zm0 2.3L7.5 9.4v5.2l4.5 2.6 4.5-2.6V9.4L12 6.8z" fill="#FFF" />
            <path d="M14 11h1.5v-1.5H17V11h1.5v1.5H17V14h-1.5v-1.5H14V11z" fill="#FFF" />
          </svg>
        );
      case "React":
        return (
          <svg width="34" height="34" viewBox="0 0 24 24" fill="none">
            <rect width="24" height="24" rx="4" fill="#20232A" />
            <ellipse cx="12" cy="12" rx="8" ry="3.2" stroke="#61DAFB" strokeWidth="1.2" transform="rotate(30 12 12)" />
            <ellipse cx="12" cy="12" rx="8" ry="3.2" stroke="#61DAFB" strokeWidth="1.2" transform="rotate(90 12 12)" />
            <ellipse cx="12" cy="12" rx="8" ry="3.2" stroke="#61DAFB" strokeWidth="1.2" transform="rotate(150 12 12)" />
            <circle cx="12" cy="12" r="1.5" fill="#61DAFB" />
          </svg>
        );
      case "FastAPI":
        return (
          <svg width="34" height="34" viewBox="0 0 24 24" fill="none">
            <rect width="24" height="24" rx="4" fill="#059669" />
            <path d="M13 3L4 14h7l-2 7 9-11h-7l2-7z" stroke="#FFF" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        );
      case "Docker":
        return (
          <svg width="34" height="34" viewBox="0 0 24 24" fill="none">
            <rect width="24" height="24" rx="4" fill="#2496ED" />
            <path d="M6 14h2v-2H6v2zm3 0h2v-2H9v2zm3 0h2v-2h-2v2zm-6-3h2V9H6v2zm3 0h2V9H9v2zm3 0h2V9h-2v2zm3 3h2v-2h-2v2zm0-3h2V9h-2v2zM3 16c.5 1.5 2 3 5 3 6 0 9-3.5 9-6.5 0-.2 0-.4 0-.6 1-.7 1.5-1.4 1.5-1.4-.8.1-1.6 0-2-.2-.4-.4-.6-1-.6-1-.8.5-2.2.4-3.1 0C11.5 8.7 10 10 10 10H3v6z" fill="#FFF" />
          </svg>
        );
      case "PostgreSQL":
        return (
          <svg width="34" height="34" viewBox="0 0 24 24" fill="none">
            <rect width="24" height="24" rx="4" fill="#336791" />
            <path d="M12 4c-4.4 0-8 3.6-8 8s3.6 8 8 8 8-3.6 8-8-3.6-8-8-8zm0 2c3.3 0 6 2.7 6 6s-2.7 6-6 6-6-2.7-6-6 2.7-6 6-6z" fill="#FFF" />
            <circle cx="12" cy="12" r="3" fill="#FFF" />
          </svg>
        );
      case "Redis":
        return (
          <svg width="34" height="34" viewBox="0 0 24 24" fill="none">
            <rect width="24" height="24" rx="4" fill="#DC382D" />
            <path d="M6 8l6-3 6 3-6 3-6-3zm0 4l6 3 6-3v2l-6 3-6-3v-2zm0 4l6 3 6-3v2l-6 3-6-3v-2z" fill="#FFF" />
          </svg>
        );
      case "Git":
        return (
          <svg width="34" height="34" viewBox="0 0 24 24" fill="none">
            <rect width="24" height="24" rx="4" fill="#F05032" />
            <path d="M18.8 10.7l-7.5-7.5c-.4-.4-1-.4-1.4 0l-7.5 7.5c-.4.4-.4 1 0 1.4l7.5 7.5c.4.4 1 .4 1.4 0l7.5-7.5c.4-.4.4-1 0-1.4zM12 16.5c-.8 0-1.5-.7-1.5-1.5s.7-1.5 1.5-1.5 1.5.7 1.5 1.5-.7 1.5-1.5 1.5zm-2.5-4c-.8 0-1.5-.7-1.5-1.5s.7-1.5 1.5-1.5 1.5.7 1.5 1.5-.7 1.5-1.5 1.5z" fill="#FFF" />
          </svg>
        );
      case "Linux":
        return (
          <svg width="34" height="34" viewBox="0 0 24 24" fill="none">
            <rect width="24" height="24" rx="4" fill="#FCC624" />
            <path d="M12 3c-2.5 0-4 2-4 5v5c0 2 1.5 4 4 4s4-2 4-4V8c0-3-1.5-5-4-5z" fill="#000" />
            <circle cx="10" cy="7" r="1" fill="#FFF" />
            <circle cx="14" cy="7" r="1" fill="#FFF" />
            <path d="M9 18l-2 3h10l-2-3H9z" fill="#E95420" />
          </svg>
        );
      case "SigNoz":
        return (
          <svg width="34" height="34" viewBox="0 0 24 24" fill="none">
            <rect width="24" height="24" rx="4" fill="#06B6D4" />
            <path d="M13 3L4 14h7l-2 7 9-11h-7l2-7z" fill="#FFF" />
          </svg>
        );
      case "OpenTelemetry":
        return (
          <svg width="34" height="34" viewBox="0 0 24 24" fill="none">
            <rect width="24" height="24" rx="4" fill="#F59E0B" />
            <circle cx="12" cy="12" r="6" stroke="#FFF" strokeWidth="2" />
            <path d="M12 6v6l4 4" stroke="#FFF" strokeWidth="2" strokeLinecap="round" />
          </svg>
        );
      case "gRPC":
        return (
          <svg width="34" height="34" viewBox="0 0 24 24" fill="none">
            <rect width="24" height="24" rx="4" fill="#244C5A" />
            <path d="M7 12h10M12 7v10" stroke="#4285F4" strokeWidth="2.5" strokeLinecap="round" />
            <circle cx="12" cy="12" r="3" fill="#34A853" />
          </svg>
        );
      case "Vite":
        return (
          <svg width="34" height="34" viewBox="0 0 24 24" fill="none">
            <rect width="24" height="24" rx="4" fill="#646CFF" />
            <path d="M12 3l8 14-8 4-8-4 8-14z" fill="#FFD43B" />
          </svg>
        );
      case "Node.js":
        return (
          <svg width="34" height="34" viewBox="0 0 24 24" fill="none">
            <rect width="24" height="24" rx="4" fill="#339933" />
            <path d="M12 3L4 7.5v9L12 21l8-4.5v-9L12 3zm0 2.5l5.5 3.1v6.2L12 18l-5.5-3.2V8.6L12 5.5z" fill="#FFF" />
          </svg>
        );
      default:
        return (
          <svg width="34" height="34" viewBox="0 0 24 24" fill="none">
            <rect width="24" height="24" rx="4" fill="#38BDF8" />
            <path d="M8 12h8M12 8v8" stroke="#FFF" strokeWidth="2" strokeLinecap="round" />
          </svg>
        );
    }
  };

  // Top Row: Tools & Infrastructure
  const toolsRow = ["Docker", "PostgreSQL", "Redis", "Git", "Linux", "SigNoz", "OpenTelemetry", "gRPC", "Vite"];

  // Bottom Row: Languages & Frameworks
  const languagesRow = ["Python", "JavaScript", "TypeScript", "Go", "C++", "React", "FastAPI", "Node.js"];

  // Duplicate arrays for smooth 100% infinite marquee loop
  const topMarqueeItems = [...toolsRow, ...toolsRow, ...toolsRow, ...toolsRow, ...toolsRow];
  const bottomMarqueeItems = [...languagesRow, ...languagesRow, ...languagesRow, ...languagesRow, ...languagesRow];

  // Dynamic Scroll Velocity Acceleration Logic
  const [scrollSpeedBoost, setScrollSpeedBoost] = useState(1);
  const lastScrollY = useRef(0);
  const scrollTimeout = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      const deltaY = Math.abs(currentScrollY - lastScrollY.current);
      lastScrollY.current = currentScrollY;

      const boost = Math.min(1 + deltaY * 0.15, 6);
      setScrollSpeedBoost(boost);

      if (scrollTimeout.current) clearTimeout(scrollTimeout.current);
      scrollTimeout.current = setTimeout(() => {
        setScrollSpeedBoost(1);
      }, 150);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', handleScroll);
      if (scrollTimeout.current) clearTimeout(scrollTimeout.current);
    };
  }, []);

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
          Bi-directional infinite marquee featuring standalone 2D vector logos in rounded square cards. Scroll faster to accelerate!
        </p>
      </div>

      {/* Marquee Train Container */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
        
        {/* TOP ROW: Tools & Infrastructure (Moving Left to Right) */}
        <div style={{ overflow: 'hidden', width: '100%', position: 'relative' }}>
          <div
            style={{
              display: 'flex',
              gap: '1.25rem',
              width: 'max-content',
              animation: `marqueeLeftToRight ${28 / scrollSpeedBoost}s linear infinite`,
              willChange: 'transform'
            }}
          >
            {topMarqueeItems.map((name, idx) => (
              <div
                key={idx}
                title={name}
                style={{
                  width: '68px',
                  height: '68px',
                  borderRadius: '18px',
                  background: 'var(--card-bg, #111827)',
                  border: '1px solid var(--border-subtle, #1f2937)',
                  boxShadow: '0 8px 20px rgba(0,0,0,0.15)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  flexShrink: 0,
                  transition: 'transform 0.2s ease, border-color 0.2s ease'
                }}
                className="standalone-rounded-square-card"
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'scale(1.1)';
                  e.currentTarget.style.borderColor = 'var(--accent-primary, #06b6d4)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'scale(1)';
                  e.currentTarget.style.borderColor = 'var(--border-subtle, #1f2937)';
                }}
              >
                {render2DIcon(name)}
              </div>
            ))}
          </div>
        </div>

        {/* BOTTOM ROW: Languages & Frameworks (Moving Right to Left) */}
        <div style={{ overflow: 'hidden', width: '100%', position: 'relative' }}>
          <div
            style={{
              display: 'flex',
              gap: '1.25rem',
              width: 'max-content',
              animation: `marqueeRightToLeft ${24 / scrollSpeedBoost}s linear infinite`,
              willChange: 'transform'
            }}
          >
            {bottomMarqueeItems.map((name, idx) => (
              <div
                key={idx}
                title={name}
                style={{
                  width: '68px',
                  height: '68px',
                  borderRadius: '18px',
                  background: 'var(--card-bg, #111827)',
                  border: '1px solid var(--border-subtle, #1f2937)',
                  boxShadow: '0 8px 20px rgba(0,0,0,0.15)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  flexShrink: 0,
                  transition: 'transform 0.2s ease, border-color 0.2s ease'
                }}
                className="standalone-rounded-square-card"
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'scale(1.1)';
                  e.currentTarget.style.borderColor = 'var(--accent-primary, #06b6d4)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'scale(1)';
                  e.currentTarget.style.borderColor = 'var(--border-subtle, #1f2937)';
                }}
              >
                {render2DIcon(name)}
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
