import { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { Reveal } from './Reveal';

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
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section className="py-24 bg-white border-y border-gray-100">
      <div className="max-w-4xl mx-auto px-6">
        <Reveal width="100%">
          <div className="text-center mb-16">
            <span className="text-decor-accent text-[10px] font-black uppercase tracking-[0.4em] mb-4 block">
              Preguntas frecuentes
            </span>
            <h2 className="text-4xl md:text-5xl font-serif text-decor-navy mt-2 mb-4 italic">
              Resolvemos tus dudas
            </h2>
            <p className="text-gray-500 leading-relaxed font-light text-lg">
              ¿Tienes más preguntas? Escríbenos por WhatsApp y te respondemos de inmediato.
            </p>
          </div>
        </Reveal>

        <div className="space-y-4">
          {faqs.map((faq, i) => (
            <Reveal key={i} delay={i * 0.05} width="100%">
              <div
                className={`border rounded-none overflow-hidden transition-all duration-500 bg-white ${open === i ? 'border-decor-navy shadow-lg' : 'border-gray-200 hover:border-gray-300'}`}
              >
                <button
                  className="w-full flex items-center justify-between gap-4 p-6 text-left focus:outline-none"
                  onClick={() => setOpen(open === i ? null : i)}
                >
                  <span
                    className={`font-serif text-lg leading-snug transition-colors ${open === i ? 'text-decor-accent italic' : 'text-decor-navy'
                      }`}
                  >
                    {faq.q}
                  </span>
                  <ChevronDown
                    size={20}
                    className={`text-decor-navy flex-shrink-0 transition-transform duration-500 ${open === i ? 'rotate-180 text-decor-accent' : ''
                      }`}
                  />
                </button>
                <div
                  className={`overflow-hidden transition-all duration-500 ease-in-out ${open === i ? 'max-h-64 opacity-100' : 'max-h-0 opacity-0'
                    }`}
                >
                  <p className="px-6 pb-6 text-gray-500 text-base leading-relaxed font-light border-t border-gray-100 pt-4 mt-2 text-center sm:text-left">
                    {faq.a}
                  </p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
