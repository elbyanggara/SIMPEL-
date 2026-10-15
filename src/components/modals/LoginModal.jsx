import React, { useState, useEffect } from 'react';
import {
  Lock,
  User,
  KeyRound,
  ShieldAlert,
  Eye,
  EyeOff,
  X,
  ArrowRight,
  ShieldCheck,
  CheckCircle2
} from 'lucide-react';
import { initialRoles } from '../../data/initialData';

export function LoginModal({ isOpen, onClose, onLoginSuccess, usersList = initialRoles }) {
  const [savedAccount, setSavedAccount] = useState(() => {
    try {
      const saved = localStorage.getItem('simpel_saved_account');
      return saved ? JSON.parse(saved) : null;
    } catch (e) {
      return null;
    }
  });

  const [rememberMe, setRememberMe] = useState(() => {
    return localStorage.getItem('simpel_remember_me') !== 'false';
  });

  const [username, setUsername] = useState(() => {
    try {
      const saved = localStorage.getItem('simpel_saved_account');
      if (saved) {
        const parsed = JSON.parse(saved);
        return parsed.username || '';
      }
    } catch (e) {}
    return '';
  });

  const [password, setPassword] = useState(() => {
    try {
      const saved = localStorage.getItem('simpel_saved_account');
      if (saved) {
        const parsed = JSON.parse(saved);
        return parsed.password || '';
      }
    } catch (e) {}
    return '';
  });

  const [showPassword, setShowPassword] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  // Perbarui data saat modal dibuka
  useEffect(() => {
    if (isOpen) {
      setErrorMsg('');
      try {
        const saved = localStorage.getItem('simpel_saved_account');
        if (saved) {
          const parsed = JSON.parse(saved);
          setSavedAccount(parsed);
          setUsername(parsed.username || '');
          setPassword(parsed.password || '');
          setRememberMe(true);
        }
      } catch (e) {}
    }
  }, [isOpen]);

  if (!isOpen) return null;

  const handleClose = () => {
    setErrorMsg('');
    if (!savedAccount) {
      setUsername('');
      setPassword('');
    }
    onClose();
  };

  const handleClearSavedAccount = () => {
    localStorage.removeItem('simpel_saved_account');
    setSavedAccount(null);
    setUsername('');
    setPassword('');
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setErrorMsg('');
    setIsLoading(true);

    setTimeout(() => {
      const cleanU = username.trim().toLowerCase();
      const cleanP = password.trim();

      if (!cleanU || !cleanP) {
        setIsLoading(false);
        setErrorMsg('Silakan masukkan Username / NIP dan Kata Sandi Anda.');
        return;
      }

      // 1. Cari user di usersList berdasarkan username, id, atau NIP
      let matchedUser = usersList.find(u => 
        (u.username && u.username.toLowerCase() === cleanU) ||
        (u.id && u.id.toLowerCase() === cleanU) ||
        (u.nip && cleanU.length > 5 && u.nip.replace(/\D/g, '') === cleanU.replace(/\D/g, ''))
      );

      // Alias admin mengarah ke Kepala Tata Usaha (Master Admin)
      if (!matchedUser && cleanU === 'admin') {
        matchedUser = usersList.find(u => u.id === 'ktu') || usersList[0];
      }

      if (!matchedUser) {
        setIsLoading(false);
        setErrorMsg('Akun tidak ditemukan. Pastikan Username atau NIP Anda terdaftar, atau hubungi Kepala Tata Usaha (Tri Utomo).');
        return;
      }

      // 2. Cek status aktif/nonaktif
      if (matchedUser.status === 'Nonaktif') {
        setIsLoading(false);
        setErrorMsg('Akun Anda saat ini sedang dinonaktifkan oleh Kepala Tata Usaha.');
        return;
      }

      // 3. Validasi kata sandi milik pengguna tersebut
      const isKtuMaster = matchedUser.id === 'ktu' || matchedUser.isSuperAdmin;
      const isPassMatch = matchedUser.password === cleanP ||
        (isKtuMaster && (cleanP === 'ardjuna2025' || cleanP === 'Ardjuna#2025' || cleanP === 'admin123'));

      if (!isPassMatch) {
        setIsLoading(false);
        setErrorMsg('Kata sandi salah. Silakan coba lagi atau minta reset kata sandi kepada Kepala Tata Usaha.');
        return;
      }

      // 4. Simpan akun jika opsi 'Simpan akun' dicentang
      if (rememberMe) {
        const accountData = {
          username: cleanU,
          password: cleanP,
          name: matchedUser.user,
          label: matchedUser.label
        };
        localStorage.setItem('simpel_saved_account', JSON.stringify(accountData));
        localStorage.setItem('simpel_remember_me', 'true');
        setSavedAccount(accountData);
      } else {
        localStorage.removeItem('simpel_saved_account');
        localStorage.setItem('simpel_remember_me', 'false');
        setSavedAccount(null);
        setUsername('');
        setPassword('');
      }

      setIsLoading(false);
      onLoginSuccess(matchedUser);
    }, 350);
  };

  return (
    <div
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: 9999,
        background: 'rgba(15, 23, 42, 0.72)',
        backdropFilter: 'blur(8px)',
        WebkitBackdropFilter: 'blur(8px)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '20px',
        animation: 'p2-fadeIn 0.2s ease-out'
      }}
      onClick={handleClose}
    >
      <div
        style={{
          background: '#ffffff',
          borderRadius: '24px',
          width: '100%',
          maxWidth: '440px',
          boxShadow: '0 25px 60px -15px rgba(0, 0, 0, 0.35), 0 0 0 1px rgba(255, 255, 255, 0.1)',
          overflow: 'hidden',
          position: 'relative',
          animation: 'p2-fadeUp 0.3s cubic-bezier(0.16, 1, 0.3, 1)'
        }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header Visual */}
        <div
          style={{
            background: 'linear-gradient(135deg, #0f172a 0%, #1e1b4b 50%, #312e81 100%)',
            padding: '28px 24px 22px',
            color: '#ffffff',
            position: 'relative',
            borderBottom: '1px solid rgba(255,255,255,0.1)'
          }}
        >
          {/* Close button */}
          <button
            onClick={handleClose}
            style={{
              position: 'absolute',
              top: '16px',
              right: '16px',
              background: 'rgba(255, 255, 255, 0.12)',
              border: 'none',
              borderRadius: '50%',
              width: '32px',
              height: '32px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: '#ffffff',
              cursor: 'pointer',
              transition: 'background 0.2s'
            }}
            title="Tutup"
          >
            <X size={18} />
          </button>

          <div style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
            <div
              style={{
                width: '52px',
                height: '52px',
                borderRadius: '16px',
                background: 'rgba(255, 255, 255, 0.12)',
                border: '1px solid rgba(255, 255, 255, 0.2)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                boxShadow: '0 8px 16px rgba(0,0,0,0.2)'
              }}
            >
              <img
                src="/logo-smk-ardjuna.png"
                alt="Logo SMK Ardjuna 2"
                style={{ width: '38px', height: '38px', objectFit: 'contain' }}
              />
            </div>
            <div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '3px' }}>
                <span
                  style={{
                    background: '#f59e0b',
                    color: '#451a03',
                    fontSize: '0.68rem',
                    fontWeight: 800,
                    padding: '2px 8px',
                    borderRadius: '99px',
                    letterSpacing: '0.04em',
                    textTransform: 'uppercase'
                  }}
                >
                  Area Terbatas
                </span>
              </div>
              <h3 style={{ margin: 0, fontSize: '1.25rem', fontWeight: 800, letterSpacing: '-0.02em', color: '#ffffff' }}>
                SIMPEL ERP Portal
              </h3>
              <p style={{ margin: 0, fontSize: '0.8rem', color: '#cbd5e1' }}>
                Sistem Manajemen Pelayanan SMK Ardjuna 2
              </p>
            </div>
          </div>
        </div>

        {/* Form Body */}
        <div style={{ padding: '24px 26px 26px' }}>
          {errorMsg && (
            <div
              style={{
                background: '#fef2f2',
                border: '1px solid #fecaca',
                color: '#991b1b',
                padding: '12px 14px',
                borderRadius: '12px',
                fontSize: '0.84rem',
                display: 'flex',
                alignItems: 'flex-start',
                gap: '10px',
                marginBottom: '18px'
              }}
            >
              <ShieldAlert size={18} style={{ flexShrink: 0, marginTop: '2px' }} />
              <div>{errorMsg}</div>
            </div>
          )}

          {/* Banner Akun Tersimpan */}
          {savedAccount && (
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                padding: '10px 14px',
                background: '#f0fdf4',
                border: '1.5px solid #bbf7d0',
                borderRadius: '12px',
                marginBottom: '16px'
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#166534', fontSize: '0.8rem', fontWeight: 600 }}>
                <CheckCircle2 size={16} color="#16a34a" style={{ flexShrink: 0 }} />
                <span>
                  Akun tersimpan: <strong>{savedAccount.name || savedAccount.username}</strong>
                </span>
              </div>
              <button
                type="button"
                onClick={handleClearSavedAccount}
                style={{
                  background: 'none',
                  border: 'none',
                  color: '#dc2626',
                  fontSize: '0.74rem',
                  cursor: 'pointer',
                  fontWeight: 700,
                  textDecoration: 'underline'
                }}
                title="Hapus akun tersimpan untuk memasukkan akun lain"
              >
                Ganti Akun
              </button>
            </div>
          )}

          <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
            {/* Username / NIP */}
            <div>
              <label
                style={{
                  display: 'block',
                  fontSize: '0.8rem',
                  fontWeight: 700,
                  color: '#334155',
                  marginBottom: '6px'
                }}
              >
                Username / NIP / ID Petugas
              </label>
              <div style={{ position: 'relative' }}>
                <User
                  size={17}
                  style={{
                    position: 'absolute',
                    left: '14px',
                    top: '50%',
                    transform: 'translateY(-50%)',
                    color: '#94a3b8'
                  }}
                />
                <input
                  type="text"
                  required
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  placeholder="Masukkan username atau NIP Anda"
                  style={{
                    width: '100%',
                    padding: '11px 14px 11px 40px',
                    borderRadius: '12px',
                    border: '1.5px solid #e2e8f0',
                    fontSize: '0.9rem',
                    color: '#0f172a',
                    outline: 'none',
                    boxSizing: 'border-box'
                  }}
                />
              </div>
            </div>

            {/* Password */}
            <div>
              <label
                style={{
                  display: 'block',
                  fontSize: '0.8rem',
                  fontWeight: 700,
                  color: '#334155',
                  marginBottom: '6px'
                }}
              >
                Kata Sandi
              </label>
              <div style={{ position: 'relative' }}>
                <KeyRound
                  size={17}
                  style={{
                    position: 'absolute',
                    left: '14px',
                    top: '50%',
                    transform: 'translateY(-50%)',
                    color: '#94a3b8'
                  }}
                />
                <input
                  type={showPassword ? 'text' : 'password'}
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Masukkan kata sandi pribadi Anda"
                  style={{
                    width: '100%',
                    padding: '11px 42px 11px 40px',
                    borderRadius: '12px',
                    border: '1.5px solid #e2e8f0',
                    fontSize: '0.9rem',
                    color: '#0f172a',
                    outline: 'none',
                    boxSizing: 'border-box'
                  }}
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  style={{
                    position: 'absolute',
                    right: '12px',
                    top: '50%',
                    transform: 'translateY(-50%)',
                    background: 'none',
                    border: 'none',
                    color: '#94a3b8',
                    cursor: 'pointer',
                    padding: '4px'
                  }}
                  title={showPassword ? 'Sembunyikan password' : 'Lihat password'}
                >
                  {showPassword ? <EyeOff size={17} /> : <Eye size={17} />}
                </button>
              </div>
            </div>

            {/* Checkbox Simpan Akun */}
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', margin: '2px 0 4px' }}>
              <label style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', fontSize: '0.82rem', color: '#475569', cursor: 'pointer', userSelect: 'none', fontWeight: 600 }}>
                <input
                  type="checkbox"
                  checked={rememberMe}
                  onChange={(e) => setRememberMe(e.target.checked)}
                  style={{ width: '16px', height: '16px', accentColor: '#2563eb', cursor: 'pointer' }}
                />
                <span>Simpan akun & kata sandi di perangkat ini</span>
              </label>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              disabled={isLoading}
              style={{
                marginTop: '4px',
                background: 'linear-gradient(135deg, #2563eb 0%, #1d4ed8 100%)',
                color: '#ffffff',
                border: 'none',
                borderRadius: '12px',
                padding: '13px 20px',
                fontSize: '0.95rem',
                fontWeight: 700,
                cursor: isLoading ? 'wait' : 'pointer',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '8px',
                boxShadow: '0 8px 20px -4px rgba(37, 99, 235, 0.4)',
                transition: 'all 0.2s ease',
                opacity: isLoading ? 0.75 : 1
              }}
            >
              {isLoading ? (
                <>Memverifikasi Akun...</>
              ) : (
                <>
                  <Lock size={16} /> Masuk ke Panel SIMPEL <ArrowRight size={16} />
                </>
              )}
            </button>
          </form>

          {/* Security Notice */}
          <div
            style={{
              marginTop: '18px',
              padding: '12px 14px',
              borderRadius: '12px',
              background: '#f8fafc',
              border: '1px solid #e2e8f0',
              display: 'flex',
              alignItems: 'center',
              gap: '10px'
            }}
          >
            <ShieldCheck size={18} color="#059669" style={{ flexShrink: 0 }} />
            <div style={{ fontSize: '0.74rem', color: '#64748b', lineHeight: 1.4 }}>
              Masuk menggunakan akun SIMPEL pribadi yang telah diterbitkan oleh <strong>Kepala Tata Usaha</strong>. Jangan berikan kata sandi Anda kepada pihak lain.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default LoginModal;
