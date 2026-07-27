import React, { useState } from 'react';

export default function NuvaultApp() {
  const [secretInput, setSecretInput] = useState('Confidential API Key: sk_live_99812401824');
  const [encryptedData, setEncryptedData] = useState(null);
  const [activeTab, setActiveTab] = useState('vault');

  const handleEncrypt = (e) => {
    e.preventDefault();
    if (!secretInput) return;
    const fakeCipher = Array.from({ length: 32 }, () => Math.floor(Math.random() * 16).toString(16)).join('');
    const fakeKeyHash = '0x' + Array.from({ length: 16 }, () => Math.floor(Math.random() * 16).toString(16)).join('');
    setEncryptedData({
      original: secretInput,
      ciphertext: `AES-256-GCM:${fakeCipher}`,
      keyHash: fakeKeyHash,
      time: new Date().toLocaleTimeString()
    });
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', fontFamily: 'var(--font-mac-title)' }}>
      {/* Header */}
      <div style={{ borderBottom: '2px solid #000', paddingBottom: '0.6rem', display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '0.5rem' }}>
        <div>
          <h2 style={{ fontSize: '1.7rem', color: '#000', lineHeight: 1 }}>🔐 Nuvault.app</h2>
          <span style={{ fontSize: '1.05rem', color: 'var(--mac-purple-dark)', fontWeight: 'bold' }}>
            Zero-Trust Cloud Vault & Encrypted Asset Manager
          </span>
        </div>

        <div style={{ display: 'flex', gap: '0.4rem' }}>
          <button
            onClick={() => setActiveTab('vault')}
            className={`mac-btn ${activeTab === 'vault' ? 'mac-btn-purple' : ''}`}
            style={{ padding: '0.2rem 0.6rem', fontSize: '1rem' }}
          >
            🔒 Encryption Sandbox
          </button>
          <button
            onClick={() => setActiveTab('about')}
            className={`mac-btn ${activeTab === 'about' ? 'mac-btn-pink' : ''}`}
            style={{ padding: '0.2rem 0.6rem', fontSize: '1rem' }}
          >
            💡 What Nuvault is Needed For
          </button>
          <a
            href="https://github.com/greninja-op/Nuvault.git"
            target="_blank"
            rel="noopener noreferrer"
            className="mac-btn mac-btn-lime"
            style={{ textDecoration: 'none', padding: '0.2rem 0.6rem', fontSize: '1rem' }}
          >
            GitHub ↗
          </a>
        </div>
      </div>

      {activeTab === 'vault' && (
        <>
          <form onSubmit={handleEncrypt} className="mac-group-box">
            <span className="mac-group-label">Client-Side WebCrypto AES-256-GCM Encryption Demo</span>
            <div style={{ marginTop: '0.75rem', display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
              <div>
                <label style={{ fontSize: '1.1rem', fontWeight: 'bold', display: 'block', marginBottom: '0.2rem' }}>
                  Secret Data Payload to Encrypt:
                </label>
                <input
                  type="text"
                  value={secretInput}
                  onChange={(e) => setSecretInput(e.target.value)}
                  style={{
                    width: '100%',
                    padding: '0.5rem',
                    border: '2px solid #000',
                    borderRadius: '4px',
                    fontFamily: 'var(--font-mono)',
                    fontSize: '0.95rem'
                  }}
                />
              </div>

              <button type="submit" className="mac-btn mac-btn-purple" style={{ alignSelf: 'flex-start' }}>
                🔒 Encrypt & Secure Payload
              </button>
            </div>
          </form>

          {encryptedData && (
            <div className="mac-group-box" style={{ background: 'var(--mac-yellow)' }}>
              <span className="mac-group-label">Encrypted Zero-Knowledge Output</span>
              <div style={{ marginTop: '0.75rem', fontFamily: 'var(--font-mono)', fontSize: '1rem', display: 'flex', flexDirection: 'column', gap: '0.4rem' }}>
                <div><strong>Ciphertext Stream:</strong> <span style={{ wordBreak: 'break-all', color: 'var(--mac-purple-dark)' }}>{encryptedData.ciphertext}</span></div>
                <div><strong>Client Key Hash:</strong> <span>{encryptedData.keyHash}</span></div>
                <div><strong>Status:</strong> <span style={{ color: 'green', fontWeight: 'bold' }}>Server holds 0 decryption keys (Zero Knowledge)</span></div>
              </div>
            </div>
          )}
        </>
      )}

      {activeTab === 'about' && (
        <div className="mac-group-box">
          <span className="mac-group-label">What Nuvault is Needed For</span>
          <div style={{ marginTop: '0.75rem', fontFamily: 'var(--font-mac-body)', fontSize: '1rem', lineHeight: 1.6, color: '#111' }}>
            <h3 style={{ fontFamily: 'var(--font-mac-title)', fontSize: '1.4rem', color: 'var(--mac-purple-dark)', marginBottom: '0.4rem' }}>
              Why Nuvault?
            </h3>
            <p style={{ marginBottom: '0.8rem' }}>
              Traditional cloud storage decrypts data server-side, making user files vulnerable to data breaches and insider threats.
            </p>
            <h3 style={{ fontFamily: 'var(--font-mac-title)', fontSize: '1.4rem', color: 'var(--mac-purple-dark)', marginBottom: '0.4rem' }}>
              Zero-Trust Architecture:
            </h3>
            <p>
              Nuvault encrypts all assets directly inside the user's browser using AES-GCM 256-bit keys before sending any bytes across the network. The server stores zero unencrypted bytes or keys.
            </p>
          </div>
        </div>
      )}
    </div>
  );
}
