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
  const [resizeDirection, setResizeDirection] = useState(null);
  const [btnHover, setBtnHover] = useState(false);
  const dragStart = useRef({ x: 0, y: 0, top: 0, left: 0 });
  const resizeStart = useRef({ x: 0, y: 0, width: 0, height: 0, top: 0, left: 0 });

  const isMobile = window.innerWidth <= 768;

  useEffect(() => {
    if (isOpen) {
      setIsMinimized(false);
    }
  }, [isOpen, zIndex]);

  if (!isOpen || isMinimized) return null;

  // Titlebar Drag Handlers
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

  // Multi-Edge & Corner Resize Handlers
  const handleStartResize = (e, direction) => {
    e.stopPropagation();
    onFocus(id);
    if (isMaximized || isMobile) return;
    setResizeDirection(direction);
    resizeStart.current = {
      x: e.clientX,
      y: e.clientY,
      width: size.width,
      height: size.height,
      top: pos.top,
      left: pos.left
    };
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
      } else if (resizeDirection) {
        const dx = clientX - resizeStart.current.x;
        const dy = clientY - resizeStart.current.y;

        let newW = resizeStart.current.width;
        let newH = resizeStart.current.height;
        let newL = resizeStart.current.left;

        if (resizeDirection.includes('right') || resizeDirection === 'corner-br') {
          newW = Math.max(320, resizeStart.current.width + dx);
        }
        if (resizeDirection.includes('bottom') || resizeDirection === 'corner-br' || resizeDirection === 'corner-bl') {
          newH = Math.max(200, resizeStart.current.height + dy);
        }
        if (resizeDirection === 'corner-bl') {
          const calculatedW = Math.max(320, resizeStart.current.width - dx);
          if (calculatedW !== 320) {
            newL = resizeStart.current.left + dx;
          }
          newW = calculatedW;
        }

        setSize({ width: newW, height: newH });
        if (resizeDirection === 'corner-bl') setPos((p) => ({ ...p, left: newL }));
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
      setResizeDirection(null);
    };

    if (isDragging || resizeDirection) {
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
  }, [isDragging, resizeDirection]);

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
        transition: isDragging || resizeDirection ? 'none' : 'transform 0.15s cubic-bezier(0.2, 0.9, 0.3, 1), width 0.15s ease, height 0.15s ease',
        animation: 'macWinOpen 0.18s cubic-bezier(0.18, 0.89, 0.32, 1.28)'
      }}
    >
      {/* System 7 Pinstripe Titlebar */}
      <div
        className="mac-titlebar"
        style={{ background: themeColor, cursor: isMaximized || isMobile ? 'default' : 'grab' }}
        onMouseDown={(e) => {
          e.stopPropagation();
          handleStartDrag(e.clientX, e.clientY);
        }}
        onTouchStart={(e) => {
          e.stopPropagation();
          if (e.touches && e.touches[0]) handleStartDrag(e.touches[0].clientX, e.touches[0].clientY);
        }}
      >
        {/* Left Retro Traffic Light Buttons */}
        <div
          style={{ display: 'flex', alignItems: 'center', gap: '6px', zIndex: 2 }}
          onMouseEnter={() => setBtnHover(true)}
          onMouseLeave={() => setBtnHover(false)}
        >
          <button onClick={(e) => { e.stopPropagation(); onClose(id); }} className="mac-traffic-btn mac-traffic-close" title="Close Window">
            {btnHover ? '✕' : ''}
          </button>
          <button onClick={(e) => { e.stopPropagation(); setIsMinimized(true); }} className="mac-traffic-btn mac-traffic-minimize" title="Minimize Window">
            {btnHover ? '−' : ''}
          </button>
          <button onClick={(e) => { e.stopPropagation(); setIsMaximized(!isMaximized); }} className="mac-traffic-btn mac-traffic-expand" title={isMaximized ? 'Restore' : 'Fullscreen'}>
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

      {/* Window Body Container */}
      <div className="mac-window-body">
        {children}
      </div>

      {/* Invisible Edge & Corner Resize Handles (Clean Layout without Clashing Arrow Symbols) */}
      {!isMaximized && !isMobile && (
        <>
          {/* Right Edge Resize Handle */}
          <div
            onMouseDown={(e) => handleStartResize(e, 'right')}
            style={{ position: 'absolute', top: '32px', right: '0px', width: '8px', bottom: '16px', cursor: 'ew-resize', zIndex: 14 }}
            title="Resize Width"
          />

          {/* Bottom Edge Resize Handle */}
          <div
            onMouseDown={(e) => handleStartResize(e, 'bottom')}
            style={{ position: 'absolute', bottom: '0px', left: '16px', right: '16px', height: '8px', cursor: 'ns-resize', zIndex: 14 }}
            title="Resize Height"
          />

          {/* Bottom-Right Corner Resize Hitbox */}
          <div
            onMouseDown={(e) => handleStartResize(e, 'corner-br')}
            style={{
              position: 'absolute',
              bottom: '0px',
              right: '0px',
              width: '18px',
              height: '18px',
              cursor: 'nwse-resize',
              zIndex: 15
            }}
            title="Drag Corner to Resize Window"
          />

          {/* Bottom-Left Corner Resize Hitbox */}
          <div
            onMouseDown={(e) => handleStartResize(e, 'corner-bl')}
            style={{
              position: 'absolute',
              bottom: '0px',
              left: '0px',
              width: '18px',
              height: '18px',
              cursor: 'nesw-resize',
              zIndex: 15
            }}
            title="Drag Corner to Resize Window"
          />
        </>
      )}
    </div>
  );
}
