# 🏫 SIMPEL - Sistem Informasi Manajemen Pelayanan Sekolah / ERP SMK Ardjuna 2 Malang

Aplikasi web terpadu **Enterprise Resource Planning (ERP)** dan **Sistem Informasi Manajemen Pelayanan Sekolah (SIMPEL)** yang dirancang khusus untuk kebutuhan administrasi menyeluruh **SMK ARDJUNA 2 MALANG** (Yayasan Ardjuna Bina Taruna) — *A Multi-Skills Based School*.

---

## 🚀 Cara Menjalankan Proyek

Aplikasi saat ini telah aktif dan berjalan di server lokal:

```bash
# Jalankan development server
npm run dev

# Aplikasi dapat diakses melalui browser pada:
http://localhost:5173/
```

---

## 🏛️ Profil & Identitas Lembaga
- **Nama Sekolah**: SMK ARDJUNA 2 MALANG
- **Yayasan**: Yayasan Ardjuna Bina Taruna
- **NPSN**: 20533649
- **Akreditasi**: B (Terakreditasi Baik)
- **Motto Khas**: *A Multi-Skills Based School (Sekolah Berbasis Multi-Keterampilan)*
- **Visi**: *"Disenangi, mandiri, berprestasi, dan mantap dalam IMTAQ."*
- **Alamat**: Jl. Teluk Pelabuhan Ratu No. 41, Kel. Arjosari, Kec. Blimbing, Kota Malang, Jawa Timur 65126 (Dekat Terminal Arjosari)
- **Telepon**: (0341) 492423

---

## 💼 3 Program Keahlian Unggulan:
1. **Manajemen Perkantoran dan Layanan Bisnis (MPLB / OTKP)**
2. **Bisnis Daring dan Pemasaran (BDP / Digital Marketing & Ritel)**
3. **Akuntansi dan Keuangan Lembaga (AKL / Komputer Akuntansi)**

---

## 🌟 Program Khas "Multi-Skills":
Pelatihan keterampilan tambahan gratis:
- Barista & Hospitality Kopi Dasar
- Tata Boga & Kuliner Kreatif
- Tata Busana & Menjahit Fesyen
- Pemeliharaan Ringan Sepeda Motor

Untuk memproduksi bundle siap deploy:
```bash
npm run build
npm run preview
```

---

## 🏛️ Arsitektur 12 Modul Terpadu

```text
┌───────────────────────────────────────────────────────────────┐
│        SIMPEL ERP - SMK NEGERI 1 TEKNOLOGI & REKAYASA        │
├───────────────────────────────────────────────────────────────┤
│  Modul 1: Kesiswaan & PPDB Online                             │
│  Modul 2: Kepegawaian & SIMPEG PTK                            │
│  Modul 3: Akademik & Kurikulum Merdeka (E-Rapor & CBT)        │
│  Modul 4: Tata Usaha & Persuratan ⭐ (Inti KTU)               │
│  Modul 5: Keuangan & Dana BOS (BKU & Kwitansi SPP)            │
│  Modul 6: Sarana Prasarana & Inventaris (Label QR Code)       │
│  Modul 7: Perpustakaan Digital (SIMPUS & E-Book)              │
│  Modul 8: PKL & Hubungan Industri ⭐ (Khas Vokasi SMK)        │
│  Modul 9: Bimbingan Konseling (BK & Home Visit)               │
│  Modul 10: Website Profil & Portal PPDB Publik                │
│  Modul 11: Laporan Eksekutif & 8 Standar Akreditasi ⭐        │
│  Modul 12: Pengaturan, Multi-Role & Audit Trail Log           │
└───────────────────────────────────────────────────────────────┘
```

---

## 📋 Fitur Utama Per Modul

### 📨 Modul 4: Tata Usaha & Persuratan ⭐ (Inti Kerja TU / KTU)
- **E-Arsip Surat Masuk**: Pencatatan nomor agenda, tanggal, instansi pengirim, perihal, dan tingkat urgensi.
- **Lembar Disposisi Digital**: Fitur cetak resmi **Lembar Disposisi Kepala Sekolah** lengkap dengan Kop Dinas Pendidikan, petunjuk instruksi, dan kolom paraf pejabat.
- **Surat Keluar & Penomoran Otomatis**: Klasifikasi penomoran otomatis berformat dinas (`421.5/.../SMK-TU/...`), dilengkapi template resmi (Surat Tugas, Surat Keterangan Siswa, Surat Panggilan Orang Tua).
- **Buku Tamu Digital**: Pencatatan tamu dinas, industri, instansi, jam, dan tujuan audiensi.
- **Notulensi Rapat & Arsip SK**: Penyimpanan digital SK pembagian tugas dan notulen koordinasi.

