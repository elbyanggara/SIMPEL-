import React, { useState, useEffect, useRef, useCallback } from 'react';
import {
  Globe, Award, Users, CheckCircle, ArrowRight, Sparkles, BookOpen, Send,
  Building, GraduationCap, Briefcase, TrendingUp, Store, Calculator, Heart,
  Phone, Mail, MapPin, Clock, Coffee, Scissors, Wrench, CheckCircle2,
  FileText, Calendar, HelpCircle, ChevronRight, ChevronLeft, Play, Pause,
  Image as ImageIcon, Trophy, Medal, Star, Flame, Search, Filter, ShieldCheck,
  Tag, Check, ExternalLink, Car, Monitor, Target, Quote, CheckCheck, X, Newspaper,
  ArrowUpRight, Menu, Home, Info, Layers, MessageCircle, ChevronDown, Eye,
  ArrowUp, Zap, BookMarked, Link2, CheckCheck as DoubleCheck, Glasses,
  Flag, Compass, Music, Map, Navigation, MessageSquare,
  Lock, Shield
} from 'lucide-react';
import { initialStaff } from '../../data/initialData';

// ─── DATA: PRESTASI & PENGHARGAAN ───
const schoolAchievements = [
  {
    id: 1, title: "Stand Terinovatif & Produk Wirausaha Terfavorit",
    event: "Education Fair SMK se-Kota Malang (MCC)", year: "2023 / 2024",
    level: "Tingkat Kota Malang", medal: "gold", medalText: "🥇 Juara 1 & Terinovatif",
    studentTeam: "Tim Siswa SPW Bisnis Daring & MPLB", category: "kewirausahaan",
    categoryLabel: "Kewirausahaan & Vokasi", icon: Store, color: "#f59e0b",
    highlight: "Produk Olahan Markisa & Bumbu Pecel Ardjuna",
    description: "Siswa program keahlian Bisnis Daring & Manajemen Perkantoran sukses mencuri perhatian ribuan pengunjung di Malang Creative Center lewat produk olahan minuman herbal sari markisa botol dan kemasan bumbu pecel Ardjuna cita rasa nusantara.",
    tags: ["Produk SPW", "MCC Malang", "Bisnis Daring", "Minuman Markisa"]
  },
  {
    id: 2, title: "100% Kelulusan Uji Kompetensi Keahlian & Lisensi BNSP",
    event: "Sertifikasi Asesmen Kompetensi Nasional BNSP", year: "2024 / 2025",
    level: "Standar Nasional / BNSP", medal: "emerald", medalText: "🏆 Standar Nasional BNSP",
    studentTeam: "Seluruh Siswa Tingkat Akhir MPLB, AKL & BDP", category: "akademik",
    categoryLabel: "Sertifikasi & Akademik", icon: Award, color: "#10b981",
    highlight: "Kelulusan 100% Nilai Sangat Baik (A)",
    description: "Seluruh peserta didik tingkat akhir dinyatakan 100% lulus berkompeten dengan sertifikat garuda berstandar BNSP, siap bersaing di dunia industri perkantoran dan perbankan.",
    tags: ["UKK Nasional", "BNSP", "Kompetensi Perkantoran"]
  },
  {
    id: 3, title: "Inovasi Program Vokasi: A Multi-Skills Based School",
    event: "Program Penguatan Karakter & Kemandirian Siswa Vokasi", year: "2022 - Sekarang",
    level: "Program Keunggulan Khusus", medal: "purple", medalText: "🌟 Inovasi Vokasi Unggulan",
    studentTeam: "Seluruh Siswa Peserta Pelatihan Multi-Skills", category: "unggulan",
    categoryLabel: "Inovasi Vokasi", icon: Sparkles, color: "#8b5cf6",
    highlight: "5 Keterampilan Bebas Biaya Tambahan",
    description: "Pelopor 'A Multi-Skills Based School' di wilayah Malang Utara: Mengemudi Mobil SIM A, Perhotelan, Tata Boga & Barista, Menjahit Busana Kerja, dan Servis Sepeda Motor TSM.",
    tags: ["Multi-Skills", "Gratis Mengemudi", "Barista & Boga"]
  },
  {
    id: 4, title: "Juara 2 & Medali Perunggu Pencak Silat Pelajar",
    event: "Kejuaraan Pencak Silat Antar-Pelajar Tingkat Kota Malang", year: "2023 / 2024",
    level: "Tingkat Kota Malang", medal: "silver", medalText: "🥈 Juara 2 & Medali Perunggu",
    studentTeam: "Kontingen Pesilat Muda SMK Ardjuna 2", category: "olahraga",
    categoryLabel: "Olahraga & Seni", icon: Trophy, color: "#0284c7",
    highlight: "Kategori Seni Tunggal & Tanding Kelas Remaja",
    description: "Pesilat muda menunjukkan ketangkasan gerak seni bela diri tradisional serta ketahanan fisik prima dalam kejuaraan antar pelajar se-Kota Malang.",
    tags: ["Pencak Silat", "IPSI Kota Malang", "Medali Perunggu"]
  },
  {
    id: 5, title: "Best Practice Inkubator 'Ardjuna Mart'",
    event: "Implementasi Program SPW Direktorat SMK Kemendikbud", year: "2024",
    level: "Tingkat Jawa Timur", medal: "gold", medalText: "🥇 Best Practice Inkubator",
    studentTeam: "Tim Praktik Laboratorium Ardjuna Mart", category: "kewirausahaan",
    categoryLabel: "Kewirausahaan & Vokasi", icon: Building, color: "#ea580c",
    highlight: "Toko Simulator Ritel Kasir POS & Omzet Nyata",
    description: "Toko Ardjuna Mart diintegrasikan sebagai laboratorium bisnis nyata di lingkungan sekolah dengan omzet riil yang melatih siswa sistem barcode inventory, kasir POS digital, dan customer relations.",
    tags: ["Ardjuna Mart", "SPW Kemendikbud", "Business Center"]
  },
  {
    id: 6, title: "Apresiasi Formasi Terbaik LKBB Paskibra",
    event: "Kompetisi Paskibra Pelajar se-Malang Raya", year: "2023",
    level: "Malang Raya", medal: "emerald", medalText: "🏅 Pasukan Terdisiplin LKBB",
    studentTeam: "Pleton Paskibra SMK Ardjuna 2", category: "ekskul",
    categoryLabel: "Ekstrakurikuler & Paskibra", icon: CheckCircle2, color: "#0d9488",
    highlight: "Kategori Pasukan Terdisiplin & Formasi Rapi",
    description: "Tim Paskibra mencatatkan penampilan membanggakan dengan kekompakan langkah tegap, disiplin waktu, dan variasi formasi yang rapi pada kompetisi baris-berbaris.",
    tags: ["Paskibra", "LKBB Malang", "Disiplin Karakter"]
  },
  {
    id: 7, title: "Penyerapan Cepat Alumni Kerja 88%+",
    event: "Bursa Kerja Khusus (BKK) Ardjuna Fair", year: "2024 - 2026",
    level: "Dunia Usaha & Industri", medal: "silver", medalText: "💼 Serapan Kerja Cepat 88%+",
    studentTeam: "Alumni & Siswa Kelas XII BKK Ardjuna", category: "karir",
    categoryLabel: "Kemitraan DUDI & BKK", icon: Briefcase, color: "#2563eb",
    highlight: "Tingkat Keterserapan Kerja Cepat",
    description: "Kerja sama strategis dengan puluhan perusahaan rekanan ritel, perbankan, dan perkantoran memungkinkan lulusan mengikuti rekrutmen langsung di sekolah sebelum kelulusan.",
    tags: ["BKK Ardjuna", "Walk-In Interview", "Kerja Cepat"]
  }
];


// ─── DATA: SAMBUTAN KEPALA SEKOLAH & VISI MISI ───
const principalMessage = {
  name: "Drs. Anang Kuswanto",
  role: "Kepala SMK Ardjuna 2 Kota Malang",
  photo: "/kasek-anang.jpg",
  quote: "Pendidikan vokasi bukan sekadar mencetak lulusan yang siap kerja, melainkan melahirkan pribadi tangguh berkarakter, berkeahlian ganda (multi-skills), dan mantap dalam kemandirian.",
  paragraphs: [
    "Selamat datang di portal resmi SMKS Ardjuna 2 Kota Malang — A Multi-Skills Based School. Di era disrupsi teknologi dan transformasi dunia industri, kami meyakini bahwa setiap siswa berhak mendapatkan pendidikan kejuruan yang aplikatif, modern, dan bernilai tambah nyata.",
    "Melalui sinergi kurikulum berbasis industri, sertifikasi kompetensi nasional lisensi BNSP, serta program unggulan 5 Multi-Skills gratis (SIM A Mengemudi, Barista & Tata Boga, Perhotelan, Tata Busana, dan Servis Otomotif), kami membekali peserta didik agar tidak hanya siap terserap di bursa kerja, namun juga percaya diri menjadi wirausahawan mandiri.",
    "Kami terus berkomitmen menjalin kemitraan erat dengan dunia usaha dan industri (DUDI) untuk menghadirkan jembatan karier masa depan yang cerah bagi seluruh lulusan."
  ],
  visi: "Menjadi Sekolah Menengah Kejuruan Vokasi Terdepan yang Unggul dalam Karakter, Terampil Berbasis Multi-Skills, serta Berdaya Saing Tinggi di Tingkat Nasional dan Global.",
  misi: [
    "Menyelenggarakan pendidikan vokasi terapan yang adaptif terhadap kebutuhan dunia usaha dan dunia industri modern (DUDI).",
    "Membekali peserta didik dengan 5 keterampilan aplikatif (Multi-Skills) gratis dan sertifikasi kompetensi berstandar BNSP.",
    "Menanamkan budaya disiplin 5S, integritas profesional, dan budi pekerti luhur (IMTAQ).",
    "Mengembangkan jiwa wirausaha mandiri melalui inkubator bisnis teaching factory Ardjuna Mart."
  ],
  motto: "Disenangi • Mandiri • Berprestasi • Mantap"
};

// ─── DATA: KEMITRAAN INDUSTRI & DUDI (LINK & MATCH) ───
const industryPartners = [
  {
    name: "Kober Mie",
    category: "Industri Kuliner & F&B",
    type: "Walk-In Interview & Penyaluran Kerja",
    description: "Kemitraan rekrutmen terbuka ratusan posisi manajerial & operasional penempatan Malang, Jawa, dan Bali.",
    badge: "Mitra Rekrutmen BKK",
    color: "#e11d48",
    logoText: "KOBER MIE"
  },
  {
    name: "Ardjuna Mart Retail Hub",
    category: "Ritel Modern & POS",
    type: "Teaching Factory & Prakerin",
    description: "Laboratorium ritel simulator siswa bekerjasama dengan jaringan distributor modern dan pembinaan SPW Kemendikbud.",
    badge: "Teaching Factory",
    color: "#ea580c",
    logoText: "ARDJUNA MART"
  },
  {
    name: "Universitas Negeri Malang (UM)",
    category: "Perguruan Tinggi Pembina",
    type: "Asistensi Mengajar Mahasiswa UM",
    description: "Kolaborasi akademik pengembangan media ajar multimedia, digitalisasi modul, serta pendampingan program LDKS dan OSIS.",
    badge: "Mitra Akademik",
    color: "#2563eb",
    logoText: "UNIVERSITAS NEGERI MALANG"
  },
  {
    name: "Mitra Perbankan & Lembaga Keuangan",
    category: "Perbankan & Akuntansi",
    type: "Prakerin & Sertifikasi",
    description: "Penempatan magang administrasi keuangan, kasir teller, dan pembukuan akuntansi terkomputerisasi bagi siswa AKL.",
    badge: "Sektor Finansial",
    color: "#059669",
    logoText: "PERBANKAN & BPR"
  },
  {
    name: "Jaringan Hospitality & Hotel Malang",
    category: "Perhotelan & Pariwisata",
    type: "Praktik Multi-Skills & Table Manners",
    description: "Kerja sama pelatihan standar front office, kamar hotel bintang, dan perjamuan resmi bersama praktisi hotel berbintang.",
    badge: "Hospitality Partner",
    color: "#7c3aed",
    logoText: "HOSPITALITY HUB"
  },
  {
    name: "LSP / BNSP Republik Indonesia",
    category: "Sertifikasi Profesi Nasional",
    type: "Uji Kompetensi Keahlian (UKK)",
    description: "Lembaga Sertifikasi Profesi pihak pertama berlisensi Badan Nasional Sertifikasi Profesi (BNSP) lambang Garuda Emas.",
    badge: "Lisensi Negara",
    color: "#0891b2",
    logoText: "LSP - BNSP RESMI"
  }
];

// ─── DATA: EKSTRAKURIKULER UNGGULAN ───
const extracurriculars = [
  {
    id: 1,
    name: "Paskibra (Pasukan Pengibar Bendera)",
    badge: "Prestasi Disiplin",
    schedule: "Selasa & Jumat Sore",
    description: "Membina kedisiplinan baris-berbaris (LKBB), kekompakan variasi formasi, serta mental kepemimpinan berjiwa patriotik.",
    icon: Flag,
    color: "#dc2626",
    achievement: "Apresiasi Formasi Terbaik LKBB Malang Raya"
  },
  {
    id: 2,
    name: "Pencak Silat Tradisional",
    badge: "Bela Diri & Karakter",
    schedule: "Rabu & Sabtu Sore",
    description: "Pelatihan seni jurus tradisional dan tanding atletik IPSI guna mengasah ketangkasan gerak, ketahanan fisik, dan sportivitas.",
    icon: ShieldCheck,
    color: "#0284c7",
    achievement: "Medali Perunggu Kejuaraan Pelajar Kota Malang"
  },
  {
    id: 3,
    name: "Futsal & Sepak Bola Mini",
    badge: "Olahraga Favorit",
    schedule: "Senin & Kamis Sore",
    description: "Mengembangkan teknik mengolah bola, stamina tanding, dan kerja sama tim dalam kompetisi antarpelajar se-Malang Raya.",
    icon: Trophy,
    color: "#16a34a",
    achievement: "Juara Turnamen & Sparing Rutin Antar-SMK"
  },
  {
    id: 4,
    name: "Gerakan Pramuka (Gugus Depan)",
    badge: "Kepanduan Wajib",
    schedule: "Jumat Siang",
    description: "Pendidikan kepanduan berbasis kecakapan hidup (life skills), kemandirian berkemah, kepedulian lingkungan, dan jiwa korsa.",
    icon: Compass,
    color: "#d97706",
    achievement: "Partisipasi Jambore & Pengembaraan Penegak"
  },
  {
    id: 5,
    name: "Palang Merah Remaja (PMR Wira)",
    badge: "Kemanusiaan & Medis",
    schedule: "Kamis Sore",
    description: "Pembekalan pertolongan pertama pada kecelakaan (P3K), kesiapsiagaan bencana, dan pengelolaan Unit Kesehatan Sekolah (UKS).",
    icon: Heart,
    color: "#e11d48",
    achievement: "Unit UKS Terpadu & Aksi Sosial Donor Darah"
  },
  {
    id: 6,
    name: "Seni Tari Tradisional & Musik Padus",
    badge: "Kreativitas & Seni",
    schedule: "Rabu Sore",
    description: "Wadah ekspresi seni pertunjukan tari kreasi khas Jawa Timur dan olah vokal paduan suara untuk upacara resmi serta wisuda.",
    icon: Music,
    color: "#9333ea",
    achievement: "Pengisi Tetap Pentas Wisuda & Pameran MCC"
  }
];

// ─── DATA: FAQ INTERAKTIF PPDB & SEKOLAH ───
const schoolFaqs = [
  {
    q: "Apa saja syarat dan jalur pendaftaran PPDB di SMK Ardjuna 2 Malang?",
    a: "Pendaftaran dapat dilakukan secara online melalui portal ini atau langsung di Ruang Panitia PPDB SMK Ardjuna 2. Syarat utama meliputi: Mengisi formulir pendaftaran, fotokopi Ijazah/SKL SMP/MTs, fotokopi Kartu Keluarga (KK), fotokopi Akta Kelahiran, dan pas foto 3x4. Kami membuka Jalur Reguler, Jalur Prestasi (Akademik/Non-Akademik), serta Jalur Keringanan Afirmasi."
  },
  {
    q: "Apakah 5 program Multi-Skills (SIM A, Barista, dll.) benar-benar gratis?",
    a: "Benar, 100% GRATIS! Sebagai pelopor 'A Multi-Skills Based School' di Kota Malang, pelatihan Mengemudi Mobil (hingga pendampingan SIM A), Barista & Tata Boga, Housekeeping Perhotelan, Tata Busana, dan Servis Sepeda Motor merupakan program terintegrasi yang diberikan tanpa dipungut biaya kursus tambahan."
  },
  {
    q: "Apakah ada program beasiswa dan keringanan biaya bagi siswa baru?",
    a: "Tentu ada! SMK Ardjuna 2 memiliki program beasiswa prestasi, keringanan biaya formulir/uang gedung untuk pendaftar gelombang awal, beasiswa alumni keluarga Ardjuna, serta subsidi khusus bagi siswa pemegang KIP (Kartu Indonesia Pintar) atau SKTM agar seluruh putra-putri berprestasi dapat mengenyam pendidikan vokasi bermutu."
  },
  {
    q: "Bagaimana jaminan sertifikasi dan peluang kerja setelah lulus?",
    a: "Setiap siswa kelas XII mengikuti Asesmen Uji Kompetensi Keahlian (UKK) resmi berlisensi BNSP (Badan Nasional Sertifikasi Profesi) dengan lambang Garuda Emas. Melalui Bursa Kerja Khusus (BKK) Ardjuna, lulusan disalurkan langsung ke perusahaan rekanan (ritel modern, F&B seperti Kober Mie, perkantoran, perhotelan, dan perbankan) dengan angka keterserapan kerja mencapai 88%+."
  },
  {
    q: "Apakah lulusan SMK Ardjuna 2 bisa melanjutkan kuliah ke Perguruan Tinggi Negeri (PTN)?",
    a: "Bisa sekali! Kurikulum SMK Ardjuna 2 membekali penguasaan mata pelajaran umum yang setara dengan SMA/SMK negeri. Banyak alumni kami yang berhasil lolos seleksi masuk PTN (melalui jalur SNBP, SNBT, atau jalur vokasi politeknik) maupun Perguruan Tinggi Swasta terkemuka di Kota Malang dan Jawa Timur."
  },
  {
    q: "Di mana lokasi sekolah dan bagaimana akses transportasinya?",
    a: "Gedung SMK Ardjuna 2 berlokasi sangat strategis di Jl. Teluk Pelabuhan Ratu No. 41, Arjosari, Kec. Blimbing, Kota Malang. Lokasinya hanya sekitar 300 meter (3 menit) dari Terminal Arjosari Malang dan dilalui rute angkutan kota utama (AMG, AL, AG, ABG), sehingga sangat mudah dijangkau oleh siswa dari seluruh penjuru Malang Raya."
  }
];

