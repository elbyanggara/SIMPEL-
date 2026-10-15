// Initial Seed Data for SIMPEL (Sistem Informasi Manajemen Pelayanan Sekolah / ERP SMK)

export const initialSchoolProfile = {
  name: "SMKS ARDJUNA 2 MALANG",
  formalName: "SMKS ARDJUNA 2",
  npsn: "20533649",
  status: "SWASTA",
  studyTime: "Sehari Penuh / 5 Hari (Senin-Kamis 07.00-14.00, Jumat 07.00-11.00 WIB)",
  curriculum: "SMK Merdeka - Manajemen Perkantoran, Bisnis Daring & Akuntansi",
  foundation: "YAYASAN ARDJUNA BINA TARUNA",
  npyp: "AE7111",
  foundationLeader: "Ir. H. Hari Purwanto",
  foundationAddress: "Raden Tumenggung Soerjo 37, Bunul Rejo, Kec. Blimbing, Kota Malang",
  skPendirian: "1158/34.U/1990 (18 Desember 1990)",
  skOperasional: "27/18.05/02/IV/2021 (28 April 2021)",
  accreditation: "B (BAN-PDM Skor 87 - SK No. 1857/BAN-SM/SK/2022 s.d. 31 Des 2027)",
  motto: "A Multi-Skills Based School • Disenangi, Mandiri, Berprestasi, dan Mantap dalam IMTAQ",
  vision: "Mewujudkan tenaga kerja tingkat menengah yang berkualitas dan profesional yang diharapkan dapat berperan sebagai salah satu faktor keunggulan industri di Indonesia yang beriman dan bertaqwa kepada Tuhan Yang Maha Esa.",
  missions: [
    "Menyiapkan tenaga kerja terampil untuk mengisi keperluan pembangunan.",
    "Mengubah status warga bangsa Indonesia dari status beban (sebagai siswa yang masih dihidupi) menjadi aset ekonomi (sebagai tamatan produktif yang berpenghasilan).",
    "Memberi pengetahuan, keterampilan, dan sikap sebagai bekal dasar untuk pengembangan diri tamatan secara berkelanjutan.",
    "Mengubah pendidikan kejuruan dengan tamatan yang tidak memiliki kejelasan pengembangan karir pendidikannya (dead end) ke sistem pendidikan dan pelatihan kejuruan yang menyediakan jembatan dari lapangan kerja ke jalur pendidikan berkelanjutan."
  ],
  address: "JL. TELUK PELABUHAN RATU NO. 41",
  subdistrict: "Kel. Arjosari, Kec. Blimbing",
  city: "Kota Malang, Jawa Timur 65126",
  coordinates: { lat: -7.9304, lng: 112.6576 },
  phone: "0341-492423",
  email: "ardjunasmk@gmail.com",
  website: "https://smkardjuna2malang.sch.id",
  socialMedia: {
    instagram: "https://www.instagram.com/smkardjuna2_malang/",
    facebook: "https://id-id.facebook.com/smkardjuna2/",
    twitter: "https://mobile.twitter.com/ardjuna2"
  },
  headmaster: {
    name: "Drs. Anang Kuswanto",
    title: "Kepala Sekolah",
    nip: "-"
  },
  ktu: {
    name: "Tri Utomo",
    title: "Kepala Tata Usaha",
    nip: "-"
  },
  teachingFactory: {
    name: "Toko Simulator Ardjuna Mart",
    partner: "Koperasi Agro Niaga (KAN) Jabung & PT Jaring Abadi Retailindo",
    partnerDirector: "Ibu Latifa",
    inaugurationDate: "Jumat, 6 Desember 2024",
    location: "Jl. Teluk Pelabuhan Ratu 41 Kel. Arjosari, Kec. Blimbing, Kota Malang",
    description: "Program Teaching Factory unggulan melatih siswa langsung siap kerja dalam pengelolaan toko retail modern, kasir POS digital, merchandising, dan inventory control."
  },
  multiSkills: [
    { id: "tsm", name: "Teknik Sepeda Motor (TSM)", desc: "Praktik servis ringan, tune up & perawatan mesin sepeda motor" },
    { id: "hotel", name: "Perhotelan (Hospitality)", desc: "Standar housekeeping, front office & etika perhotelan" },
    { id: "boga", name: "Tata Boga & Kuliner", desc: "Produksi boga, minuman herbal nusantara, sari markisa & barista" },
    { id: "jahit", name: "Keterampilan Menjahit & Kerajinan", desc: "Pembuatan pola dasar, busana kerja & kriya kreatif" },
    { id: "kemudi", name: "Pelatihan Mengemudi Mobil", desc: "Praktik setir mobil, pemahaman rambu lalu lintas & pengurusan SIM A resmi" }
  ],
  ppdbOfficial: {
    beasiswa: [
      "Keringanan Biaya SPP",
      "Beasiswa Prestasi (Akademik & Non-Akademik)",
      "Beasiswa Yatim Piatu"
    ],
    contacts: [
      { name: "Pak Tri Utomo", phone: "0821-3107-6852", role: "Kepala Tata Usaha / Informasi PPDB" },
      { name: "Pak Rizal", phone: "0895-3567-81388", role: "Waka Kurikulum / Panitia PPDB" }
    ],
    workHours: "Senin - Kamis: 07.00 - 14.00 WIB | Jumat: 07.00 - 11.00 WIB",
    address: "Jl. Teluk Pelabuhan Ratu 41, Kel. Arjosari, Kec. Blimbing, Kota Malang 65126"
  },
  facilitiesData: {
    landArea: "4.440 m² (Milik Sendiri)",
    electricity: "PLN 11.000 Watt",
    internet: "300 Mbps Dedicated",
    classrooms: 8,
    labComputer: 2,
    labMultimedia: 1,
    library: 1
  },
  dapodikStats: {
    totalStudents: 105,
    studentsMale: 40,
    studentsFemale: 65,
    rombel: 8,
    totalPtk: 24,
    totalTeachers: 18,
    teachersMale: 7,
    teachersFemale: 11,
    certifiedTeachersPct: "83.33% (15 Guru)",
    ratioStudentTeacher: "6 Siswa per Guru (1:6)"
  },
  activeYear: "2025/2026",
  activeSemester: "Genap"
};

