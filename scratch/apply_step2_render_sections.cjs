const fs = require('fs');

const targetFile = 'c:/Users/USER/OneDrive/Dokumen/web projek/SIMPEL/src/components/modules/Modul10WebsitePortal.jsx';
let content = fs.readFileSync(targetFile, 'utf8');

// 1. SECTION SAMBUTAN KEPALA SEKOLAH (after stats bar)
const sambutanSectionJsx = `
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
                  className={\`p2-kasek-tab-btn \${activeKasekTab === 'sambutan' ? 'active' : ''}\`}
                  onClick={() => setActiveKasekTab('sambutan')}
                >
                  Sambutan Resmi
                </button>
                <button
                  className={\`p2-kasek-tab-btn \${activeKasekTab === 'visimisi' ? 'active' : ''}\`}
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
                  <div className="p2-kasek-motto-strip">
                    <Sparkles size={16} />
                    <span>Motto: <strong>{principalMessage.motto}</strong></span>
                  </div>
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
`;

// Inject Sambutan right after Bento Stats Bar
if (!content.includes('id="sambutan"')) {
  const statsTarget = `{/* ── 1. PROGRAMS KEAHLIAN (LIGHT THEME - BG PUTIH BERSIH) ── */}`;
  content = content.replace(statsTarget, sambutanSectionJsx + '\n\n      ' + statsTarget);
}

// 2. SECTION KEMITRAAN INDUSTRI & DUDI (after multi-skills)
const mitraSectionJsx = `
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
`;

// Inject Mitra Section after Multi-Skills
if (!content.includes('id="mitra"')) {
  const fasilitasTarget = `{/* ── 3. FASILITAS KAMPUS (LIGHT THEME - BG PUTIH BERSIH) ── */}`;
  content = content.replace(fasilitasTarget, mitraSectionJsx + '\n\n      ' + fasilitasTarget);
}

// 3. SECTION EKSTRAKURIKULER (after prestasi)
const ekskulSectionJsx = `
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
                  <div className="p2-ekskul-icon-wrap" style={{ background: \`\${ek.color}15\`, color: ek.color }}>
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
`;

if (!content.includes('id="ekskul"')) {
  const coverflowTarget = `{/* ── 5. BERITA & KEGIATAN (IMMERSIVE 3D COVERFLOW EYEWEAR SLIDER ON DARK STAGE) ── */}`;
  content = content.replace(coverflowTarget, ekskulSectionJsx + '\n\n      ' + coverflowTarget);
}

// 4. SECTION FAQ INTERAKTIF (after coverflow news slider)
const faqSectionJsx = `
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
                <div className={\`p2-faq-item \${isOpen ? 'active' : ''}\`} key={fi}>
                  <button 
                    className="p2-faq-question"
                    onClick={() => setOpenFaqId(isOpen ? null : fi)}
                  >
                    <span>{faq.q}</span>
                    <ChevronDown size={20} className={\`p2-faq-chevron \${isOpen ? 'rotated' : ''}\`} />
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
`;

if (!content.includes('id="faq"')) {
  const ctaTarget = `{/* ── 6. CALL TO ACTION BANNER (HIGH CONTRAST PRESTIGE CARD) ── */}`;
  content = content.replace(ctaTarget, faqSectionJsx + '\n\n      ' + ctaTarget);
}

// 5. SECTION PETA LOKASI GOOGLE MAPS (after CTA Banner)
const lokasiSectionJsx = `
      {/* ── PETA LOKASI GOOGLE MAPS & PANDUAN AKSES KAMPUS ARJOSARI ── */}
      <div className="p2-strip-white">
        <section className="p2-section" id="lokasi">
          <div className="p2-section-header">
            <div className="p2-section-badge p2-badge-sky"><MapPin size={12} /> Aksesibilitas & Peta Kampus</div>
            <h2 className="p2-section-title">Kunjungi Kampus SMK Ardjuna 2<br />Kota Malang</h2>
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
              <h3>Detail Lokasi & Kontak Resmi</h3>

              <div className="p2-lokasi-point">
                <div className="p2-lokasi-point-icon"><MapPin size={16} /></div>
                <div>
                  <strong>Alamat Kampus:</strong><br />
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
`;

