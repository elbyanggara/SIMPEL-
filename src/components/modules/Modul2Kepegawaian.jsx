import React, { useState } from 'react';
import {
  UserCheck,
  Briefcase,
  Calendar,
  Clock,
  Printer,
  FileText,
  DollarSign,
  CheckCircle,
  MapPin,
  Camera,
  Search,
  Award
} from 'lucide-react';

export function Modul2Kepegawaian({ staff, setStaff, school }) {
  const [activeTab, setActiveTab] = useState('data-guru'); // data-guru, absensi, cuti, payroll
  const [selectedStaffSlip, setSelectedStaffSlip] = useState(null);
  const [presensiSuccess, setPresensiSuccess] = useState(false);

  // Simulasi Presensi Selfie / GPS
  const handleCheckIn = () => {
    setPresensiSuccess(true);
    setTimeout(() => setPresensiSuccess(false), 4000);
  };

  return (
    <div className="module-content">
      {/* Header */}
      <div className="module-header">
        <div className="module-header-info">
          <h2>
            <UserCheck className="text-primary-600" size={26} />
            Kepegawaian & SIMPEG
          </h2>
          <p>
            Sistem informasi manajemen pendidik & tenaga kependidikan (PTK), absensi presensi, cuti dinas, beban kerja mengajar dan payroll {school.name}.
          </p>
        </div>
      </div>

      {/* KPI Stats Grid */}
      <div className="stats-grid">
        <div className="stat-card">
          <div className="stat-info">
            <div className="stat-label">Total Guru & Staf</div>
            <div className="stat-value">{staff.length} PTK</div>
            <div className="stat-sub">PNS, PPPK & Honorer</div>
          </div>
          <div className="stat-icon-wrapper icon-blue">
            <UserCheck size={24} />
          </div>
        </div>

        <div className="stat-card">
          <div className="stat-info">
            <div className="stat-label">Guru Bersertifikasi</div>
            <div className="stat-value">{staff.filter(s => s.certified).length} Guru</div>
            <div className="stat-sub">Tunjangan Profesi Pendidik (TPP)</div>
          </div>
          <div className="stat-icon-wrapper icon-emerald">
            <Award size={24} />
          </div>
        </div>

        <div className="stat-card">
          <div className="stat-info">
            <div className="stat-label">Rata-rata Jam Mengajar</div>
            <div className="stat-value">27 Jam/Mgg</div>
            <div className="stat-sub">Memenuhi Standar BKN & Dapodik</div>
          </div>
          <div className="stat-icon-wrapper icon-teal">
            <Briefcase size={24} />
          </div>
        </div>

        <div className="stat-card">
          <div className="stat-info">
            <div className="stat-label">Disiplin Presensi</div>
            <div className="stat-value">98.4%</div>
            <div className="stat-sub">Kehadiran Bulan Februari 2026</div>
          </div>
          <div className="stat-icon-wrapper icon-amber">
            <Clock size={24} />
          </div>
        </div>
      </div>

      {/* Tabs */}
      <div className="tab-container">
        <button
          className={`tab-btn ${activeTab === 'data-guru' ? 'active' : ''}`}
          onClick={() => setActiveTab('data-guru')}
        >
          <UserCheck size={16} /> Data Induk Guru & Karyawan ({staff.length})
        </button>
        <button
          className={`tab-btn ${activeTab === 'absensi' ? 'active' : ''}`}
          onClick={() => setActiveTab('absensi')}
        >
          <Clock size={16} /> Presensi GPS & Log Kehadiran
        </button>
        <button
          className={`tab-btn ${activeTab === 'cuti' ? 'active' : ''}`}
          onClick={() => setActiveTab('cuti')}
        >
          <Calendar size={16} /> Layanan Cuti & Surat Tugas
        </button>
        <button
          className={`tab-btn ${activeTab === 'payroll' ? 'active' : ''}`}
          onClick={() => setActiveTab('payroll')}
        >
          <DollarSign size={16} /> Payroll & Slip Gaji PTK
        </button>
      </div>

      {/* TAB DATA GURU */}
      {activeTab === 'data-guru' && (
        <div className="card-panel">
          <div className="card-header">
            <div className="card-title">
              <UserCheck size={18} /> Daftar Pendidik dan Tenaga Kependidikan (PTK)
            </div>
          </div>
          <div className="table-responsive">
            <table className="data-table">
              <thead>
                <tr>
                  <th>NIP / NUPTK</th>
                  <th>Nama Lengkap & Gelar</th>
                  <th>Jabatan & Tugas</th>
                  <th>Gol / Status</th>
                  <th>Sertifikasi</th>
                  <th>Beban Ajar</th>
                  <th>Kehadiran</th>
                  <th style={{ textAlign: 'center' }}>Slip Gaji</th>
                </tr>
              </thead>
              <tbody>
                {staff.map((p) => (
                  <tr key={p.id}>
                    <td>
                      <div style={{ fontWeight: 600 }}>{p.nip}</div>
                      <div style={{ fontSize: '0.74rem', color: 'var(--text-muted)' }}>NUPTK: {p.nuptk}</div>
                    </td>
                    <td>
                      <strong>{p.name}</strong>
                      <div style={{ fontSize: '0.72rem', color: 'var(--text-muted)' }}>HP: {p.phone}</div>
                    </td>
                    <td>{p.role}</td>
                    <td>
                      <span className="badge badge-purple">{p.golongan}</span>
                      <span className="badge badge-neutral" style={{ marginLeft: '4px' }}>{p.status}</span>
                    </td>
                    <td>
                      {p.certified ? (
                        <span className="badge badge-success">Sertifikasi</span>
                      ) : (
                        <span className="badge badge-neutral">Belum</span>
                      )}
                    </td>
                    <td><strong>{p.teachingHours} Jam</strong>/mgg</td>
                    <td>
                      <span className="badge badge-success">{p.attendanceRate}%</span>
                    </td>
                    <td style={{ textAlign: 'center' }}>
                      <button
                        className="btn btn-secondary btn-sm"
                        onClick={() => setSelectedStaffSlip(p)}
                      >
                        <Printer size={14} /> Slip Gaji
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}

      {/* TAB PRESENSI */}
      {activeTab === 'absensi' && (
        <div className="card-panel">
          <div className="card-header">
            <div className="card-title">
              <Clock size={18} /> Terminal Presensi Guru Berbasis Lokasi GPS & Selfie
            </div>
          </div>
          <div className="card-body">
            <div style={{ maxWidth: '480px', margin: '0 auto', textAlign: 'center', padding: '24px', border: '1px solid var(--border-color)', borderRadius: 'var(--radius-xl)', background: 'var(--bg-surface-subtle)' }}>
              <div style={{ display: 'inline-flex', padding: '16px', background: 'var(--primary-100)', borderRadius: '50%', color: 'var(--primary-600)', marginBottom: '16px' }}>
                <MapPin size={36} />
              </div>
              <h3 style={{ fontSize: '1.2rem', marginBottom: '8px' }}>Presensi Masuk PTK Hari Ini</h3>
              <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)', marginBottom: '20px' }}>
                Lokasi terdeteksi: <strong>{school.address}</strong> (Radius: 12 meter dari titik gerbang sekolah - Valid).
              </p>

              {presensiSuccess ? (
                <div style={{ padding: '14px', background: '#d1fae5', color: '#065f46', borderRadius: 'var(--radius-md)', fontWeight: 600, display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px' }}>
                  <CheckCircle size={20} /> Presensi Masuk Berhasil Dicatat: 06:48:12 WIB
                </div>
              ) : (
                <button className="btn btn-primary" style={{ padding: '12px 28px', fontSize: '0.95rem' }} onClick={handleCheckIn}>
                  <Camera size={18} /> Ambil Selfie & Check-In Masuk
                </button>
              )}
            </div>
          </div>
        </div>
      )}

      {/* TAB CUTI & SURAT TUGAS */}
      {activeTab === 'cuti' && (
        <div className="card-panel">
          <div className="card-header">
            <div className="card-title">
              <Calendar size={18} /> Pengajuan Izin, Cuti & Surat Perintah Tugas (SPT)
            </div>
          </div>
          <div className="card-body">
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '16px' }}>
              <div style={{ padding: '16px', border: '1px solid var(--border-color)', borderRadius: 'var(--radius-md)' }}>
                <div style={{ fontWeight: 700 }}>Eko Prasetyo, S.T., M.Kom</div>
                <div style={{ fontSize: '0.78rem', color: 'var(--text-muted)' }}>Tugas Luar Dinas: Pengantaran Siswa PKL ke PT Telkom</div>
                <div style={{ marginTop: '8px' }}><span className="badge badge-success">Disetujui Kepsek</span></div>
              </div>
              <div style={{ padding: '16px', border: '1px solid var(--border-color)', borderRadius: 'var(--radius-md)' }}>
                <div style={{ fontWeight: 700 }}>Siti Rahmawati, M.Pd</div>
                <div style={{ fontSize: '0.78rem', color: 'var(--text-muted)' }}>Cuti Tahunan: 2 Hari (20-21 Februari 2026)</div>
                <div style={{ marginTop: '8px' }}><span className="badge badge-info">Dalam Proses KTU</span></div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* TAB PAYROLL */}
      {activeTab === 'payroll' && (
        <div className="card-panel">
          <div className="card-header">
            <div className="card-title">
              <DollarSign size={18} /> Rekapitulasi Penggajian & Honorarium PTK
            </div>
          </div>
          <div className="table-responsive">
            <table className="data-table">
              <thead>
                <tr>
                  <th>Nama Pegawai</th>
                  <th>Status</th>
                  <th>Gaji Pokok / Honor</th>
                  <th>Tunjangan Jabatan</th>
                  <th>Potongan PPh21</th>
                  <th>Total Diterima (Take Home Pay)</th>
                  <th style={{ textAlign: 'center' }}>Cetak Slip</th>
                </tr>
              </thead>
              <tbody>
                {staff.map((s) => (
                  <tr key={s.id}>
                    <td><strong>{s.name}</strong></td>
                    <td><span className="badge badge-neutral">{s.status}</span></td>
                    <td>{s.salary}</td>
                    <td>Rp 1.250.000</td>
                    <td>Rp 120.000</td>
                    <td><strong style={{ color: 'var(--accent-emerald)' }}>Rp 7.980.000</strong></td>
                    <td style={{ textAlign: 'center' }}>
                      <button className="btn btn-secondary btn-sm" onClick={() => setSelectedStaffSlip(s)}>
                        <Printer size={14} /> Cetak
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}

      {/* MODAL CETAK SLIP GAJI */}
      {selectedStaffSlip && (
        <div className="modal-overlay" onClick={() => setSelectedStaffSlip(null)}>
          <div className="modal-dialog" onClick={(e) => e.stopPropagation()}>
            <div className="modal-header">
              <div className="modal-title">Slip Gaji & Penghasilan Guru / Karyawan</div>
              <button className="icon-btn" onClick={() => setSelectedStaffSlip(null)}>×</button>
            </div>
            <div className="modal-body" style={{ background: '#f8fafc', padding: '20px' }}>
              <div className="official-doc" style={{ padding: '24px' }}>
                <div style={{ textAlign: 'center', borderBottom: '2px solid #000', paddingBottom: '8px', marginBottom: '14px' }}>
                  <div style={{ fontWeight: 'bold', fontSize: '11pt' }}>{school.name}</div>
                  <div style={{ fontSize: '8.5pt' }}>{school.address}</div>
                  <div style={{ fontWeight: 'bold', fontSize: '11.5pt', marginTop: '6px', textDecoration: 'underline' }}>
                    SLIP GAJI DAN PENGHASILAN PEGAWAI
                  </div>
                  <div style={{ fontSize: '9pt' }}>Periode: Bulan Februari 2026</div>
                </div>

                <table style={{ width: '100%', fontSize: '10pt', marginBottom: '14px' }} cellPadding="3">
                  <tbody>
                    <tr>
                      <td style={{ width: '35%' }}>Nama Pegawai</td>
                      <td>: <strong>{selectedStaffSlip.name}</strong></td>
                    </tr>
                    <tr>
                      <td>NIP / NUPTK</td>
                      <td>: {selectedStaffSlip.nip} / {selectedStaffSlip.nuptk}</td>
                    </tr>
                    <tr>
                      <td>Jabatan / Golongan</td>
                      <td>: {selectedStaffSlip.role} ({selectedStaffSlip.golongan})</td>
                    </tr>
                  </tbody>
                </table>

                <table style={{ width: '100%', fontSize: '9.5pt', borderCollapse: 'collapse', marginBottom: '16px' }} border="1" cellPadding="6">
                  <thead style={{ background: '#f1f5f9' }}>
                    <tr>
                      <th>Komponen Penghasilan</th>
                      <th>Jumlah (Rp)</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr><td>Gaji Pokok / Honor Mengajar</td><td style={{ textAlign: 'right' }}>{selectedStaffSlip.salary}</td></tr>
                    <tr><td>Tunjangan Kinerja / Wali Kelas</td><td style={{ textAlign: 'right' }}>Rp 1.250.000</td></tr>
                    <tr><td>Tunjangan Kehadiran Penuh</td><td style={{ textAlign: 'right' }}>Rp 500.000</td></tr>
                    <tr style={{ fontWeight: 'bold', background: '#f8fafc' }}>
                      <td>Total Penghasilan Bruto</td>
                      <td style={{ textAlign: 'right' }}>Rp 8.600.000</td>
                    </tr>
                    <tr><td>Potongan IWP / BPJS / Pajak</td><td style={{ textAlign: 'right', color: '#b91c1c' }}>- Rp 350.000</td></tr>
                    <tr style={{ fontWeight: 'bold', background: '#e0e7ff' }}>
                      <td>TOTAL BERSIH DITERIMA (THP)</td>
                      <td style={{ textAlign: 'right', color: '#312e81' }}>Rp 8.250.000</td>
                    </tr>
                  </tbody>
                </table>

                <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '20px', fontSize: '9pt' }}>
                  <div style={{ textAlign: 'center', width: '160px' }}>
                    <div>Penerima,</div>
                    <div style={{ height: '40px' }}></div>
                    <div style={{ fontWeight: 'bold' }}>{selectedStaffSlip.name.split(',')[0]}</div>
                  </div>
                  <div style={{ textAlign: 'center', width: '180px' }}>
                    <div>Bendahara Gaji,</div>
                    <div style={{ height: '40px' }}></div>
                    <div style={{ fontWeight: 'bold', textDecoration: 'underline' }}>Nur Laila Fitri, S.E.</div>
                  </div>
                </div>
              </div>
            </div>
            <div className="modal-footer">
              <button className="btn btn-secondary" onClick={() => setSelectedStaffSlip(null)}>Tutup</button>
              <button className="btn btn-primary" onClick={() => window.print()}>
                <Printer size={16} /> Cetak Slip Gaji
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
