import React, { useState, useEffect } from 'react';

export default function MacNotesApp() {
  const defaultNotes = [
    {
      id: 'note_1',
      folder: 'Project Ideas',
      title: 'ChronoLens SigNoz Hackathon Plan',
      content: `⚡ ChronoLens — Predictive Reliability Loop Architecture\n\n1. Telemetry Ingestion: Stream live OpenTelemetry traces from SigNoz API feed.\n2. SLO Breach Forecasting: Predict p99 latency spikes >2.5s before outage.\n3. Reversible Mitigation: Dynamic traffic shed & LLM agent loop breaker.\n4. Audit Receipt: Issue digital receipt of "the outage that never happened".`,
      date: 'Today, 07:15 PM',
      font: 'VT323'
    },
    {
      id: 'note_2',
      folder: 'Architecture Ideas',
      title: 'Memoire Context Vector Decays',
      content: `🧠 Memoire — Long-Term AI Memory Graph\n\n- Index multi-step agent trajectories into vector similarity space.\n- Decay old episodic memories using half-life weight algorithm.\n- Sub-millisecond prompt injection for autonomous agent loops.`,
      date: 'Yesterday, 04:30 PM',
      font: 'Fira Code'
    },
    {
      id: 'note_3',
      folder: 'Quick Snippets',
      title: 'Nuvault WebCrypto Key Gen',
      content: `🔐 Nuvault Zero-Knowledge Cryptography\n\nconst key = await window.crypto.subtle.generateKey(\n  { name: 'AES-GCM', length: 256 },\n  true,\n  ['encrypt', 'decrypt']\n);\n// Client-side WebCrypto encryption before socket transmission`,
      date: 'July 25, 2026',
      font: 'Fira Code'
    }
  ];

  const [notes, setNotes] = useState(() => {
    try {
      const saved = localStorage.getItem('mac_portfolio_notes');
      return saved ? JSON.parse(saved) : defaultNotes;
    } catch (e) {
      return defaultNotes;
    }
  });

  const [selectedNoteId, setSelectedNoteId] = useState(notes[0]?.id || 'note_1');
  const [selectedFolder, setSelectedFolder] = useState('All Notes');
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    try {
      localStorage.setItem('mac_portfolio_notes', JSON.stringify(notes));
    } catch (e) {}
  }, [notes]);

  const activeNote = notes.find((n) => n.id === selectedNoteId) || notes[0] || defaultNotes[0];

  const filteredNotes = notes.filter((n) => {
    const matchFolder = selectedFolder === 'All Notes' || n.folder === selectedFolder;
    const matchSearch =
      n.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      n.content.toLowerCase().includes(searchQuery.toLowerCase());
    return matchFolder && matchSearch;
  });

  const handleCreateNote = () => {
    const newNote = {
      id: `note_${Date.now()}`,
      folder: selectedFolder === 'All Notes' ? 'Project Ideas' : selectedFolder,
      title: 'Untitled Note',
      content: 'Type your notes here...',
      date: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      font: 'VT323'
    };
    setNotes([newNote, ...notes]);
    setSelectedNoteId(newNote.id);
  };

  const handleDeleteNote = (id) => {
    if (notes.length <= 1) return;
    const updated = notes.filter((n) => n.id !== id);
    setNotes(updated);
    setSelectedNoteId(updated[0].id);
  };

  const updateActiveNoteField = (field, value) => {
    setNotes((prev) =>
      prev.map((n) => {
        if (n.id === activeNote.id) {
          const updated = { ...n, [field]: value };
          if (field === 'content') {
            const firstLine = value.split('\n')[0] || 'Untitled Note';
            updated.title = firstLine.substring(0, 32);
          }
          return updated;
        }
        return n;
      })
    );
  };

  const folders = ['All Notes', 'Project Ideas', 'Architecture Ideas', 'Quick Snippets'];

  const charCount = activeNote.content.length;
  const wordCount = activeNote.content.trim() ? activeNote.content.trim().split(/\s+/).length : 0;

  return (
    <div style={{ fontFamily: 'var(--font-mac-title)', display: 'flex', flexDirection: 'column', gap: '0.75rem', height: '100%' }}>
      {/* Top System 7 Notepad Toolbar */}
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', borderBottom: '2px solid #000', paddingBottom: '0.5rem', flexWrap: 'wrap', gap: '0.5rem' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
          <button onClick={handleCreateNote} className="mac-btn mac-btn-purple">
            ✏️ New Note +
          </button>
          <button onClick={() => handleDeleteNote(activeNote.id)} className="mac-btn mac-btn-pink">
            🗑️ Delete Note
          </button>
        </div>

        {/* Note Font Selector */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
          <span style={{ fontSize: '1rem', fontWeight: 'bold' }}>Typography:</span>
          <select
            value={activeNote ? activeNote.font : 'VT323'}
            onChange={(e) => updateActiveNoteField('font', e.target.value)}
            style={{
              padding: '0.2rem 0.4rem',
              border: '2px solid #000',
              fontFamily: 'var(--font-mac-title)',
              fontSize: '1rem',
              fontWeight: 'bold',
              borderRadius: '4px',
              background: '#fff'
            }}
          >
            <option value="VT323">Classic Mac Chicago (VT323)</option>
            <option value="Fira Code">Monaco / Fira Code</option>
            <option value="Inter">Geneva / Inter Body</option>
          </select>
        </div>
      </div>

      {/* Main 3-Pane Split View */}
      <div style={{ display: 'grid', gridTemplateColumns: '150px 200px 1fr', gap: '0.75rem', flex: 1, minHeight: '340px' }}>
        {/* Pane 1: Folders Sidebar */}
        <div className="mac-group-box" style={{ padding: '0.4rem' }}>
          <span className="mac-group-label">System Folders</span>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.35rem', marginTop: '0.5rem' }}>
            {folders.map((f) => (
              <button
                key={f}
                onClick={() => setSelectedFolder(f)}
                style={{
                  textAlign: 'left',
                  padding: '0.35rem 0.5rem',
                  border: '1px solid #000',
                  background: selectedFolder === f ? 'var(--mac-purple)' : '#fff',
                  color: selectedFolder === f ? '#fff' : '#000',
                  fontFamily: 'var(--font-mac-title)',
                  fontSize: '1.05rem',
                  fontWeight: 'bold',
                  cursor: 'pointer',
                  borderRadius: '3px'
                }}
              >
                📁 {f}
              </button>
            ))}
          </div>
        </div>

        {/* Pane 2: Notes Search & List */}
        <div className="mac-group-box" style={{ padding: '0.4rem', display: 'flex', flexDirection: 'column', gap: '0.4rem' }}>
          <span className="mac-group-label">Saved Notes ({filteredNotes.length})</span>
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="🔍 Search notes..."
            style={{
              padding: '0.3rem',
              border: '1px solid #000',
              fontFamily: 'var(--font-mac-body)',
              fontSize: '0.85rem',
              marginTop: '0.4rem'
            }}
          />

          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.35rem', overflowY: 'auto', flex: 1, maxHeight: '250px' }}>
            {filteredNotes.map((n) => (
              <button
                key={n.id}
                onClick={() => setSelectedNoteId(n.id)}
                style={{
                  textAlign: 'left',
                  padding: '0.4rem',
                  border: '2px solid #000',
                  background: selectedNoteId === n.id ? 'var(--mac-yellow)' : '#ffffff',
                  color: '#000000',
                  boxShadow: selectedNoteId === n.id ? '2px 2px 0px #000' : 'none',
                  cursor: 'pointer',
                  borderRadius: '4px'
                }}
              >
                <div style={{ fontFamily: 'var(--font-mac-title)', fontSize: '1.1rem', fontWeight: 'bold', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>
                  {n.title || 'Untitled Note'}
                </div>
                <div style={{ fontSize: '0.75rem', color: '#555' }}>{n.date}</div>
              </button>
            ))}
          </div>
        </div>

        {/* Pane 3: Note Writing Pad Area */}
        <div className="mac-group-box" style={{ background: '#fef3c7', display: 'flex', flexDirection: 'column', padding: '0.6rem' }}>
          <span className="mac-group-label">Notepad Pad — {activeNote.title}</span>

          <textarea
            value={activeNote.content}
            onChange={(e) => updateActiveNoteField('content', e.target.value)}
            placeholder="Type your notes here..."
            style={{
              flex: 1,
              width: '100%',
              minHeight: '260px',
              background: 'transparent',
              border: 'none',
              outline: 'none',
              resize: 'none',
              fontFamily: activeNote.font === 'VT323' ? 'var(--font-mac-title)' : activeNote.font === 'Fira Code' ? 'var(--font-mono)' : 'var(--font-mac-body)',
              fontSize: activeNote.font === 'VT323' ? '1.35rem' : '1rem',
              lineHeight: 1.6,
              color: '#000000',
              paddingTop: '0.5rem'
            }}
          />

          {/* Real-time Status Counter Footer */}
          <div style={{ borderTop: '1px solid #000', paddingTop: '0.3rem', marginTop: '0.4rem', display: 'flex', justifyContent: 'space-between', fontSize: '0.95rem', color: '#444' }}>
            <span>Words: <strong>{wordCount}</strong> • Chars: <strong>{charCount}</strong></span>
            <span>Saved in LocalStorage ✓</span>
          </div>
        </div>
      </div>
    </div>
  );
}