if (!content.includes('id="lokasi"')) {
  const footerTarget = `{/* ── FOOTER: PRESTIGE SLATE NAVY FOOTER ── */}`;
  content = content.replace(footerTarget, lokasiSectionJsx + '\n\n      ' + footerTarget);
}

// 6. FLOATING WHATSAPP BUTTON & CONSULTATION POPUP (before closing </div> in Home)
const waFloatingJsx = `
      {/* ── FLOATING WHATSAPP PPDB WIDGET ── */}
      <button 
        className="p2-wa-float-btn" 
        onClick={() => setShowWaPopup(true)}
        aria-label="Konsultasi WhatsApp PPDB"
        title="Tanya Panitia PPDB Online via WhatsApp"
      >
        <span className="p2-wa-pulse-ring" />
        <span className="p2-wa-tooltip">Tanya PPDB Online</span>
        <svg width="26" height="26" fill="currentColor" viewBox="0 0 24 24">
          <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/>
        </svg>
      </button>

      {/* WHATSAPP CONSULTATION POPUP */}
      {showWaPopup && (
        <div className="p2-wa-modal-overlay" onClick={() => setShowWaPopup(false)}>
          <div className="p2-wa-card" onClick={(e) => e.stopPropagation()}>
            <div className="p2-wa-card-header">
              <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
                <MessageSquare size={20} />
                <div>
                  <strong style={{ fontSize: '0.94rem', display: 'block' }}>Panitia PPDB Online</strong>
                  <span style={{ fontSize: '0.72rem', opacity: 0.9 }}>SMK Ardjuna 2 Malang</span>
                </div>
              </div>
              <button 
                onClick={() => setShowWaPopup(false)}
                style={{ background: 'none', border: 'none', color: '#ffffff', cursor: 'pointer', padding: 4 }}
              >
                <X size={18} />
              </button>
            </div>

            <div className="p2-wa-card-body">
              <p style={{ fontSize: '0.84rem', color: '#475569', marginBottom: 14 }}>
                Pilih topik pertanyaan Anda untuk memulai konsultasi langsung dengan tim panitia:
              </p>

              {[
                "Halo Admin PPDB SMK Ardjuna 2 Malang, saya ingin berkonsultasi mengenai persyaratan pendaftaran.",
                "Halo, saya ingin menanyakan informasi lengkap program 5 Multi-Skills (SIM A, Barista, dll) gratis.",
                "Halo, saya ingin bertanya tentang beasiswa dan program keringanan biaya pendidikan SPP.",
                "Halo, saya ingin konfirmasi jadwal tes dan wawancara PPDB."
              ].map((msg, mi) => (
                <button 
                  key={mi}
                  className={\`p2-wa-preset \${waSelectedMsg === msg ? 'active' : ''}\`}
                  onClick={() => setWaSelectedMsg(msg)}
                >
                  "{msg}"
                </button>
              ))}

              <a
                href={\`https://wa.me/6281234567890?text=\${encodeURIComponent(waSelectedMsg)}\`}
                target="_blank"
                rel="noreferrer"
                className="p2-wa-submit-btn"
                style={{ textDecoration: 'none' }}
              >
                <Send size={16} /> Mulai Chat di WhatsApp
              </a>
            </div>
          </div>
        </div>
      )}
`;

if (!content.includes('p2-wa-float-btn')) {
  const scrollTopTarget = `<button className={\`p2-scroll-top \${showScrollTop ? 'visible' : ''}\``;
  content = content.replace(scrollTopTarget, waFloatingJsx + '\n\n      ' + scrollTopTarget);
}

