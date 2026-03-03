import { services } from '../data/services';
import { Reveal } from '../components/Reveal';
import { Link } from 'react-router-dom';
import { IoArrowForward } from 'react-icons/io5';
import { motion } from 'framer-motion';

export default function ServicesOverviewPage() {
    return (
        <main className="bg-white min-h-screen pt-32 lg:pt-48 pb-20">
            <div className="max-w-7xl mx-auto px-6 lg:px-12">
                <header className="mb-20 text-center lg:text-left max-w-4xl">
                    <Reveal y={20}>
                        <span className="text-[#22BDDD] text-[12px] font-black uppercase tracking-[0.3em] mb-4 block">
                            Excelencia en Melamina
                        </span>
                        <h1 className="text-5xl md:text-7xl font-black text-[#0B2545] tracking-tighter leading-none mb-8">
                            NUESTROS <br />
                            <span className="text-gray-200">SERVICIOS</span>
                        </h1>
                        <p className="text-[#666] text-lg md:text-xl leading-relaxed max-w-2xl">
                            Desde la conceptualización en 3D hasta la instalación final, nos encargamos de que cada detalle sea perfecto.
                        </p>
                    </Reveal>
                </header>

                <section className="grid lg:grid-cols-2 gap-8">
                    {services.map((service, i) => (
                        <Reveal key={service.slug} delay={i * 0.1} y={30}>
                            <Link
                                to={`/servicios/${service.slug}`}
                                className="group relative flex flex-col md:flex-row h-full bg-gray-50 rounded-[2.5rem] overflow-hidden hover:bg-[#061230] transition-all duration-700"
                            >
                                {/* Image Section */}
                                <div className="md:w-1/2 overflow-hidden h-64 md:h-auto">
                                    <motion.img
                                        whileHover={{ scale: 1.1 }}
                                        transition={{ duration: 1.2 }}
                                        src={service.image}
                                        className="w-full h-full object-cover"
                                        alt={service.label}
                                    />
                                </div>

                                {/* Content Section */}
                                <div className="md:w-1/2 p-10 flex flex-col justify-center">
                                    <div className="mb-4 text-[#22BDDD]">
                                        <service.icon size={28} />
                                    </div>
                                    <h3 className="text-2xl font-black text-[#0B2545] group-hover:text-white mb-4 leading-tight uppercase tracking-tight transition-colors">
                                        {service.label}
                                    </h3>
                                    <p className="text-[#888] group-hover:text-[#666] text-sm mb-8 line-clamp-3 transition-colors">
                                        {service.description}
                                    </p>
                                    <div className="flex items-center gap-2 text-[#22BDDD] font-black text-xs uppercase tracking-[0.2em]">
                                        Saber más <IoArrowForward className="group-hover:translate-x-2 transition-transform" />
                                    </div>
                                </div>
                            </Link>
                        </Reveal>
                    ))}
                </section>

                {/* Custom CTA */}
                <section className="mt-32">
                    <Reveal y={20}>
                        <div className="bg-[#0B2545] rounded-[3rem] p-12 md:p-20 text-center relative overflow-hidden">
                            <div className="absolute top-0 right-0 w-64 h-64 bg-[#1A8FBB]/10 rounded-full blur-3xl -mr-32 -mt-32" />
                            <div className="relative z-10">
                                <h2 className="text-3xl md:text-5xl font-black text-white mb-6 uppercase tracking-tight">
                                    ¿Tienes una idea específica?
                                </h2>
                                <p className="text-white/50 mb-10 max-w-2xl mx-auto">
                                    Si buscas algo que no está en la lista, nuestro equipo de diseño puede hacerlo realidad.
                                    Desde muebles artísticos hasta optimizaciones complejas de espacio.
                                </p>
                                <Link
                                    to="/#contacto"
                                    className="inline-flex items-center justify-center bg-[#22BDDD] hover:bg-[#1A8FBB] text-white font-black px-10 py-5 rounded-2xl transition-all hover:scale-105 uppercase tracking-widest text-sm"
                                >
                                    Consultar ahora
                                </Link>
                            </div>
                        </div>
                    </Reveal>
                </section>
            </div>
        </main>
    );
}