// ─── DATA: ARTIKEL & WARTA SEKOLAH ───
const schoolArticles = [
  {
    id: 1,
    title: "SMK Ardjuna 2 Malang Gandeng Industri, Jadi Jembatan Lulusan ke Dunia Kerja",
    slug: "smk-ardjuna-2-malang-gandeng-industri-jadi-jembatan-lulusan-ke-dunia-kerja",
    date: "5 Mei 2026",
    author: "Javasatu.com / BKK Ardjuna 2",
    category: "Kemitraan DUDI & BKK",
    badge: "Walk-In Interview Industri",
    readTime: "3 Menit Baca",
    image: "/news/berita-kober-mie.jpg",
    excerpt: "SMK Ardjuna 2 Kota Malang menggandeng industri kuliner Kober Mie menggelar walk in interview terbuka untuk membuka akses ratusan lowongan kerja dari level manajerial hingga crew outlet di Malang, Jawa, dan Bali.",
    paragraphs: [
      "SMK Ardjuna 2 Kota Malang menggandeng industri kuliner terkemuka Kober Mie untuk membuka akses kerja nyata bagi para lulusan melalui kegiatan walk in interview terbuka yang digelar langsung di lingkungan sekolah. Kolaborasi ini menjadi langkah konkret dalam menjembatani dunia pendidikan vokasi dengan kebutuhan riil tenaga kerja di sektor industri.",
      "Kepala SMK Ardjuna 2 Kota Malang, Drs. Anang Kuswanto, menegaskan bahwa kegiatan rekrutmen ini merupakan bagian dari layanan karier komprehensif sekolah. 'Tujuannya memberikan layanan karier kepada khalayak umum, mudah-mudahan kegiatan ini berjalan lancar dan sesuai harapan. Pesertanya umum, tidak hanya dari siswa kami,' ujarnya kepada awak media.",
      "Melalui kemitraan strategis ini, pihak HRD Kober Mie membuka ratusan lowongan kerja di sektor food and beverage (F&B) untuk beragam posisi, mulai dari outlet manager, outlet supervisor, floor crew, kitchen crew, bar crew, admin outlet, hingga kasir.",
      "Penempatan kerja tidak hanya di Kota Malang, melainkan mencakup wilayah Pulau Jawa hingga Bali. Kolaborasi antara SMK Ardjuna 2 dan dunia industri ini memperkokoh implementasi nyata konsep Link and Match, membekali generasi muda dengan kesiapan mental profesional di tengah persaingan pasar kerja."
    ],
    tags: ["Kober Mie", "Bursa Kerja", "Link & Match", "DUDI", "Kota Malang"]
  },
  {
    id: 2,
    title: "SMK Ardjuna 2 Curi Perhatian di Education Fair MCC: Tampilkan Produk Siswa & Program Keringanan Biaya",
    slug: "smk-ardjuna-2-education-fair-mcc-malang",
    date: "24 Mei 2023",
    author: "Javasatu.com / Tim Wirausaha",
    category: "Pameran & Inovasi",
    badge: "Education Fair MCC",
    readTime: "3 Menit Baca",
    image: "/news/berita-education-fair.jpg",
    excerpt: "Stan SMK Ardjuna 2 Kota Malang memukau ribuan pengunjung Education Fair di Malang Creative Center (MCC) dengan memamerkan produk olahan wirausaha siswa serta program keringanan biaya pendidikan.",
    paragraphs: [
      "SMK Ardjuna 2 Kota Malang turut berpartisipasi aktif dalam ajang bergengsi Education Fair SMK se-Kota Malang yang diselenggarakan di lantai 2 Malang Creative Center (MCC). Pameran ini menghadirkan stan-stan SMK unggulan untuk memperkenalkan profil dan karya inovasi kepada masyarakat luas.",
      "Di stan pamerannya, siswa-siswi SMK Ardjuna 2 menampilkan berbagai produk wirausaha hasil karya orisinal mereka, mulai dari minuman kemasan segar sari buah markisa (passion fruit), sirup pisang alami, hingga bumbu pecel khas yang diproduksi melalui laboratorium inkubator bisnis sekolah.",
      "Selain pameran karya cipta, pihak sekolah juga memberikan kemudahan akses pendidikan berupa program keringanan biaya pendaftaran dan beasiswa SPP bagi calon peserta didik baru yang berminat melanjutkan pendidikan kejuruan multi-skills.",
      "Partisipasi ini membuktikan bahwa SMK Ardjuna 2 tidak hanya membekali teori di dalam kelas, namun juga mencetak siswa yang cakap berwirausaha secara mandiri dan percaya diri mempresentasikan produknya di ruang publik kreatif seperti MCC."
    ],
    tags: ["Education Fair", "MCC Malang", "Produk Siswa", "Kewirausahaan", "PPDB"]
  },
  {
    id: 3,
    title: "LDKS SMK Ardjuna 2 Malang: Membangun Jiwa Kepemimpinan Berkarakter di Era Modern",
    slug: "ldks-smk-ardjuna-2-jiwa-kepemimpinan-berkarakter",
    date: "14 Mei 2024",
    author: "Javasatu.com / Kesiswaan",
    category: "Karakter & Kepemimpinan",
    badge: "LDKS & Karakter",
    readTime: "3 Menit Baca",
    image: "/news/berita-ldks-siswa.jpg",
    excerpt: "SMK Ardjuna 2 Malang menggelar Latihan Dasar Kepemimpinan Siswa (LDKS) bersinergi dengan mahasiswa Asistensi Mengajar untuk menumbuhkan kepribadian pemimpin yang berkarakter, demokratis, dan inovatif.",
    paragraphs: [
      "SMK Ardjuna 2 Malang sukses menyelenggarakan agenda tahunan Latihan Dasar Kepemimpinan Siswa (LDKS) dengan mengangkat tema inspiratif 'Membangun Jiwa Kepemimpinan yang Berkarakter di Era Modern'. Kegiatan ini diikuti dengan antusias oleh puluhan perwakilan siswa terpilih dan pengurus OSIS.",
      "Kepala SMK Ardjuna 2 Malang, Drs. Anang Kuswanto, dalam sambutan pembukaannya menyampaikan bahwa LDKS dirancang untuk menanamkan pemahaman komprehensif mengenai tata kelola organisasi, manajemen waktu, serta pembentukan kepribadian tangguh yang demokratis, kreatif, dan berintegritas tinggi.",
      "Wakil Pembina OSIS, Rizal Umaruddin S.Pd, bersama tim pendamping menekankan pentingnya komunikasi efektif dan kerja sama tim dalam menghadapi dinamika era digital. Kegiatan ini juga didukung oleh mahasiswa program Asistensi Mengajar dari Universitas Negeri Malang (UM).",
      "Melalui berbagai sesi simulasi problem solving, team building luar ruangan, dan wawasan kebangsaan, para peserta dipersiapkan menjadi teladan disiplin dan penggerak kemajuan positif di lingkungan civitas akademika sekolah."
    ],
    tags: ["LDKS", "Kepemimpinan", "Karakter", "OSIS", "Kesiswaan"]
  },
  {
    id: 4,
    title: "Toko Simulator Ardjuna Mart: Siswa Praktik Langsung Kasir POS & Ritel Modern",
    slug: "toko-simulator-ardjuna-mart-praktik-kasir",
    date: "25 Januari 2025",
    author: "Laboratorium Bisnis Daring",
    category: "Teaching Factory",
    badge: "Kemitraan DUDI",
    readTime: "4 Menit Baca",
    image: "/news/berita2-ardjunamart.jpg",
    excerpt: "Laboratorium ritel modern 'Ardjuna Mart' dioperasikan sebagai wadah teaching factory nyata di mana siswa melayani transaksi harian, mengelola kasir POS, dan menyusun display produk.",
    paragraphs: [
      "SMK Ardjuna 2 Kota Malang kembali menunjukkan komitmennya untuk mencetak generasi muda yang siap kerja dan mandiri berwirausaha dengan mengoperasikan Toko Simulator 'Ardjuna Mart'.",
      "Fasilitas laboratorium ini berlokasi strategis di lingkungan sekolah Arjosari, memberikan pengalaman langsung bagi siswa jurusan Bisnis Daring dan Manajemen Perkantoran.",
      "Siswa belajar mengelola inventaris stok barang, mengoperasikan mesin kasir POS dengan barcode scanner, melayani pelanggan secara ramah, serta menyusun display visual merchandising yang menarik.",
      "Program teaching factory ini melatih mental dan etos kerja profesional sebelum para siswa diterjunkan dalam Praktik Kerja Lapangan (PKL) di dunia industri ritel modern."
    ],
    tags: ["Teaching Factory", "Ardjuna Mart", "Ritel Modern"]
  },
  {
    id: 5,
    title: "Silaturahmi dan Pelepasan Siswa Didik Kelas XII T.A. 2024/2025",
    slug: "silaturahmi-pelepasan-kelas-xii-2024-2025",
    date: "19 Juni 2025",
    author: "Humas SMK Ardjuna 2",
    category: "Kegiatan Sekolah",
    badge: "Wisuda & Kelulusan",
    readTime: "3 Menit Baca",
    image: "/news/berita1-wisuda.jpg",
    youtubeId: "R83yOwxPglk",
    excerpt: "Siswa-siswi kelas XII SMKS Ardjuna 2 Kota Malang resmi dilepas dalam acara wisuda yang penuh haru dan kebanggaan bersama jajaran dewan guru, yayasan, dan orang tua murid.",
    paragraphs: [
      "Setelah melewati perjalanan panjang menuntut ilmu selama tiga tahun, siswa-siswi kelas XII SMKS Ardjuna 2 Kota Malang resmi dilepas dalam acara wisuda dan silaturahmi yang penuh haru dan kebanggaan.",
      "Acara berlangsung dengan khidmat di aula pertemuan sekolah Ardjuna Blimbing, dipandu oleh siswi berprestasi. Suasana syahdu menyelimuti pelepasan saat lagu kebangsaan dan mars Ardjuna berkumandang.",
      "Dalam amanatnya, Kepala Sekolah menegaskan bahwa bekal kompetensi keahlian dan 5 keterampilan multi-skills yang telah dikantongi para lulusan menjadi modal kuat untuk bersaing di dunia kerja maupun merintis usaha mandiri.",
      "Seluruh lulusan juga telah dibekali sertifikat kompetensi keahlian berlisensi BNSP yang diakui secara nasional oleh industri perkantoran dan perbankan."
    ],
    tags: ["Wisuda", "Kelulusan", "Alumni", "Ardjuna 2"]
  },
  {
    id: 6,
    title: "Pelatihan Keterampilan Perhotelan & Hospitality Gratis bagi Siswa Vokasi",
    slug: "pelatihan-perhotelan-hospitality-gratis",
    date: "14 Oktober 2024",
    author: "Instruktur Multi-Skills",
    category: "Multi-Skills",
    badge: "Khas Ardjuna",
    readTime: "3 Menit Baca",
    image: "/news/berita3-perhotelan.jpg",
    excerpt: "Siswa-siswi dibekali pelatihan etika pelayanan tamu hotel (front office), housekeeping standar kamar bintang, dan jamuan resmi table manners tanpa biaya kursus tambahan.",
    paragraphs: [
      "Sebagai pelopor 'A Multi-Skills Based School' di Kota Malang, SMK Ardjuna 2 membekali setiap peserta didik dengan keterampilan aplikatif tambahan di luar kurikulum kejuruan pokok.",
      "Pelatihan perhotelan mencakup penguasaan standar pelayanan tamu prima, tata cara penataan tempat tidur hotel berstandar bintang, hingga etika jamuan resmi table manners.",
      "Keterampilan bernilai tinggi ini diberikan secara cuma-cuma tanpa pungutan biaya, memperluas kesempatan karier lulusan di sektor pariwisata, perhotelan, dan korporasi modern."
    ],
    tags: ["Perhotelan", "Multi-Skills", "Hospitality"]
  },
  {
    id: 7,
    title: "Classmeeting Seru: Olahraga, Games Ketangkasan & Sportivitas Antar-Kelas",
    slug: "classmeeting-th-20212022",
    date: "17 Juni 2022",
    author: "OSIS & Mahasiswa AM UM",
    category: "Kegiatan Sekolah",
    badge: "Classmeeting & Olahraga",
    readTime: "3 Menit Baca",
    image: "/news/berita6-classmeeting.jpg",
    excerpt: "SMK Ardjuna 2 Malang menggelar Classmeeting seru selama 4 hari dengan aneka perlombaan Badminton, Futsal, Keseimbangan Bola, dan Estafet Air bersama mahasiswa Asistensi Mengajar UM.",
    paragraphs: [
      "SMK Ardjuna 2 Malang melaksanakan kegiatan Classmeeting yang diikuti oleh seluruh siswa kelas X dan XI selama 4 hari penuh, mulai dari Senin hingga Kamis. Kegiatan ini didukung penuh oleh peran aktif pengurus OSIS dan mahasiswa Asistensi Mengajar (AM) Universitas Negeri Malang (UM) sehingga berjalan lancar, seru, dan meriah.",
      "Terdapat berbagai jenis cabang olahraga dan permainan ketangkasan yang diperlombakan, di antaranya turnamen Badminton ganda campuran, fun match Futsal antar-angkatan, lomba ketangkasan Keseimbangan Bola, serta Estafet Air yang menguji kekompakan dan kerja sama tim.",
      "Hari pertama diawali dengan senam pagi bersama seluruh siswa dan guru. Suasana hari-hari berikutnya kian semarak saat para siswa saling menyemangati tim perwakilan kelas masing-masing hingga babak penentuan juara.",
      "Turnamen ditutup dengan laga final futsal dan penyerahan hadiah bagi para pemenang lomba. Kegiatan ini sukses mempererat rasa kekeluargaan, sportivitas, dan memberikan penyegaran menyenangkan bagi seluruh siswa setelah menempuh ujian sekolah."
    ],
    tags: ["Classmeeting", "Olahraga", "OSIS", "Kesiswaan", "AM UM"]
  },
  {
    id: 8,
    title: "Halal Bihalal & Refleksi Nilai Kekeluargaan Besar Sivitas Sekolah",
    slug: "halal-bihalal-refleksi-kekeluargaan",
    date: "21 Mei 2024",
    author: "Tim Karakter & IMTAQ",
    category: "Karakter & IMTAQ",
    badge: "Budaya Sekolah",
    readTime: "3 Menit Baca",
    image: "/news/berita4-halalbihalal.jpg",
    excerpt: "Momen penguatan ikatan kekeluargaan, saling memaafkan, dan penanaman budi pekerti luhur antara dewan guru, staf tata usaha, yayasan, dan siswa di aula sekolah.",
    paragraphs: [
      "Acara Halal Bihalal di aula SMK Ardjuna 2 Malang diikuti oleh seluruh jajaran Dewan Guru, Staf Tata Usaha, Pembina Yayasan Ardjuna Bina Taruna, dan perwakilan pengurus OSIS.",
      "Kegiatan ini memperkuat keharmonisan komunitas sekolah sekaligus memperkokoh nilai toleransi, budi pekerti, dan silaturahmi antar generasi civitas akademika.",
      "Sekolah menekankan bahwa keunggulan vokasi harus selalu diimbangi dengan akhlakul karimah dan ketakwaan kepada Tuhan Yang Maha Esa (IMTAQ)."
    ],
    tags: ["Halal Bihalal", "IMTAQ", "Keluarga Ardjuna"]
  }
];


  const staffCategoryConfig = {
    'Pimpinan': {
      accent: '#d97706',
      border: '#fde68a',
      bgLight: '#fffbeb',
      badgeBg: '#fef3c7',
      badgeText: '#b45309',
      avatarBg: 'linear-gradient(135deg, #fef3c7 0%, #fde68a 100%)',
      avatarBorder: '#f59e0b',
      avatarText: '#92400e',
      roleColor: '#b45309',
      glow: 'rgba(217, 119, 6, 0.16)'
    },
    'Guru Produktif': {
      accent: '#059669',
      border: '#a7f3d0',
      bgLight: '#ecfdf5',
      badgeBg: '#d1fae5',
      badgeText: '#047857',
      avatarBg: 'linear-gradient(135deg, #d1fae5 0%, #a7f3d0 100%)',
      avatarBorder: '#10b981',
      avatarText: '#065f46',
      roleColor: '#047857',
      glow: 'rgba(5, 150, 105, 0.16)'
    },
    'Guru Umum': {
      accent: '#0284c7',
      border: '#bae6fd',
      bgLight: '#f0f9ff',
      badgeBg: '#e0f2fe',
      badgeText: '#0369a1',
      avatarBg: 'linear-gradient(135deg, #e0f2fe 0%, #bae6fd 100%)',
      avatarBorder: '#0ea5e9',
      avatarText: '#075985',
      roleColor: '#0284c7',
      glow: 'rgba(2, 132, 199, 0.16)'
    },
    'Tata Usaha': {
      accent: '#7c3aed',
      border: '#ddd6fe',
      bgLight: '#f5f3ff',
      badgeBg: '#ede9fe',
      badgeText: '#6d28d9',
      avatarBg: 'linear-gradient(135deg, #ede9fe 0%, #ddd6fe 100%)',
      avatarBorder: '#8b5cf6',
      avatarText: '#5b21b6',
      roleColor: '#6d28d9',
      glow: 'rgba(124, 58, 237, 0.16)'
    }
  };

