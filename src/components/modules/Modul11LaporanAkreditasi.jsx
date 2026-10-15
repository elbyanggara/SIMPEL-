import React, { useState } from 'react';
import {
  BarChart3,
  Award,
  FileSpreadsheet,
  Printer,
  Download,
  CheckCircle,
  FileText,
  TrendingUp,
  Layers,
  Users,
  Mail,
  Landmark,
  Building,
  Star
} from 'lucide-react';

export function Modul11LaporanAkreditasi({
  school,
  students,
  staff,
  suratMasuk,
  suratKeluar,
  financialBos,
  sarpras
}) {
  const [activeTab, setActiveTab] = useState('dashboard-ktu'); // dashboard-ktu, 8-standar, export-laporan
  const [downloadNotice, setDownloadNotice] = useState(null);

  const handleExport = (docName) => {
    setDownloadNotice(`Sedang mengunduh dokumen: ${docName}... Berhasil disimpan!`);
    setTimeout(() => setDownloadNotice(null), 3500);
  };

  const standards = [
    { no: 1, name: "Standar Kompetensi Lulusan (SKL)", score: 98, status: "A (Unggul)", desc: "Tracer study 84% bekerja, sertifikasi BNSP/LSP-P1 100% siswa lulusan." },
    { no: 2, name: "Standar Isi", score: 95, status: "A (Unggul)", desc: "Kurikulum Merdeka selaras dengan DUDI PT Telkom & Astra." },
    { no: 3, name: "Standar Proses", score: 96, status: "A (Unggul)", desc: "Teaching factory, KBM berbasis projek (PjBL) & praktik bengkel." },
    { no: 4, name: "Standar Pendidik & Tenaga Kependidikan", score: 94, status: "A (Unggul)", desc: "100% PTK berkualifikasi S1/S2 dan 85% bersertifikat pendidik." },
    { no: 5, name: "Standar Sarana dan Prasarana", score: 97, status: "A (Unggul)", desc: "Lab komputer, bengkel CNC/otomotif standar industri & aset QR code." },
    { no: 6, name: "Standar Pengelolaan", score: 98, status: "A (Unggul)", desc: "Digitalisasi penuh tata naskah dinas, agenda surat masuk & disposisi terpadu." },
    { no: 7, name: "Standar Pembiayaan", score: 96, status: "A (Unggul)", desc: "RKAS transparan, BKU dana BOS akuntabel tanpa temuan audit." },
    { no: 8, name: "Standar Penilaian Pendidikan", score: 95, status: "A (Unggul)", desc: "E-Rapor terintegrasi, CBT online mandiri, dan asesmen sumatif." }
  ];

  return (
    <div className="module-content">
      {/* Header */}
      <div className="module-header">
        <div className="module-header-info">
          <h2>
            <BarChart3 className="text-primary-600" size={26} />
            Laporan Eksekutif & Akreditasi
            <span className="badge badge-warning" style={{ fontSize: '0.75rem' }}>
              Dashboard Kepala Tata Usaha
            </span>
          </h2>
          <p>
            Pusat statistik 360 derajat sekolah, instrumen 8 Standar Nasional Pendidikan untuk akreditasi BAN-SM, dan ekspor laporan terpadu {school.name}.
          </p>
        </div>

        <div className="module-actions">
          <button className="btn btn-primary" onClick={() => window.print()}>
            <Printer size={16} /> Cetak Laporan Eksekutif KTU
          </button>
        </div>
      </div>

      {downloadNotice && (
        <div className="toast-notice">
          <CheckCircle size={18} color="#10b981" />
          <span>{downloadNotice}</span>
        </div>
      )}

      {/* KPI Stats Grid */}
      <div className="stats-grid">
        <div className="stat-card">
          <div className="stat-info">
            <div className="stat-label">Predikat Akreditasi</div>
            <div className="stat-value" style={{ color: 'var(--primary-700)' }}>A (Unggul)</div>
            <div className="stat-sub">Skor 96.2 / 100 BAN-SM</div>
          </div>
          <div className="stat-icon-wrapper icon-indigo">
            <Award size={24} />
          </div>
        </div>

        <div className="stat-card">
          <div className="stat-info">
            <div className="stat-label">Total Naskah Dinas TU</div>
            <div className="stat-value">{suratMasuk.length + suratKeluar.length} Surat</div>
            <div className="stat-sub">100% Teragenda & Terekam</div>
          </div>
          <div className="stat-icon-wrapper icon-blue">
            <Mail size={24} />
          </div>
        </div>

        <div className="stat-card">
          <div className="stat-info">
            <div className="stat-label">Rasio Guru : Siswa</div>
            <div className="stat-value">1 : 16</div>
            <div className="stat-sub">Sangat Ideal Standar Nasional</div>
          </div>
          <div className="stat-icon-wrapper icon-teal">
            <Users size={24} />
          </div>
        </div>

        <div className="stat-card">
          <div className="stat-info">
            <div className="stat-label">Kesiapan Dokumen Akreditasi</div>
            <div className="stat-value" style={{ color: 'var(--accent-emerald)' }}>100%</div>
            <div className="stat-sub">Siap Visitasi Asesor BAN-SM</div>
          </div>
          <div className="stat-icon-wrapper icon-emerald">
            <CheckCircle size={24} />
          </div>
        </div>
      </div>

      {/* Tabs */}
      <div className="tab-container">
        <button
          className={`tab-btn ${activeTab === 'dashboard-ktu' ? 'active' : ''}`}
          onClick={() => setActiveTab('dashboard-ktu')}
        >
          <BarChart3 size={16} /> Dashboard Eksekutif KTU & Statistik
        </button>
        <button
          className={`tab-btn ${activeTab === '8-standar' ? 'active' : ''}`}
          onClick={() => setActiveTab('8-standar')}
        >
          <Award size={16} /> Matriks 8 Standar Akreditasi SMK
        </button>
        <button
          className={`tab-btn ${activeTab === 'export-laporan' ? 'active' : ''}`}
          onClick={() => setActiveTab('export-laporan')}
        >
          <FileSpreadsheet size={16} /> Ekspor Paket Dokumen & Dapodik
        </button>
      </div>

      {/* TAB DASHBOARD KTU */}
      {activeTab === 'dashboard-ktu' && (
        <div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '20px', marginBottom: '24px' }}>
            {/* Rekap Administrasi TU */}
            <div className="card-panel" style={{ margin: 0 }}>
              <div className="card-header">
                <div className="card-title">
                  <Mail size={16} /> Rekapitulasi Tata Naskah & Disposisi
                </div>
              </div>
              <div className="card-body">
                <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', fontSize: '0.85rem' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', borderBottom: '1px solid var(--border-color)', paddingBottom: '6px' }}>
                    <span>Surat Masuk Teragendakan</span>
                    <strong>{suratMasuk.length} Berkas</strong>
                  </div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', borderBottom: '1px solid var(--border-color)', paddingBottom: '6px' }}>
                    <span>Disposisi Kepala Sekolah Selesai</span>
                    <strong style={{ color: '#16a34a' }}>{suratMasuk.filter(s => s.status === 'Sudah Didisposisi').length} Disposisi</strong>
                  </div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', borderBottom: '1px solid var(--border-color)', paddingBottom: '6px' }}>
                    <span>Surat Keluar Resmi Diterbitkan</span>
                    <strong>{suratKeluar.length} Surat</strong>
                  </div>
                  <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                    <span>Tingkat Kecepatan Respon Disposisi</span>
                    <span className="badge badge-success">&lt; 2 Jam (Sangat Baik)</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Rekap Keuangan & Aset */}
            <div className="card-panel" style={{ margin: 0 }}>
              <div className="card-header">
                <div className="card-title">
                  <Landmark size={16} /> Realisasi Keuangan & Akuntabilitas Aset
                </div>
              </div>
              <div className="card-body">
                <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', fontSize: '0.85rem' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', borderBottom: '1px solid var(--border-color)', paddingBottom: '6px' }}>
                    <span>Saldo Riil Kas BOS</span>
                    <strong style={{ color: 'var(--primary-700)' }}>
                      Rp {(financialBos[0]?.balance || 0).toLocaleString('id-ID')}
                    </strong>
                  </div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', borderBottom: '1px solid var(--border-color)', paddingBottom: '6px' }}>
                    <span>Total Aset Inventaris Sarpras</span>
                    <strong>{sarpras.length} Unit Terdata</strong>
                  </div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', borderBottom: '1px solid var(--border-color)', paddingBottom: '6px' }}>
                    <span>Aset Berlabel QR Code Resmi</span>
                    <strong style={{ color: '#16a34a' }}>100% Berlabel</strong>
                  </div>
                  <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                    <span>Audit BPK & Inspektorat Daerah</span>
                    <span className="badge badge-success">Wajar Tanpa Pengecualian (WTP)</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* TAB 8 STANDAR AKREDITASI */}
      {activeTab === '8-standar' && (
        <div className="card-panel">
          <div className="card-header">
            <div className="card-title">
              <Award size={18} /> Pemenuhan 8 Standar Nasional Pendidikan (SNP) Vokasi
            </div>
            <span className="badge badge-success">Hasil Audit Internal: 96.2 / 100</span>
          </div>
          <div className="table-responsive">
            <table className="data-table">
              <thead>
                <tr>
                  <th>No</th>
                  <th>Standar Nasional Pendidikan</th>
                  <th>Skor Capaian</th>
                  <th>Predikat</th>
                  <th>Keterangan Kesiapan Bukti Fisik</th>
                  <th style={{ textAlign: 'center' }}>Status Dokumen</th>
                </tr>
              </thead>
              <tbody>
                {standards.map((st) => (
                  <tr key={st.no}>
                    <td><strong>{st.no}</strong></td>
                    <td>
                      <div style={{ fontWeight: 600 }}>{st.name}</div>
                    </td>
                    <td><strong style={{ color: 'var(--primary-700)', fontSize: '0.95rem' }}>{st.score}</strong> / 100</td>
                    <td><span className="badge badge-success">{st.status}</span></td>
                    <td style={{ maxWidth: '320px', fontSize: '0.8rem', color: 'var(--text-muted)' }}>{st.desc}</td>
                    <td style={{ textAlign: 'center' }}>
                      <span className="badge badge-success">Lengkap 100%</span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}

      {/* TAB EXPORT LAPORAN */}
      {activeTab === 'export-laporan' && (
        <div className="card-panel">
          <div className="card-header">
            <div className="card-title">
              <FileSpreadsheet size={18} /> Ekspor Paket Dokumen Laporan Siap Unduh
            </div>
          </div>
          <div className="card-body">
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '16px' }}>
              {[
                { title: "Buku Agenda Surat Masuk & Keluar Lengkap (Excel)", format: "XLSX", size: "2.4 MB" },
                { title: "Laporan Realisasi Buku Kas Umum (BKU) BOS (PDF)", format: "PDF", size: "4.8 MB" },
                { title: "Buku Induk & Profil Siswa Dapodik Semester Genap", format: "CSV", size: "1.9 MB" },
                { title: "Buku Inventarisasi Sarana Prasarana & Kode QR", format: "PDF", size: "5.2 MB" },
                { title: "Paket Instrumen Penilaian Akreditasi 8 Standar", format: "ZIP", size: "18.4 MB" },
                { title: "Laporan Tracer Study & Kemitraan DUDI Vokasi", format: "PDF", size: "3.1 MB" }
              ].map((doc, idx) => (
                <div key={idx} style={{ padding: '16px', border: '1px solid var(--border-color)', borderRadius: 'var(--radius-md)' }}>
                  <div style={{ fontWeight: 600, fontSize: '0.88rem' }}>{doc.title}</div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: '12px' }}>
                    <span className="badge badge-purple">{doc.format} • {doc.size}</span>
                    <button className="btn btn-secondary btn-sm" onClick={() => handleExport(doc.title)}>
                      <Download size={14} /> Unduh
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
