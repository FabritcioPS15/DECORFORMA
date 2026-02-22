import { Star, Quote } from 'lucide-react';
import { Reveal } from './Reveal';

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
    <section className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-5">
        <Reveal width="100%">
          <div className="text-center mb-14">
            <span className="text-[#1A8FBB] text-sm font-semibold uppercase tracking-widest">
              Testimonios
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0B2545] mt-2 mb-4">
              Lo que dicen nuestros clientes
            </h2>
            <p className="text-gray-500 max-w-xl mx-auto leading-relaxed">
              La satisfacción de nuestros clientes es nuestra mejor carta de presentación.
            </p>
          </div>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          {testimonials.map((t, i) => (
            <Reveal key={t.name} delay={i * 0.1} width="100%">
              <div className="bg-[#F4F8FC] rounded-2xl p-7 border border-gray-100 hover:shadow-lg transition-all duration-500 h-full">
                <Quote size={28} className="text-[#1A8FBB]/30 mb-4" />
                <p className="text-gray-600 text-sm leading-relaxed mb-6 italic">
                  "{t.text}"
                </p>
                <div className="flex items-center gap-1 mb-4">
                  {Array.from({ length: t.rating }).map((_, idx) => (
                    <Star key={idx} size={14} className="fill-amber-400 text-amber-400" />
                  ))}
                </div>
                <div className="flex items-center gap-3">
                  <img
                    src={t.avatar}
                    alt={t.name}
                    className="w-10 h-10 rounded-full object-cover"
                  />
                  <div>
                    <p className="font-bold text-[#0B2545] text-sm">{t.name}</p>
                    <p className="text-gray-400 text-xs">{t.role}</p>
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {stats.map((s, i) => (
            <Reveal key={s.label} delay={0.4 + (i * 0.1)} width="100%">
              <div className="bg-[#0B2545] rounded-2xl p-6 text-center">
                <p className="text-3xl font-extrabold text-[#22BDDD] mb-1">
                  {s.value}
                </p>
                <p className="text-white/60 text-xs font-medium">{s.label}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
