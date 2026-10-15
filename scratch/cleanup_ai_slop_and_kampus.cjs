const fs = require('fs');

const targetFile = 'c:/Users/USER/OneDrive/Dokumen/web projek/SIMPEL/src/components/modules/Modul10WebsitePortal.jsx';
let content = fs.readFileSync(targetFile, 'utf8');

// 1. REPLACE ALL INSTANCES OF "KAMPUS" / "kampus" WITH "SEKOLAH" / "sekolah" (except external partner Universitas Negeri Malang if applicable)
content = content.replace(/di kampus sebelum wisuda/g, 'di sekolah sebelum kelulusan');
content = content.replace(/Ruang Panitia PPDB Kampus Arjosari/g, 'Ruang Panitia PPDB SMK Ardjuna 2');
content = content.replace(/Di mana lokasi kampus dan bagaimana/g, 'Di mana lokasi sekolah dan bagaimana');
content = content.replace(/Kampus SMK Ardjuna 2 berlokasi sangat strategis/g, 'Gedung SMK Ardjuna 2 berlokasi sangat strategis');
content = content.replace(/area kampus Arjosari/g, 'lingkungan sekolah Arjosari');
content = content.replace(/aula pertemuan kampus Ardjuna Blimbing/g, 'aula pertemuan sekolah Ardjuna Blimbing');
content = content.replace(/Kompleks kampus luas, asri/g, 'Lingkungan sekolah luas, asri');
content = content.replace(/\/\* ─── Fasilitas Kampus/g, '/* ─── Fasilitas Sekolah');
content = content.replace(/Fasilitas Kampus Lengkap/g, 'Fasilitas Sekolah Lengkap');
content = content.replace(/PETA LOKASI GOOGLE MAPS & PANDUAN AKSES KAMPUS ARJOSARI/g, 'PETA LOKASI GOOGLE MAPS & PANDUAN AKSES SEKOLAH ARJOSARI');
content = content.replace(/Aksesibilitas & Peta Kampus/g, 'Aksesibilitas & Lokasi Sekolah');
content = content.replace(/Kunjungi Kampus SMK Ardjuna 2/g, 'Kunjungi SMK Ardjuna 2 Malang');
content = content.replace(/<strong>Alamat Kampus:<\/strong>/g, '<strong>Alamat Sekolah:</strong>');
content = content.replace(/Peta & Lokasi Kampus/g, 'Peta & Lokasi Sekolah');
content = content.replace(/alt="Kampus SMK Ardjuna 2 Malang"/g, 'alt="Gedung SMK Ardjuna 2 Malang"');
content = content.replace(/Kampus Arjosari/g, 'SMK Ardjuna 2 Arjosari');
content = content.replace(/Detail Lokasi & Kontak Resmi/g, 'Detail Lokasi Sekolah & Kontak Resmi');

// 2. REMOVE AI-SLOP TECHNO HUD OVERLAYS FROM HERO
// In JSX:
const oldHeroJsx = `      {/* ── HERO BANNER: DARK CINEMATIC AMBIENT DENGAN INTERACTIVE TECHNO FX ── */}
      <header 
        className="p2-hero"
        onMouseMove={(e) => {
          const rect = e.currentTarget.getBoundingClientRect();
          const x = e.clientX - rect.left;
          const y = e.clientY - rect.top;
          e.currentTarget.style.setProperty('--mx', \`\${x}px\`);
          e.currentTarget.style.setProperty('--my', \`\${y}px\`);
          e.currentTarget.style.setProperty('--has-mouse', '1');
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.setProperty('--has-mouse', '0');
        }}
      >
        <div className="p2-hero-bg">
          <img src="/school-hero.jpg" alt="Gedung SMK Ardjuna 2 Malang" />
        </div>
        <div className="p2-hero-gradient" />
        <div className="p2-hero-noise" />

        {/* ─── TECHNO HUD INTERACTIVE LAYERS ─── */}
        <div className="p2-hero-techno-grid" />
        <div className="p2-hero-techno-spotlight" />

        <div className="p2-hero-content">`;

