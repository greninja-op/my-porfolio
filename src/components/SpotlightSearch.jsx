import React, { useState, useEffect, useRef } from 'react';
import { projects } from '../data/portfolioData';

export default function SpotlightSearch({ isOpen, onClose, onOpenApp }) {
  const [query, setQuery] = useState('');
  const inputRef = useRef(null);

  useEffect(() => {
    if (isOpen && inputRef.current) {
      inputRef.current.focus();
    }
  }, [isOpen]);

  if (!isOpen) return null;

  const allSearchItems = [
    ...projects.map((p) => ({ id: p.id, name: p.title, kind: `Application [${p.category}]`, icon: p.icon, type: 'app' })),
    { id: 'about', name: 'About Arjun Sabu', kind: 'System Profile', icon: '', type: 'app' },
    { id: 'resume', name: 'Resume.pdf', kind: 'PDF Document', icon: '📄', type: 'app' },
    { id: 'chooser', name: 'The Chooser', kind: 'Network Hub', icon: '📡', type: 'app' },
    { id: 'control_panels', name: 'Control Panel', kind: 'System Panel', icon: '🎛️', type: 'app' },
    { id: 'extensions', name: 'Extensions Manager', kind: 'Filter Tool', icon: '🧩', type: 'app' },
    { id: 'terminal', name: 'Terminal.cli', kind: 'Command Line Console', icon: '💻', type: 'app' },
    { id: 'calculator', name: 'Calculator', kind: 'Desk Accessory', icon: '🧮', type: 'app' },
    { id: 'puzzle', name: 'Puzzle 15', kind: 'Desk Accessory', icon: '🧩', type: 'app' }
  ];

  const results = query.trim() === ''
    ? allSearchItems
    : allSearchItems.filter((item) =>
        item.name.toLowerCase().includes(query.toLowerCase()) ||
        item.kind.toLowerCase().includes(query.toLowerCase())
      );

  return (
    <div
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        background: 'rgba(0, 0, 0, 0.4)',
        zIndex: 9999,
        display: 'flex',
        alignItems: 'flex-start',
        justifyContent: 'center',
        paddingTop: '18vh',
        fontFamily: 'var(--font-mac-title)'
      }}
      onClick={onClose}
    >
      <div
        style={{
          background: '#ffffff',
          border: '3px solid #000000',
          boxShadow: '6px 6px 0px #000000',
          width: '90%',
          maxWidth: '560px',
          borderRadius: '6px',
          overflow: 'hidden',
          animation: 'spotlightPop 0.15s ease-out'
        }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Spotlight Search Bar Input */}
        <div style={{ display: 'flex', alignItems: 'center', padding: '0.75rem 1rem', background: 'var(--mac-yellow)', borderBottom: '2px solid #000' }}>
          <span style={{ fontSize: '1.4rem', marginRight: '0.6rem' }}>🔍 Spotlight Search</span>
          <input
            ref={inputRef}
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search apps, projects, resume, system tools... (⌘ + Space)"
            style={{
              flex: 1,
              background: '#ffffff',
              border: '2px solid #000',
              padding: '0.4rem 0.75rem',
              fontFamily: 'var(--font-mac-body)',
              fontSize: '1rem',
              outline: 'none'
            }}
          />
        </div>

        {/* Results List */}
        <div style={{ maxHeight: '320px', overflowY: 'auto', padding: '0.5rem' }}>
          {results.length === 0 ? (
            <div style={{ padding: '1rem', textAlign: 'center', color: '#666', fontStyle: 'italic' }}>
              No matching items found for "{query}".
            </div>
          ) : (
            results.map((item) => (
              <div
                key={item.id}
                onClick={() => {
                  onOpenApp(item.id);
                  onClose();
                }}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  padding: '0.5rem 0.75rem',
                  border: '1px solid #ddd',
                  borderRadius: '4px',
                  marginBottom: '0.3rem',
                  cursor: 'pointer',
                  background: '#ffffff'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = 'var(--mac-purple)';
                  e.currentTarget.style.color = '#ffffff';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = '#ffffff';
                  e.currentTarget.style.color = '#000000';
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
                  <span style={{ fontSize: '1.3rem' }}>{item.icon}</span>
                  <div>
                    <div style={{ fontSize: '1.15rem', fontWeight: 'bold' }}>{item.name}</div>
                    <div style={{ fontSize: '0.85rem', opacity: 0.8 }}>{item.kind}</div>
                  </div>
                </div>
                <span style={{ fontSize: '0.9rem', fontWeight: 'bold' }}>Launch ↵</span>
              </div>
            ))
          )}
        </div>
      </div>

      <style>{`
        @keyframes spotlightPop {
          from { transform: translateY(-20px); opacity: 0; }
          to { transform: translateY(0); opacity: 1; }
        }
      `}</style>
    </div>
  );
}