export const initialRoles = [
  {
    id: "ktu",
    username: "ktu",
    password: "ardjuna2025",
    label: "Kepala Tata Usaha (KTU)",
    user: "Tri Utomo",
    nip: "197805122005011003",
    badge: "Tata Usaha",
    status: "Aktif",
    isSuperAdmin: true,
    allowedModules: ["modul1", "modul2", "modul3", "modul4", "modul5", "modul6", "modul7", "modul8", "modul9", "modul10", "modul11", "modul12"],
    desc: "Akses Penuh Seluruh Modul (Persuratan, Kepegawaian, Keuangan, Manajemen Akun Guru)"
  },
  {
    id: "kepsek",
    username: "kepsek",
    password: "ardjuna2025",
    label: "Kepala Sekolah",
    user: "Drs. Anang Kuswanto",
    nip: "196803151994031008",
    badge: "Pimpinan",
    status: "Aktif",
    isSuperAdmin: false,
    allowedModules: ["modul4", "modul1", "modul2", "modul3", "modul5", "modul8", "modul11"],
    desc: "Executive Approval Disposisi Surat Masuk, SK Tugas, Rapor, BOS & Laporan Eksekutif"
  },
  {
    id: "kurikulum",
    username: "kurikulum",
    password: "ardjuna2025",
    label: "Waka Kurikulum",
    user: "Rizal Umaruddin Haqiqi, S.Pd.",
    nip: "198907212015021004",
    badge: "Akademik",
    status: "Aktif",
    isSuperAdmin: false,
    allowedModules: ["modul3", "modul1", "modul11"],
    desc: "Kurikulum Merdeka, Jadwal Pelajaran Anti-Bentrok, e-Rapor & Data Siswa"
  },
  {
    id: "kesiswaan",
    username: "kesiswaan",
    password: "ardjuna2025",
    label: "Waka Kesiswaan",
    user: "Dra. Rini Utami",
    nip: "197204181998022001",
    badge: "Kesiswaan",
    status: "Aktif",
    isSuperAdmin: false,
    allowedModules: ["modul1", "modul9", "modul10"],
    desc: "Penerimaan PPDB Online, Buku Induk Siswa, Poin Pelanggaran, Ekskul & BK"
  },
  {
    id: "sarpras",
    username: "sarpras",
    password: "ardjuna2025",
    label: "Waka Sarpras",
    user: "Dian Anggraeni, S.Pd.",
    nip: "198411032010012015",
    badge: "Sarana",
    status: "Aktif",
    isSuperAdmin: false,
    allowedModules: ["modul6"],
    desc: "Sarana Prasarana, Label QR Code Aset Lab/Bengkel & Peminjaman Alat"
  },
  {
    id: "hubin",
    username: "hubin",
    password: "ardjuna2025",
    label: "Kaprogli BDP / Hubin PKL",
    user: "Dra. Kartiani",
    nip: "197509142006042009",
    badge: "BDP / DUDI",
    status: "Aktif",
    isSuperAdmin: false,
    allowedModules: ["modul8", "modul1"],
    desc: "Kemitraan DUDI Industri, Penempatan Siswa Magang PKL & Info Lowongan BKK"
  },
  {
    id: "otkp",
    username: "otkp",
    password: "ardjuna2025",
    label: "Kaprogli OTKP / MPLB",
    user: "Siti Chusnul Chotimah, S.Pd.",
    nip: "198302192008012012",
    badge: "OTKP",
    status: "Aktif",
    isSuperAdmin: false,
    allowedModules: ["modul3", "modul1", "modul8"],
    desc: "Manajemen Perkantoran, Sertifikasi UKK BNSP, e-Rapor Jurusan & PKL"
  },
  {
    id: "bendahara",
    username: "bendahara",
    password: "ardjuna2025",
    label: "Bendahara Sekolah & BOS",
    user: "Moh. Iqbal Firdiyansah, SE",
    nip: "199106252019031011",
    badge: "Keuangan",
    status: "Aktif",
    isSuperAdmin: false,
    allowedModules: ["modul5", "modul1"],
    desc: "Buku Kas Umum (BKU) BOS, Kwitansi SPP, Anggaran RKAS 8 Standar & Data Siswa"
  },
  {
    id: "bk",
    username: "bk",
    password: "ardjuna2025",
    label: "Guru Bimbingan Konseling (BK)",
    user: "Dra. Rini Utami",
    nip: "197204181998022001",
    badge: "BK / Konseling",
    status: "Aktif",
    isSuperAdmin: false,
    allowedModules: ["modul9", "modul1"],
    desc: "Pencatatan Kasus & Konseling Siswa, Home Visit, dan Poin Karakter Siswa"
  },
  {
    id: "perpus",
    username: "perpus",
    password: "ardjuna2025",
    label: "Pengelola Perpustakaan",
    user: "Siti Ngaisah",
    nip: "198008122007012019",
    badge: "Perpustakaan",
    status: "Aktif",
    isSuperAdmin: false,
    allowedModules: ["modul7"],
    desc: "Katalog Buku Digital (SIMPUS), Sirkulasi Peminjaman & E-Book Kejuruan"
  },
  {
    id: "siswa",
    username: "siswa",
    password: "ardjuna2025",
    label: "Siswa / Perwakilan OSIS",
    user: "Nabila Aulia Rahma",
    nip: "0068192301",
    badge: "Siswa",
    status: "Aktif",
    isSuperAdmin: false,
    allowedModules: ["modul1", "modul10"],
    desc: "Profil Siswa, Cek Nilai Rapor Siswa & Informasi Portal Web Sekolah"
  }
];

