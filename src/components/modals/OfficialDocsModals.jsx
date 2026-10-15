import React from 'react';
import { Printer, X, CheckCircle, ShieldCheck } from 'lucide-react';

// Modal Lembar Disposisi Surat Masuk (Sesuai Format Tata Usaha Pemerintah / SMK)
export function LembarDisposisiModal({ surat, school, onClose }) {
  if (!surat) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-dialog wide" onClick={(e) => e.stopPropagation()}>
        <div className="modal-header">
          <div className="modal-title" style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <Printer size={18} className="text-primary-600" />
            <span>Format Cetak: Lembar Disposisi Surat Dinas</span>
          </div>
          <button className="icon-btn" onClick={onClose}><X size={18} /></button>
        </div>

        <div className="modal-body" style={{ background: '#f8fafc', padding: '20px' }}>
          <div className="official-doc" id="printable-disposisi">
            {/* Kop Surat Resmi */}
            <div className="official-kop">
              <div className="kop-instansi">PEMERINTAH DAERAH PROVINSI JAWA BARAT<br />DINAS PENDIDIKAN</div>
              <div className="kop-sekolah">{school.name}</div>
              <div className="kop-alamat">{school.address} | Telp: {school.phone} | Email: {school.email}</div>
            </div>

            <div className="doc-title-block">
              <div className="doc-title">LEMBAR DISPOSISI KEPALA SEKOLAH</div>
              <div className="doc-number">Nomor Agenda: <strong>{surat.agendaNo}</strong></div>
            </div>

            <table style={{ width: '100%', borderCollapse: 'collapse', marginBottom: '16px', fontSize: '10pt' }} border="1" cellPadding="6">
              <tbody>
                <tr>
                  <td style={{ width: '25%', fontWeight: 'bold' }}>Nomor Surat Asal</td>
                  <td style={{ width: '25%' }}>{surat.letterNo}</td>
                  <td style={{ width: '25%', fontWeight: 'bold' }}>Tingkat Keamanan</td>
                  <td style={{ width: '25%' }}><strong style={{ color: surat.urgency === 'Sangat Segera' ? '#b91c1c' : '#000' }}>{surat.urgency}</strong></td>
                </tr>
                <tr>
                  <td style={{ fontWeight: 'bold' }}>Tanggal Surat</td>
                  <td>{surat.letterDate}</td>
                  <td style={{ fontWeight: 'bold' }}>Tanggal Diterima TU</td>
                  <td>{surat.receivedDate}</td>
                </tr>
                <tr>
                  <td style={{ fontWeight: 'bold' }}>Asal Instansi / Pengirim</td>
                  <td colSpan="3"><strong>{surat.sender}</strong></td>
                </tr>
                <tr>
                  <td style={{ fontWeight: 'bold' }}>Perihal / Isi Ringkas</td>
                  <td colSpan="3">{surat.subject}</td>
                </tr>
              </tbody>
            </table>

            <table style={{ width: '100%', borderCollapse: 'collapse', marginBottom: '20px', fontSize: '10pt' }} border="1" cellPadding="8">
              <thead>
                <tr style={{ background: '#f1f5f9' }}>
                  <th style={{ width: '50%', textAlign: 'left' }}>Diteruskan Kepada (Disposisi):</th>
                  <th style={{ width: '50%', textAlign: 'left' }}>Instruksi / Catatan Pimpinan:</th>
                </tr>
              </thead>
              <tbody>
                <tr style={{ height: '110px', verticalAlign: 'top' }}>
                  <td>
                    <div style={{ fontWeight: 'bold', fontSize: '10.5pt', color: '#1e3a8a' }}>
                      ☑ {surat.dispositionTarget || 'Waka Kurikulum / KTU'}
                    </div>
                    <ul style={{ marginTop: '8px', paddingLeft: '18px', fontSize: '9pt', color: '#334155' }}>
                      <li>[✓] Untuk ditindaklanjuti</li>
                      <li>[✓] Hadiri / Wakili</li>
                      <li>[ ] Simpan / Arsipkan</li>
                      <li>[ ] Buat draft balasan</li>
                    </ul>
                  </td>
                  <td>
                    <div style={{ fontStyle: 'italic', background: '#f8fafc', padding: '8px', borderLeft: '3px solid #3b82f6' }}>
                      "{surat.dispositionNote || 'Pelajari dan segera tindak lanjuti sesuai tupoksi.'}"
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>

            {/* Tanda Tangan */}
            <div className="doc-signatures">
              <div className="sig-box">
                <div>Penerima Disposisi,</div>
                <div className="sig-space"></div>
                <div style={{ fontWeight: 'bold', textDecoration: 'underline' }}>{surat.dispositionTarget?.split('&')[0] || 'Koordinator Pelaksana'}</div>
                <div>NIP. ........................................</div>
              </div>

              <div className="sig-box">
                <div>Kota Bandung, {surat.receivedDate}</div>
                <div>Kepala Sekolah,</div>
                <div className="sig-space"></div>
                <div style={{ fontWeight: 'bold', textDecoration: 'underline' }}>{school.headmaster.name}</div>
                <div>NIP. {school.headmaster.nip}</div>
              </div>
            </div>
          </div>
        </div>

        <div className="modal-footer">
          <button className="btn btn-secondary" onClick={onClose}>Tutup</button>
          <button className="btn btn-primary" onClick={() => window.print()}>
            <Printer size={16} /> Cetak Lembar Disposisi
          </button>
        </div>
      </div>
    </div>
  );
}

