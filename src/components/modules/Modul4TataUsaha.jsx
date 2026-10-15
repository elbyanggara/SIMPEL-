import React, { useState } from 'react';
import {
  Mail,
  Send,
  FileText,
  UserCheck,
  Plus,
  Printer,
  Search,
  CheckCircle,
  Clock,
  AlertCircle,
  FileCheck,
  Building,
  Calendar,
  Eye,
  Download,
  Share2,
  BookmarkCheck,
  Star
} from 'lucide-react';
import { LembarDisposisiModal, SuratKeluarModal } from '../modals/OfficialDocsModals';

export function Modul4TataUsaha({
  suratMasuk,
  setSuratMasuk,
  suratKeluar,
  setSuratKeluar,
  guestBook,
  setGuestBook,
  school,
  currentRole
}) {
  const [activeTab, setActiveTab] = useState('surat-masuk'); // surat-masuk, surat-keluar, buku-tamu, notulensi
  const [selectedDisposisi, setSelectedDisposisi] = useState(null);
  const [selectedSuratKeluar, setSelectedSuratKeluar] = useState(null);

  // Filter & Search
  const [filterStatus, setFilterStatus] = useState('all');
  const [searchLetter, setSearchLetter] = useState('');

  // Modals Tambah Data
  const [showAddSuratMasuk, setShowAddSuratMasuk] = useState(false);
  const [showAddSuratKeluar, setShowAddSuratKeluar] = useState(false);
  const [showAddGuest, setShowAddGuest] = useState(false);

  // Form State Surat Masuk Baru
  const [newSuratMasuk, setNewSuratMasuk] = useState({
    letterNo: '',
    sender: '',
    letterDate: new Date().toISOString().split('T')[0],
    receivedDate: new Date().toISOString().split('T')[0],
    subject: '',
    urgency: 'Penting',
    dispositionTarget: 'Waka Kurikulum',
    dispositionNote: 'Pelajari dan tindak lanjuti sesuai agenda.'
  });

  // Form State Surat Keluar Baru
  const [newSuratKeluar, setNewSuratKeluar] = useState({
    type: 'Surat Tugas',
    recipient: '',
    subject: '',
    date: new Date().toISOString().split('T')[0],
    signer: school.headmaster.name
  });

  // Form State Tamu Baru
  const [newGuest, setNewGuest] = useState({
    name: '',
    institution: '',
    purpose: '',
    meetingWith: 'Kepala Sekolah / KTU',
    phone: ''
  });

  // Handle Submit Surat Masuk
  const handleAddSuratMasuk = (e) => {
    e.preventDefault();
    const count = suratMasuk.length + 1;
    const item = {
      id: `SM-2026-${String(count).padStart(3, '0')}`,
      agendaNo: `${String(count).padStart(3, '0')}/SM/II/2026`,
      letterNo: newSuratMasuk.letterNo || `421.3/${Math.floor(1000 + Math.random() * 9000)}-Disdik/2026`,
      sender: newSuratMasuk.sender,
      letterDate: newSuratMasuk.letterDate,
      receivedDate: newSuratMasuk.receivedDate,
      subject: newSuratMasuk.subject,
      urgency: newSuratMasuk.urgency,
      status: 'Sudah Didisposisi',
      dispositionTarget: newSuratMasuk.dispositionTarget,
      dispositionNote: newSuratMasuk.dispositionNote,
      dispositionedBy: `${school.headmaster.name} (Kepala Sekolah)`
    };
    setSuratMasuk([item, ...suratMasuk]);
    setShowAddSuratMasuk(false);
  };

  // Handle Submit Surat Keluar
  const handleAddSuratKeluar = (e) => {
    e.preventDefault();
    const count = suratKeluar.length + 89;
    const item = {
      id: `SK-2026-${count}`,
      letterNo: `421.5/${count}/SMK-TU/II/2026`,
      type: newSuratKeluar.type,
      date: newSuratKeluar.date,
      recipient: newSuratKeluar.recipient,
      subject: newSuratKeluar.subject,
      signer: newSuratKeluar.signer,
      status: 'Selesai Ditandatangani'
    };
    setSuratKeluar([item, ...suratKeluar]);
    setShowAddSuratKeluar(false);
  };

  // Handle Submit Tamu
  const handleAddGuest = (e) => {
    e.preventDefault();
    const item = {
      id: `GB-${String(guestBook.length + 1).padStart(3, '0')}`,
      date: new Date().toISOString().split('T')[0],
      time: new Date().toLocaleTimeString('id-ID', { hour: '2-digit', minute: '2-digit' }),
      ...newGuest
    };
    setGuestBook([item, ...guestBook]);
    setShowAddGuest(false);
  };

  // Filtered Surat Masuk
  const filteredSuratMasuk = suratMasuk.filter((sm) => {
    const matchesSearch = sm.subject.toLowerCase().includes(searchLetter.toLowerCase()) ||
                          sm.sender.toLowerCase().includes(searchLetter.toLowerCase()) ||
                          sm.letterNo.toLowerCase().includes(searchLetter.toLowerCase());
    if (filterStatus === 'all') return matchesSearch;
    return matchesSearch && sm.status === filterStatus;
  });

  return (
    <div className="module-content">
      {/* Header Modul */}
      <div className="module-header">
        <div className="module-header-info">
          <h2>
            <Mail className="text-primary-600" size={26} />
            Tata Usaha & Persuratan
            <span className="badge badge-warning" style={{ fontSize: '0.75rem' }}>
              Pusat Administrasi Sekolah
            </span>
          </h2>
          <p>
            Sistem tata naskah dinas, agenda surat masuk & disposisi digital, penomoran otomatis surat keluar, dan administrasi umum TU {school.name}.
          </p>
        </div>

        <div className="module-actions">
          {activeTab === 'surat-masuk' && (
            <button className="btn btn-primary" onClick={() => setShowAddSuratMasuk(true)}>
              <Plus size={16} /> Agenda Surat Masuk Baru
            </button>
          )}
          {activeTab === 'surat-keluar' && (
            <button className="btn btn-primary" onClick={() => setShowAddSuratKeluar(true)}>
              <Plus size={16} /> Buat Surat Keluar (Nomor Otomatis)
            </button>
          )}
          {activeTab === 'buku-tamu' && (
            <button className="btn btn-primary" onClick={() => setShowAddGuest(true)}>
              <Plus size={16} /> Registrasi Tamu Baru
            </button>
          )}
        </div>
      </div>

      {/* Stats KPI Tata Usaha */}
      <div className="stats-grid">
        <div className="stat-card">
          <div className="stat-info">
            <div className="stat-label">Surat Masuk Bulan Ini</div>
            <div className="stat-value">{suratMasuk.length}</div>
            <div className="stat-sub">100% Tercatat dalam E-Arsip</div>
          </div>
          <div className="stat-icon-wrapper icon-blue">
            <Mail size={24} />
          </div>
        </div>

        <div className="stat-card">
          <div className="stat-info">
            <div className="stat-label">Surat Keluar Terbit</div>
            <div className="stat-value">{suratKeluar.length}</div>
            <div className="stat-sub">Penomoran Klasifikasi Otomatis</div>
          </div>
          <div className="stat-icon-wrapper icon-teal">
            <Send size={24} />
          </div>
        </div>

        <div className="stat-card">
          <div className="stat-info">
            <div className="stat-label">Disposisi Selesai</div>
            <div className="stat-value">
              {suratMasuk.filter(s => s.status === 'Sudah Didisposisi').length}
            </div>
            <div className="stat-sub">Siap Cetak Lembar Disposisi</div>
          </div>
          <div className="stat-icon-wrapper icon-emerald">
            <BookmarkCheck size={24} />
          </div>
        </div>

        <div className="stat-card">
          <div className="stat-info">
            <div className="stat-label">Buku Tamu Digital</div>
            <div className="stat-value">{guestBook.length}</div>
            <div className="stat-sub">Kunjungan Terdata Real-Time</div>
          </div>
          <div className="stat-icon-wrapper icon-purple">
            <UserCheck size={24} />
          </div>
        </div>
      </div>

      {/* Tab Navigation */}
      <div className="tab-container">
        <button
          className={`tab-btn ${activeTab === 'surat-masuk' ? 'active' : ''}`}
          onClick={() => setActiveTab('surat-masuk')}
        >
          <Mail size={16} /> E-Arsip Surat Masuk & Lembar Disposisi ({suratMasuk.length})
        </button>
        <button
          className={`tab-btn ${activeTab === 'surat-keluar' ? 'active' : ''}`}
          onClick={() => setActiveTab('surat-keluar')}
        >
          <Send size={16} /> Surat Keluar & Template Dinas ({suratKeluar.length})
        </button>
        <button
          className={`tab-btn ${activeTab === 'buku-tamu' ? 'active' : ''}`}
          onClick={() => setActiveTab('buku-tamu')}
        >
          <UserCheck size={16} /> Buku Tamu Digital ({guestBook.length})
        </button>
        <button
          className={`tab-btn ${activeTab === 'notulensi' ? 'active' : ''}`}
          onClick={() => setActiveTab('notulensi')}
        >
          <FileText size={16} /> Notulensi Rapat & SK Kepala Sekolah
        </button>
      </div>

      {/* TAB 1: SURAT MASUK & DISPOSISI */}
      {activeTab === 'surat-masuk' && (
        <div className="card-panel">
          <div className="card-header">
            <div className="card-title">
              <Mail size={18} /> Buku Agenda Surat Masuk Terpadu
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
              <div className="search-bar" style={{ width: '240px' }}>
                <Search size={14} />
                <input
                  type="text"
                  placeholder="Cari no surat, pengirim..."
                  value={searchLetter}
                  onChange={(e) => setSearchLetter(e.target.value)}
                />
              </div>
              <select
                className="form-select"
                style={{ width: '170px', padding: '6px 10px' }}
                value={filterStatus}
                onChange={(e) => setFilterStatus(e.target.value)}
              >
                <option value="all">Semua Status</option>
                <option value="Sudah Didisposisi">Sudah Didisposisi</option>
                <option value="Menunggu Disposisi">Menunggu Disposisi</option>
              </select>
            </div>
          </div>

          <div className="table-responsive">
            <table className="data-table">
              <thead>
                <tr>
                  <th>No. Agenda</th>
                  <th>Nomor & Tgl Surat</th>
                  <th>Instansi Pengirim</th>
                  <th>Perihal</th>
                  <th>Sifat</th>
                  <th>Instruksi Disposisi</th>
                  <th>Status</th>
                  <th style={{ textAlign: 'center' }}>Aksi / Cetak</th>
                </tr>
              </thead>
              <tbody>
                {filteredSuratMasuk.map((item) => (
                  <tr key={item.id}>
                    <td>
                      <strong>{item.agendaNo}</strong>
                      <div style={{ fontSize: '0.72rem', color: 'var(--text-muted)' }}>ID: {item.id}</div>
                    </td>
                    <td>
                      <div style={{ fontWeight: 600 }}>{item.letterNo}</div>
                      <div style={{ fontSize: '0.74rem', color: 'var(--text-muted)' }}>
                        Tgl Surat: {item.letterDate} | Terima: {item.receivedDate}
                      </div>
                    </td>
                    <td>
                      <div style={{ fontWeight: 600, color: 'var(--primary-700)' }}>{item.sender}</div>
                    </td>
                    <td style={{ maxWidth: '280px' }}>
                      <div style={{ fontSize: '0.84rem', lineHeight: '1.3' }}>{item.subject}</div>
                    </td>
                    <td>
                      <span className={`badge ${item.urgency === 'Sangat Segera' ? 'badge-danger' : 'badge-warning'}`}>
                        {item.urgency}
                      </span>
                    </td>
                    <td>
                      <div style={{ fontSize: '0.8rem', fontWeight: 600, color: 'var(--text-main)' }}>
                        {item.dispositionTarget}
                      </div>
                      <div style={{ fontSize: '0.72rem', color: 'var(--text-muted)', fontStyle: 'italic' }}>
                        "{item.dispositionNote}"
                      </div>
                    </td>
                    <td>
                      <span className={`badge ${item.status === 'Sudah Didisposisi' ? 'badge-success' : 'badge-warning'}`}>
                        {item.status}
                      </span>
                    </td>
                    <td style={{ textAlign: 'center' }}>
                      <button
                        className="btn btn-secondary btn-sm"
                        onClick={() => setSelectedDisposisi(item)}
                        title="Lihat & Cetak Lembar Disposisi Resmi"
                      >
                        <Printer size={14} /> Cetak Disposisi
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}

      {/* TAB 2: SURAT KELUAR */}
      {activeTab === 'surat-keluar' && (
        <div className="card-panel">
          <div className="card-header">
            <div className="card-title">
              <Send size={18} /> Register Surat Keluar & Template Resmi
            </div>
            <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>
              Penomoran otomatis berformat <code>421.5/[No]/SMK-TU/[Bulan]/[Tahun]</code>
            </div>
          </div>

          <div className="table-responsive">
            <table className="data-table">
              <thead>
                <tr>
                  <th>Nomor Surat Resmi</th>
                  <th>Jenis Naskah</th>
                  <th>Tanggal Terbit</th>
                  <th>Tujuan / Penerima</th>
                  <th>Perihal</th>
                  <th>Penandatangan</th>
                  <th>Status</th>
                  <th style={{ textAlign: 'center' }}>Aksi / Cetak</th>
                </tr>
              </thead>
              <tbody>
                {suratKeluar.map((item) => (
                  <tr key={item.id}>
                    <td>
                      <strong style={{ color: 'var(--primary-700)' }}>{item.letterNo}</strong>
                      <div style={{ fontSize: '0.72rem', color: 'var(--text-muted)' }}>ID: {item.id}</div>
                    </td>
                    <td>
                      <span className="badge badge-purple">{item.type}</span>
                    </td>
                    <td>{item.date}</td>
                    <td>
                      <div style={{ fontWeight: 600 }}>{item.recipient}</div>
                    </td>
                    <td style={{ maxWidth: '280px' }}>{item.subject}</td>
                    <td>{item.signer}</td>
                    <td>
                      <span className="badge badge-success">{item.status}</span>
                    </td>
                    <td style={{ textAlign: 'center' }}>
                      <button
                        className="btn btn-secondary btn-sm"
                        onClick={() => setSelectedSuratKeluar(item)}
                        title="Lihat dan Cetak Format Surat Dinas"
                      >
                        <Printer size={14} /> Cetak Surat
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}

      {/* TAB 3: BUKU TAMU DIGITAL */}
      {activeTab === 'buku-tamu' && (
        <div className="card-panel">
          <div className="card-header">
            <div className="card-title">
              <UserCheck size={18} /> Registrasi Buku Tamu Digital Pelayanan TU
            </div>
          </div>
          <div className="table-responsive">
            <table className="data-table">
              <thead>
                <tr>
                  <th>Waktu Kunjungan</th>
                  <th>Nama Lengkap</th>
                  <th>Instansi / Lembaga</th>
                  <th>Maksud & Tujuan</th>
                  <th>Pejabat yang Ditemui</th>
                  <th>Kontak</th>
                  <th>Status</th>
                </tr>
              </thead>
              <tbody>
                {guestBook.map((g) => (
                  <tr key={g.id}>
                    <td>
                      <div style={{ fontWeight: 600 }}>{g.date}</div>
                      <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>Pukul {g.time} WIB</div>
                    </td>
                    <td>
                      <strong>{g.name}</strong>
                    </td>
                    <td>{g.institution}</td>
                    <td>{g.purpose}</td>
                    <td>
                      <span className="badge badge-info">{g.meetingWith}</span>
                    </td>
                    <td>{g.phone}</td>
                    <td>
                      <span className="badge badge-success">Diterima</span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}

      {/* TAB 4: NOTULENSI & SK KEPALA SEKOLAH */}
      {activeTab === 'notulensi' && (
        <div className="card-panel">
          <div className="card-body">
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '20px' }}>
              <div style={{ border: '1px solid var(--border-color)', borderRadius: 'var(--radius-md)', padding: '16px' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '10px' }}>
                  <FileText className="text-primary-600" size={20} />
                  <h4 style={{ fontSize: '0.95rem' }}>SK Pembagian Tugas Guru & Pegawai</h4>
                </div>
                <p style={{ fontSize: '0.82rem', color: 'var(--text-muted)', marginBottom: '12px' }}>
                  No: 421.5/002/SK-SMK/VII/2025. Penetapan jam mengajar 68 guru dan pembagian tugas staf TU semester genap.
                </p>
                <span className="badge badge-success">Arsip Sah Aktif</span>
              </div>

              <div style={{ border: '1px solid var(--border-color)', borderRadius: 'var(--radius-md)', padding: '16px' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '10px' }}>
                  <FileCheck className="text-emerald" size={20} />
                  <h4 style={{ fontSize: '0.95rem' }}>SK Panitia Uji Kompetensi Keahlian (UKK)</h4>
                </div>
                <p style={{ fontSize: '0.82rem', color: 'var(--text-muted)', marginBottom: '12px' }}>
                  No: 421.5/045/SK-SMK/II/2026. Susunan panitia penguji internal dan asesor industri mitra DUDI.
                </p>
                <span className="badge badge-success">Arsip Sah Aktif</span>
              </div>

              <div style={{ border: '1px solid var(--border-color)', borderRadius: 'var(--radius-md)', padding: '16px' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '10px' }}>
                  <Calendar className="text-purple" size={20} />
                  <h4 style={{ fontSize: '0.95rem' }}>Notulensi Rapat Koordinasi TU & Pimpinan</h4>
                </div>
                <p style={{ fontSize: '0.82rem', color: 'var(--text-muted)', marginBottom: '12px' }}>
                  Tanggal: 10 Februari 2026. Pembahasan percepatan digitalisasi tata naskah dinas dan persiapan akreditasi.
                </p>
                <span className="badge badge-info">Notulen Selesai</span>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* MODAL TAMBAH SURAT MASUK */}
      {showAddSuratMasuk && (
        <div className="modal-overlay" onClick={() => setShowAddSuratMasuk(false)}>
          <div className="modal-dialog" onClick={(e) => e.stopPropagation()}>
            <div className="modal-header">
              <div className="modal-title">Registrasi Agenda Surat Masuk Baru</div>
              <button className="icon-btn" onClick={() => setShowAddSuratMasuk(false)}>×</button>
            </div>
            <form onSubmit={handleAddSuratMasuk}>
              <div className="modal-body">
                <div className="form-group">
                  <label className="form-label">Nomor Surat Asal</label>
                  <input
                    type="text"
                    required
                    className="form-input"
                    placeholder="Contoh: 421.3/1280-Disdik/Dikmen/2026"
                    value={newSuratMasuk.letterNo}
                    onChange={(e) => setNewSuratMasuk({ ...newSuratMasuk, letterNo: e.target.value })}
                  />
                </div>
                <div className="form-row">
                  <div className="form-group">
                    <label className="form-label">Instansi Pengirim</label>
                    <input
                      type="text"
                      required
                      className="form-input"
                      placeholder="Contoh: Dinas Pendidikan Provinsi / PT Telkom"
                      value={newSuratMasuk.sender}
                      onChange={(e) => setNewSuratMasuk({ ...newSuratMasuk, sender: e.target.value })}
                    />
                  </div>
                  <div className="form-group">
                    <label className="form-label">Tingkat Urgensi</label>
                    <select
                      className="form-select"
                      value={newSuratMasuk.urgency}
                      onChange={(e) => setNewSuratMasuk({ ...newSuratMasuk, urgency: e.target.value })}
                    >
                      <option value="Sangat Segera">Sangat Segera</option>
                      <option value="Penting">Penting</option>
                      <option value="Biasa">Biasa</option>
                    </select>
                  </div>
                </div>
                <div className="form-row">
                  <div className="form-group">
                    <label className="form-label">Tanggal Surat</label>
                    <input
                      type="date"
                      required
                      className="form-input"
                      value={newSuratMasuk.letterDate}
                      onChange={(e) => setNewSuratMasuk({ ...newSuratMasuk, letterDate: e.target.value })}
                    />
                  </div>
                  <div className="form-group">
                    <label className="form-label">Tanggal Diterima TU</label>
                    <input
                      type="date"
                      required
                      className="form-input"
                      value={newSuratMasuk.receivedDate}
                      onChange={(e) => setNewSuratMasuk({ ...newSuratMasuk, receivedDate: e.target.value })}
                    />
                  </div>
                </div>
                <div className="form-group">
                  <label className="form-label">Perihal / Isi Ringkas Surat</label>
                  <textarea
                    rows="2"
                    required
                    className="form-textarea"
                    placeholder="Uraikan perihal isi surat..."
                    value={newSuratMasuk.subject}
                    onChange={(e) => setNewSuratMasuk({ ...newSuratMasuk, subject: e.target.value })}
                  ></textarea>
                </div>
                <div className="form-row">
                  <div className="form-group">
                    <label className="form-label">Diteruskan Kepada (Disposisi)</label>
                    <select
                      className="form-select"
                      value={newSuratMasuk.dispositionTarget}
                      onChange={(e) => setNewSuratMasuk({ ...newSuratMasuk, dispositionTarget: e.target.value })}
                    >
                      <option value="Waka Kurikulum">Waka Kurikulum</option>
                      <option value="Waka Kesiswaan">Waka Kesiswaan</option>
                      <option value="Waka Sarpras">Waka Sarpras</option>
                      <option value="Waka Hubin & Industri">Waka Hubin & Industri</option>
                      <option value="Kepala Tata Usaha (KTU)">Kepala Tata Usaha (KTU)</option>
                    </select>
                  </div>
                  <div className="form-group">
                    <label className="form-label">Instruksi Kepala Sekolah</label>
                    <input
                      type="text"
                      className="form-input"
                      value={newSuratMasuk.dispositionNote}
                      onChange={(e) => setNewSuratMasuk({ ...newSuratMasuk, dispositionNote: e.target.value })}
                    />
                  </div>
                </div>
              </div>
              <div className="modal-footer">
                <button type="button" className="btn btn-secondary" onClick={() => setShowAddSuratMasuk(false)}>
                  Batal
                </button>
                <button type="submit" className="btn btn-primary">
                  Simpan & Agendakan
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* MODAL TAMBAH SURAT KELUAR */}
      {showAddSuratKeluar && (
        <div className="modal-overlay" onClick={() => setShowAddSuratKeluar(false)}>
          <div className="modal-dialog" onClick={(e) => e.stopPropagation()}>
            <div className="modal-header">
              <div className="modal-title">Penerbitan Surat Keluar Resmi TU</div>
              <button className="icon-btn" onClick={() => setShowAddSuratKeluar(false)}>×</button>
            </div>
            <form onSubmit={handleAddSuratKeluar}>
              <div className="modal-body">
                <div className="form-row">
                  <div className="form-group">
                    <label className="form-label">Jenis Naskah Dinas</label>
                    <select
                      className="form-select"
                      value={newSuratKeluar.type}
                      onChange={(e) => setNewSuratKeluar({ ...newSuratKeluar, type: e.target.value })}
                    >
                      <option value="Surat Tugas">Surat Tugas</option>
                      <option value="Surat Keterangan Siswa">Surat Keterangan Siswa</option>
                      <option value="Surat Undangan Rapat">Surat Undangan Rapat</option>
                      <option value="Surat Panggilan Orang Tua">Surat Panggilan Orang Tua</option>
                      <option value="Surat Rekomendasi">Surat Rekomendasi</option>
                    </select>
                  </div>
                  <div className="form-group">
                    <label className="form-label">Tanggal Surat</label>
                    <input
                      type="date"
                      className="form-input"
                      value={newSuratKeluar.date}
                      onChange={(e) => setNewSuratKeluar({ ...newSuratKeluar, date: e.target.value })}
                    />
                  </div>
                </div>
                <div className="form-group">
                  <label className="form-label">Tujuan / Nama Penerima</label>
                  <input
                    type="text"
                    required
                    className="form-input"
                    placeholder="Contoh: Muhammad Rizky Pratama / PT Telkom"
                    value={newSuratKeluar.recipient}
                    onChange={(e) => setNewSuratKeluar({ ...newSuratKeluar, recipient: e.target.value })}
                  />
                </div>
                <div className="form-group">
                  <label className="form-label">Perihal Surat</label>
                  <textarea
                    rows="2"
                    required
                    className="form-textarea"
                    placeholder="Contoh: Surat Keterangan Siswa Aktif Belajar Keperluan Beasiswa"
                    value={newSuratKeluar.subject}
                    onChange={(e) => setNewSuratKeluar({ ...newSuratKeluar, subject: e.target.value })}
                  ></textarea>
                </div>
              </div>
              <div className="modal-footer">
                <button type="button" className="btn btn-secondary" onClick={() => setShowAddSuratKeluar(false)}>
                  Batal
                </button>
                <button type="submit" className="btn btn-primary">
                  Terbitkan & Ambil Nomor Otomatis
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* MODAL TAMBAH TAMU */}
      {showAddGuest && (
        <div className="modal-overlay" onClick={() => setShowAddGuest(false)}>
          <div className="modal-dialog" onClick={(e) => e.stopPropagation()}>
            <div className="modal-header">
              <div className="modal-title">Registrasi Buku Tamu Baru</div>
              <button className="icon-btn" onClick={() => setShowAddGuest(false)}>×</button>
            </div>
            <form onSubmit={handleAddGuest}>
              <div className="modal-body">
                <div className="form-row">
                  <div className="form-group">
                    <label className="form-label">Nama Tamu</label>
                    <input
                      type="text"
                      required
                      className="form-input"
                      placeholder="Nama lengkap tamu..."
                      value={newGuest.name}
                      onChange={(e) => setNewGuest({ ...newGuest, name: e.target.value })}
                    />
                  </div>
                  <div className="form-group">
                    <label className="form-label">Instansi / Lembaga</label>
                    <input
                      type="text"
                      required
                      className="form-input"
                      placeholder="Contoh: BBPPMPV / DUDI Mitra"
                      value={newGuest.institution}
                      onChange={(e) => setNewGuest({ ...newGuest, institution: e.target.value })}
                    />
                  </div>
                </div>
                <div className="form-group">
                  <label className="form-label">Maksud & Keperluan Kunjungan</label>
                  <input
                    type="text"
                    required
                    className="form-input"
                    placeholder="Contoh: Koordinasi program magang vokasi..."
                    value={newGuest.purpose}
                    onChange={(e) => setNewGuest({ ...newGuest, purpose: e.target.value })}
                  />
                </div>
                <div className="form-row">
                  <div className="form-group">
                    <label className="form-label">Bertemu Dengan</label>
                    <select
                      className="form-select"
                      value={newGuest.meetingWith}
                      onChange={(e) => setNewGuest({ ...newGuest, meetingWith: e.target.value })}
                    >
                      <option value="Kepala Sekolah & KTU">Kepala Sekolah & KTU</option>
                      <option value="Waka Hubin & Industri">Waka Hubin & Industri</option>
                      <option value="Waka Kurikulum">Waka Kurikulum</option>
                      <option value="Waka Kesiswaan">Waka Kesiswaan</option>
                    </select>
                  </div>
                  <div className="form-group">
                    <label className="form-label">Nomor WhatsApp / HP</label>
                    <input
                      type="text"
                      className="form-input"
                      placeholder="0812xxxx"
                      value={newGuest.phone}
                      onChange={(e) => setNewGuest({ ...newGuest, phone: e.target.value })}
                    />
                  </div>
                </div>
              </div>
              <div className="modal-footer">
                <button type="button" className="btn btn-secondary" onClick={() => setShowAddGuest(false)}>
                  Batal
                </button>
                <button type="submit" className="btn btn-primary">
                  Simpan Buku Tamu
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* MODAL PRINT DISPOSISI RESMI */}
      {selectedDisposisi && (
        <LembarDisposisiModal
          surat={selectedDisposisi}
          school={school}
          onClose={() => setSelectedDisposisi(null)}
        />
      )}

      {/* MODAL PRINT SURAT KELUAR RESMI */}
      {selectedSuratKeluar && (
        <SuratKeluarModal
          surat={selectedSuratKeluar}
          school={school}
          onClose={() => setSelectedSuratKeluar(null)}
        />
      )}
    </div>
  );
}
