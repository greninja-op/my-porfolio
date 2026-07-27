import React, { useState, useRef, useEffect } from 'react';

export default function MacControlStrip({ openWindows, onFocusApp, onLaunchApp }) {
  const [dockApps, setDockApps] = useState([
    { id: 'chronolens', name: 'ChronoLens.app', icon: '⚡', color: 'var(--mac-pink)' },
    { id: 'memoire', name: 'Memoire.app', icon: '🧠', color: 'var(--mac-purple)' },
    { id: 'nuvault', name: 'Nuvault.app', icon: '🔐', color: 'var(--mac-cyan)' },
    { id: 'cfls', name: 'CFLS.app', icon: '🔒', color: 'var(--mac-lime)' },
    { id: 'projects', name: 'Projects.finder', icon: '📁', color: 'var(--mac-yellow)' },
    { id: 'resume', name: 'Resume.pdf', icon: '📄', color: '#ffffff' },
    { id: 'chooser', name: 'The Chooser', icon: '📡', color: 'var(--mac-cyan)' },
    { id: 'control_panels', name: 'Control Panel', icon: '🎛️', color: 'var(--mac-pink)' },
    { id: 'terminal', name: 'Terminal.cli', icon: '💻', color: '#000000' }
  ]);

  const [desktopApps, setDesktopApps] = useState([]);
  const [draggingId, setDraggingId] = useState(null);
  const [dragPos, setDragPos] = useState({ x: 0, y: 0 });
  const [hoverIndex, setHoverIndex] = useState(null);
  const [hoveredApp, setHoveredApp] = useState(null);
  const dockRef = useRef(null);
  const dragStartOffset = useRef({ x: 0, y: 0 });

  // Handle Dragging Logic across Screen
  useEffect(() => {
    const handleMove = (clientX, clientY) => {
      if (!draggingId) return;

      setDragPos({ x: clientX - dragStartOffset.current.x, y: clientY - dragStartOffset.current.y });

      // Check proximity to Dock
      if (dockRef.current) {
        const rect = dockRef.current.getBoundingClientRect();
        const isNearDock = clientY >= rect.top - 50 && clientY <= rect.bottom + 40;

        if (isNearDock) {
          // Calculate insertion index based on cursor X position
          const iconWidth = 52;
          const relativeX = clientX - rect.left;
          const calculatedIndex = Math.max(0, Math.min(dockApps.length, Math.floor(relativeX / iconWidth)));
          setHoverIndex(calculatedIndex);
        } else {
          setHoverIndex(null);
        }
      }
    };

    const handleMouseMove = (e) => handleMove(e.clientX, e.clientY);
    const handleTouchMove = (e) => {
      if (e.touches && e.touches[0]) handleMove(e.touches[0].clientX, e.touches[0].clientY);
    };

    const handleEnd = (clientX, clientY) => {
      if (!draggingId) return;

      if (dockRef.current) {
        const rect = dockRef.current.getBoundingClientRect();
        const isInsideDock = clientY >= rect.top - 40 && clientY <= rect.bottom + 30;

        const appObj = [...dockApps, ...desktopApps].find((a) => a.id === draggingId);

        if (isInsideDock && appObj) {
          // Place into / Re-order Dock
          const filteredDock = dockApps.filter((a) => a.id !== draggingId);
          const targetIdx = hoverIndex !== null ? Math.min(hoverIndex, filteredDock.length) : filteredDock.length;

          filteredDock.splice(targetIdx, 0, appObj);
          setDockApps(filteredDock);
          setDesktopApps((prev) => prev.filter((a) => a.id !== draggingId));
        } else if (appObj) {
          // Dragged Out of Dock onto Desktop
          setDockApps((prev) => prev.filter((a) => a.id !== draggingId));
          setDesktopApps((prev) => {
            const exists = prev.find((a) => a.id === draggingId);
            const newApp = { ...appObj, posX: clientX - 25, posY: clientY - 25 };
            return exists ? prev.map((a) => (a.id === draggingId ? newApp : a)) : [...prev, newApp];
          });
        }
      }

      setDraggingId(null);
      setHoverIndex(null);
    };

    const handleMouseUp = (e) => handleEnd(e.clientX, e.clientY);
    const handleTouchEnd = (e) => {
      if (e.changedTouches && e.changedTouches[0]) {
        handleEnd(e.changedTouches[0].clientX, e.changedTouches[0].clientY);
      }
    };

    if (draggingId) {
      window.addEventListener('mousemove', handleMouseMove);
      window.addEventListener('mouseup', handleMouseUp);
      window.addEventListener('touchmove', handleTouchMove);
      window.addEventListener('touchend', handleTouchEnd);
    }
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseup', handleMouseUp);
      window.removeEventListener('touchmove', handleTouchMove);
      window.removeEventListener('touchend', handleTouchEnd);
    };
  }, [draggingId, hoverIndex, dockApps, desktopApps]);

  const startDrag = (appId, clientX, clientY) => {
    setDraggingId(appId);
    dragStartOffset.current = { x: 25, y: 25 };
    setDragPos({ x: clientX - 25, y: 25 });
  };

  return (
    <>
      {/* Floating Standalone Desktop Apps (Dragged out of Dock) */}
      {desktopApps.map((app) => (
        <div
          key={app.id}
          onMouseDown={(e) => {
            e.stopPropagation();
            startDrag(app.id, e.clientX, e.clientY);
          }}
          onTouchStart={(e) => {
            e.stopPropagation();
            if (e.touches[0]) startDrag(app.id, e.touches[0].clientX, e.touches[0].clientY);
          }}
          onDoubleClick={() => onLaunchApp(app.id)}
          style={{
            position: 'fixed',
            top: `${app.posY}px`,
            left: `${app.posX}px`,
            zIndex: 850,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: '4px',
            cursor: 'grab'
          }}
        >
          <div
            style={{
              width: '44px',
              height: '44px',
              borderRadius: '10px',
              background: app.color,
              border: '2px solid #000',
              boxShadow: '3px 3px 0px #000',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: '1.4rem'
            }}
          >
            {app.icon}
          </div>
          <span style={{ fontFamily: 'var(--font-mac-title)', fontSize: '0.85rem', color: '#fff', background: '#000', padding: '1px 4px', borderRadius: '3px' }}>
            {app.name}
          </span>
        </div>
      ))}

      {/* Floating Dragged App Icon Ghost Follower */}
      {draggingId && (
        <div
          style={{
            position: 'fixed',
            left: `${dragPos.x}px`,
            top: `${dragPos.y}px`,
            zIndex: 9999,
            pointerEvents: 'none',
            opacity: 0.9,
            transform: 'scale(1.15)',
            transition: 'transform 0.05s ease'
          }}
        >
          <div
            style={{
              width: '46px',
              height: '46px',
              borderRadius: '12px',
              background: 'var(--mac-purple)',
              border: '2px solid #000',
              boxShadow: '5px 5px 0px #000',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: '1.5rem'
            }}
          >
            {([...dockApps, ...desktopApps].find((a) => a.id === draggingId) || {}).icon || '📱'}
          </div>
        </div>
      )}

      {/* Dynamic Adjusting Floating macOS Dock */}
      <div
        ref={dockRef}
        className="mac-control-strip"
        style={{
          position: 'fixed',
          bottom: '12px',
          left: '50%',
          transform: 'translateX(-50%)',
          height: '56px',
          background: 'linear-gradient(180deg, #ffffff 0%, #cbd5e1 100%)',
          border: '2px solid #000000',
          borderRadius: '16px',
          boxShadow: '4px 4px 0px #000000',
          display: 'flex',
          alignItems: 'center',
          gap: hoverIndex !== null ? '1.2rem' : '0.6rem',
          padding: '0 0.85rem',
          zIndex: 900,
          fontFamily: 'var(--font-mac-title)',
          transition: 'all 0.25s cubic-bezier(0.2, 0.9, 0.3, 1)',
          maxWidth: '96vw'
        }}
      >
        {dockApps.map((app, index) => {
          const isOpen = openWindows[app.id];
          const isHovered = hoveredApp === app.id;
          const isShifted = hoverIndex !== null && index >= hoverIndex && draggingId !== app.id;

          return (
            <div
              key={app.id}
              style={{
                position: 'relative',
                transition: 'transform 0.2s cubic-bezier(0.2, 0.9, 0.3, 1)',
                transform: isShifted ? 'translateX(18px)' : 'translateX(0px)'
              }}
              onMouseEnter={() => setHoveredApp(app.id)}
              onMouseLeave={() => setHoveredApp(null)}
              onMouseDown={(e) => {
                e.stopPropagation();
                startDrag(app.id, e.clientX, e.clientY);
              }}
              onTouchStart={(e) => {
                e.stopPropagation();
                if (e.touches[0]) startDrag(app.id, e.touches[0].clientX, e.touches[0].clientY);
              }}
            >
              {/* Tooltip */}
              {isHovered && !draggingId && (
                <div
                  style={{
                    position: 'absolute',
                    top: '-34px',
                    left: '50%',
                    transform: 'translateX(-50%)',
                    background: '#000000',
                    color: '#ffffff',
                    padding: '2px 8px',
                    border: '1px solid #ffffff',
                    borderRadius: '4px',
                    fontSize: '0.9rem',
                    fontWeight: 'bold',
                    whiteSpace: 'nowrap',
                    boxShadow: '2px 2px 0px #000',
                    zIndex: 901
                  }}
                >
                  {app.name}
                </div>
              )}

              {/* Dock Icon Button */}
              <button
                onClick={() => {
                  if (isOpen) {
                    onFocusApp(app.id);
                  } else {
                    onLaunchApp(app.id);
                  }
                }}
                style={{
                  width: '42px',
                  height: '42px',
                  borderRadius: '10px',
                  background: app.color,
                  border: '2px solid #000000',
                  boxShadow: isHovered ? '3px 3px 0px #000' : '1px 1px 0px #000',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '1.4rem',
                  cursor: 'grab',
                  transition: 'transform 0.15s cubic-bezier(0.2, 0.9, 0.3, 1)',
                  transform: isHovered ? 'translateY(-6px) scale(1.16)' : 'translateY(0) scale(1)',
                  outline: 'none',
                  opacity: draggingId === app.id ? 0.3 : 1
                }}
              >
                <span>{app.icon}</span>
              </button>

              {/* Active Dot */}
              {isOpen && (
                <div
                  style={{
                    position: 'absolute',
                    bottom: '-6px',
                    left: '50%',
                    transform: 'translateX(-50%)',
                    width: '5px',
                    height: '5px',
                    borderRadius: '50%',
                    background: '#000000',
                    boxShadow: '0 0 4px var(--mac-pink)'
                  }}
                />
              )}
            </div>
          );
        })}
      </div>
    </>
  );
}