export const initialStudents = [
  {
    id: "SIS-001",
    nisn: "0068192301",
    nis: "23241001",
    name: "Nabila Aulia Rahma",
    gender: "P",
    class: "XII MPLB 1",
    major: "Manajemen Perkantoran & Layanan Bisnis (MPLB / OTKP)",
    phone: "081234567890",
    parentName: "Bambang Irawan",
    address: "Jl. Teluk Grajakan No. 12, Arjosari, Malang",
    attendanceRate: 98,
    violationPoints: 0,
    achievementPoints: 45,
    sppStatus: "Lunas",
    status: "Aktif"
  },
  {
    id: "SIS-002",
    nisn: "0068192302",
    nis: "23241002",
    name: "Rizky Dwi Pratama",
    gender: "L",
    class: "XII BDP 1",
    major: "Bisnis Daring & Pemasaran (BDP / Digital Marketing)",
    phone: "081398765432",
    parentName: "Agus Santoso",
    address: "Jl. Raden Intan No. 88, Blimbing, Malang",
    attendanceRate: 100,
    violationPoints: 0,
    achievementPoints: 60,
    sppStatus: "Lunas",
    status: "Aktif"
  },
  {
    id: "SIS-003",
    nisn: "0071294819",
    nis: "23242015",
    name: "Siti Nurhaliza",
    gender: "P",
    class: "XI AKL 1",
    major: "Akuntansi & Keuangan Lembaga (AKL)",
    phone: "082155443322",
    parentName: "Joko Suwarno",
    address: "Jl. Borobudur No. 45, Mojolangu, Malang",
    attendanceRate: 95,
    violationPoints: 0,
    achievementPoints: 30,
    sppStatus: "Lunas",
    status: "Aktif"
  },
  {
    id: "SIS-004",
    nisn: "0078912340",
    nis: "23243009",
    name: "Dimas Aditya Saputra",
    gender: "L",
    class: "XI BDP 2",
    major: "Bisnis Daring & Pemasaran (BDP)",
    phone: "085711223344",
    parentName: "Suryanto",
    address: "Jl. Terusan Sulfat No. 19, Malang",
    attendanceRate: 92,
    violationPoints: 5,
    achievementPoints: 20,
    sppStatus: "Lunas",
    status: "Aktif"
  },
  {
    id: "SIS-005",
    nisn: "0081239841",
    nis: "24251034",
    name: "Adelia Putri Kirana",
    gender: "P",
    class: "X MPLB 2",
    major: "Manajemen Perkantoran & Layanan Bisnis (MPLB)",
    phone: "087899001122",
    parentName: "Hendarman",
    address: "Jl. Simpang Panji Suroso No. 7, Malang",
    attendanceRate: 96,
    violationPoints: 0,
    achievementPoints: 35,
    sppStatus: "Lunas",
    status: "Aktif"
  }
];

export const initialPpdbApplicants = [
  {
    id: "PPDB-2026-001",
    name: "Zahra Amelia",
    nisn: "0098231456",
    originSchool: "SMP Negeri 14 Malang",
    chosenMajor: "Manajemen Perkantoran & Layanan Bisnis (MPLB / OTKP)",
    track: "Prestasi Akademik",
    scoreAverage: 89.5,
    status: "Lulus Seleksi",
    registrationDate: "2026-02-10",
    phone: "081288776655"
  },
  {
    id: "PPDB-2026-002",
    name: "Bagas Satria Pratama",
    nisn: "0098765432",
    originSchool: "SMP Negeri 20 Malang",
    chosenMajor: "Bisnis Daring & Pemasaran (BDP)",
    track: "Zonasi Wilayah Blimbing",
    scoreAverage: 86.2,
    status: "Lulus Seleksi",
    registrationDate: "2026-02-11",
    phone: "081344556677"
  },
  {
    id: "PPDB-2026-003",
    name: "Rania Farah Salsabila",
    nisn: "0091122334",
    originSchool: "SMP Islam Malang",
    chosenMajor: "Akuntansi & Keuangan Lembaga (AKL)",
    track: "Afirmasi KIP",
    scoreAverage: 84.0,
    status: "Menunggu Verifikasi",
    registrationDate: "2026-02-14",
    phone: "085877889900"
  },
  {
    id: "PPDB-2026-004",
    name: "Nabila Aulia",
    nisn: "0095544332",
    originSchool: "SMP Negeri 2 Malang",
    chosenMajor: "Manajemen Perkantoran & Layanan Bisnis (MPLB / OTKP)",
    track: "Zonasi Wilayah",
    scoreAverage: 87.5,
    status: "Lulus Seleksi",
    registrationDate: "2026-02-15",
    phone: "087712345678"
  }
];

