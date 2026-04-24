import { useMemo } from 'react';
import { Reveal } from '../Reveal';
import { ServiceCard } from './ServiceCard';
import { services } from '../../data/services';

export function ServicesGrid() {
  const servicesList = useMemo(() => services, []);

  return (
    <section className="py-32 px-5">
      <div className="max-w-7xl mx-auto">
        <Reveal y={20} width="100%">
          <div className="text-center mb-24">
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 leading-tight uppercase tracking-tighter">
              TODO LO QUE <span className="text-[#22BDDD]">NECESITAS</span>
            </h2>
            <p className="text-white/60 text-lg max-w-2xl mx-auto font-light">
              Ofrecemos servicios integrales cubriendo cada etapa de tu proyecto con excelencia técnica.
            </p>
          </div>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {servicesList.map((service, index) => (
            <ServiceCard key={service.slug} service={service} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
