import React, { useState, useRef } from 'react';
import { IconGithub, IconExternalLink } from './Icons';
import MacWindowWrapper from './MacWindowWrapper';
import { playRetroClick } from '../utils/sound';

export default function GithubProfileSection() {
  const [hoveredCell, setHoveredCell] = useState(null);
  const [hoveredFolderId, setHoveredFolderId] = useState(null);
  const [clickedFolderId, setClickedFolderId] = useState(null);
  const [isTrainPaused, setIsTrainPaused] = useState(false);
  const [snapOffset, setSnapOffset] = useState(0);

  const containerRef = useRef(null);
  const activeFolderId = hoveredFolderId || clickedFolderId;

  const centerCardInView = (cardEl) => {
    if (!containerRef.current || !cardEl) return true;
    const containerRect = containerRef.current.getBoundingClientRect();
    const cardRect = cardEl.getBoundingClientRect();

    // Calculate exact center offset to align card precisely at container center
    const cardCenter = cardRect.left + cardRect.width / 2;
    const containerCenter = containerRect.left + containerRect.width / 2;
    const delta = containerCenter - cardCenter;

    setSnapOffset(delta);
    return true;
  };

  const handleCardHover = (e, repoId) => {
    const isAllowed = centerCardInView(e.currentTarget);
    if (isAllowed) {
      playRetroClick();
      setHoveredFolderId(repoId);
    }
  };

  const handleCardClick = (e, repoId) => {
    const isAllowed = centerCardInView(e.currentTarget);
    if (isAllowed) {
      toggleExpand(repoId);
    }
  };

  const handleMouseLeaveContainer = () => {
    setHoveredFolderId(null);
    setClickedFolderId(null);
    setSnapOffset(0);
    // Smoothly unpause after snap offset glides back to original position
    setTimeout(() => {
      setIsTrainPaused(false);
    }, 250);
  };

  const toggleExpand = (id) => {
    playRetroClick();
    setClickedFolderId((prev) => (prev === id ? null : id));
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
      bg: "#fde047",
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
      bg: "#c084fc",
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
      bg: "#4ade80",
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
      bg: "#f472b6",
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

  // 6x duplicated cards array ensuring deep pre-rendered padding on both left and right sides
  const marqueeCards = [
    ...pinnedRepos,
    ...pinnedRepos,
    ...pinnedRepos,
    ...pinnedRepos,
    ...pinnedRepos,
    ...pinnedRepos
  ];

  const languages = [
    { name: "Python", percent: 38, color: "#3572A5" },
    { name: "TypeScript", percent: 28, color: "#3178C6" },
    { name: "Go", percent: 20, color: "#00ADD8" },
    { name: "C++", percent: 8, color: "#00599C" },
    { name: "Shell", percent: 6, color: "#4E5A65" }
  ];

  return (
    <section id="github">
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
          {/* BENTO TILE 1: PROFILE HERO CARD (Yellow Box with GitHub Avatar) */}
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
                  width: '54px',
                  height: '54px',
                  borderRadius: '50%',
                  background: '#ffffff',
                  border: '2.5px solid #000000',
                  boxShadow: '2.5px 2.5px 0 #000000',
                  flexShrink: 0,
                  overflow: 'hidden',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center'
                }}
              >
                <img
                  src="/assets/profile.jpg"
                  alt="Arjun Sabu (@greninja-op)"
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                />
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

          {/* BENTO TILE 3: 365-DAY GREEN ACTIVITY HEATMAP MATRIX & ENG INSIGHTS */}
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
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '0.75rem', flexWrap: 'wrap', gap: '0.5rem' }}>
              <div style={{ fontSize: '0.88rem', fontWeight: 900, color: '#000000', fontFamily: 'var(--font-mono, monospace)' }}>
                1,420 Contributions in the Last Year
              </div>

              {/* Heatmap Intensity Legend */}
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.35rem', fontSize: '0.72rem', fontWeight: 900, fontFamily: 'var(--font-mono, monospace)', color: '#000000' }}>
                <span>Less</span>
                <span style={{ width: '10px', height: '10px', borderRadius: '2px', background: '#e2e8f0', border: '1px solid #000' }} />
                <span style={{ width: '10px', height: '10px', borderRadius: '2px', background: '#86efac', border: '1px solid #000' }} />
                <span style={{ width: '10px', height: '10px', borderRadius: '2px', background: '#4ade80', border: '1px solid #000' }} />
                <span style={{ width: '10px', height: '10px', borderRadius: '2px', background: '#22c55e', border: '1px solid #000' }} />
                <span style={{ width: '10px', height: '10px', borderRadius: '2px', background: '#15803d', border: '1px solid #000' }} />
                <span>More</span>
              </div>
            </div>

            {/* FLEX ROW: MATRIX ON LEFT + HIGH-VALUE ENG METRICS INSIGHTS ON RIGHT */}
            <div style={{ display: 'flex', gap: '1.25rem', alignItems: 'center', flexWrap: 'wrap' }}>
              {/* Heatmap Grid Touch Scroll Container */}
              <div style={{ flex: '1 1 640px', overflowX: 'auto', paddingBottom: '0.25rem', WebkitOverflowScrolling: 'touch' }}>
                <div style={{ display: 'flex', gap: '4px', minWidth: '680px' }}>
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

              {/* RIGHT SIDE: LEFTOVER SPACE FILLER — STATS INSIGHTS BADGE PANEL */}
              <div
                style={{
                  flex: '1 1 210px',
                  background: '#f8fafc',
                  border: '2px solid #000000',
                  borderRadius: '6px',
                  padding: '0.75rem 0.9rem',
                  boxShadow: '2.5px 2.5px 0 #000000',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '0.5rem',
                  minWidth: '190px'
                }}
              >
                <div style={{ fontSize: '0.75rem', fontWeight: 900, fontFamily: 'var(--font-mono, monospace)', color: '#000000', borderBottom: '1.5px solid #000000', paddingBottom: '0.3rem', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                  <span>⚡ Activity Insights</span>
                  <span style={{ background: '#4ade80', border: '1px solid #000000', padding: '0.1rem 0.35rem', borderRadius: '3px', fontSize: '0.62rem', fontWeight: 900 }}>ONLINE</span>
                </div>

                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', fontSize: '0.72rem', fontFamily: 'var(--font-mono, monospace)', fontWeight: 800 }}>
                  <span style={{ color: '#475569' }}>🔥 Active Streak:</span>
                  <span style={{ color: '#000000', fontWeight: 900 }}>147 Days</span>
                </div>

                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', fontSize: '0.72rem', fontFamily: 'var(--font-mono, monospace)', fontWeight: 800 }}>
                  <span style={{ color: '#475569' }}>📈 Daily Avg:</span>
                  <span style={{ color: '#000000', fontWeight: 900 }}>3.8 / day</span>
                </div>

                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', fontSize: '0.72rem', fontFamily: 'var(--font-mono, monospace)', fontWeight: 800 }}>
                  <span style={{ color: '#475569' }}>🏆 Peak Month:</span>
                  <span style={{ color: '#000000', fontWeight: 900 }}>Nov (194)</span>
                </div>

                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', fontSize: '0.72rem', fontFamily: 'var(--font-mono, monospace)', fontWeight: 800 }}>
                  <span style={{ color: '#475569' }}>✅ PR Velocity:</span>
                  <span style={{ color: '#000000', fontWeight: 900 }}>Top 1%</span>
                </div>
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

          {/* BENTO TILE 5: FEATURED PINNED REPOSITORIES — INFINITE MARQUEE TICKER TRAIN OF FOLDER CARDS */}
          <div style={{ gridColumn: '1 / -1', marginTop: '0.5rem', overflow: 'hidden' }}>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '1rem', flexWrap: 'wrap', gap: '0.5rem' }}>
              <div style={{ fontSize: '1rem', fontWeight: 900, color: '#000000', fontFamily: 'var(--font-mono, monospace)' }}>
                Featured Open-Source Pinned Repositories (Hover Any Card to Pause & Expand)
              </div>

              <div style={{ fontSize: '0.75rem', fontWeight: 900, background: '#fde047', border: '1.5px solid #000000', padding: '0.2rem 0.55rem', borderRadius: '4px', fontFamily: 'var(--font-mono, monospace)' }}>
                🚂 INFINITE FOLDER CARD TICKER TRAIN
              </div>
            </div>

            {/* CONTINUOUS HORIZONTAL MARQUEE CARD TICKER CONTAINER */}
            <div
              ref={containerRef}
              onMouseEnter={() => setIsTrainPaused(true)}
              onMouseLeave={handleMouseLeaveContainer}
              style={{
                width: '100%',
                overflow: 'hidden',
                padding: '0.5rem 0 1.25rem 0',
                position: 'relative'
              }}
            >
              {/* SOLUTION 2: AUTO-SNAP SMOOTH TRANSFORM OFFSET WRAPPER */}
              <div
                style={{
                  transform: `translate3d(${snapOffset}px, 0, 0)`,
                  transition: 'transform 0.5s cubic-bezier(0.16, 1, 0.3, 1)',
                  willChange: 'transform'
                }}
              >
                {/* ANIMATED TICKER TRAIN TRACK */}
                <div
                  style={{
                    display: 'flex',
                    gap: '1.25rem',
                    width: 'max-content',
                    animationName: 'folderCardsMarqueeTrain',
                    animationDuration: '64s',
                    animationTimingFunction: 'linear',
                    animationIterationCount: 'infinite',
                    animationPlayState: isTrainPaused || activeFolderId ? 'paused' : 'running',
                    willChange: 'transform'
                  }}
                >
                  {marqueeCards.map((repo, idx) => {
                    const uniqueKey = `${repo.id}-${idx}`;
                    const isExpanded = activeFolderId === repo.id;

                    return (
                      <div
                        key={uniqueKey}
                        onMouseEnter={(e) => handleCardHover(e, repo.id)}
                        style={{
                          position: 'relative',
                          width: '320px',
                          flexShrink: 0,
                          zIndex: isExpanded ? 50 : 2
                        }}
                      >
                        {/* SEAMLESS FOLDER TAB */}
                        <div
                          style={{
                            display: 'inline-flex',
                            alignItems: 'center',
                            gap: '0.4rem',
                            background: repo.bg,
                            borderLeft: '2.5px solid #000000',
                            borderTop: '2.5px solid #000000',
                            borderRight: '2.5px solid #000000',
                            borderBottom: 'none',
                            borderRadius: '8px 12px 0 0',
                            padding: '0.35rem 0.85rem',
                            fontWeight: 900,
                            fontSize: '0.8rem',
                            fontFamily: 'var(--font-mono, monospace)',
                            color: '#000000',
                            position: 'relative',
                            zIndex: 3,
                            marginBottom: '-2.5px'
                          }}
                        >
                          <span>📁</span>
                          <span>{repo.name}</span>
                        </div>

                        {/* MAIN FOLDER BODY CONTAINER */}
                        <div
                          onClick={(e) => handleCardClick(e, repo.id)}
                        style={{
                          width: '100%',
                          background: repo.bg,
                          border: '2.5px solid #000000',
                          borderRadius: '0 10px 10px 10px',
                          padding: '1.25rem 1.1rem',
                          boxShadow: isExpanded ? '6px 6px 0 #000000' : '4px 4px 0 #000000',
                          transform: isExpanded ? 'translate3d(-2px, -2px, 0px)' : 'translate3d(0px, 0px, 0px)',
                          transition: 'transform 0.25s cubic-bezier(0.16, 1, 0.3, 1), box-shadow 0.25s cubic-bezier(0.16, 1, 0.3, 1)',
                          color: '#000000',
                          cursor: 'pointer',
                          position: 'relative',
                          zIndex: 2,
                          boxSizing: 'border-box',
                          willChange: 'transform, box-shadow'
                        }}
                      >
                        {/* Title Bar & 3D Graphic */}
                        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '0.75rem', gap: '0.5rem' }}>
                          <h4 style={{ fontSize: '1.15rem', fontWeight: 900, color: '#000000', margin: 0, fontFamily: 'var(--font-mono, monospace)', wordBreak: 'break-word' }}>
                            {repo.name}
                          </h4>

                          <span style={{ fontSize: '1.4rem', userSelect: 'none', flexShrink: 0 }}>
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
                              boxShadow: '1.5px 1.5px 0 #000000',
                              display: 'inline-block'
                            }}
                          >
                            {repo.badge}
                          </span>
                        </div>

                        {/* Description */}
                        <p style={{ fontSize: '0.85rem', color: '#000000', lineHeight: 1.45, fontWeight: 700, fontFamily: 'var(--font-mono, monospace)', marginBottom: '0.85rem' }}>
                          {repo.desc}
                        </p>

                        {/* Card Stats Footer Bar */}
                        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', fontSize: '0.78rem', color: '#000000', fontWeight: 900, fontFamily: 'var(--font-mono, monospace)', borderTop: '1.5px solid #000000', paddingTop: '0.65rem' }}>
                          <span style={{ display: 'flex', alignItems: 'center', gap: '0.3rem' }}>
                            <span style={{ width: '8px', height: '8px', borderRadius: '50%', background: repo.langColor, border: '1px solid #000000' }} />
                            {repo.lang}
                          </span>

                          <span>★ {repo.stars}</span>
                          <span>⌥ {repo.forks}</span>
                        </div>

                        {/* Hover / Click Expand Trigger Indicator */}
                        <div style={{ marginTop: '0.85rem', textAlign: 'center' }}>
                          <span style={{ fontSize: '0.74rem', fontWeight: 900, fontFamily: 'var(--font-mono, monospace)', background: '#ffffff', border: '1.5px solid #000000', padding: '0.3rem 0.7rem', borderRadius: '5px', boxShadow: '2px 2px 0 #000000', display: 'inline-block', color: '#000000' }}>
                            {isExpanded ? 'Paused & Active ▲' : 'Hover to Pause & Expand ▼'}
                          </span>
                        </div>

                        {/* 60FPS HARDWARE-ACCELERATED HOVER ACCORDION EXPANSION PANEL */}
                        <div
                          style={{
                            display: 'grid',
                            gridTemplateRows: isExpanded ? '1fr' : '0fr',
                            transition: 'grid-template-rows 0.35s cubic-bezier(0.16, 1, 0.3, 1), opacity 0.25s ease',
                            opacity: isExpanded ? 1 : 0,
                            willChange: 'grid-template-rows, opacity'
                          }}
                        >
                          <div style={{ overflow: 'hidden' }}>
                            <div style={{ paddingTop: '1rem', borderTop: '2px dashed #000000', marginTop: '1rem' }}>
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
                                  Key Accomplishments:
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
                                    ⚡ {tech}
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
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>

        </div>
      </MacWindowWrapper>

      {/* Infinite Horizontal Folder Cards Marquee Keyframes */}
      <style>{`
        @keyframes folderCardsMarqueeTrain {
          0% {
            transform: translate3d(-33.333333%, 0, 0);
          }
          100% {
            transform: translate3d(-66.666666%, 0, 0);
          }
        }
      `}</style>
    </section>
  );
}
