import { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { useInView } from '../hooks/useInView';

const faqs = [
  {
    q: '¿Cuánto tiempo tarda la fabricación e instalación?',
    a: 'El tiempo varía según el proyecto. En promedio, la fabricación toma entre 7 y 15 días hábiles a partir de la aprobación del diseño y abono inicial. La instalación se coordina según disponibilidad.',
  },
  {
    q: '¿Trabajan en todo Lima?',
    a: 'Sí, atendemos toda Lima Metropolitana y callao sin costo adicional de traslado. Para proyectos en provincias, cotizamos el servicio de visita y instalación por separado.',
  },
  {
    q: '¿Cuál es el material que utilizan?',
    a: 'Trabajamos con melamina de alta densidad certificada, con acabados en decapé, brillo, mate y texturizados. Todos nuestros materiales son resistentes a la humedad y fáciles de limpiar.',
  },
  {
    q: '¿Ofrecen garantía en sus muebles?',
    a: 'Sí, todos nuestros productos tienen 2 años de garantía contra defectos de fabricación. En caso de inconvenientes, nuestro equipo visita tu domicilio sin costo.',
  },
  {
    q: '¿Puedo ver diseños antes de que fabriquen?',
    a: 'Absolutamente. Presentamos planos y renders 3D del proyecto para tu aprobación antes de iniciar la fabricación. Realizamos los ajustes necesarios hasta que estés 100% satisfecho.',
  },
  {
    q: '¿Cuál es el proceso de pago?',
    a: 'Manejamos un esquema de 50% al inicio para iniciar la fabricación y el 50% restante contra entrega. Aceptamos transferencias bancarias, efectivo y tarjetas.',
  },
];

export default function FAQ() {
  const { ref, inView } = useInView();
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section className="py-20 bg-white">
      <div ref={ref} className="max-w-3xl mx-auto px-5">
        <div
          className={`text-center mb-14 transition-all duration-700 ${
            inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <span className="text-[#1A8FBB] text-sm font-semibold uppercase tracking-widest">
            Preguntas frecuentes
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0B2545] mt-2 mb-4">
            Resolvemos tus dudas
          </h2>
          <p className="text-gray-500 leading-relaxed">
            ¿Tienes más preguntas? Escríbenos por WhatsApp y te respondemos al instante.
          </p>
        </div>

        <div className="space-y-3">
          {faqs.map((faq, i) => (
            <div
              key={i}
              className={`border border-gray-100 rounded-xl overflow-hidden transition-all duration-500 ${
                inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
              } ${open === i ? 'border-[#1A8FBB]/40 shadow-md' : 'hover:border-gray-200'}`}
              style={{ transitionDelay: `${i * 60}ms` }}
            >
              <button
                className="w-full flex items-center justify-between gap-4 p-5 text-left"
                onClick={() => setOpen(open === i ? null : i)}
              >
                <span
                  className={`font-semibold text-sm leading-snug transition-colors ${
                    open === i ? 'text-[#1A8FBB]' : 'text-[#0B2545]'
                  }`}
                >
                  {faq.q}
                </span>
                <ChevronDown
                  size={18}
                  className={`text-[#1A8FBB] flex-shrink-0 transition-transform duration-300 ${
                    open === i ? 'rotate-180' : ''
                  }`}
                />
              </button>
              <div
                className={`overflow-hidden transition-all duration-300 ${
                  open === i ? 'max-h-48' : 'max-h-0'
                }`}
              >
                <p className="px-5 pb-5 text-gray-500 text-sm leading-relaxed">
                  {faq.a}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
