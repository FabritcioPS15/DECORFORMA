import { Star, Quote } from 'lucide-react';
import { Reveal } from './Reveal';
import { CountUp } from './CountUp';

const testimonials = [
  {
    name: 'María Fernández',
    role: 'Propietaria de depto, Lima',
    avatar: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=150',
    text: 'Increíble trabajo. El closet de mi cuarto quedó exactamente como lo imaginé. El equipo fue muy profesional desde el primer contacto hasta la instalación.',
    rating: 5,
  },
  {
    name: 'Carlos Mendoza',
    role: 'Gerente de empresa, Miraflores',
    avatar: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=150',
    text: 'Reformamos toda nuestra oficina con muebles de Decorforma. El resultado superó las expectativas. Calidad premium y entrega puntual. 100% recomendados.',
    rating: 5,
  },
  {
    name: 'Lucía Torres',
    role: 'Arquitecta de interiores',
    avatar: 'https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=150',
    text: 'Como profesional del diseño, valoro la precisión y los acabados. Decorforma cumple con creces. Ya los he recomendado a varios de mis clientes.',
    rating: 5,
  },
];

const stats = [
  { value: '+500', label: 'Proyectos completados' },
  { value: '8+', label: 'Años en el mercado' },
  { value: '4.9/5', label: 'Calificación promedio' },
  { value: '100%', label: 'Clientes satisfechos' },
];

export default function Testimonials() {
  return (
    <section className="py-24 bg-white border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-6">
        <Reveal width="100%">
          <div className="text-center mb-16">
            <span className="text-decor-accent text-[10px] font-black uppercase tracking-[0.4em] mb-4 block">
              Testimonios
            </span>
            <h2 className="text-4xl md:text-5xl font-serif text-decor-navy mt-2 mb-4 italic">
              Excelencia reconocida
            </h2>
            <p className="text-gray-500 max-w-xl mx-auto leading-relaxed font-light text-lg">
              La satisfacción de nuestros clientes es nuestra mejor carta de presentación.
            </p>
          </div>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-20">
          {testimonials.map((t, i) => (
            <Reveal key={t.name} delay={i * 0.1} width="100%">
              <div className="bg-gray-50 rounded-none p-10 border border-gray-100 hover:shadow-xl transition-all duration-500 h-full flex flex-col justify-between text-center sm:text-left items-center sm:items-start">
                <div>
                  <Quote size={24} className="text-decor-accent/40 mb-6 mx-auto sm:mx-0" />
                  <p className="text-decor-navy text-lg leading-relaxed mb-8 font-serif italic">
                    "{t.text}"
                  </p>
                </div>
                <div className="flex flex-col items-center sm:items-start w-full">
                  <div className="flex items-center justify-center sm:justify-start gap-1 mb-6 w-full">
                    {Array.from({ length: t.rating }).map((_, idx) => (
                      <Star key={idx} size={14} className="fill-decor-accent text-decor-accent" />
                    ))}
                  </div>
                  <div className="flex flex-col sm:flex-row items-center gap-4">
                    <img
                      src={t.avatar}
                      alt={t.name}
                      className="w-12 h-12 rounded-none object-cover grayscale-[0.5]"
                    />
                    <div>
                      <p className="font-bold text-decor-navy tracking-wide text-sm">{t.name}</p>
                      <p className="text-gray-400 text-xs tracking-widest uppercase mt-1 sm:mt-0">{t.role}</p>
                    </div>
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-1">
          {stats.map((s, i) => (
            <Reveal key={s.label} delay={0.4 + (i * 0.1)} width="100%">
              <div className="bg-decor-navy rounded-none p-10 text-center flex flex-col justify-center h-full border border-white/5">
                <p className="text-4xl md:text-5xl font-serif text-white mb-2">
                  <CountUp value={s.value} />
                </p>
                <p className="text-decor-accent text-[10px] font-black uppercase tracking-[0.2em]">{s.label}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
