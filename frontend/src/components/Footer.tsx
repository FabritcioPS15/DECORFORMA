import { Link, useLocation } from 'react-router-dom';
import { IoLogoInstagram, IoLogoFacebook, IoLogoYoutube, IoLogoWhatsapp, IoLogoTiktok, IoArrowForward } from 'react-icons/io5';
import { FACEBOOK_URL, INSTAGRAM_URL, YOUTUBE_URL } from '../data/site';

export default function Footer() {
  const location = useLocation();
  const year = new Date().getFullYear();

  const sections = [
    {
      title: 'Sobre Nosotros',
      links: [
        { label: 'Quienes Somos', to: '/quienes-somos' },
        { label: 'Contáctanos', to: '/#contacto' },
      ]
    },
    {
      title: 'Catálogo Decorforma',
      hub: '/catalogo',
      links: [
        { label: 'Cocinas', to: '/categoria/cocina' },
        { label: 'Salas', to: '/categoria/sala' },
      ]
    },
    {
      title: 'Servicios Decorforma',
      hub: '/servicios',
      links: [
        { label: 'Personaliza Tu Mueble', to: '/servicios/personalizados' },
        { label: 'Blog e Ideas', to: '#' },
      ]
    },
    {
      title: 'Legal',
      links: [
        { label: 'Aviso Legal', to: '#' },
        { label: 'Política de Cookies', to: '#' },
        { label: 'Política de Privacidad', to: '#' },
        { label: 'Libro de Reclamaciones', to: '#' },
      ]
    }
  ];

  return (
    <footer className="bg-white text-[#0B2545] border-t border-gray-100 py-20 pb-10">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="flex flex-col lg:flex-row justify-between gap-16 lg:gap-8 border-b border-gray-100 pb-20">

          {/* Links Section */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-x-8 gap-y-12 lg:flex-1">
            {sections.map((section) => (
              <div key={section.title}>
                {section.hub ? (
                  <Link to={section.hub} className="block group/title">
                    <h4 className="text-[12px] font-bold text-[#aaaaaa] mb-8 uppercase tracking-[0.15em] group-hover/title:text-[#22BDDD] transition-colors flex items-center gap-2">
                      {section.title}
                      <IoArrowForward className="opacity-0 group-hover/title:opacity-100 transition-all translate-x-[-10px] group-hover/title:translate-x-0" size={10} />
                    </h4>
                  </Link>
                ) : (
                  <h4 className="text-[12px] font-bold text-[#aaaaaa] mb-8 uppercase tracking-[0.15em]">
                    {section.title}
                  </h4>
                )}
                <ul className="flex flex-col gap-6">
                  {section.links.map((link) => {
                    const isActive = location.pathname === link.to;
                    return (
                      <li key={link.label}>
                        <Link
                          to={link.to}
                          className={`group relative text-[14px] text-[#222222] font-medium hover:text-[#22BDDD] transition-colors ${isActive ? 'text-[#22BDDD]' : ''}`}
                        >
                          {link.label}
                          <span className={`absolute -bottom-1 left-0 h-[1.5px] bg-[#22BDDD] transition-all duration-300 ${isActive ? 'w-full' : 'w-0 group-hover:w-full'}`} />
                        </Link>
                      </li>
                    );
                  })}
                </ul>
              </div>
            ))}
          </div>

          {/* Brand & Contact Section */}
          <div className="flex flex-col items-start lg:items-end text-left lg:text-right lg:w-1/3">
            <Link to="/" className="mb-4 block">
              <span className="text-[52px] font-black tracking-[-0.05em] text-[#0B2545] leading-none">
                DECORFORMA
              </span>
              {/* Note: I used Yolodecoro as in the image for perfect match or DECORFORMA? 
                  The user said "something like this" and the logo is the main thing. 
                  I should probably use DECORFORMA but keep the style. 
                  Wait, looking at the image, it says "Yolodecoro". 
                  I'll use DECORFORMA as it's the client's brand. */}
            </Link>

            <div className="flex flex-col gap-3 mb-10">
              <a href="tel:+51969961244" className="flex items-center lg:justify-end gap-2 text-[14px] text-[#444] font-medium hover:text-[#22BDDD] transition-colors">
                <IoLogoWhatsapp className="text-[#444]" size={16} />
                +51 969 961 244
              </a>
              <a href="mailto:ventas@decorforma.pe" className="flex items-center lg:justify-end gap-2 text-[14px] text-[#444] font-medium hover:text-[#22BDDD] transition-colors">
                ventas@decorforma.pe
              </a>
            </div>

            <div className="flex gap-3">
              {[
                { icon: IoLogoFacebook, href: FACEBOOK_URL },
                { icon: IoLogoInstagram, href: INSTAGRAM_URL },
                { icon: IoLogoYoutube, href: YOUTUBE_URL },
                { icon: IoLogoWhatsapp, href: '#' },
                { icon: IoLogoTiktok, href: '#' },
              ].map((social, i) => (
                <a
                  key={i}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center text-[#444] hover:bg-gray-50 transition-all duration-300"
                >
                  <social.icon size={16} />
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-[12px] text-[#888] font-medium">
            © {year} DECORFORMA. TODOS LOS DERECHOS RESERVADOS.
          </p>
          <div className="flex gap-6">
            <Link to="#" className="text-[12px] text-[#888] hover:text-[#22BDDD] transition-colors">Aviso Legal</Link>
            <Link to="#" className="text-[12px] text-[#888] hover:text-[#22BDDD] transition-colors">Privacidad</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
