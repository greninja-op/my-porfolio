import React, { useState, useRef, useEffect } from 'react';

export default function MacControlStrip({ openWindows, onFocusApp, onLaunchApp }) {
  const [dockApps, setDockApps] = useState([
    { id: 'chronolens', name: 'ChronoLens.app', icon: '⚡', color: 'var(--mac-pink)' },
    { id: 'memoire', name: 'Memoire.app', icon: '🧠', color: 'var(--mac-purple)' },
    { id: 'nuvault', name: 'Nuvault.app', icon: '🔐', color: 'var(--mac-cyan)' },
    { id: 'cfls', name: 'CFLS.app', icon: '🔒', color: 'var(--mac-lime)' },
    { id: 'macgit', name: 'MacGit.app', icon: '🐙', color: 'var(--mac-purple)' },
    { id: 'notes', name: 'Notes.app', icon: '📝', color: 'var(--mac-yellow)' },
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

  useEffect(() => {
    const handleMove = (clientX, clientY) => {
      if (!draggingId) return;

      setDragPos({ x: clientX - dragStartOffset.current.x, y: clientY - dragStartOffset.current.y });

      if (dockRef.current) {
        const rect = dockRef.current.getBoundingClientRect();
        const isNearDock = clientY >= rect.top - 50 && clientY <= rect.bottom + 40;

        if (isNearDock) {
          const itemWidth = 110;
          const relativeX = clientX - rect.left;
          const calculatedIndex = Math.max(0, Math.min(dockApps.length, Math.floor(relativeX / itemWidth)));
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
          const filteredDock = dockApps.filter((a) => a.id !== draggingId);
          const targetIdx = hoverIndex !== null ? Math.min(hoverIndex, filteredDock.length) : filteredDock.length;

          filteredDock.splice(targetIdx, 0, appObj);
          setDockApps(filteredDock);
          setDesktopApps((prev) => prev.filter((a) => a.id !== draggingId));
        } else if (appObj) {
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
      {/* Floating Standalone Desktop Apps (Dragged out of Control Strip) */}
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
              padding: '0.2rem 0.6rem',
              borderRadius: '6px',
              background: app.color,
              color: app.color === '#ffffff' ? '#000' : '#fff',
              border: '2px solid #000',
              boxShadow: '3px 3px 0px #000',
              display: 'flex',
              alignItems: 'center',
              gap: '0.4rem',
              fontSize: '0.95rem',
              fontWeight: 'bold',
              fontFamily: 'var(--font-mac-title)'
            }}
          >
            <span>{app.icon}</span>
            <span>{app.name}</span>
          </div>
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
            transform: 'scale(1.1)',
            transition: 'transform 0.05s ease'
          }}
        >
          <div
            style={{
              padding: '0.3rem 0.7rem',
              borderRadius: '6px',
              background: 'var(--mac-purple)',
              color: '#fff',
              border: '2px solid #000',
              boxShadow: '4px 4px 0px #000',
              display: 'flex',
              alignItems: 'center',
              gap: '0.4rem',
              fontSize: '1rem',
              fontWeight: 'bold',
              fontFamily: 'var(--font-mac-title)'
            }}
          >
            {([...dockApps, ...desktopApps].find((a) => a.id === draggingId) || {}).icon || '📱'}
            <span>{([...dockApps, ...desktopApps].find((a) => a.id === draggingId) || {}).name}</span>
          </div>
        </div>
      )}

      {/* System 7 Vibrant Pop Control Strip Taskbar */}
      <div
        ref={dockRef}
        className="mac-control-strip"
        style={{
          position: 'fixed',
          bottom: '12px',
          left: '50%',
          transform: 'translateX(-50%)',
          height: '46px',
          background: 'linear-gradient(180deg, #ffffff 0%, #cbd5e1 100%)',
          border: '2px solid #000000',
          borderRadius: '12px',
          boxShadow: '4px 4px 0px #000000',
          display: 'flex',
          alignItems: 'center',
          gap: hoverIndex !== null ? '0.8rem' : '0.45rem',
          padding: '0 0.75rem',
          zIndex: 900,
          fontFamily: 'var(--font-mac-title)',
          transition: 'all 0.25s cubic-bezier(0.2, 0.9, 0.3, 1)',
          maxWidth: '96vw',
          overflowX: 'auto'
        }}
      >
        <span style={{ fontSize: '1rem', fontWeight: 'bold', color: '#000', whiteSpace: 'nowrap', marginRight: '0.2rem' }}>
          Control Strip:
        </span>

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
                transform: isShifted ? 'translateX(14px)' : 'translateX(0px)'
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
              {/* Vibrant Colored App Button */}
              <button
                onClick={() => {
                  if (isOpen) {
                    onFocusApp(app.id);
                  } else {
                    onLaunchApp(app.id);
                  }
                }}
                style={{
                  background: isOpen ? app.color : '#ffffff',
                  color: isOpen ? (app.color === '#ffffff' ? '#000' : '#ffffff') : '#000000',
                  border: '2px solid #000000',
                  boxShadow: isHovered ? '2px 2px 0px #000' : isOpen ? '1px 1px 0px #000' : 'none',
                  padding: '0.2rem 0.65rem',
                  fontSize: '0.95rem',
                  fontWeight: 'bold',
                  fontFamily: 'var(--font-mac-title)',
                  cursor: 'grab',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.4rem',
                  borderRadius: '6px',
                  whiteSpace: 'nowrap',
                  transition: 'transform 0.15s cubic-bezier(0.2, 0.9, 0.3, 1), background 0.15s ease',
                  transform: isHovered ? 'translateY(-3px)' : 'translateY(0)',
                  outline: 'none',
                  opacity: draggingId === app.id ? 0.3 : 1
                }}
              >
                <span>{app.icon}</span>
                <span>{app.name}</span>
                {isOpen && (
                  <span style={{ fontSize: '8px', color: app.color === '#ffffff' ? '#000' : '#fff' }}>
                    ●
                  </span>
                )}
              </button>
            </div>
          );
        })}
      </div>
    </>
  );
}
