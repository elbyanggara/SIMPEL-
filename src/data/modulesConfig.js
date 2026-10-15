import {
  GraduationCap,
  Users,
  UserCheck,
  BookOpen,
  Mail,
  Landmark,
  Layers,
  BookMarked,
  Building2,
  HeartHandshake,
  Globe,
  BarChart3,
  Settings
} from 'lucide-react';

export const MODULES_CONFIG = [
  {
    id: "modul4",
    name: "Tata Usaha & Persuratan",
    number: 4,
    icon: Mail,
    category: "Administrasi Utama",
    badge: "Inti TU",
    badgeType: "core",
    desc: "Arsip surat masuk/keluar, disposisi pimpinan, buku tamu, notulensi & legalitas"
  },
  {
    id: "modul1",
    name: "Kesiswaan & PPDB",
    number: 1,
    icon: GraduationCap,
    category: "Operasional Sekolah",
    badge: "4 PPDB",
    badgeType: "hot",
    desc: "PPDB online, data induk siswa, mutasi, absensi, tata tertib, prestasi & ekskul"
  },
  {
    id: "modul2",
    name: "Kepegawaian (PTK)",
    number: 2,
    icon: UserCheck,
    category: "Operasional Sekolah",
    badge: "5 Guru",
    badgeType: "default",
    desc: "Data guru/staf, NIP/NUPTK, absensi, cuti, kenaikan pangkat, payroll & SKP"
  },
  {
    id: "modul3",
    name: "Akademik & Kurikulum",
    number: 3,
    icon: BookOpen,
    category: "Operasional Sekolah",
    badge: "K. Merdeka",
    badgeType: "default",
    desc: "Kurikulum Merdeka, jadwal anti-bentrok, RPP, penilaian, e-Rapor & CBT ujian"
  },
  {
    id: "modul5",
    name: "Keuangan & BOS",
    number: 5,
    icon: Landmark,
    category: "Keuangan & Aset",
    badge: "BOS 2026",
    badgeType: "default",
    desc: "RKAS 8 standar, buku kas umum (BKU), realisasi BOS, iuran SPP & kwitansi"
  },
  {
    id: "modul6",
    name: "Sarpras & Inventaris",
    number: 6,
    icon: Layers,
    category: "Keuangan & Aset",
    badge: "Aset QR",
    badgeType: "default",
    desc: "Master bengkel/lab, inventaris barang ber-QR code, peminjaman alat & sarana"
  },
  {
    id: "modul7",
    name: "Perpustakaan Digital",
    number: 7,
    icon: BookMarked,
    category: "Keuangan & Aset",
    badge: "SIMPUS",
    badgeType: "default",
    desc: "Katalog buku barcode, sirkulasi peminjaman, e-Book kejuruan & denda"
  },
  {
    id: "modul8",
    name: "PKL & Hubungan Industri",
    number: 8,
    icon: Building2,
    category: "Vokasi & Publikasi",
    badge: "DUDI Vokasi",
    badgeType: "default",
    desc: "MoU mitra DUDI, plotting magang, monitoring guru pembimbing & jurnal PKL"
  },
  {
    id: "modul9",
    name: "Bimbingan Konseling (BK)",
    number: 9,
    icon: HeartHandshake,
    category: "Operasional Sekolah",
    badge: "Home Visit",
    badgeType: "default",
    desc: "Catatan konseling tertutup, sosiometri, pemanggilan ortu & bimbingan karir"
  },
  {
    id: "modul10",
    name: "Website & Portal PPDB",
    number: 10,
    icon: Globe,
    category: "Vokasi & Publikasi",
    badge: "Publik Web",
    badgeType: "default",
    desc: "Portal profil sekolah, warta 3D, formulir PPDB online, direktori & cek status"
  },
  {
    id: "modul11",
    name: "Laporan & Akreditasi",
    number: 11,
    icon: BarChart3,
    category: "Administrasi Utama",
    badge: "Akreditasi",
    badgeType: "core",
    desc: "Statistik 360 KTU, 8 Standar Nasional Pendidikan, Dapodik & export dokumen"
  },
  {
    id: "modul12",
    name: "Pengaturan & Hak Akses",
    number: 12,
    icon: Settings,
    category: "Sistem & Keamanan",
    badge: "Admin",
    badgeType: "default",
    desc: "Manajemen user role, profil sekolah, kop surat, backup data & audit trail log"
  }
];
