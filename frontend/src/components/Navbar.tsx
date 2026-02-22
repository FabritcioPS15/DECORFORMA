import { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ChevronRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

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
    const handleScroll = () => setScrolled(window.scrollY > 220);
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

  const proyectosLink = { label: 'Proyectos', to: '/catalogo' };

  const isHome = location.pathname === '/';
  const showBackground = !isHome || scrolled || menuOpen || desktopDropdown !== null;
  const navTextClass = showBackground
    ? 'text-white/80 hover:text-white'
    : 'text-[#22BDDD] hover:text-white';

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-in-out ${showBackground
        ? 'bg-[#0B2545]/75 backdrop-blur-[40px] shadow-[0_25px_50px_-12px_rgba(0,0,0,0.4)] border-b border-white/15'
        : 'bg-transparent'
        }`}
    >
      <div className="max-w-6xl mx-auto px-5 py-4 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2 group">
          <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-[#1A8FBB] to-[#22BDDD] flex items-center justify-center shadow-lg shadow-[#1A8FBB]/20 group-hover:scale-110 transition-transform duration-300">
            <svg width="22" height="22" viewBox="0 0 20 20" fill="none">
              <rect x="2" y="2" width="7" height="7" rx="1.5" fill="white" />
              <rect x="11" y="2" width="7" height="7" rx="1.5" fill="white" opacity="0.6" />
              <rect x="2" y="11" width="7" height="7" rx="1.5" fill="white" opacity="0.6" />
              <rect x="11" y="11" width="7" height="7" rx="1.5" fill="white" />
            </svg>
          </div>
          <span className="text-white font-bold text-xl tracking-tight">
            DECOR<span className="text-[#22BDDD]">FORMA</span>
          </span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          <Link
            to="/"
            className={`text-sm font-bold tracking-wide transition-all duration-200 ${navTextClass}`}
          >
            Inicio
          </Link>

          <Link
            to="/quienes-somos"
            className={`text-sm font-bold tracking-wide transition-all duration-200 ${navTextClass}`}
          >
            Nosotros
          </Link>

          {[
            { label: 'Catálogo', dropdown: 'catalogo' },
            { label: 'Servicios', dropdown: 'servicios' },
          ].map((nav) => (
            <div key={nav.label} ref={nav.dropdown === 'catalogo' ? catalogoDropdownRef : serviciosDropdownRef} className="relative">
              <button
                type="button"
                className={`text-sm font-bold tracking-wide transition-all duration-200 flex items-center gap-1.5 focus:outline-none ${desktopDropdown === nav.dropdown
                  ? 'text-[#22BDDD]'
                  : navTextClass
                  }`}
                aria-expanded={desktopDropdown === nav.dropdown}
                onClick={() =>
                  setDesktopDropdown((v) => (v === nav.dropdown ? null : (nav.dropdown as any)))
                }
              >
                {nav.label}
                <svg
                  className={`w-4 h-4 transition-transform duration-300 ${desktopDropdown === nav.dropdown ? 'rotate-180' : ''}`}
                  viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
                >
                  <polyline points="6 9 12 15 18 9"></polyline>
                </svg>
              </button>

              {desktopDropdown === nav.dropdown && (
                <div className="absolute left-0 top-full pt-4 origin-top animate-[navdrop_200ms_ease-out]">
                  <div className="w-64 rounded-2xl bg-[#0B2545]/90 backdrop-blur-[40px] border border-white/20 shadow-[0_25px_50px_-12px_rgba(0,0,0,0.5)] overflow-hidden p-1.5">
                    {(nav.dropdown === 'catalogo' ? catalogoItems : serviciosItems).map((item) => (
                      <Link
                        key={item.label}
                        to={item.to}
                        className="flex items-center gap-3 px-3 py-2.5 text-[13px] font-medium text-white/70 hover:text-white hover:bg-white/5 rounded-xl transition-all"
                        onClick={() => setDesktopDropdown(null)}
                      >
                        <div className={`w-1.5 h-1.5 rounded-full ${nav.dropdown === 'catalogo' ? 'bg-[#1A8FBB]' : 'bg-[#22BDDD]'}`} />
                        {item.label}
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>
          ))}

          <Link
            to={proyectosLink.to}
            className={`text-sm font-bold tracking-wide transition-all duration-200 ${navTextClass}`}
          >
            Proyectos
          </Link>



          <div className="h-6 w-[1px] bg-white/10 mx-2" />

          <button
            onClick={() => {
              if (location.pathname !== '/') {
                window.location.href = '/#contacto';
              } else {
                document.getElementById('contacto')?.scrollIntoView({ behavior: 'smooth' });
              }
            }}
            className="group relative overflow-hidden bg-[#1A8FBB] hover:bg-[#0F6E95] text-white text-[13px] font-bold px-6 py-2.5 rounded-xl transition-all duration-300 hover:shadow-lg hover:shadow-[#1A8FBB]/40 flex items-center gap-2"
          >
            <span className="relative z-10">Contáctanos</span>
            <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700" />
          </button>
        </nav>

        <button
          className="md:hidden text-white p-2 hover:bg-white/5 rounded-xl transition-colors"
          onClick={() => {
            setMenuOpen(!menuOpen);
            setMobileMueblesOpen(false);
            setMobileServiciosOpen(false);
          }}
          aria-label="Toggle menu"
        >
          {menuOpen ? <X size={26} /> : <Menu size={26} />}
        </button>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="md:hidden fixed inset-x-0 top-[72px] bg-[#0B2545]/80 backdrop-blur-[40px] border-b border-white/20 overflow-hidden shadow-[0_25px_50px_-12px_rgba(0,0,0,0.5)] z-40 rounded-b-[2rem]"
          >
            <div className="px-6 py-8 flex flex-col gap-3 max-h-[80vh] overflow-y-auto custom-scrollbar">
              {/* Basic Links */}
              {/* Inicio Link */}
              <motion.div initial={{ x: -20, opacity: 0 }} animate={{ x: 0, opacity: 1 }}>
                <Link
                  to="/"
                  className="flex items-center gap-4 text-white/90 font-bold text-lg p-3 hover:bg-white/5 rounded-2xl transition-all"
                  onClick={() => setMenuOpen(false)}
                >
                  <div className="w-1.5 h-1.5 rounded-full bg-[#1A8FBB]" />
                  Inicio
                </Link>
              </motion.div>

              {/* Nosotros Link */}
              <motion.div initial={{ x: -20, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ delay: 0.05 }}>
                <Link
                  to="/quienes-somos"
                  className="flex items-center gap-4 text-white/90 font-bold text-lg p-3 hover:bg-white/5 rounded-2xl transition-all"
                  onClick={() => setMenuOpen(false)}
                >
                  <div className="w-1.5 h-1.5 rounded-full bg-[#22BDDD]" />
                  Nosotros
                </Link>
              </motion.div>

              {/* Catálogo Accordion */}
              <motion.div initial={{ x: -20, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ delay: 0.1 }}>
                <button
                  onClick={() => {
                    setMobileMueblesOpen(!mobileMueblesOpen);
                    if (!mobileMueblesOpen) setMobileServiciosOpen(false);
                  }}
                  className="w-full flex items-center justify-between gap-4 text-white/90 font-bold text-lg p-3 hover:bg-white/5 rounded-2xl transition-all"
                >
                  <div className="flex items-center gap-4">
                    <div className="w-1.5 h-1.5 rounded-full bg-[#1A8FBB]" />
                    Catálogo
                  </div>
                  <ChevronRight size={20} className={`text-white/30 transition-transform duration-300 ${mobileMueblesOpen ? 'rotate-90' : ''}`} />
                </button>
                <AnimatePresence>
                  {mobileMueblesOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      className="overflow-hidden pl-8 flex flex-col gap-1"
                    >
                      {catalogoItems.map((item) => (
                        <Link
                          key={item.label}
                          to={item.to}
                          className="text-white/60 hover:text-[#22BDDD] py-2.5 text-[15px] font-medium transition-colors"
                          onClick={() => setMenuOpen(false)}
                        >
                          {item.label}
                        </Link>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>

              {/* Servicios Accordion */}
              <motion.div initial={{ x: -20, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ delay: 0.15 }}>
                <button
                  onClick={() => {
                    setMobileServiciosOpen(!mobileServiciosOpen);
                    if (!mobileServiciosOpen) setMobileMueblesOpen(false);
                  }}
                  className="w-full flex items-center justify-between gap-4 text-white/90 font-bold text-lg p-3 hover:bg-white/5 rounded-2xl transition-all"
                >
                  <div className="flex items-center gap-4">
                    <div className="w-1.5 h-1.5 rounded-full bg-[#22BDDD]" />
                    Servicios
                  </div>
                  <ChevronRight size={20} className={`text-white/30 transition-transform duration-300 ${mobileServiciosOpen ? 'rotate-90' : ''}`} />
                </button>
                <AnimatePresence>
                  {mobileServiciosOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      className="overflow-hidden pl-8 flex flex-col gap-1"
                    >
                      {serviciosItems.map((item) => (
                        <Link
                          key={item.label}
                          to={item.to}
                          className="text-white/60 hover:text-[#22BDDD] py-2.5 text-[15px] font-medium transition-colors"
                          onClick={() => setMenuOpen(false)}
                        >
                          {item.label}
                        </Link>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>

              {/* Proyectos Link */}
              <motion.div
                initial={{ x: -20, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 0.2 }}
              >
                <Link
                  to="/catalogo"
                  className="flex items-center gap-4 text-white/90 font-bold text-lg p-3 hover:bg-white/5 rounded-2xl transition-all"
                  onClick={() => setMenuOpen(false)}
                >
                  <div className="w-1.5 h-1.5 rounded-full bg-[#1A8FBB]" />
                  Proyectos
                </Link>
              </motion.div>


              <div className="h-[1px] bg-white/5 my-2" />

              <motion.div
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.3 }}
              >
                <button
                  onClick={() => {
                    setMenuOpen(false);
                    if (location.pathname !== '/') {
                      window.location.href = '/#contacto';
                    } else {
                      document.getElementById('contacto')?.scrollIntoView({ behavior: 'smooth' });
                    }
                  }}
                  className="w-full flex items-center justify-center gap-3 bg-gradient-to-r from-[#1A8FBB] to-[#22BDDD] text-white font-extrabold text-base py-4 rounded-[1.5rem] shadow-xl shadow-[#1A8FBB]/20 active:scale-95 transition-transform"
                >
                  Contáctanos
                </button>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
