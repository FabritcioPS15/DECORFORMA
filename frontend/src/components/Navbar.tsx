import { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ChevronRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { WA_MESSAGE, WA_NUMBER } from '../data/site';

export default function Navbar() {
  const location = useLocation();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [mobileMueblesOpen, setMobileMueblesOpen] = useState(false);
  const [mobileServiciosOpen, setMobileServiciosOpen] = useState(false);
  const [desktopDropdown, setDesktopDropdown] = useState<
    'muebles' | 'servicios' | null
  >(null);

  const mueblesDropdownRef = useRef<HTMLDivElement | null>(null);
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

      const inMuebles = mueblesDropdownRef.current?.contains(target);
      const inServicios = serviciosDropdownRef.current?.contains(target);

      if (!inMuebles && !inServicios) setDesktopDropdown(null);
    };

    document.addEventListener('keydown', onKeyDown);
    document.addEventListener('mousedown', onMouseDown);
    return () => {
      document.removeEventListener('keydown', onKeyDown);
      document.removeEventListener('mousedown', onMouseDown);
    };
  }, [desktopDropdown]);

  const mueblesItems = [
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

  const catalogoLink = { label: 'Catálogo', to: '/catalogo' };

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
        ? 'bg-[#0B2545]/70 backdrop-blur-[20px] shadow-2xl shadow-black/20 border-b border-white/5'
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
            Decor<span className="text-[#22BDDD]">forma</span>
          </span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          <Link
            to="/quienes-somos"
            className={`text-sm font-bold tracking-wide transition-all duration-200 ${navTextClass}`}
          >
            Nosotros
          </Link>

          {[
            { label: 'Muebles', dropdown: 'muebles' },
            { label: 'Servicios', dropdown: 'servicios' },
          ].map((nav) => (
            <div key={nav.label} ref={nav.dropdown === 'muebles' ? mueblesDropdownRef : serviciosDropdownRef} className="relative">
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
                  <div className="w-64 rounded-2xl bg-[#0B2545]/95 backdrop-blur-2xl border border-white/10 shadow-[0_20px_50px_rgba(0,0,0,0.5)] overflow-hidden p-1.5">
                    {(nav.dropdown === 'muebles' ? mueblesItems : serviciosItems).map((item) => (
                      <Link
                        key={item.label}
                        to={item.to}
                        className="flex items-center gap-3 px-3 py-2.5 text-[13px] font-medium text-white/70 hover:text-white hover:bg-white/5 rounded-xl transition-all"
                        onClick={() => setDesktopDropdown(null)}
                      >
                        <div className={`w-1.5 h-1.5 rounded-full ${nav.dropdown === 'muebles' ? 'bg-[#1A8FBB]' : 'bg-[#22BDDD]'}`} />
                        {item.label}
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>
          ))}

          <Link
            to={catalogoLink.to}
            className={`text-sm font-bold tracking-wide transition-all duration-200 ${navTextClass}`}
          >
            Catálogo
          </Link>

          <Link
            to="/recomendaciones"
            className={`text-sm font-bold tracking-wide transition-all duration-200 ${navTextClass}`}
          >
            Recomendaciones
          </Link>

          <div className="h-6 w-[1px] bg-white/10 mx-2" />

          <a
            href={`https://wa.me/${WA_NUMBER}?text=${WA_MESSAGE}`}
            target="_blank"
            rel="noopener noreferrer"
            className="group relative overflow-hidden bg-[#1A8FBB] hover:bg-[#0F6E95] text-white text-[13px] font-bold px-6 py-2.5 rounded-xl transition-all duration-300 hover:shadow-lg hover:shadow-[#1A8FBB]/40 flex items-center gap-2"
          >
            <span className="relative z-10">Cotizar Proyecto</span>
            <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700" />
          </a>
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
            className="md:hidden fixed inset-x-0 top-[72px] bg-[#0B2545]/95 backdrop-blur-[40px] border-b border-white/10 overflow-hidden shadow-[0_25px_50px_-12px_rgba(0,0,0,0.5)] z-40 rounded-b-[2rem]"
          >
            <div className="px-6 py-8 flex flex-col gap-3 max-h-[80vh] overflow-y-auto custom-scrollbar">
              {/* Basic Links */}
              <motion.div initial={{ x: -20, opacity: 0 }} animate={{ x: 0, opacity: 1 }}>
                <Link
                  to="/quienes-somos"
                  className="flex items-center gap-4 text-white/90 font-bold text-lg p-3 hover:bg-white/5 rounded-2xl transition-all"
                  onClick={() => setMenuOpen(false)}
                >
                  <div className="w-1.5 h-1.5 rounded-full bg-[#22BDDD]" />
                  Nosotros
                </Link>
              </motion.div>

              {/* Muebles Accordion */}
              <motion.div initial={{ x: -20, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ delay: 0.05 }}>
                <button
                  onClick={() => setMobileMueblesOpen(!mobileMueblesOpen)}
                  className="w-full flex items-center justify-between gap-4 text-white/90 font-bold text-lg p-3 hover:bg-white/5 rounded-2xl transition-all"
                >
                  <div className="flex items-center gap-4">
                    <div className="w-1.5 h-1.5 rounded-full bg-[#1A8FBB]" />
                    Muebles
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
                      {mueblesItems.map((item) => (
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
              <motion.div initial={{ x: -20, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ delay: 0.1 }}>
                <button
                  onClick={() => setMobileServiciosOpen(!mobileServiciosOpen)}
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

              {/* More Links */}
              {[
                { label: 'Catálogo', to: '/catalogo', iconColor: 'bg-[#1A8FBB]' },
                { label: 'Recomendaciones', to: '/recomendaciones', iconColor: 'bg-[#22BDDD]' }
              ].map((link, i) => (
                <motion.div
                  key={link.to}
                  initial={{ x: -20, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: 0.15 + i * 0.05 }}
                >
                  <Link
                    to={link.to}
                    className="flex items-center gap-4 text-white/90 font-bold text-lg p-3 hover:bg-white/5 rounded-2xl transition-all"
                    onClick={() => setMenuOpen(false)}
                  >
                    <div className={`w-1.5 h-1.5 rounded-full ${link.iconColor}`} />
                    {link.label}
                  </Link>
                </motion.div>
              ))}

              <div className="h-[1px] bg-white/5 my-2" />

              <motion.div
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.3 }}
              >
                <a
                  href={`https://wa.me/${WA_NUMBER}?text=${WA_MESSAGE}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full flex items-center justify-center gap-3 bg-gradient-to-r from-[#1A8FBB] to-[#22BDDD] text-white font-extrabold text-base py-4 rounded-[1.5rem] shadow-xl shadow-[#1A8FBB]/20 active:scale-95 transition-transform"
                  onClick={() => setMenuOpen(false)}
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                  </svg>
                  Cotización Personalizada
                </a>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
