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
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-[#0B2545] border-t border-white/5 overflow-hidden shadow-2xl shadow-black"
          >
            <div className="px-5 py-6 flex flex-col gap-6">
              <div>
                <button
                  type="button"
                  className="w-full flex justify-between items-center text-white/90 font-bold tracking-wide py-2"
                  onClick={() => setMobileMueblesOpen((v) => !v)}
                >
                  Modelos de Muebles
                  <ChevronRight size={18} className={`transition-transform duration-300 ${mobileMueblesOpen ? 'rotate-90' : ''}`} />
                </button>
                {mobileMueblesOpen && (
                  <div className="mt-3 pl-2 grid grid-cols-1 gap-1">
                    {mueblesItems.map((item) => (
                      <Link
                        key={item.label}
                        to={item.to}
                        className="text-white/60 hover:text-[#22BDDD] py-2.5 text-sm font-medium transition-colors border-l border-white/5 pl-4 ml-1"
                        onClick={() => setMenuOpen(false)}
                      >
                        {item.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>

              <div>
                <button
                  type="button"
                  className="w-full flex justify-between items-center text-white/90 font-bold tracking-wide py-2"
                  onClick={() => setMobileServiciosOpen((v) => !v)}
                >
                  Nuestros Servicios
                  <ChevronRight size={18} className={`transition-transform duration-300 ${mobileServiciosOpen ? 'rotate-90' : ''}`} />
                </button>
                {mobileServiciosOpen && (
                  <div className="mt-3 pl-2 grid grid-cols-1 gap-1">
                    {serviciosItems.map((item) => (
                      <a
                        key={item.label}
                        href={item.to}
                        className="text-white/60 hover:text-[#22BDDD] py-2.5 text-sm font-medium transition-colors border-l border-white/5 pl-4 ml-1"
                        onClick={() => setMenuOpen(false)}
                      >
                        {item.label}
                      </a>
                    ))}
                  </div>
                )}
              </div>

              <Link
                to={catalogoLink.to}
                className="text-white/80 hover:text-white font-bold tracking-wide py-2 flex items-center justify-between"
                onClick={() => setMenuOpen(false)}
              >
                {catalogoLink.label} Digital 2026
                <ChevronRight size={18} className="text-white/20" />
              </Link>

              <a
                href={`https://wa.me/${WA_NUMBER}?text=${WA_MESSAGE}`}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gradient-to-r from-[#1A8FBB] to-[#0F6E95] text-white font-bold text-base text-center py-4 rounded-2xl mt-2 shadow-lg shadow-[#1A8FBB]/20"
                onClick={() => setMenuOpen(false)}
              >
                Cotizar por WhatsApp
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
