import { Phone, Mail, MapPin, Instagram, Facebook, Youtube } from 'lucide-react';
import { Link } from 'react-router-dom';
import { CATALOG_2026_URL, WA_MESSAGE, WA_NUMBER, FACEBOOK_URL, INSTAGRAM_URL, YOUTUBE_URL } from '../data/site';

export default function Footer() {
  const year = new Date().getFullYear();

  const mueblesItems = [
    { label: 'Cocinas de Lujo', to: '/categoria/cocina' },
    { label: 'Salas & Centros de TV', to: '/categoria/sala' },
    { label: 'Dormitorios & Closets', to: '/categoria/dormitorio' },
    { label: 'Espacios de Oficina', to: '/categoria/oficina' },
    { label: 'Comercios & Instituciones', to: '/categoria/comercios' },
  ];

  const serviciosItems = [
    { label: 'Diseño 3D', to: '/servicios' },
    { label: 'Carpintería', to: '/servicios' },
    { label: 'Muebles a Medida', to: '/servicios' },
  ];

  return (
    <footer className="bg-white text-decor-navy border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-6 py-20">
        {/* Mobile Version */}
        <div className="lg:hidden flex flex-col gap-12">
          {/* Brand Section */}
          <div className="text-center">
            <div className="flex items-center justify-center mb-6">
              <img 
                src="/assets/images/DecorformaLogo.png" 
                alt="Decorforma" 
                className="h-16 w-auto object-contain"
              />
            </div>
            <p className="text-gray-500 text-sm leading-relaxed mb-8 px-4 max-w-sm mx-auto">
              Estudio de arquitectura y especialistas en diseño y fabricación de muebles de melamina premium a medida.
            </p>
            <a
              href={`https://wa.me/${WA_NUMBER}?text=${WA_MESSAGE}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center bg-decor-navy hover:bg-decor-navy/90 text-white text-sm font-bold px-8 py-4 rounded-none transition-all duration-300 w-full"
            >
              Cotiza por WhatsApp
            </a>
            <div className="flex gap-4 justify-center mt-8">
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
                  className="w-12 h-12 rounded-none border border-gray-100 hover:bg-decor-navy hover:text-white flex items-center justify-center transition-all duration-300 text-gray-400"
                >
                  <Icon size={20} />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links Grid */}
          <div className="grid grid-cols-2 gap-10 text-center">
            <div>
              <h4 className="font-black text-[10px] uppercase tracking-[0.2em] text-gray-400 mb-5">Catálogo</h4>
              <ul className="space-y-3 text-gray-500 text-[13px]">
                {mueblesItems.slice(0, 4).map((item) => (
                  <li key={item.label}>
                    <Link to={item.to} className="hover:text-decor-accent transition-colors font-medium">
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="font-black text-[10px] uppercase tracking-[0.2em] text-gray-400 mb-5">Servicios</h4>
              <ul className="space-y-3 text-gray-500 text-[13px]">
                {serviciosItems.map((item) => (
                  <li key={item.label}>
                    <Link to={item.to} className="hover:text-decor-accent transition-colors font-medium">
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Contact */}
          <div className="bg-gray-50 p-8 rounded-none flex flex-col items-center text-center">
            <h4 className="font-black text-[10px] uppercase tracking-[0.2em] text-decor-navy mb-5">Contáctanos</h4>
            <div className="space-y-4 text-[13px] flex flex-col items-center">
              <a href="tel:+51999999999" className="flex items-center gap-3 text-gray-600 hover:text-decor-accent transition-colors">
                <Phone size={16} className="text-decor-navy" />
                +51 999 999 999
              </a>
              <a href="mailto:info@decorforma.pe" className="flex items-center gap-3 text-gray-600 hover:text-decor-accent transition-colors">
                <Mail size={16} className="text-decor-navy" />
                info@decorforma.pe
              </a>
              <div className="flex flex-col items-center gap-2 text-gray-600 mt-2">
                <MapPin size={16} className="text-decor-navy" />
                <span>Av. Principal 123, Lima, Perú</span>
              </div>
            </div>
          </div>
        </div>

        {/* Desktop Version */}
        <div className="hidden lg:grid lg:grid-cols-4 gap-16 mb-20">
          <div className="col-span-1">
            <div className="flex items-center mb-8">
              <img 
                src="/assets/images/DecorformaLogo.png" 
                alt="Decorforma" 
                className="h-20 w-auto object-contain"
              />
            </div>
            <p className="text-gray-500 text-sm leading-relaxed mb-8">
              Transformamos tus espacios con diseño arquitectónico y mobiliario de melamina premium a medida. Más de 10 años de excelencia en Perú.
            </p>
            <div className="flex gap-4">
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
                  className="w-10 h-10 border border-gray-100 text-gray-400 hover:bg-decor-navy hover:text-white flex items-center justify-center transition-all duration-300"
                >
                  <Icon size={18} />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="font-black text-[11px] uppercase tracking-[0.2em] text-gray-400 mb-8">Catálogo</h4>
            <ul className="space-y-4 text-gray-500 text-sm">
              <li><Link to="/" className="hover:text-decor-navy transition-colors">Inicio</Link></li>
              <li><Link to="/quienes-somos" className="hover:text-decor-navy transition-colors">Nosotros</Link></li>
              {mueblesItems.map((item) => (
                <li key={item.label}>
                  <Link to={item.to} className="hover:text-decor-navy transition-colors">{item.label}</Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-black text-[11px] uppercase tracking-[0.2em] text-gray-400 mb-8">Servicios</h4>
            <ul className="space-y-4 text-gray-500 text-sm">
              {serviciosItems.map((item) => (
                <li key={item.label}>
                  <Link to={item.to} className="hover:text-decor-navy transition-colors">{item.label}</Link>
                </li>
              ))}
              <li className="pt-4">
                {CATALOG_2026_URL && (
                  <a
                    href={CATALOG_2026_URL}
                    className="inline-flex items-center justify-center bg-gray-50 hover:bg-gray-100 text-decor-navy text-xs font-bold px-6 py-3 transition-colors"
                  >
                    Ver Catálogo 2026
                  </a>
                )}
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-black text-[11px] uppercase tracking-[0.2em] text-gray-400 mb-8">Contacto</h4>
            <ul className="space-y-5 text-sm">
              <li>
                <a href="tel:+51999999999" className="flex items-center gap-4 text-gray-600 hover:text-decor-navy transition-colors">
                  <div className="w-10 h-10 bg-gray-50 flex items-center justify-center text-decor-navy">
                    <Phone size={18} />
                  </div>
                  <span className="font-medium">+51 999 999 999</span>
                </a>
              </li>
              <li>
                <a href="mailto:info@decorforma.pe" className="flex items-center gap-4 text-gray-600 hover:text-decor-navy transition-colors">
                  <div className="w-10 h-10 bg-gray-50 flex items-center justify-center text-decor-navy">
                    <Mail size={18} />
                  </div>
                  <span className="font-medium">info@decorforma.pe</span>
                </a>
              </li>
              <li className="flex items-start gap-4 text-gray-600">
                <div className="w-10 h-10 bg-gray-50 flex items-center justify-center text-decor-navy flex-shrink-0">
                  <MapPin size={18} />
                </div>
                <span className="font-medium pt-2 leading-relaxed">Av. Principal 123, Lima, Perú</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-100 pt-10 flex flex-col md:flex-row items-center justify-between gap-6">
          <p className="text-gray-400 text-[11px] font-medium tracking-wide">
            © {year} DECORFORMA. TODOS LOS DERECHOS RESERVADOS.
          </p>
          <div className="flex gap-8 text-gray-400 text-[11px] font-bold">
            <a href="#" className="hover:text-decor-navy transition-colors">POLÍTICA DE PRIVACIDAD</a>
            <a href="#" className="hover:text-decor-navy transition-colors">TÉRMINOS Y CONDICIONES</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