export const initialStaff = [
  {
    id: "PTK-001",
    nip: "-",
    nuptk: "3456789012345678",
    name: "Drs. Anang Kuswanto",
    role: "Kepala Sekolah",
    category: "Pimpinan",
    golongan: "Yayasan",
    status: "GTY",
    certified: true,
    teachingHours: 6,
    attendanceRate: 99,
    salary: "Rp 6.850.000",
    joinDate: "1998-07-01",
    phone: "081234567891"
  },
  {
    id: "PTK-002",
    nip: "-",
    nuptk: "7890123456789012",
    name: "Rizal Umaruddin Haqiqi, S.Pd.",
    role: "Waka Kurikulum / Guru Bahasa Inggris",
    category: "Pendidik",
    golongan: "Yayasan",
    status: "GTY",
    certified: true,
    teachingHours: 24,
    attendanceRate: 98,
    salary: "Rp 5.200.000",
    joinDate: "2015-08-01",
    phone: "0895356781388"
  },
  {
    id: "PTK-003",
    nip: "-",
    nuptk: "9012345678901234",
    name: "Dra. Rini Utami",
    role: "Waka Kesiswaan",
    category: "Pendidik",
    golongan: "Yayasan",
    status: "GTY",
    certified: true,
    teachingHours: 22,
    attendanceRate: 97,
    salary: "Rp 5.100.000",
    joinDate: "2005-01-01",
    phone: "081377889901"
  },
  {
    id: "PTK-004",
    nip: "-",
    nuptk: "1234567890123456",
    name: "Dian Anggraeni, S.Pd.",
    role: "Waka Sarana Prasarana",
    category: "Pendidik",
    golongan: "Yayasan",
    status: "GTY",
    certified: true,
    teachingHours: 24,
    attendanceRate: 98,
    salary: "Rp 4.950.000",
    joinDate: "2012-07-01",
    phone: "081299887761"
  },
  {
    id: "PTK-005",
    nip: "-",
    nuptk: "5678901234567890",
    name: "Siti Chusnul Chotimah, S.Pd.",
    role: "Kaprogli OTKP (Manajemen Perkantoran)",
    category: "Pendidik",
    golongan: "Yayasan",
    status: "GTY",
    certified: true,
    teachingHours: 26,
    attendanceRate: 96,
    salary: "Rp 4.800.000",
    joinDate: "2014-07-01",
    phone: "085611223341"
  },
  {
    id: "PTK-006",
    nip: "-",
    nuptk: "6789012345678901",
    name: "Dra. Kartiani",
    role: "Kaprogli BDP (Bisnis Daring & Pemasaran)",
    category: "Pendidik",
    golongan: "Yayasan",
    status: "GTY",
    certified: true,
    teachingHours: 26,
    attendanceRate: 97,
    salary: "Rp 4.900.000",
    joinDate: "2008-07-01",
    phone: "081233445571"
  },
  {
    id: "PTK-007",
    nip: "-",
    nuptk: "7890123456789013",
    name: "Moh. Iqbal Firdiyansah, SE",
    role: "Guru Akuntansi (AKL)",
    category: "Pendidik",
    golongan: "Yayasan",
    status: "GTY",
    certified: true,
    teachingHours: 24,
    attendanceRate: 98,
    salary: "Rp 4.500.000",
    joinDate: "2018-07-01",
    phone: "081233445582"
  },
  {
    id: "PTK-008",
    nip: "-",
    nuptk: "8901234567890124",
    name: "Milatush Shobihah, S.Pd.",
    role: "Guru Akuntansi (AKL)",
    category: "Pendidik",
    golongan: "Yayasan",
    status: "GTY",
    certified: true,
    teachingHours: 22,
    attendanceRate: 96,
    salary: "Rp 4.400.000",
    joinDate: "2019-07-01",
    phone: "081344556683"
  },
  {
    id: "PTK-009",
    nip: "-",
    nuptk: "9012345678901235",
    name: "Ardiyono, S.E., M.M.",
    role: "Guru Produktif Bisnis Digital & Kewirausahaan",
    category: "Pendidik",
    golongan: "Yayasan",
    status: "GTY",
    certified: true,
    teachingHours: 24,
    attendanceRate: 99,
    salary: "Rp 4.850.000",
    joinDate: "2016-07-01",
    phone: "081255667784"
  },
  {
    id: "PTK-010",
    nip: "-",
    nuptk: "0123456789012346",
    name: "Tathaka Wisada Putra T., S.Ag.",
    role: "Guru Pendidikan Agama Islam",
    category: "Pendidik",
    golongan: "Yayasan",
    status: "GTY",
    certified: true,
    teachingHours: 20,
    attendanceRate: 97,
    salary: "Rp 4.300.000",
    joinDate: "2017-07-01",
    phone: "085788990015"
  },
  {
    id: "PTK-011",
    nip: "-",
    nuptk: "1234567890123457",
    name: "Prawoto Edy Suwarno, Spd.",
    role: "Guru Penjas Orkes",
    category: "Pendidik",
    golongan: "Yayasan",
    status: "GTY",
    certified: true,
    teachingHours: 20,
    attendanceRate: 98,
    salary: "Rp 4.400.000",
    joinDate: "2011-07-01",
    phone: "081399887716"
  },
  {
    id: "PTK-012",
    nip: "-",
    nuptk: "2345678901234568",
    name: "Drs. Amir Hamzah, S.E., M.Pd.",
    role: "Guru Bahasa Indonesia",
    category: "Pendidik",
    golongan: "Yayasan",
    status: "GTY",
    certified: true,
    teachingHours: 22,
    attendanceRate: 96,
    salary: "Rp 4.700.000",
    joinDate: "2009-07-01",
    phone: "081288776617"
  },
  {
    id: "PTK-013",
    nip: "-",
    nuptk: "3456789012345679",
    name: "Riduan, S.Pd.",
    role: "Guru Bahasa Indonesia",
    category: "Pendidik",
    golongan: "Yayasan",
    status: "GTY",
    certified: true,
    teachingHours: 20,
    attendanceRate: 95,
    salary: "Rp 4.200.000",
    joinDate: "2020-07-01",
    phone: "085677889918"
  },
  {
    id: "PTK-014",
    nip: "-",
    nuptk: "4567890123456780",
    name: "Wahyu Lestari, S.Pd.",
    role: "Guru Matematika",
    category: "Pendidik",
    golongan: "Yayasan",
    status: "GTY",
    certified: true,
    teachingHours: 24,
    attendanceRate: 99,
    salary: "Rp 4.600.000",
    joinDate: "2013-07-01",
    phone: "081366778819"
  },
  {
    id: "PTK-015",
    nip: "-",
    nuptk: "5678901234567891",
    name: "Dra. Winarni",
    role: "Guru Bahasa Inggris / Wali Kelas X AKL",
    category: "Pendidik",
    golongan: "Yayasan",
    status: "GTY",
    certified: true,
    teachingHours: 24,
    attendanceRate: 97,
    salary: "Rp 4.900.000",
    joinDate: "2007-07-01",
    phone: "081244556620"
  },
  {
    id: "PTK-016",
    nip: "-",
    nuptk: "6789012345678902",
    name: "Djoedi Widodo, S.E.",
    role: "Guru Produktif / Wali Kelas X OTKP",
    category: "Pendidik",
    golongan: "Yayasan",
    status: "GTY",
    certified: true,
    teachingHours: 22,
    attendanceRate: 96,
    salary: "Rp 4.650.000",
    joinDate: "2012-07-01",
    phone: "081355667721"
  },
  {
    id: "PTK-017",
    nip: "-",
    nuptk: "7890123456789014",
    name: "Dra. Asnik Suliati",
    role: "Guru Ilmu Pengetahuan Alam (IPA)",
    category: "Pendidik",
    golongan: "Yayasan",
    status: "GTY",
    certified: true,
    teachingHours: 20,
    attendanceRate: 98,
    salary: "Rp 4.800.000",
    joinDate: "2006-07-01",
    phone: "081277889922"
  },
  {
    id: "PTK-018",
    nip: "-",
    nuptk: "8901234567890125",
    name: "Dra. Sunarmiati",
    role: "Guru Pendidikan Kewarganegaraan (PKn)",
    category: "Pendidik",
    golongan: "Yayasan",
    status: "GTY",
    certified: true,
    teachingHours: 20,
    attendanceRate: 97,
    salary: "Rp 4.850.000",
    joinDate: "2008-07-01",
    phone: "081388990023"
  },
  {
    id: "PTK-019",
    nip: "-",
    nuptk: "9012345678901236",
    name: "Tri Utomo",
    role: "Kepala Tata Usaha",
    category: "Tenaga Kependidikan",
    golongan: "Yayasan",
    status: "PTY",
    certified: false,
    teachingHours: 0,
    attendanceRate: 100,
    salary: "Rp 4.500.000",
    joinDate: "2010-07-01",
    phone: "082131076852"
  },
  {
    id: "PTK-020",
    nip: "-",
    nuptk: "0123456789012347",
    name: "Muslimah, S.E.",
    role: "Staf Tata Usaha",
    category: "Tenaga Kependidikan",
    golongan: "Yayasan",
    status: "PTY",
    certified: false,
    teachingHours: 0,
    attendanceRate: 99,
    salary: "Rp 3.800.000",
    joinDate: "2016-07-01",
    phone: "085799001124"
  },
  {
    id: "PTK-021",
    nip: "-",
    nuptk: "1234567890123458",
    name: "Siti Ngaisah",
    role: "Pengelola Koperasi Sekolah",
    category: "Tenaga Kependidikan",
    golongan: "Yayasan",
    status: "PTY",
    certified: false,
    teachingHours: 0,
    attendanceRate: 98,
    salary: "Rp 3.500.000",
    joinDate: "2015-07-01",
    phone: "081299001125"
  },
  {
    id: "PTK-022",
    nip: "-",
    nuptk: "2345678901234569",
    name: "Samsul Abari",
    role: "Keamanan dan Penjaga Sekolah",
    category: "Tenaga Kependidikan",
    golongan: "Yayasan",
    status: "PTY",
    certified: false,
    teachingHours: 0,
    attendanceRate: 100,
    salary: "Rp 3.200.000",
    joinDate: "2014-07-01",
    phone: "081399001126"
  },
  {
    id: "PTK-023",
    nip: "-",
    nuptk: "3456789012345670",
    name: "Joko Priyono",
    role: "Kebersihan Taman dan Sekolah",
    category: "Tenaga Kependidikan",
    golongan: "Yayasan",
    status: "PTY",
    certified: false,
    teachingHours: 0,
    attendanceRate: 98,
    salary: "Rp 3.000.000",
    joinDate: "2018-07-01",
    phone: "085899001127"
  },
  {
    id: "PTK-024",
    nip: "-",
    nuptk: "4567890123456781",
    name: "Mulyo Santoso",
    role: "Teknisi Sarana & Prasarana",
    category: "Tenaga Kependidikan",
    golongan: "Yayasan",
    status: "PTY",
    certified: false,
    teachingHours: 0,
    attendanceRate: 99,
    salary: "Rp 3.400.000",
    joinDate: "2017-07-01",
    phone: "081288990028"
  }
];