// 7. UPDATE NAVBAR LINKS & ADD MOBILE DRAWER
const oldNavbarLinks = `<div className="p2-nav-links">
          <button className={\`p2-nav-link \${activeView === 'home' ? 'active' : ''}\`} onClick={() => navigateTo('home')}>Beranda</button>
          <button className={\`p2-nav-link \${activeView === 'staff' ? 'active' : ''}\`} onClick={() => navigateTo('staff')}>Guru & Karyawan</button>
          <button className="p2-nav-link" onClick={() => { if (activeView !== 'home') navigateTo('home'); setTimeout(() => document.getElementById('programs')?.scrollIntoView({ behavior: 'smooth' }), 100); }}>Program</button>
          <button className="p2-nav-link" onClick={() => { if (activeView !== 'home') navigateTo('home'); setTimeout(() => document.getElementById('multi-skills')?.scrollIntoView({ behavior: 'smooth' }), 100); }}>5 Multi-Skills</button>
          <button className="p2-nav-link" onClick={() => { if (activeView !== 'home') navigateTo('home'); setTimeout(() => document.getElementById('fasilitas')?.scrollIntoView({ behavior: 'smooth' }), 100); }}>Fasilitas</button>
          <button className="p2-nav-link" onClick={() => { if (activeView !== 'home') navigateTo('home'); setTimeout(() => document.getElementById('prestasi')?.scrollIntoView({ behavior: 'smooth' }), 100); }}>Prestasi</button>
          <button className="p2-nav-link" onClick={() => { if (activeView !== 'home') navigateTo('home'); setTimeout(() => document.getElementById('berita')?.scrollIntoView({ behavior: 'smooth' }), 100); }}>Berita</button>
          <button className={\`p2-nav-link \${activeView === 'cek-status' ? 'active' : ''}\`} onClick={() => navigateTo('cek-status')}>Cek Status</button>
        </div>`;

const newNavbarLinks = `<div className="p2-nav-links">
          <button className={\`p2-nav-link \${activeView === 'home' ? 'active' : ''}\`} onClick={() => navigateTo('home')}>Beranda</button>
          <button className="p2-nav-link" onClick={() => { if (activeView !== 'home') navigateTo('home'); setTimeout(() => document.getElementById('sambutan')?.scrollIntoView({ behavior: 'smooth' }), 100); }}>Sambutan</button>
          <button className="p2-nav-link" onClick={() => { if (activeView !== 'home') navigateTo('home'); setTimeout(() => document.getElementById('programs')?.scrollIntoView({ behavior: 'smooth' }), 100); }}>Program</button>
          <button className="p2-nav-link" onClick={() => { if (activeView !== 'home') navigateTo('home'); setTimeout(() => document.getElementById('multi-skills')?.scrollIntoView({ behavior: 'smooth' }), 100); }}>5 Multi-Skills</button>
          <button className="p2-nav-link" onClick={() => { if (activeView !== 'home') navigateTo('home'); setTimeout(() => document.getElementById('mitra')?.scrollIntoView({ behavior: 'smooth' }), 100); }}>Mitra Industri</button>
          <button className="p2-nav-link" onClick={() => { if (activeView !== 'home') navigateTo('home'); setTimeout(() => document.getElementById('ekskul')?.scrollIntoView({ behavior: 'smooth' }), 100); }}>Ekskul</button>
          <button className="p2-nav-link" onClick={() => { if (activeView !== 'home') navigateTo('home'); setTimeout(() => document.getElementById('berita')?.scrollIntoView({ behavior: 'smooth' }), 100); }}>Berita</button>
          <button className="p2-nav-link" onClick={() => { if (activeView !== 'home') navigateTo('home'); setTimeout(() => document.getElementById('faq')?.scrollIntoView({ behavior: 'smooth' }), 100); }}>FAQ</button>
          <button className="p2-nav-link" onClick={() => { if (activeView !== 'home') navigateTo('home'); setTimeout(() => document.getElementById('lokasi')?.scrollIntoView({ behavior: 'smooth' }), 100); }}>Lokasi</button>
          <button className={\`p2-nav-link \${activeView === 'staff' ? 'active' : ''}\`} onClick={() => navigateTo('staff')}>Guru & Staf</button>
          <button className={\`p2-nav-link \${activeView === 'cek-status' ? 'active' : ''}\`} onClick={() => navigateTo('cek-status')}>Cek Status</button>
        </div>`;

