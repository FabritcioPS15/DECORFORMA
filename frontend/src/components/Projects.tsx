import { ArrowRight } from 'lucide-react';
import { useInView } from '../hooks/useInView';

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
  const { ref, inView } = useInView();

  return (
    <section id="proyectos" className="py-20 bg-[#F4F8FC]">
      <div ref={ref} className="max-w-6xl mx-auto px-5">
        <div
          className={`text-center mb-14 transition-all duration-700 ${
            inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <span className="text-[#1A8FBB] text-sm font-semibold uppercase tracking-widest">
            Portafolio
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0B2545] mt-2 mb-4">
            Proyectos que hablan por sí solos
          </h2>
          <p className="text-gray-500 max-w-xl mx-auto leading-relaxed">
            Cada proyecto es una historia de transformación. Conoce algunos de
            los espacios que hemos renovado con muebles a medida.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((p, i) => (
            <div
              key={p.title}
              className={`group relative rounded-2xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-500 hover:-translate-y-1 ${
                inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
              style={{ transitionDelay: `${i * 80}ms` }}
            >
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src={p.image}
                  alt={p.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-[#0B2545]/80 via-transparent to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-5 flex items-end justify-between">
                <div>
                  <span className="text-[#22BDDD] text-xs font-semibold uppercase tracking-wide">
                    {p.category}
                  </span>
                  <h3 className="text-white font-bold text-lg leading-tight mt-0.5">
                    {p.title}
                  </h3>
                </div>
                <a
                  href="https://wa.me/51999999999?text=Quiero%20un%20proyecto%20similar"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded-full bg-[#1A8FBB] flex items-center justify-center opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-300 hover:bg-[#0F6E95] flex-shrink-0"
                  aria-label="Quiero algo similar"
                >
                  <ArrowRight size={16} className="text-white" />
                </a>
              </div>
            </div>
          ))}
        </div>

        <div
          className={`text-center mt-10 transition-all duration-700 delay-500 ${
            inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
          }`}
        >
          <a
            href="https://wa.me/51999999999?text=Hola%2C%20quiero%20ver%20m%C3%A1s%20proyectos"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-[#1A8FBB] hover:text-[#0F6E95] font-semibold transition-colors"
          >
            Ver más proyectos
            <ArrowRight size={18} />
          </a>
        </div>
      </div>
    </section>
  );
}
