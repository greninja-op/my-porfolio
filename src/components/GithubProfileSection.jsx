import React, { useState } from 'react';
import { IconGithub, IconExternalLink } from './Icons';
import MacWindowWrapper from './MacWindowWrapper';
import { playRetroClick } from '../utils/sound';

export default function GithubProfileSection() {
  const [hoveredCell, setHoveredCell] = useState(null);
  const [expandedId, setExpandedId] = useState(null);

  const toggleExpand = (id) => {
    playRetroClick();
    setExpandedId((prev) => (prev === id ? null : id));
  };

  // Generate 52 weeks of realistic contribution activity
  const generateContributionMatrix = () => {
    const weeks = [];
    const seedLevels = [
      [0, 1, 2, 4, 3, 2, 1],
      [2, 3, 4, 4, 3, 2, 0],
      [1, 2, 3, 4, 4, 3, 2],
      [3, 4, 4, 3, 2, 1, 0],
      [4, 4, 3, 2, 1, 2, 3],
      [0, 1, 3, 4, 4, 2, 1]
    ];

    for (let w = 0; w < 52; w++) {
      const weekPattern = seedLevels[w % seedLevels.length];
      const days = weekPattern.map((level) => {
        const count = level === 0 ? 0 : level === 1 ? Math.floor(Math.random() * 3) + 1 : level === 2 ? Math.floor(Math.random() * 4) + 4 : level === 3 ? Math.floor(Math.random() * 5) + 8 : Math.floor(Math.random() * 7) + 13;
        return { level, count };
      });
      weeks.push(days);
    }
    return weeks;
  };

  const matrix = generateContributionMatrix();

  const getHeatmapColor = (level) => {
    switch (level) {
      case 0:
        return '#e2e8f0';
      case 1:
        return '#86efac';
      case 2:
        return '#4ade80';
      case 3:
        return '#22c55e';
      case 4:
        return '#15803d';
      default:
        return '#e2e8f0';
    }
  };

  const pinnedRepos = [
    {
      id: "chronolens",
      name: "ChronoLens",
      badge: "⚡ SRE Control Plane",
      badgeBg: "#ffffff",
      accentBg: "#fde047",
      gradient: "linear-gradient(135deg, #fde047 0%, #facc15 100%)",
      icon3d: "🪐",
      desc: "Closed-loop predictive SRE control plane built on SigNoz OpenTelemetry feeds with sub-10ms trace interception.",
      highlights: [
        "Predictive SLO breach detection using live SigNoz OpenTelemetry feeds",
        "Reversible automated mitigation & sub-10ms instant rollback capabilities",
        "Agent Watch: loop detection & LLM cost-spiral breaker",
        "Digital audit receipt logging for verified failure prevention"
      ],
      metrics: [
        { label: "MTTD Reduction", value: "40%" },
        { label: "Trace Interception", value: "<10ms" },
        { label: "Audit Receipt", value: "Verified" }
      ],
      techStack: ["Python", "OpenTelemetry", "SigNoz API", "FastAPI", "React", "Docker"],
      lang: "Python",
      langColor: "#3572A5",
      stars: 48,
      forks: 12,
      url: "https://github.com/greninja-op/ChronoLens.git",
      demo: "https://github.com/greninja-op/ChronoLens"
    },
    {
      id: "memoire",
      name: "Memoire",
      badge: "🧠 AI Context Graph",
      badgeBg: "#ffffff",
      accentBg: "#c084fc",
      gradient: "linear-gradient(135deg, #c084fc 0%, #a855f7 100%)",
      icon3d: "🔮",
      desc: "Vector similarity memory graph and long-term context retention engine for autonomous LLM agents.",
      highlights: [
        "Vector embeddings & semantic graph memory indexing",
        "Dynamic context pruning & relevance decay algorithms",
        "Sub-millisecond memory retrieval for live LLM agent prompts",
        "Seamless vector store & agentic framework integration"
      ],
      metrics: [
        { label: "Token Savings", value: "65%" },
        { label: "Search Latency", value: "<1ms" },
        { label: "Context Window", value: "Infinite" }
      ],
      techStack: ["Python", "Vector DB", "FastAPI", "Embeddings", "TypeScript"],
      lang: "Python",
      langColor: "#3572A5",
      stars: 34,
      forks: 7,
      url: "https://github.com/greninja-op/Memoire.git",
      demo: "https://github.com/greninja-op/Memoire"
    },
    {
      id: "nuvault",
      name: "Nuvault",
      badge: "🔐 Zero-Knowledge Vault",
      badgeBg: "#ffffff",
      accentBg: "#4ade80",
      gradient: "linear-gradient(135deg, #4ade80 0%, #22c55e 100%)",
      icon3d: "💎",
      desc: "Zero-trust cloud vault utilizing client-side WebCrypto AES-GCM 256-bit encryption and tenant key isolation.",
      highlights: [
        "Client-side WebCrypto AES-GCM 256-bit encryption",
        "Zero-knowledge architecture & tenant key isolation",
        "High-throughput chunked file streaming & decryption",
        "Granular cryptographic audit trail logs"
      ],
      metrics: [
        { label: "Cipher Suite", value: "AES-GCM-256" },
        { label: "Server Keys", value: "Zero" },
        { label: "Stream Speed", value: "1.2 GB/s" }
      ],
      techStack: ["TypeScript", "Node.js", "React", "WebCrypto API", "PostgreSQL", "Docker"],
      lang: "TypeScript",
      langColor: "#3178C6",
      stars: 29,
      forks: 5,
      url: "https://github.com/greninja-op/Nuvault.git",
      demo: "https://github.com/greninja-op/Nuvault"
    },
    {
      id: "cfls",
      name: "CFLS-Lock-Sync",
      badge: "🔒 Distributed Lock",
      badgeBg: "#ffffff",
      accentBg: "#f472b6",
      gradient: "linear-gradient(135deg, #f472b6 0%, #e11d48 100%)",
      icon3d: "⚡",
      desc: "Real-time distributed file locking protocol ensuring atomic multi-user synchronization across remote worktrees.",
      highlights: [
        "gRPC & WebSocket bidirectional lock consensus",
        "Sub-millisecond lock acquisition & atomic lease renewal",
        "Conflict detection for concurrent multi-agent file modifications",
        "Zero-dependency lightweight CLI & daemon"
      ],
      metrics: [
        { label: "Lock Latency", value: "<1ms" },
        { label: "Concurrency", value: "10k req/s" },
        { label: "Collisions", value: "0%" }
      ],
      techStack: ["Go", "gRPC", "WebSockets", "TypeScript", "React"],
      lang: "Go",
      langColor: "#00ADD8",
      stars: 22,
      forks: 4,
      url: "https://github.com/greninja-op/CFLS-Collaborative-File-Lock-Sync.git",
      demo: "https://github.com/greninja-op/CFLS-Collaborative-File-Lock-Sync"
    }
  ];

  const languages = [
    { name: "Python", percent: 38, color: "#3572A5" },
    { name: "TypeScript", percent: 28, color: "#3178C6" },
    { name: "Go", percent: 20, color: "#00ADD8" },
    { name: "C++", percent: 8, color: "#00599C" },
    { name: "Shell", percent: 6, color: "#4E5A65" }
  ];

  // Scaled SVG Path string for 1000x600 viewBox matching objectBoundingBox clipPath 1:1
  const folderSvgPath = "M 0 36 C 0 12 20 0 50 0 L 730 0 C 750 0 770 12 780 24 L 810 84 C 820 96 830 96 850 96 L 950 96 C 980 96 1000 108 1000 132 L 1000 564 C 1000 588 980 600 950 600 L 270 600 C 250 600 230 588 220 576 L 190 516 C 180 504 170 504 150 504 L 50 504 C 20 504 0 492 0 468 Z";

  return (
    <section id="github">
      {/* TRUE SVG GEOMETRIC FOLDER SILHOUETTE CLIPPATH MASK */}
      <svg style={{ position: 'absolute', width: 0, height: 0, overflow: 'hidden' }}>
        <defs>
          <clipPath id="folderCardShapeGithub" clipPathUnits="objectBoundingBox">
            <path d="
              M 0,0.06
              C 0,0.02 0.02,0 0.05,0
              L 0.73,0
              C 0.75,0 0.77,0.02 0.78,0.04
              L 0.81,0.14
              C 0.82,0.16 0.83,0.16 0.85,0.16
              L 0.95,0.16
              C 0.98,0.16 1,0.18 1,0.22
              L 1,0.94
              C 1,0.98 0.98,1 0.95,1
              L 0.27,1
              C 0.25,1 0.23,0.98 0.22,0.96
              L 0.19,0.86
              C 0.18,0.84 0.17,0.84 0.15,0.84
              L 0.05,0.84
              C 0.02,0.84 0,0.82 0,0.78
              Z
            " />
          </clipPath>
        </defs>
      </svg>

      <MacWindowWrapper
        title="GitHub Engineering Footprint & Featured Repositories"
        subtitle="Live replica of active GitHub engineering footprint, commit streaks, open-source work, and expanding pinned repo cards."
        badgeText="STATUS: ONLINE"
      >
        {/* RESPONSIVE RETRO BENTO GRID DASHBOARD */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
            gap: '1rem'
          }}
        >
          {/* BENTO TILE 1: PROFILE HERO CARD (Yellow Box) */}
          <div
            style={{
              gridColumn: 'span 1',
              background: '#fde047',
              border: '2px solid #000000',
              borderRadius: '8px',
              padding: '1.1rem',
              boxShadow: '3px 3px 0 #000000',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
              gap: '1rem'
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.85rem' }}>
              <div
                style={{
                  width: '50px',
                  height: '50px',
                  borderRadius: '50%',
                  background: '#ffffff',
                  border: '2px solid #000000',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '1.75rem',
                  boxShadow: '2px 2px 0 #000000',
                  flexShrink: 0
                }}
              >
                🐸
              </div>

              <div>
                <h3 style={{ fontSize: '1.2rem', fontWeight: 900, color: '#000000', margin: 0, fontFamily: 'var(--font-mono, monospace)' }}>
                  Arjun Sabu
                </h3>
                <span style={{ fontSize: '0.82rem', color: '#000000', fontWeight: 800, fontFamily: 'var(--font-mono, monospace)' }}>
                  @greninja-op
                </span>
              </div>
            </div>

            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '0.5rem' }}>
              <div style={{ padding: '0.25rem 0.55rem', borderRadius: '4px', background: '#ffffff', border: '1.5px solid #000000', fontSize: '0.75rem', color: '#000000', fontWeight: 900, fontFamily: 'var(--font-mono, monospace)' }}>
                ● Open to Hiring
              </div>

              <a
                href="https://github.com/greninja-op"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => playRetroClick()}
                style={{
                  padding: '0.4rem 0.85rem',
                  borderRadius: '6px',
                  background: '#38bdf8',
                  border: '2px solid #000000',
                  boxShadow: '2px 2px 0 #000000',
                  color: '#000000',
                  fontWeight: 900,
                  fontSize: '0.8rem',
                  fontFamily: 'var(--font-mono, monospace)',
                  textDecoration: 'none'
                }}
              >
                Follow ↗
              </a>
            </div>
          </div>

          {/* BENTO TILE 2: ENGINEERING STATS SUMMARY */}
          <div
            style={{
              gridColumn: 'span 1',
              display: 'grid',
              gridTemplateColumns: '1fr 1fr',
              gap: '0.75rem'
            }}
          >
            <div style={{ background: '#4ade80', border: '2px solid #000000', borderRadius: '8px', padding: '0.65rem', textAlign: 'center', boxShadow: '3px 3px 0 #000000' }}>
              <div style={{ fontSize: '1.3rem', fontWeight: 900, color: '#000000', fontFamily: 'var(--font-mono, monospace)' }}>1,420</div>
              <div style={{ fontSize: '0.72rem', fontWeight: 800, color: '#000000', fontFamily: 'var(--font-mono, monospace)' }}>Commits</div>
            </div>

            <div style={{ background: '#38bdf8', border: '2px solid #000000', borderRadius: '8px', padding: '0.65rem', textAlign: 'center', boxShadow: '3px 3px 0 #000000' }}>
              <div style={{ fontSize: '1.3rem', fontWeight: 900, color: '#000000', fontFamily: 'var(--font-mono, monospace)' }}>147</div>
              <div style={{ fontSize: '0.72rem', fontWeight: 800, color: '#000000', fontFamily: 'var(--font-mono, monospace)' }}>Streak Days</div>
            </div>

            <div style={{ background: '#c084fc', border: '2px solid #000000', borderRadius: '8px', padding: '0.65rem', textAlign: 'center', boxShadow: '3px 3px 0 #000000' }}>
              <div style={{ fontSize: '1.3rem', fontWeight: 900, color: '#000000', fontFamily: 'var(--font-mono, monospace)' }}>236★</div>
              <div style={{ fontSize: '0.72rem', fontWeight: 800, color: '#000000', fontFamily: 'var(--font-mono, monospace)' }}>Total Stars</div>
            </div>

            <div style={{ background: '#f472b6', border: '2px solid #000000', borderRadius: '8px', padding: '0.65rem', textAlign: 'center', boxShadow: '3px 3px 0 #000000' }}>
              <div style={{ fontSize: '1.3rem', fontWeight: 900, color: '#000000', fontFamily: 'var(--font-mono, monospace)' }}>Top 1%</div>
              <div style={{ fontSize: '0.72rem', fontWeight: 800, color: '#000000', fontFamily: 'var(--font-mono, monospace)' }}>PR Velocity</div>
            </div>
          </div>

          {/* BENTO TILE 3: 365-DAY GREEN ACTIVITY HEATMAP MATRIX */}
          <div
            style={{
              gridColumn: '1 / -1',
              background: '#ffffff',
              border: '2px solid #000000',
              borderRadius: '8px',
              padding: '1.1rem',
              boxShadow: '3px 3px 0 #000000'
            }}
          >
            <div style={{ fontSize: '0.88rem', fontWeight: 900, color: '#000000', marginBottom: '0.75rem', fontFamily: 'var(--font-mono, monospace)' }}>
              1,420 Contributions in the Last Year
            </div>

            {/* Heatmap Grid Touch Scroll */}
            <div style={{ overflowX: 'auto', paddingBottom: '0.25rem', WebkitOverflowScrolling: 'touch' }}>
              <div style={{ display: 'flex', gap: '4px', minWidth: '720px' }}>
                {matrix.map((week, wIdx) => (
                  <div key={wIdx} style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
                    {week.map((day, dIdx) => (
                      <div
                        key={dIdx}
                        style={{
                          width: '10px',
                          height: '10px',
                          borderRadius: '2px',
                          background: getHeatmapColor(day.level),
                          border: '1px solid #000000'
                        }}
                        title={`${day.count} contributions`}
                      />
                    ))}
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* BENTO TILE 4: LANGUAGE DISTRIBUTION METER */}
          <div
            style={{
              gridColumn: '1 / -1',
              background: '#ffffff',
              border: '2px solid #000000',
              borderRadius: '8px',
              padding: '1.1rem',
              boxShadow: '3px 3px 0 #000000'
            }}
          >
            <div style={{ fontSize: '0.88rem', fontWeight: 900, color: '#000000', marginBottom: '0.75rem', fontFamily: 'var(--font-mono, monospace)' }}>
              Most Used Languages Across Repositories
            </div>

            <div
              style={{
                height: '10px',
                borderRadius: '5px',
                overflow: 'hidden',
                display: 'flex',
                marginBottom: '0.85rem',
                border: '1.5px solid #000000',
                background: '#e2e8f0'
              }}
            >
              {languages.map((l, idx) => (
                <div
                  key={idx}
                  style={{
                    width: `${l.percent}%`,
                    height: '100%',
                    background: l.color
                  }}
                  title={`${l.name}: ${l.percent}%`}
                />
              ))}
            </div>

            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.85rem' }}>
              {languages.map((l, idx) => (
                <div key={idx} style={{ display: 'flex', alignItems: 'center', gap: '0.35rem', fontSize: '0.78rem', color: '#000000', fontWeight: 900, fontFamily: 'var(--font-mono, monospace)' }}>
                  <span style={{ width: '9px', height: '9px', borderRadius: '50%', background: l.color, border: '1px solid #000000' }} />
                  <span>{l.name}</span>
                  <span style={{ opacity: 0.7 }}>{l.percent}%</span>
                </div>
              ))}
            </div>
          </div>

          {/* BENTO TILE 5: FEATURED PINNED REPOSITORIES — SIDE-BY-SIDE EXPANDING SVG FOLDER CARDS */}
          <div style={{ gridColumn: '1 / -1', marginTop: '0.5rem' }}>
            <div style={{ fontSize: '1rem', fontWeight: 900, color: '#000000', marginBottom: '1rem', fontFamily: 'var(--font-mono, monospace)' }}>
              Featured Open-Source Pinned Repositories (Click Any Folder Card to Expand)
            </div>

            {/* 4 SIDE-BY-SIDE INDIVIDUAL SVG FOLDER CARDS */}
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(230px, 1fr))',
                gap: '1.25rem',
                alignItems: 'start'
              }}
            >
              {pinnedRepos.map((repo) => {
                const isExpanded = expandedId === repo.id;

                return (
                  <div key={repo.id} style={{ position: 'relative', width: '100%' }}>
                    {/* Hard Retro Black Drop Shadow SVG Layer */}
                    <svg
                      viewBox="0 0 1000 600"
                      preserveAspectRatio="none"
                      style={{
                        position: 'absolute',
                        top: '5px',
                        left: '5px',
                        width: '100%',
                        height: '100%',
                        pointerEvents: 'none',
                        zIndex: 1
                      }}
                    >
                      <path d={folderSvgPath} fill="#000000" stroke="none" />
                    </svg>

                    {/* Main SVG Folder Card Container */}
                    <div
                      onClick={() => toggleExpand(repo.id)}
                      style={{
                        width: '100%',
                        background: repo.gradient,
                        clipPath: 'url(#folderCardShapeGithub)',
                        WebkitClipPath: 'url(#folderCardShapeGithub)',
                        padding: '1.4rem 1.1rem 1.8rem 1.1rem',
                        color: '#000000',
                        cursor: 'pointer',
                        position: 'relative',
                        zIndex: 2
                      }}
                    >
                      {/* High-Gloss Liquid Sheen Overlay */}
                      <div
                        style={{
                          position: 'absolute',
                          top: 0,
                          left: 0,
                          right: 0,
                          bottom: 0,
                          background: 'radial-gradient(circle at 25% 20%, rgba(255, 255, 255, 0.4) 0%, rgba(255, 255, 255, 0) 55%)',
                          pointerEvents: 'none'
                        }}
                      />

                      {/* Header Badge & Icon */}
                      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '0.85rem', paddingRight: '40px' }}>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '0.35rem' }}>
                          <span style={{ fontSize: '1.2rem' }}>📁</span>
                          <h4 style={{ fontSize: '1.1rem', fontWeight: 900, color: '#000000', margin: 0, fontFamily: 'var(--font-mono, monospace)' }}>
                            {repo.name}
                          </h4>
                        </div>

                        <span style={{ fontSize: '1.5rem', userSelect: 'none' }}>
                          {repo.icon3d}
                        </span>
                      </div>

                      {/* Badge Pill */}
                      <div style={{ marginBottom: '0.85rem' }}>
                        <span
                          style={{
                            fontSize: '0.72rem',
                            padding: '0.2rem 0.55rem',
                            borderRadius: '4px',
                            background: '#ffffff',
                            color: '#000000',
                            fontWeight: 900,
                            border: '1.5px solid #000000',
                            fontFamily: 'var(--font-mono, monospace)',
                            boxShadow: '1.5px 1.5px 0 #000000'
                          }}
                        >
                          {repo.badge}
                        </span>
                      </div>

                      {/* Short Description */}
                      <p style={{ fontSize: '0.85rem', color: '#000000', lineHeight: 1.45, fontWeight: 700, fontFamily: 'var(--font-mono, monospace)', marginBottom: '1rem' }}>
                        {repo.desc}
                      </p>

                      {/* Card Footer Bar */}
                      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', fontSize: '0.78rem', color: '#000000', fontWeight: 900, fontFamily: 'var(--font-mono, monospace)', borderTop: '1.5px solid #000000', paddingTop: '0.65rem' }}>
                        <span style={{ display: 'flex', alignItems: 'center', gap: '0.3rem' }}>
                          <span style={{ width: '8px', height: '8px', borderRadius: '50%', background: repo.langColor, border: '1px solid #000000' }} />
                          {repo.lang}
                        </span>

                        <span>★ {repo.stars}</span>
                        <span>⌥ {repo.forks}</span>
                      </div>

                      {/* Click Expand Trigger */}
                      <div style={{ marginTop: '0.75rem', textAlign: 'center' }}>
                        <span style={{ fontSize: '0.72rem', fontWeight: 900, fontFamily: 'var(--font-mono, monospace)', background: '#ffffff', border: '1.5px solid #000000', padding: '0.25rem 0.6rem', borderRadius: '4px', boxShadow: '1.5px 1.5px 0 #000000', display: 'inline-block' }}>
                          {isExpanded ? 'Collapse ▲' : 'Click to Expand Inline ▼'}
                        </span>
                      </div>

                      {/* IN-PLACE ANIMATED EXPANSION PANEL */}
                      <div
                        style={{
                          maxHeight: isExpanded ? '800px' : '0px',
                          opacity: isExpanded ? 1 : 0,
                          overflow: 'hidden',
                          transition: 'all 0.4s cubic-bezier(0.16, 1, 0.3, 1)',
                          marginTop: isExpanded ? '1rem' : '0px',
                          paddingTop: isExpanded ? '1rem' : '0px',
                          borderTop: isExpanded ? '2px dashed #000000' : 'none'
                        }}
                      >
                        {/* 3-Column Metrics Counters */}
                        <div
                          style={{
                            display: 'grid',
                            gridTemplateColumns: 'repeat(3, 1fr)',
                            gap: '0.4rem',
                            marginBottom: '0.85rem',
                            padding: '0.65rem 0.4rem',
                            borderRadius: '6px',
                            background: '#ffffff',
                            border: '1.5px solid #000000',
                            boxShadow: '2px 2px 0 #000000'
                          }}
                        >
                          {repo.metrics.map((m, mIdx) => (
                            <div key={mIdx} style={{ textAlign: 'center' }}>
                              <div style={{ fontSize: '1.1rem', fontWeight: 900, color: '#000000', fontFamily: 'var(--font-mono, monospace)' }}>
                                {m.value}
                              </div>
                              <div style={{ fontSize: '0.62rem', color: '#000000', fontWeight: 800, marginTop: '0.1rem', fontFamily: 'var(--font-mono, monospace)' }}>
                                {m.label}
                              </div>
                            </div>
                          ))}
                        </div>

                        {/* Key Technical Highlights */}
                        <div style={{ marginBottom: '0.85rem' }}>
                          <div style={{ fontSize: '0.7rem', textTransform: 'uppercase', letterSpacing: '0.06em', fontWeight: 900, color: '#000000', marginBottom: '0.35rem', fontFamily: 'var(--font-mono, monospace)' }}>
                            Highlights:
                          </div>
                          <ul style={{ paddingLeft: '1rem', margin: 0, color: '#000000', fontSize: '0.78rem', lineHeight: 1.45, display: 'flex', flexDirection: 'column', gap: '0.25rem', fontWeight: 700, fontFamily: 'var(--font-mono, monospace)' }}>
                            {repo.highlights.map((h, hIdx) => (
                              <li key={hIdx}>{h}</li>
                            ))}
                          </ul>
                        </div>

                        {/* Tech Stack Pills */}
                        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.35rem', marginBottom: '1rem' }}>
                          {repo.techStack.map((tech, tIdx) => (
                            <span
                              key={tIdx}
                              style={{
                                fontSize: '0.68rem',
                                fontFamily: 'var(--font-mono, monospace)',
                                padding: '0.2rem 0.45rem',
                                borderRadius: '4px',
                                background: '#ffffff',
                                border: '1px solid #000000',
                                color: '#000000',
                                fontWeight: 900
                              }}
                            >
                              {tech}
                            </span>
                          ))}
                        </div>

                        {/* Action CTAs */}
                        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
                          <a
                            href={repo.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            onClick={(e) => {
                              e.stopPropagation();
                              playRetroClick();
                            }}
                            style={{
                              padding: '0.55rem 0.85rem',
                              borderRadius: '6px',
                              background: '#ffffff',
                              border: '1.5px solid #000000',
                              boxShadow: '2px 2px 0 #000000',
                              color: '#000000',
                              fontWeight: 900,
                              fontSize: '0.78rem',
                              fontFamily: 'var(--font-mono, monospace)',
                              textDecoration: 'none',
                              display: 'inline-flex',
                              alignItems: 'center',
                              gap: '0.35rem',
                              flex: '1 1 auto',
                              justifyContent: 'center'
                            }}
                          >
                            <IconGithub size={15} /> GitHub Repo
                          </a>

                          <a
                            href={repo.demo}
                            target="_blank"
                            rel="noopener noreferrer"
                            onClick={(e) => {
                              e.stopPropagation();
                              playRetroClick();
                            }}
                            style={{
                              padding: '0.55rem 0.85rem',
                              borderRadius: '6px',
                              background: '#ffffff',
                              border: '1.5px solid #000000',
                              boxShadow: '2px 2px 0 #000000',
                              color: '#000000',
                              fontWeight: 900,
                              fontSize: '0.78rem',
                              fontFamily: 'var(--font-mono, monospace)',
                              textDecoration: 'none',
                              display: 'inline-flex',
                              alignItems: 'center',
                              gap: '0.35rem',
                              flex: '1 1 auto',
                              justifyContent: 'center'
                            }}
                          >
                            <IconExternalLink size={15} /> Specs
                          </a>
                        </div>
                      </div>
                    </div>

                    {/* 100% Razor-Sharp Solid Black Vector Stroke Outline Overlay */}
                    <svg
                      viewBox="0 0 1000 600"
                      preserveAspectRatio="none"
                      style={{
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        width: '100%',
                        height: '100%',
                        pointerEvents: 'none',
                        zIndex: 3
                      }}
                    >
                      <path
                        d={folderSvgPath}
                        fill="none"
                        stroke="#000000"
                        strokeWidth="5"
                        vectorEffect="non-scaling-stroke"
                      />
                    </svg>
                  </div>
                );
              })}
            </div>
          </div>

        </div>
      </MacWindowWrapper>
    </section>
  );
}
