import { Link } from 'react-router-dom';
import { Reveal } from '../components/Reveal';
import { services } from '../data/services';
import { ArrowRight, Wrench, Palette, Home, Truck, Hammer } from 'lucide-react';
import { FaWhatsapp } from 'react-icons/fa';
import { WA_NUMBER } from '../data/site';
import { motion } from 'framer-motion';

const serviceIcons = {
    diseno: <Palette size={24} />,
    domicilio: <Truck size={24} />,
    personalizados: <Hammer size={24} />
};

export default function ServicesPage() {
    return (
        <main className="bg-[#061230] min-h-screen">
            {/* Minimalist Hero Section */}
            <section className="relative h-[65vh] min-h-[550px] flex items-center overflow-hidden pt-20">
                <div className="absolute inset-0">
                    <img
                        src="https://images.unsplash.com/photo-1556911220-e15b29be8c8f?q=80&w=2000&auto=format&fit=crop"
                        className="w-full h-full object-cover opacity-30 scale-105"
                        alt="Nuestros Servicios"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#061230] via-[#061230]/60 to-transparent" />
                </div>

                <div className="relative max-w-6xl mx-auto px-5 w-full text-center">
                    <Reveal y={30}>
                        <span className="text-[#22BDDD] text-[12px] font-black uppercase tracking-[0.3em] mb-4 block">
                            Nuestros Servicios
                        </span>
                        <h1 className="text-4xl md:text-7xl font-bold text-white mb-6 uppercase tracking-tighter">
                            Soluciones <span className="text-[#22BDDD]">Profesionales</span>
                        </h1>
                        <p className="text-white/70 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed mb-10 font-light">
                            Transformamos tus ideas en realidad con diseño personalizado, instalación a domicilio y muebles hechos a tu medida con precisión milimétrica.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <a
                                href={`https://wa.me/${WA_NUMBER}?text=${encodeURIComponent('Hola Decorforma, estoy interesado en sus servicios profesionales y me gustaría realizar una consulta.')}`}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center justify-center gap-3 bg-[#25D366] hover:bg-[#1fba57] text-white font-bold px-10 py-5 rounded-2xl transition-all shadow-xl shadow-green-900/40 hover:scale-105 active:scale-95 group"
                            >
                                <FaWhatsapp size={22} className="group-hover:rotate-12 transition-transform" />
                                Cotizar mi Proyecto
                            </a>
                        </div>
                    </Reveal>
                </div>
            </section>

            {/* Restored Image-Rich Services Grid */}
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
                        {services.map((service, index) => (
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
                        ))}
                    </div>
                </div>
            </section>

            {/* Improved 4-Step Process Section */}
            <section className="py-32 px-5 bg-white/[0.02] border-y border-white/5 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-96 h-96 bg-[#22BDDD]/5 blur-[120px] rounded-full pointer-events-none" />

                <div className="max-w-7xl mx-auto relative z-10">
                    <Reveal y={20} width="100%">
                        <div className="text-center mb-24">
                            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 uppercase tracking-tight">
                                NUESTRO <span className="text-[#22BDDD]">PROCESO</span>
                            </h2>
                            <p className="text-white/40 text-lg max-w-2xl mx-auto font-light">
                                Un método ágil y profesional para garantizar resultados excepcionales.
                            </p>
                        </div>
                    </Reveal>

                    <div className="grid md:grid-cols-4 gap-8">
                        {[
                            { step: '01', title: 'Consulta', desc: 'Analizamos necesidades y espacio disponible.' },
                            { step: '02', title: 'Diseño', desc: 'Desarrollamos plano técnico y renders 3D.' },
                            { step: '03', title: 'Producción', desc: 'Fabricamos con precisión y materiales premium.' },
                            { step: '04', title: 'Instalación', desc: 'Instalación impecable y limpieza final.' }
                        ].map((item, index) => (
                            <Reveal key={index} delay={index * 0.1} y={30}>
                                <div className="text-center group">
                                    <div className="w-16 h-16 rounded-full bg-gradient-to-br from-[#1A8FBB] to-[#22BDDD] flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 shadow-xl">
                                        <span className="text-white font-black text-xl">{item.step}</span>
                                    </div>
                                    <h3 className="text-lg font-black text-white mb-3 uppercase tracking-tight">{item.title}</h3>
                                    <p className="text-white/40 text-sm leading-relaxed max-w-[180px] mx-auto font-light">{item.desc}</p>
                                </div>
                            </Reveal>
                        ))}
                    </div>
                </div>
            </section>

            {/* Improved CTA Section with Home Icon & 3D Editor Link */}
            <section className="pb-32 px-5 mt-32">
                <Reveal y={20} width="100%">
                    <div className="max-w-4xl mx-auto rounded-[3.5rem] bg-gradient-to-br from-[#0B2545] to-[#061230] border border-white/10 p-12 md:p-20 text-center shadow-2xl relative overflow-hidden">
                        <div className="absolute inset-0 bg-white/5 backdrop-blur-3xl rounded-[3.5rem] pointer-events-none" />

                        <div className="relative z-10">
                            <div className="flex items-center justify-center mb-8">
                                <Home className="text-[#22BDDD] mr-4" size={40} />
                                <h2 className="text-3xl md:text-5xl font-bold text-white leading-none tracking-tighter uppercase">¿LISTO PARA <br />TRANSFORMAR?</h2>
                            </div>
                            <p className="text-white/50 mb-12 text-lg md:text-xl max-w-xl mx-auto font-light leading-relaxed">
                                Cuéntanos sobre tu proyecto y te asesoraremos con la mejor solución técnica y estética.
                            </p>
                            <div className="flex flex-col sm:flex-row gap-6 justify-center">
                                <Link
                                    to="/catalogo"
                                    className="inline-flex items-center justify-center gap-3 bg-white text-[#061230] font-black px-10 py-5 rounded-2xl transition-all shadow-xl hover:scale-105 active:scale-95 group text-sm"
                                >
                                    VER CATÁLOGO
                                    <ArrowRight size={18} className="group-hover:translate-x-2 transition-transform" />
                                </Link>
                                <Link
                                    to="/editor"
                                    className="inline-flex items-center justify-center gap-3 border-2 border-[#22BDDD] text-[#22BDDD] hover:bg-[#22BDDD] hover:text-white font-black px-10 py-5 rounded-2xl transition-all hover:scale-105 active:scale-95 text-sm"
                                >
                                    <Hammer size={22} />
                                    DISEÑAR AHORA
                                </Link>
                            </div>
                        </div>
                    </div>
                </Reveal>
            </section>
        </main>
    );
}