// Modal Surat Keluar Resmi (Kop Surat & Penomoran Otomatis TU)
export function SuratKeluarModal({ surat, school, onClose }) {
  if (!surat) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-dialog wide" onClick={(e) => e.stopPropagation()}>
        <div className="modal-header">
          <div className="modal-title" style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <Printer size={18} className="text-primary-600" />
            <span>Format Cetak: Surat Keluar Resmi (TU)</span>
          </div>
          <button className="icon-btn" onClick={onClose}><X size={18} /></button>
        </div>

        <div className="modal-body" style={{ background: '#f8fafc', padding: '20px' }}>
          <div className="official-doc" id="printable-surat-keluar">
            <div className="official-kop">
              <div className="kop-instansi">PEMERINTAH DAERAH PROVINSI JAWA BARAT<br />DINAS PENDIDIKAN</div>
              <div className="kop-sekolah">{school.name}</div>
              <div className="kop-alamat">{school.address} | Telp: {school.phone} | Email: {school.email}</div>
            </div>

            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '16px', fontSize: '10.5pt' }}>
              <div>
                <div>Nomor : <strong>{surat.letterNo}</strong></div>
                <div>Lamp. : - (Satu Berkas)</div>
                <div>Perihal: <strong>{surat.subject}</strong></div>
              </div>
              <div style={{ textAlign: 'right' }}>
                <div>Kota Bandung, {surat.date}</div>
              </div>
            </div>

            <div style={{ margin: '20px 0 16px', fontSize: '10.5pt' }}>
              <div>Kepada Yth.</div>
              <div style={{ fontWeight: 'bold' }}>{surat.recipient}</div>
              <div>di Tempat</div>
            </div>

            <div style={{ textAlign: 'justify', fontSize: '10.5pt', lineHeight: '1.6' }}>
              <p style={{ marginBottom: '12px' }}>Dengan hormat,</p>
              <p style={{ marginBottom: '12px' }}>
                Sehubungan dengan program kerja tahun ajaran {school.activeYear} serta dalam rangka meningkatkan mutu pelayanan pendidikan kejuruan, bersama ini Kepala {school.name} menyampaikan dokumen penugasan/pemberitahuan sebagaimana tersebut pada perihal surat di atas.
              </p>
              <p style={{ marginBottom: '12px' }}>
                Demikian surat ini disampaikan untuk dapat dipergunakan sebagaimana mestinya dan dilaksanakan dengan penuh rasa tanggung jawab.
              </p>
            </div>

            <div className="doc-signatures">
              <div className="sig-box" style={{ textAlign: 'left', fontSize: '9pt', color: '#475569' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                  <ShieldCheck size={18} color="#16a34a" />
                  <strong>E-Verifikasi TU Terintegrasi</strong>
                </div>
                <div>Dokumen Sah Diterbitkan Sistem SIMPEL</div>
                <div>ID: {surat.id} | Valid</div>
              </div>

              <div className="sig-box">
                <div>Kota Bandung, {surat.date}</div>
                <div>Kepala Sekolah,</div>
                <div className="sig-space"></div>
                <div style={{ fontWeight: 'bold', textDecoration: 'underline' }}>{surat.signer || school.headmaster.name}</div>
                <div>NIP. {school.headmaster.nip}</div>
              </div>
            </div>
          </div>
        </div>

        <div className="modal-footer">
          <button className="btn btn-secondary" onClick={onClose}>Tutup</button>
          <button className="btn btn-primary" onClick={() => window.print()}>
            <Printer size={16} /> Cetak Surat Dinas
          </button>
        </div>
      </div>
    </div>
  );
}

