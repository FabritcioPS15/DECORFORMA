import { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown, ChevronRight, LayoutGrid, Wrench, Phone, Info, Home, Palette, Hammer, ShieldCheck, Box, MessageSquare } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const MotionLink = motion(Link);

export default function Navbar() {
  const location = useLocation();
  const [menuOpen, setMenuOpen] = useState(false);
  const [desktopDropdown, setDesktopDropdown] = useState<'catalogo' | 'servicios' | null>(null);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  const catalogoCategories = [
    {
      title: "Mobiliario Residencial",
      items: [
        { label: 'Cocinas de Lujo', to: '/categoria/cocina', desc: 'Sistemas integrales con acabados premium.', icon: Home },
        { label: 'Dormitorios & Closets', to: '/categoria/dormitorio', desc: 'Optimización y confort a medida.', icon: Box },
        { label: 'Salas & TV', to: '/categoria/sala', desc: 'Centros de entretenimiento modernos.', icon: LayoutGrid },
      ]
    },
    {
      title: "Espacios Profesionales",
      items: [
        { label: 'Oficinas Ejecutivas', to: '/categoria/oficina', desc: 'Mobiliario para alta productividad.', icon: Wrench },
        { label: 'Comercios', to: '/categoria/comercios', desc: 'Exhibidores y puntos de venta.', icon: Palette },
        { label: 'Bibliotecas', to: '/categoria/bibliotecas', desc: 'Estanterías y zonas de estudio.', icon: Info },
      ]
    }
  ];

  const serviciosList = [
    { label: 'Diseño 3D Personalizado', to: '/servicios', desc: 'Visualiza tu espacio antes de construir.', icon: Palette },
    { label: 'Carpintería de Precisión', to: '/servicios', desc: 'Mano de obra calificada en melamina.', icon: Hammer },
    { label: 'Instalación Garantizada', to: '/servicios', desc: 'Montaje profesional y detallado.', icon: ShieldCheck },
    { label: 'Asesoría Técnica', to: '/servicios', desc: 'Expertos a tu disposición.', icon: MessageSquare },
  ];

  useEffect(() => {
    setMenuOpen(false);
    setDesktopDropdown(null);
  }, [location.pathname]);

  const handleMouseEnter = (type: 'catalogo' | 'servicios') => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    setDesktopDropdown(type);
  };

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setDesktopDropdown(null);
    }, 200);
  };

  const isActive = (path: string) => location.pathname === path;

  return (
    <>
      <motion.header
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
        className="fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-in-out bg-white shadow-[0_10px_30px_rgba(0,0,0,0.05)] py-3 border-b border-gray-100"
      >
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between relative">
          {/* Logo */}
          <Link 
            to="/" 
            className="flex items-center gap-2 group"
            onClick={() => setDesktopDropdown(null)}
          >
            <img 
              src="/assets/images/DecorformaLogo.png" 
              alt="Decorforma" 
              className="h-14 md:h-16 w-auto object-contain transition-transform duration-500 group-hover:scale-105"
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-2">
            <NavLink to="/" active={isActive('/')} onClick={() => setDesktopDropdown(null)}>Inicio</NavLink>
            <NavLink to="/quienes-somos" active={isActive('/quienes-somos')} onClick={() => setDesktopDropdown(null)}>Nosotros</NavLink>
            
            {/* MegaMenu Triggers */}
            <button 
              onMouseEnter={() => handleMouseEnter('catalogo')}
              onMouseLeave={handleMouseLeave}
              className={`flex items-center gap-1.5 px-4 py-2 text-[15px] font-bold tracking-wide transition-all duration-300 text-black/80 hover:text-black ${desktopDropdown === 'catalogo' ? 'text-black opacity-100' : ''}`}
            >
              Catálogo
              <motion.div animate={{ rotate: desktopDropdown === 'catalogo' ? 180 : 0 }} transition={{ duration: 0.3 }}>
                <ChevronDown size={14} />
              </motion.div>
            </button>

            <button 
              onMouseEnter={() => handleMouseEnter('servicios')}
              onMouseLeave={handleMouseLeave}
              className={`flex items-center gap-1.5 px-4 py-2 text-[15px] font-bold tracking-wide transition-all duration-300 text-black/80 hover:text-black ${desktopDropdown === 'servicios' ? 'text-black opacity-100' : ''}`}
            >
              Servicios
              <motion.div animate={{ rotate: desktopDropdown === 'servicios' ? 180 : 0 }} transition={{ duration: 0.3 }}>
                <ChevronDown size={14} />
              </motion.div>
            </button>

            <NavLink to="/proyectos" active={isActive('/proyectos')} onClick={() => setDesktopDropdown(null)}>Proyectos</NavLink>

            <MotionLink
              to="/contacto"
              onClick={() => setDesktopDropdown(null)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="ml-4 px-7 py-2.5 rounded-none font-bold text-sm transition-all duration-300 bg-decor-navy text-white hover:bg-decor-navy/90 shadow-xl shadow-decor-navy/10"
            >
              Contáctanos
            </MotionLink>
          </nav>

          {/* Global MegaMenu Container - Perfectly Centered relative to Content */}
          <AnimatePresence>
            {desktopDropdown && (
              <div 
                className="absolute top-full left-0 right-0 mt-[1px] z-50 pointer-events-auto"
                onMouseEnter={() => {
                  if (timeoutRef.current) clearTimeout(timeoutRef.current);
                }}
                onMouseLeave={handleMouseLeave}
              >
                <div className="max-w-7xl mx-auto px-6 flex justify-center">
                  <MegaMenu 
                    type={desktopDropdown}
                    onClose={() => setDesktopDropdown(null)}
                  />
                </div>
              </div>
            )}
          </AnimatePresence>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 rounded-none transition-colors text-decor-navy hover:bg-gray-100"
            onClick={() => setMenuOpen(true)}
          >
            <Menu size={28} />
          </button>
        </div>
      </motion.header>

      {/* Mobile Sidebar */}
      <AnimatePresence>
        {menuOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setMenuOpen(false)}
              className="fixed inset-0 bg-decor-navy/20 backdrop-blur-md z-[60]"
            />
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              className="fixed right-0 top-0 bottom-0 w-[300px] bg-white z-[70] shadow-2xl flex flex-col"
            >
              <div className="p-6 flex items-center justify-between border-b border-gray-100">
                <img 
                  src="/assets/images/DecorformaLogo.png" 
                  alt="Decorforma" 
                  className="h-14 w-auto object-contain"
                />
                <button onClick={() => setMenuOpen(false)} className="p-2 hover:bg-gray-100 rounded-none transition-colors">
                  <X size={24} className="text-gray-500" />
                </button>
              </div>

              <div className="flex-1 overflow-y-auto py-4 px-4 space-y-1">
                <MobileNavItem to="/" icon={Home} label="Inicio" active={isActive('/')} onClick={() => setMenuOpen(false)} />
                <MobileNavItem to="/quienes-somos" icon={Info} label="Nosotros" active={isActive('/quienes-somos')} onClick={() => setMenuOpen(false)} />
                <MobileNavItem to="/catalogo" icon={LayoutGrid} label="Catálogo" active={isActive('/catalogo')} onClick={() => setMenuOpen(false)} />
                <MobileNavItem to="/servicios" icon={Wrench} label="Servicios" active={isActive('/servicios')} onClick={() => setMenuOpen(false)} />
                <MobileNavItem to="/proyectos" icon={Hammer} label="Proyectos" active={isActive('/proyectos')} onClick={() => setMenuOpen(false)} />
              </div>

              <div className="p-6 border-t border-gray-100">
                <Link
                  to="/contacto"
                  onClick={() => setMenuOpen(false)}
                  className="w-full flex items-center justify-center gap-2 bg-decor-navy text-white py-4 rounded-none font-bold shadow-xl shadow-decor-navy/20"
                >
                  <Phone size={18} />
                  Solicitar Cotización
                </Link>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}

function NavLink({ to, children, active, onClick }: any) {
  return (
    <Link
      to={to}
      onClick={onClick}
      className="relative px-4 py-2 text-[15px] font-bold tracking-wide transition-all duration-300 group text-black/80 hover:text-black"
    >
      {children}
      <motion.div 
        className="absolute bottom-0 left-4 right-4 h-[3px] bg-decor-navy rounded-none"
        initial={{ scaleX: 0 }}
        animate={{ scaleX: active ? 1 : 0 }}
        whileHover={{ scaleX: 1 }}
        transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
      />
    </Link>
  );
}

function MegaMenu({ type, onClose }: { type: 'catalogo' | 'servicios', onClose: () => void }) {
  const isCatalogo = type === 'catalogo';
  
  return (
    <motion.div
      initial={{ opacity: 0, y: 10, scale: 0.98 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      exit={{ opacity: 0, y: 10, scale: 0.98 }}
      transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
      className="w-[750px] bg-white shadow-[0_20px_40px_rgba(0,0,0,0.1)] border border-gray-100 flex rounded-none overflow-hidden z-50"
    >
      {/* Links Area */}
      <div className="flex-1 p-8 grid grid-cols-2 gap-10 bg-white">
        {isCatalogo ? (
          <>
            <div className="space-y-5">
              <h4 className="text-[10px] font-black uppercase tracking-[0.2em] text-gray-400">Residencial</h4>
              <ul className="space-y-4">
                <MenuLink to="/categoria/cocina" label="Cocinas Premium" onClick={onClose} />
                <MenuLink to="/categoria/dormitorio" label="Dormitorios" onClick={onClose} />
                <MenuLink to="/categoria/sala" label="Salas & TV" onClick={onClose} />
              </ul>
            </div>
            <div className="space-y-5">
              <h4 className="text-[10px] font-black uppercase tracking-[0.2em] text-gray-400">Corporativo</h4>
              <ul className="space-y-4">
                <MenuLink to="/categoria/oficina" label="Oficinas" onClick={onClose} />
                <MenuLink to="/categoria/comercios" label="Locales" onClick={onClose} />
                <MenuLink to="/categoria/madera" label="Madera Fina" onClick={onClose} />
              </ul>
            </div>
          </>
        ) : (
          <div className="col-span-2 grid grid-cols-2 gap-x-10 gap-y-5">
             <MenuLink to="/servicios" label="Diseño 3D" onClick={onClose} />
             <MenuLink to="/servicios" label="Carpintería" onClick={onClose} />
             <MenuLink to="/servicios" label="Construcción" onClick={onClose} />
             <MenuLink to="/servicios" label="Mantenimiento" onClick={onClose} />
          </div>
        )}
      </div>

      {/* Featured Photo Area */}
      <div className="w-[280px] relative overflow-hidden group">
        <motion.div
          initial={{ scale: 1.1, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="h-full w-full"
        >
          <img 
            src={isCatalogo 
              ? "https://images.pexels.com/photos/2062426/pexels-photo-2062426.jpeg?auto=compress&cs=tinysrgb&w=600" 
              : "https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=600"
            } 
            alt="Featured" 
            className="h-full w-full object-cover grayscale-[0.2] group-hover:grayscale-0 transition-all duration-700"
          />
          <div className="absolute inset-0 bg-decor-navy/10" />
          <div className="absolute bottom-5 left-5 right-5">
            <p className="text-white text-[10px] font-black uppercase tracking-widest mb-1">Decorforma</p>
            <p className="text-white/80 text-[11px] font-serif italic">Arquitectura Premium</p>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
}

function MenuLink({ to, label, onClick }: { to: string, label: string, onClick: () => void }) {
  return (
    <li>
      <Link 
        to={to} 
        onClick={onClick}
        className="group flex items-center justify-between py-1 transition-all"
      >
        <span className="text-[13px] font-bold text-decor-navy group-hover:text-decor-accent transition-colors">
          {label}
        </span>
        <ChevronRight size={10} className="text-gray-300 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
      </Link>
    </li>
  );
}

function MobileNavItem({ to, label, icon: Icon, active, onClick }: any) {
  return (
    <Link
      to={to}
      onClick={onClick}
      className={`flex items-center gap-3 px-4 py-3.5 rounded-none transition-all ${
        active 
          ? 'bg-decor-navy/5 text-decor-navy font-bold border-l-2 border-decor-navy' 
          : 'text-gray-600 hover:bg-gray-50'
      }`}
    >
      {Icon && <Icon size={20} className={active ? 'text-decor-navy' : 'text-gray-400'} />}
      <span className="text-[16px]">{label}</span>
      {active && <div className="ml-auto w-1.5 h-1.5 rounded-none bg-decor-accent" />}
    </Link>
  );
}
