import { Link } from 'react-router-dom';
import { Reveal } from '../components/Reveal';
import { services } from '../data/services';
import { ArrowRight, Wrench, Palette, Home, Truck, Hammer } from 'lucide-react';
import { motion } from 'framer-motion';

const serviceIcons = {
  diseno: <Palette size={24} />,
  domicilio: <Truck size={24} />,
  personalizados: <Hammer size={24} />
};

export default function ServicesPage() {
    return (
        <main className="bg-[#061230] min-h-screen">
            {/* Services Hero */}
            <section className="relative h-[60vh] min-h-[500px] flex items-center overflow-hidden pt-20">
                <div className="absolute inset-0">
                    <motion.img
                        initial={{ scale: 1.1 }}
                        animate={{ scale: 1 }}
                        transition={{ duration: 1.5, ease: 'easeOut' }}
                        src="https://images.unsplash.com/photo-1586023492125-27b2c045efd7?q=80&w=2000&auto=format&fit=crop"
                        className="w-full h-full object-cover opacity-40"
                        alt="Servicios Decorforma"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#061230] via-[#061230]/60 to-transparent" />
                    <div className="absolute inset-0 bg-gradient-to-r from-[#061230]/80 via-transparent to-transparent" />
                </div>

                <div className="relative max-w-6xl mx-auto px-5 w-full">
                    <Reveal y={30}>
                        <span className="text-[#22BDDD] text-[12px] font-black uppercase tracking-[0.3em] mb-4 block">
                            Nuestros Servicios
                        </span>
                        <h1 className="text-4xl md:text-7xl font-bold text-white mb-6 leading-tight">
                            Soluciones <span className="text-[#22BDDD]">Profesionales</span>
                        </h1>
                        <p className="text-white/70 text-lg md:text-xl max-w-2xl leading-relaxed">
                            Transformamos tus ideas en realidad con diseño personalizado, instalación a domicilio y muebles hechos a tu medida.
                        </p>
                    </Reveal>
                </div>
            </section>

            {/* Services Grid */}
            <section className="py-32 px-5">
                <div className="max-w-6xl mx-auto">
                        <Reveal y={20} width="100%">
                            <div className="text-center mb-20">
                                <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 leading-tight">
                                    Todo lo que necesitas para <span className="text-[#22BDDD]">tu proyecto</span>
                                </h2>
                                <p className="text-white/60 text-lg max-w-2xl mx-auto">
                                    Ofrecemos servicios integrales cubriendo cada etapa de tu proyecto, desde el diseño inicial hasta la instalación final.
                                </p>
                            </div>
                        </Reveal>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {services.map((service, index) => (
                            <Reveal key={service.slug} delay={index * 0.1} y={30}>
                                <Link
                                    to={`/servicios/${service.slug}`}
                                    className="group relative block bg-[#0B2545]/40 backdrop-blur-[10px] rounded-[2.5rem] overflow-hidden border border-white/10 hover:border-[#22BDDD]/30 transition-all duration-500"
                                >
                                    <div className="p-8">
                                        <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[#1A8FBB] to-[#22BDDD] flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                                            {serviceIcons[service.slug as keyof typeof serviceIcons] || <Wrench size={24} />}
                                        </div>
                                        
                                        <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-[#22BDDD] transition-colors">
                                            {service.label}
                                        </h3>
                                        
                                        <p className="text-white/60 text-sm leading-relaxed mb-6">
                                            {service.description}
                                        </p>

                                        <div className="flex items-center gap-2 text-[#22BDDD] font-bold text-sm group-hover:gap-3 transition-all">
                                            Explorar servicio
                                            <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                                        </div>
                                    </div>

                                    <div className="absolute inset-0 bg-gradient-to-t from-[#22BDDD]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                                </Link>
                            </Reveal>
                        ))}
                    </div>
                </div>
            </section>

            {/* Process Section */}
            <section className="py-32 px-5 bg-[#0B2545]/20">
                <div className="max-w-6xl mx-auto">
                    <Reveal y={20} width="100%">
                        <div className="text-center mb-20">
                            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 leading-tight">
                                Nuestro <span className="text-[#22BDDD]">Proceso</span>
                            </h2>
                            <p className="text-white/60 text-lg max-w-2xl mx-auto">
                                Un método probado que garantiza resultados excepcionales en cada proyecto.
                            </p>
                        </div>
                    </Reveal>

                    <div className="grid md:grid-cols-4 gap-8">
                        {[
                            { step: '01', title: 'Consulta', desc: 'Analizamos tus necesidades y espacio disponible' },
                            { step: '02', title: 'Diseño', desc: 'Creamos planos y renders 3D de tu proyecto' },
                            { step: '03', title: 'Producción', desc: 'Fabricamos con materiales de primera calidad' },
                            { step: '04', title: 'Instalación', desc: 'Instalación profesional y limpieza final' }
                        ].map((item, index) => (
                            <Reveal key={index} delay={index * 0.1} y={30}>
                                <div className="text-center">
                                    <div className="w-16 h-16 rounded-full bg-gradient-to-br from-[#1A8FBB] to-[#22BDDD] flex items-center justify-center mx-auto mb-6">
                                        <span className="text-white font-bold text-xl">{item.step}</span>
                                    </div>
                                    <h3 className="text-xl font-bold text-white mb-3">{item.title}</h3>
                                    <p className="text-white/60 text-sm">{item.desc}</p>
                                </div>
                            </Reveal>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="pb-32 px-5">
                <Reveal y={20} width="100%">
                    <div className="max-w-4xl mx-auto rounded-[3rem] bg-gradient-to-br from-[#0B2545] to-[#061230] border border-[#1A8FBB]/20 p-12 md:p-20 text-center shadow-2xl">
                        <div className="flex items-center justify-center mb-6">
                            <Home className="text-[#22BDDD] mr-3" size={32} />
                            <h2 className="text-3xl md:text-5xl font-bold text-white">¿Listo para transformar tu espacio?</h2>
                        </div>
                        <p className="text-white/50 mb-10 text-lg">
                            Cuéntanos sobre tu proyecto y te asesoraremos con la mejor solución.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <Link
                                to="/catalogo"
                                className="inline-flex items-center justify-center gap-3 bg-[#1A8FBB] hover:bg-[#22BDDD] text-white font-bold px-10 py-5 rounded-2xl transition-all shadow-xl shadow-[#1A8FBB]/20 hover:scale-105 active:scale-95 group"
                            >
                                <Palette size={22} className="group-hover:rotate-12 transition-transform" />
                                Ver Catálogo
                            </Link>
                            <Link
                                to="/editor"
                                className="inline-flex items-center justify-center gap-3 border-2 border-[#22BDDD] text-[#22BDDD] hover:bg-[#22BDDD] hover:text-white font-bold px-10 py-5 rounded-2xl transition-all hover:scale-105 active:scale-95"
                            >
                                <Hammer size={22} />
                                Diseñar Ahora
                            </Link>
                        </div>
                    </div>
                </Reveal>
            </section>
        </main>
    );
}
