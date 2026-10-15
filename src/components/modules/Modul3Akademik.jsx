import React, { useState } from 'react';
import {
  BookOpen,
  Calendar,
  FileCheck,
  Award,
  Printer,
  CheckCircle,
  HelpCircle,
  Layers,
  Search
} from 'lucide-react';

export function Modul3Akademik({ school, students }) {
  const [activeTab, setActiveTab] = useState('rapor'); // rapor, kurikulum, jadwal, cbt
  const [selectedStudentRapor, setSelectedStudentRapor] = useState(students[0] || null);
  const [showPrintRapor, setShowPrintRapor] = useState(false);

  // Jadwal Demo SMK
  const schedules = [
    { day: "Senin", time: "07:00 - 09:30", subject: "Pemrograman Web & Perangkat Bergerak", teacher: "Rian Hidayat, S.Kom", room: "Lab Komputer RPL 1", class: "XII PPLG 1" },
    { day: "Senin", time: "09:45 - 12:00", subject: "Basis Data Relasional & Cloud", teacher: "Eko Prasetyo, S.T.", room: "Lab Komputer RPL 2", class: "XII PPLG 1" },
    { day: "Selasa", time: "07:00 - 11:30", subject: "Pemeliharaan Mesin Kendaraan Ringan (Praktik)", teacher: "Ir. Gunawan Wibisono", room: "Bengkel Otomotif Blok B", class: "XI TKRO 2" },
    { day: "Rabu", time: "08:00 - 10:30", subject: "Administrasi Infrastruktur Jaringan & Server", teacher: "Fathur Rohman, S.Kom", room: "Lab Cisco TJKT", class: "XI TJKT 1" }
  ];

  return (
    <div className="module-content">
      {/* Header */}
      <div className="module-header">
        <div className="module-header-info">
          <h2>
            <BookOpen className="text-primary-600" size={26} />
            Akademik & Kurikulum Merdeka
          </h2>
          <p>
            Struktur kurikulum vokasi, jadwal pelajaran anti-bentrok, penilaian capaian pembelajaran, E-Rapor terintegrasi dan CBT Ujian {school.name}.
          </p>
        </div>
      </div>

      {/* KPI Stats Grid */}
      <div className="stats-grid">
        <div className="stat-card">
          <div className="stat-info">
            <div className="stat-label">Kurikulum Aktif</div>
            <div className="stat-value">Kurikulum Merdeka</div>
            <div className="stat-sub">Fase E (Kelas X) & Fase F (XI & XII)</div>
          </div>
          <div className="stat-icon-wrapper icon-indigo">
            <BookOpen size={24} />
          </div>
        </div>

        <div className="stat-card">
          <div className="stat-info">
            <div className="stat-label">Konsentrasi Keahlian</div>
            <div className="stat-value">4 Jurusan</div>
            <div className="stat-sub">PPLG, TKRO, TJKT, DKV</div>
          </div>
          <div className="stat-icon-wrapper icon-teal">
            <Layers size={24} />
          </div>
        </div>

        <div className="stat-card">
          <div className="stat-info">
            <div className="stat-label">E-Rapor Status</div>
            <div className="stat-value">100% Siap</div>
            <div className="stat-sub">Nilai Formatif & Sumatif Genap</div>
          </div>
          <div className="stat-icon-wrapper icon-emerald">
            <FileCheck size={24} />
          </div>
        </div>

        <div className="stat-card">
          <div className="stat-info">
            <div className="stat-label">Bank Soal Ujian (CBT)</div>
            <div className="stat-value">1.450 Butir</div>
            <div className="stat-sub">Standar UKK & Teori Kejuruan</div>
          </div>
          <div className="stat-icon-wrapper icon-amber">
            <HelpCircle size={24} />
          </div>
        </div>
      </div>

      {/* Tabs */}
      <div className="tab-container">
        <button
          className={`tab-btn ${activeTab === 'rapor' ? 'active' : ''}`}
          onClick={() => setActiveTab('rapor')}
        >
          <FileCheck size={16} /> E-Rapor Kurikulum Merdeka & Cetak
        </button>
        <button
          className={`tab-btn ${activeTab === 'jadwal' ? 'active' : ''}`}
          onClick={() => setActiveTab('jadwal')}
        >
          <Calendar size={16} /> Jadwal Pelajaran (Anti-Bentrok)
        </button>
        <button
          className={`tab-btn ${activeTab === 'kurikulum' ? 'active' : ''}`}
          onClick={() => setActiveTab('kurikulum')}
        >
          <Layers size={16} /> Struktur Kurikulum & Mapel
        </button>
        <button
          className={`tab-btn ${activeTab === 'cbt' ? 'active' : ''}`}
          onClick={() => setActiveTab('cbt')}
        >
          <HelpCircle size={16} /> CBT Simulator Ujian Online
        </button>
      </div>

      {/* TAB E-RAPOR */}
      {activeTab === 'rapor' && (
        <div className="card-panel">
          <div className="card-header">
            <div className="card-title">
              <FileCheck size={18} /> Generator E-Rapor Kurikulum Merdeka SMK
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
              <span style={{ fontSize: '0.84rem', color: 'var(--text-muted)' }}>Pilih Siswa:</span>
              <select
                className="form-select"
                style={{ width: '260px' }}
                value={selectedStudentRapor?.id}
                onChange={(e) => {
                  const s = students.find((st) => st.id === e.target.value);
                  if (s) setSelectedStudentRapor(s);
                }}
              >
                {students.map((st) => (
                  <option key={st.id} value={st.id}>
                    {st.name} ({st.class})
                  </option>
                ))}
              </select>
              <button className="btn btn-primary btn-sm" onClick={() => setShowPrintRapor(true)}>
                <Printer size={15} /> Preview & Cetak Rapor
              </button>
            </div>
          </div>

          <div className="card-body">
            {selectedStudentRapor && (
              <div style={{ background: 'var(--bg-surface-subtle)', padding: '20px', borderRadius: 'var(--radius-lg)' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '14px' }}>
                  <div>
                    <h3 style={{ fontSize: '1.1rem' }}>{selectedStudentRapor.name}</h3>
                    <div style={{ fontSize: '0.82rem', color: 'var(--text-muted)' }}>
                      NISN: {selectedStudentRapor.nisn} | Kelas: {selectedStudentRapor.class} | {selectedStudentRapor.major}
                    </div>
                  </div>
                  <span className="badge badge-success">Status: Naik Kelas / Lulus</span>
                </div>

                <table className="data-table" style={{ background: 'var(--bg-surface)', borderRadius: 'var(--radius-md)' }}>
                  <thead>
                    <tr>
                      <th>Mata Pelajaran (Kurikulum Merdeka)</th>
                      <th>Nilai Akhir</th>
                      <th>Capaian Kompetensi</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td><strong>Pemrograman Web dan Perangkat Bergerak</strong></td>
                      <td><span className="badge badge-success" style={{ fontSize: '0.88rem' }}>92 (A)</span></td>
                      <td style={{ fontSize: '0.8rem' }}>Sangat kompeten dalam merancang arsitektur aplikasi berbasis REST API & UI/UX modern.</td>
                    </tr>
                    <tr>
                      <td><strong>Basis Data & Cloud Infrastructure</strong></td>
                      <td><span className="badge badge-success" style={{ fontSize: '0.88rem' }}>89 (A-)</span></td>
                      <td style={{ fontSize: '0.8rem' }}>Kompeten dalam query relasional kompleks dan deployment database PostgreSQL.</td>
                    </tr>
                    <tr>
                      <td><strong>Bahasa Inggris untuk Komunikasi Bisnis Vokasi</strong></td>
                      <td><span className="badge badge-info" style={{ fontSize: '0.88rem' }}>88 (B+)</span></td>
                      <td style={{ fontSize: '0.8rem' }}>Mampu melakukan presentasi proyek teknis dan dokumentasi sistem berbahasa Inggris.</td>
                    </tr>
                    <tr>
                      <td><strong>Pendidikan Pancasila & Karakter Bangsa</strong></td>
                      <td><span className="badge badge-success" style={{ fontSize: '0.88rem' }}>94 (A)</span></td>
                      <td style={{ fontSize: '0.8rem' }}>Menunjukkan integritas, etika profesional kerja tinggi dan kolaborasi tim.</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            )}
          </div>
        </div>
      )}

      {/* TAB JADWAL */}
      {activeTab === 'jadwal' && (
        <div className="card-panel">
          <div className="card-header">
            <div className="card-title">
              <Calendar size={18} /> Matriks Jadwal KBM Praktik & Teori Terpadu
            </div>
          </div>
          <div className="table-responsive">
            <table className="data-table">
              <thead>
                <tr>
                  <th>Hari</th>
                  <th>Jam KBM</th>
                  <th>Mata Pelajaran</th>
                  <th>Kelas</th>
                  <th>Guru Pengampu</th>
                  <th>Ruang Lab / Bengkel</th>
                </tr>
              </thead>
              <tbody>
                {schedules.map((sc, i) => (
                  <tr key={i}>
                    <td><strong>{sc.day}</strong></td>
                    <td>{sc.time}</td>
                    <td><span className="badge badge-purple">{sc.subject}</span></td>
                    <td><strong>{sc.class}</strong></td>
                    <td>{sc.teacher}</td>
                    <td><span className="badge badge-neutral">{sc.room}</span></td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}

      {/* TAB KURIKULUM */}
      {activeTab === 'kurikulum' && (
        <div className="card-panel">
          <div className="card-header">
            <div className="card-title">
              <Layers size={18} /> Struktur Capaian Pembelajaran (CP) SMK Mandiri
            </div>
          </div>
          <div className="card-body">
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '16px' }}>
              <div style={{ padding: '16px', border: '1px solid var(--border-color)', borderRadius: 'var(--radius-md)' }}>
                <h4 style={{ fontSize: '0.92rem', marginBottom: '6px' }}>Kelompok Umum</h4>
                <p style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>
                  Pendidikan Agama, PPKn, Bahasa Indonesia, Matematika Terapan, Sejarah, Seni Budaya, PJOK.
                </p>
              </div>
              <div style={{ padding: '16px', border: '1px solid var(--border-color)', borderRadius: 'var(--radius-md)' }}>
                <h4 style={{ fontSize: '0.92rem', marginBottom: '6px' }}>Kelompok Kejuruan</h4>
                <p style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>
                  Dasar-Dasar Kejuruan (Fase E), Konsentrasi Keahlian (Fase F), Projek Kreatif & Kewirausahaan (PKK), Praktik Kerja Lapangan (PKL).
                </p>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* TAB CBT */}
      {activeTab === 'cbt' && (
        <div className="card-panel">
          <div className="card-header">
            <div className="card-title">
              <HelpCircle size={18} /> Simulator Ujian Berbasis Komputer (CBT Online)
            </div>
          </div>
          <div className="card-body">
            <div style={{ maxWidth: '600px', margin: '0 auto', padding: '20px', border: '1px solid var(--border-color)', borderRadius: 'var(--radius-lg)' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '14px' }}>
                <span className="badge badge-info">Soal No. 1 dari 40</span>
                <span className="badge badge-warning">Sisa Waktu: 01:24:18</span>
              </div>
              <p style={{ fontSize: '0.92rem', fontWeight: 600, marginBottom: '16px' }}>
                Dalam perancangan RESTful API untuk Sistem Informasi Sekolah SMK, HTTP Method manakah yang paling tepat digunakan untuk memperbarui sebagian data biodata siswa secara idempotent?
              </p>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', fontSize: '0.85rem' }}>
                <label style={{ display: 'flex', alignItems: 'center', gap: '10px', padding: '10px', border: '1px solid var(--border-color)', borderRadius: 'var(--radius-md)', cursor: 'pointer' }}>
                  <input type="radio" name="cbt-q" /> A. GET
                </label>
                <label style={{ display: 'flex', alignItems: 'center', gap: '10px', padding: '10px', border: '1px solid var(--border-color)', borderRadius: 'var(--radius-md)', cursor: 'pointer', background: 'var(--primary-50)' }}>
                  <input type="radio" name="cbt-q" defaultChecked /> <strong>B. PATCH / PUT</strong>
                </label>
                <label style={{ display: 'flex', alignItems: 'center', gap: '10px', padding: '10px', border: '1px solid var(--border-color)', borderRadius: 'var(--radius-md)', cursor: 'pointer' }}>
                  <input type="radio" name="cbt-q" /> C. DELETE
                </label>
                <label style={{ display: 'flex', alignItems: 'center', gap: '10px', padding: '10px', border: '1px solid var(--border-color)', borderRadius: 'var(--radius-md)', cursor: 'pointer' }}>
                  <input type="radio" name="cbt-q" /> D. OPTION
                </label>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* MODAL PRINT E-RAPOR */}
      {showPrintRapor && selectedStudentRapor && (
        <div className="modal-overlay" onClick={() => setShowPrintRapor(false)}>
          <div className="modal-dialog wide" onClick={(e) => e.stopPropagation()}>
            <div className="modal-header">
              <div className="modal-title">Cetak Rapor Hasil Belajar (Kurikulum Merdeka)</div>
              <button className="icon-btn" onClick={() => setShowPrintRapor(false)}>×</button>
            </div>
            <div className="modal-body" style={{ background: '#f8fafc', padding: '24px' }}>
              <div className="official-doc">
                <div className="official-kop">
                  <div className="kop-instansi">PEMERINTAH DAERAH PROVINSI JAWA BARAT - DINAS PENDIDIKAN</div>
                  <div className="kop-sekolah">{school.name}</div>
                  <div className="kop-alamat">{school.address}</div>
                </div>

                <div className="doc-title-block">
                  <div className="doc-title">LAPORAN HASIL BELAJAR PESERTA DIDIK (E-RAPOR)</div>
                  <div className="doc-number">Tahun Ajaran {school.activeYear} Semester {school.activeSemester}</div>
                </div>

                <table style={{ width: '100%', fontSize: '10pt', marginBottom: '16px' }} cellPadding="3">
                  <tbody>
                    <tr>
                      <td style={{ width: '20%' }}>Nama Siswa</td>
                      <td style={{ width: '35%' }}>: <strong>{selectedStudentRapor.name}</strong></td>
                      <td style={{ width: '20%' }}>Kelas / Fase</td>
                      <td>: {selectedStudentRapor.class} (Fase F)</td>
                    </tr>
                    <tr>
                      <td>NIS / NISN</td>
                      <td>: {selectedStudentRapor.nis} / {selectedStudentRapor.nisn}</td>
                      <td>Konsentrasi</td>
                      <td>: {selectedStudentRapor.major}</td>
                    </tr>
                  </tbody>
                </table>

                <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '9.5pt', marginBottom: '20px' }} border="1" cellPadding="6">
                  <thead style={{ background: '#f1f5f9' }}>
                    <tr>
                      <th>Mata Pelajaran</th>
                      <th style={{ width: '80px', textAlign: 'center' }}>Nilai</th>
                      <th style={{ width: '70px', textAlign: 'center' }}>Predikat</th>
                      <th>Deskripsi Capaian Kompetensi</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>Pemrograman Web dan Perangkat Bergerak</td>
                      <td style={{ textAlign: 'center', fontWeight: 'bold' }}>92</td>
                      <td style={{ textAlign: 'center' }}>A</td>
                      <td>Sangat menguasai integrasi API dan pembuatan web aplikasi terpadu.</td>
                    </tr>
                    <tr>
                      <td>Basis Data & Cloud Infrastructure</td>
                      <td style={{ textAlign: 'center', fontWeight: 'bold' }}>89</td>
                      <td style={{ textAlign: 'center' }}>A</td>
                      <td>Mampu mengelola database relasional berskala besar dan keamanan sistem.</td>
                    </tr>
                    <tr>
                      <td>Projek Kreatif & Kewirausahaan (PKK)</td>
                      <td style={{ textAlign: 'center', fontWeight: 'bold' }}>90</td>
                      <td style={{ textAlign: 'center' }}>A</td>
                      <td>Sangat aktif dalam pitching produk software vokasi dan manajemen pesanan.</td>
                    </tr>
                  </tbody>
                </table>

                <div className="doc-signatures">
                  <div className="sig-box">
                    <div>Mengetahui,</div>
                    <div>Orang Tua / Wali Siswa,</div>
                    <div className="sig-space"></div>
                    <div>( ........................................ )</div>
                  </div>

                  <div className="sig-box">
                    <div>Wali Kelas,</div>
                    <div className="sig-space"></div>
                    <div style={{ fontWeight: 'bold', textDecoration: 'underline' }}>Rian Hidayat, S.Kom</div>
                    <div>NIP. 19891024 201402 1 003</div>
                  </div>

                  <div className="sig-box">
                    <div>Kota Bandung, 15 Februari 2026</div>
                    <div>Kepala Sekolah,</div>
                    <div className="sig-space"></div>
                    <div style={{ fontWeight: 'bold', textDecoration: 'underline' }}>{school.headmaster.name}</div>
                    <div>NIP. {school.headmaster.nip}</div>
                  </div>
                </div>
              </div>
            </div>
            <div className="modal-footer">
              <button className="btn btn-secondary" onClick={() => setShowPrintRapor(false)}>Tutup</button>
              <button className="btn btn-primary" onClick={() => window.print()}>
                <Printer size={16} /> Cetak E-Rapor
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
