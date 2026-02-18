import { MessageCircle, Ruler, ArrowDown } from 'lucide-react';
import { useInView } from '../hooks/useInView';

export default function Hero() {
  const { ref, inView } = useInView();

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center overflow-hidden"
    >
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage:
            'url(https://images.pexels.com/photos/1643383/pexels-photo-1643383.jpeg?auto=compress&cs=tinysrgb&w=1600)',
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-r from-[#0B2545]/92 via-[#0B2545]/75 to-[#0B2545]/40" />

      <div
        ref={ref}
        className="relative z-10 max-w-6xl mx-auto px-5 pt-24 pb-20 w-full"
      >
        <div className="max-w-2xl">
          <div
            className={`inline-flex items-center gap-2 bg-[#1A8FBB]/20 border border-[#1A8FBB]/40 text-[#22BDDD] text-sm font-medium px-4 py-1.5 rounded-full mb-6 transition-all duration-700 ${
              inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`}
          >
            <span className="w-2 h-2 rounded-full bg-[#22BDDD] animate-pulse" />
            Fabricación 100% a medida
          </div>

          <h1
            className={`text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white leading-tight mb-6 transition-all duration-700 delay-100 ${
              inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
            }`}
          >
            Muebles de melamina que{' '}
            <span className="text-[#22BDDD]">transforman</span> tus espacios
          </h1>

          <p
            className={`text-lg text-white/75 leading-relaxed mb-10 max-w-xl transition-all duration-700 delay-200 ${
              inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
            }`}
          >
            Diseñamos, fabricamos e instalamos muebles de melamina a medida para
            hogares y empresas. Calidad premium, plazos cumplidos y acabados que
            marcan la diferencia.
          </p>

          <div
            className={`flex flex-col sm:flex-row gap-4 transition-all duration-700 delay-300 ${
              inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
            }`}
          >
            <a
              href="https://wa.me/51999999999?text=Hola%2C%20quiero%20cotizar%20muebles%20de%20melamina"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-3 bg-[#25D366] hover:bg-[#1fba57] text-white font-bold px-7 py-4 rounded-xl shadow-lg shadow-green-900/30 transition-all duration-200 hover:shadow-xl hover:scale-105 text-base"
            >
              <MessageCircle size={20} />
              Cotizar por WhatsApp
            </a>
            <a
              href="#contacto"
              className="flex items-center justify-center gap-3 bg-[#1A8FBB] hover:bg-[#0F6E95] text-white font-bold px-7 py-4 rounded-xl shadow-lg shadow-[#1A8FBB]/30 transition-all duration-200 hover:shadow-xl hover:scale-105 text-base"
            >
              <Ruler size={20} />
              Solicitar Diseño
            </a>
          </div>

          <div
            className={`flex flex-wrap items-center gap-6 mt-12 transition-all duration-700 delay-500 ${
              inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`}
          >
            {[
              { value: '+500', label: 'Proyectos entregados' },
              { value: '8+', label: 'Años de experiencia' },
              { value: '100%', label: 'Clientes satisfechos' },
            ].map((stat) => (
              <div key={stat.label} className="flex flex-col">
                <span className="text-2xl font-extrabold text-[#22BDDD]">
                  {stat.value}
                </span>
                <span className="text-white/60 text-xs font-medium">
                  {stat.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>

      <a
        href="#beneficios"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/50 hover:text-white transition-colors animate-bounce z-10"
        aria-label="Scroll hacia abajo"
      >
        <ArrowDown size={28} />
      </a>
    </section>
  );
}
