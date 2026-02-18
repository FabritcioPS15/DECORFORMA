import { MessageCircle, Ruler, ArrowRight } from 'lucide-react';
import { useInView } from '../hooks/useInView';

export default function CTA() {
  const { ref, inView } = useInView();

  return (
    <section className="py-20 bg-[#0B2545] relative overflow-hidden">
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-10 left-10 w-72 h-72 rounded-full bg-[#1A8FBB] blur-3xl" />
        <div className="absolute bottom-10 right-10 w-96 h-96 rounded-full bg-[#22BDDD] blur-3xl" />
      </div>

      <div
        ref={ref}
        className="relative z-10 max-w-4xl mx-auto px-5 text-center"
      >
        <div
          className={`transition-all duration-700 ${
            inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <span className="text-[#22BDDD] text-sm font-semibold uppercase tracking-widest">
            Empieza hoy
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white mt-3 mb-5 leading-tight">
            Tu espacio ideal está a un{' '}
            <span className="text-[#22BDDD]">mensaje de distancia</span>
          </h2>
          <p className="text-white/65 text-lg leading-relaxed max-w-2xl mx-auto mb-10">
            Recibe una cotización personalizada sin costo y sin compromiso. Nuestro
            equipo de diseño te asesora para encontrar la solución perfecta para
            tu espacio.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://wa.me/51999999999?text=Hola%2C%20quiero%20cotizar%20muebles%20de%20melamina"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-3 bg-[#25D366] hover:bg-[#1fba57] text-white font-bold px-8 py-4 rounded-xl shadow-lg shadow-green-900/30 transition-all duration-200 hover:shadow-xl hover:scale-105 text-base"
            >
              <MessageCircle size={20} />
              Cotizar por WhatsApp
            </a>
            <a
              href="#contacto"
              className="flex items-center justify-center gap-3 border-2 border-[#1A8FBB] text-white hover:bg-[#1A8FBB] font-bold px-8 py-4 rounded-xl transition-all duration-200 hover:scale-105 text-base gap-2"
            >
              <Ruler size={20} />
              Solicitar Diseño
              <ArrowRight size={18} />
            </a>
          </div>

          <p className="text-white/35 text-sm mt-8">
            Respuesta en menos de 2 horas en horario de atención
          </p>
        </div>
      </div>
    </section>
  );
}