export const initialSuratMasuk = [
  {
    id: "SM-2026-041",
    agendaNo: "041/SM/II/2026",
    letterNo: "421.5/1280-Disdik/Dikmen/2026",
    sender: "Cabang Dinas Pendidikan Wilayah Kota Malang & Kota Batu (Jawa Timur)",
    letterDate: "2026-02-08",
    receivedDate: "2026-02-10",
    subject: "Undangan Rakor Pelaksanaan Uji Kompetensi Keahlian (UKK) SMK Tahun 2026",
    urgency: "Sangat Segera",
    status: "Sudah Didisposisi",
    dispositionTarget: "Waka Kurikulum & Kaprogli OTKP/BDP/AKL",
    dispositionNote: "Harap dihadiri tepat waktu, siapkan instrumen verifikasi LSP & penguji industri KAN Jabung.",
    dispositionedBy: "Drs. Anang Kuswanto (Kepala Sekolah)"
  },
  {
    id: "SM-2026-042",
    agendaNo: "042/SM/II/2026",
    letterNo: "092/DIR-JR/EXT/XII/2024",
    sender: "PT. Jaring Abadi Retailindo / Koperasi Agro Niaga (KAN) Jabung",
    letterDate: "2024-12-02",
    receivedDate: "2024-12-04",
    subject: "Konfirmasi Peresmian Grand Opening Toko Simulator Ardjuna Mart & Penempatan Magang Siswa",
    urgency: "Penting",
    status: "Sudah Didisposisi",
    dispositionTarget: "Waka Kurikulum & Kaprogli BDP",
    dispositionNote: "Alhamdulillah siap diresmikan Jumat 6 Des 2024 bersama Ibu Latifa & Bapak Ketua Yayasan.",
    dispositionedBy: "Drs. Anang Kuswanto (Kepala Sekolah)"
  },
  {
    id: "SM-2026-043",
    agendaNo: "043/SM/II/2026",
    letterNo: "440/012-Pusk/Blimbing/2026",
    sender: "UPTD Puskesmas Arjosari / Blimbing Kota Malang",
    letterDate: "2026-02-14",
    receivedDate: "2026-02-15",
    subject: "Pemberitahuan Skrining Kesehatan Berkala & Penyuluhan Trias UKS Remaja Sehat",
    urgency: "Biasa",
    status: "Menunggu Disposisi",
    dispositionTarget: "Pembina UKS & Waka Kesiswaan",
    dispositionNote: "Jadwalkan pemeriksaan siswa kelas X di ruang UKS sekolah.",
    dispositionedBy: "Drs. Anang Kuswanto (Kepala Sekolah)"
  }
];