### 📋 Modul 1: Kesiswaan & PPDB
- **PPDB Online**: Penerimaan pendaftar, seleksi otomatis jalur Zonasi/Prestasi/Afirmasi, dan tombol verifikasi langsung masuk ke database siswa.
- **Buku Induk Siswa**: Profil data siswa lengkap (NISN, NIS, kelas, jurusan, kontak ortu) dan simulator **Cetak Kartu Tanda Pelajar (KTPel)**.
- **Presensi & Poin Tata Tertib**: Tracking pelanggaran siswa, poin prestasi lomba LKS, dan integrasi otomatis penerbitan surat panggilan orang tua.

### 👨‍🏫 Modul 2: Kepegawaian & SIMPEG
- **Data Pendidik & Tenaga Kependidikan (PTK)**: NIP, NUPTK, status PNS/PPPK/GTT, jam mengajar, dan status sertifikasi pendidik.
- **Presensi Berbasis GPS & Selfie**: Simulator check-in kehadiran guru & staf.
- **Payroll & Slip Gaji**: Rincian tunjangan dan fitur **Cetak Slip Gaji Resmi**.

### 📚 Modul 3: Akademik & Kurikulum Merdeka
- **Struktur Kurikulum Vokasi**: Fase E (Kelas X) & Fase F (Kelas XI & XII) per konsentrasi keahlian.
- **Jadwal Pelajaran Anti-Bentrok**: Penjadwalan otomatis jam KBM lab dan bengkel.
- **Generator E-Rapor**: Cetak preview rapor siswa resmi Kurikulum Merdeka lengkap dengan tanda tangan Kepsek & Wali Kelas.
- **CBT Online**: Simulator Ujian Berbasis Komputer dengan timer dan bank soal kejuruan.

### 💰 Modul 5: Keuangan & Dana BOS
- **Buku Kas Umum (BKU) BOS**: Pencatatan penerimaan dan belanja riil 8 Standar Nasional Pendidikan.
- **Iuran Komite / SPP**: Tracking pembayaran per kelas dan penerbitan **Kwitansi Pembayaran Resmi**.

### 🏗️ Modul 6: Sarana Prasarana & Inventaris (SARPRAS)
- **Inventaris Aset**: Pencatatan barang (PC Lab, Engine Stand, Alat Praktik, Proyektor).
- **Generator Label QR Code**: Cetak stiker label QR Code per unit barang inventaris sekolah.
- **Master Ruang**: Pemetaan kapasitas dan fasilitas bengkel/lab kejuruan.

### 📖 Modul 7: Perpustakaan Digital (SIMPUS)
- **Katalog Buku ISBN & DDC**: Koleksi buku teks umum dan buku vokasi kejuruan.
- **Sirkulasi Peminjaman**: Perhitungan denda otomatis bagi keterlambatan pengembalian.
- **E-Library Reader**: Fitur membaca modul ajar PDF interaktif langsung di peramban.

### 🏭 Modul 8: PKL & Hubungan Industri (Khas SMK!)
- **Mitra DUDI & MoU**: Profil perusahaan rekanan (PT Telkom, Astra International, Studio Kreatif).
- **Penempatan Siswa**: Tracking lokasi magang, pembimbing sekolah, dan instruktur industri.
- **Jurnal Harian PKL**: Monitoring aktivitas harian praktik siswa yang diverifikasi industri.
- **Cetak Sertifikat PKL**: Cetak sertifikat resmi kelulusan magang dengan nilai kompetensi.
- **Tracer Study (BMW)**: Grafik statistik lulusan (Bekerja, Melanjutkan studi, Wirausaha).

### 🧠 Modul 9: Bimbingan Konseling (BK)
- **Catatan Konseling**: Buku kasus siswa (disiplin, belajar, sosial, karier).
- **Layanan Home Visit**: Agenda kunjungan rumah ke orang tua murid.

### 🌐 Modul 10: Website Profil & Portal PPDB Publik
- Landing page sekolah yang modern dan elegan dengan sambutan Kepala Sekolah, galeri fasilitas bengkel/lab, dan profil kompetensi keahlian.
- Formulir pendaftaran siswa baru secara online yang terhubung langsung secara real-time ke Modul 1 Kesiswaan.
- Cek pengumuman status seleksi kelulusan mandiri via NISN.

### 📊 Modul 11: Laporan Eksekutif & Akreditasi ⭐
- **Dashboard KTU 360 Derajat**: Ringkasan persuratan, keuangan, kepegawaian, dan aset sarpras.
- **8 Standar Akreditasi BAN-SM**: Pemetaan skor pemenuhan standar mutu vokasi.
- **Ekspor Dokumen**: Paket laporan siap cetak dan arsip Dapodik.

### ⚙️ Modul 12: Pengaturan, Hak Akses & Audit Trail
- **Role Switcher**: Simulasi 10 peran pengguna (Kepsek, KTU, Waka Kurikulum, Waka Kesiswaan, Waka Sarpras, Waka Hubin, Guru/Wali Kelas, Bendahara, Siswa).
- **Profil Sekolah**: Pengaturan kop surat dinas dan identitas lembaga.
- **Audit Trail**: Pencatatan digital jejak aktivitas operasional sistem.
