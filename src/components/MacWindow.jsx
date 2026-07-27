import React, { useState, useRef, useEffect } from 'react';

export default function MacWindow({
  id,
  title,
  themeColor = 'var(--mac-purple)',
  isOpen = true,
  onClose,
  onFocus,
  zIndex = 10,
  children,
  defaultPos = { top: 60, left: 80 },
  defaultSize = { width: 680, height: 460 },
  icon = '📁'
}) {
  const [pos, setPos] = useState(defaultPos);
  const [size, setSize] = useState(defaultSize);
  const [isMaximized, setIsMaximized] = useState(false);
  const [isMinimized, setIsMinimized] = useState(false);
  const [isDragging, setIsDragging] = useState(false);
  const [isResizing, setIsResizing] = useState(false);
  const dragStart = useRef({ x: 0, y: 0, top: 0, left: 0 });
  const resizeStart = useRef({ x: 0, y: 0, width: 0, height: 0 });

  if (!isOpen || isMinimized) return null;

  // Window Drag Handler
  const handleTitleMouseDown = (e) => {
    e.stopPropagation();
    onFocus(id);
    if (isMaximized) return;
    setIsDragging(true);
    dragStart.current = {
      x: e.clientX,
      y: e.clientY,
      top: pos.top,
      left: pos.left
    };
  };

  useEffect(() => {
    const handleMouseMove = (e) => {
      if (isDragging) {
        const dx = e.clientX - dragStart.current.x;
        const dy = e.clientY - dragStart.current.y;
        setPos({
          top: Math.max(32, Math.min(window.innerHeight - 100, dragStart.current.top + dy)),
          left: Math.max(10, Math.min(window.innerWidth - 100, dragStart.current.left + dx))
        });
      } else if (isResizing) {
        const dw = e.clientX - resizeStart.current.x;
        const dh = e.clientY - resizeStart.current.y;
        setSize({
          width: Math.max(340, resizeStart.current.width + dw),
          height: Math.max(220, resizeStart.current.height + dh)
        });
      }
    };

    const handleMouseUp = () => {
      setIsDragging(false);
      setIsResizing(false);
    };

    if (isDragging || isResizing) {
      window.addEventListener('mousemove', handleMouseMove);
      window.addEventListener('mouseup', handleMouseUp);
    }
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseup', handleMouseUp);
    };
  }, [isDragging, isResizing]);

  // Window Resize Handle
  const handleResizeMouseDown = (e) => {
    e.stopPropagation();
    onFocus(id);
    setIsResizing(true);
    resizeStart.current = {
      x: e.clientX,
      y: e.clientY,
      width: size.width,
      height: size.height
    };
  };

  const toggleMaximize = () => {
    setIsMaximized(!isMaximized);
  };

  return (
    <div
      className="mac-window active-window"
      onClick={() => onFocus(id)}
      style={{
        position: 'fixed',
        top: isMaximized ? '32px' : `${pos.top}px`,
        left: isMaximized ? '0px' : `${pos.left}px`,
        width: isMaximized ? '100vw' : `${size.width}px`,
        height: isMaximized ? 'calc(100vh - 66px)' : `${size.height}px`,
        maxHeight: 'calc(100vh - 66px)',
        zIndex: zIndex,
        userSelect: 'none',
        display: 'flex',
        flexDirection: 'column',
        boxShadow: 'var(--mac-shadow-lg)',
        transition: isDragging || isResizing ? 'none' : 'transform 0.15s cubic-bezier(0.2, 0.9, 0.3, 1), width 0.2s ease, height 0.2s ease',
        animation: 'macWinOpen 0.18s cubic-bezier(0.18, 0.89, 0.32, 1.28)'
      }}
    >
      {/* System 7 Pinstripe Titlebar */}
      <div
        className="mac-titlebar"
        style={{ background: themeColor, cursor: isMaximized ? 'default' : 'grab' }}
        onMouseDown={handleTitleMouseDown}
      >
        {/* Left Close & Minimize Controls */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '4px', zIndex: 2 }}>
          <button
            className="mac-close-box"
            onClick={(e) => {
              e.stopPropagation();
              onClose(id);
            }}
            title="Close Window"
          />
          <button
            className="mac-close-box"
            onClick={(e) => {
              e.stopPropagation();
              toggleMaximize();
            }}
            style={{ background: isMaximized ? 'var(--mac-cyan)' : '#ffffff' }}
            title={isMaximized ? 'Restore' : 'Maximize'}
          >
            <span style={{ fontSize: '8px', lineHeight: 1 }}>{isMaximized ? '▼' : '▲'}</span>
          </button>
        </div>

        {/* Pinstripes */}
        <div className="mac-titlebar-stripes" />

        {/* Title Tag */}
        <div className="mac-titlebar-title" style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
          <span>{icon}</span>
          <span>{title}</span>
        </div>

        <div style={{ width: '32px' }} />
      </div>

      {/* Window Inner Body Container */}
      <div className="mac-window-body">
        {children}
      </div>

      {/* Bottom Resize Handle */}
      {!isMaximized && (
        <div
          onMouseDown={handleResizeMouseDown}
          style={{
            position: 'absolute',
            bottom: '2px',
            right: '2px',
            width: '16px',
            height: '16px',
            cursor: 'nwse-resize',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontSize: '10px',
            color: '#000',
            fontWeight: 'bold',
            zIndex: 10
          }}
          title="Resize Window"
        >
          ◢
        </div>
      )}

      <style>{`
        @keyframes macWinOpen {
          from { transform: scale(0.94); opacity: 0; }
          to { transform: scale(1); opacity: 1; }
        }
      `}</style>
    </div>
  );
}
