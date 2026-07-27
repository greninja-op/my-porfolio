import React, { useState } from 'react';
import { projects } from '../data/portfolioData';

export default function MemoireApp() {
  const pData = projects.find((p) => p.id === 'memoire') || projects[1];
  const [query, setQuery] = useState('');
  const [memories, setMemories] = useState([
    { id: 1, text: 'ChronoLens SigNoz hackathon architecture rules', score: 0.96, tag: 'Episodic' },
    { id: 2, text: 'Nuvault zero-trust AES-GCM 256 encryption keys', score: 0.89, tag: 'Semantic' },
    { id: 3, text: 'CFLS distributed file locking lease timeouts', score: 0.84, tag: 'System' },
    { id: 4, text: 'User preference: Pop Macintosh System 7 UI style', score: 0.98, tag: 'Preference' }
  ]);
  const [newMem, setNewMem] = useState('');
  const [activeTab, setActiveTab] = useState('overview');

  const handleSearch = (e) => {
    e.preventDefault();
    if (!query) return;
    const sorted = [...memories].map((m) => ({
      ...m,
      score: +(0.7 + Math.random() * 0.28).toFixed(2)
    })).sort((a, b) => b.score - a.score);
    setMemories(sorted);
  };

  const handleAddMemory = (e) => {
    e.preventDefault();
    if (!newMem) return;
    setMemories((prev) => [
      { id: Date.now(), text: newMem, score: 0.99, tag: 'User Input' },
      ...prev
    ]);
    setNewMem('');
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '1.2rem', fontFamily: 'var(--font-mac-title)' }}>
      {/* Top Header with Crisp Official Logo */}
      <div style={{ borderBottom: '2px solid #000', paddingBottom: '0.75rem' }}>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '0.5rem', marginBottom: '0.4rem' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.8rem' }}>
            <img
              src={pData.logoImg}
              alt="Memoire Crisp Logo"
              style={{
                width: '52px',
                height: '52px',
                objectFit: 'contain',
                borderRadius: '8px',
                border: '2px solid #000',
                boxShadow: '2px 2px 0px #000',
                background: '#000'
              }}
              onError={(e) => {
                e.target.style.display = 'none';
              }}
            />
            <div>
              <h2 style={{ fontSize: '1.8rem', color: '#000', lineHeight: 1 }}>{pData.title}</h2>
              <span style={{ fontSize: '1.1rem', color: 'var(--mac-purple-dark)', fontWeight: 'bold' }}>
                {pData.subtitle}
              </span>
            </div>
          </div>
          <span
            style={{
              background: 'var(--mac-purple)',
              color: '#fff',
              border: '2px solid #000',
              padding: '2px 8px',
              fontSize: '1.05rem',
              fontWeight: 'bold',
              boxShadow: '2px 2px 0px #000'
            }}
          >
            {pData.badge}
          </span>
        </div>

        {/* Action Buttons */}
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.6rem', marginTop: '0.6rem' }}>
          <a
            href={pData.github}
            target="_blank"
            rel="noopener noreferrer"
            className="mac-btn mac-btn-purple"
            style={{ textDecoration: 'none' }}
          >
            📦 GitHub Repository ↗
          </a>
          {pData.website && (
            <a
              href={pData.website}
              target="_blank"
              rel="noopener noreferrer"
              className="mac-btn mac-btn-cyan"
              style={{ textDecoration: 'none' }}
            >
              🌐 Project Link ↗
            </a>
          )}
          <button
            onClick={() => setActiveTab(activeTab === 'overview' ? 'search' : 'overview')}
            className="mac-btn mac-btn-lime"
          >
            {activeTab === 'overview' ? '🔍 Launch Semantic Memory Tool' : '📖 View App Overview'}
          </button>
        </div>
      </div>

      {activeTab === 'overview' ? (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
          {/* Purpose & Description Box */}
          <div className="mac-group-box">
            <span className="mac-group-label">What Memoire is Needed For</span>
            <p style={{ fontFamily: 'var(--font-mac-body)', fontSize: '1.05rem', lineHeight: 1.6, color: '#111', marginTop: '0.5rem' }}>
              {pData.description}
            </p>
          </div>

          {/* Capabilities List */}
          <div className="mac-group-box">
            <span className="mac-group-label">Key Architectural Features</span>
            <div style={{ marginTop: '0.5rem', display: 'flex', flexDirection: 'column', gap: '0.4rem' }}>
              {pData.features.map((feat, i) => (
                <div key={i} style={{ fontSize: '1.1rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                  <span style={{ color: 'var(--mac-purple-dark)', fontWeight: 'bold' }}>✓</span>
                  <span>{feat}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Tech Stack Pills */}
          <div className="mac-group-box">
            <span className="mac-group-label">Tech Stack & Frameworks</span>
            <div style={{ marginTop: '0.5rem', display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
              {pData.techStack.map((tech, i) => (
                <span
                  key={i}
                  style={{
                    background: 'var(--mac-lime)',
                    border: '2px solid #000',
                    padding: '2px 8px',
                    fontSize: '1rem',
                    fontWeight: 'bold',
                    boxShadow: '1px 1px 0px #000'
                  }}
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>
      ) : (
        /* Semantic Memory Search Tool */
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
          <form onSubmit={handleSearch} style={{ display: 'flex', gap: '0.6rem' }}>
            <input
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search AI agent semantic memories..."
              style={{
                flex: 1,
                padding: '0.5rem',
                border: '2px solid #000',
                borderRadius: '4px',
                fontFamily: 'var(--font-mac-body)'
              }}
            />
            <button type="submit" className="mac-btn mac-btn-purple">Search</button>
          </form>

          <form onSubmit={handleAddMemory} style={{ display: 'flex', gap: '0.6rem' }}>
            <input
              type="text"
              value={newMem}
              onChange={(e) => setNewMem(e.target.value)}
              placeholder="Store new persistent memory node..."
              style={{
                flex: 1,
                padding: '0.4rem',
                border: '2px solid #000',
                borderRadius: '4px',
                fontFamily: 'var(--font-mac-body)'
              }}
            />
            <button type="submit" className="mac-btn mac-btn-lime">Add Node +</button>
          </form>

          <div className="mac-group-box">
            <span className="mac-group-label">Retrieved Memory Nodes</span>
            <div style={{ marginTop: '0.5rem', display: 'flex', flexDirection: 'column', gap: '0.4rem' }}>
              {memories.map((m) => (
                <div key={m.id} style={{ display: 'flex', justifyContent: 'space-between', border: '1px solid #000', padding: '0.4rem', background: '#fff' }}>
                  <span>[{m.tag}] {m.text}</span>
                  <strong>Sim: {(m.score * 100).toFixed(0)}%</strong>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