content = content.replace(oldNavbarLinks, newNavbarLinks);

// Add mobile drawer inside Navbar
const oldNavbarClosing = `        </div>
      </div>
    </nav>`;

const newNavbarClosing = `        </div>
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
              <MapPin size={16} /> Peta & Lokasi Kampus
            </button>
            <button className="p2-mobile-link" onClick={() => navigateTo('staff')}>
              <Users size={16} /> Guru & Staf
            </button>
            <button className="p2-mobile-link" onClick={() => navigateTo('cek-status')}>
              <Search size={16} /> Cek Status PPDB
            </button>
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
    </nav>`;

content = content.replace(oldNavbarClosing, newNavbarClosing);

// 8. UPDATE FOOTER LINKS
const oldFooterCol = `        <div className="p2-footer-col">
          <h4>Program Keahlian</h4>
          <ul>
            <li><button onClick={() => { navigateTo('home'); setTimeout(() => document.getElementById('programs')?.scrollIntoView({ behavior: 'smooth' }), 100); }}>Manajemen Perkantoran (MPLB)</button></li>
            <li><button onClick={() => { navigateTo('home'); setTimeout(() => document.getElementById('programs')?.scrollIntoView({ behavior: 'smooth' }), 100); }}>Bisnis Daring & Pemasaran (BDP)</button></li>
            <li><button onClick={() => { navigateTo('home'); setTimeout(() => document.getElementById('programs')?.scrollIntoView({ behavior: 'smooth' }), 100); }}>Akuntansi & Keuangan (AKL)</button></li>
          </ul>
        </div>`;

const newFooterCol = `        <div className="p2-footer-col">
          <h4>Jelajahi Portal</h4>
          <ul>
            <li><button onClick={() => { navigateTo('home'); setTimeout(() => document.getElementById('sambutan')?.scrollIntoView({ behavior: 'smooth' }), 100); }}>Sambutan Kepala Sekolah</button></li>
            <li><button onClick={() => { navigateTo('home'); setTimeout(() => document.getElementById('programs')?.scrollIntoView({ behavior: 'smooth' }), 100); }}>Program Keahlian (MPLB, BDP, AKL)</button></li>
            <li><button onClick={() => { navigateTo('home'); setTimeout(() => document.getElementById('mitra')?.scrollIntoView({ behavior: 'smooth' }), 100); }}>Mitra Industri & BKK Kerja</button></li>
            <li><button onClick={() => { navigateTo('home'); setTimeout(() => document.getElementById('ekskul')?.scrollIntoView({ behavior: 'smooth' }), 100); }}>Ekstrakurikuler Kesiswaan</button></li>
            <li><button onClick={() => { navigateTo('home'); setTimeout(() => document.getElementById('faq')?.scrollIntoView({ behavior: 'smooth' }), 100); }}>FAQ Tanya Jawab PPDB</button></li>
            <li><button onClick={() => { navigateTo('home'); setTimeout(() => document.getElementById('lokasi')?.scrollIntoView({ behavior: 'smooth' }), 100); }}>Peta Lokasi Google Maps</button></li>
          </ul>
        </div>`;

content = content.replace(oldFooterCol, newFooterCol);

fs.writeFileSync(targetFile, content, 'utf8');
console.log('Successfully injected all 6 sections, Navbar, and Footer!');