const newHeroJsx = `      {/* ── HERO BANNER: DIGNIFIED, CLEAN, WELCOMING PUBLIC SCHOOL HERO ── */}
      <header className="p2-hero">
        <div className="p2-hero-bg">
          <img src="/school-hero.jpg" alt="Gedung SMK Ardjuna 2 Malang" />
        </div>
        <div className="p2-hero-gradient" />

        <div className="p2-hero-content">`;

if (content.includes('p2-hero-techno-grid')) {
  content = content.replace(oldHeroJsx, newHeroJsx);
}

// In CSS: Remove techno grid and spotlight rules
content = content.replace(
  /\/\* ─── Techno Interactive Cyber Grid & Spotlight Following Cursor ─── \*\/[\s\S]*?mix-blend-mode: screen;\s*}/,
  `/* ─── Clean Dignified Hero Ambient ─── */`
);

// 3. REMOVE NEON GLOW FROM HERO BADGE HOVER
const oldHeroBadgeHover = `.p2-hero-badge:hover {
      background: rgba(6, 182, 212, 0.18);
      border-color: #38bdf8;
      color: #38bdf8;
      box-shadow: 0 0 25px rgba(56, 189, 248, 0.45), inset 0 0 15px rgba(56, 189, 248, 0.2);
      transform: translateY(-2px) scale(1.03);
      letter-spacing: 0.09em;
    }`;

const newHeroBadgeHover = `.p2-hero-badge:hover {
      background: rgba(99, 102, 241, 0.18);
      border-color: #818cf8;
      color: #a5b4fc;
      transform: translateY(-1px);
    }`;

content = content.replace(oldHeroBadgeHover, newHeroBadgeHover);

// 4. CLEAN UP COVERFLOW BADGE (Remove "PERSPEKTIF 3D" and monospace font)
content = content.replace(
  'WARTA & DOKUMENTASI PERSPEKTIF 3D',
  'WARTA & KEGIATAN SEKOLAH'
);

content = content.replace(
  `    .p2-eyewear-label {
      font-size: 0.74rem;
      font-weight: 700;
      letter-spacing: 0.1em;
      text-transform: uppercase;
      font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, monospace;
      transition: color 0.4s ease;
    }`,
  `    .p2-eyewear-label {
      font-size: 0.8rem;
      font-weight: 700;
      letter-spacing: 0.06em;
      text-transform: uppercase;
      font-family: inherit;
      transition: color 0.4s ease;
    }`
);

content = content.replace(
  'Jelajahi agenda sekolah, teaching factory, dan dokumentasi kesiswaan dalam panggung interaktif 3D coverflow.',
  'Jelajahi warta kegiatan terkini, kemitraan industri, dan dokumentasi prestasi siswa SMK Ardjuna 2 Malang.'
);

// In JSX: Replace Glasses with Newspaper in coverflow badge if desired, or keep as clean emblem
content = content.replace(
  '<Glasses size={17} style={{ color: activeHue.hue }} />',
  '<Newspaper size={17} style={{ color: activeHue.hue }} />'
);

// 5. CLEAN UP FLOATING WHATSAPP BUTTON (Remove sci-fi pulse radar ring)
content = content.replace(
  `<span className="p2-wa-pulse-ring" />\n        <span className="p2-wa-tooltip">Tanya PPDB Online</span>`,
  `<span className="p2-wa-tooltip">Tanya PPDB Online</span>`
);

content = content.replace(
  /\.p2-wa-pulse-ring\s*\{[\s\S]*?@keyframes p2-wa-pulse\s*\{[\s\S]*?}/,
  `/* Clean WhatsApp Float */`
);

// 6. CLEAN UP MITRA CARD (Remove neon top line and over-glow)
content = content.replace(
  `    .p2-mitra-card::before {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      height: 3px;
      background: var(--mitra-accent, #4f46e5);
    }`,
  `    .p2-mitra-card::before {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      height: 2px;
      background: var(--mitra-accent, #4f46e5);
    }`
);

// Clean up subtle shadows across cards
content = content.replace(
  'box-shadow: 0 18px 36px -6px rgba(15, 23, 42, 0.1);',
  'box-shadow: 0 10px 25px -4px rgba(15, 23, 42, 0.06);'
);

fs.writeFileSync(targetFile, content, 'utf8');
console.log('Successfully cleaned up "kampus" and removed AI slop elements!');
