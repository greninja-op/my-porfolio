import React from 'react';

export default function GetInfoModal({ project, onClose }) {
  if (!project) return null;

  return (
    <div
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        background: 'rgba(0,0,0,0.5)',
        zIndex: 9999,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        fontFamily: 'var(--font-mac-title)'
      }}
      onClick={onClose}
    >
      <div
        style={{
          background: '#ffffff',
          border: '3px solid #000000',
          boxShadow: '6px 6px 0px #000000',
          maxWidth: '520px',
          width: '90%',
          padding: '1.25rem',
          borderRadius: '6px',
          display: 'flex',
          flexDirection: 'column',
          gap: '1rem',
          animation: 'getInfoPop 0.15s ease-out'
        }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', borderBottom: '2px solid #000', paddingBottom: '0.5rem' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
            <span style={{ fontSize: '2.2rem' }}>{project.icon}</span>
            <div>
              <h3 style={{ fontSize: '1.6rem', color: '#000', lineHeight: 1 }}>{project.title} Info</h3>
              <span style={{ fontSize: '1.05rem', color: 'var(--mac-purple-dark)', fontWeight: 'bold' }}>
                Command + I Properties Inspector
              </span>
            </div>
          </div>
          <button className="mac-close-box" onClick={onClose} />
        </div>

        {/* File Properties Table */}
        <div className="mac-group-box">
          <span className="mac-group-label">General Properties</span>
          <div style={{ marginTop: '0.5rem', display: 'flex', flexDirection: 'column', gap: '0.4rem', fontSize: '1.1rem' }}>
            <div><strong>Kind:</strong> {project.category} Application</div>
            <div><strong>Size:</strong> 42.8 MB on disk (1,400+ commits)</div>
            <div><strong>Where:</strong> Hard Drive:Projects:{project.title}</div>
            <div><strong>Created:</strong> System 7 Build Cycle 2026</div>
            <div><strong>Badge:</strong> {project.badge}</div>
          </div>
        </div>

        {/* Tech Stack & Links */}
        <div className="mac-group-box">
          <span className="mac-group-label">Tech Stack & Remote Repositories</span>
          <div style={{ marginTop: '0.5rem', display: 'flex', flexDirection: 'column', gap: '0.6rem' }}>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.4rem' }}>
              {project.techStack.map((tech, i) => (
                <span key={i} style={{ background: 'var(--mac-lime)', border: '1px solid #000', padding: '2px 6px', fontSize: '0.95rem', fontWeight: 'bold' }}>
                  {tech}
                </span>
              ))}
            </div>

            <div style={{ display: 'flex', gap: '0.6rem', marginTop: '0.4rem' }}>
              <a href={project.github} target="_blank" rel="noopener noreferrer" className="mac-btn mac-btn-purple" style={{ textDecoration: 'none' }}>
                📦 GitHub Repository ↗
              </a>
              {project.website && (
                <a href={project.website} target="_blank" rel="noopener noreferrer" className="mac-btn mac-btn-cyan" style={{ textDecoration: 'none' }}>
                  🌐 Project Link ↗
                </a>
              )}
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes getInfoPop {
          from { transform: scale(0.9); opacity: 0; }
          to { transform: scale(1); opacity: 1; }
        }
      `}</style>
    </div>
  );
}
