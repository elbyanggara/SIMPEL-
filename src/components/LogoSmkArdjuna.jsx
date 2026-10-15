import React from 'react';

export function LogoSmkArdjuna({ size = 52, showText = false, className = "", style = {} }) {
  return (
    <div
      className={`logo-smk-ardjuna-wrapper ${className}`}
      style={{
        display: 'inline-flex',
        alignItems: 'center',
        gap: '10px',
        ...style
      }}
    >
      <img
        src="/logo-smk-ardjuna.png"
        alt="Logo SMK Ardjuna 2 Malang"
        style={{
          width: `${size}px`,
          height: `${size}px`,
          objectFit: 'contain',
          filter: 'drop-shadow(0 2px 8px rgba(0,0,0,0.35))',
          flexShrink: 0
        }}
      />
      {showText && (
        <div style={{ display: 'flex', flexDirection: 'column', lineHeight: 1.15 }}>
          <span style={{ fontSize: '0.85rem', fontWeight: 800, color: '#fff', letterSpacing: '0.02em' }}>
            SMK ARDJUNA 2
          </span>
          <span style={{ fontSize: '0.7rem', color: '#93c5fd', fontWeight: 600 }}>
            KOTA MALANG
          </span>
        </div>
      )}
    </div>
  );
}

export default LogoSmkArdjuna;
