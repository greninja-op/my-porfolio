import React, { useState } from 'react';

export default function MemoireApp() {
  const [query, setQuery] = useState('');
  const [memories, setMemories] = useState([
    { id: 1, text: 'ChronoLens SigNoz hackathon architecture rules', score: 0.96, tag: 'Episodic' },
    { id: 2, text: 'Nuvault zero-trust AES-GCM 256 encryption keys', score: 0.89, tag: 'Semantic' },
    { id: 3, text: 'CFLS distributed file locking lease timeouts', score: 0.84, tag: 'System' },
    { id: 4, text: 'User preference: Pop Macintosh System 7 UI style', score: 0.98, tag: 'Preference' }
  ]);
  const [newMem, setNewMem] = useState('');
  const [activeTab, setActiveTab] = useState('search');

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
    <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', fontFamily: 'var(--font-mac-title)' }}>
      {/* Header */}
      <div style={{ borderBottom: '2px solid #000', paddingBottom: '0.6rem', display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '0.5rem' }}>
        <div>
          <h2 style={{ fontSize: '1.7rem', color: '#000', lineHeight: 1 }}>🧠 Memoire.app</h2>
          <span style={{ fontSize: '1.05rem', color: 'var(--mac-purple-dark)', fontWeight: 'bold' }}>
            AI Memory Graph & Long-Term Context Retention Engine
          </span>
        </div>

        <div style={{ display: 'flex', gap: '0.4rem' }}>
          <button
            onClick={() => setActiveTab('search')}
            className={`mac-btn ${activeTab === 'search' ? 'mac-btn-purple' : ''}`}
            style={{ padding: '0.2rem 0.6rem', fontSize: '1rem' }}
          >
            🔍 Semantic Query Sandbox
          </button>
          <button
            onClick={() => setActiveTab('about')}
            className={`mac-btn ${activeTab === 'about' ? 'mac-btn-pink' : ''}`}
            style={{ padding: '0.2rem 0.6rem', fontSize: '1rem' }}
          >
            💡 What Memoire is Needed For
          </button>
          <a
            href="https://github.com/greninja-op/Memoire.git"
            target="_blank"
            rel="noopener noreferrer"
            className="mac-btn mac-btn-lime"
            style={{ textDecoration: 'none', padding: '0.2rem 0.6rem', fontSize: '1rem' }}
          >
            GitHub ↗
          </a>
        </div>
      </div>

      {activeTab === 'search' && (
        <>
          {/* Query Bar */}
          <form onSubmit={handleSearch} style={{ display: 'flex', gap: '0.6rem' }}>
            <input
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search AI agent semantic context memories (e.g. 'encryption keys', 'SigNoz')..."
              style={{
                flex: 1,
                padding: '0.5rem 0.75rem',
                border: '2px solid #000',
                borderRadius: '4px',
                fontFamily: 'var(--font-mac-body)',
                fontSize: '1rem',
                outline: 'none'
              }}
            />
            <button type="submit" className="mac-btn mac-btn-purple">
              Recall Memory 🧠
            </button>
          </form>

          {/* Add New Memory Bar */}
          <form onSubmit={handleAddMemory} style={{ display: 'flex', gap: '0.6rem' }}>
            <input
              type="text"
              value={newMem}
              onChange={(e) => setNewMem(e.target.value)}
              placeholder="Add new persistent memory node..."
              style={{
                flex: 1,
                padding: '0.4rem 0.75rem',
                border: '2px solid #000',
                borderRadius: '4px',
                fontFamily: 'var(--font-mac-body)',
                fontSize: '0.95rem',
                outline: 'none'
              }}
            />
            <button type="submit" className="mac-btn mac-btn-lime">
              Store Memory +
            </button>
          </form>

          {/* Memories List */}
          <div className="mac-group-box">
            <span className="mac-group-label">Retrieved Vector Similarity Memory Nodes</span>
            <div style={{ marginTop: '0.75rem', display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
              {memories.map((m) => (
                <div
                  key={m.id}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    background: '#ffffff',
                    border: '2px solid #000',
                    boxShadow: '2px 2px 0px #000',
                    padding: '0.5rem 0.75rem'
                  }}
                >
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
                    <span style={{ background: 'var(--mac-cyan)', border: '1px solid #000', padding: '1px 6px', fontSize: '0.95rem', fontWeight: 'bold' }}>
                      {m.tag}
                    </span>
                    <span style={{ fontFamily: 'var(--font-mac-body)', fontSize: '0.98rem', color: '#111' }}>
                      {m.text}
                    </span>
                  </div>
                  <span style={{ fontFamily: 'var(--font-mono)', fontWeight: 'bold', color: 'var(--mac-purple-dark)' }}>
                    Sim Score: {(m.score * 100).toFixed(0)}%
                  </span>
                </div>
              ))}
            </div>
          </div>
        </>
      )}

      {activeTab === 'about' && (
        <div className="mac-group-box">
          <span className="mac-group-label">What Memoire is Needed For</span>
          <div style={{ marginTop: '0.75rem', fontFamily: 'var(--font-mac-body)', fontSize: '1rem', lineHeight: 1.6, color: '#111' }}>
            <h3 style={{ fontFamily: 'var(--font-mac-title)', fontSize: '1.4rem', color: 'var(--mac-purple-dark)', marginBottom: '0.4rem' }}>
              The Challenge:
            </h3>
            <p style={{ marginBottom: '0.8rem' }}>
              Standard LLMs suffer from context window overflow and forget user preferences or key system state over multi-step agent executions.
            </p>

            <h3 style={{ fontFamily: 'var(--font-mac-title)', fontSize: '1.4rem', color: 'var(--mac-purple-dark)', marginBottom: '0.4rem' }}>
              Memoire Solution:
            </h3>
            <p>
              Memoire indexes agent interactions into a persistent semantic memory graph. When an agent receives a prompt, Memoire calculates vector similarity scores, prunes irrelevant context, and retrieves high-relevance memories instantly.
            </p>
          </div>
        </div>
      )}
    </div>
  );
}
