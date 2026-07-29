import React from 'react';

export default function SkillsRecruiter() {
  const skillCategories = [
    {
      title: "Languages",
      skills: ["Python", "Go (Golang)", "TypeScript", "JavaScript (ES6+)", "SQL", "HTML5 & CSS3", "Shell / PowerShell"]
    },
    {
      title: "Frameworks & Libraries",
      skills: ["React.js", "FastAPI", "OpenTelemetry SDK", "Node.js & Express", "PyTorch", "gRPC Protocol", "WebCrypto API"]
    },
    {
      title: "Databases & Infrastructure",
      skills: ["PostgreSQL", "Redis", "Docker & Containers", "SigNoz Observability", "Vector Databases", "WebSockets"]
    },
    {
      title: "Developer Tools & Workflow",
      skills: ["Git & Subtree Routing", "Linux / POSIX Systems", "CI/CD Pipelines", "Vite & Modern Bundlers", "Open-Source Worktrees"]
    }
  ];

  return (
    <section
      id="skills"
      style={{
        padding: '3.5rem 1.5rem',
        maxWidth: '1150px',
        margin: '0 auto'
      }}
    >
      {/* Section Header */}
      <div style={{ marginBottom: '2.5rem' }}>
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
          Section 3 • Competencies
        </div>

        <h2
          style={{
            fontFamily: 'var(--font-heading, system-ui, sans-serif)',
            fontSize: 'clamp(1.8rem, 3.5vw, 2.5rem)',
            fontWeight: 800,
            color: 'var(--text-primary, #ffffff)',
            letterSpacing: '-0.02em'
          }}
        >
          Categorized Technical Skills Matrix
        </h2>

        <p style={{ color: 'var(--text-secondary, #94a3b8)', fontSize: '1.05rem', marginTop: '0.5rem', maxWidth: '650px' }}>
          Organized by domain for fast ATS evaluation and engineering team technical review. (Zero arbitrary percentage bars).
        </p>
      </div>

      {/* Grid of Skill Categories */}
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
          gap: '1.5rem'
        }}
      >
        {skillCategories.map((cat, idx) => (
          <div
            key={idx}
            style={{
              background: 'var(--card-bg, rgba(255, 255, 255, 0.03))',
              border: '1px solid var(--border-subtle, rgba(255, 255, 255, 0.1))',
              borderRadius: 'var(--ui-radius, 14px)',
              padding: '1.5rem',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between'
            }}
          >
            <div>
              <h3
                style={{
                  fontSize: '1.2rem',
                  fontWeight: 700,
                  color: 'var(--text-primary, #ffffff)',
                  marginBottom: '1rem',
                  paddingBottom: '0.6rem',
                  borderBottom: '1px solid var(--border-subtle, rgba(255, 255, 255, 0.1))',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.5rem'
                }}
              >
                <span style={{ color: 'var(--accent-primary, #06b6d4)' }}>#</span> {cat.title}
              </h3>

              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.6rem' }}>
                {cat.skills.map((skill, sIdx) => (
                  <span
                    key={sIdx}
                    style={{
                      fontSize: '0.85rem',
                      fontWeight: 600,
                      padding: '0.35rem 0.75rem',
                      borderRadius: '8px',
                      background: 'var(--pill-bg, rgba(255, 255, 255, 0.06))',
                      border: '1px solid var(--border-subtle, rgba(255, 255, 255, 0.12))',
                      color: 'var(--text-primary, #e2e8f0)',
                      transition: 'all 0.15s ease'
                    }}
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
