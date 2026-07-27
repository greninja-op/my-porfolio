import React, { useState } from 'react';
import { personalInfo, projects, skillCategories, terminalHelp } from '../data/portfolioData';

export default function TerminalMac({ onLaunchApp }) {
  const [inputVal, setInputVal] = useState('');
  const [history, setHistory] = useState([
    { type: 'output', text: ' Macintosh System 7 Cyber CLI (greninja-op v1.3)' },
    { type: 'output', text: 'Type "help" or "open <app>" to interact with System 7 desktop.' }
  ]);

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

      case 'contact':
        newHistory.push({
          type: 'output',
          text: `Email: ${personalInfo.email}\nGitHub: ${personalInfo.github}\nLinkedIn: ${personalInfo.linkedin}`
        });
        break;

      case 'clear':
        setHistory([]);
        return;

      case 'stats':
        newHistory.push({
          type: 'output',
          text: personalInfo.stats.map((s) => `${s.label.padEnd(24)} → ${s.value}`).join('\n')
        });
        break;

      case '':
        break;

      default:
        // Handle open <appName> commands
        if (cleanCmd.startsWith('open ')) {
          const appName = cleanCmd.replace('open ', '').trim();
          const appMap = {
            chronolens: 'chronolens', memoire: 'memoire', nuvault: 'nuvault', cfls: 'cfls',
            macgit: 'macgit', notes: 'notes', projects: 'projects', resume: 'resume',
            chooser: 'chooser', control_panels: 'control_panels', terminal: 'terminal',
            calculator: 'calculator', puzzle: 'puzzle', about: 'about'
          };
          const appId = appMap[appName] || appMap[appName.replace('.app', '').replace('.finder', '').replace('.pdf', '').replace('.cli', '')];
          if (appId && onLaunchApp) {
            onLaunchApp(appId);
            newHistory.push({ type: 'output', text: `Opening ${appName}...` });
          } else {
            newHistory.push({ type: 'output', text: `open: No application "${appName}" found. Type "help" for commands.` });
          }
        } else {
          newHistory.push({
            type: 'output',
            text: `Command not recognized: "${cleanCmd}". Type "help" for a list of available commands.`
          });
        }
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
    <div style={{ background: '#000000', color: 'var(--mac-lime)', padding: '1rem', borderRadius: '4px', fontFamily: 'var(--font-mono)', fontSize: '0.9rem', minHeight: '320px', display: 'flex', flexDirection: 'column', border: '2px solid #000' }}>
      <div style={{ flex: 1, overflowY: 'auto', marginBottom: '0.5rem', whiteSpace: 'pre-wrap' }}>
        {history.map((item, idx) => (
          <div key={idx} style={{ marginBottom: '0.4rem' }}>
            {item.type === 'input' ? (
              <span style={{ color: 'var(--mac-cyan)', fontWeight: 'bold' }}>{item.text}</span>
            ) : (
              <span style={{ color: '#ffffff' }}>{item.text}</span>
            )}
          </div>
        ))}
      </div>

      <form onSubmit={handleSubmit} style={{ display: 'flex', alignItems: 'center' }}>
        <span style={{ color: 'var(--mac-pink)', marginRight: '0.5rem', fontWeight: 'bold' }}>$</span>
        <input
          type="text"
          value={inputVal}
          onChange={(e) => setInputVal(e.target.value)}
          placeholder="Type command..."
          autoFocus
          style={{
            flex: 1,
            background: 'none',
            border: 'none',
            outline: 'none',
            color: 'var(--mac-lime)',
            fontFamily: 'var(--font-mono)',
            fontSize: '0.9rem'
          }}
        />
      </form>
    </div>
  );
}
