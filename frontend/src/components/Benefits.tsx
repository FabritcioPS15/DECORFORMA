import { Ruler, Sparkles, Package, Wrench, Clock, ShieldCheck } from 'lucide-react';
import { Reveal } from './Reveal';

const benefits = [
  {
    icon: Ruler,
    title: 'Diseño Personalizado',
    desc: 'Cada mueble es único, diseñado exactamente según tus necesidades y el espacio disponible.',
  },
  {
    icon: Sparkles,
    title: 'Acabados Modernos',
    desc: 'Amplia gama de colores y texturas en melamina de alta calidad con bordes perfectos.',
  },
  {
    icon: Package,
    title: 'Fabricación a Medida',
    desc: 'Producción artesanal y precisa con maquinaria de última generación para un acabado impecable.',
  },
  {
    icon: Wrench,
    title: 'Instalación Profesional',
    desc: 'Nuestro equipo especializado instala tus muebles en tiempo récord y con garantía total.',
  },
  {
    icon: Clock,
    title: 'Entrega Puntual',
    desc: 'Cumplimos los plazos acordados. Tu tiempo es valioso y lo respetamos.',
  },
  {
    icon: ShieldCheck,
    title: 'Garantía de Calidad',
    desc: 'Materiales certificados y 2 años de garantía en todos nuestros productos.',
  },
];

export default function Benefits() {
  return (
    <section id="beneficios" className="py-24 bg-white border-y border-gray-100">
      <div className="max-w-7xl mx-auto px-6">
        <Reveal width="100%">
          <div className="text-center mb-16">
            <span className="text-decor-accent text-[10px] font-black uppercase tracking-[0.4em] mb-4 block">
              Por qué elegirnos
            </span>
            <h2 className="text-4xl md:text-5xl font-serif text-decor-navy mt-2 mb-4 italic">
              Excelencia en cada detalle
            </h2>
            <p className="text-gray-500 max-w-xl mx-auto leading-relaxed font-light text-lg">
              Desde el primer diseño hasta la instalación final, acompañamos cada
              etapa de tu proyecto con profesionalismo y dedicación.
            </p>
          </div>
        </Reveal>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-0 border-l border-t border-gray-100">
          {benefits.map((b, i) => {
            const Icon = b.icon;
            return (
              <Reveal key={b.title} delay={i * 0.1} width="100%">
                <div className="group bg-white border-r border-b border-gray-100 p-10 hover:bg-decor-navy transition-all duration-500 h-full text-center sm:text-left flex flex-col items-center sm:items-start">
                  <div className="w-12 h-12 rounded-none bg-gray-50 border border-gray-200 group-hover:bg-decor-accent group-hover:border-decor-accent flex items-center justify-center mb-6 transition-colors duration-500 shrink-0">
                    <Icon
                      size={20}
                      className="text-decor-navy group-hover:text-white transition-colors duration-500"
                    />
                  </div>
                  <h3 className="text-lg font-serif text-decor-navy mb-3 group-hover:text-white transition-colors duration-500">
                    {b.title}
                  </h3>
                  <p className="text-gray-500 text-sm leading-relaxed font-light group-hover:text-white/70 transition-colors duration-500">{b.desc}</p>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
