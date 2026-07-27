import React, { useState } from 'react';

export default function MacWindow({
  id,
  title,
  themeColor = 'var(--mac-purple)',
  isOpen = true,
  onClose,
  children,
  defaultPos = { top: '80px', left: '10%' },
  width = 'auto',
  maxWidth = '850px',
  zIndex = 10
}) {
  const [pos, setPos] = useState(defaultPos);
  const [isDragging, setIsDragging] = useState(false);
  const [dragOffset, setDragOffset] = useState({ x: 0, y: 0 });

  if (!isOpen) return null;

  const handleMouseDown = (e) => {
    setIsDragging(true);
    const rect = e.currentTarget.parentElement.getBoundingClientRect();
    setDragOffset({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top
    });
  };

  const handleMouseMove = (e) => {
    if (!isDragging) return;
    setPos({
      top: `${Math.max(35, e.clientY - dragOffset.y)}px`,
      left: `${Math.max(10, e.clientX - dragOffset.x)}px`
    });
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  return (
    <div
      className="mac-window active-window"
      style={{
        position: 'absolute',
        top: pos.top,
        left: pos.left,
        width: width,
        maxWidth: maxWidth,
        zIndex: zIndex,
        userSelect: 'none'
      }}
      onMouseMove={handleMouseMove}
      onMouseUp={handleMouseUp}
    >
      {/* System 7 Horizontal Striped Titlebar */}
      <div
        className="mac-titlebar"
        style={{ background: themeColor }}
        onMouseDown={handleMouseDown}
      >
        {/* Close Box Button */}
        <button
          className="mac-close-box"
          onClick={onClose}
          title="Close Window"
        />

        {/* Horizontal Pinstripes */}
        <div className="mac-titlebar-stripes" />

        {/* Title Tag */}
        <div className="mac-titlebar-title">{title}</div>

        <div style={{ width: '14px' }} />
      </div>

      {/* Window Body */}
      <div
        style={{
          padding: '1.25rem',
          background: '#ffffff',
          maxHeight: '80vh',
          overflowY: 'auto'
        }}
      >
        {children}
      </div>
    </div>
  );
}