// Modal Kwitansi Pembayaran SPP / Komite
export function KwitansiModal({ payment, school, onClose }) {
  if (!payment) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-dialog" onClick={(e) => e.stopPropagation()}>
        <div className="modal-header">
          <div className="modal-title" style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <Printer size={18} />
            <span>Kwitansi Pembayaran Komite / SPP</span>
          </div>
          <button className="icon-btn" onClick={onClose}><X size={18} /></button>
        </div>

        <div className="modal-body" style={{ background: '#f8fafc', padding: '16px' }}>
          <div className="official-doc" style={{ padding: '24px' }}>
            <div style={{ borderBottom: '2px solid #000', paddingBottom: '8px', marginBottom: '14px', textAlign: 'center' }}>
              <div style={{ fontSize: '11pt', fontWeight: 'bold' }}>{school.name}</div>
              <div style={{ fontSize: '8.5pt' }}>{school.address}</div>
              <div style={{ fontSize: '12pt', fontWeight: 'bold', marginTop: '6px', textDecoration: 'underline' }}>
                BUKTI PEMBAYARAN IURAN KOMITE / SPP
              </div>
              <div style={{ fontSize: '9pt' }}>No. Kwitansi: <strong>{payment.receiptNo}</strong></div>
            </div>

            <table style={{ width: '100%', fontSize: '10pt', marginBottom: '16px' }} cellPadding="4">
              <tbody>
                <tr>
                  <td style={{ width: '35%' }}>Telah Terima Dari</td>
                  <td>: <strong>{payment.studentName}</strong></td>
                </tr>
                <tr>
                  <td>Kelas / Jurusan</td>
                  <td>: {payment.class}</td>
                </tr>
                <tr>
                  <td>Untuk Pembayaran</td>
                  <td>: Iuran Komite Sekolah Bulan {payment.month}</td>
                </tr>
                <tr>
                  <td>Jumlah Pembayaran</td>
                  <td>: <strong style={{ fontSize: '11pt', color: '#1e3a8a' }}>Rp {payment.amount.toLocaleString('id-ID')}</strong></td>
                </tr>
                <tr>
                  <td>Terbilang</td>
                  <td>: <em>(Seratus Lima Puluh Ribu Rupiah)</em></td>
                </tr>
                <tr>
                  <td>Status Transaksi</td>
                  <td>: <span style={{ color: '#16a34a', fontWeight: 'bold' }}>LUNAS - VALID</span></td>
                </tr>
              </tbody>
            </table>

            <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '20px', fontSize: '9.5pt' }}>
              <div style={{ textAlign: 'center', width: '150px' }}>
                <div>Penyetor / Siswa,</div>
                <div style={{ height: '40px' }}></div>
                <div>( {payment.studentName.split(' ')[0]} )</div>
              </div>
              <div style={{ textAlign: 'center', width: '180px' }}>
                <div>Bandung, {payment.date || '15 Februari 2026'}</div>
                <div>Bendahara Sekolah,</div>
                <div style={{ height: '40px' }}></div>
                <div style={{ fontWeight: 'bold', textDecoration: 'underline' }}>Nur Laila Fitri, S.E.</div>
              </div>
            </div>
          </div>
        </div>

        <div className="modal-footer">
          <button className="btn btn-secondary" onClick={onClose}>Tutup</button>
          <button className="btn btn-primary" onClick={() => window.print()}>
            <Printer size={16} /> Cetak Kwitansi
          </button>
        </div>
      </div>
    </div>
  );
}
