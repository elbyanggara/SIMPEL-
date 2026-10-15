import React, { useState } from 'react';
import {
  Landmark,
  DollarSign,
  Plus,
  Printer,
  Search,
  CheckCircle,
  AlertCircle,
  FileSpreadsheet,
  PieChart,
  Receipt
} from 'lucide-react';
import { KwitansiModal } from '../modals/OfficialDocsModals';

export function Modul5Keuangan({
  financialBos,
  setFinancialBos,
  sppPayments,
  setSppPayments,
  students,
  school
}) {
  const [activeTab, setActiveTab] = useState('bku-bos'); // bku-bos, spp-komite, rkas, pajak
  const [selectedReceipt, setSelectedReceipt] = useState(null);
  const [showAddPayment, setShowAddPayment] = useState(false);
  const [showAddBosExpense, setShowAddBosExpense] = useState(false);

  // Form State Bayar SPP
  const [newPayment, setNewPayment] = useState({
    studentId: students[0]?.id || '',
    month: 'Februari 2026',
    amount: 150000
  });

  // Form State Pengeluaran BOS
  const [newExpense, setNewExpense] = useState({
    description: '',
    amount: 5000000,
    standard: 'Standar Sarana & Prasarana'
  });

  const handlePaySpp = (e) => {
    e.preventDefault();
    const st = students.find((s) => s.id === newPayment.studentId);
    if (!st) return;

    const count = sppPayments.length + 1;
    const item = {
      id: `SPP-${String(count).padStart(2, '0')}`,
      studentName: st.name,
      class: st.class,
      month: newPayment.month,
      amount: Number(newPayment.amount),
      date: new Date().toISOString().split('T')[0],
      receiptNo: `KW-2602-${String(count).padStart(3, '0')}`,
      status: 'Lunas'
    };

    setSppPayments([item, ...sppPayments]);
    setShowAddPayment(false);
    setSelectedReceipt(item); // langsung munculkan kwitansi untuk dicetak
  };

  const handleAddExpense = (e) => {
    e.preventDefault();
    const lastBalance = financialBos[0]?.balance || 500000000;
    const item = {
      id: `BOS-${String(financialBos.length + 1).padStart(3, '0')}`,
      date: new Date().toISOString().split('T')[0],
      type: 'Pengeluaran',
      code: `BOS-OUT-${String(financialBos.length + 1).padStart(2, '0')}`,
      description: newExpense.description,
      amount: Number(newExpense.amount),
      standard: newExpense.standard,
      balance: lastBalance - Number(newExpense.amount)
    };

    setFinancialBos([item, ...financialBos]);
    setShowAddBosExpense(false);
  };

  // Hitung KPI
  const currentBalance = financialBos[0]?.balance || 0;
  const totalReceived = financialBos.filter(f => f.type === 'Penerimaan').reduce((a, b) => a + b.amount, 0);
  const totalExpense = financialBos.filter(f => f.type === 'Pengeluaran').reduce((a, b) => a + b.amount, 0);

  return (
    <div className="module-content">
      {/* Header */}
      <div className="module-header">
        <div className="module-header-info">
          <h2>
            <Landmark className="text-primary-600" size={26} />
            Keuangan & Dana BOS
          </h2>
          <p>
            Pengelolaan Buku Kas Umum (BKU) BOS Reguler/Kinerja, RKAS 8 Standar Pendidikan, dan Penerimaan Iuran Komite / SPP {school.name}.
          </p>
        </div>

        <div className="module-actions">
          {activeTab === 'spp-komite' && (
            <button className="btn btn-primary" onClick={() => setShowAddPayment(true)}>
              <Plus size={16} /> Catat Pembayaran SPP (Kwitansi)
            </button>
          )}
          {activeTab === 'bku-bos' && (
            <button className="btn btn-primary" onClick={() => setShowAddBosExpense(true)}>
              <Plus size={16} /> Input Transaksi Pengeluaran BKU
            </button>
          )}
        </div>
      </div>

      {/* KPI Stats Grid */}
      <div className="stats-grid">
        <div className="stat-card">
          <div className="stat-info">
            <div className="stat-label">Saldo Riil Kas BOS</div>
            <div className="stat-value" style={{ color: 'var(--primary-700)', fontSize: '1.4rem' }}>
              Rp {currentBalance.toLocaleString('id-ID')}
            </div>
            <div className="stat-sub">Rekening Bank BJB Virtual</div>
          </div>
          <div className="stat-icon-wrapper icon-blue">
            <Landmark size={24} />
          </div>
        </div>

        <div className="stat-card">
          <div className="stat-info">
            <div className="stat-label">Total Realisasi Belanja</div>
            <div className="stat-value" style={{ color: 'var(--accent-rose)', fontSize: '1.4rem' }}>
              Rp {totalExpense.toLocaleString('id-ID')}
            </div>
            <div className="stat-sub">Sesuai Juknis BOS Kemendikbud</div>
          </div>
          <div className="stat-icon-wrapper icon-rose">
            <DollarSign size={24} />
          </div>
        </div>

        <div className="stat-card">
          <div className="stat-info">
            <div className="stat-label">Iuran Komite Bulan Ini</div>
            <div className="stat-value" style={{ color: 'var(--accent-emerald)', fontSize: '1.4rem' }}>
              Rp {(sppPayments.length * 150000).toLocaleString('id-ID')}
            </div>
            <div className="stat-sub">{sppPayments.length} Kwitansi Tercetak</div>
          </div>
          <div className="stat-icon-wrapper icon-emerald">
            <Receipt size={24} />
          </div>
        </div>

        <div className="stat-card">
          <div className="stat-info">
            <div className="stat-label">Serapan Anggaran RKAS</div>
            <div className="stat-value">88.5%</div>
            <div className="stat-sub">Efisiensi & Tertib Administrasi</div>
          </div>
          <div className="stat-icon-wrapper icon-teal">
            <PieChart size={24} />
          </div>
        </div>
      </div>

      {/* Tabs */}
      <div className="tab-container">
        <button
          className={`tab-btn ${activeTab === 'bku-bos' ? 'active' : ''}`}
          onClick={() => setActiveTab('bku-bos')}
        >
          <Landmark size={16} /> Buku Kas Umum (BKU) BOS
        </button>
        <button
          className={`tab-btn ${activeTab === 'spp-komite' ? 'active' : ''}`}
          onClick={() => setActiveTab('spp-komite')}
        >
          <Receipt size={16} /> Iuran Komite / SPP & Kwitansi
        </button>
        <button
          className={`tab-btn ${activeTab === 'rkas' ? 'active' : ''}`}
          onClick={() => setActiveTab('rkas')}
        >
          <PieChart size={16} /> RKAS 8 Standar Pendidikan
        </button>
      </div>

      {/* TAB BKU BOS */}
      {activeTab === 'bku-bos' && (
        <div className="card-panel">
          <div className="card-header">
            <div className="card-title">
              <Landmark size={18} /> Buku Kas Umum (BKU) Dana BOS Reguler 2026
            </div>
          </div>
          <div className="table-responsive">
            <table className="data-table">
              <thead>
                <tr>
                  <th>Tanggal & Kode</th>
                  <th>Uraian Kegiatan Belanja</th>
                  <th>Standar Pendidikan</th>
                  <th>Jenis</th>
                  <th style={{ textAlign: 'right' }}>Jumlah (Rp)</th>
                  <th style={{ textAlign: 'right' }}>Saldo Kas (Rp)</th>
                </tr>
              </thead>
              <tbody>
                {financialBos.map((b) => (
                  <tr key={b.id}>
                    <td>
                      <div style={{ fontWeight: 600 }}>{b.date}</div>
                      <div style={{ fontSize: '0.74rem', color: 'var(--text-muted)' }}>{b.code}</div>
                    </td>
                    <td style={{ maxWidth: '300px' }}>
                      <div style={{ fontWeight: 500 }}>{b.description}</div>
                    </td>
                    <td>
                      <span className="badge badge-neutral">{b.standard}</span>
                    </td>
                    <td>
                      <span className={`badge ${b.type === 'Penerimaan' ? 'badge-success' : 'badge-danger'}`}>
                        {b.type}
                      </span>
                    </td>
                    <td style={{ textAlign: 'right', fontWeight: 700, color: b.type === 'Penerimaan' ? '#16a34a' : '#dc2626' }}>
                      {b.type === 'Penerimaan' ? '+' : '-'} Rp {b.amount.toLocaleString('id-ID')}
                    </td>
                    <td style={{ textAlign: 'right', fontWeight: 700 }}>
                      Rp {b.balance.toLocaleString('id-ID')}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}

      {/* TAB SPP / KOMITE */}
      {activeTab === 'spp-komite' && (
        <div className="card-panel">
          <div className="card-header">
            <div className="card-title">
              <Receipt size={18} /> Register Pembayaran Iuran Komite Sekolah
            </div>
          </div>
          <div className="table-responsive">
            <table className="data-table">
              <thead>
                <tr>
                  <th>No. Kwitansi</th>
                  <th>Nama Siswa</th>
                  <th>Kelas</th>
                  <th>Bulan Iuran</th>
                  <th>Tanggal Bayar</th>
                  <th>Nominal</th>
                  <th>Status</th>
                  <th style={{ textAlign: 'center' }}>Cetak Kwitansi</th>
                </tr>
              </thead>
              <tbody>
                {sppPayments.map((p) => (
                  <tr key={p.id}>
                    <td><strong>{p.receiptNo}</strong></td>
                    <td><div style={{ fontWeight: 600 }}>{p.studentName}</div></td>
                    <td><span className="badge badge-neutral">{p.class}</span></td>
                    <td>{p.month}</td>
                    <td>{p.date}</td>
                    <td><strong>Rp {p.amount.toLocaleString('id-ID')}</strong></td>
                    <td>
                      <span className={`badge ${p.status === 'Lunas' ? 'badge-success' : 'badge-warning'}`}>
                        {p.status}
                      </span>
                    </td>
                    <td style={{ textAlign: 'center' }}>
                      {p.status === 'Lunas' && (
                        <button
                          className="btn btn-secondary btn-sm"
                          onClick={() => setSelectedReceipt(p)}
                        >
                          <Printer size={14} /> Cetak Kwitansi
                        </button>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}

      {/* TAB RKAS */}
      {activeTab === 'rkas' && (
        <div className="card-panel">
          <div className="card-header">
            <div className="card-title">
              <PieChart size={18} /> Alokasi Anggaran Berdasarkan 8 Standar Nasional Pendidikan
            </div>
          </div>
          <div className="card-body">
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '16px' }}>
              {[
                { name: '1. Standar Kompetensi Lulusan (Uji UKK & Magang)', pagu: 'Rp 85.000.000', serap: '92%' },
                { name: '2. Standar Isi (Penyelarasan Kurikulum Industri)', pagu: 'Rp 40.000.000', serap: '85%' },
                { name: '3. Standar Proses (Bahan Praktik & KBM)', pagu: 'Rp 180.000.000', serap: '94%' },
                { name: '4. Standar Sarana & Prasarana (Alat Lab & TIK)', pagu: 'Rp 220.000.000', serap: '88%' },
                { name: '5. Standar Pendidik & Tenaga Kependidikan (Diklat)', pagu: 'Rp 50.000.000', serap: '80%' },
                { name: '6. Standar Pengelolaan (Administrasi TU & Rapat)', pagu: 'Rp 65.000.000', serap: '90%' },
                { name: '7. Standar Pembiayaan (Operasional Rutin)', pagu: 'Rp 95.000.000', serap: '95%' },
                { name: '8. Standar Penilaian (CBT & Asesmen Sumatif)', pagu: 'Rp 45.000.000', serap: '88%' }
              ].map((st, i) => (
                <div key={i} style={{ padding: '16px', border: '1px solid var(--border-color)', borderRadius: 'var(--radius-md)' }}>
                  <div style={{ fontWeight: 600, fontSize: '0.88rem' }}>{st.name}</div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '10px', fontSize: '0.82rem' }}>
                    <span>Pagu: <strong>{st.pagu}</strong></span>
                    <span className="badge badge-success">Serapan: {st.serap}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* MODAL BAYAR SPP */}
      {showAddPayment && (
        <div className="modal-overlay" onClick={() => setShowAddPayment(false)}>
          <div className="modal-dialog" onClick={(e) => e.stopPropagation()}>
            <div className="modal-header">
              <div className="modal-title">Input Pembayaran Iuran Komite / SPP</div>
              <button className="icon-btn" onClick={() => setShowAddPayment(false)}>×</button>
            </div>
            <form onSubmit={handlePaySpp}>
              <div className="modal-body">
                <div className="form-group">
                  <label className="form-label">Pilih Siswa</label>
                  <select
                    className="form-select"
                    value={newPayment.studentId}
                    onChange={(e) => setNewPayment({ ...newPayment, studentId: e.target.value })}
                  >
                    {students.map((s) => (
                      <option key={s.id} value={s.id}>
                        {s.name} ({s.class})
                      </option>
                    ))}
                  </select>
                </div>
                <div className="form-row">
                  <div className="form-group">
                    <label className="form-label">Bulan Tagihan</label>
                    <select
                      className="form-select"
                      value={newPayment.month}
                      onChange={(e) => setNewPayment({ ...newPayment, month: e.target.value })}
                    >
                      <option value="Januari 2026">Januari 2026</option>
                      <option value="Februari 2026">Februari 2026</option>
                      <option value="Maret 2026">Maret 2026</option>
                      <option value="April 2026">April 2026</option>
                    </select>
                  </div>
                  <div className="form-group">
                    <label className="form-label">Jumlah Pembayaran (Rp)</label>
                    <input
                      type="number"
                      className="form-input"
                      value={newPayment.amount}
                      onChange={(e) => setNewPayment({ ...newPayment, amount: e.target.value })}
                    />
                  </div>
                </div>
              </div>
              <div className="modal-footer">
                <button type="button" className="btn btn-secondary" onClick={() => setShowAddPayment(false)}>Batal</button>
                <button type="submit" className="btn btn-primary">Terbitkan Kwitansi Resmi</button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* MODAL PENGELUARAN BOS */}
      {showAddBosExpense && (
        <div className="modal-overlay" onClick={() => setShowAddBosExpense(false)}>
          <div className="modal-dialog" onClick={(e) => e.stopPropagation()}>
            <div className="modal-header">
              <div className="modal-title">Input Pengeluaran Buku Kas Umum (BKU) BOS</div>
              <button className="icon-btn" onClick={() => setShowAddBosExpense(false)}>×</button>
            </div>
            <form onSubmit={handleAddExpense}>
              <div className="modal-body">
                <div className="form-group">
                  <label className="form-label">Uraian Transaksi Belanja</label>
                  <textarea
                    rows="2"
                    required
                    className="form-textarea"
                    placeholder="Contoh: Belanja spare part alat praktik bengkel..."
                    value={newExpense.description}
                    onChange={(e) => setNewExpense({ ...newExpense, description: e.target.value })}
                  ></textarea>
                </div>
                <div className="form-row">
                  <div className="form-group">
                    <label className="form-label">Nominal Belanja (Rp)</label>
                    <input
                      type="number"
                      required
                      className="form-input"
                      value={newExpense.amount}
                      onChange={(e) => setNewExpense({ ...newExpense, amount: e.target.value })}
                    />
                  </div>
                  <div className="form-group">
                    <label className="form-label">Standar Pendidikan</label>
                    <select
                      className="form-select"
                      value={newExpense.standard}
                      onChange={(e) => setNewExpense({ ...newExpense, standard: e.target.value })}
                    >
                      <option value="Standar Sarana & Prasarana">Standar Sarana & Prasarana</option>
                      <option value="Standar Proses">Standar Proses</option>
                      <option value="Standar Pengelolaan">Standar Pengelolaan</option>
                      <option value="Standar Pembiayaan">Standar Pembiayaan</option>
                    </select>
                  </div>
                </div>
              </div>
              <div className="modal-footer">
                <button type="button" className="btn btn-secondary" onClick={() => setShowAddBosExpense(false)}>Batal</button>
                <button type="submit" className="btn btn-primary">Simpan ke BKU Kas</button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* MODAL CETAK KWITANSI RESMI */}
      {selectedReceipt && (
        <KwitansiModal
          payment={selectedReceipt}
          school={school}
          onClose={() => setSelectedReceipt(null)}
        />
      )}
    </div>
  );
}
