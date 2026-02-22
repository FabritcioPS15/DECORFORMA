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
    <section id="beneficios" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-5">
        <Reveal width="100%">
          <div className="text-center mb-14">
            <span className="text-[#1A8FBB] text-sm font-semibold uppercase tracking-widest">
              Por qué elegirnos
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0B2545] mt-2 mb-4">
              Todo lo que necesitas en un solo lugar
            </h2>
            <p className="text-gray-500 max-w-xl mx-auto leading-relaxed">
              Desde el primer diseño hasta la instalación final, acompañamos cada
              etapa de tu proyecto con profesionalismo y dedicación.
            </p>
          </div>
        </Reveal>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {benefits.map((b, i) => {
            const Icon = b.icon;
            return (
              <Reveal key={b.title} delay={i * 0.1} width="100%">
                <div className="group bg-white border border-gray-100 rounded-2xl p-7 hover:shadow-xl hover:border-[#1A8FBB]/30 transition-all duration-500 hover:-translate-y-1">
                  <div className="w-12 h-12 rounded-xl bg-[#E8F6FB] group-hover:bg-[#1A8FBB] flex items-center justify-center mb-5 transition-colors duration-300">
                    <Icon
                      size={22}
                      className="text-[#1A8FBB] group-hover:text-white transition-colors duration-300"
                    />
                  </div>
                  <h3 className="text-lg font-bold text-[#0B2545] mb-2">
                    {b.title}
                  </h3>
                  <p className="text-gray-500 text-sm leading-relaxed">{b.desc}</p>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
