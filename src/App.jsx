import React, { useState, useEffect } from 'react';
import { Sidebar } from './components/Sidebar';
import { Topbar } from './components/Topbar';

// Modules
import { Modul1Kesiswaan } from './components/modules/Modul1Kesiswaan';
import { Modul2Kepegawaian } from './components/modules/Modul2Kepegawaian';
import { Modul3Akademik } from './components/modules/Modul3Akademik';
import { Modul4TataUsaha } from './components/modules/Modul4TataUsaha';
import { Modul5Keuangan } from './components/modules/Modul5Keuangan';
import { Modul6Sarpras } from './components/modules/Modul6Sarpras';
import { Modul7Perpustakaan } from './components/modules/Modul7Perpustakaan';
import { Modul8HubinPkl } from './components/modules/Modul8HubinPkl';
import { Modul9Bk } from './components/modules/Modul9Bk';
import { Modul10WebsitePortal } from './components/modules/Modul10WebsitePortal';
import { Modul11LaporanAkreditasi } from './components/modules/Modul11LaporanAkreditasi';
import { Modul12Pengaturan } from './components/modules/Modul12Pengaturan';
import { LoginModal } from './components/modals/LoginModal';

// Initial Data
import {
  initialSchoolProfile,
  initialRoles,
  initialStudents,
  initialPpdbApplicants,
  initialStaff,
  initialSuratMasuk,
  initialSuratKeluar,
  initialGuestBook,
  initialFinancialBos,
  initialSppPayments,
  initialSarpras,
  initialLibraryBooks,
  initialPklPartners,
  initialPklPlacements,
  initialBkCases,
  initialAuditLogs
} from './data/initialData';

