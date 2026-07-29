import React, { useState } from 'react';
import { playRetroClick, playRetroBeep } from '../utils/sound';

export default function MacWindowWrapper({
  title,
  subtitle,
  badgeText = 'System 7.5 OS',
  children,
  defaultCollapsed = false,
  allowOverflow = false
}) {
  const [closed, setClosed] = useState(false);
  const [collapsed, setCollapsed] = useState(defaultCollapsed);
  const [zoomed, setZoomed] = useState(false);

  const handleClose = (e) => {
    e.stopPropagation();
    playRetroBeep();
    setClosed(true);
  };

  const handleMinimize = (e) => {
    e.stopPropagation();
    playRetroClick();
    setCollapsed((prev) => !prev);
  };

  const handleZoom = (e) => {
    e.stopPropagation();
    playRetroClick();
    setZoomed((prev) => !prev);
  };

  if (closed) {
    return (
      <div style={{ maxWidth: zoomed ? '100%' : '1080px', margin: '0 auto 1.5rem auto', padding: '0 1rem' }}>
        <div
          style={{
            background: '#fde047',
            border: '2px solid #000000',
            borderRadius: '8px',
            padding: '0.65rem 1.25rem',
            boxShadow: '3px 3px 0 #000000',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            fontFamily: 'var(--font-mono, monospace)'
          }}
        >
          <div style={{ fontWeight: 900, fontSize: '0.88rem', color: '#000000' }}>
            📁 Minimized Window: <span style={{ textDecoration: 'underline' }}>{title}</span>
          </div>

          <button
            onClick={() => {
              playRetroClick();
              setClosed(false);
            }}
            style={{
              padding: '0.3rem 0.75rem',
              borderRadius: '6px',
              background: '#38bdf8',
              border: '2px solid #000000',
              boxShadow: '2px 2px 0 #000000',
              fontWeight: 900,
              fontSize: '0.78rem',
              color: '#000000',
              cursor: 'pointer'
            }}
          >
            Restore Window ↗
          </button>
        </div>
      </div>
    );
  }

  return (
    <div
      style={{
        maxWidth: zoomed ? '100%' : '1080px',
        margin: '0 auto 2.5rem auto',
        padding: '0 1rem',
        transition: 'max-width 0.3s ease',
        position: 'relative'
      }}
    >
      {/* MACINTOSH SYSTEM 7 WINDOW FRAME CONTAINER */}
      <div
        style={{
          background: '#ffffff',
          border: '2px solid #000000',
          borderRadius: '12px',
          overflow: allowOverflow ? 'visible' : 'hidden',
          boxShadow: '6px 6px 0px #000000',
          position: 'relative'
        }}
      >
        {/* MAC RETRO PINSTRIPE TITLE BAR HEADER */}
        <div
          style={{
            background: 'linear-gradient(90deg, #d946ef 0%, #c084fc 50%, #e879f9 100%)',
            borderBottom: '2px solid #000000',
            padding: '0.6rem 1.25rem',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            userSelect: 'none',
            borderTopLeftRadius: '10px',
            borderTopRightRadius: '10px'
          }}
        >
          {/* Interactive Window Control Dots */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.45rem' }}>
            <button
              onClick={handleClose}
              title="Close / Hide Window"
              style={{
                width: '12px',
                height: '12px',
                borderRadius: '50%',
                background: '#ef4444',
                border: '1px solid #000000',
                cursor: 'pointer',
                padding: 0,
                boxShadow: '1px 1px 0 #000000'
              }}
            />
            <button
              onClick={handleMinimize}
              title="Collapse / Expand Body"
              style={{
                width: '12px',
                height: '12px',
                borderRadius: '50%',
                background: '#f59e0b',
                border: '1px solid #000000',
                cursor: 'pointer',
                padding: 0,
                boxShadow: '1px 1px 0 #000000'
              }}
            />
            <button
              onClick={handleZoom}
              title="Zoom Full-Width"
              style={{
                width: '12px',
                height: '12px',
                borderRadius: '50%',
                background: '#22c55e',
                border: '1px solid #000000',
                cursor: 'pointer',
                padding: 0,
                boxShadow: '1px 1px 0 #000000'
              }}
            />
          </div>

          {/* Title Badge */}
          <div
            style={{
              background: '#ffffff',
              border: '2px solid #000000',
              borderRadius: '4px',
              padding: '0.2rem 1rem',
              fontFamily: 'var(--font-mono, monospace)',
              fontSize: '0.85rem',
              fontWeight: 900,
              color: '#000000',
              boxShadow: '2px 2px 0 #000000'
            }}
          >
            {title}
          </div>

          <div style={{ fontSize: '0.78rem', fontFamily: 'var(--font-mono, monospace)', fontWeight: 900, color: '#000000' }}>
            [{badgeText}]
          </div>
        </div>

        {/* WINDOW INNER CONTENT BODY */}
        {!collapsed && (
          <div
            style={{
              padding: '2rem 1.75rem',
              background: '#fafafa',
              overflow: allowOverflow ? 'visible' : 'hidden',
              borderBottomLeftRadius: '10px',
              borderBottomRightRadius: '10px'
            }}
          >
            {subtitle && (
              <div style={{ marginBottom: '1.75rem' }}>
                <p style={{ color: '#000000', fontSize: '1.02rem', fontWeight: 700, fontFamily: 'var(--font-mono, monospace)', margin: 0 }}>
                  {subtitle}
                </p>
              </div>
            )}
            {children}
          </div>
        )}
      </div>
    </div>
  );
}
