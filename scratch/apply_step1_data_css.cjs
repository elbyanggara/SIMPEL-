const fs = require('fs');
const path = require('path');

const targetFile = 'c:/Users/USER/OneDrive/Dokumen/web projek/SIMPEL/src/components/modules/Modul10WebsitePortal.jsx';
let content = fs.readFileSync(targetFile, 'utf8');

// 1. Update imports
if (!content.includes('Flag, Compass, Music, Map, Navigation, MessageSquare')) {
  content = content.replace(
    "} from 'lucide-react';",
    "  Flag, Compass, Music, Map, Navigation, MessageSquare\n} from 'lucide-react';"
  );
}

// 2. Add New Data Constants before schoolArticles
const newDataConstants = `
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
    type: "Asistensi Mengajar & Kampus Mengajar",
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
    a: "Pendaftaran dapat dilakukan secara online melalui portal ini atau langsung di Ruang Panitia PPDB Kampus Arjosari. Syarat utama meliputi: Mengisi formulir pendaftaran, fotokopi Ijazah/SKL SMP/MTs, fotokopi Kartu Keluarga (KK), fotokopi Akta Kelahiran, dan pas foto 3x4. Kami membuka Jalur Reguler, Jalur Prestasi (Akademik/Non-Akademik), serta Jalur Keringanan Afirmasi."
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
    q: "Di mana lokasi kampus dan bagaimana akses transportasinya?",
    a: "Kampus SMK Ardjuna 2 berlokasi sangat strategis di Jl. Teluk Pelabuhan Ratu No. 41, Arjosari, Kec. Blimbing, Kota Malang. Lokasinya hanya sekitar 300 meter (3 menit) dari Terminal Arjosari Malang dan dilalui rute angkutan kota utama (AMG, AL, AG, ABG), sehingga sangat mudah dijangkau oleh siswa dari seluruh penjuru Malang Raya."
  }
];
`;

if (!content.includes('principalMessage =')) {
  content = content.replace(
    '// ─── DATA: ARTIKEL & WARTA SEKOLAH ───',
    newDataConstants + '\n// ─── DATA: ARTIKEL & WARTA SEKOLAH ───'
  );
}

// 3. Update school metadata
content = content.replace(
  'alamat: "Jl. Candi Telagawangi No. 100, Mojolangu, Kec. Lowokwaru, Kota Malang, Jawa Timur 65142",',
  'alamat: "Jl. Teluk Pelabuhan Ratu No. 41, Arjosari, Kec. Blimbing, Kota Malang 65126",'
);
content = content.replace(
  'kepsek: "Drs. H. M. Supriyadi",',
  'kepsek: "Drs. Anang Kuswanto",'
);

// 4. Add new state variables
const oldStateBlock = `  const [checkId, setCheckId] = useState('');
  const [checkResult, setCheckResult] = useState(null);`;

const newStateBlock = `  const [checkId, setCheckId] = useState('');
  const [checkResult, setCheckResult] = useState(null);

  // New Interactive States
  const [openFaqId, setOpenFaqId] = useState(0);
  const [activeKasekTab, setActiveKasekTab] = useState('sambutan');
  const [showWaPopup, setShowWaPopup] = useState(false);
  const [waSelectedMsg, setWaSelectedMsg] = useState('Halo Admin PPDB SMK Ardjuna 2 Malang, saya ingin berkonsultasi mengenai pendaftaran siswa baru.');`;

if (!content.includes('openFaqId')) {
  content = content.replace(oldStateBlock, newStateBlock);
}

// 5. Add CSS for all new components
const newCssRules = `
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
      height: 3px;
      background: var(--mitra-accent, #4f46e5);
    }
    .p2-mitra-card:hover {
      transform: translateY(-5px);
      box-shadow: 0 18px 36px -6px rgba(15, 23, 42, 0.1);
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

    /* ─── Peta Lokasi Google Maps & Detail Kampus ─── */
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
    .p2-wa-pulse-ring {
      position: absolute;
      inset: -4px;
      border-radius: 50%;
      border: 2px solid #25D366;
      animation: p2-wa-pulse 2s infinite;
      pointer-events: none;
    }
    @keyframes p2-wa-pulse {
      0% { transform: scale(1); opacity: 0.8; }
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
`;

if (!content.includes('.p2-kasek-grid')) {
  content = content.replace(
    '/* ─── Responsive Media Queries ─── */',
    newCssRules + '\n    /* ─── Responsive Media Queries ─── */'
  );
}

fs.writeFileSync(targetFile, content, 'utf8');
console.log('Successfully updated imports, data, and CSS!');
