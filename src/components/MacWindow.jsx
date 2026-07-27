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
  defaultPos = { top: 50, left: 50 },
  defaultSize = { width: 660, height: 440 },
  icon = '📁'
}) {
  const [pos, setPos] = useState(defaultPos);
  const [size, setSize] = useState(defaultSize);
  const [isMaximized, setIsMaximized] = useState(false);
  const [isMinimized, setIsMinimized] = useState(false);
  const [isDragging, setIsDragging] = useState(false);
  const [isResizing, setIsResizing] = useState(false);
  const [btnHover, setBtnHover] = useState(false);
  const dragStart = useRef({ x: 0, y: 0, top: 0, left: 0 });
  const resizeStart = useRef({ x: 0, y: 0, width: 0, height: 0 });

  const isMobile = window.innerWidth <= 768;

  if (!isOpen || isMinimized) return null;

  // Drag Handlers
  const handleStartDrag = (clientX, clientY) => {
    onFocus(id);
    if (isMaximized || isMobile) return;
    setIsDragging(true);
    dragStart.current = {
      x: clientX,
      y: clientY,
      top: pos.top,
      left: pos.left
    };
  };

  const handleTitleMouseDown = (e) => {
    e.stopPropagation();
    handleStartDrag(e.clientX, e.clientY);
  };

  const handleTitleTouchStart = (e) => {
    e.stopPropagation();
    if (e.touches && e.touches[0]) {
      handleStartDrag(e.touches[0].clientX, e.touches[0].clientY);
    }
  };

  useEffect(() => {
    const handleMove = (clientX, clientY) => {
      if (isDragging) {
        const dx = clientX - dragStart.current.x;
        const dy = clientY - dragStart.current.y;
        setPos({
          top: Math.max(32, Math.min(window.innerHeight - 100, dragStart.current.top + dy)),
          left: Math.max(10, Math.min(window.innerWidth - 100, dragStart.current.left + dx))
        });
      } else if (isResizing) {
        const dw = clientX - resizeStart.current.x;
        const dh = clientY - resizeStart.current.y;
        setSize({
          width: Math.max(320, resizeStart.current.width + dw),
          height: Math.max(200, resizeStart.current.height + dh)
        });
      }
    };

    const handleMouseMove = (e) => handleMove(e.clientX, e.clientY);
    const handleTouchMove = (e) => {
      if (e.touches && e.touches[0]) {
        handleMove(e.touches[0].clientX, e.touches[0].clientY);
      }
    };

    const handleEnd = () => {
      setIsDragging(false);
      setIsResizing(false);
    };

    if (isDragging || isResizing) {
      window.addEventListener('mousemove', handleMouseMove);
      window.addEventListener('mouseup', handleEnd);
      window.addEventListener('touchmove', handleTouchMove);
      window.addEventListener('touchend', handleEnd);
    }
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseup', handleEnd);
      window.removeEventListener('touchmove', handleTouchMove);
      window.removeEventListener('touchend', handleEnd);
    };
  }, [isDragging, isResizing]);

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
        top: isMobile ? '36px' : isMaximized ? '32px' : `${pos.top}px`,
        left: isMobile ? '2vw' : isMaximized ? '0px' : `${pos.left}px`,
        width: isMobile ? '96vw' : isMaximized ? '100vw' : `${size.width}px`,
        height: isMobile ? 'calc(100vh - 72px)' : isMaximized ? 'calc(100vh - 66px)' : `${size.height}px`,
        maxHeight: isMobile ? 'calc(100vh - 72px)' : 'calc(100vh - 66px)',
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
        style={{ background: themeColor, cursor: isMaximized || isMobile ? 'default' : 'grab' }}
        onMouseDown={handleTitleMouseDown}
        onTouchStart={handleTitleTouchStart}
      >
        {/* Left Retro-Modern macOS Traffic Light Buttons */}
        <div
          style={{ display: 'flex', alignItems: 'center', gap: '6px', zIndex: 2 }}
          onMouseEnter={() => setBtnHover(true)}
          onMouseLeave={() => setBtnHover(false)}
        >
          {/* Close Button (Red) */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              onClose(id);
            }}
            className="mac-traffic-btn mac-traffic-close"
            title="Close Window"
          >
            {btnHover ? '✕' : ''}
          </button>

          {/* Minimize Button (Yellow) */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              setIsMinimized(true);
            }}
            className="mac-traffic-btn mac-traffic-minimize"
            title="Minimize Window"
          >
            {btnHover ? '−' : ''}
          </button>

          {/* Fullscreen / Maximize Button (Green) */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              toggleMaximize();
            }}
            className="mac-traffic-btn mac-traffic-expand"
            title={isMaximized ? 'Restore' : 'Fullscreen / Maximize'}
          >
            {btnHover ? (isMaximized ? '▼' : '▲') : ''}
          </button>
        </div>

        {/* Pinstripes */}
        <div className="mac-titlebar-stripes" />

        {/* Title Tag */}
        <div className="mac-titlebar-title" style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
          <span>{icon}</span>
          <span>{title}</span>
        </div>

        <div style={{ width: '56px' }} />
      </div>

      {/* Window Inner Body Container */}
      <div className="mac-window-body">
        {children}
      </div>

      {/* Bottom Resize Handle */}
      {!isMaximized && !isMobile && (
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
