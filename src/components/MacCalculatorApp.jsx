import React, { useState } from 'react';

export default function MacCalculatorApp() {
  const [display, setDisplay] = useState('0');
  const [acc, setAcc] = useState(null);
  const [op, setOp] = useState(null);

  const handleNum = (n) => {
    setDisplay((prev) => (prev === '0' ? String(n) : prev + n));
  };

  const handleOp = (operator) => {
    setAcc(parseFloat(display));
    setOp(operator);
    setDisplay('0');
  };

  const handleEqual = () => {
    if (acc === null || op === null) return;
    const current = parseFloat(display);
    let res = 0;
    if (op === '+') res = acc + current;
    if (op === '-') res = acc - current;
    if (op === '*') res = acc * current;
    if (op === '/') res = acc / current;
    setDisplay(String(res));
    setAcc(null);
    setOp(null);
  };

  const handleClear = () => {
    setDisplay('0');
    setAcc(null);
    setOp(null);
  };

  return (
    <div style={{ fontFamily: 'var(--font-mac-title)', width: '220px', margin: '0 auto' }}>
      {/* Display */}
      <div
        style={{
          background: 'var(--mac-lime)',
          border: '2px solid #000',
          boxShadow: 'inset 2px 2px 0px rgba(0,0,0,0.2)',
          padding: '0.6rem',
          textAlign: 'right',
          fontSize: '1.8rem',
          fontWeight: 'bold',
          marginBottom: '0.8rem',
          color: '#000',
          overflow: 'hidden'
        }}
      >
        {display}
      </div>

      {/* Buttons Grid */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '0.4rem' }}>
        <button onClick={handleClear} className="mac-btn mac-btn-pink" style={{ padding: '0.4rem' }}>C</button>
        <button onClick={() => handleOp('/')} className="mac-btn" style={{ padding: '0.4rem' }}>/</button>
        <button onClick={() => handleOp('*')} className="mac-btn" style={{ padding: '0.4rem' }}>*</button>
        <button onClick={() => handleOp('-')} className="mac-btn" style={{ padding: '0.4rem' }}>-</button>

        <button onClick={() => handleNum(7)} className="mac-btn" style={{ padding: '0.4rem' }}>7</button>
        <button onClick={() => handleNum(8)} className="mac-btn" style={{ padding: '0.4rem' }}>8</button>
        <button onClick={() => handleNum(9)} className="mac-btn" style={{ padding: '0.4rem' }}>9</button>
        <button onClick={() => handleOp('+')} className="mac-btn" style={{ padding: '0.4rem' }}>+</button>

        <button onClick={() => handleNum(4)} className="mac-btn" style={{ padding: '0.4rem' }}>4</button>
        <button onClick={() => handleNum(5)} className="mac-btn" style={{ padding: '0.4rem' }}>5</button>
        <button onClick={() => handleNum(6)} className="mac-btn" style={{ padding: '0.4rem' }}>6</button>
        <button onClick={handleEqual} className="mac-btn mac-btn-purple" style={{ gridRow: 'span 2', padding: '0.4rem' }}>=</button>

        <button onClick={() => handleNum(1)} className="mac-btn" style={{ padding: '0.4rem' }}>1</button>
        <button onClick={() => handleNum(2)} className="mac-btn" style={{ padding: '0.4rem' }}>2</button>
        <button onClick={() => handleNum(3)} className="mac-btn" style={{ padding: '0.4rem' }}>3</button>

        <button onClick={() => handleNum(0)} className="mac-btn" style={{ gridColumn: 'span 3', padding: '0.4rem' }}>0</button>
      </div>
    </div>
  );
}
