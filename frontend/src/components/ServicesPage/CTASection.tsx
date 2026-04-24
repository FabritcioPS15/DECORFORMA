import { Link } from 'react-router-dom';
import { Reveal } from '../Reveal';
import { ArrowRight, Home, Hammer } from 'lucide-react';

export function CTASection() {
  return (
    <section className="pb-32 px-5 mt-32">
      <Reveal y={20} width="100%">
        <div className="max-w-4xl mx-auto rounded-[3.5rem] bg-gradient-to-br from-[#0B2545] to-[#061230] border border-white/10 p-12 md:p-20 text-center shadow-2xl relative overflow-hidden">
          <div className="absolute inset-0 bg-white/5 backdrop-blur-3xl rounded-[3.5rem] pointer-events-none" />

          <div className="relative z-10">
            <div className="flex items-center justify-center mb-8">
              <Home className="text-[#22BDDD] mr-4" size={40} />
              <h2 className="text-3xl md:text-5xl font-bold text-white leading-none tracking-tighter uppercase">¿LISTO PARA <br />TRANSFORMAR?</h2>
            </div>
            <p className="text-white/50 mb-12 text-lg md:text-xl max-w-xl mx-auto font-light leading-relaxed">
              Cuéntanos sobre tu proyecto y te asesoraremos con la mejor solución técnica y estética.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Link
                to="/catalogo"
                className="inline-flex items-center justify-center gap-3 bg-white text-[#061230] font-black px-10 py-5 rounded-2xl transition-all shadow-xl hover:scale-105 active:scale-95 group text-sm"
              >
                VER CATÁLOGO
                <ArrowRight size={18} className="group-hover:translate-x-2 transition-transform" />
              </Link>
              <Link
                to="/editor"
                className="inline-flex items-center justify-center gap-3 border-2 border-[#22BDDD] text-[#22BDDD] hover:bg-[#22BDDD] hover:text-white font-black px-10 py-5 rounded-2xl transition-all hover:scale-105 active:scale-95 text-sm"
              >
                <Hammer size={22} />
                DISEÑAR AHORA
              </Link>
            </div>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