export const initialSuratKeluar = [
  {
    id: "SK-2026-088",
    letterNo: "421.5/088/SMK-TU/II/2026",
    type: "Surat Tugas",
    date: "2026-02-12",
    recipient: "Eko Prasetyo, S.T., M.Kom & Rian Hidayat, S.Kom",
    subject: "Surat Tugas Monitoring dan Penyerahan Siswa PKL di PT Telkom Bandung",
    signer: "Drs. H. Bambang Sudarsono, M.Pd",
    status: "Selesai Ditandatangani"
  },
  {
    id: "SK-2026-089",
    letterNo: "421.5/089/SMK-TU/II/2026",
    type: "Surat Keterangan Siswa",
    date: "2026-02-13",
    recipient: "Muhammad Rizky Pratama (Siswa XII PPLG 1)",
    subject: "Surat Keterangan Aktif Belajar untuk Keperluan Beasiswa Kemendikbud",
    signer: "Ahmad Fauzi, S.AP, M.M. (a.n. Kepala Sekolah)",
    status: "Selesai Ditandatangani"
  },
  {
    id: "SK-2026-090",
    letterNo: "421.5/090/SMK-TU/II/2026",
    type: "Surat Panggilan Orang Tua",
    date: "2026-02-15",
    recipient: "Orang Tua / Wali Siswa Fajar Dwi Saputra (XI TKRO 2)",
    subject: "Panggilan Menghadap Guru BK dan Wali Kelas Terkait Akumulasi Presensi",
    signer: "Hendra Wijaya, S.Pd (Waka Kesiswaan)",
    status: "Siap Dikirim"
  }
];

