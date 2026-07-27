import React, { useState, useRef, useEffect } from 'react';
import { IconTerminal, IconX } from './Icons';
import { personalInfo, projects, skillCategories, terminalHelp } from '../data/portfolioData';

export default function Terminal({ isOpen, onClose }) {
  const [inputVal, setInputVal] = useState('');
  const [history, setHistory] = useState([
    { type: 'output', text: '⚡ Welcome to greninja-op Cyber CLI v1.2.0' },
    { type: 'output', text: 'Type "help" to see available commands or "projects" to view works.' }
  ]);

  const bottomRef = useRef(null);

  useEffect(() => {
    if (isOpen && bottomRef.current) {
      bottomRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [history, isOpen]);

  if (!isOpen) return null;

  const handleCommand = (cmdStr) => {
    const cleanCmd = cmdStr.trim().toLowerCase();
    const newHistory = [...history, { type: 'input', text: `$ ${cmdStr}` }];

    switch (cleanCmd) {
      case 'help':
        newHistory.push({
          type: 'output',
          text: terminalHelp.map((h) => `${h.cmd.padEnd(12)} - ${h.desc}`).join('\n')
        });
        break;

      case 'whoami':
        newHistory.push({
          type: 'output',
          text: `User: ${personalInfo.name} (@${personalInfo.handle})\nRole: ${personalInfo.title}\nBio: ${personalInfo.bio}`
        });
        break;

      case 'projects':
        newHistory.push({
          type: 'output',
          text: projects.map((p) => `• ${p.title.padEnd(15)} [${p.category}] - ${p.shortDescription}`).join('\n')
        });
        break;

      case 'skills':
        const skillsText = skillCategories
          .map((cat) => `[${cat.name}]\n` + cat.skills.map((s) => `  ${s.name.padEnd(30)} ${s.level}%`).join('\n'))
          .join('\n\n');
        newHistory.push({ type: 'output', text: skillsText });
        break;

      case 'stats':
        newHistory.push({
          type: 'output',
          text: personalInfo.stats.map((s) => `${s.label}: ${s.value}`).join('\n')
        });
        break;

      case 'contact':
        newHistory.push({
          type: 'output',
          text: `Email: ${personalInfo.email}\nGitHub: ${personalInfo.github}\nLinkedIn: ${personalInfo.linkedin}`
        });
        break;

      case 'clear':
        setHistory([]);
        return;

      case '':
        break;

      default:
        newHistory.push({
          type: 'output',
          text: `Command not found: "${cleanCmd}". Type "help" for a list of available commands.`
        });
        break;
    }

    setHistory(newHistory);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    handleCommand(inputVal);
    setInputVal('');
  };

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div
        className="glass-card"
        style={{
          maxWidth: '800px',
          width: '100%',
          height: '520px',
          display: 'flex',
          flexDirection: 'column',
          padding: 0,
          overflow: 'hidden',
          background: '#070a12',
          border: '1px solid var(--accent-violet)',
          boxShadow: '0 0 40px rgba(139, 92, 246, 0.3)'
        }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Terminal Titlebar */}
        <div
          style={{
            background: 'rgba(15, 23, 42, 0.9)',
            padding: '0.75rem 1.25rem',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            borderBottom: '1px solid var(--border-subtle)'
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
            <IconTerminal size={18} color="var(--accent-cyan)" />
            <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.85rem', color: 'var(--text-primary)', fontWeight: 600 }}>
              greninja-op@portfolio-cli:~
            </span>
          </div>

          <button
            onClick={onClose}
            style={{
              background: 'none',
              border: 'none',
              color: 'var(--text-secondary)',
              cursor: 'pointer'
            }}
          >
            <IconX size={18} />
          </button>
        </div>

        {/* Console Body */}
        <div
          style={{
            flex: 1,
            padding: '1.25rem',
            overflowY: 'auto',
            fontFamily: 'var(--font-mono)',
            fontSize: '0.88rem',
            lineHeight: 1.6,
            color: '#34d399'
          }}
        >
          {history.map((item, idx) => (
            <div key={idx} style={{ marginBottom: '0.6rem', whitespace: 'pre-wrap' }}>
              {item.type === 'input' ? (
                <span style={{ color: 'var(--accent-cyan)', fontWeight: 600 }}>{item.text}</span>
              ) : (
                <span style={{ color: '#cbd5e1' }}>{item.text}</span>
              )}
            </div>
          ))}
          <div ref={bottomRef} />
        </div>

        {/* Input Bar */}
        <form
          onSubmit={handleSubmit}
          style={{
            display: 'flex',
            alignItems: 'center',
            padding: '0.75rem 1.25rem',
            background: 'rgba(15, 23, 42, 0.9)',
            borderTop: '1px solid var(--border-subtle)'
          }}
        >
          <span style={{ fontFamily: 'var(--font-mono)', color: 'var(--accent-violet)', marginRight: '0.6rem', fontWeight: 700 }}>
            $
          </span>
          <input
            type="text"
            value={inputVal}
            onChange={(e) => setInputVal(e.target.value)}
            placeholder="Type 'help'..."
            autoFocus
            style={{
              flex: 1,
              background: 'none',
              border: 'none',
              outline: 'none',
              color: 'var(--text-primary)',
              fontFamily: 'var(--font-mono)',
              fontSize: '0.9rem'
            }}
          />
        </form>
      </div>
    </div>
  );
}
