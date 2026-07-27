import React, { useEffect, useState } from 'react';

export default function ScreensaverOverlay({ isActive, onWake }) {
  const [toasters, setToasters] = useState([]);
  const [stars, setStars] = useState([]);

  useEffect(() => {
    if (!isActive) return;

    // Generate Flying Toasters & Toast
    const toasterItems = Array.from({ length: 14 }).map((_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      speed: 1.5 + Math.random() * 2.5,
      size: 1.8 + Math.random() * 1.5,
      type: i % 3 === 0 ? '🍞' : '🧈'
    }));
    setToasters(toasterItems);

    // Generate Starfield
    const starItems = Array.from({ length: 60 }).map((_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: 1 + Math.random() * 3,
      opacity: 0.3 + Math.random() * 0.7
    }));
    setStars(starItems);

    const interval = setInterval(() => {
      setToasters((prev) =>
        prev.map((t) => ({
          ...t,
          x: t.x < -10 ? 110 : t.x - t.speed * 0.4,
          y: t.y > 110 ? -10 : t.y + t.speed * 0.4
        }))
      );
    }, 40);

    return () => clearInterval(interval);
  }, [isActive]);

  if (!isActive) return null;

  return (
    <div
      onClick={onWake}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100vw',
        height: '100vh',
        background: '#04060f',
        zIndex: 99999,
        cursor: 'pointer',
        overflow: 'hidden',
        userSelect: 'none'
      }}
    >
      {/* Starfield */}
      {stars.map((s) => (
        <div
          key={s.id}
          style={{
            position: 'absolute',
            left: `${s.x}%`,
            top: `${s.y}%`,
            width: `${s.size}px`,
            height: `${s.size}px`,
            background: '#ffffff',
            borderRadius: '50%',
            opacity: s.opacity,
            boxShadow: '0 0 4px #ffffff'
          }}
        />
      ))}

      {/* Flying Toasters */}
      {toasters.map((t) => (
        <div
          key={t.id}
          style={{
            position: 'absolute',
            left: `${t.x}%`,
            top: `${t.y}%`,
            fontSize: `${t.size}rem`,
            filter: 'drop-shadow(2px 2px 0px #000)',
            transition: 'left 0.04s linear, top 0.04s linear',
            transform: 'rotate(-15deg)'
          }}
        >
          {t.type}
        </div>
      ))}

      {/* Wake Button Header Banner */}
      <div
        style={{
          position: 'absolute',
          bottom: '40px',
          left: '50%',
          transform: 'translateX(-50%)',
          background: '#000000',
          color: '#ffffff',
          border: '2px solid #ffffff',
          padding: '8px 24px',
          borderRadius: '8px',
          boxShadow: '4px 4px 0px #000',
          fontFamily: 'var(--font-mac-title)',
          fontSize: '1.25rem',
          textAlign: 'center',
          pointerEvents: 'none'
        }}
      >
        🍞 System 7 After Dark Screensaver — Click anywhere to Wake System
      </div>
    </div>
  );
}