// ─── ANIMATED STAT NUMBER COMPONENT ───
function AnimatedStatNumber({ value }) {
  const [count, setCount] = useState(0);
  const [started, setStarted] = useState(false);
  const elementRef = useRef(null);
  const hasAnimated = useRef(false);

  const match = String(value).match(/^(\d+)(.*)$/);
  const target = match ? parseInt(match[1], 10) : 0;
  const suffix = match ? match[2] : value;

  useEffect(() => {
    if (!elementRef.current) return;

    if (typeof IntersectionObserver === 'undefined') {
      setStarted(true);
      setCount(target);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated.current) {
          hasAnimated.current = true;
          setStarted(true);
          const duration = 1600;
          const startTime = performance.now();

          const step = (now) => {
            const elapsed = now - startTime;
            const progress = Math.min(elapsed / duration, 1);
            // Smooth ease-out cubic
            const ease = 1 - Math.pow(1 - progress, 3);
            setCount(Math.round(ease * target));

            if (progress < 1) {
              requestAnimationFrame(step);
            } else {
              setCount(target);
            }
          };
          requestAnimationFrame(step);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    observer.observe(elementRef.current);
    return () => observer.disconnect();
  }, [target]);

  return (
    <span ref={elementRef} className="p2-stat-number-animated">
      <span className="p2-stat-num-val">{started ? count : target}</span>
      <span className="p2-stat-num-suffix">{suffix}</span>
    </span>
  );
}

export function Modul10WebsitePortal({ onBackToErp, onOpenLogin, isAuthenticated }) {
  const [activeView, setActiveView] = useState('home');
  const [selectedArticle, setSelectedArticle] = useState(null);
  const [mobileMenu, setMobileMenu] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [showScrollTop, setShowScrollTop] = useState(false);

  // Filter Guru & Karyawan
  const [staffFilter, setStaffFilter] = useState('Semua');
  const [staffSearch, setStaffSearch] = useState('');

  // Form PPDB
  const [ppdbForm, setPpdbForm] = useState({
    nama: '', nik: '', asalSekolah: '', jurusan: 'MPLB',
    nohp: '', email: '', alamat: '', jalur: 'Reguler'
  });
  const [ppdbSubmitted, setPpdbSubmitted] = useState(false);

  // Cek Status Pendaftaran
  const [checkId, setCheckId] = useState('');
  const [checkResult, setCheckResult] = useState(null);

  // New Interactive States
  const [openFaqId, setOpenFaqId] = useState(0);
  const [activeKasekTab, setActiveKasekTab] = useState('sambutan');
  const [showWaPopup, setShowWaPopup] = useState(false);
  const [waSelectedMsg, setWaSelectedMsg] = useState('Halo Admin PPDB SMK Ardjuna 2 Malang, saya ingin berkonsultasi mengenai pendaftaran siswa baru.');

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
      if (window.scrollY > 450) {
        setShowScrollTop(true);
      } else {
        setShowScrollTop(false);
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navigateTo = (view) => {
    setActiveView(view);
    setSelectedArticle(null);
    setMobileMenu(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // ─── DATA SEKOLAH ───
  const school = {
    name: "SMKS ARDJUNA 2 MALANG",
    shortName: "SMK ARDJUNA 2",
    tagline: "A Multi-Skills Based School",
    npsn: "20533816",
    akreditasi: "B (Skor 87)",
    alamat: "Jl. Teluk Pelabuhan Ratu No. 41, Arjosari, Kec. Blimbing, Kota Malang 65126",
    telepon: "(0341) 491410",
    email: "smkardjuna2@gmail.com",
    kepsek: "Drs. Anang Kuswanto",
    luasTanah: "4.440 m² (Milik Sendiri)"
  };

  // ─── DATA: PROGRAM KEAHLIAN ───
  const majors = [
    {
      code: "MPLB",
      name: "Manajemen Perkantoran & Layanan Bisnis",
      badge: "Paling Diminati 🚀",
      icon: Briefcase,
      color: "#4f46e5",
      bgColor: "#eef2ff",
      desc: "Membekali siswa keahlian korespondensi niaga, kearsipan digital, otomatisasi tata kelola perkantoran, public relations, dan kesekretariatan modern.",
      careers: ["Sekretaris Eksekutif", "Staf Administrasi Perkantoran", "Customer Service Officer", "Staf Arsiparis & HRD"]
    },
    {
      code: "BDP",
      name: "Bisnis Daring & Pemasaran",
      badge: "Karier Cepat 🎯",
      icon: Store,
      color: "#059669",
      bgColor: "#ecfdf5",
      desc: "Menguasai pemasaran digital (SEO, Marketplace, Social Media Ads), operasional toko ritel modern dengan kasir POS digital, dan wirausaha mandiri.",
      careers: ["Digital Marketing Specialist", "Supervisor Toko Ritel Modern", "Kasir POS Profesional", "Technopreneur Muda"]
    },
    {
      code: "AKL",
      name: "Akuntansi & Keuangan Lembaga",
      badge: "Keahlian Akurat 📊",
      icon: Calculator,
      color: "#0284c7",
      bgColor: "#f0f9ff",
      desc: "Penguasaan siklus akuntansi lengkap (jasa, dagang, manufaktur), software komputer akuntansi (MYOB, Accurate), administrasi perpajakan, dan perbankan.",
      careers: ["Staf Akuntansi & Pembukuan", "Admin Perpajakan", "Junior Auditor Perusahaan", "Teller & Keuangan Lembaga"]
    }
  ];

  // ─── DATA: 5 MULTI-SKILLS (BEBAS BIAYA) ───
  const multiSkills = [
    {
      name: "Mengemudi Mobil (SIM A)",
      desc: "Pelatihan mengemudi langsung sampai mahir dan difasilitasi pengurusan SIM A resmi.",
      icon: Car,
      color: "#4f46e5",
      bg: "#eef2ff"
    },
    {
      name: "Tata Boga & Barista",
      desc: "Meracik aneka kopi kekinian berstandar cafe serta pengolahan produk kuliner komersial.",
      icon: Coffee,
      color: "#d97706",
      bg: "#fef3c7"
    },
    {
      name: "Perhotelan & Front Office",
      desc: "Standar operasional kebersihan kamar (housekeeping) dan pelayanan prima resepsionis hotel.",
      icon: Building,
      color: "#0284c7",
      bg: "#f0f9ff"
    },
    {
      name: "Tata Busana & Menjahit",
      desc: "Pembuatan pola, memotong bahan kain presisi, hingga menjahit busana kerja modern.",
      icon: Scissors,
      color: "#db2777",
      bg: "#fdf2f8"
    },
    {
      name: "Otomotif Ringan (TSM)",
      desc: "Dasar servis berkala, tune-up sepeda motor, dan perawatan kelistrikan kendaraan roda dua.",
      icon: Wrench,
      color: "#059669",
      bg: "#ecfdf5"
    }
  ];

  // ─── DATA: FASILITAS ───
  const facilities = [
    { title: "Gedung Sendiri 4.440 m²", desc: "Lingkungan sekolah luas, asri, strategis, dan milik sendiri dengan sarana terpadu.", icon: Building },
    { title: "Lab Komputer & Akuntansi Modern", desc: "Puluhan PC performa tinggi dengan software industri perkantoran, Accurate, dan MYOB.", icon: Monitor },
    { title: "Ardjuna Mart (Business Center)", desc: "Laboratorium riil simulator minimarket ber-barcode dan kasir POS digital.", icon: Store },
    { title: "Lab Perhotelan & Mockup Room", desc: "Ruang simulasi kamar hotel berstandar bintang untuk praktik riil housekeeping.", icon: Coffee },
    { title: "Masjid & Aula Serbaguna", desc: "Sarana ibadah representatif dan aula pertemuan berdaya tampung ratusan peserta.", icon: Heart },
    { title: "Lapangan Olahraga & Ekstrakurikuler", desc: "Fasilitas olahraga multifungsi untuk futsal, voli, basket, dan upacara bendera.", icon: Award }
  ];

  // ─── CSS DESIGN TOKENS & STYLESHEET ───
  const css = `
    .portal-v2 {
      --bg-dark: #07090e;
      --bg-white: #ffffff;
      --bg-slate: #f8fafc;
      --border-light: #e2e8f0;
      --border-dark: rgba(255, 255, 255, 0.08);
      
      --text-dark: #0f172a;
      --text-body: #334155;
      --text-muted: #64748b;
      --text-dim: #94a3b8;
      
      --accent: #4f46e5;
      --accent-light: #6366f1;
      --accent-soft: #eef2ff;
      
      --radius-sm: 8px;
      --radius-md: 12px;
      --radius-lg: 16px;
      --radius-xl: 20px;
      --radius-2xl: 28px;
      --radius-full: 9999px;
      
      --font-sans: 'Plus Jakarta Sans', 'Inter', -apple-system, sans-serif;
      --font-display: 'Space Grotesk', 'Plus Jakarta Sans', sans-serif;

      font-family: var(--font-sans);
      background-color: #ffffff;
      color: var(--text-dark);
      min-height: 100vh;
      line-height: 1.6;
      -webkit-font-smoothing: antialiased;
      overflow-x: hidden;
    }

    /* ─── Keyframe Animations ─── */
    @keyframes p2-fadeUp {
      from { opacity: 0; transform: translateY(24px); }
      to { opacity: 1; transform: translateY(0); }
    }
    @keyframes p2-fadeIn {
      from { opacity: 0; }
      to { opacity: 1; }
    }
    @keyframes p2-pulseDot {
      0% { transform: scale(1); opacity: 0.8; box-shadow: 0 0 0 0 rgba(16, 185, 129, 0.7); }
      70% { transform: scale(1.1); opacity: 1; box-shadow: 0 0 0 8px rgba(16, 185, 129, 0); }
      100% { transform: scale(1); opacity: 0.8; box-shadow: 0 0 0 0 rgba(16, 185, 129, 0); }
    }

    /* ─── Navbar: Floating Adaptive Glass Bar ─── */
    .p2-navbar {
      position: fixed;
      top: 0;
      left: 0;
      right: 0;
      z-index: 100;
      padding: 16px 20px;
      transition: all 0.35s cubic-bezier(0.16, 1, 0.3, 1);
    }
    .p2-navbar.scrolled {
      padding: 12px 20px;
    }
    .p2-navbar-inner {
      max-width: 1240px;
      margin: 0 auto;
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: 10px 20px;
      background: rgba(14, 14, 19, 0.76);
      backdrop-filter: blur(24px) saturate(1.8);
      -webkit-backdrop-filter: blur(24px) saturate(1.8);
      border: 1px solid rgba(255, 255, 255, 0.12);
      border-radius: var(--radius-full);
      box-shadow: 0 10px 30px rgba(0, 0, 0, 0.35);
      gap: 16px;
      transition: all 0.3s ease;
    }
    .p2-navbar.scrolled .p2-navbar-inner {
      background: rgba(14, 14, 19, 0.88);
      border-color: rgba(255, 255, 255, 0.14);
      box-shadow: 0 14px 36px rgba(0, 0, 0, 0.4);
    }
    .p2-nav-logo {
      display: flex;
      align-items: center;
      gap: 12px;
      cursor: pointer;
      text-decoration: none;
      flex-shrink: 0;
      min-width: max-content;
    }
    .p2-nav-logo img {
      width: 36px;
      height: 36px;
      object-fit: contain;
      filter: drop-shadow(0 2px 8px rgba(0, 0, 0, 0.4));
      flex-shrink: 0;
    }
    .p2-nav-logo-text {
      display: flex;
      flex-direction: column;
      line-height: 1.15;
      white-space: nowrap;
      flex-shrink: 0;
    }
    .p2-nav-logo-text strong {
      font-size: 0.94rem;
      font-weight: 800;
      letter-spacing: -0.01em;
      color: #ffffff;
      font-family: var(--font-display);
      white-space: nowrap;
      word-break: keep-all;
      display: inline-block;
    }
    .p2-nav-logo-text span {
      font-size: 0.64rem;
      color: #94a3b8;
      font-weight: 600;
      letter-spacing: 0.08em;
      white-space: nowrap;
      word-break: keep-all;
      display: inline-block;
    }

    .p2-nav-links {
      display: flex;
      align-items: center;
      gap: 6px;
      flex-wrap: nowrap;
    }
    .p2-nav-link {
      padding: 8px 16px;
      font-size: 0.86rem;
      font-weight: 600;
      color: #94a3b8;
      border-radius: var(--radius-full);
      cursor: pointer;
      transition: all 0.2s ease;
      border: 1px solid transparent;
      background: none;
      font-family: inherit;
      white-space: nowrap;
    }
    .p2-nav-link:hover {
      color: #ffffff;
      background: rgba(255, 255, 255, 0.08);
    }
    .p2-nav-link.active {
      color: #ffffff;
      background: rgba(99, 102, 241, 0.22);
      border-color: rgba(99, 102, 241, 0.45);
    }

    .p2-nav-cta-group {
      display: flex;
      align-items: center;
      gap: 8px;
      flex-shrink: 0;
    }
    .p2-nav-cta {
      padding: 9px 18px;
      font-size: 0.82rem;
      font-weight: 700;
      background: linear-gradient(135deg, #6366f1 0%, #4f46e5 100%);
      color: #ffffff;
      border: 1px solid rgba(255, 255, 255, 0.15);
      border-radius: var(--radius-full);
      cursor: pointer;
      transition: all 0.25s ease;
      font-family: inherit;
      display: flex;
      align-items: center;
      gap: 6px;
      box-shadow: 0 4px 16px rgba(99, 102, 241, 0.35);
      white-space: nowrap;
    }
    .p2-nav-cta:hover {
      transform: translateY(-1px);
      box-shadow: 0 6px 22px rgba(99, 102, 241, 0.5);
      background: linear-gradient(135deg, #818cf8 0%, #6366f1 100%);
    }
    .p2-nav-back {
      padding: 8px 14px;
      font-size: 0.78rem;
      font-weight: 600;
      background: rgba(255, 255, 255, 0.06);
      color: #cbd5e1;
      border: 1px solid rgba(255, 255, 255, 0.12);
      border-radius: var(--radius-full);
      cursor: pointer;
      transition: all 0.2s ease;
      font-family: inherit;
      display: flex;
      align-items: center;
      gap: 5px;
      white-space: nowrap;
    }
    .p2-nav-back:hover {
      background: rgba(255, 255, 255, 0.12);
      color: #ffffff;
      border-color: rgba(255, 255, 255, 0.2);
    }
    .p2-nav-mobile-btn {
      display: none;
      background: none;
      border: none;
      color: #ffffff;
      cursor: pointer;
      padding: 6px;
    }

    /* ─── Hero Section: Dark Cinematic Ambient ─── */
    /* ─── Hero Section: Dark Cinematic Ambient + Techno Cyber Interaction ─── */
    .p2-hero {
      position: relative;
      min-height: 94vh;
      overflow: hidden;
      display: flex;
      align-items: center;
      justify-content: center;
      padding: 130px 24px 80px;
      background: #09090b;
      --mx: 50%;
      --my: 50%;
      --has-mouse: 0;
      transition: background 0.3s ease;
    }
    .p2-hero-bg {
      position: absolute;
      inset: 0;
      z-index: 0;
    }
    .p2-hero-bg img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      filter: brightness(0.28) saturate(1.15);
      transition: transform 0.6s ease;
    }
    .p2-hero-gradient {
      position: absolute;
      inset: 0;
      z-index: 1;
      background:
        radial-gradient(circle at 50% 12%, rgba(99, 102, 241, 0.24) 0%, transparent 65%),
        radial-gradient(circle at 85% 85%, rgba(6, 182, 212, 0.14) 0%, transparent 55%),
        linear-gradient(180deg, rgba(9, 9, 11, 0.35) 0%, rgba(9, 9, 11, 0.78) 60%, #09090b 100%);
    }
    .p2-hero-noise {
      position: absolute;
      inset: 0;
      z-index: 2;
      opacity: 0.025;
      mix-blend-mode: overlay;
      pointer-events: none;
      background: url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E");
    }

    /* ─── Clean Dignified Hero Ambient ─── */

    .p2-hero-content {
      position: relative;
      z-index: 4;
      text-align: center;
      max-width: 860px;
      margin: 0 auto;
    }
    .p2-hero-badge {
      display: inline-flex;
      align-items: center;
      gap: 8px;
      padding: 7px 18px;
      border-radius: var(--radius-full);
      background: rgba(99, 102, 241, 0.12);
      border: 1px solid rgba(99, 102, 241, 0.28);
      font-size: 0.76rem;
      font-weight: 700;
      color: #818cf8;
      margin-bottom: 28px;
      letter-spacing: 0.06em;
      text-transform: uppercase;
      backdrop-filter: blur(12px);
      animation: p2-fadeUp 0.6s cubic-bezier(0.16, 1, 0.3, 1) both;
      transition: all 0.3s cubic-bezier(0.2, 0.8, 0.2, 1);
      cursor: default;
      position: relative;
    }
    .p2-hero-badge:hover {
      background: rgba(99, 102, 241, 0.18);
      border-color: #818cf8;
      color: #a5b4fc;
      transform: translateY(-1px);
    }
    .p2-hero-badge .dot {
      width: 7px;
      height: 7px;
      border-radius: 50%;
      background: #10b981;
      animation: p2-pulseDot 2s infinite ease-in-out;
      transition: all 0.3s ease;
    }
    .p2-hero-badge:hover .dot {
      background: #38bdf8;
      box-shadow: 0 0 12px #38bdf8;
    }
    .p2-hero h1 {
      font-family: var(--font-display);
      font-size: 3.8rem;
      font-weight: 800;
      line-height: 1.12;
      letter-spacing: -0.035em;
      color: #ffffff;
      margin-bottom: 24px;
      animation: p2-fadeUp 0.7s cubic-bezier(0.16, 1, 0.3, 1) both;
      transition: text-shadow 0.3s ease;
    }
    .p2-hero h1:hover {
      text-shadow: 0 0 35px rgba(56, 189, 248, 0.3);
    }
    .p2-gradient-hero {
      background: linear-gradient(135deg, #60a5fa 0%, #38bdf8 50%, #34d399 100%);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      display: inline-block;
      transition: filter 0.3s ease, letter-spacing 0.3s ease;
    }
    .p2-hero h1:hover .p2-gradient-hero {
      filter: drop-shadow(0 0 22px rgba(56, 189, 248, 0.85)) drop-shadow(0 0 45px rgba(99, 102, 241, 0.55));
    }
    .p2-hero p {
      font-size: 1.12rem;
      color: #94a3b8;
      max-width: 640px;
      margin: 0 auto 36px;
      line-height: 1.7;
      font-weight: 400;
      animation: p2-fadeUp 0.8s cubic-bezier(0.16, 1, 0.3, 1) both;
    }
    .p2-hero-actions {
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 14px;
      flex-wrap: wrap;
      margin-bottom: 48px;
      animation: p2-fadeUp 0.9s cubic-bezier(0.16, 1, 0.3, 1) both;
    }
    .p2-hero-btn-primary {
      padding: 14px 30px;
      font-size: 0.95rem;
      font-weight: 700;
      background: linear-gradient(135deg, #6366f1 0%, #4f46e5 100%);
      color: #ffffff;
      border: 1px solid rgba(255, 255, 255, 0.18);
      border-radius: var(--radius-full);
      cursor: pointer;
      transition: all 0.25s ease;
      font-family: inherit;
      display: inline-flex;
      align-items: center;
      gap: 8px;
      box-shadow: 0 8px 24px rgba(99, 102, 241, 0.4);
      position: relative;
      overflow: hidden;
    }
    .p2-hero-btn-primary::before {
      content: '';
      position: absolute;
      top: -50%;
      left: -60%;
      width: 40%;
      height: 200%;
      background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.45), transparent);
      transform: rotate(25deg);
      transition: 0.6s ease;
      opacity: 0;
      pointer-events: none;
    }
    .p2-hero-btn-primary:hover {
      transform: translateY(-2px);
      box-shadow: 0 0 32px rgba(99, 102, 241, 0.8), 0 0 55px rgba(56, 189, 248, 0.5);
      background: linear-gradient(135deg, #818cf8 0%, #4f46e5 100%);
      border-color: #38bdf8;
    }
    .p2-hero-btn-primary:hover::before {
      left: 140%;
      opacity: 1;
    }
    .p2-hero-btn-secondary {
      padding: 14px 28px;
      font-size: 0.95rem;
      font-weight: 600;
      background: rgba(255, 255, 255, 0.05);
      color: #ffffff;
      border: 1px solid rgba(255, 255, 255, 0.15);
      border-radius: var(--radius-full);
      cursor: pointer;
      transition: all 0.25s ease;
      font-family: inherit;
      display: inline-flex;
      align-items: center;
      gap: 8px;
      backdrop-filter: blur(12px);
      position: relative;
    }
    .p2-hero-btn-secondary:hover {
      background: rgba(6, 182, 212, 0.14);
      border-color: #38bdf8;
      color: #38bdf8;
      transform: translateY(-2px);
      box-shadow: 0 0 28px rgba(56, 189, 248, 0.4), inset 0 0 16px rgba(56, 189, 248, 0.2);
    }
    .p2-hero-trust-strip {
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 12px;
      flex-wrap: wrap;
      animation: p2-fadeUp 1s cubic-bezier(0.16, 1, 0.3, 1) both;
    }
    .p2-trust-pill {
      display: inline-flex;
      align-items: center;
      gap: 7px;
      padding: 6px 14px;
      background: rgba(18, 18, 23, 0.6);
      backdrop-filter: blur(12px);
      border: 1px solid rgba(255, 255, 255, 0.08);
      border-radius: var(--radius-full);
      font-size: 0.78rem;
      font-weight: 600;
      color: #94a3b8;
      transition: all 0.25s cubic-bezier(0.2, 0.8, 0.2, 1);
      cursor: default;
    }
    .p2-trust-pill:hover {
      transform: translateY(-3px) scale(1.03);
      background: rgba(15, 23, 42, 0.85);
      border-color: rgba(56, 189, 248, 0.55);
      box-shadow: 0 6px 22px rgba(56, 189, 248, 0.28), inset 0 0 10px rgba(56, 189, 248, 0.15);
      color: #f1f5f9;
    }
    .p2-trust-pill:hover strong {
      color: #38bdf8;
      text-shadow: 0 0 10px rgba(56, 189, 248, 0.6);
    }

    /* ─── Bento Stats Bar: Clean Light Bridge Card & Interactive Numbers ─── */
    .p2-stats-bar {
      position: relative;
      z-index: 10;
      margin-top: -42px;
      padding: 0 24px;
    }
    .p2-stats-inner {
      max-width: 1160px;
      margin: 0 auto;
      display: grid;
      grid-template-columns: repeat(4, 1fr);
      background: #ffffff;
      border: 1px solid #e2e8f0;
      border-radius: 24px;
      box-shadow: 0 20px 45px -10px rgba(15, 23, 42, 0.12), 0 4px 12px rgba(15, 23, 42, 0.04);
      overflow: hidden;
      transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);
    }
    .p2-stats-inner:hover {
      box-shadow: 0 28px 60px -12px rgba(15, 23, 42, 0.16), 0 8px 24px -4px rgba(37, 99, 235, 0.08);
      border-color: #cbd5e1;
    }
    .p2-stat-item {
      position: relative;
      padding: 28px 20px 24px;
      text-align: center;
      border-right: 1px solid #f1f5f9;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      gap: 6px;
      transition: all 0.35s cubic-bezier(0.16, 1, 0.3, 1);
      cursor: default;
      overflow: hidden;
    }
    .p2-stat-item::before {
      content: '';
      position: absolute;
      top: 0;
      left: 10%;
      right: 10%;
      height: 3px;
      background: linear-gradient(90deg, transparent, #2563eb 50%, transparent);
      opacity: 0;
      transform: scaleX(0.3);
      transition: all 0.35s cubic-bezier(0.16, 1, 0.3, 1);
      border-radius: 99px;
    }
    .p2-stat-item:last-child {
      border-right: none;
    }
    .p2-stat-item:hover {
      background: linear-gradient(180deg, #ffffff 0%, #f8faff 100%);
      transform: translateY(-4px);
    }
    .p2-stat-item:hover::before {
      opacity: 1;
      transform: scaleX(1);
    }
    .p2-stat-icon-wrapper {
      width: 40px;
      height: 40px;
      border-radius: 12px;
      display: flex;
      align-items: center;
      justify-content: center;
      background: #eff6ff;
      color: #2563eb;
      margin-bottom: 2px;
      transition: all 0.35s cubic-bezier(0.16, 1, 0.3, 1);
      border: 1px solid #dbeafe;
    }
    .p2-stat-item:hover .p2-stat-icon-wrapper {
      background: linear-gradient(135deg, #2563eb 0%, #1d4ed8 100%);
      color: #ffffff;
      transform: scale(1.12) rotate(6deg);
      box-shadow: 0 8px 18px -4px rgba(37, 99, 235, 0.45);
      border-color: #2563eb;
    }
    .p2-stat-number {
      font-family: var(--font-display);
      font-size: 2.35rem;
      font-weight: 850;
      letter-spacing: -0.025em;
      line-height: 1.1;
      background: linear-gradient(135deg, #0f172a 0%, #1e3a8a 55%, #2563eb 100%);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      display: inline-flex;
      align-items: baseline;
      justify-content: center;
      gap: 2px;
      transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);
      margin-bottom: 2px;
    }
    .p2-stat-item:hover .p2-stat-number {
      transform: scale(1.08);
      filter: drop-shadow(0 4px 10px rgba(37, 99, 235, 0.25));
    }
    .p2-stat-number-animated {
      display: inline-flex;
      align-items: baseline;
      justify-content: center;
    }
    .p2-stat-num-val {
      font-variant-numeric: tabular-nums;
    }
    .p2-stat-num-suffix {
      font-size: 1.65rem;
      font-weight: 800;
      background: linear-gradient(135deg, #2563eb 0%, #38bdf8 100%);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      margin-left: 2px;
    }
    .p2-stat-label {
      font-size: 0.78rem;
      font-weight: 650;
      color: #64748b;
      text-transform: uppercase;
      letter-spacing: 0.05em;
      transition: color 0.25s ease;
      line-height: 1.4;
    }
    .p2-stat-item:hover .p2-stat-label {
      color: #0f172a;
    }

    /* ─── Full-width Light Section Strips (Webflow Layout) ─── */
    .p2-strip-white {
      background-color: #ffffff;
    }
    .p2-strip-slate {
      background-color: #f8fafc;
      border-top: 1px solid #f1f5f9;
      border-bottom: 1px solid #f1f5f9;
    }
    .p2-section {
      max-width: 1240px;
      margin: 0 auto;
      padding: 92px 24px;
      position: relative;
    }
    .p2-section-header {
      text-align: center;
      max-width: 700px;
      margin: 0 auto 52px;
    }
    .p2-section-badge {
      display: inline-flex;
      align-items: center;
      gap: 6px;
      padding: 5px 14px;
      border-radius: var(--radius-full);
      font-size: 0.74rem;
      font-weight: 700;
      margin-bottom: 16px;
      letter-spacing: 0.08em;
      text-transform: uppercase;
    }
    .p2-badge-indigo {
      background: #eef2ff;
      color: #4f46e5;
      border: 1px solid #c7d2fe;
    }
    .p2-badge-amber {
      background: #fef3c7;
      color: #d97706;
      border: 1px solid #fde68a;
    }
    .p2-badge-sky {
      background: #e0f2fe;
      color: #0284c7;
      border: 1px solid #bae6fd;
    }
    .p2-badge-emerald {
      background: #ecfdf5;
      color: #059669;
      border: 1px solid #a7f3d0;
    }

    .p2-section-title {
      font-family: var(--font-display);
      font-size: 2.35rem;
      font-weight: 800;
      letter-spacing: -0.025em;
      line-height: 1.25;
      color: #0f172a;
      margin-bottom: 14px;
    }
    .p2-section-subtitle {
      font-size: 1rem;
      color: #475569;
      line-height: 1.7;
      font-weight: 400;
    }

    /* ─── Programs Cards (Light Webflow Card Grid) ─── */
    .p2-programs-grid {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      gap: 24px;
    }
    .p2-program-card {
      background: #ffffff;
      border: 1px solid #e2e8f0;
      border-radius: var(--radius-xl);
      padding: 32px 28px;
      display: flex;
      flex-direction: column;
      transition: all 0.35s cubic-bezier(0.16, 1, 0.3, 1);
      position: relative;
      overflow: hidden;
      box-shadow: 0 4px 20px -2px rgba(15, 23, 42, 0.05);
    }
    .p2-program-card::before {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      height: 3px;
      background: var(--card-accent, #4f46e5);
    }
    .p2-program-card:hover {
      transform: translateY(-6px);
      border-color: #cbd5e1;
      box-shadow: 0 20px 40px -8px rgba(15, 23, 42, 0.12);
    }
    .p2-program-icon {
      width: 52px;
      height: 52px;
      border-radius: var(--radius-md);
      display: flex;
      align-items: center;
      justify-content: center;
      margin-bottom: 20px;
    }
    .p2-program-tag {
      display: inline-block;
      align-self: flex-start;
      padding: 4px 10px;
      border-radius: var(--radius-full);
      font-size: 0.7rem;
      font-weight: 700;
      letter-spacing: 0.04em;
      text-transform: uppercase;
      margin-bottom: 12px;
    }
    .p2-program-card h3 {
      font-family: var(--font-display);
      font-size: 1.75rem;
      font-weight: 800;
      color: #0f172a;
      margin-bottom: 4px;
    }
    .p2-program-card .subtitle {
      font-size: 0.9rem;
      font-weight: 600;
      color: #334155;
      margin-bottom: 14px;
      line-height: 1.4;
    }
    .p2-program-card p {
      font-size: 0.88rem;
      color: #64748b;
      line-height: 1.65;
      margin-bottom: 22px;
      flex-grow: 1;
    }
    .p2-program-careers {
      list-style: none;
      padding: 16px 0 0;
      border-top: 1px solid #f1f5f9;
      display: grid;
      gap: 8px;
    }
    .p2-program-careers li {
      font-size: 0.82rem;
      color: #334155;
      font-weight: 500;
      display: flex;
      align-items: center;
      gap: 8px;
    }

    /* ─── Bento Grid: 5 Multi-Skills (Light Bento Cards) ─── */
    .p2-bento-grid {
      display: grid;
      grid-template-columns: repeat(5, 1fr);
      gap: 18px;
    }
    .p2-bento-item {
      background: #ffffff;
      border: 1px solid #e2e8f0;
      border-radius: var(--radius-lg);
      padding: 28px 20px;
      text-align: center;
      transition: all 0.3s ease;
      display: flex;
      flex-direction: column;
      align-items: center;
      box-shadow: 0 4px 16px -2px rgba(15, 23, 42, 0.04);
    }
    .p2-bento-item:hover {
      transform: translateY(-5px);
      border-color: #cbd5e1;
      box-shadow: 0 16px 32px -4px rgba(15, 23, 42, 0.09);
    }
    .p2-bento-icon {
      width: 52px;
      height: 52px;
      border-radius: 16px;
      display: flex;
      align-items: center;
      justify-content: center;
      margin-bottom: 18px;
    }
    .p2-bento-item h4 {
      font-family: var(--font-display);
      font-size: 1.05rem;
      font-weight: 700;
      color: #0f172a;
      margin-bottom: 8px;
      line-height: 1.35;
    }
    .p2-bento-item p {
      font-size: 0.82rem;
      color: #64748b;
      line-height: 1.55;
      margin-bottom: 18px;
      flex-grow: 1;
    }
    .p2-bento-free {
      padding: 4px 12px;
      border-radius: var(--radius-full);
      background: #dcfce7;
      color: #15803d;
      border: 1px solid #bbf7d0;
      font-size: 0.72rem;
      font-weight: 700;
      letter-spacing: 0.04em;
    }

    /* ─── Fasilitas Sekolah (Clean Light Architecture Cards) ─── */
    .p2-facility-grid {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      gap: 24px;
    }
    .p2-facility-card {
      background: #ffffff;
      border: 1px solid #e2e8f0;
      border-radius: var(--radius-xl);
      padding: 28px 24px;
      display: flex;
      gap: 18px;
      align-items: flex-start;
      transition: all 0.3s ease;
      box-shadow: 0 4px 16px -2px rgba(15, 23, 42, 0.04);
    }
    .p2-facility-card:hover {
      background: #f8fafc;
      transform: translateY(-4px);
      border-color: #cbd5e1;
      box-shadow: 0 16px 32px -4px rgba(15, 23, 42, 0.08);
    }
    .p2-facility-icon {
      width: 48px;
      height: 48px;
      border-radius: 14px;
      background: #f0f9ff;
      color: #0284c7;
      border: 1px solid #bae6fd;
      display: flex;
      align-items: center;
      justify-content: center;
      flex-shrink: 0;
    }
    .p2-facility-card h4 {
      font-size: 1.05rem;
      font-weight: 700;
      color: #0f172a;
      margin-bottom: 6px;
    }
    .p2-facility-card p {
      font-size: 0.85rem;
      color: #64748b;
      line-height: 1.6;
    }

    /* ─── Prestasi & Penghargaan (Light Prestige Cards) ─── */
    .p2-achieve-grid {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      gap: 22px;
    }
    .p2-achieve-card {
      background: #ffffff;
      border: 1px solid #e2e8f0;
      border-radius: var(--radius-xl);
      padding: 26px;
      display: flex;
      gap: 20px;
      align-items: flex-start;
      transition: all 0.3s ease;
      box-shadow: 0 4px 18px -2px rgba(15, 23, 42, 0.05);
    }
    .p2-achieve-card:hover {
      transform: translateY(-3px);
      border-color: #cbd5e1;
      box-shadow: 0 16px 32px -4px rgba(15, 23, 42, 0.09);
    }
    .p2-achieve-icon {
      width: 48px;
      height: 48px;
      border-radius: var(--radius-md);
      display: flex;
      align-items: center;
      justify-content: center;
      flex-shrink: 0;
    }
    .p2-achieve-body {
      flex: 1;
      min-width: 0;
    }
    .p2-achieve-body h4 {
      font-size: 1.04rem;
      font-weight: 700;
      color: #0f172a;
      margin-bottom: 6px;
      line-height: 1.4;
    }
    .p2-achieve-body .meta {
      font-size: 0.78rem;
      color: #64748b;
      margin-bottom: 10px;
      font-weight: 600;
    }
    .p2-achieve-body p {
      font-size: 0.86rem;
      color: #475569;
      line-height: 1.6;
      margin-bottom: 14px;
    }
    .p2-achieve-medal {
      display: inline-block;
      padding: 4px 12px;
      border-radius: var(--radius-full);
      font-size: 0.74rem;
      font-weight: 700;
    }

    /* ─── 3D Coverflow Eyewear Stage (Clean White Stage & Elevated Card Shadows) ─── */
    .p2-coverflow-stage {
      position: relative;
      background: #ffffff;
      padding: 96px 20px 96px;
      overflow: hidden;
      color: #0f172a;
      user-select: none;
      outline: none;
      border-top: 1px solid #f1f5f9;
      border-bottom: 1px solid #f1f5f9;
    }
    .p2-stage-vignette {
      position: absolute;
      inset: 0;
      background: radial-gradient(circle at 50% 30%, transparent 60%, rgba(248, 250, 252, 0.8) 100%);
      pointer-events: none;
      z-index: 1;
    }
    .p2-stage-halo {
      position: absolute;
      top: 55%;
      left: 50%;
      width: 720px;
      height: 480px;
      transform: translate(-50%, -50%);
      border-radius: 50%;
      filter: blur(85px);
      pointer-events: none;
      transition: background 0.7s cubic-bezier(0.16, 1, 0.3, 1), opacity 0.5s ease;
      z-index: 1;
      opacity: 0.8;
    }
    .p2-coverflow-header {
      position: relative;
      z-index: 5;
      text-align: center;
      max-width: 780px;
      margin: 0 auto 52px;
    }
    .p2-coverflow-eyewear-badge {
      display: inline-flex;
      align-items: center;
      gap: 10px;
      padding: 7px 18px;
      border-radius: var(--radius-full);
      background: #090d16;
      border: 1px solid #1e293b;
      margin-bottom: 22px;
      box-shadow: 0 4px 16px rgba(15, 23, 42, 0.12), inset 0 1px 2px rgba(255, 255, 255, 0.05);
      transition: all 0.4s ease;
    }
    .p2-eyewear-icon-wrap {
      width: 32px;
      height: 32px;
      border-radius: 50%;
      background: #111827;
      border: 1px solid #334155;
      display: flex;
      align-items: center;
      justify-content: center;
      transition: all 0.4s ease;
      box-shadow: 0 2px 6px rgba(0, 0, 0, 0.4);
    }
    .p2-eyewear-label {
      font-size: 0.8rem;
      font-weight: 700;
      letter-spacing: 0.06em;
      text-transform: uppercase;
      font-family: inherit;
      transition: color 0.4s ease;
    }
    .p2-coverflow-stage-title {
      font-family: var(--font-display);
      font-size: 2.5rem;
      font-weight: 800;
      line-height: 1.25;
      letter-spacing: -0.025em;
      color: #000000;
      margin-bottom: 14px;
    }
    .p2-coverflow-stage-title span {
      display: block;
      color: #000000;
      font-weight: 800;
      margin-top: 4px;
      background: none;
      -webkit-text-fill-color: initial;
    }
    .p2-coverflow-stage-sub {
      font-size: 0.98rem;
      color: #475569;
      max-width: 600px;
      margin: 0 auto;
      line-height: 1.65;
    }

    /* ─── 3D Fan Track ─── */
    .p2-coverflow-track-wrap {
      position: relative;
      z-index: 5;
      height: 520px;
      display: flex;
      align-items: center;
      justify-content: center;
      perspective: 1200px;
      perspective-origin: 50% 50%;
      cursor: grab;
      touch-action: pan-y;
    }
    .p2-coverflow-track-wrap:active {
      cursor: grabbing;
    }
    .p2-stage-floor-shadow {
      position: absolute;
      bottom: 8px;
      left: 50%;
      transform: translateX(-50%);
      width: 440px;
      height: 38px;
      border-radius: 50%;
      background: radial-gradient(ellipse at center, rgba(15, 23, 42, 0.18) 0%, rgba(15, 23, 42, 0.06) 50%, transparent 75%);
      filter: blur(10px);
      pointer-events: none;
      z-index: 2;
    }
    .p2-coverflow-card {
      position: absolute;
      width: 335px;
      height: 455px;
      border-radius: 26px;
      overflow: hidden;
      background: #090d16;
      border: 1px solid #e2e8f0;
      transition: transform 0.65s cubic-bezier(0.16, 1, 0.3, 1), 
                  opacity 0.65s cubic-bezier(0.16, 1, 0.3, 1), 
                  filter 0.65s cubic-bezier(0.16, 1, 0.3, 1), 
                  box-shadow 0.65s cubic-bezier(0.16, 1, 0.3, 1), 
                  border-color 0.65s cubic-bezier(0.16, 1, 0.3, 1);
      transform-style: preserve-3d;
      backface-visibility: hidden;
      cursor: pointer;
    }
    .p2-coverflow-card-img {
      position: absolute;
      inset: 0;
      width: 100%;
      height: 100%;
      object-fit: cover;
      object-position: center 25%;
      image-rendering: -webkit-optimize-contrast;
      filter: contrast(1.08) saturate(1.12) brightness(1.03);
      transition: transform 0.8s cubic-bezier(0.16, 1, 0.3, 1), filter 0.5s ease;
    }
    .p2-coverflow-card:hover .p2-coverflow-card-img {
      transform: scale(1.05);
      filter: contrast(1.1) saturate(1.15) brightness(1.05);
    }
    .p2-coverflow-card-overlay {
      position: absolute;
      inset: 0;
      background: linear-gradient(180deg, 
        rgba(0, 0, 0, 0) 0%, 
        rgba(0, 0, 0, 0) 38%, 
        rgba(7, 10, 19, 0.42) 60%, 
        rgba(7, 10, 19, 0.86) 80%, 
        #060810 100%
      );
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      padding: 24px;
      pointer-events: none;
    }
    .p2-coverflow-card-top {
      display: flex;
      justify-content: space-between;
      align-items: center;
    }
    .p2-coverflow-badge {
      display: inline-flex;
      align-items: center;
      gap: 6px;
      padding: 5px 12px;
      border-radius: var(--radius-full);
      font-size: 0.72rem;
      font-weight: 700;
      letter-spacing: 0.05em;
      text-transform: uppercase;
      background: rgba(0, 0, 0, 0.6);
      backdrop-filter: blur(10px);
      border: 1px solid rgba(255, 255, 255, 0.15);
      transition: all 0.3s ease;
    }
    .p2-coverflow-index {
      font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, monospace;
      font-size: 0.74rem;
      color: rgba(255, 255, 255, 0.5);
      font-weight: 600;
    }
    .p2-coverflow-card-bottom {
      display: flex;
      flex-direction: column;
      gap: 10px;
    }
    .p2-coverflow-card-title {
      font-family: var(--font-display);
      font-size: 1.15rem;
      font-weight: 800;
      line-height: 1.35;
      color: #ffffff;
      margin: 0;
      display: -webkit-box;
      -webkit-line-clamp: 2;
      -webkit-box-orient: vertical;
      overflow: hidden;
      text-shadow: 0 2px 10px rgba(0, 0, 0, 0.8);
    }
    .p2-coverflow-card-excerpt {
      font-size: 0.82rem;
      color: #94a3b8;
      line-height: 1.5;
      margin: 0;
      display: -webkit-box;
      -webkit-line-clamp: 2;
      -webkit-box-orient: vertical;
      overflow: hidden;
    }
    .p2-coverflow-meta-row {
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding-top: 12px;
      border-top: 1px solid rgba(255, 255, 255, 0.1);
      margin-top: 2px;
    }
    .p2-coverflow-meta-left {
      display: flex;
      flex-direction: column;
      gap: 3px;
      font-size: 0.72rem;
      color: #94a3b8;
    }
    .p2-coverflow-meta-left span {
      display: flex;
      align-items: center;
      gap: 5px;
    }
    .p2-coverflow-read-pill {
      pointer-events: auto;
      padding: 7px 14px;
      border-radius: var(--radius-full);
      font-size: 0.75rem;
      font-weight: 700;
      background: rgba(255, 255, 255, 0.1);
      border: 1px solid rgba(255, 255, 255, 0.2);
      color: #ffffff;
      display: inline-flex;
      align-items: center;
      gap: 6px;
      backdrop-filter: blur(8px);
      cursor: pointer;
      transition: all 0.25s ease;
    }
    .p2-coverflow-read-pill:hover {
      background: #ffffff;
      color: #0f172a;
      transform: translateY(-2px);
    }

    /* ─── Controls Bar below ─── */
    .p2-coverflow-controls {
      position: relative;
      z-index: 5;
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 20px;
      margin-top: 40px;
    }
    .p2-coverflow-nav-btn {
      width: 44px;
      height: 44px;
      border-radius: 50%;
      background: #ffffff;
      border: 1px solid #e2e8f0;
      color: #0f172a;
      display: flex;
      align-items: center;
      justify-content: center;
      cursor: pointer;
      transition: all 0.25s ease;
      box-shadow: 0 4px 12px rgba(15, 23, 42, 0.06);
    }
    .p2-coverflow-nav-btn:hover {
      background: #f8fafc;
      border-color: #cbd5e1;
      transform: scale(1.08);
      box-shadow: 0 6px 18px rgba(15, 23, 42, 0.1);
    }
    .p2-coverflow-dots {
      display: flex;
      align-items: center;
      gap: 8px;
    }
    .p2-coverflow-dot {
      width: 8px;
      height: 8px;
      border-radius: var(--radius-full);
      background: #cbd5e1;
      cursor: pointer;
      transition: all 0.35s cubic-bezier(0.16, 1, 0.3, 1);
      border: none;
      padding: 0;
    }
    .p2-coverflow-dot.active {
      width: 28px;
      background: var(--active-hue, #4f46e5);
      box-shadow: 0 0 12px var(--active-hue, #4f46e5);
    }
    .p2-coverflow-play-btn {
      background: none;
      border: none;
      color: #94a3b8;
      cursor: pointer;
      padding: 6px;
      display: flex;
      align-items: center;
      justify-content: center;
      transition: color 0.2s ease;
    }
    .p2-coverflow-play-btn:hover {
      color: #0f172a;
    }
    .p2-coverflow-hint {
      text-align: center;
      margin-top: 18px;
      font-size: 0.76rem;
      color: #64748b;
      letter-spacing: 0.04em;
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 8px;
    }

    @media (max-width: 768px) {
      .p2-coverflow-stage {
        padding: 70px 16px 70px;
      }
      .p2-coverflow-stage-title {
        font-size: 1.95rem;
      }
      .p2-coverflow-track-wrap {
        height: 460px;
      }
      .p2-coverflow-card {
        width: 270px;
        height: 410px;
      }
    }

    /* ─── Call to Action (High-Contrast Webflow Prestige Banner) ─── */
    .p2-cta-box {
      background: linear-gradient(135deg, #0f172a 0%, #1e1b4b 60%, #0f172a 100%);
      border: 1px solid rgba(255, 255, 255, 0.12);
      border-radius: var(--radius-2xl);
      padding: 64px 32px;
      max-width: 860px;
      margin: 0 auto;
      text-align: center;
      position: relative;
      box-shadow: 0 24px 60px -10px rgba(15, 23, 42, 0.35);
    }
    .p2-cta-box h2 {
      color: #ffffff !important;
    }
    .p2-cta-box p {
      color: #cbd5e1 !important;
    }

    /* ─── Dedicated Guru & Karyawan View (Clean Light Theme) ─── */
    .p2-page-wrap {
      background-color: #f8fafc;
      min-height: 100vh;
      padding: 130px 24px 80px;
    }
    .p2-page-inner {
      max-width: 1240px;
      margin: 0 auto;
    }
    .p2-staff-grid {
      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(260px, 1fr));
      gap: 20px;
    }
    .p2-staff-card {
      background: #ffffff;
      border: 1px solid #e2e8f0;
      border-radius: var(--radius-xl);
      padding: 30px 22px 26px;
      text-align: center;
      transition: all 0.35s cubic-bezier(0.16, 1, 0.3, 1);
      box-shadow: 0 4px 18px -2px rgba(15, 23, 42, 0.05);
      position: relative;
      overflow: hidden;
      display: flex;
      flex-direction: column;
      align-items: center;
    }
    .p2-staff-card::before {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      height: 3px;
      background: var(--cat-accent, #4f46e5);
      transition: height 0.25s ease;
    }
    .p2-staff-card:hover {
      border-color: var(--cat-border, #cbd5e1);
      transform: translateY(-5px);
      box-shadow: 0 20px 35px -6px rgba(15, 23, 42, 0.1), 0 0 25px var(--cat-glow, rgba(99, 102, 241, 0.1));
    }
    .p2-staff-card:hover::before {
      height: 4px;
    }
    .p2-staff-avatar {
      width: 68px;
      height: 68px;
      border-radius: var(--radius-full);
      background: linear-gradient(135deg, #eef2ff 0%, #e0f2fe 100%);
      border: 2px solid #c7d2fe;
      color: #4f46e5;
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 1.45rem;
      font-weight: 800;
      margin: 0 auto 16px;
      font-family: var(--font-display);
    }
    .p2-staff-card h4 {
      font-size: 1.02rem;
      font-weight: 700;
      color: #0f172a;
      margin-bottom: 4px;
    }
    .p2-staff-card .role {
      font-size: 0.82rem;
      color: #4f46e5;
      font-weight: 600;
      margin-bottom: 12px;
    }
    .p2-staff-tag {
      display: inline-block;
      padding: 4px 12px;
      border-radius: var(--radius-full);
      background: #f1f5f9;
      border: 1px solid #e2e8f0;
      color: #475569;
      font-size: 0.74rem;
      font-weight: 600;
    }
    .p2-filter-tabs {
      display: flex;
      gap: 8px;
      flex-wrap: wrap;
      justify-content: center;
      margin-bottom: 24px;
    }
    .p2-filter-btn {
      padding: 8px 18px;
      font-size: 0.83rem;
      font-weight: 600;
      border-radius: var(--radius-full);
      border: 1px solid #e2e8f0;
      background: #ffffff;
      color: #475569;
      cursor: pointer;
      transition: all 0.2s ease;
      font-family: inherit;
      box-shadow: 0 1px 3px rgba(15, 23, 42, 0.04);
    }
    .p2-filter-btn:hover {
      color: #0f172a;
      border-color: #cbd5e1;
    }
    .p2-filter-btn.active {
      background: #4f46e5;
      color: #ffffff;
      border-color: #4f46e5;
      box-shadow: 0 4px 16px rgba(79, 70, 229, 0.35);
    }
    .p2-staff-search {
      max-width: 400px;
      margin: 0 auto 36px;
      position: relative;
    }
    .p2-staff-search input {
      width: 100%;
      padding: 12px 18px 12px 42px;
      background: #ffffff;
      border: 1px solid #cbd5e1;
      border-radius: var(--radius-full);
      color: #0f172a;
      font-size: 0.88rem;
      outline: none;
      font-family: inherit;
      transition: all 0.2s;
      box-shadow: 0 1px 3px rgba(15, 23, 42, 0.04);
    }
    .p2-staff-search input:focus {
      border-color: #4f46e5;
      box-shadow: 0 0 0 3px rgba(79, 70, 229, 0.15);
    }
    .p2-staff-search svg {
      position: absolute;
      left: 15px;
      top: 50%;
      transform: translateY(-50%);
      color: #94a3b8;
    }

    /* ─── PPDB & Cek Status Forms ─── */
    .p2-form-card {
      background: #ffffff;
      border: 1px solid #e2e8f0;
      border-radius: var(--radius-2xl);
      padding: 40px;
      box-shadow: 0 20px 45px -10px rgba(15, 23, 42, 0.08);
      max-width: 620px;
      margin: 0 auto;
    }
    .p2-form-card h2 {
      font-family: var(--font-display);
      font-size: 1.65rem;
      font-weight: 800;
      color: #0f172a;
      margin-bottom: 6px;
    }
    .p2-form-card .desc {
      font-size: 0.88rem;
      color: #64748b;
      margin-bottom: 28px;
    }
    .p2-form-group {
      margin-bottom: 18px;
    }
    .p2-form-group label {
      display: block;
      font-size: 0.8rem;
      font-weight: 600;
      color: #475569;
      margin-bottom: 6px;
      text-transform: uppercase;
      letter-spacing: 0.04em;
    }
    .p2-form-group input, .p2-form-group select {
      width: 100%;
      padding: 12px 16px;
      background: #f8fafc;
      border: 1px solid #cbd5e1;
      border-radius: var(--radius-md);
      color: #0f172a;
      font-size: 0.92rem;
      outline: none;
      font-family: inherit;
      transition: all 0.2s;
    }
    .p2-form-group input:focus, .p2-form-group select:focus {
      border-color: #4f46e5;
      background: #ffffff;
      box-shadow: 0 0 0 3px rgba(79, 70, 229, 0.15);
    }
    .p2-form-submit {
      width: 100%;
      padding: 14px;
      background: linear-gradient(135deg, #6366f1 0%, #4f46e5 100%);
      color: #ffffff;
      border: none;
      border-radius: var(--radius-full);
      font-size: 0.95rem;
      font-weight: 700;
      cursor: pointer;
      transition: all 0.25s ease;
      font-family: inherit;
      margin-top: 10px;
      box-shadow: 0 6px 20px rgba(99, 102, 241, 0.35);
    }
    .p2-form-submit:hover {
      transform: translateY(-2px);
      box-shadow: 0 8px 26px rgba(99, 102, 241, 0.5);
    }
    .p2-success-card {
      background: #ffffff;
      border: 1px solid #bbf7d0;
      border-radius: var(--radius-2xl);
      padding: 48px 32px;
      text-align: center;
      max-width: 620px;
      margin: 0 auto;
      box-shadow: 0 20px 45px -10px rgba(15, 23, 42, 0.08);
    }
    .p2-success-icon {
      width: 64px;
      height: 64px;
      border-radius: 50%;
      background: #dcfce7;
      color: #15803d;
      display: flex;
      align-items: center;
      justify-content: center;
      margin: 0 auto 16px;
    }

    /* ─── Detail Artikel Reader (Clean Typography) ─── */
    .p2-article-detail {
      max-width: 760px;
      margin: 0 auto;
      padding: 130px 24px 80px;
    }
    .p2-article-back {
      display: inline-flex;
      align-items: center;
      gap: 6px;
      font-size: 0.85rem;
      color: #4f46e5;
      font-weight: 600;
      cursor: pointer;
      margin-bottom: 28px;
      background: none;
      border: none;
      font-family: inherit;
      transition: color 0.2s;
    }
    .p2-article-back:hover {
      color: #3730a3;
    }
    .p2-article-detail .hero-img {
      width: 100%;
      border-radius: var(--radius-xl);
      margin-bottom: 28px;
      max-height: 420px;
      object-fit: cover;
      box-shadow: 0 10px 30px rgba(15, 23, 42, 0.1);
    }
    .p2-article-detail h1 {
      font-family: var(--font-display);
      font-size: 2.2rem;
      font-weight: 800;
      line-height: 1.25;
      margin-bottom: 16px;
      color: #0f172a;
    }
    .p2-article-detail .article-meta {
      display: flex;
      align-items: center;
      gap: 16px;
      font-size: 0.82rem;
      color: #64748b;
      margin-bottom: 28px;
      flex-wrap: wrap;
    }
    .p2-article-detail .article-para {
      font-size: 1.05rem;
      line-height: 1.85;
      color: #334155;
      margin-bottom: 20px;
    }
    .p2-article-detail .tags-row {
      display: flex;
      gap: 8px;
      flex-wrap: wrap;
      margin-top: 28px;
      padding-top: 20px;
      border-top: 1px solid #e2e8f0;
    }
    .p2-article-detail .tag-chip {
      padding: 4px 12px;
      border-radius: var(--radius-full);
      background: #f1f5f9;
      border: 1px solid #e2e8f0;
      font-size: 0.78rem;
      color: #475569;
    }
    .p2-article-detail .yt-embed {
      width: 100%;
      height: 380px;
      border-radius: var(--radius-xl);
      margin-bottom: 28px;
      border: 1px solid #e2e8f0;
    }

    /* ─── Footer: Prestige Institution Dark Footer with Mega Mendung Batik Pattern ─── */
    .p2-footer {
      background-color: #07090f;
      border-top: 1px solid #1e293b;
      padding: 76px 24px 34px;
      color: #94a3b8;
      position: relative;
      overflow: hidden;
    }
    .p2-footer::before {
      content: '';
      position: absolute;
      inset: 0;
      background-image: url('/batik-megamendung.svg');
      background-size: 440px auto;
      background-repeat: repeat;
      opacity: 0.085;
      pointer-events: none;
      z-index: 0;
    }
    .p2-footer::after {
      content: '';
      position: absolute;
      inset: 0;
      background: radial-gradient(circle at 80% 15%, rgba(99, 102, 241, 0.06) 0%, transparent 60%),
                  radial-gradient(circle at 15% 85%, rgba(6, 182, 212, 0.05) 0%, transparent 60%),
                  linear-gradient(180deg, rgba(7, 9, 15, 0.2) 0%, rgba(7, 9, 15, 0.7) 100%);
      pointer-events: none;
      z-index: 1;
    }
    .p2-footer-inner {
      max-width: 1240px;
      margin: 0 auto;
      display: grid;
      grid-template-columns: 1.6fr 1fr 1fr 1fr;
      gap: 40px;
      margin-bottom: 48px;
      position: relative;
      z-index: 2;
    }
    .p2-footer-bottom {
      max-width: 1240px;
      margin: 0 auto;
      padding-top: 28px;
      border-top: 1px solid #1e293b;
      display: flex;
      justify-content: space-between;
      align-items: center;
      font-size: 0.78rem;
      color: #64748b;
      flex-wrap: wrap;
      gap: 12px;
      position: relative;
      z-index: 2;
    }
    .p2-footer-brand h3 {
      font-family: var(--font-display);
      font-size: 1.3rem;
      font-weight: 800;
      color: #ffffff;
      margin-bottom: 12px;
    }
    .p2-footer-brand p {
      font-size: 0.86rem;
      color: #94a3b8;
      line-height: 1.65;
      margin-bottom: 20px;
      max-width: 380px;
    }
    .p2-footer-socials {
      display: flex;
      gap: 10px;
    }
    .p2-footer-socials a {
      width: 36px;
      height: 36px;
      border-radius: 50%;
      background: #1e293b;
      border: 1px solid #334155;
      color: #94a3b8;
      display: flex;
      align-items: center;
      justify-content: center;
      transition: all 0.2s ease;
      text-decoration: none;
    }
    .p2-footer-socials a:hover {
      background: #4f46e5;
      color: #ffffff;
      border-color: #4f46e5;
    }
    .p2-footer-col h4 {
      font-size: 0.88rem;
      font-weight: 700;
      color: #ffffff;
      text-transform: uppercase;
      letter-spacing: 0.05em;
      margin-bottom: 18px;
    }
    .p2-footer-col ul {
      list-style: none;
      padding: 0;
      margin: 0;
      display: grid;
      gap: 10px;
    }
    .p2-footer-col ul li button {
      background: none;
      border: none;
      padding: 0;
      font-size: 0.84rem;
      color: #94a3b8;
      cursor: pointer;
      transition: color 0.2s;
      font-family: inherit;
    }
    .p2-footer-col ul li button:hover {
      color: #ffffff;
    }


    /* ─── Scroll to Top Button ─── */
    .p2-scroll-top {
      position: fixed;
      bottom: 28px;
      right: 28px;
      width: 44px;
      height: 44px;
      border-radius: 50%;
      background: #0f172a;
      color: #ffffff;
      border: 1px solid #334155;
      display: flex;
      align-items: center;
      justify-content: center;
      cursor: pointer;
      opacity: 0;
      pointer-events: none;
      transition: all 0.3s ease;
      box-shadow: 0 10px 25px rgba(0, 0, 0, 0.2);
      z-index: 90;
    }
    .p2-scroll-top.visible {
      opacity: 1;
      pointer-events: auto;
    }
    .p2-scroll-top:hover {
      background: #4f46e5;
      border-color: #4f46e5;
      transform: translateY(-3px);
    }

    
    /* ─── Sambutan Kepala Sekolah & Visi Misi ─── */
    .p2-kasek-grid {
      display: grid;
      grid-template-columns: 360px 1fr;
      gap: 36px;
      align-items: start;
    }
    .p2-kasek-portrait-card {
      background: #ffffff;
      border: 1px solid #e2e8f0;
      border-radius: var(--radius-2xl);
      padding: 24px;
      text-align: center;
      box-shadow: 0 10px 30px -5px rgba(15, 23, 42, 0.08);
      position: sticky;
      top: 100px;
    }
    .p2-kasek-photo-frame {
      width: 100%;
      height: 280px;
      border-radius: var(--radius-xl);
      overflow: hidden;
      margin-bottom: 20px;
      background: #f1f5f9;
      border: 2px solid #e2e8f0;
      box-shadow: inset 0 2px 4px rgba(0,0,0,0.06);
    }
    .p2-kasek-photo-frame img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      object-position: top center;
    }
    .p2-kasek-badge-pill {
      display: inline-flex;
      align-items: center;
      gap: 6px;
      padding: 4px 12px;
      border-radius: var(--radius-full);
      background: #eef2ff;
      color: #4f46e5;
      font-size: 0.75rem;
      font-weight: 700;
      text-transform: uppercase;
      letter-spacing: 0.06em;
      margin-bottom: 8px;
    }
    .p2-kasek-name {
      font-family: var(--font-display);
      font-size: 1.35rem;
      font-weight: 800;
      color: #0f172a;
      margin-bottom: 4px;
    }
    .p2-kasek-role {
      font-size: 0.86rem;
      color: #64748b;
      margin-bottom: 16px;
      font-weight: 600;
    }
    .p2-kasek-quote-box {
      background: #f8fafc;
      border-left: 3px solid #4f46e5;
      padding: 12px 14px;
      border-radius: 0 12px 12px 0;
      text-align: left;
      font-size: 0.82rem;
      color: #475569;
      font-style: italic;
      line-height: 1.55;
    }
    .p2-kasek-content-card {
      background: #ffffff;
      border: 1px solid #e2e8f0;
      border-radius: var(--radius-2xl);
      padding: 36px 32px;
      box-shadow: 0 10px 30px -5px rgba(15, 23, 42, 0.06);
    }
    .p2-kasek-tabs {
      display: flex;
      gap: 10px;
      margin-bottom: 28px;
      border-bottom: 1px solid #f1f5f9;
      padding-bottom: 12px;
    }
    .p2-kasek-tab-btn {
      padding: 8px 18px;
      border-radius: var(--radius-full);
      font-size: 0.85rem;
      font-weight: 700;
      border: 1px solid transparent;
      background: #f1f5f9;
      color: #64748b;
      cursor: pointer;
      transition: all 0.25s ease;
    }
    .p2-kasek-tab-btn.active {
      background: #4f46e5;
      color: #ffffff;
      box-shadow: 0 4px 12px rgba(79, 70, 229, 0.25);
    }
    .p2-kasek-text p {
      font-size: 0.96rem;
      color: #334155;
      line-height: 1.75;
      margin-bottom: 16px;
    }
    .p2-kasek-motto-strip {
      display: inline-flex;
      align-items: center;
      gap: 10px;
      padding: 10px 20px;
      background: linear-gradient(135deg, #eef2ff 0%, #ede9fe 100%);
      border: 1px solid #c7d2fe;
      border-radius: var(--radius-xl);
      color: #4338ca;
      font-weight: 700;
      font-size: 0.88rem;
      margin-top: 14px;
    }
    .p2-visi-card {
      background: #f8fafc;
      border: 1px solid #e2e8f0;
      border-radius: var(--radius-xl);
      padding: 20px 24px;
      margin-bottom: 24px;
    }
    .p2-visi-card h4 {
      font-size: 0.84rem;
      font-weight: 800;
      text-transform: uppercase;
      letter-spacing: 0.08em;
      color: #4f46e5;
      margin-bottom: 8px;
    }
    .p2-visi-card p {
      font-size: 1.05rem;
      font-weight: 600;
      color: #0f172a;
      line-height: 1.6;
    }
    .p2-misi-list {
      display: flex;
      flex-direction: column;
      gap: 12px;
    }
    .p2-misi-item {
      display: flex;
      align-items: flex-start;
      gap: 12px;
      background: #ffffff;
      border: 1px solid #e2e8f0;
      border-radius: var(--radius-lg);
      padding: 14px 18px;
      font-size: 0.92rem;
      color: #334155;
      line-height: 1.55;
    }
    .p2-misi-num {
      width: 24px;
      height: 24px;
      border-radius: 50%;
      background: #4f46e5;
      color: #ffffff;
      font-size: 0.74rem;
      font-weight: 800;
      display: flex;
      align-items: center;
      justify-content: center;
      flex-shrink: 0;
      margin-top: 2px;
    }

    /* ─── Kemitraan Industri & DUDI Showcase ─── */
    .p2-mitra-grid {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      gap: 24px;
    }
    .p2-mitra-card {
      background: #ffffff;
      border: 1px solid #e2e8f0;
      border-radius: var(--radius-xl);
      padding: 28px 24px;
      display: flex;
      flex-direction: column;
      transition: all 0.35s ease;
      position: relative;
      overflow: hidden;
      box-shadow: 0 4px 18px -2px rgba(15, 23, 42, 0.04);
    }
    .p2-mitra-card::before {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      height: 2px;
      background: var(--mitra-accent, #4f46e5);
    }
    .p2-mitra-card:hover {
      transform: translateY(-5px);
      box-shadow: 0 10px 25px -4px rgba(15, 23, 42, 0.06);
      border-color: #cbd5e1;
    }
    .p2-mitra-top {
      display: flex;
      align-items: center;
      justify-content: space-between;
      margin-bottom: 16px;
    }
    .p2-mitra-logo-box {
      font-family: var(--font-display);
      font-size: 0.88rem;
      font-weight: 800;
      letter-spacing: 0.06em;
      padding: 6px 14px;
      border-radius: 10px;
      background: #f8fafc;
      border: 1px solid #e2e8f0;
      color: #0f172a;
    }
    .p2-mitra-badge {
      font-size: 0.72rem;
      font-weight: 700;
      padding: 4px 10px;
      border-radius: var(--radius-full);
      background: #f1f5f9;
      color: #475569;
    }
    .p2-mitra-name {
      font-size: 1.15rem;
      font-weight: 800;
      color: #0f172a;
      margin-bottom: 4px;
    }
    .p2-mitra-category {
      font-size: 0.82rem;
      color: #4f46e5;
      font-weight: 600;
      margin-bottom: 12px;
    }
    .p2-mitra-desc {
      font-size: 0.88rem;
      color: #64748b;
      line-height: 1.6;
      flex-grow: 1;
      margin-bottom: 16px;
    }
    .p2-mitra-type {
      display: flex;
      align-items: center;
      gap: 6px;
      font-size: 0.78rem;
      color: #0f172a;
      font-weight: 700;
      padding-top: 14px;
      border-top: 1px dashed #e2e8f0;
    }

    /* ─── Ekstrakurikuler Showcase ─── */
    .p2-ekskul-grid {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      gap: 24px;
    }
    .p2-ekskul-card {
      background: #ffffff;
      border: 1px solid #e2e8f0;
      border-radius: var(--radius-xl);
      padding: 28px 24px;
      display: flex;
      flex-direction: column;
      transition: all 0.35s ease;
      box-shadow: 0 4px 18px -2px rgba(15, 23, 42, 0.04);
    }
    .p2-ekskul-card:hover {
      transform: translateY(-5px);
      border-color: #cbd5e1;
      box-shadow: 0 16px 32px -4px rgba(15, 23, 42, 0.09);
    }
    .p2-ekskul-icon-wrap {
      width: 48px;
      height: 48px;
      border-radius: 14px;
      display: flex;
      align-items: center;
      justify-content: center;
      margin-bottom: 16px;
    }
    .p2-ekskul-name {
      font-size: 1.1rem;
      font-weight: 800;
      color: #0f172a;
      margin-bottom: 6px;
    }
    .p2-ekskul-schedule {
      display: inline-flex;
      align-items: center;
      gap: 6px;
      font-size: 0.78rem;
      color: #64748b;
      font-weight: 600;
      margin-bottom: 12px;
    }
    .p2-ekskul-desc {
      font-size: 0.88rem;
      color: #475569;
      line-height: 1.6;
      flex-grow: 1;
      margin-bottom: 16px;
    }
    .p2-ekskul-achieve {
      display: flex;
      align-items: center;
      gap: 6px;
      padding: 8px 12px;
      border-radius: 10px;
      background: #f8fafc;
      border: 1px solid #e2e8f0;
      font-size: 0.76rem;
      color: #0f172a;
      font-weight: 700;
    }

    /* ─── FAQ Interaktif Accordion ─── */
    .p2-faq-container {
      max-width: 860px;
      margin: 0 auto;
      display: flex;
      flex-direction: column;
      gap: 14px;
    }
    .p2-faq-item {
      background: #ffffff;
      border: 1px solid #e2e8f0;
      border-radius: var(--radius-xl);
      overflow: hidden;
      transition: all 0.3s ease;
      box-shadow: 0 2px 8px rgba(15, 23, 42, 0.03);
    }
    .p2-faq-item.active {
      border-color: #cbd5e1;
      box-shadow: 0 8px 24px -4px rgba(15, 23, 42, 0.08);
    }
    .p2-faq-question {
      width: 100%;
      text-align: left;
      padding: 22px 24px;
      background: none;
      border: none;
      display: flex;
      align-items: center;
      justify-content: space-between;
      gap: 16px;
      cursor: pointer;
      font-size: 1.02rem;
      font-weight: 700;
      color: #0f172a;
      font-family: inherit;
    }
    .p2-faq-question:hover {
      color: #4f46e5;
    }
    .p2-faq-chevron {
      transition: transform 0.3s ease;
      color: #94a3b8;
      flex-shrink: 0;
    }
    .p2-faq-chevron.rotated {
      transform: rotate(180deg);
      color: #4f46e5;
    }
    .p2-faq-answer {
      padding: 0 24px 22px;
      font-size: 0.93rem;
      color: #475569;
      line-height: 1.7;
      border-top: 1px solid #f8fafc;
    }

    /* ─── Peta Lokasi Google Maps & Detail Sekolah ─── */
    .p2-lokasi-grid {
      display: grid;
      grid-template-columns: 1fr 440px;
      gap: 32px;
      align-items: stretch;
    }
    .p2-map-frame-box {
      border-radius: var(--radius-2xl);
      overflow: hidden;
      border: 1px solid #e2e8f0;
      box-shadow: 0 10px 30px -5px rgba(15, 23, 42, 0.08);
      min-height: 380px;
      position: relative;
    }
    .p2-map-frame-box iframe {
      width: 100%;
      height: 100%;
      min-height: 380px;
      border: 0;
      display: block;
    }
    .p2-lokasi-info-card {
      background: #ffffff;
      border: 1px solid #e2e8f0;
      border-radius: var(--radius-2xl);
      padding: 32px 28px;
      display: flex;
      flex-direction: column;
      box-shadow: 0 10px 30px -5px rgba(15, 23, 42, 0.08);
    }
    .p2-lokasi-info-card h3 {
      font-family: var(--font-display);
      font-size: 1.4rem;
      font-weight: 800;
      color: #0f172a;
      margin-bottom: 16px;
    }
    .p2-lokasi-point {
      display: flex;
      align-items: flex-start;
      gap: 12px;
      margin-bottom: 16px;
      font-size: 0.88rem;
      color: #475569;
      line-height: 1.6;
    }
    .p2-lokasi-point-icon {
      width: 32px;
      height: 32px;
      border-radius: 10px;
      background: #f1f5f9;
      color: #0f172a;
      display: flex;
      align-items: center;
      justify-content: center;
      flex-shrink: 0;
      margin-top: 2px;
    }
    .p2-lokasi-actions {
      display: flex;
      gap: 12px;
      margin-top: auto;
      padding-top: 20px;
      border-top: 1px solid #f1f5f9;
      flex-wrap: wrap;
    }

    /* ─── Floating WhatsApp PPDB Widget ─── */
    .p2-wa-float-btn {
      position: fixed;
      bottom: 86px;
      right: 28px;
      width: 52px;
      height: 52px;
      border-radius: 50%;
      background: #25D366;
      color: #ffffff;
      border: none;
      display: flex;
      align-items: center;
      justify-content: center;
      cursor: pointer;
      box-shadow: 0 8px 24px rgba(37, 211, 102, 0.45);
      z-index: 95;
      transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);
    }
    .p2-wa-float-btn:hover {
      transform: scale(1.1);
      box-shadow: 0 12px 32px rgba(37, 211, 102, 0.6);
    }
    /* Clean WhatsApp Float */
      100% { transform: scale(1.4); opacity: 0; }
    }
    .p2-wa-tooltip {
      position: absolute;
      right: 64px;
      background: #0f172a;
      color: #ffffff;
      padding: 6px 14px;
      border-radius: var(--radius-full);
      font-size: 0.76rem;
      font-weight: 700;
      white-space: nowrap;
      pointer-events: none;
      box-shadow: 0 4px 12px rgba(0,0,0,0.2);
    }
    .p2-wa-modal-overlay {
      position: fixed;
      inset: 0;
      background: rgba(15, 23, 42, 0.5);
      backdrop-filter: blur(4px);
      z-index: 100;
      display: flex;
      align-items: flex-end;
      justify-content: flex-end;
      padding: 24px 28px 150px;
    }
    .p2-wa-card {
      width: 360px;
      background: #ffffff;
      border-radius: var(--radius-2xl);
      border: 1px solid #e2e8f0;
      box-shadow: 0 20px 50px rgba(0,0,0,0.2);
      overflow: hidden;
      animation: p2-slide-up 0.3s ease;
    }
    @keyframes p2-slide-up {
      from { transform: translateY(20px); opacity: 0; }
      to { transform: translateY(0); opacity: 1; }
    }
    .p2-wa-card-header {
      background: #25D366;
      color: #ffffff;
      padding: 18px 20px;
      display: flex;
      align-items: center;
      justify-content: space-between;
    }
    .p2-wa-card-body {
      padding: 20px;
    }
    .p2-wa-preset {
      width: 100%;
      text-align: left;
      padding: 10px 14px;
      border-radius: 12px;
      border: 1px solid #e2e8f0;
      background: #f8fafc;
      font-size: 0.82rem;
      color: #334155;
      font-weight: 600;
      margin-bottom: 8px;
      cursor: pointer;
      transition: all 0.2s;
    }
    .p2-wa-preset.active, .p2-wa-preset:hover {
      background: #f0fdf4;
      border-color: #86efac;
      color: #166534;
    }
    .p2-wa-submit-btn {
      width: 100%;
      background: #25D366;
      color: #ffffff;
      border: none;
      padding: 12px;
      border-radius: var(--radius-lg);
      font-weight: 700;
      font-size: 0.9rem;
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 8px;
      cursor: pointer;
      margin-top: 14px;
      transition: background 0.2s;
    }
    .p2-wa-submit-btn:hover {
      background: #1eb857;
    }

    /* ─── Mobile Menu Drawer ─── */
    .p2-mobile-drawer {
      position: fixed;
      inset: 0;
      background: rgba(15, 23, 42, 0.6);
      backdrop-filter: blur(6px);
      z-index: 99;
      display: flex;
      justify-content: flex-end;
    }
    .p2-mobile-drawer-inner {
      width: 300px;
      height: 100%;
      background: #ffffff;
      padding: 28px 20px;
      display: flex;
      flex-direction: column;
      gap: 10px;
      box-shadow: -10px 0 30px rgba(0,0,0,0.15);
      overflow-y: auto;
    }
    .p2-mobile-drawer-header {
      display: flex;
      align-items: center;
      justify-content: space-between;
      margin-bottom: 20px;
      padding-bottom: 12px;
      border-bottom: 1px solid #f1f5f9;
    }
    .p2-mobile-link {
      padding: 12px 16px;
      border-radius: 12px;
      background: none;
      border: none;
      text-align: left;
      font-size: 0.95rem;
      font-weight: 700;
      color: #0f172a;
      cursor: pointer;
      display: flex;
      align-items: center;
      gap: 10px;
    }
    .p2-mobile-link:hover, .p2-mobile-link.active {
      background: #eef2ff;
      color: #4f46e5;
    }

    @media (max-width: 1024px) {
      .p2-kasek-grid { grid-template-columns: 1fr; }
      .p2-kasek-portrait-card { position: static; max-width: 420px; margin: 0 auto; }
      .p2-mitra-grid { grid-template-columns: repeat(2, 1fr); }
      .p2-ekskul-grid { grid-template-columns: repeat(2, 1fr); }
      .p2-lokasi-grid { grid-template-columns: 1fr; }
    }
    @media (max-width: 768px) {
      .p2-mitra-grid { grid-template-columns: 1fr; }
      .p2-ekskul-grid { grid-template-columns: 1fr; }
      .p2-wa-float-btn { bottom: 80px; right: 20px; }
      .p2-wa-modal-overlay { padding: 16px 16px 140px; justify-content: center; }
      .p2-wa-card { width: 100%; }
    }

    /* ─── Responsive Media Queries ─── */
    @media (max-width: 1024px) {
      .p2-hero h1 { font-size: 3rem; }
      .p2-programs-grid { grid-template-columns: repeat(2, 1fr); }
      .p2-bento-grid { grid-template-columns: repeat(3, 1fr); }
      .p2-facility-grid { grid-template-columns: repeat(2, 1fr); }
      .p2-news-grid { grid-template-columns: repeat(2, 1fr); }
      .p2-stats-inner { grid-template-columns: repeat(2, 1fr); }
      .p2-stat-item:nth-child(2) { border-right: none; }
      .p2-stat-item:nth-child(1), .p2-stat-item:nth-child(2) { border-bottom: 1px solid #f1f5f9; }
      .p2-footer-inner { grid-template-columns: 1fr 1fr; }
    }
    @media (max-width: 768px) {
      .p2-nav-links { display: none; }
      .p2-nav-mobile-btn { display: block; }
      .p2-hero h1 { font-size: 2.2rem; }
      .p2-hero { min-height: auto; padding: 120px 20px 60px; }
      .p2-programs-grid { grid-template-columns: 1fr; }
      .p2-bento-grid { grid-template-columns: 1fr; }
      .p2-facility-grid { grid-template-columns: 1fr; }
      .p2-achieve-grid { grid-template-columns: 1fr; }
      .p2-news-grid { grid-template-columns: 1fr; }
      .p2-stats-inner { grid-template-columns: 1fr; }
      .p2-stat-item { border-right: none; border-bottom: 1px solid #f1f5f9; }
      .p2-footer-inner { grid-template-columns: 1fr; }
      .p2-page-wrap { padding: 100px 16px 60px; }
      .p2-cta-box { padding: 48px 20px; }
    }

    @media (max-width: 560px) {
      .p2-nav-cta { display: none; }
      .p2-form-card { padding: 24px 18px; border-radius: var(--radius-xl); }
      .p2-hero h1 { font-size: 1.85rem; line-height: 1.25; }
      .p2-hero-p { font-size: 0.94rem; }
      .p2-hero-actions { flex-direction: column; width: 100%; gap: 10px; }
      .p2-hero-btn-primary, .p2-hero-btn-secondary { width: 100%; justify-content: center; }
      .p2-section-header h2 { font-size: 1.7rem; }
      .p2-coverflow-stage-title { font-size: 1.6rem; }
      .p2-coverflow-card { width: 230px; height: 370px; }
      .p2-coverflow-track-wrap { height: 410px; }
      .p2-cta-box h2 { font-size: 1.65rem; }
      .p2-nav-logo-text strong { font-size: 0.88rem; }
      .p2-nav-logo-text span { font-size: 0.58rem; }
    }

    @media (max-width: 380px) {
      .p2-navbar { padding: 8px 10px; }
      .p2-navbar-inner { padding: 6px 10px; gap: 6px; }
      .p2-nav-logo img { width: 30px; height: 30px; }
      .p2-nav-logo-text strong { font-size: 0.82rem; }
      .p2-hero h1 { font-size: 1.65rem; }
      .p2-form-card { padding: 18px 14px; }
    }
  `;

  // ─── RENDER: Article Detail ───
  if (selectedArticle) {
    const art = selectedArticle;
    return (
      <div className="portal-v2">
        <style>{css}</style>
        <Navbar school={school} scrolled={true} activeView={activeView} navigateTo={navigateTo}
          mobileMenu={mobileMenu} setMobileMenu={setMobileMenu} onBackToErp={onBackToErp}
          onOpenLogin={onOpenLogin} isAuthenticated={isAuthenticated} />
        <div className="p2-page-wrap">
          <div className="p2-article-detail">
            <button className="p2-article-back" onClick={() => setSelectedArticle(null)}>
              <ChevronLeft size={16} /> Kembali ke Berita
            </button>
            <img src={art.image} alt={art.title} className="hero-img" />
            {art.youtubeId && (
              <iframe className="yt-embed" src={`https://www.youtube.com/embed/${art.youtubeId}`}
                title={art.title} allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope"
                allowFullScreen />
            )}
            <h1>{art.title}</h1>
            <div className="article-meta">
              <span style={{ display: 'flex', alignItems: 'center', gap: 4 }}><Calendar size={14} /> {art.date}</span>
              <span style={{ display: 'flex', alignItems: 'center', gap: 4 }}><Users size={14} /> {art.author}</span>
              <span style={{ display: 'flex', alignItems: 'center', gap: 4 }}><Clock size={14} /> {art.readTime}</span>
            </div>
            {art.paragraphs.map((para, i) => <p key={i} className="article-para">{para}</p>)}
            <div className="tags-row">
              {art.tags.map((t, i) => <span key={i} className="tag-chip">#{t}</span>)}
            </div>
          </div>
        </div>
        <FooterSection school={school} navigateTo={navigateTo} onOpenLogin={onOpenLogin} isAuthenticated={isAuthenticated} onBackToErp={onBackToErp} />
      </div>
    );
  }

  // ─── RENDER: Staff / Guru & Karyawan (Dedicated Page) ───
  if (activeView === 'staff') {
    const categories = ['Semua', 'Pimpinan', 'Guru Produktif', 'Guru Umum', 'Tata Usaha'];

    const getStaffCategory = (st) => {
      if (st.category === 'Pimpinan' || (st.role && st.role.toLowerCase().includes('kepala sekolah'))) {
        return 'Pimpinan';
      }
      if (st.category === 'Tenaga Kependidikan' || 
          (st.role && (
            st.role.toLowerCase().includes('tata usaha') ||
            st.role.toLowerCase().includes('koperasi') ||
            st.role.toLowerCase().includes('keamanan') ||
            st.role.toLowerCase().includes('kebersihan') ||
            st.role.toLowerCase().includes('teknisi') ||
            st.role.toLowerCase().includes('operator')
          ))) {
        return 'Tata Usaha';
      }
      const roleLower = (st.role || '').toLowerCase();
      const isMapelUmum = roleLower.includes('bahasa inggris') ||
                          roleLower.includes('bahasa indonesia') ||
                          roleLower.includes('matematika') ||
                          roleLower.includes('agama') ||
                          roleLower.includes('penjas') ||
                          roleLower.includes('ipa') ||
                          roleLower.includes('pkn') ||
                          roleLower.includes('kesiswaan') ||
                          roleLower.includes('sarana prasarana');
      if (isMapelUmum) {
        return 'Guru Umum';
      }
      const isProduktif = roleLower.includes('produktif') ||
                          roleLower.includes('otkp') ||
                          roleLower.includes('bdp') ||
                          roleLower.includes('akl') ||
                          roleLower.includes('akuntansi') ||
                          roleLower.includes('perkantoran') ||
                          roleLower.includes('pemasaran') ||
                          roleLower.includes('bisnis digital') ||
                          roleLower.includes('kaprogli');
      if (isProduktif) {
        return 'Guru Produktif';
      }
      return 'Guru Umum';
    };

    // Hitung jumlah per kategori
    const catCounts = {
      'Semua': initialStaff.length,
      'Pimpinan': 0,
      'Guru Produktif': 0,
      'Guru Umum': 0,
      'Tata Usaha': 0
    };
    initialStaff.forEach(st => {
      const c = getStaffCategory(st);
      if (catCounts[c] !== undefined) catCounts[c]++;
    });

    const filteredStaff = initialStaff.filter(st => {
      const staffCat = getStaffCategory(st);
      const matchCat = staffFilter === 'Semua' || staffCat === staffFilter;
      const matchSearch = (st.name || '').toLowerCase().includes(staffSearch.toLowerCase()) ||
                          (st.role || '').toLowerCase().includes(staffSearch.toLowerCase()) ||
                          (st.subject || '').toLowerCase().includes(staffSearch.toLowerCase()) ||
                          staffCat.toLowerCase().includes(staffSearch.toLowerCase());
      return matchCat && matchSearch;
    });

    return (
      <div className="portal-v2">
        <style>{css}</style>
        <Navbar school={school} scrolled={true} activeView={activeView} navigateTo={navigateTo}
          mobileMenu={mobileMenu} setMobileMenu={setMobileMenu} onBackToErp={onBackToErp}
          onOpenLogin={onOpenLogin} isAuthenticated={isAuthenticated} />

        <div className="p2-page-wrap">
          <div className="p2-page-inner">
            <div className="p2-section-header">
              <div className="p2-section-badge p2-badge-indigo"><Users size={12} /> Direktori Pendidik & Tenaga Kependidikan</div>
              <h2 className="p2-section-title">Guru & Karyawan<br />SMK Ardjuna 2 Malang</h2>
              <p className="p2-section-subtitle">
                Didukung oleh tenaga pendidik profesional, bersertifikasi asesor kompetensi nasional, dan berpengalaman di bidang kejuruan modern.
              </p>
            </div>

            <div className="p2-staff-search">
              <Search size={16} />
              <input
                type="text"
                placeholder="Cari nama guru, mata pelajaran, atau jabatan..."
                value={staffSearch}
                onChange={(e) => setStaffSearch(e.target.value)}
              />
            </div>

            <div className="p2-filter-tabs">
              {categories.map((cat, i) => {
                const conf = staffCategoryConfig[cat];
                const isActive = staffFilter === cat;
                const activeStyle = isActive ? {
                  background: conf ? conf.accent : '#4f46e5',
                  color: '#ffffff',
                  borderColor: conf ? conf.accent : '#4f46e5',
                  boxShadow: conf ? `0 4px 16px ${conf.glow}` : '0 4px 16px rgba(79, 70, 229, 0.35)'
                } : {};

                return (
                  <button
                    key={i}
                    className={`p2-filter-btn ${isActive ? 'active' : ''}`}
                    style={activeStyle}
                    onClick={() => setStaffFilter(cat)}
                  >
                    <span>{cat}</span>
                    <span style={{
                      marginLeft: 6,
                      fontSize: '0.72rem',
                      opacity: isActive ? 0.95 : 0.65,
                      fontWeight: 700,
                      background: isActive ? 'rgba(255,255,255,0.22)' : '#f1f5f9',
                      padding: '2px 7px',
                      borderRadius: 10
                    }}>
                      {catCounts[cat] || 0}
                    </span>
                  </button>
                );
              })}
            </div>

            <div className="p2-staff-grid">
              {filteredStaff.map((st, i) => {
                const cat = getStaffCategory(st);
                const conf = staffCategoryConfig[cat] || staffCategoryConfig['Guru Umum'];
                return (
                  <div
                    className="p2-staff-card"
                    key={st.id || i}
                    style={{
                      '--cat-accent': conf.accent,
                      '--cat-border': conf.border,
                      '--cat-glow': conf.glow
                    }}
                  >
                    <div
                      className="p2-staff-avatar"
                      style={{
                        background: conf.avatarBg,
                        borderColor: conf.avatarBorder,
                        color: conf.avatarText
                      }}
                    >
                      {(st.name || 'G').charAt(0)}
                    </div>
                    <h4>{st.name}</h4>
                    <div className="role" style={{ color: conf.roleColor }}>
                      {st.role || st.subject || 'Tenaga Pendidik'}
                    </div>
                    <span
                      className="p2-staff-tag"
                      style={{
                        background: conf.badgeBg,
                        color: conf.badgeText,
                        borderColor: conf.border
                      }}
                    >
                      {cat}
                    </span>
                  </div>
                );
              })}
            </div>

            {filteredStaff.length === 0 && (
              <div style={{ textAlign: 'center', padding: '60px 20px', color: '#64748b' }}>
                <p style={{ fontSize: '1rem', fontWeight: 600 }}>Tidak ada data guru atau staf pada kategori ini.</p>
              </div>
            )}
          </div>
        </div>

        <FooterSection school={school} navigateTo={navigateTo} onOpenLogin={onOpenLogin} isAuthenticated={isAuthenticated} onBackToErp={onBackToErp} />
      </div>
    );
  }

  // ─── RENDER: PPDB ONLINE FORM ───
  if (activeView === 'ppdb') {
    return (
      <div className="portal-v2">
        <style>{css}</style>
        <Navbar school={school} scrolled={true} activeView={activeView} navigateTo={navigateTo}
          mobileMenu={mobileMenu} setMobileMenu={setMobileMenu} onBackToErp={onBackToErp}
          onOpenLogin={onOpenLogin} isAuthenticated={isAuthenticated} />

        <div className="p2-page-wrap">
          <div className="p2-page-inner">
            {ppdbSubmitted ? (
              <div className="p2-success-card">
                <div className="p2-success-icon"><CheckCircle2 size={36} /></div>
                <h2 style={{ fontSize: '1.6rem', fontWeight: 800, color: '#0f172a', marginBottom: 8 }}>Pendaftaran Berhasil Terkirim!</h2>
                <p style={{ color: '#475569', fontSize: '0.95rem', marginBottom: 24 }}>
                  Terima kasih <strong>{ppdbForm.nama}</strong>. Nomor pendaftaran sementara Anda adalah <strong>REG-{Math.floor(100000 + Math.random() * 900000)}</strong>.
                  Panitia PPDB akan segera menghubungi nomor WhatsApp Anda.
                </p>
                <button className="p2-hero-btn-primary" onClick={() => { setPpdbSubmitted(false); navigateTo('home'); }}>
                  Kembali ke Beranda
                </button>
              </div>
            ) : (
              <div className="p2-form-card">
                <h2>Formulir PPDB Online</h2>
                <div className="desc">Tahun Ajaran {new Date().getFullYear()} / {new Date().getFullYear() + 1} — Silakan lengkapi data Anda dengan benar.</div>
                
                <form onSubmit={(e) => { e.preventDefault(); setPpdbSubmitted(true); }}>
                  <div className="p2-form-group">
                    <label>Nama Lengkap Calon Siswa</label>
                    <input type="text" required placeholder="Contoh: Muhammad Rizky Pratama"
                      value={ppdbForm.nama} onChange={(e) => setPpdbForm({ ...ppdbForm, nama: e.target.value })} />
                  </div>
                  <div className="p2-form-group">
                    <label>NISN / NIK</label>
                    <input type="text" required placeholder="10 digit NISN atau 16 digit NIK"
                      value={ppdbForm.nik} onChange={(e) => setPpdbForm({ ...ppdbForm, nik: e.target.value })} />
                  </div>
                  <div className="p2-form-group">
                    <label>Asal SMP / MTs</label>
                    <input type="text" required placeholder="Contoh: SMP Negeri 14 Malang"
                      value={ppdbForm.asalSekolah} onChange={(e) => setPpdbForm({ ...ppdbForm, asalSekolah: e.target.value })} />
                  </div>
                  <div className="p2-form-group">
                    <label>Pilihan Program Keahlian</label>
                    <select value={ppdbForm.jurusan} onChange={(e) => setPpdbForm({ ...ppdbForm, jurusan: e.target.value })}>
                      <option value="MPLB">Manajemen Perkantoran & Layanan Bisnis (MPLB)</option>
                      <option value="BDP">Bisnis Daring & Pemasaran (BDP)</option>
                      <option value="AKL">Akuntansi & Keuangan Lembaga (AKL)</option>
                    </select>
                  </div>
                  <div className="p2-form-group">
                    <label>No. WhatsApp Aktif (Siswa/Orang Tua)</label>
                    <input type="tel" required placeholder="Contoh: 081234567890"
                      value={ppdbForm.nohp} onChange={(e) => setPpdbForm({ ...ppdbForm, nohp: e.target.value })} />
                  </div>
                  <button type="submit" className="p2-form-submit">
                    Kirim Formulir Pendaftaran Sekarang
                  </button>
                </form>
              </div>
            )}
          </div>
        </div>

        <FooterSection school={school} navigateTo={navigateTo} onOpenLogin={onOpenLogin} isAuthenticated={isAuthenticated} onBackToErp={onBackToErp} />
      </div>
    );
  }

  // ─── RENDER: CEK STATUS PENDAFTARAN ───
  if (activeView === 'cek-status') {
    return (
      <div className="portal-v2">
        <style>{css}</style>
        <Navbar school={school} scrolled={true} activeView={activeView} navigateTo={navigateTo}
          mobileMenu={mobileMenu} setMobileMenu={setMobileMenu} onBackToErp={onBackToErp}
          onOpenLogin={onOpenLogin} isAuthenticated={isAuthenticated} />

        <div className="p2-page-wrap">
          <div className="p2-page-inner">
            <div className="p2-form-card">
              <h2>Cek Status Kelulusan & Verifikasi PPDB</h2>
              <div className="desc">Masukkan nomor registrasi atau NISN untuk memeriksa status verifikasi berkas PPDB Anda.</div>
              
              <div className="p2-form-group">
                <label>Nomor Registrasi / NISN</label>
                <input type="text" placeholder="Masukkan nomor registrasi..."
                  value={checkId} onChange={(e) => setCheckId(e.target.value)} />
              </div>
              <button className="p2-form-submit" onClick={() => {
                if (!checkId) return;
                setCheckResult({
                  found: true,
                  name: "Siswa Calon Pendaftar",
                  jurusan: "Manajemen Perkantoran (MPLB)",
                  status: "BERKAS TERVERIFIKASI",
                  detail: "Selamat! Berkas administrasi Anda telah lengkap dan dinyatakan lolos verifikasi gelombang 1."
                });
              }}>
                Periksa Status
              </button>

              {checkResult && (
                <div style={{ marginTop: 24, padding: 20, background: '#f8fafc', borderRadius: 16, border: '1px solid #e2e8f0' }}>
                  <div style={{ fontSize: '0.78rem', color: '#15803d', fontWeight: 700, textTransform: 'uppercase', marginBottom: 4 }}>
                    ✓ {checkResult.status}
                  </div>
                  <h4 style={{ fontSize: '1.1rem', fontWeight: 800, color: '#0f172a', marginBottom: 4 }}>{checkResult.name}</h4>
                  <div style={{ fontSize: '0.85rem', color: '#4f46e5', fontWeight: 600, marginBottom: 8 }}>{checkResult.jurusan}</div>
                  <p style={{ fontSize: '0.86rem', color: '#475569', lineHeight: 1.6 }}>{checkResult.detail}</p>
                </div>
              )}
            </div>
          </div>
        </div>

        <FooterSection school={school} navigateTo={navigateTo} onOpenLogin={onOpenLogin} isAuthenticated={isAuthenticated} onBackToErp={onBackToErp} />
      </div>
    );
  }

  // ─── RENDER: HOME (LANDING PAGE UTAMA) ───
  return (
    <div className="portal-v2">
      <style>{css}</style>

      {/* ── FLOATING NAVBAR ── */}
      <Navbar school={school} scrolled={scrolled} activeView={activeView} navigateTo={navigateTo}
        mobileMenu={mobileMenu} setMobileMenu={setMobileMenu} onBackToErp={onBackToErp}
        onOpenLogin={onOpenLogin} isAuthenticated={isAuthenticated} />

      {/* ── HERO BANNER: DIGNIFIED, CLEAN, WELCOMING PUBLIC SCHOOL HERO ── */}
      <header className="p2-hero">
        <div className="p2-hero-bg">
          <img src="/school-hero.jpg" alt="Gedung SMK Ardjuna 2 Malang" />
        </div>
        <div className="p2-hero-gradient" />

        <div className="p2-hero-content">
          <div className="p2-hero-badge">
            <span className="dot" />
            PPDB {new Date().getFullYear()} / {new Date().getFullYear() + 1} TELAH DIBUKA
          </div>
          <h1>
            Sekolah Vokasi<br />
            <span className="p2-gradient-hero">Multi-Skills</span> Terdepan<br />
            di Malang
          </h1>
          <p>
            SMKS ARDJUNA 2 MALANG — A Multi-Skills Based School. Mencetak lulusan berkompeten dengan 
            sertifikasi BNSP dan 5 keterampilan ekstra gratis. Siap kerja, siap wirausaha.
          </p>
          <div className="p2-hero-actions">
            <button className="p2-hero-btn-primary" onClick={() => navigateTo('ppdb')}>
              <GraduationCap size={18} /> Daftar Sekarang
            </button>
            <button className="p2-hero-btn-secondary" onClick={() => {
              document.getElementById('programs')?.scrollIntoView({ behavior: 'smooth' });
            }}>
              <Layers size={18} /> Lihat Program
            </button>
          </div>
        </div>
      </header>

      {/* ── BENTO STATS BAR (LIGHT THEME BRIDGE) ── */}
      <div className="p2-stats-bar">
        <div className="p2-stats-inner">
          {[
            { num: "35+", label: "Tahun Pengabdian Vokasi", icon: Award },
            { num: "100%", label: "Lulusan Lisensi BNSP", icon: ShieldCheck },
            { num: "88%+", label: "Terserap BKK & Industri", icon: TrendingUp },
            { num: "5 Ekstra", label: "Multi-Skills Gratis Resmi", icon: Zap }
          ].map((s, i) => (
            <div className="p2-stat-item" key={i}>
              <div className="p2-stat-icon-wrapper">
                <s.icon size={19} />
              </div>
              <div className="p2-stat-number">
                <AnimatedStatNumber value={s.num} />
              </div>
              <div className="p2-stat-label">{s.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* ── SAMBUTAN KEPALA SEKOLAH & VISI MISI (CLEAN WHITE PRESTIGE CARD) ── */}
      <div className="p2-strip-white">
        <section className="p2-section" id="sambutan">
          <div className="p2-section-header">
            <div className="p2-section-badge p2-badge-indigo"><Quote size={12} /> Sambutan Pimpinan</div>
            <h2 className="p2-section-title">Pendidikan Vokasi Terapan<br />Berkarakter & Multi-Skills</h2>
            <p className="p2-section-subtitle">
              Mewujudkan generasi muda yang cakap vokasi, mandiri berwirausaha, dan berbudi pekerti luhur di era modern.
            </p>
          </div>

          <div className="p2-kasek-grid">
            <div className="p2-kasek-portrait-card">
              <div className="p2-kasek-photo-frame">
                <img src={principalMessage.photo} alt={principalMessage.name} />
              </div>
              <span className="p2-kasek-badge-pill">
                <Award size={13} /> {principalMessage.role}
              </span>
              <h3 className="p2-kasek-name">{principalMessage.name}</h3>
              <div className="p2-kasek-role">Yayasan Ardjuna Bina Taruna Malang</div>
              <div className="p2-kasek-quote-box">
                "{principalMessage.quote}"
              </div>
            </div>

            <div className="p2-kasek-content-card">
              <div className="p2-kasek-tabs">
                <button
                  className={`p2-kasek-tab-btn ${activeKasekTab === 'sambutan' ? 'active' : ''}`}
                  onClick={() => setActiveKasekTab('sambutan')}
                >
                  Sambutan Resmi
                </button>
                <button
                  className={`p2-kasek-tab-btn ${activeKasekTab === 'visimisi' ? 'active' : ''}`}
                  onClick={() => setActiveKasekTab('visimisi')}
                >
                  Visi & Misi Sekolah
                </button>
              </div>

              {activeKasekTab === 'sambutan' ? (
                <div className="p2-kasek-text">
                  {principalMessage.paragraphs.map((p, pi) => (
                    <p key={pi}>{p}</p>
                  ))}

                </div>
              ) : (
                <div>
                  <div className="p2-visi-card">
                    <h4>Visi Sekolah</h4>
                    <p>"{principalMessage.visi}"</p>
                  </div>
                  <h4 style={{ fontSize: '0.86rem', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.08em', color: '#4f46e5', marginBottom: 12 }}>
                    Misi Sekolah
                  </h4>
                  <div className="p2-misi-list">
                    {principalMessage.misi.map((m, mi) => (
                      <div className="p2-misi-item" key={mi}>
                        <div className="p2-misi-num">{mi + 1}</div>
                        <div>{m}</div>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        </section>
      </div>


      {/* ── 1. PROGRAMS KEAHLIAN (LIGHT THEME - BG PUTIH BERSIH) ── */}
      <div className="p2-strip-white">
        <section className="p2-section" id="programs">
          <div className="p2-section-header">
            <div className="p2-section-badge p2-badge-indigo"><Layers size={12} /> Program Keahlian Unggulan</div>
            <h2 className="p2-section-title">Tiga Kompetensi Keahlian<br />Siap Kerja & Siap Wirausaha</h2>
            <p className="p2-section-subtitle">
              Diselaraskan dengan kebutuhan dunia usaha dan industri modern (DUDI), didukung sertifikasi kompetensi nasional BNSP.
            </p>
          </div>
          <div className="p2-programs-grid">
            {majors.map((m, idx) => {
              const Icon = m.icon;
              return (
                <div className="p2-program-card" key={idx} style={{ '--card-accent': m.color }}>
                  <div className="p2-program-icon" style={{ background: m.bgColor, color: m.color }}>
                    <Icon size={24} />
                  </div>
                  <span className="p2-program-tag" style={{ background: m.bgColor, color: m.color }}>{m.badge}</span>
                  <h3>{m.code}</h3>
                  <div className="subtitle">{m.name}</div>
                  <p>{m.desc}</p>
                  <div className="p2-program-careers">
                    {m.careers.map((c, ci) => (
                      <li key={ci}><CheckCircle size={13} style={{ color: m.color, marginTop: 2, flexShrink: 0 }} /> {c}</li>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </section>
      </div>

      {/* ── 2. 5 MULTI-SKILLS (LIGHT THEME - BG SOFT SLATE) ── */}
      <div className="p2-strip-slate">
        <section className="p2-section" id="multi-skills">
          <div className="p2-section-header">
            <div className="p2-section-badge p2-badge-amber"><Zap size={12} /> Keunggulan Khas Vokasi</div>
            <h2 className="p2-section-title">5 Keterampilan Terapan Ekstra<br />Bebas Biaya Tambahan</h2>
            <p className="p2-section-subtitle">
              Satu-satunya sekolah vokasi di Malang yang membekali setiap siswa dengan lima keterampilan aplikatif bernilai tinggi secara cuma-cuma.
            </p>
          </div>
          <div className="p2-bento-grid">
            {multiSkills.map((s, i) => {
              const Icon = s.icon;
              return (
                <div className="p2-bento-item" key={i}>
                  <div className="p2-bento-icon" style={{ background: s.bg, color: s.color }}>
                    <Icon size={22} />
                  </div>
                  <h4>{s.name}</h4>
                  <p>{s.desc}</p>
                  <span className="p2-bento-free">✓ Gratis Resmi</span>
                </div>
              );
            })}
          </div>
        </section>
      </div>

      
      {/* ── KEMITRAAN INDUSTRI & DUDI (LINK & MATCH SHOWCASE) ── */}
      <div className="p2-strip-white">
        <section className="p2-section" id="mitra">
          <div className="p2-section-header">
            <div className="p2-section-badge p2-badge-emerald"><Briefcase size={12} /> Link & Match Industri</div>
            <h2 className="p2-section-title">Kemitraan Strategis Dunia Usaha<br />& Dunia Industri (DUDI)</h2>
            <p className="p2-section-subtitle">
              Sinergi nyata dengan sektor kuliner F&B, ritel modern, perbankan, perhotelan, dan perguruan tinggi untuk penyerapan kerja alumni.
            </p>
          </div>

          <div className="p2-mitra-grid">
            {industryPartners.map((item, idx) => (
              <div className="p2-mitra-card" key={idx} style={{ '--mitra-accent': item.color }}>
                <div className="p2-mitra-top">
                  <div className="p2-mitra-logo-box" style={{ color: item.color }}>
                    {item.logoText}
                  </div>
                  <span className="p2-mitra-badge">{item.badge}</span>
                </div>
                <h3 className="p2-mitra-name">{item.name}</h3>
                <div className="p2-mitra-category">{item.category}</div>
                <p className="p2-mitra-desc">{item.description}</p>
                <div className="p2-mitra-type">
                  <CheckCircle size={14} style={{ color: item.color }} />
                  <span>{item.type}</span>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>


      {/* ── 3. FASILITAS SEKOLAH (LIGHT THEME - BG PUTIH BERSIH) ── */}
      <div className="p2-strip-white">
        <section className="p2-section" id="fasilitas">
          <div className="p2-section-header">
            <div className="p2-section-badge p2-badge-sky"><Building size={12} /> Sarana & Prasarana</div>
            <h2 className="p2-section-title">Fasilitas Sekolah Lengkap<br />Mendukung Pembelajaran Nyata</h2>
            <p className="p2-section-subtitle">
              Gedung milik sendiri seluas 4.440 m² di Arjosari Blimbing dengan laboratorium terpadu, simulator ritel modern, dan sarana ibadah asri.
            </p>
          </div>
          <div className="p2-facility-grid">
            {facilities.map((f, fi) => {
              const Icon = f.icon;
              return (
                <div className="p2-facility-card" key={fi}>
                  <div className="p2-facility-icon">
                    <Icon size={22} />
                  </div>
                  <div>
                    <h4>{f.title}</h4>
                    <p>{f.desc}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </section>
      </div>

      {/* ── 4. PRESTASI SEKOLAH (LIGHT THEME - BG SOFT SLATE) ── */}
      <div className="p2-strip-slate">
        <section className="p2-section" id="prestasi">
          <div className="p2-section-header">
            <div className="p2-section-badge p2-badge-amber"><Trophy size={12} /> Prestasi & Penghargaan</div>
            <h2 className="p2-section-title">Capaian Membanggakan<br />Siswa & Sivitas Akademika</h2>
            <p className="p2-section-subtitle">
              Bukti nyata dedikasi dan kualitas pendidikan vokasi terapan berdaya saing tinggi.
            </p>
          </div>
          <div className="p2-achieve-grid">
            {schoolAchievements.map((a, i) => {
              const Icon = a.icon;
              const medalColors = {
                gold: { bg: '#fef3c7', text: '#b45309' },
                silver: { bg: '#f1f5f9', text: '#475569' },
                bronze: { bg: '#ffedd5', text: '#c2410c' },
                emerald: { bg: '#dcfce7', text: '#15803d' },
                purple: { bg: '#f3e8ff', text: '#7e22ce' }
              };
              const mc = medalColors[a.medal] || medalColors.gold;
              return (
                <div className="p2-achieve-card" key={i}>
                  <div className="p2-achieve-icon" style={{ background: `${a.color}15`, color: a.color }}>
                    <Icon size={20} />
                  </div>
                  <div className="p2-achieve-body">
                    <h4>{a.title}</h4>
                    <div className="meta">{a.event} — {a.year}</div>
                    <p>{a.description}</p>
                    <span className="p2-achieve-medal" style={{ background: mc.bg, color: mc.text }}>
                      {a.medalText}
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
        </section>
      </div>

      
      {/* ── EKSTRAKURIKULER UNGGULAN (PENGEMBANGAN KARAKTER SISWA) ── */}
      <div className="p2-strip-white">
        <section className="p2-section" id="ekskul">
          <div className="p2-section-header">
            <div className="p2-section-badge p2-badge-sky"><Flame size={12} /> Minat, Bakat & Kepemimpinan</div>
            <h2 className="p2-section-title">Ekstrakurikuler Pilihan<br />Membangun Karakter Juara</h2>
            <p className="p2-section-subtitle">
              Wadah penyaluran bakat olahraga, bela diri, kepanduan, dan seni budaya yang telah menorehkan prestasi membanggakan di Malang Raya.
            </p>
          </div>

          <div className="p2-ekskul-grid">
            {extracurriculars.map((ek, i) => {
              const Icon = ek.icon;
              return (
                <div className="p2-ekskul-card" key={i}>
                  <div className="p2-ekskul-icon-wrap" style={{ background: `${ek.color}15`, color: ek.color }}>
                    <Icon size={24} />
                  </div>
                  <h3 className="p2-ekskul-name">{ek.name}</h3>
                  <div className="p2-ekskul-schedule">
                    <Clock size={13} /> {ek.schedule}
                  </div>
                  <p className="p2-ekskul-desc">{ek.description}</p>
                  <div className="p2-ekskul-achieve">
                    <Trophy size={14} style={{ color: ek.color }} />
                    <span>{ek.achievement}</span>
                  </div>
                </div>
              );
            })}
          </div>
        </section>
      </div>


      {/* ── 5. BERITA & KEGIATAN (IMMERSIVE 3D COVERFLOW EYEWEAR SLIDER ON DARK STAGE) ── */}
      <CoverflowNewsSlider 
        articles={schoolArticles} 
        onSelectArticle={(art) => {
          setSelectedArticle(art);
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }} 
      />

      
      {/* ── FAQ INTERAKTIF (TANYA JAWAB SEPUTAR PPDB & SEKOLAH) ── */}
      <div className="p2-strip-white">
        <section className="p2-section" id="faq">
          <div className="p2-section-header">
            <div className="p2-section-badge p2-badge-indigo"><HelpCircle size={12} /> Pusat Bantuan & Tanya Jawab</div>
            <h2 className="p2-section-title">Pertanyaan yang Sering Diajukan<br />(FAQ)</h2>
            <p className="p2-section-subtitle">
              Informasi lengkap dan transparan seputar PPDB, fasilitas 5 Multi-Skills gratis, beasiswa, dan sertifikasi BNSP.
            </p>
          </div>

          <div className="p2-faq-container">
            {schoolFaqs.map((faq, fi) => {
              const isOpen = openFaqId === fi;
              return (
                <div className={`p2-faq-item ${isOpen ? 'active' : ''}`} key={fi}>
                  <button 
                    className="p2-faq-question"
                    onClick={() => setOpenFaqId(isOpen ? null : fi)}
                  >
                    <span>{faq.q}</span>
                    <ChevronDown size={20} className={`p2-faq-chevron ${isOpen ? 'rotated' : ''}`} />
                  </button>
                  {isOpen && (
                    <div className="p2-faq-answer">
                      {faq.a}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </section>
      </div>


      {/* ── 6. CALL TO ACTION BANNER (HIGH CONTRAST PRESTIGE CARD) ── */}
      <div className="p2-strip-slate">
        <section className="p2-section" style={{ textAlign: 'center', paddingTop: 40, paddingBottom: 60 }}>
          <div className="p2-cta-box">
            <h2 className="p2-section-title" style={{ marginBottom: 12 }}>Siap Bergabung dengan Kami?</h2>
            <p style={{ fontSize: '1rem', marginBottom: 32, maxWidth: 540, margin: '0 auto 32px' }}>
              Daftarkan diri Anda sekarang dan raih masa depan gemilang dengan sertifikasi kompetensi industri serta fasilitas multi-skills gratis.
            </p>
            <div style={{ display: 'flex', gap: 12, justifyContent: 'center', flexWrap: 'wrap' }}>
              <button className="p2-hero-btn-primary" onClick={() => navigateTo('ppdb')}>
                <GraduationCap size={18} /> Daftar PPDB Online
              </button>
              <button className="p2-hero-btn-secondary" onClick={() => navigateTo('cek-status')}>
                <Search size={18} /> Cek Status Pendaftaran
              </button>
            </div>
          </div>
        </section>
      </div>

      
      {/* ── PETA LOKASI GOOGLE MAPS & PANDUAN AKSES SEKOLAH ARJOSARI ── */}
      <div className="p2-strip-white">
        <section className="p2-section" id="lokasi">
          <div className="p2-section-header">
            <div className="p2-section-badge p2-badge-sky"><MapPin size={12} /> Aksesibilitas & Lokasi Sekolah</div>
            <h2 className="p2-section-title">Kunjungi SMK Ardjuna 2 Malang<br />Kota Malang</h2>
            <p className="p2-section-subtitle">
              Berlokasi strategis di Arjosari Blimbing, dekat terminal utama, dan sangat mudah dijangkau transportasi umum.
            </p>
          </div>

          <div className="p2-lokasi-grid">
            <div className="p2-map-frame-box">
              <iframe
                title="Peta Lokasi SMK Ardjuna 2 Malang"
                src="https://maps.google.com/maps?q=SMK+Ardjuna+2+Malang,+Jl.+Teluk+Pelabuhan+Ratu+No.41,+Arjosari,+Malang&t=&z=15&ie=UTF8&iwloc=&output=embed"
                loading="lazy"
                allowFullScreen
              />
            </div>

            <div className="p2-lokasi-info-card">
              <h3>Detail Lokasi Sekolah & Kontak Resmi</h3>

              <div className="p2-lokasi-point">
                <div className="p2-lokasi-point-icon"><MapPin size={16} /></div>
                <div>
                  <strong>Alamat Sekolah:</strong><br />
                  {school.alamat}
                </div>
              </div>

              <div className="p2-lokasi-point">
                <div className="p2-lokasi-point-icon"><Navigation size={16} /></div>
                <div>
                  <strong>Akses Transportasi:</strong><br />
                  Hanya 300 meter (3 menit) dari Terminal Arjosari Malang. Dilalui rute angkutan kota (AMG, AL, AG, ABG).
                </div>
              </div>

              <div className="p2-lokasi-point">
                <div className="p2-lokasi-point-icon"><Clock size={16} /></div>
                <div>
                  <strong>Jam Pelayanan Panitia PPDB:</strong><br />
                  Senin – Jumat: 07.00 – 15.30 WIB<br />
                  Sabtu: 07.30 – 13.00 WIB
                </div>
              </div>

              <div className="p2-lokasi-point">
                <div className="p2-lokasi-point-icon"><Phone size={16} /></div>
                <div>
                  <strong>Telepon & WhatsApp:</strong><br />
                  {school.telepon} / 0812-3456-7890
                </div>
              </div>

              <div className="p2-lokasi-actions">
                <a 
                  href="https://maps.google.com/?q=SMK+Ardjuna+2+Malang" 
                  target="_blank" 
                  rel="noreferrer"
                  className="p2-hero-btn-primary"
                  style={{ textDecoration: 'none', padding: '10px 18px', fontSize: '0.85rem' }}
                >
                  <MapPin size={15} /> Buka di Google Maps
                </a>
                <button
                  onClick={() => setShowWaPopup(true)}
                  className="p2-hero-btn-secondary"
                  style={{ padding: '10px 18px', fontSize: '0.85rem' }}
                >
                  <MessageCircle size={15} /> Hubungi via WA
                </button>
              </div>
            </div>
          </div>
        </section>
      </div>


      {/* ── FOOTER: PRESTIGE SLATE NAVY FOOTER ── */}
      <FooterSection school={school} navigateTo={navigateTo} onOpenLogin={onOpenLogin} isAuthenticated={isAuthenticated} onBackToErp={onBackToErp} />

      {/* ── Scroll to Top ── */}
      <button className={`p2-scroll-top ${showScrollTop ? 'visible' : ''}`} onClick={scrollToTop} aria-label="Ke atas">
        <ArrowUp size={20} />
      </button>
    </div>
  );
}

// ─── COMPONENT: 3D COVERFLOW EYEWEAR SLIDER ON DARK STAGE ───
const coverflowArticleHues = [
  { hue: '#6366f1', rgb: '99, 102, 241', name: 'Indigo' },
  { hue: '#06b6d4', rgb: '6, 182, 212', name: 'Cyan' },
  { hue: '#10b981', rgb: '16, 185, 129', name: 'Emerald' },
  { hue: '#f59e0b', rgb: '245, 158, 11', name: 'Amber' },
  { hue: '#8b5cf6', rgb: '139, 92, 246', name: 'Purple' },
  { hue: '#ec4899', rgb: '236, 72, 153', name: 'Rose' },
  { hue: '#38bdf8', rgb: '56, 189, 248', name: 'Sky' },
  { hue: '#14b8a6', rgb: '20, 184, 166', name: 'Teal' }
];

function CoverflowNewsSlider({ articles, onSelectArticle }) {
  const [activeIdx, setActiveIdx] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const [isHovered, setIsHovered] = useState(false);
  const [isDragging, setIsDragging] = useState(false);
  const dragStartX = useRef(0);
  const dragMoved = useRef(false);
  const stageRef = useRef(null);

  const total = articles.length;
  const activeHue = coverflowArticleHues[activeIdx % coverflowArticleHues.length];

  const next = useCallback(() => {
    setActiveIdx((prev) => (prev + 1) % total);
  }, [total]);

  const prev = useCallback(() => {
    setActiveIdx((prev) => (prev - 1 + total) % total);
  }, [total]);

  // Autoplay loop
  useEffect(() => {
    if (!isPlaying || isHovered || isDragging) return;
    const interval = setInterval(next, 4200);
    return () => clearInterval(interval);
  }, [isPlaying, isHovered, isDragging, next]);

  // Arrow keys navigation
  useEffect(() => {
    const handleKey = (e) => {
      if (!stageRef.current) return;
      const rect = stageRef.current.getBoundingClientRect();
      const inView = rect.top < window.innerHeight && rect.bottom > 0;
      if (!inView) return;

      if (e.key === 'ArrowLeft') {
        prev();
      } else if (e.key === 'ArrowRight') {
        next();
      }
    };
    window.addEventListener('keydown', handleKey);
    return () => window.removeEventListener('keydown', handleKey);
  }, [prev, next]);

  // Mouse Drag Handlers
  const handleMouseDown = (e) => {
    setIsDragging(true);
    dragStartX.current = e.clientX;
    dragMoved.current = false;
  };

  const handleMouseMove = (e) => {
    if (!isDragging) return;
    const diff = e.clientX - dragStartX.current;
    if (Math.abs(diff) > 8) dragMoved.current = true;
  };

  const handleMouseUp = (e) => {
    if (!isDragging) return;
    const diff = e.clientX - dragStartX.current;
    if (diff < -45) next();
    else if (diff > 45) prev();
    setIsDragging(false);
  };

  // Touch Swipe Handlers (Mobile)
  const handleTouchStart = (e) => {
    setIsDragging(true);
    dragStartX.current = e.touches[0].clientX;
    dragMoved.current = false;
  };

  const handleTouchMove = (e) => {
    if (!isDragging) return;
    const diff = e.touches[0].clientX - dragStartX.current;
    if (Math.abs(diff) > 8) dragMoved.current = true;
  };

  const handleTouchEnd = (e) => {
    if (!isDragging) return;
    const diff = e.changedTouches[0].clientX - dragStartX.current;
    if (diff < -40) next();
    else if (diff > 40) prev();
    setIsDragging(false);
  };

  return (
    <div 
      className="p2-coverflow-stage" 
      id="berita"
      ref={stageRef}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => { setIsHovered(false); if (isDragging) setIsDragging(false); }}
      tabIndex={0}
      style={{ '--active-hue': activeHue.hue }}
    >
      <div className="p2-stage-vignette" />
      
      {/* ─── AMBIENT COLORED HALO KEYED TO ACTIVE CARD HUE (SOFT LIGHT AURA) ─── */}
      <div 
        className="p2-stage-halo" 
        style={{ 
          background: `radial-gradient(circle 380px at 50% 50%, rgba(${activeHue.rgb}, 0.14) 0%, rgba(${activeHue.rgb}, 0.04) 50%, transparent 72%)` 
        }} 
      />

      {/* ─── STAGE HEADER WITH EYEWEAR EMBLEM ─── */}
      <div className="p2-coverflow-header">
        <div className="p2-coverflow-eyewear-badge">
          <div className="p2-eyewear-icon-wrap" style={{ borderColor: `rgba(${activeHue.rgb}, 0.45)`, boxShadow: `0 0 14px rgba(${activeHue.rgb}, 0.25)` }}>
            <Newspaper size={17} style={{ color: activeHue.hue }} />
          </div>
          <span className="p2-eyewear-label" style={{ color: activeHue.hue }}>
            WARTA & KEGIATAN SEKOLAH
          </span>
        </div>
        <h2 className="p2-coverflow-stage-title">
          Kabar Terkini & Kegiatan
          <span>SMK Ardjuna 2 Malang</span>
        </h2>
        <p className="p2-coverflow-stage-sub">
          Jelajahi warta kegiatan terkini, kemitraan industri, dan dokumentasi prestasi siswa SMK Ardjuna 2 Malang.
        </p>
      </div>

      {/* ─── 3D COVERFLOW FAN TRACK ─── */}
      <div 
        className="p2-coverflow-track-wrap"
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      >
        {/* Soft Floor Shadow beneath the cards */}
        <div className="p2-stage-floor-shadow" />

        {articles.map((art, i) => {
          let offset = i - activeIdx;
          if (offset > total / 2) offset -= total;
          if (offset < -total / 2) offset += total;

          const isCenter = offset === 0;
          const cardHue = coverflowArticleHues[i % coverflowArticleHues.length];

          // 3D Coverflow fan transforms with elevated floor shadows
          let transformStyle = '';
          let zIndex = 1;
          let opacity = 0;
          let filter = '';
          let boxShadow = 'none';
          let borderColor = '#e2e8f0';

          if (isCenter) {
            transformStyle = 'translate3d(0, -18px, 130px) scale(1.1) rotateY(0deg)';
            zIndex = 40;
            opacity = 1;
            filter = 'brightness(1)';
            boxShadow = `0 28px 55px -12px rgba(15, 23, 42, 0.22), 0 12px 24px -6px rgba(15, 23, 42, 0.12), 0 0 35px -5px rgba(${cardHue.rgb}, 0.35)`;
            borderColor = `rgba(${cardHue.rgb}, 0.65)`;
          } else if (offset === -1) {
            transformStyle = 'translate3d(-64%, 0, -30px) scale(0.88) rotateY(32deg)';
            zIndex = 30;
            opacity = 0.88;
            filter = 'brightness(0.9)';
            boxShadow = '0 16px 36px -8px rgba(15, 23, 42, 0.14)';
            borderColor = '#e2e8f0';
          } else if (offset === 1) {
            transformStyle = 'translate3d(64%, 0, -30px) scale(0.88) rotateY(-32deg)';
            zIndex = 30;
            opacity = 0.88;
            filter = 'brightness(0.9)';
            boxShadow = '0 16px 36px -8px rgba(15, 23, 42, 0.14)';
            borderColor = '#e2e8f0';
          } else if (offset === -2) {
            transformStyle = 'translate3d(-118%, 14px, -110px) scale(0.72) rotateY(48deg)';
            zIndex = 20;
            opacity = 0.55;
            filter = 'brightness(0.78)';
            boxShadow = '0 10px 24px -6px rgba(15, 23, 42, 0.08)';
            borderColor = '#e2e8f0';
          } else if (offset === 2) {
            transformStyle = 'translate3d(118%, 14px, -110px) scale(0.72) rotateY(-48deg)';
            zIndex = 20;
            opacity = 0.55;
            filter = 'brightness(0.78)';
            boxShadow = '0 10px 24px -6px rgba(15, 23, 42, 0.08)';
            borderColor = '#e2e8f0';
          } else {
            transformStyle = `translate3d(${offset > 0 ? '160%' : '-160%'}, 25px, -200px) scale(0.55) rotateY(${offset > 0 ? '-60deg' : '60deg'})`;
            zIndex = 10;
            opacity = 0;
          }

          return (
            <div
              key={art.id}
              className={`p2-coverflow-card ${isCenter ? 'center-active' : ''}`}
              style={{
                transform: transformStyle,
                zIndex,
                opacity,
                filter,
                boxShadow,
                borderColor,
                pointerEvents: opacity === 0 ? 'none' : 'auto'
              }}
              onClick={() => {
                if (dragMoved.current) return;
                if (isCenter) {
                  onSelectArticle(art);
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                } else {
                  setActiveIdx(i);
                }
              }}
            >
              <img 
                src={art.image} 
                alt={art.title} 
                className="p2-coverflow-card-img" 
                loading="lazy" 
                onError={(e) => { e.currentTarget.onerror = null; e.currentTarget.src = "/school-hero.jpg"; }} 
              />
              <div className="p2-coverflow-card-overlay">
                <div className="p2-coverflow-card-top">
                  <span 
                    className="p2-coverflow-badge" 
                    style={{ 
                      color: cardHue.hue, 
                      borderColor: `rgba(${cardHue.rgb}, 0.5)`,
                      boxShadow: isCenter ? `0 0 16px rgba(${cardHue.rgb}, 0.4)` : 'none'
                    }}
                  >
                    ● {art.category}
                  </span>
                  <span className="p2-coverflow-index">0{i + 1} / 0{total}</span>
                </div>

                <div className="p2-coverflow-card-bottom">
                  <h3 className="p2-coverflow-card-title">{art.title}</h3>
                  <p className="p2-coverflow-card-excerpt">{art.excerpt}</p>

                  <div className="p2-coverflow-meta-row">
                    <div className="p2-coverflow-meta-left">
                      <span><Calendar size={12} style={{ color: cardHue.hue }} /> {art.date}</span>
                      <span><Clock size={12} style={{ color: cardHue.hue }} /> {art.readTime}</span>
                    </div>
                    <button 
                      className="p2-coverflow-read-pill"
                      style={isCenter ? { borderColor: cardHue.hue, background: `rgba(${cardHue.rgb}, 0.22)` } : {}}
                      onClick={(e) => {
                        e.stopPropagation();
                        onSelectArticle(art);
                        window.scrollTo({ top: 0, behavior: 'smooth' });
                      }}
                    >
                      Baca <ArrowUpRight size={14} />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* ─── CONTROLS BAR: PREV, DOTS, PLAY/PAUSE, NEXT ─── */}
      <div className="p2-coverflow-controls">
        <button className="p2-coverflow-nav-btn" onClick={prev} aria-label="Artikel Sebelumnya">
          <ChevronLeft size={20} />
        </button>

        <div className="p2-coverflow-dots">
          {articles.map((_, dotIdx) => (
            <button
              key={dotIdx}
              className={`p2-coverflow-dot ${dotIdx === activeIdx ? 'active' : ''}`}
              onClick={() => setActiveIdx(dotIdx)}
              aria-label={`Ke artikel ${dotIdx + 1}`}
            />
          ))}
        </div>

        <button 
          className="p2-coverflow-play-btn" 
          onClick={() => setIsPlaying(!isPlaying)}
          title={isPlaying ? "Jeda Autoplay" : "Mulai Autoplay"}
        >
          {isPlaying ? <Pause size={15} /> : <Play size={15} />}
        </button>

        <button className="p2-coverflow-nav-btn" onClick={next} aria-label="Artikel Berikutnya">
          <ChevronRight size={20} />
        </button>
      </div>

      <div className="p2-coverflow-hint">
        <ChevronLeft size={13} /> Geser / Drag / Swipe atau tekan tombol panah keyboard <ChevronRight size={13} />
      </div>
    </div>
  );
}

// ─── Navbar Component ───
function Navbar({ _school, scrolled, activeView, navigateTo, mobileMenu, setMobileMenu, onBackToErp, onOpenLogin, isAuthenticated }) {
  return (
    <nav className={`p2-navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="p2-navbar-inner">
        <div className="p2-nav-logo" onClick={() => navigateTo('home')}>
          <img src="/logo-smk-ardjuna.png" alt="Logo" />
          <div className="p2-nav-logo-text">
            <strong>SMK&nbsp;ARDJUNA&nbsp;2</strong>
            <span>KOTA MALANG</span>
          </div>
        </div>

        <div className="p2-nav-links">
          <button className={`p2-nav-link ${activeView === 'home' ? 'active' : ''}`} onClick={() => navigateTo('home')}>Beranda</button>
          <button className="p2-nav-link" onClick={() => { if (activeView !== 'home') navigateTo('home'); setTimeout(() => document.getElementById('sambutan')?.scrollIntoView({ behavior: 'smooth' }), 100); }}>Profil</button>
          <button className="p2-nav-link" onClick={() => { if (activeView !== 'home') navigateTo('home'); setTimeout(() => document.getElementById('programs')?.scrollIntoView({ behavior: 'smooth' }), 100); }}>Jurusan</button>
          <button className="p2-nav-link" onClick={() => { if (activeView !== 'home') navigateTo('home'); setTimeout(() => document.getElementById('berita')?.scrollIntoView({ behavior: 'smooth' }), 100); }}>Berita</button>
          <button className={`p2-nav-link ${activeView === 'staff' ? 'active' : ''}`} onClick={() => navigateTo('staff')}>Guru & Staf</button>
          <button className={`p2-nav-link ${activeView === 'cek-status' ? 'active' : ''}`} onClick={() => navigateTo('cek-status')}>Cek Status</button>
        </div>

        <div className="p2-nav-cta-group">
          <button className="p2-nav-cta" onClick={() => navigateTo('ppdb')}>
            <GraduationCap size={15} /> Daftar PPDB
          </button>
          {isAuthenticated ? (
            <button
              onClick={onBackToErp}
              title="Buka Sistem ERP SIMPEL"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '6px',
                padding: '8px 14px',
                borderRadius: '999px',
                background: 'rgba(56, 189, 248, 0.15)',
                border: '1px solid rgba(56, 189, 248, 0.4)',
                color: '#38bdf8',
                fontSize: '0.82rem',
                fontWeight: 700,
                cursor: 'pointer'
              }}
            >
              <Shield size={14} /> Panel ERP
            </button>
          ) : (
            <button
              onClick={onOpenLogin}
              title="Khusus Pimpinan, Dewan Guru & Tenaga Kependidikan"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '6px',
                padding: '8px 14px',
                borderRadius: '999px',
                border: '1px solid rgba(255,255,255,0.22)',
                background: 'rgba(255,255,255,0.08)',
                color: '#ffffff',
                fontSize: '0.82rem',
                fontWeight: 600,
                cursor: 'pointer',
                transition: 'all 0.2s ease'
              }}
            >
              <Lock size={13} /> Login SIMPEL
            </button>
          )}
          <button className="p2-nav-mobile-btn" onClick={() => setMobileMenu(!mobileMenu)} aria-label="Menu">
            <Menu size={20} />
          </button>
        </div>
      </div>

      {/* MOBILE DRAWER */}
      {mobileMenu && (
        <div className="p2-mobile-drawer" onClick={() => setMobileMenu(false)}>
          <div className="p2-mobile-drawer-inner" onClick={(e) => e.stopPropagation()}>
            <div className="p2-mobile-drawer-header">
              <strong style={{ fontSize: '1.1rem', color: '#0f172a' }}>Menu Navigasi</strong>
              <button 
                onClick={() => setMobileMenu(false)}
                style={{ background: 'none', border: 'none', color: '#64748b', cursor: 'pointer' }}
              >
                <X size={20} />
              </button>
            </div>
            
            <button className="p2-mobile-link" onClick={() => navigateTo('home')}>
              <Home size={16} /> Beranda
            </button>
            <button className="p2-mobile-link" onClick={() => { navigateTo('home'); setTimeout(() => document.getElementById('sambutan')?.scrollIntoView({ behavior: 'smooth' }), 100); }}>
              <Quote size={16} /> Sambutan Pimpinan
            </button>
            <button className="p2-mobile-link" onClick={() => { navigateTo('home'); setTimeout(() => document.getElementById('programs')?.scrollIntoView({ behavior: 'smooth' }), 100); }}>
              <Layers size={16} /> Program Keahlian
            </button>
            <button className="p2-mobile-link" onClick={() => { navigateTo('home'); setTimeout(() => document.getElementById('multi-skills')?.scrollIntoView({ behavior: 'smooth' }), 100); }}>
              <Zap size={16} /> 5 Multi-Skills Gratis
            </button>
            <button className="p2-mobile-link" onClick={() => { navigateTo('home'); setTimeout(() => document.getElementById('mitra')?.scrollIntoView({ behavior: 'smooth' }), 100); }}>
              <Briefcase size={16} /> Mitra DUDI & BKK
            </button>
            <button className="p2-mobile-link" onClick={() => { navigateTo('home'); setTimeout(() => document.getElementById('ekskul')?.scrollIntoView({ behavior: 'smooth' }), 100); }}>
              <Flame size={16} /> Ekstrakurikuler
            </button>
            <button className="p2-mobile-link" onClick={() => { navigateTo('home'); setTimeout(() => document.getElementById('berita')?.scrollIntoView({ behavior: 'smooth' }), 100); }}>
              <Newspaper size={16} /> Warta & Berita 3D
            </button>
            <button className="p2-mobile-link" onClick={() => { navigateTo('home'); setTimeout(() => document.getElementById('faq')?.scrollIntoView({ behavior: 'smooth' }), 100); }}>
              <HelpCircle size={16} /> FAQ Tanya Jawab
            </button>
            <button className="p2-mobile-link" onClick={() => { navigateTo('home'); setTimeout(() => document.getElementById('lokasi')?.scrollIntoView({ behavior: 'smooth' }), 100); }}>
              <MapPin size={16} /> Peta & Lokasi Sekolah
            </button>
            <button className="p2-mobile-link" onClick={() => navigateTo('staff')}>
              <Users size={16} /> Guru & Staf
            </button>
            <button className="p2-mobile-link" onClick={() => navigateTo('cek-status')}>
              <Search size={16} /> Cek Status PPDB
            </button>

            {isAuthenticated ? (
              <button
                className="p2-mobile-link"
                style={{ color: '#0284c7', fontWeight: 700 }}
                onClick={() => { setMobileMenu(false); onBackToErp(); }}
              >
                <Shield size={16} /> Buka Panel SIMPEL ERP
              </button>
            ) : (
              <button
                className="p2-mobile-link"
                style={{ color: '#4f46e5', fontWeight: 700 }}
                onClick={() => { setMobileMenu(false); onOpenLogin(); }}
              >
                <Lock size={16} /> Login SIMPEL (Guru & Staf)
              </button>
            )}

            <button 
              className="p2-hero-btn-primary" 
              style={{ marginTop: 14, width: '100%', justifyContent: 'center' }}
              onClick={() => navigateTo('ppdb')}
            >
              <GraduationCap size={16} /> Daftar PPDB Online
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}

// ─── Footer Component ───
function FooterSection({ school, navigateTo, onOpenLogin, isAuthenticated, onBackToErp }) {
  return (
    <footer className="p2-footer">
      <div className="p2-footer-inner">
        <div className="p2-footer-brand">
          <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 16 }}>
            <img src="/logo-smk-ardjuna.png" alt="Logo" style={{ width: 44, height: 44 }} />
            <div>
              <strong style={{ fontSize: '1.15rem', color: '#ffffff', fontFamily: 'var(--font-display)', display: 'block', whiteSpace: 'nowrap' }}>
                SMK&nbsp;ARDJUNA&nbsp;2
              </strong>
              <span style={{ fontSize: '0.72rem', color: '#64748b', letterSpacing: '0.08em', fontWeight: 600 }}>KOTA MALANG</span>
            </div>
          </div>
          <p>
            A Multi-Skills Based School — Disenangi, Mandiri, Berprestasi, dan Mantap dalam Kemandirian. 
            Membentuk lulusan vokasi siap kerja berdaya saing global dengan sertifikasi resmi BNSP.
          </p>
          <div className="p2-footer-socials">
            <a href="https://instagram.com" target="_blank" rel="noreferrer" aria-label="Instagram">
              <svg width="16" height="16" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
            </a>
            <a href="https://facebook.com" target="_blank" rel="noreferrer" aria-label="Facebook">
              <svg width="16" height="16" fill="currentColor" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
            </a>
            <a href="https://youtube.com" target="_blank" rel="noreferrer" aria-label="YouTube">
              <svg width="16" height="16" fill="currentColor" viewBox="0 0 24 24"><path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg>
            </a>
          </div>
        </div>

        <div className="p2-footer-col">
          <h4>Jelajahi Portal</h4>
          <ul>
            <li><button onClick={() => { navigateTo('home'); setTimeout(() => document.getElementById('sambutan')?.scrollIntoView({ behavior: 'smooth' }), 100); }}>Sambutan Kepala Sekolah</button></li>
            <li><button onClick={() => { navigateTo('home'); setTimeout(() => document.getElementById('programs')?.scrollIntoView({ behavior: 'smooth' }), 100); }}>Program Keahlian (MPLB, BDP, AKL)</button></li>
            <li><button onClick={() => { navigateTo('home'); setTimeout(() => document.getElementById('mitra')?.scrollIntoView({ behavior: 'smooth' }), 100); }}>Mitra Industri & BKK Kerja</button></li>
            <li><button onClick={() => { navigateTo('home'); setTimeout(() => document.getElementById('ekskul')?.scrollIntoView({ behavior: 'smooth' }), 100); }}>Ekstrakurikuler Kesiswaan</button></li>
            <li><button onClick={() => { navigateTo('home'); setTimeout(() => document.getElementById('faq')?.scrollIntoView({ behavior: 'smooth' }), 100); }}>FAQ Tanya Jawab PPDB</button></li>
            <li><button onClick={() => { navigateTo('home'); setTimeout(() => document.getElementById('lokasi')?.scrollIntoView({ behavior: 'smooth' }), 100); }}>Peta Lokasi Google Maps</button></li>
          </ul>
        </div>

        <div className="p2-footer-col">
          <h4>5 Multi-Skills</h4>
          <ul>
            <li><button onClick={() => { navigateTo('home'); setTimeout(() => document.getElementById('multi-skills')?.scrollIntoView({ behavior: 'smooth' }), 100); }}>Mengemudi Mobil SIM A</button></li>
            <li><button onClick={() => { navigateTo('home'); setTimeout(() => document.getElementById('multi-skills')?.scrollIntoView({ behavior: 'smooth' }), 100); }}>Tata Boga & Barista</button></li>
            <li><button onClick={() => { navigateTo('home'); setTimeout(() => document.getElementById('multi-skills')?.scrollIntoView({ behavior: 'smooth' }), 100); }}>Perhotelan & Housekeeping</button></li>
            <li><button onClick={() => { navigateTo('home'); setTimeout(() => document.getElementById('multi-skills')?.scrollIntoView({ behavior: 'smooth' }), 100); }}>Tata Busana & Menjahit</button></li>
            <li><button onClick={() => { navigateTo('home'); setTimeout(() => document.getElementById('multi-skills')?.scrollIntoView({ behavior: 'smooth' }), 100); }}>Otomotif Ringan Sepeda Motor</button></li>
          </ul>
        </div>

        <div className="p2-footer-col">
          <h4>Informasi & Kontak</h4>
          <ul>
            <li style={{ fontSize: '0.84rem', color: '#94a3b8' }}>📍 {school.alamat}</li>
            <li style={{ fontSize: '0.84rem', color: '#94a3b8' }}>📞 {school.telepon}</li>
            <li style={{ fontSize: '0.84rem', color: '#94a3b8' }}>✉️ {school.email}</li>
            <li style={{ fontSize: '0.84rem', color: '#94a3b8' }}>🏛️ NPSN: {school.npsn} | Akreditasi: {school.akreditasi}</li>
            <li style={{ marginTop: '12px', borderTop: '1px solid #1e293b', paddingTop: '10px' }}>
              {isAuthenticated ? (
                <button
                  onClick={onBackToErp}
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '6px',
                    padding: '6px 12px',
                    borderRadius: '8px',
                    background: 'rgba(56, 189, 248, 0.12)',
                    border: '1px solid #38bdf8',
                    color: '#38bdf8',
                    fontSize: '0.78rem',
                    fontWeight: 700,
                    cursor: 'pointer'
                  }}
                >
                  <Shield size={13} /> Panel SIMPEL ERP
                </button>
              ) : (
                <button
                  onClick={onOpenLogin}
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '6px',
                    padding: '6px 12px',
                    borderRadius: '8px',
                    background: '#1e293b',
                    border: '1px solid #334155',
                    color: '#cbd5e1',
                    fontSize: '0.78rem',
                    fontWeight: 600,
                    cursor: 'pointer'
                  }}
                >
                  <Lock size={13} /> Login Guru / Petugas
                </button>
              )}
            </li>
          </ul>
        </div>
      </div>

      <div className="p2-footer-bottom">
        <div>© {new Date().getFullYear()} {school.name}. Hak Cipta Dilindungi Undang-Undang.</div>
        <div>A Multi-Skills Based School Malang • Disenangi, Mandiri, Berprestasi</div>
      </div>
    </footer>
  );
}

export default Modul10WebsitePortal;
