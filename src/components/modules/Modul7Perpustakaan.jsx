import React, { useState } from 'react';
import {
  BookMarked,
  BookOpen,
  Search,
  Plus,
  Printer,
  CheckCircle,
  Clock,
  FileText,
  Bookmark
} from 'lucide-react';

export function Modul7Perpustakaan({ libraryBooks, setLibraryBooks, school }) {
  const [activeTab, setActiveTab] = useState('katalog'); // katalog, sirkulasi, e-book
  const [searchBook, setSearchBook] = useState('');
  const [readingEbook, setReadingEbook] = useState(null);

  const filteredBooks = libraryBooks.filter((b) =>
    b.title.toLowerCase().includes(searchBook.toLowerCase()) ||
    b.author.toLowerCase().includes(searchBook.toLowerCase()) ||
    b.category.toLowerCase().includes(searchBook.toLowerCase())
  );

  return (
    <div className="module-content">
      {/* Header */}
      <div className="module-header">
        <div className="module-header-info">
          <h2>
            <BookMarked className="text-primary-600" size={26} />
            Perpustakaan Digital (SIMPUS)
          </h2>
          <p>
            Katalog buku ber-ISBN & DDC, sirkulasi peminjaman barcode, hitungan denda otomatis, dan perpustakaan digital e-book {school.name}.
          </p>
        </div>
      </div>

      {/* Stats Grid */}
      <div className="stats-grid">
        <div className="stat-card">
          <div className="stat-info">
            <div className="stat-label">Total Judul Buku</div>
            <div className="stat-value">{libraryBooks.length} Judul</div>
            <div className="stat-sub">Vokasi & Buku Umum</div>
          </div>
          <div className="stat-icon-wrapper icon-blue">
            <BookMarked size={24} />
          </div>
        </div>

        <div className="stat-card">
          <div className="stat-info">
            <div className="stat-label">Buku Tersedia di Rak</div>
            <div className="stat-value">57 Eks</div>
            <div className="stat-sub">Siap Dipinjam Siswa</div>
          </div>
          <div className="stat-icon-wrapper icon-emerald">
            <Bookmark size={24} />
          </div>
        </div>

        <div className="stat-card">
          <div className="stat-info">
            <div className="stat-label">Sedang Dipinjam</div>
            <div className="stat-value">18 Siswa</div>
            <div className="stat-sub">Batas Waktu 7 Hari</div>
          </div>
          <div className="stat-icon-wrapper icon-amber">
            <Clock size={24} />
          </div>
        </div>

        <div className="stat-card">
          <div className="stat-info">
            <div className="stat-label">Koleksi E-Book</div>
            <div className="stat-value">320 Modul</div>
            <div className="stat-sub">Akses Gratis Siswa & Guru</div>
          </div>
          <div className="stat-icon-wrapper icon-purple">
            <BookOpen size={24} />
          </div>
        </div>
      </div>

      {/* Tabs */}
      <div className="tab-container">
        <button
          className={`tab-btn ${activeTab === 'katalog' ? 'active' : ''}`}
          onClick={() => setActiveTab('katalog')}
        >
          <BookMarked size={16} /> Katalog Buku Perpustakaan ({libraryBooks.length})
        </button>
        <button
          className={`tab-btn ${activeTab === 'sirkulasi' ? 'active' : ''}`}
          onClick={() => setActiveTab('sirkulasi')}
        >
          <Clock size={16} /> Transaksi Sirkulasi & Denda
        </button>
        <button
          className={`tab-btn ${activeTab === 'e-book' ? 'active' : ''}`}
          onClick={() => setActiveTab('e-book')}
        >
          <BookOpen size={16} /> E-Library / Modul Digital
        </button>
      </div>

      {/* TAB KATALOG */}
      {activeTab === 'katalog' && (
        <div className="card-panel">
          <div className="card-header">
            <div className="card-title">
              <BookMarked size={18} /> Koleksi Buku Perpustakaan SMK
            </div>
            <div className="search-bar" style={{ width: '250px' }}>
              <Search size={14} />
              <input
                type="text"
                placeholder="Cari judul, pengarang, ISBN..."
                value={searchBook}
                onChange={(e) => setSearchBook(e.target.value)}
              />
            </div>
          </div>
          <div className="table-responsive">
            <table className="data-table">
              <thead>
                <tr>
                  <th>ISBN & ID</th>
                  <th>Judul Buku</th>
                  <th>Pengarang & Penerbit</th>
                  <th>Kategori</th>
                  <th>Stok Total</th>
                  <th>Tersedia</th>
                  <th>Lokasi Rak</th>
                </tr>
              </thead>
              <tbody>
                {filteredBooks.map((b) => (
                  <tr key={b.id}>
                    <td>
                      <strong>{b.isbn}</strong>
                      <div style={{ fontSize: '0.72rem', color: 'var(--text-muted)' }}>{b.id}</div>
                    </td>
                    <td>
                      <div style={{ fontWeight: 600, color: 'var(--primary-700)' }}>{b.title}</div>
                    </td>
                    <td>
                      <div>{b.author}</div>
                      <div style={{ fontSize: '0.74rem', color: 'var(--text-muted)' }}>{b.publisher}</div>
                    </td>
                    <td><span className="badge badge-purple">{b.category}</span></td>
                    <td>{b.totalStock} Eks</td>
                    <td><strong style={{ color: '#16a34a' }}>{b.availableStock} Eks</strong></td>
                    <td><span className="badge badge-neutral">{b.shelf}</span></td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}

      {/* TAB SIRKULASI */}
      {activeTab === 'sirkulasi' && (
        <div className="card-panel">
          <div className="card-header">
            <div className="card-title">
              <Clock size={18} /> Sirkulasi Peminjaman Buku Siswa
            </div>
          </div>
          <div className="table-responsive">
            <table className="data-table">
              <thead>
                <tr>
                  <th>Nama Peminjam</th>
                  <th>Kelas</th>
                  <th>Judul Buku</th>
                  <th>Tgl Pinjam</th>
                  <th>Batas Kembali</th>
                  <th>Status & Denda</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td><strong>Muhammad Rizky Pratama</strong></td>
                  <td>XII PPLG 1</td>
                  <td>Pemrograman Web Modern React & Node.js</td>
                  <td>2026-02-10</td>
                  <td>2026-02-17</td>
                  <td><span className="badge badge-success">Aktif (Tepat Waktu)</span></td>
                </tr>
                <tr>
                  <td><strong>Fajar Dwi Saputra</strong></td>
                  <td>XI TKRO 2</td>
                  <td>Teknik Pemeliharaan Kelistrikan Kendaraan</td>
                  <td>2026-02-02</td>
                  <td>2026-02-09</td>
                  <td><span className="badge badge-danger">Terlambat 6 Hari (Denda Rp 6.000)</span></td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      )}

      {/* TAB E-BOOK */}
      {activeTab === 'e-book' && (
        <div className="card-panel">
          <div className="card-header">
            <div className="card-title">
              <BookOpen size={18} /> Modul Digital Pembelajaran Vokasi
            </div>
          </div>
          <div className="card-body">
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '16px' }}>
              {[
                { title: "Modul Ajar Pemrograman Web & API", author: "Tim Guru PPLG", pages: "142 Halaman", major: "PPLG" },
                { title: "Buku Manual Diagnosis Engine EFI Avanza", author: "Astra Training Center", pages: "210 Halaman", major: "TKRO" },
                { title: "Panduan Konfigurasi Mikrotik & Cisco", author: "Tim Jaringan TJKT", pages: "98 Halaman", major: "TJKT" }
              ].map((eb, idx) => (
                <div key={idx} style={{ padding: '16px', border: '1px solid var(--border-color)', borderRadius: 'var(--radius-md)' }}>
                  <span className="badge badge-purple" style={{ marginBottom: '8px' }}>{eb.major}</span>
                  <div style={{ fontWeight: 700, fontSize: '0.92rem', marginTop: '4px' }}>{eb.title}</div>
                  <div style={{ fontSize: '0.78rem', color: 'var(--text-muted)', marginTop: '4px' }}>
                    {eb.author} • {eb.pages}
                  </div>
                  <button
                    className="btn btn-secondary btn-sm"
                    style={{ marginTop: '12px', width: '100%' }}
                    onClick={() => setReadingEbook(eb)}
                  >
                    <BookOpen size={14} /> Baca E-Book Online
                  </button>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* MODAL EBOOK READER */}
      {readingEbook && (
        <div className="modal-overlay" onClick={() => setReadingEbook(null)}>
          <div className="modal-dialog wide" onClick={(e) => e.stopPropagation()}>
            <div className="modal-header">
              <div className="modal-title">E-Library Reader: {readingEbook.title}</div>
              <button className="icon-btn" onClick={() => setReadingEbook(null)}>×</button>
            </div>
            <div className="modal-body" style={{ background: '#334155', color: '#fff', minHeight: '400px', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
              <div style={{ maxWidth: '520px', background: '#fff', color: '#000', padding: '36px', borderRadius: '8px', boxShadow: '0 10px 25px rgba(0,0,0,0.5)', width: '100%' }}>
                <h3 style={{ borderBottom: '2px solid #000', paddingBottom: '8px', marginBottom: '16px' }}>{readingEbook.title}</h3>
                <p style={{ fontSize: '0.9rem', lineHeight: '1.6', marginBottom: '14px' }}>
                  <strong>Bab 1: Pendahuluan dan Standar Industri</strong><br />
                  Pendidikan vokasi SMK bertujuan untuk menghasilkan lulusan yang siap kerja, cerdas berkarakter, dan kompeten secara teknis sesuai kebutuhan industri modern...
                </p>
                <div style={{ textAlign: 'center', marginTop: '24px', fontSize: '0.8rem', color: '#64748b' }}>
                  Halaman 1 dari 142 • E-Book Resmi SIMPEL {school.name}
                </div>
              </div>
            </div>
            <div className="modal-footer">
              <button className="btn btn-secondary" onClick={() => setReadingEbook(null)}>Tutup Reader</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
