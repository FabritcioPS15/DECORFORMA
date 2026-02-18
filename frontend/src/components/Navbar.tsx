import { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { CATALOG_2026_URL, WA_MESSAGE, WA_NUMBER } from '../data/site';

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
    { label: 'Cocina', to: '/categoria/cocina' },
    { label: 'Sala', to: '/categoria/sala' },
    { label: 'Dormitorio', to: '/categoria/dormitorio' },
    { label: 'Muebles de Oficina', to: '/categoria/oficina' },
    { label: 'Muebles para Comercios', to: '/categoria/comercios' },
  ];

  const serviciosItems = [
    { label: 'Diseño de muebles de melamina', href: '/#diseno' },
    { label: 'Trabajos de melamina a domicilio', href: '/#domicilio' },
    { label: 'Muebles personalizados', href: '/#personalizados' },
  ];

  const catalogoLink = { label: 'Catálogo 2026', href: CATALOG_2026_URL };

  const isHome = location.pathname === '/';
  const showBackground = !isHome || scrolled || menuOpen || desktopDropdown !== null;
  const navTextClass = showBackground
    ? 'text-white/80 hover:text-white'
    : 'text-[#22BDDD] hover:text-white';
  const navTextActiveClass = showBackground ? 'text-white' : 'text-white';

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-out ${
        showBackground
          ? 'bg-[#0B2545]/88 backdrop-blur-xl shadow-md shadow-black/10'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-6xl mx-auto px-5 py-4 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-md bg-[#1A8FBB] flex items-center justify-center">
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
              <rect x="2" y="2" width="7" height="7" rx="1" fill="white" />
              <rect x="11" y="2" width="7" height="7" rx="1" fill="white" opacity="0.6" />
              <rect x="2" y="11" width="7" height="7" rx="1" fill="white" opacity="0.6" />
              <rect x="11" y="11" width="7" height="7" rx="1" fill="white" />
            </svg>
          </div>
          <span className="text-white font-bold text-xl tracking-tight">
            Decor<span className="text-[#22BDDD]">forma</span>
          </span>
        </Link>

        <nav className="hidden md:flex items-center gap-6">
          <div ref={mueblesDropdownRef} className="relative">
            <button
              type="button"
              className={`text-sm font-semibold transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/30 rounded-md px-1 -mx-1 hover:-translate-y-0.5 ${
                desktopDropdown === 'muebles'
                  ? navTextActiveClass
                  : navTextClass
              }`}
              aria-expanded={desktopDropdown === 'muebles'}
              onClick={() =>
                setDesktopDropdown((v) => (v === 'muebles' ? null : 'muebles'))
              }
            >
              Muebles
            </button>
            {desktopDropdown === 'muebles' && (
              <div className="absolute left-0 top-full pt-3 origin-top animate-[navdrop_160ms_ease-out]">
                <div className="w-64 rounded-2xl bg-[#061230]/96 backdrop-blur-xl border border-white/15 shadow-2xl overflow-hidden">
                  {mueblesItems.map((item) => (
                    <Link
                      key={item.label}
                      to={item.to}
                      className="block px-4 py-3 text-sm text-white/75 hover:text-white hover:bg-white/10 transition-colors"
                      onClick={() => setDesktopDropdown(null)}
                    >
                      {item.label}
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </div>

          <div ref={serviciosDropdownRef} className="relative">
            <button
              type="button"
              className={`text-sm font-semibold transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/30 rounded-md px-1 -mx-1 hover:-translate-y-0.5 ${
                desktopDropdown === 'servicios'
                  ? navTextActiveClass
                  : navTextClass
              }`}
              aria-expanded={desktopDropdown === 'servicios'}
              onClick={() =>
                setDesktopDropdown((v) =>
                  v === 'servicios' ? null : 'servicios'
                )
              }
            >
              Servicios
            </button>
            {desktopDropdown === 'servicios' && (
              <div className="absolute left-0 top-full pt-3 origin-top animate-[navdrop_160ms_ease-out]">
                <div className="w-72 rounded-2xl bg-[#061230]/96 backdrop-blur-xl border border-white/15 shadow-2xl overflow-hidden">
                  {serviciosItems.map((item) => (
                    <a
                      key={item.label}
                      href={item.href}
                      className="block px-4 py-3 text-sm text-white/75 hover:text-white hover:bg-white/10 transition-colors"
                      onClick={() => setDesktopDropdown(null)}
                    >
                      {item.label}
                    </a>
                  ))}
                </div>
              </div>
            )}
          </div>

          {catalogoLink.href ? (
            <a
              href={catalogoLink.href}
              target="_blank"
              rel="noopener noreferrer"
              className={`text-sm font-semibold transition-all duration-200 hover:-translate-y-0.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/30 rounded-md px-1 -mx-1 ${navTextClass}`}
            >
              {catalogoLink.label}
            </a>
          ) : (
            <span className="text-white/50 text-sm font-semibold">
              {catalogoLink.label}
            </span>
          )}

          <a
            href={`https://wa.me/${WA_NUMBER}?text=${WA_MESSAGE}`}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[#1A8FBB] hover:bg-[#0F6E95] text-white text-sm font-semibold px-5 py-2 rounded-lg transition-all duration-200 hover:shadow-lg hover:shadow-[#1A8FBB]/30"
          >
            Cotiza
          </a>
        </nav>

        <button
          className="md:hidden text-white p-1"
          onClick={() => {
            setMenuOpen(!menuOpen);
            setMobileMueblesOpen(false);
            setMobileServiciosOpen(false);
          }}
          aria-label="Toggle menu"
        >
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {menuOpen && (
        <div className="md:hidden bg-[#0B2545]/98 backdrop-blur-md border-t border-white/10">
          <div className="px-5 py-4 flex flex-col gap-4">
            <div>
              <button
                type="button"
                className="w-full text-left text-white/90 font-semibold py-1"
                onClick={() => setMobileMueblesOpen((v) => !v)}
              >
                Muebles
              </button>
              {mobileMueblesOpen && (
                <div className="mt-2 pl-3 border-l border-white/10 flex flex-col bg-white/5 rounded-xl py-2">
                  {mueblesItems.map((item) => (
                    <Link
                      key={item.label}
                      to={item.to}
                      className="text-white/70 hover:text-white py-2 transition-colors"
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
                className="w-full text-left text-white/90 font-semibold py-1"
                onClick={() => setMobileServiciosOpen((v) => !v)}
              >
                Servicios
              </button>
              {mobileServiciosOpen && (
                <div className="mt-2 pl-3 border-l border-white/10 flex flex-col bg-white/5 rounded-xl py-2">
                  {serviciosItems.map((item) => (
                    <a
                      key={item.label}
                      href={item.href}
                      className="text-white/70 hover:text-white py-2 transition-colors"
                      onClick={() => setMenuOpen(false)}
                    >
                      {item.label}
                    </a>
                  ))}
                </div>
              )}
            </div>

            {catalogoLink.href ? (
              <a
                href={catalogoLink.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/80 hover:text-white font-medium py-1 transition-colors"
                onClick={() => setMenuOpen(false)}
              >
                {catalogoLink.label}
              </a>
            ) : (
              <span className="text-white/50 font-medium py-1">
                {catalogoLink.label}
              </span>
            )}

            <a
              href={`https://wa.me/${WA_NUMBER}?text=${WA_MESSAGE}`}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#1A8FBB] text-white font-semibold text-center py-3 rounded-lg mt-2"
              onClick={() => setMenuOpen(false)}
            >
              Cotiza
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