export default function App() {
  // Theme state
  const [theme, setTheme] = useState(() => localStorage.getItem('simpel_theme') || 'light');
  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('simpel_theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(prev => (prev === 'light' ? 'dark' : 'light'));
  };

  // State Management with LocalStorage Fallback (Prioritaskan SMK Ardjuna 2 Malang)
  const [school, setSchool] = useState(() => {
    const saved = localStorage.getItem('simpel_school');
    if (saved) {
      const parsed = JSON.parse(saved);
      if (parsed.name && parsed.name.includes("ARDJUNA")) return parsed;
    }
    return initialSchoolProfile;
  });

  // Manajemen Pengguna & Hak Akses (Dikelola oleh Kepala Tata Usaha)
  const [usersList, setUsersList] = useState(() => {
    const saved = localStorage.getItem('simpel_users');
    if (saved) {
      try {
        const parsed = JSON.parse(saved);
        if (parsed.length > 0 && parsed[0].id === 'ktu') return parsed;
      } catch (e) {}
    }
    return initialRoles;
  });

  const handleUpdateUsersList = (newUsers) => {
    setUsersList(newUsers);
    localStorage.setItem('simpel_users', JSON.stringify(newUsers));
  };

  const [currentRole, setCurrentRole] = useState(() => usersList[0] || initialRoles[0]); // Default: Kepala Tata Usaha (KTU)
  const [currentModule, setCurrentModule] = useState('modul4'); // Default: Modul 4 (Tata Usaha & Persuratan)

  // Auth & Access Control
  const [isAuthenticated, setIsAuthenticated] = useState(() => {
    return localStorage.getItem('simpel_auth') === 'true';
  });
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);

  // Jika pengunjung belum login, default-nya SELALU Website Publik!
  const [isPublicPortalOpen, setIsPublicPortalOpen] = useState(() => {
    const auth = localStorage.getItem('simpel_auth') === 'true';
    if (!auth) return true;
    return window.location.hash === '#portal' || window.location.search.includes('portal');
  });

  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    const handleHash = () => {
      if (window.location.hash === '#portal') {
        setIsPublicPortalOpen(true);
      } else if (window.location.hash === '#login') {
        setIsLoginModalOpen(true);
      }
    };
    window.addEventListener('hashchange', handleHash);
    return () => window.removeEventListener('hashchange', handleHash);
  }, []);

  // 12 Modules Data States
  const [students, setStudents] = useState(() => {
    const saved = localStorage.getItem('simpel_students');
    if (saved) {
      const parsed = JSON.parse(saved);
      if (parsed[0]?.major?.includes("MPLB") || parsed[0]?.major?.includes("OTKP") || parsed[0]?.major?.includes("BDP")) {
        return parsed;
      }
    }
    return initialStudents;
  });

  const [ppdbApplicants, setPpdbApplicants] = useState(() => {
    const saved = localStorage.getItem('simpel_ppdb');
    if (saved) {
      const parsed = JSON.parse(saved);
      if (parsed[0]?.chosenMajor?.includes("MPLB") || parsed[0]?.chosenMajor?.includes("BDP") || parsed[0]?.chosenMajor?.includes("AKL")) {
        return parsed;
      }
    }
    return initialPpdbApplicants;
  });

  const [staff, setStaff] = useState(() => {
    const saved = localStorage.getItem('simpel_staff');
    if (saved) {
      try {
        const parsed = JSON.parse(saved);
        if (parsed.length >= 20 && !parsed.some(s => s.name?.includes('Bambang Sudarsono'))) {
          return parsed;
        }
      } catch (e) {}
    }
    return initialStaff;
  });

  const [suratMasuk, setSuratMasuk] = useState(() => {
    const saved = localStorage.getItem('simpel_surat_masuk');
    return saved ? JSON.parse(saved) : initialSuratMasuk;
  });

  const [suratKeluar, setSuratKeluar] = useState(() => {
    const saved = localStorage.getItem('simpel_surat_keluar');
    return saved ? JSON.parse(saved) : initialSuratKeluar;
  });

  const [guestBook, setGuestBook] = useState(() => {
    const saved = localStorage.getItem('simpel_guestbook');
    return saved ? JSON.parse(saved) : initialGuestBook;
  });

  const [financialBos, setFinancialBos] = useState(() => {
    const saved = localStorage.getItem('simpel_bos');
    return saved ? JSON.parse(saved) : initialFinancialBos;
  });

  const [sppPayments, setSppPayments] = useState(() => {
    const saved = localStorage.getItem('simpel_spp');
    return saved ? JSON.parse(saved) : initialSppPayments;
  });

  const [sarpras, setSarpras] = useState(() => {
    const saved = localStorage.getItem('simpel_sarpras');
    return saved ? JSON.parse(saved) : initialSarpras;
  });

  const [libraryBooks, setLibraryBooks] = useState(() => {
    const saved = localStorage.getItem('simpel_library');
    return saved ? JSON.parse(saved) : initialLibraryBooks;
  });

  const [pklPartners, setPklPartners] = useState(() => {
    const saved = localStorage.getItem('simpel_pkl_partners');
    return saved ? JSON.parse(saved) : initialPklPartners;
  });

  const [pklPlacements, setPklPlacements] = useState(() => {
    const saved = localStorage.getItem('simpel_pkl_placements');
    return saved ? JSON.parse(saved) : initialPklPlacements;
  });

  const [bkCases, setBkCases] = useState(() => {
    const saved = localStorage.getItem('simpel_bk');
    return saved ? JSON.parse(saved) : initialBkCases;
  });

  const [auditLogs, setAuditLogs] = useState(() => {
    const saved = localStorage.getItem('simpel_logs');
    return saved ? JSON.parse(saved) : initialAuditLogs;
  });

  // Save to LocalStorage on updates
  useEffect(() => {
    localStorage.setItem('simpel_school', JSON.stringify(school));
    localStorage.setItem('simpel_students', JSON.stringify(students));
    localStorage.setItem('simpel_ppdb', JSON.stringify(ppdbApplicants));
    localStorage.setItem('simpel_staff', JSON.stringify(staff));
    localStorage.setItem('simpel_surat_masuk', JSON.stringify(suratMasuk));
    localStorage.setItem('simpel_surat_keluar', JSON.stringify(suratKeluar));
    localStorage.setItem('simpel_guestbook', JSON.stringify(guestBook));
    localStorage.setItem('simpel_bos', JSON.stringify(financialBos));
    localStorage.setItem('simpel_spp', JSON.stringify(sppPayments));
    localStorage.setItem('simpel_sarpras', JSON.stringify(sarpras));
    localStorage.setItem('simpel_library', JSON.stringify(libraryBooks));
    localStorage.setItem('simpel_pkl_partners', JSON.stringify(pklPartners));
    localStorage.setItem('simpel_pkl_placements', JSON.stringify(pklPlacements));
    localStorage.setItem('simpel_bk', JSON.stringify(bkCases));
    localStorage.setItem('simpel_logs', JSON.stringify(auditLogs));
  }, [
    school, students, ppdbApplicants, staff, suratMasuk, suratKeluar,
    guestBook, financialBos, sppPayments, sarpras, libraryBooks,
    pklPartners, pklPlacements, bkCases, auditLogs
  ]);

  // Reset to Demo Data
  const handleResetData = () => {
    if (window.confirm("Apakah Anda yakin ingin mereset seluruh data kembali ke data demo awal SMK?")) {
      localStorage.clear();
      setSchool(initialSchoolProfile);
      setStudents(initialStudents);
      setPpdbApplicants(initialPpdbApplicants);
      setStaff(initialStaff);
      setSuratMasuk(initialSuratMasuk);
      setSuratKeluar(initialSuratKeluar);
      setGuestBook(initialGuestBook);
      setFinancialBos(initialFinancialBos);
      setSppPayments(initialSppPayments);
      setSarpras(initialSarpras);
      setLibraryBooks(initialLibraryBooks);
      setPklPartners(initialPklPartners);
      setPklPlacements(initialPklPlacements);
      setBkCases(initialBkCases);
      setAuditLogs(initialAuditLogs);
      window.location.reload();
    }
  };

  // Shortcut aksi dari Kesiswaan ke Surat Keluar Panggilan Ortu
  const handleOpenSuratPanggilan = () => {
    setCurrentModule('modul4');
  };

  // Handle Login & Logout
  const handleLoginSuccess = (role) => {
    setIsAuthenticated(true);
    localStorage.setItem('simpel_auth', 'true');
    if (role) setCurrentRole(role);
    setIsLoginModalOpen(false);
    setIsPublicPortalOpen(false);
    setCurrentModule('modul4');
    if (window.location.hash === '#portal' || window.location.hash === '#login') {
      history.replaceState(null, '', window.location.pathname);
    }
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
    localStorage.removeItem('simpel_auth');
    setIsPublicPortalOpen(true);
    history.replaceState(null, '', window.location.pathname);
  };

  // Render Public Website Mode (Wajib bagi publik yang belum login, atau ketika portal dibuka)
  if (!isAuthenticated || isPublicPortalOpen || currentModule === 'modul10') {
    return (
      <>
        <Modul10WebsitePortal
          school={school}
          staff={staff}
          ppdbApplicants={ppdbApplicants}
          setPpdbApplicants={setPpdbApplicants}
          onBackToErp={() => {
            if (isAuthenticated) {
              setIsPublicPortalOpen(false);
              setCurrentModule('modul4');
              if (window.location.hash === '#portal') {
                history.replaceState(null, '', window.location.pathname);
              }
            } else {
              setIsLoginModalOpen(true);
            }
          }}
          onOpenLogin={() => setIsLoginModalOpen(true)}
          isAuthenticated={isAuthenticated}
        />

        <LoginModal
          isOpen={isLoginModalOpen}
          onClose={() => {
            setIsLoginModalOpen(false);
            if (window.location.hash === '#login') {
              history.replaceState(null, '', window.location.pathname);
            }
          }}
          onLoginSuccess={handleLoginSuccess}
          usersList={usersList}
        />
      </>
    );
  }

  return (
    <div className="app-layout">
      {/* 12-Module Sidebar */}
      <Sidebar
        currentModule={currentModule}
        onSelectModule={setCurrentModule}
        currentRole={currentRole}
        school={school}
        onLogout={handleLogout}
      />

      {/* Main Content Area */}
      <div className="main-wrapper">
        <Topbar
          school={school}
          currentRole={currentRole}
          onRoleChange={setCurrentRole}
          onOpenPublicPortal={() => {
            setIsPublicPortalOpen(true);
            window.location.hash = '#portal';
          }}
          theme={theme}
          onToggleTheme={toggleTheme}
          searchQuery={searchQuery}
          onSearchChange={setSearchQuery}
          onLogout={handleLogout}
          usersList={usersList}
        />

        <main className="page-content">
          {/* MODUL 1: KESISWAAN & PPDB */}
          {currentModule === 'modul1' && (
            <Modul1Kesiswaan
              students={students}
              setStudents={setStudents}
              ppdbApplicants={ppdbApplicants}
              setPpdbApplicants={setPpdbApplicants}
              school={school}
              onOpenSuratPanggilan={handleOpenSuratPanggilan}
            />
          )}

          {/* MODUL 2: KEPEGAWAIAN (PTK) */}
          {currentModule === 'modul2' && (
            <Modul2Kepegawaian
              staff={staff}
              setStaff={setStaff}
              school={school}
            />
          )}

          {/* MODUL 3: AKADEMIK & KURIKULUM */}
          {currentModule === 'modul3' && (
            <Modul3Akademik
              school={school}
              students={students}
            />
          )}

          {/* MODUL 4: TATA USAHA & PERSURATAN */}
          {currentModule === 'modul4' && (
            <Modul4TataUsaha
              suratMasuk={suratMasuk}
              setSuratMasuk={setSuratMasuk}
              suratKeluar={suratKeluar}
              setSuratKeluar={setSuratKeluar}
              guestBook={guestBook}
              setGuestBook={setGuestBook}
              school={school}
              currentRole={currentRole}
            />
          )}

          {/* MODUL 5: KEUANGAN & BOS */}
          {currentModule === 'modul5' && (
            <Modul5Keuangan
              financialBos={financialBos}
              setFinancialBos={setFinancialBos}
              sppPayments={sppPayments}
              setSppPayments={setSppPayments}
              students={students}
              school={school}
            />
          )}

          {/* MODUL 6: SARPRAS & INVENTARIS */}
          {currentModule === 'modul6' && (
            <Modul6Sarpras
              sarpras={sarpras}
              setSarpras={setSarpras}
              school={school}
            />
          )}

          {/* MODUL 7: PERPUSTAKAAN */}
          {currentModule === 'modul7' && (
            <Modul7Perpustakaan
              libraryBooks={libraryBooks}
              setLibraryBooks={setLibraryBooks}
              school={school}
            />
          )}

          {/* MODUL 8: PKL & HUBUNGAN INDUSTRI */}
          {currentModule === 'modul8' && (
            <Modul8HubinPkl
              pklPartners={pklPartners}
              setPklPartners={setPklPartners}
              pklPlacements={pklPlacements}
              setPklPlacements={setPklPlacements}
              school={school}
            />
          )}

          {/* MODUL 9: BIMBINGAN KONSELING */}
          {currentModule === 'modul9' && (
            <Modul9Bk
              bkCases={bkCases}
              setBkCases={setBkCases}
              school={school}
            />
          )}

          {/* MODUL 11: LAPORAN & AKREDITASI */}
          {currentModule === 'modul11' && (
            <Modul11LaporanAkreditasi
              school={school}
              students={students}
              staff={staff}
              suratMasuk={suratMasuk}
              suratKeluar={suratKeluar}
              financialBos={financialBos}
              sarpras={sarpras}
            />
          )}

          {/* MODUL 12: PENGATURAN & HAK AKSES */}
          {currentModule === 'modul12' && (
            <Modul12Pengaturan
              school={school}
              setSchool={setSchool}
              currentRole={currentRole}
              onRoleChange={setCurrentRole}
              auditLogs={auditLogs}
              onResetData={handleResetData}
              usersList={usersList}
              onUpdateUsersList={handleUpdateUsersList}
              staff={staff}
            />
          )}
        </main>
      </div>
    </div>
  );
}
