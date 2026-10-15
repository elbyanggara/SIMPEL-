import React, { useState } from 'react';
import {
  Layers,
  Box,
  QrCode,
  Printer,
  Plus,
  Search,
  CheckCircle,
  AlertTriangle,
  Building,
  Wrench
} from 'lucide-react';

export function Modul6Sarpras({ sarpras, setSarpras, school }) {
  const [activeTab, setActiveTab] = useState('aset'); // aset, qr-label, ruang, peminjaman
  const [selectedQrItem, setSelectedQrItem] = useState(null);
  const [showAddItem, setShowAddItem] = useState(false);

  const [newItem, setNewItem] = useState({
    code: '',
    name: '',
    room: 'Lab Komputer Rekayasa Perangkat Lunak 1',
    category: 'Peralatan TIK',
    condition: 'Baik',
    qty: 1,
    year: 2025,
    source: 'BOS Reguler'
  });

  const handleAddItem = (e) => {
    e.preventDefault();
    const count = sarpras.length + 1;
    const item = {
      id: `AST-${String(count).padStart(3, '0')}`,
      code: newItem.code || `SPR-${Date.now().toString().slice(-4)}`,
      ...newItem,
      qty: Number(newItem.qty)
    };
    setSarpras([item, ...sarpras]);
    setShowAddItem(false);
  };

  return (
    <div className="module-content">
      {/* Header */}
      <div className="module-header">
        <div className="module-header-info">
          <h2>
            <Layers className="text-primary-600" size={26} />
            Sarana Prasarana & Inventaris (SARPRAS)
          </h2>
          <p>
            Manajemen inventaris aset sekolah, master ruang bengkel & lab kejuruan, label QR code barang, dan pemeliharaan alat {school.name}.
          </p>
        </div>

        <div className="module-actions">
          {activeTab === 'aset' && (
            <button className="btn btn-primary" onClick={() => setShowAddItem(true)}>
              <Plus size={16} /> Tambah Barang Inventaris
            </button>
          )}
        </div>
      </div>

      {/* KPI Stats Grid */}
      <div className="stats-grid">
        <div className="stat-card">
          <div className="stat-info">
            <div className="stat-label">Total Aset Tercatat</div>
            <div className="stat-value">{sarpras.length} Unit</div>
            <div className="stat-sub">Semua Ruang & Bengkel</div>
          </div>
          <div className="stat-icon-wrapper icon-blue">
            <Box size={24} />
          </div>
        </div>

        <div className="stat-card">
          <div className="stat-info">
            <div className="stat-label">Kondisi Baik</div>
            <div className="stat-value">{sarpras.filter(s => s.condition === 'Baik').length} Aset</div>
            <div className="stat-sub">Siap KBM Praktik</div>
          </div>
          <div className="stat-icon-wrapper icon-emerald">
            <CheckCircle size={24} />
          </div>
        </div>

        <div className="stat-card">
          <div className="stat-info">
            <div className="stat-label">Perlu Pemeliharaan</div>
            <div className="stat-value">{sarpras.filter(s => s.condition !== 'Baik').length} Aset</div>
            <div className="stat-sub">Jadwal Servis Teknisi</div>
          </div>
          <div className="stat-icon-wrapper icon-amber">
            <Wrench size={24} />
          </div>
        </div>

        <div className="stat-card">
          <div className="stat-info">
            <div className="stat-label">Ruang Bengkel & Lab</div>
            <div className="stat-value">14 Ruang</div>
            <div className="stat-sub">Standar Industri SMK</div>
          </div>
          <div className="stat-icon-wrapper icon-teal">
            <Building size={24} />
          </div>
        </div>
      </div>

      {/* Tabs */}
      <div className="tab-container">
        <button
          className={`tab-btn ${activeTab === 'aset' ? 'active' : ''}`}
          onClick={() => setActiveTab('aset')}
        >
          <Box size={16} /> Buku Inventaris Barang ({sarpras.length})
        </button>
        <button
          className={`tab-btn ${activeTab === 'ruang' ? 'active' : ''}`}
          onClick={() => setActiveTab('ruang')}
        >
          <Building size={16} /> Master Ruang Bengkel & Lab
        </button>
      </div>

      {/* TAB ASET */}
      {activeTab === 'aset' && (
        <div className="card-panel">
          <div className="card-header">
            <div className="card-title">
              <Box size={18} /> Daftar Inventaris Sarana Prasarana Sekolah
            </div>
          </div>
          <div className="table-responsive">
            <table className="data-table">
              <thead>
                <tr>
                  <th>Kode Barang</th>
                  <th>Nama Aset / Peralatan</th>
                  <th>Penempatan Ruang</th>
                  <th>Jumlah</th>
                  <th>Kondisi</th>
                  <th>Sumber Dana</th>
                  <th style={{ textAlign: 'center' }}>Label QR</th>
                </tr>
              </thead>
              <tbody>
                {sarpras.map((item) => (
                  <tr key={item.id}>
                    <td>
                      <strong>{item.code}</strong>
                      <div style={{ fontSize: '0.72rem', color: 'var(--text-muted)' }}>ID: {item.id}</div>
                    </td>
                    <td>
                      <div style={{ fontWeight: 600 }}>{item.name}</div>
                      <div style={{ fontSize: '0.74rem', color: 'var(--text-muted)' }}>Kategori: {item.category} (Th. {item.year})</div>
                    </td>
                    <td>{item.room}</td>
                    <td><strong>{item.qty} Unit</strong></td>
                    <td>
                      <span className={`badge ${item.condition === 'Baik' ? 'badge-success' : 'badge-warning'}`}>
                        {item.condition}
                      </span>
                    </td>
                    <td><span className="badge badge-purple">{item.source}</span></td>
                    <td style={{ textAlign: 'center' }}>
                      <button
                        className="btn btn-secondary btn-sm"
                        onClick={() => setSelectedQrItem(item)}
                      >
                        <QrCode size={14} /> Cetak QR
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}

      {/* TAB RUANG */}
      {activeTab === 'ruang' && (
        <div className="card-panel">
          <div className="card-header">
            <div className="card-title">
              <Building size={18} /> Ruang Praktik Kejuruan & Teori
            </div>
          </div>
          <div className="card-body">
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '16px' }}>
              {[
                { name: 'Lab Komputer Rekayasa Perangkat Lunak 1', luas: '96 m²', kapasitas: '36 Siswa', pc: '36 PC Core i7', status: 'Sangat Layak' },
                { name: 'Bengkel Otomotif TKRO Blok B', luas: '180 m²', kapasitas: '40 Siswa', pc: '4 Car Lift + Engine Stand', status: 'Sangat Layak' },
                { name: 'Lab Cisco Jaringan Komputer TJKT', luas: '96 m²', kapasitas: '36 Siswa', pc: 'Server Rack & Fiber Splicer', status: 'Sangat Layak' },
                { name: 'Studio Fotografi & Grafis DKV', luas: '80 m²', kapasitas: '32 Siswa', pc: 'Kamera Sony & Pen Tablet', status: 'Sangat Layak' }
              ].map((r, i) => (
                <div key={i} style={{ padding: '16px', border: '1px solid var(--border-color)', borderRadius: 'var(--radius-md)' }}>
                  <div style={{ fontWeight: 700, fontSize: '0.92rem' }}>{r.name}</div>
                  <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)', marginTop: '4px' }}>
                    Luas: {r.luas} | Kapasitas: {r.kapasitas}
                  </div>
                  <div style={{ fontSize: '0.8rem', color: 'var(--primary-700)', marginTop: '4px', fontWeight: 600 }}>
                    Alat Utama: {r.pc}
                  </div>
                  <div style={{ marginTop: '10px' }}>
                    <span className="badge badge-success">{r.status}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* MODAL PRINT QR CODE LABEL */}
      {selectedQrItem && (
        <div className="modal-overlay" onClick={() => setSelectedQrItem(null)}>
          <div className="modal-dialog" onClick={(e) => e.stopPropagation()}>
            <div className="modal-header">
              <div className="modal-title">Format Stiker Label Inventaris Ber-QR Code</div>
              <button className="icon-btn" onClick={() => setSelectedQrItem(null)}>×</button>
            </div>
            <div className="modal-body" style={{ background: '#f8fafc', padding: '24px', display: 'flex', justifyContent: 'center' }}>
              <div
                style={{
                  width: '320px',
                  background: '#ffffff',
                  border: '2px solid #000',
                  padding: '16px',
                  borderRadius: '6px',
                  fontFamily: 'monospace'
                }}
              >
                <div style={{ textAlign: 'center', borderBottom: '1.5px solid #000', paddingBottom: '6px', marginBottom: '10px' }}>
                  <div style={{ fontWeight: 'bold', fontSize: '9pt' }}>INVENTARIS RESMI {school.name}</div>
                  <div style={{ fontSize: '7.5pt' }}>SARANA & PRASARANA SEKOLAH</div>
                </div>

                <div style={{ display: 'flex', gap: '12px', alignItems: 'center' }}>
                  {/* Simulasi Kotak QR Code */}
                  <div style={{ width: '90px', height: '90px', background: '#000', padding: '6px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <div style={{ width: '100%', height: '100%', background: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                      <QrCode size={64} color="#000" />
                    </div>
                  </div>

                  <div style={{ fontSize: '8pt', flex: 1 }}>
                    <div>KODE ASET:</div>
                    <div style={{ fontWeight: 'bold', fontSize: '9pt' }}>{selectedQrItem.code}</div>
                    <div style={{ marginTop: '4px' }}>NAMA BARANG:</div>
                    <div style={{ fontWeight: 'bold' }}>{selectedQrItem.name.slice(0, 26)}...</div>
                    <div style={{ marginTop: '4px' }}>LOKASI:</div>
                    <div>{selectedQrItem.room.slice(0, 24)}</div>
                  </div>
                </div>

                <div style={{ textAlign: 'center', marginTop: '10px', fontSize: '7.5pt', borderTop: '1px solid #ccc', paddingTop: '4px' }}>
                  Dilarang Menghilangkan / Memindahkan Label Ini
                </div>
              </div>
            </div>
            <div className="modal-footer">
              <button className="btn btn-secondary" onClick={() => setSelectedQrItem(null)}>Tutup</button>
              <button className="btn btn-primary" onClick={() => window.print()}>
                <Printer size={16} /> Cetak Stiker QR Label
              </button>
            </div>
          </div>
        </div>
      )}

      {/* MODAL TAMBAH ASET */}
      {showAddItem && (
        <div className="modal-overlay" onClick={() => setShowAddItem(false)}>
          <div className="modal-dialog" onClick={(e) => e.stopPropagation()}>
            <div className="modal-header">
              <div className="modal-title">Tambah Aset Sarana Prasarana Baru</div>
              <button className="icon-btn" onClick={() => setShowAddItem(false)}>×</button>
            </div>
            <form onSubmit={handleAddItem}>
              <div className="modal-body">
                <div className="form-group">
                  <label className="form-label">Nama Aset / Peralatan</label>
                  <input
                    type="text"
                    required
                    className="form-input"
                    placeholder="Contoh: Mesin Bubut CNC Mini..."
                    value={newItem.name}
                    onChange={(e) => setNewItem({ ...newItem, name: e.target.value })}
                  />
                </div>
                <div className="form-row">
                  <div className="form-group">
                    <label className="form-label">Kode Barang</label>
                    <input
                      type="text"
                      className="form-input"
                      placeholder="Auto / SPR-2026-..."
                      value={newItem.code}
                      onChange={(e) => setNewItem({ ...newItem, code: e.target.value })}
                    />
                  </div>
                  <div className="form-group">
                    <label className="form-label">Jumlah Unit</label>
                    <input
                      type="number"
                      className="form-input"
                      value={newItem.qty}
                      onChange={(e) => setNewItem({ ...newItem, qty: e.target.value })}
                    />
                  </div>
                </div>
                <div className="form-row">
                  <div className="form-group">
                    <label className="form-label">Ruang Penempatan</label>
                    <select
                      className="form-select"
                      value={newItem.room}
                      onChange={(e) => setNewItem({ ...newItem, room: e.target.value })}
                    >
                      <option value="Lab Komputer Rekayasa Perangkat Lunak 1">Lab Komputer RPL 1</option>
                      <option value="Bengkel Otomotif TKRO Blok B">Bengkel Otomotif Blok B</option>
                      <option value="Lab Jaringan Komputer TJKT">Lab Cisco TJKT</option>
                      <option value="Perpustakaan Utama">Perpustakaan Utama</option>
                    </select>
                  </div>
                  <div className="form-group">
                    <label className="form-label">Sumber Dana</label>
                    <select
                      className="form-select"
                      value={newItem.source}
                      onChange={(e) => setNewItem({ ...newItem, source: e.target.value })}
                    >
                      <option value="BOS Reguler">BOS Reguler</option>
                      <option value="BOS Kinerja Vokasi">BOS Kinerja Vokasi</option>
                      <option value="DAK Fisik Vokasi">DAK Fisik Vokasi</option>
                      <option value="Komite Sekolah">Komite Sekolah</option>
                    </select>
                  </div>
                </div>
              </div>
              <div className="modal-footer">
                <button type="button" className="btn btn-secondary" onClick={() => setShowAddItem(false)}>Batal</button>
                <button type="submit" className="btn btn-primary">Simpan ke Inventaris</button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
