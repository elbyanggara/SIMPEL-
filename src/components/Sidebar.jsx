import React from 'react';
import {
  LogOut,
  Lock
} from 'lucide-react';
import { MODULES_CONFIG } from '../data/modulesConfig';
export { MODULES_CONFIG };

export function Sidebar({ currentModule, onSelectModule, currentRole, school, onLogout }) {
  // Kelompokkan modul berdasarkan kategori
  const categories = [
    { name: "Administrasi Utama & Persuratan", items: ["modul4", "modul11"] },
    { name: "Kesiswaan & Akademik", items: ["modul1", "modul2", "modul3", "modul9"] },
    { name: "Keuangan, Sarpras & Perpustakaan", items: ["modul5", "modul6", "modul7"] },
    { name: "Vokasi & Publikasi", items: ["modul8", "modul10"] },
    { name: "Sistem & Konfigurasi", items: ["modul12"] }
  ];

  return (
    <aside className="sidebar">
      {/* Brand Header */}
      <div className="sidebar-brand">
        <div className="brand-icon-box" style={{ background: 'transparent', padding: 0 }}>
          <img
            src="/logo-smk-ardjuna.png"
            alt="Logo SMK Ardjuna 2 Malang"
            style={{ width: '38px', height: '38px', objectFit: 'contain', filter: 'drop-shadow(0 2px 6px rgba(0,0,0,0.4))' }}
          />
        </div>
        <div>
          <div className="brand-title">
            SIMPEL <span className="brand-badge">SMK ARDJUNA 2</span>
          </div>
          <div className="brand-sub">Yayasan Ardjuna Bina Taruna Malang</div>
        </div>
      </div>

      {/* Nav List */}
      <div className="sidebar-content">
        {categories.map((cat, idx) => (
          <div key={idx} className="nav-group">
            <div className="nav-section-title">{cat.name}</div>
            <ul className="nav-list">
              {cat.items.map((modId) => {
                const mod = MODULES_CONFIG.find((m) => m.id === modId);
                if (!mod) return null;
                const IconComponent = mod.icon;
                const isActive = currentModule === mod.id;
                
                // Cek apakah modul diizinkan untuk currentRole
                const isSuperAdmin = currentRole?.id === 'ktu' || currentRole?.isSuperAdmin;
                const isAllowed = isSuperAdmin || !currentRole?.allowedModules || currentRole.allowedModules.includes(mod.id);

                return (
                  <li key={mod.id}>
                    <button
                      className={`nav-item-btn ${isActive ? 'active' : ''}`}
                      onClick={() => {
                        if (!isAllowed) {
                          alert(`🔒 Akses Terbatas:\n\nPeran Anda (${currentRole?.label || 'Pengguna'}) tidak memiliki izin untuk membuka "${mod.name}".\n\nHak akses hanya dapat diberikan dan diatur oleh Kepala Tata Usaha (Tri Utomo) melalui Modul 12 (Pengaturan & Hak Akses).`);
                          return;
                        }
                        onSelectModule(mod.id);
                      }}
                      style={!isAllowed ? { opacity: 0.65, cursor: 'not-allowed' } : {}}
                      title={!isAllowed ? `Akses dibatasi untuk ${currentRole?.label}` : mod.name}
                    >
                      <div className="nav-icon">
                        <IconComponent size={18} />
                      </div>
                      <span className="nav-label">
                        {mod.name}
                      </span>
                      {!isAllowed ? (
                        <span
                          style={{
                            display: 'inline-flex',
                            alignItems: 'center',
                            gap: '3px',
                            fontSize: '0.66rem',
                            fontWeight: 700,
                            padding: '2px 6px',
                            borderRadius: '6px',
                            background: 'rgba(239, 68, 68, 0.12)',
                            color: '#ef4444',
                            border: '1px solid rgba(239, 68, 68, 0.25)'
                          }}
                        >
                          <Lock size={10} /> Terkunci
                        </span>
                      ) : mod.badge ? (
                        <span className={`nav-item-badge ${mod.badgeType}`}>
                          {mod.badge}
                        </span>
                      ) : null}
                    </button>
                  </li>
                );
              })}
            </ul>
          </div>
        ))}
      </div>

      {/* Footer Profile Status */}
      <div className="sidebar-footer">
        <div className="user-quick-profile" style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
          <div className="user-avatar">
            {currentRole?.user ? currentRole.user.charAt(0) : "U"}
          </div>
          <div style={{ flex: 1, minWidth: 0 }}>
            <div className="user-meta-name" title={currentRole?.user}>
              {currentRole?.user || "Pengguna Aktif"}
            </div>
            <div className="user-meta-role">
              <span style={{ width: 6, height: 6, borderRadius: '50%', background: '#10b981' }}></span>
              {currentRole?.label || "Administrator"}
            </div>
          </div>
          {onLogout && (
            <button
              onClick={onLogout}
              style={{
                background: 'rgba(239, 68, 68, 0.12)',
                border: '1px solid rgba(239, 68, 68, 0.25)',
                color: '#ef4444',
                borderRadius: '8px',
                width: '32px',
                height: '32px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                cursor: 'pointer',
                transition: 'all 0.2s ease',
                flexShrink: 0
              }}
              title="Keluar Sesi ERP & Kembali ke Web Publik"
            >
              <LogOut size={15} />
            </button>
          )}
        </div>
      </div>
    </aside>
  );
}

export default Sidebar;
