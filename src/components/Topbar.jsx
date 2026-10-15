import React, { useState } from 'react';
import {
  Search,
  Bell,
  Sun,
  Moon,
  Globe,
  Printer,
  Shield,
  HelpCircle,
  CheckCircle2,
  Calendar,
  LogOut
} from 'lucide-react';
import { initialRoles } from '../data/initialData';

export function Topbar({
  school,
  currentRole,
  onRoleChange,
  onOpenPublicPortal,
  theme,
  onToggleTheme,
  searchQuery,
  onSearchChange,
  onLogout,
  usersList = initialRoles
}) {
  const [showNotification, setShowNotification] = useState(false);

  const notifications = [
    { id: 1, title: "Surat Masuk Baru", desc: "Undangan Rakor UKK Disdik Prov Jabar", time: "10 menit lalu", unread: true },
    { id: 2, title: "Pendaftaran PPDB", desc: "Farhan Maulana mendaftar via online", time: "30 menit lalu", unread: true },
    { id: 3, title: "Realisasi BOS 2026", desc: "Penerimaan Tahap 1 terkonfirmasi cair", time: "2 jam lalu", unread: false }
  ];

  return (
    <header className="topbar">
      <div className="topbar-left">
        {/* Academic year badge */}
        <div className="academic-badge">
          <span className="dot"></span>
          <span>T.A. {school.activeYear} ({school.activeSemester})</span>
        </div>

        {/* Global Search */}
        <div className="search-bar">
          <Search size={16} />
          <input
            type="text"
            placeholder="Cari surat, siswa, guru, buku, aset..."
            value={searchQuery}
            onChange={(e) => onSearchChange(e.target.value)}
          />
        </div>
      </div>

      <div className="topbar-right">
        {/* User Profile Badge (Pengguna yang Sedang Login) */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '8px',
            padding: '4px 12px',
            borderRadius: '99px',
            background: 'var(--bg-card)',
            border: '1px solid var(--border-color)',
            boxShadow: '0 1px 3px rgba(0,0,0,0.04)'
          }}
          title={`Login sebagai: ${currentRole.user} (${currentRole.label})`}
        >
          <div
            style={{
              width: '26px',
              height: '26px',
              borderRadius: '50%',
              background: currentRole.id === 'ktu' ? '#f59e0b' : '#3b82f6',
              color: '#ffffff',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontWeight: 800,
              fontSize: '0.74rem'
            }}
          >
            {currentRole.user ? currentRole.user.charAt(0) : 'U'}
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', lineHeight: 1.2 }}>
            <span style={{ fontSize: '0.78rem', fontWeight: 700, color: 'var(--text-main)' }}>
              {currentRole.user}
            </span>
            <span style={{ fontSize: '0.68rem', color: 'var(--text-muted)' }}>
              {currentRole.label}
            </span>
          </div>
          <span
            style={{
              width: '7px',
              height: '7px',
              borderRadius: '50%',
              background: '#10b981',
              marginLeft: '2px'
            }}
            title="Sesi Aktif"
          />
        </div>

        {/* Shortcut Lihat Portal Publik */}
        <button
          className="btn btn-gold btn-sm"
          onClick={onOpenPublicPortal}
          title="Buka Website Profil & Portal Pendaftaran PPDB"
        >
          <Globe size={15} />
          <span>Portal Web SMK</span>
        </button>

        {/* Theme switcher */}
        <button
          className="icon-btn"
          onClick={onToggleTheme}
          title={theme === 'dark' ? "Ganti ke Mode Terang" : "Ganti ke Mode Gelap"}
        >
          {theme === 'dark' ? <Sun size={17} /> : <Moon size={17} />}
        </button>

        {/* Notification Bell */}
        <div style={{ position: 'relative' }}>
          <button
            className="icon-btn"
            onClick={() => setShowNotification(!showNotification)}
            title="Notifikasi Masuk"
          >
            <Bell size={17} />
            <span className="badge-dot"></span>
          </button>

          {showNotification && (
            <div
              style={{
                position: 'absolute',
                right: 0,
                top: '48px',
                width: '320px',
                background: 'var(--bg-surface)',
                border: '1px solid var(--border-color)',
                borderRadius: 'var(--radius-lg)',
                boxShadow: 'var(--shadow-xl)',
                zIndex: 100,
                padding: '12px',
                animation: 'slideUp 0.15s ease'
              }}
            >
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', paddingBottom: '8px', borderBottom: '1px solid var(--border-color)' }}>
                <span style={{ fontWeight: 700, fontSize: '0.86rem' }}>Notifikasi Sistem</span>
                <span className="badge badge-info">3 Baru</span>
              </div>
              <div style={{ display: 'flex', flexFlow: 'column', gap: '8px', marginTop: '8px' }}>
                {notifications.map((n) => (
                  <div
                    key={n.id}
                    style={{
                      padding: '8px 10px',
                      borderRadius: 'var(--radius-md)',
                      background: n.unread ? 'var(--primary-50)' : 'transparent',
                      border: '1px solid var(--border-color)',
                      fontSize: '0.8rem'
                    }}
                  >
                    <div style={{ fontWeight: 600, color: 'var(--text-main)' }}>{n.title}</div>
                    <div style={{ color: 'var(--text-muted)', fontSize: '0.74rem' }}>{n.desc}</div>
                    <div style={{ color: 'var(--text-subtle)', fontSize: '0.68rem', marginTop: '4px' }}>{n.time}</div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Tombol Logout Sesi ERP */}
        {onLogout && (
          <button
            onClick={onLogout}
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '6px',
              padding: '6px 12px',
              borderRadius: '8px',
              border: '1px solid rgba(239, 68, 68, 0.3)',
              background: 'rgba(239, 68, 68, 0.08)',
              color: '#ef4444',
              fontSize: '0.78rem',
              fontWeight: 700,
              cursor: 'pointer',
              transition: 'all 0.2s'
            }}
            title="Keluar dari Panel SIMPEL & Kembali ke Portal Publik"
          >
            <LogOut size={14} />
            <span>Keluar</span>
          </button>
        )}

        {/* Logo SMK Ardjuna 2 Malang di Pojok Kanan Atas Topbar */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '8px',
            paddingLeft: '10px',
            borderLeft: '1px solid var(--border-color)'
          }}
          title="SMKS Ardjuna 2 Malang"
        >
          <img
            src="/logo-smk-ardjuna.png"
            alt="Logo SMK Ardjuna 2 Malang"
            style={{ width: '34px', height: '34px', objectFit: 'contain', filter: 'drop-shadow(0 1px 3px rgba(0,0,0,0.2))' }}
          />
        </div>
      </div>
    </header>
  );
}
