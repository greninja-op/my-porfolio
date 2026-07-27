import React, { useState } from 'react';

export default function MacPuzzleApp() {
  const [board, setBoard] = useState([
    1, 2, 3, 4,
    5, 6, 7, 8,
    9, 10, 11, 0,
    13, 14, 15, 12
  ]);

  const moveTile = (idx) => {
    const emptyIdx = board.indexOf(0);
    const row = Math.floor(idx / 4);
    const col = idx % 4;
    const emptyRow = Math.floor(emptyIdx / 4);
    const emptyCol = emptyIdx % 4;

    const isAdjacent =
      (Math.abs(row - emptyRow) === 1 && col === emptyCol) ||
      (Math.abs(col - emptyCol) === 1 && row === emptyRow);

    if (isAdjacent) {
      const newBoard = [...board];
      newBoard[emptyIdx] = board[idx];
      newBoard[idx] = 0;
      setBoard(newBoard);
    }
  };

  return (
    <div style={{ fontFamily: 'var(--font-mac-title)', width: '220px', margin: '0 auto', textAlign: 'center' }}>
      <div style={{ fontSize: '1.2rem', fontWeight: 'bold', marginBottom: '0.4rem' }}>
        System 7 Puzzle Desk Accessory
      </div>
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(4, 1fr)',
          gap: '4px',
          background: '#000000',
          padding: '4px',
          border: '2px solid #000',
          boxShadow: '4px 4px 0px #000'
        }}
      >
        {board.map((num, i) => (
          <button
            key={i}
            onClick={() => moveTile(i)}
            disabled={num === 0}
            style={{
              width: '44px',
              height: '44px',
              background: num === 0 ? '#000000' : 'var(--mac-lime)',
              color: '#000000',
              border: num === 0 ? 'none' : '2px solid #000',
              fontFamily: 'var(--font-mac-title)',
              fontSize: '1.3rem',
              fontWeight: 'bold',
              cursor: num === 0 ? 'default' : 'pointer',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              boxShadow: num === 0 ? 'none' : 'inset 1px 1px 0px #fff'
            }}
          >
            {num !== 0 ? num : ''}
          </button>
        ))}
      </div>
    </div>
  );
}
