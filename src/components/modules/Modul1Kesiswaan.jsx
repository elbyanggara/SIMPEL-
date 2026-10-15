import React, { useState } from 'react';
import {
  GraduationCap,
  Users,
  UserPlus,
  CheckCircle,
  AlertTriangle,
  Award,
  Search,
  Printer,
  ShieldAlert,
  IdCard,
  FileCheck,
  TrendingUp,
  Clock
} from 'lucide-react';

export function Modul1Kesiswaan({
  students,
  setStudents,
  ppdbApplicants,
  setPpdbApplicants,
  school,
  onOpenSuratPanggilan
}) {
  const [activeTab, setActiveTab] = useState('ppdb'); // ppdb, data-siswa, absensi-tatib, ekskul
  const [searchStudent, setSearchStudent] = useState('');
  const [selectedStudentCard, setSelectedStudentCard] = useState(null);
  const [showAddStudent, setShowAddStudent] = useState(false);

  // New Student Form
  const [newStudent, setNewStudent] = useState({
    name: '',
    nisn: '',
    nis: '',
    gender: 'L',
    class: 'X PPLG 1',
    major: 'Pengembangan Perangkat Lunak & Gim (PPLG)',
    phone: '',
    parentName: '',
    address: ''
  });

  // Handle terima seleksi PPDB & jadikan siswa aktif
  const handleAcceptPpdb = (applicant) => {
    // Update PPDB status
    setPpdbApplicants(
      ppdbApplicants.map((p) => (p.id === applicant.id ? { ...p, status: 'Diterima & Jadi Siswa' } : p))
    );

    // Tambah ke data siswa aktif
    const newId = `SIS-${String(students.length + 1).padStart(3, '0')}`;
    const newStudentObj = {
      id: newId,
      nisn: applicant.nisn,
      nis: `2627${Math.floor(1000 + Math.random() * 9000)}`,
      name: applicant.name,
      gender: 'L',
      class: 'X ' + (applicant.chosenMajor.includes('PPLG') ? 'PPLG 1' : applicant.chosenMajor.includes('DKV') ? 'DKV 1' : 'TKRO 1'),
      major: applicant.chosenMajor,
      phone: applicant.phone,
      parentName: `Orang Tua ${applicant.name}`,
      address: 'Alamat Siswa Baru',
      attendanceRate: 100,
      violationPoints: 0,
      achievementPoints: 20,
      sppStatus: 'Lunas',
      status: 'Aktif'
    };
    setStudents([newStudentObj, ...students]);
  };

  const handleAddManualStudent = (e) => {
    e.preventDefault();
    const item = {
      id: `SIS-${String(students.length + 1).padStart(3, '0')}`,
      ...newStudent,
      attendanceRate: 100,
      violationPoints: 0,
      achievementPoints: 0,
      sppStatus: 'Lunas',
      status: 'Aktif'
    };
    setStudents([item, ...students]);
    setShowAddStudent(false);
  };

  const filteredStudents = students.filter(
    (s) =>
      s.name.toLowerCase().includes(searchStudent.toLowerCase()) ||
      s.nis.includes(searchStudent) ||
      s.class.toLowerCase().includes(searchStudent.toLowerCase())
  );

  return (
    <div className="module-content">
      {/* Module Header */}
      <div className="module-header">
        <div className="module-header-info">
          <h2>
            <GraduationCap className="text-primary-600" size={26} />
            Kesiswaan & PPDB Online
          </h2>
          <p>
            Manajemen seleksi penerimaan murid baru (PPDB), database biodata siswa induk, presensi, catatan poin pelanggaran & prestasi {school.name}.
          </p>
        </div>

        <div className="module-actions">
          {activeTab === 'data-siswa' && (
            <button className="btn btn-primary" onClick={() => setShowAddStudent(true)}>
              <UserPlus size={16} /> Tambah Data Siswa Manual
            </button>
          )}
        </div>
      </div>

      {/* KPI Stats Grid */}
      <div className="stats-grid">
        <div className="stat-card">
          <div className="stat-info">
            <div className="stat-label">Total Siswa Aktif</div>
            <div className="stat-value">{students.length} Siswa</div>
            <div className="stat-sub">3 Tingkat (X, XI, XII)</div>
          </div>
          <div className="stat-icon-wrapper icon-blue">
            <Users size={24} />
          </div>
        </div>

        <div className="stat-card">
          <div className="stat-info">
            <div className="stat-label">Pendaftar PPDB 2026</div>
            <div className="stat-value">{ppdbApplicants.length} Pendaftar</div>
            <div className="stat-sub">Jalur Zonasi & Prestasi</div>
          </div>
          <div className="stat-icon-wrapper icon-emerald">
            <UserPlus size={24} />
          </div>
        </div>

        <div className="stat-card">
          <div className="stat-info">
            <div className="stat-label">Tingkat Kehadiran Rata-rata</div>
            <div className="stat-value">95.2%</div>
            <div className="stat-sub">Berdasarkan Absensi Presensi</div>
          </div>
          <div className="stat-icon-wrapper icon-teal">
            <Clock size={24} />
          </div>
        </div>

        <div className="stat-card">
          <div className="stat-info">
            <div className="stat-label">Prestasi Siswa LKS / O2SN</div>
            <div className="stat-value">24 Trophy</div>
            <div className="stat-sub">Tingkat Kota & Provinsi</div>
          </div>
          <div className="stat-icon-wrapper icon-amber">
            <Award size={24} />
          </div>
        </div>
      </div>

      {/* Tabs */}
      <div className="tab-container">
        <button
          className={`tab-btn ${activeTab === 'ppdb' ? 'active' : ''}`}
          onClick={() => setActiveTab('ppdb')}
        >
          <UserPlus size={16} /> PPDB Online & Seleksi ({ppdbApplicants.length})
        </button>
        <button
          className={`tab-btn ${activeTab === 'data-siswa' ? 'active' : ''}`}
          onClick={() => setActiveTab('data-siswa')}
        >
          <Users size={16} /> Buku Induk Siswa ({students.length})
        </button>
        <button
          className={`tab-btn ${activeTab === 'absensi-tatib' ? 'active' : ''}`}
          onClick={() => setActiveTab('absensi-tatib')}
        >
          <ShieldAlert size={16} /> Presensi & Poin Tata Tertib
        </button>
        <button
          className={`tab-btn ${activeTab === 'ekskul' ? 'active' : ''}`}
          onClick={() => setActiveTab('ekskul')}
        >
          <Award size={16} /> Ekstrakurikuler & Organisasi
        </button>
      </div>

      {/* TAB PPDB ONLINE */}
      {activeTab === 'ppdb' && (
        <div className="card-panel">
          <div className="card-header">
            <div className="card-title">
              <UserPlus size={18} /> Pendaftaran & Seleksi Otomatis Calon Siswa Baru (PPDB)
            </div>
            <span className="badge badge-success">Sistem Seleksi Terbuka</span>
          </div>
          <div className="table-responsive">
            <table className="data-table">
              <thead>
                <tr>
                  <th>No. Pendaftaran</th>
                  <th>Nama Lengkap</th>
                  <th>Asal SMP</th>
                  <th>Jurusan Pilihan</th>
                  <th>Jalur Seleksi</th>
                  <th>Nilai Rata-rata</th>
                  <th>Status Hasil</th>
                  <th style={{ textAlign: 'center' }}>Aksi Verifikasi</th>
                </tr>
              </thead>
              <tbody>
                {ppdbApplicants.map((app) => (
                  <tr key={app.id}>
                    <td><strong>{app.id}</strong></td>
                    <td>
                      <div style={{ fontWeight: 600 }}>{app.name}</div>
                      <div style={{ fontSize: '0.74rem', color: 'var(--text-muted)' }}>NISN: {app.nisn}</div>
                    </td>
                    <td>{app.originSchool}</td>
                    <td><span className="badge badge-purple">{app.chosenMajor}</span></td>
                    <td><span className="badge badge-neutral">{app.track}</span></td>
                    <td><strong style={{ color: 'var(--primary-700)' }}>{app.scoreAverage}</strong></td>
                    <td>
                      <span className={`badge ${app.status.includes('Lulus') || app.status.includes('Diterima') ? 'badge-success' : 'badge-warning'}`}>
                        {app.status}
                      </span>
                    </td>
                    <td style={{ textAlign: 'center' }}>
                      {app.status !== 'Diterima & Jadi Siswa' ? (
                        <button
                          className="btn btn-primary btn-sm"
                          onClick={() => handleAcceptPpdb(app)}
                        >
                          <CheckCircle size={14} /> Terima & Generate Kelas
                        </button>
                      ) : (
                        <span style={{ fontSize: '0.8rem', color: '#16a34a', fontWeight: 600 }}>
                          ✓ Siswa Terdaftar
                        </span>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}

      {/* TAB DATA INDUK SISWA */}
      {activeTab === 'data-siswa' && (
        <div className="card-panel">
          <div className="card-header">
            <div className="card-title">
              <Users size={18} /> Buku Induk Siswa Aktif SMK
            </div>
            <div className="search-bar" style={{ width: '250px' }}>
              <Search size={14} />
              <input
                type="text"
                placeholder="Cari nama, NIS, kelas..."
                value={searchStudent}
                onChange={(e) => setSearchStudent(e.target.value)}
              />
            </div>
          </div>
          <div className="table-responsive">
            <table className="data-table">
              <thead>
                <tr>
                  <th>NIS / NISN</th>
                  <th>Nama Lengkap</th>
                  <th>Kelas & Jurusan</th>
                  <th>Kehadiran</th>
                  <th>Poin Tatib</th>
                  <th>Poin Prestasi</th>
                  <th>Status Komite</th>
                  <th style={{ textAlign: 'center' }}>Kartu Pelajar</th>
                </tr>
              </thead>
              <tbody>
                {filteredStudents.map((s) => (
                  <tr key={s.id}>
                    <td>
                      <div style={{ fontWeight: 600 }}>{s.nis}</div>
                      <div style={{ fontSize: '0.74rem', color: 'var(--text-muted)' }}>NISN: {s.nisn}</div>
                    </td>
                    <td>
                      <strong>{s.name}</strong>
                      <div style={{ fontSize: '0.72rem', color: 'var(--text-muted)' }}>Ortu: {s.parentName}</div>
                    </td>
                    <td>
                      <span className="badge badge-neutral" style={{ fontWeight: 700 }}>{s.class}</span>
                      <div style={{ fontSize: '0.72rem', color: 'var(--text-subtle)', marginTop: '2px' }}>{s.major}</div>
                    </td>
                    <td>
                      <span className={`badge ${s.attendanceRate >= 90 ? 'badge-success' : 'badge-warning'}`}>
                        {s.attendanceRate}%
                      </span>
                    </td>
                    <td>
                      {s.violationPoints > 0 ? (
                        <span className="badge badge-danger">-{s.violationPoints} Poin</span>
                      ) : (
                        <span className="badge badge-success">0 (Bersih)</span>
                      )}
                    </td>
                    <td>
                      <span className="badge badge-info">+{s.achievementPoints} Poin</span>
                    </td>
                    <td>
                      <span className={`badge ${s.sppStatus === 'Lunas' ? 'badge-success' : 'badge-warning'}`}>
                        {s.sppStatus}
                      </span>
                    </td>
                    <td style={{ textAlign: 'center' }}>
                      <button
                        className="btn btn-secondary btn-sm"
                        onClick={() => setSelectedStudentCard(s)}
                      >
                        <IdCard size={14} /> Cetak Kartu
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}

      {/* TAB PRESENSI & TATA TERTIB */}
      {activeTab === 'absensi-tatib' && (
        <div className="card-panel">
          <div className="card-header">
            <div className="card-title">
              <ShieldAlert size={18} /> Sistem Poin Kedisiplinan & Tata Tertib Siswa
            </div>
          </div>
          <div className="card-body">
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '20px' }}>
              <div style={{ border: '1px solid var(--border-color)', borderRadius: 'var(--radius-lg)', padding: '18px' }}>
                <h4 style={{ fontSize: '0.95rem', marginBottom: '8px', color: 'var(--accent-rose)' }}>
                  Pemberitahuan Poin Pelanggaran Siswa
                </h4>
                <p style={{ fontSize: '0.82rem', color: 'var(--text-muted)', marginBottom: '14px' }}>
                  Siswa yang mencapai akumulasi poin 25 wajib mendapatkan surat pemanggilan orang tua ke sekolah oleh BK dan KTU.
                </p>
                <div style={{ padding: '12px', background: 'var(--bg-surface-subtle)', borderRadius: 'var(--radius-md)', marginBottom: '14px' }}>
                  <div style={{ fontWeight: 600 }}>Fajar Dwi Saputra (XI TKRO 2)</div>
                  <div style={{ fontSize: '0.78rem', color: 'var(--accent-rose)', fontWeight: 600, marginTop: '2px' }}>
                    Akumulasi: 25 Poin (Terlambat & Alpa)
                  </div>
                </div>
                <button
                  className="btn btn-danger btn-sm"
                  onClick={() => onOpenSuratPanggilan && onOpenSuratPanggilan()}
                >
                  <Printer size={14} /> Terbitkan Surat Panggilan Orang Tua
                </button>
              </div>

              <div style={{ border: '1px solid var(--border-color)', borderRadius: 'var(--radius-lg)', padding: '18px' }}>
                <h4 style={{ fontSize: '0.95rem', marginBottom: '8px', color: 'var(--accent-emerald)' }}>
                  Apresiasi & Rekap Prestasi Siswa
                </h4>
                <p style={{ fontSize: '0.82rem', color: 'var(--text-muted)', marginBottom: '14px' }}>
                  Poin prestasi menambah kredit portofolio untuk seleksi beasiswa dan penempatan PKL unggulan.
                </p>
                <div style={{ padding: '12px', background: 'var(--bg-surface-subtle)', borderRadius: 'var(--radius-md)' }}>
                  <div style={{ fontWeight: 600 }}>Anisa Nur Safitri (XII PPLG 1)</div>
                  <div style={{ fontSize: '0.78rem', color: 'var(--accent-emerald)', fontWeight: 600, marginTop: '2px' }}>
                    +60 Poin (Juara 1 LKS Web Technologies Tingkat Kota)
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* TAB EKSKUL */}
      {activeTab === 'ekskul' && (
        <div className="card-panel">
          <div className="card-header">
            <div className="card-title">
              <Award size={18} /> Organisasi Siswa & Ekstrakurikuler Aktif
            </div>
          </div>
          <div className="card-body">
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '16px' }}>
              {['OSIS & MPK Vokasi', 'Pramuka Ambalan', 'Paskibra Satya Bhakti', 'PMR & UKS Remaja', 'Robotics & IoT Club', 'English Club'].map((ek, idx) => (
                <div key={idx} style={{ padding: '16px', border: '1px solid var(--border-color)', borderRadius: 'var(--radius-md)' }}>
                  <div style={{ fontWeight: 700, fontSize: '0.92rem' }}>{ek}</div>
                  <div style={{ fontSize: '0.78rem', color: 'var(--text-muted)', marginTop: '4px' }}>
                    Pembina: Tim Kesiswaan | Anggota: 45+ Siswa
                  </div>
                  <div style={{ marginTop: '10px' }}>
                    <span className="badge badge-success">Aktif Beroperasi</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* MODAL KARTU PELAJAR PRINT */}
      {selectedStudentCard && (
        <div className="modal-overlay" onClick={() => setSelectedStudentCard(null)}>
          <div className="modal-dialog" onClick={(e) => e.stopPropagation()}>
            <div className="modal-header">
              <div className="modal-title">Kartu Tanda Pelajar Siswa (KTPel)</div>
              <button className="icon-btn" onClick={() => setSelectedStudentCard(null)}>×</button>
            </div>
            <div className="modal-body" style={{ background: '#f1f5f9', display: 'flex', justifyContent: 'center' }}>
              <div
                style={{
                  width: '380px',
                  background: 'linear-gradient(135deg, #1e1b4b, #312e81)',
                  borderRadius: '16px',
                  padding: '20px',
                  color: '#fff',
                  boxShadow: '0 10px 25px rgba(0,0,0,0.2)'
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px', borderBottom: '1px solid rgba(255,255,255,0.2)', paddingBottom: '10px' }}>
                  <div style={{ width: '34px', height: '34px', background: '#4f46e5', borderRadius: '8px', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 'bold' }}>
                    SMK
                  </div>
                  <div>
                    <div style={{ fontSize: '0.75rem', fontWeight: 700, letterSpacing: '0.5px' }}>{school.name}</div>
                    <div style={{ fontSize: '0.65rem', color: '#cbd5e1' }}>KARTU TANDA PELAJAR RESMI</div>
                  </div>
                </div>

                <div style={{ display: 'flex', gap: '16px', marginTop: '16px', alignItems: 'center' }}>
                  <div style={{ width: '80px', height: '95px', background: '#fff', borderRadius: '8px', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#475569', fontWeight: 'bold', fontSize: '0.75rem' }}>
                    FOTO 3X4
                  </div>
                  <div style={{ fontSize: '0.78rem' }}>
                    <div style={{ fontSize: '0.95rem', fontWeight: 800 }}>{selectedStudentCard.name}</div>
                    <div style={{ color: '#93c5fd', marginTop: '2px' }}>NIS: {selectedStudentCard.nis}</div>
                    <div style={{ color: '#cbd5e1' }}>NISN: {selectedStudentCard.nisn}</div>
                    <div style={{ marginTop: '4px', fontWeight: 600 }}>{selectedStudentCard.class}</div>
                  </div>
                </div>

                <div style={{ marginTop: '16px', paddingTop: '10px', borderTop: '1px solid rgba(255,255,255,0.15)', display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', fontSize: '0.65rem', color: '#94a3b8' }}>
                  <div>Berlaku s.d. Lulus Sekolah</div>
                  <div style={{ textAlign: 'right' }}>
                    <div>Kepala Sekolah</div>
                    <div style={{ fontWeight: 'bold', color: '#fff', marginTop: '18px' }}>{school.headmaster.name}</div>
                  </div>
                </div>
              </div>
            </div>
            <div className="modal-footer">
              <button className="btn btn-secondary" onClick={() => setSelectedStudentCard(null)}>Tutup</button>
              <button className="btn btn-primary" onClick={() => window.print()}>
                <Printer size={16} /> Cetak Kartu Pelajar
              </button>
            </div>
          </div>
        </div>
      )}

      {/* MODAL TAMBAH SISWA MANUAL */}
      {showAddStudent && (
        <div className="modal-overlay" onClick={() => setShowAddStudent(false)}>
          <div className="modal-dialog" onClick={(e) => e.stopPropagation()}>
            <div className="modal-header">
              <div className="modal-title">Tambah Siswa Baru ke Buku Induk</div>
              <button className="icon-btn" onClick={() => setShowAddStudent(false)}>×</button>
            </div>
            <form onSubmit={handleAddManualStudent}>
              <div className="modal-body">
                <div className="form-group">
                  <label className="form-label">Nama Lengkap Siswa</label>
                  <input
                    type="text"
                    required
                    className="form-input"
                    value={newStudent.name}
                    onChange={(e) => setNewStudent({ ...newStudent, name: e.target.value })}
                  />
                </div>
                <div className="form-row">
                  <div className="form-group">
                    <label className="form-label">NISN (10 Digit)</label>
                    <input
                      type="text"
                      required
                      className="form-input"
                      value={newStudent.nisn}
                      onChange={(e) => setNewStudent({ ...newStudent, nisn: e.target.value })}
                    />
                  </div>
                  <div className="form-group">
                    <label className="form-label">NIS Sekolah</label>
                    <input
                      type="text"
                      required
                      className="form-input"
                      value={newStudent.nis}
                      onChange={(e) => setNewStudent({ ...newStudent, nis: e.target.value })}
                    />
                  </div>
                </div>
                <div className="form-row">
                  <div className="form-group">
                    <label className="form-label">Kelas</label>
                    <select
                      className="form-select"
                      value={newStudent.class}
                      onChange={(e) => setNewStudent({ ...newStudent, class: e.target.value })}
                    >
                      <option value="X PPLG 1">X PPLG 1</option>
                      <option value="X TKRO 1">X TKRO 1</option>
                      <option value="X TJKT 1">X TJKT 1</option>
                      <option value="X DKV 1">X DKV 1</option>
                    </select>
                  </div>
                  <div className="form-group">
                    <label className="form-label">Nama Orang Tua / Wali</label>
                    <input
                      type="text"
                      className="form-input"
                      value={newStudent.parentName}
                      onChange={(e) => setNewStudent({ ...newStudent, parentName: e.target.value })}
                    />
                  </div>
                </div>
              </div>
              <div className="modal-footer">
                <button type="button" className="btn btn-secondary" onClick={() => setShowAddStudent(false)}>Batal</button>
                <button type="submit" className="btn btn-primary">Simpan Siswa</button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