export const initialGuestBook = [
  {
    id: "GB-001",
    date: "2026-02-15",
    time: "09:15",
    name: "Dr. Irwan Setiawan",
    institution: "Balai Besar Penjaminan Mutu Vokasi (BBPPMPV)",
    purpose: "Supervisi Kesiapan Uji Sertifikasi Kompetensi (UKK)",
    meetingWith: "Kepala Sekolah & KTU",
    phone: "08122001122"
  },
  {
    id: "GB-002",
    date: "2026-02-15",
    time: "10:30",
    name: "Dedy Suryadi, S.T.",
    institution: "PT Astra Honda Motor Tbk",
    purpose: "Evaluasi Kurikulum Binaan Kelas Industri & Donasi Engine Stand",
    meetingWith: "Waka Hubin & Kaprog TKRO",
    phone: "081388992211"
  }
];

export const initialFinancialBos = [
  {
    id: "BOS-001",
    date: "2026-01-15",
    type: "Penerimaan",
    code: "BOS-IN-01",
    description: "Penerimaan Dana BOS Reguler Tahap I Tahun Anggaran 2026 (780 Siswa x Satuan Biaya)",
    amount: 624000000,
    standard: "Standar Pembiayaan",
    balance: 624000000
  },
  {
    id: "BOS-002",
    date: "2026-01-22",
    type: "Pengeluaran",
    code: "BOS-OUT-01",
    description: "Belanja ATK dan Kertas Formulir Ujian untuk Administrasi Tata Usaha & KBM",
    amount: 14500000,
    standard: "Standar Pengelolaan",
    balance: 609500000
  },
  {
    id: "BOS-003",
    date: "2026-02-05",
    type: "Pengeluaran",
    code: "BOS-OUT-02",
    description: "Langganan Internet Fiber Optic Dedicated 200 Mbps untuk Lab RPL & TU Sekolah",
    amount: 7200000,
    standard: "Standar Sarana & Prasarana",
    balance: 602300000
  },
  {
    id: "BOS-004",
    date: "2026-02-10",
    type: "Pengeluaran",
    code: "BOS-OUT-03",
    description: "Pengadaan Bahan Praktik Kejuruan Siswa PPLG (Server Storage & SSD Nvme)",
    amount: 28500000,
    standard: "Standar Sarana & Prasarana",
    balance: 573800000
  }
];

export const initialSppPayments = [
  { id: "SPP-01", studentName: "Muhammad Rizky Pratama", class: "XII PPLG 1", month: "Februari 2026", amount: 150000, date: "2026-02-05", receiptNo: "KW-2602-001", status: "Lunas" },
  { id: "SPP-02", studentName: "Anisa Nur Safitri", class: "XII PPLG 1", month: "Februari 2026", amount: 150000, date: "2026-02-06", receiptNo: "KW-2602-002", status: "Lunas" },
  { id: "SPP-03", studentName: "Dimas Aditya Pratama", class: "XI TJKT 1", month: "Februari 2026", amount: 150000, date: "2026-02-09", receiptNo: "KW-2602-003", status: "Lunas" },
  { id: "SPP-04", studentName: "Fajar Dwi Saputra", class: "XI TKRO 2", month: "Februari 2026", amount: 150000, date: "-", receiptNo: "-", status: "Belum Bayar" }
];

export const initialSarpras = [
  {
    id: "AST-001",
    code: "LAB-RPL-PC01",
    name: "PC Workstation Lab RPL (Core i7, RAM 32GB, SSD 1TB)",
    room: "Lab Komputer Rekayasa Perangkat Lunak 1",
    category: "Peralatan TIK",
    condition: "Baik",
    qty: 36,
    year: 2024,
    source: "Dana DAK Fisik Vokasi"
  },
  {
    id: "AST-002",
    code: "TKRO-ENG-03",
    name: "Engine Stand EFI Toyota Avanza 1NR-VE",
    room: "Bengkel Otomotif TKRO Blok B",
    category: "Alat Praktik Kejuruan",
    condition: "Baik",
    qty: 4,
    year: 2023,
    source: "BOS Kinerja Vokasi"
  },
  {
    id: "AST-003",
    code: "NET-CISCO-09",
    name: "Manageable Switch Cisco Catalyst 24 Port Gigabit",
    room: "Lab Jaringan Komputer TJKT",
    category: "Peralatan TIK",
    condition: "Rusak Ringan",
    qty: 6,
    year: 2022,
    source: "BOS Reguler"
  },
  {
    id: "AST-004",
    code: "PRJ-EPSON-02",
    name: "Proyektor Epson LCD 3600 Lumens",
    room: "Ruang Rapat & Aula Utama",
    category: "Elektronik",
    condition: "Baik",
    qty: 8,
    year: 2024,
    source: "Komite Sekolah"
  }
];

export const initialLibraryBooks = [
  {
    id: "BK-001",
    isbn: "978-623-01-2091-6",
    title: "Pemrograman Web Modern dengan React, Next.js dan Node.js",
    author: "Budi Santoso, S.Kom, M.T.",
    publisher: "Andi Publisher",
    category: "Informatika / PPLG",
    totalStock: 30,
    availableStock: 24,
    shelf: "Rak 03-A"
  },
  {
    id: "BK-002",
    isbn: "978-602-444-118-2",
    title: "Teknik Pemeliharaan Kelistrikan Kendaraan Ringan Otomotif",
    author: "Drs. H. Mulyono",
    publisher: "Erlangga Vokasi",
    category: "Otomotif / TKRO",
    totalStock: 25,
    availableStock: 18,
    shelf: "Rak 05-B"
  },
  {
    id: "BK-003",
    isbn: "978-602-06-3392-1",
    title: "Administrasi Infrastruktur Jaringan & Cloud Computing",
    author: "Iwan Sofyan",
    publisher: "Informatika Bandung",
    category: "Jaringan / TJKT",
    totalStock: 20,
    availableStock: 15,
    shelf: "Rak 03-C"
  }
];

