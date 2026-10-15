import React, { useState } from 'react';
import {
  Settings,
  Shield,
  Building,
  History,
  RotateCcw,
  CheckCircle,
  Save,
  UserCheck,
  UserPlus,
  KeyRound,
  Trash2,
  Copy,
  AlertTriangle,
  X,
  Check,
  Users,
  Eye,
  EyeOff,
  Sliders,
  UserX
} from 'lucide-react';
import { MODULES_CONFIG } from '../../data/modulesConfig';
import { initialRoles, initialStaff } from '../../data/initialData';

export function Modul12Pengaturan({
  school,
  setSchool,
  currentRole,
  onRoleChange,
  auditLogs,
  onResetData,
  usersList = initialRoles,
  onUpdateUsersList,
  staff = []
}) {
  const staffList = (staff && staff.length > 0) ? staff : initialStaff;
  const [activeTab, setActiveTab] = useState('user-role'); // user-role, my-profile, profil-sekolah, audit-log, backup
  const [saveNotice, setSaveNotice] = useState(null);

  // Form Profil Sekolah
  const [schoolForm, setSchoolForm] = useState({ ...school });

  // Status & Modal Tambah Pengguna
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);
  const [selectedStaffId, setSelectedStaffId] = useState('');
  const [autofillSuccessNotice, setAutofillSuccessNotice] = useState(false);
  const [actionModalUser, setActionModalUser] = useState(null);
  const [newUser, setNewUser] = useState({
    name: '',
    username: '',
    password: 'Ardjuna#2025',
    label: '',
    badge: 'Guru',
    nip: '',
    desc: '',
    allowedModules: ['modul1', 'modul3']
  });

  // Handler Pilih Guru/Staf Terdaftar (Autofill Otomatis)
  const handleStaffSelect = (staffId) => {
    setSelectedStaffId(staffId);
    if (!staffId || staffId === 'manual') {
      setAutofillSuccessNotice(false);
      return;
    }

    const st = staffList.find(s => s.id === staffId);
    if (!st) return;

    // Bersihkan nama dari gelar depan & belakang untuk username yang rapi
    const cleanFront = st.name.replace(/^(drs\.|dra\.|dr\.|ir\.|h\.|hj\.)\s*/i, '');
    const cleanBase = cleanFront.replace(/,\s*.*$/, '').trim();
    const parts = cleanBase.toLowerCase().replace(/[^a-z0-9\s]/g, '').split(/\s+/).filter(Boolean);
    
    let generatedUsername = parts.slice(0, 2).join('.');
    if (!generatedUsername) {
      generatedUsername = `guru.${st.id.toLowerCase().replace(/[^a-z0-9]/g, '')}`;
    }

    // Jika username sudah dipakai, tambahkan akhiran .ptk
    if (usersList.some(u => u.username?.toLowerCase() === generatedUsername.toLowerCase())) {
      generatedUsername = `${generatedUsername}.ptk`;
    }

    // Ambil NIP atau NUPTK
    const nipVal = (st.nip && st.nip !== '-') ? st.nip : (st.nuptk && st.nuptk !== '-' ? st.nuptk : '-');

    // Penentuan Kategori Akses (Badge) & Preset Modul Otomatis berdasarkan tugas/jabatan
    let determinedBadge = 'Guru';
    let defaultModules = ['modul3', 'modul1']; // Default Guru: SIMAK (Akademik) & SIMAKIS (Kesiswaan)

    const roleLower = (st.role || '').toLowerCase();
    const catLower = (st.category || '').toLowerCase();

    if (roleLower.includes('kepala sekolah') || catLower.includes('pimpinan')) {
      determinedBadge = 'Pimpinan';
      defaultModules = MODULES_CONFIG.map(m => m.id);
    } else if (roleLower.includes('kurikulum')) {
      determinedBadge = 'Akademik';
      defaultModules = ['modul3', 'modul1', 'modul8', 'modul10', 'modul11'];
    } else if (roleLower.includes('kesiswaan')) {
      determinedBadge = 'Kesiswaan';
      defaultModules = ['modul1', 'modul8', 'modul9', 'modul10'];
    } else if (roleLower.includes('sarana') || roleLower.includes('sarpras')) {
      determinedBadge = 'Sarana';
      defaultModules = ['modul6', 'modul1', 'modul10'];
    } else if (roleLower.includes('keuangan') || roleLower.includes('bendahara')) {
      determinedBadge = 'Keuangan';
      defaultModules = ['modul5', 'modul1', 'modul4'];
    } else if (roleLower.includes('bk') || roleLower.includes('konseling') || roleLower.includes('bimbingan')) {
      determinedBadge = 'BK / Konseling';
      defaultModules = ['modul9', 'modul1'];
    } else if (roleLower.includes('perpus') || roleLower.includes('pustakawan')) {
      determinedBadge = 'Perpustakaan';
      defaultModules = ['modul7', 'modul1'];
    } else if (roleLower.includes('tata usaha') || roleLower.includes('tu') || roleLower.includes('administrasi') || catLower.includes('tenaga kependidikan')) {
      determinedBadge = 'Tata Usaha';
      defaultModules = ['modul4', 'modul1', 'modul2', 'modul5', 'modul6'];
    } else if (roleLower.includes('pkl') || roleLower.includes('hubin') || roleLower.includes('humas')) {
      determinedBadge = 'Guru';
      defaultModules = ['modul8', 'modul3', 'modul1'];
    }

    setNewUser({
      name: st.name,
      label: st.role || 'Tenaga Pendidik',
      username: generatedUsername,
      password: newUser.password || 'Ardjuna#2025',
      nip: nipVal,
      badge: determinedBadge,
      allowedModules: defaultModules,
      desc: `${st.role} - PTK SMK Ardjuna 2 Malang`
    });

    setAutofillSuccessNotice(true);
  };

  // Modal Edit Hak Akses Modul
  const [isPermsModalOpen, setIsPermsModalOpen] = useState(false);
  const [selectedUserForPerms, setSelectedUserForPerms] = useState(null);
  const [tempAllowedModules, setTempAllowedModules] = useState([]);

  // Notifikasi Reset Password
  const [resetModalData, setResetModalData] = useState(null);
  const [copiedSuccess, setCopiedSuccess] = useState(false);

  // Form Ganti Password Sendiri
  const [myPass, setMyPass] = useState({ oldPass: '', newPass: '', confirmPass: '' });
  const [showMyPass, setShowMyPass] = useState(false);

  const isKtu = currentRole.id === 'ktu' || currentRole.isSuperAdmin;

  // Handler Profil Sekolah
  const handleSaveSchool = (e) => {
    e.preventDefault();
    setSchool(schoolForm);
    setSaveNotice('Profil sekolah dan kop surat dinas berhasil diperbarui!');
    setTimeout(() => setSaveNotice(null), 3000);
  };

  // Handler Tambah Akun Baru oleh KTU
  const handleAddUserSubmit = (e) => {
    e.preventDefault();
    if (!newUser.name.trim() || !newUser.username.trim()) return;

    const cleanUsername = newUser.username.trim().toLowerCase().replace(/\s+/g, '.');
    
    // Cek duplikasi username
    if (usersList.some(u => u.username?.toLowerCase() === cleanUsername)) {
      alert(`Username "${cleanUsername}" sudah digunakan. Silakan pilih username lain.`);
      return;
    }

    const createdUser = {
      id: `user-${Date.now()}`,
      username: cleanUsername,
      password: newUser.password.trim() || 'Ardjuna#2025',
      label: newUser.label.trim() || 'Dewan Guru',
      user: newUser.name.trim(),
      nip: newUser.nip.trim() || '-',
      badge: newUser.badge,
      status: 'Aktif',
      isSuperAdmin: false,
      allowedModules: newUser.allowedModules.length > 0 ? newUser.allowedModules : ['modul1', 'modul3'],
      desc: newUser.desc.trim() || `Akun staf pengajar / tenaga kependidikan SMK Ardjuna 2`
    };

    const updated = [...usersList, createdUser];
    if (onUpdateUsersList) onUpdateUsersList(updated);

    setIsAddModalOpen(false);
    setSelectedStaffId('');
    setAutofillSuccessNotice(false);
    setNewUser({
      name: '',
      username: '',
      password: 'Ardjuna#2025',
      label: '',
      badge: 'Guru',
      nip: '',
      desc: '',
      allowedModules: ['modul1', 'modul3']
    });

    setSaveNotice(`Akun untuk "${createdUser.user}" berhasil dibuat dengan username: @${createdUser.username}!`);
    setTimeout(() => setSaveNotice(null), 4000);
  };

  // Handler Buka Modal Edit Izin Modul
  const handleOpenPermsModal = (userObj) => {
    setSelectedUserForPerms(userObj);
    setTempAllowedModules(userObj.allowedModules ? [...userObj.allowedModules] : []);
    setIsPermsModalOpen(true);
  };

  // Handler Simpan Perubahan Izin Modul
  const handleSavePerms = () => {
    if (!selectedUserForPerms) return;

    const updated = usersList.map(u => {
      if (u.id === selectedUserForPerms.id) {
        return {
          ...u,
          allowedModules: tempAllowedModules
        };
      }
      return u;
    });

    if (onUpdateUsersList) onUpdateUsersList(updated);

    // Jika yang diubah adalah role yang sedang aktif, update juga
    if (currentRole.id === selectedUserForPerms.id) {
      onRoleChange({ ...selectedUserForPerms, allowedModules: tempAllowedModules });
    }

    setIsPermsModalOpen(false);
    setSaveNotice(`Hak akses modul untuk "${selectedUserForPerms.user}" berhasil disesuaikan!`);
    setTimeout(() => setSaveNotice(null), 3000);
  };

  // Handler Toggle Modul di Modal Izin
  const handleToggleModulePerm = (modId) => {
    setTempAllowedModules(prev => {
      if (prev.includes(modId)) {
        return prev.filter(m => m !== modId);
      } else {
        return [...prev, modId];
      }
    });
  };

  // Handler Preset Izin Cepat
  const handleApplyPreset = (presetType) => {
    if (presetType === 'all') {
      setTempAllowedModules(MODULES_CONFIG.map(m => m.id));
    } else if (presetType === 'guru') {
      setTempAllowedModules(['modul3', 'modul1']); // Akademik Rapor & Kesiswaan
    } else if (presetType === 'keuangan') {
      setTempAllowedModules(['modul5', 'modul1']); // Keuangan BOS & Siswa
    } else if (presetType === 'sarpras') {
      setTempAllowedModules(['modul6']); // Sarpras
    } else if (presetType === 'reset') {
      setTempAllowedModules([]);
    }
  };

  // Handler Reset Password oleh KTU
  const handleResetPassword = (userObj) => {
    const defaultPass = 'Ardjuna#2025';
    const updated = usersList.map(u => {
      if (u.id === userObj.id) {
        return { ...u, password: defaultPass };
      }
      return u;
    });

    if (onUpdateUsersList) onUpdateUsersList(updated);

    setResetModalData({
      name: userObj.user,
      username: userObj.username || userObj.id,
      password: defaultPass,
      role: userObj.label
    });
    setCopiedSuccess(false);
  };

  // Handler Toggle Status Aktif / Nonaktif
  const handleToggleUserStatus = (userObj) => {
    if (userObj.id === 'ktu') {
      alert('Akun Kepala Tata Usaha (Master Admin) tidak dapat dinonaktifkan.');
      return;
    }

    const newStatus = userObj.status === 'Aktif' ? 'Nonaktif' : 'Aktif';
    const updated = usersList.map(u => {
      if (u.id === userObj.id) {
        return { ...u, status: newStatus };
      }
      return u;
    });

    if (onUpdateUsersList) onUpdateUsersList(updated);
    setActionModalUser(null);
    setSaveNotice(`Status akun "${userObj.user}" diubah menjadi: ${newStatus}`);
    setTimeout(() => setSaveNotice(null), 3000);
  };

  // Handler Hapus Akun & Data Permanen
  const handleDeleteUserData = (userObj) => {
    if (userObj.id === 'ktu') {
      alert('Akun Kepala Tata Usaha (Master Admin) tidak dapat dihapus.');
      return;
    }

    const updated = usersList.filter(u => u.id !== userObj.id);
    if (onUpdateUsersList) onUpdateUsersList(updated);

    // Jika akun yang sedang disimulasikan dihapus, kembalikan simulasi ke akun KTU
    if (currentRole.id === userObj.id) {
      const ktuUser = updated.find(u => u.id === 'ktu') || updated[0];
      if (ktuUser && onRoleChange) onRoleChange(ktuUser);
    }

    setActionModalUser(null);
    setSaveNotice(`Akun dan data pengguna "${userObj.user}" (@${userObj.username || userObj.id}) berhasil dihapus.`);
    setTimeout(() => setSaveNotice(null), 3500);
  };

  // Handler Ganti Password Pribadi
  const handleSaveMyPassword = (e) => {
    e.preventDefault();
    if (myPass.newPass !== myPass.confirmPass) {
      alert('Konfirmasi kata sandi baru tidak cocok.');
      return;
    }
    if (myPass.newPass.length < 5) {
      alert('Kata sandi baru minimal 5 karakter demi keamanan.');
      return;
    }

    const updated = usersList.map(u => {
      if (u.id === currentRole.id) {
        return { ...u, password: myPass.newPass };
      }
      return u;
    });

    if (onUpdateUsersList) onUpdateUsersList(updated);
    setMyPass({ oldPass: '', newPass: '', confirmPass: '' });
    setSaveNotice('Kata sandi akun Anda berhasil diperbarui!');
    setTimeout(() => setSaveNotice(null), 3500);
  };

  // Salin Kredensial ke Clipboard
  const handleCopyCredentials = () => {
    if (!resetModalData) return;
    const text = `*Kredensial Akun SIMPEL SMK Ardjuna 2 Malang*\nNama: ${resetModalData.name}\nJabatan: ${resetModalData.role}\nUsername: ${resetModalData.username}\nKata Sandi: ${resetModalData.password}\nLink Login: ${window.location.origin}/#login`;
    navigator.clipboard.writeText(text);
    setCopiedSuccess(true);
    setTimeout(() => setCopiedSuccess(false), 2500);
  };

  return (
    <div className="module-content">
      {/* Header Modul */}
      <div className="module-header">
        <div className="module-header-info">
          <h2>
            <Settings className="text-primary-600" size={26} />
            Pengaturan & Hak Akses
          </h2>
          <p>
            Konfigurasi identitas sekolah, pembuatan akun pengguna oleh KTU, penyesuaian hak akses modul guru/staf, dan pencadangan data {school.name}.
          </p>
        </div>

        {/* Status Mode Otoritas */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
          {isKtu ? (
            <div
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '6px',
                padding: '6px 14px',
                borderRadius: '99px',
                background: '#ecfdf5',
                border: '1.5px solid #a7f3d0',
                color: '#065f46',
                fontSize: '0.8rem',
                fontWeight: 700
              }}
            >
              <Shield size={14} color="#059669" /> Otoritas Kepala TU Aktif
            </div>
          ) : (
            <div
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '6px',
                padding: '6px 14px',
                borderRadius: '99px',
                background: '#fffbeb',
                border: '1.5px solid #fde68a',
                color: '#92400e',
                fontSize: '0.8rem',
                fontWeight: 700
              }}
            >
              <UserCheck size={14} color="#d97706" /> Login: {currentRole.label}
            </div>
          )}
        </div>
      </div>

      {saveNotice && (
        <div className="toast-notice">
          <CheckCircle size={18} color="#10b981" />
          <span>{saveNotice}</span>
        </div>
      )}

      {/* Tabs */}
      <div className="tab-container">
        <button
          className={`tab-btn ${activeTab === 'user-role' ? 'active' : ''}`}
          onClick={() => setActiveTab('user-role')}
        >
          <Shield size={16} /> Manajemen Pengguna & Hak Akses ({usersList.length})
        </button>
        <button
          className={`tab-btn ${activeTab === 'my-profile' ? 'active' : ''}`}
          onClick={() => setActiveTab('my-profile')}
        >
          <KeyRound size={16} /> Profil Saya & Ganti Kata Sandi
        </button>
        <button
          className={`tab-btn ${activeTab === 'profil-sekolah' ? 'active' : ''}`}
          onClick={() => setActiveTab('profil-sekolah')}
        >
          <Building size={16} /> Profil Sekolah & Kop Surat
        </button>
        <button
          className={`tab-btn ${activeTab === 'audit-log' ? 'active' : ''}`}
          onClick={() => setActiveTab('audit-log')}
        >
          <History size={16} /> Audit Trail Log Aktivitas
        </button>
        <button
          className={`tab-btn ${activeTab === 'backup' ? 'active' : ''}`}
          onClick={() => setActiveTab('backup')}
        >
          <RotateCcw size={16} /> Cadangkan & Reset Data
        </button>
      </div>

      {/* ───────────────────────────────────────────────────────────── */}
      {/* TAB 1: MANAJEMEN PENGGUNA & HAK AKSES MODUL */}
      {/* ───────────────────────────────────────────────────────────── */}
      {activeTab === 'user-role' && (
        <div className="card-panel">
          <div className="card-header" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '12px' }}>
            <div>
              <div className="card-title">
                <Shield size={18} /> Matriks Hak Akses & Akun Terdaftar ({usersList.length} Pengguna)
              </div>
              <p style={{ fontSize: '0.82rem', color: 'var(--text-muted)', margin: '4px 0 0' }}>
                Hanya Kepala Tata Usaha (Tri Utomo) yang memiliki akses untuk membuatkan akun dan menyesuaikan modul masing-masing guru/staf.
              </p>
            </div>

            {/* Tombol Tambah Pengguna (Khusus KTU) */}
            {isKtu ? (
              <button
                className="btn btn-primary btn-sm"
                onClick={() => {
                  setSelectedStaffId('');
                  setAutofillSuccessNotice(false);
                  setNewUser({
                    name: '',
                    username: '',
                    password: 'Ardjuna#2025',
                    label: '',
                    badge: 'Guru',
                    nip: '',
                    desc: '',
                    allowedModules: ['modul1', 'modul3']
                  });
                  setIsAddModalOpen(true);
                }}
                style={{ display: 'flex', alignItems: 'center', gap: '6px' }}
              >
                <UserPlus size={16} />
                <span>Buatkan Akun Guru / Staf Baru</span>
              </button>
            ) : (
              <div style={{ fontSize: '0.78rem', color: '#64748b', fontStyle: 'italic' }}>
                *Pembuatan akun dan edit hak akses modul hanya dapat diubah oleh Kepala Tata Usaha.
              </div>
            )}
          </div>

          {/* Otoritas Banner Alert */}
          {!isKtu && (
            <div
              style={{
                margin: '16px 20px 0',
                padding: '12px 16px',
                borderRadius: '12px',
                background: '#eff6ff',
                border: '1px solid #bfdbfe',
                color: '#1e40af',
                fontSize: '0.84rem',
                display: 'flex',
                alignItems: 'center',
                gap: '10px'
              }}
            >
              <AlertTriangle size={18} color="#2563eb" style={{ flexShrink: 0 }} />
              <div>
                Anda sedang membuka sistem sebagai <strong>{currentRole.label} ({currentRole.user})</strong>. Tabel di bawah menampilkan modul yang diizinkan untuk Anda. Pengaturan hak akses hanya dapat diubah oleh <strong>Kepala Tata Usaha (Tri Utomo)</strong>.
              </div>
            </div>
          )}

          <div className="table-responsive" style={{ padding: '16px 20px 20px' }}>
            <table className="data-table">
              <thead>
                <tr>
                  <th>Nama Pengguna & Akun</th>
                  <th>Peran / Jabatan</th>
                  <th>Kategori</th>
                  <th>Modul yang Diizinkan</th>
                  <th>Status</th>
                  <th style={{ textAlign: 'center' }}>Aksi Manajemen</th>
                </tr>
              </thead>
              <tbody>
                {usersList.map((r) => {
                  const isCurrent = currentRole.id === r.id;
                  const isUserKtu = r.id === 'ktu' || r.isSuperAdmin;
                  const modulesCount = isUserKtu ? 12 : (r.allowedModules ? r.allowedModules.length : 0);

                  return (
                    <tr key={r.id} style={isCurrent ? { background: 'rgba(37, 99, 235, 0.04)' } : {}}>
                      {/* Nama & Username */}
                      <td>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                          <div
                            style={{
                              width: '36px',
                              height: '36px',
                              borderRadius: '10px',
                              background: isUserKtu ? 'linear-gradient(135deg, #f59e0b 0%, #d97706 100%)' : 'linear-gradient(135deg, #3b82f6 0%, #1d4ed8 100%)',
                              color: '#ffffff',
                              display: 'flex',
                              alignItems: 'center',
                              justifyContent: 'center',
                              fontWeight: 800,
                              fontSize: '0.9rem',
                              flexShrink: 0
                            }}
                          >
                            {r.user ? r.user.charAt(0) : "U"}
                          </div>
                          <div>
                            <div style={{ fontWeight: 700, color: 'var(--text-main)', display: 'flex', alignItems: 'center', gap: '6px' }}>
                              {r.user}
                              {isCurrent && (
                                <span className="badge badge-success" style={{ fontSize: '0.68rem', padding: '1px 6px' }}>
                                  Sedang Aktif
                                </span>
                              )}
                            </div>
                            <div style={{ fontSize: '0.74rem', color: 'var(--text-muted)' }}>
                              @{r.username || r.id} &bull; NIP/NUPTK: {r.nip || '-'}
                            </div>
                          </div>
                        </div>
                      </td>

                      {/* Peran */}
                      <td>
                        <div style={{ fontWeight: 600, fontSize: '0.86rem' }}>{r.label}</div>
                        <div style={{ fontSize: '0.72rem', color: 'var(--text-muted)' }}>{r.desc}</div>
                      </td>

                      {/* Badge Kategori */}
                      <td>
                        <span className={`badge ${isUserKtu ? 'badge-amber' : 'badge-purple'}`}>
                          {(r.badge || '').replace(/⭐/g, '').trim()}
                        </span>
                      </td>

                      {/* Modul yang Diizinkan */}
                      <td>
                        {isUserKtu ? (
                          <div
                            style={{
                              display: 'inline-flex',
                              alignItems: 'center',
                              gap: '6px',
                              padding: '3px 8px',
                              borderRadius: '6px',
                              background: '#fef3c7',
                              color: '#92400e',
                              fontSize: '0.74rem',
                              fontWeight: 700,
                              border: '1px solid #fde68a'
                            }}
                          >
                            Akses Penuh (12 Modul)
                          </div>
                        ) : (
                          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '4px', maxWidth: '240px' }}>
                            {r.allowedModules && r.allowedModules.map(mId => {
                              const mConfig = MODULES_CONFIG.find(c => c.id === mId);
                              return (
                                <span
                                  key={mId}
                                  style={{
                                    fontSize: '0.68rem',
                                    padding: '2px 6px',
                                    borderRadius: '4px',
                                    background: 'var(--bg-card)',
                                    border: '1px solid var(--border-color)',
                                    color: 'var(--text-main)',
                                    fontWeight: 600
                                  }}
                                  title={mConfig ? mConfig.name : mId}
                                >
                                  M{mConfig ? mConfig.number : mId.replace('modul', '')}
                                </span>
                              );
                            })}
                            <span style={{ fontSize: '0.7rem', color: 'var(--text-muted)', alignSelf: 'center' }}>
                              ({modulesCount} modul)
                            </span>
                          </div>
                        )}
                      </td>

                      {/* Status */}
                      <td>
                        <span className={`badge ${r.status === 'Aktif' ? 'badge-success' : 'badge-danger'}`}>
                          {r.status || 'Aktif'}
                        </span>
                      </td>

                      {/* Aksi */}
                      <td style={{ textAlign: 'center' }}>
                        <div style={{ display: 'inline-flex', alignItems: 'center', gap: '6px' }}>
                          {/* Tombol Atur Izin (Hanya KTU yang bisa mengedit) */}
                          {isKtu ? (
                            <>
                              <button
                                className="btn btn-secondary btn-sm"
                                onClick={() => handleOpenPermsModal(r)}
                                title="Sesuaikan Hak Akses Modul Guru"
                                style={{ padding: '5px 8px', fontSize: '0.74rem', display: 'flex', alignItems: 'center', gap: '4px' }}
                              >
                                <Sliders size={13} />
                                <span>Izin</span>
                              </button>

                              <button
                                className="btn btn-secondary btn-sm"
                                onClick={() => handleResetPassword(r)}
                                title="Reset Kata Sandi Akun"
                                style={{ padding: '5px 8px', fontSize: '0.74rem', display: 'flex', alignItems: 'center', gap: '4px' }}
                              >
                                <KeyRound size={13} />
                              </button>

                              {r.id !== 'ktu' && (
                                <button
                                  className="btn btn-secondary btn-sm"
                                  onClick={() => setActionModalUser(r)}
                                  title="Pilihan Nonaktifkan atau Hapus Data Akun"
                                  style={{ padding: '5px 8px', color: '#ef4444' }}
                                >
                                  <Trash2 size={13} />
                                </button>
                              )}
                            </>
                          ) : (
                            <span style={{ fontSize: '0.75rem', color: 'var(--text-muted)', fontStyle: 'italic' }}>
                              {isCurrent ? 'Akun Anda' : '-'}
                            </span>
                          )}
                        </div>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      )}

      {/* ───────────────────────────────────────────────────────────── */}
      {/* TAB 2: PROFIL SAYA & GANTI KATA SANDI */}
      {/* ───────────────────────────────────────────────────────────── */}
      {activeTab === 'my-profile' && (
        <div className="card-panel" style={{ maxWidth: '680px' }}>
          <div className="card-header">
            <div className="card-title">
              <KeyRound size={18} /> Profil Akun & Penggantian Kata Sandi Pribadi
            </div>
          </div>
          <div className="card-body">
            {/* Profil Ringkas */}
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '16px',
                padding: '16px',
                borderRadius: '16px',
                background: 'var(--bg-page)',
                border: '1px solid var(--border-color)',
                marginBottom: '24px'
              }}
            >
              <div
                style={{
                  width: '56px',
                  height: '56px',
                  borderRadius: '16px',
                  background: 'linear-gradient(135deg, #4f46e5 0%, #3b82f6 100%)',
                  color: '#ffffff',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '1.4rem',
                  fontWeight: 800
                }}
              >
                {currentRole?.user ? currentRole.user.charAt(0) : "U"}
              </div>
              <div style={{ flex: 1 }}>
                <h4 style={{ margin: '0 0 2px', fontSize: '1.1rem', color: 'var(--text-main)' }}>
                  {currentRole?.user}
                </h4>
                <div style={{ fontSize: '0.82rem', color: 'var(--text-muted)' }}>
                  Jabatan: <strong>{currentRole?.label}</strong> &bull; Username: <strong>@{currentRole?.username || currentRole?.id}</strong>
                </div>
                <div style={{ fontSize: '0.76rem', color: 'var(--text-subtle)', marginTop: '4px' }}>
                  NIP / NUPTK: {currentRole?.nip || '-'} &bull; Status: <span style={{ color: '#10b981', fontWeight: 700 }}>Aktif</span>
                </div>
              </div>
            </div>

            {/* Form Ganti Password */}
            <form onSubmit={handleSaveMyPassword}>
              <h5 style={{ margin: '0 0 14px', fontSize: '0.95rem', fontWeight: 700, color: 'var(--text-main)' }}>
                Perbarui Kata Sandi Anda
              </h5>

              <div className="form-group" style={{ marginBottom: '14px' }}>
                <label className="form-label">Kata Sandi Baru</label>
                <div style={{ position: 'relative' }}>
                  <input
                    type={showMyPass ? 'text' : 'password'}
                    required
                    className="form-input"
                    placeholder="Masukkan kata sandi baru (min. 5 karakter)"
                    value={myPass.newPass}
                    onChange={(e) => setMyPass({ ...myPass, newPass: e.target.value })}
                  />
                  <button
                    type="button"
                    onClick={() => setShowMyPass(!showMyPass)}
                    style={{
                      position: 'absolute',
                      right: '12px',
                      top: '50%',
                      transform: 'translateY(-50%)',
                      background: 'none',
                      border: 'none',
                      color: 'var(--text-muted)',
                      cursor: 'pointer'
                    }}
                  >
                    {showMyPass ? <EyeOff size={16} /> : <Eye size={16} />}
                  </button>
                </div>
              </div>

              <div className="form-group" style={{ marginBottom: '20px' }}>
                <label className="form-label">Ulangi Kata Sandi Baru</label>
                <input
                  type={showMyPass ? 'text' : 'password'}
                  required
                  className="form-input"
                  placeholder="Ketik ulang kata sandi baru"
                  value={myPass.confirmPass}
                  onChange={(e) => setMyPass({ ...myPass, confirmPass: e.target.value })}
                />
              </div>

              <button type="submit" className="btn btn-primary" style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <Save size={16} /> Simpan Kata Sandi Baru
              </button>
            </form>
          </div>
        </div>
      )}

      {/* ───────────────────────────────────────────────────────────── */}
      {/* TAB 3: PROFIL SEKOLAH & KOP SURAT */}
      {/* ───────────────────────────────────────────────────────────── */}
      {activeTab === 'profil-sekolah' && (
        <div className="card-panel">
          <div className="card-header">
            <div className="card-title">
              <Building size={18} /> Identitas Resmi Sekolah & Pengaturan Dokumen Cetak
            </div>
          </div>
          <div className="card-body">
            <form onSubmit={handleSaveSchool}>
              <div className="form-row">
                <div className="form-group">
                  <label className="form-label">Nama Sekolah Resmi</label>
                  <input
                    type="text"
                    required
                    className="form-input"
                    value={schoolForm.name}
                    onChange={(e) => setSchoolForm({ ...schoolForm, name: e.target.value })}
                  />
                </div>
                <div className="form-group">
                  <label className="form-label">Nomor Pokok Sekolah Nasional (NPSN)</label>
                  <input
                    type="text"
                    required
                    className="form-input"
                    value={schoolForm.npsn}
                    onChange={(e) => setSchoolForm({ ...schoolForm, npsn: e.target.value })}
                  />
                </div>
              </div>

              <div className="form-group">
                <label className="form-label">Alamat Lengkap Sekolah (Untuk Kop Surat)</label>
                <input
                  type="text"
                  required
                  className="form-input"
                  value={schoolForm.address}
                  onChange={(e) => setSchoolForm({ ...schoolForm, address: e.target.value })}
                />
              </div>

              <div className="form-row">
                <div className="form-group">
                  <label className="form-label">Kota / Kabupaten</label>
                  <input
                    type="text"
                    className="form-input"
                    value={schoolForm.city}
                    onChange={(e) => setSchoolForm({ ...schoolForm, city: e.target.value })}
                  />
                </div>
                <div className="form-group">
                  <label className="form-label">Nomor Telepon Dinas</label>
                  <input
                    type="text"
                    className="form-input"
                    value={schoolForm.phone}
                    onChange={(e) => setSchoolForm({ ...schoolForm, phone: e.target.value })}
                  />
                </div>
              </div>

              <div className="form-row">
                <div className="form-group">
                  <label className="form-label">Email Resmi Sekolah</label>
                  <input
                    type="email"
                    className="form-input"
                    value={schoolForm.email}
                    onChange={(e) => setSchoolForm({ ...schoolForm, email: e.target.value })}
                  />
                </div>
                <div className="form-group">
                  <label className="form-label">Tahun Ajaran Aktif</label>
                  <input
                    type="text"
                    className="form-input"
                    value={schoolForm.activeYear}
                    onChange={(e) => setSchoolForm({ ...schoolForm, activeYear: e.target.value })}
                  />
                </div>
              </div>

              <div style={{ marginTop: '20px' }}>
                <button type="submit" className="btn btn-primary" style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <Save size={16} /> Simpan Perubahan Profil
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* ───────────────────────────────────────────────────────────── */}
      {/* TAB 4: AUDIT TRAIL LOG */}
      {/* ───────────────────────────────────────────────────────────── */}
      {activeTab === 'audit-log' && (
        <div className="card-panel">
          <div className="card-header">
            <div className="card-title">
              <History size={18} /> Rekam Jejak Aktivitas Sistem (Audit Trail)
            </div>
          </div>
          <div className="table-responsive">
            <table className="data-table">
              <thead>
                <tr>
                  <th>Waktu</th>
                  <th>Pengguna / Pejabat</th>
                  <th>Aksi Operasional</th>
                  <th>Rincian Dokumen / Modul</th>
                  <th>Status</th>
                </tr>
              </thead>
              <tbody>
                {auditLogs && auditLogs.map((log) => (
                  <tr key={log.id}>
                    <td style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>{log.timestamp}</td>
                    <td><strong>{log.user}</strong></td>
                    <td><span className="badge badge-info">{log.action}</span></td>
                    <td style={{ fontSize: '0.84rem' }}>{log.details}</td>
                    <td><span className="badge badge-success">Terekam</span></td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}

      {/* ───────────────────────────────────────────────────────────── */}
      {/* TAB 5: BACKUP & RESET */}
      {/* ───────────────────────────────────────────────────────────── */}
      {activeTab === 'backup' && (
        <div className="card-panel">
          <div className="card-header">
            <div className="card-title">
              <RotateCcw size={18} /> Pencadangan Database & Pemulihan Sistem
            </div>
          </div>
          <div className="card-body">
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '16px' }}>
              <div style={{ padding: '20px', borderRadius: '16px', border: '1px solid var(--border-color)', background: 'var(--bg-page)' }}>
                <h4 style={{ margin: '0 0 8px', fontSize: '1rem' }}>📦 Ekspor Cadangan Data (JSON)</h4>
                <p style={{ fontSize: '0.84rem', color: 'var(--text-muted)', marginBottom: '16px' }}>
                  Unduh seluruh database sekolah (persuratan, siswa, PTK, inventaris, akun guru, dan keuangan).
                </p>
                <button
                  className="btn btn-secondary btn-sm"
                  onClick={() => {
                    const dataStr = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify({ school, users: usersList, exportDate: new Date() }, null, 2));
                    const dl = document.createElement('a');
                    dl.setAttribute("href", dataStr);
                    dl.setAttribute("download", `SIMPEL_BACKUP_${new Date().toISOString().slice(0,10)}.json`);
                    dl.click();
                  }}
                >
                  Unduh File Cadangan JSON
                </button>
              </div>

              <div style={{ padding: '20px', borderRadius: '16px', border: '1px solid #fecaca', background: '#fff5f5' }}>
                <h4 style={{ margin: '0 0 8px', fontSize: '1rem', color: '#991b1b' }}>⚠️ Reset Data Simulasi</h4>
                <p style={{ fontSize: '0.84rem', color: '#7f1d1d', marginBottom: '16px' }}>
                  Kembalikan seluruh data ke pengaturan awal bawaan sekolah SMK Ardjuna 2 Malang.
                </p>
                <button className="btn btn-danger btn-sm" onClick={onResetData}>
                  Kembalikan ke Data Awal
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* ───────────────────────────────────────────────────────────── */}
      {/* MODAL 1: TAMBAH PENGGUNA BARU (OLEH KEPALA TATA USAHA) */}
      {/* ───────────────────────────────────────────────────────────── */}
      {isAddModalOpen && (
        <div
          style={{
            position: 'fixed',
            inset: 0,
            zIndex: 9999,
            background: 'rgba(15, 23, 42, 0.72)',
            backdropFilter: 'blur(6px)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '20px'
          }}
          onClick={() => setIsAddModalOpen(false)}
        >
          <div
            style={{
              background: '#ffffff',
              borderRadius: '24px',
              width: '100%',
              maxWidth: '620px',
              maxHeight: '90vh',
              overflowY: 'auto',
              boxShadow: '0 25px 60px -15px rgba(0,0,0,0.3)',
              position: 'relative'
            }}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div
              style={{
                padding: '20px 24px',
                borderBottom: '1px solid #e2e8f0',
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                background: '#f8fafc',
                borderTopLeftRadius: '24px',
                borderTopRightRadius: '24px'
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                <div
                  style={{
                    width: '38px',
                    height: '38px',
                    borderRadius: '10px',
                    background: '#e0e7ff',
                    color: '#4f46e5',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center'
                  }}
                >
                  <UserPlus size={20} />
                </div>
                <div>
                  <h3 style={{ margin: 0, fontSize: '1.15rem', fontWeight: 800, color: '#0f172a' }}>
                    Buatkan Akun Guru / Staf Baru
                  </h3>
                  <p style={{ margin: 0, fontSize: '0.78rem', color: '#64748b' }}>
                    Otoritas Pembuatan Akun oleh Kepala Tata Usaha (Tri Utomo)
                  </p>
                </div>
              </div>

              <button
                onClick={() => setIsAddModalOpen(false)}
                style={{ background: 'none', border: 'none', color: '#94a3b8', cursor: 'pointer' }}
              >
                <X size={20} />
              </button>
            </div>

            {/* Modal Form */}
            <form onSubmit={handleAddUserSubmit} style={{ padding: '24px' }}>
              {/* Selector Guru / Staf Terdaftar (Autofill Otomatis) */}
              <div
                style={{
                  marginBottom: '18px',
                  padding: '14px 16px',
                  borderRadius: '12px',
                  background: 'linear-gradient(135deg, #f0fdf4 0%, #ecfdf5 100%)',
                  border: '1.5px solid #a7f3d0',
                  boxShadow: '0 2px 6px rgba(16, 185, 129, 0.06)'
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '8px' }}>
                  <label style={{ display: 'flex', alignItems: 'center', gap: '6px', fontWeight: 700, fontSize: '0.85rem', color: '#065f46', margin: 0 }}>
                    <Users size={16} color="#059669" />
                    <span>Pilih dari Data Guru / Tenaga Kependidikan (PTK) Terdaftar:</span>
                  </label>
                  <span style={{ fontSize: '0.72rem', color: '#047857', background: '#d1fae5', padding: '2px 8px', borderRadius: '6px', fontWeight: 700 }}>
                    {staffList.length} PTK di Sistem
                  </span>
                </div>

                <select
                  className="form-input"
                  value={selectedStaffId}
                  onChange={(e) => handleStaffSelect(e.target.value)}
                  style={{
                    borderColor: '#34d399',
                    background: '#ffffff',
                    fontWeight: 600,
                    color: '#0f172a',
                    cursor: 'pointer',
                    fontSize: '0.85rem'
                  }}
                >
                  <option value="">-- 🔍 Pilih Guru / Staf (Otomatis Terisi & Tidak Perlu Ketik Ulang) --</option>
                  <option value="manual">✍️ Input Manual / Tambah Pengguna Luar Baru</option>
                  <optgroup label="--- Daftar PTK SMK Ardjuna 2 Malang ---">
                    {staffList.map((st) => {
                      const hasAccount = usersList.some(
                        u => (u.user && u.user.trim().toLowerCase() === st.name.trim().toLowerCase()) ||
                             (u.nip && u.nip !== '-' && (u.nip === st.nip || u.nip === st.nuptk))
                      );
                      return (
                        <option key={st.id} value={st.id}>
                          {hasAccount ? '✅ [Sudah Ada Akun]' : '➕ [Belum Ada Akun]'} {st.name} — {st.role}
                        </option>
                      );
                    })}
                  </optgroup>
                </select>

                {autofillSuccessNotice && (
                  <div style={{ marginTop: '10px', fontSize: '0.75rem', color: '#047857', display: 'flex', alignItems: 'center', gap: '6px', lineHeight: 1.4 }}>
                    <CheckCircle size={15} color="#059669" style={{ flexShrink: 0 }} />
                    <span>
                      Data <strong>{newUser.name}</strong> ({newUser.label}) berhasil diisi otomatis! KTU dapat menyesuaikan username, sandi, atau hak akses modul di bawah jika diperlukan.
                    </span>
                  </div>
                )}
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px', marginBottom: '14px' }}>
                <div>
                  <label className="form-label">Nama Lengkap & Gelar *</label>
                  <input
                    type="text"
                    required
                    placeholder="Contoh: Budi Santoso, M.Pd."
                    className="form-input"
                    value={newUser.name}
                    onChange={(e) => setNewUser({ ...newUser, name: e.target.value })}
                  />
                </div>
                <div>
                  <label className="form-label">Jabatan / Tugas Pokok *</label>
                  <input
                    type="text"
                    required
                    placeholder="Contoh: Guru Produktif MPLB"
                    className="form-input"
                    value={newUser.label}
                    onChange={(e) => setNewUser({ ...newUser, label: e.target.value })}
                  />
                </div>
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px', marginBottom: '14px' }}>
                <div>
                  <label className="form-label">Username Login *</label>
                  <input
                    type="text"
                    required
                    placeholder="contoh: budi.guru"
                    className="form-input"
                    value={newUser.username}
                    onChange={(e) => setNewUser({ ...newUser, username: e.target.value })}
                  />
                  <span style={{ fontSize: '0.72rem', color: '#64748b' }}>Digunakan saat masuk ke SIMPEL</span>
                </div>
                <div>
                  <label className="form-label">Kata Sandi Bawaan</label>
                  <input
                    type="text"
                    required
                    className="form-input"
                    value={newUser.password}
                    onChange={(e) => setNewUser({ ...newUser, password: e.target.value })}
                  />
                  <span style={{ fontSize: '0.72rem', color: '#64748b' }}>Guru dapat menggantinya nanti</span>
                </div>
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px', marginBottom: '18px' }}>
                <div>
                  <label className="form-label">NIP / NUPTK / Kode Guru</label>
                  <input
                    type="text"
                    placeholder="1980... atau -"
                    className="form-input"
                    value={newUser.nip}
                    onChange={(e) => setNewUser({ ...newUser, nip: e.target.value })}
                  />
                </div>
                <div>
                  <label className="form-label">Kategori Akses</label>
                  <select
                    className="form-input"
                    value={newUser.badge}
                    onChange={(e) => setNewUser({ ...newUser, badge: e.target.value })}
                  >
                    <option value="Guru">Guru Mapel / Produktif</option>
                    <option value="Pimpinan">Pimpinan Sekolah</option>
                    <option value="Tata Usaha">Staf Tata Usaha</option>
                    <option value="Akademik">Bidang Kurikulum</option>
                    <option value="Kesiswaan">Bidang Kesiswaan</option>
                    <option value="Keuangan">Bidang Keuangan</option>
                    <option value="Sarana">Bidang Sarpras</option>
                    <option value="BK / Konseling">Bimbingan Konseling</option>
                    <option value="Perpustakaan">Perpustakaan</option>
                  </select>
                </div>
              </div>

              {/* Checklist Hak Akses Modul */}
              <div style={{ marginBottom: '20px' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '8px' }}>
                  <label className="form-label" style={{ margin: 0, fontWeight: 700 }}>
                    Pilih Hak Akses Modul yang Diizinkan:
                  </label>
                  <div style={{ display: 'flex', gap: '6px' }}>
                    <button
                      type="button"
                      onClick={() => setNewUser({ ...newUser, allowedModules: MODULES_CONFIG.map(m => m.id) })}
                      style={{ fontSize: '0.72rem', padding: '2px 8px', borderRadius: '4px', background: '#e0e7ff', border: 'none', color: '#3730a3', cursor: 'pointer', fontWeight: 600 }}
                    >
                      Pilih Semua
                    </button>
                    <button
                      type="button"
                      onClick={() => setNewUser({ ...newUser, allowedModules: ['modul3', 'modul1'] })}
                      style={{ fontSize: '0.72rem', padding: '2px 8px', borderRadius: '4px', background: '#ecfdf5', border: 'none', color: '#065f46', cursor: 'pointer', fontWeight: 600 }}
                    >
                      Preset Guru
                    </button>
                  </div>
                </div>

                <div
                  style={{
                    display: 'grid',
                    gridTemplateColumns: '1fr 1fr',
                    gap: '8px',
                    padding: '12px',
                    borderRadius: '12px',
                    background: '#f8fafc',
                    border: '1px solid #e2e8f0',
                    maxHeight: '200px',
                    overflowY: 'auto'
                  }}
                >
                  {MODULES_CONFIG.map(mod => {
                    const checked = newUser.allowedModules.includes(mod.id);
                    return (
                      <label
                        key={mod.id}
                        style={{
                          display: 'flex',
                          alignItems: 'center',
                          gap: '8px',
                          padding: '6px 10px',
                          borderRadius: '8px',
                          background: checked ? '#ffffff' : 'transparent',
                          border: checked ? '1px solid #cbd5e1' : '1px solid transparent',
                          cursor: 'pointer',
                          fontSize: '0.8rem',
                          fontWeight: checked ? 600 : 400,
                          color: checked ? '#0f172a' : '#64748b'
                        }}
                      >
                        <input
                          type="checkbox"
                          checked={checked}
                          onChange={() => {
                            if (checked) {
                              setNewUser({ ...newUser, allowedModules: newUser.allowedModules.filter(m => m !== mod.id) });
                            } else {
                              setNewUser({ ...newUser, allowedModules: [...newUser.allowedModules, mod.id] });
                            }
                          }}
                        />
                        <span>M{mod.number}: {mod.name}</span>
                      </label>
                    );
                  })}
                </div>
              </div>

              {/* Actions */}
              <div style={{ display: 'flex', justifyContent: 'flex-end', gap: '10px', borderTop: '1px solid #e2e8f0', paddingTop: '16px' }}>
                <button type="button" className="btn btn-secondary" onClick={() => setIsAddModalOpen(false)}>
                  Batal
                </button>
                <button type="submit" className="btn btn-primary" style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                  <UserPlus size={16} /> Buatkan & Aktifkan Akun
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* ───────────────────────────────────────────────────────────── */}
      {/* MODAL 2: SESUAIKAN HAK AKSES MODUL PENGGUNA */}
      {/* ───────────────────────────────────────────────────────────── */}
      {isPermsModalOpen && selectedUserForPerms && (
        <div
          style={{
            position: 'fixed',
            inset: 0,
            zIndex: 9999,
            background: 'rgba(15, 23, 42, 0.72)',
            backdropFilter: 'blur(6px)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '20px'
          }}
          onClick={() => setIsPermsModalOpen(false)}
        >
          <div
            style={{
              background: '#ffffff',
              borderRadius: '24px',
              width: '100%',
              maxWidth: '560px',
              boxShadow: '0 25px 60px -15px rgba(0,0,0,0.3)',
              overflow: 'hidden'
            }}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header */}
            <div
              style={{
                padding: '20px 24px',
                borderBottom: '1px solid #e2e8f0',
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                background: '#f8fafc'
              }}
            >
              <div>
                <h3 style={{ margin: 0, fontSize: '1.15rem', fontWeight: 800, color: '#0f172a' }}>
                  Sesuaikan Izin Modul Pengguna
                </h3>
                <p style={{ margin: '2px 0 0', fontSize: '0.82rem', color: '#64748b' }}>
                  Pengguna: <strong>{selectedUserForPerms.user}</strong> ({selectedUserForPerms.label})
                </p>
              </div>
              <button
                onClick={() => setIsPermsModalOpen(false)}
                style={{ background: 'none', border: 'none', color: '#94a3b8', cursor: 'pointer' }}
              >
                <X size={20} />
              </button>
            </div>

            {/* Content Checklist */}
            <div style={{ padding: '20px 24px' }}>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '12px' }}>
                <span style={{ fontSize: '0.8rem', color: '#64748b', fontWeight: 600 }}>
                  Pilih modul yang diizinkan untuk akun ini:
                </span>
                <div style={{ display: 'flex', gap: '6px' }}>
                  <button
                    type="button"
                    onClick={() => handleApplyPreset('all')}
                    style={{ fontSize: '0.72rem', padding: '3px 8px', borderRadius: '4px', background: '#e0e7ff', border: 'none', color: '#3730a3', cursor: 'pointer', fontWeight: 600 }}
                  >
                    Semua
                  </button>
                  <button
                    type="button"
                    onClick={() => handleApplyPreset('guru')}
                    style={{ fontSize: '0.72rem', padding: '3px 8px', borderRadius: '4px', background: '#ecfdf5', border: 'none', color: '#065f46', cursor: 'pointer', fontWeight: 600 }}
                  >
                    Guru
                  </button>
                  <button
                    type="button"
                    onClick={() => handleApplyPreset('keuangan')}
                    style={{ fontSize: '0.72rem', padding: '3px 8px', borderRadius: '4px', background: '#fef3c7', border: 'none', color: '#92400e', cursor: 'pointer', fontWeight: 600 }}
                  >
                    Keuangan
                  </button>
                </div>
              </div>

              <div
                style={{
                  display: 'grid',
                  gridTemplateColumns: '1fr',
                  gap: '8px',
                  maxHeight: '320px',
                  overflowY: 'auto',
                  paddingRight: '6px'
                }}
              >
                {MODULES_CONFIG.map(mod => {
                  const isChecked = tempAllowedModules.includes(mod.id);
                  const Icon = mod.icon;
                  return (
                    <div
                      key={mod.id}
                      onClick={() => handleToggleModulePerm(mod.id)}
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                        padding: '10px 14px',
                        borderRadius: '12px',
                        border: isChecked ? '1.5px solid #3b82f6' : '1px solid #e2e8f0',
                        background: isChecked ? '#eff6ff' : '#ffffff',
                        cursor: 'pointer',
                        transition: 'all 0.15s ease'
                      }}
                    >
                      <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                        <div
                          style={{
                            width: '32px',
                            height: '32px',
                            borderRadius: '8px',
                            background: isChecked ? '#dbeafe' : '#f1f5f9',
                            color: isChecked ? '#2563eb' : '#64748b',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center'
                          }}
                        >
                          <Icon size={16} />
                        </div>
                        <div>
                          <div style={{ fontSize: '0.86rem', fontWeight: 700, color: isChecked ? '#1e3a8a' : '#334155' }}>
                            Modul {mod.number}: {mod.name}
                          </div>
                          <div style={{ fontSize: '0.72rem', color: '#64748b' }}>
                            {mod.desc}
                          </div>
                        </div>
                      </div>

                      <div style={{ color: isChecked ? '#2563eb' : '#cbd5e1' }}>
                        {isChecked ? <CheckCircle size={20} /> : <div style={{ width: 18, height: 18, borderRadius: '50%', border: '2px solid #cbd5e1' }} />}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Footer */}
            <div
              style={{
                padding: '16px 24px',
                borderTop: '1px solid #e2e8f0',
                background: '#f8fafc',
                display: 'flex',
                justifyContent: 'flex-end',
                gap: '10px'
              }}
            >
              <button className="btn btn-secondary" onClick={() => setIsPermsModalOpen(false)}>
                Batal
              </button>
              <button className="btn btn-primary" onClick={handleSavePerms} style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                <Check size={16} /> Simpan Izin Modul
              </button>
            </div>
          </div>
        </div>
      )}

      {/* ───────────────────────────────────────────────────────────── */}
      {/* MODAL 3: NOTIFIKASI RESET PASSWORD */}
      {/* ───────────────────────────────────────────────────────────── */}
      {resetModalData && (
        <div
          style={{
            position: 'fixed',
            inset: 0,
            zIndex: 9999,
            background: 'rgba(15, 23, 42, 0.72)',
            backdropFilter: 'blur(6px)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '20px'
          }}
          onClick={() => setResetModalData(null)}
        >
          <div
            style={{
              background: '#ffffff',
              borderRadius: '20px',
              width: '100%',
              maxWidth: '440px',
              padding: '24px',
              boxShadow: '0 25px 60px -15px rgba(0,0,0,0.3)',
              position: 'relative'
            }}
            onClick={(e) => e.stopPropagation()}
          >
            <div style={{ textAlign: 'center', marginBottom: '18px' }}>
              <div
                style={{
                  width: '52px',
                  height: '52px',
                  borderRadius: '50%',
                  background: '#ecfdf5',
                  color: '#059669',
                  display: 'inline-flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginBottom: '12px'
                }}
              >
                <KeyRound size={26} />
              </div>
              <h3 style={{ margin: 0, fontSize: '1.2rem', fontWeight: 800, color: '#0f172a' }}>
                Kata Sandi Berhasil Direset!
              </h3>
              <p style={{ margin: '4px 0 0', fontSize: '0.84rem', color: '#64748b' }}>
                Kredensial untuk <strong>{resetModalData.name}</strong> telah diperbarui.
              </p>
            </div>

            <div
              style={{
                background: '#f8fafc',
                border: '1px solid #e2e8f0',
                borderRadius: '14px',
                padding: '16px',
                marginBottom: '20px',
                fontSize: '0.88rem'
              }}
            >
              <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '8px' }}>
                <span style={{ color: '#64748b' }}>Username:</span>
                <strong style={{ color: '#0f172a' }}>{resetModalData.username}</strong>
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                <span style={{ color: '#64748b' }}>Kata Sandi Baru:</span>
                <strong style={{ color: '#2563eb' }}>{resetModalData.password}</strong>
              </div>
            </div>

            <div style={{ display: 'flex', gap: '10px' }}>
              <button
                className="btn btn-primary"
                onClick={handleCopyCredentials}
                style={{ flex: 1, display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '6px' }}
              >
                {copiedSuccess ? <Check size={16} /> : <Copy size={16} />}
                <span>{copiedSuccess ? "Berhasil Disalin!" : "Salin Kredensial"}</span>
              </button>
              <button
                className="btn btn-secondary"
                onClick={() => setResetModalData(null)}
              >
                Tutup
              </button>
            </div>
          </div>
        </div>
      )}

      {/* ───────────────────────────────────────────────────────────── */}
      {/* MODAL 4: PILIHAN NONAKTIFKAN / HAPUS DATA AKUN */}
      {/* ───────────────────────────────────────────────────────────── */}
      {actionModalUser && (
        <div
          style={{
            position: 'fixed',
            inset: 0,
            zIndex: 9999,
            background: 'rgba(15, 23, 42, 0.72)',
            backdropFilter: 'blur(6px)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '20px'
          }}
          onClick={() => setActionModalUser(null)}
        >
          <div
            style={{
              background: '#ffffff',
              borderRadius: '24px',
              width: '100%',
              maxWidth: '520px',
              boxShadow: '0 25px 60px -15px rgba(0,0,0,0.3)',
              overflow: 'hidden'
            }}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header Modal */}
            <div
              style={{
                padding: '20px 24px',
                borderBottom: '1px solid #e2e8f0',
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                background: '#fff1f2'
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                <div
                  style={{
                    width: '40px',
                    height: '40px',
                    borderRadius: '12px',
                    background: '#ffe4e6',
                    color: '#e11d48',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center'
                  }}
                >
                  <AlertTriangle size={20} />
                </div>
                <div>
                  <h3 style={{ margin: 0, fontSize: '1.15rem', fontWeight: 800, color: '#9f1239' }}>
                    Kelola Akun Pengguna
                  </h3>
                  <p style={{ margin: 0, fontSize: '0.78rem', color: '#be123c' }}>
                    Pilihan Tindakan oleh Kepala Tata Usaha (Tri Utomo)
                  </p>
                </div>
              </div>
              <button
                onClick={() => setActionModalUser(null)}
                style={{ background: 'none', border: 'none', color: '#9f1239', cursor: 'pointer' }}
              >
                <X size={20} />
              </button>
            </div>

            {/* Modal Body */}
            <div style={{ padding: '24px' }}>
              {/* Kartu Profil Singkat Akun */}
              <div
                style={{
                  background: '#f8fafc',
                  border: '1px solid #e2e8f0',
                  borderRadius: '14px',
                  padding: '14px 16px',
                  marginBottom: '20px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between'
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                  <div
                    style={{
                      width: '42px',
                      height: '42px',
                      borderRadius: '12px',
                      background: 'linear-gradient(135deg, #3b82f6 0%, #1d4ed8 100%)',
                      color: '#ffffff',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      fontWeight: 800,
                      fontSize: '1rem'
                    }}
                  >
                    {actionModalUser.user ? actionModalUser.user.charAt(0) : 'U'}
                  </div>
                  <div>
                    <div style={{ fontWeight: 800, color: '#0f172a', fontSize: '0.95rem' }}>
                      {actionModalUser.user}
                    </div>
                    <div style={{ fontSize: '0.76rem', color: '#64748b' }}>
                      @{actionModalUser.username || actionModalUser.id} &bull; {actionModalUser.label}
                    </div>
                  </div>
                </div>

                <div>
                  <span
                    className={`badge ${actionModalUser.status === 'Aktif' ? 'badge-success' : 'badge-danger'}`}
                    style={{ fontSize: '0.78rem', padding: '4px 10px' }}
                  >
                    Status: {actionModalUser.status || 'Aktif'}
                  </span>
                </div>
              </div>

              <div style={{ fontSize: '0.84rem', fontWeight: 700, color: '#334155', marginBottom: '12px' }}>
                Silakan pilih opsi yang ingin Anda lakukan:
              </div>

              {/* Dua Pilihan Utama: Nonaktifkan & Hapus Data */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', marginBottom: '20px' }}>
                {/* Opsi 1: Nonaktifkan / Aktifkan Akun */}
                <div
                  style={{
                    border: '1.5px solid #fed7aa',
                    background: '#fffaf5',
                    borderRadius: '16px',
                    padding: '16px',
                    display: 'flex',
                    alignItems: 'flex-start',
                    justifyContent: 'space-between',
                    gap: '14px'
                  }}
                >
                  <div style={{ display: 'flex', gap: '12px', alignItems: 'flex-start' }}>
                    <div
                      style={{
                        width: '36px',
                        height: '36px',
                        borderRadius: '10px',
                        background: '#ffedd5',
                        color: '#c2410c',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        flexShrink: 0
                      }}
                    >
                      <UserX size={18} />
                    </div>
                    <div>
                      <div style={{ fontWeight: 800, fontSize: '0.9rem', color: '#9a3412', marginBottom: '4px' }}>
                        {actionModalUser.status === 'Aktif' ? 'Opsi 1: Nonaktifkan Akun' : 'Opsi 1: Aktifkan Kembali Akun'}
                      </div>
                      <div style={{ fontSize: '0.78rem', color: '#7c2d12', lineHeight: 1.4 }}>
                        {actionModalUser.status === 'Aktif'
                          ? 'Akun dinonaktifkan sementara sehingga pengguna tidak dapat login ke SIMPEL. Namun semua data, profil, dan hak akses tetap tersimpan aman dan dapat diaktifkan kembali sewaktu-waktu.'
                          : 'Mengembalikan status akun menjadi Aktif sehingga guru/staf dapat kembali login ke SIMPEL dengan hak akses modul sebelumnya.'}
                      </div>
                    </div>
                  </div>

                  <button
                    type="button"
                    onClick={() => handleToggleUserStatus(actionModalUser)}
                    style={{
                      flexShrink: 0,
                      padding: '8px 14px',
                      borderRadius: '10px',
                      background: actionModalUser.status === 'Aktif' ? '#ea580c' : '#16a34a',
                      color: '#ffffff',
                      border: 'none',
                      fontWeight: 700,
                      fontSize: '0.78rem',
                      cursor: 'pointer',
                      whiteSpace: 'nowrap'
                    }}
                  >
                    {actionModalUser.status === 'Aktif' ? 'Nonaktifkan' : 'Aktifkan'}
                  </button>
                </div>

                {/* Opsi 2: Hapus Permanen Data Akun */}
                <div
                  style={{
                    border: '1.5px solid #fecdd3',
                    background: '#fff5f6',
                    borderRadius: '16px',
                    padding: '16px',
                    display: 'flex',
                    alignItems: 'flex-start',
                    justifyContent: 'space-between',
                    gap: '14px'
                  }}
                >
                  <div style={{ display: 'flex', gap: '12px', alignItems: 'flex-start' }}>
                    <div
                      style={{
                        width: '36px',
                        height: '36px',
                        borderRadius: '10px',
                        background: '#ffe4e6',
                        color: '#e11d48',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        flexShrink: 0
                      }}
                    >
                      <Trash2 size={18} />
                    </div>
                    <div>
                      <div style={{ fontWeight: 800, fontSize: '0.9rem', color: '#9f1239', marginBottom: '4px' }}>
                        Opsi 2: Hapus Data Akun Permanen
                      </div>
                      <div style={{ fontSize: '0.78rem', color: '#881337', lineHeight: 1.4 }}>
                        Menghapus akun dan hak akses pengguna secara permanen dari SIMPEL. Tindakan ini tidak dapat dibatalkan.
                      </div>
                    </div>
                  </div>

                  <button
                    type="button"
                    onClick={() => handleDeleteUserData(actionModalUser)}
                    style={{
                      flexShrink: 0,
                      padding: '8px 14px',
                      borderRadius: '10px',
                      background: '#e11d48',
                      color: '#ffffff',
                      border: 'none',
                      fontWeight: 700,
                      fontSize: '0.78rem',
                      cursor: 'pointer',
                      whiteSpace: 'nowrap'
                    }}
                  >
                    Hapus Data
                  </button>
                </div>
              </div>

              {/* Tombol Tutup / Batal */}
              <div style={{ display: 'flex', justifyContent: 'flex-end', borderTop: '1px solid #e2e8f0', paddingTop: '16px' }}>
                <button
                  type="button"
                  className="btn btn-secondary"
                  onClick={() => setActionModalUser(null)}
                >
                  Batal
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
export default Modul12Pengaturan;
