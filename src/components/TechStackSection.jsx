import React from 'react';

export default function TechStackSection() {
  const stackCategories = [
    {
      title: "Programming Languages",
      desc: "Core languages used for backend systems, high-throughput microservices, & web applications.",
      items: [
        { name: "Python", exp: "Primary", tag: "FastAPI / OTel / ML" },
        { name: "Go (Golang)", exp: "Advanced", tag: "gRPC / Distributed Sync" },
        { name: "TypeScript", exp: "Advanced", tag: "Node.js / React / WebCrypto" },
        { name: "JavaScript", exp: "ES6+", tag: "Vite / Modern DOM / Web APIs" },
        { name: "C++", exp: "Systems", tag: "Memory & Performance" },
        { name: "SQL", exp: "Relational", tag: "PostgreSQL Query Design" },
        { name: "Shell / Bash", exp: "Automation", tag: "Linux / PowerShell Scripts" }
      ]
    },
    {
      title: "Frameworks & Core Libraries",
      desc: "Production web frameworks, telemetry interceptors, and high-performance protocols.",
      items: [
        { name: "React.js", exp: "Frontend", tag: "Hooks / State / UI Components" },
        { name: "FastAPI", exp: "Backend", tag: "Async REST APIs / OpenAPI" },
        { name: "OpenTelemetry SDK", exp: "SRE", tag: "Trace & Span Interception" },
        { name: "Node.js & Express", exp: "Runtime", tag: "Asynchronous I/O Services" },
        { name: "gRPC Protocol", exp: "Transport", tag: "Sub-ms Proto Sync" },
        { name: "WebCrypto API", exp: "Security", tag: "AES-GCM Client Key Derivation" },
        { name: "PyTorch", exp: "AI/ML", tag: "Vector Embeddings & Inference" }
      ]
    },
    {
      title: "Databases, Cloud & Observability",
      desc: "Storage engines, zero-trust cloud security, telemetry planes, and streaming pipelines.",
      items: [
        { name: "SigNoz Platform", exp: "Observability", tag: "Agents of SigNoz Winner" },
        { name: "PostgreSQL", exp: "Database", tag: "Acid Compliance & Indexing" },
        { name: "Redis", exp: "Caching", tag: "In-Memory Lock Management" },
        { name: "Vector Databases", exp: "AI Storage", tag: "Semantic Graph Indexing" },
        { name: "Docker", exp: "DevOps", tag: "Containerization & Compose" },
        { name: "WebSockets", exp: "Streaming", tag: "Real-Time Delta Broadcasting" }
      ]
    },
    {
      title: "Developer Workflow & Systems Tools",
      desc: "System tools, version control, build tools, and distributed worktree management.",
      items: [
        { name: "Git & Subtree Routing", exp: "VCS", tag: "Multi-Repo Worktree Flow" },
        { name: "Linux / POSIX Systems", exp: "OS", tag: "Kernels & Shell Environments" },
        { name: "CI/CD Pipelines", exp: "DevOps", tag: "Automated Build & Test" },
        { name: "Vite Bundler", exp: "Build", tag: "Lightning-Fast HMR & ESM" },
        { name: "PowerShell", exp: "Scripting", tag: "Windows / Cross-Platform Admin" }
      ]
    }
  ];

  return (
    <section
      id="tech-stack"
      style={{
        padding: '3.5rem 1.5rem',
        maxWidth: '1180px',
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
          Section B • Languages & Technical Tools
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
          Categorized breakdown of core languages, frameworks, databases, and developer infrastructure tools.
        </p>
      </div>

      {/* Grid of 4 Stack Categories */}
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
          gap: '1.5rem'
        }}
      >
        {stackCategories.map((cat, idx) => (
          <div
            key={idx}
            style={{
              background: 'var(--card-bg, #111827)',
              border: '1px solid var(--border-subtle, #1f2937)',
              borderRadius: 'var(--ui-radius, 16px)',
              padding: '1.5rem',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
              boxShadow: '0 10px 25px rgba(0,0,0,0.3)'
            }}
          >
            <div>
              <h3 style={{ fontSize: '1.2rem', fontWeight: 800, color: 'var(--text-primary, #ffffff)', marginBottom: '0.3rem' }}>
                {cat.title}
              </h3>
              <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary, #94a3b8)', lineHeight: 1.4, marginBottom: '1.25rem' }}>
                {cat.desc}
              </p>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.65rem' }}>
                {cat.items.map((item, iIdx) => (
                  <div
                    key={iIdx}
                    style={{
                      background: 'var(--code-bg, #0f172a)',
                      border: '1px solid var(--border-subtle, #1f2937)',
                      borderRadius: '8px',
                      padding: '0.6rem 0.85rem',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      gap: '0.5rem'
                    }}
                  >
                    <div>
                      <div style={{ fontSize: '0.9rem', fontWeight: 700, color: 'var(--text-primary, #ffffff)' }}>
                        {item.name}
                      </div>
                      <div style={{ fontSize: '0.75rem', color: 'var(--text-secondary, #94a3b8)' }}>
                        {item.tag}
                      </div>
                    </div>

                    <span
                      style={{
                        fontSize: '0.72rem',
                        fontFamily: 'var(--font-mono, monospace)',
                        fontWeight: 600,
                        padding: '0.2rem 0.5rem',
                        borderRadius: '4px',
                        background: 'rgba(6, 182, 212, 0.12)',
                        color: 'var(--accent-primary, #38bdf8)'
                      }}
                    >
                      {item.exp}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
