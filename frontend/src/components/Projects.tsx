import { ArrowRight } from 'lucide-react';
import { Reveal } from './Reveal';

const projects = [
  {
    title: 'Closet Principal',
    category: 'Dormitorio',
    image:
      'https://images.pexels.com/photos/6585598/pexels-photo-6585598.jpeg?auto=compress&cs=tinysrgb&w=700',
  },
  {
    title: 'Cocina Integral',
    category: 'Cocina',
    image:
      'https://images.pexels.com/photos/2724749/pexels-photo-2724749.jpeg?auto=compress&cs=tinysrgb&w=700',
  },
  {
    title: 'Oficina Ejecutiva',
    category: 'Oficina',
    image:
      'https://images.pexels.com/photos/3771691/pexels-photo-3771691.jpeg?auto=compress&cs=tinysrgb&w=700',
  },
  {
    title: 'Sala de Estar',
    category: 'Living',
    image:
      'https://images.pexels.com/photos/1350789/pexels-photo-1350789.jpeg?auto=compress&cs=tinysrgb&w=700',
  },
  {
    title: 'Dormitorio Juvenil',
    category: 'Dormitorio',
    image:
      'https://images.pexels.com/photos/6312023/pexels-photo-6312023.jpeg?auto=compress&cs=tinysrgb&w=700',
  },
  {
    title: 'Biblioteca Empotrada',
    category: 'Estudio',
    image:
      'https://images.pexels.com/photos/2227832/pexels-photo-2227832.jpeg?auto=compress&cs=tinysrgb&w=700',
  },
];

export default function Projects() {
  return (
    <section id="proyectos" className="py-24 bg-gray-50 border-y border-gray-100">
      <div className="max-w-7xl mx-auto px-6">
        <Reveal width="100%">
          <div className="text-center mb-16">
            <span className="text-decor-accent text-[10px] font-black uppercase tracking-[0.4em] mb-4 block">
              Portafolio
            </span>
            <h2 className="text-4xl md:text-5xl font-serif text-decor-navy mt-2 mb-4 italic">
              Nuestros Proyectos
            </h2>
            <p className="text-gray-500 max-w-xl mx-auto leading-relaxed font-light text-lg">
              Cada proyecto es una historia de transformación. Explora los espacios que hemos diseñado y construido a medida.
            </p>
          </div>
        </Reveal>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-1">
          {projects.map((p, i) => (
            <Reveal key={p.title} delay={i * 0.1} width="100%">
              <div
                className="group relative rounded-none overflow-hidden border border-white/5 bg-white cursor-pointer"
              >
                <div className="aspect-[4/3] overflow-hidden">
                  <img
                    src={p.image}
                    alt={p.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000 grayscale-[0.2] group-hover:grayscale-0"
                    loading="lazy"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-decor-navy/90 via-transparent to-transparent opacity-80 group-hover:opacity-90 transition-opacity duration-500" />
                <div className="absolute bottom-0 left-0 right-0 p-8 flex flex-col sm:flex-row items-center sm:items-end justify-between transform translate-y-2 group-hover:translate-y-0 transition-transform duration-500 text-center sm:text-left gap-4 sm:gap-0">
                  <div className="flex flex-col items-center sm:items-start">
                    <span className="text-decor-accent text-[10px] font-black uppercase tracking-[0.3em]">
                      {p.category}
                    </span>
                    <h3 className="text-white font-serif text-2xl leading-tight mt-2 tracking-wide group-hover:text-decor-accent transition-colors">
                      {p.title}
                    </h3>
                  </div>
                  <a
                    href="https://wa.me/51999999999?text=Quiero%20un%20proyecto%20similar"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-none bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500 hover:bg-decor-accent flex-shrink-0"
                    aria-label="Quiero algo similar"
                  >
                    <ArrowRight size={18} className="text-white" />
                  </a>
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal width="100%" delay={0.5}>
          <div className="text-center mt-16">
            <a
              href="/proyectos"
              className="inline-flex items-center gap-4 bg-decor-navy text-white px-10 py-4 rounded-none font-bold text-xs uppercase tracking-[0.2em] shadow-xl hover:bg-decor-accent transition-all duration-300"
            >
              Ver galería completa
              <ArrowRight size={16} />
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