export const initialPklPartners = [
  {
    id: "DUDI-001",
    name: "PT Telkom Indonesia (Witel Bandung)",
    sector: "Telekomunikasi & IT Enterprise",
    address: "Jl. Lembong No. 11, Bandung",
    mouNumber: "019/MoU-SMK/TELKOM/2024",
    mouStatus: "Aktif s.d 2027",
    quota: 12,
    placedStudents: 10,
    mentorIndustry: "Raden Arya, S.T. (Senior Software Engineer)"
  },
  {
    id: "DUDI-002",
    name: "PT Astra International Tbk - Auto 2000 Pasteur",
    sector: "Otomotif & Servis Kendaraan",
    address: "Jl. Dr. Djunjunan No. 192, Bandung",
    mouNumber: "042/MoU-SMK/AUTO2000/2023",
    mouStatus: "Aktif s.d 2026",
    quota: 10,
    placedStudents: 8,
    mentorIndustry: "Wahyudi, S.T. (Kepala Bengkel)"
  },
  {
    id: "DUDI-003",
    name: "Studio Grafis & Multimedia Piksel Kreatif",
    sector: "Kreatif & Desain Komunikasi Visual",
    address: "Kawasan Dago Kreatif No. 4B",
    mouNumber: "008/MoU-SMK/PIKSEL/2025",
    mouStatus: "Aktif s.d 2028",
    quota: 6,
    placedStudents: 5,
    mentorIndustry: "Chandra Wibawa (Art Director)"
  }
];

export const initialPklPlacements = [
  {
    id: "PKL-2026-01",
    studentName: "Muhammad Rizky Pratama",
    nis: "23241001",
    class: "XII PPLG 1",
    company: "PT Telkom Indonesia (Witel Bandung)",
    schoolMentor: "Eko Prasetyo, S.T., M.Kom",
    industryMentor: "Raden Arya, S.T.",
    status: "Sedang Berlangsung",
    score: 92,
    journalCount: 38
  },
  {
    id: "PKL-2026-02",
    studentName: "Anisa Nur Safitri",
    nis: "23241002",
    class: "XII PPLG 1",
    company: "PT Telkom Indonesia (Witel Bandung)",
    schoolMentor: "Eko Prasetyo, S.T., M.Kom",
    industryMentor: "Raden Arya, S.T.",
    status: "Sedang Berlangsung",
    score: 95,
    journalCount: 42
  },
  {
    id: "PKL-2026-03",
    studentName: "Fajar Dwi Saputra",
    nis: "23242015",
    class: "XI TKRO 2",
    company: "PT Astra International Tbk - Auto 2000",
    schoolMentor: "Ir. Gunawan Wibisono",
    industryMentor: "Wahyudi, S.T.",
    status: "Sedang Berlangsung",
    score: 84,
    journalCount: 29
  }
];

export const initialBkCases = [
  {
    id: "BK-2026-001",
    studentName: "Fajar Dwi Saputra",
    class: "XI TKRO 2",
    category: "Disiplin & Presensi",
    problem: "Terlambat hadir 4 kali berturut-turut pada jam ke-1 dan tidak mengikuti apel pagi.",
    action: "Konseling individu tahap 1, pembuatan surat perjanjian tata tertib, dan jadwal home visit.",
    counselor: "Hendra Wijaya, S.Pd",
    date: "2026-02-12",
    status: "Pemantauan"
  },
  {
    id: "BK-2026-002",
    studentName: "Dimas Aditya Pratama",
    class: "XI TJKT 1",
    category: "Konseling Karier & Lanjut Studi",
    problem: "Konsultasi persiapan beasiswa perguruan tinggi vokasi (Politeknik Negeri Bandung) dan uji sertifikasi Cisco.",
    action: "Pemetaan portofolio sertifikat, pendampingan berkas rekomendasi Kepala Sekolah.",
    counselor: "Hendra Wijaya, S.Pd",
    date: "2026-02-14",
    status: "Selesai"
  }
];

export const initialAuditLogs = [
  { id: "LOG-101", timestamp: "2026-02-15 11:20:14", user: "Ahmad Fauzi, S.AP (KTU)", action: "Registrasi Surat Masuk", detail: "Mendaftarkan surat undangan UKK Disdik No. 421.3/1280" },
  { id: "LOG-102", timestamp: "2026-02-15 10:45:00", user: "Drs. H. Bambang Sudarsono (Kepsek)", action: "Disposisi Surat Masuk", detail: "Memberikan disposisi surat UKK ke Waka Kurikulum" },
  { id: "LOG-103", timestamp: "2026-02-15 09:30:12", user: "Nur Laila Fitri, S.E. (Bendahara)", action: "Pencatatan SPP Siswa", detail: "Menerbitkan Kwitansi SPP No. KW-2602-003 siswa Dimas Aditya" },
  { id: "LOG-104", timestamp: "2026-02-15 08:15:30", user: "Eko Prasetyo, S.T. (Waka Hubin)", action: "Verifikasi Jurnal PKL", detail: "Menyetujui 5 jurnal kegiatan PKL siswa di PT Telkom" }
];
