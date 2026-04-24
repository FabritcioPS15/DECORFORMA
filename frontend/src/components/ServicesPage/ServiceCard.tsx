import React from 'react';
import { Link } from 'react-router-dom';
import { Reveal } from '../Reveal';
import { ArrowRight, Wrench } from 'lucide-react';

const serviceIcons = {
  diseno: <Wrench size={24} />,
  domicilio: <Wrench size={24} />,
  personalizados: <Wrench size={24} />
};

interface ServiceCardProps {
  service: {
    slug: string;
    label: string;
    description: string;
    image: string;
  };
  index: number;
}

export const ServiceCard = React.memo(({ service, index }: ServiceCardProps) => {
  return (
    <Reveal key={service.slug} delay={index * 0.1} y={30}>
      <Link
        to={`/servicios/${service.slug}`}
        className="group relative block h-[500px] rounded-[3rem] overflow-hidden bg-white/5 border border-white/10 transition-all duration-500 hover:shadow-2xl hover:shadow-[#22BDDD]/10"
      >
        <div className="absolute inset-0">
          <img
            src={service.image}
            className="w-full h-full object-cover opacity-40 group-hover:scale-110 transition-transform duration-700"
            alt={service.label}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#061230] via-[#061230]/70 to-transparent group-hover:via-[#061230]/40 transition-all duration-500" />
        </div>

        <div className="absolute inset-0 p-10 flex flex-col justify-end">
          <div className="w-14 h-14 rounded-2xl bg-[#22BDDD] flex items-center justify-center text-[#061230] mb-6 shadow-lg transform -translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
            {serviceIcons[service.slug as keyof typeof serviceIcons] || <Wrench size={24} />}
          </div>
          <h3 className="text-2xl font-black text-white mb-4 group-hover:text-[#22BDDD] transition-colors leading-tight uppercase tracking-tighter">
            {service.label}
          </h3>
          <p className="text-white/60 text-sm leading-relaxed mb-8 opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-500 delay-100">
            {service.description}
          </p>
          <div className="flex items-center gap-3 text-[#22BDDD] font-black text-[10px] uppercase tracking-widest leading-none">
            EXPLORAR SERVICIO
            <ArrowRight size={16} className="group-hover:translate-x-3 transition-transform duration-300" />
          </div>
        </div>
      </Link>
    </Reveal>
  );
});
