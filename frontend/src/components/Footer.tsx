import { Phone, Mail, MapPin, Instagram, Facebook, Youtube, Zap } from 'lucide-react';
import { Link } from 'react-router-dom';
import { CATALOG_2026_URL, WA_MESSAGE, WA_NUMBER, FACEBOOK_URL, INSTAGRAM_URL, YOUTUBE_URL } from '../data/site';

export default function Footer() {
  const year = new Date().getFullYear();

  const mueblesItems = [
    { label: 'Cocinas de Lujo', to: '/categoria/cocina' },
    { label: 'Salas & Centros de TV', to: '/categoria/sala' },
    { label: 'Dormitorios & Closets', to: '/categoria/dormitorio' },
    { label: 'Espacios de Oficina', to: '/categoria/oficina' },
    { label: 'Instituciones Educativas', to: '/categoria/educativo' },
  ];

  const serviciosItems = [
    { label: 'Diseño 3D', to: '/servicios/diseno' },
    { label: 'Trabajos a Domicilio', to: '/servicios/domicilio' },
    { label: 'Muebles a Medida', to: '/servicios/personalizados' },
  ];

  return (
    <footer className="bg-[#061230] text-white">
      <div className="max-w-6xl mx-auto px-5 py-12">
        {/* Mobile Version */}
        <div className="lg:hidden flex flex-col gap-8 mb-8">
          {/* Brand Section */}
          <div className="text-center">
            <div className="flex items-center justify-center gap-2 mb-4">
              <div className="w-8 h-8 rounded-md bg-[#1A8FBB] flex items-center justify-center">
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                  <rect x="2" y="2" width="7" height="7" rx="1" fill="white" />
                  <rect x="11" y="2" width="7" height="7" rx="1" fill="white" opacity="0.6" />
                  <rect x="2" y="11" width="7" height="7" rx="1" fill="white" opacity="0.6" />
                  <rect x="11" y="11" width="7" height="7" rx="1" fill="white" />
                </svg>
              </div>
              <span className="font-bold text-xl tracking-tight">
                DECOR<span className="text-[#22BDDD]">FORMA</span>
              </span>
            </div>
            <p className="text-white/50 text-sm leading-relaxed mb-6 px-4">
              Especialistas en diseño y fabricación de muebles de melamina a medida.
            </p>
            <a
              href={`https://wa.me/${WA_NUMBER}?text=${WA_MESSAGE}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center bg-[#1A8FBB] hover:bg-[#0F6E95] text-white text-sm font-semibold px-6 py-3 rounded-lg transition-all duration-200 hover:shadow-lg hover:shadow-[#1A8FBB]/30 w-full max-w-xs"
            >
              Cotiza por WhatsApp
            </a>
            <div className="flex gap-3 justify-center mt-6">
              {[
                { icon: Instagram, href: INSTAGRAM_URL, label: 'Instagram' },
                { icon: Facebook, href: FACEBOOK_URL, label: 'Facebook' },
                { icon: Youtube, href: YOUTUBE_URL, label: 'YouTube' },
              ].map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="w-10 h-10 rounded-lg bg-white/10 hover:bg-[#1A8FBB] flex items-center justify-center transition-colors duration-200"
                >
                  <Icon size={18} />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links Grid */}
          <div className="grid grid-cols-2 gap-6">
            <div>
              <h4 className="font-bold text-sm uppercase tracking-widest text-white/80 mb-3">Catálogo</h4>
              <ul className="space-y-2 text-white/50 text-sm">
                {mueblesItems.slice(0, 3).map((item) => (
                  <li key={item.label}>
                    <Link to={item.to} className="hover:text-[#22BDDD] transition-colors">
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-sm uppercase tracking-widest text-white/80 mb-3">Servicios</h4>
              <ul className="space-y-2 text-white/50 text-sm">
                {serviciosItems.map((item) => (
                  <li key={item.label}>
                    <Link to={item.to} className="hover:text-[#22BDDD] transition-colors">
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Contact & Catalog */}
          <div className="space-y-4">
            <div className="bg-white/5 rounded-xl p-4">
              <h4 className="font-bold text-sm uppercase tracking-widest text-white/80 mb-3">Contáctanos</h4>
              <div className="space-y-3 text-sm">
                <a href="tel:+51999999999" className="flex items-center gap-3 text-white/50 hover:text-[#22BDDD] transition-colors">
                  <Phone size={15} className="text-[#1A8FBB]" />
                  +51 999 999 999
                </a>
                <a href="mailto:info@decorforma.pe" className="flex items-center gap-3 text-white/50 hover:text-[#22BDDD] transition-colors">
                  <Mail size={15} className="text-[#1A8FBB]" />
                  info@decorforma.pe
                </a>
                <div className="flex items-center gap-3 text-white/50">
                  <MapPin size={15} className="text-[#1A8FBB]" />
                  Av. Principal 123, Lima
                </div>
              </div>
            </div>

            {CATALOG_2026_URL && (
              <a
                href={CATALOG_2026_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center w-full bg-white/10 hover:bg-white/15 text-white text-sm font-semibold px-4 py-3 rounded-lg transition-colors"
              >
                Ver Catálogo 2026
              </a>
            )}
          </div>
        </div>

        {/* Desktop Version */}
        <div className="hidden lg:flex lg:flex-row lg:items-start gap-12 mb-12">
          <div className="lg:flex-1 lg:max-w-md">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 rounded-md bg-[#1A8FBB] flex items-center justify-center">
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                  <rect x="2" y="2" width="7" height="7" rx="1" fill="white" />
                  <rect x="11" y="2" width="7" height="7" rx="1" fill="white" opacity="0.6" />
                  <rect x="2" y="11" width="7" height="7" rx="1" fill="white" opacity="0.6" />
                  <rect x="11" y="11" width="7" height="7" rx="1" fill="white" />
                </svg>
              </div>
              <span className="font-bold text-xl tracking-tight">
                DECOR<span className="text-[#22BDDD]">FORMA</span>
              </span>
            </div>
            <p className="text-white/50 text-sm leading-relaxed max-w-xl mb-6">
              Especialistas en diseño, fabricación y comercialización de muebles
              de melamina a medida. Transformamos espacios con calidad y
              precisión desde hace más de 10 años.
            </p>
            <a
              href={`https://wa.me/${WA_NUMBER}?text=${WA_MESSAGE}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center bg-[#1A8FBB] hover:bg-[#0F6E95] text-white text-sm font-semibold px-5 py-2.5 rounded-lg transition-all duration-200 hover:shadow-lg hover:shadow-[#1A8FBB]/30"
            >
              Cotiza por WhatsApp
            </a>
            <div className="flex gap-3 mt-6">
              {[
                { icon: Instagram, href: INSTAGRAM_URL, label: 'Instagram' },
                { icon: Facebook, href: FACEBOOK_URL, label: 'Facebook' },
                { icon: Youtube, href: YOUTUBE_URL, label: 'YouTube' },
              ].map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="w-9 h-9 rounded-lg bg-white/10 hover:bg-[#1A8FBB] flex items-center justify-center transition-colors duration-200"
                >
                  <Icon size={16} />
                </a>
              ))}
            </div>
          </div>

          <div className="lg:w-[220px]">
            <h4 className="font-bold text-sm uppercase tracking-widest text-white/80 mb-5">
              Catálogo
            </h4>
            <ul className="space-y-3 text-white/50 text-sm">
              <li>
                <Link to="/" className="hover:text-[#22BDDD] transition-colors">
                  Inicio
                </Link>
              </li>
              <li>
                <Link to="/quienes-somos" className="hover:text-[#22BDDD] transition-colors">
                  Nosotros
                </Link>
              </li>
              {mueblesItems.map((item) => (
                <li key={item.label}>
                  <Link
                    to={item.to}
                    className="hover:text-[#22BDDD] transition-colors"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:w-[260px]">
            <h4 className="font-bold text-sm uppercase tracking-widest text-white/80 mb-5">
              Servicios
            </h4>
            <ul className="space-y-3 text-white/50 text-sm">
              {serviciosItems.map((item) => (
                <li key={item.label}>
                  <Link
                    to={item.to}
                    className="hover:text-[#22BDDD] transition-colors"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
              <li className="pt-2">
                {CATALOG_2026_URL ? (
                  <a
                    href={CATALOG_2026_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center w-full bg-white/10 hover:bg-white/15 text-white text-sm font-semibold px-4 py-2 rounded-lg transition-colors"
                  >
                    Catálogo 2026
                  </a>
                ) : (
                  <span className="inline-flex items-center justify-center w-full bg-white/5 text-white/50 text-sm font-semibold px-4 py-2 rounded-lg">
                    Catálogo 2026
                  </span>
                )}
              </li>
            </ul>
          </div>

          <div className="lg:w-[260px]">
            <h4 className="font-bold text-sm uppercase tracking-widest text-white/80 mb-5">
              Contáctanos
            </h4>
            <ul className="space-y-4 text-sm">
              <li>
                <a
                  href="tel:+51999999999"
                  className="flex items-start gap-3 text-white/50 hover:text-[#22BDDD] transition-colors"
                >
                  <Phone size={15} className="mt-0.5 flex-shrink-0 text-[#1A8FBB]" />
                  +51 999 999 999
                </a>
              </li>
              <li>
                <a
                  href="mailto:info@decorforma.pe"
                  className="flex items-start gap-3 text-white/50 hover:text-[#22BDDD] transition-colors"
                >
                  <Mail size={15} className="mt-0.5 flex-shrink-0 text-[#1A8FBB]" />
                  info@decorforma.pe
                </a>
              </li>
              <li>
                <div className="flex items-start gap-3 text-white/50">
                  <MapPin size={15} className="mt-0.5 flex-shrink-0 text-[#1A8FBB]" />
                  Av. Principal 123, Lima, Perú
                </div>
              </li>
              <li className="pt-4 border-t border-white/5 mt-4">
                <Link
                  to="/quienes-somos"
                  className="text-white font-bold hover:text-[#22BDDD] transition-colors flex items-center gap-2"
                >
                  Conoce más sobre nosotros
                </Link>
              </li>
              <li className="pt-2">
                <Link
                  to="/catalogo"
                  className="text-white/50 hover:text-[#22BDDD] transition-colors flex items-center gap-2"
                >
                  Proyectos realizados
                </Link>
              </li>
            </ul>
            <div className="mt-5 bg-white/5 rounded-xl p-4">
              <p className="text-white/60 text-xs font-medium mb-1">Horario de atención</p>
              <p className="text-white/40 text-xs">Lun - Vie: 8am - 6pm</p>
              <p className="text-white/40 text-xs">Sáb: 9am - 1pm</p>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 pt-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-white/30 text-xs">
            © {year} DECORFORMA. Todos los derechos reservados.
          </p>
          <div className="flex gap-5 text-white/30 text-xs">
            <a href="#" className="hover:text-white/60 transition-colors">
              Política de privacidad
            </a>
            <a href="#" className="hover:text-white/60 transition-colors">
              Términos y condiciones
            </a>
          </div>
        </div>
      </div>
    </footer >
  );
}
