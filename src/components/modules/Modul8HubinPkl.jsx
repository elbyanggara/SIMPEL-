import React, { useState } from 'react';
import {
  Building2,
  Briefcase,
  Award,
  Printer,
  Plus,
  Search,
  CheckCircle,
  FileCheck,
  TrendingUp,
  MapPin,
  Clock,
  BookOpen
} from 'lucide-react';

export function Modul8HubinPkl({ pklPartners, setPklPartners, pklPlacements, setPklPlacements, school }) {
  const [activeTab, setActiveTab] = useState('penempatan'); // penempatan, mitra, jurnal, sertifikat, tracer
  const [selectedCertificate, setSelectedCertificate] = useState(null);

  const journals = [
    { id: 1, student: "Muhammad Rizky Pratama", date: "2026-02-14", task: "Membuat endpoint REST API authentication JWT dan integrasi frontend React", status: "Diverifikasi Industri" },
    { id: 2, student: "Anisa Nur Safitri", date: "2026-02-14", task: "Slicing UI/UX dashboard analytics menggunakan Tailwind CSS & charting library", status: "Diverifikasi Industri" },
    { id: 3, student: "Fajar Dwi Saputra", date: "2026-02-14", task: "Melakukan tune up mesin dan pembersihan injektor bahan bakar mesin bensin", status: "Diverifikasi Industri" }
  ];

  return (
    <div className="module-content">
      {/* Header */}
      <div className="module-header">
        <div className="module-header-info">
          <h2>
            <Building2 className="text-primary-600" size={26} />
            PKL & Hubungan Industri (Hubin)
            <span className="badge badge-warning" style={{ fontSize: '0.75rem' }}>
              Khas Kejuruan SMK
            </span>
          </h2>
          <p>
            Kemitraan DUDI (Dunia Usaha & Dunia Industri), penempatan siswa magang, monitoring jurnal harian PKL, sertifikasi industri & tracer study {school.name}.
          </p>
        </div>
      </div>

      {/* KPI Stats Grid */}
      <div className="stats-grid">
        <div className="stat-card">
          <div className="stat-info">
            <div className="stat-label">Mitra Industri (DUDI)</div>
            <div className="stat-value">{pklPartners.length} Perusahaan</div>
            <div className="stat-sub">MoU Aktif Bersertifikasi</div>
          </div>
          <div className="stat-icon-wrapper icon-blue">
            <Building2 size={24} />
          </div>
        </div>

        <div className="stat-card">
          <div className="stat-info">
            <div className="stat-label">Siswa Sedang PKL</div>
            <div className="stat-value">{pklPlacements.length} Siswa</div>
            <div className="stat-sub">Tersebar di Industri Unggulan</div>
          </div>
          <div className="stat-icon-wrapper icon-teal">
            <Briefcase size={24} />
          </div>
        </div>

        <div className="stat-card">
          <div className="stat-info">
            <div className="stat-label">Jurnal Harian Terverifikasi</div>
            <div className="stat-value">100%</div>
            <div className="stat-sub">Dipantau Mentor Industri</div>
          </div>
          <div className="stat-icon-wrapper icon-emerald">
            <CheckCircle size={24} />
          </div>
        </div>

        <div className="stat-card">
          <div className="stat-info">
            <div className="stat-label">Tracer Study (BMW)</div>
            <div className="stat-value">84.2% Bekerja</div>
            <div className="stat-sub">12% Kuliah, 3.8% Wirausaha</div>
          </div>
          <div className="stat-icon-wrapper icon-amber">
            <TrendingUp size={24} />
          </div>
        </div>
      </div>

      {/* Tabs */}
      <div className="tab-container">
        <button
          className={`tab-btn ${activeTab === 'penempatan' ? 'active' : ''}`}
          onClick={() => setActiveTab('penempatan')}
        >
          <Briefcase size={16} /> Penempatan Siswa PKL ({pklPlacements.length})
        </button>
        <button
          className={`tab-btn ${activeTab === 'mitra' ? 'active' : ''}`}
          onClick={() => setActiveTab('mitra')}
        >
          <Building2 size={16} /> Mitra DUDI & MoU ({pklPartners.length})
        </button>
        <button
          className={`tab-btn ${activeTab === 'jurnal' ? 'active' : ''}`}
          onClick={() => setActiveTab('jurnal')}
        >
          <BookOpen size={16} /> Jurnal Harian Siswa
        </button>
        <button
          className={`tab-btn ${activeTab === 'tracer' ? 'active' : ''}`}
          onClick={() => setActiveTab('tracer')}
        >
          <TrendingUp size={16} /> Tracer Study Alumni (BMW)
        </button>
      </div>

      {/* TAB PENEMPATAN */}
      {activeTab === 'penempatan' && (
        <div className="card-panel">
          <div className="card-header">
            <div className="card-title">
              <Briefcase size={18} /> Daftar Penempatan Praktik Kerja Lapangan (PKL) Siswa
            </div>
          </div>
          <div className="table-responsive">
            <table className="data-table">
              <thead>
                <tr>
                  <th>Nama Siswa & NIS</th>
                  <th>Kelas & Jurusan</th>
                  <th>Perusahaan / Mitra DUDI</th>
                  <th>Pembimbing Sekolah</th>
                  <th>Mentor Industri</th>
                  <th>Nilai PKL</th>
                  <th style={{ textAlign: 'center' }}>Sertifikat PKL</th>
                </tr>
              </thead>
              <tbody>
                {pklPlacements.map((p) => (
                  <tr key={p.id}>
                    <td>
                      <div style={{ fontWeight: 600 }}>{p.studentName}</div>
                      <div style={{ fontSize: '0.74rem', color: 'var(--text-muted)' }}>NIS: {p.nis}</div>
                    </td>
                    <td><span className="badge badge-neutral">{p.class}</span></td>
                    <td>
                      <div style={{ fontWeight: 600, color: 'var(--primary-700)' }}>{p.company}</div>
                    </td>
                    <td>{p.schoolMentor}</td>
                    <td>{p.industryMentor}</td>
                    <td>
                      <strong style={{ color: '#16a34a', fontSize: '0.95rem' }}>{p.score} (Amat Baik)</strong>
                    </td>
                    <td style={{ textAlign: 'center' }}>
                      <button
                        className="btn btn-secondary btn-sm"
                        onClick={() => setSelectedCertificate(p)}
                      >
                        <Award size={14} /> Cetak Sertifikat
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}

      {/* TAB MITRA DUDI */}
      {activeTab === 'mitra' && (
        <div className="card-panel">
          <div className="card-header">
            <div className="card-title">
              <Building2 size={18} /> Mitra Kerja Sama Dunia Usaha & Industri (DUDI)
            </div>
          </div>
          <div className="table-responsive">
            <table className="data-table">
              <thead>
                <tr>
                  <th>Nama Perusahaan</th>
                  <th>Sektor Bidang Usaha</th>
                  <th>Nomor & Status MoU</th>
                  <th>Alamat Kantor / Pabrik</th>
                  <th>Kuota Magang</th>
                  <th>Instruktur Industri</th>
                </tr>
              </thead>
              <tbody>
                {pklPartners.map((m) => (
                  <tr key={m.id}>
                    <td><strong>{m.name}</strong></td>
                    <td><span className="badge badge-purple">{m.sector}</span></td>
                    <td>
                      <div style={{ fontWeight: 600 }}>{m.mouNumber}</div>
                      <span className="badge badge-success">{m.mouStatus}</span>
                    </td>
                    <td>{m.address}</td>
                    <td>{m.placedStudents} / {m.quota} Siswa</td>
                    <td>{m.mentorIndustry}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}

      {/* TAB JURNAL */}
      {activeTab === 'jurnal' && (
        <div className="card-panel">
          <div className="card-header">
            <div className="card-title">
              <BookOpen size={18} /> Monitoring Jurnal Kegiatan Harian PKL
            </div>
          </div>
          <div className="table-responsive">
            <table className="data-table">
              <thead>
                <tr>
                  <th>Tanggal</th>
                  <th>Nama Siswa</th>
                  <th>Uraian Kegiatan Praktik di Industri</th>
                  <th>Status Verifikasi</th>
                </tr>
              </thead>
              <tbody>
                {journals.map((j) => (
                  <tr key={j.id}>
                    <td><strong>{j.date}</strong></td>
                    <td>{j.student}</td>
                    <td>{j.task}</td>
                    <td><span className="badge badge-success">{j.status}</span></td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}

      {/* TAB TRACER */}
      {activeTab === 'tracer' && (
        <div className="card-panel">
          <div className="card-body">
            <h3 style={{ fontSize: '1.05rem', marginBottom: '14px' }}>Tracer Study Penyerapan Lulusan Vokasi (BMW)</h3>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '16px' }}>
              <div style={{ padding: '20px', background: '#dbeafe', borderRadius: 'var(--radius-lg)', color: '#1e3a8a' }}>
                <div style={{ fontSize: '0.82rem', fontWeight: 700 }}>B - BEKERJA DI INDUSTRI</div>
                <div style={{ fontSize: '1.8rem', fontWeight: 800, margin: '6px 0' }}>84.2%</div>
                <div style={{ fontSize: '0.78rem' }}>Terserap di PT Telkom, Astra, Vendor IT</div>
              </div>
              <div style={{ padding: '20px', background: '#d1fae5', borderRadius: 'var(--radius-lg)', color: '#065f46' }}>
                <div style={{ fontSize: '0.82rem', fontWeight: 700 }}>M - MELANJUTKAN STUDI</div>
                <div style={{ fontSize: '1.8rem', fontWeight: 800, margin: '6px 0' }}>12.0%</div>
                <div style={{ fontSize: '0.78rem' }}>Politeknik Negeri & Universitas</div>
              </div>
              <div style={{ padding: '20px', background: '#fef3c7', borderRadius: 'var(--radius-lg)', color: '#92400e' }}>
                <div style={{ fontSize: '0.82rem', fontWeight: 700 }}>W - WIRAUSAHA MANDIRI</div>
                <div style={{ fontSize: '1.8rem', fontWeight: 800, margin: '6px 0' }}>3.8%</div>
                <div style={{ fontSize: '0.78rem' }}>Software House & Bengkel Mandiri</div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* MODAL CETAK SERTIFIKAT PKL */}
      {selectedCertificate && (
        <div className="modal-overlay" onClick={() => setSelectedCertificate(null)}>
          <div className="modal-dialog wide" onClick={(e) => e.stopPropagation()}>
            <div className="modal-header">
              <div className="modal-title">Format Cetak Sertifikat Praktik Kerja Lapangan (PKL)</div>
              <button className="icon-btn" onClick={() => setSelectedCertificate(null)}>×</button>
            </div>
            <div className="modal-body" style={{ background: '#f8fafc', padding: '24px' }}>
              <div className="official-doc" style={{ border: '8px double #1e3a8a', padding: '36px' }}>
                <div style={{ textAlign: 'center', marginBottom: '18px' }}>
                  <div style={{ fontSize: '12pt', letterSpacing: '2px', fontWeight: 'bold' }}>{school.name}</div>
                  <div style={{ fontSize: '18pt', fontWeight: 900, color: '#1e3a8a', margin: '8px 0', textDecoration: 'underline' }}>
                    SERTIFIKAT PRAKTIK KERJA LAPANGAN
                  </div>
                  <div style={{ fontSize: '10pt' }}>Nomor: 421.5/098/SERT-PKL/SMK/2026</div>
                </div>

                <div style={{ textAlign: 'center', fontSize: '10.5pt', lineHeight: '1.6', margin: '20px 0' }}>
                  <div>Kepala {school.name} bersama Pimpinan <strong>{selectedCertificate.company}</strong> menerangkan bahwa:</div>
                  <div style={{ fontSize: '16pt', fontWeight: 'bold', color: '#000', margin: '10px 0' }}>
                    {selectedCertificate.studentName}
                  </div>
                  <div>NIS: <strong>{selectedCertificate.nis}</strong> | Kelas: <strong>{selectedCertificate.class}</strong></div>
                  <p style={{ marginTop: '12px' }}>
                    Telah melaksanakan Praktik Kerja Lapangan (PKL) di <strong>{selectedCertificate.company}</strong> dengan predikat kelulusan:
                  </p>
                  <div style={{ fontSize: '14pt', fontWeight: 'bold', color: '#16a34a', margin: '8px 0' }}>
                    AMAT BAIK (NILAI: {selectedCertificate.score})
                  </div>
                </div>

                <div className="doc-signatures" style={{ marginTop: '30px' }}>
                  <div className="sig-box">
                    <div>Pimpinan / Mentor Industri,</div>
                    <div>{selectedCertificate.company}</div>
                    <div className="sig-space"></div>
                    <div style={{ fontWeight: 'bold', textDecoration: 'underline' }}>{selectedCertificate.industryMentor}</div>
                  </div>

                  <div className="sig-box">
                    <div>Kota Bandung, 15 Februari 2026</div>
                    <div>Kepala {school.name}</div>
                    <div className="sig-space"></div>
                    <div style={{ fontWeight: 'bold', textDecoration: 'underline' }}>{school.headmaster.name}</div>
                    <div>NIP. {school.headmaster.nip}</div>
                  </div>
                </div>
              </div>
            </div>
            <div className="modal-footer">
              <button className="btn btn-secondary" onClick={() => setSelectedCertificate(null)}>Tutup</button>
              <button className="btn btn-primary" onClick={() => window.print()}>
                <Printer size={16} /> Cetak Sertifikat PKL
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
