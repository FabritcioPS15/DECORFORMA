import { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { IoArrowForward, IoLogoInstagram, IoLogoFacebook, IoLogoWhatsapp, IoLogoTiktok, IoMailOutline, IoCallOutline } from 'react-icons/io5';
import { Menu, X, ChevronRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import TopBar from './TopBar';

export default function Navbar() {
  const location = useLocation();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [mobileMueblesOpen, setMobileMueblesOpen] = useState(false);
  const [mobileServiciosOpen, setMobileServiciosOpen] = useState(false);
  const [desktopDropdown, setDesktopDropdown] = useState<
    'catalogo' | 'servicios' | null
  >(null);

  const catalogoDropdownRef = useRef<HTMLDivElement | null>(null);
  const serviciosDropdownRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setMenuOpen(false);
    setMobileMueblesOpen(false);
    setMobileServiciosOpen(false);
    setDesktopDropdown(null);
  }, [location.pathname]);

  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setDesktopDropdown(null);
    };

    const onMouseDown = (e: MouseEvent) => {
      if (!desktopDropdown) return;
      const target = e.target as Node;

      const inCatalogo = catalogoDropdownRef.current?.contains(target);
      const inServicios = serviciosDropdownRef.current?.contains(target);

      if (!inCatalogo && !inServicios) setDesktopDropdown(null);
    };

    document.addEventListener('keydown', onKeyDown);
    document.addEventListener('mousedown', onMouseDown);
    return () => {
      document.removeEventListener('keydown', onKeyDown);
      document.removeEventListener('mousedown', onMouseDown);
    };
  }, [desktopDropdown]);

  const catalogoItems = [
    { label: 'Cocinas de Lujo', to: '/categoria/cocina' },
    { label: 'Salas & Centros de TV', to: '/categoria/sala' },
    { label: 'Dormitorios & Closets', to: '/categoria/dormitorio' },
    { label: 'Espacios de Oficina', to: '/categoria/oficina' },
    { label: 'Bibliotecas & Estanterías', to: '/categoria/bibliotecas' },
    { label: 'Muebles de Madera Fina', to: '/categoria/madera' },
    { label: 'Instituciones Educativas', to: '/categoria/educativo' },
    { label: 'Muebles Comerciales', to: '/categoria/comercios' },
  ];

  const serviciosItems = [
    { label: 'Diseño de muebles de melamina', to: '/servicios/diseno' },
    { label: 'Trabajos de melamina a domicilio', to: '/servicios/domicilio' },
    { label: 'Muebles personalizados', to: '/servicios/personalizados' },
  ];

  const isHome = location.pathname === '/';
  const showBackground = !isHome || scrolled || menuOpen || desktopDropdown !== null;
  const navTextClass = 'text-white/90 hover:text-white';

  return (
    <div className="relative">
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-in-out ${showBackground
          ? 'bg-[#0B2545]/90 backdrop-blur-[20px] shadow-2xl'
          : 'bg-transparent'
          }`}
      >
        <AnimatePresence>
          {!scrolled && <TopBar />}
        </AnimatePresence>

        <div className={`max-w-7xl mx-auto px-6 flex items-center justify-between transition-all duration-500 ${scrolled ? 'h-16' : 'h-20 lg:h-24'}`}>

          {/* LEFT: Menu Items (Desktop) */}
          <nav className="hidden lg:flex items-center gap-7 flex-1">
            {[
              { label: 'Inicio', to: '/' },
              { label: 'Nosotros', to: '/quienes-somos' },
            ].map((item) => {
              const isActive = location.pathname === item.to;
              return (
                <Link
                  key={item.label}
                  to={item.to}
                  className={`group relative text-[13px] font-bold uppercase tracking-wider transition-all duration-200 ${navTextClass} ${isActive ? 'text-white' : ''}`}
                >
                  {item.label}
                  <span className={`absolute -bottom-1 left-0 h-[2px] bg-[#22BDDD] transition-all duration-300 ${isActive ? 'w-full' : 'w-0 group-hover:w-full'}`} />
                </Link>
              );
            })}

            {[
              { label: 'Catálogo', dropdown: 'catalogo' },
              { label: 'Servicios', dropdown: 'servicios' },
            ].map((nav) => {
              const dropdownItems = nav.dropdown === 'catalogo' ? catalogoItems : serviciosItems;
              const isAnyItemActive = dropdownItems.some(item => location.pathname === item.to);

              return (
                <div key={nav.label} ref={nav.dropdown === 'catalogo' ? catalogoDropdownRef : serviciosDropdownRef} className="relative">
                  <button
                    type="button"
                    className={`group relative text-[13px] font-bold uppercase tracking-wider transition-all duration-200 flex items-center gap-1.5 focus:outline-none ${desktopDropdown === nav.dropdown || isAnyItemActive
                      ? 'text-[#22BDDD]'
                      : navTextClass
                      }`}
                    onClick={() =>
                      setDesktopDropdown((v) => (v === nav.dropdown ? null : (nav.dropdown as any)))
                    }
                  >
                    {nav.label}
                    <svg
                      className={`w-3.5 h-3.5 opacity-50 transition-transform duration-300 ${desktopDropdown === nav.dropdown ? 'rotate-180' : ''}`}
                      viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"
                    >
                      <polyline points="6 9 12 15 18 9"></polyline>
                    </svg>
                    <span className={`absolute -bottom-1 left-0 h-[2px] bg-[#22BDDD] transition-all duration-300 ${isAnyItemActive ? 'w-full' : 'w-0 group-hover:w-full'}`} />
                  </button>

                  {desktopDropdown === nav.dropdown && (
                    <div className="absolute left-0 top-full pt-4 origin-top">
                      <div className="w-64 rounded-2xl bg-[#061230]/95 backdrop-blur-xl border border-white/10 shadow-2xl overflow-hidden p-2">
                        {(nav.dropdown === 'catalogo' ? catalogoItems : serviciosItems).map((item) => (
                          <Link
                            key={item.label}
                            to={item.to}
                            className="flex items-center gap-3 px-4 py-3 text-[12px] font-bold uppercase tracking-wide text-white/60 hover:text-[#22BDDD] hover:bg-white/5 rounded-xl transition-all"
                            onClick={() => setDesktopDropdown(null)}
                          >
                            <div className="w-1 h-1 rounded-full bg-[#1A8FBB]" />
                            {item.label}
                          </Link>
                        ))}
                        <div className="mt-2 pt-2 border-t border-white/5">
                          <Link
                            to={nav.dropdown === 'catalogo' ? '/catalogo' : '/servicios'}
                            className="flex items-center justify-between px-4 py-3 text-[11px] font-black uppercase tracking-[0.2em] text-[#22BDDD] hover:bg-white/5 rounded-xl transition-all"
                            onClick={() => setDesktopDropdown(null)}
                          >
                            Ver todas las Colecciones
                            <IoArrowForward size={14} />
                          </Link>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </nav>

          {/* Mobile Toggle (Left) */}
          <button
            className={`lg:hidden p-2.5 rounded-xl transition-all relative z-[60] flex items-center justify-center ${scrolled || !isHome
              ? 'text-white bg-[#0B2545]/20 hover:bg-[#0B2545]/40'
              : 'text-white bg-white/10 hover:bg-white/20'
              } ${menuOpen ? 'bg-white shadow-xl rotate-90 opacity-0 pointer-events-none' : ''}`}
            onClick={() => {
              setMenuOpen(!menuOpen);
              setMobileMueblesOpen(false);
              setMobileServiciosOpen(false);
            }}
            aria-label="Toggle menu"
          >
            {menuOpen ? <X size={24} className="text-[#0B2545]" /> : <Menu size={24} />}
          </button>

          {/* CENTER: Logo */}
          <div className="flex-none px-4 lg:px-8 flex justify-center items-center">
            <Link to="/" className="flex items-center gap-3 group relative">
              <motion.div
                animate={{
                  width: scrolled ? 52 : 40,
                  height: scrolled ? 52 : 40,
                  scale: scrolled ? 1.1 : 1
                }}
                className="rounded-xl bg-gradient-to-br from-[#1A8FBB] to-[#22BDDD] flex items-center justify-center shadow-lg shadow-[#1A8FBB]/20 group-hover:rotate-[360deg] transition-all duration-700"
              >
                <svg width={scrolled ? "28" : "24"} height={scrolled ? "28" : "24"} viewBox="0 0 20 20" fill="none">
                  <rect x="2" y="2" width="7" height="7" rx="1.5" fill="white" />
                  <rect x="11" y="2" width="7" height="7" rx="1.5" fill="white" opacity="0.6" />
                  <rect x="2" y="11" width="7" height="7" rx="1.5" fill="white" opacity="0.6" />
                  <rect x="11" y="11" width="7" height="7" rx="1.5" fill="white" />
                </svg>
              </motion.div>

              <AnimatePresence mode="wait">
                {!scrolled && (
                  <motion.span
                    initial={{ opacity: 0, x: -10, width: 0 }}
                    animate={{ opacity: 1, x: 0, width: 'auto' }}
                    exit={{ opacity: 0, x: -10, width: 0 }}
                    className="text-white font-black text-xl lg:text-2xl tracking-tighter whitespace-nowrap overflow-hidden"
                  >
                    DECOR<span className="text-[#22BDDD]">FORMA</span>
                  </motion.span>
                )}
              </AnimatePresence>
            </Link>
          </div>

          {/* RIGHT: Contact Button (Desktop) & Spacer (Mobile) */}
          <div className="hidden lg:flex items-center justify-end flex-1">
            <button
              onClick={() => {
                if (location.pathname !== '/') {
                  window.location.href = '/#contacto';
                } else {
                  document.getElementById('contacto')?.scrollIntoView({ behavior: 'smooth' });
                }
              }}
              className="group relative overflow-hidden bg-[#1A8FBB] hover:bg-white text-white hover:text-[#0B2545] text-xs font-black uppercase tracking-[0.2em] px-8 py-4 rounded-xl transition-all duration-500 hover:shadow-2xl hover:shadow-[#1A8FBB]/40 flex items-center gap-2 border border-transparent hover:border-white/20"
            >
              <span className="relative z-10">Contáctanos</span>
            </button>
          </div>

          {/* Mobile Spacer (Right) to keep logo centered */}
          <div className="w-12 lg:hidden" />
        </div>
      </motion.header>

      {/* Mobile Nav Sidebar - COMPLETELY FIXED POSITIONING OUTSIDE HEADER CONTENT */}
      <AnimatePresence>
        {menuOpen && (
          <>
            {/* Overlay */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setMenuOpen(false)}
              className="lg:hidden fixed inset-0 bg-[#0B2545]/60 backdrop-blur-xl z-[80]"
            />

            {/* Sidebar */}
            <motion.div
              initial={{ x: '-100%' }}
              animate={{ x: 0 }}
              exit={{ x: '-100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              className="lg:hidden fixed inset-y-0 left-0 w-[85%] max-w-[320px] bg-white z-[90] shadow-2xl flex flex-col border-r border-gray-100"
            >
              {/* Sidebar Header with Brand */}
              <div className="p-8 pb-4 flex items-center justify-between border-b border-gray-50 relative">
                <Link to="/" className="flex items-center gap-3" onClick={() => setMenuOpen(false)}>
                  <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#1A8FBB] to-[#22BDDD] flex items-center justify-center shadow-lg shadow-[#1A8FBB]/10">
                    <svg width="22" height="22" viewBox="0 0 20 20" fill="none">
                      <rect x="2" y="2" width="7" height="7" rx="1.5" fill="white" />
                      <rect x="11" y="2" width="7" height="7" rx="1.5" fill="white" opacity="0.6" />
                      <rect x="2" y="11" width="7" height="7" rx="1.5" fill="white" opacity="0.6" />
                      <rect x="11" y="11" width="7" height="7" rx="1.5" fill="white" />
                    </svg>
                  </div>
                  <span className="text-[#0B2545] font-black text-lg tracking-tight">
                    DECOR<span className="text-[#22BDDD]">FORMA</span>
                  </span>
                </Link>
                <button
                  onClick={() => setMenuOpen(false)}
                  className="p-2 -mr-2 text-[#0B2545]/30 hover:text-[#0B2545] transition-colors bg-gray-50/50 rounded-lg"
                  aria-label="Cerrar menú"
                >
                  <X size={22} strokeWidth={1.5} />
                </button>
              </div>

              {/* Decorative Geometric Elements (Minimalist Structural Lines) */}
              <div className="absolute top-32 left-8 w-24 h-px bg-gradient-to-r from-[#22BDDD]/20 to-transparent pointer-events-none z-0" />
              <div className="absolute top-48 right-6 w-px h-20 bg-gradient-to-b from-[#22BDDD]/10 to-transparent pointer-events-none z-0" />
              <div className="absolute top-[50%] left-0 w-32 h-px bg-gradient-to-r from-[#0B2545]/5 to-transparent pointer-events-none z-0" />

              <div className="absolute top-32 -right-4 w-24 h-24 border border-[#22BDDD]/5 rounded-full pointer-events-none opacity-40 z-0" />
              <div className="absolute bottom-40 -left-6 w-32 h-32 border border-[#0B2545]/5 rounded-full pointer-events-none opacity-40 z-0" />

              <div className="p-8 py-10 overflow-y-auto flex-1 flex flex-col">
                <nav className="space-y-1 mb-8">
                  {[
                    { label: 'Inicio', to: '/' },
                    { label: 'Nosotros', to: '/quienes-somos' },
                  ].map((item, idx) => (
                    <motion.div
                      key={item.label}
                      initial={{ x: -10, opacity: 0 }}
                      animate={{ x: 0, opacity: 1 }}
                      transition={{ delay: 0.1 + idx * 0.05 }}
                    >
                      <Link
                        to={item.to}
                        className="group flex items-center justify-between py-4 text-[13px] font-bold uppercase tracking-[0.15em] text-[#0B2545]/80 hover:text-[#22BDDD] border-b border-gray-100 transition-all"
                        onClick={() => setMenuOpen(false)}
                      >
                        {item.label}
                        <div className="w-1 h-1 rounded-full bg-gray-100 group-hover:bg-[#22BDDD] transition-colors" />
                      </Link>
                    </motion.div>
                  ))}

                  {/* Catálogo Accordion */}
                  <div className="border-b border-gray-100">
                    <button
                      onClick={() => {
                        setMobileMueblesOpen(!mobileMueblesOpen);
                        setMobileServiciosOpen(false);
                      }}
                      className="w-full flex items-center justify-between py-4 text-[13px] font-bold uppercase tracking-[0.15em] text-[#0B2545]/80 hover:text-[#22BDDD] transition-colors"
                    >
                      Catálogo
                      <ChevronRight size={16} className={`text-[#22BDDD] transition-transform duration-300 ${mobileMueblesOpen ? 'rotate-90' : ''}`} />
                    </button>
                    <AnimatePresence>
                      {mobileMueblesOpen && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: 'auto', opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          className="overflow-hidden pl-4 flex flex-col gap-1 pb-4"
                        >
                          {catalogoItems.map((item) => (
                            <Link
                              key={item.label}
                              to={item.to}
                              className="flex items-center gap-3 py-3 text-[12px] font-medium text-gray-500 hover:text-[#22BDDD] transition-colors"
                              onClick={() => setMenuOpen(false)}
                            >
                              <div className="w-1 h-px bg-gray-200" />
                              {item.label}
                            </Link>
                          ))}
                          <Link
                            to="/catalogo"
                            className="flex items-center justify-between py-4 text-[11px] font-bold text-[#22BDDD] uppercase tracking-widest mt-2 border-t border-gray-50/50"
                            onClick={() => setMenuOpen(false)}
                          >
                            Ver todo <IoArrowForward size={14} />
                          </Link>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>

                  {/* Servicios Accordion */}
                  <div className="border-b border-gray-100 font-medium">
                    <button
                      onClick={() => {
                        setMobileServiciosOpen(!mobileServiciosOpen);
                        setMobileMueblesOpen(false);
                      }}
                      className="w-full flex items-center justify-between py-4 text-[13px] font-bold uppercase tracking-[0.15em] text-[#0B2545]/80 hover:text-[#22BDDD] transition-colors"
                    >
                      Servicios
                      <ChevronRight size={16} className={`text-[#22BDDD] transition-transform duration-300 ${mobileServiciosOpen ? 'rotate-90' : ''}`} />
                    </button>
                    <AnimatePresence>
                      {mobileServiciosOpen && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: 'auto', opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          className="overflow-hidden pl-4 flex flex-col gap-1 pb-4"
                        >
                          {serviciosItems.map((item) => (
                            <Link
                              key={item.label}
                              to={item.to}
                              className="flex items-center gap-3 py-3 text-[12px] font-medium text-gray-500 hover:text-[#22BDDD] transition-colors"
                              onClick={() => setMenuOpen(false)}
                            >
                              <div className="w-1 h-px bg-gray-200" />
                              {item.label}
                            </Link>
                          ))}
                          <Link
                            to="/servicios"
                            className="flex items-center justify-between py-4 text-[11px] font-bold text-[#22BDDD] uppercase tracking-widest mt-2 border-t border-gray-50/50"
                            onClick={() => setMenuOpen(false)}
                          >
                            Ver todo <IoArrowForward size={14} />
                          </Link>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                </nav>

                {/* Contact Info Section */}
                <div className="space-y-6 mb-10 pb-8 border-b border-gray-100 relative z-10">
                  <div className="text-[10px] font-bold uppercase tracking-[0.3em] text-[#22BDDD]/50">
                    Atención Directa
                  </div>
                  <div className="flex flex-col gap-4">
                    <a href="tel:+51969961244" className="flex items-center gap-3 group">
                      <div className="w-8 h-8 rounded-lg bg-gray-50 flex items-center justify-center text-[#22BDDD] group-hover:bg-[#22BDDD] group-hover:text-white transition-all">
                        <IoCallOutline size={14} />
                      </div>
                      <span className="text-[13px] font-medium text-[#0B2545]/70 group-hover:text-[#0B2545] transition-colors">
                        +51 969 961 244
                      </span>
                    </a>
                    <a href="mailto:ventas@decorforma.pe" className="flex items-center gap-3 group">
                      <div className="w-8 h-8 rounded-lg bg-gray-50 flex items-center justify-center text-[#22BDDD] group-hover:bg-[#22BDDD] group-hover:text-white transition-all">
                        <IoMailOutline size={14} />
                      </div>
                      <span className="text-[13px] font-medium text-[#0B2545]/70 group-hover:text-[#0B2545] transition-colors">
                        ventas@decorforma.pe
                      </span>
                    </a>
                  </div>
                </div>

                <div className="mt-auto space-y-8">
                  {/* Blog Selection */}
                  <div>
                    <div className="mb-4 text-[10px] font-bold uppercase tracking-[0.3em] text-[#22BDDD]/50 text-center">
                      Diseño & Inspiración
                    </div>
                    <Link
                      to="/blog"
                      className="flex items-center justify-center gap-2 w-full py-4.5 bg-white border border-[#0B2545]/10 text-[#0B2545] rounded-xl text-[12px] font-bold uppercase tracking-[0.2em] hover:bg-[#0B2545] hover:text-white transition-all group shadow-sm"
                      onClick={() => setMenuOpen(false)}
                    >
                      Explorar Blog <IoArrowForward size={16} className="group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </div>

                  {/* Social Buttons */}
                  <div className="flex items-center justify-center gap-4">
                    {[
                      { icon: IoLogoInstagram, href: '#' },
                      { icon: IoLogoFacebook, href: '#' },
                      { icon: IoLogoWhatsapp, href: '#' },
                      { icon: IoLogoTiktok, href: '#' }
                    ].map((social, i) => (
                      <a
                        key={i}
                        href={social.href}
                        className="w-10 h-10 rounded-full border border-gray-100 flex items-center justify-center text-gray-400 hover:text-[#22BDDD] hover:border-[#22BDDD] transition-all"
                      >
                        <social.icon size={18} />
                      </a>
                    ))}
                  </div>
                </div>
              </div>

              <div className="p-8 border-t border-gray-50 bg-gray-50/30">
                <button
                  onClick={() => {
                    setMenuOpen(false);
                    if (location.pathname !== '/') {
                      window.location.href = '/#contacto';
                    } else {
                      document.getElementById('contacto')?.scrollIntoView({ behavior: 'smooth' });
                    }
                  }}
                  className="w-full bg-[#0B2545] text-white font-bold text-[12px] uppercase tracking-[0.2em] py-5 rounded-xl shadow-lg shadow-[#0B2545]/10 active:scale-[0.98] transition-all"
                >
                  Agendar Cita
                </button>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  );
}
