import React, { useState } from 'react';
import { projects } from '../data/portfolioData';
import GetInfoModal from './GetInfoModal';

export default function ProjectsMacFinder({ activeExtensions = [], onOpenApp }) {
  const [viewMode, setViewMode] = useState('list'); // 'list' or 'icon'
  const [selectedFolder, setSelectedFolder] = useState('all'); // 'all', 'ai', 'security', 'distributed', 'media'
  const [selectedProjectId, setSelectedProjectId] = useState(projects[0].id);
  const [getInfoProject, setGetInfoProject] = useState(null);

  const filteredProjects = projects.filter((p) => {
    // Extension filter check
    if (activeExtensions.length > 0) {
      const matchExt = p.techStack.some((tech) => activeExtensions.includes(tech));
      if (!matchExt) return false;
    }
    // Folder filter check
    if (selectedFolder === 'ai') return p.category.includes('AI');
    if (selectedFolder === 'security') return p.category.includes('Security');
    if (selectedFolder === 'distributed') return p.category.includes('Distributed');
    return true;
  });

  const displayList = filteredProjects.length > 0 ? filteredProjects : projects;
  const activeProj = displayList.find((p) => p.id === selectedProjectId) || displayList[0];

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '0.85rem', fontFamily: 'var(--font-mac-title)' }}>
      {/* Finder Header Toolbar */}
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', borderBottom: '2px solid #000', paddingBottom: '0.5rem', flexWrap: 'wrap', gap: '0.5rem' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
          <button
            onClick={() => setViewMode('icon')}
            className={`mac-btn ${viewMode === 'icon' ? 'mac-btn-purple' : ''}`}
          >
            ▦ Icon View
          </button>
          <button
            onClick={() => setViewMode('list')}
            className={`mac-btn ${viewMode === 'list' ? 'mac-btn-purple' : ''}`}
          >
            ≡ List View
          </button>
          <button
            onClick={() => setGetInfoProject(activeProj)}
            className="mac-btn mac-btn-lime"
          >
            ℹ️ Get Info (⌘I)
          </button>
        </div>

        <div style={{ fontSize: '1.05rem', fontWeight: 'bold' }}>
          Volume: Hard Drive:Projects ({displayList.length} items)
        </div>
      </div>

      {/* Main Split View Container */}
      <div style={{ display: 'grid', gridTemplateColumns: '180px 1fr', gap: '0.85rem' }}>
        {/* Left Folder Hierarchy Sidebar */}
        <div className="mac-group-box" style={{ padding: '0.5rem' }}>
          <span className="mac-group-label">Hard Drive Folders</span>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.35rem', marginTop: '0.4rem' }}>
            <button
              onClick={() => setSelectedFolder('all')}
              style={{
                textAlign: 'left',
                padding: '0.3rem 0.5rem',
                border: '1px solid #000',
                background: selectedFolder === 'all' ? 'var(--mac-purple)' : '#fff',
                color: selectedFolder === 'all' ? '#fff' : '#000',
                fontFamily: 'var(--font-mac-title)',
                fontWeight: 'bold',
                cursor: 'pointer'
              }}
            >
              📁 / Projects (All)
            </button>
            <button
              onClick={() => setSelectedFolder('ai')}
              style={{
                textAlign: 'left',
                padding: '0.3rem 0.5rem',
                border: '1px solid #000',
                background: selectedFolder === 'ai' ? 'var(--mac-purple)' : '#fff',
                color: selectedFolder === 'ai' ? '#fff' : '#000',
                fontFamily: 'var(--font-mac-title)',
                fontWeight: 'bold',
                cursor: 'pointer'
              }}
            >
              📁 / AI & Models
            </button>
            <button
              onClick={() => setSelectedFolder('security')}
              style={{
                textAlign: 'left',
                padding: '0.3rem 0.5rem',
                border: '1px solid #000',
                background: selectedFolder === 'security' ? 'var(--mac-purple)' : '#fff',
                color: selectedFolder === 'security' ? '#fff' : '#000',
                fontFamily: 'var(--font-mac-title)',
                fontWeight: 'bold',
                cursor: 'pointer'
              }}
            >
              📁 / Security & Storage
            </button>
            <button
              onClick={() => setSelectedFolder('distributed')}
              style={{
                textAlign: 'left',
                padding: '0.3rem 0.5rem',
                border: '1px solid #000',
                background: selectedFolder === 'distributed' ? 'var(--mac-purple)' : '#fff',
                color: selectedFolder === 'distributed' ? '#fff' : '#000',
                fontFamily: 'var(--font-mac-title)',
                fontWeight: 'bold',
                cursor: 'pointer'
              }}
            >
              📁 / Distributed Systems
            </button>
            <button
              onClick={() => onOpenApp('resume')}
              style={{
                textAlign: 'left',
                padding: '0.3rem 0.5rem',
                border: '1px solid #000',
                background: 'var(--mac-yellow)',
                color: '#000',
                fontFamily: 'var(--font-mac-title)',
                fontWeight: 'bold',
                cursor: 'pointer',
                marginTop: '0.5rem'
              }}
            >
              📄 Resume.pdf ↗
            </button>
          </div>
        </div>

        {/* Right Viewport: Icon View or List View */}
        <div className="mac-group-box">
          <span className="mac-group-label">Contents of /{selectedFolder}</span>

          {viewMode === 'icon' ? (
            /* Large Icon Grid View */
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(110px, 1fr))', gap: '1rem', padding: '0.5rem' }}>
              {displayList.map((p) => (
                <div
                  key={p.id}
                  onClick={() => setSelectedProjectId(p.id)}
                  onDoubleClick={() => onOpenApp(p.id)}
                  style={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    gap: '0.3rem',
                    padding: '0.5rem',
                    border: selectedProjectId === p.id ? '2px solid #000' : '1px transparent',
                    background: selectedProjectId === p.id ? 'rgba(181, 96, 232, 0.2)' : 'transparent',
                    cursor: 'pointer',
                    borderRadius: '6px'
                  }}
                >
                  <div style={{ width: '48px', height: '48px', borderRadius: '8px', background: 'var(--mac-pink)', border: '2px solid #000', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.5rem', boxShadow: '2px 2px 0px #000' }}>
                    {p.icon}
                  </div>
                  <div style={{ fontSize: '1rem', fontWeight: 'bold', textAlign: 'center', wordBreak: 'break-word' }}>
                    {p.title}.app
                  </div>
                </div>
              ))}
            </div>
          ) : (
            /* Table List View */
            <div style={{ marginTop: '0.4rem', overflowX: 'auto' }}>
              <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '0.95rem' }}>
                <thead>
                  <tr style={{ background: 'var(--mac-purple)', color: '#fff', borderBottom: '2px solid #000', textAlign: 'left' }}>
                    <th style={{ padding: '0.4rem' }}>Name</th>
                    <th style={{ padding: '0.4rem' }}>Kind</th>
                    <th style={{ padding: '0.4rem' }}>Badge</th>
                    <th style={{ padding: '0.4rem' }}>Size</th>
                  </tr>
                </thead>
                <tbody>
                  {displayList.map((p) => (
                    <tr
                      key={p.id}
                      onClick={() => setSelectedProjectId(p.id)}
                      onDoubleClick={() => onOpenApp(p.id)}
                      style={{
                        borderBottom: '1px solid #ddd',
                        background: selectedProjectId === p.id ? 'rgba(181, 96, 232, 0.2)' : '#fff',
                        cursor: 'pointer'
                      }}
                    >
                      <td style={{ padding: '0.4rem', fontWeight: 'bold', display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                        <span>{p.icon}</span>
                        <span>{p.title}.app</span>
                      </td>
                      <td style={{ padding: '0.4rem' }}>{p.category}</td>
                      <td style={{ padding: '0.4rem' }}>{p.badge}</td>
                      <td style={{ padding: '0.4rem' }}>1,400+ commits</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}

          {/* Active Selection Details Preview Footer */}
          {activeProj && (
            <div style={{ borderTop: '2px solid #000', marginTop: '0.8rem', paddingTop: '0.5rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '0.5rem' }}>
              <div>
                <strong>Selected: {activeProj.title}</strong> — {activeProj.subtitle}
              </div>
              <div style={{ display: 'flex', gap: '0.4rem' }}>
                <button onClick={() => setGetInfoProject(activeProj)} className="mac-btn mac-btn-lime">
                  ℹ️ Info
                </button>
                <button onClick={() => onOpenApp(activeProj.id)} className="mac-btn mac-btn-purple">
                  🚀 Launch App
                </button>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Command + I Get Info Inspector Modal */}
      {getInfoProject && (
        <GetInfoModal project={getInfoProject} onClose={() => setGetInfoProject(null)} />
      )}
    </div>
  );
}
