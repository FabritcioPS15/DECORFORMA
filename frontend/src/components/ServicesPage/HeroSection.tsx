import { Reveal } from '../Reveal';
import { FaWhatsapp } from 'react-icons/fa';
import { WA_NUMBER } from '../../data/site';

export function HeroSection() {
  return (
    <section className="relative h-[65vh] min-h-[550px] flex items-center overflow-hidden pt-20">
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1556911220-e15b29be8c8f?q=80&w=2000&auto=format&fit=crop"
          className="w-full h-full object-cover opacity-30 scale-105"
          alt="Nuestros Servicios"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#061230] via-[#061230]/60 to-transparent" />
      </div>

      <div className="relative max-w-6xl mx-auto px-5 w-full text-center">
        <Reveal y={30}>
          <span className="text-[#22BDDD] text-[12px] font-black uppercase tracking-[0.3em] mb-4 block">
            Nuestros Servicios
          </span>
          <h1 className="text-4xl md:text-7xl font-bold text-white mb-6 uppercase tracking-tighter">
            Soluciones <span className="text-[#22BDDD]">Profesionales</span>
          </h1>
          <p className="text-white/70 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed mb-10 font-light">
            Transformamos tus ideas en realidad con diseño personalizado, instalación a domicilio y muebles hechos a tu medida con precisión milimétrica.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href={`https://wa.me/${WA_NUMBER}?text=${encodeURIComponent('Hola Decorforma, estoy interesado en sus servicios profesionales y me gustaría realizar una consulta.')}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-3 bg-[#25D366] hover:bg-[#1fba57] text-white font-bold px-10 py-5 rounded-2xl transition-all shadow-xl shadow-green-900/40 hover:scale-105 active:scale-95 group"
            >
              <FaWhatsapp size={22} className="group-hover:rotate-12 transition-transform" />
              Cotizar mi Proyecto
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
