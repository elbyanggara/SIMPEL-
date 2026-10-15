import React, { useState } from 'react';
import {
  HeartHandshake,
  Search,
  Plus,
  AlertTriangle,
  CheckCircle,
  Home,
  Compass,
  FileText
} from 'lucide-react';

export function Modul9Bk({ bkCases, setBkCases, school }) {
  const [activeTab, setActiveTab] = useState('kasus'); // kasus, home-visit, karier
  const [showAddCase, setShowAddCase] = useState(false);

  const [newCase, setNewCase] = useState({
    studentName: 'Fajar Dwi Saputra',
    class: 'XI TKRO 2',
    category: 'Disiplin & Presensi',
    problem: '',
    action: '',
    counselor: 'Hendra Wijaya, S.Pd',
    status: 'Pemantauan'
  });

  const handleAddCase = (e) => {
    e.preventDefault();
    const item = {
      id: `BK-2026-${String(bkCases.length + 1).padStart(3, '0')}`,
      date: new Date().toISOString().split('T')[0],
      ...newCase
    };
    setBkCases([item, ...bkCases]);
    setShowAddCase(false);
  };

  return (
    <div className="module-content">
      {/* Header */}
      <div className="module-header">
        <div className="module-header-info">
          <h2>
            <HeartHandshake className="text-primary-600" size={26} />
            Bimbingan Konseling (BK)
          </h2>
          <p>
            Layanan bimbingan pribadi, sosial, belajar, dan konseling karier siswa vokasi, home visit & penanganan tata tertib {school.name}.
          </p>
        </div>

        <div className="module-actions">
          <button className="btn btn-primary" onClick={() => setShowAddCase(true)}>
            <Plus size={16} /> Catat Konseling Siswa
          </button>
        </div>
      </div>

      {/* KPI Stats */}
      <div className="stats-grid">
        <div className="stat-card">
          <div className="stat-info">
            <div className="stat-label">Layanan Konseling</div>
            <div className="stat-value">{bkCases.length} Kasus</div>
            <div className="stat-sub">Terdata & Tertangani</div>
          </div>
          <div className="stat-icon-wrapper icon-blue">
            <HeartHandshake size={24} />
          </div>
        </div>

        <div className="stat-card">
          <div className="stat-info">
            <div className="stat-label">Selesai Ditangani</div>
            <div className="stat-value">{bkCases.filter(c => c.status === 'Selesai').length} Siswa</div>
            <div className="stat-sub">Solutif & Terbimbing</div>
          </div>
          <div className="stat-icon-wrapper icon-emerald">
            <CheckCircle size={24} />
          </div>
        </div>

        <div className="stat-card">
          <div className="stat-info">
            <div className="stat-label">Konseling Karier Vokasi</div>
            <div className="stat-value">142 Siswa</div>
            <div className="stat-sub">Pemetaan Kuliah & DUDI</div>
          </div>
          <div className="stat-icon-wrapper icon-purple">
            <Compass size={24} />
          </div>
        </div>

        <div className="stat-card">
          <div className="stat-info">
            <div className="stat-label">Agenda Home Visit</div>
            <div className="stat-value">3 Kunjungan</div>
            <div className="stat-sub">Kolaborasi Bersama Ortu</div>
          </div>
          <div className="stat-icon-wrapper icon-amber">
            <Home size={24} />
          </div>
        </div>
      </div>

      {/* Tabs */}
      <div className="tab-container">
        <button
          className={`tab-btn ${activeTab === 'kasus' ? 'active' : ''}`}
          onClick={() => setActiveTab('kasus')}
        >
          <HeartHandshake size={16} /> Buku Kasus & Konseling ({bkCases.length})
        </button>
        <button
          className={`tab-btn ${activeTab === 'home-visit' ? 'active' : ''}`}
          onClick={() => setActiveTab('home-visit')}
        >
          <Home size={16} /> Layanan Home Visit
        </button>
        <button
          className={`tab-btn ${activeTab === 'karier' ? 'active' : ''}`}
          onClick={() => setActiveTab('karier')}
        >
          <Compass size={16} /> Konseling Karier & Lanjut Studi
        </button>
      </div>

      {/* TAB KASUS */}
      {activeTab === 'kasus' && (
        <div className="card-panel">
          <div className="card-header">
            <div className="card-title">
              <HeartHandshake size={18} /> Buku Kasus & Catatan Pembinaan Konseling
            </div>
          </div>
          <div className="table-responsive">
            <table className="data-table">
              <thead>
                <tr>
                  <th>Tanggal</th>
                  <th>Nama Siswa & Kelas</th>
                  <th>Kategori Layanan</th>
                  <th>Uraian Permasalahan</th>
                  <th>Tindak Lanjut Konselor</th>
                  <th>Guru BK</th>
                  <th>Status</th>
                </tr>
              </thead>
              <tbody>
                {bkCases.map((c) => (
                  <tr key={c.id}>
                    <td>{c.date}</td>
                    <td>
                      <div style={{ fontWeight: 600 }}>{c.studentName}</div>
                      <span className="badge badge-neutral">{c.class}</span>
                    </td>
                    <td><span className="badge badge-purple">{c.category}</span></td>
                    <td style={{ maxWidth: '280px' }}>{c.problem}</td>
                    <td style={{ maxWidth: '280px' }}>{c.action}</td>
                    <td>{c.counselor}</td>
                    <td>
                      <span className={`badge ${c.status === 'Selesai' ? 'badge-success' : 'badge-warning'}`}>
                        {c.status}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}

      {/* TAB HOME VISIT */}
      {activeTab === 'home-visit' && (
        <div className="card-panel">
          <div className="card-body">
            <h3 style={{ fontSize: '1rem', marginBottom: '12px' }}>Log Kunjungan ke Rumah Orang Tua Siswa (Home Visit)</h3>
            <div style={{ padding: '16px', border: '1px solid var(--border-color)', borderRadius: 'var(--radius-md)' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <strong style={{ fontSize: '0.92rem' }}>Fajar Dwi Saputra (XI TKRO 2)</strong>
                <span className="badge badge-warning">Terjadwal: 18 Februari 2026</span>
              </div>
              <p style={{ fontSize: '0.82rem', color: 'var(--text-muted)', marginTop: '6px' }}>
                Alamat: Jl. Soekarno Hatta No. 201. Tujuan: Silaturahmi edukatif dengan orang tua mengenai kendala transportasi dan bimbingan kedisiplinan belajar.
              </p>
            </div>
          </div>
        </div>
      )}

      {/* TAB KARIER */}
      {activeTab === 'karier' && (
        <div className="card-panel">
          <div className="card-body">
            <h3 style={{ fontSize: '1rem', marginBottom: '12px' }}>Peta Peminatan Karier dan Studi Lanjut Kelas XII</h3>
            <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>
              Pendampingan penyusunan CV profesional, persiapan tes wawancara DUDI rekanan, serta pendaftaran SNBP/SNBT perguruan tinggi vokasi.
            </p>
          </div>
        </div>
      )}

      {/* MODAL TAMBAH KASUS */}
      {showAddCase && (
        <div className="modal-overlay" onClick={() => setShowAddCase(false)}>
          <div className="modal-dialog" onClick={(e) => e.stopPropagation()}>
            <div className="modal-header">
              <div className="modal-title">Input Catatan Konseling Siswa</div>
              <button className="icon-btn" onClick={() => setShowAddCase(false)}>×</button>
            </div>
            <form onSubmit={handleAddCase}>
              <div className="modal-body">
                <div className="form-row">
                  <div className="form-group">
                    <label className="form-label">Nama Siswa</label>
                    <input
                      type="text"
                      required
                      className="form-input"
                      value={newCase.studentName}
                      onChange={(e) => setNewCase({ ...newCase, studentName: e.target.value })}
                    />
                  </div>
                  <div className="form-group">
                    <label className="form-label">Kelas</label>
                    <input
                      type="text"
                      required
                      className="form-input"
                      value={newCase.class}
                      onChange={(e) => setNewCase({ ...newCase, class: e.target.value })}
                    />
                  </div>
                </div>
                <div className="form-group">
                  <label className="form-label">Kategori Masalah</label>
                  <select
                    className="form-select"
                    value={newCase.category}
                    onChange={(e) => setNewCase({ ...newCase, category: e.target.value })}
                  >
                    <option value="Disiplin & Presensi">Disiplin & Presensi</option>
                    <option value="Kesulitan Belajar Kejuruan">Kesulitan Belajar Kejuruan</option>
                    <option value="Konseling Pribadi / Sosial">Konseling Pribadi / Sosial</option>
                    <option value="Konseling Karier & Lanjut Studi">Konseling Karier & Lanjut Studi</option>
                  </select>
                </div>
                <div className="form-group">
                  <label className="form-label">Uraian Permasalahan</label>
                  <textarea
                    rows="2"
                    required
                    className="form-textarea"
                    placeholder="Uraikan kendala atau keluhan siswa..."
                    value={newCase.problem}
                    onChange={(e) => setNewCase({ ...newCase, problem: e.target.value })}
                  ></textarea>
                </div>
                <div className="form-group">
                  <label className="form-label">Rencana Tindak Lanjut</label>
                  <textarea
                    rows="2"
                    required
                    className="form-textarea"
                    placeholder="Langkah bimbingan yang disepakati..."
                    value={newCase.action}
                    onChange={(e) => setNewCase({ ...newCase, action: e.target.value })}
                  ></textarea>
                </div>
              </div>
              <div className="modal-footer">
                <button type="button" className="btn btn-secondary" onClick={() => setShowAddCase(false)}>Batal</button>
                <button type="submit" className="btn btn-primary">Simpan Catatan BK</button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
